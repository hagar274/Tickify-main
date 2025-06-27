(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function l(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(d){if(d.ep)return;d.ep=!0;const f=l(d);fetch(d.href,f)}})();function _0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Md={exports:{}},Ql={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function Y1(){if(Tg)return Ql;Tg=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(s,d,f){var g=null;if(f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),"key"in d){f={};for(var b in d)b!=="key"&&(f[b]=d[b])}else f=d;return d=f.ref,{$$typeof:a,type:s,key:g,ref:d!==void 0?d:null,props:f}}return Ql.Fragment=r,Ql.jsx=l,Ql.jsxs=l,Ql}var kg;function G1(){return kg||(kg=1,Md.exports=Y1()),Md.exports}var c=G1(),Nd={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function V1(){if(zg)return je;zg=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),k=Symbol.iterator;function E(w){return w===null||typeof w!="object"?null:(w=k&&w[k]||w["@@iterator"],typeof w=="function"?w:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,N={};function B(w,T,X){this.props=w,this.context=T,this.refs=N,this.updater=X||D}B.prototype.isReactComponent={},B.prototype.setState=function(w,T){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,T,"setState")},B.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function O(){}O.prototype=B.prototype;function A(w,T,X){this.props=w,this.context=T,this.refs=N,this.updater=X||D}var q=A.prototype=new O;q.constructor=A,z(q,B.prototype),q.isPureReactComponent=!0;var I=Array.isArray,_={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function P(w,T,X,F,te,ie){return X=ie.ref,{$$typeof:a,type:w,key:T,ref:X!==void 0?X:null,props:ie}}function ne(w,T){return P(w.type,T,void 0,void 0,void 0,w.props)}function Z(w){return typeof w=="object"&&w!==null&&w.$$typeof===a}function ee(w){var T={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(X){return T[X]})}var le=/\/+/g;function oe(w,T){return typeof w=="object"&&w!==null&&w.key!=null?ee(""+w.key):T.toString(36)}function be(){}function xe(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(be,be):(w.status="pending",w.then(function(T){w.status==="pending"&&(w.status="fulfilled",w.value=T)},function(T){w.status==="pending"&&(w.status="rejected",w.reason=T)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function he(w,T,X,F,te){var ie=typeof w;(ie==="undefined"||ie==="boolean")&&(w=null);var ae=!1;if(w===null)ae=!0;else switch(ie){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(w.$$typeof){case a:case r:ae=!0;break;case y:return ae=w._init,he(ae(w._payload),T,X,F,te)}}if(ae)return te=te(w),ae=F===""?"."+oe(w,0):F,I(te)?(X="",ae!=null&&(X=ae.replace(le,"$&/")+"/"),he(te,T,X,"",function(ye){return ye})):te!=null&&(Z(te)&&(te=ne(te,X+(te.key==null||w&&w.key===te.key?"":(""+te.key).replace(le,"$&/")+"/")+ae)),T.push(te)),1;ae=0;var Se=F===""?".":F+":";if(I(w))for(var W=0;W<w.length;W++)F=w[W],ie=Se+oe(F,W),ae+=he(F,T,X,ie,te);else if(W=E(w),typeof W=="function")for(w=W.call(w),W=0;!(F=w.next()).done;)F=F.value,ie=Se+oe(F,W++),ae+=he(F,T,X,ie,te);else if(ie==="object"){if(typeof w.then=="function")return he(xe(w),T,X,F,te);throw T=String(w),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return ae}function U(w,T,X){if(w==null)return w;var F=[],te=0;return he(w,F,"","",function(ie){return T.call(X,ie,te++)}),F}function J(w){if(w._status===-1){var T=w._result;T=T(),T.then(function(X){(w._status===0||w._status===-1)&&(w._status=1,w._result=X)},function(X){(w._status===0||w._status===-1)&&(w._status=2,w._result=X)}),w._status===-1&&(w._status=0,w._result=T)}if(w._status===1)return w._result.default;throw w._result}var re=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function ce(){}return je.Children={map:U,forEach:function(w,T,X){U(w,function(){T.apply(this,arguments)},X)},count:function(w){var T=0;return U(w,function(){T++}),T},toArray:function(w){return U(w,function(T){return T})||[]},only:function(w){if(!Z(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},je.Component=B,je.Fragment=l,je.Profiler=d,je.PureComponent=A,je.StrictMode=s,je.Suspense=v,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,je.__COMPILER_RUNTIME={__proto__:null,c:function(w){return _.H.useMemoCache(w)}},je.cache=function(w){return function(){return w.apply(null,arguments)}},je.cloneElement=function(w,T,X){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var F=z({},w.props),te=w.key,ie=void 0;if(T!=null)for(ae in T.ref!==void 0&&(ie=void 0),T.key!==void 0&&(te=""+T.key),T)!G.call(T,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&T.ref===void 0||(F[ae]=T[ae]);var ae=arguments.length-2;if(ae===1)F.children=X;else if(1<ae){for(var Se=Array(ae),W=0;W<ae;W++)Se[W]=arguments[W+2];F.children=Se}return P(w.type,te,void 0,void 0,ie,F)},je.createContext=function(w){return w={$$typeof:g,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:f,_context:w},w},je.createElement=function(w,T,X){var F,te={},ie=null;if(T!=null)for(F in T.key!==void 0&&(ie=""+T.key),T)G.call(T,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(te[F]=T[F]);var ae=arguments.length-2;if(ae===1)te.children=X;else if(1<ae){for(var Se=Array(ae),W=0;W<ae;W++)Se[W]=arguments[W+2];te.children=Se}if(w&&w.defaultProps)for(F in ae=w.defaultProps,ae)te[F]===void 0&&(te[F]=ae[F]);return P(w,ie,void 0,void 0,null,te)},je.createRef=function(){return{current:null}},je.forwardRef=function(w){return{$$typeof:b,render:w}},je.isValidElement=Z,je.lazy=function(w){return{$$typeof:y,_payload:{_status:-1,_result:w},_init:J}},je.memo=function(w,T){return{$$typeof:p,type:w,compare:T===void 0?null:T}},je.startTransition=function(w){var T=_.T,X={};_.T=X;try{var F=w(),te=_.S;te!==null&&te(X,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ce,re)}catch(ie){re(ie)}finally{_.T=T}},je.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},je.use=function(w){return _.H.use(w)},je.useActionState=function(w,T,X){return _.H.useActionState(w,T,X)},je.useCallback=function(w,T){return _.H.useCallback(w,T)},je.useContext=function(w){return _.H.useContext(w)},je.useDebugValue=function(){},je.useDeferredValue=function(w,T){return _.H.useDeferredValue(w,T)},je.useEffect=function(w,T,X){var F=_.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(w,T)},je.useId=function(){return _.H.useId()},je.useImperativeHandle=function(w,T,X){return _.H.useImperativeHandle(w,T,X)},je.useInsertionEffect=function(w,T){return _.H.useInsertionEffect(w,T)},je.useLayoutEffect=function(w,T){return _.H.useLayoutEffect(w,T)},je.useMemo=function(w,T){return _.H.useMemo(w,T)},je.useOptimistic=function(w,T){return _.H.useOptimistic(w,T)},je.useReducer=function(w,T,X){return _.H.useReducer(w,T,X)},je.useRef=function(w){return _.H.useRef(w)},je.useState=function(w){return _.H.useState(w)},je.useSyncExternalStore=function(w,T,X){return _.H.useSyncExternalStore(w,T,X)},je.useTransition=function(){return _.H.useTransition()},je.version="19.1.0",je}var Rg;function Sf(){return Rg||(Rg=1,Nd.exports=V1()),Nd.exports}var x=Sf();const Ht=_0(x);var Bd={exports:{}},Zl={},_d={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function X1(){return Og||(Og=1,function(a){function r(U,J){var re=U.length;U.push(J);e:for(;0<re;){var ce=re-1>>>1,w=U[ce];if(0<d(w,J))U[ce]=J,U[re]=w,re=ce;else break e}}function l(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var J=U[0],re=U.pop();if(re!==J){U[0]=re;e:for(var ce=0,w=U.length,T=w>>>1;ce<T;){var X=2*(ce+1)-1,F=U[X],te=X+1,ie=U[te];if(0>d(F,re))te<w&&0>d(ie,F)?(U[ce]=ie,U[te]=re,ce=te):(U[ce]=F,U[X]=re,ce=X);else if(te<w&&0>d(ie,re))U[ce]=ie,U[te]=re,ce=te;else break e}}return J}function d(U,J){var re=U.sortIndex-J.sortIndex;return re!==0?re:U.id-J.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var g=Date,b=g.now();a.unstable_now=function(){return g.now()-b}}var v=[],p=[],y=1,k=null,E=3,D=!1,z=!1,N=!1,B=!1,O=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function I(U){for(var J=l(p);J!==null;){if(J.callback===null)s(p);else if(J.startTime<=U)s(p),J.sortIndex=J.expirationTime,r(v,J);else break;J=l(p)}}function _(U){if(N=!1,I(U),!z)if(l(v)!==null)z=!0,G||(G=!0,oe());else{var J=l(p);J!==null&&he(_,J.startTime-U)}}var G=!1,P=-1,ne=5,Z=-1;function ee(){return B?!0:!(a.unstable_now()-Z<ne)}function le(){if(B=!1,G){var U=a.unstable_now();Z=U;var J=!0;try{e:{z=!1,N&&(N=!1,A(P),P=-1),D=!0;var re=E;try{t:{for(I(U),k=l(v);k!==null&&!(k.expirationTime>U&&ee());){var ce=k.callback;if(typeof ce=="function"){k.callback=null,E=k.priorityLevel;var w=ce(k.expirationTime<=U);if(U=a.unstable_now(),typeof w=="function"){k.callback=w,I(U),J=!0;break t}k===l(v)&&s(v),I(U)}else s(v);k=l(v)}if(k!==null)J=!0;else{var T=l(p);T!==null&&he(_,T.startTime-U),J=!1}}break e}finally{k=null,E=re,D=!1}J=void 0}}finally{J?oe():G=!1}}}var oe;if(typeof q=="function")oe=function(){q(le)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,xe=be.port2;be.port1.onmessage=le,oe=function(){xe.postMessage(null)}}else oe=function(){O(le,0)};function he(U,J){P=O(function(){U(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(U){U.callback=null},a.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<U?Math.floor(1e3/U):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(U){switch(E){case 1:case 2:case 3:var J=3;break;default:J=E}var re=E;E=J;try{return U()}finally{E=re}},a.unstable_requestPaint=function(){B=!0},a.unstable_runWithPriority=function(U,J){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var re=E;E=U;try{return J()}finally{E=re}},a.unstable_scheduleCallback=function(U,J,re){var ce=a.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ce+re:ce):re=ce,U){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=re+w,U={id:y++,callback:J,priorityLevel:U,startTime:re,expirationTime:w,sortIndex:-1},re>ce?(U.sortIndex=re,r(p,U),l(v)===null&&U===l(p)&&(N?(A(P),P=-1):N=!0,he(_,re-ce))):(U.sortIndex=w,r(v,U),z||D||(z=!0,G||(G=!0,oe()))),U},a.unstable_shouldYield=ee,a.unstable_wrapCallback=function(U){var J=E;return function(){var re=E;E=J;try{return U.apply(this,arguments)}finally{E=re}}}}(Ld)),Ld}var Dg;function Q1(){return Dg||(Dg=1,_d.exports=X1()),_d.exports}var Hd={exports:{}},Lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function Z1(){if(Mg)return Lt;Mg=1;var a=Sf();function r(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(v,p,y){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:k==null?null:""+k,children:v,containerInfo:p,implementation:y}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Lt.createPortal=function(v,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return f(v,p,null,y)},Lt.flushSync=function(v){var p=g.T,y=s.p;try{if(g.T=null,s.p=2,v)return v()}finally{g.T=p,s.p=y,s.d.f()}},Lt.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(v,p))},Lt.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Lt.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var y=p.as,k=b(y,p.crossOrigin),E=typeof p.integrity=="string"?p.integrity:void 0,D=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?s.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:k,integrity:E,fetchPriority:D}):y==="script"&&s.d.X(v,{crossOrigin:k,integrity:E,fetchPriority:D,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Lt.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=b(p.as,p.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(v)},Lt.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,k=b(y,p.crossOrigin);s.d.L(v,y,{crossOrigin:k,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Lt.preloadModule=function(v,p){if(typeof v=="string")if(p){var y=b(p.as,p.crossOrigin);s.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(v)},Lt.requestFormReset=function(v){s.d.r(v)},Lt.unstable_batchedUpdates=function(v,p){return v(p)},Lt.useFormState=function(v,p,y){return g.H.useFormState(v,p,y)},Lt.useFormStatus=function(){return g.H.useHostTransitionStatus()},Lt.version="19.1.0",Lt}var Ng;function L0(){if(Ng)return Hd.exports;Ng=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Hd.exports=Z1(),Hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function K1(){if(Bg)return Zl;Bg=1;var a=Q1(),r=Sf(),l=L0();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(f(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var u=o.alternate;if(u===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===n)return b(o),e;if(u===i)return b(o),t;u=u.sibling}throw Error(s(188))}if(n.return!==i.return)n=o,i=u;else{for(var m=!1,h=o.child;h;){if(h===n){m=!0,n=o,i=u;break}if(h===i){m=!0,i=o,n=u;break}h=h.sibling}if(!m){for(h=u.child;h;){if(h===n){m=!0,n=u,i=o;break}if(h===i){m=!0,i=u,n=o;break}h=h.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==i)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,k=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),q=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var be=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case B:return"Profiler";case N:return"StrictMode";case _:return"Suspense";case G:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case D:return"Portal";case q:return(e.displayName||"Context")+".Provider";case A:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:xe(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}var he=Array.isArray,U=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},ce=[],w=-1;function T(e){return{current:e}}function X(e){0>w||(e.current=ce[w],ce[w]=null,w--)}function F(e,t){w++,ce[w]=e.current,e.current=t}var te=T(null),ie=T(null),ae=T(null),Se=T(null);function W(e,t){switch(F(ae,t),F(ie,e),F(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?tg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=tg(t),e=ag(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(te),F(te,e)}function ye(){X(te),X(ie),X(ae)}function we(e){e.memoizedState!==null&&F(Se,e);var t=te.current,n=ag(t,e.type);t!==n&&(F(ie,e),F(te,n))}function Ae(e){ie.current===e&&(X(te),X(ie)),Se.current===e&&(X(Se),ql._currentValue=re)}var ve=Object.prototype.hasOwnProperty,tt=a.unstable_scheduleCallback,mt=a.unstable_cancelCallback,ta=a.unstable_shouldYield,aa=a.unstable_requestPaint,Je=a.unstable_now,na=a.unstable_getCurrentPriorityLevel,st=a.unstable_ImmediatePriority,Da=a.unstable_UserBlockingPriority,Pt=a.unstable_NormalPriority,Ya=a.unstable_LowPriority,wt=a.unstable_IdlePriority,Yt=a.log,Gt=a.unstable_setDisableYieldValue,Rt=null,Ie=null;function ht(e){if(typeof Yt=="function"&&Gt(e),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(Rt,e)}catch{}}var Ue=Math.clz32?Math.clz32:Jr,Ga=Math.log,Ma=Math.LN2;function Jr(e){return e>>>=0,e===0?32:31-(Ga(e)/Ma|0)|0}var Va=256,ui=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xa(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var o=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var h=i&134217727;return h!==0?(i=h&~u,i!==0?o=Na(i):(m&=h,m!==0?o=Na(m):n||(n=h&~e,n!==0&&(o=Na(n))))):(h=i&~u,h!==0?o=Na(h):m!==0?o=Na(m):n||(n=i&~e,n!==0&&(o=Na(n)))),o===0?0:t!==0&&t!==o&&(t&u)===0&&(u=o&-o,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:o}function on(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function po(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ui(){var e=Va;return Va<<=1,(Va&4194048)===0&&(Va=256),e}function va(){var e=ui;return ui<<=1,(ui&62914560)===0&&(ui=4194304),e}function $i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sn(e,t,n,i,o,u){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,S=e.expirationTimes,L=e.hiddenUpdates;for(n=m&~n;0<n;){var V=31-Ue(n),K=1<<V;h[V]=0,S[V]=-1;var H=L[V];if(H!==null)for(L[V]=null,V=0;V<H.length;V++){var $=H[V];$!==null&&($.lane&=-536870913)}n&=~K}i!==0&&Mn(e,i,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function Mn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ue(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function qi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ue(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}function Yi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cn(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:wg(e.type))}function Vi(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var St=Math.random().toString(36).slice(2),Be="__reactFiber$"+St,Oe="__reactProps$"+St,pt="__reactContainer$"+St,Xi="__reactEvents$"+St,Tc="__reactListeners$"+St,kc="__reactHandles$"+St,Ir="__reactResources$"+St,un="__reactMarker$"+St;function Qi(e){delete e[Be],delete e[Oe],delete e[Xi],delete e[Tc],delete e[kc]}function Nn(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lg(e);e!==null;){if(n=e[Be])return n;e=lg(e)}return t}e=n,n=e.parentNode}return null}function Bn(e){if(e=e[Be]||e[pt]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function _n(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function dn(e){var t=e[Ir];return t||(t=e[Ir]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[un]=!0}var go=new Set,Wr={};function Qa(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Wr[e]=t,e=0;e<t.length;e++)go.add(t[e])}var zc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),De={},de={};function $e(e){return ve.call(de,e)?!0:ve.call(De,e)?!1:zc.test(e)?de[e]=!0:(De[e]=!0,!1)}function Ge(e,t,n){if($e(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function at(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function jt(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var ia,ba;function Bt(e){if(ia===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ia=t&&t[1]||"",ba=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ia+e+ba}var Ba=!1;function Za(e,t){if(!e||Ba)return"";Ba=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch($){var H=$}Reflect.construct(e,[],K)}else{try{K.call()}catch($){H=$}e.call(K.prototype)}}else{try{throw Error()}catch($){H=$}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch($){if($&&H&&typeof $.stack=="string")return[$.stack,H.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),m=u[0],h=u[1];if(m&&h){var S=m.split(`
`),L=h.split(`
`);for(o=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;o<L.length&&!L[o].includes("DetermineComponentFrameRoot");)o++;if(i===S.length||o===L.length)for(i=S.length-1,o=L.length-1;1<=i&&0<=o&&S[i]!==L[o];)o--;for(;1<=i&&0<=o;i--,o--)if(S[i]!==L[o]){if(i!==1||o!==1)do if(i--,o--,0>o||S[i]!==L[o]){var V=`
`+S[i].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=i&&0<=o);break}}}finally{Ba=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Bt(n):""}function Ka(e){switch(e.tag){case 26:case 27:case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return Za(e.type,!1);case 11:return Za(e.type.render,!1);case 1:return Za(e.type,!0);case 31:return Bt("Activity");default:return""}}function di(e){try{var t="";do t+=Ka(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lv(e){var t=Ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(m){i=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xo(e){e._valueTracker||(e._valueTracker=Lv(e))}function Jf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ff(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hv=/[\n"\\]/g;function ya(e){return e.replace(Hv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Rc(e,t,n,i,o,u,m,h){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Oc(e,m,Vt(t)):n!=null?Oc(e,m,Vt(n)):i!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Vt(h):e.removeAttribute("name")}function If(e,t,n,i,o,u,m,h){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=h?e.checked:!!i,e.defaultChecked=!!i,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function Oc(e,t,n){t==="number"&&vo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Zi(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Wf(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function em(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(s(92));if(he(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function Ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Uv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Uv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function am(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var o in t)i=t[o],t.hasOwnProperty(o)&&n[o]!==i&&tm(e,o,i)}else for(var u in t)t.hasOwnProperty(u)&&tm(e,u,t[u])}function Dc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $v=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bo(e){return qv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Mc=null;function Nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pi=null,Fi=null;function nm(e){var t=Bn(e);if(t&&(e=t.stateNode)){var n=e[Oe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Rc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ya(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=i[Oe]||null;if(!o)throw Error(s(90));Rc(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Jf(i)}break e;case"textarea":Wf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Zi(e,!!n.multiple,t,!1)}}}var Bc=!1;function im(e,t,n){if(Bc)return e(t,n);Bc=!0;try{var i=e(t);return i}finally{if(Bc=!1,(Pi!==null||Fi!==null)&&(is(),Pi&&(t=Pi,e=Fi,Fi=Pi=null,nm(t),e)))for(t=0;t<e.length;t++)nm(e[t])}}function el(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Oe]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=!1;if(mn)try{var tl={};Object.defineProperty(tl,"passive",{get:function(){_c=!0}}),window.addEventListener("test",tl,tl),window.removeEventListener("test",tl,tl)}catch{_c=!1}var Ln=null,Lc=null,yo=null;function rm(){if(yo)return yo;var e,t=Lc,n=t.length,i,o="value"in Ln?Ln.value:Ln.textContent,u=o.length;for(e=0;e<n&&t[e]===o[e];e++);var m=n-e;for(i=1;i<=m&&t[n-i]===o[u-i];i++);return yo=o.slice(e,1<i?1-i:void 0)}function wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function So(){return!0}function lm(){return!1}function Ft(e){function t(n,i,o,u,m){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?So:lm,this.isPropagationStopped=lm,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),t}var fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=Ft(fi),al=y({},fi,{view:0,detail:0}),Yv=Ft(al),Hc,Uc,nl,Eo=y({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nl&&(nl&&e.type==="mousemove"?(Hc=e.screenX-nl.screenX,Uc=e.screenY-nl.screenY):Uc=Hc=0,nl=e),Hc)},movementY:function(e){return"movementY"in e?e.movementY:Uc}}),om=Ft(Eo),Gv=y({},Eo,{dataTransfer:0}),Vv=Ft(Gv),Xv=y({},al,{relatedTarget:0}),$c=Ft(Xv),Qv=y({},fi,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=Ft(Qv),Kv=y({},fi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pv=Ft(Kv),Fv=y({},fi,{data:0}),sm=Ft(Fv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wv[e])?!!t[e]:!1}function qc(){return eb}var tb=y({},al,{key:function(e){if(e.key){var t=Jv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Iv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ab=Ft(tb),nb=y({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=Ft(nb),ib=y({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),rb=Ft(ib),lb=y({},fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),ob=Ft(lb),sb=y({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cb=Ft(sb),ub=y({},fi,{newState:0,oldState:0}),db=Ft(ub),fb=[9,13,27,32],Yc=mn&&"CompositionEvent"in window,il=null;mn&&"documentMode"in document&&(il=document.documentMode);var mb=mn&&"TextEvent"in window&&!il,um=mn&&(!Yc||il&&8<il&&11>=il),dm=" ",fm=!1;function mm(e,t){switch(e){case"keyup":return fb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ji=!1;function hb(e,t){switch(e){case"compositionend":return hm(t);case"keypress":return t.which!==32?null:(fm=!0,dm);case"textInput":return e=t.data,e===dm&&fm?null:e;default:return null}}function pb(e,t){if(Ji)return e==="compositionend"||!Yc&&mm(e,t)?(e=rm(),yo=Lc=Ln=null,Ji=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return um&&t.locale!=="ko"?null:t.data;default:return null}}var gb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gb[e.type]:t==="textarea"}function gm(e,t,n,i){Pi?Fi?Fi.push(i):Fi=[i]:Pi=i,t=us(t,"onChange"),0<t.length&&(n=new jo("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var rl=null,ll=null;function xb(e){Fp(e,0)}function Co(e){var t=_n(e);if(Jf(t))return e}function xm(e,t){if(e==="change")return t}var vm=!1;if(mn){var Gc;if(mn){var Vc="oninput"in document;if(!Vc){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),Vc=typeof bm.oninput=="function"}Gc=Vc}else Gc=!1;vm=Gc&&(!document.documentMode||9<document.documentMode)}function ym(){rl&&(rl.detachEvent("onpropertychange",wm),ll=rl=null)}function wm(e){if(e.propertyName==="value"&&Co(ll)){var t=[];gm(t,ll,e,Nc(e)),im(xb,t)}}function vb(e,t,n){e==="focusin"?(ym(),rl=t,ll=n,rl.attachEvent("onpropertychange",wm)):e==="focusout"&&ym()}function bb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(ll)}function yb(e,t){if(e==="click")return Co(t)}function wb(e,t){if(e==="input"||e==="change")return Co(t)}function Sb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ra=typeof Object.is=="function"?Object.is:Sb;function ol(e,t){if(ra(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!ve.call(t,o)||!ra(e[o],t[o]))return!1}return!0}function Sm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jm(e,t){var n=Sm(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function Em(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Em(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=vo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vo(e.document)}return t}function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jb=mn&&"documentMode"in document&&11>=document.documentMode,Ii=null,Qc=null,sl=null,Zc=!1;function Am(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zc||Ii==null||Ii!==vo(i)||(i=Ii,"selectionStart"in i&&Xc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),sl&&ol(sl,i)||(sl=i,i=us(Qc,"onSelect"),0<i.length&&(t=new jo("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ii)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wi={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionrun:mi("Transition","TransitionRun"),transitionstart:mi("Transition","TransitionStart"),transitioncancel:mi("Transition","TransitionCancel"),transitionend:mi("Transition","TransitionEnd")},Kc={},Tm={};mn&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function hi(e){if(Kc[e])return Kc[e];if(!Wi[e])return e;var t=Wi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tm)return Kc[e]=t[n];return e}var km=hi("animationend"),zm=hi("animationiteration"),Rm=hi("animationstart"),Eb=hi("transitionrun"),Cb=hi("transitionstart"),Ab=hi("transitioncancel"),Om=hi("transitionend"),Dm=new Map,Pc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pc.push("scrollEnd");function _a(e,t){Dm.set(e,t),Qa(t,[e])}var Mm=new WeakMap;function wa(e,t){if(typeof e=="object"&&e!==null){var n=Mm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:di(t)},Mm.set(e,t),t)}return{value:e,source:t,stack:di(t)}}var Sa=[],er=0,Fc=0;function Ao(){for(var e=er,t=Fc=er=0;t<e;){var n=Sa[t];Sa[t++]=null;var i=Sa[t];Sa[t++]=null;var o=Sa[t];Sa[t++]=null;var u=Sa[t];if(Sa[t++]=null,i!==null&&o!==null){var m=i.pending;m===null?o.next=o:(o.next=m.next,m.next=o),i.pending=o}u!==0&&Nm(n,o,u)}}function To(e,t,n,i){Sa[er++]=e,Sa[er++]=t,Sa[er++]=n,Sa[er++]=i,Fc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Jc(e,t,n,i){return To(e,t,n,i),ko(e)}function tr(e,t){return To(e,null,null,t),ko(e)}function Nm(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var o=!1,u=e.return;u!==null;)u.childLanes|=n,i=u.alternate,i!==null&&(i.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&t!==null&&(o=31-Ue(n),e=u.hiddenUpdates,i=e[o],i===null?e[o]=[t]:i.push(t),t.lane=n|536870912),u):null}function ko(e){if(50<Ml)throw Ml=0,nd=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ar={};function Tb(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function la(e,t,n,i){return new Tb(e,t,n,i)}function Ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hn(e,t){var n=e.alternate;return n===null?(n=la(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Bm(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zo(e,t,n,i,o,u){var m=0;if(i=e,typeof e=="function")Ic(e)&&(m=1);else if(typeof e=="string")m=z1(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=la(31,n,t,o),e.elementType=Z,e.lanes=u,e;case z:return pi(n.children,o,u,t);case N:m=8,o|=24;break;case B:return e=la(12,n,t,o|2),e.elementType=B,e.lanes=u,e;case _:return e=la(13,n,t,o),e.elementType=_,e.lanes=u,e;case G:return e=la(19,n,t,o),e.elementType=G,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:case q:m=10;break e;case A:m=9;break e;case I:m=11;break e;case P:m=14;break e;case ne:m=16,i=null;break e}m=29,n=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=la(m,n,t,o),t.elementType=e,t.type=i,t.lanes=u,t}function pi(e,t,n,i){return e=la(7,e,i,t),e.lanes=n,e}function Wc(e,t,n){return e=la(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=la(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var nr=[],ir=0,Ro=null,Oo=0,ja=[],Ea=0,gi=null,pn=1,gn="";function xi(e,t){nr[ir++]=Oo,nr[ir++]=Ro,Ro=e,Oo=t}function _m(e,t,n){ja[Ea++]=pn,ja[Ea++]=gn,ja[Ea++]=gi,gi=e;var i=pn;e=gn;var o=32-Ue(i)-1;i&=~(1<<o),n+=1;var u=32-Ue(t)+o;if(30<u){var m=o-o%5;u=(i&(1<<m)-1).toString(32),i>>=m,o-=m,pn=1<<32-Ue(t)+o|n<<o|i,gn=u+e}else pn=1<<u|n<<o|i,gn=e}function tu(e){e.return!==null&&(xi(e,1),_m(e,1,0))}function au(e){for(;e===Ro;)Ro=nr[--ir],nr[ir]=null,Oo=nr[--ir],nr[ir]=null;for(;e===gi;)gi=ja[--Ea],ja[Ea]=null,gn=ja[--Ea],ja[Ea]=null,pn=ja[--Ea],ja[Ea]=null}var Xt=null,lt=null,_e=!1,vi=null,Pa=!1,nu=Error(s(519));function bi(e){var t=Error(s(418,""));throw dl(wa(t,e)),nu}function Lm(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Be]=e,t[Oe]=i,n){case"dialog":ze("cancel",t),ze("close",t);break;case"iframe":case"object":case"embed":ze("load",t);break;case"video":case"audio":for(n=0;n<Bl.length;n++)ze(Bl[n],t);break;case"source":ze("error",t);break;case"img":case"image":case"link":ze("error",t),ze("load",t);break;case"details":ze("toggle",t);break;case"input":ze("invalid",t),If(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),xo(t);break;case"select":ze("invalid",t);break;case"textarea":ze("invalid",t),em(t,i.value,i.defaultValue,i.children),xo(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||eg(t.textContent,n)?(i.popover!=null&&(ze("beforetoggle",t),ze("toggle",t)),i.onScroll!=null&&ze("scroll",t),i.onScrollEnd!=null&&ze("scrollend",t),i.onClick!=null&&(t.onclick=ds),t=!0):t=!1,t||bi(e)}function Hm(e){for(Xt=e.return;Xt;)switch(Xt.tag){case 5:case 13:Pa=!1;return;case 27:case 3:Pa=!0;return;default:Xt=Xt.return}}function cl(e){if(e!==Xt)return!1;if(!_e)return Hm(e),_e=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||bd(e.type,e.memoizedProps)),n=!n),n&&lt&&bi(e),Hm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){lt=Ha(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}lt=null}}else t===27?(t=lt,Wn(e.type)?(e=jd,jd=null,lt=e):lt=t):lt=Xt?Ha(e.stateNode.nextSibling):null;return!0}function ul(){lt=Xt=null,_e=!1}function Um(){var e=vi;return e!==null&&(Wt===null?Wt=e:Wt.push.apply(Wt,e),vi=null),e}function dl(e){vi===null?vi=[e]:vi.push(e)}var iu=T(null),yi=null,xn=null;function Hn(e,t,n){F(iu,t._currentValue),t._currentValue=n}function vn(e){e._currentValue=iu.current,X(iu)}function ru(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function lu(e,t,n,i){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var m=o.child;u=u.firstContext;e:for(;u!==null;){var h=u;u=o;for(var S=0;S<t.length;S++)if(h.context===t[S]){u.lanes|=n,h=u.alternate,h!==null&&(h.lanes|=n),ru(u.return,n,e),i||(m=null);break e}u=h.next}}else if(o.tag===18){if(m=o.return,m===null)throw Error(s(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),ru(m,n,e),m=null}else m=o.child;if(m!==null)m.return=o;else for(m=o;m!==null;){if(m===e){m=null;break}if(o=m.sibling,o!==null){o.return=m.return,m=o;break}m=m.return}o=m}}function fl(e,t,n,i){e=null;for(var o=t,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var m=o.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var h=o.type;ra(o.pendingProps.value,m.value)||(e!==null?e.push(h):e=[h])}}else if(o===Se.current){if(m=o.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(ql):e=[ql])}o=o.return}e!==null&&lu(t,e,n,i),t.flags|=262144}function Do(e){for(e=e.firstContext;e!==null;){if(!ra(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wi(e){yi=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _t(e){return $m(yi,e)}function Mo(e,t){return yi===null&&wi(e),$m(e,t)}function $m(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(s(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var kb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},zb=a.unstable_scheduleCallback,Rb=a.unstable_NormalPriority,bt={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ou(){return{controller:new kb,data:new Map,refCount:0}}function ml(e){e.refCount--,e.refCount===0&&zb(Rb,function(){e.controller.abort()})}var hl=null,su=0,rr=0,lr=null;function Ob(e,t){if(hl===null){var n=hl=[];su=0,rr=ud(),lr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return su++,t.then(qm,qm),t}function qm(){if(--su===0&&hl!==null){lr!==null&&(lr.status="fulfilled");var e=hl;hl=null,rr=0,lr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Db(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(i.status="rejected",i.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),i}var Ym=U.S;U.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ob(e,t),Ym!==null&&Ym(e,t)};var Si=T(null);function cu(){var e=Si.current;return e!==null?e:Ke.pooledCache}function No(e,t){t===null?F(Si,Si.current):F(Si,t.pool)}function Gm(){var e=cu();return e===null?null:{parent:bt._currentValue,pool:e}}var pl=Error(s(460)),Vm=Error(s(474)),Bo=Error(s(542)),uu={then:function(){}};function Xm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _o(){}function Qm(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(_o,_o),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Km(e),e;default:if(typeof t.status=="string")t.then(_o,_o);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=i}},function(i){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Km(e),e}throw gl=t,pl}}var gl=null;function Zm(){if(gl===null)throw Error(s(459));var e=gl;return gl=null,e}function Km(e){if(e===pl||e===Bo)throw Error(s(483))}var Un=!1;function du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(qe&2)!==0){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,t=ko(e),Nm(e,null,n),t}return To(e,i,t,n),ko(e)}function xl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,qi(e,n)}}function mu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?o=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?o=u=t:u=u.next=t}else o=u=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var hu=!1;function vl(){if(hu){var e=lr;if(e!==null)throw e}}function bl(e,t,n,i){hu=!1;var o=e.updateQueue;Un=!1;var u=o.firstBaseUpdate,m=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var S=h,L=S.next;S.next=null,m===null?u=L:m.next=L,m=S;var V=e.alternate;V!==null&&(V=V.updateQueue,h=V.lastBaseUpdate,h!==m&&(h===null?V.firstBaseUpdate=L:h.next=L,V.lastBaseUpdate=S))}if(u!==null){var K=o.baseState;m=0,V=L=S=null,h=u;do{var H=h.lane&-536870913,$=H!==h.lane;if($?(Re&H)===H:(i&H)===H){H!==0&&H===rr&&(hu=!0),V!==null&&(V=V.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ge=e,me=h;H=t;var Qe=n;switch(me.tag){case 1:if(ge=me.payload,typeof ge=="function"){K=ge.call(Qe,K,H);break e}K=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=me.payload,H=typeof ge=="function"?ge.call(Qe,K,H):ge,H==null)break e;K=y({},K,H);break e;case 2:Un=!0}}H=h.callback,H!==null&&(e.flags|=64,$&&(e.flags|=8192),$=o.callbacks,$===null?o.callbacks=[H]:$.push(H))}else $={lane:H,tag:h.tag,payload:h.payload,callback:h.callback,next:null},V===null?(L=V=$,S=K):V=V.next=$,m|=H;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;$=h,h=$.next,$.next=null,o.lastBaseUpdate=$,o.shared.pending=null}}while(!0);V===null&&(S=K),o.baseState=S,o.firstBaseUpdate=L,o.lastBaseUpdate=V,u===null&&(o.shared.lanes=0),Pn|=m,e.lanes=m,e.memoizedState=K}}function Pm(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Fm(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Pm(n[e],t)}var or=T(null),Lo=T(0);function Jm(e,t){e=Cn,F(Lo,e),F(or,t),Cn=e|t.baseLanes}function pu(){F(Lo,Cn),F(or,or.current)}function gu(){Cn=Lo.current,X(or),X(Lo)}var Yn=0,Ce=null,Ve=null,gt=null,Ho=!1,sr=!1,ji=!1,Uo=0,yl=0,cr=null,Mb=0;function ct(){throw Error(s(321))}function xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ra(e[n],t[n]))return!1;return!0}function vu(e,t,n,i,o,u){return Yn=u,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?Nh:Bh,ji=!1,u=n(i,o),ji=!1,sr&&(u=Wm(t,n,i,o)),Im(e),u}function Im(e){U.H=Xo;var t=Ve!==null&&Ve.next!==null;if(Yn=0,gt=Ve=Ce=null,Ho=!1,yl=0,cr=null,t)throw Error(s(300));e===null||Et||(e=e.dependencies,e!==null&&Do(e)&&(Et=!0))}function Wm(e,t,n,i){Ce=e;var o=0;do{if(sr&&(cr=null),yl=0,sr=!1,25<=o)throw Error(s(301));if(o+=1,gt=Ve=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}U.H=$b,u=t(n,i)}while(sr);return u}function Nb(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?wl(t):t,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(Ce.flags|=1024),t}function bu(){var e=Uo!==0;return Uo=0,e}function yu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function wu(e){if(Ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ho=!1}Yn=0,gt=Ve=Ce=null,sr=!1,yl=Uo=0,cr=null}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ce.memoizedState=gt=e:gt=gt.next=e,gt}function xt(){if(Ve===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=gt===null?Ce.memoizedState:gt.next;if(t!==null)gt=t,Ve=e;else{if(e===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},gt===null?Ce.memoizedState=gt=e:gt=gt.next=e}return gt}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wl(e){var t=yl;return yl+=1,cr===null&&(cr=[]),e=Qm(cr,e,t),t=Ce,(gt===null?t.memoizedState:gt.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?Nh:Bh),e}function $o(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wl(e);if(e.$$typeof===q)return _t(e)}throw Error(s(438,String(e)))}function ju(e){var t=null,n=Ce.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ce.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Su(),Ce.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ee;return t.index++,n}function bn(e,t){return typeof t=="function"?t(e):t}function qo(e){var t=xt();return Eu(t,Ve,e)}function Eu(e,t,n){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=n;var o=e.baseQueue,u=i.pending;if(u!==null){if(o!==null){var m=o.next;o.next=u.next,u.next=m}t.baseQueue=o=u,i.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{t=o.next;var h=m=null,S=null,L=t,V=!1;do{var K=L.lane&-536870913;if(K!==L.lane?(Re&K)===K:(Yn&K)===K){var H=L.revertLane;if(H===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),K===rr&&(V=!0);else if((Yn&H)===H){L=L.next,H===rr&&(V=!0);continue}else K={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(h=S=K,m=u):S=S.next=K,Ce.lanes|=H,Pn|=H;K=L.action,ji&&n(u,K),u=L.hasEagerState?L.eagerState:n(u,K)}else H={lane:K,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(h=S=H,m=u):S=S.next=H,Ce.lanes|=K,Pn|=K;L=L.next}while(L!==null&&L!==t);if(S===null?m=u:S.next=h,!ra(u,e.memoizedState)&&(Et=!0,V&&(n=lr,n!==null)))throw n;e.memoizedState=u,e.baseState=m,e.baseQueue=S,i.lastRenderedState=u}return o===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Cu(e){var t=xt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,u=t.memoizedState;if(o!==null){n.pending=null;var m=o=o.next;do u=e(u,m.action),m=m.next;while(m!==o);ra(u,t.memoizedState)||(Et=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function eh(e,t,n){var i=Ce,o=xt(),u=_e;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=t();var m=!ra((Ve||o).memoizedState,n);m&&(o.memoizedState=n,Et=!0),o=o.queue;var h=nh.bind(null,i,o,e);if(Sl(2048,8,h,[e]),o.getSnapshot!==t||m||gt!==null&&gt.memoizedState.tag&1){if(i.flags|=2048,ur(9,Yo(),ah.bind(null,i,o,n,t),null),Ke===null)throw Error(s(349));u||(Yn&124)!==0||th(i,t,n)}return n}function th(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t=Su(),Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ah(e,t,n,i){t.value=n,t.getSnapshot=i,ih(t)&&rh(e)}function nh(e,t,n){return n(function(){ih(t)&&rh(e)})}function ih(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ra(e,n)}catch{return!0}}function rh(e){var t=tr(e,2);t!==null&&da(t,e,2)}function Au(e){var t=Jt();if(typeof e=="function"){var n=e;if(e=n(),ji){ht(!0);try{n()}finally{ht(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t}function lh(e,t,n,i){return e.baseState=n,Eu(e,Ve,typeof i=="function"?i:bn)}function Bb(e,t,n,i,o){if(Vo(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};U.T!==null?n(!0):u.isTransition=!1,i(u),n=t.pending,n===null?(u.next=t.pending=u,oh(t,u)):(u.next=n.next,t.pending=n.next=u)}}function oh(e,t){var n=t.action,i=t.payload,o=e.state;if(t.isTransition){var u=U.T,m={};U.T=m;try{var h=n(o,i),S=U.S;S!==null&&S(m,h),sh(e,t,h)}catch(L){Tu(e,t,L)}finally{U.T=u}}else try{u=n(o,i),sh(e,t,u)}catch(L){Tu(e,t,L)}}function sh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ch(e,t,i)},function(i){return Tu(e,t,i)}):ch(e,t,n)}function ch(e,t,n){t.status="fulfilled",t.value=n,uh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,oh(e,n)))}function Tu(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,uh(t),t=t.next;while(t!==i)}e.action=null}function uh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dh(e,t){return t}function fh(e,t){if(_e){var n=Ke.formState;if(n!==null){e:{var i=Ce;if(_e){if(lt){t:{for(var o=lt,u=Pa;o.nodeType!==8;){if(!u){o=null;break t}if(o=Ha(o.nextSibling),o===null){o=null;break t}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){lt=Ha(o.nextSibling),i=o.data==="F!";break e}}bi(i)}i=!1}i&&(t=n[0])}}return n=Jt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dh,lastRenderedState:t},n.queue=i,n=Oh.bind(null,Ce,i),i.dispatch=n,i=Au(!1),u=Du.bind(null,Ce,!1,i.queue),i=Jt(),o={state:t,dispatch:null,action:e,pending:null},i.queue=o,n=Bb.bind(null,Ce,o,u,n),o.dispatch=n,i.memoizedState=e,[t,n,!1]}function mh(e){var t=xt();return hh(t,Ve,e)}function hh(e,t,n){if(t=Eu(e,t,dh)[0],e=qo(bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=wl(t)}catch(m){throw m===pl?Bo:m}else i=t;t=xt();var o=t.queue,u=o.dispatch;return n!==t.memoizedState&&(Ce.flags|=2048,ur(9,Yo(),_b.bind(null,o,n),null)),[i,u,e]}function _b(e,t){e.action=t}function ph(e){var t=xt(),n=Ve;if(n!==null)return hh(t,n,e);xt(),t=t.memoizedState,n=xt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ur(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ce.updateQueue,t===null&&(t=Su(),Ce.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Yo(){return{destroy:void 0,resource:void 0}}function gh(){return xt().memoizedState}function Go(e,t,n,i){var o=Jt();i=i===void 0?null:i,Ce.flags|=e,o.memoizedState=ur(1|t,Yo(),n,i)}function Sl(e,t,n,i){var o=xt();i=i===void 0?null:i;var u=o.memoizedState.inst;Ve!==null&&i!==null&&xu(i,Ve.memoizedState.deps)?o.memoizedState=ur(t,u,n,i):(Ce.flags|=e,o.memoizedState=ur(1|t,u,n,i))}function xh(e,t){Go(8390656,8,e,t)}function vh(e,t){Sl(2048,8,e,t)}function bh(e,t){return Sl(4,2,e,t)}function yh(e,t){return Sl(4,4,e,t)}function wh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sh(e,t,n){n=n!=null?n.concat([e]):null,Sl(4,4,wh.bind(null,t,e),n)}function ku(){}function jh(e,t){var n=xt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&xu(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Eh(e,t){var n=xt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&xu(t,i[1]))return i[0];if(i=e(),ji){ht(!0);try{e()}finally{ht(!1)}}return n.memoizedState=[i,t],i}function zu(e,t,n){return n===void 0||(Yn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Tp(),Ce.lanes|=e,Pn|=e,n)}function Ch(e,t,n,i){return ra(n,t)?n:or.current!==null?(e=zu(e,n,i),ra(e,t)||(Et=!0),e):(Yn&42)===0?(Et=!0,e.memoizedState=n):(e=Tp(),Ce.lanes|=e,Pn|=e,t)}function Ah(e,t,n,i,o){var u=J.p;J.p=u!==0&&8>u?u:8;var m=U.T,h={};U.T=h,Du(e,!1,t,n);try{var S=o(),L=U.S;if(L!==null&&L(h,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var V=Db(S,i);jl(e,t,V,ua(e))}else jl(e,t,i,ua(e))}catch(K){jl(e,t,{then:function(){},status:"rejected",reason:K},ua())}finally{J.p=u,U.T=m}}function Lb(){}function Ru(e,t,n,i){if(e.tag!==5)throw Error(s(476));var o=Th(e).queue;Ah(e,o,t,re,n===null?Lb:function(){return kh(e),n(i)})}function Th(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:re},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function kh(e){var t=Th(e).next.queue;jl(e,t,{},ua())}function Ou(){return _t(ql)}function zh(){return xt().memoizedState}function Rh(){return xt().memoizedState}function Hb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ua();e=$n(n);var i=qn(t,e,n);i!==null&&(da(i,t,n),xl(i,t,n)),t={cache:ou()},e.payload=t;return}t=t.return}}function Ub(e,t,n){var i=ua();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Vo(e)?Dh(t,n):(n=Jc(e,t,n,i),n!==null&&(da(n,e,i),Mh(n,t,i)))}function Oh(e,t,n){var i=ua();jl(e,t,n,i)}function jl(e,t,n,i){var o={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vo(e))Dh(t,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,h=u(m,n);if(o.hasEagerState=!0,o.eagerState=h,ra(h,m))return To(e,t,o,0),Ke===null&&Ao(),!1}catch{}finally{}if(n=Jc(e,t,o,i),n!==null)return da(n,e,i),Mh(n,t,i),!0}return!1}function Du(e,t,n,i){if(i={lane:2,revertLane:ud(),action:i,hasEagerState:!1,eagerState:null,next:null},Vo(e)){if(t)throw Error(s(479))}else t=Jc(e,n,i,2),t!==null&&da(t,e,2)}function Vo(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Dh(e,t){sr=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mh(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,qi(e,n)}}var Xo={readContext:_t,use:$o,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct},Nh={readContext:_t,use:$o,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:xh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Go(4194308,4,wh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){Go(4,2,e,t)},useMemo:function(e,t){var n=Jt();t=t===void 0?null:t;var i=e();if(ji){ht(!0);try{e()}finally{ht(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Jt();if(n!==void 0){var o=n(t);if(ji){ht(!0);try{n(t)}finally{ht(!1)}}}else o=t;return i.memoizedState=i.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=Ub.bind(null,Ce,e),[i.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:function(e){e=Au(e);var t=e.queue,n=Oh.bind(null,Ce,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ku,useDeferredValue:function(e,t){var n=Jt();return zu(n,e,t)},useTransition:function(){var e=Au(!1);return e=Ah.bind(null,Ce,e.queue,!0,!1),Jt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ce,o=Jt();if(_e){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ke===null)throw Error(s(349));(Re&124)!==0||th(i,t,n)}o.memoizedState=n;var u={value:n,getSnapshot:t};return o.queue=u,xh(nh.bind(null,i,u,e),[e]),i.flags|=2048,ur(9,Yo(),ah.bind(null,i,u,n,t),null),n},useId:function(){var e=Jt(),t=Ke.identifierPrefix;if(_e){var n=gn,i=pn;n=(i&~(1<<32-Ue(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=Uo++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Mb++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ou,useFormState:fh,useActionState:fh,useOptimistic:function(e){var t=Jt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Du.bind(null,Ce,!0,n),n.dispatch=t,[e,t]},useMemoCache:ju,useCacheRefresh:function(){return Jt().memoizedState=Hb.bind(null,Ce)}},Bh={readContext:_t,use:$o,useCallback:jh,useContext:_t,useEffect:vh,useImperativeHandle:Sh,useInsertionEffect:bh,useLayoutEffect:yh,useMemo:Eh,useReducer:qo,useRef:gh,useState:function(){return qo(bn)},useDebugValue:ku,useDeferredValue:function(e,t){var n=xt();return Ch(n,Ve.memoizedState,e,t)},useTransition:function(){var e=qo(bn)[0],t=xt().memoizedState;return[typeof e=="boolean"?e:wl(e),t]},useSyncExternalStore:eh,useId:zh,useHostTransitionStatus:Ou,useFormState:mh,useActionState:mh,useOptimistic:function(e,t){var n=xt();return lh(n,Ve,e,t)},useMemoCache:ju,useCacheRefresh:Rh},$b={readContext:_t,use:$o,useCallback:jh,useContext:_t,useEffect:vh,useImperativeHandle:Sh,useInsertionEffect:bh,useLayoutEffect:yh,useMemo:Eh,useReducer:Cu,useRef:gh,useState:function(){return Cu(bn)},useDebugValue:ku,useDeferredValue:function(e,t){var n=xt();return Ve===null?zu(n,e,t):Ch(n,Ve.memoizedState,e,t)},useTransition:function(){var e=Cu(bn)[0],t=xt().memoizedState;return[typeof e=="boolean"?e:wl(e),t]},useSyncExternalStore:eh,useId:zh,useHostTransitionStatus:Ou,useFormState:ph,useActionState:ph,useOptimistic:function(e,t){var n=xt();return Ve!==null?lh(n,Ve,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ju,useCacheRefresh:Rh},dr=null,El=0;function Qo(e){var t=El;return El+=1,dr===null&&(dr=[]),Qm(dr,e,t)}function Cl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Zo(e,t){throw t.$$typeof===k?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _h(e){var t=e._init;return t(e._payload)}function Lh(e){function t(R,C){if(e){var M=R.deletions;M===null?(R.deletions=[C],R.flags|=16):M.push(C)}}function n(R,C){if(!e)return null;for(;C!==null;)t(R,C),C=C.sibling;return null}function i(R){for(var C=new Map;R!==null;)R.key!==null?C.set(R.key,R):C.set(R.index,R),R=R.sibling;return C}function o(R,C){return R=hn(R,C),R.index=0,R.sibling=null,R}function u(R,C,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<C?(R.flags|=67108866,C):M):(R.flags|=67108866,C)):(R.flags|=1048576,C)}function m(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function h(R,C,M,Q){return C===null||C.tag!==6?(C=Wc(M,R.mode,Q),C.return=R,C):(C=o(C,M),C.return=R,C)}function S(R,C,M,Q){var se=M.type;return se===z?V(R,C,M.props.children,Q,M.key):C!==null&&(C.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ne&&_h(se)===C.type)?(C=o(C,M.props),Cl(C,M),C.return=R,C):(C=zo(M.type,M.key,M.props,null,R.mode,Q),Cl(C,M),C.return=R,C)}function L(R,C,M,Q){return C===null||C.tag!==4||C.stateNode.containerInfo!==M.containerInfo||C.stateNode.implementation!==M.implementation?(C=eu(M,R.mode,Q),C.return=R,C):(C=o(C,M.children||[]),C.return=R,C)}function V(R,C,M,Q,se){return C===null||C.tag!==7?(C=pi(M,R.mode,Q,se),C.return=R,C):(C=o(C,M),C.return=R,C)}function K(R,C,M){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Wc(""+C,R.mode,M),C.return=R,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case E:return M=zo(C.type,C.key,C.props,null,R.mode,M),Cl(M,C),M.return=R,M;case D:return C=eu(C,R.mode,M),C.return=R,C;case ne:var Q=C._init;return C=Q(C._payload),K(R,C,M)}if(he(C)||oe(C))return C=pi(C,R.mode,M,null),C.return=R,C;if(typeof C.then=="function")return K(R,Qo(C),M);if(C.$$typeof===q)return K(R,Mo(R,C),M);Zo(R,C)}return null}function H(R,C,M,Q){var se=C!==null?C.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return se!==null?null:h(R,C,""+M,Q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case E:return M.key===se?S(R,C,M,Q):null;case D:return M.key===se?L(R,C,M,Q):null;case ne:return se=M._init,M=se(M._payload),H(R,C,M,Q)}if(he(M)||oe(M))return se!==null?null:V(R,C,M,Q,null);if(typeof M.then=="function")return H(R,C,Qo(M),Q);if(M.$$typeof===q)return H(R,C,Mo(R,M),Q);Zo(R,M)}return null}function $(R,C,M,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return R=R.get(M)||null,h(C,R,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return R=R.get(Q.key===null?M:Q.key)||null,S(C,R,Q,se);case D:return R=R.get(Q.key===null?M:Q.key)||null,L(C,R,Q,se);case ne:var Te=Q._init;return Q=Te(Q._payload),$(R,C,M,Q,se)}if(he(Q)||oe(Q))return R=R.get(M)||null,V(C,R,Q,se,null);if(typeof Q.then=="function")return $(R,C,M,Qo(Q),se);if(Q.$$typeof===q)return $(R,C,M,Mo(C,Q),se);Zo(C,Q)}return null}function ge(R,C,M,Q){for(var se=null,Te=null,ue=C,pe=C=0,At=null;ue!==null&&pe<M.length;pe++){ue.index>pe?(At=ue,ue=null):At=ue.sibling;var Me=H(R,ue,M[pe],Q);if(Me===null){ue===null&&(ue=At);break}e&&ue&&Me.alternate===null&&t(R,ue),C=u(Me,C,pe),Te===null?se=Me:Te.sibling=Me,Te=Me,ue=At}if(pe===M.length)return n(R,ue),_e&&xi(R,pe),se;if(ue===null){for(;pe<M.length;pe++)ue=K(R,M[pe],Q),ue!==null&&(C=u(ue,C,pe),Te===null?se=ue:Te.sibling=ue,Te=ue);return _e&&xi(R,pe),se}for(ue=i(ue);pe<M.length;pe++)At=$(ue,R,pe,M[pe],Q),At!==null&&(e&&At.alternate!==null&&ue.delete(At.key===null?pe:At.key),C=u(At,C,pe),Te===null?se=At:Te.sibling=At,Te=At);return e&&ue.forEach(function(ii){return t(R,ii)}),_e&&xi(R,pe),se}function me(R,C,M,Q){if(M==null)throw Error(s(151));for(var se=null,Te=null,ue=C,pe=C=0,At=null,Me=M.next();ue!==null&&!Me.done;pe++,Me=M.next()){ue.index>pe?(At=ue,ue=null):At=ue.sibling;var ii=H(R,ue,Me.value,Q);if(ii===null){ue===null&&(ue=At);break}e&&ue&&ii.alternate===null&&t(R,ue),C=u(ii,C,pe),Te===null?se=ii:Te.sibling=ii,Te=ii,ue=At}if(Me.done)return n(R,ue),_e&&xi(R,pe),se;if(ue===null){for(;!Me.done;pe++,Me=M.next())Me=K(R,Me.value,Q),Me!==null&&(C=u(Me,C,pe),Te===null?se=Me:Te.sibling=Me,Te=Me);return _e&&xi(R,pe),se}for(ue=i(ue);!Me.done;pe++,Me=M.next())Me=$(ue,R,pe,Me.value,Q),Me!==null&&(e&&Me.alternate!==null&&ue.delete(Me.key===null?pe:Me.key),C=u(Me,C,pe),Te===null?se=Me:Te.sibling=Me,Te=Me);return e&&ue.forEach(function(q1){return t(R,q1)}),_e&&xi(R,pe),se}function Qe(R,C,M,Q){if(typeof M=="object"&&M!==null&&M.type===z&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case E:e:{for(var se=M.key;C!==null;){if(C.key===se){if(se=M.type,se===z){if(C.tag===7){n(R,C.sibling),Q=o(C,M.props.children),Q.return=R,R=Q;break e}}else if(C.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ne&&_h(se)===C.type){n(R,C.sibling),Q=o(C,M.props),Cl(Q,M),Q.return=R,R=Q;break e}n(R,C);break}else t(R,C);C=C.sibling}M.type===z?(Q=pi(M.props.children,R.mode,Q,M.key),Q.return=R,R=Q):(Q=zo(M.type,M.key,M.props,null,R.mode,Q),Cl(Q,M),Q.return=R,R=Q)}return m(R);case D:e:{for(se=M.key;C!==null;){if(C.key===se)if(C.tag===4&&C.stateNode.containerInfo===M.containerInfo&&C.stateNode.implementation===M.implementation){n(R,C.sibling),Q=o(C,M.children||[]),Q.return=R,R=Q;break e}else{n(R,C);break}else t(R,C);C=C.sibling}Q=eu(M,R.mode,Q),Q.return=R,R=Q}return m(R);case ne:return se=M._init,M=se(M._payload),Qe(R,C,M,Q)}if(he(M))return ge(R,C,M,Q);if(oe(M)){if(se=oe(M),typeof se!="function")throw Error(s(150));return M=se.call(M),me(R,C,M,Q)}if(typeof M.then=="function")return Qe(R,C,Qo(M),Q);if(M.$$typeof===q)return Qe(R,C,Mo(R,M),Q);Zo(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,C!==null&&C.tag===6?(n(R,C.sibling),Q=o(C,M),Q.return=R,R=Q):(n(R,C),Q=Wc(M,R.mode,Q),Q.return=R,R=Q),m(R)):n(R,C)}return function(R,C,M,Q){try{El=0;var se=Qe(R,C,M,Q);return dr=null,se}catch(ue){if(ue===pl||ue===Bo)throw ue;var Te=la(29,ue,null,R.mode);return Te.lanes=Q,Te.return=R,Te}finally{}}}var fr=Lh(!0),Hh=Lh(!1),Ca=T(null),Fa=null;function Gn(e){var t=e.alternate;F(yt,yt.current&1),F(Ca,e),Fa===null&&(t===null||or.current!==null||t.memoizedState!==null)&&(Fa=e)}function Uh(e){if(e.tag===22){if(F(yt,yt.current),F(Ca,e),Fa===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Fa=e)}}else Vn()}function Vn(){F(yt,yt.current),F(Ca,Ca.current)}function yn(e){X(Ca),Fa===e&&(Fa=null),X(yt)}var yt=T(0);function Ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Sd(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Mu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nu={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ua(),o=$n(i);o.payload=t,n!=null&&(o.callback=n),t=qn(e,o,i),t!==null&&(da(t,e,i),xl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ua(),o=$n(i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=qn(e,o,i),t!==null&&(da(t,e,i),xl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ua(),i=$n(n);i.tag=2,t!=null&&(i.callback=t),t=qn(e,i,n),t!==null&&(da(t,e,n),xl(t,e,n))}};function $h(e,t,n,i,o,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,m):t.prototype&&t.prototype.isPureReactComponent?!ol(n,i)||!ol(o,u):!0}function qh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Nu.enqueueReplaceState(t,t.state,null)}function Ei(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}var Po=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Yh(e){Po(e)}function Gh(e){console.error(e)}function Vh(e){Po(e)}function Fo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Xh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Bu(e,t,n){return n=$n(n),n.tag=3,n.payload={element:null},n.callback=function(){Fo(e,t)},n}function Qh(e){return e=$n(e),e.tag=3,e}function Zh(e,t,n,i){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var u=i.value;e.payload=function(){return o(u)},e.callback=function(){Xh(t,n,i)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Xh(t,n,i),typeof o!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var h=i.stack;this.componentDidCatch(i.value,{componentStack:h!==null?h:""})})}function qb(e,t,n,i,o){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&fl(t,n,o,!0),n=Ca.current,n!==null){switch(n.tag){case 13:return Fa===null?rd():n.alternate===null&&ot===0&&(ot=3),n.flags&=-257,n.flags|=65536,n.lanes=o,i===uu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),od(e,i,o)),!1;case 22:return n.flags|=65536,i===uu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),od(e,i,o)),!1}throw Error(s(435,n.tag))}return od(e,i,o),rd(),!1}if(_e)return t=Ca.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,i!==nu&&(e=Error(s(422),{cause:i}),dl(wa(e,n)))):(i!==nu&&(t=Error(s(423),{cause:i}),dl(wa(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,i=wa(i,n),o=Bu(e.stateNode,i,o),mu(e,o),ot!==4&&(ot=2)),!1;var u=Error(s(520),{cause:i});if(u=wa(u,n),Dl===null?Dl=[u]:Dl.push(u),ot!==4&&(ot=2),t===null)return!0;i=wa(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Bu(n.stateNode,i,e),mu(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Fn===null||!Fn.has(u))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Qh(o),Zh(o,e,n,i),mu(n,o),!1}n=n.return}while(n!==null);return!1}var Kh=Error(s(461)),Et=!1;function Ot(e,t,n,i){t.child=e===null?Hh(t,null,n,i):fr(t,e.child,n,i)}function Ph(e,t,n,i,o){n=n.render;var u=t.ref;if("ref"in i){var m={};for(var h in i)h!=="ref"&&(m[h]=i[h])}else m=i;return wi(t),i=vu(e,t,n,m,u,o),h=bu(),e!==null&&!Et?(yu(e,t,o),wn(e,t,o)):(_e&&h&&tu(t),t.flags|=1,Ot(e,t,i,o),t.child)}function Fh(e,t,n,i,o){if(e===null){var u=n.type;return typeof u=="function"&&!Ic(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Jh(e,t,u,i,o)):(e=zo(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Gu(e,o)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:ol,n(m,i)&&e.ref===t.ref)return wn(e,t,o)}return t.flags|=1,e=hn(u,i),e.ref=t.ref,e.return=t,t.child=e}function Jh(e,t,n,i,o){if(e!==null){var u=e.memoizedProps;if(ol(u,i)&&e.ref===t.ref)if(Et=!1,t.pendingProps=i=u,Gu(e,o))(e.flags&131072)!==0&&(Et=!0);else return t.lanes=e.lanes,wn(e,t,o)}return _u(e,t,n,i,o)}function Ih(e,t,n){var i=t.pendingProps,o=i.children,u=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=u!==null?u.baseLanes|n:n,e!==null){for(o=t.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;t.childLanes=u&~i}else t.childLanes=0,t.child=null;return Wh(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&No(t,u!==null?u.cachePool:null),u!==null?Jm(t,u):pu(),Uh(t);else return t.lanes=t.childLanes=536870912,Wh(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(No(t,u.cachePool),Jm(t,u),Vn(),t.memoizedState=null):(e!==null&&No(t,null),pu(),Vn());return Ot(e,t,o,n),t.child}function Wh(e,t,n,i){var o=cu();return o=o===null?null:{parent:bt._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&No(t,null),pu(),Uh(t),e!==null&&fl(e,t,i,!0),null}function Jo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _u(e,t,n,i,o){return wi(t),n=vu(e,t,n,i,void 0,o),i=bu(),e!==null&&!Et?(yu(e,t,o),wn(e,t,o)):(_e&&i&&tu(t),t.flags|=1,Ot(e,t,n,o),t.child)}function ep(e,t,n,i,o,u){return wi(t),t.updateQueue=null,n=Wm(t,i,n,o),Im(e),i=bu(),e!==null&&!Et?(yu(e,t,u),wn(e,t,u)):(_e&&i&&tu(t),t.flags|=1,Ot(e,t,n,u),t.child)}function tp(e,t,n,i,o){if(wi(t),t.stateNode===null){var u=ar,m=n.contextType;typeof m=="object"&&m!==null&&(u=_t(m)),u=new n(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Nu,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},du(t),m=n.contextType,u.context=typeof m=="object"&&m!==null?_t(m):ar,u.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Mu(t,n,m,i),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Nu.enqueueReplaceState(u,u.state,null),bl(t,i,u,o),vl(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var h=t.memoizedProps,S=Ei(n,h);u.props=S;var L=u.context,V=n.contextType;m=ar,typeof V=="object"&&V!==null&&(m=_t(V));var K=n.getDerivedStateFromProps;V=typeof K=="function"||typeof u.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,V||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h||L!==m)&&qh(t,u,i,m),Un=!1;var H=t.memoizedState;u.state=H,bl(t,i,u,o),vl(),L=t.memoizedState,h||H!==L||Un?(typeof K=="function"&&(Mu(t,n,K,i),L=t.memoizedState),(S=Un||$h(t,n,S,i,H,L,m))?(V||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=L),u.props=i,u.state=L,u.context=m,i=S):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,fu(e,t),m=t.memoizedProps,V=Ei(n,m),u.props=V,K=t.pendingProps,H=u.context,L=n.contextType,S=ar,typeof L=="object"&&L!==null&&(S=_t(L)),h=n.getDerivedStateFromProps,(L=typeof h=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==K||H!==S)&&qh(t,u,i,S),Un=!1,H=t.memoizedState,u.state=H,bl(t,i,u,o),vl();var $=t.memoizedState;m!==K||H!==$||Un||e!==null&&e.dependencies!==null&&Do(e.dependencies)?(typeof h=="function"&&(Mu(t,n,h,i),$=t.memoizedState),(V=Un||$h(t,n,V,i,H,$,S)||e!==null&&e.dependencies!==null&&Do(e.dependencies))?(L||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,$,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,$,S)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=$),u.props=i,u.state=$,u.context=S,i=V):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,Jo(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=fr(t,e.child,null,o),t.child=fr(t,null,n,o)):Ot(e,t,n,o),t.memoizedState=u.state,e=t.child):e=wn(e,t,o),e}function ap(e,t,n,i){return ul(),t.flags|=256,Ot(e,t,n,i),t.child}var Lu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hu(e){return{baseLanes:e,cachePool:Gm()}}function Uu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Aa),e}function np(e,t,n){var i=t.pendingProps,o=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(yt.current&2)!==0),m&&(o=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(o?Gn(t):Vn(),_e){var h=lt,S;if(S=h){e:{for(S=h,h=Pa;S.nodeType!==8;){if(!h){h=null;break e}if(S=Ha(S.nextSibling),S===null){h=null;break e}}h=S}h!==null?(t.memoizedState={dehydrated:h,treeContext:gi!==null?{id:pn,overflow:gn}:null,retryLane:536870912,hydrationErrors:null},S=la(18,null,null,0),S.stateNode=h,S.return=t,t.child=S,Xt=t,lt=null,S=!0):S=!1}S||bi(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Sd(h)?t.lanes=32:t.lanes=536870912,null;yn(t)}return h=i.children,i=i.fallback,o?(Vn(),o=t.mode,h=Io({mode:"hidden",children:h},o),i=pi(i,o,n,null),h.return=t,i.return=t,h.sibling=i,t.child=h,o=t.child,o.memoizedState=Hu(n),o.childLanes=Uu(e,m,n),t.memoizedState=Lu,i):(Gn(t),$u(t,h))}if(S=e.memoizedState,S!==null&&(h=S.dehydrated,h!==null)){if(u)t.flags&256?(Gn(t),t.flags&=-257,t=qu(e,t,n)):t.memoizedState!==null?(Vn(),t.child=e.child,t.flags|=128,t=null):(Vn(),o=i.fallback,h=t.mode,i=Io({mode:"visible",children:i.children},h),o=pi(o,h,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,fr(t,e.child,null,n),i=t.child,i.memoizedState=Hu(n),i.childLanes=Uu(e,m,n),t.memoizedState=Lu,t=o);else if(Gn(t),Sd(h)){if(m=h.nextSibling&&h.nextSibling.dataset,m)var L=m.dgst;m=L,i=Error(s(419)),i.stack="",i.digest=m,dl({value:i,source:null,stack:null}),t=qu(e,t,n)}else if(Et||fl(e,t,n,!1),m=(n&e.childLanes)!==0,Et||m){if(m=Ke,m!==null&&(i=n&-n,i=(i&42)!==0?1:Yi(i),i=(i&(m.suspendedLanes|n))!==0?0:i,i!==0&&i!==S.retryLane))throw S.retryLane=i,tr(e,i),da(m,e,i),Kh;h.data==="$?"||rd(),t=qu(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,lt=Ha(h.nextSibling),Xt=t,_e=!0,vi=null,Pa=!1,e!==null&&(ja[Ea++]=pn,ja[Ea++]=gn,ja[Ea++]=gi,pn=e.id,gn=e.overflow,gi=t),t=$u(t,i.children),t.flags|=4096);return t}return o?(Vn(),o=i.fallback,h=t.mode,S=e.child,L=S.sibling,i=hn(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,L!==null?o=hn(L,o):(o=pi(o,h,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,h=e.child.memoizedState,h===null?h=Hu(n):(S=h.cachePool,S!==null?(L=bt._currentValue,S=S.parent!==L?{parent:L,pool:L}:S):S=Gm(),h={baseLanes:h.baseLanes|n,cachePool:S}),o.memoizedState=h,o.childLanes=Uu(e,m,n),t.memoizedState=Lu,i):(Gn(t),n=e.child,e=n.sibling,n=hn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function $u(e,t){return t=Io({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Io(e,t){return e=la(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function qu(e,t,n){return fr(t,e.child,null,n),e=$u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ip(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ru(e.return,t,n)}function Yu(e,t,n,i,o){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=n,u.tailMode=o)}function rp(e,t,n){var i=t.pendingProps,o=i.revealOrder,u=i.tail;if(Ot(e,t,i.children,n),i=yt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ip(e,n,t);else if(e.tag===19)ip(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(F(yt,i),o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ko(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Yu(t,!1,o,n,u);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ko(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Yu(t,!0,n,null,u);break;case"together":Yu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(fl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Do(e)))}function Yb(e,t,n){switch(t.tag){case 3:W(t,t.stateNode.containerInfo),Hn(t,bt,e.memoizedState.cache),ul();break;case 27:case 5:we(t);break;case 4:W(t,t.stateNode.containerInfo);break;case 10:Hn(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?np(e,t,n):(Gn(t),e=wn(e,t,n),e!==null?e.sibling:null);Gn(t);break;case 19:var o=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(fl(e,t,n,!1),i=(n&t.childLanes)!==0),o){if(i)return rp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),F(yt,yt.current),i)break;return null;case 22:case 23:return t.lanes=0,Ih(e,t,n);case 24:Hn(t,bt,e.memoizedState.cache)}return wn(e,t,n)}function lp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Et=!0;else{if(!Gu(e,n)&&(t.flags&128)===0)return Et=!1,Yb(e,t,n);Et=(e.flags&131072)!==0}else Et=!1,_e&&(t.flags&1048576)!==0&&_m(t,Oo,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,o=i._init;if(i=o(i._payload),t.type=i,typeof i=="function")Ic(i)?(e=Ei(i,e),t.tag=1,t=tp(null,t,i,e,n)):(t.tag=0,t=_u(null,t,i,e,n));else{if(i!=null){if(o=i.$$typeof,o===I){t.tag=11,t=Ph(null,t,i,e,n);break e}else if(o===P){t.tag=14,t=Fh(null,t,i,e,n);break e}}throw t=xe(i)||i,Error(s(306,t,""))}}return t;case 0:return _u(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,o=Ei(i,t.pendingProps),tp(e,t,i,o,n);case 3:e:{if(W(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var u=t.memoizedState;o=u.element,fu(e,t),bl(t,i,null,n);var m=t.memoizedState;if(i=m.cache,Hn(t,bt,i),i!==u.cache&&lu(t,[bt],n,!0),vl(),i=m.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=ap(e,t,i,n);break e}else if(i!==o){o=wa(Error(s(424)),t),dl(o),t=ap(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(lt=Ha(e.firstChild),Xt=t,_e=!0,vi=null,Pa=!0,n=Hh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ul(),i===o){t=wn(e,t,n);break e}Ot(e,t,i,n)}t=t.child}return t;case 26:return Jo(e,t),e===null?(n=ug(t.type,null,t.pendingProps,null))?t.memoizedState=n:_e||(n=t.type,e=t.pendingProps,i=fs(ae.current).createElement(n),i[Be]=t,i[Oe]=e,Mt(i,n,e),We(i),t.stateNode=i):t.memoizedState=ug(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return we(t),e===null&&_e&&(i=t.stateNode=og(t.type,t.pendingProps,ae.current),Xt=t,Pa=!0,o=lt,Wn(t.type)?(jd=o,lt=Ha(i.firstChild)):lt=o),Ot(e,t,t.pendingProps.children,n),Jo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((o=i=lt)&&(i=g1(i,t.type,t.pendingProps,Pa),i!==null?(t.stateNode=i,Xt=t,lt=Ha(i.firstChild),Pa=!1,o=!0):o=!1),o||bi(t)),we(t),o=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,i=u.children,bd(o,u)?i=null:m!==null&&bd(o,m)&&(t.flags|=32),t.memoizedState!==null&&(o=vu(e,t,Nb,null,null,n),ql._currentValue=o),Jo(e,t),Ot(e,t,i,n),t.child;case 6:return e===null&&_e&&((e=n=lt)&&(n=x1(n,t.pendingProps,Pa),n!==null?(t.stateNode=n,Xt=t,lt=null,e=!0):e=!1),e||bi(t)),null;case 13:return np(e,t,n);case 4:return W(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=fr(t,null,i,n):Ot(e,t,i,n),t.child;case 11:return Ph(e,t,t.type,t.pendingProps,n);case 7:return Ot(e,t,t.pendingProps,n),t.child;case 8:return Ot(e,t,t.pendingProps.children,n),t.child;case 12:return Ot(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Hn(t,t.type,i.value),Ot(e,t,i.children,n),t.child;case 9:return o=t.type._context,i=t.pendingProps.children,wi(t),o=_t(o),i=i(o),t.flags|=1,Ot(e,t,i,n),t.child;case 14:return Fh(e,t,t.type,t.pendingProps,n);case 15:return Jh(e,t,t.type,t.pendingProps,n);case 19:return rp(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=Io(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=hn(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Ih(e,t,n);case 24:return wi(t),i=_t(bt),e===null?(o=cu(),o===null&&(o=Ke,u=ou(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=n),o=u),t.memoizedState={parent:i,cache:o},du(t),Hn(t,bt,o)):((e.lanes&n)!==0&&(fu(e,t),bl(t,null,null,n),vl()),o=e.memoizedState,u=t.memoizedState,o.parent!==i?(o={parent:i,cache:i},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Hn(t,bt,i)):(i=u.cache,Hn(t,bt,i),i!==o.cache&&lu(t,[bt],n,!0))),Ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Sn(e){e.flags|=4}function op(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pg(t)){if(t=Ca.current,t!==null&&((Re&4194048)===Re?Fa!==null:(Re&62914560)!==Re&&(Re&536870912)===0||t!==Fa))throw gl=uu,Vm;e.flags|=8192}}function Wo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?va():536870912,e.lanes|=t,gr|=t)}function Al(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&65011712,i|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Gb(e,t,n){var i=t.pendingProps;switch(au(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return nt(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),vn(bt),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(cl(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Um())),nt(t),null;case 26:return n=t.memoizedState,e===null?(Sn(t),n!==null?(nt(t),op(t,n)):(nt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Sn(t),nt(t),op(t,n)):(nt(t),t.flags&=-16777217):(e.memoizedProps!==i&&Sn(t),nt(t),t.flags&=-16777217),null;case 27:Ae(t),n=ae.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return nt(t),null}e=te.current,cl(t)?Lm(t):(e=og(o,i,n),t.stateNode=e,Sn(t))}return nt(t),null;case 5:if(Ae(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return nt(t),null}if(e=te.current,cl(t))Lm(t);else{switch(o=fs(ae.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}e[Be]=t,e[Oe]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(Mt(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Sn(t)}}return nt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Sn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=ae.current,cl(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,o=Xt,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}e[Be]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||eg(e.nodeValue,n)),e||bi(t)}else e=fs(e).createTextNode(i),e[Be]=t,t.stateNode=e}return nt(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=cl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[Be]=t}else ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),o=!1}else o=Um(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(yn(t),t):(yn(t),null)}if(yn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool);var u=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==o&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Wo(t,t.updateQueue),nt(t),null;case 4:return ye(),e===null&&hd(t.stateNode.containerInfo),nt(t),null;case 10:return vn(t.type),nt(t),null;case 19:if(X(yt),o=t.memoizedState,o===null)return nt(t),null;if(i=(t.flags&128)!==0,u=o.rendering,u===null)if(i)Al(o,!1);else{if(ot!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ko(e),u!==null){for(t.flags|=128,Al(o,!1),e=u.updateQueue,t.updateQueue=e,Wo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Bm(n,e),n=n.sibling;return F(yt,yt.current&1|2),t.child}e=e.sibling}o.tail!==null&&Je()>as&&(t.flags|=128,i=!0,Al(o,!1),t.lanes=4194304)}else{if(!i)if(e=Ko(u),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Wo(t,e),Al(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!_e)return nt(t),null}else 2*Je()-o.renderingStartTime>as&&n!==536870912&&(t.flags|=128,i=!0,Al(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Je(),t.sibling=null,e=yt.current,F(yt,i?e&1|2:e&1),t):(nt(t),null);case 22:case 23:return yn(t),gu(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),n=t.updateQueue,n!==null&&Wo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&X(Si),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vn(bt),nt(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Vb(e,t){switch(au(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(bt),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ae(t),null;case 13:if(yn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(yt),null;case 4:return ye(),null;case 10:return vn(t.type),null;case 22:case 23:return yn(t),gu(),e!==null&&X(Si),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return vn(bt),null;case 25:return null;default:return null}}function sp(e,t){switch(au(t),t.tag){case 3:vn(bt),ye();break;case 26:case 27:case 5:Ae(t);break;case 4:ye();break;case 13:yn(t);break;case 19:X(yt);break;case 10:vn(t.type);break;case 22:case 23:yn(t),gu(),e!==null&&X(Si);break;case 24:vn(bt)}}function Tl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){i=void 0;var u=n.create,m=n.inst;i=u(),m.destroy=i}n=n.next}while(n!==o)}}catch(h){Ze(t,t.return,h)}}function Xn(e,t,n){try{var i=t.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var u=o.next;i=u;do{if((i.tag&e)===e){var m=i.inst,h=m.destroy;if(h!==void 0){m.destroy=void 0,o=t;var S=n,L=h;try{L()}catch(V){Ze(o,S,V)}}}i=i.next}while(i!==u)}}catch(V){Ze(t,t.return,V)}}function cp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Fm(t,n)}catch(i){Ze(e,e.return,i)}}}function up(e,t,n){n.props=Ei(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ze(e,t,i)}}function kl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){Ze(e,t,o)}}function Ja(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(o){Ze(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Ze(e,t,o)}else n.current=null}function dp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(o){Ze(e,e.return,o)}}function Vu(e,t,n){try{var i=e.stateNode;d1(i,e.type,n,t),i[Oe]=t}catch(o){Ze(e,e.return,o)}}function fp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wn(e.type)||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ds));else if(i!==4&&(i===27&&Wn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qu(e,t,n),e=e.sibling;e!==null;)Qu(e,t,n),e=e.sibling}function es(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Wn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}function mp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);Mt(t,i,n),t[Be]=e,t[Oe]=n}catch(u){Ze(e,e.return,u)}}var jn=!1,ut=!1,Zu=!1,hp=typeof WeakSet=="function"?WeakSet:Set,Ct=null;function Xb(e,t){if(e=e.containerInfo,xd=vs,e=Cm(e),Xc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var m=0,h=-1,S=-1,L=0,V=0,K=e,H=null;t:for(;;){for(var $;K!==n||o!==0&&K.nodeType!==3||(h=m+o),K!==u||i!==0&&K.nodeType!==3||(S=m+i),K.nodeType===3&&(m+=K.nodeValue.length),($=K.firstChild)!==null;)H=K,K=$;for(;;){if(K===e)break t;if(H===n&&++L===o&&(h=m),H===u&&++V===i&&(S=m),($=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=$}n=h===-1||S===-1?null:{start:h,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(vd={focusedElem:e,selectionRange:n},vs=!1,Ct=t;Ct!==null;)if(t=Ct,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ct=e;else for(;Ct!==null;){switch(t=Ct,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,o=u.memoizedProps,u=u.memoizedState,i=n.stateNode;try{var ge=Ei(n.type,o,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(ge,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(me){Ze(n,n.return,me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)wd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ct=e;break}Ct=t.return}}function pp(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Qn(e,n),i&4&&Tl(5,n);break;case 1:if(Qn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Ze(n,n.return,m)}else{var o=Ei(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ze(n,n.return,m)}}i&64&&cp(n),i&512&&kl(n,n.return);break;case 3:if(Qn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Fm(e,t)}catch(m){Ze(n,n.return,m)}}break;case 27:t===null&&i&4&&mp(n);case 26:case 5:Qn(e,n),t===null&&i&4&&dp(n),i&512&&kl(n,n.return);break;case 12:Qn(e,n);break;case 13:Qn(e,n),i&4&&vp(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=e1.bind(null,n),v1(e,n))));break;case 22:if(i=n.memoizedState!==null||jn,!i){t=t!==null&&t.memoizedState!==null||ut,o=jn;var u=ut;jn=i,(ut=t)&&!u?Zn(e,n,(n.subtreeFlags&8772)!==0):Qn(e,n),jn=o,ut=u}break;case 30:break;default:Qn(e,n)}}function gp(e){var t=e.alternate;t!==null&&(e.alternate=null,gp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Qi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var et=null,It=!1;function En(e,t,n){for(n=n.child;n!==null;)xp(e,t,n),n=n.sibling}function xp(e,t,n){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(Rt,n)}catch{}switch(n.tag){case 26:ut||Ja(n,t),En(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ut||Ja(n,t);var i=et,o=It;Wn(n.type)&&(et=n.stateNode,It=!1),En(e,t,n),Ll(n.stateNode),et=i,It=o;break;case 5:ut||Ja(n,t);case 6:if(i=et,o=It,et=null,En(e,t,n),et=i,It=o,et!==null)if(It)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(n.stateNode)}catch(u){Ze(n,t,u)}else try{et.removeChild(n.stateNode)}catch(u){Ze(n,t,u)}break;case 18:et!==null&&(It?(e=et,rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Xl(e)):rg(et,n.stateNode));break;case 4:i=et,o=It,et=n.stateNode.containerInfo,It=!0,En(e,t,n),et=i,It=o;break;case 0:case 11:case 14:case 15:ut||Xn(2,n,t),ut||Xn(4,n,t),En(e,t,n);break;case 1:ut||(Ja(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&up(n,t,i)),En(e,t,n);break;case 21:En(e,t,n);break;case 22:ut=(i=ut)||n.memoizedState!==null,En(e,t,n),ut=i;break;default:En(e,t,n)}}function vp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xl(e)}catch(n){Ze(t,t.return,n)}}function Qb(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hp),t;default:throw Error(s(435,e.tag))}}function Ku(e,t){var n=Qb(e);t.forEach(function(i){var o=t1.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}function oa(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i],u=e,m=t,h=m;e:for(;h!==null;){switch(h.tag){case 27:if(Wn(h.type)){et=h.stateNode,It=!1;break e}break;case 5:et=h.stateNode,It=!1;break e;case 3:case 4:et=h.stateNode.containerInfo,It=!0;break e}h=h.return}if(et===null)throw Error(s(160));xp(u,m,o),et=null,It=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)bp(t,e),t=t.sibling}var La=null;function bp(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:oa(t,e),sa(e),i&4&&(Xn(3,e,e.return),Tl(3,e),Xn(5,e,e.return));break;case 1:oa(t,e),sa(e),i&512&&(ut||n===null||Ja(n,n.return)),i&64&&jn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var o=La;if(oa(t,e),sa(e),i&512&&(ut||n===null||Ja(n,n.return)),i&4){var u=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(i){case"title":u=o.getElementsByTagName("title")[0],(!u||u[un]||u[Be]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(i),o.head.insertBefore(u,o.querySelector("head > title"))),Mt(u,i,n),u[Be]=e,We(u),i=u;break e;case"link":var m=mg("link","href",o).get(i+(n.href||""));if(m){for(var h=0;h<m.length;h++)if(u=m[h],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(h,1);break t}}u=o.createElement(i),Mt(u,i,n),o.head.appendChild(u);break;case"meta":if(m=mg("meta","content",o).get(i+(n.content||""))){for(h=0;h<m.length;h++)if(u=m[h],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(h,1);break t}}u=o.createElement(i),Mt(u,i,n),o.head.appendChild(u);break;default:throw Error(s(468,i))}u[Be]=e,We(u),i=u}e.stateNode=i}else hg(o,e.type,e.stateNode);else e.stateNode=fg(o,i,e.memoizedProps);else u!==i?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,i===null?hg(o,e.type,e.stateNode):fg(o,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Vu(e,e.memoizedProps,n.memoizedProps)}break;case 27:oa(t,e),sa(e),i&512&&(ut||n===null||Ja(n,n.return)),n!==null&&i&4&&Vu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(oa(t,e),sa(e),i&512&&(ut||n===null||Ja(n,n.return)),e.flags&32){o=e.stateNode;try{Ki(o,"")}catch($){Ze(e,e.return,$)}}i&4&&e.stateNode!=null&&(o=e.memoizedProps,Vu(e,o,n!==null?n.memoizedProps:o)),i&1024&&(Zu=!0);break;case 6:if(oa(t,e),sa(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch($){Ze(e,e.return,$)}}break;case 3:if(ps=null,o=La,La=ms(t.containerInfo),oa(t,e),La=o,sa(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xl(t.containerInfo)}catch($){Ze(e,e.return,$)}Zu&&(Zu=!1,yp(e));break;case 4:i=La,La=ms(e.stateNode.containerInfo),oa(t,e),sa(e),La=i;break;case 12:oa(t,e),sa(e);break;case 13:oa(t,e),sa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ed=Je()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ku(e,i)));break;case 22:o=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,L=jn,V=ut;if(jn=L||o,ut=V||S,oa(t,e),ut=V,jn=L,sa(e),i&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||S||jn||ut||Ci(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(u=S.stateNode,o)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{h=S.stateNode;var K=S.memoizedProps.style,H=K!=null&&K.hasOwnProperty("display")?K.display:null;h.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch($){Ze(S,S.return,$)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=o?"":S.memoizedProps}catch($){Ze(S,S.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ku(e,n))));break;case 19:oa(t,e),sa(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ku(e,i)));break;case 30:break;case 21:break;default:oa(t,e),sa(e)}}function sa(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(fp(i)){n=i;break}i=i.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var o=n.stateNode,u=Xu(e);es(e,u,o);break;case 5:var m=n.stateNode;n.flags&32&&(Ki(m,""),n.flags&=-33);var h=Xu(e);es(e,h,m);break;case 3:case 4:var S=n.stateNode.containerInfo,L=Xu(e);Qu(e,L,S);break;default:throw Error(s(161))}}catch(V){Ze(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pp(e,t.alternate,t),t=t.sibling}function Ci(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xn(4,t,t.return),Ci(t);break;case 1:Ja(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&up(t,t.return,n),Ci(t);break;case 27:Ll(t.stateNode);case 26:case 5:Ja(t,t.return),Ci(t);break;case 22:t.memoizedState===null&&Ci(t);break;case 30:Ci(t);break;default:Ci(t)}e=e.sibling}}function Zn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,o=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:Zn(o,u,n),Tl(4,u);break;case 1:if(Zn(o,u,n),i=u,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(L){Ze(i,i.return,L)}if(i=u,o=i.updateQueue,o!==null){var h=i.stateNode;try{var S=o.shared.hiddenCallbacks;if(S!==null)for(o.shared.hiddenCallbacks=null,o=0;o<S.length;o++)Pm(S[o],h)}catch(L){Ze(i,i.return,L)}}n&&m&64&&cp(u),kl(u,u.return);break;case 27:mp(u);case 26:case 5:Zn(o,u,n),n&&i===null&&m&4&&dp(u),kl(u,u.return);break;case 12:Zn(o,u,n);break;case 13:Zn(o,u,n),n&&m&4&&vp(o,u);break;case 22:u.memoizedState===null&&Zn(o,u,n),kl(u,u.return);break;case 30:break;default:Zn(o,u,n)}t=t.sibling}}function Pu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ml(n))}function Fu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ml(e))}function Ia(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wp(e,t,n,i),t=t.sibling}function wp(e,t,n,i){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Ia(e,t,n,i),o&2048&&Tl(9,t);break;case 1:Ia(e,t,n,i);break;case 3:Ia(e,t,n,i),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ml(e)));break;case 12:if(o&2048){Ia(e,t,n,i),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,h=u.onPostCommit;typeof h=="function"&&h(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ze(t,t.return,S)}}else Ia(e,t,n,i);break;case 13:Ia(e,t,n,i);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?Ia(e,t,n,i):zl(e,t):u._visibility&2?Ia(e,t,n,i):(u._visibility|=2,mr(e,t,n,i,(t.subtreeFlags&10256)!==0)),o&2048&&Pu(m,t);break;case 24:Ia(e,t,n,i),o&2048&&Fu(t.alternate,t);break;default:Ia(e,t,n,i)}}function mr(e,t,n,i,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,m=t,h=n,S=i,L=m.flags;switch(m.tag){case 0:case 11:case 15:mr(u,m,h,S,o),Tl(8,m);break;case 23:break;case 22:var V=m.stateNode;m.memoizedState!==null?V._visibility&2?mr(u,m,h,S,o):zl(u,m):(V._visibility|=2,mr(u,m,h,S,o)),o&&L&2048&&Pu(m.alternate,m);break;case 24:mr(u,m,h,S,o),o&&L&2048&&Fu(m.alternate,m);break;default:mr(u,m,h,S,o)}t=t.sibling}}function zl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,o=i.flags;switch(i.tag){case 22:zl(n,i),o&2048&&Pu(i.alternate,i);break;case 24:zl(n,i),o&2048&&Fu(i.alternate,i);break;default:zl(n,i)}t=t.sibling}}var Rl=8192;function hr(e){if(e.subtreeFlags&Rl)for(e=e.child;e!==null;)Sp(e),e=e.sibling}function Sp(e){switch(e.tag){case 26:hr(e),e.flags&Rl&&e.memoizedState!==null&&O1(La,e.memoizedState,e.memoizedProps);break;case 5:hr(e);break;case 3:case 4:var t=La;La=ms(e.stateNode.containerInfo),hr(e),La=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Rl,Rl=16777216,hr(e),Rl=t):hr(e));break;default:hr(e)}}function jp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ol(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ct=i,Cp(i,e)}jp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ep(e),e=e.sibling}function Ep(e){switch(e.tag){case 0:case 11:case 15:Ol(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:Ol(e);break;case 12:Ol(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ts(e)):Ol(e);break;default:Ol(e)}}function ts(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ct=i,Cp(i,e)}jp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xn(8,t,t.return),ts(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ts(t));break;default:ts(t)}e=e.sibling}}function Cp(e,t){for(;Ct!==null;){var n=Ct;switch(n.tag){case 0:case 11:case 15:Xn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ml(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ct=i;else e:for(n=e;Ct!==null;){i=Ct;var o=i.sibling,u=i.return;if(gp(i),i===n){Ct=null;break e}if(o!==null){o.return=u,Ct=o;break e}Ct=u}}}var Zb={getCacheForType:function(e){var t=_t(bt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Kb=typeof WeakMap=="function"?WeakMap:Map,qe=0,Ke=null,ke=null,Re=0,Ye=0,ca=null,Kn=!1,pr=!1,Ju=!1,Cn=0,ot=0,Pn=0,Ai=0,Iu=0,Aa=0,gr=0,Dl=null,Wt=null,Wu=!1,ed=0,as=1/0,ns=null,Fn=null,Dt=0,Jn=null,xr=null,vr=0,td=0,ad=null,Ap=null,Ml=0,nd=null;function ua(){if((qe&2)!==0&&Re!==0)return Re&-Re;if(U.T!==null){var e=rr;return e!==0?e:ud()}return cn()}function Tp(){Aa===0&&(Aa=(Re&536870912)===0||_e?Ui():536870912);var e=Ca.current;return e!==null&&(e.flags|=32),Aa}function da(e,t,n){(e===Ke&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(br(e,0),In(e,Re,Aa,!1)),rt(e,n),((qe&2)===0||e!==Ke)&&(e===Ke&&((qe&2)===0&&(Ai|=n),ot===4&&In(e,Re,Aa,!1)),Wa(e))}function kp(e,t,n){if((qe&6)!==0)throw Error(s(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||on(e,t),o=i?Jb(e,t):ld(e,t,!0),u=i;do{if(o===0){pr&&!i&&In(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Pb(n)){o=ld(e,t,!1),u=!1;continue}if(o===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var h=e;o=Dl;var S=h.current.memoizedState.isDehydrated;if(S&&(br(h,m).flags|=256),m=ld(h,m,!1),m!==2){if(Ju&&!S){h.errorRecoveryDisabledLanes|=u,Ai|=u,o=4;break e}u=Wt,Wt=o,u!==null&&(Wt===null?Wt=u:Wt.push.apply(Wt,u))}o=m}if(u=!1,o!==2)continue}}if(o===1){br(e,0),In(e,t,0,!0);break}e:{switch(i=e,u=o,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:In(i,t,Aa,!Kn);break e;case 2:Wt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(o=ed+300-Je(),10<o)){if(In(i,t,Aa,!Kn),Xa(i,0,!0)!==0)break e;i.timeoutHandle=ng(zp.bind(null,i,n,Wt,ns,Wu,t,Aa,Ai,gr,Kn,u,2,-0,0),o);break e}zp(i,n,Wt,ns,Wu,t,Aa,Ai,gr,Kn,u,0,-0,0)}}break}while(!0);Wa(e)}function zp(e,t,n,i,o,u,m,h,S,L,V,K,H,$){if(e.timeoutHandle=-1,K=t.subtreeFlags,(K&8192||(K&16785408)===16785408)&&($l={stylesheets:null,count:0,unsuspend:R1},Sp(t),K=D1(),K!==null)){e.cancelPendingCommit=K(_p.bind(null,e,t,u,n,i,o,m,h,S,V,1,H,$)),In(e,u,m,!L);return}_p(e,t,u,n,i,o,m,h,S)}function Pb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var o=n[i],u=o.getSnapshot;o=o.value;try{if(!ra(u(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function In(e,t,n,i){t&=~Iu,t&=~Ai,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var o=t;0<o;){var u=31-Ue(o),m=1<<u;i[u]=-1,o&=~m}n!==0&&Mn(e,n,t)}function is(){return(qe&6)===0?(Nl(0),!1):!0}function id(){if(ke!==null){if(Ye===0)var e=ke.return;else e=ke,xn=yi=null,wu(e),dr=null,El=0,e=ke;for(;e!==null;)sp(e.alternate,e),e=e.return;ke=null}}function br(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,m1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),id(),Ke=e,ke=n=hn(e.current,null),Re=t,Ye=0,ca=null,Kn=!1,pr=on(e,t),Ju=!1,gr=Aa=Iu=Ai=Pn=ot=0,Wt=Dl=null,Wu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var o=31-Ue(i),u=1<<o;t|=e[o],i&=~u}return Cn=t,Ao(),n}function Rp(e,t){Ce=null,U.H=Xo,t===pl||t===Bo?(t=Zm(),Ye=3):t===Vm?(t=Zm(),Ye=4):Ye=t===Kh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ca=t,ke===null&&(ot=1,Fo(e,wa(t,e.current)))}function Op(){var e=U.H;return U.H=Xo,e===null?Xo:e}function Dp(){var e=U.A;return U.A=Zb,e}function rd(){ot=4,Kn||(Re&4194048)!==Re&&Ca.current!==null||(pr=!0),(Pn&134217727)===0&&(Ai&134217727)===0||Ke===null||In(Ke,Re,Aa,!1)}function ld(e,t,n){var i=qe;qe|=2;var o=Op(),u=Dp();(Ke!==e||Re!==t)&&(ns=null,br(e,t)),t=!1;var m=ot;e:do try{if(Ye!==0&&ke!==null){var h=ke,S=ca;switch(Ye){case 8:id(),m=6;break e;case 3:case 2:case 9:case 6:Ca.current===null&&(t=!0);var L=Ye;if(Ye=0,ca=null,yr(e,h,S,L),n&&pr){m=0;break e}break;default:L=Ye,Ye=0,ca=null,yr(e,h,S,L)}}Fb(),m=ot;break}catch(V){Rp(e,V)}while(!0);return t&&e.shellSuspendCounter++,xn=yi=null,qe=i,U.H=o,U.A=u,ke===null&&(Ke=null,Re=0,Ao()),m}function Fb(){for(;ke!==null;)Mp(ke)}function Jb(e,t){var n=qe;qe|=2;var i=Op(),o=Dp();Ke!==e||Re!==t?(ns=null,as=Je()+500,br(e,t)):pr=on(e,t);e:do try{if(Ye!==0&&ke!==null){t=ke;var u=ca;t:switch(Ye){case 1:Ye=0,ca=null,yr(e,t,u,1);break;case 2:case 9:if(Xm(u)){Ye=0,ca=null,Np(t);break}t=function(){Ye!==2&&Ye!==9||Ke!==e||(Ye=7),Wa(e)},u.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Xm(u)?(Ye=0,ca=null,Np(t)):(Ye=0,ca=null,yr(e,t,u,7));break;case 5:var m=null;switch(ke.tag){case 26:m=ke.memoizedState;case 5:case 27:var h=ke;if(!m||pg(m)){Ye=0,ca=null;var S=h.sibling;if(S!==null)ke=S;else{var L=h.return;L!==null?(ke=L,rs(L)):ke=null}break t}}Ye=0,ca=null,yr(e,t,u,5);break;case 6:Ye=0,ca=null,yr(e,t,u,6);break;case 8:id(),ot=6;break e;default:throw Error(s(462))}}Ib();break}catch(V){Rp(e,V)}while(!0);return xn=yi=null,U.H=i,U.A=o,qe=n,ke!==null?0:(Ke=null,Re=0,Ao(),ot)}function Ib(){for(;ke!==null&&!ta();)Mp(ke)}function Mp(e){var t=lp(e.alternate,e,Cn);e.memoizedProps=e.pendingProps,t===null?rs(e):ke=t}function Np(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ep(n,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=ep(n,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:wu(t);default:sp(n,t),t=ke=Bm(t,Cn),t=lp(n,t,Cn)}e.memoizedProps=e.pendingProps,t===null?rs(e):ke=t}function yr(e,t,n,i){xn=yi=null,wu(t),dr=null,El=0;var o=t.return;try{if(qb(e,o,t,n,Re)){ot=1,Fo(e,wa(n,e.current)),ke=null;return}}catch(u){if(o!==null)throw ke=o,u;ot=1,Fo(e,wa(n,e.current)),ke=null;return}t.flags&32768?(_e||i===1?e=!0:pr||(Re&536870912)!==0?e=!1:(Kn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ca.current,i!==null&&i.tag===13&&(i.flags|=16384))),Bp(t,e)):rs(t)}function rs(e){var t=e;do{if((t.flags&32768)!==0){Bp(t,Kn);return}e=t.return;var n=Gb(t.alternate,t,Cn);if(n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);ot===0&&(ot=5)}function Bp(e,t){do{var n=Vb(e.alternate,e);if(n!==null){n.flags&=32767,ke=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ke=e;return}ke=e=n}while(e!==null);ot=6,ke=null}function _p(e,t,n,i,o,u,m,h,S){e.cancelPendingCommit=null;do ls();while(Dt!==0);if((qe&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=Fc,sn(e,n,u,m,h,S),e===Ke&&(ke=Ke=null,Re=0),xr=t,Jn=e,vr=n,td=u,ad=o,Ap=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,a1(Pt,function(){return qp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=U.T,U.T=null,o=J.p,J.p=2,m=qe,qe|=4;try{Xb(e,t,n)}finally{qe=m,J.p=o,U.T=i}}Dt=1,Lp(),Hp(),Up()}}function Lp(){if(Dt===1){Dt=0;var e=Jn,t=xr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=U.T,U.T=null;var i=J.p;J.p=2;var o=qe;qe|=4;try{bp(t,e);var u=vd,m=Cm(e.containerInfo),h=u.focusedElem,S=u.selectionRange;if(m!==h&&h&&h.ownerDocument&&Em(h.ownerDocument.documentElement,h)){if(S!==null&&Xc(h)){var L=S.start,V=S.end;if(V===void 0&&(V=L),"selectionStart"in h)h.selectionStart=L,h.selectionEnd=Math.min(V,h.value.length);else{var K=h.ownerDocument||document,H=K&&K.defaultView||window;if(H.getSelection){var $=H.getSelection(),ge=h.textContent.length,me=Math.min(S.start,ge),Qe=S.end===void 0?me:Math.min(S.end,ge);!$.extend&&me>Qe&&(m=Qe,Qe=me,me=m);var R=jm(h,me),C=jm(h,Qe);if(R&&C&&($.rangeCount!==1||$.anchorNode!==R.node||$.anchorOffset!==R.offset||$.focusNode!==C.node||$.focusOffset!==C.offset)){var M=K.createRange();M.setStart(R.node,R.offset),$.removeAllRanges(),me>Qe?($.addRange(M),$.extend(C.node,C.offset)):(M.setEnd(C.node,C.offset),$.addRange(M))}}}}for(K=[],$=h;$=$.parentNode;)$.nodeType===1&&K.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<K.length;h++){var Q=K[h];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}vs=!!xd,vd=xd=null}finally{qe=o,J.p=i,U.T=n}}e.current=t,Dt=2}}function Hp(){if(Dt===2){Dt=0;var e=Jn,t=xr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=U.T,U.T=null;var i=J.p;J.p=2;var o=qe;qe|=4;try{pp(e,t.alternate,t)}finally{qe=o,J.p=i,U.T=n}}Dt=3}}function Up(){if(Dt===4||Dt===3){Dt=0,aa();var e=Jn,t=xr,n=vr,i=Ap;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Dt=5:(Dt=0,xr=Jn=null,$p(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Fn=null),Gi(n),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(Rt,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=U.T,o=J.p,J.p=2,U.T=null;try{for(var u=e.onRecoverableError,m=0;m<i.length;m++){var h=i[m];u(h.value,{componentStack:h.stack})}}finally{U.T=t,J.p=o}}(vr&3)!==0&&ls(),Wa(e),o=e.pendingLanes,(n&4194090)!==0&&(o&42)!==0?e===nd?Ml++:(Ml=0,nd=e):Ml=0,Nl(0)}}function $p(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ml(t)))}function ls(e){return Lp(),Hp(),Up(),qp()}function qp(){if(Dt!==5)return!1;var e=Jn,t=td;td=0;var n=Gi(vr),i=U.T,o=J.p;try{J.p=32>n?32:n,U.T=null,n=ad,ad=null;var u=Jn,m=vr;if(Dt=0,xr=Jn=null,vr=0,(qe&6)!==0)throw Error(s(331));var h=qe;if(qe|=4,Ep(u.current),wp(u,u.current,m,n),qe=h,Nl(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(Rt,u)}catch{}return!0}finally{J.p=o,U.T=i,$p(e,t)}}function Yp(e,t,n){t=wa(n,t),t=Bu(e.stateNode,t,2),e=qn(e,t,2),e!==null&&(rt(e,2),Wa(e))}function Ze(e,t,n){if(e.tag===3)Yp(e,e,n);else for(;t!==null;){if(t.tag===3){Yp(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fn===null||!Fn.has(i))){e=wa(n,e),n=Qh(2),i=qn(t,n,2),i!==null&&(Zh(n,i,t,e),rt(i,2),Wa(i));break}}t=t.return}}function od(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Kb;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(Ju=!0,o.add(n),e=Wb.bind(null,e,t,n),t.then(e,e))}function Wb(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ke===e&&(Re&n)===n&&(ot===4||ot===3&&(Re&62914560)===Re&&300>Je()-ed?(qe&2)===0&&br(e,0):Iu|=n,gr===Re&&(gr=0)),Wa(e)}function Gp(e,t){t===0&&(t=va()),e=tr(e,t),e!==null&&(rt(e,t),Wa(e))}function e1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gp(e,n)}function t1(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Gp(e,n)}function a1(e,t){return tt(e,t)}var os=null,wr=null,sd=!1,ss=!1,cd=!1,Ti=0;function Wa(e){e!==wr&&e.next===null&&(wr===null?os=wr=e:wr=wr.next=e),ss=!0,sd||(sd=!0,i1())}function Nl(e,t){if(!cd&&ss){cd=!0;do for(var n=!1,i=os;i!==null;){if(e!==0){var o=i.pendingLanes;if(o===0)var u=0;else{var m=i.suspendedLanes,h=i.pingedLanes;u=(1<<31-Ue(42|e)+1)-1,u&=o&~(m&~h),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Zp(i,u))}else u=Re,u=Xa(i,i===Ke?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||on(i,u)||(n=!0,Zp(i,u));i=i.next}while(n);cd=!1}}function n1(){Vp()}function Vp(){ss=sd=!1;var e=0;Ti!==0&&(f1()&&(e=Ti),Ti=0);for(var t=Je(),n=null,i=os;i!==null;){var o=i.next,u=Xp(i,t);u===0?(i.next=null,n===null?os=o:n.next=o,o===null&&(wr=n)):(n=i,(e!==0||(u&3)!==0)&&(ss=!0)),i=o}Nl(e)}function Xp(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-Ue(u),h=1<<m,S=o[m];S===-1?((h&n)===0||(h&i)!==0)&&(o[m]=po(h,t)):S<=t&&(e.expiredLanes|=h),u&=~h}if(t=Ke,n=Re,n=Xa(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&mt(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||on(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&mt(i),Gi(n)){case 2:case 8:n=Da;break;case 32:n=Pt;break;case 268435456:n=wt;break;default:n=Pt}return i=Qp.bind(null,e),n=tt(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&mt(i),e.callbackPriority=2,e.callbackNode=null,2}function Qp(e,t){if(Dt!==0&&Dt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ls()&&e.callbackNode!==n)return null;var i=Re;return i=Xa(e,e===Ke?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(kp(e,i,t),Xp(e,Je()),e.callbackNode!=null&&e.callbackNode===n?Qp.bind(null,e):null)}function Zp(e,t){if(ls())return null;kp(e,t,!0)}function i1(){h1(function(){(qe&6)!==0?tt(st,n1):Vp()})}function ud(){return Ti===0&&(Ti=Ui()),Ti}function Kp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bo(""+e)}function Pp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function r1(e,t,n,i,o){if(t==="submit"&&n&&n.stateNode===o){var u=Kp((o[Oe]||null).action),m=i.submitter;m&&(t=(t=m[Oe]||null)?Kp(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var h=new jo("action","action",null,i,o);e.push({event:h,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ti!==0){var S=m?Pp(o,m):new FormData(o);Ru(n,{pending:!0,data:S,method:o.method,action:u},null,S)}}else typeof u=="function"&&(h.preventDefault(),S=m?Pp(o,m):new FormData(o),Ru(n,{pending:!0,data:S,method:o.method,action:u},u,S))},currentTarget:o}]})}}for(var dd=0;dd<Pc.length;dd++){var fd=Pc[dd],l1=fd.toLowerCase(),o1=fd[0].toUpperCase()+fd.slice(1);_a(l1,"on"+o1)}_a(km,"onAnimationEnd"),_a(zm,"onAnimationIteration"),_a(Rm,"onAnimationStart"),_a("dblclick","onDoubleClick"),_a("focusin","onFocus"),_a("focusout","onBlur"),_a(Eb,"onTransitionRun"),_a(Cb,"onTransitionStart"),_a(Ab,"onTransitionCancel"),_a(Om,"onTransitionEnd"),fn("onMouseEnter",["mouseout","mouseover"]),fn("onMouseLeave",["mouseout","mouseover"]),fn("onPointerEnter",["pointerout","pointerover"]),fn("onPointerLeave",["pointerout","pointerover"]),Qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bl));function Fp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var m=i.length-1;0<=m;m--){var h=i[m],S=h.instance,L=h.currentTarget;if(h=h.listener,S!==u&&o.isPropagationStopped())break e;u=h,o.currentTarget=L;try{u(o)}catch(V){Po(V)}o.currentTarget=null,u=S}else for(m=0;m<i.length;m++){if(h=i[m],S=h.instance,L=h.currentTarget,h=h.listener,S!==u&&o.isPropagationStopped())break e;u=h,o.currentTarget=L;try{u(o)}catch(V){Po(V)}o.currentTarget=null,u=S}}}}function ze(e,t){var n=t[Xi];n===void 0&&(n=t[Xi]=new Set);var i=e+"__bubble";n.has(i)||(Jp(t,e,2,!1),n.add(i))}function md(e,t,n){var i=0;t&&(i|=4),Jp(n,e,i,t)}var cs="_reactListening"+Math.random().toString(36).slice(2);function hd(e){if(!e[cs]){e[cs]=!0,go.forEach(function(n){n!=="selectionchange"&&(s1.has(n)||md(n,!1,e),md(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cs]||(t[cs]=!0,md("selectionchange",!1,t))}}function Jp(e,t,n,i){switch(wg(t)){case 2:var o=B1;break;case 8:o=_1;break;default:o=kd}n=o.bind(null,t,n,e),o=void 0,!_c||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function pd(e,t,n,i,o){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var h=i.stateNode.containerInfo;if(h===o)break;if(m===4)for(m=i.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===o)return;m=m.return}for(;h!==null;){if(m=Nn(h),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){i=u=m;continue e}h=h.parentNode}}i=i.return}im(function(){var L=u,V=Nc(n),K=[];e:{var H=Dm.get(e);if(H!==void 0){var $=jo,ge=e;switch(e){case"keypress":if(wo(n)===0)break e;case"keydown":case"keyup":$=ab;break;case"focusin":ge="focus",$=$c;break;case"focusout":ge="blur",$=$c;break;case"beforeblur":case"afterblur":$=$c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=rb;break;case km:case zm:case Rm:$=Zv;break;case Om:$=ob;break;case"scroll":case"scrollend":$=Yv;break;case"wheel":$=cb;break;case"copy":case"cut":case"paste":$=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=cm;break;case"toggle":case"beforetoggle":$=db}var me=(t&4)!==0,Qe=!me&&(e==="scroll"||e==="scrollend"),R=me?H!==null?H+"Capture":null:H;me=[];for(var C=L,M;C!==null;){var Q=C;if(M=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||M===null||R===null||(Q=el(C,R),Q!=null&&me.push(_l(C,Q,M))),Qe)break;C=C.return}0<me.length&&(H=new $(H,ge,null,n,V),K.push({event:H,listeners:me}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",H&&n!==Mc&&(ge=n.relatedTarget||n.fromElement)&&(Nn(ge)||ge[pt]))break e;if(($||H)&&(H=V.window===V?V:(H=V.ownerDocument)?H.defaultView||H.parentWindow:window,$?(ge=n.relatedTarget||n.toElement,$=L,ge=ge?Nn(ge):null,ge!==null&&(Qe=f(ge),me=ge.tag,ge!==Qe||me!==5&&me!==27&&me!==6)&&(ge=null)):($=null,ge=L),$!==ge)){if(me=om,Q="onMouseLeave",R="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(me=cm,Q="onPointerLeave",R="onPointerEnter",C="pointer"),Qe=$==null?H:_n($),M=ge==null?H:_n(ge),H=new me(Q,C+"leave",$,n,V),H.target=Qe,H.relatedTarget=M,Q=null,Nn(V)===L&&(me=new me(R,C+"enter",ge,n,V),me.target=M,me.relatedTarget=Qe,Q=me),Qe=Q,$&&ge)t:{for(me=$,R=ge,C=0,M=me;M;M=Sr(M))C++;for(M=0,Q=R;Q;Q=Sr(Q))M++;for(;0<C-M;)me=Sr(me),C--;for(;0<M-C;)R=Sr(R),M--;for(;C--;){if(me===R||R!==null&&me===R.alternate)break t;me=Sr(me),R=Sr(R)}me=null}else me=null;$!==null&&Ip(K,H,$,me,!1),ge!==null&&Qe!==null&&Ip(K,Qe,ge,me,!0)}}e:{if(H=L?_n(L):window,$=H.nodeName&&H.nodeName.toLowerCase(),$==="select"||$==="input"&&H.type==="file")var se=xm;else if(pm(H))if(vm)se=wb;else{se=bb;var Te=vb}else $=H.nodeName,!$||$.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?L&&Dc(L.elementType)&&(se=xm):se=yb;if(se&&(se=se(e,L))){gm(K,se,n,V);break e}Te&&Te(e,H,L),e==="focusout"&&L&&H.type==="number"&&L.memoizedProps.value!=null&&Oc(H,"number",H.value)}switch(Te=L?_n(L):window,e){case"focusin":(pm(Te)||Te.contentEditable==="true")&&(Ii=Te,Qc=L,sl=null);break;case"focusout":sl=Qc=Ii=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,Am(K,n,V);break;case"selectionchange":if(jb)break;case"keydown":case"keyup":Am(K,n,V)}var ue;if(Yc)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Ji?mm(e,n)&&(pe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(pe="onCompositionStart");pe&&(um&&n.locale!=="ko"&&(Ji||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Ji&&(ue=rm()):(Ln=V,Lc="value"in Ln?Ln.value:Ln.textContent,Ji=!0)),Te=us(L,pe),0<Te.length&&(pe=new sm(pe,e,null,n,V),K.push({event:pe,listeners:Te}),ue?pe.data=ue:(ue=hm(n),ue!==null&&(pe.data=ue)))),(ue=mb?hb(e,n):pb(e,n))&&(pe=us(L,"onBeforeInput"),0<pe.length&&(Te=new sm("onBeforeInput","beforeinput",null,n,V),K.push({event:Te,listeners:pe}),Te.data=ue)),r1(K,e,L,n,V)}Fp(K,t)})}function _l(e,t,n){return{instance:e,listener:t,currentTarget:n}}function us(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=el(e,n),o!=null&&i.unshift(_l(e,o,u)),o=el(e,t),o!=null&&i.push(_l(e,o,u))),e.tag===3)return i;e=e.return}return[]}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ip(e,t,n,i,o){for(var u=t._reactName,m=[];n!==null&&n!==i;){var h=n,S=h.alternate,L=h.stateNode;if(h=h.tag,S!==null&&S===i)break;h!==5&&h!==26&&h!==27||L===null||(S=L,o?(L=el(n,u),L!=null&&m.unshift(_l(n,L,S))):o||(L=el(n,u),L!=null&&m.push(_l(n,L,S)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var c1=/\r\n?/g,u1=/\u0000|\uFFFD/g;function Wp(e){return(typeof e=="string"?e:""+e).replace(c1,`
`).replace(u1,"")}function eg(e,t){return t=Wp(t),Wp(e)===t}function ds(){}function Xe(e,t,n,i,o,u){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ki(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ki(e,""+i);break;case"className":at(e,"class",i);break;case"tabIndex":at(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":at(e,n,i);break;case"style":am(e,i,u);break;case"data":if(t!=="object"){at(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=bo(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Xe(e,t,"name",o.name,o,null),Xe(e,t,"formEncType",o.formEncType,o,null),Xe(e,t,"formMethod",o.formMethod,o,null),Xe(e,t,"formTarget",o.formTarget,o,null)):(Xe(e,t,"encType",o.encType,o,null),Xe(e,t,"method",o.method,o,null),Xe(e,t,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=bo(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ds);break;case"onScroll":i!=null&&ze("scroll",e);break;case"onScrollEnd":i!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=bo(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ze("beforetoggle",e),ze("toggle",e),Ge(e,"popover",i);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ge(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=$v.get(n)||n,Ge(e,n,i))}}function gd(e,t,n,i,o,u){switch(n){case"style":am(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ki(e,i):(typeof i=="number"||typeof i=="bigint")&&Ki(e,""+i);break;case"onScroll":i!=null&&ze("scroll",e);break;case"onScrollEnd":i!=null&&ze("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ds);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),u=e[Oe]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,o),typeof i=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,o);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ge(e,n,i)}}}function Mt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var i=!1,o=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Xe(e,t,u,m,n,null)}}o&&Xe(e,t,"srcSet",n.srcSet,n,null),i&&Xe(e,t,"src",n.src,n,null);return;case"input":ze("invalid",e);var h=u=m=o=null,S=null,L=null;for(i in n)if(n.hasOwnProperty(i)){var V=n[i];if(V!=null)switch(i){case"name":o=V;break;case"type":m=V;break;case"checked":S=V;break;case"defaultChecked":L=V;break;case"value":u=V;break;case"defaultValue":h=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,t));break;default:Xe(e,t,i,V,n,null)}}If(e,u,h,S,L,m,o,!1),xo(e);return;case"select":ze("invalid",e),i=m=u=null;for(o in n)if(n.hasOwnProperty(o)&&(h=n[o],h!=null))switch(o){case"value":u=h;break;case"defaultValue":m=h;break;case"multiple":i=h;default:Xe(e,t,o,h,n,null)}t=u,n=m,e.multiple=!!i,t!=null?Zi(e,!!i,t,!1):n!=null&&Zi(e,!!i,n,!0);return;case"textarea":ze("invalid",e),u=o=i=null;for(m in n)if(n.hasOwnProperty(m)&&(h=n[m],h!=null))switch(m){case"value":i=h;break;case"defaultValue":o=h;break;case"children":u=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:Xe(e,t,m,h,n,null)}em(e,i,o,u),xo(e);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(i=n[S],i!=null))switch(S){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Xe(e,t,S,i,n,null)}return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(i=0;i<Bl.length;i++)ze(Bl[i],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in n)if(n.hasOwnProperty(L)&&(i=n[L],i!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Xe(e,t,L,i,n,null)}return;default:if(Dc(t)){for(V in n)n.hasOwnProperty(V)&&(i=n[V],i!==void 0&&gd(e,t,V,i,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!=null&&Xe(e,t,h,i,n,null))}function d1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,m=null,h=null,S=null,L=null,V=null;for($ in n){var K=n[$];if(n.hasOwnProperty($)&&K!=null)switch($){case"checked":break;case"value":break;case"defaultValue":S=K;default:i.hasOwnProperty($)||Xe(e,t,$,null,i,K)}}for(var H in i){var $=i[H];if(K=n[H],i.hasOwnProperty(H)&&($!=null||K!=null))switch(H){case"type":u=$;break;case"name":o=$;break;case"checked":L=$;break;case"defaultChecked":V=$;break;case"value":m=$;break;case"defaultValue":h=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,t));break;default:$!==K&&Xe(e,t,H,$,i,K)}}Rc(e,m,h,S,L,V,u,o);return;case"select":$=m=h=H=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":$=S;default:i.hasOwnProperty(u)||Xe(e,t,u,null,i,S)}for(o in i)if(u=i[o],S=n[o],i.hasOwnProperty(o)&&(u!=null||S!=null))switch(o){case"value":H=u;break;case"defaultValue":h=u;break;case"multiple":m=u;default:u!==S&&Xe(e,t,o,u,i,S)}t=h,n=m,i=$,H!=null?Zi(e,!!n,H,!1):!!i!=!!n&&(t!=null?Zi(e,!!n,t,!0):Zi(e,!!n,n?[]:"",!1));return;case"textarea":$=H=null;for(h in n)if(o=n[h],n.hasOwnProperty(h)&&o!=null&&!i.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Xe(e,t,h,null,i,o)}for(m in i)if(o=i[m],u=n[m],i.hasOwnProperty(m)&&(o!=null||u!=null))switch(m){case"value":H=o;break;case"defaultValue":$=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==u&&Xe(e,t,m,o,i,u)}Wf(e,H,$);return;case"option":for(var ge in n)if(H=n[ge],n.hasOwnProperty(ge)&&H!=null&&!i.hasOwnProperty(ge))switch(ge){case"selected":e.selected=!1;break;default:Xe(e,t,ge,null,i,H)}for(S in i)if(H=i[S],$=n[S],i.hasOwnProperty(S)&&H!==$&&(H!=null||$!=null))switch(S){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Xe(e,t,S,H,i,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in n)H=n[me],n.hasOwnProperty(me)&&H!=null&&!i.hasOwnProperty(me)&&Xe(e,t,me,null,i,H);for(L in i)if(H=i[L],$=n[L],i.hasOwnProperty(L)&&H!==$&&(H!=null||$!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,t));break;default:Xe(e,t,L,H,i,$)}return;default:if(Dc(t)){for(var Qe in n)H=n[Qe],n.hasOwnProperty(Qe)&&H!==void 0&&!i.hasOwnProperty(Qe)&&gd(e,t,Qe,void 0,i,H);for(V in i)H=i[V],$=n[V],!i.hasOwnProperty(V)||H===$||H===void 0&&$===void 0||gd(e,t,V,H,i,$);return}}for(var R in n)H=n[R],n.hasOwnProperty(R)&&H!=null&&!i.hasOwnProperty(R)&&Xe(e,t,R,null,i,H);for(K in i)H=i[K],$=n[K],!i.hasOwnProperty(K)||H===$||H==null&&$==null||Xe(e,t,K,H,i,$)}var xd=null,vd=null;function fs(e){return e.nodeType===9?e:e.ownerDocument}function tg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ag(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function bd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yd=null;function f1(){var e=window.event;return e&&e.type==="popstate"?e===yd?!1:(yd=e,!0):(yd=null,!1)}var ng=typeof setTimeout=="function"?setTimeout:void 0,m1=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,h1=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(e){return ig.resolve(null).then(e).catch(p1)}:ng;function p1(e){setTimeout(function(){throw e})}function Wn(e){return e==="head"}function rg(e,t){var n=t,i=0,o=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<i&&8>i){n=i;var m=e.ownerDocument;if(n&1&&Ll(m.documentElement),n&2&&Ll(m.body),n&4)for(n=m.head,Ll(n),m=n.firstChild;m;){var h=m.nextSibling,S=m.nodeName;m[un]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=h}}if(o===0){e.removeChild(u),Xl(t);return}o--}else n==="$"||n==="$?"||n==="$!"?o++:i=n.charCodeAt(0)-48;else i=0;n=u}while(n);Xl(t)}function wd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":wd(n),Qi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function g1(e,t,n,i){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[un])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ha(e.nextSibling),e===null)break}return null}function x1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ha(e.nextSibling),e===null))return null;return e}function Sd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function v1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ha(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var jd=null;function lg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function og(e,t,n){switch(t=fs(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ll(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qi(e)}var Ta=new Map,sg=new Set;function ms(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var An=J.d;J.d={f:b1,r:y1,D:w1,C:S1,L:j1,m:E1,X:A1,S:C1,M:T1};function b1(){var e=An.f(),t=is();return e||t}function y1(e){var t=Bn(e);t!==null&&t.tag===5&&t.type==="form"?kh(t):An.r(e)}var jr=typeof document>"u"?null:document;function cg(e,t,n){var i=jr;if(i&&typeof t=="string"&&t){var o=ya(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),sg.has(o)||(sg.add(o),e={rel:e,crossOrigin:n,href:t},i.querySelector(o)===null&&(t=i.createElement("link"),Mt(t,"link",e),We(t),i.head.appendChild(t)))}}function w1(e){An.D(e),cg("dns-prefetch",e,null)}function S1(e,t){An.C(e,t),cg("preconnect",e,t)}function j1(e,t,n){An.L(e,t,n);var i=jr;if(i&&e&&t){var o='link[rel="preload"][as="'+ya(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+ya(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+ya(n.imageSizes)+'"]')):o+='[href="'+ya(e)+'"]';var u=o;switch(t){case"style":u=Er(e);break;case"script":u=Cr(e)}Ta.has(u)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ta.set(u,e),i.querySelector(o)!==null||t==="style"&&i.querySelector(Hl(u))||t==="script"&&i.querySelector(Ul(u))||(t=i.createElement("link"),Mt(t,"link",e),We(t),i.head.appendChild(t)))}}function E1(e,t){An.m(e,t);var n=jr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+ya(i)+'"][href="'+ya(e)+'"]',u=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Cr(e)}if(!Ta.has(u)&&(e=y({rel:"modulepreload",href:e},t),Ta.set(u,e),n.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ul(u)))return}i=n.createElement("link"),Mt(i,"link",e),We(i),n.head.appendChild(i)}}}function C1(e,t,n){An.S(e,t,n);var i=jr;if(i&&e){var o=dn(i).hoistableStyles,u=Er(e);t=t||"default";var m=o.get(u);if(!m){var h={loading:0,preload:null};if(m=i.querySelector(Hl(u)))h.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ta.get(u))&&Ed(e,n);var S=m=i.createElement("link");We(S),Mt(S,"link",e),S._p=new Promise(function(L,V){S.onload=L,S.onerror=V}),S.addEventListener("load",function(){h.loading|=1}),S.addEventListener("error",function(){h.loading|=2}),h.loading|=4,hs(m,t,i)}m={type:"stylesheet",instance:m,count:1,state:h},o.set(u,m)}}}function A1(e,t){An.X(e,t);var n=jr;if(n&&e){var i=dn(n).hoistableScripts,o=Cr(e),u=i.get(o);u||(u=n.querySelector(Ul(o)),u||(e=y({src:e,async:!0},t),(t=Ta.get(o))&&Cd(e,t),u=n.createElement("script"),We(u),Mt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(o,u))}}function T1(e,t){An.M(e,t);var n=jr;if(n&&e){var i=dn(n).hoistableScripts,o=Cr(e),u=i.get(o);u||(u=n.querySelector(Ul(o)),u||(e=y({src:e,async:!0,type:"module"},t),(t=Ta.get(o))&&Cd(e,t),u=n.createElement("script"),We(u),Mt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(o,u))}}function ug(e,t,n,i){var o=(o=ae.current)?ms(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Er(n.href),n=dn(o).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Er(n.href);var u=dn(o).hoistableStyles,m=u.get(e);if(m||(o=o.ownerDocument||o,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=o.querySelector(Hl(e)))&&!u._p&&(m.instance=u,m.state.loading=5),Ta.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ta.set(e,n),u||k1(o,e,n,m.state))),t&&i===null)throw Error(s(528,""));return m}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Cr(n),n=dn(o).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Er(e){return'href="'+ya(e)+'"'}function Hl(e){return'link[rel="stylesheet"]['+e+"]"}function dg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function k1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Mt(t,"link",n),We(t),e.head.appendChild(t))}function Cr(e){return'[src="'+ya(e)+'"]'}function Ul(e){return"script[async]"+e}function fg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ya(n.href)+'"]');if(i)return t.instance=i,We(i),i;var o=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),We(i),Mt(i,"style",o),hs(i,n.precedence,e),t.instance=i;case"stylesheet":o=Er(n.href);var u=e.querySelector(Hl(o));if(u)return t.state.loading|=4,t.instance=u,We(u),u;i=dg(n),(o=Ta.get(o))&&Ed(i,o),u=(e.ownerDocument||e).createElement("link"),We(u);var m=u;return m._p=new Promise(function(h,S){m.onload=h,m.onerror=S}),Mt(u,"link",i),t.state.loading|=4,hs(u,n.precedence,e),t.instance=u;case"script":return u=Cr(n.src),(o=e.querySelector(Ul(u)))?(t.instance=o,We(o),o):(i=n,(o=Ta.get(u))&&(i=y({},n),Cd(i,o)),e=e.ownerDocument||e,o=e.createElement("script"),We(o),Mt(o,"link",i),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,hs(i,n.precedence,e));return t.instance}function hs(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,u=o,m=0;m<i.length;m++){var h=i[m];if(h.dataset.precedence===t)u=h;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ed(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Cd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ps=null;function mg(e,t,n){if(ps===null){var i=new Map,o=ps=new Map;o.set(n,i)}else o=ps,i=o.get(n),i||(i=new Map,o.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var u=n[o];if(!(u[un]||u[Be]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var h=i.get(m);h?h.push(u):i.set(m,[u])}}return i}function hg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function z1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $l=null;function R1(){}function O1(e,t,n){if($l===null)throw Error(s(475));var i=$l;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Er(n.href),u=e.querySelector(Hl(o));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=gs.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=u,We(u);return}u=e.ownerDocument||e,n=dg(n),(o=Ta.get(o))&&Ed(n,o),u=u.createElement("link"),We(u);var m=u;m._p=new Promise(function(h,S){m.onload=h,m.onerror=S}),Mt(u,"link",n),t.instance=u}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=gs.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function D1(){if($l===null)throw Error(s(475));var e=$l;return e.stylesheets&&e.count===0&&Ad(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ad(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function gs(){if(this.count--,this.count===0){if(this.stylesheets)Ad(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xs=null;function Ad(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xs=new Map,t.forEach(M1,e),xs=null,gs.call(e))}function M1(e,t){if(!(t.state.loading&4)){var n=xs.get(e);if(n)var i=n.get(null);else{n=new Map,xs.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var m=o[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),i=m)}i&&n.set(null,i)}o=t.instance,m=o.getAttribute("data-precedence"),u=n.get(m)||i,u===i&&n.set(null,o),n.set(m,o),this.count++,i=gs.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var ql={$$typeof:q,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function N1(e,t,n,i,o,u,m,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$i(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.hiddenUpdates=$i(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function gg(e,t,n,i,o,u,m,h,S,L,V,K){return e=new N1(e,t,n,m,h,S,L,K),t=1,u===!0&&(t|=24),u=la(3,null,null,t),e.current=u,u.stateNode=e,t=ou(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:n,cache:t},du(u),e}function xg(e){return e?(e=ar,e):ar}function vg(e,t,n,i,o,u){o=xg(o),i.context===null?i.context=o:i.pendingContext=o,i=$n(t),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=qn(e,i,t),n!==null&&(da(n,e,t),xl(n,e,t))}function bg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Td(e,t){bg(e,t),(e=e.alternate)&&bg(e,t)}function yg(e){if(e.tag===13){var t=tr(e,67108864);t!==null&&da(t,e,67108864),Td(e,67108864)}}var vs=!0;function B1(e,t,n,i){var o=U.T;U.T=null;var u=J.p;try{J.p=2,kd(e,t,n,i)}finally{J.p=u,U.T=o}}function _1(e,t,n,i){var o=U.T;U.T=null;var u=J.p;try{J.p=8,kd(e,t,n,i)}finally{J.p=u,U.T=o}}function kd(e,t,n,i){if(vs){var o=zd(i);if(o===null)pd(e,t,i,bs,n),Sg(e,i);else if(H1(o,e,t,n,i))i.stopPropagation();else if(Sg(e,i),t&4&&-1<L1.indexOf(e)){for(;o!==null;){var u=Bn(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=Na(u.pendingLanes);if(m!==0){var h=u;for(h.pendingLanes|=2,h.entangledLanes|=2;m;){var S=1<<31-Ue(m);h.entanglements[1]|=S,m&=~S}Wa(u),(qe&6)===0&&(as=Je()+500,Nl(0))}}break;case 13:h=tr(u,2),h!==null&&da(h,u,2),is(),Td(u,2)}if(u=zd(i),u===null&&pd(e,t,i,bs,n),u===o)break;o=u}o!==null&&i.stopPropagation()}else pd(e,t,i,null,n)}}function zd(e){return e=Nc(e),Rd(e)}var bs=null;function Rd(e){if(bs=null,e=Nn(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bs=e,null}function wg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(na()){case st:return 2;case Da:return 8;case Pt:case Ya:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Od=!1,ei=null,ti=null,ai=null,Yl=new Map,Gl=new Map,ni=[],L1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sg(e,t){switch(e){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":Yl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gl.delete(t.pointerId)}}function Vl(e,t,n,i,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[o]},t!==null&&(t=Bn(t),t!==null&&yg(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function H1(e,t,n,i,o){switch(t){case"focusin":return ei=Vl(ei,e,t,n,i,o),!0;case"dragenter":return ti=Vl(ti,e,t,n,i,o),!0;case"mouseover":return ai=Vl(ai,e,t,n,i,o),!0;case"pointerover":var u=o.pointerId;return Yl.set(u,Vl(Yl.get(u)||null,e,t,n,i,o)),!0;case"gotpointercapture":return u=o.pointerId,Gl.set(u,Vl(Gl.get(u)||null,e,t,n,i,o)),!0}return!1}function jg(e){var t=Nn(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Vi(e.priority,function(){if(n.tag===13){var i=ua();i=Yi(i);var o=tr(n,i);o!==null&&da(o,n,i),Td(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Mc=i,n.target.dispatchEvent(i),Mc=null}else return t=Bn(n),t!==null&&yg(t),e.blockedOn=n,!1;t.shift()}return!0}function Eg(e,t,n){ys(e)&&n.delete(t)}function U1(){Od=!1,ei!==null&&ys(ei)&&(ei=null),ti!==null&&ys(ti)&&(ti=null),ai!==null&&ys(ai)&&(ai=null),Yl.forEach(Eg),Gl.forEach(Eg)}function ws(e,t){e.blockedOn===t&&(e.blockedOn=null,Od||(Od=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,U1)))}var Ss=null;function Cg(e){Ss!==e&&(Ss=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ss===e&&(Ss=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],o=e[t+2];if(typeof i!="function"){if(Rd(i||n)===null)continue;break}var u=Bn(n);u!==null&&(e.splice(t,3),t-=3,Ru(u,{pending:!0,data:o,method:n.method,action:i},i,o))}}))}function Xl(e){function t(S){return ws(S,e)}ei!==null&&ws(ei,e),ti!==null&&ws(ti,e),ai!==null&&ws(ai,e),Yl.forEach(t),Gl.forEach(t);for(var n=0;n<ni.length;n++){var i=ni[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ni.length&&(n=ni[0],n.blockedOn===null);)jg(n),n.blockedOn===null&&ni.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var o=n[i],u=n[i+1],m=o[Oe]||null;if(typeof u=="function")m||Cg(n);else if(m){var h=null;if(u&&u.hasAttribute("formAction")){if(o=u,m=u[Oe]||null)h=m.formAction;else if(Rd(o)!==null)continue}else h=m.action;typeof h=="function"?n[i+1]=h:(n.splice(i,3),i-=3),Cg(n)}}}function Dd(e){this._internalRoot=e}js.prototype.render=Dd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,i=ua();vg(n,i,e,t,null,null)},js.prototype.unmount=Dd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vg(e.current,2,null,e,null,null),is(),t[pt]=null}};function js(e){this._internalRoot=e}js.prototype.unstable_scheduleHydration=function(e){if(e){var t=cn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ni.length&&t!==0&&t<ni[n].priority;n++);ni.splice(n,0,e),n===0&&jg(e)}};var Ag=r.version;if(Ag!=="19.1.0")throw Error(s(527,Ag,"19.1.0"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var $1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{Rt=Es.inject($1),Ie=Es}catch{}}return Zl.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,i="",o=Yh,u=Gh,m=Vh,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=gg(e,1,!1,null,null,n,i,o,u,m,h,null),e[pt]=t.current,hd(e),new Dd(t)},Zl.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var i=!1,o="",u=Yh,m=Gh,h=Vh,S=null,L=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks),n.formState!==void 0&&(L=n.formState)),t=gg(e,1,!0,t,n??null,i,o,u,m,h,S,L),t.context=xg(null),n=t.current,i=ua(),i=Yi(i),o=$n(i),o.callback=null,qn(n,o,i),n=i,t.current.lanes=n,rt(t,n),Wa(t),e[pt]=t.current,hd(e),new js(t)},Zl.version="19.1.0",Zl}var _g;function P1(){if(_g)return Bd.exports;_g=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Bd.exports=K1(),Bd.exports}var F1=P1(),Kl={},Lg;function J1(){if(Lg)return Kl;Lg=1,Object.defineProperty(Kl,"__esModule",{value:!0}),Kl.parse=g,Kl.serialize=p;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,l=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,f=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function g(E,D){const z=new f,N=E.length;if(N<2)return z;const B=(D==null?void 0:D.decode)||y;let O=0;do{const A=E.indexOf("=",O);if(A===-1)break;const q=E.indexOf(";",O),I=q===-1?N:q;if(A>I){O=E.lastIndexOf(";",A-1)+1;continue}const _=b(E,O,A),G=v(E,A,_),P=E.slice(_,G);if(z[P]===void 0){let ne=b(E,A+1,I),Z=v(E,I,ne);const ee=B(E.slice(ne,Z));z[P]=ee}O=I+1}while(O<N);return z}function b(E,D,z){do{const N=E.charCodeAt(D);if(N!==32&&N!==9)return D}while(++D<z);return z}function v(E,D,z){for(;D>z;){const N=E.charCodeAt(--D);if(N!==32&&N!==9)return D+1}return z}function p(E,D,z){const N=(z==null?void 0:z.encode)||encodeURIComponent;if(!a.test(E))throw new TypeError(`argument name is invalid: ${E}`);const B=N(D);if(!r.test(B))throw new TypeError(`argument val is invalid: ${D}`);let O=E+"="+B;if(!z)return O;if(z.maxAge!==void 0){if(!Number.isInteger(z.maxAge))throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);O+="; Max-Age="+z.maxAge}if(z.domain){if(!l.test(z.domain))throw new TypeError(`option domain is invalid: ${z.domain}`);O+="; Domain="+z.domain}if(z.path){if(!s.test(z.path))throw new TypeError(`option path is invalid: ${z.path}`);O+="; Path="+z.path}if(z.expires){if(!k(z.expires)||!Number.isFinite(z.expires.valueOf()))throw new TypeError(`option expires is invalid: ${z.expires}`);O+="; Expires="+z.expires.toUTCString()}if(z.httpOnly&&(O+="; HttpOnly"),z.secure&&(O+="; Secure"),z.partitioned&&(O+="; Partitioned"),z.priority)switch(typeof z.priority=="string"?z.priority.toLowerCase():void 0){case"low":O+="; Priority=Low";break;case"medium":O+="; Priority=Medium";break;case"high":O+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${z.priority}`)}if(z.sameSite)switch(typeof z.sameSite=="string"?z.sameSite.toLowerCase():z.sameSite){case!0:case"strict":O+="; SameSite=Strict";break;case"lax":O+="; SameSite=Lax";break;case"none":O+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${z.sameSite}`)}return O}function y(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function k(E){return d.call(E)==="[object Date]"}return Kl}J1();var Hg="popstate";function I1(a={}){function r(s,d){let{pathname:f,search:g,hash:b}=s.location;return nf("",{pathname:f,search:g,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function l(s,d){return typeof d=="string"?d:eo(d)}return ey(r,l,null,a)}function it(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function an(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function W1(){return Math.random().toString(36).substring(2,10)}function Ug(a,r){return{usr:a.state,key:a.key,idx:r}}function nf(a,r,l=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof r=="string"?Vr(r):r,state:l,key:r&&r.key||s||W1()}}function eo({pathname:a="/",search:r="",hash:l=""}){return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(a+=l.charAt(0)==="#"?l:"#"+l),a}function Vr(a){let r={};if(a){let l=a.indexOf("#");l>=0&&(r.hash=a.substring(l),a=a.substring(0,l));let s=a.indexOf("?");s>=0&&(r.search=a.substring(s),a=a.substring(0,s)),a&&(r.pathname=a)}return r}function ey(a,r,l,s={}){let{window:d=document.defaultView,v5Compat:f=!1}=s,g=d.history,b="POP",v=null,p=y();p==null&&(p=0,g.replaceState({...g.state,idx:p},""));function y(){return(g.state||{idx:null}).idx}function k(){b="POP";let B=y(),O=B==null?null:B-p;p=B,v&&v({action:b,location:N.location,delta:O})}function E(B,O){b="PUSH";let A=nf(N.location,B,O);p=y()+1;let q=Ug(A,p),I=N.createHref(A);try{g.pushState(q,"",I)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;d.location.assign(I)}f&&v&&v({action:b,location:N.location,delta:1})}function D(B,O){b="REPLACE";let A=nf(N.location,B,O);p=y();let q=Ug(A,p),I=N.createHref(A);g.replaceState(q,"",I),f&&v&&v({action:b,location:N.location,delta:0})}function z(B){return ty(B)}let N={get action(){return b},get location(){return a(d,g)},listen(B){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(Hg,k),v=B,()=>{d.removeEventListener(Hg,k),v=null}},createHref(B){return r(d,B)},createURL:z,encodeLocation(B){let O=z(B);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:E,replace:D,go(B){return g.go(B)}};return N}function ty(a,r=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),it(l,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:eo(a);return s=s.replace(/ $/,"%20"),!r&&s.startsWith("//")&&(s=l+s),new URL(s,l)}function H0(a,r,l="/"){return ay(a,r,l,!1)}function ay(a,r,l,s){let d=typeof r=="string"?Vr(r):r,f=On(d.pathname||"/",l);if(f==null)return null;let g=U0(a);ny(g);let b=null;for(let v=0;b==null&&v<g.length;++v){let p=hy(f);b=fy(g[v],p,s)}return b}function U0(a,r=[],l=[],s=""){let d=(f,g,b)=>{let v={relativePath:b===void 0?f.path||"":b,caseSensitive:f.caseSensitive===!0,childrenIndex:g,route:f};v.relativePath.startsWith("/")&&(it(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length));let p=zn([s,v.relativePath]),y=l.concat(v);f.children&&f.children.length>0&&(it(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),U0(f.children,r,y,p)),!(f.path==null&&!f.index)&&r.push({path:p,score:uy(p,f.index),routesMeta:y})};return a.forEach((f,g)=>{var b;if(f.path===""||!((b=f.path)!=null&&b.includes("?")))d(f,g);else for(let v of $0(f.path))d(f,g,v)}),r}function $0(a){let r=a.split("/");if(r.length===0)return[];let[l,...s]=r,d=l.endsWith("?"),f=l.replace(/\?$/,"");if(s.length===0)return d?[f,""]:[f];let g=$0(s.join("/")),b=[];return b.push(...g.map(v=>v===""?f:[f,v].join("/"))),d&&b.push(...g),b.map(v=>a.startsWith("/")&&v===""?"/":v)}function ny(a){a.sort((r,l)=>r.score!==l.score?l.score-r.score:dy(r.routesMeta.map(s=>s.childrenIndex),l.routesMeta.map(s=>s.childrenIndex)))}var iy=/^:[\w-]+$/,ry=3,ly=2,oy=1,sy=10,cy=-2,$g=a=>a==="*";function uy(a,r){let l=a.split("/"),s=l.length;return l.some($g)&&(s+=cy),r&&(s+=ly),l.filter(d=>!$g(d)).reduce((d,f)=>d+(iy.test(f)?ry:f===""?oy:sy),s)}function dy(a,r){return a.length===r.length&&a.slice(0,-1).every((s,d)=>s===r[d])?a[a.length-1]-r[r.length-1]:0}function fy(a,r,l=!1){let{routesMeta:s}=a,d={},f="/",g=[];for(let b=0;b<s.length;++b){let v=s[b],p=b===s.length-1,y=f==="/"?r:r.slice(f.length)||"/",k=Js({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},y),E=v.route;if(!k&&p&&l&&!s[s.length-1].route.index&&(k=Js({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},y)),!k)return null;Object.assign(d,k.params),g.push({params:d,pathname:zn([f,k.pathname]),pathnameBase:vy(zn([f,k.pathnameBase])),route:E}),k.pathnameBase!=="/"&&(f=zn([f,k.pathnameBase]))}return g}function Js(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[l,s]=my(a.path,a.caseSensitive,a.end),d=r.match(l);if(!d)return null;let f=d[0],g=f.replace(/(.)\/+$/,"$1"),b=d.slice(1);return{params:s.reduce((p,{paramName:y,isOptional:k},E)=>{if(y==="*"){let z=b[E]||"";g=f.slice(0,f.length-z.length).replace(/(.)\/+$/,"$1")}const D=b[E];return k&&!D?p[y]=void 0:p[y]=(D||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:g,pattern:a}}function my(a,r=!1,l=!0){an(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,b,v)=>(s.push({paramName:b,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(s.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,r?void 0:"i"),s]}function hy(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return an(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),a}}function On(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let l=r.endsWith("/")?r.length-1:r.length,s=a.charAt(l);return s&&s!=="/"?null:a.slice(l)||"/"}function py(a,r="/"){let{pathname:l,search:s="",hash:d=""}=typeof a=="string"?Vr(a):a;return{pathname:l?l.startsWith("/")?l:gy(l,r):r,search:by(s),hash:yy(d)}}function gy(a,r){let l=r.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?l.length>1&&l.pop():d!=="."&&l.push(d)}),l.length>1?l.join("/"):"/"}function Ud(a,r,l,s){return`Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xy(a){return a.filter((r,l)=>l===0||r.route.path&&r.route.path.length>0)}function q0(a){let r=xy(a);return r.map((l,s)=>s===r.length-1?l.pathname:l.pathnameBase)}function Y0(a,r,l,s=!1){let d;typeof a=="string"?d=Vr(a):(d={...a},it(!d.pathname||!d.pathname.includes("?"),Ud("?","pathname","search",d)),it(!d.pathname||!d.pathname.includes("#"),Ud("#","pathname","hash",d)),it(!d.search||!d.search.includes("#"),Ud("#","search","hash",d)));let f=a===""||d.pathname==="",g=f?"/":d.pathname,b;if(g==null)b=l;else{let k=r.length-1;if(!s&&g.startsWith("..")){let E=g.split("/");for(;E[0]==="..";)E.shift(),k-=1;d.pathname=E.join("/")}b=k>=0?r[k]:"/"}let v=py(d,b),p=g&&g!=="/"&&g.endsWith("/"),y=(f||g===".")&&l.endsWith("/");return!v.pathname.endsWith("/")&&(p||y)&&(v.pathname+="/"),v}var zn=a=>a.join("/").replace(/\/\/+/g,"/"),vy=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),by=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,yy=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function wy(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var G0=["POST","PUT","PATCH","DELETE"];new Set(G0);var Sy=["GET",...G0];new Set(Sy);var Xr=x.createContext(null);Xr.displayName="DataRouter";var mc=x.createContext(null);mc.displayName="DataRouterState";var V0=x.createContext({isTransitioning:!1});V0.displayName="ViewTransition";var jy=x.createContext(new Map);jy.displayName="Fetchers";var Ey=x.createContext(null);Ey.displayName="Await";var rn=x.createContext(null);rn.displayName="Navigation";var io=x.createContext(null);io.displayName="Location";var Dn=x.createContext({outlet:null,matches:[],isDataRoute:!1});Dn.displayName="Route";var jf=x.createContext(null);jf.displayName="RouteError";function Cy(a,{relative:r}={}){it(ro(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:s}=x.useContext(rn),{hash:d,pathname:f,search:g}=lo(a,{relative:r}),b=f;return l!=="/"&&(b=f==="/"?l:zn([l,f])),s.createHref({pathname:b,search:g,hash:d})}function ro(){return x.useContext(io)!=null}function $a(){return it(ro(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(io).location}var X0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q0(a){x.useContext(rn).static||x.useLayoutEffect(a)}function Bi(){let{isDataRoute:a}=x.useContext(Dn);return a?Hy():Ay()}function Ay(){it(ro(),"useNavigate() may be used only in the context of a <Router> component.");let a=x.useContext(Xr),{basename:r,navigator:l}=x.useContext(rn),{matches:s}=x.useContext(Dn),{pathname:d}=$a(),f=JSON.stringify(q0(s)),g=x.useRef(!1);return Q0(()=>{g.current=!0}),x.useCallback((v,p={})=>{if(an(g.current,X0),!g.current)return;if(typeof v=="number"){l.go(v);return}let y=Y0(v,JSON.parse(f),d,p.relative==="path");a==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:zn([r,y.pathname])),(p.replace?l.replace:l.push)(y,p.state,p)},[r,l,f,d,a])}x.createContext(null);function lo(a,{relative:r}={}){let{matches:l}=x.useContext(Dn),{pathname:s}=$a(),d=JSON.stringify(q0(l));return x.useMemo(()=>Y0(a,JSON.parse(d),s,r==="path"),[a,d,s,r])}function Ty(a,r){return Z0(a,r)}function Z0(a,r,l,s){var O;it(ro(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=x.useContext(rn),{matches:f}=x.useContext(Dn),g=f[f.length-1],b=g?g.params:{},v=g?g.pathname:"/",p=g?g.pathnameBase:"/",y=g&&g.route;{let A=y&&y.path||"";K0(v,!y||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let k=$a(),E;if(r){let A=typeof r=="string"?Vr(r):r;it(p==="/"||((O=A.pathname)==null?void 0:O.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${A.pathname}" was given in the \`location\` prop.`),E=A}else E=k;let D=E.pathname||"/",z=D;if(p!=="/"){let A=p.replace(/^\//,"").split("/");z="/"+D.replace(/^\//,"").split("/").slice(A.length).join("/")}let N=H0(a,{pathname:z});an(y||N!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),an(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=Dy(N&&N.map(A=>Object.assign({},A,{params:Object.assign({},b,A.params),pathname:zn([p,d.encodeLocation?d.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?p:zn([p,d.encodeLocation?d.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),f,l,s);return r&&B?x.createElement(io.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},B):B}function ky(){let a=Ly(),r=wy(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),l=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},g=null;return console.error("Error handled by React Router default ErrorBoundary:",a),g=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:f},"ErrorBoundary")," or"," ",x.createElement("code",{style:f},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},r),l?x.createElement("pre",{style:d},l):null,g)}var zy=x.createElement(ky,null),Ry=class extends x.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){console.error("React Router caught the following error during render",a,r)}render(){return this.state.error!==void 0?x.createElement(Dn.Provider,{value:this.props.routeContext},x.createElement(jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Oy({routeContext:a,match:r,children:l}){let s=x.useContext(Xr);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),x.createElement(Dn.Provider,{value:a},l)}function Dy(a,r=[],l=null,s=null){if(a==null){if(!l)return null;if(l.errors)a=l.matches;else if(r.length===0&&!l.initialized&&l.matches.length>0)a=l.matches;else return null}let d=a,f=l==null?void 0:l.errors;if(f!=null){let v=d.findIndex(p=>p.route.id&&(f==null?void 0:f[p.route.id])!==void 0);it(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let g=!1,b=-1;if(l)for(let v=0;v<d.length;v++){let p=d[v];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(b=v),p.route.id){let{loaderData:y,errors:k}=l,E=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!k||k[p.route.id]===void 0);if(p.route.lazy||E){g=!0,b>=0?d=d.slice(0,b+1):d=[d[0]];break}}}return d.reduceRight((v,p,y)=>{let k,E=!1,D=null,z=null;l&&(k=f&&p.route.id?f[p.route.id]:void 0,D=p.route.errorElement||zy,g&&(b<0&&y===0?(K0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,z=null):b===y&&(E=!0,z=p.route.hydrateFallbackElement||null)));let N=r.concat(d.slice(0,y+1)),B=()=>{let O;return k?O=D:E?O=z:p.route.Component?O=x.createElement(p.route.Component,null):p.route.element?O=p.route.element:O=v,x.createElement(Oy,{match:p,routeContext:{outlet:v,matches:N,isDataRoute:l!=null},children:O})};return l&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?x.createElement(Ry,{location:l.location,revalidation:l.revalidation,component:D,error:k,children:B(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):B()},null)}function Ef(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function My(a){let r=x.useContext(Xr);return it(r,Ef(a)),r}function Ny(a){let r=x.useContext(mc);return it(r,Ef(a)),r}function By(a){let r=x.useContext(Dn);return it(r,Ef(a)),r}function Cf(a){let r=By(a),l=r.matches[r.matches.length-1];return it(l.route.id,`${a} can only be used on routes that contain a unique "id"`),l.route.id}function _y(){return Cf("useRouteId")}function Ly(){var s;let a=x.useContext(jf),r=Ny("useRouteError"),l=Cf("useRouteError");return a!==void 0?a:(s=r.errors)==null?void 0:s[l]}function Hy(){let{router:a}=My("useNavigate"),r=Cf("useNavigate"),l=x.useRef(!1);return Q0(()=>{l.current=!0}),x.useCallback(async(d,f={})=>{an(l.current,X0),l.current&&(typeof d=="number"?a.navigate(d):await a.navigate(d,{fromRouteId:r,...f}))},[a,r])}var qg={};function K0(a,r,l){!r&&!qg[a]&&(qg[a]=!0,an(!1,l))}x.memo(Uy);function Uy({routes:a,future:r,state:l}){return Z0(a,void 0,l,r)}function ka(a){it(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $y({basename:a="/",children:r=null,location:l,navigationType:s="POP",navigator:d,static:f=!1}){it(!ro(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=a.replace(/^\/*/,"/"),b=x.useMemo(()=>({basename:g,navigator:d,static:f,future:{}}),[g,d,f]);typeof l=="string"&&(l=Vr(l));let{pathname:v="/",search:p="",hash:y="",state:k=null,key:E="default"}=l,D=x.useMemo(()=>{let z=On(v,g);return z==null?null:{location:{pathname:z,search:p,hash:y,state:k,key:E},navigationType:s}},[g,v,p,y,k,E,s]);return an(D!=null,`<Router basename="${g}"> is not able to match the URL "${v}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:x.createElement(rn.Provider,{value:b},x.createElement(io.Provider,{children:r,value:D}))}function qy({children:a,location:r}){return Ty(rf(a),r)}function rf(a,r=[]){let l=[];return x.Children.forEach(a,(s,d)=>{if(!x.isValidElement(s))return;let f=[...r,d];if(s.type===x.Fragment){l.push.apply(l,rf(s.props.children,f));return}it(s.type===ka,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),it(!s.props.index||!s.props.children,"An index route cannot have child routes.");let g={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(g.children=rf(s.props.children,f)),l.push(g)}),l}var Vs="get",Xs="application/x-www-form-urlencoded";function hc(a){return a!=null&&typeof a.tagName=="string"}function Yy(a){return hc(a)&&a.tagName.toLowerCase()==="button"}function Gy(a){return hc(a)&&a.tagName.toLowerCase()==="form"}function Vy(a){return hc(a)&&a.tagName.toLowerCase()==="input"}function Xy(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Qy(a,r){return a.button===0&&(!r||r==="_self")&&!Xy(a)}var Cs=null;function Zy(){if(Cs===null)try{new FormData(document.createElement("form"),0),Cs=!1}catch{Cs=!0}return Cs}var Ky=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $d(a){return a!=null&&!Ky.has(a)?(an(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xs}"`),null):a}function Py(a,r){let l,s,d,f,g;if(Gy(a)){let b=a.getAttribute("action");s=b?On(b,r):null,l=a.getAttribute("method")||Vs,d=$d(a.getAttribute("enctype"))||Xs,f=new FormData(a)}else if(Yy(a)||Vy(a)&&(a.type==="submit"||a.type==="image")){let b=a.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=a.getAttribute("formaction")||b.getAttribute("action");if(s=v?On(v,r):null,l=a.getAttribute("formmethod")||b.getAttribute("method")||Vs,d=$d(a.getAttribute("formenctype"))||$d(b.getAttribute("enctype"))||Xs,f=new FormData(b,a),!Zy()){let{name:p,type:y,value:k}=a;if(y==="image"){let E=p?`${p}.`:"";f.append(`${E}x`,"0"),f.append(`${E}y`,"0")}else p&&f.append(p,k)}}else{if(hc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=Vs,s=null,d=Xs,g=a}return f&&d==="text/plain"&&(g=f,f=void 0),{action:s,method:l.toLowerCase(),encType:d,formData:f,body:g}}function Af(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}async function Fy(a,r){if(a.id in r)return r[a.id];try{let l=await import(a.module);return r[a.id]=l,l}catch(l){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jy(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Iy(a,r,l){let s=await Promise.all(a.map(async d=>{let f=r.routes[d.route.id];if(f){let g=await Fy(f,l);return g.links?g.links():[]}return[]}));return aw(s.flat(1).filter(Jy).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Yg(a,r,l,s,d,f){let g=(v,p)=>l[p]?v.route.id!==l[p].route.id:!0,b=(v,p)=>{var y;return l[p].pathname!==v.pathname||((y=l[p].route.path)==null?void 0:y.endsWith("*"))&&l[p].params["*"]!==v.params["*"]};return f==="assets"?r.filter((v,p)=>g(v,p)||b(v,p)):f==="data"?r.filter((v,p)=>{var k;let y=s.routes[v.route.id];if(!y||!y.hasLoader)return!1;if(g(v,p)||b(v,p))return!0;if(v.route.shouldRevalidate){let E=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((k=l[0])==null?void 0:k.params)||{},nextUrl:new URL(a,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function Wy(a,r,{includeHydrateFallback:l}={}){return ew(a.map(s=>{let d=r.routes[s.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),l&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function ew(a){return[...new Set(a)]}function tw(a){let r={},l=Object.keys(a).sort();for(let s of l)r[s]=a[s];return r}function aw(a,r){let l=new Set;return new Set(r),a.reduce((s,d)=>{let f=JSON.stringify(tw(d));return l.has(f)||(l.add(f),s.push({key:f,link:d})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var nw=new Set([100,101,204,205]);function iw(a,r){let l=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return l.pathname==="/"?l.pathname="_root.data":r&&On(l.pathname,r)==="/"?l.pathname=`${r.replace(/\/$/,"")}/_root.data`:l.pathname=`${l.pathname.replace(/\/$/,"")}.data`,l}function P0(){let a=x.useContext(Xr);return Af(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function rw(){let a=x.useContext(mc);return Af(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Tf=x.createContext(void 0);Tf.displayName="FrameworkContext";function F0(){let a=x.useContext(Tf);return Af(a,"You must render this element inside a <HydratedRouter> element"),a}function lw(a,r){let l=x.useContext(Tf),[s,d]=x.useState(!1),[f,g]=x.useState(!1),{onFocus:b,onBlur:v,onMouseEnter:p,onMouseLeave:y,onTouchStart:k}=r,E=x.useRef(null);x.useEffect(()=>{if(a==="render"&&g(!0),a==="viewport"){let N=O=>{O.forEach(A=>{g(A.isIntersecting)})},B=new IntersectionObserver(N,{threshold:.5});return E.current&&B.observe(E.current),()=>{B.disconnect()}}},[a]),x.useEffect(()=>{if(s){let N=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(N)}}},[s]);let D=()=>{d(!0)},z=()=>{d(!1),g(!1)};return l?a!=="intent"?[f,E,{}]:[f,E,{onFocus:Pl(b,D),onBlur:Pl(v,z),onMouseEnter:Pl(p,D),onMouseLeave:Pl(y,z),onTouchStart:Pl(k,D)}]:[!1,E,{}]}function Pl(a,r){return l=>{a&&a(l),l.defaultPrevented||r(l)}}function ow({page:a,...r}){let{router:l}=P0(),s=x.useMemo(()=>H0(l.routes,a,l.basename),[l.routes,a,l.basename]);return s?x.createElement(cw,{page:a,matches:s,...r}):null}function sw(a){let{manifest:r,routeModules:l}=F0(),[s,d]=x.useState([]);return x.useEffect(()=>{let f=!1;return Iy(a,r,l).then(g=>{f||d(g)}),()=>{f=!0}},[a,r,l]),s}function cw({page:a,matches:r,...l}){let s=$a(),{manifest:d,routeModules:f}=F0(),{basename:g}=P0(),{loaderData:b,matches:v}=rw(),p=x.useMemo(()=>Yg(a,r,v,d,s,"data"),[a,r,v,d,s]),y=x.useMemo(()=>Yg(a,r,v,d,s,"assets"),[a,r,v,d,s]),k=x.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let z=new Set,N=!1;if(r.forEach(O=>{var q;let A=d.routes[O.route.id];!A||!A.hasLoader||(!p.some(I=>I.route.id===O.route.id)&&O.route.id in b&&((q=f[O.route.id])!=null&&q.shouldRevalidate)||A.hasClientLoader?N=!0:z.add(O.route.id))}),z.size===0)return[];let B=iw(a,g);return N&&z.size>0&&B.searchParams.set("_routes",r.filter(O=>z.has(O.route.id)).map(O=>O.route.id).join(",")),[B.pathname+B.search]},[g,b,s,d,p,r,a,f]),E=x.useMemo(()=>Wy(y,d),[y,d]),D=sw(y);return x.createElement(x.Fragment,null,k.map(z=>x.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...l})),E.map(z=>x.createElement("link",{key:z,rel:"modulepreload",href:z,...l})),D.map(({key:z,link:N})=>x.createElement("link",{key:z,...N})))}function uw(...a){return r=>{a.forEach(l=>{typeof l=="function"?l(r):l!=null&&(l.current=r)})}}var J0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{J0&&(window.__reactRouterVersion="7.6.2")}catch{}function dw({basename:a,children:r,window:l}){let s=x.useRef();s.current==null&&(s.current=I1({window:l,v5Compat:!0}));let d=s.current,[f,g]=x.useState({action:d.action,location:d.location}),b=x.useCallback(v=>{x.startTransition(()=>g(v))},[g]);return x.useLayoutEffect(()=>d.listen(b),[d,b]),x.createElement($y,{basename:a,children:r,location:f.location,navigationType:f.action,navigator:d})}var I0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ma=x.forwardRef(function({onClick:r,discover:l="render",prefetch:s="none",relative:d,reloadDocument:f,replace:g,state:b,target:v,to:p,preventScrollReset:y,viewTransition:k,...E},D){let{basename:z}=x.useContext(rn),N=typeof p=="string"&&I0.test(p),B,O=!1;if(typeof p=="string"&&N&&(B=p,J0))try{let Z=new URL(window.location.href),ee=p.startsWith("//")?new URL(Z.protocol+p):new URL(p),le=On(ee.pathname,z);ee.origin===Z.origin&&le!=null?p=le+ee.search+ee.hash:O=!0}catch{an(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=Cy(p,{relative:d}),[q,I,_]=lw(s,E),G=pw(p,{replace:g,state:b,target:v,preventScrollReset:y,relative:d,viewTransition:k});function P(Z){r&&r(Z),Z.defaultPrevented||G(Z)}let ne=x.createElement("a",{...E,..._,href:B||A,onClick:O||f?r:P,ref:uw(D,I),target:v,"data-discover":!N&&l==="render"?"true":void 0});return q&&!N?x.createElement(x.Fragment,null,ne,x.createElement(ow,{page:A})):ne});ma.displayName="Link";var fw=x.forwardRef(function({"aria-current":r="page",caseSensitive:l=!1,className:s="",end:d=!1,style:f,to:g,viewTransition:b,children:v,...p},y){let k=lo(g,{relative:p.relative}),E=$a(),D=x.useContext(mc),{navigator:z,basename:N}=x.useContext(rn),B=D!=null&&yw(k)&&b===!0,O=z.encodeLocation?z.encodeLocation(k).pathname:k.pathname,A=E.pathname,q=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;l||(A=A.toLowerCase(),q=q?q.toLowerCase():null,O=O.toLowerCase()),q&&N&&(q=On(q,N)||q);const I=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let _=A===O||!d&&A.startsWith(O)&&A.charAt(I)==="/",G=q!=null&&(q===O||!d&&q.startsWith(O)&&q.charAt(O.length)==="/"),P={isActive:_,isPending:G,isTransitioning:B},ne=_?r:void 0,Z;typeof s=="function"?Z=s(P):Z=[s,_?"active":null,G?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let ee=typeof f=="function"?f(P):f;return x.createElement(ma,{...p,"aria-current":ne,className:Z,ref:y,style:ee,to:g,viewTransition:b},typeof v=="function"?v(P):v)});fw.displayName="NavLink";var mw=x.forwardRef(({discover:a="render",fetcherKey:r,navigate:l,reloadDocument:s,replace:d,state:f,method:g=Vs,action:b,onSubmit:v,relative:p,preventScrollReset:y,viewTransition:k,...E},D)=>{let z=vw(),N=bw(b,{relative:p}),B=g.toLowerCase()==="get"?"get":"post",O=typeof b=="string"&&I0.test(b),A=q=>{if(v&&v(q),q.defaultPrevented)return;q.preventDefault();let I=q.nativeEvent.submitter,_=(I==null?void 0:I.getAttribute("formmethod"))||g;z(I||q.currentTarget,{fetcherKey:r,method:_,navigate:l,replace:d,state:f,relative:p,preventScrollReset:y,viewTransition:k})};return x.createElement("form",{ref:D,method:B,action:N,onSubmit:s?v:A,...E,"data-discover":!O&&a==="render"?"true":void 0})});mw.displayName="Form";function hw(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function W0(a){let r=x.useContext(Xr);return it(r,hw(a)),r}function pw(a,{target:r,replace:l,state:s,preventScrollReset:d,relative:f,viewTransition:g}={}){let b=Bi(),v=$a(),p=lo(a,{relative:f});return x.useCallback(y=>{if(Qy(y,r)){y.preventDefault();let k=l!==void 0?l:eo(v)===eo(p);b(a,{replace:k,state:s,preventScrollReset:d,relative:f,viewTransition:g})}},[v,b,p,l,s,r,a,d,f,g])}var gw=0,xw=()=>`__${String(++gw)}__`;function vw(){let{router:a}=W0("useSubmit"),{basename:r}=x.useContext(rn),l=_y();return x.useCallback(async(s,d={})=>{let{action:f,method:g,encType:b,formData:v,body:p}=Py(s,r);if(d.navigate===!1){let y=d.fetcherKey||xw();await a.fetch(y,l,d.action||f,{preventScrollReset:d.preventScrollReset,formData:v,body:p,formMethod:d.method||g,formEncType:d.encType||b,flushSync:d.flushSync})}else await a.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:v,body:p,formMethod:d.method||g,formEncType:d.encType||b,replace:d.replace,state:d.state,fromRouteId:l,flushSync:d.flushSync,viewTransition:d.viewTransition})},[a,r,l])}function bw(a,{relative:r}={}){let{basename:l}=x.useContext(rn),s=x.useContext(Dn);it(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),f={...lo(a||".",{relative:r})},g=$a();if(a==null){f.search=g.search;let b=new URLSearchParams(f.search),v=b.getAll("index");if(v.some(y=>y==="")){b.delete("index"),v.filter(k=>k).forEach(k=>b.append("index",k));let y=b.toString();f.search=y?`?${y}`:""}}return(!a||a===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(f.pathname=f.pathname==="/"?l:zn([l,f.pathname])),eo(f)}function yw(a,r={}){let l=x.useContext(V0);it(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=W0("useViewTransitionState"),d=lo(a,{relative:r.relative});if(!l.isTransitioning)return!1;let f=On(l.currentLocation.pathname,s)||l.currentLocation.pathname,g=On(l.nextLocation.pathname,s)||l.nextLocation.pathname;return Js(d.pathname,g)!=null||Js(d.pathname,f)!=null}[...nw];var ww=L0();const ex=x.createContext(),Sw=({children:a})=>{const[r,l]=x.useState("ar"),s=()=>{l(d=>d==="ar"?"en":"ar")};return c.jsx(ex.Provider,{value:{language:r,toggleLanguage:s},children:a})},pa=()=>{const a=x.useContext(ex);if(!a)throw new Error("useLanguage must be used within a LanguageProvider");return a};var Ut=function(){return Ut=Object.assign||function(r){for(var l,s=1,d=arguments.length;s<d;s++){l=arguments[s];for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(r[f]=l[f])}return r},Ut.apply(this,arguments)};function to(a,r,l){if(l||arguments.length===2)for(var s=0,d=r.length,f;s<d;s++)(f||!(s in r))&&(f||(f=Array.prototype.slice.call(r,0,s)),f[s]=r[s]);return a.concat(f||Array.prototype.slice.call(r))}var Fe="-ms-",Wl="-moz-",He="-webkit-",tx="comm",pc="rule",kf="decl",jw="@import",ax="@keyframes",Ew="@layer",nx=Math.abs,zf=String.fromCharCode,lf=Object.assign;function Cw(a,r){return kt(a,0)^45?(((r<<2^kt(a,0))<<2^kt(a,1))<<2^kt(a,2))<<2^kt(a,3):0}function ix(a){return a.trim()}function Tn(a,r){return(a=r.exec(a))?a[0]:a}function Ee(a,r,l){return a.replace(r,l)}function Qs(a,r,l){return a.indexOf(r,l)}function kt(a,r){return a.charCodeAt(r)|0}function _r(a,r,l){return a.slice(r,l)}function tn(a){return a.length}function rx(a){return a.length}function Il(a,r){return r.push(a),a}function Aw(a,r){return a.map(r).join("")}function Gg(a,r){return a.filter(function(l){return!Tn(l,r)})}var gc=1,Lr=1,lx=0,Ra=0,vt=0,Qr="";function xc(a,r,l,s,d,f,g,b){return{value:a,root:r,parent:l,type:s,props:d,children:f,line:gc,column:Lr,length:g,return:"",siblings:b}}function ri(a,r){return lf(xc("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function Ar(a){for(;a.root;)a=ri(a.root,{children:[a]});Il(a,a.siblings)}function Tw(){return vt}function kw(){return vt=Ra>0?kt(Qr,--Ra):0,Lr--,vt===10&&(Lr=1,gc--),vt}function Ua(){return vt=Ra<lx?kt(Qr,Ra++):0,Lr++,vt===10&&(Lr=1,gc++),vt}function Oi(){return kt(Qr,Ra)}function Zs(){return Ra}function vc(a,r){return _r(Qr,a,r)}function of(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zw(a){return gc=Lr=1,lx=tn(Qr=a),Ra=0,[]}function Rw(a){return Qr="",a}function qd(a){return ix(vc(Ra-1,sf(a===91?a+2:a===40?a+1:a)))}function Ow(a){for(;(vt=Oi())&&vt<33;)Ua();return of(a)>2||of(vt)>3?"":" "}function Dw(a,r){for(;--r&&Ua()&&!(vt<48||vt>102||vt>57&&vt<65||vt>70&&vt<97););return vc(a,Zs()+(r<6&&Oi()==32&&Ua()==32))}function sf(a){for(;Ua();)switch(vt){case a:return Ra;case 34:case 39:a!==34&&a!==39&&sf(vt);break;case 40:a===41&&sf(a);break;case 92:Ua();break}return Ra}function Mw(a,r){for(;Ua()&&a+vt!==57;)if(a+vt===84&&Oi()===47)break;return"/*"+vc(r,Ra-1)+"*"+zf(a===47?a:Ua())}function Nw(a){for(;!of(Oi());)Ua();return vc(a,Ra)}function Bw(a){return Rw(Ks("",null,null,null,[""],a=zw(a),0,[0],a))}function Ks(a,r,l,s,d,f,g,b,v){for(var p=0,y=0,k=g,E=0,D=0,z=0,N=1,B=1,O=1,A=0,q="",I=d,_=f,G=s,P=q;B;)switch(z=A,A=Ua()){case 40:if(z!=108&&kt(P,k-1)==58){Qs(P+=Ee(qd(A),"&","&\f"),"&\f",nx(p?b[p-1]:0))!=-1&&(O=-1);break}case 34:case 39:case 91:P+=qd(A);break;case 9:case 10:case 13:case 32:P+=Ow(z);break;case 92:P+=Dw(Zs()-1,7);continue;case 47:switch(Oi()){case 42:case 47:Il(_w(Mw(Ua(),Zs()),r,l,v),v);break;default:P+="/"}break;case 123*N:b[p++]=tn(P)*O;case 125*N:case 59:case 0:switch(A){case 0:case 125:B=0;case 59+y:O==-1&&(P=Ee(P,/\f/g,"")),D>0&&tn(P)-k&&Il(D>32?Xg(P+";",s,l,k-1,v):Xg(Ee(P," ","")+";",s,l,k-2,v),v);break;case 59:P+=";";default:if(Il(G=Vg(P,r,l,p,y,d,b,q,I=[],_=[],k,f),f),A===123)if(y===0)Ks(P,r,G,G,I,f,k,b,_);else switch(E===99&&kt(P,3)===110?100:E){case 100:case 108:case 109:case 115:Ks(a,G,G,s&&Il(Vg(a,G,G,0,0,d,b,q,d,I=[],k,_),_),d,_,k,b,s?I:_);break;default:Ks(P,G,G,G,[""],_,0,b,_)}}p=y=D=0,N=O=1,q=P="",k=g;break;case 58:k=1+tn(P),D=z;default:if(N<1){if(A==123)--N;else if(A==125&&N++==0&&kw()==125)continue}switch(P+=zf(A),A*N){case 38:O=y>0?1:(P+="\f",-1);break;case 44:b[p++]=(tn(P)-1)*O,O=1;break;case 64:Oi()===45&&(P+=qd(Ua())),E=Oi(),y=k=tn(q=P+=Nw(Zs())),A++;break;case 45:z===45&&tn(P)==2&&(N=0)}}return f}function Vg(a,r,l,s,d,f,g,b,v,p,y,k){for(var E=d-1,D=d===0?f:[""],z=rx(D),N=0,B=0,O=0;N<s;++N)for(var A=0,q=_r(a,E+1,E=nx(B=g[N])),I=a;A<z;++A)(I=ix(B>0?D[A]+" "+q:Ee(q,/&\f/g,D[A])))&&(v[O++]=I);return xc(a,r,l,d===0?pc:b,v,p,y,k)}function _w(a,r,l,s){return xc(a,r,l,tx,zf(Tw()),_r(a,2,-2),0,s)}function Xg(a,r,l,s,d){return xc(a,r,l,kf,_r(a,0,s),_r(a,s+1,-1),s,d)}function ox(a,r,l){switch(Cw(a,r)){case 5103:return He+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return He+a+a;case 4789:return Wl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return He+a+Wl+a+Fe+a+a;case 5936:switch(kt(a,r+11)){case 114:return He+a+Fe+Ee(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return He+a+Fe+Ee(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return He+a+Fe+Ee(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return He+a+Fe+a+a;case 6165:return He+a+Fe+"flex-"+a+a;case 5187:return He+a+Ee(a,/(\w+).+(:[^]+)/,He+"box-$1$2"+Fe+"flex-$1$2")+a;case 5443:return He+a+Fe+"flex-item-"+Ee(a,/flex-|-self/g,"")+(Tn(a,/flex-|baseline/)?"":Fe+"grid-row-"+Ee(a,/flex-|-self/g,""))+a;case 4675:return He+a+Fe+"flex-line-pack"+Ee(a,/align-content|flex-|-self/g,"")+a;case 5548:return He+a+Fe+Ee(a,"shrink","negative")+a;case 5292:return He+a+Fe+Ee(a,"basis","preferred-size")+a;case 6060:return He+"box-"+Ee(a,"-grow","")+He+a+Fe+Ee(a,"grow","positive")+a;case 4554:return He+Ee(a,/([^-])(transform)/g,"$1"+He+"$2")+a;case 6187:return Ee(Ee(Ee(a,/(zoom-|grab)/,He+"$1"),/(image-set)/,He+"$1"),a,"")+a;case 5495:case 3959:return Ee(a,/(image-set\([^]*)/,He+"$1$`$1");case 4968:return Ee(Ee(a,/(.+:)(flex-)?(.*)/,He+"box-pack:$3"+Fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+He+a+a;case 4200:if(!Tn(a,/flex-|baseline/))return Fe+"grid-column-align"+_r(a,r)+a;break;case 2592:case 3360:return Fe+Ee(a,"template-","")+a;case 4384:case 3616:return l&&l.some(function(s,d){return r=d,Tn(s.props,/grid-\w+-end/)})?~Qs(a+(l=l[r].value),"span",0)?a:Fe+Ee(a,"-start","")+a+Fe+"grid-row-span:"+(~Qs(l,"span",0)?Tn(l,/\d+/):+Tn(l,/\d+/)-+Tn(a,/\d+/))+";":Fe+Ee(a,"-start","")+a;case 4896:case 4128:return l&&l.some(function(s){return Tn(s.props,/grid-\w+-start/)})?a:Fe+Ee(Ee(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Ee(a,/(.+)-inline(.+)/,He+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(a)-1-r>6)switch(kt(a,r+1)){case 109:if(kt(a,r+4)!==45)break;case 102:return Ee(a,/(.+:)(.+)-([^]+)/,"$1"+He+"$2-$3$1"+Wl+(kt(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~Qs(a,"stretch",0)?ox(Ee(a,"stretch","fill-available"),r,l)+a:a}break;case 5152:case 5920:return Ee(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,d,f,g,b,v,p){return Fe+d+":"+f+p+(g?Fe+d+"-span:"+(b?v:+v-+f)+p:"")+a});case 4949:if(kt(a,r+6)===121)return Ee(a,":",":"+He)+a;break;case 6444:switch(kt(a,kt(a,14)===45?18:11)){case 120:return Ee(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+He+(kt(a,14)===45?"inline-":"")+"box$3$1"+He+"$2$3$1"+Fe+"$2box$3")+a;case 100:return Ee(a,":",":"+Fe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ee(a,"scroll-","scroll-snap-")+a}return a}function Is(a,r){for(var l="",s=0;s<a.length;s++)l+=r(a[s],s,a,r)||"";return l}function Lw(a,r,l,s){switch(a.type){case Ew:if(a.children.length)break;case jw:case kf:return a.return=a.return||a.value;case tx:return"";case ax:return a.return=a.value+"{"+Is(a.children,s)+"}";case pc:if(!tn(a.value=a.props.join(",")))return""}return tn(l=Is(a.children,s))?a.return=a.value+"{"+l+"}":""}function Hw(a){var r=rx(a);return function(l,s,d,f){for(var g="",b=0;b<r;b++)g+=a[b](l,s,d,f)||"";return g}}function Uw(a){return function(r){r.root||(r=r.return)&&a(r)}}function $w(a,r,l,s){if(a.length>-1&&!a.return)switch(a.type){case kf:a.return=ox(a.value,a.length,l);return;case ax:return Is([ri(a,{value:Ee(a.value,"@","@"+He)})],s);case pc:if(a.length)return Aw(l=a.props,function(d){switch(Tn(d,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ar(ri(a,{props:[Ee(d,/:(read-\w+)/,":"+Wl+"$1")]})),Ar(ri(a,{props:[d]})),lf(a,{props:Gg(l,s)});break;case"::placeholder":Ar(ri(a,{props:[Ee(d,/:(plac\w+)/,":"+He+"input-$1")]})),Ar(ri(a,{props:[Ee(d,/:(plac\w+)/,":"+Wl+"$1")]})),Ar(ri(a,{props:[Ee(d,/:(plac\w+)/,Fe+"input-$1")]})),Ar(ri(a,{props:[d]})),lf(a,{props:Gg(l,s)});break}return""})}}var qw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fa={},Hr=typeof process<"u"&&fa!==void 0&&(fa.REACT_APP_SC_ATTR||fa.SC_ATTR)||"data-styled",sx="active",cx="data-styled-version",bc="6.1.18",Rf=`/*!sc*/
`,Ws=typeof window<"u"&&typeof document<"u",Yw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&fa!==void 0&&fa.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&fa.REACT_APP_SC_DISABLE_SPEEDY!==""?fa.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&fa.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&fa!==void 0&&fa.SC_DISABLE_SPEEDY!==void 0&&fa.SC_DISABLE_SPEEDY!==""&&fa.SC_DISABLE_SPEEDY!=="false"&&fa.SC_DISABLE_SPEEDY),Gw={},yc=Object.freeze([]),Ur=Object.freeze({});function ux(a,r,l){return l===void 0&&(l=Ur),a.theme!==l.theme&&a.theme||r||l.theme}var dx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Vw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Xw=/(^-|-$)/g;function Qg(a){return a.replace(Vw,"-").replace(Xw,"")}var Qw=/(a)(d)/gi,As=52,Zg=function(a){return String.fromCharCode(a+(a>25?39:97))};function cf(a){var r,l="";for(r=Math.abs(a);r>As;r=r/As|0)l=Zg(r%As)+l;return(Zg(r%As)+l).replace(Qw,"$1-$2")}var Yd,fx=5381,Dr=function(a,r){for(var l=r.length;l;)a=33*a^r.charCodeAt(--l);return a},mx=function(a){return Dr(fx,a)};function hx(a){return cf(mx(a)>>>0)}function Zw(a){return a.displayName||a.name||"Component"}function Gd(a){return typeof a=="string"&&!0}var px=typeof Symbol=="function"&&Symbol.for,gx=px?Symbol.for("react.memo"):60115,Kw=px?Symbol.for("react.forward_ref"):60112,Pw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jw=((Yd={})[Kw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yd[gx]=xx,Yd);function Kg(a){return("type"in(r=a)&&r.type.$$typeof)===gx?xx:"$$typeof"in a?Jw[a.$$typeof]:Pw;var r}var Iw=Object.defineProperty,Ww=Object.getOwnPropertyNames,Pg=Object.getOwnPropertySymbols,e2=Object.getOwnPropertyDescriptor,t2=Object.getPrototypeOf,Fg=Object.prototype;function vx(a,r,l){if(typeof r!="string"){if(Fg){var s=t2(r);s&&s!==Fg&&vx(a,s,l)}var d=Ww(r);Pg&&(d=d.concat(Pg(r)));for(var f=Kg(a),g=Kg(r),b=0;b<d.length;++b){var v=d[b];if(!(v in Fw||l&&l[v]||g&&v in g||f&&v in f)){var p=e2(r,v);try{Iw(a,v,p)}catch{}}}}return a}function $r(a){return typeof a=="function"}function Of(a){return typeof a=="object"&&"styledComponentId"in a}function Ri(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function uf(a,r){if(a.length===0)return"";for(var l=a[0],s=1;s<a.length;s++)l+=a[s];return l}function ao(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function df(a,r,l){if(l===void 0&&(l=!1),!l&&!ao(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var s=0;s<r.length;s++)a[s]=df(a[s],r[s]);else if(ao(r))for(var s in r)a[s]=df(a[s],r[s]);return a}function Df(a,r){Object.defineProperty(a,"toString",{value:r})}function oo(a){for(var r=[],l=1;l<arguments.length;l++)r[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var a2=function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var l=0,s=0;s<r;s++)l+=this.groupSizes[s];return l},a.prototype.insertRules=function(r,l){if(r>=this.groupSizes.length){for(var s=this.groupSizes,d=s.length,f=d;r>=f;)if((f<<=1)<0)throw oo(16,"".concat(r));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var g=d;g<f;g++)this.groupSizes[g]=0}for(var b=this.indexOfGroup(r+1),v=(g=0,l.length);g<v;g++)this.tag.insertRule(b,l[g])&&(this.groupSizes[r]++,b++)},a.prototype.clearGroup=function(r){if(r<this.length){var l=this.groupSizes[r],s=this.indexOfGroup(r),d=s+l;this.groupSizes[r]=0;for(var f=s;f<d;f++)this.tag.deleteRule(s)}},a.prototype.getGroup=function(r){var l="";if(r>=this.length||this.groupSizes[r]===0)return l;for(var s=this.groupSizes[r],d=this.indexOfGroup(r),f=d+s,g=d;g<f;g++)l+="".concat(this.tag.getRule(g)).concat(Rf);return l},a}(),Ps=new Map,ec=new Map,Fs=1,Ts=function(a){if(Ps.has(a))return Ps.get(a);for(;ec.has(Fs);)Fs++;var r=Fs++;return Ps.set(a,r),ec.set(r,a),r},n2=function(a,r){Fs=r+1,Ps.set(a,r),ec.set(r,a)},i2="style[".concat(Hr,"][").concat(cx,'="').concat(bc,'"]'),r2=new RegExp("^".concat(Hr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),l2=function(a,r,l){for(var s,d=l.split(","),f=0,g=d.length;f<g;f++)(s=d[f])&&a.registerName(r,s)},o2=function(a,r){for(var l,s=((l=r.textContent)!==null&&l!==void 0?l:"").split(Rf),d=[],f=0,g=s.length;f<g;f++){var b=s[f].trim();if(b){var v=b.match(r2);if(v){var p=0|parseInt(v[1],10),y=v[2];p!==0&&(n2(y,p),l2(a,y,v[3]),a.getTag().insertRules(p,d)),d.length=0}else d.push(b)}}},Jg=function(a){for(var r=document.querySelectorAll(i2),l=0,s=r.length;l<s;l++){var d=r[l];d&&d.getAttribute(Hr)!==sx&&(o2(a,d),d.parentNode&&d.parentNode.removeChild(d))}};function s2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var bx=function(a){var r=document.head,l=a||r,s=document.createElement("style"),d=function(b){var v=Array.from(b.querySelectorAll("style[".concat(Hr,"]")));return v[v.length-1]}(l),f=d!==void 0?d.nextSibling:null;s.setAttribute(Hr,sx),s.setAttribute(cx,bc);var g=s2();return g&&s.setAttribute("nonce",g),l.insertBefore(s,f),s},c2=function(){function a(r){this.element=bx(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(l){if(l.sheet)return l.sheet;for(var s=document.styleSheets,d=0,f=s.length;d<f;d++){var g=s[d];if(g.ownerNode===l)return g}throw oo(17)}(this.element),this.length=0}return a.prototype.insertRule=function(r,l){try{return this.sheet.insertRule(l,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var l=this.sheet.cssRules[r];return l&&l.cssText?l.cssText:""},a}(),u2=function(){function a(r){this.element=bx(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,l){if(r<=this.length&&r>=0){var s=document.createTextNode(l);return this.element.insertBefore(s,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a}(),d2=function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,l){return r<=this.length&&(this.rules.splice(r,0,l),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a}(),Ig=Ws,f2={isServer:!Ws,useCSSOMInjection:!Yw},tc=function(){function a(r,l,s){r===void 0&&(r=Ur),l===void 0&&(l={});var d=this;this.options=Ut(Ut({},f2),r),this.gs=l,this.names=new Map(s),this.server=!!r.isServer,!this.server&&Ws&&Ig&&(Ig=!1,Jg(this)),Df(this,function(){return function(f){for(var g=f.getTag(),b=g.length,v="",p=function(k){var E=function(O){return ec.get(O)}(k);if(E===void 0)return"continue";var D=f.names.get(E),z=g.getGroup(k);if(D===void 0||!D.size||z.length===0)return"continue";var N="".concat(Hr,".g").concat(k,'[id="').concat(E,'"]'),B="";D!==void 0&&D.forEach(function(O){O.length>0&&(B+="".concat(O,","))}),v+="".concat(z).concat(N,'{content:"').concat(B,'"}').concat(Rf)},y=0;y<b;y++)p(y);return v}(d)})}return a.registerId=function(r){return Ts(r)},a.prototype.rehydrate=function(){!this.server&&Ws&&Jg(this)},a.prototype.reconstructWithOptions=function(r,l){return l===void 0&&(l=!0),new a(Ut(Ut({},this.options),r),this.gs,l&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=function(l){var s=l.useCSSOMInjection,d=l.target;return l.isServer?new d2(d):s?new c2(d):new u2(d)}(this.options),new a2(r)));var r},a.prototype.hasNameForId=function(r,l){return this.names.has(r)&&this.names.get(r).has(l)},a.prototype.registerName=function(r,l){if(Ts(r),this.names.has(r))this.names.get(r).add(l);else{var s=new Set;s.add(l),this.names.set(r,s)}},a.prototype.insertRules=function(r,l,s){this.registerName(r,l),this.getTag().insertRules(Ts(r),s)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(Ts(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a}(),m2=/&/g,h2=/^\s*\/\/.*$/gm;function yx(a,r){return a.map(function(l){return l.type==="rule"&&(l.value="".concat(r," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(r," ")),l.props=l.props.map(function(s){return"".concat(r," ").concat(s)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=yx(l.children,r)),l})}function p2(a){var r,l,s,d=Ur,f=d.options,g=f===void 0?Ur:f,b=d.plugins,v=b===void 0?yc:b,p=function(E,D,z){return z.startsWith(l)&&z.endsWith(l)&&z.replaceAll(l,"").length>0?".".concat(r):E},y=v.slice();y.push(function(E){E.type===pc&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(m2,l).replace(s,p))}),g.prefix&&y.push($w),y.push(Lw);var k=function(E,D,z,N){D===void 0&&(D=""),z===void 0&&(z=""),N===void 0&&(N="&"),r=N,l=D,s=new RegExp("\\".concat(l,"\\b"),"g");var B=E.replace(h2,""),O=Bw(z||D?"".concat(z," ").concat(D," { ").concat(B," }"):B);g.namespace&&(O=yx(O,g.namespace));var A=[];return Is(O,Hw(y.concat(Uw(function(q){return A.push(q)})))),A};return k.hash=v.length?v.reduce(function(E,D){return D.name||oo(15),Dr(E,D.name)},fx).toString():"",k}var g2=new tc,ff=p2(),wx=Ht.createContext({shouldForwardProp:void 0,styleSheet:g2,stylis:ff});wx.Consumer;Ht.createContext(void 0);function mf(){return x.useContext(wx)}var x2=function(){function a(r,l){var s=this;this.inject=function(d,f){f===void 0&&(f=ff);var g=s.name+f.hash;d.hasNameForId(s.id,g)||d.insertRules(s.id,g,f(s.rules,g,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=l,Df(this,function(){throw oo(12,String(s.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=ff),this.name+r.hash},a}(),v2=function(a){return a>="A"&&a<="Z"};function Wg(a){for(var r="",l=0;l<a.length;l++){var s=a[l];if(l===1&&s==="-"&&a[0]==="-")return a;v2(s)?r+="-"+s.toLowerCase():r+=s}return r.startsWith("ms-")?"-"+r:r}var Sx=function(a){return a==null||a===!1||a===""},jx=function(a){var r,l,s=[];for(var d in a){var f=a[d];a.hasOwnProperty(d)&&!Sx(f)&&(Array.isArray(f)&&f.isCss||$r(f)?s.push("".concat(Wg(d),":"),f,";"):ao(f)?s.push.apply(s,to(to(["".concat(d," {")],jx(f),!1),["}"],!1)):s.push("".concat(Wg(d),": ").concat((r=d,(l=f)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||r in qw||r.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return s};function si(a,r,l,s){if(Sx(a))return[];if(Of(a))return[".".concat(a.styledComponentId)];if($r(a)){if(!$r(f=a)||f.prototype&&f.prototype.isReactComponent||!r)return[a];var d=a(r);return si(d,r,l,s)}var f;return a instanceof x2?l?(a.inject(l,s),[a.getName(s)]):[a]:ao(a)?jx(a):Array.isArray(a)?Array.prototype.concat.apply(yc,a.map(function(g){return si(g,r,l,s)})):[a.toString()]}function Ex(a){for(var r=0;r<a.length;r+=1){var l=a[r];if($r(l)&&!Of(l))return!1}return!0}var b2=mx(bc),y2=function(){function a(r,l,s){this.rules=r,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Ex(r),this.componentId=l,this.baseHash=Dr(b2,l),this.baseStyle=s,tc.registerId(l)}return a.prototype.generateAndInjectStyles=function(r,l,s){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,l,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))d=Ri(d,this.staticRulesId);else{var f=uf(si(this.rules,r,l,s)),g=cf(Dr(this.baseHash,f)>>>0);if(!l.hasNameForId(this.componentId,g)){var b=s(f,".".concat(g),void 0,this.componentId);l.insertRules(this.componentId,g,b)}d=Ri(d,g),this.staticRulesId=g}else{for(var v=Dr(this.baseHash,s.hash),p="",y=0;y<this.rules.length;y++){var k=this.rules[y];if(typeof k=="string")p+=k;else if(k){var E=uf(si(k,r,l,s));v=Dr(v,E+y),p+=E}}if(p){var D=cf(v>>>0);l.hasNameForId(this.componentId,D)||l.insertRules(this.componentId,D,s(p,".".concat(D),void 0,this.componentId)),d=Ri(d,D)}}return d},a}(),Mf=Ht.createContext(void 0);Mf.Consumer;var Vd={};function w2(a,r,l){var s=Of(a),d=a,f=!Gd(a),g=r.attrs,b=g===void 0?yc:g,v=r.componentId,p=v===void 0?function(I,_){var G=typeof I!="string"?"sc":Qg(I);Vd[G]=(Vd[G]||0)+1;var P="".concat(G,"-").concat(hx(bc+G+Vd[G]));return _?"".concat(_,"-").concat(P):P}(r.displayName,r.parentComponentId):v,y=r.displayName,k=y===void 0?function(I){return Gd(I)?"styled.".concat(I):"Styled(".concat(Zw(I),")")}(a):y,E=r.displayName&&r.componentId?"".concat(Qg(r.displayName),"-").concat(r.componentId):r.componentId||p,D=s&&d.attrs?d.attrs.concat(b).filter(Boolean):b,z=r.shouldForwardProp;if(s&&d.shouldForwardProp){var N=d.shouldForwardProp;if(r.shouldForwardProp){var B=r.shouldForwardProp;z=function(I,_){return N(I,_)&&B(I,_)}}else z=N}var O=new y2(l,E,s?d.componentStyle:void 0);function A(I,_){return function(G,P,ne){var Z=G.attrs,ee=G.componentStyle,le=G.defaultProps,oe=G.foldedComponentIds,be=G.styledComponentId,xe=G.target,he=Ht.useContext(Mf),U=mf(),J=G.shouldForwardProp||U.shouldForwardProp,re=ux(P,he,le)||Ur,ce=function(ie,ae,Se){for(var W,ye=Ut(Ut({},ae),{className:void 0,theme:Se}),we=0;we<ie.length;we+=1){var Ae=$r(W=ie[we])?W(ye):W;for(var ve in Ae)ye[ve]=ve==="className"?Ri(ye[ve],Ae[ve]):ve==="style"?Ut(Ut({},ye[ve]),Ae[ve]):Ae[ve]}return ae.className&&(ye.className=Ri(ye.className,ae.className)),ye}(Z,P,re),w=ce.as||xe,T={};for(var X in ce)ce[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&ce.theme===re||(X==="forwardedAs"?T.as=ce.forwardedAs:J&&!J(X,w)||(T[X]=ce[X]));var F=function(ie,ae){var Se=mf(),W=ie.generateAndInjectStyles(ae,Se.styleSheet,Se.stylis);return W}(ee,ce),te=Ri(oe,be);return F&&(te+=" "+F),ce.className&&(te+=" "+ce.className),T[Gd(w)&&!dx.has(w)?"class":"className"]=te,ne&&(T.ref=ne),x.createElement(w,T)}(q,I,_)}A.displayName=k;var q=Ht.forwardRef(A);return q.attrs=D,q.componentStyle=O,q.displayName=k,q.shouldForwardProp=z,q.foldedComponentIds=s?Ri(d.foldedComponentIds,d.styledComponentId):"",q.styledComponentId=E,q.target=s?d.target:a,Object.defineProperty(q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=s?function(_){for(var G=[],P=1;P<arguments.length;P++)G[P-1]=arguments[P];for(var ne=0,Z=G;ne<Z.length;ne++)df(_,Z[ne],!0);return _}({},d.defaultProps,I):I}}),Df(q,function(){return".".concat(q.styledComponentId)}),f&&vx(q,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),q}function e0(a,r){for(var l=[a[0]],s=0,d=r.length;s<d;s+=1)l.push(r[s],a[s+1]);return l}var t0=function(a){return Object.assign(a,{isCss:!0})};function Cx(a){for(var r=[],l=1;l<arguments.length;l++)r[l-1]=arguments[l];if($r(a)||ao(a))return t0(si(e0(yc,to([a],r,!0))));var s=a;return r.length===0&&s.length===1&&typeof s[0]=="string"?si(s):t0(si(e0(s,r)))}function hf(a,r,l){if(l===void 0&&(l=Ur),!r)throw oo(1,r);var s=function(d){for(var f=[],g=1;g<arguments.length;g++)f[g-1]=arguments[g];return a(r,l,Cx.apply(void 0,to([d],f,!1)))};return s.attrs=function(d){return hf(a,r,Ut(Ut({},l),{attrs:Array.prototype.concat(l.attrs,d).filter(Boolean)}))},s.withConfig=function(d){return hf(a,r,Ut(Ut({},l),d))},s}var Ax=function(a){return hf(w2,a)},j=Ax;dx.forEach(function(a){j[a]=Ax(a)});var S2=function(){function a(r,l){this.rules=r,this.componentId=l,this.isStatic=Ex(r),tc.registerId(this.componentId+1)}return a.prototype.createStyles=function(r,l,s,d){var f=d(uf(si(this.rules,l,s,d)),""),g=this.componentId+r;s.insertRules(g,g,f)},a.prototype.removeStyles=function(r,l){l.clearRules(this.componentId+r)},a.prototype.renderStyles=function(r,l,s,d){r>2&&tc.registerId(this.componentId+r),this.removeStyles(r,s),this.createStyles(r,l,s,d)},a}();function qa(a){for(var r=[],l=1;l<arguments.length;l++)r[l-1]=arguments[l];var s=Cx.apply(void 0,to([a],r,!1)),d="sc-global-".concat(hx(JSON.stringify(s))),f=new S2(s,d),g=function(v){var p=mf(),y=Ht.useContext(Mf),k=Ht.useRef(p.styleSheet.allocateGSInstance(d)).current;return p.styleSheet.server&&b(k,v,p.styleSheet,y,p.stylis),Ht.useLayoutEffect(function(){if(!p.styleSheet.server)return b(k,v,p.styleSheet,y,p.stylis),function(){return f.removeStyles(k,p.styleSheet)}},[k,v,p.styleSheet,y,p.stylis]),null};function b(v,p,y,k,E){if(f.isStatic)f.renderStyles(v,Gw,y,E);else{var D=Ut(Ut({},p),{theme:ux(p,k,g.defaultProps)});f.renderStyles(v,D,y,E)}}return Ht.memo(g)}const Tx=x.createContext(),j2=({children:a})=>{const[r,l]=x.useState(!1);return c.jsx(Tx.Provider,{value:{isSidebarOpen:r,setIsSidebarOpen:l},children:a})},wc=()=>x.useContext(Tx);function pf(){return localStorage.getItem("isLoggedIn")==="true"}const E2=j.nav`
  background: #00233d;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`,C2=j.div`
  max-width: 1200px;
  margin: 0 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`,A2=j(ma)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 0;

  i {
    margin-left: 0.5rem;
    font-size: normal;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;

    i {
      font-size: 1.7rem;
    }
  }
`,T2=j.div`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 8px;
  position: fixed;

  left: 1rem;
  z-index: 1002;

  @media (max-width: 768px) {
    top: 0.8rem;
    left: 0.8rem;
    gap: 1rem;
  }
`,k2=j.button`
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.2rem;
  margin-right: 0.5rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(360deg);
  }
`,z2=j.button`
  display: flex;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  margin-right: 8px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(10, 39, 64, 0.08);
  transition: color 0.2s;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1.7em;
    margin-right: 4px;
  }

  &:hover,
  &focus {
    background: none;
    color: #ffb300;
    outline: none;
  }
`,R2=j.div`
  position: fixed;
  top: 59px;
  left: ${a=>a.isOpen?"0":"-300px"};
  width: 280px;
  height: 100vh;
  background: #ffff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  z-index: 1500;
  // padding: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
    top: 70px;
    width: 250px;
  }
`,O2=j.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #666;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    top: 0.8rem;
    right: 0.8rem;
    font-size: 1.1rem;
  }

  &:hover {
    color: #1976d2;
  }
`,D2=j.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
  flex: 1;

  @media (max-width: 768px) {
    margin: 1.5rem 0 0 0;
  }
`,Fl=j.li`
  margin-bottom: 0.5rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #00233d;
    padding: 0.75rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    // font-size: 1rem;
    flex-direction: row-reverse;
    gap: 1.5rem;

    @media (max-width: 768px) {
      padding: 0.6rem;
      gap: 1rem;
    }

    &:hover {
      background: #f5f5f5;
      color: #1976d2;
    }

    i {
      margin-left: 0.5rem;
      margin-right: 0;
      // width: 20px;
      text-align: center;
      font-size: 1.2rem;
      color: rgb(25, 118, 210);
    }
    span {
      flex-grow: 0.4;
      text-align: left;
      // opacity: 0;
      // transition: opacity 0.3s ease;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
`,M2=j.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 1rem 0;

  @media (max-width: 768px) {
    margin: 0.8rem 0;
  }
`,N2=()=>{const{isSidebarOpen:a,setIsSidebarOpen:r}=wc(),[l,s]=x.useState(()=>pf()),[d,f]=x.useState(localStorage.getItem("avatar")||""),g=Bi(),b=()=>{r(!a)},v=()=>{r(!1)},{language:p,toggleLanguage:y}=pa();x.useEffect(()=>{const E=()=>s(pf());return window.addEventListener("storage",E),()=>window.removeEventListener("storage",E)},[]);const k=E=>{E.preventDefault(),localStorage.removeItem("isLoggedIn"),s(!1),r(!1),g("/")};return c.jsxs(c.Fragment,{children:[c.jsx(E2,{children:c.jsxs(C2,{children:[c.jsxs(A2,{to:"/",children:[c.jsx("i",{className:"fas fa-plane-departure"}),"Tickify"]}),c.jsxs(T2,{children:[c.jsx(k2,{onClick:y,children:c.jsx("i",{className:"fas fa-globe"})}),l&&c.jsx(ma,{to:"/profile",style:{color:"#fff",marginRight:"8px",fontSize:"1.6rem",display:"flex",alignItems:"center",textDecoration:"none"},children:d?c.jsx("img",{src:d,alt:"avatar",style:{width:36,height:36,borderRadius:"50%",objectFit:"cover",border:"2px solid #fff",background:"#eee"}}):c.jsx("i",{className:"fas fa-user-circle"})}),c.jsx(z2,{onClick:b,children:c.jsx("i",{className:"fas fa-bars"})})]})]})}),c.jsxs(R2,{isOpen:a,children:[c.jsx(O2,{onClick:v,children:c.jsx("i",{className:"fas fa-times"})}),c.jsxs(D2,{children:[c.jsx(Fl,{children:c.jsxs(ma,{to:"/",children:[c.jsx("i",{className:"fas fa-plane"}),c.jsx("span",{children:"رحلات طيران"})]})}),c.jsx(M2,{}),l?c.jsx(Fl,{children:c.jsxs("a",{href:"/",onClick:k,style:{display:"flex",alignItems:"center",textDecoration:"none",color:"#00233d",padding:"0.75rem",borderRadius:"8px",transition:"all 0.3s ease",flexDirection:"row-reverse",gap:"1.5rem"},children:[c.jsx("i",{className:"fas fa-sign-out-alt"}),c.jsx("span",{children:"تسجيل الخروج"})]})}):c.jsx(Fl,{children:c.jsxs(ma,{to:"/login",children:[c.jsx("i",{className:"fas fa-sign-in-alt"}),c.jsx("span",{children:"تسجيل الدخول"})]})}),c.jsx(Fl,{children:c.jsxs(ma,{to:"/app",children:[c.jsx("i",{className:"fas fa-mobile-alt"}),c.jsx("span",{children:"التطبيق"})]})}),c.jsx(Fl,{children:c.jsxs(ma,{to:"/help",children:[c.jsx("i",{className:"fas fa-question-circle"}),c.jsx("span",{children:"مساعدة"})]})})]})]})]})};var kx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a0=Ht.createContext&&Ht.createContext(kx),B2=["attr","size","title"];function _2(a,r){if(a==null)return{};var l=L2(a,r),s,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)s=f[d],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(a,s)&&(l[s]=a[s])}return l}function L2(a,r){if(a==null)return{};var l={};for(var s in a)if(Object.prototype.hasOwnProperty.call(a,s)){if(r.indexOf(s)>=0)continue;l[s]=a[s]}return l}function ac(){return ac=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(a[s]=l[s])}return a},ac.apply(this,arguments)}function n0(a,r){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);r&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),l.push.apply(l,s)}return l}function nc(a){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?n0(Object(l),!0).forEach(function(s){H2(a,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):n0(Object(l)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(l,s))})}return a}function H2(a,r,l){return r=U2(r),r in a?Object.defineProperty(a,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[r]=l,a}function U2(a){var r=$2(a,"string");return typeof r=="symbol"?r:r+""}function $2(a,r){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var s=l.call(a,r);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(a)}function zx(a){return a&&a.map((r,l)=>Ht.createElement(r.tag,nc({key:l},r.attr),zx(r.child)))}function ln(a){return r=>Ht.createElement(q2,ac({attr:nc({},a.attr)},r),zx(a.child))}function q2(a){var r=l=>{var{attr:s,size:d,title:f}=a,g=_2(a,B2),b=d||l.size||"1em",v;return l.className&&(v=l.className),a.className&&(v=(v?v+" ":"")+a.className),Ht.createElement("svg",ac({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,s,g,{className:v,style:nc(nc({color:a.color||l.color},l.style),a.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),f&&Ht.createElement("title",null,f),a.children)};return a0!==void 0?Ht.createElement(a0.Consumer,null,l=>r(l)):r(kx)}function Y2(a){return ln({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(a)}function G2(a){return ln({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"},child:[]}]})(a)}function V2(a){return ln({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(a)}function X2(a){return ln({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(a)}function Q2(a){return ln({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"},child:[]}]})(a)}function Z2(a){return ln({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"},child:[]}]})(a)}function K2(a){return ln({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(a)}function P2(a){return ln({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"},child:[]}]})(a)}function F2(a){return ln({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function ci(a){"@babel/helpers - typeof";return ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ci(a)}function J2(a,r){if(ci(a)!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var s=l.call(a,r);if(ci(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(a)}function I2(a){var r=J2(a,"string");return ci(r)=="symbol"?r:r+""}function za(a,r,l){return(r=I2(r))in a?Object.defineProperty(a,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[r]=l,a}function i0(a,r){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);r&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),l.push.apply(l,s)}return l}function $t(a){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?i0(Object(l),!0).forEach(function(s){za(a,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):i0(Object(l)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(l,s))})}return a}function gf(a,r){(r==null||r>a.length)&&(r=a.length);for(var l=0,s=Array(r);l<r;l++)s[l]=a[l];return s}function W2(a){if(Array.isArray(a))return gf(a)}function eS(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Rx(a,r){if(a){if(typeof a=="string")return gf(a,r);var l={}.toString.call(a).slice(8,-1);return l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set"?Array.from(a):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?gf(a,r):void 0}}function tS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kn(a){return W2(a)||eS(a)||Rx(a)||tS()}function aS(a){if(Array.isArray(a))return a}function nS(a,r){var l=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(l!=null){var s,d,f,g,b=[],v=!0,p=!1;try{if(f=(l=l.call(a)).next,r===0){if(Object(l)!==l)return;v=!1}else for(;!(v=(s=f.call(l)).done)&&(b.push(s.value),b.length!==r);v=!0);}catch(y){p=!0,d=y}finally{try{if(!v&&l.return!=null&&(g=l.return(),Object(g)!==g))return}finally{if(p)throw d}}return b}}function iS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nt(a,r){return aS(a)||nS(a,r)||Rx(a,r)||iS()}var Xd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var r0;function rS(){return r0||(r0=1,function(a){(function(){var r={}.hasOwnProperty;function l(){for(var f="",g=0;g<arguments.length;g++){var b=arguments[g];b&&(f=d(f,s(b)))}return f}function s(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return l.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var g="";for(var b in f)r.call(f,b)&&f[b]&&(g=d(g,b));return g}function d(f,g){return g?f?f+" "+g:f+g:f}a.exports?(l.default=l,a.exports=l):window.classNames=l})()}(Xd)),Xd.exports}var lS=rS();const Mi=_0(lS);function Mr(a){var r=x.useRef();r.current=a;var l=x.useCallback(function(){for(var s,d=arguments.length,f=new Array(d),g=0;g<d;g++)f[g]=arguments[g];return(s=r.current)===null||s===void 0?void 0:s.call.apply(s,[r].concat(f))},[]);return l}function oS(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var l0=oS()?x.useLayoutEffect:x.useEffect,Ox=function(r,l){var s=x.useRef(!0);l0(function(){return r(s.current)},l),l0(function(){return s.current=!1,function(){s.current=!0}},[])},o0=function(r,l){Ox(function(s){if(!s)return r()},l)};function s0(a){var r=x.useRef(!1),l=x.useState(a),s=Nt(l,2),d=s[0],f=s[1];x.useEffect(function(){return r.current=!1,function(){r.current=!0}},[]);function g(b,v){v&&r.current||f(b)}return[d,g]}function Qd(a){return a!==void 0}function sS(a,r){var l=r||{},s=l.defaultValue,d=l.value,f=l.onChange,g=l.postState,b=s0(function(){return Qd(d)?d:Qd(s)?typeof s=="function"?s():s:typeof a=="function"?a():a}),v=Nt(b,2),p=v[0],y=v[1],k=d!==void 0?d:p,E=g?g(k):k,D=Mr(f),z=s0([k]),N=Nt(z,2),B=N[0],O=N[1];o0(function(){var q=B[0];p!==q&&D(p,q)},[B]),o0(function(){Qd(d)||y(d)},[d]);var A=Mr(function(q,I){y(q,I),O([k],I)});return[E,A]}var xf={},cS=function(r){};function uS(a,r){}function dS(a,r){}function fS(){xf={}}function Dx(a,r,l){!r&&!xf[l]&&(a(!1,l),xf[l]=!0)}function qr(a,r){Dx(uS,a,r)}function mS(a,r){Dx(dS,a,r)}qr.preMessage=cS;qr.resetWarned=fS;qr.noteOnce=mS;function hS(a,r){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,s=new Set;function d(f,g){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,v=s.has(f);if(qr(!v,"Warning: There may be circular references"),v)return!1;if(f===g)return!0;if(l&&b>1)return!1;s.add(f);var p=b+1;if(Array.isArray(f)){if(!Array.isArray(g)||f.length!==g.length)return!1;for(var y=0;y<f.length;y++)if(!d(f[y],g[y],p))return!1;return!0}if(f&&g&&ci(f)==="object"&&ci(g)==="object"){var k=Object.keys(f);return k.length!==Object.keys(g).length?!1:k.every(function(E){return d(f[E],g[E],p)})}return!1}return d(a,r)}function no(){return no=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var s in l)({}).hasOwnProperty.call(l,s)&&(a[s]=l[s])}return a},no.apply(null,arguments)}function pS(a,r){if(a==null)return{};var l={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(r.indexOf(s)!==-1)continue;l[s]=a[s]}return l}function Mx(a,r){if(a==null)return{};var l,s,d=pS(a,r);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(s=0;s<f.length;s++)l=f[s],r.indexOf(l)===-1&&{}.propertyIsEnumerable.call(a,l)&&(d[l]=a[l])}return d}function vf(a,r,l){return(a-r)/(l-r)}function Nf(a,r,l,s){var d=vf(r,l,s),f={};switch(a){case"rtl":f.right="".concat(d*100,"%"),f.transform="translateX(50%)";break;case"btt":f.bottom="".concat(d*100,"%"),f.transform="translateY(50%)";break;case"ttb":f.top="".concat(d*100,"%"),f.transform="translateY(-50%)";break;default:f.left="".concat(d*100,"%"),f.transform="translateX(-50%)";break}return f}function zi(a,r){return Array.isArray(a)?a[r]:a}var Tt={BACKSPACE:8,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},_i=x.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),gS=x.createContext({}),xS=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],c0=x.forwardRef(function(a,r){var l=a.prefixCls,s=a.value,d=a.valueIndex,f=a.onStartMove,g=a.onDelete,b=a.style,v=a.render,p=a.dragging,y=a.draggingDelete,k=a.onOffsetChange,E=a.onChangeComplete,D=a.onFocus,z=a.onMouseEnter,N=Mx(a,xS),B=x.useContext(_i),O=B.min,A=B.max,q=B.direction,I=B.disabled,_=B.keyboard,G=B.range,P=B.tabIndex,ne=B.ariaLabelForHandle,Z=B.ariaLabelledByForHandle,ee=B.ariaRequired,le=B.ariaValueTextFormatterForHandle,oe=B.styles,be=B.classNames,xe="".concat(l,"-handle"),he=function(ie){I||f(ie,d)},U=function(ie){D==null||D(ie,d)},J=function(ie){z(ie,d)},re=function(ie){if(!I&&_){var ae=null;switch(ie.which||ie.keyCode){case Tt.LEFT:ae=q==="ltr"||q==="btt"?-1:1;break;case Tt.RIGHT:ae=q==="ltr"||q==="btt"?1:-1;break;case Tt.UP:ae=q!=="ttb"?1:-1;break;case Tt.DOWN:ae=q!=="ttb"?-1:1;break;case Tt.HOME:ae="min";break;case Tt.END:ae="max";break;case Tt.PAGE_UP:ae=2;break;case Tt.PAGE_DOWN:ae=-2;break;case Tt.BACKSPACE:case Tt.DELETE:g(d);break}ae!==null&&(ie.preventDefault(),k(ae,d))}},ce=function(ie){switch(ie.which||ie.keyCode){case Tt.LEFT:case Tt.RIGHT:case Tt.UP:case Tt.DOWN:case Tt.HOME:case Tt.END:case Tt.PAGE_UP:case Tt.PAGE_DOWN:E==null||E();break}},w=Nf(q,s,O,A),T={};if(d!==null){var X;T={tabIndex:I?null:zi(P,d),role:"slider","aria-valuemin":O,"aria-valuemax":A,"aria-valuenow":s,"aria-disabled":I,"aria-label":zi(ne,d),"aria-labelledby":zi(Z,d),"aria-required":zi(ee,d),"aria-valuetext":(X=zi(le,d))===null||X===void 0?void 0:X(s),"aria-orientation":q==="ltr"||q==="rtl"?"horizontal":"vertical",onMouseDown:he,onTouchStart:he,onFocus:U,onMouseEnter:J,onKeyDown:re,onKeyUp:ce}}var F=x.createElement("div",no({ref:r,className:Mi(xe,za(za(za({},"".concat(xe,"-").concat(d+1),d!==null&&G),"".concat(xe,"-dragging"),p),"".concat(xe,"-dragging-delete"),y),be.handle),style:$t($t($t({},w),b),oe.handle)},T,N));return v&&(F=v(F,{index:d,prefixCls:l,value:s,dragging:p,draggingDelete:y})),F}),vS=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],bS=x.forwardRef(function(a,r){var l=a.prefixCls,s=a.style,d=a.onStartMove,f=a.onOffsetChange,g=a.values,b=a.handleRender,v=a.activeHandleRender,p=a.draggingIndex,y=a.draggingDelete,k=a.onFocus,E=Mx(a,vS),D=x.useRef({}),z=x.useState(!1),N=Nt(z,2),B=N[0],O=N[1],A=x.useState(-1),q=Nt(A,2),I=q[0],_=q[1],G=function(le){_(le),O(!0)},P=function(le,oe){G(oe),k==null||k(le)},ne=function(le,oe){G(oe)};x.useImperativeHandle(r,function(){return{focus:function(le){var oe;(oe=D.current[le])===null||oe===void 0||oe.focus()},hideHelp:function(){ww.flushSync(function(){O(!1)})}}});var Z=$t({prefixCls:l,onStartMove:d,onOffsetChange:f,render:b,onFocus:P,onMouseEnter:ne},E);return x.createElement(x.Fragment,null,g.map(function(ee,le){var oe=p===le;return x.createElement(c0,no({ref:function(xe){xe?D.current[le]=xe:delete D.current[le]},dragging:oe,draggingDelete:oe&&y,style:zi(s,le),key:le,value:ee,valueIndex:le},Z))}),v&&B&&x.createElement(c0,no({key:"a11y"},Z,{value:g[I],valueIndex:null,dragging:p!==-1,draggingDelete:y,render:v,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}),yS=function(r){var l=r.prefixCls,s=r.style,d=r.children,f=r.value,g=r.onClick,b=x.useContext(_i),v=b.min,p=b.max,y=b.direction,k=b.includedStart,E=b.includedEnd,D=b.included,z="".concat(l,"-text"),N=Nf(y,f,v,p);return x.createElement("span",{className:Mi(z,za({},"".concat(z,"-active"),D&&k<=f&&f<=E)),style:$t($t({},N),s),onMouseDown:function(O){O.stopPropagation()},onClick:function(){g(f)}},d)},wS=function(r){var l=r.prefixCls,s=r.marks,d=r.onClick,f="".concat(l,"-mark");return s.length?x.createElement("div",{className:f},s.map(function(g){var b=g.value,v=g.style,p=g.label;return x.createElement(yS,{key:b,prefixCls:f,style:v,value:b,onClick:d},p)})):null},SS=function(r){var l=r.prefixCls,s=r.value,d=r.style,f=r.activeStyle,g=x.useContext(_i),b=g.min,v=g.max,p=g.direction,y=g.included,k=g.includedStart,E=g.includedEnd,D="".concat(l,"-dot"),z=y&&k<=s&&s<=E,N=$t($t({},Nf(p,s,b,v)),typeof d=="function"?d(s):d);return z&&(N=$t($t({},N),typeof f=="function"?f(s):f)),x.createElement("span",{className:Mi(D,za({},"".concat(D,"-active"),z)),style:N})},jS=function(r){var l=r.prefixCls,s=r.marks,d=r.dots,f=r.style,g=r.activeStyle,b=x.useContext(_i),v=b.min,p=b.max,y=b.step,k=x.useMemo(function(){var E=new Set;if(s.forEach(function(z){E.add(z.value)}),d&&y!==null)for(var D=v;D<=p;)E.add(D),D+=y;return Array.from(E)},[v,p,y,d,s]);return x.createElement("div",{className:"".concat(l,"-step")},k.map(function(E){return x.createElement(SS,{prefixCls:l,key:E,value:E,style:f,activeStyle:g})}))},u0=function(r){var l=r.prefixCls,s=r.style,d=r.start,f=r.end,g=r.index,b=r.onStartMove,v=r.replaceCls,p=x.useContext(_i),y=p.direction,k=p.min,E=p.max,D=p.disabled,z=p.range,N=p.classNames,B="".concat(l,"-track"),O=vf(d,k,E),A=vf(f,k,E),q=function(P){!D&&b&&b(P,-1)},I={};switch(y){case"rtl":I.right="".concat(O*100,"%"),I.width="".concat(A*100-O*100,"%");break;case"btt":I.bottom="".concat(O*100,"%"),I.height="".concat(A*100-O*100,"%");break;case"ttb":I.top="".concat(O*100,"%"),I.height="".concat(A*100-O*100,"%");break;default:I.left="".concat(O*100,"%"),I.width="".concat(A*100-O*100,"%")}var _=v||Mi(B,za(za({},"".concat(B,"-").concat(g+1),g!==null&&z),"".concat(l,"-track-draggable"),b),N.track);return x.createElement("div",{className:_,style:$t($t({},I),s),onMouseDown:q,onTouchStart:q})},ES=function(r){var l=r.prefixCls,s=r.style,d=r.values,f=r.startPoint,g=r.onStartMove,b=x.useContext(_i),v=b.included,p=b.range,y=b.min,k=b.styles,E=b.classNames,D=x.useMemo(function(){if(!p){if(d.length===0)return[];var N=f??y,B=d[0];return[{start:Math.min(N,B),end:Math.max(N,B)}]}for(var O=[],A=0;A<d.length-1;A+=1)O.push({start:d[A],end:d[A+1]});return O},[d,p,f,y]);if(!v)return null;var z=D!=null&&D.length&&(E.tracks||k.tracks)?x.createElement(u0,{index:null,prefixCls:l,start:D[0].start,end:D[D.length-1].end,replaceCls:Mi(E.tracks,"".concat(l,"-tracks")),style:k.tracks}):null;return x.createElement(x.Fragment,null,z,D.map(function(N,B){var O=N.start,A=N.end;return x.createElement(u0,{index:B,prefixCls:l,style:$t($t({},zi(s,B)),k.track),start:O,end:A,key:B,onStartMove:g})}))},CS=130;function d0(a){var r="targetTouches"in a?a.targetTouches[0]:a;return{pageX:r.pageX,pageY:r.pageY}}function AS(a,r,l,s,d,f,g,b,v,p,y){var k=x.useState(null),E=Nt(k,2),D=E[0],z=E[1],N=x.useState(-1),B=Nt(N,2),O=B[0],A=B[1],q=x.useState(!1),I=Nt(q,2),_=I[0],G=I[1],P=x.useState(l),ne=Nt(P,2),Z=ne[0],ee=ne[1],le=x.useState(l),oe=Nt(le,2),be=oe[0],xe=oe[1],he=x.useRef(null),U=x.useRef(null),J=x.useRef(null),re=x.useContext(gS),ce=re.onDragStart,w=re.onDragChange;Ox(function(){O===-1&&ee(l)},[l,O]),x.useEffect(function(){return function(){document.removeEventListener("mousemove",he.current),document.removeEventListener("mouseup",U.current),J.current&&(J.current.removeEventListener("touchmove",he.current),J.current.removeEventListener("touchend",U.current))}},[]);var T=function(ae,Se,W){Se!==void 0&&z(Se),ee(ae);var ye=ae;W&&(ye=ae.filter(function(we,Ae){return Ae!==O})),g(ye),w&&w({rawValues:ae,deleteIndex:W?O:-1,draggingIndex:O,draggingValue:Se})},X=Mr(function(ie,ae,Se){if(ie===-1){var W=be[0],ye=be[be.length-1],we=s-W,Ae=d-ye,ve=ae*(d-s);ve=Math.max(ve,we),ve=Math.min(ve,Ae);var tt=f(W+ve);ve=tt-W;var mt=be.map(function(na){return na+ve});T(mt)}else{var ta=(d-s)*ae,aa=kn(Z);aa[ie]=be[ie];var Je=v(aa,ta,ie,"dist");T(Je.values,Je.value,Se)}}),F=function(ae,Se,W){ae.stopPropagation();var ye=W||l,we=ye[Se];A(Se),z(we),xe(ye),ee(ye),G(!1);var Ae=d0(ae),ve=Ae.pageX,tt=Ae.pageY,mt=!1;ce&&ce({rawValues:ye,draggingIndex:Se,draggingValue:we});var ta=function(na){na.preventDefault();var st=d0(na),Da=st.pageX,Pt=st.pageY,Ya=Da-ve,wt=Pt-tt,Yt=a.current.getBoundingClientRect(),Gt=Yt.width,Rt=Yt.height,Ie,ht;switch(r){case"btt":Ie=-wt/Rt,ht=Ya;break;case"ttb":Ie=wt/Rt,ht=Ya;break;case"rtl":Ie=-Ya/Gt,ht=wt;break;default:Ie=Ya/Gt,ht=wt}mt=p?Math.abs(ht)>CS&&y<Z.length:!1,G(mt),X(Se,Ie,mt)},aa=function Je(na){na.preventDefault(),document.removeEventListener("mouseup",Je),document.removeEventListener("mousemove",ta),J.current&&(J.current.removeEventListener("touchmove",he.current),J.current.removeEventListener("touchend",U.current)),he.current=null,U.current=null,J.current=null,b(mt),A(-1),G(!1)};document.addEventListener("mouseup",aa),document.addEventListener("mousemove",ta),ae.currentTarget.addEventListener("touchend",aa),ae.currentTarget.addEventListener("touchmove",ta),he.current=ta,U.current=aa,J.current=ae.currentTarget},te=x.useMemo(function(){var ie=kn(l).sort(function(we,Ae){return we-Ae}),ae=kn(Z).sort(function(we,Ae){return we-Ae}),Se={};ae.forEach(function(we){Se[we]=(Se[we]||0)+1}),ie.forEach(function(we){Se[we]=(Se[we]||0)-1});var W=p?1:0,ye=Object.values(Se).reduce(function(we,Ae){return we+Math.abs(Ae)},0);return ye<=W?Z:l},[l,Z,p]);return[O,D,_,te,F]}function TS(a,r,l,s,d,f){var g=x.useCallback(function(D){return Math.max(a,Math.min(r,D))},[a,r]),b=x.useCallback(function(D){if(l!==null){var z=a+Math.round((g(D)-a)/l)*l,N=function(q){return(String(q).split(".")[1]||"").length},B=Math.max(N(l),N(r),N(a)),O=Number(z.toFixed(B));return a<=O&&O<=r?O:null}return null},[l,a,r,g]),v=x.useCallback(function(D){var z=g(D),N=s.map(function(A){return A.value});l!==null&&N.push(b(D)),N.push(a,r);var B=N[0],O=r-a;return N.forEach(function(A){var q=Math.abs(z-A);q<=O&&(B=A,O=q)}),B},[a,r,s,l,g,b]),p=function D(z,N,B){var O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof N=="number"){var A,q=z[B],I=q+N,_=[];s.forEach(function(ee){_.push(ee.value)}),_.push(a,r),_.push(b(q));var G=N>0?1:-1;O==="unit"?_.push(b(q+G*l)):_.push(b(I)),_=_.filter(function(ee){return ee!==null}).filter(function(ee){return N<0?ee<=q:ee>=q}),O==="unit"&&(_=_.filter(function(ee){return ee!==q}));var P=O==="unit"?q:I;A=_[0];var ne=Math.abs(A-P);if(_.forEach(function(ee){var le=Math.abs(ee-P);le<ne&&(A=ee,ne=le)}),A===void 0)return N<0?a:r;if(O==="dist")return A;if(Math.abs(N)>1){var Z=kn(z);return Z[B]=A,D(Z,N-G,B,O)}return A}else{if(N==="min")return a;if(N==="max")return r}},y=function(z,N,B){var O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",A=z[B],q=p(z,N,B,O);return{value:q,changed:q!==A}},k=function(z){return f===null&&z===0||typeof f=="number"&&z<f},E=function(z,N,B){var O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",A=z.map(v),q=A[B],I=p(A,N,B,O);if(A[B]=I,d===!1){var _=f||0;B>0&&A[B-1]!==q&&(A[B]=Math.max(A[B],A[B-1]+_)),B<A.length-1&&A[B+1]!==q&&(A[B]=Math.min(A[B],A[B+1]-_))}else if(typeof f=="number"||f===null){for(var G=B+1;G<A.length;G+=1)for(var P=!0;k(A[G]-A[G-1])&&P;){var ne=y(A,1,G);A[G]=ne.value,P=ne.changed}for(var Z=B;Z>0;Z-=1)for(var ee=!0;k(A[Z]-A[Z-1])&&ee;){var le=y(A,-1,Z-1);A[Z-1]=le.value,ee=le.changed}for(var oe=A.length-1;oe>0;oe-=1)for(var be=!0;k(A[oe]-A[oe-1])&&be;){var xe=y(A,-1,oe-1);A[oe-1]=xe.value,be=xe.changed}for(var he=0;he<A.length-1;he+=1)for(var U=!0;k(A[he+1]-A[he])&&U;){var J=y(A,1,he+1);A[he+1]=J.value,U=J.changed}}return{value:A[B],values:A}};return[v,E]}function kS(a){return x.useMemo(function(){if(a===!0||!a)return[!!a,!1,!1,0];var r=a.editable,l=a.draggableTrack,s=a.minCount,d=a.maxCount;return[!0,r,!r&&l,s||0,d]},[a])}var zS=x.forwardRef(function(a,r){var l=a.prefixCls,s=l===void 0?"rc-slider":l,d=a.className,f=a.style,g=a.classNames,b=a.styles,v=a.id,p=a.disabled,y=p===void 0?!1:p,k=a.keyboard,E=k===void 0?!0:k,D=a.autoFocus,z=a.onFocus,N=a.onBlur,B=a.min,O=B===void 0?0:B,A=a.max,q=A===void 0?100:A,I=a.step,_=I===void 0?1:I,G=a.value,P=a.defaultValue,ne=a.range,Z=a.count,ee=a.onChange,le=a.onBeforeChange,oe=a.onAfterChange,be=a.onChangeComplete,xe=a.allowCross,he=xe===void 0?!0:xe,U=a.pushable,J=U===void 0?!1:U,re=a.reverse,ce=a.vertical,w=a.included,T=w===void 0?!0:w,X=a.startPoint,F=a.trackStyle,te=a.handleStyle,ie=a.railStyle,ae=a.dotStyle,Se=a.activeDotStyle,W=a.marks,ye=a.dots,we=a.handleRender,Ae=a.activeHandleRender,ve=a.track,tt=a.tabIndex,mt=tt===void 0?0:tt,ta=a.ariaLabelForHandle,aa=a.ariaLabelledByForHandle,Je=a.ariaRequired,na=a.ariaValueTextFormatterForHandle,st=x.useRef(null),Da=x.useRef(null),Pt=x.useMemo(function(){return ce?re?"ttb":"btt":re?"rtl":"ltr"},[re,ce]),Ya=kS(ne),wt=Nt(Ya,5),Yt=wt[0],Gt=wt[1],Rt=wt[2],Ie=wt[3],ht=wt[4],Ue=x.useMemo(function(){return isFinite(O)?O:0},[O]),Ga=x.useMemo(function(){return isFinite(q)?q:100},[q]),Ma=x.useMemo(function(){return _!==null&&_<=0?1:_},[_]),Jr=x.useMemo(function(){return typeof J=="boolean"?J?Ma:!1:J>=0?J:!1},[J,Ma]),Va=x.useMemo(function(){return Object.keys(W||{}).map(function(De){var de=W[De],$e={value:Number(De)};return de&&ci(de)==="object"&&!x.isValidElement(de)&&("label"in de||"style"in de)?($e.style=de.style,$e.label=de.label):$e.label=de,$e}).filter(function(De){var de=De.label;return de||typeof de=="number"}).sort(function(De,de){return De.value-de.value})},[W]),ui=TS(Ue,Ga,Ma,Va,he,Jr),Na=Nt(ui,2),Xa=Na[0],on=Na[1],po=sS(P,{value:G}),Ui=Nt(po,2),va=Ui[0],$i=Ui[1],rt=x.useMemo(function(){var De=va==null?[]:Array.isArray(va)?va:[va],de=Nt(De,1),$e=de[0],Ge=$e===void 0?Ue:$e,at=va===null?[]:[Ge];if(Yt){if(at=kn(De),Z||va===void 0){var jt=Z>=0?Z+1:2;for(at=at.slice(0,jt);at.length<jt;){var ia;at.push((ia=at[at.length-1])!==null&&ia!==void 0?ia:Ue)}}at.sort(function(ba,Bt){return ba-Bt})}return at.forEach(function(ba,Bt){at[Bt]=Xa(ba)}),at},[va,Yt,Ue,Z,Xa]),sn=function(de){return Yt?de:de[0]},Mn=Mr(function(De){var de=kn(De).sort(function($e,Ge){return $e-Ge});ee&&!hS(de,rt,!0)&&ee(sn(de)),$i(de)}),qi=Mr(function(De){De&&st.current.hideHelp();var de=sn(rt);oe==null||oe(de),qr(!oe,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),be==null||be(de)}),Yi=function(de){if(!(y||!Gt||rt.length<=Ie)){var $e=kn(rt);$e.splice(de,1),le==null||le(sn($e)),Mn($e);var Ge=Math.max(0,de-1);st.current.hideHelp(),st.current.focus(Ge)}},Gi=AS(Da,Pt,rt,Ue,Ga,Xa,Mn,qi,on,Gt,Ie),cn=Nt(Gi,5),Vi=cn[0],St=cn[1],Be=cn[2],Oe=cn[3],pt=cn[4],Xi=function(de,$e){if(!y){var Ge=kn(rt),at=0,jt=0,ia=Ga-Ue;rt.forEach(function(Ka,di){var Vt=Math.abs(de-Ka);Vt<=ia&&(ia=Vt,at=di),Ka<de&&(jt=di)});var ba=at;Gt&&ia!==0&&(!ht||rt.length<ht)?(Ge.splice(jt+1,0,de),ba=jt+1):Ge[at]=de,Yt&&!rt.length&&Z===void 0&&Ge.push(de);var Bt=sn(Ge);if(le==null||le(Bt),Mn(Ge),$e){var Ba,Za;(Ba=document.activeElement)===null||Ba===void 0||(Za=Ba.blur)===null||Za===void 0||Za.call(Ba),st.current.focus(ba),pt($e,ba,Ge)}else oe==null||oe(Bt),qr(!oe,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),be==null||be(Bt)}},Tc=function(de){de.preventDefault();var $e=Da.current.getBoundingClientRect(),Ge=$e.width,at=$e.height,jt=$e.left,ia=$e.top,ba=$e.bottom,Bt=$e.right,Ba=de.clientX,Za=de.clientY,Ka;switch(Pt){case"btt":Ka=(ba-Za)/at;break;case"ttb":Ka=(Za-ia)/at;break;case"rtl":Ka=(Bt-Ba)/Ge;break;default:Ka=(Ba-jt)/Ge}var di=Ue+Ka*(Ga-Ue);Xi(Xa(di),de)},kc=x.useState(null),Ir=Nt(kc,2),un=Ir[0],Qi=Ir[1],Nn=function(de,$e){if(!y){var Ge=on(rt,de,$e);le==null||le(sn(rt)),Mn(Ge.values),Qi(Ge.value)}};x.useEffect(function(){if(un!==null){var De=rt.indexOf(un);De>=0&&st.current.focus(De)}Qi(null)},[un]);var Bn=x.useMemo(function(){return Rt&&Ma===null?!1:Rt},[Rt,Ma]),_n=Mr(function(De,de){pt(De,de),le==null||le(sn(rt))}),dn=Vi!==-1;x.useEffect(function(){if(!dn){var De=rt.lastIndexOf(St);st.current.focus(De)}},[dn]);var We=x.useMemo(function(){return kn(Oe).sort(function(De,de){return De-de})},[Oe]),go=x.useMemo(function(){return Yt?[We[0],We[We.length-1]]:[Ue,We[0]]},[We,Yt,Ue]),Wr=Nt(go,2),Qa=Wr[0],fn=Wr[1];x.useImperativeHandle(r,function(){return{focus:function(){st.current.focus(0)},blur:function(){var de,$e=document,Ge=$e.activeElement;(de=Da.current)!==null&&de!==void 0&&de.contains(Ge)&&(Ge==null||Ge.blur())}}}),x.useEffect(function(){D&&st.current.focus(0)},[]);var zc=x.useMemo(function(){return{min:Ue,max:Ga,direction:Pt,disabled:y,keyboard:E,step:Ma,included:T,includedStart:Qa,includedEnd:fn,range:Yt,tabIndex:mt,ariaLabelForHandle:ta,ariaLabelledByForHandle:aa,ariaRequired:Je,ariaValueTextFormatterForHandle:na,styles:b||{},classNames:g||{}}},[Ue,Ga,Pt,y,E,Ma,T,Qa,fn,Yt,mt,ta,aa,Je,na,b,g]);return x.createElement(_i.Provider,{value:zc},x.createElement("div",{ref:Da,className:Mi(s,d,za(za(za(za({},"".concat(s,"-disabled"),y),"".concat(s,"-vertical"),ce),"".concat(s,"-horizontal"),!ce),"".concat(s,"-with-marks"),Va.length)),style:f,onMouseDown:Tc,id:v},x.createElement("div",{className:Mi("".concat(s,"-rail"),g==null?void 0:g.rail),style:$t($t({},ie),b==null?void 0:b.rail)}),ve!==!1&&x.createElement(ES,{prefixCls:s,style:F,values:rt,startPoint:X,onStartMove:Bn?_n:void 0}),x.createElement(jS,{prefixCls:s,marks:Va,dots:ye,style:ae,activeStyle:Se}),x.createElement(bS,{ref:st,prefixCls:s,style:te,values:Oe,draggingIndex:Vi,draggingDelete:Be,onStartMove:_n,onOffsetChange:Nn,onFocus:z,onBlur:N,handleRender:we,activeHandleRender:Ae,onChangeComplete:qi,onDelete:Gt?Yi:void 0}),x.createElement(wS,{prefixCls:s,marks:Va,onClick:Xi})))});const Nx="/Tickify-main/assets/dubai-Cvk77IGV.jpg",Bx="/Tickify-main/assets/istanbul-BrGuosLx.jpg",_x="/Tickify-main/assets/maldives-DsJFKXul.jpg",Lx="/Tickify-main/assets/paris-CLxfDw61.jpg",Hx="/Tickify-main/assets/home-CPY2O_g-.jpg",{Range:Wj}=zS,RS=j.div`
  max-width: 1400px;
  margin-top: -60px;
  margin-right: 20px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0 10px;
  }

`,OS=j.section`
  background: url(${Hx});
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding-top: 65px;
  padding-right: 32px;
  padding-bottom: 125px;
  padding-left: 32px;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 3rem;
  width: 80rem;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 16px;
    border-radius: 10px;
  }

`,DS=j.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }

`,MS=j.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  } 
`,NS=j.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

`,BS=j.button`
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid transparent;
  border-radius: 8px;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;


  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.active {
    background: var(--white);
    color: var(--primary-color);
    border-color: var(--accent-color);
  }

  &.active:hover {
    background: var(--white);
    transform: scale(1.03);
  }

  svg {
    font-size: 1.2rem;
  }
    
  @media (max-width: 768px) {
    width: 50%;
    justify-content: center;
  }
`,_S=j.div`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(17, 16, 16, 0.57);
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,LS=j.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  align-items: end;
  padding: 10px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`,ks=j.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input,
  select {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;



    &:focus {
      outline: none;
    }

    &.error {
      border: 2px solid red !important;
      box-shadow: 0 0 5px rgba(255, 0, 0, 0.3) !important;
    }
  }
`,HS=j.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: flex-end;
  grid-column: 1 / span 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`,US=j.button`
  background: none;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  padding: 0 10px;
  align-self: center;
  transition: background 0.3s ease;
  flex-shrink: 0;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-radius: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;


  &:hover {
    background: #f5f5f5;
  }

  i {
    font-size: 1.2rem;
  }
    
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`,$S=j.button`
  background: #1976d2;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  width: 120px;
  grid-column: 2 / 3;
  justify-self: end;


  &:hover {
    background: #ff8c00;
    transform: translateY(-2px);
  }
    
  @media (max-width: 768px) {
    justify-self: center;
    grid-column: auto;
    width: 100%;
  }
`,qS=j.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

`,zs=j.div`
  text-align: center;
  padding: 2rem;
  background: var(--light-gray);
  border-radius: 10px;
  transition: transform 0.3s ease;


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  i {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 1rem;

  }

  h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);

  }

  p {
    color: #666;
    line-height: 1.6;
  }
`,YS=j.section`
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,GS=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

`,Rs=j.div`
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1);
  will-change: transform, box-shadow;
  
  &:hover {
    transform: scale(1.045);
    box-shadow: 0 8px 24px rgba(25, 118, 210, 0.13), 0 2px 10px rgba(0,0,0,0.12);
    z-index: 2;
  }
`,Os=j.div`
  height: 200px;
  background-image: url(${a=>a.image});
  background-size: cover;
  background-position: center;
  
  @media (max-width: 768px) {
    height: 160px;
  }

`,Ds=j.div`
  padding: 1.5rem;


  h3 {
    margin-bottom: 0.5rem;
    color: #333;

  }

  .offer-price {
    color: #1976d2;
    font-weight: bold;
    margin-bottom: 0.5rem;

    
  }

  p {
    color: #666;
    
  }
`,VS=qa`
  @media (max-width: 768px) {
    body {
      padding-left: 0px !important;
      padding-top: 0px !important;
    }
  }
`,XS=()=>{const{language:a}=pa(),[r,l]=x.useState("flights"),[s,d]=x.useState(!0),[f,g]=x.useState(""),[b,v]=x.useState(""),[p,y]=x.useState(""),[k,E]=x.useState("economy"),[D,z]=x.useState({}),N=Bi(),[B,O]=x.useState(!1),[A,q]=x.useState(""),I=[{value:"",label:a==="ar"?"اختر الدولة":"Select Country"},{value:"Egypt",label:a==="ar"?"مصر":"Egypt"},{value:"UAE",label:a==="ar"?"الإمارات":"UAE"},{value:"Turkey",label:a==="ar"?"تركيا":"Turkey"}],_=[{value:"",label:a==="ar"?"اختر الدولة":"Select Country"},{value:"Turkey",label:a==="ar"?"تركيا":"Turkey"},{value:"France",label:a==="ar"?"فرنسا":"France"},{value:"Germany",label:a==="ar"?"ألمانيا":"Germany"}],G=[{value:"economy",label:a==="ar"?"اقتصادي":"Economy"},{value:"business",label:a==="ar"?"رجال أعمال":"Business"},{value:"firstclass",label:a==="ar"?"الدرجة الأولى":"FirstClass"},{value:"vip",label:a==="ar"?"كبار الشخصيات":"VIP"}],P=()=>{const ee=f;g(b),v(ee)},ne=()=>{const ee={};return f.trim()||(ee.origin=!0),b.trim()||(ee.destination=!0),p||(ee.departureDate=!0),z(ee),Object.keys(ee).length===0},Z=async ee=>{if(ee.preventDefault(),!!ne()){O(!0),q("");try{const le=`https://tickifywebsite.runasp.net/api/Flights/search-default?DepartureDate=${p}T00:00:00&DepartureAirportCountry=${encodeURIComponent(f)}&ArrivalAirportCountry=${encodeURIComponent(b)}&ClassType=${k.toUpperCase()}&MinPrice=300&MaxPrice=`,oe=await fetch(le);if(oe.status===404){N("/flights/results",{state:{origin:f,destination:b,departureDate:p,cabinClass:k,results:[],noFlights:!0}});return}if(!oe.ok)throw new Error("فشل البحث عن الرحلات");const be=await oe.json();if(Array.isArray(be)&&be.length===0){N("/flights/results",{state:{origin:f,destination:b,departureDate:p,cabinClass:k,results:[],noFlights:!0}});return}N("/flights/results",{state:{origin:f,destination:b,departureDate:p,cabinClass:k,results:be}})}catch{q("حدث خطأ أثناء البحث عن الرحلات")}finally{O(!1)}}};return x.useEffect(()=>{setTimeout(()=>{d(!1)},2e3)},[]),s?c.jsx("div",{className:"loader-container",children:c.jsxs("div",{className:"loader",children:[c.jsx("div",{className:"loader-circle"}),c.jsx("div",{className:"loader-icon",children:c.jsx("i",{className:"fas fa-plane-departure"})})]})}):c.jsxs(c.Fragment,{children:[c.jsx(VS,{}),c.jsxs(RS,{children:[c.jsxs(OS,{children:[c.jsx(DS,{children:a==="ar"?"رحلتك تبدأ هنا":"Your journey Start Here"}),c.jsx(MS,{children:a==="ar"?"احجز رحلاتك وفنادقك وسياراتك بأفضل الأسعار":"Book your flights, hotels and cars at the best prices."}),c.jsx(NS,{children:c.jsxs(BS,{className:r==="flights"?"active":"",onClick:()=>l("flights"),children:[c.jsx(P2,{}),a==="ar"?"رحلات طيران":"Flights"]})}),c.jsx(_S,{children:c.jsxs(LS,{onSubmit:Z,children:[c.jsxs(HS,{children:[c.jsxs(ks,{children:[c.jsx("input",{type:"text",id:"origin",list:"departure-options",value:f,onChange:ee=>g(ee.target.value),className:D.origin?"error":"",placeholder:a==="ar"?"مدينة المغادرة":"Departure city"}),c.jsx("datalist",{id:"departure-options",children:I.map(ee=>ee.value&&c.jsx("option",{value:ee.value,children:ee.label},ee.value))})]}),c.jsx(US,{type:"button",onClick:P,children:c.jsx("i",{className:"fas fa-exchange-alt"})}),c.jsxs(ks,{children:[c.jsx("input",{type:"text",id:"destination",list:"arrival-options",value:b,onChange:ee=>v(ee.target.value),className:D.destination?"error":"",placeholder:a==="ar"?"مدينة الوصول":"Arrival city"}),c.jsx("datalist",{id:"arrival-options",children:_.map(ee=>ee.value&&c.jsx("option",{value:ee.value,children:ee.label},ee.value))})]})]}),c.jsxs(ks,{children:[c.jsx("label",{htmlFor:"departure-date",children:a==="ar"?"تاريخ المغادرة":"Departure Date"}),c.jsx("input",{type:"date",id:"departure-date",value:p,min:new Date().toISOString().split("T")[0],onChange:ee=>y(ee.target.value),className:D.departureDate?"error":""})]}),c.jsx(ks,{children:c.jsx("select",{id:"cabin-class",value:k,onChange:ee=>E(ee.target.value),children:G.map(ee=>c.jsx("option",{value:ee.value,children:ee.label},ee.value))})}),c.jsx($S,{type:"submit",disabled:B,children:B?a==="ar"?"جاري البحث...":"Searching...":a==="ar"?"ابحث":"Search"})]})})]}),A&&c.jsx("div",{style:{color:"red",marginTop:8},children:A}),c.jsxs(qS,{children:[c.jsxs(zs,{children:[c.jsx("i",{className:"fas fa-globe"}),c.jsx("h3",{children:a==="ar"?"وجهات متعددة":"Multiple parties"}),c.jsx("p",{children:a==="ar"?"اكتشف أكثر من 1000 وجهة حول العالم":"Discover over 1,000 destinations around the world"})]}),c.jsxs(zs,{children:[c.jsx("i",{className:"fas fa-tag"}),c.jsx("h3",{children:a==="ar"?"أفضل الأسعار":"Best Prices"}),c.jsx("p",{children:a==="ar"?"نضمن لك أفضل الأسعار مع خيارات متعددة":"We guarantee the best prices with Multipl options"})]}),c.jsxs(zs,{children:[c.jsx("i",{className:"fas fa-headset"}),c.jsx("h3",{children:a==="ar"?"دعم 24/7":"24/7 support"}),c.jsx("p",{children:a==="ar"?" فريق دعم متكامل لمساعدتك في أي وقت":"A full support team to help you at any time"})]}),c.jsxs(zs,{children:[c.jsx("i",{className:"fas fa-lock"}),c.jsx("h3",{children:a==="ar"?"دفع آمن":"Secure payment"}),c.jsx("p",{children:a==="ar"?"نضمن لك أمان معاملاتك وحماية بياناتك":"We guarantee the security of your transactions and the protection of your data."})]})]}),c.jsxs(YS,{children:[c.jsx("h2",{children:a==="ar"?"أفضل العروض":"Best offers"}),c.jsxs(GS,{children:[c.jsxs(Rs,{children:[c.jsx(Os,{image:Nx}),c.jsxs(Ds,{children:[c.jsx("h3",{children:a==="ar"?"عرض دبي المميز":"Dubai Special Offer"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 1999 ريال":"Starting from 1999 SAR"}),c.jsx("p",{children:a==="ar"?"3 ليالي في فندق 5 نجوم مع تذاكر الطيران":"3 nights in a 5-star hotel with flight tickets"})]})]}),c.jsxs(Rs,{children:[c.jsx(Os,{image:Bx}),c.jsxs(Ds,{children:[c.jsx("h3",{children:a==="ar"?"رحلة إسطنبول":"Istanbul trip"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 2499 ريال":"Starting from 2499 SAR"}),c.jsx("p",{children:a==="ar"?"5 ليالي شاملة الفندق والطيران":"5 nights including hotel and flight"})]})]}),c.jsxs(Rs,{children:[c.jsx(Os,{image:_x}),c.jsxs(Ds,{children:[c.jsx("h3",{children:a==="ar"?"جزر المالديف":"Maldives"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 4999 ريال":"Starting from 4999 riyals"}),c.jsx("p",{children:a==="ar"?"7 ليالي في منتجع فاخر مع الطيران":"7 nights in a luxury resort with flights"})]})]}),c.jsxs(Rs,{children:[c.jsx(Os,{image:Lx}),c.jsxs(Ds,{children:[c.jsx("h3",{children:a==="ar"?"باريس _ فرنسا":"Paris, France"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 3999 ريال":"Starting from 3999 riyals"}),c.jsx("p",{children:a==="ar"?"4 ليالي في فندق 5 نجوم مع تذاكر الطيران":"4 nights in a 5-star hotel with flight tickets"})]})]})]})]})]})]})},Ux="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII=",$x="/Tickify-main/assets/facebook-BcNyBvTH.png",qx="/Tickify-main/assets/X-DTBoECSh.png",QS=qa`
  body {
    padding: 0 !important;
  }
`,ZS=j.div`
  background: white;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  margin: 0px;

  @media (max-width: 768px) {
    padding: 30px;
    margin: 0;
    max-width: 100%;
  }
`,KS=j.h1`
  color: #00233d;
  font-size: 32px;
  margin-bottom: 8px;
 
  font-weight: bold;
  margin-top: -25px;
  margin-left: -15px;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
    margin: 0 0 8px 0;
  }
`,PS=j.h2`
  color: #00233d;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 30px;
 
  margin-left: -15px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 0 20px 0;
  }
`,Zd=j.div`
  margin-bottom: 20px;

  label {
    display: block;
    color: #00233d;
    margin-bottom: 8px;
    font-size: 14px;
   
    margin-left: -1rem;

    @media (max-width: 768px) {
      text-align: start;
      margin-left: 0;
    }
  }

  input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
    margin-right: 0px;
    padding-right: 20px;

    @media (max-width: 768px) {
      padding-right: 12px;
      margin-right: 0;
    }

    &:focus {
      border-color: #0066ff;
      outline: none;
    }
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    vertical-align: middle;
    margin-top: -2px;
  }
`,FS=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`,JS=j.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: -1rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  label {
    color: #00233d;
    font-size: 14px;
  }
`,IS=j.a`
  color: #0066ff;
  text-decoration: none;
  font-size: 14px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`,f0=j.button`
  width: 100%;
  padding: 14px;
  background: #00233d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #001a33;
  }
`,WS=j.div`
  margin-top: 2rem;
  text-align: center;
`,e5=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`,m0=j.div`
  flex: 1;
  height: 1px;
  background: #e0e0e0;
  margin: 0 1rem;
`,t5=j.span`
  color: #00233d;
  font-size: 0.9rem;
  white-space: nowrap;
`,a5=j.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,Kd=j.button`
  width: 40px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .facebook {
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 0;
  }
  .facebook img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  facebook:hover {
    background: #f8f8f8;
    border-color: #dadce0;
  }
  .google {
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 0;
  }
  .google img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .google:hover {
    background: #f8f8f8;
    border-color: #dadce0;
  }
  .twitter {
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 0;
  }
  .twitter img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .twitter:hover {
    background: #f8f8f8;
    border-color: #dadce0;
  }
`,n5=j.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #00233d;

  a {
    color: #0066ff;
    text-decoration: none;
    font-weight: 500;
    margin-right: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`,i5=j.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`,r5=j.div`
  background: #fff;
  border-radius: 12px;
  padding: 32px 24px;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: 0 4px 16px #0002;
  position: relative;
`,l5=j.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #888;
`,o5=()=>{const{language:a}=pa(),r=Bi(),{setIsSidebarOpen:l}=wc(),[s,d]=x.useState(""),[f,g]=x.useState(""),[b,v]=x.useState(""),[p,y]=x.useState(""),[k,E]=x.useState(""),[D,z]=x.useState(!1),[N,B]=x.useState(!1),[O,A]=x.useState(""),[q,I]=x.useState(!1),_=async G=>{G.preventDefault();let P=!1;if(s?v(""):(v(a==="ar"?"يرجى إدخال البريد الإلكتروني":"Please enter your email"),P=!0),f?y(""):(y(a==="ar"?"يرجى إدخال كلمة المرور":"Please enter your password"),P=!0),!P){E(""),z(!0);try{const ne=await fetch("https://tickifywebsite.runasp.net/Auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:f})});if(!ne.ok){const ee=await ne.json().catch(()=>({}));E(ee.message||(a==="ar"?"فشل تسجيل الدخول. حاول مرة أخرى.":"Login failed. Please try again.")),z(!1);return}const Z=await ne.json();localStorage.clear(),localStorage.setItem("isLoggedIn","true"),Z.token&&localStorage.setItem("token",Z.token),Z.id&&localStorage.setItem("id",Z.id),Z.lastName&&localStorage.setItem("email",Z.lastName),Z.firstName&&localStorage.setItem("firstName",Z.firstName),Z.email&&localStorage.setItem("lastName",Z.email),Z.firstName&&Z.lastName&&localStorage.setItem("fullName",`${Z.firstName} ${Z.lastName}`),Z.phone&&localStorage.setItem("phone",Z.phone),Z.expiresIn&&localStorage.setItem("expiresIn",Z.expiresIn.toString()),l(!1),z(!1),r("/")}catch{E(a==="ar"?"حدث خطأ أثناء الاتصال بالخادم.":"An error occurred while connecting to the server."),z(!1)}}};return c.jsxs(c.Fragment,{children:[c.jsx(QS,{}),c.jsxs(ZS,{children:[c.jsx(KS,{children:a==="ar"?"تسجيل الدخول":"Login"}),c.jsx(PS,{children:a==="ar"?"مرحباً بعودتك! قم بتسجيل الدخول للوصول إلى حسابك":"Welcome back! Sign in to access your account"}),c.jsxs("form",{onSubmit:_,children:[b||p&&c.jsx("div",{style:{color:"red",marginBottom:"10px",textAlign:"center"},children:b||p}),c.jsxs(Zd,{children:[c.jsx("label",{children:a==="ar"?"البريد الإلكتروني":"Email"}),c.jsx("input",{type:"email",value:s,onChange:G=>d(G.target.value),placeholder:a==="ar"?"أدخل بريدك الإلكتروني":"Enter your email",style:b?{borderColor:"red"}:{}}),b&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:b})]}),c.jsxs(Zd,{children:[c.jsx("label",{children:a==="ar"?"كلمة المرور":"Password"}),c.jsx("input",{type:"password",value:f,onChange:G=>g(G.target.value),placeholder:a==="ar"?"أدخل كلمة المرور":"Enter your password",style:p?{borderColor:"red"}:{}}),p&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:p})]}),c.jsxs(FS,{children:[c.jsxs(JS,{children:[c.jsx("input",{type:"checkbox",id:"remember"}),c.jsx("label",{htmlFor:"remember",children:a==="ar"?"تذكرني":"Remember me"})]}),c.jsx(IS,{href:"#",onClick:G=>{G.preventDefault(),B(!0)},children:a==="ar"?"نسيت كلمة المرور؟":"Forgot password?"})]}),c.jsx(f0,{type:"submit",disabled:D,children:D?a==="ar"?"جاري تسجيل الدخول...":"Logging in...":a==="ar"?"تسجيل الدخول":"Login"}),k&&c.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"10px",textAlign:"center"},children:k})]}),c.jsxs(WS,{children:[c.jsxs(e5,{children:[c.jsx(m0,{}),c.jsx(t5,{children:a==="ar"?"أو سجل الدخول باستخدام":"Or login with"}),c.jsx(m0,{})]}),c.jsxs(a5,{children:[c.jsx(Kd,{className:"google",children:c.jsx("img",{src:Ux,alt:"Google"})}),c.jsx(Kd,{className:"facebook",children:c.jsx("img",{src:$x,alt:"Facebook"})}),c.jsx(Kd,{className:"twitter",children:c.jsx("img",{src:qx,alt:"X"})})]})]}),c.jsxs(n5,{children:[a==="ar"?"ليس لديك حساب؟":"Don't have an account?",c.jsx("a",{href:"/signup",children:a==="ar"?"إنشاء حساب":"Sign up"})]})]}),N&&c.jsx(i5,{children:c.jsxs(r5,{children:[c.jsx(l5,{onClick:()=>B(!1),children:"×"}),c.jsx("h2",{style:{textAlign:"center",color:"#00233d",marginBottom:16},children:a==="ar"?"استعادة كلمة المرور":"Reset Password"}),q?c.jsx("div",{style:{color:"#1976d2",textAlign:"center",margin:"16px 0"},children:a==="ar"?"تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني ":"A reset link has been sent to your email (mock)."}):c.jsxs("form",{onSubmit:G=>{G.preventDefault(),I(!0)},children:[c.jsx(Zd,{children:c.jsx("input",{type:"email",value:O,onChange:G=>A(G.target.value),placeholder:a==="ar"?"أدخل بريدك الإلكتروني":"Enter your email",required:!0})}),c.jsx(f0,{type:"submit",style:{marginTop:8},children:a==="ar"?"إرسال":"Send"})]})]})})]})},s5=qa`
  body {
    padding: 0 !important;
    
  }
`,c5=j.div`
  background: white;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  margin:0px;
  @media (max-width: 768px) {
    padding: 30px;
    margin: 0;
    max-width: 100%;
  }
`,u5=j.h1`
  color: #00233d;
  font-size: 32px;
  margin-bottom: 8px;
  text-align: start;
  font-weight: bold;
  margin-top: -25px;
  margin-left: -15px;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
    margin: 0 0 8px 0;
  }
`,d5=j.h2`
  color: #00233d;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 30px;
  text-align: start;
  margin-left: -15px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 0 20px 0;
  }
`,Tr=j.div`
  margin-bottom: 20px;

  label {
    display: block;
    color: #00233d;
    margin-bottom: 8px;
    font-size: 14px;
    text-align: start;
    margin-left: -1rem;

    @media (max-width: 768px) {
      text-align: start;
      margin-left: 0;
    }
  }

  input {
    width: 100%;
    padding: 10px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
   

    @media (max-width: 768px) {
      padding-right: 12px;
      margin-right: 0;
      font-size: 14px;
    }

    &:focus {
      border-color: #0066ff;
      outline: none;
    }
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    vertical-align: middle;
    margin-top: -2px;

    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`,f5=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`,m5=j.div`
  display: flex;
  align-items: center;
  gap: 8px;
 

  @media (max-width: 768px) {
    margin-right: 2rem;
  }

  @media (max-width: 480px) {
    margin-right: 0;
  }

  label {
    color: #00233d;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }

  a {
    color: #0066ff;
    text-decoration: none;
  }
`,h5=j.button`
  width: 100%;
  padding: 14px;
  background: #00233d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }

  &:hover {
    background: #001a33;
  }
`,p5=j.div`
  margin-top: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`,g5=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`,h0=j.div`
  flex: 1;
  height: 1px;
  background: #e0e0e0;
  margin: 0 1rem;
`,x5=j.span`
  color: #00233d;
  font-size: 0.9rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,v5=j.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin: 1rem 0;
  }
`,Pd=j.button`
  width: 40px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`,b5=j.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #00233d;

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  a {
    color: #0066ff;
    text-decoration: none;
    font-weight: 500;
    margin-right: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`,y5=j.div`
  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`,w5=()=>{const{language:a}=pa(),r=Bi(),{setIsSidebarOpen:l}=wc(),[s,d]=x.useState(""),[f,g]=x.useState(""),[b,v]=x.useState(""),[p,y]=x.useState(""),[k,E]=x.useState(""),[D,z]=x.useState(""),[N,B]=x.useState(""),[O,A]=x.useState(""),[q,I]=x.useState(""),[_,G]=x.useState(""),[P,ne]=x.useState(""),[Z,ee]=x.useState(""),[le,oe]=x.useState(!1),[be,xe]=x.useState(!1),[he,U]=x.useState(""),[J,re]=x.useState(!1),ce=async w=>{w.preventDefault();let T=!1;if(s?B(""):(B(a==="ar"?"يرجى إدخال الاسم الأول":"Please enter your first name"),T=!0),f?A(""):(A(a==="ar"?"يرجى إدخال الاسم الثاني":"Please enter your last name"),T=!0),b?I(""):(I(a==="ar"?"يرجى إدخال رقم الهاتف":"Please enter your phone number"),T=!0),p?G(""):(G(a==="ar"?"يرجى إدخال البريد الإلكتروني":"Please enter your email"),T=!0),k?ne(""):(ne(a==="ar"?"يرجى إدخال كلمة المرور":"Please enter your password"),T=!0),D?k!==D?(ee(a==="ar"?"كلمة المرور غير متطابقة":"Passwords do not match"),T=!0):ee(""):(ee(a==="ar"?"يرجى تأكيد كلمة المرور":"Please confirm your password"),T=!0),le?xe(!1):(xe(!0),T=!0),!T){U(""),re(!0);try{const X=await fetch("https://tickifywebsite.runasp.net/Auth/Register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:p,password:k,firstName:s,lastName:f,phoneNumber:b})});if(!X.ok){const F=await X.json().catch(()=>({}));U(F.message||(a==="ar"?"فشل التسجيل. حاول مرة أخرى.":"Registration failed. Please try again.")),re(!1);return}l(!1),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("firstName",s),localStorage.setItem("lastName",f),localStorage.setItem("fullName",s+" "+f),localStorage.setItem("phone",b),localStorage.setItem("email",p),re(!1),r("/profile")}catch{U(a==="ar"?"حدث خطأ أثناء الاتصال بالخادم.":"An error occurred while connecting to the server."),re(!1)}}};return c.jsxs(c.Fragment,{children:[c.jsx(s5,{}),c.jsxs(c5,{children:[c.jsx(u5,{children:a==="ar"?"إنشاء حساب":"Sign Up"}),c.jsx(d5,{children:a==="ar"?"انضم إلينا اليوم وابدأ رحلتك":"Join us today and start your journey"}),c.jsxs("form",{onSubmit:ce,children:[c.jsxs(y5,{children:[c.jsxs(Tr,{style:{flex:1},children:[c.jsx("label",{children:a==="ar"?"الاسم الأول":"First Name"}),c.jsx("input",{type:"text",value:s,onChange:w=>d(w.target.value),placeholder:a==="ar"?"أدخل اسمك الأول":"Enter your first name",style:N?{borderColor:"red"}:{}}),N&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:N})]}),c.jsxs(Tr,{style:{flex:1},children:[c.jsx("label",{children:a==="ar"?"الاسم الثاني":"Last Name"}),c.jsx("input",{type:"text",value:f,onChange:w=>g(w.target.value),placeholder:a==="ar"?"أدخل اسمك الثاني":"Enter your last name",style:O?{borderColor:"red"}:{}}),O&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:O})]})]}),c.jsxs(Tr,{children:[c.jsx("label",{children:a==="ar"?"رقم الهاتف":"Phone Number"}),c.jsx("input",{type:"tel",value:b,onChange:w=>v(w.target.value),placeholder:a==="ar"?"أدخل رقم هاتفك":"Enter your phone number",style:q?{borderColor:"red"}:{}}),q&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:q})]}),c.jsxs(Tr,{children:[c.jsx("label",{children:a==="ar"?"البريد الإلكتروني":"Email"}),c.jsx("input",{type:"email",value:p,onChange:w=>y(w.target.value),placeholder:a==="ar"?"أدخل بريدك الإلكتروني":"Enter your email",style:_?{borderColor:"red"}:{}}),_&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:_})]}),c.jsxs(Tr,{children:[c.jsx("label",{children:a==="ar"?"كلمة المرور":"Password"}),c.jsx("input",{type:"password",value:k,onChange:w=>E(w.target.value),placeholder:a==="ar"?"أدخل كلمة المرور":"Enter your password",style:P?{borderColor:"red"}:{}}),P&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:P})]}),c.jsxs(Tr,{children:[c.jsx("label",{children:a==="ar"?"تأكيد كلمة المرور":"Confirm Password"}),c.jsx("input",{type:"password",value:D,onChange:w=>z(w.target.value),placeholder:a==="ar"?"أعد إدخال كلمة المرور":"Re-enter your password",style:Z?{borderColor:"red"}:{}}),Z&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:Z})]}),c.jsx(f5,{children:c.jsxs(m5,{children:[c.jsx("input",{type:"checkbox",id:"terms",checked:le,onChange:w=>oe(w.target.checked),style:be?{outline:"2px solid red",boxShadow:"0 0 0 2px red"}:{}}),c.jsx("label",{htmlFor:"terms",style:{cursor:"pointer"},children:a==="ar"?"أوافق على الشروط والأحكام":"I agree to the Terms and Conditions"})]})}),c.jsx(h5,{type:"submit",disabled:J,children:J?a==="ar"?"جاري التسجيل...":"Signing Up...":a==="ar"?"إنشاء حساب":"Sign Up"}),he&&c.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"10px",textAlign:"center"},children:he})]}),c.jsxs(p5,{children:[c.jsxs(g5,{children:[c.jsx(h0,{}),c.jsx(x5,{children:a==="ar"?"أو سجل باستخدام":"Or sign up with"}),c.jsx(h0,{})]}),c.jsxs(v5,{children:[c.jsx(Pd,{className:"google",children:c.jsx("img",{src:Ux,alt:"Google"})}),c.jsx(Pd,{className:"facebook",children:c.jsx("img",{src:$x,alt:"Facebook"})}),c.jsx(Pd,{className:"twitter",children:c.jsx("img",{src:qx,alt:"X"})})]})]}),c.jsxs(b5,{children:[a==="ar"?"لديك حساب بالفعل؟":"Already have an account?",c.jsx("a",{href:"/login",children:a==="ar"?"تسجيل الدخول":"Login"})]})]})]})},S5=j.footer`
  background: var(--primary-color);
  color: var(--white);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  @media (max-width: 768px) {
    padding: 2rem 0 1rem;
    // margin-top: 2rem;
    // margin-right: -11rem;
  }
`,j5=j.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 10rem;
  }
`,Fd=j.div`
  h3 {
    color: var(--white);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.8rem;
      
      @media (max-width: 768px) {
        margin-bottom: 0.6rem;
      }
      
      a {
        color: var(--white);
        text-decoration: none;
        transition: color 0.3s ease;
        // font-size: 0.95rem;
        
        @media (max-width: 768px) {
          font-size: 0.9rem;
        }
        
        &:hover {
          color: var(--accent-color);
        }
      }
    }
  }
`,E5=j.div`
  p {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    // font-size: 0.95rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-bottom: 0.8rem;
    }
    
    i {
      color: var(--secondary-color);
      width: 20px;
      text-align: center;
    }
    
    a {
      color: var(--white);
      text-decoration: none;
      
      &:hover {
        color: #1976d2;
      }
    }
  }
`,C5=j.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding-top: 1.5rem;
    margin-top: 1.5rem;
  }
`,A5=()=>{const{language:a}=pa();return c.jsxs(S5,{children:[c.jsxs(j5,{children:[c.jsxs(Fd,{children:[c.jsx("h3",{children:a==="ar"?"عن تيكيفاي":"About Tickify"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(ma,{to:"/about",children:a==="ar"?"من نحن":"About Us"})}),c.jsx("li",{children:c.jsx(ma,{to:"/terms",children:a==="ar"?"الشروط والأحكام":"Terms and Conditions"})})]})]}),c.jsxs(Fd,{children:[c.jsx("h3",{children:a==="ar"?"المساعدة":"Help"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(ma,{to:"/cancellation",children:a==="ar"?"سياسة الإلغاء":"Cancellation Policy"})}),c.jsx("li",{children:c.jsx("span",{children:a==="ar"?"اتصل بنا":"Contact Us"})})]})]}),c.jsxs(Fd,{children:[c.jsx("h3",{children:a==="ar"?"معلومات التواصل":"Contact information"}),c.jsxs(E5,{children:[c.jsxs("p",{children:[c.jsx("i",{className:"fas fa-phone"}),c.jsx("span",{children:" 123456789 + "})]}),c.jsxs("p",{children:[c.jsx("i",{className:"fas fa-envelope"}),c.jsx("a",{href:"mailto:bessie.ferry32@ethereal.email",children:"bessie.ferry32@ethereal.email"})]}),c.jsxs("p",{children:[c.jsx("i",{className:"fas fa-map-marker-alt"}),a==="ar"?"المنصورة , مصر":"Mansoura, Egypt"]})]})]})]}),c.jsx(C5,{children:c.jsxs("p",{children:[" ",a==="ar"?"جميع الحقوق محفوظة":"All rights reserved."," © 2025 Tickify "]})})]})},T5=j.div`
  position: fixed;
  left: ${a=>a.isSidebarOpen?"300px":"1rem"};
  top: 30%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1002;
  transition: all 0.3s ease;
  opacity: ${a=>a.isSidebarOpen?0:1};
  visibility: ${a=>a.isSidebarOpen?"hidden":"visible"};
  pointer-events: ${a=>a.isSidebarOpen?"none":"auto"};

  @media (max-width: 768px) {
    display: none;
  }
`,p0=j(ma)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  color: #1976d2;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  i {
    font-size: 1.5rem;
  }
  
  &:hover {
    background: #1976d2;
    color: white;
    transform: scale(1.1);
  }

  &.active {
    background: var(--white);
    color: var(--primary-color);
    border-color: var(--accent-color);
  }

  &.active:hover {
    background: var(--white);
    transform: scale(1.03);
  }
`,k5=j.span`
  position: absolute;
  right: 60px;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  color: #333;
  font-size: 0.9rem;
  opacity: ${a=>a.isSidebarOpen?1:0};
  visibility: ${a=>a.isSidebarOpen?"visible":"hidden"};
  transition: all 0.3s ease;
  white-space: nowrap;
`,z5=j.div`
  position: relative;
  display: flex;
  align-items: center;
`,R5=()=>{const{isSidebarOpen:a}=wc(),r=$a(),l=localStorage.getItem("isLoggedIn")==="true",s=f=>{f.preventDefault(),localStorage.removeItem("isLoggedIn"),window.location.href="/"},d=[{to:"/",icon:"plane",text:"رحلات طيران"},l?{to:"/logout",icon:"sign-out-alt",text:"تسجيل الخروج",logout:!0}:{to:"/login",icon:"sign-in-alt",text:"تسجيل الدخول"},{to:"/app",icon:"mobile-alt",text:"التطبيق"},{to:"/help",icon:"question-circle",text:"مساعدة"}];return c.jsx(T5,{isSidebarOpen:a,children:d.map((f,g)=>c.jsxs(z5,{children:[f.logout?c.jsx(p0,{as:"a",href:"/",onClick:s,children:c.jsx("i",{className:`fas fa-${f.icon}`})}):c.jsx(p0,{to:f.to,className:r.pathname===f.to?"active":"",children:c.jsx("i",{className:`fas fa-${f.icon}`})}),c.jsx(k5,{isSidebarOpen:a,children:f.text})]},g))})};function O5(a){return ln({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"},child:[]},{tag:"path",attr:{d:"m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"},child:[]}]})(a)}const D5=j.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`,M5=()=>{const[a,r]=x.useState(!1),l=()=>{window.pageYOffset>300?r(!0):r(!1)},s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return x.useEffect(()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}),[]),c.jsx(D5,{onClick:s,className:a?"visible":"","aria-label":"العودة إلى أعلى الصفحة",children:c.jsx(O5,{})})},N5="/Tickify-main/assets/about-Bzrv1hkI.jpg",B5="/Tickify-main/assets/hager-D9qCfjDb.jpg",_5="/Tickify-main/assets/hadir-C7Ejnqej.jpg",L5="/Tickify-main/assets/fatma-DKkXtvfr.jpg",H5="/Tickify-main/assets/karim-DCElP6zk.jpg",U5="/Tickify-main/assets/alaa-jeCo7_1P.jpg",$5=j.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
`,q5=j.div`
  padding-left: 0px;
  padding-top: 100px;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 80px;
  }
`,Y5=j.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${N5});
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: var(--white);
  padding: 6rem 2rem;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 4rem;
  margin-top: -120px;
  margin-left: -110px;
  margin-right: -15px;


  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

  }

  p {
    font-size: 1.5rem;
    opacity: 0.9;

  }
  @media (max-width: 768px) {
    padding: 4rem 1rem;
    margin-top: -60px;
    margin-left: 0;
    margin-right: 0;

    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`,G5=j.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }

`,g0=j.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;


  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;

  }

  h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;

  
  }
    
  @media (max-width: 768px) {
    padding: 1.5rem;

    svg {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }

    h2 {
      font-size: 1.4rem;
    }
  }
`,V5=j.section`
  margin-bottom: 4rem;


  h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 2rem;

  }
    
  @media (max-width: 768px) {
    margin-bottom: 3rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }
`,X5=j.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

`,Ms=j.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;


  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;

  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;

  }

  
  @media (max-width: 768px) {
    padding: 1.5rem;

    svg {
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
    }

    h3 {
      font-size: 1.2rem;
    }
  }
`,Q5=j.section`
  margin-bottom: 4rem;

  h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 2rem;

  }
    
  @media (max-width: 768px) {
    margin-bottom: 3rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }
`,Z5=j.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  

`,kr=j.div`
    background: var(--white);
    border-radius: 15px;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.49);

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: var(--primary-color);
    margin: 0;
    text-align: right;
    font-size: 1.1rem;
    margin-bottom: 0.2rem;

  }

  p {
    color: var(--text-color);
    color: var(--text-color);
    text-align: right;
    margin: 0;
    font-size: 0.9rem;

  }
    
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3 {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
    }

    p {
      text-align: center;
      font-size: 1rem;
    }
  }
`,zr=j.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    margin-left: 16px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    // Special adjustment for hadir
    img[alt="Hadir El-Sayeed"] {
      object-position: center 20%;
    }
  
    &:has(img[alt="Hadir El-Sayeed"]) img {
      object-position: center 20%;
    }
       @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1rem;
}
  `,K5=qa`
  @media (max-width: 900px) {
    body {
      padding-top: 0 !important;
      padding-left: 0 !important;
    }
    .main-content {
      padding-top: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
`,P5=()=>{const{language:a}=pa();return c.jsxs(c.Fragment,{children:[c.jsx(K5,{}),c.jsx($5,{children:c.jsxs(q5,{children:[c.jsxs(Y5,{children:[c.jsx("h1",{children:a==="ar"?"من نحن":"About Us"}),c.jsx("p",{children:a==="ar"?"نحن نؤمن بأن السفر يجب أن يكون تجربة سهلة وممتعة للجميع":"We believe that travel should be an easy and enjoyable experience for everyone."})]}),c.jsxs(G5,{children:[c.jsxs(g0,{children:[c.jsx(X2,{}),c.jsx("h2",{children:a==="ar"?"رؤيتنا":"Our Vision"}),c.jsx("p",{children:a==="ar"?"نسعى لأن نكون المنصة الأولى في الشرق الأوسط لتقديم خدمات السفر المتميزة":"We strive to be the premier platform in the Middle East for providing premium travel services."})]}),c.jsxs(g0,{children:[c.jsx(Y2,{}),c.jsx("h2",{children:a==="ar"?"مهمتنا":"Our Mission"}),c.jsx("p",{children:a==="ar"?"تقديم  حلول سفر مبتكرة وخدمات متميزة تلبي احتياجات عملائنا بأفضل الأسعار":"Providing innovative travel solutions and distinguished services that meet our customers needs at the best prices."})]})]}),c.jsxs(V5,{children:[c.jsx("h2",{children:a==="ar"?"قيمنا":"Our Values"}),c.jsxs(X5,{children:[c.jsxs(Ms,{children:[c.jsx(F2,{}),c.jsx("h3",{children:a==="ar"?"الجودة":"Quality"}),c.jsx("p",{children:a==="ar"?"نلتزم بتقديم خدمات عالية الجودة تلبي توقعات عملائنا":"We are committed to providing high-quality services that meet our customers expectations."})]}),c.jsxs(Ms,{children:[c.jsx("i",{className:"fas fa-handshake"}),c.jsx("h3",{children:a==="ar"?"الموثوقية":"Reliability"}),c.jsx("p",{children:a==="ar"?"نحرص على بناء علاقات قوية مع عملائنا وشركائنا":"We are keen to build strong relationships with our clients and partners."})]}),c.jsxs(Ms,{children:[c.jsx("i",{className:"fas fa-lightbulb"}),c.jsx("h3",{children:a==="ar"?"الابتكار":"Innovation"}),c.jsx("p",{children:a==="ar"?"نواكب أحدث التقنيات لتقديم تجربة سفر فريدة":"We keep pace with the latest technologies to provide a unique travel experience."})]}),c.jsxs(Ms,{children:[c.jsx("i",{className:"fas fa-users"}),c.jsx("h3",{children:a==="ar"?"العمل الجماعي":"Teamwork"}),c.jsx("p",{children:a==="ar"?"نؤمن بقوة العمل الجماعي في تحقيق أهدافنا":"We believe in the power of teamwork to achieve our goals."})]})]})]}),c.jsxs(Q5,{children:[c.jsx("h2",{children:a==="ar"?"فريقنا":"Our Team"}),c.jsxs(Z5,{children:[c.jsxs(kr,{children:[c.jsx(zr,{children:c.jsx("img",{src:_5,alt:"Hadir El-Sayeed"})}),c.jsxs("div",{class:"member-info",children:[c.jsxs("h3",{children:[" ",a==="ar"?"هدير السيد":"Hadeer El-Sayeed"," "]}),c.jsx("p",{children:"UI/UX Designer"})]})]}),c.jsxs(kr,{children:[c.jsx(zr,{children:c.jsx("img",{src:B5,alt:"Hagar Abd-Elmejeed"})}),c.jsxs("div",{class:"member-info",children:[c.jsxs("h3",{children:[" ",a==="ar"?"هاجر عبدالمجيد":"Hagar Abd-Elmejeed"," "]}),c.jsx("p",{children:"Frontend Developer"})]})]}),c.jsxs(kr,{children:[c.jsx(zr,{children:c.jsx("img",{src:L5,alt:"fatma radwan"})}),c.jsxs("div",{class:"member-info",children:[c.jsxs("h3",{children:[" ",a==="ar"?"فاطمة رضوان":"Fatma Radwan"," "]}),c.jsx("p",{children:"Frontend Developer"})]})]}),c.jsxs(kr,{children:[c.jsx(zr,{children:c.jsx("img",{src:H5,alt:"Kareem Fathy"})}),c.jsxs("div",{class:"member-info",children:[c.jsxs("h3",{children:[" ",a==="ar"?"كريم فتحي":"Kareem Fathy"," "]}),c.jsx("p",{children:"Backend Developer"})]})]}),c.jsxs(kr,{children:[c.jsx(zr,{children:c.jsx("img",{src:U5,alt:"Alaa Yasser"})}),c.jsxs("div",{class:"member-info",children:[c.jsxs("h3",{children:[" ",a==="ar"?"الاء ياسر":"Alaa Yasser"," "]}),c.jsx("p",{children:"Backend Developer"})]})]}),c.jsxs(kr,{children:[c.jsx(zr,{children:c.jsx("img",{src:"/src/images/team3.jpg",alt:"Team Member"})}),c.jsxs("div",{class:"member-info",children:[c.jsxs("h3",{children:[" ",a==="ar"?"يوسف علاء":"Yousef alaa"," "]}),c.jsx("p",{children:"Flutter Developer"})]})]})]})]})]})})]})},F5=qa`
  @media (max-width: 900px) {
    body {
      padding-top: 0 !important;
      padding-left: 0 !important;
    }
    .main-content {
      padding-top: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
`,J5=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,I5=j.div`
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--primary-color), #0066ff);
  color: white;
  padding: 3rem 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 35, 61, 0.2);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`,Ns=j.section`
  background: var(--white);
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,Bs=j.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--primary-color);

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding-bottom: 0.8rem;
  }

  .icon {
    font-size: 2rem;
    color: var(--primary-color);
    margin-left: 1rem;
    background: linear-gradient(135deg, var(--primary-color), #0066ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-left: 0.8rem;
    }
  }

  h2 {
    color: var(--primary-color);
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }
`,_s=j.div`
  h3 {
    color: #333;
    margin: 1.5rem 0 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin: 1.2rem 0 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
      margin: 1rem 0 0.6rem;
    }

    .sub-icon {
      font-size: 1.2rem;
      color: var(--primary-color);
      margin-left: 0.5rem;

      @media (max-width: 768px) {
        font-size: 1rem;
        margin-left: 0.4rem;
      }
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
  }

  li {
    position: relative;
    padding: 0.8rem 0 0.8rem 2rem;
    color: #555;
    line-height: 1.6;
    font-size: 1rem;
    border-bottom: 1px solid #f0f0f0;
    padding-right: 2rem;

    &:last-child {
      border-bottom: none;
    }

    @media (max-width: 768px) {
      font-size: 0.95rem;
      padding: 0.6rem 0 0.6rem 1.5rem;
      line-height: 1.5;
      padding-right: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 0.5rem 0 0.5rem 1.2rem;
      line-height: 1.4;
      padding-right: 1.2rem;
    }

    &:before {
      content: "✓";
      color: #28a745;
      position: absolute;
      right: 0.5rem;
      font-weight: bold;
      font-size: 1.1rem;

      @media (max-width: 768px) {
        font-size: 1rem;
        right: 0.4rem;
      }

      @media (max-width: 480px) {
        font-size: 0.9rem;
        right: 0.3rem;
      }
    }
  }

  p {
    color: #555;
    line-height: 1.6;
    margin: 1rem 0;
    font-size: 1rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    border-right: 4px solid var(--primary-color);

    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0.8rem 0;
      padding: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      line-height: 1.4;
      margin: 0.6rem 0;
      padding: 0.6rem;
    }
  }
`,W5=j.div`
  background: linear-gradient(135deg, #fff3cd, #ffeaa7);
  border: 1px solid #ffc107;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1.5rem 0;
  }

  h4 {
    color: #856404;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    color: #856404;
    margin: 0;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
`,e6=()=>{const{language:a}=pa();return c.jsxs(c.Fragment,{children:[c.jsx(F5,{}),c.jsxs(J5,{children:[c.jsxs(I5,{children:[c.jsx("h1",{children:a==="ar"?"سياسة الإلغاء":"Cancellation Policy"}),c.jsx("p",{children:a==="ar"?"نفهم أن الخطط قد تتغير. تعرف على سياسات الإلغاء الخاصة بنا لجميع خدمات السفر":"We understand that plans can change. Learn about our cancellation policies for all travel services"})]}),c.jsxs(Ns,{children:[c.jsxs(Bs,{children:[c.jsx("i",{className:"fas fa-plane icon"}),c.jsx("h2",{children:a==="ar"?"1. رحلات الطيران":"1. Flight Bookings"})]}),c.jsxs(_s,{children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-ticket-alt sub-icon"}),a==="ar"?"التذاكر القابلة للإلغاء":"Cancellable Tickets"]}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"يمكن إلغاء الحجز قبل 24 ساعة من موعد الرحلة":"Reservations can be cancelled 24 hours before the flight time"}),c.jsx("li",{children:a==="ar"?"يتم خصم رسوم إدارية بنسبة 10% من قيمة التذكرة":"An administrative fee of 10% will be deducted from the ticket value"}),c.jsx("li",{children:a==="ar"?"يتم استرداد المبلغ المتبقي خلال 5-7 أيام عمل":"The remaining amount will be refunded within 5-7 business days"})]}),c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-ban sub-icon"}),a==="ar"?"التذاكر غير القابلة للإلغاء":"Non-Cancellable Tickets"]}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"لا يمكن إلغاء التذاكر الاقتصادية غير القابلة للإلغاء":"Economy non-cancellable tickets cannot be cancelled"}),c.jsx("li",{children:a==="ar"?"يمكن تغيير التاريخ مقابل رسوم إضافية":"Date changes are possible for an additional fee"})]})]})]}),c.jsxs(Ns,{children:[c.jsxs(Bs,{children:[c.jsx("i",{className:"fas fa-hotel icon"}),c.jsx("h2",{children:a==="ar"?"2. حجوزات الفنادق":"2. Hotel Bookings"})]}),c.jsxs(_s,{children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-check-circle sub-icon"}),a==="ar"?"الحجوزات القابلة للإلغاء":"Cancellable Bookings"]}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"يمكن إلغاء الحجز قبل 48 ساعة من موعد الوصول":"Reservations can be cancelled 48 hours before check-in"}),c.jsx("li",{children:a==="ar"?"لا يتم خصم أي رسوم إضافية":"No additional fees will be charged"}),c.jsx("li",{children:a==="ar"?"يتم استرداد المبلغ كاملاً خلال 3-5 أيام عمل":"Full refund will be processed within 3-5 business days"})]}),c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-exclamation-triangle sub-icon"}),a==="ar"?"الحجوزات المتأخرة":"Late Cancellations"]}),c.jsx("ul",{children:c.jsx("li",{children:a==="ar"?"الإلغاء خلال 24 ساعة من الوصول: خصم ليلة واحدة":"Cancellation within 24 hours of check-in: One night charge"})})]})]}),c.jsxs(Ns,{children:[c.jsxs(Bs,{children:[c.jsx("i",{className:"fas fa-car icon"}),c.jsx("h2",{children:a==="ar"?"3. حجوزات السيارات":"3. Car Rentals"})]}),c.jsxs(_s,{children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-key sub-icon"}),a==="ar"?"الحجوزات القابلة للإلغاء":"Cancellable Bookings"]}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"يمكن إلغاء الحجز قبل 24 ساعة من موعد الاستلام":"Reservations can be cancelled 24 hours before pickup time"}),c.jsx("li",{children:a==="ar"?"يتم خصم رسوم إدارية بنسبة 5% من قيمة الحجز":"An administrative fee of 5% will be deducted from the booking value"}),c.jsx("li",{children:a==="ar"?"يتم استرداد المبلغ المتبقي خلال 3-5 أيام عمل":"The remaining amount will be refunded within 3-5 business days"})]})]})]}),c.jsxs(Ns,{children:[c.jsxs(Bs,{children:[c.jsx("i",{className:"fas fa-exclamation-circle icon"}),c.jsx("h2",{children:a==="ar"?"4. حالات خاصة":"4. Special Cases"})]}),c.jsxs(_s,{children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-shield-alt sub-icon"}),a==="ar"?"الإلغاء بسبب ظروف قاهرة":"Cancellation Due to Force Majeure"]}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"في حالة الكوارث الطبيعية أو الأوبئة":"In case of natural disasters or pandemics"}),c.jsx("li",{children:a==="ar"?"في حالة إغلاق المطارات أو الفنادق":"In case of airport or hotel closures"}),c.jsx("li",{children:a==="ar"?"في حالة القيود الحكومية المفروضة على السفر":"In case of government-imposed travel restrictions"})]}),c.jsx("p",{children:a==="ar"?"في هذه الحالات، يتم استرداد المبلغ كاملاً أو إعادة جدولة الحجز دون أي رسوم إضافية.":"In these cases, a full refund will be provided or the booking will be rescheduled without any additional fees."})]})]}),c.jsxs(W5,{children:[c.jsxs("h4",{children:[c.jsx("i",{className:"fas fa-info-circle",style:{marginLeft:"0.5rem"}}),a==="ar"?"ملاحظة مهمة":"Important Note"]}),c.jsx("p",{children:a==="ar"?"جميع طلبات الإلغاء يجب أن تتم من خلال موقعنا الإلكتروني أو تطبيقنا أ, التواصل معنا عبر الإيميل":"All cancellation requests must be made through our website, mobile app, or by contacting us via email"})]})]})]})},t6=qa`
  @media (max-width: 900px) {
    body {
      padding-top: 0 !important;
      padding-left: 0 !important;
    }
    .main-content {
      padding-top: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
`,a6=j.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    background: var(--white);
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        margin: 1rem;
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        margin: 0.5rem;
        padding: 1rem;
    }
`,n6=j.div`
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #f0f0f0;

    h1 {
        color: var(--primary-color);
        font-size: 2.5rem;
        margin-bottom: 1rem;
        font-weight: bold;

        @media (max-width: 768px) {
            font-size: 2rem;
        }

        @media (max-width: 480px) {
            font-size: 1.8rem;
        }
    }

    p {
        color: #666;
        font-size: 1.1rem;
        max-width: 600px;
        margin: 0 auto;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
`,Rr=j.section`
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;

    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    h2 {
        color: var(--primary-color);
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        @media (max-width: 768px) {
            font-size: 1.3rem;
            margin-bottom: 1rem;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;
            margin-bottom: 0.8rem;
        }
    }

    p {
        color: #333;
        line-height: 1.7;
        margin-bottom: 1rem;
        font-size: 1rem;
        text-align: justify;

        @media (max-width: 768px) {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 0.8rem;
        }

        @media (max-width: 480px) {
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 0.6rem;
        }
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 1rem 0;
    }

    li {
        color: #333;
        margin-bottom: 0.8rem;
        padding-right: 1.5rem;
        position: relative;
        font-size: 1rem;
        line-height: 1.6;

        @media (max-width: 768px) {
            font-size: 0.95rem;
            margin-bottom: 0.6rem;
            padding-right: 1.2rem;
        }

        @media (max-width: 480px) {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
            padding-right: 1rem;
        }

        &:before {
            content: "•";
            color: var(--primary-color);
            position: absolute;
            right: 0;
            font-weight: bold;
            font-size: 1.2rem;
        }
    }
`,i6=j.div`
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 2rem 0;
    
    h3 {
        color: #856404;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        font-weight: 600;
    }
    
    p {
        color: #856404;
        margin: 0;
        font-size: 0.95rem;
    }
`;j.div`
    background: #f8f9fa;
    border-radius: 8px;
    padding: 1.5rem;
    margin-top: 2rem;
    text-align: center;
    
    h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    
    p {
        color: #666;
        margin: 0.5rem 0;
        font-size: 0.95rem;
    }
`;const r6=()=>{const{language:a}=pa();return c.jsxs(c.Fragment,{children:[c.jsx(t6,{}),c.jsxs(a6,{children:[c.jsxs(n6,{children:[c.jsxs("h1",{children:[c.jsx("i",{className:"fas fa-file-contract",style:{marginLeft:a==="ar"?"0.5rem":"0",marginRight:a==="ar"?"0":"0.5rem"}}),a==="ar"?"الشروط والأحكام":"Terms and Conditions"]}),c.jsx("p",{children:a==="ar"?"يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا":"Please read these terms and conditions carefully before using our services."})]}),c.jsxs(Rr,{children:[c.jsxs("h2",{children:[c.jsx("i",{className:"fas fa-info-circle"}),a==="ar"?"1. مقدمة":"1. Introduction"]}),c.jsx("p",{children:a==="ar"?"مرحباً بك في تيكيفاي، منصة حجز السفر الرائدة في الشرق الأوسط. باستخدامك لموقعنا الإلكتروني أو تطبيقنا، فإنك توافق على الالتزام بهذه الشروط والأحكام بالكامل.":"Welcome to Tickify, the leading travel booking platform in the Middle East. By using our website or application, you agree to fully comply with these terms and conditions."})]}),c.jsxs(Rr,{children:[c.jsxs("h2",{children:[c.jsx("i",{className:"fas fa-user-check"}),a==="ar"?"2. استخدام الموقع":"2. Use of Website"]}),c.jsx("p",{children:a==="ar"?"يجب استخدام موقعنا بشكل قانوني وأخلاقي. يحظر أي استخدام غير مصرح به أو ضار أو يسيء للآخرين.":"Our website must be used legally and ethically. Any unauthorized, harmful, or abusive use is prohibited."}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"يجب أن تكون عمرك 18 عاماً أو أكثر لاستخدام خدمات الحجز":"You must be 18 years or older to use booking services"}),c.jsx("li",{children:a==="ar"?"يجب تقديم معلومات دقيقة وصحيحة عند إنشاء الحساب":"You must provide accurate and correct information when creating an account"}),c.jsx("li",{children:a==="ar"?"يحظر استخدام الموقع لأي أغراض غير مشروعة":"Using the website for any illegal purposes is prohibited"})]})]}),c.jsxs(Rr,{children:[c.jsxs("h2",{children:[c.jsx("i",{className:"fas fa-credit-card"}),a==="ar"?"3. الحجوزات والمدفوعات":"3. Bookings and Payments"]}),c.jsx("p",{children:a==="ar"?"جميع الحجوزات تخضع لسياسة الإلغاء الخاصة بنا. يجب إتمام المدفوعات بالكامل قبل تأكيد الحجز.":"All bookings are subject to our cancellation policy. Payments must be completed in full before booking confirmation."}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"الأسعار المعروضة شاملة الضرائب والرسوم":"Displayed prices include taxes and fees"}),c.jsx("li",{children:a==="ar"?"يمكن إلغاء الحجز وفقاً لسياسة الإلغاء المطبقة":"Bookings can be cancelled according to the applicable cancellation policy"}),c.jsx("li",{children:a==="ar"?"نحن نستخدم أنظمة دفع آمنة ومشفرة":"We use secure and encrypted payment systems"})]})]}),c.jsxs(Rr,{children:[c.jsxs("h2",{children:[c.jsx("i",{className:"fas fa-shield-alt"}),a==="ar"?"4. الخصوصية والأمان":"4. Privacy and Security"]}),c.jsx("p",{children:a==="ar"?"نحن نحمي خصوصية مستخدمينا ونلتزم بحماية بياناتهم الشخصية وفقاً لأحدث معايير الأمان.":"We protect our users' privacy and are committed to protecting their personal data according to the latest security standards."}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"نحن لا نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك":"We do not share your personal information with third parties without your consent"}),c.jsx("li",{children:a==="ar"?"نستخدم تقنيات تشفير متقدمة لحماية بياناتك":"We use advanced encryption technologies to protect your data"})]})]}),c.jsxs(Rr,{children:[c.jsxs("h2",{children:[c.jsx("i",{className:"fas fa-exclamation-triangle"}),a==="ar"?"5. المسؤولية القانونية":"5. Legal Liability"]}),c.jsx("p",{children:a==="ar"?"لا نتحمل المسؤولية عن أي خسائر أو أضرار ناتجة عن استخدام موقعنا أو خدماتنا، إلا في حدود المسؤولية القانونية المطبقة.":"We are not liable for any losses or damages resulting from the use of our website or services, except within the limits of applicable legal liability."})]}),c.jsxs(Rr,{children:[c.jsxs("h2",{children:[c.jsx("i",{className:"fas fa-edit"}),a==="ar"?"6. التغييرات والتحديثات":"6. Changes and Updates"]}),c.jsx("p",{children:a==="ar"?"نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على الموقع.":"We reserve the right to modify these terms and conditions at any time. Users will be notified of any significant changes via email or website notification."})]}),c.jsxs(i6,{children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-exclamation-circle"}),a==="ar"?"ملاحظة مهمة":"Important Note"]}),c.jsx("p",{children:a==="ar"?"باستمرارك في استخدام موقعنا، فإنك تؤكد أنك قد قرأت وفهمت هذه الشروط والأحكام وتوافق على الالتزام بها.":"By continuing to use our website, you confirm that you have read and understood these terms and conditions and agree to comply with them."})]})]})]})},l6=j.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`,o6=j.section`
 background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url(${Hx});
  background-size: cover;
  background-position: center;
  color: #ffffff;
  text-align: center;
  padding: 100px 20px;
  border-radius: 15px;
  margin-bottom: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 60px 20px;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
    margin-bottom: 1.5rem;
  }
`,s6=j.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
  }
`,c6=j.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`,u6=j.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 1rem;
  }
`,Jd=j.button`
  padding: 1rem 2rem;
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    border-radius: 6px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  i {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  &.active {
    background: var(--white);
    color: var(--primary-color);
    border-color: var(--accent-color);
  }

  &.active:hover {
    background: var(--white);
    transform: scale(1.03);
  }
`,d6=j.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(17, 16, 16, 0.57);
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0 0.5rem;
    border-radius: 8px;
  }
`,f6=j.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`,Ls=j.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
      margin-bottom: 0.4rem;
    }
  }

  input,
  select {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;

    @media (max-width: 768px) {
      padding: 0.6rem;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 0.5rem;
      font-size: 0.85rem;
      border-radius: 6px;
    }

    &:focus {
      outline: none;
    }

    &.error {
      border-color: red;
    }
  }
`,m6=j.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: flex-end;
  grid-column: 1 / span 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    grid-column: 1;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`,h6=j.button`
  background: none;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  padding: 0 10px;
  align-self: center;
  transition: background 0.3s ease;
  flex-shrink: 0;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-radius: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    padding: 0 6px;
  }

  &:hover {
    background: #f5f5f5;
  }

  i {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-right: 22rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-right: 12rem;
    }
  }
`,p6=j.button`
  background: #1976d2;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  grid-column: 1 / span 2;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
    grid-column: 1;
  }

  &:hover {
    background: #ff8c00;
    transform: translateY(-2px);
  }
`,g6=j.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 2rem 0;
  }
`,Hs=j.div`
  text-align: center;
  padding: 2rem;
  background: var(--light-gray);
  border-radius: 10px;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  i {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }
  }

  h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }
  }

  p {
    color: #666;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
`,x6=j.section`
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`,v6=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`,Us=j.div`
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,$s=j.div`
  height: 200px;
  background-image: url(${a=>a.image});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 160px;
  }
`,qs=j.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .offer-price {
    color: #1976d2;
    font-weight: bold;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  p {
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`,b6=()=>{const{language:a}=pa(),[r,l]=x.useState("flights"),[s,d]=x.useState(!0),[f,g]=x.useState(""),[b,v]=x.useState(""),[p,y]=x.useState(""),[k,E]=x.useState(""),[D,z]=x.useState({}),N=()=>{const A=f;g(b),v(A)},B=()=>{const A={};return f.trim()||(A.origin=!0),b.trim()||(A.destination=!0),p||(A.departureDate=!0),k||(A.returnDate=!0),z(A),Object.keys(A).length===0},O=A=>{A.preventDefault(),B()&&console.log("Form is valid, proceeding with search")};return x.useEffect(()=>{setTimeout(()=>{d(!1)},2e3)},[]),s?c.jsx("div",{className:"loader-container",children:c.jsxs("div",{className:"loader",children:[c.jsx("div",{className:"loader-circle"}),c.jsx("div",{className:"loader-icon",children:c.jsx("i",{className:"fas fa-plane-departure"})})]})}):c.jsx(c.Fragment,{children:c.jsxs(l6,{children:[c.jsxs(o6,{children:[c.jsx(s6,{children:a==="ar"?"رحلتك تبدأ هنا":"Your journey Start Here"}),c.jsx(c6,{children:a==="ar"?"احجز رحلاتك وفنادقك وسياراتك بأفضل الأسعار":"Book your flights, hotels and cars at the best prices."}),c.jsxs(u6,{children:[c.jsxs(Jd,{className:r==="flights"?"active":"",onClick:()=>l("flights"),children:[c.jsx("i",{className:"fas fa-plane"}),a==="ar"?"رحلات طيران":"Flights"]}),c.jsxs(Jd,{className:r==="hotels"?"active":"",onClick:()=>l("hotels"),children:[c.jsx("i",{className:"fas fa-hotel"}),a==="ar"?"الفنادق":"Hotels"]}),c.jsxs(Jd,{className:r==="cars"?"active":"",onClick:()=>l("cars"),children:[c.jsx("i",{className:"fas fa-car"}),a==="ar"?"السيارات":"Cars"]})]}),c.jsx(d6,{children:c.jsxs(f6,{onSubmit:O,children:[c.jsxs(m6,{children:[c.jsxs(Ls,{children:[c.jsx("label",{htmlFor:"origin",children:a==="ar"?"من":"From"}),c.jsx("input",{type:"text",id:"origin",placeholder:a==="ar"?"مدينة المغادرة":"Departure city",value:f,onChange:A=>g(A.target.value),className:D.origin?"error":""})]}),c.jsx(h6,{type:"button",onClick:N,children:c.jsx("i",{className:"fas fa-exchange-alt"})}),c.jsxs(Ls,{children:[c.jsx("label",{htmlFor:"destination",children:a==="ar"?"إلى":"To"}),c.jsx("input",{type:"text",id:"destination",placeholder:a==="ar"?"مدينة الوصول":"Arrival city",value:b,onChange:A=>v(A.target.value),className:D.destination?"error":""})]})]}),c.jsxs(Ls,{children:[c.jsx("label",{htmlFor:"departure-date",children:a==="ar"?"تاريخ المغادرة":"Departure Date"}),c.jsx("input",{type:"date",id:"departure-date",value:p,onChange:A=>y(A.target.value),className:D.departureDate?"error":""})]}),c.jsxs(Ls,{children:[c.jsx("label",{htmlFor:"return-date",children:a==="ar"?"تاريخ العودة":"Return Date"}),c.jsx("input",{type:"date",id:"return-date",value:k,onChange:A=>E(A.target.value),className:D.returnDate?"error":""})]}),c.jsx(p6,{type:"submit",children:a==="ar"?"ابحث":"Search"})]})})]}),c.jsxs(g6,{children:[c.jsxs(Hs,{children:[c.jsx("i",{className:"fas fa-globe"}),c.jsx("h3",{children:a==="ar"?"وجهات متعددة":"Multiple parties"}),c.jsx("p",{children:a==="ar"?"اكتشف أكثر من 1000 وجهة حول العالم":"Discover over 1,000 destinations around the world"})]}),c.jsxs(Hs,{children:[c.jsx("i",{className:"fas fa-tag"}),c.jsx("h3",{children:a==="ar"?"أفضل الأسعار":"Best Prices"}),c.jsx("p",{children:a==="ar"?"نضمن لك أفضل الأسعار مع خيارات متعددة":"We guarantee the best prices with Multipl options"})]}),c.jsxs(Hs,{children:[c.jsx("i",{className:"fas fa-headset"}),c.jsx("h3",{children:a==="ar"?"دعم 24/7":"24/7 support"}),c.jsx("p",{children:a==="ar"?" فريق دعم متكامل لمساعدتك في أي وقت":"A full support team to help you at any time"})]}),c.jsxs(Hs,{children:[c.jsx("i",{className:"fas fa-lock"}),c.jsx("h3",{children:a==="ar"?"دفع آمن":"Secure payment"}),c.jsx("p",{children:a==="ar"?"نضمن لك أمان معاملاتك وحماية بياناتك":"We guarantee the security of your transactions and the protection of your data."})]})]}),c.jsxs(x6,{children:[c.jsx("h2",{children:a==="ar"?"أفضل العروض":"Best offers"}),c.jsxs(v6,{children:[c.jsxs(Us,{children:[c.jsx($s,{image:Nx}),c.jsxs(qs,{children:[c.jsx("h3",{children:a==="ar"?"عرض دبي المميز":"Dubai Special Offer"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 1999 ريال":"Starting from 1999 SAR"}),c.jsx("p",{children:a==="ar"?"3 ليالي في فندق 5 نجوم مع تذاكر الطيران":"3 nights in a 5-star hotel with flight tickets"})]})]}),c.jsxs(Us,{children:[c.jsx($s,{image:Bx}),c.jsxs(qs,{children:[c.jsx("h3",{children:a==="ar"?"رحلة إسطنبول":"Istanbul trip"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 2499 ريال":"Starting from 2499 SAR"}),c.jsx("p",{children:a==="ar"?"5 ليالي شاملة الفندق والطيران":"5 nights including hotel and flight"})]})]}),c.jsxs(Us,{children:[c.jsx($s,{image:_x}),c.jsxs(qs,{children:[c.jsx("h3",{children:a==="ar"?"جزر المالديف":"Maldives"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 4999 ريال":"Starting from 4999 riyals"}),c.jsx("p",{children:a==="ar"?"7 ليالي في منتجع فاخر مع الطيران":"7 nights in a luxury resort with flights"})]})]}),c.jsxs(Us,{children:[c.jsx($s,{image:Lx}),c.jsxs(qs,{children:[c.jsx("h3",{children:a==="ar"?"باريس _ فرنسا":"Paris, France"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 3999 ريال":"Starting from 3999 riyals"}),c.jsx("p",{children:a==="ar"?"4 ليالي في فندق 5 نجوم مع تذاكر الطيران":"4 nights in a 5-star hotel with flight tickets"})]})]})]})]})]})})},y6=qa`
  @media (max-width: 900px) {
    body {
      padding-top: 0 !important;
      padding-left: 0 !important;
    }
    .main-content {
      padding-top: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
`,w6=j.div`
    max-width: 1200px;
    margin: -0px auto;
    padding: 2rem;

    h1 {
    text-align: center;
    color: #00233D;
    margin-bottom: 3rem;
    font-size: 2.5rem;
}
`,Id=j.div`
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    h3 {
    color: #00233D;
    margin-bottom: 1rem;
    font-size: 1.4rem;
}

    p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
}

    ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 1rem 0;
}

    ul li {
    position: relative;
    padding: 0.5rem 0 0.5rem 1.5rem;
    color: #555;
    line-height: 1.6;
}

   &:before {
    content: "•";
    color: #1976d2;
    position: absolute;
    right: -10px;
    font-size: 1.2rem;
}

    a {
    color: #1976d2;
    text-decoration: none;
}

   &:hover {
    text-decoration: underline;
}
`,S6=j.section`
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h2 {
    color: #00233D;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    border-bottom: 2px solid #1976d2;
    padding-bottom: 0.5rem;
}
`,j6=j.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`,x0=j.div`
    text-align: center;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    svg{
    font-size: 2.5rem;
    color: #1976d2;
    margin-bottom: 1rem;
}

    h3 {
    color: #00233D;
    margin-bottom: 1rem;
    font-size: 1.4rem;
}

    p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 0.5rem;
}

    a {
    color: #1976d2;
    text-decoration: none;
}

    &:hover {
    text-decoration: underline;
}
`,E6=()=>{const{language:a}=pa();return c.jsxs(c.Fragment,{children:[c.jsx(y6,{}),c.jsxs(w6,{children:[c.jsx("h1",{children:a==="ar"?"كيف يمكننا مساعدتك؟":"How can we help you?"}),c.jsxs(Id,{children:[c.jsx("h3",{children:"كيف يمكنني حجز رحلة طيران؟"}),c.jsx("p",{children:"يمكنك حجز رحلة طيران بسهولة من خلال اتباع الخطوات التالية:"}),c.jsxs("ul",{children:[c.jsx("li",{children:"اختر وجهة سفرك وتاريخ الرحلة"}),c.jsx("li",{children:"حدد عدد المسافرين"}),c.jsx("li",{children:"اختر الرحلة المناسبة من النتائج"}),c.jsx("li",{children:"أدخل بيانات المسافرين"}),c.jsx("li",{children:"اختر طريقة الدفع المناسبة"})]})]}),c.jsxs(Id,{children:[c.jsx("h3",{children:"كيف يمكنني إلغاء حجز؟"}),c.jsx("p",{children:"يمكنك إلغاء حجزك من خلال:"}),c.jsxs("p",{children:["يرجى مراجعة ",c.jsx(ma,{to:"/cancellation",children:"سياسة الإلغاء"})," للاطلاع على الشروط والأحكام."]})]}),c.jsxs(Id,{children:[c.jsx("h3",{children:"كيف يمكنني تعديل حجز؟"}),c.jsx("p",{children:"يمكنك تعديل حجزك من خلال:"}),c.jsx("p",{children:"يمكنك تعديل تفاصيل حجزك مثل التاريخ أو الوجهة أو عدد المسافرين من خلال حسابك الشخصي. يرجى مراعاة أن بعض التعديلات قد تكون خاضعة لرسوم إضافية حسب سياسة التعديل الخاصة بالخدمة المقدمة."})]}),c.jsxs(S6,{children:[c.jsx("h2",{children:"طرق التواصل معنا"}),c.jsxs(j6,{children:[c.jsxs(x0,{children:[c.jsx(K2,{}),c.jsx("h3",{children:"اتصل بنا"}),c.jsx("p",{children:"123456789"}),c.jsx("p",{children:"متاح على مدار الساعة"})]}),c.jsxs(x0,{children:[c.jsx(V2,{}),c.jsx("h3",{children:"راسلنا عبر البريد الإلكتروني"}),c.jsx("p",{children:c.jsx("a",{href:"mailto:bessie.ferry32@ethereal.email",children:"bessie.ferry32@ethereal.email"})}),c.jsx("p",{children:"الرد خلال 24 ساعة"})]})]})]})]})]})},C6=({userData:a,loading:r,error:l})=>r?c.jsx("div",{children:"Loading user info..."}):l?c.jsx("div",{style:{color:"red"},children:l}):a?c.jsxs("div",{className:"user-info-card",children:[c.jsx("h2",{children:"Account Information"}),c.jsxs("div",{children:[c.jsx("b",{children:"Name:"})," ",a.firstName," ",a.lastName]}),c.jsxs("div",{children:[c.jsx("b",{children:"Email:"})," ",a.email]}),c.jsxs("div",{children:[c.jsx("b",{children:"Phone:"})," ",a.phone||"N/A"]})]}):c.jsx("div",{children:"No user data."}),A6=a=>c.jsxs("div",{className:"settings-section",children:[c.jsx("h2",{children:"Settings"}),c.jsxs("div",{className:"settings-cards-grid",children:[c.jsxs("div",{className:"settings-card",children:[c.jsxs("div",{className:"settings-card-header",children:[c.jsx(Q2,{className:"settings-icon"}),c.jsx("span",{children:"Reset Password"})]}),c.jsxs("div",{className:"settings-card-body",children:[c.jsx("input",{className:"settings-input",type:"password",placeholder:"Current Password"}),c.jsx("input",{className:"settings-input",type:"password",placeholder:"New Password"}),c.jsx("input",{className:"settings-input",type:"password",placeholder:"Confirm New Password"}),c.jsx("button",{className:"settings-btn",children:"Reset Password"})]})]}),c.jsxs("div",{className:"settings-card",children:[c.jsxs("div",{className:"settings-card-header",children:[c.jsx(G2,{className:"settings-icon"}),c.jsx("span",{children:"Forgot Email"})]}),c.jsxs("div",{className:"settings-card-body",children:[c.jsx("input",{className:"settings-input",type:"email",placeholder:"Enter your email"}),c.jsx("button",{className:"settings-btn",children:"Send Reset Link"})]})]}),c.jsxs("div",{className:"settings-card",children:[c.jsxs("div",{className:"settings-card-header",children:[c.jsx(Z2,{className:"settings-icon"}),c.jsx("span",{children:"Linked Accounts"})]}),c.jsxs("div",{className:"settings-card-body",children:[c.jsxs("div",{className:"linked-account-row",children:[c.jsx("img",{src:"/src/images/google.png",alt:"Google",className:"linked-icon"}),c.jsx("span",{children:"Google"}),c.jsx("button",{className:"settings-btn settings-btn-secondary",children:"Unlink"})]}),c.jsxs("div",{className:"linked-account-row",children:[c.jsx("img",{src:"/src/images/facebook.png",alt:"Facebook",className:"linked-icon"}),c.jsx("span",{children:"Facebook"}),c.jsx("button",{className:"settings-btn settings-btn-secondary",children:"Link"})]}),c.jsxs("div",{className:"linked-account-row",children:[c.jsx("img",{src:"/src/images/X.png",alt:"X",className:"linked-icon"}),c.jsx("span",{children:"X"}),c.jsx("button",{className:"settings-btn settings-btn-secondary",children:"Link"})]})]})]})]})]});/*!
* sweetalert2 v11.22.1
* Released under the MIT License.
*/function Yx(a,r,l){if(typeof a=="function"?a===r:a.has(r))return arguments.length<3?r:l;throw new TypeError("Private element is not present on this object")}function T6(a,r){if(r.has(a))throw new TypeError("Cannot initialize the same private elements twice on an object")}function v0(a,r){return a.get(Yx(a,r))}function k6(a,r,l){T6(a,r),r.set(a,l)}function z6(a,r,l){return a.set(Yx(a,r),l),l}const R6=100,fe={},O6=()=>{fe.previousActiveElement instanceof HTMLElement?(fe.previousActiveElement.focus(),fe.previousActiveElement=null):document.body&&document.body.focus()},D6=a=>new Promise(r=>{if(!a)return r();const l=window.scrollX,s=window.scrollY;fe.restoreFocusTimeout=setTimeout(()=>{O6(),r()},R6),window.scrollTo(l,s)}),Gx="swal2-",M6=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],Y=M6.reduce((a,r)=>(a[r]=Gx+r,a),{}),N6=["success","warning","info","question","error"],ic=N6.reduce((a,r)=>(a[r]=Gx+r,a),{}),Vx="SweetAlert2:",Bf=a=>a.charAt(0).toUpperCase()+a.slice(1),Zt=a=>{console.warn(`${Vx} ${typeof a=="object"?a.join(" "):a}`)},Li=a=>{console.error(`${Vx} ${a}`)},b0=[],B6=a=>{b0.includes(a)||(b0.push(a),Zt(a))},Xx=(a,r=null)=>{B6(`"${a}" is deprecated and will be removed in the next major release.${r?` Use "${r}" instead.`:""}`)},Sc=a=>typeof a=="function"?a():a,_f=a=>a&&typeof a.toPromise=="function",so=a=>_f(a)?a.toPromise():Promise.resolve(a),Lf=a=>a&&Promise.resolve(a)===a,Kt=()=>document.body.querySelector(`.${Y.container}`),co=a=>{const r=Kt();return r?r.querySelector(a):null},ga=a=>co(`.${a}`),Ne=()=>ga(Y.popup),Zr=()=>ga(Y.icon),_6=()=>ga(Y["icon-content"]),Qx=()=>ga(Y.title),Hf=()=>ga(Y["html-container"]),Zx=()=>ga(Y.image),Uf=()=>ga(Y["progress-steps"]),jc=()=>ga(Y["validation-message"]),nn=()=>co(`.${Y.actions} .${Y.confirm}`),Kr=()=>co(`.${Y.actions} .${Y.cancel}`),Hi=()=>co(`.${Y.actions} .${Y.deny}`),L6=()=>ga(Y["input-label"]),Pr=()=>co(`.${Y.loader}`),uo=()=>ga(Y.actions),Kx=()=>ga(Y.footer),Ec=()=>ga(Y["timer-progress-bar"]),$f=()=>ga(Y.close),H6=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,qf=()=>{const a=Ne();if(!a)return[];const r=a.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),l=Array.from(r).sort((f,g)=>{const b=parseInt(f.getAttribute("tabindex")||"0"),v=parseInt(g.getAttribute("tabindex")||"0");return b>v?1:b<v?-1:0}),s=a.querySelectorAll(H6),d=Array.from(s).filter(f=>f.getAttribute("tabindex")!=="-1");return[...new Set(l.concat(d))].filter(f=>ea(f))},Yf=()=>Rn(document.body,Y.shown)&&!Rn(document.body,Y["toast-shown"])&&!Rn(document.body,Y["no-backdrop"]),Cc=()=>{const a=Ne();return a?Rn(a,Y.toast):!1},U6=()=>{const a=Ne();return a?a.hasAttribute("data-loading"):!1},xa=(a,r)=>{if(a.textContent="",r){const s=new DOMParser().parseFromString(r,"text/html"),d=s.querySelector("head");d&&Array.from(d.childNodes).forEach(g=>{a.appendChild(g)});const f=s.querySelector("body");f&&Array.from(f.childNodes).forEach(g=>{g instanceof HTMLVideoElement||g instanceof HTMLAudioElement?a.appendChild(g.cloneNode(!0)):a.appendChild(g)})}},Rn=(a,r)=>{if(!r)return!1;const l=r.split(/\s+/);for(let s=0;s<l.length;s++)if(!a.classList.contains(l[s]))return!1;return!0},$6=(a,r)=>{Array.from(a.classList).forEach(l=>{!Object.values(Y).includes(l)&&!Object.values(ic).includes(l)&&!Object.values(r.showClass||{}).includes(l)&&a.classList.remove(l)})},ha=(a,r,l)=>{if($6(a,r),!r.customClass)return;const s=r.customClass[l];if(s){if(typeof s!="string"&&!s.forEach){Zt(`Invalid type of customClass.${l}! Expected string or iterable object, got "${typeof s}"`);return}Le(a,s)}},Ac=(a,r)=>{if(!r)return null;switch(r){case"select":case"textarea":case"file":return a.querySelector(`.${Y.popup} > .${Y[r]}`);case"checkbox":return a.querySelector(`.${Y.popup} > .${Y.checkbox} input`);case"radio":return a.querySelector(`.${Y.popup} > .${Y.radio} input:checked`)||a.querySelector(`.${Y.popup} > .${Y.radio} input:first-child`);case"range":return a.querySelector(`.${Y.popup} > .${Y.range} input`);default:return a.querySelector(`.${Y.popup} > .${Y.input}`)}},Px=a=>{if(a.focus(),a.type!=="file"){const r=a.value;a.value="",a.value=r}},Fx=(a,r,l)=>{!a||!r||(typeof r=="string"&&(r=r.split(/\s+/).filter(Boolean)),r.forEach(s=>{Array.isArray(a)?a.forEach(d=>{l?d.classList.add(s):d.classList.remove(s)}):l?a.classList.add(s):a.classList.remove(s)}))},Le=(a,r)=>{Fx(a,r,!0)},Oa=(a,r)=>{Fx(a,r,!1)},li=(a,r)=>{const l=Array.from(a.children);for(let s=0;s<l.length;s++){const d=l[s];if(d instanceof HTMLElement&&Rn(d,r))return d}},Di=(a,r,l)=>{l===`${parseInt(l)}`&&(l=parseInt(l)),l||parseInt(l)===0?a.style.setProperty(r,typeof l=="number"?`${l}px`:l):a.style.removeProperty(r)},zt=(a,r="flex")=>{a&&(a.style.display=r)},qt=a=>{a&&(a.style.display="none")},Gf=(a,r="block")=>{a&&new MutationObserver(()=>{fo(a,a.innerHTML,r)}).observe(a,{childList:!0,subtree:!0})},y0=(a,r,l,s)=>{const d=a.querySelector(r);d&&d.style.setProperty(l,s)},fo=(a,r,l="flex")=>{r?zt(a,l):qt(a)},ea=a=>!!(a&&(a.offsetWidth||a.offsetHeight||a.getClientRects().length)),q6=()=>!ea(nn())&&!ea(Hi())&&!ea(Kr()),bf=a=>a.scrollHeight>a.clientHeight,Y6=(a,r)=>{let l=a;for(;l&&l!==r;){if(bf(l))return!0;l=l.parentElement}return!1},Jx=a=>{const r=window.getComputedStyle(a),l=parseFloat(r.getPropertyValue("animation-duration")||"0"),s=parseFloat(r.getPropertyValue("transition-duration")||"0");return l>0||s>0},Vf=(a,r=!1)=>{const l=Ec();l&&ea(l)&&(r&&(l.style.transition="none",l.style.width="100%"),setTimeout(()=>{l.style.transition=`width ${a/1e3}s linear`,l.style.width="0%"},10))},G6=()=>{const a=Ec();if(!a)return;const r=parseInt(window.getComputedStyle(a).width);a.style.removeProperty("transition"),a.style.width="100%";const l=parseInt(window.getComputedStyle(a).width),s=r/l*100;a.style.width=`${s}%`},V6=()=>typeof window>"u"||typeof document>"u",X6=`
 <div aria-labelledby="${Y.title}" aria-describedby="${Y["html-container"]}" class="${Y.popup}" tabindex="-1">
   <button type="button" class="${Y.close}"></button>
   <ul class="${Y["progress-steps"]}"></ul>
   <div class="${Y.icon}"></div>
   <img class="${Y.image}" />
   <h2 class="${Y.title}" id="${Y.title}"></h2>
   <div class="${Y["html-container"]}" id="${Y["html-container"]}"></div>
   <input class="${Y.input}" id="${Y.input}" />
   <input type="file" class="${Y.file}" />
   <div class="${Y.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${Y.select}" id="${Y.select}"></select>
   <div class="${Y.radio}"></div>
   <label class="${Y.checkbox}">
     <input type="checkbox" id="${Y.checkbox}" />
     <span class="${Y.label}"></span>
   </label>
   <textarea class="${Y.textarea}" id="${Y.textarea}"></textarea>
   <div class="${Y["validation-message"]}" id="${Y["validation-message"]}"></div>
   <div class="${Y.actions}">
     <div class="${Y.loader}"></div>
     <button type="button" class="${Y.confirm}"></button>
     <button type="button" class="${Y.deny}"></button>
     <button type="button" class="${Y.cancel}"></button>
   </div>
   <div class="${Y.footer}"></div>
   <div class="${Y["timer-progress-bar-container"]}">
     <div class="${Y["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Q6=()=>{const a=Kt();return a?(a.remove(),Oa([document.documentElement,document.body],[Y["no-backdrop"],Y["toast-shown"],Y["has-column"]]),!0):!1},ki=()=>{fe.currentInstance.resetValidationMessage()},Z6=()=>{const a=Ne(),r=li(a,Y.input),l=li(a,Y.file),s=a.querySelector(`.${Y.range} input`),d=a.querySelector(`.${Y.range} output`),f=li(a,Y.select),g=a.querySelector(`.${Y.checkbox} input`),b=li(a,Y.textarea);r.oninput=ki,l.onchange=ki,f.onchange=ki,g.onchange=ki,b.oninput=ki,s.oninput=()=>{ki(),d.value=s.value},s.onchange=()=>{ki(),d.value=s.value}},K6=a=>typeof a=="string"?document.querySelector(a):a,P6=a=>{const r=Ne();r.setAttribute("role",a.toast?"alert":"dialog"),r.setAttribute("aria-live",a.toast?"polite":"assertive"),a.toast||r.setAttribute("aria-modal","true")},F6=a=>{window.getComputedStyle(a).direction==="rtl"&&Le(Kt(),Y.rtl)},J6=a=>{const r=Q6();if(V6()){Li("SweetAlert2 requires document to initialize");return}const l=document.createElement("div");l.className=Y.container,r&&Le(l,Y["no-transition"]),xa(l,X6),l.dataset.swal2Theme=a.theme;const s=K6(a.target);s.appendChild(l),a.topLayer&&(l.setAttribute("popover",""),l.showPopover()),P6(a),F6(s),Z6()},Xf=(a,r)=>{a instanceof HTMLElement?r.appendChild(a):typeof a=="object"?I6(a,r):a&&xa(r,a)},I6=(a,r)=>{a.jquery?W6(r,a):xa(r,a.toString())},W6=(a,r)=>{if(a.textContent="",0 in r)for(let l=0;l in r;l++)a.appendChild(r[l].cloneNode(!0));else a.appendChild(r.cloneNode(!0))},e3=(a,r)=>{const l=uo(),s=Pr();!l||!s||(!r.showConfirmButton&&!r.showDenyButton&&!r.showCancelButton?qt(l):zt(l),ha(l,r,"actions"),t3(l,s,r),xa(s,r.loaderHtml||""),ha(s,r,"loader"))};function t3(a,r,l){const s=nn(),d=Hi(),f=Kr();!s||!d||!f||(ef(s,"confirm",l),ef(d,"deny",l),ef(f,"cancel",l),a3(s,d,f,l),l.reverseButtons&&(l.toast?(a.insertBefore(f,s),a.insertBefore(d,s)):(a.insertBefore(f,r),a.insertBefore(d,r),a.insertBefore(s,r))))}function a3(a,r,l,s){if(!s.buttonsStyling){Oa([a,r,l],Y.styled);return}Le([a,r,l],Y.styled),s.confirmButtonColor&&a.style.setProperty("--swal2-confirm-button-background-color",s.confirmButtonColor),s.denyButtonColor&&r.style.setProperty("--swal2-deny-button-background-color",s.denyButtonColor),s.cancelButtonColor&&l.style.setProperty("--swal2-cancel-button-background-color",s.cancelButtonColor),Wd(a),Wd(r),Wd(l)}function Wd(a){const r=window.getComputedStyle(a);if(r.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const l=r.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");a.style.setProperty("--swal2-action-button-focus-box-shadow",r.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${l}`))}function ef(a,r,l){const s=Bf(r);fo(a,l[`show${s}Button`],"inline-block"),xa(a,l[`${r}ButtonText`]||""),a.setAttribute("aria-label",l[`${r}ButtonAriaLabel`]||""),a.className=Y[r],ha(a,l,`${r}Button`)}const n3=(a,r)=>{const l=$f();l&&(xa(l,r.closeButtonHtml||""),ha(l,r,"closeButton"),fo(l,r.showCloseButton),l.setAttribute("aria-label",r.closeButtonAriaLabel||""))},i3=(a,r)=>{const l=Kt();l&&(r3(l,r.backdrop),l3(l,r.position),o3(l,r.grow),ha(l,r,"container"))};function r3(a,r){typeof r=="string"?a.style.background=r:r||Le([document.documentElement,document.body],Y["no-backdrop"])}function l3(a,r){r&&(r in Y?Le(a,Y[r]):(Zt('The "position" parameter is not valid, defaulting to "center"'),Le(a,Y.center)))}function o3(a,r){r&&Le(a,Y[`grow-${r}`])}var Pe={innerParams:new WeakMap,domCache:new WeakMap};const s3=["input","file","range","select","radio","checkbox","textarea"],c3=(a,r)=>{const l=Ne();if(!l)return;const s=Pe.innerParams.get(a),d=!s||r.input!==s.input;s3.forEach(f=>{const g=li(l,Y[f]);g&&(f3(f,r.inputAttributes),g.className=Y[f],d&&qt(g))}),r.input&&(d&&u3(r),m3(r))},u3=a=>{if(!a.input)return;if(!dt[a.input]){Li(`Unexpected type of input! Expected ${Object.keys(dt).join(" | ")}, got "${a.input}"`);return}const r=Ix(a.input);if(!r)return;const l=dt[a.input](r,a);zt(r),a.inputAutoFocus&&setTimeout(()=>{Px(l)})},d3=a=>{for(let r=0;r<a.attributes.length;r++){const l=a.attributes[r].name;["id","type","value","style"].includes(l)||a.removeAttribute(l)}},f3=(a,r)=>{const l=Ne();if(!l)return;const s=Ac(l,a);if(s){d3(s);for(const d in r)s.setAttribute(d,r[d])}},m3=a=>{if(!a.input)return;const r=Ix(a.input);r&&ha(r,a,"input")},Qf=(a,r)=>{!a.placeholder&&r.inputPlaceholder&&(a.placeholder=r.inputPlaceholder)},mo=(a,r,l)=>{if(l.inputLabel){const s=document.createElement("label"),d=Y["input-label"];s.setAttribute("for",a.id),s.className=d,typeof l.customClass=="object"&&Le(s,l.customClass.inputLabel),s.innerText=l.inputLabel,r.insertAdjacentElement("beforebegin",s)}},Ix=a=>{const r=Ne();if(r)return li(r,Y[a]||Y.input)},rc=(a,r)=>{["string","number"].includes(typeof r)?a.value=`${r}`:Lf(r)||Zt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof r}"`)},dt={};dt.text=dt.email=dt.password=dt.number=dt.tel=dt.url=dt.search=dt.date=dt["datetime-local"]=dt.time=dt.week=dt.month=(a,r)=>(rc(a,r.inputValue),mo(a,a,r),Qf(a,r),a.type=r.input,a);dt.file=(a,r)=>(mo(a,a,r),Qf(a,r),a);dt.range=(a,r)=>{const l=a.querySelector("input"),s=a.querySelector("output");return rc(l,r.inputValue),l.type=r.input,rc(s,r.inputValue),mo(l,a,r),a};dt.select=(a,r)=>{if(a.textContent="",r.inputPlaceholder){const l=document.createElement("option");xa(l,r.inputPlaceholder),l.value="",l.disabled=!0,l.selected=!0,a.appendChild(l)}return mo(a,a,r),a};dt.radio=a=>(a.textContent="",a);dt.checkbox=(a,r)=>{const l=Ac(Ne(),"checkbox");l.value="1",l.checked=!!r.inputValue;const s=a.querySelector("span");return xa(s,r.inputPlaceholder||r.inputLabel),l};dt.textarea=(a,r)=>{rc(a,r.inputValue),Qf(a,r),mo(a,a,r);const l=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(Ne()).width),d=()=>{if(!document.body.contains(a))return;const f=a.offsetWidth+l(a);f>s?Ne().style.width=`${f}px`:Di(Ne(),"width",r.width)};new MutationObserver(d).observe(a,{attributes:!0,attributeFilter:["style"]})}}),a};const h3=(a,r)=>{const l=Hf();l&&(Gf(l),ha(l,r,"htmlContainer"),r.html?(Xf(r.html,l),zt(l,"block")):r.text?(l.textContent=r.text,zt(l,"block")):qt(l),c3(a,r))},p3=(a,r)=>{const l=Kx();l&&(Gf(l),fo(l,r.footer,"block"),r.footer&&Xf(r.footer,l),ha(l,r,"footer"))},g3=(a,r)=>{const l=Pe.innerParams.get(a),s=Zr();if(!s)return;if(l&&r.icon===l.icon){S0(s,r),w0(s,r);return}if(!r.icon&&!r.iconHtml){qt(s);return}if(r.icon&&Object.keys(ic).indexOf(r.icon)===-1){Li(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${r.icon}"`),qt(s);return}zt(s),S0(s,r),w0(s,r),Le(s,r.showClass&&r.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Wx)},w0=(a,r)=>{for(const[l,s]of Object.entries(ic))r.icon!==l&&Oa(a,s);Le(a,r.icon&&ic[r.icon]),b3(a,r),Wx(),ha(a,r,"icon")},Wx=()=>{const a=Ne();if(!a)return;const r=window.getComputedStyle(a).getPropertyValue("background-color"),l=a.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<l.length;s++)l[s].style.backgroundColor=r},x3=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,v3=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,S0=(a,r)=>{if(!r.icon&&!r.iconHtml)return;let l=a.innerHTML,s="";r.iconHtml?s=j0(r.iconHtml):r.icon==="success"?(s=x3,l=l.replace(/ style=".*?"/g,"")):r.icon==="error"?s=v3:r.icon&&(s=j0({question:"?",warning:"!",info:"i"}[r.icon])),l.trim()!==s.trim()&&xa(a,s)},b3=(a,r)=>{if(r.iconColor){a.style.color=r.iconColor,a.style.borderColor=r.iconColor;for(const l of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])y0(a,l,"background-color",r.iconColor);y0(a,".swal2-success-ring","border-color",r.iconColor)}},j0=a=>`<div class="${Y["icon-content"]}">${a}</div>`,y3=(a,r)=>{const l=Zx();if(l){if(!r.imageUrl){qt(l);return}zt(l,""),l.setAttribute("src",r.imageUrl),l.setAttribute("alt",r.imageAlt||""),Di(l,"width",r.imageWidth),Di(l,"height",r.imageHeight),l.className=Y.image,ha(l,r,"image")}};let Zf=!1,ev=0,tv=0,av=0,nv=0;const w3=a=>{a.addEventListener("mousedown",lc),document.body.addEventListener("mousemove",oc),a.addEventListener("mouseup",sc),a.addEventListener("touchstart",lc),document.body.addEventListener("touchmove",oc),a.addEventListener("touchend",sc)},S3=a=>{a.removeEventListener("mousedown",lc),document.body.removeEventListener("mousemove",oc),a.removeEventListener("mouseup",sc),a.removeEventListener("touchstart",lc),document.body.removeEventListener("touchmove",oc),a.removeEventListener("touchend",sc)},lc=a=>{const r=Ne();if(a.target===r||Zr().contains(a.target)){Zf=!0;const l=iv(a);ev=l.clientX,tv=l.clientY,av=parseInt(r.style.insetInlineStart)||0,nv=parseInt(r.style.insetBlockStart)||0,Le(r,"swal2-dragging")}},oc=a=>{const r=Ne();if(Zf){let{clientX:l,clientY:s}=iv(a);r.style.insetInlineStart=`${av+(l-ev)}px`,r.style.insetBlockStart=`${nv+(s-tv)}px`}},sc=()=>{const a=Ne();Zf=!1,Oa(a,"swal2-dragging")},iv=a=>{let r=0,l=0;return a.type.startsWith("mouse")?(r=a.clientX,l=a.clientY):a.type.startsWith("touch")&&(r=a.touches[0].clientX,l=a.touches[0].clientY),{clientX:r,clientY:l}},j3=(a,r)=>{const l=Kt(),s=Ne();if(!(!l||!s)){if(r.toast){Di(l,"width",r.width),s.style.width="100%";const d=Pr();d&&s.insertBefore(d,Zr())}else Di(s,"width",r.width);Di(s,"padding",r.padding),r.color&&(s.style.color=r.color),r.background&&(s.style.background=r.background),qt(jc()),E3(s,r),r.draggable&&!r.toast?(Le(s,Y.draggable),w3(s)):(Oa(s,Y.draggable),S3(s))}},E3=(a,r)=>{const l=r.showClass||{};a.className=`${Y.popup} ${ea(a)?l.popup:""}`,r.toast?(Le([document.documentElement,document.body],Y["toast-shown"]),Le(a,Y.toast)):Le(a,Y.modal),ha(a,r,"popup"),typeof r.customClass=="string"&&Le(a,r.customClass),r.icon&&Le(a,Y[`icon-${r.icon}`])},C3=(a,r)=>{const l=Uf();if(!l)return;const{progressSteps:s,currentProgressStep:d}=r;if(!s||s.length===0||d===void 0){qt(l);return}zt(l),l.textContent="",d>=s.length&&Zt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.forEach((f,g)=>{const b=A3(f);if(l.appendChild(b),g===d&&Le(b,Y["active-progress-step"]),g!==s.length-1){const v=T3(r);l.appendChild(v)}})},A3=a=>{const r=document.createElement("li");return Le(r,Y["progress-step"]),xa(r,a),r},T3=a=>{const r=document.createElement("li");return Le(r,Y["progress-step-line"]),a.progressStepsDistance&&Di(r,"width",a.progressStepsDistance),r},k3=(a,r)=>{const l=Qx();l&&(Gf(l),fo(l,r.title||r.titleText,"block"),r.title&&Xf(r.title,l),r.titleText&&(l.innerText=r.titleText),ha(l,r,"title"))},rv=(a,r)=>{j3(a,r),i3(a,r),C3(a,r),g3(a,r),y3(a,r),k3(a,r),n3(a,r),h3(a,r),e3(a,r),p3(a,r);const l=Ne();typeof r.didRender=="function"&&l&&r.didRender(l),fe.eventEmitter.emit("didRender",l)},z3=()=>ea(Ne()),lv=()=>{var a;return(a=nn())===null||a===void 0?void 0:a.click()},R3=()=>{var a;return(a=Hi())===null||a===void 0?void 0:a.click()},O3=()=>{var a;return(a=Kr())===null||a===void 0?void 0:a.click()},Fr=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ov=a=>{a.keydownTarget&&a.keydownHandlerAdded&&(a.keydownTarget.removeEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!1)},D3=(a,r,l)=>{ov(a),r.toast||(a.keydownHandler=s=>N3(r,s,l),a.keydownTarget=r.keydownListenerCapture?window:Ne(),a.keydownListenerCapture=r.keydownListenerCapture,a.keydownTarget.addEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!0)},yf=(a,r)=>{var l;const s=qf();if(s.length){a=a+r,a===-2&&(a=s.length-1),a===s.length?a=0:a===-1&&(a=s.length-1),s[a].focus();return}(l=Ne())===null||l===void 0||l.focus()},sv=["ArrowRight","ArrowDown"],M3=["ArrowLeft","ArrowUp"],N3=(a,r,l)=>{a&&(r.isComposing||r.keyCode===229||(a.stopKeydownPropagation&&r.stopPropagation(),r.key==="Enter"?B3(r,a):r.key==="Tab"?_3(r):[...sv,...M3].includes(r.key)?L3(r.key):r.key==="Escape"&&H3(r,a,l)))},B3=(a,r)=>{if(!Sc(r.allowEnterKey))return;const l=Ac(Ne(),r.input);if(a.target&&l&&a.target instanceof HTMLElement&&a.target.outerHTML===l.outerHTML){if(["textarea","file"].includes(r.input))return;lv(),a.preventDefault()}},_3=a=>{const r=a.target,l=qf();let s=-1;for(let d=0;d<l.length;d++)if(r===l[d]){s=d;break}a.shiftKey?yf(s,-1):yf(s,1),a.stopPropagation(),a.preventDefault()},L3=a=>{const r=uo(),l=nn(),s=Hi(),d=Kr();if(!r||!l||!s||!d)return;const f=[l,s,d];if(document.activeElement instanceof HTMLElement&&!f.includes(document.activeElement))return;const g=sv.includes(a)?"nextElementSibling":"previousElementSibling";let b=document.activeElement;if(b){for(let v=0;v<r.children.length;v++){if(b=b[g],!b)return;if(b instanceof HTMLButtonElement&&ea(b))break}b instanceof HTMLButtonElement&&b.focus()}},H3=(a,r,l)=>{a.preventDefault(),Sc(r.allowEscapeKey)&&l(Fr.esc)};var Yr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const U3=()=>{const a=Kt();Array.from(document.body.children).forEach(l=>{l.contains(a)||(l.hasAttribute("aria-hidden")&&l.setAttribute("data-previous-aria-hidden",l.getAttribute("aria-hidden")||""),l.setAttribute("aria-hidden","true"))})},cv=()=>{Array.from(document.body.children).forEach(r=>{r.hasAttribute("data-previous-aria-hidden")?(r.setAttribute("aria-hidden",r.getAttribute("data-previous-aria-hidden")||""),r.removeAttribute("data-previous-aria-hidden")):r.removeAttribute("aria-hidden")})},uv=typeof window<"u"&&!!window.GestureEvent,$3=()=>{if(uv&&!Rn(document.body,Y.iosfix)){const a=document.body.scrollTop;document.body.style.top=`${a*-1}px`,Le(document.body,Y.iosfix),q3()}},q3=()=>{const a=Kt();if(!a)return;let r;a.ontouchstart=l=>{r=Y3(l)},a.ontouchmove=l=>{r&&(l.preventDefault(),l.stopPropagation())}},Y3=a=>{const r=a.target,l=Kt(),s=Hf();return!l||!s||G3(a)||V3(a)?!1:r===l||!bf(l)&&r instanceof HTMLElement&&!Y6(r,s)&&r.tagName!=="INPUT"&&r.tagName!=="TEXTAREA"&&!(bf(s)&&s.contains(r))},G3=a=>a.touches&&a.touches.length&&a.touches[0].touchType==="stylus",V3=a=>a.touches&&a.touches.length>1,X3=()=>{if(Rn(document.body,Y.iosfix)){const a=parseInt(document.body.style.top,10);Oa(document.body,Y.iosfix),document.body.style.top="",document.body.scrollTop=a*-1}},Q3=()=>{const a=document.createElement("div");a.className=Y["scrollbar-measure"],document.body.appendChild(a);const r=a.getBoundingClientRect().width-a.clientWidth;return document.body.removeChild(a),r};let Nr=null;const Z3=a=>{Nr===null&&(document.body.scrollHeight>window.innerHeight||a==="scroll")&&(Nr=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Nr+Q3()}px`)},K3=()=>{Nr!==null&&(document.body.style.paddingRight=`${Nr}px`,Nr=null)};function dv(a,r,l,s){Cc()?E0(a,s):(D6(l).then(()=>E0(a,s)),ov(fe)),uv?(r.setAttribute("style","display:none !important"),r.removeAttribute("class"),r.innerHTML=""):r.remove(),Yf()&&(K3(),X3(),cv()),P3()}function P3(){Oa([document.documentElement,document.body],[Y.shown,Y["height-auto"],Y["no-backdrop"],Y["toast-shown"]])}function oi(a){a=J3(a);const r=Yr.swalPromiseResolve.get(this),l=F3(this);this.isAwaitingPromise?a.isDismissed||(ho(this),r(a)):l&&r(a)}const F3=a=>{const r=Ne();if(!r)return!1;const l=Pe.innerParams.get(a);if(!l||Rn(r,l.hideClass.popup))return!1;Oa(r,l.showClass.popup),Le(r,l.hideClass.popup);const s=Kt();return Oa(s,l.showClass.backdrop),Le(s,l.hideClass.backdrop),I3(a,r,l),!0};function fv(a){const r=Yr.swalPromiseReject.get(this);ho(this),r&&r(a)}const ho=a=>{a.isAwaitingPromise&&(delete a.isAwaitingPromise,Pe.innerParams.get(a)||a._destroy())},J3=a=>typeof a>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},a),I3=(a,r,l)=>{var s;const d=Kt(),f=Jx(r);typeof l.willClose=="function"&&l.willClose(r),(s=fe.eventEmitter)===null||s===void 0||s.emit("willClose",r),f?W3(a,r,d,l.returnFocus,l.didClose):dv(a,d,l.returnFocus,l.didClose)},W3=(a,r,l,s,d)=>{fe.swalCloseEventFinishedCallback=dv.bind(null,a,l,s,d);const f=function(g){if(g.target===r){var b;(b=fe.swalCloseEventFinishedCallback)===null||b===void 0||b.call(fe),delete fe.swalCloseEventFinishedCallback,r.removeEventListener("animationend",f),r.removeEventListener("transitionend",f)}};r.addEventListener("animationend",f),r.addEventListener("transitionend",f)},E0=(a,r)=>{setTimeout(()=>{var l;typeof r=="function"&&r.bind(a.params)(),(l=fe.eventEmitter)===null||l===void 0||l.emit("didClose"),a._destroy&&a._destroy()})},Gr=a=>{let r=Ne();if(r||new Qt,r=Ne(),!r)return;const l=Pr();Cc()?qt(Zr()):e4(r,a),zt(l),r.setAttribute("data-loading","true"),r.setAttribute("aria-busy","true"),r.focus()},e4=(a,r)=>{const l=uo(),s=Pr();!l||!s||(!r&&ea(nn())&&(r=nn()),zt(l),r&&(qt(r),s.setAttribute("data-button-to-replace",r.className),l.insertBefore(s,r)),Le([a,l],Y.loading))},t4=(a,r)=>{r.input==="select"||r.input==="radio"?l4(a,r):["text","email","number","tel","textarea"].some(l=>l===r.input)&&(_f(r.inputValue)||Lf(r.inputValue))&&(Gr(nn()),o4(a,r))},a4=(a,r)=>{const l=a.getInput();if(!l)return null;switch(r.input){case"checkbox":return n4(l);case"radio":return i4(l);case"file":return r4(l);default:return r.inputAutoTrim?l.value.trim():l.value}},n4=a=>a.checked?1:0,i4=a=>a.checked?a.value:null,r4=a=>a.files&&a.files.length?a.getAttribute("multiple")!==null?a.files:a.files[0]:null,l4=(a,r)=>{const l=Ne();if(!l)return;const s=d=>{r.input==="select"?s4(l,cc(d),r):r.input==="radio"&&c4(l,cc(d),r)};_f(r.inputOptions)||Lf(r.inputOptions)?(Gr(nn()),so(r.inputOptions).then(d=>{a.hideLoading(),s(d)})):typeof r.inputOptions=="object"?s(r.inputOptions):Li(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof r.inputOptions}`)},o4=(a,r)=>{const l=a.getInput();l&&(qt(l),so(r.inputValue).then(s=>{l.value=r.input==="number"?`${parseFloat(s)||0}`:`${s}`,zt(l),l.focus(),a.hideLoading()}).catch(s=>{Li(`Error in inputValue promise: ${s}`),l.value="",zt(l),l.focus(),a.hideLoading()}))};function s4(a,r,l){const s=li(a,Y.select);if(!s)return;const d=(f,g,b)=>{const v=document.createElement("option");v.value=b,xa(v,g),v.selected=mv(b,l.inputValue),f.appendChild(v)};r.forEach(f=>{const g=f[0],b=f[1];if(Array.isArray(b)){const v=document.createElement("optgroup");v.label=g,v.disabled=!1,s.appendChild(v),b.forEach(p=>d(v,p[1],p[0]))}else d(s,b,g)}),s.focus()}function c4(a,r,l){const s=li(a,Y.radio);if(!s)return;r.forEach(f=>{const g=f[0],b=f[1],v=document.createElement("input"),p=document.createElement("label");v.type="radio",v.name=Y.radio,v.value=g,mv(g,l.inputValue)&&(v.checked=!0);const y=document.createElement("span");xa(y,b),y.className=Y.label,p.appendChild(v),p.appendChild(y),s.appendChild(p)});const d=s.querySelectorAll("input");d.length&&d[0].focus()}const cc=a=>{const r=[];return a instanceof Map?a.forEach((l,s)=>{let d=l;typeof d=="object"&&(d=cc(d)),r.push([s,d])}):Object.keys(a).forEach(l=>{let s=a[l];typeof s=="object"&&(s=cc(s)),r.push([l,s])}),r},mv=(a,r)=>!!r&&r.toString()===a.toString(),u4=a=>{const r=Pe.innerParams.get(a);a.disableButtons(),r.input?hv(a,"confirm"):Pf(a,!0)},d4=a=>{const r=Pe.innerParams.get(a);a.disableButtons(),r.returnInputValueOnDeny?hv(a,"deny"):Kf(a,!1)},f4=(a,r)=>{a.disableButtons(),r(Fr.cancel)},hv=(a,r)=>{const l=Pe.innerParams.get(a);if(!l.input){Li(`The "input" parameter is needed to be set when using returnInputValueOn${Bf(r)}`);return}const s=a.getInput(),d=a4(a,l);l.inputValidator?m4(a,d,r):s&&!s.checkValidity()?(a.enableButtons(),a.showValidationMessage(l.validationMessage||s.validationMessage)):r==="deny"?Kf(a,d):Pf(a,d)},m4=(a,r,l)=>{const s=Pe.innerParams.get(a);a.disableInput(),Promise.resolve().then(()=>so(s.inputValidator(r,s.validationMessage))).then(f=>{a.enableButtons(),a.enableInput(),f?a.showValidationMessage(f):l==="deny"?Kf(a,r):Pf(a,r)})},Kf=(a,r)=>{const l=Pe.innerParams.get(a||void 0);l.showLoaderOnDeny&&Gr(Hi()),l.preDeny?(a.isAwaitingPromise=!0,Promise.resolve().then(()=>so(l.preDeny(r,l.validationMessage))).then(d=>{d===!1?(a.hideLoading(),ho(a)):a.close({isDenied:!0,value:typeof d>"u"?r:d})}).catch(d=>pv(a||void 0,d))):a.close({isDenied:!0,value:r})},C0=(a,r)=>{a.close({isConfirmed:!0,value:r})},pv=(a,r)=>{a.rejectPromise(r)},Pf=(a,r)=>{const l=Pe.innerParams.get(a||void 0);l.showLoaderOnConfirm&&Gr(),l.preConfirm?(a.resetValidationMessage(),a.isAwaitingPromise=!0,Promise.resolve().then(()=>so(l.preConfirm(r,l.validationMessage))).then(d=>{ea(jc())||d===!1?(a.hideLoading(),ho(a)):C0(a,typeof d>"u"?r:d)}).catch(d=>pv(a||void 0,d))):C0(a,r)};function uc(){const a=Pe.innerParams.get(this);if(!a)return;const r=Pe.domCache.get(this);qt(r.loader),Cc()?a.icon&&zt(Zr()):h4(r),Oa([r.popup,r.actions],Y.loading),r.popup.removeAttribute("aria-busy"),r.popup.removeAttribute("data-loading"),r.confirmButton.disabled=!1,r.denyButton.disabled=!1,r.cancelButton.disabled=!1}const h4=a=>{const r=a.popup.getElementsByClassName(a.loader.getAttribute("data-button-to-replace"));r.length?zt(r[0],"inline-block"):q6()&&qt(a.actions)};function gv(){const a=Pe.innerParams.get(this),r=Pe.domCache.get(this);return r?Ac(r.popup,a.input):null}function xv(a,r,l){const s=Pe.domCache.get(a);r.forEach(d=>{s[d].disabled=l})}function vv(a,r){const l=Ne();if(!(!l||!a))if(a.type==="radio"){const s=l.querySelectorAll(`[name="${Y.radio}"]`);for(let d=0;d<s.length;d++)s[d].disabled=r}else a.disabled=r}function bv(){xv(this,["confirmButton","denyButton","cancelButton"],!1)}function yv(){xv(this,["confirmButton","denyButton","cancelButton"],!0)}function wv(){vv(this.getInput(),!1)}function Sv(){vv(this.getInput(),!0)}function jv(a){const r=Pe.domCache.get(this),l=Pe.innerParams.get(this);xa(r.validationMessage,a),r.validationMessage.className=Y["validation-message"],l.customClass&&l.customClass.validationMessage&&Le(r.validationMessage,l.customClass.validationMessage),zt(r.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid","true"),s.setAttribute("aria-describedby",Y["validation-message"]),Px(s),Le(s,Y.inputerror))}function Ev(){const a=Pe.domCache.get(this);a.validationMessage&&qt(a.validationMessage);const r=this.getInput();r&&(r.removeAttribute("aria-invalid"),r.removeAttribute("aria-describedby"),Oa(r,Y.inputerror))}const Br={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},p4=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],g4={allowEnterKey:void 0},x4=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Cv=a=>Object.prototype.hasOwnProperty.call(Br,a),Av=a=>p4.indexOf(a)!==-1,Tv=a=>g4[a],v4=a=>{Cv(a)||Zt(`Unknown parameter "${a}"`)},b4=a=>{x4.includes(a)&&Zt(`The parameter "${a}" is incompatible with toasts`)},y4=a=>{const r=Tv(a);r&&Xx(a,r)},kv=a=>{a.backdrop===!1&&a.allowOutsideClick&&Zt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),a.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(a.theme)&&Zt(`Invalid theme "${a.theme}"`);for(const r in a)v4(r),a.toast&&b4(r),y4(r)};function zv(a){const r=Kt(),l=Ne(),s=Pe.innerParams.get(this);if(!l||Rn(l,s.hideClass.popup)){Zt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const d=w4(a),f=Object.assign({},s,d);kv(f),r.dataset.swal2Theme=f.theme,rv(this,f),Pe.innerParams.set(this,f),Object.defineProperties(this,{params:{value:Object.assign({},this.params,a),writable:!1,enumerable:!0}})}const w4=a=>{const r={};return Object.keys(a).forEach(l=>{Av(l)?r[l]=a[l]:Zt(`Invalid parameter to update: ${l}`)}),r};function Rv(){const a=Pe.domCache.get(this),r=Pe.innerParams.get(this);if(!r){Ov(this);return}a.popup&&fe.swalCloseEventFinishedCallback&&(fe.swalCloseEventFinishedCallback(),delete fe.swalCloseEventFinishedCallback),typeof r.didDestroy=="function"&&r.didDestroy(),fe.eventEmitter.emit("didDestroy"),S4(this)}const S4=a=>{Ov(a),delete a.params,delete fe.keydownHandler,delete fe.keydownTarget,delete fe.currentInstance},Ov=a=>{a.isAwaitingPromise?(tf(Pe,a),a.isAwaitingPromise=!0):(tf(Yr,a),tf(Pe,a),delete a.isAwaitingPromise,delete a.disableButtons,delete a.enableButtons,delete a.getInput,delete a.disableInput,delete a.enableInput,delete a.hideLoading,delete a.disableLoading,delete a.showValidationMessage,delete a.resetValidationMessage,delete a.close,delete a.closePopup,delete a.closeModal,delete a.closeToast,delete a.rejectPromise,delete a.update,delete a._destroy)},tf=(a,r)=>{for(const l in a)a[l].delete(r)};var j4=Object.freeze({__proto__:null,_destroy:Rv,close:oi,closeModal:oi,closePopup:oi,closeToast:oi,disableButtons:yv,disableInput:Sv,disableLoading:uc,enableButtons:bv,enableInput:wv,getInput:gv,handleAwaitingPromise:ho,hideLoading:uc,rejectPromise:fv,resetValidationMessage:Ev,showValidationMessage:jv,update:zv});const E4=(a,r,l)=>{a.toast?C4(a,r,l):(T4(r),k4(r),z4(a,r,l))},C4=(a,r,l)=>{r.popup.onclick=()=>{a&&(A4(a)||a.timer||a.input)||l(Fr.close)}},A4=a=>!!(a.showConfirmButton||a.showDenyButton||a.showCancelButton||a.showCloseButton);let dc=!1;const T4=a=>{a.popup.onmousedown=()=>{a.container.onmouseup=function(r){a.container.onmouseup=()=>{},r.target===a.container&&(dc=!0)}}},k4=a=>{a.container.onmousedown=r=>{r.target===a.container&&r.preventDefault(),a.popup.onmouseup=function(l){a.popup.onmouseup=()=>{},(l.target===a.popup||l.target instanceof HTMLElement&&a.popup.contains(l.target))&&(dc=!0)}}},z4=(a,r,l)=>{r.container.onclick=s=>{if(dc){dc=!1;return}s.target===r.container&&Sc(a.allowOutsideClick)&&l(Fr.backdrop)}},R4=a=>typeof a=="object"&&a.jquery,A0=a=>a instanceof Element||R4(a),O4=a=>{const r={};return typeof a[0]=="object"&&!A0(a[0])?Object.assign(r,a[0]):["title","html","icon"].forEach((l,s)=>{const d=a[s];typeof d=="string"||A0(d)?r[l]=d:d!==void 0&&Li(`Unexpected type of ${l}! Expected "string" or "Element", got ${typeof d}`)}),r};function D4(...a){return new this(...a)}function M4(a){class r extends this{_main(s,d){return super._main(s,Object.assign({},a,d))}}return r}const N4=()=>fe.timeout&&fe.timeout.getTimerLeft(),Dv=()=>{if(fe.timeout)return G6(),fe.timeout.stop()},Mv=()=>{if(fe.timeout){const a=fe.timeout.start();return Vf(a),a}},B4=()=>{const a=fe.timeout;return a&&(a.running?Dv():Mv())},_4=a=>{if(fe.timeout){const r=fe.timeout.increase(a);return Vf(r,!0),r}},L4=()=>!!(fe.timeout&&fe.timeout.isRunning());let T0=!1;const wf={};function H4(a="data-swal-template"){wf[a]=this,T0||(document.body.addEventListener("click",U4),T0=!0)}const U4=a=>{for(let r=a.target;r&&r!==document;r=r.parentNode)for(const l in wf){const s=r.getAttribute(l);if(s){wf[l].fire({template:s});return}}};class $4{constructor(){this.events={}}_getHandlersByEventName(r){return typeof this.events[r]>"u"&&(this.events[r]=[]),this.events[r]}on(r,l){const s=this._getHandlersByEventName(r);s.includes(l)||s.push(l)}once(r,l){const s=(...d)=>{this.removeListener(r,s),l.apply(this,d)};this.on(r,s)}emit(r,...l){this._getHandlersByEventName(r).forEach(s=>{try{s.apply(this,l)}catch(d){console.error(d)}})}removeListener(r,l){const s=this._getHandlersByEventName(r),d=s.indexOf(l);d>-1&&s.splice(d,1)}removeAllListeners(r){this.events[r]!==void 0&&(this.events[r].length=0)}reset(){this.events={}}}fe.eventEmitter=new $4;const q4=(a,r)=>{fe.eventEmitter.on(a,r)},Y4=(a,r)=>{fe.eventEmitter.once(a,r)},G4=(a,r)=>{if(!a){fe.eventEmitter.reset();return}r?fe.eventEmitter.removeListener(a,r):fe.eventEmitter.removeAllListeners(a)};var V4=Object.freeze({__proto__:null,argsToParams:O4,bindClickHandler:H4,clickCancel:O3,clickConfirm:lv,clickDeny:R3,enableLoading:Gr,fire:D4,getActions:uo,getCancelButton:Kr,getCloseButton:$f,getConfirmButton:nn,getContainer:Kt,getDenyButton:Hi,getFocusableElements:qf,getFooter:Kx,getHtmlContainer:Hf,getIcon:Zr,getIconContent:_6,getImage:Zx,getInputLabel:L6,getLoader:Pr,getPopup:Ne,getProgressSteps:Uf,getTimerLeft:N4,getTimerProgressBar:Ec,getTitle:Qx,getValidationMessage:jc,increaseTimer:_4,isDeprecatedParameter:Tv,isLoading:U6,isTimerRunning:L4,isUpdatableParameter:Av,isValidParameter:Cv,isVisible:z3,mixin:M4,off:G4,on:q4,once:Y4,resumeTimer:Mv,showLoading:Gr,stopTimer:Dv,toggleTimer:B4});class X4{constructor(r,l){this.callback=r,this.remaining=l,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(r){const l=this.running;return l&&this.stop(),this.remaining+=r,l&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Nv=["swal-title","swal-html","swal-footer"],Q4=a=>{const r=typeof a.template=="string"?document.querySelector(a.template):a.template;if(!r)return{};const l=r.content;return ej(l),Object.assign(Z4(l),K4(l),P4(l),F4(l),J4(l),I4(l),W4(l,Nv))},Z4=a=>{const r={};return Array.from(a.querySelectorAll("swal-param")).forEach(s=>{Ni(s,["name","value"]);const d=s.getAttribute("name"),f=s.getAttribute("value");!d||!f||(typeof Br[d]=="boolean"?r[d]=f!=="false":typeof Br[d]=="object"?r[d]=JSON.parse(f):r[d]=f)}),r},K4=a=>{const r={};return Array.from(a.querySelectorAll("swal-function-param")).forEach(s=>{const d=s.getAttribute("name"),f=s.getAttribute("value");!d||!f||(r[d]=new Function(`return ${f}`)())}),r},P4=a=>{const r={};return Array.from(a.querySelectorAll("swal-button")).forEach(s=>{Ni(s,["type","color","aria-label"]);const d=s.getAttribute("type");!d||!["confirm","cancel","deny"].includes(d)||(r[`${d}ButtonText`]=s.innerHTML,r[`show${Bf(d)}Button`]=!0,s.hasAttribute("color")&&(r[`${d}ButtonColor`]=s.getAttribute("color")),s.hasAttribute("aria-label")&&(r[`${d}ButtonAriaLabel`]=s.getAttribute("aria-label")))}),r},F4=a=>{const r={},l=a.querySelector("swal-image");return l&&(Ni(l,["src","width","height","alt"]),l.hasAttribute("src")&&(r.imageUrl=l.getAttribute("src")||void 0),l.hasAttribute("width")&&(r.imageWidth=l.getAttribute("width")||void 0),l.hasAttribute("height")&&(r.imageHeight=l.getAttribute("height")||void 0),l.hasAttribute("alt")&&(r.imageAlt=l.getAttribute("alt")||void 0)),r},J4=a=>{const r={},l=a.querySelector("swal-icon");return l&&(Ni(l,["type","color"]),l.hasAttribute("type")&&(r.icon=l.getAttribute("type")),l.hasAttribute("color")&&(r.iconColor=l.getAttribute("color")),r.iconHtml=l.innerHTML),r},I4=a=>{const r={},l=a.querySelector("swal-input");l&&(Ni(l,["type","label","placeholder","value"]),r.input=l.getAttribute("type")||"text",l.hasAttribute("label")&&(r.inputLabel=l.getAttribute("label")),l.hasAttribute("placeholder")&&(r.inputPlaceholder=l.getAttribute("placeholder")),l.hasAttribute("value")&&(r.inputValue=l.getAttribute("value")));const s=Array.from(a.querySelectorAll("swal-input-option"));return s.length&&(r.inputOptions={},s.forEach(d=>{Ni(d,["value"]);const f=d.getAttribute("value");if(!f)return;const g=d.innerHTML;r.inputOptions[f]=g})),r},W4=(a,r)=>{const l={};for(const s in r){const d=r[s],f=a.querySelector(d);f&&(Ni(f,[]),l[d.replace(/^swal-/,"")]=f.innerHTML.trim())}return l},ej=a=>{const r=Nv.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(a.children).forEach(l=>{const s=l.tagName.toLowerCase();r.includes(s)||Zt(`Unrecognized element <${s}>`)})},Ni=(a,r)=>{Array.from(a.attributes).forEach(l=>{r.indexOf(l.name)===-1&&Zt([`Unrecognized attribute "${l.name}" on <${a.tagName.toLowerCase()}>.`,`${r.length?`Allowed attributes are: ${r.join(", ")}`:"To set the value, use HTML within the element."}`])})},Bv=10,tj=a=>{const r=Kt(),l=Ne();typeof a.willOpen=="function"&&a.willOpen(l),fe.eventEmitter.emit("willOpen",l);const d=window.getComputedStyle(document.body).overflowY;ij(r,l,a),setTimeout(()=>{aj(r,l)},Bv),Yf()&&(nj(r,a.scrollbarPadding,d),U3()),!Cc()&&!fe.previousActiveElement&&(fe.previousActiveElement=document.activeElement),typeof a.didOpen=="function"&&setTimeout(()=>a.didOpen(l)),fe.eventEmitter.emit("didOpen",l),Oa(r,Y["no-transition"])},fc=a=>{const r=Ne();if(a.target!==r)return;const l=Kt();r.removeEventListener("animationend",fc),r.removeEventListener("transitionend",fc),l.style.overflowY="auto"},aj=(a,r)=>{Jx(r)?(a.style.overflowY="hidden",r.addEventListener("animationend",fc),r.addEventListener("transitionend",fc)):a.style.overflowY="auto"},nj=(a,r,l)=>{$3(),r&&l!=="hidden"&&Z3(l),setTimeout(()=>{a.scrollTop=0})},ij=(a,r,l)=>{Le(a,l.showClass.backdrop),l.animation?(r.style.setProperty("opacity","0","important"),zt(r,"grid"),setTimeout(()=>{Le(r,l.showClass.popup),r.style.removeProperty("opacity")},Bv)):zt(r,"grid"),Le([document.documentElement,document.body],Y.shown),l.heightAuto&&l.backdrop&&!l.toast&&Le([document.documentElement,document.body],Y["height-auto"])};var k0={email:(a,r)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(a)?Promise.resolve():Promise.resolve(r||"Invalid email address"),url:(a,r)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(a)?Promise.resolve():Promise.resolve(r||"Invalid URL")};function rj(a){a.inputValidator||(a.input==="email"&&(a.inputValidator=k0.email),a.input==="url"&&(a.inputValidator=k0.url))}function lj(a){(!a.target||typeof a.target=="string"&&!document.querySelector(a.target)||typeof a.target!="string"&&!a.target.appendChild)&&(Zt('Target parameter is not valid, defaulting to "body"'),a.target="body")}function oj(a){rj(a),a.showLoaderOnConfirm&&!a.preConfirm&&Zt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),lj(a),typeof a.title=="string"&&(a.title=a.title.split(`
`).join("<br />")),J6(a)}let en;var Ys=new WeakMap;class ft{constructor(...r){if(k6(this,Ys,void 0),typeof window>"u")return;en=this;const l=Object.freeze(this.constructor.argsToParams(r));this.params=l,this.isAwaitingPromise=!1,z6(Ys,this,this._main(en.params))}_main(r,l={}){if(kv(Object.assign({},l,r)),fe.currentInstance){const f=Yr.swalPromiseResolve.get(fe.currentInstance),{isAwaitingPromise:g}=fe.currentInstance;fe.currentInstance._destroy(),g||f({isDismissed:!0}),Yf()&&cv()}fe.currentInstance=en;const s=cj(r,l);oj(s),Object.freeze(s),fe.timeout&&(fe.timeout.stop(),delete fe.timeout),clearTimeout(fe.restoreFocusTimeout);const d=uj(en);return rv(en,s),Pe.innerParams.set(en,s),sj(en,d,s)}then(r){return v0(Ys,this).then(r)}finally(r){return v0(Ys,this).finally(r)}}const sj=(a,r,l)=>new Promise((s,d)=>{const f=g=>{a.close({isDismissed:!0,dismiss:g})};Yr.swalPromiseResolve.set(a,s),Yr.swalPromiseReject.set(a,d),r.confirmButton.onclick=()=>{u4(a)},r.denyButton.onclick=()=>{d4(a)},r.cancelButton.onclick=()=>{f4(a,f)},r.closeButton.onclick=()=>{f(Fr.close)},E4(l,r,f),D3(fe,l,f),t4(a,l),tj(l),dj(fe,l,f),fj(r,l),setTimeout(()=>{r.container.scrollTop=0})}),cj=(a,r)=>{const l=Q4(a),s=Object.assign({},Br,r,l,a);return s.showClass=Object.assign({},Br.showClass,s.showClass),s.hideClass=Object.assign({},Br.hideClass,s.hideClass),s.animation===!1&&(s.showClass={backdrop:"swal2-noanimation"},s.hideClass={}),s},uj=a=>{const r={popup:Ne(),container:Kt(),actions:uo(),confirmButton:nn(),denyButton:Hi(),cancelButton:Kr(),loader:Pr(),closeButton:$f(),validationMessage:jc(),progressSteps:Uf()};return Pe.domCache.set(a,r),r},dj=(a,r,l)=>{const s=Ec();qt(s),r.timer&&(a.timeout=new X4(()=>{l("timer"),delete a.timeout},r.timer),r.timerProgressBar&&(zt(s),ha(s,r,"timerProgressBar"),setTimeout(()=>{a.timeout&&a.timeout.running&&Vf(r.timer)})))},fj=(a,r)=>{if(!r.toast){if(!Sc(r.allowEnterKey)){Xx("allowEnterKey"),pj();return}mj(a)||hj(a,r)||yf(-1,1)}},mj=a=>{const r=Array.from(a.popup.querySelectorAll("[autofocus]"));for(const l of r)if(l instanceof HTMLElement&&ea(l))return l.focus(),!0;return!1},hj=(a,r)=>r.focusDeny&&ea(a.denyButton)?(a.denyButton.focus(),!0):r.focusCancel&&ea(a.cancelButton)?(a.cancelButton.focus(),!0):r.focusConfirm&&ea(a.confirmButton)?(a.confirmButton.focus(),!0):!1,pj=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const a=new Date,r=localStorage.getItem("swal-initiation");r?(a.getTime()-Date.parse(r))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const l=document.createElement("audio");l.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",l.loop=!0,document.body.appendChild(l),setTimeout(()=>{l.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${a}`)}ft.prototype.disableButtons=yv;ft.prototype.enableButtons=bv;ft.prototype.getInput=gv;ft.prototype.disableInput=Sv;ft.prototype.enableInput=wv;ft.prototype.hideLoading=uc;ft.prototype.disableLoading=uc;ft.prototype.showValidationMessage=jv;ft.prototype.resetValidationMessage=Ev;ft.prototype.close=oi;ft.prototype.closePopup=oi;ft.prototype.closeModal=oi;ft.prototype.closeToast=oi;ft.prototype.rejectPromise=fv;ft.prototype.update=zv;ft.prototype._destroy=Rv;Object.assign(ft,V4);Object.keys(j4).forEach(a=>{ft[a]=function(...r){return en&&en[a]?en[a](...r):null}});ft.DismissReason=Fr;ft.version="11.22.1";const Qt=ft;Qt.default=Qt;typeof document<"u"&&function(a,r){var l=a.createElement("style");if(a.getElementsByTagName("head")[0].appendChild(l),l.styleSheet)l.styleSheet.disabled||(l.styleSheet.cssText=r);else try{l.innerHTML=r}catch{l.innerText=r}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const Jl=["BMW","Toyota","Honda","Mercedes","Hyundai","Kia"],gj=()=>{const a=Bi(),[r,l]=x.useState({}),[s,d]=x.useState([]),[f,g]=x.useState(!0),[b,v]=x.useState(null),[p,y]=x.useState({}),[k,E]=x.useState({}),[D,z]=x.useState({}),[N,B]=x.useState({});x.useEffect(()=>{(async()=>{g(!0),v(null);try{const G=localStorage.getItem("token"),P=await fetch("https://tickifywebsite.runasp.net/me/my-reservations",{headers:{Authorization:G?`Bearer ${G}`:void 0}});if(!P.ok)throw new Error("فشل في جلب الرحلات");const ne=await P.json();d(Array.isArray(ne)?ne:[])}catch(G){v(G.message)}finally{g(!1)}})()},[]),x.useEffect(()=>{s&&s.length>0&&s.forEach(_=>{if(_.id!==void 0&&_.id!==null&&!p[_.id]){E(P=>({...P,[_.id]:!0}));const G=localStorage.getItem("token");fetch(`https://tickifywebsite.runasp.net/me/my-Hotel-reservations/${_.id}`,{headers:{Authorization:G?`Bearer ${G}`:void 0}}).then(P=>{if(!P.ok)throw new Error("فشل في جلب حجوزات الفنادق");return P.json()}).then(P=>{y(ne=>({...ne,[_.id]:P})),E(ne=>({...ne,[_.id]:!1}))}).catch(P=>{z(ne=>({...ne,[_.id]:P.message})),E(ne=>({...ne,[_.id]:!1}))})}})},[s]);const O=async(_,G)=>{var P;l(ne=>({...ne,[G]:{...ne[G],loading:!0}}));try{const ne=localStorage.getItem("token"),ee={type:((P=r[G])==null?void 0:P.type)||Jl[0],flightReservationId:_,hotelReservationId:G},le=await fetch("https://tickifywebsite.runasp.net/api/Car/Reserve",{method:"POST",headers:{"Content-Type":"application/json",Authorization:ne?`Bearer ${ne}`:void 0},body:JSON.stringify(ee)});if(!le.ok){const oe=await le.json();throw new Error(oe.description||"Failed to book car")}l(oe=>({...oe,[G]:{open:!1,type:Jl[0],loading:!1}})),await Qt.fire({icon:"success",title:"تم حجز السيارة بنجاح!",confirmButtonText:"حسناً"})}catch(ne){l(Z=>({...Z,[G]:{...Z[G],loading:!1}})),await Qt.fire({icon:"error",title:"فشل الحجز",text:ne.message,confirmButtonText:"حسناً"})}},A=_=>{B(G=>({...G,[_]:!G[_]}))},q=[],I=new Set;return s.forEach(_=>{const G=`${_.departureAirport}|${_.arrivalAirport}|${_.departureDate}|${_.arrivalDate}`;I.has(G)||(q.push(_),I.add(G))}),f?c.jsx("div",{className:"user-info-card",children:"Loading your reservations..."}):b?c.jsx("div",{className:"user-info-card",style:{color:"red"},children:b}):c.jsxs("div",{className:"trips-section",children:[c.jsx("h2",{children:"My Trips"}),q.length===0?c.jsx("div",{children:"No trips found."}):q.map(_=>{const G=p[_.id]||[],P=k[_.id],ne=D[_.id];return c.jsxs("div",{className:"trip-card",children:[c.jsx("div",{className:"trip-header",onClick:()=>A(_.id),style:{cursor:"pointer",userSelect:"none",transition:"background-color 0.3s ease"},children:c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsxs("div",{children:[c.jsx("b",{children:_.flight?`${_.flight.from} → ${_.flight.to}`:_.departureAirport+" → "+_.arrivalAirport}),c.jsx("br",{}),c.jsx("span",{style:{fontSize:"14px",color:"#666"},children:_.flight?`${new Date(_.flight.departureDate).toLocaleString()} - ${new Date(_.flight.arrivalDate).toLocaleString()}`:`${new Date(_.departureDate).toLocaleString()} - ${new Date(_.arrivalDate).toLocaleString()}`})]}),c.jsx("div",{style:{fontSize:"20px",transition:"transform 0.3s ease",margin:"0px 20px 20px 20px",transform:N[_.id]?"rotate(180deg)":"rotate(0deg)"},children:"▼"})]})}),c.jsx("div",{style:{maxHeight:N[_.id]?"1000px":"0",overflow:"hidden",transition:"max-height 0.5s ease-in-out",backgroundColor:"#f8f9fa",borderTop:N[_.id]?"1px solid #dee2e6":"none"},children:c.jsxs("div",{style:{padding:"16px"},children:[c.jsx("b",{style:{display:"block",marginBottom:"12px",color:"#495057"},children:"Hotels for this flight:"}),P?c.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#6c757d"},children:"Loading hotels..."}):ne?c.jsx("div",{style:{textAlign:"center",padding:"20px"},children:c.jsx("button",{className:"settings-btn",style:{marginTop:8},onClick:()=>{_.id?a("/hotels/results",{state:{reservationId:_.id}}):alert("No reservation ID found for this reservation.")},children:"احجز فندقك"})}):G.length===0?c.jsxs("div",{style:{textAlign:"center",padding:"20px"},children:[c.jsx("div",{style:{background:"#f8d7da",color:"#c82333",borderRadius:"6px",padding:"12px",marginBottom:"12px",fontWeight:500},children:'{"code": "NoReservations", "description": "No hotel reservations found for this flight reservation."}'}),c.jsx("button",{className:"settings-btn",style:{marginTop:8},onClick:()=>{_.id?a("/hotels/results",{state:{reservationId:_.id}}):alert("No reservation ID found for this reservation.")},children:"احجز فندق"})]}):c.jsx("div",{style:{display:"grid",gap:"12px"},children:G.map(Z=>{var ee,le,oe,be;return c.jsxs("div",{className:"hotel-card-in-trip",style:{backgroundColor:"white",padding:"16px",borderRadius:"8px",border:"1px solid #dee2e6",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[c.jsxs("div",{style:{marginBottom:"8px"},children:[c.jsx("b",{style:{color:"#495057"},children:"Hotel:"})," ",Z.hotelName]}),c.jsxs("div",{style:{marginBottom:"8px"},children:[c.jsx("b",{style:{color:"#495057"},children:"Address:"})," ",Z.hotelAddress]}),c.jsxs("div",{style:{marginBottom:"12px"},children:[c.jsx("b",{style:{color:"#495057"},children:"Room IDs:"})," ",Z.roomsId&&Z.roomsId.length>0?Z.roomsId.join(", "):"N/A"]}),Z.car?c.jsxs("div",{className:"car-card-in-trip",style:{backgroundColor:"#e8f5e8",padding:"8px",borderRadius:"4px",marginBottom:"12px"},children:[c.jsx("b",{children:"Car:"})," ",Z.car.type," from ",Z.car.from," ","to ",Z.car.to," ($",Z.car.price,")"]}):null,Z.car?c.jsx("div",{style:{marginTop:8,color:"#28a745",fontWeight:600,textAlign:"center"},children:"تم حجز السيارة لهذا الفندق"}):(ee=r[Z.id])!=null&&ee.open?c.jsxs("form",{onSubmit:async xe=>{xe.preventDefault(),await O(_.id,Z.id)},style:{display:"inline",marginTop:8},children:[c.jsx("select",{value:((le=r[Z.id])==null?void 0:le.type)||Jl[0],onChange:xe=>l(he=>({...he,[Z.id]:{...he[Z.id],type:xe.target.value}})),style:{padding:"8px",borderRadius:6,border:"1px solid #ccc",marginRight:8},children:Jl.map(xe=>c.jsx("option",{value:xe,children:xe},xe))}),c.jsx("button",{type:"submit",style:{padding:"8px 16px",borderRadius:6,border:"none",background:"#00233d",color:"#fff"},disabled:(oe=r[Z.id])==null?void 0:oe.loading,children:(be=r[Z.id])!=null&&be.loading?"...جاري الحجز":"احجز سيارة"})]}):c.jsx("div",{style:{textAlign:"center",marginTop:8},children:c.jsx("button",{className:"settings-btn",style:{marginTop:8,display:"block",margin:"8px auto 0"},onClick:()=>l(xe=>({...xe,[Z.id]:{open:!0,type:Jl[0],loading:!1}})),children:"احجز سيارة"})})]},Z.id)})})]})})]},`${_.departureAirport}|${_.arrivalAirport}|${_.departureDate}|${_.arrivalDate}`)})]})};qa`
  @media (max-width: 900px) {
    body {
      padding: 0 !important;
    }
  }
`;j.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 0 auto;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  background: #f5f6fa;
  min-height: 100vh;
  @media (max-width: 900px) {
    padding: 8px 2px;
    background: #fff;
  }
  @media (max-width: 600px) {
    padding: 2px 0;
  }
`;j.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 0 8px 0;
    gap: 8px;
    width: 100vw;
    border-radius: 0 0 10px 10px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }
  @media (max-width: 600px) {
    padding: 4px 0 4px 0;
    gap: 4px;
    margin-bottom: 6px;
    margin-right: 10px;
    width: 95vw;
    margin-top: 80px;
  }
`;j.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: #666;
  @media (max-width: 900px) {
    width: 90px;
    height: 90px;
    font-size: 36px;
  }
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
`;j.div`
  flex: 1;
`;j.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  @media (max-width: 900px) {
    font-size: 18px;
    margin-bottom: 4px;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 2px;
  }
`;j.div`
  color: #666;
  margin-bottom: 5px;
`;j.div`
  color: #666;
`;j.button`
  background: #00233d;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background: #003d6b;
  }
`;j.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;
  @media (max-width: 900px) {
    gap: 4px;
    margin-bottom: 8px;
  }
  @media (max-width: 600px) {
    gap: 2px;
    margin-bottom: 4px;
    grid-template-columns: repeat(3, 1fr);
  }
`;j.div`
  text-align: center;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
`;j.div`
  font-size: 24px;
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 5px;
`;j.div`
  color: #666;
  font-size: 0.9em;
`;j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;j.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 900px) {
    padding: 8px;
  }
  @media (max-width: 600px) {
    padding: 4px;
  }
`;j.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  & i {
    color: #1976d2;
  }
  @media (max-width: 900px) {
    font-size: 15px;
    margin-bottom: 8px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
    margin-bottom: 4px;
  }
`;j.div`
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  &:last-child {
    border-bottom: none;
  }
`;j.div`
  font-weight: bold;
  margin-bottom: 5px;
`;j.div`
  color: #666;
  font-size: 0.9em;
`;j.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 15px;
  font-size: 0.8em;
  margin-top: 5px;
  background: ${({status:a})=>a==="active"?"#e3f2fd":a==="completed"?"#e8f5e9":a==="cancelled"?"#ffebee":"#eee"};
  color: ${({status:a})=>a==="active"?"#1976d2":a==="completed"?"#2e7d32":a==="cancelled"?"#c62828":"#666"};
`;j.div`
  width: 100vw;
  max-width: 1200px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 900px) {
    left: 0;
    transform: none;
    width: 100vw;
    max-width: 100vw;
  }
`;j.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  min-width: 220px;
`;j.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;j.div`
  display: flex;
  gap: 8px;
`;j.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover {
    background: #003d6b;
  }
`;j.button`
  background: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
`;j.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;j.div`
  font-weight: bold;
  margin-bottom: 8px;
`;j.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;j.div`
  display: flex;
  gap: 8px;
`;j.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover {
    background: #003d6b;
  }
`;j.button`
  background: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
`;j.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  margin-right: 16px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;j.div`
  font-weight: bold;
  margin-bottom: 8px;
`;j.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
`;j.input`
  accent-color: #1976d2;
`;j.div`
  display: flex;
  gap: 8px;
`;j.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
  &:hover {
    background: #003d6b;
  }
`;j.button`
  background: #eee;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
`;j.div`
  color: #fff;
  background: #43a047;
  padding: 4px 16px;
  border-radius: 6px;
  font-size: 14px;
  margin-right: 12px;
  display: inline-block;
`;j.div`
  background: #f7f9fb;
  border-radius: 12px;
  padding: 24px 18px;
  margin-top: 32px;
`;j.div`
  font-weight: bold;
  font-size: 1.15em;
  color: #222;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
`;j.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  margin-bottom: 0;
`;j.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  padding: 18px 24px 14px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 140px;
  @media (max-width: 600px) {
    width: 150px;
    min-width: 90px;
    padding: 10px 8px 8px 8px;
  }
`;j.span`
  font-size: 1.08em;
  font-weight: 500;
  color: #222;
`;j.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 7px 28px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #1251a3;
  }
`;j.button`
  background: none;
  color: #1976d2;
  border: none;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  padding: 0 8px;
`;j.div`
  max-height: 220px;
  overflow-y: auto;
  padding-left: 2px;
  margin-bottom: 0.5rem;
`;const xj=()=>{const[a,r]=x.useState(!1),[l,s]=x.useState(""),[d,f]=x.useState(""),[g,b]=x.useState(""),[v,p]=x.useState(!1),[y,k]=x.useState(""),[E,D]=x.useState(""),[z,N]=x.useState(""),[B,O]=x.useState(""),[A,q]=x.useState(!1),[I,_]=x.useState(!0),[G,P]=x.useState(!1),[ne,Z]=x.useState(!0),[ee,le]=x.useState(!1),[oe,be]=x.useState(!1),[xe,he]=x.useState(!1),[U,J]=x.useState(!1),[re,ce]=x.useState(""),[w,T]=x.useState(""),[X,F]=x.useState(""),[te,ie]=x.useState(localStorage.getItem("avatar")||""),[ae,Se]=x.useState(null),[W,ye]=x.useState(null),[we,Ae]=x.useState(!0),[ve,tt]=x.useState(null),[mt,ta]=x.useState([]),[aa,Je]=x.useState(!0),[na,st]=x.useState(null),[Da,Pt]=x.useState([]),[Ya,wt]=x.useState(!0),[Yt,Gt]=x.useState(null),[Rt,Ie]=x.useState("user");x.useEffect(()=>{(async()=>{try{Ae(!0),tt(null);const Be=localStorage.getItem("token");if(!Be){tt("No authentication token found"),Ae(!1);return}const Oe=await fetch("https://tickifywebsite.runasp.net/me/info",{method:"GET",headers:{Authorization:`Bearer ${Be}`,"Content-Type":"application/json"}});if(!Oe.ok){Oe.status===401?(tt("Authentication failed. Please login again."),localStorage.removeItem("token"),localStorage.removeItem("isLoggedIn")):tt(`Failed to fetch user data: ${Oe.status}`),Ae(!1);return}const pt=await Oe.json();ye(pt),localStorage.setItem("firstName",pt.firstName||""),localStorage.setItem("lastName",pt.lastName||""),localStorage.setItem("email",pt.email||"")}catch(Be){console.error("Error fetching user data:",Be),tt("Failed to fetch user data. Please try again.")}finally{Ae(!1)}})()},[]),x.useEffect(()=>{(async()=>{try{Je(!0),st(null);const Be=localStorage.getItem("token");if(!Be){st("No authentication token found"),Je(!1);return}const Oe=await fetch("https://tickifywebsite.runasp.net/me/my-reservations",{method:"GET",headers:{Authorization:`Bearer ${Be}`,"Content-Type":"application/json"}});if(!Oe.ok){Oe.status===401?st("Authentication failed. Please login again."):st(`Failed to fetch reservations: ${Oe.status}`),Je(!1);return}const pt=await Oe.json();ta(Array.isArray(pt)?pt:[])}catch{st("Failed to fetch reservations. Please try again.")}finally{Je(!1)}})()},[]),x.useEffect(()=>{(async()=>{try{wt(!0),Gt(null);const Be=localStorage.getItem("token");if(!Be){Gt("No authentication token found"),wt(!1);return}const Oe=await fetch("https://tickifywebsite.runasp.net/me/my-Hotel-reservations",{method:"GET",headers:{Authorization:`Bearer ${Be}`,"Content-Type":"application/json"}});if(!Oe.ok){Oe.status===401?Gt("Authentication failed. Please login again."):Gt(`Failed to fetch hotel reservations: ${Oe.status}`),wt(!1);return}const pt=await Oe.json();Pt(Array.isArray(pt)?pt:[])}catch{Gt("Failed to fetch hotel reservations. Please try again.")}finally{wt(!1)}})()},[]);const ht=(W==null?void 0:W.firstName)||localStorage.getItem("firstName")||"",Ue=(W==null?void 0:W.lastName)||localStorage.getItem("lastName")||"",Ga=(W==null?void 0:W.email)||localStorage.getItem("email")||"",Ma=localStorage.getItem("phone")||"",Jr=ht&&Ue?`${ht} ${Ue}`:localStorage.getItem("fullName")||"اسم المستخدم",[Va,ui]=x.useState(!1),[Na,Xa]=x.useState(Jr),[on,po]=x.useState(Ga),[Ui,va]=x.useState(Ma),[$i,rt]=x.useState(""),[sn,Mn]=x.useState(!1),[qi,Yi]=x.useState(!1),[Gi,cn]=x.useState(!1),Vi=[{key:"user",label:"Account"},{key:"settings",label:"Settings"},{key:"trips",label:"Reservations"}];return c.jsxs("div",{className:"dashboard-layout",children:[c.jsx("div",{className:"dashboard-tabs",children:Vi.map(St=>c.jsx("button",{className:`dashboard-tab${Rt===St.key?" active":""}`,onClick:()=>Ie(St.key),children:St.label},St.key))}),c.jsxs("main",{className:"dashboard-main",children:[Rt==="user"&&c.jsx(C6,{userData:W,loading:we,error:ve}),Rt==="settings"&&c.jsx(A6,{}),Rt==="trips"&&c.jsx(gj,{trips:mt,loading:aa,error:na,hotelReservations:Da,hotelReservationsLoading:Ya,hotelReservationsError:Yt,setHotelReservations:Pt})]})]})},_v=x.createContext(),vj=()=>{const a=x.useContext(_v);if(!a)throw new Error("useBooking must be used within a BookingProvider");return a},bj=({children:a})=>{const[r,l]=x.useState(null),g={activeFlight:r,hasActiveFlight:!!r,addFlightBooking:b=>{l(b)},clearFlightBooking:()=>{l(null)}};return c.jsx(_v.Provider,{value:g,children:a})},yj=qa`
  @media (max-width: 768px) {
    body {
      padding: 0 !important;
    }
  }
`,z0=j.div`
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: -5rem !important;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  @media (max-width: 768px) {
    padding: 12px 2px;
    border-radius: 0;
    margin-top: 0 !important;
    box-shadow: none;
  }
`,af=j.h2`
  color: #00233d;
  margin-bottom: 18px;
  text-align: center;
`,wj=j.div`
  background: #f5f7fa;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 32px;
  font-size: 1.1rem;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 789px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 10px 4px;
    font-size: 1rem;
    margin-bottom: 18px;
  }
`,Sj=j.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,jj=j.div`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 18px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 12px 6px;
    gap: 10px;
  }
`,R0=j.button`
  background: #00233d;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 22px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #001a33;
  }
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 90px;
    font-size: 0.95rem;
    padding: 8px 0;
  }
`;j.div`
  display: flex;
  align-items: center;
  height: 12px;
  width: 100%;
`;j.div`
  width: 12px;
  height: 12px;
  background: #1976d2;
  border-radius: 50%;
  margin: 0;
`;j.div`
  height: 2px;
  background: #e0e0e0;
  flex: 1;
`;const O0=j.div`
  width: 260px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #eee;
  padding: 1.5rem 1.2rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  min-width: 200px;
  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 1.5rem;
  }
`,D0=j.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.08rem;
  color: #00233d;
  font-weight: bold;
  margin-bottom: 0.3rem;
  letter-spacing: 0.5px;
`,Gs=j.input`
  width: 90%;
  margin: 0.2rem 0 0.7rem 0;
  accent-color: #1976d2;
  height: 3px;
  border-radius: 2px;
  background: #e0e0e0;
  min-width: 60px;
`,M0=j.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  transition: background 0.2s;
  &:hover {
    background: #1251a3;
  }
  @media (max-width: 768px) {
    width: 90px;
    font-size: 0.95rem;
    padding: 10px 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`,Ej=j.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  gap: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.5rem;
  }
  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`,N0=[{value:"all",labelAr:"جميع النتائج",labelEn:"All Results"},{value:"cheapest",labelAr:"الأقل سعراً",labelEn:"Lowest Price"},{value:"expensive",labelAr:"الأكثر سعراً",labelEn:"Highest Price"},{value:"shortest_duration",labelAr:"أقصر مدة رحلة",labelEn:"Shortest Duration"},{value:"longest_duration",labelAr:"أطول مدة رحلة",labelEn:"Longest Duration"}];j.button`
  background: ${a=>a.disabled?"#ccc":"#28a745"};
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: ${a=>a.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  margin: 20px auto;
  display: block;
  font-weight: 600;
  opacity: ${a=>a.disabled?.6:1};

  &:hover {
    background: ${a=>a.disabled?"#ccc":"#218838"};
    transform: ${a=>a.disabled?"none":"translateY(-2px)"};
  }

  i {
    margin-left: 0.5rem;
  }
`;j.button`
  background: ${a=>a.disabled?"#ccc":"#28a745"};
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: ${a=>a.disabled?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  margin: 10px auto 0 auto;
  display: block;
  font-weight: 600;
  opacity: ${a=>a.disabled?.6:1};

  &:hover {
    background: ${a=>a.disabled?"#ccc":"#218838"};
    transform: ${a=>a.disabled?"none":"translateY(-2px)"};
  }

  i {
    margin-left: 0.5rem;
  }
`;j.div`
  background: ${a=>a.hasBooking?"linear-gradient(135deg, #4ecdc4, #44a08d)":"linear-gradient(135deg, #ff6b6b, #ee5a52)"};
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    opacity: 0.9;
    font-size: 0.95rem;
  }
`;const Cj=()=>{const{language:a}=pa(),{addFlightBooking:r}=vj(),l=$a(),s=Bi(),[d,f]=x.useState(!1),[g,b]=x.useState("all"),[v,p]=x.useState(!1),[y,k]=x.useState(!1),E=l.state||{},{origin:D,destination:z,departureDate:N,cabinClass:B,results:O,noFlights:A,minPrice:q,maxPrice:I,showAllFlights:_}=E,[G,P]=x.useState(q??0),[ne,Z]=x.useState(I??5e3),[ee,le]=x.useState(O||[]),oe=50,be=5e3;x.useEffect(()=>{const T=()=>k(window.innerWidth<=768);return T(),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]);const xe=T=>{if(!T)return 0;const X=T.match(/(\d+)h/),F=T.match(/(\d+)m/),te=X?parseInt(X[1]):0,ie=F?parseInt(F[1]):0;return te*60+ie},he=T=>!T.classes||T.classes.length===0?1/0:Math.min(...T.classes.map(X=>X.price)),U=(T,X)=>{if(!T||X==="all")return T;const F=[...T];switch(X){case"cheapest":return F.sort((te,ie)=>he(te)-he(ie));case"expensive":return F.sort((te,ie)=>he(ie)-he(te));case"shortest_duration":return F.sort((te,ie)=>{const ae=xe(te.durationFormatted),Se=xe(ie.durationFormatted);return ae-Se});case"longest_duration":return F.sort((te,ie)=>{const ae=xe(te.durationFormatted);return xe(ie.durationFormatted)-ae});case"early_departure":return F.sort((te,ie)=>new Date(te.departureDate)-new Date(ie.departureDate));case"late_departure":return F.sort((te,ie)=>new Date(ie.departureDate)-new Date(te.departureDate));default:return F}};x.useEffect(()=>{if(O){const T=U(O,g);le(T)}},[g,O]);const J=T=>{const X=Math.min(Number(T.target.value),ne-oe);P(X)},re=T=>{const X=Math.max(Number(T.target.value),G+oe);Z(X)},ce=()=>{if(!O)return;const T=O.filter(F=>Array.isArray(F.classes)&&F.classes.length>0?F.classes.some(te=>te.price>=G&&te.price<=ne):!1),X=U(T,g);le(X)},w=async(T,X)=>{if(!pf()){Qt.fire({icon:"warning",title:a==="ar"?"تسجيل الدخول مطلوب":"Login Required",text:a==="ar"?"يرجى تسجيل الدخول أولاً قبل الحجز.":"Please log in first before booking.",confirmButtonText:a==="ar"?"تسجيل الدخول":"Login"}).then(te=>{te.isConfirmed&&(window.location.href="/login")});return}if((await Qt.fire({icon:"question",title:a==="ar"?"تأكيد الحجز":"Confirm Reservation",text:a==="ar"?"هل أنت متأكد أنك تريد حجز هذه الرحلة؟":"Are you sure you want to book this flight?",showCancelButton:!0,confirmButtonText:a==="ar"?"نعم، احجز":"Yes, Book",cancelButtonText:a==="ar"?"إلغاء":"Cancel"})).isConfirmed){p(!0);try{const te=localStorage.getItem("token");if(!(await fetch(`https://tickifywebsite.runasp.net/api/${T}/${X}/FlightReservations/Reserve`,{method:"POST",headers:{"Content-Type":"application/json",...te?{Authorization:`Bearer ${te}`}:{}},body:JSON.stringify({flightId:T,classId:X})})).ok)throw new Error("Reservation failed");r({flightId:T,classId:X,from:D,to:z,departureDate:N,cabinClass:B}),await Qt.fire({icon:"success",title:a==="ar"?"تم الحجز بنجاح!":"Reservation successful!",text:a==="ar"?"يمكنك الآن حجز فندق في وجهتك!":"You can now book a hotel at your destination!",confirmButtonText:a==="ar"?"حسناً":"OK"})}catch{await Qt.fire({icon:"error",title:a==="ar"?"فشل الحجز!":"Reservation failed!",confirmButtonText:a==="ar"?"حسناً":"OK"})}finally{p(!1)}}};return O?A?c.jsxs(z0,{children:[c.jsx(af,{children:a==="ar"?"لا توجد رحلات متاحة":"No Flights Available"}),c.jsx("div",{style:{color:"#c62828",fontSize:"1.2rem",textAlign:"center",marginTop:24},children:a==="ar"?"لا توجد رحلات متاحة بناءً على معايير البحث التي أدخلتها.":"There are no flights available for your search criteria."})]}):c.jsxs(c.Fragment,{children:[c.jsx(yj,{}),c.jsxs(Ej,{children:[!y&&c.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:c.jsxs(O0,{children:[c.jsx("label",{style:{color:"#00233d",fontWeight:600,marginBottom:4,fontSize:"1.08rem",letterSpacing:"0.5px"},children:a==="ar"?"نطاق السعر":"Price Range"}),c.jsxs(D0,{children:[c.jsxs("span",{children:[a==="ar"?"الحد الأدنى":"Min",": ",G," $"]}),c.jsxs("span",{children:[a==="ar"?"الحد الأقصى":"Max",": ",ne," $"]})]}),c.jsxs("div",{style:{display:"flex",gap:10,width:"100%",alignItems:"center",justifyContent:"center",marginBottom:8},children:[c.jsx(Gs,{type:"range",min:0,max:be,value:G,onChange:J}),c.jsx(Gs,{type:"range",min:0,max:be,value:ne,onChange:re})]}),c.jsx("div",{style:{color:"#666",fontSize:"0.97rem",marginTop:2},children:a==="ar"?"يجب أن يكون الفرق بين الحدين الأدنى والأقصى 50 دولارًا على الأقل.":"The minimum gap between min and max is $50."}),c.jsx(M0,{onClick:ce,children:a==="ar"?"بحث":"Search"})]})}),c.jsxs("div",{style:{flex:1},children:[y&&c.jsxs(O0,{style:{margin:"0 0 16px 0",width:"100%"},children:[c.jsx("label",{style:{color:"#00233d",fontWeight:600,marginBottom:4,fontSize:"1.08rem",letterSpacing:"0.5px"},children:a==="ar"?"نطاق السعر":"Price Range"}),c.jsxs(D0,{children:[c.jsxs("span",{children:[a==="ar"?"الحد الأدنى":"Min",": ",G," $"]}),c.jsxs("span",{children:[a==="ar"?"الحد الأقصى":"Max",": ",ne," $"]})]}),c.jsxs("div",{style:{display:"flex",gap:10,width:"100%",alignItems:"center",justifyContent:"center",marginBottom:8},children:[c.jsx(Gs,{type:"range",min:0,max:be,value:G,onChange:J}),c.jsx(Gs,{type:"range",min:0,max:be,value:ne,onChange:re})]}),c.jsx("div",{style:{color:"#666",fontSize:"0.97rem",marginTop:2},children:a==="ar"?"يجب أن يكون الفرق بين الحدين الأدنى والأقصى 50 دولارًا على الأقل.":"The minimum gap between min and max is $50."}),c.jsx(M0,{onClick:ce,children:a==="ar"?"بحث":"Search"})]}),c.jsx(af,{children:_?a==="ar"?"عرض جميع الرحلات المتاحة في النظام":"Showing all available flights in the system":a==="ar"?"الرحلات المتاحة":"Flight Search Results"}),c.jsx("div",{style:{width:"auto",display:"flex",justifyContent:"flex-end",marginBottom:"8px"},children:c.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",gap:8},children:[c.jsxs("button",{onClick:()=>f(T=>!T),style:{background:"#fff",border:"1px solid #ccc",borderRadius:8,padding:"7px 18px",fontWeight:"bold",cursor:"pointer",minWidth:120,display:"flex",alignItems:"center",gap:8},children:[N0.find(T=>T.value===g)[a==="ar"?"labelAr":"labelEn"],c.jsx("span",{style:{fontSize:"1.2em"},children:d?"▲":"▼"})]}),d&&c.jsx("div",{style:{position:"absolute",top:"110%",left:0,right:0,background:"#fff",border:"1px solid #ccc",borderRadius:8,zIndex:10,boxShadow:"0 2px 8px #eee",minWidth:150},children:N0.map(T=>c.jsx("div",{onClick:()=>{b(T.value),f(!1)},style:{padding:"10px 16px",cursor:"pointer",fontWeight:g===T.value?"bold":"normal",background:g===T.value?"#f5f7fa":"#fff",textAlign:a==="ar"?"right":"left"},children:a==="ar"?T.labelAr:T.labelEn},T.value))})]})}),c.jsxs(wj,{children:[c.jsx("span",{style:{marginRight:16},children:_?a==="ar"?"عرض جميع الرحلات المتاحة في النظام":"Showing all available flights in the system":a==="ar"?`من ${D||"-"} إلى ${z||"-"} | مغادرة: ${N||"-"} | درجة المقعد: ${B||"-"}`:`From ${D||"-"} to ${z||"-"} | Departure: ${N||"-"} | Cabin: ${B||"-"}`}),c.jsx(R0,{onClick:()=>s("/"),children:_?a==="ar"?"بحث جديد":"New Search":a==="ar"?"تعديل البحث":"Edit Search"})]}),c.jsx(Sj,{children:ee.length===0?c.jsx("div",{children:a==="ar"?"لا توجد رحلات متاحة":"No flights available."}):ee.map(T=>c.jsxs(jj,{children:[c.jsxs("div",{style:{flex:1},children:[c.jsxs("div",{style:{fontWeight:"bold",color:"#1976d2",fontSize:"1.1em",marginBottom:"8px"},children:[T.departureAirportName," (",T.departureAirportCity,")",c.jsx("span",{style:{color:"#888",margin:"0 8px"},children:"→"}),T.arrivalAirportName," (",T.arrivalAirportCity,")"]}),c.jsxs("div",{style:{color:"#444",fontSize:"0.98em",marginBottom:"8px",display:"flex",flexWrap:"wrap",gap:"20px"},children:[c.jsxs("div",{children:[c.jsx("i",{className:"fas fa-calendar-alt"})," ",c.jsx("strong",{children:a==="ar"?"تاريخ المغادرة:":"Departure:"})," ",new Date(T.departureDate).toLocaleDateString()," ",new Date(T.departureDate).toLocaleTimeString()]}),c.jsxs("div",{children:[c.jsx("i",{className:"fas fa-calendar-check"})," ",c.jsx("strong",{children:a==="ar"?"تاريخ الوصول:":"Arrival:"})," ",new Date(T.arrivalDate).toLocaleDateString()," ",new Date(T.arrivalDate).toLocaleTimeString()]}),T.durationFormatted&&c.jsxs("div",{children:[c.jsx("i",{className:"fas fa-clock"})," ",c.jsx("strong",{children:a==="ar"?"مدة الرحلة:":"Duration:"})," ",T.durationFormatted]})]}),T.classes&&T.classes.length>0&&c.jsxs("div",{style:{background:"#f8f9fa",padding:"12px",borderRadius:"8px",marginTop:"8px"},children:[c.jsx("div",{style:{fontWeight:"bold",marginBottom:"8px",color:"#333"},children:a==="ar"?"فئات المقاعد المتاحة:":"Available Seat Classes:"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:T.classes.map(X=>c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"#fff",borderRadius:"6px",border:"1px solid #e0e0e0"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[c.jsxs("span",{style:{fontWeight:"bold",color:"#1976d2"},children:[c.jsx("i",{className:"fas fa-crown"})," ",X.className]}),c.jsxs("span",{style:{color:"#666"},children:[c.jsx("i",{className:"fas fa-money-bill-wave"})," ",X.price," $"]})]}),c.jsxs("div",{style:{color:"#666",fontSize:"0.9em"},children:[c.jsx("i",{className:"fas fa-chair"})," ",a==="ar"?"المقاعد:":"Seats:"," ",X.availableSeats," / ",X.capacity]})]},X.id))})]})]}),c.jsx(R0,{onClick:()=>{var X;return w(T.id,(X=T.classes[0])==null?void 0:X.id)},disabled:v,children:a==="ar"?"احجز الآن":"Book Now"})]},T.id))}),y&&c.jsx("div",{style:{marginTop:24}})]})]})]}):c.jsx(z0,{children:c.jsx(af,{children:a==="ar"?"لا توجد نتائج بحث":"No search results found."})})},Aj=j.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  margin-top: 0px;
  @media (max-width: 900px) {
    width: 80vw;
    max-width: 100vw;

    padding: 1rem 2px;
  }
  @media (max-width: 600px) {
    padding: 0.5rem 0;
    width: 70vw;
    max-width: 100vw;
  }
`,Tj=j.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
`,kj=j.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  width: 1250px;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    width: 1000px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 0.7rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 0.4rem;
  }
`,zj=j.div`
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  }
  @media (max-width: 600px) {
    border-radius: 6px;
    box-shadow: none;
  }
`;j.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  @media (max-width: 900px) {
    height: 120px;
  }
  @media (max-width: 600px) {
    height: 90px;
  }
`;const Rj=j.div`
  padding: 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    padding: 0.7rem;
  }
  @media (max-width: 600px) {
    padding: 0.4rem;
  }
`,Oj=j.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  @media (max-width: 900px) {
    font-size: 1.05rem;
  }
`,Dj=j.p`
  color: #888;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  @media (max-width: 900px) {
    font-size: 0.95rem;
  }
`,Mj=j.div`
  color: #f5b50a;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`,Nj=j.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`,Bj=j.button`
  background: #00233d;
  color: var(--white);
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  align-self: flex-end;
  &:hover {
    background: #0085d8;
  }
`,_j=qa`
  @media (max-width: 900px) {
    body {
    
      padding-top: 60px !important;
      padding-bottom:0px !important;
      padding-right:0px !important;
      padding-left:0px !important;

    }
  }
`,Lj=()=>{const{language:a}=pa(),r=$a(),[l,s]=x.useState(!1),[d,f]=x.useState(""),[g,b]=x.useState(""),[v,p]=x.useState(!1),[y,k]=x.useState(!1),[E,D]=x.useState({}),[z,N]=x.useState(!1),[B,O]=x.useState(!0),[A,q]=x.useState(null),[I,_]=x.useState([]),[G,P]=x.useState([]),[ne,Z]=x.useState(!1),[ee,le]=x.useState(null),[oe,be]=x.useState(null),[xe,he]=x.useState(""),[U,J]=x.useState(null),[re,ce]=x.useState(!1),w=new Date().toISOString().split("T")[0],T=[{id:0,type:"Single",price:100},{id:1,type:"Double",price:150},{id:2,type:"Twin",price:170},{id:3,type:"Suite",price:250},{id:4,type:"Deluxe",price:300},{id:5,type:"Family",price:350}],X=r.state&&r.state.reservationId,F=r.state&&r.state.destination?r.state.destination:"Egypt";x.useEffect(()=>{(async()=>{O(!0),q(null);try{const ye=localStorage.getItem("token");let we="";X?we=`https://tickifywebsite.runasp.net/api/Hotel/Search?FlightReservationId=${X}`:we=`https://tickifywebsite.runasp.net/api/Hotel/Search?Country=${encodeURIComponent(F)}`;const Ae=await fetch(we,{headers:{Authorization:ye?`Bearer ${ye}`:void 0}});if(!Ae.ok){let tt=a==="ar"?"فشل جلب بيانات الفنادق":"Failed to fetch hotels";try{const mt=await Ae.json();mt.code==="Empty Results."&&mt.description==="You Must Reserve a Flight To This Country First."?tt=a==="ar"?"يجب عليك حجز رحلة إلى هذا البلد أولاً قبل حجز فندق.":"You must reserve a flight to this country first before booking a hotel.":mt.description&&(tt=mt.description)}catch{}throw new Error(tt)}const ve=await Ae.json();_(Array.isArray(ve)?ve:[])}catch(ye){q(ye.message),_([])}finally{O(!1)}})()},[X,F,a]);const te=W=>{switch(W.toLowerCase()){case"single":return 0;case"double":return 1;case"twin":return 2;case"suite":return 3;case"deluxe":return 4;case"family":return 5;default:return""}},ie=W=>{be(W.id),s(!0),f(""),b(""),p(!1)},ae=()=>{s(!1),N(!1),k(!1),p(!1)};return c.jsxs(c.Fragment,{children:[c.jsx(_j,{}),c.jsx("style",{children:`
    .main-content.hotel-results-margin-fix {
      margin-top: 0px !important;
    }
  `}),c.jsxs(Aj,{as:"section",className:"hotel-results-margin-fix",children:[c.jsx(Tj,{children:a==="ar"?"الفنادق المتاحة ":"Hotel Results"}),B?c.jsx("div",{style:{textAlign:"center",fontSize:"1.2rem",margin:"2rem 0"},children:a==="ar"?"جاري تحميل الفنادق...":"Loading hotels..."}):A?c.jsxs("div",{style:{color:"#c62828",background:"#fff0f0",border:"1px solid #f8bdbd",borderRadius:8,padding:"1.2rem 1rem",textAlign:"center",fontSize:"1.1rem",margin:"2rem 0",maxWidth:500,marginLeft:"auto",marginRight:"auto",fontWeight:500},children:[c.jsx("i",{className:"fas fa-exclamation-triangle",style:{marginRight:8}}),A]}):I.length===0?c.jsx("div",{style:{textAlign:"center",fontSize:"1.1rem",margin:"2rem 0",color:"#888"},children:a==="ar"?"لا توجد فنادق متاحة في هذه الوجهة.":"No hotels available for this destination."}):c.jsx(kj,{children:I.map(W=>c.jsx(zj,{children:c.jsxs(Rj,{children:[c.jsx(Oj,{children:a==="ar"&&W.name_ar||W.name}),c.jsxs(Dj,{children:[c.jsx("i",{className:"fas fa-map-marker-alt",style:{color:"#0085d8",marginRight:a==="ar"?0:8,marginLeft:a==="ar"?8:0}}),a==="ar"&&W.location_ar||W.location]}),W.rating&&c.jsxs(Mj,{children:[c.jsx("i",{className:"fas fa-star"})," ",W.rating]}),W.price&&c.jsx(Nj,{children:a==="ar"?`ابتداءً من ${W.price}$ / ليلة`:`From $${W.price} / night`}),c.jsx(Bj,{onClick:()=>ie(W),children:a==="ar"?"احجز الآن":"Book Now"})]})},W.id||W.hotelId))}),l&&c.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.3)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:"32px 24px",minWidth:320,maxWidth:400,boxShadow:"0 4px 16px #0002",position:"relative"},children:[c.jsx("button",{onClick:ae,style:{position:"absolute",top:12,right:12,background:"none",border:"none",fontSize:22,cursor:"pointer",color:"#888"},children:"×"}),!v&&!y&&!z&&c.jsxs("form",{onSubmit:async W=>{if(W.preventDefault(),g<=d){D({checkOutDate:!0,checkInDate:!0,dateMsg:!0});return}D({}),Z(!0),le(null),P([]);const ye=te(xe);try{const we=localStorage.getItem("token"),Ae=`https://tickifywebsite.runasp.net/api/Hotels/${oe}/Rooms/select?checkInDate=${d}T22:06:15.774Z&checkOutDate=${g}T22:06:15.774Z&RoomType=${ye}&BedType&OpptionalBedType`,ve=await fetch(Ae,{headers:{Authorization:we?`Bearer ${we}`:void 0}});if(!ve.ok)throw new Error(a==="ar"?"فشل جلب الغرف المتاحة":"Failed to fetch available rooms");const tt=await ve.json();P(Array.isArray(tt)?tt:[])}catch(we){le(we.message)}finally{Z(!1),N(!0)}},style:{display:"flex",flexDirection:"column",gap:14,marginTop:8},children:[c.jsx("h3",{style:{textAlign:"center",marginBottom:8},children:a==="ar"?"بيانات الحجز":"Booking Details"}),c.jsxs("select",{value:xe,onChange:W=>he(W.target.value),style:{padding:"8px",borderRadius:6,border:"1px solid #ccc",marginBottom:8},required:!0,children:[c.jsx("option",{value:"",disabled:!0,children:a==="ar"?"نوع الغرفة":"Room Type"}),T.map(W=>c.jsx("option",{value:W.type,children:W.type},W.id))]}),c.jsx("label",{style:{fontWeight:500},children:a==="ar"?"تاريخ الوصول":"Check-in Date"}),c.jsx("input",{type:"date",value:d,onChange:W=>f(W.target.value),min:w,required:!0,style:{padding:"8px",borderRadius:6,border:E.checkInDate?"2px solid red":"1px solid #ccc",boxShadow:E.checkInDate?"0 0 0 2px #ff000055":void 0}}),c.jsx("label",{style:{fontWeight:500},children:a==="ar"?"تاريخ المغادرة":"Check-out Date"}),c.jsx("input",{type:"date",value:g,onChange:W=>b(W.target.value),min:w,required:!0,style:{padding:"8px",borderRadius:6,border:E.checkOutDate?"2px solid red":"1px solid #ccc",boxShadow:E.checkOutDate?"0 0 0 2px #ff000055":void 0}}),E.dateMsg&&c.jsx("div",{style:{color:"red",fontSize:13,marginTop:2},children:a==="ar"?"تاريخ المغادرة يجب أن يكون بعد تاريخ الوصول":"Check-out date must be after check-in date"}),c.jsx("button",{type:"submit",style:{marginTop:10,background:"#1976d2",color:"#fff",border:"none",borderRadius:6,padding:"10px 0",fontWeight:600,cursor:"pointer"},children:a==="ar"?"عرض النتائج":"Show Results"})]}),z&&c.jsxs("div",{style:{margin:"0 0 0 0",position:"relative"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[c.jsx("span",{style:{fontWeight:700,fontSize:18},children:a==="ar"?"الغرف المتاحة:":"Available Rooms:"}),c.jsxs("button",{style:{background:"none",color:"#1976d2",border:"none",fontWeight:700,fontSize:15,cursor:"pointer",padding:"6px 12px",borderRadius:6,transition:"background 0.2s",display:"flex",alignItems:"center",gap:6},onMouseOver:W=>W.currentTarget.style.background="#f0f4fa",onMouseOut:W=>W.currentTarget.style.background="none",onClick:()=>{N(!1)},children:[a==="ar"?c.jsx("span",{style:{fontSize:18,marginLeft:2},children:"◀"}):null,a==="ar"?"رجوع":"Back",a!=="ar"?c.jsx("span",{style:{fontSize:18,marginLeft:2},children:"⬅"}):null]})]}),ne?c.jsx("div",{style:{textAlign:"center",margin:"1.5rem 0",color:"#1976d2"},children:a==="ar"?"جاري تحميل الغرف...":"Loading rooms..."}):ee?c.jsx("div",{style:{textAlign:"center",margin:"1.5rem 0",color:"#c62828"},children:ee}):G.length===0?c.jsx("div",{style:{textAlign:"center",margin:"1.5rem 0",color:"#888"},children:a==="ar"?"لا توجد غرف متاحة لهذا البحث.":"No available rooms for this search."}):c.jsx("div",{style:{height:350,overflowY:"auto",paddingRight:8,display:"flex",flexDirection:"column",gap:16},children:G.map((W,ye)=>c.jsxs("label",{style:{background:"#f8f8f8",borderRadius:10,padding:"18px 20px",minWidth:220,boxShadow:"0 2px 8px #eee",border:"1px solid #ddd",marginBottom:4,display:"flex",alignItems:"flex-start",gap:12,cursor:"pointer"},children:[c.jsx("input",{type:"radio",name:"selectedRoom",checked:U===ye,onChange:()=>J(ye),style:{marginTop:4,accentColor:"#1976d2"}}),c.jsxs("div",{style:{flex:1},children:[c.jsxs("div",{style:{fontWeight:600,marginBottom:8},children:[a==="ar"?"نوع الغرفة:":"Room Type:"," ",W.roomType]}),c.jsxs("div",{style:{marginBottom:8},children:[a==="ar"?"السعر:":"Price:"," ",W.pricePerNight,"$"]}),c.jsxs("div",{children:[a==="ar"?"الأسرة:":"Beds:"," ",W.beds&&Array.isArray(W.beds)?W.beds.map(we=>`${we.count} ${we.type}`).join(a==="ar"?" و ":" & "):"-"]})]})]},W.id||ye))}),c.jsx("button",{style:{margin:"24px auto 0 auto",display:"block",background:"#1976d2",color:"#fff",border:"none",borderRadius:6,padding:"12px 40px",fontWeight:600,fontSize:18,cursor:U===null||re?"not-allowed":"pointer",opacity:U===null||re?.6:1},disabled:U===null||re,onClick:async()=>{if(U===null||re)return;ce(!0);const ye={Id:G[U].id,checkInDate:d+"T22:06:15.774Z",checkOutDate:g+"T22:09:15.774Z",flightReservationId:X};try{const we=localStorage.getItem("token"),Ae=await fetch("https://tickifywebsite.runasp.net/api/HotelReservation/Reserve",{method:"POST",headers:{"Content-Type":"application/json",Authorization:we?`Bearer ${we}`:void 0},body:JSON.stringify(ye)}),ve=await Ae.json();if(!Ae.ok){ve.code==="NotValidRoom"&&ve.description==="The room is already reserved at the same time."?await Qt.fire({icon:"error",title:a==="ar"?"الغرفة محجوزة بالفعل":"Room Already Reserved",text:a==="ar"?"هذه الغرفة محجوزة بالفعل في نفس الوقت.":"The room is already reserved at the same time.",confirmButtonText:a==="ar"?"حسناً":"OK"}):await Qt.fire({icon:"error",title:a==="ar"?"فشل الحجز":"Reservation Failed",text:ve.description||(a==="ar"?"حدث خطأ أثناء الحجز.":"An error occurred while booking."),confirmButtonText:a==="ar"?"حسناً":"OK"}),ce(!1);return}await Qt.fire({icon:"success",title:a==="ar"?"تم الحجز بنجاح!":"Booking successful!",html:`
                            <div style='text-align:left;direction:ltr;font-size:1rem;'>
                              <b>${a==="ar"?"اسم العميل":"Customer Name"}:</b> ${ve.customerName}<br/>
                              <b>${a==="ar"?"البريد الإلكتروني":"Email"}:</b> ${ve.customerEmail}<br/>
                              <b>${a==="ar"?"رقم الهاتف":"Phone"}:</b> ${ve.customerPhone}<br/>
                              <b>${a==="ar"?"الفندق":"Hotel"}:</b> ${ve.hotelName}<br/>
                              <b>${a==="ar"?"الوصف":"Description"}:</b> ${ve.hotelDescription}<br/>
                              <b>${a==="ar"?"الموقع":"Location"}:</b> ${ve.hotelLocation}<br/>
                              <b>${a==="ar"?"عدد النجوم":"Star Rating"}:</b> ${ve.hotelStarRating}<br/>
                              <b>${a==="ar"?"نوع الغرفة":"Room Type"}:</b> ${ve.roomType}<br/>
                              <b>${a==="ar"?"تاريخ الوصول":"Check-in"}:</b> ${ve.checkInDate}<br/>
                              <b>${a==="ar"?"تاريخ المغادرة":"Check-out"}:</b> ${ve.checkOutDate}<br/>
                              <b>${a==="ar"?"السعر الكلي":"Total Price"}:</b> ${ve.totalPrice}$
                            </div>
                          `,confirmButtonText:a==="ar"?"حسناً":"OK"}),ae()}catch{await Qt.fire({icon:"error",title:a==="ar"?"فشل الحجز":"Reservation Failed",text:a==="ar"?"حدث خطأ أثناء الحجز.":"An error occurred while booking.",confirmButtonText:a==="ar"?"حسناً":"OK"})}finally{ce(!1)}},children:a==="ar"?"حجز":"Book"})]})]})})]})]})},Or="/Tickify-main/assets/cars-qyoI5mNY.jpg",Hj=[{id:1,name:{ar:"تويوتا كورولا",en:"Toyota Corolla"},type:{ar:"اقتصادية",en:"Economic"},price:45,image:Or},{id:2,name:{ar:"هوندا CR-V",en:"Honda CR-V"},type:{ar:"دفع رباعي",en:"4WD"},price:65,image:Or},{id:3,name:{ar:"بي إم دبليو الفئة الخامسة",en:"BMW 5 Series"},type:{ar:"فاخرة",en:"Luxury"},price:95,image:Or},{id:4,name:{ar:"هيونداي إلنترا",en:"Hyundai Elantra"},type:{ar:"اقتصادية",en:"Economic"},price:40,image:Or},{id:5,name:{ar:"مرسيدس E-Class",en:"Mercedes E-Class"},type:{ar:"فاخرة",en:"Luxury"},price:120,image:Or},{id:6,name:{ar:"كيا سبورتاج",en:"Kia Sportage"},type:{ar:"دفع رباعي",en:"4WD"},price:70,image:Or}],Uj=j.div`
  width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  @media (max-width: 900px) {
    margin: 0;
    width: 100vw;
    max-width: none;
  }
  @media (max-width: 600px) {
    margin: 0;
    width: 100vw;
    max-width: none;
  }
`,$j=j.h2`
  text-align: center;
  color: #1976d2;
  margin-bottom: 32px;
`,qj=j.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Yj=j.div`
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px #eee;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Gj=j.img`
  width: 100%;
  max-width: 200px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`,Vj=j.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 16px;
  font-weight: 600;
  transition: background 0.2s;
  &:hover {
    background: #1251a3;
  }
`,Xj=j.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.35);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,Qj=j.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  padding: 32px 28px 24px 28px;
  min-width: 320px;
  max-width: 95vw;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
`,Zj=j.button`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #eee;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  color: #333;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #ccc; }
`,B0=j.label`
  font-weight: 600;
  color: #00233d;
  margin-bottom: 4px;
`,Kj=j.button`
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  width: 100%;
  transition: background 0.2s;
  &:hover {
    background: #218838;
  }
`,Pj=qa`
  @media (max-width: 900px) {
    body {
      padding: 0 !important;
    }
  }
`,Fj=()=>{const{language:a}=pa(),[r,l]=x.useState(null),[s,d]=x.useState({date:"",time:""}),f=new Date().toISOString().split("T")[0],g=y=>{l(y),d({date:"",time:""})},b=()=>{l(null)},v=(y,k)=>{d(E=>({...E,[y]:k}))},p=async y=>{y.preventDefault(),(await Qt.fire({icon:"question",title:a==="ar"?"تأكيد الحجز":"Confirm Booking",text:a==="ar"?"هل أنت متأكد أنك تريد حجز هذه السيارة؟":"Are you sure you want to book this car?",showCancelButton:!0,confirmButtonText:a==="ar"?"نعم، احجز":"Yes, Book",cancelButtonText:a==="ar"?"إلغاء":"Cancel",reverseButtons:a==="ar"})).isConfirmed&&(l(null),await Qt.fire({icon:"success",title:a==="ar"?"تم الحجز بنجاح!":"Booking successful!",confirmButtonText:a==="ar"?"حسناً":"OK"}))};return c.jsxs(c.Fragment,{children:[c.jsx(Pj,{}),c.jsxs(Uj,{children:[c.jsx($j,{children:a==="ar"?"السيارات المتاحة":"Available Cars"}),c.jsx(qj,{children:Hj.map(y=>c.jsxs(Yj,{children:[c.jsx(Gj,{src:y.image,alt:a==="ar"?y.name.ar:y.name.en}),c.jsx("h3",{style:{color:"#1976d2",marginBottom:8},children:a==="ar"?y.name.ar:y.name.en}),c.jsx("div",{style:{color:"#444",marginBottom:6},children:a==="ar"?y.type.ar:y.type.en}),c.jsxs("div",{style:{color:"#28a745",fontWeight:600,marginBottom:8},children:[y.price,"$ / ",a==="ar"?"يوم":"day"]}),c.jsx(Vj,{onClick:()=>g(y),children:a==="ar"?"احجز الآن":"Book Now"})]},y.id))}),r&&c.jsx(Xj,{onClick:b,children:c.jsxs(Qj,{onClick:y=>y.stopPropagation(),children:[c.jsx(Zj,{onClick:b,title:a==="ar"?"إغلاق":"Close",children:"×"}),c.jsx("h3",{style:{color:"#1976d2",textAlign:"center",marginBottom:8},children:a==="ar"?"حجز سيارة":"Car Booking"}),c.jsxs("div",{style:{textAlign:"center",marginBottom:8},children:[c.jsx("b",{children:a==="ar"?r.name.ar:r.name.en}),c.jsx("span",{style:{color:"#888",margin:"0 8px"},children:"|"}),c.jsx("span",{children:a==="ar"?r.type.ar:r.type.en})]}),c.jsxs("form",{onSubmit:p,style:{display:"flex",flexDirection:"column",gap:12},children:[c.jsx(B0,{children:a==="ar"?"تاريخ الوصول":"Arrival Date"}),c.jsx("input",{type:"date",min:f,value:s.date,onChange:y=>v("date",y.target.value),required:!0,style:{padding:"8px",borderRadius:6,border:"1px solid #ccc"}}),c.jsx(B0,{children:a==="ar"?"وقت الوصول":"Arrival Time"}),c.jsx("input",{type:"time",value:s.time,onChange:y=>v("time",y.target.value),required:!0,style:{padding:"10px",borderRadius:"8px",border:"1.5px solid #ccc",fontSize:"1rem",boxShadow:"0 1px 4px rgba(25, 118, 210, 0.07)",outline:"none",transition:"border 0.2s",marginBottom:"4px"},onFocus:y=>y.target.style.border="1.5px solid #1976d2",onBlur:y=>y.target.style.border="1.5px solid #ccc"}),c.jsx(Kj,{type:"submit",children:a==="ar"?"تأكيد الحجز":"Confirm Booking"})]})]})})]})]})};function Jj(){const a=$a(),r=a.pathname==="/login"||a.pathname==="/signup";return c.jsx(Sw,{children:c.jsxs(j2,{children:[c.jsx(M5,{}),c.jsxs("div",{className:"app",children:[!r&&c.jsx(N2,{}),!r&&c.jsx(R5,{}),a.pathname==="/profile"?c.jsx(xj,{}):c.jsx("main",{className:`main-content ${a.pathname.includes("/hotels")?"hotels-page":""}`,"data-route":a.pathname==="/hotels/results"?"/hotels/results":void 0,children:c.jsxs(qy,{children:[c.jsx(ka,{path:"/",element:c.jsx(XS,{})}),c.jsx(ka,{path:"/flights",element:c.jsx(b6,{})}),c.jsx(ka,{path:"/available-cars",element:c.jsx(Fj,{})}),c.jsx(ka,{path:"/login",element:c.jsx(o5,{})}),c.jsx(ka,{path:"/signup",element:c.jsx(w5,{})}),c.jsx(ka,{path:"/about",element:c.jsx(P5,{})}),c.jsx(ka,{path:"/cancellation",element:c.jsx(e6,{})}),c.jsx(ka,{path:"/terms",element:c.jsx(r6,{})}),c.jsx(ka,{path:"/help",element:c.jsx(E6,{})}),c.jsx(ka,{path:"/flights/results",element:c.jsx(Cj,{})}),c.jsx(ka,{path:"/hotels/results",element:c.jsx(Lj,{})})]})}),!r&&c.jsx(A5,{})]})]})})}function Ij(){return c.jsx(dw,{children:c.jsx(bj,{children:c.jsx(Jj,{})})})}F1.createRoot(document.getElementById("root")).render(c.jsx(x.StrictMode,{children:c.jsx(Ij,{})}));
