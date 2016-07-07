react=require('react');
var assign = require('object-assign');
var React=require('react');
var ReactDOM=require('react-dom');
var $=require('jquery');
var Dispatcher=require('./dispatcher');
var Dispatch = assign({}, Dispatcher.prototype,{});

/*<div class="wholescale">
<div class="indicator"><img src="pic/indicator.png"/></div>
<div class="scale1"><img src="pic/scale.png"/><span>2001</span></div><div class="scale2"><img src="pic/scale.png"/><span>2001</span></div><div class="scale3"><img src="pic/scale.png"/><span>2001</span></div><div class="scale4"><img src="pic/scale.png"/><span>2001</span></div><div class="scale5"><img src="pic/scale.png"/><span>2001</span></div><div class="scale6"><img src="pic/scale.png"/><span>2001</span></div><div class="scale7"><img src="pic/scale.png"/><span>2001</span></div><div class="scale8"><img src="pic/scale.png"/><span>2001</span></div><div class="scale9"><img src="pic/scale.png"/><span>2001</span></div>
</div>
*/
var Loading= React.createClass({
  getInitialState: function() {
    return ({
            start: this.props.start,
            end: this.props.max,
            pos: this.props.inc
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
