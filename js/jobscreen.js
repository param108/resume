react=require('react');
var assign = require('object-assign');
var React=require('react');
var ReactDOM=require('react-dom');
var $=require('jquery');
var Dispatcher=require('./dispatcher');
var Dispatch = assign({}, Dispatcher.prototype,{});
var Carousel=require('./carousel.js');

var JobScreen= React.createClass({
  getInitialState: function() {
  /*        
           Sample Data
           data: [{ title: "Senior Software Engineer",
                    role: "Component Owner",
                    company: "Cisco Systems",
                    tech: "C++,C"},
                  { title: "Senior Software Engineer",
                    role: "Component Owner",
                    company: "Cisco Systems",
                    tech: "C++,C"},
                  { title: "Senior Software Engineer",
                    role: "Component Owner",
                    company: "Cisco Systems",
                    tech: "C++,C"}]
   */
    return ({
             data: {}
           });
  },
  getData: function (key,data) {
    titlestr=key+": "+data;
    classname="JV"+key+" JVKey"
    return ( <span key={key} className={classname}>{titlestr}</span> );
  },
  getParas: function(key, data, List) {
    titlestr=key+": ";
    classname="JV"+key+" JVKey"
    List.push(<span key={key} className={classname}>{titlestr}</span> );
    idx = 1;
    for (para in data ) {
      var keyidx=key+idx;
      List.push(<p key={keyidx} >{para}</p>);
    }
  },
  getCarousel: function(data) {
    return ( <div key="carousel" id="carousel"><Carousel pics={data} /></div> );
  },
  formatData: function(data) {
    List=[];
    if (data.hasOwnProperty('carousel')) {
      List.push(this.getCarousel(data.carousel));
    }  
    if (data.hasOwnProperty('title')) {
      List.push(this.getData("Title",data.title));
    }
    if (data.hasOwnProperty('desc')) {
      this.getParas("Description", data.desc, List);
    }
    return List;
  },
  hideScreen: function(e) {
    $('#jobscreen').fadeOut();
  },
  render: function() {
    data = this.state.data;
    idx = 0;
    List = this.formatData(data);
    return (
      <div>
      <img onClick={this.hideScreen} id="jobscreen-cross" src="/~paramp/resume/pic/x.png"></img>
      {List}
      </div>
    );
  },
  updateJobDetails: function(data) {
    this.setState({ data: data});
    $('#jobscreen').show();
  },
  componentDidMount: function() {
    //Dispatch.dispatch('SHOW_WAITING', { comp: "jobdetails"});
    Dispatch.register('NEW_JOB_DETAIL', this.updateJobDetails);
  },

});

module.exports=JobScreen;
