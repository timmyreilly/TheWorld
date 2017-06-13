// site.js

(function () {
    //var ele = document.getElementById("username");
    //ele.innerHTML = "Tim Reilly"

    //var main = document.getElementById("main");

    //main.onmouseenter = function () {
    //    main.style.backgroundColor = "#888";
    //};

    //main.onmouseleave = function () {
    //    main.style.backgroundColor = ""
    //};

    var $sidebarAndWrapper = $("#sidebar, #wrapper");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
    });

})();

// no longer executing in the global scope because its an anonymous function  