// Native lazy loading can fetch images several screens before they are visible.
// Keep only the homepage previews inert until the reader approaches each photo.
class ProjectPreviews {
  private readonly observer?: IntersectionObserver;

  constructor(previews: NodeListOf<HTMLElement>) {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            this.show(entry.target);
            this.observer?.unobserve(entry.target);
          }
        },
        { rootMargin: '240px 0px' },
      );
    }

    for (const preview of previews) {
      if (this.observer) this.observer.observe(preview);
      else this.show(preview);
    }
  }

  private show(preview: Element) {
    const template = preview.querySelector('template');
    template?.replaceWith(template.content);
  }
}

new ProjectPreviews(document.querySelectorAll('[data-project-preview]'));
