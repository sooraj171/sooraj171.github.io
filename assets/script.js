document.getElementById("year").textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion) {
  const items = document.querySelectorAll(".work-item, .research-link, .expertise-list li");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  items.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(16px)";
    item.style.transition = `opacity .55s ease ${Math.min(index * 0.04, 0.2)}s, transform .55s ease ${Math.min(index * 0.04, 0.2)}s`;
    observer.observe(item);
  });

  const style = document.createElement("style");
  style.textContent = ".is-visible{opacity:1!important;transform:none!important}";
  document.head.appendChild(style);
}
