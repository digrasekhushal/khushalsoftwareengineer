 // Simple mobile menu toggle
      document
        .getElementById("menuToggle")
        .addEventListener("click", function () {
          document.getElementById("nav").classList.toggle("active");
        });

      // Header scroll effect
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          document.getElementById("header").classList.add("scrolled");
        } else {
          document.getElementById("header").classList.remove("scrolled");
        }
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });

            // Close mobile menu if open
            document.getElementById("nav").classList.remove("active");
          }
        });
      });