$(document).ready(function() {
    $("nav img").click(function() {
        window.location.href = "home.html";
    });
                
    $(document).scroll(function () {
        var $nav = $("nav");
        $nav.toggleClass('whitenav', $(this).scrollTop() > $nav.height());
        var $logo = $(".container nav > a");
        $logo.toggleClass('blacklogo', $(this).scrollTop() > $nav.height());
        var $links = $(".container nav .innernav a");
        $links.toggleClass('blacklinks', $(this).scrollTop() > $nav.height());
        var $up = $(".container .fa-arrow-up");
        $up.toggleClass('upvisible', $(this).scrollTop() > $nav.height());
    });
    
    $(".container .mobilenav").hide();
    
    $(".container .projects .project:first-of-type").click(function() {
        window.open("http://fuckan.mario.skola-zabok.avalon.hr/stranice/zoo/index.html");
    });
    
    $(".container .projects .project:nth-of-type(2)").click(function() {
        window.open("http://fuckan.mario.skola-zabok.avalon.hr/stranice/ubisoft/index.html");
    });
    
    $(".container .projects .project:nth-of-type(3)").click(function() {
        window.open("http://fuckan.mario.skola-zabok.avalon.hr/stranice/geazy/index.html");
    });
    
    $(".container .projects .project:last-of-type").click(function() {
        window.open("http://fuckan.mario.skola-zabok.avalon.hr/stranice/christmas/index.html");
    });
    
    $(".container .menu").click(function() {
        $(".container .menu .line1").toggleClass("line1anim");
        $(".container .menu .line2").toggleClass("line2anim");
        $(".container .mobilenav").slideToggle(500);
    });
    
    $(".container .mobilenav a").click(function() {
        $(".container .mobilenav").hide(500);
        $(".container .menu .line1").toggleClass("line1anim");
        $(".container .menu .line2").toggleClass("line2anim");
    });
    
    $(".container .fa-arrow-up").click(function() {
        $(".container .mobilenav").hide(500);
        $(".container .menu .line1").toggleClass("line1anim");
        $(".container .menu .line2").toggleClass("line2anim");
    });
});
