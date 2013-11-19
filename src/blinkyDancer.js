var BlinkyDancer = function(top, left, timeBetweenSteps){
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //var oldStep = this.step;
  //var that = this;
  // this.step = function(){
  //   oldStep();
  //   this.$node.toggle();
  // };

};

BlinkyDancer.prototype = new Dancer();

BlinkyDancer.prototype.step = function(){
  // do what whatever a blinky dancer does
  //oldStep();
  //Dancer.prototype.$node.toggle();
  console.log('blinky proto set:', this);
this.$node.toggle();
  Dancer.prototype.step.call(this);

  
};

BlinkyDancer.prototype.constructor = BlinkyDancer;


