(this["webpackJsonpclient-new"]=this["webpackJsonpclient-new"]||[]).push([[0],{13:function(e,n,t){e.exports={heading:"Home_heading__X9S2V",item:"Home_item__1BfZ_",header:"Home_header__2ZfpZ",headerContent:"Home_headerContent__X_p_L",color:"Home_color__mpilC",name:"Home_name__1YdXf",video:"Home_video__1Zmyl",list:"Home_list__3jIXi"}},45:function(e,n,t){},5:function(e,n,t){e.exports={main:"Scrobber_main__2LuF3",timeline:"Scrobber_timeline__2jotj",center:"Scrobber_center__3yVBq",timewrapper:"Scrobber_timewrapper__2nkoy",timeoffset:"Scrobber_timeoffset__29YLh",live:"Scrobber_live__38HNF",pill:"Scrobber_pill__1rtDH",margin:"Scrobber_margin__2S6hy",cover:"Scrobber_cover__3LxDf",time:"Scrobber_time__32A7e",calendar:"Scrobber_calendar__B20XD",top:"Scrobber_top__3RLJx",back:"Scrobber_back__36HQY",info:"Scrobber_info__ZStHx",name:"Scrobber_name__33Nnb",color:"Scrobber_color__2b0sF"}},55:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t(0),o=t(33),r=t.n(o),i=(t(45),t(15)),l=t(10),s=t(19),u=t(4),d=Object(c.createContext)({streams:[]}),m=t(13),f=t.n(m),h=window.localStorage.getItem("host")||window.location.hostname,b="http://".concat(h,":").concat(80),v=["#EB5757","#F2994A","#F2C94C","#219653","#6FCF97","#2F80ED","#2D9CDB","#56CCF2","#9B51E0"],j=604800,O=t(39);function p(e){var n=e.src,t=e.alt,o=Object(O.a)(e,["src","alt"]),r=Object(c.useState)(Date.now()),s=Object(l.a)(r,2),u=s[0],d=s[1];return Object(c.useEffect)((function(){var e=window.setInterval((function(){d(Date.now())}),15e3);return function(){window.clearInterval(e)}}),[]),Object(a.jsx)("img",Object(i.a)({src:"".concat(n,"?q=").concat(u),alt:t},o))}function _(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:f.a.list,children:Object(a.jsx)(d.Consumer,{children:function(e){return e.streams.map((function(e){var n=e.key,t=e.name,c=e.color;return Object(a.jsxs)(s.b,{to:"/camera/".concat(n),className:f.a.item,children:[Object(a.jsx)("section",{className:f.a.header,children:Object(a.jsxs)("div",{className:f.a.headerContent,children:[Object(a.jsx)("h2",{className:f.a.name,children:t}),Object(a.jsx)("span",{className:f.a.color,style:{backgroundColor:c}})]})}),Object(a.jsx)("div",{className:f.a.video,children:Object(a.jsx)(p,{src:"".concat(b,"/frame/").concat(n),alt:t})})]})}))}})})})}var g=t(11),w=t(21),x=t(34),S=t(35),M=t(38),C=t(37),y=t(26),D=t.n(y);function N(e){var n=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t,a,c=n.current;return e.source&&c&&(D.a.isSupported()?((a=new D.a).loadSource(e.source),a.attachMedia(c),a.on(D.a.Events.MANIFEST_PARSED,(function(){t=window.setTimeout((function(){null===c||void 0===c||c.play()}),300)}))):(c.src=e.source,t=window.setTimeout((function(){null===c||void 0===c||c.play()}),300))),function(){var e,n,o;clearTimeout(t),null===c||void 0===c||null===(e=c.pause)||void 0===e||e.call(c),null===(n=a)||void 0===n||null===(o=n.destroy)||void 0===o||o.call(n)}}),[e.source]),Object(a.jsx)("video",{ref:n,autoPlay:!0,muted:!0,playsInline:!0})}var E=t(9),H=t.n(E),Y=t(5),k=t.n(Y),F=function(e){if(e)return function(){try{navigator.vibrate(200)}catch(c){}for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return null===e||void 0===e?void 0:e.apply(void 0,t)}},T=t(22),L=t(36);function B(){var e=Object(w.a)(["\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n        "]);return B=function(){return e},e}function R(){var e=Object(w.a)(["\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        cursor: all-scroll;\n\n        height: 5em;\n      "]);return R=function(){return e},e}var W=function(e){var n=Object(c.useRef)({onDrag:function(){},onDragEnd:function(){},onWheel:function(){},onWheelEnd:function(){}}),t=Object(c.useRef)(null),a=Object(L.a)({onWheel:function(e){var t,a;null===(t=(a=n.current).onWheel)||void 0===t||t.call(a,e)},onWheelEnd:function(e){var t,a;null===(t=(a=n.current).onWheelEnd)||void 0===t||t.call(a,e)},onDrag:function(e){var t,a;null===(t=(a=n.current).onDrag)||void 0===t||t.call(a,e)},onDragEnd:function(e){var t,a;null===(t=(a=n.current).onDragEnd)||void 0===t||t.call(a,e)}});return Object(c.useLayoutEffect)((function(){var a,c=-Math.floor(e.value/1e3),o=0,r=function(n){if(n&&n.parentElement){var t=n.getContext("2d");if(t){var a=n.parentElement.getBoundingClientRect();n.width=a.width,n.height=a.height;!function(a){var c=n.getBoundingClientRect().width,o=H()(),r=o.clone().add(a,"seconds"),i=Math.min(j,o.diff(r.clone().startOf("day"),"second"));!function(a,c){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=n.getBoundingClientRect(),i=r.width,l=r.height;t.lineWidth=10,t.strokeStyle=e.color,t.beginPath(),t.moveTo(Math.min(i,Math.max(0,a+o)),l/2),t.lineTo(Math.min(i,Math.max(0,c+o)),l/2),t.closePath(),t.stroke()}(-(Math.max(0,o.diff(r.clone().endOf("day"),"second"))+a),-(i+a),c/2)}(c+o)}}},i=e.onScroll,l=e.onScrollEnd,s=function(e){o=e,o=Math.min(-c,Math.max(-604800-c,o)),null===i||void 0===i||i(1e3*-(c+o))},u=function(){null===l||void 0===l||l(1e3*-(c+o))};return n.current={onDrag:function(e){return s(-e.delta[0])},onWheel:function(e){return s(e.delta[0]||-e.delta[1])},onDragEnd:function(){return u()},onWheelEnd:function(){return u()}},function e(){r(t.current),a=window.requestAnimationFrame(e)}(),function(){a&&window.cancelAnimationFrame(a)}}),[e.value,e.color,e.onScrollEnd,e.onScroll]),Object(g.a)("div",{css:Object(T.a)(R()),children:Object(g.a)("canvas",Object(i.a)({css:Object(T.a)(B()),ref:t,height:100},a()))})},A=function(e){var n=Math.abs(e),t=Math.floor(n/1e3)%60,a=Math.floor(n/1e3/60)%60,c=Math.floor(n/1e3/60/60)%24,o=Math.floor(n/1e3/60/60/24),r=[];return(t>0||a>0||c>0)&&r.unshift("".concat(t.toFixed(0).padStart(2,"0"),"s")),(a>0||c>0)&&r.unshift("".concat(a.toFixed(0).padStart(2,"0"),"m")),c>0&&r.unshift("".concat(c.toFixed(0).padStart(2,"0"),"h")),o>0&&r.unshift("".concat(o,"d")),"".concat(Math.sign(e)<0?"-":"").concat(r.join(" "))};function I(e){var n,t,o=function(){var e=Object(c.useState)(Date.now()),n=Object(l.a)(e,2),t=n[0],a=n[1];return Object(c.useLayoutEffect)((function(){var e;return function n(){var t=Date.now(),c=Math.max(1e3-new Date(t).getMilliseconds(),0);a(t),window.clearTimeout(e),e=window.setTimeout(n,c)}(),function(){window.clearTimeout(e)}}),[]),t}(),r=Object(c.useState)(null),i=Object(l.a)(r,2),u=i[0],d=i[1],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,n=Object(c.useState)(!0),t=Object(l.a)(n,2),a=t[0],o=t[1],r=Object(c.useRef)((function(){return o(!0)})),i=Object(c.useRef)((function(){return o(!1)}));return Object(c.useEffect)((function(){var n;return i.current=function(){window.clearTimeout(n),o(!1)},r.current=function(){window.clearTimeout(n),o(!0),n=window.setTimeout(i.current,e)},r.current(),function(){window.clearTimeout(n)}}),[e]),{visible:a,show:r,hide:i}}(1e4),f=m.visible,h=m.show,b=Object(c.useRef)({});Object(c.useEffect)((function(){var n=e.onChange,t=e.value;function a(e){d(null),n(Math.max(0,Math.min(6048e5,e)))}b.current.sliderChange=F(a),b.current.timeChange=F((function(e){var n=e.split(":").map((function(e){return Number.parseInt(e,10)})),c=Object(l.a)(n,2),o=c[0],r=c[1],i=H()(),s=i.clone().subtract(t,"milliseconds").hours(o).minutes(r);null===a||void 0===a||a(i.diff(s))})),b.current.dateChange=F((function(e){if(e){var n=H()(),c=H()().subtract(t,"milliseconds"),o=H()(e).hours(c.hours()).minutes(c.minutes()).seconds(c.seconds()).milliseconds(c.milliseconds());null===a||void 0===a||a(n.diff(o))}}))}),[e.value,e.onChange]);var v=null!=u?u:e.value,j=H()(new Date(o-v)),O=o-6048e5;O-=O%6e4;var p=o;p+=6e4-p%6e4;var _=H()(new Date(O)),g=H()(new Date(p));return Object(a.jsxs)("div",{className:k.a.main,style:{opacity:f?1:0},onTouchStart:h.current,onMouseMove:h.current,children:[Object(a.jsxs)("div",{className:k.a.top,children:[Object(a.jsx)(s.b,{to:"/",className:k.a.back,children:Object(a.jsx)("svg",{viewBox:"0 0 29 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M25 9.17424V11.8258H9.09091L16.3826 19.1174L14.5 21L4 10.5L14.5 0L16.3826 1.88258L9.09091 9.17424H25Z",fill:"currentColor"})})}),Object(a.jsxs)("div",{className:k.a.info,children:[Object(a.jsx)("span",{className:k.a.color,style:{backgroundColor:null===(n=e.stream)||void 0===n?void 0:n.color}}),Object(a.jsx)("span",{className:k.a.name,children:null===(t=e.stream)||void 0===t?void 0:t.name})]})]}),Object(a.jsx)("div",{className:k.a.timeline,children:Object(a.jsxs)("div",{className:k.a.center,children:[Object(a.jsxs)("div",{className:k.a.timewrapper,children:[Object(a.jsx)("div",{onClick:function(){var e,n;return null===(e=(n=b.current).sliderChange)||void 0===e?void 0:e.call(n,0)},className:k.a.timeoffset,children:v?A(-v):Object(a.jsx)("span",{className:k.a.live,children:"\u017div\u011b"})}),Object(a.jsxs)("div",{className:[k.a.pill,k.a.margin].join(" "),children:[Object(a.jsx)("input",{className:k.a.cover,onChange:function(e){var n,t;return null===(n=(t=b.current).timeChange)||void 0===n?void 0:n.call(t,e.target.value)},value:j.format("HH:mm"),min:_.format("HH:mm"),max:g.format("HH:mm"),type:"time"}),Object(a.jsx)("span",{className:k.a.time,children:j.format("HH:mm:ss")})]})]}),Object(a.jsxs)("div",{className:k.a.pill,children:[Object(a.jsx)("input",{className:k.a.cover,onChange:function(e){var n,t;return null===(n=(t=b.current).dateChange)||void 0===n?void 0:n.call(t,e.target.valueAsDate)},value:j.format("YYYY-MM-DD"),min:_.format("YYYY-MM-DD"),max:g.format("YYYY-MM-DD"),type:"date"}),Object(a.jsx)("span",{className:k.a.calendar,children:j.format("DD. MMMM YYYY")})]})]})}),Object(a.jsx)(W,{onScroll:d,onScrollEnd:b.current.sliderChange,value:e.value,color:e.stream.color})]})}function Z(){var e=Object(w.a)(["\n          display: flex;\n          align-items: center;\n          justify-content: center;\n\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n\n          background: #090909;\n\n          & > video {\n            width: 100%;\n            height: 100%;\n            object-fit: contain;\n            object-position: center;\n          }\n        "]);return Z=function(){return e},e}var P=function(e){Object(M.a)(t,e);var n=Object(C.a)(t);function t(){var e;Object(x.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=n.call.apply(n,[this].concat(c))).state={from:0,to:0,shift:0,showTools:!1},e.generateUrl=function(e){var n=e.name,t=e.from,a=e.to,c=e.shift,o="".concat(b,"/data/").concat(n,"/"),r="stream.m3u8",i=[];return t>0?(r="slice.m3u8",i.push("from=".concat(t)),a>0&&t<a&&i.push("to=".concat(a))):c>0&&i.push("shift=".concat(Math.ceil(c/1e3))),o+=r,i.length>0&&(o+="?"+i.join("&")),o},e}return Object(S.a)(t,[{key:"componentWillUpdate",value:function(e){this.props.name!==e.name&&this.setState({from:0,to:0,shift:0})}},{key:"render",value:function(){var e=this,n=this.props,t=n.name,a=n.streams,c=this.state,o=c.from,r=c.to,i=c.shift,l=this.generateUrl({name:t,from:o,to:r,shift:i}),s=a.find((function(e){return e.key===t}));return Object(g.b)("div",{css:Object(T.a)(Z()),children:[l&&Object(g.a)(N,{source:l}),s&&Object(g.a)(I,{onChange:function(n){return e.setState({shift:n})},value:i,stream:s})]})}}]),t}(c.Component);function X(){var e=Object(c.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1];return Object(c.useEffect)((function(){fetch("".concat(b,"/streams")).then((function(e){return e.json()})).then((function(e){var n=e.data;return o(n.map((function(e,n){return Object(i.a)(Object(i.a)({},e),{},{color:v[n%v.length]})})))}))}),[]),Object(a.jsx)(s.a,{children:Object(a.jsx)(d.Provider,{value:{streams:t},children:Object(a.jsxs)("div",{id:"app",children:[Object(a.jsx)(u.a,{exact:!0,path:"/",component:_}),Object(a.jsx)(u.a,{path:"/camera/:name",render:function(e){var n=e.match;return Object(a.jsx)(P,{name:n.params.name,streams:t})}})]})})})}r.a.render(Object(a.jsx)(X,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.ab7dc2a0.chunk.js.map