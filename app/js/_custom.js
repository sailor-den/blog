document.addEventListener("DOMContentLoaded", function() {

    // FADE OUT EFFECT WHEN CLICK A LINK
    $(document).on("click", "a:not(.lightbox)", function () {
        var newUrl = $(this).attr("href");
        if (!newUrl || newUrl[0] === "#") {
            location.hash = newUrl;
            return;
        }
        $("html").fadeOut(function () {
            location = newUrl;
        });
        return false;
    });

    function smokeeffect () { 
        var modalTrigger = $('.nav-icon'),
            transitionLayer = $('.cd-transition-layer'),
            transitionBackground = transitionLayer.children(),
            modalWindow = $('.modal-menu');
    
        var frameProportion = 1.78, //png frame aspect ratio
            frames = 25, //number of png frames
            resize = false;
    
        //set transitionBackground dimentions
        // setLayerDimensions();
        // $(window).on('resize', function(){
        //     if( !resize ) {
        //         resize = true;
        //         (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
        //     }
        // });
    
        //open modal window
        modalTrigger.on('click', function(event){   
            event.preventDefault();
            transitionLayer.addClass('visible opening');
            var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
            setTimeout(function(){
                modalWindow.addClass('visible');
            }, delay);
        });
    
        //close modal window
        modalWindow.on('click', '.modal-close', function(event){
            event.preventDefault();
            transitionLayer.addClass('closing');
            modalWindow.removeClass('visible');
            transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
                transitionLayer.removeClass('closing opening visible');
                transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
            });
        });
    
        // function setLayerDimensions() {
        //     var windowWidth = $(window).width(),
        //         windowHeight = $(window).height(),
        //         layerHeight, layerWidth;
    
        //     if( windowWidth/windowHeight > frameProportion ) {
        //         layerWidth = windowWidth;
        //         layerHeight = layerWidth/frameProportion;
        //     } else {
        //         layerHeight = windowHeight*1.2;
        //         layerWidth = layerHeight*frameProportion;
        //     }
    
        //     transitionBackground.css({
        //         'width': layerWidth*frames+'px',
        //         'height': layerHeight+'px',
        //     });
    
        //     resize = false;
        // }
    
    }
    smokeeffect();

   


});


// $(function glitchEffect(){
//     $glitch = $('.glitch');
//     var x = (Math.random() * 200);
//     var y = (Math.random() * 200);

//     $glitch.css({
//         'left' : x + 'px',
//         'top' : y + 'px',
//     }).appendTo('section').fadeOut(200, function(){
//         $(this).remove();
//         glitchEffect();
//     });

// })();

$(document).ready(function(){
    $('#pagepiling').pagepiling({
        navigation: {
            'textColor': '#fff',
            'bulletsColor': '#fff',
            'position': 'right',
            'tooltips': ['Norvay', 'Switzerland', 'Austria', 'Italy']
        },
    });
});