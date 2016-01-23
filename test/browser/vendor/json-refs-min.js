!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.JsonRefs=e()}}(function(){var e;return function r(e,t,n){function o(a,u){if(!t[a]){if(!e[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var f=t[a]={exports:{}};e[a][0].call(f.exports,function(r){var t=e[a][1][r];return o(t?t:r)},f,f.exports,r,e,t,n)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,r,t){(function(t){"use strict";function n(e){var r;return v(e,"Array")?(r=[],e.forEach(function(e,t){r[t]=n(e)})):v(e,"Object")?(r={},Object.keys(e).forEach(function(t){r[t]=n(e[t])})):r=e,r}function o(e,r){function t(e){return v(e,"Undefined")||""===e?[]:e.split("/")}function n(e){".."===e?o.pop():o.push(e)}var o=[];return t(e).concat(t(r)).forEach(n),0===o.length?"":o.join("/")}function i(e,r){function t(e){Object.keys(e).forEach(function(r){n[r]=e[r]})}var n={};return t(F.parse(e||"")),t(F.parse(r||"")),0===Object.keys(n).length?void 0:F.stringify(n)}function a(e,r){v(e,"String")&&(e=q(e)),v(r,"String")&&(r=q(r));var t,n,a=m(v(r,"Undefined")?"":r);return"absolute"===a.reference||"uri"===a.reference?n=a:(t=v(e,"Undefined")?void 0:m(e),v(t,"Undefined")?n=a:(n=t,n.path=L.normalize(o(t.path,a.path)),n.query=i(t.query,a.query))),n.fragment=void 0,L.serialize(n)}function u(e,r){var t=g(e),n={},o=D(y(e));return Object.keys(r).forEach(function(i){var a=r[i];t(a,U(i))===!0&&i.indexOf(o)>-1&&("invalid"!==a.type||e.includeInvalid===!0)&&(n[i]=a)}),n}function c(e,r){var t=[],n=e;return r.slice(0,r.length-1).forEach(function(e){e in n&&(n=n[e],t.push(n))}),t}function s(e,r,t,o,i){var u=Promise.resolve(),c=x(e,r);return Object.keys(c).forEach(function(e){var f,p,l=c[e],h=U(e);$.indexOf(l.type)>-1&&(f=a(r.relativeBase,l.uri),p=t.indexOf(f),-1===p?u=u.then(function(){var e=o.concat(h),a=n(r);return delete a.subDocPath,delete a.relativeBase,P(f,a).then(function(r){return r.location=f,l.uriDetails.fragment?(r.refs={},i[D(e)]=r,r):(Object.keys(r.refs).forEach(function(t){r.refs[t].parentLocation=D(e)}),i[D(e)]=r,a.relativeBase=_(f),s(r.value,a,t.concat(f),e,i))},function(e){l.error=e.message,l.stack=e.stack,l.missing=!0})}):(t.slice(p).forEach(function(e){Object.keys(i).forEach(function(r){var t=i[r];t.location===e&&(t.circular=!0)})}),i[D(o)].refs[e].circular=!0))}),u=u.then(function(){return 0===o.length&&Object.keys(i).forEach(function(e){var r=i[e];Object.keys(r.refs).forEach(function(t){var n=D(U(e).concat(U(t))),o=c[n];v(o,"Undefined")&&(c[n]=r.refs[t])}),c[e].value=r.value,r.circular&&(c[e].circular=!0)}),c})}function f(e,r,t){var n=e;try{r.forEach(function(e){if(e=decodeURI(e),!(e in n))throw Error("JSON Pointer points to missing location: "+D(r));n=n[e]})}catch(o){if(t!==!0)throw o;n=void 0}return n}function p(e){return Object.keys(e).filter(function(e){return"$ref"!==e})}function l(e){var r;switch(e.uriDetails.reference){case"absolute":case"uri":r="remote";break;case"same-document":r="local";break;default:r=e.uriDetails.reference}return r}function h(e,r){var t=H[e],o=Promise.resolve(),i=n(r.loaderOptions||{});return v(t,"Undefined")?(v(i.processContent,"Undefined")&&(i.processContent=function(e,r){r(void 0,JSON.parse(e.text))}),o=N.load(e,i),o=o.then(function(r){return H[e]={value:r},r})["catch"](function(r){throw H[e]={error:r},r})):o=o.then(function(){return t.value}),o=o.then(function(e){return n(e)})}function d(e,r){var t=!0;try{if(!v(e,"Object"))throw new Error("obj is not an Object");if(!v(e.$ref,"String"))throw new Error("obj.$ref is not a String")}catch(n){if(r)throw n;t=!1}return t}function v(e,r){return"Undefined"===r?"undefined"==typeof e:Object.prototype.toString.call(e)==="[object "+r+"]"}function g(e){var r;return r=v(e.filter,"Array")||v(e.filter,"String")?function(r){var t=v(e.filter,"String")?[e.filter]:e.filter;return t.indexOf(r.type)>-1||t.indexOf(l(r))>-1}:v(e.filter,"Function")?e.filter:function(){return!0}}function y(e){var r=[];return v(e.subDocPath,"Array")?r=e.subDocPath:v(e.subDocPath,"String")&&(r=U(e.subDocPath)),r}function m(e){return L.parse(encodeURI(decodeURI(e)))}function E(e,r,t){f(e,r.slice(0,r.length-1))[decodeURI(r[r.length-1])]=t}function w(e,r,t,n){function o(r,o){t.push(o),w(e,r,t,n),t.pop()}var i=!0;v(n,"Function")&&(i=n(e,r,t)),-1===e.indexOf(r)&&(e.push(r),i!==!1&&(v(r,"Array")?r.forEach(function(e,r){o(e,r.toString())}):v(r,"Object")&&Object.keys(r).forEach(function(e){o(r[e],e)}))),e.pop()}function b(e){if(!v(e,"Undefined")){if(!v(e,"Object"))throw new TypeError("options must be an Object");if(!(v(e.filter,"Undefined")||v(e.filter,"Array")||v(e.filter,"Function")||v(e.filter,"String")))throw new TypeError("options.filter must be an Array, a Function of a String");if(!v(e.includeInvalid,"Undefined")&&!v(e.includeInvalid,"Boolean"))throw new TypeError("options.includeInvalid must be a Boolean");if(!v(e.refPreProcessor,"Undefined")&&!v(e.refPreProcessor,"Function"))throw new TypeError("options.refPreProcessor must be a Function");if(!v(e.refPostProcessor,"Undefined")&&!v(e.refPostProcessor,"Function"))throw new TypeError("options.refPostProcessor must be a Function");if(!v(e.subDocPath,"Undefined")&&!v(e.subDocPath,"Array")&&!j(e.subDocPath))throw new TypeError("options.subDocPath must be an Array of path segments or a valid JSON Pointer")}}function C(){H={}}function O(e){if(!v(e,"Array"))throw new TypeError("path must be an array");return e.map(function(e){return v(e,"String")||(e=JSON.stringify(e)),decodeURI(e.replace(/~1/g,"/").replace(/~0/g,"~"))})}function S(e){if(!v(e,"Array"))throw new TypeError("path must be an array");return e.map(function(e){return v(e,"String")||(e=JSON.stringify(e)),e.replace(/~/g,"~0").replace(/\//g,"~1")})}function x(e,r){var t,o,i=[],a=e,u={};if(!v(e,"Array")&&!v(e,"Object"))throw new TypeError("obj must be an Array or an Object");return v(r,"Undefined")&&(r={}),b(r),t=y(r),o=g(r),t.length>0&&(i=c(e,t),a=f(e,t)),w(i,a,t,function(e,t,i){var a,c=!0;return d(t)&&(v(r.refPreProcessor,"Undefined")||(t=r.refPreProcessor(n(t),i)),a=A(t),("invalid"!==a.type||r.includeInvalid===!0)&&(o(a,i)===!0&&(v(r.refPostProcessor,"Undefined")||(a=r.refPostProcessor(n(a),i)),u[D(i)]=a),p(t).length>0&&(c=!1))),c}),u}function P(e,r){var t=Promise.resolve();return t=t.then(function(){if(!v(e,"String"))throw new TypeError("location must be a string");return v(r,"Undefined")&&(r={}),b(r),e=a(r.relativeBase,e),h(e,r)}).then(function(t){var o,i=n(H[e]);return v(i.refs,"Undefined")&&(o=n(r),delete o.filter,delete o.subDocPath,o.includeInvalid=!0,H[e].refs=x(t,o),i.refs=u(r,H[e].refs)),i})}function A(e){var r,t,n,o={def:e};try{d(e,!0)?(r=e.$ref,n=M[r],v(n,"Undefined")&&(n=M[r]=m(r)),o.uri=r,o.uriDetails=n,v(n.error,"Undefined")?o.type=l(o):(o.error=o.uriDetails.error,o.type="invalid"),t=p(e),t.length>0&&(o.warning="Extra JSON Reference properties will be ignored: "+t.join(", "))):o.type="invalid"}catch(i){o.error=i.message,o.stack=i.stack,o.type="invalid"}return o}function j(e,r){var t,n=!0;try{if(!v(e,"String"))throw new Error("ptr is not a String");if(""!==e){if(t=e.charAt(0),-1===["#","/"].indexOf(t))throw new Error("ptr must start with a / or #/");if("#"===t&&"#"!==e&&"/"!==e.charAt(1))throw new Error("ptr must start with a / or #/");if(e.match(k))throw new Error("ptr has invalid token(s)")}}catch(o){if(r===!0)throw o;n=!1}return n}function T(e,r){return d(e,r)&&"invalid"!==A(e,r).type}function U(e){if(!j(e))throw new Error("ptr must be a JSON Pointer");var r=e.split("/");return r.shift(),O(r)}function D(e,r){if(!v(e,"Array"))throw new Error("path must be an Array");return(r!==!1?"#":"")+(e.length>0?"/":"")+S(e).join("/")}function R(e,r){var t=Promise.resolve();return t=t.then(function(){if(!v(e,"Array")&&!v(e,"Object"))throw new TypeError("obj must be an Array or an Object");v(r,"Undefined")&&(r={}),b(r)}).then(function(){return s(e,r,[],[],{})}).then(function(r){var t=n(e),o=[];return Object.keys(r).forEach(function(e){var n,o=U(e),i=r[e];if($.indexOf(i.type)>-1)if(v(i.error,"Undefined")&&"invalid"!==i.type)try{n=f(i.value||{},i.uriDetails.fragment?U(i.uriDetails.fragment):[]),0===o.length?t=n:E(t,U(e),n),v(i.value,"Undefined")?i.circular&&(i.value={}):i.value=n}catch(a){i.error=a.message,i.stack=a.stack,i.missing=!0}else i.missing=!0}),Object.keys(r).forEach(function(e){var n,i=r[e],a=U(e),u=i.parentLocation;if(v(u,"Undefined")||-1!==o.indexOf(e)||o.push(e),-1===$.indexOf(i.type)&&"invalid"!==i.type)if(v(i.error,"Undefined")){e.indexOf(i.uri+"/")>-1||e===i.uri?(i.circular=!0,n={}):v(u,"Undefined")||(n=f(f(t,U(u)),i.uriDetails.fragment?U(i.uriDetails.fragment):[],!0));try{v(n,"Undefined")&&(n=f(t,i.uriDetails.fragment?U(i.uriDetails.fragment):[])),0===a.length?t=n:E(t,U(e),n),i.value=n}catch(c){i.error=c.message,i.stack=c.stack,i.missing=!0}}else i.missing=!0}),o.forEach(function(e){delete r[e].parentLocation}),{refs:r,resolved:t}})}function I(e,r){var t=Promise.resolve();return t=t.then(function(){if(!v(e,"String"))throw new TypeError("location must be a string");return v(r,"Undefined")&&(r={}),b(r),e=a(r.relativeBase,e),h(e,r)}).then(function(t){var o=n(r);return o.relativeBase=_(e),R(t,o).then(function(e){return{refs:e.refs,resolved:e.resolved,value:t}})})}var _=e("path").dirname,N="undefined"!=typeof window?window.PathLoader:"undefined"!=typeof t?t.PathLoader:null,F=e("querystring"),q=e("slash"),L=e("uri-js"),k=/~(?:[^01]|$)/g,H={},$=["relative","remote"],M={};"undefined"==typeof Promise&&e("native-promise-only"),r.exports.clearCache=C,r.exports.decodePath=O,r.exports.encodePath=S,r.exports.findRefs=x,r.exports.findRefsAt=P,r.exports.getRefDetails=A,r.exports.isPtr=j,r.exports.isRef=T,r.exports.pathFromPtr=U,r.exports.pathToPtr=D,r.exports.resolveRefs=R,r.exports.resolveRefsAt=I}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"native-promise-only":2,path:3,querystring:7,slash:8,"uri-js":14}],2:[function(r,t,n){(function(r){!function(r,n,o){n[r]=n[r]||o(),"undefined"!=typeof t&&t.exports?t.exports=n[r]:"function"==typeof e&&e.amd&&e(function(){return n[r]})}("Promise","undefined"!=typeof r?r:this,function(){"use strict";function e(e,r){l.add(e,r),p||(p=d(l.drain))}function r(e){var r,t=typeof e;return null==e||"object"!=t&&"function"!=t||(r=e.then),"function"==typeof r?r:!1}function t(){for(var e=0;e<this.chain.length;e++)n(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function n(e,t,n){var o,i;try{t===!1?n.reject(e.msg):(o=t===!0?e.msg:t.call(void 0,e.msg),o===n.promise?n.reject(TypeError("Promise-chain cycle")):(i=r(o))?i.call(o,n.resolve,n.reject):n.resolve(o))}catch(a){n.reject(a)}}function o(n){var a,c=this;if(!c.triggered){c.triggered=!0,c.def&&(c=c.def);try{(a=r(n))?e(function(){var e=new u(c);try{a.call(n,function(){o.apply(e,arguments)},function(){i.apply(e,arguments)})}catch(r){i.call(e,r)}}):(c.msg=n,c.state=1,c.chain.length>0&&e(t,c))}catch(s){i.call(new u(c),s)}}}function i(r){var n=this;n.triggered||(n.triggered=!0,n.def&&(n=n.def),n.msg=r,n.state=2,n.chain.length>0&&e(t,n))}function a(e,r,t,n){for(var o=0;o<r.length;o++)!function(o){e.resolve(r[o]).then(function(e){t(o,e)},n)}(o)}function u(e){this.def=e,this.triggered=!1}function c(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function s(r){if("function"!=typeof r)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var n=new c(this);this.then=function(r,o){var i={success:"function"==typeof r?r:!0,failure:"function"==typeof o?o:!1};return i.promise=new this.constructor(function(e,r){if("function"!=typeof e||"function"!=typeof r)throw TypeError("Not a function");i.resolve=e,i.reject=r}),n.chain.push(i),0!==n.state&&e(t,n),i.promise},this["catch"]=function(e){return this.then(void 0,e)};try{r.call(void 0,function(e){o.call(n,e)},function(e){i.call(n,e)})}catch(a){i.call(n,a)}}var f,p,l,h=Object.prototype.toString,d="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),f=function(e,r,t,n){return Object.defineProperty(e,r,{value:t,writable:!0,configurable:n!==!1})}}catch(v){f=function(e,r,t){return e[r]=t,e}}l=function(){function e(e,r){this.fn=e,this.self=r,this.next=void 0}var r,t,n;return{add:function(o,i){n=new e(o,i),t?t.next=n:r=n,t=n,n=void 0},drain:function(){var e=r;for(r=t=p=void 0;e;)e.fn.call(e.self),e=e.next}}}();var g=f({},"constructor",s,!1);return s.prototype=g,f(g,"__NPO__",0,!1),f(s,"resolve",function(e){var r=this;return e&&"object"==typeof e&&1===e.__NPO__?e:new r(function(r,t){if("function"!=typeof r||"function"!=typeof t)throw TypeError("Not a function");r(e)})}),f(s,"reject",function(e){return new this(function(r,t){if("function"!=typeof r||"function"!=typeof t)throw TypeError("Not a function");t(e)})}),f(s,"all",function(e){var r=this;return"[object Array]"!=h.call(e)?r.reject(TypeError("Not an array")):0===e.length?r.resolve([]):new r(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");var o=e.length,i=Array(o),u=0;a(r,e,function(e,r){i[e]=r,++u===o&&t(i)},n)})}),f(s,"race",function(e){var r=this;return"[object Array]"!=h.call(e)?r.reject(TypeError("Not an array")):new r(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");a(r,e,function(e,r){t(r)},n)})}),s})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,r,t){(function(e){function r(e,r){for(var t=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}function n(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return o.exec(e).slice(1)};t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a=i>=0?arguments[i]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,o="/"===a.charAt(0))}return t=r(n(t.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+t||"."},t.normalize=function(e){var o=t.isAbsolute(e),i="/"===a(e,-1);return e=r(n(e.split("/"),function(e){return!!e}),!o).join("/"),e||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,r){function n(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),i=n(r.split("/")),a=Math.min(o.length,i.length),u=a,c=0;a>c;c++)if(o[c]!==i[c]){u=c;break}for(var s=[],c=u;c<o.length;c++)s.push("..");return s=s.concat(i.slice(u)),s.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var r=i(e),t=r[0],n=r[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."},t.basename=function(e,r){var t=i(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t},t.extname=function(e){return i(e)[3]};var a="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return 0>r&&(r=e.length+r),e.substr(r,t)}}).call(this,e("_process"))},{_process:4}],4:[function(e,r,t){function n(){f=!1,u.length?s=u.concat(s):p=-1,s.length&&o()}function o(){if(!f){var e=setTimeout(n);f=!0;for(var r=s.length;r;){for(u=s,s=[];++p<r;)u&&u[p].run();p=-1,r=s.length}u=null,f=!1,clearTimeout(e)}}function i(e,r){this.fun=e,this.array=r}function a(){}var u,c=r.exports={},s=[],f=!1,p=-1;c.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];s.push(new i(e,r)),1!==s.length||f||setTimeout(o,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=a,c.addListener=a,c.once=a,c.off=a,c.removeListener=a,c.removeAllListeners=a,c.emit=a,c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},{}],5:[function(e,r,t){"use strict";function n(e,r){return Object.prototype.hasOwnProperty.call(e,r)}r.exports=function(e,r,t,i){r=r||"&",t=t||"=";var a={};if("string"!=typeof e||0===e.length)return a;var u=/\+/g;e=e.split(r);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var s=e.length;c>0&&s>c&&(s=c);for(var f=0;s>f;++f){var p,l,h,d,v=e[f].replace(u,"%20"),g=v.indexOf(t);g>=0?(p=v.substr(0,g),l=v.substr(g+1)):(p=v,l=""),h=decodeURIComponent(p),d=decodeURIComponent(l),n(a,h)?o(a[h])?a[h].push(d):a[h]=[a[h],d]:a[h]=d}return a};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],6:[function(e,r,t){"use strict";function n(e,r){if(e.map)return e.map(r);for(var t=[],n=0;n<e.length;n++)t.push(r(e[n],n));return t}var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};r.exports=function(e,r,t,u){return r=r||"&",t=t||"=",null===e&&(e=void 0),"object"==typeof e?n(a(e),function(a){var u=encodeURIComponent(o(a))+t;return i(e[a])?n(e[a],function(e){return u+encodeURIComponent(o(e))}).join(r):u+encodeURIComponent(o(e[a]))}).join(r):u?encodeURIComponent(o(u))+t+encodeURIComponent(o(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},a=Object.keys||function(e){var r=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r}},{}],7:[function(e,r,t){"use strict";t.decode=t.parse=e("./decode"),t.encode=t.stringify=e("./encode")},{"./decode":5,"./encode":6}],8:[function(e,r,t){"use strict";r.exports=function(e){var r=/^\\\\\?\\/.test(e),t=/[^\x00-\x80]+/.test(e);return r||t?e:e.replace(/\\/g,"/")}},{}],9:[function(e,r,t){var n=function(){function e(e){throw new RangeError(x[e])}function r(e,r){for(var t=e.length,n=[];t--;)n[t]=r(e[t]);return n}function t(e,t){var n=e.split("@"),o="";n.length>1&&(o=n[0]+"@",e=n[1]),e=e.replace(S,".");var i=e.split("."),a=r(i,t).join(".");return o+a}function n(e){for(var r,t,n=[],o=0,i=e.length;i>o;)r=e.charCodeAt(o++),r>=55296&&56319>=r&&i>o?(t=e.charCodeAt(o++),56320==(64512&t)?n.push(((1023&r)<<10)+(1023&t)+65536):(n.push(r),o--)):n.push(r);return n}function o(e){return r(e,function(e){var r="";return e>65535&&(e-=65536,r+=j(e>>>10&1023|55296),e=56320|1023&e),r+=j(e)}).join("")}function i(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:d}function a(e,r){return e+22+75*(26>e)-((0!=r)<<5)}function u(e,r,t){var n=0;for(e=t?A(e/m):e>>1,e+=A(e/r);e>P*g>>1;n+=d)e=A(e/P);return A(n+(P+1)*e/(e+y))}function c(r){var t,n,a,c,s,f,p,l,y,m,C=[],O=r.length,S=0,x=w,P=E;for(n=r.lastIndexOf(b),0>n&&(n=0),a=0;n>a;++a)r.charCodeAt(a)>=128&&e("not-basic"),C.push(r.charCodeAt(a));for(c=n>0?n+1:0;O>c;){for(s=S,f=1,p=d;c>=O&&e("invalid-input"),l=i(r.charCodeAt(c++)),(l>=d||l>A((h-S)/f))&&e("overflow"),S+=l*f,y=P>=p?v:p>=P+g?g:p-P,!(y>l);p+=d)m=d-y,f>A(h/m)&&e("overflow"),f*=m;t=C.length+1,P=u(S-s,t,0==s),A(S/t)>h-x&&e("overflow"),x+=A(S/t),S%=t,C.splice(S++,0,x)}return o(C)}function s(r){var t,o,i,c,s,f,p,l,y,m,C,O,S,x,P,T=[];for(r=n(r),O=r.length,t=w,o=0,s=E,f=0;O>f;++f)C=r[f],128>C&&T.push(j(C));for(i=c=T.length,c&&T.push(b);O>i;){for(p=h,f=0;O>f;++f)C=r[f],C>=t&&p>C&&(p=C);for(S=i+1,p-t>A((h-o)/S)&&e("overflow"),o+=(p-t)*S,t=p,f=0;O>f;++f)if(C=r[f],t>C&&++o>h&&e("overflow"),C==t){for(l=o,y=d;m=s>=y?v:y>=s+g?g:y-s,!(m>l);y+=d)P=l-m,x=d-m,T.push(j(a(m+P%x,0))),l=A(P/x);T.push(j(a(l,0))),s=u(o,S,i==c),o=0,++i}++o,++t}return T.join("")}function f(e){return t(e,function(e){return C.test(e)?c(e.slice(4).toLowerCase()):e})}function p(e){return t(e,function(e){return O.test(e)?"xn--"+s(e):e})}var l,h=2147483647,d=36,v=1,g=26,y=38,m=700,E=72,w=128,b="-",C=/^xn--/,O=/[^\x20-\x7E]/,S=/[\x2E\u3002\uFF0E\uFF61]/g,x={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},P=d-v,A=Math.floor,j=String.fromCharCode;return l={version:"1.3.2",ucs2:{decode:n,encode:o},decode:c,encode:s,toASCII:p,toUnicode:f}}();"undefined"==typeof COMPILED&&"undefined"!=typeof r&&(r.exports=n)},{}],10:[function(e,r,t){e("./schemes/http"),e("./schemes/urn"),e("./schemes/mailto")},{"./schemes/http":11,"./schemes/mailto":12,"./schemes/urn":13}],11:[function(e,r,t){if("undefined"==typeof COMPILED&&"undefined"==typeof n&&"function"==typeof e)var n=e("../uri");n.SCHEMES.http=n.SCHEMES.https={domainHost:!0,parse:function(e,r){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e},serialize:function(e,r){return(e.port===("https"!==String(e.scheme).toLowerCase()?80:443)||""===e.port)&&(e.port=void 0),e.path||(e.path="/"),e}}},{"../uri":14}],12:[function(e,r,t){if("undefined"==typeof COMPILED&&"undefined"==typeof n&&"function"==typeof e)var n=e("../uri"),o=e("../punycode");!function(){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];if(e.length>1){e[0]=e[0].slice(0,-1);for(var t=e.length-1,n=1;t>n;++n)e[n]=e[n].slice(1,-1);return e[t]=e[t].slice(1),e.join("")}return e[0]}function r(e){return"(?:"+e+")"}function t(e){return e.toUpperCase()}function i(e){var r=n.pctDecChars(e);return r.match(D)?r:e}function a(e){return void 0!==e&&null!==e?e instanceof Array&&!e.callee?e:"number"!=typeof e.length||e.split||e.setInterval||e.call?[e]:Array.prototype.slice.call(e):[]}var u={},c=n.IRI_SUPPORT,s="[A-Za-z0-9\\-\\.\\_\\~"+(c?"\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF":"")+"]",f="[0-9A-Fa-f]",p=r(r("%[EFef]"+f+"%"+f+f+"%"+f+f)+"|"+r("%[89A-Fa-f]"+f+"%"+f+f)+"|"+r("%"+f+f)),l="[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",h="[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",d=e(h,'[\\"\\\\]'),v=r(l+"+"+r("\\."+l+"+")+"*"),g=r("\\\\"+d),y=r(h+"|"+g),m=r('\\"'+y+'*\\"'),E="[\\x21-\\x5A\\x5E-\\x7E]",w="[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",b=r(s+"|"+p+"|"+w),C=r(v+"|\\["+E+"*\\]"),O=r(v+"|"+m),S=r(O+"\\@"+C),x=r(S+r("\\,"+S)+"*"),P=r(b+"*"),A=P,j=r(P+"\\="+A),T=r(j+r("\\&"+j)+"*"),U=r("\\?"+T),D=(n.VALIDATE_SUPPORT&&new RegExp("^mailto\\:"+x+"?"+U+"?$"),new RegExp(s,"g")),R=new RegExp(p,"g"),I=new RegExp(e("[^]",l,"[\\.]",'[\\"]',d),"g"),_=new RegExp(e("[^]",l,"[\\.]","[\\[]",E,"[\\]]"),"g"),N=new RegExp(e("[^]",s,w),"g"),F=N,q=n.VALIDATE_SUPPORT&&new RegExp("^"+x+"$"),L=n.VALIDATE_SUPPORT&&new RegExp("^"+T+"$");n.SCHEMES.mailto={parse:function(e,r){n.VALIDATE_SUPPORT&&!e.error&&(e.path&&!q.test(e.path)?e.error="Email address is not valid":e.query&&!L.test(e.query)&&(e.error="Header fields are invalid"));var t=e.to=e.path?e.path.split(","):[];if(e.path=void 0,e.query){for(var i=!1,a={},u=e.query.split("&"),c=0,s=u.length;s>c;++c){var f=u[c].split("=");switch(f[0]){case"to":for(var p=f[1].split(","),l=0,h=p.length;h>l;++l)t.push(p[l]);break;case"subject":e.subject=n.unescapeComponent(f[1],r);break;case"body":e.body=n.unescapeComponent(f[1],r);break;default:i=!0,a[n.unescapeComponent(f[0],r)]=n.unescapeComponent(f[1],r)}}i&&(e.headers=a)}e.query=void 0;for(var c=0,s=t.length;s>c;++c){var d=t[c].split("@");if(d[0]=n.unescapeComponent(d[0]),"undefined"==typeof o||r.unicodeSupport)d[1]=n.unescapeComponent(d[1],r).toLowerCase();else try{d[1]=o.toASCII(n.unescapeComponent(d[1],r).toLowerCase())}catch(v){e.error=e.error||"Email address's domain name can not be converted to ASCII via punycode: "+v}t[c]=d.join("@")}return e},serialize:function(e,r){var c=a(e.to);if(c){for(var s=0,f=c.length;f>s;++s){var p=String(c[s]),l=p.lastIndexOf("@"),h=p.slice(0,l),d=p.slice(l+1);if(h=h.replace(R,i).replace(R,t).replace(I,n.pctEncChar),"undefined"!=typeof o)try{d=r.iri?o.toUnicode(d):o.toASCII(n.unescapeComponent(d,r).toLowerCase())}catch(v){e.error=e.error||"Email address's domain name can not be converted to "+(r.iri?"Unicode":"ASCII")+" via punycode: "+v}else d=d.replace(R,i).toLowerCase().replace(R,t).replace(_,n.pctEncChar);c[s]=h+"@"+d}e.path=c.join(",")}var g=e.headers=e.headers||{};e.subject&&(g.subject=e.subject),e.body&&(g.body=e.body);var y=[];for(var m in g)g[m]!==u[m]&&y.push(m.replace(R,i).replace(R,t).replace(N,n.pctEncChar)+"="+g[m].replace(R,i).replace(R,t).replace(F,n.pctEncChar));return y.length&&(e.query=y.join("&")),e}}}()},{"../punycode":9,"../uri":14}],13:[function(e,r,t){if("undefined"==typeof COMPILED&&"undefined"==typeof n&&"function"==typeof e)var n=e("../uri");!function(){var e=n.pctEncChar,r="(?:[0-9A-Za-z][0-9A-Za-z\\-]{1,31})",t="(?:\\%[0-9A-Fa-f]{2})",o="[0-9A-Za-z\\(\\)\\+\\,\\-\\.\\:\\=\\@\\;\\$\\_\\!\\*\\'\\/\\?\\#]",i="(?:(?:"+t+"|"+o+")+)",a=new RegExp("^urn\\:("+r+")$"),u=new RegExp("^("+r+")\\:("+i+")$"),c=/^([^\:]+)\:(.*)/,s=/[\x00-\x20\\\"\&\<\>\[\]\^\`\{\|\}\~\x7F-\xFF]/g,f=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;n.SCHEMES.urn={parse:function(e,r){var t,o,i=e.path.match(u);return i||(r.tolerant||(e.error=e.error||"URN is not strictly valid."),i=e.path.match(c)),i?(t="urn:"+i[1].toLowerCase(),o=n.SCHEMES[t],o||(o=n.SCHEMES[t]={parse:function(e,r){return e},serialize:n.SCHEMES.urn.serialize}),e.scheme=t,e.path=i[2],e=o.parse(e,r)):e.error=e.error||"URN can not be parsed.",e},serialize:function(r,t){var n,o=r.scheme||t.scheme;if(o&&"urn"!==o){var n=o.match(a);n||(n=["urn:"+o,o]),r.scheme="urn",r.path=n[1]+":"+(r.path?r.path.replace(s,e):"")}return r}},n.SCHEMES["urn:uuid"]={parse:function(e,r){return r.tolerant||e.path&&e.path.match(f)||(e.error=e.error||"UUID is not valid."),e},serialize:function(e,r){return r.tolerant||e.path&&e.path.match(f)?e.path=(e.path||"").toLowerCase():e.scheme=void 0,n.SCHEMES.urn.serialize(e,r)}}}()},{"../uri":14}],14:[function(e,r,t){var n=!1,o=!0,i=!0,a=function(){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];if(e.length>1){e[0]=e[0].slice(0,-1);for(var t=e.length-1,n=1;t>n;++n)e[n]=e[n].slice(1,-1);return e[t]=e[t].slice(1),e.join("")}return e[0]}function r(e){return"(?:"+e+")"}function t(t){var n="[A-Za-z]",o="[0-9]",a=e(o,"[A-Fa-f]"),u=r(r("%[EFef]"+a+"%"+a+a+"%"+a+a)+"|"+r("%[89A-Fa-f]"+a+"%"+a+a)+"|"+r("%"+a+a)),c="[\\:\\/\\?\\#\\[\\]\\@]",s="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",f=e(c,s),p=t?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]",l=t?"[\\uE000-\\uF8FF]":"[]",h=e(n,o,"[\\-\\.\\_\\~]",p),d=r(n+e(n,o,"[\\+\\-\\.]")+"*"),v=r(r(u+"|"+e(h,s,"[\\:]"))+"*"),g=r(r("25[0-5]")+"|"+r("2[0-4]"+o)+"|"+r("1"+o+o)+"|"+r("[1-9]"+o)+"|"+o),y=r(g+"\\."+g+"\\."+g+"\\."+g),m=r(a+"{1,4}"),E=(r(r(m+"\\:"+m)+"|"+y),r(e(h,s,"[\\:]")+"+")),w=r("v"+a+"+\\."+e(h,s,"[\\:]")+"+"),b=r("\\["+r(E+"|"+w)+"\\]"),C=r(r(u+"|"+e(h,s))+"*"),O=r(b+"|"+y+"(?!"+C+")|"+C),S=r(o+"*"),x=r(r(v+"@")+"?"+O+r("\\:"+S)+"?"),P=r(u+"|"+e(h,s,"[\\:\\@]")),A=r(P+"*"),j=r(P+"+"),T=r(r(u+"|"+e(h,s,"[\\@]"))+"+"),U=r(r("\\/"+A)+"*"),D=r("\\/"+r(j+U)+"?"),R=r(T+U),I=r(j+U),_="(?!"+P+")",N=(r(U+"|"+D+"|"+R+"|"+I+"|"+_),r(r(P+"|"+e("[\\/\\?]",l))+"*")),F=r(r(P+"|[\\/\\?]")+"*"),q=r(r("\\/\\/"+x+U)+"|"+D+"|"+I+"|"+_),L=r(d+"\\:"+q+r("\\?"+N)+"?"+r("\\#"+F)+"?"),k=r(r("\\/\\/"+x+U)+"|"+D+"|"+R+"|"+_),H=r(k+r("\\?"+N)+"?"+r("\\#"+F)+"?"),$=(r(L+"|"+H),r(d+"\\:"+q+r("\\?"+N)+"?"),"^("+d+")\\:"+r(r("\\/\\/("+r("("+v+")@")+"?("+O+")"+r("\\:("+S+")")+"?)")+"?("+U+"|"+D+"|"+I+"|"+_+")")+r("\\?("+N+")")+"?"+r("\\#("+F+")")+"?$"),M="^(){0}"+r(r("\\/\\/("+r("("+v+")@")+"?("+O+")"+r("\\:("+S+")")+"?)")+"?("+U+"|"+D+"|"+R+"|"+_+")")+r("\\?("+N+")")+"?"+r("\\#("+F+")")+"?$";"^("+d+")\\:"+r(r("\\/\\/("+r("("+v+")@")+"?("+O+")"+r("\\:("+S+")")+"?)")+"?("+U+"|"+D+"|"+I+"|"+_+")")+r("\\?("+N+")")+"?$","^"+r("\\#("+F+")")+"?$","^"+r("("+v+")@")+"?("+O+")"+r("\\:("+S+")")+"?$";return{URI_REF:i&&new RegExp("("+$+")|("+M+")"),NOT_SCHEME:new RegExp(e("[^]",n,o,"[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(e("[^\\%\\:]",h,s),"g"),NOT_HOST:new RegExp(e("[^\\%]",h,s),"g"),NOT_PATH:new RegExp(e("[^\\%\\/\\:\\@]",h,s),"g"),NOT_PATH_NOSCHEME:new RegExp(e("[^\\%\\/\\@]",h,s),"g"),NOT_QUERY:new RegExp(e("[^\\%]",h,s,"[\\:\\@\\/\\?]",l),"g"),NOT_FRAGMENT:new RegExp(e("[^\\%]",h,s,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(e("[^]",h,s),"g"),UNRESERVED:new RegExp(h,"g"),OTHER_CHARS:new RegExp(e("[^\\%]",h,f),"g"),PCT_ENCODED:new RegExp(u,"g")}}function n(e){var r,t=e.charCodeAt(0);return r=16>t?"%0"+t.toString(16).toUpperCase():128>t?"%"+t.toString(16).toUpperCase():2048>t?"%"+(t>>6|192).toString(16).toUpperCase()+"%"+(63&t|128).toString(16).toUpperCase():"%"+(t>>12|224).toString(16).toUpperCase()+"%"+(t>>6&63|128).toString(16).toUpperCase()+"%"+(63&t|128).toString(16).toUpperCase()}function a(e){for(var r,t,n,o="",i=0,a=e.length;a>i;)r=parseInt(e.substr(i+1,2),16),128>r?(o+=String.fromCharCode(r),i+=3):r>=194&&224>r?(a-i>=6?(t=parseInt(e.substr(i+4,2),16),o+=String.fromCharCode((31&r)<<6|63&t)):o+=e.substr(i,6),i+=6):r>=224?(a-i>=9?(t=parseInt(e.substr(i+4,2),16),n=parseInt(e.substr(i+7,2),16),o+=String.fromCharCode((15&r)<<12|(63&t)<<6|63&n)):o+=e.substr(i,9),i+=9):(o+=e.substr(i,3),i+=3);return o}function c(e){return void 0===e?"undefined":null===e?"null":Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()}function s(e){return e.toUpperCase()}function f(e,r){function t(e){var t=a(e);return t.match(r.UNRESERVED)?t:e}return e.scheme&&(e.scheme=String(e.scheme).replace(r.PCT_ENCODED,t).toLowerCase().replace(r.NOT_SCHEME,"")),void 0!==e.userinfo&&(e.userinfo=String(e.userinfo).replace(r.PCT_ENCODED,t).replace(r.NOT_USERINFO,n).replace(r.PCT_ENCODED,s)),void 0!==e.host&&(e.host=String(e.host).replace(r.PCT_ENCODED,t).toLowerCase().replace(r.NOT_HOST,n).replace(r.PCT_ENCODED,s)),void 0!==e.path&&(e.path=String(e.path).replace(r.PCT_ENCODED,t).replace(e.scheme?r.NOT_PATH:r.NOT_PATH_NOSCHEME,n).replace(r.PCT_ENCODED,s)),void 0!==e.query&&(e.query=String(e.query).replace(r.PCT_ENCODED,t).replace(r.NOT_QUERY,n).replace(r.PCT_ENCODED,s)),void 0!==e.fragment&&(e.fragment=String(e.fragment).replace(r.PCT_ENCODED,t).replace(r.NOT_FRAGMENT,n).replace(r.PCT_ENCODED,s)),e}function p(e,r){void 0===r&&(r={});var t,n,c=o&&r.iri!==!1?C:b,s=!1,p={};if("suffix"===r.reference&&(e=(r.scheme?r.scheme+":":"")+"//"+e),i?(t=e.match(c.URI_REF),t&&(t=t[1]?t.slice(1,10):t.slice(10,19)),t||(s=!0,r.tolerant||(p.error=p.error||"URI is not strictly valid."),t=e.match(O))):t=e.match(O),t){if(j?(p.scheme=t[1],p.userinfo=t[3],p.host=t[4],p.port=parseInt(t[5],10),p.path=t[6]||"",p.query=t[7],p.fragment=t[8],isNaN(p.port)&&(p.port=t[5])):(p.scheme=t[1]||void 0,p.userinfo=-1!==e.indexOf("@")?t[3]:void 0,p.host=-1!==e.indexOf("//")?t[4]:void 0,p.port=parseInt(t[5],10),p.path=t[6]||"",p.query=-1!==e.indexOf("?")?t[7]:void 0,p.fragment=-1!==e.indexOf("#")?t[8]:void 0,isNaN(p.port)&&(p.port=e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?t[4]:void 0)),void 0!==p.scheme||void 0!==p.userinfo||void 0!==p.host||void 0!==p.port||p.path||void 0!==p.query?void 0===p.scheme?p.reference="relative":void 0===p.fragment?p.reference="absolute":p.reference="uri":p.reference="same-document",r.reference&&"suffix"!==r.reference&&r.reference!==p.reference&&(p.error=p.error||"URI is not a "+r.reference+" reference."),n=T[(r.scheme||p.scheme||"").toLowerCase()],!o||"undefined"==typeof u||r.unicodeSupport||n&&n.unicodeSupport)f(p,c);else{if(p.host&&(r.domainHost||n&&n.domainHost))try{
p.host=u.toASCII(p.host.replace(c.PCT_ENCODED,a).toLowerCase())}catch(l){p.error=p.error||"Host's domain name can not be converted to ASCII via punycode: "+l}f(p,b)}n&&n.parse&&n.parse(p,r)}else s=!0,p.error=p.error||"URI can not be parsed.";return p}function l(e,r){var t=[];return void 0!==e.userinfo&&(t.push(e.userinfo),t.push("@")),void 0!==e.host&&t.push(e.host),"number"==typeof e.port&&(t.push(":"),t.push(e.port.toString(10))),t.length?t.join(""):void 0}function h(e){for(var r,t=[];e.length;)e.match(S)?e=e.replace(S,""):e.match(x)?e=e.replace(x,"/"):e.match(P)?(e=e.replace(P,"/"),t.pop()):"."===e||".."===e?e="":(r=e.match(A)[0],e=e.slice(r.length),t.push(r));return t.join("")}function d(e,r){void 0===r&&(r={});var t,n,i,c=o&&r.iri?C:b,s=[];if(t=T[(r.scheme||e.scheme||"").toLowerCase()],t&&t.serialize&&t.serialize(e,r),o&&"undefined"!=typeof u&&e.host&&(r.domainHost||t&&t.domainHost))try{e.host=r.iri?u.toUnicode(e.host):u.toASCII(e.host.replace(c.PCT_ENCODED,a).toLowerCase())}catch(p){e.error=e.error||"Host's domain name can not be converted to "+(r.iri?"Unicode":"ASCII")+" via punycode: "+p}return f(e,c),"suffix"!==r.reference&&e.scheme&&(s.push(e.scheme),s.push(":")),n=l(e,r),void 0!==n&&("suffix"!==r.reference&&s.push("//"),s.push(n),e.path&&"/"!==e.path.charAt(0)&&s.push("/")),void 0!==e.path&&(i=e.path,r.absolutePath||t&&t.absolutePath||(i=h(i)),void 0===n&&(i=i.replace(/^\/\//,"/%2F")),s.push(i)),void 0!==e.query&&(s.push("?"),s.push(e.query)),void 0!==e.fragment&&(s.push("#"),s.push(e.fragment)),s.join("")}function v(e,r,t,n){void 0===t&&(t={});var o={};return n||(e=p(d(e,t),t),r=p(d(r,t),t)),t=t||{},!t.tolerant&&r.scheme?(o.scheme=r.scheme,o.userinfo=r.userinfo,o.host=r.host,o.port=r.port,o.path=h(r.path),o.query=r.query):(void 0!==r.userinfo||void 0!==r.host||void 0!==r.port?(o.userinfo=r.userinfo,o.host=r.host,o.port=r.port,o.path=h(r.path),o.query=r.query):(r.path?("/"===r.path.charAt(0)?o.path=h(r.path):(void 0===e.userinfo&&void 0===e.host&&void 0===e.port||e.path?e.path?o.path=e.path.slice(0,e.path.lastIndexOf("/")+1)+r.path:o.path=r.path:o.path="/"+r.path,o.path=h(o.path)),o.query=r.query):(o.path=e.path,void 0!==r.query?o.query=r.query:o.query=e.query),o.userinfo=e.userinfo,o.host=e.host,o.port=e.port),o.scheme=e.scheme),o.fragment=r.fragment,o}function g(e,r,t){return d(v(p(e,t),p(r,t),t,!0),t)}function y(e,r){return"string"==typeof e?e=d(p(e,r),r):"object"===c(e)&&(e=p(d(e,r),r)),e}function m(e,r,t){return"string"==typeof e?e=d(p(e,t),t):"object"===c(e)&&(e=d(e,t)),"string"==typeof r?r=d(p(r,t),t):"object"===c(r)&&(r=d(r,t)),e===r}function E(e,r){return e&&e.toString().replace(o&&r&&r.iri?C.ESCAPE:b.ESCAPE,n)}function w(e,r){return e&&e.toString().replace(o&&r&&r.iri?C.PCT_ENCODED:b.PCT_ENCODED,a)}var b=t(!1),C=o?t(!0):void 0,O=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?([^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n)*))?/i,S=/^\.\.?\//,x=/^\/\.(\/|$)/,P=/^\/\.\.(\/|$)/,A=/^\/?(?:.|\n)*?(?=\/|$)/,j=void 0==="".match(/(){0}/)[1],T={};return{IRI_SUPPORT:o,VALIDATE_SUPPORT:i,pctEncChar:n,pctDecChars:a,SCHEMES:T,parse:p,_recomposeAuthority:l,removeDotSegments:h,serialize:d,resolveComponents:v,resolve:g,normalize:y,equal:m,escapeComponent:E,unescapeComponent:w}}();if(!n&&"undefined"!=typeof r&&"function"==typeof e){var u=e("./punycode");r.exports=a,e("./schemes")}},{"./punycode":9,"./schemes":10}]},{},[1])(1)});