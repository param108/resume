var JobData = {
  2001: [{ id: 1,
          title:"Software Engineer Grade 4",
          task:"7xxx platform feature and bug fixing",
          role:"Individual Contributer",
          teamsize: 1,
          tech:"C",
          company:"Cisco Systems",
          desc:["Fixed bugs on 7200 and 7500 router platforms","Ported subrate functionality to a new release of IOS with only 3 new bugs found."]
  }],
  2003: [{ id: 2,
           title:"Software Engineer Grade 6",
           role:"Component Manager",
           task:"T3/E3 port adaptor ownership",
           teamsize:2,
           tech:"C",
           company:"Cisco Systems",
           desc:["Ownership of features and bugs on T3/E3 port adaptors", "drove down bug count to single digits on all components using phase control methods"]},{ id: 3,
    title: "Software Engineer Grade 6",
    role:"Individual Contributer",
    task:"Design and development of features for 7xxx platforms",
    teamsize:1,
    tech:"C",
    company:"Cisco Systems",
    desc:["Design and developed the driver for Enhanced T3E3 Port Adaptor","* Proved improved performance in design","* Received a patent for this work http://www.freshpatents.com/dt20090108ptan20090010157.php","Designed and developed Dial-on-Demand Routing for 7500 platform", "Designed and developed Minimum Disruptive Reload for Channelized T3/E3 port adaptors"]}],
  2005: [{ id: 4,
           title: "Senior Software Engineer Grade 8",
           role: "Lead Engineer",
           task:"Implement protocol matching using STILE",
           teamsize: 6,
           company:"Cisco Systems",
           tech:"STILE",
           desc:["STILE is a language developed by Cisco to match protocols in a network.","It is an integral part of Network Based Application Recognition NBAR.","I had to learn this language and train the rest of my team and start writing the matching code for newer protocols like webex"]},
         { id: 5,
           title: "Senior Software Engineer Grade 8",
           role: "Lead Engineer",
           company:"Cisco Systems",
           task: "Transfer 10720 platform ownership to India",
           teamsize: 6,
           tech:"C,Assembly",
           desc:["Learnt about the 10720 platform from Canada team.","The 10720 switching Asic (Toaster) is programmed in 2 pipeline assembly.","Once back in India I trained the team to own the development and bug fixing","Created a Wiki to aid the knowledge transfer to the rest of the team","Recognized by the director for being the single point of contact for this platform in one month"]},
         { id: 6,
           title: "Senior Software Engineer Grade 8",
           role: "Lead Engineer",
           company:"Cisco Systems",
           task: "Transfer 7300 platform ownership to India",
           teamsize: 6,
           tech:"C, Assembly",
           desc:["Learnt about 7300 platform from Australia team.","The 7300 switching Asic (Toaser) is programmed in 2 pipeline assembly.","Apart from training the team to handle bugs independently I was personally responsible for QOS"]},
         { id: 7,
           title: "Senior Software Engineer Grade 8",
           role: "Lead Engineer",
           company:"Cisco Systems",
           task: "SPA team mentoring and bug backlog reduction",
           teamsize: 6,
           tech: "C",
           desc:["Mentor and train the SPA team to become more productive.",
           "Took and arranged trainings for the whole team on technology and debugging.","Increased productivity from 7 bugs fixed in 3 months to 50 in a single month"]},
         { id: 8,
           title: "Senior Software Engineer Grade 8",
           role: "Individual Contributer",
           company:"Cisco Systems",
           teamsize: 1,
           task: "LFI development on OC12 card",
           tech: "C++",
           desc:["The ucode for this card was compiled from C++.","Implemented LFI feature on this card"]}],
   2009: [{ id: 9,
            title: "Senior Software Engineer Grade 10",
            role: "Architect",
            teamsize: 4,
            company:"Cisco Systems",
            task: "Design the architecture for next generation mobile routers",
            tech: "Design",
            desc:["As part of Emerging Technical Leaders Program, worked with marketing engineers to layout the requirements for the next generation mobile router architecture.","Designed an architecture to implement these requirements on existing IOS platforms"]},
          { id: 10,
            title: "Senior Software Engineer Grade 10",
            role: "Individual Contributer",
            teamsize: 1,
            company:"Cisco Systems",
            task: "Design and develop WAAS on asr1k platform",
            tech: "C",
            desc:["Wide Area Application Services (WAAS) are features that can optimize traffic used by Applications on a network.","I was specifically looking at compression of traffic streams over the WAN links","Created a prototype"]},
          { id: 11,
            title: "Senior Software Engineer Grade 10",
            role: "Individual Contributer",
            teamsize: 1,
            company:"Cisco Systems",
            tech: "C",
            task: "Design and develop SRP on ASR1K",
            desc:["Spatial Reuse Protocol is a ring protocol which gives resilience to ring networks.","I implemented this on ASR1K platform"]},
          { id: 12,
            title: "Senior Software Engineer Grade 10",
            company:"Cisco Systems",
            teamsize: 1,
            tech: "C",
            role: "Side business",
            task: "Improve productivity of the team",
            desc:["Wrote a script to reduce the time required to copy images to US servers by opening many parallel connections","Wrote a curses tool to view and edit bugs from ddts (the bug tracking tool)","Wrote a wrapper for gid to remember the history of gid searches"]}]
   2010: [{ id: 13,
            title: "Senior Software Engineer",
            company:"Zynga",
            role: "Individual Contributer",
            tech: "php",
            teamsize: 1,
            task: "Server optimization"
            desc:["Profiled Zynga games and suggested improvements that reduced the server count by 50%","Changes included setting cache header on certain assets, Code profiling and Rewriting or eliminating certain code loops, Increasing the number of processes spawned by Apache"]},
          { id: 14,
            title: "Senior Software Engineer",
            company: "Zynga",
            role: "Individual Contributer",
            tech: "php,C++",
            teamsize: "1",
            task: "Make HipHop work on Zynga codebase",
            desc: ["Hiphop is a php to C++ converter developed by facebook","It didnt run well on Zynga codebase due to certain php practices.","I successfully fixed the code or fixed Hiphop to get Zynga games on hiphop.","This involved undoing some of the optimizations in hiphop and going though the php code to removecertain usages."]}],
   2011: [{ id: 14,
            title: "Principal Software Engineer",
            company: "Zynga",
            role: "Architect",
            teamsize: 2,
            tech: "php,C++",
            task: "Integrate Hiphop into more games",
            desc: ["Implemented an architecture to deploy games on Hiphop.","Designed a set of scripts to move games to Hiphop in hours. Farmville moved to Hiphop during a Hackathon. Integration time moved from days to hours.", "Integrated Cityville with Hiphop.","Integrated Continuous development with Hiphop"]},
          { id: 15,
            title: "Principal Software Engineer",
            company: "Zynga",
            role: "Individual Contributer",
            teamsize: 2,
            tech: "php,python,Vertica",
            task: "Measure and improve User Experience",
            desc: ["Came up with an emperical formula to measure technological effects on User experience. It is based on the delay experienced by a user.","Built the framework and the dashboard to show this data. We used Vertica to store the data from the users and analyze it.","Also built a prototype for a flash profiler"]},
          { id: 16,
            title: "Principal Software Engineer",
            company: "Zynga",
            role: "Lead Engineer",
            teamsize: 5,
            tech: "javascript,php",
            task: "Transition Zynga.com to India",
            desc: ["Zynga.com was written in Zynga's own javascript framework. I was tasked with learning that and training engineers in India on it. Finally, I was tasked with adding new features with appropriate stats and testing built in."]}],
   2013: [{ id: 17,
            title: "Technical Leader",
            company: "Cisco Systems",
            role: "Lead Engineer",
            teamsize: 3,
            tech: "C",
            task: "Adjacency Manager Hardening",
            desc: ["Adjacency manager was a small team inundated with bugs. All switching and routing code had to call this component during configuration. There were many errors in how the switching and routing code used the apis for this component which led to crashes which landed up in adjacency manager bugs. These bugs would ultimately be triaged to the appropriate routing code, but this was eating up the time of the team. I designed and implemented code which checks for proper usage at the boundary of the component. If an anomaly is seen the box would crash pointing fingers at the offending routing code. Bug counts on our component dropped and overall quality shot up, as the tooling spotted even vague memory reuse issues quickly.", "Implemented a memory management UI to track the amount of memory we are allocating. This helped in catching memory leaks early on","Implemented a context sensitive logging, which would tell you the value of all related datastructures in the log text of an error. This speeds up debugging as you dont need to add a new log just to know the value of a datastructure during debugging."]},
           { id: 18,
             title: "Technical Leader",
             company: "Cisco Systems",
             role: "Side Business",
             teamsize: 1,
             tech: "Linux Kernel, Shell",
             task: "Improve Build Time",
             desc: ["A fresh build may take from 2 hrs to a whole day. I wrote some scripts to collect data on builds and tracked down the reason for this variance. We were able to fix this, to give everyone a uniform 2 hr build time.","I then developed a build system using btrfs (A Copy on Write filesystem) which reduced the 2hrs to 25 minutes. Used this in our team as well and finally handed it over IT to develop on it"]}]
   2014: [{ id: 19,
            title: "Technical Leader",
            company: "Cisco Systems",
            role: "Scrum master",
            teamsize: 22,
            task: "Bringup, Infra Development for RSP3 platform",
            tech: "C",
            desc: ["Transitioned the team to scrum. Ran the daily standup and helped unblock engineers by providing necessary information and resources. Accelerated development by providing infra to allow team members to POC their code early. We were able to hit our deadline well in time and ship the platform in record time. Infact we were able to ping using real code talking to an eval board even before hardware was ready"]},
          { id: 20,
            title: "Technical Leader",
            company: "Cisco Systems",
            role: "Individual Contributer",
            task: "Infrastructure for RSP3 platform",
            tech: "C",
            desc: ["RSP3 platform has a very complicated Interface Module infrastructure. Interface Modules need to be placed only in appropriate slots and certain combinations do not work. I created an infrastructure to make this expandable and dependable. We also provided information to the user as to where he can place an IM if he places the IM in a wrong slot.","Created an Infra to allow engineers to quickly prototype their code by bypassing the layers and layers that they would normally have to code up. This enabled many engineers to design their features faster. Also led to early development of debugging code which normally would be relegated to the end.","Dynamic interface was a new feature from the chip vendor and came is bursts. I was able to keep the feature teams running by adding infra to unblock them. I made sure feature teams had their basic requirements.", "Provided infra to track API calls to the Vendor's SDK so that engineers could quickly see what API calls happened"]}],
   2015: [{ id: 21,
            title: "Technical Leader"
          
 

