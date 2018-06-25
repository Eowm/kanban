var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '3400',
    'X-Auth-Token': 'db7e74382806aee7b75a89481df5efce'
};

function Column(id, name) {
    this.id = id;
    this.name = name || 'No name given';

    removeColumn: function() {
  var self = this;
  fetch(baseUrl + '/column/' + self.id, { method: 'DELETE', headers: myHeaders })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(resp) {
      self.element.parentNode.removeChild(self.element);
    });
}
}



if (event.target.classList.contains('add-card')) {
  var cardName = prompt("Enter the name of the card");
  event.preventDefault();

 fetch(baseUrl + '/card', {
      method: 'POST',
      body: data,
    })
    .then(function(res) {
      return res.json();
    })
    .then(function() {
      var card = new Card(resp.id, cardName);
    });

  self.addCard(new Card(cardName));
}