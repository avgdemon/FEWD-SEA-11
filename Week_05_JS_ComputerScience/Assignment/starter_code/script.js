$(document).ready(function() {
$('#submit-btn').click(function(event) {
  event.preventDefault();

  var city = $('#city-type').val();
  // var toDo = event.target.inputField.value;
  // console.log($('#city-type').val());
  // // console.log(toDo);
  
  city = city.toLowerCase()

  if (city == 'nyc' || city == 'new york' || city == 'new york city') {
    $('body').attr('class', 'nyc');

    // addClass(".nyc");
    console.log(city);
  } 
  else if (city == 'sf' || city == 'san francisco') {
    $("body").addClass("sf");
     console.log(city);
  }
  else if (city == 'la' || city == 'los angeles') {
    $('body').addClass('la');
     console.log(city);
  }
  else if (city == 'austin') {
    $('body').addClass('austin');
     console.log(city);
  }
  else if (city == 'sydney') {
    $('body').addClass('sydney');
     console.log(city);
  }
  else {
    alert("Chose differet city! may be NYC, LA, SF, Sydney or Austin :)");
  }


  // toDoItem.prepend(
  //   `<li class="toDo">
  //   <p>` + toDo + `</p>
  //   <button>X</button>
  //   <div class="clear"></div>
  //   </li>`);

  $('#city-type').val('');

});
});
