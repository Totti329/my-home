const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const finePointer = window.matchMedia("(pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const navLinks = new Map(
  [...document.querySelectorAll(".nav a")].map((link) => [link.hash.slice(1), link])
);

if ("IntersectionObserver" in window && navLinks.size > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }
        const active = navLinks.get(entry.target.id);
        if (!active) {
          continue;
        }
        navLinks.forEach((link) => link.removeAttribute("aria-current"));
        active.setAttribute("aria-current", "true");
      }
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );

  document.querySelectorAll("main section[id]").forEach((section) => {
    observer.observe(section);
  });
}

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const revealTargets = document.querySelectorAll(
    ".section__title, .section__lede, .about__body, .pull-quote, .learn, .beyond__body, .watchlist, .quote__inner"
  );

  if (revealTargets.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          entry.target.classList.remove("reveal-pending");
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach((target) => {
      target.classList.add("reveal-pending");
      revealObserver.observe(target);
    });
  }
}

const photo = document.querySelector("[data-tilt]");

if (photo && finePointer.matches && !reducedMotion.matches) {
  photo.addEventListener("pointermove", (event) => {
    const rect = photo.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    photo.style.transform = `perspective(700px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
  });

  photo.addEventListener("pointerleave", () => {
    photo.style.transform = "";
  });
}
