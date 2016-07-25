react=require('react');
var assign = require('object-assign');
var React=require('react');
var ReactDOM=require('react-dom');
var $=require('jquery');
var Dispatcher=require('./dispatcher');
var Dispatch = assign({}, Dispatcher.prototype,{});

var JobDetails= React.createClass({
  getInitialState: function() {
    return ({
            year: this.props.year,
            selected: this.props.selected,
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
      <div className={extraclass} role="progressbar" aria-valuenow={val}
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
      $(".loading-div").hide();
    }
    this.setState({val: newval.toString()});
  },
  componentDidMount: function() {
    Dispatch.register('INCREMENT_LOADING', this.updateloading);
  },

});

module.exports=Loading;
