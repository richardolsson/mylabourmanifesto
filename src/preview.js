var $ = require('jquery');


function initPreview() {
    var preview = $(document.createElement('div'));
    preview.attr('id', 'preview');
    $('#manifesto').after(preview);

    var ul = $(document.createElement('ul'));
    preview.append(ul);

    return {
        render: function(selection) {
            ul.find('li').remove();

            $.each(selection, function(idx, item) {
                var li = $(document.createElement('li'));
                li.text(item.text);
                ul.append(li);
            });
        }
    };
}

module.exports = initPreview;
