var assign = require('object-assign');
var Dispatcher=require('./dispatcher');
var Dispatch = assign({}, Dispatcher.prototype,{});

var React=require('react');
var ReactDOM=require('react-dom');
window.jQuery = require('jquery');
window.$=window.jQuery;
var Bootstrap = require('bootstrap');
var Loader=require('./loading.js');
var Timeline = require('./timeline.js');
var Waiting= require('./waiting.js');

$( document ).ready(function(){
console.log("Running");
/*ReactDOM.render(
  <Loader max="100" val="16" inc="10"/>,
  document.getElementById('loading')
);*/

ReactDOM.render(
  <Timeline start="2000" end="2016" pos="2016"/>,
  document.getElementById('timeline')
);

ReactDOM.render(
  <Waiting/>,
  document.getElementById('waiting')
);

});

