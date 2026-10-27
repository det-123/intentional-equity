/* Builds the contact email address in the browser so spam bots that read page code cannot harvest it. */
(function () {
  var address = ["hello", ["intentional-equity", "com"].join(".")].join("@");
  var links = document.querySelectorAll(".js-email");
  for (var i = 0; i < links.length; i++) {
    var el = links[i];
    var subject = el.getAttribute("data-subject");
    el.href = "mailto:" + address + (subject ? "?subject=" + encodeURIComponent(subject) : "");
    if (el.hasAttribute("data-show-address")) { el.textContent = address; }
  }
})();
