(this.webpackJsonpseasons=this.webpackJsonpseasons||[]).push([[0],{7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),o=n(6),s=n(5),c=n(0),i=n.n(c),l=n(4),u=n.n(l),d=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={lat:null,errorMessage:""},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition((function(t){return e.setState({lat:t.coords.latitude})}),(function(t){return e.setState({errorMessage:t.message})})),console.log("component rendered on the screen")}},{key:"componentDidUpdate",value:function(){console.log("component updated")}},{key:"render",value:function(){return this.state.lat&&""===this.state.errorMessage?i.a.createElement("div",null,"Latitude: ",this.state.lat," "):this.state.lat||""===this.state.errorMessage?i.a.createElement("div",null,"Loading..."):i.a.createElement("div",null,"Error: ",this.state.errorMessage," ")}}]),n}(c.Component);u.a.render(i.a.createElement(d,null),document.querySelector("#root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.8a0dc712.chunk.js.map