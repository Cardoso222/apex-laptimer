// Shows Portuguese or English based on the visitor's language, with a manual switch.
(function () {
  var html = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("apex-lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "").toLowerCase().indexOf("pt") === 0 ? "pt-BR" : "en");

  function apply(value) {
    html.setAttribute("lang", value);
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.set === value));
    });
    try { localStorage.setItem("apex-lang", value); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.dataset.set); });
    });
    apply(lang);
  });
  html.setAttribute("lang", lang);
})();
