react=require('react');
var assign = require('object-assign');
var React=require('react');
var ReactDOM=require('react-dom');
var $=require('jquery');
var Dispatcher=require('./dispatcher');
var Dispatch = assign({}, Dispatcher.prototype,{});

var JobDetails= React.createClass({
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
             data: []
           });
  },
  clicked: function(e) {
    p = parseInt($(e.currentTarget).attr("data-jobid"));
    for (var idx=0; idx < this.state.data.length; idx++) {
      var item = this.state.data[idx];
      if (item.id == p) {
        Dispatch.dispatch('NEW_JOB_DETAIL', item);
        return;
      }
    }
  },
  render: function() {
    data = this.state.data;
    idx = 0;
    var clickhandler=this.clicked;
    List = data.map(function(item) {
          idx++;
          return (
            <div data-jobid={item.id} key={item.id} onClick={clickhandler} className="jobdetail col-xs-12 col-lg-4 col-md-4 col-sm-6">
<span className="Title jdkey">Title:</span><span className="TitleVal jdval">{item.title}</span><br/>
<span className="Role jdkey">Role:</span><span className="RoleVal jdval">{item.role}</span><br/>
<span className="Company jdkey">Company:</span><span className="CompanyVal jdval">{item.company}</span><br/>
<span className="Technology jdkey">Technology:</span><span className="TechVal jdval">{item.tech}</span><br/>
<div className="jdhelpdiv"><span className="jdhelp">Click for more details</span></div>
</div>
          );}); 
    return (
      <div>
      {List}
      </div>
    );
  },
  updateJobDetails: function(data) {
    console.log("New Date:"+data.date);
    this.loadResumeData(this.props.url + data.date + "/");
  },
  loadResumeData: function(url) {
    var ctx = this;
    $.ajax({ url: url,
             method: "post",
             cache: false,
             dataType: "json",
             success: function(data) {
               console.log (data.data)
               ctx.setState({ data: data.data });
             },
             complete: function(obj, status) {
               Dispatch.dispatch('HIDE_WAITING', 
                 {comp: "jobdetails"});
             }
           }
    );
  },
  componentDidMount: function() {
    Dispatch.dispatch('SHOW_WAITING', { comp: "jobdetails"});
    this.loadResumeData(this.props.url + this.props.start + "/");
    Dispatch.register('NEW_DATE', this.updateJobDetails);
  },

});

module.exports=JobDetails;
