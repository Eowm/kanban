var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '3400',
    'X-Auth-Token': 'db7e74382806aee7b75a89481df5efce'
};

// KLASA KANBAN CARD
function Card(id, name) {
    this.id = id;
    this.name = name || 'name';
    this.description = description;
    this.element = generateTemplate('card-template', {
        description: this.name
    }, 'li')

}

Card.prototype = {
    removeCard: function() {
    var self = this;

    fetch(baseUrl + '/card/' + self.id, {
            method: 'DELETE',
            headers: myHeaders
        })
        .then(function(resp) {
            return resp.json();
        })
        .then(function(resp) {
            self.element.parentNode.removeChild(this.element);
        })
}
}

