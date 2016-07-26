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
  updateloading(data) {
    var newval = (parseInt(this.state.val) + parseInt(this.state.inc));
    if (newval > 100) {
      newval = 100;
      $(".loading-div").hide();
    }
    this.setState({val: newval.toString()});
  },
  componentDidMount: function() {
    Dispatch.register('INCREMENT_LOADING', this.updateloading);
  },

});

module.exports=Waiting;
