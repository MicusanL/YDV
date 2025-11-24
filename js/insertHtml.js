$(document).ready(function () {
  $("#navbar-section").load("/html-resources/menu.html", function () {
    // Fix menu links for projects subfolder
    if (window.location.pathname.includes('/projects/')) {
      $('.pages-box a').each(function() {
        var href = $(this).attr('href');
        if (href && !href.startsWith('http') && !href.startsWith('/')) {
          $(this).attr('href', '../' + href);
        }
      });
    }
    
    if (window.Webflow && Webflow.require) {
      var ix2 = Webflow.require('ix2');
      ix2.destroy();
      ix2.init();
    }
    
    initDropdowns();
  });
  $("#contact-section").load("/html-resources/contact-section.html", function () {
    if (window.Webflow && Webflow.require) {
      var ix2 = Webflow.require('ix2');
      ix2.destroy();
      ix2.init();
    }
    var yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
  selectCurrentPageMenu();
});

function initDropdowns() {
  // Handle dropdown toggle clicks
  $('.pagebox-name.has-dropdown .dropdown-toggle').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var $parent = $(this).closest('.pagebox-name.has-dropdown');
    var isActive = $parent.hasClass('active');
    
    // Close all dropdowns
    $('.pagebox-name.has-dropdown').removeClass('active');
    
    // Toggle current dropdown
    if (!isActive) {
      $parent.addClass('active');
    }
  });
  
  // Close dropdowns when clicking outside
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.pagebox-name.has-dropdown').length) {
      $('.pagebox-name.has-dropdown').removeClass('active');
    }
  });
  
  // Prevent dropdown from closing when clicking inside the menu
  $('.dropdown-menu').on('click', function(e) {
    e.stopPropagation();
  });
}

function selectCurrentPageMenu() {
  if ($('.pages-box').is(':visible')) {
    let file = $(document)[0].URL.split('/').pop();
    let tab = $('.pages-box a[href="' + file + '"]').first();
    if (tab.length === 1) {
      $(tab).addClass('w--current');
    } else {
      $('.pages-box a[href="index.html"]').first().addClass('w--current');
    }
  } else {
    setTimeout(selectCurrentPageMenu, 50); //wait 50 ms, then try again
  }
}