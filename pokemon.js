$(document).ready(function() {
  $.get('http://pokeapi.co/media/sprites/pokemon/413.png', function(data) {
    $('#container').html(data);
  });

})
