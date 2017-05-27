var $ = require('jquery');


function initSelection(onChange) {
    var nextId = 1;

    function emitSelection() {
        var selection = $('.section li.selected').map(function() {
            var li = $(this);
            return {
                id: li.data('id'),
                text: li.text(),
            };
        }).get();

        onChange(selection);
    }

    $('.section li').each(function() {
        var li = $(this);
        var id = nextId++;

        // TODO: Use ID from back-end
        li.data('id', id);
        li.click(function() {
            li.toggleClass('selected');
            emitSelection();
        });
    });
}

module.exports = initSelection
