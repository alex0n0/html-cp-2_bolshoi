(function() {
  var isMenuOpen = false;

  const handleOverlayClick = function() {
    isMenuOpen = false;
    openMenu(isMenuOpen);
  }

  const openMenu = function (isMenuOpen) {
    if (isMenuOpen) {
      $("#sidemenu").addClass("open");
      let overlay = $(`<div class="overlay">`);
      overlay.on("click", handleOverlayClick)
      $("body").append(overlay);
      $("body").addClass("no-scroll");
    } else {
      $("#sidemenu").removeClass("open");
      $(".overlay").remove();
      $("body").removeClass("no-scroll");
    }
  };

  $("#menuButton").on("click", function() {
    isMenuOpen = true;
    openMenu(isMenuOpen);
  });
})();

(function() {
  var isSearchbarOpen = false;

  const handleOverlayClick = function() {
    isSearchbarOpen = false;
    openSearchbar(isSearchbarOpen);
  }

  function openSearchbar(isSearchbarOpen) {
    if (isSearchbarOpen) {
      $("#searchbar").addClass("open");
      let overlay = $(`<div class="overlay">`);
      overlay.on("click", handleOverlayClick)
      $("body").append(overlay);
      $("body").addClass("no-scroll");
    } else {
      $("#searchbar").removeClass("open");
      $(".overlay").remove();
      $("body").removeClass("no-scroll");
    }
  };

  $("#searchButton").on("click", function() {
    isSearchbarOpen = true;
    openSearchbar(isSearchbarOpen);
  });
})();
