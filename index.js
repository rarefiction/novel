var currentPosition = 0;

$(".grey").click(function () {
  console.log("pressed");
  currentPosition++;

  moveGrey(currentPosition);
});

function moveGrey(number) {
  $(".grey").addClass("position" + number);
  $(".grey").removeClass("position" + (number - 1));
  if (number === 2) {
    $(".red").removeClass("hidden");
  } else if (number === 3) {
    $(".green").removeClass("hidden");
  } else if (number === 4) {
    $(".blue").removeClass("hidden");
  } else if (number === 5) {
    $(".btn").addClass("center");
  }
}
