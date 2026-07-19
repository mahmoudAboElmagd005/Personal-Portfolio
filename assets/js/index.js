// dark mode
var themeToggleButton = document.querySelector("#theme-toggle-button");

var html = document.querySelector("html");
themeToggleButton.addEventListener("click", function darkModeInLocaleStorage() {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.setItem("dark", "dark");
  } else {
    localStorage.removeItem("dark");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  activeFontBtnCheck();
  if (localStorage.getItem("dark") === "dark") {
    html.classList.add("dark");
  }
});

// navbar anker tags active
var heroSection = document.querySelector("#hero-section");
var about = document.querySelector("#about");
var portfolio = document.querySelector("#portfolio");
var experience = document.querySelector("#experience");
var testimonials = document.querySelector("#testimonials");
var contact = document.querySelector("#contact");

var aHeroSection = document.querySelector("a[href='#hero-section']");
var aAbout = document.querySelector("a[href='#about']");
var aPortfolio = document.querySelector("a[href='#portfolio']");
var aExperience = document.querySelector("a[href='#experience']");
var aTestimonials = document.querySelector("a[href='#testimonials']");
var aContact = document.querySelector("a[href='#contact']");

aHeroSection.classList.add("active");
window.addEventListener("scroll", function () {
  var scroll = window.scrollY;
  var offset = 100;

  if (scroll >= heroSection.offsetTop && scroll < about.offsetTop - offset) {
    aHeroSection.classList.add("active");
    aAbout.classList.remove("active");
    aPortfolio.classList.remove("active");
    aExperience.classList.remove("active");
    aTestimonials.classList.remove("active");
    aContact.classList.remove("active");
  } else if (
    scroll >= about.offsetTop - offset &&
    scroll < portfolio.offsetTop - offset
  ) {
    aAbout.classList.add("active");
    aHeroSection.classList.remove("active");
    aPortfolio.classList.remove("active");
    aExperience.classList.remove("active");
    aTestimonials.classList.remove("active");
    aContact.classList.remove("active");
  } else if (
    scroll >= portfolio.offsetTop - offset &&
    scroll < experience.offsetTop - offset
  ) {
    aHeroSection.classList.remove("active");
    aAbout.classList.remove("active");
    aPortfolio.classList.add("active");
    aExperience.classList.remove("active");
    aTestimonials.classList.remove("active");
    aContact.classList.remove("active");
  } else if (
    scroll >= experience.offsetTop - offset &&
    scroll < testimonials.offsetTop - offset
  ) {
    aHeroSection.classList.remove("active");
    aAbout.classList.remove("active");
    aPortfolio.classList.remove("active");
    aExperience.classList.add("active");
    aTestimonials.classList.remove("active");
    aContact.classList.remove("active");
  } else if (
    scroll >= testimonials.offsetTop - offset &&
    scroll < contact.offsetTop - offset
  ) {
    aHeroSection.classList.remove("active");
    aAbout.classList.remove("active");
    aPortfolio.classList.remove("active");
    aExperience.classList.remove("active");
    aTestimonials.classList.add("active");
    aContact.classList.remove("active");
  } else {
    aHeroSection.classList.remove("active");
    aAbout.classList.remove("active");
    aPortfolio.classList.remove("active");
    aExperience.classList.remove("active");
    aTestimonials.classList.remove("active");
    aContact.classList.add("active");
  }
});

// scroll to top button
var toTopButton = document.querySelector("#scroll-to-top");
toTopButton.setAttribute("href", "#hero-section");
window.addEventListener("scroll", function () {
  var scroll = window.scrollY;

  if (scroll >= 800) {
    toTopButton.style.opacity = 1;
    toTopButton.style.visibility = "visible";
  } else {
    toTopButton.style.opacity = 0;
    toTopButton.style.visibility = "hidden";
  }
  toTopButton.addEventListener("click", function () {
    heroSection.scrollIntoView();
  });
});

// settings tab
var settingsToggle = document.querySelector("#settings-toggle");
var settingsTab = document.querySelector("#settings-sidebar");
var closeSettings = document.querySelector("#close-settings");
settingsTab.style.transition = "all 0.3s";
settingsToggle.addEventListener("click", function () {
  event.stopPropagation();
  settingsTab.style.right = settingsTab.offsetWidth + "px";
  settingsToggle.style.right = settingsTab.offsetWidth + "px";
});
closeSettings.addEventListener("click", function () {
  event.stopPropagation();
  settingsTab.style.right = "0";
  settingsToggle.style.right = "0";
});

settingsTab.addEventListener("click", function (event) {
  event.stopPropagation();
});

document.addEventListener("click", function () {
  if (
    !settingsTab.contains(event.target) &&
    !settingsToggle.contains(event.target)
  )
    settingsTab.style.right = "0";
  settingsToggle.style.right = "0";
});

// change font on page
var body = document.querySelector("body");
var fontButtons = document.querySelectorAll("[role='radio']");
for (var i = 0; i < fontButtons.length; i++) {
  fontButtons[i].addEventListener("click", function (e) {
    fontButtons.forEach(function (btns) {
      btns.classList.remove(
        "active",
        "border-primary",
        "bg-slate-50",
        "dark:bg-slate-800",
      );
      btns.classList.add("border-slate-200", "dark:border-slate-700");
    });
    var btn = e.target.closest("[role='radio']");
    btn.classList.add(
      "active",
      "border-primary",
      "bg-slate-50",
      "dark:bg-slate-800",
    );
    btn.classList.remove("border-slate-200", "dark:border-slate-700");
    var fontName = btn.getAttribute("data-font");
    body.style.fontFamily = fontName;
    localStorage.setItem("fontName", fontName);
  });
}

function activeFontBtnCheck() {
  var realFont = localStorage.getItem("fontName");
  for (var i = 0; i < fontButtons.length; i++) {
    fontButtons[i].classList.remove(
      "active",
      "border-primary",
      "bg-slate-50",
      "dark:bg-slate-800",
    );
    fontButtons[i].classList.add("border-slate-200", "dark:border-slate-700");

    if (fontButtons[i].getAttribute("data-font") == realFont) {
      fontButtons[i].classList.add(
        "active",
        "border-primary",
        "bg-slate-50",
        "dark:bg-slate-800",
      );
      fontButtons[i].classList.remove(
        "border-slate-200",
        "dark:border-slate-700",
      );
    }
  }
}

// change main colors on page
var colorBtns = document.querySelectorAll("#theme-colors-grid button");
for (var i = 0; i < colorBtns.length; i++) {
  colorBtns[i].addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    colorBtns.forEach(function (btn) {
      btn.classList.remove(
        "ring-2",
        "ring-primary",
        "ring-offset-2",
        "ring-offset-white",
        "dark:ring-offset-slate-900",
      );
    });
    btn.classList.add(
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900",
    );

    var dataPrimary = btn.getAttribute("data-primary");
    var dataSecondary = btn.getAttribute("data-secondary");
    document.documentElement.style.setProperty("--color-primary", dataPrimary);
    document.documentElement.style.setProperty(
      "--color-secondary",
      dataSecondary,
    );
    document.documentElement.style.setProperty("--color-accent", dataPrimary);
    localStorage.setItem("primary-color", dataPrimary);
    localStorage.setItem("secondary-color", dataSecondary);
    localStorage.setItem("color-accent", dataPrimary);
  });
}

function activeColroBtnCheck() {
  var realColor = localStorage.getItem("primary-color");
  for (var i = 0; i < colorBtns.length; i++) {
    colorBtns[i].classList.remove(
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900",
    );
    if (colorBtns[i].getAttribute("data-primary") == realColor) {
      colorBtns[i].classList.add(
        "ring-2",
        "ring-primary",
        "ring-offset-2",
        "ring-offset-white",
        "dark:ring-offset-slate-900",
      );
    }
  }
}

function storage() {
  document.documentElement.style.setProperty(
    "--color-primary",
    localStorage.getItem("primary-color"),
  );
  document.documentElement.style.setProperty(
    "--color-secondary",
    localStorage.getItem("secondary-color"),
  );
  document.documentElement.style.setProperty(
    "--color-accent",
    localStorage.getItem("color-accent"),
  );
  body.style.fontFamily = localStorage.getItem("fontName");
}

// reset button
var resetSettingsBtn = document.querySelector("#reset-settings");
resetSettingsBtn.addEventListener("click", resetSetting);
function resetSetting() {
  localStorage.removeItem("primary-color");
  localStorage.removeItem("secondary-color");
  localStorage.removeItem("color-accent");
  localStorage.removeItem("fontName");
  settingsTab.style.right = "0";
  settingsToggle.style.right = "0";
  document.documentElement.style.setProperty("--color-primary", "#6366f1");
  document.documentElement.style.setProperty("--color-secondary", " #8b5cf6");
  document.documentElement.style.setProperty("--color-accent", "#6366f1");
  body.style.fontFamily = "tajawal";
  activeFontBtnCheck();
}

// navs & tabs
var navsBtons = document.querySelectorAll("#portfolio-filters button");
var tabs = document.querySelectorAll("#portfolio-grid > div");
tabs.forEach(function (tab) {
  tab.style.transition = "all .3s";
  tab.style.opacity = "1";
});
for (var i = 0; i < navsBtons.length; i++) {
  navsBtons[i].addEventListener("click", function (e) {
    var button = e.target.closest("button");
    navsBtons.forEach(function (btn) {
      btn.classList.remove(
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "duration-300",
        "hover:shadow-lg",
        "hover:shadow-primary/50",
        "text-white",
      );
      btn.classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "hover:bg-slate-100",
        "dark:hover:bg-slate-700",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
        "text-slate-600",
        "dark:text-slate-300",
      );
    });
    button.classList.add(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "duration-300",
      "hover:shadow-lg",
      "hover:shadow-primary/50",
      "text-white",
      "dark:text-white",
    );
    button.classList.remove("bg-white", "dark:bg-slate-800");
    tabs.forEach(function (tab) {
      tab.style.display = "none";
      var dataCategory = tab.getAttribute("data-category");
      var dataFilter = button.getAttribute("data-filter");
      if (dataFilter == dataCategory) {
        tab.style.opacity = "0";
        tab.style.display = "block";
        setTimeout(function () {
          tab.style.opacity = "1";
        }, 200);
      } else if (dataFilter == "all") {
        tab.style.opacity = "0";
        tab.style.display = "block";
        setTimeout(function () {
          tab.style.opacity = "1";
        }, 200);
      }
    });
  });
}

// Carousel
var Carousel = document.querySelector("#testimonials-carousel");
var indicators = document.querySelectorAll(".carousel-indicator");
var cards = document.querySelectorAll(".testimonial-card");
var nextBtn = document.querySelector("#next-testimonial");
var prevBtn = document.querySelector("#prev-testimonial");

var currentIndex = 0;
var cardsPerView = 3;

if (window.innerWidth <= 1024 && window.innerWidth > 640) {
  cardsPerView = 2;
} else if (window.innerWidth <= 640) {
  cardsPerView = 1;
}

function carouselMove() {
  var offset = currentIndex * (100 / cardsPerView);
  Carousel.style.transform = `translateX(${offset}%)`;
  indicators.forEach(function (indicator, index) {
    if (index == currentIndex) {
      indicator.classList.add("bg-accent");
      indicator.classList.remove("dark:bg-slate-600", "bg-slate-400");
    } else {
      indicator.classList.remove("bg-accent");
      indicator.classList.add("dark:bg-slate-600", "bg-slate-400");
    }
  });
}

nextBtn.addEventListener("click", function () {
  currentIndex++;

  if (currentIndex > cards.length - cardsPerView) {
    currentIndex = 0;
  }
  carouselMove();
});

prevBtn.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - cardsPerView;
  }
  carouselMove();
});

indicators.forEach(function (indicator, index) {
  indicator.addEventListener("click", function () {
    currentIndex = index;
    carouselMove();
  });
});

carouselMove();
storage();
activeFontBtnCheck();
activeColroBtnCheck();
