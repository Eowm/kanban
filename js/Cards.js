// KLASA KANBAN CARD
function Card(id, name) {
    this.id = id;
    this.name = name || 'name';
    this.description = description;
    this.element = generateTemplate('card-template', {
                description: this.name

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