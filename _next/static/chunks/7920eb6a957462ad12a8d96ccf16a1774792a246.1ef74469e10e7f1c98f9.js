(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var i=o(n("q1tI")),a=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}t.isInAmpMode=s,t.useAmp=function(){return s(i.default.useContext(a.AmpStateContext))}},"/h46":function(e,t,n){n("cHUd")("Map")},"0b+E":function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"initialize",(function(){return U})),n.d(r,"ga",(function(){return Z})),n.d(r,"set",(function(){return J})),n.d(r,"send",(function(){return W})),n.d(r,"pageview",(function(){return K})),n.d(r,"modalview",(function(){return X})),n.d(r,"timing",(function(){return G})),n.d(r,"event",(function(){return V})),n.d(r,"exception",(function(){return Y})),n.d(r,"plugin",(function(){return H})),n.d(r,"outboundLink",(function(){return Q})),n.d(r,"testModeAPI",(function(){return $})),n.d(r,"default",(function(){return ee}));var o=n("q1tI"),i=n.n(o),a=n("17x9"),s=n.n(a);function u(e){console.warn("[react-ga]",e)}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m="_blank",g=1,b=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=this,o=(e=d(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==c(o)&&"function"!==typeof o?h(r):o,y(h(n),"handleClick",(function(e){var r=n.props,o=r.target,i=r.eventLabel,a=r.to,s=r.onClick,u=r.trackerNames,c={label:i},l=o!==m,f=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===g);l&&f?(e.preventDefault(),t.trackLink(c,(function(){window.location.href=a}),u)):t.trackLink(c,(function(){}),u),s&&s(e)})),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},f(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===m&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,i.a.createElement("a",n)}}])&&p(n.prototype,r),o&&p(n,o),t}(o.Component);function _(e){return e.replace(/^\s+|\s+$/g,"")}y(b,"trackLink",(function(){u("ga tracking not enabled")})),y(b,"propTypes",{eventLabel:s.a.string.isRequired,target:s.a.string,to:s.a.string,onClick:s.a.func,trackerNames:s.a.arrayOf(s.a.string)}),y(b,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var w=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;var S="REDACTED (Potential Email Address)";function O(e,t){return function(e){return"string"===typeof e&&-1!==e.indexOf("@")}(e)?(u("This arg looks like an email address, redacting."),S):t?_(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(w)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})):e}var k=function(e){var t,n,r,o,i,a,s,u="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?u=e.gaAddress:e&&e.debug&&(u="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=u,i="ga",t.GoogleAnalyticsObject=i,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,a=n.createElement(r),s=n.getElementsByTagName(r)[0],a.async=1,a.src=o,s.parentNode.insertBefore(a,s)};function j(e){console.info("[react-ga]",e)}var x=[],A={calls:x,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];x.push([].concat(t))},resetCalls:function(){x.length=0}};function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){return(P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var I="undefined"===typeof window||"undefined"===typeof document,F=!1,D=!0,M=!1,N=!0,q=function(){var e;return M?A.ga.apply(A,arguments):!I&&(window.ga?(e=window).ga.apply(e,arguments):u("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function z(e){return O(e,D)}function L(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];if("function"===typeof q){if("string"!==typeof o)return void u("ga command must be a string");!N&&Array.isArray(e)||q.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){q.apply(void 0,R(["".concat(e,".").concat(o)].concat(n.slice(1))))}))}}function B(e,t){e?t&&(t.debug&&!0===t.debug&&(F=!0),!1===t.titleCase&&(D=!1),t.useExistingGa)||(t&&t.gaOptions?q("create",e,t.gaOptions):q("create",e,"auto")):u("gaTrackingID is required in initialize()")}function U(e,t){if(t&&!0===t.testMode)M=!0;else{if(I)return!1;t&&!0===t.standardImplementation||k(t)}return N=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach((function(e){"object"===P(e)?B(e.trackingId,e):u("All configs must be an object")})):B(e,t),!0}function Z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(q.apply(void 0,t),F&&(j("called ga('arguments');"),j("with arguments: ".concat(JSON.stringify(t))))),window.ga}function J(e,t){e?"object"===P(e)?(0===Object.keys(e).length&&u("empty `fieldsObject` given to .set()"),L(t,"set",e),F&&(j("called ga('set', fieldsObject);"),j("with fieldsObject: ".concat(JSON.stringify(e))))):u("Expected `fieldsObject` arg to be an Object"):u("`fieldsObject` is required in .set()")}function W(e,t){L(t,"send",e),F&&(j("called ga('send', fieldObject);"),j("with fieldObject: ".concat(JSON.stringify(e))),j("with trackers: ".concat(JSON.stringify(t))))}function K(e,t,n){if(e){var r=_(e);if(""!==r){var o={};if(n&&(o.title=n),L(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),F){j("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),j("with path: ".concat(r).concat(i))}}else u("path cannot be an empty string in .pageview()")}else u("path is required in .pageview()")}function X(e,t){if(e){var n,r="/"===(n=_(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);L(t,"send","pageview",o),F&&(j("called ga('send', 'pageview', path);"),j("with path: ".concat(o)))}else u("modalName cannot be an empty string or a single / in .modalview()")}else u("modalName is required in .modalview(modalName)")}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"===typeof r){var a={hitType:"timing",timingCategory:z(t),timingVar:z(n),timingValue:r};o&&(a.timingLabel=z(o)),W(a,i)}else u("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,s=C(e,["category","action","label","value","nonInteraction","transport"]),c=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:z(t),eventAction:z(n)};r&&(l.eventLabel=z(r)),"undefined"!==typeof o&&("number"!==typeof o?u("Expected `args.value` arg to be a Number."):l.eventValue=o),"undefined"!==typeof i&&("boolean"!==typeof i?u("`args.nonInteraction` must be a boolean."):l.nonInteraction=i),"undefined"!==typeof a&&("string"!==typeof a?u("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&u("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=a)),Object.keys(s).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){l[e]=s[e]})),Object.keys(s).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){l[e]=s[e]})),W(l,c)}else u("args.category AND args.action are required in event()")}function Y(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=z(n)),"undefined"!==typeof r&&("boolean"!==typeof r?u("`args.fatal` must be a boolean."):o.exFatal=r),W(o,t)}var H={require:function(e,t,n){if(e){var r=_(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==P(t))return void u("Expected `options` arg to be an Object");0===Object.keys(t).length&&u("Empty `options` given to .require()"),Z(o,r,t),F&&j("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else Z(o,r),F&&j("called ga('require', '".concat(r,"');"))}else u("`name` cannot be an empty string in .require()")}else u("`name` is required in .require()")},execute:function(e,t){var n,r;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!==typeof e)u("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)u("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?(Z(o,r,n),F&&(j("called ga('".concat(o,"');")),j('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(Z(o,n),F&&(j("called ga('".concat(o,"');")),j("with payload: ".concat(JSON.stringify(n))))):(Z(o),F&&j("called ga('".concat(o,"');")))}}};function Q(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:z(e.label)},o=!1,i=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(i),o||t()},W(r,n)}else u("args.label is required in outboundLink()");else u("hitCallback function is required")}var $=A,ee={initialize:U,ga:Z,set:J,send:W,pageview:K,modalview:X,timing:G,event:V,exception:Y,plugin:H,outboundLink:Q,testModeAPI:A};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}b.origTrackLink=b.trackLink,b.trackLink=Q;var re=b;t.a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(n,!0).forEach((function(t){ne(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{OutboundLink:re})},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2Eek":function(e,t,n){e.exports=n("W7oM")},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,o=n("q1tI");var i=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),a=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var o=r.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(o.Component);t.default=a},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,n){var r=n("Y7ZC"),o=n("uplh"),i=n("NsO/"),a=n("vwuL"),s=n("IP1Z");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),u=a.f,c=o(r),l={},f=0;c.length>f;)void 0!==(n=u(r,t=c[f++]))&&s(l,t,n);return l}})},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),o=n("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var a=i(n("q1tI")),s=i(n("Xuae")),u=n("lwAK"),c=n("FYa8"),l=n("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=f;var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,o={};return function(i){var a=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var l=d[u];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=i.props[l],p=o[l]||new r;p.has(f)?a=!1:(p.add(f),o[l]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var v=s.default();function y(e){var t=e.children;return a.default.createElement(u.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(v,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}y.rewind=v.rewind,t.default=y},"8iia":function(e,t,n){var r=n("QMMT"),o=n("RRc/");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return o(this)}}},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=s(p);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return r.def(o(this,"Set"),e=0===e?0:e,e)}},r)},CafY:function(e,t,n){"use strict";var r=n("hfKm"),o=n.n(r);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(e,r.key,r)}}var a=n("XVgq"),s=n.n(a),u=n("Z7t5"),c=n.n(u);function l(e){return(l="function"===typeof c.a&&"symbol"===typeof s.a?function(e){return typeof e}:function(e){return e&&"function"===typeof c.a&&e.constructor===c.a&&e!==c.a.prototype?"symbol":typeof e})(e)}function f(e){return(f="function"===typeof c.a&&"symbol"===l(s.a)?function(e){return l(e)}:function(e){return e&&"function"===typeof c.a&&e.constructor===c.a&&e!==c.a.prototype?"symbol":l(e)})(e)}function p(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var d=n("Bhuq"),h=n.n(d),v=n("TRZx"),y=n.n(v);function m(e){return(m=y.a?h.a:function(e){return e.__proto__||h()(e)})(e)}var g=n("SqZg"),b=n.n(g);function _(e,t){return(_=y.a||function(e,t){return e.__proto__=t,e})(e,t)}var w=n("q1tI"),S=n.n(w),O=n("0b+E");n.d(t,"a",(function(){return j}));var k=S.a.createElement,j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=b()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){window.GA_INITIALIZED||(console.log("GA init"),O.a.initialize("UA-158871668-1"),window.GA_INITIALIZED=!0),console.log("Logging pageview for ".concat(window.location.pathname)),O.a.set({page:window.location.pathname}),O.a.pageview(window.location.pathname)}},{key:"render",value:function(){return k("div",null,this.props.children)}}])&&i(n.prototype,r),o&&i(n,o),t}(S.a.Component)},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),o=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},LX0d:function(e,t,n){e.exports=n("UDep")},MX0m:function(e,t,n){e.exports=n("3niX")},MbLX:function(e,t,n){"use strict";var r=n("hfKm"),o=n.n(r),i=n("2Eek"),a=n.n(i),s=n("XoMD"),u=n.n(s),c=n("Jo+v"),l=n.n(c),f=n("4mXO"),p=n.n(f),d=n("pLtp"),h=n.n(d);function v(e,t,n){return t in e?o()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=n("MX0m"),m=n.n(y),g=n("q1tI"),b=n.n(g),_=n("YFqc"),w=n.n(_),S=b.a.createElement;function O(e,t){var n=h()(e);if(p.a){var r=p()(e);t&&(r=r.filter((function(t){return l()(e,t).enumerable}))),n.push.apply(n,r)}return n}var k=function(e){return e.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){v(e,t,n[t])})):u.a?a()(e,u()(n)):O(Object(n)).forEach((function(t){o()(e,t,l()(n,t))}))}return e}({},e,{key:"nav-link-".concat(e.href?e.href:"","-").concat(e.label)})}))},j=function(e){var t=e.hasFlex,n=e.links,r=void 0===n?[]:n;return S("nav",{className:m.a.dynamic([["4148497636",[t?"display: flex;":""]]])},S("ul",{className:m.a.dynamic([["4148497636",[t?"display: flex;":""]]])},r.length>0&&r.map((function(e){var n=e.key,r=e.href,o=e.label;return S("li",{key:n,className:m.a.dynamic([["4148497636",[t?"display: flex;":""]]])},S(w.a,{href:r},S("a",{className:m.a.dynamic([["4148497636",[t?"display: flex;":""]]])},o)))}))),S(m.a,{id:"4148497636",dynamic:[t?"display: flex;":""]},["nav.__jsx-style-dynamic-selector{text-align:center;}","ul.__jsx-style-dynamic-selector{".concat(t?"display: flex;":""," margin-left:10%;}"),"nav.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector{padding:4px 16px;}","li.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;font-family:'Roboto Mono',monospace;}","a.__jsx-style-dynamic-selector{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:20px;}"]))};t.a=function(e){return S(j,{links:k([{href:"/",label:"Home"},{href:"/books",label:"Books"},{href:"/work",label:"Work"},{href:"/research",label:"Research"}]),hasFlex:e})}},PQJW:function(e,t,n){var r=n("d04V"),o=n("yLu3");e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},"RRc/":function(e,t,n){var r=n("oioR");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n("9kyW")),o=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,a=void 0!==i&&i,s=t.isBrowser,u=void 0===s?"undefined"!==typeof window:s;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var o=String(n),i=t+o;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},TbGu:function(e,t,n){var r=n("fGSI"),o=n("PQJW"),i=n("2PDY");e.exports=function(e){return r(e)||o(e)||i()}},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),i=n("JB68"),a=n("sNwI"),s=n("NwJ3"),u=n("tEej"),c=n("IP1Z"),l=n("fNZA");o(o.S+o.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,o,f,p=i(e),d="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v,m=0,g=l(p);if(y&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==g||d==Array&&s(g))for(n=new d(t=u(p.length));t>m;m++)c(n,m,y?v(p[m],m):p[m]);else for(f=g.call(p),n=new d;!(o=f.next()).done;m++)c(n,m,y?a(f,v,[o.value,m],!0):o.value);return n.length=m,n}})},W7oM:function(e,t,n){n("nZgG");var r=n("WEpk").Object;e.exports=function(e,t){return r.defineProperties(e,t)}},Wu5q:function(e,t,n){"use strict";var r=n("2faE").f,o=n("oVml"),i=n("XJU/"),a=n("2GTP"),s=n("EXMj"),u=n("oioR"),c=n("MPFp"),l=n("UO39"),f=n("TJWN"),p=n("jmDH"),d=n("6/1s").fastKey,h=n("n3ko"),v=p?"_s":"size",y=function(e,t){var n,r=d(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var l=e((function(e,r){s(e,l,t,"_i"),e._t=t,e._i=o(null),e._f=void 0,e._l=void 0,e[v]=0,void 0!=r&&u(r,n,e[c],e)}));return i(l.prototype,{clear:function(){for(var e=h(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[v]=0},delete:function(e){var n=h(this,t),r=y(n,e);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[v]--}return!!r},forEach:function(e){h(this,t);for(var n,r=a(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!y(h(this,t),e)}}),p&&r(l.prototype,"size",{get:function(){return h(this,t)[v]}}),l},def:function(e,t,n){var r,o,i=y(e,t);return i?i.v=n:(e._l=i={i:o=d(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=i),r&&(r.n=i),e[v]++,"F"!==o&&(e._i[o]=i)),e},getEntry:y,setStrong:function(e,t,n){c(e,t,(function(e,n){this._t=h(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?l(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,l(1))}),n?"entries":"values",!n,!0),f(t)}}},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},XoMD:function(e,t,n){e.exports=n("hYAz")},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),i=n("/+P4"),a=n("K47E"),s=n("WaGi"),u=n("N9n2"),c=n("TbGu"),l=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var f=n("q1tI"),p=!1;t.default=function(){var e,t=new l;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function l(e){var s;return r(this,l),s=o(this,i(l).call(this,e)),p&&(t.add(a(s)),n(a(s))),s}return u(l,c),s(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),s(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,u=void 0===s?r:s,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;a(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",a("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,s,u=e.prototype;return u.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(a(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];a(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,n){t&&a(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),s&&n(t,s),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),a=n("/+P4"),s=n("N9n2"),u=n("LX0d"),c=n("KI45"),l=n("5Uuq");t.__esModule=!0,t.default=void 0;var f,p=n("CxY0"),d=l(n("q1tI")),h=c(n("nOHt")),v=n("g/15");function y(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var m=new u,g=window.IntersectionObserver,b={};function _(){return f||(g?f=new g((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){function t(e){var n;return r(this,t),(n=i(this,a(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:y(e),as:t?y(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,s=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var u=window.location.pathname;a=(0,p.resolve)(u,a),s=s?(0,p.resolve)(u,s):a,e.preventDefault();var c=n.props.scroll;null==c&&(c=s.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,n=b[this.getHref()];this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=_();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();h.default.prefetch(e),b[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),d.default.cloneElement(i,a)}}]),t}(d.Component);t.default=w},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dVTT:function(e,t,n){n("aPfg")("Map")},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},hYAz:function(e,t,n){n("7m0m"),e.exports=n("WEpk").Object.getOwnPropertyDescriptors},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var i=o(n("q1tI"));t.AmpStateContext=i.createContext({})},nZgG:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},ttDY:function(e,t,n){e.exports=n("+iuc")},uplh:function(e,t,n){var r=n("ar/p"),o=n("mqlF"),i=n("5K7Z"),a=n("5T2Y").Reflect;e.exports=a&&a.ownKeys||function(e){var t=r.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},xvv9:function(e,t,n){n("cHUd")("Set")}}]);