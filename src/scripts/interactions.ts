class SiteNavigation {
  private button = document.querySelector<HTMLButtonElement>('.menu-toggle');
  private nav = document.querySelector<HTMLElement>('#main-nav');
  constructor() {
    this.button?.addEventListener('click', () =>
      this.setOpen(this.button?.getAttribute('aria-expanded') !== 'true'),
    );
    this.nav
      ?.querySelectorAll('a')
      .forEach((a) => a.addEventListener('click', () => this.setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'Escape' &&
        this.button?.getAttribute('aria-expanded') === 'true'
      ) {
        this.setOpen(false);
        this.button.focus();
      }
    });
    document.addEventListener('click', (e) => {
      if (!(e.target as HTMLElement).closest('.header')) this.setOpen(false);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          this.nav?.querySelectorAll('a').forEach((a) => {
            const active = a.hash === `#${entry.target.id}`;
            a.classList.toggle('active', active);
            if (active) a.setAttribute('aria-current', 'location');
            else a.removeAttribute('aria-current');
          });
        });
      },
      { rootMargin: '-15% 0px -55% 0px' },
    );
    document
      .querySelectorAll('#home, #services, #about, #contact')
      .forEach((section) => observer.observe(section));
  }
  private setOpen(open: boolean) {
    this.button?.setAttribute('aria-expanded', String(open));
    this.nav?.classList.toggle('open', open);
    if (open) this.nav?.querySelector('a')?.focus();
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
    this.button.querySelector('span')!.textContent = playing ? 'Ⅱ' : '▶';
  }
}

class ServiceDialogs {
  constructor() {
    document
      .querySelectorAll<HTMLButtonElement>('[data-dialog]')
      .forEach((button) => {
        button.addEventListener('click', () =>
          (
            document.getElementById(button.dataset.dialog!) as HTMLDialogElement
          )?.showModal(),
        );
      });
    document.querySelectorAll<HTMLDialogElement>('dialog').forEach((dialog) => {
      dialog
        .querySelector('[data-close]')
        ?.addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
          const r = dialog.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            dialog.close();
        }
      });
      dialog
        .querySelector<HTMLAnchorElement>('[data-choose]')
        ?.addEventListener('click', (e) => {
          const link = e.currentTarget as HTMLAnchorElement;
          const select = document.querySelector<HTMLSelectElement>(
            'select[name=service]',
          );
          if (select) select.value = link.dataset.choose!;
          dialog.close();
        });
    });
  }
}

class QuotePreview {
  constructor() {
    const form = document.querySelector<HTMLFormElement>('#quote-form');
    const review = document.querySelector<HTMLElement>('#quote-review');
    if (!form || !review) return;
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
new ServiceDialogs();
new QuotePreview();
