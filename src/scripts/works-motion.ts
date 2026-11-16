if (
  'IntersectionObserver' in window &&
  !matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('work-card-enter');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.15 },
  );

  document
    .querySelectorAll('[data-work-card]')
    .forEach((card) => observer.observe(card));
}
