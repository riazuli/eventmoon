"use strict";

// Custom Javascript
!function () {
  // Selector Function
  var $ = function $(selector, areAll) {
    return areAll ? document.querySelectorAll(selector) : document.querySelector(selector);
  }; // Global Variables
  // Constructor: UI


  function UI() {} // Function: Menu slide


  UI.prototype.menuSlide = function () {
    var navHeight = 0;
    var navigation = $('.navigation');
    var searchMenuSignup = $('.navigation .search, .navigation ul, .navigation .signup-btn', true);
    var i = 0;

    if (navigation.classList.contains('nav-open')) {
      navigation.classList.remove('nav-open');
      navigation.style.height = '0px';
    } else {
      navigation.classList.add('nav-open');

      while (i < searchMenuSignup.length) {
        navHeight += searchMenuSignup[i].offsetHeight;
        i++;
      }

      navigation.style.opacity = '1'; // navigation.style.paddingBottom = '30px';

      navigation.style.height = navHeight + 71 + 'px';
    }
  }; // Function: Reset Menu Height


  UI.prototype.resetMenuHeight = function () {
    console.log(this);

    if (this.innerWidth >= 1200) {
      $('.navigation').style.height = 'auto';
    } else {
      $('.navigation').style.height = 0;
    }
  }; // Function: Next week events same height


  UI.prototype.nextWeekEventsHeight = function () {
    var firstItem = $('.next-week-events .event-item');
    var remainingItems = $('.next-week-events .week-diff-event-item', true);

    var my = function my() {
      remainingItems.forEach(function (item) {
        item.style.height = firstItem.offsetHeight + 'px';
      });
    };

    my();
    window.addEventListener('resize', my);
  }; // Function: All Event listeners


  function allEventListener() {
    var ui = new UI();
    var navToggle = $('.navigation-toggle');
    var travelPromoteExploreItems = $('.travel-promote-explore li', true); // Event: Navigation

    navToggle.addEventListener('click', ui.menuSlide);
    window.addEventListener('resize', ui.resetMenuHeight); // Event: Travel

    travelPromoteExploreItems.forEach(function (li) {
      li.addEventListener('click', function (e) {
        var thisImg = this.querySelector('img');
        travelPromoteExploreItems.forEach(function (li) {
          li.classList.remove('active');
        });
        this.classList.add('active');
        e.preventDefault();

        if (this.classList.contains('promote')) {
          $('.tab-content p', true).forEach(function (tab) {
            tab.classList.remove('d-block');
            tab.classList.add('d-none');
          });
          $('.tab-content .promote').classList.add('d-block');
          $('.tab-content .promote').classList.remove('d-none');
          thisImg.src = 'assets/images/promote-red.png';
        } else {
          $('li.promote img').src = 'assets/images/promote-black.png';
        }

        if (this.classList.contains('travel')) {
          console.log('True');
          $('.tab-content p', true).forEach(function (tab) {
            tab.classList.remove('d-block');
            tab.classList.add('d-none');
          });
          $('.tab-content .travel').classList.add('d-block');
          $('.tab-content .travel').classList.remove('d-none');
          thisImg.src = 'assets/images/travel-red.png';
        } else {
          $('li.travel img').src = 'assets/images/travel-black.png';
        }

        if (this.classList.contains('explore')) {
          $('.tab-content p', true).forEach(function (tab) {
            tab.classList.remove('d-block');
            tab.classList.add('d-none');
          });
          $('.tab-content .explore').classList.add('d-block');
          $('.tab-content .explore').classList.remove('d-none');
          thisImg.src = 'assets/images/explore-red.png';
        } else {
          $('li.explore img').src = 'assets/images/explore-black.png';
        }

        return;

        if (this.classList.contains('travel')) {
          thisImg.src = 'assets/images/travel-black.png';
          thisImg.classList.add('fade-in');
          setTimeout(function () {
            thisImg.classList.remove('fade-in');
          }, 500);
        }

        if (this.classList.contains('promote')) {
          thisImg.src = 'assets/images/promote-red.png';
          thisImg.classList.add('fade-in');
          setTimeout(function () {
            thisImg.classList.remove('fade-in');
          }, 500);
        }

        if (this.classList.contains('explore')) {
          thisImg.src = 'assets/images/explore-red.png';
          thisImg.classList.add('fade-in');
          setTimeout(function () {
            thisImg.classList.remove('fade-in');
          }, 500);
        }
      });
    }); // Event: Load DOM Content

    document.addEventListener('DOMContentLoaded', loadContent);
  }

  allEventListener(); // Function: Load Content

  function loadContent() {
    var ui = new UI();
    ui.nextWeekEventsHeight();
  }
}();