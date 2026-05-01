const aboutSections = document.querySelectorAll(".cards");

if (aboutSections.length > 0) {
  const aboutObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // Reveal all sections at once when the about content is reached.
        aboutSections.forEach((section) => section.classList.add("is-visible"));
        observer.disconnect();
      });
    },
    { threshold: 0.15 }
  );

  aboutObserver.observe(aboutSections[0]);
}
