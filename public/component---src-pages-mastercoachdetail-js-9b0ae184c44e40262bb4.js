(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{c1QY:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),c=a.n(l),n=(a("Wbzz"),a("aCnj")),r=a("CN8t"),s=(a("KKXr"),a("fnl6"),a("yMbf"),a("g1Ie"),a("YwZP"));var o=function(e){var t,a;function l(t){var a;return(a=e.call(this,t)||this).showType=void 0,a.showOverview=function(){a.setState({showType:1})},a.headSet=function(){var e=a.state.mastercoaches;return c.a.createElement("div",{className:"head"},c.a.createElement("div",{className:"title-holder"},c.a.createElement("h2",null,e.coachname),c.a.createElement("span",{className:"designation"},e.text)),c.a.createElement("div",{className:"btn-holder"},c.a.createElement("a",{href:"#",className:"btn btn-border"},"Sample Play Lesson 1")))},a.overView=function(){var e=a.state.mastercoaches.Overview;return c.a.createElement("div",null,c.a.createElement("h3",null,e.heading),c.a.createElement("p",null,e.detail),c.a.createElement("p",null,e.detail1),c.a.createElement("p",null,e.detail2),c.a.createElement("p",null,e.detail3))},a.getLessons=function(){return a.state.mastercoaches.lesson.arrayoflesson.map((function(e,t){return c.a.createElement("article",{className:"lesson-article",key:t},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"img-box"},c.a.createElement("img",{src:e.image,width:"264",height:"185",alt:"img description"}),c.a.createElement("span",{className:"text"},e.timefram)),c.a.createElement("div",{className:"text-box"},c.a.createElement("h3",null,e.heading),c.a.createElement("strong",{className:"subtitle"},e.subheading),c.a.createElement("p",null,e.detail))))}))},a.getQA=function(){return a.state.mastercoaches.qandaa.overviewarray.map((function(e,t){return c.a.createElement("div",{className:"que-ans"},c.a.createElement("h3",null,e.heading),c.a.createElement("p",null,e.detail))}))},a.showSelected=function(){window.location.href.split("#")[1]},a.getPopup=function(){return c.a.createElement("div",{class:"popup-holder"},c.a.createElement("a",{class:"btn-close"},c.a.createElement("i",{class:"icon-cross",onClick:a.popUp})),c.a.createElement("div",{class:"popup"},c.a.createElement("div",{class:"img-holder"},c.a.createElement("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/LKFuXETZUsI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),c.a.createElement("div",{class:"text-holder"},c.a.createElement("div",{class:"text-box"},c.a.createElement("h3",null,"John Doe"),c.a.createElement("h2",null,"Class One"),c.a.createElement("span",{class:"designation"},"COACHES")),c.a.createElement("div",{class:"btn-holder"},c.a.createElement("a",{href:"#",class:"btn btn-border"},"Explore the Class"),c.a.createElement("a",{href:"#",class:"btn btn-border"},"Share the Trailer"),c.a.createElement("a",{href:"#",class:"btn"},"Book Discovery Call")))))},a.popUp=function(){Object(s.navigate)("/mastercoachdetail#tab-01"),a.setState({showPopup:!a.state.showPopup})},a.state={mastercoaches:"",showType:0,showPopup:!1},a}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=l.prototype;return n.UNSAFE_componentWillMount=function(){this.setState({mastercoaches:JSON.parse(localStorage.getItem("selected"))})},n.render=function(){return c.a.createElement("div",{className:"main-block"},c.a.createElement("section",{className:"coaches-info"},c.a.createElement("img",{className:"circle-shape",src:"images/circle-img10.svg",width:"505",height:"505",alt:"img description"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h1",{className:"heading-border"},"master",c.a.createElement("strong",null,"coach"))),c.a.createElement("div",{className:"detail-holder"},c.a.createElement("div",{className:"img-col"},c.a.createElement("div",{className:"img-box"},c.a.createElement("img",{src:this.state.mastercoaches.coachimage,width:"385",height:"385",alt:"img description"})),c.a.createElement("a",{className:"btn-watch",onClick:this.popUp},"Watch trailer")),c.a.createElement("div",{className:"text-col"},this.headSet(),c.a.createElement("div",{className:"tabset-holder"},c.a.createElement("ul",{className:"tabset"},c.a.createElement("li",{className:"tab-01"==window.location.href.split("#")[1]?"active":""},c.a.createElement("a",{href:"#tab-01",onClick:this.showSelected},"Overview")),c.a.createElement("li",{className:"tab-02"==window.location.href.split("#")[1]?"active":""},c.a.createElement("a",{href:"#tab-02",onClick:this.showSelected},"Lessons")),c.a.createElement("li",{className:"tab-03"==window.location.href.split("#")[1]?"active":""},c.a.createElement("a",{href:"#tab-03"},"Q & A"))),c.a.createElement("div",{className:"tab-content"},"tab-01"==window.location.href.split("#")[1]?c.a.createElement("div",{id:"tab-01"},this.overView()):"tab-02"==window.location.href.split("#")[1]?c.a.createElement("div",{id:"tab-02"},this.getLessons()):"tab-03"==window.location.href.split("#")[1]?c.a.createElement("div",{id:"tab-03"},this.getQA()):""))))),this.state.showPopup&&this.state.showPopup?c.a.createElement("div",null,this.getPopup()):""),c.a.createElement("section",{class:"contact-form"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"text-area"},c.a.createElement("h2",{class:"h1 heading-border lowercase"},"Book a Discovery Call."),c.a.createElement("h3",null,"Want to explore the possibilities?"),c.a.createElement("a",{href:"#",class:"btn"},"book now")),c.a.createElement("form",{action:"#",class:"form-area"},c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"name"},"Name:"),c.a.createElement("input",{id:"name",class:"form-control",type:"text",placeholder:"Enter your name..."})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"email"},"Email:"),c.a.createElement("input",{id:"email",class:"form-control",type:"email",placeholder:"Enter your email..."})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"phone"},"Phone:"),c.a.createElement("input",{id:"phone",class:"form-control",type:"text",placeholder:"Enter your phone..."})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"note"},"Notes:"),c.a.createElement("textarea",{id:"note",class:"form-control",placeholder:"Enter your notes..."})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:"contact"},"Best time to contact:"),c.a.createElement("div",{class:"input-row"},c.a.createElement("input",{id:"contact",class:"form-control",type:"text",placeholder:"04-04-2020"}),c.a.createElement("input",{class:"form-control",type:"text",placeholder:"10:00 AM"})))))))},l}(l.Component);t.default=function(){return c.a.createElement("div",null,c.a.createElement(n.a,null),c.a.createElement(o,null),c.a.createElement(r.a,null))}}}]);
//# sourceMappingURL=component---src-pages-mastercoachdetail-js-9b0ae184c44e40262bb4.js.map