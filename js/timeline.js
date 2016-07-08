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
/*
 * we render the line only once 
 */
var _lineshown = false;
var Timeline= React.createClass({
  getInitialState: function() {
    return ({
            start: parseInt(this.props.start),
            end: parseInt(this.props.end),
            pos: parseInt(this.props.pos)
           });
  },
  render: function() {
    var lineml = []
    for (var i = this.props.start; i <= this.props.end; i++) {
      classname="scale scnum"+i.toString();
      keyname="scalekey"+i.toString();
      pos = (10 + 50*(i - this.props.start)).toString()+"px";
      style= { left: pos };
      lineml.push(
        <div key={keyname} className={classname} style={style}><img src="pic/scale.png"></img><span>{i}</span></div>
      );
    }
    val = this.state.val;
    extraclass = "";
    if (val < 16) {
      extraclass = " blacktext";
    }
    extraclass="progress-bar"+extraclass;
    indicatorstyle={ left: (10 + 50*(this.state.pos - this.state.start)) };
    return (
    <div className="wholescale">
      <div style={indicatorstyle} className="indicator"><img src="pic/indicator.png"/></div>
      {lineml}
    </div>
    );
  },
  componentDidMount: function() {
  },

});

module.exports=Timeline;
