var assign = require('object-assign');
var Dispatcher=require('./dispatcher');
var Dispatch = assign({}, Dispatcher.prototype,{});

var React=require('react');
var ReactDOM=require('react-dom');
window.jQuery = require('jquery');
window.$=window.jQuery;
var Bootstrap = require('bootstrap');
var Loader=require('./loading.js');

var incId;
function endit() {
  clearInterval(incId);
}
$( document ).ready(function(){
console.log("Running");
incID = setInterval(function() { Dispatch.dispatch('INCREMENT_LOADING',{endfn: endit}); }, 3000);
ReactDOM.render(
  <Loader max="100" val="16" inc="10"/>,
  document.getElementById('example')
);
});

