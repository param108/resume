var React=require('react');
var ReactDOM=require('react-dom');
var $=require('jquery');

$( document ).ready(function(){
console.log("Running");
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
});

