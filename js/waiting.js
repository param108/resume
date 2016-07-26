react=require('react');
var assign = require('object-assign');
var React=require('react');
var ReactDOM=require('react-dom');
var $=require('jquery');
var Dispatcher=require('./dispatcher');
var Dispatch = assign({}, Dispatcher.prototype,{});

var Waiting= React.createClass({
  getInitialState: function() {
    return ({
             shown: false
           });
  },
  render: function() {
    return (
    <div id="wait-screen-div" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div id="wait-img-div">
    <img src="pic/loading.gif"/>
    </div><div id="wait-dummy-div"></div>
    </div>
    );
  },
  showwaiting(data) {
    $("#wait-screen-div").show();
  },

  hidewaiting(data) {
    $("#wait-screen-div").hide();
  },

  componentDidMount: function() {
    Dispatch.register('SHOW_WAITING', this.showwaiting);
    Dispatch.register('HIDE_WAITING', this.hidewaiting);
  },

});

module.exports=Waiting;
