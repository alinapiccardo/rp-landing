
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Logic
  const menuButton = document.getElementById("mobile-menu-button");
  const menuCloseButton = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = mobileMenu.querySelectorAll("a");

  function toggleMenu() {
      if (mobileMenu.classList.contains("-translate-x-full")) {
          mobileMenu.classList.remove("-translate-x-full");
      } else {
          mobileMenu.classList.add("-translate-x-full");
      }
  }
  menuLinks.forEach(link => {
      link.addEventListener("click", () => {
          mobileMenu.classList.add("-translate-x-full");
      });
  });
  menuButton.addEventListener("click", toggleMenu);
  menuCloseButton.addEventListener("click", toggleMenu);

  // Scroll Animation Logic
  const contentSection = document.getElementById("contentSection");
  if (contentSection) {
    const handleScroll = () => {
      const contentPosition = contentSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
      if (contentPosition < screenPosition - 100) { 
        contentSection.classList.add("opacity-100", "translate-y-0");
        contentSection.classList.remove("opacity-0", "translate-y-400");
      } else {
        contentSection.classList.remove("opacity-100", "translate-y-0");
        contentSection.classList.add("opacity-0", "translate-y-400");
      }
    };
    window.addEventListener("scroll", handleScroll);
  } else {
    console.error("Content section not found!");
  }

  // FAQ Logic
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        const answer = item.querySelector(".faq-answer");
        if (answer.classList.contains("hidden")) {
            answer.classList.remove("hidden");
            answer.classList.add("block");
        } else {
            answer.classList.add("hidden");
            answer.classList.remove("block");
        }
    });
  });
});

