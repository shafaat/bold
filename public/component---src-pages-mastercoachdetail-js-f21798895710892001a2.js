(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{c1QY:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),c=t.n(l),r=(t("Wbzz"),t("aCnj")),n=t("CN8t"),s=(t("fnl6"),t("yMbf"),t("g1Ie"),t("YwZP"));var o=function(e){var a,t;function l(a){var t;return(t=e.call(this,a)||this).showType=void 0,t.showOverview=function(){t.setState({showType:1})},t.headSet=function(){var e=t.state.mastercoaches;return c.a.createElement("div",{className:"head"},c.a.createElement("div",{className:"title-holder"},c.a.createElement("h2",null,e.coachname),c.a.createElement("span",{className:"designation"},e.text)),c.a.createElement("div",{className:"btn-holder"},c.a.createElement("a",{href:"#",className:"btn btn-border"},"Sample Play Lesson 1")))},t.overView=function(){if(t.state.mastercoaches){var e=t.state.mastercoaches.Overview;return c.a.createElement("div",null,c.a.createElement("h3",null,e.heading),c.a.createElement("p",null,e.detail),c.a.createElement("p",null,e.detail1),c.a.createElement("p",null,e.detail2),c.a.createElement("p",null,e.detail3))}},t.getLessons=function(){return t.state.mastercoaches.lesson.arrayoflesson.map((function(e,a){return c.a.createElement("article",{className:"lesson-article",key:a},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"img-box"},c.a.createElement("img",{src:e.image,width:"264",height:"185",alt:"img description"}),c.a.createElement("span",{className:"text"},e.timefram)),c.a.createElement("div",{className:"text-box"},c.a.createElement("h3",null,e.heading),c.a.createElement("strong",{className:"subtitle"},e.subheading),c.a.createElement("p",null,e.detail))))}))},t.getQA=function(){return t.state.mastercoaches.qandaa.overviewarray.map((function(e,a){return c.a.createElement("div",{className:"que-ans"},c.a.createElement("h3",null,e.heading),c.a.createElement("p",null,e.detail))}))},t.showSelected=function(){s.globalHistory.location.hash},t.getPopup=function(){return c.a.createElement("div",{class:"popup-holder"},c.a.createElement("a",{class:"btn-close"},c.a.createElement("i",{class:"icon-cross",onClick:t.popUp})),c.a.createElement("div",{class:"popup"},c.a.createElement("div",{class:"img-holder"},c.a.createElement("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/LKFuXETZUsI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),c.a.createElement("div",{class:"text-holder"},c.a.createElement("div",{class:"text-box"},c.a.createElement("h3",null,"John Doe"),c.a.createElement("h2",null,"Class One"),c.a.createElement("span",{class:"designation"},"COACHES")),c.a.createElement("div",{class:"btn-holder"},c.a.createElement("a",{href:"#",class:"btn btn-border"},"Explore the Class"),c.a.createElement("a",{href:"#",class:"btn btn-border"},"Share the Trailer"),c.a.createElement("a",{href:"#",class:"btn"},"Book Discovery Call")))))},t.popUp=function(){Object(s.navigate)("/mastercoachdetail#tab-01"),t.setState({showPopup:!t.state.showPopup})},t.state={mastercoaches:"",showType:0,showPopup:!1},t}t=e,(a=l).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=l.prototype;return r.componentDidMount=function(){this.setState({mastercoaches:JSON.parse(localStorage.getItem("selected"))})},r.render=function(){return c.a.createElement("div",{className:"main-block"},c.a.createElement("section",{className:"coaches-info"},c.a.createElement("img",{className:"circle-shape",src:"images/circle-img10.svg",width:"505",height:"505",alt:"img description"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h1",{className:"heading-border"},"master",c.a.createElement("strong",null,"coach"))),c.a.createElement("div",{className:"detail-holder"},c.a.createElement("div",{className:"img-col"},c.a.createElement("div",{className:"img-box"},c.a.createElement("img",{src:this.state.mastercoaches.coachimage,width:"385",height:"385",alt:"img description"})),c.a.createElement("a",{className:"btn-watch",onClick:this.popUp},"Watch trailer")),c.a.createElement("div",{className:"text-col"},this.headSet(),c.a.createElement("div",{className:"tabset-holder"},c.a.createElement("ul",{className:"tabset"},c.a.createElement("li",{className:"#tab-01"==s.globalHistory.location.hash?"active":""},c.a.createElement("a",{href:"#tab-01",onClick:this.showSelected},"Overview")),c.a.createElement("li",{className:"#tab-02"==s.globalHistory.location.hash?"active":""},c.a.createElement("a",{href:"#tab-02",onClick:this.showSelected},"Lessons")),c.a.createElement("li",{className:"#tab-03"==s.globalHistory.location.hash?"active":""},c.a.createElement("a",{href:"#tab-03"},"Q & A"))),c.a.createElement("div",{className:"tab-content"},"#tab-01"==s.globalHistory.location.hash?c.a.createElement("div",{id:"tab-01"},this.overView()):"#tab-02"==s.globalHistory.location.hash?c.a.createElement("div",{id:"tab-02"},this.getLessons()):"#tab-03"==s.globalHistory.location.hash?c.a.createElement("div",{id:"tab-03"},this.getQA()):""))))),this.state.showPopup&&this.state.showPopup?c.a.createElement("div",null,this.getPopup()):""),c.a.createElement("section",{class:"contact-form"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"text-area"},c.a.createElement("h2",{class:"h1 heading-border lowercase"},"Book a Discovery Call."),c.a.createElement("h3",null,"Want to explore the possibilities?"),c.a.createElement("a",{href:"#",class:"btn"},"book now")),c.a.createElement("form",{action:"#",class:"form-area"},c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"name"},"Name:"),c.a.createElement("input",{id:"name",class:"form-control",type:"text",placeholder:"Enter your name..."})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"email"},"Email:"),c.a.createElement("input",{id:"email",class:"form-control",type:"email",placeholder:"Enter your email..."})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"phone"},"Phone:"),c.a.createElement("input",{id:"phone",class:"form-control",type:"text",placeholder:"Enter your phone..."})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"note"},"Notes:"),c.a.createElement("textarea",{id:"note",class:"form-control",placeholder:"Enter your notes..."})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"contact"},"Best time to contact:"),c.a.createElement("div",{class:"input-row"},c.a.createElement("input",{id:"contact",class:"form-control",type:"text",placeholder:"04-04-2020"}),c.a.createElement("input",{class:"form-control",type:"text",placeholder:"10:00 AM"})))))))},l}(l.Component);a.default=function(){return c.a.createElement("div",null,c.a.createElement(r.a,null),c.a.createElement(o,null),c.a.createElement(n.a,null))}}}]);
//# sourceMappingURL=component---src-pages-mastercoachdetail-js-f21798895710892001a2.js.map