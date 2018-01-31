$(document).ready(function(){

var windowHt = $(window).height();
var navHt = $('#navigation').height();

$('.hero-Size').css('height', windowHt);
$('#slide2').css('height', windowHt - navHt);
$('.vert-centr').css('padding-top', navHt);

});
