(function () {
  var modal = document.getElementById("newsletter-modal");
  if (!modal) return;

  var openButtons = document.querySelectorAll("[data-newsletter-modal-open]");
  var closeButtons = modal.querySelectorAll("[data-newsletter-modal-close]");
  var lastFocusedElement = null;
  var focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function getFocusableElements() {
    return Array.prototype.slice.call(modal.querySelectorAll(focusableSelector)).filter(function (element) {
      return !element.disabled && element.offsetParent !== null;
    });
  }

  function closeOpenNavbar() {
    var openNavbar = document.querySelector(".navbar-collapse.show, .navbar-collapse.collapsing");
    if (openNavbar) {
      if (window.jQuery && typeof window.jQuery(openNavbar).collapse === "function") {
        window.jQuery(openNavbar).collapse("hide");
      } else {
        openNavbar.classList.remove("show");
        openNavbar.classList.remove("collapsing");
        openNavbar.removeAttribute("style");
      }
    }

    var expandedNavbarToggle = document.querySelector('.navbar-toggler[aria-expanded="true"]');
    if (expandedNavbarToggle) {
      expandedNavbarToggle.classList.add("collapsed");
      expandedNavbarToggle.setAttribute("aria-expanded", "false");
    }
  }

  function openModal(event) {
    if (event) event.preventDefault();
    lastFocusedElement = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("newsletter-modal-open");

    closeOpenNavbar();
    window.setTimeout(closeOpenNavbar, 0);
    window.setTimeout(closeOpenNavbar, 450);

    window.setTimeout(function () {
      var emailInput = modal.querySelector('input[type="email"]');
      var focusTarget = emailInput ? emailInput : getFocusableElements()[0];
      if (focusTarget) focusTarget.focus();
    }, 0);
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("newsletter-modal-open");
    if (lastFocusedElement && document.contains(lastFocusedElement)) lastFocusedElement.focus();
  }

  function handleKeydown(event) {
    if (modal.hidden) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
      return;
    }

    if (event.key !== "Tab") return;

    var focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    var firstElement = focusableElements[0];
    var lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  for (var i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener("click", openModal);
  }

  for (var j = 0; j < closeButtons.length; j++) {
    closeButtons[j].addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", handleKeydown);
})();
