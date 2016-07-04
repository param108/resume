react=require('react');
var React=require('react');
var ReactDOM=require('react-dom');
var $=require('jquery');

var Carousel = React.createClass({
  render: function() {
    return (
      <div className="carousel-div">
       <Pictures url={this.props.url}/>
       <Description url={this.props.url}/>
       <Buttons/>
      </div>
    );
  }
});

module.exports=Carousel;
