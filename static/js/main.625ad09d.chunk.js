(this["webpackJsonpmini-project"]=this["webpackJsonpmini-project"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},19:function(e,t){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),s=(a(14),a(1)),i=a(2),u=a(4),o=a(3),d=(a(15),function(e){return c.a.createElement("div",{className:"MainMenu"},c.a.createElement("div",null,"iPod.js"),c.a.createElement("div",{id:"items"},c.a.createElement("div",null,"Cover Flow"),c.a.createElement("div",null,"Music"),c.a.createElement("div",null,"Games"),c.a.createElement("div",null,"Settings")))}),m=function(){return c.a.createElement("div",{className:"CoverFlow"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))},v=a(7),p=a.n(v),f=function(){return c.a.createElement("div",{className:"MusicPlayer"},c.a.createElement("div",{id:"song"},c.a.createElement("div",{id:"songCover"}),c.a.createElement("div",{id:"songDetail"},c.a.createElement("h3",null,"Ukele"),c.a.createElement("h5",null,"Bensound"))),c.a.createElement(p.a,{id:"player",controls:!0,src:"https://www.bensound.com/bensound-music/bensound-ukulele.mp3",autoPlay:!0}))},E=function(){return c.a.createElement("div",{className:"MusicMenu"},c.a.createElement("div",null,"Music"),c.a.createElement("div",{id:"items"},c.a.createElement("div",null,"All Songs"),c.a.createElement("div",null,"Artists"),c.a.createElement("div",null,"Albums"),c.a.createElement("div",null,"Genre")))},y=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Music"},function(){switch(e.props.musicSelected){case 0:return c.a.createElement(E,null);case 1:case 2:case 3:case 4:return c.a.createElement(f,null);default:return c.a.createElement(E,null)}}())}}]),a}(c.a.Component),h=function(){return c.a.createElement("div",{className:"Games"},c.a.createElement("div",{id:"gamePlate"},c.a.createElement("span",{class:"plates"}),c.a.createElement("span",{class:"plates"}),c.a.createElement("span",{class:"plates"}),c.a.createElement("span",{class:"plates"})))},b=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"Settings"},c.a.createElement("div",null," ",c.a.createElement("i",{className:"icon fa fa-fast-backward"})," Decrease iPod's Size"),c.a.createElement("div",null," Increase ",c.a.createElement("i",{className:"fa fa-fast-forward icon"})," iPod's Size"))}}]),a}(c.a.Component),S=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Display"},function(){switch(e.props.selected){case 0:return c.a.createElement(d,null);case 1:return c.a.createElement(m,null);case 2:return c.a.createElement(y,{musicSelected:e.props.musicSelected});case 3:return c.a.createElement(h,null);case 4:return c.a.createElement(b,null);default:return c.a.createElement(d,null)}}())}}]),a}(c.a.Component),M=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).WheelSet=function(){2===e.props.selected?e.props.musicSelect(e.props.musicCurrent):e.props.set(e.props.current)},e.WheelMenu=function(){console.log(e.props.MusicSelected),2===e.props.selected&&0!==e.props.MusicSelected?e.props.musicSelect(0):e.props.set(0)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Wheel"},c.a.createElement("div",{id:"plate"}),c.a.createElement("div",{id:"menu",onClick:function(){return e.WheelMenu()}},"MENU"),c.a.createElement("div",{id:"next",onClick:function(){return e.props.iPodInc()}},c.a.createElement("i",{className:"fa fa-fast-forward icon"})),c.a.createElement("div",{id:"playpause"},c.a.createElement("i",{className:"icon fa fa-play"}),c.a.createElement("i",{className:"icon fa fa-pause"})),c.a.createElement("div",{id:"prev",onClick:function(){return e.props.iPodDec()}},c.a.createElement("i",{className:"icon fa fa-fast-backward"})),c.a.createElement("div",{id:"center",onClick:function(){return e.WheelSet()}}))}}]),a}(c.a.Component),w=(a(19),a(8)),C=a.n(w),P=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).select=function(t){e.setState({selected:t})},e.musicSelect=function(t){e.setState({MusicSelected:t})},e.currentSet=function(t){if(0===e.state.selected){var a=e.state,n=a.current;a.prev;e.setState({prev:n,current:t}),(i=document.body.querySelectorAll("#items>div"))[e.state.prev-1].style.background="white",i[e.state.prev-1].style.color="black",i[e.state.current-1].style.background="rgb(34, 128, 252)",i[e.state.current-1].style.color="white"}else if(1===e.state.selected){var c=e.state,r=c.CoverFlowCurrent,l=c.CoverFlowPrev,s=document.body.querySelectorAll(".CoverFlow>div");s[l].style.height="80px",s[l].style.width="80px",s[l].style.position="relative",s[l].style.zIndex="0",s[l].style.transform="skewY(-30deg)",s[r].style.height="100px",s[r].style.width="100px",s[r].style.transform="skewY(0deg)",s[r].style.position="absolute",s[r].style.zIndex="2",r=(r+1)%5,l=(l+1)%5,e.setState({CoverFlowPrev:l,CoverFlowCurrent:r})}else if(2===e.state.selected&&0===e.state.MusicSelected){var i,u=e.state,o=(u.MusicPrev,u.MusicCurrent);o<1&&(o=1),e.setState({MusicPrev:o,MusicCurrent:t}),(i=document.body.querySelectorAll("#items>div"))[e.state.MusicPrev-1].style.background="white",i[e.state.MusicPrev-1].style.color="black",i[e.state.MusicCurrent-1].style.background="rgb(34, 128, 252)",i[e.state.MusicCurrent-1].style.color="white"}},e.iPodInc=function(){if(4===e.state.selected){var t=document.body.querySelector(".iPod"),a=e.state.scale;a+=.1,e.setState({scale:a}),t.style.transform="scale("+a+")"}},e.iPodDec=function(){if(4===e.state.selected){var t=document.body.querySelector(".iPod"),a=e.state.scale;a-=.1,e.setState({scale:a}),t.style.transform="scale("+a+")"}},e.state={selected:0,current:1,prev:1,CoverFlowCurrent:0,CoverFlowPrev:4,MusicPrev:1,MusicCurrent:1,MusicSelected:0,scale:1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.currentSet,t=0,a=new C.a.Region(document.body.querySelector(".iPod")),n=document.querySelector("#plate"),c=0,r=0;a.bind(n,"rotate",(function(a){t=a.detail.distanceFromOrigin%360,r=c,(c=Math.abs(Math.floor(t/30)%4))!==r&&e(c+1)}),!1)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"iPod"},c.a.createElement(S,{selected:this.state.selected,musicSelected:this.state.MusicSelected}),c.a.createElement(M,{set:this.select,current:this.state.current,musicSelect:this.musicSelect,musicCurrent:this.state.MusicCurrent,selected:this.state.selected,MusicSelected:this.state.MusicSelected,iPodInc:this.iPodInc,iPodDec:this.iPodDec})))}}]),a}(c.a.Component);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.625ad09d.chunk.js.map