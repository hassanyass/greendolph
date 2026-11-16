class ProjectGallery {
  private readonly links: HTMLAnchorElement[];
  private trigger: HTMLAnchorElement | null = null;
  private index = 0;

  constructor(
    private readonly dialog: HTMLDialogElement,
    container: HTMLElement,
  ) {
    this.links = [
      ...container.querySelectorAll<HTMLAnchorElement>('[data-project-photo]'),
    ];
    this.links.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
          return;
        event.preventDefault();
        this.trigger = link;
        this.showPhoto(index);
        this.dialog.showModal();
      });
    });

    dialog
      .querySelector('[data-previous]')
      ?.addEventListener('click', () => this.showPhoto(this.index - 1));
    dialog
      .querySelector('[data-next]')
      ?.addEventListener('click', () => this.showPhoto(this.index + 1));
    dialog.addEventListener('close', () =>
      this.trigger?.focus({ preventScroll: true }),
    );
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const rtl = document.documentElement.dir === 'rtl';
      const forward = rtl
        ? event.key === 'ArrowLeft'
        : event.key === 'ArrowRight';
      this.showPhoto(this.index + (forward ? 1 : -1));
    });
  }

  private showPhoto(index: number) {
    this.index = (index + this.links.length) % this.links.length;
    const link = this.links[this.index];
    const thumbnail = link.querySelector('img');
    const image = this.dialog.querySelector('img');
    const caption = this.dialog.querySelector('figcaption');
    if (!thumbnail || !image || !caption) return;

    image.alt = thumbnail.alt;
    image.src = link.href;
    caption.textContent = thumbnail.alt;
  }
}

document
  .querySelectorAll<HTMLElement>('[data-project-gallery]')
  .forEach((container) => {
    const dialog = container.querySelector('dialog');
    if (dialog && typeof dialog.showModal === 'function')
      new ProjectGallery(dialog, container);
  });
