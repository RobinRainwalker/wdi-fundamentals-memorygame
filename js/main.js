var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage:"images/king-of-diamonds.png",
  }
];

var cardsInPlay = [];

var checkForMatch = function() {
  debugger
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("Yah did it. Ahm so proud o' yah");
  }
  else {
    alert("hahahaha scrub");
  }
}

var flipCard = function(cardElement) {
 var cardId = cardElement.getAttribute('data-id');
    cardsInPlay.push(cards[cardElement.getAttribute('data-id')].rank);
    cardElement.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length >= 2) {
    checkForMatch();
  }
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
};

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png')
    cardElement.setAttribute('data-id', i);
    document.getElementById('game-board').appendChild(cardElement);
    cardElement.addEventListener('click', function(){
      flipCard(this);
    });

  }
};

createBoard();

console.log("test");
