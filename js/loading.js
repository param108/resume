react=require('react');
var React=require('react');
var ReactDOM=require('react-dom');
var $=require('jquery');
var Dispatch=require('./dispatcher');

var Loading= React.createClass({
  getInitialState: function() {
    return ({
            val: this.props.val,
            max: this.props.max
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
  componentDidMount: function() {
    Dispatch.register('INCREMENT_LOADING', this.updateCart);
  },

});

module.exports=Loading;
