var React=require('react');
var ReactDOM=require('react-dom');
window.jQuery = require('jquery');
window.$=window.jQuery;
var Bootstrap = require('bootstrap');
var Loader=require('./loading.js');
$( document ).ready(function(){
console.log("Running");
ReactDOM.render(
  <Loader max="100" val="16"/>,
  document.getElementById('example')
);
});

