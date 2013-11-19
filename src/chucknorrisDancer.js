var ChuckDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};


ChuckDancer.prototype = new Dancer();
ChuckDancer.prototype.step = function(){
  console.log('blinky proto set:', this);
  Dancer.prototype.step.call(this);
  this.$node.removeClass("dancer").addClass("chuck");
};

ChuckDancer.prototype.constructor = ChuckDancer;