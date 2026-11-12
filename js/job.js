const join = document.querySelector("#join-form");

if (join) {
  const namesInput = document.querySelector("#names");
  const emailsInput = document.querySelector("#emails");
  const descriInput = document.querySelector("#description");
  const charcCount = document.querySelector("#char-counts");
  const statuEl = document.querySelector("#form-statu");

  // Live character counter.
  descriInput.addEventListener("input", () => {
    charcCount.textContent = descriInput.value.length;
  });

  // Show (or clear) the error message under one field.
  function showError(input, description) {
    const errorEl = document.querySelector(`#${input.id}-error`);
    errorEl.textContent = description;
    input.setAttribute("aria-invalid", description ? "true" : "false");
  }

  // Check every field. Returns true only if all are valid.
  function validateForm() {
    let isValid = true;

    if (namesInput.value.trim() === "") {
      showError(namesInput, "Please enter your name.");
      isValid = false;
    } else {
      showError(namesInput, "");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailsInput.value.trim())) {
      showError(emailsInput, "Enter an email address like name@example.com.");
      isValid = false;
    } else {
      showError(emailsInput, "");
    }

    if (descriInput.value.trim().length < 100) {
      showError(descriInput, "Your description needs at least 100 characters.");
      isValid = false;
    } else {
      showError(descriInput, "");
    }

    return isValid;
  }

  join.addEventListener("submit", (event) => {
    event.preventDefault();
    statuEl.textContent = "";

    if (!validateForm()) {
      join.querySelector('[aria-invalid="true"]').focus();
      return;
    }

    const firstName = namesInput.value.trim().split(" ")[0];
    statuEl.textContent = `Thanks, ${firstName}! Your description is ready.Our team will send our feedback to this ${emailsInput.value} email.`;
    join.reset();
    charcCount.textContent = "0";
  });
}

// Dark mode, remembered across pages and visits.
const themeToggle = document.querySelector(".theme-toggle");
const THEME_KEY = "team-theme";

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "☀️Light Mode" : "🌙Dark Mode";
  }
}

applyTheme(localStorage.getItem(THEME_KEY));

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark")
      ? "light"
      : "dark";
    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  });
}

// Open and close the navigation menu on small screens.
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
