react=require('react');
var assign = require('object-assign');
var React=require('react');
var ReactDOM=require('react-dom');
var $=require('jquery');
var Dispatcher=require('./dispatcher');
var Dispatch = assign({}, Dispatcher.prototype,{});

var Loading= React.createClass({
  getInitialState: function() {
    return ({
            val: this.props.val,
            max: this.props.max,
            inc: this.props.inc
           });
  },
  render: function() {
    val = this.state.val;
    extraclass = "";
    if (val < 16) {
      extraclass = " blacktext";
    }
    extraclass="progress-bar"+extraclass;
    return (
    <div>
    <div className="loading-wrapper-div">
    </div>
    <div className="loading-div">
      <div className={extraclass} role="progressbar" aria-valuenow="70"
           aria-valuemin="0" aria-valuemax="100" style={{width:val+"%"}}>
         <span>loading...{val}%</span>
      </div>
    </div>
    </div>
    );
  },
  updateloading(data) {
    var newval = (parseInt(this.state.val) + parseInt(this.state.inc));
    if (newval > 100) {
      newval = 100;
      data.endfn();
    }
    this.setState({val: newval.toString()});
  },
  componentDidMount: function() {
    Dispatch.register('INCREMENT_LOADING', this.updateloading);
  },

});

module.exports=Loading;
