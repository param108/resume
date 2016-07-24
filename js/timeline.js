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
    start = parseInt(this.props.start);
    pos = parseInt(this.props.pos);
    end = parseInt(this.props.end);
    width = $(window).width();
    ret = this.updatePosition("resize", start, end, pos, width);
    return ({
            start: start,
            end: end,
            pos: pos,
            width: width,
            coords: ret
           });
  },
  updatePosition: function(trigger, start, end, pos, width) {
    /*
     * Extra 1 is for the indicators
     */
    margin = (width - ((((end - start) + 1 + 1)*50)))
    var ret = {};
    margin = margin/2;
    if (margin > 0) {
      var rightarrowpos = ((end - start) + 1)*50 + 25;
      ret.scaleholder=25;
      ret.wholescale=margin;
      ret.rightarrow=rightarrowpos;
      ret.leftshift=0;
      ret.scroll=0;
      ret.arrowshidden = true;
    } else {
      ret.arrowshidden = false;
      ret.scaleholder=25;
      ret.wholescale=0;
      var totalwidth = ((end - start) + 1)*50 + 50;
      ret.leftshift=width - totalwidth; 
      var rightarrowpos = ((width) - 25) ;
      ret.rightarrow=rightarrowpos;
      if (trigger == "scroll") {
        ret.scroll = 0;
      } else if (trigger == "resize" || trigger == "click") {
        // when we resize we reset the scroll to 0
        // this is so that we can centre the indicator on the screen
        ret.scroll = 0;

        // now tweak left shift to centre the indicator on the screen if possible
        var ch = ((pos - start) + 1)*50;
        // adding the arrows
        // if the choice has fallen off the edges if we start the scale from the
        // beginning
        if (ch > (width-50)/2) {
          /* 
           * when you have enough data to the right of position to move the selected node 
           * to the middle of the screen, then do that. Otherwise move it as close to the
           * middle as possible.
           */
           if (((totalwidth-50) - ch) > ((width - 50)/2)) {
             console.log("GG");
             // first left shift so that the chosen is the right most entry and then
             // left shift by half the size of the screen then add 25 to center
             // the entry on the screen
             ret.scroll = (((width - 50)-ch) - ((width - 50)/2)) + 25;
             ret.scroll -= ret.leftshift;
           } else {
             console.log("GL");
             //ret.leftshift = 0;
             // not enough space left so just scroll as right as possible
             ret.scroll = ((width - 50)-ch) - ((totalwidth - 50) - ch);
             ret.scroll -= ret.leftshift;
           } 
        } else {
          /* 
           * when you have enough data to the left of position to move the selected node 
           * to the middle of the screen, then do that. Otherwise move it as close to the
           * middle as possible.
           */
           if ((ch) > ((width - 50)/2)) {
             console.log("LG");
             // first right shift until the chosen is the first entry.
             ret.scroll = ((width - 50)/2) - ret.leftshift - (ch + 25) + 25;
           } else {
             console.log("LL");
             ret.scroll = 0 - ret.leftshift;
             //ret.leftshift = 0;
             // not enough space left so just scroll as right as possible
           } 

        } 
      }    
    }
    return ret;
  },
  clicked: function(event) {
    f = $(event.target);
    val = $($(f.parent()[0]).children("span")[0]).text();
    ret = this.updatePosition('click', this.state.start, this.state.end, parseInt(val), this.state.width)
    this.setState({pos: parseInt(val),
                   coords: ret });
  },
  render: function() {
    var lineml = [];
    var coords = this.state.coords;
    for (var i = this.props.start; i <= this.props.end; i++) {
      classname="scale scnum"+i.toString();
      keyname="scalekey"+i.toString();
      pos = (50*(i - this.props.start));
      style= { left: (pos + coords.leftshift + coords.scroll) };
      lineml.push(
        <div key={keyname} className={classname} style={style} onClick={this.clicked}><img src="pic/scale.png"></img><span>{i}</span></div>
      );
    }
    indicatorstyle={ left: ((50*(this.state.pos - this.state.start)) + 25) + coords.leftshift + coords.scroll};
    rightarrowstyle={ left: ((50*((this.state.end - this.state.start) + 1))+25) + coords.leftshift};
    leftarrowstyle={ };
    if (coords.arrowshidden) {
      leftarrowstyle.display="none";
      rightarrowstyle.display="none";
    } else {
      leftarrowstyle.display="block";
      rightarrowstyle.display="block";
    }
    scaleholderstyle={left:coords.scaleholder,
                      width:(50*((this.state.end - this.state.start) + 1))  + coords.leftshift};
    wholescalestyle={left:coords.wholescale}
    return (
    <div className="wholescale" style={wholescalestyle}>
      <div style={indicatorstyle} className="indicator"><img src="pic/indicator.png"/></div>
      <div style= {leftarrowstyle} className="arrow left-arrow"><img src="pic/leftarrow.png"/></div><div id="scale-holder" style={scaleholderstyle} >{lineml}</div><div style={rightarrowstyle} className="arrow right-arrow"><img src="pic/rightarrow.png"/></div>
    </div>
    );
  },
  leftclick(event) {
  },
  rightclick(event) {
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
    $(".right-arrow").click(this.rightclick);
    $(".left-arrow").click(this.leftclick);
  },

  handleResize: function(e) {
    this.setState({ width: $(window).width(),
                    trigger: "resize" });
  }, 


});

module.exports=Timeline;
