$(document).ready(function(){

    var sectionOpen = false;
    var aboutOpen = false;
    var contactOpen = false;

    function open(section){
        $(section).addClass("animate__animated animate__fadeInDown").one('animationend webkitAnimationEnd oAnimationEnd', function() {
        });
        sectionOpen = true;
    }

    function close(section){
        $(section).addClass("animate__animated animate__fadeOutDown").one('animationend webkitAnimationEnd oAnimationEnd', function() {
            $(section).removeClass();
        });
        sectionOpen = false;
    }

    $("#js-about").click(function(){
        if(sectionOpen == false) {
            open("#section-about");
            $("#splash").hide(500);
            aboutOpen = true;
        }
        else if (contactOpen == true) {
            close("#section-contact");
            open("#section-about");
            contactOpen = false;
            aboutOpen = true;
        }
        else{
            close("#section-about");
            $("#splash").show();
            aboutOpen = false;
        }
    });

    $("#js-contact").click(function(){
        if(sectionOpen == false) {
            open("#section-contact");
            $("#splash").hide(500);
            contactOpen = true;
        }
        else if (aboutOpen == true) {
            close("#section-about");
            open("#section-contact");
            aboutOpen = false;
            contactOpen = true;
        }
        else{
            close("#section-contact");
            $("#splash").show();
            contactOpen = false;
        }
    });
})