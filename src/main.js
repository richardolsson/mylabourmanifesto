var $ = require('jquery');

var initSelection = require('./selection');
var initPreview = require('./preview');


$(document).ready(function() {
    var preview = initPreview();
    var model = initSelection();

    preview.onClose = function() {
        preview.toggle(false);
    }

    preview.onClear = function() {
        model.clear();
        preview.toggle(false);
    }

    model.onChange = function(selection) {
        preview.render(selection);
        preview.toggle(selection.length > 0);
    };
});
