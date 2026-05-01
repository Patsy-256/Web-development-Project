const academicCards = document.querySelectorAll(".features .card");

if (academicCards.length > 0) {
  const academicObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = Number(entry.target.dataset.index || 0);
        const delay = index * 170;

        setTimeout(() => {
          entry.target.classList.add("is-visible");
        }, delay);

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  academicCards.forEach((card, index) => {
    card.dataset.index = String(index);
    academicObserver.observe(card);
  });
}
