jQuery(document).ready(function() {
    jQuery('.presentation, .info, .mobile, .content-opensource').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
       });

});


