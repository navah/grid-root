$(document).ready(function() {




//----------------------------------------
//--------hashchange and panel changing
//----------------------------------------

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
show('#tab-init');


//----------------------------------------
//--------hashchange and panel changing
//----------------------------------------

$('.hide-menu-link').click(function(){
  $('.toggle-menu').slideUp("slow");
});

$('.return-menu-link').click(function(){
  $('.toggle-menu').slideDown("slow");
});







$('.mid').hover(function() {

        $(this).addClass('card-hover');
    }, function() {
        $(this).removeClass('card-hover');



});







// outer-est loop
});
