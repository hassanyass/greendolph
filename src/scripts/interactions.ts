import { QuoteFormController } from './quote-form';
import { legacyServiceIds } from '../config/services';

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
  private cards: HTMLElement[];
  private previous: HTMLButtonElement | null;
  private next: HTMLButtonElement | null;
  private index = 0;
  private rtl = document.documentElement.dir === 'rtl';
  private motion = matchMedia('(prefers-reduced-motion: reduce)');
  constructor(private section: HTMLElement) {
    this.track = section.querySelector<HTMLElement>('.service-track')!;
    this.cards = [...this.track.querySelectorAll<HTMLElement>('.service-card')];
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
        End: this.cards.length - 1,
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
    if (!this.cards.length) return;
    const lastIndex = this.cards.length - 1;
    const gap = Number.parseFloat(getComputedStyle(this.track).columnGap) || 0;
    const step = this.cards[0].getBoundingClientRect().width + gap;
    this.index = Math.min(
      lastIndex,
      Math.max(0, Math.round(Math.abs(this.track.scrollLeft) / step)),
    );
    if (!this.cards[this.index]?.classList.contains('service-card-current')) {
      this.cards.forEach((card, index) => {
        card.classList.toggle('service-card-current', index === this.index);
      });
    }
    if (this.previous) this.previous.disabled = this.index === 0;
    if (this.next) this.next.disabled = this.index === lastIndex;
    const status = this.section.querySelector<HTMLElement>('.carousel-status');
    const formatter = new Intl.NumberFormat(document.documentElement.lang);
    const text =
      this.section.dataset.status
        ?.replace('{range}', formatter.format(this.index + 1))
        .replace('{total}', formatter.format(this.cards.length)) ?? '';
    if (status && status.textContent !== text) status.textContent = text;
  }
  private go(index: number) {
    const card =
      this.cards[Math.min(this.cards.length - 1, Math.max(0, index))];
    if (!card) return;
    const edge = this.track.getBoundingClientRect();
    const target = card.getBoundingClientRect();
    const delta = this.rtl
      ? target.right - edge.right
      : target.left - edge.left;
    this.track.scrollTo({
      left: this.track.scrollLeft + delta,
      behavior: this.motion.matches ? 'instant' : 'smooth',
    });
  }
}

function setupBlueprintMotion() {
  const drawing = document.querySelector('[data-blueprint]');
  const button = drawing?.querySelector<HTMLButtonElement>(
    '[data-blueprint-toggle]',
  );
  if (!drawing || !button) return;

  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  let visible = !('IntersectionObserver' in window);

  const update = () => {
    drawing.toggleAttribute(
      'data-blueprint-running',
      !paused && visible && !document.hidden && !preference.matches,
    );
    drawing.toggleAttribute('data-blueprint-paused', paused);
    button.hidden = preference.matches;
    const label = paused ? button.dataset.playLabel : button.dataset.pauseLabel;
    if (label) {
      button.setAttribute('aria-label', label);
      button.title = label;
    }
  };

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      update();
    }).observe(drawing);
  }
  button.addEventListener('click', () => {
    paused = !paused;
    update();
  });
  preference.addEventListener('change', update);
  document.addEventListener('visibilitychange', update);
  drawing.setAttribute('data-blueprint-ready', '');
  update();
}

function revealLandingArtwork() {
  if (
    !('IntersectionObserver' in window) ||
    matchMedia('(prefers-reduced-motion: reduce)').matches
  )
    return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.setAttribute('data-revealed', '');
        observer.unobserve(target);
      });
    },
    { threshold: 0.2 },
  );
  document
    .querySelectorAll('[data-landing-reveal]')
    .forEach((artwork) => observer.observe(artwork));
}

function followLegacyServiceLink() {
  const legacyId = location.hash.slice(1);
  if (!Object.hasOwn(legacyServiceIds, legacyId)) return;
  const link = document
    .getElementById(legacyId)
    ?.querySelector<HTMLAnchorElement>('[data-service-detail]');
  if (link) location.replace(link.href);
}

followLegacyServiceLink();
window.addEventListener('hashchange', followLegacyServiceLink);
new SiteNavigation();
setupBlueprintMotion();
revealLandingArtwork();
document
  .querySelectorAll<HTMLFormElement>('#quote-form')
  .forEach((form) => new QuoteFormController(form));
document
  .querySelectorAll<HTMLElement>('[data-carousel]')
  .forEach((section) => new ServiceCarousel(section));
