const mobileMenuBurger = document.getElementById("mobileMenuBurger");
const mobileNavItems = document.getElementById("mobileMenuNavItems");
const mobileSiteNav = document.getElementById("mobileMenuNav");
const mobileMenuCloseBtn = document.getElementById("closeBtn");

// Mobile Menu Nav Items - Adds Class to Mobile Menu Flyout For Smooth Transition

mobileMenuBurger.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  if (window.innerWidth <= 1024) {
    mobileNavItems.classList.toggle("active");
  }
}

// Mobile Menu Flyout

mobileMenuBurger.addEventListener("click", displayMobileMenu);

function displayMobileMenu() {
  if (window.innerWidth <= 1024) {
    // Displays Full Screen Mobile Menu Flyout
    mobileNavItems.style.display = "block";

    // Displays Close Button in Mobile Menu Flyout
    mobileNavItems.appendChild(mobileMenuCloseBtn);

    // Displays Mobile Navigation in Mobile Menu Flyout
    mobileSiteNav.style.display = "flex";
  }
}

// Hides Mobile Menu Flyout on Close Button Click

mobileMenuCloseBtn.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
  if (window.innerWidth <= 1024) {
    mobileNavItems.style.display = "none";
  }
}
