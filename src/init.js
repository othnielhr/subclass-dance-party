$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($('body').height() * Math.random()),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('#MyButton').on('click', function(event) {
    var neg = $('body').width() / 2;
    var pos = $('body').width() / 2;
    for (var dancer = 0; dancer < window.dancers.length; dancer++) {
      if (dancer === 0) {
        window.dancers[dancer].lineUp(pos);
      } else if (dancer % 2 === 1) {
        pos += 100;
        window.dancers[dancer].lineUp(pos);
      } else if (dancer % 2 === 0) {
        neg -= 100;
        window.dancers[dancer].lineUp(neg);
      }
    }
  });

  $('#PairUp').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i += 2) {
      var x = (window.dancers[i].left + window.dancers[i + 1].left) / 2;
      var y = (window.dancers[i].top + window.dancers[i + 1].top) / 2;
      window.dancers[i].setPosition(x, y + 300);
      window.dancers[i + 1].setPosition(x + 45, y + 300);
    }
  });

  $('#OriginalPos').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i ++) {
      window.dancers[i].setPosition(window.dancers[i].top, window.dancers[i].left);
    }
  });


});
