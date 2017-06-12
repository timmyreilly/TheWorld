// site.js

(function () {

    var ele = document.getElementById("username");
    ele.innerHTML = "Tim Reilly"

    var main = document.getElementById("main");

    main.onmouseenter = function () {
        main.style.backgroundColor = "#888";
    };

    main.onmouseleave = function () {
        main.style.backgroundColor = ""
    };

})();

// no longer executing in the global scope because its an anonymous function  