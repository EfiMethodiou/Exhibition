/*
<div class="ripple-wrap"><div class="ripple"></div></div>
*/

$(document).ready(function () {
  var ripple_wrap = $(".ripple-wrap"),
    rippler = $(".ripple"),
    finish = false,
    monitor = function (el) {
      var computed = window.getComputedStyle(el, null),
        borderwidth = parseFloat(
          computed.getPropertyValue("border-left-width")
        );
      if (!finish && borderwidth >= 1500) {
        el.style.WebkitAnimationPlayState = "paused";
        el.style.animationPlayState = "paused";
       
      }
      if (finish) {
        el.style.WebkitAnimationPlayState = "running";
        el.style.animationPlayState = "running";
        return;
      } else {
        window.requestAnimationFrame(function () {
          monitor(el);
        });
      }
    };

  rippler.bind(
    "webkitAnimationEnd oAnimationEnd msAnimationEnd mozAnimationEnd animationend",
    function (e) {
      ripple_wrap.removeClass("goripple");
    }
  );

  $("body").on("click", "#right_direction", function (e) {
    console.log("this part runs");
    rippler.css("left", e.clientX + "px");
    rippler.css("top", e.clientY + "px");
    e.preventDefault();

    finish = false;
    ripple_wrap.addClass("goripple");
    window.requestAnimationFrame(function () {
      monitor(rippler[0]);
    });
  });


});
