// OGÓLNA FUNKCJA
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '3400',
    'X-Auth-Token': 'db7e74382806aee7b75a89481df5efce'
};


fetch(baseUrl + '/board', {
        headers: myHeaders
    })
    .then(function(resp) {
        return resp.json();
    })
    .then(function(resp) {
        setupColumns(resp.columns);
    });

function setupColumns(columns) {
  columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
    board.addColumn(col);
    setupCards(col, column.cards);
  });
}


function setupCards(col, cards) {
    cards.forEach(function(card) {
            var card = new Card(card.id, card.name);
            col.addCard(card);
        })
    }