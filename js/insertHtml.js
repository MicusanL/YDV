$(document).ready(function() {
  $("#navbar-section").load("/html-resources/menu.html", function() {
    if (window.Webflow && Webflow.require) {
      var ix2 = Webflow.require('ix2');
      ix2.destroy();
      ix2.init();
    }
  });
  $("#contact-section").load("/html-resources/contact-section.html", function() {
    if (window.Webflow && Webflow.require) {
      var ix2 = Webflow.require('ix2');
      ix2.destroy();
      ix2.init();
    }
  });
  selectCurrentPageMenu();
});

function selectCurrentPageMenu () {
  if ($('.pages-box').is(':visible')) {
    let file = $(document)[0].URL.split('/').pop();
    let tab = $('.pages-box a[href="' + file + '"]').first();
    if (tab.length === 1){
        $(tab).addClass('w--current');
    } else {
        $('.pages-box a[href="index.html"]').first().addClass('w--current');
    }
  } else {
    setTimeout(selectCurrentPageMenu, 50); //wait 50 ms, then try again
  }
}