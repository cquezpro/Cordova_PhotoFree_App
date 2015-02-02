(function(a){if(String.prototype.trim===a){String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}}if(Array.prototype.reduce===a){Array.prototype.reduce=function(c){if(this===void 0||this===null){throw new TypeError()}var f=Object(this),b=f.length>>>0,e=0,d;if(typeof c!="function"){throw new TypeError()}if(b==0&&arguments.length==1){throw new TypeError()}if(arguments.length>=2){d=arguments[1]}else{do{if(e in f){d=f[e++];break}if(++e>=b){throw new TypeError()}}while(true)}while(e<b){if(e in f){d=c.call(a,d,f[e],e,f)}e++}return d}}})();var Zepto=(function(){var i,o,z,a,F=[],k=F.slice,f=window.document,E={},G={},m=f.defaultView.getComputedStyle,N={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},s=/^\s*<(\w+|!)[^>]*>/,y=[1,3,8,9,11],t=["after","prepend","before","append"],p=f.createElement("table"),H=f.createElement("tr"),g={tr:f.createElement("tbody"),tbody:p,thead:p,tfoot:p,td:H,th:H,"*":f.createElement("div")},q=/complete|loaded|interactive/,B=/^\.([\w-]+)$/,r=/^#([\w-]+)$/,D=/^[\w-]+$/,e=({}).toString,c={},L,I,A=f.createElement("div");c.matches=function(T,P){if(!T||T.nodeType!==1){return false}var R=T.webkitMatchesSelector||T.mozMatchesSelector||T.oMatchesSelector||T.matchesSelector;if(R){return R.call(T,P)}var S,U=T.parentNode,Q=!U;if(Q){(U=A).appendChild(T)}S=~c.qsa(U,P).indexOf(T);Q&&A.removeChild(T);return S};function l(P){return e.call(P)=="[object Function]"}function C(P){return P instanceof Object}function O(R){var P,Q;if(e.call(R)!=="[object Object]"){return false}Q=(l(R.constructor)&&R.constructor.prototype);if(!Q||!hasOwnProperty.call(Q,"isPrototypeOf")){return false}for(P in R){}return P===i||hasOwnProperty.call(R,P)}function v(P){return P instanceof Array}function w(P){return typeof P.length=="number"}function M(P){return P.filter(function(Q){return Q!==i&&Q!==null})}function x(P){return P.length>0?[].concat.apply([],P):P}L=function(P){return P.replace(/-+(.)?/g,function(Q,R){return R?R.toUpperCase():""})};function j(P){return P.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}I=function(P){return P.filter(function(R,Q){return P.indexOf(R)==Q})};function J(P){return P in G?G[P]:(G[P]=new RegExp("(^|\\s)"+P+"(\\s|$)"))}function d(P,Q){return(typeof Q=="number"&&!N[j(P)])?Q+"px":Q}function K(R){var P,Q;if(!E[R]){P=f.createElement(R);f.body.appendChild(P);Q=m(P,"").getPropertyValue("display");P.parentNode.removeChild(P);Q=="none"&&(Q="block");E[R]=Q}return E[R]}c.fragment=function(R,Q){if(Q===i){Q=s.test(R)&&RegExp.$1}if(!(Q in g)){Q="*"}var P=g[Q];P.innerHTML=""+R;return z.each(k.call(P.childNodes),function(){P.removeChild(this)})};c.Z=function(Q,P){Q=Q||[];Q.__proto__=arguments.callee.prototype;Q.selector=P||"";return Q};c.isZ=function(P){return P instanceof c.Z};c.init=function(P,Q){if(!P){return c.Z()}else{if(l(P)){return z(f).ready(P)}else{if(c.isZ(P)){return P}else{var R;if(v(P)){R=M(P)}else{if(O(P)){R=[z.extend({},P)],P=null}else{if(y.indexOf(P.nodeType)>=0||P===window){R=[P],P=null}else{if(s.test(P)){R=c.fragment(P.trim(),RegExp.$1),P=null}else{if(Q!==i){return z(Q).find(P)}else{R=c.qsa(f,P)}}}}}return c.Z(R,P)}}}};z=function(P,Q){return c.init(P,Q)};z.extend=function(P){k.call(arguments,1).forEach(function(Q){for(o in Q){if(Q[o]!==i){P[o]=Q[o]}}});return P};c.qsa=function(Q,P){var R;return(Q===f&&r.test(P))?((R=Q.getElementById(RegExp.$1))?[R]:F):(Q.nodeType!==1&&Q.nodeType!==9)?F:k.call(B.test(P)?Q.getElementsByClassName(RegExp.$1):D.test(P)?Q.getElementsByTagName(P):Q.querySelectorAll(P))};function u(Q,P){return P===i?z(Q):z(Q).filter(P)}function n(R,Q,P,S){return l(Q)?Q.call(R,P,S):Q}z.isFunction=l;z.isObject=C;z.isArray=v;z.isPlainObject=O;z.inArray=function(Q,R,P){return F.indexOf.call(R,Q,P)};z.trim=function(P){return P.trim()};z.uuid=0;z.map=function(T,U){var S,P=[],R,Q;if(w(T)){for(R=0;R<T.length;R++){S=U(T[R],R);if(S!=null){P.push(S)}}}else{for(Q in T){S=U(T[Q],Q);if(S!=null){P.push(S)}}}return x(P)};z.each=function(R,S){var Q,P;if(w(R)){for(Q=0;Q<R.length;Q++){if(S.call(R[Q],Q,R[Q])===false){return R}}}else{for(P in R){if(S.call(R[P],P,R[P])===false){return R}}}return R};z.fn={forEach:F.forEach,reduce:F.reduce,push:F.push,indexOf:F.indexOf,concat:F.concat,map:function(P){return z.map(this,function(R,Q){return P.call(R,Q,R)})},slice:function(){return z(k.apply(this,arguments))},ready:function(P){if(q.test(f.readyState)){P(z)}else{f.addEventListener("DOMContentLoaded",function(){P(z)},false)}return this},get:function(P){return P===i?k.call(this):this[P]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){if(this.parentNode!=null){this.parentNode.removeChild(this)}})},each:function(P){this.forEach(function(R,Q){P.call(R,Q,R)});return this},filter:function(P){return z([].filter.call(this,function(Q){return c.matches(Q,P)}))},add:function(P,Q){return z(I(this.concat(z(P,Q))))},is:function(P){return this.length>0&&c.matches(this[0],P)},not:function(P){var Q=[];if(l(P)&&P.call!==i){this.each(function(S){if(!P.call(this,S)){Q.push(this)}})}else{var R=typeof P=="string"?this.filter(P):(w(P)&&l(P.item))?k.call(P):z(P);this.forEach(function(S){if(R.indexOf(S)<0){Q.push(S)}})}return z(Q)},eq:function(P){return P===-1?this.slice(P):this.slice(P,+P+1)},first:function(){var P=this[0];return P&&!C(P)?P:z(P)},last:function(){var P=this[this.length-1];return P&&!C(P)?P:z(P)},find:function(Q){var P;if(this.length==1){P=c.qsa(this[0],Q)}else{P=this.map(function(){return c.qsa(this,Q)})}return z(P)},closest:function(P,Q){var R=this[0];while(R&&!c.matches(R,P)){R=R!==Q&&R!==f&&R.parentNode}return z(R)},parents:function(P){var R=[],Q=this;while(Q.length>0){Q=z.map(Q,function(S){if((S=S.parentNode)&&S!==f&&R.indexOf(S)<0){R.push(S);return S}})}return u(R,P)},parent:function(P){return u(I(this.pluck("parentNode")),P)},children:function(P){return u(this.map(function(){return k.call(this.children)}),P)},siblings:function(P){return u(this.map(function(Q,R){return k.call(R.parentNode.children).filter(function(S){return S!==R})}),P)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(P){return this.map(function(){return this[P]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null);if(m(this,"").getPropertyValue("display")=="none"){this.style.display=K(this.nodeName)}})},replaceWith:function(P){return this.before(P).remove()},wrap:function(P){return this.each(function(){z(this).wrapAll(z(P)[0].cloneNode(false))})},wrapAll:function(P){if(this[0]){z(this[0]).before(P=z(P));P.append(this)}return this},unwrap:function(){this.parent().each(function(){z(this).replaceWith(z(this).children())});return this},clone:function(){return z(this.map(function(){return this.cloneNode(true)}))},hide:function(){return this.css("display","none")},toggle:function(P){return(P===i?this.css("display")=="none":P)?this.show():this.hide()},prev:function(){return z(this.pluck("previousElementSibling"))},next:function(){return z(this.pluck("nextElementSibling"))},html:function(P){return P===i?(this.length>0?this[0].innerHTML:null):this.each(function(Q){var R=this.innerHTML;z(this).empty().append(n(this,P,Q,R))})},text:function(P){return P===i?(this.length>0?this[0].textContent:null):this.each(function(){this.textContent=P})},attr:function(Q,R){var P;return(typeof Q=="string"&&R===i)?(this.length==0||this[0].nodeType!==1?i:(Q=="value"&&this[0].nodeName=="INPUT")?this.val():(!(P=this[0].getAttribute(Q))&&Q in this[0])?this[0][Q]:P):this.each(function(S){if(this.nodeType!==1){return}if(C(Q)){for(o in Q){this.setAttribute(o,Q[o])}}else{this.setAttribute(Q,n(this,R,S,this.getAttribute(Q)))}})},removeAttr:function(P){return this.each(function(){if(this.nodeType===1){this.removeAttribute(P)}})},prop:function(P,Q){return(Q===i)?(this[0]?this[0][P]:i):this.each(function(R){this[P]=n(this,Q,R,this[P])})},data:function(P,R){var Q=this.attr("data-"+j(P),R);return Q!==null?Q:i},val:function(P){return(P===i)?(this.length>0?this[0].value:i):this.each(function(Q){this.value=n(this,P,Q,this.value)})},offset:function(){if(this.length==0){return null}var P=this[0].getBoundingClientRect();return{left:P.left+window.pageXOffset,top:P.top+window.pageYOffset,width:P.width,height:P.height}},css:function(R,Q){if(Q===i&&typeof R=="string"){return(this.length==0?i:this[0].style[L(R)]||m(this[0],"").getPropertyValue(R))}var P="";for(o in R){if(typeof R[o]=="string"&&R[o]==""){this.each(function(){this.style.removeProperty(j(o))})}else{P+=j(o)+":"+d(o,R[o])+";"}}if(typeof R=="string"){if(Q==""){this.each(function(){this.style.removeProperty(j(R))})}else{P=j(R)+":"+d(R,Q)}}return this.each(function(){this.style.cssText+=";"+P})},index:function(P){return P?this.indexOf(z(P)[0]):this.parent().children().indexOf(this[0])},hasClass:function(P){if(this.length<1){return false}else{return J(P).test(this[0].className)}},addClass:function(P){return this.each(function(Q){a=[];var S=this.className,R=n(this,P,Q,S);R.split(/\s+/g).forEach(function(T){if(!z(this).hasClass(T)){a.push(T)}},this);a.length&&(this.className+=(S?" ":"")+a.join(" "))})},removeClass:function(P){return this.each(function(Q){if(P===i){return this.className=""}a=this.className;n(this,P,Q,a).split(/\s+/g).forEach(function(R){a=a.replace(J(R)," ")});this.className=a.trim()})},toggleClass:function(Q,P){return this.each(function(R){var S=n(this,Q,R,this.className);(P===i?!z(this).hasClass(S):P)?z(this).addClass(S):z(this).removeClass(S)})}};["width","height"].forEach(function(P){z.fn[P]=function(Q){var S,R=P.replace(/./,function(T){return T[0].toUpperCase()});if(Q===i){return this[0]==window?window["inner"+R]:this[0]==f?f.documentElement["offset"+R]:(S=this.offset())&&S[P]}else{return this.each(function(T){var U=z(this);U.css(P,n(this,Q,T,U[P]()))})}}});function h(P,S,R){var Q=(P%2)?S:S.parentNode;Q?Q.insertBefore(R,!P?S.nextSibling:P==1?Q.firstChild:P==2?S:null):z(R).remove()}function b(R,P){P(R);for(var Q in R.childNodes){b(R.childNodes[Q],P)}}t.forEach(function(Q,P){z.fn[Q]=function(){var R=z.map(arguments,function(V){return C(V)?V:c.fragment(V)});if(R.length<1){return this}var S=this.length,T=S>1,U=P<2;return this.each(function(V,Y){for(var W=0;W<R.length;W++){var X=R[U?R.length-W-1:W];b(X,function(Z){if(Z.nodeName!=null&&Z.nodeName.toUpperCase()==="SCRIPT"&&(!Z.type||Z.type==="text/javascript")){window["eval"].call(window,Z.innerHTML)}});if(T&&V<S-1){X=X.cloneNode(true)}h(P,Y,X)}})};z.fn[(P%2)?Q+"To":"insert"+(P?"Before":"After")]=function(R){z(R)[Q](this);return this}});c.Z.prototype=z.fn;c.camelize=L;c.uniq=I;z.zepto=c;return z})();window.Zepto=Zepto;"$" in window||(window.$=Zepto);(function(h){var o=h.zepto.qsa,b={},n=1,q={};q.click=q.mousedown=q.mouseup=q.mousemove="MouseEvents";function l(r){return r._zid||(r._zid=n++)}function c(s,u,t,r){u=e(u);if(u.ns){var v=k(u.ns)}return(b[l(s)]||[]).filter(function(w){return w&&(!u.e||w.e==u.e)&&(!u.ns||v.test(w.ns))&&(!t||l(w.fn)===l(t))&&(!r||w.sel==r)})}function e(r){var s=(""+r).split(".");return{e:s[0],ns:s.slice(1).sort().join(" ")}}function k(r){return new RegExp("(?:^| )"+r.replace(" "," .* ?")+"(?: |$)")}function m(r,t,s){if(h.isObject(r)){h.each(r,s)}else{r.split(/\s/).forEach(function(u){s(u,t)})}}function p(v,u,w,s,r,t){t=!!t;var y=l(v),x=(b[y]||(b[y]=[]));m(u,w,function(C,B){var A=r&&r(B,C),E=A||B;var D=function(G){var F=E.apply(v,[G].concat(G.data));if(F===false){G.preventDefault()}return F};var z=h.extend(e(C),{fn:B,proxy:D,sel:s,del:A,i:x.length});x.push(z);v.addEventListener(z.e,D,t)})}function g(t,s,u,r){var v=l(t);m(s||"",u,function(x,w){c(t,x,w,r).forEach(function(y){delete b[v][y.i];t.removeEventListener(y.e,y.proxy,false)})})}h.event={add:p,remove:g};h.proxy=function(t,s){if(h.isFunction(t)){var r=function(){return t.apply(s,arguments)};r._zid=l(t);return r}else{if(typeof s=="string"){return h.proxy(t[s],t)}else{throw new TypeError("expected function")}}};h.fn.bind=function(r,s){return this.each(function(){p(this,r,s)})};h.fn.unbind=function(r,s){return this.each(function(){g(this,r,s)})};h.fn.one=function(r,s){return this.each(function(u,t){p(this,r,s,null,function(w,v){return function(){var x=w.apply(t,arguments);g(t,v,w);return x}})})};var d=function(){return true},a=function(){return false},j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function i(s){var r=h.extend({originalEvent:s},s);h.each(j,function(u,t){r[u]=function(){this[t]=d;return s[u].apply(s,arguments)};r[t]=a});return r}function f(s){if(!("defaultPrevented" in s)){s.defaultPrevented=false;var r=s.preventDefault;s.preventDefault=function(){this.defaultPrevented=true;r.call(this)}}}h.fn.delegate=function(r,t,u){var s=false;if(t=="blur"||t=="focus"){if(h.iswebkit){t=t=="blur"?"focusout":t=="focus"?"focusin":t}else{s=true}}return this.each(function(w,v){p(v,t,u,r,function(x){return function(A){var y,z=h(A.target).closest(r,v).get(0);if(z){y=h.extend(i(A),{currentTarget:z,liveFired:v});return x.apply(z,[y].concat([].slice.call(arguments,1)))}}},s)})};h.fn.undelegate=function(r,s,t){return this.each(function(){g(this,s,t,r)})};h.fn.live=function(r,s){h(document.body).delegate(this.selector,r,s);return this};h.fn.die=function(r,s){h(document.body).undelegate(this.selector,r,s);return this};h.fn.on=function(s,r,t){return r==undefined||h.isFunction(r)?this.bind(s,r):this.delegate(r,s,t)};h.fn.off=function(s,r,t){return r==undefined||h.isFunction(r)?this.unbind(s,r):this.undelegate(r,s,t)};h.fn.trigger=function(r,s){if(typeof r=="string"){r=h.Event(r)}f(r);r.data=s;return this.each(function(){if("dispatchEvent" in this){this.dispatchEvent(r)}})};h.fn.triggerHandler=function(s,t){var u,r;this.each(function(w,v){u=i(typeof s=="string"?h.Event(s):s);u.data=t;u.target=v;h.each(c(v,s.type||s),function(x,y){r=y.proxy(u);if(u.isImmediatePropagationStopped()){return false}})});return r};("focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error").split(" ").forEach(function(r){h.fn[r]=function(s){return this.bind(r,s)}});["focus","blur"].forEach(function(r){h.fn[r]=function(t){if(t){this.bind(r,t)}else{if(this.length){try{this.get(0)[r]()}catch(s){}}}return this}});h.Event=function(u,t){var v=document.createEvent(q[u]||"Events"),r=true;if(t){for(var s in t){(s=="bubbles")?(r=!!t[s]):(v[s]=t[s])}}v.initEvent(u,r,true,null,null,null,null,null,null,null,null,null,null,null,null);return v}})(Zepto);(function(b){function a(c){var f=this.os={},g=this.browser={},l=c.match(/WebKit\/([\d.]+)/),e=c.match(/(Android)\s+([\d.]+)/),m=c.match(/(iPad).*OS\s([\d_]+)/),k=!m&&c.match(/(iPhone\sOS)\s([\d_]+)/),n=c.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),j=n&&c.match(/TouchPad/),i=c.match(/Kindle\/([\d.]+)/),h=c.match(/Silk\/([\d._]+)/),d=c.match(/(BlackBerry).*Version\/([\d.]+)/);if(g.webkit=!!l){g.version=l[1]}if(e){f.android=true,f.version=e[2]}if(k){f.ios=f.iphone=true,f.version=k[2].replace(/_/g,".")}if(m){f.ios=f.ipad=true,f.version=m[2].replace(/_/g,".")}if(n){f.webos=true,f.version=n[2]}if(j){f.touchpad=true}if(d){f.blackberry=true,f.version=d[2]}if(i){f.kindle=true,f.version=i[1]}if(h){g.silk=true,g.version=h[1]}if(!h&&f.android&&c.match(/Kindle Fire/)){g.silk=true}}a.call(b,navigator.userAgent);b.__detect=a})(Zepto);(function(e,c){var g="",k,b,i,m={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},j=window.document,d=j.createElement("div"),l=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,h={};function a(n){return n.toLowerCase()}function f(n){return k?k+n:a(n)}e.each(m,function(o,n){if(d.style[o+"TransitionProperty"]!==c){g="-"+a(o)+"-";k=n;return false}});h[g+"transition-property"]=h[g+"transition-duration"]=h[g+"transition-timing-function"]=h[g+"animation-name"]=h[g+"animation-duration"]="";e.fx={off:(k===c&&d.style.transitionProperty===c),cssPrefix:g,transitionEnd:f("TransitionEnd"),animationEnd:f("AnimationEnd")};e.fn.animate=function(n,o,p,q){if(e.isObject(o)){p=o.easing,q=o.complete,o=o.duration}if(o){o=o/1000}return this.anim(n,o,p,q)};e.fn.anim=function(s,p,o,u){var r,w={},t,q=this,n,v=e.fx.transitionEnd;if(p===c){p=0.4}if(e.fx.off){p=0}if(typeof s=="string"){w[g+"animation-name"]=s;w[g+"animation-duration"]=p+"s";v=e.fx.animationEnd}else{for(t in s){if(l.test(t)){r||(r=[]);r.push(t+"("+s[t]+")")}else{w[t]=s[t]}}if(r){w[g+"transform"]=r.join(" ")}if(!e.fx.off&&typeof s==="object"){w[g+"transition-property"]=Object.keys(s).join(", ");w[g+"transition-duration"]=p+"s";w[g+"transition-timing-function"]=(o||"linear")}}n=function(x){if(typeof x!=="undefined"){if(x.target!==x.currentTarget){return}e(x.target).unbind(v,arguments.callee)}e(this).css(h);u&&u.call(this)};if(p>0){this.bind(v,n)}setTimeout(function(){q.css(w);if(p<=0){setTimeout(function(){q.each(function(){n.call(this)})},0)}},0);return this};d=null})(Zepto);(function($){var jsonpID=0,isObject=$.isObject,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;function triggerAndReturn(context,eventName,data){var event=$.Event(eventName);$(context).trigger(event,data);return !event.defaultPrevented}function triggerGlobal(settings,context,eventName,data){if(settings.global){return triggerAndReturn(context||document,eventName,data)}}$.active=0;function ajaxStart(settings){if(settings.global&&$.active++===0){triggerGlobal(settings,null,"ajaxStart")}}function ajaxStop(settings){if(settings.global&&!(--$.active)){triggerGlobal(settings,null,"ajaxStop")}}function ajaxBeforeSend(xhr,settings){var context=settings.context;if(settings.beforeSend.call(context,xhr,settings)===false||triggerGlobal(settings,context,"ajaxBeforeSend",[xhr,settings])===false){return false}triggerGlobal(settings,context,"ajaxSend",[xhr,settings])}function ajaxSuccess(data,xhr,settings){var context=settings.context,status="success";settings.success.call(context,data,status,xhr);triggerGlobal(settings,context,"ajaxSuccess",[xhr,settings,data]);ajaxComplete(status,xhr,settings)}function ajaxError(error,type,xhr,settings){var context=settings.context;settings.error.call(context,xhr,type,error);triggerGlobal(settings,context,"ajaxError",[xhr,settings,error]);ajaxComplete(type,xhr,settings)}function ajaxComplete(status,xhr,settings){var context=settings.context;settings.complete.call(context,xhr,status);triggerGlobal(settings,context,"ajaxComplete",[xhr,settings]);ajaxStop(settings)}function empty(){}$.ajaxJSONP=function(options){var callbackName="jsonp"+(++jsonpID),script=document.createElement("script"),abort=function(){$(script).remove();if(callbackName in window){window[callbackName]=empty}ajaxComplete("abort",xhr,options)},xhr={abort:abort},abortTimeout;if(options.error){script.onerror=function(){xhr.abort();options.error()}}window[callbackName]=function(data){clearTimeout(abortTimeout);$(script).remove();delete window[callbackName];ajaxSuccess(data,xhr,options)};serializeData(options);script.src=options.url.replace(/=\?/,"="+callbackName);$("head").append(script);if(options.timeout>0){abortTimeout=setTimeout(function(){xhr.abort();ajaxComplete("timeout",xhr,options)},options.timeout)}return xhr};$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:true,xhr:function(){return new window.XMLHttpRequest()},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:false,timeout:0};function mimeToDataType(mime){return mime&&(mime==htmlType?"html":mime==jsonType?"json":scriptTypeRE.test(mime)?"script":xmlTypeRE.test(mime)&&"xml")||"text"}function appendQuery(url,query){return(url+"&"+query).replace(/[&?]{1,2}/,"?")}function serializeData(options){if(isObject(options.data)){options.data=$.param(options.data)}if(options.data&&(!options.type||options.type.toUpperCase()=="GET")){options.url=appendQuery(options.url,options.data)}}$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings){if(settings[key]===undefined){settings[key]=$.ajaxSettings[key]}}ajaxStart(settings);if(!settings.crossDomain){settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host}var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder){if(!hasPlaceholder){settings.url=appendQuery(settings.url,"callback=?")}return $.ajaxJSONP(settings)}if(!settings.url){settings.url=window.location.toString()}serializeData(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=$.ajaxSettings.xhr(),abortTimeout;if(!settings.crossDomain){baseHeaders["X-Requested-With"]="XMLHttpRequest"}if(mime){baseHeaders.Accept=mime;if(mime.indexOf(",")>-1){mime=mime.split(",",2)[0]}xhr.overrideMimeType&&xhr.overrideMimeType(mime)}if(settings.contentType||(settings.data&&settings.type.toUpperCase()!="GET")){baseHeaders["Content-Type"]=(settings.contentType||"application/x-www-form-urlencoded")}settings.headers=$.extend(baseHeaders,settings.headers||{});xhr.onreadystatechange=function(){if(xhr.readyState==4){clearTimeout(abortTimeout);var result,error=false;if((xhr.status>=200&&xhr.status<300)||xhr.status==304||(xhr.status==0&&protocol=="file:")){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type"));result=xhr.responseText;try{if(dataType=="script"){(1,eval)(result)}else{if(dataType=="xml"){result=xhr.responseXML}else{if(dataType=="json"){result=blankRE.test(result)?null:JSON.parse(result)}}}}catch(e){error=e}if(error){ajaxError(error,"parsererror",xhr,settings)}else{ajaxSuccess(result,xhr,settings)}}else{ajaxError(null,"error",xhr,settings)}}};var async="async" in settings?settings.async:true;xhr.open(settings.type,settings.url,async);for(name in settings.headers){xhr.setRequestHeader(name,settings.headers[name])}if(ajaxBeforeSend(xhr,settings)===false){xhr.abort();return false}if(settings.timeout>0){abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty;xhr.abort();ajaxError(null,"timeout",xhr,settings)},settings.timeout)}xhr.send(settings.data?settings.data:null);return xhr};$.get=function(url,success){return $.ajax({url:url,success:success})};$.post=function(url,data,success,dataType){if($.isFunction(data)){dataType=dataType||success,success=data,data=null}return $.ajax({type:"POST",url:url,data:data,success:success,dataType:dataType})};$.getJSON=function(url,success){return $.ajax({url:url,success:success,dataType:"json"})};$.fn.load=function(url,success){if(!this.length){return this}var self=this,parts=url.split(/\s/),selector;if(parts.length>1){url=parts[0],selector=parts[1]}$.get(url,function(response){self.html(selector?$(document.createElement("div")).html(response.replace(rscript,"")).find(selector).html():response);success&&success.call(self)});return this};var escape=encodeURIComponent;function serialize(params,obj,traditional,scope){var array=$.isArray(obj);$.each(obj,function(key,value){if(scope){key=traditional?scope:scope+"["+(array?"":key)+"]"}if(!scope&&array){params.add(value.name,value.value)}else{if(traditional?$.isArray(value):isObject(value)){serialize(params,value,traditional,key)}else{params.add(key,value)}}})}$.param=function(obj,traditional){var params=[];params.add=function(k,v){this.push(escape(k)+"="+escape(v))};serialize(params,obj,traditional);return params.join("&").replace("%20","+")}})(Zepto);(function(a){a.fn.serializeArray=function(){var b=[],c;a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");if(this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&((d!="radio"&&d!="checkbox")||this.checked)){b.push({name:c.attr("name"),value:c.val()})}});return b};a.fn.serialize=function(){var b=[];this.serializeArray().forEach(function(c){b.push(encodeURIComponent(c.name)+"="+encodeURIComponent(c.value))});return b.join("&")};a.fn.submit=function(c){if(c){this.bind("submit",c)}else{if(this.length){var b=a.Event("submit");this.eq(0).trigger(b);if(!b.defaultPrevented){this.get(0).submit()}}}return this}})(Zepto);(function(g){var f={},b;function c(j){return"tagName" in j?j:j.parentNode}function h(k,j,m,l){var o=Math.abs(k-j),n=Math.abs(m-l);return((o>n)&&(n<30))?(k-j>0?"Left":"Right"):(m-l>0?"Up":"Down")}var e=750,a;function i(){a=null;if(f.last){f.el.trigger("longTap");f={}}}function d(){if(a){clearTimeout(a)}a=null}g(document).ready(function(){var j,k;g(document.body).bind("touchstart",function(l){j=Date.now();k=j-(f.last||j);f.el=g(c(l.touches[0].target));b&&clearTimeout(b);f.x1=l.touches[0].clientX;f.y1=l.touches[0].clientY;if(k>0&&k<=250){f.isDoubleTap=true}f.last=j;a=setTimeout(i,e)}).bind("touchmove",function(l){d();f.x2=l.touches[0].clientX;f.y2=l.touches[0].clientY}).bind("touchend",function(l){d();if(f.isDoubleTap){f.el.trigger("doubleTap");f={}}else{if((f.x2&&Math.abs(f.x1-f.x2)>30)||(f.y2&&Math.abs(f.y1-f.y2)>30)){f.el.trigger("swipe")&&f.el.trigger("swipe"+(h(f.x1,f.x2,f.y1,f.y2)));f={}}else{if("last" in f){f.el.trigger("tap");b=setTimeout(function(){b=null;f.el.trigger("singleTap");f={}},250)}}}}).bind("touchcancel",function(){if(b){clearTimeout(b)}if(a){clearTimeout(a)}a=b=null;f={}})});["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(j){g.fn[j]=function(k){return this.bind(j,k)}})})(Zepto);;
(function(e){if(e.os==null){e.os={}}e.os.touch=!(typeof window.ontouchstart==="undefined");var h=1000;var g=function(j){var l,i,k;if(typeof j[0]==="function"){l=j[0];k=j[1]}else{i=j[0];l=j[1];k=j[2]}return[i,l,k]};if(e.os.touch){var a=[],c={},f=e(document);var b=function(){a.splice(0,2)};var d=function(m){for(var k=0,j=a.length;k<j;k+=2){if(Math.abs(m.pageX-a[k])<25&&Math.abs(m.pageY-a[k+1])<25){m.stopPropagation();m.preventDefault()}}};f.on("click",d);e.fn.onpress=function(){if(!arguments.length||!this.length||!this[0].nodeType||(this[0].nodeType!==1&&this[0].nodeType!==11)){return}var n=[],l=this;var i=g(arguments);var m=function(q){if(i[2]){q.stopPropagation()}var p=q.touches?q.touches[0]:q;n[0]=p.pageX;n[1]=p.pageY;f.on("touchmove.onpress",j);i[0]?l.on("touchend.onpress",i[0],k):l.on("touchend.onpress",k)};var j=function(p){if(Math.abs(p.touches[0].pageX-n[0])>10||Math.abs(p.touches[0].pageY-n[1])>10){o()}};var k=function(p){o();i[1].call(this,p);if(p.type==="touchend"){a.push(n[0],n[1]);window.setTimeout(b,h)}};var o=function(){f.off("touchmove.onpress",j);i[0]?l.off("touchend.onpress",i[0],k):l.off("touchend.onpress",k)};c[i[1]]=m;if(i[0]){this.on("touchstart.onpress",i[0],m);this.on("press.onpress",i[0],i[1])}else{this.on("touchstart.onpress",m);this.on("press.onpress",i[1])}};e.fn.offpress=function(){var i=g(arguments);if(i[1]){if(i[0]){this.off("touchstart.onpress",i[0],c[i[1]]);this.off("press.onpress",i[0],i[1])}else{this.off("touchstart.onpress",c[i[1]]);this.off("press.onpress",i[1])}delete c[i[1]]}else{if(i[0]){this.off("touchstart.onpress",i[0]);this.off("press.onpress",i[0])}else{this.off("touchstart.onpress");this.off("press.onpress")}}}}else{e.fn.onpress=function(){var i=g(arguments);if(i[0]){this.on("click.onpress",i[0],i[1]);this.on("press.onpress",i[0],i[1])}else{this.on("click.onpress",i[1]);this.on("press.onpress",i[1])}};e.fn.offpress=function(){var i=g(arguments);i[0]?this.off(".onpress",i[0],i[1]):this.off(".onpress",i[1])}}})(window.Zepto||window.jQuery);;
/*!
 * iScroll v4.1.9 ~ Copyright (c) 2011 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function(){
var m = Math,
	mround = function (r) { return r >> 0; },
	vendor = (/webkit/i).test(navigator.appVersion) ? 'webkit' :
		(/firefox/i).test(navigator.userAgent) ? 'Moz' :
		(/trident/i).test(navigator.userAgent) ? 'ms' :
		'opera' in window ? 'O' : '',

    // Browser capabilities
    isAndroid = (/android/gi).test(navigator.appVersion),
    isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
    isPlaybook = (/playbook/gi).test(navigator.appVersion),
    isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),

    has3d = 'WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix(),
    hasTouch = 'ontouchstart' in window && !isTouchPad,
    hasTransform = vendor + 'Transform' in document.documentElement.style,
    hasTransitionEnd = isIDevice || isPlaybook,

	nextFrame = (function() {
	    return window.requestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.mozRequestAnimationFrame
			|| window.oRequestAnimationFrame
			|| window.msRequestAnimationFrame
			|| function(callback) { return setTimeout(callback, 1); };
	})(),
	cancelFrame = (function () {
	    return window.cancelRequestAnimationFrame
			|| window.webkitCancelAnimationFrame
			|| window.webkitCancelRequestAnimationFrame
			|| window.mozCancelRequestAnimationFrame
			|| window.oCancelRequestAnimationFrame
			|| window.msCancelRequestAnimationFrame
			|| clearTimeout;
	})(),

	// Events
	RESIZE_EV = 'onorientationchange' in window ? 'orientationchange' : 'resize',
	START_EV = hasTouch ? 'touchstart' : 'mousedown',
	MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
	END_EV = hasTouch ? 'touchend' : 'mouseup',
	CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
	WHEEL_EV = vendor == 'Moz' ? 'DOMMouseScroll' : 'mousewheel',

	// Helpers
	trnOpen = 'translate' + (has3d ? '3d(' : '('),
	trnClose = has3d ? ',0)' : ')',

	// Constructor
	iScroll = function (el, options) {
		var that = this,
			doc = document,
			i;

		that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
		that.wrapper.style.overflow = 'hidden';
		that.scroller = that.wrapper.children[0];

		// Default options
		that.options = {
			hScroll: true,
			vScroll: true,
			x: 0,
			y: 0,
			bounce: true,
			bounceLock: false,
			momentum: true,
			lockDirection: true,
			useTransform: true,
			useTransition: false,
			topOffset: 0,
			checkDOMChanges: false,		// Experimental

			// Scrollbar
			hScrollbar: true,
			vScrollbar: true,
			fixedScrollbar: isAndroid,
			hideScrollbar: isIDevice,
			fadeScrollbar: isIDevice && has3d,
			scrollbarClass: '',

			// Zoom
			zoom: false,
			zoomMin: 1,
			zoomMax: 4,
			doubleTapZoom: 2,
			wheelAction: 'scroll',

			// Snap
			snap: false,
			snapThreshold: 1,

			// Events
			onRefresh: null,
			onBeforeScrollStart: function (e) { e.preventDefault(); },
			onScrollStart: null,
			onBeforeScrollMove: null,
			onScrollMove: null,
			onBeforeScrollEnd: null,
			onScrollEnd: null,
			onTouchEnd: null,
			onDestroy: null,
			onZoomStart: null,
			onZoom: null,
			onZoomEnd: null
		};

		// User defined options
		for (i in options) that.options[i] = options[i];
		
		// Set starting position
		that.x = that.options.x;
		that.y = that.options.y;

		// Normalize options
		that.options.useTransform = hasTransform ? that.options.useTransform : false;
		that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
		that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
		that.options.zoom = that.options.useTransform && that.options.zoom;
		that.options.useTransition = hasTransitionEnd && that.options.useTransition;

		// Helpers FIX ANDROID BUG!
		// translate3d and scale doesn't work together! 
		// Ignoring 3d ONLY WHEN YOU SET that.options.zoom
		if ( that.options.zoom && isAndroid ){
			trnOpen = 'translate(';
			trnClose = ')';
		}
		
		// Set some default styles
		that.scroller.style[vendor + 'TransitionProperty'] = that.options.useTransform ? '-' + vendor.toLowerCase() + '-transform' : 'top left';
		that.scroller.style[vendor + 'TransitionDuration'] = '0';
		that.scroller.style[vendor + 'TransformOrigin'] = '0 0';
		if (that.options.useTransition) that.scroller.style[vendor + 'TransitionTimingFunction'] = 'cubic-bezier(0.33,0.66,0.66,1)';
		
		if (that.options.useTransform) that.scroller.style[vendor + 'Transform'] = trnOpen + that.x + 'px,' + that.y + 'px' + trnClose;
		else that.scroller.style.cssText += ';position:absolute;top:' + that.y + 'px;left:' + that.x + 'px';

		if (that.options.useTransition) that.options.fixedScrollbar = true;

		that.refresh();

		that._bind(RESIZE_EV, window);
		that._bind(START_EV);
		if (!hasTouch) {
			that._bind('mouseout', that.wrapper);
			if (that.options.wheelAction != 'none')
				that._bind(WHEEL_EV);
		}

		if (that.options.checkDOMChanges) that.checkDOMTime = setInterval(function () {
			that._checkDOMChanges();
		}, 500);
	};

// Prototype
iScroll.prototype = {
	enabled: true,
	x: 0,
	y: 0,
	steps: [],
	scale: 1,
	currPageX: 0, currPageY: 0,
	pagesX: [], pagesY: [],
	aniTime: null,
	wheelZoomCount: 0,
	
	handleEvent: function (e) {
		var that = this;
		switch(e.type) {
			case START_EV:
				if (!hasTouch && e.button !== 0) return;
				that._start(e);
				break;
			case MOVE_EV: that._move(e); break;
			case END_EV:
			case CANCEL_EV: that._end(e); break;
			case RESIZE_EV: that._resize(); break;
			case WHEEL_EV: that._wheel(e); break;
			case 'mouseout': that._mouseout(e); break;
			case 'webkitTransitionEnd': that._transitionEnd(e); break;
		}
	},
	
	_checkDOMChanges: function () {
		if (this.moved || this.zoomed || this.animating ||
			(this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale)) return;

		this.refresh();
	},
	
	_scrollbar: function (dir) {
		var that = this,
			doc = document,
			bar;

		if (!that[dir + 'Scrollbar']) {
			if (that[dir + 'ScrollbarWrapper']) {
				if (hasTransform) that[dir + 'ScrollbarIndicator'].style[vendor + 'Transform'] = '';
				that[dir + 'ScrollbarWrapper'].parentNode.removeChild(that[dir + 'ScrollbarWrapper']);
				that[dir + 'ScrollbarWrapper'] = null;
				that[dir + 'ScrollbarIndicator'] = null;
			}

			return;
		}

		if (!that[dir + 'ScrollbarWrapper']) {
			// Create the scrollbar wrapper
			bar = doc.createElement('div');

			if (that.options.scrollbarClass) bar.className = that.options.scrollbarClass + dir.toUpperCase();
			else bar.style.cssText = 'position:absolute;z-index:100;' + (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:' + (that.vScrollbar ? '7' : '2') + 'px' : 'width:7px;bottom:' + (that.hScrollbar ? '7' : '2') + 'px;top:2px;right:1px');

			bar.style.cssText += ';pointer-events:none;-' + vendor + '-transition-property:opacity;-' + vendor + '-transition-duration:' + (that.options.fadeScrollbar ? '350ms' : '0') + ';overflow:hidden;opacity:' + (that.options.hideScrollbar ? '0' : '1');

			that.wrapper.appendChild(bar);
			that[dir + 'ScrollbarWrapper'] = bar;

			// Create the scrollbar indicator
			bar = doc.createElement('div');
			if (!that.options.scrollbarClass) {
				bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-' + vendor + '-background-clip:padding-box;-' + vendor + '-box-sizing:border-box;' + (dir == 'h' ? 'height:100%' : 'width:100%') + ';-' + vendor + '-border-radius:3px;border-radius:3px';
			}
			bar.style.cssText += ';pointer-events:none;-' + vendor + '-transition-property:-' + vendor + '-transform;-' + vendor + '-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-' + vendor + '-transition-duration:0;-' + vendor + '-transform:' + trnOpen + '0,0' + trnClose;
			if (that.options.useTransition) bar.style.cssText += ';-' + vendor + '-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';

			that[dir + 'ScrollbarWrapper'].appendChild(bar);
			that[dir + 'ScrollbarIndicator'] = bar;
		}

		if (dir == 'h') {
			that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
			that.hScrollbarIndicatorSize = m.max(mround(that.hScrollbarSize * that.hScrollbarSize / that.scrollerW), 8);
			that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize + 'px';
			that.hScrollbarMaxScroll = that.hScrollbarSize - that.hScrollbarIndicatorSize;
			that.hScrollbarProp = that.hScrollbarMaxScroll / that.maxScrollX;
		} else {
			that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
			that.vScrollbarIndicatorSize = m.max(mround(that.vScrollbarSize * that.vScrollbarSize / that.scrollerH), 8);
			that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize + 'px';
			that.vScrollbarMaxScroll = that.vScrollbarSize - that.vScrollbarIndicatorSize;
			that.vScrollbarProp = that.vScrollbarMaxScroll / that.maxScrollY;
		}

		// Reset position
		that._scrollbarPos(dir, true);
	},
	
	_resize: function () {
		var that = this;
		setTimeout(function () { that.refresh(); }, isAndroid ? 200 : 0);
	},
	
	_pos: function (x, y) {
		x = this.hScroll ? x : 0;
		y = this.vScroll ? y : 0;

		if (this.options.useTransform) {
			this.scroller.style[vendor + 'Transform'] = trnOpen + x + 'px,' + y + 'px' + trnClose + ' scale(' + this.scale + ')';
		} else {
			x = mround(x);
			y = mround(y);
			this.scroller.style.left = x + 'px';
			this.scroller.style.top = y + 'px';
		}

		this.x = x;
		this.y = y;

		this._scrollbarPos('h');
		this._scrollbarPos('v');
	},

	_scrollbarPos: function (dir, hidden) {
		var that = this,
			pos = dir == 'h' ? that.x : that.y,
			size;

		if (!that[dir + 'Scrollbar']) return;

		pos = that[dir + 'ScrollbarProp'] * pos;

		if (pos < 0) {
			if (!that.options.fixedScrollbar) {
				size = that[dir + 'ScrollbarIndicatorSize'] + mround(pos * 3);
				if (size < 8) size = 8;
				that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
			}
			pos = 0;
		} else if (pos > that[dir + 'ScrollbarMaxScroll']) {
			if (!that.options.fixedScrollbar) {
				size = that[dir + 'ScrollbarIndicatorSize'] - mround((pos - that[dir + 'ScrollbarMaxScroll']) * 3);
				if (size < 8) size = 8;
				that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
				pos = that[dir + 'ScrollbarMaxScroll'] + (that[dir + 'ScrollbarIndicatorSize'] - size);
			} else {
				pos = that[dir + 'ScrollbarMaxScroll'];
			}
		}

		that[dir + 'ScrollbarWrapper'].style[vendor + 'TransitionDelay'] = '0';
		that[dir + 'ScrollbarWrapper'].style.opacity = hidden && that.options.hideScrollbar ? '0' : '1';
		that[dir + 'ScrollbarIndicator'].style[vendor + 'Transform'] = trnOpen + (dir == 'h' ? pos + 'px,0' : '0,' + pos + 'px') + trnClose;
	},
	
	_start: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			matrix, x, y,
			c1, c2;

		if (!that.enabled) return;

		if (that.options.onBeforeScrollStart) that.options.onBeforeScrollStart.call(that, e);

		if (that.options.useTransition || that.options.zoom) that._transitionTime(0);

		that.moved = false;
		that.animating = false;
		that.zoomed = false;
		that.distX = 0;
		that.distY = 0;
		that.absDistX = 0;
		that.absDistY = 0;
		that.dirX = 0;
		that.dirY = 0;

		// Gesture start
		if (that.options.zoom && hasTouch && e.touches.length > 1) {
			c1 = m.abs(e.touches[0].pageX-e.touches[1].pageX);
			c2 = m.abs(e.touches[0].pageY-e.touches[1].pageY);
			that.touchesDistStart = m.sqrt(c1 * c1 + c2 * c2);

			that.originX = m.abs(e.touches[0].pageX + e.touches[1].pageX - that.wrapperOffsetLeft * 2) / 2 - that.x;
			that.originY = m.abs(e.touches[0].pageY + e.touches[1].pageY - that.wrapperOffsetTop * 2) / 2 - that.y;

			if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
		}

		if (that.options.momentum) {
			if (that.options.useTransform) {
				// Very lame general purpose alternative to CSSMatrix
				matrix = getComputedStyle(that.scroller, null)[vendor + 'Transform'].replace(/[^0-9-.,]/g, '').split(',');
				x = matrix[4] * 1;
				y = matrix[5] * 1;
			} else {
				x = getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '') * 1;
				y = getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '') * 1;
			}
			
			if (x != that.x || y != that.y) {
				if (that.options.useTransition) that._unbind('webkitTransitionEnd');
				else cancelFrame(that.aniTime);
				that.steps = [];
				that._pos(x, y);
			}
		}

		that.absStartX = that.x;	// Needed by snap threshold
		that.absStartY = that.y;

		that.startX = that.x;
		that.startY = that.y;
		that.pointX = point.pageX;
		that.pointY = point.pageY;

		that.startTime = e.timeStamp || Date.now();

		if (that.options.onScrollStart) that.options.onScrollStart.call(that, e);

		that._bind(MOVE_EV);
		that._bind(END_EV);
		that._bind(CANCEL_EV);
	},
	
	_move: function (e) {
		var that = this,
			point = hasTouch ? e.touches[0] : e,
			deltaX = point.pageX - that.pointX,
			deltaY = point.pageY - that.pointY,
			newX = that.x + deltaX,
			newY = that.y + deltaY,
			c1, c2, scale,
			timestamp = e.timeStamp || Date.now();

		if (that.options.onBeforeScrollMove) that.options.onBeforeScrollMove.call(that, e);

		// Zoom
		if (that.options.zoom && hasTouch && e.touches.length > 1) {
			c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
			c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
			that.touchesDist = m.sqrt(c1*c1+c2*c2);

			that.zoomed = true;

			scale = 1 / that.touchesDistStart * that.touchesDist * this.scale;

			if (scale < that.options.zoomMin) scale = 0.5 * that.options.zoomMin * Math.pow(2.0, scale / that.options.zoomMin);
			else if (scale > that.options.zoomMax) scale = 2.0 * that.options.zoomMax * Math.pow(0.5, that.options.zoomMax / scale);

			that.lastScale = scale / this.scale;

			newX = this.originX - this.originX * that.lastScale + this.x,
			newY = this.originY - this.originY * that.lastScale + this.y;

			this.scroller.style[vendor + 'Transform'] = trnOpen + newX + 'px,' + newY + 'px' + trnClose + ' scale(' + scale + ')';

			if (that.options.onZoom) that.options.onZoom.call(that, e);
			return;
		}

		that.pointX = point.pageX;
		that.pointY = point.pageY;

		// Slow down if outside of the boundaries
		if (newX > 0 || newX < that.maxScrollX) {
			newX = that.options.bounce ? that.x + (deltaX / 2) : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
		}
		if (newY > that.minScrollY || newY < that.maxScrollY) { 
			newY = that.options.bounce ? that.y + (deltaY / 2) : newY >= that.minScrollY || that.maxScrollY >= 0 ? that.minScrollY : that.maxScrollY;
		}

		that.distX += deltaX;
		that.distY += deltaY;
		that.absDistX = m.abs(that.distX);
		that.absDistY = m.abs(that.distY);

		if (that.absDistX < 6 && that.absDistY < 6) {
			return;
		}

		// Lock direction
		if (that.options.lockDirection) {
			if (that.absDistX > that.absDistY + 5) {
				newY = that.y;
				deltaY = 0;
			} else if (that.absDistY > that.absDistX + 5) {
				newX = that.x;
				deltaX = 0;
			}
		}

		that.moved = true;
		that._pos(newX, newY);
		that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if (timestamp - that.startTime > 300) {
			that.startTime = timestamp;
			that.startX = that.x;
			that.startY = that.y;
		}
		
		if (that.options.onScrollMove) that.options.onScrollMove.call(that, e);
	},
	
	_end: function (e) {
		if (hasTouch && e.touches.length != 0) return;

		var that = this,
			point = hasTouch ? e.changedTouches[0] : e,
			target, ev,
			momentumX = { dist:0, time:0 },
			momentumY = { dist:0, time:0 },
			duration = (e.timeStamp || Date.now()) - that.startTime,
			newPosX = that.x,
			newPosY = that.y,
			distX, distY,
			newDuration,
			snap,
			scale;

		that._unbind(MOVE_EV);
		that._unbind(END_EV);
		that._unbind(CANCEL_EV);

		if (that.options.onBeforeScrollEnd) that.options.onBeforeScrollEnd.call(that, e);

		if (that.zoomed) {
			scale = that.scale * that.lastScale;
			scale = Math.max(that.options.zoomMin, scale);
			scale = Math.min(that.options.zoomMax, scale);
			that.lastScale = scale / that.scale;
			that.scale = scale;

			that.x = that.originX - that.originX * that.lastScale + that.x;
			that.y = that.originY - that.originY * that.lastScale + that.y;
			
			that.scroller.style[vendor + 'TransitionDuration'] = '200ms';
			that.scroller.style[vendor + 'Transform'] = trnOpen + that.x + 'px,' + that.y + 'px' + trnClose + ' scale(' + that.scale + ')';
			
			that.zoomed = false;
			that.refresh();

			if (that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
			return;
		}

		if (!that.moved) {
			if (hasTouch) {
				if (that.doubleTapTimer && that.options.zoom) {
					// Double tapped
					clearTimeout(that.doubleTapTimer);
					that.doubleTapTimer = null;
					if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
					that.zoom(that.pointX, that.pointY, that.scale == 1 ? that.options.doubleTapZoom : 1);
					if (that.options.onZoomEnd) {
						setTimeout(function() {
							that.options.onZoomEnd.call(that, e);
						}, 200); // 200 is default zoom duration
					}
				} else {
					that.doubleTapTimer = setTimeout(function () {
						that.doubleTapTimer = null;

						// Find the last touched element
						target = point.target;
						while (target.nodeType != 1) target = target.parentNode;

						if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
							ev = document.createEvent('MouseEvents');
							ev.initMouseEvent('click', true, true, e.view, 1,
								point.screenX, point.screenY, point.clientX, point.clientY,
								e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
								0, null);
							ev._fake = true;
							target.dispatchEvent(ev);
						}
					}, that.options.zoom ? 250 : 0);
				}
			}

			that._resetPos(200);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		if (duration < 300 && that.options.momentum) {
			momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
			momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, (that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y - that.minScrollY : 0), that.options.bounce ? that.wrapperH : 0) : momentumY;

			newPosX = that.x + momentumX.dist;
			newPosY = that.y + momentumY.dist;

 			if ((that.x > 0 && newPosX > 0) || (that.x < that.maxScrollX && newPosX < that.maxScrollX)) momentumX = { dist:0, time:0 };
 			if ((that.y > that.minScrollY && newPosY > that.minScrollY) || (that.y < that.maxScrollY && newPosY < that.maxScrollY)) momentumY = { dist:0, time:0 };
		}

		if (momentumX.dist || momentumY.dist) {
			newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);

			// Do we need to snap?
			if (that.options.snap) {
				distX = newPosX - that.absStartX;
				distY = newPosY - that.absStartY;
				if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) { that.scrollTo(that.absStartX, that.absStartY, 200); }
				else {
					snap = that._snap(newPosX, newPosY);
					newPosX = snap.x;
					newPosY = snap.y;
					newDuration = m.max(snap.time, newDuration);
				}
			}

			that.scrollTo(mround(newPosX), mround(newPosY), newDuration);

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		// Do we need to snap?
		if (that.options.snap) {
			distX = newPosX - that.absStartX;
			distY = newPosY - that.absStartY;
			if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) that.scrollTo(that.absStartX, that.absStartY, 200);
			else {
				snap = that._snap(that.x, that.y);
				if (snap.x != that.x || snap.y != that.y) that.scrollTo(snap.x, snap.y, snap.time);
			}

			if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
			return;
		}

		that._resetPos(200);
		if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
	},
	
	_resetPos: function (time) {
		var that = this,
			resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x,
			resetY = that.y >= that.minScrollY || that.maxScrollY > 0 ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		if (resetX == that.x && resetY == that.y) {
			if (that.moved) {
				that.moved = false;
				if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);		// Execute custom code on scroll end
			}

			if (that.hScrollbar && that.options.hideScrollbar) {
				if (vendor == 'webkit') that.hScrollbarWrapper.style[vendor + 'TransitionDelay'] = '300ms';
				that.hScrollbarWrapper.style.opacity = '0';
			}
			if (that.vScrollbar && that.options.hideScrollbar) {
				if (vendor == 'webkit') that.vScrollbarWrapper.style[vendor + 'TransitionDelay'] = '300ms';
				that.vScrollbarWrapper.style.opacity = '0';
			}

			return;
		}

		that.scrollTo(resetX, resetY, time || 0);
	},

	_wheel: function (e) {
		var that = this,
			wheelDeltaX, wheelDeltaY,
			deltaX, deltaY,
			deltaScale;

		if ('wheelDeltaX' in e) {
			wheelDeltaX = e.wheelDeltaX / 12;
			wheelDeltaY = e.wheelDeltaY / 12;
		} else if('wheelDelta' in e) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
		} else if ('detail' in e) {
			wheelDeltaX = wheelDeltaY = -e.detail * 3;
		} else {
			return;
		}
		
		if (that.options.wheelAction == 'zoom') {
			deltaScale = that.scale * Math.pow(2, 1/3 * (wheelDeltaY ? wheelDeltaY / Math.abs(wheelDeltaY) : 0));
			if (deltaScale < that.options.zoomMin) deltaScale = that.options.zoomMin;
			if (deltaScale > that.options.zoomMax) deltaScale = that.options.zoomMax;
			
			if (deltaScale != that.scale) {
				if (!that.wheelZoomCount && that.options.onZoomStart) that.options.onZoomStart.call(that, e);
				that.wheelZoomCount++;
				
				that.zoom(e.pageX, e.pageY, deltaScale, 400);
				
				setTimeout(function() {
					that.wheelZoomCount--;
					if (!that.wheelZoomCount && that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
				}, 400);
			}
			
			return;
		}
		
		deltaX = that.x + wheelDeltaX;
		deltaY = that.y + wheelDeltaY;

		if (deltaX > 0) deltaX = 0;
		else if (deltaX < that.maxScrollX) deltaX = that.maxScrollX;

		if (deltaY > that.minScrollY) deltaY = that.minScrollY;
		else if (deltaY < that.maxScrollY) deltaY = that.maxScrollY;
    
    if(that.maxScrollY < 0){
		  that.scrollTo(deltaX, deltaY, 0);
    }
	},
	
	_mouseout: function (e) {
		var t = e.relatedTarget;

		if (!t) {
			this._end(e);
			return;
		}

		while (t = t.parentNode) if (t == this.wrapper) return;
		
		this._end(e);
	},

	_transitionEnd: function (e) {
		var that = this;

		if (e.target != that.scroller) return;

		that._unbind('webkitTransitionEnd');
		
		that._startAni();
	},


	/**
	 *
	 * Utilities
	 *
	 */
	_startAni: function () {
		var that = this,
			startX = that.x, startY = that.y,
			startTime = Date.now(),
			step, easeOut,
			animate;

		if (that.animating) return;
		
		if (!that.steps.length) {
			that._resetPos(400);
			return;
		}
		
		step = that.steps.shift();
		
		if (step.x == startX && step.y == startY) step.time = 0;

		that.animating = true;
		that.moved = true;
		
		if (that.options.useTransition) {
			that._transitionTime(step.time);
			that._pos(step.x, step.y);
			that.animating = false;
			if (step.time) that._bind('webkitTransitionEnd');
			else that._resetPos(0);
			return;
		}

		animate = function () {
			var now = Date.now(),
				newX, newY;

			if (now >= startTime + step.time) {
				that._pos(step.x, step.y);
				that.animating = false;
				if (that.options.onAnimationEnd) that.options.onAnimationEnd.call(that);			// Execute custom code on animation end
				that._startAni();
				return;
			}

			now = (now - startTime) / step.time - 1;
			easeOut = m.sqrt(1 - now * now);
			newX = (step.x - startX) * easeOut + startX;
			newY = (step.y - startY) * easeOut + startY;
			that._pos(newX, newY);
			if (that.animating) that.aniTime = nextFrame(animate);
		};

		animate();
	},

	_transitionTime: function (time) {
		time += 'ms';
		this.scroller.style[vendor + 'TransitionDuration'] = time;
		if (this.hScrollbar) this.hScrollbarIndicator.style[vendor + 'TransitionDuration'] = time;
		if (this.vScrollbar) this.vScrollbarIndicator.style[vendor + 'TransitionDuration'] = time;
	},

	_momentum: function (dist, time, maxDistUpper, maxDistLower, size) {
		var deceleration = 0.0006,
			speed = m.abs(dist) / time,
			newDist = (speed * speed) / (2 * deceleration),
			newTime = 0, outsideDist = 0;

		// Proportinally reduce speed if we are outside of the boundaries 
		if (dist > 0 && newDist > maxDistUpper) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistUpper = maxDistUpper + outsideDist;
			speed = speed * maxDistUpper / newDist;
			newDist = maxDistUpper;
		} else if (dist < 0 && newDist > maxDistLower) {
			outsideDist = size / (6 / (newDist / speed * deceleration));
			maxDistLower = maxDistLower + outsideDist;
			speed = speed * maxDistLower / newDist;
			newDist = maxDistLower;
		}

		newDist = newDist * (dist < 0 ? -1 : 1);
		newTime = speed / deceleration;

		return { dist: newDist, time: mround(newTime) };
	},

	_offset: function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;
			
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		
		if (el != this.wrapper) {
			left *= this.scale;
			top *= this.scale;
		}

		return { left: left, top: top };
	},

	_snap: function (x, y) {
		var that = this,
			i, l,
			page, time,
			sizeX, sizeY;

		// Check page X
		page = that.pagesX.length - 1;
		for (i=0, l=that.pagesX.length; i<l; i++) {
			if (x >= that.pagesX[i]) {
				page = i;
				break;
			}
		}
		if (page == that.currPageX && page > 0 && that.dirX < 0) page--;
		x = that.pagesX[page];
		sizeX = m.abs(x - that.pagesX[that.currPageX]);
		sizeX = sizeX ? m.abs(that.x - x) / sizeX * 500 : 0;
		that.currPageX = page;

		// Check page Y
		page = that.pagesY.length-1;
		for (i=0; i<page; i++) {
			if (y >= that.pagesY[i]) {
				page = i;
				break;
			}
		}
		if (page == that.currPageY && page > 0 && that.dirY < 0) page--;
		y = that.pagesY[page];
		sizeY = m.abs(y - that.pagesY[that.currPageY]);
		sizeY = sizeY ? m.abs(that.y - y) / sizeY * 500 : 0;
		that.currPageY = page;

		// Snap with constant speed (proportional duration)
		time = mround(m.max(sizeX, sizeY)) || 200;

		return { x: x, y: y, time: time };
	},

	_bind: function (type, el, bubble) {
		(el || this.scroller).addEventListener(type, this, !!bubble);
	},

	_unbind: function (type, el, bubble) {
		(el || this.scroller).removeEventListener(type, this, !!bubble);
	},


	/**
	 *
	 * Public methods
	 *
	 */
	destroy: function () {
		var that = this;

		that.scroller.style[vendor + 'Transform'] = '';

		// Remove the scrollbars
		that.hScrollbar = false;
		that.vScrollbar = false;
		that._scrollbar('h');
		that._scrollbar('v');

		// Remove the event listeners
		that._unbind(RESIZE_EV, window);
		that._unbind(START_EV);
		that._unbind(MOVE_EV);
		that._unbind(END_EV);
		that._unbind(CANCEL_EV);
		
		if (!that.options.hasTouch) {
			that._unbind('mouseout', that.wrapper);
			that._unbind(WHEEL_EV);
		}
		
		if (that.options.useTransition) that._unbind('webkitTransitionEnd');
		
		if (that.options.checkDOMChanges) clearInterval(that.checkDOMTime);
		
		if (that.options.onDestroy) that.options.onDestroy.call(that);
	},

	refresh: function () {
		var that = this,
			offset,
			i, l,
			els,
			pos = 0,
			page = 0;

		if (that.scale < that.options.zoomMin) that.scale = that.options.zoomMin;
		that.wrapperW = that.wrapper.clientWidth || 1;
		that.wrapperH = that.wrapper.clientHeight || 1;

		that.minScrollY = -that.options.topOffset || 0;
		that.scrollerW = mround(that.scroller.offsetWidth * that.scale);
		that.scrollerH = mround((that.scroller.offsetHeight + that.minScrollY) * that.scale);
		that.maxScrollX = that.wrapperW - that.scrollerW;
		that.maxScrollY = that.wrapperH - that.scrollerH + that.minScrollY;
		that.dirX = 0;
		that.dirY = 0;

		if (that.options.onRefresh) that.options.onRefresh.call(that);

		that.hScroll = that.options.hScroll && that.maxScrollX < 0;
		that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);

		that.hScrollbar = that.hScroll && that.options.hScrollbar;
		that.vScrollbar = that.vScroll && that.options.vScrollbar && that.scrollerH > that.wrapperH;

		offset = that._offset(that.wrapper);
		that.wrapperOffsetLeft = -offset.left;
		that.wrapperOffsetTop = -offset.top;

		// Prepare snap
		if (typeof that.options.snap == 'string') {
			that.pagesX = [];
			that.pagesY = [];
			els = that.scroller.querySelectorAll(that.options.snap);
			for (i=0, l=els.length; i<l; i++) {
				pos = that._offset(els[i]);
				pos.left += that.wrapperOffsetLeft;
				pos.top += that.wrapperOffsetTop;
				that.pagesX[i] = pos.left < that.maxScrollX ? that.maxScrollX : pos.left * that.scale;
				that.pagesY[i] = pos.top < that.maxScrollY ? that.maxScrollY : pos.top * that.scale;
			}
		} else if (that.options.snap) {
			that.pagesX = [];
			while (pos >= that.maxScrollX) {
				that.pagesX[page] = pos;
				pos = pos - that.wrapperW;
				page++;
			}
			if (that.maxScrollX%that.wrapperW) that.pagesX[that.pagesX.length] = that.maxScrollX - that.pagesX[that.pagesX.length-1] + that.pagesX[that.pagesX.length-1];

			pos = 0;
			page = 0;
			that.pagesY = [];
			while (pos >= that.maxScrollY) {
				that.pagesY[page] = pos;
				pos = pos - that.wrapperH;
				page++;
			}
			if (that.maxScrollY%that.wrapperH) that.pagesY[that.pagesY.length] = that.maxScrollY - that.pagesY[that.pagesY.length-1] + that.pagesY[that.pagesY.length-1];
		}

		// Prepare the scrollbars
		that._scrollbar('h');
		that._scrollbar('v');

		if (!that.zoomed) {
			that.scroller.style[vendor + 'TransitionDuration'] = '0';
			that._resetPos(200);
		}
	},

	scrollTo: function (x, y, time, relative) {
		var that = this,
			step = x,
			i, l;

		that.stop();

		if (!step.length) step = [{ x: x, y: y, time: time, relative: relative }];
		
		for (i=0, l=step.length; i<l; i++) {
			if (step[i].relative) { step[i].x = that.x - step[i].x; step[i].y = that.y - step[i].y; }
			that.steps.push({ x: step[i].x, y: step[i].y, time: step[i].time || 0 });
		}

		that._startAni();
	},

	scrollToElement: function (el, time) {
		var that = this, pos;
		el = el.nodeType ? el : that.scroller.querySelector(el);
		if (!el) return;

		pos = that._offset(el);
		pos.left += that.wrapperOffsetLeft;
		pos.top += that.wrapperOffsetTop;

		pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
		pos.top = pos.top > that.minScrollY ? that.minScrollY : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
		time = time === undefined ? m.max(m.abs(pos.left)*2, m.abs(pos.top)*2) : time;

		that.scrollTo(pos.left, pos.top, time);
	},

	scrollToPage: function (pageX, pageY, time) {
		var that = this, x, y;
		
		time = time === undefined ? 400 : time;

		if (that.options.onScrollStart) that.options.onScrollStart.call(that);

		if (that.options.snap) {
			pageX = pageX == 'next' ? that.currPageX+1 : pageX == 'prev' ? that.currPageX-1 : pageX;
			pageY = pageY == 'next' ? that.currPageY+1 : pageY == 'prev' ? that.currPageY-1 : pageY;

			pageX = pageX < 0 ? 0 : pageX > that.pagesX.length-1 ? that.pagesX.length-1 : pageX;
			pageY = pageY < 0 ? 0 : pageY > that.pagesY.length-1 ? that.pagesY.length-1 : pageY;

			that.currPageX = pageX;
			that.currPageY = pageY;
			x = that.pagesX[pageX];
			y = that.pagesY[pageY];
		} else {
			x = -that.wrapperW * pageX;
			y = -that.wrapperH * pageY;
			if (x < that.maxScrollX) x = that.maxScrollX;
			if (y < that.maxScrollY) y = that.maxScrollY;
		}

		that.scrollTo(x, y, time);
	},

	disable: function () {
		this.stop();
		this._resetPos(0);
		this.enabled = false;

		// If disabled after touchstart we make sure that there are no left over events
		this._unbind(MOVE_EV);
		this._unbind(END_EV);
		this._unbind(CANCEL_EV);
	},
	
	enable: function () {
		this.enabled = true;
	},
	
	stop: function () {
		if (this.options.useTransition) this._unbind('webkitTransitionEnd');
		else cancelFrame(this.aniTime);
		this.steps = [];
		this.moved = false;
		this.animating = false;
	},
	
	zoom: function (x, y, scale, time) {
		var that = this,
			relScale = scale / that.scale;

		if (!that.options.useTransform) return;

		that.zoomed = true;
		time = time === undefined ? 200 : time;
		x = x - that.wrapperOffsetLeft - that.x;
		y = y - that.wrapperOffsetTop - that.y;
		that.x = x - x * relScale + that.x;
		that.y = y - y * relScale + that.y;

		that.scale = scale;
		that.refresh();

		that.x = that.x > 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x;
		that.y = that.y > that.minScrollY ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

		that.scroller.style[vendor + 'TransitionDuration'] = time + 'ms';
		that.scroller.style[vendor + 'Transform'] = trnOpen + that.x + 'px,' + that.y + 'px' + trnClose + ' scale(' + scale + ')';
		that.zoomed = false;
	},
	
	isReady: function () {
		return !this.moved && !this.zoomed && !this.animating;
	}
};

if (typeof exports !== 'undefined') exports.iScroll = iScroll;
else window.iScroll = iScroll;

})();
;
/*!
 * Pusher JavaScript Library v1.12.1
 * http://pusherapp.com/
 *
 * Copyright 2011, Pusher
 * Released under the MIT licence.
 */

(function(){if(Function.prototype.scopedTo===void 0)Function.prototype.scopedTo=function(a,c){var e=this;return function(){return e.apply(a,Array.prototype.slice.call(c||[]).concat(Array.prototype.slice.call(arguments)))}};var b=function(a,c){this.options=c||{};this.key=a;this.channels=new b.Channels;this.global_emitter=new b.EventsDispatcher;var e=this;this.checkAppKey();this.connection=new b.Connection(this.key,this.options);this.connection.bind("connected",function(){e.subscribeAll()}).bind("message",
function(c){var a=c.event.indexOf("pusher_internal:")===0;if(c.channel){var b;(b=e.channel(c.channel))&&b.emit(c.event,c.data)}a||e.global_emitter.emit(c.event,c.data)}).bind("disconnected",function(){e.channels.disconnect()}).bind("error",function(c){b.warn("Error",c)});b.instances.push(this);b.isReady&&e.connect()};b.instances=[];b.prototype={channel:function(a){return this.channels.find(a)},connect:function(){this.connection.connect()},disconnect:function(){this.connection.disconnect()},bind:function(a,
c){this.global_emitter.bind(a,c);return this},bind_all:function(a){this.global_emitter.bind_all(a);return this},subscribeAll:function(){for(channelName in this.channels.channels)this.channels.channels.hasOwnProperty(channelName)&&this.subscribe(channelName)},subscribe:function(a){var c=this,e=this.channels.add(a,this);this.connection.state==="connected"&&e.authorize(this.connection.socket_id,this.options,function(b,f){b?e.emit("pusher:subscription_error",f):c.send_event("pusher:subscribe",{channel:a,
auth:f.auth,channel_data:f.channel_data})});return e},unsubscribe:function(a){this.channels.remove(a);this.connection.state==="connected"&&this.send_event("pusher:unsubscribe",{channel:a})},send_event:function(a,c,e){return this.connection.send_event(a,c,e)},checkAppKey:function(){(this.key===null||this.key===void 0)&&b.warn("Warning","You must pass your app key when you instantiate Pusher.")}};b.Util={extend:function c(e,b){for(var f in b)e[f]=b[f]&&b[f].constructor&&b[f].constructor===Object?c(e[f]||
{},b[f]):b[f];return e},stringify:function(){for(var c=["Pusher"],b=0;b<arguments.length;b++)typeof arguments[b]==="string"?c.push(arguments[b]):window.JSON==void 0?c.push(arguments[b].toString()):c.push(JSON.stringify(arguments[b]));return c.join(" : ")},arrayIndexOf:function(c,b){var g=Array.prototype.indexOf;if(c==null)return-1;if(g&&c.indexOf===g)return c.indexOf(b);for(i=0,l=c.length;i<l;i++)if(c[i]===b)return i;return-1}};b.debug=function(){b.log&&b.log(b.Util.stringify.apply(this,arguments))};
b.warn=function(){window.console&&window.console.warn?window.console.warn(b.Util.stringify.apply(this,arguments)):b.log&&b.log(b.Util.stringify.apply(this,arguments))};b.VERSION="1.12.1";b.host="ws.pusherapp.com";b.ws_port=80;b.wss_port=443;b.channel_auth_endpoint="/pusher/auth";b.cdn_http="http://js.pusher.com/";b.cdn_https="https://d3dy5gmtp8yhk7.cloudfront.net/";b.dependency_suffix=".min";b.channel_auth_transport="ajax";b.activity_timeout=12E4;b.pong_timeout=3E4;b.isReady=!1;b.ready=function(){b.isReady=
!0;for(var c=0,e=b.instances.length;c<e;c++)b.instances[c].connect()};this.Pusher=b}).call(this);
(function(){function b(a){this.callbacks={};this.global_callbacks=[];this.failThrough=a}b.prototype.bind=function(a,c){this.callbacks[a]=this.callbacks[a]||[];this.callbacks[a].push(c);return this};b.prototype.unbind=function(a,c){if(this.callbacks[a]){var b=Pusher.Util.arrayIndexOf(this.callbacks[a],c);this.callbacks[a].splice(b,1)}return this};b.prototype.emit=function(a,c){for(var b=0;b<this.global_callbacks.length;b++)this.global_callbacks[b](a,c);var g=this.callbacks[a];if(g)for(b=0;b<g.length;b++)g[b](c);
else this.failThrough&&this.failThrough(a,c);return this};b.prototype.bind_all=function(a){this.global_callbacks.push(a);return this};this.Pusher.EventsDispatcher=b}).call(this);
(function(){function b(c,a,b){if(a[c]!==void 0)a[c](b)}function a(a,b,f){c.EventsDispatcher.call(this);this.state=void 0;this.errors=[];this.stateActions=f;this.transitions=b;this.transition(a)}var c=this.Pusher;a.prototype.transition=function(a,g){var f=this.state,h=this.stateActions;if(f&&c.Util.arrayIndexOf(this.transitions[f],a)==-1)throw this.emit("invalid_transition_attempt",{oldState:f,newState:a}),Error("Invalid transition ["+f+" to "+a+"]");b(f+"Exit",h,g);b(f+"To"+(a.substr(0,1).toUpperCase()+
a.substr(1)),h,g);b(a+"Pre",h,g);this.state=a;this.emit("state_change",{oldState:f,newState:a});b(a+"Post",h,g)};a.prototype.is=function(a){return this.state===a};a.prototype.isNot=function(a){return this.state!==a};c.Util.extend(a.prototype,c.EventsDispatcher.prototype);this.Pusher.Machine=a}).call(this);
(function(){var b=function(){var a=this;Pusher.EventsDispatcher.call(this);window.addEventListener!==void 0&&(window.addEventListener("online",function(){a.emit("online",null)},!1),window.addEventListener("offline",function(){a.emit("offline",null)},!1))};b.prototype.isOnLine=function(){return window.navigator.onLine===void 0?!0:window.navigator.onLine};Pusher.Util.extend(b.prototype,Pusher.EventsDispatcher.prototype);this.Pusher.NetInfo=b}).call(this);
(function(){function b(a){a.connectionWait=0;a.openTimeout=c.TransportType==="flash"?5E3:2E3;a.connectedTimeout=2E3;a.connectionSecure=a.compulsorySecure;a.connectionAttempts=0}function a(a,r){function k(){d.connectionWait<s&&(d.connectionWait+=g);d.openTimeout<t&&(d.openTimeout+=f);d.connectedTimeout<u&&(d.connectedTimeout+=h);if(d.compulsorySecure!==!0)d.connectionSecure=!d.connectionSecure;d.connectionAttempts++}function m(){d._machine.transition("impermanentlyClosing")}function p(){d._activityTimer&&
clearTimeout(d._activityTimer);d._activityTimer=setTimeout(function(){d.send_event("pusher:ping",{});d._activityTimer=setTimeout(function(){d.socket.close()},d.options.pong_timeout||c.pong_timeout)},d.options.activity_timeout||c.activity_timeout)}function v(){var a=d.connectionWait;if(a===0&&d.connectedAt){var c=(new Date).getTime()-d.connectedAt;c<1E3&&(a=1E3-c)}return a}function w(){d._machine.transition("open")}function x(a){a=q(a);if(a!==void 0)if(a.event==="pusher:connection_established")d._machine.transition("connected",
a.data.socket_id);else if(a.event==="pusher:error"){var c=a.data.code;d.emit("error",{type:"PusherError",data:{code:c,message:a.data.message}});c===4E3?(d.compulsorySecure=!0,d.connectionSecure=!0,d.options.encrypted=!0,m()):c<4100?d._machine.transition("permanentlyClosing"):c<4200?(d.connectionWait=1E3,d._machine.transition("waiting")):c<4300?m():d._machine.transition("permanentlyClosing")}}function y(a){p();a=q(a);if(a!==void 0){c.debug("Event recd",a);switch(a.event){case "pusher:error":d.emit("error",
{type:"PusherError",data:a.data});break;case "pusher:ping":d.send_event("pusher:pong",{})}d.emit("message",a)}}function q(a){try{var c=JSON.parse(a.data);if(typeof c.data==="string")try{c.data=JSON.parse(c.data)}catch(b){if(!(b instanceof SyntaxError))throw b;}return c}catch(e){d.emit("error",{type:"MessageParseError",error:e,data:a.data})}}function n(){d._machine.transition("waiting")}function o(a){d.emit("error",{type:"WebSocketError",error:a})}function j(a,b){var e=d.state;d.state=a;e!==a&&(c.debug("State changed",
e+" -> "+a),d.emit("state_change",{previous:e,current:a}),d.emit(a,b))}var d=this;c.EventsDispatcher.call(this);this.options=c.Util.extend({encrypted:!1},r);this.netInfo=new c.NetInfo;this.netInfo.bind("online",function(){d._machine.is("waiting")&&(d._machine.transition("connecting"),j("connecting"))});this.netInfo.bind("offline",function(){if(d._machine.is("connected"))d.socket.onclose=void 0,d.socket.onmessage=void 0,d.socket.onerror=void 0,d.socket.onopen=void 0,d.socket.close(),d.socket=void 0,
d._machine.transition("waiting")});this._machine=new c.Machine("initialized",e,{initializedPre:function(){d.compulsorySecure=d.options.encrypted;d.key=a;d.socket=null;d.socket_id=null;d.state="initialized"},waitingPre:function(){d.connectionWait>0&&d.emit("connecting_in",d.connectionWait);d.netInfo.isOnLine()&&d.connectionAttempts<=4?j("connecting"):j("unavailable");if(d.netInfo.isOnLine())d._waitingTimer=setTimeout(function(){d._machine.transition("connecting")},v())},waitingExit:function(){clearTimeout(d._waitingTimer)},
connectingPre:function(){if(d.netInfo.isOnLine()===!1)d._machine.transition("waiting"),j("unavailable");else{var a;a=c.ws_port;var b="ws://";if(d.connectionSecure||document.location.protocol==="https:")a=c.wss_port,b="wss://";a=b+c.host+":"+a+"/app/"+d.key+"?protocol=5&client=js&version="+c.VERSION+"&flash="+(c.TransportType==="flash"?"true":"false");c.debug("Connecting",a);d.socket=new c.Transport(a);d.socket.onopen=w;d.socket.onclose=n;d.socket.onerror=o;d._connectingTimer=setTimeout(m,d.openTimeout)}},
connectingExit:function(){clearTimeout(d._connectingTimer);d.socket.onopen=void 0},connectingToWaiting:function(){k()},connectingToImpermanentlyClosing:function(){k()},openPre:function(){d.socket.onmessage=x;d.socket.onerror=o;d.socket.onclose=n;d._openTimer=setTimeout(m,d.connectedTimeout)},openExit:function(){clearTimeout(d._openTimer);d.socket.onmessage=void 0},openToWaiting:function(){k()},openToImpermanentlyClosing:function(){k()},connectedPre:function(a){d.socket_id=a;d.socket.onmessage=y;d.socket.onerror=
o;d.socket.onclose=n;b(d);d.connectedAt=(new Date).getTime();p()},connectedPost:function(){j("connected")},connectedExit:function(){d._activityTimer&&clearTimeout(d._activityTimer);j("disconnected")},impermanentlyClosingPost:function(){if(d.socket)d.socket.onclose=n,d.socket.close()},permanentlyClosingPost:function(){d.socket?(d.socket.onclose=function(){b(d);d._machine.transition("permanentlyClosed")},d.socket.close()):(b(d),d._machine.transition("permanentlyClosed"))},failedPre:function(){j("failed");
c.debug("WebSockets are not available in this browser.")},permanentlyClosedPost:function(){j("disconnected")}})}var c=this.Pusher,e={initialized:["waiting","failed"],waiting:["connecting","permanentlyClosed"],connecting:["open","permanentlyClosing","impermanentlyClosing","waiting"],open:["connected","permanentlyClosing","impermanentlyClosing","waiting"],connected:["permanentlyClosing","waiting"],impermanentlyClosing:["waiting","permanentlyClosing"],permanentlyClosing:["permanentlyClosed"],permanentlyClosed:["waiting"],
failed:["permanentlyClosed"]},g=2E3,f=2E3,h=2E3,s=5*g,t=5*f,u=5*h;a.prototype.connect=function(){c.Transport===null||c.Transport===void 0?this._machine.transition("failed"):this._machine.is("initialized")?(b(this),this._machine.transition("waiting")):this._machine.is("waiting")&&this.netInfo.isOnLine()===!0?this._machine.transition("connecting"):this._machine.is("permanentlyClosed")&&(b(this),this._machine.transition("waiting"))};a.prototype.send=function(a){if(this._machine.is("connected")){var c=
this;setTimeout(function(){c.socket.send(a)},0);return!0}else return!1};a.prototype.send_event=function(a,b,e){a={event:a,data:b};e&&(a.channel=e);c.debug("Event sent",a);return this.send(JSON.stringify(a))};a.prototype.disconnect=function(){this._machine.is("permanentlyClosed")||(this._machine.is("waiting")||this._machine.is("failed")?this._machine.transition("permanentlyClosed"):this._machine.transition("permanentlyClosing"))};c.Util.extend(a.prototype,c.EventsDispatcher.prototype);this.Pusher.Connection=
a}).call(this);
(function(){Pusher.Channels=function(){this.channels={}};Pusher.Channels.prototype={add:function(a,c){var b=this.find(a);b||(b=Pusher.Channel.factory(a,c),this.channels[a]=b);return b},find:function(a){return this.channels[a]},remove:function(a){delete this.channels[a]},disconnect:function(){for(var a in this.channels)this.channels[a].disconnect()}};Pusher.Channel=function(a,c){var b=this;Pusher.EventsDispatcher.call(this,function(c){Pusher.debug("No callbacks on "+a+" for "+c)});this.pusher=c;this.name=
a;this.subscribed=!1;this.bind("pusher_internal:subscription_succeeded",function(a){b.onSubscriptionSucceeded(a)})};Pusher.Channel.prototype={init:function(){},disconnect:function(){this.subscribed=!1;this.emit("pusher_internal:disconnected")},onSubscriptionSucceeded:function(){this.subscribed=!0;this.emit("pusher:subscription_succeeded")},authorize:function(a,c,b){return b(!1,{})},trigger:function(a,c){return this.pusher.send_event(a,c,this.name)}};Pusher.Util.extend(Pusher.Channel.prototype,Pusher.EventsDispatcher.prototype);
Pusher.Channel.PrivateChannel={authorize:function(a,c,b){var g=this;return(new Pusher.Channel.Authorizer(this,Pusher.channel_auth_transport,c)).authorize(a,function(a,c){a||g.emit("pusher_internal:authorized",c);b(a,c)})}};Pusher.Channel.PresenceChannel={init:function(){this.members=new b(this)},onSubscriptionSucceeded:function(){this.subscribed=!0}};var b=function(a){var c=this,b=function(){this._members_map={};this.count=0;this.me=null};b.call(this);a.bind("pusher_internal:authorized",function(b){var e=
JSON.parse(b.channel_data);a.bind("pusher_internal:subscription_succeeded",function(b){c._members_map=b.presence.hash;c.count=b.presence.count;c.me=c.get(e.user_id);a.emit("pusher:subscription_succeeded",c)})});a.bind("pusher_internal:member_added",function(b){c.get(b.user_id)===null&&c.count++;c._members_map[b.user_id]=b.user_info;a.emit("pusher:member_added",c.get(b.user_id))});a.bind("pusher_internal:member_removed",function(b){var e=c.get(b.user_id);e&&(delete c._members_map[b.user_id],c.count--,
a.emit("pusher:member_removed",e))});a.bind("pusher_internal:disconnected",function(){b.call(c)})};b.prototype={each:function(a){for(var b in this._members_map)a(this.get(b))},get:function(a){return this._members_map.hasOwnProperty(a)?{id:a,info:this._members_map[a]}:null}};Pusher.Channel.factory=function(a,b){var e=new Pusher.Channel(a,b);a.indexOf("private-")===0?Pusher.Util.extend(e,Pusher.Channel.PrivateChannel):a.indexOf("presence-")===0&&(Pusher.Util.extend(e,Pusher.Channel.PrivateChannel),
Pusher.Util.extend(e,Pusher.Channel.PresenceChannel));e.init();return e}}).call(this);
(function(){Pusher.Channel.Authorizer=function(b,a,c){this.channel=b;this.type=a;this.authOptions=(c||{}).auth||{}};Pusher.Channel.Authorizer.prototype={composeQuery:function(b){var b="&socket_id="+encodeURIComponent(b)+"&channel_name="+encodeURIComponent(this.channel.name),a;for(a in this.authOptions.params)b+="&"+encodeURIComponent(a)+"="+encodeURIComponent(this.authOptions.params[a]);return b},authorize:function(b,a){return Pusher.authorizers[this.type].call(this,b,a)}};Pusher.auth_callbacks={};
Pusher.authorizers={ajax:function(b,a){var c;c=Pusher.XHR?new Pusher.XHR:window.XMLHttpRequest?new window.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");c.open("POST",Pusher.channel_auth_endpoint,!0);c.setRequestHeader("Content-Type","application/x-www-form-urlencoded");for(var e in this.authOptions.headers)c.setRequestHeader(e,this.authOptions.headers[e]);c.onreadystatechange=function(){if(c.readyState==4)if(c.status==200){var b,e=!1;try{b=JSON.parse(c.responseText),e=!0}catch(h){a(!0,"JSON returned from webapp was invalid, yet status code was 200. Data was: "+
c.responseText)}e&&a(!1,b)}else Pusher.warn("Couldn't get auth info from your webapp",c.status),a(!0,c.status)};c.send(this.composeQuery(b));return c},jsonp:function(b,a){this.authOptions.headers!==void 0&&Pusher.warn("Warn","To send headers with the auth request, you must use AJAX, rather than JSONP.");var c=document.createElement("script");Pusher.auth_callbacks[this.channel.name]=function(b){a(!1,b)};c.src=Pusher.channel_auth_endpoint+"?callback="+encodeURIComponent("Pusher.auth_callbacks['"+this.channel.name+
"']")+this.composeQuery(b);var e=document.getElementsByTagName("head")[0]||document.documentElement;e.insertBefore(c,e.firstChild)}}}).call(this);
var _require=function(){var b;b=document.addEventListener?function(a,b){a.addEventListener("load",b,!1)}:function(a,b){a.attachEvent("onreadystatechange",function(){(a.readyState=="loaded"||a.readyState=="complete")&&b()})};return function(a,c){function e(a,c){var c=c||function(){},e=document.getElementsByTagName("head")[0],h=document.createElement("script");h.setAttribute("src",a);h.setAttribute("type","text/javascript");h.setAttribute("async",!0);b(h,function(){var a=c;g++;f==g&&setTimeout(a,0)});
e.appendChild(h)}for(var g=0,f=a.length,h=0;h<f;h++)e(a[h],c)}}();
(function(){var b=(document.location.protocol=="http:"?Pusher.cdn_http:Pusher.cdn_https)+Pusher.VERSION,a=[];window.JSON===void 0&&a.push(b+"/json2"+Pusher.dependency_suffix+".js");if(window.WebSocket===void 0&&window.MozWebSocket===void 0)window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0,a.push(b+"/flashfallback"+Pusher.dependency_suffix+".js");var c=function(){return window.WebSocket===void 0&&window.MozWebSocket===void 0?function(){window.WebSocket!==void 0&&window.MozWebSocket===void 0?(Pusher.Transport=
window.WebSocket,Pusher.TransportType="flash",window.WEB_SOCKET_SWF_LOCATION=b+"/WebSocketMain.swf",WebSocket.__addTask(function(){Pusher.ready()}),WebSocket.__initialize()):(Pusher.Transport=null,Pusher.TransportType="none",Pusher.ready())}:function(){Pusher.Transport=window.MozWebSocket!==void 0?window.MozWebSocket:window.WebSocket;Pusher.TransportType="native";Pusher.ready()}}(),e=function(a){var b=function(){document.body?a():setTimeout(b,0)};b()},g=function(){e(c)};a.length>0?_require(a,g):g()})();;
(function(a){function b(){throw"SoundJS cannot be instantiated"}b.AUDIO_TIMEOUT=8000;b.INTERRUPT_ANY=1;b.INTERRUPT_EARLY=2;b.INTERRUPT_LATE=3;b.INTERRUPT_NONE=4;b.onProgress=null;b.onSoundTimeout=null;b.onSoundLoadError=null;b.onSoundLoadComplete=null;b.onLoadQueueComplete=null;b.onSoundComplete=null;b.soundHash=[];b.loadQueue=[];b.itemsToLoad=0;b.instanceCount=0;b.INST_MAX=35;b.FT=0.001;b.AUDIO_ERROR="error";b.AUDIO_PROGRESS="progress";b.AUDIO_COMPLETE="canplaythrough";b.AUDIO_ENDED="ended";b.AUDIO_STALLED="stalled";b._master=1;b._currentLoad=0;b.add=function(c,e,d){b.loadQueue.push({name:c,src:e,instances:d});if(b.loadQueue.length==1){b.itemsToLoad=1;b.loadNext()}else{b.itemsToLoad++}};b.addBatch=function(d){var c=d.length;while(d.length){b.loadQueue.push(d.shift())}if(b.loadQueue.length==c){b.loadNext();b.itemsToLoad=c}else{b.itemsToLoad++}};b.play=function(e,g,f,c,d){if(e==null||b.soundHash[e]==null||b.soundHash[e].length==0||(g!=b.INTERRUPT_ANY&&g!=b.INTERRUPT_EARLY&&g!=b.INTERRUPT_LATE&&g!=b.INTERRUPT_NONE&&g!=null)){return NaN}if(g==null){g=b.INTERRUPT_NONE}if(c==null){c=false}if(!d){d=0}if(f==null||f>1){f=1}else{if(f<0){f=0}}if(d>0){setTimeout(function(){b.beginPlaying(e,g,f,c)},d)}else{return b.beginPlaying(e,g,f,c)}return -1};b.getMasterVolume=function(){return b._master};b.setMasterVolume=function(f){if(Number(f)==null){return}if(f<0){f=0}else{if(f>1){f=1}}var e,d,h,c,g;c=b._master;b._master=f;if(b._master!=c){for(g in b.soundHash){h=b.soundHash[g];d=h.length;for(e=0;e<d;e++){h[e].volume=h[e].storedVolume*b._master}}}};b.remove=function(d,f){var e,c,h,g;if(d==null){for(g in b.soundHash){h=b.soundHash[g];c=h.length;do{b.stop(g,c-1);h[c-1].currentSrc="";document.body.removeChild(h[c-1]);h.pop();c=h.length;b.instanceCount--}while(c)}}else{h=b.soundHash[d];if(h==null){return false}c=h.length;if(f==null){do{b.stop(d,c-1);h[c-1].currentSrc="";document.body.removeChild(h[c-1]);h.pop();c=h.length;b.instanceCount--}while(c)}else{if(f<=0||c<=0){return false}c--;for(e=0;e<=c&&e<f;e++){b.stop(d,c-e);h[c-e].currentSrc="";document.body.removeChild(h[c-e]);h.pop();b.instanceCount--}}}return true};b.setVolume=function(h,e,c){var f,d,k,j,g;if(h==null){return false}g=h;h=h*b._master;if(e==null){for(j in b.soundHash){k=b.soundHash[j];d=k.length;for(f=0;f<d;f++){k[f].storedVolume=h;k[f].volume=h}}}else{k=b.soundHash[e];if(k==null){return false}d=k.length;if(c==null){for(f=0;f<d;f++){k[f].storedVolume=h;k[f].volume=h}}else{if(d<=c){return false}k[c].storedVolume=h;k[c].volume=h}}return true};b.getVolume=function(d,c){var e=b.soundHash[d];if(e==null||e.length==0){return -1}if(c==null){return e[1].storedVolume}else{if(e.length<c){return -1}return e[c].storedVolume}};b.setMute=function(h,e,c){var f,d,j,g;if(h==null){return false}if(e==null){for(g in b.soundHash){j=b.soundHash[g];d=j.length;for(f=0;f<d;f++){j[f].muted=h}}}else{j=b.soundHash[e];if(j==null){return false}d=j.length;if(c==null){for(f=0;f<d;f++){j[f].muted=h}}else{if(d<=c){return false}j[c].muted=h}}return true};b.pause=function(e,c){var f,d,h,g;if(e==null){for(g in b.soundHash){h=b.soundHash[g];d=h.length;for(f=0;f<d;f++){h[f].pause()}}}else{h=b.soundHash[e];if(h==null){return false}d=h.length;if(c==null){for(f=0;f<d;f++){h[f].pause()}}else{if(d<=c){return false}h[c].pause()}}return true};b.resume=function(e,c){var f,d,h,g;if(e==null){for(g in b.soundHash){d=b.soundHash[g].length;for(f=0;f<d;f++){h=b.soundHash[g][f];if(h.loop||(h.currentTime!=h.duration&&h.currentTime!=0)){h.play()}}}}else{if(b.soundHash[e]==null){return false}d=b.soundHash[e].length;if(c==null){for(f=0;f<d;f++){h=b.soundHash[e][f];if(h.loop||(h.currentTime!=h.duration&&h.currentTime!=0)){h.play()}}}else{if(d<=c){return false}h=b.soundHash[e][c];if(h.loop||(h.currentTime!=h.duration&&h.currentTime!=0)){h.play()}}}return true};b.stop=function(f,c){var g,d,k,j;if(f==null){for(j in b.soundHash){d=b.soundHash[j].length;for(g=0;g<d;g++){k=b.soundHash[j][g];try{k.currentTime=0}catch(h){}k.pause()}}}else{if(b.soundHash[f]==null){return false}d=b.soundHash[f].length;if(c==null){for(g=0;g<d;g++){k=b.soundHash[f][g];k.currentTime=0;k.pause()}}else{if(d<=c){return false}k=b.soundHash[f][c];k.currentTime=0;k.pause()}}return true};b.isLoaded=function(d){var c=true;var e;if(d==null){for(e in b.soundHash){c=c&&b.soundHash[e]&&b.soundHash[e][0]&&b.soundHash[e][0].loaded;if(!c){return c}}}else{return b.soundHash[d]&&b.soundHash[d][0]&&b.soundHash[d][0].loaded}return c};b.getNumInstances=function(c){var d;if(c==null){return instanceCount}else{if(b.soundHash[c]){return b.soundHash[c].length}else{return -1}}};b.getMaxInstances=function(){return b.INST_MAX};b.getCurrentLoadProgress=function(){return(b.itemsToLoad-b.loadQueue.length-(1-b._currentLoad))/b.itemsToLoad};b.getInstance=function(d,c){if(d==null||c<0||!b.soundHash[d]||!b.soundHash[d][c]){return null}return b.soundHash[d][c]};b.beginPlaying=function(c,e,g,h){var f,n,k,m;var j=false;var d=b.soundHash[c].length;for(f=0;f<d;f++){m=b.soundHash[c][f];if(k==null&&e!=b.INTERRUPT_ANY&&e!=b.INTERRUPT_NONE){k=m;n=f}if((m.currentTime>=(m.duration-b.FT)&&!m.loop)||(m.currentTime==0&&m.paused)){j=true;d=f}else{if((e==b.INTERRUPT_EARLY&&m.currentTime<k.currentTime)||(e==b.INTERRUPT_LATE&&m.currentTime>k.currentTime)){j=true}}if(j){k=m;n=f}}if(e==b.INTERRUPT_ANY&&!k){k=b.soundHash[c][0];n=0}if(k){k.loop=h;k.storedVolume=g;k.volume=g*b._master;k.currentTime=0;if(k.paused){k.play()}return n}return -1};b.loadNext=function(){if(b.loadQueue.length<=0){if(b.onLoadQueueComplete){b.onLoadQueueComplete()}return}var g=b.loadQueue.shift();var e=g.instances||1;var f=g.name;var d=g.src;var p=b.soundHash[f];if(p==null){p=b.soundHash[f]=[]}else{if(p.length){d=p[0].src}}var s=p.length;for(var q=s,k=s+e;q<k;q++){var n=document.createElement("audio");if(q==s){n.timeoutId=setTimeout(function(){b.handleAudioTimeout(n)},b.AUDIO_TIMEOUT);n.addEventListener(b.AUDIO_COMPLETE,b.handleAudioComplete,false);n.addEventListener(b.AUDIO_PROGRESS,b.handleProgress,false);n.addEventListener(b.AUDIO_STALLED,b.handleAudioStall,false);n.addEventListener(b.AUDIO_ERROR,b.handleAudioError,false);n.loaded=false}n.addEventListener(b.AUDIO_ENDED,b.handleEnded,false);n.setAttribute("id",f+"_"+q);n.setAttribute("preload","auto");var r;if(d instanceof Array){for(var m=0,h=d.length;m<h;m++){var c=n.appendChild(document.createElement("source"));r=b.getType(d[m]);c.setAttribute("type",r);c.setAttribute("src",d[m])}}else{r=b.getType(d);n.setAttribute("type",r);n.setAttribute("src",d)}n.load();document.body.appendChild(n);b.soundHash[f].push(n);b.instanceCount++}};b.getType=function(d){var c=d.slice(d.lastIndexOf(".")+1);switch(c){case"mp3":return"audio/mpeg";case"ogg":return"audio/ogg";case"wav":return"audio/wav";default:throw ("'"+d+"' is not a recognized audio file")}return null};b.handleEnded=function(c){if(b.onSoundEnded){var d=this.id.split("_");b.onSoundEnded(this,d[0],d[1])}};b.handleAudioTimeout=function(c){if(b.onSoundTimeout){var d=c.split("_");b.onSoundTimeout(c,d[0],d[1]);b.loadNext()}};b.handleProgress=function(d){try{var f=this.buffered.end()}catch(c){return}b._currentLoad=this.buffered.end()/this.duration;if(b.onProgress){b.onProgress(b.getCurrentLoadProgress())}};b.handleAudioError=function(c){clearTimeout(this.timeoutId);if(b.onSoundLoadError){var d=this.id.split("_");b.onSoundLoadError(this,d[0],d[1])}b.loadNext()};b.handleAudioComplete=function(c){var d=this.id.split("_");this.removeEventListener(b.AUDIO_COMPLETE,b.handleAudioComplete,false);clearTimeout(this.timeoutId);this.loaded=true;if(b.onSoundLoadComplete){b.onSoundLoadComplete(this,d[0],d[1])}b.loadNext()};b.handleAudioStall=function(c){console.log("STALL",this.id)};a.SoundJS=b}(window));;
Badge=(function(){var b=window.cordova||window.Cordova;function c(d){if(typeof(b)!="undefined"&&b.available&&(navigator.userAgent.match(/(iphone|ipad|ipod)/i)!=null)){b.exec(null,null,"com.rumpus.badge","setBadge",[d])}}function a(d){c(0)}return{set:c,clear:a}})();;
var Twitter=function(){};Twitter.prototype.isTwitterAvailable=function(a){cordova.exec(a,null,"TwitterPlugin","isTwitterAvailable",[])};Twitter.prototype.isTwitterSetup=function(a){cordova.exec(a,null,"TwitterPlugin","isTwitterSetup",[])};Twitter.prototype.composeTweet=function(d,b,c,a){a=a||{};a.text=c;cordova.exec(d,b,"TwitterPlugin","composeTweet",[a])};Twitter.prototype.getPublicTimeline=function(b,a){cordova.exec(b,a,"TwitterPlugin","getPublicTimeline",[])};Twitter.prototype.getMentions=function(b,a){cordova.exec(b,a,"TwitterPlugin","getMentions",[])};Twitter.prototype.getTwitterUsername=function(b,a){cordova.exec(b,a,"TwitterPlugin","getTwitterUsername",[])};Twitter.prototype.getTWRequest=function(c,e,d,b,a){a=a||{};a.url=c;a.params=e;cordova.exec(d,b,"TwitterPlugin","getTWRequest",[a])};if(typeof(cordova)!="undefined"){cordova.addConstructor(function(){if(!window.Cordova){window.Cordova=cordova}if(!window.plugins){window.plugins={}}window.plugins.twitter=new Twitter()})};;
friendpicker=(function(){var b=window.cordova||window.Cordova;function a(c,f,e,d){if(typeof(b)!="undefined"&&b.available){if(navigator.userAgent.toLowerCase().match(/android/)&&(d=="addressbook"||d=="ab"||d=="email"||d=="e")){b.exec(c,f,"com.rumpus.addressbookpicker","friendPicker",[-1,{showActivePlayers:e,source:d}])}else{b.exec(c,f,"com.rumpus.friendpicker","friendPicker",[-1,{showActivePlayers:e,source:d}])}}}return{friendpicker:a}})();;
RR.common=(function(){var a=navigator.userAgent.toLowerCase();var h="ontouchstart" in document.documentElement&&a.match(/(iphone|ipad|ipod)/i)!=null;var m="ontouchstart" in document.documentElement&&a.match(/(iphone[\w\W]*os\s5|ipad[\w\W]*os\s5)/i)!=null;var n="ontouchstart" in document.documentElement&&a.match(/(iphone[\w\W]*os\s4|ipad[\w\W]*os\s4)/i)!=null;var c=navigator.userAgent.match(/iPad/i)!=null;var e=navigator.userAgent.match(/iPhone/i)!=null;var j=a.indexOf("android")>-1;var f=$("#game").hasClass("desktop");if(typeof(DeviceInfo)==="object"){var b=function(p){if(h()){document.addEventListener("deviceready",p,false)}else{window.addEventListener("load",p,false)}};var l=((document.readyState=="loaded"||document.readyState=="complete")&&(DeviceInfo!=null&&DeviceInfo.uuid!=null));b(function(){l=true});var i=function(p){if(l){p()}else{b(p)}}}var g=false;var o=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function k(p){return(p+"").replace(/\b(\d+)((\.\d+)*)\b/g,function(r,q,s){return(q.charAt(0)>0&&!(s||".").lastIndexOf(".")?q.replace(/(\d)(?=(\d{3})+$)/g,"$1,"):q)+s})}function d(q,p){if(q in localStorage){try{return JSON.parse(localStorage[q])}catch(r){console.log("error parsing localstorage."+q+" "+localStorage[q]+": "+r);delete localStorage[q]}}return p}return{onDeviceReady:i,isiOS:h,isiOS5:m,isDesktop:f,isAndroid:j,isFreeGame:g,isiPad:c,isiOS4:n,isiPhone:e,emailRegEx:o,delimitNumbers:k,parseLocalStorage:d}})();;
var phoneGapSound=function(){var d,g,e;var o={};function c(i){d=i}function h(i){for(g=0;g<d.length;g++){p(d[g],i)}}function j(r,q,i,m){for(g=0;g<d.length;g++){e=p(d[g]);e.stop();if(i||d[g].loop){e.play({numberOfLoops:999})}else{e.play()}}}function n(){for(g=0;g<d.length;g++){e=p(d[g]);e.pause()}}function a(){for(g=0;g<d.length;g++){e=p(d[g]);e.play()}}function b(){for(g=0;g<d.length;g++){e=p(d[g]);e.stop()}}function p(m,i){if(!o[m.id]){o[m.id]=new Media(m.src,l,k)}return o[m.id]}function l(){}function k(){}function f(i){RR.common.onDeviceReady(i)}return{saveSounds4Operation:c,preloadSaved:h,playSaved:j,pauseSaved:n,resumeSaved:a,stopSaved:b,onSoundDeviceReady:f}}();var soundJSWrap=function(){var d,h,p;function c(i){if(typeof(i)=="undefined"){return}d=[];for(h=0;h<i.length;h++){p=i[h];d.push({name:k(p.src),src:[p.src,p.src.replace(".mp3",".ogg")],instances:1,loop:p.loop})}}var m={};function k(r){var i=r.replace(/_/g,"$").replace(/\//g,"$s$").replace(/\./g,"$d$").replace(/:/g,"$c$");m[i]=r;return i}function j(i){if(typeof i=="function"){e(i);SoundJS.onSoundLoadComplete=function(s,t){var r=o(t);if(typeof(r)=="function"){r(m[t])}g(t)}}SoundJS.addBatch(d)}var q=[];function e(r){for(var s=0;s<d.length;s++){q.push({name:d[s].name,callback:r})}}function o(s){for(var r=0;r<q.length;r++){if(q[r].name==s){return q[r].callback}}}function g(s){for(var r=0;r<q.length;r++){if(q[r].name==s){q.splice(r,1)}}}function l(t,s,i,r){for(h=0;h<d.length;h++){p=d[h];SoundJS.stop(p.name);SoundJS.play(p.name,t,s,i||p.loop)}}function n(){for(h=0;h<d.length;h++){p=d[h];SoundJS.pause(p.name)}}function a(){for(h=0;h<d.length;h++){p=d[h];SoundJS.resume(p.name)}}function b(){for(h=0;h<d.length;h++){p=d[h];SoundJS.stop(p.name)}}function f(i){RR.common.onDeviceReady(i)}return{saveSounds4Operation:c,preloadSaved:j,playSaved:l,pauseSaved:n,resumeSaved:a,stopSaved:b,onSoundDeviceReady:f}}();RR.sound=function(){var g=typeof(Media)!="undefined"?phoneGapSound:soundJSWrap;var u,o;var k=[],r=[],n=[],l={};function x(s,i){if(typeof(s)=="undefined"){return}if(typeof s=="string"){s=[s]}for(u=0;u<s.length;u++){h(s[u],i)}}function h(s,i){if(s&&!k[s]){n.push({id:s,src:s,loop:i});k[s]=s;r.push(s);return s}}var f={};function b(A){if(typeof(A)=="undefined"){return}var s;for(s=0;s<n.length;s++){f[n[s].id]=s}var B=[];if(typeof A=="string"){A=[A]}for(s=0;s<A.length;s++){if(f[A[s]]===undefined){alert("Error: sound not found with id= "+A[s])}B.push(n[f[A[s]]])}return B}var c=[];function e(E,C,B){var A=[];for(var D=0;D<E.length;D++){var F=E[D];if(!l[F]){A.push(F)}}var s={ids:A,callback:C,loop:B};c.push(s)}function m(){for(var A=0;A<c.length;A++){var s=c[A];if(s.ids.length!=0){p(s.ids,s.callback,s.loop)}}}function p(F,A,s){var E=[];var B=[];var G=[];var D=v();if(!D.music&&!D.sound){return}for(var C=0;C<F.length;C++){if(!l[F[C]]){if(s){G.push(F[C])}else{B.push(F[C])}}}if(D.music){E=E.concat(G)}if(D.sound){E=E.concat(B)}if(!E.length){return}for(var C=0;C<E.length;C++){if(!l[E[C]]){l[E[C]]=true}}x(E,s);g.saveSounds4Operation(b(E));return g.preloadSaved(A)}function w(B,i,D,C,s){x(B,i);var A=v();if(!A.sound&&!A.music){return}if(!A.sound||!A.music){B=q(B,A.music);if(!B.length){return}}g.saveSounds4Operation(b(B));return g.playSaved(D,C,i,s)}function d(i){g.saveSounds4Operation(b(i));return g.pauseSaved()}function a(i){g.saveSounds4Operation(b(i));return g.resumeSaved()}function t(i){g.saveSounds4Operation(b(i));return g.stopSaved()}function j(){try{var i=q(r,true);t(i);i=q(r,false);t(i)}catch(s){}}function y(i){g.onSoundDeviceReady(i)}function q(s,B){var A=[];var i=b(s);for(u=0;u<i.length;u++){if(i[u].loop&&B||!i[u].loop&&!B){A.push(i[u].id)}}return A}function z(C,E){var B=v();var A,i;if(C!==undefined&&C!==null&&B.sound!=C){A=true;B.sound=C}if(E!==undefined&&E!==null){i=true;B.music=E}if(!A&&!i){return}localStorage.setItem("soundSettings",JSON.stringify(B));if(navigator&&navigator.userdefaults){navigator.userdefaults.saveSounds(B.sound,B.music)}var s=q(r,false);var D=q(r,true);var B=v();if(A&&!B.sound){t(s)}if(i){if(B.music){w(bgSoundsList.bg,true)}else{d(bgSoundsList.bg)}}}function v(){var i=localStorage.getItem("soundSettings");if(i){i=JSON.parse(i)}else{i={}}if(i.sound===undefined){i.sound=true}if(i.music===undefined){i.music=true}return i}return{preloadIfNeed:m,addToPreloadList:e,play:w,pause:d,resume:a,stop:t,stopAll:j,onSoundDeviceReady:y,getSettings:v,setSettings:z}}();window.addEventListener("load",function(){window.onunload=function(){sound.stopAll()}},false);;
RR.game=(function(){function w(A,y,z){if($.isFunction(z)){z()}RR.game.closeModal();setTimeout(function(){$("#game .screen.active").removeClass("active");$(A).addClass("active");o(A+" .avatar-wrapper");if($.isFunction(y)){y()}},0)}function h(y,B){$(".modal").hide();var z=$("#game .screen.active");if(z.length>0){var A=z.attr("modals");if(A){if(A.indexOf(y.replace(".",""))!=-1||A.indexOf("all")!=-1){$(y).show();if($.isFunction(B)){B()}}}}}function i(y){if(y!=null){$(y).hide()}else{$(".modal").hide()}}function b(){return RR.common.parseLocalStorage("games_list",[])}function m(y){if(typeof(y)=="object"&&y.length>0){localStorage.games_list=JSON.stringify(y)}else{delete localStorage.games_list}}function t(y){var A=b();for(var z=0;z<A.length;z++){if(A[z].id==y.id){A[z]=y;m(A);return}}}function k(y){var A=b();for(var z=0;z<A.length;z++){if(A[z].id==y){return A[z]}}return null}function v(y,z){var A=RR.common.parseLocalStorage("cotd",{});A[y]=z;localStorage.cotd=JSON.stringify(A)}function f(y){var z=RR.common.parseLocalStorage("cotd",{});return z[y]}function d(y){if(!("lobby" in RR.screens)){return}RR.screens.lobby.updateCOTD();if(!y){RR.game.showModal(".loading");console.log("set games menu to spinner")}RR.api.listGames(function(z){if(JSON.stringify(RR.game.getGamesList())==JSON.stringify(z)&&y){RR.screens.lobby.refreshScroll();return}console.log("set games list"+z.length);m(z);if(RR.screens.lobby&&!RR.hasOwnProperty("web")){RR.screens.lobby.renderGames(z)}RR.game.closeModal(".loading")},function(){if(!y){RR.screens.lobby.renderGames();RR.game.closeModal(".loading")}})}function j(){return RR.common.parseLocalStorage("user_data",{coins:0})}function p(y){if(RR.screens.lobby&&!RR.hasOwnProperty("web")){n(y.coins);$(".user-bonuses .bombs .count").text(y.bombs);$(".user-bonuses .timers .count").text(y.timers)}if("fb_uid" in y){RR.settings.loggedInViaFaceBook=true}return localStorage.user_data=JSON.stringify(y)}function n(y){if(typeof(y)=="undefined"||y==0||y=="null"){y=0}y=""+y;if(y.length>3){y=y.substring(0,y.length-3)+","+y.substring(y.length-3)}$(".user-bonuses .coins .count").html(y)}function o(z){$(z).each(function(A,B){y(B)});function y(C){var A=$(C);var E=$(C).find("img");var G=A.width();var F=A.height();var I=E.width();var H=E.height();if(!I||!H){return}if(I<=H){E.width(G);E.css("height","auto");H=E.height();var B=(H-F)/2;E.css("margin",-B+"px 0 0 0")}else{E.height(F);E.css("width","auto");I=E.width();var D=(I-G)/2;E.css("margin","0 0 0 -"+D+"px")}}}function s(){if(typeof(RR.abtesting)!="undefined"){RR.abtesting.setup()}$(".avatar-wrapper img").bind("load",function(){o($(this).parent())});$(".user-bonuses .coins").onpress(RR.screens["shop-coins"].run);$(".user-bonuses .bombs, .user-bonuses .timers").onpress(RR.screens["shop-items"].run);if(RR.common.isAndroid){$("#game").addClass("android")}if(RR.common.isFreeGame){$("#game").addClass("free")}if(!RR.settings.has_camera){$(".take-photo").hide()}function D(){$("#background").hide();setTimeout(function(){$("#background").show()},0)}$(window).one(D);if(RR.common.isiOS4&&RR.common.isiPad){setTimeout(D,5000)}if(RR.common.isiPhone){$("#background").width($(window).width()).height($(window).height())}function C(){var E=j();RR.api.setUser(E,p);if(E.email&&E.access_token&&E.uid){d()}else{if(!RR.settings.firstRun){FB.getLoginStatus(function(F){if(F.status==="connected"&&F.authResponse&&F.authResponse.accessToken){RR.settings.access_token=F.authResponse.accessToken;d()}else{RR.screens.login.run()}})}}}if(!RR.common.isDesktop){document.addEventListener("resume",C,false);if(localStorage["analytics.userid"]==null){RR.analytics.mpLogEvent("anonymous-load")}}if(RR.settings.uid==null){var A=j();RR.settings.uid=A.uid;RR.settings.access_token=A.access_token;RR.settings.email=A.email}z();y();B();$("div.find-friends .facebook .count").hide();function z(){$(".coming-soon").onpress(function(){RR.screens.lobby.run()});$(".purchase-more-coins.modal").onpress("button.yes",RR.screens["shop-coins"].run);$(".purchase-more-coins.modal").onpress("button.no",function(){RR.game.closeModal();return false});$(".photo-error.modal").onpress(function(){RR.screens.lobby.run();return false});$(".uncorrect-username.modal, .friend-must-register.modal, .unavailable-username.modal").onpress(function(){RR.game.closeModal(this);return false})}function y(){$(".checkbox-wrapper").onpress(function(){var H=!$(this).hasClass("checked");$(this).toggleClass("checked",H);var G=$(this).attr("name");if(G){var F=RR.common.parseLocalStorage("flags",{});F[G]=H;localStorage.flags=JSON.stringify(F)}});if("flags" in localStorage){var E=RR.common.parseLocalStorage("flags",{});$(".checkbox-wrapper").each(function(G,H){var F=$(H).attr("name");if(F&&E[F]!=undefined){$(H).toggleClass("checked",E[F])}else{$(H).toggleClass("checked",true)}})}else{$(".checkbox-wrapper").toggleClass("checked",true)}}function B(){RR.sound.addToPreloadList([u.click,u.fail,u.letter_drop,u.letter_pickup,u.success,u.explode,u.ticktok]);RR.sound.preloadIfNeed();$("#game").onpress("button, .click",function(E){RR.sound.play(RR.game.sfxSoundsList.click)})}}var e={win:"snd/win.mp3",lose:"snd/lose.mp3"};var u={success:"snd/success.mp3",fail:"snd/fail.mp3",letter_drop:"snd/letter_drop.mp3",letter_pickup:"snd/letter_pickup.mp3",click:"snd/click.mp3",explode:"snd/explode.mp3",ticktok:"snd/ticktok.mp3",};if(typeof(device)!="undefined"&&device.platform.toLowerCase()=="android"){var c="/android_asset/www/";for(var l in u){u[l]=c+u[l]}for(var l in e){e[l]=c+e[l]}}function a(y){return(!isNaN(y))?"http://graph.facebook.com/"+y+"/picture?type=large":"redesign-images/avatars/default.png"}function r(y){var A=$(y);var z=A.attr("defaultValue");A.val(z);A.unbind("blur focus");A.bind("blur",function(){if(this.value==""){this.value=z;$(this).addClass("default")}}).bind("focus",function(){if(this.value==z){this.value=""}$(this).removeClass("default")})}function g(y,D,B,E,z,A){var C={friend_uid:y,photo_id:B,display_name:RR.settings.user.display_name,};if(D!=null){C.friend_name=D}if(A){C.waiting_hidden=true}RR.api.createGame(C,E,z)}function q(C,D,F,z,B){console.log("createGames("+C+","+JSON.stringify(D));RR.game.showModal(".photo-processing");var y=[];function E(G){if(G==""||G==null){console.log("friend must register before the game appears");RR.screens.lobby.run();setTimeout(function(){RR.game.showModal(".friend-must-register",function(){setTimeout(RR.game.closeModal,2000)})},10);return false}console.log("createGameCallback("+JSON.stringify(G));var H=RR.game.getGamesList();H.push(G);RR.game.setGamesList(H);y.push(G);if(y.length==D.length){console.log("createGameCallback DONE calling callback");RR.screens.lobby.renderGames();F(y)}}for(var A in D){g(D[A],null,C,E,z,B)}}var x=false;return{showScreen:w,setup:s,showModal:h,closeModal:i,getGamesList:b,setGamesList:m,updateCoins:n,reloadGamesList:d,saveGame:t,getGame:k,getUserData:j,setUserData:p,sfxSoundsList:u,bgSoundsList:e,getUserAvatarUrl:a,resizeAvatarImages:o,toogleInputDefaultValue:r,createGames:q,paused:x,setCOTD:v,getCOTD:f}})();;
var webkit_tools={$:function(a){if(typeof(a)=="string"){return document.getElementById(a)}return a},extend:function(d,c){for(var e in c){d[e]=c[e]}return d},empty:function(){},compact:function(e){var c=[];var d=e.length;for(var f=0;f<d;f++){if(e[f]!==null){c.push(e[f])}}return c},getCalculatedStyle:function(a,b){var c="";if(document.defaultView&&document.defaultView.getComputedStyle){c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)}else{if(a.currentStyle){b=b.replace(/\-(\w)/g,function(d,e){return e.toUpperCase()});c=a.currentStyle[b]}}return c},bindAsEventListener:function(c,b){var a=c;return function(d){a.call(b,d||window.event)}},cumulativeOffset:function(b){var a=0,c=0;do{a+=b.offsetTop||0;c+=b.offsetLeft||0;if(b.offsetParent==document.body){if(b.style.position=="absolute"){break}}b=b.offsetParent}while(b);return{left:c,top:a}},getDimensions:function(c){var g=c.style.display;if(g!="none"&&g!=null){return{width:c.offsetWidth,height:c.offsetHeight}}var b=c.style;var f=b.visibility;var d=b.position;var a=b.display;b.visibility="hidden";if(d!="fixed"){b.position="absolute"}b.display="block";var h=c.clientWidth;var e=c.clientHeight;b.display=a;b.position=d;b.visibility=f;return{width:h,height:e}},hasClassName:function(a,b){var c=a.className;return(c.length>0&&(c==b||new RegExp("(^|\\s)"+b+"(\\s|$)").test(c)))},addClassName:function(a,b){if(!this.hasClassName(a,b)){a.className+=(a.className?" ":"")+b}return a},removeClassName:function(a,b){a.className=this.strip(a.className.replace(new RegExp("(^|\\s+)"+b+"(\\s+|$)")," "));return a},strip:function(a){return a.replace(/^\s+/,"").replace(/\s+$/,"")}};var webkit_droppables=function(){this.initialize=function(){this.droppables=[];this.droppableRegions=[]};this.add=function(a,c){a=webkit_tools.$(a);var b={accept:[],hoverClass:null,onDrop:webkit_tools.empty,onOver:webkit_tools.empty,onOut:webkit_tools.empty,root:a};b=webkit_tools.extend(b,c||{});this.droppables.push({r:a,p:b})};this.remove=function(a){a=webkit_tools.$(a);var c=this.droppables;var b=c.length;while(b--){if(c[b].r==a){c[b]=null;this.droppables=webkit_tools.compact(c);return true}}return false};this.prepare=function(){var e=this.droppables;var a=e.length;var c=[];var b=null;while(a--){b=e[a].r;if(b.style.display!="none"){c.push({i:a,size:webkit_tools.getDimensions(b),offset:webkit_tools.cumulativeOffset(b)})}}this.droppableRegions=c};this.finalize=function(a,h,c,f){var g=this.isOver(a,h);var b=this.maxZIndex(g);var d=this.process(b,c);if(d){this.drop(b,c,f)}this.process(-1,c);return d};this.check=function(a,e,c){var d=this.isOver(a,e);var b=this.maxZIndex(d);return this.process(b,c)};this.isOver=function(k,j){var h=this.droppableRegions;var g=h.length;var e=[];var b=0;var c=0;var f=0;var a=0;var d=0;while(g--){b=h[g];d=b.offset.top;a=d+b.size.height;if((j>d)&&(j<a)){f=b.offset.left;c=f+b.size.width;if((k>f)&&(k<c)){e.push(b.i)}}}return e};this.maxZIndex=function(f){var e=this.droppables;var a=f.length;var b=-1;var c=-100000000;var g=0;while(a--){g=parseInt(e[f[a]].r.style.zIndex||0);if(g>c){c=g;b=f[a]}}return b};this.process=function(a,c){if(this.lastIndex!=a){if(this.lastIndex!=null){var f=this.droppables[this.lastIndex];var e=f.p;var b=f.r;if(e.hoverClass){webkit_tools.removeClassName(b,e.hoverClass)}e.onOut();this.lastIndex=null;this.lastOutput=false}if(a!=-1){var f=this.droppables[a];var e=f.p;var b=f.r;if(this.hasClassNames(c,e.accept)){if(e.hoverClass){webkit_tools.addClassName(b,e.hoverClass)}e.onOver();this.lastIndex=a;this.lastOutput=true}}}return this.lastOutput};this.drop=function(a,b,c){if(a!=-1){this.droppables[a].p.onDrop(b,c)}};this.hasClassNames=function(b,c){var a=c.length;if(a==0){return true}while(a--){if(webkit_tools.hasClassName(b,c[a])){return true}}return false};this.initialize()};webkit_drop=new webkit_droppables();var webkit_draggable=function(a,b){this.initialize=function(c,e){this.root=webkit_tools.$(c);var d={scroll:false,revert:false,handle:this.root,zIndex:1000,onStart:webkit_tools.empty,onEnd:webkit_tools.empty};this.p=webkit_tools.extend(d,e||{});d.handle=webkit_tools.$(d.handle);this.prepare();this.bindEvents()};this.prepare=function(){var c=this.root.style;if(webkit_tools.getCalculatedStyle(this.root,"position")!="absolute"){c.position="relative"}c.top=c.top||"0px";c.left=c.left||"0px";c.right="";c.bottom="";c.zIndex=c.zIndex||"0"};this.bindEvents=function(){var c=this.p.handle;this.ts=webkit_tools.bindAsEventListener(this.touchStart,this);this.tm=webkit_tools.bindAsEventListener(this.touchMove,this);this.te=webkit_tools.bindAsEventListener(this.touchEnd,this);c.addEventListener("touchstart",this.ts,false);c.addEventListener("touchmove",this.tm,false);c.addEventListener("touchend",this.te,false)};this.destroy=function(){var c=this.p.handle;c.removeEventListener("touchstart",this.ts);c.removeEventListener("touchmove",this.tm);c.removeEventListener("touchend",this.te)};this.set=function(c,d){this.p[c]=d};this.touchStart=function(g){var i=this.p;var f=this.root;var c=f.style;var e=g.targetTouches[0];touchX=e.pageX;touchY=e.pageY;c.top=this.root.style.top||"0px";c.left=this.root.style.left||"0px";c.bottom=null;c.right=null;c.webkitTransform="translate3d(0,0,0)";var d=webkit_tools.cumulativeOffset(f);var h=this.getPosition();i.rx=h.x;i.ry=h.y;i.tx=touchX;i.ty=touchY;i.z=parseInt(this.root.style.zIndex);c.zIndex=i.zIndex;webkit_drop.prepare();i.onStart(g);this.lastCurX=null;this.lastCurY=null};this.touchMove=function(d){d.preventDefault();d.stopPropagation();var f=this.p;var c=this.root;var h=c.style;var k=d.targetTouches[0];if(k==null){return}var g=k.pageX;var e=k.pageY;var j=g-f.tx;var i=e-f.ty;h.webkitTransform="translate3d("+j+"px,"+i+"px,0)";if(f.scroll){s=this.getScroll(g,e);if((s[0]!=0)||(s[1]!=0)){window.scrollTo(window.scrollX+s[0],window.scrollY+s[1])}}webkit_drop.check(g,e,c);this.lastCurX=g;this.lastCurY=e};this.touchEnd=function(e){var d=this.root;var f=this.p;var g=webkit_drop.finalize(this.lastCurX,this.lastCurY,d,e);var c=d.style;c.webkitTransform="translate3d(0,0,0)";if(((f.revert)&&(!g))||(f.revert==="always")){c.top=(f.ry+"px");c.left=(f.rx+"px")}if((Math.max(Math.abs(this.lastCurX-f.tx),Math.abs(this.lastCurY-f.ty))>5)&&(this.lastCurX!=null)&&(this.lastCurY!=null)){e.stopPropagation()}d.style.zIndex=this.p.z;this.p.onEnd(e)};this.getPosition=function(){var c=this.root.style;return{x:parseInt(c.left||0),y:parseInt(c.top||0)}};this.getScroll=function(f,e){var d=window.scrollX;var c=window.scrollY;var l=window.innerWidth;var k=window.innerHeight;var j=10;var h=100;var i=0;var g=0;if(e-c<h){g=-j}else{if((c+k)-e<h){g=j}}if(f-d<h){i=-j}else{if((d+l)-f<h){i=j}}return[i,g]};this.initialize(a,b)};var webkit_click=function(a,b){this.initialize=function(c,e){var d={onClick:webkit_tools.empty};this.root=webkit_tools.$(c);this.p=webkit_tools.extend(d,e||{});this.bindEvents()};this.bindEvents=function(){var c=this.root;this.ts=webkit_tools.bindAsEventListener(this.touchStart,this);this.tm=webkit_tools.bindAsEventListener(this.touchMove,this);this.te=webkit_tools.bindAsEventListener(this.touchEnd,this);c.addEventListener("touchstart",this.ts,false);c.addEventListener("touchmove",this.tm,false);c.addEventListener("touchend",this.te,false);this.bound=true};this.touchStart=function(){this.moved=false;if(this.bound==false){this.root.addEventListener("touchmove",this.tm,false);this.bound=true}};this.touchMove=function(){this.moved=true;this.root.removeEventListener("touchmove",this.tm);this.bound=false};this.touchEnd=function(){if(this.moved==false){this.p.onClick()}};this.setEvent=function(c){if(typeof(c)=="function"){this.p.onClick=c}};this.unbind=function(){var c=this.root;c.removeEventListener("touchstart",this.ts);c.removeEventListener("touchmove",this.tm);c.removeEventListener("touchend",this.te)};this.initialize(a,b)};;
RR.drag=(function(){function b(d){var c={selector:null,onStart:function(){},onStop:function(){},onDrag:function(){}};for(var e in d){if(d.hasOwnProperty(e)&&d[e]){c[e]=d[e]}}if(c.selector!=null){$(c.selector).each(function(h,j){var g=$(j).attr("id");var i=$("#"+g).parent();var f=new webkit_draggable(g,{revert:true,scroll:true,onStart:function(k){i.addClass("dragging");c.onStart(k)},onEnd:function(k){i.removeClass("dragging");c.onStop(k)}})})}}function a(e){var d={selector:null,onDrop:function(){}};for(var f in e){if(e.hasOwnProperty(f)&&e[f]){d[f]=e[f]}}if(d.selector!=null){var g=$(d.selector).length;for(var f=0;f<g;f++){var c=$($(d.selector)[f]).attr("id");webkit_drop.add(c,{onDrop:function(h){if($.isFunction(d.onDrop)){d.onDrop($(h).attr("id"),$(this.root).attr("id"))}},hoverClass:"drophover"})}}}return{makeDraggable:b,makeDroppable:a}})();;
ZA={idx:0};RR.animator=function(selector){Controller=function(){return{scenes:{},scenesArray:[],currentSceneID:-1,olElement:null,events:{},useOrmma:false,prefix:"",setConfig:function(configData){this.events=configData.events;this.prefix=configData.cssPrefix;this.projectActions=configData.projectActions;this.userData={};this.olElement=document.querySelector("#"+configData.parentId+" ol");var liElements=this.olElement.children;this.sceneIdByName={};var scene;for(var i=0;i<configData.scenes.length;i++){scene=configData.scenes[i];scene.element=liElements[i];this.scenes[scene.id]=scene;this.scenesArray.push(scene);if(scene.name){this.sceneIdByName[scene.name]=scene.id}}this.setupListeners();this.startSceneByID=this.startSceneById;if(this.projectActions.init){this.projectActions.init.call(this.userData,this)}this.startSceneById(this.scenesArray[0].id)},runningAnimationCount:0,browser:"webkit",setupListeners:function(){var me=this;var eventName="webkitAnimationEnd";if(document.body.style.MozAnimationName!==undefined){eventName="animationend";this.browser="moz"}this.olElement.addEventListener(eventName,function(){me.onAnimationEnd()},false);function addMousemoveListenerTo(scene){scene.element.addEventListener("mousemove",function(event){scene.mousemoveAction.call(me.userData,me,event)},false)}var scene;for(var i=0;i<this.scenesArray.length;i++){scene=this.scenesArray[i];if(scene.mousemoveAction){addMousemoveListenerTo(scene)}}function addListenerTo(element,eventType,aFunction){element.addEventListener(eventType,function(event){aFunction.call(me.userData,me,event)},false)}var element,event,type;for(var i=0;i<this.events.length;i++){event=this.events[i];var type=event.type;if(this.browser==="moz"&&event.mozType){type=event.mozType}element=document.getElementById(event.id);addListenerTo(element,type,event.handler)}},onAnimationEnd:function(){this.runningAnimationCount--;if(this.runningAnimationCount===0){var waitTime=this.scenes[this.currentSceneID].endWaitTime;if(waitTime){var me=this;setTimeout(function(){me.onSceneFinish()},waitTime*1000)}else{this.onSceneFinish()}}},forceRefresh:function(sceneID){this.forceRefreshValue=this.scenes[sceneID].element.offsetHeight},startSceneByName:function(name){var id=this.sceneIdByName[name];if(id!==undefined){this.startSceneById(id)}},startSceneById:function(sceneID){var restart=false;if(sceneID===this.currentSceneID){restart=true}else{if(this.currentSceneID!==-1){this.scenes[this.currentSceneID].element.setAttribute("class","")}}this.runningAnimationCount=this.scenes[sceneID].animationCount;this.currentSceneID=sceneID;var nextScene=this.scenes[sceneID];if(restart||this.browser==="moz"){nextScene.element.setAttribute("class","run restart");this.forceRefresh(sceneID)}nextScene.element.setAttribute("class","run");if(!restart&&this.useOrmma){this.ormmaNextScene(nextScene)}if(nextScene.startAction){nextScene.startAction.call(this.userData,this)}if(nextScene.animationCount===0){this.onSceneFinish()}},replayScene:function(){this.startSceneById(this.currentSceneID)},onSceneFinish:function(){if(this.scenes[this.currentSceneID].endAction){this.scenes[this.currentSceneID].endAction.call(this.userData,this)}},goToNextScene:function(){var nextIndex=this.scenesArray.indexOf(this.scenes[this.currentSceneID])+1;var nextScene;if(nextScene=this.scenesArray[nextIndex]){this.startSceneById(nextScene.id)}},goToPreviousScene:function(){var previousIndex=this.scenesArray.indexOf(this.scenes[this.currentSceneID])-1;var nextScene;if(previousIndex>=0){this.startSceneById(this.scenesArray[previousIndex].id)}},goToURL:function(aURL){document.location.href=aURL},getElementById:function(animatorId){var cssId=this.prefix+animatorId;return document.getElementById(cssId)}}};var idle_id=0;var setIdle=function(iid){idle_id=iid};var kill=function(){$(selector).html("")};var hide=function(){play(0)};var idle=function(){play(idle_id)};var init=function(url,callback){console.log("animator.init("+url);ZA[selector]={};inInit=true;configData={};function reworkHtml(text){var imgdir=url.substr(0,url.lastIndexOf("/"));var i,t=text;configData=t.match(/configData = \{(\n|.|\r)*?\};/);if(typeof(configData)=="object"){configData=configData[0]}t=t.replace(/<script(.|\n)*<\/script>/,"");t=t.replace(/<\/?(head|body|html|meta).*?>| class="AN-Object"| id="ext-gen\d*"|border:1px .*;|overflow:.*;/g,"");t=t.replace(/assets/g,imgdir+"/assets");return t}function setupDiv(t){ZA.idx++;t=t.replace(/an-(obj|anim)/g,"an"+ZA.idx+"-$1");$(selector).hide().html(t).show();eval(configData.replace(/an-anim/,"an"+ZA.idx+"-anim"));ZA[selector].Controller=new Controller;ZA[selector].Controller.setConfig(configData);inInit=false;if(typeof(callback)=="function"){callback()}}$.ajax({type:"GET",url:url,success:function(data){var html=reworkHtml(data);setupDiv(html)}})};var currentScene;var play=function(sceneid,callback){if(inInit||sceneid<0){return}currentScene=sceneid;$(selector).find("li.run").attr("class","");if(sceneid==0){$(selector).hide();return}else{$(selector).show()}var xid=ZA[selector].Controller.scenesArray[sceneid-1].id;var t=null;var duration=Math.round(ZA[selector].Controller.scenes[xid].lastKeyframeTime?ZA[selector].Controller.scenes[xid].lastKeyframeTime*1000:ZA[selector].Controller.scenes[xid].duration);var myEndAction=function(){if(t!=null){clearTimeout(t)}ZA[selector].Controller.scenes[xid].endAction=null;if(typeof(callback)=="function"){callback()}if(currentScene==sceneid){idle()}};t=setTimeout(function(){myEndAction=null;if(typeof(callback)=="function"){callback()}if(ZA[selector].Controller.scenes[xid].duration!=Infinity&&currentScene==sceneid){idle()}},Math.round(duration+100));ZA[selector].Controller.scenes[xid].endAction=function(){if(myEndAction!=null){myEndAction()}};ZA[selector].Controller.startSceneByID(xid)};return{init:init,setIdle:setIdle,play:play,idle:idle,kill:kill,hide:hide}};;
RR.guessingLogger=(function(){var c=[];var b=function(){return JSON.stringify(c)};var d=function(){c=[]};var a=function(e,f){switch(e){case"start":c.push({name:e,answer:f.answer,letters:f.letters,time:f.time,bombs:f.bombs,timers:f.timers});break;case"move_letter":c.push({name:e,letter_id:f.letter_id,slot_id:f.slot_id,time:f.time});break;case"shuffle":c.push({name:e,letters:f.letters,time:f.time});break;case"recall":c.push({name:e,time:f.time});break;case"timer":c.push({name:e,time:f.time,timers:f.timers});break;case"bomb":c.push({name:e,time:f.time,bombs:f.bombs,caption_slots_ids:f.caption_slots_ids});break;case"win":c.push({name:e,time:f.time,reward:f.reward,roundTime:f.roundTime});break;case"lose":c.push({name:e,time:f.time,reward:f.reward,roundTime:f.roundTime});break}};return{getLog:b,emptyLog:d,recordLog:a}})();;
RR.tilesController=(function(){function c(g,f){var h=$(g);h.empty();var e="";for(var d=0;d<f;d++){e+='<div class="blue-tile"><div class="blue-tile-inner"></div></div>'}h.html(e)}function b(k,j,f,h){var d=$(k).find(".blue-tile").not(".fade").not(".hide");j=(j<=d.length)?j:d.length;var g=0;a(k,h);function e(){g++;a(k,h);if(g<j){if(f==0){e()}else{setTimeout(e,f)}}}e()}function a(g,f){var d=$(g).find(".blue-tile").not(".fade").not(".hide");var e=d[parseInt(Math.random()*d.length)];if(RR.common.isAndroid||f){$(e).addClass("hide")}else{if(Modernizr.keyframe){if(!RR.common.isiOS){$(e).one("webkitAnimationEnd animationend",function(){$(this).addClass("hide")})}$(e).addClass("fade")}else{$(e).animate({opacity:0},500,"linear",function(){$(this).addClass("hide")})}}}return{addTiles:c,openFewRandomTiles:b,openTile:a}})();;
RR.screens.lobby=(function(){var m=RR.game,k=true;var c="#game-lobby-screen";var j=$(c);var l={pull:"pull",release:"release",update:"update",none:"none"};var g={pull:0,release:-140,update:-30};var d=l.pull;var b=new iScroll("lobby-scroll",{hScrollbar:false,hScroll:false,vScrollbar:false,vScroll:true,bounce:false,onScrollMove:function(n){if((this.y>=g.pull)&&(d==l.pull)){j.find("#refresh-control").attr("class",l.release);d=l.release}},onScrollEnd:function(n){if((this.y>g.release)&&(d!=l.none)&&j.hasClass("active")){if(d!=l.update){if(d==l.release){this.scrollTo(0,g.update,200);j.find("#refresh-control").attr("class",l.update);d=l.update;setTimeout(function(){RR.game.reloadGamesList(true)},200)}else{this.scrollTo(0,g.release,200)}}else{if(this.y>g.update){this.scrollTo(0,g.update,200)}}}}});function a(){if(k){k=false;j.find(".find-friends .facebook").onpress(function(){RR.fb.doWithFacebook(function(){RR.screens["get-photo"].run(function(u){RR.fb.wallPost(u.id,"Let's Play What The Photo?  Click To Guess My Photo!",f)},true)})});j.find(".find-friends .twitter").hide();j.find(".find-friends .facebook").css("width","100%");j.find(".find-friends .facebook .text").text("Share via Facebook");if(window.plugins&&window.plugins.twitter){window.plugins.twitter.isTwitterAvailable(function(u){if(u){RR.screens.won.hasTwitter=true;j.find(".find-friends .twitter").show();j.find(".find-friends .facebook").attr("style","");j.find(".find-friends .facebook .text").text("via Facebook");j.find(".find-friends .twitter").onpress(function(){RR.screens["get-photo"].run(function(v){RR.fb.tweet(v.id,"I'm playing What The Photo? Click to guess my photo!",f)},true)})}})}j.find(".find-friends .addressbook").onpress(RR.screens["select-friends"].run);function n(){RR.game.showModal(".loading");RR.api.getRandomPhoto(function(u){RR.screens.board.runPhoto(u,function(){RR.analytics.logEvent("flow-random-play");RR.screens["get-photo"].run(function(v){RR.game.createGames(v.id,[u.author_uid],function(w){RR.analytics.logEvent("flow-random-reply");RR.api.setPhotoData(v.id,{random_play_ok:true,random_play:true,});n()},function(){f();m.showModal(".photo-error")},true)},false,true)})})}j.find(".your-move .random-opponent").onpress(function(){RR.analytics.logEvent("flow-random-start");n()});j.find(".new-game, .add-new-game").onpress(function(){RR.screens["get-photo"].run()});j.find(".get-items button.shop").onpress(RR.screens["shop-items"].run);j.find("button.logout").onpress(function(){var u=RR.game.getUserData();delete u.access_token;RR.game.setUserData(u);RR.photo.deleteThumbnails();RR.settings.loggedInViaFaceBook=false;FB.getLoginStatus(function(v){if(v.status==="connected"){FB.logout(function(){RR.screens.login.run()})}else{RR.screens.login.run()}});return false});$(window).resize(function(){t();b.refresh()});j.find(".your-move").onpress("li",r);j.find(".your-move, .their-move").onpress("button",o);j.find(".their-move").onpress("button",q);j.find(".their-move, .your-move").on("swipeRight swipeLeft",s);j.find(".your-move, .their-move").onpress(".message",p,true);RR.game.showScreen(c,t);function r(u){if(!$(this).hasClass("quit")&&!$(this).hasClass("delete")&&!$(u.srcElement.parentElement).hasClass("message")){RR.chat.chatOpenGameId=this.getAttribute("data-game_id");RR.screens.board.run(this.getAttribute("data-game_id"));return false}}function o(){var x=$(this).parent("li");if(x.hasClass("quit")||x.hasClass("delete")){x.remove();var v=this.getAttribute("data-game_id");RR.api.deleteGame(v);var w=RR.game.getGamesList();for(var u=0;u<w.length;u++){if(w[u].id==v){w.splice(u,1);break}}RR.game.setGamesList(w);games=w;if(j.find(".their-move li").length==0){j.find(".their-move").hide()}if(j.find(".your-move li").length==0){j.find(".no-challenges").show();j.find(".your-move ul").hide()}b.refresh();return false}}function q(){var v=$(this).parent("li");if(v.hasClass("nudge")){v.removeClass("nudge");var u=this.getAttribute("data-game_id");RR.api.nudgeGame(u);return false}}function s(v){var u=(v.target.tagName.toUpperCase()==="LI")?$(v.target):$(v.target).parents("li");if(u.hasClass("quit")||u.hasClass("delete")){return}var w=u.attr("class");u.attr("class","");u.addClass("delete").addClass("list-item");$("body").onpress(function(){u.attr("class",w);$("body").offpress()})}function p(){RR.screens.chatroom.run($(this).parent("li").attr("data-game_id"));return false}function t(){var y=$(window).height();var v=j.find(".header").height();var u=Math.abs(j.find("#lobby-scroll").css("margin-top").split("px")[0]);var w=y-v+u;var x=j.find("#refresh-control").height();j.find("#lobby-scroll").height(w);j.find("#lobby-scroll>*").css("min-height",w+x+"px")}AdSupport.preloadInterstitialAd(function(){console.log("preloading")})}}function i(){b.refresh();if(d!=l.none){d=l.pull;b.scrollTo(0,g.release,0);j.find("#refresh-control").attr("class",l.pull)}else{j.find("#refresh-control").attr("class",l.none)}}function h(){var n=j.find(".day-challenge");RR.api.getCOTD(function(o){if(RR.game.getCOTD(o.id)==undefined){n.offpress();n.show().onpress(function(){RR.screens.board.runPhoto(o,null,true);return false})}else{n.hide()}},function(){n.hide()})}function e(p){if(typeof(p)=="undefined"){p=RR.game.getGamesList()}RR.game.updateCoins(RR.game.getUserData().coins);h();p.sort(function(I,H){if(I.active_uid!=H.active_uid){return I.active_uid==RR.settings.uid?-1:1}return H.updated_date-I.updated_date});var F="",y="";RR.games={};var w=0;var t=RR.game.getUserData();if(p.length>0){for(var A=0;A<p.length;A++){RR.games[p[A].id]=p[A];var v=p[A].active_uid==RR.settings.uid;var o=v?p[A].waiting_uid:p[A].active_uid;var s=v?p[A].waiting_name:p[A].active_name;if(v){w++}var C="";var B=(new Date()).getTime();var x=p[A].updated_date;if(p[A].deleted){C="quit";var n="#game"+p[A].id+" .message";$(n).hide()}else{if(v){C="play"}else{var q=p[A].last_nudge_date;var r=86400000;if(((B-x)>r)&&(!q||(B-q)>r)){C="nudge"}}}var G=p[A].round_number;if(p[A].previous_round_number!=null&&v&&p[A].current_round!=undefined&&p[A].current_round.replay==undefined){G=p[A].previous_round_number}var E=p[A].chat_messages;var z=(E)?E.length:0;var u=(z)?"":"showgrey";if(RR.chat.countMessagesByThem(p[A])>RR.chat.getReadMessages(p[A].id)&&E[z-1].author_uid!=t.uid){u="active"}if(v){F+='<li id="game'+p[A].id+'" class="list-item click '+C+'" data-game_id="'+p[A].id+'"><div class="round text-shadow">'+G+'</div><div class="avatar-wrapper"><img class="avatar" src="'+RR.game.getUserAvatarUrl(o)+'" /></div><div class="user-text"><div class="user-name">'+s+'</div><div class="whose-turn"><span class="move">Your move!</span><span class="quit">They quit</span></div></div><div class="last-played-time"><div>Last played:</div><div><span class="time">'+D(B-x)+'</span><span> ago</span></div><div class="arrow"></div></div><button data-game_id="'+p[A].id+'"></button><div class="message '+u+'"><span>'+z+"</span></div></li>"}else{y+='<li id="game'+p[A].id+'" class="list-item '+C+' " data-game_id="'+p[A].id+'"><div class="round text-shadow">'+G+'</div><div class="avatar-wrapper"><img class="avatar" src="'+RR.game.getUserAvatarUrl(o)+'" /></div><div class="user-text"><div class="user-name">'+s+'</div><div class="whose-turn"><span class="move">Their move</span><span class="quit">They quit</span></div></div><div class="last-played-time"><div>Last played:</div><div><span class="time">'+D(B-x)+'</span><span> ago</span></div></div><button data-game_id="'+p[A].id+'"></button><div class="message '+u+'"><span>'+z+"</span></div></li>"}}}function D(I){var L=I/1000;var K=Math.round(L/604800);if(K>1){return K+" weeks"}var N=Math.round(L/86400);if(N>1){return N+" days"}var H=Math.round(L/3600);if(H>1){return H+" hours"}var J=Math.round(L/60);if(J>1){return J+" mins"}var M=Math.round(L);M=(M>0)?M:1;return M+" secs"}if(F==""){j.find(".no-challenges").show();j.find(".your-move ul").hide()}else{j.find(".no-challenges").hide();j.find(".your-move ul").show().html(F)}if(y==""){j.find(".their-move").hide()}else{j.find(".their-move").show();j.find(".their-move ul").html(y)}j.find("img.avatar").on("load",function(){RR.game.resizeAvatarImages($(this).parents(".avatar-wrapper"))});i();j.one("touchstart",i);console.log("Test list rendered");Badge.set(w)}function f(){a();RR.game.showScreen(c,function(){setTimeout(i,0)});AdSupport.disableAdBanner(0)}return{run:f,renderGames:e,refreshScroll:i,updateCOTD:h}})();;
RR.screens.board=(function(){var ad=RR.settings,B,L="test",ap=parseInt(ad.baseReward),z,t,aq,S=null,ae=true,x=0,y=false,ag=false,at=false,M=false;onRoundComplete=null;var H=null;var A=3000;var r;var ak="#game-board-screen";var O=$(ak);var d={won:"won",lost:"lost",failed:"failed",none:""};var F={header:"header",middle:"middle",footer:"footer",all:"block",none:""};function af(){if(ae){ae=false;O.find("#answer-tiles").onpress(".button",function(){W($(this));RR.sound.play(RR.game.sfxSoundsList.letter_pickup)});O.find("#game-tiles").onpress(".button",function(){g($(this));RR.sound.play(RR.game.sfxSoundsList.letter_pickup)});O.find("#shuffle-tiles").onpress(function(){Y()});O.find("#reset-tiles").onpress(function(){ac()});O.find("#message").onpress(function(){RR.chat.chatSource="game";D()});O.find("#pass").onpress(function(){if(!y){ar()}else{H.playLast()}});O.find("#game-board-replay-preload").bind("load",function(){console.log("Test replay image loaded");O.find("#game-board-preload").attr("src",S.current_round.photo.image_url)});O.find("button.bomb").onpress(function(){var aw=RR.game.getUserData();if(aw.bombs>0&&!n){e();RR.analytics.logEvent("goods-consume-bomb");aw.bombs=aw.bombs-1;RR.game.setUserData(aw);au()}},true);O.find("button.timer").onpress(function(){var aw=RR.game.getUserData();if(aw.timers>0&&!Z){w();RR.analytics.logEvent("goods-consume-timer");aw.timers=aw.timers-1;RR.game.setUserData(aw);console.log("new timers = "+RR.game.getUserData().timers);au()}},true);$(document).bind("keydown",G)}}function j(){ag=true;RR.chat.inGame=true;Z=false;n=false;if(!RR.common.isDesktop){RR.game.closeModal(".board-loading");clearTimeout(aq)}z=setTimeout(function(){I();if(y){s([F.middle,F.footer])}else{au();s(F.none);if(typeof(RR.guessingLogger)!="undefined"){RR.guessingLogger.recordLog("start",{answer:L,letters:b(),time:new Date().getTime(),bombs:RR.game.getUserData().bombs,timers:RR.game.getUserData().timers})}}},500)}function R(){clearTimeout(z);clearTimeout(t);clearTimeout(aq);H=null;O.find("#game-board").unbind("load");if(typeof(RR.guessingLogger)!="undefined"){RR.guessingLogger.emptyLog()}}function am(ay,aB){var az=RR.guessingLogger.getLog();ay.current_round.replay=az;ay.current_round.score=aB;RR.game.saveGame(ay);aA(ay.current_round.id,aB,az);if(aB>0){var ax=RR.game.getUserData();ax.coins+=aB;RR.game.setUserData(ax)}RR.analytics.logEvent("flow-round-complete",{score:aB});function aA(aC,aE,aD){if(M){RR.api.completePhoto(ay.current_round.photo.id,aE,aD,aw);if(at){RR.game.setCOTD(S.current_round.photo.id,true)}}else{if(typeof(aC)!="undefined"){RR.api.completeRound(aC,aE,aD,aw,function(){setTimeout(aA,10000)})}}if(aE>0){if(typeof(iRate)=="oject"){iRate.rateFirstTime(RR.settings.uid)}}}function aw(){if(Z||n){RR.api.useItems(n?1:0,Z?1:0,function(aC){RR.game.setUserData(aC)})}}}function au(ay,ax){if(!y){var aw=RR.game.getUserData();ay=aw.bombs;ax=aw.timers}l(ay);E(ax)}function D(){RR.game.paused=true;RR.chat.chatSource=="game";if(RR.chat.chatOpen){RR.screens.chatroom.show()}else{RR.chat.chatOpen=true;RR.screens.chatroom.run(RR.chat.chatOpenGameId)}}function l(aw){O.find("button.bomb").toggleClass("disabled",(aw<=0)||n).text(aw)}function E(aw){O.find("button.timer").toggleClass("disabled",(aw<=0)||Z).text(aw)}function I(){if(!RR.game.paused){if(ap>0&&z){x++;if(!Z){ap--;O.find("#reward").text(ap);k()}z=setTimeout(I,y?RR.settings.replayDelay:1000);if(H!=null&&y){H.playNext()}}else{if(!y&&!Z){ar()}}}else{z=setTimeout(I,1000)}}function k(){RR.tilesController.openTile("#tiles-container .inner");if(Z){for(var aw=0;aw<20;aw++){RR.tilesController.openTile("#tiles-container .inner")}t=setTimeout(k,50)}}function N(){var aw=O.find("#game-board");s(F.all);clearTimeout(z);RR.sound.play(RR.game.sfxSoundsList.success);O.find("#tiles-container .blue-tile").addClass("hide");O.find("#reward").text(ap);O.hide();K("#answer-tiles .button");if(!y){O.find("#won-notification h3").text("You got it!");if(RR.hasOwnProperty("web")&&RR.web.round_id){S.current_round.id=RR.web.round_id}if((typeof(S.current_round.id)!="undefined")||M){RR.guessingLogger.recordLog("win",{roundTime:x,reward:ap,time:new Date().getTime()});am(S,ap);setTimeout(function(){RR.screens.won.run(S.id,S.waiting_name,ap,c,at,y);R()},A)}else{setTimeout(function(){RR.screens.won.run(S.waiting_name,ap,x,y)},A)}}else{O.find("#won-notification h3").text("They got it!");J()}U(d.won);O.show()}function ar(){ap=0;s(F.all);clearTimeout(z);O.find("#reward").text(ap);J();if(typeof navigator.notification!="undefined"){navigator.notification.vibrate(1000)}RR.sound.play(RR.game.sfxSoundsList.fail);O.hide();O.find("#tiles-container .blue-tile").addClass("hide");if(!y){O.find("#lost-notification h3").text("Uh-oh, you lost!");if(RR.hasOwnProperty("web")&&RR.web.round_id){S.current_round.id=RR.web.round_id}if(typeof(S.current_round.id)!="undefined"||M){RR.guessingLogger.recordLog("lose",{time:new Date().getTime(),roundTime:x,reward:ap});am(S,0);setTimeout(function(){RR.screens.lost.run(S.id,S.waiting_name,true,c,at);R()},A)}else{setTimeout(function(){RR.screens.lost.run()},A)}}else{O.find("#lost-notification h3").text("They lost!")}U(d.lost);O.show()}function c(){if(M){if(onRoundComplete){onRoundComplete()}else{if(at){ax()}else{aw()}}}else{ay()}function ax(){if(RR.settings.firstRun){RR.login.checkLogin()}else{aw()}}function aw(){RR.screens.lobby.run();RR.screens.lobby.renderGames()}function ay(){RR.screens["get-photo"].run(S.id)}}function aa(){U(d.failed);RR.sound.play(RR.game.sfxSoundsList.fail);if(typeof navigator.notification!="undefined"){navigator.notification.vibrate(1000)}}function J(){var aw="";for(var ax=0,ay=L.length;ax<ay;ax++){aw+=P(L.charAt(ax))}O.find("#answer-tiles").html(aw.toString())}function U(aw){aw=aw?aw:"";O.removeClass(d.failed).removeClass(d.won).removeClass(d.lost).addClass(aw)}function s(ax){O.find(".block").removeClass("unclickable");if(ax&&ax!=F.none){if($.isArray(ax)){for(var aw=0;aw<ax.length;aw++){O.find("."+ax[aw]).addClass("unclickable")}}else{if(typeof(ax)=="string"){O.find("."+ax).addClass("unclickable")}}}}function f(ax){for(var ay,aw,az=ax.length;az;ay=parseInt(Math.random()*az),aw=ax[--az],ax[az]=ax[ay],ax[ay]=aw){}return ax}function o(){var ax="abcdefghiklmnopqrstuvwxyz",aw=Math.floor(Math.random()*ax.length),ay=ax.substring(aw,aw+1);return ay}function ai(ay){var ax,aw=u(ay);B=aw;for(ax=0,tilesNeeded=RR.settings.tiles-ay.length;ax<tilesNeeded;ax++){B.push(o())}X(B);V()}var Z=false;function w(){Z=true;RR.sound.play(RR.game.sfxSoundsList.ticktok);if(!y&&typeof(RR.guessingLogger)!="undefined"){var aw=(RR.game.getUserData().timers-1);RR.guessingLogger.recordLog("timer",{time:new Date().getTime(),timers:aw})}t=setTimeout(k,50)}var n=false;function e(az){n=true;U(d.none);RR.sound.play(RR.game.sfxSoundsList.explode);var ax=O.find('#game-tiles div[button="true"], #answer-tiles div[button="true"]').parent();if(az){for(var aw=0;aw<az.length;aw++){ax=ax.not("#"+az[aw])}}else{var az=[];var ay=u(L);for(var aw=0;aw<ay.length;aw++){$.each(ax,function(aA,aC){var aB=$(aC);if(aB.children().text().toLowerCase()==ay[aw].toLowerCase()){az.push(aB.attr("id"));ax=ax.not(aC);return false}})}}ax.attr("class","empty-tile").empty();if(!y&&typeof(RR.guessingLogger)!="undefined"){RR.guessingLogger.recordLog("bomb",{time:new Date().getTime(),bombs:RR.game.getUserData().bombs-1,caption_slots_ids:az})}}var ah=0;var h=0;function P(aw){var ax='<li id="slot_item_'+h+'" class="button"><div button="true" id="letter_item_'+ah+'" class="letter text-shadow">'+aw+"</div></li>";ah++;h++;return ax}function an(){var aw='<li id="slot_item_'+h+'" class="empty-tile"></li>';h++;return aw}function X(aw){var ay="";f(aw);for(var ax=0;ax<aw.length;ax++){ay+=P(aw[ax])}O.find("#game-tiles").html(ay)}function Y(aw){if(aw==undefined){var aw=[];$.each(O.find('#game-tiles div[button="true"]'),function(ax,ay){aw.push($(ay).text())});aw=f(aw)}$.each(O.find('#game-tiles div[button="true"]'),function(ax,ay){$(ay).text(aw[ax])});if(!y&&typeof(RR.guessingLogger)!="undefined"){RR.guessingLogger.recordLog("shuffle",{letters:b(),time:new Date().getTime()})}}function V(){var az="";for(var ax=0,aA=L.length;ax<aA;ax++){az+=an()}O.find("#answer-tiles").html(az);var ay=2;var aB=72;var aw=O.find("#answer-tiles li").width();aw=((aw)?aw:aB)+ay;O.find("#answer-tiles").css({width:L.length*aw+"px"})}function ac(){$.each(O.find('#answer-tiles div[button="true"]'),function(aw,ax){aj($(ax).attr("id"),$(O.find("#game-tiles .empty-tile")[0]).attr("id"),true)});if(!y&&typeof(RR.guessingLogger)!="undefined"){RR.guessingLogger.recordLog("recall",{time:new Date().getTime()})}}function g(ax){var ay=O.find("#answer-tiles .empty-tile")[0],aw=$(ax).text();if(O.find("#answer-tiles .empty-tile").length>=1){aj($($(ax).children()[0]).attr("id"),$(O.find("#answer-tiles .empty-tile")[0]).attr("id"))}return false}function W(az){var aw=an(),ay=$(az).text(),ax=O.find("#answer-tiles");aj($($(az).children()[0]).attr("id"),$(O.find("#game-tiles .empty-tile")[0]).attr("id"))}function aj(aA,ax,az){var aD=O.find("#"+aA).parent();var aE=O.find("#"+ax);var aw=aD.html();var ay=aE.html();aD.html(ay);aE.html(aw);var aB=aD.find('div[button="true"]').length!=0;var aC=aE.find('div[button="true"]').length!=0;var aG=aD.find('div[button="true"]').attr("id");var aF=aE.find('div[button="true"]').attr("id");if(aB&&aC){aD.removeClass("empty-tile").addClass("button");C("#"+aG)}else{aD.removeClass("button").addClass("empty-tile")}aE.removeClass("empty-tile").addClass("button");aE.children().attr("style","");C("#"+aF);if(!az&&!y&&typeof(RR.guessingLogger)!="undefined"){RR.guessingLogger.recordLog("move_letter",{letter_id:aA,slot_id:ax,time:new Date().getTime()})}m(function(){K("#"+ax)})}function m(aw){U(d.none);if(O.find("#answer-tiles .empty-tile").length<=0){var ax="";$.each(O.find('#answer-tiles div[button="true"]'),function(ay,az){ax+=$(az).text().toLowerCase()});if(L==ax){if(!y){N()}return}else{aa()}}if($.isFunction(aw)){aw()}}function u(aw){return aw.toLowerCase().split("")}function C(aw){if(!RR.common.isAndroid){RR.drag.makeDraggable({selector:aw,onStart:function(ax){RR.sound.play(RR.game.sfxSoundsList.letter_pickup);$(ax.currentTarget).parent().addClass("invis")},onStop:function(ax){$(ax.currentTarget).parent().removeClass("invis")}})}}function a(aw){if(!RR.common.isAndroid){RR.drag.makeDroppable({selector:aw,onDrop:function(ax,ay){aj(ax,ay);RR.sound.play(RR.game.sfxSoundsList.letter_drop)}})}}function b(){var aw="";$.each(O.find('#game-tiles div[button="true"]'),function(ax,ay){aw+=$(ay).text().toLowerCase()});return aw}function i(){var aw="";$.each(O.find('#answer-tiles div[button="true"]'),function(ax,ay){aw+=$(ay).text().toLowerCase()});return aw}function K(aw){if(Modernizr.keyframe&&!RR.common.isAndroid){$(aw).addClass("letter-drag-end");$(aw).one("webkitAnimationEnd animationend",function(){$(aw).removeClass("letter-drag-end")})}}function q(aw,ay,ax){if(typeof(aw)=="string"){RR.api.getPhoto(aw,function(az){q(az,ay,ax)});return}at=ax?true:false;M=true;onRoundComplete=ay;$("#message").hide();if(!at){RR.screens.round.run("1",null,aw.author_name,RR.game.getUserAvatarUrl(aw.author_uid),function(){Q(aw);al()})}else{Q(aw);al()}}function al(){ag=false;O.find("#game-board").attr("src","#").attr("src",S.current_round.photo.image_url);O.find("#game-board-preload").hide();O.find("#game-board").show();RR.tilesController.addTiles("#tiles-container .inner",100);if(typeof(AdSupport)=="object"){AdSupport.disableAdBanner(1)}RR.game.showScreen(ak,function(){if(!ag&&!RR.common.isDesktop){RR.game.showModal(".board-loading")}})}function Q(aw){ag=false;af();var ax={photo:aw};S={current_round:ax,waiting_uid:aw.author_uid,round_number:1,waiting_name:aw.author_name};O.find("#game-board").hide();ao(false,true);O.find("#game-board-preload").attr("src",aw.image_url)}function ao(az,ay){y=az?true:false;Z=false;n=false;clearTimeout(z);var ax=az?S.previous_round.photo:S.current_round.photo;r=ax;O.toggleClass("replay",y);O.toggleClass("cotd",(at&&!y));ap=parseInt(ad.baseReward);x=0;L=ax.caption;ah=0;h=0;RR.tilesController.addTiles("#tiles-container .inner",100);ai(L);s(F.all);if(!ay){O.find("#game-board").attr("src","#").attr("src",ax.image_url);O.find("#game-board-preload").hide();O.find("#game-board").show()}O.find("#game-board").one("load",function(){j();console.log("Test board image loaded")});O.find("#reward").text(ap);var aB="redesign-images/avatars/day-challenge.png";var aw=(at)?aB:RR.game.getUserAvatarUrl(S.waiting_uid);O.find("img.avatar").attr("src",aw);O.find(".whose-photo .user-name").text(S.waiting_name);U(d.none);C('#game-tiles li div[button="true"]');a("#game-tiles li, #answer-tiles li");var aA=1;if(az){aA=S.previous_round_number;H=new p(JSON.parse(S.previous_round.replay))}else{aA=S.round_number}O.find(".round").text(aA);if(!RR.common.isDesktop&&!ag){aq=setTimeout(T,navigator.onLine?15000:0)}if(!ay){RR.game.showScreen(ak,function(){if(!RR.common.isDesktop&&!ag){RR.game.showModal(".board-loading")}})}av()}var v=false;function ab(aw,ay){if(v){return}ag=false;at=false;M=false;onRoundComplete=null;S=RR.game.getGame(aw);AdSupport.disableAdBanner(1);af();v=true;function ax(az){v=false;S=az;if(S.active_uid!=RR.settings.uid){return}if(S.current_round.score>0||S.current_round.replay!=null){RR.screens["get-photo"].run(S.id)}else{if(!ay&&az&&az.waiting_name!=undefined&&az.previous_round!=undefined&&typeof(az.previous_round.replay)=="string"&&az.previous_round.replay!=""&&az.previous_round.photo!=undefined&&az.previous_round.photo.caption!=undefined){O.find("#game-board-replay-preload").attr("src",az.previous_round.photo.image_url);$("#game").addClass("replay");RR.screens.watch.run(az.waiting_name,RR.game.getUserAvatarUrl(az.waiting_uid),az.previous_round.photo.caption,function(){ao(true)},function(){RR.screens.round.run(S.round_number,S.id,S.waiting_name,RR.game.getUserAvatarUrl(S.waiting_uid))},S.previous_round_number)}else{if(!ay){O.find("#game-board-preload").attr("src",S.current_round.photo.image_url);RR.screens.round.run(S.round_number,S.id,S.waiting_name,RR.game.getUserAvatarUrl(S.waiting_uid))}else{ao(false);RR.analytics.logEvent("flow-round-start");if(az.current_round.hasOwnProperty("fb_request_id")){RR.fb.deleteRequest(az.current_round.fb_request_id,az.current_round.id)}if(az.current_round.photo.visibility=="PUBLIC"){FB.api("/me/whatphoto:play","post",{photo:RR.settings.webUrlPrefix+az.current_round.photo.id},function(aA){if(aA&&!aA.error){$.ajax({url:"http://trk.rumpus.com/refer/wtp/invite",type:"POST",data:{from:RR.settings.uid,fb_id:aA.id,channel:"fb_action",variant:"whatphoto:play"}})}})}}}}}if(S==undefined||S.current_round==undefined){RR.api.getGame(aw,ax,function(){v=false})}else{ax(S)}}function av(){if(!M){$("#msgcount").html(("chat_messages" in S)?S.chat_messages.length:"0");$("#message").show()}else{$("#message").hide()}}function T(){navigator.notification.alert("What The Photo requires an active internet connection to play.",function(){R();RR.screens.lobby.run()},"Network Required")}function G(aD){aD=aD||window.event;var aG=8;var aB=O.find('#answer-tiles div[button="true"]');var az=O.find("#answer-tiles .empty-tile");var ay=O.find('#game-tiles div[button="true"]');var aE=O.find("#game-tiles .empty-tile");var aw=$(ak).hasClass("active")&&!$(ak).hasClass("won")&&!$(ak).hasClass("lost");var aF=false;var aA=aD.srcElement||aD.target;var aC=typeof(aA.type)=="string"?aA.type.toUpperCase():"";if((aA.tagName.toUpperCase()==="INPUT"&&((aC==="TEXT")||(aC==="EMAIL")||(aC==="PASSWORD")))||aA.tagName.toUpperCase()==="TEXTAREA"){aF=aA.readOnly||aA.disabled}else{aF=true}if(aF&&!y){ax()}function ax(){if(aD.keyCode==aG){if(aB.length>0&&aw){aj(aB.last().attr("id"),$(aE[0]).attr("id"))}if(aD.preventDefault){aD.preventDefault()}else{return false}}else{var aH=String.fromCharCode(aD.keyCode);if(aH&&b().indexOf(aH.toLowerCase())!=-1&&az.length>0&&aw){$.each(ay,function(aI,aJ){if($(aJ).text().toLowerCase()==aH.toLowerCase()){aj($(aJ).attr("id"),$(az[0]).attr("id"));aH="";return false}})}}}}function p(az){var aD=az.length-1;var aw=0;var aB=az[aw].time;var aC=false;function aA(){clearTimeout(z);aw=aD;ax();aC=true;ay()}function ay(){if(az[aw]!=undefined){var aE=(az[aw].time-aB);aE=aE/1000;if((aE>x&&x<parseInt(ad.baseReward))&&!aC){return}}else{return}switch(az[aw].name){case"start":L=az[aw].answer;$.each(O.find('#game-tiles div[button="true"]'),function(aF,aG){$(aG).text(az[aw].letters[aF])});if(az[aw].hasOwnProperty("bombs")&&az[aw].hasOwnProperty("timers")){au(az[aw].bombs,az[aw].timers)}else{au(0,0)}aw=0;aw++;break;case"move_letter":aj(az[aw].letter_id,az[aw].slot_id);aw++;break;case"shuffle":Y(az[aw].letters);aw++;break;case"recall":ac();aw++;break;case"timer":w();E(az[aw].timers);aw++;break;case"bomb":e(az[aw].caption_slots_ids);l(az[aw].bombs);aw++;break;case"win":ax();N();setTimeout(function(){if(RR.screens.won){RR.screens.won.run(S.id,S.waiting_name,az[aw-1].reward,function(){RR.screens.round.run(S.round_number,S.id,S.waiting_name,RR.game.getUserAvatarUrl(S.waiting_uid))},false,y)}R()},A);aw++;break;case"lose":ax();ar();setTimeout(function(){RR.screens.lost.run(S.id,S.waiting_name,false,function(){RR.screens.round.run("1",S.id,S.waiting_name,RR.game.getUserAvatarUrl(S.waiting_uid))},false);R()},A);aw++;break;default:aw++}aC=false;ay()}function ax(){ap=az[aw].reward;x=az[aw].roundTime}if((az[aw].name=="start")&&((az[aD].name=="win")||(az[aD].name=="lose"))){return{playNext:ay,playLast:aA}}else{ax();RR.screens["get-photo"].run(S.id)}}return{run:ab,runPhoto:q,startPhoto:al,initPhoto:Q,isGameStarted:function(){return ag},getLastPhoto:function(){return r}}})();;
RR.screens["password-sent"]=(function(){var f=true;var d="#game-password-sent-screen";var c=$(d);function b(){if(f){f=false;c.find("button.back").onpress(RR.screens.login.run)}}function e(){AdSupport.disableAdBanner(1);a()}function a(){b();RR.game.showScreen(d)}return{run:e,show:a}})();;
RR.screens["enter-password"]=(function(){var f=true;var d="#game-enter-password-screen";var c=$(d);function b(){if(f){f=false;RR.game.toogleInputDefaultValue(c.find('input[name="email"]'));c.find("button.back").onpress(RR.screens["create-account"].run)}}function e(j){AdSupport.disableAdBanner(1);b();var h=RR.game.getUserData();var j=j||h.email;if(j){c.find('input[name="email"]').removeClass("default").val(j)}c.find("button.login").offpress();c.find("button.login").onpress(function(){g(k)});c.find("form").unbind("submit").bind("submit",function(l){g(k);return false});c.find(".forgot-password").offpress();c.find(".forgot-password").onpress(function(){g(function(l){c.find(".error-message").hide();if(l){RR.game.showModal(".please-wait");RR.analytics.mpLogEvent("anonymous-forgotpassword");RR.api.restoreUserPassword(l,RR.screens["password-sent"].run,i)}else{i()}})});function g(n){var l=c.find('input[name="email"]');var m=l.val();if(RR.common.emailRegEx.test(m)){if($.isFunction(n)){n(m)}}else{i()}}function i(){RR.game.closeModal();var l=c.find('input[name="email"]');l.addClass("red");l.one("focus",function(){$(this).removeClass("red")})}function k(p){var m=c.find('input[name="password"]');var l=m.val();if(p&&l.length>=4&&l.length<=10){RR.game.showModal(".logging-in");RR.api.authUser(p,l,o,n)}else{n()}c.find('form input[type="submit"]').focus();function o(q){if(q&&q.access_token&&q.uid){RR.login.setUserData(q);RR.screens.lobby.run()}else{n()}}function n(){RR.game.closeModal();c.find(".error-message").show()}}a()}function a(){b();RR.game.showScreen(d);RR.analytics.mpLogEvent("anonymous-password-prompt");c.find(".error-message").hide()}return{run:e,show:a}})();;
RR.screens["create-account"]=(function(){var g=true;var e="#game-create-account-screen";var d=$(e);function c(){if(g){g=false;RR.game.toogleInputDefaultValue(d.find('input[name="email"]'));RR.game.toogleInputDefaultValue(d.find('input[name="username"]'));d.find("form").submit(function(i){h();return false});d.find(".continue").onpress(h);d.find(".facebook").onpress(RR.login.doLogin);function h(){var k=d.find('input[name="email"]');var n=k.val();var i=d.find('input[name="username"]').val();var l=d.find('input[name="username"]').attr("defaultValue");i=(i!=l)?i:"";if(RR.common.emailRegEx.test(n)){RR.game.showModal(".please-wait");RR.api.registerUser(n,i,j,m)}else{k.addClass("red");k.one("focus",function(){$(this).removeClass("red")})}d.find('form input[type="submit"]').focus();function j(o){if(o&&o.access_token&&o.uid){RR.login.setUserData(o);RR.screens.lobby.run()}else{m()}}function m(o){RR.game.closeModal();if(o&&o.status==406){RR.game.showModal(".unavailable-username");d.find('input[name="username"]').addClass("red").one("focus",function(){$(this).removeClass("red")})}else{if(o&&o.status==403){RR.screens["enter-password"].run(n)}else{RR.screens.login.run()}}}}}}function f(){AdSupport.disableAdBanner(1);b()}function b(){if(navigator.userAgent.toLowerCase().match(/android/)){$.ajax({type:"GET",url:"http://trk.rumpus.com/status",timeout:10000,success:a,error:function(){navigator.notification.alert("Login via E-mail requires an active internet connection.",function(){},"Network Required")}})}else{if(typeof(navigator.onLine)=="boolean"&&!navigator.onLine){navigator.notification.alert("Login via E-mail requires an active internet connection.",function(){},"Network Required")}else{a()}}}function a(){c();RR.game.showScreen(e);RR.analytics.mpLogEvent("anonymous-createaccount-prompt")}return{run:f,show:a}})();;
RR.screens["get-password"]=(function(){var f=true;var d="#game-get-password-screen";var c=$(d);function b(){if(f){f=false;RR.game.toogleInputDefaultValue(c.find('input[name="email"]'));c.find(".back").onpress(RR.screens["enter-password"].run)}}function e(){AdSupport.disableAdBanner(1);a()}function a(){b();RR.game.showScreen(d)}return{run:e,show:a}})();;
RR.screens.login=(function(){var f=true;var d="#game-login-screen";var c=$(d);function b(){if(f){f=false;c.find(".facebook").onpress(RR.login.doLogin);c.find(".email").onpress(function(){RR.screens["create-account"].run()})}}function e(){AdSupport.disableAdBanner(1);a()}function a(){b();var g={has_facebook:RR.settings.has_facebook,skip:false};if(!RR.settings.has_facebook){g.skip=true;RR.analytics.mpLogEvent("anonymous-login-prompt",g);RR.screens["create-account"].run();return}RR.analytics.mpLogEvent("anonymous-login-prompt",g);RR.game.showScreen(d)}return{run:e,show:a}})();;
RR.screens.lost=(function(){var g=true;var b="#game-lost-screen";var f=$(b);var d=RR.animator(b+" .animation-container");function a(){if(g){g=false;f.find(".facebook").onpress(function(){});f.find(".twitter").onpress(function(){});f.find("button.chat").onpress(function(){RR.chat.chatSource="lost";RR.screens.chatroom.run(RR.chat.chatOpenGameId)});d.setIdle(1);d.init("ani_V2/lose.html",function(){d.play(1)})}}function e(){var j=f.find(".content .container");j.removeClass("show");setTimeout(function(){j.addClass("show")},100)}function h(){var j=768;var l=f.find(".content").width();var k=(l-j)/2;f.find(".animation-container").css("left",k+"px")}function c(k,o,m,n,j){a();RR.chat.inGame=false;RR.chat.chatOpenGameId=k;if(o){f.find(".user-name").text(o)}f.find("button.chat").toggle(!j&&k!=undefined);f.find(".cotd").toggle(j);f.find(".you-lost").toggle((!j&&m&&o)?true:false);f.find(".they-lost").toggle((!j&&!m&&o)?true:false);f.find("button.continue").offpress();f.find("button.continue").onpress(function(){RR.sound.stopAll();if(!m||typeof(AdSupport)!="object"){l()}else{AdSupport.displayFullScreenAd(l)}});RR.sound.play(RR.game.bgSoundsList.lose,true);if(!g){d.play(1)}e();RR.game.showScreen(b,h);function l(){RR.chat.chatOpenGameId="";if($.isFunction(n)){d.play(0);n()}else{RR.screens.lobby.run()}}}function i(){a();RR.game.showScreen(b);e()}return{run:c,show:i}})();;
RR.screens.round=(function(){var f=true;var d="#game-round-screen";var c=$(d);function b(){if(f){f=false;if("lobby" in RR.screens){c.find("button.back").onpress(function(){RR.screens.lobby.run()})}else{c.find("button.back").hide();c.find(".content").css("padding-bottom","20px")}}}function e(j,h,i,g,k){if(typeof(AdSupport)=="object"){AdSupport.disableAdBanner(1)}b();if(j){c.find(".round-number").html(j)}c.find(".user-name").text(i);if(k==null){k=function(){RR.screens.board.run(h,true)}}c.find("button.play").offpress();c.find("button.play").onpress(k);if(c.find(".avatar").attr("src")==g){RR.game.showScreen(d)}else{c.find(".avatar").attr("src",g);c.find(".avatar").one("load",function(){RR.game.showScreen(d)})}}function a(){b();RR.game.showScreen(d)}return{run:e,show:a}})();;
RR.screens.watch=(function(){var f=true;var d="#game-watch-screen";var c=$(d);function b(){if(f){f=false;c.find("button.back").onpress(function(){RR.screens.lobby.run()})}}function e(k,h,g,j,i,l){AdSupport.disableAdBanner(1);c.find("button.skip").offpress();c.find("button.watch").offpress();c.find("button.skip").onpress(function(){if($.isFunction(i)){i()}else{RR.screens.lobby.run()}});if($.isFunction(j)){c.find("button.watch").onpress(function(){j()});c.find(".user-name").text(k);c.find(".your-caption").text(g);c.find(".avatar").attr("src",h);c.find(".round-number").text(l);a()}else{RR.screens.lobby.run()}}function a(){b();RR.game.showScreen(d)}return{run:e,show:a}})();;
RR.screens.won=(function(){var g=true;var j=true;var b="#game-won-screen";var f=$(b);var d=RR.animator(b+" .animation-container");function a(){if(g){g=false;f.find("button.chat").onpress(function(){RR.chat.chatSource="won";RR.screens.chatroom.run(RR.chat.chatOpenGameId)});d.setIdle(1);d.init("ani_V2/win.html",function(){d.play(1)});if(!j){f.find(".twitter").hide();f.find(".facebook").css("width","100%");f.find(".facebook .text").html("Share via Facebook")}}}function e(){var k=f.find(".content .container");k.removeClass("show");setTimeout(function(){k.addClass("show")},100)}function h(){var k=768;var m=f.find(".content").width();var l=(m-k)/2;f.find(".animation-container").css("left",l+"px")}function c(u,t,m,n,r,k){a();RR.chat.inGame=false;RR.chat.chatOpenGameId=u;f.find(".user-name").text(t);if(!k){f.find(".wonturn").text("You've");f.removeClass("their-turn");f.addClass("your-turn")}else{f.find(".wonturn").text(t);f.removeClass("your-turn");f.addClass("their-turn")}f.find("button.chat").toggle(!r&&u!=undefined);if(r){f.find(".facebook, .share .title").show();f.find(".facebook").offpress();f.find(".facebook").onpress(function(){RR.fb.wallPost(RR.screens.board.getLastPhoto().id,"I just guessed the Challenge of the Day!",o)});if(j){f.find(".twitter").show();f.find(".twitter").offpress();f.find(".twitter").onpress(function(){RR.fb.tweet(RR.screens.board.getLastPhoto().id,"I just guessed the Challenge of the Day on What The Photo? #whatthephoto",o)})}}else{f.find(".share .title, .facebook, .twitter").hide()}var s=0;RR.sound.play(RR.game.bgSoundsList.win);if(!g){d.play(1)}var p=f.find(".final-reward");if(!RR.common.isAndroid){p.text(0);var l=setTimeout(q,10);function q(){s++;if(s<=m){p.text(s);l=setTimeout(q,10)}}}else{p.text(m)}RR.game.showScreen(b,h);var o=function(){RR.chat.chatOpenGameId="";if($.isFunction(n)){d.play(0);n()}else{RR.screens.lobby.run()}};f.find("button.continue").offpress();f.find("button.continue").onpress(function(){RR.sound.stopAll();if(l){clearTimeout(l)}if(t){o()}else{AdSupport.displayFullScreenAd(o)}});e();if("lobby" in RR.screens){RR.screens.lobby.renderGames()}}function i(){a();RR.game.showScreen(b);e()}return{run:c,show:i,hasTwitter:j}})();;
RR.screens["get-photo"]=(function(){var h=true;var c="#game-get-photo-screen";var f=$("#game-get-photo-screen");var k=RR.game;var d=null;function a(){if(h){h=false;f.find("button.back").onpress(function(){RR.screens.lobby.run()});f.find(" .upload-photo").onpress(function(){RR.photo.uploadPhoto()});f.find(".take-photo").onpress(function(){RR.photo.takePhoto()});f.find(".thumbnails").onpress("button.play",function(){var l=$(this).parents("li");RR.screens.answer.show(l.find("img").attr("src"),$(this).attr("data-photo_id"),l.find(".text").text())});d=new iScroll("get-photo-thumbnails-list",{snap:true,momentum:false,hScrollbar:false,hScroll:true,vScrollbar:false,vScroll:false,bounce:false})}}function j(){RR.screens.answer.run(function(l,m){if(m){RR.fb.postPhoto(l.id)}RR.screens["invite-friends"].run(l.id,RR.screens.lobby.run,e)},function(){k.showModal(".photo-error")},e);RR.analytics.logEvent("flow-challenge-start")}function g(l){RR.screens.answer.run(function(m,n){if(n){RR.fb.postPhoto(m.id,l)}RR.analytics.logEvent("flow-round-reply",{fbpost:(n?"true":"false")});RR.api.nextPhoto(l,m.id,function(o){RR.game.saveGame(o);RR.screens.lobby.renderGames();RR.screens.lobby.run()},function(){k.showModal(".photo-error")})},function(){k.showModal(".photo-error")},function(){e(l)})}function b(){var r=RR.photo.getThumbnailsHash();var q=Object.keys(r).length;if(q>0){f.find(".thumbnails").show();var m=f.find(".thumbnails-list");var l=m.find("ul");var o="";l.empty();for(var n in r){o+="<li><img src="+JSON.stringify(r[n].dataUrl)+'/><div class="text">'+r[n].caption+'</div><button class="play" data-photo_id="'+n+'"></button></li>'}l.html(o);var p=l.find("li").width()+parseInt(l.find("li").css("margin-right").split("px"));l.width(q*p);setTimeout(function(){d.refresh()},0)}else{f.find(".thumbnails").hide()}}function e(l,m,n){AdSupport.disableAdBanner(1);if(typeof(l)=="string"){f.addClass("your-turn");g(l)}else{if(typeof(l)=="function"){if(!n){f.removeClass("your-turn")}RR.screens.answer.run(l,function(){RR.game.showModal(".photo-error")},function(){e(l)},m)}else{if(!n){f.removeClass("your-turn")}j()}}if(n){f.addClass("your-turn")}i()}function i(){a();RR.game.showScreen(c,b)}return{run:e,show:i}})();;
RR.screens.answer=(function(){var g=true;var e="#game-answer-screen";var d=$(e);var a=false;var h=false;function c(){if(g){g=false;RR.game.toogleInputDefaultValue(d.find('input[name="answer"]'))}}function f(m,j,i,k){c();AdSupport.disableAdBanner(1);a=false;if(RR.settings.loggedInViaFaceBook&&!k){d.find("#chb-public-to-wall").show()}else{d.find("#chb-public-to-wall").hide()}function l(o){if(a){return}var r=d.find(".answer-input-field");r.blur();var q=r.val();var p=/^[a-zA-Z]{1,8}$/;if(p.test(q)){RR.game.showModal(".photo-processing");r.removeClass("red");a=true;var n=d.find(".input-photo").attr("data-photoid");RR.api.setPhotoData(n,{caption:q,author_name:RR.game.getUserData().display_name},function(s){var t=false;if(d.find("#chb-public-to-wall").hasClass("checked")&&RR.settings.loggedInViaFaceBook&&!k){t=true}RR.analytics.logEvent("flow-photo-caption",{caption:q});RR.photo.setThumbnail(s.id,s.caption,s.waiting_uid,s.image_url);m(s,t)},function(s){RR.game.showModal(".photo-error");if(typeof(j)=="function"){$(".photo-error close").offpress();$(".photo-error close").onpress(function(){RR.game.closeModal();j()})}})}else{r.addClass("red");r.one("focus",function(){$(this).removeClass("red")})}}d.find("form").unbind("submit").bind("submit",function(){try{l()}catch(n){console.log("Exception while doing it "+n)}return false});d.find("button.continue").offpress();d.find("button.continue").onpress(function(){try{l(this.id)}catch(n){console.log("Exception while doing it "+n)}});d.find("button.back").offpress();if($.isFunction(i)){d.find("button.back").onpress(i)}else{d.find("button.back").onpress(RR.screens.lobby.run)}}function b(l,j,k){c();a=false;if(typeof(l)=="string"&&typeof(j)=="string"){d.find(".input-photo").attr("src",l).attr("data-photoid",j)}var m=d.find('input[name="answer"]');if(k){h=true;m.val(k);d.find("form").submit()}else{h=false;var i=m.attr("defaultValue");m.val(i);m.addClass("default");RR.game.showScreen(e)}}return{run:f,show:b}})();;
RR.screens["email-challenge"]=(function(){var g=true;var d="#game-email-challenge-screen";var c=$(d);function b(){if(g){g=false;RR.game.toogleInputDefaultValue(c.find('input[name="email-username"]'));c.find('input[name="email-username"]').bind("keyup",function(h){c.find("button.continue").toggleClass("disabled",$(this).val().length<=0)})}}function f(){var i=c.find('input[name="email-username"]');var h=i.attr("defaultValue");i.addClass("default").val(h);c.find("button.continue").addClass("disabled")}function e(h,m){b();AdSupport.disableAdBanner(1);var l=c.find("button.back");var j=c.find("button.continue");var i=c.find("form");l.offpress();l.onpress(function(){RR.screens["invite-friends"].run()});j.offpress();j.onpress(k);i.unbind("submit");i.submit(function(n){k();return false});function k(){if(j.hasClass("disabled")){return false}var q=c.find('input[name="email-username"]');var r=q.val();var n=RR.game.getUserData();if((r.indexOf("@")==-1||RR.common.emailRegEx.test(r))&&r!=n.email&&r.length>1){RR.game.createGames(h,[r],o,p,false)}else{q.addClass("red");q.one("focus",function(){$(this).removeClass("red")})}c.find('form input[type="submit"]').focus();function o(s){console.log("Test create game: "+JSON.stringify(s));if($.isFunction(m)){m([r])}}function p(s){if(s&&s.status==404){RR.game.showModal(".uncorrect-username");q.addClass("red").one("focus",function(){$(this).removeClass("red")})}else{RR.game.showModal(".photo-error")}}}f();a()}function a(){b();RR.game.showScreen(d)}return{run:e,show:a}})();;
RR.screens["shop-coins"]=(function(){var h=true;var c=false;var f="#game-shop-coins-screen";var e=$(f);var d=false;function b(){if(h){h=false;e.find("button.back").onpress(function(){RR.screens.lobby.run()})}}function g(){AdSupport.disableAdBanner(1);a()}function a(){b();var k=(RR.coinPurchaseManager.getCoinBundles().length!=0);if(k){var n=true;for(var m=0;m<RR.coinPurchaseManager.getCoinBundles().length;m++){var l=RR.coinPurchaseManager.getCoinBundles()[m];if(!l.hasOwnProperty("verified")||l.verified==false){n=false;console.log("this bundle is not verified: "+l.identifier)}}if(!n){j()}else{RR.coinPurchaseManager.getCompleteCoinBundles(function(q){var o=0;var p=["small","medium","large","mega"];for(var i in q){(function(t){var s=q[t];var u="."+p[o]+"-pack";var r=e.find(u);o=o+1;var v={coins:s.coins,price:s.price,tier:s.tier};r.find(".text span").text(RR.common.delimitNumbers(s.coins)+" Coins");r.find(".text mark").text(s.color_text);if(s.price){r.find(".text-shadow").text(s.price)}if(!d){r.find(".text-shadow").onpress(function(w){RR.game.showModal(".please-wait");RR.analytics.logEvent("goods-coins-click",v);RR.coinPurchaseManager.purchaseCoinBundle(s.id,function(x){RR.analytics.logEvent("goods-coins-purchase",v);RR.game.showModal(".purchase-success");setTimeout(function(){RR.game.closeModal()},1500);console.log(x)},function(x){RR.game.showModal(".purchase-fail");setTimeout(function(){RR.game.closeModal()},1500);console.log(x)})})}})(i)}d=true;RR.game.closeModal()},function(i){RR.screens.lobby.run();console.log("CoinBundle Loading error: "+i)})}}RR.analytics.logEvent("goods-coins-prompt");RR.game.showScreen(f,function(){if(!k){j()}else{if(!d){RR.game.showModal(".please-wait")}}});function j(){RR.game.showModal(".coming-soon");RR.coinPurchaseManager.getCompleteCoinBundles(function(){},function(){})}}return{run:g,show:a}})();;
RR.screens["shop-items"]=(function(){var h=true;var c=false;var f="#game-shop-items-screen";var e=$(f);var d=false;function b(){if(h){h=false;e.find("button.back").onpress(function(){RR.screens.lobby.run()})}}function g(){AdSupport.disableAdBanner(1);a()}function a(){b();RR.bundleManager.updateBundlesIfNecessary(function(j){if(j.length==0){RR.screens.lobby.run()}else{for(var k in j){(function(o){var m=j[o];var n="."+m.short_name;var l=e.find(n);l.find(".text>span").text(m.name);if(m.description!=null&&m.description!=""){l.find(".text>mark>mark").text(m.description)}if(m.color_text!=null&&m.color_text!=""){l.find(".text>mark>span").text(m.color_text)}l.find(".text-shadow>span").text(RR.common.delimitNumbers(m.coins));if(!c){l.find("button").onpress(function(p){RR.game.showModal(".please-wait");var i=p.srcElement;while(i.className.indexOf("pack")==-1){i=i.parentElement}var q=RR.bundleManager.costForBundle(m.id);RR.analytics.logEvent("goods-items-click",{item:n.substring(1),coins:q});if(q>RR.game.getUserData().coins){RR.game.showModal(".purchase-more-coins")}else{if(q==-1){return}else{RR.bundleManager.purchaseBundle(m.id,function(r){RR.analytics.setUser(RR.settings.uid,{is_paying:true});RR.analytics.logEvent("goods-items-purchase",{item:n.substring(1),coins:q});RR.game.closeModal();RR.game.showModal(".purchase-success");setTimeout(function(){RR.game.closeModal()},1500)},function(r){RR.game.closeModal();RR.game.showModal(".purchase-fail");setTimeout(function(){RR.game.closeModal()},1500);console.log(r)})}}})}})(k)}c=true}d=true;RR.game.closeModal()},function(i){console.log(i);RR.game.closeModal()});RR.analytics.logEvent("goods-items-prompt");RR.game.showScreen(f,function(){if(!d){RR.game.showModal(".please-wait")}})}return{run:g,show:a}})();;
RR.screens.intro=(function(){var f=true;var d="#game-intro-screen";var c=$(d);function b(){if(f){f=false;RR.api.getCOTD(function(h){var g=RR.game.getUserData();g.bombs=1;g.timers=1;RR.game.setUserData(g);c.find(".play-sample").onpress(function(){RR.screens.board.runPhoto(h,null,true);RR.analytics.mpLogEvent("anonymous-playsample",{skip:false});return false});RR.game.showScreen(d)});c.find(".get-started").onpress(function(){RR.login.checkLogin();RR.analytics.mpLogEvent("anonymous-playsample",{skip:true})})}}function e(){AdSupport.disableAdBanner(1);b()}function a(){b();RR.game.showScreen(d)}return{run:e,show:a}})();;
RR.screens["invite-friends"]=(function(){var g=true;var c="#game-invite-friends-screen";var h;var f;var d;function b(){return"Your turn! Guess my photo on What the Photo?"}function a(){if(g){g=false;var j=$(c);j.find(".facebook").onpress(function(){RR.fb.doWithFacebook(function(){friendpicker.friendpicker(function(k){var l=typeof(k.length)=="undefined"?Object.keys(k):k;RR.game.createGames(d,l,function(m){RR.analytics.logEvent("flow-challenge-complete",{target:"friends",numrcpts:l.length});RR.screens.lobby.run();RR.fb.requestPopup(b(),m,l,function(){RR.fb.wallPost(d,"Let's Play What The Photo?  Click To Guess My Photo!",null)})},function(){RR.screens.lobby.run();RR.fb.wallPost(d,"Let's Play What The Photo?  Click To Guess My Photo!",null)})},null,true,"fb")})});if(RR.settings.has_twitter){j.find(".twitter").onpress(function(){RR.game.showModal(".photo-processing");RR.fb.tweet(d,"I'm playing What The Photo?  Click to guess my photo!",f)})}else{j.find(".twitter").hide()}if(RR.settings.app_version<=2.02){j.find(".addressbook").hide()}else{j.find(".addressbook").onpress(function(){friendpicker.friendpicker(function(m){var n=[];for(var l in m){n.push(l.indexOf("@")>0?l:"tel:"+l.replace(/\D/g,""))}RR.game.createGames(d,n,function(k){RR.analytics.logEvent("flow-challenge-complete",{target:"addressbook",numrcpts:n.length});RR.screens.lobby.run()},function(){RR.game.showModal(".photo-error")})},null,false,"ab")})}j.find(".email, .username").onpress(function(){RR.screens["email-challenge"].run(d,f)});j.find(".back").onpress(function(){if(typeof(h)=="function"){h()}})}}function e(l,k,j){if(j){h=j}if(k){f=k}if(l){d=l}i()}function i(){a();AdSupport.disableAdBanner(1);RR.game.showScreen(c)}return{run:e,show:i}})();;
RR.screens["select-friends"]=(function(){var g=true;var b="#game-select-friends-screen";var e=$(b);var h=new iScroll("select-friends-scroll",{hScrollbar:false,hScroll:false,vScrollbar:false,vScroll:true,bounce:false});function a(){if(g){g=false;e.find(".back").onpress(RR.screens.lobby.run);e.find(".invite-more-friends").onpress(RR.screens["invite-friends"].run);e.find(".continue").onpress(function(){});e.find("ul").onpress(".checkbox-wrapper",f);k();$(window).resize(function(){k()});function k(){var n=$(window).height();var l=e.find(".header").height();var m=n-l;e.find("#select-friends-scroll").height(m);setTimeout(function(){h.refresh()},0)}}}function d(){var k=0;e.find(".groups li.checked .count").each(function(l,m){k+=parseInt($(m).text())});return k}function i(){var k=0;e.find(".persons li.checked").each(function(l,m){k++});return k}function f(){var k=d()+i();e.find(".selected-frends-count").text(k)}function c(){AdSupport.disableAdBanner(1);f();j()}function j(){RR.game.showScreen(b);a()}return{run:c,show:j}})();;
RR.screens.chatroom=(function(){var g=true;var b="#game-chatroom-screen";var f=$(b);var d=new iScroll("chat-scroll",{hScrollbar:false,hScroll:false,vScrollbar:false,vScroll:true,bounce:false});function a(){if(g){g=false;f.find("button.close").onpress(function(){var q=f.find("textarea.message-input");q.val("");k(RR.chat.chatOpenGameId);if(RR.chat.inGame){$("#message").removeClass("nmsg")}if(RR.chat.chatSource=="game"){RR.game.paused=false;RR.chat.chatSource="";RR.chat.chatOpen=false;RR.game.showScreen("#game-board-screen")}else{if(RR.chat.chatSource=="won"){RR.chat.chatSource="";RR.chat.chatOpen=false;RR.screens.won.show()}else{if(RR.chat.chatSource=="lost"){RR.chat.chatSource="";RR.chat.chatOpen=false;RR.screens.lost.show()}else{RR.chat.chatOpenGameId="";RR.chat.chatOpen=false;RR.game.reloadGamesList();RR.screens.lobby.run()}}}});if(navigator.userAgent.toLowerCase().match(/android/)&&window.devicePixelRatio<=1.5){$("#chatroomsend").removeClass("disabled");$("#chatroominput").attr("disabled","disabled");$("#chatroomfooter").onpress(function(){var q=prompt("Enter Message: ");if(q!=null){l(q)}})}else{f.find("textarea.message-input").bind("keyup",function(q){m($(this).val().length<=0);if(this.rows<7&&this.scrollTop){this.rows=parseInt(this.rows)+1;var r=parseInt(f.find("#chat-scroll").css("bottom").split("px")[0]);f.find("#chat-scroll").css("bottom",(r+50)+"px")}});f.find("input.send").onpress(function(){n();return false});f.find("form").submit(function(q){n();return false});f.find("textarea.message-input").on("blur",function(){n();return false})}var p=f.find("textarea.message-input");function n(){if(f.find("input.send").hasClass("disabled")){return false}var q=p.val();if(q){RR.api.sendChatMessage(RR.chat.chatOpenGameId,q,function(){console.log("TEST MESSAGE SENT")},function(){console.log("TEST CHAT ERROR")});j(q,RR.game.getUserData().display_name,true);p.val("");f.find("textarea.message-input").attr("rows",1);f.find("#chat-scroll").css("bottom","80px");m(true);p.focus();h()}}function l(q){if(q==null){return}RR.api.sendChatMessage(RR.chat.chatOpenGameId,q,function(){console.log("TEST MESSAGE SENT")},function(){console.log("TEST CHAT ERROR")});j(q,RR.game.getUserData().display_name,true);f.find("#chat-scroll").css("bottom","80px");h()}function m(q){f.find("input.send").toggleClass("disabled",q)}o();$(window).resize(function(){o()});function o(){var t=$(window).height();var r=f.find(".header").height();var s=f.find(".footer").height();var q=t-r-s;f.find("#chat-scroll").css("max-height",q+"px");setTimeout(function(){d.refresh()},0)}}}function j(o,q,p){var l=f.find("#chat-scroll ul");var m=p?"your-message":"their-message";var n='<li class="'+m+'"><div class="message-container"><div>'+q+": "+o+"</div></div></li>";l.append(n);h()}function h(){d.refresh();d.scrollTo(0,d.maxScrollY)}function e(q){AdSupport.disableAdBanner(1);if(q==null||q==undefined||q==""){return}RR.chat.chatOpenGameId=q;var m=RR.game.getGame(q);if(m){RR.chat.chatOpen=true;f.find("#chat-scroll ul").empty();f.find("#chatRoomOppName").text(RR.chat.getOpponentName(q));var l=RR.game.getUserData();var p=l.uid;var o=RR.game.getUserAvatarUrl((m.waiting_uid==p)?m.active_uid:m.waiting_uid);var r=RR.chat.getRoundNumber(q);f.find("img.avatar").attr("src",o);f.find(".round").text(r);if(m.chat_messages){var n=RR.chat.getOpponentName(q);$.each(m.chat_messages,function(s,t){var v=(p==t.author_uid);var u=v?l.display_name:n;j(t.message,u,v)})}i();k(q)}else{c()}}function i(){a();RR.game.reloadGamesList(true);RR.game.showScreen(b,function(){d.refresh();d.scrollTo(0,d.maxScrollY)})}function k(m){RR.game.reloadGamesList(true);var l=RR.game.getGame(m);RR.chat.setReadMessages(l.id,RR.chat.countMessagesByThem(l))}function c(){RR.chat.chatOpen=false;RR.chat.chatOpenGameId="";RR.game.paused=false;$("#chat_log").html("");RR.screens.lobby.run()}return{run:e,show:i,addMessage:j,refreshChatScreen:h,returnToLobby:c,markAllRead:k}})();;
RR.analytics=function(){var j=RR.settings.trackprefix;var e=localStorage["analytics.userid"];var k=null;function f(){if("analytics.eventQueue" in localStorage){try{return JSON.parse(localStorage["analytics.eventQueue"])}catch(n){delete localStorage["analytics.eventQueue"]}}return[]}function d(p,r){if(location.protocol.indexOf("http")==0){return}if(localStorage.mpanonid==null){localStorage.mpanonid=typeof(RR.settings.udid)!="undefined"?RR.settings.udid:""+Math.floor(100000000000000000000*Math.random())}var n=typeof(device)!="undefined"?device.platform.toLowerCase():"web";if(n.indexOf("iphone")==0||n.indexOf("ipod")==0||n.indexOf("ipad")==0){n="ios"}var q={token:RR.settings.mixpanelkey,distinct_id:localStorage.mpanonid,mp_name_tag:(typeof(device)!="undefined"?device.name.replace(/[^\040-\177]/,""):navigator.userAgent),app:RR.settings.app,app_version:n+"-"+RR.settings.app_version+"."+RR.settings.www_version};if(typeof(r)=="object"){for(var o in r){q[o]=r[o]}}delete q.udid;delete q.open_udid;console.log("mpLogEvent("+p+JSON.stringify(q));$.ajax({url:"http://api.mixpanel.com/track/",type:"GET",data:{data:window.btoa(JSON.stringify({event:p,properties:q}))},error:function(){setTimeout(function(){d(p)},10000)}})}function g(){if(k==null){k={};var n=window.device||navigator.device;if(n){k.device_name=n.name;k.os_version=n.version}}return k}var a=function(p){var n="";for(var o in p){if(n.length>0){n+="&"}n+=encodeURIComponent(o)+"="+encodeURIComponent(p[o])}return n};var c=function(q,u){var t={};if(typeof(u)=="object"){for(var p in u){t[p]=u[p]}}t.name=q;t.timestamp=new Date().getTime();var r=g();for(var n in r){t[n]=r[n]}var o=f();o.push(t);localStorage["analytics.eventQueue"]=JSON.stringify(o)};var m=function(n,o){if(typeof(n)=="undefined"){return}if(!("analytics.userid" in localStorage)){d("anonymous-login",o)}localStorage["analytics.userid"]=e=n;if(o==null){o={}}o.locale=navigator.language;var p=window.device||navigator.device;if(p&&o.udid==null&&p.uuid!=null){o.udid=p.uuid}var q=function(){if(!navigator.onLine){setTimeout(q,10000);return}$.ajax({url:j+"user/"+e,type:"POST",data:a(o),error:function(){setTimeout(q,10000)}})};q();if(!("RR.analytics.firstload" in localStorage)){c("app-firstload");localStorage["RR.analytics.firstload"]=new Date().getTime()}if(!("analytics.session" in sessionStorage)){c("app-session-start");sessionStorage["analytics.session"]=new Date().getTime()}};var i=false;var h=function(){if(typeof(e)=="undefined"||e==null||e=="undefined"||i||!navigator.onLine||!("analytics.eventQueue" in localStorage)){return}var n=f();if(n.length==0){return}else{if(n.length>50){n.splice(50)}}i=true;$.ajax({url:j+"events/"+e+"?timestamp="+(new Date().getTime()),type:"POST",async:"true",data:JSON.stringify(n),contentType:"application/json",error:function(){i=false},success:function(){var o=f();if(o.length==n.length){delete localStorage["analytics.eventQueue"]}else{o.splice(0,n.length);localStorage["analytics.eventQueue"]=JSON.stringify(o)}i=false}})};document.addEventListener("pause",l,false);document.addEventListener("resume",b,false);function l(){c("app-session-end",{duration:Math.round((new Date().getTime()-sessionStorage["analytics.session"])/1000)});h()}function b(){c("app-session-start");sessionStorage["analytics.session"]=new Date().getTime()}setTimeout(h,4000);setInterval(h,10000);return{mpLogEvent:d,logEvent:c,setUser:m,getSession:g}}();;
RR.login=(function(){var h,f;var g;function c(l){RR.settings.firstRun=false;console.log("Got Login Data "+JSON.stringify(l));if(l.uid!=null&&isNaN(l.uid)){l.id=l.uid;if(l.access_token!=null){RR.settings.access_token=l.access_token}}if(typeof(l)=="undefined"||l.id==null){e();return}if(l.id!=null){RR.settings.uid=l.id;RR.settings.loggedInViaFaceBook=!isNaN(l.id)}RR.game.reloadGamesList();if(typeof(RR.chat.listenToMessages)=="function"){RR.chat.listenToMessages()}if(typeof(RR.coinPurchaseManager)!="undefined"){RR.coinPurchaseManager.updateCoinBundlesIfNecessary(function(){console.log("coinBundles downloaded");RR.coinPurchaseManager.verifyCoinBundlesIfNecessary(function(m){console.log("coinBundles verified")})})}if(typeof(RR.bundleManager)!="undefined"){RR.bundleManager.updateBundlesIfNecessary(function(m){console.log("Bundle update success")},function(m){console.log("Bundle update failure:");console.log(m)})}var i={};var j={};if(l.gender!=null){i.gender=l.gender;j.gender=l.gender}i=l;i.tzoffset=new Date().getTimezoneOffset();if(l.first_name!=null&&l.last_name!=null){i.display_name=l.first_name+" "+l.last_name[0]}RR.settings.user=i;var k=window.device||navigator.device;if(typeof(k)!="undefined"){DeviceData.getDeviceData(function(o){console.log("device="+JSON.stringify(k));console.log("device_data="+JSON.stringify(o));if(typeof(o.push_token)!=undefined&&o.push_token!=""){i.push_token=o.push_token;i.push_app=o.app}i.client_udid=o.udid||k.uuid;i.client_device_os_version=k.version;i.client_device_name=k.name;i.client_app=o.app;var m=k.platform.toLowerCase();if(m.indexOf("iphone")==0||m.indexOf("ipod")==0||m.indexOf("ipad")==0){m="ios"}i.client_app_version=m+"-"+o.app_version+"."+o.www_version;i.client_open_udid=o.open_udid;i.client_device_model=o.device_model;RR.api.setUser(i,RR.game.setUserData);var n=RR.analytics.getSession();n.app=i.client_app;n.app_version=i.client_app_version;n.device_model=i.client_device_model;j.open_udid=i.client_open_udid;j.udid=i.client_udid;j.is_facebook_user=RR.settings.loggedInViaFaceBook;n.is_facebook_user=RR.settings.loggedInViaFaceBook;RR.analytics.setUser(RR.settings.uid,j)})}else{RR.api.setUser(i,RR.game.setUserData);RR.analytics.setUser(RR.settings.uid,j)}if(RR.hasOwnProperty("web")){$("#game-board-screen .middle.block").removeClass("lobby");RR.web.createGame();RR.screens.board.startPhoto()}}function d(i,k){console.log("processLoginResponse("+JSON.stringify(i));if(i&&i.authResponse&&i.authResponse.accessToken&&i.authResponse.accessToken.length>10){RR.settings.access_token=i.authResponse.accessToken;var j=i.authResponse.userID||i.authResponse.userId;if(j&&j!="..."&&j!="null"){RR.settings.uid=j}FB.api("/me?fields=locale,gender,first_name,last_name,name,email",function(l){c(l);if($.isFunction(k)){k(i)}});if("lobby" in RR.screens){RR.screens.lobby.run()}}}function e(i){FB.login(function(j){RR.login.processLoginResponse(j,i)},{scope:RR.fb.arrayAsString(RR.fb.basicPermissions)})}function b(){FB.getLoginStatus(function(i){console.log("FB.getLoginStatus got "+JSON.stringify(i));if(i.status==="connected"&&i.authResponse&&i.authResponse.accessToken&&i.authResponse.accessToken.length>10){d(i)}else{RR.screens.login.run()}})}function a(){var i=RR.game.getUserData();if(i.email&&i.access_token&&i.uid==i.email){c(i);RR.screens.lobby.run()}else{b()}}return{doLogin:e,checkLogin:a,processLoginResponse:d,setUserData:c}})();;
RR.photo=(function(){var g=function(l,n){if(typeof(FileReader)==="undefined"||typeof(cordova)==="undefined"||!cordova.available||(RR.common.isiOS&&device.version>="6.0")){var m=new XMLHttpRequest();m.open("GET",l,true);m.responseType="arraybuffer";m.onload=function(t){var r=new Uint8Array(this.response);var q=r.length;var o=new Array(q);while(q--){o[q]=String.fromCharCode(r[q])}var s=o.join("");var p=window.btoa(s);n(p)};m.send()}else{var j=new FileReader();j.onloadend=function(o){var p=o.target.result;p=p.substring(p.indexOf("base64,")+7);n(p)};if(RR.common.isiOS){j.readAsDataURL(l.replace("file://localhost/","/"))}else{if(l.substring(0,"content".length)==="content"){function k(o){j.readAsDataURL(o.fullPath.replace("file:///mnt/","/"))}window.resolveLocalFileSystemURI(l,k,b);return}j.readAsDataURL(l.replace("file:///mnt/","/").substring(0,l.replace("file:///mnt/","/").indexOf("?")))}}};function b(j){console.log("error while resolving local file system url for photo. code: "+JSON.stringify(j))}function f(j,k){RR.game.showModal(".photo-uploading");if(navigator.userAgent.toLowerCase().match(/android/)&&k=="camera"){j=j+"?"+new Date().getTime()}g(j,function(l){RR.api.uploadPhoto(l,function(m){RR.analytics.logEvent("flow-photo-upload",{source:k});RR.screens.answer.show(j,m.id)},function(){RR.game.showModal(".photo-error")})})}function a(j){}function e(){if(navigator.camera==null){f("images/bunny.jpg");return}navigator.camera.getPicture(function(j){f(j,"camera")},a,{quality:73,destinationType:Camera.DestinationType.FILE_URI,sourceType:Camera.PictureSourceType.CAMERA,allowEdit:true,encodingType:Camera.EncodingType.JPEG,targetWidth:640,targetHeight:640})}function d(){if(navigator.camera==null){f("images/bunny.jpg");return}navigator.camera.getPicture(function(j){f(j,"library")},a,{quality:73,destinationType:Camera.DestinationType.FILE_URI,sourceType:Camera.PictureSourceType.PHOTOLIBRARY,allowEdit:true,encodingType:Camera.EncodingType.JPEG,targetWidth:640,targetHeight:640})}function c(m,j,p,n){var k=document.getElementById("myCanvas");var l=k.getContext("2d");var o=new Image();o.onload=function(){var r=0;var z=0;var t=160;var q=160;l.drawImage(o,r,z,t,q);var u=k.toDataURL("image/jpg");thumbnail={caption:j,users:p,dataUrl:u};var w=RR.common.parseLocalStorage("thumbnails",{});w[m]=thumbnail;var v=Object.keys(w).length;for(var s in w){if(v>10){v--;delete w[s]}}localStorage.thumbnails=JSON.stringify(w);console.log("Test thumbnail load completed")};o.src=n}function i(){return(delete localStorage.thumbnails)}function h(){var j=localStorage.thumbnails;if(j!=undefined){j=JSON.parse(j)}return(typeof(j)=="object")?j:{}}return{takePhoto:e,uploadPhoto:d,setThumbnail:c,deleteThumbnails:i,getThumbnailsHash:h}})();;
RR.fb=(function(){var e=["email","publish_actions"];var m=["email","publish_stream","photo_upload","publish_actions"];var f=function(n){var o="";var q=n.length;for(var p in n){o=o+n[p];if(p!=q-1){o=o+", "}}return o};function d(n){FB.getLoginStatus(function(o){if(o.status==="connected"&&o.authResponse&&o.authResponse.accessToken&&o.authResponse.accessToken.length>10){n()}else{FB.login(function(q){if(q&&q.authResponse&&q.authResponse.accessToken&&q.authResponse.accessToken.length>10){var p=RR.game.getUserData();p.fb_access_token=q.authResponse.accessToken;p.fb_uid=q.authResponse.userID||q.authResponse.userId;RR.api.setUser(p,RR.game.setUserData);n()}},{scope:RR.fb.arrayAsString(RR.fb.basicPermissions)})}})}function c(o,n,p){RR.api.getPhotoLink(o,function(q){RR.analytics.logEvent("invite-prompt",{channel:"fb_feed",variant:n});d(function(){if(typeof(p)=="function"){p()}FB.ui({method:"feed",link:q.link_url,picture:q.img_url,name:n},function(r){if(r&&r.post_id){$.ajax({url:"http://trk.rumpus.com/refer/wtp/invite",type:"POST",data:{from:RR.settings.uid,fb_id:r.post_id,invite_id:q.invite_id,content_id:o,channel:"fb_feed",variant:n}})}})})},p)}function h(o,n,p){RR.api.getPhotoLink(o,function(q){RR.analytics.logEvent("invite-prompt",{channel:"tweet",variant:n});window.plugins.twitter.composeTweet(function(r){p();$.ajax({url:"http://trk.rumpus.com/refer/wtp/invite",type:"POST",data:{from:RR.settings.uid,invite_id:q.invite_id,content_id:o,channel:"tweet",variant:n}})},p,n+" #whatthephoto",{urlAttach:q.link_url,imageAttach:q.img_url})},p)}var l=null;var i=function(n){if(l===null){FB.api("me/permissions",function(o){l=o.data[0];n(l)})}else{n(l)}};var g=function(p,o,q,n){i(function(u){var s=true;var t;for(t=0;t<p.length;t++){var r=p[t];if(!u.hasOwnProperty(r)||u[r]!=1){s=false}}if(s){q()}else{if(o){FB.ui({method:"permissions.request",scope:RR.fb.arrayAsString(p),display:"popup"},function(v){l=null;g(p,false,q,n)})}else{n()}}})};var b=function(p,o,n,q){RR.api.postPhotoOnWall(p,o,function(r){if(typeof(n)=="function"){n()}},function(s){var r=function(){var u="Check out my photo challenge on What the Photo?";var t=RR.settings.clickurl+"?s=facebook&c=fb_feed_dialog&ename=invite-clicked&suid="+RR.settings.uid+"&euid="+RR.settings.uid+"&edata=";t+=encodeURIComponent(JSON.stringify({channel:"fb_feed_dialog",variant:u}));t+="&next="+encodeURIComponent(RR.settings.webUrlPrefix+encodeURIComponent(p));RR.analytics.logEvent("invite-prompt",{channel:"fb_feed_dialog",variant:u});console.log("image:"+RR.settings.apiprefix+"image/"+p);FB.ui({method:"feed",link:t,picture:RR.settings.apiprefix+"image/"+p,name:"What The Photo?",caption:u},function(v){if(v&&v.post_id){if(typeof(n)=="function"){n()}RR.analytics.logEvent("invite-sent",{channel:"fb_feed_dialog",variant:u})}else{if(typeof(q)=="function"){q()}}})};RR.fb.permissionsCheck(["share_item"],true,function(){RR.api.postLinkOnWall(p,n,q)},r)})};var a=function(n,r,o,q){var p={channel:"fb_request",variant:"2-"+n.substring(0,200)};RR.analytics.logEvent("invite-prompt",p);FB.ui({method:"apprequests",message:n,to:o,data:JSON.stringify(p)},function(u){if(u.hasOwnProperty("request")){var v=u.request;p.numrcpts=o.length;p.from=RR.settings.uid;p.fb_id=v;$.ajax({url:"http://trk.rumpus.com/refer/wtp/invite",type:"POST",data:p});for(var t in r){var s=r[t];if(s.hasOwnProperty("current_round_id")){RR.api.setFb_request_id(s.current_round_id,v,function(w){},function(w){})}}}q()})};var k=function(){FB.api("me/apprequests",function(n){console.log(JSON.stringify(n));var p=n.data;for(var o=0;o<p.length;o++){console.log("App Request ID: "+p[o].id);j(p[o].id,null)}})};var j=function(n,o){FB.api(n,"delete",function(p){if(o!=null){$.ajax({type:"DELETE",url:RR.settings.apiprefix+"game/fb_request_id/"+encodeURIComponent(o)+"?uid="+RR.settings.uid+"&access_token="+RR.settings.access_token,success:function(q){console.log("fb_request_id deleted from db")}})}})};return{basicPermissions:e,publishPermissions:m,arrayAsString:f,permissionsCheck:g,postPhoto:b,requestPopup:a,deleteAllRequests:k,deleteRequest:j,wallPost:c,tweet:h,doWithFacebook:d}})();;
RR.coinPurchaseManager=(function(){var e=RR.common.parseLocalStorage("coinBundles",[]);var f=RR.common.parseLocalStorage("coinBundlesExpire",0);function g(){return e}function i(k,j){if(Math.floor((new Date()).getTime())>f||e.length==0){console.log("Reseting/Updating coin bundles");c();RR.api.getCoinBundles(function(l){f=new Date();f.setHours(24,0,0,0);localStorage.coinBundlesExpire=f.getTime();e=l;localStorage.coinBundles=JSON.stringify(e);k()},function(l){console.log("Error!");console.log(l);j()})}else{k()}}function a(n,j){if(e.length>0){var m=[];for(var l=0;l<e.length;l++){var k=e[l];if(typeof(k.verified)=="undefined"||k.verified==false){m[l]=("identifier" in k)?k.identifier:""}}if(m.length>0){if(RR.common.isiOS){window.plugins.inAppPurchaseManager.requestProductsData(m,function(r,q){console.log("StoreKit Product Request Success");for(var p=0;p<r.length;p++){for(var o=0;o<e.length;o++){if(e[o]["identifier"]==r[p]["id"]){e[o]["verified"]=true;e[o]["price"]=r[p]["price"];e[o]["tier"]=e[o]["identifier"].substring(e[o]["identifier"].lastIndexOf(".")+1)}}}n(e)},function(o){console.log("Product Request fail");j()})}else{if(RR.common.isAndroid){}else{for(var l=0;l<e.length;l++){e[l]["verified"]=true}n(e)}}}else{n(e)}}else{j("No coinBundles")}}function b(k,j){i(function(l){a(function(m){k(e)},function(m){j(m)})},function(l){j(l)})}function h(k,m,l){var j=function(n,o,p){if(!RR.common.isiOS&&!RR.common.isAndroid){n="Comp"}RR.api.buyCoinBundle(o,p,n,k,200,function(q){RR.game.setUserData(q);m(q)},function(q){console.log("Server said no to coin purchase.");l(q)})};b(function(p){for(var n=0;n<p.length;n++){if(k==p[n]["id"]){var o=p[n]["identifier"];if(RR.common.isiOS){console.log("About to purchase a "+o);window.plugins.inAppPurchaseManager.onPurchased=j;window.plugins.inAppPurchaseManager.onFailed=l;window.plugins.inAppPurchaseManager.makePurchase(o,1)}else{j(null,o,null)}return}}l(404,"Could not find product '"+o+"'")},function(){console.log("failed");l(0,"getCompleteCoinBundles failed")})}function d(){for(var j=0;j<e.length;j++){e[j]["verified"]=false}}function c(){e=[];f=0;localStorage.removeItem("coinBundles");localStorage.removeItem("coinBundlesExpire")}return{getCoinBundles:g,updateCoinBundlesIfNecessary:i,verifyCoinBundlesIfNecessary:a,getCompleteCoinBundles:b,purchaseCoinBundle:h,resetVerified:d,resetCoinBundles:c}})();RR.coinPurchaseManager.resetCoinBundles();RR.coinPurchaseManager.resetVerified();;
RR.bundleManager=(function(){var c=RR.common.parseLocalStorage("bundles",0);var h=RR.common.parseLocalStorage("bundlesExpire",0);function b(j,i){if((new Date).getTime()>h||c.length==0){console.log("getting bundle info");RR.api.getBundles(function(k){c=k;localStorage.bundles=JSON.stringify(c);h=new Date();h.setHours(24,0,0,0);localStorage.bundlesExpire=h.getTime();j(c)},function(k){i(k)})}else{console.log("no update necessary");j(c)}}function a(j,k,i){RR.api.buyBundle(j,function(l){RR.game.setUserData(l);k(l)},function(l){i(l)})}function e(l,j,k,i){RR.api.useItems(l,j,function(m){RR.game.setUserData(m);k(m)},function(m){i(m)})}function g(l){for(var k in c){var j=c[k];if(j.id==l){return j.coins}}return -1}function d(j,i){b(j,i)}function f(){c=[];h=0;localStorage.removeItem("bundles");localStorage.removeItem("bundlesExpire")}return{updateBundlesIfNecessary:b,purchaseBundle:a,getBundles:d,useItems:e,costForBundle:g,resetBundles:f}})();RR.bundleManager.resetBundles();;
RR.api=(function(){$.ajaxSettings.timeout=20000;function v(G,H){if(typeof(navigator.onLine)=="boolean"&&!navigator.onLine){setTimeout(function(){if(navigator.notification!=null){navigator.notification.alert("What The Photo requires an active internet connection to play.",function(){},"Network Required")}else{alert("Network Required: What the Photo requires an active internet connection to play.")}},1);if(typeof(G)=="function"){G()}return true}if((typeof(RR.settings.access_token)=="undefined"||typeof(RR.settings.uid)=="undefined")&&!H){console.log("Missing FB Credentials "+RR.settings.access_token+" "+RR.settings.uid);if(typeof(G)=="function"){G()}return true}return false}function q(I,J,G,H){if(v(G,H)){return}if(typeof(RR.settings.uid)!="undefined"){I.url+=(I.url.indexOf("?")>0?"&uid=":"?uid=")+RR.settings.uid+"&access_token="+RR.settings.access_token}if(I.data==null&&location.protocol.indexOf("http")==0){I.dataType="jsonp";if(I.type!="GET"){I.url+="&method="+I.type}I.success=J}else{if(typeof(J)=="function"){I.success=function(K){if(typeof(K)=="string"&&K.length>0){K=JSON.parse(K)}J(K)}}else{console.log("no callback "+J)}}if(typeof(G)=="function"){I.error=G}console.log(I.type+" "+I.url);$.ajax(I)}function l(I,J,G,H){q({type:"GET",url:RR.settings.apiprefix+I,},J,G,H)}function x(I,H,J,G){q({type:"POST",url:RR.settings.apiprefix+I,data:H},J,G,false)}function i(H,I){if(v()){return}if(location.protocol.indexOf("http")==0){var G=RR.settings.apiprefix+"user/set";H.uid=RR.settings.uid;H.access_token=RR.settings.access_token;$.ajax({url:G,dataType:"jsonp",data:H,success:I})}else{var G=RR.settings.apiprefix+"user/me";$.ajax({type:"POST",url:G+"?uid="+RR.settings.uid+"&access_token="+RR.settings.access_token,data:JSON.stringify(H),contentType:"application/json",success:function(J){if(typeof(J)!="object"){J=JSON.parse(J)}I(J)}})}}function m(H,I,G){x("photo",H,I,G)}function k(H,I,J,G){console.log("setPhotoData("+H);if(v(G)){return}$.ajax({type:"POST",url:RR.settings.apiprefix+"photo/"+encodeURIComponent(H)+"?uid="+RR.settings.uid+"&access_token="+RR.settings.access_token,data:JSON.stringify(I),contentType:"application/json",success:function(K){if(typeof(K)!="object"){K=JSON.parse(K)}if(typeof(J)=="function"){J(K)}},error:G})}function s(H,I,G){l("photo/"+H,I,G,true)}function b(H,G){l("random/photo",H,G)}function C(I,G,J,H){if(v(H)){return}RR.fb.permissionsCheck(RR.fb.basicPermissions,true,function(){$.ajax({type:"GET",url:RR.settings.apiprefix+"facebook/post/?photo_id="+encodeURIComponent(I)+((G!=null)?"&game_id="+encodeURIComponent(G):"")+"&uid="+RR.settings.uid+"&access_token="+RR.settings.access_token,success:function(K){if(typeof(K)!="object"){K=JSON.parse(K)}J(K)},error:H})})}function E(H,I,G){if(v(G)){return}RR.fb.permissionsCheck(["share_item"],true,function(){$.ajax({type:"GET",url:RR.settings.apiprefix+"facebook/link/?photo_id="+encodeURIComponent(H)+"&uid="+RR.settings.uid+"&access_token="+RR.settings.access_token,success:function(J){if(typeof(J)!="object"){J=JSON.parse(J)}I(J)},error:G})})}function j(G,I,H){x("game/new",G,I,H)}function z(G,I,H){if(v(H)){return}$.ajax({url:RR.settings.apiprefix+"game/accept?uid="+RR.settings.uid+"&access_token="+RR.settings.access_token,data:G,dataType:"jsonp",success:function(J){if(typeof(J)!="object"){J=JSON.parse(J)}I(J)},error:H})}function f(H,I,G){l("photo/link/"+H,I,G)}function e(H,G){l("game/list",H,G)}function p(G,J,I){console.log("getGame("+G);var H=RR.games[G];if(H&&H.current_game!=null){J(H)}else{l("game/"+G,function(K){RR.games[K.id]=K;J(K)},I)}}function w(G,I,H){x("game/"+G+"/delete",null,I,H)}function n(G,I,H){x("game/"+G+"/nudge",null,I,H)}function o(H,J,I,G){if(v(G,true)){return}$.ajax({type:"POST",url:RR.settings.apiprefix+"auth/register",data:{email:H,username:J},success:function(K){if(typeof(K)!="object"){K=JSON.parse(K)}I(K)},error:G})}function r(I,H,J,G){if(v(G,true)){return}$.ajax({type:"POST",url:RR.settings.apiprefix+"auth/auth",data:{email:I,password:H},success:function(K){if(typeof(K)!="object"){K=JSON.parse(K)}J(K)},error:G})}function F(H,I,G){if(v(G,true)){return}$.ajax({type:"POST",url:RR.settings.apiprefix+"auth/forgot",data:{email:H},success:function(J){if(typeof(J)!="object"){J=JSON.parse(J)}I(J)},error:G})}function B(G,J,I,H){x("game/fb_request_id/"+G+"?fb_request_id="+J,null,I,H)}function A(H,J,G,K,I){if(typeof(G)=="object"){G=JSON.stringify(G)}x("game/round/"+H,{score:J,replay:G},K,I)}function h(G,I,J,H){x("game/"+G+"/next",{next_round_photo_id:I},J,H)}function d(I,G){var H=RR.common.isiOS?RR.settings.app:"wtp-ios";l("coins?appBundleId="+H,I,G)}function t(K,J,M,H,G,L,I){x("coins/buy",{productId:K,receipt:J,transactionId:M,coinBundleId:H,coins:G},L,I)}function g(H,G){l("bundles",H,G)}function u(H,I,G){x("bundles/buy?bundleId="+H,null,I,G)}function y(I,H,J,G){x("bundles/use?bombs="+I+"&timers="+H,null,J,G)}function c(H,G){l("cotd",H,G)}function D(G,J,I,K,H){x("game/play/"+G,{score:J,replay:I},K,H)}function a(H,I,J,G){x("game/"+H+"/chat",{message:I},J,G)}return{setUser:i,uploadPhoto:m,setPhotoData:k,getPhoto:s,getRandomPhoto:b,postPhotoOnWall:C,postLinkOnWall:E,createGame:j,acceptGame:z,listGames:e,getGame:p,setFb_request_id:B,completeRound:A,nextPhoto:h,deleteGame:w,nudgeGame:n,registerUser:o,authUser:r,restoreUserPassword:F,getCoinBundles:d,buyCoinBundle:t,getBundles:g,buyBundle:u,useItems:y,getCOTD:c,completePhoto:D,sendChatMessage:a,getPhotoLink:f}})();;
DeviceData=(function(){var b=window.cordova||window.Cordova;function a(d){b.exec(d,c,"com.rumpus.wtp.DeviceData","getDeviceData",[])}function c(d){console.error("failed to get device data: "+d)}return{getDeviceData:a}})();;
AdSupport=(function(){var f=window.cordova||window.Cordova;function b(g,h){if(typeof(f)!="undefined"){f.exec(h,c,"com.rumpus.wtp.AdSupport","removeBanner",[g])}}function a(g){if(typeof(f)!="undefined"){if(typeof(RR.analytics)!="undefined"){RR.analytics.logEvent("ads-interstitial-display",{})}f.exec(g,d,"com.rumpus.wtp.AdSupport","displayFullScreenAd",[])}else{g()}}function e(g){if(typeof(f)!="undefined"){f.exec(g,d,"com.rumpus.wtp.AdSupport","preloadInterstitial",[])}else{if(g){g()}}}function c(g){if(typeof(RR.analytics)!="undefined"){RR.analytics.logEvent("ads-visibilitychange-fail",{})}console.error("failed to change visibility of the ad banner: "+g)}function d(g){if(typeof(RR.analytics)!="undefined"){RR.analytics.logEvent("ads-interstitial-fail",{})}console.error("failed show full screen ad: "+g)}return{disableAdBanner:b,preloadInterstitialAd:e,displayFullScreenAd:a}})();;
RumpusAnalytics=(function(){var e=window.cordova||window.Cordova;function d(f,g,h){if(typeof(e)!="undefined"){console.log("RumpusAnalytics.setUser("+f+", "+g+", "+h+") was invoked");e.exec(h,b,"com.rumpus.wtp.RumpusAnalytics","setUser",[f,g])}else{console.error("cordova is undefined")}}function c(f,g,h){if(typeof(e)!="undefined"){console.log("RumpusAnalytics.logEvent("+f+", "+g+", "+h+") was invoked");e.exec(h,a,"com.rumpus.wtp.RumpusAnalytics","logEvent",[f,g])}else{console.error("cordova is undefined")}}function b(f){console.error("failed to set user: "+f)}function a(f){console.error("failed to log event: "+f)}return{setUser:d,logEvent:c}})();;
var InAppPurchaseManager=function(){cordova.exec("InAppPurchaseManager.setup")};InAppPurchaseManager.prototype.makePurchase=function(a,c){var b=parseInt(c);if(!b){b=1}return cordova.exec("InAppPurchaseManager.makePurchase",a,b)};InAppPurchaseManager.prototype.restoreCompletedTransactions=function(){return cordova.exec("InAppPurchaseManager.restoreCompletedTransactions")};InAppPurchaseManager.prototype.requestProductData=function(c,a,d){console.log("requesting.");var b="f"+this.callbackIdx++;window.plugins.inAppPurchaseManager.callbackMap[b]={success:function(f,i,h,g){if(f=="__DONE"){delete window.plugins.inAppPurchaseManager.callbackMap[b];return}a(f,i,h,g)},fail:d};var e="window.plugins.inAppPurchaseManager.callbackMap."+b;cordova.exec("InAppPurchaseManager.requestProductData",c,e+".success",e+".fail")};InAppPurchaseManager.prototype.requestProductsData=function(a,d){var b="b"+this.callbackIdx++;window.plugins.inAppPurchaseManager.callbackMap[b]=function(f,e){delete window.plugins.inAppPurchaseManager.callbackMap[b];d(f,e)};var c="window.plugins.inAppPurchaseManager.callbackMap."+b;cordova.exec("InAppPurchaseManager.requestProductsData",c,{productIds:a})};InAppPurchaseManager.prototype.onPurchased=null;InAppPurchaseManager.prototype.onRestored=null;InAppPurchaseManager.prototype.onFailed=null;InAppPurchaseManager.prototype.onRestoreCompletedTransactionsFinished=null;InAppPurchaseManager.prototype.onRestoreCompletedTransactionsFailed=null;InAppPurchaseManager.prototype.updatedTransactionCallback=function(e,f,a,d,c,b){switch(e){case"PaymentTransactionStatePurchased":if(window.plugins.inAppPurchaseManager.onPurchased){window.plugins.inAppPurchaseManager.onPurchased(d,c,b)}return;case"PaymentTransactionStateFailed":if(window.plugins.inAppPurchaseManager.onFailed){window.plugins.inAppPurchaseManager.onFailed(f,a)}return;case"PaymentTransactionStateRestored":if(window.plugins.inAppPurchaseManager.onRestored){window.plugins.inAppPurchaseManager.onRestored(d,c,b)}return}};InAppPurchaseManager.prototype.restoreCompletedTransactionsFinished=function(){if(this.onRestoreCompletedTransactionsFinished){this.onRestoreCompletedTransactionsFinished()}};InAppPurchaseManager.prototype.restoreCompletedTransactionsFailed=function(a){if(this.onRestoreCompletedTransactionsFailed){this.onRestoreCompletedTransactionsFailed(a)}};InAppPurchaseManager.prototype.runQueue=function(){if(!this.eventQueue.length||(!this.onPurchased&&!this.onFailed&&!this.onRestored)){return}var b;var a=this.eventQueue.slice();this.eventQueue=[];while(b=a.shift()){this.updatedTransactionCallback.apply(this,b)}if(!this.eventQueue.length){this.unWatchQueue()}};InAppPurchaseManager.prototype.watchQueue=function(){if(this.timer){return}this.timer=setInterval("window.plugins.inAppPurchaseManager.runQueue()",10000)};InAppPurchaseManager.prototype.unWatchQueue=function(){if(this.timer){clearInterval(this.timer);this.timer=null}};InAppPurchaseManager.prototype.callbackMap={};InAppPurchaseManager.prototype.callbackIdx=0;InAppPurchaseManager.prototype.eventQueue=[];InAppPurchaseManager.prototype.timer=null;if(typeof(cordova)!="undefined"){cordova.addConstructor(function(){if(!window.Cordova){window.Cordova=cordova}if(!window.plugins){window.plugins={}}window.plugins.inAppPurchaseManager=InAppPurchaseManager.manager=new InAppPurchaseManager()})};;
RR.chat=(function(){var a=false;var o=false;var i="";var g="";var k=new Pusher(RR.settings.pusherKey);function e(){var q=k.subscribe(b(RR.settings.access_token));q.bind("new_message",function(r){j(r)})}function p(){k.disconnect()}function h(){k=new Pusher(RR.settings.pusherKey);e()}function j(s){if(RR.chat.chatOpenGameId==s.gameId){$("#message").addClass("nmsg");var t=parseInt($("#message div").html());t+=1;$("#message div").html(t);RR.screens.chatroom.addMessage(s.message,l(s.gameId),false);RR.screens.chatroom.refreshChatScreen();var q=RR.game.getGame(s.gameId);RR.chat.setReadMessages(q.id,RR.chat.countMessagesByThem(q))}else{var r="#game"+s.gameId+" .message";$(r).addClass("active");r+=" span";var t=parseInt($(r).html());t+=1;$(r).html(t)}}function b(q){return new String(q).replace(/[^A-Za-z0-9_-]/g,"")}function l(u){var s=RR.game.getGamesList();for(var t=0;t<s.length;t++){if(s[t]["id"]==u){var r=RR.game.getUserData()["display_name"];var v=s[t]["active_name"];var q=s[t]["waiting_name"];if(r==v){return q}else{return v}}}return null}function f(s){var r=n(s);if(r==null){return null}var t=(r.active_uid==RR.settings.uid);var q=r.round_number;if(r.previous_round_number!=null&&t&&r.current_round!=undefined&&r.current_round.replay==undefined){q=r.previous_round_number}return q}function n(s){var q=RR.game.getGamesList();for(var r=0;r<q.length;r++){if(q[r]["id"]==s){return q[r]}}return null}function d(q){var s=0;if(typeof(q.chat_messages)=="undefined"){return 0}for(var r=0;r<q.chat_messages.length;r++){if(q.chat_messages[r].author_uid!=RR.settings.uid){s++}}return s}function c(q){var r=RR.common.parseLocalStorage("read_messages",{});return(q in r)?r[q]:0}function m(q,s){if(o){$("#message").removeClass("nmsg")}var r=RR.common.parseLocalStorage("read_messages",{});if(s==0){delete r[q]}else{r[q]=s}localStorage.read_messages=JSON.stringify(r)}return{chatOpen:a,chatOpenGameId:i,inGame:o,chatSource:g,getOpponentName:l,listenToMessages:e,getRoundNumber:f,disconnectFromPusher:p,reconnectToPusher:h,getReadMessages:c,setReadMessages:m,countMessagesByThem:d,getGameForId:n}})();;
RR.abtesting=function(){function a(){}return{setup:a}}();;
(function(b){var a="waitForImages";b.waitForImages={hasImageProperties:["background-image"]};b.fn.waitForImages=function(e,c,d){if(b.isPlainObject(arguments[0])){c=e.each;d=e.waitForAll;e=e.finished}e=e||b.noop;c=c||b.noop;d=!!d;if(!b.isFunction(e)||!b.isFunction(c)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var j=b(this),k=[];if(d){var f=b.waitForImages.hasImageProperties||[],i=/url\((['"]?)(.*?)\1\)/g;j.find("*").each(function(){var l=b(this);if(l.is("img")){k.push({src:l.attr("src"),element:l[0]})}b.each(f,function(o,p){var m=l.css(p);if(!m){return true}var n;while(n=i.exec(m)){k.push({src:n[2],element:l[0]})}})})}else{j.find("img").each(function(){k.push({src:this.src,element:this})})}var h=k.length,g=0;if(h==0){e.call(j[0])}b.each(k,function(m,l){var n=new Image;b(n).bind("load."+a+" error."+a,function(o){g++;c.call(l.element,g,h,o.type=="load");if(g==h){e.call(j[0]);return false}});n.src=l.src})})}})(Zepto||jQuery);;
iRate=(function(){var b=window.cordova||window.Cordova;function a(c){if(typeof(b)!="undefined"&&b.available&&(navigator.userAgent.match(/(iphone|ipad|ipod)/i)!=null)){b.exec(null,null,"com.rumpus.irate","runiRate",[c])}}return{rateFirstTime:a}})();;
