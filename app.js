$(document).ready(function() {

	var color = 'white';
	var colors = 'red yellow green blue white';

	$('#red').on('click', function() {
		color = 'red';
	});

	$('#green').on('click', function() {
		color = 'green';
	});

	$('#blue').on('click', function() {
		color = 'blue';
	});

	$('#red').on('click', function() {
		color = 'red';
	});

	$('#yellow').on('click', function() {
		color = 'yellow';
	});

	$('#white').on('click', function() {
		color = 'white';
	});

	$('.box').on('click', function() {
		$(this).addClass(color);
	});

	$('.box').on('dblclick', function() {
		$(this).removeClass(colors);
	});

	$('#reset').on('click',function(){
		$('.box').removeClass(colors);
	});

});