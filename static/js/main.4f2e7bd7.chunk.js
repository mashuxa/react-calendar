(this["webpackJsonpreact-calendar"]=this["webpackJsonpreact-calendar"]||[]).push([[0],{18:function(t,e,n){t.exports=n(32)},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),s=n(5),i=n(3),l={year:(new Date).getUTCFullYear(),month:"",day:""},u=n(17),h=n(6),f=n(7),p=n(9),d=n(8),y=n(10),m=n(1);function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function v(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var g=r.a.createElement("path",{id:"arrow-left",d:"M15.705 16.59L11.125 12L15.705 7.41L14.295 6L8.29498 12L14.295 18L15.705 16.59Z"}),O=function(t){var e=t.svgRef,n=t.title,a=v(t,["svgRef","title"]);return r.a.createElement("svg",b({width:24,height:24,viewBox:"0 0 24 24",ref:e},a),n?r.a.createElement("title",null,n):null,g)},E=r.a.forwardRef((function(t,e){return r.a.createElement(O,b({svgRef:e},t))}));n.p;function T(){return(T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function w(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var _=r.a.createElement("path",{id:"arrow-right",d:"M8.29498 16.59L12.875 12L8.29498 7.41L9.70498 6L15.705 12L9.70498 18L8.29498 16.59Z"}),j=function(t){var e=t.svgRef,n=t.title,a=w(t,["svgRef","title"]);return r.a.createElement("svg",T({width:24,height:24,viewBox:"0 0 24 24",ref:e},a),n?r.a.createElement("title",null,n):null,_)},C=r.a.forwardRef((function(t,e){return r.a.createElement(j,T({svgRef:e},t))}));n.p;function M(t){return{type:"SET_YEAR",payload:t}}function D(t){return{type:"SET_MONTH",payload:t}}function k(t){return{type:"SET_DAY",payload:t}}function S(t){return{type:"SET_DATE",payload:t}}var N=[{name:{short:"Jan",full:"January"},color:"#637bfe"},{name:{short:"Feb",full:"February"},color:"#33bfff"},{name:{short:"Mar",full:"March"},color:"#1de9b6"},{name:{short:"Apr",full:"April"},color:"#00e676"},{name:{short:"May",full:"May"},color:"#91ff35"},{name:{short:"Jun",full:"June"},color:"#ffc400"},{name:{short:"Jul",full:"July"},color:"#ff9100"},{name:{short:"Aug",full:"August"},color:"#ff6333"},{name:{short:"Sep",full:"September"},color:"#ff4569"},{name:{short:"Okt",full:"October"},color:"#f73378"},{name:{short:"Nov",full:"November"},color:"#dd33fa"},{name:{short:"Dec",full:"December"},color:"#834bff"}],R=(n(28),function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(p.a)(this,Object(d.a)(e).call(this,t))).class="year-view",n.touchCoordinates={startX:null,endX:null},n.onTouchStart=n.onTouchStart.bind(Object(m.a)(n)),n.onTouchMove=n.onTouchMove.bind(Object(m.a)(n)),n.onTouchEnd=n.onTouchEnd.bind(Object(m.a)(n)),n}return Object(y.a)(e,t),Object(f.a)(e,[{key:"onTouchStart",value:function(t){this.touchCoordinates.startX=t.touches[0].clientX,this.touchCoordinates.endX=t.touches[0].clientX}},{key:"onTouchMove",value:function(t){this.touchCoordinates.endX=t.touches[0].clientX}},{key:"onTouchEnd",value:function(){var t=this.touchCoordinates.startX,e=this.touchCoordinates.endX;t>e&&t-e>100?this.props.setYear(this.props.year+1):Math.abs(e-t)>100&&this.props.setYear(this.props.year-1)}},{key:"render",value:function(){var t=this;return r.a.createElement("section",{className:"".concat(this.class),onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd},r.a.createElement("div",{className:"".concat(this.class,"__title")},r.a.createElement(E,{className:"".concat(this.class,"__btn ").concat(this.class,"__btn--arrow"),onClick:function(){t.props.setYear(t.props.year-1),t.props.onChangeYear&&t.props.onChangeYear(t.props.year-1)}}),this.props.year,r.a.createElement(C,{className:"".concat(this.class,"__btn ").concat(this.class,"__btn--arrow"),onClick:function(){t.props.setYear(t.props.year+1),t.props.onChangeYear&&t.props.onChangeYear(t.props.year+1)}})),r.a.createElement("div",{className:"".concat(this.class,"__wrapper")},N.map((function(e,n){return r.a.createElement("div",{key:e.name.short,className:"".concat(t.class,"__month"),title:e.name.full,style:{backgroundColor:e.color,animationDelay:"".concat(.03*n,"s")},onClick:function(){return t.props.setMonth(n)}}," ",e.name.short," ")}))))}}]),e}(r.a.Component));var Y=Object(i.b)((function(t){return{year:t.calendarReducer.year}}),(function(t){return{setYear:function(e){return t(M(e))},setMonth:function(e){t(D(e))}}}))(R);function U(){return(U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function X(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var x=r.a.createElement("rect",{width:6,height:6}),L=r.a.createElement("rect",{x:7,width:6,height:6}),A=r.a.createElement("rect",{y:7,width:6,height:6}),P=r.a.createElement("rect",{x:7,y:7,width:6,height:6}),F=function(t){var e=t.svgRef,n=t.title,a=X(t,["svgRef","title"]);return r.a.createElement("svg",U({width:13,height:13,viewBox:"0 0 13 13",ref:e},a),n?r.a.createElement("title",null,n):null,x,L,A,P)},J=r.a.forwardRef((function(t,e){return r.a.createElement(F,U({svgRef:e},t))})),B=(n.p,n(29),function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(p.a)(this,Object(d.a)(e).call(this,t))).class="month-view",n.touchCoordinates={startY:null,endY:null},n.date=new Date(Date.UTC(t.year,t.month,1)),n.onTouchStart=n.onTouchStart.bind(Object(m.a)(n)),n.onTouchMove=n.onTouchMove.bind(Object(m.a)(n)),n.onTouchEnd=n.onTouchEnd.bind(Object(m.a)(n)),n.changeMonth=n.changeMonth.bind(Object(m.a)(n)),n}return Object(y.a)(e,t),Object(f.a)(e,[{key:"onTouchStart",value:function(t){this.touchCoordinates.startX=t.touches[0].clientX,this.touchCoordinates.endX=t.touches[0].clientX}},{key:"onTouchMove",value:function(t){this.touchCoordinates.endX=t.touches[0].clientX}},{key:"onTouchEnd",value:function(){var t=this.touchCoordinates.startX,e=this.touchCoordinates.endX;t>e&&t-e>100?this.changeMonth(1):Math.abs(e-t)>100&&this.changeMonth(-1)}},{key:"changeMonth",value:function(t){this.date.setUTCMonth(this.date.getUTCMonth()+t);var e=[this.date.getUTCFullYear(),this.date.getUTCMonth()+1,0],n=new Date(Date.UTC.apply(Date,e)).getUTCDate();this.props.setDate({day:this.props.day?Math.min(n,this.props.day):"",month:this.date.getUTCMonth(),year:this.date.getUTCFullYear()})}},{key:"render",value:function(){var t=this,e=N[this.props.month].color;return r.a.createElement("section",{className:"".concat(this.class)},r.a.createElement(J,{className:"".concat(this.class,"__btn ").concat(this.class,"__btn--back"),onClick:function(){t.props.resetMonth(),t.props.resetDay()}}),r.a.createElement("div",{className:"".concat(this.class,"__title"),style:{color:e}},r.a.createElement(E,{className:"".concat(this.class,"__btn ").concat(this.class,"__btn--arrow"),onClick:function(){t.changeMonth(-1)}}),N[this.props.month].name.full,r.a.createElement(C,{className:"".concat(this.class,"__btn ").concat(this.class,"__btn--arrow"),onClick:function(){t.changeMonth(1)}})),r.a.createElement("div",{className:"".concat(this.class,"__month-wrapper"),onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd},r.a.createElement("div",{className:"".concat(this.class,"__days-wrapper")},this.days)))}},{key:"days",get:function(){for(var t=this,e=[],n=N[this.props.month].color,a=0;a<new Date(this.props.year,this.props.month).getUTCDay();a++)e.push(r.a.createElement("div",{className:"".concat(this.class,"__day-wrapper"),key:"key-".concat(a)}));for(var o=function(a){var o=t.props.day===a?"".concat(t.class,"__day--selected"):"",c=t.props.day===a?"".concat(t.class,"__day--selected"):"",s=o?{borderColor:n,color:n}:{animationDelay:"".concat(.01*a,"s")};e.push(r.a.createElement("div",{className:"".concat(t.class,"__day-wrapper"),key:a},r.a.createElement("div",{className:"".concat(t.class,"__day ").concat(c),style:s,onClick:function(){t.props.setDay(a)}},a)))},c=1;c<=new Date(this.props.year,this.props.month+1,0).getDate();c++)o(c);return e}}]),e}(r.a.Component));var I=Object(i.b)((function(t){return{year:t.calendarReducer.year,month:t.calendarReducer.month,day:t.calendarReducer.day}}),(function(t){return{setDate:function(e){return t(S(e))},setDay:function(e){return t(k(e))},setMonth:function(e){return t(D(e))},setYear:function(e){return t(M(e))},resetMonth:function(){return t(D(""))},resetDay:function(){return t(k(""))}}}))(B),H=(n(30),n(31),function(t){function e(t){var n;return Object(h.a)(this,e),n=Object(p.a)(this,Object(d.a)(e).call(this,t)),t.store&&"function"===typeof t.onChange&&t.store.subscribe((function(){t.onChange(t.store.getState().calendarReducer)})),n}return Object(y.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.initialDate;if(t){var e='Incorrect date format. Use Date object or string in format "year-month-day"';if(t instanceof Date)this.props.setDate({day:t.getUTCDate(),month:t.getUTCMonth(),year:t.getUTCFullYear()});else{if("string"!==typeof t)throw new Error(e);try{var n=t.split("-").map((function(t){return Number(t)})),a=Object(u.a)(n,3),r=a[0],o=a[1],c=a[2],s=new Date(Date.UTC(r,o-1,c));if(r!==s.getUTCFullYear()||o-1!==s.getUTCMonth()||c!==s.getUTCDate())throw new Error(e);this.props.setDate({day:c,month:o-1,year:r})}catch(i){console.error(i)}}}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"calendar__title"},this.props.title),""!==this.props.month?r.a.createElement(I,{data:this.props.data}):r.a.createElement(Y,null))}}]),e}(r.a.Component));var W=Object(i.b)((function(t){return{month:t.calendarReducer.month}}),(function(t){return{setDate:function(e){return t(S(e))}}}))(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=Object(s.c)(Object(s.b)({calendarReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_YEAR":return Object.assign({},t,{year:e.payload});case"SET_MONTH":return Object.assign({},t,{month:e.payload});case"SET_DAY":return Object.assign({},t,{day:e.payload});case"SET_DATE":return Object.assign({},t,{year:e.payload.year,month:e.payload.month,day:e.payload.day});default:return t}}}));c.a.render(r.a.createElement(i.a,{store:Z},r.a.createElement(W,{initialDate:new Date,onChange:"",sidebarData:"",store:Z,title:"Start date"})),document.getElementById("react-calendar")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.4f2e7bd7.chunk.js.map