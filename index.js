var currentPosition = 0;

function hideAll() {
  $(".grey").addClass("hidden");
  $(".green").addClass("hidden");
  $(".blue").addClass("hidden");
  $(".red").addClass("hidden");
}

$(".grey").click(function () {
  console.log("pressed");
  currentPosition++;

  moveGrey(currentPosition);
});

function moveGrey(number) {
  $(".grey").addClass("position" + number);
  $(".grey").removeClass("position" + (number - 1));
  $("h1").text("Continue pressing");
  if (number === 2) {
    $(".red").removeClass("hidden");
  } else if (number === 3) {
    $(".green").removeClass("hidden");
  } else if (number === 4) {
    $(".blue").removeClass("hidden");
  } else if (number === 5) {
    $(".btn").addClass("center");
    $("h1").text("Pick a color");
  } else if (number > 5) {
    $("html").css("background-color", "grey");
    setTimeout(function(){
      $("html").css("background-color","white");
    },200);
    $("h1").text("About us");
    hideAll();
  }
}

$(".red").click(function () {
  $("html").css("background-color", "red");
  $("h1").text("A와 B 옆 C");
  hideAll();
  $("h1").css("position", "static");
  $(".novel1").removeClass("displayNone");
  setTimeout(function(){
    $("html").css("background-color","white");
  },200);
});

$(".green").click(function () {
  $("html").css("background-color", "green");
  $("h1").text("DAVID");
  hideAll();
  $("h1").css("position", "static");
  $(".novel2").removeClass("displayNone");
  setTimeout(function(){
    $("html").css("background-color","white");
  },200);
});

$(".blue").click(function () {
  $("html").css("background-color", "blue");
  $("h1").text("현이의 오늘 하루는?");
  hideAll();
  $("h1").css("position", "static");
  $(".novel3").removeClass("displayNone");
  setTimeout(function(){
    $("html").css("background-color","white");
  },200);
});
