const mobileMenuBurger = document.getElementById("mobileMenuBurger");
const mobileNavItems = document.getElementById("mobileMenuNavItems");
const mobileSiteNav = document.getElementById("mobileMenuNav");
const mobileMenuCloseBtn = document.getElementById("closeBtn");
const dropDownArrowBtn = document.getElementById("dropDownArrowBtn");

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
    if (mobileNavItems) {
      mobileNavItems.style.display = "block";
      mobileNavItems.appendChild(mobileMenuCloseBtn);
      mobileSiteNav.style.display = "flex";
    }
  }
}

// Hides Mobile Menu Flyout on Close Button Click

mobileMenuCloseBtn.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
  if (window.innerWidth <= 1024) {
    // Hides Mobile Menu Flyout
    if (mobileNavItems) {
      mobileNavItems.style.display = "none";
    }
  }
}
