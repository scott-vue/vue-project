!function(e){function t(o){if(s[o])return s[o].exports;var r=s[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var s={};return t.m=e,t.c=s,t.p="/dist/",t(0)}([function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=s(27),i=o(r);Vue.config.debug=!0,new Vue(i["default"])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var s=this[t];s[2]?e.push("@media "+s[2]+"{"+s[1]+"}"):e.push(s[1])}return e.join("")},e.i=function(t,s){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(s&&!a[2]?a[2]=s:s&&(a[2]="("+a[2]+") and ("+s+")"),e.push(a))}},e}},function(e,t,s){function o(e,t){for(var s=0;s<e.length;s++){var o=e[s],r=d[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(n(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(n(o.parts[i],t));d[o.id]={id:o.id,refs:1,parts:a}}}}function r(e){for(var t=[],s={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],n=r[2],l=r[3],c={css:a,media:n,sourceMap:l};s[i]?s[i].parts.push(c):t.push(s[i]={id:i,parts:[c]})}return t}function i(){var e=document.createElement("style"),t=A();return e.type="text/css",t.appendChild(e),e}function a(){var e=document.createElement("link"),t=A();return e.rel="stylesheet",t.appendChild(e),e}function n(e,t){var s,o,r;if(t.singleton){var n=g++;s=m||(m=i()),o=l.bind(null,s,n,!1),r=l.bind(null,s,n,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=a(),o=u.bind(null,s),r=function(){s.parentNode.removeChild(s),s.href&&URL.revokeObjectURL(s.href)}):(s=i(),o=c.bind(null,s),r=function(){s.parentNode.removeChild(s)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function l(e,t,s,o){var r=s?"":o.css;if(e.styleSheet)e.styleSheet.cssText=h(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function c(e,t){var s=t.css,o=t.media;t.sourceMap;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}function u(e,t){var s=t.css,o=(t.media,t.sourceMap);o&&(s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([s],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),A=p(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f());var s=r(e);return o(s,t),function(e){for(var i=[],a=0;a<s.length;a++){var n=s[a],l=d[n.id];l.refs--,i.push(l)}if(e){var c=r(e);o(c,t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var h=function(){var e=[];return function(t,s){return e[t]=s,e.filter(Boolean).join("\n")}}()},function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(8),i=o(r),a=s(28),n=o(a),l=s(29),c=o(l),u=s(31),d=o(u),p=s(30),f=o(p);t["default"]={el:"#chat",data:function(){var e=i["default"].fetch();return{user:e.user,userList:e.userList,sessionList:e.sessionList,search:"",sessionIndex:0}},computed:{session:function(){return this.sessionList[this.sessionIndex]}},watch:{sessionList:{deep:!0,handler:function(){i["default"].save({user:this.user,userList:this.userList,sessionList:this.sessionList})}}},components:{card:n["default"],list:c["default"],text:d["default"],message:f["default"]}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["user","search"]}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["userList","sessionIndex","session","search"],methods:{select:function(e){this.sessionIndex=this.userList.indexOf(e)}},filters:{search:function(e){var t=this;return e.filter(function(e){return e.name.indexOf(t.search)>-1})}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["session","user","userList"],computed:{sessionUser:function(){var e=this,t=this.userList.filter(function(t){return t.id===e.session.userId});return t[0]}},filters:{avatar:function(e){var t=e.self?this.user:this.sessionUser;return t&&t.img},time:function(e){return"string"==typeof e&&(e=new Date(e)),e.getHours()+":"+e.getMinutes()}},directives:{"scroll-bottom":function(){var e=this;Vue.nextTick(function(){e.el.scrollTop=e.el.scrollHeight-e.el.clientHeight})}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["session"],data:function(){return{text:""}},methods:{inputing:function(e){e.ctrlKey&&13===e.keyCode&&this.text.length&&(this.session.messages.push({text:this.text,date:new Date,self:!0}),this.text="")}}}},function(e,t,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(9),i=o(r),a="VUE-CHAT-v3";if(!localStorage.getItem(a)){var n=new Date,l={user:{id:1,name:"Coffce",img:"dist/images/1.jpg"},userList:[{id:2,name:"示例介绍",img:"dist/images/2.png"},{id:3,name:"webpack",img:"dist/images/3.jpg"}],sessionList:[{userId:2,messages:[{text:"Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge。简单演示了Vue的基础特性和webpack配置。",date:n},{text:"项目地址: https://github.com/coffcer/vue-chat",date:n}]},{userId:3,messages:[]}]};localStorage.setItem(a,(0,i["default"])(l))}t["default"]={fetch:function(){return JSON.parse(localStorage.getItem(a))},save:function(e){localStorage.setItem(a,(0,i["default"])(e))}}},function(e,t,s){e.exports={"default":s(10),__esModule:!0}},function(e,t,s){var o=s(11);e.exports=function(e){return(o.JSON&&o.JSON.stringify||JSON.stringify).apply(JSON,arguments)}},function(e,t){var s=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=s)},function(e,t,s){t=e.exports=s(1)(),t.push([e.id,".m-card{padding:9pt;border-bottom:1px solid #24272c}.m-card footer{margin-top:10px}.m-card .avatar,.m-card .name{vertical-align:middle}.m-card .avatar{border-radius:2px}.m-card .name{display:inline-block;margin:0 0 0 15px;font-size:1pc}.m-card .search{padding:0 10px;width:100%;font-size:9pt;color:#fff;height:30px;line-height:30px;border:1px solid #3a3a3a;border-radius:4px;outline:0;background-color:#26292e}",""])},function(e,t,s){t=e.exports=s(1)(),t.push([e.id,'.m-message{padding:10px 15px;overflow-y:scroll}.m-message li{margin-bottom:15px}.m-message .time{margin:7px 0;text-align:center}.m-message .time>span{display:inline-block;padding:0 18px;font-size:9pt;color:#fff;border-radius:2px;background-color:#dcdcdc}.m-message .avatar{float:left;margin:0 10px 0 0;border-radius:3px}.m-message .text{display:inline-block;position:relative;padding:0 10px;max-width:calc(100% - 40px);min-height:30px;line-height:2.5;font-size:9pt;text-align:left;word-break:break-all;background-color:#fafafa;border-radius:4px}.m-message .text:before{content:" ";position:absolute;top:9px;right:100%;border:6px solid transparent;border-right-color:#fafafa}.m-message .self{text-align:right}.m-message .self .avatar{float:right;margin:0 0 0 10px}.m-message .self .text{background-color:#b2e281}.m-message .self .text:before{right:inherit;left:100%;border-right-color:transparent;border-left-color:#b2e281}',"",{version:3,sources:["/../../../../../../vue-loader/lib/style-rewriter.js?id=_v-2fc6d09a&file=message.vue!/Users/scott/local/vue-project/vue-project/vue-chat/node_modules/less-loader/index.js!/Users/scott/local/vue-project/vue-project/vue-chat/node_modules/vue-loader/lib/selector.js?type=style&index=0!/Users/scott/local/vue-project/vue-project/vue-chat/src/components/message.vue.style"],names:[],mappings:"AAAA,WAAW,kBAAkB,iBAAiB,CAAC,cAAc,kBAAkB,CAAC,iBAAiB,aAAa,iBAAiB,CAAC,sBAAsB,qBAAqB,eAAe,cAAe,WAAW,kBAAkB,wBAAwB,CAAC,mBAAmB,WAAW,kBAAkB,iBAAiB,CAAC,iBAAiB,qBAAqB,kBAAkB,eAAe,4BAA4B,gBAAgB,gBAAgB,cAAe,gBAAgB,qBAAqB,yBAAyB,iBAAiB,CAAC,wBAAwB,YAAY,kBAAkB,QAAQ,WAAW,6BAA6B,0BAA0B,CAAC,iBAAiB,gBAAgB,CAAC,yBAAyB,YAAY,iBAAiB,CAAC,uBAAuB,wBAAwB,CAAC,8BAA8B,cAAc,UAAU,+BAA+B,yBAAyB,CAAC",file:"message.vue",sourcesContent:['.m-message{padding:10px 15px;overflow-y:scroll}.m-message li{margin-bottom:15px}.m-message .time{margin:7px 0;text-align:center}.m-message .time>span{display:inline-block;padding:0 18px;font-size:12px;color:#fff;border-radius:2px;background-color:#dcdcdc}.m-message .avatar{float:left;margin:0 10px 0 0;border-radius:3px}.m-message .text{display:inline-block;position:relative;padding:0 10px;max-width:calc(100% - 40px);min-height:30px;line-height:2.5;font-size:12px;text-align:left;word-break:break-all;background-color:#fafafa;border-radius:4px}.m-message .text:before{content:" ";position:absolute;top:9px;right:100%;border:6px solid transparent;border-right-color:#fafafa}.m-message .self{text-align:right}.m-message .self .avatar{float:right;margin:0 0 0 10px}.m-message .self .text{background-color:#b2e281}.m-message .self .text:before{right:inherit;left:100%;border-right-color:transparent;border-left-color:#b2e281}'],sourceRoot:"webpack://"}])},function(e,t,s){t=e.exports=s(1)(),t.push([e.id,".m-list li{padding:9pt 15px;border-bottom:1px solid #292c33;cursor:pointer;-webkit-transition:background-color .1s;transition:background-color .1s}.m-list li:hover{background-color:hsla(0,0%,100%,.03)}.m-list li.active{background-color:hsla(0,0%,100%,.1)}.m-list .avatar,.m-list .name{vertical-align:middle}.m-list .avatar{border-radius:2px}.m-list .name{display:inline-block;margin:0 0 0 15px}","",{version:3,sources:["/../../../../../../vue-loader/lib/style-rewriter.js?id=_v-43218c22&file=list.vue!/Users/scott/local/vue-project/vue-project/vue-chat/node_modules/less-loader/index.js!/Users/scott/local/vue-project/vue-project/vue-chat/node_modules/vue-loader/lib/selector.js?type=style&index=0!/Users/scott/local/vue-project/vue-project/vue-chat/src/components/list.vue.style"],names:[],mappings:"AAAA,WAAW,iBAAkB,gCAAgC,eAAe,wCAAA,+BAA+B,CAAC,iBAAiB,oCAAuC,CAAC,kBAAkB,mCAAsC,CAAC,8BAA8B,qBAAqB,CAAC,gBAAgB,iBAAiB,CAAC,cAAc,qBAAqB,iBAAiB,CAAC",file:"list.vue",sourcesContent:[".m-list li{padding:12px 15px;border-bottom:1px solid #292C33;cursor:pointer;transition:background-color .1s}.m-list li:hover{background-color:rgba(255,255,255,0.03)}.m-list li.active{background-color:rgba(255,255,255,0.1)}.m-list .avatar,.m-list .name{vertical-align:middle}.m-list .avatar{border-radius:2px}.m-list .name{display:inline-block;margin:0 0 0 15px}"],sourceRoot:"webpack://"}])},function(e,t,s){t=e.exports=s(1)(),t.push([e.id,"#chat{overflow:hidden;border-radius:3px}#chat .main,#chat .sidebar{height:100%}#chat .sidebar{float:left;width:200px;color:#f4f4f4;background-color:#2e3238}#chat .main{position:relative;overflow:hidden;background-color:#eee}#chat .m-text{position:absolute;width:100%;bottom:0;left:0}#chat .m-message{height:calc(100% - 10pc)}","",{version:3,sources:["/../../../../../../vue-loader/lib/style-rewriter.js?id=_v-5c93decd&file=app.vue!/Users/scott/local/vue-project/vue-project/vue-chat/node_modules/less-loader/index.js!/Users/scott/local/vue-project/vue-project/vue-chat/node_modules/vue-loader/lib/selector.js?type=style&index=0!/Users/scott/local/vue-project/vue-project/vue-chat/src/components/app.vue.style"],names:[],mappings:"AAAA,MAAM,gBAAgB,iBAAiB,CAAC,2BAA2B,WAAW,CAAC,eAAe,WAAW,YAAY,cAAc,wBAAwB,CAAC,YAAY,kBAAkB,gBAAgB,qBAAqB,CAAC,cAAc,kBAAkB,WAAW,SAAS,MAAM,CAAC,iBAAiB,wBAAyB,CAAC",file:"app.vue",sourcesContent:["#chat{overflow:hidden;border-radius:3px}#chat .sidebar,#chat .main{height:100%}#chat .sidebar{float:left;width:200px;color:#f4f4f4;background-color:#2e3238}#chat .main{position:relative;overflow:hidden;background-color:#eee}#chat .m-text{position:absolute;width:100%;bottom:0;left:0}#chat .m-message{height:calc(100% - 160px)}"],sourceRoot:"webpack://"}])},function(e,t,s){t=e.exports=s(1)(),t.push([e.id,".m-text{height:10pc;border-top:1px solid #ddd}.m-text textarea{padding:10px;height:100%;width:100%;border:none;outline:0;font-family:Micrsofot Yahei;resize:none}","",{version:3,sources:["/../../../../../../vue-loader/lib/style-rewriter.js?id=_v-91cb7d9e&file=text.vue!/Users/scott/local/vue-project/vue-project/vue-chat/node_modules/less-loader/index.js!/Users/scott/local/vue-project/vue-project/vue-chat/node_modules/vue-loader/lib/selector.js?type=style&index=0!/Users/scott/local/vue-project/vue-project/vue-chat/src/components/text.vue.style"],names:[],mappings:"AAAA,QAAQ,YAAa,yBAAyB,CAAC,iBAAiB,aAAa,YAAY,WAAW,YAAY,UAAa,4BAA8B,WAAW,CAAC",file:"text.vue",sourcesContent:['.m-text{height:160px;border-top:solid 1px #ddd}.m-text textarea{padding:10px;height:100%;width:100%;border:none;outline:none;font-family:"Micrsofot Yahei";resize:none}'],sourceRoot:"webpack://"}])},function(e,t,s){var o=s(12);"string"==typeof o&&(o=[[e.id,o,""]]);s(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,s){var o=s(13);"string"==typeof o&&(o=[[e.id,o,""]]);s(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,s){var o=s(14);"string"==typeof o&&(o=[[e.id,o,""]]);s(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,s){var o=s(15);"string"==typeof o&&(o=[[e.id,o,""]]);s(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,s){var o=s(16);"string"==typeof o&&(o=[[e.id,o,""]]);s(2)(o,{});o.locals&&(e.exports=o.locals)},function(e,t){e.exports=" <div> <div class=sidebar> <card :user=user :search.sync=search></card> <list :user-list=userList :session=session :session-index.sync=sessionIndex :search=search></list> </div> <div class=main> <message :session=session :user=user :user-list=userList></message> <text :session=session></text> </div> </div> "},function(e,t){e.exports=' <div class=m-card> <header> <img class=avatar width=40 height=40 :alt=user.name :src=user.img> <p class=name>{{user.name}}</p> </header> <footer> <input class=search type=text placeholder="search user..." v-model=search> </footer> </div> '},function(e,t){e.exports=' <div class=m-list> <ul> <li v-for="item in userList | search" :class="{ active: session.userId === item.id }" @click=select(item)> <img class=avatar width=30 height=30 :alt=item.name :src=item.img> <p class=name>{{item.name}}</p> </li> </ul> </div> '},function(e,t){e.exports=' <div class=m-message v-scroll-bottom=session.messages> <ul> <li v-for="item in session.messages"> <p class=time><span>{{item.date | time}}</span></p> <div class=main :class="{ self: item.self }"> <img class=avatar width=30 height=30 :src="item | avatar"/> <div class=text>{{item.text}}</div> </div> </li> </ul> </div> '},function(e,t){e.exports=' <div class=m-text> <textarea placeholder="按 Ctrl + Enter 发送" v-model=text @keyup=inputing></textarea> </div> '},function(e,t,s){var o,r;s(20),o=s(3),r=s(22),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options:e.exports).template=r)},function(e,t,s){var o,r;s(17),o=s(4),r=s(23),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options:e.exports).template=r)},function(e,t,s){var o,r;s(19),o=s(5),r=s(24),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options:e.exports).template=r)},function(e,t,s){var o,r;s(18),o=s(6),r=s(25),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options:e.exports).template=r)},function(e,t,s){var o,r;s(21),o=s(7),r=s(26),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options:e.exports).template=r)}]);
//# sourceMappingURL=main.js.map