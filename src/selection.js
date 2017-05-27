var $ = require('jquery');


function initSelection() {
    var nextId = 1;

    function emitSelection() {
        var selection = $('.section li.selected').map(function() {
            var li = $(this);
            return {
                id: li.data('id'),
                text: li.text(),
            };
        }).get();

        if (ns.onChange) {
            ns.onChange(selection);
        }
    }

    $('.section li').each(function() {
        var li = $(this);
        var id = nextId++;

        // TODO: Use ID from back-end
        li.data('id', id);
        li.click(function() {
            if (!li.hasClass('selected')) {
                var alreadySelected = $('.section li.selected');
                if (alreadySelected.length == 3) {
                    alreadySelected.first().removeClass('selected');
                }
            }

            li.toggleClass('selected');
            emitSelection();
        });
    });

    var ns = {
        clear: function() {
            $('.section li').each(function() {
                $(this).removeClass('selected');
            });

            emitSelection();
        },
    };

    return ns;
}

module.exports = initSelection
