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
    var width = $(window).width();
    return ({
            start: parseInt(this.props.start),
            end: parseInt(this.props.end),
            pos: parseInt(this.props.pos),
            width: width
           });
  },
  updatePosition: function() {
    margin = (this.state.width - ((((this.state.end - this.state.start) + 1)*50)))
    margin = margin/2;
    if (margin > 0) {
      $("#timeline").css('left', margin.toString());
    } else {
      var ch = (this.state.pos - this.state.start) + 1;
      var totalwidth = (this.state.end - this.state.start) + 1;
      if (ch * 50 > this.state.width) {
        /* 
         * when you have enough data to the right of position to move the selected node 
         * to the middle of the screen, then do that. Otherwise move it as close to the
         * middle as possible.
         */
         if (((totalwidth - ch)*50) > (totalwidth/2)) {
           var len = (this.state.width/2)-(ch*50)+25;
           $("#timeline").css('left', len.toString());
         } else {
           // not enough space left so just scroll as right as possible
           var len = (this.state.width-(totalwidth*50));
           $("#timeline").css('left', len.toString());
         } 
      } else {
        $("#timeline").css('left', 0);
      }
    }
  },
  render: function() {
    this.updatePosition();
    var lineml = []
    for (var i = this.props.start; i <= this.props.end; i++) {
      classname="scale scnum"+i.toString();
      keyname="scalekey"+i.toString();
      pos = (50*(i - this.props.start)).toString()+"px";
      style= { left: pos };
      lineml.push(
        <div key={keyname} className={classname} style={style}><img src="pic/scale.png"></img><span>{i}</span></div>
      );
    }
    indicatorstyle={ left: (50*(this.state.pos - this.state.start)) };
    return (
    <div className="wholescale">
      <div style={indicatorstyle} className="indicator"><img src="pic/indicator.png"/></div>
      {lineml}
    </div>
    );
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  handleResize: function(e) {
    this.setState({ width: $(window).width() }); 
  }, 


});

module.exports=Timeline;
