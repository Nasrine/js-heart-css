var $header = $('header');
$header.addClass('masthead');

var $h1 = $('h1');
var $main = $('main');
var $pFirstChild = $('pFirstChild');
var $h2 = $('h2');
var $ulSlugList = $('main ul');
var $images = $('images');
var $liFirstChild = $('liFirstChild');
var $liLastChild = $('liLastChild');
var $dl = $('dl');
var $dt = $('dt');



$h1.removeClass('big-heading');
$h1.addClass('logo');
$main.addClass('wrapper');
$pFirstChild.addClass ('intro');
$h2.addClass('slug-head');
$ulSlugList.addClass('slug-list');
$images.addClass('var');
$liFirstChild.addClass('slug-list-first');
$liLastChild.addClass('slug-list-last');
$dl.addClass('classification');
$dt.removeClass( 'big-label');
$liLastChild.show();



