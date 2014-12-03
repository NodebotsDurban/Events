var express = require('express');
var five = require('johnny-five');

var board = new five.Board(),
    app = express(),
    led;



app.get('/ledOn',function(req,res){
  led.on();
  res.send('cool its on');
});

app.get('/ledOff',function(req,res){
  led.off();
  res.send('cool its off');
});

app.use(express.static(__dirname + '/www'));

board.on('ready',function(){

  led = new five.Led(13);
  app.listen(8080);
});
