var $ = require('jquery');


function initPreview() {
    var preview = $(document.createElement('div'));
    preview.attr('id', 'preview');
    $('#manifesto').after(preview);

    var h = $(document.createElement('h1'));
    h.text('Now share your manifesto');
    preview.append(h);

    var canvas = $(document.createElement('div'));
    canvas.addClass('content');
    preview.append(canvas);

    var ul = $(document.createElement('ul'));
    canvas.append(ul);

    var tools = $(document.createElement('div'));
    tools.addClass('tools');
    preview.append(tools);

    var ns = {
        render: function(selection) {
            ul.find('li').remove();

            $.each(selection, function(idx, item) {
                var li = $(document.createElement('li'));
                li.text(item.text);
                ul.append(li);
            });

            tools.find('button').remove();

            if (selection.length > 0) {
                var shareButton = $(document.createElement('button'));
                shareButton.text('Share');
                tools.append(shareButton);

                var clearButton = $(document.createElement('button'));
                clearButton.text('Clear');
                clearButton.click(function() {
                    console.log('click');
                    console.log(ns);
                    if (ns.onClear) {
                        ns.onClear();
                    }
                });
                tools.append(clearButton);

                if (selection.length < 3) {
                    var moreButton = $(document.createElement('button'));
                    moreButton.text('Add more');
                    moreButton.click(function() {
                        if (ns.onClose) {
                            ns.onClose();
                        }
                    });
                    tools.append(moreButton);
                }
            }
        },

        toggle: function(visible) {
            preview.toggleClass('visible', visible);
        },
    };

    return ns;
}

module.exports = initPreview;
