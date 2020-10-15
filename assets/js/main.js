// jQuery
$(document).ready(function () {
    $('.search-toggle').on('click', function () {
        $('.search').slideToggle();
    });

    if ($(".nearby-destination-items").length) {
        $(".nearby-destination-items").owlCarousel({
            items: 5,
            margin: 20,
            stagePadding: 50,
            center: true,
            loop: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                500: {
                    items: 2,
                    center: 0,
                },
                // breakpoint from 768 up
                768: {
                    items: 3
                },
                992: {
                    items: 4,
                    center: false,
                    loop: true,
                },
                1200: {
                    items: 5,
                    loop: 0,
                    center: false,
                    stagePadding: 0,
                }
            }
        });
    }
    if ($(".recently-viewed-items").length) {
        $(".recently-viewed-items").owlCarousel({
            margin: 20,
            items: 4,
            stagePadding: 50,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                992: {
                    items: 3,
                    loop: true,
                },
                1200: {
                    loop: true,
                    stagePadding: 0,
                }
            }
        });
    }
    if ($(".nearby-concert-items").length) {
        $(".nearby-concert-items").owlCarousel({
            margin: 20,
            items: 4,
            stagePadding: 50,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                992: {
                    items: 3,
                    loop: true,
                },
                1200: {
                    loop: true,
                    stagePadding: 0,
                }
            }
        });
    }
});


// Custom Javascript
! function () {

    // Selector Function
    var $ = (selector, areAll) => areAll ? document.querySelectorAll(selector) : document.querySelector(selector);

    // Global Variables




    // Constructor: UI
    function UI() {}



    // Function: Menu slide
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
            navigation.style.opacity = '1';
            // navigation.style.paddingBottom = '30px';
            navigation.style.height = navHeight + 71 + 'px';
        }


    }
    // Function: Reset Menu Height
    UI.prototype.resetMenuHeight = function () {
        if (this.innerWidth >= 1200) {
            $('.navigation').style.height = 'auto';
        } else {
            $('.navigation').style.height = 0;
        }
    }
    // Function: Home navigation show hide
    UI.prototype.showHideHomeNav = function () {
        if ($('section#home-navigation') && window.innerWidth <= 1199) {
            if (this.scrollY > 120) {
                $('section#home-navigation').style.transform = 'translateY(0)';
            } else {
                $('section#home-navigation').style.transform = 'translateY(-100%)';
            }

            // var position = scrollY;
            // window.addEventListener('scroll', function () {
            //     var scroll = scrollY;
            //     if (scroll > position) {
            //         $('section#home-navigation').style.transform = 'translateY(0)';
            //     } 
            //     position = scroll;
            // });

        }
    }
    // Function: Move Landig page Image
    UI.prototype.moveLandingImg = function () {
        if ($('.welcome-content')) {
            if (window.innerWidth <= 1199) {
                $('h1.welcome-title').insertAdjacentElement('beforebegin', $('.welcome-img-wrap'));
            } else {
                $('.welcome-content').parentElement.insertAdjacentElement('afterend', $('.welcome-img-wrap'));
            }
        }
    }
    // Function: Next week events same height
    UI.prototype.nextWeekEventsHeight = function () {
        var firstItem = $('.next-week-events .event-item');
        var remainingItems = $('.next-week-events .week-diff-event-item', true);

        var my = function () {
            remainingItems.forEach(function (item) {
                item.style.height = firstItem.offsetHeight + 'px';
            });
        }
        my();
        window.addEventListener('resize', my);
    }

    UI.prototype.moveSidebar = function () {
        if ($('.sidebar-col')) {
            if (window.innerWidth <= 1199) {
                $('.tickets').insertAdjacentElement('beforebegin', $('.sidebar-col'));
                // if($('.sidebar-col')) {
            } else {
                $('.tickets').parentElement.insertAdjacentElement('afterend', $('.sidebar-col'));
            }
        }
    }

    UI.prototype.moveButtons = function () {
        var buttons = $('#post-details-section .buy-now-share-btn');
        var postInfo = $('#post-details-section .post-info');
        var postInfoTop = $('#post-details-section .post-info-top');
        if (buttons) {
            if (window.innerWidth <= 767) {
                postInfo.insertAdjacentElement('beforeend', buttons);
                // if($('.sidebar-col')) {
            } else {
                postInfoTop.insertAdjacentElement('beforeend', buttons);
            }
        }

    }

    UI.prototype.moveSearch = function () {
        var nav = $('.navigation');
        if (window.innerWidth <= 767) {
            nav.insertAdjacentElement('beforebegin', $('header .search'));
        } else {
            nav.prepend($('header .search'));
        }
    }

    // Function: All Event listeners
    function allEventListener() {
        var ui = new UI();
        var navToggle = $('.navigation-toggle');
        var travelPromoteExploreItems = $('.travel-promote-explore li', true);

        // Event: Navigation
        navToggle.addEventListener('click', ui.menuSlide);
        window.addEventListener('resize', ui.resetMenuHeight);


        // Event: Landing Page Tab
        travelPromoteExploreItems.forEach(function (li) {
            li.addEventListener('click', function (e) {

                var thisImg = this.querySelector('img');

                travelPromoteExploreItems.forEach(function (li) {
                    li.classList.remove('active');
                })
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
                    $('li.promote img').src = 'assets/images/promote-black.png'
                }
                if (this.classList.contains('travel')) {
                    console.log('True');
                    $('.tab-content p', true).forEach(function (tab) {
                        tab.classList.remove('d-block');
                        tab.classList.add('d-none');
                    });
                    $('.tab-content .travel').classList.add('d-block');
                    $('.tab-content .travel').classList.remove('d-none');
                    thisImg.src = 'assets/images/travel-red.png'
                } else {
                    $('li.travel img').src = 'assets/images/travel-black.png'
                }
                if (this.classList.contains('explore')) {
                    $('.tab-content p', true).forEach(function (tab) {
                        tab.classList.remove('d-block');
                        tab.classList.add('d-none');
                    });
                    $('.tab-content .explore').classList.add('d-block');
                    $('.tab-content .explore').classList.remove('d-none');
                    thisImg.src = 'assets/images/explore-red.png'
                } else {
                    $('li.explore img').src = 'assets/images/explore-black.png'
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
        });

        // Event: Load DOM Content
        document.addEventListener('DOMContentLoaded', loadContent);

        // Event : Window Resize
        window.addEventListener('resize', function () {
            ui.moveLandingImg();
            ui.moveSidebar();
            ui.moveButtons();
            ui.moveSearch();
        });

        // Event: Window Scroll
        window.addEventListener('scroll', function () {
            ui.showHideHomeNav.call(this);
        });
    }
    allEventListener();


    // Function: Load Content
    function loadContent() {
        var ui = new UI();
        ui.moveLandingImg();
        ui.moveSidebar();
        ui.moveButtons();
        ui.nextWeekEventsHeight();
        ui.moveSearch();
    }

}();