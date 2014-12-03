var five = require('johnny-five'),
    board;

board = new five.Board();

board.on('ready',function(){
  
  var leftMotor = new five.Motor({
    pins: {
      pwm: 10,
      dir: 8
    }
  });

  var rightMotor = new five.Motor({
    pins: {
      pwm: 9,
      dir: 7
    }
  });

  function forFunc(time){
    setTimeout(function(){
          stop();
    },time);
  };

  function forward(speed){
    leftMotor.reverse(speed);
    rightMotor.reverse(speed);

    return {
      'for' :forFunc 
    };
  }

  function backward(speed){
    leftMotor.forward(speed);
    rightMotor.forward(speed);
  }
  
  function stop(){
    leftMotor.stop();
    rightMotor.stop();
  }
   
   
  var drive =  {
    forward :forward,
    backward: backward
  };



  this.repl.inject({
    drive: drive ,
    stop: stop
  });

});
