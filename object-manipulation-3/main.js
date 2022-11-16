console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'John',
    hand: [],
    score: null
  },
  {
    name: 'Jacob',
    hand: [],
    score: null
  },
  {
    name: 'Jingle',
    hand: [],
    score: null
  },
  {
    name: 'Heimer',
    hand: [],
    score: null
  }
];

var suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

function createDeck() {
  var array = [];
  for (var i = 0; i < rank.length; i++) {
    for (var k = 0; k < suit.length; k++) {
      var card = { rank: rank[i], suit: suit[k] };
      array.push(card);
      // array.push(suit[i] + rank[k]);
    }
    console.log('deck', array);
    console.log('card', card);
  }
  return array;
}
var deck = createDeck();

// var shuffleDeck = _.shuffle(deck);
// console.log(shuffleDeck, 'shuffleDeck');

function shuffleDeck() {
  for (var i = 0; i < deck.length; i++) {
    var nicelady = deck[i];
    var random = Math.floor(Math.random() * deck.length);
    deck[i] = deck[random];
    deck[random] = nicelady;
    console.log('nicelady', deck[i]);
  }
  return deck;
}
shuffleDeck();

function dealDeck() {
  for (var i = 0; i < players.length; i++) {
    var popCard = deck.pop();
    players[i].hand.push(popCard); // ERROR: not a function says devTools (was '' instead of [])
  }
  return players;

}
dealDeck();

function calculateScore() {
  for (var i = 0; i < players.length; i++) {
    for (var f = 0; f < players[i].hand.length; f++) {
      if (players[i].hand[f].rank === 'A') {
        players[i].score += 11;
      } else if (players[i].hand[f].rank === 'K' || players[i].hand[f].rank === 'Q' || players[i].hand[f].rank === 'J') {
        players[i].score += 10;
      } else {
        players[i].score += parseInt(players[i].hand[f].rank);
      }
    }
  }
}
calculateScore();

function winner() {
  var scores = [];
  for (var i = 0; i < players.length; i++) {
    scores.push(players[i].score);
  }
  var winnerName = scores.indexOf(Math.max.apply(null, scores));
  console.log('The winner is ' + players[winnerName].name + ' with a score of ' + Math.max.apply(null, scores));
}

winner();
