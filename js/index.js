// メニューボタンのクリック
$(".header-menu-icon").on("click", function() {
    // モーダルの表示
    if($(".header-menu-icon-inner div").css("background-color") === "rgb(255, 255, 255)") {
        $(".header-menu-icon-inner div").css("background-color", "rgb(0, 0, 0)");
        $(".header-menu-icon").css("background-color", "rgb(255, 255, 255)");
        $(".header-menu").fadeIn();
        $(".header-menu-icon-inner div").addClass("open");

    } else {
        $(".header-menu-icon-inner div").css("background-color", "rgb(255, 255, 255)");
        $(".header-menu-icon").css("background-color", "rgb(0, 0, 0)");
        $(".header-menu").fadeOut();
        $(".header-menu-icon-inner div").removeClass("open");
    }
});



// .header-menu li:first-child
// .header-menu li:nth-child(2)
// .header-menu li:last-child
