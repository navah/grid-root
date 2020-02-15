$(document).ready(function() {




function show(id) {
// selected off tabs, then on a tab
$('.tab').removeClass('selected').filter(function () {
return (this.hash === id);
}).addClass('selected');

// hide and selectively filter an individual panel
$('.panel').hide().filter(id).show();
}

$(window).on('hashchange', function () {
show(location.hash);
});

// start with the first tab (temporary, obvi)
show('#tab-the-first');



});
