(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{114:function(e,t,n){(e.exports=n(49)(!1)).push([e.i,".white-space {\r\n    margin-top: 8px;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}",""])},115:function(e,t,n){var r=n(114);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(48)(r,a);r.locals&&(e.exports=r.locals)},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this;this.get=function(t){if(name="store."+e.name+"."+t,null!==localStorage.getItem(name))try{return JSON.parse(localStorage.getItem(name))}catch(e){return null}},this.set=function(t,n){if(void 0===n)e.remove(t);else{if("function"==typeof n)n=null;else try{n=JSON.stringify(n)}catch(e){n=null}localStorage.setItem("store."+e.name+"."+t,n)}return e},this.remove=function(t){return localStorage.removeItem("store."+e.name+"."+t),e},this.removeAll=function(){for(var t="store."+e.name+".",n=localStorage.length-1;n>=0;n--)localStorage.key(n).substring(0,t.length)===t&&localStorage.removeItem(localStorage.key(n));return e},this.toObject=function(){for(var t={},n=void 0,r=void 0,a="store."+e.name+".",o=localStorage.length-1;o>=0;o--)localStorage.key(o).substring(0,a.length)===a&&(n=localStorage.key(o).substring(a.length),void 0!==(r=e.get(n))&&(t[n]=r));return t},this.fromObject=function(t,n){for(var r in!0!==n&&e.removeAll(),t)t.hasOwnProperty(r)&&e.set(r,t[r]);return e}};t.default=function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r.call(this),this.name=t,void 0!==n)for(var a in n)n.hasOwnProperty(a)&&void 0===this.get(a)&&this.set(a,n[a])}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.upload_to_server=function(e,t,n){if(e){var r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};r=Object.assign(r,t),fetch(e,r).then(function(e){return e.text()}).then(function(e){return n(e)}).catch(function(e){console.log(e)})}},t.get_by_cookie=function(e,t,n){if(e){var r={credentials:"include"};r=Object.assign(r,t),fetch(e,r).then(function(e){return e.json()}).then(function(e){return n(e)}).catch(function(e){console.log(e)})}},t.post_by_cookie=function(e,t,n){if(e){var r={method:"POST",credentials:"include",headers:{"Content-Type":"application/json; charset=UTF-8"}};r=Object.assign(r,t),fetch(e,r).then(function(e){return console.log(e),e.text()}).then(function(e){console.log(e),n(JSON.parse(e))}).catch(function(e){console.log(e)})}}},192:function(e,t,n){(e.exports=n(49)(!1)).push([e.i,".Option{}",""])},193:function(e,t,n){var r=n(192);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(48)(r,a);r.locals&&(e.exports=r.locals)},194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(73)),a=c(n(72));n(71),n(70);var o=n(1),l=c(o),i=c(n(54)),u=c(n(12));function c(e){return e&&e.__esModule?e:{default:e}}var s=(chrome.extension?chrome.extension.getBackgroundPage():{store:new u.default}).store,f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_switch_onchange=function(e,t){s.set(e,t),"is_multil"==e&&chrome.browserAction.setPopup({popup:t?"":"index.html"}),n.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))},n.render=function(){var e=n.state,t=e.is_multil,o=e.is_listen_board,u=e.is_listen_bp,c=e.is_rape;return l.default.createElement("div",{className:"MultiBattle",style:{marginLeft:"1%"}},l.default.createElement(a.default,{title:"开启该选项时，点击icon将不会点开面板，而会照着下方几个选项决定行为，默认为读取剪切板中内容请求battle信息，不报错则进房"},l.default.createElement("span",{style:{float:"left",color:"#666"}},"是否开启舔婊模式")),l.default.createElement(r.default,{onChange:function(e){return n.handle_switch_onchange("is_multil",e)},checked:t,style:{float:"right",marginRight:"85%"}}),l.default.createElement(i.default,{clear:!0}),l.default.createElement(a.default,{title:"开启该选项时，当你的剪切板内容发生变化且内容像battle id时，会直接进房，而不用点icon"},l.default.createElement("span",{style:{float:"left",color:"#666"}},"是否监视剪切板")),l.default.createElement(r.default,{onChange:function(e){return n.handle_switch_onchange("is_listen_board",e)},checked:o,disabled:!t,style:{float:"right",marginRight:"85%"}}),l.default.createElement(i.default,{clear:!0}),l.default.createElement(a.default,{title:"开启该选项且监视剪切板时，每次进房前将会额外判断bp是否能进房间，不够就会吃药"},l.default.createElement("span",{style:{float:"left",color:"#666"}},"是否监视bp")),l.default.createElement(r.default,{onChange:function(e){return n.handle_switch_onchange("is_listen_bp",e)},checked:u,disabled:!o,style:{float:"right",marginRight:"85%"}}),l.default.createElement(i.default,{clear:!0}),l.default.createElement(a.default,{title:"开启该选项时，可以强行进入下一个房间，而不是等当场战斗结束"},l.default.createElement("span",{style:{float:"left",color:"#666"}},"是否强行进入")),l.default.createElement(r.default,{onChange:function(e){return n.handle_switch_onchange("is_rape",e)},checked:c,disabled:!u,style:{float:"right",marginRight:"85%"}}),l.default.createElement(i.default,{clear:!0}))},n.state={is_multil:s.get("is_multil"),is_listen_board:s.get("is_listen_board"),is_listen_bp:s.get("is_listen_bp"),is_rape:s.get("is_rape")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=f},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(72)),a=c(n(73));n(70),n(71);var o=n(1),l=c(o),i=c(n(54)),u=c(n(12));function c(e){return e&&e.__esModule?e:{default:e}}var s=(chrome.extension?chrome.extension.getBackgroundPage():{store:new u.default}).store,f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_switch_onchange=function(e){s.set("is_scroll_style_show",e),chrome.extension&&chrome.tabs.query({active:!0,currentWindow:!0},function(t){chrome.tabs.connect(t[0].id,{name:"popup_to_content"}).postMessage({message:"scroll_style_status",status:e})})},n.render=function(){var e=n.state.checked;return l.default.createElement("div",{className:"ScrollOptions"},l.default.createElement("div",{style:{marginLeft:"1%"}},l.default.createElement(r.default,{title:"开启该选项时，你鼠标移到滚动条附近，滚动条会变粗三秒"},l.default.createElement("span",{style:{float:"left",color:"#666"}},"滚动条样式变化"),l.default.createElement(a.default,{onChange:n.handle_switch_onchange,defaultChecked:e,style:{float:"right",marginRight:"85%"}}),l.default.createElement("div",{style:{clear:"both"}}))),l.default.createElement(i.default,null))},n.state={checked:s.get("is_scroll_style_show")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=f},196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(73));n(71);var a=n(1),o=u(a),l=u(n(54)),i=u(n(12));function u(e){return e&&e.__esModule?e:{default:e}}var c=(chrome.extension?chrome.extension.getBackgroundPage():{store:new i.default}).store,s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_coopraid_switch=function(e,t){c.set(t,e),chrome.extension&&chrome.tabs.query({active:!0,currentWindow:!0},function(n){chrome.tabs.connect(n[0].id,{name:"popup_to_content"}).postMessage({message:"sider_status",type:t,status:e})})},n.render=function(){var e=n.state,t=e.left_checked,a=e.right_checked;return o.default.createElement("div",{className:"SiderOptions"},o.default.createElement("div",{style:{marginLeft:"1%"}},o.default.createElement("span",{style:{float:"left",color:"#666"}},"左侧面板"),o.default.createElement(r.default,{onChange:function(e){return n.handle_coopraid_switch(e,"is_left_sider_show")},defaultChecked:t,style:{float:"right",marginRight:"85%"}}),o.default.createElement("div",{style:{clear:"both"}})),o.default.createElement(l.default,null),o.default.createElement("div",{style:{marginLeft:"1%"}},o.default.createElement("span",{style:{float:"left",color:"#666"}},"右侧面板"),o.default.createElement(r.default,{onChange:function(e){return n.handle_coopraid_switch(e,"is_right_sider_show")},defaultChecked:a,style:{float:"right",marginRight:"85%"}}),o.default.createElement("div",{style:{clear:"both"}})),o.default.createElement(l.default,null))},n.state={left_checked:c.get("is_left_sider_show"),right_checked:c.get("is_right_sider_show")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),t}();t.default=s},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(79)),a=d(n(123)),o=d(n(98)),l=d(n(97));n(74),n(83),n(96),n(116);var i=n(1),u=d(i),c=d(n(54)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(13)),f=d(n(12));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var h=l.default.Option,m=(chrome.extension?chrome.extension.getBackgroundPage():{store:new f.default}).store,_="http://game.granbluefantasy.jp/item/article_list_by_filter_mode",y="http://game.granbluefantasy.jp/item/recovery_and_evolution_list_by_filter_mode",g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_address=function(e){return n.setState({address:e.target.value})},n.handle_head_address=function(e){return n.setState({head_address:e})},n.handle_upload=function(){var e=n.state,t=e.head_address,r=e.address;m.set("address",r),m.set("head_address",t),n.setState({btn_loading:!0});var a=m.get("userId");if(!a)return o.default.open({message:"非法操作",description:"没获得到userId",duration:3}),void n.setState({btn_loading:!1});s.get_by_cookie(_,{},function(e){s.get_by_cookie(y,{},function(l){l=n.steam_roller(l),e=[].concat(p(e),p(l));var i="user_id="+a+"&data="+JSON.stringify(e);s.upload_to_server(""+t+r+"/Memo/gbf/i_item.do",{body:i},function(e){"success"==e&&o.default.open({message:"上传成功",description:"",duration:3}),n.setState({btn_loading:!1})})})})},n.steam_roller=function(e){var t=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var u=l.value;Array.isArray(u)?t.push.apply(t,n.steam_roller(u)):t.push(u)}}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return t},n.render=function(){var e=n.state,t=e.address,o=e.head_address,i=e.btn_loading,s=u.default.createElement(l.default,{defaultValue:o,style:{width:90},onChange:n.handle_head_address},u.default.createElement(h,{value:"http://"},"http://"),u.default.createElement(h,{value:"https://"},"https://"),u.default.createElement(h,{value:"ftp://"},"ftp://"));return u.default.createElement("div",{className:"UploadItems"},u.default.createElement("span",null,"上传地址："),u.default.createElement(a.default,{addonBefore:s,style:{width:"20%"},onChange:n.handle_address,value:t}),u.default.createElement(r.default,{type:"primary",loading:i,onClick:n.handle_upload,style:{marginLeft:"2%",width:"15%"}},"上传素材"),u.default.createElement(c.default,null))},n.state={address:m.get("address"),head_address:m.get("head_address"),btn_loading:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}();t.default=g},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=p(n(58)),a=p(n(212)),o=p(n(142)),l=p(n(210));n(207),n(206),n(203),n(200);var i=n(1),u=p(i),c=p(n(197)),s=p(n(196)),f=p(n(195)),d=p(n(194));n(193);p(n(12));function p(e){return e&&e.__esModule?e:{default:e}}var h=l.default.Content,m=l.default.Footer,_=l.default.Sider,y=(o.default.SubMenu,function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_menu_item=function(e){e.item;var t=e.key;e.keyPath;n.setState({key:t})},n.render=function(){var e=n.state,t=(e.collapsed,e.key),i=u.default.createElement(h,{style:{margin:"0 16px"}},u.default.createElement(a.default,{style:{margin:"16px 0"}},u.default.createElement(a.default.Item,null,"全局样式")),u.default.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},u.default.createElement(s.default,null),u.default.createElement(f.default,null))),p=u.default.createElement(h,{style:{margin:"0 16px"}},u.default.createElement(a.default,{style:{margin:"16px 0"}},u.default.createElement(a.default.Item,null,"舔婊相关")),u.default.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},u.default.createElement(d.default,null))),y=u.default.createElement(h,{style:{margin:"0 16px"}},u.default.createElement(a.default,{style:{margin:"16px 0"}},u.default.createElement(a.default.Item,null,"记录上传")),u.default.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},u.default.createElement(c.default,null)));return u.default.createElement(l.default,{style:{minHeight:"100vh"}},u.default.createElement(_,{collapsible:!0},u.default.createElement("div",{className:"logo"}),u.default.createElement(o.default,{theme:"dark",defaultSelectedKeys:[t],mode:"inline"},g.map(function(e){var t=e.key,a=e.type,l=e.text;return u.default.createElement(o.default.Item,{key:t,onClick:n.handle_menu_item},u.default.createElement(r.default,{type:a}),u.default.createElement("span",null,l))}))),u.default.createElement(l.default,null,0==t&&i,1==t&&p,2==t&&y,u.default.createElement(m,{style:{textAlign:"center"}},u.default.createElement("div",null,"贫穷使我们相遇，但后来，你却发出了母猪的声音。而我，只想为你豹跳一曲，如花净土..."),u.default.createElement("div",null,"Poverty makes us meet, but later, only you come out of the closet. But for me, I just want to marry to you..."))))},n.state={key:"1"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}());t.default=y;var g=[{key:0,type:"desktop",text:"全局样式"},{key:1,type:"team",text:"舔婊相关（码码中，选项暂时无效）"},{key:2,type:"upload",text:"记录上传"}]},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(r);n(115);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.render=function(){var e=n.props.clear;return a.default.createElement("div",{className:"white-space",style:{clear:e?"both":"none"}})},n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=o}}]);