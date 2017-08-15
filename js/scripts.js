$(document).ready(function() {
  var suits = ["clubs", "diamonds", "hearts", "spades"];
  var numbers = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  suits.forEach(function(suit) {
    numbers.forEach(function(number){
      $("#cards").append("<li>" + number +  " of " + suit + "</li>");
    });
  });
});
