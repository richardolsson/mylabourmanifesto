var $ = require('jquery');


function initPreview() {
    var shader = $(document.createElement('div'));
    shader.attr('id', 'preview-shader');
    $('#manifesto').after(shader);

    var preview = $(document.createElement('div'));
    preview.attr('id', 'preview');
    shader.after(preview);

    var h = $(document.createElement('h1'));
    h.text('Now share your manifesto');
    preview.append(h);

    var canvas = $(document.createElement('div'));
    canvas.addClass('content');
    preview.append(canvas);

    var logo = $(document.createElement('img'));
    logo.attr('src', '/static/logo.svg'); // TODO: Don't hardcode static path
    logo.addClass('logo');
    canvas.append(logo);

    var credits = $(document.createElement('span'));
    credits.addClass('credits');
    credits.text('Created with mylabourmanifesto.com');
    canvas.append(credits);

    var pledges = $(document.createElement('div'));
    pledges.addClass('pledges');
    canvas.append(pledges);

    var header = $(document.createElement('h1'));
    header.text("I'm voting Labour because:");
    pledges.append(header);

    var tools = $(document.createElement('div'));
    tools.addClass('tools');
    preview.append(tools);

    var ns = {
        render: function(selection) {
            pledges.find('p').remove();
            pledges.removeClass('small medium large');

            if (selection.length) {
                pledges.addClass(['large', 'medium', 'small'][selection.length - 1]);
            }

            $.each(selection, function(idx, item) {
                var p = $(document.createElement('p'));
                var text = item.text;

                // Number paragraphs if there are more than one
                if (selection.length > 1) {
                    text = (idx+1) + '. ' + text;
                }

                p.text(text);
                pledges.append(p);
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
            shader.toggleClass('visible', visible);
            preview.toggleClass('visible', visible);
        },
    };

    return ns;
}

module.exports = initPreview;
