'use strict';

var assign = require('object-assign');
var Dispatcher = require('./dispatcher');
var Dispatch = assign({}, Dispatcher.prototype,{});
var React = require('react');
var ReactDom = require('react-dom');
var $ = require('jquery');
var Carousel= React.createClass({
  getInitialState: function() {
    var width = 550;
    if ($(window).width() < 550) {
        width=Math.floor($(window).width()/110)*110;
    }
    this.stop = false;
    return {
            imgs:[],
            windowWidth: width,
            };
  },

  handleResize: function(e) {
    var width = 550;
    if ($(window).width() < 550) {
        width=Math.floor($(window).width()/110)*110;
    }
    console.log("width="+width);
 
    this.setState({windowWidth: width});
  }, 

  handleHover: function(e) {
    this.stop = true;
  },

  handleNoHover: function(e) {
    this.stop = false;
  },


  tick: function() {
    if (this.stop) {
      return;
    }
    var id = this.state.imgid;
    id++;
    if (id >= this.state.imgs.length) {
      id = 0;
    }  
    this.setState({imgid:id});
  },

  componentDidMount: function() {
    var imgs = this.props.pics.split(',');
    var len = imgs.length;
    this.setState({imgs:imgs,
                   imgid:0});
    window.addEventListener('resize', this.handleResize);
    this.interval = setInterval(this.tick, 3000);
  },

  imageClick: function() {
    var id = this.state.imgid;
    id++;
    if (id >= this.state.imgs.length) {
      id = 0;
    }  
    this.setState({imgid:id});
  },

  render: function() {
    var present = this.state.imgs[this.state.imgid];
    var List=this.state.imgs.map(function(i) {
      if (i == present) {
      return (<input type="radio" name="img_check" checked="checked" key={i}  readOnly="readonly"/>);
      } else {
      return (<input type="radio" name="img_check" key={i} readOnly="readonly"/>);
      }
    });
    return (
      <div id="carousel-div" style={{width:this.state.windowWidth+'px'}}>
      <img onMouseEnter={this.handleHover} onMouseLeave={this.handleNoHover} onClick={this.imageClick} src={this.state.imgs[this.state.imgid]}/>
      <div id="carousel-radios"  onMouseEnter={this.handleHover} onMouseLeave={this.handleNoHover} onClick={this.imageClick} >
      {List}
      </div>
      </div>
    );
  }
});

module.exports=Carousel
/*
ReactDom.render(
  <Carousel pics="pics/carousel/bookTravel.png,pics/carousel/chooseAirport.png,pics/carousel/purchase.png,pics/carousel/pickup.png"/>,
  document.getElementById('carousel')
);
*/
