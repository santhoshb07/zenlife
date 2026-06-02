/* ============================================================================
   CozyThreads — Freshdesk Portal Theme  ·  theme.js
   Small progressive-enhancement helpers. No dependencies.
   Paste before </body> in the Layout page (or host and <script src> it).
   Everything degrades gracefully if an element is absent.
   ========================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    /* --- Mobile nav toggle ------------------------------------------- */
    var toggle = document.querySelector(".ct-nav__toggle");
    var nav = document.querySelector(".ct-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    /* --- Keyboard shortcut: "/" focuses portal search ---------------- */
    var search = document.querySelector(
      '.ct-search input, .fc-app input[type="search"], input.search-box'
    );
    if (search) {
      document.addEventListener("keydown", function (e) {
        if (e.key === "/" && document.activeElement !== search) {
          e.preventDefault();
          search.focus();
        }
      });
    }

    /* --- Article feedback buttons (visual ack only) ------------------ */
    document.querySelectorAll("[data-ct-feedback]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var wrap = btn.closest(".ct-feedback");
        if (wrap) {
          wrap.innerHTML =
            '<h4>Thanks for the feedback! 🧶</h4>' +
            '<p>It helps us keep our help center cozy and useful.</p>';
        }
      });
    });

    /* --- Map Freshdesk ticket-status text to themed badges ----------- */
    document.querySelectorAll("[data-ct-status]").forEach(function (el) {
      var status = (el.getAttribute("data-ct-status") || "").toLowerCase();
      el.classList.add("ct-badge");
      if (status.indexOf("pending") > -1) el.classList.add("ct-badge--pending");
      else if (status.indexOf("resolv") > -1 || status.indexOf("clos") > -1)
        el.classList.add("ct-badge--resolved");
      else el.classList.add("ct-badge--open");
    });
  });
})();
