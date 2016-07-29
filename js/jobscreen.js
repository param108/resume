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
    titlestr=key+": ";
    classname="JV"+key+" JVKey"
    return ( <span key={key} className="JVWrapper" ><span className={classname}>{titlestr}</span><span>{data}</span></span> );
  },
  getParas: function(key, data, List) {
    titlestr=key+": ";
    classname="JV"+key+" JVKey"
    List.push(<span key={key} className={classname}>{titlestr}</span> );
    for (var idx = 0; idx < data.length; idx++) {
      var keyidx=key+idx;
      var para = data[idx];
      List.push(<p key={keyidx} >{para}</p>);
    }
  },
  getCarousel: function(data) {
    return ( <div key="carousel" id="carousel"><Carousel pics={data} /></div> );
  },
  formatData: function(data) {
    List_below=[];
    List_above=[];
    carousel = null;
    if (data.hasOwnProperty('carousel')) {
      carousel = this.getCarousel(data.carousel);
    }  
    if (data.hasOwnProperty('title')) {
      List_above.push(this.getData("Title",data.title));
    }
    if (data.hasOwnProperty('role')) {
      List_above.push(this.getData("Role",data.role));
    }
    if (data.hasOwnProperty('desc')) {
      this.getParas("Description", data.desc, List_below);
    }
    return [List_above,carousel,List_below];
  },
  hideScreen: function(e) {
    $('#jobscreen').fadeOut();
  },
  render: function() {
    data = this.state.data;
    idx = 0;
    List = this.formatData(data);
    return (
      <div className="jobscreen-div">
      <img onClick={this.hideScreen} id="jobscreen-cross" src="/~paramp/resume/pic/x.png"></img>
      <div className="jobscreen-desc-div">
      <div className="jobscreen-desc-text-wrapper">
      {List[0]}
      </div>
      <div className="jobscreen-desc-carousel-wrapper">
      {List[1]}
      </div>
      <div className="jobscreen-desc-text-wrapper">
      {List[2]}
      </div>
      </div>
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
