var $ = require('jquery');

var initSelection = require('./selection');
var initPreview = require('./preview');


$(document).ready(function() {
    var preview = initPreview();

    initSelection(function(selection) {
        preview.render(selection);
    });
});
