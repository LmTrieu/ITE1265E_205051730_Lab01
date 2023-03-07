/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});;jQuery.event.special.touchstart={setup:function(_,ns,handle){this.addEventListener("touchstart",handle,{passive:!ns.includes("noPreventDefault")});}};jQuery.event.special.touchmove={setup:function(_,ns,handle){this.addEventListener("touchmove",handle,{passive:!ns.includes("noPreventDefault")});}};jQuery.event.special.wheel={setup:function(_,ns,handle){this.addEventListener("wheel",handle,{passive:true});}};jQuery.event.special.mousewheel={setup:function(_,ns,handle){this.addEventListener("mousewheel",handle,{passive:true});}};;function in_array(p_val,arrData)
{var i=0;var count=arrData.length;for(i=0;i<count;i++)
{if(arrData[i]===p_val)
{return true;}}
return false;}
function time()
{var $time=new Date();return Math.ceil($time.getTime()/1000);}
function isset(val)
{var outPut=true;try
{eval(val);}
catch(e)
{outPut=false;}
return outPut;}
function is_int(val)
{return parseInt(val)===val;}
function number_format(nStr)
{nStr+="";var rgx=/(\d+)(\d{3})/;while(rgx.test(nStr))
{nStr=nStr.replace(rgx,'$1'+','+'$2');}
return nStr;}
function mktime()
{var d=new Date(),r=arguments,i=0,e=['Hours','Minutes','Seconds','Month','Date','FullYear'];for(i=0;i<e.length;i++){if(typeof r[i]==='undefined'){r[i]=d['get'+e[i]]();r[i]+=(i===3);}else{r[i]=parseInt(r[i],10);if(isNaN(r[i])){return false;}}}
r[5]+=(r[5]>=0?(r[5]<=69?2e3:(r[5]<=100?1900:0)):0);d.setFullYear(r[5],r[3]-1,r[4]);d.setHours(r[0],r[1],r[2]);return(d.getTime()/1e3>>0)-(d.getTime()<0);}
function date(format,timestamp)
{var that=this,jsdate,f,formatChr=/\\?([a-z])/gi,formatChrCb,_pad=function(n,c){n=n.toString();return n.length<c?_pad('0'+n,c,'0'):n;},txt_words=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"];formatChrCb=function(t,s){return f[t]?f[t]():s;};f={d:function(){return _pad(f.j(),2);},D:function(){return f.l().slice(0,3);},j:function(){return jsdate.getDate();},l:function(){return txt_words[f.w()]+'day';},N:function(){return f.w()||7;},S:function(){var j=f.j()
i=j%10;if(i<=3&&parseInt((j%100)/10)==1)
i=0;return['st','nd','rd'][i-1]||'th';},w:function(){return jsdate.getDay();},z:function(){var a=new Date(f.Y(),f.n()-1,f.j()),b=new Date(f.Y(),0,1);return Math.round((a-b)/864e5);},W:function(){var a=new Date(f.Y(),f.n()-1,f.j()-f.N()+3),b=new Date(a.getFullYear(),0,4);return _pad(1+Math.round((a-b)/864e5/7),2);},F:function(){return txt_words[6+f.n()];},m:function(){return _pad(f.n(),2);},M:function(){return f.F().slice(0,3);},n:function(){return jsdate.getMonth()+1;},t:function(){return(new Date(f.Y(),f.n(),0)).getDate();},L:function(){var j=f.Y();return j%4===0&j%100!==0|j%400===0;},o:function(){var n=f.n(),W=f.W(),Y=f.Y();return Y+(n===12&&W<9?1:n===1&&W>9?-1:0);},Y:function(){return jsdate.getFullYear();},y:function(){return f.Y().toString().slice(-2);},a:function(){return jsdate.getHours()>11?"pm":"am";},A:function(){return f.a().toUpperCase();},B:function(){var H=jsdate.getUTCHours()*36e2,i=jsdate.getUTCMinutes()*60,s=jsdate.getUTCSeconds();return _pad(Math.floor((H+i+s+36e2)/86.4)%1e3,3);},g:function(){return f.G()%12||12;},G:function(){return jsdate.getHours();},h:function(){return _pad(f.g(),2);},H:function(){return _pad(f.G(),2);},i:function(){return _pad(jsdate.getMinutes(),2);},s:function(){return _pad(jsdate.getSeconds(),2);},u:function(){return _pad(jsdate.getMilliseconds()*1000,6);},e:function(){throw'Not supported (see source code of date() for timezone on how to add support)';},I:function(){var a=new Date(f.Y(),0),c=Date.UTC(f.Y(),0),b=new Date(f.Y(),6),d=Date.UTC(f.Y(),6);return((a-c)!==(b-d))?1:0;},O:function(){var tzo=jsdate.getTimezoneOffset(),a=Math.abs(tzo);return(tzo>0?"-":"+")+_pad(Math.floor(a/60)*100+a%60,4);},P:function(){var O=f.O();return(O.substr(0,3)+":"+O.substr(3,2));},T:function(){return'UTC';},Z:function(){return-jsdate.getTimezoneOffset()*60;},c:function(){return'Y-m-d\\TH:i:sP'.replace(formatChr,formatChrCb);},r:function(){return'D, d M Y H:i:s O'.replace(formatChr,formatChrCb);},U:function(){return jsdate/1000|0;}};this.date=function(format,timestamp){that=this;jsdate=(timestamp===undefined?new Date():(timestamp instanceof Date)?new Date(timestamp):new Date(timestamp*1000));return format.replace(formatChr,formatChrCb);};return this.date(format,timestamp);}
function strip_tags(input,allowed)
{if(!input)
{return'';}
allowed=(((allowed||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join('');var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,commentsAndPhpTags=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return input.replace(commentsAndPhpTags,'').replace(tags,function($0,$1){return allowed.indexOf('<'+$1.toLowerCase()+'>')>-1?$0:'';});}
function stripslashes(str)
{str=(str+'').replace(/\\(.?)/g,function(s,n1)
{switch(n1)
{case'\\':return'';case'0':return'\u0000';case'':return'';default:return n1;}});str=(str+'').replace(/\/(.?)/g,function(s,n1)
{switch(n1)
{case'\/':return'';default:return n1;}});return str;}
function str_replace(search,replace,subject,count)
{var i=0,j=0,temp='',repl='',sl=0,fl=0,f=[].concat(search),r=[].concat(replace),s=subject,ra=Object.prototype.toString.call(r)==='[object Array]',sa=Object.prototype.toString.call(s)==='[object Array]';s=[].concat(s);if(count){this.window[count]=0;}
for(i=0,sl=s.length;i<sl;i++){if(s[i]===''){continue;}
for(j=0,fl=f.length;j<fl;j++){temp=s[i]+'';repl=ra?(r[j]!==undefined?r[j]:''):r[0];s[i]=(temp).split(f[j]).join(repl);if(count&&s[i]!==temp){this.window[count]+=(temp.length-s[i].length)/f[j].length;}}}
return sa?s:s[0];}
function trim(str,charlist)
{var whitespace,l=0,i=0;str+='';if(!charlist)
{whitespace=" \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";}
else
{charlist+='';whitespace=charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'$1');}
l=str.length;for(i=0;i<l;i++)
{if(whitespace.indexOf(str.charAt(i))===-1)
{str=str.substring(i);break;}}
l=str.length;for(i=l-1;i>=0;i--)
{if(whitespace.indexOf(str.charAt(i))===-1)
{str=str.substring(0,i+1);break;}}
var outPut=whitespace.indexOf(str.charAt(0))===-1?str:'';outPut.replace(/\s\s+/g,' ');return outPut;}
function clear_str(str)
{var str_strip_tags,str_stripslashes,str_trim,outPut;str_strip_tags=strip_tags(str);str_stripslashes=stripslashes(str_strip_tags);str_trim=trim(str_stripslashes,'-');outPut=str_replace(' ','-',str_trim);return outPut;}
function nl2br(str,is_xhtml){var breakTag=(is_xhtml||typeof is_xhtml==='undefined')?'<br '+'/>':'<br>';return(str+'').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1'+breakTag+'$2');}
function explode(delimiter,string,limit){if(arguments.length<2||typeof delimiter==='undefined'||typeof string==='undefined')
return null;if(delimiter===''||delimiter===false||delimiter===null)
return false;if(typeof delimiter==='function'||typeof delimiter==='object'||typeof string==='function'||typeof string==='object'){return{0:''};}
if(delimiter===true)
delimiter='1';delimiter+='';string+='';var s=string.split(delimiter);if(typeof limit==='undefined')
return s;if(limit===0)
limit=1;if(limit>0){if(limit>=s.length)
return s;return s.slice(0,limit-1).concat([s.slice(limit-1).join(delimiter)]);}
if(-limit>=s.length)
return[];s.splice(s.length+limit);return s;}
function timeStartOfThisDay(time_now)
{var output;time_now=time_now?time_now:time();output=mktime(0,0,0,date('m',time_now),date('d',time_now),date('Y',time_now));return output;}
function strpos(haystack,needle,offset){var i=(haystack+'').indexOf(needle,(offset||0));return i===-1?false:i;}
function require(filename)
{document.write('<script type="text/javascript" src="'+filename+'"></script>');}
function str_to_time(str_date)
{var sep,arrDate;sep=strpos(str_date,'/')>0?'/':(strpos(str_date,'-')>0?'-':'.');arrDate=explode(sep,str_date);return mktime(0,0,0,arrDate[1],arrDate[0],arrDate[2]);}
function base64_encode(data)
{var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,enc="",tmp_arr=[];if(!data){return data;}
do{o1=data.charCodeAt(i++);o2=data.charCodeAt(i++);o3=data.charCodeAt(i++);bits=o1<<16|o2<<8|o3;h1=bits>>18&0x3f;h2=bits>>12&0x3f;h3=bits>>6&0x3f;h4=bits&0x3f;tmp_arr[ac++]=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4);}while(i<data.length);enc=tmp_arr.join('');var r=data.length%3;return(r?enc.slice(0,r-3):enc)+'==='.slice(r||3);}
function base64_decode(data)
{var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,dec="",tmp_arr=[];if(!data){return data;}
data+='';do{h1=b64.indexOf(data.charAt(i++));h2=b64.indexOf(data.charAt(i++));h3=b64.indexOf(data.charAt(i++));h4=b64.indexOf(data.charAt(i++));bits=h1<<18|h2<<12|h3<<6|h4;o1=bits>>16&0xff;o2=bits>>8&0xff;o3=bits&0xff;if(h3==64){tmp_arr[ac++]=String.fromCharCode(o1);}else if(h4==64){tmp_arr[ac++]=String.fromCharCode(o1,o2);}else{tmp_arr[ac++]=String.fromCharCode(o1,o2,o3);}}while(i<data.length);dec=tmp_arr.join('');return dec;}
function utf8_encode(argString){if(argString===null||typeof argString==="undefined"){return"";}
var string=(argString+'');var utftext='',start,end,stringl=0;start=end=0;stringl=string.length;for(var n=0;n<stringl;n++){var c1=string.charCodeAt(n);var enc=null;if(c1<128){end++;}else if(c1>127&&c1<2048){enc=String.fromCharCode((c1>>6)|192,(c1&63)|128);}else if(c1&0xF800!=0xD800){enc=String.fromCharCode((c1>>12)|224,((c1>>6)&63)|128,(c1&63)|128);}else{if(c1&0xFC00!=0xD800){throw new RangeError("Unmatched trail surrogate at "+n);}
var c2=string.charCodeAt(++n);if(c2&0xFC00!=0xDC00){throw new RangeError("Unmatched lead surrogate at "+(n-1));}
c1=((c1&0x3FF)<<10)+(c2&0x3FF)+0x10000;enc=String.fromCharCode((c1>>18)|240,((c1>>12)&63)|128,((c1>>6)&63)|128,(c1&63)|128);}
if(enc!==null){if(end>start){utftext+=string.slice(start,end);}
utftext+=enc;start=end=n+1;}}
if(end>start){utftext+=string.slice(start,stringl);}
return utftext;}
function md5(str){var xl;var rotateLeft=function(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));};var addUnsigned=function(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&0x80000000);lY8=(lY&0x80000000);lX4=(lX&0x40000000);lY4=(lY&0x40000000);lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4){return(lResult^0x80000000^lX8^lY8);}
if(lX4|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8);}else{return(lResult^0x40000000^lX8^lY8);}}else{return(lResult^lX8^lY8);}};var _F=function(x,y,z){return(x&y)|((~x)&z);};var _G=function(x,y,z){return(x&z)|(y&(~z));};var _H=function(x,y,z){return(x^y^z);};var _I=function(x,y,z){return(y^(x|(~z)));};var _FF=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_F(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _GG=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_G(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _HH=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_H(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _II=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_I(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var convertToWordArray=function(str){var lWordCount;var lMessageLength=str.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=new Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(str.charCodeAt(lByteCount)<<lBytePosition));lByteCount++;}
lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray;};var wordToHex=function(lValue){var wordToHexValue="",wordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;wordToHexValue_temp="0"+lByte.toString(16);wordToHexValue=wordToHexValue+wordToHexValue_temp.substr(wordToHexValue_temp.length-2,2);}
return wordToHexValue;};var x=[],k,AA,BB,CC,DD,a,b,c,d,S11=7,S12=12,S13=17,S14=22,S21=5,S22=9,S23=14,S24=20,S31=4,S32=11,S33=16,S34=23,S41=6,S42=10,S43=15,S44=21;str=this.utf8_encode(str);x=convertToWordArray(str);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;xl=x.length;for(k=0;k<xl;k+=16){AA=a;BB=b;CC=c;DD=d;a=_FF(a,b,c,d,x[k+0],S11,0xD76AA478);d=_FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=_FF(c,d,a,b,x[k+2],S13,0x242070DB);b=_FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=_FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=_FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=_FF(c,d,a,b,x[k+6],S13,0xA8304613);b=_FF(b,c,d,a,x[k+7],S14,0xFD469501);a=_FF(a,b,c,d,x[k+8],S11,0x698098D8);d=_FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=_FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=_FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=_FF(a,b,c,d,x[k+12],S11,0x6B901122);d=_FF(d,a,b,c,x[k+13],S12,0xFD987193);c=_FF(c,d,a,b,x[k+14],S13,0xA679438E);b=_FF(b,c,d,a,x[k+15],S14,0x49B40821);a=_GG(a,b,c,d,x[k+1],S21,0xF61E2562);d=_GG(d,a,b,c,x[k+6],S22,0xC040B340);c=_GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=_GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=_GG(a,b,c,d,x[k+5],S21,0xD62F105D);d=_GG(d,a,b,c,x[k+10],S22,0x2441453);c=_GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=_GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=_GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=_GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=_GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=_GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=_GG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=_GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=_GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=_GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=_HH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=_HH(d,a,b,c,x[k+8],S32,0x8771F681);c=_HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=_HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=_HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=_HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=_HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=_HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=_HH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=_HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=_HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=_HH(b,c,d,a,x[k+6],S34,0x4881D05);a=_HH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=_HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=_HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=_HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=_II(a,b,c,d,x[k+0],S41,0xF4292244);d=_II(d,a,b,c,x[k+7],S42,0x432AFF97);c=_II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=_II(b,c,d,a,x[k+5],S44,0xFC93A039);a=_II(a,b,c,d,x[k+12],S41,0x655B59C3);d=_II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=_II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=_II(b,c,d,a,x[k+1],S44,0x85845DD1);a=_II(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=_II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=_II(c,d,a,b,x[k+6],S43,0xA3014314);b=_II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=_II(a,b,c,d,x[k+4],S41,0xF7537E82);d=_II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=_II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=_II(b,c,d,a,x[k+9],S44,0xEB86D391);a=addUnsigned(a,AA);b=addUnsigned(b,BB);c=addUnsigned(c,CC);d=addUnsigned(d,DD);}
var temp=wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);return temp.toLowerCase();}
function strlen(string){var str=string+'';var i=0,chr='',lgth=0;if(!this.php_js||!this.php_js.ini||!this.php_js.ini['unicode.semantics']||this.php_js.ini['unicode.semantics'].local_value.toLowerCase()!=='on'){return string.length;}
var getWholeChar=function(str,i){var code=str.charCodeAt(i);var next='',prev='';if(0xD800<=code&&code<=0xDBFF){if(str.length<=(i+1)){throw'High surrogate without following low surrogate';}
next=str.charCodeAt(i+1);if(0xDC00>next||next>0xDFFF){throw'High surrogate without following low surrogate';}
return str.charAt(i)+str.charAt(i+1);}else if(0xDC00<=code&&code<=0xDFFF){if(i===0){throw'Low surrogate without preceding high surrogate';}
prev=str.charCodeAt(i-1);if(0xD800>prev||prev>0xDBFF){throw'Low surrogate without preceding high surrogate';}
return false;}
return str.charAt(i);};for(i=0,lgth=0;i<str.length;i++){if((chr=getWholeChar(str,i))===false){continue;}
lgth++;}
return lgth;}
function array_rand(input,num_req){var indexes=[];var ticks=num_req||1;var checkDuplicate=function(input,value){var exist=false,index=0,il=input.length;while(index<il){if(input[index]===value){exist=true;break;}
index++;}
return exist;};if(Object.prototype.toString.call(input)==='[object Array]'&&ticks<=input.length){while(true){var rand=Math.floor((Math.random()*input.length));if(indexes.length===ticks){break;}
if(!checkDuplicate(indexes,rand)){indexes.push(rand);}}}else{indexes=null;}
return((ticks==1)?indexes.join():indexes);}
function nl2br(str,is_xhtml){var breakTag=(is_xhtml||typeof is_xhtml==='undefined')?'<br '+'/>':'<br>';return(str+'').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1'+breakTag+'$2');};function is_email(email)
{var regEx=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return regEx.test(email);}
function array_toggle(element,arrData)
{if(in_array(element,arrData))
{delete arrData[arrData.indexOf(element)];}
else
{arrData.push(element);}
return arrData;};function is_simple_char(c)
{var outPut=false;if(c>=65&&c<=90||c>=48&&c<=57)
{outPut=true;}
return outPut;};function full_trim(str)
{return trim(str.replace(/\s+/g,' '));};function clear_vn_sign(str)
{  str=str.toLowerCase();  str=str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");  str=str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");  str=str.replace(/ì|í|ị|ỉ|ĩ/g,"i");  str=str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");  str=str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");  str=str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");  str=str.replace(/đ/g,"d");  str=str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");  str=str.replace(/-+-/g,"-");  str=str.replace(/^\-+|\-+$/g,"");  return str;};function isURL(str)
{var urlregex=new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");if(urlregex.test(str))
{return(true);}
return(false);};;(function($){$.alerts={verticalOffset:-75,horizontalOffset:0,repositionOnResize:true,overlayOpacity:.01,overlayColor:'#FFF',draggable:true,okButton:'&nbsp;Đồng ý&nbsp;',cancelButton:'&nbsp;Hủy&nbsp;',dialogClass:null,alert:function(message,title,callback){if(title==null)title='Alert';$.alerts._show(title,message,null,'alert',function(result){if(callback)callback(result);});},confirm:function(message,title,callback){if(title==null)title='Confirm';$.alerts._show(title,message,null,'confirm',function(result){if(callback)callback(result);});},prompt:function(message,value,title,callback){if(title==null)title='Prompt';$.alerts._show(title,message,value,'prompt',function(result){if(callback)callback(result);});},_show:function(title,msg,value,type,callback){$.alerts._hide();$.alerts._overlay('show');$("BODY").append('<div id="popup_container">'+'<h1 id="popup_title"></h1>'+'<div id="popup_content">'+'<div id="popup_message"></div>'+'</div>'+'</div>');if($.alerts.dialogClass)$("#popup_container").addClass($.alerts.dialogClass);var pos='fixed';$("#popup_container").css({position:pos,zIndex:99999,padding:0,margin:0});$("#popup_title").text(title);$("#popup_content").addClass(type);$("#popup_message").text(msg);$("#popup_message").html($("#popup_message").text().replace(/\n/g,'<br />'));$("#popup_container").css({minWidth:$("#popup_container").outerWidth(),maxWidth:$("#popup_container").outerWidth()});$.alerts._reposition();$.alerts._maintainPosition(true);switch(type){case'alert':$("#popup_message").after('<div id="popup_panel"><input type="button" value="'+$.alerts.okButton+'" id="popup_ok" /></div>');$("#popup_ok").click(function(){$.alerts._hide();callback(true);});$("#popup_ok").focus().keypress(function(e){if(e.keyCode==13||e.keyCode==27)$("#popup_ok").trigger('click');});break;case'confirm':$("#popup_message").after('<div id="popup_panel"><input type="button" value="'+$.alerts.okButton+'" id="popup_ok" /> <input type="button" value="'+$.alerts.cancelButton+'" id="popup_cancel" /></div>');$("#popup_ok").click(function(){$.alerts._hide();if(callback)callback(true);});$("#popup_cancel").click(function(){$.alerts._hide();if(callback)callback(false);});$("#popup_ok").focus();$("#popup_ok, #popup_cancel").keypress(function(e){if(e.keyCode==13)$("#popup_ok").trigger('click');if(e.keyCode==27)$("#popup_cancel").trigger('click');});break;case'prompt':$("#popup_message").append('<br /><textarea rows="4" id="popup_prompt" ></textarea>').after('<div id="popup_panel"><input type="button" value="'+$.alerts.okButton+'" id="popup_ok" /> <input type="button" value="'+$.alerts.cancelButton+'" id="popup_cancel" /></div>');$("#popup_prompt").width($("#popup_message").width());$("#popup_ok").click(function(){var val=$("#popup_prompt").val();$.alerts._hide();if(callback)callback(val);});$("#popup_cancel").click(function(){$.alerts._hide();if(callback)callback(null);});$("#popup_prompt, #popup_ok, #popup_cancel").keypress(function(e){if(e.keyCode==27)$("#popup_cancel").trigger('click');});if(value)$("#popup_prompt").val(value);$("#popup_prompt").focus().select();break;}
if($.alerts.draggable){try{$("#popup_container").draggable({handle:$("#popup_title")});$("#popup_title").css({cursor:'move'});}catch(e){}}},_hide:function(){$("#popup_container").remove();$.alerts._overlay('hide');$.alerts._maintainPosition(false);},_overlay:function(status){switch(status){case'show':$.alerts._overlay('hide');$("BODY").append('<div id="popup_overlay"></div>');$("#popup_overlay").css({position:'absolute',zIndex:99998,top:'0px',left:'0px',width:'100%',height:$(document).height(),background:$.alerts.overlayColor,opacity:$.alerts.overlayOpacity});break;case'hide':$("#popup_overlay").remove();break;}},_reposition:function(){var top=(($(window).height()/2)-($("#popup_container").outerHeight()/2))+$.alerts.verticalOffset;var left=(($(window).width()/2)-($("#popup_container").outerWidth()/2))+$.alerts.horizontalOffset;if(top<0)top=0;if(left<0)left=0;$("#popup_container").css({top:top+'px',left:left+'px'});$("#popup_overlay").height($(document).height());},_maintainPosition:function(status){if($.alerts.repositionOnResize){switch(status){case true:$(window).bind('resize',$.alerts._reposition);break;case false:$(window).unbind('resize',$.alerts._reposition);break;}}}}
jAlert=function(message,title,callback){$.alerts.alert(message,title,callback);}
jConfirm=function(message,title,callback){$.alerts.confirm(message,title,callback);};jPrompt=function(message,value,title,callback){$.alerts.prompt(message,value,title,callback);};})(jQuery);function ialert(msg,callback,obj,title,options)
{var func;if(callback)
{if(typeof callback==='function')
{options=title;title=obj;func=callback;}
else if(typeof obj==='object')
{if(typeof obj[callback]==='function')
{func=function()
{(obj[callback])();};}
if(typeof title==='object')
{options=title;title=undefined;}}
else if(typeof callback==='string')
{title=callback;}}
if(!title)
{title='UEF thông báo';}
$.alerts.alert(msg,title,func,options);}
function iprompt(msg,callback,obj,value,title)
{var func;if(typeof callback==='function')
{title=value;value=obj;func=callback;}
else if(typeof obj[callback]==='function')
{func=function(result)
{(obj[callback])(result);};}
if(!title)
{title='Edunet.com.vn';}
$.alerts.prompt(msg,value,title,func);}
function iconfirm(msg,callback,obj,title)
{var func;if(typeof callback==='function')
{title=obj;func=callback;}
else if(typeof obj[callback]==='function')
{func=function(result)
{(obj[callback])(result);};}
if(!title)
{title='Edunet xác nhận';}
$.alerts.confirm(msg,title,func);};$.fn.ImageCropper=function(method)
{var default_config={crop:[0,0,40,40],config:{width:40,height:40,maxFileSize:'50k'},ajax_upload:{maxWidth:650,maxHeight:475,fileType:'image'}};var events={show_cropper:function()
{var $this=$(this);$this.bind('click',function()
{methods.private.show_cropper.call($this);});},close_cropper:function()
{var $this=$(this),$popup;$popup=methods.private.get_data.call($this,'popup');$popup.find('.j-close-popup, .j-cancel').bind('click',function()
{methods.private.close_cropper.call($this);});},save_cropper:function()
{var $this=$(this),$popup;$popup=methods.private.get_data.call($this,'popup');$popup.find('.j-save').bind('click',function()
{methods.private.save_cropper.call($this);});},upload_img:function()
{var $this=$(this),$popup;$popup=methods.private.get_data.call($this,'popup');$popup.find('.j-upload-new-img').bind('change',function(e,img_src)
{var update_img=function()
{methods.private.update_img.call($this,img_src);};methods.private.delete_image_uploaded.call($this,update_img);});}};var methods={private:{init:function()
{var $this=$(this);var call_func=function()
{var $this=$(this);$.jarvis.call_func(events,$this);};var image_crop_info=$this.data('image-cropper');default_config.config=$.extend({},default_config.config,image_crop_info.config);methods.private.load_html.call($this,call_func);},show_cropper:function()
{var $this=$(this),$popup,cropper_data,info;cropper_data=methods.private.get_data.call($this);$popup=methods.private.get_data.call($this,'popup');$popup.CenterPopup();if(cropper_data.img_src)
{$.jarvis.loading();var succCreateTmpImage=function(data)
{$.jarvis.loading('stop');var action={img_src:data.img_src,crop:cropper_data.crop};methods.private.update_img.call($this,action.img_src,action.crop);};info={img_src:cropper_data.img_src};$.jarvis.ajax('jarvis/activity/CreateTmpImage?$res=data-only',succCreateTmpImage,info);}},update_img:function(img_src,crop)
{var $this=$(this),$popup,$wrap_img_root,img_area_select,$wrap_img_preview,img_root,$img_root,config,$img_preview,data;data=methods.private.get_data.call($this);if(!crop)
{crop=default_config.crop;}
data.action={img_src:img_src,crop:crop};methods.private.set_data.call($this,data);config=default_config.config;$popup=methods.private.get_data.call($this,'popup');$wrap_img_root=$popup.find('.wrap-img-root');$wrap_img_preview=$popup.find('.wrap-img-preview');img_root=new Image();$img_root=$(img_root);$img_root.attr('src',img_src);$wrap_img_root.find('.img-root').html($img_root).removeClass('hide');$wrap_img_root.find('.no-img').addClass('hide');$img_preview=$img_root.clone();$wrap_img_preview.find('.img-preview').html($img_preview).removeClass('hide');$wrap_img_preview.find('.no-img').addClass('hide');var preview=function(img,selection)
{methods.private.preview.call($this,selection);};var save_selection=function(img,selection)
{methods.private.save_selection.call($this,selection);};var img_area_select_option={instance:true,persistent:true,handles:true,aspectRatio:'1:1',zIndex:$popup.attr('z-index')- -1,minWidth:config.width,minHeight:config.height,x1:crop[0],y1:crop[1],x2:crop[2],y2:crop[3],onSelectChange:preview,onSelectEnd:save_selection,onInit:preview};$img_root.load(function()
{methods.private.remove_selection.call($this);img_area_select=$img_root.imgAreaSelect(img_area_select_option);methods.private.set_data.call($this,'img-area-select',img_area_select);$.jarvis.loading('stop');});},preview:function(selection)
{var $this=$(this),$popup,scaleX,scaleY,width,height,top,left,config,$img_root;config=default_config.config;$popup=methods.private.get_data.call($this,'popup');$img_root=$popup.find('.wrap-img-root .img-root img');scaleX=selection.width>0?config.width/selection.width:1;scaleY=selection.height>0?config.height/selection.height:1;width=scaleX*$img_root.width();height=scaleY*$img_root.height();top=-1*scaleY*selection.y1;left=-1*scaleX*selection.x1;$popup.find('.wrap-img-preview .img-preview img').css({width:width+'px',height:height+'px',marginLeft:left+'px',marginTop:top+'px'});},save_selection:function(selection)
{var $this=$(this),data;data=methods.private.get_data.call($this);data.action.crop=[selection.x1,selection.y1,selection.x2,selection.y2];methods.private.set_data.call($this,data);},succ_save_cropper:function(data)
{var $this=$(this);if(data.succ)
{$this.trigger('change',[data.info]);}
else
{ialert('Cắt ảnh không thành công. Vui lòng thử lại.','reload',location);}},save_cropper:function()
{var $this=$(this),info;info=methods.private.get_data.call($this,'action');info.config=default_config.config;var succSaveCropper=function(data)
{methods.private.succ_save_cropper.call($this,data);};$.jarvis.ajax('jarvis/activity/SaveImageCropper?$res=data-only',succSaveCropper,info,'post');},close_cropper:function(action_type)
{var $this=$(this),$popup;$popup=methods.private.get_data.call($this,'popup');$popup.CenterPopup('close');methods.private.remove_selection.call($this);var clear_data=function()
{methods.private.clear_data.call($this);};if(action_type==='save')
{clear_data();}
else
{methods.private.delete_image_uploaded.call($this,clear_data);}},clear_data:function()
{var $this=$(this),$popup;$popup=methods.private.get_data.call($this,'popup');methods.private.set_data.call($this,'action',false);methods.private.set_data.call($this,'img-area-select',false);},delete_image_uploaded:function(callback)
{var $this=$(this),data;data=methods.private.get_data.call($this);var succDeleteImageUploaded=function()
{if(typeof callback==='function')
{callback();}};$.jarvis.ajax('jarvis/activity/DeleteTmpFile?$res=data-only',succDeleteImageUploaded,{url:data.action.img_src},'post');},remove_selection:function()
{var $this=$(this),img_area_select;img_area_select=methods.private.get_data.call($this,'img-area-select');if(img_area_select)
{img_area_select.remove();}},get_data:function(key)
{var data=$(this).data('image-cropper')||{};if(key)
{return data[key];}
return data;},set_data:function(key,value)
{var $this=$(this),data;data=methods.private.get_data.call($this);data[key]=value;$this.data('image-cropper',data);},load_html:function(callback)
{var $this=$(this),$html;var succLoadHtml=function(data)
{$html=$(data.html);$('body').append($html);methods.private.set_data.call($this,'popup',$html);var $button_upload=$html.find('.j-upload-new-img');$button_upload.data('ajax-upload',default_config.ajax_upload);$button_upload.ajaxUpload();callback.call($this);};$.jarvis.ajax('jarvis/activity/LoadPopupImageCropper?$res=for-view',succLoadHtml);}},public:{update:function(img_crop_info)
{var $this=$(this),data,$popup,$img_root;if(!img_crop_info)
{img_crop_info=default_config.crop;}
data=methods.private.get_data.call($this);data=$.extend(data,img_crop_info);methods.private.set_data.call($this,data);$popup=methods.private.get_data.call($this,'popup');$img_root=$popup.find('.wrap-img-root .img-root img');$img_root.imgAreaSelect({remove:true});}}};if(methods.public[method])
{var args=$.makeArray(arguments);this.each(function()
{methods.public[method].apply($(this),args.slice(1));});}
else
{return this.each(function()
{methods.private.init.apply($(this));});}};$.fn.ajaxUpload=function(method)
{var default_config={};var events={browse:function()
{var $this=$(this);$this.bind('click',function()
{methods.private.browse.call($this);});},submit:function()
{var $this=$(this),$wrap,data;data=methods.private.get_data.call($this);$wrap=data.$wrap;$wrap.find('.input-file').bind('change',function()
{methods.private.submit.call($this);});}};var methods={private:{init:function()
{var $this=$(this);var call_func=function()
{var $this=$(this);$.jarvis.call_func(events,$this);};methods.private.load_html.call($this,call_func);},browse:function()
{var $this=$(this),data,$wrap;data=methods.private.get_data.call($this);$wrap=data.$wrap;$wrap.find('.input-file').trigger('click');},submit:function()
{var $this=$(this),upload_data,$wrap;upload_data=methods.private.get_data.call($this);$wrap=upload_data.$wrap;var succUpload=function(data)
{$.jarvis.loading('stop');methods.private.succ_upload.call($this,data);};$wrap.find('.input-max-width').val(upload_data.maxWidth);$wrap.find('.input-max-height').val(upload_data.maxHeight);$wrap.find('.input-max-file-size').val(upload_data.maxFileSize);$wrap.find('.input-file-type').val(upload_data.fileType);$.jarvis.loading('black');$wrap.find('form').ajax_upload(succUpload);},succ_upload:function(data)
{var $this=$(this),upload_data,$wrap;upload_data=methods.private.get_data.call($this);$wrap=upload_data.$wrap;$wrap.find('form').reset();$this.trigger('change',[data.src,data.filename]);},get_data:function(key)
{var data=$(this).data('ajax-upload')||{};if(key)
{return data[key];}
return data;},set_data:function(key,value)
{var $this=$(this),data;data=methods.private.get_data.call($this);data[key]=value;$this.data('ajax-upload',data);},load_html:function(callback)
{var $this=$(this),$html;var succLoadHtml=function(data)
{$html=$(data.html);$('body').append($html);methods.private.set_data.call($this,'$wrap',$html);callback.call($this);};$.jarvis.ajax('jarvis/activity/LoadHtml?$res=for-view',succLoadHtml,{block:'FormAjaxUpload'},'post');}},public:{}};if(methods.public[method])
{var args=$.makeArray(arguments);this.each(function()
{methods.public[method].apply($(this),args.slice(1));});}
else
{return this.each(function()
{methods.private.init.apply($(this));});}};$.fn.move_center=function()
{var
$p=$(this),screenWidth=$(window).width(),screenHeight=$(window).height(),top=(screenHeight-$p.outerHeight())*0.5,left=(screenWidth-$p.outerWidth())*0.5;$p.css({position:'fixed',top:top,right:left,left:left});var $lock=$p.data('lock');if($lock)
{$p.css('zIndex',$lock.css('zIndex')- -1);}};$.fn.form_val=function()
{var $formData={},error=[],succ=true,$form=$(this),$editor=$form.parent().find('.j-ckeditor');if($editor.length)
{var str_name=$editor.prop('name');$formData[str_name]=CKEDITOR.instances[$editor.prop('id')].getData();succ=$formData[str_name]!=='';if(!succ)
{error.push(str_name);}}
$(':input:not(.j-ckeditor)',$form).each(function()
{var $this=$(this),value,str_name;str_name=$this.prop('name');if($this.hasClass('j-check'))
{value=$this[0].checked?$this.val():undefined;}
else
{value=trim($this.val());}
if($this.hasClass('j-multiple'))
{var glue=$this.data('glue');if(glue)
{value=value.split(glue);}
else
{value=value.split(/[\s\n;]+/);}}
if(value===''&&($this.data('null')===undefined||$this.data('null')==='not-null'))
{succ=false;var _str_name=str_name.replace('[]','');if($.inArray(_str_name,error)<0)
{error.push(_str_name);}}
else
{if($this.hasClass('j-email'))
{if($this.hasClass('j-multiple'))
{$.each(value,function(i,email)
{if(!is_email(email))
{succ=false;error.push(str_name);}});}
else
{if(!is_email(value))
{succ=false;error.push(str_name);}}}
if($this.hasClass('j-retype'))
{if(value!==$('.'+$this.data('match')).val())
{succ=false;error.push($this.data('match')+'-retype');}}
if($this.hasClass('j-integer'))
{var reg=/^\d+$/;if((!reg.test(value))||(value>255))
{succ=false;error.push(str_name);}}}
if($this.is(':radio'))
{if($this.prop('checked'))
{value=$this.val();}
else
{value=$formData[str_name];}}
var name=str_name.substr(0,str_name.indexOf('[]'));if(name)
{var n=$formData[name]?$formData[name].length:0;if(n===0)
{$formData[name]=new Array();}
if(value!==undefined)
{$formData[name][n]=value;}}
else
{if(value!==undefined)
{$formData[str_name]=value;}}});return{succ:succ,formData:$formData,error:error};};$.fn.plus=function(number)
{if(typeof parseInt(this.text())!=='number')
{return false;}
if(typeof number!=='number')
{number=1;}
var text=parseInt(str_replace(',','',this.text()));text=text- -number;this.text(number_format(text));return text;};$.fn.ajax_upload=function(succFunc,param,beforeFunc)
{var $this=$(this);var config={type:'post',dataType:'json',iframe:false,success:function(data)
{$.jarvis.set_token(data.token);delete(data.token);if(typeof succFunc==='function')
{succFunc(data);}},error:function(e)
{console.log(e);},beforeSubmit:function()
{if(typeof beforeFunc==='function')
{beforeFunc(param);}}};$this.find('j-token').val($.jarvis.get_token());$this.ajaxSubmit(config);};jQuery.fn.reset=function()
{var $this=$(this),$textarea,id;$this.find('.jarvis-plugin-UploadsImage').each(function()
{var $wrap=$(this);$wrap.UploadsImage('clear');});$this.each(function()
{this.reset();});if(isset('CKEDITOR'))
{$this.find('textarea').each(function()
{$textarea=$(this);id=$textarea.prop('id');if(CKEDITOR.instances[id])
{CKEDITOR.instances[id].setData('');}});}
$this.find('.input').html('');};$.fn.ihide=function()
{var $this=$(this);if($this.data('body-less'))
{$this.fadeOut('slow').show().addClass('body-less');}
else
{$this.fadeOut('slow').show().addClass('hide');}};$.fn.ishow=function()
{var $this=$(this);if($this.hasClass('hide'))
{$this.removeClass('hide').hide().fadeIn('slow');}
else if($this.hasClass('body-less'))
{$this.removeClass('body-less').hide().fadeIn('slow');$this.data('body-less',true);}}
$.fn.iappend=function($html,quick,callback)
{if(typeof quick==='function')
{callback=quick;quick=false;}
$html=$($html);$html.hide();this.append($html);if(quick)
{$html.show('slow',callback);}
else
{$html.fadeIn('slow',callback);}
return this;};$.fn.iprepend=function($html,quick,callback)
{if(typeof quick==='function')
{callback=quick;quick=false;}
$html=$($html);$html.hide();this.prepend($html);if(quick)
{$html.show('slow',callback);}
else
{$html.fadeIn('slow',callback);}
return this;};$.fn.iremove=function()
{this.fadeOut('slow',function(){this.remove();});};$.fn.ihtml=function($html,quick,callback)
{if(typeof quick==='function')
{callback=quick;quick=false;}
$html=$($html);$html.hide();this.html($html);if(quick)
{$html.show('slow',callback);}
else
{$html.fadeIn('slow',callback);}
return this;};$.fn.scroll_focus=function()
{var $this=$(this),scroll_value,top,wHeight;top=$this.offset().top;wHeight=$(window).height();scroll_value=top-1/3*wHeight;$('body').animate({scrollTop:scroll_value},'250');return $this;};$.fn.scroll_top=function()
{var $this=$(this),top;top=$this.offset().top;$('body').animate({scrollTop:top},'250');};$.fn.ckeditor=function()
{$(this).each(function(){$(this).editor();});};$.fn.editor=function()
{if(!$.editor_index)
{$.editor_index=0;var EditorConfig;if(editor_style==='simple')
{EditorConfig={width:775,toolbar:[{name:'basicstyles',items:['Bold','Italic','Underline']},{name:'paragraph',items:['Outdent','Indent','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock']},{name:'styles',items:['FontSize','TextColor','BGColor']},{name:'insert',items:['Table','-','Image']},{name:'document',items:['Maximize']}]};}
else
{EditorConfig={width:775,toolbar:[{name:'basicstyles',items:['Bold','Italic','Underline','-','Subscript','Superscript']},{name:'paragraph',items:['NumberedList','BulletedList','Outdent','Indent','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock']},{name:'styles',items:['Styles','Format','Font','FontSize']},{name:'color',items:['TextColor','BGColor']},{name:'insert',items:['Blockquote','-','Link','Unlink','-','Table','HorizontalRule','SpecialChar','-','Image']},{name:'paste',items:['PasteFromWord']},{name:'document',items:['Source','-','Preview','-','Maximize']},]};}
CKEDITOR.editorConfig=function(config)
{config.CKEDITOR_BASEPATH=url_root+'ckeditor/';config.language='en';config.width=EditorConfig.width+'px';if(!EditorConfig.height)
{EditorConfig.height=500;}
config.height=EditorConfig.height+'px';config.uiColor='#CDCDCD';config.extraAllowedContent='p{*}[*];div{*}[*];';config.toolbar=EditorConfig.toolbar;config.filebrowserBrowseUrl=url_root+'kcfinder/browse.php?type=files';config.filebrowserImageBrowseUrl=url_root+'kcfinder/browse.php?type=images';config.filebrowserFlashBrowseUrl=url_root+'kcfinder/browse.php?type=flash';config.filebrowserUploadUrl=url_root+'kcfinder/upload.php?type=files';config.filebrowserImageUploadUrl=url_root+'kcfinder/upload.php?type=images';config.filebrowserFlashUploadUrl=url_root+'kcfinder/upload.php?type=flash';};}
try
{$.editor_index++;this.each(function()
{var $this=$(this),id,height,width,config={};height=$this.prop('height')||$this.height();width=$this.prop('width')||$this.width();if(height)
{config.height=height;}
if(width)
{config.width=width;}
id='ckeditor-'+$.editor_index;$this.prop('id',id);$this.addClass('j-ckeditor');CKEDITOR.replace(id,config);});}
catch(e){console.log(e);}};$.fn.disable=function(stop)
{var $this=$(this);if(stop)
{$this.removeClass('j-disable');$this.unbind('click.disable');}
else
{$this.addClass('j-disable');$this.bind('click.disable',function(e)
{e.preventDefault();});}};$.fn.get_editor=function()
{return CKEDITOR.instances[$(this).find('.j-ckeditor').prop('id')];};$.fn.flash=function()
{var $this=$(this),removeFlash;$this.addClass('j-flash');removeFlash=function()
{$this.removeClass('j-flash','slow');};$this.effect('fadeIn',removeFlash);};$.fn.update_session_cache=function()
{var $this=$(this),$wrap;$wrap=$this.closest('.j-wrap-session-cache');$.jarvis.scache('html-'+$wrap.data('session-cache-key'),$wrap.html());};$.fn.loading=function(action)
{var $this=$(this),$wrap_loading,top,left,css,offset;if(action==='stop')
{$this.removeClass('j-loading');$('.j-loading-bar').remove();}
else
{$wrap_loading=$('<div class="j-loading-bar"><img src="'+url_root+'/l-img/loading-bar.gif" alt="loading-bar"/></div>');$this.addClass('j-loading');$('body').append($wrap_loading);offset=$this.offset();top=offset.top+($this.height()-$wrap_loading.height())*0.5,left=offset.left+($this.width()-$wrap_loading.width())*0.5;css={top:top,left:left};$wrap_loading.css(css);}};$.fn.loading_bar=function(time_load,callback,repeat)
{if(typeof callback==='boolean')
{repeat=callback;callback=undefined;}
if(typeof time_load==='function')
{callback=time_load;time_load=undefined;}
if(typeof time_load==='boolean')
{repeat=time_load;time_load=undefined;}
time_load=time_load>0?time_load*1000:1000;var $bar,$this=$(this),width,width_unit,num=10,new_width;width=$this.width();width_unit=width/num;$bar=$('<div class="j-loading-bar"></div>');$bar.css({width:width_unit+'px',height:$this.height()+'px',top:$this.offset().top,left:$this.offset().left});$('body').append($bar);var progress=setInterval(function(){new_width=$bar.width()- -width_unit;if(new_width>width)
{if(repeat===true)
{$bar.width(width_unit);}
else
{clearInterval(progress);if(typeof callback==='function')
{callback();}}}
else
{$bar.width(new_width);}},time_load/num);};$.fn.count_line=function()
{var $this=$(this),count,num_line=0;count=$this.val().match(/\n/g);if(count)
{num_line=count.length;}
return num_line;};$.fn.get_line_index=function(chr_index)
{var $this=$(this),line_index=1,value,str1,count;value=$this.val();str1=value.substring(0,chr_index);count=str1.match(/\n/g);if(count)
{line_index=count.length+1;}
return line_index;};$.fn.animate_change=function()
{this.each(function()
{var $this=$(this),$mask;$mask=$('<div></div>');$mask.css({position:'absolute',backgroundColor:'white',width:$this.width(),height:$this.height()});$this.prepend($mask);$mask.fadeOut('slow',function(){$mask.remove();});});};$.fn.select_anchor=function()
{var $this=$(this);$this.bind('change',function(){location.href=$this.val();});};;$.jarvis={};$.jarvis.version='0.1.0';$.jarvis.token=token;$.jarvis.set_token=function(token)
{$.jarvis.token=token;};$.jarvis.get_token=function()
{return $.jarvis.token;};$.jarvis.ajax=function(url,func_succ,info,method,func_before,auth)
{if(typeof func_before==='function')
{auth=func_before;func_before=undefined;}
if(typeof info==='string')
{method=info;info={};}
method=method||'get';info=info||{};info.auth=auth||{};info.token=$.jarvis.get_token();info.isJarvis=1;$.ajax({url:strpos(url,'https://')===0?url:url_root+url,type:method,dataType:'json',data:info,beforeSend:function()
{if(typeof func_before==='function')
{func_before();}},success:function(data)
{$.jarvis.set_token(data.token);delete(data.token);if(typeof func_succ==='function')
{func_succ(data);}},error:function(e)
{console.log('***************************** Jarvis AJAX ERROR - Start *****************************');console.log(e.responseText);console.log(e.status);console.log(url);console.log(info);console.log('***************************** Jarvis AJAX ERROR - End *****************************');}});};$.jarvis.lock=function(bgColor,key,no_scroll)
{var css,$locker,selector,lock_class;selector=key?'.j-jarvis-lock.'+key:'.j-jarvis-lock';lock_class=key?'j-jarvis-lock '+key:'j-jarvis-lock';no_scroll=no_scroll===undefined?true:no_scroll;if(bgColor==='close')
{$(selector).remove();$.jarvis.scrollable();}
else
{$locker=$('<div class="'+lock_class+'"></div>');css={width:$(window).width(),height:$(window).height(),top:0,left:0,position:'fixed',zIndex:98};if(bgColor)
{css.backgroundColor=bgColor;css.opacity=0.75;}
$locker.css(css);$('body').append($locker);if(no_scroll)
{$.jarvis.scrollable('no');}
return $locker;}};$.jarvis.scrollable=function(action)
{if(action==='no')
{$('body').addClass('no-scroll');}
else
{$('body').removeClass('no-scroll');}};$.jarvis.loading=function(action)
{var color='white';if(action!=='start'&&action!=='stop')
{color=action;action='start';}
var $wrapLoading=$('.wrap-js .wrap-loading');if(action==='start')
{$.jarvis.lock(color,'loading',false);$wrapLoading.removeClass('hide');$wrapLoading.move_center();}
else if(action==='stop')
{$.jarvis.lock('close','loading',false);$wrapLoading.addClass('hide');}};$.jarvis.methods=function(plugin_name,$this,methods)
{$this.data('jarvis-methods.'+plugin_name,methods);};$.fn.methods=function(plugin_name)
{return this.data('jarvis-methods.'+plugin_name);};$.jarvis.options=function(plugin_name,$this,options)
{$this.data('jarvis-options.'+plugin_name,options);};$.fn.options=function(plugin_name)
{return this.data('jarvis-options.'+plugin_name);};$.jarvis.store_events=function(plugin_name,$this,events)
{$this.data('jarvis-events.'+plugin_name,events);};$.fn.events=function(plugin_name)
{var obj=this,store_events=obj.data('jarvis-events.'+plugin_name),bind={bind:function(events,data)
{if(typeof events==='undefined')
{$.jarvis.call_func(store_events,obj);}
else if(typeof events==='string')
{$.jarvis.call_func(store_events[events],obj,data);}
else if(typeof events==='object')
{$.each(events,function(i,e)
{$.jarvis.call_func(store_events[e],obj,data);});}}};return bind;};$.jarvis.get_plugin_key=function(plugin_name)
{return'jarvis-plugin-'+plugin_name;};$.fn.jarvis=function()
{var $this=$(this),Jarvis;if(typeof $this.jarvis==='object')
{Jarvis=$this.jarvis;}
else
{Jarvis={show:function()
{$this.removeClass('hide');},hide:function()
{$this.addClass('hide');},plugin_exists:function(plugin_name)
{var plugin_key=$.jarvis.get_plugin_key(plugin_name);return $this.hasClass(plugin_key);}};$this.jarvis=Jarvis;}
return Jarvis;};$.jarvis.plugin=function(options)
{var plugin_name,plugin_methods,plugin_events,method_default,user_options;user_options=options.default_options||{};plugin_name=options.name;method_default=options.method_default;if(!plugin_name)
{console.log({err:'Not set plugin name!'});return false;}
plugin_methods=options.methods||{};plugin_events=options.events||{};var basic_methods={private:{onload:function()
{},init:function()
{var $this=$(this);$this.trigger('init-'+plugin_name);},bind_events:function(events)
{$.jarvis.call_func(events,this);},get_data:function(key)
{var $this=$(this),key_data,data;key_data=$.jarvis.get_plugin_key(plugin_name);data=$this.data(key_data)||{};if(key)
{return data[key];}
return data;},set_data:function(key,value)
{var $this=$(this),key_data,data;key_data=$.jarvis.get_plugin_key(plugin_name);data=data=$this.data(key_data)||{};if(typeof key==='string')
{data[key]=value;}
else
{data=key;}
$this.data(key_data,data);},find:function(selector)
{var $this=$(this),$obj,$selector=$();$(selector,$this).each(function()
{$obj=$(this);if($obj.closest('.j-wrap').is($this))
{$selector=$obj;return true;}});return $selector;},get_row:function()
{var $this=$(this);return $this.closest('.j-row');},get_wrap:function(key)
{var $wrap=this.data(key);if($wrap===undefined&&$('.j-'+key).length)
{$wrap=$('.j-'+key);}
return $wrap;}},public:{}};var str_eval_plugin,methods;methods=$.extend(true,basic_methods,plugin_methods);var plugin_func=function(method)
{var args=$.makeArray(arguments);if(method!==undefined&&typeof method!=='object')
{if(typeof methods.public[method]==='function')
{this.each(function()
{return methods.public[method].apply($(this),args.slice(1));});}
else
{return{err:'Method is not valid'};}}
else
{if(typeof method==='object')
{user_options=$.extend(true,user_options,method);}
return this.each(function()
{var $this=$(this),plugin_key=$.jarvis.get_plugin_key(plugin_name);if($this.jarvis().plugin_exists(plugin_name))
{if(typeof methods.public[method_default]==='function')
{return methods.public[method_default].apply($(this),args.slice(1));}}
else
{$this.data('key-data',plugin_key);$this.addClass(plugin_key);var private={},public={};$.each(methods.private,function(name,func)
{private[name]=function()
{var args=$.makeArray(arguments);return methods.private[name].apply($this,args);};});$.each(methods.public,function(name,func)
{public[name]=function()
{var args=$.makeArray(arguments);return methods.public[name].apply($this,args);};});$.jarvis.methods(plugin_name,$this,{private:private,public:public});$.jarvis.options(plugin_name,$this,user_options);var events={};$.each(plugin_events,function(name,func)
{events[name]=function()
{var args=$.makeArray(arguments);return plugin_events[name].apply($this,args);};});$.jarvis.store_events(plugin_name,$this,events);$this.bind('init-'+plugin_name,function()
{methods.private.bind_events.call($this,plugin_events);methods.private.onload.apply($this);});methods.private.init.apply($this);}});}};str_eval_plugin='$.fn.'+plugin_name+'=plugin_func';eval(str_eval_plugin);return this;};$.jarvis.count=function(plugin_name)
{var key=$.jarvis.get_plugin_key(plugin_name);return $('.'+key).length;};$.jarvis.execute=function(plugin_name,func_name,params)
{var key=$.jarvis.get_plugin_key(plugin_name);$('.'+key).each(function()
{var $this=$(this);$this.methods(plugin_name).public[func_name](params);});return;};$.jarvis.click_me=function(selector,e)
{var $this=$(selector);return $(e.target).is($this)||$(e.target).is($this.find('*'));};$.jarvis.call_func=function(arrFunc,obj,data)
{if(typeof obj==='object')
{if(typeof arrFunc==='function')
{(arrFunc).call(obj,data);}
else
{$.each(arrFunc,function(i,func)
{func.call(obj,data);});}}
else
{if(typeof arrFunc==='function')
{(arrFunc)();}
else
{$.each(arrFunc,function(i,func)
{(func)();});}}};$.jarvis.validate_form=function($form,arrMsg)
{var info,msg=[];info=$form.form_val();arrMsg=arrMsg?arrMsg:{};if(!info.succ)
{$.each(info.error,function(i,name)
{msg.push(arrMsg[name]);});info.msg=msg;}
return info;};$.jarvis.notify=function(arrMsg,arrNotify,callback)
{var str_msg='',str_line='';$.each(arrMsg,function(i,line)
{if(arrNotify)
{str_line=arrNotify[line];}
else
{str_line=line;}
str_msg+='<p>'+str_line+'</p>';});ialert(str_msg,callback);};$.jarvis.html=function(key)
{var msg;switch(key)
{case'no-contents':{msg='<mark class="j-no-contents">Không tìm thấy kết quả nào</mark>';break;}};return msg;};$.jarvis.need_reload=function(check)
{if(check)
{return $('body').hasClass('j-need-load');}
else
{$('body').addClass('j-need-load');}};$.jarvis.delete_tmp_img=function(url,callback)
{if(typeof callback!=='function')
{callback=function()
{$(window).trigger('delete-tmp-img-completed');};}
$.jarvis.ajax('jarvis/activity/DeleteTmpFile?$res=data-only',callback,{url:url},'post');};$.fn.has_jarvis_plugin=function(plugin_name)
{return $(this).hasClass($.jarvis.get_plugin_key(plugin_name));};$.jarvis.cookie=function(key,value,options)
{var options_defaults,outPut,pluses;options_defaults={json:true};pluses=/\+/g;options=$.extend({},options_defaults,options);var stringifyCookieValue=function(value)
{return encodeURIComponent(options.json?JSON.stringify(value):String(value));};var parseCookieValue=function(s)
{if(s.indexOf('"')===0)
{s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}
try
{s=decodeURIComponent(s.replace(pluses,' '));}
catch(e){return;}
try
{return options.json?JSON.parse(s):s;}
catch(e){}};var read=function(s,converter)
{var value=parseCookieValue(s);return $.isFunction(converter)?converter(value):value;};var read_cookie=function(key)
{var cookies,num,parts,name,cookie;cookies=document.cookie?document.cookie.split('; '):[];num=cookies.length;outPut=key?undefined:{};for(i=0;i<num;i++)
{parts=cookies[i].split('=');name=decodeURIComponent(parts.shift());cookie=parts.join('=');if(key&&key===name)
{outPut=read(cookie,value);break;}
if(!key&&(cookie=read(cookie))!==undefined)
{outPut[name]=cookie;}}
return outPut;};var write_cookie=function(key,value,options)
{var days,t,arr_data_cookie;if(typeof options.expires==='number')
{days=options.expires;t=options.expires=new Date();t.setDate(t.getDate()+days);}
arr_data_cookie=[encodeURIComponent(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'','; path=/',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''];return(document.cookie=arr_data_cookie.join(''));};if(value!==undefined&&!$.isFunction(value))
{outPut=write_cookie(key,value,options);}
else
{outPut=read_cookie(key);}
return outPut;};$.jarvis.cookie.clear=function(key)
{if($.jarvis.cookie(key)!==undefined)
{return $.jarvis.cookie(key,'',{expires:-1});}
else
{return false;}};$.jarvis.scache=function(key,value)
{var outPut=false;if(!sessionStorage)
{return false;}
if(sessionStorage.session_id===undefined)
{sessionStorage.session_id=time();}
if(value!==undefined)
{sessionStorage[key]=value;outPut=true;}
else
{outPut=sessionStorage[key];}
return outPut;};$.jarvis.cache=function(key,value)
{var outPut=false;if(!localStorage)
{return false;}
if(value!==undefined)
{localStorage[key]=value;outPut=true;}
else
{outPut=localStorage[key];}
return outPut;};$.jarvis.worker={storage:[]};$.jarvis.worker.new=function(worker)
{$.jarvis.worker.storage.push(worker);};$.jarvis.worker.run=function()
{$($.jarvis.worker.storage).each(function(i,worker)
{worker.main();setInterval(function()
{worker.main();},worker.timeInterval);});};$.jarvis.api=function(action,callback,data)
{$.jarvis.ajax('api/action/'+action+'?$res=data-only',callback,data,'post');};$.jarvis.load_app=function()
{$('.j-app:not(.j-app-loaded)').each(function()
{var $this=$(this),group,plugin,arrPlugin=[];var load_script=function(group,plugin)
{var callback=function()
{if($this.data('app-selector'))
{$this.find('.'+$this.data('app-selector'))[plugin]();}
else
{$this[plugin]();}
$this.addClass('j-app-loaded');};if(!$.fn[plugin])
{$.getScript(url_root+'minify/plugin/'+group+'/'+plugin+'.js?v='+time(),callback);}
else
{callback();}};group=$this.data('script-group');plugin=$this.data('script-plugin');if(plugin===undefined)
{var arr_script=explode(';',$this.data('script'));$(arr_script).each(function(i,str)
{if(str.indexOf('-')>0)
{var script=explode('-',str);group=script[0];plugin=script[1];}
else
{group=null;plugin=str;}
arrPlugin.push({group:group,plugin:plugin});});}
else
{arrPlugin=[{group:group,plugin:plugin}];}
$(arrPlugin).each(function(i,plugin)
{load_script(plugin.group,plugin.plugin);});});};$.jarvis.load_css=function(url)
{$('<link>').appendTo($('head')).attr({type:'text/css',rel:'stylesheet'}).attr('href',url);};$.jarvis.tag=function(tags,callback)
{var info={};if(typeof tags==='array')
{info.arr_tags=tags;}
if(typeof tags==='string')
{if(tags.indexOf(',')>0)
{info.str_tags=tags;}
else
{info.tag=tags;}}
$.jarvis.ajax('activity/tag/SaveTag?$res=data-only',callback,info,'post');};$.jarvis.sync_token=function(callback)
{$.jarvis.ajax('jarvis/system/SyncToken?$res=data-only',callback,{},'post');};;$.jarvis.plugin({name:'Captcha',method_default:'load',methods:{private:{load:function()
{var $this=$(this),$image=$this.find('.j-img'),src,time=new Date();src=url_root+'captcha/'+$this.data('id')+'?'+time.getTime();$image.attr('src',src);}},public:{load:function()
{var $this=$(this);$this.methods('Captcha').private.load();}}},events:{prepare:function()
{var $this=$(this);$this.methods('Captcha').private.load();},load:function()
{var $this=$(this);$this.find('.j-load').on('click',function()
{$this.methods('Captcha').private.load();});}}});$.jarvis.plugin({name:'form',method_default:'update',default_options:{notify:{phone:'Bạn chưa nhập số điện thoại liên lạc',email:'Email không đúng',name:'Bạn chưa nhập tên',_categoryId:'Bạn chưa chọn chủ đề',contents:'Bạn chưa nhập nội dung',url_tmp_image:'Bạn chưa chọn ảnh',password:'Bạn chưa nhập mật khẩu'}},methods:{private:{prepare:function()
{var $this=$(this);$this.find('input[autofocus="autofocus"]').focus();},submit:function()
{var $this=$(this),info,options;options=$this.options('form');info=$.jarvis.validate_form($this,options.notify);if(typeof options.validate==='function')
{info=(options.validate)(info);}
if(info.succ)
{var complete=function(data)
{$.jarvis.loading('stop');$this.find('input').prop('disabled',false);$this.methods('form').private.complete(data,info.formData);};$this.find('input').prop('disabled',true);$.jarvis.loading('white');var callback=function()
{if($this.data('upload'))
{$this.ajax_upload(complete);}
else
{$.jarvis.ajax($this.prop('action'),complete,info.formData,'post');}};$.jarvis.sync_token(callback);}
else
{if($this.data('notify')!==undefined)
{$this.find('.'+$this.data('notify')).notify({notify:info.msg,close:2});}
else
{$.jarvis.notify(info.msg);}}},complete:function(data,formData)
{var $this=$(this);$this.trigger('submit-completed',[data,formData]);}},public:{update:function()
{var $this=$(this);$this.events('form').bind();},submit:function()
{var $this=$(this);$this.methods('form').private.submit();}}},events:{prepare:function()
{var $this=$(this);$this.methods('form').private.prepare();},submit:function()
{var $this=$(this);$this.off('submit').on('submit',function(e)
{e.preventDefault();$this.methods('form').private.submit();});$this.find('.j-submit').off('click').on('click',function(e)
{e.preventDefault();$this.methods('form').private.submit();});}}});$.jarvis.plugin({name:'Loader',methods:{private:{prepare:function()
{var $this=$(this);$this.methods('Loader').private.set_data('load-quick',$this.data('load-quick')!==undefined||$this.data('load-client-only'));$this.methods('Loader').private.set_data('num-max-row',$this.find('.j-list .j-row').length);var options=$this.options('Loader');if(typeof options.change_callback==='function')
{options.change_callback($this);}
$this.methods('Loader').private.set_data('scroll-load-more',!$this.find('.j-load-more').length);},trigger_load_more:function()
{var $this=$(this),$btn_load_more,$list;$list=$this.methods('Loader').private.get_list();if(!$list.data('load-info').over)
{$btn_load_more=$this.find('.j-load-more');if($btn_load_more.length)
{$btn_load_more.trigger('click');}
else
{$this.methods('Loader').private.load(true);}}},typing:function(flag)
{var $this=$(this),outPut,$input=$this.find('.j-wrap-search-keyword .j-input');if(flag===undefined)
{outPut=$input.hasClass('j-typing');}
else
{if(flag)
{$input.addClass('j-typing');}
else
{$input.removeClass('j-typing');}}
return outPut;},get_list:function()
{var $this=$(this);return $this.methods('Loader').private.find('.j-list');},load_succ:function(data,load_more)
{var $this=$(this),$list=$this.methods('Loader').private.get_list(),$html=$(data.html),loadInfo;loadInfo=data.loadInfo;$list.data('load-info',loadInfo);$.jarvis.loading('stop');if(load_more===true)
{if(loadInfo.data.keyword!==undefined)
{$html.each(function()
{$(this).addClass('j-row-searched');});}
if($list.data('dir')==='reverse')
{$list.prepend($html);}
else
{$list.append($html);}
if($html.find('img.j-lazy').length)
{$html.find('img.j-lazy').lazy_load();}}
else if(load_more==='refresh')
{if($list.data('dir')==='reverse')
{$list.iappend($html);}
else
{$list.iprepend($html);}}
else if(!load_more)
{$(window).scrollTop(0);if($html)
{$list.html($html);var keyword,$wrap_search=$this.methods('Loader').private.find('.j-wrap-search-keyword');if($wrap_search.length)
{keyword=full_trim($wrap_search.find('.j-input').val());}
if($this.data('load-client-only')&&keyword)
{$this.methods('Loader').private.search();}}
else
{var msg='Không tìm thấy kết quả nào';if(!$this.methods('Loader').private.get_data('load-quick'))
{ialert(msg);}
else
{$list.html($.jarvis.html('no-contents'));}}}
$this.trigger('load-succ',[load_more,loadInfo]);var $button=$this.find('.j-load-more');$button.text($button.data('text-load-more'));if(data.loadInfo.over)
{$button.jarvis().hide();}
else
{$button.jarvis().show();}
$this.removeClass('j-searching');$this.methods('Loader').private.check_no_contents();var options=$this.options('Loader');if(typeof options.change_callback==='function')
{options.change_callback($this);}
$this.removeClass('j-loading-data');$list.find('.j-row').animate_change();},check_no_contents:function()
{var $this=$(this),$list;$list=$this.methods('Loader').private.get_list();if(!$list.find('.j-row:not(.j-search-hide)').length)
{$this.find('.j-no-contents').removeClass('hide');}
else
{$this.find('.j-no-contents').addClass('hide');}},load:function(load_more)
{var $this=$(this),loadInfo,formInfo,$list,action;if($this.hasClass('j-loading-data'))
{return false;}
$this.addClass('j-loading-data');$list=$this.methods('Loader').private.get_list();loadInfo=$list.data('load-info')||{};if(!load_more)
{loadInfo.load_more=0;}
else if(load_more===true)
{loadInfo.load_more=1;}
else if(load_more==='refresh')
{loadInfo.refresh=1;}
var load_succ=function(data)
{$this.methods('Loader').private.loading('stop');$this.methods('Loader').private.load_succ(data,load_more);};formInfo=$this.data('form-info')||{};loadInfo['data']=$.extend({},loadInfo['data'],formInfo);$this.methods('Loader').private.loading('start');action=$this.data('load-action');if(action.indexOf('$res')<0)
{action+='?$res=for-view';}
$.jarvis.ajax(action,load_succ,loadInfo,'post');},loading:function(action)
{var $this=$(this);if(action==='stop')
{var $list=$this.methods('Loader').private.get_list();$list.loading('stop');$this.removeClass('j-loading');}
else if(action==='start')
{$this.addClass('j-loading');}
else
{return $this.hasClass('j-loading');}},search:function()
{var $this=$(this),keyword,num_show,num_max_row,$wrap_search;$wrap_search=$this.methods('Loader').private.find('.j-wrap-search-keyword');num_max_row=$this.methods('Loader').private.get_data('num-max-row');if($wrap_search.length)
{keyword=full_trim($wrap_search.find('.j-input').val());}
var formInfo=$this.data('form-info')||{};formInfo.end=0;formInfo.keyword=keyword;$.jarvis.cache('keyword-search-'+$this.data('key-search'),keyword);$this.data('form-info',formInfo);$this.find('.j-no-contents').addClass('hide');if($this.methods('Loader').private.get_data('load-quick')&&!$this.data('no-search-client'))
{$this.find('.j-load-more').addClass('hide');num_show=$this.methods('Loader').private.search_client(keyword);$this.methods('Loader').private.focus_first();if(num_show<num_max_row&&!$this.data('load-client-only'))
{setTimeout(function()
{$this.methods('Loader').private.search_server(true);},200);}
else
{$this.methods('Loader').private.check_no_contents();$this.removeClass('j-searching');}}
else if(!$this.data('load-client-only'))
{$.jarvis.loading();$this.methods('Loader').private.search_server(false);}},focus_first:function()
{var $this=$(this),$list,$first;$list=$this.methods('Loader').private.get_list();$first=$list.find('.j-row:not(.j-search-hide):first');$first.addClass('j-focus-search');$first.removeClass('j-focus-search','slow');},search_client:function(keyword)
{var $this=$(this),keyword_search,num_show=0,num_hide=0,$list,loadInfo;keyword_search=full_trim(clear_vn_sign(keyword.toLowerCase()));$list=$this.methods('Loader').private.get_list();$list.find('.j-row.j-row-searched').remove();$list.find('.j-row:not(.j-row-searched)').each(function(i,row)
{var text,$row=$(row);text=full_trim(clear_vn_sign(row.textContent.toLowerCase()));if(text.search(keyword_search)<0)
{num_hide++;$row.addClass('j-search-hide');}
else
{num_show++;$row.removeClass('j-search-hide');}});var formInfo=$this.data('form-info')||{};formInfo.keyword=keyword;$this.data('form-info',formInfo);if(num_hide===0)
{$this.find('.j-load-more').removeClass('hide');}
loadInfo=$list.data('load-info')||{};loadInfo.over=false;loadInfo.count=num_show;loadInfo.end=num_show;$list.data('load-info',loadInfo);return num_show;},search_server:function(loadmore)
{var $this=$(this),$list;$list=$this.methods('Loader').private.get_list();$list.loading();$this.methods('Loader').private.load(loadmore);},focus_input:function()
{var $this=$(this);$this.find('.j-wrap-search-keyword .j-form').addClass('j-focus-search','fast');},change_condition:function(condition,id)
{var $this=$(this);var formInfo=$this.data('form-info')||{};formInfo[condition]=id;$this.data('form-info',formInfo);if(!$this.methods('Loader').private.get_data('load-quick'))
{$.jarvis.loading();}
$this.methods('Loader').private.load(false);},set_form_data:function(data)
{var $this=$(this),formInfo;formInfo=$this.data('form-info')||{};formInfo=$.extend({},formInfo,data);$this.data('form-info',formInfo);},change_keyword:function(keyword)
{var $this=$(this),formInfo;$this.find('.j-wrap-search-keyword .j-input').val(keyword);formInfo=$this.data('form-info')||{};formInfo.keyword=keyword;$this.data('form-info',formInfo);$this.methods('Loader').private.load(false);}},public:{get_list:function()
{var $this=$(this);return $this.methods('Loader').private.get_list();},change_keyword:function(keyword)
{var $this=$(this);return $this.methods('Loader').private.change_keyword(keyword);},load:function(data)
{var $this=$(this);$this.methods('Loader').private.set_form_data(data);$this.methods('Loader').private.load(false);}}},events:{prepare:function()
{var $this=$(this);$this.methods('Loader').private.prepare();},trigger_load_more:function()
{var $this=$(this);$this.bind('load-more',function()
{$this.methods('Loader').private.trigger_load_more();});},load_more:function()
{var $this=$(this),$load_more;$load_more=$this.methods('Loader').private.find('.j-load-more');$load_more.bind('click',function()
{$load_more.loading();$this.methods('Loader').private.load(true);var $button=$(this);$button.text($button.data('text-loading'));});var $list=$this.methods('Loader').private.get_list();if($list.hasClass('j-nice-scroll'))
{var scroll=$list.niceScroll();if($this.data('load-more'))
{scroll.scrollend(function(pos)
{var nice_scroll=$list.getNiceScroll()[0];if(pos.current.y>=nice_scroll.scrollvaluemax)
{$this.trigger('load-more');}});}}},refresh:function()
{var $this=$(this),timeRefresh;timeRefresh=$this.data('time-refresh');if(timeRefresh>0)
{setInterval(function()
{$this.methods('Loader').private.load('refresh');},timeRefresh*1000);}},focus_input:function()
{var $this=$(this);$this.find('.j-wrap-search-keyword .j-form .j-input').bind('click focus',function()
{$this.methods('Loader').private.focus_input();});},search:function()
{var $this=$(this),load_quick=$this.methods('Loader').private.get_data('load-quick'),$wrap_search;$wrap_search=$this.methods('Loader').private.find('.j-wrap-search-keyword');$wrap_search.find('.j-form').bind('submit',function(e)
{e.preventDefault();$this.methods('Loader').private.search();});$wrap_search.find('.j-submit').bind('click',function(e)
{$this.methods('Loader').private.search();});$this.find('.j-select-condition').bind('change',function(e,id)
{$this.methods('Loader').private.change_condition($(this).data('condition'),id);});if(load_quick)
{$wrap_search.find('.j-input').bind('keydown',function(e)
{$this.addClass('j-typing');});$wrap_search.find('.j-input').bind('keyup',function(e)
{$this.removeClass('j-typing');setTimeout(function()
{if(!$this.hasClass('j-typing')&&!$this.hasClass('j-searching'))
{$this.addClass('j-searching');$this.methods('Loader').private.search();}},100);});}}}});;$.jarvis.plugin({name:'FocusPairs',methods:{private:{hover:function($element)
{$element.closest('.j-row').find('.j-pair-block.j-index-'+$element.data('index')).addClass('j-focus');},leave:function($element)
{$element.closest('.j-row').find('.j-pair-block.j-index-'+$element.data('index')).removeClass('j-focus');}},public:{}},events:{hover:function()
{var $this=$(this);$this.on('mouseover','.j-pair-block',function(e){$this.methods('FocusPairs').private.hover($(e.target));});},leave:function()
{var $this=$(this);$this.on('mouseout','.j-pair-block',function(e){$this.methods('FocusPairs').private.leave($(e.target));});}}});;$.jarvis.plugin({name:'FocusRow',methods:{private:{focus_row:function()
{var $this=$(this),$focus_row,focus_row_id,$wrap_focus;$wrap_focus=$this.methods('FocusRow').private.get_data('focus-wrap');focus_row_id=$this.methods('FocusRow').private.get_data('focus-row-id');if(focus_row_id>0)
{$focus_row=$('.j-row.j-id-'+focus_row_id);if($focus_row.length)
{$focus_row.scroll_focus();$focus_row.addClass('j-focus');$focus_row.removeClass('j-focus',3000);}
else
{$wrap_focus.trigger('load-more');}}},prepare:function()
{var $this=$(this),focus_row_id;focus_row_id=$this.data('focus-row-id');if(focus_row_id>0)
{$this.methods('FocusRow').private.set_data('focus-row-id',focus_row_id);$this.methods('FocusRow').private.set_data('focus-wrap',$this.find('.j-wrap.j-main-wrap'));}}},public:{}},events:{prepare:function()
{var $this=$(this);$this.methods('FocusRow').private.prepare();},load_more:function()
{var $this=$(this),$wrap_focus;$wrap_focus=$this.methods('FocusRow').private.get_data('focus-wrap');if($wrap_focus)
{$wrap_focus.bind('load-succ',function()
{$this.methods('FocusRow').private.focus_row();});}},focus_row:function()
{var $this=$(this);$(document).ready(function()
{$this.methods('FocusRow').private.focus_row();});}}});;$.jarvis.plugin({name:'Menu',methods:{private:{prepare:function()
{var $this=$(this),options;options={};},showMenu:function()
{var $this=$(this);if($this.hasClass("j-expand"))
{$this.find(".j-nav").addClass('hide').removeClass('show');$this.removeClass("j-expand");}
else
{$this.find(".j-nav").removeClass('hide').addClass('show');$this.addClass("j-expand");}},hideMenu:function($parent)
{var $this=$(this);if(!$parent)
{$parent=$this;}
$parent.find(".j-list").addClass('hide');$parent.removeClass("j-expand");},showSubMenu:function($parent)
{var $this=$(this);if($parent.hasClass("j-expand"))
{$parent.find(".j-list").addClass('hide').removeClass('show');$parent.removeClass("j-expand");}
else
{$this.methods('Menu').private.hideMenu($parent.parent().find('.j-row'));$parent.find(".j-list").removeClass('hide').addClass('show');$parent.addClass("j-expand");}}},public:{update:function()
{var $this=$(this);$this.events('Menu').bind();}}},events:{prepare:function()
{var $this=$(this);$this.methods('Menu').private.prepare();},click:function()
{var $this=$(this);$this.find('.j-menu-icon').bind('click',function(e)
{$this.methods('Menu').private.showMenu();});},click_parent:function()
{var $this=$(this);$this.find('.j-nav .j-row').bind('click',function(e)
{$this.methods('Menu').private.showSubMenu($(this));});},hide:function()
{var $this=$(this);$(document).bind('click',function(e)
{if(!$.jarvis.click_me($this,e))
{$this.methods('Menu').private.hideMenu();}});}}});;function scroll(){var offset=100,scroll_top_duration=700,$back_to_top=$('.cd-top');$right_banner=$('.right-image');if(($(window).width()-1024)/2>140){$right_banner.css('display','block');}else{$right_banner.css('display','none');}
$(window).resize(function(){if(($(window).width()-1024)/2>140){$right_banner.css('display','block');}else{$right_banner.css('display','none');}});$(window).scroll(function(){if($(this).scrollTop()>offset){$back_to_top.addClass('cd-is-visible');$right_banner.addClass('cd-is-visible');}else{$back_to_top.removeClass('cd-is-visible cd-fade-out');$right_banner.removeClass('cd-is-visible cd-fade-out');}});$back_to_top.on('click',function(event){event.preventDefault();$('body,html').animate({scrollTop:0,},scroll_top_duration);});}
$(document).ready(function()
{$(".j-menu").Menu();var $focus=$('input[autofocus="autofocus"],textarea[autofocus="autofocus"]');if($focus.length)
{$focus.scroll_focus();}
$('.wrap-loading-image').addClass("hide");$('.wrap-banner-mobile').addClass("show-banner-slider");$('.lazy').lazy();scroll();});;$(document).ready(function()
{var slider=$('.bxslider').bxSlider({mode:'horizontal',minSlides:2,maxSlides:9,slideWidth:90,auto:true,speed:5000,autoHover:true,autoControls:false,pager:false,controls:true,slideMargin:5,});$(window).resize(function(){if($('.bxslider')[0]){slider.reloadSlider({mode:'horizontal',minSlides:2,maxSlides:9,slideWidth:90,auto:true,speed:5000,autoHover:true,autoControls:false,pager:false,controls:true,slideMargin:5,});}});if($(window).width()>768){$(".bxslider li div").hover(function(){var offset=$(this).offset();var image='/s-img/logo-doanh-nghiep/large-logo/'+$(this).attr('class')+'.jpg';$(".popup-partner").css('display','block');var leftpu=0;leftpu=offset.left-(($(window).width()-1024)/2)-20;$(".popup-partner").css('left',leftpu);$(".popup-partner img").attr("src",image);},function(){$(".popup-partner").css('display','none');});}
var offset=$("#tpl-major").offset();var isload=false;if((($(window).scrollTop()+$(window).height())>offset.top)&&!isload){$("#tpl-major").load("/include/home/major.html?20");$("#tpl-footer").load("/include/home/footer.html?04");isload=true;}
$(window).scroll(function(){if((($(window).scrollTop()+$(window).height())>offset.top)&&!isload){$("#tpl-major").load("/include/home/major.html?20");$("#tpl-footer").load("/include/home/footer.html?04");isload=true;}});var offset_ref=$("#tpl-reference2").offset();var isload2=false;if((($(window).scrollTop()+$(window).height())>offset_ref.top)&&!isload2){$("#tpl-reference2").load("/include/home/reference2.html?04");$("#tpl-video").load("/include/home/video.html?04");$("#tpl_newsletter").load("/include/home/newsletter.html?11");isload2=true;}
$(window).scroll(function(){if((($(window).scrollTop()+$(window).height())>offset_ref.top)&&!isload2){$("#tpl-reference2").load("/include/home/reference2.html?04");$("#tpl-video").load("/include/home/video.html?04");$("#tpl_newsletter").load("/include/home/newsletter.html?11");isload2=true;}});});