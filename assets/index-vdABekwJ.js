(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();function cu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qa={exports:{}},si={},Ya={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),fu=Symbol.for("react.portal"),hu=Symbol.for("react.fragment"),pu=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),mu=Symbol.for("react.provider"),vu=Symbol.for("react.context"),ku=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),yu=Symbol.for("react.memo"),bu=Symbol.for("react.lazy"),js=Symbol.iterator;function wu(e){return e===null||typeof e!="object"?null:(e=js&&e[js]||e["@@iterator"],typeof e=="function"?e:null)}var Ja={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xa=Object.assign,eo={};function fr(e,t,r){this.props=e,this.context=t,this.refs=eo,this.updater=r||Ja}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function to(){}to.prototype=fr.prototype;function $l(e,t,r){this.props=e,this.context=t,this.refs=eo,this.updater=r||Ja}var Wl=$l.prototype=new to;Wl.constructor=$l;Xa(Wl,fr.prototype);Wl.isPureReactComponent=!0;var Ks=Array.isArray,ro=Object.prototype.hasOwnProperty,Ul={current:null},no={key:!0,ref:!0,__self:!0,__source:!0};function io(e,t,r){var n,i={},l=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)ro.call(t,n)&&!no.hasOwnProperty(n)&&(i[n]=t[n]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var o=Array(a),f=0;f<a;f++)o[f]=arguments[f+2];i.children=o}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)i[n]===void 0&&(i[n]=a[n]);return{$$typeof:Xr,type:e,key:l,ref:s,props:i,_owner:Ul.current}}function zu(e,t){return{$$typeof:Xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function Su(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Qs=/\/+/g;function zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Su(""+e.key):t.toString(36)}function Sn(e,t,r,n,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Xr:case fu:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+zi(s,0):n,Ks(i)?(r="",e!=null&&(r=e.replace(Qs,"$&/")+"/"),Sn(i,t,r,"",function(f){return f})):i!=null&&(Ol(i)&&(i=zu(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Qs,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",Ks(e))for(var a=0;a<e.length;a++){l=e[a];var o=n+zi(l,a);s+=Sn(l,t,r,o,i)}else if(o=wu(e),typeof o=="function")for(e=o.call(e),a=0;!(l=e.next()).done;)l=l.value,o=n+zi(l,a++),s+=Sn(l,t,r,o,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function an(e,t,r){if(e==null)return e;var n=[],i=0;return Sn(e,n,"","",function(l){return t.call(r,l,i++)}),n}function Du(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Dn={transition:null},Eu={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Dn,ReactCurrentOwner:Ul};function lo(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:an,forEach:function(e,t,r){an(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return an(e,function(){t++}),t},toArray:function(e){return an(e,function(t){return t})||[]},only:function(e){if(!Ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=fr;T.Fragment=hu;T.Profiler=gu;T.PureComponent=$l;T.StrictMode=pu;T.Suspense=xu;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eu;T.act=lo;T.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Xa({},e.props),i=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=Ul.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(o in t)ro.call(t,o)&&!no.hasOwnProperty(o)&&(n[o]=t[o]===void 0&&a!==void 0?a[o]:t[o])}var o=arguments.length-2;if(o===1)n.children=r;else if(1<o){a=Array(o);for(var f=0;f<o;f++)a[f]=arguments[f+2];n.children=a}return{$$typeof:Xr,type:e.type,key:i,ref:l,props:n,_owner:s}};T.createContext=function(e){return e={$$typeof:vu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mu,_context:e},e.Consumer=e};T.createElement=io;T.createFactory=function(e){var t=io.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:ku,render:e}};T.isValidElement=Ol;T.lazy=function(e){return{$$typeof:bu,_payload:{_status:-1,_result:e},_init:Du}};T.memo=function(e,t){return{$$typeof:yu,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Dn.transition;Dn.transition={};try{e()}finally{Dn.transition=t}};T.unstable_act=lo;T.useCallback=function(e,t){return ce.current.useCallback(e,t)};T.useContext=function(e){return ce.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};T.useEffect=function(e,t){return ce.current.useEffect(e,t)};T.useId=function(){return ce.current.useId()};T.useImperativeHandle=function(e,t,r){return ce.current.useImperativeHandle(e,t,r)};T.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ce.current.useMemo(e,t)};T.useReducer=function(e,t,r){return ce.current.useReducer(e,t,r)};T.useRef=function(e){return ce.current.useRef(e)};T.useState=function(e){return ce.current.useState(e)};T.useSyncExternalStore=function(e,t,r){return ce.current.useSyncExternalStore(e,t,r)};T.useTransition=function(){return ce.current.useTransition()};T.version="18.3.1";Ya.exports=T;var A=Ya.exports;const so=cu(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu=A,Pu=Symbol.for("react.element"),Hu=Symbol.for("react.fragment"),Nu=Object.prototype.hasOwnProperty,Iu=Mu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Au={key:!0,ref:!0,__self:!0,__source:!0};function ao(e,t,r){var n,i={},l=null,s=null;r!==void 0&&(l=""+r),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Nu.call(t,n)&&!Au.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Pu,type:e,key:l,ref:s,props:i,_owner:Iu.current}}si.Fragment=Hu;si.jsx=ao;si.jsxs=ao;qa.exports=si;var d=qa.exports,qi={},oo={exports:{}},ze={},uo={exports:{}},co={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,H){var I=E.length;E.push(H);e:for(;0<I;){var j=I-1>>>1,J=E[j];if(0<i(J,H))E[j]=H,E[I]=J,I=j;else break e}}function r(E){return E.length===0?null:E[0]}function n(E){if(E.length===0)return null;var H=E[0],I=E.pop();if(I!==H){E[0]=I;e:for(var j=0,J=E.length,ln=J>>>1;j<ln;){var wt=2*(j+1)-1,wi=E[wt],zt=wt+1,sn=E[zt];if(0>i(wi,I))zt<J&&0>i(sn,wi)?(E[j]=sn,E[zt]=I,j=zt):(E[j]=wi,E[wt]=I,j=wt);else if(zt<J&&0>i(sn,I))E[j]=sn,E[zt]=I,j=zt;else break e}}return H}function i(E,H){var I=E.sortIndex-H.sortIndex;return I!==0?I:E.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var o=[],f=[],v=1,g=null,m=3,p=!1,k=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var H=r(f);H!==null;){if(H.callback===null)n(f);else if(H.startTime<=E)n(f),H.sortIndex=H.expirationTime,t(o,H);else break;H=r(f)}}function x(E){if(y=!1,h(E),!k)if(r(o)!==null)k=!0,U(z);else{var H=r(f);H!==null&&Qe(x,H.startTime-E)}}function z(E,H){k=!1,y&&(y=!1,c(D),D=-1),p=!0;var I=m;try{for(h(H),g=r(o);g!==null&&(!(g.expirationTime>H)||E&&!V());){var j=g.callback;if(typeof j=="function"){g.callback=null,m=g.priorityLevel;var J=j(g.expirationTime<=H);H=e.unstable_now(),typeof J=="function"?g.callback=J:g===r(o)&&n(o),h(H)}else n(o);g=r(o)}if(g!==null)var ln=!0;else{var wt=r(f);wt!==null&&Qe(x,wt.startTime-H),ln=!1}return ln}finally{g=null,m=I,p=!1}}var S=!1,b=null,D=-1,L=5,N=-1;function V(){return!(e.unstable_now()-N<L)}function oe(){if(b!==null){var E=e.unstable_now();N=E;var H=!0;try{H=b(!0,E)}finally{H?he():(S=!1,b=null)}}else S=!1}var he;if(typeof u=="function")he=function(){u(oe)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,De=Kt.port2;Kt.port1.onmessage=oe,he=function(){De.postMessage(null)}}else he=function(){M(oe,0)};function U(E){b=E,S||(S=!0,he())}function Qe(E,H){D=M(function(){E(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){k||p||(k=!0,U(z))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(o)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var I=m;m=H;try{return E()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,H){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=m;m=E;try{return H()}finally{m=I}},e.unstable_scheduleCallback=function(E,H,I){var j=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?j+I:j):I=j,E){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=I+J,E={id:v++,callback:H,priorityLevel:E,startTime:I,expirationTime:J,sortIndex:-1},I>j?(E.sortIndex=I,t(f,E),r(o)===null&&E===r(f)&&(y?(c(D),D=-1):y=!0,Qe(x,I-j))):(E.sortIndex=J,t(o,E),k||p||(k=!0,U(z))),E},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(E){var H=m;return function(){var I=m;m=H;try{return E.apply(this,arguments)}finally{m=I}}}})(co);uo.exports=co;var Tu=uo.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu=A,we=Tu;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fo=new Set,Cr={};function Ct(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(Cr[e]=t,e=0;e<t.length;e++)fo.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yi=Object.prototype.hasOwnProperty,Lu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rs={},Fs={};function Cu(e){return Yi.call(Fs,e)?!0:Yi.call(Rs,e)?!1:Lu.test(e)?Fs[e]=!0:(Rs[e]=!0,!1)}function ju(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ku(e,t,r,n){if(t===null||typeof t>"u"||ju(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,r,n,i,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vl=/[\-:]([a-z])/g;function _l(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vl,_l);ne[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vl,_l);ne[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vl,_l);ne[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zl(e,t,r,n){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ku(t,r,i,n)&&(r=null),n||i===null?Cu(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var et=Bu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,on=Symbol.for("react.element"),Ft=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),ql=Symbol.for("react.strict_mode"),Ji=Symbol.for("react.profiler"),ho=Symbol.for("react.provider"),po=Symbol.for("react.context"),Yl=Symbol.for("react.forward_ref"),Xi=Symbol.for("react.suspense"),el=Symbol.for("react.suspense_list"),Jl=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),go=Symbol.for("react.offscreen"),Gs=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=Gs&&e[Gs]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Si;function zr(e){if(Si===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Si=t&&t[1]||""}return`
`+Si+e}var Di=!1;function Ei(e,t){if(!e||Di)return"";Di=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var n=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){n=f}e.call(t.prototype)}else{try{throw Error()}catch(f){n=f}e()}}catch(f){if(f&&n&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),l=n.stack.split(`
`),s=i.length-1,a=l.length-1;1<=s&&0<=a&&i[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==l[a]){var o=`
`+i[s].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=s&&0<=a);break}}}finally{Di=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?zr(e):""}function Qu(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=Ei(e.type,!1),e;case 11:return e=Ei(e.type.render,!1),e;case 1:return e=Ei(e.type,!0),e;default:return""}}function tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case Ft:return"Portal";case Ji:return"Profiler";case ql:return"StrictMode";case Xi:return"Suspense";case el:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case po:return(e.displayName||"Context")+".Consumer";case ho:return(e._context.displayName||"Context")+".Provider";case Yl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jl:return t=e.displayName||null,t!==null?t:tl(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return tl(e(t))}catch{}}return null}function Ru(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tl(t);case 8:return t===ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fu(e){var t=mo(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dn(e){e._valueTracker||(e._valueTracker=Fu(e))}function vo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=mo(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Cn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rl(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function $s(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=vt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ko(e,t){t=t.checked,t!=null&&Zl(e,"checked",t,!1)}function nl(e,t){ko(e,t);var r=vt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?il(e,t.type,r):t.hasOwnProperty("defaultValue")&&il(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ws(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function il(e,t,r){(t!=="number"||Cn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Sr=Array.isArray;function Xt(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+vt(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Us(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(w(92));if(Sr(r)){if(1<r.length)throw Error(w(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:vt(r)}}function xo(e,t){var r=vt(t.value),n=vt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Os(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var un,bo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(un=un||document.createElement("div"),un.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=un.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gu=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){Gu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function wo(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function zo(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=wo(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var $u=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function al(e,t){if(t){if($u[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function ol(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dl=null;function Xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ul=null,er=null,tr=null;function Vs(e){if(e=rn(e)){if(typeof ul!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ci(t),ul(e.stateNode,e.type,t))}}function So(e){er?tr?tr.push(e):tr=[e]:er=e}function Do(){if(er){var e=er,t=tr;if(tr=er=null,Vs(e),t)for(e=0;e<t.length;e++)Vs(t[e])}}function Eo(e,t){return e(t)}function Mo(){}var Mi=!1;function Po(e,t,r){if(Mi)return e(t,r);Mi=!0;try{return Eo(e,t,r)}finally{Mi=!1,(er!==null||tr!==null)&&(Mo(),Do())}}function Kr(e,t){var r=e.stateNode;if(r===null)return null;var n=ci(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(w(231,t,typeof r));return r}var cl=!1;if(qe)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){cl=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{cl=!1}function Wu(e,t,r,n,i,l,s,a,o){var f=Array.prototype.slice.call(arguments,3);try{t.apply(r,f)}catch(v){this.onError(v)}}var Pr=!1,jn=null,Kn=!1,fl=null,Uu={onError:function(e){Pr=!0,jn=e}};function Ou(e,t,r,n,i,l,s,a,o){Pr=!1,jn=null,Wu.apply(Uu,arguments)}function Vu(e,t,r,n,i,l,s,a,o){if(Ou.apply(this,arguments),Pr){if(Pr){var f=jn;Pr=!1,jn=null}else throw Error(w(198));Kn||(Kn=!0,fl=f)}}function jt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ho(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _s(e){if(jt(e)!==e)throw Error(w(188))}function _u(e){var t=e.alternate;if(!t){if(t=jt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===r)return _s(i),e;if(l===n)return _s(i),t;l=l.sibling}throw Error(w(188))}if(r.return!==n.return)r=i,n=l;else{for(var s=!1,a=i.child;a;){if(a===r){s=!0,r=i,n=l;break}if(a===n){s=!0,n=i,r=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===r){s=!0,r=l,n=i;break}if(a===n){s=!0,n=l,r=i;break}a=a.sibling}if(!s)throw Error(w(189))}}if(r.alternate!==n)throw Error(w(190))}if(r.tag!==3)throw Error(w(188));return r.stateNode.current===r?e:t}function No(e){return e=_u(e),e!==null?Io(e):null}function Io(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Io(e);if(t!==null)return t;e=e.sibling}return null}var Ao=we.unstable_scheduleCallback,Zs=we.unstable_cancelCallback,Zu=we.unstable_shouldYield,qu=we.unstable_requestPaint,_=we.unstable_now,Yu=we.unstable_getCurrentPriorityLevel,es=we.unstable_ImmediatePriority,To=we.unstable_UserBlockingPriority,Qn=we.unstable_NormalPriority,Ju=we.unstable_LowPriority,Bo=we.unstable_IdlePriority,ai=null,$e=null;function Xu(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:rc,ec=Math.log,tc=Math.LN2;function rc(e){return e>>>=0,e===0?32:31-(ec(e)/tc|0)|0}var cn=64,fn=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rn(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,l=e.pingedLanes,s=r&268435455;if(s!==0){var a=s&~i;a!==0?n=Dr(a):(l&=s,l!==0&&(n=Dr(l)))}else s=r&~i,s!==0?n=Dr(s):l!==0&&(n=Dr(l));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ce(t),i=1<<r,n|=e[r],t&=~i;return n}function nc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ic(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Ce(l),a=1<<s,o=i[s];o===-1?(!(a&r)||a&n)&&(i[s]=nc(a,t)):o<=t&&(e.expiredLanes|=a),l&=~a}}function hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lo(){var e=cn;return cn<<=1,!(cn&4194240)&&(cn=64),e}function Pi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function en(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ce(t),e[t]=r}function lc(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Ce(r),l=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~l}}function ts(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ce(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var C=0;function Co(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jo,rs,Ko,Qo,Ro,pl=!1,hn=[],dt=null,ut=null,ct=null,Qr=new Map,Rr=new Map,lt=[],sc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function vr(e,t,r,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=rn(t),t!==null&&rs(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ac(e,t,r,n,i){switch(t){case"focusin":return dt=vr(dt,e,t,r,n,i),!0;case"dragenter":return ut=vr(ut,e,t,r,n,i),!0;case"mouseover":return ct=vr(ct,e,t,r,n,i),!0;case"pointerover":var l=i.pointerId;return Qr.set(l,vr(Qr.get(l)||null,e,t,r,n,i)),!0;case"gotpointercapture":return l=i.pointerId,Rr.set(l,vr(Rr.get(l)||null,e,t,r,n,i)),!0}return!1}function Fo(e){var t=Et(e.target);if(t!==null){var r=jt(t);if(r!==null){if(t=r.tag,t===13){if(t=Ho(r),t!==null){e.blockedOn=t,Ro(e.priority,function(){Ko(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function En(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);dl=n,r.target.dispatchEvent(n),dl=null}else return t=rn(r),t!==null&&rs(t),e.blockedOn=r,!1;t.shift()}return!0}function Ys(e,t,r){En(e)&&r.delete(t)}function oc(){pl=!1,dt!==null&&En(dt)&&(dt=null),ut!==null&&En(ut)&&(ut=null),ct!==null&&En(ct)&&(ct=null),Qr.forEach(Ys),Rr.forEach(Ys)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,pl||(pl=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,oc)))}function Fr(e){function t(i){return kr(i,e)}if(0<hn.length){kr(hn[0],e);for(var r=1;r<hn.length;r++){var n=hn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(dt!==null&&kr(dt,e),ut!==null&&kr(ut,e),ct!==null&&kr(ct,e),Qr.forEach(t),Rr.forEach(t),r=0;r<lt.length;r++)n=lt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<lt.length&&(r=lt[0],r.blockedOn===null);)Fo(r),r.blockedOn===null&&lt.shift()}var rr=et.ReactCurrentBatchConfig,Fn=!0;function dc(e,t,r,n){var i=C,l=rr.transition;rr.transition=null;try{C=1,ns(e,t,r,n)}finally{C=i,rr.transition=l}}function uc(e,t,r,n){var i=C,l=rr.transition;rr.transition=null;try{C=4,ns(e,t,r,n)}finally{C=i,rr.transition=l}}function ns(e,t,r,n){if(Fn){var i=gl(e,t,r,n);if(i===null)Ki(e,t,n,Gn,r),qs(e,n);else if(ac(i,e,t,r,n))n.stopPropagation();else if(qs(e,n),t&4&&-1<sc.indexOf(e)){for(;i!==null;){var l=rn(i);if(l!==null&&jo(l),l=gl(e,t,r,n),l===null&&Ki(e,t,n,Gn,r),l===i)break;i=l}i!==null&&n.stopPropagation()}else Ki(e,t,n,null,r)}}var Gn=null;function gl(e,t,r,n){if(Gn=null,e=Xl(n),e=Et(e),e!==null)if(t=jt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ho(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gn=e,null}function Go(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yu()){case es:return 1;case To:return 4;case Qn:case Ju:return 16;case Bo:return 536870912;default:return 16}default:return 16}}var at=null,is=null,Mn=null;function $o(){if(Mn)return Mn;var e,t=is,r=t.length,n,i="value"in at?at.value:at.textContent,l=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[l-n];n++);return Mn=i.slice(e,1<n?1-n:void 0)}function Pn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pn(){return!0}function Js(){return!1}function Se(e){function t(r,n,i,l,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?pn:Js,this.isPropagationStopped=Js,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=pn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=pn)},persist:function(){},isPersistent:pn}),t}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ls=Se(hr),tn=W({},hr,{view:0,detail:0}),cc=Se(tn),Hi,Ni,xr,oi=W({},tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(Hi=e.screenX-xr.screenX,Ni=e.screenY-xr.screenY):Ni=Hi=0,xr=e),Hi)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),Xs=Se(oi),fc=W({},oi,{dataTransfer:0}),hc=Se(fc),pc=W({},tn,{relatedTarget:0}),Ii=Se(pc),gc=W({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),mc=Se(gc),vc=W({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kc=Se(vc),xc=W({},hr,{data:0}),ea=Se(xc),yc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wc[e])?!!t[e]:!1}function ss(){return zc}var Sc=W({},tn,{key:function(e){if(e.key){var t=yc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(e){return e.type==="keypress"?Pn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dc=Se(Sc),Ec=W({},oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ta=Se(Ec),Mc=W({},tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),Pc=Se(Mc),Hc=W({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nc=Se(Hc),Ic=W({},oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ac=Se(Ic),Tc=[9,13,27,32],as=qe&&"CompositionEvent"in window,Hr=null;qe&&"documentMode"in document&&(Hr=document.documentMode);var Bc=qe&&"TextEvent"in window&&!Hr,Wo=qe&&(!as||Hr&&8<Hr&&11>=Hr),ra=" ",na=!1;function Uo(e,t){switch(e){case"keyup":return Tc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Lc(e,t){switch(e){case"compositionend":return Oo(t);case"keypress":return t.which!==32?null:(na=!0,ra);case"textInput":return e=t.data,e===ra&&na?null:e;default:return null}}function Cc(e,t){if($t)return e==="compositionend"||!as&&Uo(e,t)?(e=$o(),Mn=is=at=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wo&&t.locale!=="ko"?null:t.data;default:return null}}var jc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jc[e.type]:t==="textarea"}function Vo(e,t,r,n){So(n),t=$n(t,"onChange"),0<t.length&&(r=new ls("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Nr=null,Gr=null;function Kc(e){id(e,0)}function di(e){var t=Ot(e);if(vo(t))return e}function Qc(e,t){if(e==="change")return t}var _o=!1;if(qe){var Ai;if(qe){var Ti="oninput"in document;if(!Ti){var la=document.createElement("div");la.setAttribute("oninput","return;"),Ti=typeof la.oninput=="function"}Ai=Ti}else Ai=!1;_o=Ai&&(!document.documentMode||9<document.documentMode)}function sa(){Nr&&(Nr.detachEvent("onpropertychange",Zo),Gr=Nr=null)}function Zo(e){if(e.propertyName==="value"&&di(Gr)){var t=[];Vo(t,Gr,e,Xl(e)),Po(Kc,t)}}function Rc(e,t,r){e==="focusin"?(sa(),Nr=t,Gr=r,Nr.attachEvent("onpropertychange",Zo)):e==="focusout"&&sa()}function Fc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return di(Gr)}function Gc(e,t){if(e==="click")return di(t)}function $c(e,t){if(e==="input"||e==="change")return di(t)}function Wc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Wc;function $r(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Yi.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oa(e,t){var r=aa(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=aa(r)}}function qo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yo(){for(var e=window,t=Cn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Cn(e.document)}return t}function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uc(e){var t=Yo(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&qo(r.ownerDocument.documentElement,r)){if(n!==null&&os(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,l=Math.min(n.start,i);n=n.end===void 0?l:Math.min(n.end,i),!e.extend&&l>n&&(i=n,n=l,l=i),i=oa(r,l);var s=oa(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Oc=qe&&"documentMode"in document&&11>=document.documentMode,Wt=null,ml=null,Ir=null,vl=!1;function da(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;vl||Wt==null||Wt!==Cn(n)||(n=Wt,"selectionStart"in n&&os(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ir&&$r(Ir,n)||(Ir=n,n=$n(ml,"onSelect"),0<n.length&&(t=new ls("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Wt)))}function gn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Ut={animationend:gn("Animation","AnimationEnd"),animationiteration:gn("Animation","AnimationIteration"),animationstart:gn("Animation","AnimationStart"),transitionend:gn("Transition","TransitionEnd")},Bi={},Jo={};qe&&(Jo=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function ui(e){if(Bi[e])return Bi[e];if(!Ut[e])return e;var t=Ut[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Jo)return Bi[e]=t[r];return e}var Xo=ui("animationend"),ed=ui("animationiteration"),td=ui("animationstart"),rd=ui("transitionend"),nd=new Map,ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){nd.set(e,t),Ct(t,[e])}for(var Li=0;Li<ua.length;Li++){var Ci=ua[Li],Vc=Ci.toLowerCase(),_c=Ci[0].toUpperCase()+Ci.slice(1);xt(Vc,"on"+_c)}xt(Xo,"onAnimationEnd");xt(ed,"onAnimationIteration");xt(td,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(rd,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);Ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ct("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function ca(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Vu(n,t,void 0,e),e.currentTarget=null}function id(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var s=n.length-1;0<=s;s--){var a=n[s],o=a.instance,f=a.currentTarget;if(a=a.listener,o!==l&&i.isPropagationStopped())break e;ca(i,a,f),l=o}else for(s=0;s<n.length;s++){if(a=n[s],o=a.instance,f=a.currentTarget,a=a.listener,o!==l&&i.isPropagationStopped())break e;ca(i,a,f),l=o}}}if(Kn)throw e=fl,Kn=!1,fl=null,e}function Q(e,t){var r=t[wl];r===void 0&&(r=t[wl]=new Set);var n=e+"__bubble";r.has(n)||(ld(t,e,2,!1),r.add(n))}function ji(e,t,r){var n=0;t&&(n|=4),ld(r,e,n,t)}var mn="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[mn]){e[mn]=!0,fo.forEach(function(r){r!=="selectionchange"&&(Zc.has(r)||ji(r,!1,e),ji(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mn]||(t[mn]=!0,ji("selectionchange",!1,t))}}function ld(e,t,r,n){switch(Go(t)){case 1:var i=dc;break;case 4:i=uc;break;default:i=ns}r=i.bind(null,t,r,e),i=void 0,!cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ki(e,t,r,n,i){var l=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var a=n.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var o=s.tag;if((o===3||o===4)&&(o=s.stateNode.containerInfo,o===i||o.nodeType===8&&o.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Et(a),s===null)return;if(o=s.tag,o===5||o===6){n=l=s;continue e}a=a.parentNode}}n=n.return}Po(function(){var f=l,v=Xl(r),g=[];e:{var m=nd.get(e);if(m!==void 0){var p=ls,k=e;switch(e){case"keypress":if(Pn(r)===0)break e;case"keydown":case"keyup":p=Dc;break;case"focusin":k="focus",p=Ii;break;case"focusout":k="blur",p=Ii;break;case"beforeblur":case"afterblur":p=Ii;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=hc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Pc;break;case Xo:case ed:case td:p=mc;break;case rd:p=Nc;break;case"scroll":p=cc;break;case"wheel":p=Ac;break;case"copy":case"cut":case"paste":p=kc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ta}var y=(t&4)!==0,M=!y&&e==="scroll",c=y?m!==null?m+"Capture":null:m;y=[];for(var u=f,h;u!==null;){h=u;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,c!==null&&(x=Kr(u,c),x!=null&&y.push(Ur(u,x,h)))),M)break;u=u.return}0<y.length&&(m=new p(m,k,null,r,v),g.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",m&&r!==dl&&(k=r.relatedTarget||r.fromElement)&&(Et(k)||k[Ye]))break e;if((p||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,p?(k=r.relatedTarget||r.toElement,p=f,k=k?Et(k):null,k!==null&&(M=jt(k),k!==M||k.tag!==5&&k.tag!==6)&&(k=null)):(p=null,k=f),p!==k)){if(y=Xs,x="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=ta,x="onPointerLeave",c="onPointerEnter",u="pointer"),M=p==null?m:Ot(p),h=k==null?m:Ot(k),m=new y(x,u+"leave",p,r,v),m.target=M,m.relatedTarget=h,x=null,Et(v)===f&&(y=new y(c,u+"enter",k,r,v),y.target=h,y.relatedTarget=M,x=y),M=x,p&&k)t:{for(y=p,c=k,u=0,h=y;h;h=Qt(h))u++;for(h=0,x=c;x;x=Qt(x))h++;for(;0<u-h;)y=Qt(y),u--;for(;0<h-u;)c=Qt(c),h--;for(;u--;){if(y===c||c!==null&&y===c.alternate)break t;y=Qt(y),c=Qt(c)}y=null}else y=null;p!==null&&fa(g,m,p,y,!1),k!==null&&M!==null&&fa(g,M,k,y,!0)}}e:{if(m=f?Ot(f):window,p=m.nodeName&&m.nodeName.toLowerCase(),p==="select"||p==="input"&&m.type==="file")var z=Qc;else if(ia(m))if(_o)z=$c;else{z=Fc;var S=Rc}else(p=m.nodeName)&&p.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=Gc);if(z&&(z=z(e,f))){Vo(g,z,r,v);break e}S&&S(e,m,f),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&il(m,"number",m.value)}switch(S=f?Ot(f):window,e){case"focusin":(ia(S)||S.contentEditable==="true")&&(Wt=S,ml=f,Ir=null);break;case"focusout":Ir=ml=Wt=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,da(g,r,v);break;case"selectionchange":if(Oc)break;case"keydown":case"keyup":da(g,r,v)}var b;if(as)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else $t?Uo(e,r)&&(D="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(Wo&&r.locale!=="ko"&&($t||D!=="onCompositionStart"?D==="onCompositionEnd"&&$t&&(b=$o()):(at=v,is="value"in at?at.value:at.textContent,$t=!0)),S=$n(f,D),0<S.length&&(D=new ea(D,e,null,r,v),g.push({event:D,listeners:S}),b?D.data=b:(b=Oo(r),b!==null&&(D.data=b)))),(b=Bc?Lc(e,r):Cc(e,r))&&(f=$n(f,"onBeforeInput"),0<f.length&&(v=new ea("onBeforeInput","beforeinput",null,r,v),g.push({event:v,listeners:f}),v.data=b))}id(g,t)})}function Ur(e,t,r){return{instance:e,listener:t,currentTarget:r}}function $n(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Kr(e,r),l!=null&&n.unshift(Ur(e,l,i)),l=Kr(e,t),l!=null&&n.push(Ur(e,l,i))),e=e.return}return n}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,t,r,n,i){for(var l=t._reactName,s=[];r!==null&&r!==n;){var a=r,o=a.alternate,f=a.stateNode;if(o!==null&&o===n)break;a.tag===5&&f!==null&&(a=f,i?(o=Kr(r,l),o!=null&&s.unshift(Ur(r,o,a))):i||(o=Kr(r,l),o!=null&&s.push(Ur(r,o,a)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var qc=/\r\n?/g,Yc=/\u0000|\uFFFD/g;function ha(e){return(typeof e=="string"?e:""+e).replace(qc,`
`).replace(Yc,"")}function vn(e,t,r){if(t=ha(t),ha(e)!==t&&r)throw Error(w(425))}function Wn(){}var kl=null,xl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bl=typeof setTimeout=="function"?setTimeout:void 0,Jc=typeof clearTimeout=="function"?clearTimeout:void 0,pa=typeof Promise=="function"?Promise:void 0,Xc=typeof queueMicrotask=="function"?queueMicrotask:typeof pa<"u"?function(e){return pa.resolve(null).then(e).catch(ef)}:bl;function ef(e){setTimeout(function(){throw e})}function Qi(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Fr(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Fr(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ga(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),Ge="__reactFiber$"+pr,Or="__reactProps$"+pr,Ye="__reactContainer$"+pr,wl="__reactEvents$"+pr,tf="__reactListeners$"+pr,rf="__reactHandles$"+pr;function Et(e){var t=e[Ge];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ye]||r[Ge]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ga(e);e!==null;){if(r=e[Ge])return r;e=ga(e)}return t}e=r,r=e.parentNode}return null}function rn(e){return e=e[Ge]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ot(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ci(e){return e[Or]||null}var zl=[],Vt=-1;function yt(e){return{current:e}}function R(e){0>Vt||(e.current=zl[Vt],zl[Vt]=null,Vt--)}function K(e,t){Vt++,zl[Vt]=e.current,e.current=t}var kt={},ae=yt(kt),me=yt(!1),It=kt;function sr(e,t){var r=e.type.contextTypes;if(!r)return kt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in r)i[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function Un(){R(me),R(ae)}function ma(e,t,r){if(ae.current!==kt)throw Error(w(168));K(ae,t),K(me,r)}function sd(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(w(108,Ru(e)||"Unknown",i));return W({},r,n)}function On(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,It=ae.current,K(ae,e),K(me,me.current),!0}function va(e,t,r){var n=e.stateNode;if(!n)throw Error(w(169));r?(e=sd(e,t,It),n.__reactInternalMemoizedMergedChildContext=e,R(me),R(ae),K(ae,e)):R(me),K(me,r)}var Oe=null,fi=!1,Ri=!1;function ad(e){Oe===null?Oe=[e]:Oe.push(e)}function nf(e){fi=!0,ad(e)}function bt(){if(!Ri&&Oe!==null){Ri=!0;var e=0,t=C;try{var r=Oe;for(C=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Oe=null,fi=!1}catch(i){throw Oe!==null&&(Oe=Oe.slice(e+1)),Ao(es,bt),i}finally{C=t,Ri=!1}}return null}var _t=[],Zt=0,Vn=null,_n=0,Ee=[],Me=0,At=null,Ve=1,_e="";function St(e,t){_t[Zt++]=_n,_t[Zt++]=Vn,Vn=e,_n=t}function od(e,t,r){Ee[Me++]=Ve,Ee[Me++]=_e,Ee[Me++]=At,At=e;var n=Ve;e=_e;var i=32-Ce(n)-1;n&=~(1<<i),r+=1;var l=32-Ce(t)+i;if(30<l){var s=i-i%5;l=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Ve=1<<32-Ce(t)+i|r<<i|n,_e=l+e}else Ve=1<<l|r<<i|n,_e=e}function ds(e){e.return!==null&&(St(e,1),od(e,1,0))}function us(e){for(;e===Vn;)Vn=_t[--Zt],_t[Zt]=null,_n=_t[--Zt],_t[Zt]=null;for(;e===At;)At=Ee[--Me],Ee[Me]=null,_e=Ee[--Me],Ee[Me]=null,Ve=Ee[--Me],Ee[Me]=null}var be=null,ye=null,F=!1,Le=null;function dd(e,t){var r=Pe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ka(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,ye=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=At!==null?{id:Ve,overflow:_e}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Pe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,be=e,ye=null,!0):!1;default:return!1}}function Sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(F){var t=ye;if(t){var r=t;if(!ka(e,t)){if(Sl(e))throw Error(w(418));t=ft(r.nextSibling);var n=be;t&&ka(e,t)?dd(n,r):(e.flags=e.flags&-4097|2,F=!1,be=e)}}else{if(Sl(e))throw Error(w(418));e.flags=e.flags&-4097|2,F=!1,be=e}}}function xa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function kn(e){if(e!==be)return!1;if(!F)return xa(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=ye)){if(Sl(e))throw ud(),Error(w(418));for(;t;)dd(e,t),t=ft(t.nextSibling)}if(xa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ye=ft(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=be?ft(e.stateNode.nextSibling):null;return!0}function ud(){for(var e=ye;e;)e=ft(e.nextSibling)}function ar(){ye=be=null,F=!1}function cs(e){Le===null?Le=[e]:Le.push(e)}var lf=et.ReactCurrentBatchConfig;function yr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(w(309));var n=r.stateNode}if(!n)throw Error(w(147,e));var i=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var a=i.refs;s===null?delete a[l]:a[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(w(284));if(!r._owner)throw Error(w(290,e))}return e}function xn(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ya(e){var t=e._init;return t(e._payload)}function cd(e){function t(c,u){if(e){var h=c.deletions;h===null?(c.deletions=[u],c.flags|=16):h.push(u)}}function r(c,u){if(!e)return null;for(;u!==null;)t(c,u),u=u.sibling;return null}function n(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function i(c,u){return c=mt(c,u),c.index=0,c.sibling=null,c}function l(c,u,h){return c.index=h,e?(h=c.alternate,h!==null?(h=h.index,h<u?(c.flags|=2,u):h):(c.flags|=2,u)):(c.flags|=1048576,u)}function s(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,u,h,x){return u===null||u.tag!==6?(u=Vi(h,c.mode,x),u.return=c,u):(u=i(u,h),u.return=c,u)}function o(c,u,h,x){var z=h.type;return z===Gt?v(c,u,h.props.children,x,h.key):u!==null&&(u.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===nt&&ya(z)===u.type)?(x=i(u,h.props),x.ref=yr(c,u,h),x.return=c,x):(x=Ln(h.type,h.key,h.props,null,c.mode,x),x.ref=yr(c,u,h),x.return=c,x)}function f(c,u,h,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=_i(h,c.mode,x),u.return=c,u):(u=i(u,h.children||[]),u.return=c,u)}function v(c,u,h,x,z){return u===null||u.tag!==7?(u=Nt(h,c.mode,x,z),u.return=c,u):(u=i(u,h),u.return=c,u)}function g(c,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Vi(""+u,c.mode,h),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case on:return h=Ln(u.type,u.key,u.props,null,c.mode,h),h.ref=yr(c,null,u),h.return=c,h;case Ft:return u=_i(u,c.mode,h),u.return=c,u;case nt:var x=u._init;return g(c,x(u._payload),h)}if(Sr(u)||gr(u))return u=Nt(u,c.mode,h,null),u.return=c,u;xn(c,u)}return null}function m(c,u,h,x){var z=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return z!==null?null:a(c,u,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case on:return h.key===z?o(c,u,h,x):null;case Ft:return h.key===z?f(c,u,h,x):null;case nt:return z=h._init,m(c,u,z(h._payload),x)}if(Sr(h)||gr(h))return z!==null?null:v(c,u,h,x,null);xn(c,h)}return null}function p(c,u,h,x,z){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(h)||null,a(u,c,""+x,z);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case on:return c=c.get(x.key===null?h:x.key)||null,o(u,c,x,z);case Ft:return c=c.get(x.key===null?h:x.key)||null,f(u,c,x,z);case nt:var S=x._init;return p(c,u,h,S(x._payload),z)}if(Sr(x)||gr(x))return c=c.get(h)||null,v(u,c,x,z,null);xn(u,x)}return null}function k(c,u,h,x){for(var z=null,S=null,b=u,D=u=0,L=null;b!==null&&D<h.length;D++){b.index>D?(L=b,b=null):L=b.sibling;var N=m(c,b,h[D],x);if(N===null){b===null&&(b=L);break}e&&b&&N.alternate===null&&t(c,b),u=l(N,u,D),S===null?z=N:S.sibling=N,S=N,b=L}if(D===h.length)return r(c,b),F&&St(c,D),z;if(b===null){for(;D<h.length;D++)b=g(c,h[D],x),b!==null&&(u=l(b,u,D),S===null?z=b:S.sibling=b,S=b);return F&&St(c,D),z}for(b=n(c,b);D<h.length;D++)L=p(b,c,D,h[D],x),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?D:L.key),u=l(L,u,D),S===null?z=L:S.sibling=L,S=L);return e&&b.forEach(function(V){return t(c,V)}),F&&St(c,D),z}function y(c,u,h,x){var z=gr(h);if(typeof z!="function")throw Error(w(150));if(h=z.call(h),h==null)throw Error(w(151));for(var S=z=null,b=u,D=u=0,L=null,N=h.next();b!==null&&!N.done;D++,N=h.next()){b.index>D?(L=b,b=null):L=b.sibling;var V=m(c,b,N.value,x);if(V===null){b===null&&(b=L);break}e&&b&&V.alternate===null&&t(c,b),u=l(V,u,D),S===null?z=V:S.sibling=V,S=V,b=L}if(N.done)return r(c,b),F&&St(c,D),z;if(b===null){for(;!N.done;D++,N=h.next())N=g(c,N.value,x),N!==null&&(u=l(N,u,D),S===null?z=N:S.sibling=N,S=N);return F&&St(c,D),z}for(b=n(c,b);!N.done;D++,N=h.next())N=p(b,c,D,N.value,x),N!==null&&(e&&N.alternate!==null&&b.delete(N.key===null?D:N.key),u=l(N,u,D),S===null?z=N:S.sibling=N,S=N);return e&&b.forEach(function(oe){return t(c,oe)}),F&&St(c,D),z}function M(c,u,h,x){if(typeof h=="object"&&h!==null&&h.type===Gt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case on:e:{for(var z=h.key,S=u;S!==null;){if(S.key===z){if(z=h.type,z===Gt){if(S.tag===7){r(c,S.sibling),u=i(S,h.props.children),u.return=c,c=u;break e}}else if(S.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===nt&&ya(z)===S.type){r(c,S.sibling),u=i(S,h.props),u.ref=yr(c,S,h),u.return=c,c=u;break e}r(c,S);break}else t(c,S);S=S.sibling}h.type===Gt?(u=Nt(h.props.children,c.mode,x,h.key),u.return=c,c=u):(x=Ln(h.type,h.key,h.props,null,c.mode,x),x.ref=yr(c,u,h),x.return=c,c=x)}return s(c);case Ft:e:{for(S=h.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){r(c,u.sibling),u=i(u,h.children||[]),u.return=c,c=u;break e}else{r(c,u);break}else t(c,u);u=u.sibling}u=_i(h,c.mode,x),u.return=c,c=u}return s(c);case nt:return S=h._init,M(c,u,S(h._payload),x)}if(Sr(h))return k(c,u,h,x);if(gr(h))return y(c,u,h,x);xn(c,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(r(c,u.sibling),u=i(u,h),u.return=c,c=u):(r(c,u),u=Vi(h,c.mode,x),u.return=c,c=u),s(c)):r(c,u)}return M}var or=cd(!0),fd=cd(!1),Zn=yt(null),qn=null,qt=null,fs=null;function hs(){fs=qt=qn=null}function ps(e){var t=Zn.current;R(Zn),e._currentValue=t}function El(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function nr(e,t){qn=e,fs=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(fs!==e)if(e={context:e,memoizedValue:t,next:null},qt===null){if(qn===null)throw Error(w(308));qt=e,qn.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return t}var Mt=null;function gs(e){Mt===null?Mt=[e]:Mt.push(e)}function hd(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,gs(t)):(r.next=i.next,i.next=r),t.interleaved=r,Je(e,n)}function Je(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var it=!1;function ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,B&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Je(e,r)}return i=n.interleaved,i===null?(t.next=t,gs(n)):(t.next=i.next,i.next=t),n.interleaved=t,Je(e,r)}function Hn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ts(e,r)}}function ba(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?i=l=s:l=l.next=s,r=r.next}while(r!==null);l===null?i=l=t:l=l.next=t}else i=l=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Yn(e,t,r,n){var i=e.updateQueue;it=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var o=a,f=o.next;o.next=null,s===null?l=f:s.next=f,s=o;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==s&&(a===null?v.firstBaseUpdate=f:a.next=f,v.lastBaseUpdate=o))}if(l!==null){var g=i.baseState;s=0,v=f=o=null,a=l;do{var m=a.lane,p=a.eventTime;if((n&m)===m){v!==null&&(v=v.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,y=a;switch(m=t,p=r,y.tag){case 1:if(k=y.payload,typeof k=="function"){g=k.call(p,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,m=typeof k=="function"?k.call(p,g,m):k,m==null)break e;g=W({},g,m);break e;case 2:it=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else p={eventTime:p,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(f=v=p,o=g):v=v.next=p,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(v===null&&(o=g),i.baseState=o,i.firstBaseUpdate=f,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Bt|=s,e.lanes=s,e.memoizedState=g}}function wa(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(w(191,i));i.call(n)}}}var nn={},We=yt(nn),Vr=yt(nn),_r=yt(nn);function Pt(e){if(e===nn)throw Error(w(174));return e}function vs(e,t){switch(K(_r,t),K(Vr,e),K(We,nn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sl(t,e)}R(We),K(We,t)}function dr(){R(We),R(Vr),R(_r)}function gd(e){Pt(_r.current);var t=Pt(We.current),r=sl(t,e.type);t!==r&&(K(Vr,e),K(We,r))}function ks(e){Vr.current===e&&(R(We),R(Vr))}var G=yt(0);function Jn(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fi=[];function xs(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var Nn=et.ReactCurrentDispatcher,Gi=et.ReactCurrentBatchConfig,Tt=0,$=null,q=null,X=null,Xn=!1,Ar=!1,Zr=0,sf=0;function ie(){throw Error(w(321))}function ys(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ke(e[r],t[r]))return!1;return!0}function bs(e,t,r,n,i,l){if(Tt=l,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nn.current=e===null||e.memoizedState===null?uf:cf,e=r(n,i),Ar){l=0;do{if(Ar=!1,Zr=0,25<=l)throw Error(w(301));l+=1,X=q=null,t.updateQueue=null,Nn.current=ff,e=r(n,i)}while(Ar)}if(Nn.current=ei,t=q!==null&&q.next!==null,Tt=0,X=q=$=null,Xn=!1,t)throw Error(w(300));return e}function ws(){var e=Zr!==0;return Zr=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?$.memoizedState=X=e:X=X.next=e,X}function Ie(){if(q===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=X===null?$.memoizedState:X.next;if(t!==null)X=t,q=e;else{if(e===null)throw Error(w(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},X===null?$.memoizedState=X=e:X=X.next=e}return X}function qr(e,t){return typeof t=="function"?t(e):t}function $i(e){var t=Ie(),r=t.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=e;var n=q,i=n.baseQueue,l=r.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}n.baseQueue=i=l,r.pending=null}if(i!==null){l=i.next,n=n.baseState;var a=s=null,o=null,f=l;do{var v=f.lane;if((Tt&v)===v)o!==null&&(o=o.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),n=f.hasEagerState?f.eagerState:e(n,f.action);else{var g={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};o===null?(a=o=g,s=n):o=o.next=g,$.lanes|=v,Bt|=v}f=f.next}while(f!==null&&f!==l);o===null?s=n:o.next=a,Ke(n,t.memoizedState)||(ge=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=o,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do l=i.lane,$.lanes|=l,Bt|=l,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Wi(e){var t=Ie(),r=t.queue;if(r===null)throw Error(w(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,l=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);Ke(l,t.memoizedState)||(ge=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function md(){}function vd(e,t){var r=$,n=Ie(),i=t(),l=!Ke(n.memoizedState,i);if(l&&(n.memoizedState=i,ge=!0),n=n.queue,zs(yd.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||X!==null&&X.memoizedState.tag&1){if(r.flags|=2048,Yr(9,xd.bind(null,r,n,i,t),void 0,null),ee===null)throw Error(w(349));Tt&30||kd(r,t,i)}return i}function kd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function xd(e,t,r,n){t.value=r,t.getSnapshot=n,bd(t)&&wd(e)}function yd(e,t,r){return r(function(){bd(t)&&wd(e)})}function bd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ke(e,r)}catch{return!0}}function wd(e){var t=Je(e,1);t!==null&&je(t,e,1,-1)}function za(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:e},t.queue=e,e=e.dispatch=df.bind(null,$,e),[t.memoizedState,e]}function Yr(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function zd(){return Ie().memoizedState}function In(e,t,r,n){var i=Fe();$.flags|=e,i.memoizedState=Yr(1|t,r,void 0,n===void 0?null:n)}function hi(e,t,r,n){var i=Ie();n=n===void 0?null:n;var l=void 0;if(q!==null){var s=q.memoizedState;if(l=s.destroy,n!==null&&ys(n,s.deps)){i.memoizedState=Yr(t,r,l,n);return}}$.flags|=e,i.memoizedState=Yr(1|t,r,l,n)}function Sa(e,t){return In(8390656,8,e,t)}function zs(e,t){return hi(2048,8,e,t)}function Sd(e,t){return hi(4,2,e,t)}function Dd(e,t){return hi(4,4,e,t)}function Ed(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Md(e,t,r){return r=r!=null?r.concat([e]):null,hi(4,4,Ed.bind(null,t,e),r)}function Ss(){}function Pd(e,t){var r=Ie();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ys(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Hd(e,t){var r=Ie();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ys(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Nd(e,t,r){return Tt&21?(Ke(r,t)||(r=Lo(),$.lanes|=r,Bt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=r)}function af(e,t){var r=C;C=r!==0&&4>r?r:4,e(!0);var n=Gi.transition;Gi.transition={};try{e(!1),t()}finally{C=r,Gi.transition=n}}function Id(){return Ie().memoizedState}function of(e,t,r){var n=gt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ad(e))Td(t,r);else if(r=hd(e,t,r,n),r!==null){var i=ue();je(r,e,n,i),Bd(r,t,n)}}function df(e,t,r){var n=gt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ad(e))Td(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,a=l(s,r);if(i.hasEagerState=!0,i.eagerState=a,Ke(a,s)){var o=t.interleaved;o===null?(i.next=i,gs(t)):(i.next=o.next,o.next=i),t.interleaved=i;return}}catch{}finally{}r=hd(e,t,i,n),r!==null&&(i=ue(),je(r,e,n,i),Bd(r,t,n))}}function Ad(e){var t=e.alternate;return e===$||t!==null&&t===$}function Td(e,t){Ar=Xn=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Bd(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ts(e,r)}}var ei={readContext:Ne,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},uf={readContext:Ne,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:Sa,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,In(4194308,4,Ed.bind(null,t,e),r)},useLayoutEffect:function(e,t){return In(4194308,4,e,t)},useInsertionEffect:function(e,t){return In(4,2,e,t)},useMemo:function(e,t){var r=Fe();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Fe();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=of.bind(null,$,e),[n.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:za,useDebugValue:Ss,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=za(!1),t=e[0];return e=af.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=$,i=Fe();if(F){if(r===void 0)throw Error(w(407));r=r()}else{if(r=t(),ee===null)throw Error(w(349));Tt&30||kd(n,t,r)}i.memoizedState=r;var l={value:r,getSnapshot:t};return i.queue=l,Sa(yd.bind(null,n,l,e),[e]),n.flags|=2048,Yr(9,xd.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=Fe(),t=ee.identifierPrefix;if(F){var r=_e,n=Ve;r=(n&~(1<<32-Ce(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Zr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=sf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cf={readContext:Ne,useCallback:Pd,useContext:Ne,useEffect:zs,useImperativeHandle:Md,useInsertionEffect:Sd,useLayoutEffect:Dd,useMemo:Hd,useReducer:$i,useRef:zd,useState:function(){return $i(qr)},useDebugValue:Ss,useDeferredValue:function(e){var t=Ie();return Nd(t,q.memoizedState,e)},useTransition:function(){var e=$i(qr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:vd,useId:Id,unstable_isNewReconciler:!1},ff={readContext:Ne,useCallback:Pd,useContext:Ne,useEffect:zs,useImperativeHandle:Md,useInsertionEffect:Sd,useLayoutEffect:Dd,useMemo:Hd,useReducer:Wi,useRef:zd,useState:function(){return Wi(qr)},useDebugValue:Ss,useDeferredValue:function(e){var t=Ie();return q===null?t.memoizedState=e:Nd(t,q.memoizedState,e)},useTransition:function(){var e=Wi(qr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:vd,useId:Id,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ml(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var pi={isMounted:function(e){return(e=e._reactInternals)?jt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ue(),i=gt(e),l=Ze(n,i);l.payload=t,r!=null&&(l.callback=r),t=ht(e,l,i),t!==null&&(je(t,e,i,n),Hn(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ue(),i=gt(e),l=Ze(n,i);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=ht(e,l,i),t!==null&&(je(t,e,i,n),Hn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ue(),n=gt(e),i=Ze(r,n);i.tag=2,t!=null&&(i.callback=t),t=ht(e,i,n),t!==null&&(je(t,e,n,r),Hn(t,e,n))}};function Da(e,t,r,n,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,s):t.prototype&&t.prototype.isPureReactComponent?!$r(r,n)||!$r(i,l):!0}function Ld(e,t,r){var n=!1,i=kt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ne(l):(i=ve(t)?It:ae.current,n=t.contextTypes,l=(n=n!=null)?sr(e,i):kt),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pi,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ea(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&pi.enqueueReplaceState(t,t.state,null)}function Pl(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},ms(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ne(l):(l=ve(t)?It:ae.current,i.context=sr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ml(e,t,l,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pi.enqueueReplaceState(i,i.state,null),Yn(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var r="",n=t;do r+=Qu(n),n=n.return;while(n);var i=r}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Ui(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var hf=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,t,r){r=Ze(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ri||(ri=!0,Ql=n),Hl(e,t)},r}function jd(e,t,r){r=Ze(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Hl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Hl(e,t),typeof n!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function Ma(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new hf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Mf.bind(null,e,t,r),t.then(e,e))}function Pa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ha(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ze(-1,1),t.tag=2,ht(r,t,1))),r.lanes|=1),e)}var pf=et.ReactCurrentOwner,ge=!1;function de(e,t,r,n){t.child=e===null?fd(t,null,r,n):or(t,e.child,r,n)}function Na(e,t,r,n,i){r=r.render;var l=t.ref;return nr(t,i),n=bs(e,t,r,n,l,i),r=ws(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(F&&r&&ds(t),t.flags|=1,de(e,t,n,i),t.child)}function Ia(e,t,r,n,i){if(e===null){var l=r.type;return typeof l=="function"&&!As(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Kd(e,t,l,n,i)):(e=Ln(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(r=r.compare,r=r!==null?r:$r,r(s,n)&&e.ref===t.ref)return Xe(e,t,i)}return t.flags|=1,e=mt(l,n),e.ref=t.ref,e.return=t,t.child=e}function Kd(e,t,r,n,i){if(e!==null){var l=e.memoizedProps;if($r(l,n)&&e.ref===t.ref)if(ge=!1,t.pendingProps=n=l,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,Xe(e,t,i)}return Nl(e,t,r,n,i)}function Qd(e,t,r){var n=t.pendingProps,i=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Jt,xe),xe|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Jt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,K(Jt,xe),xe|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,K(Jt,xe),xe|=n;return de(e,t,i,r),t.child}function Rd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Nl(e,t,r,n,i){var l=ve(r)?It:ae.current;return l=sr(t,l),nr(t,i),r=bs(e,t,r,n,l,i),n=ws(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(F&&n&&ds(t),t.flags|=1,de(e,t,r,i),t.child)}function Aa(e,t,r,n,i){if(ve(r)){var l=!0;On(t)}else l=!1;if(nr(t,i),t.stateNode===null)An(e,t),Ld(t,r,n),Pl(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var o=s.context,f=r.contextType;typeof f=="object"&&f!==null?f=Ne(f):(f=ve(r)?It:ae.current,f=sr(t,f));var v=r.getDerivedStateFromProps,g=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==n||o!==f)&&Ea(t,s,n,f),it=!1;var m=t.memoizedState;s.state=m,Yn(t,n,s,i),o=t.memoizedState,a!==n||m!==o||me.current||it?(typeof v=="function"&&(Ml(t,r,v,n),o=t.memoizedState),(a=it||Da(t,r,a,n,m,o,f))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=o),s.props=n,s.state=o,s.context=f,n=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,pd(e,t),a=t.memoizedProps,f=t.type===t.elementType?a:Te(t.type,a),s.props=f,g=t.pendingProps,m=s.context,o=r.contextType,typeof o=="object"&&o!==null?o=Ne(o):(o=ve(r)?It:ae.current,o=sr(t,o));var p=r.getDerivedStateFromProps;(v=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==g||m!==o)&&Ea(t,s,n,o),it=!1,m=t.memoizedState,s.state=m,Yn(t,n,s,i);var k=t.memoizedState;a!==g||m!==k||me.current||it?(typeof p=="function"&&(Ml(t,r,p,n),k=t.memoizedState),(f=it||Da(t,r,f,n,m,k,o)||!1)?(v||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,k,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,k,o)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),s.props=n,s.state=k,s.context=o,n=f):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),n=!1)}return Il(e,t,r,n,l,i)}function Il(e,t,r,n,i,l){Rd(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&va(t,r,!1),Xe(e,t,l);n=t.stateNode,pf.current=t;var a=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=or(t,e.child,null,l),t.child=or(t,null,a,l)):de(e,t,a,l),t.memoizedState=n.state,i&&va(t,r,!0),t.child}function Fd(e){var t=e.stateNode;t.pendingContext?ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ma(e,t.context,!1),vs(e,t.containerInfo)}function Ta(e,t,r,n,i){return ar(),cs(i),t.flags|=256,de(e,t,r,n),t.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gd(e,t,r){var n=t.pendingProps,i=G.current,l=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(G,i&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,l?(n=t.mode,l=t.child,s={mode:"hidden",children:s},!(n&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=vi(s,n,0,null),e=Nt(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Tl(r),t.memoizedState=Al,e):Ds(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gf(e,t,s,n,a,i,r);if(l){l=n.fallback,s=t.mode,i=e.child,a=i.sibling;var o={mode:"hidden",children:n.children};return!(s&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=o,t.deletions=null):(n=mt(i,o),n.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=mt(a,l):(l=Nt(l,s,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,s=e.child.memoizedState,s=s===null?Tl(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~r,t.memoizedState=Al,n}return l=e.child,e=l.sibling,n=mt(l,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ds(e,t){return t=vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yn(e,t,r,n){return n!==null&&cs(n),or(t,e.child,null,r),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,r,n,i,l,s){if(r)return t.flags&256?(t.flags&=-257,n=Ui(Error(w(422))),yn(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,i=t.mode,n=vi({mode:"visible",children:n.children},i,0,null),l=Nt(l,i,s,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,t.mode&1&&or(t,e.child,null,s),t.child.memoizedState=Tl(s),t.memoizedState=Al,l);if(!(t.mode&1))return yn(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var a=n.dgst;return n=a,l=Error(w(419)),n=Ui(l,n,void 0),yn(e,t,s,n)}if(a=(s&e.childLanes)!==0,ge||a){if(n=ee,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Je(e,i),je(n,e,i,-1))}return Is(),n=Ui(Error(w(421))),yn(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Pf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ye=ft(i.nextSibling),be=t,F=!0,Le=null,e!==null&&(Ee[Me++]=Ve,Ee[Me++]=_e,Ee[Me++]=At,Ve=e.id,_e=e.overflow,At=t),t=Ds(t,n.children),t.flags|=4096,t)}function Ba(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),El(e.return,t,r)}function Oi(e,t,r,n,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=i)}function $d(e,t,r){var n=t.pendingProps,i=n.revealOrder,l=n.tail;if(de(e,t,n.children,r),n=G.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ba(e,r,t);else if(e.tag===19)Ba(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(K(G,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Jn(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Oi(t,!1,i,r,l);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Jn(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Oi(t,!0,r,null,l);break;case"together":Oi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function An(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,r=mt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=mt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function mf(e,t,r){switch(t.tag){case 3:Fd(t),ar();break;case 5:gd(t);break;case 1:ve(t.type)&&On(t);break;case 4:vs(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;K(Zn,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(K(G,G.current&1),t.flags|=128,null):r&t.child.childLanes?Gd(e,t,r):(K(G,G.current&1),e=Xe(e,t,r),e!==null?e.sibling:null);K(G,G.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return $d(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(G,G.current),n)break;return null;case 22:case 23:return t.lanes=0,Qd(e,t,r)}return Xe(e,t,r)}var Wd,Bl,Ud,Od;Wd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Bl=function(){};Ud=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Pt(We.current);var l=null;switch(r){case"input":i=rl(e,i),n=rl(e,n),l=[];break;case"select":i=W({},i,{value:void 0}),n=W({},n,{value:void 0}),l=[];break;case"textarea":i=ll(e,i),n=ll(e,n),l=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Wn)}al(r,n);var s;r=null;for(f in i)if(!n.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var a=i[f];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Cr.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in n){var o=n[f];if(a=i!=null?i[f]:void 0,n.hasOwnProperty(f)&&o!==a&&(o!=null||a!=null))if(f==="style")if(a){for(s in a)!a.hasOwnProperty(s)||o&&o.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in o)o.hasOwnProperty(s)&&a[s]!==o[s]&&(r||(r={}),r[s]=o[s])}else r||(l||(l=[]),l.push(f,r)),r=o;else f==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,a=a?a.__html:void 0,o!=null&&a!==o&&(l=l||[]).push(f,o)):f==="children"?typeof o!="string"&&typeof o!="number"||(l=l||[]).push(f,""+o):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(f)?(o!=null&&f==="onScroll"&&Q("scroll",e),l||a===o||(l=[])):(l=l||[]).push(f,o))}r&&(l=l||[]).push("style",r);var f=l;(t.updateQueue=f)&&(t.flags|=4)}};Od=function(e,t,r,n){r!==n&&(t.flags|=4)};function br(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function vf(e,t,r){var n=t.pendingProps;switch(us(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return ve(t.type)&&Un(),le(t),null;case 3:return n=t.stateNode,dr(),R(me),R(ae),xs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(kn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Gl(Le),Le=null))),Bl(e,t),le(t),null;case 5:ks(t);var i=Pt(_r.current);if(r=t.type,e!==null&&t.stateNode!=null)Ud(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(w(166));return le(t),null}if(e=Pt(We.current),kn(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Ge]=t,n[Or]=l,e=(t.mode&1)!==0,r){case"dialog":Q("cancel",n),Q("close",n);break;case"iframe":case"object":case"embed":Q("load",n);break;case"video":case"audio":for(i=0;i<Er.length;i++)Q(Er[i],n);break;case"source":Q("error",n);break;case"img":case"image":case"link":Q("error",n),Q("load",n);break;case"details":Q("toggle",n);break;case"input":$s(n,l),Q("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},Q("invalid",n);break;case"textarea":Us(n,l),Q("invalid",n)}al(r,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?n.textContent!==a&&(l.suppressHydrationWarning!==!0&&vn(n.textContent,a,e),i=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&vn(n.textContent,a,e),i=["children",""+a]):Cr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Q("scroll",n)}switch(r){case"input":dn(n),Ws(n,l,!0);break;case"textarea":dn(n),Os(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=Wn)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yo(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Ge]=t,e[Or]=n,Wd(e,t,!1,!1),t.stateNode=e;e:{switch(s=ol(r,n),r){case"dialog":Q("cancel",e),Q("close",e),i=n;break;case"iframe":case"object":case"embed":Q("load",e),i=n;break;case"video":case"audio":for(i=0;i<Er.length;i++)Q(Er[i],e);i=n;break;case"source":Q("error",e),i=n;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=n;break;case"details":Q("toggle",e),i=n;break;case"input":$s(e,n),i=rl(e,n),Q("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=W({},n,{value:void 0}),Q("invalid",e);break;case"textarea":Us(e,n),i=ll(e,n),Q("invalid",e);break;default:i=n}al(r,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];l==="style"?zo(e,o):l==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&bo(e,o)):l==="children"?typeof o=="string"?(r!=="textarea"||o!=="")&&jr(e,o):typeof o=="number"&&jr(e,""+o):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Cr.hasOwnProperty(l)?o!=null&&l==="onScroll"&&Q("scroll",e):o!=null&&Zl(e,l,o,s))}switch(r){case"input":dn(e),Ws(e,n,!1);break;case"textarea":dn(e),Os(e);break;case"option":n.value!=null&&e.setAttribute("value",""+vt(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?Xt(e,!!n.multiple,l,!1):n.defaultValue!=null&&Xt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wn)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Od(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(w(166));if(r=Pt(_r.current),Pt(We.current),kn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ge]=t,(l=n.nodeValue!==r)&&(e=be,e!==null))switch(e.tag){case 3:vn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vn(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ge]=t,t.stateNode=n}return le(t),null;case 13:if(R(G),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ye!==null&&t.mode&1&&!(t.flags&128))ud(),ar(),t.flags|=98560,l=!1;else if(l=kn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Ge]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),l=!1}else Le!==null&&(Gl(Le),Le=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?Y===0&&(Y=3):Is())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return dr(),Bl(e,t),e===null&&Wr(t.stateNode.containerInfo),le(t),null;case 10:return ps(t.type._context),le(t),null;case 17:return ve(t.type)&&Un(),le(t),null;case 19:if(R(G),l=t.memoizedState,l===null)return le(t),null;if(n=(t.flags&128)!==0,s=l.rendering,s===null)if(n)br(l,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Jn(e),s!==null){for(t.flags|=128,br(l,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return K(G,G.current&1|2),t.child}e=e.sibling}l.tail!==null&&_()>cr&&(t.flags|=128,n=!0,br(l,!1),t.lanes=4194304)}else{if(!n)if(e=Jn(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),br(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!F)return le(t),null}else 2*_()-l.renderingStartTime>cr&&r!==1073741824&&(t.flags|=128,n=!0,br(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(r=l.last,r!==null?r.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=_(),t.sibling=null,r=G.current,K(G,n?r&1|2:r&1),t):(le(t),null);case 22:case 23:return Ns(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?xe&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function kf(e,t){switch(us(t),t.tag){case 1:return ve(t.type)&&Un(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dr(),R(me),R(ae),xs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ks(t),null;case 13:if(R(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(G),null;case 4:return dr(),null;case 10:return ps(t.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var bn=!1,se=!1,xf=typeof WeakSet=="function"?WeakSet:Set,P=null;function Yt(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){O(e,t,n)}else r.current=null}function Ll(e,t,r){try{r()}catch(n){O(e,t,n)}}var La=!1;function yf(e,t){if(kl=Fn,e=Yo(),os(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var s=0,a=-1,o=-1,f=0,v=0,g=e,m=null;t:for(;;){for(var p;g!==r||i!==0&&g.nodeType!==3||(a=s+i),g!==l||n!==0&&g.nodeType!==3||(o=s+n),g.nodeType===3&&(s+=g.nodeValue.length),(p=g.firstChild)!==null;)m=g,g=p;for(;;){if(g===e)break t;if(m===r&&++f===i&&(a=s),m===l&&++v===n&&(o=s),(p=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=p}r=a===-1||o===-1?null:{start:a,end:o}}else r=null}r=r||{start:0,end:0}}else r=null;for(xl={focusedElem:e,selectionRange:r},Fn=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,M=k.memoizedState,c=t.stateNode,u=c.getSnapshotBeforeUpdate(t.elementType===t.type?y:Te(t.type,y),M);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){O(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return k=La,La=!1,k}function Tr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Ll(t,r,l)}i=i.next}while(i!==n)}}function gi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Cl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Vd(e){var t=e.alternate;t!==null&&(e.alternate=null,Vd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[Or],delete t[wl],delete t[tf],delete t[rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _d(e){return e.tag===5||e.tag===3||e.tag===4}function Ca(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Wn));else if(n!==4&&(e=e.child,e!==null))for(jl(e,t,r),e=e.sibling;e!==null;)jl(e,t,r),e=e.sibling}function Kl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Kl(e,t,r),e=e.sibling;e!==null;)Kl(e,t,r),e=e.sibling}var te=null,Be=!1;function rt(e,t,r){for(r=r.child;r!==null;)Zd(e,t,r),r=r.sibling}function Zd(e,t,r){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ai,r)}catch{}switch(r.tag){case 5:se||Yt(r,t);case 6:var n=te,i=Be;te=null,rt(e,t,r),te=n,Be=i,te!==null&&(Be?(e=te,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):te.removeChild(r.stateNode));break;case 18:te!==null&&(Be?(e=te,r=r.stateNode,e.nodeType===8?Qi(e.parentNode,r):e.nodeType===1&&Qi(e,r),Fr(e)):Qi(te,r.stateNode));break;case 4:n=te,i=Be,te=r.stateNode.containerInfo,Be=!0,rt(e,t,r),te=n,Be=i;break;case 0:case 11:case 14:case 15:if(!se&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Ll(r,t,s),i=i.next}while(i!==n)}rt(e,t,r);break;case 1:if(!se&&(Yt(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){O(r,t,a)}rt(e,t,r);break;case 21:rt(e,t,r);break;case 22:r.mode&1?(se=(n=se)||r.memoizedState!==null,rt(e,t,r),se=n):rt(e,t,r);break;default:rt(e,t,r)}}function ja(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new xf),t.forEach(function(n){var i=Hf.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ae(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var l=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Be=!1;break e;case 3:te=a.stateNode.containerInfo,Be=!0;break e;case 4:te=a.stateNode.containerInfo,Be=!0;break e}a=a.return}if(te===null)throw Error(w(160));Zd(l,s,i),te=null,Be=!1;var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(f){O(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qd(t,e),t=t.sibling}function qd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Re(e),n&4){try{Tr(3,e,e.return),gi(3,e)}catch(y){O(e,e.return,y)}try{Tr(5,e,e.return)}catch(y){O(e,e.return,y)}}break;case 1:Ae(t,e),Re(e),n&512&&r!==null&&Yt(r,r.return);break;case 5:if(Ae(t,e),Re(e),n&512&&r!==null&&Yt(r,r.return),e.flags&32){var i=e.stateNode;try{jr(i,"")}catch(y){O(e,e.return,y)}}if(n&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=r!==null?r.memoizedProps:l,a=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&ko(i,l),ol(a,s);var f=ol(a,l);for(s=0;s<o.length;s+=2){var v=o[s],g=o[s+1];v==="style"?zo(i,g):v==="dangerouslySetInnerHTML"?bo(i,g):v==="children"?jr(i,g):Zl(i,v,g,f)}switch(a){case"input":nl(i,l);break;case"textarea":xo(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var p=l.value;p!=null?Xt(i,!!l.multiple,p,!1):m!==!!l.multiple&&(l.defaultValue!=null?Xt(i,!!l.multiple,l.defaultValue,!0):Xt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Or]=l}catch(y){O(e,e.return,y)}}break;case 6:if(Ae(t,e),Re(e),n&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){O(e,e.return,y)}}break;case 3:if(Ae(t,e),Re(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(y){O(e,e.return,y)}break;case 4:Ae(t,e),Re(e);break;case 13:Ae(t,e),Re(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Ps=_())),n&4&&ja(e);break;case 22:if(v=r!==null&&r.memoizedState!==null,e.mode&1?(se=(f=se)||v,Ae(t,e),se=f):Ae(t,e),Re(e),n&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(P=e,v=e.child;v!==null;){for(g=P=v;P!==null;){switch(m=P,p=m.child,m.tag){case 0:case 11:case 14:case 15:Tr(4,m,m.return);break;case 1:Yt(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){n=m,r=m.return;try{t=n,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(y){O(n,r,y)}}break;case 5:Yt(m,m.return);break;case 22:if(m.memoizedState!==null){Qa(g);continue}}p!==null?(p.return=m,P=p):Qa(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{i=g.stateNode,f?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=g.stateNode,o=g.memoizedProps.style,s=o!=null&&o.hasOwnProperty("display")?o.display:null,a.style.display=wo("display",s))}catch(y){O(e,e.return,y)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=f?"":g.memoizedProps}catch(y){O(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ae(t,e),Re(e),n&4&&ja(e);break;case 21:break;default:Ae(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(_d(r)){var n=r;break e}r=r.return}throw Error(w(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(jr(i,""),n.flags&=-33);var l=Ca(e);Kl(e,l,i);break;case 3:case 4:var s=n.stateNode.containerInfo,a=Ca(e);jl(e,a,s);break;default:throw Error(w(161))}}catch(o){O(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bf(e,t,r){P=e,Yd(e)}function Yd(e,t,r){for(var n=(e.mode&1)!==0;P!==null;){var i=P,l=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||bn;if(!s){var a=i.alternate,o=a!==null&&a.memoizedState!==null||se;a=bn;var f=se;if(bn=s,(se=o)&&!f)for(P=i;P!==null;)s=P,o=s.child,s.tag===22&&s.memoizedState!==null?Ra(i):o!==null?(o.return=s,P=o):Ra(i);for(;l!==null;)P=l,Yd(l),l=l.sibling;P=i,bn=a,se=f}Ka(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,P=l):Ka(e)}}function Ka(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||gi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!se)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Te(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&wa(t,l,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}wa(t,s,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&r.focus();break;case"img":o.src&&(r.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Fr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}se||t.flags&512&&Cl(t)}catch(m){O(t,t.return,m)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function Qa(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function Ra(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{gi(4,t)}catch(o){O(t,r,o)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(o){O(t,i,o)}}var l=t.return;try{Cl(t)}catch(o){O(t,l,o)}break;case 5:var s=t.return;try{Cl(t)}catch(o){O(t,s,o)}}}catch(o){O(t,t.return,o)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var wf=Math.ceil,ti=et.ReactCurrentDispatcher,Es=et.ReactCurrentOwner,He=et.ReactCurrentBatchConfig,B=0,ee=null,Z=null,re=0,xe=0,Jt=yt(0),Y=0,Jr=null,Bt=0,mi=0,Ms=0,Br=null,pe=null,Ps=0,cr=1/0,Ue=null,ri=!1,Ql=null,pt=null,wn=!1,ot=null,ni=0,Lr=0,Rl=null,Tn=-1,Bn=0;function ue(){return B&6?_():Tn!==-1?Tn:Tn=_()}function gt(e){return e.mode&1?B&2&&re!==0?re&-re:lf.transition!==null?(Bn===0&&(Bn=Lo()),Bn):(e=C,e!==0||(e=window.event,e=e===void 0?16:Go(e.type)),e):1}function je(e,t,r,n){if(50<Lr)throw Lr=0,Rl=null,Error(w(185));en(e,r,n),(!(B&2)||e!==ee)&&(e===ee&&(!(B&2)&&(mi|=r),Y===4&&st(e,re)),ke(e,n),r===1&&B===0&&!(t.mode&1)&&(cr=_()+500,fi&&bt()))}function ke(e,t){var r=e.callbackNode;ic(e,t);var n=Rn(e,e===ee?re:0);if(n===0)r!==null&&Zs(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Zs(r),t===1)e.tag===0?nf(Fa.bind(null,e)):ad(Fa.bind(null,e)),Xc(function(){!(B&6)&&bt()}),r=null;else{switch(Co(n)){case 1:r=es;break;case 4:r=To;break;case 16:r=Qn;break;case 536870912:r=Bo;break;default:r=Qn}r=lu(r,Jd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Jd(e,t){if(Tn=-1,Bn=0,B&6)throw Error(w(327));var r=e.callbackNode;if(ir()&&e.callbackNode!==r)return null;var n=Rn(e,e===ee?re:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ii(e,n);else{t=n;var i=B;B|=2;var l=eu();(ee!==e||re!==t)&&(Ue=null,cr=_()+500,Ht(e,t));do try{Df();break}catch(a){Xd(e,a)}while(!0);hs(),ti.current=l,B=i,Z!==null?t=0:(ee=null,re=0,t=Y)}if(t!==0){if(t===2&&(i=hl(e),i!==0&&(n=i,t=Fl(e,i))),t===1)throw r=Jr,Ht(e,0),st(e,n),ke(e,_()),r;if(t===6)st(e,n);else{if(i=e.current.alternate,!(n&30)&&!zf(i)&&(t=ii(e,n),t===2&&(l=hl(e),l!==0&&(n=l,t=Fl(e,l))),t===1))throw r=Jr,Ht(e,0),st(e,n),ke(e,_()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(w(345));case 2:Dt(e,pe,Ue);break;case 3:if(st(e,n),(n&130023424)===n&&(t=Ps+500-_(),10<t)){if(Rn(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bl(Dt.bind(null,e,pe,Ue),t);break}Dt(e,pe,Ue);break;case 4:if(st(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-Ce(n);l=1<<s,s=t[s],s>i&&(i=s),n&=~l}if(n=i,n=_()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*wf(n/1960))-n,10<n){e.timeoutHandle=bl(Dt.bind(null,e,pe,Ue),n);break}Dt(e,pe,Ue);break;case 5:Dt(e,pe,Ue);break;default:throw Error(w(329))}}}return ke(e,_()),e.callbackNode===r?Jd.bind(null,e):null}function Fl(e,t){var r=Br;return e.current.memoizedState.isDehydrated&&(Ht(e,t).flags|=256),e=ii(e,t),e!==2&&(t=pe,pe=r,t!==null&&Gl(t)),e}function Gl(e){pe===null?pe=e:pe.push.apply(pe,e)}function zf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],l=i.getSnapshot;i=i.value;try{if(!Ke(l(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~Ms,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ce(t),n=1<<r;e[r]=-1,t&=~n}}function Fa(e){if(B&6)throw Error(w(327));ir();var t=Rn(e,0);if(!(t&1))return ke(e,_()),null;var r=ii(e,t);if(e.tag!==0&&r===2){var n=hl(e);n!==0&&(t=n,r=Fl(e,n))}if(r===1)throw r=Jr,Ht(e,0),st(e,t),ke(e,_()),r;if(r===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,pe,Ue),ke(e,_()),null}function Hs(e,t){var r=B;B|=1;try{return e(t)}finally{B=r,B===0&&(cr=_()+500,fi&&bt())}}function Lt(e){ot!==null&&ot.tag===0&&!(B&6)&&ir();var t=B;B|=1;var r=He.transition,n=C;try{if(He.transition=null,C=1,e)return e()}finally{C=n,He.transition=r,B=t,!(B&6)&&bt()}}function Ns(){xe=Jt.current,R(Jt)}function Ht(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Jc(r)),Z!==null)for(r=Z.return;r!==null;){var n=r;switch(us(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Un();break;case 3:dr(),R(me),R(ae),xs();break;case 5:ks(n);break;case 4:dr();break;case 13:R(G);break;case 19:R(G);break;case 10:ps(n.type._context);break;case 22:case 23:Ns()}r=r.return}if(ee=e,Z=e=mt(e.current,null),re=xe=t,Y=0,Jr=null,Ms=mi=Bt=0,pe=Br=null,Mt!==null){for(t=0;t<Mt.length;t++)if(r=Mt[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,l=r.pending;if(l!==null){var s=l.next;l.next=i,n.next=s}r.pending=n}Mt=null}return e}function Xd(e,t){do{var r=Z;try{if(hs(),Nn.current=ei,Xn){for(var n=$.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Xn=!1}if(Tt=0,X=q=$=null,Ar=!1,Zr=0,Es.current=null,r===null||r.return===null){Y=1,Jr=t,Z=null;break}e:{var l=e,s=r.return,a=r,o=t;if(t=re,a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var f=o,v=a,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var p=Pa(s);if(p!==null){p.flags&=-257,Ha(p,s,a,l,t),p.mode&1&&Ma(l,f,t),t=p,o=f;var k=t.updateQueue;if(k===null){var y=new Set;y.add(o),t.updateQueue=y}else k.add(o);break e}else{if(!(t&1)){Ma(l,f,t),Is();break e}o=Error(w(426))}}else if(F&&a.mode&1){var M=Pa(s);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Ha(M,s,a,l,t),cs(ur(o,a));break e}}l=o=ur(o,a),Y!==4&&(Y=2),Br===null?Br=[l]:Br.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var c=Cd(l,o,t);ba(l,c);break e;case 1:a=o;var u=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(pt===null||!pt.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=jd(l,a,t);ba(l,x);break e}}l=l.return}while(l!==null)}ru(r)}catch(z){t=z,Z===r&&r!==null&&(Z=r=r.return);continue}break}while(!0)}function eu(){var e=ti.current;return ti.current=ei,e===null?ei:e}function Is(){(Y===0||Y===3||Y===2)&&(Y=4),ee===null||!(Bt&268435455)&&!(mi&268435455)||st(ee,re)}function ii(e,t){var r=B;B|=2;var n=eu();(ee!==e||re!==t)&&(Ue=null,Ht(e,t));do try{Sf();break}catch(i){Xd(e,i)}while(!0);if(hs(),B=r,ti.current=n,Z!==null)throw Error(w(261));return ee=null,re=0,Y}function Sf(){for(;Z!==null;)tu(Z)}function Df(){for(;Z!==null&&!Zu();)tu(Z)}function tu(e){var t=iu(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?ru(e):Z=t,Es.current=null}function ru(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=kf(r,t),r!==null){r.flags&=32767,Z=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Z=null;return}}else if(r=vf(r,t,xe),r!==null){Z=r;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Y===0&&(Y=5)}function Dt(e,t,r){var n=C,i=He.transition;try{He.transition=null,C=1,Ef(e,t,r,n)}finally{He.transition=i,C=n}return null}function Ef(e,t,r,n){do ir();while(ot!==null);if(B&6)throw Error(w(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(lc(e,l),e===ee&&(Z=ee=null,re=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||wn||(wn=!0,lu(Qn,function(){return ir(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=He.transition,He.transition=null;var s=C;C=1;var a=B;B|=4,Es.current=null,yf(e,r),qd(r,e),Uc(xl),Fn=!!kl,xl=kl=null,e.current=r,bf(r),qu(),B=a,C=s,He.transition=l}else e.current=r;if(wn&&(wn=!1,ot=e,ni=i),l=e.pendingLanes,l===0&&(pt=null),Xu(r.stateNode),ke(e,_()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(ri)throw ri=!1,e=Ql,Ql=null,e;return ni&1&&e.tag!==0&&ir(),l=e.pendingLanes,l&1?e===Rl?Lr++:(Lr=0,Rl=e):Lr=0,bt(),null}function ir(){if(ot!==null){var e=Co(ni),t=He.transition,r=C;try{if(He.transition=null,C=16>e?16:e,ot===null)var n=!1;else{if(e=ot,ot=null,ni=0,B&6)throw Error(w(331));var i=B;for(B|=4,P=e.current;P!==null;){var l=P,s=l.child;if(P.flags&16){var a=l.deletions;if(a!==null){for(var o=0;o<a.length;o++){var f=a[o];for(P=f;P!==null;){var v=P;switch(v.tag){case 0:case 11:case 15:Tr(8,v,l)}var g=v.child;if(g!==null)g.return=v,P=g;else for(;P!==null;){v=P;var m=v.sibling,p=v.return;if(Vd(v),v===f){P=null;break}if(m!==null){m.return=p,P=m;break}P=p}}}var k=l.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var M=y.sibling;y.sibling=null,y=M}while(y!==null)}}P=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,P=s;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Tr(9,l,l.return)}var c=l.sibling;if(c!==null){c.return=l.return,P=c;break e}P=l.return}}var u=e.current;for(P=u;P!==null;){s=P;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,P=h;else e:for(s=u;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gi(9,a)}}catch(z){O(a,a.return,z)}if(a===s){P=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,P=x;break e}P=a.return}}if(B=i,bt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ai,e)}catch{}n=!0}return n}finally{C=r,He.transition=t}}return!1}function Ga(e,t,r){t=ur(r,t),t=Cd(e,t,1),e=ht(e,t,1),t=ue(),e!==null&&(en(e,1,t),ke(e,t))}function O(e,t,r){if(e.tag===3)Ga(e,e,r);else for(;t!==null;){if(t.tag===3){Ga(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(pt===null||!pt.has(n))){e=ur(r,e),e=jd(t,e,1),t=ht(t,e,1),e=ue(),t!==null&&(en(t,1,e),ke(t,e));break}}t=t.return}}function Mf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&r,ee===e&&(re&r)===r&&(Y===4||Y===3&&(re&130023424)===re&&500>_()-Ps?Ht(e,0):Ms|=r),ke(e,t)}function nu(e,t){t===0&&(e.mode&1?(t=fn,fn<<=1,!(fn&130023424)&&(fn=4194304)):t=1);var r=ue();e=Je(e,t),e!==null&&(en(e,t,r),ke(e,r))}function Pf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),nu(e,r)}function Hf(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(w(314))}n!==null&&n.delete(t),nu(e,r)}var iu;iu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)ge=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ge=!1,mf(e,t,r);ge=!!(e.flags&131072)}else ge=!1,F&&t.flags&1048576&&od(t,_n,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;An(e,t),e=t.pendingProps;var i=sr(t,ae.current);nr(t,r),i=bs(null,t,n,e,i,r);var l=ws();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(n)?(l=!0,On(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ms(t),i.updater=pi,t.stateNode=i,i._reactInternals=t,Pl(t,n,e,r),t=Il(null,t,n,!0,l,r)):(t.tag=0,F&&l&&ds(t),de(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(An(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=If(n),e=Te(n,e),i){case 0:t=Nl(null,t,n,e,r);break e;case 1:t=Aa(null,t,n,e,r);break e;case 11:t=Na(null,t,n,e,r);break e;case 14:t=Ia(null,t,n,Te(n.type,e),r);break e}throw Error(w(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Te(n,i),Nl(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Te(n,i),Aa(e,t,n,i,r);case 3:e:{if(Fd(t),e===null)throw Error(w(387));n=t.pendingProps,l=t.memoizedState,i=l.element,pd(e,t),Yn(t,n,null,r);var s=t.memoizedState;if(n=s.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=ur(Error(w(423)),t),t=Ta(e,t,n,r,i);break e}else if(n!==i){i=ur(Error(w(424)),t),t=Ta(e,t,n,r,i);break e}else for(ye=ft(t.stateNode.containerInfo.firstChild),be=t,F=!0,Le=null,r=fd(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ar(),n===i){t=Xe(e,t,r);break e}de(e,t,n,r)}t=t.child}return t;case 5:return gd(t),e===null&&Dl(t),n=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,yl(n,i)?s=null:l!==null&&yl(n,l)&&(t.flags|=32),Rd(e,t),de(e,t,s,r),t.child;case 6:return e===null&&Dl(t),null;case 13:return Gd(e,t,r);case 4:return vs(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=or(t,null,n,r):de(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Te(n,i),Na(e,t,n,i,r);case 7:return de(e,t,t.pendingProps,r),t.child;case 8:return de(e,t,t.pendingProps.children,r),t.child;case 12:return de(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,l=t.memoizedProps,s=i.value,K(Zn,n._currentValue),n._currentValue=s,l!==null)if(Ke(l.value,s)){if(l.children===i.children&&!me.current){t=Xe(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var o=a.firstContext;o!==null;){if(o.context===n){if(l.tag===1){o=Ze(-1,r&-r),o.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?o.next=o:(o.next=v.next,v.next=o),f.pending=o}}l.lanes|=r,o=l.alternate,o!==null&&(o.lanes|=r),El(l.return,r,t),a.lanes|=r;break}o=o.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(w(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),El(s,r,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}de(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,nr(t,r),i=Ne(i),n=n(i),t.flags|=1,de(e,t,n,r),t.child;case 14:return n=t.type,i=Te(n,t.pendingProps),i=Te(n.type,i),Ia(e,t,n,i,r);case 15:return Kd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Te(n,i),An(e,t),t.tag=1,ve(n)?(e=!0,On(t)):e=!1,nr(t,r),Ld(t,n,i),Pl(t,n,i,r),Il(null,t,n,!0,e,r);case 19:return $d(e,t,r);case 22:return Qd(e,t,r)}throw Error(w(156,t.tag))};function lu(e,t){return Ao(e,t)}function Nf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,r,n){return new Nf(e,t,r,n)}function As(e){return e=e.prototype,!(!e||!e.isReactComponent)}function If(e){if(typeof e=="function")return As(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yl)return 11;if(e===Jl)return 14}return 2}function mt(e,t){var r=e.alternate;return r===null?(r=Pe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ln(e,t,r,n,i,l){var s=2;if(n=e,typeof e=="function")As(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Gt:return Nt(r.children,i,l,t);case ql:s=8,i|=8;break;case Ji:return e=Pe(12,r,t,i|2),e.elementType=Ji,e.lanes=l,e;case Xi:return e=Pe(13,r,t,i),e.elementType=Xi,e.lanes=l,e;case el:return e=Pe(19,r,t,i),e.elementType=el,e.lanes=l,e;case go:return vi(r,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ho:s=10;break e;case po:s=9;break e;case Yl:s=11;break e;case Jl:s=14;break e;case nt:s=16,n=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Pe(s,r,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function Nt(e,t,r,n){return e=Pe(7,e,n,t),e.lanes=r,e}function vi(e,t,r,n){return e=Pe(22,e,n,t),e.elementType=go,e.lanes=r,e.stateNode={isHidden:!1},e}function Vi(e,t,r){return e=Pe(6,e,null,t),e.lanes=r,e}function _i(e,t,r){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Af(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ts(e,t,r,n,i,l,s,a,o){return e=new Af(e,t,r,a,o),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Pe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ms(l),e}function Tf(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ft,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function su(e){if(!e)return kt;e=e._reactInternals;e:{if(jt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var r=e.type;if(ve(r))return sd(e,r,t)}return t}function au(e,t,r,n,i,l,s,a,o){return e=Ts(r,n,!0,e,i,l,s,a,o),e.context=su(null),r=e.current,n=ue(),i=gt(r),l=Ze(n,i),l.callback=t??null,ht(r,l,i),e.current.lanes=i,en(e,i,n),ke(e,n),e}function ki(e,t,r,n){var i=t.current,l=ue(),s=gt(i);return r=su(r),t.context===null?t.context=r:t.pendingContext=r,t=Ze(l,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=ht(i,t,s),e!==null&&(je(e,i,s,l),Hn(e,i,s)),s}function li(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $a(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Bs(e,t){$a(e,t),(e=e.alternate)&&$a(e,t)}function Bf(){return null}var ou=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ls(e){this._internalRoot=e}xi.prototype.render=Ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));ki(e,t,null,null)};xi.prototype.unmount=Ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){ki(null,e,null,null)}),t[Ye]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qo();e={blockedOn:null,target:e,priority:t};for(var r=0;r<lt.length&&t!==0&&t<lt[r].priority;r++);lt.splice(r,0,e),r===0&&Fo(e)}};function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wa(){}function Lf(e,t,r,n,i){if(i){if(typeof n=="function"){var l=n;n=function(){var f=li(s);l.call(f)}}var s=au(t,n,e,0,null,!1,!1,"",Wa);return e._reactRootContainer=s,e[Ye]=s.current,Wr(e.nodeType===8?e.parentNode:e),Lt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var a=n;n=function(){var f=li(o);a.call(f)}}var o=Ts(e,0,!1,null,null,!1,!1,"",Wa);return e._reactRootContainer=o,e[Ye]=o.current,Wr(e.nodeType===8?e.parentNode:e),Lt(function(){ki(t,o,r,n)}),o}function bi(e,t,r,n,i){var l=r._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var a=i;i=function(){var o=li(s);a.call(o)}}ki(t,s,e,i)}else s=Lf(r,t,e,i,n);return li(s)}jo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Dr(t.pendingLanes);r!==0&&(ts(t,r|1),ke(t,_()),!(B&6)&&(cr=_()+500,bt()))}break;case 13:Lt(function(){var n=Je(e,1);if(n!==null){var i=ue();je(n,e,1,i)}}),Bs(e,1)}};rs=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var r=ue();je(t,e,134217728,r)}Bs(e,134217728)}};Ko=function(e){if(e.tag===13){var t=gt(e),r=Je(e,t);if(r!==null){var n=ue();je(r,e,t,n)}Bs(e,t)}};Qo=function(){return C};Ro=function(e,t){var r=C;try{return C=e,t()}finally{C=r}};ul=function(e,t,r){switch(t){case"input":if(nl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=ci(n);if(!i)throw Error(w(90));vo(n),nl(n,i)}}}break;case"textarea":xo(e,r);break;case"select":t=r.value,t!=null&&Xt(e,!!r.multiple,t,!1)}};Eo=Hs;Mo=Lt;var Cf={usingClientEntryPoint:!1,Events:[rn,Ot,ci,So,Do,Hs]},wr={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jf={bundleType:wr.bundleType,version:wr.version,rendererPackageName:wr.rendererPackageName,rendererConfig:wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=No(e),e===null?null:e.stateNode},findFiberByHostInstance:wr.findFiberByHostInstance||Bf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zn.isDisabled&&zn.supportsFiber)try{ai=zn.inject(jf),$e=zn}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cf;ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cs(t))throw Error(w(200));return Tf(e,t,null,r)};ze.createRoot=function(e,t){if(!Cs(e))throw Error(w(299));var r=!1,n="",i=ou;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ts(e,1,!1,null,null,r,!1,n,i),e[Ye]=t.current,Wr(e.nodeType===8?e.parentNode:e),new Ls(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=No(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Lt(e)};ze.hydrate=function(e,t,r){if(!yi(t))throw Error(w(200));return bi(null,e,t,!0,r)};ze.hydrateRoot=function(e,t,r){if(!Cs(e))throw Error(w(405));var n=r!=null&&r.hydratedSources||null,i=!1,l="",s=ou;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=au(t,null,e,1,r??null,i,!1,l,s),e[Ye]=t.current,Wr(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new xi(t)};ze.render=function(e,t,r){if(!yi(t))throw Error(w(200));return bi(null,e,t,!1,r)};ze.unmountComponentAtNode=function(e){if(!yi(e))throw Error(w(40));return e._reactRootContainer?(Lt(function(){bi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ze.unstable_batchedUpdates=Hs;ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!yi(r))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return bi(e,t,r,!1,n)};ze.version="18.3.1-next-f1338f8080-20240426";function du(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(du)}catch(e){console.error(e)}}du(),oo.exports=ze;var Kf=oo.exports,Ua=Kf;qi.createRoot=Ua.createRoot,qi.hydrateRoot=Ua.hydrateRoot;const uu="pflegepro_progress",Oa="pflegepro_theme",Va="pflegepro_name";function _a(){try{return JSON.parse(localStorage.getItem(uu))||{quizDone:0,scores:[],streak:0,lastDate:null,mastered:[],levels:{},lessonsRead:[]}}catch{return{quizDone:0,scores:[],streak:0,lastDate:null,mastered:[],levels:{},lessonsRead:[]}}}function Qf(){const[e,t]=A.useState(_a),[r,n]=A.useState(()=>localStorage.getItem(Oa)||"dark"),[i,l]=A.useState(()=>localStorage.getItem(Va)||""),s=A.useCallback(g=>{g.lessonsRead||(g.lessonsRead=[]),t(g),localStorage.setItem(uu,JSON.stringify(g))},[]),a=A.useCallback(()=>{const g=r==="dark"?"light":"dark";n(g),document.documentElement.setAttribute("data-theme",g),localStorage.setItem(Oa,g)},[r]),o=A.useCallback(g=>{l(g),localStorage.setItem(Va,g)},[]),f=A.useCallback((g,m)=>{const p=`${g}::${m}`,k=_a();k.lessonsRead||(k.lessonsRead=[]),k.lessonsRead.includes(p)||(k.lessonsRead=[...k.lessonsRead,p],s(k))},[s]),v=A.useCallback(()=>{const g=new Date().toDateString(),m={...e};if(m.lastDate!==g){const p=new Date(Date.now()-864e5).toDateString();m.streak=m.lastDate===p?m.streak+1:1,m.lastDate=g,s(m)}return m.streak},[e,s]);return{progress:e,saveProgress:s,theme:r,toggleTheme:a,userName:i,saveName:o,checkStreak:v,markLessonRead:f}}const Zi=[{id:"haut",name:"Haut — Anatomie & Physiologie",icon:"🩹",col:"green",lessons:["Haut und ihre Aufgaben","Aufbau der Haut (Schichten)","Epithelgewebe – Exkurs","Die Epidermis & ihre Schichten","Aufbau der Dermis (Lederhaut)","Hautanhangsorgane & Drüsen","Fitzpatrick-Hauttypen","Veränderungen der Haut"]},{id:"dekubitus",name:"Dekubitus — Prophylaxe & Therapie",icon:"🩺",col:"rose",lessons:["Definition & Expertenstandard","Risikofaktoren & Entstehung","EPUAP Klassifikation Kat. I–IV","Prädilektionsstellen & Einschätzung","Prophylaxe und Donts"]},{id:"blutzuck",name:"Blutzucker / Diabetes Mellitus",icon:"🩸",col:"teal",lessons:["Grundlagen Blutzucker & Pankreas","Diabetes Typ 1 – Pathophysiologie","Diabetes Typ 2 – Pathophysiologie","Symptome Typ 1 & Typ 2 im Vergleich","Therapie - 3-Säulen & Insulinarten","Diagnostik – BZTP, HbA1c, oGTT","Folgeerkrankungen – Makro/Mikroangiopathie, Polyneuropathie","Diabetisches Fußsyndrom","Komaformen – Ketoazidose & Hyperosmolar"]}],Za={herz:[{q:"Wie viele Kammern hat das menschliche Herz?",opts:["2 Kammern","3 Kammern","4 Kammern","6 Kammern"],correct:2,explanation:"Das Herz hat 4 Kammern: linker/rechter Vorhof und linke/rechte Hauptkammer.",lesson:"Anatomie und Physiologie",theme:"herz"},{q:"Was ist der Normalwert des Blutdrucks bei Erwachsenen?",opts:["80/60 mmHg","120/80 mmHg","140/100 mmHg","160/90 mmHg"],correct:1,explanation:"Optimaler Blutdruck: 120/80 mmHg. Über 140/90 mmHg = Hypertonie.",lesson:"Anatomie und Physiologie",theme:"herz"},{q:"Welcher Knoten steuert den Herzrhythmus?",opts:["AV-Knoten","Sinusknoten","Purkinje-Fasern","His-Bündel"],correct:1,explanation:"Der Sinusknoten im rechten Vorhof ist der natürliche Schrittmacher (60–80/min).",lesson:"Anatomie und Physiologie",theme:"herz"},{q:"Was ist eine Tachykardie?",opts:["Herzfrequenz unter 60/min","Herzfrequenz über 100/min","Unregelmäßiger Herzrhythmus","Normaler Herzrhythmus"],correct:1,explanation:"Tachykardie = Herzfrequenz über 100/min. Bradykardie = unter 60/min.",lesson:"Anatomie und Physiologie",theme:"herz"}],haut:[{q:"Wie lautet der lateinische Begriff für die Haut und was macht sie besonders?",opts:["Dermis – dünnste Schicht","Cutis – größtes und nervenreichstes Organ des Menschen","Epidermis – einziges gefäßloses Organ","Subcutis – schwerste Schicht"],correct:1,explanation:"Lat. Cutis = die Haut. Sie ist das größte und nervenreichste Organ des Menschen, wiegt bis zu 20 kg (mit Subcutis) und ist 1,5–2 qm groß.",lesson:"Haut und ihre Aufgaben",theme:"haut"},{q:"Wie groß ist die Körperoberfläche bei 1,80 m / 90 kg?",opts:["ca. 1,2 m²","ca. 1,55 m²","ca. 2,10 m²","ca. 3,0 m²"],correct:2,explanation:"Bei 1,80 m / 90 kg beträgt die Körperoberfläche ca. 2,10 m². Bei 1,60 m / 55 kg sind es ca. 1,55 m².",lesson:"Haut und ihre Aufgaben",theme:"haut"},{q:"Was sind passive Funktionen der Haut?",opts:["Schweißausscheidung und Resorption","Schutz vor Kälte, Hitze, Druck, Strahlung und chemischen Substanzen","Aktive Abwehr von Mikroorganismen","Vitaminproduktion durch Sonnenlicht"],correct:1,explanation:"Passive Funktionen: Schutz vor Kälte/Hitze/Strahlung, Schutz vor Druck/Stoß/Reibung, Schutz vor chemischen Substanzen.",lesson:"Haut und ihre Aufgaben",theme:"haut"},{q:"Was versteht man unter dem Säureschutzmantel der Haut?",opts:["Eine Schicht aus Hornzellen","Den Hydro-Lipid-Film aus Talg- und Schweißdrüsen","Die Basalmembran der Epidermis","Das Melanin in der Basalzellschicht"],correct:1,explanation:'Säureschutzmantel = Hydro-Lipid-Film: "Lipid" aus Talgdrüsen + "Hydro" aus Schweißdrüsen. Schützt vor dem Eindringen von Keimen.',lesson:"Haut und ihre Aufgaben",theme:"haut"},{q:"Wodurch kann der Säureschutzmantel beschädigt werden?",opts:["Durch zu wenig Sonnenlicht","Durch häufiges Waschen und feuchte Umgebung","Durch zu warme Kleidung","Durch Bewegungsmangel"],correct:1,explanation:"Häufiges Händewaschen und Tragen von Einmalhandschuhen beschädigen den Säureschutzmantel. Rückfettendes Händedesinfektionsmittel und Hautpflege helfen.",lesson:"Haut und ihre Aufgaben",theme:"haut"},{q:"Was ist residente Hautflora?",opts:["Pathogene Mikroorganismen","Mikroorganismen, die vorübergehend auf der Haut sind","Physiologische Hautflora — immer vorhanden, nicht pathogen","Künstlich aufgetragene Schutzbakterien"],correct:2,explanation:"Residente Hautflora = physiologische Flora. Immer vorhanden, nicht pathogen. Hängt von Körperregion, Alter und physiologischem Status ab.",lesson:"Haut und ihre Aufgaben",theme:"haut"},{q:"⚠️ FALLE: Unterschied residente vs. transiente Hautflora?",opts:["Residente ist pathogen, transiente nicht","Residente dauerhaft + nicht pathogen — transiente vorübergehend + nicht pathogen","Beide sind pathogen","Residente kommt nur im Krankenhaus vor"],correct:1,explanation:"FALLE! Beide NICHT pathogen! Residente = dauerhaft. Transiente = vorübergehend. Die Infektionsflora ist pathogen — von beiden zu unterscheiden.",lesson:"Haut und ihre Aufgaben",theme:"haut"},{q:"Welche zwei Hauttypen unterscheidet man?",opts:["Normale und trockene Haut","Leistenhaut (Handflächen/Fußsohlen) und Felderhaut (restlicher Körper)","Oberhaut und Unterhaut","Pigmentierte und helle Haut"],correct:1,explanation:"1. Leistenhaut: Fußsohlen/Handflächen, bis 9mm dick. 2. Felderhaut: restlicher Körper, größter Teil der Haut, Gesäß 3mm, Gesicht <1mm.",lesson:"Haut und ihre Aufgaben",theme:"haut"},{q:"Aus welchen 3 Schichten besteht die Haut (außen nach innen)?",opts:["Hornschicht, Keimschicht, Fettschicht","Epidermis (Oberhaut), Dermis (Lederhaut), Subcutis (Unterhaut)","Basalschicht, Stachelschicht, Hornschicht","Cutis, Subcutis, Muskel"],correct:1,explanation:"3 Schichten: Epidermis + Dermis = Cutis. Darunter Subcutis. Dann Muskel.",lesson:"Aufbau der Haut (Schichten)",theme:"haut"},{q:'Was bezeichnet man als "Cutis"?',opts:["Nur die Epidermis","Epidermis + Dermis zusammen","Epidermis + Dermis + Subcutis","Nur die Subcutis"],correct:1,explanation:"Cutis = Epidermis (Oberhaut) + Dermis (Lederhaut). Die Subcutis gehört NICHT zur Cutis.",lesson:"Aufbau der Haut (Schichten)",theme:"haut"},{q:"Welches Epithel bedeckt die äußere Haut?",opts:["Einschichtiges Plattenepithel","Zylinderepithel","Mehrschichtiges verhorntes Plattenepithel","Flimmerepithel"],correct:2,explanation:"Äußere Haut = mehrschichtiges verhorntes Plattenepithel. Mundschleimhaut = unverhorntes Plattenepithel. Lungenbläschen = einschichtiges Plattenepithel.",lesson:"Epithelgewebe – Exkurs",theme:"haut"},{q:"Welches Epithel findet man in den Atemwegen?",opts:["Mehrschichtiges verhorntes Plattenepithel","Übergangsepithel","Flimmerepithel (mit Zilien)","Einschichtiges Plattenepithel"],correct:2,explanation:"Flimmerepithel mit Zilien in den Atemwegen — transportiert Schleim und Fremdkörper. Harnblase = Übergangsepithel. Darm = Zylinderepithel.",lesson:"Epithelgewebe – Exkurs",theme:"haut"},{q:"⚠️ FALLE: Welches Epithel findet man in der Harnblase?",opts:["Flimmerepithel","Verhorntes Plattenepithel","Zylinderepithel","Übergangsepithel"],correct:3,explanation:"FALLE! Harnblase = Übergangsepithel. Atemwege = Flimmerepithel. Darm = Zylinderepithel. Haut = verhorntes Plattenepithel.",lesson:"Epithelgewebe – Exkurs",theme:"haut"},{q:"Welche besondere Eigenschaft hat die Epidermis bezüglich Blutgefäße?",opts:["Sehr viele Blutgefäße","Keine Blutgefäße — wird über Diffusion versorgt","Nur Lymphgefäße","Arterien aber keine Venen"],correct:1,explanation:"Epidermis = KEINE Gefäße. Versorgung über Diffusion und aktiven Nährstofftransport aus der Dermis.",lesson:"Die Epidermis & ihre Schichten",theme:"haut"},{q:"In welcher Zeitspanne erneuert sich die Epidermis vollständig?",opts:["7 Tage","14 Tage","30 Tage","6 Monate"],correct:2,explanation:"Epidermis erneuert sich innerhalb von 30 Tagen. Neue Zellen entstehen in der Basalschicht und wandern zur Oberfläche.",lesson:"Die Epidermis & ihre Schichten",theme:"haut"},{q:"Welche Schicht der Epidermis enthält Melanin-produzierende Zellen und Stammzellen?",opts:["Hornzellschicht","Stachelzellschicht","Körnerzellschicht","Basalzellschicht"],correct:3,explanation:"Basalzellschicht: Melanozyten (Melanin = UV-Schutz) + Stammzellen (neue Keratinozyten). Sitzt auf der Basalmembran.",lesson:"Die Epidermis & ihre Schichten",theme:"haut"},{q:"Was ist die Glanzzellschicht und wo kommt sie vor?",opts:["Melaninschicht überall","Glänzende Schicht unter der Hornschicht — NUR in Leistenhaut","Oberste Schicht der Epidermis","Unterste Dermisschicht"],correct:1,explanation:"Glanzzellschicht: direkt unter der Hornschicht, bricht UV-Licht stark, existiert NUR in der Leistenhaut (Handflächen + Fußsohlen).",lesson:"Die Epidermis & ihre Schichten",theme:"haut"},{q:"Von welchen Zellen gehen maligne Melanome aus?",opts:["Keratinozyten der Hornschicht","Melanozyten der Basalzellschicht","Zellen der Stachelschicht","Fibroblasten der Dermis"],correct:1,explanation:"Maligne Melanome gehen von Melanozyten (Basalzellschicht) aus. Sehr bösartig — metastasiert lymphogen und hämatogen.",lesson:"Die Epidermis & ihre Schichten",theme:"haut"},{q:"Was ist Diffusion und wie hilft sie der Epidermis?",opts:["Aktiver Transport mit Energie","Passiver Transport von hoher zu niedriger Konzentration — versorgt die gefäßlose Epidermis","Transport durch Blutgefäße","Aktiver Transport durch Pumpproteine"],correct:1,explanation:"Diffusion = passiver Transport. Teilchen wandern von höherer zu niedrigerer Konzentration. So gelangen Nährstoffe aus der Dermis in die gefäßlose Epidermis.",lesson:"Die Epidermis & ihre Schichten",theme:"haut"},{q:"Aus welchen 2 Schichten besteht die Dermis?",opts:["Basalschicht und Hornschicht","Papillenschicht (stratum papillare) und Geflechtschicht (stratum reticulare)","Epidermis und Subcutis","Melanschicht und Keratinschicht"],correct:1,explanation:"Dermis: 1. Papillenschicht (stratum papillare) — viele Blutgefäße. 2. Geflechtschicht (stratum reticulare) — kollagenreiche elastische Fasern.",lesson:"Aufbau der Dermis (Lederhaut)",theme:"haut"},{q:"⚠️ FALLE (Pflegerelevant): Warum ist anhaltender Druck auf die Haut gefährlich?",opts:["Er verstopft die Schweißdrüsen","Er komprimiert Blutgefäße der Papillenschicht → Ischämie → Dekubitusgefahr","Er beschädigt die Hornschicht","Er blockiert die Talgdrüsen"],correct:1,explanation:"WICHTIG! Druck komprimiert Blutgefäße in der Papillenschicht der Dermis → Ischämie → Gewebeunterversorgung → Dekubitusentstehung. Das ist der anatomische Grund für Lagerung!",lesson:"Aufbau der Dermis (Lederhaut)",theme:"haut"},{q:"Warum entstehen Falten im Alter und was beschleunigt diesen Prozess?",opts:["Epidermis wird dicker — durch Stress","Kollagenfasern werden elastischer","Elastizität der Geflechtschicht lässt nach — UV-Strahlung beschleunigt es","Basalzellschicht verliert Stammzellen"],correct:2,explanation:"Geflechtschicht (stratum reticulare) enthält kollagenreiche elastische Fasern. Elastizität nimmt im Alter ab — UV-Strahlung beschleunigt Faltenbildung.",lesson:"Aufbau der Dermis (Lederhaut)",theme:"haut"},{q:"Wie viele Schmerzrezeptoren befinden sich durchschnittlich auf 1 cm² Dermis?",opts:["12","40","100","200"],correct:3,explanation:"Pro cm² Dermis: 200 Schmerzrezeptoren, 100 Druckrezeptoren, 12 Kälterezeptoren, 2 Wärmerezeptoren, 100 Schweißdrüsen, 40 Talgdrüsen.",lesson:"Aufbau der Dermis (Lederhaut)",theme:"haut"},{q:"Welcher Mechanorezeptor reagiert auf Vibration und liegt in der Subcutis?",opts:["Merkel-Tastzellen","Meissner-Tastkörperchen","Ruffini-Körperchen","Vater-Pacini-Körperchen"],correct:3,explanation:"Vater-Pacini-Körperchen reagieren auf Vibration und liegen in der Subcutis. Meissner-Körperchen (Berührung) und Ruffini-Körperchen (Dehnung) liegen in der Dermis.",lesson:"Aufbau der Dermis (Lederhaut)",theme:"haut"},{q:"Was sind die Aufgaben der Subcutis?",opts:["Nur Schutz vor UV-Strahlung","Polsterung, Isolation, Wasserspeicher, Energiereserve, Lymph- + Blutgefäße","Produktion von Melanin und Keratin","Nur Verbindung von Dermis und Muskel"],correct:1,explanation:"Subcutis: lockeres Bindegewebe + Fett. Aufgaben: Polsterung, Isolation, Wasserspeicher, Energiereserve, enthält Lymph- und Blutgefäße. Verbindungsschicht zwischen Cutis und Körperfaszien.",lesson:"Aufbau der Dermis (Lederhaut)",theme:"haut"},{q:"Was gehört zu den Hautanhangsorganen (Hautanhangsgebilde)?",opts:["Epidermis, Dermis, Subcutis","Haare (Pilli), Nägel (Ungues), Talg-, Duft- und Schweißdrüsen (Glandulae)","Blutgefäße, Nerven, Lymphgefäße","Melanozyten, Keratinozyten, Fibroblasten"],correct:1,explanation:"Hautanhangsorgane: Haare (Pilli), Nägel (Ungues), Talg-, Duft- und Schweißdrüsen (Glandulae). Wichtig für Klausur!",lesson:"Hautanhangsorgane & Drüsen",theme:"haut"},{q:"Welche Bereiche des Körpers sind unbehaart (halos)?",opts:["Gesicht und Hals","Bereiche mit Felderhaut (Rücken, Arme)","Bereiche mit Leistenhaut (Handflächen und Fußsohlen)","Alle Stellen über Gelenken"],correct:2,explanation:"Haare bedecken fast den ganzen Körper — außer Bereiche mit Leistenhaut (Handflächen und Fußsohlen). Diese sind grundsätzlich unbehaart.",lesson:"Hautanhangsorgane & Drüsen",theme:"haut"},{q:"In welchen 3 Phasen verläuft die Haarbildung?",opts:["Wachstum, Ruhe, Abfall","Wachstumsphase, Übergangsphase, Ruhephase","Anagen, Katagen, Telogen sind nicht relevant","Produktion, Transport, Ausscheidung"],correct:1,explanation:"Haarbildung in 3 Phasen: 1. Wachstumsphase (Zellen teilen sich), 2. Übergangsphase (Produktion stoppt), 3. Ruhephase (Papille erholt sich, dann neues Haar).",lesson:"Hautanhangsorgane & Drüsen",theme:"haut"},{q:"Welche Aussage über Haare ist FALSCH?",opts:["Haare haben eine Talgdrüse","Haare besitzen weder Blut- noch Nervenversorgung","Haare wachsen aus der Haarpapille","Haare sind sehr gut durchblutet und versorgt"],correct:3,explanation:'FALSCH: Haare besitzen weder Blut- noch Nervenversorgung! Das Haar selbst ist "tot" — nur die Haarpapille wird über Blutgefäße versorgt.',lesson:"Hautanhangsorgane & Drüsen",theme:"haut"},{q:"Welche Funktion haben die Nägel (Ungues)?",opts:["Nur ästhetische Funktion","Schützen Kuppen, stabilisieren Zehenbeeren, verbessern Tastsinn, Kratzwerkzeug","Nur Schutz vor mechanischen Einflüssen","Regulierung der Körpertemperatur"],correct:1,explanation:"Nägel: schützen Finger-/Zehenkuppen, stabilisieren die darunter liegenden Finger- bzw. Zehenbeeren, verbessern die Wahrnehmung beim Ertasten/Greifen, Kratzwerkzeug.",lesson:"Hautanhangsorgane & Drüsen",theme:"haut"},{q:"⚠️ Was ist eine Paronychie?",opts:["Eine Haarerkrankung","Entzündung von Nagelfalz und Nagelwall","Eine Schweißdrüsenerkrankung","Verfärbung der Nägel durch Pilze"],correct:1,explanation:"Paronychie = Entzündung von Nagelfalz und Nagelwall. Hat sich bereits Eiter angesammelt → Panaritium. Die Umschlagfalte am Nagelfalz ist besonders gefährdet durch bakterielle Infektionen.",lesson:"Hautanhangsorgane & Drüsen",theme:"haut"},{q:"Welchem Fitzpatrick-Hauttyp entspricht: sehr helle Haut, rötlich-blondes Haar, Sonnenbrand in unter 10 Min?",opts:["Hauttyp 2 — Nordischer Typ","Hauttyp 1 — Keltischer Typ","Hauttyp 3 — Mischtyp","Hauttyp 4 — Mediterraner Typ"],correct:1,explanation:"Hauttyp 1 (Keltischer Typ): sehr helle Haut, hellblond-rötliches Haar, blau/grün/grau Augen, keine Bräunung möglich, Eigenschaftsschutz <10 Min.",lesson:"Fitzpatrick-Hauttypen",theme:"haut"},{q:"Wie viele Fitzpatrick-Hauttypen gibt es?",opts:["3","4","6","8"],correct:2,explanation:"Es gibt 6 Fitzpatrick-Hauttypen (1-6): von keltisch (sehr hell, <10 Min Eigenschutz) bis schwarz (dunkel, 90 Min Eigenschutz).",lesson:"Fitzpatrick-Hauttypen",theme:"haut"},{q:"Was charakterisiert die seborrhoische (fettige) Haut?",opts:["Spröde, trockene, schuppige Haut bei 30%","Dicke, fettige, grobporige Haut — bei 50% der Bevölkerung","Fettige Mitte, trockene Wangen — bei 20%","Sehr empfindliche Haut mit wenig Talgdrüsen"],correct:1,explanation:"Seborrhoische (fettige) Haut: dicke, fettige, grobporige, feucht glänzende Haut, Pickel/Mitesser, Überproduktion der Talgdrüsen mit vermehrter Schweißproduktion. Bei 50% der Bevölkerung.",lesson:"Veränderungen der Haut",theme:"haut"},{q:"Was passiert mit der Haut im Alter? (Altershaut)",opts:["Talgdrüsen produzieren mehr, Haut wird dicker","Kapillaranzahl nimmt ab, Epidermis erneuert sich langsamer, Haut wird dünner und trockener","Nur Pigmentflecken entstehen, alles andere bleibt gleich","Hautimmunität nimmt zu, Wundheilung verbessert sich"],correct:1,explanation:"Altershaut: Kapillaranzahl ↓ → blasse Haut + Hämatome. Epidermiserneuerung dauert länger → schlechtere Regeneration. Subcutis↓ + Verzahnung löst sich → pergamentartig. Schweiß/Talg↓ → trocken, schuppig, juckend. Kollagen ↓ → Falten. UV → Pigmentflecken.",lesson:"Veränderungen der Haut",theme:"haut"},{q:"Warum ist Kinderhaut besonders empfindlich? (3 Hauptgründe)",opts:["Zu viel Melanin, zu viele Talgdrüsen, zu große Zellen","Dünnere Hornschicht, kein fertiger Säureschutzmantel, kaum Melanin","Zu wenig Schweißdrüsen, zu trockene Haut, kein Immunsystem","Zu viele Nervenenden, zu sensitiv, zu dünn"],correct:1,explanation:"Kinderhaut: 1. Hornschicht ca. 30% dünner als bei Erwachsenen. 2. Talgdrüsen produzieren wenig Lipide → kein fertiger Säureschutzmantel → keine stabile Keimbarriere. 3. Kaum Melanin → hohe UV-Empfindlichkeit.",lesson:"Veränderungen der Haut",theme:"haut"}],hygiene:[{q:"Wie lange dauert die Händedesinfektion mindestens?",opts:["10 Sekunden","20 Sekunden","30 Sekunden","60 Sekunden"],correct:2,explanation:"Mindestens 30 Sekunden, damit der Wirkstoff die Keime zuverlässig abtötet.",lesson:"Mikrobiologie + Basishygiene + PSA",theme:"hygiene"},{q:"Was bedeutet MRSA?",opts:["Methicillin-resistenter Staphylococcus aureus","Medikamentöse Resistenz durch Salmonellen","Mikrobiologisch resistente Streptokokken","Keine dieser Antworten"],correct:0,explanation:"MRSA = Methicillin-resistenter Staphylococcus aureus → strikte Kontaktisolation.",lesson:"Mikrobiologie + Basishygiene + PSA",theme:"hygiene"},{q:"Die WHO-Händehygiene umfasst wie viele Schritte?",opts:["3 Schritte","5 Schritte","6 Schritte","8 Schritte"],correct:2,explanation:"6 Schritte: Handflächen, Handrücken, Fingerzwischenräume, verschränkt, Daumen, Fingerkuppen.",lesson:"Mikrobiologie + Basishygiene + PSA",theme:"hygiene"}],blutzuck:[{q:"Wofür benötigt der Körper Glukose?",opts:["Nur für die Blutbildung","Als Energiequelle für alle Körperzellen","Nur für das Immunsystem","Zur Wärmeregulation"],correct:1,explanation:"Glukose ist der wichtigste Energielieferant des Körpers. Alle Zellen — besonders Gehirn und Muskeln — sind darauf angewiesen.",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-glukose"},{q:"Wer sorgt für die Glukoseaufnahme aus dem Blut in die Zellen?",opts:["Glukagon","Adrenalin","Insulin","Kortisol"],correct:2,explanation:"Insulin wirkt wie ein Schlüssel: Es öffnet die Zellen für Glukose. Ohne Insulin bleibt die Glukose im Blut — der BZ steigt.",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-glukose"},{q:"Was ist der normale Blutzuckerwert nüchtern?",opts:["50–70 mg/dl","70–100 mg/dl","100–140 mg/dl","140–180 mg/dl"],correct:1,explanation:"Normaler Nüchtern-BZ: 70–100 mg/dl. Werte zwischen 100–125 mg/dl gelten als Prädiabetes. Ab 126 mg/dl (nüchtern, 2x gemessen) = Diabetes mellitus.",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-werte"},{q:"Wie hoch darf der Blutzucker nach dem Essen (postprandial) sein?",opts:["Bis 100 mg/dl","Bis 120 mg/dl","Bis 140 mg/dl","Bis 200 mg/dl"],correct:2,explanation:"Nach dem Essen ist ein BZ bis 140 mg/dl noch tolerabel. Darüber sollte der Körper mit Insulin gegensteuern.",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-werte"},{q:"Aus wie vielen Teilen besteht das Pankreas?",opts:["2 Teilen","3 Teilen","4 Teilen","5 Teilen"],correct:1,explanation:"Das Pankreas besteht aus 3 Teilen: Kopf (Caput), Körper (Corpus) und Schwanz (Cauda).",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-pankreas"},{q:"Wie liegt der Kopf des Pankreas anatomisch?",opts:["Er liegt neben der Milz","Er wird vom Duodenum c-förmig umschlossen","Er liegt direkt hinter der Leber","Er grenzt an den Magen"],correct:1,explanation:"Der Kopf (Caput) des Pankreas wird vom Duodenum (Zwölffingerdarm) c-förmig umschlossen. Der Schwanz grenzt an die Milz.",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-pankreas"},{q:"Was produzieren die A-Zellen der Langerhans-Inseln?",opts:["Insulin — senkt den BZ","Glukagon — erhöht den BZ","Amylase — spaltet Kohlenhydrate","Lipase — spaltet Fette"],correct:1,explanation:"A-Zellen produzieren Glukagon (erhöht den BZ). Merkhilfe: A wie Anstieg. B-Zellen produzieren Insulin (Bremse).",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-hormone"},{q:"Was produzieren die B-Zellen der Langerhans-Inseln (70% der Inselzellen)?",opts:["Glukagon","Adrenalin","Insulin","Lipase"],correct:2,explanation:"B-Zellen (70% der Inselzellen) produzieren Insulin, das den BZ senkt. Merkhilfe: B wie Bremse.",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-hormone"},{q:"Was bedeutet die endokrine Funktion des Pankreas?",opts:["Enzyme werden ins Duodenum abgegeben","Hormone werden direkt ins Blut abgegeben","Gallensäuren werden produziert","Magensäure wird neutralisiert"],correct:1,explanation:"Endokrin = Abgabe direkt ins Blut (Insulin, Glukagon). Exokrin = Abgabe über einen Gang nach außen (Verdauungsenzyme ins Duodenum).",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-pankreas"},{q:"Wie lautet der Fachbegriff für einen zu niedrigen BZ-Wert und ab wann spricht man davon?",opts:["Hyperglykämie, unter 100 mg/dl","Hypoglykämie, unter 70 mg/dl","Glukosurie, unter 80 mg/dl","Polydipsie, unter 60 mg/dl"],correct:1,explanation:"Hypoglykämie = Unterzuckerung, BZ unter 70 mg/dl. Klausurrelevant! Sofortmaßnahme: MESSEN → Traubenzucker.",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-hypo"},{q:"Nennen Sie 4 typische Symptome einer Unterzuckerung (Hypoglykämie):",opts:["Starker Durst, Polyurie, Müdigkeit, Juckreiz","Zittern, Schwitzen, Verwirrtheit, Heißhunger","Übelkeit, Erbrechen, Bauchschmerzen, Fieber","Blässe, Acetongeruch, Kussmaul-Atmung, Koma"],correct:1,explanation:"Typische Hypoglykämie-Symptome: Zittern, Schwitzen, Verwirrtheit, Heißhunger. Auch: Blässe, Herzrasen, Angst.",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-hypo"},{q:"⚠️ FALLE: Wie handeln Sie, wenn Sie NICHT sicher sind, ob jemand eine Unter- oder Überzuckerung hat?",opts:["Sofort Traubenzucker geben — Hypoglykämie ist gefährlicher","Sofort Insulin spritzen — sicherer bei Überzuckerung","Zuerst den Blutzucker messen, dann handeln","Arzt rufen und abwarten"],correct:2,explanation:"IMMER ZUERST MESSEN! Niemals blind handeln. Falsche Maßnahme kann den Zustand verschlimmern. Das ist eine Klausur-Standardfrage!",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-hypo"},{q:"Nennen Sie 3 Anzeichen einer Überzuckerung (Hyperglykämie):",opts:["Zittern, Schwitzen, Heißhunger","Starker Durst, häufiges Wasserlassen, Müdigkeit","Acetongeruch, Schüttelfrost, Erbrechen","Bewusstlosigkeit, Herzrasen, Blässe"],correct:1,explanation:"Hyperglykämie-Zeichen: Starker Durst (Polydipsie), häufiges Wasserlassen (Polyurie), Müdigkeit, Schwäche, Sehstörungen.",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-hypo"},{q:"Wie lautet der Fachbegriff für einen zu hohen Blutzuckerwert?",opts:["Hypoglykämie","Hyperglykämie","Glukosurie","Polydipsie"],correct:1,explanation:"Hyperglykämie = erhöhter Blutzucker. Ab 126 mg/dl nüchtern (2x gemessen) = Diabetes mellitus. Grenzbereich: 100–125 mg/dl.",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-hypo"},{q:"Ab wann ist ein Blutzuckerwert eindeutig zu hoch, und in welcher Spanne liegt der Grenzbereich?",opts:["Eindeutig ab 180 mg/dl, Grenzbereich 140–179 mg/dl","Eindeutig ab 126 mg/dl, Grenzbereich 100–125 mg/dl","Eindeutig ab 200 mg/dl, Grenzbereich 150–199 mg/dl","Eindeutig ab 140 mg/dl, Grenzbereich 110–139 mg/dl"],correct:1,explanation:"Ab 126 mg/dl nüchtern (2x gemessen) = Diabetes. Grenzbereich 100–125 mg/dl = Prädiabetes. Diese Grenzwerte sind klausurrelevant!",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-werte"},{q:"Ab welchem BZ-Wert entsteht Glukosurie (Zucker im Urin)?",opts:["Ab 100 mg/dl","Ab 126 mg/dl","Ab 180 mg/dl","Ab 250 mg/dl"],correct:2,explanation:"Ab 180 mg/dl (Nierenschwelle) kann die Niere den Zucker nicht mehr vollständig rückresorieren → Glukosurie entsteht.",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-bus"},{q:"Warum entsteht bei Diabetes Polydipsie (starker Durst)?",opts:["Weil das Insulin den Durst stimuliert","Weil Glukosurie Wasser mitnimmt → Exsikkose → kompensatorischer Durst","Weil die Nieren zu viel Wasser speichern","Weil der Magen weniger Flüssigkeit aufnimmt"],correct:1,explanation:"Kette: BZ > 180 → Glukosurie → Zucker zieht Wasser mit sich → Exsikkose (Austrocknung) → Polydipsie (starker Durst). Komplett erklären können!",lesson:"Grundlagen Blutzucker & Pankreas",theme:"blutzuck",anchor:"lsec-bus"},{q:"Welche Art von Insulinmangel liegt bei Typ-1-Diabetes vor?",opts:["Relativer Insulinmangel — zu wenig Insulin für die Zuckermenge","Absoluter Insulinmangel — Insulin fehlt völlig","Kein Insulinmangel — nur Insulinresistenz","Temporärer Insulinmangel — nur nachts"],correct:1,explanation:"Typ 1 = ABSOLUTER Insulinmangel. Die B-Zellen werden durch Autoimmunreaktion zerstört → kein Insulin mehr produziert.",lesson:"Diabetes Typ 1 – Pathophysiologie",theme:"blutzuck",anchor:"lsec-hormone"},{q:"Was löst Typ-1-Diabetes wahrscheinlich aus?",opts:["Überernährung und Bewegungsmangel","Viren bei bestehender genetischer Veranlagung → Autoimmunreaktion","Zu viel Zuckerkonsum in der Kindheit","Chronischer Stress und Schlafmangel"],correct:1,explanation:"Typ 1: Wahrscheinlich durch Viren ausgelöst bei genetischer Veranlagung → Autoimmunreaktion → Antikörper zerstören B-Zellen langsam.",lesson:"Diabetes Typ 1 – Pathophysiologie",theme:"blutzuck",anchor:"lsec-hormone"},{q:"Welche 3 Hauptfaktoren begünstigen Typ-2-Diabetes?",opts:["Viren, Kälte und Autoimmunreaktion","Über- und Fehlernährung, zu wenig Bewegung, genetische Prädisposition","Insulinmangel, Pankreaserkrankung, Infektionen","Stress, Schlafmangel und Rauchen"],correct:1,explanation:"Typ-2-Risikofaktoren: a) Über-/Fehlernährung (oft mit metabolischem Syndrom), b) Zu wenig Bewegung, c) Genetische Prädisposition.",lesson:"Diabetes Typ 2 – Pathophysiologie",theme:"blutzuck",anchor:"lsec-hormone"},{q:"Was bedeutet Insulinresistenz bei Typ-2-Diabetes?",opts:["Das Pankreas produziert gar kein Insulin mehr","Die Zellen reagieren schlechter auf Insulin — brauchen immer mehr davon","Das Insulin wird zu schnell abgebaut","Das Insulin gelangt nicht ins Blut"],correct:1,explanation:"Insulinresistenz: Zellen reagieren immer schlechter auf Insulin → Pankreas produziert mehr → erschöpft sich → relativer Insulinmangel entsteht.",lesson:"Diabetes Typ 2 – Pathophysiologie",theme:"blutzuck",anchor:"lsec-hormone"},{q:"Welche Symptome sind typisch für Typ-1-Diabetes?",opts:["Schleichender Beginn, Juckreiz, allgemeine Schwäche","Polyurie, Glukosurie, Polydipsie trotz Exsikkose, Gewichtsverlust","Nur Müdigkeit und leichter Durst","Keine Symptome im Frühstadium"],correct:1,explanation:"Typ 1 (akut): Polyurie, Glukosurie, Polydipsie, Exsikkose, Gewichtsverlust trotz hoher Kalorienzufuhr. Im Extremfall: Ketoazidose → Koma.",lesson:"Symptome Typ 1 & Typ 2 im Vergleich",theme:"blutzuck",anchor:"lsec-hormone"},{q:"⚠️ FALLE: Was sind frühe Anzeichen von Typ-2-Diabetes?",opts:["Sofortige starke Symptome wie bei Typ 1","Allgemeiner Schwächezustand und Juckreiz — erst später Durst und Polyurie","Ketoazidose und Acetongeruch","Sofortige Bewusstlosigkeit"],correct:1,explanation:"Typ 2 verläuft schleichend! Früh: Schwächezustand, Juckreiz. Spät: Starker Durst, Polyurie, Gewichtsabnahme. Oft Zufallsbefund!",lesson:"Symptome Typ 1 & Typ 2 im Vergleich",theme:"blutzuck",anchor:"lsec-hormone"},{q:"Wie heißen die 3 Säulen der Therapie bei Typ-2-Diabetes?",opts:["Insulin, Kortison, Bewegung","Ernährungsumstellung, Bewegung, medikamentöse Therapie","Diät, Ruhe, Operation","Metformin, Insulin, Chirurgie"],correct:1,explanation:"3-Säulen-Therapie: Säule 1: Ernährungsumstellung. Säule 2: Bewegung. Säule 3: Medikamente (erst wenn Säule 1+2 nicht reichen).",lesson:"Therapie – 3-Säulen & Insulinarten",theme:"blutzuck",anchor:"lsec-hormone"},{q:"⚠️ FALLE: Welches Medikament wird bei Typ-2-Diabetes als ERSTES eingesetzt?",opts:["Sofort Insulin","Metformin (Biguanid)","Sulfonylharnstoffe","DPP-4-Hemmer"],correct:1,explanation:"FALLE! Viele denken sofort an Insulin. Laut Leitlinie: 1. Ernährung + Bewegung, 2. Metformin, 3. zweites Antidiabetikum, zuletzt Insulin.",lesson:"Therapie – 3-Säulen & Insulinarten",theme:"blutzuck",anchor:"lsec-hormone"},{q:"Normalinsulin (z.B. Actrapid): Wirkdauer und Spritz-Ess-Abstand?",opts:["Wirkdauer 24h, kein Abstand nötig","Wirkdauer ~5h, Spritz-Ess-Abstand 10–20 Minuten","Wirkdauer ~3h, kein Abstand nötig","Wirkdauer 10–12h, Abstand 30–45 Minuten"],correct:1,explanation:"Normalinsulin (Actrapid, Huminsulin Normal): Wirkdauer ~5h, Spritz-Ess-Abstand 10–20 Minuten.",lesson:"Therapie – 3-Säulen & Insulinarten",theme:"blutzuck",anchor:"lsec-hormone"},{q:"⚠️ FALLE: Was ist bei Mischinsulin (trübes Aussehen) vor der Gabe unbedingt zu beachten?",opts:["Kräftig schütteln bis es gleichmäßig ist","Langsam schwenken — niemals schütteln! Trübes Aussehen ist normal","Erwärmen auf 37°C vor der Injektion","Im Kühlschrank aufziehen"],correct:1,explanation:"FALLE! Mischinsulin SCHWENKEN, nie schütteln — das zerstört das Insulin! Das trübe Aussehen ist normal (Langzeitanteil).",lesson:"Therapie – 3-Säulen & Insulinarten",theme:"blutzuck",anchor:"lsec-hormone"},{q:"Was besagt die 30er-Regel zur BZ-Korrektur mit Insulin?",opts:["1 IE Insulin senkt den BZ um 30 mg/dl","1 IE Insulin erhöht den BZ um 30 mg/dl","30 IE Insulin senken den BZ um 1 mg/dl","30 IE Insulin pro kg Körpergewicht"],correct:0,explanation:"30er-Regel: 1 IE Altinsulin (z.B. Actrapid) senkt den BZ um ca. 30 mg/dl. Gilt nur als grobe Annäherung für niedrigere Werte.",lesson:"Therapie – 3-Säulen & Insulinarten",theme:"blutzuck",anchor:"lsec-hormone"},{q:"Was gibt der HbA1c-Wert an und was ist der Normwert?",opts:["Aktueller Nüchtern-BZ — Normwert 70–100 mg/dl","Durchschnittlicher BZ der letzten 3–4 Monate — Normwert 4–6%","BZ nach dem Essen — Normwert unter 140 mg/dl","Tägliche BZ-Schwankungen — Normwert unter 50 mg/dl"],correct:1,explanation:"HbA1c = Langzeit-BZ der letzten 3–4 Monate in %. Normwert: 4–6%. Bei Diabetikern tolerabel: 6,5–7,5%. Klausurrelevant!",lesson:"Diagnostik – BZTP, HbA1c, oGTT",theme:"blutzuck",anchor:"lsec-hormone"},{q:"Wofür steht BZTP und was zeigt es?",opts:["Blutzuckertherapieplan — zeigt die Medikamentendosierung","Blutzuckertagesprofil — zeigt BZ nüchtern, vor und 2h nach den Mahlzeiten","Blutzuckertestprotokoll — zeigt Wochendurchschnitt","Blutzuckertoleranzprofil — zeigt Frühdiabetes"],correct:1,explanation:"BZTP = Blutzuckertagesprofil. Zeigt BZ-Werte über den Tag verteilt: nüchtern, vor den Mahlzeiten, 2h danach.",lesson:"Diagnostik – BZTP, HbA1c, oGTT",theme:"blutzuck",anchor:"lsec-hormone"},{q:"⚠️ FALLE: Welche Komaform tritt bei Typ-1-Diabetes auf und warum?",opts:["Hyperosmolares Koma — durch Austrocknung","Ketoazidotisches Koma — Fettabbau → Ketonkörper → Azidose","Hypoglykämisches Koma — durch zu viel Insulin","Hepatisches Koma — durch Leberversagen"],correct:1,explanation:"Ketoazidotisches Koma NUR bei Typ 1! Absoluter Insulinmangel → Fettabbau → Ketonkörper → Azidose → Kussmaul-Atmung → Acetongeruch. BZ: 300–700 mg/dl.",lesson:"Komaformen – Ketoazidose & Hyperosmolar",theme:"blutzuck",anchor:"lsec-hormone"},{q:"⚠️ FALLE: Welche Komaform tritt bei Typ-2-Diabetes auf?",opts:["Ketoazidotisches Koma — mit Acetongeruch","Hyperosmolares Koma — durch extreme Austrocknung","Beide Formen sind gleich wahrscheinlich","Hepatisches Koma durch Metformin"],correct:1,explanation:"FALLE! Hyperosmolares Koma = Typ 2. Etwas Insulin vorhanden → kein Fettabbau → keine Azidose. BZ bis 700 mg/dl → Austrocknung → Koma.",lesson:"Komaformen – Ketoazidose & Hyperosmolar",theme:"blutzuck",anchor:"lsec-hormone"},{q:"Was ist Makroangiopathie und welche Folgekrankheiten entstehen?",opts:["Schädigung kleiner Kapillaren → Retinopathie, Nephropathie","Schädigung großer Blutgefäße → Herzinfarkt, Schlaganfall, pAVK","Nervenschäden → Kribbeln, Taubheit","Hornhautschäden → Sehverlust"],correct:1,explanation:"Makroangiopathie = Schädigung großer Gefäße (Arteriosklerose). Folgen: Herzinfarkt, Schlaganfall, pAVK (periphere Verschlusskrankheit).",lesson:"Folgeerkrankungen – Makro/Mikroangiopathie, Polyneuropathie",theme:"blutzuck",anchor:"lsec-hormone"},{q:"⚠️ FALLE: Was unterscheidet den neuropathischen vom ischämischen Fuß?",opts:["Neuropathisch: kalt, blass, Pulse nicht tastbar — Ischämisch: warm, Pulse tastbar","Neuropathisch: warm, Pulse tastbar, schmerzlos — Ischämisch: kalt, Pulse nicht tastbar, schmerzhaft","Beide sind identisch — nur der BZ-Wert unterscheidet","Neuropathisch: immer mit Infektion — Ischämisch: immer ohne"],correct:1,explanation:"KLAUSUR! Neuropathisch: WARM, Pulse tastbar, Sensibilitätsstörung → SCHMERZLOS (Mal perforans). Ischämisch: KALT, Pulse NICHT tastbar → SCHMERZHAFT (Nekrosen).",lesson:"Diabetisches Fußsyndrom",theme:"blutzuck",anchor:"lsec-hormone"}],dekubitus:[{q:"Was ist ein Dekubitus per Definition (NPUAP/EPUAP)?",opts:["Eine Infektion der Haut durch Bakterien","Eine lokal begrenzte Schädigung der Haut/Gewebe durch Druck oder Druck+Scherkräfte über knöchernen Vorsprüngen","Eine allergische Reaktion auf Pflegeprodukte","Eine Pilzinfektion der Hautfalten"],correct:1,level:1,explanation:"Definition: lokal begrenzte Schädigung der Haut und/oder des darunterliegenden Gewebes, in der Regel über knöchernen Vorsprüngen, infolge von Druck oder Druck in Kombination mit Scherkräften (NPUAP/EPUAP 2009).",lesson:"Definition & Expertenstandard",theme:"dekubitus"},{q:"Was versteht man unter Scherkräften?",opts:["Kräfte die senkrecht auf die Haut wirken","Entgegengesetzt wirkende Kräfte die Gewebe verschieben und Gefäße abknicken","Kräfte die die Epidermis ablösen","Thermische Kräfte durch Reibungswärme"],correct:1,level:1,explanation:"Scherkräfte wirken entgegengesetzt zueinander (z.B. Abgleiten im Bett). Das Gewebe wird verschoben, Gefäße werden abgeknickt → Ischämie → Nekrose. Typisch bei Oberkörperhochlagerung ohne Knierolle.",lesson:"Definition & Expertenstandard",theme:"dekubitus"},{q:"Welches sind die 3 wichtigsten Risikofaktoren laut Expertenstandard?",opts:["Alter, Gewicht, Geschlecht","Beeinträchtigte Mobilität, gestörte Durchblutung, beeinträchtigter Hautzustand","Schmerzen, Demenz, Inkontinenz","Ernährung, Flüssigkeitszufuhr, Medikamente"],correct:1,level:1,explanation:"Die 3 Hauptrisikofaktoren: 1. Beeinträchtigte Mobilität, 2. Gestörte Durchblutung (Arteriosklerose, Diabetes), 3. Beeinträchtigter Hautzustand (Feuchtigkeit). Weitere: Mangelernährung, Schmerzmittel, Sedativa.",lesson:"Risikofaktoren & Entstehung",theme:"dekubitus"},{q:"Welche sind die häufigsten Prädilektionsstellen eines Dekubitus?",opts:["Schultern und Ellenbogen","Kreuzbein (#1), Fersen, Trochanteren","Knie und Unterschenkel","Bauch und Brust"],correct:1,level:1,explanation:"Prädilektionsstellen: #1 Kreuzbein (ca. 30%), Fersen, Trochanteren (Seitenlage), Knöchel, Hinterhaupt (Kinder). Alle über knöchernen Vorsprüngen mit wenig Polstergewebe.",lesson:"Prädilektionsstellen & Einschätzung",theme:"dekubitus"},{q:"Was beschreibt Dekubitus Kategorie I nach EPUAP?",opts:["Offene Wunde bis zur Dermis","Nicht wegdrückbare Rötung bei intakter Haut","Sichtbares Fettgewebe","Freiliegender Knochen"],correct:1,level:1,explanation:"Kat. I: Nicht wegdrückbare, umschriebene Rötung bei intakter Haut über knöchernem Vorsprung. Bereich kann verhärtet, wärmer/kälter sein. ACHTUNG: Darunterliegendes Gewebe ist bereits mitbetroffen!",lesson:"EPUAP Klassifikation Kat. I–IV",theme:"dekubitus"},{q:"Was sind geeignete Maßnahmen zur Dekubitusprophylaxe?",opts:["Massage der geröteten Stellen und Lagerungsringe","Regelmäßige Lagerung, Bewegungsförderung, druckverteilende Matratzen, Hautbeobachtung","Hyperämisierende Salben und Wärmelampen","Watteverbände und Babypuder"],correct:1,level:1,explanation:"Geeignete Maßnahmen: Positionswechsel alle 2–4h (liegend), 1h (sitzend), Bewegungsförderung, viskoelastische Matratzen, Hautbeobachtung, pH-neutrale Pflege, Ernährungsoptimierung, Schulung.",lesson:"Prophylaxe und Donts",theme:"dekubitus"},{q:"Was ist der Goldstandard der Lagerung zur Dekubitusprophylaxe?",opts:["90°-Seitenlage","Bauchlage","30°-Schräglagerung","Oberkörperhochlagerung 45°"],correct:2,level:1,explanation:"Die 30°-Schräglagerung ist der Goldstandard: entlastet Kreuzbein UND Trochanter gleichzeitig. Bei 90°-Seitenlage lastet der gesamte Druck auf dem Trochanter major. Lagerungsintervall: 2–4h liegend, mind. 1h sitzend.",lesson:"Prophylaxe und Donts",theme:"dekubitus"},{q:"Wie lautet die 1. Entstehungstheorie des Dekubitus?",opts:["Direktschädigung durch Deformation des Muskelgewebes","Ischämie: Druckkompression der Blutgefäße → Hypoxie → Zelluntergang","Allergische Reaktion auf Hautpflegemittel","Bakterielle Infektion der Haut"],correct:1,level:2,explanation:"Theorie 1: Ischämie. Druck komprimiert Blutgefäße → Minderdurchblutung → Hypoxie → Stoffwechselprodukte → Zelluntergang. Bereits nach 1–2h können irreversible Schäden entstehen!",lesson:"Risikofaktoren & Entstehung",theme:"dekubitus"},{q:"Was besagt die 2. Entstehungstheorie (Direktschädigung)?",opts:["Infektion von außen nach innen","Mechanische Deformation des Muskelgewebes → Zytoskelettabbau → Nekrose von innen nach außen","Überhitzung durch Reibungswärme","Chemische Schädigung durch Medikamente"],correct:1,level:2,explanation:"Theorie 2: Deformationstheorie. Kompression deformiert Muskelgewebe auf zellulärer Ebene → Zytoskelett zerstört → Nekrose. Beginnt TIEF im Gewebe, bevor Haut sichtbare Schäden zeigt.",lesson:"Risikofaktoren & Entstehung",theme:"dekubitus"},{q:"Was beschreibt Dekubitus Kategorie III nach EPUAP?",opts:["Rötung bei intakter Haut","Offene Wunde bis zur Dermis","Vollständiger Hautverlust, Fettgewebe sichtbar, KEIN Knochen/Sehnen","Freiliegender Knochen, Sehnen oder Muskeln"],correct:2,level:2,explanation:"Kat. III: Alle Hautschichten zerstört. Subkutanes Fettgewebe sichtbar, KEINE Knochen/Muskeln/Sehnen. Belag, Tunnelierung möglich. Tiefe variiert stark (Ferse flach, Adipöse tief).",lesson:"EPUAP Klassifikation Kat. I–IV",theme:"dekubitus"},{q:"Was unterscheidet Kategorie III von Kategorie IV?",opts:["Kat. III hat Rötung, Kat. IV nicht","Kat. III: kein Knochen/Sehnen sichtbar — Kat. IV: Knochen, Sehnen oder Muskeln freiliegend","Kat. III schmerzhaft, Kat. IV nicht","Kat. IV nur an der Ferse möglich"],correct:1,level:2,explanation:"Kat. III → Fettgewebe sichtbar, KEIN Knochen/Sehnen. Kat. IV → Knochen, Sehnen oder Muskeln freiliegend oder tastbar. Kat. IV: Osteomyelitis-Risiko, höchstes Amputationsrisiko.",lesson:"EPUAP Klassifikation Kat. I–IV",theme:"dekubitus"},{q:"Was sind die 6 Kriterien der Braden-Skala?",opts:["Alter, Gewicht, Mobilität, Ernährung, Bewusstsein, Inkontinenz","Sensorik, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte","Druck, Zeit, Durchblutung, Hautzustand, Ernährung, Mobilität","Schmerz, Fieber, RR, Puls, O₂, Bewusstsein"],correct:1,level:2,explanation:"Braden: 6 Kriterien — Sensorische Wahrnehmung, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Max. 23 Pkt. ≤18 = erhöhtes Risiko. ≤9 = sehr hohes Risiko. Merkhilfe: SFAMER. Reibung max. 3 Pkt!",lesson:"Definition & Expertenstandard",theme:"dekubitus"},{q:"Welche Substanzen sind zur Dekubitusprophylaxe obsolet?",opts:["Feuchtigkeitscreme und pH-neutrale Reinigung","Hyperämisierende Salben (ABC-Salbe, Finalgon), Vaseline, Babypuder, Seife","Wundauflagen und feuchtes Wundmilieu","Flüssigkeitsreiche Ernährung"],correct:1,level:2,explanation:"Obsolet/kontraindiziert: ABC-Salbe/Finalgon (verursachen Gewebsschäden!), Vaseline (porenverstopfend), Babypuder (Pasta zinci), Seife (zerstört Säureschutzmantel). Lagerungsringe erhöhen sogar den Randdruck!",lesson:"Prophylaxe und Donts",theme:"dekubitus"},{q:"Was gilt für Druck und Zeit bei der Dekubitusentstehung?",opts:["Nur sehr hoher Druck ist gefährlich","Hoher Druck kurze Zeit kann genauso schädigend sein wie niedriger Druck lange Zeit","Zeitdauer spielt keine Rolle","Nur Scherkräfte verursachen Dekubitus"],correct:1,level:2,explanation:"Druck × Zeit-Prinzip: Hoher Druck kurz = niedriger Druck lang — beides schädlich! Antidekubitusmatratzen vergrößern Kontaktfläche → Druck↓. Dennoch: Matratze ERSETZT NICHT die Lagerung!",lesson:"Risikofaktoren & Entstehung",theme:"dekubitus"},{q:"⚠️ FALLE: Gibt es eine Progression von Kategorie I → II → III → IV?",opts:["Ja, immer in dieser Reihenfolge","Nein! Oberflächliche und tiefe Dekubitus sind konzeptionell VERSCHIEDENE Vorgänge","Ja, aber nur bei Immobilen","Nein, Kat. III kann zu Kat. I werden"],correct:1,level:3,explanation:"FALLE! Kein Progressionsmodell! Oberflächliche Dek. (I, II) entstehen von außen. Tiefe Dek. (III, IV) beginnen im Muskelgewebe (Deformationstheorie) → erst Tage/Wochen später sichtbar. Waren evtl. bei Aufnahme bereits vorhanden! (Kottner, Sibbald 2011)",lesson:"Prädilektionsstellen & Einschätzung",theme:"dekubitus"},{q:"⚠️ FALLE: Wann darf NICHT Dekubitus Kat. II diagnostiziert werden?",opts:["Bei tiefen Wunden","Bei Blasen durch Pflaster/Verbände, IAD, Mazeration, Mykosen, Abschürfungen","Wenn kein Knochen sichtbar ist","Wenn die Wunde infiziert ist"],correct:1,level:3,explanation:"KLAUSUR! Nicht als Kat. II: Blasen durch Pflaster/Verbände, IAD (Inkontinenz-assoziierte Dermatitis), Mazeration, Mykosen (Pilze), Abschürfungen. Andere Ursache, andere Therapie!",lesson:"EPUAP Klassifikation Kat. I–IV",theme:"dekubitus"},{q:"⚠️ FALLE: Reduziert die alleinige Verwendung von Risikoskalen (Braden/Norton) die Dekubitusinzidenz?",opts:["Ja, laut Expertenstandard belegt","Nein — kein Hinweis gefunden; sie sind nur unterstützend, nie Ersatz für klinisches Urteil","Ja, aber nur bei über 65-Jährigen","Nein, weil Risikoskalen zu ungenau sind"],correct:1,level:3,explanation:"FALLE! Es konnte KEIN Hinweis gefunden werden, dass Risikoskalen allein die Inzidenz senken (DNQP 2017). Geringe Interrater-Reliabilität. Nur Hilfsmittel — nie Ersatz für klinisches Urteilsvermögen!",lesson:"Definition & Expertenstandard",theme:"dekubitus"},{q:"Was ist IAD und wie unterscheidet sie sich vom Dekubitus?",opts:["IAD = Ischämie-assoziierte Druckschädigung, liegt über Knochen","IAD = Inkontinenz-assoziierte Dermatitis — Ursache Feuchtigkeit, NICHT Druck, unregelmäßige Ränder, im Perineum","IAD und Dekubitus sind identisch","IAD = Intertrigo-assoziierte Dystrophie"],correct:1,level:3,explanation:"IAD: Ursache = Feuchtigkeit (Urin/Stuhl), NICHT Druck. Lokalisation: Perineum, Gesäß (NICHT über Knochen). Ränder: unregelmäßig. IAD erhöht Dekubitusrisiko! Abgrenzung = Ausschlussdiagnose. Therapie: feuchtigkeitsregulierende Produkte, keine Druckentlastung nötig.",lesson:"EPUAP Klassifikation Kat. I–IV",theme:"dekubitus"},{q:"Warum sind tiefe Dekubitus bei Aufnahme möglicherweise bereits vorhanden ohne sichtbar zu sein?",opts:["Weil Kat. IV immer unsichtbar ist","Tiefe Schäden beginnen im Muskel → Sichtbarkeit erst Tage–Wochen später (bis 2 Wochen!)","Weil Patienten die Schäden verbergen","Weil Dekubitus nur bei Rückenlage entsteht"],correct:1,level:3,explanation:"Deformationstheorie: Nekrose beginnt im Muskelgewebe und arbeitet sich nach außen — Zeitfenster Entstehung→Sichtbarkeit bis 2 Wochen! Rechtlich bedeutsam: Schäden können vor Aufnahme entstanden sein → Aufnahmescreening + sofortige Dokumentation Pflicht!",lesson:"Prädilektionsstellen & Einschätzung",theme:"dekubitus"},{q:"Was ist NPWT und bei welchen Kategorien wird es eingesetzt?",opts:["Norton-Prophylaxe-Wundtherapie bei Kat. I","Negative Pressure Wound Therapy — Unterdrucktherapie bei tiefen Kat. III/IV zur Granulationsförderung","Nasale Positionswarnung Technik","Normalpflege Wundtherapie"],correct:1,level:3,explanation:"NPWT = Negative Pressure Wound Therapy (Unterdrucktherapie, z.B. CuraSul®): Unterdruck fördert Granulation, entfernt Sekret, verbessert Durchblutung. Indikation: Kat. III/IV, nach chirurgischer Wundsäuberung (Débridement).",lesson:"Prophylaxe und Donts",theme:"dekubitus"},{q:"⚠️ KLAUSUR: Druck = Kraft : Fläche — was bedeutet das für die Prophylaxe?",opts:["Druck allein ist nie gefährlich","Nur Scherkräfte zählen","Größere Kontaktfläche → geringerer Druck — daher sind großflächige Matratzen + Lagerung das Ziel","Zeit spielt keine Rolle"],correct:2,level:3,explanation:"Druck = Kraft : Fläche. Antidekubitusmatratzen vergrößern Kontaktfläche → Druck↓ auf Prädilektionsstellen. Kein Ersatz für Lagerung! Kombination nötig. 1 N/m² = 1 Pa = 0,0075 mmHg. Wichtig: Lagerungsintervall individuell anpassen (Risikoskala + klinisches Urteil).",lesson:"Risikofaktoren & Entstehung",theme:"dekubitus"}],niere:[{q:"Welche der folgenden Funktionen erfüllen die Nieren?",opts:["Nur Urinbildung","Bildung von Urin, Blutdruckregulation, Hormonausschüttung und Säure-Basen-Regulation","Nur Filtration","Hormonbildung und Verdauung"],correct:1,explanation:"Die Nieren sind Multifunktionsorgane: Urinbildung, Reinigung des Blutes, Regulation von Blutdruck, Wasser-/Elektrolythaushalt, Säure-Basen-Haushalt und Hormonausschüttung (Renin, Erythropoetin).",level:1,lesson:"Anatomie & Funktionen der Niere",theme:"niere"},{q:"Welches Hormon produzieren die Nieren, das die Bildung roter Blutkörperchen anregt?",opts:["Renin","Aldosteron","Erythropoetin","Kortisol"],correct:2,explanation:"Die Nieren schütten Erythropoetin aus, das die Bildung von Erythrozyten im Knochenmark stimuliert. Fehlt dieses Hormon (z.B. bei Nierenversagen), entsteht Anämie.",level:1,lesson:"Anatomie & Funktionen der Niere",theme:"niere"},{q:"Wie viele Nephrone enthält eine einzelne Niere?",opts:["ca. 10.000","ca. 100.000","ca. 1–1,5 Millionen","ca. 10 Millionen"],correct:2,explanation:"Jede Niere enthält etwa 1–1,5 Millionen Nephrone. Beide Nieren zusammen haben ca. 2–3 Millionen Nephrone — die funktionellen Grundeinheiten der Harnbildung.",level:1,lesson:"Nephrone & Urinbildung",theme:"niere"},{q:"Ab welcher Füllmenge entsteht bei einem gesunden Erwachsenen Harndrang?",opts:["50–100 ml","150–300 ml","400–500 ml","600–800 ml"],correct:1,explanation:"Harndrang entsteht ab etwa 150–300 ml Blasenfüllung. Die maximale Kapazität der Harnblase liegt bei 400–600 ml.",level:1,lesson:"Ableitende Harnwege & Miktionsreflex",theme:"niere"},{q:"Was versteht man unter Harninkontinenz?",opts:["Häufiges, aber kontrollierbares Wasserlassen","Unfreiwilliger Harnverlust zu unpassenden Zeiten oder Orten","Zu seltenes Wasserlassen","Schmerzen beim Wasserlassen"],correct:1,explanation:"Harninkontinenz = unfreiwilliges Abgehen von Urin an unpassenden Orten oder Zeiten, mindestens 2x/Monat (Norton 1999). Laut ICS: Symptom des unfreiwilligen Urinverlusts jeglichen Ausmaßes. Kein eigenständiges Krankheitsbild, sondern ein Symptom!",level:1,lesson:"Harninkontinenz — Definition & Formen",theme:"niere"},{q:"Welche Form der Inkontinenz tritt typischerweise beim Husten, Niesen oder Lachen auf?",opts:["Dranginkontinenz","Reflexinkontinenz","Belastungsinkontinenz","Funktionelle Inkontinenz"],correct:2,explanation:"Belastungsinkontinenz (Stressinkontinenz): Harnabgang bei körperlicher Belastung wie Husten, Niesen, Lachen (Grad I). Ursache: geschwächte Beckenbodenmuskulatur.",level:1,lesson:"Inkontinenzformen im Detail",theme:"niere"},{q:"Was ist das Ziel des nationalen Expertenstandards zur Förderung der Harnkontinenz?",opts:["Alle Patienten mit Inkontinenz zu katheterisieren","Harnkontinenz bei jedem Pflegebedürftigen zu erhalten oder zu fördern","Nur die Dokumentation der Inkontinenz","Ausschließlich Medikamente einzusetzen"],correct:1,explanation:"Der Expertenstandard geht davon aus, dass bei jedem Pflegebedürftigen die Harnkontinenz erhalten oder gefördert werden kann. Eine identifizierte Inkontinenz wird beseitigt, reduziert oder kompensiert.",level:1,lesson:"Expertenstandard & Pflege bei Inkontinenz",theme:"niere"},{q:"Welche zwei Strukturen bilden das Nierenkörperchen?",opts:["Tubulus und Sammelrohr","Glomerulus (Kapillarknäuel) und Bowman-Kapsel","Henle-Schleife und distaler Tubulus","Nierenrinde und Nierenmark"],correct:1,explanation:"Das Nierenkörperchen besteht aus dem Glomerulus (Kapillarknäuel) und der Bowman-Kapsel. Hier wird der Primärharn gebildet — bis zu 180 Liter pro Tag, der im Tubulus auf ca. 1,5–2 Liter konzentriert wird.",level:2,lesson:"Nephrone & Urinbildung",theme:"niere"},{q:"Welcher Muskel ist für die Blasenentleerung verantwortlich und welches Nervensystem innerviert ihn?",opts:["M. sphincter urethrae — Sympathikus","M. detrusor vesicae — Parasympathikus","M. levator ani — Sympathikus","M. detrusor vesicae — somatisches Nervensystem"],correct:1,explanation:"Der M. detrusor vesicae (Harnblasenmuskel) wird vom Parasympathikus (S2–S4) innerviert: Kontraktion → Miktion. Der Sympathikus (L1–L3) hemmt den Detrusor → Kontinenz.",level:2,lesson:"Ableitende Harnwege & Miktionsreflex",theme:"niere"},{q:"Ab welchem Lebensjahr ist die bewusste Kontrolle der Blasenentleerung durch das Gehirn möglich?",opts:["Ab dem 1. Lebensjahr","Ab dem 3. Lebensjahr","Ab dem 6. Lebensjahr","Ab der Pubertät"],correct:1,explanation:"Ab dem 3. Lebensjahr ist eine Steuerung des Miktionsreflexes durch das Miktionszentrum im Gehirn möglich. Vorher: rein reflektorisch über das Rückenmark — deshalb brauchen Säuglinge Windeln.",level:2,lesson:"Ableitende Harnwege & Miktionsreflex",theme:"niere"},{q:"Was ist die Ursache der Dranginkontinenz?",opts:["Schwäche der Beckenbodenmuskulatur","Überaktivität der Blasenmuskulatur — unkontrollierte Detrusorkontraktionen","Nervenschaden durch Rückenmarkverletzung","Prostatavergrößerung"],correct:1,explanation:"Dranginkontinenz = Überaktivität der Blasenmuskulatur. Der Detrusor kontrahiert unkontrolliert, obwohl der Verschlussmechanismus der Harnröhre intakt ist. Ursachen: neurologische Erkrankungen, Blasenentzündung, psychische Ursachen.",level:2,lesson:"Inkontinenzformen im Detail",theme:"niere"},{q:"Was versteht man unter chronischer Harnretention (früher: Überlaufinkontinenz)?",opts:["Zu häufiges Wasserlassen","Überdehnung des Blasenmuskels durch Restharn bei Abflussbehinderung","Vollständiges Fehlen von Harndrang","Nächtliches Einnässen bei Kindern"],correct:1,explanation:"Chronische Harnretention: Der Blasenmuskel überdehnt sich durch angesammelten Restharn bei Abflussbehinderung (z.B. Prostatahyperplasie, Blasenstein). Es kommt zu unfreiwilligem Verlust kleiner Harnmengen.",level:2,lesson:"Inkontinenzformen im Detail",theme:"niere"},{q:"Welches Hilfsmittel wird beim Assessment der Inkontinenz eingesetzt, um Belastungs- von Dranginkontinenz zu unterscheiden?",opts:["Braden-Skala","Barthel-Index","Inkontinenzfragebogen nach Gaudenz","Glasgow Coma Scale"],correct:2,explanation:"Der Inkontinenzfragebogen nach Gaudenz ist ein standardisiertes Assessmentinstrument zur Differenzierung zwischen Belastungs- und Dranginkontinenz. Er erfasst Häufigkeit, Menge und Situationen des Harnverlusts.",level:2,lesson:"Expertenstandard & Pflege bei Inkontinenz",theme:"niere"},{q:"Welche der folgenden Angaben gehört NICHT zur Inkontinenzanamnese nach dem Expertenstandard?",opts:["Trinkverhalten und -gewohnheiten","Familienstand und Beruf","Aktuelle Medikation","Psychosoziale Auswirkungen und Leidensdruck"],correct:1,explanation:"Familienstand und Beruf gehören nicht zu den spezifischen Inhalten der Inkontinenzanamnese. Relevant sind: Trinkgewohnheiten, Medikation, Ausscheidungsgewohnheiten, Mobilität, Leidensdruck, Hilfsmittel, Erkrankungen und bei Frauen Geburtsverlauf.",level:2,lesson:"Expertenstandard & Pflege bei Inkontinenz",theme:"niere"},{q:"⚠️ FALLE: Was ist der Unterschied zwischen Primärharn und Sekundärharn (Endharn)?",opts:["Beide sind identisch in Menge und Zusammensetzung","Primärharn ~180 L/Tag — durch Rückresorption in Tubuli entsteht Sekundärharn ~1,5 L/Tag","Primärharn enthält Eiweiße, Sekundärharn nicht","Sekundärharn entsteht im Glomerulus"],correct:1,explanation:"FALLE! Im Glomerulus werden täglich ~180 Liter Primärharn (Ultrafiltrat) gebildet. In den Nierenkanälchen (Tubuli) werden 99% rückresorbiert (Wasser, Elektrolyte, Glukose) → ~1,5–2 L Sekundärharn (Endharn/Urin).",level:3,lesson:"Nephrone & Urinbildung",theme:"niere"},{q:"Welche Nervenverbindungen sind am Miktionsreflex beim Erwachsenen beteiligt? (komplett)",opts:["Nur Parasympathikus und Rückenmark","Miktionszentrum Großhirn, Hirnstamm, Rückenmark, sakrales Reflexzentrum, N. hypogastricus, N. pelvicus, N. pudendus","Nur N. pudendus und N. pelvicus","Sympathikus und Parasympathikus ohne kortikale Kontrolle"],correct:1,explanation:"Beim Erwachsenen sind beteiligt: (1) Miktionszentrum im Großhirn, (2) Miktionszentrum im Hirnstamm, (3) Rückenmark, (4) sakrales Reflexzentrum, (5) N. hypogastricus (Sympathikus L1–L3), (6) N. pelvicus (Parasympathikus S2–S4), (7) N. pudendus (äußerer Sphinkter).",level:3,lesson:"Ableitende Harnwege & Miktionsreflex",theme:"niere"},{q:"Was ist der Unterschied zwischen Reflexinkontinenz und funktioneller Inkontinenz?",opts:["Kein Unterschied — beide sind neurologisch","Reflexinkontinenz: Nervenstörung der Blase/Schließmuskeln. Funktionelle Inkontinenz: Ursache liegt NICHT im Urogenitaltrakt (Demenz, Mobilität)","Funktionelle Inkontinenz entsteht durch Beckenbodendefekte","Reflexinkontinenz ist nur bei Frauen möglich"],correct:1,explanation:"Reflexinkontinenz: neurogene Störung der Blase (Rückenmarkschädigung, MS, Parkinson) → kein willentlicher Harnverlust möglich. Funktionelle Inkontinenz: Urogenitaltrakt intakt, aber Demenz, eingeschränkte Mobilität oder Depressionen verhindern rechtzeitigen Gang zur Toilette.",level:3,lesson:"Inkontinenzformen im Detail",theme:"niere"},{q:"⚠️ FALLE: Welche Therapie ist bei Belastungsinkontinenz Grad III indiziert?",opts:["Nur Beckenbodentraining","Nur medikamentöse Therapie","Konservative Therapie nicht mehr ausreichend — operative Therapie (Beckenbodenschwäche mit Blasensenkung)","Elektrostimulation allein"],correct:2,explanation:"FALLE! Grad I+II: konservative Therapie (Beckenbodentraining, Pessartherapie, Biofeedback). Grad III (Harnverlust im Liegen): operative Therapie bei Beckenbodenschwäche mit Blasensenkung und Senkung der inneren Geschlechtsorgane ist oft indiziert.",level:3,lesson:"Inkontinenzformen im Detail",theme:"niere"},{q:"Welche Aufgabe hat das Blasenfüllungszentrum im Miktionszentrum des Gehirns?",opts:["Es aktiviert den Parasympathikus → Miktion","Es hemmt die parasympathischen Fasern im Rückenmark → kein Detrusorkontraktionen + erhöhte Sphinkterspannung → Kontinenz","Es koordiniert nur den N. pudendus","Es sendet Signale direkt an den Glomerulus"],correct:1,explanation:"Das Blasenfüllungszentrum hemmt die parasympathischen Fasern im Rückenmark → keine Detrusorkontraktion, erhöhte Sphinkterspannung → Kontinenz (Harn anhalten). Das Blasenentleerungszentrum macht das Gegenteil: Parasympathikus aktiviert → Detrusor spannt an → Miktion.",level:3,lesson:"Ableitende Harnwege & Miktionsreflex",theme:"niere"},{q:"Was versteht man unter dem Renin-Angiotensin-System in Bezug auf die Nierenfunktion?",opts:["Renin bildet direkt Urin","Die Nieren bilden Renin bei Blutdruckabfall → Aktivierung der Angiotensin-Kaskade → Blutdrucksteigerung","Renin ist identisch mit Erythropoetin","Renin reguliert nur den pH-Wert"],correct:1,explanation:"Die Nieren bilden bei Blutdruckabfall das Hormon Renin → Renin aktiviert Angiotensin I → Angiotensin II (Vasokonstriktion, Aldosteron-Ausschüttung → Na+/Wasser-Retention) → Blutdrucksteigerung. Wichtig für Hypertonie-Therapie (ACE-Hemmer)!",level:3,lesson:"Anatomie & Funktionen der Niere",theme:"niere"},{q:"⚠️ KLAUSURFALLE: Was ist der pH-Wert des Blutes, den die Nieren regulieren, und welches Organ arbeitet dabei zusammen?",opts:["pH 6,0–7,0 — mit der Leber","pH 7,37–7,4 — mit der Lunge (über CO₂-Ausscheidung)","pH 7,0–7,2 — mit dem Pankreas","pH 7,4–8,0 — nur die Nieren allein"],correct:1,explanation:"Der physiologische pH-Wert des Blutes beträgt 7,37–7,4. Die Nieren regulieren den Säure-Basen-Haushalt durch H⁺-Ausscheidung und HCO₃⁻-Rückresorption. Die Lunge arbeitet über CO₂-Ausscheidung zusammen (respiratorische Kompensation).",level:3,lesson:"Anatomie & Funktionen der Niere",theme:"niere"}]},Rf={dekubitus:{"Definition & Expertenstandard":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,160,160,.9)">🩺 Dekubitus · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Definition & Expertenstandard</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Was ist ein Dekubitus — und welche Pflichten leitet der Expertenstandard 2017 daraus ab?</div>
  </div>
</div>

<div id="lsec-dek-def" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Internationale Definition (NPUAP/EPUAP)</div></div>
  <p class="lekt-prose">Ein <strong>Dekubitus</strong> (lat. decumbere = sich hinlegen) ist eine <strong>lokal begrenzte Schädigung der Haut und/oder des darunterliegenden Gewebes</strong>, in der Regel über knöchernen Vorsprüngen, infolge von <strong>Druck oder Druck in Kombination mit Scherkräften</strong>.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f87171">📐 Schlüsselbegriffe der Definition</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px">
      ${[["Druck","Kraft die senkrecht auf Gewebe wirkt → Kompression der Blutgefäße → Ischämie","#f87171"],["Scherkräfte","Entgegengesetzt wirkende Kräfte → Gewebe wird verschoben → Gefäße abgeknickt","#fb923c"],["Knöcherne Vorsprünge","Kreuzbein, Ferse, Hüfte, Knöchel → zu wenig Polstergewebe","#fbbf24"],["Gewebsschädigung","Haut UND/ODER darunterliegendes Gewebe — oft tiefer als sichtbar!","#f87171"]].map(([e,t,r])=>`<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:12px">
        <div style="font-weight:700;font-size:.8rem;color:${r};margin-bottom:4px">${e}</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">${t}</div>
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-merkhilfe">💡 <div><strong>Merkhilfe:</strong> Ein Dekubitus ist KEIN Wundliegen — er ist eine vermeidbare Druckschädigung. Das Wort "infolge von Druck" ist juristisch relevant!</div></div>
</div>

<div id="lsec-dek-exp" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Expertenstandard 2017 — 6 Handlungsebenen</div></div>
  <p class="lekt-prose">Das DNQP (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege) definiert im <strong>Expertenstandard Dekubitusprophylaxe 2. Aktualisierung 2017</strong> sechs verbindliche Handlungsebenen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🏛️ 6 Handlungsebenen NEU (DNQP 2017)</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
      ${[["1","Einschätzungsebene","Wissen zur Dekubitusentstehung & Risikoeinschätzungskompetenz","#f87171"],["2","Informationsebene","Sektorenübergreifende Zusammenarbeit & Planungskompetenz","#fb923c"],["3","Beratungsebene","Informieren, beraten, schulen, anleiten","#fbbf24"],["4","Planungsebene","Bewegungsförderung","#4ade80"],["5","Organisationsebene","Druckverteilende Hilfsmittel","#60a5fa"],["6","Beurteilungsebene","Beurteilung der Dekubitusprophylaxe","#c084fc"]].map(([e,t,r,n])=>`<div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:rgba(255,255,255,.03);border-radius:11px;border-left:3px solid ${n}">
        <div style="width:28px;height:28px;border-radius:8px;background:${n}22;color:${n};font-weight:800;font-size:.8rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">${e}</div>
        <div><div style="font-weight:700;font-size:.8rem;color:${n}">${t}</div><div style="font-size:.72rem;color:var(--ink2)">${r}</div></div>
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Zielsetzung Expertenstandard</div>
    <strong>„Jeder dekubitusgefährdete Patient/Bewohner erhält eine Prophylaxe, die die Entstehung eines Dekubitus verhindert."</strong><br/>
    Ausnahmen: pflegerisch/medizinisch notwendige Prioritätensetzung oder informierte Entscheidung des Patienten.
  </div>
</div>

<div id="lsec-dek-einsch" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Systematische Einschätzung</div></div>
  <p class="lekt-prose">Die Einschätzung des Dekubitusrisikos ist <strong>zu Beginn jeden pflegerischen Auftrags</strong> durchzuführen. Risikoskalen (Braden, Norton, Waterlow) sind <strong>nur unterstützend</strong> — ein umfassendes klinisches Assessment ist Pflicht.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">⚠️ CAVE: Risikoskalen</div>
    <p style="font-size:.82rem;color:var(--ink2);line-height:1.6">Es konnte <strong style="color:#f87171">kein Hinweis gefunden werden</strong>, dass Risikoskalen allein die Dekubitusinzidenz senken. Skalen haben geringe Zuverlässigkeit (Interrater-Reliabilität). Sie sind nur ein Hilfsmittel — <strong>nie Ersatz für klinisches Urteilsvermögen!</strong></p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
      ${["Braden-Skala","Norton-Skala","Waterlow-Skala","Cubbin-Jackson-Skala"].map(e=>`<span style="background:rgba(251,191,36,.1);border:1px solid rgba(251,191,36,.25);border-radius:8px;padding:4px 10px;font-size:.72rem;color:var(--amber)">${e}</span>`).join("")}
    </div>
    <div style="margin-top:10px;font-size:.75rem;color:var(--ink3)">→ Altersbedingt nimmt die Druckwahrnehmung ab → seltener Positionswechsel. Auch Schmerzmittel, Psychopharmaka, Schlafmittel verringern die Druckwahrnehmung!</div>
  </div>
</div>

<div id="lsec-dek-braden" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Braden-Skala — 6 Kriterien im Detail</div></div>
  <p class="lekt-prose">Die <strong>Braden-Skala</strong> ist die international am häufigsten verwendete Risikoskala. Sie bewertet 6 Faktoren mit je 1–4 Punkten (Ausnahme: Reibung/Scherkräfte max. 3 Punkte). <strong>Niedrigerer Gesamtscore = höheres Risiko.</strong></p>

  <!-- SVG Braden-Skala visuelle -->
  <div class="lekt-card" style="padding:0;overflow:hidden">
    <div class="lekt-card-label" style="color:#fbbf24;padding:12px 16px 0">📊 Braden-Skala — 6 Kriterien & Scoring</div>
    <svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
      <defs>
        <linearGradient id="brHigh" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#4ade80"/><stop offset="100%" stop-color="#16a34a"/>
        </linearGradient>
        <linearGradient id="brMid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
        <linearGradient id="brLow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f87171"/><stop offset="100%" stop-color="#dc2626"/>
        </linearGradient>
        <filter id="brShadow"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="rgba(0,0,0,0.3)"/></filter>
      </defs>
      <rect width="560" height="340" fill="rgba(13,17,23,0.95)"/>

      <!-- En-tête colonnes scores -->
      <text x="220" y="20" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(248,113,113,0.8)">1 Pkt</text>
      <text x="305" y="20" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(251,191,36,0.8)">2 Pkt</text>
      <text x="390" y="20" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(96,165,250,0.8)">3 Pkt</text>
      <text x="475" y="20" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(74,222,128,0.8)">4 Pkt</text>
      <!-- Lignes séparatrices colonnes -->
      <line x1="178" y1="10" x2="178" y2="335" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <line x1="262" y1="10" x2="262" y2="335" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <line x1="347" y1="10" x2="347" y2="335" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <line x1="432" y1="10" x2="432" y2="335" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>

      ${[["👁️",`Sensorische
Wahrnehmung`,`Völlig
aufgehoben`,`Stark
eingeschränkt`,`Leicht
eingeschränkt`,`Nicht
beeinträchtigt`,"#f87171"],["💧",`Feuchtigkeit
der Haut`,`Konstant
nass`,`Oft
nass`,`Gelegentlich
nass`,`Selten
nass`,"#60a5fa"],["🏃","Aktivität","Bettlägerig",`Rollstuhl-
pflichtig`,`Geht
gelegentlich`,`Geht
regelmäßig`,"#4ade80"],["🔄","Mobilität",`Komplett
immobil`,`Stark
eingeschränkt`,`Leicht
eingeschränkt`,`Keine
Einschränkung`,"#c084fc"],["🍎","Ernährung",`Sehr
schlechte`,`Unzu-
reichende`,`Adäquate
Ernährung`,"Ausgezeichnete","#fbbf24"],["⚡",`Reibung &
Scherkräfte`,`Problem
(1 Pkt)`,`Potential.
Problem (2)`,`Kein
Problem (3)`,"—","#fb923c"]].map(([e,t,r,n,i,l,s],a)=>{const o=35+a*50,f=[r,n,i,l],v=["rgba(248,113,113,0.15)","rgba(251,191,36,0.12)","rgba(96,165,250,0.12)","rgba(74,222,128,0.15)"],g=["rgba(248,113,113,0.4)","rgba(251,191,36,0.35)","rgba(96,165,250,0.35)","rgba(74,222,128,0.4)"],m=["#f87171","#fbbf24","#60a5fa","#4ade80"];return`
        <!-- Ligne ${a+1} fond alterné -->
        <rect x="0" y="${o-2}" width="560" height="48" fill="${a%2===0?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.1)"}"/>
        <!-- Critère label -->
        <text x="16" y="${o+13}" font-size="16" font-family="DM Sans">${e}</text>
        <text x="38" y="${o+11}" font-size="8" font-family="DM Sans" font-weight="700" fill="${s}">${t.split("\\n")[0]}</text>
        <text x="38" y="${o+22}" font-size="7.5" font-family="DM Sans" fill="${s}" opacity="0.7">${t.split("\\n")[1]||""}</text>
        <!-- Cellules scores -->
        ${f.map((p,k)=>p==="—"?`<text x="${179+k*85+42}" y="${o+24}" text-anchor="middle" font-size="9" font-family="DM Sans" fill="rgba(255,255,255,0.2)">—</text>`:`<rect x="${179+k*85+4}" y="${o+4}" width="74" height="38" rx="7" fill="${v[k]}" stroke="${g[k]}" stroke-width="1"/>
           <text x="${179+k*85+41}" y="${o+20}" text-anchor="middle" font-size="7" font-family="DM Sans" font-weight="700" fill="${m[k]}">${p.split("\\n")[0]}</text>
           <text x="${179+k*85+41}" y="${o+31}" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="${m[k]}" opacity="0.75">${p.split("\\n")[1]||""}</text>`).join("")}`}).join("")}

      <!-- Barre de score total en bas -->
      <rect x="0" y="305" width="560" height="35" fill="rgba(0,0,0,0.5)"/>
      <!-- Gradient risque -->
      <defs><linearGradient id="riskBar" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#dc2626"/><stop offset="40%" stop-color="#f97316"/>
        <stop offset="65%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#4ade80"/>
      </linearGradient></defs>
      <rect x="10" y="312" width="380" height="16" rx="8" fill="url(#riskBar)" opacity="0.85"/>
      <!-- Marqueurs score -->
      ${[[10,"6",""],[72,"9",`Sehr
hoch`],[133,"12","Hoch"],[194,"14","Mittel"],[255,"18","Gering"],[340,"23+","Kein"]].map(([e,t,r])=>`<line x1="${e+10}" y1="310" x2="${e+10}" y2="330" stroke="rgba(255,255,255,0.6)" stroke-width="1"/>
         <text x="${e+10}" y="308" text-anchor="middle" font-size="7" font-family="DM Sans" font-weight="700" fill="white">${t}</text>`).join("")}
      <text x="400" y="318" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(248,113,113,0.9)">≤ 9 = SEHR HOCH</text>
      <text x="400" y="329" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(251,191,36,0.9)">10–14 = HOCH/MITTEL</text>
    </svg>
  </div>

  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Klausur-FALLE: Braden-Skala Scoring</div>
    <strong>Niedrigerer Score = HÖHERES Risiko!</strong> Maximalpunktzahl = 23 Punkte (kein Risiko). Kritischer Grenzwert: ≤ 18 Punkte = erhöhtes Risiko. Ab ≤ 9 Punkte = sehr hohes Risiko. <strong>Reibung/Scherkräfte: max. 3 Punkte</strong> (kein 4er!). Gesamtpunktzahl: 6–23.
  </div>
  <div class="lekt-merkhilfe">💡 <div><strong>6 Kriterien merken:</strong> <strong>S</strong>ensorik · <strong>F</strong>euchtigkeit · <strong>A</strong>ktivität · <strong>M</strong>obilität · <strong>E</strong>rnährung · <strong>R</strong>eibung → <em>"SFAMER"</em></div></div>
</div>
</div></div>`,"Risikofaktoren & Entstehung":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,160,160,.9)">🩺 Dekubitus · Lektion 2</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Risikofaktoren & Entstehung</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Warum entsteht ein Dekubitus — und wer ist besonders gefährdet?</div>
</div>

<div id="lsec-dek-risi" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Risikofaktoren laut Expertenstandard</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f87171">⚠️ Die 3 wichtigsten Risikofaktoren</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px">
      ${[["🚶","Beeinträchtigte Mobilität","Immobilität durch Schienen, Gips, Lähmung, Sedierung → kein Positionswechsel → anhaltender Druck","#f87171"],["🩸","Gestörte Durchblutung","Arteriosklerose, Diabetes, Schock → Gewebe wird nicht ausreichend versorgt → erhöhte Dekubitusanfälligkeit","#fb923c"],["🧴","Beeinträchtigter Hautzustand","Feuchte Haut (Inkontinenz, Schweiß), vorhandener Dekubitus, Hauterkrankungen → Schutzfunktion ↓","#fbbf24"]].map(([e,t,r,n])=>`<div style="display:flex;gap:12px;padding:12px 14px;background:rgba(255,255,255,.02);border-radius:12px;border:1px solid ${n}22">
        <div style="font-size:1.4rem;flex-shrink:0">${e}</div>
        <div><div style="font-weight:700;font-size:.82rem;color:${n};margin-bottom:3px">${t}</div><div style="font-size:.73rem;color:var(--ink2);line-height:1.5">${r}</div></div>
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#fb923c">📋 Weitere Risikofaktoren</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:4px">
      ${["Verminderte sensorische Wahrnehmung (PNP, Analgetika)","Diabetes mellitus","Schlechter AZ/EZ","Hautfeuchtigkeit ↑ (Wärmestau)","Mangelernährung","Medizinische Geräte (Tuben, Sonden, Trachealkanülen)","Psychopharmaka / Sedativa","Unwissenheit des Pflegepersonals"].map(e=>`<div style="font-size:.72rem;color:var(--ink2);padding:6px 10px;background:rgba(255,255,255,.02);border-radius:8px;border:1px solid rgba(255,255,255,.06)">• ${e}</div>`).join("")}
    </div>
  </div>
</div>

<div id="lsec-dek-ents" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Dekubitusentstehung — 2 Theorien</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🔬 Theorie 1: Ischämie</div>
    <!-- SVG Ischämie RÉALISTE — coupe anatomique -->
    <svg viewBox="0 0 560 310" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;margin:8px 0;border-radius:14px">
      <defs>
        <linearGradient id="gMat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#64748b"/>
        </linearGradient>
        <linearGradient id="gEpi2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f4c5a0"/><stop offset="100%" stop-color="#e8a878"/>
        </linearGradient>
        <linearGradient id="gDerm2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c97060"/><stop offset="100%" stop-color="#a54838"/>
        </linearGradient>
        <linearGradient id="gSub2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0c845"/><stop offset="100%" stop-color="#c8980a"/>
        </linearGradient>
        <linearGradient id="gMus2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c43858"/><stop offset="100%" stop-color="#8a1830"/>
        </linearGradient>
        <linearGradient id="gBon2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8d8b0"/><stop offset="60%" stop-color="#caba80"/><stop offset="100%" stop-color="#a89050"/>
        </linearGradient>
        <radialGradient id="gIscha2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#dc2626" stop-opacity="0.95"/>
          <stop offset="50%" stop-color="#991b1b" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#450a0a" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="gVeinOk" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#fca5a5"/><stop offset="100%" stop-color="#dc2626"/>
        </radialGradient>
        <radialGradient id="gVeinBad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#7f1d1d"/><stop offset="100%" stop-color="#450a0a"/>
        </radialGradient>
        <filter id="glow2"><feGaussianBlur stdDeviation="4" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
        <filter id="shadow2"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.5)"/></filter>
        <marker id="arrP" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto">
          <polygon points="0,0 9,4.5 0,9" fill="#3b82f6"/>
        </marker>
        <marker id="arrO" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <polygon points="0,0 8,4 0,8" fill="#f97316"/>
        </marker>
        <clipPath id="clipBody"><rect x="30" y="45" width="390" height="255"/></clipPath>
      </defs>

      <!-- ━━━ FOND ━━━ -->
      <rect width="560" height="310" rx="14" fill="#0c1520"/>
      <!-- Grille subtile -->
      <line x1="0" y1="45" x2="560" y2="45" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

      <!-- ━━━ TITRE GAUCHE ━━━ -->
      <text x="16" y="28" font-size="11" font-family="DM Sans" font-weight="800" fill="#60a5fa">Querschnitt: Dekubitusentstehung</text>
      <text x="16" y="40" font-size="8.5" font-family="DM Sans" fill="rgba(148,163,184,0.7)">Druck zwischen Knochen und Unterlage → Ischämie → Nekrose</text>

      <!-- ━━━ MATRATZE / AUFLAGE ━━━ -->
      <rect x="30" y="45" width="390" height="18" rx="5" fill="url(#gMat)" filter="url(#shadow2)"/>
      <!-- Texture foam -->
      <path d="M35 54 Q50 50 65 54 Q80 58 95 54 Q110 50 125 54 Q140 58 155 54 Q170 50 185 54 Q200 58 215 54 Q230 50 245 54 Q260 58 275 54 Q290 50 305 54 Q320 58 335 54 Q350 50 365 54 Q380 58 395 54 Q408 50 415 54" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.2"/>
      <text x="225" y="57" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="700" fill="rgba(255,255,255,0.85)">Matratze / Unterlage</text>

      <!-- ━━━ FLÈCHES DRUCK ━━━ -->
      <path d="M155 63 L155 78" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrP)"/>
      <path d="M215 63 L215 78" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrP)"/>
      <path d="M275 63 L275 78" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" marker-end="url(#arrP)"/>
      <text x="80" y="74" font-size="9.5" font-family="DM Sans" font-weight="800" fill="#3b82f6">↓ Druck</text>

      <!-- ━━━ ÉPIDERME ━━━ -->
      <!-- Légèrement comprimé au centre -->
      <path d="M30 80 Q90 77 150 82 Q185 85 215 87 Q245 85 280 82 Q330 77 420 80 L420 100 Q330 97 280 100 Q245 103 215 105 Q185 103 150 100 Q90 97 30 100 Z" fill="url(#gEpi2)"/>
      <!-- Texture fine surface peau -->
      <path d="M35 88 Q55 86 75 88 Q95 90 115 88 Q135 86 155 88" fill="none" stroke="rgba(255,215,185,0.35)" stroke-width="1.2"/>
      <path d="M220 90 Q240 88 260 90 Q280 92 300 90 Q320 88 340 90" fill="none" stroke="rgba(255,215,185,0.3)" stroke-width="1"/>
      <!-- Micropoils -->
      <line x1="60" y1="80" x2="58" y2="75" stroke="rgba(200,150,100,0.4)" stroke-width="0.8"/>
      <line x1="100" y1="80" x2="99" y2="75" stroke="rgba(200,150,100,0.35)" stroke-width="0.8"/>
      <line x1="330" y1="80" x2="329" y2="75" stroke="rgba(200,150,100,0.4)" stroke-width="0.8"/>
      <line x1="370" y1="80" x2="369" y2="75" stroke="rgba(200,150,100,0.35)" stroke-width="0.8"/>
      <!-- Label -->
      <text x="435" y="93" font-size="9" font-family="DM Sans" font-weight="700" fill="#f5c8a0">Epidermis</text>
      <line x1="422" y1="91" x2="433" y2="91" stroke="#f5c8a0" stroke-width="1.2"/>

      <!-- ━━━ DERME ━━━ -->
      <path d="M30 100 Q90 97 150 100 Q185 103 215 105 Q245 103 280 100 Q330 97 420 100 L420 152 Q330 147 280 150 Q245 152 215 154 Q185 152 150 150 Q90 147 30 152 Z" fill="url(#gDerm2)"/>
      <!-- Fibres collagène -->
      <path d="M35 113 Q90 110 145 113 Q200 116 255 113 Q310 110 365 113 Q395 115 418 113" fill="none" stroke="rgba(220,140,110,0.3)" stroke-width="1.5"/>
      <path d="M35 127 Q90 124 145 127 Q200 130 255 127 Q310 124 365 127 Q395 129 418 127" fill="none" stroke="rgba(220,140,110,0.25)" stroke-width="1.5"/>
      <path d="M35 140 Q90 137 145 140 Q200 143 255 140 Q310 137 365 140 Q395 142 418 140" fill="none" stroke="rgba(220,140,110,0.2)" stroke-width="1.2"/>

      <!-- CAPILLAIRES SAINS (gauche) -->
      <ellipse cx="85" cy="118" rx="11" ry="7" fill="url(#gVeinOk)" stroke="#ef4444" stroke-width="1.5"/>
      <ellipse cx="85" cy="118" rx="7" ry="4" fill="rgba(254,226,226,0.5)"/>
      <!-- Globules rouges -->
      <ellipse cx="82" cy="118" rx="3" ry="2" fill="#dc2626" opacity="0.9"/>
      <ellipse cx="89" cy="117" rx="2.5" ry="1.8" fill="#dc2626" opacity="0.8"/>
      <text x="68" y="134" font-size="7" font-family="DM Sans" fill="rgba(74,222,128,0.9)" font-weight="700">✓ durchblutet</text>

      <!-- CAPILLAIRE COMPRIMÉ (centre, aplati) -->
      <ellipse cx="215" cy="125" rx="9" ry="2.5" fill="url(#gVeinBad)" stroke="#991b1b" stroke-width="1.5">
        <animate attributeName="ry" values="2.5;1.2;2.5" dur="1.6s" repeatCount="indefinite"/>
      </ellipse>
      <text x="192" y="140" font-size="7.5" font-family="DM Sans" fill="#f87171" font-weight="800">⚠ komprimiert!</text>

      <!-- CAPILLAIRE SAIN (droite) -->
      <ellipse cx="345" cy="118" rx="11" ry="7" fill="url(#gVeinOk)" stroke="#ef4444" stroke-width="1.5"/>
      <ellipse cx="345" cy="118" rx="7" ry="4" fill="rgba(254,226,226,0.5)"/>
      <ellipse cx="342" cy="118" rx="3" ry="2" fill="#dc2626" opacity="0.9"/>

      <!-- Label dermis -->
      <text x="435" y="130" font-size="9" font-family="DM Sans" font-weight="700" fill="#d4836a">Dermis</text>
      <line x1="422" y1="128" x2="433" y2="128" stroke="#d4836a" stroke-width="1.2"/>

      <!-- ━━━ SUBCUTIS ━━━ -->
      <path d="M30 152 Q90 147 150 150 Q185 152 215 154 Q245 152 280 150 Q330 147 420 152 L420 205 Q330 200 280 203 Q245 205 215 207 Q185 205 150 203 Q90 200 30 205 Z" fill="url(#gSub2)"/>
      <!-- Adipocytes — lobules graisseux réalistes -->
      <g opacity="0.75">
        ${[[55,170,9],[75,182,8],[95,172,10],[115,180,8],[135,170,9],[58,192,7],[85,195,9],[160,173,8],[185,168,9],[215,170,8],[215,185,7],[245,173,9],[265,178,8],[290,168,9],[310,180,8],[330,170,9],[355,178,8],[375,172,9],[395,182,8]].map(([e,t,r])=>`<ellipse cx="${e}" cy="${t}" rx="${r}" ry="${Math.round(r*.8)}" fill="rgba(245,195,50,0.45)" stroke="rgba(190,145,5,0.5)" stroke-width="0.8"/>
        <ellipse cx="${e-r*.3}" cy="${t-r*.3}" rx="${r*.35}" ry="${r*.25}" fill="rgba(255,230,120,0.3)"/>`).join("")}
      </g>
      <text x="435" y="182" font-size="9" font-family="DM Sans" font-weight="700" fill="#d4a010">Subcutis</text>
      <line x1="422" y1="180" x2="433" y2="180" stroke="#d4a010" stroke-width="1.2"/>

      <!-- ━━━ MUSCLE ━━━ -->
      <path d="M30 205 Q90 200 150 203 Q185 205 215 207 Q245 205 280 203 Q330 200 420 205 L420 245 Q330 241 280 243 Q245 245 215 246 Q185 245 150 243 Q90 241 30 245 Z" fill="url(#gMus2)"/>
      <!-- Fibres musculaires (stries) -->
      <path d="M33 213 Q140 210 248 213 Q355 216 418 213" fill="none" stroke="rgba(220,100,120,0.35)" stroke-width="2"/>
      <path d="M33 222 Q140 219 248 222 Q355 225 418 222" fill="none" stroke="rgba(220,100,120,0.3)" stroke-width="2"/>
      <path d="M33 232 Q140 229 248 232 Q355 235 418 232" fill="none" stroke="rgba(220,100,120,0.25)" stroke-width="1.8"/>
      <!-- Fascia superficiel -->
      <path d="M30 205 Q90 200 150 203 Q185 205 215 207 Q245 205 280 203 Q330 200 420 205" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
      <text x="435" y="228" font-size="9" font-family="DM Sans" font-weight="700" fill="#c43858">Muskel</text>
      <line x1="422" y1="226" x2="433" y2="226" stroke="#c43858" stroke-width="1.2"/>

      <!-- ━━━ OS (Kreuzbein — proéminent) ━━━ -->
      <!-- Corps principal -->
      <path d="M110 245 Q160 237 215 235 Q270 237 320 245 L322 290 Q270 298 215 300 Q160 298 108 290 Z" fill="url(#gBon2)" filter="url(#shadow2)"/>
      <!-- Trabécules osseuses internes -->
      <path d="M125 255 Q170 251 215 255 Q260 259 305 255" fill="none" stroke="rgba(155,125,65,0.45)" stroke-width="1.2"/>
      <path d="M120 265 Q168 261 215 265 Q262 269 310 265" fill="none" stroke="rgba(155,125,65,0.4)" stroke-width="1.2"/>
      <path d="M118 275 Q167 271 215 275 Q263 279 312 275" fill="none" stroke="rgba(155,125,65,0.35)" stroke-width="1"/>
      <path d="M118 285 Q167 281 215 285 Q263 289 312 285" fill="none" stroke="rgba(155,125,65,0.3)" stroke-width="1"/>
      <!-- Cortex osseux (bord plus dense) -->
      <path d="M110 245 Q160 237 215 235 Q270 237 320 245" fill="none" stroke="rgba(220,200,150,0.7)" stroke-width="2.5"/>
      <!-- Périoste -->
      <path d="M108 244 Q160 235 215 233 Q270 235 322 244" fill="none" stroke="rgba(240,220,170,0.4)" stroke-width="1"/>
      <!-- Text os -->
      <text x="215" y="268" text-anchor="middle" font-size="10" font-family="DM Sans" font-weight="800" fill="rgba(60,45,10,0.95)">Os (Kreuzbein)</text>
      <text x="215" y="280" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(80,60,20,0.7)">Os sacrum — knöcherner Vorsprung</text>
      <text x="435" y="268" font-size="9" font-family="DM Sans" font-weight="700" fill="#c8b880">Knochen</text>
      <line x1="422" y1="266" x2="433" y2="266" stroke="#c8b880" stroke-width="1.2"/>

      <!-- ━━━ ZONE ISCHÉMIE CENTRALE ━━━ -->
      <!-- Halo extérieur pulsant -->
      <ellipse cx="215" cy="178" rx="55" ry="72" fill="url(#gIscha2)" filter="url(#glow2)">
        <animate attributeName="opacity" values="0.7;0.35;0.7" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="rx" values="55;60;55" dur="2.2s" repeatCount="indefinite"/>
      </ellipse>
      <!-- Cœur nécrotique sombre -->
      <ellipse cx="215" cy="182" rx="24" ry="32" fill="rgba(50,0,0,0.82)" stroke="rgba(130,10,10,0.75)" stroke-width="1.8">
        <animate attributeName="opacity" values="0.82;0.6;0.82" dur="2.2s" repeatCount="indefinite"/>
      </ellipse>
      <!-- Texte zone -->
      <text x="215" y="176" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="800" fill="#fca5a5">Ischämie</text>
      <text x="215" y="188" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(252,165,165,0.85)">Hypoxie → Nekrose</text>

      <!-- ━━━ FLÈCHE CONTRE-PRESSION (os remonte) ━━━ -->
      <path d="M215 232 L215 218" stroke="#f97316" stroke-width="3" stroke-linecap="round" marker-end="url(#arrO)"/>
      <text x="222" y="228" font-size="8" font-family="DM Sans" font-weight="700" fill="#f97316">Gegendruck</text>

      <!-- ━━━ LÉGENDE BAS ━━━ -->
      <rect x="0" y="292" width="560" height="18" rx="0 0 14 14" fill="rgba(0,0,0,0.45)"/>
      <text x="280" y="304" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(148,163,184,0.8)">Druck ↓ + Gegendruck ↑  →  Gefäßkompression  →  Ischämie  →  Hypoxie  →  Zelluntergang  →  Nekrose</text>
    </svg>
    <p style="font-size:.78rem;color:var(--ink2);line-height:1.6">Druck zwischen Knochen und Auflage → komprimiert Gefäße → <strong>minderdurchblutetes Gewebe</strong> → Nährstoffmangel (Hypoxie) → Anreicherung von Stoffwechselprodukten → <strong>Zelluntergang</strong>. Außerdem: blockierter Lymphabfluss → anaerober Metabolismus.</p>
  </div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#c084fc">🔬 Theorie 2: Direktschädigung durch Deformation</div>
    <p style="font-size:.78rem;color:var(--ink2);line-height:1.6">Durch Kompression wird das Muskel- und Subcutangewebe <strong>gequetscht und deformiert</strong>. Muskelzellen sind sehr empfindlich gegenüber mechanischer Verformung. Auf zellulärer Ebene wird das <strong>Zytoskelett zerstört</strong> → Nekrose. Dies beginnt <strong>tief im Gewebe</strong> — oft bevor die Haut sichtbare Schäden zeigt!</p>
    <div class="lekt-klausur" style="margin:10px 0 0">
      <div class="lekt-klausur-lbl">⏱️ Zeitliche Entstehung — KLAUSUR!</div>
      <strong>Liegende Personen:</strong> bereits nach <strong>1 Stunde</strong> Schäden möglich<br/>
      <strong>Sitzende Personen:</strong> weniger als <strong>1 Stunde</strong><br/>
      <strong>Hohe Risikogruppen:</strong> bereits nach <strong>10–20 Minuten</strong>!<br/>
      ⚠️ Zwischen initialer Schädigung und Sichtbarwerden: <strong>bis zu 2 Wochen</strong>!
    </div>
  </div>
</div>

<div id="lsec-dek-gruppe" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Risikogruppen</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">👥 Risikogruppen laut Expertenstandard</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
      ${[["#1 Akute Erkrankungen","Apoplexie (Schlaganfall), Herzinfarkt → plötzliche Immobilität","#f87171"],["Pflegebedürftigkeit","Multimorbidität, dauerhaft eingeschränkte Mobilität","#fb923c"],["Kinder","Säuglinge (Trachealkanülen, Sonden), neurologische Erkrankungen","#60a5fa"],["Intensivpatienten","Sedierung, medizinische Geräte, schlechter AZ/EZ","#c084fc"]].map(([e,t,r])=>`<div style="padding:10px;border-radius:10px;background:${r}11;border:1px solid ${r}33">
        <div style="font-size:.75rem;font-weight:700;color:${r};margin-bottom:4px">${e}</div>
        <div style="font-size:.7rem;color:var(--ink2);line-height:1.4">${t}</div>
      </div>`).join("")}
    </div>
  </div>
</div>
</div></div>`,"EPUAP Klassifikation Kat. I–IV":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,160,160,.9)">🩺 Dekubitus · Lektion 3</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">EPUAP Klassifikation — Kategorie I bis IV</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">European Pressure Ulcer Advisory Panel — die offizielle Klassifikation nach Schwere</div>
</div>

<div id="lsec-dek-klass" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">EPUAP Kategorien im Überblick</div></div>

  <!-- SVG Querschnitt Klassifikation -->
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f87171">📊 Tiefe der Schädigung — animiert</div>
    <svg viewBox="0 0 580 290" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;margin:6px 0;border-radius:12px">
      <defs>
        <linearGradient id="ep3Epi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f4c5a0"/><stop offset="100%" stop-color="#e8a878"/>
        </linearGradient>
        <linearGradient id="ep3Derm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c97060"/><stop offset="100%" stop-color="#a54838"/>
        </linearGradient>
        <linearGradient id="ep3Sub" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0c845"/><stop offset="100%" stop-color="#c8980a"/>
        </linearGradient>
        <linearGradient id="ep3Mus" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c43858"/><stop offset="100%" stop-color="#8a1830"/>
        </linearGradient>
        <linearGradient id="ep3Bon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e2d0a0"/><stop offset="100%" stop-color="#b0a060"/>
        </linearGradient>
        <!-- Nécroses par catégorie -->
        <radialGradient id="ep3Nek1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#dc2626" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#dc2626" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="ep3Nek2" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.4"/>
        </radialGradient>
        <radialGradient id="ep3Nek3" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#fb923c" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#c2410c" stop-opacity="0.3"/>
        </radialGradient>
        <radialGradient id="ep3Nek4" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e293b" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.5"/>
        </radialGradient>
        <filter id="ep3glow"><feGaussianBlur stdDeviation="3" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
      </defs>

      <!-- FOND -->
      <rect width="580" height="290" rx="12" fill="#0c1520"/>
      <!-- Titre -->
      <text x="290" y="22" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="800" fill="rgba(255,255,255,0.85)">EPUAP Klassifikation — Schädigungstiefe im Querschnitt</text>

      <!-- ══════════════════════════════════════════
           COUCHES ANATOMIQUES — 4 colonnes
      ══════════════════════════════════════════ -->
      <!-- Chaque colonne: x = 15 + col*140, largeur 120 -->

      <!-- ── COL 1: Kat I ── x=15..135 -->
      <!-- Épiderme intact mais rouge -->
      <rect x="15" y="35" width="120" height="22" rx="0" fill="url(#ep3Epi)"/>
      <!-- Rougeur en surface (érythème non blanchissant) -->
      <ellipse cx="75" cy="46" rx="38" ry="11" fill="rgba(220,38,38,0.55)" filter="url(#ep3glow)">
        <animate attributeName="opacity" values="0.75;0.4;0.75" dur="2s" repeatCount="indefinite"/>
      </ellipse>
      <!-- Dermis -->
      <rect x="15" y="57" width="120" height="40" fill="url(#ep3Derm)"/>
      <!-- Capillaires vasodilatés sous la rougeur -->
      <ellipse cx="60" cy="68" rx="8" ry="5" fill="rgba(239,68,68,0.7)" stroke="#dc2626" stroke-width="1"/>
      <ellipse cx="75" cy="72" rx="6" ry="4" fill="rgba(239,68,68,0.65)" stroke="#dc2626" stroke-width="1"/>
      <ellipse cx="90" cy="67" rx="7" ry="4.5" fill="rgba(239,68,68,0.7)" stroke="#dc2626" stroke-width="1"/>
      <!-- Subcutis -->
      <rect x="15" y="97" width="120" height="50" fill="url(#ep3Sub)"/>
      <!-- Adipocytes -->
      ${[[30,112,8],[50,118,7],[68,110,9],[87,117,8],[105,112,9],[125,119,7],[35,130,7],[55,127,8],[75,132,7],[95,128,8],[115,131,7]].map(([e,t,r])=>`<ellipse cx="${e}" cy="${t}" rx="${r}" ry="${Math.round(r*.75)}" fill="rgba(240,190,50,0.4)" stroke="rgba(185,140,5,0.45)" stroke-width="0.7"/>`).join("")}
      <!-- Muscle -->
      <rect x="15" y="147" width="120" height="35" fill="url(#ep3Mus)"/>
      <path d="M17 157 Q75 154 133 157" fill="none" stroke="rgba(210,90,110,0.35)" stroke-width="1.8"/>
      <path d="M17 167 Q75 164 133 167" fill="none" stroke="rgba(210,90,110,0.3)" stroke-width="1.8"/>
      <path d="M17 176 Q75 173 133 176" fill="none" stroke="rgba(210,90,110,0.25)" stroke-width="1.5"/>
      <!-- Os -->
      <rect x="15" y="182" width="120" height="40" fill="url(#ep3Bon)"/>
      <path d="M17 192 Q75 189 133 192" fill="none" stroke="rgba(150,120,60,0.4)" stroke-width="1"/>
      <path d="M17 203 Q75 200 133 203" fill="none" stroke="rgba(150,120,60,0.35)" stroke-width="1"/>

      <!-- ── COL 2: Kat II ── x=155..275 -->
      <rect x="155" y="35" width="120" height="22" rx="0" fill="url(#ep3Epi)"/>
      <rect x="155" y="57" width="120" height="40" fill="url(#ep3Derm)"/>
      <rect x="155" y="97" width="120" height="50" fill="url(#ep3Sub)"/>
      ${[[170,112,8],[190,118,7],[208,110,9],[227,117,8],[245,112,9],[265,119,7],[175,130,7],[195,127,8],[215,132,7],[235,128,8],[255,131,7]].map(([e,t,r])=>`<ellipse cx="${e}" cy="${t}" rx="${r}" ry="${Math.round(r*.75)}" fill="rgba(240,190,50,0.4)" stroke="rgba(185,140,5,0.45)" stroke-width="0.7"/>`).join("")}
      <rect x="155" y="147" width="120" height="35" fill="url(#ep3Mus)"/>
      <path d="M157 157 Q215 154 273 157" fill="none" stroke="rgba(210,90,110,0.35)" stroke-width="1.8"/>
      <path d="M157 167 Q215 164 273 167" fill="none" stroke="rgba(210,90,110,0.3)" stroke-width="1.8"/>
      <path d="M157 176 Q215 173 273 176" fill="none" stroke="rgba(210,90,110,0.25)" stroke-width="1.5"/>
      <rect x="155" y="182" width="120" height="40" fill="url(#ep3Bon)"/>
      <path d="M157 192 Q215 189 273 192" fill="none" stroke="rgba(150,120,60,0.4)" stroke-width="1"/>
      <!-- PLAIE KAT II: cratère jusqu'à la dermis -->
      <path d="M195 35 Q215 28 235 35 L233 85 Q215 92 197 85 Z" fill="rgba(210,70,50,0.85)" stroke="rgba(180,50,30,0.9)" stroke-width="1.5"/>
      <!-- Fond plaie rouge vif (dermis exposé) -->
      <ellipse cx="215" cy="83" rx="13" ry="7" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
      <!-- Bords déchirés réalistes -->
      <path d="M197 50 Q200 45 204 50 Q207 55 211 49" fill="none" stroke="rgba(255,180,150,0.6)" stroke-width="1"/>
      <path d="M225 48 Q229 43 233 48 Q236 53 230 50" fill="none" stroke="rgba(255,180,150,0.6)" stroke-width="1"/>
      <!-- Sérosité / exsudat -->
      <ellipse cx="215" cy="79" rx="8" ry="4" fill="rgba(255,240,200,0.5)"/>

      <!-- ── COL 3: Kat III ── x=295..415 -->
      <rect x="295" y="35" width="120" height="22" rx="0" fill="url(#ep3Epi)"/>
      <rect x="295" y="57" width="120" height="40" fill="url(#ep3Derm)"/>
      <rect x="295" y="97" width="120" height="50" fill="url(#ep3Sub)"/>
      ${[[310,112,8],[330,118,7],[348,110,9],[367,117,8],[385,112,9],[405,119,7],[315,130,7],[335,127,8],[355,132,7],[375,128,8],[395,131,7]].map(([e,t,r])=>`<ellipse cx="${e}" cy="${t}" rx="${r}" ry="${Math.round(r*.75)}" fill="rgba(240,190,50,0.4)" stroke="rgba(185,140,5,0.45)" stroke-width="0.7"/>`).join("")}
      <rect x="295" y="147" width="120" height="35" fill="url(#ep3Mus)"/>
      <path d="M297 157 Q355 154 413 157" fill="none" stroke="rgba(210,90,110,0.35)" stroke-width="1.8"/>
      <path d="M297 167 Q355 164 413 167" fill="none" stroke="rgba(210,90,110,0.3)" stroke-width="1.8"/>
      <rect x="295" y="182" width="120" height="40" fill="url(#ep3Bon)"/>
      <path d="M297 192 Q355 189 413 192" fill="none" stroke="rgba(150,120,60,0.4)" stroke-width="1"/>
      <!-- PLAIE KAT III: cratère jusqu'à la subcutis -->
      <path d="M325 35 Q355 23 385 35 L383 142 Q355 150 327 142 Z" fill="rgba(160,50,20,0.8)" stroke="rgba(130,30,10,0.9)" stroke-width="1.8"/>
      <!-- Tissu graisseux exposé au fond -->
      <ellipse cx="355" cy="139" rx="20" ry="9" fill="rgba(240,185,40,0.75)" stroke="#c8940a" stroke-width="1.2"/>
      <ellipse cx="347" cy="136" rx="5" ry="3.5" fill="rgba(245,200,60,0.6)" stroke="rgba(185,140,5,0.5)" stroke-width="0.7"/>
      <ellipse cx="360" cy="140" rx="4" ry="3" fill="rgba(245,200,60,0.5)" stroke="rgba(185,140,5,0.5)" stroke-width="0.7"/>
      <!-- Nécrose sombre dans plaie -->
      <ellipse cx="355" cy="90" rx="16" ry="30" fill="rgba(60,10,0,0.65)" stroke="rgba(100,20,10,0.6)" stroke-width="1"/>
      <!-- Fibrine/belag jaunâtre -->
      <path d="M338 110 Q355 105 372 110 Q355 118 338 110Z" fill="rgba(240,220,150,0.45)"/>
      <!-- Tunnelisation sous-cutanée (signe avancé) -->
      <path d="M325 100 Q305 105 300 115 Q298 125 308 128" fill="none" stroke="rgba(200,100,50,0.6)" stroke-width="1.5" stroke-dasharray="4 2"/>

      <!-- ── COL 4: Kat IV ── x=435..555 -->
      <rect x="435" y="35" width="120" height="22" rx="0" fill="url(#ep3Epi)"/>
      <rect x="435" y="57" width="120" height="40" fill="url(#ep3Derm)"/>
      <rect x="435" y="97" width="120" height="50" fill="url(#ep3Sub)"/>
      ${[[450,112,8],[470,118,7],[488,110,9],[507,117,8],[525,112,9],[545,119,7],[455,130,7],[475,127,8],[495,132,7],[515,128,8],[535,131,7]].map(([e,t,r])=>`<ellipse cx="${e}" cy="${t}" rx="${r}" ry="${Math.round(r*.75)}" fill="rgba(240,190,50,0.4)" stroke="rgba(185,140,5,0.45)" stroke-width="0.7"/>`).join("")}
      <rect x="435" y="147" width="120" height="35" fill="url(#ep3Mus)"/>
      <path d="M437 157 Q495 154 553 157" fill="none" stroke="rgba(210,90,110,0.35)" stroke-width="1.8"/>
      <rect x="435" y="182" width="120" height="40" fill="url(#ep3Bon)"/>
      <path d="M437 192 Q495 189 553 192" fill="none" stroke="rgba(150,120,60,0.4)" stroke-width="1"/>
      <!-- PLAIE KAT IV: jusqu'à l'os -->
      <path d="M460 35 Q495 18 530 35 L528 188 Q495 196 462 188 Z" fill="rgba(20,5,5,0.88)" stroke="rgba(100,10,10,0.9)" stroke-width="2"/>
      <!-- Os exposé au fond -->
      <ellipse cx="495" cy="189" rx="28" ry="10" fill="rgba(225,210,165,0.9)" stroke="#b0a060" stroke-width="1.8"/>
      <path d="M472 189 Q495 184 518 189" fill="none" stroke="rgba(155,125,65,0.6)" stroke-width="1"/>
      <!-- Nécrose noire épaisse -->
      <ellipse cx="495" cy="130" rx="22" ry="48" fill="rgba(15,3,3,0.9)" stroke="rgba(80,5,5,0.7)" stroke-width="1.5"/>
      <!-- Tissus nécrotiques stringeux -->
      <path d="M475 100 Q495 95 515 100 Q495 108 475 100Z" fill="rgba(80,40,10,0.7)"/>
      <path d="M473 118 Q495 113 517 118 Q495 126 473 118Z" fill="rgba(60,20,5,0.65)"/>
      <!-- Sehne (tendon) exposé -->
      <path d="M482 165 Q495 160 508 165 Q495 172 482 165Z" fill="rgba(255,240,200,0.6)" stroke="rgba(220,200,150,0.7)" stroke-width="0.8"/>
      <text x="495" y="167" text-anchor="middle" font-size="5.5" font-family="DM Sans" fill="rgba(240,220,160,0.85)" font-weight="700">Sehne</text>

      <!-- ══════════════════════════════════════════
           ÉTIQUETTES COLONNES
      ══════════════════════════════════════════ -->
      <!-- Séparateurs -->
      <line x1="140" y1="30" x2="140" y2="230" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <line x1="280" y1="30" x2="280" y2="230" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <line x1="420" y1="30" x2="420" y2="230" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

      <!-- Labels couches (colonne 1 seulement) -->
      <text x="8" y="50" font-size="7.5" font-family="DM Sans" font-weight="700" fill="rgba(240,200,160,0.85)" transform="rotate(-90,8,50)" text-anchor="middle" dominant-baseline="middle">Epidermis</text>

      <!-- Labels droite -->
      <text x="558" y="48" font-size="7.5" font-family="DM Sans" fill="rgba(240,200,160,0.7)" dominant-baseline="middle">Epidermis</text>
      <text x="558" y="78" font-size="7.5" font-family="DM Sans" fill="rgba(200,110,90,0.7)" dominant-baseline="middle">Dermis</text>
      <text x="558" y="123" font-size="7.5" font-family="DM Sans" fill="rgba(210,160,10,0.7)" dominant-baseline="middle">Subcutis</text>
      <text x="558" y="165" font-size="7.5" font-family="DM Sans" fill="rgba(190,60,85,0.7)" dominant-baseline="middle">Muskel</text>
      <text x="558" y="203" font-size="7.5" font-family="DM Sans" fill="rgba(200,185,115,0.7)" dominant-baseline="middle">Knochen</text>
      <!-- Lignes repère -->
      <line x1="554" y1="46" x2="557" y2="46" stroke="rgba(240,200,160,0.5)" stroke-width="1"/>
      <line x1="554" y1="76" x2="557" y2="76" stroke="rgba(200,110,90,0.5)" stroke-width="1"/>
      <line x1="554" y1="121" x2="557" y2="121" stroke="rgba(210,160,10,0.5)" stroke-width="1"/>
      <line x1="554" y1="163" x2="557" y2="163" stroke="rgba(190,60,85,0.5)" stroke-width="1"/>
      <line x1="554" y1="201" x2="557" y2="201" stroke="rgba(200,185,115,0.5)" stroke-width="1"/>

      <!-- ══ BANDEAUX TITRES CATÉGORIES ══ -->
      <rect x="15" y="230" width="120" height="50" rx="0 0 8 8" fill="rgba(220,38,38,0.18)" stroke="rgba(220,38,38,0.4)" stroke-width="1.2"/>
      <rect x="155" y="230" width="120" height="50" rx="0 0 8 8" fill="rgba(217,119,6,0.18)" stroke="rgba(217,119,6,0.4)" stroke-width="1.2"/>
      <rect x="295" y="230" width="120" height="50" rx="0 0 8 8" fill="rgba(234,88,12,0.18)" stroke="rgba(234,88,12,0.4)" stroke-width="1.2"/>
      <rect x="435" y="230" width="120" height="50" rx="0 0 8 8" fill="rgba(153,27,27,0.25)" stroke="rgba(220,38,38,0.5)" stroke-width="1.5"/>

      <!-- Kat I -->
      <text x="75" y="247" text-anchor="middle" font-size="12" font-family="DM Sans" font-weight="900" fill="#f87171">Kat. I</text>
      <text x="75" y="259" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(248,113,113,0.9)">Rötung</text>
      <text x="75" y="270" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(200,150,150,0.8)">Haut intakt</text>
      <text x="75" y="278" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(200,150,150,0.65)">nicht wegdrückbar</text>

      <!-- Kat II -->
      <text x="215" y="247" text-anchor="middle" font-size="12" font-family="DM Sans" font-weight="900" fill="#fbbf24">Kat. II</text>
      <text x="215" y="259" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(251,191,36,0.9)">Teilzerstörung</text>
      <text x="215" y="270" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(210,170,100,0.8)">bis Dermis</text>
      <text x="215" y="278" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(200,160,80,0.65)">Blase / offenes Ulkus</text>

      <!-- Kat III -->
      <text x="355" y="247" text-anchor="middle" font-size="12" font-family="DM Sans" font-weight="900" fill="#fb923c">Kat. III</text>
      <text x="355" y="259" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(251,146,60,0.9)">Vollzerstörung</text>
      <text x="355" y="270" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(220,160,100,0.8)">bis Subcutis</text>
      <text x="355" y="278" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(210,150,80,0.65)">Fettgewebe sichtbar</text>

      <!-- Kat IV -->
      <text x="495" y="247" text-anchor="middle" font-size="12" font-family="DM Sans" font-weight="900" fill="#ef4444">Kat. IV</text>
      <text x="495" y="259" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(239,68,68,0.9)">Totaler Verlust</text>
      <text x="495" y="270" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(220,130,130,0.8)">bis Knochen</text>
      <text x="495" y="278" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(200,120,120,0.65)">Sehnen / Knochen frei</text>
    </svg>
  </div>

  <!-- 4 Kategorien détaillées -->
  ${[["I","Nicht wegdrückbare Rötung","rgba(248,113,113,0.12)","#f87171","Nicht wegdrückbare, umschriebene Rötung bei intakter Haut, gewöhnlich über einem knöchernen Vorsprung. Der Bereich kann schmerzempfindlich, verhärtet, weich, wärmer oder kälter sein als umgebendes Gewebe.","⚠️ ACHTUNG: Entgegen verbreiteter Meinung ist Kat. I NICHT nur auf die Haut beschränkt — darunterliegendes Gewebe ist bereits mitbetroffen!","ICD-10: Druckzone bei nicht wegdrückbarer Rötung bei intakter Haut"],["II","Teilzerstörung bis Dermis","rgba(251,191,36,0.1)","#fbbf24","Teilzerstörung der Haut bis zur Dermis. Erscheint als flaches offenes Ulkus mit einem roten/rosafarbenen Wundbett, ohne Beläge. Kann sich als intakte oder offene/geplatzte Blase darstellen.","❌ NICHT als Kat. II klassifizieren: Blasen durch Pflaster/Verbände, IAD, Mazeration, Mykosen, Abschürfungen!","ICD-10: Abschürfung, Blase, Teilverlust der Haut mit Einbeziehung von Epidermis und/oder Dermis"],["III","Zerstörung aller Hautschichten","rgba(251,146,60,0.1)","#fb923c","Zerstörung aller Hautschichten. Subkutanes Fettgewebe kann sichtbar sein, aber keine Knochen, Muskeln oder Sehnen. Es kann ein Belag vorliegen. Tunnel oder Unterminierungen möglich.","💡 Tiefe variiert je nach Lokalisation: An Ferse/Ohr sehr oberflächlich möglich. An adipösen Stellen extrem tief!","ICD-10: Vollständiger Hautverlust mit Zerstörung und Nekrose des subkutanen Gewebes"],["IV","Totaler Gewebsverlust","rgba(220,38,38,0.1)","#dc2626","Totaler Gewebsverlust mit freiliegenden Knochen, Sehnen oder Muskeln. Belag und Schorf können vorliegen. Tunnel und Unterminierungen oft vorhanden. Kann Fascien, Sehnen, Gelenkkapseln betreffen.","⚠️ Osteomyelitis/Ostitis-Risiko! Knochen/Sehnen sichtbar oder tastbar. Höchstes Amputationsrisiko!","ICD-10: Dekubitus mit Nekrose von Muskeln, Knochen oder stützenden Strukturen"]].map(([e,t,r,n,i,l,s])=>`
  <div class="lekt-card" style="background:${r};border-color:${n}44">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <div style="width:36px;height:36px;border-radius:10px;background:${n}22;border:2px solid ${n};color:${n};font-family:'Fraunces',serif;font-size:1.1rem;font-weight:800;display:flex;align-items:center;justify-content:center">${e}</div>
      <div style="font-weight:700;font-size:.88rem;color:${n}">${t}</div>
    </div>
    <p style="font-size:.78rem;color:var(--ink2);line-height:1.6;margin-bottom:8px">${i}</p>
    <div style="font-size:.72rem;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid ${n}33;color:var(--ink2);line-height:1.5">${l}</div>
    <div style="font-size:.67rem;color:var(--ink3);margin-top:8px">📋 ${s}</div>
  </div>`).join("")}
</div>

<div id="lsec-dek-iad" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Abgrenzung: Dekubitus vs. IAD vs. ITD</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🔍 Differenzialdiagnose — klausurrelevant!</div>
    <div style="overflow-x:auto;margin-top:8px">
      <table style="width:100%;border-collapse:collapse;font-size:.72rem">
        <tr style="background:rgba(255,255,255,.05)">
          <th style="padding:8px;text-align:left;color:var(--ink3);font-weight:700"></th>
          <th style="padding:8px;text-align:left;color:#f87171;font-weight:700">Dekubitus</th>
          <th style="padding:8px;text-align:left;color:#60a5fa;font-weight:700">IAD</th>
          <th style="padding:8px;text-align:left;color:#4ade80;font-weight:700">ITD</th>
        </tr>
        <tr style="border-top:1px solid rgba(255,255,255,.05)"><td style="padding:7px 8px;font-weight:700;color:var(--ink3)">Ursache</td><td style="padding:7px 8px;color:var(--ink2)">Druck + Scherkräfte</td><td style="padding:7px 8px;color:var(--ink2)">Urin-/Stuhlinkontinenz</td><td style="padding:7px 8px;color:var(--ink2)">Schwitzen + Reibung</td></tr>
        <tr style="border-top:1px solid rgba(255,255,255,.05)"><td style="padding:7px 8px;font-weight:700;color:var(--ink3)">Lokalisation</td><td style="padding:7px 8px;color:var(--ink2)">Knöcherne Vorsprünge</td><td style="padding:7px 8px;color:var(--ink2)">Perineum, Gesäß</td><td style="padding:7px 8px;color:var(--ink2)">Rima ani, inguinal</td></tr>
        <tr style="border-top:1px solid rgba(255,255,255,.05)"><td style="padding:7px 8px;font-weight:700;color:var(--ink3)">Tiefe</td><td style="padding:7px 8px;color:var(--ink2)">Kat. I–IV</td><td style="padding:7px 8px;color:var(--ink2)">Oberflächlich</td><td style="padding:7px 8px;color:var(--ink2)">Erosion</td></tr>
        <tr style="border-top:1px solid rgba(255,255,255,.05)"><td style="padding:7px 8px;font-weight:700;color:var(--ink3)">Wundränder</td><td style="padding:7px 8px;color:var(--ink2)">Rund/oval, klar</td><td style="padding:7px 8px;color:var(--ink2)">Unregelmäßig</td><td style="padding:7px 8px;color:var(--ink2)">Linear</td></tr>
        <tr style="border-top:1px solid rgba(255,255,255,.05)"><td style="padding:7px 8px;font-weight:700;color:var(--ink3)">Schlüssel</td><td style="padding:7px 8px;color:var(--ink2)">Immobilität</td><td style="padding:7px 8px;color:var(--ink2)">Inkontinenz</td><td style="padding:7px 8px;color:var(--ink2)">Diaphoresis</td></tr>
      </table>
    </div>
    <div class="lekt-merkhilfe" style="margin-top:12px">💡 <div><strong>IAD = Ausschlussdiagnose!</strong> Oberflächliche Läsionen nur dann als Dekubitus bezeichnen, wenn Feuchtigkeit/IAD als Ursache ausgeschlossen werden kann.</div></div>
  </div>
</div>
</div></div>`,"Prädilektionsstellen & Einschätzung":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,160,160,.9)">🩺 Dekubitus · Lektion 4</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Prädilektionsstellen & Einschätzung</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Wo entstehen Dekubitus am häufigsten — und wie erkenne ich sie frühzeitig?</div>
</div>

<div id="lsec-dek-pred" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Prädilektionsstellen</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f87171">📍 Häufigste Entstehungsorte bei liegenden Patienten</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-top:10px">

      <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3)">
        <div style="width:30px;height:30px;border-radius:50%;background:#ef4444;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.9rem;color:white;flex-shrink:0">1</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:.83rem;color:#f87171">Kreuzbein (Os sacrum)</div>
          <div style="font-size:.73rem;color:var(--ink2);margin-top:2px">≈ 30% aller Dekubitus — die häufigste Lokalisation überhaupt</div>
        </div>
        <span style="font-size:.65rem;font-weight:700;color:#f87171;background:rgba(239,68,68,0.15);padding:3px 8px;border-radius:6px;white-space:nowrap">HOCH</span>
      </div>

      <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.22)">
        <div style="width:30px;height:30px;border-radius:50%;background:#ef4444;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.9rem;color:white;flex-shrink:0">2</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:.83rem;color:#f87171">Fersen (Calcaneus)</div>
          <div style="font-size:.73rem;color:var(--ink2);margin-top:2px">2. häufigste — bes. bei Diabetes & Polyneuropathie → Freilagerung!</div>
        </div>
        <span style="font-size:.65rem;font-weight:700;color:#f87171;background:rgba(239,68,68,0.12);padding:3px 8px;border-radius:6px;white-space:nowrap">HOCH</span>
      </div>

      <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.22)">
        <div style="width:30px;height:30px;border-radius:50%;background:#f97316;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.9rem;color:#0a1220;flex-shrink:0">3</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:.83rem;color:#fb923c">Schulterblätter (Scapulae)</div>
          <div style="font-size:.73rem;color:var(--ink2);margin-top:2px">Rückenlage, bes. bei Kachexie / Untergewicht — wenig Muskelpolster</div>
        </div>
        <span style="font-size:.65rem;font-weight:700;color:#fb923c;background:rgba(249,115,22,0.12);padding:3px 8px;border-radius:6px;white-space:nowrap">MITTEL</span>
      </div>

      <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:rgba(249,115,22,0.07);border:1px solid rgba(249,115,22,0.18)">
        <div style="width:30px;height:30px;border-radius:50%;background:#f97316;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.9rem;color:#0a1220;flex-shrink:0">4</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:.83rem;color:#fb923c">Trochanteren (Hüfte)</div>
          <div style="font-size:.73rem;color:var(--ink2);margin-top:2px">Bei Seitenlage! — deshalb 30°-Schräglagerung statt 90°</div>
        </div>
        <span style="font-size:.65rem;font-weight:700;color:#fb923c;background:rgba(249,115,22,0.12);padding:3px 8px;border-radius:6px;white-space:nowrap">MITTEL</span>
      </div>

      <div style="display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:rgba(251,191,36,0.07);border:1px solid rgba(251,191,36,0.18)">
        <div style="width:30px;height:30px;border-radius:50%;background:#fbbf24;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.9rem;color:#0a1220;flex-shrink:0">5</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:.83rem;color:#fbbf24">Hinterhaupt (Occiput)</div>
          <div style="font-size:.73rem;color:var(--ink2);margin-top:2px">Besonders Säuglinge & Kinder — Kopf proportional schwerer</div>
        </div>
        <span style="font-size:.65rem;font-weight:700;color:#fbbf24;background:rgba(251,191,36,0.1);padding:3px 8px;border-radius:6px;white-space:nowrap">KONTEXT</span>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px">
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.15)">
          <div style="width:26px;height:26px;border-radius:50%;background:#fbbf24;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.8rem;color:#0a1220;flex-shrink:0">6</div>
          <div><div style="font-weight:700;font-size:.78rem;color:#fbbf24">Lendenwirbel (LWS)</div><div style="font-size:.7rem;color:var(--ink2)">Magere Patienten</div></div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;background:rgba(96,165,250,0.07);border:1px solid rgba(96,165,250,0.18)">
          <div style="width:26px;height:26px;border-radius:50%;background:#60a5fa;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.8rem;color:#0a1220;flex-shrink:0">7</div>
          <div><div style="font-weight:700;font-size:.78rem;color:#60a5fa">Knöchel & Ellenbogen</div><div style="font-size:.7rem;color:var(--ink2)">Olecranon, Seitenlage</div></div>
        </div>
      </div>

      <div style="display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:10px;background:rgba(148,163,184,0.06);border:1px solid rgba(148,163,184,0.15)">
        <div style="width:26px;height:26px;border-radius:50%;background:#94a3b8;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:.8rem;color:#0a1220;flex-shrink:0">8</div>
        <div style="font-weight:700;font-size:.78rem;color:#94a3b8">Medizinische Geräte</div>
        <div style="font-size:.73rem;color:var(--ink2)">Tubus, Sonden, Trachealkanülen — jede Druckstelle zählt!</div>
      </div>

    </div>
    <div class="lekt-merkhilfe" style="margin-top:12px">💡 <div><strong>Merkhilfe:</strong> Knochen nah unter der Haut + Körpergewicht drückt darauf = Druckstelle. <strong>Kreuzbein #1 + Fersen #2</strong> immer zuerst kontrollieren!</div></div>
  </div>
</div>

<div id="lsec-dek-tief" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Tiefe Dekubitus — das versteckte Problem</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb923c">⚠️ Schädigung von außen oft nicht erkennbar!</div>
    <p style="font-size:.78rem;color:var(--ink2);line-height:1.6">Da bei länger einwirkendem Druck <strong>tiefer liegende Gewebe zunächst eher und stärker geschädigt</strong> werden als die Haut, müssen tiefe Dekubitus <strong>bereits entstanden sein, bevor druckbedingte Hautdefekte klinisch relevant werden</strong> (Kottner, Sibbald 2011).</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">
      ${[["❗","Kein Progressionsmodell","Oberflächliche und tiefe Dekubitus sind zwei konzeptionell VERSCHIEDENE Vorgänge!","#f87171"],["⚖️","Rechtliche Konsequenz","Schäden können VOR der Aufnahme entstanden sein — unverzügliche Dokumentation beim Aufnahme!","#fbbf24"]].map(([e,t,r,n])=>`<div style="padding:10px;border-radius:10px;background:${n}10;border:1px solid ${n}30">
        <div style="font-size:.75rem;font-weight:700;color:${n};margin-bottom:4px">${e} ${t}</div>
        <div style="font-size:.7rem;color:var(--ink2);line-height:1.4">${r}</div>
      </div>`).join("")}
    </div>
  </div>
</div>
</div></div>`,"Prophylaxe und Donts":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,160,160,.9)">🩺 Dekubitus · Lektion 5</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Prophylaxe — Do's & Don'ts</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Was schützt wirklich — und was schadet mehr als es nützt?</div>
</div>

<div id="lsec-dek-dos" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Maßnahmen zur Prophylaxe</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">✅ Do's — Was wirkt!</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
      ${[["🔄","Positionswechsel / Lagerung","Regelmäßige Umlagerung re/li/Rücken. Bei Sitzenden: mindestens alle 60 min! Mikrolagerung nicht vergessen."],["🏃","Bewegungsförderung","Eigenbewegung des Patienten fördern, Mobilisation so früh wie möglich."],["🛏️","Druckverteilende Hilfsmittel","Viscoelastische Schaumstoffmatratzen, großzellige dynamische Matratzen > Standardmatratzen (DNQP 2009)."],["👁️","Hautbeobachtung","Regelmäßige systematische Einschätzung — Rötungen frühzeitig erkennen!"],["💧","Hautpflege & Inkontinenzversorgung","pH-neutrale Reinigung. Bei Inkontinenz bei jeder Versorgung reinigen + trocknen + schützende Produkte."],["🎓","Schulung & Beratung","Patient, Angehörige UND Pflegepersonal schulen. ALLE informieren!"],["🍎","Ernährung","Mangelernährung als Risikofaktor behandeln."],["🦶","Freilagerung","Stark gefährdete Körperstellen vollständig entlasten (z.B. Ferse freilagern)!"]].map(([e,t,r])=>`<div style="display:flex;gap:12px;padding:10px 14px;background:rgba(74,222,128,.05);border-radius:10px;border:1px solid rgba(74,222,128,.15)">
        <div style="font-size:1.2rem;flex-shrink:0">${e}</div>
        <div><div style="font-weight:700;font-size:.8rem;color:#4ade80;margin-bottom:2px">${t}</div><div style="font-size:.72rem;color:var(--ink2);line-height:1.4">${r}</div></div>
      </div>`).join("")}
    </div>
  </div>
</div>

<div id="lsec-dek-donts" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Ungeeignete Hilfsmittel & Obsolete Maßnahmen</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f87171">❌ Don'ts — Klausurrelevant!</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
      ${[["Lagerungsringe","Erhöhen Druck am Rand → schlimmer!"],["Felle / Schaffelle","Kein Nachweis der Wirksamkeit"],["Wassermatratzen","Nicht evidenzbasiert"],["Watteverbände","Ungeeignet"],["Massage der Druckstellen","Führt zu Gewebsschäden!"],["Hyperämisierende Salben","ABC-Salbe, Finalgon — obsolet!"],["Vaseline / Babyöl","Porenverstopfend — kontraindiziert"],["Babypuder / Pasta zinci","Hautabdeckend — obsolet"],["Seife","Zerstört Säureschutzmantel"],["Hydrokolloid prophylaktisch","Keine ausreichende Evidenz"]].map(([e,t])=>`<div style="padding:10px;border-radius:10px;background:rgba(248,113,113,.08);border:1px solid rgba(248,113,113,.2)">
        <div style="font-size:.75rem;font-weight:700;color:#f87171;margin-bottom:3px">❌ ${e}</div>
        <div style="font-size:.67rem;color:var(--ink3);line-height:1.3">${t}</div>
      </div>`).join("")}
    </div>
  </div>
</div>

<div id="lsec-dek-mat" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Druckverteilende Hilfsmittel & Wundversorgung</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🛏️ Spezialmatratzen</div>
    <p style="font-size:.78rem;color:var(--ink2);line-height:1.6">Studien zeigen: <strong>großzellige dynamische Matratzen, Aufladesysteme oder viscoelastische Schaumstoffmatratzen</strong> reduzieren Dekubitusinzidenz im Vergleich zu Standardmatratzen (DNQP 2009).</p>
    <div class="lekt-klausur">
      <div class="lekt-klausur-lbl">⚠️ CAVE: Wechseldruckmatratze</div>
      Wechseldruckmatratzen können problematisch sein bei: <strong>Körperbildstörungen, Koordinationsstörungen, erhöhter Schmerzempfindlichkeit, Spastiken, eingeschränkter Eigenmobilität</strong>.
      <br/><strong>Wichtig: Die Matratze ersetzt NICHT die regelmäßige Lagerung!</strong>
    </div>
  </div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#c084fc">🩹 Wundbehandlung bei bestehendem Dekubitus</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px">
      ${[["1. Druckentlastung","Unverzüglich! Ohne Druckentlastung heilt keine Wunde.","#f87171"],["Antibakterielle Wundauflagen","Bei Infektionszeichen → antimikrobielle Wundauflagen","#fb923c"],["NPWT (Unterdrucktherapie)","Negative Pressure Wound Therapy — bei tiefen Wunden","#60a5fa"],["Feuchtes Wundmilieu","Modern: feuchte Wundversorgung fördert Heilung","#4ade80"]].map(([e,t,r])=>`<div style="display:flex;gap:10px;padding:9px 12px;border-radius:9px;background:${r}0d;border:1px solid ${r}22">
        <div style="width:3px;background:${r};border-radius:2px;flex-shrink:0"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:${r}">${e}</div><div style="font-size:.71rem;color:var(--ink2)">${t}</div></div>
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-card" style="background:rgba(220,38,38,.06);border-color:rgba(220,38,38,.2)">
    <div class="lekt-card-label" style="color:#f87171">⚖️ Haftung & Dokumentation</div>
    <p style="font-size:.78rem;color:var(--ink2);line-height:1.6">Ein Dekubitus gehört zu den <strong>gravierenden Gesundheitsproblemen pflegebedürftiger Patienten</strong>. Das Auftreten kann <strong>weitgehend verhindert werden</strong> — daher besteht eine hohe rechtliche Relevanz. <strong>Lückenlose Dokumentation</strong> ist zwingend erforderlich: Einschätzung, Maßnahmen, Evaluation.</p>
    <div style="font-size:.72rem;padding:8px 12px;border-radius:8px;background:rgba(220,38,38,.08);border:1px solid rgba(220,38,38,.2);color:var(--ink2);margin-top:8px">📌 <strong>Initiales Screening bei Aufnahme:</strong> □ vorerst kein Dekubitusrisiko &nbsp; □ Dekubitusrisiko. Risikofaktoren + Interventionen dokumentieren!</div>
  </div>
</div>

<div id="lsec-dek-lager" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">04</div><div class="lekt-title">Lagerungsarten — Systematik & Positionen</div></div>
  <p class="lekt-prose">Korrekte Lagerung ist die <strong>wichtigste Prophylaxemaßnahme</strong>. Ziel: Druck auf gefährdete Körperstellen vollständig aufheben. Die <strong>30°-Schräglagerung</strong> ist Goldstandard — sie vermeidet Druck auf Trochanter und Kreuzbein gleichzeitig.</p>

  <!-- SVG Lagerungsarten -->
  <div class="lekt-card" style="padding:0;overflow:hidden">
    <div class="lekt-card-label" style="color:#60a5fa;padding:12px 16px 8px">🛏️ Die 5 wichtigsten Lagerungsarten</div>
    <svg viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
      <defs>
        <linearGradient id="lagBed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
        <linearGradient id="lagSkin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8a878"/><stop offset="100%" stop-color="#c88858"/>
        </linearGradient>
        <linearGradient id="lagPillow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#2563eb"/>
        </linearGradient>
        <radialGradient id="lagPressure" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#dc2626" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#dc2626" stop-opacity="0"/>
        </radialGradient>
        <filter id="lagShadow"><feDropShadow dx="1" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.4)"/></filter>
      </defs>
      <rect width="560" height="420" fill="#0c1520"/>

      <!-- ══ POSITION 1: RÜCKENLAGE ══ (col gauche, ligne 1) -->
      <text x="12" y="22" font-size="9.5" font-family="DM Sans" font-weight="800" fill="#60a5fa">① Rückenlage (0°)</text>
      <text x="12" y="33" font-size="7.5" font-family="DM Sans" fill="rgba(96,165,250,0.65)">Druckpunkte: Kreuzbein, Ferse, Hinterkopf</text>
      <!-- Lit -->
      <rect x="10" y="52" width="240" height="10" rx="3" fill="url(#lagBed)"/>
      <!-- Corps — Rückenlage (vue de dessus simplifiée, vue de côté) -->
      <!-- Tête -->
      <ellipse cx="40" cy="45" rx="16" ry="14" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Oreiller -->
      <rect x="25" y="38" width="30" height="14" rx="5" fill="url(#lagPillow)" opacity="0.6"/>
      <!-- Corps -->
      <rect x="56" y="40" width="130" height="22" rx="6" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Jambes -->
      <rect x="186" y="40" width="55" height="22" rx="5" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Points de pression (rouge) -->
      <ellipse cx="105" cy="62" rx="14" ry="5" fill="url(#lagPressure)" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="223" cy="62" rx="8" ry="4" fill="url(#lagPressure)" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.3s" repeatCount="indefinite"/>
      </ellipse>
      <text x="105" y="76" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="#f87171" font-weight="700">⚠ Kreuzbein</text>
      <text x="223" y="76" text-anchor="middle" font-size="6" font-family="DM Sans" fill="#f87171">Fersen</text>

      <!-- ══ POSITION 2: 30°-SCHRÄGLAGE ══ (col droite, ligne 1) -->
      <text x="296" y="22" font-size="9.5" font-family="DM Sans" font-weight="800" fill="#4ade80">② 30°-Schräglagerung ⭐ Goldstandard</text>
      <text x="296" y="33" font-size="7.5" font-family="DM Sans" fill="rgba(74,222,128,0.65)">Entlastet Kreuzbein + Trochanter gleichzeitig!</text>
      <!-- Lit incliné -->
      <rect x="290" y="52" width="260" height="10" rx="3" fill="url(#lagBed)"/>
      <!-- Corps à 30° — représenté latéralement -->
      <!-- Coussin soutien -->
      <path d="M295 42 Q300 38 310 40 L310 62 Q300 62 295 58 Z" fill="url(#lagPillow)" opacity="0.7"/>
      <!-- Corps incliné -->
      <path d="M308 38 Q340 35 380 37 L395 38 Q430 36 460 38 L460 56 Q430 58 395 56 L380 55 Q340 57 308 56 Z"
            fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Tête -->
      <ellipse cx="322" cy="47" rx="16" ry="13" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Oreiller tête -->
      <rect x="305" y="37" width="32" height="12" rx="5" fill="url(#lagPillow)" opacity="0.7"/>
      <!-- Coussin entre jambes -->
      <rect x="455" y="44" width="22" height="12" rx="5" fill="url(#lagPillow)" opacity="0.6"/>
      <!-- Angle 30° marqué -->
      <path d="M296 62 L296 40" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="3 2"/>
      <path d="M296 62 L320 62" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="3 2"/>
      <path d="M296 62 Q304 58 308 55" fill="none" stroke="#4ade80" stroke-width="1.5"/>
      <text x="312" y="60" font-size="8" font-family="DM Sans" font-weight="800" fill="#4ade80">30°</text>
      <!-- Pas de pression = vert -->
      <text x="384" y="76" text-anchor="middle" font-size="7" font-family="DM Sans" fill="#4ade80" font-weight="700">✓ Kein Druck auf Kreuzbein</text>
      <text x="384" y="85" text-anchor="middle" font-size="7" font-family="DM Sans" fill="#4ade80">✓ Kein Druck auf Trochanter</text>

      <!-- ══ POSITION 3: SEITENLAGE 90° ══ (col gauche, ligne 2) -->
      <text x="12" y="110" font-size="9.5" font-family="DM Sans" font-weight="800" fill="#fbbf24">③ Seitenlage (90°)</text>
      <text x="12" y="121" font-size="7.5" font-family="DM Sans" fill="rgba(251,191,36,0.65)">Trochanter-Risiko! Knie polstern!</text>
      <!-- Lit -->
      <rect x="10" y="140" width="240" height="10" rx="3" fill="url(#lagBed)"/>
      <!-- Corps en Seitenlage (vue de côté) -->
      <ellipse cx="40" cy="130" rx="14" ry="16" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <rect x="54" y="120" width="110" height="24" rx="7" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Jambes pliées -->
      <path d="M164 120 Q180 118 195 125 Q210 132 215 140 L190 140 Q186 134 175 130 Q165 126 164 120Z"
            fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Coussin entre genoux -->
      <rect x="188" y="128" width="18" height="14" rx="5" fill="url(#lagPillow)" opacity="0.7"/>
      <!-- Pression Trochanter -->
      <ellipse cx="60" cy="140" rx="10" ry="4" fill="url(#lagPressure)" opacity="0.75">
        <animate attributeName="opacity" values="0.75;0.35;0.75" dur="1.9s" repeatCount="indefinite"/>
      </ellipse>
      <text x="60" y="153" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="#f87171" font-weight="700">⚠ Trochanter</text>
      <text x="190" y="153" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="#4ade80">✓ Kissen Knie</text>

      <!-- ══ POSITION 4: BAUCHLAGE ══ (col droite, ligne 2) -->
      <text x="296" y="110" font-size="9.5" font-family="DM Sans" font-weight="800" fill="#c084fc">④ Bauchlage (Prone)</text>
      <text x="296" y="121" font-size="7.5" font-family="DM Sans" fill="rgba(192,132,252,0.65)">Gesicht, Knie, Zehenspitzen — Druckpunkte!</text>
      <!-- Lit -->
      <rect x="290" y="140" width="260" height="10" rx="3" fill="url(#lagBed)"/>
      <!-- Corps en Bauchlage -->
      <ellipse cx="318" cy="130" rx="14" ry="15" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Coussin thorax -->
      <rect x="290" y="120" width="50" height="20" rx="6" fill="url(#lagPillow)" opacity="0.5"/>
      <rect x="335" y="118" width="120" height="24" rx="6" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <rect x="455" y="120" width="80" height="22" rx="5" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Coussin tibias -->
      <rect x="480" y="132" width="50" height="8" rx="4" fill="url(#lagPillow)" opacity="0.6"/>
      <!-- Points -->
      <ellipse cx="318" cy="140" rx="8" ry="3" fill="url(#lagPressure)" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.1s" repeatCount="indefinite"/>
      </ellipse>
      <text x="318" y="153" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="#f87171">Gesicht</text>
      <text x="490" y="153" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="#4ade80">✓ Kissen</text>

      <!-- ══ POSITION 5: OBERKÖRPERHOCHLAGERUNG ══ (pleine largeur, ligne 3) -->
      <text x="12" y="198" font-size="9.5" font-family="DM Sans" font-weight="800" fill="#fb923c">⑤ Oberkörperhochlagerung (30°) — Scherkräfte-Risiko!</text>
      <text x="12" y="209" font-size="7.5" font-family="DM Sans" fill="rgba(251,146,60,0.65)">Abgleiten → Scherkräfte auf Kreuzbein → CAVE: Max. 30°! Knierolle einsetzen!</text>
      <!-- Lit incliné côté tête -->
      <line x1="10" y1="260" x2="540" y2="240" stroke="url(#lagBed)" stroke-width="8" stroke-linecap="round"/>
      <!-- Corps incliné -->
      <ellipse cx="50" cy="238" rx="15" ry="14" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <rect x="65" y="226" width="200" height="24" rx="7" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <rect x="265" y="235" width="100" height="22" rx="6" fill="url(#lagSkin)" filter="url(#lagShadow)"/>
      <!-- Knierolle -->
      <ellipse cx="368" cy="258" rx="10" ry="14" fill="url(#lagPillow)" opacity="0.7"/>
      <text x="368" y="276" text-anchor="middle" font-size="7" font-family="DM Sans" fill="#60a5fa" font-weight="700">Knierolle!</text>
      <!-- Scherkraft flèche -->
      <path d="M165 250 L195 265" stroke="#f97316" stroke-width="2.5" stroke-linecap="round" marker-end="url(#lagArr)"/>
      <defs><marker id="lagArr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="#f97316"/></marker></defs>
      <text x="210" y="270" font-size="7.5" font-family="DM Sans" font-weight="700" fill="#f97316">⚠ Scherkräfte!</text>
      <!-- Angle -->
      <path d="M10 260 L60 260" stroke="#fb923c" stroke-width="1.5" stroke-dasharray="3 2"/>
      <path d="M10 260 Q16 252 20 248" fill="none" stroke="#fb923c" stroke-width="1.5"/>
      <text x="30" y="256" font-size="8" font-family="DM Sans" font-weight="800" fill="#fb923c">30°</text>

      <!-- ══ MIKROLAGERUNG ══ (petit encadré) -->
      <rect x="10" y="285" width="540" height="50" rx="10" fill="rgba(96,165,250,0.06)" stroke="rgba(96,165,250,0.25)" stroke-width="1"/>
      <text x="22" y="302" font-size="9" font-family="DM Sans" font-weight="800" fill="#60a5fa">⑥ Mikrolagerung (5°–10°) — zwischen den Hauptlagerungen!</text>
      <text x="22" y="315" font-size="7.5" font-family="DM Sans" fill="rgba(148,163,184,0.8)">Kleine Positionsveränderungen (z.B. mit kleinen Keilen/Handtüchern) zwischen den regulären Hauptlagerungen (2–4-stündlich).</text>
      <text x="22" y="327" font-size="7.5" font-family="DM Sans" fill="rgba(74,222,128,0.8)">✓ Erleichtert kontinuierliche Druckentlastung ohne vollständiges Umlagern — auch bei kooperativen Patienten einsetzbar.</text>

      <!-- Légende -->
      <rect x="0" y="337" width="560" height="22" fill="rgba(0,0,0,0.5)"/>
      <rect x="10" y="344" width="10" height="8" rx="2" fill="url(#lagPressure)" opacity="0.8"/>
      <text x="24" y="351" font-size="7.5" font-family="DM Sans" fill="rgba(248,113,113,0.8)">= Druckzone (animiert)</text>
      <rect x="165" y="344" width="10" height="8" rx="2" fill="url(#lagPillow)" opacity="0.7"/>
      <text x="179" y="351" font-size="7.5" font-family="DM Sans" fill="rgba(96,165,250,0.8)">= Lagerungskissen</text>
      <text x="340" y="351" font-size="7.5" font-family="DM Sans" fill="rgba(74,222,128,0.8)">⭐ = Goldstandard Lagerung</text>
    </svg>
  </div>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">⏱️ Lagerungsintervalle — Klausurrelevant!</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
      ${[["Liegend","Alle 2–4 Stunden — je nach Risikoeinschätzung und individueller Toleranz","#60a5fa"],["Sitzend","Mindestens alle 60 Minuten — Rollstuhlpatienten besonders gefährdet!","#fb923c"],["30°-Lagerung","Schräglage links — Rücken — rechts — Mikrolagerung dazwischen","#4ade80"],["Dokumentation","Jede Lagerung dokumentieren! (Uhrzeit, Position, Hautbefund)","#fbbf24"]].map(([e,t,r])=>`<div style="padding:10px 12px;border-radius:10px;background:${r}0d;border:1px solid ${r}22">
        <div style="font-weight:700;font-size:.78rem;color:${r};margin-bottom:3px">${e}</div>
        <div style="font-size:.71rem;color:var(--ink2);line-height:1.4">${t}</div>
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 KLAUSUR: 30°-Schräglagerung — warum Goldstandard?</div>
    Bei der <strong>90°-Seitenlage</strong> lastet der gesamte Körperdruck auf dem <strong>Trochanter major</strong> → sehr hohe Druckbelastung. Die <strong>30°-Schräglage</strong> verteilt den Druck auf Gesäßmuskel und Rückseite → Trochanter und Kreuzbein werden gleichzeitig entlastet! <strong>Knierolle verhindert Abgleiten bei OK-Hochlagerung.</strong>
  </div>
</div>

<button class="lekt-quiz-btn" onclick="startQuizForTheme(THEMES.find(t=>t.id==='dekubitus'))">🎯 Jetzt Quiz starten — Dekubitus</button>
</div></div>`},blutzuck:{"Grundlagen Blutzucker & Pankreas":()=>`
<div class="lekt-layout">

<!-- MAIN CONTENT -->
<div>

<!-- HERO LEKTION -->
<div style="background:linear-gradient(135deg,#7f1d1d,#991b1b,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="lekt-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(220,38,38,.2);border:1px solid rgba(220,38,38,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(255,160,160,.9)">🏥 Pflegefach · Lektion 1</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Grundlagen Blutzucker & Pankreas</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Wie kommt Zucker ins Blut, wer reguliert ihn — und was passiert wenn das System versagt?</div>
  </div>
</div>

<!-- 01 GLUKOSE -->
<div class="lekt-sec" id="lsec-glukose">
  <div class="lekt-sec-label"><span class="lekt-num">01</span><span class="lekt-title">Was ist Glukose & wozu braucht sie der Körper?</span></div>
  <p class="lekt-prose">Glukose ist der <strong>wichtigste Energielieferant</strong> des menschlichen Körpers. Alle Zellen — besonders das Gehirn — sind darauf angewiesen. Kohlenhydrate werden im Darm zu Glukose abgebaut, ins Blut aufgenommen, und Insulin schleust sie in die Zellen.</p>
  <div class="lekt-card">
    <div class="lekt-card-label">🍞 Weg der Glukose durch den Körper</div>
    <div class="lekt-journey">
      <div class="lekt-j-step"><div class="lekt-j-icon" style="background:rgba(251,191,36,.1);border-color:rgba(251,191,36,.3)">🍞</div><div class="lekt-j-lbl">Kohlen­hydrate</div></div>
      <div class="lekt-j-arr">→</div>
      <div class="lekt-j-step"><div class="lekt-j-icon" style="background:rgba(96,165,250,.1);border-color:rgba(96,165,250,.3)">🫃</div><div class="lekt-j-lbl">Darm­aufnahme</div></div>
      <div class="lekt-j-arr">→</div>
      <div class="lekt-j-step"><div class="lekt-j-icon" style="background:rgba(220,38,38,.1);border-color:rgba(220,38,38,.3)">🩸</div><div class="lekt-j-lbl">BZ steigt</div></div>
      <div class="lekt-j-arr">→</div>
      <div class="lekt-j-step"><div class="lekt-j-icon" style="background:rgba(45,212,191,.1);border-color:rgba(45,212,191,.3)">💉</div><div class="lekt-j-lbl">Insulin</div></div>
      <div class="lekt-j-arr">→</div>
      <div class="lekt-j-step"><div class="lekt-j-icon" style="background:rgba(74,222,128,.1);border-color:rgba(74,222,128,.3)">⚡</div><div class="lekt-j-lbl">Energie in Zellen</div></div>
    </div>
  </div>
</div>

<!-- 02 PANKREAS -->
<div class="lekt-sec" id="lsec-pankreas">
  <div class="lekt-sec-label"><span class="lekt-num">02</span><span class="lekt-title">Das Pankreas — Anatomie & Funktion</span></div>
  <p class="lekt-prose">Das <strong>Pankreas (Bauchspeicheldrüse)</strong> liegt hinter dem Magen und hat zwei Funktionen: <strong>exokrin</strong> (Verdauungsenzyme ins Duodenum) und <strong>endokrin</strong> (Hormone ins Blut). Es besteht aus 3 Teilen — klicke auf jeden Teil!</p>
  <div class="lekt-card">
    <div class="lekt-card-label">🫀 Anatomie des Pankreas — realistisch & interaktiv</div>

    <!-- SVG ANATOMIQUE RÉALISTE PANKREAS pleine largeur -->
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;border-radius:12px">
      <defs>
        <linearGradient id="panGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f5c0a0"/>
          <stop offset="100%" stop-color="#e09070"/>
        </linearGradient>
        <linearGradient id="magenGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f0a8a0"/>
          <stop offset="100%" stop-color="#d07868"/>
        </linearGradient>
        <linearGradient id="duodGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#e8b870"/>
          <stop offset="100%" stop-color="#c89040"/>
        </linearGradient>
        <linearGradient id="milzGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c090c0"/>
          <stop offset="100%" stop-color="#905090"/>
        </linearGradient>
        <linearGradient id="kopfGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f0a090"/>
          <stop offset="100%" stop-color="#d06050"/>
        </linearGradient>
        <linearGradient id="koerperGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#80d8c8"/>
          <stop offset="100%" stop-color="#40a898"/>
        </linearGradient>
        <linearGradient id="schwanzGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8d070"/>
          <stop offset="100%" stop-color="#d8a030"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- FOND -->
      <rect width="560" height="280" fill="#1a1f2e" rx="12"/>

      <!-- CONTEXTE ANATOMIQUE: organes voisins fantômes -->

      <!-- MAGEN (estomac, gauche) - forme de J arrondie -->
      <path d="M 30 40 Q 20 60 22 100 Q 24 140 40 165 Q 55 185 75 178 Q 95 170 100 150 Q 108 125 105 100 Q 102 75 90 55 Q 78 38 60 35 Q 42 32 30 40 Z"
        fill="rgba(240,168,160,0.15)" stroke="rgba(240,168,160,0.4)" stroke-width="1.5"/>
      <text x="60" y="105" text-anchor="middle" fill="rgba(240,168,160,0.5)" font-size="11" font-family="DM Sans" font-weight="600">Magen</text>
      <text x="60" y="120" text-anchor="middle" fill="rgba(240,168,160,0.3)" font-size="8" font-family="DM Sans">(Gaster)</text>

      <!-- DUODENUM (c-förmig autour du Kopf) -->
      <path d="M 140 110 Q 132 85 138 65 Q 144 50 155 48 Q 168 46 175 58"
        fill="none" stroke="rgba(232,184,112,0.5)" stroke-width="14" stroke-linecap="round"/>
      <path d="M 140 110 Q 135 128 138 148 Q 142 168 155 175 Q 168 182 180 176"
        fill="none" stroke="rgba(232,184,112,0.5)" stroke-width="14" stroke-linecap="round"/>
      <!-- Canal de Wirsung -->
      <path d="M 175 58 Q 230 68 310 72 Q 370 74 420 76"
        fill="none" stroke="rgba(232,184,112,0.6)" stroke-width="3" stroke-dasharray="5 3"/>
      <text x="118" y="200" text-anchor="middle" fill="rgba(232,184,112,0.55)" font-size="9" font-family="DM Sans">Duodenum</text>

      <!-- MILZ (rate, droite) - forme de fève -->
      <path d="M 478 45 Q 510 38 525 60 Q 538 82 530 105 Q 520 125 500 128 Q 478 128 465 110 Q 455 92 462 70 Q 468 52 478 45 Z"
        fill="rgba(192,144,192,0.18)" stroke="rgba(192,144,192,0.45)" stroke-width="1.5"/>
      <text x="495" y="86" text-anchor="middle" fill="rgba(192,144,192,0.55)" font-size="11" font-family="DM Sans" font-weight="600">Milz</text>
      <text x="495" y="100" text-anchor="middle" fill="rgba(192,144,192,0.35)" font-size="8" font-family="DM Sans">(Splen)</text>

      <!-- ===== PANKREAS principal ===== -->

      <!-- KOPF (rouge-saumon, rond, entouré Duodenum) -->
      <ellipse id="svg-kopf" cx="188" cy="112" rx="48" ry="58"
        fill="url(#kopfGrad)" stroke="#f87171" stroke-width="2.5"
        cursor="pointer" style="transition:all .35s;filter:drop-shadow(0 3px 8px rgba(248,113,113,0.3))"/>
      <!-- Texture Kopf -->
      <ellipse cx="188" cy="108" rx="35" ry="42" fill="rgba(255,255,255,0.06)"/>
      <ellipse cx="178" cy="100" rx="15" ry="12" fill="rgba(255,255,255,0.05)"/>
      <!-- Labels Kopf -->
      <text x="188" y="106" text-anchor="middle" fill="white" font-size="12" font-family="DM Sans" font-weight="800" pointer-events="none">Kopf</text>
      <text x="188" y="120" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="9" font-family="DM Sans" pointer-events="none">Caput</text>
      <!-- Vater-Papille point -->
      <circle cx="155" cy="130" r="5" fill="#fbbf24" opacity="0.9"/>
      <line x1="150" y1="132" x2="120" y2="148" stroke="rgba(251,191,36,0.5)" stroke-width="1"/>
      <text x="118" y="162" text-anchor="middle" fill="rgba(251,191,36,0.7)" font-size="7.5" font-family="DM Sans">Vater-</text>
      <text x="118" y="172" text-anchor="middle" fill="rgba(251,191,36,0.7)" font-size="7.5" font-family="DM Sans">Papille</text>

      <!-- KÖRPER (turquoise, allongé, au centre) -->
      <path id="svg-koerper"
        d="M 233 72 Q 280 58 330 62 Q 345 64 348 80 Q 350 96 348 112 Q 346 126 330 130 Q 280 134 233 128 Q 228 126 226 112 Q 224 96 226 80 Q 228 66 233 72 Z"
        fill="url(#koerperGrad)" stroke="#2dd4bf" stroke-width="2.5"
        cursor="pointer" style="transition:all .35s;filter:drop-shadow(0 3px 8px rgba(45,212,191,0.3))"/>
      <!-- Texture Körper -->
      <ellipse cx="290" cy="96" rx="45" ry="28" fill="rgba(255,255,255,0.07)"/>
      <!-- Langerhans-Inseln (petits cercles lumineux) -->
      <circle cx="268" cy="92" r="7" fill="rgba(255,255,255,0.25)" stroke="white" stroke-width="1">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="290" cy="98" r="6" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="1">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="312" cy="90" r="5" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="1">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <!-- Labels Körper -->
      <text x="290" y="93" text-anchor="middle" fill="white" font-size="12" font-family="DM Sans" font-weight="800" pointer-events="none">Körper</text>
      <text x="290" y="107" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="9" font-family="DM Sans" pointer-events="none">Corpus</text>
      <!-- Label Langerhans -->
      <line x1="290" y1="66" x2="290" y2="55" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
      <text x="290" y="50" text-anchor="middle" fill="rgba(255,255,255,0.65)" font-size="8" font-family="DM Sans">Langerhans-Inseln ✨</text>

      <!-- SCHWANZ (jaune-doré, effilé, vers milz) -->
      <path id="svg-schwanz"
        d="M 346 66 Q 380 54 415 58 Q 440 62 458 74 Q 468 84 462 98 Q 455 112 435 116 Q 408 120 374 116 Q 355 112 346 100 Q 344 90 346 78 Z"
        fill="url(#schwanzGrad)" stroke="#fbbf24" stroke-width="2.5"
        cursor="pointer" style="transition:all .35s;filter:drop-shadow(0 3px 8px rgba(251,191,36,0.3))"/>
      <!-- Texture Schwanz -->
      <ellipse cx="402" cy="88" rx="45" ry="24" fill="rgba(255,255,255,0.07)"/>
      <!-- Labels Schwanz -->
      <text x="405" y="85" text-anchor="middle" fill="white" font-size="12" font-family="DM Sans" font-weight="800" pointer-events="none">Schwanz</text>
      <text x="405" y="99" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="9" font-family="DM Sans" pointer-events="none">Cauda</text>

      <!-- Canal principal (Ductus pancreaticus) -->
      <path d="M 188 112 Q 240 110 290 108 Q 340 106 420 100"
        fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="3" stroke-dasharray="6 3"/>
      <text x="300" y="148" text-anchor="middle" fill="rgba(255,255,255,0.25)" font-size="8" font-family="DM Sans">Ductus pancreaticus</text>

      <!-- Flèches hormones depuis Körper vers sang -->
      <!-- Insulin arrow -->
      <path d="M 268 92 Q 260 150 250 200" fill="none" stroke="rgba(45,212,191,0.6)" stroke-width="2" marker-end="url(#arrowTeal)"/>
      <rect x="225" y="205" width="55" height="20" rx="6" fill="rgba(45,212,191,0.15)" stroke="rgba(45,212,191,0.4)" stroke-width="1"/>
      <text x="252" y="218" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="700" fill="#2dd4bf">💉 Insulin</text>
      <!-- Glukagon arrow -->
      <path d="M 312 90 Q 318 150 325 200" fill="none" stroke="rgba(251,191,36,0.6)" stroke-width="2"/>
      <rect x="298" y="205" width="60" height="20" rx="6" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.4)" stroke-width="1"/>
      <text x="328" y="218" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="700" fill="#fbbf24">⬆ Glukagon</text>
      <!-- Flèche vers sang -->
      <path d="M 252 225 Q 280 240 328 225" fill="none" stroke="rgba(248,113,113,0.4)" stroke-width="1.5" stroke-dasharray="4 2"/>
      <text x="290" y="250" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(248,113,113,0.6)">→ direkt ins Blut (endokrin)</text>

      <!-- Flèche exokrin vers Duodenum -->
      <path d="M 155 145 Q 148 158 145 170" fill="none" stroke="rgba(232,184,112,0.7)" stroke-width="2"/>
      <text x="100" y="218" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(232,184,112,0.7)">→ Verdauungsenzyme</text>
      <text x="100" y="228" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(232,184,112,0.5)">(exokrin)</text>

      <!-- Légende animée Langerhans -->
      <circle cx="30" cy="240" r="6" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="1">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="42" y="244" font-size="8" font-family="DM Sans" fill="rgba(255,255,255,0.5)">Langerhans-Inseln (endokrin) → Insulin + Glukagon ins Blut</text>
    </svg>

    <!-- Labels interactifs -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:10px">
      <div class="lekt-anat-lbl active" id="lbl-kopf" onclick="svgSelect('kopf')" style="cursor:pointer">
        <div class="lekt-anat-dot" style="background:#f0a090;border:2px solid #f87171"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:#f87171;margin-bottom:1px">Kopf (Caput)</div><div style="font-size:.67rem;color:var(--ink2)">C-förmig vom Duodenum umschlossen · Vater-Papille</div></div>
      </div>
      <div class="lekt-anat-lbl" id="lbl-koerper" onclick="svgSelect('koerper')" style="cursor:pointer">
        <div class="lekt-anat-dot" style="background:#40a898;border:2px solid #2dd4bf"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:#2dd4bf;margin-bottom:1px">Körper (Corpus)</div><div style="font-size:.67rem;color:var(--ink2)">Langerhans-Inseln ✨ → Insulin & Glukagon</div></div>
      </div>
      <div class="lekt-anat-lbl" id="lbl-schwanz" onclick="svgSelect('schwanz')" style="cursor:pointer">
        <div class="lekt-anat-dot" style="background:#d8a030;border:2px solid #fbbf24"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:#fbbf24;margin-bottom:1px">Schwanz (Cauda)</div><div style="font-size:.67rem;color:var(--ink2)">Grenzt an die Milz (Splen) · linker Oberbauch</div></div>
      </div>
    </div>
  </div>
</div>

<!-- 03 HORMONE -->
<div class="lekt-sec" id="lsec-hormone">
  <div class="lekt-sec-label"><span class="lekt-num">03</span><span class="lekt-title">Insulin & Glukagon — Die zwei Gegenspieler</span></div>
  <p class="lekt-prose">In den <strong>Langerhans-Inseln</strong> werden ca. 1 Million Hormone direkt ins Blut abgegeben. Die zwei Schlüsselhormone sind Gegenspieler die den BZ im Gleichgewicht halten.</p>
  <div class="lekt-card">
    <div class="lekt-card-label">⚖️ Insulin vs. Glukagon</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
      <div style="background:var(--teal-dim);border:1px solid rgba(45,212,191,.2);border-radius:14px;padding:20px;text-align:center">
        <div style="font-size:1.8rem;margin-bottom:8px">💉</div>
        <div style="font-weight:700;color:var(--teal);margin-bottom:3px">INSULIN</div>
        <div style="font-size:.7rem;color:var(--ink2);margin-bottom:12px">B-Zellen (70% der Inselzellen)</div>
        <div style="font-size:1.4rem;animation:bDown 1.5s infinite">⬇️</div>
        <div style="background:rgba(45,212,191,.15);color:var(--teal);font-size:.78rem;font-weight:700;padding:5px 12px;border-radius:8px;margin-top:10px;display:inline-block">Blutzucker senken</div>
      </div>
      <div style="background:var(--amber-dim);border:1px solid rgba(251,191,36,.2);border-radius:14px;padding:20px;text-align:center">
        <div style="font-size:1.8rem;margin-bottom:8px">⬆️</div>
        <div style="font-weight:700;color:var(--amber);margin-bottom:3px">GLUKAGON</div>
        <div style="font-size:.7rem;color:var(--ink2);margin-bottom:12px">A-Zellen der Langerhans-Inseln</div>
        <div style="font-size:1.4rem;animation:bUp 1.5s infinite">⬆️</div>
        <div style="background:rgba(251,191,36,.15);color:var(--amber);font-size:.78rem;font-weight:700;padding:5px 12px;border-radius:8px;margin-top:10px;display:inline-block">Blutzucker erhöhen</div>
      </div>
    </div>
  </div>
  <div class="lekt-merkhilfe">
    <span style="font-size:1.4rem">🧠</span>
    <div><div style="font-size:.67rem;font-weight:800;letter-spacing:.5px;text-transform:uppercase;color:var(--teal);margin-bottom:4px">Merkhilfe</div>
    <div style="font-size:.85rem"><strong style="color:var(--teal)">B wie Bremse</strong> → B-Zellen = Insulin = BZ bremsen<br><strong style="color:var(--amber)">A wie Anstieg</strong> → A-Zellen = Glukagon = BZ ansteigen lassen</div></div>
  </div>
  <div class="lekt-klausur"><div class="lekt-klausur-lbl">⚠️ Klausur</div>Verwechslung von A- und B-Zellen ist einer der <strong>häufigsten Fehler</strong>! A → Glukagon (Anstieg). B → Insulin (Bremse). Sitzt das?</div>
</div>

<!-- 04 BZ WERTE -->
<div class="lekt-sec" id="lsec-werte">
  <div class="lekt-sec-label"><span class="lekt-num">04</span><span class="lekt-title">Normale & kritische Blutzuckerwerte</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label">📊 BZ-Skala (mg/dl)</div>
    <div style="display:flex;flex-direction:column;gap:10px">
      ${[["Hypoglykämie 🚨","8%","var(--rose)","< 70 mg/dl"],["Normal nüchtern ✓","25%","var(--green)","70–100 mg/dl"],["Nach dem Essen","35%","var(--teal)","bis 140 mg/dl"],["Prädiabetes ⚠️","50%","var(--amber)","100–125 mg/dl"],["Diabetes mellitus","65%","#f97316","≥ 126 mg/dl"],["Nierenschwelle 🔴","80%","var(--rose)","> 180 mg/dl"]].map(([e,t,r,n])=>`
      <div style="display:flex;align-items:center;gap:12px">
        <div style="font-size:.75rem;font-weight:500;color:var(--ink2);width:160px;flex-shrink:0">${e}</div>
        <div style="flex:1;height:10px;background:var(--bg3);border-radius:5px;overflow:hidden"><div style="width:${t};height:100%;background:${r};border-radius:5px;animation:growBar .9s ease both"></div></div>
        <div style="font-size:.72rem;font-weight:700;width:100px;text-align:right;color:${r}">${n}</div>
      </div>`).join("")}
    </div>
  </div>
</div>

<!-- 05 HYPO & HYPER -->
<div class="lekt-sec" id="lsec-hypo">
  <div class="lekt-sec-label"><span class="lekt-num">05</span><span class="lekt-title">Hypoglykämie & Hyperglykämie im Vergleich</span></div>
  <p class="lekt-prose"><strong>Wichtig: Immer zuerst messen bevor gehandelt wird!</strong> Beide Zustände sind gefährlich und werden oft in der Klausur verglichen.</p>
  <div class="lekt-card">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
      <div style="background:var(--rose-dim);border:1px solid rgba(248,113,113,.25);border-radius:14px;padding:18px">
        <div style="font-weight:700;font-size:.9rem;color:var(--rose);margin-bottom:4px">⬇️ Hypoglykämie</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--border)">BZ unter 70 mg/dl</div>
        ${["Zittern, Schwitzen","Verwirrtheit, Unruhe","Heißhunger","Blässe, Herzrasen","Im Extremfall: Koma"].map(e=>`<div style="font-size:.78rem;color:var(--ink2);padding:3px 0 3px 14px;position:relative"><span style="position:absolute;left:0;color:var(--rose)">•</span>${e}</div>`).join("")}
        <div style="margin-top:12px;padding:9px 12px;background:rgba(248,113,113,.1);border-radius:8px;font-size:.74rem;color:var(--rose);font-weight:600">🚨 MESSEN → Traubenzucker</div>
      </div>
      <div style="background:rgba(251,146,60,.08);border:1px solid rgba(251,146,60,.25);border-radius:14px;padding:18px">
        <div style="font-weight:700;font-size:.9rem;color:#fb923c;margin-bottom:4px">⬆️ Hyperglykämie</div>
        <div style="font-size:.72rem;color:var(--ink2);margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--border)">BZ über 126 mg/dl nüchtern</div>
        ${["Starker Durst (Polydipsie)","Häufiges Wasserlassen (Polyurie)","Müdigkeit, Schwäche","Sehstörungen","Im Extremfall: Koma"].map(e=>`<div style="font-size:.78rem;color:var(--ink2);padding:3px 0 3px 14px;position:relative"><span style="position:absolute;left:0;color:#fb923c">•</span>${e}</div>`).join("")}
        <div style="margin-top:12px;padding:9px 12px;background:rgba(251,146,60,.1);border-radius:8px;font-size:.74rem;color:#fb923c;font-weight:600">🔶 MESSEN → Arzt → Insulin</div>
      </div>
    </div>
  </div>
  <div class="lekt-klausur"><div class="lekt-klausur-lbl">⚠️ Klausur — FALLE!</div>Wenn unklar ob Hypo oder Hyper: <strong>NIEMALS blind handeln — IMMER ZUERST MESSEN!</strong></div>
</div>

<!-- 06 BUS -->
<div class="lekt-sec" id="lsec-bus">
  <div class="lekt-sec-label"><span class="lekt-num">06</span><span class="lekt-title">Glukosurie & Polydipsie — Die Bus-Analogie</span></div>
  <p class="lekt-prose">Ab BZ > <strong>180 mg/dl</strong> (Nierenschwelle) scheidet die Niere Zucker im Urin aus (Glukosurie). Zucker zieht Wasser mit → Exsikkose → Polydipsie.</p>
  <div class="lekt-card">
    <div class="lekt-card-label">🚌 Interaktiv — schiebe den BZ-Regler!</div>
    <div style="background:var(--bg3);border-radius:12px;padding:18px">
      <div style="display:flex;align-items:flex-end;gap:10px;margin-bottom:10px">
        <div style="font-size:2.2rem;transition:transform .4s" id="lbus">🚌</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;flex:1" id="lbus-seats"></div>
      </div>
      <div style="height:5px;border-radius:3px;margin-bottom:12px;transition:background 1s" id="lbus-road"></div>
      <div style="font-size:.78rem;color:var(--ink2);line-height:1.5;min-height:44px" id="lbus-info"></div>
      <div style="margin-top:14px">
        <div style="display:flex;justify-content:space-between;font-size:.7rem;color:var(--ink3);margin-bottom:5px">
          <span>Blutzucker</span><strong style="color:var(--ink);font-size:.8rem" id="lbz-val">90 mg/dl</strong>
        </div>
        <input type="range" min="50" max="420" value="90" style="width:100%;accent-color:#dc2626;cursor:pointer" oninput="lBusUpdate(this.value)">
        <div style="display:flex;justify-content:space-between;font-size:.65rem;color:var(--ink3);margin-top:3px">
          <span>50</span><span style="color:var(--rose);font-weight:700">180 Nierenschwelle</span><span>420</span>
        </div>
      </div>
    </div>
    <p style="font-size:.7rem;color:var(--ink3);margin-top:8px;text-align:center">🎮 Schiebe auf über 180 mg/dl und beobachte die Glukosurie!</p>
  </div>
  <div class="lekt-klausur"><div class="lekt-klausur-lbl">⚠️ Klausur — Kette!</div><strong>BZ &gt; 180 → Glukosurie → Zucker zieht Wasser → Exsikkose → Polydipsie.</strong></div>
</div>

<!-- ZUSAMMENFASSUNG -->
<div class="lekt-sec" id="lsec-summary">
  <div class="lekt-sec-label"><span class="lekt-num">✓</span><span class="lekt-title">Zusammenfassung</span></div>
  <div class="lekt-card">
    ${[["01","Glukose = Energie für alle Zellen. Kohlenhydrate → Darm → Blut → Insulin → Zelle."],["02","Pankreas: Kopf (Caput), Körper (Corpus, Langerhans-Inseln!), Schwanz (Cauda, Milz)."],["03","B-Zellen = Insulin (Bremse) · A-Zellen = Glukagon (Anstieg) — niemals verwechseln!"],["04","Normal: 70–100 nüchtern. Hypo: <70. Diabetes: ≥126. Nierenschwelle: >180 mg/dl."],["05","Hypo: Zittern, Schwitzen, Heißhunger. Hyper: Durst, Polyurie. Immer ZUERST MESSEN!"],["06","BZ >180 → Glukosurie → Wasserverlust → Exsikkose → Polydipsie."]].map(([e,t])=>`
    <div style="display:flex;gap:12px;align-items:flex-start;font-size:.85rem;padding:11px 14px;background:rgba(255,255,255,.02);border-radius:9px;border:1px solid var(--border);margin-bottom:8px">
      <span style="color:#f87171;font-weight:800;flex-shrink:0">${e}</span><span>${t}</span>
    </div>`).join("")}
  </div>
  <button class="lekt-quiz-btn" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Diabetes starten →</button>
</div>

</div><!-- /main content -->

</div><!-- /lekt-layout -->`},haut:{"Haut und ihre Aufgaben":()=>`
<div class="lekt-layout">
<div>

<!-- HERO VERT -->
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Lektion 1</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Die Haut & ihre Aufgaben</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Das größte Organ des Körpers — Schutz, Kommunikation und weit mehr</div>
  </div>
</div>

<!-- SEC 1: Was ist die Haut -->
<div class="lekt-sec" id="lsec-haut-intro">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Was ist die Haut? (Cutis)</span></div>
  <p class="lekt-prose">Die Haut (lat. <strong>Cutis</strong>) ist das <strong>größte und nervenreichste Organ</strong> des Menschen. Je nach Körpergröße wiegt sie bis zu <strong>20 kg</strong> (mit Subcutis) und ist <strong>1,5–2 m²</strong> groß. Sie ist das Grenzorgan zur Umwelt.</p>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">📐 Hautoberflächenverteilung — Erwachsener vs. Kind</div>
    <!-- SVG animé reproduisant l'image 5 -->
    <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;margin-top:8px;border-radius:12px">
      <defs>
        <linearGradient id="skinAdult" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8a878"/><stop offset="100%" stop-color="#c88858"/>
        </linearGradient>
        <linearGradient id="skinChild" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#dba878"/><stop offset="100%" stop-color="#b87858"/>
        </linearGradient>
        <filter id="sfShadow"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="rgba(0,0,0,0.4)"/></filter>
      </defs>
      <rect width="480" height="260" rx="12" fill="#0c1520"/>
      <text x="240" y="18" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="800" fill="rgba(255,255,255,0.85)">Körperoberfläche — Neunerregel (Wallace)</text>

      <!-- ═══ ADULTE (gauche) ═══ -->
      <text x="110" y="36" text-anchor="middle" font-size="10" font-family="DM Sans" font-weight="700" fill="#4ade80">Erwachsener</text>
      <text x="110" y="47" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(74,222,128,0.6)">1,55–2,10 m²</text>

      <!-- Tête adulte -->
      <ellipse cx="110" cy="72" rx="18" ry="21" fill="rgba(251,191,36,0.3)" stroke="#fbbf24" stroke-width="2" filter="url(#sfShadow)"/>
      <ellipse cx="110" cy="72" rx="18" ry="21" fill="url(#skinAdult)" opacity="0.4"/>
      <text x="110" y="76" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="900" fill="#fbbf24">9%</text>
      <!-- Visage simplifié -->
      <circle cx="116" cy="67" r="2.5" fill="rgba(0,0,0,0.35)"/>
      <path d="M105 79 Q110 83 115 79" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" stroke-linecap="round"/>

      <!-- Cou adulte -->
      <rect x="103" y="93" width="14" height="10" rx="4" fill="url(#skinAdult)" opacity="0.7"/>

      <!-- Tronc adulte (avant + arrière = 18%+18%) -->
      <path d="M82 103 Q78 106 76 110 L76 165 Q78 170 82 172 L138 172 Q142 170 144 165 L144 110 Q142 106 138 103 Z"
            fill="rgba(251,191,36,0.25)" stroke="#fbbf24" stroke-width="1.8" filter="url(#sfShadow)"/>
      <path d="M82 103 Q78 106 76 110 L76 165 Q78 170 82 172 L138 172 Q142 170 144 165 L144 110 Q142 106 138 103 Z"
            fill="url(#skinAdult)" opacity="0.35"/>
      <!-- Muscles pectoraux simulés -->
      <path d="M88 112 Q110 108 132 112" fill="none" stroke="rgba(255,215,150,0.2)" stroke-width="1"/>
      <path d="M85 125 Q110 120 135 125" fill="none" stroke="rgba(255,215,150,0.15)" stroke-width="1"/>
      <text x="110" y="140" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="900" fill="#fbbf24">18%</text>
      <text x="110" y="152" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(251,191,36,0.7)">vorne + hinten</text>

      <!-- Bras gauche adulte -->
      <path d="M73 106 Q66 108 62 115 L57 155 Q58 162 63 164 Q68 166 72 160 L77 120 Q76 110 73 106Z"
            fill="rgba(96,165,250,0.25)" stroke="#60a5fa" stroke-width="1.8"/>
      <path d="M73 106 Q66 108 62 115 L57 155 Q58 162 63 164 Q68 166 72 160 L77 120 Q76 110 73 106Z"
            fill="url(#skinAdult)" opacity="0.3"/>
      <text x="65" y="140" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="900" fill="#60a5fa">9%</text>

      <!-- Main gauche adulte -->
      <ellipse cx="60" cy="168" rx="7" ry="10" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1.2"/>

      <!-- Bras droit adulte -->
      <path d="M147 106 Q154 108 158 115 L163 155 Q162 162 157 164 Q152 166 148 160 L143 120 Q144 110 147 106Z"
            fill="rgba(96,165,250,0.25)" stroke="#60a5fa" stroke-width="1.8"/>
      <path d="M147 106 Q154 108 158 115 L163 155 Q162 162 157 164 Q152 166 148 160 L143 120 Q144 110 147 106Z"
            fill="url(#skinAdult)" opacity="0.3"/>
      <text x="155" y="140" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="900" fill="#60a5fa">9%</text>
      <ellipse cx="160" cy="168" rx="7" ry="10" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1.2"/>

      <!-- Bassin/périnée adulte -->
      <ellipse cx="110" cy="174" rx="20" ry="8" fill="rgba(248,113,113,0.25)" stroke="#f87171" stroke-width="1.5"/>
      <text x="110" y="177" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="900" fill="#f87171">1%</text>

      <!-- Jambe gauche adulte -->
      <path d="M84 178 Q80 182 79 190 L78 245 Q80 250 86 250 Q92 250 94 245 L95 190 Q94 182 90 178Z"
            fill="rgba(192,132,252,0.25)" stroke="#c084fc" stroke-width="1.8"/>
      <path d="M84 178 Q80 182 79 190 L78 245 Q80 250 86 250 Q92 250 94 245 L95 190 Q94 182 90 178Z"
            fill="url(#skinAdult)" opacity="0.3"/>
      <text x="86" y="218" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="900" fill="#c084fc">18%</text>

      <!-- Jambe droite adulte -->
      <path d="M130 178 Q134 182 135 190 L136 245 Q134 250 128 250 Q122 250 120 245 L119 190 Q120 182 124 178Z"
            fill="rgba(192,132,252,0.25)" stroke="#c084fc" stroke-width="1.8"/>
      <path d="M130 178 Q134 182 135 190 L136 245 Q134 250 128 250 Q122 250 120 245 L119 190 Q120 182 124 178Z"
            fill="url(#skinAdult)" opacity="0.3"/>
      <text x="128" y="218" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="900" fill="#c084fc">18%</text>

      <!-- ═══ SÉPARATEUR ═══ -->
      <line x1="240" y1="30" x2="240" y2="255" stroke="rgba(255,255,255,0.07)" stroke-width="1.5" stroke-dasharray="5 3"/>
      <text x="240" y="148" text-anchor="middle" font-size="11" fill="rgba(255,255,255,0.15)" transform="rotate(-90,240,148)">vs.</text>

      <!-- ═══ ENFANT (droite) ═══ -->
      <text x="370" y="36" text-anchor="middle" font-size="10" font-family="DM Sans" font-weight="700" fill="#60a5fa">Kind (5 Jahre)</text>
      <text x="370" y="47" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(96,165,250,0.6)">andere Proportionen!</text>

      <!-- Tête enfant (plus grande = 15%) -->
      <ellipse cx="370" cy="75" rx="24" ry="27" fill="rgba(96,165,250,0.35)" stroke="#60a5fa" stroke-width="2.2" filter="url(#sfShadow)"/>
      <ellipse cx="370" cy="75" rx="24" ry="27" fill="url(#skinChild)" opacity="0.4"/>
      <text x="370" y="78" text-anchor="middle" font-size="10" font-family="DM Sans" font-weight="900" fill="#60a5fa">15%</text>
      <!-- Visage enfant -->
      <circle cx="376" cy="69" r="2.8" fill="rgba(0,0,0,0.35)"/>
      <path d="M362 82 Q370 87 378 82" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" stroke-linecap="round"/>

      <!-- Cou enfant -->
      <rect x="362" y="102" width="16" height="10" rx="4" fill="url(#skinChild)" opacity="0.7"/>

      <!-- Tronc enfant -->
      <path d="M344 112 Q340 116 338 122 L338 170 Q340 175 344 177 L396 177 Q400 175 402 170 L402 122 Q400 116 396 112 Z"
            fill="rgba(251,191,36,0.25)" stroke="#fbbf24" stroke-width="1.8" filter="url(#sfShadow)"/>
      <path d="M344 112 Q340 116 338 122 L338 170 Q340 175 344 177 L396 177 Q400 175 402 170 L402 122 Q400 116 396 112 Z"
            fill="url(#skinChild)" opacity="0.35"/>
      <text x="370" y="147" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="900" fill="#fbbf24">16%</text>
      <text x="370" y="159" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(251,191,36,0.7)">vorne + hinten</text>

      <!-- Bras gauche enfant -->
      <path d="M336 116 Q330 118 328 125 L325 155 Q326 162 330 163 Q335 164 337 158 L340 128 Q339 118 336 116Z"
            fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1.5"/>
      <text x="330" y="143" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="900" fill="#60a5fa">9.5%</text>

      <!-- Bras droit enfant -->
      <path d="M404 116 Q410 118 412 125 L415 155 Q414 162 410 163 Q405 164 403 158 L400 128 Q401 118 404 116Z"
            fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1.5"/>
      <text x="410" y="143" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="900" fill="#60a5fa">9.5%</text>

      <!-- Jambes enfant (plus courtes = 17% chacune) -->
      <path d="M344 182 Q340 186 339 194 L338 248 Q340 252 346 252 Q352 252 354 248 L355 194 Q354 186 350 182Z"
            fill="rgba(192,132,252,0.25)" stroke="#c084fc" stroke-width="1.8"/>
      <text x="346" y="222" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="900" fill="#c084fc">17%</text>

      <path d="M396 182 Q400 186 401 194 L402 248 Q400 252 394 252 Q388 252 386 248 L385 194 Q386 186 390 182Z"
            fill="rgba(192,132,252,0.25)" stroke="#c084fc" stroke-width="1.8"/>
      <text x="394" y="222" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="900" fill="#c084fc">17%</text>

      <!-- Note comparative bas -->
      <rect x="5" y="252" width="470" height="20" rx="0 0 12 12" fill="rgba(0,0,0,0.4)"/>
      <text x="240" y="265" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(148,163,184,0.8)">⚠️ Kind: Kopf 15% (statt 9%) — Beine 17% (statt 18%) — wichtig bei Verbrennungsberechnung!</text>
    </svg>
  </div>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">⚙️ Funktionen der Haut</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:4px">
      ${[["🛡️","Passiver Schutz","Kälte, Hitze, Strahlung, Druck, Stoß, chem. Substanzen"],["🦠","Aktiver Schutz","Säureschutzmantel abwehrt Keime"],["💧","Resorption","Aufnahme best. Wirkstoffe durch die Haut"],["🌡️","Thermoregulation","Schweißproduktion, Hydrolipidfilm"],["👁️","Sinnesorgan","Druck, Vibration, Tast-, Schmerz-, Temperaturreiz"],["💬","Kommunikation","Errötung, Schwitzen, Gänsehaut als Signale"]].map(([e,t,r])=>`
      <div style="display:flex;gap:10px;padding:10px 12px;background:rgba(255,255,255,.02);border:1px solid var(--border);border-radius:9px;align-items:flex-start">
        <span style="font-size:1.2rem;flex-shrink:0">${e}</span>
        <div><div style="font-weight:700;font-size:.8rem;color:#4ade80;margin-bottom:2px">${t}</div><div style="font-size:.72rem;color:var(--ink2);line-height:1.4">${r}</div></div>
      </div>`).join("")}
    </div>
  </div>
</div>

<!-- SEC 2: Säureschutzmantel & Flora -->
<div class="lekt-sec" id="lsec-haut-schutz">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Säureschutzmantel & Hautflora</span></div>
  <p class="lekt-prose">Der <strong>Säureschutzmantel</strong> = Hydro-Lipid-Film. Er besteht aus <strong>Lipiden</strong> der Talgdrüsen und <strong>Hydro</strong> der Schweißdrüsen. Er schützt die Haut vor Keimen.</p>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🛡️ Hydro-Lipid-Film — interaktiv</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
      <div style="background:rgba(96,165,250,.08);border:1.5px solid rgba(96,165,250,.3);border-radius:12px;padding:14px;cursor:pointer;transition:all .3s" onclick="this.style.borderColor='#60a5fa';this.style.background='rgba(96,165,250,.15)'">
        <div style="font-size:1.3rem;margin-bottom:6px">💧</div>
        <div style="font-weight:700;font-size:.82rem;color:#60a5fa;margin-bottom:4px">"Hydro"</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">Aus den <strong>Schweißdrüsen</strong> — wässriger Anteil des Films</div>
      </div>
      <div style="background:rgba(251,191,36,.08);border:1.5px solid rgba(251,191,36,.3);border-radius:12px;padding:14px;cursor:pointer;transition:all .3s" onclick="this.style.borderColor='#fbbf24';this.style.background='rgba(251,191,36,.15)'">
        <div style="font-size:1.3rem;margin-bottom:6px">🧴</div>
        <div style="font-weight:700;font-size:.82rem;color:#fbbf24;margin-bottom:4px">"Lipid"</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">Aus den <strong>Talgdrüsen</strong> — fetthaltiger Anteil des Films</div>
      </div>
    </div>
    <div style="margin-top:10px;background:rgba(248,113,113,.06);border-left:3px solid #f87171;border-radius:0 9px 9px 0;padding:10px 14px;font-size:.78rem;color:var(--ink2)">
      ⚠️ <strong style="color:#f87171">Pflegerelevant:</strong> Häufiges Händewaschen und Einmalhandschuhe beschädigen den Säureschutzmantel! → Rückfettendes Desinfektionsmittel + Hautpflege verwenden.
    </div>
  </div>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🦠 Hautflora — 3 Typen</div>
    ${[["🟢","Residente Hautflora","Immer vorhanden, nicht pathogen (physiologisch)","Dauerhaft"],["🟡","Transiente Hautflora","Vorübergehend vorhanden, nicht pathogen","Temporär"],["🔴","Infektionsflora","PATHOGEN — verursacht Infektionen","Gefährlich"]].map(([e,t,r,n])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:11px 13px;border-radius:11px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:8px">
      <div style="font-size:1rem;flex-shrink:0;margin-top:1px">${e}</div>
      <div><div style="font-weight:700;font-size:.82rem;margin-bottom:2px">${t} <span style="font-size:.68rem;font-weight:400;color:var(--ink3)">(${n})</span></div><div style="font-size:.73rem;color:var(--ink2)">${r}</div></div>
    </div>`).join("")}
  </div>
</div>

<!-- SEC 3: Hauttypen (Leisten/Feld) -->
<div class="lekt-sec" id="lsec-haut-typen">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Leistenhaut & Felderhaut</span></div>
  <p class="lekt-prose">Man unterscheidet zwei Arten von Haut nach ihrer Oberflächenstruktur:</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">
    <div style="background:rgba(96,165,250,.08);border:1.5px solid rgba(96,165,250,.25);border-radius:14px;padding:16px">
      <div style="font-weight:800;font-size:.88rem;color:#60a5fa;margin-bottom:8px">👋 Leistenhaut</div>
      <div style="font-size:.75rem;color:var(--ink2);line-height:1.6">Handflächen + Fußsohlen<br>Dicke bis <strong>9 mm</strong><br>Hautleisten + Furchen<br>Keine Haare, keine Talgdrüsen<br>Schweißdrüsen in Furchen<br>Hat <strong>Glanzzellschicht</strong></div>
    </div>
    <div style="background:rgba(192,132,252,.08);border:1.5px solid rgba(192,132,252,.25);border-radius:14px;padding:16px">
      <div style="font-weight:800;font-size:.88rem;color:#c084fc;margin-bottom:8px">🌿 Felderhaut</div>
      <div style="font-size:.75rem;color:var(--ink2);line-height:1.6">Restlicher Körper (größter Teil)<br>Dicke: Gesäß <strong>3 mm</strong>, Gesicht <strong>&lt;1 mm</strong><br>Felder durch feine Rinnen<br>Mit Haaren + Talgdrüsen<br><strong>Keine</strong> Glanzzellschicht</div>
    </div>
  </div>
  </div>

  <!-- SVG ANATOMIQUE RÉALISTE - Injektionsarten -->
  <div class="lekt-card" style="margin-top:14px">
    <div class="lekt-card-label" style="color:#4ade80">💉 Injektionsarten — anatomisch & interaktiv</div>
    <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;border-radius:12px">
      <defs>
        <linearGradient id="inj-skinTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fcd5c8"/>
          <stop offset="100%" stop-color="#f0a888"/>
        </linearGradient>
        <linearGradient id="inj-derm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e08878"/>
          <stop offset="100%" stop-color="#c86858"/>
        </linearGradient>
        <linearGradient id="inj-sub" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0c840"/>
          <stop offset="100%" stop-color="#d4a010"/>
        </linearGradient>
        <linearGradient id="inj-mus" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#d03050"/>
          <stop offset="100%" stop-color="#a01030"/>
        </linearGradient>
        <!-- Seringue gradient -->
        <linearGradient id="syr-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#d0d8e8"/>
          <stop offset="50%" stop-color="#f0f4ff"/>
          <stop offset="100%" stop-color="#b0b8c8"/>
        </linearGradient>
        <linearGradient id="syr-needle" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#c0c8d8"/>
          <stop offset="100%" stop-color="#9098a8"/>
        </linearGradient>
        <!-- Liquide dans seringue -->
        <linearGradient id="liq-im" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f87171" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#ef4444" stop-opacity="0.6"/>
        </linearGradient>
        <linearGradient id="liq-sc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.6"/>
        </linearGradient>
        <linearGradient id="liq-iv" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.6"/>
        </linearGradient>
        <linearGradient id="liq-ic" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#4ade80" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#22c55e" stop-opacity="0.6"/>
        </linearGradient>
        <filter id="inj-glow-r"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#f87171" flood-opacity="0.6"/></filter>
        <filter id="inj-glow-y"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#fbbf24" flood-opacity="0.6"/></filter>
        <filter id="inj-glow-b"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#60a5fa" flood-opacity="0.6"/></filter>
        <filter id="inj-glow-g"><feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#4ade80" flood-opacity="0.6"/></filter>
      </defs>

      <!-- FOND -->
      <rect width="560" height="320" fill="#12161f" rx="12"/>

      <!-- ===== COUCHES DE PEAU (vue latérale anatomique) ===== -->
      <!-- Surface ondulée peau (Epidermis) -->
      <path d="M 0 150 Q 70 144 140 150 Q 210 156 280 148 Q 350 142 420 150 Q 490 156 560 150 L560 175 Q 490 170 420 174 Q 350 178 280 172 Q 210 168 140 174 Q 70 178 0 174 Z"
        fill="url(#inj-skinTop)" />
      <!-- Stries cornées surface -->
      <path d="M 0 150 Q 140 146 280 150 Q 420 154 560 150" stroke="rgba(255,200,180,0.3)" stroke-width="1" fill="none"/>
      <path d="M 0 157 Q 140 153 280 157 Q 420 161 560 157" stroke="rgba(255,200,180,0.2)" stroke-width="0.7" fill="none"/>

      <!-- Dermis -->
      <path d="M 0 175 Q 140 178 280 172 Q 420 168 560 174 L560 215 Q 420 210 280 214 Q 140 218 0 215 Z"
        fill="url(#inj-derm)"/>
      <!-- Texture collagène -->
      <path d="M 0 188 Q 140 185 280 188 Q 420 191 560 188" stroke="rgba(255,180,160,0.2)" stroke-width="1" fill="none"/>
      <path d="M 0 200 Q 140 197 280 200 Q 420 203 560 200" stroke="rgba(255,180,160,0.15)" stroke-width="1" fill="none"/>
      <!-- Veine dans dermis (pour i.v.) -->
      <path d="M 50 205 Q 140 202 230 206 Q 310 209 400 205 Q 480 202 540 206"
        stroke="#4060cc" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.7"/>
      <path d="M 50 205 Q 140 202 230 206 Q 310 209 400 205 Q 480 202 540 206"
        stroke="#6080ee" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>

      <!-- Subcutis -->
      <path d="M 0 215 Q 140 218 280 214 Q 420 210 560 215 L560 262 Q 420 258 280 262 Q 140 266 0 262 Z"
        fill="url(#inj-sub)"/>
      <!-- Fettkügelchen subcutis -->
      ${[[30,240],[70,248],[115,238],[160,245],[205,252],[250,242],[295,248],[340,240],[385,250],[430,244],[475,252],[520,240],[50,255],[130,260],[210,257],[290,260],[370,255],[450,258],[510,254]].map(([e,t])=>`<circle cx="${e}" cy="${t}" r="9" fill="rgba(255,210,80,0.35)" stroke="rgba(200,160,20,0.4)" stroke-width="0.8"/>`).join("")}

      <!-- Muskel -->
      <path d="M 0 262 Q 140 266 280 262 Q 420 258 560 262 L560 308 Q 420 304 280 308 Q 140 312 0 308 Z"
        fill="url(#inj-mus)"/>
      <!-- Stries musculaires -->
      <path d="M 0 275 Q 140 272 280 275 Q 420 278 560 275" stroke="rgba(255,150,150,0.2)" stroke-width="1.5" fill="none"/>
      <path d="M 0 288 Q 140 285 280 288 Q 420 291 560 288" stroke="rgba(255,150,150,0.15)" stroke-width="1.5" fill="none"/>
      <path d="M 0 300 Q 140 297 280 300 Q 420 303 560 300" stroke="rgba(255,150,150,0.1)" stroke-width="1" fill="none"/>

      <!-- Labels couches (droite) -->
      <text x="555" y="163" text-anchor="end" font-size="8.5" font-family="DM Sans" font-weight="700" fill="#fcd5c8">Epidermis</text>
      <text x="555" y="197" text-anchor="end" font-size="8.5" font-family="DM Sans" font-weight="700" fill="#fbbf24">Dermis</text>
      <text x="555" y="207" text-anchor="end" font-size="7" font-family="DM Sans" fill="rgba(96,165,250,0.8)">+ Vene</text>
      <text x="555" y="240" text-anchor="end" font-size="8.5" font-family="DM Sans" font-weight="700" fill="#f0c840">Subcutis</text>
      <text x="555" y="285" text-anchor="end" font-size="8.5" font-family="DM Sans" font-weight="700" fill="#f87171">Muskel</text>

      <!-- ===== SERINGUES CORRECTES - aiguille vers le bas ===== -->

      <!-- == 1. INTRAMUSKULÄR 90° - droite verticale, rouge == -->
      <!-- Piston (en haut) -->
      <rect x="58" y="5" width="18" height="5" rx="2" fill="#8090a0"/>
      <line x1="67" y1="10" x2="67" y2="16" stroke="#8090a0" stroke-width="3"/>
      <!-- Corps seringue -->
      <rect x="59" y="16" width="16" height="52" rx="3" fill="url(#syr-body)" stroke="#a0a8b8" stroke-width="1"/>
      <!-- Liquide rouge -->
      <rect x="62" y="20" width="10" height="38" rx="2" fill="url(#liq-im)"/>
      <!-- Oreilles -->
      <rect x="51" y="52" width="8" height="10" rx="2" fill="#a0a8b8"/>
      <rect x="75" y="52" width="8" height="10" rx="2" fill="#a0a8b8"/>
      <!-- Embout bas -->
      <rect x="63" y="68" width="8" height="6" rx="1" fill="#b0b8c8"/>
      <!-- Aiguille VERS LE BAS -->
      <rect x="65" y="74" width="4" height="78" rx="1" fill="url(#syr-needle)"/>
      <!-- Pointe aiguille -->
      <polygon points="65,152 69,152 67,157" fill="#9098a8"/>
      <!-- Ligne trajectoire dans la peau -->
      <line x1="67" y1="157" x2="67" y2="283" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>
      <!-- Impact Muskel -->
      <circle cx="67" cy="283" r="6" fill="#f87171" filter="url(#inj-glow-r)">
        <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite"/>
      </circle>
      <!-- Label -->
      <rect x="18" y="108" width="98" height="28" rx="6" fill="rgba(248,113,113,0.12)" stroke="rgba(248,113,113,0.4)" stroke-width="1.2"/>
      <text x="67" y="120" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#f87171">Intramuskulär</text>
      <text x="67" y="131" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(248,113,113,0.7)">i.m. · 90°</text>

      <!-- == 2. SUBKUTAN 45° - rotation autour du point d'entrée peau == -->
      <!-- Seringue correcte (piston haut, aiguille bas), pivotée 45° autour du point peau -->
      <g transform="rotate(-45, 195, 150)">
        <!-- Piston haut -->
        <rect x="187" y="55" width="16" height="5" rx="2" fill="#8090a0"/>
        <line x1="195" y1="60" x2="195" y2="66" stroke="#8090a0" stroke-width="3"/>
        <!-- Corps -->
        <rect x="188" y="66" width="14" height="52" rx="3" fill="url(#syr-body)" stroke="#a0a8b8" stroke-width="1"/>
        <!-- Liquide jaune -->
        <rect x="191" y="70" width="8" height="36" rx="2" fill="url(#liq-sc)"/>
        <!-- Oreilles -->
        <rect x="180" y="98" width="8" height="10" rx="2" fill="#a0a8b8"/>
        <rect x="204" y="98" width="8" height="10" rx="2" fill="#a0a8b8"/>
        <!-- Embout bas -->
        <rect x="191" y="118" width="8" height="5" rx="1" fill="#b0b8c8"/>
        <!-- Aiguille vers le bas -->
        <rect x="193" y="123" width="4" height="28" rx="1" fill="url(#syr-needle)"/>
        <!-- Pointe -->
        <polygon points="193,151 197,151 195,156" fill="#909898"/>
      </g>
      <!-- Ligne trajectoire + impact Subcutis -->
      <line x1="195" y1="150" x2="170" y2="248" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>
      <circle cx="168" cy="250" r="6" fill="#fbbf24" filter="url(#inj-glow-y)">
        <animate attributeName="r" values="5;9;5" dur="2.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <!-- Label -->
      <rect x="148" y="108" width="88" height="28" rx="6" fill="rgba(251,191,36,0.12)" stroke="rgba(251,191,36,0.4)" stroke-width="1.2"/>
      <text x="192" y="120" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#fbbf24">Subkutan</text>
      <text x="192" y="131" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(251,191,36,0.7)">s.c. · 45°</text>

      <!-- == 3. INTRAVENÖS 25° - rotation 25° autour du point peau == -->
      <g transform="rotate(-25, 330, 150)">
        <!-- Piston haut -->
        <rect x="322" y="60" width="16" height="5" rx="2" fill="#8090a0"/>
        <line x1="330" y1="65" x2="330" y2="71" stroke="#8090a0" stroke-width="3"/>
        <!-- Corps -->
        <rect x="323" y="71" width="14" height="52" rx="3" fill="url(#syr-body)" stroke="#a0a8b8" stroke-width="1"/>
        <!-- Liquide bleu -->
        <rect x="326" y="75" width="8" height="36" rx="2" fill="url(#liq-iv)"/>
        <!-- Oreilles -->
        <rect x="315" y="103" width="8" height="10" rx="2" fill="#a0a8b8"/>
        <rect x="339" y="103" width="8" height="10" rx="2" fill="#a0a8b8"/>
        <!-- Embout bas -->
        <rect x="326" y="123" width="8" height="5" rx="1" fill="#b0b8c8"/>
        <!-- Aiguille -->
        <rect x="328" y="128" width="4" height="23" rx="1" fill="url(#syr-needle)"/>
        <!-- Pointe -->
        <polygon points="328,151 332,151 330,156" fill="#909898"/>
      </g>
      <!-- Ligne trajectoire + impact Veine -->
      <line x1="330" y1="150" x2="318" y2="205" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>
      <circle cx="317" cy="206" r="6" fill="#60a5fa" filter="url(#inj-glow-b)">
        <animate attributeName="r" values="5;9;5" dur="1.9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.9s" repeatCount="indefinite"/>
      </circle>
      <!-- Label -->
      <rect x="286" y="108" width="84" height="28" rx="6" fill="rgba(96,165,250,0.12)" stroke="rgba(96,165,250,0.4)" stroke-width="1.2"/>
      <text x="328" y="120" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#60a5fa">Intravenös</text>
      <text x="328" y="131" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(96,165,250,0.7)">i.v. · 25°</text>

      <!-- == 4. INTRAKUTAN 10-15° - rotation 13° autour du point peau == -->
      <g transform="rotate(-13, 468, 150)">
        <!-- Piston haut -->
        <rect x="460" y="65" width="16" height="5" rx="2" fill="#8090a0"/>
        <line x1="468" y1="70" x2="468" y2="76" stroke="#8090a0" stroke-width="3"/>
        <!-- Corps -->
        <rect x="461" y="76" width="14" height="48" rx="3" fill="url(#syr-body)" stroke="#a0a8b8" stroke-width="1"/>
        <!-- Liquide vert -->
        <rect x="464" y="80" width="8" height="32" rx="2" fill="url(#liq-ic)"/>
        <!-- Oreilles -->
        <rect x="453" y="105" width="8" height="10" rx="2" fill="#a0a8b8"/>
        <rect x="477" y="105" width="8" height="10" rx="2" fill="#a0a8b8"/>
        <!-- Embout bas -->
        <rect x="464" y="124" width="8" height="5" rx="1" fill="#b0b8c8"/>
        <!-- Aiguille courte (intrakutan superficiel) -->
        <rect x="466" y="129" width="4" height="22" rx="1" fill="url(#syr-needle)"/>
        <!-- Pointe -->
        <polygon points="466,151 470,151 468,156" fill="#909898"/>
      </g>
      <!-- Quaddel animée dans épiderme -->
      <ellipse cx="464" cy="163" rx="12" ry="6" fill="rgba(74,222,128,0.45)" stroke="#4ade80" stroke-width="1.5">
        <animate attributeName="rx" values="10;16;10" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
      </ellipse>
      <text x="464" y="147" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="600" fill="rgba(74,222,128,0.9)">Quaddel ↑</text>
      <circle cx="464" cy="163" r="4" fill="#4ade80" filter="url(#inj-glow-g)">
        <animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <!-- Label -->
      <rect x="424" y="108" width="88" height="28" rx="6" fill="rgba(74,222,128,0.12)" stroke="rgba(74,222,128,0.4)" stroke-width="1.2"/>
      <text x="468" y="120" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#4ade80">Intrakutan</text>
      <text x="468" y="131" text-anchor="middle" font-size="8" font-family="DM Sans" fill="rgba(74,222,128,0.7)">i.c. · 10–15°</text>

    </svg>

    <!-- Cards résumé cliquables -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px">
      ${[["💉","Intramuskulär","i.m.","90°","Tief in den Muskel","#f87171","rgba(248,113,113,0.08)"],["💛","Subkutan","s.c.","45°","In die Subcutis (Fettgewebe)","#fbbf24","rgba(251,191,36,0.08)"],["💙","Intravenös","i.v.","25°","In die Vene (Blutgefäß)","#60a5fa","rgba(96,165,250,0.08)"],["💚","Intrakutan","i.c.","10–15°","In die Epidermis (Quaddel)","#4ade80","rgba(74,222,128,0.08)"]].map(([e,t,r,n,i,l,s])=>`
      <div style="padding:10px;border-radius:11px;border:1.5px solid ${l}40;background:${s};text-align:center">
        <div style="font-size:1.2rem;margin-bottom:4px">${e}</div>
        <div style="font-weight:800;font-size:.78rem;color:${l};margin-bottom:2px">${t}</div>
        <div style="font-size:.65rem;color:var(--ink3);margin-bottom:4px">${r}</div>
        <div style="font-family:'Fraunces',serif;font-size:1.2rem;color:${l};margin-bottom:4px">${n}</div>
        <div style="font-size:.65rem;color:var(--ink2);line-height:1.3">${i}</div>
      </div>`).join("")}
    </div>
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>

</div></div>`,"Aufbau der Haut (Schichten)":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Lektion 2</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Aufbau der Haut — Die 3 Schichten</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Epidermis, Dermis, Subcutis — von außen nach innen</div>
  </div>
</div>

<!-- SVG interactif couches peau -->
<div class="lekt-sec" id="lsec-haut-schichten">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Die 3 Schichten — interaktiv</span></div>
  <p class="lekt-prose">Die Haut besteht aus <strong>Epidermis + Dermis = Cutis</strong>, darunter liegt die <strong>Subcutis</strong>, dann der Muskel. Klicke auf jede Schicht!</p>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🔬 Menschliche Haut (Querschnitt) — klickbar</div>

    <!-- SVG ANATOMIQUE RÉALISTE pleine largeur - fidèle à l'image du cours -->
    <svg id="haut-svg-main" viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;border-radius:12px;overflow:visible">
      <defs>
        <!-- Gradients réalistes couche par couche -->
        <linearGradient id="skinBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fde8e0"/>
          <stop offset="100%" stop-color="#f9d0be"/>
        </linearGradient>
        <linearGradient id="epiGradR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fcd5c8"/>
          <stop offset="100%" stop-color="#f5b8a0"/>
        </linearGradient>
        <linearGradient id="dermGradR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0a090"/>
          <stop offset="100%" stop-color="#e07060"/>
        </linearGradient>
        <linearGradient id="subGradR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f5d080"/>
          <stop offset="100%" stop-color="#e8b840"/>
        </linearGradient>
        <linearGradient id="musGradR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e05060"/>
          <stop offset="100%" stop-color="#c03040"/>
        </linearGradient>
        <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3d2010"/>
          <stop offset="100%" stop-color="#1a0a05"/>
        </linearGradient>
        <linearGradient id="follGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#c87850"/>
          <stop offset="100%" stop-color="#a05830"/>
        </linearGradient>
        <!-- Filtre doux -->
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.2)"/>
        </filter>
      </defs>

      <!-- === FOND GLOBAL === -->
      <rect x="60" y="0" width="440" height="370" rx="10" fill="#fde8e0"/>

      <!-- === POILS / HAARE (3 poils qui sortent) === -->
      <!-- Poil gauche -->
      <path d="M165 0 Q162 20 160 55" stroke="url(#hairGrad)" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Poil milieu -->
      <path d="M280 0 Q278 18 276 55" stroke="url(#hairGrad)" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Poil droite (incliné) -->
      <path d="M380 0 Q382 20 385 55" stroke="url(#hairGrad)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Point rouge (naevus) -->
      <circle cx="235" cy="38" r="5" fill="#c04040" opacity="0.7"/>

      <!-- Label Schweißpore avec ligne -->
      <circle cx="276" cy="30" r="3" fill="rgba(255,255,255,0.6)" stroke="#888" stroke-width="1"/>
      <line x1="279" y1="28" x2="430" y2="10" stroke="#555" stroke-width="1"/>
      <rect x="432" y="3" width="70" height="14" rx="4" fill="rgba(30,40,80,0.8)"/>
      <text x="467" y="13" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="600" fill="white">Schweißpore</text>

      <!-- === EPIDERMIS (2 sous-couches visibles, rose clair ondulé) === -->
      <!-- Couche cornée - surface ondulée -->
      <path d="M60 55 Q120 48 180 55 Q240 60 300 52 Q360 46 440 55 Q480 58 500 54 L500 75 Q460 70 440 74 Q360 78 300 72 Q240 78 180 74 Q120 68 60 74 Z"
        fill="#f5c4b0" stroke="#e8a890" stroke-width="0.5"/>
      <!-- Couche épineuse - couleur plus foncée -->
      <path d="M60 75 Q120 68 180 74 Q240 78 300 72 Q360 78 440 74 Q480 72 500 74 L500 100 Q460 96 440 98 Q360 104 300 98 Q240 104 180 100 Q120 96 60 98 Z"
        fill="#eea880" stroke="#de9870" stroke-width="0.5"/>
      <!-- Basalmembrane - ligne plus foncée -->
      <path d="M60 98 Q180 100 300 98 Q420 96 500 100 L500 106 Q380 102 300 104 Q180 106 60 104 Z"
        fill="#cc8060" opacity="0.6"/>

      <!-- Texte EPIDERMIS cliquable -->
      <rect id="svg-epidermis" x="60" y="54" width="440" height="52" rx="0" fill="transparent" stroke="transparent" cursor="pointer" style="transition:all .3s"/>

      <!-- === DERMIS (rouge-rose saumon, plus épaisse) === -->
      <path d="M60 104 Q180 106 300 104 Q420 102 500 106 L500 218 Q420 214 300 218 Q180 222 60 218 Z"
        fill="#e08878"/>

      <!-- Texture dermis - stries collagène -->
      <path d="M70 130 Q200 126 330 130 Q420 132 490 128" stroke="rgba(255,255,255,0.15)" stroke-width="1" fill="none"/>
      <path d="M70 148 Q200 144 330 148 Q420 150 490 146" stroke="rgba(255,255,255,0.12)" stroke-width="1" fill="none"/>
      <path d="M70 165 Q200 162 330 165 Q420 167 490 163" stroke="rgba(255,255,255,0.1)" stroke-width="1" fill="none"/>
      <path d="M70 182 Q200 179 330 182 Q420 184 490 180" stroke="rgba(255,255,255,0.08)" stroke-width="1" fill="none"/>
      <path d="M70 198 Q200 195 330 198 Q420 200 490 196" stroke="rgba(255,255,255,0.06)" stroke-width="1" fill="none"/>

      <!-- Texte DERMIS cliquable -->
      <rect id="svg-dermis" x="60" y="104" width="440" height="114" rx="0" fill="transparent" stroke="transparent" cursor="pointer" style="transition:all .3s"/>

      <!-- FOLLICULE PILEUX (dans la Dermis) -->
      <!-- Gaine externe -->
      <path d="M158 55 Q152 80 148 110 Q144 140 150 160 Q156 175 165 185 Q172 190 178 185 Q185 178 188 160 Q192 140 188 110 Q184 80 180 55"
        fill="url(#follGrad)" opacity="0.8"/>
      <!-- Bulbe -->
      <ellipse cx="169" cy="190" rx="20" ry="15" fill="#9a4020" opacity="0.85"/>
      <ellipse cx="169" cy="195" rx="12" ry="9" fill="#7a3010" opacity="0.9"/>
      <!-- Poil dans le follicule -->
      <path d="M165 55 Q163 80 162 110 Q161 140 163 165 Q165 180 168 185"
        stroke="url(#hairGrad)" stroke-width="2.5" fill="none"/>

      <!-- TALGDRÜSE (forme lobée jaune-orangée) -->
      <ellipse cx="195" cy="130" rx="18" ry="12" fill="#f0a040" opacity="0.9"/>
      <ellipse cx="210" cy="122" rx="12" ry="8" fill="#e89030" opacity="0.85"/>
      <ellipse cx="185" cy="120" rx="10" ry="7" fill="#f0a840" opacity="0.8"/>
      <!-- Canal Talgdrüse vers follicule -->
      <path d="M185 130 Q180 145 172 155" stroke="#d08020" stroke-width="2" fill="none"/>

      <!-- SCHWEISSDRÜSE (spirale jaune dans Dermis profonde) -->
      <path d="M385 168 Q400 155 405 168 Q410 182 400 188 Q390 192 385 182 Q380 172 388 165 Q396 158 400 168"
        fill="none" stroke="#f0b830" stroke-width="3" stroke-linecap="round"/>
      <path d="M400 155 Q403 140 405 120 Q406 108 404 104"
        stroke="#e8a820" stroke-width="2" fill="none"/>

      <!-- BLUTGEFÄSSE (vaisseaux - artère rouge + veine bleue) -->
      <!-- Artère (rouge) -->
      <path d="M70 175 Q120 170 180 174 Q240 178 300 174 Q360 170 440 175 Q470 177 495 173"
        stroke="#cc3030" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- Veine (bleue) -->
      <path d="M70 188 Q120 184 180 188 Q240 192 300 188 Q360 185 440 190 Q470 192 495 188"
        stroke="#4060cc" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- Capillaires -->
      <path d="M250 106 Q255 130 252 160 Q250 175 248 190" stroke="#cc3030" stroke-width="1.5" fill="none" opacity="0.6"/>
      <path d="M270 106 Q272 130 270 160 Q268 175 266 190" stroke="#4060cc" stroke-width="1.5" fill="none" opacity="0.5"/>
      <path d="M310 106 Q314 130 312 160 Q310 175 308 190" stroke="#cc3030" stroke-width="1.5" fill="none" opacity="0.55"/>
      <path d="M430 106 Q434 130 432 160 Q430 175 428 188" stroke="#4060cc" stroke-width="1.5" fill="none" opacity="0.5"/>

      <!-- NERVENFASER (ligne jaune ondulée) -->
      <path d="M70 205 Q140 200 210 205 Q280 210 350 205 Q420 200 490 205"
        stroke="#d4b010" stroke-width="2" fill="none" stroke-dasharray="5 3" opacity="0.7"/>

      <!-- HAARMUSKEL M. arrector pili (ligne oblique vers haut) -->
      <path d="M188 158 Q210 140 220 110 Q225 95 222 80"
        stroke="#c08050" stroke-width="2" fill="none" opacity="0.6"/>

      <!-- === SUBCUTIS (jaune-dorée avec fettkügelchen) === -->
      <path d="M60 218 Q180 222 300 218 Q420 214 500 218 L500 305 Q420 302 300 306 Q180 310 60 306 Z"
        fill="#f0c840"/>

      <!-- Fettkügelchen (cellules graisseuses rondes) -->
      <rect id="svg-subcutis" x="60" y="218" width="440" height="88" rx="0" fill="transparent" stroke="transparent" cursor="pointer" style="transition:all .3s"/>
      ${[[90,248,16],[120,235,14],[152,252,18],[182,240,15],[215,250,17],[248,238,14],[278,255,16],[310,243,15],[342,250,18],[375,240,14],[408,252,16],[440,242,15],[470,250,14],[105,268,13],[145,275,16],[185,268,14],[225,272,15],[265,265,16],[305,270,13],[345,267,15],[385,272,14],[425,268,16],[460,265,13]].map(([e,t,r])=>`<circle cx="${e}" cy="${t}" r="${r}" fill="#f8d860" stroke="#d4a820" stroke-width="1" opacity="0.85"/>`).join("")}
      <!-- Vaisseaux Subcutis -->
      <path d="M70 290 Q200 287 330 290 Q430 292 490 288" stroke="#cc3030" stroke-width="2" fill="none" opacity="0.5"/>

      <!-- === MUSKEL (rouge foncé avec stries) === -->
      <path d="M60 306 Q180 310 300 306 Q420 302 500 306 L500 360 Q420 356 300 360 Q180 364 60 360 Z"
        fill="#d03050"/>
      <!-- Stries musculaires -->
      <path d="M70 320 Q200 317 330 320 Q430 322 490 318" stroke="rgba(255,150,150,0.25)" stroke-width="1.5" fill="none"/>
      <path d="M70 335 Q200 332 330 335 Q430 337 490 333" stroke="rgba(255,150,150,0.2)" stroke-width="1.5" fill="none"/>
      <path d="M70 350 Q200 347 330 350 Q430 352 490 348" stroke="rgba(255,150,150,0.15)" stroke-width="1.5" fill="none"/>

      <!-- === LABELS DROITE avec lignes === -->
      <!-- Épidermis label -->
      <line x1="502" y1="78" x2="536" y2="78" stroke="#888" stroke-width="1"/>
      <text x="538" y="82" font-size="9" font-family="DM Sans" font-weight="700" fill="#4ade80">Epidermis</text>

      <!-- Talgdrüse label -->
      <line x1="215" y1="125" x2="540" y2="115" stroke="#888" stroke-width="0.8"/>
      <text x="540" y="119" font-size="8.5" font-family="DM Sans" fill="#f0a040">Talgdrüse</text>

      <!-- Dermis label -->
      <line x1="502" y1="160" x2="536" y2="155" stroke="#888" stroke-width="1"/>
      <text x="538" y="159" font-size="9" font-family="DM Sans" font-weight="700" fill="#fbbf24">Dermis</text>

      <!-- Blutgefäße -->
      <line x1="502" y1="180" x2="536" y2="178" stroke="#888" stroke-width="0.8"/>
      <text x="538" y="182" font-size="8" font-family="DM Sans" fill="#f87171">Blutgefäß</text>

      <!-- Nervenfaser -->
      <line x1="502" y1="204" x2="536" y2="200" stroke="#888" stroke-width="0.8"/>
      <text x="538" y="204" font-size="8" font-family="DM Sans" fill="#fbbf24">Nervenfaser</text>

      <!-- Schweißdrüse -->
      <line x1="410" y1="175" x2="536" y2="220" stroke="#888" stroke-width="0.8"/>
      <text x="538" y="224" font-size="8.5" font-family="DM Sans" fill="#f0b830">Schweißdrüse</text>

      <!-- Subcutis label -->
      <line x1="502" y1="258" x2="536" y2="258" stroke="#888" stroke-width="1"/>
      <text x="538" y="262" font-size="9" font-family="DM Sans" font-weight="700" fill="#fbbf24">Subcutis</text>

      <!-- Muskel label -->
      <line x1="502" y1="332" x2="536" y2="332" stroke="#888" stroke-width="1"/>
      <text x="538" y="336" font-size="9" font-family="DM Sans" font-weight="700" fill="#f87171">Muskel</text>

      <!-- === LABELS GAUCHE (Cutis brace) === -->
      <line x1="58" y1="55" x2="30" y2="55" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
      <line x1="58" y1="218" x2="30" y2="218" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
      <line x1="30" y1="55" x2="30" y2="218" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
      <line x1="30" y1="136" x2="24" y2="136" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>
      <text x="22" y="140" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="700" fill="rgba(255,255,255,0.6)" transform="rotate(-90,22,140)">Cutis</text>

      <!-- HAARFOLLIKEL label gauche -->
      <line x1="148" y1="170" x2="60" y2="180" stroke="#888" stroke-width="0.8"/>
      <text x="58" y="184" text-anchor="end" font-size="8.5" font-family="DM Sans" fill="#c09060">Haarfollikel</text>

      <!-- M. arrector pili label -->
      <line x1="210" y1="130" x2="60" y2="140" stroke="#888" stroke-width="0.8"/>
      <text x="58" y="144" text-anchor="end" font-size="7.5" font-family="DM Sans" fill="#c09060">M. arrector pili</text>

      <!-- ZOOM ÉPIDERMIS (cercle détail en haut droite comme dans l'image) -->
      <circle cx="450" cy="65" r="45" fill="#f5c4b0" stroke="#dda090" stroke-width="2"/>
      <!-- Couches dans le zoom -->
      <path d="M410 52 Q430 48 450 52 Q465 55 490 50 L490 58 Q465 55 450 58 Q430 62 410 58 Z" fill="#e8b090" opacity="0.8"/>
      <path d="M410 58 Q430 62 450 58 Q465 55 490 58 L490 67 Q465 64 450 67 Q430 70 410 67 Z" fill="#d89070" opacity="0.8"/>
      <path d="M410 67 Q430 70 450 67 Q465 64 490 67 L490 76 Q465 73 450 76 Q430 79 410 76 Z" fill="#c07050" opacity="0.7"/>
      <path d="M410 76 Q430 79 450 76 Q465 73 490 76 L490 86 Q465 83 450 86 Q430 88 410 86 Z" fill="#a85030" opacity="0.65"/>
      <!-- Cellules dans le zoom -->
      ${[[415,55],[430,55],[445,55],[460,55],[475,55],[487,54]].map(([e,t])=>`<rect x="${e-4}" y="${t-4}" width="10" height="7" rx="2" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="0.5"/>`).join("")}
      ${[[415,65],[430,65],[445,65],[462,65],[478,65],[488,64]].map(([e,t])=>`<ellipse cx="${e}" cy="${t}" rx="6" ry="4" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>`).join("")}
      <!-- Ligne zoom vers epidermis -->
      <line x1="410" y1="65" x2="380" y2="72" stroke="#888" stroke-width="0.8" stroke-dasharray="3 2"/>
      <text x="450" y="108" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="#888">Epidermis</text>
      <text x="450" y="118" text-anchor="middle" font-size="7" font-family="DM Sans" fill="#888">(Zoom)</text>

    </svg>

    <!-- Labels interactifs sous le SVG -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:12px">
      <div class="lekt-anat-lbl active" id="lbl-epidermis" onclick="hautSchichtSelect('epidermis')" style="cursor:pointer">
        <div class="lekt-anat-dot" style="background:#fcd5c8;border:2px solid #f87171"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:#f87171;margin-bottom:1px">Epidermis</div><div style="font-size:.67rem;color:var(--ink2)">Keine Gefäße · 30 Tage</div></div>
      </div>
      <div class="lekt-anat-lbl" id="lbl-dermis" onclick="hautSchichtSelect('dermis')" style="cursor:pointer">
        <div class="lekt-anat-dot" style="background:#e08878;border:2px solid #fbbf24"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:#fbbf24;margin-bottom:1px">Dermis</div><div style="font-size:.67rem;color:var(--ink2)">Gefäße, Nerven, Drüsen</div></div>
      </div>
      <div class="lekt-anat-lbl" id="lbl-subcutis" onclick="hautSchichtSelect('subcutis')" style="cursor:pointer">
        <div class="lekt-anat-dot" style="background:#f0c840;border:2px solid #fbbf24"></div>
        <div><div style="font-weight:700;font-size:.78rem;color:#d4a820;margin-bottom:1px">Subcutis</div><div style="font-size:.67rem;color:var(--ink2)">Fett · Energie · Schutz</div></div>
      </div>
    </div>
  </div>
</div>

<!-- SEC 2: Epidermis Schichten -->
<div class="lekt-sec" id="lsec-epidermis">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Die 5 Schichten der Epidermis</span></div>
  <p class="lekt-prose">Die Epidermis besteht aus <strong>5 Schichten</strong> — von innen (Basalmembran) nach außen (Hornschicht). Die Glanzzellschicht existiert nur in der Leistenhaut!</p>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">📚 Epidermis — von innen nach außen</div>
    ${[["E","Hornzellschicht (Stratum corneum)","Abgestorbene Zellen ohne Kern. Schutzschicht. Je nach Belastung unterschiedlich stark.","#f87171"],["D","Glanzzellschicht (Stratum lucidum)","NUR in Leistenhaut! Bricht UV-Licht stark. Direkt unter der Hornschicht.","#fb923c"],["C","Körnerzellschicht (Stratum granulosum)","Eiweißkörper (Keratohyalinkörner) → langsame Verhornung.","#fbbf24"],["B","Stachelzellschicht (Stratum spinosum)","Stachelförmige Zellen = besondere Festigkeit der Haut.","#4ade80"],["A","Basalzellschicht (Stratum basale)","Auf der Basalmembran. Stammzellen + Melanozyten (UV-Schutz durch Melanin).","#60a5fa"]].map(([e,t,r,n])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:rgba(255,255,255,.02);border-radius:9px;border:1px solid var(--border);margin-bottom:7px">
      <span style="width:22px;height:22px;border-radius:6px;background:${n};color:#0d1117;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:800;flex-shrink:0">${e}</span>
      <div><div style="font-weight:700;font-size:.8rem;color:${n};margin-bottom:2px">${t}</div><div style="font-size:.72rem;color:var(--ink2);line-height:1.4">${r}</div></div>
    </div>`).join("")}
  </div>

  <div class="lekt-merkhilfe">
    <span style="font-size:1.2rem">🧠</span>
    <div><strong>Merkhilfe Reihenfolge (innen → außen):</strong> <em>Basis Stacheln Körner Glanz Horn</em> — <strong>B-S-K-G-H</strong></div>
  </div>
</div>

<!-- SEC 3: Dermis -->
<div class="lekt-sec" id="lsec-dermis">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Dermis — Die Lederhaut</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🔬 Pro cm² Dermis findet man:</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:4px">
      ${[["200","Schmerzrezeptoren","🔴"],["100","Druckrezeptoren","🟡"],["12","Kälterezeptoren","🔵"],["2","Wärmerezeptoren","🟠"],["100","Schweißdrüsen","💧"],["40","Talgdrüsen","🟤"]].map(([e,t,r])=>`
      <div style="background:rgba(96,165,250,.06);border:1px solid rgba(96,165,250,.15);border-radius:9px;padding:10px;text-align:center">
        <div style="font-family:'Fraunces',serif;font-size:1.3rem;color:#60a5fa">${e}</div>
        <div style="font-size:.65rem;color:var(--ink2);margin-top:2px">${r} ${t}</div>
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">⚠️ Pflegerelevant — Dekubitus</div>
    Die Papillenschicht der Dermis enthält <strong>viele Blutgefäße</strong>. <strong>Anhaltender Druck komprimiert diese Gefäße → Ischämie → Gewebenekrose → Dekubitus!</strong> Das ist der anatomische Grund für regelmäßige Lagerung und Druckentlastung.
  </div>
</div>

<!-- SEC 4: Subcutis -->
<div class="lekt-sec" id="lsec-subcutis">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">04</span><span class="lekt-title">Subcutis & Fettgewebe</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">🍯 Aufgaben der Subcutis</div>
    ${[["🛏️","Polsterung & Isolation","Mechanischer Schutz + Wärmeisolation"],["⚡","Energiereserve","Speicherung von Lipiden + fettlöslichen Vitaminen"],["💧","Wasserspeicher","Hält Körperwasser zurück"],["🔗","Verbindungsschicht","Verbindet Cutis mit den Körperfaszien"]].map(([e,t,r])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:7px">
      <span style="font-size:1.1rem;flex-shrink:0">${e}</span>
      <div><div style="font-weight:700;font-size:.8rem;color:#fbbf24;margin-bottom:2px">${t}</div><div style="font-size:.72rem;color:var(--ink2)">${r}</div></div>
    </div>`).join("")}
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>

</div></div>`,"Hautanhangsorgane & Drüsen":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Lektion 3</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Hautanhangsorgane</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Haare, Nägel, Talg-, Duft- und Schweißdrüsen</div>
  </div>
</div>

<!-- SEC 1: Übersicht -->
<div class="lekt-sec" id="lsec-anhang-intro">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Übersicht Hautanhangsorgane</span></div>
  <p class="lekt-prose">Zu den <strong>Hautanhangsorganen (Hautanhangsgebilgen)</strong> gehören Haare, Nägel und Drüsen. Sie sind Abkömmline der Epidermis.</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px">
    ${[["💇","Haare (Pilli)","Schutz, Thermoregulation, geringe biolog. Funktion"],["✋","Nägel (Ungues)","Schutz der Kuppen, Stabilisierung, Tastsinn"],["🧴","Drüsen (Glandulae)","Talg-, Duft-, Schweißdrüsen"]].map(([e,t,r])=>`
    <div style="background:rgba(74,222,128,.07);border:1.5px solid rgba(74,222,128,.2);border-radius:13px;padding:14px;text-align:center">
      <div style="font-size:1.8rem;margin-bottom:8px">${e}</div>
      <div style="font-weight:700;font-size:.82rem;color:#4ade80;margin-bottom:4px">${t}</div>
      <div style="font-size:.7rem;color:var(--ink2);line-height:1.4">${r}</div>
    </div>`).join("")}
  </div>
</div>

<!-- SEC 2: Haare -->
<div class="lekt-sec" id="lsec-haare">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Haare (Pilli) — Aufbau & Wachstum</span></div>
  <p class="lekt-prose">Haare bedecken fast den ganzen Körper — außer Bereiche mit <strong>Leistenhaut</strong> (Handflächen, Fußsohlen). Haare haben <strong>weder Blut- noch Nervenversorgung</strong> — sie sind biologisch "tot".</p>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🔬 3 Haartypen nach Lebensphase</div>
    ${[["🌸","Lanugohaare","Nur bei Neugeborenen (+ stark Untergewichtigen). Sehr fein, verschwindet kurz nach Geburt.","#f87171"],["🌿","Vellushaar","Ersetzt nach Geburt das Lanugohaar. Kurz, weich, allgemeine Körperbehaarung.","#4ade80"],["💪","Terminalhaar","Nach der Pubertät (Sexualhormone). Dickes Haar. Vor Pubertät nur: Kopfhaar, Augenbrauen, Wimpern.","#60a5fa"]].map(([e,t,r,n])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:11px 13px;border-radius:10px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:8px">
      <span style="font-size:1.1rem;flex-shrink:0">${e}</span>
      <div><div style="font-weight:700;font-size:.82rem;color:${n};margin-bottom:2px">${t}</div><div style="font-size:.73rem;color:var(--ink2);line-height:1.4">${r}</div></div>
    </div>`).join("")}
  </div>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">⏱️ 3 Phasen der Haarbildung</div>
    <div style="display:flex;align-items:stretch;gap:0;border-radius:12px;overflow:hidden;border:1px solid var(--border)">
      ${[["🌱","Wachstumsphase","Anagen","Zellen der Haarpapille teilen sich — Haar wächst","#4ade80"],["🔄","Übergangsphase","Katagen","Produktion neuer Zellen wird eingestellt","#fbbf24"],["😴","Ruhephase","Telogen","Papille erholt sich, dann beginnt neues Haar","#60a5fa"]].map(([e,t,r,n,i])=>`
      <div style="flex:1;padding:14px 10px;text-align:center;background:rgba(255,255,255,.02);border-right:1px solid var(--border)">
        <div style="font-size:1.3rem;margin-bottom:4px">${e}</div>
        <div style="font-weight:700;font-size:.8rem;color:${i};margin-bottom:2px">${t}</div>
        <div style="font-size:.62rem;color:var(--ink3);margin-bottom:6px;font-style:italic">${r}</div>
        <div style="font-size:.68rem;color:var(--ink2);line-height:1.4">${n}</div>
      </div>`).join("")}
    </div>
  </div>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🔩 Aufbau des Haares (Querschnitt)</div>
    <div style="display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center">
      <svg viewBox="0 0 120 240" xmlns="http://www.w3.org/2000/svg" style="width:90px;height:180px">
        <defs>
          <linearGradient id="haarMark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#1d4ed8"/><stop offset="50%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1d4ed8"/>
          </linearGradient>
          <linearGradient id="haarRinde" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#854d0e"/><stop offset="40%" stop-color="#a16207"/><stop offset="100%" stop-color="#854d0e"/>
          </linearGradient>
          <linearGradient id="haarCut" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#14532d"/><stop offset="40%" stop-color="#16a34a"/><stop offset="100%" stop-color="#14532d"/>
          </linearGradient>
          <radialGradient id="haarMark2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#1d4ed8"/>
          </radialGradient>
        </defs>
        <!-- Fond -->
        <rect width="120" height="240" rx="8" fill="rgba(13,17,23,0.9)"/>
        <!-- Titre -->
        <text x="60" y="14" text-anchor="middle" font-size="7" font-family="DM Sans" font-weight="700" fill="rgba(255,255,255,0.6)">Querschnitt</text>

        <!-- Section transversale du cheveu (vue du dessus) -->
        <!-- Cuticula — couche externe (écailles) -->
        <circle cx="60" cy="105" r="38" fill="url(#haarCut)" stroke="rgba(74,222,128,0.6)" stroke-width="1.5"/>
        <!-- Écailles cuticulaires (texture réaliste) -->
        ${Array.from({length:12},(e,t)=>{const r=t*30*(Math.PI/180),n=60+38*Math.cos(r),i=105+38*Math.sin(r),l=60+33*Math.cos(r+.18),s=105+33*Math.sin(r+.18);return`<path d="M${n.toFixed(1)} ${i.toFixed(1)} L${l.toFixed(1)} ${s.toFixed(1)}" stroke="rgba(74,222,128,0.5)" stroke-width="2.5" stroke-linecap="round"/>`}).join("")}

        <!-- Rinde — couche médiane (kératine) -->
        <circle cx="60" cy="105" r="26" fill="url(#haarRinde)" stroke="rgba(251,191,36,0.5)" stroke-width="1"/>
        <!-- Fibres de kératine simulées -->
        ${Array.from({length:8},(e,t)=>{const r=t*45*(Math.PI/180),n=(60+8*Math.cos(r)).toFixed(1),i=(105+8*Math.sin(r)).toFixed(1),l=(60+23*Math.cos(r)).toFixed(1),s=(105+23*Math.sin(r)).toFixed(1);return`<line x1="${n}" y1="${i}" x2="${l}" y2="${s}" stroke="rgba(161,98,7,0.5)" stroke-width="1"/>`}).join("")}

        <!-- Mark — noyau central -->
        <circle cx="60" cy="105" r="12" fill="url(#haarMark2)" stroke="rgba(96,165,250,0.7)" stroke-width="1"/>
        <!-- Cellules médullaires -->
        <circle cx="60" cy="105" r="6" fill="rgba(147,197,253,0.3)"/>
        <circle cx="57" cy="102" r="2.5" fill="rgba(147,197,253,0.5)"/>
        <circle cx="63" cy="108" r="2" fill="rgba(147,197,253,0.45)"/>

        <!-- Flèches et labels -->
        <line x1="98" y1="80" x2="108" y2="70" stroke="rgba(74,222,128,0.7)" stroke-width="1"/>
        <text x="82" y="68" font-size="6.5" font-family="DM Sans" font-weight="700" fill="#4ade80">Cuticula</text>

        <line x1="84" y1="100" x2="110" y2="100" stroke="rgba(251,191,36,0.7)" stroke-width="1"/>
        <text x="82" y="98" font-size="6.5" font-family="DM Sans" font-weight="700" fill="#fbbf24">Rinde</text>

        <line x1="72" y1="105" x2="110" y2="120" stroke="rgba(96,165,250,0.7)" stroke-width="1"/>
        <text x="82" y="118" font-size="6.5" font-family="DM Sans" font-weight="700" fill="#60a5fa">Mark</text>

        <!-- Vue longitudinale en bas -->
        <text x="60" y="158" text-anchor="middle" font-size="6" font-family="DM Sans" fill="rgba(255,255,255,0.35)">Längsschnitt</text>
        <!-- Schaft du cheveu en coupe longitudinale -->
        <rect x="42" y="162" width="36" height="70" rx="18 18 3 3" fill="url(#haarRinde)" stroke="rgba(161,98,7,0.5)" stroke-width="1"/>
        <!-- Mark interne -->
        <rect x="54" y="162" width="12" height="70" rx="6 6 0 0" fill="url(#haarMark)" opacity="0.7"/>
        <!-- Écailles cuticulaires latérales -->
        ${[168,176,184,192,200,208,216,224].map(e=>`
          <path d="M42 ${e} Q38 ${e+2} 38 ${e+5} Q38 ${e+8} 42 ${e+8}" fill="rgba(74,222,128,0.4)" stroke="rgba(74,222,128,0.5)" stroke-width="0.8"/>
          <path d="M78 ${e} Q82 ${e+2} 82 ${e+5} Q82 ${e+8} 78 ${e+8}" fill="rgba(74,222,128,0.4)" stroke="rgba(74,222,128,0.5)" stroke-width="0.8"/>`).join("")}
      </svg>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${[["Cuticula (Schuppenschicht)","Äußerste Schicht. Abgestorbene verhornte Zellen.","#4ade80"],["Rindenschicht","Besteht aus Hornmasse (Keratin). Gibt Stabilität + Flexibilität.","#fbbf24"],["Haarmark","Zentrum des Haares.","#60a5fa"]].map(([e,t,r])=>`
        <div style="padding:9px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02)">
          <div style="font-weight:700;font-size:.78rem;color:${r};margin-bottom:2px">${e}</div>
          <div style="font-size:.7rem;color:var(--ink2)">${t}</div>
        </div>`).join("")}
      </div>
    </div>
  </div>

  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Wichtig: M. erector pili</div>
    Haare besitzen eine Talgdrüse und den <strong>M. erector pili</strong> (Haaraufrichtungsmuskel). Waschen <em>gegen</em> die Haarwuchsrichtung wirkt <strong>belebend</strong>, <em>mit</em> der Haarwuchsrichtung <strong>beruhigend</strong> — pflegerelevant!
  </div>
</div>

<!-- SEC 3: Nägel -->
<div class="lekt-sec" id="lsec-naegel">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Nägel (Ungues)</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">✋ Funktionen der Nägel</div>
    ${[["🛡️","Schutz","Schützen die Finger- und Zehenkuppen"],["🏗️","Stabilisierung","Stabilisieren die darunterliegenden Finger-/Zehenbeeren"],["👆","Tastsinn","Verbessern die Wahrnehmung beim Ertasten und Greifen"],["🐾","Kratzwerkzeug","Mechanisches Hilfsmittel"]].map(([e,t,r])=>`
    <div style="display:flex;gap:10px;align-items:center;padding:9px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:7px">
      <span style="font-size:1.1rem;flex-shrink:0">${e}</span>
      <div><span style="font-weight:700;font-size:.8rem;color:#4ade80">${t}:</span> <span style="font-size:.75rem;color:var(--ink2)">${r}</span></div>
    </div>`).join("")}
  </div>
  <div style="background:rgba(248,113,113,.07);border:1px solid rgba(248,113,113,.2);border-radius:13px;padding:14px;margin-top:4px">
    <div style="font-weight:700;font-size:.8rem;color:#f87171;margin-bottom:6px">⚠️ Patho: Nagelerkrankungen</div>
    <div style="font-size:.75rem;color:var(--ink2);line-height:1.6"><strong style="color:#fbbf24">Paronychie</strong> = Entzündung von Nagelfalz + Nagelwall (Bakterien). Sorgfältige Nagelpflege kann das verhindern.<br><strong style="color:#f87171">Panaritium</strong> = Hat sich bereits Eiter angesammelt → schwere eitrige Entzündung.</div>
  </div>
</div>

<!-- SEC 4: Drüsen -->
<div class="lekt-sec" id="lsec-druesen">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">04</span><span class="lekt-title">Talg-, Duft- und Schweißdrüsen</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">🧴 Die 3 Drüsentypen</div>
    ${[["🟡","Talgdrüsen","Münden meist in den Haarbalg. Produzieren Talg (Lipid-Anteil des Säureschutzmantels). 40 pro cm².","Haarfollikel"],["💧","Schweißdrüsen","Münden direkt an der Hautoberfläche. Produzieren Schweiß (Hydro-Anteil). 100 pro cm².","Haut (Leistenhaut: Furchen)"],["👃","Duftdrüsen","Apokriene Drüsen in Achseln, Genital. Aktiv nach Pubertät.","Haarfollikel"]].map(([e,t,r,n])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:11px 13px;border-radius:10px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:8px">
      <span style="font-size:1rem;flex-shrink:0;margin-top:2px">${e}</span>
      <div><div style="font-weight:700;font-size:.82rem;color:#fbbf24;margin-bottom:2px">${t} <span style="font-size:.65rem;color:var(--ink3);font-weight:400">→ mündet in: ${n}</span></div><div style="font-size:.72rem;color:var(--ink2);line-height:1.4">${r}</div></div>
    </div>`).join("")}
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>
</div></div>`,"Fitzpatrick-Hauttypen":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Lektion 4</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Fitzpatrick-Hauttypen & Veränderungen</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">6 Typen nach UV-Empfindlichkeit + Altershaut & Kinderhaut</div>
  </div>
</div>

<!-- SEC 1: 6 Fitzpatrick Typen -->
<div class="lekt-sec" id="lsec-fitzpatrick">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Die 6 Fitzpatrick-Hauttypen</span></div>
  <p class="lekt-prose">Die <strong>Fitzpatrick-Skala</strong> klassifiziert Hauttypen nach ihrer UV-Empfindlichkeit. Je höher der Typ, desto mehr Melanin und desto länger der natürliche Schutz.</p>

  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">
    ${[["1","Keltischer Typ","<10 Min","Sehr hell, rötlich-blond, blau/grün Augen","Keine Bräunung","#f8fafc","#1e293b"],["2","Nordischer Typ","10–20 Min","Helle Haut, blond-mittelbraun, blau/grau","Kaum bis langsam braun","#fef3c7","#78350f"],["3","Mischtyp","20–30 Min","Hell-mittel, variabel Haar + Augen","Langsam braun","#fde68a","#92400e"],["4","Mediterraner Typ","45 Min","Leicht gebräunt/olivfarben, braune Haare","Sehr schnell braun","#d97706","#fff"],["5","Dunkler Typ","60 Min","Dunkel mit grauem Unterton, dunkle Augen","Schnell braun","#92400e","#fef3c7"],["6","Schwarzer Typ","90 Min","Dunkelbraun bis schwarz, sehr dunkel","Immer braun","#1c0a00","#fbbf24"]].map(([e,t,r,n,i,l,s])=>`
    <div style="display:flex;gap:12px;align-items:center;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:rgba(255,255,255,.02)">
      <div style="width:36px;height:36px;border-radius:50%;background:${l};border:2px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <span style="font-size:.75rem;font-weight:800;color:${s}">${e}</span>
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:700;font-size:.82rem;color:var(--ink);margin-bottom:2px">${t}</div>
        <div style="font-size:.7rem;color:var(--ink2);line-height:1.4">${n} · ${i}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:.65rem;color:var(--ink3)">Eigenschutz</div>
        <div style="font-weight:700;font-size:.82rem;color:#4ade80">${r}</div>
      </div>
    </div>`).join("")}
  </div>

  <div class="lekt-merkhilfe">
    <span style="font-size:1.2rem">☀️</span>
    <div><strong>Alle Typen:</strong> Mittagssonne meiden, Sonnencreme LSF 50+, Sonnenbrille mit UV-Schutz, Sonnenhut. Ab Typ 5+: auch bei Bewölkung schützen!</div>
  </div>
</div>

<!-- SEC 2: Veränderungen -->
<div class="lekt-sec" id="lsec-veraenderungen">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Hauttypen nach Talgproduktion</span></div>
  <p class="lekt-prose">Bei Erwachsenen unterscheidet man <strong>3 Hauttypen</strong> nach der Talgproduktion. Sie sind genetisch bedingt und hormonell gesteuert — ausgeprägt erst nach Ende der Pubertät.</p>
  <div style="display:grid;grid-template-columns:1fr;gap:9px;margin-bottom:14px">
    ${[["💧","Seborrhoische (fettige) Haut","50%","Dicke, fettige, grobporige, feucht glänzende Haut. Überproduktion der Talgdrüsen + vermehrte Schweißproduktion. Hautunreinheiten (Pickel, Mitesser).","#fbbf24"],["🏜️","Sebostatische (trockene) Haut","30%","Spröde, rissige, raue Haut, oft schuppig. Verminderte Talgproduktion.","#60a5fa"],["☯️","Mischhaut","20%","Fettige Gesichtsmitte (T-Zone), trockene Wangen. Gelegentlich Unreinheiten.","#4ade80"]].map(([e,t,r,n,i])=>`
    <div style="display:flex;gap:12px;align-items:flex-start;padding:13px;border-radius:12px;border:1.5px solid rgba(${i==="#fbbf24"?"251,191,36":i==="#60a5fa"?"96,165,250":"74,222,128"},.25);background:rgba(${i==="#fbbf24"?"251,191,36":i==="#60a5fa"?"96,165,250":"74,222,128"},.05)">
      <span style="font-size:1.3rem;flex-shrink:0">${e}</span>
      <div style="flex:1">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <div style="font-weight:700;font-size:.82rem;color:${i}">${t}</div>
          <div style="font-size:.72rem;font-weight:700;color:${i};background:rgba(0,0,0,.2);padding:2px 8px;border-radius:5px">${r}</div>
        </div>
        <div style="font-size:.72rem;color:var(--ink2);line-height:1.5">${n}</div>
      </div>
    </div>`).join("")}
  </div>
</div>

<!-- SEC 3: Altershaut -->
<div class="lekt-sec" id="lsec-altershaut">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Altershaut & Kinderhaut</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#c084fc">👴 Veränderungen im Alter — Altershaut</div>
    ${[["Kapillaren ↓ + poröser","→ Hämatome, kalte blasse Haut"],["Epidermiserneuerung dauert länger","→ Regenerationsfähigkeit sinkt"],["Verzahnung Epidermis/Dermis löst sich, Subcutis ↓","→ dünne, pergamentartige Haut"],["Schweiß- + Talgdrüsensekretion ↓","→ rissige, trockene, schuppige, juckende Haut"],["Bindegewebe + Kollagenfasern ↓","→ Faltenbildung"],["Jahrelange UV-Strahlung","→ Pigmentflecken"]].map(([e,t])=>`
    <div style="display:flex;gap:8px;align-items:flex-start;padding:9px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:6px;font-size:.77rem">
      <span style="color:#c084fc;flex-shrink:0">→</span>
      <div><span style="color:var(--ink)">${e}</span> <strong style="color:#c084fc">${t}</strong></div>
    </div>`).join("")}
  </div>

  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">👶 Kinderhaut — Besonderheiten</div>
    ${[["🔬","Hornschicht dünner (~30%)","Weniger Schutz vor äußeren Einflüssen"],["🛡️","Kein fertiger Säureschutzmantel","Talgdrüsen produzieren wenig Lipide → keine stabile Keimbarriere"],["☀️","Kaum Melanin","→ hohe UV-Lichtempfindlichkeit — immer Sonnenschutz!"],["🤝","Immunsystem muss trainiert werden","Haut noch auf Umweltreize einzustellen"],["🧴","Durchlässiger für Substanzen","→ auf Duftstoffe, Konservierungsstoffe verzichten"]].map(([e,t,r])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:9px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:6px">
      <span style="font-size:1rem;flex-shrink:0">${e}</span>
      <div><div style="font-weight:700;font-size:.78rem;color:#60a5fa;margin-bottom:2px">${t}</div><div style="font-size:.7rem;color:var(--ink2)">${r}</div></div>
    </div>`).join("")}
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>
</div></div>`,"Epithelgewebe – Exkurs":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Exkurs</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Exkurs: Epithelgewebe</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Deckgewebe aller inneren und äußeren Oberflächen — Klausurklassiker!</div>
  </div>
</div>

<div class="lekt-sec" id="lsec-epithel-def">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Was ist Epithelgewebe?</span></div>
  <p class="lekt-prose"><strong>Epithelgewebe</strong> ist Deckgewebe, das alle inneren und äußeren Oberflächen des Körpers bedeckt — Haut, Schleimhäute, Organe.</p>
  <div class="lekt-merkhilfe">
    <span style="font-size:1.2rem">🧠</span>
    <div><strong>Merkhilfe:</strong> Epithel = Hülle. Es grenzt ab, schützt, resorbiert und sezerniert.</div>
  </div>
</div>

<div class="lekt-sec" id="lsec-epithel-typen">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Die 6 Epitheltypen — vollständige Übersicht</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🔬 Alle Epitheltypen auf einen Blick</div>
    ${[["Einschichtiges Plattenepithel","Lungenbläschen (Alveolen)","Sehr dünn für Gasaustausch","#4ade80"],["Mehrschichtiges unverhorntes Plattenepithel","Mundschleimhaut, Speiseröhre, Vagina","Widerstandsfähig, feucht","#60a5fa"],["Mehrschichtiges verhorntes Plattenepithel","Äußere Haut (Epidermis)","Beste Schutzfunktion, trocken","#fbbf24"],["Zylinderepithel","Darmschleimhaut (mit Mikrovilli)","Resorption von Nährstoffen","#c084fc"],["Flimmerepithel (Zilien)","Atemwege (Trachea, Bronchien)","Transportiert Schleim + Fremdstoffe","#f87171"],["Übergangsepithel (Urothel)","Harnblase, Ureter","Dehnbar — passt sich Füllungsgrad an","#fb923c"]].map(([e,t,r,n])=>`
    <div style="display:grid;grid-template-columns:2fr 1.5fr 1.5fr;gap:8px;align-items:start;padding:10px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:7px">
      <div><div style="font-weight:700;font-size:.78rem;color:${n};margin-bottom:2px">${e}</div></div>
      <div style="font-size:.7rem;color:var(--ink2)">📍 ${t}</div>
      <div style="font-size:.7rem;color:var(--ink3)">→ ${r}</div>
    </div>`).join("")}
  </div>

  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">⚠️ Klausurfallen — diese werden oft verwechselt!</div>
    <strong>Harnblase</strong> = Übergangsepithel (NICHT Flimmer!)<br>
    <strong>Atemwege</strong> = Flimmerepithel (NICHT Zylinder!)<br>
    <strong>Darm</strong> = Zylinderepithel mit Mikrovilli<br>
    <strong>Äußere Haut</strong> = mehrschichtig verhornt (NICHT unverhornt!)<br>
    <strong>Mundschleimhaut</strong> = mehrschichtig unverhornt
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>
</div></div>`,"Die Epidermis & ihre Schichten":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Vertiefung</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Die Epidermis im Detail</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">5 Schichten, Zyklus, Diffusion, Melanozyten & Melanom</div>
  </div>
</div>

<div class="lekt-sec" id="lsec-epi-eigenschaften">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Eigenschaften der Epidermis</span></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
    ${[["🚫","Keine Blutgefäße","Versorgung nur durch Diffusion + aktiven Nährstofftransport aus der Dermis"],["🔄","30-Tage-Zyklus","Neue Zellen entstehen in der Basalschicht und wandern in 30 Tagen zur Oberfläche"],["🧱","Mehrschichtig verhornt","Mehrschichtiges verhorntes Plattenepithel — beste Schutzbarriere"],["📍","Basalmembran","Unterseite sitzt auf der Basalmembran — Grenze zur Dermis"]].map(([e,t,r])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:12px;background:rgba(74,222,128,.05);border:1px solid rgba(74,222,128,.15);border-radius:11px">
      <span style="font-size:1.2rem;flex-shrink:0">${e}</span>
      <div><div style="font-weight:700;font-size:.8rem;color:#4ade80;margin-bottom:3px">${t}</div><div style="font-size:.71rem;color:var(--ink2);line-height:1.4">${r}</div></div>
    </div>`).join("")}
  </div>
</div>

<div class="lekt-sec" id="lsec-epi-schichten">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Die 5 Schichten der Epidermis (A → E)</span></div>
  <p class="lekt-prose">Von außen (A) nach innen (E) — merke: <strong>H-G-K-S-B</strong> (Horn-Glanz-Körner-Stachel-Basis)</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">📚 Schichten von außen → innen</div>
    ${[["A","Hornzellschicht","Stratum corneum","Abgestorbene, kernlose Zellen. Je nach Belastung unterschiedlich dick. Hauptschutzschicht.","#f87171","außen"],["B","Glanzzellschicht","Stratum lucidum","NUR in Leistenhaut! Liegt direkt unter Hornschicht. Bricht UV-Licht stark — UV-Schutz.","#fb923c","nur Leistenhaut"],["C","Körnerzellschicht","Stratum granulosum","Eiweißkörper (Keratohyalinkörner) → langsame Verhornung der wandernden Zellen.","#fbbf24",""],["D","Stachelzellschicht","Stratum spinosum","Oval bis stachelförmige Zellen — miteinander verankert → besondere Festigkeit der Haut.","#4ade80",""],["E","Basalzellschicht","Stratum basale","Auf der Basalmembran. Enthält Stammzellen (→ neue Keratinozyten) + Melanozyten (→ Melanin).","#60a5fa","innen"]].map(([e,t,r,n,i,l])=>`
    <div style="display:flex;gap:10px;align-items:flex-start;padding:11px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:7px">
      <div style="width:26px;height:26px;border-radius:7px;background:${i};color:#0d1117;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:800;flex-shrink:0">${e}</div>
      <div style="flex:1">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px">
          <span style="font-weight:700;font-size:.8rem;color:${i}">${t}</span>
          <span style="font-size:.63rem;color:var(--ink3);font-style:italic">${r}</span>
          ${l?`<span style="font-size:.6rem;background:rgba(255,255,255,.08);color:var(--ink3);padding:1px 6px;border-radius:4px">${l}</span>`:""}
        </div>
        <div style="font-size:.72rem;color:var(--ink2);line-height:1.4">${n}</div>
      </div>
    </div>`).join("")}
  </div>
  <div class="lekt-merkhilfe">
    <span>🧠</span>
    <div><strong>Merkhilfe (außen→innen):</strong> <em>"Habt Grippe? Kämpft Stark, Burschen!"</em> → <strong>H</strong>orn – <strong>G</strong>lanz – <strong>K</strong>örner – <strong>S</strong>tachel – <strong>B</strong>asal</div>
  </div>
</div>

<div class="lekt-sec" id="lsec-epi-diffusion">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Diffusion — Wie wird die Epidermis versorgt?</span></div>
  <p class="lekt-prose">Da die Epidermis <strong>keine eigenen Blutgefäße</strong> hat, wird sie über <strong>Diffusion</strong> aus der Dermis versorgt.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">⚗️ Was ist Diffusion? — animiert</div>
    <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;margin:4px 0 8px;border-radius:12px">
      <defs>
        <linearGradient id="diffEpi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f4c5a0"/><stop offset="100%" stop-color="#e8a878"/>
        </linearGradient>
        <linearGradient id="diffDerm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c97060"/><stop offset="100%" stop-color="#a54838"/>
        </linearGradient>
        <radialGradient id="diffNut" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#2563eb"/>
        </radialGradient>
        <radialGradient id="diffNut2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4ade80"/><stop offset="100%" stop-color="#16a34a"/>
        </radialGradient>
        <marker id="diffArr" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
          <polygon points="0,0 7,3.5 0,7" fill="#60a5fa"/>
        </marker>
        <filter id="diffGlow"><feGaussianBlur stdDeviation="2.5" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
      </defs>

      <!-- Fond -->
      <rect width="480" height="220" rx="12" fill="#0c1520"/>
      <!-- Titre -->
      <text x="240" y="18" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="800" fill="rgba(255,255,255,0.85)">Diffusion — Versorgung der gefäßlosen Epidermis</text>

      <!-- ══ GAUCHE: CONCEPT ABSTRAIT ══ -->
      <!-- Boîte gauche: haute concentration -->
      <rect x="12" y="28" width="130" height="150" rx="10" fill="rgba(96,165,250,0.06)" stroke="rgba(96,165,250,0.3)" stroke-width="1.5"/>
      <text x="77" y="42" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="#60a5fa">Hohe Konzentration</text>
      <!-- Membrane semi-perméable -->
      <line x1="142" y1="28" x2="142" y2="178" stroke="rgba(96,165,250,0.6)" stroke-width="2.5" stroke-dasharray="6 3"/>
      <text x="142" y="192" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(96,165,250,0.6)" transform="rotate(-90,142,185)" dominant-baseline="middle">semipermeable Membran</text>
      <!-- Boîte droite: basse concentration -->
      <rect x="152" y="28" width="100" height="150" rx="10" fill="rgba(96,165,250,0.03)" stroke="rgba(96,165,250,0.2)" stroke-width="1.5"/>
      <text x="202" y="42" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(96,165,250,0.6)">Niedrige Konz.</text>

      <!-- Particules haute conc. (gauche) — animées -->
      ${[[28,65,1.7],[48,95,2.1],[68,60,1.5],[35,125,1.9],[55,148,1.6],[80,110,2],[95,75,1.8],[110,135,2.2],[75,48,1.4],[100,55,1.7],[120,90,2],[30,160,1.5],[115,160,1.9]].map(([e,t,r],n)=>`<circle cx="${e}" cy="${t}" r="7" fill="url(#diffNut)" opacity="0.85" filter="url(#diffGlow)">
          <animateTransform attributeName="transform" type="translate" values="0,0;${n%2?2:-2},${n%3?-2:2};0,0" dur="${r}s" repeatCount="indefinite"/>
        </circle>`).join("")}

      <!-- Flèches de flux -->
      <path d="M144 75 L150 75" stroke="#60a5fa" stroke-width="2" marker-end="url(#diffArr)"/>
      <path d="M144 103 L150 103" stroke="#60a5fa" stroke-width="2" marker-end="url(#diffArr)"/>
      <path d="M144 131 L150 131" stroke="#60a5fa" stroke-width="2" marker-end="url(#diffArr)"/>
      <text x="97" y="196" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(96,165,250,0.7)">→ von hoch nach niedrig</text>

      <!-- Particules basse conc. (droite) — quelques unes -->
      ${[[165,65,2.1],[185,110,1.7],[210,80,1.9],[175,145,2.3],[230,130,1.6]].map(([e,t,r])=>`<circle cx="${e}" cy="${t}" r="7" fill="url(#diffNut)" opacity="0.6"><animateTransform attributeName="transform" type="translate" values="0,0;1,2;0,0" dur="${r}s" repeatCount="indefinite"/></circle>`).join("")}

      <!-- ══ DROITE: APPLICATION ANATOMIQUE ══ -->
      <!-- Séparateur -->
      <line x1="270" y1="25" x2="270" y2="200" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="375" y="18" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="800" fill="rgba(255,255,255,0.75)">In der Haut</text>

      <!-- Épiderme (sans vaisseaux) -->
      <rect x="278" y="28" width="190" height="65" rx="6 6 0 0" fill="url(#diffEpi)"/>
      <!-- Texture épiderme -->
      <path d="M280 40 Q320 37 360 40 Q400 43 462 40" fill="none" stroke="rgba(255,215,185,0.3)" stroke-width="1.2"/>
      <path d="M280 52 Q320 49 360 52 Q400 55 462 52" fill="none" stroke="rgba(255,215,185,0.25)" stroke-width="1"/>
      <path d="M280 65 Q320 62 360 65 Q400 68 462 65" fill="none" stroke="rgba(255,215,185,0.2)" stroke-width="1"/>
      <!-- Cellules épidermiques -->
      ${[[295,48,22,10],[340,45,20,10],[385,48,22,10],[430,45,20,10],[310,62,22,10],[358,60,22,10],[408,62,22,10],[455,60,18,10]].map(([e,t,r,n])=>`<rect x="${e-r/2}" y="${t-n/2}" width="${r}" height="${n}" rx="4" fill="rgba(240,185,140,0.3)" stroke="rgba(220,160,110,0.35)" stroke-width="0.7"/>`).join("")}
      <!-- Noyaux cellulaires -->
      ${[[295,48],[340,45],[385,48],[430,45],[310,62],[358,60],[408,62],[455,60]].map(([e,t])=>`<ellipse cx="${e}" cy="${t}" rx="4" ry="2.5" fill="rgba(180,110,60,0.5)"/>`).join("")}
      <!-- Label Epidermis -->
      <text x="463" y="52" font-size="8" font-family="DM Sans" font-weight="700" fill="#f5c8a0" text-anchor="start">  </text>
      <text x="283" y="38" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(60,30,10,0.9)">Epidermis (KEINE Gefäße!)</text>
      <!-- Icône pas de vaisseaux -->
      <text x="440" y="82" font-size="10" text-anchor="middle">🚫</text>
      <circle cx="440" cy="70" r="8" fill="none" stroke="#f87171" stroke-width="1.5"/>
      <path d="M434 64 L446 76" stroke="#f87171" stroke-width="1.5"/>

      <!-- Interface Epi/Dermis — Basalmembrane -->
      <rect x="278" y="93" width="190" height="3" fill="rgba(255,255,255,0.2)"/>
      <text x="373" y="101" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(255,255,255,0.4)">Basalmembran</text>

      <!-- Derme (avec vaisseaux) -->
      <rect x="278" y="96" width="190" height="75" rx="0 0 6 6" fill="url(#diffDerm)"/>
      <!-- Fibres collagène -->
      <path d="M280 108 Q330 105 380 108 Q430 111 465 108" fill="none" stroke="rgba(210,120,90,0.3)" stroke-width="1.5"/>
      <path d="M280 122 Q330 119 380 122 Q430 125 465 122" fill="none" stroke="rgba(210,120,90,0.25)" stroke-width="1.5"/>
      <path d="M280 138 Q330 135 380 138 Q430 141 465 138" fill="none" stroke="rgba(210,120,90,0.2)" stroke-width="1.5"/>
      <!-- Capillaire sanguin réaliste -->
      <ellipse cx="330" cy="150" rx="20" ry="10" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
      <ellipse cx="330" cy="150" rx="14" ry="6" fill="rgba(254,202,202,0.4)"/>
      <!-- Globules rouges dans le capillaire -->
      <ellipse cx="323" cy="150" rx="4" ry="2.5" fill="#dc2626" opacity="0.9"/>
      <ellipse cx="332" cy="149" rx="3.5" ry="2" fill="#dc2626" opacity="0.85"/>
      <ellipse cx="340" cy="151" rx="4" ry="2.5" fill="#dc2626" opacity="0.9"/>
      <!-- Petit capillaire droit -->
      <ellipse cx="420" cy="148" rx="18" ry="9" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
      <ellipse cx="420" cy="148" rx="12" ry="5" fill="rgba(254,202,202,0.35)"/>
      <!-- Label dermis -->
      <text x="283" y="107" font-size="8" font-family="DM Sans" font-weight="700" fill="rgba(255,220,210,0.9)">Dermis (mit Blutgefäßen)</text>

      <!-- Flèches de diffusion (Dermis → Epidermis) -->
      ${[[305,93],[340,93],[375,93],[410,93],[445,93]].map(([e,t])=>`<path d="M${e} ${t+2} L${e} ${t-14}" stroke="#4ade80" stroke-width="2" stroke-linecap="round" marker-end="url(#diffArr2)"/>
         <circle cx="${e}" cy="${t+5}" r="5" fill="url(#diffNut2)" opacity="0.75" filter="url(#diffGlow)">
           <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="${1.5+Math.random()*.8}s" repeatCount="indefinite"/>
         </circle>`).join("")}
      <defs><marker id="diffArr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#4ade80"/></marker></defs>

      <!-- Texte flux -->
      <text x="373" y="205" text-anchor="middle" font-size="8" font-family="DM Sans" font-weight="700" fill="#4ade80">Nährstoffe diffundieren: Blut → Dermis → Epidermis</text>
      <text x="373" y="216" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(255,255,255,0.4)">passiv, ohne Energie, von hoch nach niedrig</text>
    </svg>
    <div style="font-size:.75rem;color:var(--ink2);line-height:1.5;padding:10px;background:rgba(96,165,250,.06);border-radius:8px">
      <strong style="color:#60a5fa">Diffusion</strong> = passiver Transport ohne Energie. Teilchen wandern von <strong>hoher → niedriger Konzentration</strong> bis zum Gleichgewicht. So versorgt die Dermis die gefäßlose Epidermis!
    </div>
  </div>
</div>

<div class="lekt-sec" id="lsec-epi-melanom">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">04</span><span class="lekt-title">Melanozyten & Malignes Melanom</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#c084fc">🔬 Von der Basalzelle zum Melanom</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      <div style="padding:12px;background:rgba(74,222,128,.06);border-radius:10px;border:1px solid rgba(74,222,128,.2)">
        <div style="font-weight:700;font-size:.82rem;color:#4ade80;margin-bottom:4px">Melanozyten (normal)</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">In der <strong>Basalzellschicht</strong>. Produzieren <strong>Melanin</strong> = brauner Farbstoff. Schützt vor UV-Strahlung. Sonnenbräune = mehr Melaninproduktion.</div>
      </div>
      <div style="text-align:center;font-size:.8rem;color:var(--ink3)">⬇ Entartung</div>
      <div style="padding:12px;background:rgba(192,132,252,.06);border-radius:10px;border:1px solid rgba(192,132,252,.25)">
        <div style="font-weight:700;font-size:.82rem;color:#c084fc;margin-bottom:4px">Malignes Melanom (Hautkrebs)</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">Geht von Melanozyten aus. <strong>Sehr bösartig</strong>. Metastasiert <strong>lymphogen</strong> (Lymphwege) und <strong>hämatogen</strong> (Blutweg). Frühzeitige Erkennung = entscheidend.</div>
      </div>
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Warum muss ich die Epidermisschichten kennen?</div>
    <strong>Krebserkrankungen der Haut</strong> gehen von bestimmten Zelltypen in bestimmten Schichten aus. Das malignes Melanom von den <strong>Melanozyten der Basalzellschicht</strong>. Nur wer die Schichten kennt, versteht die Pathologie!
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>
</div></div>`,"Aufbau der Dermis (Lederhaut)":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Vertiefung</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Dermis (Lederhaut) im Detail</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">2 Schichten, Mechanorezeptoren, Sinneswahrnehmung & Dekubitus</div>
  </div>
</div>

<div class="lekt-sec" id="lsec-dermis-schichten">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Die 2 Schichten der Dermis</span></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px">
    <div style="background:rgba(96,165,250,.07);border:1.5px solid rgba(96,165,250,.25);border-radius:14px;padding:16px">
      <div style="font-weight:800;font-size:.88rem;color:#60a5fa;margin-bottom:4px">1. Papillenschicht</div>
      <div style="font-size:.65rem;color:var(--ink3);margin-bottom:10px;font-style:italic">Stratum papillare</div>
      <div style="font-size:.73rem;color:var(--ink2);line-height:1.6">
        ✓ Viele <strong>Blutgefäße</strong><br>
        ✓ Versorgt Epidermis + Dermis<br>
        ✓ Bei Hellhäutigen: Errötung sichtbar<br>
        ⚠️ <strong style="color:#f87171">Druck komprimiert Gefäße!</strong>
      </div>
    </div>
    <div style="background:rgba(251,191,36,.07);border:1.5px solid rgba(251,191,36,.25);border-radius:14px;padding:16px">
      <div style="font-weight:800;font-size:.88rem;color:#fbbf24;margin-bottom:4px">2. Geflechtschicht</div>
      <div style="font-size:.65rem;color:var(--ink3);margin-bottom:10px;font-style:italic">Stratum reticulare</div>
      <div style="font-size:.73rem;color:var(--ink2);line-height:1.6">
        ✓ Kollagenreiche Fasern<br>
        ✓ Elastisch<br>
        ✓ Elastizität nimmt im Alter ab<br>
        ⚠️ UV-Strahlung beschleunigt Falten
      </div>
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">⚠️ DEKUBITUS — Anatomische Erklärung</div>
    <strong>Anhaltender Druck</strong> auf die Haut → komprimiert die <strong>Blutgefäße der Papillenschicht</strong> → <strong>Ischämie</strong> (Durchblutungsstop) → Gewebeunterversorgung → <strong>Nekrose → Dekubitus</strong>.<br>
    <span style="color:#4ade80">→ Deshalb: regelmäßige Lagerung alle 2h, Druckverteilung, Prophylaxematten!</span>
  </div>
</div>

<div class="lekt-sec" id="lsec-dermis-rezeptoren">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Mechanorezeptoren & Sinneswahrnehmung</span></div>
  <p class="lekt-prose">Die Haut ist das <strong>nervenreichste Organ</strong>. Spezialisierte Nervenendungen reagieren auf unterschiedliche Reize.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🖐️ Mechanorezeptoren — Tabelle</div>
    <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:.75rem">
        <thead>
          <tr style="background:rgba(74,222,128,.1)">
            <th style="padding:8px 10px;text-align:left;color:#4ade80;font-weight:700;border-bottom:1px solid var(--border)">Rezeptor</th>
            <th style="padding:8px 10px;text-align:left;color:#4ade80;font-weight:700;border-bottom:1px solid var(--border)">Reiz</th>
            <th style="padding:8px 10px;text-align:left;color:#4ade80;font-weight:700;border-bottom:1px solid var(--border)">Lage</th>
          </tr>
        </thead>
        <tbody>
          ${[["Merkel-Tastzellen","Druck","Oberhaut (Basalzellschicht)"],["Freie Nervenendigungen","Druck, Temperatur, Schmerz","Oberhaut + Lederhaut"],["Meissner-Tastkörperchen","Berührung / Tasten","Lederhaut (Dermis)"],["Ruffini-Körperchen","Hautdehnung","Lederhaut (Dermis)"],["Vater-Pacini-Körperchen","Vibration","Unterhautfettgewebe (Subcutis)"]].map(([e,t,r],n)=>`
          <tr style="background:${n%2?"rgba(255,255,255,.01)":"transparent"}">
            <td style="padding:8px 10px;color:var(--ink);border-bottom:1px solid var(--border)">${e}</td>
            <td style="padding:8px 10px;color:var(--ink2);border-bottom:1px solid var(--border)">${t}</td>
            <td style="padding:8px 10px;color:var(--ink2);border-bottom:1px solid var(--border)">${r}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
  </div>
  <div class="lekt-merkhilfe">
    <span>🧠</span>
    <div><strong>Merkhilfe Lage:</strong> <em>Merkel oben (Basalzellschicht), Meissner + Ruffini mitte (Dermis), Pacini unten (Subcutis)</em></div>
  </div>
</div>

<div class="lekt-sec" id="lsec-dermis-zahlen">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Zahlen pro cm² Dermis — Klausurklassiker</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🔢 Pro 1 cm² Dermis — animiertes Diagramm</div>
    <!-- SVG bar chart animé reproduisant l'Image 3 -->
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;margin:6px 0;border-radius:12px">
      <defs>
        <linearGradient id="bSchmz" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#f87171"/></linearGradient>
        <linearGradient id="bDruck" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#c2410c"/><stop offset="100%" stop-color="#fb923c"/></linearGradient>
        <linearGradient id="bSchweis" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#15803d"/><stop offset="100%" stop-color="#4ade80"/></linearGradient>
        <linearGradient id="bTalg" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#7e22ce"/><stop offset="100%" stop-color="#c084fc"/></linearGradient>
        <linearGradient id="bKalt" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#1d4ed8"/><stop offset="100%" stop-color="#60a5fa"/></linearGradient>
        <linearGradient id="bWarm" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#b45309"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
        <filter id="barShadow"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.4)"/></filter>
      </defs>
      <rect width="480" height="200" rx="12" fill="#0c1520"/>
      <!-- Titre -->
      <text x="240" y="18" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="800" fill="rgba(255,255,255,0.85)">Rezeptoren &amp; Strukturen pro 1 cm² Dermis</text>

      <!-- Axe Y -->
      <line x1="52" y1="30" x2="52" y2="148" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <!-- Axe X -->
      <line x1="52" y1="148" x2="468" y2="148" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <!-- Grille Y -->
      ${[50,100,150,200].map(e=>{const t=148-e/200*118;return`<line x1="52" y1="${t.toFixed(0)}" x2="468" y2="${t.toFixed(0)}" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        <text x="48" y="${(t+3).toFixed(0)}" font-size="7" font-family="DM Sans" fill="rgba(255,255,255,0.3)" text-anchor="end">${e}</text>`}).join("")}

      <!-- Barres + valeurs + icônes -->
      ${[[200,"#f87171","url(#bSchmz)","200","Schmerzrezeptoren","⚡","85"],[100,"#fb923c","url(#bDruck)","100","Druckrezeptoren","👆","151"],[100,"#4ade80","url(#bSchweis)","100","Schweißdrüsen","💧","217"],[40,"#c084fc","url(#bTalg)","40","Talgdrüsen","🫙","283"],[12,"#60a5fa","url(#bKalt)","12","Kälterezeptoren","❄️","349"],[2,"#fbbf24","url(#bWarm)","2","Wärmerezeptoren","🌡️","415"]].map(([e,t,r,n,i,l,s])=>{const a=e/200*118,o=148-a,f=Number(s)-22;return`
        <!-- Barre ${i} -->
        <rect x="${f}" y="${o}" width="44" height="${a.toFixed(1)}" rx="6 6 2 2" fill="${r}" filter="url(#barShadow)" style="animation:growBar3 0.8s ease-out"/>
        <!-- Valeur -->
        <text x="${s}" y="${(o-8).toFixed(0)}" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="900" fill="${t}">${n}</text>
        <!-- Icône -->
        <text x="${s}" y="${(o-20).toFixed(0)}" text-anchor="middle" font-size="11">${l}</text>
        <!-- Label bas -->
        <text x="${s}" y="160" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="700" fill="${t}">${i.split(" ")[0]}</text>
        <text x="${s}" y="170" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(255,255,255,0.4)">${i.split(" ")[1]||""}</text>`}).join("")}
      <style>@keyframes growBar3 { from { transform: scaleY(0); transform-origin: bottom; } to { transform: scaleY(1); } }</style>

      <!-- Note bas -->
      <text x="240" y="188" text-anchor="middle" font-size="7.5" font-family="DM Sans" fill="rgba(148,163,184,0.7)">Merkhilfe: 200 Schmerz · 100 Druck · 100 Schweiß · 40 Talg · 12 Kälte · 2 Wärme</text>
    </svg>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Sinneswahrnehmung + Schutz</div>
    Die Haut nimmt über Rezeptoren verschiedene Reize auf → Nervenbahnen → Gehirn. <strong>Tastsinn</strong>: Form + Struktur. <strong>Temperatursinn</strong>: Kalt/Warm. <strong>Schutz vor Austrocknung</strong>: Epidermis verhindert Wasserverdunstung. <strong>Melanozyten</strong>: Melanin schützt vor UV.
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>
</div></div>`,"Veränderungen der Haut":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#14532d,#166534,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div id="haut-hero-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  <div style="position:relative;z-index:2">
    <div style="margin-bottom:14px">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.2);border:1px solid rgba(74,222,128,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;text-transform:uppercase;color:rgba(180,255,200,.9)">🏥 Pflegefach · Vertiefung</div>
      
    </div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px">Veränderungen der Haut</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Kinderhaut — Jugend — Erwachsene — Altershaut</div>
  </div>
</div>

<div class="lekt-sec" id="lsec-vera-lebensalter">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">01</span><span class="lekt-title">Haut im Lebenslauf</span></div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">
    ${[["👶","Baby / Kind (bis 8 J.)","Fettarm, wasserreich. Talgdrüsen kaum aktiv. Sehr empfindlich auf Wind, Sonne, Kälte.","#60a5fa"],["🧑","Jugendliche","Talgproduktion oft gesteigert → unreine, fettige Haut (Pickel, Mitesser häufig)","#fbbf24"],["🧑‍🦱","Erwachsene (ab Ende Pubertät)","3 genetisch bedingte Hauttypen (seborrhoisch/sebostatisch/Misch). Hormonell gesteuert.","#4ade80"],["👴","Ältere Menschen","Viele strukturelle Veränderungen → Altershaut (siehe unten)","#c084fc"]].map(([e,t,r,n])=>`
    <div style="display:flex;gap:12px;align-items:flex-start;padding:13px;border-radius:12px;border:1.5px solid var(--border);background:rgba(255,255,255,.02)">
      <span style="font-size:1.6rem;flex-shrink:0">${e}</span>
      <div><div style="font-weight:700;font-size:.82rem;color:${n};margin-bottom:4px">${t}</div><div style="font-size:.73rem;color:var(--ink2);line-height:1.5">${r}</div></div>
    </div>`).join("")}
  </div>
</div>

<div class="lekt-sec" id="lsec-vera-kinderhaut">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">02</span><span class="lekt-title">Kinderhaut — Besonderheiten & Pflegekonsequenzen</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">👶 Kinderhaut vs. Erwachsenenhaut</div>
    ${[["Hornschicht ~30% dünner","Weniger mechanischer Schutz","→ sanfte Pflege, kein Rubbeln"],["Kein fertiger Säureschutzmantel","Keine stabile Keimbarriere","→ pH-neutrale Produkte, keine Duftstoffe"],["Kaum Melanin","Hohe UV-Empfindlichkeit","→ immer LSF 50+, Sonnenhut"],["Immunsystem muss noch trainiert werden","Anfälliger für Hautreizungen","→ natürliche Reize zulassen, aber schützen"],["Durchlässiger für Substanzen","Allergene dringen leichter ein","→ auf Konservierungsstoffe verzichten"]].map(([e,t,r])=>`
    <div style="display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:6px;align-items:start;padding:9px 12px;border-radius:8px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:6px;font-size:.72rem">
      <div style="color:#60a5fa;font-weight:600">${e}</div>
      <div style="color:var(--ink2)">${t}</div>
      <div style="color:#4ade80">${r}</div>
    </div>`).join("")}
  </div>
</div>

<div class="lekt-sec" id="lsec-vera-altershaut">
  <div class="lekt-sec-label"><span class="lekt-num" style="background:rgba(74,222,128,.15);color:#4ade80">03</span><span class="lekt-title">Altershaut — Ursache & Konsequenz</span></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#c084fc">👴 Veränderungen + Pflegerelevanz</div>
    ${[["Kapillaranzahl ↓, poröser","Hämatome, kalte + blasse Haut","→ Vorsicht bei Lagerung, Druckschutz"],["Epidermiserneuerung dauert länger","Regenerationsfähigkeit ↓","→ Wunden heilen langsamer"],["Verzahnung Epidermis/Dermis löst sich + Subcutis ↓","Dünne, pergamentartige Haut","→ vorsichtiger Umgang, keine Klebestreifen reißen"],["Schweiß- + Talgdrüsensekretion ↓","Rissige, trockene, juckende, schuppige Haut","→ regelmäßige rückfettende Hautpflege"],["Bindegewebe + Kollagenfasern ↓","Faltenbildung","→ kosmetisch, keine Pflegekonsequenz"],["UV-Strahlung über Jahrzehnte","Pigmentflecken (Altersflecken)","→ beobachten auf Malignität"]].map(([e,t,r])=>`
    <div style="padding:10px 12px;border-radius:9px;border:1px solid var(--border);background:rgba(255,255,255,.02);margin-bottom:7px">
      <div style="display:flex;gap:6px;align-items:flex-start;margin-bottom:4px">
        <span style="color:#c084fc;font-size:.75rem;font-weight:700;flex-shrink:0">Ursache:</span>
        <span style="font-size:.75rem;color:var(--ink)">${e}</span>
      </div>
      <div style="display:flex;gap:6px;align-items:flex-start;margin-bottom:4px">
        <span style="color:#f87171;font-size:.72rem;font-weight:700;flex-shrink:0">Folge:</span>
        <span style="font-size:.72rem;color:var(--ink2)">${t}</span>
      </div>
      <div style="display:flex;gap:6px;align-items:flex-start">
        <span style="color:#4ade80;font-size:.7rem;font-weight:700;flex-shrink:0">Pflege:</span>
        <span style="font-size:.7rem;color:#4ade80">${r}</span>
      </div>
    </div>`).join("")}
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#16a34a,#15803d)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Haut starten →</button>
</div></div>`},niere:{"Anatomie & Funktionen der Niere":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px;position:relative;overflow:hidden">
  <div style="position:relative;z-index:2">
    <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(147,197,253,.9)">🫘 Niere · Lektion 1</div>
    <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;line-height:1.2;margin-bottom:8px;margin-top:12px">Anatomie & Funktionen der Niere</div>
    <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Was leisten unsere Nieren — und wo liegen sie genau?</div>
  </div>
</div>

<div id="lsec-niere-anat" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Lage und Aufbau</div></div>
  <p class="lekt-prose">Die Nieren liegen <strong>retroperitoneal</strong> (hinter dem Bauchfell) beidseitig der Wirbelsäule auf Höhe der Lendenwirbel. Die <strong>rechte Niere liegt tiefer</strong> als die linke (wegen der Leber). Jede Niere ist ca. 10–12 cm lang, 5–6 cm breit und wiegt 120–200 g.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🫘 Anatomische Gliederung</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:6px">
      ${[["Nierenrinde","Außenbereich — enthält die Nierenkörperchen (Glomeruli) und proximale/distale Tubuli","#60a5fa"],["Nierenmark","Innerer Bereich — enthält Henle-Schleifen und Sammelrohre","#93c5fd"],["Nierenbecken","Sammelsystem für den Harn → leitet in den Harnleiter","#3b82f6"],["Harnleiter (Ureter)","2 Harnleiter, je ca. 25–30 cm lang → leiten Harn zur Harnblase","#60a5fa"]].map(([e,t,r])=>`<div style="background:rgba(96,165,250,.06);border:1px solid rgba(96,165,250,.15);border-radius:12px;padding:12px">
        <div style="font-weight:700;font-size:.8rem;color:${r};margin-bottom:4px">${e}</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">${t}</div>
      </div>`).join("")}
    </div>
  </div>
</div>

<div id="lsec-niere-funk" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Allgemeine Funktionen der Niere</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">📋 7 Hauptfunktionen</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
      ${[["💧","Urinbildung","Bildung von Harn durch 2–3 Mio. Nephrone","#60a5fa"],["🩸","Blutfilterung","Reinigung des Blutes von Stoffwechselabfällen und Giftstoffen","#f87171"],["⚖️","Wasser-/Elektrolythaushalt","Regulation durch Ausscheidung und Rückresorption von Wasser, Na⁺, K⁺, Cl⁻","#fbbf24"],["🩺","Blutdruckregulation","Über Wasserhaushalt und Hormon Renin → Angiotensin → Blutdrucksteigerung","#fb923c"],["🔬","Säure-Basen-Haushalt","pH-Wert des Blutes: 7,37–7,4 (H⁺-Ausscheidung, HCO₃⁻-Rückresorption)","#4ade80"],["💊","Hormonausschüttung","Renin (Blutdruck) + Erythropoetin (Erythrozytenbildung)","#c084fc"],["☀️","Vitamin D3-Aktivierung","Umwandlung von Vitamin D in aktive Form Vitamin D3","#fbbf24"]].map(([e,t,r,n])=>`<div style="display:flex;gap:12px;padding:10px 14px;background:rgba(255,255,255,.02);border-radius:11px;border-left:3px solid ${n}">
        <div style="font-size:1.2rem;flex-shrink:0">${e}</div>
        <div><div style="font-weight:700;font-size:.8rem;color:${n};margin-bottom:2px">${t}</div><div style="font-size:.72rem;color:var(--ink2)">${r}</div></div>
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-merkhilfe">💡 <div><strong>Merkhilfe pH-Wert:</strong> 7,37–7,4 — unter 7,35 = Azidose, über 7,45 = Alkalose. Die Nieren regulieren langfristig (Stunden–Tage), die Lunge kurzfristig (Sekunden–Minuten) über CO₂.</div></div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Klausur-FALLE: Renin-Angiotensin-System</div>
    Nieren bilden bei Blutdruckabfall <strong>Renin</strong> → aktiviert Angiotensin I → Angiotensin II → Vasokonstriktion + Aldosteron-Ausschüttung → Na⁺/Wasser-Retention → Blutdruckstieg.<br/>
    <em>ACE-Hemmer blockieren diesen Weg → Blutdrucksenkung!</em>
  </div>
</div>
</div></div>`,"Nephrone & Urinbildung":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(147,197,253,.9)">🫘 Niere · Lektion 2</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Nephrone & Urinbildung</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Wie entsteht Urin — von 180 Litern Primärharn zu 1,5 Litern Endharn?</div>
</div>

<div id="lsec-niere-neph" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Das Nephron — Grundstruktur</div></div>
  <p class="lekt-prose">Das <strong>Nephron</strong> ist die funktionelle Grundeinheit der Niere. Jede Niere enthält ca. <strong>1–1,5 Millionen Nephrone</strong>, beide zusammen ca. 2–3 Mio. Es besteht aus zwei Teilen: dem Nierenkörperchen und den Nierenkanälchen (Tubuli).</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🔬 Aufbau des Nephrons</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
      ${[["Nierenkörperchen (Corpusculum renale)","In der Nierenrinde — besteht aus Glomerulus + Bowman-Kapsel. Hier: Ultrafiltration → Primärharn","#60a5fa"],["Proximaler Tubulus","Gewundener + gerader Teil — Rückresorption von ~65% des Filtrats, Glukose, Aminosäuren","#93c5fd"],["Henle-Schleife","Im Nierenmark — dünner absteigender + aufsteigender Schenkel. Harnkonzentrierung","#3b82f6"],["Distaler Tubulus","Feinregulation von Na⁺, K⁺, Ca²⁺ und Wasser (durch Aldosteron und ADH)","#60a5fa"],["Sammelrohr","Sammelt Harn vieler Nephrone → ins Nierenbecken → Harnleiter","#bfdbfe"]].map(([e,t,r])=>`<div style="display:flex;gap:12px;padding:10px 14px;background:rgba(96,165,250,.04);border-radius:11px;border-left:3px solid ${r}">
        <div><div style="font-weight:700;font-size:.8rem;color:${r};margin-bottom:2px">${e}</div><div style="font-size:.72rem;color:var(--ink2)">${t}</div></div>
      </div>`).join("")}
    </div>
  </div>
</div>

<div id="lsec-niere-urin" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Urinbildung — 3 Schritte</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">⚗️ Vom Blut zum Urin</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px">
      ${[["1","Glomeruläre Filtration","Im Nierenkörperchen: Blutdruck treibt Flüssigkeit durch Kapillarwand in die Bowman-Kapsel. Ergebnis: ~180 L Primärharn/Tag (Ultrafiltrat = wie Blutplasma ohne Eiweiße)","#60a5fa"],["2","Tubuläre Rückresorption","In den Tubuli: 99% des Primärharns werden rückresorbiert — Wasser, Glukose, Elektrolyte, Aminosäuren. Ergebnis: ~1,5–2 L konzentrierter Sekundärharn/Tag","#4ade80"],["3","Tubuläre Sekretion","Aktiver Transport von Abfallstoffen (H⁺, K⁺, bestimmten Medikamenten) aus dem Blut in den Tubulus → Harn wird konzentriert und angesäuert","#fbbf24"]].map(([e,t,r,n])=>`<div style="display:flex;gap:12px;padding:12px 14px;background:rgba(255,255,255,.02);border-radius:12px">
        <div style="width:28px;height:28px;border-radius:8px;background:${n}22;color:${n};font-weight:800;font-size:.85rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">${e}</div>
        <div><div style="font-weight:700;font-size:.82rem;color:${n};margin-bottom:3px">${t}</div><div style="font-size:.73rem;color:var(--ink2);line-height:1.5">${r}</div></div>
      </div>`).join("")}
    </div>
  </div>
  <!-- SVG animé: 180L → 1.5L -->
  <svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;margin:8px 0;border-radius:12px">
    <defs>
      <radialGradient id="glomGrad" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#f87171"/><stop offset="100%" stop-color="#7f1d1d"/>
      </radialGradient>
      <linearGradient id="tubGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#a16207"/><stop offset="100%" stop-color="#78350f"/>
      </linearGradient>
      <linearGradient id="urGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#1d4ed8"/><stop offset="100%" stop-color="#60a5fa"/>
      </linearGradient>
      <radialGradient id="dropBlue" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#93c5fd"/><stop offset="100%" stop-color="#2563eb"/>
      </radialGradient>
      <radialGradient id="dropGreen" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#86efac"/><stop offset="100%" stop-color="#15803d"/>
      </radialGradient>
      <radialGradient id="dropAmber" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#fde68a"/><stop offset="100%" stop-color="#b45309"/>
      </radialGradient>
      <filter id="gGlow2"><feGaussianBlur stdDeviation="2" result="b"/><feComposite in="SourceGraphic" in2="b" operator="over"/></filter>
      <marker id="uArr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
        <polygon points="0,0 7,3.5 0,7" fill="#60a5fa"/>
      </marker>
      <marker id="gArr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
        <polygon points="0,0 7,3.5 0,7" fill="#4ade80"/>
      </marker>
    </defs>

    <!-- Fond -->
    <rect width="520" height="160" rx="12" fill="#0c1520"/>
    <!-- Titre -->
    <text x="260" y="16" text-anchor="middle" font-size="10" font-family="DM Sans" font-weight="800" fill="rgba(255,255,255,0.8)">Urinbildung im Nephron — 3 Schritte</text>

    <!-- ═══ ÉTAPE 1: GLOMERULUS — Filtration ═══ -->
    <!-- Capillaire afférent -->
    <path d="M20 80 Q28 80 35 75 Q42 68 48 68" stroke="#dc2626" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- Bowman-Kapsel -->
    <circle cx="68" cy="75" r="28" fill="rgba(96,165,250,0.08)" stroke="rgba(96,165,250,0.4)" stroke-width="2"/>
    <!-- Glomérule (peloton de capillaires) -->
    <circle cx="68" cy="75" r="18" fill="url(#glomGrad)" stroke="rgba(220,38,38,0.6)" stroke-width="1.5" filter="url(#gGlow2)"/>
    <!-- Texture glomérule -->
    <path d="M56 70 Q62 65 70 68 Q78 71 74 78 Q70 85 62 82 Q54 79 56 70" fill="rgba(220,38,38,0.35)" stroke="rgba(255,150,150,0.3)" stroke-width="0.8"/>
    <path d="M64 63 Q70 60 76 64 Q80 68 77 74" fill="none" stroke="rgba(255,150,150,0.3)" stroke-width="0.8"/>
    <!-- Capsule texte -->
    <text x="68" y="114" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="700" fill="#f87171">Glomerulus</text>
    <text x="68" y="124" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(248,113,113,0.7)">(Kapillarknäuel)</text>
    <!-- Capillaire efférent -->
    <path d="M88 68 Q94 65 100 68 Q108 72 112 78" stroke="#dc2626" stroke-width="3" fill="none" stroke-linecap="round"/>

    <!-- Gouttes de filtrat sortant -->
    ${[[50,48],[62,42],[76,44]].map(([e,t])=>`<ellipse cx="${e}" cy="${t}" rx="4" ry="5.5" fill="url(#dropBlue)" opacity="0.85" filter="url(#gGlow2)">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="1.6s" repeatCount="indefinite"/>
      </ellipse>`).join("")}
    <!-- Flèche Filtration -->
    <path d="M65 46 L65 36" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#uArr)"/>
    <text x="68" y="32" font-size="7" font-family="DM Sans" font-weight="700" fill="#60a5fa">Filtration</text>

    <!-- Badge 180L -->
    <rect x="25" y="22" width="56" height="20" rx="6" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.5)" stroke-width="1.2"/>
    <text x="53" y="30" text-anchor="middle" font-size="7" font-family="DM Sans" font-weight="700" fill="#60a5fa">Primärharn</text>
    <text x="53" y="39" text-anchor="middle" font-size="8.5" font-family="DM Sans" font-weight="900" fill="white">180 L/Tag</text>

    <!-- ═══ ÉTAPE 2: TUBULE — Réabsorption ═══ -->
    <!-- Tubule proximal (serpentin) -->
    <path d="M112 78 Q120 74 130 80 Q140 86 150 80 Q162 72 172 78 Q184 85 194 78 Q206 70 218 76 Q230 83 240 76 Q252 68 264 76 Q276 84 288 78 Q300 70 310 78"
          stroke="url(#tubGrad)" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.9"/>
    <!-- Contour tubule -->
    <path d="M112 78 Q120 74 130 80 Q140 86 150 80 Q162 72 172 78 Q184 85 194 78 Q206 70 218 76 Q230 83 240 76 Q252 68 264 76 Q276 84 288 78 Q300 70 310 78"
          stroke="rgba(161,98,7,0.4)" stroke-width="10" fill="none" stroke-linecap="round"/>
    <!-- Label tubule -->
    <text x="210" y="100" text-anchor="middle" font-size="7.5" font-family="DM Sans" font-weight="700" fill="#d97706">Proximaler Tubulus + Henle-Schleife</text>
    <text x="210" y="112" text-anchor="middle" font-size="7" font-family="DM Sans" fill="rgba(217,119,6,0.7)">99% Rückresorption: Wasser, Glukose, Na⁺, K⁺</text>

    <!-- Flèches de réabsorption (vers le bas = retour dans le sang) -->
    ${[[140,82],[175,82],[215,80],[255,80],[295,80]].map(([e,t])=>`<path d="M${e} ${t+5} L${e} ${t+18}" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#gArr)"/>
       <circle cx="${e}" cy="${t+5}" r="4" fill="url(#dropGreen)" opacity="0.7" filter="url(#gGlow2)">
         <animateTransform attributeName="transform" type="translate" values="0,0;0,3;0,0" dur="1.8s" repeatCount="indefinite"/>
       </circle>`).join("")}
    <text x="210" y="135" text-anchor="middle" font-size="6.5" font-family="DM Sans" fill="rgba(74,222,128,0.6)">↓ zurück ins Blut (Rückresorption)</text>

    <!-- ═══ ÉTAPE 3: ENDHARN ═══ -->
    <!-- Sammelrohr -->
    <path d="M310 78 Q322 80 330 85 Q338 92 340 105 L340 148" stroke="url(#urGrad)" stroke-width="8" fill="none" stroke-linecap="round"/>
    <path d="M310 78 Q322 80 330 85 Q338 92 340 105 L340 148" stroke="rgba(29,78,216,0.3)" stroke-width="10" fill="none" stroke-linecap="round"/>
    <text x="360" y="90" font-size="7.5" font-family="DM Sans" font-weight="700" fill="#60a5fa">Sammelrohr</text>
    <!-- Gouttes d'urine finale -->
    ${[[335,128],[340,140],[338,152]].map(([e,t])=>`<ellipse cx="${e}" cy="${t}" rx="4" ry="5.5" fill="url(#dropAmber)" opacity="0.85">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,3;0,0" dur="1.4s" repeatCount="indefinite"/>
      </ellipse>`).join("")}

    <!-- Badge Endharn -->
    <rect x="360" y="108" width="62" height="38" rx="8" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.5)" stroke-width="1.5"/>
    <text x="391" y="122" text-anchor="middle" font-size="7" font-family="DM Sans" font-weight="700" fill="#fbbf24">Sekundärharn</text>
    <text x="391" y="133" text-anchor="middle" font-size="11" font-family="DM Sans" font-weight="900" fill="white">1,5–2 L</text>
    <text x="391" y="143" text-anchor="middle" font-size="6" font-family="DM Sans" fill="rgba(251,191,36,0.6)">pro Tag = URIN</text>

    <!-- Numéros d'étapes -->
    <circle cx="20" cy="54" r="10" fill="rgba(96,165,250,0.2)" stroke="#60a5fa" stroke-width="1.5"/>
    <text x="20" y="58" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#60a5fa">1</text>
    <circle cx="200" cy="54" r="10" fill="rgba(74,222,128,0.2)" stroke="#4ade80" stroke-width="1.5"/>
    <text x="200" y="58" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#4ade80">2</text>
    <circle cx="360" cy="54" r="10" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="360" y="58" text-anchor="middle" font-size="9" font-family="DM Sans" font-weight="800" fill="#fbbf24">3</text>
    <text x="34" y="58" font-size="7" font-family="DM Sans" fill="rgba(96,165,250,0.7)">Filtration</text>
    <text x="214" y="58" font-size="7" font-family="DM Sans" fill="rgba(74,222,128,0.7)">Rückresorption (99%)</text>
    <text x="374" y="58" font-size="7" font-family="DM Sans" fill="rgba(251,191,36,0.7)">Sekretion → Urin</text>
  </svg>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Klausur-FALLE: Primär- vs. Sekundärharn</div>
    <strong>Primärharn ≠ Urin!</strong> 180 L werden filtriert, aber 99% rückresorbiert → nur 1,5–2 L Endharn. Glukosurie (Zucker im Urin) entsteht erst ab einem BZ &gt;180 mg/dl — dann ist die Rückresorptionskapazität überschritten!
  </div>
</div>
</div></div>`,"Ableitende Harnwege & Miktionsreflex":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(147,197,253,.9)">🫘 Niere · Lektion 3</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Ableitende Harnwege & Miktionsreflex</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Vom Nierenbecken zur Blase — und wie die Miktion gesteuert wird</div>
</div>

<div id="lsec-niere-harnw" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Ableitende Harnwege</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">🗺️ Weg des Urins</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-top:6px">
      ${[["Nierenbecken (Pelvis renalis)","Sammelsystem der Niere — nimmt Urin aus den Sammelrohren auf"],["Harnleiter (Ureter)","2 Harnleiter, je ~25–30 cm — peristaltische Bewegungen transportieren Urin zur Blase"],["Harnblase (Vesica urinaria)","Speicher: 400–600 ml. Wand: M. detrusor vesicae + Übergangsepithel"],["Innerer Sphinkter","Glatter Muskel — unwillkürlich (vegetatives NS). Sympathikus hält ihn geschlossen"],["Äußerer Sphinkter","Quergestreifter Muskel — willkürlich (N. pudendus). Ab 3. Lebensjahr bewusst kontrollierbar"],["Harnröhre (Urethra)","Frau: ~4 cm (kurz → höheres HWI-Risiko!). Mann: ~20 cm"]].map(([e,t])=>`<div style="display:flex;gap:10px;padding:8px 12px;background:rgba(96,165,250,.04);border-radius:9px;align-items:flex-start">
        <div style="width:6px;height:6px;border-radius:50%;background:#60a5fa;flex-shrink:0;margin-top:5px"></div>
        <div><span style="font-weight:700;font-size:.8rem;color:#60a5fa">${e}:</span> <span style="font-size:.78rem;color:var(--ink2)">${t}</span></div>
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-merkhilfe">💡 <div><strong>Merkhilfe HWI-Risiko:</strong> Frauen haben eine kurze Harnröhre (~4 cm) → Erreger gelangen leichter in die Blase → häufigere Harnwegsinfekte! Wichtig für Prophylaxe und Anamnese.</div></div>
</div>

<div id="lsec-niere-mikt" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Miktionsreflex — bis und ab dem 3. Lebensjahr</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#f87171">👶 Bis zum 3. Lebensjahr — Reflektorisch</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-top:6px">
      ${[["1","Füllungsreiz ab ~150–300 ml","Innendruck der Blase steigt"],["2","Dehnungsrezeptoren aktiviert","In der Blasenwand → Signal ans Rückenmark (S2–S4)"],["3","Parasympathikus aktiv","M. detrusor kontrahiert, innerer Sphinkter erschlafft"],["4","Motorische Nerven","Äußerer Sphinkter erschlafft → Miktion findet statt"],["5","Keine Gehirnkontrolle","Rein reflexartig → Windeln notwendig!"]].map(([e,t,r])=>`<div style="display:flex;gap:10px;padding:8px 12px;background:rgba(248,113,113,.04);border-radius:9px;align-items:flex-start">
        <div style="width:20px;height:20px;border-radius:6px;background:rgba(248,113,113,.2);color:#f87171;font-weight:800;font-size:.75rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">${e}</div>
        <div><span style="font-weight:700;font-size:.78rem;color:#f87171">${t}: </span><span style="font-size:.75rem;color:var(--ink2)">${r}</span></div>
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#4ade80">🧠 Ab dem 3. Lebensjahr — Mit Gehirnkontrolle</div>
    <p style="font-size:.82rem;color:var(--ink2);line-height:1.6;margin-top:6px">Das <strong>Miktionszentrum im Gehirn</strong> (Großhirn + Hirnstamm) übernimmt ab dem 3. Lebensjahr die Kontrolle:</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
      <div style="padding:10px 12px;background:rgba(74,222,128,.06);border-radius:10px;border:1px solid rgba(74,222,128,.2)">
        <div style="font-weight:700;font-size:.78rem;color:#4ade80;margin-bottom:4px">🛑 Blasenfüllungszentrum</div>
        <div style="font-size:.72rem;color:var(--ink2);line-height:1.5">Hemmt Parasympathikus im Rückenmark → kein Detrusor-Zug → Sphinkter bleibt gespannt → <strong>Kontinenz</strong></div>
      </div>
      <div style="padding:10px 12px;background:rgba(96,165,250,.06);border-radius:10px;border:1px solid rgba(96,165,250,.2)">
        <div style="font-weight:700;font-size:.78rem;color:#60a5fa;margin-bottom:4px">✅ Blasenentleerungszentrum</div>
        <div style="font-size:.72rem;color:var(--ink2);line-height:1.5">Aktiviert Parasympathikus → Detrusor spannt an → Sphinkter erschlafft → <strong>Miktion</strong></div>
      </div>
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Nerven des Reflexbogens beim Erwachsenen</div>
    (1) Miktionszentrum Großhirn → (2) Hirnstamm → (3) Rückenmark → (4) Sakrales Reflexzentrum (S2–S4) → (5) N. hypogastricus (Sympathikus L1–L3) → (6) N. pelvicus (Parasympathikus S2–S4) → (7) N. pudendus (äußerer Sphinkter) → (8) Blase
  </div>
</div>
</div></div>`,"Harninkontinenz — Definition & Formen":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(147,197,253,.9)">🫘 Niere · Lektion 4</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Harninkontinenz — Definition & Epidemiologie</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Was ist Inkontinenz, wie häufig ist sie — und was bedeutet sie für Betroffene?</div>
</div>

<div id="lsec-niere-indef" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Definition & Kontinenz</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#60a5fa">📖 Definitionen</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:6px">
      <div style="padding:12px 14px;background:rgba(74,222,128,.06);border-radius:11px;border-left:3px solid #4ade80">
        <div style="font-weight:700;font-size:.82rem;color:#4ade80;margin-bottom:4px">Kontinenz</div>
        <div style="font-size:.78rem;color:var(--ink2)">Fähigkeit zur <strong>willkürlichen Blasenentleerung</strong> zu passender Zeit an einem passenden Ort</div>
      </div>
      <div style="padding:12px 14px;background:rgba(248,113,113,.06);border-radius:11px;border-left:3px solid #f87171">
        <div style="font-weight:700;font-size:.82rem;color:#f87171;margin-bottom:4px">Harninkontinenz (Norton 1999)</div>
        <div style="font-size:.78rem;color:var(--ink2)">Unfreiwilliges Ausscheiden oder Abgehen von Urin an unpassenden Orten oder Zeiten, <strong>mindestens 2x pro Monat</strong>, unabhängig von der Urinmenge</div>
      </div>
      <div style="padding:12px 14px;background:rgba(96,165,250,.06);border-radius:11px;border-left:3px solid #60a5fa">
        <div style="font-weight:700;font-size:.82rem;color:#60a5fa;margin-bottom:4px">ICS-Definition</div>
        <div style="font-size:.78rem;color:var(--ink2)">Symptom des unfreiwilligen Urinverlusts jeglichen Ausmaßes</div>
      </div>
    </div>
  </div>
  <div class="lekt-merkhilfe">💡 <div><strong>Wichtig für die Klausur:</strong> Harninkontinenz ist <strong>KEINE eigenständige Erkrankung, sondern ein Symptom!</strong> Es liegt immer eine Grundursache vor.</div></div>
</div>

<div id="lsec-niere-epi" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Häufigkeit & psychosoziale Folgen</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">📊 Prävalenz in Deutschland</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:8px">
      ${[["18–40 J.",`♂ 4/100
♀ 8/100`,"#60a5fa"],["41–60 J.",`♂ 7/100
♀ 11/100`,"#fbbf24"],["> 60 J.",`♂ 18/100
♀ 27/100`,"#f87171"]].map(([e,t,r])=>`<div style="text-align:center;padding:12px 8px;background:${r}11;border:1px solid ${r}33;border-radius:12px">
        <div style="font-size:.75rem;color:var(--ink2);margin-bottom:6px">${e}</div>
        <div style="font-size:.85rem;font-weight:700;color:${r};white-space:pre-line;line-height:1.6">${t}</div>
      </div>`).join("")}
    </div>
    <div style="margin-top:10px;font-size:.74rem;color:var(--ink3)">Gesamtprävalenz: Frauen 4,5–53%, Männer 1,6–24%. Tatsächliche Zahl höher wegen Scham und Tabuisierung.</div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#f87171">😔 Psychosoziale Folgen (Fallbeispiel)</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px">
      ${["Sozialer Rückzug (kein Theater, keine Freunde)","Ständige Angst vor unkontrolliertem Verlust","Planung aller Wege nach Toilettennähe","Mehrmals täglich Wäsche wechseln","Vermeidung von Sport und Aktivitäten","Vermindertes Selbstwertgefühl + Scham"].map(e=>`<div style="font-size:.72rem;color:var(--ink2);padding:6px 10px;background:rgba(248,113,113,.04);border-radius:8px;border:1px solid rgba(248,113,113,.1)">• ${e}</div>`).join("")}
    </div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#4ade80">📋 7 Formen der Harninkontinenz</div>
    <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
      ${["Belastungsinkontinenz (Stressinkontinenz)","Dranginkontinenz (Überaktive Blase)","Mischharninkontinenz (Belastung + Drang)","Reflexinkontinenz (neurogen)","Chronische Harnretention (früher: Überlaufinkontinenz)","Funktionelle Inkontinenz","Enuresis nocturna (Bettnässen bei Kindern)"].map((e,t)=>`<div style="display:flex;gap:8px;align-items:center;font-size:.78rem;color:var(--ink2);padding:5px 10px;background:rgba(74,222,128,.03);border-radius:8px">
        <span style="color:#4ade80;font-weight:700;font-size:.7rem">${t+1}.</span>${e}
      </div>`).join("")}
    </div>
  </div>
</div>
</div></div>`,"Inkontinenzformen im Detail":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(147,197,253,.9)">🫘 Niere · Lektion 5</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Inkontinenzformen im Detail</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Ursachen, Symptome und Therapie der wichtigsten Inkontinenzformen</div>
</div>

<div id="lsec-niere-belas" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Belastungsinkontinenz (Stressinkontinenz)</div></div>
  <p class="lekt-prose">Unfreiwilliger Harnabgang bei <strong>körperlicher Belastung</strong> — OHNE Harndrang. Ursache: unzureichender Harnröhrenverschlussdruck bei erhöhtem Bauchdruck.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">📊 3 Schweregrade</div>
    <div style="display:flex;flex-direction:column;gap:6px;margin-top:6px">
      ${[["Grad I","Harnverlust bei Husten, Niesen oder Lachen","#4ade80"],["Grad II","Harnverlust bei Heben, Treppensteigen oder Aufstehen","#fbbf24"],["Grad III","Harnverlust im Liegen — auch ohne Belastung","#f87171"]].map(([e,t,r])=>`<div style="display:flex;gap:10px;padding:8px 12px;background:${r}0d;border-radius:9px;border-left:3px solid ${r}">
        <div style="font-weight:800;font-size:.78rem;color:${r};min-width:52px">${e}</div>
        <div style="font-size:.78rem;color:var(--ink2)">${t}</div>
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#60a5fa">⚕️ Ursachen & Therapie</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px;font-size:.75rem">
      <div style="background:rgba(255,255,255,.03);border-radius:10px;padding:10px">
        <div style="font-weight:700;color:#60a5fa;margin-bottom:6px">Ursachen</div>
        <div style="color:var(--ink2);line-height:1.7">• Frauen: Schwäche der Beckenbodenmuskulatur (nach Geburten)<br/>• Männer: Prostata-OP (Verletzung des Verschlussmuskels)</div>
      </div>
      <div style="background:rgba(255,255,255,.03);border-radius:10px;padding:10px">
        <div style="font-weight:700;color:#4ade80;margin-bottom:6px">Therapie</div>
        <div style="color:var(--ink2);line-height:1.7">• Konservativ: Beckenbodentraining, Pessartherapie, Biofeedback<br/>• Operativ: bei Grad III — Blasensenkung/Organvorfall</div>
      </div>
    </div>
  </div>
</div>

<div id="lsec-niere-drang" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Dranginkontinenz & weitere Formen</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fb923c">🔥 Dranginkontinenz</div>
    <p style="font-size:.82rem;color:var(--ink2);line-height:1.6;margin-top:6px"><strong>Überaktivität der Blasenmuskulatur</strong> — der Detrusor kontrahiert unkontrolliert. Reizblase = leichte Form (Harndrang noch unterdrückbar).</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;font-size:.74rem">
      <div style="background:rgba(251,146,60,.06);border-radius:10px;padding:10px">
        <div style="font-weight:700;color:#fb923c;margin-bottom:4px">Ursachen</div>
        <div style="color:var(--ink2);line-height:1.7">• Neurologisch: Schlaganfall, Parkinson, Diabetes<br/>• Blasensteine, Tumore<br/>• Blasenentzündung<br/>• Psychische Ursachen</div>
      </div>
      <div style="background:rgba(251,146,60,.06);border-radius:10px;padding:10px">
        <div style="font-weight:700;color:#4ade80;margin-bottom:4px">Therapie</div>
        <div style="color:var(--ink2);line-height:1.7">• Blasentraining (Miktionsintervall verlängern)<br/>• Medikamente (Anticholinergika)<br/>• Elektrostimulation</div>
      </div>
    </div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#c084fc">📋 Weitere Formen im Überblick</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
      ${[["Reflexinkontinenz","Nervenschaden (Rückenmark, MS) → keine Blasenwahrnehmung, kein willentlicher Harnverlust möglich. Therapie: Intermittierender Selbstkatheterismus (ISK)","#c084fc"],["Chronische Harnretention","Blasenüberdehnung durch Restharn bei Abflussbehinderung (Prostata, Blasenstein). Symptome: Startschwierigkeiten, schwacher Strahl, Nachträufeln. Therapie: OP oder Katheter","#60a5fa"],["Funktionelle Inkontinenz","Urogenitaltrakt intakt! Ursache: Demenz, Immobilität, Depressionen → Gang zur Toilette nicht möglich. Therapie: Toilettentraining, Hilfsmittel","#4ade80"]].map(([e,t,r])=>`<div style="padding:10px 12px;background:${r}0a;border-radius:10px;border-left:3px solid ${r}">
        <div style="font-weight:700;font-size:.8rem;color:${r};margin-bottom:3px">${e}</div>
        <div style="font-size:.73rem;color:var(--ink2);line-height:1.5">${t}</div>
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 KLAUSURFALLE: Welche Therapie bei welcher Form?</div>
    <strong>Belastung Grad I+II:</strong> Beckenbodentraining | <strong>Drang:</strong> Blasentraining + Medikamente | <strong>Reflex:</strong> ISK | <strong>Retention:</strong> OP / Katheter | <strong>Funktionell:</strong> Toilettentraining + Umgebungsanpassung
  </div>
</div>
</div></div>`,"Expertenstandard & Pflege bei Inkontinenz":()=>`
<div class="lekt-layout"><div>
<div style="background:linear-gradient(135deg,#1e3a5f,#1d4ed8,#0d1117);border-radius:16px;padding:32px 28px;margin-bottom:24px">
  <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(96,165,250,.2);border:1px solid rgba(96,165,250,.3);border-radius:20px;padding:4px 12px;font-size:.68rem;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:rgba(147,197,253,.9)">🫘 Niere · Lektion 6</div>
  <div style="font-family:'Fraunces',serif;font-size:clamp(1.4rem,3vw,2rem);color:white;margin:12px 0 8px">Expertenstandard & Pflege bei Inkontinenz</div>
  <div style="font-size:.85rem;color:rgba(255,255,255,.55)">Nationaler Expertenstandard — Assessment, Kontinenzprofil und Pflegemaßnahmen</div>
</div>

<div id="lsec-niere-exp" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">01</div><div class="lekt-title">Expertenstandard — 6 Schritte</div></div>
  <p class="lekt-prose">Der <strong>Nationale Expertenstandard „Förderung der Harnkontinenz" (DNQP)</strong> geht davon aus, dass bei jedem Pflegebedürftigen die Harnkontinenz erhalten oder gefördert werden kann. Eine identifizierte Inkontinenz wird beseitigt, reduziert oder kompensiert.</p>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#4ade80">🏛️ 6 Schritte des Expertenstandards</div>
    <div style="display:flex;flex-direction:column;gap:7px;margin-top:6px">
      ${[["1","Identifikation","Harninkontinenz und ihre Form erkennen (Anamnese, Assessment-Tools, Miktionsprotokoll)","#60a5fa"],["2","Einschätzung","Differenzierte Einschätzung + Erstellung eines Kontinenzprofils","#4ade80"],["3","Beratung","Maßnahmen zur Förderung der Harnkontinenz — angepasst an die Inkontinenzform","#fbbf24"],["4","Planung","Kontinenzfördernde Maßnahmen und Ziele planen","#fb923c"],["5","Durchführung","Koordination und Umsetzung der geplanten Maßnahmen","#f87171"],["6","Evaluation","Beurteilung anhand des angestrebten Kontinenzprofils — Ziele erreicht?","#c084fc"]].map(([e,t,r,n])=>`<div style="display:flex;align-items:flex-start;gap:10px;padding:9px 12px;background:${n}0a;border-radius:10px;border-left:3px solid ${n}">
        <div style="width:24px;height:24px;border-radius:7px;background:${n}22;color:${n};font-weight:800;font-size:.75rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">${e}</div>
        <div><div style="font-weight:700;font-size:.78rem;color:${n};margin-bottom:2px">${t}</div><div style="font-size:.72rem;color:var(--ink2)">${r}</div></div>
      </div>`).join("")}
    </div>
  </div>
</div>

<div id="lsec-niere-assess" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">02</div><div class="lekt-title">Assessment & Anamnese</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#fbbf24">❓ Screening-Fragen (Expertenstandard)</div>
    <div style="display:flex;flex-direction:column;gap:5px;margin-top:6px">
      ${["Verlieren Sie ungewollt Harn?","Verlieren Sie Harn beim Husten, Lachen oder Heben?","Verlieren Sie Harn auf dem Weg zur Toilette?","Verspüren Sie häufig starken, nicht unterdrückbaren Harndrang?","Tragen Sie Einlagen/Vorlagen, um Harn aufzufangen?","Müssen Sie pressen, um die Blase zu entleeren?"].map(e=>`<div style="display:flex;gap:8px;font-size:.78rem;color:var(--ink2);padding:6px 10px;background:rgba(251,191,36,.04);border-radius:8px;border:1px solid rgba(251,191,36,.1)">
        <span style="color:#fbbf24">❓</span>${e}
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-card" style="margin-top:0">
    <div class="lekt-card-label" style="color:#60a5fa">📋 Assessment-Inhalte</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px">
      ${["Mobilität (Sturzgefahr?)","Orientiertheit (PE orientiert?)","Verständigungsmöglichkeit","Grad der Selbstpflege","Akzeptanz der Inkontinenz","Bereitschaft zur Therapie","Trinkverhalten/-gewohnheiten","Aktuelle Medikation","Psychosoziale Auswirkungen","Miktionsprotokoll (3–7 Tage)"].map(e=>`<div style="font-size:.72rem;color:var(--ink2);padding:5px 9px;background:rgba(96,165,250,.04);border-radius:8px;border:1px solid rgba(96,165,250,.1)">• ${e}</div>`).join("")}
    </div>
  </div>
</div>

<div id="lsec-niere-mass" class="lekt-sec">
  <div class="lekt-sec-label"><div class="lekt-num">03</div><div class="lekt-title">Pflegemaßnahmen im Überblick</div></div>
  <div class="lekt-card">
    <div class="lekt-card-label" style="color:#c084fc">⚕️ 3 Therapiebereiche</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:8px">
      ${[["Medizinisch","Medikamente, operative Therapie","#f87171"],["Pflegemanagement","Verhaltenstherapie, Toilettentraining, Hilfsmittel, Schulung","#60a5fa"],["Physikalisch","Beckenbodentraining, Biofeedback, Elektrostimulation","#4ade80"]].map(([e,t,r])=>`<div style="padding:10px;background:${r}0a;border-radius:10px;border-top:2px solid ${r}">
        <div style="font-weight:700;font-size:.78rem;color:${r};margin-bottom:5px">${e}</div>
        <div style="font-size:.7rem;color:var(--ink2);line-height:1.5">${t}</div>
      </div>`).join("")}
    </div>
  </div>
  <div class="lekt-merkhilfe">💡 <div><strong>Inkontinenzfragebogen nach Gaudenz:</strong> Standardisiertes Instrument zur Differenzierung von Belastungs- und Dranginkontinenz anhand von Symptomen und Situationen.</div></div>
  <div class="lekt-klausur">
    <div class="lekt-klausur-lbl">📋 Klausur-FALLE: Kontinenzprofil</div>
    Das <strong>Kontinenzprofil</strong> ist das <em>Pflegeziel</em> — es beschreibt die angestrebte Kontinenzsituation. Das <strong>Miktionsprotokoll</strong> ist das <em>Assessmentinstrument</em> — es dokumentiert Trinkmenge, Miktionsfrequenz und Inkontinenzepisoden. Nicht verwechseln!
  </div>
</div>

<button class="lekt-quiz-btn" style="background:linear-gradient(135deg,#1d4ed8,#2563eb)" onclick="startQuizForTheme(currentThemeObj)">🗂 Quiz zu Niere & Inkontinenz starten →</button>
</div></div>`}},Ff=[{term:"Nephron",def:"Funktionelle Grundeinheit der Niere — besteht aus Nierenkörperchen (Glomerulus + Bowman-Kapsel) und Nierenkanälchen (Tubuli). 1–1,5 Mio. pro Niere"},{term:"Glomerulus",def:"Kapillarknäuel im Nierenkörperchen — filtert den Primärharn (~180 L/Tag) aus dem Blut (Ultrafiltration)"},{term:"Primärharn",def:"Ultrafiltrat des Blutes im Glomerulus (~180 L/Tag). Enthält Wasser, Elektrolyte, Glukose, Aminosäuren — noch kein Endharn"},{term:"Sekundärharn",def:"Endharn nach Rückresorption im Tubulus (~1,5–2 L/Tag). 99% des Primärharns werden rückresorbiert"},{term:"Henle-Schleife",def:"Teil des Nierenkanälchens im Nierenmark — wichtig für Wasserrückresorption und Harnkonzentrierung"},{term:"Erythropoetin",def:"Hormon der Nieren — stimuliert die Bildung roter Blutkörperchen im Knochenmark. Mangel bei Nierenversagen → renale Anämie"},{term:"Renin",def:"Hormon der Nieren bei Blutdruckabfall → aktiviert Angiotensin-Kaskade → Blutdrucksteigerung (Renin-Angiotensin-System)"},{term:"M. detrusor vesicae",def:"Blasenwandmuskel — Kontraktion durch Parasympathikus (S2–S4) → Miktion. Entspannung durch Sympathikus → Blasenfüllung"},{term:"Miktionsreflex",def:"Reflex zur Blasenentleerung: Dehnungsrezeptoren → Rückenmark → Parasympathikus → Detrusor kontrahiert, Sphinkter erschlafft"},{term:"Miktionszentrum",def:"Übergeordnetes Zentrum im Gehirn (Großhirn + Hirnstamm): steuert ab 3. Lebensjahr bewusst Kontinenz und Miktion"},{term:"Kontinenz",def:"Fähigkeit zur willkürlichen Blasenentleerung zu passender Zeit und am passenden Ort — Gegenteil von Inkontinenz"},{term:"Harninkontinenz",def:"Unfreiwilliger Harnverlust jeglichen Ausmaßes (ICS). Kein Krankheitsbild, sondern ein Symptom — 2x/Monat oder öfter (Norton 1999)"},{term:"Belastungsinkontinenz",def:"Harnabgang bei körperlicher Belastung (Husten/Niesen = Grad I, Heben = Grad II, Liegen = Grad III) ohne Harndrang"},{term:"Dranginkontinenz",def:"Überaktivität des Detrusors → unkontrollierte Blasenentleerung trotz intaktem Schließmechanismus. Ursachen: neurologisch, Infektion, psychisch"},{term:"Reflexinkontinenz",def:"Neurogene Inkontinenz durch Nervenstörung (Rückenmarkschädigung, MS) — kein willentlicher Harnverlust möglich, Blase nicht wahrnehmbar"},{term:"Funktionelle Inkontinenz",def:"Urogenitaltrakt intakt, aber Demenz/Immobilität/Depression verhindern rechtzeitigen Toilettengang"},{term:"Harnretention",def:"Unvollständige Blasenentleerung mit Restharnbildung. Chronisch: Blasenüberdehnung, Abflussbehinderung (Prostata, Blasenstein)"},{term:"Miktionsprotokoll",def:"Dokumentation von Trinkmenge, Miktionsfrequenz, -menge und Inkontinenzepisoden — wichtigstes Assessmentinstrument"},{term:"Kontinenzprofil",def:"Pflegediagnostisches Ziel im Expertenstandard: beschreibt angestrebte Kontinenzsituation des Pflegebedürftigen"},{term:"Beckenbodentraining",def:"Gezielte Kräftigung der Beckenbodenmuskulatur → Unterstützung des äußeren Schließmuskels → Indikation: Belastungsinkontinenz"},{term:"Dekubitus",def:"Lokal begrenzte Schädigung der Haut/des Gewebes über knöchernen Vorsprüngen infolge von Druck oder Druck + Scherkräften (NPUAP/EPUAP)"},{term:"Ischämie",def:"Mangeldurchblutung eines Gewebes durch Druckkompression der Blutgefäße → Hypoxie → Zelluntergang"},{term:"Scherkräfte",def:"Entgegengesetzt zueinander wirkende Kräfte innerhalb eines Gewebes — führen zu Gefäßabknickung und Gewebsdeformation"},{term:"EPUAP",def:"European Pressure Ulcer Advisory Panel — erstellt die internationale Klassifikation von Dekubitus in 4 Kategorien"},{term:"NPUAP",def:"National Pressure Ulcer Advisory Panel — US-amerikanische Organisation, gemeinsam mit EPUAP Urheber der Dekubitusklassifikation"},{term:"Prädilektionsstellen",def:"Bevorzugte Entstehungsorte von Dekubitus: Kreuzbein (#1), Fersen, Hüfte (Trochanter), Knöchel, Hinterkopf"},{term:"IAD",def:"Inkontinenz assoziierte Dermatitis — feuchtigkeitsbedingte Hautschädigung durch Urin/Stuhl, KEIN Dekubitus"},{term:"Intertrigo (ITD)",def:"Intertriginöse Dermatitis durch Schwitzen und Reibung in Hautfalten (Rima ani, inguinal)"},{term:"MASD",def:"Moisture-associated skin damage — Oberbegriff für feuchtigkeitsbedingte Hautschäden (IAD, ITD, Mazeration)"},{term:"Mazeration",def:"Aufweichung der Haut durch länger anhaltende Feuchtigkeit — erhöht Dekubitusrisiko erheblich"},{term:"Nekrose",def:"Gewebetod durch anhaltende Unterversorgung (Ischämie) oder direkte mechanische Schädigung"},{term:"Unterminierung",def:"Taschenartige Gewebezerstörung unter intakter Haut am Wundrand — Zeichen für tiefe Dekubitus"},{term:"NPWT",def:"Negative Pressure Wound Therapy (Unterdrucktherapie) — bei tiefen Dekubitusulzera, fördert Granulation"},{term:"Osteomyelitis",def:"Knochenmarkentzündung — schwere Komplikation bei Kategorie IV Dekubitus mit freiliegendem Knochen"},{term:"Expertenstandard",def:"Wissenschaftlich begründeter Standard des DNQP — Dekubitusprophylaxe 2017: 6 Handlungsebenen, verbindlich für Pflegepersonal"},{term:"DNQP",def:"Deutsches Netzwerk für Qualitätsentwicklung in der Pflege — erstellt evidenzbasierte Expertenstandards"},{term:"Braden-Skala",def:"Dekubitusrisikoskala mit 6 Faktoren (Aktivität, Mobilität, Ernährung, Feuchtigkeit, Reibung, Sensibilität). Niedrigerer Wert = höheres Risiko"},{term:"Hyperämisierende Salben",def:"ABC-Salbe, Finalgon — ZUR DEKUBITUSPROPHYLAXE OBSOLET! Verursachen Gewebsschäden statt zu schützen"},{term:"Bradykardie",def:"Herzfrequenz unter 60 Schläge pro Minute"},{term:"Hypertonie",def:"Bluthochdruck – systolischer Wert über 140 mmHg"},{term:"Hypotonie",def:"Niedriger Blutdruck – systolischer Wert unter 90 mmHg"},{term:"Dyspnoe",def:"Atemnot / erschwertes Atmen"},{term:"Apnoe",def:"Atemstillstand"},{term:"Tachypnoe",def:"Beschleunigte Atmung (über 20 Atemzüge/min)"},{term:"Bradypnoe",def:"Verlangsamte Atmung (unter 12 Atemzüge/min)"},{term:"Zyanose",def:"Bläuliche Verfärbung der Haut durch Sauerstoffmangel"},{term:"Ödeme",def:"Ansammlung von Flüssigkeit im Gewebe"},{term:"Dekubitus",def:"Druckgeschwür durch anhaltenden Druck auf die Haut"},{term:"Dysphagie",def:"Schluckstörung / erschwertes Schlucken"},{term:"Exsikkose",def:"Austrocknung des Körpers (Dehydration)"},{term:"Hypoglykämie",def:"Unterzuckerung – Blutzucker unter 70 mg/dl"},{term:"Hyperglykämie",def:"Überzuckerung – erhöhter Blutzucker"},{term:"Anamnese",def:"Erhebung der Krankengeschichte eines Patienten"},{term:"Diagnose",def:"Feststellung einer Krankheit anhand von Symptomen"},{term:"Prognose",def:"Voraussage über den Krankheitsverlauf"},{term:"Prophylaxe",def:"Vorbeugung / Maßnahmen zur Krankheitsverhütung"},{term:"Rehabilitation",def:"Wiederherstellung der körperlichen/geistigen Funktionen"},{term:"MRSA",def:"Methicillin-resistenter Staphylococcus aureus – multiresistenter Erreger"},{term:"Nosokomial",def:"Im Krankenhaus entstanden / krankenhauserworbene Infektion"},{term:"Sublingual",def:"Unter die Zunge (Applikationsweg für Medikamente)"},{term:"Intravenös (i.v.)",def:"In die Vene hinein – direkter Weg ins Blut"},{term:"Subkutan (s.c.)",def:"Unter die Haut – ins Fettgewebe (z.B. Insulin)"},{term:"Hypoglykämie",def:"Unterzuckerung – Blutzucker unter 70 mg/dl → Zittern, Schwitzen, Verwirrtheit"},{term:"Hyperglykämie",def:"Überzuckerung – erhöhter Blutzucker über 126 mg/dl nüchtern"},{term:"Glukosurie",def:"Ausscheidung von Zucker im Urin – ab BZ über 180 mg/dl (Nierenschwelle)"},{term:"Polydipsie",def:"Vermehrter Durst – Folge von Glukosurie und Wasserverlust bei Diabetes"},{term:"Polyurie",def:"Vermehrtes Wasserlassen – häufiges Symptom bei Diabetes mellitus"},{term:"HbA1c",def:"Langzeitblutzucker der letzten 3–4 Monate in % – Normwert 4–6%"},{term:"BZTP",def:"Blutzuckertagesprofil – BZ nüchtern, vor und 2h nach den Mahlzeiten"},{term:"Insulin",def:"Hormon der B-Zellen – senkt den Blutzucker (B = Bremse)"},{term:"Glukagon",def:"Hormon der A-Zellen – erhöht den Blutzucker (A = Anstieg)"},{term:"Ketoazidose",def:"Lebensbedrohliche Übersäuerung bei Typ-1-Diabetes durch Ketonkörper"},{term:"Makroangiopathie",def:"Schädigung großer Blutgefäße bei Diabetes → Herzinfarkt, Schlaganfall, pAVK"},{term:"Mikroangiopathie",def:"Schädigung kleiner Gefäße (Kapillaren) → Retinopathie, Nephropathie"},{term:"Polyneuropathie",def:"Nervenschäden durch Diabetes → Kribbeln, Taubheit, Muskelschwäche"},{term:"Mal perforans",def:"Schmerzloses Ulkus an der Fußsohle beim neuropathischen diabetischen Fuß"},{term:"Metformin",def:"Erstlinien-Medikament bei Typ-2-Diabetes (Biguanid) – kein Insulin!"},{term:"Insulinresistenz",def:"Zellen reagieren schlechter auf Insulin → Pankreas erschöpft sich → Typ-2-Diabetes"},{term:"Cutis",def:"Lateinisch für Haut = Epidermis + Dermis (größtes und nervenreichstes Organ)"},{term:"Epidermis",def:"Oberhaut — keine Gefäße, erneuert sich alle 30 Tage, sitzt auf der Basalmembran"},{term:"Dermis",def:"Lederhaut — enthält Blutgefäße, Nerven, Haarfollikel, Talg- und Schweißdrüsen"},{term:"Subcutis",def:"Unterhaut und Fettgewebe — Wärmedämmung, Energiespeicher, Stoßdämpfer"},{term:"Melanin",def:"Farbstoff in der Basalzellschicht — schützt vor UV-Strahlung"},{term:"Melanozyten",def:"Melanin-produzierende Zellen in der Basalzellschicht der Epidermis"},{term:"Säureschutzmantel",def:"Hydro-Lipid-Film aus Talg (Talgdrüsen) + Schweiß (Schweißdrüsen) — schützt vor Keimen"},{term:"Residente Hautflora",def:"Dauerhaft auf der Haut vorhandene, nicht pathogene Mikroorganismen"},{term:"Transiente Hautflora",def:"Vorübergehend auf der Haut vorhandene, nicht pathogene Mikroorganismen"},{term:"Leistenhaut",def:"Haut an Handflächen und Fußsohlen — mit Leisten/Furchen, bis 9mm dick"},{term:"Felderhaut",def:"Haut am restlichen Körper — größter Teil, Gesäß 3mm, Gesicht <1mm"},{term:"Basalzellschicht",def:"Unterste Epidermisschicht — enthält Stammzellen und Melanozyten, auf Basalmembran"},{term:"Diffusion",def:"Passiver Transport von höherer zu niedrigerer Konzentration — versorgt die Epidermis"},{term:"Malignes Melanom",def:"Hautkrebs ausgehend von Melanozyten — sehr bösartig, metastasiert lymphogen + hämatogen"},{term:"Papillenschicht",def:"1. Schicht der Dermis — viele Blutgefäße, Druck kann diese komprimieren → Dekubitus!"},{term:"Geflechtschicht",def:"2. Schicht der Dermis — kollagenreiche elastische Fasern, Elastizität nimmt im Alter ab"},{term:"Glanzzellschicht",def:"Nur in Leistenhaut! Direkt unter Hornschicht, bricht UV-Licht stark (UV-Schutz)"},{term:"Stachelzellschicht",def:"Epidermisschicht mit stachelförmigen Zellen — verleiht der Haut besondere Festigkeit"},{term:"Körnerzellschicht",def:"Enthält Keratohyalinkörner (Eiweißkörper) — langsame Verhornung der Zellen"},{term:"Hornzellschicht",def:"Äußerste Epidermisschicht — abgestorbene kernlose Zellen, Dicke je nach Belastung"},{term:"Haarpapille",def:"Basis des Haares — Zellen teilen sich hier, Blutgefäße versorgen das Wachstum"},{term:"Haarfollikel",def:"Haarbalg — Einstülpung der Epidermis die das Haar umgibt, enthält Talgdrüse"},{term:"M. erector pili",def:"Haaraufrichtungsmuskel — kontrahiert bei Kälte/Angst → Gänsehaut"},{term:"Paronychie",def:"Entzündung von Nagelfalz und Nagelwall — durch Bakterien, bei Eiter → Panaritium"},{term:"Panaritium",def:"Schwere eitrige Entzündung am Finger/Nagel — Komplikation einer Paronychie"},{term:"Seborrhoische Haut",def:"Fettige Haut (50% der Bevölkerung) — grobporig, Pickel, Überproduktion der Talgdrüsen"},{term:"Sebostatische Haut",def:"Trockene Haut (30% der Bevölkerung) — spröde, rissig, schuppig, verminderte Talgproduktion"},{term:"Fitzpatrick-Skala",def:"Klassifikation der 6 Hauttypen nach UV-Empfindlichkeit — von keltisch (Typ 1) bis schwarz (Typ 6)"},{term:"Altershaut",def:"Kapillaren ↓, Epidermiserneuerung langsamer, Subcutis↓ → pergamentartig, trocken, Falten, Pigmentflecken"},{term:"Vater-Pacini-Körperchen",def:"Mechanorezeptor in der Subcutis — reagiert auf Vibration"},{term:"Meissner-Tastkörperchen",def:"Mechanorezeptor in der Dermis — reagiert auf Berührung/Tasten"},{term:"Merkel-Tastzellen",def:"Mechanorezeptor in der Oberhaut (Basalzellschicht) — reagiert auf Druck"},{term:"Dekubitus",def:"Lokal begrenzte Schädigung der Haut/Gewebe über knöchernen Vorsprüngen durch Druck oder Druck+Scherkräfte (NPUAP/EPUAP)"},{term:"Ischämie",def:"Minderdurchblutung → Nährstoffmangel (Hypoxie) + Anreicherung Stoffwechselprodukte → Zelluntergang"},{term:"Scherkräfte",def:"Entgegengesetzt zueinander wirkende Kräfte innerhalb eines Gewebes — wichtiger Entstehungsfaktor des Dekubitus"},{term:"EPUAP",def:"European Pressure Ulcer Advisory Panel — europäische Fachgesellschaft für Dekubituseinstufung (Kategorie I–IV)"},{term:"NPUAP",def:"National Pressure Ulcer Advisory Panel — amerikanische Fachgesellschaft, gemeinsam mit EPUAP für Klassifikation zuständig"},{term:"Prädilektionsstellen",def:"Bevorzugte Stellen der Dekubitusentstehung: Kreuzbein, Steißbein, Fersen, Trochanter, Schulterblätter"},{term:"IAD",def:"Inkontinenz-assoziierte Dermatitis — Hautschaden durch Kontakt mit Urin/Stuhl. Kein Dekubitus! (Ausschlussdiagnose)"},{term:"Intertrigo (ITD)",def:"Intertriginöse Dermatitis — Hautschaden in Körperfalten durch Schwitzen/Reibung. In der Rima ani, inguinal."},{term:"Dekubitus Kategorie I",def:"Nicht wegdrückbare Rötung bei intakter Haut über knöchernem Vorsprung — kann schmerzhaft, verhärtet, warm/kalt sein"},{term:"Dekubitus Kategorie II",def:"Teilzerstörung der Haut bis zur Dermis — flache Wunde oder Blase, ohne Beläge/Nekrose/Bluterguss"},{term:"Dekubitus Kategorie III",def:"Zerstörung aller Hautschichten, kein freiliegender Knochen/Muskel/Sehne — Tunnel möglich"},{term:"Dekubitus Kategorie IV",def:"Totaler Gewebsverlust mit freiliegendem Knochen, Sehnen oder Muskeln — Osteomyelitis möglich"},{term:"Expertenstandard DNQP",def:"Deutsches Netzwerk für Qualitätsentwicklung in der Pflege — 6 Handlungsebenen zur Dekubitusprophylaxe (2017)"},{term:"Braden-Skala",def:"Risikoskala zur Dekubituseinschätzung — CAVE: kein Beweis für Senkung der Inzidenz, nur unterstützend"},{term:"MASD",def:"Moisture-associated skin damage — Feuchtigkeitsbedingte Hautschäden (IAD, Intertrigo, Mazeration)"},{term:"NPWT",def:"Negative Pressure Wound Therapy — Unterdrucktherapie zur Wundheilung bei tiefen Dekubitus (z.B. CuraSul®)"}],Gf={krankenhaus:{label:"🏥 Akute Pflege (Krankenhaus)",expressions:[{de:"Haben Sie Schmerzen?",fr:"Avez-vous des douleurs ?"},{de:"Wo genau haben Sie Schmerzen?",fr:"Où exactement avez-vous mal ?"},{de:"Auf einer Skala von 0 bis 10 – wie stark sind die Schmerzen?",fr:"Sur une échelle de 0 à 10, comment évaluez-vous la douleur ?"},{de:"Ich helfe Ihnen beim Aufstehen.",fr:"Je vous aide à vous lever."},{de:"Haben Sie Allergien?",fr:"Avez-vous des allergies ?"},{de:"Haben Sie heute Morgen Ihre Medikamente genommen?",fr:"Avez-vous pris vos médicaments ce matin ?"},{de:"Ich werde jetzt Ihren Blutdruck messen.",fr:"Je vais maintenant mesurer votre tension artérielle."},{de:"Bitte atmen Sie tief ein und aus.",fr:"Veuillez respirer profondément."},{de:"Haben Sie sich übergeben?",fr:"Avez-vous vomi ?"},{de:"Wie fühlen Sie sich heute?",fr:"Comment vous sentez-vous aujourd'hui ?"}],material:[{icon:"💉",name:"Venenverweilkanüle",desc:"Zugang für i.v.-Therapie"},{icon:"🩺",name:"Stethoskop",desc:"Abhören von Herz und Lunge"},{icon:"⏱️",name:"Pulsoximeter",desc:"Messung O₂-Sättigung"},{icon:"🩹",name:"Verbandsmaterial",desc:"Wundversorgung"},{icon:"💊",name:"Medikamentenwagen",desc:"Sichere Medikamentengabe"},{icon:"📊",name:"EKG-Gerät",desc:"Herzstromkurve aufzeichnen"}]},altenheim:{label:"🏡 Langzeitpflege (Altenheim)",expressions:[{de:"Guten Morgen! Haben Sie gut geschlafen?",fr:"Bonjour ! Avez-vous bien dormi ?"},{de:"Darf ich Ihnen beim Waschen helfen?",fr:"Puis-je vous aider à vous laver ?"},{de:"Möchten Sie heute ein Bad oder eine Dusche?",fr:"Préférez-vous un bain ou une douche aujourd'hui ?"},{de:"Das Frühstück ist fertig. Haben Sie Hunger?",fr:"Le petit-déjeuner est prêt. Avez-vous faim ?"},{de:"Ich helfe Ihnen beim Anziehen.",fr:"Je vous aide à vous habiller."},{de:"Haben Sie heute Nacht geschlafen?",fr:"Avez-vous dormi cette nuit ?"},{de:"Brauchen Sie die Toilette?",fr:"Avez-vous besoin d'aller aux toilettes ?"},{de:"Wir gehen jetzt ein bisschen spazieren.",fr:"Nous allons faire une petite promenade."}],material:[{icon:"🛁",name:"Badewannenlift",desc:"Sicheres Baden"},{icon:"🚶",name:"Rollator",desc:"Gehhilfe / Mobilität"},{icon:"🛏️",name:"Pflegebett",desc:"Höhenverstellbar, mit Seitengitter"},{icon:"🧴",name:"Hautpflegeprodukte",desc:"Dekubitusprophylaxe"},{icon:"🩺",name:"Blutdruckgerät",desc:"Regelmäßige Kontrolle"},{icon:"🍽️",name:"Hilfsmittel Essen",desc:"Spezialbesteck, Teller"}]},psychiatrie:{label:"🧠 Psychiatrie",expressions:[{de:"Wie geht es Ihnen heute?",fr:"Comment allez-vous aujourd'hui ?"},{de:"Ich höre Ihnen zu.",fr:"Je vous écoute."},{de:"Sie sind hier in Sicherheit.",fr:"Vous êtes en sécurité ici."},{de:"Haben Sie heute geschlafen?",fr:"Avez-vous dormi aujourd'hui ?"},{de:"Möchten Sie über Ihre Gefühle sprechen?",fr:"Souhaitez-vous parler de vos sentiments ?"},{de:"Wir sind für Sie da.",fr:"Nous sommes là pour vous."},{de:"Haben Sie Ihre Medikamente genommen?",fr:"Avez-vous pris vos médicaments ?"},{de:"Was beschäftigt Sie gerade?",fr:"Qu'est-ce qui vous préoccupe en ce moment ?"}],material:[{icon:"🛏️",name:"Sicherheitsbett",desc:"Mit Seitenschutz"},{icon:"💊",name:"Medikamentendispenser",desc:"Sichere Ausgabe"},{icon:"📝",name:"Dokumentationsbogen",desc:"Verlaufsbeobachtung"},{icon:"🔒",name:"Sicherheitsschloss",desc:"Gesicherte Bereiche"},{icon:"🧘",name:"Therapiematerial",desc:"Für Gruppen-/Einzeltherapie"},{icon:"🚪",name:"Aufenthaltsraum",desc:"Strukturierter Tagesablauf"}]},kinderklinik:{label:"👶 Kinderklinik / Pädiatrie",expressions:[{de:"(an Kind) Wie heißt du?",fr:"(à l'enfant) Comment tu t'appelles ?"},{de:"(an Eltern) Wie lange hat Ihr Kind diese Symptome?",fr:"(aux parents) Depuis combien de temps votre enfant a-t-il ces symptômes ?"},{de:"Ich werde dir jetzt kurz ans Ohr schauen.",fr:"Je vais juste regarder ton oreille."},{de:"Das ist ein kleines Pflaster, das tut fast nicht weh.",fr:"C'est un petit pansement, ça ne fait presque pas mal."},{de:"Hat Ihr Kind Allergien?",fr:"Votre enfant a-t-il des allergies ?"},{de:"Wie ist der Appetit Ihres Kindes?",fr:"Comment est l'appétit de votre enfant ?"}],material:[{icon:"🧸",name:"Spielzeug / Ablenkung",desc:"Beruhigung beim Eingriff"},{icon:"💉",name:"Kinderkanüle",desc:"Kleiner Durchmesser"},{icon:"🌡️",name:"Ohrthermometer",desc:"Kindgerechte Messung"},{icon:"⚖️",name:"Kinderwaage",desc:"Gewichtskontrolle"},{icon:"🩺",name:"Kinderstethoskop",desc:"Kleinere Membrane"},{icon:"🍭",name:"Belohnungssystem",desc:"Motivation und Kooperation"}]}};function $f({screen:e,currentTheme:t,currentLesson:r,inLektionMode:n,onBack:i,onToggleTheme:l,theme:s,streak:a}){const o=e==="lektion"?r:e==="quiz"?"Quiz":e==="detail"&&(t==null?void 0:t.name)||"";return d.jsx("header",{className:"topbar",children:n?d.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[d.jsx("button",{onClick:i,style:{display:"flex",alignItems:"center",gap:6,background:"linear-gradient(135deg,#0d7377,#2dd4bf)",border:"none",color:"#fff",borderRadius:50,padding:"7px 16px 7px 12px",fontSize:".8rem",fontWeight:700,fontFamily:"DM Sans,sans-serif",cursor:"pointer",whiteSpace:"nowrap",flexShrink:0,boxShadow:"0 2px 10px rgba(0,0,0,0.2)",transition:"all .2s"},children:"← Zurück"}),d.jsx("div",{style:{fontFamily:"DM Sans,sans-serif",fontSize:".85rem",fontWeight:700,color:"var(--ink)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:1,textAlign:"center"},children:o}),d.jsxs("div",{className:"streak-badge",style:{fontSize:".72rem",flexShrink:0},children:["🔥 ",a]})]}):d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[d.jsxs("div",{className:"t-title",children:[d.jsx("div",{className:"t-logo",children:"🏥"}),"Pflege",d.jsx("span",{children:"Pro"})]}),d.jsxs("div",{className:"t-right",children:[d.jsx("span",{className:"theme-mode-label",children:s==="dark"?"🌙 Dunkel":"☀️ Hell"}),d.jsx("button",{className:"theme-toggle",onClick:l,children:d.jsx("div",{className:"theme-toggle-knob",children:s==="dark"?"🌙":"☀️"})}),d.jsxs("div",{className:"streak-badge",children:["🔥 ",d.jsx("span",{children:a})," Tage"]})]})]})})}const Wf=[{id:"home",icon:"🏠",label:"Home"},{id:"pruefung",icon:"🎯",label:"Quiz"},{id:"fachbegriffe",icon:"🔤",label:"Begriffe"},{id:"praxis",icon:"🏨",label:"Praxis"},{id:"heute",icon:"📅",label:"Heute"}];function Uf({screen:e,onNav:t}){const r=["lektion","detail","quiz"].includes(e)?null:e;return d.jsx("nav",{className:"sidebar",children:Wf.map(n=>d.jsxs("button",{className:`s-btn${r===n.id?" active":""}`,onClick:()=>t(n.id),children:[d.jsx("span",{style:{fontSize:"1.4rem"},children:n.icon}),d.jsx("span",{className:"s-label",children:n.label})]},n.id))})}function Of({name:e}){const t=new Date().getHours(),r=t<6?"🌙 Gute Nacht":t<12?"🌅 Guten Morgen":t<17?"☀️ Guten Tag":t<21?"🌆 Guten Abend":"🌙 Gute Nacht",n=["🩺 Jede Frage bringt dich deinem Examen näher.","💙 Die Pflege braucht dich — lern weiter!","📚 Wissen schützt Patienten — dein Wissen zählt.","⭐ Du investierst heute in deine Zukunft!","🌱 Schritt für Schritt zum Pflegeprofi."],i=n[Math.floor(Date.now()/864e5)%n.length];return d.jsxs("div",{style:{marginBottom:18,padding:"20px 22px",background:"linear-gradient(135deg,rgba(45,212,191,.12),rgba(45,212,191,.04))",border:"1.5px solid rgba(45,212,191,.25)",borderRadius:20,position:"relative",overflow:"hidden",display:"flex",alignItems:"center",gap:18},children:[d.jsx("div",{style:{position:"absolute",top:-20,right:80,width:120,height:120,borderRadius:"50%",background:"radial-gradient(circle,rgba(45,212,191,.08),transparent)",animation:"floatCell 6s ease-in-out infinite",pointerEvents:"none"}}),d.jsx("div",{style:{position:"absolute",bottom:-30,right:20,width:90,height:90,borderRadius:"50%",background:"radial-gradient(circle,rgba(251,191,36,.06),transparent)",animation:"floatCell 8s ease-in-out 2s infinite",pointerEvents:"none"}}),d.jsx("div",{style:{flexShrink:0,position:"relative",width:80,height:80},children:d.jsxs("svg",{viewBox:"0 0 80 80",xmlns:"http://www.w3.org/2000/svg",style:{width:80,height:80,filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.2))"},children:[d.jsx("style",{children:`
            #mb{animation:mascotBob 2.5s ease-in-out infinite}
            #me{animation:mascotBob 2.5s ease-in-out infinite}
            #mel,#mer{animation:mascotBlink 4s ease-in-out infinite}
            #mt{animation:mascotTail 2s ease-in-out infinite;transform-origin:15px 65px}
            #mc{animation:mascotPulse 2s ease-in-out infinite}
            @keyframes mascotBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
            @keyframes mascotBlink{0%,90%,100%{transform:scaleY(1)}95%{transform:scaleY(0.1)}}
            @keyframes mascotTail{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}
            @keyframes mascotPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.7;transform:scale(.9)}}
          `}),d.jsxs("g",{id:"mt",children:[d.jsx("path",{d:"M18 62 Q5 55 8 45 Q11 38 18 42 Q22 50 18 62Z",fill:"#e8834a"}),d.jsx("path",{d:"M10 46 Q7 40 13 39 Q17 44 14 50Z",fill:"white"})]}),d.jsxs("g",{id:"mb",children:[d.jsx("rect",{x:"22",y:"44",width:"36",height:"26",rx:"10",fill:"white",stroke:"#e0e8f0",strokeWidth:"1"}),d.jsxs("g",{id:"mc",children:[d.jsx("rect",{x:"37",y:"51",width:"6",height:"12",rx:"2",fill:"#ef4444"}),d.jsx("rect",{x:"34",y:"54",width:"12",height:"6",rx:"2",fill:"#ef4444"})]}),d.jsx("circle",{cx:"30",cy:"56",r:"1.5",fill:"#d0d8e8"}),d.jsx("circle",{cx:"30",cy:"62",r:"1.5",fill:"#d0d8e8"}),d.jsx("ellipse",{cx:"40",cy:"50",rx:"14",ry:"8",fill:"#e8834a"})]}),d.jsxs("g",{id:"me",children:[d.jsx("path",{d:"M24 28 L18 10 L30 22Z",fill:"#e8834a"}),d.jsx("path",{d:"M24 28 L20 14 L28 22Z",fill:"#f4a261"}),d.jsx("path",{d:"M56 28 L62 10 L50 22Z",fill:"#e8834a"}),d.jsx("path",{d:"M56 28 L60 14 L52 22Z",fill:"#f4a261"}),d.jsx("ellipse",{cx:"40",cy:"32",rx:"16",ry:"15",fill:"#e8834a"}),d.jsx("ellipse",{cx:"40",cy:"38",rx:"8",ry:"6",fill:"#f4a261"}),d.jsx("ellipse",{cx:"40",cy:"35",rx:"2.5",ry:"2",fill:"#c45e2a"}),d.jsx("path",{d:"M36 39 Q40 43 44 39",stroke:"#c45e2a",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),d.jsx("ellipse",{cx:"30",cy:"37",rx:"4",ry:"3",fill:"rgba(255,150,100,.3)"}),d.jsx("ellipse",{cx:"50",cy:"37",rx:"4",ry:"3",fill:"rgba(255,150,100,.3)"}),d.jsxs("g",{id:"mel",children:[d.jsx("ellipse",{cx:"34",cy:"30",rx:"3",ry:"3.5",fill:"white"}),d.jsx("circle",{cx:"34.5",cy:"30.5",r:"2",fill:"#2d3748"}),d.jsx("circle",{cx:"35.5",cy:"29.5",r:".7",fill:"white"})]}),d.jsxs("g",{id:"mer",children:[d.jsx("ellipse",{cx:"46",cy:"30",rx:"3",ry:"3.5",fill:"white"}),d.jsx("circle",{cx:"46.5",cy:"30.5",r:"2",fill:"#2d3748"}),d.jsx("circle",{cx:"47.5",cy:"29.5",r:".7",fill:"white"})]}),d.jsx("path",{d:"M30 44 Q26 52 30 56 Q34 58 36 54",stroke:"#718096",strokeWidth:"1.8",fill:"none",strokeLinecap:"round"}),d.jsx("circle",{cx:"36",cy:"54",r:"3",fill:"none",stroke:"#718096",strokeWidth:"1.5"})]})]})}),d.jsxs("div",{style:{flex:1,minWidth:0,position:"relative",zIndex:1},children:[d.jsxs("div",{style:{fontFamily:"'Fraunces',serif",fontSize:"1.2rem",color:"var(--ink)",marginBottom:5,lineHeight:1.3,fontWeight:600},children:[r,e?`, ${e}`:"","!"]}),d.jsx("div",{style:{fontSize:".8rem",color:"var(--ink2)",lineHeight:1.6},children:i})]})]})}function Vf(){const{progress:e,THEMES:t,QUIZZES:r,openDetail:n}=A.useContext(tt),i=e.levels||{},l=Object.values(i).flatMap(p=>p.levelScores||[]).filter(p=>p!==void 0),s=l.length>0?Math.round(l.reduce((p,k)=>p+k,0)/l.length*100):0,a=e.quizCount||0,o=e.streak||0,f=e.mastered||0;function v(p){const k=i[p];return!(k!=null&&k.levelScores)||k.levelScores.length===0?0:k.levelScores.filter(y=>y>=.7).length}function g(p){return Math.min(3,Math.ceil((r[p]||[]).length/3))}const m=[{cls:"stat-card-quiz",icon:"✅",iconBg:"rgba(45,212,191,.2)",color:"var(--teal)",value:a,label:"Quiz gemacht",barColor:"var(--teal)",barW:Math.min(a*10,100)},{cls:"stat-card-score",icon:"📊",iconBg:"rgba(251,191,36,.2)",color:"var(--amber)",value:`${s}%`,label:"Ø Score",barColor:"var(--amber)",barW:s},{cls:"stat-card-streak",icon:"🔥",iconBg:"rgba(248,113,113,.2)",color:"var(--rose)",value:o,label:"Streak 🔥",barColor:"var(--rose)",barW:Math.min(o*14,100)},{cls:"stat-card-master",icon:"🏆",iconBg:"rgba(74,222,128,.2)",color:"var(--green)",value:f,label:"Gemeistert",barColor:"var(--green)",barW:Math.min(f*33,100)}];return d.jsxs("div",{style:{maxWidth:"100%"},children:[d.jsx(Of,{name:e.userName}),d.jsx("div",{className:"stats-row",children:m.map((p,k)=>d.jsxs("div",{className:`stat-card ${p.cls}`,children:[d.jsxs("div",{className:"stat-top",children:[d.jsxs("div",{children:[d.jsx("div",{className:"stat-num",style:{color:p.color},children:p.value}),d.jsx("div",{className:"stat-lbl",children:p.label})]}),d.jsx("div",{className:"stat-icon",style:{background:p.iconBg},children:p.icon})]}),d.jsx("div",{className:"stat-mini-bar",children:d.jsx("div",{className:"stat-mini-fill",style:{width:`${p.barW}%`,background:p.barColor}})})]},k))}),d.jsx("div",{className:"sec-title",children:"📚 Lernthemen"}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:t.map(p=>{var u;const k=v(p.id),y=g(p.id),M=i[p.id],c=((u=M==null?void 0:M.levelScores)==null?void 0:u.length)>0?Math.round(Math.max(...M.levelScores.filter(h=>h!==void 0))*100):null;return d.jsxs("div",{className:"theme-card",onClick:()=>n(p),children:[d.jsx("div",{className:"t-icon",style:{background:`var(--${p.col}-dim)`},children:p.icon}),d.jsxs("div",{className:"t-info",children:[d.jsx("div",{className:"t-name",children:p.name}),d.jsxs("div",{className:"t-sub",children:[p.lessons.length," Lerneinheiten"]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginTop:6},children:[Array.from({length:y},(h,x)=>{const z=k>x,S=k===x;return d.jsx("div",{style:{width:20,height:20,borderRadius:5,background:z?"var(--green)":S?"var(--teal-dim)":"var(--bg3)",border:`1px solid ${z?"var(--green)":S?"var(--teal)":"var(--border)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:".58rem",fontWeight:700,color:z?"white":S?"var(--teal)":"var(--ink3)"},children:x+1},x)}),c!==null&&d.jsxs("span",{style:{fontSize:".68rem",color:"var(--ink3)",marginLeft:3},children:["Best: ",c,"%"]})]})]}),d.jsx("div",{className:"t-arrow",children:"›"})]},p.id)})})]})}function _f(){const{currentTheme:e,openLesson:t,nav:r,progress:n,QUIZZES:i,startQuiz:l}=A.useContext(tt);if(!e)return null;const s=e;function a(k){return n.levels?n.levels[k]||{currentLevel:0,levelScores:[],inProgress:null}:{currentLevel:0,levelScores:[],inProgress:null}}function o(k){return Math.min(3,Math.ceil((i[k]||[]).length/3))}function f(k,y){if(y===0)return!0;const M=a(k);return M.levelScores.length>=y&&M.levelScores[y-1]>=.7}function v(k){return["🟢","🟡","🔴"][k]||"⭐"}function g(k,y){const c=a(k).levelScores[y];return c!==void 0?Math.round(c*100):null}const m=!!i[s.id],p=m?o(s.id):0;return d.jsxs("div",{style:{maxWidth:"100%"},children:[d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:16,padding:"20px 22px",marginBottom:20,display:"flex",alignItems:"center",gap:14},children:[d.jsx("div",{style:{width:50,height:50,borderRadius:14,background:`var(--${s.col}-dim)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.6rem",flexShrink:0},children:s.icon}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.3rem",color:"var(--ink)"},children:s.name}),d.jsxs("div",{style:{fontSize:".8rem",color:"var(--ink2)",marginTop:3},children:[s.lessons.length," Lerneinheiten"]})]})]}),d.jsx("div",{style:{fontSize:".7rem",fontWeight:700,letterSpacing:".7px",textTransform:"uppercase",color:"var(--ink3)",marginBottom:12},children:"📖 Lerneinheiten"}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:28},children:s.lessons.map((k,y)=>d.jsxs("div",{onClick:()=>t(s.id,k),style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:12,padding:"14px 18px",display:"flex",alignItems:"center",gap:12,cursor:"pointer",transition:"all .2s"},onMouseEnter:M=>{M.currentTarget.style.borderColor="rgba(45,212,191,.25)",M.currentTarget.style.background="var(--teal-dim)"},onMouseLeave:M=>{M.currentTarget.style.borderColor="var(--border)",M.currentTarget.style.background="var(--card)"},children:[d.jsx("div",{style:{width:28,height:28,borderRadius:7,background:"var(--bg3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:".7rem",fontWeight:700,color:"var(--ink2)",flexShrink:0},children:y+1}),d.jsx("div",{style:{flex:1,fontWeight:500,fontSize:".85rem",color:"var(--ink)"},children:k}),d.jsx("span",{style:{fontSize:".67rem",fontWeight:700,padding:"2px 8px",borderRadius:6,background:"var(--teal-dim)",color:"var(--teal)"},children:"Bereit"})]},y))}),m&&d.jsxs(d.Fragment,{children:[d.jsx("div",{style:{fontSize:".7rem",fontWeight:700,letterSpacing:".7px",textTransform:"uppercase",color:"var(--ink3)",marginBottom:12},children:"🎯 Quiz — Niveaux"}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:Array.from({length:p},(k,y)=>{const M=f(s.id,y),c=g(s.id,y),u=c!==null&&c>=70,h=a(s.id),x=h.inProgress&&h.inProgress.level===y,z=["Niveau 1 – Basis","Niveau 2 – Fortgeschritten","Niveau 3 – Experte"];return d.jsxs("div",{onClick:()=>M&&l(s.id,y),style:{background:"var(--card)",border:`1px solid ${u?"rgba(74,222,128,.3)":"var(--border)"}`,borderRadius:14,padding:"16px 18px",display:"flex",alignItems:"center",gap:14,cursor:M?"pointer":"default",opacity:M?1:.5,transition:"all .2s"},onMouseEnter:S=>{M&&(S.currentTarget.style.borderColor="rgba(45,212,191,.3)")},onMouseLeave:S=>{S.currentTarget.style.borderColor=u?"rgba(74,222,128,.3)":"var(--border)"},children:[d.jsx("div",{style:{width:38,height:38,borderRadius:11,background:M?u?"var(--green-dim)":"var(--teal-dim)":"var(--bg3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",flexShrink:0},children:M?v(y):"🔒"}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{fontWeight:600,fontSize:".88rem",color:"var(--ink)",marginBottom:2},children:z[y]}),d.jsx("div",{style:{fontSize:".72rem",color:"var(--ink2)"},children:M?x?"▶ Fortgesetzt":c!==null?u?"✓ Bestanden":"Wiederholen":"Starten":"Niveau "+y+" bestehen um freizuschalten"})]}),c!==null?d.jsxs("div",{style:{width:48,height:48,borderRadius:"50%",border:`3px solid ${u?"var(--green)":"var(--teal)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Fraunces, serif",fontSize:".95rem",color:u?"var(--green)":"var(--teal)"},children:[c,"%"]}):M&&d.jsx("span",{style:{color:"var(--ink3)",fontSize:"1.2rem"},children:"›"})]},y)})})]})]})}function Zf(e){const t=e.querySelector('input[type="range"]');if(!t)return;function r(n){n=parseInt(n);const i=e.querySelector("#lbz-val"),l=e.querySelector("#lbus"),s=e.querySelector("#lbus-seats"),a=e.querySelector("#lbus-road"),o=e.querySelector("#lbus-info");i&&(i.textContent=n+" mg/dl");const f=20,v=Math.min(f,Math.round((n-50)/370*f)),g=n>180,m=g?Math.round((n-180)/240*8):0;s&&(s.innerHTML=Array.from({length:f},(p,k)=>k<v-m?'<span style="font-size:1.1rem">🩸</span>':k<v?'<span style="font-size:1.1rem;opacity:.3">🩸</span>':'<span style="font-size:1.1rem;opacity:.15">⬜</span>').join("")),a&&(a.style.background=g?"linear-gradient(90deg,#dc2626,#f87171)":"linear-gradient(90deg,#2dd4bf,#0f9688)"),l&&(l.style.transform=g?"rotate(-3deg) scale(1.1)":"none"),o&&(n<70?o.innerHTML='⚠️ <strong style="color:#f87171">Hypoglykämie!</strong> BZ zu niedrig — Niere reabsorbiert alles. <span style="color:var(--ink2)">Kein Zucker im Urin.</span>':n<=180?o.innerHTML='✅ <strong style="color:#4ade80">BZ = '+n+' mg/dl</strong> — Niere kann alles rückresorieren. <span style="color:#2dd4bf">Kein Zucker im Urin.</span>':o.innerHTML='🚨 <strong style="color:#f87171">Glukosurie!</strong> BZ > 180 — Niere überlastet, Zucker läuft über! <span style="color:#fbbf24">Zucker im Urin → Wasser folgt → Polydipsie!</span>')}t.removeAttribute("oninput"),t.addEventListener("input",n=>r(n.target.value)),r(t.value)}function qf(){const{currentTheme:e,currentLesson:t,startQuiz:r,LESSON_CONTENT:n,markLessonRead:i}=A.useContext(tt),l=A.useRef(null),s=A.useRef(null);if(A.useEffect(()=>{l.current&&(l.current.scrollTop=0)},[t]),A.useEffect(()=>{e&&t&&i(e.id,t)},[e==null?void 0:e.id,t]),A.useEffect(()=>{if(!s.current||!e)return;s.current.querySelectorAll("button, .lekt-quiz-btn").forEach(m=>{const p=m.textContent||"";(p.includes("Quiz")||p.includes("starten")||p.includes("Starten"))&&(m.removeAttribute("onclick"),m.addEventListener("click",k=>{k.preventDefault(),k.stopPropagation(),r(e.id,0,"lektion")}),m.style.cursor="pointer")}),s.current.querySelector("#lbus")&&Zf(s.current)},[e,t,r]),!e||!t)return null;const o=n[e.id],f=o&&o[t],v=f?f():null;return d.jsx("div",{ref:l,style:{maxWidth:"100%"},children:v?d.jsx("div",{ref:s,dangerouslySetInnerHTML:{__html:v},style:{width:"100%"}}):d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:16,padding:"40px 28px",textAlign:"center"},children:[d.jsx("div",{style:{fontSize:"2.5rem",marginBottom:16},children:"🚧"}),d.jsx("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.2rem",color:"var(--ink)",marginBottom:8},children:t}),d.jsx("div",{style:{fontSize:".85rem",color:"var(--ink2)"},children:"Dieser Inhalt wird bald verfügbar sein."})]})})}function Yf(e){const t=[...e];for(let r=t.length-1;r>0;r--){const n=Math.floor(Math.random()*(r+1));[t[r],t[n]]=[t[n],t[r]]}return t}function Jf(e){return e.map(t=>{const r=t.opts[t.correct],n=Yf(t.opts),i=n.indexOf(r);return{...t,opts:n,correct:i}})}function Xf(){const{currentTheme:e,quizState:t,nav:r,progress:n,saveProgress:i,startQuiz:l,QUIZZES:s}=A.useContext(tt),a=(t==null?void 0:t.questions)||[],o=(t==null?void 0:t.level)??0,f=t==null?void 0:t.themeId,v=A.useMemo(()=>Jf(a),[t]),[g,m]=A.useState(0),[p,k]=A.useState(null),[y,M]=A.useState(!1),[c,u]=A.useState([]),[h,x]=A.useState(!1),[z,S]=A.useState(0);if(!t||v.length===0)return d.jsxs("div",{style:{padding:30,color:"var(--ink)",textAlign:"center"},children:[d.jsx("div",{style:{fontSize:"2rem",marginBottom:12},children:"⚠️"}),"Keine Fragen verfügbar.",d.jsx("br",{}),d.jsx("br",{}),d.jsx("button",{onClick:()=>r("detail"),style:Rt,children:"← Zurück"})]});const b=v[g],D=v.length,L=["Niveau 1 – Basis","Niveau 2 – Fortgeschritten","Niveau 3 – Experte"],N=s[f]||[],V=Math.min(3,Math.ceil(N.length/3)),oe=o+1<V;function he(De){p===null&&(k(De),M(!0))}function Kt(){const De=p===b.correct,U=[...c,{correct:De}];if(u(U),g+1>=D){const E=U.filter(j=>j.correct).length/D;S(E),x(!0);const H={...n};H.levels||(H.levels={}),H.levels[f]||(H.levels[f]={levelScores:[]});const I=[...H.levels[f].levelScores||[]];I[o]=Math.max(I[o]||0,E),H.levels[f].levelScores=I,H.quizCount=(H.quizCount||0)+1,E>=.9&&o===2&&(H.mastered=(H.mastered||0)+1),i(H)}else m(g+1),k(null),M(!1)}if(h){const De=Math.round(z*100),U=De>=70,Qe=c.filter(E=>E.correct).length;return d.jsxs("div",{style:{maxWidth:"100%"},children:[d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:20,padding:"36px 28px",textAlign:"center",marginBottom:20},children:[d.jsx("div",{style:{fontSize:"3rem",marginBottom:12},children:De>=90?"🏆":De>=70?"✅":"📚"}),d.jsxs("div",{style:{fontFamily:"Fraunces, serif",fontSize:"2.2rem",color:U?"var(--green)":"var(--teal)",marginBottom:6},children:[De,"%"]}),d.jsx("div",{style:{fontWeight:600,fontSize:"1rem",color:"var(--ink)",marginBottom:4},children:U?"Bestanden! 🎉":"Nicht bestanden"}),d.jsxs("div",{style:{fontSize:".82rem",color:"var(--ink2)",marginBottom:24},children:[Qe," / ",D," richtige Antworten · ",L[o]]}),!U&&d.jsx("div",{style:{background:"var(--rose-dim)",border:"1px solid rgba(251,113,133,.2)",borderRadius:12,padding:"12px 16px",marginBottom:20,fontSize:".8rem",color:"var(--rose)"},children:"Mindestens 70% erforderlich um das nächste Niveau freizuschalten."}),d.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"},children:[d.jsx("button",{onClick:()=>r("detail"),style:{...Rt,background:"var(--bg3)",color:"var(--ink2)"},children:"← Thema"}),d.jsx("button",{onClick:()=>{m(0),k(null),M(!1),u([]),x(!1),S(0)},style:{...Rt,background:"var(--card)",color:"var(--ink)"},children:"🔄 Wiederholen"}),U&&oe&&d.jsxs("button",{onClick:()=>l(f,o+1),style:{...Rt,background:"var(--teal)",color:"white"},children:[L[o+1]," →"]})]})]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:v.map((E,H)=>{var I,j;return d.jsxs("div",{style:{background:"var(--card)",border:`1px solid ${(I=c[H])!=null&&I.correct?"rgba(74,222,128,.25)":"rgba(251,113,133,.25)"}`,borderRadius:10,padding:"10px 14px",display:"flex",alignItems:"flex-start",gap:10},children:[d.jsx("span",{style:{fontSize:"1rem",flexShrink:0},children:(j=c[H])!=null&&j.correct?"✅":"❌"}),d.jsx("span",{style:{fontSize:".78rem",color:"var(--ink)",lineHeight:1.4},children:E.q})]},H)})})]})}return d.jsxs("div",{style:{maxWidth:"100%"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:20},children:[d.jsx("button",{onClick:()=>r("detail"),style:{...Rt,padding:"6px 12px",background:"var(--bg3)",color:"var(--ink2)",fontSize:".75rem"},children:"✕"}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{height:6,background:"var(--bg3)",borderRadius:3,overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",borderRadius:3,background:"var(--teal)",width:`${g/D*100}%`,transition:"width .3s"}})}),d.jsxs("div",{style:{fontSize:".7rem",color:"var(--ink3)",marginTop:4,textAlign:"right"},children:[g+1," / ",D]})]})]}),b.lesson&&d.jsxs("div",{style:{fontSize:".68rem",fontWeight:700,letterSpacing:".5px",textTransform:"uppercase",color:"var(--teal)",marginBottom:10},children:["📖 ",b.lesson]}),d.jsx("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:16,padding:"22px 20px",marginBottom:16},children:d.jsx("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.05rem",color:"var(--ink)",lineHeight:1.5},children:b.q})}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:16},children:b.opts.map((De,U)=>{let Qe="var(--card)",E="var(--border)",H="var(--ink)";return p!==null&&(U===b.correct?(Qe="var(--green-dim)",E="rgba(74,222,128,.4)",H="var(--green)"):U===p?(Qe="var(--rose-dim)",E="rgba(251,113,133,.4)",H="var(--rose)"):H="var(--ink3)"),d.jsxs("div",{onClick:()=>he(U),style:{background:Qe,border:`1px solid ${E}`,borderRadius:12,padding:"14px 16px",cursor:p===null?"pointer":"default",display:"flex",alignItems:"center",gap:12,transition:"all .2s",color:H},children:[d.jsx("div",{style:{width:28,height:28,borderRadius:7,flexShrink:0,background:p===null?"var(--bg3)":U===b.correct?"rgba(74,222,128,.2)":U===p?"rgba(251,113,133,.2)":"var(--bg3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:".75rem",fontWeight:700},children:p!==null?U===b.correct?"✓":U===p?"✗":["A","B","C","D"][U]:["A","B","C","D"][U]}),d.jsx("span",{style:{fontSize:".85rem",fontWeight:500,lineHeight:1.4},children:De})]},U)})}),y&&b.explanation&&d.jsxs("div",{style:{background:p===b.correct?"var(--green-dim)":"var(--rose-dim)",border:`1px solid ${p===b.correct?"rgba(74,222,128,.25)":"rgba(251,113,133,.25)"}`,borderRadius:12,padding:"14px 16px",marginBottom:16,fontSize:".82rem",color:"var(--ink)",lineHeight:1.5},children:[d.jsx("span",{style:{fontWeight:700,marginRight:6},children:p===b.correct?"✅ Richtig!":"❌ Falsch!"}),b.explanation]}),y&&d.jsx("button",{onClick:Kt,style:{...Rt,width:"100%",background:"var(--teal)",color:"white",fontSize:".9rem",padding:"14px"},children:g+1>=D?"📊 Ergebnis anzeigen":"Weiter →"})]})}const Rt={border:"1px solid var(--border)",borderRadius:10,padding:"8px 16px",cursor:"pointer",fontFamily:"DM Sans, sans-serif",fontWeight:600,fontSize:".82rem",background:"var(--card)",color:"var(--ink)"};function eh(){const{FACHBEGRIFFE:e}=A.useContext(tt),[t,r]=A.useState(""),[n,i]=A.useState(null),l=Array.isArray(e)?e:Object.values(e).flat(),s=t.trim()?l.filter(a=>a.term.toLowerCase().includes(t.toLowerCase())||a.def.toLowerCase().includes(t.toLowerCase())):l;return d.jsxs("div",{style:{maxWidth:"100%"},children:[d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:16,padding:"18px 20px",marginBottom:20,display:"flex",alignItems:"center",gap:14},children:[d.jsx("div",{style:{width:46,height:46,borderRadius:12,background:"var(--purple-dim)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",flexShrink:0},children:"📖"}),d.jsxs("div",{children:[d.jsx("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.2rem",color:"var(--ink)"},children:"Fachbegriffe"}),d.jsxs("div",{style:{fontSize:".78rem",color:"var(--ink2)",marginTop:2},children:[l.length," Begriffe"]})]})]}),d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:12,padding:"10px 16px",display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[d.jsx("span",{style:{color:"var(--ink3)",fontSize:"1rem"},children:"🔍"}),d.jsx("input",{type:"text",placeholder:"Begriff suchen...",value:t,onChange:a=>{r(a.target.value),i(null)},style:{flex:1,border:"none",outline:"none",background:"transparent",fontFamily:"DM Sans, sans-serif",fontSize:".88rem",color:"var(--ink)"}}),t&&d.jsx("button",{onClick:()=>{r(""),i(null)},style:{background:"none",border:"none",cursor:"pointer",color:"var(--ink3)",fontSize:"1rem",padding:0},children:"✕"})]}),t&&d.jsxs("div",{style:{fontSize:".72rem",color:"var(--ink3)",marginBottom:10},children:[s.length," Ergebnis",s.length!==1?"se":""]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:s.length===0?d.jsxs("div",{style:{textAlign:"center",padding:"40px 20px",color:"var(--ink3)",fontSize:".85rem"},children:["Kein Begriff gefunden für „",t,'"']}):s.map((a,o)=>{const f=n===o;return d.jsxs("div",{onClick:()=>i(f?null:o),style:{background:"var(--card)",border:`1px solid ${f?"rgba(45,212,191,.3)":"var(--border)"}`,borderRadius:12,overflow:"hidden",cursor:"pointer",transition:"all .2s"},children:[d.jsxs("div",{style:{padding:"13px 16px",display:"flex",alignItems:"center",gap:12},children:[d.jsx("div",{style:{width:32,height:32,borderRadius:8,flexShrink:0,background:f?"var(--teal-dim)":"var(--bg3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:".72rem",fontWeight:700,color:f?"var(--teal)":"var(--ink3)",transition:"all .2s"},children:a.term.slice(0,2).toUpperCase()}),d.jsx("div",{style:{flex:1,fontWeight:600,fontSize:".88rem",color:f?"var(--teal)":"var(--ink)",transition:"color .2s"},children:a.term}),d.jsx("span",{style:{color:"var(--ink3)",fontSize:".9rem",transform:f?"rotate(90deg)":"none",transition:"transform .2s",display:"inline-block"},children:"›"})]}),f&&d.jsx("div",{style:{padding:"0 16px 14px 60px",fontSize:".82rem",color:"var(--ink)",lineHeight:1.6,borderTop:"1px solid var(--border)",paddingTop:12},children:a.def})]},o)})})]})}function th(){var f;const{PRAXIS_DATA:e}=A.useContext(tt),t=Object.entries(e),[r,n]=A.useState(((f=t[0])==null?void 0:f[0])||""),[i,l]=A.useState(!1),[s,a]=A.useState("expressions"),o=e[r];return o?d.jsxs("div",{style:{maxWidth:"100%"},children:[d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:16,padding:"18px 20px",marginBottom:20,display:"flex",alignItems:"center",gap:14},children:[d.jsx("div",{style:{width:46,height:46,borderRadius:12,background:"var(--teal-dim)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",flexShrink:0},children:"🏥"}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.2rem",color:"var(--ink)"},children:"Praxis-Ausdrücke"}),d.jsx("div",{style:{fontSize:".78rem",color:"var(--ink2)",marginTop:2},children:"Deutsch ↔ Français"})]}),d.jsx("button",{onClick:()=>l(!i),style:{background:i?"var(--teal)":"var(--bg3)",color:i?"white":"var(--ink2)",border:"1px solid var(--border)",borderRadius:9,padding:"6px 12px",cursor:"pointer",fontFamily:"DM Sans, sans-serif",fontSize:".75rem",fontWeight:700},children:i?"🇫🇷 FR":"🇩🇪 DE"})]}),d.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:16},children:t.map(([v,g])=>d.jsx("button",{onClick:()=>{n(v),a("expressions")},style:{background:r===v?"var(--teal)":"var(--card)",color:r===v?"white":"var(--ink2)",border:`1px solid ${r===v?"var(--teal)":"var(--border)"}`,borderRadius:10,padding:"7px 14px",cursor:"pointer",fontFamily:"DM Sans, sans-serif",fontSize:".78rem",fontWeight:600,transition:"all .2s"},children:g.label},v))}),d.jsx("div",{style:{display:"flex",gap:0,marginBottom:16,background:"var(--bg3)",borderRadius:10,padding:3},children:["expressions","material"].map(v=>d.jsx("button",{onClick:()=>a(v),style:{flex:1,background:s===v?"var(--card)":"transparent",color:s===v?"var(--ink)":"var(--ink3)",border:"none",borderRadius:8,padding:"8px",cursor:"pointer",fontFamily:"DM Sans, sans-serif",fontSize:".8rem",fontWeight:600,transition:"all .2s"},children:v==="expressions"?"💬 Ausdrücke":"🧰 Material"},v))}),s==="expressions"&&d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:(o.expressions||[]).map((v,g)=>d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:12,padding:"14px 16px"},children:[d.jsxs("div",{style:{fontWeight:600,fontSize:".88rem",color:"var(--ink)",marginBottom:i?8:0},children:["🇩🇪 ",v.de]}),i&&d.jsxs("div",{style:{fontSize:".82rem",color:"var(--teal)",paddingTop:6,borderTop:"1px solid var(--border)"},children:["🇫🇷 ",v.fr]})]},g))}),s==="material"&&d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:(o.material||[]).length===0?d.jsx("div",{style:{textAlign:"center",padding:"30px",color:"var(--ink3)",fontSize:".85rem"},children:"Kein Material für diesen Kontext."}):(o.material||[]).map((v,g)=>d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:12,padding:"14px 16px",display:"flex",alignItems:"center",gap:14},children:[d.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"var(--teal-dim)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",flexShrink:0},children:v.icon}),d.jsxs("div",{children:[d.jsx("div",{style:{fontWeight:600,fontSize:".88rem",color:"var(--ink)"},children:v.name}),d.jsx("div",{style:{fontSize:".76rem",color:"var(--ink2)",marginTop:2},children:v.desc})]})]},g))})]}):null}function rh(){const{progress:e,THEMES:t,QUIZZES:r,openDetail:n,openLesson:i,startQuiz:l}=A.useContext(tt),s=e.lessonsRead||[],a=e.levels||{},o=t.reduce((c,u)=>c+u.lessons.length,0),f=s.length,v=e.quizCount||0,g=Object.values(a).flatMap(c=>c.levelScores||[]).filter(c=>c!==void 0),m=g.length>0?Math.round(g.reduce((c,u)=>c+u,0)/g.length*100):0;function p(c,u){const h=a[c];if(!(h!=null&&h.levelScores))return null;const x=h.levelScores[u];return x!==void 0?Math.round(x*100):null}function k(c,u){if(u===0)return!0;const h=a[c];return h!=null&&h.levelScores?(h.levelScores[u-1]||0)>=.7:!1}function y(c){return Math.min(3,Math.ceil((r[c]||[]).length/3))}const M=["Basis","Fortgeschritten","Experte"];return d.jsxs("div",{style:{maxWidth:"100%"},children:[d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:16,padding:"18px 20px",marginBottom:20,display:"flex",alignItems:"center",gap:14},children:[d.jsx("div",{style:{width:46,height:46,borderRadius:12,background:"var(--amber-dim)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",flexShrink:0},children:"📅"}),d.jsxs("div",{children:[d.jsx("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.2rem",color:"var(--ink)"},children:"Mein Fortschritt"}),d.jsx("div",{style:{fontSize:".78rem",color:"var(--ink2)",marginTop:2},children:"Übersicht · Stand heute"})]})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:24},children:[{label:"Lektionen gelesen",value:`${f} / ${o}`,icon:"📖"},{label:"Quiz gemacht",value:v,icon:"🎯"},{label:"Ø Score",value:`${m}%`,icon:"📊"},{label:"Streak",value:`${e.streak||0} 🔥`,icon:"🔥"}].map((c,u)=>d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:14,padding:"16px"},children:[d.jsx("div",{style:{fontSize:"1.4rem",marginBottom:6},children:c.icon}),d.jsx("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.5rem",color:"var(--ink)",marginBottom:2},children:c.value}),d.jsx("div",{style:{fontSize:".72rem",color:"var(--ink3)"},children:c.label})]},u))}),t.map(c=>{const u=y(c.id),h=c.lessons.filter(z=>s.includes(`${c.id}::${z}`)),x=Math.round(h.length/c.lessons.length*100);return d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:16,padding:"18px 20px",marginBottom:16},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[d.jsx("div",{style:{width:38,height:38,borderRadius:10,background:`var(--${c.col}-dim)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",flexShrink:0},children:c.icon}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{fontWeight:700,fontSize:".88rem",color:"var(--ink)"},children:c.name}),d.jsxs("div",{style:{fontSize:".72rem",color:"var(--ink3)",marginTop:2},children:[h.length," / ",c.lessons.length," Lerneinheiten gelesen"]})]}),d.jsx("button",{onClick:()=>n(c),style:{background:"var(--bg3)",border:"1px solid var(--border)",color:"var(--ink2)",padding:"5px 10px",borderRadius:8,cursor:"pointer",fontSize:".72rem",fontWeight:600,fontFamily:"DM Sans, sans-serif"},children:"Öffnen →"})]}),d.jsxs("div",{style:{marginBottom:14},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:5},children:[d.jsx("span",{style:{fontSize:".7rem",color:"var(--ink3)"},children:"📖 Lerneinheiten"}),d.jsxs("span",{style:{fontSize:".7rem",color:"var(--ink2)",fontWeight:700},children:[x,"%"]})]}),d.jsx("div",{style:{height:6,background:"var(--bg3)",borderRadius:3,overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",borderRadius:3,background:x===100?"var(--green)":"var(--teal)",width:`${x}%`,transition:"width .5s"}})})]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5,marginBottom:16},children:c.lessons.map((z,S)=>{const b=s.includes(`${c.id}::${z}`);return d.jsxs("div",{onClick:()=>i(c.id,z),style:{display:"flex",alignItems:"center",gap:10,padding:"8px 10px",borderRadius:9,background:b?"var(--green-dim)":"var(--bg3)",cursor:"pointer",transition:"all .2s"},children:[d.jsx("span",{style:{fontSize:".85rem"},children:b?"✅":"🔲"}),d.jsx("span",{style:{fontSize:".78rem",color:"var(--ink)",fontWeight:b?500:400},children:z})]},S)})}),d.jsx("div",{style:{fontSize:".7rem",fontWeight:700,color:"var(--ink3)",marginBottom:8,letterSpacing:".5px",textTransform:"uppercase"},children:"🎯 Quiz"}),d.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:Array.from({length:u},(z,S)=>{const b=p(c.id,S),D=k(c.id,S),L=b!==null&&b>=70;let N="var(--bg3)",V="var(--border)",oe="var(--ink3)",he="🔒 Gesperrt";return D&&(b===null?(N="var(--card)",V="var(--teal)",oe="var(--teal)",he="▶ Starten"):L?(N="var(--green-dim)",V="rgba(74,222,128,.3)",oe="var(--green)",he="✓ Bestanden"):(N="var(--rose-dim)",V="rgba(251,113,133,.2)",oe="var(--rose)",he="↺ Wiederholen")),d.jsxs("div",{onClick:()=>D&&l(c.id,S,"heute"),style:{flex:1,minWidth:80,background:N,border:`1px solid ${V}`,borderRadius:10,padding:"10px 8px",textAlign:"center",cursor:D?"pointer":"default",opacity:D?1:.5,transition:"all .2s"},children:[d.jsx("div",{style:{fontSize:".7rem",color:"var(--ink3)",marginBottom:4},children:M[S]}),d.jsx("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.1rem",color:oe},children:D?b!==null?`${b}%`:"—":"🔒"}),d.jsx("div",{style:{fontSize:".65rem",color:oe,marginTop:2,fontWeight:600},children:he})]},S)})})]},c.id)})]})}function nh(){const{progress:e,THEMES:t,QUIZZES:r,startQuiz:n}=A.useContext(tt),i=e.levels||{},l=["Niveau 1 – Basis","Niveau 2 – Fortgeschritten","Niveau 3 – Experte"],s=["🟢","🟡","🔴"];function a(p,k){const y=i[p];if(!(y!=null&&y.levelScores))return null;const M=y.levelScores[k];return M!==void 0?Math.round(M*100):null}function o(p,k){if(k===0)return!0;const y=i[p];return y!=null&&y.levelScores?(y.levelScores[k-1]||0)>=.7:!1}function f(p){return Math.min(3,Math.ceil((r[p]||[]).length/3))}const v=Object.values(i).flatMap(p=>p.levelScores||[]).filter(p=>p!==void 0),g=v.length>0?Math.round(v.reduce((p,k)=>p+k,0)/v.length*100):0,m=e.quizCount||0;return d.jsxs("div",{style:{maxWidth:"100%"},children:[d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:16,padding:"18px 20px",marginBottom:20,display:"flex",alignItems:"center",gap:14},children:[d.jsx("div",{style:{width:46,height:46,borderRadius:12,background:"var(--rose-dim)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.4rem",flexShrink:0},children:"🎯"}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.2rem",color:"var(--ink)"},children:"Quiz — Alle Themen"}),d.jsx("div",{style:{fontSize:".78rem",color:"var(--ink2)",marginTop:2},children:"3 Niveaux pro Thema"})]}),d.jsxs("div",{style:{textAlign:"right"},children:[d.jsxs("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.2rem",color:"var(--teal)"},children:[g,"%"]}),d.jsx("div",{style:{fontSize:".7rem",color:"var(--ink3)"},children:"Ø Score"})]})]}),d.jsxs("div",{style:{display:"flex",gap:10,marginBottom:24},children:[d.jsxs("div",{style:{flex:1,background:"var(--card)",border:"1px solid var(--border)",borderRadius:12,padding:"14px",textAlign:"center"},children:[d.jsx("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.5rem",color:"var(--ink)"},children:m}),d.jsx("div",{style:{fontSize:".72rem",color:"var(--ink3)"},children:"Quiz gemacht"})]}),d.jsxs("div",{style:{flex:1,background:"var(--card)",border:"1px solid var(--border)",borderRadius:12,padding:"14px",textAlign:"center"},children:[d.jsx("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.5rem",color:"var(--ink)"},children:v.filter(p=>p>=.7).length}),d.jsx("div",{style:{fontSize:".72rem",color:"var(--ink3)"},children:"Bestanden"})]}),d.jsxs("div",{style:{flex:1,background:"var(--card)",border:"1px solid var(--border)",borderRadius:12,padding:"14px",textAlign:"center"},children:[d.jsx("div",{style:{fontFamily:"Fraunces, serif",fontSize:"1.5rem",color:"var(--ink)"},children:e.mastered||0}),d.jsx("div",{style:{fontSize:".72rem",color:"var(--ink3)"},children:"🏆 Gemeistert"})]})]}),t.map(p=>{const k=f(p.id);return d.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:16,padding:"18px 20px",marginBottom:16},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[d.jsx("div",{style:{width:38,height:38,borderRadius:10,background:`var(--${p.col}-dim)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",flexShrink:0},children:p.icon}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{fontWeight:700,fontSize:".88rem",color:"var(--ink)"},children:p.name}),d.jsxs("div",{style:{fontSize:".72rem",color:"var(--ink3)",marginTop:2},children:[k," Niveaux verfügbar"]})]})]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:Array.from({length:k},(y,M)=>{const c=a(p.id,M),u=o(p.id,M),h=c!==null&&c>=70;let x="var(--bg3)",z="var(--border)",S="var(--bg3)",b="🔒 Gesperrt",D="var(--ink3)";return u&&(c===null?(x="var(--card)",z="rgba(45,212,191,.3)",S="var(--teal-dim)",b="▶ Starten",D="var(--teal)"):h?(x="var(--green-dim)",z="rgba(74,222,128,.3)",S="var(--green-dim)",b="✓ Bestanden",D="var(--green)"):(x="var(--rose-dim)",z="rgba(251,113,133,.2)",S="var(--rose-dim)",b="↺ Wiederholen",D="var(--rose)")),d.jsxs("div",{onClick:()=>u&&n(p.id,M,"pruefung"),style:{background:x,border:`1px solid ${z}`,borderRadius:12,padding:"14px 16px",display:"flex",alignItems:"center",gap:14,cursor:u?"pointer":"default",opacity:u?1:.5,transition:"all .2s"},children:[d.jsx("div",{style:{width:36,height:36,borderRadius:10,background:S,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",flexShrink:0},children:u?s[M]:"🔒"}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{fontWeight:600,fontSize:".88rem",color:"var(--ink)",marginBottom:2},children:l[M]}),d.jsx("div",{style:{fontSize:".72rem",color:D,fontWeight:600},children:b})]}),c!==null?d.jsxs("div",{style:{width:46,height:46,borderRadius:"50%",border:`3px solid ${h?"var(--green)":"var(--rose)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Fraunces, serif",fontSize:".9rem",color:h?"var(--green)":"var(--rose)"},children:[c,"%"]}):u&&d.jsx("span",{style:{color:"var(--ink3)",fontSize:"1.2rem"},children:"›"})]},M)})})]},p.id)})]})}const tt=so.createContext(null);function ih(){const{progress:e,saveProgress:t,theme:r,toggleTheme:n,checkStreak:i,markLessonRead:l}=Qf(),[s,a]=A.useState("home"),[o,f]=A.useState(null),[v,g]=A.useState(null),[m,p]=A.useState(null),[k,y]=A.useState("detail");A.useEffect(()=>{document.documentElement.setAttribute("data-theme",r)},[r]),A.useEffect(()=>{i()},[]);const M=b=>a(b),c=b=>{f(b),a("detail")},u=(b,D)=>{const L=Zi.find(N=>N.id===b);f(L),g(D),a("lektion")},h=(b,D,L)=>{const N=Za[b]||[],V=Math.ceil(N.length/3),oe=N.slice(D*V,(D+1)*V),he=Zi.find(Kt=>Kt.id===b);f(he),p({themeId:b,level:D,questions:oe}),y(L||"detail"),a("quiz")},x=()=>{a(s==="lektion"?"detail":s==="quiz"?k:"home")},z={screen:s,nav:M,goBack:x,openDetail:c,openLesson:u,startQuiz:h,currentTheme:o,currentLesson:v,quizState:m,THEMES:Zi,QUIZZES:Za,LESSON_CONTENT:Rf,FACHBEGRIFFE:Ff,PRAXIS_DATA:Gf,progress:e,saveProgress:t,theme:r,toggleTheme:n,markLessonRead:l},S=["lektion","detail","quiz"].includes(s);return d.jsx(tt.Provider,{value:z,children:d.jsxs("div",{className:"app","data-theme":r,children:[d.jsx($f,{screen:s,currentTheme:o,currentLesson:v,inLektionMode:S,onBack:x,onToggleTheme:n,theme:r,streak:e.streak||0}),d.jsx(Uf,{screen:s,onNav:M}),d.jsx("main",{className:"main",children:d.jsxs("div",{className:"content",children:[s==="home"&&d.jsx(Vf,{}),s==="detail"&&d.jsx(_f,{}),s==="lektion"&&d.jsx(qf,{}),s==="quiz"&&d.jsx(Xf,{},JSON.stringify(m)),s==="fachbegriffe"&&d.jsx(eh,{}),s==="praxis"&&d.jsx(th,{}),s==="heute"&&d.jsx(rh,{}),s==="pruefung"&&d.jsx(nh,{})]})})]})})}qi.createRoot(document.getElementById("root")).render(d.jsx(so.StrictMode,{children:d.jsx(ih,{})}));
