(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function tg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ou={exports:{}},Ga={},ku={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Cx(){if(Xp)return mt;Xp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=S&&I[S]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function g(I,Q,Re){this.props=I,this.context=Q,this.refs=C,this.updater=Re||M}g.prototype.isReactComponent={},g.prototype.setState=function(I,Q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Q,"setState")},g.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=g.prototype;function N(I,Q,Re){this.props=I,this.context=Q,this.refs=C,this.updater=Re||M}var F=N.prototype=new v;F.constructor=N,w(F,g.prototype),F.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,D={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function b(I,Q,Re){var ne,xe={},ye=null,Ue=null;if(Q!=null)for(ne in Q.ref!==void 0&&(Ue=Q.ref),Q.key!==void 0&&(ye=""+Q.key),Q)U.call(Q,ne)&&!E.hasOwnProperty(ne)&&(xe[ne]=Q[ne]);var _e=arguments.length-2;if(_e===1)xe.children=Re;else if(1<_e){for(var Ge=Array(_e),dt=0;dt<_e;dt++)Ge[dt]=arguments[dt+2];xe.children=Ge}if(I&&I.defaultProps)for(ne in _e=I.defaultProps,_e)xe[ne]===void 0&&(xe[ne]=_e[ne]);return{$$typeof:s,type:I,key:ye,ref:Ue,props:xe,_owner:D.current}}function V(I,Q){return{$$typeof:s,type:I.type,key:Q,ref:I.ref,props:I.props,_owner:I._owner}}function k(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function j(I){var Q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Re){return Q[Re]})}var q=/\/+/g;function se(I,Q){return typeof I=="object"&&I!==null&&I.key!=null?j(""+I.key):Q.toString(36)}function z(I,Q,Re,ne,xe){var ye=typeof I;(ye==="undefined"||ye==="boolean")&&(I=null);var Ue=!1;if(I===null)Ue=!0;else switch(ye){case"string":case"number":Ue=!0;break;case"object":switch(I.$$typeof){case s:case e:Ue=!0}}if(Ue)return Ue=I,xe=xe(Ue),I=ne===""?"."+se(Ue,0):ne,P(xe)?(Re="",I!=null&&(Re=I.replace(q,"$&/")+"/"),z(xe,Q,Re,"",function(dt){return dt})):xe!=null&&(k(xe)&&(xe=V(xe,Re+(!xe.key||Ue&&Ue.key===xe.key?"":(""+xe.key).replace(q,"$&/")+"/")+I)),Q.push(xe)),1;if(Ue=0,ne=ne===""?".":ne+":",P(I))for(var _e=0;_e<I.length;_e++){ye=I[_e];var Ge=ne+se(ye,_e);Ue+=z(ye,Q,Re,Ge,xe)}else if(Ge=_(I),typeof Ge=="function")for(I=Ge.call(I),_e=0;!(ye=I.next()).done;)ye=ye.value,Ge=ne+se(ye,_e++),Ue+=z(ye,Q,Re,Ge,xe);else if(ye==="object")throw Q=String(I),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ue}function re(I,Q,Re){if(I==null)return I;var ne=[],xe=0;return z(I,ne,"","",function(ye){return Q.call(Re,ye,xe++)}),ne}function ue(I){if(I._status===-1){var Q=I._result;Q=Q(),Q.then(function(Re){(I._status===0||I._status===-1)&&(I._status=1,I._result=Re)},function(Re){(I._status===0||I._status===-1)&&(I._status=2,I._result=Re)}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var K={current:null},Z={transition:null},G={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:Z,ReactCurrentOwner:D};function $(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:re,forEach:function(I,Q,Re){re(I,function(){Q.apply(this,arguments)},Re)},count:function(I){var Q=0;return re(I,function(){Q++}),Q},toArray:function(I){return re(I,function(Q){return Q})||[]},only:function(I){if(!k(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},mt.Component=g,mt.Fragment=t,mt.Profiler=o,mt.PureComponent=N,mt.StrictMode=r,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,mt.act=$,mt.cloneElement=function(I,Q,Re){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ne=w({},I.props),xe=I.key,ye=I.ref,Ue=I._owner;if(Q!=null){if(Q.ref!==void 0&&(ye=Q.ref,Ue=D.current),Q.key!==void 0&&(xe=""+Q.key),I.type&&I.type.defaultProps)var _e=I.type.defaultProps;for(Ge in Q)U.call(Q,Ge)&&!E.hasOwnProperty(Ge)&&(ne[Ge]=Q[Ge]===void 0&&_e!==void 0?_e[Ge]:Q[Ge])}var Ge=arguments.length-2;if(Ge===1)ne.children=Re;else if(1<Ge){_e=Array(Ge);for(var dt=0;dt<Ge;dt++)_e[dt]=arguments[dt+2];ne.children=_e}return{$$typeof:s,type:I.type,key:xe,ref:ye,props:ne,_owner:Ue}},mt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},mt.createElement=b,mt.createFactory=function(I){var Q=b.bind(null,I);return Q.type=I,Q},mt.createRef=function(){return{current:null}},mt.forwardRef=function(I){return{$$typeof:f,render:I}},mt.isValidElement=k,mt.lazy=function(I){return{$$typeof:y,_payload:{_status:-1,_result:I},_init:ue}},mt.memo=function(I,Q){return{$$typeof:m,type:I,compare:Q===void 0?null:Q}},mt.startTransition=function(I){var Q=Z.transition;Z.transition={};try{I()}finally{Z.transition=Q}},mt.unstable_act=$,mt.useCallback=function(I,Q){return K.current.useCallback(I,Q)},mt.useContext=function(I){return K.current.useContext(I)},mt.useDebugValue=function(){},mt.useDeferredValue=function(I){return K.current.useDeferredValue(I)},mt.useEffect=function(I,Q){return K.current.useEffect(I,Q)},mt.useId=function(){return K.current.useId()},mt.useImperativeHandle=function(I,Q,Re){return K.current.useImperativeHandle(I,Q,Re)},mt.useInsertionEffect=function(I,Q){return K.current.useInsertionEffect(I,Q)},mt.useLayoutEffect=function(I,Q){return K.current.useLayoutEffect(I,Q)},mt.useMemo=function(I,Q){return K.current.useMemo(I,Q)},mt.useReducer=function(I,Q,Re){return K.current.useReducer(I,Q,Re)},mt.useRef=function(I){return K.current.useRef(I)},mt.useState=function(I){return K.current.useState(I)},mt.useSyncExternalStore=function(I,Q,Re){return K.current.useSyncExternalStore(I,Q,Re)},mt.useTransition=function(){return K.current.useTransition()},mt.version="18.3.1",mt}var Yp;function cf(){return Yp||(Yp=1,ku.exports=Cx()),ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Nx(){if(qp)return Ga;qp=1;var s=cf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var y,S={},_=null,M=null;m!==void 0&&(_=""+m),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(M=h.ref);for(y in h)r.call(h,y)&&!l.hasOwnProperty(y)&&(S[y]=h[y]);if(f&&f.defaultProps)for(y in h=f.defaultProps,h)S[y]===void 0&&(S[y]=h[y]);return{$$typeof:e,type:f,key:_,ref:M,props:S,_owner:o.current}}return Ga.Fragment=t,Ga.jsx=u,Ga.jsxs=u,Ga}var $p;function Px(){return $p||($p=1,Ou.exports=Nx()),Ou.exports}var x=Px(),$t=cf();const Lx=tg($t);var pl={},Bu={exports:{}},Xn={},zu={exports:{}},Gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Dx(){return Kp||(Kp=1,(function(s){function e(Z,G){var $=Z.length;Z.push(G);e:for(;0<$;){var I=$-1>>>1,Q=Z[I];if(0<o(Q,G))Z[I]=G,Z[$]=Q,$=I;else break e}}function t(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var G=Z[0],$=Z.pop();if($!==G){Z[0]=$;e:for(var I=0,Q=Z.length,Re=Q>>>1;I<Re;){var ne=2*(I+1)-1,xe=Z[ne],ye=ne+1,Ue=Z[ye];if(0>o(xe,$))ye<Q&&0>o(Ue,xe)?(Z[I]=Ue,Z[ye]=$,I=ye):(Z[I]=xe,Z[ne]=$,I=ne);else if(ye<Q&&0>o(Ue,$))Z[I]=Ue,Z[ye]=$,I=ye;else break e}}return G}function o(Z,G){var $=Z.sortIndex-G.sortIndex;return $!==0?$:Z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],y=1,S=null,_=3,M=!1,w=!1,C=!1,g=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(Z){for(var G=t(m);G!==null;){if(G.callback===null)r(m);else if(G.startTime<=Z)r(m),G.sortIndex=G.expirationTime,e(h,G);else break;G=t(m)}}function P(Z){if(C=!1,F(Z),!w)if(t(h)!==null)w=!0,ue(U);else{var G=t(m);G!==null&&K(P,G.startTime-Z)}}function U(Z,G){w=!1,C&&(C=!1,v(b),b=-1),M=!0;var $=_;try{for(F(G),S=t(h);S!==null&&(!(S.expirationTime>G)||Z&&!j());){var I=S.callback;if(typeof I=="function"){S.callback=null,_=S.priorityLevel;var Q=I(S.expirationTime<=G);G=s.unstable_now(),typeof Q=="function"?S.callback=Q:S===t(h)&&r(h),F(G)}else r(h);S=t(h)}if(S!==null)var Re=!0;else{var ne=t(m);ne!==null&&K(P,ne.startTime-G),Re=!1}return Re}finally{S=null,_=$,M=!1}}var D=!1,E=null,b=-1,V=5,k=-1;function j(){return!(s.unstable_now()-k<V)}function q(){if(E!==null){var Z=s.unstable_now();k=Z;var G=!0;try{G=E(!0,Z)}finally{G?se():(D=!1,E=null)}}else D=!1}var se;if(typeof N=="function")se=function(){N(q)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,re=z.port2;z.port1.onmessage=q,se=function(){re.postMessage(null)}}else se=function(){g(q,0)};function ue(Z){E=Z,D||(D=!0,se())}function K(Z,G){b=g(function(){Z(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,ue(U))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Z){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var $=_;_=G;try{return Z()}finally{_=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,G){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var $=_;_=Z;try{return G()}finally{_=$}},s.unstable_scheduleCallback=function(Z,G,$){var I=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?I+$:I):$=I,Z){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=$+Q,Z={id:y++,callback:G,priorityLevel:Z,startTime:$,expirationTime:Q,sortIndex:-1},$>I?(Z.sortIndex=$,e(m,Z),t(h)===null&&Z===t(m)&&(C?(v(b),b=-1):C=!0,K(P,$-I))):(Z.sortIndex=Q,e(h,Z),w||M||(w=!0,ue(U))),Z},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(Z){var G=_;return function(){var $=_;_=G;try{return Z.apply(this,arguments)}finally{_=$}}}})(Gu)),Gu}var Zp;function Ix(){return Zp||(Zp=1,zu.exports=Dx()),zu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Ux(){if(Jp)return Xn;Jp=1;var s=cf(),e=Ix();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},S={};function _(n){return h.call(S,n)?!0:h.call(y,n)?!1:m.test(n)?S[n]=!0:(y[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,d,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){g[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];g[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){g[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){g[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){g[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){g[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){g[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){g[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){g[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,N);g[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,N);g[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,N);g[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){g[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),g.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){g[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var d=g.hasOwnProperty(i)?g[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,d,c)&&(a=null),c||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),D=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),j=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),Z=Symbol.iterator;function G(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,I;function Q(n){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Re=!1;function ne(n,i){if(!n||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(n,[],i)}else{try{i.call()}catch(ce){c=ce}n.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var d=ce.stack.split(`
`),p=c.stack.split(`
`),T=d.length-1,O=p.length-1;1<=T&&0<=O&&d[T]!==p[O];)O--;for(;1<=T&&0<=O;T--,O--)if(d[T]!==p[O]){if(T!==1||O!==1)do if(T--,O--,0>O||d[T]!==p[O]){var W=`
`+d[T].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=T&&0<=O);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Q(n):""}function xe(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=ne(n.type,!1),n;case 11:return n=ne(n.type.render,!1),n;case 1:return n=ne(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case D:return"Portal";case V:return"Profiler";case b:return"StrictMode";case se:return"Suspense";case z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function Ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===b?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ge(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function dt(n){var i=Ge(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,p.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function et(n){n._valueTracker||(n._valueTracker=dt(n))}function gt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ge(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function lt(n,i){var a=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ht(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=_e(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ut(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function Bt(n,i){Ut(n,i);var a=_e(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?sn(n,i.type,a):i.hasOwnProperty("defaultValue")&&sn(n,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function wt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function sn(n,i,a){(i!=="number"||ht(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ct=Array.isArray;function Vt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+_e(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function It(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Wt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ct(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:_e(a)}}function X(n,i){var a=_e(i.value),c=_e(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ln(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function At(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?At(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Le,jt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Le=Le||document.createElement("div"),Le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Le.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ve(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L=["Webkit","ms","Moz","O"];Object.keys(tt).forEach(function(n){L.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),tt[i]=tt[n]})});function A(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||tt.hasOwnProperty(n)&&tt[n]?(""+i).trim():i+"px"}function ee(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=A(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ee=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ge(n,i){if(i){if(Ee[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function fe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var he=null,Ae=null,B=null;function pe(n){if(n=Aa(n)){if(typeof he!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Co(i),he(n.stateNode,n.type,i))}}function de(n){Ae?B?B.push(n):B=[n]:Ae=n}function Ce(){if(Ae){var n=Ae,i=B;if(B=Ae=null,pe(n),i)for(n=0;n<i.length;n++)pe(i[n])}}function Te(n,i){return n(i)}function me(){}var De=!1;function ke(n,i,a){if(De)return n(i,a);De=!0;try{return Te(n,i,a)}finally{De=!1,(Ae!==null||B!==null)&&(me(),Ce())}}function ve(n,i){var a=n.stateNode;if(a===null)return null;var c=Co(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var We=!1;if(f)try{var nt={};Object.defineProperty(nt,"passive",{get:function(){We=!0}}),window.addEventListener("test",nt,nt),window.removeEventListener("test",nt,nt)}catch{We=!1}function Oe(n,i,a,c,d,p,T,O,W){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(Me){this.onError(Me)}}var St=!1,Zt=null,$n=!1,ds=null,aa={onError:function(n){St=!0,Zt=n}};function oc(n,i,a,c,d,p,T,O,W){St=!1,Zt=null,Oe.apply(aa,arguments)}function co(n,i,a,c,d,p,T,O,W){if(oc.apply(this,arguments),St){if(St){var ce=Zt;St=!1,Zt=null}else throw Error(t(198));$n||($n=!0,ds=ce)}}function Ri(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ci(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function fs(n){if(Ri(n)!==n)throw Error(t(188))}function uo(n){var i=n.alternate;if(!i){if(i=Ri(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return fs(d),n;if(p===c)return fs(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var T=!1,O=d.child;O;){if(O===a){T=!0,a=d,c=p;break}if(O===c){T=!0,c=d,a=p;break}O=O.sibling}if(!T){for(O=p.child;O;){if(O===a){T=!0,a=p,c=d;break}if(O===c){T=!0,c=p,a=d;break}O=O.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function oa(n){return n=uo(n),n!==null?zr(n):null}function zr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=zr(n);if(i!==null)return i;n=n.sibling}return null}var la=e.unstable_scheduleCallback,ca=e.unstable_cancelCallback,Gr=e.unstable_shouldYield,lc=e.unstable_requestPaint,Xt=e.unstable_now,fo=e.unstable_getCurrentPriorityLevel,ua=e.unstable_ImmediatePriority,ho=e.unstable_UserBlockingPriority,hs=e.unstable_NormalPriority,po=e.unstable_LowPriority,R=e.unstable_IdlePriority,H=null,ae=null;function te(n){if(ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(H,n,void 0,(n.current.flags&128)===128)}catch{}}var J=Math.clz32?Math.clz32:Ie,Fe=Math.log,je=Math.LN2;function Ie(n){return n>>>=0,n===0?32:31-(Fe(n)/je|0)|0}var Be=64,Ye=4194304;function st(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ut(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,T=a&268435455;if(T!==0){var O=T&~d;O!==0?c=st(O):(p&=T,p!==0&&(c=st(p)))}else T=a&~d,T!==0?c=st(T):p!==0&&(c=st(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-J(i),d=1<<a,c|=n[a],i&=~d;return c}function qe(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var T=31-J(p),O=1<<T,W=d[T];W===-1?((O&a)===0||(O&c)!==0)&&(d[T]=qe(O,i)):W<=i&&(n.expiredLanes|=O),p&=~O}}function Yt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Lt(){var n=Be;return Be<<=1,(Be&4194240)===0&&(Be=64),n}function Nt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function tn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-J(i),n[i]=a}function $e(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-J(a),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function dn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-J(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Je=0;function Ni(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var fn,cr,pi,Pi,_t,an=!1,Rn=[],bt=null,Ft=null,xn=null,ur=new Map,da=new Map,dr=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(n,i){switch(n){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":ur.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(i.pointerId)}}function fa(n,i,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Aa(i),i!==null&&cr(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Jg(n,i,a,c,d){switch(i){case"focusin":return bt=fa(bt,n,i,a,c,d),!0;case"dragenter":return Ft=fa(Ft,n,i,a,c,d),!0;case"mouseover":return xn=fa(xn,n,i,a,c,d),!0;case"pointerover":var p=d.pointerId;return ur.set(p,fa(ur.get(p)||null,n,i,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,da.set(p,fa(da.get(p)||null,n,i,a,c,d)),!0}return!1}function Nf(n){var i=Hr(n.target);if(i!==null){var a=Ri(i);if(a!==null){if(i=a.tag,i===13){if(i=Ci(a),i!==null){n.blockedOn=i,_t(n.priority,function(){pi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function mo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=uc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Pe=c,a.target.dispatchEvent(c),Pe=null}else return i=Aa(a),i!==null&&cr(i),n.blockedOn=a,!1;i.shift()}return!0}function Pf(n,i,a){mo(n)&&a.delete(i)}function Qg(){an=!1,bt!==null&&mo(bt)&&(bt=null),Ft!==null&&mo(Ft)&&(Ft=null),xn!==null&&mo(xn)&&(xn=null),ur.forEach(Pf),da.forEach(Pf)}function ha(n,i){n.blockedOn===i&&(n.blockedOn=null,an||(an=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Qg)))}function pa(n){function i(d){return ha(d,n)}if(0<Rn.length){ha(Rn[0],n);for(var a=1;a<Rn.length;a++){var c=Rn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(bt!==null&&ha(bt,n),Ft!==null&&ha(Ft,n),xn!==null&&ha(xn,n),ur.forEach(i),da.forEach(i),a=0;a<dr.length;a++)c=dr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<dr.length&&(a=dr[0],a.blockedOn===null);)Nf(a),a.blockedOn===null&&dr.shift()}var ps=P.ReactCurrentBatchConfig,go=!0;function e0(n,i,a,c){var d=Je,p=ps.transition;ps.transition=null;try{Je=1,cc(n,i,a,c)}finally{Je=d,ps.transition=p}}function t0(n,i,a,c){var d=Je,p=ps.transition;ps.transition=null;try{Je=4,cc(n,i,a,c)}finally{Je=d,ps.transition=p}}function cc(n,i,a,c){if(go){var d=uc(n,i,a,c);if(d===null)bc(n,i,c,xo,a),Cf(n,c);else if(Jg(d,n,i,a,c))c.stopPropagation();else if(Cf(n,c),i&4&&-1<Zg.indexOf(n)){for(;d!==null;){var p=Aa(d);if(p!==null&&fn(p),p=uc(n,i,a,c),p===null&&bc(n,i,c,xo,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else bc(n,i,c,null,a)}}var xo=null;function uc(n,i,a,c){if(xo=null,n=fe(c),n=Hr(n),n!==null)if(i=Ri(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ci(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return xo=n,null}function Lf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fo()){case ua:return 1;case ho:return 4;case hs:case po:return 16;case R:return 536870912;default:return 16}default:return 16}}var fr=null,dc=null,_o=null;function Df(){if(_o)return _o;var n,i=dc,a=i.length,c,d="value"in fr?fr.value:fr.textContent,p=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[p-c];c++);return _o=d.slice(n,1<c?1-c:void 0)}function vo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function So(){return!0}function If(){return!1}function Kn(n){function i(a,c,d,p,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(p):p[O]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?So:If,this.isPropagationStopped=If,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=Kn(ms),ma=$({},ms,{view:0,detail:0}),n0=Kn(ma),hc,pc,ga,yo=$({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ga&&(ga&&n.type==="mousemove"?(hc=n.screenX-ga.screenX,pc=n.screenY-ga.screenY):pc=hc=0,ga=n),hc)},movementY:function(n){return"movementY"in n?n.movementY:pc}}),Uf=Kn(yo),i0=$({},yo,{dataTransfer:0}),r0=Kn(i0),s0=$({},ma,{relatedTarget:0}),mc=Kn(s0),a0=$({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),o0=Kn(a0),l0=$({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),c0=Kn(l0),u0=$({},ms,{data:0}),Ff=Kn(u0),d0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=h0[n])?!!i[n]:!1}function gc(){return p0}var m0=$({},ma,{key:function(n){if(n.key){var i=d0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=vo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?f0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(n){return n.type==="keypress"?vo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),g0=Kn(m0),x0=$({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=Kn(x0),_0=$({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),v0=Kn(_0),S0=$({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),y0=Kn(S0),M0=$({},yo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),E0=Kn(M0),w0=[9,13,27,32],xc=f&&"CompositionEvent"in window,xa=null;f&&"documentMode"in document&&(xa=document.documentMode);var T0=f&&"TextEvent"in window&&!xa,kf=f&&(!xc||xa&&8<xa&&11>=xa),Bf=" ",zf=!1;function Gf(n,i){switch(n){case"keyup":return w0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function A0(n,i){switch(n){case"compositionend":return Hf(i);case"keypress":return i.which!==32?null:(zf=!0,Bf);case"textInput":return n=i.data,n===Bf&&zf?null:n;default:return null}}function b0(n,i){if(gs)return n==="compositionend"||!xc&&Gf(n,i)?(n=Df(),_o=dc=fr=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return kf&&i.locale!=="ko"?null:i.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!R0[n.type]:i==="textarea"}function Wf(n,i,a,c){de(c),i=Ao(i,"onChange"),0<i.length&&(a=new fc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var _a=null,va=null;function C0(n){lh(n,0)}function Mo(n){var i=ys(n);if(gt(i))return n}function N0(n,i){if(n==="change")return i}var jf=!1;if(f){var _c;if(f){var vc="oninput"in document;if(!vc){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),vc=typeof Xf.oninput=="function"}_c=vc}else _c=!1;jf=_c&&(!document.documentMode||9<document.documentMode)}function Yf(){_a&&(_a.detachEvent("onpropertychange",qf),va=_a=null)}function qf(n){if(n.propertyName==="value"&&Mo(va)){var i=[];Wf(i,va,n,fe(n)),ke(C0,i)}}function P0(n,i,a){n==="focusin"?(Yf(),_a=i,va=a,_a.attachEvent("onpropertychange",qf)):n==="focusout"&&Yf()}function L0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Mo(va)}function D0(n,i){if(n==="click")return Mo(i)}function I0(n,i){if(n==="input"||n==="change")return Mo(i)}function U0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var mi=typeof Object.is=="function"?Object.is:U0;function Sa(n,i){if(mi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!mi(n[d],i[d]))return!1}return!0}function $f(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kf(n,i){var a=$f(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$f(a)}}function Zf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Zf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Jf(){for(var n=window,i=ht();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ht(n.document)}return i}function Sc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function F0(n){var i=Jf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Zf(a.ownerDocument.documentElement,a)){if(c!==null&&Sc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Kf(a,p);var T=Kf(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var O0=f&&"documentMode"in document&&11>=document.documentMode,xs=null,yc=null,ya=null,Mc=!1;function Qf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mc||xs==null||xs!==ht(c)||(c=xs,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ya&&Sa(ya,c)||(ya=c,c=Ao(yc,"onSelect"),0<c.length&&(i=new fc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=xs)))}function Eo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Ec={},eh={};f&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function wo(n){if(Ec[n])return Ec[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in eh)return Ec[n]=i[a];return n}var th=wo("animationend"),nh=wo("animationiteration"),ih=wo("animationstart"),rh=wo("transitionend"),sh=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,i){sh.set(n,i),l(i,[n])}for(var wc=0;wc<ah.length;wc++){var Tc=ah[wc],k0=Tc.toLowerCase(),B0=Tc[0].toUpperCase()+Tc.slice(1);hr(k0,"on"+B0)}hr(th,"onAnimationEnd"),hr(nh,"onAnimationIteration"),hr(ih,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(rh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function oh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,co(c,i,void 0,n),n.currentTarget=null}function lh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var T=c.length-1;0<=T;T--){var O=c[T],W=O.instance,ce=O.currentTarget;if(O=O.listener,W!==p&&d.isPropagationStopped())break e;oh(d,O,ce),p=W}else for(T=0;T<c.length;T++){if(O=c[T],W=O.instance,ce=O.currentTarget,O=O.listener,W!==p&&d.isPropagationStopped())break e;oh(d,O,ce),p=W}}}if($n)throw n=ds,$n=!1,ds=null,n}function zt(n,i){var a=i[Dc];a===void 0&&(a=i[Dc]=new Set);var c=n+"__bubble";a.has(c)||(ch(i,n,2,!1),a.add(c))}function Ac(n,i,a){var c=0;i&&(c|=4),ch(a,n,c,i)}var To="_reactListening"+Math.random().toString(36).slice(2);function Ea(n){if(!n[To]){n[To]=!0,r.forEach(function(a){a!=="selectionchange"&&(z0.has(a)||Ac(a,!1,n),Ac(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[To]||(i[To]=!0,Ac("selectionchange",!1,i))}}function ch(n,i,a,c){switch(Lf(i)){case 1:var d=e0;break;case 4:d=t0;break;default:d=cc}a=d.bind(null,i,a,n),d=void 0,!We||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function bc(n,i,a,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var O=c.stateNode.containerInfo;if(O===d||O.nodeType===8&&O.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var W=T.tag;if((W===3||W===4)&&(W=T.stateNode.containerInfo,W===d||W.nodeType===8&&W.parentNode===d))return;T=T.return}for(;O!==null;){if(T=Hr(O),T===null)return;if(W=T.tag,W===5||W===6){c=p=T;continue e}O=O.parentNode}}c=c.return}ke(function(){var ce=p,Me=fe(a),we=[];e:{var Se=sh.get(n);if(Se!==void 0){var He=fc,Ke=n;switch(n){case"keypress":if(vo(a)===0)break e;case"keydown":case"keyup":He=g0;break;case"focusin":Ke="focus",He=mc;break;case"focusout":Ke="blur",He=mc;break;case"beforeblur":case"afterblur":He=mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=r0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=v0;break;case th:case nh:case ih:He=o0;break;case rh:He=y0;break;case"scroll":He=n0;break;case"wheel":He=E0;break;case"copy":case"cut":case"paste":He=c0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Of}var Ze=(i&4)!==0,on=!Ze&&n==="scroll",ie=Ze?Se!==null?Se+"Capture":null:Se;Ze=[];for(var Y=ce,oe;Y!==null;){oe=Y;var Ne=oe.stateNode;if(oe.tag===5&&Ne!==null&&(oe=Ne,ie!==null&&(Ne=ve(Y,ie),Ne!=null&&Ze.push(wa(Y,Ne,oe)))),on)break;Y=Y.return}0<Ze.length&&(Se=new He(Se,Ke,null,a,Me),we.push({event:Se,listeners:Ze}))}}if((i&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",Se&&a!==Pe&&(Ke=a.relatedTarget||a.fromElement)&&(Hr(Ke)||Ke[Xi]))break e;if((He||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,He?(Ke=a.relatedTarget||a.toElement,He=ce,Ke=Ke?Hr(Ke):null,Ke!==null&&(on=Ri(Ke),Ke!==on||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(He=null,Ke=ce),He!==Ke)){if(Ze=Uf,Ne="onMouseLeave",ie="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=Of,Ne="onPointerLeave",ie="onPointerEnter",Y="pointer"),on=He==null?Se:ys(He),oe=Ke==null?Se:ys(Ke),Se=new Ze(Ne,Y+"leave",He,a,Me),Se.target=on,Se.relatedTarget=oe,Ne=null,Hr(Me)===ce&&(Ze=new Ze(ie,Y+"enter",Ke,a,Me),Ze.target=oe,Ze.relatedTarget=on,Ne=Ze),on=Ne,He&&Ke)t:{for(Ze=He,ie=Ke,Y=0,oe=Ze;oe;oe=vs(oe))Y++;for(oe=0,Ne=ie;Ne;Ne=vs(Ne))oe++;for(;0<Y-oe;)Ze=vs(Ze),Y--;for(;0<oe-Y;)ie=vs(ie),oe--;for(;Y--;){if(Ze===ie||ie!==null&&Ze===ie.alternate)break t;Ze=vs(Ze),ie=vs(ie)}Ze=null}else Ze=null;He!==null&&uh(we,Se,He,Ze,!1),Ke!==null&&on!==null&&uh(we,on,Ke,Ze,!0)}}e:{if(Se=ce?ys(ce):window,He=Se.nodeName&&Se.nodeName.toLowerCase(),He==="select"||He==="input"&&Se.type==="file")var Qe=N0;else if(Vf(Se))if(jf)Qe=I0;else{Qe=L0;var it=P0}else(He=Se.nodeName)&&He.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Qe=D0);if(Qe&&(Qe=Qe(n,ce))){Wf(we,Qe,a,Me);break e}it&&it(n,Se,ce),n==="focusout"&&(it=Se._wrapperState)&&it.controlled&&Se.type==="number"&&sn(Se,"number",Se.value)}switch(it=ce?ys(ce):window,n){case"focusin":(Vf(it)||it.contentEditable==="true")&&(xs=it,yc=ce,ya=null);break;case"focusout":ya=yc=xs=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,Qf(we,a,Me);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":Qf(we,a,Me)}var rt;if(xc)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else gs?Gf(n,a)&&(at="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(kf&&a.locale!=="ko"&&(gs||at!=="onCompositionStart"?at==="onCompositionEnd"&&gs&&(rt=Df()):(fr=Me,dc="value"in fr?fr.value:fr.textContent,gs=!0)),it=Ao(ce,at),0<it.length&&(at=new Ff(at,n,null,a,Me),we.push({event:at,listeners:it}),rt?at.data=rt:(rt=Hf(a),rt!==null&&(at.data=rt)))),(rt=T0?A0(n,a):b0(n,a))&&(ce=Ao(ce,"onBeforeInput"),0<ce.length&&(Me=new Ff("onBeforeInput","beforeinput",null,a,Me),we.push({event:Me,listeners:ce}),Me.data=rt))}lh(we,i)})}function wa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ao(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ve(n,a),p!=null&&c.unshift(wa(n,p,d)),p=ve(n,i),p!=null&&c.push(wa(n,p,d))),n=n.return}return c}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function uh(n,i,a,c,d){for(var p=i._reactName,T=[];a!==null&&a!==c;){var O=a,W=O.alternate,ce=O.stateNode;if(W!==null&&W===c)break;O.tag===5&&ce!==null&&(O=ce,d?(W=ve(a,p),W!=null&&T.unshift(wa(a,W,O))):d||(W=ve(a,p),W!=null&&T.push(wa(a,W,O)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var G0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function dh(n){return(typeof n=="string"?n:""+n).replace(G0,`
`).replace(H0,"")}function bo(n,i,a){if(i=dh(i),dh(n)!==i&&a)throw Error(t(425))}function Ro(){}var Rc=null,Cc=null;function Nc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,V0=typeof clearTimeout=="function"?clearTimeout:void 0,fh=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof fh<"u"?function(n){return fh.resolve(null).then(n).catch(j0)}:Pc;function j0(n){setTimeout(function(){throw n})}function Lc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),pa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);pa(i)}function pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function hh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Li="__reactFiber$"+Ss,Ta="__reactProps$"+Ss,Xi="__reactContainer$"+Ss,Dc="__reactEvents$"+Ss,X0="__reactListeners$"+Ss,Y0="__reactHandles$"+Ss;function Hr(n){var i=n[Li];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Xi]||a[Li]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=hh(n);n!==null;){if(a=n[Li])return a;n=hh(n)}return i}n=a,a=n.parentNode}return null}function Aa(n){return n=n[Li]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Co(n){return n[Ta]||null}var Ic=[],Ms=-1;function mr(n){return{current:n}}function Gt(n){0>Ms||(n.current=Ic[Ms],Ic[Ms]=null,Ms--)}function Ot(n,i){Ms++,Ic[Ms]=n.current,n.current=i}var gr={},Cn=mr(gr),Gn=mr(!1),Vr=gr;function Es(n,i){var a=n.type.contextTypes;if(!a)return gr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Hn(n){return n=n.childContextTypes,n!=null}function No(){Gt(Gn),Gt(Cn)}function ph(n,i,a){if(Cn.current!==gr)throw Error(t(168));Ot(Cn,i),Ot(Gn,a)}function mh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Ue(n)||"Unknown",d));return $({},a,c)}function Po(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Vr=Cn.current,Ot(Cn,n),Ot(Gn,Gn.current),!0}function gh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=mh(n,i,Vr),c.__reactInternalMemoizedMergedChildContext=n,Gt(Gn),Gt(Cn),Ot(Cn,n)):Gt(Gn),Ot(Gn,a)}var Yi=null,Lo=!1,Uc=!1;function xh(n){Yi===null?Yi=[n]:Yi.push(n)}function q0(n){Lo=!0,xh(n)}function xr(){if(!Uc&&Yi!==null){Uc=!0;var n=0,i=Je;try{var a=Yi;for(Je=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Yi=null,Lo=!1}catch(d){throw Yi!==null&&(Yi=Yi.slice(n+1)),la(ua,xr),d}finally{Je=i,Uc=!1}}return null}var ws=[],Ts=0,Do=null,Io=0,ri=[],si=0,Wr=null,qi=1,$i="";function jr(n,i){ws[Ts++]=Io,ws[Ts++]=Do,Do=n,Io=i}function _h(n,i,a){ri[si++]=qi,ri[si++]=$i,ri[si++]=Wr,Wr=n;var c=qi;n=$i;var d=32-J(c)-1;c&=~(1<<d),a+=1;var p=32-J(i)+d;if(30<p){var T=d-d%5;p=(c&(1<<T)-1).toString(32),c>>=T,d-=T,qi=1<<32-J(i)+d|a<<d|c,$i=p+n}else qi=1<<p|a<<d|c,$i=n}function Fc(n){n.return!==null&&(jr(n,1),_h(n,1,0))}function Oc(n){for(;n===Do;)Do=ws[--Ts],ws[Ts]=null,Io=ws[--Ts],ws[Ts]=null;for(;n===Wr;)Wr=ri[--si],ri[si]=null,$i=ri[--si],ri[si]=null,qi=ri[--si],ri[si]=null}var Zn=null,Jn=null,qt=!1,gi=null;function vh(n,i){var a=ci(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Sh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Zn=n,Jn=pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Zn=n,Jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Wr!==null?{id:qi,overflow:$i}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ci(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Zn=n,Jn=null,!0):!1;default:return!1}}function kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bc(n){if(qt){var i=Jn;if(i){var a=i;if(!Sh(n,i)){if(kc(n))throw Error(t(418));i=pr(a.nextSibling);var c=Zn;i&&Sh(n,i)?vh(c,a):(n.flags=n.flags&-4097|2,qt=!1,Zn=n)}}else{if(kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,qt=!1,Zn=n}}}function yh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zn=n}function Uo(n){if(n!==Zn)return!1;if(!qt)return yh(n),qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Nc(n.type,n.memoizedProps)),i&&(i=Jn)){if(kc(n))throw Mh(),Error(t(418));for(;i;)vh(n,i),i=pr(i.nextSibling)}if(yh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Jn=pr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Jn=null}}else Jn=Zn?pr(n.stateNode.nextSibling):null;return!0}function Mh(){for(var n=Jn;n;)n=pr(n.nextSibling)}function As(){Jn=Zn=null,qt=!1}function zc(n){gi===null?gi=[n]:gi.push(n)}var $0=P.ReactCurrentBatchConfig;function ba(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var O=d.refs;T===null?delete O[p]:O[p]=T},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Fo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Eh(n){var i=n._init;return i(n._payload)}function wh(n){function i(ie,Y){if(n){var oe=ie.deletions;oe===null?(ie.deletions=[Y],ie.flags|=16):oe.push(Y)}}function a(ie,Y){if(!n)return null;for(;Y!==null;)i(ie,Y),Y=Y.sibling;return null}function c(ie,Y){for(ie=new Map;Y!==null;)Y.key!==null?ie.set(Y.key,Y):ie.set(Y.index,Y),Y=Y.sibling;return ie}function d(ie,Y){return ie=Tr(ie,Y),ie.index=0,ie.sibling=null,ie}function p(ie,Y,oe){return ie.index=oe,n?(oe=ie.alternate,oe!==null?(oe=oe.index,oe<Y?(ie.flags|=2,Y):oe):(ie.flags|=2,Y)):(ie.flags|=1048576,Y)}function T(ie){return n&&ie.alternate===null&&(ie.flags|=2),ie}function O(ie,Y,oe,Ne){return Y===null||Y.tag!==6?(Y=Pu(oe,ie.mode,Ne),Y.return=ie,Y):(Y=d(Y,oe),Y.return=ie,Y)}function W(ie,Y,oe,Ne){var Qe=oe.type;return Qe===E?Me(ie,Y,oe.props.children,Ne,oe.key):Y!==null&&(Y.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ue&&Eh(Qe)===Y.type)?(Ne=d(Y,oe.props),Ne.ref=ba(ie,Y,oe),Ne.return=ie,Ne):(Ne=al(oe.type,oe.key,oe.props,null,ie.mode,Ne),Ne.ref=ba(ie,Y,oe),Ne.return=ie,Ne)}function ce(ie,Y,oe,Ne){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==oe.containerInfo||Y.stateNode.implementation!==oe.implementation?(Y=Lu(oe,ie.mode,Ne),Y.return=ie,Y):(Y=d(Y,oe.children||[]),Y.return=ie,Y)}function Me(ie,Y,oe,Ne,Qe){return Y===null||Y.tag!==7?(Y=Qr(oe,ie.mode,Ne,Qe),Y.return=ie,Y):(Y=d(Y,oe),Y.return=ie,Y)}function we(ie,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Pu(""+Y,ie.mode,oe),Y.return=ie,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case U:return oe=al(Y.type,Y.key,Y.props,null,ie.mode,oe),oe.ref=ba(ie,null,Y),oe.return=ie,oe;case D:return Y=Lu(Y,ie.mode,oe),Y.return=ie,Y;case ue:var Ne=Y._init;return we(ie,Ne(Y._payload),oe)}if(Ct(Y)||G(Y))return Y=Qr(Y,ie.mode,oe,null),Y.return=ie,Y;Fo(ie,Y)}return null}function Se(ie,Y,oe,Ne){var Qe=Y!==null?Y.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return Qe!==null?null:O(ie,Y,""+oe,Ne);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case U:return oe.key===Qe?W(ie,Y,oe,Ne):null;case D:return oe.key===Qe?ce(ie,Y,oe,Ne):null;case ue:return Qe=oe._init,Se(ie,Y,Qe(oe._payload),Ne)}if(Ct(oe)||G(oe))return Qe!==null?null:Me(ie,Y,oe,Ne,null);Fo(ie,oe)}return null}function He(ie,Y,oe,Ne,Qe){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return ie=ie.get(oe)||null,O(Y,ie,""+Ne,Qe);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case U:return ie=ie.get(Ne.key===null?oe:Ne.key)||null,W(Y,ie,Ne,Qe);case D:return ie=ie.get(Ne.key===null?oe:Ne.key)||null,ce(Y,ie,Ne,Qe);case ue:var it=Ne._init;return He(ie,Y,oe,it(Ne._payload),Qe)}if(Ct(Ne)||G(Ne))return ie=ie.get(oe)||null,Me(Y,ie,Ne,Qe,null);Fo(Y,Ne)}return null}function Ke(ie,Y,oe,Ne){for(var Qe=null,it=null,rt=Y,at=Y=0,Sn=null;rt!==null&&at<oe.length;at++){rt.index>at?(Sn=rt,rt=null):Sn=rt.sibling;var Rt=Se(ie,rt,oe[at],Ne);if(Rt===null){rt===null&&(rt=Sn);break}n&&rt&&Rt.alternate===null&&i(ie,rt),Y=p(Rt,Y,at),it===null?Qe=Rt:it.sibling=Rt,it=Rt,rt=Sn}if(at===oe.length)return a(ie,rt),qt&&jr(ie,at),Qe;if(rt===null){for(;at<oe.length;at++)rt=we(ie,oe[at],Ne),rt!==null&&(Y=p(rt,Y,at),it===null?Qe=rt:it.sibling=rt,it=rt);return qt&&jr(ie,at),Qe}for(rt=c(ie,rt);at<oe.length;at++)Sn=He(rt,ie,at,oe[at],Ne),Sn!==null&&(n&&Sn.alternate!==null&&rt.delete(Sn.key===null?at:Sn.key),Y=p(Sn,Y,at),it===null?Qe=Sn:it.sibling=Sn,it=Sn);return n&&rt.forEach(function(Ar){return i(ie,Ar)}),qt&&jr(ie,at),Qe}function Ze(ie,Y,oe,Ne){var Qe=G(oe);if(typeof Qe!="function")throw Error(t(150));if(oe=Qe.call(oe),oe==null)throw Error(t(151));for(var it=Qe=null,rt=Y,at=Y=0,Sn=null,Rt=oe.next();rt!==null&&!Rt.done;at++,Rt=oe.next()){rt.index>at?(Sn=rt,rt=null):Sn=rt.sibling;var Ar=Se(ie,rt,Rt.value,Ne);if(Ar===null){rt===null&&(rt=Sn);break}n&&rt&&Ar.alternate===null&&i(ie,rt),Y=p(Ar,Y,at),it===null?Qe=Ar:it.sibling=Ar,it=Ar,rt=Sn}if(Rt.done)return a(ie,rt),qt&&jr(ie,at),Qe;if(rt===null){for(;!Rt.done;at++,Rt=oe.next())Rt=we(ie,Rt.value,Ne),Rt!==null&&(Y=p(Rt,Y,at),it===null?Qe=Rt:it.sibling=Rt,it=Rt);return qt&&jr(ie,at),Qe}for(rt=c(ie,rt);!Rt.done;at++,Rt=oe.next())Rt=He(rt,ie,at,Rt.value,Ne),Rt!==null&&(n&&Rt.alternate!==null&&rt.delete(Rt.key===null?at:Rt.key),Y=p(Rt,Y,at),it===null?Qe=Rt:it.sibling=Rt,it=Rt);return n&&rt.forEach(function(Rx){return i(ie,Rx)}),qt&&jr(ie,at),Qe}function on(ie,Y,oe,Ne){if(typeof oe=="object"&&oe!==null&&oe.type===E&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case U:e:{for(var Qe=oe.key,it=Y;it!==null;){if(it.key===Qe){if(Qe=oe.type,Qe===E){if(it.tag===7){a(ie,it.sibling),Y=d(it,oe.props.children),Y.return=ie,ie=Y;break e}}else if(it.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ue&&Eh(Qe)===it.type){a(ie,it.sibling),Y=d(it,oe.props),Y.ref=ba(ie,it,oe),Y.return=ie,ie=Y;break e}a(ie,it);break}else i(ie,it);it=it.sibling}oe.type===E?(Y=Qr(oe.props.children,ie.mode,Ne,oe.key),Y.return=ie,ie=Y):(Ne=al(oe.type,oe.key,oe.props,null,ie.mode,Ne),Ne.ref=ba(ie,Y,oe),Ne.return=ie,ie=Ne)}return T(ie);case D:e:{for(it=oe.key;Y!==null;){if(Y.key===it)if(Y.tag===4&&Y.stateNode.containerInfo===oe.containerInfo&&Y.stateNode.implementation===oe.implementation){a(ie,Y.sibling),Y=d(Y,oe.children||[]),Y.return=ie,ie=Y;break e}else{a(ie,Y);break}else i(ie,Y);Y=Y.sibling}Y=Lu(oe,ie.mode,Ne),Y.return=ie,ie=Y}return T(ie);case ue:return it=oe._init,on(ie,Y,it(oe._payload),Ne)}if(Ct(oe))return Ke(ie,Y,oe,Ne);if(G(oe))return Ze(ie,Y,oe,Ne);Fo(ie,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,Y!==null&&Y.tag===6?(a(ie,Y.sibling),Y=d(Y,oe),Y.return=ie,ie=Y):(a(ie,Y),Y=Pu(oe,ie.mode,Ne),Y.return=ie,ie=Y),T(ie)):a(ie,Y)}return on}var bs=wh(!0),Th=wh(!1),Oo=mr(null),ko=null,Rs=null,Gc=null;function Hc(){Gc=Rs=ko=null}function Vc(n){var i=Oo.current;Gt(Oo),n._currentValue=i}function Wc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Cs(n,i){ko=n,Gc=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Vn=!0),n.firstContext=null)}function ai(n){var i=n._currentValue;if(Gc!==n)if(n={context:n,memoizedValue:i,next:null},Rs===null){if(ko===null)throw Error(t(308));Rs=n,ko.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return i}var Xr=null;function jc(n){Xr===null?Xr=[n]:Xr.push(n)}function Ah(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,jc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ki(n,c)}function Ki(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var _r=!1;function Xc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function vr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ki(n,a)}return d=c.interleaved,d===null?(i.next=i,jc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ki(n,a)}function Bo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,dn(n,a)}}function Rh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=T:p=p.next=T,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function zo(n,i,a,c){var d=n.updateQueue;_r=!1;var p=d.firstBaseUpdate,T=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var W=O,ce=W.next;W.next=null,T===null?p=ce:T.next=ce,T=W;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,O=Me.lastBaseUpdate,O!==T&&(O===null?Me.firstBaseUpdate=ce:O.next=ce,Me.lastBaseUpdate=W))}if(p!==null){var we=d.baseState;T=0,Me=ce=W=null,O=p;do{var Se=O.lane,He=O.eventTime;if((c&Se)===Se){Me!==null&&(Me=Me.next={eventTime:He,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ke=n,Ze=O;switch(Se=i,He=a,Ze.tag){case 1:if(Ke=Ze.payload,typeof Ke=="function"){we=Ke.call(He,we,Se);break e}we=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Ze.payload,Se=typeof Ke=="function"?Ke.call(He,we,Se):Ke,Se==null)break e;we=$({},we,Se);break e;case 2:_r=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Se=d.effects,Se===null?d.effects=[O]:Se.push(O))}else He={eventTime:He,lane:Se,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Me===null?(ce=Me=He,W=we):Me=Me.next=He,T|=Se;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;Se=O,O=Se.next,Se.next=null,d.lastBaseUpdate=Se,d.shared.pending=null}}while(!0);if(Me===null&&(W=we),d.baseState=W,d.firstBaseUpdate=ce,d.lastBaseUpdate=Me,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);$r|=T,n.lanes=T,n.memoizedState=we}}function Ch(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ra={},Di=mr(Ra),Ca=mr(Ra),Na=mr(Ra);function Yr(n){if(n===Ra)throw Error(t(174));return n}function Yc(n,i){switch(Ot(Na,i),Ot(Ca,n),Ot(Di,Ra),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:xt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=xt(i,n)}Gt(Di),Ot(Di,i)}function Ns(){Gt(Di),Gt(Ca),Gt(Na)}function Nh(n){Yr(Na.current);var i=Yr(Di.current),a=xt(i,n.type);i!==a&&(Ot(Ca,n),Ot(Di,a))}function qc(n){Ca.current===n&&(Gt(Di),Gt(Ca))}var Jt=mr(0);function Go(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var $c=[];function Kc(){for(var n=0;n<$c.length;n++)$c[n]._workInProgressVersionPrimary=null;$c.length=0}var Ho=P.ReactCurrentDispatcher,Zc=P.ReactCurrentBatchConfig,qr=0,Qt=null,hn=null,_n=null,Vo=!1,Pa=!1,La=0,K0=0;function Nn(){throw Error(t(321))}function Jc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!mi(n[a],i[a]))return!1;return!0}function Qc(n,i,a,c,d,p){if(qr=p,Qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ho.current=n===null||n.memoizedState===null?ex:tx,n=a(c,d),Pa){p=0;do{if(Pa=!1,La=0,25<=p)throw Error(t(301));p+=1,_n=hn=null,i.updateQueue=null,Ho.current=nx,n=a(c,d)}while(Pa)}if(Ho.current=Xo,i=hn!==null&&hn.next!==null,qr=0,_n=hn=Qt=null,Vo=!1,i)throw Error(t(300));return n}function eu(){var n=La!==0;return La=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?Qt.memoizedState=_n=n:_n=_n.next=n,_n}function oi(){if(hn===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=hn.next;var i=_n===null?Qt.memoizedState:_n.next;if(i!==null)_n=i,hn=n;else{if(n===null)throw Error(t(310));hn=n,n={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},_n===null?Qt.memoizedState=_n=n:_n=_n.next=n}return _n}function Da(n,i){return typeof i=="function"?i(n):i}function tu(n){var i=oi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=hn,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var T=d.next;d.next=p.next,p.next=T}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var O=T=null,W=null,ce=p;do{var Me=ce.lane;if((qr&Me)===Me)W!==null&&(W=W.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var we={lane:Me,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};W===null?(O=W=we,T=c):W=W.next=we,Qt.lanes|=Me,$r|=Me}ce=ce.next}while(ce!==null&&ce!==p);W===null?T=c:W.next=O,mi(c,i.memoizedState)||(Vn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=W,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Qt.lanes|=p,$r|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function nu(n){var i=oi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do p=n(p,T.action),T=T.next;while(T!==d);mi(p,i.memoizedState)||(Vn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function Ph(){}function Lh(n,i){var a=Qt,c=oi(),d=i(),p=!mi(c.memoizedState,d);if(p&&(c.memoizedState=d,Vn=!0),c=c.queue,iu(Uh.bind(null,a,c,n),[n]),c.getSnapshot!==i||p||_n!==null&&_n.memoizedState.tag&1){if(a.flags|=2048,Ia(9,Ih.bind(null,a,c,d,i),void 0,null),vn===null)throw Error(t(349));(qr&30)!==0||Dh(a,i,d)}return d}function Dh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Ih(n,i,a,c){i.value=a,i.getSnapshot=c,Fh(i)&&Oh(n)}function Uh(n,i,a){return a(function(){Fh(i)&&Oh(n)})}function Fh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!mi(n,a)}catch{return!0}}function Oh(n){var i=Ki(n,1);i!==null&&Si(i,n,1,-1)}function kh(n){var i=Ii();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},i.queue=n,n=n.dispatch=Q0.bind(null,Qt,n),[i.memoizedState,n]}function Ia(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Bh(){return oi().memoizedState}function Wo(n,i,a,c){var d=Ii();Qt.flags|=n,d.memoizedState=Ia(1|i,a,void 0,c===void 0?null:c)}function jo(n,i,a,c){var d=oi();c=c===void 0?null:c;var p=void 0;if(hn!==null){var T=hn.memoizedState;if(p=T.destroy,c!==null&&Jc(c,T.deps)){d.memoizedState=Ia(i,a,p,c);return}}Qt.flags|=n,d.memoizedState=Ia(1|i,a,p,c)}function zh(n,i){return Wo(8390656,8,n,i)}function iu(n,i){return jo(2048,8,n,i)}function Gh(n,i){return jo(4,2,n,i)}function Hh(n,i){return jo(4,4,n,i)}function Vh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Wh(n,i,a){return a=a!=null?a.concat([n]):null,jo(4,4,Vh.bind(null,i,n),a)}function ru(){}function jh(n,i){var a=oi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Xh(n,i){var a=oi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Yh(n,i,a){return(qr&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=a):(mi(a,i)||(a=Lt(),Qt.lanes|=a,$r|=a,n.baseState=!0),i)}function Z0(n,i){var a=Je;Je=a!==0&&4>a?a:4,n(!0);var c=Zc.transition;Zc.transition={};try{n(!1),i()}finally{Je=a,Zc.transition=c}}function qh(){return oi().memoizedState}function J0(n,i,a){var c=Er(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},$h(n))Kh(i,a);else if(a=Ah(n,i,a,c),a!==null){var d=kn();Si(a,n,c,d),Zh(a,i,c)}}function Q0(n,i,a){var c=Er(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if($h(n))Kh(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,O=p(T,a);if(d.hasEagerState=!0,d.eagerState=O,mi(O,T)){var W=i.interleaved;W===null?(d.next=d,jc(i)):(d.next=W.next,W.next=d),i.interleaved=d;return}}catch{}finally{}a=Ah(n,i,d,c),a!==null&&(d=kn(),Si(a,n,c,d),Zh(a,i,c))}}function $h(n){var i=n.alternate;return n===Qt||i!==null&&i===Qt}function Kh(n,i){Pa=Vo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Zh(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,dn(n,a)}}var Xo={readContext:ai,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},ex={readContext:ai,useCallback:function(n,i){return Ii().memoizedState=[n,i===void 0?null:i],n},useContext:ai,useEffect:zh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Wo(4194308,4,Vh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Wo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Wo(4,2,n,i)},useMemo:function(n,i){var a=Ii();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ii();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=J0.bind(null,Qt,n),[c.memoizedState,n]},useRef:function(n){var i=Ii();return n={current:n},i.memoizedState=n},useState:kh,useDebugValue:ru,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=kh(!1),i=n[0];return n=Z0.bind(null,n[1]),Ii().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Qt,d=Ii();if(qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),vn===null)throw Error(t(349));(qr&30)!==0||Dh(c,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,zh(Uh.bind(null,c,p,n),[n]),c.flags|=2048,Ia(9,Ih.bind(null,c,p,a,i),void 0,null),a},useId:function(){var n=Ii(),i=vn.identifierPrefix;if(qt){var a=$i,c=qi;a=(c&~(1<<32-J(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=La++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=K0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},tx={readContext:ai,useCallback:jh,useContext:ai,useEffect:iu,useImperativeHandle:Wh,useInsertionEffect:Gh,useLayoutEffect:Hh,useMemo:Xh,useReducer:tu,useRef:Bh,useState:function(){return tu(Da)},useDebugValue:ru,useDeferredValue:function(n){var i=oi();return Yh(i,hn.memoizedState,n)},useTransition:function(){var n=tu(Da)[0],i=oi().memoizedState;return[n,i]},useMutableSource:Ph,useSyncExternalStore:Lh,useId:qh,unstable_isNewReconciler:!1},nx={readContext:ai,useCallback:jh,useContext:ai,useEffect:iu,useImperativeHandle:Wh,useInsertionEffect:Gh,useLayoutEffect:Hh,useMemo:Xh,useReducer:nu,useRef:Bh,useState:function(){return nu(Da)},useDebugValue:ru,useDeferredValue:function(n){var i=oi();return hn===null?i.memoizedState=n:Yh(i,hn.memoizedState,n)},useTransition:function(){var n=nu(Da)[0],i=oi().memoizedState;return[n,i]},useMutableSource:Ph,useSyncExternalStore:Lh,useId:qh,unstable_isNewReconciler:!1};function xi(n,i){if(n&&n.defaultProps){i=$({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function su(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:$({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Yo={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=kn(),d=Er(n),p=Zi(c,d);p.payload=i,a!=null&&(p.callback=a),i=vr(n,p,d),i!==null&&(Si(i,n,d,c),Bo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=kn(),d=Er(n),p=Zi(c,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=vr(n,p,d),i!==null&&(Si(i,n,d,c),Bo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=kn(),c=Er(n),d=Zi(a,c);d.tag=2,i!=null&&(d.callback=i),i=vr(n,d,c),i!==null&&(Si(i,n,c,a),Bo(i,n,c))}};function Jh(n,i,a,c,d,p,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,T):i.prototype&&i.prototype.isPureReactComponent?!Sa(a,c)||!Sa(d,p):!0}function Qh(n,i,a){var c=!1,d=gr,p=i.contextType;return typeof p=="object"&&p!==null?p=ai(p):(d=Hn(i)?Vr:Cn.current,c=i.contextTypes,p=(c=c!=null)?Es(n,d):gr),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Yo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function ep(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Yo.enqueueReplaceState(i,i.state,null)}function au(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Xc(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=ai(p):(p=Hn(i)?Vr:Cn.current,d.context=Es(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(su(n,i,p,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Yo.enqueueReplaceState(d,d.state,null),zo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,i){try{var a="",c=i;do a+=xe(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function ou(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function lu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var ix=typeof WeakMap=="function"?WeakMap:Map;function tp(n,i,a){a=Zi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){el||(el=!0,Eu=c),lu(n,i)},a}function np(n,i,a){a=Zi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){lu(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){lu(n,i),typeof c!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function ip(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new ix;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=xx.bind(null,n,i,a),i.then(n,n))}function rp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function sp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Zi(-1,1),i.tag=2,vr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var rx=P.ReactCurrentOwner,Vn=!1;function On(n,i,a,c){i.child=n===null?Th(i,null,a,c):bs(i,n.child,a,c)}function ap(n,i,a,c,d){a=a.render;var p=i.ref;return Cs(i,d),c=Qc(n,i,a,c,p,d),a=eu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ji(n,i,d)):(qt&&a&&Fc(i),i.flags|=1,On(n,i,c,d),i.child)}function op(n,i,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Nu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,lp(n,i,p,c,d)):(n=al(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var T=p.memoizedProps;if(a=a.compare,a=a!==null?a:Sa,a(T,c)&&n.ref===i.ref)return Ji(n,i,d)}return i.flags|=1,n=Tr(p,c),n.ref=i.ref,n.return=i,i.child=n}function lp(n,i,a,c,d){if(n!==null){var p=n.memoizedProps;if(Sa(p,c)&&n.ref===i.ref)if(Vn=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Vn=!0);else return i.lanes=n.lanes,Ji(n,i,d)}return cu(n,i,a,c,d)}function cp(n,i,a){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Ds,Qn),Qn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ot(Ds,Qn),Qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Ot(Ds,Qn),Qn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,Ot(Ds,Qn),Qn|=c;return On(n,i,d,a),i.child}function up(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function cu(n,i,a,c,d){var p=Hn(a)?Vr:Cn.current;return p=Es(i,p),Cs(i,d),a=Qc(n,i,a,c,p,d),c=eu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ji(n,i,d)):(qt&&c&&Fc(i),i.flags|=1,On(n,i,a,d),i.child)}function dp(n,i,a,c,d){if(Hn(a)){var p=!0;Po(i)}else p=!1;if(Cs(i,d),i.stateNode===null)$o(n,i),Qh(i,a,c),au(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,O=i.memoizedProps;T.props=O;var W=T.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=ai(ce):(ce=Hn(a)?Vr:Cn.current,ce=Es(i,ce));var Me=a.getDerivedStateFromProps,we=typeof Me=="function"||typeof T.getSnapshotBeforeUpdate=="function";we||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==c||W!==ce)&&ep(i,T,c,ce),_r=!1;var Se=i.memoizedState;T.state=Se,zo(i,c,T,d),W=i.memoizedState,O!==c||Se!==W||Gn.current||_r?(typeof Me=="function"&&(su(i,a,Me,c),W=i.memoizedState),(O=_r||Jh(i,a,O,c,Se,W,ce))?(we||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),T.props=c,T.state=W,T.context=ce,c=O):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,bh(n,i),O=i.memoizedProps,ce=i.type===i.elementType?O:xi(i.type,O),T.props=ce,we=i.pendingProps,Se=T.context,W=a.contextType,typeof W=="object"&&W!==null?W=ai(W):(W=Hn(a)?Vr:Cn.current,W=Es(i,W));var He=a.getDerivedStateFromProps;(Me=typeof He=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==we||Se!==W)&&ep(i,T,c,W),_r=!1,Se=i.memoizedState,T.state=Se,zo(i,c,T,d);var Ke=i.memoizedState;O!==we||Se!==Ke||Gn.current||_r?(typeof He=="function"&&(su(i,a,He,c),Ke=i.memoizedState),(ce=_r||Jh(i,a,ce,c,Se,Ke,W)||!1)?(Me||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ke,W),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ke,W)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ke),T.props=c,T.state=Ke,T.context=W,c=ce):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),c=!1)}return uu(n,i,a,c,p,d)}function uu(n,i,a,c,d,p){up(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&gh(i,a,!1),Ji(n,i,p);c=i.stateNode,rx.current=i;var O=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=bs(i,n.child,null,p),i.child=bs(i,null,O,p)):On(n,i,O,p),i.memoizedState=c.state,d&&gh(i,a,!0),i.child}function fp(n){var i=n.stateNode;i.pendingContext?ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ph(n,i.context,!1),Yc(n,i.containerInfo)}function hp(n,i,a,c,d){return As(),zc(d),i.flags|=256,On(n,i,a,c),i.child}var du={dehydrated:null,treeContext:null,retryLane:0};function fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function pp(n,i,a){var c=i.pendingProps,d=Jt.current,p=!1,T=(i.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(d&2)!==0),O?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ot(Jt,d&1),n===null)return Bc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,p?(c=i.mode,p=i.child,T={mode:"hidden",children:T},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=T):p=ol(T,c,0,null),n=Qr(n,c,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=fu(a),i.memoizedState=du,n):hu(i,T));if(d=n.memoizedState,d!==null&&(O=d.dehydrated,O!==null))return sx(n,i,T,c,O,d,a);if(p){p=c.fallback,T=i.mode,d=n.child,O=d.sibling;var W={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=Tr(d,W),c.subtreeFlags=d.subtreeFlags&14680064),O!==null?p=Tr(O,p):(p=Qr(p,T,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,T=n.child.memoizedState,T=T===null?fu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=n.childLanes&~a,i.memoizedState=du,c}return p=n.child,n=p.sibling,c=Tr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function hu(n,i){return i=ol({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function qo(n,i,a,c){return c!==null&&zc(c),bs(i,n.child,null,a),n=hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function sx(n,i,a,c,d,p,T){if(a)return i.flags&256?(i.flags&=-257,c=ou(Error(t(422))),qo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=ol({mode:"visible",children:c.children},d,0,null),p=Qr(p,d,T,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&bs(i,n.child,null,T),i.child.memoizedState=fu(T),i.memoizedState=du,p);if((i.mode&1)===0)return qo(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var O=c.dgst;return c=O,p=Error(t(419)),c=ou(p,c,void 0),qo(n,i,T,c)}if(O=(T&n.childLanes)!==0,Vn||O){if(c=vn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ki(n,d),Si(c,n,d,-1))}return Cu(),c=ou(Error(t(421))),qo(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=_x.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,Jn=pr(d.nextSibling),Zn=i,qt=!0,gi=null,n!==null&&(ri[si++]=qi,ri[si++]=$i,ri[si++]=Wr,qi=n.id,$i=n.overflow,Wr=i),i=hu(i,c.children),i.flags|=4096,i)}function mp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Wc(n.return,i,a)}function pu(n,i,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function gp(n,i,a){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(On(n,i,c.children,a),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mp(n,a,i);else if(n.tag===19)mp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ot(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Go(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),pu(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Go(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}pu(i,!0,a,null,p);break;case"together":pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $o(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),$r|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Tr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Tr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function ax(n,i,a){switch(i.tag){case 3:fp(i),As();break;case 5:Nh(i);break;case 1:Hn(i.type)&&Po(i);break;case 4:Yc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ot(Oo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ot(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?pp(n,i,a):(Ot(Jt,Jt.current&1),n=Ji(n,i,a),n!==null?n.sibling:null);Ot(Jt,Jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return gp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ot(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,cp(n,i,a)}return Ji(n,i,a)}var xp,mu,_p,vp;xp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},mu=function(){},_p=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Yr(Di.current);var p=null;switch(a){case"input":d=lt(n,d),c=lt(n,c),p=[];break;case"select":d=$({},d,{value:void 0}),c=$({},c,{value:void 0}),p=[];break;case"textarea":d=It(n,d),c=It(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ro)}ge(a,c);var T;a=null;for(ce in d)if(!c.hasOwnProperty(ce)&&d.hasOwnProperty(ce)&&d[ce]!=null)if(ce==="style"){var O=d[ce];for(T in O)O.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?p||(p=[]):(p=p||[]).push(ce,null));for(ce in c){var W=c[ce];if(O=d!=null?d[ce]:void 0,c.hasOwnProperty(ce)&&W!==O&&(W!=null||O!=null))if(ce==="style")if(O){for(T in O)!O.hasOwnProperty(T)||W&&W.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in W)W.hasOwnProperty(T)&&O[T]!==W[T]&&(a||(a={}),a[T]=W[T])}else a||(p||(p=[]),p.push(ce,a)),a=W;else ce==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,O=O?O.__html:void 0,W!=null&&O!==W&&(p=p||[]).push(ce,W)):ce==="children"?typeof W!="string"&&typeof W!="number"||(p=p||[]).push(ce,""+W):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(W!=null&&ce==="onScroll"&&zt("scroll",n),p||O===W||(p=[])):(p=p||[]).push(ce,W))}a&&(p=p||[]).push("style",a);var ce=p;(i.updateQueue=ce)&&(i.flags|=4)}},vp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ua(n,i){if(!qt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function ox(n,i,a){var c=i.pendingProps;switch(Oc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(i),null;case 1:return Hn(i.type)&&No(),Pn(i),null;case 3:return c=i.stateNode,Ns(),Gt(Gn),Gt(Cn),Kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Uo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gi!==null&&(Au(gi),gi=null))),mu(n,i),Pn(i),null;case 5:qc(i);var d=Yr(Na.current);if(a=i.type,n!==null&&i.stateNode!=null)_p(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Pn(i),null}if(n=Yr(Di.current),Uo(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[Li]=i,c[Ta]=p,n=(i.mode&1)!==0,a){case"dialog":zt("cancel",c),zt("close",c);break;case"iframe":case"object":case"embed":zt("load",c);break;case"video":case"audio":for(d=0;d<Ma.length;d++)zt(Ma[d],c);break;case"source":zt("error",c);break;case"img":case"image":case"link":zt("error",c),zt("load",c);break;case"details":zt("toggle",c);break;case"input":Ht(c,p),zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},zt("invalid",c);break;case"textarea":Wt(c,p),zt("invalid",c)}ge(a,p),d=null;for(var T in p)if(p.hasOwnProperty(T)){var O=p[T];T==="children"?typeof O=="string"?c.textContent!==O&&(p.suppressHydrationWarning!==!0&&bo(c.textContent,O,n),d=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(p.suppressHydrationWarning!==!0&&bo(c.textContent,O,n),d=["children",""+O]):o.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&zt("scroll",c)}switch(a){case"input":et(c),wt(c,p,!0);break;case"textarea":et(c),ln(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ro)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=At(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Li]=i,n[Ta]=c,xp(n,i,!1,!1),i.stateNode=n;e:{switch(T=be(a,c),a){case"dialog":zt("cancel",n),zt("close",n),d=c;break;case"iframe":case"object":case"embed":zt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ma.length;d++)zt(Ma[d],n);d=c;break;case"source":zt("error",n),d=c;break;case"img":case"image":case"link":zt("error",n),zt("load",n),d=c;break;case"details":zt("toggle",n),d=c;break;case"input":Ht(n,c),d=lt(n,c),zt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=$({},c,{value:void 0}),zt("invalid",n);break;case"textarea":Wt(n,c),d=It(n,c),zt("invalid",n);break;default:d=c}ge(a,d),O=d;for(p in O)if(O.hasOwnProperty(p)){var W=O[p];p==="style"?ee(n,W):p==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&jt(n,W)):p==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&Ve(n,W):typeof W=="number"&&Ve(n,""+W):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?W!=null&&p==="onScroll"&&zt("scroll",n):W!=null&&F(n,p,W,T))}switch(a){case"input":et(n),wt(n,c,!1);break;case"textarea":et(n),ln(n);break;case"option":c.value!=null&&n.setAttribute("value",""+_e(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Vt(n,!!c.multiple,p,!1):c.defaultValue!=null&&Vt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ro)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Pn(i),null;case 6:if(n&&i.stateNode!=null)vp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Yr(Na.current),Yr(Di.current),Uo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Li]=i,(p=c.nodeValue!==a)&&(n=Zn,n!==null))switch(n.tag){case 3:bo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&bo(c.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Li]=i,i.stateNode=c}return Pn(i),null;case 13:if(Gt(Jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qt&&Jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Mh(),As(),i.flags|=98560,p=!1;else if(p=Uo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Li]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Pn(i),p=!1}else gi!==null&&(Au(gi),gi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?pn===0&&(pn=3):Cu())),i.updateQueue!==null&&(i.flags|=4),Pn(i),null);case 4:return Ns(),mu(n,i),n===null&&Ea(i.stateNode.containerInfo),Pn(i),null;case 10:return Vc(i.type._context),Pn(i),null;case 17:return Hn(i.type)&&No(),Pn(i),null;case 19:if(Gt(Jt),p=i.memoizedState,p===null)return Pn(i),null;if(c=(i.flags&128)!==0,T=p.rendering,T===null)if(c)Ua(p,!1);else{if(pn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Go(n),T!==null){for(i.flags|=128,Ua(p,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,n=c,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,n=T.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ot(Jt,Jt.current&1|2),i.child}n=n.sibling}p.tail!==null&&Xt()>Is&&(i.flags|=128,c=!0,Ua(p,!1),i.lanes=4194304)}else{if(!c)if(n=Go(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ua(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!qt)return Pn(i),null}else 2*Xt()-p.renderingStartTime>Is&&a!==1073741824&&(i.flags|=128,c=!0,Ua(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(a=p.last,a!==null?a.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Xt(),i.sibling=null,a=Jt.current,Ot(Jt,c?a&1|2:a&1),i):(Pn(i),null);case 22:case 23:return Ru(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Qn&1073741824)!==0&&(Pn(i),i.subtreeFlags&6&&(i.flags|=8192)):Pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function lx(n,i){switch(Oc(i),i.tag){case 1:return Hn(i.type)&&No(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ns(),Gt(Gn),Gt(Cn),Kc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return qc(i),null;case 13:if(Gt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));As()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Gt(Jt),null;case 4:return Ns(),null;case 10:return Vc(i.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var Ko=!1,Ln=!1,cx=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Ls(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nn(n,i,c)}else a.current=null}function gu(n,i,a){try{a()}catch(c){nn(n,i,c)}}var Sp=!1;function ux(n,i){if(Rc=go,n=Jf(),Sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var T=0,O=-1,W=-1,ce=0,Me=0,we=n,Se=null;t:for(;;){for(var He;we!==a||d!==0&&we.nodeType!==3||(O=T+d),we!==p||c!==0&&we.nodeType!==3||(W=T+c),we.nodeType===3&&(T+=we.nodeValue.length),(He=we.firstChild)!==null;)Se=we,we=He;for(;;){if(we===n)break t;if(Se===a&&++ce===d&&(O=T),Se===p&&++Me===c&&(W=T),(He=we.nextSibling)!==null)break;we=Se,Se=we.parentNode}we=He}a=O===-1||W===-1?null:{start:O,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:n,selectionRange:a},go=!1,Xe=i;Xe!==null;)if(i=Xe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Xe=n;else for(;Xe!==null;){i=Xe;try{var Ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Ze=Ke.memoizedProps,on=Ke.memoizedState,ie=i.stateNode,Y=ie.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:xi(i.type,Ze),on);ie.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var oe=i.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ne){nn(i,i.return,Ne)}if(n=i.sibling,n!==null){n.return=i.return,Xe=n;break}Xe=i.return}return Ke=Sp,Sp=!1,Ke}function Fa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&gu(i,a,p)}d=d.next}while(d!==c)}}function Zo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function xu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function yp(n){var i=n.alternate;i!==null&&(n.alternate=null,yp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Li],delete i[Ta],delete i[Dc],delete i[X0],delete i[Y0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mp(n){return n.tag===5||n.tag===3||n.tag===4}function Ep(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Mp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ro));else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}function vu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(vu(n,i,a),n=n.sibling;n!==null;)vu(n,i,a),n=n.sibling}var En=null,_i=!1;function Sr(n,i,a){for(a=a.child;a!==null;)wp(n,i,a),a=a.sibling}function wp(n,i,a){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(H,a)}catch{}switch(a.tag){case 5:Ln||Ls(a,i);case 6:var c=En,d=_i;En=null,Sr(n,i,a),En=c,_i=d,En!==null&&(_i?(n=En,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):En.removeChild(a.stateNode));break;case 18:En!==null&&(_i?(n=En,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),pa(n)):Lc(En,a.stateNode));break;case 4:c=En,d=_i,En=a.stateNode.containerInfo,_i=!0,Sr(n,i,a),En=c,_i=d;break;case 0:case 11:case 14:case 15:if(!Ln&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,T=p.destroy;p=p.tag,T!==void 0&&((p&2)!==0||(p&4)!==0)&&gu(a,i,T),d=d.next}while(d!==c)}Sr(n,i,a);break;case 1:if(!Ln&&(Ls(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(O){nn(a,i,O)}Sr(n,i,a);break;case 21:Sr(n,i,a);break;case 22:a.mode&1?(Ln=(c=Ln)||a.memoizedState!==null,Sr(n,i,a),Ln=c):Sr(n,i,a);break;default:Sr(n,i,a)}}function Tp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new cx),i.forEach(function(c){var d=vx.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function vi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,T=i,O=T;e:for(;O!==null;){switch(O.tag){case 5:En=O.stateNode,_i=!1;break e;case 3:En=O.stateNode.containerInfo,_i=!0;break e;case 4:En=O.stateNode.containerInfo,_i=!0;break e}O=O.return}if(En===null)throw Error(t(160));wp(p,T,d),En=null,_i=!1;var W=d.alternate;W!==null&&(W.return=null),d.return=null}catch(ce){nn(d,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ap(i,n),i=i.sibling}function Ap(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(i,n),Ui(n),c&4){try{Fa(3,n,n.return),Zo(3,n)}catch(Ze){nn(n,n.return,Ze)}try{Fa(5,n,n.return)}catch(Ze){nn(n,n.return,Ze)}}break;case 1:vi(i,n),Ui(n),c&512&&a!==null&&Ls(a,a.return);break;case 5:if(vi(i,n),Ui(n),c&512&&a!==null&&Ls(a,a.return),n.flags&32){var d=n.stateNode;try{Ve(d,"")}catch(Ze){nn(n,n.return,Ze)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,T=a!==null?a.memoizedProps:p,O=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{O==="input"&&p.type==="radio"&&p.name!=null&&Ut(d,p),be(O,T);var ce=be(O,p);for(T=0;T<W.length;T+=2){var Me=W[T],we=W[T+1];Me==="style"?ee(d,we):Me==="dangerouslySetInnerHTML"?jt(d,we):Me==="children"?Ve(d,we):F(d,Me,we,ce)}switch(O){case"input":Bt(d,p);break;case"textarea":X(d,p);break;case"select":var Se=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var He=p.value;He!=null?Vt(d,!!p.multiple,He,!1):Se!==!!p.multiple&&(p.defaultValue!=null?Vt(d,!!p.multiple,p.defaultValue,!0):Vt(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ta]=p}catch(Ze){nn(n,n.return,Ze)}}break;case 6:if(vi(i,n),Ui(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(Ze){nn(n,n.return,Ze)}}break;case 3:if(vi(i,n),Ui(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{pa(i.containerInfo)}catch(Ze){nn(n,n.return,Ze)}break;case 4:vi(i,n),Ui(n);break;case 13:vi(i,n),Ui(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Mu=Xt())),c&4&&Tp(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(Ln=(ce=Ln)||Me,vi(i,n),Ln=ce):vi(i,n),Ui(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!Me&&(n.mode&1)!==0)for(Xe=n,Me=n.child;Me!==null;){for(we=Xe=Me;Xe!==null;){switch(Se=Xe,He=Se.child,Se.tag){case 0:case 11:case 14:case 15:Fa(4,Se,Se.return);break;case 1:Ls(Se,Se.return);var Ke=Se.stateNode;if(typeof Ke.componentWillUnmount=="function"){c=Se,a=Se.return;try{i=c,Ke.props=i.memoizedProps,Ke.state=i.memoizedState,Ke.componentWillUnmount()}catch(Ze){nn(c,a,Ze)}}break;case 5:Ls(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Cp(we);continue}}He!==null?(He.return=Se,Xe=He):Cp(we)}Me=Me.sibling}e:for(Me=null,we=n;;){if(we.tag===5){if(Me===null){Me=we;try{d=we.stateNode,ce?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(O=we.stateNode,W=we.memoizedProps.style,T=W!=null&&W.hasOwnProperty("display")?W.display:null,O.style.display=A("display",T))}catch(Ze){nn(n,n.return,Ze)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=ce?"":we.memoizedProps}catch(Ze){nn(n,n.return,Ze)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:vi(i,n),Ui(n),c&4&&Tp(n);break;case 21:break;default:vi(i,n),Ui(n)}}function Ui(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Mp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ve(d,""),c.flags&=-33);var p=Ep(n);vu(n,p,d);break;case 3:case 4:var T=c.stateNode.containerInfo,O=Ep(n);_u(n,O,T);break;default:throw Error(t(161))}}catch(W){nn(n,n.return,W)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function dx(n,i,a){Xe=n,bp(n)}function bp(n,i,a){for(var c=(n.mode&1)!==0;Xe!==null;){var d=Xe,p=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||Ko;if(!T){var O=d.alternate,W=O!==null&&O.memoizedState!==null||Ln;O=Ko;var ce=Ln;if(Ko=T,(Ln=W)&&!ce)for(Xe=d;Xe!==null;)T=Xe,W=T.child,T.tag===22&&T.memoizedState!==null?Np(d):W!==null?(W.return=T,Xe=W):Np(d);for(;p!==null;)Xe=p,bp(p),p=p.sibling;Xe=d,Ko=O,Ln=ce}Rp(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Xe=p):Rp(n)}}function Rp(n){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ln||Zo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ln)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:xi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Ch(i,p,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ch(i,T,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Me=ce.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&pa(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ln||i.flags&512&&xu(i)}catch(Se){nn(i,i.return,Se)}}if(i===n){Xe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function Cp(n){for(;Xe!==null;){var i=Xe;if(i===n){Xe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function Np(n){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Zo(4,i)}catch(W){nn(i,a,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(W){nn(i,d,W)}}var p=i.return;try{xu(i)}catch(W){nn(i,p,W)}break;case 5:var T=i.return;try{xu(i)}catch(W){nn(i,T,W)}}}catch(W){nn(i,i.return,W)}if(i===n){Xe=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Xe=O;break}Xe=i.return}}var fx=Math.ceil,Jo=P.ReactCurrentDispatcher,Su=P.ReactCurrentOwner,li=P.ReactCurrentBatchConfig,Tt=0,vn=null,cn=null,wn=0,Qn=0,Ds=mr(0),pn=0,Oa=null,$r=0,Qo=0,yu=0,ka=null,Wn=null,Mu=0,Is=1/0,Qi=null,el=!1,Eu=null,yr=null,tl=!1,Mr=null,nl=0,Ba=0,wu=null,il=-1,rl=0;function kn(){return(Tt&6)!==0?Xt():il!==-1?il:il=Xt()}function Er(n){return(n.mode&1)===0?1:(Tt&2)!==0&&wn!==0?wn&-wn:$0.transition!==null?(rl===0&&(rl=Lt()),rl):(n=Je,n!==0||(n=window.event,n=n===void 0?16:Lf(n.type)),n)}function Si(n,i,a,c){if(50<Ba)throw Ba=0,wu=null,Error(t(185));tn(n,a,c),((Tt&2)===0||n!==vn)&&(n===vn&&((Tt&2)===0&&(Qo|=a),pn===4&&wr(n,wn)),jn(n,c),a===1&&Tt===0&&(i.mode&1)===0&&(Is=Xt()+500,Lo&&xr()))}function jn(n,i){var a=n.callbackNode;pt(n,i);var c=ut(n,n===vn?wn:0);if(c===0)a!==null&&ca(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ca(a),i===1)n.tag===0?q0(Lp.bind(null,n)):xh(Lp.bind(null,n)),W0(function(){(Tt&6)===0&&xr()}),a=null;else{switch(Ni(c)){case 1:a=ua;break;case 4:a=ho;break;case 16:a=hs;break;case 536870912:a=R;break;default:a=hs}a=zp(a,Pp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Pp(n,i){if(il=-1,rl=0,(Tt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Us()&&n.callbackNode!==a)return null;var c=ut(n,n===vn?wn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=sl(n,c);else{i=c;var d=Tt;Tt|=2;var p=Ip();(vn!==n||wn!==i)&&(Qi=null,Is=Xt()+500,Zr(n,i));do try{mx();break}catch(O){Dp(n,O)}while(!0);Hc(),Jo.current=p,Tt=d,cn!==null?i=0:(vn=null,wn=0,i=pn)}if(i!==0){if(i===2&&(d=Yt(n),d!==0&&(c=d,i=Tu(n,d))),i===1)throw a=Oa,Zr(n,0),wr(n,c),jn(n,Xt()),a;if(i===6)wr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!hx(d)&&(i=sl(n,c),i===2&&(p=Yt(n),p!==0&&(c=p,i=Tu(n,p))),i===1))throw a=Oa,Zr(n,0),wr(n,c),jn(n,Xt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Jr(n,Wn,Qi);break;case 3:if(wr(n,c),(c&130023424)===c&&(i=Mu+500-Xt(),10<i)){if(ut(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){kn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Pc(Jr.bind(null,n,Wn,Qi),i);break}Jr(n,Wn,Qi);break;case 4:if(wr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-J(c);p=1<<T,T=i[T],T>d&&(d=T),c&=~p}if(c=d,c=Xt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*fx(c/1960))-c,10<c){n.timeoutHandle=Pc(Jr.bind(null,n,Wn,Qi),c);break}Jr(n,Wn,Qi);break;case 5:Jr(n,Wn,Qi);break;default:throw Error(t(329))}}}return jn(n,Xt()),n.callbackNode===a?Pp.bind(null,n):null}function Tu(n,i){var a=ka;return n.current.memoizedState.isDehydrated&&(Zr(n,i).flags|=256),n=sl(n,i),n!==2&&(i=Wn,Wn=a,i!==null&&Au(i)),n}function Au(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function hx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!mi(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function wr(n,i){for(i&=~yu,i&=~Qo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-J(i),c=1<<a;n[a]=-1,i&=~c}}function Lp(n){if((Tt&6)!==0)throw Error(t(327));Us();var i=ut(n,0);if((i&1)===0)return jn(n,Xt()),null;var a=sl(n,i);if(n.tag!==0&&a===2){var c=Yt(n);c!==0&&(i=c,a=Tu(n,c))}if(a===1)throw a=Oa,Zr(n,0),wr(n,i),jn(n,Xt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Jr(n,Wn,Qi),jn(n,Xt()),null}function bu(n,i){var a=Tt;Tt|=1;try{return n(i)}finally{Tt=a,Tt===0&&(Is=Xt()+500,Lo&&xr())}}function Kr(n){Mr!==null&&Mr.tag===0&&(Tt&6)===0&&Us();var i=Tt;Tt|=1;var a=li.transition,c=Je;try{if(li.transition=null,Je=1,n)return n()}finally{Je=c,li.transition=a,Tt=i,(Tt&6)===0&&xr()}}function Ru(){Qn=Ds.current,Gt(Ds)}function Zr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,V0(a)),cn!==null)for(a=cn.return;a!==null;){var c=a;switch(Oc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&No();break;case 3:Ns(),Gt(Gn),Gt(Cn),Kc();break;case 5:qc(c);break;case 4:Ns();break;case 13:Gt(Jt);break;case 19:Gt(Jt);break;case 10:Vc(c.type._context);break;case 22:case 23:Ru()}a=a.return}if(vn=n,cn=n=Tr(n.current,null),wn=Qn=i,pn=0,Oa=null,yu=Qo=$r=0,Wn=ka=null,Xr!==null){for(i=0;i<Xr.length;i++)if(a=Xr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var T=p.next;p.next=d,c.next=T}a.pending=c}Xr=null}return n}function Dp(n,i){do{var a=cn;try{if(Hc(),Ho.current=Xo,Vo){for(var c=Qt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Vo=!1}if(qr=0,_n=hn=Qt=null,Pa=!1,La=0,Su.current=null,a===null||a.return===null){pn=1,Oa=i,cn=null;break}e:{var p=n,T=a.return,O=a,W=i;if(i=wn,O.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ce=W,Me=O,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var He=rp(T);if(He!==null){He.flags&=-257,sp(He,T,O,p,i),He.mode&1&&ip(p,ce,i),i=He,W=ce;var Ke=i.updateQueue;if(Ke===null){var Ze=new Set;Ze.add(W),i.updateQueue=Ze}else Ke.add(W);break e}else{if((i&1)===0){ip(p,ce,i),Cu();break e}W=Error(t(426))}}else if(qt&&O.mode&1){var on=rp(T);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),sp(on,T,O,p,i),zc(Ps(W,O));break e}}p=W=Ps(W,O),pn!==4&&(pn=2),ka===null?ka=[p]:ka.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var ie=tp(p,W,i);Rh(p,ie);break e;case 1:O=W;var Y=p.type,oe=p.stateNode;if((p.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(yr===null||!yr.has(oe)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ne=np(p,O,i);Rh(p,Ne);break e}}p=p.return}while(p!==null)}Fp(a)}catch(Qe){i=Qe,cn===a&&a!==null&&(cn=a=a.return);continue}break}while(!0)}function Ip(){var n=Jo.current;return Jo.current=Xo,n===null?Xo:n}function Cu(){(pn===0||pn===3||pn===2)&&(pn=4),vn===null||($r&268435455)===0&&(Qo&268435455)===0||wr(vn,wn)}function sl(n,i){var a=Tt;Tt|=2;var c=Ip();(vn!==n||wn!==i)&&(Qi=null,Zr(n,i));do try{px();break}catch(d){Dp(n,d)}while(!0);if(Hc(),Tt=a,Jo.current=c,cn!==null)throw Error(t(261));return vn=null,wn=0,pn}function px(){for(;cn!==null;)Up(cn)}function mx(){for(;cn!==null&&!Gr();)Up(cn)}function Up(n){var i=Bp(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,i===null?Fp(n):cn=i,Su.current=null}function Fp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=ox(a,i,Qn),a!==null){cn=a;return}}else{if(a=lx(a,i),a!==null){a.flags&=32767,cn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pn=6,cn=null;return}}if(i=i.sibling,i!==null){cn=i;return}cn=i=n}while(i!==null);pn===0&&(pn=5)}function Jr(n,i,a){var c=Je,d=li.transition;try{li.transition=null,Je=1,gx(n,i,a,c)}finally{li.transition=d,Je=c}return null}function gx(n,i,a,c){do Us();while(Mr!==null);if((Tt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if($e(n,p),n===vn&&(cn=vn=null,wn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||tl||(tl=!0,zp(hs,function(){return Us(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=li.transition,li.transition=null;var T=Je;Je=1;var O=Tt;Tt|=4,Su.current=null,ux(n,a),Ap(a,n),F0(Cc),go=!!Rc,Cc=Rc=null,n.current=a,dx(a),lc(),Tt=O,Je=T,li.transition=p}else n.current=a;if(tl&&(tl=!1,Mr=n,nl=d),p=n.pendingLanes,p===0&&(yr=null),te(a.stateNode),jn(n,Xt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(el)throw el=!1,n=Eu,Eu=null,n;return(nl&1)!==0&&n.tag!==0&&Us(),p=n.pendingLanes,(p&1)!==0?n===wu?Ba++:(Ba=0,wu=n):Ba=0,xr(),null}function Us(){if(Mr!==null){var n=Ni(nl),i=li.transition,a=Je;try{if(li.transition=null,Je=16>n?16:n,Mr===null)var c=!1;else{if(n=Mr,Mr=null,nl=0,(Tt&6)!==0)throw Error(t(331));var d=Tt;for(Tt|=4,Xe=n.current;Xe!==null;){var p=Xe,T=p.child;if((Xe.flags&16)!==0){var O=p.deletions;if(O!==null){for(var W=0;W<O.length;W++){var ce=O[W];for(Xe=ce;Xe!==null;){var Me=Xe;switch(Me.tag){case 0:case 11:case 15:Fa(8,Me,p)}var we=Me.child;if(we!==null)we.return=Me,Xe=we;else for(;Xe!==null;){Me=Xe;var Se=Me.sibling,He=Me.return;if(yp(Me),Me===ce){Xe=null;break}if(Se!==null){Se.return=He,Xe=Se;break}Xe=He}}}var Ke=p.alternate;if(Ke!==null){var Ze=Ke.child;if(Ze!==null){Ke.child=null;do{var on=Ze.sibling;Ze.sibling=null,Ze=on}while(Ze!==null)}}Xe=p}}if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,Xe=T;else e:for(;Xe!==null;){if(p=Xe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Fa(9,p,p.return)}var ie=p.sibling;if(ie!==null){ie.return=p.return,Xe=ie;break e}Xe=p.return}}var Y=n.current;for(Xe=Y;Xe!==null;){T=Xe;var oe=T.child;if((T.subtreeFlags&2064)!==0&&oe!==null)oe.return=T,Xe=oe;else e:for(T=Y;Xe!==null;){if(O=Xe,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Zo(9,O)}}catch(Qe){nn(O,O.return,Qe)}if(O===T){Xe=null;break e}var Ne=O.sibling;if(Ne!==null){Ne.return=O.return,Xe=Ne;break e}Xe=O.return}}if(Tt=d,xr(),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(H,n)}catch{}c=!0}return c}finally{Je=a,li.transition=i}}return!1}function Op(n,i,a){i=Ps(a,i),i=tp(n,i,1),n=vr(n,i,1),i=kn(),n!==null&&(tn(n,1,i),jn(n,i))}function nn(n,i,a){if(n.tag===3)Op(n,n,a);else for(;i!==null;){if(i.tag===3){Op(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(yr===null||!yr.has(c))){n=Ps(a,n),n=np(i,n,1),i=vr(i,n,1),n=kn(),i!==null&&(tn(i,1,n),jn(i,n));break}}i=i.return}}function xx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=kn(),n.pingedLanes|=n.suspendedLanes&a,vn===n&&(wn&a)===a&&(pn===4||pn===3&&(wn&130023424)===wn&&500>Xt()-Mu?Zr(n,0):yu|=a),jn(n,i)}function kp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ye,Ye<<=1,(Ye&130023424)===0&&(Ye=4194304)));var a=kn();n=Ki(n,i),n!==null&&(tn(n,i,a),jn(n,a))}function _x(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),kp(n,a)}function vx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),kp(n,a)}var Bp;Bp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gn.current)Vn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Vn=!1,ax(n,i,a);Vn=(n.flags&131072)!==0}else Vn=!1,qt&&(i.flags&1048576)!==0&&_h(i,Io,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;$o(n,i),n=i.pendingProps;var d=Es(i,Cn.current);Cs(i,a),d=Qc(null,i,c,n,d,a);var p=eu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Hn(c)?(p=!0,Po(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Xc(i),d.updater=Yo,i.stateNode=d,d._reactInternals=i,au(i,c,n,a),i=uu(null,i,c,!0,p,a)):(i.tag=0,qt&&p&&Fc(i),On(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch($o(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=yx(c),n=xi(c,n),d){case 0:i=cu(null,i,c,n,a);break e;case 1:i=dp(null,i,c,n,a);break e;case 11:i=ap(null,i,c,n,a);break e;case 14:i=op(null,i,c,xi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),cu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),dp(n,i,c,d,a);case 3:e:{if(fp(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,bh(n,i),zo(i,c,null,a);var T=i.memoizedState;if(c=T.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Ps(Error(t(423)),i),i=hp(n,i,c,a,d);break e}else if(c!==d){d=Ps(Error(t(424)),i),i=hp(n,i,c,a,d);break e}else for(Jn=pr(i.stateNode.containerInfo.firstChild),Zn=i,qt=!0,gi=null,a=Th(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(As(),c===d){i=Ji(n,i,a);break e}On(n,i,c,a)}i=i.child}return i;case 5:return Nh(i),n===null&&Bc(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,T=d.children,Nc(c,d)?T=null:p!==null&&Nc(c,p)&&(i.flags|=32),up(n,i),On(n,i,T,a),i.child;case 6:return n===null&&Bc(i),null;case 13:return pp(n,i,a);case 4:return Yc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=bs(i,null,c,a):On(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),ap(n,i,c,d,a);case 7:return On(n,i,i.pendingProps,a),i.child;case 8:return On(n,i,i.pendingProps.children,a),i.child;case 12:return On(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,T=d.value,Ot(Oo,c._currentValue),c._currentValue=T,p!==null)if(mi(p.value,T)){if(p.children===d.children&&!Gn.current){i=Ji(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var O=p.dependencies;if(O!==null){T=p.child;for(var W=O.firstContext;W!==null;){if(W.context===c){if(p.tag===1){W=Zi(-1,a&-a),W.tag=2;var ce=p.updateQueue;if(ce!==null){ce=ce.shared;var Me=ce.pending;Me===null?W.next=W:(W.next=Me.next,Me.next=W),ce.pending=W}}p.lanes|=a,W=p.alternate,W!==null&&(W.lanes|=a),Wc(p.return,a,i),O.lanes|=a;break}W=W.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(t(341));T.lanes|=a,O=T.alternate,O!==null&&(O.lanes|=a),Wc(T,a,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}On(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Cs(i,a),d=ai(d),c=c(d),i.flags|=1,On(n,i,c,a),i.child;case 14:return c=i.type,d=xi(c,i.pendingProps),d=xi(c.type,d),op(n,i,c,d,a);case 15:return lp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xi(c,d),$o(n,i),i.tag=1,Hn(c)?(n=!0,Po(i)):n=!1,Cs(i,a),Qh(i,c,d),au(i,c,d,a),uu(null,i,c,!0,n,a);case 19:return gp(n,i,a);case 22:return cp(n,i,a)}throw Error(t(156,i.tag))};function zp(n,i){return la(n,i)}function Sx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(n,i,a,c){return new Sx(n,i,a,c)}function Nu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function yx(n){if(typeof n=="function")return Nu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===re)return 14}return 2}function Tr(n,i){var a=n.alternate;return a===null?(a=ci(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function al(n,i,a,c,d,p){var T=2;if(c=n,typeof n=="function")Nu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case E:return Qr(a.children,d,p,i);case b:T=8,d|=8;break;case V:return n=ci(12,a,i,d|2),n.elementType=V,n.lanes=p,n;case se:return n=ci(13,a,i,d),n.elementType=se,n.lanes=p,n;case z:return n=ci(19,a,i,d),n.elementType=z,n.lanes=p,n;case K:return ol(a,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:T=10;break e;case j:T=9;break e;case q:T=11;break e;case re:T=14;break e;case ue:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ci(T,a,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function Qr(n,i,a,c){return n=ci(7,n,c,i),n.lanes=a,n}function ol(n,i,a,c){return n=ci(22,n,c,i),n.elementType=K,n.lanes=a,n.stateNode={isHidden:!1},n}function Pu(n,i,a){return n=ci(6,n,null,i),n.lanes=a,n}function Lu(n,i,a){return i=ci(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Mx(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nt(0),this.expirationTimes=Nt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Du(n,i,a,c,d,p,T,O,W){return n=new Mx(n,i,a,O,W),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ci(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(p),n}function Ex(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Gp(n){if(!n)return gr;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Hn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Hn(a))return mh(n,a,i)}return i}function Hp(n,i,a,c,d,p,T,O,W){return n=Du(a,c,!0,n,d,p,T,O,W),n.context=Gp(null),a=n.current,c=kn(),d=Er(a),p=Zi(c,d),p.callback=i??null,vr(a,p,d),n.current.lanes=d,tn(n,d,c),jn(n,c),n}function ll(n,i,a,c){var d=i.current,p=kn(),T=Er(d);return a=Gp(a),i.context===null?i.context=a:i.pendingContext=a,i=Zi(p,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=vr(d,i,T),n!==null&&(Si(n,d,T,p),Bo(n,d,T)),T}function cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Vp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Iu(n,i){Vp(n,i),(n=n.alternate)&&Vp(n,i)}function wx(){return null}var Wp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uu(n){this._internalRoot=n}ul.prototype.render=Uu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ll(n,i,null,null)},ul.prototype.unmount=Uu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Kr(function(){ll(null,n,null,null)}),i[Xi]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=Pi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<dr.length&&i!==0&&i<dr[a].priority;a++);dr.splice(a,0,n),a===0&&Nf(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jp(){}function Tx(n,i,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var ce=cl(T);p.call(ce)}}var T=Hp(i,c,n,0,null,!1,!1,"",jp);return n._reactRootContainer=T,n[Xi]=T.current,Ea(n.nodeType===8?n.parentNode:n),Kr(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var O=c;c=function(){var ce=cl(W);O.call(ce)}}var W=Du(n,0,!1,null,null,!1,!1,"",jp);return n._reactRootContainer=W,n[Xi]=W.current,Ea(n.nodeType===8?n.parentNode:n),Kr(function(){ll(i,W,a,c)}),W}function fl(n,i,a,c,d){var p=a._reactRootContainer;if(p){var T=p;if(typeof d=="function"){var O=d;d=function(){var W=cl(T);O.call(W)}}ll(i,T,n,d)}else T=Tx(a,i,n,d,c);return cl(T)}fn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=st(i.pendingLanes);a!==0&&(dn(i,a|1),jn(i,Xt()),(Tt&6)===0&&(Is=Xt()+500,xr()))}break;case 13:Kr(function(){var c=Ki(n,1);if(c!==null){var d=kn();Si(c,n,1,d)}}),Iu(n,1)}},cr=function(n){if(n.tag===13){var i=Ki(n,134217728);if(i!==null){var a=kn();Si(i,n,134217728,a)}Iu(n,134217728)}},pi=function(n){if(n.tag===13){var i=Er(n),a=Ki(n,i);if(a!==null){var c=kn();Si(a,n,i,c)}Iu(n,i)}},Pi=function(){return Je},_t=function(n,i){var a=Je;try{return Je=n,i()}finally{Je=a}},he=function(n,i,a){switch(i){case"input":if(Bt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Co(c);if(!d)throw Error(t(90));gt(c),Bt(c,d)}}}break;case"textarea":X(n,a);break;case"select":i=a.value,i!=null&&Vt(n,!!a.multiple,i,!1)}},Te=bu,me=Kr;var Ax={usingClientEntryPoint:!1,Events:[Aa,ys,Co,de,Ce,bu]},za={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bx={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=oa(n),n===null?null:n.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{H=hl.inject(bx),ae=hl}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax,Xn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(i))throw Error(t(200));return Ex(n,i,null,a)},Xn.createRoot=function(n,i){if(!Fu(n))throw Error(t(299));var a=!1,c="",d=Wp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Du(n,1,!1,null,null,a,!1,c,d),n[Xi]=i.current,Ea(n.nodeType===8?n.parentNode:n),new Uu(i)},Xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=oa(i),n=n===null?null:n.stateNode,n},Xn.flushSync=function(n){return Kr(n)},Xn.hydrate=function(n,i,a){if(!dl(i))throw Error(t(200));return fl(null,n,i,!0,a)},Xn.hydrateRoot=function(n,i,a){if(!Fu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",T=Wp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Hp(i,null,n,1,a??null,d,!1,p,T),n[Xi]=i.current,Ea(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ul(i)},Xn.render=function(n,i,a){if(!dl(i))throw Error(t(200));return fl(null,n,i,!1,a)},Xn.unmountComponentAtNode=function(n){if(!dl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1},Xn.unstable_batchedUpdates=bu,Xn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!dl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,i,a,!1,c)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var Qp;function Fx(){if(Qp)return Bu.exports;Qp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Bu.exports=Ux(),Bu.exports}var em;function Ox(){if(em)return pl;em=1;var s=Fx();return pl.createRoot=s.createRoot,pl.hydrateRoot=s.hydrateRoot,pl}var kx=Ox();const Bx=tg(kx),Yn={MOON:"moon",MARS:"mars"},zi={CADET:"cadet",ENGINEER:"engineer",COMMANDER:"commander"},Un={BRIEFING:"briefing",PLAYING:"playing",VICTORY:"victory",GAMEOVER:"gameover"},Tn={CLEAR:"clear",DUST_STORM:"dust_storm",ECLIPSE:"eclipse",SOLAR_FLARE:"solar_flare"};function xd(s=Yn.MARS,e=zi.ENGINEER,t="Commander"){const r=s===Yn.MOON,o=e===zi.CADET,l=e===zi.COMMANDER,u=o?1.25:l?.85:1;return{meta:{location:s,difficulty:e,commanderName:t.trim()||"Commander",currentSol:1,maxSols:30,status:Un.BRIEFING,gameOverReason:"",isVictory:!1},resources:{energy:Math.round(90*u),energyCap:130,oxygen:100,water:Math.round(110*u),waterMax:400,food:Math.round(120*u),foodMax:300,radiationDose:0,radiationDaily:r?20:14,crewHealth:100,payloadPoints:o?150:l?50:100},crew:{total:6,available:0,assigned:{energy:1,lifeSupport:2,agro:2,shieldAndRepair:1}},powerAllocation:{lifeSupport:100,agro:100,shield:100},modules:{solarLevel:1,nuclearLevel:1,lifeSupportLevel:1,agroLevel:1,shieldLevel:1,shieldType:"none",activeUpgrades:[]},environment:{weather:Tn.CLEAR,weatherDuration:0,forecast:"Ясно. Стабильный радиационный фон."},history:[],activeEvent:null}}const Ka={O2_KG_PER_PERSON:.84,WATER_L_PER_PERSON:3.5,FOOD_KG_PER_PERSON:.62},br={O2_PERCENT_CONVERSION_RATIO:2.5,HEALTH_RECOVERY_RATE:2,HEALTH_PENALTY_NO_O2:35,HEALTH_PENALTY_NO_WATER:20,HEALTH_PENALTY_NO_FOOD:8,RADIATION_SICKNESS_THRESHOLD:500},$s={moon:{name:"База «Артемида» (Кратер Шеклтон)",ambientRadiation:20,solarIrradianceBase:65,nuclearOutputBase:45,basePowerDraw:15,waterExtractionCostPerLiter:1.5,resupplyInterval:10,resupplyPayload:{food:80,water:90,payloadPoints:60},dustImpact:.1},mars:{name:"База «Арес» (Равнина Езеро)",ambientRadiation:14,solarIrradianceBase:38,nuclearOutputBase:50,basePowerDraw:18,waterExtractionCostPerLiter:.8,resupplyInterval:20,resupplyPayload:{food:120,water:140,payloadPoints:100},dustImpact:.8}},es={lifeSupportPerCrew:4.5,agroBase:25,agroPerLevel:15,shieldMagnetic:35},Hu={regolith:.6,water:.75,magnetic:.9},Yl={cadet:{resourceMultiplier:1.25,eventChance:.2,consumptionRate:.85,wearRate:.5},engineer:{resourceMultiplier:1,eventChance:.35,consumptionRate:1,wearRate:1},commander:{resourceMultiplier:.85,eventChance:.45,consumptionRate:1.15,wearRate:1.5}},ng={createSnapshot(s,e={},t=null){return{sol:s.meta.currentSol,resources:{...s.resources},powerAllocation:{...s.powerAllocation},crewAssigned:{...s.crew.assigned},weather:s.environment.weather,deltas:e,eventTitle:t?t.title:null,timestamp:Date.now()}},generateDebriefReport(s,e){if(!s||s.length===0)return[{type:"info",title:"Короткая сессия",description:"Миссия была завершена на первом этапе без накопленной телеметрии."}];const t=[],r=s.length,o=s.filter(S=>S.resources.energy<=0||S.deltas&&S.deltas.blackoutStage>0);if(o.length>0){const S=o[0].sol;t.push({type:"critical",sol:S,title:`Энергетический дефицит (Сол ${S})`,description:`Потребление энергосети превысило суммарную генерацию, что вызвало каскадное отключение модулей (Агрокомплекс → Защита → СЖО) в течение ${o.length} солов.`})}let l=100,u=1,f=1/0,h=1;s.forEach(S=>{S.resources.oxygen<l&&(l=S.resources.oxygen,u=S.sol),S.resources.water<f&&(f=S.resources.water,h=S.sol)}),l<50&&t.push({type:l<=0?"critical":"warning",sol:u,title:`Кризис кислородного снабжения (Сол ${u})`,description:`Концентрация O₂ падала до ${Math.round(l)}%. Недостаточное выделение энергии или нехватка инженеров в модуле СЖО снизили темпы регенерации.`}),f<80&&t.push({type:f<=0?"critical":"warning",sol:h,title:`Обезвоживание форпоста (Сол ${h})`,description:`Запас воды опускался до ${Math.round(f)} л. Напоминаем: замкнутый контур рециркуляции мочи и конденсата требует стабильного питания электролизера.`});const m=s[s.length-1],y=m.resources.radiationDose;return y>500?t.push({type:"critical",sol:m.sol,title:"Превышение предела радиационной безопасности",description:`Суммарная доза облучения достигла ${Math.round(y)} мЗв (порог NASA: 500 мЗв). Экипаж получил острую лучевую болезнь из-за слабого экранирования реголитом или отключения магнитного дефлектора.`}):y>250&&t.push({type:"warning",sol:m.sol,title:"Умеренная радиационная нагрузка",description:`Накоплено ${Math.round(y)} мЗв. Экранирование снизило воздействие галактических лучей, но экипаж подвергался риску во время солнечных вспышек.`}),e.isVictory?t.push({type:"success",sol:r,title:"Превосходное системное балансирование",description:`База успешно функционировала все ${r} солов. Вы грамотно перераспределяли мощности и справились со всеми каскадными рисками.`}):t.length===0&&t.push({type:"warning",sol:r,title:"Критический сбой систем",description:e.gameOverReason||"Один из ключевых параметров базы упал ниже допустимого предела."}),t.slice(0,4)}},Ha={initGame(s=Yn.MARS,e=zi.ENGINEER,t="Commander"){return xd(s,e,t)},previewNextSol(s){const e=$s[s.meta.location]||$s.mars,t=Yl[s.meta.difficulty]||Yl.engineer,r=s.crew.total;let o=1;s.environment.weather===Tn.DUST_STORM?o=.2:s.environment.weather===Tn.ECLIPSE&&(o=.05);const l=s.modules.activeUpgrades.includes("ai_smart_grid"),u=s.crew.assigned.shieldAndRepair,f=l||u>=1?0:Math.min(.45,s.meta.currentSol*.02*e.dustImpact),h=e.solarIrradianceBase*s.modules.solarLevel*o*(1-f),m=e.nuclearOutputBase*s.modules.nuclearLevel,y=h+m,S=s.powerAllocation.lifeSupport/100,_=s.powerAllocation.agro/100,M=s.powerAllocation.shield/100,w=e.basePowerDraw,C=es.lifeSupportPerCrew*r*S,g=(es.agroBase+es.agroPerLevel*(s.modules.agroLevel-1))*_,v=s.modules.shieldType==="magnetic"||s.modules.activeUpgrades.includes("magnetic_shield"),N=v?es.shieldMagnetic*M:0,F=w+C+g+N;let P=s.resources.energy,U=y-F,D=C,E=g,b=N,V=0;if(y+P<F){E=0;let xt=w+C+b;y+P<xt?(b=0,V=2,xt=w+C,y+P<xt?(V=3,D=Math.max(0,y+P-w)):V=2):V=1}const k=w+D+E+b,j=y-k,q=s.crew.assigned.lifeSupport,se=Math.min(1.2,q/Math.max(1,r*.3)),z=F>0?D/Math.max(1,es.lifeSupportPerCrew*r):1,re=r*Ka.O2_KG_PER_PERSON*t.consumptionRate,ue=re*.85*Math.min(1,z)*se,K=s.crew.assigned.agro,Z=Math.min(1.2,K/Math.max(1,r*.25)),G=F>0?E/Math.max(1,es.agroBase):1,$=E>0?.15*s.modules.agroLevel*G*Z:0,Q=(ue+$-re)*br.O2_PERCENT_CONVERSION_RATIO,Re=r*Ka.WATER_L_PER_PERSON*t.consumptionRate,ne=Re*.85*Math.min(1,z)*se,xe=E>0?10*s.modules.agroLevel*G:0,ye=s.crew.assigned.shieldAndRepair,Ue=s.modules.activeUpgrades.includes("moxie_v2")||s.modules.activeUpgrades.includes("closed_aeroponics"),Ge=D>=es.lifeSupportPerCrew*r*.8&&(ye>=2||Ue)?Math.min(18,9*se*(D/25)):0,dt=Math.round((ne+Ge-Re-xe)*10)/10,et=r*Ka.FOOD_KG_PER_PERSON*t.consumptionRate,gt=E>0?1.8*s.modules.agroLevel*G*Z:0,ht=Math.round((gt-et)*10)/10;let lt=e.ambientRadiation;s.environment.weather===Tn.SOLAR_FLARE&&(lt+=s.meta.location===Yn.MOON?80:60);let Ht=s.modules.shieldType==="regolith"||s.modules.activeUpgrades.includes("regolith_coating")?Hu.regolith:0,Ut=s.modules.shieldType==="water"||s.modules.activeUpgrades.includes("water_wall")?Hu.water:0,Bt=b>0&&v?Hu.magnetic:0;const wt=s.crew.assigned.shieldAndRepair,sn=Math.min(1.2,wt/Math.max(1,r*.2)),Ct=1+(Ht+Ut+Bt)*sn,Vt=Math.round(lt/Ct*10)/10;let It=0;const Wt=Math.max(0,Math.min(100,s.resources.oxygen+Q)),X=Math.max(0,s.resources.water+dt),ln=Math.max(0,s.resources.food+ht),At=s.resources.radiationDose+Vt;if(Wt<=0?It-=br.HEALTH_PENALTY_NO_O2:Wt<40&&(It-=10),X<=0&&(It-=br.HEALTH_PENALTY_NO_WATER),ln<=0&&(It-=br.HEALTH_PENALTY_NO_FOOD),At>br.RADIATION_SICKNESS_THRESHOLD){const xt=At-br.RADIATION_SICKNESS_THRESHOLD;It-=18+Math.min(30,xt*.25)}return It===0&&Wt>80&&X>50&&ln>50&&s.resources.crewHealth<100&&(It+=br.HEALTH_RECOVERY_RATE),{totalGen:Math.round(y*10)/10,totalDemand:Math.round(k*10)/10,netPower:Math.round(U*10)/10,deltaEnergy:Math.round(j*10)/10,deltaOxygen:Math.round(Q*10)/10,deltaWater:dt,deltaFood:ht,dailyRadiation:Vt,deltaHealth:Math.round(It*10)/10,blackoutStage:V,effectiveLifePower:D,effectiveAgroPower:E,effectiveShieldPower:b}},calculateNextSol(s){const e=this.previewNextSol(s),t=$s[s.meta.location]||$s.mars,r=s.meta.currentSol,o=r+1;let l=Math.max(0,Math.min(s.resources.energyCap,s.resources.energy+e.deltaEnergy)),u=Math.max(0,Math.min(100,s.resources.oxygen+e.deltaOxygen)),f=Math.max(0,Math.min(s.resources.waterMax,s.resources.water+e.deltaWater)),h=Math.max(0,Math.min(s.resources.foodMax,s.resources.food+e.deltaFood)),m=Math.round((s.resources.radiationDose+e.dailyRadiation)*10)/10,y=Math.max(0,Math.min(100,s.resources.crewHealth+e.deltaHealth)),S=s.resources.payloadPoints+15,_="";o%t.resupplyInterval===0&&r<s.meta.maxSols&&(f=Math.min(s.resources.waterMax,f+t.resupplyPayload.water),h=Math.min(s.resources.foodMax,h+t.resupplyPayload.food),S+=t.resupplyPayload.payloadPoints,_=`Грузовая капсула снабжения успешно состыкована: +${t.resupplyPayload.water}л воды, +${t.resupplyPayload.food}кг провизии!`);let M=s.environment.weather,w=s.environment.weatherDuration-1,C="Ясно. Стабильные погодные условия.";if(w<=0){const U=Math.random();s.meta.location===Yn.MOON?U<.15?(M=Tn.SOLAR_FLARE,w=2,C="ВНИМАНИЕ: Зафиксирован мощный корональный выброс (CME). Ожидается всплеск радиации!"):U<.28?(M=Tn.ECLIPSE,w=2,C="Лунное затмение: солнечные панели обесточены на ближайшие 2 дня."):(M=Tn.CLEAR,w=3):U<.2?(M=Tn.DUST_STORM,w=3,C="ВНИМАНИЕ: Марсианская пылевая буря. Солнечная генерация упадет на 80%."):U<.32?(M=Tn.SOLAR_FLARE,w=2,C="Солнечная вспышка высокой интенсивности. Активируйте убежища."):(M=Tn.CLEAR,w=4)}let g=Un.PLAYING,v="",N=!1;y<=0?(g=Un.GAMEOVER,u<=0?v="Экипаж погиб от гипоксии: запасы O₂ истощились.":f<=0?v="Экипаж погиб от обезвоживания.":h<=0?v="Истощение запасов продовольствия.":m>br.RADIATION_SICKNESS_THRESHOLD?v="Смертельная доза радиации (> 500 мЗв).":v="Критический отказ систем жизнеобеспечения."):r>=s.meta.maxSols&&(g=Un.VICTORY,N=!0);const F=ng.createSnapshot(s,e,s.activeEvent),P=[...s.history,F];return{...s,meta:{...s.meta,currentSol:o,status:g,gameOverReason:v,isVictory:N},resources:{...s.resources,energy:l,oxygen:u,water:f,food:h,radiationDose:m,radiationDaily:e.dailyRadiation,crewHealth:y,payloadPoints:S},environment:{weather:M,weatherDuration:Math.max(0,w),forecast:C},history:P,activeEvent:null,lastNotice:_||null}},applyUpgrade(s,e){if(!e||s.resources.payloadPoints<e.cost)return s;const t=[...s.modules.activeUpgrades,e.id];let r=s.modules.shieldType,o=s.resources.water;s.resources.waterMax;let l=s.modules.solarLevel,u=s.modules.nuclearLevel,f=s.modules.agroLevel,h=s.modules.lifeSupportLevel;return e.shieldType&&(r=e.shieldType),e.waterCostPermanent&&(o=Math.max(0,o-e.waterCostPermanent)),e.moduleUpgrade==="solar"&&(l+=1),e.moduleUpgrade==="nuclear"&&(u+=1),e.moduleUpgrade==="agro"&&(f+=1),e.moduleUpgrade==="lifeSupport"&&(h+=1),{...s,resources:{...s.resources,water:o,payloadPoints:s.resources.payloadPoints-e.cost},modules:{...s.modules,shieldType:r,solarLevel:l,nuclearLevel:u,agroLevel:f,lifeSupportLevel:h,activeUpgrades:t}}},resolveEvent(s,e){if(!e||!e.effects)return{...s,activeEvent:null};const t=e.effects,r=s.resources,o={...r,energy:Math.max(0,Math.min(r.energyCap,r.energy+(t.energy||0))),oxygen:Math.max(0,Math.min(100,r.oxygen+(t.oxygen||0))),water:Math.max(0,Math.min(r.waterMax,r.water+(t.water||0))),food:Math.max(0,Math.min(r.foodMax,r.food+(t.food||0))),radiationDose:Math.max(0,r.radiationDose+(t.radiation||0)),crewHealth:Math.max(0,Math.min(100,r.crewHealth+(t.health||0))),payloadPoints:Math.max(0,r.payloadPoints+(t.payloadPoints||0))};return{...s,resources:o,activeEvent:null,meta:{...s.meta,status:Un.PLAYING}}}},er={CURRENT_GAME:"nasa_outpost_current_game_v1",HALL_OF_FAME:"nasa_outpost_hall_of_fame_v1",SETTINGS:"nasa_outpost_settings_v1",SEEN_INTRO:"nasa_outpost_seen_intro_v1"},ui={saveGame(s){try{if(!s)return;localStorage.setItem(er.CURRENT_GAME,JSON.stringify(s))}catch(e){console.warn("StorageService: Failed to save game state to localStorage",e)}},loadGame(){try{const s=localStorage.getItem(er.CURRENT_GAME);return s?JSON.parse(s):null}catch(s){return console.warn("StorageService: Failed to load game state",s),null}},clearGame(){try{localStorage.removeItem(er.CURRENT_GAME)}catch(s){console.warn("StorageService: Failed to clear game state",s)}},getHallOfFame(){try{const s=localStorage.getItem(er.HALL_OF_FAME);return s?JSON.parse(s):[]}catch(s){return console.warn("StorageService: Failed to get Hall of Fame",s),[]}},recordMissionResult(s){try{const e=this.getHallOfFame(),t={id:Date.now().toString(),date:new Date().toISOString(),commanderName:s.commanderName||"Astronaut",location:s.location,difficulty:s.difficulty,solsSurvived:s.solsSurvived,maxSols:s.maxSols,isVictory:s.isVictory,score:s.score||Math.round(s.solsSurvived*100+(s.isVictory?1e3:0)),reason:s.reason||""};e.unshift(t),e.sort((o,l)=>l.score-o.score);const r=e.slice(0,20);return localStorage.setItem(er.HALL_OF_FAME,JSON.stringify(r)),r}catch(e){return console.warn("StorageService: Failed to record mission result",e),[]}},getSettings(){try{const s=localStorage.getItem(er.SETTINGS);return s?JSON.parse(s):{soundEnabled:!0,volume:.5}}catch{return{soundEnabled:!0,volume:.5}}},saveSettings(s){try{localStorage.setItem(er.SETTINGS,JSON.stringify(s))}catch(e){console.warn("StorageService: Failed to save settings",e)}},hasSeenIntro(){try{return localStorage.getItem(er.SEEN_INTRO)==="true"}catch{return!1}},setSeenIntro(s=!0){try{localStorage.setItem(er.SEEN_INTRO,s?"true":"false")}catch{}}};class zx{constructor(){this.ctx=null,this.enabled=!0}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(e){this.enabled=e}playClick(){if(this.enabled&&(this.init(),!!this.ctx))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(400,this.ctx.currentTime+.05),t.gain.setValueAtTime(.08,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playBip(e=600){if(this.enabled&&(this.init(),!!this.ctx))try{const t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(e,this.ctx.currentTime),r.gain.setValueAtTime(.06,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),t.connect(r),r.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.08)}catch{}}playSolTransition(){if(this.enabled&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(900,e+.2),r.gain.setValueAtTime(.1,e),r.gain.exponentialRampToValueAtTime(.001,e+.25),t.connect(r),r.connect(this.ctx.destination),t.start(),t.stop(e+.25)}catch{}}playAlarm(){if(this.enabled&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(440,e),t.frequency.setValueAtTime(880,e+.1),t.frequency.setValueAtTime(440,e+.2),r.gain.setValueAtTime(.12,e),r.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(r),r.connect(this.ctx.destination),t.start(),t.stop(e+.35)}catch{}}playVictory(){if(this.enabled&&(this.init(),!!this.ctx))try{[523.25,659.25,783.99,1046.5].forEach((t,r)=>{const o=this.ctx.currentTime+r*.12,l=this.ctx.createOscillator(),u=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(t,o),u.gain.setValueAtTime(.12,o),u.gain.exponentialRampToValueAtTime(.001,o+.4),l.connect(u),u.connect(this.ctx.destination),l.start(o),l.stop(o+.4)})}catch{}}startLaunchRumble(){if(this.enabled&&(this.init(),!!this.ctx))try{if(this.rumbleNodes)return;const e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0;for(let h=0;h<e;h++){const m=Math.random()*2-1;r[h]=(o+.02*m)/1.02,o=r[h],r[h]*=3.5}const l=this.ctx.createBufferSource();l.buffer=t,l.loop=!0;const u=this.ctx.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(120,this.ctx.currentTime),u.frequency.linearRampToValueAtTime(320,this.ctx.currentTime+3);const f=this.ctx.createGain();f.gain.setValueAtTime(.01,this.ctx.currentTime),f.gain.linearRampToValueAtTime(.15,this.ctx.currentTime+1),l.connect(u),u.connect(f),f.connect(this.ctx.destination),l.start(),this.rumbleNodes={whiteNoise:l,filter:u,gain:f}}catch{}}stopLaunchRumble(){if(this.rumbleNodes)try{const{whiteNoise:e,gain:t}=this.rumbleNodes,r=this.ctx.currentTime;t.gain.linearRampToValueAtTime(.001,r+.5),e.stop(r+.5),this.rumbleNodes=null}catch{this.rumbleNodes=null}}playDockingClamp(){if(this.enabled&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(90,e),t.frequency.exponentialRampToValueAtTime(30,e+.25),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.001,e+.3),t.connect(r),r.connect(this.ctx.destination),t.start(e),t.stop(e+.3),setTimeout(()=>{this.playBip(920)},150)}catch{}}}const kt=new zx;function Gx({onStartMission:s,hallOfFame:e=[],onReplayIntro:t}){const[r,o]=$t.useState(Yn.MARS),[l,u]=$t.useState(zi.ENGINEER),[f,h]=$t.useState("Астронавт-1"),[m,y]=$t.useState(!1),[S,_]=$t.useState(1),[M,w]=$t.useState(!1),C=()=>{kt.playClick(),s(r,l,f)};return x.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center p-4 md:p-8 max-w-5xl mx-auto w-full",children:[x.jsxs("div",{className:"w-full hud-panel rounded-xl border border-nasa-border shadow-2xl p-6 md:p-8 space-y-8 relative overflow-hidden",children:[x.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between border-b border-nasa-border/60 pb-4 gap-2",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-nasa-cyan animate-pulse"}),x.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-nasa-cyan font-bold",children:"NASA SPACE APPS CHALLENGE // MISSION DISPATCH"})]}),x.jsx("h1",{className:"text-2xl md:text-3xl font-extrabold text-white tracking-wide mt-1",children:"Ares / Artemis Outpost: Survival & Balance"})]}),x.jsxs("div",{className:"flex items-center space-x-2 flex-wrap gap-y-2",children:[t&&x.jsx("button",{onClick:()=>{kt.playClick(),t()},className:"px-3 py-1.5 rounded border border-amber-500/50 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 text-xs font-mono font-bold transition-all shadow-hud-amber",children:"🎬 3D Заставка «Алтын Түйүн»"}),x.jsx("button",{onClick:()=>{kt.playClick(),y(!0),_(1)},className:"px-3 py-1.5 rounded border border-nasa-cyan/40 bg-nasa-cyan/10 text-nasa-cyan hover:bg-nasa-cyan/20 text-xs font-mono transition-colors",children:"Инструктаж (Туториал)"}),x.jsxs("button",{onClick:()=>{kt.playClick(),w(!M)},className:"px-3 py-1.5 rounded border border-nasa-border bg-nasa-dark/60 text-slate-300 hover:text-white text-xs font-mono transition-colors",children:["Рекорды (",e.length,")"]})]})]}),x.jsxs("div",{className:"space-y-3",children:[x.jsxs("label",{className:"text-xs font-mono uppercase tracking-wider text-nasa-muted flex items-center space-x-2",children:[x.jsx("span",{children:"1. Выберите театр космических операций"}),x.jsx("span",{className:"text-slate-500",children:"|"}),x.jsx("span",{className:"text-nasa-cyan",children:"Влияет на физику энергии и радиации"})]}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[x.jsxs("div",{onClick:()=>{kt.playClick(),o(Yn.MOON)},className:`cursor-pointer rounded-lg p-5 border transition-all relative overflow-hidden ${r===Yn.MOON?"border-nasa-cyan bg-nasa-cyan/10 shadow-hud-cyan ring-1 ring-nasa-cyan":"border-nasa-border bg-nasa-dark/70 hover:border-slate-500 opacity-80 hover:opacity-100"}`,children:[x.jsxs("div",{className:"flex justify-between items-start mb-2",children:[x.jsx("span",{className:"font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700",children:"ПРОГРАММА ARTEMIS"}),x.jsx("span",{className:"font-mono text-xs text-nasa-cyan font-bold",children:"1 Сол = 24 часа"})]}),x.jsx("h3",{className:"text-lg font-bold text-white",children:"Луна: База «Артемида»"}),x.jsx("p",{className:"text-xs text-nasa-muted mt-1",children:"Южный полюс, край кратера Шеклтон"}),x.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-4 text-xs font-mono",children:[x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/40",children:[x.jsx("span",{className:"text-slate-400 block text-[10px]",children:"СОЛНЕЧНЫЙ СВЕТ"}),x.jsx("span",{className:"text-nasa-green font-bold",children:"Высокий (пики света)"})]}),x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/40",children:[x.jsx("span",{className:"text-slate-400 block text-[10px]",children:"ФОНОВАЯ РАДИАЦИЯ"}),x.jsx("span",{className:"text-nasa-red font-bold",children:"Критическая (15 мЗв/сол)"})]}),x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/40",children:[x.jsx("span",{className:"text-slate-400 block text-[10px]",children:"СНАБЖЕНИЕ С ЗЕМЛИ"}),x.jsx("span",{className:"text-nasa-cyan font-bold",children:"Каждые 10 солов"})]}),x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/40",children:[x.jsx("span",{className:"text-slate-400 block text-[10px]",children:"ДОБЫЧА ВОДЫ"}),x.jsx("span",{className:"text-nasa-amber font-bold",children:"Лед вечной тени"})]})]})]}),x.jsxs("div",{onClick:()=>{kt.playClick(),o(Yn.MARS)},className:`cursor-pointer rounded-lg p-5 border transition-all relative overflow-hidden ${r===Yn.MARS?"border-nasa-amber bg-nasa-amber/10 shadow-hud-amber ring-1 ring-nasa-amber":"border-nasa-border bg-nasa-dark/70 hover:border-slate-500 opacity-80 hover:opacity-100"}`,children:[x.jsxs("div",{className:"flex justify-between items-start mb-2",children:[x.jsx("span",{className:"font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800",children:"ПРОГРАММА ARES"}),x.jsx("span",{className:"font-mono text-xs text-nasa-amber font-bold",children:"1 Сол = 24ч 39мин"})]}),x.jsx("h3",{className:"text-lg font-bold text-white",children:"Марс: База «Арес»"}),x.jsx("p",{className:"text-xs text-nasa-muted mt-1",children:"Кратер Езеро, древняя речная дельта"}),x.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-4 text-xs font-mono",children:[x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/40",children:[x.jsx("span",{className:"text-slate-400 block text-[10px]",children:"СОЛНЕЧНЫЙ СВЕТ"}),x.jsx("span",{className:"text-nasa-amber font-bold",children:"Средний (43% от Земли)"})]}),x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/40",children:[x.jsx("span",{className:"text-slate-400 block text-[10px]",children:"ФОНОВАЯ РАДИАЦИЯ"}),x.jsx("span",{className:"text-nasa-amber font-bold",children:"Умеренная (8 мЗв/сол)"})]}),x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/40",children:[x.jsx("span",{className:"text-slate-400 block text-[10px]",children:"СНАБЖЕНИЕ С ЗЕМЛИ"}),x.jsx("span",{className:"text-nasa-red font-bold",children:"Только 1 груз (Сол 20)"})]}),x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/40",children:[x.jsx("span",{className:"text-slate-400 block text-[10px]",children:"РИСК БУРЬ"}),x.jsx("span",{className:"text-nasa-red font-bold",children:"Пылевые бури (-80% кВт)"})]})]})]})]})]}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-nasa-muted",children:"2. Уровень симуляции"}),x.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:zi.CADET,label:"Кадет",sub:"+25% припасов"},{id:zi.ENGINEER,label:"Инженер",sub:"Баланс NASA"},{id:zi.COMMANDER,label:"Командир",sub:"Хардкор"}].map(g=>x.jsxs("button",{onClick:()=>{kt.playClick(),u(g.id)},className:`p-3 rounded border text-left font-mono transition-all ${l===g.id?"border-nasa-green bg-nasa-green/10 text-nasa-green":"border-nasa-border bg-nasa-dark/60 text-slate-400 hover:border-slate-500"}`,children:[x.jsx("div",{className:"font-bold text-xs",children:g.label}),x.jsx("div",{className:"text-[10px] text-slate-400 mt-0.5",children:g.sub})]},g.id))})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-nasa-muted",children:"3. Позывной командира миссии"}),x.jsx("input",{type:"text",value:f,maxLength:24,onChange:g=>h(g.target.value),className:"w-full bg-nasa-dark/90 border border-nasa-border rounded-lg px-4 py-3 font-mono text-sm text-nasa-cyan focus:outline-none focus:border-nasa-cyan transition-colors",placeholder:"Введите имя..."}),x.jsx("span",{className:"text-[10px] font-mono text-slate-500 block",children:"Имя фиксируется в бортовом журнале телеметрии и таблице рекордов."})]})]}),x.jsx("button",{onClick:C,className:"w-full py-4 bg-nasa-cyan hover:bg-cyan-300 text-nasa-dark font-extrabold font-mono text-sm tracking-widest uppercase rounded-lg transition-all shadow-hud-cyan hover:shadow-cyan-400/40",children:"ИНИЦИАЛИЗИРОВАТЬ МИССИЮ // ПЕРЕЙТИ В ЦУП"})]}),M&&x.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:x.jsxs("div",{className:"max-w-lg w-full hud-panel rounded-xl border border-nasa-border p-6 space-y-4",children:[x.jsxs("div",{className:"flex justify-between items-center border-b border-nasa-border pb-3",children:[x.jsx("h3",{className:"font-mono text-sm font-bold text-nasa-cyan uppercase",children:"Зал Славы Командиров NASA"}),x.jsx("button",{onClick:()=>w(!1),className:"text-xs font-mono text-slate-400 hover:text-white",children:"✕ ЗАКРЫТЬ"})]}),e.length===0?x.jsx("div",{className:"text-center py-8 text-xs font-mono text-nasa-muted",children:"Пока нет завершенных миссий. Будьте первым, кто продержит базу 30 солов!"}):x.jsx("div",{className:"max-h-60 overflow-y-auto space-y-2 pr-1",children:e.map((g,v)=>x.jsxs("div",{className:"p-3 rounded bg-nasa-dark/80 border border-nasa-border/60 flex justify-between items-center text-xs font-mono",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"font-bold text-white",children:["#",v+1," ",g.commanderName," (",g.location==="moon"?"Луна":"Марс",")"]}),x.jsxs("div",{className:"text-[10px] text-slate-400",children:[g.isVictory?"🏆 Победа":"💀 Поражение",": ",g.solsSurvived," солов"]})]}),x.jsxs("div",{className:"text-right",children:[x.jsxs("div",{className:"text-nasa-cyan font-bold",children:[g.score," очков"]}),x.jsx("div",{className:"text-[10px] text-slate-500",children:new Date(g.date).toLocaleDateString()})]})]},g.id||v))})]})}),m&&x.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:x.jsxs("div",{className:"max-w-md w-full hud-panel rounded-xl border border-nasa-cyan shadow-hud-cyan p-6 space-y-4",children:[x.jsxs("div",{className:"flex justify-between items-center border-b border-nasa-border pb-2",children:[x.jsxs("span",{className:"font-mono text-xs text-nasa-cyan font-bold",children:["ИНСТРУКТАЖ NASA // ШАГ ",S," ИЗ 3"]}),x.jsx("button",{onClick:()=>y(!1),className:"text-xs font-mono text-slate-400 hover:text-white",children:"✕ ПРОПУСТИТЬ"})]}),S===1&&x.jsxs("div",{className:"space-y-3 text-xs text-slate-200",children:[x.jsx("h4",{className:"text-sm font-bold text-white",children:"1. Закон компромиссов (Trade-offs)"}),x.jsx("p",{children:"В космосе невозможно максимизировать всё одновременно. Любое увеличение производства еды или генерации кислорода требует огромных затрат электроэнергии и воды."}),x.jsx("div",{className:"p-3 bg-nasa-dark/80 rounded border border-nasa-border/60 text-nasa-cyan font-mono text-[11px]",children:"💡 Совет: Если энергии не хватает, система автоматически отключит гидропонику, затем защиту, а в критическом случае — жизнеобеспечение."})]}),S===2&&x.jsxs("div",{className:"space-y-3 text-xs text-slate-200",children:[x.jsx("h4",{className:"text-sm font-bold text-white",children:"2. Распределение мощности и людей"}),x.jsx("p",{children:"Каждый сол перед нажатием кнопки «Завершить Сол» используйте слайдеры в нижней панели, чтобы направить ватты и специалистов в критические секторы."}),x.jsx("div",{className:"p-3 bg-nasa-dark/80 rounded border border-nasa-border/60 text-nasa-amber font-mono text-[11px]",children:"⚠️ Инженеры удваивают эффективность систем. Не оставляйте блок жизнеобеспечения без присмотра!"})]}),S===3&&x.jsxs("div",{className:"space-y-3 text-xs text-slate-200",children:[x.jsx("h4",{className:"text-sm font-bold text-white",children:"3. Кризисные дилеммы и Научная модель"}),x.jsx("p",{children:"Периодически на базе будут возникать реальные научные кризисы (пылевые бури, вспышки на Солнце, аварии фильтров MOXIE). Принимайте решения взвешенно."}),x.jsxs("div",{className:"p-3 bg-nasa-dark/80 rounded border border-nasa-border/60 text-nasa-green font-mono text-[11px]",children:["🔬 Для жюри и учителей в верхней панели доступна кнопка ",x.jsx("strong",{children:"[ƒx] Научная модель"})," с живыми уравнениями."]})]}),x.jsxs("div",{className:"flex justify-between items-center pt-3 border-t border-nasa-border",children:[S>1?x.jsx("button",{onClick:()=>_(S-1),className:"px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white",children:"← Назад"}):x.jsx("div",{}),S<3?x.jsx("button",{onClick:()=>_(S+1),className:"px-4 py-1.5 text-xs font-mono bg-nasa-cyan text-nasa-dark font-bold rounded",children:"Далее →"}):x.jsx("button",{onClick:()=>y(!1),className:"px-4 py-1.5 text-xs font-mono bg-nasa-green text-nasa-dark font-bold rounded",children:"Понятно, к миссии!"})]})]})})]})}function Hx({gameState:s,preview:e,onOpenFormulaInspector:t,soundEnabled:r,onToggleSound:o}){const{currentSol:l,maxSols:u,location:f,commanderName:h}=s.meta,{energy:m,energyCap:y,oxygen:S,water:_,waterMax:M,food:w,foodMax:C,crewHealth:g,radiationDose:v,payloadPoints:N}=s.resources,{weather:F,forecast:P}=s.environment,U=(b,V="")=>{if(b===void 0||Number.isNaN(b))return"";const k=b>0?"+":"",j=b>0?"text-nasa-green":b<0?"text-nasa-red":"text-slate-400";return x.jsxs("span",{className:`text-[10px] font-mono font-bold ${j}`,children:[k,b,V]})},E=(()=>{switch(F){case Tn.DUST_STORM:return{label:"ПЫЛЕВАЯ БУРЯ",color:"bg-amber-950/80 text-amber-300 border-amber-600",icon:"🌪️"};case Tn.SOLAR_FLARE:return{label:"ВСПЫШКА CME",color:"bg-red-950/80 text-red-300 border-red-600 animate-pulse",icon:"⚡"};case Tn.ECLIPSE:return{label:"ЗАТМЕНИЕ",color:"bg-purple-950/80 text-purple-300 border-purple-600",icon:"🌑"};default:return{label:"ШТАТНО",color:"bg-emerald-950/80 text-emerald-300 border-emerald-700",icon:"☀️"}}})();return x.jsx("div",{className:"w-full bg-nasa-card/95 border-b border-nasa-border/80 backdrop-blur z-20 px-3 md:px-6 py-2.5",children:x.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3",children:[x.jsxs("div",{className:"flex items-center justify-between md:justify-start space-x-3",children:[x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-nasa-cyan animate-pulse"}),x.jsxs("div",{children:[x.jsx("div",{className:"text-[10px] font-mono text-nasa-muted leading-none",children:"СОЛ МИССИИ"}),x.jsxs("div",{className:"text-lg md:text-xl font-mono font-extrabold text-white tracking-wider",children:[x.jsx("span",{className:"text-nasa-cyan",children:String(l).padStart(2,"0")}),x.jsxs("span",{className:"text-slate-500",children:[" / ",u]})]})]})]}),x.jsx("div",{className:"h-6 w-px bg-nasa-border hidden md:block"}),x.jsxs("div",{className:"flex items-center space-x-2",title:P,children:[x.jsx("span",{className:"text-sm",children:E.icon}),x.jsxs("div",{children:[x.jsx("div",{className:"text-[10px] font-mono text-nasa-muted leading-none",children:"ПОГОДА"}),x.jsx("span",{className:`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${E.color}`,children:E.label})]})]}),x.jsx("div",{className:"h-6 w-px bg-nasa-border hidden md:block"}),x.jsxs("div",{className:"hidden sm:block",children:[x.jsx("div",{className:"text-[10px] font-mono text-nasa-muted leading-none",children:"ИНЖ. ОЧКИ"}),x.jsxs("div",{className:"text-sm font-mono font-bold text-nasa-cyan",children:["⚙️ ",N," ",x.jsx("span",{className:"text-[10px] text-slate-400 font-normal",children:"+15/сол"})]})]})]}),x.jsxs("div",{className:"grid grid-cols-5 gap-2 md:gap-3 flex-1 max-w-3xl",children:[x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/60 flex flex-col justify-between",children:[x.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono text-slate-400",children:[x.jsx("span",{className:"truncate",children:"⚡ ЭНЕРГИЯ"}),U(e.deltaEnergy)]}),x.jsxs("div",{className:"flex items-baseline justify-between mt-1",children:[x.jsx("span",{className:"text-sm font-mono font-bold text-nasa-cyan",children:m}),x.jsxs("span",{className:"text-[9px] font-mono text-slate-500",children:["/",y," кВт"]})]}),x.jsx("div",{className:"w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-1",children:x.jsx("div",{className:"bg-nasa-cyan h-full transition-all duration-300",style:{width:`${Math.min(100,m/y*100)}%`}})})]}),x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/60 flex flex-col justify-between",children:[x.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono text-slate-400",children:[x.jsx("span",{className:"truncate",children:"💨 O₂"}),U(e.deltaOxygen,"%")]}),x.jsxs("div",{className:"flex items-baseline justify-between mt-1",children:[x.jsxs("span",{className:`text-sm font-mono font-bold ${S<30?"text-nasa-red animate-pulse":"text-nasa-green"}`,children:[Math.round(S),"%"]}),x.jsx("span",{className:"text-[9px] font-mono text-slate-500",children:"100%"})]}),x.jsx("div",{className:"w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-1",children:x.jsx("div",{className:`h-full transition-all duration-300 ${S<30?"bg-nasa-red":"bg-nasa-green"}`,style:{width:`${Math.min(100,S)}%`}})})]}),x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/60 flex flex-col justify-between",children:[x.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono text-slate-400",children:[x.jsx("span",{className:"truncate",children:"💧 ВОДА"}),U(e.deltaWater,"л")]}),x.jsxs("div",{className:"flex items-baseline justify-between mt-1",children:[x.jsx("span",{className:`text-sm font-mono font-bold ${_<100?"text-nasa-amber":"text-nasa-green"}`,children:Math.round(_)}),x.jsxs("span",{className:"text-[9px] font-mono text-slate-500",children:["/",M,"л"]})]}),x.jsx("div",{className:"w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-1",children:x.jsx("div",{className:`h-full transition-all duration-300 ${_<100?"bg-nasa-amber":"bg-nasa-green"}`,style:{width:`${Math.min(100,_/M*100)}%`}})})]}),x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/60 flex flex-col justify-between",children:[x.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono text-slate-400",children:[x.jsx("span",{className:"truncate",children:"🌱 ЕДА"}),U(e.deltaFood,"кг")]}),x.jsxs("div",{className:"flex items-baseline justify-between mt-1",children:[x.jsx("span",{className:`text-sm font-mono font-bold ${w<80?"text-nasa-amber":"text-nasa-green"}`,children:Math.round(w)}),x.jsxs("span",{className:"text-[9px] font-mono text-slate-500",children:["/",C,"кг"]})]}),x.jsx("div",{className:"w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-1",children:x.jsx("div",{className:`h-full transition-all duration-300 ${w<80?"bg-nasa-amber":"bg-nasa-green"}`,style:{width:`${Math.min(100,w/C*100)}%`}})})]}),x.jsxs("div",{className:"p-2 rounded bg-nasa-dark/80 border border-nasa-border/60 flex flex-col justify-between",children:[x.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono text-slate-400",children:[x.jsx("span",{className:"truncate",children:"❤️ ЗДОРОВЬЕ"}),x.jsxs("span",{className:"text-[9px] font-mono text-nasa-amber",children:["+",e.dailyRadiation,"мЗв"]})]}),x.jsxs("div",{className:"flex items-baseline justify-between mt-1",children:[x.jsxs("span",{className:`text-sm font-mono font-bold ${g<40?"text-nasa-red":"text-emerald-400"}`,children:[Math.round(g),"%"]}),x.jsxs("span",{className:"text-[9px] font-mono text-slate-500",children:[Math.round(v),"мЗв"]})]}),x.jsx("div",{className:"w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-1",children:x.jsx("div",{className:`h-full transition-all duration-300 ${g<40?"bg-nasa-red":"bg-emerald-400"}`,style:{width:`${Math.min(100,g)}%`}})})]})]}),x.jsxs("div",{className:"flex items-center justify-end space-x-2",children:[x.jsxs("button",{onClick:t,className:"px-2.5 py-1.5 rounded border border-nasa-cyan/40 bg-nasa-cyan/10 hover:bg-nasa-cyan/20 text-nasa-cyan text-xs font-mono font-bold flex items-center space-x-1.5 shadow-hud-cyan transition-all",title:"Научная модель для жюри NASA Space Apps",children:[x.jsx("span",{children:"[ƒx]"}),x.jsx("span",{className:"hidden lg:inline",children:"Модель"})]}),x.jsx("button",{onClick:o,className:"px-2 py-1.5 rounded border border-nasa-border bg-nasa-dark/60 text-slate-400 hover:text-white text-xs font-mono transition-colors",title:"Звуковые эффекты HUD",children:r?"🔊":"🔇"})]})]})})}function Vx({gameState:s,preview:e,upgrades:t=[],onApplyUpgrade:r}){const[o,l]=$t.useState(null),{location:u}=s.meta,{weather:f}=s.environment,{solarLevel:h,nuclearLevel:m,lifeSupportLevel:y,agroLevel:S,shieldLevel:_,shieldType:M,activeUpgrades:w}=s.modules,C=u===Yn.MOON,g=P=>{kt.playClick(),l(o===P?null:P)},v=e.effectiveAgroPower===0,N=e.effectiveShieldPower===0&&M==="magnetic",F=e.blackoutStage===3;return x.jsxs("div",{className:"relative w-full h-full min-h-[380px] md:min-h-[440px] flex-1 rounded-xl border border-nasa-border/80 bg-nasa-dark/90 overflow-hidden flex flex-col justify-between p-4",children:[x.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[C?x.jsxs("div",{className:"absolute inset-0 bg-radial from-slate-900/40 via-transparent to-black opacity-80",children:[x.jsx("div",{className:"absolute top-6 left-12 w-1 h-1 bg-white rounded-full opacity-60"}),x.jsx("div",{className:"absolute top-16 left-1/4 w-1.5 h-1.5 bg-cyan-200 rounded-full opacity-80"}),x.jsx("div",{className:"absolute top-8 right-1/3 w-1 h-1 bg-white rounded-full opacity-50"}),x.jsx("div",{className:"absolute top-20 right-16 w-1 h-1 bg-white rounded-full opacity-70"}),x.jsx("div",{className:"absolute top-6 right-10 w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 via-cyan-400 to-white/90 shadow-hud-cyan opacity-85"})]}):x.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#2A150D]/60 via-[#1F100A]/40 to-transparent",children:x.jsx("div",{className:"absolute top-8 left-16 w-4 h-3 rounded-full bg-stone-400/60 opacity-70"})}),f===Tn.DUST_STORM&&x.jsx("div",{className:"absolute inset-0 bg-amber-900/20 backdrop-blur-[0.5px] animate-pulse",children:x.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-amber-700/10 to-transparent"})}),f===Tn.SOLAR_FLARE&&x.jsx("div",{className:"absolute inset-0 bg-red-900/25 animate-hud-pulse border border-red-500/30"})]}),x.jsxs("div",{className:"relative z-10 flex justify-between items-center text-xs font-mono",children:[x.jsxs("div",{className:"flex items-center space-x-2 bg-nasa-card/80 px-2.5 py-1 rounded border border-nasa-border/60 backdrop-blur",children:[x.jsx("span",{className:"text-nasa-cyan font-bold",children:"ФОРПОСТ:"}),x.jsx("span",{className:"text-slate-200 font-semibold",children:C?"БАЗА «АРТЕМИДА»":"БАЗА «АРЕС»"}),x.jsx("span",{className:"text-slate-500",children:"|"}),x.jsx("span",{className:"text-nasa-muted",children:"Кликните модуль для апгрейда"})]}),e.blackoutStage>0&&x.jsxs("div",{className:"px-2.5 py-1 rounded bg-nasa-red/20 border border-nasa-red text-nasa-red font-bold flex items-center space-x-1.5 animate-pulse",children:[x.jsx("span",{children:"⚠️"}),x.jsxs("span",{children:["ДЕФИЦИТ СЕТИ: СТУПЕНЬ ",e.blackoutStage]})]})]}),x.jsx("div",{className:"relative z-10 flex-1 flex items-center justify-center my-2",children:x.jsxs("svg",{viewBox:"0 0 800 400",className:"w-full max-w-3xl h-auto max-h-[360px] drop-shadow-2xl select-none",children:[x.jsxs("defs",{children:[x.jsxs("filter",{id:"glow-cyan",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[x.jsx("feGaussianBlur",{stdDeviation:"6",result:"blur"}),x.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]}),x.jsxs("filter",{id:"glow-red",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[x.jsx("feGaussianBlur",{stdDeviation:"8",result:"blur"}),x.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]}),x.jsxs("linearGradient",{id:"cable-active",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[x.jsx("stop",{offset:"0%",stopColor:"#00F0FF"}),x.jsx("stop",{offset:"100%",stopColor:"#00E676"})]}),x.jsxs("linearGradient",{id:"ground-gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[x.jsx("stop",{offset:"0%",stopColor:C?"#1A202C":"#3B1A12"}),x.jsx("stop",{offset:"100%",stopColor:"#0B0E14"})]})]}),x.jsx("path",{d:"M 0 320 Q 200 300 400 315 T 800 310 L 800 400 L 0 400 Z",fill:"url(#ground-gradient)"}),x.jsx("line",{x1:"0",y1:"318",x2:"800",y2:"312",stroke:C?"#4A5568":"#78350F",strokeWidth:"2",strokeDasharray:"4 6"}),x.jsxs("g",{stroke:"#2A3548",strokeWidth:"4",fill:"none",children:[x.jsx("path",{d:"M 170 240 L 320 200",stroke:"url(#cable-active)",strokeWidth:"3",strokeDasharray:"6 4"}),x.jsx("path",{d:"M 400 200 L 530 230",stroke:v?"#FF2A55":"url(#cable-active)",strokeWidth:"3"}),x.jsx("path",{d:"M 360 250 L 360 300",stroke:"url(#cable-active)",strokeWidth:"3"}),x.jsx("path",{d:"M 440 220 L 630 240",stroke:"#00F0FF",strokeWidth:"2",strokeDasharray:"3 3"})]}),x.jsxs("g",{className:"cursor-pointer transition-transform hover:scale-105 origin-center",onClick:()=>g("energy"),children:[x.jsx("rect",{x:"70",y:"160",width:"100",height:"40",rx:"3",fill:"#0C4A6E",stroke:"#00F0FF",strokeWidth:"2"}),x.jsx("line",{x1:"120",y1:"160",x2:"120",y2:"200",stroke:"#00F0FF",strokeWidth:"1.5"}),x.jsx("line",{x1:"70",y1:"180",x2:"170",y2:"180",stroke:"#00F0FF",strokeWidth:"1.5"}),x.jsx("line",{x1:"120",y1:"200",x2:"120",y2:"270",stroke:"#64748B",strokeWidth:"6"}),x.jsx("rect",{x:"140",y:"240",width:"45",height:"50",rx:"6",fill:"#1E293B",stroke:"#00F0FF",strokeWidth:"2"}),x.jsx("line",{x1:"150",y1:"230",x2:"150",y2:"240",stroke:"#FF9500",strokeWidth:"3"}),x.jsx("line",{x1:"175",y1:"230",x2:"175",y2:"240",stroke:"#FF9500",strokeWidth:"3"}),x.jsx("circle",{cx:"162",cy:"265",r:"7",fill:"#0B0E14",stroke:"#00F0FF",strokeWidth:"1.5"}),x.jsx("circle",{cx:"162",cy:"265",r:"3",fill:"#00F0FF"}),x.jsxs("text",{x:"120",y:"305",textAnchor:"middle",fill:"#00F0FF",fontSize:"11",fontFamily:"JetBrains Mono",fontWeight:"bold",children:["⚡ ЭНЕРГОБЛОК (L",h+m-1,")"]})]}),x.jsxs("g",{className:"cursor-pointer transition-transform hover:scale-105 origin-center",onClick:()=>g("lifeSupport"),children:[M==="regolith"&&x.jsx("path",{d:"M 280 260 Q 360 110 440 260 Z",fill:"#334155",opacity:"0.4"}),x.jsx("path",{d:"M 300 250 A 70 70 0 0 1 440 250 Z",fill:"#151B26",stroke:F?"#FF2A55":"#00E676",strokeWidth:"3",filter:F?"url(#glow-red)":"none"}),x.jsx("line",{x1:"370",y1:"180",x2:"330",y2:"250",stroke:"#00E676",strokeWidth:"1",opacity:"0.6"}),x.jsx("line",{x1:"370",y1:"180",x2:"410",y2:"250",stroke:"#00E676",strokeWidth:"1",opacity:"0.6"}),x.jsx("line",{x1:"370",y1:"180",x2:"370",y2:"250",stroke:"#00E676",strokeWidth:"1",opacity:"0.6"}),x.jsx("circle",{cx:"370",cy:"225",r:"14",fill:"#0B0E14",stroke:"#00E676",strokeWidth:"2"}),x.jsx("text",{x:"370",y:"229",textAnchor:"middle",fill:"#00E676",fontSize:"10",fontFamily:"JetBrains Mono",fontWeight:"bold",children:"O₂"}),x.jsxs("text",{x:"370",y:"275",textAnchor:"middle",fill:"#00E676",fontSize:"11",fontFamily:"JetBrains Mono",fontWeight:"bold",children:["ЖИЛОЙ КУПОЛ / СЖО (L",y,")"]})]}),x.jsxs("g",{className:"cursor-pointer transition-transform hover:scale-105 origin-center",onClick:()=>g("agro"),children:[x.jsx("rect",{x:"500",y:"190",width:"80",height:"65",rx:"15",fill:v?"#1F151B":"#064E3B",stroke:v?"#FF2A55":"#10B981",strokeWidth:"2.5",filter:v?"url(#glow-red)":"none"}),x.jsx("line",{x1:"520",y1:"205",x2:"520",y2:"245",stroke:v?"#7F1D1D":"#34D399",strokeWidth:"3"}),x.jsx("line",{x1:"540",y1:"205",x2:"540",y2:"245",stroke:v?"#7F1D1D":"#34D399",strokeWidth:"3"}),x.jsx("line",{x1:"560",y1:"205",x2:"560",y2:"245",stroke:v?"#7F1D1D":"#34D399",strokeWidth:"3"}),x.jsx("line",{x1:"505",y1:"195",x2:"575",y2:"195",stroke:v?"#450A0A":"#F43F5E",strokeWidth:"3"}),x.jsxs("text",{x:"540",y:"275",textAnchor:"middle",fill:v?"#FF2A55":"#10B981",fontSize:"11",fontFamily:"JetBrains Mono",fontWeight:"bold",children:["🌱 ТЕПЛИЦА ",v?"(ОТКЛ)":`(L${S})`]})]}),x.jsxs("g",{className:"cursor-pointer transition-transform hover:scale-105 origin-center",onClick:()=>g("shield"),children:[x.jsx("rect",{x:"320",y:"300",width:"100",height:"40",rx:"4",fill:"#0F172A",stroke:N?"#FF2A55":"#38BDF8",strokeWidth:"2"}),M==="magnetic"&&!N&&x.jsx("ellipse",{cx:"370",cy:"320",rx:"60",ry:"25",fill:"none",stroke:"#00F0FF",strokeWidth:"1.5",strokeDasharray:"4 4",filter:"url(#glow-cyan)"}),M==="water"&&x.jsx("rect",{x:"325",y:"305",width:"90",height:"30",fill:"#0284C7",opacity:"0.3",rx:"2"}),x.jsxs("text",{x:"370",y:"325",textAnchor:"middle",fill:"#38BDF8",fontSize:"10",fontFamily:"JetBrains Mono",fontWeight:"bold",children:["🛡️ ЩИТ (",M.toUpperCase(),")"]})]}),x.jsxs("g",{className:"cursor-pointer transition-transform hover:scale-105 origin-center",onClick:()=>g("logistics"),children:[x.jsx("rect",{x:"620",y:"220",width:"45",height:"50",rx:"4",fill:"#1E293B",stroke:"#94A3B8",strokeWidth:"2"}),x.jsx("circle",{cx:"642",cy:"245",r:"8",fill:"#0B0E14",stroke:"#00F0FF",strokeWidth:"1.5"}),x.jsx("polygon",{points:"638,210 646,210 642,200",fill:"#00F0FF",className:"animate-pulse"}),x.jsx("text",{x:"642",y:"290",textAnchor:"middle",fill:"#94A3B8",fontSize:"10",fontFamily:"JetBrains Mono",fontWeight:"bold",children:"🚀 ШЛЮЗ"})]})]})}),o&&x.jsxs("div",{className:"relative z-20 mt-2 p-4 rounded-lg bg-nasa-card border border-nasa-cyan shadow-hud-cyan animate-in fade-in duration-200",children:[x.jsxs("div",{className:"flex justify-between items-start mb-3 border-b border-nasa-border/60 pb-2",children:[x.jsxs("div",{children:[x.jsx("span",{className:"font-mono text-[10px] text-nasa-cyan uppercase tracking-wider font-bold",children:"ИНСПЕКТОР МОДУЛЯ БАЗЫ"}),x.jsxs("h4",{className:"text-sm font-bold text-white capitalize",children:[o==="energy"&&"Энергосеть (Солнечные крылья + Реактор Kilopower)",o==="lifeSupport"&&"Купол жизнеобеспечения (ECLSS, Регенерация O2 и Воды)",o==="agro"&&"Агрокомплекс (Гидропоника и Производство калорий)",o==="shield"&&"Радиационное экранирование (Убежище экипажа)",o==="logistics"&&"Шлюзовой отсек и логистика снабжения с Земли"]})]}),x.jsx("button",{onClick:()=>l(null),className:"text-xs font-mono text-slate-400 hover:text-white",children:"✕ ЗАКРЫТЬ"})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("div",{className:"text-xs font-mono text-nasa-muted",children:"Доступные модернизации NASA:"}),x.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:t.filter(P=>o==="energy"?P.category==="energy":o==="lifeSupport"?P.category==="lifeSupport":o==="agro"?P.category==="agro":o==="shield"?P.category==="shield":!0).map(P=>{const U=w.includes(P.id),D=s.resources.payloadPoints>=P.cost;return x.jsxs("div",{className:`p-3 rounded border text-xs font-mono flex flex-col justify-between ${U?"border-nasa-green bg-nasa-green/10 text-nasa-green":"border-nasa-border bg-nasa-dark/80 text-slate-300"}`,children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex justify-between items-center",children:[x.jsx("span",{className:"font-bold text-white",children:P.name}),x.jsxs("span",{className:"text-nasa-cyan",children:[P.cost," очков"]})]}),x.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:P.description}),x.jsxs("div",{className:"text-[10px] text-nasa-amber mt-1.5",children:["⚖️ ",P.tradeoff]})]}),x.jsx("div",{className:"mt-3 pt-2 border-t border-nasa-border/40 flex justify-end",children:U?x.jsx("span",{className:"text-[11px] text-nasa-green font-bold",children:"✓ УСТАНОВЛЕНО"}):x.jsxs("button",{disabled:!D,onClick:()=>{kt.playClick(),r(P)},className:`px-3 py-1 rounded text-xs font-bold transition-colors ${D?"bg-nasa-cyan text-nasa-dark hover:bg-cyan-300 shadow-hud-cyan":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:["Модернизировать (",P.cost," очков)"]})})]},P.id)})})]})]})]})}function Wx({gameState:s,preview:e,onUpdatePower:t,onUpdateCrew:r,onNextSol:o}){const{currentSol:l}=s.meta,{powerAllocation:u,crew:f}=s,{totalGen:h,totalDemand:m,deltaEnergy:y,blackoutStage:S}=e,_=(g,v)=>{kt.playBip(400+v*2),t(g,Number(v))},M=(g,v)=>{const F=(f.assigned[g]||0)+v;if(F<0)return;const P=Object.values(f.assigned).reduce((U,D)=>U+D,0);v>0&&P>=f.total||(kt.playBip(650),r(g,F))},w=Object.values(f.assigned).reduce((g,v)=>g+v,0),C=Math.max(0,f.total-w);return x.jsxs("div",{className:"w-full hud-panel rounded-xl border border-nasa-border/80 p-4 md:p-5 space-y-4",children:[x.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-nasa-border/60 gap-2",children:[x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsx("span",{className:"font-mono text-xs font-bold text-nasa-cyan uppercase tracking-wider",children:"ПАНЕЛЬ УПРАВЛЕНИЯ МОЩНОСТЬЮ И ЭКИПАЖЕМ"}),C>0&&x.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-nasa-amber/20 border border-nasa-amber text-nasa-amber animate-pulse",children:["Свободно: ",C," чел."]})]}),x.jsxs("div",{className:"flex items-center space-x-4 font-mono text-xs",children:[x.jsxs("div",{children:[x.jsx("span",{className:"text-slate-400",children:"Генерация: "}),x.jsxs("span",{className:"text-nasa-cyan font-bold",children:[h," кВт"]})]}),x.jsxs("div",{children:[x.jsx("span",{className:"text-slate-400",children:"Нагрузка: "}),x.jsxs("span",{className:m>h?"text-nasa-amber font-bold":"text-slate-200",children:[m," кВт"]})]}),x.jsxs("div",{children:[x.jsx("span",{className:"text-slate-400",children:"Баланс: "}),x.jsxs("span",{className:y>=0?"text-nasa-green font-bold":"text-nasa-red font-bold",children:[y>=0?`+${y}`:y," кВт·ч"]})]})]})]}),x.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:[x.jsxs("div",{className:"p-3 rounded-lg bg-nasa-dark/70 border border-nasa-border/60 space-y-2",children:[x.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[x.jsx("span",{className:"font-bold text-nasa-green",children:"СЖО / РЕГЕНЕРАЦИЯ"}),x.jsxs("span",{className:"text-slate-300 font-bold",children:[u.lifeSupport,"%"]})]}),x.jsx("input",{type:"range",min:"0",max:"150",step:"10",value:u.lifeSupport,onChange:g=>_("lifeSupport",g.target.value),className:"w-full accent-nasa-green cursor-pointer h-1.5 bg-slate-800 rounded-lg"}),x.jsxs("div",{className:"flex justify-between items-center pt-1 border-t border-nasa-border/30 text-xs font-mono",children:[x.jsx("span",{className:"text-[10px] text-slate-400",children:"Экипаж:"}),x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsx("button",{onClick:()=>M("lifeSupport",-1),className:"w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold",children:"-"}),x.jsx("span",{className:"font-bold text-white min-w-3 text-center",children:f.assigned.lifeSupport}),x.jsx("button",{disabled:C===0,onClick:()=>M("lifeSupport",1),className:`w-5 h-5 rounded flex items-center justify-center font-bold ${C>0?"bg-nasa-green text-nasa-dark hover:bg-emerald-400":"bg-slate-800 text-slate-600"}`,children:"+"})]})]})]}),x.jsxs("div",{className:"p-3 rounded-lg bg-nasa-dark/70 border border-nasa-border/60 space-y-2",children:[x.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[x.jsx("span",{className:"font-bold text-emerald-400",children:"ТЕПЛИЦЫ / АГРО"}),x.jsxs("span",{className:"text-slate-300 font-bold",children:[u.agro,"%"]})]}),x.jsx("input",{type:"range",min:"0",max:"150",step:"10",value:u.agro,onChange:g=>_("agro",g.target.value),className:"w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"}),x.jsxs("div",{className:"flex justify-between items-center pt-1 border-t border-nasa-border/30 text-xs font-mono",children:[x.jsx("span",{className:"text-[10px] text-slate-400",children:"Биологи:"}),x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsx("button",{onClick:()=>M("agro",-1),className:"w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold",children:"-"}),x.jsx("span",{className:"font-bold text-white min-w-3 text-center",children:f.assigned.agro}),x.jsx("button",{disabled:C===0,onClick:()=>M("agro",1),className:`w-5 h-5 rounded flex items-center justify-center font-bold ${C>0?"bg-emerald-400 text-nasa-dark hover:bg-emerald-300":"bg-slate-800 text-slate-600"}`,children:"+"})]})]})]}),x.jsxs("div",{className:"p-3 rounded-lg bg-nasa-dark/70 border border-nasa-border/60 space-y-2",children:[x.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[x.jsx("span",{className:"font-bold text-nasa-cyan",children:"МАГНИТНЫЙ ЩИТ"}),x.jsxs("span",{className:"text-slate-300 font-bold",children:[u.shield,"%"]})]}),x.jsx("input",{type:"range",min:"0",max:"150",step:"10",value:u.shield,onChange:g=>_("shield",g.target.value),className:"w-full accent-nasa-cyan cursor-pointer h-1.5 bg-slate-800 rounded-lg"}),x.jsxs("div",{className:"flex justify-between items-center pt-1 border-t border-nasa-border/30 text-xs font-mono",children:[x.jsx("span",{className:"text-[10px] text-slate-400",children:"Инженеры защиты:"}),x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsx("button",{onClick:()=>M("shieldAndRepair",-1),className:"w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold",children:"-"}),x.jsx("span",{className:"font-bold text-white min-w-3 text-center",children:f.assigned.shieldAndRepair}),x.jsx("button",{disabled:C===0,onClick:()=>M("shieldAndRepair",1),className:`w-5 h-5 rounded flex items-center justify-center font-bold ${C>0?"bg-nasa-cyan text-nasa-dark hover:bg-cyan-300":"bg-slate-800 text-slate-600"}`,children:"+"})]})]})]})]}),x.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-between gap-3",children:[x.jsx("div",{className:"text-xs font-mono text-nasa-muted",children:S>0?x.jsx("span",{className:"text-nasa-amber font-bold",children:"⚠️ Внимание: Энергии недостаточно! Будут отключены второстепенные системы."}):x.jsx("span",{children:"✅ Все системы обеспечены номинальной мощностью на следующий сол."})}),x.jsxs("button",{onClick:()=>{kt.playSolTransition(),o()},className:"w-full sm:w-auto px-8 py-3.5 bg-nasa-cyan hover:bg-cyan-300 text-nasa-dark font-extrabold font-mono text-xs md:text-sm tracking-widest uppercase rounded-lg transition-all shadow-hud-cyan hover:shadow-cyan-400/40",children:["ЗАВЕРШИТЬ СОЛ ",l," →"]})]})]})}function jx({gameState:s,scienceFacts:e=[]}){const[t,r]=$t.useState(0),{oxygen:o,water:l,food:u,energy:f,radiationDose:h}=s.resources,{weather:m}=s.environment,{location:y}=s.meta;let S=y==="moon"?"moon_location":"mars_location";o<40?S="low_oxygen":l<120?S="low_water":f<30?S="low_energy":u<100?S="low_food":m===Tn.SOLAR_FLARE||h>200?S="high_radiation":m===Tn.DUST_STORM&&(S="dust_storm");const _=e.filter(C=>C.trigger===S),M=_.length>0?_[t%_.length]:e[t%(e.length||1)]||{title:"Консультант NASA",content:"Все системы базы в пределах нормальных допусков."},w=()=>{kt.playClick(),r(C=>C+1)};return x.jsxs("div",{className:"w-full h-full hud-panel rounded-xl border border-nasa-border/80 p-4 flex flex-col justify-between",children:[x.jsxs("div",{children:[x.jsxs("div",{className:"flex items-center justify-between border-b border-nasa-border/60 pb-2 mb-3",children:[x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsx("span",{className:"w-2 h-2 rounded-full bg-nasa-cyan animate-pulse"}),x.jsx("span",{className:"font-mono text-xs font-bold text-nasa-cyan uppercase tracking-wider",children:"NASA SCIENCE ADVISOR"})]}),x.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"ISRU // ECLSS"})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-nasa-cyan/10 border border-nasa-cyan/30 text-nasa-cyan font-bold inline-block",children:"НАУЧНАЯ СПРАВКА"}),x.jsx("h4",{className:"text-sm font-bold text-white leading-snug",children:M.title}),x.jsx("p",{className:"text-xs text-slate-300 leading-relaxed pt-1",children:M.content})]})]}),x.jsxs("div",{className:"pt-3 border-t border-nasa-border/40 flex justify-between items-center text-xs font-mono",children:[x.jsx("span",{className:"text-[10px] text-slate-500",children:"Данные исследований NASA"}),x.jsx("button",{onClick:w,className:"text-nasa-cyan hover:text-cyan-300 text-xs font-bold",children:"Следующий факт →"})]})]})}function Xx({event:s,onResolveChoice:e}){if(!s)return null;const t=r=>{kt.playClick(),e(r)};return x.jsx("div",{className:"fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4",children:x.jsxs("div",{className:"max-w-xl w-full hud-panel rounded-xl border border-nasa-red shadow-hud-red p-6 space-y-5 animate-in fade-in duration-200",children:[x.jsxs("div",{className:"flex items-center justify-between border-b border-nasa-red/40 pb-3",children:[x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsx("span",{className:"w-3 h-3 rounded-full bg-nasa-red animate-ping"}),x.jsx("span",{className:"font-mono text-xs font-bold text-nasa-red uppercase tracking-widest",children:"КРИЗИСНАЯ ДИЛЕММА // ТРЕБУЕТСЯ РЕШЕНИЕ КОМАНДИРА"})]}),x.jsx("span",{className:"text-xs font-mono text-slate-400",children:"PRIORITY 1"})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("h3",{className:"text-xl font-extrabold text-white tracking-wide",children:s.title}),x.jsx("p",{className:"text-xs md:text-sm text-slate-200 leading-relaxed",children:s.description})]}),s.nasaScienceFact&&x.jsxs("div",{className:"p-3.5 rounded-lg bg-nasa-dark/90 border border-nasa-cyan/40 text-xs space-y-1",children:[x.jsx("div",{className:"flex items-center space-x-1.5 text-nasa-cyan font-mono font-bold text-[11px]",children:x.jsx("span",{children:"🔬 НАУЧНАЯ МОДЕЛЬ NASA:"})}),x.jsx("p",{className:"text-slate-300 text-[11px] leading-relaxed",children:s.nasaScienceFact})]}),x.jsxs("div",{className:"space-y-3 pt-1",children:[x.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-nasa-muted block",children:"Варианты действий (компромиссы систем):"}),x.jsx("div",{className:"space-y-2.5",children:s.choices.map((r,o)=>x.jsxs("button",{onClick:()=>t(r),className:"w-full text-left p-3.5 rounded-lg border border-nasa-border/80 bg-nasa-card hover:border-nasa-cyan hover:bg-nasa-cyan/5 transition-all text-xs font-mono group",children:[x.jsx("div",{className:"flex justify-between items-center mb-1",children:x.jsxs("span",{className:"font-bold text-white group-hover:text-nasa-cyan transition-colors",children:["[",o+1,"] ",r.label]})}),x.jsx("p",{className:"text-slate-400 text-[11px] font-sans",children:r.description}),r.effects&&x.jsx("div",{className:"mt-2 flex flex-wrap gap-2 text-[10px]",children:Object.entries(r.effects).map(([l,u])=>{const f=u>0,h=f?"text-nasa-green bg-nasa-green/10":"text-nasa-red bg-nasa-red/10";return x.jsxs("span",{className:`px-2 py-0.5 rounded border border-current font-bold ${h}`,children:[l.toUpperCase(),": ",f?`+${u}`:u]},l)})})]},r.id||o))})]})]})})}function Yx({gameState:s,preview:e,onClose:t}){const{location:r}=s.meta,o=$s[r]||$s.mars,l=s.crew.total;return x.jsx("div",{className:"fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4",children:x.jsxs("div",{className:"max-w-3xl w-full max-h-[85vh] overflow-y-auto hud-panel rounded-xl border border-nasa-cyan shadow-hud-cyan p-6 space-y-6",children:[x.jsxs("div",{className:"flex items-center justify-between border-b border-nasa-border/80 pb-3",children:[x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsx("span",{className:"text-nasa-cyan font-mono text-lg font-bold",children:"[ƒx]"}),x.jsxs("div",{children:[x.jsx("h3",{className:"font-mono text-sm font-bold text-white uppercase tracking-wider",children:"Научная Математическая Модель NASA (Режим Жюри)"}),x.jsx("p",{className:"text-[11px] text-nasa-muted",children:"Проверка детерминированных формул баланса на базе NASA Mars DRA 5.0 и Artemis"})]})]}),x.jsx("button",{onClick:t,className:"px-2.5 py-1 text-xs font-mono rounded border border-nasa-border hover:border-nasa-cyan text-slate-300 hover:text-white transition-colors",children:"✕ ЗАКРЫТЬ"})]}),x.jsxs("div",{className:"p-4 rounded-lg bg-nasa-dark/90 border border-nasa-border/70 space-y-2",children:[x.jsxs("div",{className:"flex justify-between items-center font-mono text-xs",children:[x.jsx("span",{className:"text-nasa-cyan font-bold",children:"1. ЭЛЕКТРОЭНЕРГИЯ И КАСКАДНЫЙ БАЛАНС"}),x.jsx("span",{className:"text-slate-400",children:"кВт·ч"})]}),x.jsx("div",{className:"p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-200",children:"E_gen = (P_solar × K_weather) + P_nuclear"}),x.jsxs("p",{className:"text-xs text-slate-300",children:[x.jsx("strong",{children:"Живые параметры:"})," Солнечная база = ",o.solarIrradianceBase," кВт, Реактор = ",o.nuclearOutputBase," кВт. Текущая генерация = ",x.jsxs("strong",{children:[e.totalGen," кВт"]})," | Текущее потребление = ",x.jsxs("strong",{children:[e.totalDemand," кВт"]}),".",x.jsx("br",{}),x.jsx("em",{children:"Каскад отключения при дефиците:"})," 1) Агромодуль → 2) Магнитный дефлектор → 3) Подогрев и электролиз СЖО."]})]}),x.jsxs("div",{className:"p-4 rounded-lg bg-nasa-dark/90 border border-nasa-border/70 space-y-2",children:[x.jsxs("div",{className:"flex justify-between items-center font-mono text-xs",children:[x.jsx("span",{className:"text-nasa-green font-bold",children:"2. СЖО: ДЫХАНИЕ И РЕГЕНЕРАЦИЯ (SABATIER + MOXIE)"}),x.jsx("span",{className:"text-slate-400",children:"кг / л в сутки"})]}),x.jsxs("div",{className:"p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-200 space-y-1",children:[x.jsx("div",{children:"O2_cons = N_crew × 0.84 кг/день | W_cons = N_crew × 3.5 л/день"}),x.jsx("div",{children:"O2_recycled = O2_cons × 0.85 × (Power_life / 100) × Crew_efficiency"})]}),x.jsxs("p",{className:"text-xs text-slate-300",children:["Для экипажа из ",x.jsxs("strong",{children:[l," специалистов"]})," суточное потребление составляет ",(l*Ka.O2_KG_PER_PERSON).toFixed(2)," кг O₂ и ",(l*Ka.WATER_L_PER_PERSON).toFixed(1)," л воды. Рециркуляция возвращает до 85% при 100% мощности и наличии инженера в отсеке."]})]}),x.jsxs("div",{className:"p-4 rounded-lg bg-nasa-dark/90 border border-nasa-border/70 space-y-2",children:[x.jsxs("div",{className:"flex justify-between items-center font-mono text-xs",children:[x.jsx("span",{className:"text-emerald-400 font-bold",children:"3. БИОРЕГЕНЕРАЦИЯ: ГИДРОПОНИКА И КАЛОРИИ"}),x.jsx("span",{className:"text-slate-400",children:"кг биомассы"})]}),x.jsx("div",{className:"p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-100",children:"F_prod = Level_agro × 1.8 × K_power × K_crew | Бонус O2 = +0.15 кг/сол на уровень"}),x.jsxs("p",{className:"text-xs text-slate-300",children:["Суточная норма сухого рациона: ",x.jsx("strong",{children:"0.62 кг на человека"}),". Работающая теплица фотосинтезирует дополнительный кислород, компенсируя утечки, но расходует воду и электроэнергию на фитолампы."]})]}),x.jsxs("div",{className:"p-4 rounded-lg bg-nasa-dark/90 border border-nasa-border/70 space-y-2",children:[x.jsxs("div",{className:"flex justify-between items-center font-mono text-xs",children:[x.jsx("span",{className:"text-nasa-amber font-bold",children:"4. РАДИАЦИОННОЕ ЭКРАНИРОВАНИЕ И ДОЗИМЕТРИЯ"}),x.jsx("span",{className:"text-slate-400",children:"мЗв (миллизиверты)"})]}),x.jsx("div",{className:"p-2.5 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-amber-200",children:"R_daily = (R_ambient + R_flare) / (1 + S_regolith + S_water + S_magnetic)"}),x.jsxs("p",{className:"text-xs text-slate-300",children:["Фон на локации (",o.name,"): ",x.jsxs("strong",{children:[o.ambientRadiation," мЗв/сол"]}),". Коэффициенты поглощения NASA: Реголитовый купол (+40%), Водяная стена (+55%), Активный сверхпроводящий магнит (+70%). Предел безопасности NASA: ",x.jsx("strong",{children:"500 мЗв"})," за миссию. Превышение порога вызывает лучевую болезнь экипажа."]})]}),x.jsx("div",{className:"p-3 rounded bg-nasa-cyan/10 border border-nasa-cyan/40 text-xs font-mono text-nasa-cyan",children:"✓ Модель полностью детерминирована, реализована в изолированном файле SimulationEngine.js и покрыта автоматическими стресс-тестами (100 симуляций)."})]})})}function qx({gameState:s,onRestart:e,onNewMission:t}){const{meta:r,resources:o,history:l}=s,{isVictory:u,currentSol:f,maxSols:h,gameOverReason:m,commanderName:y,location:S}=r,_=ng.generateDebriefReport(l,r),M=()=>{if(!l||l.length<2)return x.jsx("div",{className:"text-center py-8 text-xs font-mono text-nasa-muted",children:"Недостаточно данных для построения графика (сессия завершена на первом ходу)."});const w=640,C=180,g=35,v=w-g*2,N=C-g*2,F=l.length-1,P=l.map((V,k)=>({x:g+k/F*v,y:g+N-Math.min(150,V.resources.energy)/150*N})),U=l.map((V,k)=>({x:g+k/F*v,y:g+N-V.resources.oxygen/100*N})),D=l.map((V,k)=>({x:g+k/F*v,y:g+N-Math.min(600,V.resources.water)/600*N})),E=l.map((V,k)=>({x:g+k/F*v,y:g+N-Math.min(600,V.resources.radiationDose)/600*N})),b=V=>V.map(k=>`${k.x},${k.y}`).join(" ");return x.jsxs("div",{className:"space-y-2",children:[x.jsxs("div",{className:"flex flex-wrap items-center justify-between text-xs font-mono gap-2",children:[x.jsx("span",{className:"text-slate-400 font-bold",children:"ДИНАМИКА РЕСУРСОВ ПО СОЛАМ:"}),x.jsxs("div",{className:"flex items-center space-x-3 text-[11px]",children:[x.jsxs("span",{className:"flex items-center space-x-1",children:[x.jsx("span",{className:"w-2.5 h-1 bg-nasa-cyan inline-block rounded"}),x.jsx("span",{className:"text-nasa-cyan",children:"Энергия"})]}),x.jsxs("span",{className:"flex items-center space-x-1",children:[x.jsx("span",{className:"w-2.5 h-1 bg-nasa-green inline-block rounded"}),x.jsx("span",{className:"text-nasa-green",children:"Кислород"})]}),x.jsxs("span",{className:"flex items-center space-x-1",children:[x.jsx("span",{className:"w-2.5 h-1 bg-blue-400 inline-block rounded"}),x.jsx("span",{className:"text-blue-400",children:"Вода"})]}),x.jsxs("span",{className:"flex items-center space-x-1",children:[x.jsx("span",{className:"w-2.5 h-1 bg-nasa-red inline-block rounded"}),x.jsx("span",{className:"text-nasa-red",children:"Радиация"})]})]})]}),x.jsx("div",{className:"rounded-lg bg-nasa-dark/90 border border-nasa-border/60 p-2 overflow-x-auto",children:x.jsxs("svg",{viewBox:`0 0 ${w} ${C}`,className:"w-full h-auto min-w-[500px]",children:[x.jsx("line",{x1:g,y1:g,x2:w-g,y2:g,stroke:"#2A3548",strokeDasharray:"3 3"}),x.jsx("line",{x1:g,y1:g+N/2,x2:w-g,y2:g+N/2,stroke:"#2A3548",strokeDasharray:"3 3"}),x.jsx("line",{x1:g,y1:g+N,x2:w-g,y2:g+N,stroke:"#475569"}),x.jsx("polyline",{fill:"none",stroke:"#00F0FF",strokeWidth:"2",points:b(P)}),x.jsx("polyline",{fill:"none",stroke:"#00E676",strokeWidth:"2",points:b(U)}),x.jsx("polyline",{fill:"none",stroke:"#60A5FA",strokeWidth:"2",points:b(D)}),x.jsx("polyline",{fill:"none",stroke:"#FF2A55",strokeWidth:"2",strokeDasharray:"4 2",points:b(E)}),x.jsx("text",{x:g,y:C-10,fill:"#94A3B8",fontSize:"10",fontFamily:"JetBrains Mono",children:"Сол 1"}),x.jsxs("text",{x:w-g,y:C-10,fill:"#94A3B8",fontSize:"10",fontFamily:"JetBrains Mono",textAnchor:"end",children:["Сол ",l[l.length-1].sol]})]})})]})};return x.jsx("div",{className:"flex-1 flex items-center justify-center p-4 md:p-8 max-w-4xl mx-auto w-full",children:x.jsxs("div",{className:`w-full hud-panel rounded-xl border ${u?"border-nasa-green shadow-hud-green":"border-nasa-red shadow-hud-red"} p-6 md:p-8 space-y-6 animate-in fade-in duration-300`,children:[x.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-nasa-border/60 pb-4 gap-2",children:[x.jsxs("div",{children:[x.jsxs("span",{className:"font-mono text-xs uppercase tracking-widest text-nasa-muted",children:["ПОСЛЕПОЛЕТНЫЙ РАЗБОР // МИССИЯ ",S.toUpperCase()]}),x.jsx("h2",{className:`text-2xl md:text-3xl font-extrabold tracking-wide mt-1 ${u?"text-nasa-green":"text-nasa-red"}`,children:u?"🏆 МИССИЯ УСПЕШНО ВЫПОЛНЕНА":"💀 МИССИЯ ПРЕРВАНА"})]}),x.jsxs("div",{className:"font-mono text-right",children:[x.jsx("div",{className:"text-xs text-slate-400",children:"ПРОДОЛЖИТЕЛЬНОСТЬ"}),x.jsxs("div",{className:"text-lg font-bold text-nasa-cyan",children:[f," из ",h," солов"]})]})]}),!u&&m&&x.jsxs("div",{className:"p-4 rounded-lg bg-nasa-red/10 border border-nasa-red/30 text-xs font-mono text-nasa-red space-y-1",children:[x.jsx("span",{className:"font-bold uppercase block",children:"Критическая причина крушения базы:"}),x.jsx("p",{className:"text-slate-200",children:m})]}),x.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono",children:[x.jsxs("div",{className:"p-3 rounded bg-nasa-dark/80 border border-nasa-border/50",children:[x.jsx("span",{className:"text-slate-400 block text-[10px]",children:"КОМАНДИР"}),x.jsx("span",{className:"text-white font-bold",children:y})]}),x.jsxs("div",{className:"p-3 rounded bg-nasa-dark/80 border border-nasa-border/50",children:[x.jsx("span",{className:"text-slate-400 block text-[10px]",children:"СОХРАНЕНО ЗДОРОВЬЯ"}),x.jsxs("span",{className:"text-nasa-green font-bold",children:[Math.round(o.crewHealth),"%"]})]}),x.jsxs("div",{className:"p-3 rounded bg-nasa-dark/80 border border-nasa-border/50",children:[x.jsx("span",{className:"text-slate-400 block text-[10px]",children:"НАКОПЛЕНА РАДИАЦИЯ"}),x.jsxs("span",{className:"text-nasa-amber font-bold",children:[Math.round(o.radiationDose)," мЗв"]})]}),x.jsxs("div",{className:"p-3 rounded bg-nasa-dark/80 border border-nasa-border/50",children:[x.jsx("span",{className:"text-slate-400 block text-[10px]",children:"ИТОГОВЫЙ СЧЕТ"}),x.jsxs("span",{className:"text-nasa-cyan font-bold",children:[Math.round(f*100+(u?1500:0)+o.payloadPoints)," очков"]})]})]}),M(),x.jsxs("div",{className:"space-y-3",children:[x.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-nasa-muted block",children:"Инженерный аудит решений командира (NASA Post-Flight Analytics):"}),x.jsx("div",{className:"space-y-2",children:_.map((w,C)=>{const g=w.type==="critical"?"border-nasa-red bg-nasa-red/10":w.type==="warning"?"border-nasa-amber bg-nasa-amber/10":"border-nasa-green bg-nasa-green/10";return x.jsxs("div",{className:`p-3 rounded-lg border text-xs font-mono ${g}`,children:[x.jsxs("div",{className:"font-bold text-white flex justify-between",children:[x.jsx("span",{children:w.title}),w.sol&&x.jsxs("span",{className:"text-slate-400",children:["Сол ",w.sol]})]}),x.jsx("p",{className:"text-slate-300 text-[11px] font-sans mt-1",children:w.description})]},C)})})]}),x.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:[x.jsx("button",{onClick:()=>{kt.playClick(),e()},className:"w-full py-3.5 bg-nasa-cyan hover:bg-cyan-300 text-nasa-dark font-extrabold font-mono text-xs tracking-wider uppercase rounded-lg transition-all shadow-hud-cyan",children:"ПОВТОРИТЬ МИССИЮ (ТА ЖЕ ПЛАНЕТА)"}),x.jsx("button",{onClick:()=>{kt.playClick(),t()},className:"w-full py-3.5 bg-nasa-card hover:bg-slate-800 border border-nasa-border text-slate-200 font-bold font-mono text-xs tracking-wider uppercase rounded-lg transition-colors",children:"СМЕНИТЬ ПЛАНЕТУ / В ГЛАВНОЕ МЕНЮ"})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="187",$x=0,tm=1,Kx=2,Bl=1,Zx=2,qa=3,as=0,zn=1,Bi=2,Ks=0,Za=1,nm=2,im=3,rm=4,Jx=5,qs=100,Qx=101,e_=102,t_=103,n_=104,i_=200,r_=201,s_=202,a_=203,ig=204,rg=205,o_=206,l_=207,c_=208,u_=209,d_=210,f_=211,h_=212,p_=213,m_=214,_d=0,vd=1,Sd=2,eo=3,yd=4,Md=5,Ed=6,wd=7,sg=0,g_=1,x_=2,or=0,ag=1,og=2,lg=3,df=4,cg=5,ug=6,dg=7,fg=300,Js=301,to=302,Vu=303,Wu=304,Td=1e3,ar=1001,Ad=1002,An=1003,__=1004,ml=1005,qn=1006,ju=1007,Ur=1008,ni=1009,hg=1010,pg=1011,no=1012,ff=1013,Wi=1014,Gi=1015,ji=1016,hf=1017,pf=1018,Qs=1020,mg=35902,gg=35899,xg=1021,_g=1022,Hi=1023,kr=1026,Fr=1027,vg=1028,mf=1029,os=1030,gf=1031,xf=1033,zl=33776,Gl=33777,Hl=33778,Vl=33779,bd=35840,Rd=35841,Cd=35842,Nd=35843,Pd=36196,Ld=37492,Dd=37496,Id=37488,Ud=37489,ql=37490,Fd=37491,Od=37808,kd=37809,Bd=37810,zd=37811,Gd=37812,Hd=37813,Vd=37814,Wd=37815,jd=37816,Xd=37817,Yd=37818,qd=37819,$d=37820,Kd=37821,Zd=36492,Jd=36494,Qd=36495,ef=36283,tf=36284,$l=36285,nf=36286,v_=3200,rf=0,S_=1,Ir="",fi="srgb",Kl="srgb-linear",Zl="linear",Dt="srgb",Xu=7680,y_=519,M_=512,E_=513,w_=514,Sg=515,T_=516,A_=517,yg=518,Mg=519,b_=35044,sm="300 es",Ai=2e3,io=2001;function R_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function C_(){const s=Jl("canvas");return s.style.display="block",s}const am={};function om(...s){const e="THREE."+s.shift();console.log(e,...s)}function Eg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ot(...s){s=Eg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Pt(...s){s=Eg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Wl(...s){const e=s.join(" ");e in am||(am[e]=!0,ot(...s))}function N_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const P_={[_d]:_d,[Sd]:Ed,[yd]:yd,[eo]:Md,[vd]:vd,[Ed]:Sd,[wd]:wd,[Md]:eo};class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lm=1234567;const Ja=Math.PI/180,ro=180/Math.PI;function na(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function _f(s,e){return(s%e+e)%e}function L_(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function D_(s,e,t){return s!==e?(t-s)/(e-s):0}function Qa(s,e,t){return(1-t)*s+t*e}function I_(s,e,t,r){return Qa(s,e,1-Math.exp(-t*r))}function U_(s,e=1){return e-Math.abs(_f(s,e*2)-e)}function F_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function O_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function k_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function B_(s,e){return s+Math.random()*(e-s)}function z_(s){return s*(.5-Math.random())}function G_(s){s!==void 0&&(lm=s);let e=lm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function H_(s){return s*Ja}function V_(s){return s*ro}function W_(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function j_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function X_(s,e,t,r,o){const l=Math.cos,u=Math.sin,f=l(t/2),h=u(t/2),m=l((e+r)/2),y=u((e+r)/2),S=l((e-r)/2),_=u((e-r)/2),M=l((r-e)/2),w=u((r-e)/2);switch(o){case"XYX":s.set(f*y,h*S,h*_,f*m);break;case"YZY":s.set(h*_,f*y,h*S,f*m);break;case"ZXZ":s.set(h*S,h*_,f*y,f*m);break;case"XZX":s.set(f*y,h*w,h*M,f*m);break;case"YXY":s.set(h*M,f*y,h*w,f*m);break;case"ZYZ":s.set(h*w,h*M,f*y,f*m);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function vf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Tg(s,e){if(e.constructor===Float32Array)return s;const t=vf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Ag(s,e){if(e.constructor===Float32Array)return s;const t=vf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Yu={DEG2RAD:Ja,RAD2DEG:ro,generateUUID:na,clamp:vt,euclideanModulo:_f,mapLinear:L_,inverseLerp:D_,lerp:Qa,damp:I_,pingpong:U_,smoothstep:F_,smootherstep:O_,randInt:k_,randFloat:B_,randFloatSpread:z_,seededRandom:G_,degToRad:H_,radToDeg:V_,isPowerOfTwo:W_,ceilPowerOfTwo:j_,floorPowerOfTwo:wg,setQuaternionFromProperEuler:X_,normalize:Ag,denormalize:Tg},Tf=class Tf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tf.prototype.isVector2=!0;let Et=Tf;class ia{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],m=r[o+1],y=r[o+2],S=r[o+3],_=l[u+0],M=l[u+1],w=l[u+2],C=l[u+3];if(S!==C||h!==_||m!==M||y!==w){let g=h*_+m*M+y*w+S*C;g<0&&(_=-_,M=-M,w=-w,C=-C,g=-g);let v=1-f;if(g<.9995){const N=Math.acos(g),F=Math.sin(N);v=Math.sin(v*N)/F,f=Math.sin(f*N)/F,h=h*v+_*f,m=m*v+M*f,y=y*v+w*f,S=S*v+C*f}else{h=h*v+_*f,m=m*v+M*f,y=y*v+w*f,S=S*v+C*f;const N=1/Math.sqrt(h*h+m*m+y*y+S*S);h*=N,m*=N,y*=N,S*=N}}e[t]=h,e[t+1]=m,e[t+2]=y,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],m=r[o+2],y=r[o+3],S=l[u],_=l[u+1],M=l[u+2],w=l[u+3];return e[t]=f*w+y*S+h*M-m*_,e[t+1]=h*w+y*_+m*S-f*M,e[t+2]=m*w+y*M+f*_-h*S,e[t+3]=y*w-f*S-h*_-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),y=f(o/2),S=f(l/2),_=h(r/2),M=h(o/2),w=h(l/2);switch(u){case"XYZ":this._x=_*y*S+m*M*w,this._y=m*M*S-_*y*w,this._z=m*y*w+_*M*S,this._w=m*y*S-_*M*w;break;case"YXZ":this._x=_*y*S+m*M*w,this._y=m*M*S-_*y*w,this._z=m*y*w-_*M*S,this._w=m*y*S+_*M*w;break;case"ZXY":this._x=_*y*S-m*M*w,this._y=m*M*S+_*y*w,this._z=m*y*w+_*M*S,this._w=m*y*S-_*M*w;break;case"ZYX":this._x=_*y*S-m*M*w,this._y=m*M*S+_*y*w,this._z=m*y*w-_*M*S,this._w=m*y*S+_*M*w;break;case"YZX":this._x=_*y*S+m*M*w,this._y=m*M*S+_*y*w,this._z=m*y*w-_*M*S,this._w=m*y*S-_*M*w;break;case"XZY":this._x=_*y*S-m*M*w,this._y=m*M*S-_*y*w,this._z=m*y*w+_*M*S,this._w=m*y*S+_*M*w;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],m=t[2],y=t[6],S=t[10],_=r+f+S;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(y-h)*M,this._y=(l-m)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(y-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+m)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+y)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+m)/M,this._y=(h+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,m=t._z,y=t._w;return this._x=r*y+u*f+o*m-l*h,this._y=o*y+u*h+l*f-r*m,this._z=l*y+u*m+r*h-o*f,this._w=u*y-r*f-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const m=Math.acos(f),y=Math.sin(m);h=Math.sin(h*m)/y,t=Math.sin(t*m)/y,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Af=class Af{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*o-f*r),y=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*m+u*S-f*y,this.y=r+h*y+f*m-l*S,this.z=o+h*S+l*y-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Af.prototype.isVector3=!0;let le=Af;const qu=new le,cm=new ia,bf=class bf{constructor(e,t,r,o,l,u,f,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,m)}set(e,t,r,o,l,u,f,h,m){const y=this.elements;return y[0]=e,y[1]=o,y[2]=f,y[3]=t,y[4]=l,y[5]=h,y[6]=r,y[7]=u,y[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],y=r[4],S=r[7],_=r[2],M=r[5],w=r[8],C=o[0],g=o[3],v=o[6],N=o[1],F=o[4],P=o[7],U=o[2],D=o[5],E=o[8];return l[0]=u*C+f*N+h*U,l[3]=u*g+f*F+h*D,l[6]=u*v+f*P+h*E,l[1]=m*C+y*N+S*U,l[4]=m*g+y*F+S*D,l[7]=m*v+y*P+S*E,l[2]=_*C+M*N+w*U,l[5]=_*g+M*F+w*D,l[8]=_*v+M*P+w*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],y=e[8];return t*u*y-t*f*m-r*l*y+r*f*h+o*l*m-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],y=e[8],S=y*u-f*m,_=f*h-y*l,M=m*l-u*h,w=t*S+r*_+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=S*C,e[1]=(o*m-y*r)*C,e[2]=(f*r-o*u)*C,e[3]=_*C,e[4]=(y*t-o*h)*C,e[5]=(o*l-f*t)*C,e[6]=M*C,e[7]=(r*h-m*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-o*m,o*h,-o*(-m*u+h*f)+f+t,0,0,1),this}scale(e,t){return Wl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($u.makeScale(e,t)),this}rotate(e){return Wl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($u.makeRotation(-e)),this}translate(e,t){return Wl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($u.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bf.prototype.isMatrix3=!0;let ct=bf;const $u=new ct,um=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y_(){const s={enabled:!0,workingColorSpace:Kl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Dt&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(o.r=Zs(o.r),o.g=Zs(o.g),o.b=Zs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ir?Zl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Kl]:{primaries:e,whitePoint:r,transfer:Zl,toXYZ:um,fromXYZ:dm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:um,fromXYZ:dm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const yt=Y_();function lr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class q_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fs===void 0&&(Fs=Jl("canvas")),Fs.width=e.width,Fs.height=e.height;const o=Fs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Fs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=lr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $_=0;class Sf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Ku(o[u].image)):l.push(Ku(o[u]))}else l=Ku(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?q_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let K_=0;const Zu=new le;class Fn extends us{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,r=ar,o=ar,l=qn,u=Ur,f=Hi,h=ni,m=Fn.DEFAULT_ANISOTROPY,y=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=na(),this.name="",this.source=new Sf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case ar:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case ar:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=fg;Fn.DEFAULT_ANISOTROPY=1;const Rf=class Rf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,m=h[0],y=h[4],S=h[8],_=h[1],M=h[5],w=h[9],C=h[2],g=h[6],v=h[10];if(Math.abs(y-_)<.01&&Math.abs(S-C)<.01&&Math.abs(w-g)<.01){if(Math.abs(y+_)<.1&&Math.abs(S+C)<.1&&Math.abs(w+g)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(m+1)/2,P=(M+1)/2,U=(v+1)/2,D=(y+_)/4,E=(S+C)/4,b=(w+g)/4;return F>P&&F>U?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=D/r,l=E/r):P>U?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=D/o,l=b/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=E/l,o=b/l),this.set(r,o,l,t),this}let N=Math.sqrt((g-w)*(g-w)+(S-C)*(S-C)+(_-y)*(_-y));return Math.abs(N)<.001&&(N=1),this.x=(g-w)/N,this.y=(S-C)/N,this.z=(_-y)/N,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rf.prototype.isVector4=!0;let en=Rf;class Z_ extends us{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new Fn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Sf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Z_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class bg extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class J_ extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ic=class ic{constructor(e,t,r,o,l,u,f,h,m,y,S,_,M,w,C,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,m,y,S,_,M,w,C,g)}set(e,t,r,o,l,u,f,h,m,y,S,_,M,w,C,g){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=h,v[2]=m,v[6]=y,v[10]=S,v[14]=_,v[3]=M,v[7]=w,v[11]=C,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ic().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),u=1/Os.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),m=Math.sin(o),y=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const _=u*y,M=u*S,w=f*y,C=f*S;t[0]=h*y,t[4]=-h*S,t[8]=m,t[1]=M+w*m,t[5]=_-C*m,t[9]=-f*h,t[2]=C-_*m,t[6]=w+M*m,t[10]=u*h}else if(e.order==="YXZ"){const _=h*y,M=h*S,w=m*y,C=m*S;t[0]=_+C*f,t[4]=w*f-M,t[8]=u*m,t[1]=u*S,t[5]=u*y,t[9]=-f,t[2]=M*f-w,t[6]=C+_*f,t[10]=u*h}else if(e.order==="ZXY"){const _=h*y,M=h*S,w=m*y,C=m*S;t[0]=_-C*f,t[4]=-u*S,t[8]=w+M*f,t[1]=M+w*f,t[5]=u*y,t[9]=C-_*f,t[2]=-u*m,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const _=u*y,M=u*S,w=f*y,C=f*S;t[0]=h*y,t[4]=w*m-M,t[8]=_*m+C,t[1]=h*S,t[5]=C*m+_,t[9]=M*m-w,t[2]=-m,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const _=u*h,M=u*m,w=f*h,C=f*m;t[0]=h*y,t[4]=C-_*S,t[8]=w*S+M,t[1]=S,t[5]=u*y,t[9]=-f*y,t[2]=-m*y,t[6]=M*S+w,t[10]=_-C*S}else if(e.order==="XZY"){const _=u*h,M=u*m,w=f*h,C=f*m;t[0]=h*y,t[4]=-S,t[8]=m*y,t[1]=_*S+C,t[5]=u*y,t[9]=M*S-w,t[2]=w*S-M,t[6]=f*y,t[10]=C*S+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q_,e,ev)}lookAt(e,t,r){const o=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Rr.crossVectors(r,ei),Rr.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Rr.crossVectors(r,ei)),Rr.normalize(),gl.crossVectors(ei,Rr),o[0]=Rr.x,o[4]=gl.x,o[8]=ei.x,o[1]=Rr.y,o[5]=gl.y,o[9]=ei.y,o[2]=Rr.z,o[6]=gl.z,o[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],y=r[1],S=r[5],_=r[9],M=r[13],w=r[2],C=r[6],g=r[10],v=r[14],N=r[3],F=r[7],P=r[11],U=r[15],D=o[0],E=o[4],b=o[8],V=o[12],k=o[1],j=o[5],q=o[9],se=o[13],z=o[2],re=o[6],ue=o[10],K=o[14],Z=o[3],G=o[7],$=o[11],I=o[15];return l[0]=u*D+f*k+h*z+m*Z,l[4]=u*E+f*j+h*re+m*G,l[8]=u*b+f*q+h*ue+m*$,l[12]=u*V+f*se+h*K+m*I,l[1]=y*D+S*k+_*z+M*Z,l[5]=y*E+S*j+_*re+M*G,l[9]=y*b+S*q+_*ue+M*$,l[13]=y*V+S*se+_*K+M*I,l[2]=w*D+C*k+g*z+v*Z,l[6]=w*E+C*j+g*re+v*G,l[10]=w*b+C*q+g*ue+v*$,l[14]=w*V+C*se+g*K+v*I,l[3]=N*D+F*k+P*z+U*Z,l[7]=N*E+F*j+P*re+U*G,l[11]=N*b+F*q+P*ue+U*$,l[15]=N*V+F*se+P*K+U*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],m=e[13],y=e[2],S=e[6],_=e[10],M=e[14],w=e[3],C=e[7],g=e[11],v=e[15],N=h*M-m*_,F=f*M-m*S,P=f*_-h*S,U=u*M-m*y,D=u*_-h*y,E=u*S-f*y;return t*(C*N-g*F+v*P)-r*(w*N-g*U+v*D)+o*(w*F-C*U+v*E)-l*(w*P-C*D+g*E)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],m=e[6],y=e[10];return t*(u*y-f*m)-r*(l*y-f*h)+o*(l*m-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],y=e[8],S=e[9],_=e[10],M=e[11],w=e[12],C=e[13],g=e[14],v=e[15],N=t*f-r*u,F=t*h-o*u,P=t*m-l*u,U=r*h-o*f,D=r*m-l*f,E=o*m-l*h,b=y*C-S*w,V=y*g-_*w,k=y*v-M*w,j=S*g-_*C,q=S*v-M*C,se=_*v-M*g,z=N*se-F*q+P*j+U*k-D*V+E*b;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/z;return e[0]=(f*se-h*q+m*j)*re,e[1]=(o*q-r*se-l*j)*re,e[2]=(C*E-g*D+v*U)*re,e[3]=(_*D-S*E-M*U)*re,e[4]=(h*k-u*se-m*V)*re,e[5]=(t*se-o*k+l*V)*re,e[6]=(g*P-w*E-v*F)*re,e[7]=(y*E-_*P+M*F)*re,e[8]=(u*q-f*k+m*b)*re,e[9]=(r*k-t*q-l*b)*re,e[10]=(w*D-C*P+v*N)*re,e[11]=(S*P-y*D-M*N)*re,e[12]=(f*V-u*j-h*b)*re,e[13]=(t*j-r*V+o*b)*re,e[14]=(C*F-w*U-g*N)*re,e[15]=(y*U-S*F+_*N)*re,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,m=l*u,y=l*f;return this.set(m*u+r,m*f-o*h,m*h+o*f,0,m*f+o*h,y*f+r,y*h-o*u,0,m*h-o*f,y*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,m=l+l,y=u+u,S=f+f,_=l*m,M=l*y,w=l*S,C=u*y,g=u*S,v=f*S,N=h*m,F=h*y,P=h*S,U=r.x,D=r.y,E=r.z;return o[0]=(1-(C+v))*U,o[1]=(M+P)*U,o[2]=(w-F)*U,o[3]=0,o[4]=(M-P)*D,o[5]=(1-(_+v))*D,o[6]=(g+N)*D,o[7]=0,o[8]=(w+F)*E,o[9]=(g-N)*E,o[10]=(1-(_+C))*E,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Os.set(o[0],o[1],o[2]).length();const f=Os.set(o[4],o[5],o[6]).length(),h=Os.set(o[8],o[9],o[10]).length();l<0&&(u=-u),yi.copy(this);const m=1/u,y=1/f,S=1/h;return yi.elements[0]*=m,yi.elements[1]*=m,yi.elements[2]*=m,yi.elements[4]*=y,yi.elements[5]*=y,yi.elements[6]*=y,yi.elements[8]*=S,yi.elements[9]*=S,yi.elements[10]*=S,t.setFromRotationMatrix(yi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=Ai,h=!1){const m=this.elements,y=2*l/(t-e),S=2*l/(r-o),_=(t+e)/(t-e),M=(r+o)/(r-o);let w,C;if(h)w=l/(u-l),C=u*l/(u-l);else if(f===Ai)w=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(f===io)w=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=y,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=S,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Ai,h=!1){const m=this.elements,y=2/(t-e),S=2/(r-o),_=-(t+e)/(t-e),M=-(r+o)/(r-o);let w,C;if(h)w=1/(u-l),C=u/(u-l);else if(f===Ai)w=-2/(u-l),C=-(u+l)/(u-l);else if(f===io)w=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=y,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=S,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};ic.prototype.isMatrix4=!0;let Kt=ic;const Os=new le,yi=new Kt,Q_=new le(0,0,0),ev=new le(1,1,1),Rr=new le,gl=new le,ei=new le,fm=new Kt,hm=new ia;class Br{constructor(e=0,t=0,r=0,o=Br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],m=o[5],y=o[9],S=o[2],_=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-y,M),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hm.setFromEuler(this),this.setFromQuaternion(hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Br.DEFAULT_ORDER="XYZ";class Rg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tv=0;const pm=new le,ks=new ia,tr=new Kt,xl=new le,Va=new le,nv=new le,iv=new ia,mm=new le(1,0,0),gm=new le(0,1,0),xm=new le(0,0,1),_m={type:"added"},rv={type:"removed"},Bs={type:"childadded",child:null},Ju={type:"childremoved",child:null};class bn extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new le,t=new Br,r=new ia,o=new le(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ct}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(mm,e)}rotateY(e){return this.rotateOnAxis(gm,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,t){return pm.copy(e).applyQuaternion(this.quaternion),this.position.add(pm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mm,e)}translateY(e){return this.translateOnAxis(gm,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?xl.copy(e):xl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Va,xl,this.up):tr.lookAt(xl,Va,this.up),this.quaternion.setFromRotationMatrix(tr),o&&(tr.extractRotation(o.matrixWorld),ks.setFromRotationMatrix(tr),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_m),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rv),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_m),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,nv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,y=h.length;m<y;m++){const S=h[m];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),y=u(e.images),S=u(e.shapes),_=u(e.skeletons),M=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),y.length>0&&(r.images=y),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(f){const h=[];for(const m in f){const y=f[m];delete y.metadata,h.push(y)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bn.DEFAULT_UP=new le(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Or extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sv={type:"move"};class Qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const g=t.getJointPose(C,r),v=this._getHandJoint(m,C);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const y=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],_=y.position.distanceTo(S.position),M=.02,w=.005;m.inputState.pinching&&_>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Or;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function ed(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=yt.workingColorSpace){return this.r=e,this.g=t,this.b=r,yt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=yt.workingColorSpace){if(e=_f(e,1),t=vt(t,0,1),r=vt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ed(u,l,e+1/3),this.g=ed(u,l,e),this.b=ed(u,l,e-1/3)}return yt.colorSpaceToWorking(this,o),this}setStyle(e,t=fi){function r(l){l!==void 0&&parseFloat(l)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const r=Cg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return yt.workingToColorSpace(In.copy(this),e),Math.round(vt(In.r*255,0,255))*65536+Math.round(vt(In.g*255,0,255))*256+Math.round(vt(In.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(In.copy(this),t);const r=In.r,o=In.g,l=In.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,m;const y=(f+u)/2;if(f===u)h=0,m=0;else{const S=u-f;switch(m=y<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=m,e.l=y,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=fi){yt.workingToColorSpace(In.copy(this),e);const t=In.r,r=In.g,o=In.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(_l);const r=Qa(Cr.h,_l.h,t),o=Qa(Cr.s,_l.s,t),l=Qa(Cr.l,_l.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Mt;Mt.NAMES=Cg;class yf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(e),this.density=t}clone(){return new yf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class av extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Br,this.environmentIntensity=1,this.environmentRotation=new Br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new le,nr=new le,td=new le,ir=new le,zs=new le,Gs=new le,vm=new le,nd=new le,id=new le,rd=new le,sd=new en,ad=new en,od=new en;class Ti{constructor(e=new le,t=new le,r=new le){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Mi.subVectors(o,t),nr.subVectors(r,t),td.subVectors(e,t);const u=Mi.dot(Mi),f=Mi.dot(nr),h=Mi.dot(td),m=nr.dot(nr),y=nr.dot(td),S=u*m-f*f;if(S===0)return l.set(0,0,0),null;const _=1/S,M=(m*h-f*y)*_,w=(u*y-f*h)*_;return l.set(1-M-w,w,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,ir)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ir.x),h.addScaledVector(u,ir.y),h.addScaledVector(f,ir.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return sd.setScalar(0),ad.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(e,t),ad.fromBufferAttribute(e,r),od.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(sd,l.x),u.addScaledVector(ad,l.y),u.addScaledVector(od,l.z),u}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),nr.subVectors(e,t),Mi.cross(nr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Mi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ti.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;zs.subVectors(o,r),Gs.subVectors(l,r),nd.subVectors(e,r);const h=zs.dot(nd),m=Gs.dot(nd);if(h<=0&&m<=0)return t.copy(r);id.subVectors(e,o);const y=zs.dot(id),S=Gs.dot(id);if(y>=0&&S<=y)return t.copy(o);const _=h*S-y*m;if(_<=0&&h>=0&&y<=0&&h-y>0)return u=h/(h-y),t.copy(r).addScaledVector(zs,u);rd.subVectors(e,l);const M=zs.dot(rd),w=Gs.dot(rd);if(w>=0&&M<=w)return t.copy(l);const C=M*m-h*w;if(C<=0&&m>=0&&w<=0)return f=m/(m-w),t.copy(r).addScaledVector(Gs,f);const g=y*w-M*S;if(g<=0&&S-y>=0&&M-w>=0)return vm.subVectors(l,o),f=(S-y)/(S-y+(M-w)),t.copy(o).addScaledVector(vm,f);const v=1/(g+C+_);return u=C*v,f=_*v,t.copy(r).addScaledVector(zs,u).addScaledVector(Gs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ao{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(l,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vl.copy(r.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wa),Sl.subVectors(this.max,Wa),Hs.subVectors(e.a,Wa),Vs.subVectors(e.b,Wa),Ws.subVectors(e.c,Wa),Nr.subVectors(Vs,Hs),Pr.subVectors(Ws,Vs),ts.subVectors(Hs,Ws);let t=[0,-Nr.z,Nr.y,0,-Pr.z,Pr.y,0,-ts.z,ts.y,Nr.z,0,-Nr.x,Pr.z,0,-Pr.x,ts.z,0,-ts.x,-Nr.y,Nr.x,0,-Pr.y,Pr.x,0,-ts.y,ts.x,0];return!ld(t,Hs,Vs,Ws,Sl)||(t=[1,0,0,0,1,0,0,0,1],!ld(t,Hs,Vs,Ws,Sl))?!1:(yl.crossVectors(Nr,Pr),t=[yl.x,yl.y,yl.z],ld(t,Hs,Vs,Ws,Sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new le,new le,new le,new le,new le,new le,new le,new le],Ei=new le,vl=new ao,Hs=new le,Vs=new le,Ws=new le,Nr=new le,Pr=new le,ts=new le,Wa=new le,Sl=new le,yl=new le,ns=new le;function ld(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ns.fromArray(s,l);const f=o.x*Math.abs(ns.x)+o.y*Math.abs(ns.y)+o.z*Math.abs(ns.z),h=e.dot(ns),m=t.dot(ns),y=r.dot(ns);if(Math.max(-Math.max(h,m,y),Math.min(h,m,y))>f)return!1}return!0}const un=new le,Ml=new Et;let ov=0;class bi extends us{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ov++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=b_,this.updateRanges=[],this.gpuType=Gi,this.version=0,this._normalizationScale=e!==void 0?vf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tg(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ag(e,this.array)}}class Ng extends bi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Pg extends bi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Mn extends bi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const lv=new ao,ja=new le,cd=new le;class rc{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):lv.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);const t=ja.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ja,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add(cd)),this.expandByPoint(ja.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let cv=0;const di=new Kt,ud=new bn,js=new le,ti=new ao,Xa=new ao,yn=new le;class ii extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R_(e)?Pg:Ng)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,r){return di.makeTranslation(e,t,r),this.applyMatrix4(di),this}scale(e,t,r){return di.makeScale(e,t,r),this.applyMatrix4(di),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Mn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ti.setFromBufferAttribute(l),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Xa.setFromBufferAttribute(f),this.morphTargetsRelative?(yn.addVectors(ti.min,Xa.min),ti.expandByPoint(yn),yn.addVectors(ti.max,Xa.max),ti.expandByPoint(yn)):(ti.expandByPoint(Xa.min),ti.expandByPoint(Xa.max))}ti.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)yn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(yn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let m=0,y=f.count;m<y;m++)yn.fromBufferAttribute(f,m),h&&(js.fromBufferAttribute(e,m),yn.add(js)),o=Math.max(o,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new bi(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[],m=new Uint8Array(r.count);for(let V=0;V<r.count;V++)f[V]=new le,h[V]=new le;const y=new le,S=new le,_=new le,M=new Et,w=new Et,C=new Et,g=new le,v=new le;function N(V,k,j){m[V]=m[k]=m[j]=1,y.fromBufferAttribute(r,V),S.fromBufferAttribute(r,k),_.fromBufferAttribute(r,j),M.fromBufferAttribute(l,V),w.fromBufferAttribute(l,k),C.fromBufferAttribute(l,j),S.sub(y),_.sub(y),w.sub(M),C.sub(M);const q=1/(w.x*C.y-C.x*w.y);isFinite(q)&&(g.copy(S).multiplyScalar(C.y).addScaledVector(_,-w.y).multiplyScalar(q),v.copy(_).multiplyScalar(w.x).addScaledVector(S,-C.x).multiplyScalar(q),f[V].add(g),f[k].add(g),f[j].add(g),h[V].add(v),h[k].add(v),h[j].add(v))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let V=0,k=F.length;V<k;++V){const j=F[V],q=j.start,se=j.count;for(let z=q,re=q+se;z<re;z+=3)N(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const P=new le,U=new le,D=new le,E=new le;function b(V){D.fromBufferAttribute(o,V),E.copy(D);const k=f[V];P.copy(k),P.sub(D.multiplyScalar(D.dot(k))).normalize(),U.crossVectors(E,k);const q=U.dot(h[V])<0?-1:1;u.setXYZW(V,P.x,P.y,P.z,q)}for(let V=0,k=r.count;V<k;++V)m[V]&&b(V);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new bi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new le,l=new le,u=new le,f=new le,h=new le,m=new le,y=new le,S=new le;if(e)for(let _=0,M=e.count;_<M;_+=3){const w=e.getX(_+0),C=e.getX(_+1),g=e.getX(_+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,g),y.subVectors(u,l),S.subVectors(o,l),y.cross(S),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,g),f.add(y),h.add(y),m.add(y),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(g,m.x,m.y,m.z)}else for(let _=0,M=t.count;_<M;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),y.subVectors(u,l),S.subVectors(o,l),y.cross(S),r.setXYZ(_+0,y.x,y.y,y.z),r.setXYZ(_+1,y.x,y.y,y.z),r.setXYZ(_+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(f,h){const m=f.array,y=f.itemSize,S=f.normalized,_=new m.constructor(h.length*y);let M=0,w=0;for(let C=0,g=h.length;C<g;C++){f.isInterleavedBufferAttribute?M=h[C]*f.data.stride+f.offset:M=h[C]*y;for(let v=0;v<y;v++)_[w++]=m[M++]}return new bi(_,y,S)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ii,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let y=0,S=m.length;y<S;y++){const _=m[y],M=e(_,r);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],y=[];for(let S=0,_=m.length;S<_;S++){const M=m[S];y.push(M.toJSON(e.data))}y.length>0&&(o[h]=y,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const y=o[m];this.setAttribute(m,y.clone(t))}const l=e.morphAttributes;for(const m in l){const y=[],S=l[m];for(let _=0,M=S.length;_<M;_++)y.push(S[_].clone(t));this.morphAttributes[m]=y}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,y=u.length;m<y;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dd=new le,uv=new le,dv=new ct;class Dr{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=dd.subVectors(r,t).cross(uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(dd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||dv.getNormalMatrix(e),o=this.coplanarPoint(dd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let fv=0;class ra extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=na(),this.name="",this.type="Material",this.blending=Za,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ig,this.blendDst=rg,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xu,this.stencilZFail=Xu,this.stencilZPass=Xu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Dr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Et().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sr=new le,fd=new le,El=new le,wl=new le;class Lg{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){fd.copy(e).add(t).multiplyScalar(.5),El.copy(t).sub(e).normalize(),wl.copy(this.origin).sub(fd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(El),f=wl.dot(this.direction),h=-wl.dot(El),m=wl.lengthSq(),y=Math.abs(1-u*u);let S,_,M,w;if(y>0)if(S=u*h-f,_=u*f-h,w=l*y,S>=0)if(_>=-w)if(_<=w){const C=1/y;S*=C,_*=C,M=S*(S+u*_+2*f)+_*(u*S+_+2*h)+m}else _=l,S=Math.max(0,-(u*_+f)),M=-S*S+_*(_+2*h)+m;else _=-l,S=Math.max(0,-(u*_+f)),M=-S*S+_*(_+2*h)+m;else _<=-w?(S=Math.max(0,-(-u*l+f)),_=S>0?-l:Math.min(Math.max(-l,-h),l),M=-S*S+_*(_+2*h)+m):_<=w?(S=0,_=Math.min(Math.max(-l,-h),l),M=_*(_+2*h)+m):(S=Math.max(0,-(u*l+f)),_=S>0?l:Math.min(Math.max(-l,-h),l),M=-S*S+_*(_+2*h)+m);else _=u>0?-l:l,S=Math.max(0,-(u*_+f)),M=-S*S+_*(_+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(fd).addScaledVector(El,_),M}intersectSphere(e,t){if(e.radius<0)return null;sr.subVectors(e.center,this.origin);const r=sr.dot(this.direction),o=sr.dot(sr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const m=1/this.direction.x,y=1/this.direction.y,S=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),y>=0?(l=(e.min.y-_.y)*y,u=(e.max.y-_.y)*y):(l=(e.max.y-_.y)*y,u=(e.min.y-_.y)*y),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-_.z)*S,h=(e.max.z-_.z)*S):(f=(e.max.z-_.z)*S,h=(e.min.z-_.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,h=f.x,m=f.y,y=f.z,S=e.x-u.x,_=e.y-u.y,M=e.z-u.z,w=t.x-u.x,C=t.y-u.y,g=t.z-u.z,v=r.x-u.x,N=r.y-u.y,F=r.z-u.z,P=Math.abs(h),U=Math.abs(m),D=Math.abs(y);let E,b,V,k,j,q,se,z,re,ue,K,Z;if(P>=U&&P>=D?(V=h,q=S,re=w,Z=v,h>=0?(E=m,b=y,k=_,j=M,se=C,z=g,ue=N,K=F):(E=y,b=m,k=M,j=_,se=g,z=C,ue=F,K=N)):U>=D?(V=m,q=_,re=C,Z=N,m>=0?(E=y,b=h,k=M,j=S,se=g,z=w,ue=F,K=v):(E=h,b=y,k=S,j=M,se=w,z=g,ue=v,K=F)):(V=y,q=M,re=g,Z=F,y>=0?(E=h,b=m,k=S,j=_,se=w,z=C,ue=v,K=N):(E=m,b=h,k=_,j=S,se=C,z=w,ue=N,K=v)),V===0)return null;const G=E/V,$=b/V,I=1/V,Q=k-G*q,Re=j-$*q,ne=se-G*re,xe=z-$*re,ye=ue-G*Z,Ue=K-$*Z,_e=ye*xe-Ue*ne,Ge=Q*Ue-Re*ye,dt=ne*Re-xe*Q;if(o){if(_e<0||Ge<0||dt<0)return null}else if((_e<0||Ge<0||dt<0)&&(_e>0||Ge>0||dt>0))return null;const et=_e+Ge+dt;if(et===0)return null;const gt=I*(_e*q+Ge*re+dt*Z);return(et>0?gt<0:gt>0)?null:this.at(gt/et,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jl extends ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sm=new Kt,is=new Lg,Tl=new rc,ym=new le,Al=new le,bl=new le,Rl=new le,hd=new le,Cl=new le,Mm=new le,Nl=new le;class rn extends bn{constructor(e=new ii,t=new jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Cl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const y=f[h],S=l[h];y!==0&&(hd.fromBufferAttribute(S,e),u?Cl.addScaledVector(hd,y):Cl.addScaledVector(hd.sub(t),y))}t.add(Cl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(l),is.copy(e.ray).recast(e.near),!(Tl.containsPoint(is.origin)===!1&&(is.intersectSphere(Tl,ym)===null||is.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(Sm.copy(l).invert(),is.copy(e.ray).applyMatrix4(Sm),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,y=l.attributes.uv1,S=l.attributes.normal,_=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,C=_.length;w<C;w++){const g=_[w],v=u[g.materialIndex],N=Math.max(g.start,M.start),F=Math.min(f.count,Math.min(g.start+g.count,M.start+M.count));for(let P=N,U=F;P<U;P+=3){const D=f.getX(P),E=f.getX(P+1),b=f.getX(P+2);o=Pl(this,v,e,r,m,y,S,D,E,b),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let g=w,v=C;g<v;g+=3){const N=f.getX(g),F=f.getX(g+1),P=f.getX(g+2);o=Pl(this,u,e,r,m,y,S,N,F,P),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,C=_.length;w<C;w++){const g=_[w],v=u[g.materialIndex],N=Math.max(g.start,M.start),F=Math.min(h.count,Math.min(g.start+g.count,M.start+M.count));for(let P=N,U=F;P<U;P+=3){const D=P,E=P+1,b=P+2;o=Pl(this,v,e,r,m,y,S,D,E,b),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let g=w,v=C;g<v;g+=3){const N=g,F=g+1,P=g+2;o=Pl(this,u,e,r,m,y,S,N,F,P),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function hv(s,e,t,r,o,l,u,f){let h;if(e.side===zn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===as,f),h===null)return null;Nl.copy(f),Nl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Nl);return m<t.near||m>t.far?null:{distance:m,point:Nl.clone(),object:s}}function Pl(s,e,t,r,o,l,u,f,h,m){s.getVertexPosition(f,Al),s.getVertexPosition(h,bl),s.getVertexPosition(m,Rl);const y=hv(s,e,t,r,Al,bl,Rl,Mm);if(y){const S=new le;Ti.getBarycoord(Mm,Al,bl,Rl,S),o&&(y.uv=Ti.getInterpolatedAttribute(o,f,h,m,S,new Et)),l&&(y.uv1=Ti.getInterpolatedAttribute(l,f,h,m,S,new Et)),u&&(y.normal=Ti.getInterpolatedAttribute(u,f,h,m,S,new le),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const _={a:f,b:h,c:m,normal:new le,materialIndex:0};Ti.getNormal(Al,bl,Rl,_.normal),y.face=_,y.barycoord=S}return y}class pv extends Fn{constructor(e=null,t=1,r=1,o,l,u,f,h,m=An,y=An,S,_){super(null,u,f,h,m,y,o,l,S,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rs=new rc,mv=new Et(.5,.5),Ll=new le;class so{constructor(e=new Dr,t=new Dr,r=new Dr,o=new Dr,l=new Dr,u=new Dr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ai,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],m=l[3],y=l[4],S=l[5],_=l[6],M=l[7],w=l[8],C=l[9],g=l[10],v=l[11],N=l[12],F=l[13],P=l[14],U=l[15];if(o[0].setComponents(m-u,M-y,v-w,U-N).normalize(),o[1].setComponents(m+u,M+y,v+w,U+N).normalize(),o[2].setComponents(m+f,M+S,v+C,U+F).normalize(),o[3].setComponents(m-f,M-S,v-C,U-F).normalize(),r)o[4].setComponents(h,_,g,P).normalize(),o[5].setComponents(m-h,M-_,v-g,U-P).normalize();else if(o[4].setComponents(m-h,M-_,v-g,U-P).normalize(),t===Ai)o[5].setComponents(m+h,M+_,v+g,U+P).normalize();else if(t===io)o[5].setComponents(h,_,g,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=mv.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ll.x=o.normal.x>0?e.max.x:e.min.x,Ll.y=o.normal.y>0?e.max.y:e.min.y,Ll.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Em=new Kt;class Mf{constructor(){this.coordinateSystem=Ai,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];Em.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new so),r[o].setFromProjectionMatrix(Em,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new so),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new Mf().copy(this)}}class sf extends ra{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wm=new Kt,af=new Lg,Dl=new rc,Il=new le;class Tm extends bn{constructor(e=new ii,t=new sf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Dl.copy(r.boundingSphere),Dl.applyMatrix4(o),Dl.radius+=l,e.ray.intersectsSphere(Dl)===!1)return;wm.copy(o).invert(),af.copy(e.ray).applyMatrix4(wm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=r.index,S=r.attributes.position;if(m!==null){const _=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let w=_,C=M;w<C;w++){const g=m.getX(w);Il.fromBufferAttribute(S,g),Am(Il,g,h,o,e,t,this)}}else{const _=Math.max(0,u.start),M=Math.min(S.count,u.start+u.count);for(let w=_,C=M;w<C;w++)Il.fromBufferAttribute(S,w),Am(Il,w,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Am(s,e,t,r,o,l,u){const f=af.distanceSqToPoint(s);if(f<t){const h=new le;af.closestPointToPoint(s,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Dg extends Fn{constructor(e=[],t=Js,r,o,l,u,f,h,m,y){super(e,t,r,o,l,u,f,h,m,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gv extends Fn{constructor(e,t,r,o,l,u,f,h,m){super(e,t,r,o,l,u,f,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ea extends Fn{constructor(e,t,r=Wi,o,l,u,f=An,h=An,m,y=kr,S=1){if(y!==kr&&y!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:S};super(_,o,l,u,f,h,y,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ig extends ea{constructor(e,t=Wi,r=Js,o,l,u=An,f=An,h,m=kr){const y={width:e,height:e,depth:1},S=[y,y,y,y,y,y];super(e,e,t,r,o,l,u,f,h,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ug extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ls extends ii{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],y=[],S=[];let _=0,M=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Mn(m,3)),this.setAttribute("normal",new Mn(y,3)),this.setAttribute("uv",new Mn(S,2));function w(C,g,v,N,F,P,U,D,E,b,V){const k=P/E,j=U/b,q=P/2,se=U/2,z=D/2,re=E+1,ue=b+1;let K=0,Z=0;const G=new le;for(let $=0;$<ue;$++){const I=$*j-se;for(let Q=0;Q<re;Q++){const Re=Q*k-q;G[C]=Re*N,G[g]=I*F,G[v]=z,m.push(G.x,G.y,G.z),G[C]=0,G[g]=0,G[v]=D>0?1:-1,y.push(G.x,G.y,G.z),S.push(Q/E),S.push(1-$/b),K+=1}}for(let $=0;$<b;$++)for(let I=0;I<E;I++){const Q=_+I+re*$,Re=_+I+re*($+1),ne=_+(I+1)+re*($+1),xe=_+(I+1)+re*$;h.push(Q,Re,xe),h.push(Re,ne,xe),Z+=6}f.addGroup(M,Z,V),M+=Z,_+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ss extends ii{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const m=this;o=Math.floor(o),l=Math.floor(l);const y=[],S=[],_=[],M=[];let w=0;const C=[],g=r/2;let v=0;N(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(y),this.setAttribute("position",new Mn(S,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(M,2));function N(){const P=new le,U=new le;let D=0;const E=(t-e)/r;for(let b=0;b<=l;b++){const V=[],k=b/l,j=k*(t-e)+e;for(let q=0;q<=o;q++){const se=q/o,z=se*h+f,re=Math.sin(z),ue=Math.cos(z);U.x=j*re,U.y=-k*r+g,U.z=j*ue,S.push(U.x,U.y,U.z),P.set(re,E,ue).normalize(),_.push(P.x,P.y,P.z),M.push(se,1-k),V.push(w++)}C.push(V)}for(let b=0;b<o;b++)for(let V=0;V<l;V++){const k=C[V][b],j=C[V+1][b],q=C[V+1][b+1],se=C[V][b+1];(e>0||V!==0)&&(y.push(k,j,se),D+=3),(t>0||V!==l-1)&&(y.push(j,q,se),D+=3)}m.addGroup(v,D,0),v+=D}function F(P){const U=w,D=new Et,E=new le;let b=0;const V=P===!0?e:t,k=P===!0?1:-1;for(let q=1;q<=o;q++)S.push(0,g*k,0),_.push(0,k,0),M.push(.5,.5),w++;const j=w;for(let q=0;q<=o;q++){const z=q/o*h+f,re=Math.cos(z),ue=Math.sin(z);E.x=V*ue,E.y=g*k,E.z=V*re,S.push(E.x,E.y,E.z),_.push(0,k,0),D.x=re*.5+.5,D.y=ue*.5*k+.5,M.push(D.x,D.y),w++}for(let q=0;q<o;q++){const se=U+q,z=j+q;P===!0?y.push(z,z+1,se):y.push(z+1,z,se),b+=3}m.addGroup(v,b,P===!0?1:2),v+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ql extends ss{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Ql(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oo extends ii{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),m=f+1,y=h+1,S=e/f,_=t/h,M=[],w=[],C=[],g=[];for(let v=0;v<y;v++){const N=v*_-u;for(let F=0;F<m;F++){const P=F*S-l;w.push(P,-N,0),C.push(0,0,1),g.push(F/f),g.push(1-v/h)}}for(let v=0;v<h;v++)for(let N=0;N<f;N++){const F=N+m*v,P=N+m*(v+1),U=N+1+m*(v+1),D=N+1+m*v;M.push(F,P,D),M.push(P,U,D)}this.setIndex(M),this.setAttribute("position",new Mn(w,3)),this.setAttribute("normal",new Mn(C,3)),this.setAttribute("uv",new Mn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class ec extends ii{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let m=0;const y=[],S=new le,_=new le,M=[],w=[],C=[],g=[];for(let v=0;v<=r;v++){const N=[],F=v/r,P=u+F*f,U=e*Math.cos(P),D=Math.sqrt(e*e-U*U);let E=0;v===0&&u===0?E=.5/t:v===r&&h===Math.PI&&(E=-.5/t);for(let b=0;b<=t;b++){const V=b/t,k=o+V*l;S.x=-D*Math.cos(k),S.y=U,S.z=D*Math.sin(k),w.push(S.x,S.y,S.z),_.copy(S).normalize(),C.push(_.x,_.y,_.z),g.push(V+E,1-F),N.push(m++)}y.push(N)}for(let v=0;v<r;v++)for(let N=0;N<t;N++){const F=y[v][N+1],P=y[v][N],U=y[v+1][N],D=y[v+1][N+1];(v!==0||u>0)&&M.push(F,P,D),(v!==r-1||h<Math.PI)&&M.push(P,U,D)}this.setIndex(M),this.setAttribute("position",new Mn(w,3)),this.setAttribute("normal",new Mn(C,3)),this.setAttribute("uv",new Mn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tc extends ii{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const h=[],m=[],y=[],S=[],_=new le,M=new le,w=new le;for(let C=0;C<=r;C++){const g=u+C/r*f;for(let v=0;v<=o;v++){const N=v/o*l;M.x=(e+t*Math.cos(g))*Math.cos(N),M.y=(e+t*Math.cos(g))*Math.sin(N),M.z=t*Math.sin(g),m.push(M.x,M.y,M.z),_.x=e*Math.cos(N),_.y=e*Math.sin(N),w.subVectors(M,_).normalize(),y.push(w.x,w.y,w.z),S.push(v/o),S.push(C/r)}}for(let C=1;C<=r;C++)for(let g=1;g<=o;g++){const v=(o+1)*C+g-1,N=(o+1)*(C-1)+g-1,F=(o+1)*(C-1)+g,P=(o+1)*C+g;h.push(v,N,P),h.push(N,F,P)}this.setIndex(h),this.setAttribute("position",new Mn(m,3)),this.setAttribute("normal",new Mn(y,3)),this.setAttribute("uv",new Mn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ta(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(bm(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(bm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Bn(s){const e={};for(let t=0;t<s.length;t++){const r=ta(s[t]);for(const o in r)e[o]=r[o]}return e}function bm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function xv(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const _v={clone:ta,merge:Bn};var vv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vv,this.fragmentShader=Sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=xv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Mt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Et().fromArray(o.value);break;case"v3":this.uniforms[r].value=new le().fromArray(o.value);break;case"v4":this.uniforms[r].value=new en().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Kt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class yv extends cs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wi extends ra{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mv extends ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=v_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ev extends ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ef extends bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const pd=new Kt,Rm=new le,Cm=new le;class Og{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Rm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rm),Cm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){pd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(pd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,h=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===io||e.reversedDepth?t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),t.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ul=new le,Fl=new ia,Fi=new le;class kg extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Fl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Ul,Fl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new le,Nm=new Et,Pm=new Et;class hi extends kg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,Nm,Pm),t.subVectors(Pm,Nm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ja*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wv extends Og{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class Lm extends Ef{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new wv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Bg extends kg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=y*this.view.offsetY,h=f-y*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Tv extends Og{constructor(){super(new Bg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Av extends Ef{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new Tv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class bv extends Ef{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xs=-90,Ys=1;class of extends bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new hi(Xs,Ys,e,t);o.layers=this.layers,this.add(o);const l=new hi(Xs,Ys,e,t);l.layers=this.layers,this.add(l);const u=new hi(Xs,Ys,e,t);u.layers=this.layers,this.add(u);const f=new hi(Xs,Ys,e,t);f.layers=this.layers,this.add(f);const h=new hi(Xs,Ys,e,t);h.layers=this.layers,this.add(h);const m=new hi(Xs,Ys,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const m of t)this.remove(m);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===io)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,m,y]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=C,e.setRenderTarget(r,5,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,y),e.setRenderTarget(S,_,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Rv extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Dm(s,e,t,r){const o=Cv(r);switch(t){case xg:return s*e;case vg:return s*e/o.components*o.byteLength;case mf:return s*e/o.components*o.byteLength;case os:return s*e*2/o.components*o.byteLength;case gf:return s*e*2/o.components*o.byteLength;case _g:return s*e*3/o.components*o.byteLength;case Hi:return s*e*4/o.components*o.byteLength;case xf:return s*e*4/o.components*o.byteLength;case zl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Nd:return Math.max(s,16)*Math.max(e,8)/4;case bd:case Cd:return Math.max(s,8)*Math.max(e,8)/2;case Pd:case Ld:case Id:case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dd:case ql:case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case $d:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zd:case Jd:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case $l:case nf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cv(s){switch(s){case ni:case hg:return{byteLength:1,components:1};case no:case pg:case ji:return{byteLength:2,components:1};case hf:case pf:return{byteLength:2,components:4};case Wi:case ff:case Gi:return{byteLength:4,components:1};case mg:case gg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Nv(s){const e=new WeakMap;function t(f,h){const m=f.array,y=f.usage,S=m.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,m,y),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,m){const y=h.array,S=h.updateRanges;if(s.bindBuffer(m,f),S.length===0)s.bufferSubData(m,0,y);else{S.sort((M,w)=>M.start-w.start);let _=0;for(let M=1;M<S.length;M++){const w=S[_],C=S[M];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++_,S[_]=C)}S.length=_+1;for(let M=0,w=S.length;M<w;M++){const C=S[M];s.bufferSubData(m,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const y=e.get(f);(!y||y.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:o,remove:l,update:u}}var Pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ov=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,eS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aS="gl_FragColor = linearToOutputTexel( gl_FragColor );",oS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,uS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,MS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ES=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LS=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,DS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$S=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,QS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,my=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,My=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ey=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ty=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Py=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Oy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ky=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,By=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$y=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Pv,alphahash_pars_fragment:Lv,alphamap_fragment:Dv,alphamap_pars_fragment:Iv,alphatest_fragment:Uv,alphatest_pars_fragment:Fv,aomap_fragment:Ov,aomap_pars_fragment:kv,batching_pars_vertex:Bv,batching_vertex:zv,begin_vertex:Gv,beginnormal_vertex:Hv,bsdfs:Vv,iridescence_fragment:Wv,bumpmap_pars_fragment:jv,clipping_planes_fragment:Xv,clipping_planes_pars_fragment:Yv,clipping_planes_pars_vertex:qv,clipping_planes_vertex:$v,color_fragment:Kv,color_pars_fragment:Zv,color_pars_vertex:Jv,color_vertex:Qv,common:eS,defaultnormal_vertex:tS,displacementmap_pars_vertex:nS,displacementmap_vertex:iS,emissivemap_fragment:rS,emissivemap_pars_fragment:sS,colorspace_fragment:aS,colorspace_pars_fragment:oS,envmap_fragment:lS,envmap_common_pars_fragment:cS,envmap_pars_fragment:uS,envmap_pars_vertex:dS,envmap_physical_pars_fragment:MS,envmap_vertex:fS,fog_vertex:hS,fog_pars_vertex:pS,fog_fragment:mS,fog_pars_fragment:gS,gradientmap_pars_fragment:xS,lightmap_pars_fragment:_S,lights_lambert_fragment:vS,lights_lambert_pars_fragment:SS,lights_pars_begin:yS,lights_toon_fragment:ES,lights_toon_pars_fragment:wS,lights_phong_fragment:TS,lights_phong_pars_fragment:AS,lights_physical_fragment:bS,lights_physical_pars_fragment:RS,lights_fragment_begin:CS,lights_fragment_maps:NS,lights_fragment_end:PS,lightprobes_pars_fragment:LS,logdepthbuf_fragment:DS,logdepthbuf_pars_fragment:IS,logdepthbuf_pars_vertex:US,logdepthbuf_vertex:FS,map_fragment:OS,map_pars_fragment:kS,map_particle_fragment:BS,map_particle_pars_fragment:zS,metalnessmap_fragment:GS,metalnessmap_pars_fragment:HS,morphinstance_vertex:VS,morphcolor_vertex:WS,morphnormal_vertex:jS,morphtarget_pars_vertex:XS,morphtarget_vertex:YS,normal_fragment_begin:qS,normal_fragment_maps:$S,normal_pars_fragment:KS,normal_pars_vertex:ZS,normal_vertex:JS,normalmap_pars_fragment:QS,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ny,iridescence_pars_fragment:iy,opaque_fragment:ry,packing:sy,premultiplied_alpha_fragment:ay,project_vertex:oy,dithering_fragment:ly,dithering_pars_fragment:cy,roughnessmap_fragment:uy,roughnessmap_pars_fragment:dy,shadowmap_pars_fragment:fy,shadowmap_pars_vertex:hy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:xy,skinning_vertex:_y,skinnormal_vertex:vy,specularmap_fragment:Sy,specularmap_pars_fragment:yy,tonemapping_fragment:My,tonemapping_pars_fragment:Ey,transmission_fragment:wy,transmission_pars_fragment:Ty,uv_pars_fragment:Ay,uv_pars_vertex:by,uv_vertex:Ry,worldpos_vertex:Cy,background_vert:Ny,background_frag:Py,backgroundCube_vert:Ly,backgroundCube_frag:Dy,cube_vert:Iy,cube_frag:Uy,depth_vert:Fy,depth_frag:Oy,distance_vert:ky,distance_frag:By,equirect_vert:zy,equirect_frag:Gy,linedashed_vert:Hy,linedashed_frag:Vy,meshbasic_vert:Wy,meshbasic_frag:jy,meshlambert_vert:Xy,meshlambert_frag:Yy,meshmatcap_vert:qy,meshmatcap_frag:$y,meshnormal_vert:Ky,meshnormal_frag:Zy,meshphong_vert:Jy,meshphong_frag:Qy,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:rM,points_frag:sM,shadow_vert:aM,shadow_frag:oM,sprite_vert:lM,sprite_frag:cM},ze={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ki={basic:{uniforms:Bn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Bn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Bn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Bn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Bn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Bn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Bn([ze.points,ze.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Bn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Bn([ze.common,ze.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Bn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Bn([ze.sprite,ze.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Bn([ze.common,ze.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Bn([ze.lights,ze.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};ki.physical={uniforms:Bn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ol={r:0,b:0,g:0},uM=new Kt,Gg=new ct;Gg.set(-1,0,0,0,1,0,0,0,1);function dM(s,e,t,r,o,l){const u=new Mt(0);let f=o===!0?0:1,h,m,y=null,S=0,_=null;function M(N){let F=N.isScene===!0?N.background:null;if(F&&F.isTexture){const P=N.backgroundBlurriness>0;F=e.get(F,P)}return F}function w(N){let F=!1;const P=M(N);P===null?g(u,f):P&&P.isColor&&(g(P,1),F=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(N,F){const P=M(F);P&&P.isCubeTexture?(m===void 0&&(m=new rn(new ls(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:ta(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,D,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(uM.makeRotationFromEuler(F.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Gg),m.material.toneMapped=yt.getTransfer(P.colorSpace)!==Dt,(y!==P||S!==P.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,y=P,S=P.version,_=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new rn(new oo(2,2),new cs({name:"BackgroundMaterial",uniforms:ta(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=yt.getTransfer(P.colorSpace)!==Dt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(y!==P||S!==P.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,y=P,S=P.version,_=s.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function g(N,F){N.getRGB(Ol,Fg(s)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,F,l)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(N,F=1){u.set(N),f=F,g(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(N){f=N,g(u,f)},render:w,addToRenderList:C,dispose:v}}function fM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function f(j,q,se,z,re){let ue=!1;const K=S(j,z,se,q);l!==K&&(l=K,m(l.object)),ue=M(j,z,se,re),ue&&w(j,z,se,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,P(j,q,se,z),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function h(){return s.createVertexArray()}function m(j){return s.bindVertexArray(j)}function y(j){return s.deleteVertexArray(j)}function S(j,q,se,z){const re=z.wireframe===!0;let ue=r[q.id];ue===void 0&&(ue={},r[q.id]=ue);const K=j.isInstancedMesh===!0?j.id:0;let Z=ue[K];Z===void 0&&(Z={},ue[K]=Z);let G=Z[se.id];G===void 0&&(G={},Z[se.id]=G);let $=G[re];return $===void 0&&($=_(h()),G[re]=$),$}function _(j){const q=[],se=[],z=[];for(let re=0;re<t;re++)q[re]=0,se[re]=0,z[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:se,attributeDivisors:z,object:j,attributes:{},index:null}}function M(j,q,se,z){const re=l.attributes,ue=q.attributes;let K=0;const Z=se.getAttributes();for(const G in Z)if(Z[G].location>=0){const I=re[G];let Q=ue[G];if(Q===void 0&&(G==="instanceMatrix"&&j.instanceMatrix&&(Q=j.instanceMatrix),G==="instanceColor"&&j.instanceColor&&(Q=j.instanceColor)),I===void 0||I.attribute!==Q||Q&&I.data!==Q.data)return!0;K++}return l.attributesNum!==K||l.index!==z}function w(j,q,se,z){const re={},ue=q.attributes;let K=0;const Z=se.getAttributes();for(const G in Z)if(Z[G].location>=0){let I=ue[G];I===void 0&&(G==="instanceMatrix"&&j.instanceMatrix&&(I=j.instanceMatrix),G==="instanceColor"&&j.instanceColor&&(I=j.instanceColor));const Q={};Q.attribute=I,I&&I.data&&(Q.data=I.data),re[G]=Q,K++}l.attributes=re,l.attributesNum=K,l.index=z}function C(){const j=l.newAttributes;for(let q=0,se=j.length;q<se;q++)j[q]=0}function g(j){v(j,0)}function v(j,q){const se=l.newAttributes,z=l.enabledAttributes,re=l.attributeDivisors;se[j]=1,z[j]===0&&(s.enableVertexAttribArray(j),z[j]=1),re[j]!==q&&(s.vertexAttribDivisor(j,q),re[j]=q)}function N(){const j=l.newAttributes,q=l.enabledAttributes;for(let se=0,z=q.length;se<z;se++)q[se]!==j[se]&&(s.disableVertexAttribArray(se),q[se]=0)}function F(j,q,se,z,re,ue,K){K===!0?s.vertexAttribIPointer(j,q,se,re,ue):s.vertexAttribPointer(j,q,se,z,re,ue)}function P(j,q,se,z){C();const re=z.attributes,ue=se.getAttributes(),K=q.defaultAttributeValues;for(const Z in ue){const G=ue[Z];if(G.location>=0){let $=re[Z];if($===void 0&&(Z==="instanceMatrix"&&j.instanceMatrix&&($=j.instanceMatrix),Z==="instanceColor"&&j.instanceColor&&($=j.instanceColor)),$!==void 0){const I=$.normalized,Q=$.itemSize,Re=e.get($);if(Re===void 0)continue;const ne=Re.buffer,xe=Re.type,ye=Re.bytesPerElement,Ue=xe===s.INT||xe===s.UNSIGNED_INT||$.gpuType===ff;if($.isInterleavedBufferAttribute){const _e=$.data,Ge=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,dt=$.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)v(G.location+et,_e.meshPerAttribute);j.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let et=0;et<G.locationSize;et++)g(G.location+et);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let et=0;et<G.locationSize;et++)F(G.location+et,Q/G.locationSize,xe,I,Ge*ye,(dt+Q/G.locationSize*et)*ye,Ue)}else{if($.isInstancedBufferAttribute){for(let _e=0;_e<G.locationSize;_e++)v(G.location+_e,$.meshPerAttribute);j.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<G.locationSize;_e++)g(G.location+_e);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let _e=0;_e<G.locationSize;_e++)F(G.location+_e,Q/G.locationSize,xe,I,Q*ye,Q/G.locationSize*_e*ye,Ue)}}else if(K!==void 0){const I=K[Z];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(G.location,I);break;case 3:s.vertexAttrib3fv(G.location,I);break;case 4:s.vertexAttrib4fv(G.location,I);break;default:s.vertexAttrib1fv(G.location,I)}}}}N()}function U(){V();for(const j in r){const q=r[j];for(const se in q){const z=q[se];for(const re in z){const ue=z[re];for(const K in ue)y(ue[K].object),delete ue[K];delete z[re]}}delete r[j]}}function D(j){if(r[j.id]===void 0)return;const q=r[j.id];for(const se in q){const z=q[se];for(const re in z){const ue=z[re];for(const K in ue)y(ue[K].object),delete ue[K];delete z[re]}}delete r[j.id]}function E(j){for(const q in r){const se=r[q];for(const z in se){const re=se[z];if(re[j.id]===void 0)continue;const ue=re[j.id];for(const K in ue)y(ue[K].object),delete ue[K];delete re[j.id]}}}function b(j){for(const q in r){const se=r[q],z=j.isInstancedMesh===!0?j.id:0,re=se[z];if(re!==void 0){for(const ue in re){const K=re[ue];for(const Z in K)y(K[Z].object),delete K[Z];delete re[ue]}delete se[z],Object.keys(se).length===0&&delete r[q]}}}function V(){k(),u=!0,l!==o&&(l=o,m(l.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:V,resetDefaultState:k,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:b,releaseStatesOfProgram:E,initAttributes:C,enableAttribute:g,disableUnusedAttributes:N}}function hM(s,e,t){let r;function o(h){r=h}function l(h,m){s.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,y){y!==0&&(s.drawArraysInstanced(r,h,m,y),t.update(m,r,y))}function f(h,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,y);let _=0;for(let M=0;M<y;M++)_+=m[M];t.update(_,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function pM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(E){return!(E!==Hi&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(E){const b=E===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ni&&E!==Gi&&!b&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const y=h(m);y!==m&&(ot("WebGLRenderer:",m,"not supported, using",y,"instead."),m=y);const S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&S===!1;t.reversedDepthBuffer===!0&&S===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&S===!0&&ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:N,maxVaryings:F,maxFragmentUniforms:P,maxSamples:U,samples:D}}function mM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Dr,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const M=S.length!==0||_||r!==0||o;return o=_,r=S.length,M},this.beginShadows=function(){l=!0,y(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,_){t=y(S,_,0)},this.setState=function(S,_,M){const w=S.clippingPlanes,C=S.clipIntersection,g=S.clipShadows,v=s.get(S);if(!o||w===null||w.length===0||l&&!g)l?y(null):m();else{const N=l?0:r,F=N*4;let P=v.clippingState||null;h.value=P,P=y(w,_,F,M);for(let U=0;U!==F;++U)P[U]=t[U];v.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(S,_,M,w){const C=S!==null?S.length:0;let g=null;if(C!==0){if(g=h.value,w!==!0||g===null){const v=M+C*4,N=_.matrixWorldInverse;f.getNormalMatrix(N),(g===null||g.length<v)&&(g=new Float32Array(v));for(let F=0,P=M;F!==C;++F,P+=4)u.copy(S[F]).applyMatrix4(N,f),u.normal.toArray(g,P),g[P+3]=u.constant}h.value=g,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,g}}class wf extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Dg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ls(5,5,5),l=new cs({name:"CubemapFromEquirect",uniforms:ta(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Ks});l.uniforms.tEquirect.value=t;const u=new rn(o,l),f=t.minFilter;return t.minFilter===Ur&&(t.minFilter=qn),new of(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const Im=256,gM=3,xM=20,Hg=256,Vg=16,_M=3,vM=new le,SM=new Mt;class nc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new of(1,10,null),this._boxMesh=new rn(new ls(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=vM}=l,h=this._renderer;this._setSize(u);const m=this._allocateTarget(),y=this._getSourceTarget(!0);t>0&&(y.texture.mipmapsAutoUpdate=!1);const S=h.autoClear,_=h.autoClearColor,M=h.autoClearDepth,w=h.autoClearStencil,C=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,C===null&&(e.background=h.getClearColor(SM));const g=new of(r,o,y);return g.position.copy(f),g.update(h,e),h.autoClear=S,h.autoClearColor=_,h.autoClearDepth=M,h.autoClearStencil=w,e.background=C,t>0&&(y.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Im,wg(e))}_fromTexture(e,t){e.mapping===Js||e.mapping===to?this._setSize(e.image.length===0?Im:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Um(e,!1,!1),r=Math.log2(e)-gM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Um(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Js||e.mapping===to?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=yM(),this._integrationMaterial=MM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/Vg);for(let u=0;u<=r;u++){const f=nc.lodToRoughness(u,r);if(u>r-_M)l.roughness.value=f,this._renderCube(e,u,this._integrationMaterial);else{const h=f>0?Math.log2(t)+.5*Math.log2(6/(Hg*Math.pow(f,4)))+.5:0;o.roughness.value=f,o.lodBias.value=h,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=EM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function Um(s,e,t){return new wf(s,{minFilter:Ur,generateMipmaps:e,type:ji,colorSpace:Kl,depthBuffer:t})}function lo(s,e,t){return new cs({name:s,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:zn,blending:Ks,depthTest:!1,depthWrite:!1})}function yM(){return lo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hg}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function MM(){return lo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function EM(){return lo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${xM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Fm(){return lo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Om(){return lo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function wM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(_,M=!1){return _==null?null:M?u(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===Vu||M===Wu)if(e.has(_)){const w=e.get(_).texture;return f(w,_.mapping)}else{const w=_.image;if(w&&w.height>0){const C=new wf(w.height);return C.fromEquirectangularTexture(s,_),e.set(_,C),_.addEventListener("dispose",m),f(C.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const M=_.mapping,w=M===Vu||M===Wu,C=M===Js||M===to;if(w||C){let g=t.get(_);const v=g!==void 0?g.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return r===null&&(r=new nc(s)),g=w?r.fromEquirectangular(_,g):r.fromCubemap(_,g),g.texture.pmremVersion=_.pmremVersion,t.set(_,g),g.texture;if(g!==void 0)return g.texture;{const N=_.image;return w&&N&&N.height>0||C&&N&&h(N)?(r===null&&(r=new nc(s)),g=w?r.fromEquirectangular(_):r.fromCubemap(_),g.texture.pmremVersion=_.pmremVersion,t.set(_,g),_.addEventListener("dispose",y),g.texture):null}}}return _}function f(_,M){return M===Vu?_.mapping=Js:M===Wu&&(_.mapping=to),_}function h(_){let M=0;const w=6;for(let C=0;C<w;C++)_[C]!==void 0&&M++;return M===w}function m(_){const M=_.target;M.removeEventListener("dispose",m);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function y(_){const M=_.target;M.removeEventListener("dispose",y);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function TM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Wl("WebGLRenderer: "+r+" extension not supported."),o}}}function AM(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(w=>delete o[w]);function f(w){h(w.target)}function h(w){w.index!==null&&e.remove(w.index);for(const g in w.attributes)e.remove(w.attributes[g]);w.removeEventListener("dispose",f),delete o[w.id],u.unregister(w);const C=l.get(w);C&&(e.remove(C),l.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function m(w,C){return o[C.id]!==void 0||(C.addEventListener("dispose",f),o[C.id]=new WeakRef(C),u.register(C,C.id,C),t.memory.geometries++),C}function y(w){const C=w.attributes;for(const g in C)e.update(C[g],s.ARRAY_BUFFER)}function S(w){const C=w.index,g=w.attributes.position;let v=0;if(g===void 0)return;const N=C!==null?C.array.length:g.array.length/3-1,F=g.count>=65535?Pg:Ng,P=new F(Math.ceil(N/3)*6,1),U=P.array;if(C!==null){const E=C.array;v=C.version;for(let b=0,V=0;b<N;b+=3){const k=E[b+0],j=E[b+1],q=E[b+2];U[V++]=k,U[V++]=j,U[V++]=j,U[V++]=q,U[V++]=q,U[V++]=k}}else{v=g.version;for(let E=0,b=0;E<N;E+=3){const V=E+0,k=E+1,j=E+2;U[b++]=V,U[b++]=k,U[b++]=k,U[b++]=j,U[b++]=j,U[b++]=V}}P.version=v;const D=l.get(w);D&&e.remove(D),l.set(w,P)}function _(w){const C=l.get(w);if(C){const g=w.index;g!==null&&C.version<g.version&&S(w)}else S(w);return l.get(w)}function M(){for(const w in o){const C=o[w].deref();C!==void 0&&h(C)}}return{get:m,update:y,getWireframeAttribute:_,dispose:M}}function bM(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,_){s.drawElements(r,_,l,S*u),t.update(_,r,1)}function m(S,_,M){M!==0&&(s.drawElementsInstanced(r,_,l,S*u,M),t.update(_,r,M))}function y(S,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,S,0,M);let C=0;for(let g=0;g<M;g++)C+=_[g];t.update(C,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=y}function RM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function CM(s,e,t){const r=new WeakMap,o=new en;function l(u,f,h){const m=u.morphTargetInfluences,y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=y!==void 0?y.length:0;let _=r.get(f);if(_===void 0||_.count!==S){let k=function(){b.dispose(),r.delete(f),f.removeEventListener("dispose",k)};var M=k;_!==void 0&&_.texture.dispose();const w=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,g=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let P=0;w===!0&&(P=1),C===!0&&(P=2),g===!0&&(P=3);let U=f.attributes.position.count*P,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const E=new Float32Array(U*D*4*S),b=new bg(E,U,D,S);b.type=Gi,b.needsUpdate=!0;const V=P*4;for(let j=0;j<S;j++){const q=v[j],se=N[j],z=F[j],re=U*D*4*j;for(let ue=0;ue<q.count;ue++){const K=ue*V;w===!0&&(o.fromBufferAttribute(q,ue),E[re+K+0]=o.x,E[re+K+1]=o.y,E[re+K+2]=o.z,E[re+K+3]=0),C===!0&&(o.fromBufferAttribute(se,ue),E[re+K+4]=o.x,E[re+K+5]=o.y,E[re+K+6]=o.z,E[re+K+7]=0),g===!0&&(o.fromBufferAttribute(z,ue),E[re+K+8]=o.x,E[re+K+9]=o.y,E[re+K+10]=o.z,E[re+K+11]=z.itemSize===4?o.w:1)}}_={count:S,texture:b,size:new Et(U,D)},r.set(f,_),f.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let g=0;g<m.length;g++)w+=m[g];const C=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function NM(s,e,t,r,o){let l=new WeakMap;function u(m){const y=o.render.frame,S=m.geometry,_=e.get(m,S);if(l.get(_)!==y&&(e.update(_),l.set(_,y)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==y&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,y))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==y&&(M.update(),l.set(M,y))}return _}function f(){l=new WeakMap}function h(m){const y=m.target;y.removeEventListener("dispose",h),r.releaseStatesOfObject(y),t.remove(y.instanceMatrix),y.instanceColor!==null&&t.remove(y.instanceColor)}return{update:u,dispose:f}}const PM={[ag]:"LINEAR_TONE_MAPPING",[og]:"REINHARD_TONE_MAPPING",[lg]:"CINEON_TONE_MAPPING",[df]:"ACES_FILMIC_TONE_MAPPING",[ug]:"AGX_TONE_MAPPING",[dg]:"NEUTRAL_TONE_MAPPING",[cg]:"CUSTOM_TONE_MAPPING"};function LM(s,e,t,r,o,l){const u=new Vi(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null,m=null;const y=new ii;y.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),y.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const S=new yv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new rn(y,S),M=new Bg(-1,1,1,-1,0,1);let w=null,C=null,g=!1,v,N=null,F=[],P=!1;this.setSize=function(U,D){u.setSize(U,D),f!==null&&f.setSize(U,D),h!==null&&h.setSize(U,D);for(let E=0;E<F.length;E++){const b=F[E];b.setSize&&b.setSize(U,D)}},this.setEffects=function(U){F=U,P=F.length>0&&F[0].isRenderPass===!0;const D=u.width,E=u.height;F.length>0&&f===null&&(f=new Vi(D,E,{type:ji,depthBuffer:!1,stencilBuffer:!1}),h=new Vi(D,E,{type:ji,depthBuffer:!1,stencilBuffer:!1}));const b=o===!0&&F.some(V=>V.needsDepthTexture===!0);b!==(u.depthTexture!==null)&&(b===!0&&m===null&&(m=new ea(D,E),l===!0&&(m.format=Fr,m.type=Qs)),u.dispose(),u.depthTexture=b?m:null,u.resolveDepthBuffer=b,u.storeMultisampledDepthBuffer=b);for(let V=0;V<F.length;V++){const k=F[V];k.setSize&&k.setSize(D,E),b&&k.needsDepthTexture===!0&&k.setDepthTexture&&k.setDepthTexture(m)}},this.begin=function(U,D){if(g||U.toneMapping===or&&F.length===0)return!1;if(N=D,D!==null){const E=D.width,b=D.height;(u.width!==E||u.height!==b)&&this.setSize(E,b)}return P===!1&&U.setRenderTarget(u),v=U.toneMapping,U.toneMapping=or,!0},this.hasRenderPass=function(){return P},this.end=function(U,D){U.toneMapping=v,g=!0;let E=u,b=f;for(let V=0;V<F.length;V++){const k=F[V];k.enabled!==!1&&(k.render(U,b,E,D),k.needsSwap!==!1&&(E=b,b=b===f?h:f))}if(w!==U.outputColorSpace||C!==U.toneMapping){w=U.outputColorSpace,C=U.toneMapping,S.defines={},yt.getTransfer(w)===Dt&&(S.defines.SRGB_TRANSFER="");const V=PM[C];V&&(S.defines[V]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=E.texture,U.setRenderTarget(N),U.render(_,M),N=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),y.dispose(),S.dispose()}}const Wg=new Fn,jg=new ea(1,1),Xg=new Ig(1),Yg=new bg,qg=new J_,$g=new Dg,km=[],Bm=[],zm=new Float32Array(16),Gm=new Float32Array(9),Hm=new Float32Array(4);function sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=km[o];if(l===void 0&&(l=new Float32Array(o),km[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function mn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function gn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function sc(s,e){let t=Bm[e];t===void 0&&(t=new Int32Array(e),Bm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function DM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2fv(this.addr,e),gn(t,e)}}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;s.uniform3fv(this.addr,e),gn(t,e)}}function FM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4fv(this.addr,e),gn(t,e)}}function OM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;Hm.set(r),s.uniformMatrix2fv(this.addr,!1,Hm),gn(t,r)}}function kM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;Gm.set(r),s.uniformMatrix3fv(this.addr,!1,Gm),gn(t,r)}}function BM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;zm.set(r),s.uniformMatrix4fv(this.addr,!1,zm),gn(t,r)}}function zM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2iv(this.addr,e),gn(t,e)}}function HM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3iv(this.addr,e),gn(t,e)}}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4iv(this.addr,e),gn(t,e)}}function WM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function jM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2uiv(this.addr,e),gn(t,e)}}function XM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3uiv(this.addr,e),gn(t,e)}}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4uiv(this.addr,e),gn(t,e)}}function ac(s){return s.version===0&&(s.compareFunction=Mg,s.needsUpdate=!0),s}function qM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=ac(jg):l=Wg,t.setTexture2D(e||l,o)}function $M(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||qg,o)}function KM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=ac(Xg):l=$g,t.setTextureCube(e||l,o)}function ZM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Yg,o)}function JM(s){switch(s){case 5126:return DM;case 35664:return IM;case 35665:return UM;case 35666:return FM;case 35674:return OM;case 35675:return kM;case 35676:return BM;case 5124:case 35670:return zM;case 35667:case 35671:return GM;case 35668:case 35672:return HM;case 35669:case 35673:return VM;case 5125:return WM;case 36294:return jM;case 36295:return XM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return ZM}}function QM(s,e){s.uniform1fv(this.addr,e)}function eE(s,e){const t=sa(e,this.size,2);s.uniform2fv(this.addr,t)}function tE(s,e){const t=sa(e,this.size,3);s.uniform3fv(this.addr,t)}function nE(s,e){const t=sa(e,this.size,4);s.uniform4fv(this.addr,t)}function iE(s,e){const t=sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function rE(s,e){const t=sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sE(s,e){const t=sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function aE(s,e){s.uniform1iv(this.addr,e)}function oE(s,e){s.uniform2iv(this.addr,e)}function lE(s,e){s.uniform3iv(this.addr,e)}function cE(s,e){s.uniform4iv(this.addr,e)}function uE(s,e){s.uniform1uiv(this.addr,e)}function dE(s,e){s.uniform2uiv(this.addr,e)}function fE(s,e){s.uniform3uiv(this.addr,e)}function hE(s,e){s.uniform4uiv(this.addr,e)}function pE(s,e,t){const r=this.cache,o=e.length,l=sc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=ac(jg):u=Wg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function mE(s,e,t){const r=this.cache,o=e.length,l=sc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||qg,l[u])}function gE(s,e,t){const r=this.cache,o=e.length,l=sc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=ac(Xg):u=$g;for(let f=0;f!==o;++f)t.setTextureCube(e[f]||u,l[f])}function xE(s,e,t){const r=this.cache,o=e.length,l=sc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Yg,l[u])}function _E(s){switch(s){case 5126:return QM;case 35664:return eE;case 35665:return tE;case 35666:return nE;case 35674:return iE;case 35675:return rE;case 35676:return sE;case 5124:case 35670:return aE;case 35667:case 35671:return oE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return uE;case 36294:return dE;case 36295:return fE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return xE}}class vE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=JM(t.type)}}class SE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_E(t.type)}}class yE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const md=/(\w+)(\])?(\[|\.)?/g;function Vm(s,e){s.seq.push(e),s.map[e.id]=e}function ME(s,e,t){const r=s.name,o=r.length;for(md.lastIndex=0;;){const l=md.exec(r),u=md.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===o){Vm(t,m===void 0?new vE(f,s,e):new SE(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new yE(f),Vm(t,S)),t=S}}}class Xl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);ME(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Wm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const EE=37297;let wE=0;function TE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const jm=new ct;function AE(s){yt._getMatrix(jm,yt.workingColorSpace,s);const e=`mat3( ${jm.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(s)){case Zl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+TE(s.getShaderSource(e),f)}else return l}function bE(s,e){const t=AE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const RE={[ag]:"Linear",[og]:"Reinhard",[lg]:"Cineon",[df]:"ACESFilmic",[ug]:"AgX",[dg]:"Neutral",[cg]:"Custom"};function CE(s,e){const t=RE[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kl=new le;function NE(){yt.getLuminanceCoefficients(kl);const s=kl.x.toFixed(4),e=kl.y.toFixed(4),t=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function LE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function DE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function $a(s){return s!==""}function Ym(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function qm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IE=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(s){return s.replace(IE,UE)}function UE(s,e){const t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return lf(t)}const FE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(s){return s.replace(FE,OE)}function OE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Km(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const kE={[Bl]:"SHADOWMAP_TYPE_PCF",[qa]:"SHADOWMAP_TYPE_VSM"};function BE(s){return kE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zE={[to]:"ENVMAP_MODE_REFRACTION"};function GE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":zE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HE={[sg]:"ENVMAP_BLENDING_MULTIPLY",[g_]:"ENVMAP_BLENDING_MIX",[x_]:"ENVMAP_BLENDING_ADD"};function VE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":HE[s.combine]||"ENVMAP_BLENDING_NONE"}function WE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=BE(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",y=GE(t),S=VE(t),_=PE(t),M=LE(l),w=o.createProgram();let C,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(C=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter($a).join(`
`),C.length>0&&(C+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter($a).join(`
`),g.length>0&&(g+=`
`)):(C=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),g=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+y:"",t.envMap?"#define "+S:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?ft.tonemapping_pars_fragment:"",t.toneMapping!==or?CE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,bE("linearToOutputTexel",t.outputColorSpace),NE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($a).join(`
`)),u=lf(u),u=Ym(u,t),u=qm(u,t),f=lf(f),f=Ym(f,t),f=qm(f,t),u=$m(u),f=$m(f),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,C=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,g=["#define varying in",t.glslVersion===sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const N=v+C+u,F=v+g+f,P=Wm(o,o.VERTEX_SHADER,N),U=Wm(o,o.FRAGMENT_SHADER,F);o.attachShader(w,P),o.attachShader(w,U),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function D(k){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(w)||"",q=o.getShaderInfoLog(P)||"",se=o.getShaderInfoLog(U)||"",z=j.trim(),re=q.trim(),ue=se.trim();let K=!0,Z=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,P,U);else{const G=Xm(o,P,"vertex"),$=Xm(o,U,"fragment");Pt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+z+`
`+G+`
`+$)}else z!==""?ot("WebGLProgram: Program Info Log:",z):(re===""||ue==="")&&(Z=!1);Z&&(k.diagnostics={runnable:K,programLog:z,vertexShader:{log:re,prefix:C},fragmentShader:{log:ue,prefix:g}})}o.deleteShader(P),o.deleteShader(U),E=new Xl(o,w),b=DE(o,w)}let E;this.getUniforms=function(){return E===void 0&&D(this),E};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(w,EE)),V},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=U,this}let jE=0;class XE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new YE(e),t.set(e,r)),r}}class YE{constructor(e){this.id=jE++,this.code=e,this.usedTimes=0}}function qE(s){return s===os||s===ql||s===$l}function $E(s,e,t,r,o,l){const u=new Rg,f=new XE,h=new Set,m=[],y=new Map,S=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return h.add(E),E===0?"uv":`uv${E}`}function w(E,b,V,k,j,q){const se=k.fog,z=j.geometry,re=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,ue=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,K=e.get(E.envMap||re,ue),Z=_[E.type];let G=r.precision;E.precision!==null&&(G=r.getMaxPrecision(E.precision),G!==E.precision&&ot("WebGLProgram.getParameters:",E.precision,"not supported, using",G,"instead."));const $=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,I=$!==void 0?$.length:0;let Q=0;z.morphAttributes.position!==void 0&&(Q=1),z.morphAttributes.normal!==void 0&&(Q=2),z.morphAttributes.color!==void 0&&(Q=3);let Re,ne,xe,ye;if(Z){const Oe=ki[Z];Re=Oe.vertexShader,ne=Oe.fragmentShader}else{Re=E.vertexShader,ne=E.fragmentShader;const Oe=f.getVertexShaderStage(E),St=f.getFragmentShaderStage(E);f.update(E,Oe,St),xe=Oe.id,ye=St.id}const Ue=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Ge=j.isInstancedMesh===!0,dt=j.isBatchedMesh===!0,et=!!E.map,gt=!!E.matcap,ht=!!K,lt=ht&&K.isPMREMTexture===!0,Ht=!!E.aoMap,Ut=!!E.lightMap,Bt=!!E.bumpMap&&E.wireframe===!1,wt=!!E.normalMap,sn=!!E.displacementMap,Ct=!!E.emissiveMap,Vt=!!E.metalnessMap,It=!!E.roughnessMap,Wt=E.anisotropy>0,X=E.clearcoat>0,ln=E.diffuseRoughness>0,At=E.dispersion>0,xt=E.retroreflectivity>0,Le=E.iridescence>0,jt=E.sheen>0,Ve=E.transmission>0,tt=Wt&&!!E.anisotropyMap,L=X&&!!E.clearcoatMap,A=X&&!!E.clearcoatNormalMap,ee=X&&!!E.clearcoatRoughnessMap,Ee=ln&&!!E.diffuseRoughnessMap,ge=Le&&!!E.iridescenceMap,be=Le&&!!E.iridescenceThicknessMap,Pe=jt&&!!E.sheenColorMap,fe=jt&&!!E.sheenRoughnessMap,he=!!E.specularMap,Ae=!!E.specularColorMap,B=!!E.specularIntensityMap,pe=Ve&&!!E.transmissionMap,de=Ve&&!!E.thicknessMap,Ce=!!E.gradientMap,Te=!!E.alphaMap,me=E.alphaTest>0,De=!!E.alphaHash,ke=!!E.extensions;let ve=or;E.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(ve=s.toneMapping);const We=lt?K.isCompressedCubeTexture?K.image[0].mipmaps:K.mipmaps:null,nt={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:Re,fragmentShader:ne,defines:E.defines,customVertexShaderID:xe,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:G,batching:dt,batchingColor:dt&&j._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&j.instanceColor!==null,instancingMorph:Ge&&j.morphTexture!==null,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:et,matcap:gt,envMap:ht,envMapMode:ht&&K.mapping,envMapPMREM:lt,envMapMaxLod:lt?We.length-1:null,envMapSize:lt?We[0].width:null,aoMap:Ht,lightMap:Ut,bumpMap:Bt,normalMap:wt,displacementMap:sn,emissiveMap:Ct,normalMapObjectSpace:wt&&E.normalMapType===S_,normalMapTangentSpace:wt&&E.normalMapType===rf,packedNormalMap:wt&&E.normalMapType===rf&&qE(E.normalMap.format),metalnessMap:Vt,roughnessMap:It,anisotropy:Wt,anisotropyMap:tt,clearcoat:X,clearcoatMap:L,clearcoatNormalMap:A,clearcoatRoughnessMap:ee,diffuseRoughness:ln,diffuseRoughnessMap:Ee,dispersion:At,retroreflection:xt,iridescence:Le,iridescenceMap:ge,iridescenceThicknessMap:be,sheen:jt,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:he,specularColorMap:Ae,specularIntensityMap:B,transmission:Ve,transmissionMap:pe,thicknessMap:de,gradientMap:Ce,opaque:E.transparent===!1&&E.blending===Za&&E.alphaToCoverage===!1,alphaMap:Te,alphaTest:me,alphaHash:De,combine:E.combine,mapUv:et&&M(E.map.channel),aoMapUv:Ht&&M(E.aoMap.channel),lightMapUv:Ut&&M(E.lightMap.channel),bumpMapUv:Bt&&M(E.bumpMap.channel),normalMapUv:wt&&M(E.normalMap.channel),displacementMapUv:sn&&M(E.displacementMap.channel),emissiveMapUv:Ct&&M(E.emissiveMap.channel),metalnessMapUv:Vt&&M(E.metalnessMap.channel),roughnessMapUv:It&&M(E.roughnessMap.channel),anisotropyMapUv:tt&&M(E.anisotropyMap.channel),clearcoatMapUv:L&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:A&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&M(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&M(E.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:be&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:fe&&M(E.sheenRoughnessMap.channel),specularMapUv:he&&M(E.specularMap.channel),specularColorMapUv:Ae&&M(E.specularColorMap.channel),specularIntensityMapUv:B&&M(E.specularIntensityMap.channel),transmissionMapUv:pe&&M(E.transmissionMap.channel),thicknessMapUv:de&&M(E.thicknessMap.channel),alphaMapUv:Te&&M(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(wt||Wt),vertexNormals:!!z.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!z.attributes.uv&&(et||Te),fog:!!se,useFog:E.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||z.attributes.normal===void 0&&wt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:_e,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:Q,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:q.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:et&&E.map.isVideoTexture===!0&&yt.getTransfer(E.map.colorSpace)===Dt,decodeVideoTextureEmissive:Ct&&E.emissiveMap.isVideoTexture===!0&&yt.getTransfer(E.emissiveMap.colorSpace)===Dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Bi,flipSided:E.side===zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ke&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&E.extensions.multiDraw===!0||dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return nt.vertexUv1s=h.has(1),nt.vertexUv2s=h.has(2),nt.vertexUv3s=h.has(3),h.clear(),nt}function C(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)b.push(V),b.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(g(b,E),v(b,E),b.push(s.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function g(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapPMREM),E.push(b.envMapMaxLod),E.push(b.envMapSize),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.diffuseRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.numSunLights),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numSunLightShadows),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.numLightProbeGrids),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function v(E,b){u.disableAll(),b.instancing&&u.enable(0),b.instancingColor&&u.enable(1),b.instancingMorph&&u.enable(2),b.matcap&&u.enable(3),b.envMap&&u.enable(4),b.normalMapObjectSpace&&u.enable(5),b.normalMapTangentSpace&&u.enable(6),b.clearcoat&&u.enable(7),b.iridescence&&u.enable(8),b.alphaTest&&u.enable(9),b.vertexColors&&u.enable(10),b.vertexAlphas&&u.enable(11),b.vertexUv1s&&u.enable(12),b.vertexUv2s&&u.enable(13),b.vertexUv3s&&u.enable(14),b.vertexTangents&&u.enable(15),b.anisotropy&&u.enable(16),b.alphaHash&&u.enable(17),b.batching&&u.enable(18),b.dispersion&&u.enable(19),b.retroreflection&&u.enable(24),b.diffuseRoughness&&u.enable(25),b.batchingColor&&u.enable(20),b.gradientMap&&u.enable(21),b.packedNormalMap&&u.enable(22),b.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reversedDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),b.numLightProbeGrids>0&&u.enable(22),b.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function N(E){const b=_[E.type];let V;if(b){const k=ki[b];V=_v.clone(k.uniforms)}else V=E.uniforms;return V}function F(E,b){let V=y.get(b);return V!==void 0?++V.usedTimes:(V=new WE(s,b,E,o),m.push(V),y.set(b,V)),V}function P(E){if(--E.usedTimes===0){const b=m.indexOf(E);m[b]=m[m.length-1],m.pop(),y.delete(E.cacheKey),E.destroy()}}function U(E){f.remove(E)}function D(){f.dispose()}return{getParameters:w,getProgramCacheKey:C,getUniforms:N,acquireProgram:F,releaseProgram:P,releaseShaderCache:U,programs:m,dispose:D}}function KE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function ZE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function f(_,M,w,C,g,v){let N=s[e];return N===void 0?(N={id:_.id,object:_,geometry:M,material:w,materialVariant:u(_),groupOrder:C,renderOrder:_.renderOrder,z:g,group:v},s[e]=N):(N.id=_.id,N.object=_,N.geometry=M,N.material=w,N.materialVariant=u(_),N.groupOrder=C,N.renderOrder=_.renderOrder,N.z=g,N.group=v),e++,N}function h(_,M,w,C,g,v,N){N.reversedDepth===!0&&(g=-g);const F=f(_,M,w,C,g,v);w.transmission>0?r.push(F):w.transparent===!0?o.push(F):t.push(F)}function m(_,M,w,C,g,v){const N=f(_,M,w,C,g,v);w.transmission>0?r.unshift(N):w.transparent===!0?o.unshift(N):t.unshift(N)}function y(_,M){t.length>1&&t.sort(_||ZE),r.length>1&&r.sort(M||Zm),o.length>1&&o.sort(M||Zm)}function S(){for(let _=e,M=s.length;_<M;_++){const w=s[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:m,finish:S,sort:y}}function JE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Jm,s.set(r,[u])):o>=l.length?(u=new Jm,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function QE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new le,color:new Mt};break;case"SpotLight":t={position:new le,direction:new le,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=t,t}}}function ew(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let tw=0;function nw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function iw(s){const e=new QE,t=ew(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new le);const o=new le,l=new Kt,u=new Kt;function f(m){let y=0,S=0,_=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let M=0,w=0,C=0,g=0,v=0,N=0,F=0,P=0,U=0,D=0,E=0,b=0,V=0,k=0;m.sort(nw);for(let q=0,se=m.length;q<se;q++){const z=m[q],re=z.color,ue=z.intensity,K=z.distance;let Z=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===os?Z=z.shadow.map.texture:Z=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)y+=re.r*ue,S+=re.g*ue,_+=re.b*ue;else if(z.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(z.sh.coefficients[G],ue);k++}else if(z.isSunLight){const G=e.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,I=t.get(z);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[w]=I,r.sunShadowMap[w]=Z;const Q=$.getViewportCount();for(let Re=0;Re<Q;Re++)r.sunShadowMatrix[C+Re]=$.getMatrix(Re),r.sunShadowCascade[C+Re]=$._cascadeData[Re];C+=Q,w++}r.sun[M]=G,M++}else if(z.isDirectionalLight){const G=e.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,I=t.get(z);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,r.directionalShadow[g]=I,r.directionalShadowMap[g]=Z,r.directionalShadowMatrix[g]=z.shadow.matrix,U++}r.directional[g]=G,g++}else if(z.isSpotLight){const G=e.get(z);G.position.setFromMatrixPosition(z.matrixWorld),G.color.copy(re).multiplyScalar(ue),G.distance=K,G.coneCos=Math.cos(z.angle),G.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),G.decay=z.decay,r.spot[N]=G;const $=z.shadow;if(z.map&&(r.spotLightMap[b]=z.map,b++,$.updateMatrices(z),z.castShadow&&V++),r.spotLightMatrix[N]=$.matrix,z.castShadow){const I=t.get(z);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,r.spotShadow[N]=I,r.spotShadowMap[N]=Z,E++}N++}else if(z.isRectAreaLight){const G=e.get(z);G.color.copy(re).multiplyScalar(ue),G.halfWidth.set(z.width*.5,0,0),G.halfHeight.set(0,z.height*.5,0),r.rectArea[F]=G,F++}else if(z.isPointLight){const G=e.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity),G.distance=z.distance,G.decay=z.decay,z.castShadow){const $=z.shadow,I=t.get(z);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,I.shadowCameraNear=$.camera.near,I.shadowCameraFar=$.camera.far,r.pointShadow[v]=I,r.pointShadowMap[v]=Z,r.pointShadowMatrix[v]=z.shadow.matrix,D++}r.point[v]=G,v++}else if(z.isHemisphereLight){const G=e.get(z);G.skyColor.copy(z.color).multiplyScalar(ue),G.groundColor.copy(z.groundColor).multiplyScalar(ue),r.hemi[P]=G,P++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=S,r.ambient[2]=_;const j=r.hash;(j.sunLength!==M||j.directionalLength!==g||j.pointLength!==v||j.spotLength!==N||j.rectAreaLength!==F||j.hemiLength!==P||j.numSunShadows!==w||j.numDirectionalShadows!==U||j.numPointShadows!==D||j.numSpotShadows!==E||j.numSpotMaps!==b||j.numLightProbes!==k)&&(r.sun.length=M,r.directional.length=g,r.spot.length=N,r.rectArea.length=F,r.point.length=v,r.hemi.length=P,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=E,r.spotShadowMap.length=E,r.spotLightMatrix.length=E+b-V,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=k,j.sunLength=M,j.directionalLength=g,j.pointLength=v,j.spotLength=N,j.rectAreaLength=F,j.hemiLength=P,j.numSunShadows=w,j.numDirectionalShadows=U,j.numPointShadows=D,j.numSpotShadows=E,j.numSpotMaps=b,j.numLightProbes=k,r.version=tw++)}function h(m,y){let S=0,_=0,M=0,w=0,C=0,g=0;const v=y.matrixWorldInverse;for(let N=0,F=m.length;N<F;N++){const P=m[N];if(P.isSunLight){const U=r.sun[S];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(v),S++}else if(P.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(v),_++}else if(P.isSpotLight){const U=r.spot[w];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(v),U.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(v),w++}else if(P.isRectAreaLight){const U=r.rectArea[C];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(v),u.identity(),l.copy(P.matrixWorld),l.premultiply(v),u.extractRotation(l),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),C++}else if(P.isPointLight){const U=r.point[M];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(v),M++}else if(P.isHemisphereLight){const U=r.hemi[g];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(v),g++}}}return{setup:f,setupView:h,state:r}}function Qm(s){const e=new iw(s),t=[],r=[],o=[];function l(S){y.camera=S,t.length=0,r.length=0,o.length=0}function u(S){S.isLightProbeGrid?o.push(S):t.push(S)}function f(S){r.push(S)}function h(){e.setup(t),o.sort((S,_)=>S.priority-_.priority||S.id-_.id)}function m(S){e.setupView(t,S)}const y={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:f}}function rw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Qm(s),e.set(o,[f])):l>=u.length?(f=new Qm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const sw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ow=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],lw=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],eg=new Kt,Ya=new le,gd=new le;function cw(s,e,t){let r=new so;const o=new Et,l=new Et,u=new en,f=new Mv,h=new Ev,m={},y=t.maxTextureSize,S={[as]:zn,[zn]:as,[Bi]:Bi},_=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:sw,fragmentShader:aw}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const w=new ii;w.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new rn(w,_),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let v=this.type;this.render=function(D,E,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;this.type===Zx&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bl);const V=s.getRenderTarget(),k=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Ks),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const se=v!==this.type;se&&E.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(re=>re.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,re=D.length;z<re;z++){const ue=D[z],K=ue.shadow;if(K===void 0){ot("WebGLShadowMap:",ue,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const Z=K.getFrameExtents();o.multiply(Z),l.copy(K.mapSize),(o.x>y||o.y>y)&&(o.x>y&&(l.x=Math.floor(y/Z.x),o.x=l.x*Z.x,K.mapSize.x=l.x),o.y>y&&(l.y=Math.floor(y/Z.y),o.y=l.y*Z.y,K.mapSize.y=l.y));const G=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=G,K.map===null||se===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===qa){if(ue.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Vi(o.x,o.y,{format:os,type:ji,minFilter:qn,magFilter:qn,generateMipmaps:!1}),K.map.texture.name=ue.name+".shadowMap",K.map.depthTexture=new ea(o.x,o.y,Gi),K.map.depthTexture.name=ue.name+".shadowMapDepth",K.map.depthTexture.format=kr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=An,K.map.depthTexture.magFilter=An}else ue.isPointLight?(K.map=new wf(o.x),K.map.depthTexture=new Ig(o.x,Wi)):(K.map=new Vi(o.x,o.y),K.map.depthTexture=new ea(o.x,o.y,Wi)),K.map.depthTexture.name=ue.name+".shadowMap",K.map.depthTexture.format=kr,this.type===Bl?(K.map.depthTexture.compareFunction=G?yg:Sg,K.map.depthTexture.minFilter=qn,K.map.depthTexture.magFilter=qn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=An,K.map.depthTexture.magFilter=An);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==o.x||K.map.height!==o.y)&&K.map.setSize(o.x,o.y);const $=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();ue.isPointLight!==!0&&K.updateMatrices(ue,b);const I=(K.camera.layers.mask&4294967294)!==0?K.camera.layers:b.layers;for(let Q=0;Q<$;Q++){const Re=K.getCamera(Q);if(ue.isPointLight){const ne=K.camera,xe=K.matrix,ye=ue.distance||ne.far;ye!==ne.far&&(ne.far=ye,ne.updateProjectionMatrix()),Ya.setFromMatrixPosition(ue.matrixWorld),ne.position.copy(Ya),gd.copy(ne.position),gd.add(ow[Q]),ne.up.copy(lw[Q]),ne.lookAt(gd),ne.updateMatrixWorld(),xe.makeTranslation(-Ya.x,-Ya.y,-Ya.z),eg.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),K._frustum.setFromProjectionMatrix(eg,ne.coordinateSystem,ne.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(K.map),s.clear());const ne=K.getViewport(Q);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),q.viewport(u)}r=K.getFrustum(Q),P(E,b,Re,ue,I,this.type)}K.isPointLightShadow!==!0&&this.type===qa&&N(K,b),K.needsUpdate=!1}v=this.type,g.needsUpdate=!1,s.setRenderTarget(V,k,j)};function N(D,E){const b=e.update(C);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null?D.mapPass=new Vi(o.x,o.y,{format:os,type:ji}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(E,null,b,_,C,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value.set(D.map.width,D.map.height),M.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(E,null,b,M,C,null)}function F(D,E,b,V){let k=null;const j=b.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(j!==void 0)k=j;else if(k=b.isPointLight===!0?h:f,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const q=k.uuid,se=E.uuid;let z=m[q];z===void 0&&(z={},m[q]=z);let re=z[se];re===void 0&&(re=k.clone(),z[se]=re,E.addEventListener("dispose",U)),k=re}if(k.visible=E.visible,k.wireframe=E.wireframe,V===qa?k.side=E.shadowSide!==null?E.shadowSide:E.side:k.side=E.shadowSide!==null?E.shadowSide:S[E.side],k.alphaMap=E.alphaMap,k.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,k.map=E.map,k.clipShadows=E.clipShadows,k.clippingPlanes=E.clippingPlanes,k.clipIntersection=E.clipIntersection,k.displacementMap=E.displacementMap,k.displacementScale=E.displacementScale,k.displacementBias=E.displacementBias,k.wireframeLinewidth=E.wireframeLinewidth,k.linewidth=E.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const q=s.properties.get(k);q.light=b}return k}function P(D,E,b,V,k,j){if(D.visible===!1)return;if(D.layers.test(k)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&j===qa)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,D.matrixWorld);const z=e.update(D),re=D.material;if(Array.isArray(re)){const ue=z.groups;for(let K=0,Z=ue.length;K<Z;K++){const G=ue[K],$=re[G.materialIndex];if($&&$.visible){const I=F(D,$,V,j);D.onBeforeShadow(s,D,E,b,z,I,G),s.renderBufferDirect(b,null,z,I,D,G),D.onAfterShadow(s,D,E,b,z,I,G)}}}else if(re.visible){const ue=F(D,re,V,j);D.onBeforeShadow(s,D,E,b,z,ue,null),s.renderBufferDirect(b,null,z,ue,D,null),D.onAfterShadow(s,D,E,b,z,ue,null)}}const se=D.children;for(let z=0,re=se.length;z<re;z++)P(se[z],E,b,V,k,j)}function U(D){D.target.removeEventListener("dispose",U);for(const b in m){const V=m[b],k=D.target.uuid;k in V&&(V[k].dispose(),delete V[k])}}}function uw(s,e){function t(){let B=!1;const pe=new en;let de=null;const Ce=new en(0,0,0,0);return{setMask:function(Te){de!==Te&&!B&&(s.colorMask(Te,Te,Te,Te),de=Te)},setLocked:function(Te){B=Te},setClear:function(Te,me,De,ke,ve){ve===!0&&(Te*=ke,me*=ke,De*=ke),pe.set(Te,me,De,ke),Ce.equals(pe)===!1&&(s.clearColor(Te,me,De,ke),Ce.copy(pe))},reset:function(){B=!1,de=null,Ce.set(-1,0,0,0)}}}function r(){let B=!1,pe=!1,de=null,Ce=null,Te=null;return{setReversed:function(me){if(pe!==me){const De=e.get("EXT_clip_control");me?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),pe=me;const ke=Te;Te=null,this.setClear(ke)}},getReversed:function(){return pe},setTest:function(me){me?_e(s.DEPTH_TEST):Ge(s.DEPTH_TEST)},setMask:function(me){de!==me&&!B&&(s.depthMask(me),de=me)},setFunc:function(me){if(pe&&(me=P_[me]),Ce!==me){switch(me){case _d:s.depthFunc(s.NEVER);break;case vd:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case eo:s.depthFunc(s.LEQUAL);break;case yd:s.depthFunc(s.EQUAL);break;case Md:s.depthFunc(s.GEQUAL);break;case Ed:s.depthFunc(s.GREATER);break;case wd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=me}},setLocked:function(me){B=me},setClear:function(me){Te!==me&&(Te=me,pe&&(me=1-me),s.clearDepth(me))},reset:function(){B=!1,de=null,Ce=null,Te=null,pe=!1}}}function o(){let B=!1,pe=null,de=null,Ce=null,Te=null,me=null,De=null,ke=null,ve=null;return{setTest:function(We){B||(We?_e(s.STENCIL_TEST):Ge(s.STENCIL_TEST))},setMask:function(We){pe!==We&&!B&&(s.stencilMask(We),pe=We)},setFunc:function(We,nt,Oe){(de!==We||Ce!==nt||Te!==Oe)&&(s.stencilFunc(We,nt,Oe),de=We,Ce=nt,Te=Oe)},setOp:function(We,nt,Oe){(me!==We||De!==nt||ke!==Oe)&&(s.stencilOp(We,nt,Oe),me=We,De=nt,ke=Oe)},setLocked:function(We){B=We},setClear:function(We){ve!==We&&(s.clearStencil(We),ve=We)},reset:function(){B=!1,pe=null,de=null,Ce=null,Te=null,me=null,De=null,ke=null,ve=null}}}const l=new t,u=new r,f=new o;let h={};const m=new WeakMap;let y={},S={},_={},M=new WeakMap,w=[],C=null,g=!1,v=null,N=null,F=null,P=null,U=null,D=null,E=null,b=new Mt(0,0,0),V=0,k=!1,j=null,q=null,se=null,z=null,re=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Z=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),K=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),K=Z>=2);let $=null,I={};const Q=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),ne=new en().fromArray(Q),xe=new en().fromArray(Re);function ye(B,pe,de,Ce){const Te=new Uint8Array(4),me=s.createTexture();s.bindTexture(B,me),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<de;De++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(pe+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return me}const Ue={};Ue[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Ue[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ue[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),_e(s.DEPTH_TEST),u.setFunc(eo),Bt(!1),wt(tm),_e(s.CULL_FACE),Ht(Ks);function _e(B){y[B]!==!0&&(s.enable(B),y[B]=!0)}function Ge(B){y[B]!==!1&&(s.disable(B),y[B]=!1)}function dt(B,pe){return _[B]!==pe?(s.bindFramebuffer(B,pe),_[B]=pe,B===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=pe),B===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function et(B,pe){let de=w,Ce=!1;if(B){de=M.get(pe),de===void 0&&(de=[],M.set(pe,de));const Te=B.textures;if(de.length!==Te.length||de[0]!==s.COLOR_ATTACHMENT0){for(let me=0,De=Te.length;me<De;me++)de[me]=s.COLOR_ATTACHMENT0+me;de.length=Te.length,Ce=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(de)}function gt(B){return C!==B?(s.useProgram(B),C=B,!0):!1}const ht={[qs]:s.FUNC_ADD,[Qx]:s.FUNC_SUBTRACT,[e_]:s.FUNC_REVERSE_SUBTRACT};ht[t_]=s.MIN,ht[n_]=s.MAX;const lt={[i_]:s.ZERO,[r_]:s.ONE,[s_]:s.SRC_COLOR,[ig]:s.SRC_ALPHA,[d_]:s.SRC_ALPHA_SATURATE,[c_]:s.DST_COLOR,[o_]:s.DST_ALPHA,[a_]:s.ONE_MINUS_SRC_COLOR,[rg]:s.ONE_MINUS_SRC_ALPHA,[u_]:s.ONE_MINUS_DST_COLOR,[l_]:s.ONE_MINUS_DST_ALPHA,[f_]:s.CONSTANT_COLOR,[h_]:s.ONE_MINUS_CONSTANT_COLOR,[p_]:s.CONSTANT_ALPHA,[m_]:s.ONE_MINUS_CONSTANT_ALPHA};function Ht(B,pe,de,Ce,Te,me,De,ke,ve,We){if(B===Ks){g===!0&&(Ge(s.BLEND),g=!1);return}if(g===!1&&(_e(s.BLEND),g=!0),B!==Jx){if(B!==v||We!==k){if((N!==qs||U!==qs)&&(s.blendEquation(s.FUNC_ADD),N=qs,U=qs),We)switch(B){case Za:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nm:s.blendFunc(s.ONE,s.ONE);break;case im:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pt("WebGLState: Invalid blending: ",B);break}else switch(B){case Za:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case im:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rm:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",B);break}F=null,P=null,D=null,E=null,b.set(0,0,0),V=0,v=B,k=We}return}Te=Te||pe,me=me||de,De=De||Ce,(pe!==N||Te!==U)&&(s.blendEquationSeparate(ht[pe],ht[Te]),N=pe,U=Te),(de!==F||Ce!==P||me!==D||De!==E)&&(s.blendFuncSeparate(lt[de],lt[Ce],lt[me],lt[De]),F=de,P=Ce,D=me,E=De),(ke.equals(b)===!1||ve!==V)&&(s.blendColor(ke.r,ke.g,ke.b,ve),b.copy(ke),V=ve),v=B,k=!1}function Ut(B,pe){B.side===Bi?Ge(s.CULL_FACE):_e(s.CULL_FACE);let de=B.side===zn;pe&&(de=!de),Bt(de),B.blending===Za&&B.transparent===!1?Ht(Ks):Ht(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const Ce=B.stencilWrite;f.setTest(Ce),Ce&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ct(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(B){j!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),j=B)}function wt(B){B!==$x?(_e(s.CULL_FACE),B!==q&&(B===tm?s.cullFace(s.BACK):B===Kx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ge(s.CULL_FACE),q=B}function sn(B){B!==se&&(K&&s.lineWidth(B),se=B)}function Ct(B,pe,de){B?(_e(s.POLYGON_OFFSET_FILL),(z!==pe||re!==de)&&(z=pe,re=de,u.getReversed()&&(pe=-pe,de=-de),s.polygonOffset(pe,de))):Ge(s.POLYGON_OFFSET_FILL)}function Vt(B){B?_e(s.SCISSOR_TEST):Ge(s.SCISSOR_TEST)}function It(B){B===void 0&&(B=s.TEXTURE0+ue-1),$!==B&&(s.activeTexture(B),$=B)}function Wt(B,pe,de){de===void 0&&($===null?de=s.TEXTURE0+ue-1:de=$);let Ce=I[de];Ce===void 0&&(Ce={type:void 0,texture:void 0},I[de]=Ce),(Ce.type!==B||Ce.texture!==pe)&&($!==de&&(s.activeTexture(de),$=de),s.bindTexture(B,pe||Ue[B]),Ce.type=B,Ce.texture=pe)}function X(){const B=I[$];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ln(){try{s.compressedTexImage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function At(){try{s.compressedTexImage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function xt(){try{s.texSubImage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function Le(){try{s.texSubImage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function jt(){try{s.compressedTexSubImage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function Ve(){try{s.compressedTexSubImage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function tt(){try{s.texStorage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function L(){try{s.texStorage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function A(){try{s.texImage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function ee(){try{s.texImage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function Ee(B){return S[B]!==void 0?S[B]:s.getParameter(B)}function ge(B,pe){S[B]!==pe&&(s.pixelStorei(B,pe),S[B]=pe)}function be(B){ne.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),ne.copy(B))}function Pe(B){xe.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),xe.copy(B))}function fe(B,pe){let de=m.get(pe);de===void 0&&(de=new WeakMap,m.set(pe,de));let Ce=de.get(B);Ce===void 0&&(Ce=s.getUniformBlockIndex(pe,B.name),s.uniformBlockBinding(pe,Ce,Ce),de.set(B,Ce))}function he(B,pe,de){const Te=m.get(pe).get(B);h[Te]!==de&&(s.bindBufferBase(s.UNIFORM_BUFFER,Te,de),h[Te]=de)}function Ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),y={},S={},$=null,I={},_={},h={},M=new WeakMap,w=[],C=null,g=!1,v=null,N=null,F=null,P=null,U=null,D=null,E=null,b=new Mt(0,0,0),V=0,k=!1,j=null,q=null,se=null,z=null,re=null,ne.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:_e,disable:Ge,bindFramebuffer:dt,drawBuffers:et,useProgram:gt,setBlending:Ht,setMaterial:Ut,setFlipSided:Bt,setCullFace:wt,setLineWidth:sn,setPolygonOffset:Ct,setScissorTest:Vt,activeTexture:It,bindTexture:Wt,unbindTexture:X,compressedTexImage2D:ln,compressedTexImage3D:At,texImage2D:A,texImage3D:ee,pixelStorei:ge,getParameter:Ee,updateUBOMapping:fe,uniformBlockBinding:he,texStorage2D:tt,texStorage3D:L,texSubImage2D:xt,texSubImage3D:Le,compressedTexSubImage2D:jt,compressedTexSubImage3D:Ve,scissor:be,viewport:Pe,reset:Ae}}function dw(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Et,y=new WeakMap,S=new Set;let _;const M=new WeakMap,w=new Set,C=new FinalizationRegistry(L=>w.delete(L));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,A){return g?new OffscreenCanvas(L,A):Jl("canvas")}function N(L,A,ee){let Ee=1;const ge=tt(L);if((ge.width>ee||ge.height>ee)&&(Ee=ee/Math.max(ge.width,ge.height)),Ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const be=Math.floor(Ee*ge.width),Pe=Math.floor(Ee*ge.height);_===void 0&&(_=v(be,Pe));const fe=A?v(be,Pe):_;return fe.width=be,fe.height=Pe,fe.getContext("2d").drawImage(L,0,0,be,Pe),ot("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+be+"x"+Pe+")."),fe}else return"data"in L&&ot("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function F(L){return L.generateMipmaps}function P(L){s.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,A,ee,Ee,ge,be=!1){if(L!==null){if(s[L]!==void 0)return s[L];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Pe;Ee&&(Pe=e.get("EXT_texture_norm16"),Pe||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=A;if(A===s.RED&&(ee===s.FLOAT&&(fe=s.R32F),ee===s.HALF_FLOAT&&(fe=s.R16F),ee===s.UNSIGNED_BYTE&&(fe=s.R8),ee===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.R16_EXT),ee===s.SHORT&&Pe&&(fe=Pe.R16_SNORM_EXT)),A===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.R8UI),ee===s.UNSIGNED_SHORT&&(fe=s.R16UI),ee===s.UNSIGNED_INT&&(fe=s.R32UI),ee===s.BYTE&&(fe=s.R8I),ee===s.SHORT&&(fe=s.R16I),ee===s.INT&&(fe=s.R32I)),A===s.RG&&(ee===s.FLOAT&&(fe=s.RG32F),ee===s.HALF_FLOAT&&(fe=s.RG16F),ee===s.UNSIGNED_BYTE&&(fe=s.RG8),ee===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RG16_EXT),ee===s.SHORT&&Pe&&(fe=Pe.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RG16UI),ee===s.UNSIGNED_INT&&(fe=s.RG32UI),ee===s.BYTE&&(fe=s.RG8I),ee===s.SHORT&&(fe=s.RG16I),ee===s.INT&&(fe=s.RG32I)),A===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),ee===s.UNSIGNED_INT&&(fe=s.RGB32UI),ee===s.BYTE&&(fe=s.RGB8I),ee===s.SHORT&&(fe=s.RGB16I),ee===s.INT&&(fe=s.RGB32I)),A===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(fe=s.RGBA32UI),ee===s.BYTE&&(fe=s.RGBA8I),ee===s.SHORT&&(fe=s.RGBA16I),ee===s.INT&&(fe=s.RGBA32I)),A===s.RGB&&(ee===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGB16_EXT),ee===s.SHORT&&Pe&&(fe=Pe.RGB16_SNORM_EXT),ee===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),A===s.RGBA){const he=be?Zl:yt.getTransfer(ge);ee===s.FLOAT&&(fe=s.RGBA32F),ee===s.HALF_FLOAT&&(fe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(fe=he===Dt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGBA16_EXT),ee===s.SHORT&&Pe&&(fe=Pe.RGBA16_SNORM_EXT),ee===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function E(L,A){let ee;return L?A===null||A===Wi||A===Qs?ee=s.DEPTH24_STENCIL8:A===Gi?ee=s.DEPTH32F_STENCIL8:A===no&&(ee=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Wi||A===Qs?ee=s.DEPTH_COMPONENT24:A===Gi?ee=s.DEPTH_COMPONENT32F:A===no&&(ee=s.DEPTH_COMPONENT16),ee}function b(L,A){return F(L)===!0||L.isFramebufferTexture&&L.minFilter!==An&&L.minFilter!==qn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function V(L){const A=new WeakRef(L);r.get(L).__ref=A,w.add(A),C.register(L,A,A)}function k(L){const A=r.get(L).__ref;A!==void 0&&(w.delete(A),C.unregister(A))}function j(L){se(L.target)}function q(L){z(L.target)}function se(L){L.removeEventListener("dispose",j),k(L),ue(L),L.isVideoTexture&&y.delete(L),L.isHTMLTexture&&S.delete(L)}function z(L){L.removeEventListener("dispose",q),k(L),Z(L)}function re(){for(const L of w){const A=L.deref();A!==void 0&&(A.isRenderTarget===!0?z(A):se(A))}w.clear(),S.clear()}function ue(L){const A=r.get(L);if(A.__webglInit===void 0)return;const ee=L.source,Ee=M.get(ee);if(Ee){const ge=Ee[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&K(L),Object.keys(Ee).length===0&&M.delete(ee)}r.remove(L)}function K(L){const A=r.get(L);s.deleteTexture(A.__webglTexture);const ee=L.source,Ee=M.get(ee);delete Ee[A.__cacheKey],u.memory.textures--}function Z(L){const A=r.get(L);A.__depthDisposeCallback&&A.__depthDisposeCallback();const ee=L.depthTexture;if(ee&&ee.renderTarget===L&&se(ee),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let be=0;be<A.__webglFramebuffer[ge].length;be++)s.deleteFramebuffer(A.__webglFramebuffer[ge][be]);else s.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)s.deleteFramebuffer(A.__webglFramebuffer[ge]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Ee=L.textures;for(let ge=0,be=Ee.length;ge<be;ge++){const Pe=r.get(Ee[ge]);Pe.__webglTexture&&(s.deleteTexture(Pe.__webglTexture),u.memory.textures--),r.remove(Ee[ge])}r.remove(L)}let G=0;function $(){G=0}function I(){return G}function Q(L){G=L}function Re(){const L=G;return L>=o.maxTextures&&ot("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+o.maxTextures),G+=1,L}function ne(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.mipmapsAutoUpdate),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function xe(L,A){const ee=r.get(L);if(L.isVideoTexture&&jt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ee.__version!==L.version){const Ee=L.image;if(Ee===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(ee,L,A);return}}else L.isExternalTexture&&(ee.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+A)}function ye(L,A){const ee=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){Ut(ee,L,A);return}else L.isExternalTexture&&(ee.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+A)}function Ue(L,A){const ee=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){Ut(ee,L,A);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+A)}function _e(L,A){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){Bt(ee,L,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+A)}const Ge={[Td]:s.REPEAT,[ar]:s.CLAMP_TO_EDGE,[Ad]:s.MIRRORED_REPEAT},dt={[An]:s.NEAREST,[__]:s.NEAREST_MIPMAP_NEAREST,[ml]:s.NEAREST_MIPMAP_LINEAR,[qn]:s.LINEAR,[ju]:s.LINEAR_MIPMAP_NEAREST,[Ur]:s.LINEAR_MIPMAP_LINEAR},et={[M_]:s.NEVER,[Mg]:s.ALWAYS,[E_]:s.LESS,[Sg]:s.LEQUAL,[w_]:s.EQUAL,[yg]:s.GEQUAL,[T_]:s.GREATER,[A_]:s.NOTEQUAL};function gt(L,A){if(A.type===Gi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===qn||A.magFilter===ju||A.magFilter===ml||A.magFilter===Ur||A.minFilter===qn||A.minFilter===ju||A.minFilter===ml||A.minFilter===Ur)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Ge[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Ge[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Ge[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,dt[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,dt[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,et[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===An||A.minFilter!==ml&&A.minFilter!==Ur||A.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ht(L,A){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",j),V(A));const Ee=A.source;let ge=M.get(Ee);ge===void 0&&(ge={},M.set(Ee,ge));const be=ne(A);if(be!==L.__cacheKey){ge[be]===void 0&&(ge[be]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ge[be].usedTimes++;const Pe=ge[L.__cacheKey];Pe!==void 0&&(ge[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&K(A)),L.__cacheKey=be,L.__webglTexture=ge[be].texture}return ee}function lt(L,A,ee){return Math.floor(Math.floor(L/ee)/A)}function Ht(L,A,ee,Ee){const be=L.updateRanges;if(be.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ee,Ee,A.data);else{be.sort((B,pe)=>B.start-pe.start);let Pe=0;for(let B=1;B<be.length;B++){const pe=be[Pe],de=be[B],Ce=pe.start+pe.count,Te=lt(de.start,A.width,4),me=lt(pe.start,A.width,4);de.start<=Ce+1&&Te===me&&lt(de.start+de.count-1,A.width,4)===Te?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++Pe,be[Pe]=de)}be.length=Pe+1;const fe=t.getParameter(s.UNPACK_ROW_LENGTH),he=t.getParameter(s.UNPACK_SKIP_PIXELS),Ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let B=0,pe=be.length;B<pe;B++){const de=be[B],Ce=Math.floor(de.start/4),Te=Math.ceil(de.count/4),me=Ce%A.width,De=Math.floor(Ce/A.width),ke=Te,ve=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,me),t.pixelStorei(s.UNPACK_SKIP_ROWS,De),t.texSubImage2D(s.TEXTURE_2D,0,me,De,ke,ve,ee,Ee,A.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,fe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,he),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}function Ut(L,A,ee){let Ee=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Ee=s.TEXTURE_3D);const ge=ht(L,A),be=A.source;t.bindTexture(Ee,L.__webglTexture,s.TEXTURE0+ee);const Pe=r.get(be);if(be.version!==Pe.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+ee),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ve=yt.getPrimaries(yt.workingColorSpace),We=A.colorSpace===Ir?null:yt.getPrimaries(A.colorSpace),nt=A.colorSpace===Ir||ve===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let he=N(A.image,!1,o.maxTextureSize);he=Ve(A,he);const Ae=l.convert(A.format,A.colorSpace),B=l.convert(A.type);let pe=D(A.internalFormat,Ae,B,A.normalized,A.colorSpace,A.isVideoTexture);gt(Ee,A);let de;const Ce=A.mipmaps,Te=A.isVideoTexture!==!0,me=Pe.__version===void 0||ge===!0,De=be.dataReady,ke=b(A,he);if(A.isDepthTexture)pe=E(A.format===Fr,A.type),me&&(Te?t.texStorage2D(s.TEXTURE_2D,1,pe,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,pe,he.width,he.height,0,Ae,B,null));else if(A.isDataTexture)if(Ce.length>0){Te&&me&&t.texStorage2D(s.TEXTURE_2D,ke,pe,Ce[0].width,Ce[0].height);for(let ve=0,We=Ce.length;ve<We;ve++)de=Ce[ve],Te?De&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,de.width,de.height,Ae,B,de.data):t.texImage2D(s.TEXTURE_2D,ve,pe,de.width,de.height,0,Ae,B,de.data);A.generateMipmaps=!1}else Te?(me&&t.texStorage2D(s.TEXTURE_2D,ke,pe,he.width,he.height),De&&Ht(A,he,Ae,B)):t.texImage2D(s.TEXTURE_2D,0,pe,he.width,he.height,0,Ae,B,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Te&&me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,pe,Ce[0].width,Ce[0].height,he.depth);for(let ve=0,We=Ce.length;ve<We;ve++)if(de=Ce[ve],A.format!==Hi)if(Ae!==null)if(Te){if(De)if(A.layerUpdates.size>0){const nt=Dm(de.width,de.height,A.format,A.type);for(const Oe of A.layerUpdates){const St=de.data.subarray(Oe*nt/de.data.BYTES_PER_ELEMENT,(Oe+1)*nt/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,Oe,de.width,de.height,1,Ae,St)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,de.width,de.height,he.depth,Ae,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,pe,de.width,de.height,he.depth,0,de.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?De&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,de.width,de.height,he.depth,Ae,B,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,pe,de.width,de.height,he.depth,0,Ae,B,de.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Te&&me&&t.texStorage2D(s.TEXTURE_2D,ke,pe,Ce[0].width,Ce[0].height);for(let ve=0,We=Ce.length;ve<We;ve++)de=Ce[ve],A.format!==Hi?Ae!==null?Te?De&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,de.width,de.height,Ae,de.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,pe,de.width,de.height,0,de.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?De&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,de.width,de.height,Ae,B,de.data):t.texImage2D(s.TEXTURE_2D,ve,pe,de.width,de.height,0,Ae,B,de.data)}else if(A.isDataArrayTexture)if(Te){if(me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,pe,he.width,he.height,he.depth),De)if(A.layerUpdates.size>0){const ve=Dm(he.width,he.height,A.format,A.type);for(const We of A.layerUpdates){const nt=he.data.subarray(We*ve/he.data.BYTES_PER_ELEMENT,(We+1)*ve/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,We,he.width,he.height,1,Ae,B,nt)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ae,B,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,pe,he.width,he.height,he.depth,0,Ae,B,he.data);else if(A.isData3DTexture)Te?(me&&t.texStorage3D(s.TEXTURE_3D,ke,pe,he.width,he.height,he.depth),De&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ae,B,he.data)):t.texImage3D(s.TEXTURE_3D,0,pe,he.width,he.height,he.depth,0,Ae,B,he.data);else if(A.isFramebufferTexture){if(me)if(Te)t.texStorage2D(s.TEXTURE_2D,ke,pe,he.width,he.height);else{let ve=he.width,We=he.height;for(let nt=0;nt<ke;nt++)t.texImage2D(s.TEXTURE_2D,nt,pe,ve,We,0,Ae,B,null),ve>>=1,We>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const ve=s.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),he.parentNode!==ve){ve.appendChild(he),S.add(A),ve.onpaint=We=>{const nt=We.changedElements;for(const Oe of S)nt.includes(Oe.image)&&(Oe.needsUpdate=!0)},ve.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,he);else{const nt=s.RGBA,Oe=s.RGBA,St=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,nt,Oe,St,he)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Te&&me){const ve=tt(Ce[0]);t.texStorage2D(s.TEXTURE_2D,ke,pe,ve.width,ve.height)}for(let ve=0,We=Ce.length;ve<We;ve++)de=Ce[ve],Te?De&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ae,B,de):t.texImage2D(s.TEXTURE_2D,ve,pe,Ae,B,de);A.generateMipmaps=!1}else if(Te){if(me){const ve=tt(he);t.texStorage2D(s.TEXTURE_2D,ke,pe,ve.width,ve.height)}De&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,B,he)}else t.texImage2D(s.TEXTURE_2D,0,pe,Ae,B,he);F(A)&&A.mipmapsAutoUpdate===!0&&P(Ee),Pe.__version=be.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Bt(L,A,ee){if(A.image.length!==6)return;const Ee=ht(L,A),ge=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ee);const be=r.get(ge);if(ge.version!==be.__version||Ee===!0){t.activeTexture(s.TEXTURE0+ee);const Pe=yt.getPrimaries(yt.workingColorSpace),fe=A.colorSpace===Ir?null:yt.getPrimaries(A.colorSpace),he=A.colorSpace===Ir||Pe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ae=A.isCompressedTexture||A.image[0].isCompressedTexture,B=A.image[0]&&A.image[0].isDataTexture,pe=[];for(let Oe=0;Oe<6;Oe++)!Ae&&!B?pe[Oe]=N(A.image[Oe],!0,o.maxCubemapSize):pe[Oe]=B?A.image[Oe].image:A.image[Oe],pe[Oe]=Ve(A,pe[Oe]);const de=pe[0],Ce=l.convert(A.format,A.colorSpace),Te=l.convert(A.type);let me=D(A.internalFormat,Ce,Te,A.normalized,A.colorSpace);const De=A.isVideoTexture!==!0,ke=be.__version===void 0||Ee===!0,ve=ge.dataReady;let We=b(A,de);gt(s.TEXTURE_CUBE_MAP,A);let nt;if(A.isDepthTexture){if(me=E(A.format===Fr,A.type),ke)if(De)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,me,de.width,de.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,me,de.width,de.height,0,Ce,Te,null)}else if(Ae){De&&ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,We,me,de.width,de.height);for(let Oe=0;Oe<6;Oe++){nt=pe[Oe].mipmaps;for(let St=0;St<nt.length;St++){const Zt=nt[St];A.format!==Hi?Ce!==null?De?ve&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St,0,0,Zt.width,Zt.height,Ce,Zt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St,me,Zt.width,Zt.height,0,Zt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St,0,0,Zt.width,Zt.height,Ce,Te,Zt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St,me,Zt.width,Zt.height,0,Ce,Te,Zt.data)}}}else{if(nt=A.mipmaps,De&&ke){nt.length>0&&We++;const Oe=tt(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,We,me,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(B){De?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,pe[Oe].width,pe[Oe].height,Ce,Te,pe[Oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,me,pe[Oe].width,pe[Oe].height,0,Ce,Te,pe[Oe].data);for(let St=0;St<nt.length;St++){const $n=nt[St].image[Oe].image;De?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St+1,0,0,$n.width,$n.height,Ce,Te,$n.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St+1,me,$n.width,$n.height,0,Ce,Te,$n.data)}}else{De?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Ce,Te,pe[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,me,Ce,Te,pe[Oe]);for(let St=0;St<nt.length;St++){const Zt=nt[St];De?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St+1,0,0,Ce,Te,Zt.image[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,St+1,me,Ce,Te,Zt.image[Oe])}}}F(A)&&A.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),be.__version=ge.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function wt(L,A,ee,Ee,ge,be){const Pe=l.convert(ee.format,ee.colorSpace),fe=l.convert(ee.type),he=D(ee.internalFormat,Pe,fe,ee.normalized,ee.colorSpace),Ae=r.get(A),B=r.get(ee);if(B.__renderTarget=A,!Ae.__hasExternalTextures){const pe=Math.max(1,A.width>>be),de=Math.max(1,A.height>>be);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,be,he,pe,de,A.depth,0,Pe,fe,null):t.texImage2D(ge,be,he,pe,de,0,Pe,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Le(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,ge,B.__webglTexture,0,xt(A)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,ge,B.__webglTexture,be),t.bindFramebuffer(s.FRAMEBUFFER,null)}function sn(L,A,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const Ee=A.depthTexture,ge=Ee&&Ee.isDepthTexture?Ee.type:null,be=E(A.stencilBuffer,ge),Pe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Le(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt(A),be,A.width,A.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt(A),be,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,be,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,L)}else{const Ee=A.textures;for(let ge=0;ge<Ee.length;ge++){const be=Ee[ge],Pe=l.convert(be.format,be.colorSpace),fe=l.convert(be.type),he=D(be.internalFormat,Pe,fe,be.normalized,be.colorSpace);Le(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt(A),he,A.width,A.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt(A),he,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,he,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(L,A,ee){const Ee=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(A.depthTexture);ge.__renderTarget=A;const be=Ee?A.depthTexture.image[0]:A.depthTexture.image;(!ge.__webglTexture||be.width!==A.width||be.height!==A.height)&&(be.width=A.width,be.height=A.height,A.depthTexture.needsUpdate=!0),Ee?_e(A.depthTexture,0):xe(A.depthTexture,0);const Pe=ge.__webglTexture,fe=xt(A),he=Ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+ee:s.TEXTURE_2D,Ae=A.depthTexture.format===Fr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===kr)Le(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,he,Pe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,he,Pe,0);else if(A.depthTexture.format===Fr)Le(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,he,Pe,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,Ae,he,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(L){const A=r.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const Ee=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Ee){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Ee.removeEventListener("dispose",ge)};Ee.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=Ee}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(ee)for(let Ee=0;Ee<6;Ee++)Ct(A.__webglFramebuffer[Ee],L,Ee);else L.texture.mipmaps.length>0?Ct(A.__webglFramebuffer[0],L,0):Ct(A.__webglFramebuffer,L,0);else if(ee){A.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Ee]),A.__webglDepthbuffer[Ee]===void 0)A.__webglDepthbuffer[Ee]=s.createRenderbuffer(),sn(A.__webglDepthbuffer[Ee],L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=A.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,be)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),sn(A.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,be),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,be)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function It(L,A,ee){const Ee=r.get(L);A!==void 0&&wt(Ee.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&Vt(L)}function Wt(L){const A=L.texture,ee=r.get(L),Ee=r.get(A);L.addEventListener("dispose",q),V(L);const ge=L.textures,be=L.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=A.version,u.memory.textures++),be){ee.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(A.mipmaps.length>0){ee.__webglFramebuffer[fe]=[];for(let he=0;he<A.mipmaps.length;he++)ee.__webglFramebuffer[fe][he]=s.createFramebuffer()}else ee.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)ee.__webglFramebuffer[fe]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let fe=0,he=ge.length;fe<he;fe++){const Ae=r.get(ge[fe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&Le(L)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let fe=0;fe<ge.length;fe++){const he=ge[fe];ee.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[fe]);const Ae=l.convert(he.format,he.colorSpace),B=l.convert(he.type),pe=D(he.internalFormat,Ae,B,he.normalized,he.colorSpace,L.isXRRenderTarget===!0),de=xt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,pe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,ee.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),sn(ee.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(be){t.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),gt(s.TEXTURE_CUBE_MAP,A);for(let fe=0;fe<6;fe++)if(A.mipmaps.length>0)for(let he=0;he<A.mipmaps.length;he++)wt(ee.__webglFramebuffer[fe][he],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else wt(ee.__webglFramebuffer[fe],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);F(A)?P(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Pe){for(let fe=0,he=ge.length;fe<he;fe++){const Ae=ge[fe],B=r.get(Ae);let pe=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,B.__webglTexture),gt(pe,Ae),wt(ee.__webglFramebuffer,L,Ae,s.COLOR_ATTACHMENT0+fe,pe,0),F(Ae)&&P(pe)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,Ee.__webglTexture),gt(fe,A),A.mipmaps.length>0)for(let he=0;he<A.mipmaps.length;he++)wt(ee.__webglFramebuffer[he],L,A,s.COLOR_ATTACHMENT0,fe,he);else wt(ee.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,fe,0);F(A)?P(fe):A.mipmaps.length>0&&s.texParameteri(fe,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&Vt(L)}function X(L){const A=L.textures;for(let ee=0,Ee=A.length;ee<Ee;ee++){const ge=A[ee];if(F(ge)&&ge.mipmapsAutoUpdate===!0){const be=U(L),Pe=r.get(ge).__webglTexture;t.bindTexture(be,Pe),P(be),t.unbindTexture()}}}const ln=[];function At(L){if(L.samples>0){if(Le(L)===!1){const A=L.textures,ee=L.width,Ee=L.height;let ge=s.COLOR_BUFFER_BIT;const be=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(L),fe=A.length>1;if(fe)for(let Ae=0;Ae<A.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ae=0;Ae<A.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ae]);const B=r.get(A[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,B,0)}s.blitFramebuffer(0,0,ee,Ee,0,0,ee,Ee,ge,s.NEAREST),h===!0&&(ln.length=0,ln.push(s.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&ln.push(be),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ln))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Ae=0;Ae<A.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ae]);const B=r.get(A[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,B,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&h){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function xt(L){return Math.min(o.maxSamples,L.samples)}function Le(L){const A=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function jt(L){const A=u.render.frame;y.get(L)!==A&&(y.set(L,A),L.update())}function Ve(L,A){const ee=L.colorSpace,Ee=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ee!==Kl&&ee!==Ir&&(yt.getTransfer(ee)===Dt?(Ee!==Hi||ge!==ni)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ee)),A}function tt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=Re,this.resetTextureUnits=$,this.getTextureUnits=I,this.setTextureUnits=Q,this.setTexture2D=xe,this.setTexture2DArray=ye,this.setTexture3D=Ue,this.setTextureCube=_e,this.rebindTextures=It,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Le,this.dispose=re}function fw(s,e){function t(r,o=Ir){let l;const u=yt.getTransfer(o);if(r===ni)return s.UNSIGNED_BYTE;if(r===hf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===pf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===mg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===gg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===hg)return s.BYTE;if(r===pg)return s.SHORT;if(r===no)return s.UNSIGNED_SHORT;if(r===ff)return s.INT;if(r===Wi)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===ji)return s.HALF_FLOAT;if(r===xg)return s.ALPHA;if(r===_g)return s.RGB;if(r===Hi)return s.RGBA;if(r===kr)return s.DEPTH_COMPONENT;if(r===Fr)return s.DEPTH_STENCIL;if(r===vg)return s.RED;if(r===mf)return s.RED_INTEGER;if(r===os)return s.RG;if(r===gf)return s.RG_INTEGER;if(r===xf)return s.RGBA_INTEGER;if(r===zl||r===Gl||r===Hl||r===Vl)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bd||r===Rd||r===Cd||r===Nd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===bd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pd||r===Ld||r===Dd||r===Id||r===Ud||r===ql||r===Fd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Pd||r===Ld)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Dd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Id)return l.COMPRESSED_R11_EAC;if(r===Ud)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ql)return l.COMPRESSED_RG11_EAC;if(r===Fd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Od||r===kd||r===Bd||r===zd||r===Gd||r===Hd||r===Vd||r===Wd||r===jd||r===Xd||r===Yd||r===qd||r===$d||r===Kd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Od)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$d)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zd||r===Jd||r===Qd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Zd)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ef||r===tf||r===$l||r===nf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ef)return l.COMPRESSED_RED_RGTC1_EXT;if(r===tf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$l)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Ug(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new cs({vertexShader:hw,fragmentShader:pw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rn(new oo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gw extends us{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,m=null,y=null,S=null,_=null,M=null,w=null;const C=typeof XRWebGLBinding<"u",g=new mw,v={},N=t.getContextAttributes();let F=null,P=null;const U=[],D=[],E=new Et;let b=null,V=null;const k=new hi;k.viewport=new en;const j=new hi;j.viewport=new en;const q=[k,j],se=new Rv;let z=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let xe=U[ne];return xe===void 0&&(xe=new Qu,U[ne]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ne){let xe=U[ne];return xe===void 0&&(xe=new Qu,U[ne]=xe),xe.getGripSpace()},this.getHand=function(ne){let xe=U[ne];return xe===void 0&&(xe=new Qu,U[ne]=xe),xe.getHandSpace()};function ue(ne){const xe=D.indexOf(ne.inputSource);if(xe===-1)return;const ye=U[xe];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,m||u),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function K(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<U.length;ne++){const xe=D[ne];xe!==null&&(D[ne]=null,U[ne].disconnect(xe))}z=null,re=null,g.reset();for(const ne in v)delete v[ne];if(e.setRenderTarget(F),M=null,_=null,S=null,o=null,P=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(E.width,E.height,!1),V!==null){const ne=V.camera;ne.fov=V.fov,ne.zoom=V.zoom,ne.updateProjectionMatrix(),V=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ne){m=ne},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",K),o.addEventListener("inputsourceschange",Z),N.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(E),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ue=null,_e=null;N.depth&&(_e=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=N.stencil?Fr:kr,Ue=N.stencil?Qs:Wi);const Ge={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};S=this.getBinding(),_=S.createProjectionLayer(Ge),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new Vi(_.textureWidth,_.textureHeight,{format:Hi,type:ni,depthTexture:new ea(_.textureWidth,_.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const ye={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Hi,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(f),Re.setContext(o),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(ne){for(let xe=0;xe<ne.removed.length;xe++){const ye=ne.removed[xe],Ue=D.indexOf(ye);Ue>=0&&(D[Ue]=null,U[Ue].disconnect(ye))}for(let xe=0;xe<ne.added.length;xe++){const ye=ne.added[xe];let Ue=D.indexOf(ye);if(Ue===-1){for(let Ge=0;Ge<U.length;Ge++)if(Ge>=D.length){D.push(ye),Ue=Ge;break}else if(D[Ge]===null){D[Ge]=ye,Ue=Ge;break}if(Ue===-1)break}const _e=U[Ue];_e&&_e.connect(ye)}}function G(ne,xe){xe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(xe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let xe=ne.near,ye=ne.far;g.texture!==null&&(g.depthNear>0&&(xe=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),se.near=j.near=k.near=xe,se.far=j.far=k.far=ye,(z!==se.near||re!==se.far)&&(o.updateRenderState({depthNear:se.near,depthFar:se.far}),z=se.near,re=se.far),se.layers.mask=ne.layers.mask|6,k.layers.mask=se.layers.mask&-5,j.layers.mask=se.layers.mask&-3;const Ue=ne.parent,_e=se.cameras;G(se,Ue);for(let Ge=0;Ge<_e.length;Ge++)G(_e[Ge],Ue);se.projectionMatrix.copy(k.projectionMatrix),se.projectionMatrixInverse.copy(k.projectionMatrixInverse),V===null&&ne.isPerspectiveCamera&&(V={camera:ne,fov:ne.fov,zoom:ne.zoom}),$(ne,se,Ue)};function $(ne,xe,ye){ye===null?ne.matrix.copy(xe.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(xe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ro*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(_===null&&M===null))return h},this.setFoveation=function(ne){h=ne,_!==null&&(_.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(se)},this.getCameraTexture=function(ne){return v[ne]};let I=null;function Q(ne,xe){if(y=xe.getViewerPose(m||u),w=xe,y!==null){const ye=y.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Ue=!1;ye.length!==se.cameras.length&&(se.cameras.length=0,Ue=!0);for(let et=0;et<ye.length;et++){const gt=ye[et];let ht=null;if(M!==null)ht=M.getViewport(gt);else{const Ht=S.getViewSubImage(_,gt);ht=Ht.viewport,et===0&&(e.setRenderTargetTextures(P,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(P))}let lt=q[et];lt===void 0&&(lt=new hi,lt.layers.enable(et),lt.viewport=new en,q[et]=lt),lt.matrix.fromArray(gt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(gt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ht.x,ht.y,ht.width,ht.height),et===0&&(se.matrix.copy(lt.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Ue===!0&&se.cameras.push(lt)}const _e=o.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const et=S.getDepthInformation(ye[0]);et&&et.isValid&&et.texture&&g.init(et,o.renderState)}if(_e&&_e.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let et=0;et<ye.length;et++){const gt=ye[et].camera;if(gt){let ht=v[gt];ht||(ht=new Ug,v[gt]=ht);const lt=S.getCameraImage(gt);ht.sourceTexture=lt}}}}for(let ye=0;ye<U.length;ye++){const Ue=D[ye],_e=U[ye];Ue!==null&&_e!==void 0&&_e.update(Ue,xe,m||u)}I&&I(ne,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),w=null}const Re=new zg;Re.setAnimationLoop(Q),this.setAnimationLoop=function(ne){I=ne},this.dispose=function(){}}}const xw=new Kt,Kg=new ct;Kg.set(-1,0,0,0,1,0,0,0,1);function _w(s,e){function t(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function r(g,v){v.color.getRGB(g.fogColor.value,Fg(s)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function o(g,v,N,F,P){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(g,v):v.isMeshLambertMaterial?(l(g,v),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(g,v),S(g,v)):v.isMeshPhongMaterial?(l(g,v),y(g,v),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(g,v),_(g,v),v.isMeshPhysicalMaterial&&M(g,v,P)):v.isMeshMatcapMaterial?(l(g,v),w(g,v)):v.isMeshDepthMaterial?l(g,v):v.isMeshDistanceMaterial?(l(g,v),C(g,v)):v.isMeshNormalMaterial?l(g,v):v.isLineBasicMaterial?(u(g,v),v.isLineDashedMaterial&&f(g,v)):v.isPointsMaterial?h(g,v,N,F):v.isSpriteMaterial?m(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,t(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,t(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===zn&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,t(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===zn&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,t(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,t(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const N=e.get(v),F=N.envMap,P=N.envMapRotation;F&&(g.envMap.value=F,g.envMapRotation.value.setFromMatrix4(xw.makeRotationFromEuler(P)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Kg),g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,g.lightMapTransform)),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,g.aoMapTransform))}function u(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,t(v.map,g.mapTransform))}function f(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function h(g,v,N,F){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*N,g.scale.value=F*.5,v.map&&(g.map.value=v.map,t(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function m(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,t(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function y(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function S(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function _(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,g.roughnessMapTransform)),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function M(g,v,N){g.ior.value=v.ior,v.diffuseRoughness>0&&(g.diffuseRoughness.value=v.diffuseRoughness,v.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=v.diffuseRoughnessMap,t(v.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===zn&&g.clearcoatNormalScale.value.negate())),v.dispersion>0&&(g.dispersion.value=v.dispersion),v.retroreflectivity>0&&(g.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=v.iridescenceThicknessMaximum,v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=N.texture,g.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,v){v.matcap&&(g.matcap.value=v.matcap)}function C(g,v){const N=e.get(v).light;g.referencePosition.value.setFromMatrixPosition(N.matrixWorld),g.nearDistance.value=N.shadow.camera.near,g.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function vw(s,e,t,r){let o={},l={};function u(N,F){const P=F.program;r.uniformBlockBinding(N,P,o[N.id])}function f(N,F){let P=o[N.id];P===void 0&&(w(N),P=h(N),o[N.id]=P,N.addEventListener("dispose",g));const U=F.program;r.updateUBOMapping(N,U);const D=e.render.frame;l[N.id]!==D&&(m(N),l[N.id]=D)}function h(N){const F=s.createBuffer(),P=N.__size,U=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,P,U),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function m(N){const F=o[N.id],P=N.uniforms,U=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let D=0,E=P.length;D<E;D++){const b=P[D];if(Array.isArray(b))for(let V=0,k=b.length;V<k;V++)y(b[V],D,V,U);else y(b,D,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(N,F,P,U){if(_(N,F,P,U)===!0){const D=N.__offset,E=N.value;if(Array.isArray(E)){let b=0;for(let V=0;V<E.length;V++){const k=E[V],j=C(k,!0);S(k,N.__data,b),b+=j.storage/Float32Array.BYTES_PER_ELEMENT}}else S(E,N.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,D,N.__data)}}function S(N,F,P){typeof N=="number"||typeof N=="boolean"?F[P]=N:N.isMatrix3?(F[P]=N.elements[0],F[P+1]=N.elements[1],F[P+2]=N.elements[2],F[P+3]=0,F[P+4]=N.elements[3],F[P+5]=N.elements[4],F[P+6]=N.elements[5],F[P+7]=0,F[P+8]=N.elements[6],F[P+9]=N.elements[7],F[P+10]=N.elements[8],F[P+11]=0):ArrayBuffer.isView(N)?F.set(N.subarray(0,F.length-P),P):N.toArray(F,P)}function _(N,F,P,U){const D=N.value,E=F+"_"+P;if(Array.isArray(D)){U[E]===void 0&&(U[E]=[]);const b=U[E];let V=!1;for(let k=0;k<D.length;k++)M(D[k],b,k)===!0&&(V=!0);return V}return M(D,U,E)}function M(N,F,P){if(F[P]===void 0)return typeof N=="number"||typeof N=="boolean"?F[P]=N:ArrayBuffer.isView(N)?F[P]=N.slice():F[P]=N.clone(),!0;{const U=F[P];if(typeof N=="number"||typeof N=="boolean"){if(U!==N)return F[P]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(U.equals(N)===!1)return U.copy(N),!0}}return!1}function w(N){const F=N.uniforms;let P=0;const U=16;for(let E=0,b=F.length;E<b;E++){const V=Array.isArray(F[E])?F[E]:[F[E]];for(let k=0,j=V.length;k<j;k++){const q=V[k],se=Array.isArray(q.value)?q.value:[q.value],z=Array.isArray(F[E])||Array.isArray(q.value);let re=P;for(let K=0,Z=se.length;K<Z;K++){const G=se[K],$=C(G,z),I=P%U,Q=I%$.boundary,Re=I+Q;P+=Q,Re!==0&&U-Re<$.storage&&(P+=U-Re),K===0&&(re=P),P+=$.storage}const ue=q.type==="int"?Int32Array:q.type==="uint"?Uint32Array:Float32Array;q.__data=new ue((P-re)/Float32Array.BYTES_PER_ELEMENT),q.__offset=re}}const D=P%U;return D>0&&(P+=U-D),N.__size=P,N.__cache={},this}function C(N,F){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=16,P.storage=48):N.isMatrix4?(P.boundary=16,P.storage=64):N.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(P.boundary=16,P.storage=N.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",N),F===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function g(N){const F=N.target;F.removeEventListener("dispose",g),s.deleteBuffer(o[F.id]),delete o[F.id],delete l[F.id]}function v(){for(const N in o)s.deleteBuffer(o[N]);o={},l={}}return{bind:u,update:f,dispose:v}}const Sw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function yw(){return Oi===null&&(Oi=new pv(Sw,16,16,os,ji),Oi.name="DFG_LUT",Oi.minFilter=qn,Oi.magFilter=qn,Oi.wrapS=ar,Oi.wrapT=ar,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class Mw{constructor(e={}){const{canvas:t=C_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:M=ni}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const C=M,g=new Set([xf,gf,mf]),v=new Set([ni,Wi,no,Qs,hf,pf]),N=new Uint32Array(4),F=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let U=null,D=null;const E=[],b=[];let V=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let j=!1,q=null,se=null,z=null,re=null;this._outputColorSpace=fi;let ue=0,K=0,Z=null,G=-1,$=null;const I=new en,Q=new en;let Re=null;const ne=new Mt(0);let xe=0,ye=t.width,Ue=t.height,_e=1,Ge=null,dt=null;const et=new en(0,0,ye,Ue),gt=new en(0,0,ye,Ue);let ht=!1;const lt=new so,Ht=new Mf;let Ut=!1,Bt=!1;const wt=new Kt,sn=new le,Ct=new en,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function Wt(){return Z===null?_e:1}let X=r;function ln(R,H){return t.getContext(R,H)}let At,xt,Le,jt,Ve,tt,L,A,ee,Ee,ge,be,Pe,fe,he,Ae,B,pe,de,Ce,Te,me,De;try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:y,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uf}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),X===null){const H="webgl2";if(X=ln(H,R),X===null)throw ln(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(R){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Pt("WebGLRenderer: "+R.message),R}function ke(){At=new TM(X),At.init(),Te=new fw(X,At),xt=new pM(X,At,e,Te),Le=new uw(X,At),xt.reversedDepthBuffer&&_&&Le.buffers.depth.setReversed(!0),se=X.createFramebuffer(),z=X.createFramebuffer(),re=X.createFramebuffer(),jt=new RM(X),Ve=new KE,tt=new dw(X,At,Le,Ve,xt,Te,jt),L=new wM(k),A=new Nv(X),me=new fM(X,A),ee=new AM(X,A,jt,me),Ee=new NM(X,ee,A,me,jt),pe=new CM(X,xt,tt),he=new mM(Ve),ge=new $E(k,L,At,xt,me,he),be=new _w(k,Ve),Pe=new JE,fe=new rw(At),B=new dM(k,L,Le,Ee,w,h),Ae=new cw(k,Ee,xt),De=new vw(X,jt,xt,Le),de=new hM(X,At,jt),Ce=new bM(X,At,jt),jt.programs=ge.programs,k.capabilities=xt,k.extensions=At,k.properties=Ve,k.renderLists=Pe,k.shadowMap=Ae,k.state=Le,k.info=jt}C!==ni&&(V=new LM(C,t.width,t.height,f,o,l));const ve=new gw(k,X);this.xr=ve,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=At.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=At.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(R){R!==void 0&&(_e=R,this.setSize(ye,Ue,!1))},this.getSize=function(R){return R.set(ye,Ue)},this.setSize=function(R,H,ae=!0){if(ve.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=R,Ue=H,t.width=Math.floor(R*_e),t.height=Math.floor(H*_e),ae===!0&&(t.style.width=R+"px",t.style.height=H+"px"),V!==null&&V.setSize(t.width,t.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(ye*_e,Ue*_e).floor()},this.setDrawingBufferSize=function(R,H,ae){ye=R,Ue=H,_e=ae,t.width=Math.floor(R*ae),t.height=Math.floor(H*ae),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(C===ni){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,H,ae,te){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,H,ae,te),Le.viewport(I.copy(et).multiplyScalar(Wt()).round())},this.getScissor=function(R){return R.copy(gt)},this.setScissor=function(R,H,ae,te){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,H,ae,te),Le.scissor(Q.copy(gt).multiplyScalar(Wt()).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){Le.setScissorTest(ht=R)},this.setOpaqueSort=function(R){Ge=R},this.setTransparentSort=function(R){dt=R},this.getClearColor=function(R){return R.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,ae=!0){let te=0;if(R){let J=!1;if(Z!==null){const Fe=Z.texture.format;J=g.has(Fe)}if(J){const Fe=Z.texture.type,je=v.has(Fe),Ie=B.getClearColor(),Be=B.getClearAlpha(),Ye=Ie.r,st=Ie.g,ut=Ie.b;je?(N[0]=Ye,N[1]=st,N[2]=ut,N[3]=Be,X.clearBufferuiv(X.COLOR,0,N)):(F[0]=Ye,F[1]=st,F[2]=ut,F[3]=Be,X.clearBufferiv(X.COLOR,0,F))}else te|=X.COLOR_BUFFER_BIT}H&&(te|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),B.dispose(),Pe.dispose(),fe.dispose(),tt.dispose(),Ve.dispose(),L.dispose(),Ee.dispose(),ee.dispose(),me.dispose(),De.dispose(),ge.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",co),ve.removeEventListener("sessionend",Ri),Ci.stop()};function We(R){R.preventDefault(),om("WebGLRenderer: Context Lost."),j=!0}function nt(){om("WebGLRenderer: Context Restored."),j=!1;const R=jt.autoReset,H=Ae.enabled,ae=Ae.autoUpdate,te=Ae.needsUpdate,J=Ae.type;ke(),jt.autoReset=R,Ae.enabled=H,Ae.autoUpdate=ae,Ae.needsUpdate=te,Ae.type=J}function Oe(R){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function St(R){const H=R.target;H.removeEventListener("dispose",St),Zt(H)}function Zt(R){$n(R),Ve.remove(R)}function $n(R){const H=Ve.get(R).programs;H!==void 0&&(H.forEach(function(ae){ge.releaseProgram(ae)}),R.isShaderMaterial&&ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,ae,te,J,Fe){H===null&&(H=Vt);const je=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ie=ua(R,H,ae,te,J);Le.setMaterial(te,je);let Be=ae.index,Ye=1;if(te.wireframe===!0){if(Be=ee.getWireframeAttribute(ae),Be===void 0)return;Ye=2}const st=ae.drawRange,ut=ae.attributes.position;let qe=st.start*Ye,pt=(st.start+st.count)*Ye;Fe!==null&&(qe=Math.max(qe,Fe.start*Ye),pt=Math.min(pt,(Fe.start+Fe.count)*Ye)),Be!==null?(qe=Math.max(qe,0),pt=Math.min(pt,Be.count)):ut!=null&&(qe=Math.max(qe,0),pt=Math.min(pt,ut.count));const Yt=pt-qe;if(Yt<0||Yt===1/0)return;me.setup(J,te,Ie,ae,Be);let Lt,Nt=de;if(Be!==null&&(Lt=A.get(Be),Nt=Ce,Nt.setIndex(Lt)),J.isMesh)te.wireframe===!0?(Le.setLineWidth(te.wireframeLinewidth*Wt()),Nt.setMode(X.LINES)):Nt.setMode(X.TRIANGLES);else if(J.isLine){let tn=te.linewidth;tn===void 0&&(tn=1),Le.setLineWidth(tn*Wt()),J.isLineSegments?Nt.setMode(X.LINES):J.isLineLoop?Nt.setMode(X.LINE_LOOP):Nt.setMode(X.LINE_STRIP)}else J.isPoints?Nt.setMode(X.POINTS):J.isSprite&&Nt.setMode(X.TRIANGLES);if(J.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Nt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const tn=J._multiDrawStarts,$e=J._multiDrawCounts,dn=J._multiDrawCount,Je=Be?A.get(Be).bytesPerElement:1,Ni=Ve.get(te).currentProgram.getUniforms();for(let fn=0;fn<dn;fn++)Ni.setValue(X,"_gl_DrawID",fn),Nt.render(tn[fn]/Je,$e[fn])}else if(J.isInstancedMesh)Nt.renderInstances(qe,Yt,J.count);else if(ae.isInstancedBufferGeometry){const tn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,$e=Math.min(ae.instanceCount,tn);Nt.renderInstances(qe,Yt,$e)}else Nt.render(qe,Yt)};function ds(R,H,ae,te){q!==null&&R.isNodeMaterial&&q.setObject(te,R),Ut===!0&&he.setState(R,ae,!1),R.transparent===!0&&R.side===Bi&&R.forceSinglePass===!1?(R.side=zn,R.needsUpdate=!0,Gr(R,H,te),R.side=as,R.needsUpdate=!0,Gr(R,H,te),R.side=Bi):Gr(R,H,te)}this.compile=function(R,H,ae=null){ae===null&&(ae=R),q!==null&&q.renderStart(R,H,ae),D=fe.get(ae),D.init(H),b.push(D),ae.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),R!==ae&&R.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),D.setupLights(),q!==null&&q.updateLights(D.state.lightsArray),Bt=this.localClippingEnabled,Ut=he.init(this.clippingPlanes,Bt),Ut===!0&&he.setGlobalState(this.clippingPlanes,H),q!==null&&Ae.render(D.state.shadowsArray,ae,H);const te=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Fe=J.material;if(Fe)if(Array.isArray(Fe))for(let je=0;je<Fe.length;je++){const Ie=Fe[je];ds(Ie,ae,H,J),te.add(Ie)}else ds(Fe,ae,H,J),te.add(Fe)}),D=b.pop(),q!==null&&q.renderEnd(),te},this.compileAsync=function(R,H,ae=null){const te=this.compile(R,H,ae);return new Promise(J=>{function Fe(){if(te.forEach(function(je){const Be=Ve.get(je).currentProgram;(Be===void 0||Be.isReady())&&te.delete(je)}),te.size===0){J(R);return}setTimeout(Fe,10)}At.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let aa=null;function oc(R){aa&&aa(R)}function co(){Ci.stop()}function Ri(){Ci.start()}const Ci=new zg;Ci.setAnimationLoop(oc),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(R){aa=R,ve.setAnimationLoop(R),R===null?Ci.stop():Ci.start()},ve.addEventListener("sessionstart",co),ve.addEventListener("sessionend",Ri),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;q!==null&&q.renderStart(R,H);const ae=ve.enabled===!0&&ve.isPresenting===!0,te=V!==null&&(Z===null||ae)&&V.begin(k,Z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(H),H=ve.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,H,Z),D=fe.get(R,b.length),D.init(H),D.state.textureUnits=tt.getTextureUnits(),b.push(D),wt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?Ht.setFromArrayCamera(H):lt.setFromProjectionMatrix(wt,Ai,H.reversedDepth),Bt=this.localClippingEnabled,Ut=he.init(this.clippingPlanes,Bt),U=Pe.get(R,E.length),U.init(),E.push(U),this.info.render.frame++,ve.enabled===!0&&ve.isPresenting===!0){const je=k.xr.getDepthSensingMesh();je!==null&&fs(je,H,-1/0,k.sortObjects)}fs(R,H,0,k.sortObjects),U.finish(),q!==null&&q.updateLights(D.state.lightsArray),k.sortObjects===!0&&U.sort(Ge,dt),It=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,It&&B.addToRenderList(U,R),this.info.autoReset===!0&&this.info.reset(),Ut===!0&&he.beginShadows();const J=D.state.shadowsArray;if(Ae.render(J,R,H),Ut===!0&&he.endShadows(),(te&&V.hasRenderPass())===!1){const je=U.opaque,Ie=U.transmissive;if(D.setupLights(),H.isArrayCamera){const Be=H.cameras;if(Ie.length>0)for(let Ye=0,st=Be.length;Ye<st;Ye++){const ut=Be[Ye];oa(je,Ie,R,ut)}It&&B.render(R);for(let Ye=0,st=Be.length;Ye<st;Ye++){const ut=Be[Ye];uo(U,R,ut,ut.viewport)}}else Ie.length>0&&oa(je,Ie,R,H),It&&B.render(R),uo(U,R,H)}Z!==null&&K===0&&(tt.updateMultisampleRenderTarget(Z),tt.updateRenderTargetMipmap(Z)),te&&V.end(k),R.isScene===!0&&R.onAfterRender(k,R,H),me.resetDefaultState(),G=-1,$=null,b.pop(),b.length>0?(D=b[b.length-1],tt.setTextureUnits(D.state.textureUnits),Ut===!0&&he.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,E.pop(),E.length>0?U=E[E.length-1]:U=null,q!==null&&q.renderEnd()};function fs(R,H,ae,te){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){const je=H.isArrayCamera?Ht:lt;if(!R.frustumCulled||R.intersectsFrustum(je)){te&&Ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(wt);const Ie=Ee.update(R),Be=R.material;Be.visible&&U.push(R,Ie,Be,ae,Ct.z,null,H)}}else if(R.isMesh||R.isLine||R.isPoints){const je=H.isArrayCamera?Ht:lt;if(!R.frustumCulled||R.intersectsFrustum(je)){const Ie=Ee.update(R),Be=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ct.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ct.copy(Ie.boundingSphere.center)),Ct.applyMatrix4(R.matrixWorld).applyMatrix4(wt)),Array.isArray(Be)){const Ye=Ie.groups;for(let st=0,ut=Ye.length;st<ut;st++){const qe=Ye[st],pt=Be[qe.materialIndex];pt&&pt.visible&&U.push(R,Ie,pt,ae,Ct.z,qe,H)}}else Be.visible&&U.push(R,Ie,Be,ae,Ct.z,null,H)}}}const Fe=R.children;for(let je=0,Ie=Fe.length;je<Ie;je++)fs(Fe[je],H,ae,te)}function uo(R,H,ae,te){const{opaque:J,transmissive:Fe,transparent:je}=R;D.setupLightsView(ae),Ut===!0&&he.setGlobalState(k.clippingPlanes,ae),te&&Le.viewport(I.copy(te)),J.length>0&&zr(J,H,ae),Fe.length>0&&zr(Fe,H,ae),je.length>0&&zr(je,H,ae),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function oa(R,H,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[te.id]===void 0){const qe=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[te.id]=new Vi(1,1,{generateMipmaps:!0,type:qe?ji:ni,minFilter:Ur,samples:Math.max(4,xt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Fe=D.state.transmissionRenderTarget[te.id],je=te.viewport||I;Fe.setSize(je.z*k.transmissionResolutionScale,je.w*k.transmissionResolutionScale);const Ie=k.getRenderTarget(),Be=k.getActiveCubeFace(),Ye=k.getActiveMipmapLevel();k.setRenderTarget(Fe),k.getClearColor(ne),xe=k.getClearAlpha(),xe<1&&k.setClearColor(16777215,.5),k.clear(),It&&B.render(ae);const st=k.toneMapping;k.toneMapping=or;const ut=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),D.setupLightsView(te),Ut===!0&&he.setGlobalState(k.clippingPlanes,te),zr(R,ae,te),tt.updateMultisampleRenderTarget(Fe),tt.updateRenderTargetMipmap(Fe),At.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let pt=0,Yt=H.length;pt<Yt;pt++){const Lt=H[pt],{object:Nt,geometry:tn,material:$e,group:dn}=Lt;if($e.side===Bi&&Nt.layers.test(te.layers)){const Je=$e.side;$e.side=zn,$e.needsUpdate=!0,la(Nt,ae,te,tn,$e,dn),$e.side=Je,$e.needsUpdate=!0,qe=!0}}qe===!0&&(tt.updateMultisampleRenderTarget(Fe),tt.updateRenderTargetMipmap(Fe))}k.setRenderTarget(Ie,Be,Ye),k.setClearColor(ne,xe),ut!==void 0&&(te.viewport=ut),k.toneMapping=st}function zr(R,H,ae){const te=H.isScene===!0?H.overrideMaterial:null;for(let J=0,Fe=R.length;J<Fe;J++){const je=R[J],{object:Ie,geometry:Be,group:Ye}=je;let st=je.material;st.allowOverride===!0&&te!==null&&(st=te),Ie.layers.test(ae.layers)&&la(Ie,H,ae,Be,st,Ye)}}function la(R,H,ae,te,J,Fe){q!==null&&J.isNodeMaterial&&q.setObject(R,J),R.onBeforeRender(k,H,ae,te,J,Fe),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(k,H,ae,te,R,Fe),J.transparent===!0&&J.side===Bi&&J.forceSinglePass===!1?(J.side=zn,J.needsUpdate=!0,k.renderBufferDirect(ae,H,te,J,R,Fe),J.side=as,J.needsUpdate=!0,k.renderBufferDirect(ae,H,te,J,R,Fe),J.side=Bi):k.renderBufferDirect(ae,H,te,J,R,Fe),R.onAfterRender(k,H,ae,te,J,Fe)}function ca(R){let H=0;for(const ae of R)ae.texture!==null&&H++;return H}function Gr(R,H,ae){H.isScene!==!0&&(H=Vt);const te=Ve.get(R),J=D.state.lights,Fe=D.state.shadowsArray,je=J.state.version,Ie=ge.getParameters(R,J.state,Fe,H,ae,D.state.lightProbeGridArray),Be=ge.getProgramCacheKey(Ie);let Ye=te.programs;te.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,te.fog=H.fog;const st=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;te.envMap=L.get(R.envMap||te.environment,st),te.envMapRotation=te.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Ye===void 0&&(R.addEventListener("dispose",St),Ye=new Map,te.programs=Ye,te.programVariants=new Map);let ut=Ye.get(Be);if(ut!==void 0){if(te.currentProgram===ut&&te.lightsStateVersion===je)return fo(R,Ie),ut}else Ie.uniforms=ge.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,ae,Ie),R.onBeforeCompile(Ie,k),ut=ge.acquireProgram(Ie,Be),Ye.set(Be,ut),te.uniforms=Ie.uniforms;const qe=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=he.uniform),fo(R,Ie),te.needsLights=hs(R),te.lightsStateVersion=je,te.needsLights&&(qe.ambientLightColor.value=J.state.ambient,qe.lightProbe.value=J.state.probe,qe.sunLights.value=J.state.sun,qe.sunLightShadows.value=J.state.sunShadow,qe.directionalLights.value=J.state.directional,qe.directionalLightShadows.value=J.state.directionalShadow,qe.spotLights.value=J.state.spot,qe.spotLightShadows.value=J.state.spotShadow,qe.rectAreaLights.value=J.state.rectArea,qe.ltc_1.value=J.state.rectAreaLTC1,qe.ltc_2.value=J.state.rectAreaLTC2,qe.pointLights.value=J.state.point,qe.pointLightShadows.value=J.state.pointShadow,qe.hemisphereLights.value=J.state.hemi,qe.sunShadowMatrix.value=J.state.sunShadowMatrix,qe.sunShadowCascade.value=J.state.sunShadowCascade,qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qe.spotLightMatrix.value=J.state.spotLightMatrix,qe.spotLightMap.value=J.state.spotLightMap,qe.pointShadowMatrix.value=J.state.pointShadowMatrix),te.numLightProbeGrids=ca(D.state.lightProbeGridArray),te.currentProgram=ut,te.uniformsList=null,ut}function lc(R,H,ae,te,J){const Fe=Ve.get(R),je=Fe.currentProgram.id+","+te+","+J;let Ie=Fe.programVariants.get(je);return Ie===void 0?(Ie=Gr(R,H,ae),Fe.programVariants.set(je,Ie)):(Fe.currentProgram=Ie,Fe.uniformsList=null,Fe.outputColorSpace=te,Fe.toneMapping=J),Ie}function Xt(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=Xl.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function fo(R,H){const ae=Ve.get(R);ae.outputColorSpace=H.outputColorSpace,ae.batching=H.batching,ae.batchingColor=H.batchingColor,ae.instancing=H.instancing,ae.instancingColor=H.instancingColor,ae.instancingMorph=H.instancingMorph,ae.skinning=H.skinning,ae.morphTargets=H.morphTargets,ae.morphNormals=H.morphNormals,ae.morphColors=H.morphColors,ae.morphTargetsCount=H.morphTargetsCount,ae.numClippingPlanes=H.numClippingPlanes,ae.numIntersection=H.numClipIntersection,ae.vertexAlphas=H.vertexAlphas,ae.vertexTangents=H.vertexTangents,ae.toneMapping=H.toneMapping}function ua(R,H,ae,te,J){H.isScene!==!0&&(H=Vt),tt.resetTextureUnits();const Fe=H.fog,je=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?H.environment:null,Ie=Z===null?k.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:yt.workingColorSpace,Be=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ye=L.get(te.envMap||je,Be),st=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ut=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),qe=!!ae.morphAttributes.position,pt=!!ae.morphAttributes.normal,Yt=!!ae.morphAttributes.color;let Lt=or;te.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Lt=k.toneMapping);const Nt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,tn=Nt!==void 0?Nt.length:0,$e=Ve.get(te),dn=D.state.lights;if(Ut===!0&&(Bt===!0||R!==$)){const bt=R===$&&te.id===G;he.setState(te,R,bt)}let Je=!1,Ni=!1;te.version===$e.__version?$e.needsLights&&$e.lightsStateVersion!==dn.state.version||J.isBatchedMesh&&$e.batching===!1||!J.isBatchedMesh&&$e.batching===!0||J.isBatchedMesh&&$e.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&$e.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&$e.instancing===!1||!J.isInstancedMesh&&$e.instancing===!0||J.isSkinnedMesh&&$e.skinning===!1||!J.isSkinnedMesh&&$e.skinning===!0||J.isInstancedMesh&&$e.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&$e.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&$e.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&$e.instancingMorph===!1&&J.morphTexture!==null||$e.envMap!==Ye||te.fog===!0&&$e.fog!==Fe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==he.numPlanes||$e.numIntersection!==he.numIntersection)||$e.vertexAlphas!==st||$e.vertexTangents!==ut||$e.morphTargets!==qe||$e.morphNormals!==pt||$e.morphColors!==Yt||$e.morphTargetsCount!==tn||$e.numLightProbeGrids!==ca(D.state.lightProbeGridArray)?Je=!0:($e.outputColorSpace!==Ie||$e.toneMapping!==Lt)&&(Ni=!0):(Je=!0,$e.__version=te.version);let fn=$e.currentProgram;(Je===!0||Ni===!0)&&(fn=Ni===!0?lc(te,H,J,Ie,Lt):Gr(te,H,J),q&&te.isNodeMaterial&&q.onUpdateProgram(te,fn,$e));let cr=!1,pi=!1,Pi=!1;const _t=fn.getUniforms(),an=$e.uniforms;if(Le.useProgram(fn.program)&&(cr=!0,pi=!0,Pi=!0),te.id!==G&&(G=te.id,pi=!0),cr||$!==R){Le.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),_t.setValue(X,"projectionMatrix",R.projectionMatrix),_t.setValue(X,"viewMatrix",R.matrixWorldInverse);const Ft=_t.map.cameraPosition;Ft!==void 0&&Ft.setValue(X,sn.setFromMatrixPosition(R.matrixWorld)),xt.logarithmicDepthBuffer&&_t.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&_t.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),$!==R&&($=R,pi=!0,Pi=!0)}if($e.needsLights&&(dn.state.sunShadowMap.length>0&&_t.setValue(X,"sunShadowMap",dn.state.sunShadowMap,tt),dn.state.directionalShadowMap.length>0&&_t.setValue(X,"directionalShadowMap",dn.state.directionalShadowMap,tt),dn.state.spotShadowMap.length>0&&_t.setValue(X,"spotShadowMap",dn.state.spotShadowMap,tt),dn.state.pointShadowMap.length>0&&_t.setValue(X,"pointShadowMap",dn.state.pointShadowMap,tt)),J.isSkinnedMesh){_t.setOptional(X,J,"bindMatrix"),_t.setOptional(X,J,"bindMatrixInverse");const bt=J.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),_t.setValue(X,"boneTexture",bt.boneTexture,tt))}J.isBatchedMesh&&(_t.setOptional(X,J,"batchingTexture"),_t.setValue(X,"batchingTexture",J._matricesTexture,tt),_t.setOptional(X,J,"batchingIdTexture"),_t.setValue(X,"batchingIdTexture",J._indirectTexture,tt),_t.setOptional(X,J,"batchingColorTexture"),J._colorsTexture!==null&&_t.setValue(X,"batchingColorTexture",J._colorsTexture,tt));const Rn=ae.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&pe.update(J,ae,fn),(pi||$e.receiveShadow!==J.receiveShadow)&&($e.receiveShadow=J.receiveShadow,_t.setValue(X,"receiveShadow",J.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&H.environment!==null&&(an.envMapIntensity.value=H.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=yw()),pi){if(_t.setValue(X,"toneMappingExposure",k.toneMappingExposure),$e.needsLights&&ho(an,Pi),Fe&&te.fog===!0&&be.refreshFogUniforms(an,Fe),be.refreshMaterialUniforms(an,te,_e,Ue,D.state.transmissionRenderTarget[R.id]),$e.needsLights&&$e.numLightProbeGrids>0){const bt=P;let Ft=0;for(const xn of D.state.lightProbeGridArray)xn.texture!==null&&(bt.textures[Ft]=xn.texture,bt.min[Ft]=xn.boundingBox.min,bt.max[Ft]=xn.boundingBox.max,bt.resolution[Ft]=xn.resolution,Ft++);for(const xn in bt)bt[xn].length=Ft;an.probesSH.value=bt.textures,an.probesMin.value=bt.min,an.probesMax.value=bt.max,an.probesResolution.value=bt.resolution}Xl.upload(X,Xt($e),an,tt)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Xl.upload(X,Xt($e),an,tt),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&_t.setValue(X,"center",J.center),_t.setValue(X,"modelViewMatrix",J.modelViewMatrix),_t.setValue(X,"normalMatrix",J.normalMatrix),_t.setValue(X,"modelMatrix",J.matrixWorld),te.uniformsGroups!==void 0){const bt=te.uniformsGroups;for(let Ft=0,xn=bt.length;Ft<xn;Ft++){const ur=bt[Ft];De.update(ur,fn),De.bind(ur,fn)}}return fn}function ho(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.sunLights.needsUpdate=H,R.sunLightShadows.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function hs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,H,ae){const te=Ve.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=H,Ve.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){const ae=Ve.get(R);ae.__webglFramebuffer=H,ae.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,ae=0){Z=R,ue=H,K=ae;let te=null,J=!1,Fe=!1;if(R){const Ie=Ve.get(R);if(Ie.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(X.FRAMEBUFFER,Ie.__webglFramebuffer),I.copy(R.viewport),Q.copy(R.scissor),Re=R.scissorTest,Le.viewport(I),Le.scissor(Q),Le.setScissorTest(Re),G=-1;return}else if(Ie.__webglFramebuffer===void 0)tt.setupRenderTarget(R);else if(Ie.__hasExternalTextures)tt.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const st=R.depthTexture;if(Ie.__boundDepthTexture!==st){if(st!==null&&Ve.has(st)&&(R.width!==st.image.width||R.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(R)}}const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Fe=!0);const Ye=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[H])?te=Ye[H][ae]:te=Ye[H],J=!0):R.samples>0&&tt.useMultisampledRTT(R)===!1?te=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?te=Ye[ae]:te=Ye,I.copy(R.viewport),Q.copy(R.scissor),Re=R.scissorTest}else I.copy(et).multiplyScalar(_e).floor(),Q.copy(gt).multiplyScalar(_e).floor(),Re=ht;if(ae!==0&&(te=se),Le.bindFramebuffer(X.FRAMEBUFFER,te)&&Le.drawBuffers(R,te),Le.viewport(I),Le.scissor(Q),Le.setScissorTest(Re),J){const Ie=Ve.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ie.__webglTexture,ae)}else if(Fe){const Ie=H;for(let Be=0;Be<R.textures.length;Be++){const Ye=Ve.get(R.textures[Be]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Be,Ye.__webglTexture,ae,Ie)}}else if(R!==null&&ae!==0){const Ie=Ve.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ie.__webglTexture,ae)}G=-1};function po(R){const H=Ve.get(R);return(H.__readFormat!==R.format||H.__readType!==R.type)&&(H.__readFormat=R.format,H.__readType=R.type,H.__formatReadable=xt.textureFormatReadable(R.format),H.__typeReadable=xt.textureTypeReadable(R.type)),H}this.readRenderTargetPixels=function(R,H,ae,te,J,Fe,je,Ie=0){if(!(R&&R.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&(Be=Be[je],Array.isArray(Be)&&(Be=Be[0])),Be){Le.bindFramebuffer(X.FRAMEBUFFER,Be);try{const Ye=R.textures[Ie],st=Ye.format,ut=Ye.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ie);const qe=po(Ye);if(qe.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-te&&ae>=0&&ae<=R.height-J&&X.readPixels(H,ae,te,J,Te.convert(st),Te.convert(ut),Fe)}finally{const Ye=Z!==null?Ve.get(Z).__webglFramebuffer:null;Le.bindFramebuffer(X.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,H,ae,te,J,Fe,je,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&(Be=Be[je],Array.isArray(Be)&&(Be=Be[0])),Be)if(H>=0&&H<=R.width-te&&ae>=0&&ae<=R.height-J){Le.bindFramebuffer(X.FRAMEBUFFER,Be);const Ye=R.textures[Ie],st=Ye.format,ut=Ye.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ie);const qe=po(Ye);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,pt),X.bufferData(X.PIXEL_PACK_BUFFER,Fe.byteLength,X.STREAM_READ),X.readPixels(H,ae,te,J,Te.convert(st),Te.convert(ut),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const Yt=Z!==null?Ve.get(Z).__webglFramebuffer:null;Le.bindFramebuffer(X.FRAMEBUFFER,Yt);const Lt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await N_(X,Lt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,pt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Fe),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(pt),X.deleteSync(Lt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,ae=0){const te=Math.pow(2,-ae),J=Math.floor(R.image.width*te),Fe=Math.floor(R.image.height*te),je=H!==null?H.x:0,Ie=H!==null?H.y:0;tt.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ae,0,0,je,Ie,J,Fe),Le.unbindTexture()},this.copyTextureToTexture=function(R,H,ae=null,te=null,J=0,Fe=0){let je,Ie,Be,Ye,st,ut,qe,pt,Yt;const Lt=R.isCompressedTexture?R.mipmaps[Fe]:R.image;if(ae!==null)je=ae.max.x-ae.min.x,Ie=ae.max.y-ae.min.y,Be=ae.isBox3?ae.max.z-ae.min.z:1,Ye=ae.min.x,st=ae.min.y,ut=ae.isBox3?ae.min.z:0;else{const _t=Math.pow(2,-J);je=Math.floor(Lt.width*_t),Ie=Math.floor(Lt.height*_t),R.isDataArrayTexture?Be=Lt.depth:R.isData3DTexture?Be=Math.floor(Lt.depth*_t):Be=1,Ye=0,st=0,ut=0}te!==null?(qe=te.x,pt=te.y,Yt=te.z):(qe=0,pt=0,Yt=0);const Nt=Te.convert(H.format),tn=Te.convert(H.type);let $e;H.isData3DTexture?(tt.setTexture3D(H,0),$e=X.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(tt.setTexture2DArray(H,0),$e=X.TEXTURE_2D_ARRAY):(tt.setTexture2D(H,0),$e=X.TEXTURE_2D),Le.activeTexture(X.TEXTURE0),Le.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,H.flipY),Le.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Le.pixelStorei(X.UNPACK_ALIGNMENT,H.unpackAlignment);const dn=Le.getParameter(X.UNPACK_ROW_LENGTH),Je=Le.getParameter(X.UNPACK_IMAGE_HEIGHT),Ni=Le.getParameter(X.UNPACK_SKIP_PIXELS),fn=Le.getParameter(X.UNPACK_SKIP_ROWS),cr=Le.getParameter(X.UNPACK_SKIP_IMAGES);Le.pixelStorei(X.UNPACK_ROW_LENGTH,Lt.width),Le.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Lt.height),Le.pixelStorei(X.UNPACK_SKIP_PIXELS,Ye),Le.pixelStorei(X.UNPACK_SKIP_ROWS,st),Le.pixelStorei(X.UNPACK_SKIP_IMAGES,ut);const pi=R.isDataArrayTexture||R.isData3DTexture,Pi=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){const _t=Ve.get(R),an=Ve.get(H),Rn=Ve.get(_t.__renderTarget),bt=Ve.get(an.__renderTarget);Le.bindFramebuffer(X.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Le.bindFramebuffer(X.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ft=0;Ft<Be;Ft++)pi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,J,ut+Ft),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ve.get(H).__webglTexture,Fe,Yt+Ft)),X.blitFramebuffer(Ye,st,Ye+je,st+Ie,qe,pt,qe+je,pt+Ie,X.DEPTH_BUFFER_BIT,X.NEAREST);Le.bindFramebuffer(X.READ_FRAMEBUFFER,null),Le.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||Ve.has(R)){const _t=Ve.get(R),an=Ve.get(H);Le.bindFramebuffer(X.READ_FRAMEBUFFER,z),Le.bindFramebuffer(X.DRAW_FRAMEBUFFER,re);for(let Rn=0;Rn<Be;Rn++)pi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,_t.__webglTexture,J,ut+Rn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,_t.__webglTexture,J),Pi?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,an.__webglTexture,Fe,Yt+Rn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,an.__webglTexture,Fe),J!==0?X.blitFramebuffer(Ye,st,Ye+je,st+Ie,qe,pt,qe+je,pt+Ie,X.COLOR_BUFFER_BIT,X.NEAREST):Pi?X.copyTexSubImage3D($e,Fe,qe,pt,Yt+Rn,Ye,st,je,Ie):X.copyTexSubImage2D($e,Fe,qe,pt,Ye,st,je,Ie);Le.bindFramebuffer(X.READ_FRAMEBUFFER,null),Le.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pi?R.isDataTexture||R.isData3DTexture?X.texSubImage3D($e,Fe,qe,pt,Yt,je,Ie,Be,Nt,tn,Lt.data):H.isCompressedArrayTexture?X.compressedTexSubImage3D($e,Fe,qe,pt,Yt,je,Ie,Be,Nt,Lt.data):X.texSubImage3D($e,Fe,qe,pt,Yt,je,Ie,Be,Nt,tn,Lt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Fe,qe,pt,je,Ie,Nt,tn,Lt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Fe,qe,pt,Lt.width,Lt.height,Nt,Lt.data):X.texSubImage2D(X.TEXTURE_2D,Fe,qe,pt,je,Ie,Nt,tn,Lt);Le.pixelStorei(X.UNPACK_ROW_LENGTH,dn),Le.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Je),Le.pixelStorei(X.UNPACK_SKIP_PIXELS,Ni),Le.pixelStorei(X.UNPACK_SKIP_ROWS,fn),Le.pixelStorei(X.UNPACK_SKIP_IMAGES,cr),Fe===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&X.generateMipmap($e),Le.unbindTexture()},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&tt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?tt.setTextureCube(R,0):R.isData3DTexture?tt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?tt.setTexture2DArray(R,0):tt.setTexture2D(R,0),Le.unbindTexture()},this.resetState=function(){ue=0,K=0,Z=null,Le.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}function Ew({onComplete:s}){const e=$t.useRef(null),[t,r]=$t.useState("ИНИЦИАЛИЗАЦИЯ ЗАПУСКА"),[o,l]=$t.useState("Нарынский филиал НДИТА // Лаборатория «Алтын Түйүн»"),[u,f]=$t.useState(0);$t.useEffect(()=>{let m=!1;const y=e.current;if(!y)return;const S=new av;S.fog=new yf(329745,.0015);const _=new hi(55,window.innerWidth/window.innerHeight,.1,2500);_.position.set(0,5,22);const M=new Mw({antialias:!0,alpha:!1,powerPreference:"high-performance"});M.setSize(window.innerWidth,window.innerHeight),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.toneMapping=df,M.toneMappingExposure=1.2,y.appendChild(M.domElement);const w=new bv(3359846,1.2);S.add(w);const C=new Av(16772829,3);C.position.set(100,150,100),S.add(C);const g=new Lm(61695,4,80);g.position.set(0,2,5),S.add(g);const v=2e3,N=new ii,F=new Float32Array(v*3),P=new Float32Array(v*3);for(let me=0;me<v;me++){const De=800+Math.random()*400,ke=2*Math.PI*Math.random(),ve=Math.acos(2*Math.random()-1);F[me*3]=De*Math.sin(ve)*Math.cos(ke),F[me*3+1]=De*Math.sin(ve)*Math.sin(ke),F[me*3+2]=De*Math.cos(ve);const We=Math.random()>.7;P[me*3]=We?.3:.9,P[me*3+1]=We?.9:.95,P[me*3+2]=1}N.setAttribute("position",new bi(F,3)),N.setAttribute("color",new bi(P,3));const U=new sf({size:2.2,vertexColors:!0,transparent:!0,opacity:.9}),D=new Tm(N,U);S.add(D);const E=new Or,b=24,V=new wi({color:1121067,roughness:.85,metalness:.2,flatShading:!0}),k=new wi({color:8956620,roughness:.6,flatShading:!0});for(let me=0;me<b;me++){const De=40+Math.random()*60,ke=25+Math.random()*35,ve=new Ql(ke,De,5),We=new rn(ve,Math.random()>.4?V:k),nt=me/b*Math.PI*2,Oe=90+Math.random()*80;We.position.set(Math.cos(nt)*Oe,De/2-20,Math.sin(nt)*Oe),E.add(We)}const j=new ss(14,18,2,8),q=new wi({color:1712947,roughness:.7}),se=new rn(j,q);se.position.set(0,-1,0),E.add(se);const z=new ls(2,28,2),re=new wi({color:3359846,wireframe:!0}),ue=new rn(z,re);ue.position.set(6,12,-4),E.add(ue),S.add(E);const Z=(()=>{const me=document.createElement("canvas");me.width=512,me.height=128;const De=me.getContext("2d");De.fillStyle="#0a101d",De.fillRect(0,0,512,128),De.strokeStyle="#FFD700",De.lineWidth=6,De.strokeRect(8,8,496,112),De.fillStyle="#FFD700",De.font="bold 38px sans-serif",De.textAlign="center",De.fillText("★ АЛТЫН ТҮЙҮН ★",256,52),De.fillStyle="#00F0FF",De.font="bold 24px monospace",De.fillText("НАРЫН // НДИТА • NASA 2026",256,95);const ke=new gv(me);return ke.needsUpdate=!0,ke})(),G=new Or;G.position.set(0,3,0);const $=new ss(1.6,1.8,6.5,8),I=new wi({color:2241348,metalness:.8,roughness:.25}),Q=new rn($,I);G.add(Q);const Re=new Ql(1.6,2.5,8),ne=new wi({color:61695,metalness:.9,roughness:.1}),xe=new rn(Re,ne);xe.position.y=4.5,G.add(xe);const ye=new oo(3.5,1),Ue=new jl({map:Z,side:Bi}),_e=new rn(ye,Ue);_e.position.set(0,.5,1.85),G.add(_e);const Ge=new rn(ye,Ue);Ge.position.set(0,.5,-1.85),Ge.rotation.y=Math.PI,G.add(Ge);const dt=new ls(6.5,1.8,.1),et=new wi({color:664896,roughness:.15,metalness:.9,emissive:8772}),gt=new rn(dt,et);gt.position.set(5.2,.5,0),G.add(gt);const ht=new rn(dt,et);ht.position.set(-5.2,.5,0),G.add(ht);const lt=new ss(1.2,.6,1.5,8),Ht=new wi({color:1118481,metalness:.9}),Ut=new rn(lt,Ht);Ut.position.y=-3.8,G.add(Ut);const Bt=180,wt=new ii,sn=new Float32Array(Bt*3),Ct=new Float32Array(Bt*3);for(let me=0;me<Bt;me++)sn[me*3]=(Math.random()-.5)*.8,sn[me*3+1]=-4-Math.random()*5,sn[me*3+2]=(Math.random()-.5)*.8,Ct[me*3]=1,Ct[me*3+1]=.5+Math.random()*.4,Ct[me*3+2]=.1;wt.setAttribute("position",new bi(sn,3)),wt.setAttribute("color",new bi(Ct,3));const Vt=new sf({size:1.2,vertexColors:!0,transparent:!0,opacity:.9}),It=new Tm(wt,Vt);G.add(It),S.add(G);const Wt=new Or;Wt.position.set(0,-320,-180);const X=new ec(140,32,32),ln=new wi({color:1127253,roughness:.7,metalness:.1}),At=new rn(X,ln);Wt.add(At);const xt=new ec(143,32,32),Le=new jl({color:61695,transparent:!0,opacity:.12,side:zn}),jt=new rn(xt,Le);Wt.add(jt),S.add(Wt);const Ve=new Or;Ve.position.set(0,180,-90);const tt=new tc(18,2.5,12,32),L=new wi({color:3885666,metalness:.7,roughness:.3}),A=new rn(tt,L);A.rotation.x=Math.PI/2,Ve.add(A);const ee=new ss(4.5,4.5,26,12),Ee=new wi({color:1976635,metalness:.8,roughness:.2}),ge=new rn(ee,Ee);Ve.add(ge);const be=new tc(3.2,.4,8,16),Pe=new jl({color:58998}),fe=new rn(be,Pe);fe.position.y=-13,fe.rotation.x=Math.PI/2,Ve.add(fe);const he=new Lm(58998,3,40);he.position.set(0,-13,0),Ve.add(he),S.add(Ve);const Ae=13.5;let B=performance.now(),pe=!1;kt.startLaunchRumble();const de=()=>{if(m)return;requestAnimationFrame(de);const me=(performance.now()-B)/1e3;f(Math.min(100,me/Ae*100)),D.rotation.y+=3e-4,A.rotation.z+=.004;const De=wt.attributes.position.array;for(let ke=0;ke<Bt;ke++)De[ke*3+1]-=.6,De[ke*3+1]<-12&&(De[ke*3+1]=-4);if(wt.attributes.position.needsUpdate=!0,me<3.5){const ke=me/3.5;r("ФАЗА 1: СТАРТ ИЗ ГОРОДА НАРЫН"),l("Тянь-Шань • Лаборатория «Алтын Түйүн» НДИТА // Взлет"),G.position.y=3+ke*ke*24,_.position.set(0,5+ke*14,22-ke*6),_.lookAt(G.position.x,G.position.y+1,G.position.z)}else if(me<7.5){const ke=(me-3.5)/4;r("ФАЗА 2: ВЫХОД НА ОРБИТУ ЗЕМЛИ"),l("Космический аппарат «Алтын Түйүн» • Раскрытие солнечных батарей"),kt.stopLaunchRumble(),E.position.y=-ke*120,E.visible=ke<.7,G.position.set(ke*12,27+ke*90,-ke*40),G.rotation.x=ke*.45,G.rotation.z=Math.sin(ke*Math.PI)*.2,_.position.set(G.position.x-14*Math.cos(ke*2),G.position.y+4,G.position.z+18*Math.sin(ke*2)),_.lookAt(G.position)}else if(me<11.5){const ke=(me-7.5)/4;r("ФАЗА 3: СБЛИЖЕНИЕ И СТЫКОВКА"),l("Орбитальная станция Artemis Gateway // Захват шлюзового узла");const ve=Ve.position.x,We=Ve.position.y-14,nt=Ve.position.z;G.position.x=Yu.lerp(12,ve,ke),G.position.y=Yu.lerp(117,We,ke),G.position.z=Yu.lerp(-40,nt,ke),G.rotation.set(0,0,0),It.visible=ke<.3,ke>.85&&!pe&&(pe=!0,kt.playDockingClamp()),_.position.set(G.position.x,G.position.y-6,G.position.z+16-ke*6),_.lookAt(Ve.position)}else r("ФАЗА 4: ЭКИПАЖ ВСТУПАЕТ НА БОРТ"),l("Системы базы активированы // Переход в ЦУП NASA"),_.position.y+=.8,_.position.z-=.6,me>=Ae&&h();M.render(S,_)};requestAnimationFrame(de);const Ce=()=>{_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),M.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",Ce);const Te=me=>{me.key==="Escape"&&h()};return window.addEventListener("keydown",Te),()=>{m=!0,kt.stopLaunchRumble(),window.removeEventListener("resize",Ce),window.removeEventListener("keydown",Te),M.domElement&&M.domElement.parentNode&&M.domElement.parentNode.removeChild(M.domElement),M.dispose()}},[]);const h=()=>{kt.stopLaunchRumble(),kt.playClick(),s()};return x.jsxs("div",{className:"fixed inset-0 z-50 bg-black select-none overflow-hidden font-sans",children:[x.jsx("div",{ref:e,className:"absolute inset-0 w-full h-full"}),x.jsxs("div",{className:"absolute inset-0 pointer-events-none p-6 md:p-8 flex flex-col justify-between scanlines",children:[x.jsxs("div",{className:"flex justify-between items-start",children:[x.jsxs("div",{className:"hud-panel p-3.5 rounded-lg border border-nasa-border/80 bg-nasa-dark/80 backdrop-blur space-y-1 pointer-events-auto",children:[x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-nasa-cyan animate-pulse"}),x.jsx("span",{className:"font-mono text-xs font-bold text-nasa-cyan tracking-widest uppercase",children:"НАРЫН // АЛТЫН ТҮЙҮН • НДИТА"})]}),x.jsx("div",{className:"text-xs text-slate-300 font-mono",children:"Космическая миссия NASA Space Apps 2026"})]}),x.jsxs("button",{onClick:h,className:"pointer-events-auto px-4 py-2 rounded-lg bg-nasa-dark/90 hover:bg-nasa-card border border-nasa-cyan text-nasa-cyan hover:text-white font-mono text-xs font-bold transition-all shadow-hud-cyan flex items-center space-x-2 group",children:[x.jsx("span",{children:"ПРОПУСТИТЬ ЗАСТАВКУ"}),x.jsx("span",{className:"px-1.5 py-0.5 rounded bg-nasa-cyan/20 text-[10px] text-cyan-300 group-hover:bg-cyan-400 group-hover:text-black",children:"ESC"})]})]}),x.jsx("div",{className:"flex items-center justify-center pointer-events-none",children:x.jsxs("div",{className:"w-24 h-24 border border-nasa-cyan/30 rounded-full flex items-center justify-center animate-pulse",children:[x.jsx("div",{className:"w-2 h-2 bg-nasa-cyan rounded-full"}),x.jsx("div",{className:"absolute w-32 h-px bg-nasa-cyan/20"}),x.jsx("div",{className:"absolute h-32 w-px bg-nasa-cyan/20"})]})}),x.jsxs("div",{className:"flex flex-col md:flex-row items-end md:items-center justify-between gap-4",children:[x.jsxs("div",{className:"hud-panel p-4 rounded-xl border border-nasa-cyan/60 bg-nasa-dark/90 backdrop-blur max-w-lg space-y-1",children:[x.jsxs("div",{className:"font-mono text-xs font-extrabold text-nasa-cyan uppercase tracking-wider flex items-center space-x-2",children:[x.jsx("span",{className:"w-2 h-2 rounded-full bg-nasa-green animate-ping"}),x.jsx("span",{children:t})]}),x.jsx("p",{className:"text-sm font-semibold text-white",children:o})]}),x.jsxs("div",{className:"w-full md:w-64 space-y-1 text-right font-mono text-[10px] text-nasa-muted",children:[x.jsxs("div",{className:"flex justify-between",children:[x.jsx("span",{children:"СИНХРОНИЗАЦИЯ ТЕЛЕМЕТРИИ"}),x.jsxs("span",{className:"text-nasa-cyan font-bold",children:[Math.round(u),"%"]})]}),x.jsx("div",{className:"w-full h-1.5 bg-slate-800 rounded-full overflow-hidden border border-nasa-border/40",children:x.jsx("div",{className:"h-full bg-gradient-to-r from-nasa-cyan to-nasa-green transition-all duration-150",style:{width:`${u}%`}})})]})]})]})]})}const ww=JSON.parse('[{"id":"moon_solar_flare","title":"Корональный выброс массы (CME)","description":"Спутники мониторинга космической погоды зафиксировали мощную вспышку X-класса на Солнце. Поток высокоэнергетических протонов достигнет кратера Шеклтон через 40 минут. Защитное магнитное поле Земли на орбите Луны отсутствует.","nasaScienceFact":"На Луне нет собственной магнитосферы и атмосферы. Во время солнечных протонных событий (SPE) доза радиации на поверхности может превысить 1000 мЗв за считанные часы, вызывая острую лучевую болезнь у астронавтов.","triggerCondition":"random","choices":[{"id":"shelter_regolith","label":"Эвакуация экипажа в подземный реголитовый бункер","description":"Экипаж прекращает научные работы и скрывается под 3-метровым слоем лунного грунта на 24 часа.","effects":{"radiation":5,"food":-5,"energy":-10}},{"id":"max_magnetic_shield","label":"Активация экспериментального магнитного дефлектора на 150%","description":"Создает локальное защитное поле Лоренца, отклоняющее заряженные протоны, но перегружает энергосеть.","effects":{"energy":-45,"radiation":12}},{"id":"water_wall_barrier","label":"Перекачка 100 л технической воды в потолочные экраны купола","description":"Водород в молекулах H2O превосходно поглощает быстрые протоны, но часть воды загрязняется примесями контура.","effects":{"water":-35,"radiation":8}}]},{"id":"moon_micrometeorite","title":"Пробой микрометеоритом купола жилого модуля","description":"Метеороид диаметром 2 мм на скорости 25 км/с пробил внешний кевларовый экран жилого модуля. Датчики фиксируют падение давления воздуха: свист выходящего в вакуум азота и кислорода.","nasaScienceFact":"Скорость микрометеоритов в космосе достигает 20–70 км/с. Даже песчинка обладает кинетической энергией пули и способна мгновенно разгерметизировать тонкостенный алюминиевый корпус.","triggerCondition":"random","choices":[{"id":"fast_seal_foam","label":"Экстренный полимерный герметик и сброс давления в отсеке","description":"Быстрая заплатка ценой потери части атмосферы и временного отключения модуля.","effects":{"oxygen":-12,"energy":-5}},{"id":"eva_regolith_armor","label":"Выход в открытый космос для установки внешней реголитовой бронеплиты","description":"Инженеры рискуют получить дозу радиации, но восстанавливают 100% структурную прочность купола.","effects":{"radiation":18,"health":-8,"payloadPoints":15}}]},{"id":"moon_drill_frozen","title":"Замерзание буровой установки в кратере Шеклтон","description":"В постоянно затененном дне кратера Шеклтон при температуре -240°C заклинило шнек буровой установки для добычи водяного льда. Смазка кристаллизовалась, редуктор перегрелся.","nasaScienceFact":"Постоянно затененные регионы (PSR) на полюсах Луны — одни из самых холодных мест в Солнечной системе (-246°C). Оборудование там подвержено холодной сварке металлов и хрупкому разрушению.","triggerCondition":"random","choices":[{"id":"thermal_lasers","label":"Направить лазерные термонагреватели на буровую вышку","description":"Потребует экстренного выделения 35 кВт·ч энергии из базы.","effects":{"energy":-35,"water":25}},{"id":"abandon_shaft","label":"Законсервировать скважину и перейти на внутренние запасы","description":"Экономит энергию базы, но добыча свежей воды временно приостановлена.","effects":{"water":-40,"payloadPoints":-10}}]},{"id":"moon_electrolysis_fault","title":"Отказ контура электролиза воды и генерации O₂","description":"Каталитическая мембрана блока электролиза воды забилась солями из-за сбоя предфильтрации. Выработка кислорода для дыхания экипажа прекратилась, концентрация CO2 растет.","nasaScienceFact":"На космических станциях электролизер (например, российская система «Электрон» или американская OGS) расщепляет воду 2H2O -> 2H2 + O2. Отказ электролиза вынуждает переходить на одноразовые кислородные шашки.","triggerCondition":"random","choices":[{"id":"burn_perchlorate_candles","label":"Активировать аварийные твердотопливные генераторы O₂","description":"Химические шашки восстановят кислород, но повысят пожароопасность и тепловую нагрузку.","effects":{"oxygen":20,"energy":-15,"health":-5}},{"id":"deep_chemical_flush","label":"Провести кислотную промывку мембран ультразвуком","description":"Требует расхода очищенной воды и отключения лабораторных приборов.","effects":{"water":-30,"energy":-10,"oxygen":10}}]},{"id":"moon_resupply_delay","title":"Аварийная задержка грузового корабля Artemis","description":"Вторая ступень ракеты SLS на орбите Земли испытала аномалию клапана наддува бака. Запуск грузового посадочного модуля отложен минимум на 10 суток. Очередного транша ресурсов не будет.","nasaScienceFact":"Логистическое плечо Земля-Луна составляет всего 3–4 дня полета, но предстартовые задержки ракет могут длиться неделями из-за строгих окон запуска и погоды на мысе Канаверал.","triggerCondition":"random","choices":[{"id":"rationing_protocol","label":"Ввести строгий рацион питания и потребления воды (-30%)","description":"Снижает мораль и самочувствие экипажа, но растягивает резервы.","effects":{"health":-10,"food":20,"water":20}},{"id":"boost_hydroponics","label":"Форсировать фотолампы в гидропонике на круглосуточный цикл","description":"Быстрый рост микрозелени компенсирует еду, но поглотит много энергии.","effects":{"energy":-30,"food":35,"oxygen":5}}]},{"id":"moon_electrostatic_dust","title":"Электростатическое налипание лунного реголита","description":"Солнечный ветер и фотоэлектрический эффект зарядили микрочастицы лунной пыли. Они левитируют над поверхностью и образовали абразивную серую пленку на стеклах солнечных батарей.","nasaScienceFact":"Лунный реголит не обкатан ветром и водой — это осколки минералов и стекла с бритвенно-острыми краями. Он уничтожает подшипники, скафандры и снижает прозрачность фотоэлементов.","triggerCondition":"random","choices":[{"id":"piezoelectric_cleaning","label":"Включить ультразвуковую пьезоэлектрическую виброочистку панелей","description":"Стряхивает пыль электромагнитным импульсом высокой мощности.","effects":{"energy":-25,"payloadPoints":10}},{"id":"manual_eva_sweep","label":"Ручная очистка щетками во время выхода в открытый космос","description":"Инженеры очищают батареи вручную. Риск повреждения скафандров микропылью.","effects":{"health":-6,"radiation":10,"energy":15}}]},{"id":"moon_lunar_night_psych","title":"Психологический барьер длинной лунной ночи","description":"База вошла в полосу тени. Две недели кромешной тьмы и сенсорной депривации привели к бессоннице и апатии у астронавтов. Эффективность работы падает на треть.","nasaScienceFact":"На экваторе и средних широтах Луны день длится 14 земных суток, а ночь — еще 14 суток. Нарушение циркадных ритмов в изоляции — один из главных рисков NASA для ментального здоровья экипажа.","triggerCondition":"random","choices":[{"id":"full_spectrum_light","label":"Включить циркадное полноспектральное освещение жилого блока","description":"Имитация земного рассвета возвращает бодрость, но требует постоянной энергии.","effects":{"energy":-20,"health":12}},{"id":"gourmet_rations","label":"Выдать экипажу праздничный паек сублимированных земных деликатесов","description":"Вкусная еда поднимает боевой дух команды без расхода киловатт.","effects":{"food":-25,"health":8}}]},{"id":"moon_cable_thermal_shock","title":"Термический шок в кабельных коммуникациях","description":"Переход границы терминатора вызвал перепад температуры от +120°C на освещенной стороне до -130°C в тени. Изоляция силовых шин потрескалась, зафиксирована утечка фазы.","nasaScienceFact":"Из-за отсутствия атмосферы лунные породы испытывают перепады более 250 градусов Цельсия за один лунный день. Это вызывает циклическое тепловое расширение и усталость материалов.","triggerCondition":"random","choices":[{"id":"reroute_cryo_bus","label":"Перевести энергосеть на резервную подземную криошину","description":"Шина защищена реголитом, но требует поддержания активного охлаждения.","effects":{"energy":-22,"payloadPoints":10}},{"id":"patch_clamps","label":"Установить термостойкие муфты силами дежурного инженера","description":"Быстрый ремонт оборудования, предотвращающий короткое замыкание.","effects":{"energy":-10,"health":-4}}]}]'),Tw=JSON.parse('[{"id":"mars_dust_storm","title":"Глобальная марсианская пылевая буря","description":"Орбитальный зонд MRO сообщает: колоссальный фронт бурой пыли охватил всё южное полушарие Марса. Небо над кратером Езеро потемнело до цвета охры. Солнечная радиация падает на 80% на ближайшие 4 сола.","nasaScienceFact":"Марсианские бури могут охватывать всю планету целиком на несколько месяцев, как в 2018 году, когда погиб марсоход Opportunity из-за полного обесточивания солнечных батарей.","triggerCondition":"random","choices":[{"id":"brownout_agro","label":"Отключить теплицы и перевести базу в аварийный режим","description":"Потеря части текущего урожая, но сохранение тепла жилого модуля и кислорода.","effects":{"food":-30,"energy":20}},{"id":"overclock_kilopower","label":"Разогнать реактор Kilopower на 125% номинала","description":"Сохраняет освещение и фермы, но повышает износ активной зоны и риск перегрева.","effects":{"energy":35,"health":-6,"payloadPoints":-15}},{"id":"chemical_fuel_cells","label":"Запустить резервные водородно-кислородные топливные элементы","description":"Мгновенная выработка тока ценой расхода драгоценной очищенной воды и кислорода.","effects":{"water":-35,"oxygen":-10,"energy":40}}]},{"id":"mars_moxie_clog","title":"Засорение фильтров установки MOXIE тонкой пылью","description":"Электрохимическая установка генерации O₂ из углекислого газа атмосферы (MOXIE) потеряла производительность. Марсианская микропыль размером меньше 2 микрон забила заборные фильтры.","nasaScienceFact":"Эксперимент NASA MOXIE на марсоходе Perseverance успешно производит до 12 грамм O2 в час из 96%-й углекислотной атмосферы Марса методом электролиза твердых оксидов (SOXE) при 800°C.","triggerCondition":"random","choices":[{"id":"reverse_pulse_flush","label":"Продуть фильтры обратным газовым импульсом высокого давления","description":"Быстрая продувка, расходующая компримированный газ и энергию компрессоров.","effects":{"energy":-20,"oxygen":15}},{"id":"replace_hepa_filters","label":"Установить запасной комплект керамических HEPA-фильтров со склада","description":"Полностью восстанавливает установку, но тратит запасные части из лимита снабжения.","effects":{"payloadPoints":-20,"oxygen":20}}]},{"id":"mars_perchlorate_contamination","title":"Токсичные перхлораты в контуре добычи воды","description":"Химический анализатор зафиксировал превышение концентрации солей хлорной кислоты (перхлоратов) в грунтовом льде. Если не очистить воду, произойдет отравление щитовидной железы экипажа.","nasaScienceFact":"Марсианский реголит содержит от 0.5% до 1% ядовитых перхлоратов (ClO4-). Без многоступенчатой очистки обратным осмосом и каталитического восстановления воду пить смертельно опасно.","triggerCondition":"random","choices":[{"id":"thermal_decomposition","label":"Провести высокотемпературный пиролиз сырой воды при 450°C","description":"Разлагает перхлораты на безвредные хлориды и O2, но требует колоссального расхода энергии.","effects":{"energy":-35,"water":40,"oxygen":5}},{"id":"bio_reactor_microbes","label":"Загрузить культуру биодеградирующих бактерий в очистные баки","description":"Биологическая очистка безопасна, но требует подкормки питательным раствором из запасов еды.","effects":{"food":-20,"water":30}}]},{"id":"mars_comm_delay_psych","title":"22-минутная задержка радиосвязи и синдром изоляции","description":"Земля и Марс находятся на противоположных сторонах Солнца. Задержка сигнала туда и обратно достигла 44 минут. Астронавты чувствуют себя отрезанными от человечества, нарастает тревожность.","nasaScienceFact":"Скорость света накладывает физический предел: радиосигнал идет до Марса от 3 до 22 минут в зависимости от взаимного расположения орбит. Мгновенная консультация с ЦУП невозможна.","triggerCondition":"random","choices":[{"id":"ai_companion_counseling","label":"Запустить режим интерактивной психологической поддержки бортового ИИ","description":"Алгоритмический анализ стресса и адаптивная свето-музыкальная терапия в каютах.","effects":{"energy":-12,"health":10}},{"id":"crew_vr_earth_session","label":"Организовать сеанс виртуального погружения в земные леса и океаны","description":"VR-релаксация снижает кортизол, но отвлекает экипаж от планового техобслуживания.","effects":{"health":15,"payloadPoints":-10}}]},{"id":"mars_kilopower_cooling_anomaly","title":"Сбой натриевых тепловых трубок реактора Kilopower","description":"В контуре охлаждения ядерного реактора KRUSTY упало давление жидкого натрия. Температура активной зоны поднялась на 140°C выше нормы, сработали сигналы радиационной безопасности.","nasaScienceFact":"Проект NASA Kilopower использует уран-235 и пассивные натриевые тепловые трубки, передающие тепло двигателям Стирлинга. Поломка охлаждения чревата тепловым разрушением бериллиевого отражателя.","triggerCondition":"random","choices":[{"id":"scram_reactor","label":"Аварийное глушение (SCRAM) и ввод поглощающих стержней B4C","description":"Спасет реактор от расплавления, но база на 12 часов лишится ядерной генерации.","effects":{"energy":-40,"radiation":0}},{"id":"manual_eva_radiator","label":"Ручная замена клапана радиатора в зоне высокого радиационного фона","description":"Инженеры в свинцовых фартуках устраняют неисправность, получая локальную дозу облучения.","effects":{"radiation":25,"health":-8,"energy":10}}]},{"id":"mars_hydroponic_mold","title":"Вспышка серой гнили в замкнутой гидропонике","description":"Высокая влажность и застой воздуха в стеллажах с карликовой марсианской пшеницей привели к вспышке грибка Botrytis cinerea. Споры угрожают уничтожить 50% посевов.","nasaScienceFact":"В замкнутых биорегенеративных системах СЖО отсутствие естественной микрофлоры может приводить к взрывному размножению патогенных грибков и бактерий на растительных плантациях.","triggerCondition":"random","choices":[{"id":"uv_sterilization","label":"Ударная жесткая ультрафиолетовая стерилизация и озонирование ячеек","description":"Уничтожит споры ценой временного угнетения растений и повышенного расхода тока.","effects":{"energy":-25,"food":15,"oxygen":-5}},{"id":"quarantine_burn","label":"Изолировать и сжечь пораженные стеллажи в плазменном утилизаторе","description":"Предотвратит распространение инфекции, но уничтожит треть текущей биомассы.","effects":{"food":-25,"oxygen":10}}]},{"id":"mars_subsurface_methane","title":"Выброс подповерхностного метана из реголитовой трещины","description":"Сейсмометры зафиксировали марсотрясение магнитудой 2.8. Из трещины рядом со шлюзом пошел шлейф метана и благородных газов. Есть шанс собрать образцы для поиска древней жизни!","nasaScienceFact":"Марсоход Curiosity неоднократно фиксировал сезонные всплески метана (CH4) в кратере Гейла. Их природа до сих пор не разгадана: либо серпентинизация пород, либо подповерхностные микробы-метаногены.","triggerCondition":"random","choices":[{"id":"scientific_eva_sample","label":"Снарядить научную экспедицию на ровере для отбора кернов газа","description":"Большой прорыв в науке NASA и приток очков полезной нагрузки, но расход батарей ровера.","effects":{"energy":-20,"payloadPoints":45}},{"id":"seal_rift_foam","label":"Запечатать трещину полимерной пеной во избежание дестабилизации грунта","description":"Безопасное консервативное решение инженеров базы без лишнего риска.","effects":{"payloadPoints":5}}]},{"id":"mars_solar_flare_sep","title":"Вспышка на Солнце и поток релятивистских протонов","description":"Космический телескоп STEREO зафиксировал мощную вспышку на лимбе Солнца. Тонкая марсианская атмосфера не способна задержать частицы с энергией выше 100 МэВ.","nasaScienceFact":"На Марсе нет дипольного магнитного поля. Атмосфера с поверхностным давлением всего 610 Па задерживает мягкие рентгеновские лучи, но практически прозрачна для высокоэнергетичных протонов.","triggerCondition":"random","choices":[{"id":"mars_storm_shelter","label":"Укрыться в спальных капсулах, окруженных мешками с реголитом","description":"Экипаж обездвижен в тесных саркофагах на 18 часов, работы остановлены.","effects":{"radiation":8,"energy":-10,"health":-4}},{"id":"mars_magnetic_boost","label":"Запитать сверхпроводящую магнитную катушку базы на максимум","description":"Экранирует жилой блок электромагнитным полем ценой разрядки половины аккумуляторов.","effects":{"energy":-40,"radiation":12}}]}]'),Aw=[{id:"regolith_coating",name:"Реголитовый купол 3D-печати",category:"shield",shieldType:"regolith",cost:60,description:"Роверы спекают микроволновым излучением 2-метровый свод из местного лунного/марсианского грунта поверх надувных жилых модулей.",tradeoff:"+40% пассивной защиты от космической радиации и микрометеоритов. Не требует расхода электроэнергии.",moduleUpgrade:null},{id:"water_wall",name:"Водяная экранирующая стена (Hydro-Wall)",category:"shield",shieldType:"water",cost:80,waterCostPermanent:100,description:"Периметр спального отсека заполняется технической водой в многослойных полимерных пакетах. Водород — идеальный замедлитель тяжелых ионов HZE.",tradeoff:"+55% защиты от галактических космических лучей (GCR), но навсегда связывает 100 литров воды из оборотного запаса базы.",moduleUpgrade:null},{id:"magnetic_shield",name:"Сверхпроводящий магнитный щит (Mini-Magnetosphere)",category:"shield",shieldType:"magnetic",cost:120,description:"Высокотемпературные сверхпроводящие катушки генерируют тороидальное поле силой 3 Тесла, отклоняя заряженные частицы солнечного ветра.",tradeoff:"+70% защиты от радиационных вспышек, но требует постоянного расхода 35 кВт·ч электроэнергии при включении.",moduleUpgrade:null},{id:"moxie_v2",name:"Модернизация СЖО: Реактор Сабатье + MOXIE 2.0",category:"lifeSupport",cost:75,description:"Высокотемпературный электролизер CO2 с рутениевым катализатором и замкнутый контур конденсации влаги выдыхаемого воздуха.",tradeoff:"+30% к скорости регенерации кислорода и воды, повышает отказоустойчивость при дефиците экипажа.",moduleUpgrade:"lifeSupport"},{id:"closed_aeroponics",name:"Вертикальная ультразвуковая аэропоника 2.0",category:"agro",cost:85,description:"Корни растений висят в тумане микрокапель питательного раствора под оптимизированным спектром светодиодных фитоламп.",tradeoff:"+60% к сбору калорийной биомассы и +0.15 кг/сол фотосинтетического O2, но требует постоянного питания и чистой воды.",moduleUpgrade:"agro"},{id:"kilopower_expansion",name:"Второй энергоблок Kilopower 10 kWe (KRUSTY)",category:"energy",cost:110,description:"Компактный реактор деления на обогащенном уране с двигателями Стирлинга и титановыми тепловыми трубками с натрием.",tradeoff:"+50 кВт стабильной круглосуточной генерации независимо от бурь, ночи и погодных катаклизмов.",moduleUpgrade:"nuclear"},{id:"perovskite_solar_arrays",name:"Развертываемые перовскитные солнечные крылья",category:"energy",cost:70,description:"Сверхлегкие рулонные панели с КПД 28% на гибкой углепластиковой подложке, разворачиваемые роботизированной рукой.",tradeoff:"+40 кВт дневной генерации при ясном небе, но их выработка падает на 80% во время песчаных бурь или затмений.",moduleUpgrade:"solar"},{id:"ai_smart_grid",name:"Нейросетевой контроллер энергосети (NASA DeepGrid)",category:"energy",cost:65,description:"ИИ-алгоритм предиктивной балансировки нагрузки, оптимизирующий тепловые насосы и частоту циклов зарядки батарей.",tradeoff:"Снижает базовые утечки энергии и паразитный расход базы на 20%, защищает от коротких замыканий.",moduleUpgrade:null}],bw=[{id:"fact_water_iss",trigger:"low_water",title:"Рециркуляция воды на МКС (ECLSS)",content:"На Международной Космической Станции система жизнеобеспечения перерабатывает до 98% всей жидкости, включая выдыхаемую влагу, конденсат кондиционеров и даже урину космонавтов. Очищенная вода чище водопроводной на Земле!"},{id:"fact_moxie_perseverance",trigger:"low_oxygen",title:"Установка MOXIE на марсоходе Perseverance",content:"MOXIE успешно расщепляет марсианский CO2 на чистый кислород и угарный газ при температуре 800°C. Будущая промышленная версия в 200 раз мощнее обеспечит кислородом экипаж пилотируемой миссии и заправит баки взлетной ракеты."},{id:"fact_radiation_water_vs_lead",trigger:"high_radiation",title:"Почему вода защищает от радиации лучше свинца?",content:"Свинец эффективен против гамма-лучей, но в космосе опасны тяжелые заряженные частицы (HZE-ионы). При ударе о свинец они выбивают ливень вторичных нейтронов. Вода богата легкими ядрами водорода (протонами), которые эффективно замедляют ионы без вторичного излучения."},{id:"fact_kilopower_reactor",trigger:"low_energy",title:"Ядерный реактор NASA Kilopower (KRUSTY)",content:"Kilopower — это компактный реактор деления размером с мусорный бак, способный вырабатывать от 1 до 10 кВт электроэнергии непрерывно в течение 10 лет без перезагрузки топлива. Идеален для марсианской ночи и полярных кратеров Луны."},{id:"fact_perchlorates_danger",trigger:"perchlorates",title:"Коварство марсианского реголита: Перхлораты",content:"Марсианский грунт на 0.5–1% состоит из перхлоратов магния и кальция. Они токсичны для человека, блокируя усвоение йода щитовидной железой, но при нагреве выделяют чистый кислород, а некоторые бактерии способны питаться ими!"},{id:"fact_hydroponics_veggie",trigger:"low_food",title:"Эксперимент Veggie и оранжереи на орбите",content:"Космонавты на МКС уже выращивали салат ромэн, пекинскую капусту и перец чили. В дальнем космосе свежие овощи не только поставляют витамины C, K и антиоксиданты, но и дают огромную психологическую поддержку экипажу."},{id:"fact_lunar_shackleton",trigger:"moon_location",title:"Кратер Шеклтон: Полюс вечного света и тьмы",content:"Края кратера Шеклтон на южном полюсе Луны освещены Солнцем 86–92% времени года — идеальное место для солнечных электростанций. При этом его дно глубиной 4 км находится в вечной тьме миллиарды лет и хранит миллионы тонн водяного льда."},{id:"fact_mars_jezero",trigger:"mars_location",title:"Кратер Езеро: Древняя дельта реки на Марсе",content:"Около 3.7 миллиардов лет назад кратер Езеро был заполнен глубоким озером, в которое впадала река. Слоистые глины дельты — лучшее место для поиска биосигнатур древней микробной жизни."},{id:"fact_regolith_brick",trigger:"regolith_shield",title:"3D-печать укрытий из спеченного реголита",content:"Доставка 1 кг груза на Марс стоит десятки тысяч долларов. Концепция In-Situ Resource Utilization (ISRU) предполагает использование местных материалов: роботы спекают микроволнами марсианский песок в прочнейшие защитные своды."},{id:"fact_cme_spe",trigger:"solar_flare",title:"Солнечные протонные события (SPE)",content:"При взрыве на Солнце релятивистские протоны долетают до Луны за время от 20 минут до пары часов. Без защиты экипаж может получить дозу более 1–2 Зивертов, вызывающую острую лучевую болезнь. Единственное спасение — экранированное убежище."},{id:"fact_sabatier_reaction",trigger:"sabatier",title:"Реакция Сабатье: Кислород из выдыхаемого воздуха",content:"Реактор Сабатье смешивает углекислый газ экипажа (CO2) с водородом (H2) при 400°C с никелевым катализатором: CO2 + 4H2 -> CH4 + 2H2O. Полученная вода расщепляется электролизом обратно на дыхательный кислород O2!"},{id:"fact_lunar_dust_abrasion",trigger:"lunar_dust",title:"Опасность лунной пыли для легких",content:"Во время миссий «Аполлон» астронавты страдали от «лунной сенной лихорадки». Микрочастицы реголита с острыми гранями не разрушаются эрозией. При вдыхании они вызывают эффект, сходный с силикозом и асбестозом легких."},{id:"fact_dust_devil",trigger:"dust_storm",title:"Марсианские пылевые дьяволы (Dust Devils)",content:"Торнадо на Марсе достигают высоты до 8 километров! В 2005 году один из таких вихрей прошел прямо над запыленным марсоходом Spirit, неожиданно сдул всю пыль с солнечных батарей и спас миссию от обесточивания."},{id:"fact_circadian_rhythm",trigger:"night_psych",title:"Марсианские солы и циркадные ритмы",content:"Сутки на Марсе (сол) длятся 24 часа 39 минут 35 секунд. Эти лишние 39 минут каждый день сбивают естественные биоритмы человека. Для синхронизации сна NASA разрабатывает специальные светодиодные лампы с переменной цветовой температурой."},{id:"fact_superconducting_magnet",trigger:"magnetic_shield",title:"Искусственная магнитосфера базы",content:"NASA исследует проекты сверхпроводящих магнитных катушек с пассивным охлаждением в тени экранов. Магнитное поле отклоняет положительно заряженные протоны солнечного ветра так же, как радиационные пояса Ван Аллена защищают Землю."}];function Rw(){const[s,e]=$t.useState(()=>{const b=ui.loadGame();return b&&b.meta&&b.meta.status?b:xd(Yn.MARS,zi.ENGINEER,"Commander")}),[t,r]=$t.useState(()=>ui.getSettings().soundEnabled!==!1),[o,l]=$t.useState(()=>!ui.hasSeenIntro()),[u,f]=$t.useState(!1),[h,m]=$t.useState("canvas"),[y,S]=$t.useState(()=>ui.getHallOfFame());$t.useEffect(()=>{kt.setEnabled(t),ui.saveSettings({soundEnabled:t})},[t]),$t.useEffect(()=>{s.meta.status===Un.PLAYING&&ui.saveGame(s)},[s]);const _=$t.useMemo(()=>Ha.previewNextSol(s),[s]);$t.useEffect(()=>{s.meta.status===Un.PLAYING&&(s.resources.oxygen<30||_.blackoutStage>0)&&kt.playAlarm()},[s.resources.oxygen,_.blackoutStage,s.meta.status]);const M=()=>{ui.setSeenIntro(!0),l(!1)},w=()=>{l(!0)},C=(b,V,k)=>{const j=Ha.initGame(b,V,k);j.meta.status=Un.PLAYING,e(j),ui.saveGame(j)},g=(b,V)=>{e(k=>({...k,powerAllocation:{...k.powerAllocation,[b]:V}}))},v=(b,V)=>{e(k=>{const j={...k.crew.assigned,[b]:V},q=Object.values(j).reduce((z,re)=>z+re,0),se=Math.max(0,k.crew.total-q);return{...k,crew:{...k.crew,available:se,assigned:j}}})},N=b=>{e(V=>Ha.applyUpgrade(V,b))},F=()=>{const b=Ha.calculateNextSol(s);if(b.meta.status===Un.VICTORY||b.meta.status===Un.GAMEOVER){b.meta.status===Un.VICTORY?kt.playVictory():kt.playAlarm();const j=ui.recordMissionResult({commanderName:b.meta.commanderName,location:b.meta.location,difficulty:b.meta.difficulty,solsSurvived:b.meta.currentSol,maxSols:b.meta.maxSols,isVictory:b.meta.isVictory,reason:b.meta.gameOverReason});S(j),ui.clearGame(),e(b);return}const V=Yl[b.meta.difficulty]||Yl.engineer;if(Math.random()<V.eventChance){const j=b.meta.location===Yn.MOON?ww:Tw,q=j[Math.floor(Math.random()*j.length)];e({...b,activeEvent:q})}else e(b)},P=b=>{e(V=>Ha.resolveEvent(V,b))},U=()=>{ui.clearGame(),C(s.meta.location,s.meta.difficulty,s.meta.commanderName)},D=()=>{ui.clearGame(),e(xd(Yn.MARS,zi.ENGINEER,s.meta.commanderName))},{status:E}=s.meta;return x.jsxs("div",{className:"min-h-screen bg-nasa-dark text-slate-100 flex flex-col font-sans scanlines",children:[E===Un.PLAYING&&x.jsx(Hx,{gameState:s,preview:_,onOpenFormulaInspector:()=>f(!0),soundEnabled:t,onToggleSound:()=>r(!t)}),x.jsxs("main",{className:"flex-1 flex flex-col overflow-y-auto",children:[E===Un.BRIEFING&&x.jsx(Gx,{onStartMission:C,hallOfFame:y,onReplayIntro:w}),E===Un.PLAYING&&x.jsxs("div",{className:"flex-1 p-3 md:p-5 flex flex-col space-y-4 max-w-7xl mx-auto w-full",children:[x.jsxs("div",{className:"flex md:hidden rounded-lg bg-nasa-card border border-nasa-border p-1 text-xs font-mono",children:[x.jsx("button",{onClick:()=>m("canvas"),className:`flex-1 py-1.5 rounded transition-colors ${h==="canvas"?"bg-nasa-cyan text-nasa-dark font-bold":"text-slate-400"}`,children:"🗺️ База"}),x.jsx("button",{onClick:()=>m("controls"),className:`flex-1 py-1.5 rounded transition-colors ${h==="controls"?"bg-nasa-cyan text-nasa-dark font-bold":"text-slate-400"}`,children:"⚙️ Управление"}),x.jsx("button",{onClick:()=>m("advisor"),className:`flex-1 py-1.5 rounded transition-colors ${h==="advisor"?"bg-nasa-cyan text-nasa-dark font-bold":"text-slate-400"}`,children:"🔬 Советник"})]}),x.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-4 flex-1",children:[x.jsx("div",{className:`lg:col-span-3 h-full flex flex-col ${h==="canvas"?"block":"hidden md:flex"}`,children:x.jsx(Vx,{gameState:s,preview:_,upgrades:Aw,onApplyUpgrade:N})}),x.jsx("div",{className:`lg:col-span-1 h-full ${h==="advisor"?"block":"hidden md:block"}`,children:x.jsx(jx,{gameState:s,scienceFacts:bw})})]}),x.jsx("div",{className:h==="controls"?"block":"hidden md:block",children:x.jsx(Wx,{gameState:s,preview:_,onUpdatePower:g,onUpdateCrew:v,onNextSol:F})})]}),(E===Un.VICTORY||E===Un.GAMEOVER)&&x.jsx(qx,{gameState:s,onRestart:U,onNewMission:D})]}),o&&x.jsx(Ew,{onComplete:M}),s.activeEvent&&x.jsx(Xx,{event:s.activeEvent,onResolveChoice:P}),u&&x.jsx(Yx,{gameState:s,preview:_,onClose:()=>f(!1)}),x.jsxs("footer",{className:"border-t border-nasa-border/60 bg-nasa-dark/95 backdrop-blur px-4 py-2.5 text-center text-xs font-mono text-nasa-muted z-10 flex flex-col sm:flex-row items-center justify-between gap-1",children:[x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsx("span",{className:"w-2 h-2 rounded-full bg-nasa-green animate-pulse"}),x.jsx("span",{className:"text-slate-200",children:"Разработано в лаборатории «Алтын Түйүн» Нарынского филиала НДИТА в рамках хакатона НАСА"})]}),x.jsx("div",{className:"text-[10px] text-slate-500",children:"NASA Space Apps Challenge // Naryn Chapter"})]})]})}Bx.createRoot(document.getElementById("root")).render(x.jsx(Lx.StrictMode,{children:x.jsx(Rw,{})}));
