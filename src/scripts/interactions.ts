class SiteNavigation {
  private header = document.querySelector<HTMLElement>('.header');
  private button = document.querySelector<HTMLButtonElement>('.menu-toggle');
  private nav = document.querySelector<HTMLElement>('#main-nav');
  private dropdown = document.querySelector<HTMLElement>(
    '[data-services-menu]',
  );
  private dropdownButton =
    this.dropdown?.querySelector<HTMLButtonElement>('.dropdown-toggle');
  private panel = document.querySelector<HTMLElement>('#services-dropdown');
  private desktop = matchMedia('(min-width: 1000px)');
  private hover = matchMedia('(hover: hover)');
  private closeTimer: ReturnType<typeof setTimeout> | undefined;
  private compact = false;
  private scheduled = false;

  constructor() {
    if (!this.header || !this.nav) return;
    this.button?.addEventListener('click', () =>
      this.setOpen(this.button?.getAttribute('aria-expanded') !== 'true'),
    );
    this.nav.querySelectorAll('a').forEach((link) =>
      link.addEventListener('click', () => {
        this.setDropdown(false);
        this.setOpen(false);
      }),
    );
    this.dropdownButton?.addEventListener('click', () =>
      this.setDropdown(
        this.dropdownButton?.getAttribute('aria-expanded') !== 'true',
      ),
    );
    this.dropdown?.addEventListener('pointerenter', () => {
      if (this.desktop.matches && this.hover.matches) this.setDropdown(true);
    });
    this.dropdown?.addEventListener('pointerleave', () => {
      if (this.desktop.matches)
        this.closeTimer = setTimeout(() => this.setDropdown(false), 160);
    });
    this.dropdown?.addEventListener('focusin', (event) => {
      if (
        this.desktop.matches &&
        (event.target as HTMLElement).matches('.nav-link')
      )
        this.setDropdown(true);
    });
    this.dropdown?.addEventListener('focusout', (event) => {
      if (!this.dropdown?.contains(event.relatedTarget as Node))
        this.setDropdown(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      if (this.dropdownButton?.getAttribute('aria-expanded') === 'true') {
        this.setDropdown(false);
        this.dropdownButton.focus();
      } else if (this.button?.getAttribute('aria-expanded') === 'true') {
        this.setOpen(false);
        this.button.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!this.header?.contains(event.target as Node)) {
        this.setDropdown(false);
        this.setOpen(false);
      }
    });
    this.desktop.addEventListener('change', () => {
      this.setOpen(false);
      this.setDropdown(false);
    });
    window.addEventListener(
      'scroll',
      () => {
        if (this.scheduled) return;
        this.scheduled = true;
        requestAnimationFrame(() => {
          this.updateCompact();
          this.scheduled = false;
        });
      },
      { passive: true },
    );
    this.updateCompact();
  }
  private updateCompact() {
    const compactAfter = Number(this.header?.dataset.compactAfter ?? 48);
    const expandBefore = Number(this.header?.dataset.expandBefore ?? 16);
    if (!this.compact && scrollY > compactAfter) this.compact = true;
    else if (this.compact && scrollY < expandBefore) this.compact = false;
    document.documentElement.classList.toggle('nav-compact', this.compact);
    const quote =
      this.header?.querySelector<HTMLAnchorElement>('.header-quote');
    if (quote) {
      if (this.compact) {
        quote.tabIndex = -1;
        quote.setAttribute('aria-hidden', 'true');
      } else {
        quote.removeAttribute('tabindex');
        quote.removeAttribute('aria-hidden');
      }
    }
  }
  private setOpen(open: boolean) {
    this.button?.setAttribute('aria-expanded', String(open));
    this.nav?.classList.toggle('open', open);
    if (!open) this.setDropdown(false);
    else this.nav?.querySelector<HTMLAnchorElement>('.nav-link')?.focus();
  }
  private setDropdown(open: boolean) {
    clearTimeout(this.closeTimer);
    this.dropdownButton?.setAttribute('aria-expanded', String(open));
    if (this.panel) this.panel.hidden = !open;
  }
}

class ServiceCarousel {
  private track: HTMLElement;
  private previous: HTMLButtonElement | null;
  private next: HTMLButtonElement | null;
  private index = 0;
  private lastIndex = 0;
  private visible = 1;
  private rtl = document.documentElement.dir === 'rtl';
  private motion = matchMedia('(prefers-reduced-motion: reduce)');
  constructor(private section: HTMLElement) {
    this.track = section.querySelector<HTMLElement>('.service-track')!;
    this.previous = section.querySelector<HTMLButtonElement>('[data-previous]');
    this.next = section.querySelector<HTMLButtonElement>('[data-next]');
    this.previous?.addEventListener('click', () => this.go(this.index - 1));
    this.next?.addEventListener('click', () => this.go(this.index + 1));
    this.track.addEventListener('scroll', () => this.update(), {
      passive: true,
    });
    this.track.addEventListener('keydown', (event) => {
      if (
        event.target !== this.track ||
        event.altKey ||
        event.metaKey ||
        event.ctrlKey
      )
        return;
      const moves: Record<string, number> = {
        ArrowRight: this.index + (this.rtl ? -1 : 1),
        ArrowLeft: this.index + (this.rtl ? 1 : -1),
        Home: 0,
        End: this.lastIndex,
      };
      if (event.key in moves) {
        event.preventDefault();
        this.go(moves[event.key]);
      }
    });
    new ResizeObserver(() => this.update()).observe(this.track);
    section.setAttribute('data-carousel-ready', '');
    this.update();
  }
  private update() {
    const cards = [
      ...this.track.querySelectorAll<HTMLElement>('.service-card'),
    ];
    if (!cards.length) return;
    const gap = Number.parseFloat(getComputedStyle(this.track).columnGap) || 0;
    const step = cards[0].getBoundingClientRect().width + gap;
    this.visible = Math.max(
      1,
      Math.round((this.track.clientWidth + gap) / step),
    );
    this.lastIndex = Math.max(0, cards.length - this.visible);
    this.index = Math.min(
      this.lastIndex,
      Math.max(0, Math.round(Math.abs(this.track.scrollLeft) / step)),
    );
    if (this.previous) this.previous.disabled = this.index === 0;
    if (this.next) this.next.disabled = this.index === this.lastIndex;
    const status = this.section.querySelector<HTMLElement>('.carousel-status');
    const formatter = new Intl.NumberFormat(document.documentElement.lang);
    const first = this.index + 1;
    const last = Math.min(cards.length, this.index + this.visible);
    const range =
      first === last
        ? formatter.format(first)
        : `${formatter.format(first)}–${formatter.format(last)}`;
    const text =
      this.section.dataset.status
        ?.replace('{range}', range)
        .replace('{total}', formatter.format(cards.length)) ?? '';
    if (status && status.textContent !== text) status.textContent = text;
  }
  private go(index: number) {
    index = Math.min(this.lastIndex, Math.max(0, index));
    const card =
      this.track.querySelectorAll<HTMLElement>('.service-card')[index];
    if (!card) return;
    const edge = this.track.getBoundingClientRect();
    const target = card.getBoundingClientRect();
    const style = getComputedStyle(this.track);
    const delta = this.rtl
      ? target.right - edge.right + Number.parseFloat(style.paddingRight)
      : target.left - edge.left - Number.parseFloat(style.paddingLeft);
    this.track.scrollBy({
      left: delta,
      behavior: this.motion.matches ? 'instant' : 'smooth',
    });
  }
}

class HeroVideo {
  private video = document.querySelector<HTMLVideoElement>('#hero-video');
  private button = document.querySelector<HTMLButtonElement>('.video-control');
  private motion = matchMedia('(prefers-reduced-motion: reduce)');
  constructor() {
    if (!this.video || !this.button) return;
    this.video.muted = true;
    this.video.addEventListener('playing', () => {
      this.video?.classList.add('ready');
      this.update(true);
    });
    this.video.addEventListener('pause', () => this.update(false));
    this.video.addEventListener('error', () => {
      this.video?.classList.remove('ready');
      if (this.button) this.button.hidden = true;
    });
    this.button.addEventListener('click', () =>
      this.video?.paused ? this.play() : this.video?.pause(),
    );
    this.motion.addEventListener('change', () => {
      if (this.motion.matches) this.video?.pause();
    });
    const connection = (
      navigator as Navigator & { connection?: { saveData: boolean } }
    ).connection;
    if (!this.motion.matches && !connection?.saveData) this.play();
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.video?.pause();
    });
  }
  private async play() {
    if (!this.video) return;
    if (!this.video.getAttribute('src'))
      this.video.src = this.video.dataset.src!;
    try {
      await this.video.play();
    } catch {
      this.update(false);
    }
  }
  private update(playing: boolean) {
    if (!this.button) return;
    this.button.setAttribute(
      'aria-label',
      (playing ? this.button.dataset.pause : this.button.dataset.play)!,
    );
    this.button.setAttribute('aria-pressed', String(playing));
    this.button.querySelector<HTMLElement>('[data-video-icon=play]')!.hidden =
      playing;
    this.button.querySelector<HTMLElement>('[data-video-icon=pause]')!.hidden =
      !playing;
  }
}

class QuotePreview {
  constructor() {
    const form = document.querySelector<HTMLFormElement>('#quote-form');
    const review = document.querySelector<HTMLElement>('#quote-review');
    if (!form || !review) return;
    const selectedService = new URLSearchParams(location.search).get('service');
    const serviceSelect = form.querySelector<HTMLSelectElement>(
      'select[name=service]',
    );
    if (
      serviceSelect &&
      [...serviceSelect.options].some(
        (option) => option.value === selectedService,
      )
    )
      serviceSelect.value = selectedService!;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const list = review.querySelector('dl')!;
      list.replaceChildren();
      form
        .querySelectorAll<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >('input, select, textarea')
        .forEach((field) => {
          const term = document.createElement('dt');
          term.textContent =
            field
              .closest('label')
              ?.querySelector('span')
              ?.textContent?.trim() ?? field.name;
          const value = document.createElement('dd');
          value.textContent =
            field instanceof HTMLSelectElement
              ? field.selectedOptions[0].text
              : field.value;
          if (field.name === 'phone') value.dir = 'ltr';
          list.append(term, value);
        });
      review.hidden = false;
      review.focus();
      review.scrollIntoView({
        block: 'nearest',
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
      });
    });
    document.getElementById('edit-request')?.addEventListener('click', () => {
      review.hidden = true;
      form.querySelector('input')?.focus();
    });
  }
}

new SiteNavigation();
new HeroVideo();
new QuotePreview();
document
  .querySelectorAll<HTMLElement>('[data-carousel]')
  .forEach((section) => new ServiceCarousel(section));
