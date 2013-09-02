$(document).ready(function(){

    $(".content").animate({top: '-950px'},1500);
    $("#homeimg").hide().fadeIn(2000);
    $(".subimage").hide().fadeIn(2000)
    
    $(".link").click(function(){
        var href = $(this).attr("href");
        $(".content").fadeOut(800, function(){
            window.location=href;
        });
        return false;
    });


    // music player stuff
    var browser = jQuery.uaMatch(navigator.userAgent).browser;
    
    if(browser == "webkit" || browser == "msie"){
        var player = 
            '<audio id="player" >\
                <source id="source" src="audio/Save Your Love For Me.mp3"></source>\
            </audio>';

        $(player).insertAfter("#menu")
    }
    else if (browser == "mozilla"){
        var player = 
            '<audio id="player" >\
                <source id="source" src="audio/Save Your Love For Me.ogg"></source>\
            </audio>';   
        $(player).insertAfter("#menu")
    }


    $('#play').click(function(){
        PlayPause();
        TrackProgress(); 
    });

    $('#next').click(function(){
        NextTrack();
    });

    $('#prev').click(function(){
        NextTrack();
    });


    // $('.content').draggable();


    setInterval("SlideShow()", 5000);

});

function SlideShow(){
        var active = $('#slideshow IMG.active');

        if (active.length == 0){
            active = $('#slideshow img:last');
        }
        var next = active.next().length ? active.next() : $('#slideshow img:first');

        active.addClass('last-active');

        next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 2000, function(){
            active.removeClass('active last-active');
        })
        active.removeClass('active');
}



function NextTrack(){
    
    var track = $('source').attr('src'); //get the source of the audio tag
    var position = $('#play'); //div with play/pause button image, used to adjust position

    if (track == 'audio/Save Your Love For Me.mp3'){

            $('#source').attr('src', 'audio/Foggy Day.mp3');
            track = $('source').attr('src');
            $('#trackname').html(track.slice(6,-4));

            if ($(position).css('background-position') == '3px 50%'){
                PlayPause();
            }

            document.getElementById('player').load();
    }
    else if (track == 'audio/Save Your Love For Me.ogg'){

            $('#source').attr('src', 'audio/Foggy Day.ogg');
            track = $('source').attr('src');
            $('#trackname').html(track.slice(6,-4));

            if ($(position).css('background-position') == '3px 50%'){
                PlayPause();
            }

            document.getElementById('player').load();
    }
    else if (track == 'audio/Foggy Day.mp3'){
            $('#source').attr('src', 'audio/Save Your Love For Me.mp3');
            track = $('source').attr('src');
            $('#trackname').html(track.slice(6,-4));

            if ($(position).css('background-position') == '3px 50%'){
                PlayPause();
            }

            document.getElementById('player').load();
    } 
    else if (track == 'audio/Foggy Day.ogg'){
            $('#source').attr('src', 'audio/Save Your Love For Me.ogg');
            track = $('source').attr('src');
            $('#trackname').html(track.slice(6,-4));

            if ($(position).css('background-position') == '3px 50%'){
                PlayPause();
            }

            document.getElementById('player').load();
    } 
}


function TrackProgress(){
    audio = $('#player').get(0);

    audio.addEventListener('timeupdate', function(){
        var length   = audio.duration;
        var secs     = audio.currentTime;
        var progress = (secs/length) * 100;
        $('#buffer').css({width: progress * 2});
        var tcMins = parseInt(secs/60);
        var tcSecs = parseInt(secs  - (tcMins * 60));
        if (tcSecs < 10) {
            tcSecs = '0' + tcSecs;
        };

        $('#timecode').html(tcMins + ':' + tcSecs);
    });
}

// checks the position of the play/pause img and adjusts with each click.
// also plays and pauses audo depending on the position of the image
function PlayPause(){
    var position = $('#play').get(0);
    var track = $('source').attr('src');
    $('#trackname').html(track.slice(6,-4));
    
    if($(position).css('background-position') == '-27px 50%' || $(position).css('background-position') == '-27px'){
        $(position).css('background-position', '3px 50%');
        document.getElementById('player').play()
    }
    else if($(position).css('background-position') == '3px 50%' || $(position).css('background-position') == '3px'){
         $(position).css('background-position','-27px 50%')
         document.getElementById('player').pause();            
    }

}; //end  PlayPause




   
        



