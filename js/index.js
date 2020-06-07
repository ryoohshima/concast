$(".header-menu-icon").on("click", function() {
    if($(".header-menu-icon-inner div").css("background-color") === "rgb(255, 255, 255)") {
        $(".header-menu-icon-inner div").css("background-color", "rgb(0, 0, 0)");
        $(".header-menu-icon").css("background-color", "rgb(255, 255, 255)");
        $(".header-menu").fadeIn();
    } else {
        $(".header-menu-icon-inner div").css("background-color", "rgb(255, 255, 255)");
        $(".header-menu-icon").css("background-color", "rgb(0, 0, 0)");
        $(".header-menu").fadeOut();
    }
});
