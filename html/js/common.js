$(function() {
    'use strict';

    //-------------------------------
    //Gallery
    //-------------------------------
    $('.details__galery-box').on('click', '.details__galery-item:not(.active)', function() {
        var imgPath = $(this).children('img').attr('src');
        var oldImage = $('.details__galery-bigphoto img');
        var newImage = $('<img src="' + imgPath + '">');
        newImage.hide();
        $('.details__galery-bigphoto').append(newImage);
        newImage.fadeIn(600);
        oldImage.fadeOut(600, function() {
            $(this).remove();
        });
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.details__galery-item:first').click();

    //---------------------------------
    //Адаптивный слайдер
    //---------------------------------
    $(".reviews__slider").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        smartSpeed: 800,
        autoHeight: true
    });

    //------------------------------------
    //popup
    //------------------------------------

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    $(".popup-youtube").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    })

    //------------------------------------
    // Плавный скролл
    //------------------------------------

    $(".header__nav a[href*='#']").mPageScroll2id();
    $(".footer__logo a[href*='#']").mPageScroll2id();


    //------------------------------------
    //E-mail Ajax Send
    //------------------------------------

	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$.magnificPopup.close();
			}, 1000);
		});
		return false;
	});

});
