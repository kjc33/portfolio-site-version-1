const mobileMenuBurger = document.getElementById("mobileMenuBurger");
const mobileNavItems = document.getElementById("mobileMenuNavItems");
const mobileSiteNav = document.getElementById("siteNav");
const mobileMenuCloseBtn = document.getElementById("closeBtn");

// Mobile Menu Nav Items

mobileMenuBurger.addEventListener("click", displayMobileMenu);

function displayMobileMenu() {
  // Shows Full Screen Mobile Menu
  mobileNavItems.style.display = "block";

  // Adds and Displays Navigation
  mobileNavItems.appendChild(mobileSiteNav);
  mobileSiteNav.style.display = "flex";
}

// Mobile Menu Close Button

mobileMenuCloseBtn.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
  mobileNavItems.style.display = "none";
}