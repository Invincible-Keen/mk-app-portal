webpackJsonp([0],{1545:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,a,i=n(2),o=r(i),c=n(56),f=r(c),d=n(5),s=r(d),l=n(10),p=r(l),m=n(7),h=r(m),g=n(8),v=r(g),k=n(0),w=(r(k),n(272)),y=n(612),_=r(y),b=(u=(0,w.wrapper)(_.default))(a=function(e){function t(){return(0,s.default)(this,t),(0,h.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,o.default)({},this.props,{path:"root"}))}}]),t}(k.Component))||a;t.default=b,e.exports=t.default},1546:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=new k.action(e),n=new _((0,i.default)({},e,{metaAction:t})),r=(0,i.default)({},t,n);return t.config({metaHandlers:r}),r}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=r(a),o=n(273),c=r(o),f=n(274),d=r(f),s=n(275),l=r(s),p=n(5),m=r(p);t.default=u;var h=n(0),g=r(h),v=n(276),k=n(272),w=n(605),y=r(w),_=function e(t){var r=this;(0,m.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;r.component=t,r.injections=n,n.reduce("init"),r.load()},this.load=(0,l.default)(d.default.mark(function e(){var t;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.webapi.getMenu){e.next=5;break}return e.next=3,r.webapi.getMenu();case 3:t=e.sent,r.injections.reduce("load",{menu:t});case 5:case"end":return e.stop()}},e,r)})),this.getLogo=function(){return r.config.logo},this.getPhoto=function(){return n(1548)},this.getMenuChildren=function(){var e=r.metaAction.gf("data.menu").toJS();return function e(t){var n=[];return t.forEach(function(t){t.children?n.push(g.default.createElement(v.Menu.SubMenu,{key:t.key,title:t.name},e(t.children))):n.push(g.default.createElement(v.Menu.Item,{key:t.key},t.name))}),n}(e)},this.topMenuClick=function(e){switch(e.key){case"logout":r.component.props.onRedirect&&r.config.goAfterLogout&&(r.metaAction.context.set("user",void 0),r.component.props.onRedirect(r.config.goAfterLogout));break;case"github":window.open("https://www.github.com/ziaochina/mk-app-portal");break;case"gitter":window.open("https://gitter.im/mk-js/mk-js?utm_source=share-link&utm_medium=link&utm_campaign=share-link")}},this.menuClick=function(e){var t=r.metaAction.gf("data.menu").toJS(),n=function t(n){var r=!0,u=!1,a=void 0;try{for(var i,o=(0,c.default)(n);!(r=(i=o.next()).done);r=!0){var f=i.value;if(f.key==e.key)return f;if(f.children){var d=t(f.children);if(d)return d}}}catch(e){u=!0,a=e}finally{try{!r&&o.return&&o.return()}finally{if(u)throw a}}}(t);n&&r.injections.reduce("setContent",n.appName,n.appParams)},this.metaAction=t.metaAction,this.config=y.default.current,this.webapi=this.config.webapi};e.exports=t.default},1547:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=new d.reducer(e),n=new m((0,i.default)({},e,{metaReducer:t}));return(0,i.default)({},t,n)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=r(a),o=n(5),c=r(o);t.default=u;var f=n(80),d=n(272),s=n(605),l=r(s),p=n(613),m=function e(t){var n=this;(0,c.default)(this,e),this.init=function(e,t){return e=n.metaReducer.init(e,(0,p.getInitState)()),n.config.menu&&!n.config.webapi.getMenu?n.load(e,{menu:n.config.menu}):e},this.load=function(e,t){var r=t.menu;if(!r||0==r.lenght)return e;var u,a,i=[];!function e(t){var n=[];return t.forEach(function(t){t.children?(t.isExpand&&i.push(t),e(t.children)):(a||(a=t),t.isDefault&&(u=t))}),n}(r),u=u||a;var o=(0,f.fromJS)(u?[u.key]:[]),c=(0,f.fromJS)(i.map(function(e){return e.key})),d=(0,f.fromJS)(u||{});return e=n.metaReducer.sf(e,"data.menu",(0,f.fromJS)(r)),e=n.metaReducer.sf(e,"data.menuDefaultSelectedKeys",o),e=n.metaReducer.sf(e,"data.menuDefaultOpenKeys",c),e=n.metaReducer.sf(e,"data.content",d)},this.setContent=function(e,t,r){return e=n.metaReducer.sf(e,"data.content.appName",t),e=n.metaReducer.sf(e,"data.content.appParams",r)},this.metaReducer=t.metaReducer,this.config=l.default.current};e.exports=t.default},1548:function(e,t,n){e.exports=n.p+"photo.ac003cd4.png"}});