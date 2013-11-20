var FatDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};


FatDancer.prototype = new Dancer();
FatDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.removeClass("dancer").addClass("fats").animate({
    left: '+=20'
  });
};

FatDancer.prototype.constructor = FatDancer;