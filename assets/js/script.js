    const topbar = document.querySelector('.topbar');
    const navbar = document.querySelector('.navbar');

    let lastScrollTop = 0;

    function handleScroll() {
        const currentScroll = window.scrollY;

        // Navbar background toggle
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // --- Smart Topbar Show/Hide ---
        const threshold = 200; // how far from top before topbar stays hidden

        if (currentScroll > lastScrollTop && currentScroll > threshold) {
            // scrolling down and beyond threshold
            if (topbar) topbar.classList.add('hidden');
        } else if (currentScroll < lastScrollTop && currentScroll < threshold) {
            // scrolling up but near the top
            if (topbar) topbar.classList.remove('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('DOMContentLoaded', handleScroll);



 // All filter tab

document.addEventListener("DOMContentLoaded", function () {
    // All filter buttons
    const filterButtons = document.querySelectorAll(".gallery-filters [data-filter]");
    // Gallery grid wrapper
    const grid = document.getElementById("gallery-grid");
    if (!grid) return; // safety check

    // All gallery items (columns)
    const items = Array.from(grid.querySelectorAll(".gallery-col"));

    // --- Shuffle ONCE on page load ---
    (function shuffleOnce() {
      const shuffled = [...items];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      // Re-append in new random order
      shuffled.forEach((item) => grid.appendChild(item));
    })();

    // --- Filtering (no more shuffling on click) ---
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        // Active state on buttons
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Show/hide items based on category
        items.forEach((item) => {
          const itemCat = item.getAttribute("data-category");

          if (filter === "all" || itemCat === filter) {
            item.classList.remove("d-none");
          } else {
            item.classList.add("d-none");
          }
        });
      });
    });
  });
  
  
// auto date for copyright sect
    const yearSpan = document.getElementById("copyright-year");
    const currentYear = new Date().getFullYear();
    yearSpan.innerText = currentYear;  

    

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); // e.g. 'about.html'
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // If home page (index.html or empty), activate home link
    if (currentPage === "" || currentPage === "index.html") {
        document.querySelector('.nav-link[href="index.html"]').classList.add("active");
    }
});







document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".gallery-filters [data-filter]");
    const grid = document.getElementById("gallery-grid");
    if (!grid) return;
    const items = Array.from(grid.querySelectorAll(".gallery-col"));
    (function shuffleOnce() {
      const shuffled = [...items];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      shuffled.forEach((item) => grid.appendChild(item));
    })();
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        items.forEach((item) => {
          const itemCat = item.getAttribute("data-category");

          if (filter === "all" || itemCat === filter) {
            item.classList.remove("d-none");
          } else {
            item.classList.add("d-none");
          }
        });
      });
    });
  });


