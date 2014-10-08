$(document).ready(function(){

	$("#main-slider").owlCarousel({
		singleItem: true,
		autoplay:true,
    	autoplayTimeout:5000,
		addClassActive: true,
		items:1,
        autoplaySpeed:2000,
        fluidSpeed:2000,
        smartSpeed:2000,
        loop:true,
        nav:true
	});

	$("#partner-slider").owlCarousel({
		singleItem: true,
		autoplay:true,
    	autoplayTimeout:5000,
		addClassActive: true,
		items:4,
        autoplaySpeed:2000,
        fluidSpeed:2000,
        smartSpeed:2000,
        loop:true,
        nav:true,
        margin:10
	});

    $(".products-slider").owlCarousel({
        singleItem: true,
        autoplay:true,
        autoplayTimeout:5000,
        addClassActive: true,
        items:4,
        autoplaySpeed:2000,
        fluidSpeed:2000,
        smartSpeed:2000,
        loop:true,
        nav:true,
        margin:10
    });

    
    $('.popup').fancybox({
        padding: 0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
});
