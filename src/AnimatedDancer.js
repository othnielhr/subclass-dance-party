var makeAnimatedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('animateDancer');
};

makeAnimatedDancer.prototype = Object.create(makeDancer.prototype);
makeAnimatedDancer.prototype.constructor = makeAnimatedDancer;



makeAnimatedDancer.prototype.step = function() {
  // var oldStep = makeDancer.prototype.step;
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};