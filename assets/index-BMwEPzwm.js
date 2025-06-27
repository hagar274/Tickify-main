(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function l(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(d){if(d.ep)return;d.ep=!0;const f=l(d);fetch(d.href,f)}})();function B0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Dd={exports:{}},Xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function _1(){if(Ag)return Xl;Ag=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(s,d,f){var g=null;if(f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),"key"in d){f={};for(var b in d)b!=="key"&&(f[b]=d[b])}else f=d;return d=f.ref,{$$typeof:a,type:s,key:g,ref:d!==void 0?d:null,props:f}}return Xl.Fragment=i,Xl.jsx=l,Xl.jsxs=l,Xl}var Tg;function L1(){return Tg||(Tg=1,Dd.exports=_1()),Dd.exports}var c=L1(),Md={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function H1(){if(kg)return je;kg=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),k=Symbol.iterator;function E(w){return w===null||typeof w!="object"?null:(w=k&&w[k]||w["@@iterator"],typeof w=="function"?w:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,N={};function B(w,T,X){this.props=w,this.context=T,this.refs=N,this.updater=X||D}B.prototype.isReactComponent={},B.prototype.setState=function(w,T){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,T,"setState")},B.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function O(){}O.prototype=B.prototype;function A(w,T,X){this.props=w,this.context=T,this.refs=N,this.updater=X||D}var q=A.prototype=new O;q.constructor=A,z(q,B.prototype),q.isPureReactComponent=!0;var W=Array.isArray,_={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function P(w,T,X,F,te,re){return X=re.ref,{$$typeof:a,type:w,key:T,ref:X!==void 0?X:null,props:re}}function ne(w,T){return P(w.type,T,void 0,void 0,void 0,w.props)}function Z(w){return typeof w=="object"&&w!==null&&w.$$typeof===a}function ee(w){var T={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(X){return T[X]})}var le=/\/+/g;function oe(w,T){return typeof w=="object"&&w!==null&&w.key!=null?ee(""+w.key):T.toString(36)}function be(){}function xe(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(be,be):(w.status="pending",w.then(function(T){w.status==="pending"&&(w.status="fulfilled",w.value=T)},function(T){w.status==="pending"&&(w.status="rejected",w.reason=T)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function he(w,T,X,F,te){var re=typeof w;(re==="undefined"||re==="boolean")&&(w=null);var ae=!1;if(w===null)ae=!0;else switch(re){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(w.$$typeof){case a:case i:ae=!0;break;case y:return ae=w._init,he(ae(w._payload),T,X,F,te)}}if(ae)return te=te(w),ae=F===""?"."+oe(w,0):F,W(te)?(X="",ae!=null&&(X=ae.replace(le,"$&/")+"/"),he(te,T,X,"",function(ye){return ye})):te!=null&&(Z(te)&&(te=ne(te,X+(te.key==null||w&&w.key===te.key?"":(""+te.key).replace(le,"$&/")+"/")+ae)),T.push(te)),1;ae=0;var Se=F===""?".":F+":";if(W(w))for(var I=0;I<w.length;I++)F=w[I],re=Se+oe(F,I),ae+=he(F,T,X,re,te);else if(I=E(w),typeof I=="function")for(w=I.call(w),I=0;!(F=w.next()).done;)F=F.value,re=Se+oe(F,I++),ae+=he(F,T,X,re,te);else if(re==="object"){if(typeof w.then=="function")return he(xe(w),T,X,F,te);throw T=String(w),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return ae}function U(w,T,X){if(w==null)return w;var F=[],te=0;return he(w,F,"","",function(re){return T.call(X,re,te++)}),F}function J(w){if(w._status===-1){var T=w._result;T=T(),T.then(function(X){(w._status===0||w._status===-1)&&(w._status=1,w._result=X)},function(X){(w._status===0||w._status===-1)&&(w._status=2,w._result=X)}),w._status===-1&&(w._status=0,w._result=T)}if(w._status===1)return w._result.default;throw w._result}var ie=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function ce(){}return je.Children={map:U,forEach:function(w,T,X){U(w,function(){T.apply(this,arguments)},X)},count:function(w){var T=0;return U(w,function(){T++}),T},toArray:function(w){return U(w,function(T){return T})||[]},only:function(w){if(!Z(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},je.Component=B,je.Fragment=l,je.Profiler=d,je.PureComponent=A,je.StrictMode=s,je.Suspense=v,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,je.__COMPILER_RUNTIME={__proto__:null,c:function(w){return _.H.useMemoCache(w)}},je.cache=function(w){return function(){return w.apply(null,arguments)}},je.cloneElement=function(w,T,X){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var F=z({},w.props),te=w.key,re=void 0;if(T!=null)for(ae in T.ref!==void 0&&(re=void 0),T.key!==void 0&&(te=""+T.key),T)!G.call(T,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&T.ref===void 0||(F[ae]=T[ae]);var ae=arguments.length-2;if(ae===1)F.children=X;else if(1<ae){for(var Se=Array(ae),I=0;I<ae;I++)Se[I]=arguments[I+2];F.children=Se}return P(w.type,te,void 0,void 0,re,F)},je.createContext=function(w){return w={$$typeof:g,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:f,_context:w},w},je.createElement=function(w,T,X){var F,te={},re=null;if(T!=null)for(F in T.key!==void 0&&(re=""+T.key),T)G.call(T,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(te[F]=T[F]);var ae=arguments.length-2;if(ae===1)te.children=X;else if(1<ae){for(var Se=Array(ae),I=0;I<ae;I++)Se[I]=arguments[I+2];te.children=Se}if(w&&w.defaultProps)for(F in ae=w.defaultProps,ae)te[F]===void 0&&(te[F]=ae[F]);return P(w,re,void 0,void 0,null,te)},je.createRef=function(){return{current:null}},je.forwardRef=function(w){return{$$typeof:b,render:w}},je.isValidElement=Z,je.lazy=function(w){return{$$typeof:y,_payload:{_status:-1,_result:w},_init:J}},je.memo=function(w,T){return{$$typeof:p,type:w,compare:T===void 0?null:T}},je.startTransition=function(w){var T=_.T,X={};_.T=X;try{var F=w(),te=_.S;te!==null&&te(X,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ce,ie)}catch(re){ie(re)}finally{_.T=T}},je.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},je.use=function(w){return _.H.use(w)},je.useActionState=function(w,T,X){return _.H.useActionState(w,T,X)},je.useCallback=function(w,T){return _.H.useCallback(w,T)},je.useContext=function(w){return _.H.useContext(w)},je.useDebugValue=function(){},je.useDeferredValue=function(w,T){return _.H.useDeferredValue(w,T)},je.useEffect=function(w,T,X){var F=_.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(w,T)},je.useId=function(){return _.H.useId()},je.useImperativeHandle=function(w,T,X){return _.H.useImperativeHandle(w,T,X)},je.useInsertionEffect=function(w,T){return _.H.useInsertionEffect(w,T)},je.useLayoutEffect=function(w,T){return _.H.useLayoutEffect(w,T)},je.useMemo=function(w,T){return _.H.useMemo(w,T)},je.useOptimistic=function(w,T){return _.H.useOptimistic(w,T)},je.useReducer=function(w,T,X){return _.H.useReducer(w,T,X)},je.useRef=function(w){return _.H.useRef(w)},je.useState=function(w){return _.H.useState(w)},je.useSyncExternalStore=function(w,T,X){return _.H.useSyncExternalStore(w,T,X)},je.useTransition=function(){return _.H.useTransition()},je.version="19.1.0",je}var zg;function wf(){return zg||(zg=1,Md.exports=H1()),Md.exports}var x=wf();const Ht=B0(x);var Nd={exports:{}},Ql={},Bd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function U1(){return Rg||(Rg=1,function(a){function i(U,J){var ie=U.length;U.push(J);e:for(;0<ie;){var ce=ie-1>>>1,w=U[ce];if(0<d(w,J))U[ce]=J,U[ie]=w,ie=ce;else break e}}function l(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var J=U[0],ie=U.pop();if(ie!==J){U[0]=ie;e:for(var ce=0,w=U.length,T=w>>>1;ce<T;){var X=2*(ce+1)-1,F=U[X],te=X+1,re=U[te];if(0>d(F,ie))te<w&&0>d(re,F)?(U[ce]=re,U[te]=ie,ce=te):(U[ce]=F,U[X]=ie,ce=X);else if(te<w&&0>d(re,ie))U[ce]=re,U[te]=ie,ce=te;else break e}}return J}function d(U,J){var ie=U.sortIndex-J.sortIndex;return ie!==0?ie:U.id-J.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var g=Date,b=g.now();a.unstable_now=function(){return g.now()-b}}var v=[],p=[],y=1,k=null,E=3,D=!1,z=!1,N=!1,B=!1,O=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function W(U){for(var J=l(p);J!==null;){if(J.callback===null)s(p);else if(J.startTime<=U)s(p),J.sortIndex=J.expirationTime,i(v,J);else break;J=l(p)}}function _(U){if(N=!1,W(U),!z)if(l(v)!==null)z=!0,G||(G=!0,oe());else{var J=l(p);J!==null&&he(_,J.startTime-U)}}var G=!1,P=-1,ne=5,Z=-1;function ee(){return B?!0:!(a.unstable_now()-Z<ne)}function le(){if(B=!1,G){var U=a.unstable_now();Z=U;var J=!0;try{e:{z=!1,N&&(N=!1,A(P),P=-1),D=!0;var ie=E;try{t:{for(W(U),k=l(v);k!==null&&!(k.expirationTime>U&&ee());){var ce=k.callback;if(typeof ce=="function"){k.callback=null,E=k.priorityLevel;var w=ce(k.expirationTime<=U);if(U=a.unstable_now(),typeof w=="function"){k.callback=w,W(U),J=!0;break t}k===l(v)&&s(v),W(U)}else s(v);k=l(v)}if(k!==null)J=!0;else{var T=l(p);T!==null&&he(_,T.startTime-U),J=!1}}break e}finally{k=null,E=ie,D=!1}J=void 0}}finally{J?oe():G=!1}}}var oe;if(typeof q=="function")oe=function(){q(le)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,xe=be.port2;be.port1.onmessage=le,oe=function(){xe.postMessage(null)}}else oe=function(){O(le,0)};function he(U,J){P=O(function(){U(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(U){U.callback=null},a.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<U?Math.floor(1e3/U):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(U){switch(E){case 1:case 2:case 3:var J=3;break;default:J=E}var ie=E;E=J;try{return U()}finally{E=ie}},a.unstable_requestPaint=function(){B=!0},a.unstable_runWithPriority=function(U,J){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ie=E;E=U;try{return J()}finally{E=ie}},a.unstable_scheduleCallback=function(U,J,ie){var ce=a.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ce+ie:ce):ie=ce,U){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=ie+w,U={id:y++,callback:J,priorityLevel:U,startTime:ie,expirationTime:w,sortIndex:-1},ie>ce?(U.sortIndex=ie,i(p,U),l(v)===null&&U===l(p)&&(N?(A(P),P=-1):N=!0,he(_,ie-ce))):(U.sortIndex=w,i(v,U),z||D||(z=!0,G||(G=!0,oe()))),U},a.unstable_shouldYield=ee,a.unstable_wrapCallback=function(U){var J=E;return function(){var ie=E;E=J;try{return U.apply(this,arguments)}finally{E=ie}}}}(_d)),_d}var Og;function $1(){return Og||(Og=1,Bd.exports=U1()),Bd.exports}var Ld={exports:{}},Lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function q1(){if(Dg)return Lt;Dg=1;var a=wf();function i(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(v,p,y){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:k==null?null:""+k,children:v,containerInfo:p,implementation:y}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Lt.createPortal=function(v,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return f(v,p,null,y)},Lt.flushSync=function(v){var p=g.T,y=s.p;try{if(g.T=null,s.p=2,v)return v()}finally{g.T=p,s.p=y,s.d.f()}},Lt.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(v,p))},Lt.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Lt.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var y=p.as,k=b(y,p.crossOrigin),E=typeof p.integrity=="string"?p.integrity:void 0,D=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?s.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:k,integrity:E,fetchPriority:D}):y==="script"&&s.d.X(v,{crossOrigin:k,integrity:E,fetchPriority:D,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Lt.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=b(p.as,p.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(v)},Lt.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,k=b(y,p.crossOrigin);s.d.L(v,y,{crossOrigin:k,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Lt.preloadModule=function(v,p){if(typeof v=="string")if(p){var y=b(p.as,p.crossOrigin);s.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(v)},Lt.requestFormReset=function(v){s.d.r(v)},Lt.unstable_batchedUpdates=function(v,p){return v(p)},Lt.useFormState=function(v,p,y){return g.H.useFormState(v,p,y)},Lt.useFormStatus=function(){return g.H.useHostTransitionStatus()},Lt.version="19.1.0",Lt}var Mg;function _0(){if(Mg)return Ld.exports;Mg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Ld.exports=q1(),Ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function Y1(){if(Ng)return Ql;Ng=1;var a=$1(),i=wf(),l=_0();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(f(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var u=o.alternate;if(u===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===n)return b(o),e;if(u===r)return b(o),t;u=u.sibling}throw Error(s(188))}if(n.return!==r.return)n=o,r=u;else{for(var m=!1,h=o.child;h;){if(h===n){m=!0,n=o,r=u;break}if(h===r){m=!0,r=o,n=u;break}h=h.sibling}if(!m){for(h=u.child;h;){if(h===n){m=!0,n=u,r=o;break}if(h===r){m=!0,r=u,n=o;break}h=h.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,k=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),q=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var be=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case B:return"Profiler";case N:return"StrictMode";case _:return"Suspense";case G:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case D:return"Portal";case q:return(e.displayName||"Context")+".Provider";case A:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:xe(e.type)||"Memo";case ne:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}var he=Array.isArray,U=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ce=[],w=-1;function T(e){return{current:e}}function X(e){0>w||(e.current=ce[w],ce[w]=null,w--)}function F(e,t){w++,ce[w]=e.current,e.current=t}var te=T(null),re=T(null),ae=T(null),Se=T(null);function I(e,t){switch(F(ae,t),F(re,e),F(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?eg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=eg(t),e=tg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(te),F(te,e)}function ye(){X(te),X(re),X(ae)}function we(e){e.memoizedState!==null&&F(Se,e);var t=te.current,n=tg(t,e.type);t!==n&&(F(re,e),F(te,n))}function Ae(e){re.current===e&&(X(te),X(re)),Se.current===e&&(X(Se),$l._currentValue=ie)}var ve=Object.prototype.hasOwnProperty,tt=a.unstable_scheduleCallback,mt=a.unstable_cancelCallback,ta=a.unstable_shouldYield,aa=a.unstable_requestPaint,Je=a.unstable_now,na=a.unstable_getCurrentPriorityLevel,st=a.unstable_ImmediatePriority,Da=a.unstable_UserBlockingPriority,Pt=a.unstable_NormalPriority,Ya=a.unstable_LowPriority,wt=a.unstable_IdlePriority,Yt=a.log,Gt=a.unstable_setDisableYieldValue,Rt=null,We=null;function ht(e){if(typeof Yt=="function"&&Gt(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Rt,e)}catch{}}var Ue=Math.clz32?Math.clz32:Fi,Ga=Math.log,Ma=Math.LN2;function Fi(e){return e>>>=0,e===0?32:31-(Ga(e)/Ma|0)|0}var Va=256,ur=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xa(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var o=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var h=r&134217727;return h!==0?(r=h&~u,r!==0?o=Na(r):(m&=h,m!==0?o=Na(m):n||(n=h&~e,n!==0&&(o=Na(n))))):(h=r&~u,h!==0?o=Na(h):m!==0?o=Na(m):n||(n=r&~e,n!==0&&(o=Na(n)))),o===0?0:t!==0&&t!==o&&(t&u)===0&&(u=o&-o,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:o}function on(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ho(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ur(){var e=Va;return Va<<=1,(Va&4194048)===0&&(Va=256),e}function va(){var e=ur;return ur<<=1,(ur&62914560)===0&&(ur=4194304),e}function $r(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sn(e,t,n,r,o,u){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,S=e.expirationTimes,L=e.hiddenUpdates;for(n=m&~n;0<n;){var V=31-Ue(n),K=1<<V;h[V]=0,S[V]=-1;var H=L[V];if(H!==null)for(L[V]=null,V=0;V<H.length;V++){var $=H[V];$!==null&&($.lane&=-536870913)}n&=~K}r!==0&&Mn(e,r,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function Mn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194090}function qr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function Yr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cn(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:yg(e.type))}function Vr(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var St=Math.random().toString(36).slice(2),Be="__reactFiber$"+St,Oe="__reactProps$"+St,pt="__reactContainer$"+St,Xr="__reactEvents$"+St,Ac="__reactListeners$"+St,Tc="__reactHandles$"+St,Ji="__reactResources$"+St,un="__reactMarker$"+St;function Qr(e){delete e[Be],delete e[Oe],delete e[Xr],delete e[Ac],delete e[Tc]}function Nn(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ig(e);e!==null;){if(n=e[Be])return n;e=ig(e)}return t}e=n,n=e.parentNode}return null}function Bn(e){if(e=e[Be]||e[pt]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function _n(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function dn(e){var t=e[Ji];return t||(t=e[Ji]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[un]=!0}var po=new Set,Wi={};function Qa(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Wi[e]=t,e=0;e<t.length;e++)po.add(t[e])}var kc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),De={},de={};function $e(e){return ve.call(de,e)?!0:ve.call(De,e)?!1:kc.test(e)?de[e]=!0:(De[e]=!0,!1)}function Ge(e,t,n){if($e(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function at(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function jt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}var ra,ba;function Bt(e){if(ra===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ra=t&&t[1]||"",ba=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ra+e+ba}var Ba=!1;function Za(e,t){if(!e||Ba)return"";Ba=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch($){var H=$}Reflect.construct(e,[],K)}else{try{K.call()}catch($){H=$}e.call(K.prototype)}}else{try{throw Error()}catch($){H=$}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch($){if($&&H&&typeof $.stack=="string")return[$.stack,H.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),m=u[0],h=u[1];if(m&&h){var S=m.split(`
`),L=h.split(`
`);for(o=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;o<L.length&&!L[o].includes("DetermineComponentFrameRoot");)o++;if(r===S.length||o===L.length)for(r=S.length-1,o=L.length-1;1<=r&&0<=o&&S[r]!==L[o];)o--;for(;1<=r&&0<=o;r--,o--)if(S[r]!==L[o]){if(r!==1||o!==1)do if(r--,o--,0>o||S[r]!==L[o]){var V=`
`+S[r].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=r&&0<=o);break}}}finally{Ba=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Bt(n):""}function Ka(e){switch(e.tag){case 26:case 27:case 5:return Bt(e.type);case 16:return Bt("Lazy");case 13:return Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return Za(e.type,!1);case 11:return Za(e.type.render,!1);case 1:return Za(e.type,!0);case 31:return Bt("Activity");default:return""}}function dr(e){try{var t="";do t+=Ka(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ov(e){var t=Pf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(m){r=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(m){r=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function go(e){e._valueTracker||(e._valueTracker=Ov(e))}function Ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dv=/[\n"\\]/g;function ya(e){return e.replace(Dv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zc(e,t,n,r,o,u,m,h){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Rc(e,m,Vt(t)):n!=null?Rc(e,m,Vt(n)):r!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Vt(h):e.removeAttribute("name")}function Jf(e,t,n,r,o,u,m,h){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}r=r??o,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=h?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function Rc(e,t,n){t==="number"&&xo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Zr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Wf(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function If(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(he(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r)}function Kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function em(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||Mv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function tm(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&em(e,o,r)}else for(var u in t)t.hasOwnProperty(u)&&em(e,u,t[u])}function Oc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vo(e){return Bv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Dc=null;function Mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,Fr=null;function am(e){var t=Bn(e);if(t&&(e=t.stateNode)){var n=e[Oe]||null;e:switch(e=t.stateNode,t.type){case"input":if(zc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ya(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[Oe]||null;if(!o)throw Error(s(90));zc(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ff(r)}break e;case"textarea":Wf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Zr(e,!!n.multiple,t,!1)}}}var Nc=!1;function nm(e,t,n){if(Nc)return e(t,n);Nc=!0;try{var r=e(t);return r}finally{if(Nc=!1,(Pr!==null||Fr!==null)&&(ns(),Pr&&(t=Pr,e=Fr,Fr=Pr=null,am(t),e)))for(t=0;t<e.length;t++)am(e[t])}}function Ii(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Oe]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(mn)try{var el={};Object.defineProperty(el,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch{Bc=!1}var Ln=null,_c=null,bo=null;function rm(){if(bo)return bo;var e,t=_c,n=t.length,r,o="value"in Ln?Ln.value:Ln.textContent,u=o.length;for(e=0;e<n&&t[e]===o[e];e++);var m=n-e;for(r=1;r<=m&&t[n-r]===o[u-r];r++);return bo=o.slice(e,1<r?1-r:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wo(){return!0}function im(){return!1}function Ft(e){function t(n,r,o,u,m){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?wo:im,this.isPropagationStopped=im,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=Ft(fr),tl=y({},fr,{view:0,detail:0}),_v=Ft(tl),Lc,Hc,al,jo=y({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==al&&(al&&e.type==="mousemove"?(Lc=e.screenX-al.screenX,Hc=e.screenY-al.screenY):Hc=Lc=0,al=e),Lc)},movementY:function(e){return"movementY"in e?e.movementY:Hc}}),lm=Ft(jo),Lv=y({},jo,{dataTransfer:0}),Hv=Ft(Lv),Uv=y({},tl,{relatedTarget:0}),Uc=Ft(Uv),$v=y({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=Ft($v),Yv=y({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gv=Ft(Yv),Vv=y({},fr,{data:0}),om=Ft(Vv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zv[e])?!!t[e]:!1}function $c(){return Kv}var Pv=y({},tl,{key:function(e){if(e.key){var t=Xv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fv=Ft(Pv),Jv=y({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=Ft(Jv),Wv=y({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),Iv=Ft(Wv),eb=y({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tb=Ft(eb),ab=y({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nb=Ft(ab),rb=y({},fr,{newState:0,oldState:0}),ib=Ft(rb),lb=[9,13,27,32],qc=mn&&"CompositionEvent"in window,nl=null;mn&&"documentMode"in document&&(nl=document.documentMode);var ob=mn&&"TextEvent"in window&&!nl,cm=mn&&(!qc||nl&&8<nl&&11>=nl),um=" ",dm=!1;function fm(e,t){switch(e){case"keyup":return lb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function sb(e,t){switch(e){case"compositionend":return mm(t);case"keypress":return t.which!==32?null:(dm=!0,um);case"textInput":return e=t.data,e===um&&dm?null:e;default:return null}}function cb(e,t){if(Jr)return e==="compositionend"||!qc&&fm(e,t)?(e=rm(),bo=_c=Ln=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cm&&t.locale!=="ko"?null:t.data;default:return null}}var ub={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ub[e.type]:t==="textarea"}function pm(e,t,n,r){Pr?Fr?Fr.push(r):Fr=[r]:Pr=r,t=cs(t,"onChange"),0<t.length&&(n=new So("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var rl=null,il=null;function db(e){Pp(e,0)}function Eo(e){var t=_n(e);if(Ff(t))return e}function gm(e,t){if(e==="change")return t}var xm=!1;if(mn){var Yc;if(mn){var Gc="oninput"in document;if(!Gc){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),Gc=typeof vm.oninput=="function"}Yc=Gc}else Yc=!1;xm=Yc&&(!document.documentMode||9<document.documentMode)}function bm(){rl&&(rl.detachEvent("onpropertychange",ym),il=rl=null)}function ym(e){if(e.propertyName==="value"&&Eo(il)){var t=[];pm(t,il,e,Mc(e)),nm(db,t)}}function fb(e,t,n){e==="focusin"?(bm(),rl=t,il=n,rl.attachEvent("onpropertychange",ym)):e==="focusout"&&bm()}function mb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(il)}function hb(e,t){if(e==="click")return Eo(t)}function pb(e,t){if(e==="input"||e==="change")return Eo(t)}function gb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ia=typeof Object.is=="function"?Object.is:gb;function ll(e,t){if(ia(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ve.call(t,o)||!ia(e[o],t[o]))return!1}return!0}function wm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sm(e,t){var n=wm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wm(n)}}function jm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Em(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xo(e.document)}return t}function Vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var xb=mn&&"documentMode"in document&&11>=document.documentMode,Wr=null,Xc=null,ol=null,Qc=!1;function Cm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qc||Wr==null||Wr!==xo(r)||(r=Wr,"selectionStart"in r&&Vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ol&&ll(ol,r)||(ol=r,r=cs(Xc,"onSelect"),0<r.length&&(t=new So("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wr)))}function mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ir={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},Zc={},Am={};mn&&(Am=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function hr(e){if(Zc[e])return Zc[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Am)return Zc[e]=t[n];return e}var Tm=hr("animationend"),km=hr("animationiteration"),zm=hr("animationstart"),vb=hr("transitionrun"),bb=hr("transitionstart"),yb=hr("transitioncancel"),Rm=hr("transitionend"),Om=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function _a(e,t){Om.set(e,t),Qa(t,[e])}var Dm=new WeakMap;function wa(e,t){if(typeof e=="object"&&e!==null){var n=Dm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:dr(t)},Dm.set(e,t),t)}return{value:e,source:t,stack:dr(t)}}var Sa=[],ei=0,Pc=0;function Co(){for(var e=ei,t=Pc=ei=0;t<e;){var n=Sa[t];Sa[t++]=null;var r=Sa[t];Sa[t++]=null;var o=Sa[t];Sa[t++]=null;var u=Sa[t];if(Sa[t++]=null,r!==null&&o!==null){var m=r.pending;m===null?o.next=o:(o.next=m.next,m.next=o),r.pending=o}u!==0&&Mm(n,o,u)}}function Ao(e,t,n,r){Sa[ei++]=e,Sa[ei++]=t,Sa[ei++]=n,Sa[ei++]=r,Pc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Fc(e,t,n,r){return Ao(e,t,n,r),To(e)}function ti(e,t){return Ao(e,null,null,t),To(e)}function Mm(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var o=!1,u=e.return;u!==null;)u.childLanes|=n,r=u.alternate,r!==null&&(r.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&t!==null&&(o=31-Ue(n),e=u.hiddenUpdates,r=e[o],r===null?e[o]=[t]:r.push(t),t.lane=n|536870912),u):null}function To(e){if(50<Dl)throw Dl=0,ad=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ai={};function wb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function la(e,t,n,r){return new wb(e,t,n,r)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hn(e,t){var n=e.alternate;return n===null?(n=la(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Nm(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ko(e,t,n,r,o,u){var m=0;if(r=e,typeof e=="function")Jc(e)&&(m=1);else if(typeof e=="string")m=j1(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=la(31,n,t,o),e.elementType=Z,e.lanes=u,e;case z:return pr(n.children,o,u,t);case N:m=8,o|=24;break;case B:return e=la(12,n,t,o|2),e.elementType=B,e.lanes=u,e;case _:return e=la(13,n,t,o),e.elementType=_,e.lanes=u,e;case G:return e=la(19,n,t,o),e.elementType=G,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:case q:m=10;break e;case A:m=9;break e;case W:m=11;break e;case P:m=14;break e;case ne:m=16,r=null;break e}m=29,n=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=la(m,n,t,o),t.elementType=e,t.type=r,t.lanes=u,t}function pr(e,t,n,r){return e=la(7,e,r,t),e.lanes=n,e}function Wc(e,t,n){return e=la(6,e,null,t),e.lanes=n,e}function Ic(e,t,n){return t=la(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ni=[],ri=0,zo=null,Ro=0,ja=[],Ea=0,gr=null,pn=1,gn="";function xr(e,t){ni[ri++]=Ro,ni[ri++]=zo,zo=e,Ro=t}function Bm(e,t,n){ja[Ea++]=pn,ja[Ea++]=gn,ja[Ea++]=gr,gr=e;var r=pn;e=gn;var o=32-Ue(r)-1;r&=~(1<<o),n+=1;var u=32-Ue(t)+o;if(30<u){var m=o-o%5;u=(r&(1<<m)-1).toString(32),r>>=m,o-=m,pn=1<<32-Ue(t)+o|n<<o|r,gn=u+e}else pn=1<<u|n<<o|r,gn=e}function eu(e){e.return!==null&&(xr(e,1),Bm(e,1,0))}function tu(e){for(;e===zo;)zo=ni[--ri],ni[ri]=null,Ro=ni[--ri],ni[ri]=null;for(;e===gr;)gr=ja[--Ea],ja[Ea]=null,gn=ja[--Ea],ja[Ea]=null,pn=ja[--Ea],ja[Ea]=null}var Xt=null,lt=null,_e=!1,vr=null,Pa=!1,au=Error(s(519));function br(e){var t=Error(s(418,""));throw ul(wa(t,e)),au}function _m(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Be]=e,t[Oe]=r,n){case"dialog":ze("cancel",t),ze("close",t);break;case"iframe":case"object":case"embed":ze("load",t);break;case"video":case"audio":for(n=0;n<Nl.length;n++)ze(Nl[n],t);break;case"source":ze("error",t);break;case"img":case"image":case"link":ze("error",t),ze("load",t);break;case"details":ze("toggle",t);break;case"input":ze("invalid",t),Jf(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),go(t);break;case"select":ze("invalid",t);break;case"textarea":ze("invalid",t),If(t,r.value,r.defaultValue,r.children),go(t)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||Ip(t.textContent,n)?(r.popover!=null&&(ze("beforetoggle",t),ze("toggle",t)),r.onScroll!=null&&ze("scroll",t),r.onScrollEnd!=null&&ze("scrollend",t),r.onClick!=null&&(t.onclick=us),t=!0):t=!1,t||br(e)}function Lm(e){for(Xt=e.return;Xt;)switch(Xt.tag){case 5:case 13:Pa=!1;return;case 27:case 3:Pa=!0;return;default:Xt=Xt.return}}function sl(e){if(e!==Xt)return!1;if(!_e)return Lm(e),_e=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||vd(e.type,e.memoizedProps)),n=!n),n&&lt&&br(e),Lm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){lt=Ha(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}lt=null}}else t===27?(t=lt,In(e.type)?(e=Sd,Sd=null,lt=e):lt=t):lt=Xt?Ha(e.stateNode.nextSibling):null;return!0}function cl(){lt=Xt=null,_e=!1}function Hm(){var e=vr;return e!==null&&(It===null?It=e:It.push.apply(It,e),vr=null),e}function ul(e){vr===null?vr=[e]:vr.push(e)}var nu=T(null),yr=null,xn=null;function Hn(e,t,n){F(nu,t._currentValue),t._currentValue=n}function vn(e){e._currentValue=nu.current,X(nu)}function ru(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function iu(e,t,n,r){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var m=o.child;u=u.firstContext;e:for(;u!==null;){var h=u;u=o;for(var S=0;S<t.length;S++)if(h.context===t[S]){u.lanes|=n,h=u.alternate,h!==null&&(h.lanes|=n),ru(u.return,n,e),r||(m=null);break e}u=h.next}}else if(o.tag===18){if(m=o.return,m===null)throw Error(s(341));m.lanes|=n,u=m.alternate,u!==null&&(u.lanes|=n),ru(m,n,e),m=null}else m=o.child;if(m!==null)m.return=o;else for(m=o;m!==null;){if(m===e){m=null;break}if(o=m.sibling,o!==null){o.return=m.return,m=o;break}m=m.return}o=m}}function dl(e,t,n,r){e=null;for(var o=t,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var m=o.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var h=o.type;ia(o.pendingProps.value,m.value)||(e!==null?e.push(h):e=[h])}}else if(o===Se.current){if(m=o.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push($l):e=[$l])}o=o.return}e!==null&&iu(t,e,n,r),t.flags|=262144}function Oo(e){for(e=e.firstContext;e!==null;){if(!ia(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wr(e){yr=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _t(e){return Um(yr,e)}function Do(e,t){return yr===null&&wr(e),Um(e,t)}function Um(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(s(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var Sb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},jb=a.unstable_scheduleCallback,Eb=a.unstable_NormalPriority,bt={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lu(){return{controller:new Sb,data:new Map,refCount:0}}function fl(e){e.refCount--,e.refCount===0&&jb(Eb,function(){e.controller.abort()})}var ml=null,ou=0,ii=0,li=null;function Cb(e,t){if(ml===null){var n=ml=[];ou=0,ii=cd(),li={status:"pending",value:void 0,then:function(r){n.push(r)}}}return ou++,t.then($m,$m),t}function $m(){if(--ou===0&&ml!==null){li!==null&&(li.status="fulfilled");var e=ml;ml=null,ii=0,li=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ab(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(r.status="rejected",r.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),r}var qm=U.S;U.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Cb(e,t),qm!==null&&qm(e,t)};var Sr=T(null);function su(){var e=Sr.current;return e!==null?e:Ke.pooledCache}function Mo(e,t){t===null?F(Sr,Sr.current):F(Sr,t.pool)}function Ym(){var e=su();return e===null?null:{parent:bt._currentValue,pool:e}}var hl=Error(s(460)),Gm=Error(s(474)),No=Error(s(542)),cu={then:function(){}};function Vm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bo(){}function Xm(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Bo,Bo),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zm(e),e;default:if(typeof t.status=="string")t.then(Bo,Bo);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=r}},function(r){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zm(e),e}throw pl=t,hl}}var pl=null;function Qm(){if(pl===null)throw Error(s(459));var e=pl;return pl=null,e}function Zm(e){if(e===hl||e===No)throw Error(s(483))}var Un=!1;function uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(qe&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,t=To(e),Mm(e,null,n),t}return Ao(e,r,t,n),To(e)}function gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qr(e,n)}}function fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?o=u=m:u=u.next=m,n=n.next}while(n!==null);u===null?o=u=t:u=u.next=t}else o=u=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var mu=!1;function xl(){if(mu){var e=li;if(e!==null)throw e}}function vl(e,t,n,r){mu=!1;var o=e.updateQueue;Un=!1;var u=o.firstBaseUpdate,m=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var S=h,L=S.next;S.next=null,m===null?u=L:m.next=L,m=S;var V=e.alternate;V!==null&&(V=V.updateQueue,h=V.lastBaseUpdate,h!==m&&(h===null?V.firstBaseUpdate=L:h.next=L,V.lastBaseUpdate=S))}if(u!==null){var K=o.baseState;m=0,V=L=S=null,h=u;do{var H=h.lane&-536870913,$=H!==h.lane;if($?(Re&H)===H:(r&H)===H){H!==0&&H===ii&&(mu=!0),V!==null&&(V=V.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ge=e,me=h;H=t;var Qe=n;switch(me.tag){case 1:if(ge=me.payload,typeof ge=="function"){K=ge.call(Qe,K,H);break e}K=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=me.payload,H=typeof ge=="function"?ge.call(Qe,K,H):ge,H==null)break e;K=y({},K,H);break e;case 2:Un=!0}}H=h.callback,H!==null&&(e.flags|=64,$&&(e.flags|=8192),$=o.callbacks,$===null?o.callbacks=[H]:$.push(H))}else $={lane:H,tag:h.tag,payload:h.payload,callback:h.callback,next:null},V===null?(L=V=$,S=K):V=V.next=$,m|=H;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;$=h,h=$.next,$.next=null,o.lastBaseUpdate=$,o.shared.pending=null}}while(!0);V===null&&(S=K),o.baseState=S,o.firstBaseUpdate=L,o.lastBaseUpdate=V,u===null&&(o.shared.lanes=0),Pn|=m,e.lanes=m,e.memoizedState=K}}function Km(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Pm(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Km(n[e],t)}var oi=T(null),_o=T(0);function Fm(e,t){e=Cn,F(_o,e),F(oi,t),Cn=e|t.baseLanes}function hu(){F(_o,Cn),F(oi,oi.current)}function pu(){Cn=_o.current,X(oi),X(_o)}var Yn=0,Ce=null,Ve=null,gt=null,Lo=!1,si=!1,jr=!1,Ho=0,bl=0,ci=null,Tb=0;function ct(){throw Error(s(321))}function gu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ia(e[n],t[n]))return!1;return!0}function xu(e,t,n,r,o,u){return Yn=u,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?Mh:Nh,jr=!1,u=n(r,o),jr=!1,si&&(u=Wm(t,n,r,o)),Jm(e),u}function Jm(e){U.H=Vo;var t=Ve!==null&&Ve.next!==null;if(Yn=0,gt=Ve=Ce=null,Lo=!1,bl=0,ci=null,t)throw Error(s(300));e===null||Et||(e=e.dependencies,e!==null&&Oo(e)&&(Et=!0))}function Wm(e,t,n,r){Ce=e;var o=0;do{if(si&&(ci=null),bl=0,si=!1,25<=o)throw Error(s(301));if(o+=1,gt=Ve=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}U.H=Nb,u=t(n,r)}while(si);return u}function kb(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?yl(t):t,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(Ce.flags|=1024),t}function vu(){var e=Ho!==0;return Ho=0,e}function bu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yu(e){if(Lo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Lo=!1}Yn=0,gt=Ve=Ce=null,si=!1,bl=Ho=0,ci=null}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ce.memoizedState=gt=e:gt=gt.next=e,gt}function xt(){if(Ve===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=gt===null?Ce.memoizedState:gt.next;if(t!==null)gt=t,Ve=e;else{if(e===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},gt===null?Ce.memoizedState=gt=e:gt=gt.next=e}return gt}function wu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yl(e){var t=bl;return bl+=1,ci===null&&(ci=[]),e=Xm(ci,e,t),t=Ce,(gt===null?t.memoizedState:gt.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?Mh:Nh),e}function Uo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yl(e);if(e.$$typeof===q)return _t(e)}throw Error(s(438,String(e)))}function Su(e){var t=null,n=Ce.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=wu(),Ce.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ee;return t.index++,n}function bn(e,t){return typeof t=="function"?t(e):t}function $o(e){var t=xt();return ju(t,Ve,e)}function ju(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var o=e.baseQueue,u=r.pending;if(u!==null){if(o!==null){var m=o.next;o.next=u.next,u.next=m}t.baseQueue=o=u,r.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{t=o.next;var h=m=null,S=null,L=t,V=!1;do{var K=L.lane&-536870913;if(K!==L.lane?(Re&K)===K:(Yn&K)===K){var H=L.revertLane;if(H===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),K===ii&&(V=!0);else if((Yn&H)===H){L=L.next,H===ii&&(V=!0);continue}else K={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(h=S=K,m=u):S=S.next=K,Ce.lanes|=H,Pn|=H;K=L.action,jr&&n(u,K),u=L.hasEagerState?L.eagerState:n(u,K)}else H={lane:K,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(h=S=H,m=u):S=S.next=H,Ce.lanes|=K,Pn|=K;L=L.next}while(L!==null&&L!==t);if(S===null?m=u:S.next=h,!ia(u,e.memoizedState)&&(Et=!0,V&&(n=li,n!==null)))throw n;e.memoizedState=u,e.baseState=m,e.baseQueue=S,r.lastRenderedState=u}return o===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Eu(e){var t=xt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,u=t.memoizedState;if(o!==null){n.pending=null;var m=o=o.next;do u=e(u,m.action),m=m.next;while(m!==o);ia(u,t.memoizedState)||(Et=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}function Im(e,t,n){var r=Ce,o=xt(),u=_e;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=t();var m=!ia((Ve||o).memoizedState,n);m&&(o.memoizedState=n,Et=!0),o=o.queue;var h=ah.bind(null,r,o,e);if(wl(2048,8,h,[e]),o.getSnapshot!==t||m||gt!==null&&gt.memoizedState.tag&1){if(r.flags|=2048,ui(9,qo(),th.bind(null,r,o,n,t),null),Ke===null)throw Error(s(349));u||(Yn&124)!==0||eh(r,t,n)}return n}function eh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t=wu(),Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function th(e,t,n,r){t.value=n,t.getSnapshot=r,nh(t)&&rh(e)}function ah(e,t,n){return n(function(){nh(t)&&rh(e)})}function nh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ia(e,n)}catch{return!0}}function rh(e){var t=ti(e,2);t!==null&&da(t,e,2)}function Cu(e){var t=Jt();if(typeof e=="function"){var n=e;if(e=n(),jr){ht(!0);try{n()}finally{ht(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t}function ih(e,t,n,r){return e.baseState=n,ju(e,Ve,typeof r=="function"?r:bn)}function zb(e,t,n,r,o){if(Go(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};U.T!==null?n(!0):u.isTransition=!1,r(u),n=t.pending,n===null?(u.next=t.pending=u,lh(t,u)):(u.next=n.next,t.pending=n.next=u)}}function lh(e,t){var n=t.action,r=t.payload,o=e.state;if(t.isTransition){var u=U.T,m={};U.T=m;try{var h=n(o,r),S=U.S;S!==null&&S(m,h),oh(e,t,h)}catch(L){Au(e,t,L)}finally{U.T=u}}else try{u=n(o,r),oh(e,t,u)}catch(L){Au(e,t,L)}}function oh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){sh(e,t,r)},function(r){return Au(e,t,r)}):sh(e,t,n)}function sh(e,t,n){t.status="fulfilled",t.value=n,ch(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,lh(e,n)))}function Au(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,ch(t),t=t.next;while(t!==r)}e.action=null}function ch(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function uh(e,t){return t}function dh(e,t){if(_e){var n=Ke.formState;if(n!==null){e:{var r=Ce;if(_e){if(lt){t:{for(var o=lt,u=Pa;o.nodeType!==8;){if(!u){o=null;break t}if(o=Ha(o.nextSibling),o===null){o=null;break t}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){lt=Ha(o.nextSibling),r=o.data==="F!";break e}}br(r)}r=!1}r&&(t=n[0])}}return n=Jt(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uh,lastRenderedState:t},n.queue=r,n=Rh.bind(null,Ce,r),r.dispatch=n,r=Cu(!1),u=Ou.bind(null,Ce,!1,r.queue),r=Jt(),o={state:t,dispatch:null,action:e,pending:null},r.queue=o,n=zb.bind(null,Ce,o,u,n),o.dispatch=n,r.memoizedState=e,[t,n,!1]}function fh(e){var t=xt();return mh(t,Ve,e)}function mh(e,t,n){if(t=ju(e,t,uh)[0],e=$o(bn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=yl(t)}catch(m){throw m===hl?No:m}else r=t;t=xt();var o=t.queue,u=o.dispatch;return n!==t.memoizedState&&(Ce.flags|=2048,ui(9,qo(),Rb.bind(null,o,n),null)),[r,u,e]}function Rb(e,t){e.action=t}function hh(e){var t=xt(),n=Ve;if(n!==null)return mh(t,n,e);xt(),t=t.memoizedState,n=xt();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ui(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Ce.updateQueue,t===null&&(t=wu(),Ce.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function qo(){return{destroy:void 0,resource:void 0}}function ph(){return xt().memoizedState}function Yo(e,t,n,r){var o=Jt();r=r===void 0?null:r,Ce.flags|=e,o.memoizedState=ui(1|t,qo(),n,r)}function wl(e,t,n,r){var o=xt();r=r===void 0?null:r;var u=o.memoizedState.inst;Ve!==null&&r!==null&&gu(r,Ve.memoizedState.deps)?o.memoizedState=ui(t,u,n,r):(Ce.flags|=e,o.memoizedState=ui(1|t,u,n,r))}function gh(e,t){Yo(8390656,8,e,t)}function xh(e,t){wl(2048,8,e,t)}function vh(e,t){return wl(4,2,e,t)}function bh(e,t){return wl(4,4,e,t)}function yh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wh(e,t,n){n=n!=null?n.concat([e]):null,wl(4,4,yh.bind(null,t,e),n)}function Tu(){}function Sh(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&gu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jh(e,t){var n=xt();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&gu(t,r[1]))return r[0];if(r=e(),jr){ht(!0);try{e()}finally{ht(!1)}}return n.memoizedState=[r,t],r}function ku(e,t,n){return n===void 0||(Yn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ap(),Ce.lanes|=e,Pn|=e,n)}function Eh(e,t,n,r){return ia(n,t)?n:oi.current!==null?(e=ku(e,n,r),ia(e,t)||(Et=!0),e):(Yn&42)===0?(Et=!0,e.memoizedState=n):(e=Ap(),Ce.lanes|=e,Pn|=e,t)}function Ch(e,t,n,r,o){var u=J.p;J.p=u!==0&&8>u?u:8;var m=U.T,h={};U.T=h,Ou(e,!1,t,n);try{var S=o(),L=U.S;if(L!==null&&L(h,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var V=Ab(S,r);Sl(e,t,V,ua(e))}else Sl(e,t,r,ua(e))}catch(K){Sl(e,t,{then:function(){},status:"rejected",reason:K},ua())}finally{J.p=u,U.T=m}}function Ob(){}function zu(e,t,n,r){if(e.tag!==5)throw Error(s(476));var o=Ah(e).queue;Ch(e,o,t,ie,n===null?Ob:function(){return Th(e),n(r)})}function Ah(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Th(e){var t=Ah(e).next.queue;Sl(e,t,{},ua())}function Ru(){return _t($l)}function kh(){return xt().memoizedState}function zh(){return xt().memoizedState}function Db(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ua();e=$n(n);var r=qn(t,e,n);r!==null&&(da(r,t,n),gl(r,t,n)),t={cache:lu()},e.payload=t;return}t=t.return}}function Mb(e,t,n){var r=ua();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e)?Oh(t,n):(n=Fc(e,t,n,r),n!==null&&(da(n,e,r),Dh(n,t,r)))}function Rh(e,t,n){var r=ua();Sl(e,t,n,r)}function Sl(e,t,n,r){var o={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))Oh(t,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,h=u(m,n);if(o.hasEagerState=!0,o.eagerState=h,ia(h,m))return Ao(e,t,o,0),Ke===null&&Co(),!1}catch{}finally{}if(n=Fc(e,t,o,r),n!==null)return da(n,e,r),Dh(n,t,r),!0}return!1}function Ou(e,t,n,r){if(r={lane:2,revertLane:cd(),action:r,hasEagerState:!1,eagerState:null,next:null},Go(e)){if(t)throw Error(s(479))}else t=Fc(e,n,r,2),t!==null&&da(t,e,2)}function Go(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Oh(e,t){si=Lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dh(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qr(e,n)}}var Vo={readContext:_t,use:Uo,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct},Mh={readContext:_t,use:Uo,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:gh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Yo(4194308,4,yh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){Yo(4,2,e,t)},useMemo:function(e,t){var n=Jt();t=t===void 0?null:t;var r=e();if(jr){ht(!0);try{e()}finally{ht(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Jt();if(n!==void 0){var o=n(t);if(jr){ht(!0);try{n(t)}finally{ht(!1)}}}else o=t;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=Mb.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:function(e){e=Cu(e);var t=e.queue,n=Rh.bind(null,Ce,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Tu,useDeferredValue:function(e,t){var n=Jt();return ku(n,e,t)},useTransition:function(){var e=Cu(!1);return e=Ch.bind(null,Ce,e.queue,!0,!1),Jt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Ce,o=Jt();if(_e){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ke===null)throw Error(s(349));(Re&124)!==0||eh(r,t,n)}o.memoizedState=n;var u={value:n,getSnapshot:t};return o.queue=u,gh(ah.bind(null,r,u,e),[e]),r.flags|=2048,ui(9,qo(),th.bind(null,r,u,n,t),null),n},useId:function(){var e=Jt(),t=Ke.identifierPrefix;if(_e){var n=gn,r=pn;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t="«"+t+"R"+n,n=Ho++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Tb++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ru,useFormState:dh,useActionState:dh,useOptimistic:function(e){var t=Jt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ou.bind(null,Ce,!0,n),n.dispatch=t,[e,t]},useMemoCache:Su,useCacheRefresh:function(){return Jt().memoizedState=Db.bind(null,Ce)}},Nh={readContext:_t,use:Uo,useCallback:Sh,useContext:_t,useEffect:xh,useImperativeHandle:wh,useInsertionEffect:vh,useLayoutEffect:bh,useMemo:jh,useReducer:$o,useRef:ph,useState:function(){return $o(bn)},useDebugValue:Tu,useDeferredValue:function(e,t){var n=xt();return Eh(n,Ve.memoizedState,e,t)},useTransition:function(){var e=$o(bn)[0],t=xt().memoizedState;return[typeof e=="boolean"?e:yl(e),t]},useSyncExternalStore:Im,useId:kh,useHostTransitionStatus:Ru,useFormState:fh,useActionState:fh,useOptimistic:function(e,t){var n=xt();return ih(n,Ve,e,t)},useMemoCache:Su,useCacheRefresh:zh},Nb={readContext:_t,use:Uo,useCallback:Sh,useContext:_t,useEffect:xh,useImperativeHandle:wh,useInsertionEffect:vh,useLayoutEffect:bh,useMemo:jh,useReducer:Eu,useRef:ph,useState:function(){return Eu(bn)},useDebugValue:Tu,useDeferredValue:function(e,t){var n=xt();return Ve===null?ku(n,e,t):Eh(n,Ve.memoizedState,e,t)},useTransition:function(){var e=Eu(bn)[0],t=xt().memoizedState;return[typeof e=="boolean"?e:yl(e),t]},useSyncExternalStore:Im,useId:kh,useHostTransitionStatus:Ru,useFormState:hh,useActionState:hh,useOptimistic:function(e,t){var n=xt();return Ve!==null?ih(n,Ve,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Su,useCacheRefresh:zh},di=null,jl=0;function Xo(e){var t=jl;return jl+=1,di===null&&(di=[]),Xm(di,e,t)}function El(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Qo(e,t){throw t.$$typeof===k?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Bh(e){var t=e._init;return t(e._payload)}function _h(e){function t(R,C){if(e){var M=R.deletions;M===null?(R.deletions=[C],R.flags|=16):M.push(C)}}function n(R,C){if(!e)return null;for(;C!==null;)t(R,C),C=C.sibling;return null}function r(R){for(var C=new Map;R!==null;)R.key!==null?C.set(R.key,R):C.set(R.index,R),R=R.sibling;return C}function o(R,C){return R=hn(R,C),R.index=0,R.sibling=null,R}function u(R,C,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<C?(R.flags|=67108866,C):M):(R.flags|=67108866,C)):(R.flags|=1048576,C)}function m(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function h(R,C,M,Q){return C===null||C.tag!==6?(C=Wc(M,R.mode,Q),C.return=R,C):(C=o(C,M),C.return=R,C)}function S(R,C,M,Q){var se=M.type;return se===z?V(R,C,M.props.children,Q,M.key):C!==null&&(C.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ne&&Bh(se)===C.type)?(C=o(C,M.props),El(C,M),C.return=R,C):(C=ko(M.type,M.key,M.props,null,R.mode,Q),El(C,M),C.return=R,C)}function L(R,C,M,Q){return C===null||C.tag!==4||C.stateNode.containerInfo!==M.containerInfo||C.stateNode.implementation!==M.implementation?(C=Ic(M,R.mode,Q),C.return=R,C):(C=o(C,M.children||[]),C.return=R,C)}function V(R,C,M,Q,se){return C===null||C.tag!==7?(C=pr(M,R.mode,Q,se),C.return=R,C):(C=o(C,M),C.return=R,C)}function K(R,C,M){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Wc(""+C,R.mode,M),C.return=R,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case E:return M=ko(C.type,C.key,C.props,null,R.mode,M),El(M,C),M.return=R,M;case D:return C=Ic(C,R.mode,M),C.return=R,C;case ne:var Q=C._init;return C=Q(C._payload),K(R,C,M)}if(he(C)||oe(C))return C=pr(C,R.mode,M,null),C.return=R,C;if(typeof C.then=="function")return K(R,Xo(C),M);if(C.$$typeof===q)return K(R,Do(R,C),M);Qo(R,C)}return null}function H(R,C,M,Q){var se=C!==null?C.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return se!==null?null:h(R,C,""+M,Q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case E:return M.key===se?S(R,C,M,Q):null;case D:return M.key===se?L(R,C,M,Q):null;case ne:return se=M._init,M=se(M._payload),H(R,C,M,Q)}if(he(M)||oe(M))return se!==null?null:V(R,C,M,Q,null);if(typeof M.then=="function")return H(R,C,Xo(M),Q);if(M.$$typeof===q)return H(R,C,Do(R,M),Q);Qo(R,M)}return null}function $(R,C,M,Q,se){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return R=R.get(M)||null,h(C,R,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return R=R.get(Q.key===null?M:Q.key)||null,S(C,R,Q,se);case D:return R=R.get(Q.key===null?M:Q.key)||null,L(C,R,Q,se);case ne:var Te=Q._init;return Q=Te(Q._payload),$(R,C,M,Q,se)}if(he(Q)||oe(Q))return R=R.get(M)||null,V(C,R,Q,se,null);if(typeof Q.then=="function")return $(R,C,M,Xo(Q),se);if(Q.$$typeof===q)return $(R,C,M,Do(C,Q),se);Qo(C,Q)}return null}function ge(R,C,M,Q){for(var se=null,Te=null,ue=C,pe=C=0,At=null;ue!==null&&pe<M.length;pe++){ue.index>pe?(At=ue,ue=null):At=ue.sibling;var Me=H(R,ue,M[pe],Q);if(Me===null){ue===null&&(ue=At);break}e&&ue&&Me.alternate===null&&t(R,ue),C=u(Me,C,pe),Te===null?se=Me:Te.sibling=Me,Te=Me,ue=At}if(pe===M.length)return n(R,ue),_e&&xr(R,pe),se;if(ue===null){for(;pe<M.length;pe++)ue=K(R,M[pe],Q),ue!==null&&(C=u(ue,C,pe),Te===null?se=ue:Te.sibling=ue,Te=ue);return _e&&xr(R,pe),se}for(ue=r(ue);pe<M.length;pe++)At=$(ue,R,pe,M[pe],Q),At!==null&&(e&&At.alternate!==null&&ue.delete(At.key===null?pe:At.key),C=u(At,C,pe),Te===null?se=At:Te.sibling=At,Te=At);return e&&ue.forEach(function(rr){return t(R,rr)}),_e&&xr(R,pe),se}function me(R,C,M,Q){if(M==null)throw Error(s(151));for(var se=null,Te=null,ue=C,pe=C=0,At=null,Me=M.next();ue!==null&&!Me.done;pe++,Me=M.next()){ue.index>pe?(At=ue,ue=null):At=ue.sibling;var rr=H(R,ue,Me.value,Q);if(rr===null){ue===null&&(ue=At);break}e&&ue&&rr.alternate===null&&t(R,ue),C=u(rr,C,pe),Te===null?se=rr:Te.sibling=rr,Te=rr,ue=At}if(Me.done)return n(R,ue),_e&&xr(R,pe),se;if(ue===null){for(;!Me.done;pe++,Me=M.next())Me=K(R,Me.value,Q),Me!==null&&(C=u(Me,C,pe),Te===null?se=Me:Te.sibling=Me,Te=Me);return _e&&xr(R,pe),se}for(ue=r(ue);!Me.done;pe++,Me=M.next())Me=$(ue,R,pe,Me.value,Q),Me!==null&&(e&&Me.alternate!==null&&ue.delete(Me.key===null?pe:Me.key),C=u(Me,C,pe),Te===null?se=Me:Te.sibling=Me,Te=Me);return e&&ue.forEach(function(B1){return t(R,B1)}),_e&&xr(R,pe),se}function Qe(R,C,M,Q){if(typeof M=="object"&&M!==null&&M.type===z&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case E:e:{for(var se=M.key;C!==null;){if(C.key===se){if(se=M.type,se===z){if(C.tag===7){n(R,C.sibling),Q=o(C,M.props.children),Q.return=R,R=Q;break e}}else if(C.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ne&&Bh(se)===C.type){n(R,C.sibling),Q=o(C,M.props),El(Q,M),Q.return=R,R=Q;break e}n(R,C);break}else t(R,C);C=C.sibling}M.type===z?(Q=pr(M.props.children,R.mode,Q,M.key),Q.return=R,R=Q):(Q=ko(M.type,M.key,M.props,null,R.mode,Q),El(Q,M),Q.return=R,R=Q)}return m(R);case D:e:{for(se=M.key;C!==null;){if(C.key===se)if(C.tag===4&&C.stateNode.containerInfo===M.containerInfo&&C.stateNode.implementation===M.implementation){n(R,C.sibling),Q=o(C,M.children||[]),Q.return=R,R=Q;break e}else{n(R,C);break}else t(R,C);C=C.sibling}Q=Ic(M,R.mode,Q),Q.return=R,R=Q}return m(R);case ne:return se=M._init,M=se(M._payload),Qe(R,C,M,Q)}if(he(M))return ge(R,C,M,Q);if(oe(M)){if(se=oe(M),typeof se!="function")throw Error(s(150));return M=se.call(M),me(R,C,M,Q)}if(typeof M.then=="function")return Qe(R,C,Xo(M),Q);if(M.$$typeof===q)return Qe(R,C,Do(R,M),Q);Qo(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,C!==null&&C.tag===6?(n(R,C.sibling),Q=o(C,M),Q.return=R,R=Q):(n(R,C),Q=Wc(M,R.mode,Q),Q.return=R,R=Q),m(R)):n(R,C)}return function(R,C,M,Q){try{jl=0;var se=Qe(R,C,M,Q);return di=null,se}catch(ue){if(ue===hl||ue===No)throw ue;var Te=la(29,ue,null,R.mode);return Te.lanes=Q,Te.return=R,Te}finally{}}}var fi=_h(!0),Lh=_h(!1),Ca=T(null),Fa=null;function Gn(e){var t=e.alternate;F(yt,yt.current&1),F(Ca,e),Fa===null&&(t===null||oi.current!==null||t.memoizedState!==null)&&(Fa=e)}function Hh(e){if(e.tag===22){if(F(yt,yt.current),F(Ca,e),Fa===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Fa=e)}}else Vn()}function Vn(){F(yt,yt.current),F(Ca,Ca.current)}function yn(e){X(Ca),Fa===e&&(Fa=null),X(yt)}var yt=T(0);function Zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||wd(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Du(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mu={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ua(),o=$n(r);o.payload=t,n!=null&&(o.callback=n),t=qn(e,o,r),t!==null&&(da(t,e,r),gl(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ua(),o=$n(r);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=qn(e,o,r),t!==null&&(da(t,e,r),gl(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ua(),r=$n(n);r.tag=2,t!=null&&(r.callback=t),t=qn(e,r,n),t!==null&&(da(t,e,n),gl(t,e,n))}};function Uh(e,t,n,r,o,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,m):t.prototype&&t.prototype.isPureReactComponent?!ll(n,r)||!ll(o,u):!0}function $h(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mu.enqueueReplaceState(t,t.state,null)}function Er(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}var Ko=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qh(e){Ko(e)}function Yh(e){console.error(e)}function Gh(e){Ko(e)}function Po(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Vh(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Nu(e,t,n){return n=$n(n),n.tag=3,n.payload={element:null},n.callback=function(){Po(e,t)},n}function Xh(e){return e=$n(e),e.tag=3,e}function Qh(e,t,n,r){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var u=r.value;e.payload=function(){return o(u)},e.callback=function(){Vh(t,n,r)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Vh(t,n,r),typeof o!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var h=r.stack;this.componentDidCatch(r.value,{componentStack:h!==null?h:""})})}function Bb(e,t,n,r,o){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&dl(t,n,o,!0),n=Ca.current,n!==null){switch(n.tag){case 13:return Fa===null?rd():n.alternate===null&&ot===0&&(ot=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===cu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),ld(e,r,o)),!1;case 22:return n.flags|=65536,r===cu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),ld(e,r,o)),!1}throw Error(s(435,n.tag))}return ld(e,r,o),rd(),!1}if(_e)return t=Ca.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==au&&(e=Error(s(422),{cause:r}),ul(wa(e,n)))):(r!==au&&(t=Error(s(423),{cause:r}),ul(wa(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,r=wa(r,n),o=Nu(e.stateNode,r,o),fu(e,o),ot!==4&&(ot=2)),!1;var u=Error(s(520),{cause:r});if(u=wa(u,n),Ol===null?Ol=[u]:Ol.push(u),ot!==4&&(ot=2),t===null)return!0;r=wa(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Nu(n.stateNode,r,e),fu(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Fn===null||!Fn.has(u))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Xh(o),Qh(o,e,n,r),fu(n,o),!1}n=n.return}while(n!==null);return!1}var Zh=Error(s(461)),Et=!1;function Ot(e,t,n,r){t.child=e===null?Lh(t,null,n,r):fi(t,e.child,n,r)}function Kh(e,t,n,r,o){n=n.render;var u=t.ref;if("ref"in r){var m={};for(var h in r)h!=="ref"&&(m[h]=r[h])}else m=r;return wr(t),r=xu(e,t,n,m,u,o),h=vu(),e!==null&&!Et?(bu(e,t,o),wn(e,t,o)):(_e&&h&&eu(t),t.flags|=1,Ot(e,t,r,o),t.child)}function Ph(e,t,n,r,o){if(e===null){var u=n.type;return typeof u=="function"&&!Jc(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Fh(e,t,u,r,o)):(e=ko(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Yu(e,o)){var m=u.memoizedProps;if(n=n.compare,n=n!==null?n:ll,n(m,r)&&e.ref===t.ref)return wn(e,t,o)}return t.flags|=1,e=hn(u,r),e.ref=t.ref,e.return=t,t.child=e}function Fh(e,t,n,r,o){if(e!==null){var u=e.memoizedProps;if(ll(u,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=u,Yu(e,o))(e.flags&131072)!==0&&(Et=!0);else return t.lanes=e.lanes,wn(e,t,o)}return Bu(e,t,n,r,o)}function Jh(e,t,n){var r=t.pendingProps,o=r.children,u=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((t.flags&128)!==0){if(r=u!==null?u.baseLanes|n:n,e!==null){for(o=t.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;t.childLanes=u&~r}else t.childLanes=0,t.child=null;return Wh(e,t,r,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Mo(t,u!==null?u.cachePool:null),u!==null?Fm(t,u):hu(),Hh(t);else return t.lanes=t.childLanes=536870912,Wh(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(Mo(t,u.cachePool),Fm(t,u),Vn(),t.memoizedState=null):(e!==null&&Mo(t,null),hu(),Vn());return Ot(e,t,o,n),t.child}function Wh(e,t,n,r){var o=su();return o=o===null?null:{parent:bt._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&Mo(t,null),hu(),Hh(t),e!==null&&dl(e,t,r,!0),null}function Fo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Bu(e,t,n,r,o){return wr(t),n=xu(e,t,n,r,void 0,o),r=vu(),e!==null&&!Et?(bu(e,t,o),wn(e,t,o)):(_e&&r&&eu(t),t.flags|=1,Ot(e,t,n,o),t.child)}function Ih(e,t,n,r,o,u){return wr(t),t.updateQueue=null,n=Wm(t,r,n,o),Jm(e),r=vu(),e!==null&&!Et?(bu(e,t,u),wn(e,t,u)):(_e&&r&&eu(t),t.flags|=1,Ot(e,t,n,u),t.child)}function ep(e,t,n,r,o){if(wr(t),t.stateNode===null){var u=ai,m=n.contextType;typeof m=="object"&&m!==null&&(u=_t(m)),u=new n(r,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Mu,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=r,u.state=t.memoizedState,u.refs={},uu(t),m=n.contextType,u.context=typeof m=="object"&&m!==null?_t(m):ai,u.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Du(t,n,m,r),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&Mu.enqueueReplaceState(u,u.state,null),vl(t,r,u,o),xl(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){u=t.stateNode;var h=t.memoizedProps,S=Er(n,h);u.props=S;var L=u.context,V=n.contextType;m=ai,typeof V=="object"&&V!==null&&(m=_t(V));var K=n.getDerivedStateFromProps;V=typeof K=="function"||typeof u.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,V||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h||L!==m)&&$h(t,u,r,m),Un=!1;var H=t.memoizedState;u.state=H,vl(t,r,u,o),xl(),L=t.memoizedState,h||H!==L||Un?(typeof K=="function"&&(Du(t,n,K,r),L=t.memoizedState),(S=Un||Uh(t,n,S,r,H,L,m))?(V||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=L),u.props=r,u.state=L,u.context=m,r=S):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,du(e,t),m=t.memoizedProps,V=Er(n,m),u.props=V,K=t.pendingProps,H=u.context,L=n.contextType,S=ai,typeof L=="object"&&L!==null&&(S=_t(L)),h=n.getDerivedStateFromProps,(L=typeof h=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==K||H!==S)&&$h(t,u,r,S),Un=!1,H=t.memoizedState,u.state=H,vl(t,r,u,o),xl();var $=t.memoizedState;m!==K||H!==$||Un||e!==null&&e.dependencies!==null&&Oo(e.dependencies)?(typeof h=="function"&&(Du(t,n,h,r),$=t.memoizedState),(V=Un||Uh(t,n,V,r,H,$,S)||e!==null&&e.dependencies!==null&&Oo(e.dependencies))?(L||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,$,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,$,S)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=$),u.props=r,u.state=$,u.context=S,r=V):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),r=!1)}return u=r,Fo(e,t),r=(t.flags&128)!==0,u||r?(u=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&r?(t.child=fi(t,e.child,null,o),t.child=fi(t,null,n,o)):Ot(e,t,n,o),t.memoizedState=u.state,e=t.child):e=wn(e,t,o),e}function tp(e,t,n,r){return cl(),t.flags|=256,Ot(e,t,n,r),t.child}var _u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lu(e){return{baseLanes:e,cachePool:Ym()}}function Hu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Aa),e}function ap(e,t,n){var r=t.pendingProps,o=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(yt.current&2)!==0),m&&(o=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(o?Gn(t):Vn(),_e){var h=lt,S;if(S=h){e:{for(S=h,h=Pa;S.nodeType!==8;){if(!h){h=null;break e}if(S=Ha(S.nextSibling),S===null){h=null;break e}}h=S}h!==null?(t.memoizedState={dehydrated:h,treeContext:gr!==null?{id:pn,overflow:gn}:null,retryLane:536870912,hydrationErrors:null},S=la(18,null,null,0),S.stateNode=h,S.return=t,t.child=S,Xt=t,lt=null,S=!0):S=!1}S||br(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return wd(h)?t.lanes=32:t.lanes=536870912,null;yn(t)}return h=r.children,r=r.fallback,o?(Vn(),o=t.mode,h=Jo({mode:"hidden",children:h},o),r=pr(r,o,n,null),h.return=t,r.return=t,h.sibling=r,t.child=h,o=t.child,o.memoizedState=Lu(n),o.childLanes=Hu(e,m,n),t.memoizedState=_u,r):(Gn(t),Uu(t,h))}if(S=e.memoizedState,S!==null&&(h=S.dehydrated,h!==null)){if(u)t.flags&256?(Gn(t),t.flags&=-257,t=$u(e,t,n)):t.memoizedState!==null?(Vn(),t.child=e.child,t.flags|=128,t=null):(Vn(),o=r.fallback,h=t.mode,r=Jo({mode:"visible",children:r.children},h),o=pr(o,h,n,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,fi(t,e.child,null,n),r=t.child,r.memoizedState=Lu(n),r.childLanes=Hu(e,m,n),t.memoizedState=_u,t=o);else if(Gn(t),wd(h)){if(m=h.nextSibling&&h.nextSibling.dataset,m)var L=m.dgst;m=L,r=Error(s(419)),r.stack="",r.digest=m,ul({value:r,source:null,stack:null}),t=$u(e,t,n)}else if(Et||dl(e,t,n,!1),m=(n&e.childLanes)!==0,Et||m){if(m=Ke,m!==null&&(r=n&-n,r=(r&42)!==0?1:Yr(r),r=(r&(m.suspendedLanes|n))!==0?0:r,r!==0&&r!==S.retryLane))throw S.retryLane=r,ti(e,r),da(m,e,r),Zh;h.data==="$?"||rd(),t=$u(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,lt=Ha(h.nextSibling),Xt=t,_e=!0,vr=null,Pa=!1,e!==null&&(ja[Ea++]=pn,ja[Ea++]=gn,ja[Ea++]=gr,pn=e.id,gn=e.overflow,gr=t),t=Uu(t,r.children),t.flags|=4096);return t}return o?(Vn(),o=r.fallback,h=t.mode,S=e.child,L=S.sibling,r=hn(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,L!==null?o=hn(L,o):(o=pr(o,h,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,h=e.child.memoizedState,h===null?h=Lu(n):(S=h.cachePool,S!==null?(L=bt._currentValue,S=S.parent!==L?{parent:L,pool:L}:S):S=Ym(),h={baseLanes:h.baseLanes|n,cachePool:S}),o.memoizedState=h,o.childLanes=Hu(e,m,n),t.memoizedState=_u,r):(Gn(t),n=e.child,e=n.sibling,n=hn(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function Uu(e,t){return t=Jo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Jo(e,t){return e=la(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function $u(e,t,n){return fi(t,e.child,null,n),e=Uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function np(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ru(e.return,t,n)}function qu(e,t,n,r,o){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=o)}function rp(e,t,n){var r=t.pendingProps,o=r.revealOrder,u=r.tail;if(Ot(e,t,r.children,n),r=yt.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&np(e,n,t);else if(e.tag===19)np(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(F(yt,r),o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Zo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),qu(t,!1,o,n,u);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Zo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}qu(t,!0,n,null,u);break;case"together":qu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(dl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Oo(e)))}function _b(e,t,n){switch(t.tag){case 3:I(t,t.stateNode.containerInfo),Hn(t,bt,e.memoizedState.cache),cl();break;case 27:case 5:we(t);break;case 4:I(t,t.stateNode.containerInfo);break;case 10:Hn(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ap(e,t,n):(Gn(t),e=wn(e,t,n),e!==null?e.sibling:null);Gn(t);break;case 19:var o=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(dl(e,t,n,!1),r=(n&t.childLanes)!==0),o){if(r)return rp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),F(yt,yt.current),r)break;return null;case 22:case 23:return t.lanes=0,Jh(e,t,n);case 24:Hn(t,bt,e.memoizedState.cache)}return wn(e,t,n)}function ip(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Et=!0;else{if(!Yu(e,n)&&(t.flags&128)===0)return Et=!1,_b(e,t,n);Et=(e.flags&131072)!==0}else Et=!1,_e&&(t.flags&1048576)!==0&&Bm(t,Ro,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,o=r._init;if(r=o(r._payload),t.type=r,typeof r=="function")Jc(r)?(e=Er(r,e),t.tag=1,t=ep(null,t,r,e,n)):(t.tag=0,t=Bu(null,t,r,e,n));else{if(r!=null){if(o=r.$$typeof,o===W){t.tag=11,t=Kh(null,t,r,e,n);break e}else if(o===P){t.tag=14,t=Ph(null,t,r,e,n);break e}}throw t=xe(r)||r,Error(s(306,t,""))}}return t;case 0:return Bu(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,o=Er(r,t.pendingProps),ep(e,t,r,o,n);case 3:e:{if(I(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var u=t.memoizedState;o=u.element,du(e,t),vl(t,r,null,n);var m=t.memoizedState;if(r=m.cache,Hn(t,bt,r),r!==u.cache&&iu(t,[bt],n,!0),xl(),r=m.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=tp(e,t,r,n);break e}else if(r!==o){o=wa(Error(s(424)),t),ul(o),t=tp(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(lt=Ha(e.firstChild),Xt=t,_e=!0,vr=null,Pa=!0,n=Lh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(cl(),r===o){t=wn(e,t,n);break e}Ot(e,t,r,n)}t=t.child}return t;case 26:return Fo(e,t),e===null?(n=cg(t.type,null,t.pendingProps,null))?t.memoizedState=n:_e||(n=t.type,e=t.pendingProps,r=ds(ae.current).createElement(n),r[Be]=t,r[Oe]=e,Mt(r,n,e),Ie(r),t.stateNode=r):t.memoizedState=cg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return we(t),e===null&&_e&&(r=t.stateNode=lg(t.type,t.pendingProps,ae.current),Xt=t,Pa=!0,o=lt,In(t.type)?(Sd=o,lt=Ha(r.firstChild)):lt=o),Ot(e,t,t.pendingProps.children,n),Fo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((o=r=lt)&&(r=u1(r,t.type,t.pendingProps,Pa),r!==null?(t.stateNode=r,Xt=t,lt=Ha(r.firstChild),Pa=!1,o=!0):o=!1),o||br(t)),we(t),o=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,r=u.children,vd(o,u)?r=null:m!==null&&vd(o,m)&&(t.flags|=32),t.memoizedState!==null&&(o=xu(e,t,kb,null,null,n),$l._currentValue=o),Fo(e,t),Ot(e,t,r,n),t.child;case 6:return e===null&&_e&&((e=n=lt)&&(n=d1(n,t.pendingProps,Pa),n!==null?(t.stateNode=n,Xt=t,lt=null,e=!0):e=!1),e||br(t)),null;case 13:return ap(e,t,n);case 4:return I(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fi(t,null,r,n):Ot(e,t,r,n),t.child;case 11:return Kh(e,t,t.type,t.pendingProps,n);case 7:return Ot(e,t,t.pendingProps,n),t.child;case 8:return Ot(e,t,t.pendingProps.children,n),t.child;case 12:return Ot(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Hn(t,t.type,r.value),Ot(e,t,r.children,n),t.child;case 9:return o=t.type._context,r=t.pendingProps.children,wr(t),o=_t(o),r=r(o),t.flags|=1,Ot(e,t,r,n),t.child;case 14:return Ph(e,t,t.type,t.pendingProps,n);case 15:return Fh(e,t,t.type,t.pendingProps,n);case 19:return rp(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},e===null?(n=Jo(r,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=hn(e.child,r),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Jh(e,t,n);case 24:return wr(t),r=_t(bt),e===null?(o=su(),o===null&&(o=Ke,u=lu(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=n),o=u),t.memoizedState={parent:r,cache:o},uu(t),Hn(t,bt,o)):((e.lanes&n)!==0&&(du(e,t),vl(t,null,null,n),xl()),o=e.memoizedState,u=t.memoizedState,o.parent!==r?(o={parent:r,cache:r},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Hn(t,bt,r)):(r=u.cache,Hn(t,bt,r),r!==o.cache&&iu(t,[bt],n,!0))),Ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Sn(e){e.flags|=4}function lp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hg(t)){if(t=Ca.current,t!==null&&((Re&4194048)===Re?Fa!==null:(Re&62914560)!==Re&&(Re&536870912)===0||t!==Fa))throw pl=cu,Gm;e.flags|=8192}}function Wo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?va():536870912,e.lanes|=t,gi|=t)}function Cl(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&65011712,r|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lb(e,t,n){var r=t.pendingProps;switch(tu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return nt(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),vn(bt),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(sl(t)?Sn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Hm())),nt(t),null;case 26:return n=t.memoizedState,e===null?(Sn(t),n!==null?(nt(t),lp(t,n)):(nt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Sn(t),nt(t),lp(t,n)):(nt(t),t.flags&=-16777217):(e.memoizedProps!==r&&Sn(t),nt(t),t.flags&=-16777217),null;case 27:Ae(t),n=ae.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Sn(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return nt(t),null}e=te.current,sl(t)?_m(t):(e=lg(o,r,n),t.stateNode=e,Sn(t))}return nt(t),null;case 5:if(Ae(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Sn(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return nt(t),null}if(e=te.current,sl(t))_m(t);else{switch(o=ds(ae.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?o.createElement(n,{is:r.is}):o.createElement(n)}}e[Be]=t,e[Oe]=r;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(Mt(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Sn(t)}}return nt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Sn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=ae.current,sl(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,o=Xt,o!==null)switch(o.tag){case 27:case 5:r=o.memoizedProps}e[Be]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||Ip(e.nodeValue,n)),e||br(t)}else e=ds(e).createTextNode(r),e[Be]=t,t.stateNode=e}return nt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=sl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[Be]=t}else cl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),o=!1}else o=Hm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(yn(t),t):(yn(t),null)}if(yn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,o=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(o=r.alternate.memoizedState.cachePool.pool);var u=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Wo(t,t.updateQueue),nt(t),null;case 4:return ye(),e===null&&md(t.stateNode.containerInfo),nt(t),null;case 10:return vn(t.type),nt(t),null;case 19:if(X(yt),o=t.memoizedState,o===null)return nt(t),null;if(r=(t.flags&128)!==0,u=o.rendering,u===null)if(r)Cl(o,!1);else{if(ot!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Zo(e),u!==null){for(t.flags|=128,Cl(o,!1),e=u.updateQueue,t.updateQueue=e,Wo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Nm(n,e),n=n.sibling;return F(yt,yt.current&1|2),t.child}e=e.sibling}o.tail!==null&&Je()>ts&&(t.flags|=128,r=!0,Cl(o,!1),t.lanes=4194304)}else{if(!r)if(e=Zo(u),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Wo(t,e),Cl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!_e)return nt(t),null}else 2*Je()-o.renderingStartTime>ts&&n!==536870912&&(t.flags|=128,r=!0,Cl(o,!1),t.lanes=4194304);o.isBackwards?(u.sibling=t.child,t.child=u):(e=o.last,e!==null?e.sibling=u:t.child=u,o.last=u)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Je(),t.sibling=null,e=yt.current,F(yt,r?e&1|2:e&1),t):(nt(t),null);case 22:case 23:return yn(t),pu(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),n=t.updateQueue,n!==null&&Wo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&X(Sr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),vn(bt),nt(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Hb(e,t){switch(tu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(bt),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ae(t),null;case 13:if(yn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));cl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(yt),null;case 4:return ye(),null;case 10:return vn(t.type),null;case 22:case 23:return yn(t),pu(),e!==null&&X(Sr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return vn(bt),null;case 25:return null;default:return null}}function op(e,t){switch(tu(t),t.tag){case 3:vn(bt),ye();break;case 26:case 27:case 5:Ae(t);break;case 4:ye();break;case 13:yn(t);break;case 19:X(yt);break;case 10:vn(t.type);break;case 22:case 23:yn(t),pu(),e!==null&&X(Sr);break;case 24:vn(bt)}}function Al(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var o=r.next;n=o;do{if((n.tag&e)===e){r=void 0;var u=n.create,m=n.inst;r=u(),m.destroy=r}n=n.next}while(n!==o)}}catch(h){Ze(t,t.return,h)}}function Xn(e,t,n){try{var r=t.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){var m=r.inst,h=m.destroy;if(h!==void 0){m.destroy=void 0,o=t;var S=n,L=h;try{L()}catch(V){Ze(o,S,V)}}}r=r.next}while(r!==u)}}catch(V){Ze(t,t.return,V)}}function sp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Pm(t,n)}catch(r){Ze(e,e.return,r)}}}function cp(e,t,n){n.props=Er(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Ze(e,t,r)}}function Tl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(o){Ze(e,t,o)}}function Ja(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(o){Ze(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Ze(e,t,o)}else n.current=null}function up(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(o){Ze(e,e.return,o)}}function Gu(e,t,n){try{var r=e.stateNode;i1(r,e.type,n,t),r[Oe]=t}catch(o){Ze(e,e.return,o)}}function dp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&In(e.type)||e.tag===4}function Vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&In(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=us));else if(r!==4&&(r===27&&In(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xu(e,t,n),e=e.sibling;e!==null;)Xu(e,t,n),e=e.sibling}function Io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&In(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}function fp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);Mt(t,r,n),t[Be]=e,t[Oe]=n}catch(u){Ze(e,e.return,u)}}var jn=!1,ut=!1,Qu=!1,mp=typeof WeakSet=="function"?WeakSet:Set,Ct=null;function Ub(e,t){if(e=e.containerInfo,gd=xs,e=Em(e),Vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var m=0,h=-1,S=-1,L=0,V=0,K=e,H=null;t:for(;;){for(var $;K!==n||o!==0&&K.nodeType!==3||(h=m+o),K!==u||r!==0&&K.nodeType!==3||(S=m+r),K.nodeType===3&&(m+=K.nodeValue.length),($=K.firstChild)!==null;)H=K,K=$;for(;;){if(K===e)break t;if(H===n&&++L===o&&(h=m),H===u&&++V===r&&(S=m),($=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=$}n=h===-1||S===-1?null:{start:h,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(xd={focusedElem:e,selectionRange:n},xs=!1,Ct=t;Ct!==null;)if(t=Ct,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ct=e;else for(;Ct!==null;){switch(t=Ct,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,o=u.memoizedProps,u=u.memoizedState,r=n.stateNode;try{var ge=Er(n.type,o,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(ge,u),r.__reactInternalSnapshotBeforeUpdate=e}catch(me){Ze(n,n.return,me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)yd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ct=e;break}Ct=t.return}}function hp(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Qn(e,n),r&4&&Al(5,n);break;case 1:if(Qn(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Ze(n,n.return,m)}else{var o=Er(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ze(n,n.return,m)}}r&64&&sp(n),r&512&&Tl(n,n.return);break;case 3:if(Qn(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Pm(e,t)}catch(m){Ze(n,n.return,m)}}break;case 27:t===null&&r&4&&fp(n);case 26:case 5:Qn(e,n),t===null&&r&4&&up(n),r&512&&Tl(n,n.return);break;case 12:Qn(e,n);break;case 13:Qn(e,n),r&4&&xp(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Kb.bind(null,n),f1(e,n))));break;case 22:if(r=n.memoizedState!==null||jn,!r){t=t!==null&&t.memoizedState!==null||ut,o=jn;var u=ut;jn=r,(ut=t)&&!u?Zn(e,n,(n.subtreeFlags&8772)!==0):Qn(e,n),jn=o,ut=u}break;case 30:break;default:Qn(e,n)}}function pp(e){var t=e.alternate;t!==null&&(e.alternate=null,pp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Qr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var et=null,Wt=!1;function En(e,t,n){for(n=n.child;n!==null;)gp(e,t,n),n=n.sibling}function gp(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Rt,n)}catch{}switch(n.tag){case 26:ut||Ja(n,t),En(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ut||Ja(n,t);var r=et,o=Wt;In(n.type)&&(et=n.stateNode,Wt=!1),En(e,t,n),_l(n.stateNode),et=r,Wt=o;break;case 5:ut||Ja(n,t);case 6:if(r=et,o=Wt,et=null,En(e,t,n),et=r,Wt=o,et!==null)if(Wt)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(n.stateNode)}catch(u){Ze(n,t,u)}else try{et.removeChild(n.stateNode)}catch(u){Ze(n,t,u)}break;case 18:et!==null&&(Wt?(e=et,rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Vl(e)):rg(et,n.stateNode));break;case 4:r=et,o=Wt,et=n.stateNode.containerInfo,Wt=!0,En(e,t,n),et=r,Wt=o;break;case 0:case 11:case 14:case 15:ut||Xn(2,n,t),ut||Xn(4,n,t),En(e,t,n);break;case 1:ut||(Ja(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&cp(n,t,r)),En(e,t,n);break;case 21:En(e,t,n);break;case 22:ut=(r=ut)||n.memoizedState!==null,En(e,t,n),ut=r;break;default:En(e,t,n)}}function xp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vl(e)}catch(n){Ze(t,t.return,n)}}function $b(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mp),t;default:throw Error(s(435,e.tag))}}function Zu(e,t){var n=$b(e);t.forEach(function(r){var o=Pb.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}function oa(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r],u=e,m=t,h=m;e:for(;h!==null;){switch(h.tag){case 27:if(In(h.type)){et=h.stateNode,Wt=!1;break e}break;case 5:et=h.stateNode,Wt=!1;break e;case 3:case 4:et=h.stateNode.containerInfo,Wt=!0;break e}h=h.return}if(et===null)throw Error(s(160));gp(u,m,o),et=null,Wt=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)vp(t,e),t=t.sibling}var La=null;function vp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:oa(t,e),sa(e),r&4&&(Xn(3,e,e.return),Al(3,e),Xn(5,e,e.return));break;case 1:oa(t,e),sa(e),r&512&&(ut||n===null||Ja(n,n.return)),r&64&&jn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var o=La;if(oa(t,e),sa(e),r&512&&(ut||n===null||Ja(n,n.return)),r&4){var u=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(r){case"title":u=o.getElementsByTagName("title")[0],(!u||u[un]||u[Be]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(r),o.head.insertBefore(u,o.querySelector("head > title"))),Mt(u,r,n),u[Be]=e,Ie(u),r=u;break e;case"link":var m=fg("link","href",o).get(r+(n.href||""));if(m){for(var h=0;h<m.length;h++)if(u=m[h],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(h,1);break t}}u=o.createElement(r),Mt(u,r,n),o.head.appendChild(u);break;case"meta":if(m=fg("meta","content",o).get(r+(n.content||""))){for(h=0;h<m.length;h++)if(u=m[h],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(h,1);break t}}u=o.createElement(r),Mt(u,r,n),o.head.appendChild(u);break;default:throw Error(s(468,r))}u[Be]=e,Ie(u),r=u}e.stateNode=r}else mg(o,e.type,e.stateNode);else e.stateNode=dg(o,r,e.memoizedProps);else u!==r?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,r===null?mg(o,e.type,e.stateNode):dg(o,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Gu(e,e.memoizedProps,n.memoizedProps)}break;case 27:oa(t,e),sa(e),r&512&&(ut||n===null||Ja(n,n.return)),n!==null&&r&4&&Gu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(oa(t,e),sa(e),r&512&&(ut||n===null||Ja(n,n.return)),e.flags&32){o=e.stateNode;try{Kr(o,"")}catch($){Ze(e,e.return,$)}}r&4&&e.stateNode!=null&&(o=e.memoizedProps,Gu(e,o,n!==null?n.memoizedProps:o)),r&1024&&(Qu=!0);break;case 6:if(oa(t,e),sa(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch($){Ze(e,e.return,$)}}break;case 3:if(hs=null,o=La,La=fs(t.containerInfo),oa(t,e),La=o,sa(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vl(t.containerInfo)}catch($){Ze(e,e.return,$)}Qu&&(Qu=!1,bp(e));break;case 4:r=La,La=fs(e.stateNode.containerInfo),oa(t,e),sa(e),La=r;break;case 12:oa(t,e),sa(e);break;case 13:oa(t,e),sa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Iu=Je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Zu(e,r)));break;case 22:o=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,L=jn,V=ut;if(jn=L||o,ut=V||S,oa(t,e),ut=V,jn=L,sa(e),r&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||S||jn||ut||Cr(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(u=S.stateNode,o)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{h=S.stateNode;var K=S.memoizedProps.style,H=K!=null&&K.hasOwnProperty("display")?K.display:null;h.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch($){Ze(S,S.return,$)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=o?"":S.memoizedProps}catch($){Ze(S,S.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Zu(e,n))));break;case 19:oa(t,e),sa(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Zu(e,r)));break;case 30:break;case 21:break;default:oa(t,e),sa(e)}}function sa(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(dp(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var o=n.stateNode,u=Vu(e);Io(e,u,o);break;case 5:var m=n.stateNode;n.flags&32&&(Kr(m,""),n.flags&=-33);var h=Vu(e);Io(e,h,m);break;case 3:case 4:var S=n.stateNode.containerInfo,L=Vu(e);Xu(e,L,S);break;default:throw Error(s(161))}}catch(V){Ze(e,e.return,V)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hp(e,t.alternate,t),t=t.sibling}function Cr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xn(4,t,t.return),Cr(t);break;case 1:Ja(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&cp(t,t.return,n),Cr(t);break;case 27:_l(t.stateNode);case 26:case 5:Ja(t,t.return),Cr(t);break;case 22:t.memoizedState===null&&Cr(t);break;case 30:Cr(t);break;default:Cr(t)}e=e.sibling}}function Zn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,o=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:Zn(o,u,n),Al(4,u);break;case 1:if(Zn(o,u,n),r=u,o=r.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(L){Ze(r,r.return,L)}if(r=u,o=r.updateQueue,o!==null){var h=r.stateNode;try{var S=o.shared.hiddenCallbacks;if(S!==null)for(o.shared.hiddenCallbacks=null,o=0;o<S.length;o++)Km(S[o],h)}catch(L){Ze(r,r.return,L)}}n&&m&64&&sp(u),Tl(u,u.return);break;case 27:fp(u);case 26:case 5:Zn(o,u,n),n&&r===null&&m&4&&up(u),Tl(u,u.return);break;case 12:Zn(o,u,n);break;case 13:Zn(o,u,n),n&&m&4&&xp(o,u);break;case 22:u.memoizedState===null&&Zn(o,u,n),Tl(u,u.return);break;case 30:break;default:Zn(o,u,n)}t=t.sibling}}function Ku(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fl(n))}function Pu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fl(e))}function Wa(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yp(e,t,n,r),t=t.sibling}function yp(e,t,n,r){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Wa(e,t,n,r),o&2048&&Al(9,t);break;case 1:Wa(e,t,n,r);break;case 3:Wa(e,t,n,r),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fl(e)));break;case 12:if(o&2048){Wa(e,t,n,r),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,h=u.onPostCommit;typeof h=="function"&&h(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ze(t,t.return,S)}}else Wa(e,t,n,r);break;case 13:Wa(e,t,n,r);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?Wa(e,t,n,r):kl(e,t):u._visibility&2?Wa(e,t,n,r):(u._visibility|=2,mi(e,t,n,r,(t.subtreeFlags&10256)!==0)),o&2048&&Ku(m,t);break;case 24:Wa(e,t,n,r),o&2048&&Pu(t.alternate,t);break;default:Wa(e,t,n,r)}}function mi(e,t,n,r,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,m=t,h=n,S=r,L=m.flags;switch(m.tag){case 0:case 11:case 15:mi(u,m,h,S,o),Al(8,m);break;case 23:break;case 22:var V=m.stateNode;m.memoizedState!==null?V._visibility&2?mi(u,m,h,S,o):kl(u,m):(V._visibility|=2,mi(u,m,h,S,o)),o&&L&2048&&Ku(m.alternate,m);break;case 24:mi(u,m,h,S,o),o&&L&2048&&Pu(m.alternate,m);break;default:mi(u,m,h,S,o)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,o=r.flags;switch(r.tag){case 22:kl(n,r),o&2048&&Ku(r.alternate,r);break;case 24:kl(n,r),o&2048&&Pu(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var zl=8192;function hi(e){if(e.subtreeFlags&zl)for(e=e.child;e!==null;)wp(e),e=e.sibling}function wp(e){switch(e.tag){case 26:hi(e),e.flags&zl&&e.memoizedState!==null&&C1(La,e.memoizedState,e.memoizedProps);break;case 5:hi(e);break;case 3:case 4:var t=La;La=fs(e.stateNode.containerInfo),hi(e),La=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=zl,zl=16777216,hi(e),zl=t):hi(e));break;default:hi(e)}}function Sp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Rl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Ct=r,Ep(r,e)}Sp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jp(e),e=e.sibling}function jp(e){switch(e.tag){case 0:case 11:case 15:Rl(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:Rl(e);break;case 12:Rl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,es(e)):Rl(e);break;default:Rl(e)}}function es(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Ct=r,Ep(r,e)}Sp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xn(8,t,t.return),es(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,es(t));break;default:es(t)}e=e.sibling}}function Ep(e,t){for(;Ct!==null;){var n=Ct;switch(n.tag){case 0:case 11:case 15:Xn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fl(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Ct=r;else e:for(n=e;Ct!==null;){r=Ct;var o=r.sibling,u=r.return;if(pp(r),r===n){Ct=null;break e}if(o!==null){o.return=u,Ct=o;break e}Ct=u}}}var qb={getCacheForType:function(e){var t=_t(bt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Yb=typeof WeakMap=="function"?WeakMap:Map,qe=0,Ke=null,ke=null,Re=0,Ye=0,ca=null,Kn=!1,pi=!1,Fu=!1,Cn=0,ot=0,Pn=0,Ar=0,Ju=0,Aa=0,gi=0,Ol=null,It=null,Wu=!1,Iu=0,ts=1/0,as=null,Fn=null,Dt=0,Jn=null,xi=null,vi=0,ed=0,td=null,Cp=null,Dl=0,ad=null;function ua(){if((qe&2)!==0&&Re!==0)return Re&-Re;if(U.T!==null){var e=ii;return e!==0?e:cd()}return cn()}function Ap(){Aa===0&&(Aa=(Re&536870912)===0||_e?Ur():536870912);var e=Ca.current;return e!==null&&(e.flags|=32),Aa}function da(e,t,n){(e===Ke&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(bi(e,0),Wn(e,Re,Aa,!1)),it(e,n),((qe&2)===0||e!==Ke)&&(e===Ke&&((qe&2)===0&&(Ar|=n),ot===4&&Wn(e,Re,Aa,!1)),Ia(e))}function Tp(e,t,n){if((qe&6)!==0)throw Error(s(327));var r=!n&&(t&124)===0&&(t&e.expiredLanes)===0||on(e,t),o=r?Xb(e,t):id(e,t,!0),u=r;do{if(o===0){pi&&!r&&Wn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Gb(n)){o=id(e,t,!1),u=!1;continue}if(o===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var h=e;o=Ol;var S=h.current.memoizedState.isDehydrated;if(S&&(bi(h,m).flags|=256),m=id(h,m,!1),m!==2){if(Fu&&!S){h.errorRecoveryDisabledLanes|=u,Ar|=u,o=4;break e}u=It,It=o,u!==null&&(It===null?It=u:It.push.apply(It,u))}o=m}if(u=!1,o!==2)continue}}if(o===1){bi(e,0),Wn(e,t,0,!0);break}e:{switch(r=e,u=o,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Wn(r,t,Aa,!Kn);break e;case 2:It=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(o=Iu+300-Je(),10<o)){if(Wn(r,t,Aa,!Kn),Xa(r,0,!0)!==0)break e;r.timeoutHandle=ag(kp.bind(null,r,n,It,as,Wu,t,Aa,Ar,gi,Kn,u,2,-0,0),o);break e}kp(r,n,It,as,Wu,t,Aa,Ar,gi,Kn,u,0,-0,0)}}break}while(!0);Ia(e)}function kp(e,t,n,r,o,u,m,h,S,L,V,K,H,$){if(e.timeoutHandle=-1,K=t.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(Ul={stylesheets:null,count:0,unsuspend:E1},wp(t),K=A1(),K!==null)){e.cancelPendingCommit=K(Bp.bind(null,e,t,u,n,r,o,m,h,S,V,1,H,$)),Wn(e,u,m,!L);return}Bp(e,t,u,n,r,o,m,h,S)}function Gb(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var o=n[r],u=o.getSnapshot;o=o.value;try{if(!ia(u(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wn(e,t,n,r){t&=~Ju,t&=~Ar,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var o=t;0<o;){var u=31-Ue(o),m=1<<u;r[u]=-1,o&=~m}n!==0&&Mn(e,n,t)}function ns(){return(qe&6)===0?(Ml(0),!1):!0}function nd(){if(ke!==null){if(Ye===0)var e=ke.return;else e=ke,xn=yr=null,yu(e),di=null,jl=0,e=ke;for(;e!==null;)op(e.alternate,e),e=e.return;ke=null}}function bi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,o1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),nd(),Ke=e,ke=n=hn(e.current,null),Re=t,Ye=0,ca=null,Kn=!1,pi=on(e,t),Fu=!1,gi=Aa=Ju=Ar=Pn=ot=0,It=Ol=null,Wu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var o=31-Ue(r),u=1<<o;t|=e[o],r&=~u}return Cn=t,Co(),n}function zp(e,t){Ce=null,U.H=Vo,t===hl||t===No?(t=Qm(),Ye=3):t===Gm?(t=Qm(),Ye=4):Ye=t===Zh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ca=t,ke===null&&(ot=1,Po(e,wa(t,e.current)))}function Rp(){var e=U.H;return U.H=Vo,e===null?Vo:e}function Op(){var e=U.A;return U.A=qb,e}function rd(){ot=4,Kn||(Re&4194048)!==Re&&Ca.current!==null||(pi=!0),(Pn&134217727)===0&&(Ar&134217727)===0||Ke===null||Wn(Ke,Re,Aa,!1)}function id(e,t,n){var r=qe;qe|=2;var o=Rp(),u=Op();(Ke!==e||Re!==t)&&(as=null,bi(e,t)),t=!1;var m=ot;e:do try{if(Ye!==0&&ke!==null){var h=ke,S=ca;switch(Ye){case 8:nd(),m=6;break e;case 3:case 2:case 9:case 6:Ca.current===null&&(t=!0);var L=Ye;if(Ye=0,ca=null,yi(e,h,S,L),n&&pi){m=0;break e}break;default:L=Ye,Ye=0,ca=null,yi(e,h,S,L)}}Vb(),m=ot;break}catch(V){zp(e,V)}while(!0);return t&&e.shellSuspendCounter++,xn=yr=null,qe=r,U.H=o,U.A=u,ke===null&&(Ke=null,Re=0,Co()),m}function Vb(){for(;ke!==null;)Dp(ke)}function Xb(e,t){var n=qe;qe|=2;var r=Rp(),o=Op();Ke!==e||Re!==t?(as=null,ts=Je()+500,bi(e,t)):pi=on(e,t);e:do try{if(Ye!==0&&ke!==null){t=ke;var u=ca;t:switch(Ye){case 1:Ye=0,ca=null,yi(e,t,u,1);break;case 2:case 9:if(Vm(u)){Ye=0,ca=null,Mp(t);break}t=function(){Ye!==2&&Ye!==9||Ke!==e||(Ye=7),Ia(e)},u.then(t,t);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Vm(u)?(Ye=0,ca=null,Mp(t)):(Ye=0,ca=null,yi(e,t,u,7));break;case 5:var m=null;switch(ke.tag){case 26:m=ke.memoizedState;case 5:case 27:var h=ke;if(!m||hg(m)){Ye=0,ca=null;var S=h.sibling;if(S!==null)ke=S;else{var L=h.return;L!==null?(ke=L,rs(L)):ke=null}break t}}Ye=0,ca=null,yi(e,t,u,5);break;case 6:Ye=0,ca=null,yi(e,t,u,6);break;case 8:nd(),ot=6;break e;default:throw Error(s(462))}}Qb();break}catch(V){zp(e,V)}while(!0);return xn=yr=null,U.H=r,U.A=o,qe=n,ke!==null?0:(Ke=null,Re=0,Co(),ot)}function Qb(){for(;ke!==null&&!ta();)Dp(ke)}function Dp(e){var t=ip(e.alternate,e,Cn);e.memoizedProps=e.pendingProps,t===null?rs(e):ke=t}function Mp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ih(n,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=Ih(n,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:yu(t);default:op(n,t),t=ke=Nm(t,Cn),t=ip(n,t,Cn)}e.memoizedProps=e.pendingProps,t===null?rs(e):ke=t}function yi(e,t,n,r){xn=yr=null,yu(t),di=null,jl=0;var o=t.return;try{if(Bb(e,o,t,n,Re)){ot=1,Po(e,wa(n,e.current)),ke=null;return}}catch(u){if(o!==null)throw ke=o,u;ot=1,Po(e,wa(n,e.current)),ke=null;return}t.flags&32768?(_e||r===1?e=!0:pi||(Re&536870912)!==0?e=!1:(Kn=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ca.current,r!==null&&r.tag===13&&(r.flags|=16384))),Np(t,e)):rs(t)}function rs(e){var t=e;do{if((t.flags&32768)!==0){Np(t,Kn);return}e=t.return;var n=Lb(t.alternate,t,Cn);if(n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);ot===0&&(ot=5)}function Np(e,t){do{var n=Hb(e.alternate,e);if(n!==null){n.flags&=32767,ke=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ke=e;return}ke=e=n}while(e!==null);ot=6,ke=null}function Bp(e,t,n,r,o,u,m,h,S){e.cancelPendingCommit=null;do is();while(Dt!==0);if((qe&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=Pc,sn(e,n,u,m,h,S),e===Ke&&(ke=Ke=null,Re=0),xi=t,Jn=e,vi=n,ed=u,td=o,Cp=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fb(Pt,function(){return $p(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,o=J.p,J.p=2,m=qe,qe|=4;try{Ub(e,t,n)}finally{qe=m,J.p=o,U.T=r}}Dt=1,_p(),Lp(),Hp()}}function _p(){if(Dt===1){Dt=0;var e=Jn,t=xi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=U.T,U.T=null;var r=J.p;J.p=2;var o=qe;qe|=4;try{vp(t,e);var u=xd,m=Em(e.containerInfo),h=u.focusedElem,S=u.selectionRange;if(m!==h&&h&&h.ownerDocument&&jm(h.ownerDocument.documentElement,h)){if(S!==null&&Vc(h)){var L=S.start,V=S.end;if(V===void 0&&(V=L),"selectionStart"in h)h.selectionStart=L,h.selectionEnd=Math.min(V,h.value.length);else{var K=h.ownerDocument||document,H=K&&K.defaultView||window;if(H.getSelection){var $=H.getSelection(),ge=h.textContent.length,me=Math.min(S.start,ge),Qe=S.end===void 0?me:Math.min(S.end,ge);!$.extend&&me>Qe&&(m=Qe,Qe=me,me=m);var R=Sm(h,me),C=Sm(h,Qe);if(R&&C&&($.rangeCount!==1||$.anchorNode!==R.node||$.anchorOffset!==R.offset||$.focusNode!==C.node||$.focusOffset!==C.offset)){var M=K.createRange();M.setStart(R.node,R.offset),$.removeAllRanges(),me>Qe?($.addRange(M),$.extend(C.node,C.offset)):(M.setEnd(C.node,C.offset),$.addRange(M))}}}}for(K=[],$=h;$=$.parentNode;)$.nodeType===1&&K.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<K.length;h++){var Q=K[h];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}xs=!!gd,xd=gd=null}finally{qe=o,J.p=r,U.T=n}}e.current=t,Dt=2}}function Lp(){if(Dt===2){Dt=0;var e=Jn,t=xi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=U.T,U.T=null;var r=J.p;J.p=2;var o=qe;qe|=4;try{hp(e,t.alternate,t)}finally{qe=o,J.p=r,U.T=n}}Dt=3}}function Hp(){if(Dt===4||Dt===3){Dt=0,aa();var e=Jn,t=xi,n=vi,r=Cp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Dt=5:(Dt=0,xi=Jn=null,Up(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Fn=null),Gr(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Rt,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=U.T,o=J.p,J.p=2,U.T=null;try{for(var u=e.onRecoverableError,m=0;m<r.length;m++){var h=r[m];u(h.value,{componentStack:h.stack})}}finally{U.T=t,J.p=o}}(vi&3)!==0&&is(),Ia(e),o=e.pendingLanes,(n&4194090)!==0&&(o&42)!==0?e===ad?Dl++:(Dl=0,ad=e):Dl=0,Ml(0)}}function Up(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fl(t)))}function is(e){return _p(),Lp(),Hp(),$p()}function $p(){if(Dt!==5)return!1;var e=Jn,t=ed;ed=0;var n=Gr(vi),r=U.T,o=J.p;try{J.p=32>n?32:n,U.T=null,n=td,td=null;var u=Jn,m=vi;if(Dt=0,xi=Jn=null,vi=0,(qe&6)!==0)throw Error(s(331));var h=qe;if(qe|=4,jp(u.current),yp(u,u.current,m,n),qe=h,Ml(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Rt,u)}catch{}return!0}finally{J.p=o,U.T=r,Up(e,t)}}function qp(e,t,n){t=wa(n,t),t=Nu(e.stateNode,t,2),e=qn(e,t,2),e!==null&&(it(e,2),Ia(e))}function Ze(e,t,n){if(e.tag===3)qp(e,e,n);else for(;t!==null;){if(t.tag===3){qp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))){e=wa(n,e),n=Xh(2),r=qn(t,n,2),r!==null&&(Qh(n,r,t,e),it(r,2),Ia(r));break}}t=t.return}}function ld(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yb;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(Fu=!0,o.add(n),e=Zb.bind(null,e,t,n),t.then(e,e))}function Zb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ke===e&&(Re&n)===n&&(ot===4||ot===3&&(Re&62914560)===Re&&300>Je()-Iu?(qe&2)===0&&bi(e,0):Ju|=n,gi===Re&&(gi=0)),Ia(e)}function Yp(e,t){t===0&&(t=va()),e=ti(e,t),e!==null&&(it(e,t),Ia(e))}function Kb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yp(e,n)}function Pb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),Yp(e,n)}function Fb(e,t){return tt(e,t)}var ls=null,wi=null,od=!1,os=!1,sd=!1,Tr=0;function Ia(e){e!==wi&&e.next===null&&(wi===null?ls=wi=e:wi=wi.next=e),os=!0,od||(od=!0,Wb())}function Ml(e,t){if(!sd&&os){sd=!0;do for(var n=!1,r=ls;r!==null;){if(e!==0){var o=r.pendingLanes;if(o===0)var u=0;else{var m=r.suspendedLanes,h=r.pingedLanes;u=(1<<31-Ue(42|e)+1)-1,u&=o&~(m&~h),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Qp(r,u))}else u=Re,u=Xa(r,r===Ke?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||on(r,u)||(n=!0,Qp(r,u));r=r.next}while(n);sd=!1}}function Jb(){Gp()}function Gp(){os=od=!1;var e=0;Tr!==0&&(l1()&&(e=Tr),Tr=0);for(var t=Je(),n=null,r=ls;r!==null;){var o=r.next,u=Vp(r,t);u===0?(r.next=null,n===null?ls=o:n.next=o,o===null&&(wi=n)):(n=r,(e!==0||(u&3)!==0)&&(os=!0)),r=o}Ml(e)}function Vp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-Ue(u),h=1<<m,S=o[m];S===-1?((h&n)===0||(h&r)!==0)&&(o[m]=ho(h,t)):S<=t&&(e.expiredLanes|=h),u&=~h}if(t=Ke,n=Re,n=Xa(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&mt(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||on(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&mt(r),Gr(n)){case 2:case 8:n=Da;break;case 32:n=Pt;break;case 268435456:n=wt;break;default:n=Pt}return r=Xp.bind(null,e),n=tt(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&mt(r),e.callbackPriority=2,e.callbackNode=null,2}function Xp(e,t){if(Dt!==0&&Dt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(is()&&e.callbackNode!==n)return null;var r=Re;return r=Xa(e,e===Ke?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Tp(e,r,t),Vp(e,Je()),e.callbackNode!=null&&e.callbackNode===n?Xp.bind(null,e):null)}function Qp(e,t){if(is())return null;Tp(e,t,!0)}function Wb(){s1(function(){(qe&6)!==0?tt(st,Jb):Gp()})}function cd(){return Tr===0&&(Tr=Ur()),Tr}function Zp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vo(""+e)}function Kp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ib(e,t,n,r,o){if(t==="submit"&&n&&n.stateNode===o){var u=Zp((o[Oe]||null).action),m=r.submitter;m&&(t=(t=m[Oe]||null)?Zp(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var h=new So("action","action",null,r,o);e.push({event:h,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tr!==0){var S=m?Kp(o,m):new FormData(o);zu(n,{pending:!0,data:S,method:o.method,action:u},null,S)}}else typeof u=="function"&&(h.preventDefault(),S=m?Kp(o,m):new FormData(o),zu(n,{pending:!0,data:S,method:o.method,action:u},u,S))},currentTarget:o}]})}}for(var ud=0;ud<Kc.length;ud++){var dd=Kc[ud],e1=dd.toLowerCase(),t1=dd[0].toUpperCase()+dd.slice(1);_a(e1,"on"+t1)}_a(Tm,"onAnimationEnd"),_a(km,"onAnimationIteration"),_a(zm,"onAnimationStart"),_a("dblclick","onDoubleClick"),_a("focusin","onFocus"),_a("focusout","onBlur"),_a(vb,"onTransitionRun"),_a(bb,"onTransitionStart"),_a(yb,"onTransitionCancel"),_a(Rm,"onTransitionEnd"),fn("onMouseEnter",["mouseout","mouseover"]),fn("onMouseLeave",["mouseout","mouseover"]),fn("onPointerEnter",["pointerout","pointerover"]),fn("onPointerLeave",["pointerout","pointerover"]),Qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nl));function Pp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var m=r.length-1;0<=m;m--){var h=r[m],S=h.instance,L=h.currentTarget;if(h=h.listener,S!==u&&o.isPropagationStopped())break e;u=h,o.currentTarget=L;try{u(o)}catch(V){Ko(V)}o.currentTarget=null,u=S}else for(m=0;m<r.length;m++){if(h=r[m],S=h.instance,L=h.currentTarget,h=h.listener,S!==u&&o.isPropagationStopped())break e;u=h,o.currentTarget=L;try{u(o)}catch(V){Ko(V)}o.currentTarget=null,u=S}}}}function ze(e,t){var n=t[Xr];n===void 0&&(n=t[Xr]=new Set);var r=e+"__bubble";n.has(r)||(Fp(t,e,2,!1),n.add(r))}function fd(e,t,n){var r=0;t&&(r|=4),Fp(n,e,r,t)}var ss="_reactListening"+Math.random().toString(36).slice(2);function md(e){if(!e[ss]){e[ss]=!0,po.forEach(function(n){n!=="selectionchange"&&(a1.has(n)||fd(n,!1,e),fd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ss]||(t[ss]=!0,fd("selectionchange",!1,t))}}function Fp(e,t,n,r){switch(yg(t)){case 2:var o=z1;break;case 8:o=R1;break;default:o=Td}n=o.bind(null,t,n,e),o=void 0,!Bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function hd(e,t,n,r,o){var u=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var h=r.stateNode.containerInfo;if(h===o)break;if(m===4)for(m=r.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===o)return;m=m.return}for(;h!==null;){if(m=Nn(h),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){r=u=m;continue e}h=h.parentNode}}r=r.return}nm(function(){var L=u,V=Mc(n),K=[];e:{var H=Om.get(e);if(H!==void 0){var $=So,ge=e;switch(e){case"keypress":if(yo(n)===0)break e;case"keydown":case"keyup":$=Fv;break;case"focusin":ge="focus",$=Uc;break;case"focusout":ge="blur",$=Uc;break;case"beforeblur":case"afterblur":$=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Iv;break;case Tm:case km:case zm:$=qv;break;case Rm:$=tb;break;case"scroll":case"scrollend":$=_v;break;case"wheel":$=nb;break;case"copy":case"cut":case"paste":$=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=sm;break;case"toggle":case"beforetoggle":$=ib}var me=(t&4)!==0,Qe=!me&&(e==="scroll"||e==="scrollend"),R=me?H!==null?H+"Capture":null:H;me=[];for(var C=L,M;C!==null;){var Q=C;if(M=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||M===null||R===null||(Q=Ii(C,R),Q!=null&&me.push(Bl(C,Q,M))),Qe)break;C=C.return}0<me.length&&(H=new $(H,ge,null,n,V),K.push({event:H,listeners:me}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",H&&n!==Dc&&(ge=n.relatedTarget||n.fromElement)&&(Nn(ge)||ge[pt]))break e;if(($||H)&&(H=V.window===V?V:(H=V.ownerDocument)?H.defaultView||H.parentWindow:window,$?(ge=n.relatedTarget||n.toElement,$=L,ge=ge?Nn(ge):null,ge!==null&&(Qe=f(ge),me=ge.tag,ge!==Qe||me!==5&&me!==27&&me!==6)&&(ge=null)):($=null,ge=L),$!==ge)){if(me=lm,Q="onMouseLeave",R="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(me=sm,Q="onPointerLeave",R="onPointerEnter",C="pointer"),Qe=$==null?H:_n($),M=ge==null?H:_n(ge),H=new me(Q,C+"leave",$,n,V),H.target=Qe,H.relatedTarget=M,Q=null,Nn(V)===L&&(me=new me(R,C+"enter",ge,n,V),me.target=M,me.relatedTarget=Qe,Q=me),Qe=Q,$&&ge)t:{for(me=$,R=ge,C=0,M=me;M;M=Si(M))C++;for(M=0,Q=R;Q;Q=Si(Q))M++;for(;0<C-M;)me=Si(me),C--;for(;0<M-C;)R=Si(R),M--;for(;C--;){if(me===R||R!==null&&me===R.alternate)break t;me=Si(me),R=Si(R)}me=null}else me=null;$!==null&&Jp(K,H,$,me,!1),ge!==null&&Qe!==null&&Jp(K,Qe,ge,me,!0)}}e:{if(H=L?_n(L):window,$=H.nodeName&&H.nodeName.toLowerCase(),$==="select"||$==="input"&&H.type==="file")var se=gm;else if(hm(H))if(xm)se=pb;else{se=mb;var Te=fb}else $=H.nodeName,!$||$.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?L&&Oc(L.elementType)&&(se=gm):se=hb;if(se&&(se=se(e,L))){pm(K,se,n,V);break e}Te&&Te(e,H,L),e==="focusout"&&L&&H.type==="number"&&L.memoizedProps.value!=null&&Rc(H,"number",H.value)}switch(Te=L?_n(L):window,e){case"focusin":(hm(Te)||Te.contentEditable==="true")&&(Wr=Te,Xc=L,ol=null);break;case"focusout":ol=Xc=Wr=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,Cm(K,n,V);break;case"selectionchange":if(xb)break;case"keydown":case"keyup":Cm(K,n,V)}var ue;if(qc)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Jr?fm(e,n)&&(pe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(pe="onCompositionStart");pe&&(cm&&n.locale!=="ko"&&(Jr||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Jr&&(ue=rm()):(Ln=V,_c="value"in Ln?Ln.value:Ln.textContent,Jr=!0)),Te=cs(L,pe),0<Te.length&&(pe=new om(pe,e,null,n,V),K.push({event:pe,listeners:Te}),ue?pe.data=ue:(ue=mm(n),ue!==null&&(pe.data=ue)))),(ue=ob?sb(e,n):cb(e,n))&&(pe=cs(L,"onBeforeInput"),0<pe.length&&(Te=new om("onBeforeInput","beforeinput",null,n,V),K.push({event:Te,listeners:pe}),Te.data=ue)),Ib(K,e,L,n,V)}Pp(K,t)})}function Bl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cs(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=Ii(e,n),o!=null&&r.unshift(Bl(e,o,u)),o=Ii(e,t),o!=null&&r.push(Bl(e,o,u))),e.tag===3)return r;e=e.return}return[]}function Si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jp(e,t,n,r,o){for(var u=t._reactName,m=[];n!==null&&n!==r;){var h=n,S=h.alternate,L=h.stateNode;if(h=h.tag,S!==null&&S===r)break;h!==5&&h!==26&&h!==27||L===null||(S=L,o?(L=Ii(n,u),L!=null&&m.unshift(Bl(n,L,S))):o||(L=Ii(n,u),L!=null&&m.push(Bl(n,L,S)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var n1=/\r\n?/g,r1=/\u0000|\uFFFD/g;function Wp(e){return(typeof e=="string"?e:""+e).replace(n1,`
`).replace(r1,"")}function Ip(e,t){return t=Wp(t),Wp(e)===t}function us(){}function Xe(e,t,n,r,o,u){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||Kr(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&Kr(e,""+r);break;case"className":at(e,"class",r);break;case"tabIndex":at(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":at(e,n,r);break;case"style":tm(e,r,u);break;case"data":if(t!=="object"){at(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=vo(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Xe(e,t,"name",o.name,o,null),Xe(e,t,"formEncType",o.formEncType,o,null),Xe(e,t,"formMethod",o.formMethod,o,null),Xe(e,t,"formTarget",o.formTarget,o,null)):(Xe(e,t,"encType",o.encType,o,null),Xe(e,t,"method",o.method,o,null),Xe(e,t,"target",o.target,o,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=vo(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=us);break;case"onScroll":r!=null&&ze("scroll",e);break;case"onScrollEnd":r!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=vo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":ze("beforetoggle",e),ze("toggle",e),Ge(e,"popover",r);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ge(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Nv.get(n)||n,Ge(e,n,r))}}function pd(e,t,n,r,o,u){switch(n){case"style":tm(e,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof r=="string"?Kr(e,r):(typeof r=="number"||typeof r=="bigint")&&Kr(e,""+r);break;case"onScroll":r!=null&&ze("scroll",e);break;case"onScrollEnd":r!=null&&ze("scrollend",e);break;case"onClick":r!=null&&(e.onclick=us);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wi.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),u=e[Oe]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,o),typeof r=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,o);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):Ge(e,n,r)}}}function Mt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var r=!1,o=!1,u;for(u in n)if(n.hasOwnProperty(u)){var m=n[u];if(m!=null)switch(u){case"src":r=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Xe(e,t,u,m,n,null)}}o&&Xe(e,t,"srcSet",n.srcSet,n,null),r&&Xe(e,t,"src",n.src,n,null);return;case"input":ze("invalid",e);var h=u=m=o=null,S=null,L=null;for(r in n)if(n.hasOwnProperty(r)){var V=n[r];if(V!=null)switch(r){case"name":o=V;break;case"type":m=V;break;case"checked":S=V;break;case"defaultChecked":L=V;break;case"value":u=V;break;case"defaultValue":h=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,t));break;default:Xe(e,t,r,V,n,null)}}Jf(e,u,h,S,L,m,o,!1),go(e);return;case"select":ze("invalid",e),r=m=u=null;for(o in n)if(n.hasOwnProperty(o)&&(h=n[o],h!=null))switch(o){case"value":u=h;break;case"defaultValue":m=h;break;case"multiple":r=h;default:Xe(e,t,o,h,n,null)}t=u,n=m,e.multiple=!!r,t!=null?Zr(e,!!r,t,!1):n!=null&&Zr(e,!!r,n,!0);return;case"textarea":ze("invalid",e),u=o=r=null;for(m in n)if(n.hasOwnProperty(m)&&(h=n[m],h!=null))switch(m){case"value":r=h;break;case"defaultValue":o=h;break;case"children":u=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:Xe(e,t,m,h,n,null)}If(e,r,o,u),go(e);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(r=n[S],r!=null))switch(S){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(e,t,S,r,n,null)}return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(r=0;r<Nl.length;r++)ze(Nl[r],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in n)if(n.hasOwnProperty(L)&&(r=n[L],r!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Xe(e,t,L,r,n,null)}return;default:if(Oc(t)){for(V in n)n.hasOwnProperty(V)&&(r=n[V],r!==void 0&&pd(e,t,V,r,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(r=n[h],r!=null&&Xe(e,t,h,r,n,null))}function i1(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,m=null,h=null,S=null,L=null,V=null;for($ in n){var K=n[$];if(n.hasOwnProperty($)&&K!=null)switch($){case"checked":break;case"value":break;case"defaultValue":S=K;default:r.hasOwnProperty($)||Xe(e,t,$,null,r,K)}}for(var H in r){var $=r[H];if(K=n[H],r.hasOwnProperty(H)&&($!=null||K!=null))switch(H){case"type":u=$;break;case"name":o=$;break;case"checked":L=$;break;case"defaultChecked":V=$;break;case"value":m=$;break;case"defaultValue":h=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,t));break;default:$!==K&&Xe(e,t,H,$,r,K)}}zc(e,m,h,S,L,V,u,o);return;case"select":$=m=h=H=null;for(u in n)if(S=n[u],n.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":$=S;default:r.hasOwnProperty(u)||Xe(e,t,u,null,r,S)}for(o in r)if(u=r[o],S=n[o],r.hasOwnProperty(o)&&(u!=null||S!=null))switch(o){case"value":H=u;break;case"defaultValue":h=u;break;case"multiple":m=u;default:u!==S&&Xe(e,t,o,u,r,S)}t=h,n=m,r=$,H!=null?Zr(e,!!n,H,!1):!!r!=!!n&&(t!=null?Zr(e,!!n,t,!0):Zr(e,!!n,n?[]:"",!1));return;case"textarea":$=H=null;for(h in n)if(o=n[h],n.hasOwnProperty(h)&&o!=null&&!r.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Xe(e,t,h,null,r,o)}for(m in r)if(o=r[m],u=n[m],r.hasOwnProperty(m)&&(o!=null||u!=null))switch(m){case"value":H=o;break;case"defaultValue":$=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==u&&Xe(e,t,m,o,r,u)}Wf(e,H,$);return;case"option":for(var ge in n)if(H=n[ge],n.hasOwnProperty(ge)&&H!=null&&!r.hasOwnProperty(ge))switch(ge){case"selected":e.selected=!1;break;default:Xe(e,t,ge,null,r,H)}for(S in r)if(H=r[S],$=n[S],r.hasOwnProperty(S)&&H!==$&&(H!=null||$!=null))switch(S){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Xe(e,t,S,H,r,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in n)H=n[me],n.hasOwnProperty(me)&&H!=null&&!r.hasOwnProperty(me)&&Xe(e,t,me,null,r,H);for(L in r)if(H=r[L],$=n[L],r.hasOwnProperty(L)&&H!==$&&(H!=null||$!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,t));break;default:Xe(e,t,L,H,r,$)}return;default:if(Oc(t)){for(var Qe in n)H=n[Qe],n.hasOwnProperty(Qe)&&H!==void 0&&!r.hasOwnProperty(Qe)&&pd(e,t,Qe,void 0,r,H);for(V in r)H=r[V],$=n[V],!r.hasOwnProperty(V)||H===$||H===void 0&&$===void 0||pd(e,t,V,H,r,$);return}}for(var R in n)H=n[R],n.hasOwnProperty(R)&&H!=null&&!r.hasOwnProperty(R)&&Xe(e,t,R,null,r,H);for(K in r)H=r[K],$=n[K],!r.hasOwnProperty(K)||H===$||H==null&&$==null||Xe(e,t,K,H,r,$)}var gd=null,xd=null;function ds(e){return e.nodeType===9?e:e.ownerDocument}function eg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bd=null;function l1(){var e=window.event;return e&&e.type==="popstate"?e===bd?!1:(bd=e,!0):(bd=null,!1)}var ag=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,s1=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(e){return ng.resolve(null).then(e).catch(c1)}:ag;function c1(e){setTimeout(function(){throw e})}function In(e){return e==="head"}function rg(e,t){var n=t,r=0,o=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<r&&8>r){n=r;var m=e.ownerDocument;if(n&1&&_l(m.documentElement),n&2&&_l(m.body),n&4)for(n=m.head,_l(n),m=n.firstChild;m;){var h=m.nextSibling,S=m.nodeName;m[un]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&m.rel.toLowerCase()==="stylesheet"||n.removeChild(m),m=h}}if(o===0){e.removeChild(u),Vl(t);return}o--}else n==="$"||n==="$?"||n==="$!"?o++:r=n.charCodeAt(0)-48;else r=0;n=u}while(n);Vl(t)}function yd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":yd(n),Qr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function u1(e,t,n,r){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[un])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ha(e.nextSibling),e===null)break}return null}function d1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ha(e.nextSibling),e===null))return null;return e}function wd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function f1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ha(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Sd=null;function ig(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function lg(e,t,n){switch(t=ds(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function _l(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qr(e)}var Ta=new Map,og=new Set;function fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var An=J.d;J.d={f:m1,r:h1,D:p1,C:g1,L:x1,m:v1,X:y1,S:b1,M:w1};function m1(){var e=An.f(),t=ns();return e||t}function h1(e){var t=Bn(e);t!==null&&t.tag===5&&t.type==="form"?Th(t):An.r(e)}var ji=typeof document>"u"?null:document;function sg(e,t,n){var r=ji;if(r&&typeof t=="string"&&t){var o=ya(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),og.has(o)||(og.add(o),e={rel:e,crossOrigin:n,href:t},r.querySelector(o)===null&&(t=r.createElement("link"),Mt(t,"link",e),Ie(t),r.head.appendChild(t)))}}function p1(e){An.D(e),sg("dns-prefetch",e,null)}function g1(e,t){An.C(e,t),sg("preconnect",e,t)}function x1(e,t,n){An.L(e,t,n);var r=ji;if(r&&e&&t){var o='link[rel="preload"][as="'+ya(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+ya(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+ya(n.imageSizes)+'"]')):o+='[href="'+ya(e)+'"]';var u=o;switch(t){case"style":u=Ei(e);break;case"script":u=Ci(e)}Ta.has(u)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ta.set(u,e),r.querySelector(o)!==null||t==="style"&&r.querySelector(Ll(u))||t==="script"&&r.querySelector(Hl(u))||(t=r.createElement("link"),Mt(t,"link",e),Ie(t),r.head.appendChild(t)))}}function v1(e,t){An.m(e,t);var n=ji;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+ya(r)+'"][href="'+ya(e)+'"]',u=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ci(e)}if(!Ta.has(u)&&(e=y({rel:"modulepreload",href:e},t),Ta.set(u,e),n.querySelector(o)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Hl(u)))return}r=n.createElement("link"),Mt(r,"link",e),Ie(r),n.head.appendChild(r)}}}function b1(e,t,n){An.S(e,t,n);var r=ji;if(r&&e){var o=dn(r).hoistableStyles,u=Ei(e);t=t||"default";var m=o.get(u);if(!m){var h={loading:0,preload:null};if(m=r.querySelector(Ll(u)))h.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ta.get(u))&&jd(e,n);var S=m=r.createElement("link");Ie(S),Mt(S,"link",e),S._p=new Promise(function(L,V){S.onload=L,S.onerror=V}),S.addEventListener("load",function(){h.loading|=1}),S.addEventListener("error",function(){h.loading|=2}),h.loading|=4,ms(m,t,r)}m={type:"stylesheet",instance:m,count:1,state:h},o.set(u,m)}}}function y1(e,t){An.X(e,t);var n=ji;if(n&&e){var r=dn(n).hoistableScripts,o=Ci(e),u=r.get(o);u||(u=n.querySelector(Hl(o)),u||(e=y({src:e,async:!0},t),(t=Ta.get(o))&&Ed(e,t),u=n.createElement("script"),Ie(u),Mt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(o,u))}}function w1(e,t){An.M(e,t);var n=ji;if(n&&e){var r=dn(n).hoistableScripts,o=Ci(e),u=r.get(o);u||(u=n.querySelector(Hl(o)),u||(e=y({src:e,async:!0,type:"module"},t),(t=Ta.get(o))&&Ed(e,t),u=n.createElement("script"),Ie(u),Mt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(o,u))}}function cg(e,t,n,r){var o=(o=ae.current)?fs(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ei(n.href),n=dn(o).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ei(n.href);var u=dn(o).hoistableStyles,m=u.get(e);if(m||(o=o.ownerDocument||o,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=o.querySelector(Ll(e)))&&!u._p&&(m.instance=u,m.state.loading=5),Ta.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ta.set(e,n),u||S1(o,e,n,m.state))),t&&r===null)throw Error(s(528,""));return m}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ci(n),n=dn(o).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ei(e){return'href="'+ya(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function ug(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function S1(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Mt(t,"link",n),Ie(t),e.head.appendChild(t))}function Ci(e){return'[src="'+ya(e)+'"]'}function Hl(e){return"script[async]"+e}function dg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+ya(n.href)+'"]');if(r)return t.instance=r,Ie(r),r;var o=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ie(r),Mt(r,"style",o),ms(r,n.precedence,e),t.instance=r;case"stylesheet":o=Ei(n.href);var u=e.querySelector(Ll(o));if(u)return t.state.loading|=4,t.instance=u,Ie(u),u;r=ug(n),(o=Ta.get(o))&&jd(r,o),u=(e.ownerDocument||e).createElement("link"),Ie(u);var m=u;return m._p=new Promise(function(h,S){m.onload=h,m.onerror=S}),Mt(u,"link",r),t.state.loading|=4,ms(u,n.precedence,e),t.instance=u;case"script":return u=Ci(n.src),(o=e.querySelector(Hl(u)))?(t.instance=o,Ie(o),o):(r=n,(o=Ta.get(u))&&(r=y({},n),Ed(r,o)),e=e.ownerDocument||e,o=e.createElement("script"),Ie(o),Mt(o,"link",r),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,ms(r,n.precedence,e));return t.instance}function ms(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,u=o,m=0;m<r.length;m++){var h=r[m];if(h.dataset.precedence===t)u=h;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function jd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ed(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hs=null;function fg(e,t,n){if(hs===null){var r=new Map,o=hs=new Map;o.set(n,r)}else o=hs,r=o.get(n),r||(r=new Map,o.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var u=n[o];if(!(u[un]||u[Be]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var h=r.get(m);h?h.push(u):r.set(m,[u])}}return r}function mg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function j1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ul=null;function E1(){}function C1(e,t,n){if(Ul===null)throw Error(s(475));var r=Ul;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Ei(n.href),u=e.querySelector(Ll(o));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=ps.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=u,Ie(u);return}u=e.ownerDocument||e,n=ug(n),(o=Ta.get(o))&&jd(n,o),u=u.createElement("link"),Ie(u);var m=u;m._p=new Promise(function(h,S){m.onload=h,m.onerror=S}),Mt(u,"link",n),t.instance=u}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=ps.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function A1(){if(Ul===null)throw Error(s(475));var e=Ul;return e.stylesheets&&e.count===0&&Cd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Cd(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ps(){if(this.count--,this.count===0){if(this.stylesheets)Cd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gs=null;function Cd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gs=new Map,t.forEach(T1,e),gs=null,ps.call(e))}function T1(e,t){if(!(t.state.loading&4)){var n=gs.get(e);if(n)var r=n.get(null);else{n=new Map,gs.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var m=o[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),r=m)}r&&n.set(null,r)}o=t.instance,m=o.getAttribute("data-precedence"),u=n.get(m)||r,u===r&&n.set(null,o),n.set(m,o),this.count++,r=ps.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var $l={$$typeof:q,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function k1(e,t,n,r,o,u,m,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.hiddenUpdates=$r(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function pg(e,t,n,r,o,u,m,h,S,L,V,K){return e=new k1(e,t,n,m,h,S,L,K),t=1,u===!0&&(t|=24),u=la(3,null,null,t),e.current=u,u.stateNode=e,t=lu(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:r,isDehydrated:n,cache:t},uu(u),e}function gg(e){return e?(e=ai,e):ai}function xg(e,t,n,r,o,u){o=gg(o),r.context===null?r.context=o:r.pendingContext=o,r=$n(t),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=qn(e,r,t),n!==null&&(da(n,e,t),gl(n,e,t))}function vg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ad(e,t){vg(e,t),(e=e.alternate)&&vg(e,t)}function bg(e){if(e.tag===13){var t=ti(e,67108864);t!==null&&da(t,e,67108864),Ad(e,67108864)}}var xs=!0;function z1(e,t,n,r){var o=U.T;U.T=null;var u=J.p;try{J.p=2,Td(e,t,n,r)}finally{J.p=u,U.T=o}}function R1(e,t,n,r){var o=U.T;U.T=null;var u=J.p;try{J.p=8,Td(e,t,n,r)}finally{J.p=u,U.T=o}}function Td(e,t,n,r){if(xs){var o=kd(r);if(o===null)hd(e,t,r,vs,n),wg(e,r);else if(D1(o,e,t,n,r))r.stopPropagation();else if(wg(e,r),t&4&&-1<O1.indexOf(e)){for(;o!==null;){var u=Bn(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=Na(u.pendingLanes);if(m!==0){var h=u;for(h.pendingLanes|=2,h.entangledLanes|=2;m;){var S=1<<31-Ue(m);h.entanglements[1]|=S,m&=~S}Ia(u),(qe&6)===0&&(ts=Je()+500,Ml(0))}}break;case 13:h=ti(u,2),h!==null&&da(h,u,2),ns(),Ad(u,2)}if(u=kd(r),u===null&&hd(e,t,r,vs,n),u===o)break;o=u}o!==null&&r.stopPropagation()}else hd(e,t,r,null,n)}}function kd(e){return e=Mc(e),zd(e)}var vs=null;function zd(e){if(vs=null,e=Nn(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return vs=e,null}function yg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(na()){case st:return 2;case Da:return 8;case Pt:case Ya:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Rd=!1,er=null,tr=null,ar=null,ql=new Map,Yl=new Map,nr=[],O1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wg(e,t){switch(e){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ql.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yl.delete(t.pointerId)}}function Gl(e,t,n,r,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[o]},t!==null&&(t=Bn(t),t!==null&&bg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function D1(e,t,n,r,o){switch(t){case"focusin":return er=Gl(er,e,t,n,r,o),!0;case"dragenter":return tr=Gl(tr,e,t,n,r,o),!0;case"mouseover":return ar=Gl(ar,e,t,n,r,o),!0;case"pointerover":var u=o.pointerId;return ql.set(u,Gl(ql.get(u)||null,e,t,n,r,o)),!0;case"gotpointercapture":return u=o.pointerId,Yl.set(u,Gl(Yl.get(u)||null,e,t,n,r,o)),!0}return!1}function Sg(e){var t=Nn(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Vr(e.priority,function(){if(n.tag===13){var r=ua();r=Yr(r);var o=ti(n,r);o!==null&&da(o,n,r),Ad(n,r)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kd(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Dc=r,n.target.dispatchEvent(r),Dc=null}else return t=Bn(n),t!==null&&bg(t),e.blockedOn=n,!1;t.shift()}return!0}function jg(e,t,n){bs(e)&&n.delete(t)}function M1(){Rd=!1,er!==null&&bs(er)&&(er=null),tr!==null&&bs(tr)&&(tr=null),ar!==null&&bs(ar)&&(ar=null),ql.forEach(jg),Yl.forEach(jg)}function ys(e,t){e.blockedOn===t&&(e.blockedOn=null,Rd||(Rd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,M1)))}var ws=null;function Eg(e){ws!==e&&(ws=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ws===e&&(ws=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],o=e[t+2];if(typeof r!="function"){if(zd(r||n)===null)continue;break}var u=Bn(n);u!==null&&(e.splice(t,3),t-=3,zu(u,{pending:!0,data:o,method:n.method,action:r},r,o))}}))}function Vl(e){function t(S){return ys(S,e)}er!==null&&ys(er,e),tr!==null&&ys(tr,e),ar!==null&&ys(ar,e),ql.forEach(t),Yl.forEach(t);for(var n=0;n<nr.length;n++){var r=nr[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)Sg(n),n.blockedOn===null&&nr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],m=o[Oe]||null;if(typeof u=="function")m||Eg(n);else if(m){var h=null;if(u&&u.hasAttribute("formAction")){if(o=u,m=u[Oe]||null)h=m.formAction;else if(zd(o)!==null)continue}else h=m.action;typeof h=="function"?n[r+1]=h:(n.splice(r,3),r-=3),Eg(n)}}}function Od(e){this._internalRoot=e}Ss.prototype.render=Od.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,r=ua();xg(n,r,e,t,null,null)},Ss.prototype.unmount=Od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xg(e.current,2,null,e,null,null),ns(),t[pt]=null}};function Ss(e){this._internalRoot=e}Ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=cn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nr.length&&t!==0&&t<nr[n].priority;n++);nr.splice(n,0,e),n===0&&Sg(e)}};var Cg=i.version;if(Cg!=="19.1.0")throw Error(s(527,Cg,"19.1.0"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var N1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!js.isDisabled&&js.supportsFiber)try{Rt=js.inject(N1),We=js}catch{}}return Ql.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,r="",o=qh,u=Yh,m=Gh,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=pg(e,1,!1,null,null,n,r,o,u,m,h,null),e[pt]=t.current,md(e),new Od(t)},Ql.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var r=!1,o="",u=qh,m=Yh,h=Gh,S=null,L=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks),n.formState!==void 0&&(L=n.formState)),t=pg(e,1,!0,t,n??null,r,o,u,m,h,S,L),t.context=gg(null),n=t.current,r=ua(),r=Yr(r),o=$n(r),o.callback=null,qn(n,o,r),n=r,t.current.lanes=n,it(t,n),Ia(t),e[pt]=t.current,md(e),new Ss(t)},Ql.version="19.1.0",Ql}var Bg;function G1(){if(Bg)return Nd.exports;Bg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Nd.exports=Y1(),Nd.exports}var V1=G1(),Zl={},_g;function X1(){if(_g)return Zl;_g=1,Object.defineProperty(Zl,"__esModule",{value:!0}),Zl.parse=g,Zl.serialize=p;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,l=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,f=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function g(E,D){const z=new f,N=E.length;if(N<2)return z;const B=(D==null?void 0:D.decode)||y;let O=0;do{const A=E.indexOf("=",O);if(A===-1)break;const q=E.indexOf(";",O),W=q===-1?N:q;if(A>W){O=E.lastIndexOf(";",A-1)+1;continue}const _=b(E,O,A),G=v(E,A,_),P=E.slice(_,G);if(z[P]===void 0){let ne=b(E,A+1,W),Z=v(E,W,ne);const ee=B(E.slice(ne,Z));z[P]=ee}O=W+1}while(O<N);return z}function b(E,D,z){do{const N=E.charCodeAt(D);if(N!==32&&N!==9)return D}while(++D<z);return z}function v(E,D,z){for(;D>z;){const N=E.charCodeAt(--D);if(N!==32&&N!==9)return D+1}return z}function p(E,D,z){const N=(z==null?void 0:z.encode)||encodeURIComponent;if(!a.test(E))throw new TypeError(`argument name is invalid: ${E}`);const B=N(D);if(!i.test(B))throw new TypeError(`argument val is invalid: ${D}`);let O=E+"="+B;if(!z)return O;if(z.maxAge!==void 0){if(!Number.isInteger(z.maxAge))throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);O+="; Max-Age="+z.maxAge}if(z.domain){if(!l.test(z.domain))throw new TypeError(`option domain is invalid: ${z.domain}`);O+="; Domain="+z.domain}if(z.path){if(!s.test(z.path))throw new TypeError(`option path is invalid: ${z.path}`);O+="; Path="+z.path}if(z.expires){if(!k(z.expires)||!Number.isFinite(z.expires.valueOf()))throw new TypeError(`option expires is invalid: ${z.expires}`);O+="; Expires="+z.expires.toUTCString()}if(z.httpOnly&&(O+="; HttpOnly"),z.secure&&(O+="; Secure"),z.partitioned&&(O+="; Partitioned"),z.priority)switch(typeof z.priority=="string"?z.priority.toLowerCase():void 0){case"low":O+="; Priority=Low";break;case"medium":O+="; Priority=Medium";break;case"high":O+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${z.priority}`)}if(z.sameSite)switch(typeof z.sameSite=="string"?z.sameSite.toLowerCase():z.sameSite){case!0:case"strict":O+="; SameSite=Strict";break;case"lax":O+="; SameSite=Lax";break;case"none":O+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${z.sameSite}`)}return O}function y(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function k(E){return d.call(E)==="[object Date]"}return Zl}X1();var Lg="popstate";function Q1(a={}){function i(s,d){let{pathname:f,search:g,hash:b}=s.location;return af("",{pathname:f,search:g,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function l(s,d){return typeof d=="string"?d:Il(d)}return K1(i,l,null,a)}function rt(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function an(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Z1(){return Math.random().toString(36).substring(2,10)}function Hg(a,i){return{usr:a.state,key:a.key,idx:i}}function af(a,i,l=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?Gi(i):i,state:l,key:i&&i.key||s||Z1()}}function Il({pathname:a="/",search:i="",hash:l=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(a+=l.charAt(0)==="#"?l:"#"+l),a}function Gi(a){let i={};if(a){let l=a.indexOf("#");l>=0&&(i.hash=a.substring(l),a=a.substring(0,l));let s=a.indexOf("?");s>=0&&(i.search=a.substring(s),a=a.substring(0,s)),a&&(i.pathname=a)}return i}function K1(a,i,l,s={}){let{window:d=document.defaultView,v5Compat:f=!1}=s,g=d.history,b="POP",v=null,p=y();p==null&&(p=0,g.replaceState({...g.state,idx:p},""));function y(){return(g.state||{idx:null}).idx}function k(){b="POP";let B=y(),O=B==null?null:B-p;p=B,v&&v({action:b,location:N.location,delta:O})}function E(B,O){b="PUSH";let A=af(N.location,B,O);p=y()+1;let q=Hg(A,p),W=N.createHref(A);try{g.pushState(q,"",W)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;d.location.assign(W)}f&&v&&v({action:b,location:N.location,delta:1})}function D(B,O){b="REPLACE";let A=af(N.location,B,O);p=y();let q=Hg(A,p),W=N.createHref(A);g.replaceState(q,"",W),f&&v&&v({action:b,location:N.location,delta:0})}function z(B){return P1(B)}let N={get action(){return b},get location(){return a(d,g)},listen(B){if(v)throw new Error("A history only accepts one active listener");return d.addEventListener(Lg,k),v=B,()=>{d.removeEventListener(Lg,k),v=null}},createHref(B){return i(d,B)},createURL:z,encodeLocation(B){let O=z(B);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:E,replace:D,go(B){return g.go(B)}};return N}function P1(a,i=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),rt(l,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:Il(a);return s=s.replace(/ $/,"%20"),!i&&s.startsWith("//")&&(s=l+s),new URL(s,l)}function L0(a,i,l="/"){return F1(a,i,l,!1)}function F1(a,i,l,s){let d=typeof i=="string"?Gi(i):i,f=On(d.pathname||"/",l);if(f==null)return null;let g=H0(a);J1(g);let b=null;for(let v=0;b==null&&v<g.length;++v){let p=sy(f);b=ly(g[v],p,s)}return b}function H0(a,i=[],l=[],s=""){let d=(f,g,b)=>{let v={relativePath:b===void 0?f.path||"":b,caseSensitive:f.caseSensitive===!0,childrenIndex:g,route:f};v.relativePath.startsWith("/")&&(rt(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length));let p=zn([s,v.relativePath]),y=l.concat(v);f.children&&f.children.length>0&&(rt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),H0(f.children,i,y,p)),!(f.path==null&&!f.index)&&i.push({path:p,score:ry(p,f.index),routesMeta:y})};return a.forEach((f,g)=>{var b;if(f.path===""||!((b=f.path)!=null&&b.includes("?")))d(f,g);else for(let v of U0(f.path))d(f,g,v)}),i}function U0(a){let i=a.split("/");if(i.length===0)return[];let[l,...s]=i,d=l.endsWith("?"),f=l.replace(/\?$/,"");if(s.length===0)return d?[f,""]:[f];let g=U0(s.join("/")),b=[];return b.push(...g.map(v=>v===""?f:[f,v].join("/"))),d&&b.push(...g),b.map(v=>a.startsWith("/")&&v===""?"/":v)}function J1(a){a.sort((i,l)=>i.score!==l.score?l.score-i.score:iy(i.routesMeta.map(s=>s.childrenIndex),l.routesMeta.map(s=>s.childrenIndex)))}var W1=/^:[\w-]+$/,I1=3,ey=2,ty=1,ay=10,ny=-2,Ug=a=>a==="*";function ry(a,i){let l=a.split("/"),s=l.length;return l.some(Ug)&&(s+=ny),i&&(s+=ey),l.filter(d=>!Ug(d)).reduce((d,f)=>d+(W1.test(f)?I1:f===""?ty:ay),s)}function iy(a,i){return a.length===i.length&&a.slice(0,-1).every((s,d)=>s===i[d])?a[a.length-1]-i[i.length-1]:0}function ly(a,i,l=!1){let{routesMeta:s}=a,d={},f="/",g=[];for(let b=0;b<s.length;++b){let v=s[b],p=b===s.length-1,y=f==="/"?i:i.slice(f.length)||"/",k=Fs({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},y),E=v.route;if(!k&&p&&l&&!s[s.length-1].route.index&&(k=Fs({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},y)),!k)return null;Object.assign(d,k.params),g.push({params:d,pathname:zn([f,k.pathname]),pathnameBase:fy(zn([f,k.pathnameBase])),route:E}),k.pathnameBase!=="/"&&(f=zn([f,k.pathnameBase]))}return g}function Fs(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[l,s]=oy(a.path,a.caseSensitive,a.end),d=i.match(l);if(!d)return null;let f=d[0],g=f.replace(/(.)\/+$/,"$1"),b=d.slice(1);return{params:s.reduce((p,{paramName:y,isOptional:k},E)=>{if(y==="*"){let z=b[E]||"";g=f.slice(0,f.length-z.length).replace(/(.)\/+$/,"$1")}const D=b[E];return k&&!D?p[y]=void 0:p[y]=(D||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:g,pattern:a}}function oy(a,i=!1,l=!0){an(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,b,v)=>(s.push({paramName:b,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(s.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,i?void 0:"i"),s]}function sy(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return an(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function On(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let l=i.endsWith("/")?i.length-1:i.length,s=a.charAt(l);return s&&s!=="/"?null:a.slice(l)||"/"}function cy(a,i="/"){let{pathname:l,search:s="",hash:d=""}=typeof a=="string"?Gi(a):a;return{pathname:l?l.startsWith("/")?l:uy(l,i):i,search:my(s),hash:hy(d)}}function uy(a,i){let l=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?l.length>1&&l.pop():d!=="."&&l.push(d)}),l.length>1?l.join("/"):"/"}function Hd(a,i,l,s){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dy(a){return a.filter((i,l)=>l===0||i.route.path&&i.route.path.length>0)}function $0(a){let i=dy(a);return i.map((l,s)=>s===i.length-1?l.pathname:l.pathnameBase)}function q0(a,i,l,s=!1){let d;typeof a=="string"?d=Gi(a):(d={...a},rt(!d.pathname||!d.pathname.includes("?"),Hd("?","pathname","search",d)),rt(!d.pathname||!d.pathname.includes("#"),Hd("#","pathname","hash",d)),rt(!d.search||!d.search.includes("#"),Hd("#","search","hash",d)));let f=a===""||d.pathname==="",g=f?"/":d.pathname,b;if(g==null)b=l;else{let k=i.length-1;if(!s&&g.startsWith("..")){let E=g.split("/");for(;E[0]==="..";)E.shift(),k-=1;d.pathname=E.join("/")}b=k>=0?i[k]:"/"}let v=cy(d,b),p=g&&g!=="/"&&g.endsWith("/"),y=(f||g===".")&&l.endsWith("/");return!v.pathname.endsWith("/")&&(p||y)&&(v.pathname+="/"),v}var zn=a=>a.join("/").replace(/\/\/+/g,"/"),fy=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),my=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,hy=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function py(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Y0=["POST","PUT","PATCH","DELETE"];new Set(Y0);var gy=["GET",...Y0];new Set(gy);var Vi=x.createContext(null);Vi.displayName="DataRouter";var fc=x.createContext(null);fc.displayName="DataRouterState";var G0=x.createContext({isTransitioning:!1});G0.displayName="ViewTransition";var xy=x.createContext(new Map);xy.displayName="Fetchers";var vy=x.createContext(null);vy.displayName="Await";var rn=x.createContext(null);rn.displayName="Navigation";var no=x.createContext(null);no.displayName="Location";var Dn=x.createContext({outlet:null,matches:[],isDataRoute:!1});Dn.displayName="Route";var Sf=x.createContext(null);Sf.displayName="RouteError";function by(a,{relative:i}={}){rt(ro(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:s}=x.useContext(rn),{hash:d,pathname:f,search:g}=io(a,{relative:i}),b=f;return l!=="/"&&(b=f==="/"?l:zn([l,f])),s.createHref({pathname:b,search:g,hash:d})}function ro(){return x.useContext(no)!=null}function $a(){return rt(ro(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(no).location}var V0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function X0(a){x.useContext(rn).static||x.useLayoutEffect(a)}function Br(){let{isDataRoute:a}=x.useContext(Dn);return a?Dy():yy()}function yy(){rt(ro(),"useNavigate() may be used only in the context of a <Router> component.");let a=x.useContext(Vi),{basename:i,navigator:l}=x.useContext(rn),{matches:s}=x.useContext(Dn),{pathname:d}=$a(),f=JSON.stringify($0(s)),g=x.useRef(!1);return X0(()=>{g.current=!0}),x.useCallback((v,p={})=>{if(an(g.current,V0),!g.current)return;if(typeof v=="number"){l.go(v);return}let y=q0(v,JSON.parse(f),d,p.relative==="path");a==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:zn([i,y.pathname])),(p.replace?l.replace:l.push)(y,p.state,p)},[i,l,f,d,a])}x.createContext(null);function io(a,{relative:i}={}){let{matches:l}=x.useContext(Dn),{pathname:s}=$a(),d=JSON.stringify($0(l));return x.useMemo(()=>q0(a,JSON.parse(d),s,i==="path"),[a,d,s,i])}function wy(a,i){return Q0(a,i)}function Q0(a,i,l,s){var O;rt(ro(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=x.useContext(rn),{matches:f}=x.useContext(Dn),g=f[f.length-1],b=g?g.params:{},v=g?g.pathname:"/",p=g?g.pathnameBase:"/",y=g&&g.route;{let A=y&&y.path||"";Z0(v,!y||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let k=$a(),E;if(i){let A=typeof i=="string"?Gi(i):i;rt(p==="/"||((O=A.pathname)==null?void 0:O.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${A.pathname}" was given in the \`location\` prop.`),E=A}else E=k;let D=E.pathname||"/",z=D;if(p!=="/"){let A=p.replace(/^\//,"").split("/");z="/"+D.replace(/^\//,"").split("/").slice(A.length).join("/")}let N=L0(a,{pathname:z});an(y||N!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),an(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=Ay(N&&N.map(A=>Object.assign({},A,{params:Object.assign({},b,A.params),pathname:zn([p,d.encodeLocation?d.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?p:zn([p,d.encodeLocation?d.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),f,l,s);return i&&B?x.createElement(no.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},B):B}function Sy(){let a=Oy(),i=py(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),l=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},g=null;return console.error("Error handled by React Router default ErrorBoundary:",a),g=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:f},"ErrorBoundary")," or"," ",x.createElement("code",{style:f},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},i),l?x.createElement("pre",{style:d},l):null,g)}var jy=x.createElement(Sy,null),Ey=class extends x.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){console.error("React Router caught the following error during render",a,i)}render(){return this.state.error!==void 0?x.createElement(Dn.Provider,{value:this.props.routeContext},x.createElement(Sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Cy({routeContext:a,match:i,children:l}){let s=x.useContext(Vi);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),x.createElement(Dn.Provider,{value:a},l)}function Ay(a,i=[],l=null,s=null){if(a==null){if(!l)return null;if(l.errors)a=l.matches;else if(i.length===0&&!l.initialized&&l.matches.length>0)a=l.matches;else return null}let d=a,f=l==null?void 0:l.errors;if(f!=null){let v=d.findIndex(p=>p.route.id&&(f==null?void 0:f[p.route.id])!==void 0);rt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let g=!1,b=-1;if(l)for(let v=0;v<d.length;v++){let p=d[v];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(b=v),p.route.id){let{loaderData:y,errors:k}=l,E=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!k||k[p.route.id]===void 0);if(p.route.lazy||E){g=!0,b>=0?d=d.slice(0,b+1):d=[d[0]];break}}}return d.reduceRight((v,p,y)=>{let k,E=!1,D=null,z=null;l&&(k=f&&p.route.id?f[p.route.id]:void 0,D=p.route.errorElement||jy,g&&(b<0&&y===0?(Z0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,z=null):b===y&&(E=!0,z=p.route.hydrateFallbackElement||null)));let N=i.concat(d.slice(0,y+1)),B=()=>{let O;return k?O=D:E?O=z:p.route.Component?O=x.createElement(p.route.Component,null):p.route.element?O=p.route.element:O=v,x.createElement(Cy,{match:p,routeContext:{outlet:v,matches:N,isDataRoute:l!=null},children:O})};return l&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?x.createElement(Ey,{location:l.location,revalidation:l.revalidation,component:D,error:k,children:B(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):B()},null)}function jf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ty(a){let i=x.useContext(Vi);return rt(i,jf(a)),i}function ky(a){let i=x.useContext(fc);return rt(i,jf(a)),i}function zy(a){let i=x.useContext(Dn);return rt(i,jf(a)),i}function Ef(a){let i=zy(a),l=i.matches[i.matches.length-1];return rt(l.route.id,`${a} can only be used on routes that contain a unique "id"`),l.route.id}function Ry(){return Ef("useRouteId")}function Oy(){var s;let a=x.useContext(Sf),i=ky("useRouteError"),l=Ef("useRouteError");return a!==void 0?a:(s=i.errors)==null?void 0:s[l]}function Dy(){let{router:a}=Ty("useNavigate"),i=Ef("useNavigate"),l=x.useRef(!1);return X0(()=>{l.current=!0}),x.useCallback(async(d,f={})=>{an(l.current,V0),l.current&&(typeof d=="number"?a.navigate(d):await a.navigate(d,{fromRouteId:i,...f}))},[a,i])}var $g={};function Z0(a,i,l){!i&&!$g[a]&&($g[a]=!0,an(!1,l))}x.memo(My);function My({routes:a,future:i,state:l}){return Q0(a,void 0,l,i)}function ka(a){rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ny({basename:a="/",children:i=null,location:l,navigationType:s="POP",navigator:d,static:f=!1}){rt(!ro(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=a.replace(/^\/*/,"/"),b=x.useMemo(()=>({basename:g,navigator:d,static:f,future:{}}),[g,d,f]);typeof l=="string"&&(l=Gi(l));let{pathname:v="/",search:p="",hash:y="",state:k=null,key:E="default"}=l,D=x.useMemo(()=>{let z=On(v,g);return z==null?null:{location:{pathname:z,search:p,hash:y,state:k,key:E},navigationType:s}},[g,v,p,y,k,E,s]);return an(D!=null,`<Router basename="${g}"> is not able to match the URL "${v}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:x.createElement(rn.Provider,{value:b},x.createElement(no.Provider,{children:i,value:D}))}function By({children:a,location:i}){return wy(nf(a),i)}function nf(a,i=[]){let l=[];return x.Children.forEach(a,(s,d)=>{if(!x.isValidElement(s))return;let f=[...i,d];if(s.type===x.Fragment){l.push.apply(l,nf(s.props.children,f));return}rt(s.type===ka,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),rt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let g={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(g.children=nf(s.props.children,f)),l.push(g)}),l}var Gs="get",Vs="application/x-www-form-urlencoded";function mc(a){return a!=null&&typeof a.tagName=="string"}function _y(a){return mc(a)&&a.tagName.toLowerCase()==="button"}function Ly(a){return mc(a)&&a.tagName.toLowerCase()==="form"}function Hy(a){return mc(a)&&a.tagName.toLowerCase()==="input"}function Uy(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function $y(a,i){return a.button===0&&(!i||i==="_self")&&!Uy(a)}var Es=null;function qy(){if(Es===null)try{new FormData(document.createElement("form"),0),Es=!1}catch{Es=!0}return Es}var Yy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ud(a){return a!=null&&!Yy.has(a)?(an(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vs}"`),null):a}function Gy(a,i){let l,s,d,f,g;if(Ly(a)){let b=a.getAttribute("action");s=b?On(b,i):null,l=a.getAttribute("method")||Gs,d=Ud(a.getAttribute("enctype"))||Vs,f=new FormData(a)}else if(_y(a)||Hy(a)&&(a.type==="submit"||a.type==="image")){let b=a.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=a.getAttribute("formaction")||b.getAttribute("action");if(s=v?On(v,i):null,l=a.getAttribute("formmethod")||b.getAttribute("method")||Gs,d=Ud(a.getAttribute("formenctype"))||Ud(b.getAttribute("enctype"))||Vs,f=new FormData(b,a),!qy()){let{name:p,type:y,value:k}=a;if(y==="image"){let E=p?`${p}.`:"";f.append(`${E}x`,"0"),f.append(`${E}y`,"0")}else p&&f.append(p,k)}}else{if(mc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=Gs,s=null,d=Vs,g=a}return f&&d==="text/plain"&&(g=f,f=void 0),{action:s,method:l.toLowerCase(),encType:d,formData:f,body:g}}function Cf(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}async function Vy(a,i){if(a.id in i)return i[a.id];try{let l=await import(a.module);return i[a.id]=l,l}catch(l){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xy(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Qy(a,i,l){let s=await Promise.all(a.map(async d=>{let f=i.routes[d.route.id];if(f){let g=await Vy(f,l);return g.links?g.links():[]}return[]}));return Fy(s.flat(1).filter(Xy).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function qg(a,i,l,s,d,f){let g=(v,p)=>l[p]?v.route.id!==l[p].route.id:!0,b=(v,p)=>{var y;return l[p].pathname!==v.pathname||((y=l[p].route.path)==null?void 0:y.endsWith("*"))&&l[p].params["*"]!==v.params["*"]};return f==="assets"?i.filter((v,p)=>g(v,p)||b(v,p)):f==="data"?i.filter((v,p)=>{var k;let y=s.routes[v.route.id];if(!y||!y.hasLoader)return!1;if(g(v,p)||b(v,p))return!0;if(v.route.shouldRevalidate){let E=v.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((k=l[0])==null?void 0:k.params)||{},nextUrl:new URL(a,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function Zy(a,i,{includeHydrateFallback:l}={}){return Ky(a.map(s=>{let d=i.routes[s.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),l&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function Ky(a){return[...new Set(a)]}function Py(a){let i={},l=Object.keys(a).sort();for(let s of l)i[s]=a[s];return i}function Fy(a,i){let l=new Set;return new Set(i),a.reduce((s,d)=>{let f=JSON.stringify(Py(d));return l.has(f)||(l.add(f),s.push({key:f,link:d})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Jy=new Set([100,101,204,205]);function Wy(a,i){let l=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return l.pathname==="/"?l.pathname="_root.data":i&&On(l.pathname,i)==="/"?l.pathname=`${i.replace(/\/$/,"")}/_root.data`:l.pathname=`${l.pathname.replace(/\/$/,"")}.data`,l}function K0(){let a=x.useContext(Vi);return Cf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Iy(){let a=x.useContext(fc);return Cf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Af=x.createContext(void 0);Af.displayName="FrameworkContext";function P0(){let a=x.useContext(Af);return Cf(a,"You must render this element inside a <HydratedRouter> element"),a}function ew(a,i){let l=x.useContext(Af),[s,d]=x.useState(!1),[f,g]=x.useState(!1),{onFocus:b,onBlur:v,onMouseEnter:p,onMouseLeave:y,onTouchStart:k}=i,E=x.useRef(null);x.useEffect(()=>{if(a==="render"&&g(!0),a==="viewport"){let N=O=>{O.forEach(A=>{g(A.isIntersecting)})},B=new IntersectionObserver(N,{threshold:.5});return E.current&&B.observe(E.current),()=>{B.disconnect()}}},[a]),x.useEffect(()=>{if(s){let N=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(N)}}},[s]);let D=()=>{d(!0)},z=()=>{d(!1),g(!1)};return l?a!=="intent"?[f,E,{}]:[f,E,{onFocus:Kl(b,D),onBlur:Kl(v,z),onMouseEnter:Kl(p,D),onMouseLeave:Kl(y,z),onTouchStart:Kl(k,D)}]:[!1,E,{}]}function Kl(a,i){return l=>{a&&a(l),l.defaultPrevented||i(l)}}function tw({page:a,...i}){let{router:l}=K0(),s=x.useMemo(()=>L0(l.routes,a,l.basename),[l.routes,a,l.basename]);return s?x.createElement(nw,{page:a,matches:s,...i}):null}function aw(a){let{manifest:i,routeModules:l}=P0(),[s,d]=x.useState([]);return x.useEffect(()=>{let f=!1;return Qy(a,i,l).then(g=>{f||d(g)}),()=>{f=!0}},[a,i,l]),s}function nw({page:a,matches:i,...l}){let s=$a(),{manifest:d,routeModules:f}=P0(),{basename:g}=K0(),{loaderData:b,matches:v}=Iy(),p=x.useMemo(()=>qg(a,i,v,d,s,"data"),[a,i,v,d,s]),y=x.useMemo(()=>qg(a,i,v,d,s,"assets"),[a,i,v,d,s]),k=x.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let z=new Set,N=!1;if(i.forEach(O=>{var q;let A=d.routes[O.route.id];!A||!A.hasLoader||(!p.some(W=>W.route.id===O.route.id)&&O.route.id in b&&((q=f[O.route.id])!=null&&q.shouldRevalidate)||A.hasClientLoader?N=!0:z.add(O.route.id))}),z.size===0)return[];let B=Wy(a,g);return N&&z.size>0&&B.searchParams.set("_routes",i.filter(O=>z.has(O.route.id)).map(O=>O.route.id).join(",")),[B.pathname+B.search]},[g,b,s,d,p,i,a,f]),E=x.useMemo(()=>Zy(y,d),[y,d]),D=aw(y);return x.createElement(x.Fragment,null,k.map(z=>x.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...l})),E.map(z=>x.createElement("link",{key:z,rel:"modulepreload",href:z,...l})),D.map(({key:z,link:N})=>x.createElement("link",{key:z,...N})))}function rw(...a){return i=>{a.forEach(l=>{typeof l=="function"?l(i):l!=null&&(l.current=i)})}}var F0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{F0&&(window.__reactRouterVersion="7.6.2")}catch{}function iw({basename:a,children:i,window:l}){let s=x.useRef();s.current==null&&(s.current=Q1({window:l,v5Compat:!0}));let d=s.current,[f,g]=x.useState({action:d.action,location:d.location}),b=x.useCallback(v=>{x.startTransition(()=>g(v))},[g]);return x.useLayoutEffect(()=>d.listen(b),[d,b]),x.createElement(Ny,{basename:a,children:i,location:f.location,navigationType:f.action,navigator:d})}var J0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ma=x.forwardRef(function({onClick:i,discover:l="render",prefetch:s="none",relative:d,reloadDocument:f,replace:g,state:b,target:v,to:p,preventScrollReset:y,viewTransition:k,...E},D){let{basename:z}=x.useContext(rn),N=typeof p=="string"&&J0.test(p),B,O=!1;if(typeof p=="string"&&N&&(B=p,F0))try{let Z=new URL(window.location.href),ee=p.startsWith("//")?new URL(Z.protocol+p):new URL(p),le=On(ee.pathname,z);ee.origin===Z.origin&&le!=null?p=le+ee.search+ee.hash:O=!0}catch{an(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=by(p,{relative:d}),[q,W,_]=ew(s,E),G=cw(p,{replace:g,state:b,target:v,preventScrollReset:y,relative:d,viewTransition:k});function P(Z){i&&i(Z),Z.defaultPrevented||G(Z)}let ne=x.createElement("a",{...E,..._,href:B||A,onClick:O||f?i:P,ref:rw(D,W),target:v,"data-discover":!N&&l==="render"?"true":void 0});return q&&!N?x.createElement(x.Fragment,null,ne,x.createElement(tw,{page:A})):ne});ma.displayName="Link";var lw=x.forwardRef(function({"aria-current":i="page",caseSensitive:l=!1,className:s="",end:d=!1,style:f,to:g,viewTransition:b,children:v,...p},y){let k=io(g,{relative:p.relative}),E=$a(),D=x.useContext(fc),{navigator:z,basename:N}=x.useContext(rn),B=D!=null&&hw(k)&&b===!0,O=z.encodeLocation?z.encodeLocation(k).pathname:k.pathname,A=E.pathname,q=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;l||(A=A.toLowerCase(),q=q?q.toLowerCase():null,O=O.toLowerCase()),q&&N&&(q=On(q,N)||q);const W=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let _=A===O||!d&&A.startsWith(O)&&A.charAt(W)==="/",G=q!=null&&(q===O||!d&&q.startsWith(O)&&q.charAt(O.length)==="/"),P={isActive:_,isPending:G,isTransitioning:B},ne=_?i:void 0,Z;typeof s=="function"?Z=s(P):Z=[s,_?"active":null,G?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let ee=typeof f=="function"?f(P):f;return x.createElement(ma,{...p,"aria-current":ne,className:Z,ref:y,style:ee,to:g,viewTransition:b},typeof v=="function"?v(P):v)});lw.displayName="NavLink";var ow=x.forwardRef(({discover:a="render",fetcherKey:i,navigate:l,reloadDocument:s,replace:d,state:f,method:g=Gs,action:b,onSubmit:v,relative:p,preventScrollReset:y,viewTransition:k,...E},D)=>{let z=fw(),N=mw(b,{relative:p}),B=g.toLowerCase()==="get"?"get":"post",O=typeof b=="string"&&J0.test(b),A=q=>{if(v&&v(q),q.defaultPrevented)return;q.preventDefault();let W=q.nativeEvent.submitter,_=(W==null?void 0:W.getAttribute("formmethod"))||g;z(W||q.currentTarget,{fetcherKey:i,method:_,navigate:l,replace:d,state:f,relative:p,preventScrollReset:y,viewTransition:k})};return x.createElement("form",{ref:D,method:B,action:N,onSubmit:s?v:A,...E,"data-discover":!O&&a==="render"?"true":void 0})});ow.displayName="Form";function sw(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function W0(a){let i=x.useContext(Vi);return rt(i,sw(a)),i}function cw(a,{target:i,replace:l,state:s,preventScrollReset:d,relative:f,viewTransition:g}={}){let b=Br(),v=$a(),p=io(a,{relative:f});return x.useCallback(y=>{if($y(y,i)){y.preventDefault();let k=l!==void 0?l:Il(v)===Il(p);b(a,{replace:k,state:s,preventScrollReset:d,relative:f,viewTransition:g})}},[v,b,p,l,s,i,a,d,f,g])}var uw=0,dw=()=>`__${String(++uw)}__`;function fw(){let{router:a}=W0("useSubmit"),{basename:i}=x.useContext(rn),l=Ry();return x.useCallback(async(s,d={})=>{let{action:f,method:g,encType:b,formData:v,body:p}=Gy(s,i);if(d.navigate===!1){let y=d.fetcherKey||dw();await a.fetch(y,l,d.action||f,{preventScrollReset:d.preventScrollReset,formData:v,body:p,formMethod:d.method||g,formEncType:d.encType||b,flushSync:d.flushSync})}else await a.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:v,body:p,formMethod:d.method||g,formEncType:d.encType||b,replace:d.replace,state:d.state,fromRouteId:l,flushSync:d.flushSync,viewTransition:d.viewTransition})},[a,i,l])}function mw(a,{relative:i}={}){let{basename:l}=x.useContext(rn),s=x.useContext(Dn);rt(s,"useFormAction must be used inside a RouteContext");let[d]=s.matches.slice(-1),f={...io(a||".",{relative:i})},g=$a();if(a==null){f.search=g.search;let b=new URLSearchParams(f.search),v=b.getAll("index");if(v.some(y=>y==="")){b.delete("index"),v.filter(k=>k).forEach(k=>b.append("index",k));let y=b.toString();f.search=y?`?${y}`:""}}return(!a||a===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(f.pathname=f.pathname==="/"?l:zn([l,f.pathname])),Il(f)}function hw(a,i={}){let l=x.useContext(G0);rt(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=W0("useViewTransitionState"),d=io(a,{relative:i.relative});if(!l.isTransitioning)return!1;let f=On(l.currentLocation.pathname,s)||l.currentLocation.pathname,g=On(l.nextLocation.pathname,s)||l.nextLocation.pathname;return Fs(d.pathname,g)!=null||Fs(d.pathname,f)!=null}[...Jy];var pw=_0();const I0=x.createContext(),gw=({children:a})=>{const[i,l]=x.useState("ar"),s=()=>{l(d=>d==="ar"?"en":"ar")};return c.jsx(I0.Provider,{value:{language:i,toggleLanguage:s},children:a})},pa=()=>{const a=x.useContext(I0);if(!a)throw new Error("useLanguage must be used within a LanguageProvider");return a};var Ut=function(){return Ut=Object.assign||function(i){for(var l,s=1,d=arguments.length;s<d;s++){l=arguments[s];for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(i[f]=l[f])}return i},Ut.apply(this,arguments)};function eo(a,i,l){if(l||arguments.length===2)for(var s=0,d=i.length,f;s<d;s++)(f||!(s in i))&&(f||(f=Array.prototype.slice.call(i,0,s)),f[s]=i[s]);return a.concat(f||Array.prototype.slice.call(i))}var Fe="-ms-",Wl="-moz-",He="-webkit-",ex="comm",hc="rule",Tf="decl",xw="@import",tx="@keyframes",vw="@layer",ax=Math.abs,kf=String.fromCharCode,rf=Object.assign;function bw(a,i){return kt(a,0)^45?(((i<<2^kt(a,0))<<2^kt(a,1))<<2^kt(a,2))<<2^kt(a,3):0}function nx(a){return a.trim()}function Tn(a,i){return(a=i.exec(a))?a[0]:a}function Ee(a,i,l){return a.replace(i,l)}function Xs(a,i,l){return a.indexOf(i,l)}function kt(a,i){return a.charCodeAt(i)|0}function Bi(a,i,l){return a.slice(i,l)}function tn(a){return a.length}function rx(a){return a.length}function Jl(a,i){return i.push(a),a}function yw(a,i){return a.map(i).join("")}function Yg(a,i){return a.filter(function(l){return!Tn(l,i)})}var pc=1,_i=1,ix=0,Ra=0,vt=0,Xi="";function gc(a,i,l,s,d,f,g,b){return{value:a,root:i,parent:l,type:s,props:d,children:f,line:pc,column:_i,length:g,return:"",siblings:b}}function ir(a,i){return rf(gc("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},i)}function Ai(a){for(;a.root;)a=ir(a.root,{children:[a]});Jl(a,a.siblings)}function ww(){return vt}function Sw(){return vt=Ra>0?kt(Xi,--Ra):0,_i--,vt===10&&(_i=1,pc--),vt}function Ua(){return vt=Ra<ix?kt(Xi,Ra++):0,_i++,vt===10&&(_i=1,pc++),vt}function Or(){return kt(Xi,Ra)}function Qs(){return Ra}function xc(a,i){return Bi(Xi,a,i)}function lf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jw(a){return pc=_i=1,ix=tn(Xi=a),Ra=0,[]}function Ew(a){return Xi="",a}function $d(a){return nx(xc(Ra-1,of(a===91?a+2:a===40?a+1:a)))}function Cw(a){for(;(vt=Or())&&vt<33;)Ua();return lf(a)>2||lf(vt)>3?"":" "}function Aw(a,i){for(;--i&&Ua()&&!(vt<48||vt>102||vt>57&&vt<65||vt>70&&vt<97););return xc(a,Qs()+(i<6&&Or()==32&&Ua()==32))}function of(a){for(;Ua();)switch(vt){case a:return Ra;case 34:case 39:a!==34&&a!==39&&of(vt);break;case 40:a===41&&of(a);break;case 92:Ua();break}return Ra}function Tw(a,i){for(;Ua()&&a+vt!==57;)if(a+vt===84&&Or()===47)break;return"/*"+xc(i,Ra-1)+"*"+kf(a===47?a:Ua())}function kw(a){for(;!lf(Or());)Ua();return xc(a,Ra)}function zw(a){return Ew(Zs("",null,null,null,[""],a=jw(a),0,[0],a))}function Zs(a,i,l,s,d,f,g,b,v){for(var p=0,y=0,k=g,E=0,D=0,z=0,N=1,B=1,O=1,A=0,q="",W=d,_=f,G=s,P=q;B;)switch(z=A,A=Ua()){case 40:if(z!=108&&kt(P,k-1)==58){Xs(P+=Ee($d(A),"&","&\f"),"&\f",ax(p?b[p-1]:0))!=-1&&(O=-1);break}case 34:case 39:case 91:P+=$d(A);break;case 9:case 10:case 13:case 32:P+=Cw(z);break;case 92:P+=Aw(Qs()-1,7);continue;case 47:switch(Or()){case 42:case 47:Jl(Rw(Tw(Ua(),Qs()),i,l,v),v);break;default:P+="/"}break;case 123*N:b[p++]=tn(P)*O;case 125*N:case 59:case 0:switch(A){case 0:case 125:B=0;case 59+y:O==-1&&(P=Ee(P,/\f/g,"")),D>0&&tn(P)-k&&Jl(D>32?Vg(P+";",s,l,k-1,v):Vg(Ee(P," ","")+";",s,l,k-2,v),v);break;case 59:P+=";";default:if(Jl(G=Gg(P,i,l,p,y,d,b,q,W=[],_=[],k,f),f),A===123)if(y===0)Zs(P,i,G,G,W,f,k,b,_);else switch(E===99&&kt(P,3)===110?100:E){case 100:case 108:case 109:case 115:Zs(a,G,G,s&&Jl(Gg(a,G,G,0,0,d,b,q,d,W=[],k,_),_),d,_,k,b,s?W:_);break;default:Zs(P,G,G,G,[""],_,0,b,_)}}p=y=D=0,N=O=1,q=P="",k=g;break;case 58:k=1+tn(P),D=z;default:if(N<1){if(A==123)--N;else if(A==125&&N++==0&&Sw()==125)continue}switch(P+=kf(A),A*N){case 38:O=y>0?1:(P+="\f",-1);break;case 44:b[p++]=(tn(P)-1)*O,O=1;break;case 64:Or()===45&&(P+=$d(Ua())),E=Or(),y=k=tn(q=P+=kw(Qs())),A++;break;case 45:z===45&&tn(P)==2&&(N=0)}}return f}function Gg(a,i,l,s,d,f,g,b,v,p,y,k){for(var E=d-1,D=d===0?f:[""],z=rx(D),N=0,B=0,O=0;N<s;++N)for(var A=0,q=Bi(a,E+1,E=ax(B=g[N])),W=a;A<z;++A)(W=nx(B>0?D[A]+" "+q:Ee(q,/&\f/g,D[A])))&&(v[O++]=W);return gc(a,i,l,d===0?hc:b,v,p,y,k)}function Rw(a,i,l,s){return gc(a,i,l,ex,kf(ww()),Bi(a,2,-2),0,s)}function Vg(a,i,l,s,d){return gc(a,i,l,Tf,Bi(a,0,s),Bi(a,s+1,-1),s,d)}function lx(a,i,l){switch(bw(a,i)){case 5103:return He+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return He+a+a;case 4789:return Wl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return He+a+Wl+a+Fe+a+a;case 5936:switch(kt(a,i+11)){case 114:return He+a+Fe+Ee(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return He+a+Fe+Ee(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return He+a+Fe+Ee(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return He+a+Fe+a+a;case 6165:return He+a+Fe+"flex-"+a+a;case 5187:return He+a+Ee(a,/(\w+).+(:[^]+)/,He+"box-$1$2"+Fe+"flex-$1$2")+a;case 5443:return He+a+Fe+"flex-item-"+Ee(a,/flex-|-self/g,"")+(Tn(a,/flex-|baseline/)?"":Fe+"grid-row-"+Ee(a,/flex-|-self/g,""))+a;case 4675:return He+a+Fe+"flex-line-pack"+Ee(a,/align-content|flex-|-self/g,"")+a;case 5548:return He+a+Fe+Ee(a,"shrink","negative")+a;case 5292:return He+a+Fe+Ee(a,"basis","preferred-size")+a;case 6060:return He+"box-"+Ee(a,"-grow","")+He+a+Fe+Ee(a,"grow","positive")+a;case 4554:return He+Ee(a,/([^-])(transform)/g,"$1"+He+"$2")+a;case 6187:return Ee(Ee(Ee(a,/(zoom-|grab)/,He+"$1"),/(image-set)/,He+"$1"),a,"")+a;case 5495:case 3959:return Ee(a,/(image-set\([^]*)/,He+"$1$`$1");case 4968:return Ee(Ee(a,/(.+:)(flex-)?(.*)/,He+"box-pack:$3"+Fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+He+a+a;case 4200:if(!Tn(a,/flex-|baseline/))return Fe+"grid-column-align"+Bi(a,i)+a;break;case 2592:case 3360:return Fe+Ee(a,"template-","")+a;case 4384:case 3616:return l&&l.some(function(s,d){return i=d,Tn(s.props,/grid-\w+-end/)})?~Xs(a+(l=l[i].value),"span",0)?a:Fe+Ee(a,"-start","")+a+Fe+"grid-row-span:"+(~Xs(l,"span",0)?Tn(l,/\d+/):+Tn(l,/\d+/)-+Tn(a,/\d+/))+";":Fe+Ee(a,"-start","")+a;case 4896:case 4128:return l&&l.some(function(s){return Tn(s.props,/grid-\w+-start/)})?a:Fe+Ee(Ee(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Ee(a,/(.+)-inline(.+)/,He+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(a)-1-i>6)switch(kt(a,i+1)){case 109:if(kt(a,i+4)!==45)break;case 102:return Ee(a,/(.+:)(.+)-([^]+)/,"$1"+He+"$2-$3$1"+Wl+(kt(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~Xs(a,"stretch",0)?lx(Ee(a,"stretch","fill-available"),i,l)+a:a}break;case 5152:case 5920:return Ee(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,d,f,g,b,v,p){return Fe+d+":"+f+p+(g?Fe+d+"-span:"+(b?v:+v-+f)+p:"")+a});case 4949:if(kt(a,i+6)===121)return Ee(a,":",":"+He)+a;break;case 6444:switch(kt(a,kt(a,14)===45?18:11)){case 120:return Ee(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+He+(kt(a,14)===45?"inline-":"")+"box$3$1"+He+"$2$3$1"+Fe+"$2box$3")+a;case 100:return Ee(a,":",":"+Fe)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ee(a,"scroll-","scroll-snap-")+a}return a}function Js(a,i){for(var l="",s=0;s<a.length;s++)l+=i(a[s],s,a,i)||"";return l}function Ow(a,i,l,s){switch(a.type){case vw:if(a.children.length)break;case xw:case Tf:return a.return=a.return||a.value;case ex:return"";case tx:return a.return=a.value+"{"+Js(a.children,s)+"}";case hc:if(!tn(a.value=a.props.join(",")))return""}return tn(l=Js(a.children,s))?a.return=a.value+"{"+l+"}":""}function Dw(a){var i=rx(a);return function(l,s,d,f){for(var g="",b=0;b<i;b++)g+=a[b](l,s,d,f)||"";return g}}function Mw(a){return function(i){i.root||(i=i.return)&&a(i)}}function Nw(a,i,l,s){if(a.length>-1&&!a.return)switch(a.type){case Tf:a.return=lx(a.value,a.length,l);return;case tx:return Js([ir(a,{value:Ee(a.value,"@","@"+He)})],s);case hc:if(a.length)return yw(l=a.props,function(d){switch(Tn(d,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ai(ir(a,{props:[Ee(d,/:(read-\w+)/,":"+Wl+"$1")]})),Ai(ir(a,{props:[d]})),rf(a,{props:Yg(l,s)});break;case"::placeholder":Ai(ir(a,{props:[Ee(d,/:(plac\w+)/,":"+He+"input-$1")]})),Ai(ir(a,{props:[Ee(d,/:(plac\w+)/,":"+Wl+"$1")]})),Ai(ir(a,{props:[Ee(d,/:(plac\w+)/,Fe+"input-$1")]})),Ai(ir(a,{props:[d]})),rf(a,{props:Yg(l,s)});break}return""})}}var Bw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fa={},Li=typeof process<"u"&&fa!==void 0&&(fa.REACT_APP_SC_ATTR||fa.SC_ATTR)||"data-styled",ox="active",sx="data-styled-version",vc="6.1.18",zf=`/*!sc*/
`,Ws=typeof window<"u"&&typeof document<"u",_w=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&fa!==void 0&&fa.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&fa.REACT_APP_SC_DISABLE_SPEEDY!==""?fa.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&fa.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&fa!==void 0&&fa.SC_DISABLE_SPEEDY!==void 0&&fa.SC_DISABLE_SPEEDY!==""&&fa.SC_DISABLE_SPEEDY!=="false"&&fa.SC_DISABLE_SPEEDY),Lw={},bc=Object.freeze([]),Hi=Object.freeze({});function cx(a,i,l){return l===void 0&&(l=Hi),a.theme!==l.theme&&a.theme||i||l.theme}var ux=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Hw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Uw=/(^-|-$)/g;function Xg(a){return a.replace(Hw,"-").replace(Uw,"")}var $w=/(a)(d)/gi,Cs=52,Qg=function(a){return String.fromCharCode(a+(a>25?39:97))};function sf(a){var i,l="";for(i=Math.abs(a);i>Cs;i=i/Cs|0)l=Qg(i%Cs)+l;return(Qg(i%Cs)+l).replace($w,"$1-$2")}var qd,dx=5381,Oi=function(a,i){for(var l=i.length;l;)a=33*a^i.charCodeAt(--l);return a},fx=function(a){return Oi(dx,a)};function mx(a){return sf(fx(a)>>>0)}function qw(a){return a.displayName||a.name||"Component"}function Yd(a){return typeof a=="string"&&!0}var hx=typeof Symbol=="function"&&Symbol.for,px=hx?Symbol.for("react.memo"):60115,Yw=hx?Symbol.for("react.forward_ref"):60112,Gw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xw=((qd={})[Yw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qd[px]=gx,qd);function Zg(a){return("type"in(i=a)&&i.type.$$typeof)===px?gx:"$$typeof"in a?Xw[a.$$typeof]:Gw;var i}var Qw=Object.defineProperty,Zw=Object.getOwnPropertyNames,Kg=Object.getOwnPropertySymbols,Kw=Object.getOwnPropertyDescriptor,Pw=Object.getPrototypeOf,Pg=Object.prototype;function xx(a,i,l){if(typeof i!="string"){if(Pg){var s=Pw(i);s&&s!==Pg&&xx(a,s,l)}var d=Zw(i);Kg&&(d=d.concat(Kg(i)));for(var f=Zg(a),g=Zg(i),b=0;b<d.length;++b){var v=d[b];if(!(v in Vw||l&&l[v]||g&&v in g||f&&v in f)){var p=Kw(i,v);try{Qw(a,v,p)}catch{}}}}return a}function Ui(a){return typeof a=="function"}function Rf(a){return typeof a=="object"&&"styledComponentId"in a}function Rr(a,i){return a&&i?"".concat(a," ").concat(i):a||i||""}function cf(a,i){if(a.length===0)return"";for(var l=a[0],s=1;s<a.length;s++)l+=a[s];return l}function to(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function uf(a,i,l){if(l===void 0&&(l=!1),!l&&!to(a)&&!Array.isArray(a))return i;if(Array.isArray(i))for(var s=0;s<i.length;s++)a[s]=uf(a[s],i[s]);else if(to(i))for(var s in i)a[s]=uf(a[s],i[s]);return a}function Of(a,i){Object.defineProperty(a,"toString",{value:i})}function lo(a){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var Fw=function(){function a(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return a.prototype.indexOfGroup=function(i){for(var l=0,s=0;s<i;s++)l+=this.groupSizes[s];return l},a.prototype.insertRules=function(i,l){if(i>=this.groupSizes.length){for(var s=this.groupSizes,d=s.length,f=d;i>=f;)if((f<<=1)<0)throw lo(16,"".concat(i));this.groupSizes=new Uint32Array(f),this.groupSizes.set(s),this.length=f;for(var g=d;g<f;g++)this.groupSizes[g]=0}for(var b=this.indexOfGroup(i+1),v=(g=0,l.length);g<v;g++)this.tag.insertRule(b,l[g])&&(this.groupSizes[i]++,b++)},a.prototype.clearGroup=function(i){if(i<this.length){var l=this.groupSizes[i],s=this.indexOfGroup(i),d=s+l;this.groupSizes[i]=0;for(var f=s;f<d;f++)this.tag.deleteRule(s)}},a.prototype.getGroup=function(i){var l="";if(i>=this.length||this.groupSizes[i]===0)return l;for(var s=this.groupSizes[i],d=this.indexOfGroup(i),f=d+s,g=d;g<f;g++)l+="".concat(this.tag.getRule(g)).concat(zf);return l},a}(),Ks=new Map,Is=new Map,Ps=1,As=function(a){if(Ks.has(a))return Ks.get(a);for(;Is.has(Ps);)Ps++;var i=Ps++;return Ks.set(a,i),Is.set(i,a),i},Jw=function(a,i){Ps=i+1,Ks.set(a,i),Is.set(i,a)},Ww="style[".concat(Li,"][").concat(sx,'="').concat(vc,'"]'),Iw=new RegExp("^".concat(Li,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),e2=function(a,i,l){for(var s,d=l.split(","),f=0,g=d.length;f<g;f++)(s=d[f])&&a.registerName(i,s)},t2=function(a,i){for(var l,s=((l=i.textContent)!==null&&l!==void 0?l:"").split(zf),d=[],f=0,g=s.length;f<g;f++){var b=s[f].trim();if(b){var v=b.match(Iw);if(v){var p=0|parseInt(v[1],10),y=v[2];p!==0&&(Jw(y,p),e2(a,y,v[3]),a.getTag().insertRules(p,d)),d.length=0}else d.push(b)}}},Fg=function(a){for(var i=document.querySelectorAll(Ww),l=0,s=i.length;l<s;l++){var d=i[l];d&&d.getAttribute(Li)!==ox&&(t2(a,d),d.parentNode&&d.parentNode.removeChild(d))}};function a2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vx=function(a){var i=document.head,l=a||i,s=document.createElement("style"),d=function(b){var v=Array.from(b.querySelectorAll("style[".concat(Li,"]")));return v[v.length-1]}(l),f=d!==void 0?d.nextSibling:null;s.setAttribute(Li,ox),s.setAttribute(sx,vc);var g=a2();return g&&s.setAttribute("nonce",g),l.insertBefore(s,f),s},n2=function(){function a(i){this.element=vx(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(l){if(l.sheet)return l.sheet;for(var s=document.styleSheets,d=0,f=s.length;d<f;d++){var g=s[d];if(g.ownerNode===l)return g}throw lo(17)}(this.element),this.length=0}return a.prototype.insertRule=function(i,l){try{return this.sheet.insertRule(l,i),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},a.prototype.getRule=function(i){var l=this.sheet.cssRules[i];return l&&l.cssText?l.cssText:""},a}(),r2=function(){function a(i){this.element=vx(i),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(i,l){if(i<=this.length&&i>=0){var s=document.createTextNode(l);return this.element.insertBefore(s,this.nodes[i]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},a.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},a}(),i2=function(){function a(i){this.rules=[],this.length=0}return a.prototype.insertRule=function(i,l){return i<=this.length&&(this.rules.splice(i,0,l),this.length++,!0)},a.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},a.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},a}(),Jg=Ws,l2={isServer:!Ws,useCSSOMInjection:!_w},ec=function(){function a(i,l,s){i===void 0&&(i=Hi),l===void 0&&(l={});var d=this;this.options=Ut(Ut({},l2),i),this.gs=l,this.names=new Map(s),this.server=!!i.isServer,!this.server&&Ws&&Jg&&(Jg=!1,Fg(this)),Of(this,function(){return function(f){for(var g=f.getTag(),b=g.length,v="",p=function(k){var E=function(O){return Is.get(O)}(k);if(E===void 0)return"continue";var D=f.names.get(E),z=g.getGroup(k);if(D===void 0||!D.size||z.length===0)return"continue";var N="".concat(Li,".g").concat(k,'[id="').concat(E,'"]'),B="";D!==void 0&&D.forEach(function(O){O.length>0&&(B+="".concat(O,","))}),v+="".concat(z).concat(N,'{content:"').concat(B,'"}').concat(zf)},y=0;y<b;y++)p(y);return v}(d)})}return a.registerId=function(i){return As(i)},a.prototype.rehydrate=function(){!this.server&&Ws&&Fg(this)},a.prototype.reconstructWithOptions=function(i,l){return l===void 0&&(l=!0),new a(Ut(Ut({},this.options),i),this.gs,l&&this.names||void 0)},a.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(i=function(l){var s=l.useCSSOMInjection,d=l.target;return l.isServer?new i2(d):s?new n2(d):new r2(d)}(this.options),new Fw(i)));var i},a.prototype.hasNameForId=function(i,l){return this.names.has(i)&&this.names.get(i).has(l)},a.prototype.registerName=function(i,l){if(As(i),this.names.has(i))this.names.get(i).add(l);else{var s=new Set;s.add(l),this.names.set(i,s)}},a.prototype.insertRules=function(i,l,s){this.registerName(i,l),this.getTag().insertRules(As(i),s)},a.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},a.prototype.clearRules=function(i){this.getTag().clearGroup(As(i)),this.clearNames(i)},a.prototype.clearTag=function(){this.tag=void 0},a}(),o2=/&/g,s2=/^\s*\/\/.*$/gm;function bx(a,i){return a.map(function(l){return l.type==="rule"&&(l.value="".concat(i," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(i," ")),l.props=l.props.map(function(s){return"".concat(i," ").concat(s)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=bx(l.children,i)),l})}function c2(a){var i,l,s,d=Hi,f=d.options,g=f===void 0?Hi:f,b=d.plugins,v=b===void 0?bc:b,p=function(E,D,z){return z.startsWith(l)&&z.endsWith(l)&&z.replaceAll(l,"").length>0?".".concat(i):E},y=v.slice();y.push(function(E){E.type===hc&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(o2,l).replace(s,p))}),g.prefix&&y.push(Nw),y.push(Ow);var k=function(E,D,z,N){D===void 0&&(D=""),z===void 0&&(z=""),N===void 0&&(N="&"),i=N,l=D,s=new RegExp("\\".concat(l,"\\b"),"g");var B=E.replace(s2,""),O=zw(z||D?"".concat(z," ").concat(D," { ").concat(B," }"):B);g.namespace&&(O=bx(O,g.namespace));var A=[];return Js(O,Dw(y.concat(Mw(function(q){return A.push(q)})))),A};return k.hash=v.length?v.reduce(function(E,D){return D.name||lo(15),Oi(E,D.name)},dx).toString():"",k}var u2=new ec,df=c2(),yx=Ht.createContext({shouldForwardProp:void 0,styleSheet:u2,stylis:df});yx.Consumer;Ht.createContext(void 0);function ff(){return x.useContext(yx)}var d2=function(){function a(i,l){var s=this;this.inject=function(d,f){f===void 0&&(f=df);var g=s.name+f.hash;d.hasNameForId(s.id,g)||d.insertRules(s.id,g,f(s.rules,g,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=l,Of(this,function(){throw lo(12,String(s.name))})}return a.prototype.getName=function(i){return i===void 0&&(i=df),this.name+i.hash},a}(),f2=function(a){return a>="A"&&a<="Z"};function Wg(a){for(var i="",l=0;l<a.length;l++){var s=a[l];if(l===1&&s==="-"&&a[0]==="-")return a;f2(s)?i+="-"+s.toLowerCase():i+=s}return i.startsWith("ms-")?"-"+i:i}var wx=function(a){return a==null||a===!1||a===""},Sx=function(a){var i,l,s=[];for(var d in a){var f=a[d];a.hasOwnProperty(d)&&!wx(f)&&(Array.isArray(f)&&f.isCss||Ui(f)?s.push("".concat(Wg(d),":"),f,";"):to(f)?s.push.apply(s,eo(eo(["".concat(d," {")],Sx(f),!1),["}"],!1)):s.push("".concat(Wg(d),": ").concat((i=d,(l=f)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||i in Bw||i.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return s};function sr(a,i,l,s){if(wx(a))return[];if(Rf(a))return[".".concat(a.styledComponentId)];if(Ui(a)){if(!Ui(f=a)||f.prototype&&f.prototype.isReactComponent||!i)return[a];var d=a(i);return sr(d,i,l,s)}var f;return a instanceof d2?l?(a.inject(l,s),[a.getName(s)]):[a]:to(a)?Sx(a):Array.isArray(a)?Array.prototype.concat.apply(bc,a.map(function(g){return sr(g,i,l,s)})):[a.toString()]}function jx(a){for(var i=0;i<a.length;i+=1){var l=a[i];if(Ui(l)&&!Rf(l))return!1}return!0}var m2=fx(vc),h2=function(){function a(i,l,s){this.rules=i,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&jx(i),this.componentId=l,this.baseHash=Oi(m2,l),this.baseStyle=s,ec.registerId(l)}return a.prototype.generateAndInjectStyles=function(i,l,s){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,l,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))d=Rr(d,this.staticRulesId);else{var f=cf(sr(this.rules,i,l,s)),g=sf(Oi(this.baseHash,f)>>>0);if(!l.hasNameForId(this.componentId,g)){var b=s(f,".".concat(g),void 0,this.componentId);l.insertRules(this.componentId,g,b)}d=Rr(d,g),this.staticRulesId=g}else{for(var v=Oi(this.baseHash,s.hash),p="",y=0;y<this.rules.length;y++){var k=this.rules[y];if(typeof k=="string")p+=k;else if(k){var E=cf(sr(k,i,l,s));v=Oi(v,E+y),p+=E}}if(p){var D=sf(v>>>0);l.hasNameForId(this.componentId,D)||l.insertRules(this.componentId,D,s(p,".".concat(D),void 0,this.componentId)),d=Rr(d,D)}}return d},a}(),Df=Ht.createContext(void 0);Df.Consumer;var Gd={};function p2(a,i,l){var s=Rf(a),d=a,f=!Yd(a),g=i.attrs,b=g===void 0?bc:g,v=i.componentId,p=v===void 0?function(W,_){var G=typeof W!="string"?"sc":Xg(W);Gd[G]=(Gd[G]||0)+1;var P="".concat(G,"-").concat(mx(vc+G+Gd[G]));return _?"".concat(_,"-").concat(P):P}(i.displayName,i.parentComponentId):v,y=i.displayName,k=y===void 0?function(W){return Yd(W)?"styled.".concat(W):"Styled(".concat(qw(W),")")}(a):y,E=i.displayName&&i.componentId?"".concat(Xg(i.displayName),"-").concat(i.componentId):i.componentId||p,D=s&&d.attrs?d.attrs.concat(b).filter(Boolean):b,z=i.shouldForwardProp;if(s&&d.shouldForwardProp){var N=d.shouldForwardProp;if(i.shouldForwardProp){var B=i.shouldForwardProp;z=function(W,_){return N(W,_)&&B(W,_)}}else z=N}var O=new h2(l,E,s?d.componentStyle:void 0);function A(W,_){return function(G,P,ne){var Z=G.attrs,ee=G.componentStyle,le=G.defaultProps,oe=G.foldedComponentIds,be=G.styledComponentId,xe=G.target,he=Ht.useContext(Df),U=ff(),J=G.shouldForwardProp||U.shouldForwardProp,ie=cx(P,he,le)||Hi,ce=function(re,ae,Se){for(var I,ye=Ut(Ut({},ae),{className:void 0,theme:Se}),we=0;we<re.length;we+=1){var Ae=Ui(I=re[we])?I(ye):I;for(var ve in Ae)ye[ve]=ve==="className"?Rr(ye[ve],Ae[ve]):ve==="style"?Ut(Ut({},ye[ve]),Ae[ve]):Ae[ve]}return ae.className&&(ye.className=Rr(ye.className,ae.className)),ye}(Z,P,ie),w=ce.as||xe,T={};for(var X in ce)ce[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&ce.theme===ie||(X==="forwardedAs"?T.as=ce.forwardedAs:J&&!J(X,w)||(T[X]=ce[X]));var F=function(re,ae){var Se=ff(),I=re.generateAndInjectStyles(ae,Se.styleSheet,Se.stylis);return I}(ee,ce),te=Rr(oe,be);return F&&(te+=" "+F),ce.className&&(te+=" "+ce.className),T[Yd(w)&&!ux.has(w)?"class":"className"]=te,ne&&(T.ref=ne),x.createElement(w,T)}(q,W,_)}A.displayName=k;var q=Ht.forwardRef(A);return q.attrs=D,q.componentStyle=O,q.displayName=k,q.shouldForwardProp=z,q.foldedComponentIds=s?Rr(d.foldedComponentIds,d.styledComponentId):"",q.styledComponentId=E,q.target=s?d.target:a,Object.defineProperty(q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=s?function(_){for(var G=[],P=1;P<arguments.length;P++)G[P-1]=arguments[P];for(var ne=0,Z=G;ne<Z.length;ne++)uf(_,Z[ne],!0);return _}({},d.defaultProps,W):W}}),Of(q,function(){return".".concat(q.styledComponentId)}),f&&xx(q,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),q}function Ig(a,i){for(var l=[a[0]],s=0,d=i.length;s<d;s+=1)l.push(i[s],a[s+1]);return l}var e0=function(a){return Object.assign(a,{isCss:!0})};function Ex(a){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];if(Ui(a)||to(a))return e0(sr(Ig(bc,eo([a],i,!0))));var s=a;return i.length===0&&s.length===1&&typeof s[0]=="string"?sr(s):e0(sr(Ig(s,i)))}function mf(a,i,l){if(l===void 0&&(l=Hi),!i)throw lo(1,i);var s=function(d){for(var f=[],g=1;g<arguments.length;g++)f[g-1]=arguments[g];return a(i,l,Ex.apply(void 0,eo([d],f,!1)))};return s.attrs=function(d){return mf(a,i,Ut(Ut({},l),{attrs:Array.prototype.concat(l.attrs,d).filter(Boolean)}))},s.withConfig=function(d){return mf(a,i,Ut(Ut({},l),d))},s}var Cx=function(a){return mf(p2,a)},j=Cx;ux.forEach(function(a){j[a]=Cx(a)});var g2=function(){function a(i,l){this.rules=i,this.componentId=l,this.isStatic=jx(i),ec.registerId(this.componentId+1)}return a.prototype.createStyles=function(i,l,s,d){var f=d(cf(sr(this.rules,l,s,d)),""),g=this.componentId+i;s.insertRules(g,g,f)},a.prototype.removeStyles=function(i,l){l.clearRules(this.componentId+i)},a.prototype.renderStyles=function(i,l,s,d){i>2&&ec.registerId(this.componentId+i),this.removeStyles(i,s),this.createStyles(i,l,s,d)},a}();function qa(a){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];var s=Ex.apply(void 0,eo([a],i,!1)),d="sc-global-".concat(mx(JSON.stringify(s))),f=new g2(s,d),g=function(v){var p=ff(),y=Ht.useContext(Df),k=Ht.useRef(p.styleSheet.allocateGSInstance(d)).current;return p.styleSheet.server&&b(k,v,p.styleSheet,y,p.stylis),Ht.useLayoutEffect(function(){if(!p.styleSheet.server)return b(k,v,p.styleSheet,y,p.stylis),function(){return f.removeStyles(k,p.styleSheet)}},[k,v,p.styleSheet,y,p.stylis]),null};function b(v,p,y,k,E){if(f.isStatic)f.renderStyles(v,Lw,y,E);else{var D=Ut(Ut({},p),{theme:cx(p,k,g.defaultProps)});f.renderStyles(v,D,y,E)}}return Ht.memo(g)}const Ax=x.createContext(),x2=({children:a})=>{const[i,l]=x.useState(!1);return c.jsx(Ax.Provider,{value:{isSidebarOpen:i,setIsSidebarOpen:l},children:a})},yc=()=>x.useContext(Ax);function hf(){return localStorage.getItem("isLoggedIn")==="true"}const v2=j.nav`
  background: #00233d;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`,b2=j.div`
  max-width: 1200px;
  margin: 0 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`,y2=j(ma)`
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
`,w2=j.div`
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
`,S2=j.button`
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
`,j2=j.button`
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
`,E2=j.div`
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
`,C2=j.button`
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
`,A2=j.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
  flex: 1;

  @media (max-width: 768px) {
    margin: 1.5rem 0 0 0;
  }
`,Pl=j.li`
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
`,T2=j.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 1rem 0;

  @media (max-width: 768px) {
    margin: 0.8rem 0;
  }
`,k2=()=>{const{isSidebarOpen:a,setIsSidebarOpen:i}=yc(),[l,s]=x.useState(()=>hf()),[d,f]=x.useState(localStorage.getItem("avatar")||""),g=Br(),b=()=>{i(!a)},v=()=>{i(!1)},{language:p,toggleLanguage:y}=pa();x.useEffect(()=>{const E=()=>s(hf());return window.addEventListener("storage",E),()=>window.removeEventListener("storage",E)},[]);const k=E=>{E.preventDefault(),localStorage.removeItem("isLoggedIn"),s(!1),i(!1),g("/")};return c.jsxs(c.Fragment,{children:[c.jsx(v2,{children:c.jsxs(b2,{children:[c.jsxs(y2,{to:"/",children:[c.jsx("i",{className:"fas fa-plane-departure"}),"Tickify"]}),c.jsxs(w2,{children:[c.jsx(S2,{onClick:y,children:c.jsx("i",{className:"fas fa-globe"})}),l&&c.jsx(ma,{to:"/profile",style:{color:"#fff",marginRight:"8px",fontSize:"1.6rem",display:"flex",alignItems:"center",textDecoration:"none"},children:d?c.jsx("img",{src:d,alt:"avatar",style:{width:36,height:36,borderRadius:"50%",objectFit:"cover",border:"2px solid #fff",background:"#eee"}}):c.jsx("i",{className:"fas fa-user-circle"})}),c.jsx(j2,{onClick:b,children:c.jsx("i",{className:"fas fa-bars"})})]})]})}),c.jsxs(E2,{isOpen:a,children:[c.jsx(C2,{onClick:v,children:c.jsx("i",{className:"fas fa-times"})}),c.jsxs(A2,{children:[c.jsx(Pl,{children:c.jsxs(ma,{to:"/",children:[c.jsx("i",{className:"fas fa-plane"}),c.jsx("span",{children:"رحلات طيران"})]})}),c.jsx(T2,{}),l?c.jsx(Pl,{children:c.jsxs("a",{href:"/",onClick:k,style:{display:"flex",alignItems:"center",textDecoration:"none",color:"#00233d",padding:"0.75rem",borderRadius:"8px",transition:"all 0.3s ease",flexDirection:"row-reverse",gap:"1.5rem"},children:[c.jsx("i",{className:"fas fa-sign-out-alt"}),c.jsx("span",{children:"تسجيل الخروج"})]})}):c.jsx(Pl,{children:c.jsxs(ma,{to:"/login",children:[c.jsx("i",{className:"fas fa-sign-in-alt"}),c.jsx("span",{children:"تسجيل الدخول"})]})}),c.jsx(Pl,{children:c.jsxs(ma,{to:"/app",children:[c.jsx("i",{className:"fas fa-mobile-alt"}),c.jsx("span",{children:"التطبيق"})]})}),c.jsx(Pl,{children:c.jsxs(ma,{to:"/help",children:[c.jsx("i",{className:"fas fa-question-circle"}),c.jsx("span",{children:"مساعدة"})]})})]})]})]})};var Tx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},t0=Ht.createContext&&Ht.createContext(Tx),z2=["attr","size","title"];function R2(a,i){if(a==null)return{};var l=O2(a,i),s,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)s=f[d],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(a,s)&&(l[s]=a[s])}return l}function O2(a,i){if(a==null)return{};var l={};for(var s in a)if(Object.prototype.hasOwnProperty.call(a,s)){if(i.indexOf(s)>=0)continue;l[s]=a[s]}return l}function tc(){return tc=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(a[s]=l[s])}return a},tc.apply(this,arguments)}function a0(a,i){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);i&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),l.push.apply(l,s)}return l}function ac(a){for(var i=1;i<arguments.length;i++){var l=arguments[i]!=null?arguments[i]:{};i%2?a0(Object(l),!0).forEach(function(s){D2(a,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):a0(Object(l)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(l,s))})}return a}function D2(a,i,l){return i=M2(i),i in a?Object.defineProperty(a,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[i]=l,a}function M2(a){var i=N2(a,"string");return typeof i=="symbol"?i:i+""}function N2(a,i){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var s=l.call(a,i);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}function kx(a){return a&&a.map((i,l)=>Ht.createElement(i.tag,ac({key:l},i.attr),kx(i.child)))}function ln(a){return i=>Ht.createElement(B2,tc({attr:ac({},a.attr)},i),kx(a.child))}function B2(a){var i=l=>{var{attr:s,size:d,title:f}=a,g=R2(a,z2),b=d||l.size||"1em",v;return l.className&&(v=l.className),a.className&&(v=(v?v+" ":"")+a.className),Ht.createElement("svg",tc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,s,g,{className:v,style:ac(ac({color:a.color||l.color},l.style),a.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),f&&Ht.createElement("title",null,f),a.children)};return t0!==void 0?Ht.createElement(t0.Consumer,null,l=>i(l)):i(Tx)}function _2(a){return ln({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(a)}function L2(a){return ln({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"},child:[]}]})(a)}function H2(a){return ln({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(a)}function U2(a){return ln({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(a)}function $2(a){return ln({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"},child:[]}]})(a)}function q2(a){return ln({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"},child:[]}]})(a)}function Y2(a){return ln({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(a)}function G2(a){return ln({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"},child:[]}]})(a)}function V2(a){return ln({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(a)}function cr(a){"@babel/helpers - typeof";return cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},cr(a)}function X2(a,i){if(cr(a)!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var s=l.call(a,i);if(cr(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}function Q2(a){var i=X2(a,"string");return cr(i)=="symbol"?i:i+""}function za(a,i,l){return(i=Q2(i))in a?Object.defineProperty(a,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[i]=l,a}function n0(a,i){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);i&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),l.push.apply(l,s)}return l}function $t(a){for(var i=1;i<arguments.length;i++){var l=arguments[i]!=null?arguments[i]:{};i%2?n0(Object(l),!0).forEach(function(s){za(a,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):n0(Object(l)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(l,s))})}return a}function pf(a,i){(i==null||i>a.length)&&(i=a.length);for(var l=0,s=Array(i);l<i;l++)s[l]=a[l];return s}function Z2(a){if(Array.isArray(a))return pf(a)}function K2(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function zx(a,i){if(a){if(typeof a=="string")return pf(a,i);var l={}.toString.call(a).slice(8,-1);return l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set"?Array.from(a):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?pf(a,i):void 0}}function P2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kn(a){return Z2(a)||K2(a)||zx(a)||P2()}function F2(a){if(Array.isArray(a))return a}function J2(a,i){var l=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(l!=null){var s,d,f,g,b=[],v=!0,p=!1;try{if(f=(l=l.call(a)).next,i===0){if(Object(l)!==l)return;v=!1}else for(;!(v=(s=f.call(l)).done)&&(b.push(s.value),b.length!==i);v=!0);}catch(y){p=!0,d=y}finally{try{if(!v&&l.return!=null&&(g=l.return(),Object(g)!==g))return}finally{if(p)throw d}}return b}}function W2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nt(a,i){return F2(a)||J2(a,i)||zx(a,i)||W2()}var Vd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var r0;function I2(){return r0||(r0=1,function(a){(function(){var i={}.hasOwnProperty;function l(){for(var f="",g=0;g<arguments.length;g++){var b=arguments[g];b&&(f=d(f,s(b)))}return f}function s(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return l.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var g="";for(var b in f)i.call(f,b)&&f[b]&&(g=d(g,b));return g}function d(f,g){return g?f?f+" "+g:f+g:f}a.exports?(l.default=l,a.exports=l):window.classNames=l})()}(Vd)),Vd.exports}var eS=I2();const Mr=B0(eS);function Di(a){var i=x.useRef();i.current=a;var l=x.useCallback(function(){for(var s,d=arguments.length,f=new Array(d),g=0;g<d;g++)f[g]=arguments[g];return(s=i.current)===null||s===void 0?void 0:s.call.apply(s,[i].concat(f))},[]);return l}function tS(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var i0=tS()?x.useLayoutEffect:x.useEffect,Rx=function(i,l){var s=x.useRef(!0);i0(function(){return i(s.current)},l),i0(function(){return s.current=!1,function(){s.current=!0}},[])},l0=function(i,l){Rx(function(s){if(!s)return i()},l)};function o0(a){var i=x.useRef(!1),l=x.useState(a),s=Nt(l,2),d=s[0],f=s[1];x.useEffect(function(){return i.current=!1,function(){i.current=!0}},[]);function g(b,v){v&&i.current||f(b)}return[d,g]}function Xd(a){return a!==void 0}function aS(a,i){var l=i||{},s=l.defaultValue,d=l.value,f=l.onChange,g=l.postState,b=o0(function(){return Xd(d)?d:Xd(s)?typeof s=="function"?s():s:typeof a=="function"?a():a}),v=Nt(b,2),p=v[0],y=v[1],k=d!==void 0?d:p,E=g?g(k):k,D=Di(f),z=o0([k]),N=Nt(z,2),B=N[0],O=N[1];l0(function(){var q=B[0];p!==q&&D(p,q)},[B]),l0(function(){Xd(d)||y(d)},[d]);var A=Di(function(q,W){y(q,W),O([k],W)});return[E,A]}var gf={},nS=function(i){};function rS(a,i){}function iS(a,i){}function lS(){gf={}}function Ox(a,i,l){!i&&!gf[l]&&(a(!1,l),gf[l]=!0)}function $i(a,i){Ox(rS,a,i)}function oS(a,i){Ox(iS,a,i)}$i.preMessage=nS;$i.resetWarned=lS;$i.noteOnce=oS;function sS(a,i){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,s=new Set;function d(f,g){var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,v=s.has(f);if($i(!v,"Warning: There may be circular references"),v)return!1;if(f===g)return!0;if(l&&b>1)return!1;s.add(f);var p=b+1;if(Array.isArray(f)){if(!Array.isArray(g)||f.length!==g.length)return!1;for(var y=0;y<f.length;y++)if(!d(f[y],g[y],p))return!1;return!0}if(f&&g&&cr(f)==="object"&&cr(g)==="object"){var k=Object.keys(f);return k.length!==Object.keys(g).length?!1:k.every(function(E){return d(f[E],g[E],p)})}return!1}return d(a,i)}function ao(){return ao=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var s in l)({}).hasOwnProperty.call(l,s)&&(a[s]=l[s])}return a},ao.apply(null,arguments)}function cS(a,i){if(a==null)return{};var l={};for(var s in a)if({}.hasOwnProperty.call(a,s)){if(i.indexOf(s)!==-1)continue;l[s]=a[s]}return l}function Dx(a,i){if(a==null)return{};var l,s,d=cS(a,i);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(s=0;s<f.length;s++)l=f[s],i.indexOf(l)===-1&&{}.propertyIsEnumerable.call(a,l)&&(d[l]=a[l])}return d}function xf(a,i,l){return(a-i)/(l-i)}function Mf(a,i,l,s){var d=xf(i,l,s),f={};switch(a){case"rtl":f.right="".concat(d*100,"%"),f.transform="translateX(50%)";break;case"btt":f.bottom="".concat(d*100,"%"),f.transform="translateY(50%)";break;case"ttb":f.top="".concat(d*100,"%"),f.transform="translateY(-50%)";break;default:f.left="".concat(d*100,"%"),f.transform="translateX(-50%)";break}return f}function zr(a,i){return Array.isArray(a)?a[i]:a}var Tt={BACKSPACE:8,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},_r=x.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),uS=x.createContext({}),dS=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],s0=x.forwardRef(function(a,i){var l=a.prefixCls,s=a.value,d=a.valueIndex,f=a.onStartMove,g=a.onDelete,b=a.style,v=a.render,p=a.dragging,y=a.draggingDelete,k=a.onOffsetChange,E=a.onChangeComplete,D=a.onFocus,z=a.onMouseEnter,N=Dx(a,dS),B=x.useContext(_r),O=B.min,A=B.max,q=B.direction,W=B.disabled,_=B.keyboard,G=B.range,P=B.tabIndex,ne=B.ariaLabelForHandle,Z=B.ariaLabelledByForHandle,ee=B.ariaRequired,le=B.ariaValueTextFormatterForHandle,oe=B.styles,be=B.classNames,xe="".concat(l,"-handle"),he=function(re){W||f(re,d)},U=function(re){D==null||D(re,d)},J=function(re){z(re,d)},ie=function(re){if(!W&&_){var ae=null;switch(re.which||re.keyCode){case Tt.LEFT:ae=q==="ltr"||q==="btt"?-1:1;break;case Tt.RIGHT:ae=q==="ltr"||q==="btt"?1:-1;break;case Tt.UP:ae=q!=="ttb"?1:-1;break;case Tt.DOWN:ae=q!=="ttb"?-1:1;break;case Tt.HOME:ae="min";break;case Tt.END:ae="max";break;case Tt.PAGE_UP:ae=2;break;case Tt.PAGE_DOWN:ae=-2;break;case Tt.BACKSPACE:case Tt.DELETE:g(d);break}ae!==null&&(re.preventDefault(),k(ae,d))}},ce=function(re){switch(re.which||re.keyCode){case Tt.LEFT:case Tt.RIGHT:case Tt.UP:case Tt.DOWN:case Tt.HOME:case Tt.END:case Tt.PAGE_UP:case Tt.PAGE_DOWN:E==null||E();break}},w=Mf(q,s,O,A),T={};if(d!==null){var X;T={tabIndex:W?null:zr(P,d),role:"slider","aria-valuemin":O,"aria-valuemax":A,"aria-valuenow":s,"aria-disabled":W,"aria-label":zr(ne,d),"aria-labelledby":zr(Z,d),"aria-required":zr(ee,d),"aria-valuetext":(X=zr(le,d))===null||X===void 0?void 0:X(s),"aria-orientation":q==="ltr"||q==="rtl"?"horizontal":"vertical",onMouseDown:he,onTouchStart:he,onFocus:U,onMouseEnter:J,onKeyDown:ie,onKeyUp:ce}}var F=x.createElement("div",ao({ref:i,className:Mr(xe,za(za(za({},"".concat(xe,"-").concat(d+1),d!==null&&G),"".concat(xe,"-dragging"),p),"".concat(xe,"-dragging-delete"),y),be.handle),style:$t($t($t({},w),b),oe.handle)},T,N));return v&&(F=v(F,{index:d,prefixCls:l,value:s,dragging:p,draggingDelete:y})),F}),fS=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],mS=x.forwardRef(function(a,i){var l=a.prefixCls,s=a.style,d=a.onStartMove,f=a.onOffsetChange,g=a.values,b=a.handleRender,v=a.activeHandleRender,p=a.draggingIndex,y=a.draggingDelete,k=a.onFocus,E=Dx(a,fS),D=x.useRef({}),z=x.useState(!1),N=Nt(z,2),B=N[0],O=N[1],A=x.useState(-1),q=Nt(A,2),W=q[0],_=q[1],G=function(le){_(le),O(!0)},P=function(le,oe){G(oe),k==null||k(le)},ne=function(le,oe){G(oe)};x.useImperativeHandle(i,function(){return{focus:function(le){var oe;(oe=D.current[le])===null||oe===void 0||oe.focus()},hideHelp:function(){pw.flushSync(function(){O(!1)})}}});var Z=$t({prefixCls:l,onStartMove:d,onOffsetChange:f,render:b,onFocus:P,onMouseEnter:ne},E);return x.createElement(x.Fragment,null,g.map(function(ee,le){var oe=p===le;return x.createElement(s0,ao({ref:function(xe){xe?D.current[le]=xe:delete D.current[le]},dragging:oe,draggingDelete:oe&&y,style:zr(s,le),key:le,value:ee,valueIndex:le},Z))}),v&&B&&x.createElement(s0,ao({key:"a11y"},Z,{value:g[W],valueIndex:null,dragging:p!==-1,draggingDelete:y,render:v,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))}),hS=function(i){var l=i.prefixCls,s=i.style,d=i.children,f=i.value,g=i.onClick,b=x.useContext(_r),v=b.min,p=b.max,y=b.direction,k=b.includedStart,E=b.includedEnd,D=b.included,z="".concat(l,"-text"),N=Mf(y,f,v,p);return x.createElement("span",{className:Mr(z,za({},"".concat(z,"-active"),D&&k<=f&&f<=E)),style:$t($t({},N),s),onMouseDown:function(O){O.stopPropagation()},onClick:function(){g(f)}},d)},pS=function(i){var l=i.prefixCls,s=i.marks,d=i.onClick,f="".concat(l,"-mark");return s.length?x.createElement("div",{className:f},s.map(function(g){var b=g.value,v=g.style,p=g.label;return x.createElement(hS,{key:b,prefixCls:f,style:v,value:b,onClick:d},p)})):null},gS=function(i){var l=i.prefixCls,s=i.value,d=i.style,f=i.activeStyle,g=x.useContext(_r),b=g.min,v=g.max,p=g.direction,y=g.included,k=g.includedStart,E=g.includedEnd,D="".concat(l,"-dot"),z=y&&k<=s&&s<=E,N=$t($t({},Mf(p,s,b,v)),typeof d=="function"?d(s):d);return z&&(N=$t($t({},N),typeof f=="function"?f(s):f)),x.createElement("span",{className:Mr(D,za({},"".concat(D,"-active"),z)),style:N})},xS=function(i){var l=i.prefixCls,s=i.marks,d=i.dots,f=i.style,g=i.activeStyle,b=x.useContext(_r),v=b.min,p=b.max,y=b.step,k=x.useMemo(function(){var E=new Set;if(s.forEach(function(z){E.add(z.value)}),d&&y!==null)for(var D=v;D<=p;)E.add(D),D+=y;return Array.from(E)},[v,p,y,d,s]);return x.createElement("div",{className:"".concat(l,"-step")},k.map(function(E){return x.createElement(gS,{prefixCls:l,key:E,value:E,style:f,activeStyle:g})}))},c0=function(i){var l=i.prefixCls,s=i.style,d=i.start,f=i.end,g=i.index,b=i.onStartMove,v=i.replaceCls,p=x.useContext(_r),y=p.direction,k=p.min,E=p.max,D=p.disabled,z=p.range,N=p.classNames,B="".concat(l,"-track"),O=xf(d,k,E),A=xf(f,k,E),q=function(P){!D&&b&&b(P,-1)},W={};switch(y){case"rtl":W.right="".concat(O*100,"%"),W.width="".concat(A*100-O*100,"%");break;case"btt":W.bottom="".concat(O*100,"%"),W.height="".concat(A*100-O*100,"%");break;case"ttb":W.top="".concat(O*100,"%"),W.height="".concat(A*100-O*100,"%");break;default:W.left="".concat(O*100,"%"),W.width="".concat(A*100-O*100,"%")}var _=v||Mr(B,za(za({},"".concat(B,"-").concat(g+1),g!==null&&z),"".concat(l,"-track-draggable"),b),N.track);return x.createElement("div",{className:_,style:$t($t({},W),s),onMouseDown:q,onTouchStart:q})},vS=function(i){var l=i.prefixCls,s=i.style,d=i.values,f=i.startPoint,g=i.onStartMove,b=x.useContext(_r),v=b.included,p=b.range,y=b.min,k=b.styles,E=b.classNames,D=x.useMemo(function(){if(!p){if(d.length===0)return[];var N=f??y,B=d[0];return[{start:Math.min(N,B),end:Math.max(N,B)}]}for(var O=[],A=0;A<d.length-1;A+=1)O.push({start:d[A],end:d[A+1]});return O},[d,p,f,y]);if(!v)return null;var z=D!=null&&D.length&&(E.tracks||k.tracks)?x.createElement(c0,{index:null,prefixCls:l,start:D[0].start,end:D[D.length-1].end,replaceCls:Mr(E.tracks,"".concat(l,"-tracks")),style:k.tracks}):null;return x.createElement(x.Fragment,null,z,D.map(function(N,B){var O=N.start,A=N.end;return x.createElement(c0,{index:B,prefixCls:l,style:$t($t({},zr(s,B)),k.track),start:O,end:A,key:B,onStartMove:g})}))},bS=130;function u0(a){var i="targetTouches"in a?a.targetTouches[0]:a;return{pageX:i.pageX,pageY:i.pageY}}function yS(a,i,l,s,d,f,g,b,v,p,y){var k=x.useState(null),E=Nt(k,2),D=E[0],z=E[1],N=x.useState(-1),B=Nt(N,2),O=B[0],A=B[1],q=x.useState(!1),W=Nt(q,2),_=W[0],G=W[1],P=x.useState(l),ne=Nt(P,2),Z=ne[0],ee=ne[1],le=x.useState(l),oe=Nt(le,2),be=oe[0],xe=oe[1],he=x.useRef(null),U=x.useRef(null),J=x.useRef(null),ie=x.useContext(uS),ce=ie.onDragStart,w=ie.onDragChange;Rx(function(){O===-1&&ee(l)},[l,O]),x.useEffect(function(){return function(){document.removeEventListener("mousemove",he.current),document.removeEventListener("mouseup",U.current),J.current&&(J.current.removeEventListener("touchmove",he.current),J.current.removeEventListener("touchend",U.current))}},[]);var T=function(ae,Se,I){Se!==void 0&&z(Se),ee(ae);var ye=ae;I&&(ye=ae.filter(function(we,Ae){return Ae!==O})),g(ye),w&&w({rawValues:ae,deleteIndex:I?O:-1,draggingIndex:O,draggingValue:Se})},X=Di(function(re,ae,Se){if(re===-1){var I=be[0],ye=be[be.length-1],we=s-I,Ae=d-ye,ve=ae*(d-s);ve=Math.max(ve,we),ve=Math.min(ve,Ae);var tt=f(I+ve);ve=tt-I;var mt=be.map(function(na){return na+ve});T(mt)}else{var ta=(d-s)*ae,aa=kn(Z);aa[re]=be[re];var Je=v(aa,ta,re,"dist");T(Je.values,Je.value,Se)}}),F=function(ae,Se,I){ae.stopPropagation();var ye=I||l,we=ye[Se];A(Se),z(we),xe(ye),ee(ye),G(!1);var Ae=u0(ae),ve=Ae.pageX,tt=Ae.pageY,mt=!1;ce&&ce({rawValues:ye,draggingIndex:Se,draggingValue:we});var ta=function(na){na.preventDefault();var st=u0(na),Da=st.pageX,Pt=st.pageY,Ya=Da-ve,wt=Pt-tt,Yt=a.current.getBoundingClientRect(),Gt=Yt.width,Rt=Yt.height,We,ht;switch(i){case"btt":We=-wt/Rt,ht=Ya;break;case"ttb":We=wt/Rt,ht=Ya;break;case"rtl":We=-Ya/Gt,ht=wt;break;default:We=Ya/Gt,ht=wt}mt=p?Math.abs(ht)>bS&&y<Z.length:!1,G(mt),X(Se,We,mt)},aa=function Je(na){na.preventDefault(),document.removeEventListener("mouseup",Je),document.removeEventListener("mousemove",ta),J.current&&(J.current.removeEventListener("touchmove",he.current),J.current.removeEventListener("touchend",U.current)),he.current=null,U.current=null,J.current=null,b(mt),A(-1),G(!1)};document.addEventListener("mouseup",aa),document.addEventListener("mousemove",ta),ae.currentTarget.addEventListener("touchend",aa),ae.currentTarget.addEventListener("touchmove",ta),he.current=ta,U.current=aa,J.current=ae.currentTarget},te=x.useMemo(function(){var re=kn(l).sort(function(we,Ae){return we-Ae}),ae=kn(Z).sort(function(we,Ae){return we-Ae}),Se={};ae.forEach(function(we){Se[we]=(Se[we]||0)+1}),re.forEach(function(we){Se[we]=(Se[we]||0)-1});var I=p?1:0,ye=Object.values(Se).reduce(function(we,Ae){return we+Math.abs(Ae)},0);return ye<=I?Z:l},[l,Z,p]);return[O,D,_,te,F]}function wS(a,i,l,s,d,f){var g=x.useCallback(function(D){return Math.max(a,Math.min(i,D))},[a,i]),b=x.useCallback(function(D){if(l!==null){var z=a+Math.round((g(D)-a)/l)*l,N=function(q){return(String(q).split(".")[1]||"").length},B=Math.max(N(l),N(i),N(a)),O=Number(z.toFixed(B));return a<=O&&O<=i?O:null}return null},[l,a,i,g]),v=x.useCallback(function(D){var z=g(D),N=s.map(function(A){return A.value});l!==null&&N.push(b(D)),N.push(a,i);var B=N[0],O=i-a;return N.forEach(function(A){var q=Math.abs(z-A);q<=O&&(B=A,O=q)}),B},[a,i,s,l,g,b]),p=function D(z,N,B){var O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof N=="number"){var A,q=z[B],W=q+N,_=[];s.forEach(function(ee){_.push(ee.value)}),_.push(a,i),_.push(b(q));var G=N>0?1:-1;O==="unit"?_.push(b(q+G*l)):_.push(b(W)),_=_.filter(function(ee){return ee!==null}).filter(function(ee){return N<0?ee<=q:ee>=q}),O==="unit"&&(_=_.filter(function(ee){return ee!==q}));var P=O==="unit"?q:W;A=_[0];var ne=Math.abs(A-P);if(_.forEach(function(ee){var le=Math.abs(ee-P);le<ne&&(A=ee,ne=le)}),A===void 0)return N<0?a:i;if(O==="dist")return A;if(Math.abs(N)>1){var Z=kn(z);return Z[B]=A,D(Z,N-G,B,O)}return A}else{if(N==="min")return a;if(N==="max")return i}},y=function(z,N,B){var O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",A=z[B],q=p(z,N,B,O);return{value:q,changed:q!==A}},k=function(z){return f===null&&z===0||typeof f=="number"&&z<f},E=function(z,N,B){var O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",A=z.map(v),q=A[B],W=p(A,N,B,O);if(A[B]=W,d===!1){var _=f||0;B>0&&A[B-1]!==q&&(A[B]=Math.max(A[B],A[B-1]+_)),B<A.length-1&&A[B+1]!==q&&(A[B]=Math.min(A[B],A[B+1]-_))}else if(typeof f=="number"||f===null){for(var G=B+1;G<A.length;G+=1)for(var P=!0;k(A[G]-A[G-1])&&P;){var ne=y(A,1,G);A[G]=ne.value,P=ne.changed}for(var Z=B;Z>0;Z-=1)for(var ee=!0;k(A[Z]-A[Z-1])&&ee;){var le=y(A,-1,Z-1);A[Z-1]=le.value,ee=le.changed}for(var oe=A.length-1;oe>0;oe-=1)for(var be=!0;k(A[oe]-A[oe-1])&&be;){var xe=y(A,-1,oe-1);A[oe-1]=xe.value,be=xe.changed}for(var he=0;he<A.length-1;he+=1)for(var U=!0;k(A[he+1]-A[he])&&U;){var J=y(A,1,he+1);A[he+1]=J.value,U=J.changed}}return{value:A[B],values:A}};return[v,E]}function SS(a){return x.useMemo(function(){if(a===!0||!a)return[!!a,!1,!1,0];var i=a.editable,l=a.draggableTrack,s=a.minCount,d=a.maxCount;return[!0,i,!i&&l,s||0,d]},[a])}var jS=x.forwardRef(function(a,i){var l=a.prefixCls,s=l===void 0?"rc-slider":l,d=a.className,f=a.style,g=a.classNames,b=a.styles,v=a.id,p=a.disabled,y=p===void 0?!1:p,k=a.keyboard,E=k===void 0?!0:k,D=a.autoFocus,z=a.onFocus,N=a.onBlur,B=a.min,O=B===void 0?0:B,A=a.max,q=A===void 0?100:A,W=a.step,_=W===void 0?1:W,G=a.value,P=a.defaultValue,ne=a.range,Z=a.count,ee=a.onChange,le=a.onBeforeChange,oe=a.onAfterChange,be=a.onChangeComplete,xe=a.allowCross,he=xe===void 0?!0:xe,U=a.pushable,J=U===void 0?!1:U,ie=a.reverse,ce=a.vertical,w=a.included,T=w===void 0?!0:w,X=a.startPoint,F=a.trackStyle,te=a.handleStyle,re=a.railStyle,ae=a.dotStyle,Se=a.activeDotStyle,I=a.marks,ye=a.dots,we=a.handleRender,Ae=a.activeHandleRender,ve=a.track,tt=a.tabIndex,mt=tt===void 0?0:tt,ta=a.ariaLabelForHandle,aa=a.ariaLabelledByForHandle,Je=a.ariaRequired,na=a.ariaValueTextFormatterForHandle,st=x.useRef(null),Da=x.useRef(null),Pt=x.useMemo(function(){return ce?ie?"ttb":"btt":ie?"rtl":"ltr"},[ie,ce]),Ya=SS(ne),wt=Nt(Ya,5),Yt=wt[0],Gt=wt[1],Rt=wt[2],We=wt[3],ht=wt[4],Ue=x.useMemo(function(){return isFinite(O)?O:0},[O]),Ga=x.useMemo(function(){return isFinite(q)?q:100},[q]),Ma=x.useMemo(function(){return _!==null&&_<=0?1:_},[_]),Fi=x.useMemo(function(){return typeof J=="boolean"?J?Ma:!1:J>=0?J:!1},[J,Ma]),Va=x.useMemo(function(){return Object.keys(I||{}).map(function(De){var de=I[De],$e={value:Number(De)};return de&&cr(de)==="object"&&!x.isValidElement(de)&&("label"in de||"style"in de)?($e.style=de.style,$e.label=de.label):$e.label=de,$e}).filter(function(De){var de=De.label;return de||typeof de=="number"}).sort(function(De,de){return De.value-de.value})},[I]),ur=wS(Ue,Ga,Ma,Va,he,Fi),Na=Nt(ur,2),Xa=Na[0],on=Na[1],ho=aS(P,{value:G}),Ur=Nt(ho,2),va=Ur[0],$r=Ur[1],it=x.useMemo(function(){var De=va==null?[]:Array.isArray(va)?va:[va],de=Nt(De,1),$e=de[0],Ge=$e===void 0?Ue:$e,at=va===null?[]:[Ge];if(Yt){if(at=kn(De),Z||va===void 0){var jt=Z>=0?Z+1:2;for(at=at.slice(0,jt);at.length<jt;){var ra;at.push((ra=at[at.length-1])!==null&&ra!==void 0?ra:Ue)}}at.sort(function(ba,Bt){return ba-Bt})}return at.forEach(function(ba,Bt){at[Bt]=Xa(ba)}),at},[va,Yt,Ue,Z,Xa]),sn=function(de){return Yt?de:de[0]},Mn=Di(function(De){var de=kn(De).sort(function($e,Ge){return $e-Ge});ee&&!sS(de,it,!0)&&ee(sn(de)),$r(de)}),qr=Di(function(De){De&&st.current.hideHelp();var de=sn(it);oe==null||oe(de),$i(!oe,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),be==null||be(de)}),Yr=function(de){if(!(y||!Gt||it.length<=We)){var $e=kn(it);$e.splice(de,1),le==null||le(sn($e)),Mn($e);var Ge=Math.max(0,de-1);st.current.hideHelp(),st.current.focus(Ge)}},Gr=yS(Da,Pt,it,Ue,Ga,Xa,Mn,qr,on,Gt,We),cn=Nt(Gr,5),Vr=cn[0],St=cn[1],Be=cn[2],Oe=cn[3],pt=cn[4],Xr=function(de,$e){if(!y){var Ge=kn(it),at=0,jt=0,ra=Ga-Ue;it.forEach(function(Ka,dr){var Vt=Math.abs(de-Ka);Vt<=ra&&(ra=Vt,at=dr),Ka<de&&(jt=dr)});var ba=at;Gt&&ra!==0&&(!ht||it.length<ht)?(Ge.splice(jt+1,0,de),ba=jt+1):Ge[at]=de,Yt&&!it.length&&Z===void 0&&Ge.push(de);var Bt=sn(Ge);if(le==null||le(Bt),Mn(Ge),$e){var Ba,Za;(Ba=document.activeElement)===null||Ba===void 0||(Za=Ba.blur)===null||Za===void 0||Za.call(Ba),st.current.focus(ba),pt($e,ba,Ge)}else oe==null||oe(Bt),$i(!oe,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),be==null||be(Bt)}},Ac=function(de){de.preventDefault();var $e=Da.current.getBoundingClientRect(),Ge=$e.width,at=$e.height,jt=$e.left,ra=$e.top,ba=$e.bottom,Bt=$e.right,Ba=de.clientX,Za=de.clientY,Ka;switch(Pt){case"btt":Ka=(ba-Za)/at;break;case"ttb":Ka=(Za-ra)/at;break;case"rtl":Ka=(Bt-Ba)/Ge;break;default:Ka=(Ba-jt)/Ge}var dr=Ue+Ka*(Ga-Ue);Xr(Xa(dr),de)},Tc=x.useState(null),Ji=Nt(Tc,2),un=Ji[0],Qr=Ji[1],Nn=function(de,$e){if(!y){var Ge=on(it,de,$e);le==null||le(sn(it)),Mn(Ge.values),Qr(Ge.value)}};x.useEffect(function(){if(un!==null){var De=it.indexOf(un);De>=0&&st.current.focus(De)}Qr(null)},[un]);var Bn=x.useMemo(function(){return Rt&&Ma===null?!1:Rt},[Rt,Ma]),_n=Di(function(De,de){pt(De,de),le==null||le(sn(it))}),dn=Vr!==-1;x.useEffect(function(){if(!dn){var De=it.lastIndexOf(St);st.current.focus(De)}},[dn]);var Ie=x.useMemo(function(){return kn(Oe).sort(function(De,de){return De-de})},[Oe]),po=x.useMemo(function(){return Yt?[Ie[0],Ie[Ie.length-1]]:[Ue,Ie[0]]},[Ie,Yt,Ue]),Wi=Nt(po,2),Qa=Wi[0],fn=Wi[1];x.useImperativeHandle(i,function(){return{focus:function(){st.current.focus(0)},blur:function(){var de,$e=document,Ge=$e.activeElement;(de=Da.current)!==null&&de!==void 0&&de.contains(Ge)&&(Ge==null||Ge.blur())}}}),x.useEffect(function(){D&&st.current.focus(0)},[]);var kc=x.useMemo(function(){return{min:Ue,max:Ga,direction:Pt,disabled:y,keyboard:E,step:Ma,included:T,includedStart:Qa,includedEnd:fn,range:Yt,tabIndex:mt,ariaLabelForHandle:ta,ariaLabelledByForHandle:aa,ariaRequired:Je,ariaValueTextFormatterForHandle:na,styles:b||{},classNames:g||{}}},[Ue,Ga,Pt,y,E,Ma,T,Qa,fn,Yt,mt,ta,aa,Je,na,b,g]);return x.createElement(_r.Provider,{value:kc},x.createElement("div",{ref:Da,className:Mr(s,d,za(za(za(za({},"".concat(s,"-disabled"),y),"".concat(s,"-vertical"),ce),"".concat(s,"-horizontal"),!ce),"".concat(s,"-with-marks"),Va.length)),style:f,onMouseDown:Ac,id:v},x.createElement("div",{className:Mr("".concat(s,"-rail"),g==null?void 0:g.rail),style:$t($t({},re),b==null?void 0:b.rail)}),ve!==!1&&x.createElement(vS,{prefixCls:s,style:F,values:it,startPoint:X,onStartMove:Bn?_n:void 0}),x.createElement(xS,{prefixCls:s,marks:Va,dots:ye,style:ae,activeStyle:Se}),x.createElement(mS,{ref:st,prefixCls:s,style:te,values:Oe,draggingIndex:Vr,draggingDelete:Be,onStartMove:_n,onOffsetChange:Nn,onFocus:z,onBlur:N,handleRender:we,activeHandleRender:Ae,onChangeComplete:qr,onDelete:Gt?Yr:void 0}),x.createElement(pS,{prefixCls:s,marks:Va,onClick:Xr})))});const{Range:q4}=jS,ES=j.div`
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

`,CS=j.section`
  background: url("/src/images/home.jpg");
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

`,AS=j.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }

`,TS=j.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  } 
`,kS=j.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

`,zS=j.button`
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
`,RS=j.div`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(17, 16, 16, 0.57);
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,OS=j.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  align-items: end;
  padding: 10px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`,Ts=j.div`
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
`,DS=j.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: flex-end;
  grid-column: 1 / span 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`,MS=j.button`
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
`,NS=j.button`
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
`,BS=j.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

`,ks=j.div`
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
`,_S=j.section`
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,LS=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

`,zs=j.div`
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
`,Rs=j.div`
  height: 200px;
  background-image: url(${a=>a.image});
  background-size: cover;
  background-position: center;
  
  @media (max-width: 768px) {
    height: 160px;
  }

`,Os=j.div`
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
`,HS=qa`
  @media (max-width: 768px) {
    body {
      padding-left: 0px !important;
      padding-top: 0px !important;
    }
  }
`,US=()=>{const{language:a}=pa(),[i,l]=x.useState("flights"),[s,d]=x.useState(!0),[f,g]=x.useState(""),[b,v]=x.useState(""),[p,y]=x.useState(""),[k,E]=x.useState("economy"),[D,z]=x.useState({}),N=Br(),[B,O]=x.useState(!1),[A,q]=x.useState(""),W=[{value:"",label:a==="ar"?"اختر الدولة":"Select Country"},{value:"Egypt",label:a==="ar"?"مصر":"Egypt"},{value:"UAE",label:a==="ar"?"الإمارات":"UAE"},{value:"Turkey",label:a==="ar"?"تركيا":"Turkey"}],_=[{value:"",label:a==="ar"?"اختر الدولة":"Select Country"},{value:"Turkey",label:a==="ar"?"تركيا":"Turkey"},{value:"France",label:a==="ar"?"فرنسا":"France"},{value:"Germany",label:a==="ar"?"ألمانيا":"Germany"}],G=[{value:"economy",label:a==="ar"?"اقتصادي":"Economy"},{value:"business",label:a==="ar"?"رجال أعمال":"Business"},{value:"firstclass",label:a==="ar"?"الدرجة الأولى":"FirstClass"},{value:"vip",label:a==="ar"?"كبار الشخصيات":"VIP"}],P=()=>{const ee=f;g(b),v(ee)},ne=()=>{const ee={};return f.trim()||(ee.origin=!0),b.trim()||(ee.destination=!0),p||(ee.departureDate=!0),z(ee),Object.keys(ee).length===0},Z=async ee=>{if(ee.preventDefault(),!!ne()){O(!0),q("");try{const le=`https://tickifywebsite.runasp.net/api/Flights/search-default?DepartureDate=${p}T00:00:00&DepartureAirportCountry=${encodeURIComponent(f)}&ArrivalAirportCountry=${encodeURIComponent(b)}&ClassType=${k.toUpperCase()}&MinPrice=300&MaxPrice=`,oe=await fetch(le);if(oe.status===404){N("/flights/results",{state:{origin:f,destination:b,departureDate:p,cabinClass:k,results:[],noFlights:!0}});return}if(!oe.ok)throw new Error("فشل البحث عن الرحلات");const be=await oe.json();if(Array.isArray(be)&&be.length===0){N("/flights/results",{state:{origin:f,destination:b,departureDate:p,cabinClass:k,results:[],noFlights:!0}});return}N("/flights/results",{state:{origin:f,destination:b,departureDate:p,cabinClass:k,results:be}})}catch{q("حدث خطأ أثناء البحث عن الرحلات")}finally{O(!1)}}};return x.useEffect(()=>{setTimeout(()=>{d(!1)},2e3)},[]),s?c.jsx("div",{className:"loader-container",children:c.jsxs("div",{className:"loader",children:[c.jsx("div",{className:"loader-circle"}),c.jsx("div",{className:"loader-icon",children:c.jsx("i",{className:"fas fa-plane-departure"})})]})}):c.jsxs(c.Fragment,{children:[c.jsx(HS,{}),c.jsxs(ES,{children:[c.jsxs(CS,{children:[c.jsx(AS,{children:a==="ar"?"رحلتك تبدأ هنا":"Your journey Start Here"}),c.jsx(TS,{children:a==="ar"?"احجز رحلاتك وفنادقك وسياراتك بأفضل الأسعار":"Book your flights, hotels and cars at the best prices."}),c.jsx(kS,{children:c.jsxs(zS,{className:i==="flights"?"active":"",onClick:()=>l("flights"),children:[c.jsx(G2,{}),a==="ar"?"رحلات طيران":"Flights"]})}),c.jsx(RS,{children:c.jsxs(OS,{onSubmit:Z,children:[c.jsxs(DS,{children:[c.jsxs(Ts,{children:[c.jsx("input",{type:"text",id:"origin",list:"departure-options",value:f,onChange:ee=>g(ee.target.value),className:D.origin?"error":"",placeholder:a==="ar"?"مدينة المغادرة":"Departure city"}),c.jsx("datalist",{id:"departure-options",children:W.map(ee=>ee.value&&c.jsx("option",{value:ee.value,children:ee.label},ee.value))})]}),c.jsx(MS,{type:"button",onClick:P,children:c.jsx("i",{className:"fas fa-exchange-alt"})}),c.jsxs(Ts,{children:[c.jsx("input",{type:"text",id:"destination",list:"arrival-options",value:b,onChange:ee=>v(ee.target.value),className:D.destination?"error":"",placeholder:a==="ar"?"مدينة الوصول":"Arrival city"}),c.jsx("datalist",{id:"arrival-options",children:_.map(ee=>ee.value&&c.jsx("option",{value:ee.value,children:ee.label},ee.value))})]})]}),c.jsxs(Ts,{children:[c.jsx("label",{htmlFor:"departure-date",children:a==="ar"?"تاريخ المغادرة":"Departure Date"}),c.jsx("input",{type:"date",id:"departure-date",value:p,min:new Date().toISOString().split("T")[0],onChange:ee=>y(ee.target.value),className:D.departureDate?"error":""})]}),c.jsx(Ts,{children:c.jsx("select",{id:"cabin-class",value:k,onChange:ee=>E(ee.target.value),children:G.map(ee=>c.jsx("option",{value:ee.value,children:ee.label},ee.value))})}),c.jsx(NS,{type:"submit",disabled:B,children:B?a==="ar"?"جاري البحث...":"Searching...":a==="ar"?"ابحث":"Search"})]})})]}),A&&c.jsx("div",{style:{color:"red",marginTop:8},children:A}),c.jsxs(BS,{children:[c.jsxs(ks,{children:[c.jsx("i",{className:"fas fa-globe"}),c.jsx("h3",{children:a==="ar"?"وجهات متعددة":"Multiple parties"}),c.jsx("p",{children:a==="ar"?"اكتشف أكثر من 1000 وجهة حول العالم":"Discover over 1,000 destinations around the world"})]}),c.jsxs(ks,{children:[c.jsx("i",{className:"fas fa-tag"}),c.jsx("h3",{children:a==="ar"?"أفضل الأسعار":"Best Prices"}),c.jsx("p",{children:a==="ar"?"نضمن لك أفضل الأسعار مع خيارات متعددة":"We guarantee the best prices with Multipl options"})]}),c.jsxs(ks,{children:[c.jsx("i",{className:"fas fa-headset"}),c.jsx("h3",{children:a==="ar"?"دعم 24/7":"24/7 support"}),c.jsx("p",{children:a==="ar"?" فريق دعم متكامل لمساعدتك في أي وقت":"A full support team to help you at any time"})]}),c.jsxs(ks,{children:[c.jsx("i",{className:"fas fa-lock"}),c.jsx("h3",{children:a==="ar"?"دفع آمن":"Secure payment"}),c.jsx("p",{children:a==="ar"?"نضمن لك أمان معاملاتك وحماية بياناتك":"We guarantee the security of your transactions and the protection of your data."})]})]}),c.jsxs(_S,{children:[c.jsx("h2",{children:a==="ar"?"أفضل العروض":"Best offers"}),c.jsxs(LS,{children:[c.jsxs(zs,{children:[c.jsx(Rs,{image:"/src/images/dubai.jpg"}),c.jsxs(Os,{children:[c.jsx("h3",{children:a==="ar"?"عرض دبي المميز":"Dubai Special Offer"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 1999 ريال":"Starting from 1999 SAR"}),c.jsx("p",{children:a==="ar"?"3 ليالي في فندق 5 نجوم مع تذاكر الطيران":"3 nights in a 5-star hotel with flight tickets"})]})]}),c.jsxs(zs,{children:[c.jsx(Rs,{image:"/src/images/istanbul.jpg"}),c.jsxs(Os,{children:[c.jsx("h3",{children:a==="ar"?"رحلة إسطنبول":"Istanbul trip"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 2499 ريال":"Starting from 2499 SAR"}),c.jsx("p",{children:a==="ar"?"5 ليالي شاملة الفندق والطيران":"5 nights including hotel and flight"})]})]}),c.jsxs(zs,{children:[c.jsx(Rs,{image:"/src/images/maldives.jpg"}),c.jsxs(Os,{children:[c.jsx("h3",{children:a==="ar"?"جزر المالديف":"Maldives"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 4999 ريال":"Starting from 4999 riyals"}),c.jsx("p",{children:a==="ar"?"7 ليالي في منتجع فاخر مع الطيران":"7 nights in a luxury resort with flights"})]})]}),c.jsxs(zs,{children:[c.jsx(Rs,{image:"/src/images/paris.jpg"}),c.jsxs(Os,{children:[c.jsx("h3",{children:a==="ar"?"باريس _ فرنسا":"Paris, France"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 3999 ريال":"Starting from 3999 riyals"}),c.jsx("p",{children:a==="ar"?"4 ليالي في فندق 5 نجوم مع تذاكر الطيران":"4 nights in a 5-star hotel with flight tickets"})]})]})]})]})]})]})},Mx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII=",Nx="/Tickify-main/assets/facebook-BcNyBvTH.png",Bx="/Tickify-main/assets/X-DTBoECSh.png",$S=qa`
  body {
    padding: 0 !important;
  }
`,qS=j.div`
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
`,YS=j.h1`
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
`,GS=j.h2`
  color: #00233d;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 30px;
 
  margin-left: -15px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 0 20px 0;
  }
`,Qd=j.div`
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
`,VS=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`,XS=j.div`
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
`,QS=j.a`
  color: #0066ff;
  text-decoration: none;
  font-size: 14px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`,d0=j.button`
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
`,ZS=j.div`
  margin-top: 2rem;
  text-align: center;
`,KS=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`,f0=j.div`
  flex: 1;
  height: 1px;
  background: #e0e0e0;
  margin: 0 1rem;
`,PS=j.span`
  color: #00233d;
  font-size: 0.9rem;
  white-space: nowrap;
`,FS=j.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`,Zd=j.button`
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
`,JS=j.div`
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
`,WS=j.div`
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
`,IS=j.div`
  background: #fff;
  border-radius: 12px;
  padding: 32px 24px;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: 0 4px 16px #0002;
  position: relative;
`,e5=j.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #888;
`,t5=()=>{const{language:a}=pa(),i=Br(),{setIsSidebarOpen:l}=yc(),[s,d]=x.useState(""),[f,g]=x.useState(""),[b,v]=x.useState(""),[p,y]=x.useState(""),[k,E]=x.useState(""),[D,z]=x.useState(!1),[N,B]=x.useState(!1),[O,A]=x.useState(""),[q,W]=x.useState(!1),_=async G=>{G.preventDefault();let P=!1;if(s?v(""):(v(a==="ar"?"يرجى إدخال البريد الإلكتروني":"Please enter your email"),P=!0),f?y(""):(y(a==="ar"?"يرجى إدخال كلمة المرور":"Please enter your password"),P=!0),!P){E(""),z(!0);try{const ne=await fetch("https://tickifywebsite.runasp.net/Auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:f})});if(!ne.ok){const ee=await ne.json().catch(()=>({}));E(ee.message||(a==="ar"?"فشل تسجيل الدخول. حاول مرة أخرى.":"Login failed. Please try again.")),z(!1);return}const Z=await ne.json();localStorage.clear(),localStorage.setItem("isLoggedIn","true"),Z.token&&localStorage.setItem("token",Z.token),Z.id&&localStorage.setItem("id",Z.id),Z.lastName&&localStorage.setItem("email",Z.lastName),Z.firstName&&localStorage.setItem("firstName",Z.firstName),Z.email&&localStorage.setItem("lastName",Z.email),Z.firstName&&Z.lastName&&localStorage.setItem("fullName",`${Z.firstName} ${Z.lastName}`),Z.phone&&localStorage.setItem("phone",Z.phone),Z.expiresIn&&localStorage.setItem("expiresIn",Z.expiresIn.toString()),l(!1),z(!1),i("/")}catch{E(a==="ar"?"حدث خطأ أثناء الاتصال بالخادم.":"An error occurred while connecting to the server."),z(!1)}}};return c.jsxs(c.Fragment,{children:[c.jsx($S,{}),c.jsxs(qS,{children:[c.jsx(YS,{children:a==="ar"?"تسجيل الدخول":"Login"}),c.jsx(GS,{children:a==="ar"?"مرحباً بعودتك! قم بتسجيل الدخول للوصول إلى حسابك":"Welcome back! Sign in to access your account"}),c.jsxs("form",{onSubmit:_,children:[b||p&&c.jsx("div",{style:{color:"red",marginBottom:"10px",textAlign:"center"},children:b||p}),c.jsxs(Qd,{children:[c.jsx("label",{children:a==="ar"?"البريد الإلكتروني":"Email"}),c.jsx("input",{type:"email",value:s,onChange:G=>d(G.target.value),placeholder:a==="ar"?"أدخل بريدك الإلكتروني":"Enter your email",style:b?{borderColor:"red"}:{}}),b&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:b})]}),c.jsxs(Qd,{children:[c.jsx("label",{children:a==="ar"?"كلمة المرور":"Password"}),c.jsx("input",{type:"password",value:f,onChange:G=>g(G.target.value),placeholder:a==="ar"?"أدخل كلمة المرور":"Enter your password",style:p?{borderColor:"red"}:{}}),p&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:p})]}),c.jsxs(VS,{children:[c.jsxs(XS,{children:[c.jsx("input",{type:"checkbox",id:"remember"}),c.jsx("label",{htmlFor:"remember",children:a==="ar"?"تذكرني":"Remember me"})]}),c.jsx(QS,{href:"#",onClick:G=>{G.preventDefault(),B(!0)},children:a==="ar"?"نسيت كلمة المرور؟":"Forgot password?"})]}),c.jsx(d0,{type:"submit",disabled:D,children:D?a==="ar"?"جاري تسجيل الدخول...":"Logging in...":a==="ar"?"تسجيل الدخول":"Login"}),k&&c.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"10px",textAlign:"center"},children:k})]}),c.jsxs(ZS,{children:[c.jsxs(KS,{children:[c.jsx(f0,{}),c.jsx(PS,{children:a==="ar"?"أو سجل الدخول باستخدام":"Or login with"}),c.jsx(f0,{})]}),c.jsxs(FS,{children:[c.jsx(Zd,{className:"google",children:c.jsx("img",{src:Mx,alt:"Google"})}),c.jsx(Zd,{className:"facebook",children:c.jsx("img",{src:Nx,alt:"Facebook"})}),c.jsx(Zd,{className:"twitter",children:c.jsx("img",{src:Bx,alt:"X"})})]})]}),c.jsxs(JS,{children:[a==="ar"?"ليس لديك حساب؟":"Don't have an account?",c.jsx("a",{href:"/signup",children:a==="ar"?"إنشاء حساب":"Sign up"})]})]}),N&&c.jsx(WS,{children:c.jsxs(IS,{children:[c.jsx(e5,{onClick:()=>B(!1),children:"×"}),c.jsx("h2",{style:{textAlign:"center",color:"#00233d",marginBottom:16},children:a==="ar"?"استعادة كلمة المرور":"Reset Password"}),q?c.jsx("div",{style:{color:"#1976d2",textAlign:"center",margin:"16px 0"},children:a==="ar"?"تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني ":"A reset link has been sent to your email (mock)."}):c.jsxs("form",{onSubmit:G=>{G.preventDefault(),W(!0)},children:[c.jsx(Qd,{children:c.jsx("input",{type:"email",value:O,onChange:G=>A(G.target.value),placeholder:a==="ar"?"أدخل بريدك الإلكتروني":"Enter your email",required:!0})}),c.jsx(d0,{type:"submit",style:{marginTop:8},children:a==="ar"?"إرسال":"Send"})]})]})})]})},a5=qa`
  body {
    padding: 0 !important;
    
  }
`,n5=j.div`
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
`,r5=j.h1`
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
`,i5=j.h2`
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
`,Ti=j.div`
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
`,l5=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`,o5=j.div`
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
`,s5=j.button`
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
`,c5=j.div`
  margin-top: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`,u5=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`,m0=j.div`
  flex: 1;
  height: 1px;
  background: #e0e0e0;
  margin: 0 1rem;
`,d5=j.span`
  color: #00233d;
  font-size: 0.9rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,f5=j.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin: 1rem 0;
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
`,m5=j.div`
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
`,h5=j.div`
  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`,p5=()=>{const{language:a}=pa(),i=Br(),{setIsSidebarOpen:l}=yc(),[s,d]=x.useState(""),[f,g]=x.useState(""),[b,v]=x.useState(""),[p,y]=x.useState(""),[k,E]=x.useState(""),[D,z]=x.useState(""),[N,B]=x.useState(""),[O,A]=x.useState(""),[q,W]=x.useState(""),[_,G]=x.useState(""),[P,ne]=x.useState(""),[Z,ee]=x.useState(""),[le,oe]=x.useState(!1),[be,xe]=x.useState(!1),[he,U]=x.useState(""),[J,ie]=x.useState(!1),ce=async w=>{w.preventDefault();let T=!1;if(s?B(""):(B(a==="ar"?"يرجى إدخال الاسم الأول":"Please enter your first name"),T=!0),f?A(""):(A(a==="ar"?"يرجى إدخال الاسم الثاني":"Please enter your last name"),T=!0),b?W(""):(W(a==="ar"?"يرجى إدخال رقم الهاتف":"Please enter your phone number"),T=!0),p?G(""):(G(a==="ar"?"يرجى إدخال البريد الإلكتروني":"Please enter your email"),T=!0),k?ne(""):(ne(a==="ar"?"يرجى إدخال كلمة المرور":"Please enter your password"),T=!0),D?k!==D?(ee(a==="ar"?"كلمة المرور غير متطابقة":"Passwords do not match"),T=!0):ee(""):(ee(a==="ar"?"يرجى تأكيد كلمة المرور":"Please confirm your password"),T=!0),le?xe(!1):(xe(!0),T=!0),!T){U(""),ie(!0);try{const X=await fetch("https://tickifywebsite.runasp.net/Auth/Register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:p,password:k,firstName:s,lastName:f,phoneNumber:b})});if(!X.ok){const F=await X.json().catch(()=>({}));U(F.message||(a==="ar"?"فشل التسجيل. حاول مرة أخرى.":"Registration failed. Please try again.")),ie(!1);return}l(!1),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("firstName",s),localStorage.setItem("lastName",f),localStorage.setItem("fullName",s+" "+f),localStorage.setItem("phone",b),localStorage.setItem("email",p),ie(!1),i("/profile")}catch{U(a==="ar"?"حدث خطأ أثناء الاتصال بالخادم.":"An error occurred while connecting to the server."),ie(!1)}}};return c.jsxs(c.Fragment,{children:[c.jsx(a5,{}),c.jsxs(n5,{children:[c.jsx(r5,{children:a==="ar"?"إنشاء حساب":"Sign Up"}),c.jsx(i5,{children:a==="ar"?"انضم إلينا اليوم وابدأ رحلتك":"Join us today and start your journey"}),c.jsxs("form",{onSubmit:ce,children:[c.jsxs(h5,{children:[c.jsxs(Ti,{style:{flex:1},children:[c.jsx("label",{children:a==="ar"?"الاسم الأول":"First Name"}),c.jsx("input",{type:"text",value:s,onChange:w=>d(w.target.value),placeholder:a==="ar"?"أدخل اسمك الأول":"Enter your first name",style:N?{borderColor:"red"}:{}}),N&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:N})]}),c.jsxs(Ti,{style:{flex:1},children:[c.jsx("label",{children:a==="ar"?"الاسم الثاني":"Last Name"}),c.jsx("input",{type:"text",value:f,onChange:w=>g(w.target.value),placeholder:a==="ar"?"أدخل اسمك الثاني":"Enter your last name",style:O?{borderColor:"red"}:{}}),O&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:O})]})]}),c.jsxs(Ti,{children:[c.jsx("label",{children:a==="ar"?"رقم الهاتف":"Phone Number"}),c.jsx("input",{type:"tel",value:b,onChange:w=>v(w.target.value),placeholder:a==="ar"?"أدخل رقم هاتفك":"Enter your phone number",style:q?{borderColor:"red"}:{}}),q&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:q})]}),c.jsxs(Ti,{children:[c.jsx("label",{children:a==="ar"?"البريد الإلكتروني":"Email"}),c.jsx("input",{type:"email",value:p,onChange:w=>y(w.target.value),placeholder:a==="ar"?"أدخل بريدك الإلكتروني":"Enter your email",style:_?{borderColor:"red"}:{}}),_&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:_})]}),c.jsxs(Ti,{children:[c.jsx("label",{children:a==="ar"?"كلمة المرور":"Password"}),c.jsx("input",{type:"password",value:k,onChange:w=>E(w.target.value),placeholder:a==="ar"?"أدخل كلمة المرور":"Enter your password",style:P?{borderColor:"red"}:{}}),P&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:P})]}),c.jsxs(Ti,{children:[c.jsx("label",{children:a==="ar"?"تأكيد كلمة المرور":"Confirm Password"}),c.jsx("input",{type:"password",value:D,onChange:w=>z(w.target.value),placeholder:a==="ar"?"أعد إدخال كلمة المرور":"Re-enter your password",style:Z?{borderColor:"red"}:{}}),Z&&c.jsx("div",{style:{color:"red",fontSize:"13px",marginTop:"4px",textAlign:"end"},children:Z})]}),c.jsx(l5,{children:c.jsxs(o5,{children:[c.jsx("input",{type:"checkbox",id:"terms",checked:le,onChange:w=>oe(w.target.checked),style:be?{outline:"2px solid red",boxShadow:"0 0 0 2px red"}:{}}),c.jsx("label",{htmlFor:"terms",style:{cursor:"pointer"},children:a==="ar"?"أوافق على الشروط والأحكام":"I agree to the Terms and Conditions"})]})}),c.jsx(s5,{type:"submit",disabled:J,children:J?a==="ar"?"جاري التسجيل...":"Signing Up...":a==="ar"?"إنشاء حساب":"Sign Up"}),he&&c.jsx("div",{style:{color:"red",fontSize:"14px",marginTop:"10px",textAlign:"center"},children:he})]}),c.jsxs(c5,{children:[c.jsxs(u5,{children:[c.jsx(m0,{}),c.jsx(d5,{children:a==="ar"?"أو سجل باستخدام":"Or sign up with"}),c.jsx(m0,{})]}),c.jsxs(f5,{children:[c.jsx(Kd,{className:"google",children:c.jsx("img",{src:Mx,alt:"Google"})}),c.jsx(Kd,{className:"facebook",children:c.jsx("img",{src:Nx,alt:"Facebook"})}),c.jsx(Kd,{className:"twitter",children:c.jsx("img",{src:Bx,alt:"X"})})]})]}),c.jsxs(m5,{children:[a==="ar"?"لديك حساب بالفعل؟":"Already have an account?",c.jsx("a",{href:"/login",children:a==="ar"?"تسجيل الدخول":"Login"})]})]})]})},g5=j.footer`
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
`,x5=j.div`
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
`,Pd=j.div`
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
`,v5=j.div`
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
`,b5=j.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding-top: 1.5rem;
    margin-top: 1.5rem;
  }
`,y5=()=>{const{language:a}=pa();return c.jsxs(g5,{children:[c.jsxs(x5,{children:[c.jsxs(Pd,{children:[c.jsx("h3",{children:a==="ar"?"عن تيكيفاي":"About Tickify"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(ma,{to:"/about",children:a==="ar"?"من نحن":"About Us"})}),c.jsx("li",{children:c.jsx(ma,{to:"/terms",children:a==="ar"?"الشروط والأحكام":"Terms and Conditions"})})]})]}),c.jsxs(Pd,{children:[c.jsx("h3",{children:a==="ar"?"المساعدة":"Help"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(ma,{to:"/cancellation",children:a==="ar"?"سياسة الإلغاء":"Cancellation Policy"})}),c.jsx("li",{children:c.jsx("span",{children:a==="ar"?"اتصل بنا":"Contact Us"})})]})]}),c.jsxs(Pd,{children:[c.jsx("h3",{children:a==="ar"?"معلومات التواصل":"Contact information"}),c.jsxs(v5,{children:[c.jsxs("p",{children:[c.jsx("i",{className:"fas fa-phone"}),c.jsx("span",{children:" 123456789 + "})]}),c.jsxs("p",{children:[c.jsx("i",{className:"fas fa-envelope"}),c.jsx("a",{href:"mailto:bessie.ferry32@ethereal.email",children:"bessie.ferry32@ethereal.email"})]}),c.jsxs("p",{children:[c.jsx("i",{className:"fas fa-map-marker-alt"}),a==="ar"?"المنصورة , مصر":"Mansoura, Egypt"]})]})]})]}),c.jsx(b5,{children:c.jsxs("p",{children:[" ",a==="ar"?"جميع الحقوق محفوظة":"All rights reserved."," © 2025 Tickify "]})})]})},w5=j.div`
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
`,h0=j(ma)`
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
`,S5=j.span`
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
`,j5=j.div`
  position: relative;
  display: flex;
  align-items: center;
`,E5=()=>{const{isSidebarOpen:a}=yc(),i=$a(),l=localStorage.getItem("isLoggedIn")==="true",s=f=>{f.preventDefault(),localStorage.removeItem("isLoggedIn"),window.location.href="/"},d=[{to:"/",icon:"plane",text:"رحلات طيران"},l?{to:"/logout",icon:"sign-out-alt",text:"تسجيل الخروج",logout:!0}:{to:"/login",icon:"sign-in-alt",text:"تسجيل الدخول"},{to:"/app",icon:"mobile-alt",text:"التطبيق"},{to:"/help",icon:"question-circle",text:"مساعدة"}];return c.jsx(w5,{isSidebarOpen:a,children:d.map((f,g)=>c.jsxs(j5,{children:[f.logout?c.jsx(h0,{as:"a",href:"/",onClick:s,children:c.jsx("i",{className:`fas fa-${f.icon}`})}):c.jsx(h0,{to:f.to,className:i.pathname===f.to?"active":"",children:c.jsx("i",{className:`fas fa-${f.icon}`})}),c.jsx(S5,{isSidebarOpen:a,children:f.text})]},g))})};function C5(a){return ln({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"},child:[]},{tag:"path",attr:{d:"m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"},child:[]}]})(a)}const A5=j.button`
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
`,T5=()=>{const[a,i]=x.useState(!1),l=()=>{window.pageYOffset>300?i(!0):i(!1)},s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return x.useEffect(()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}),[]),c.jsx(A5,{onClick:s,className:a?"visible":"","aria-label":"العودة إلى أعلى الصفحة",children:c.jsx(C5,{})})},k5=j.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
`,z5=j.div`
  padding-left: 0px;
  padding-top: 100px;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 80px;
  }
`,R5=j.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/images/about.jpg');
  background-size: cover;
  background-position: center;
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
`,O5=j.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }

`,p0=j.div`
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
`,D5=j.section`
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
`,M5=j.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

`,Ds=j.div`
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
`,N5=j.section`
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
`,B5=j.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  

`,ki=j.div`
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
`,zi=j.div`
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
  `,_5=qa`
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
`,L5=()=>{const{language:a}=pa();return c.jsxs(c.Fragment,{children:[c.jsx(_5,{}),c.jsx(k5,{children:c.jsxs(z5,{children:[c.jsxs(R5,{children:[c.jsx("h1",{children:a==="ar"?"من نحن":"About Us"}),c.jsx("p",{children:a==="ar"?"نحن نؤمن بأن السفر يجب أن يكون تجربة سهلة وممتعة للجميع":"We believe that travel should be an easy and enjoyable experience for everyone."})]}),c.jsxs(O5,{children:[c.jsxs(p0,{children:[c.jsx(U2,{}),c.jsx("h2",{children:a==="ar"?"رؤيتنا":"Our Vision"}),c.jsx("p",{children:a==="ar"?"نسعى لأن نكون المنصة الأولى في الشرق الأوسط لتقديم خدمات السفر المتميزة":"We strive to be the premier platform in the Middle East for providing premium travel services."})]}),c.jsxs(p0,{children:[c.jsx(_2,{}),c.jsx("h2",{children:a==="ar"?"مهمتنا":"Our Mission"}),c.jsx("p",{children:a==="ar"?"تقديم  حلول سفر مبتكرة وخدمات متميزة تلبي احتياجات عملائنا بأفضل الأسعار":"Providing innovative travel solutions and distinguished services that meet our customers needs at the best prices."})]})]}),c.jsxs(D5,{children:[c.jsx("h2",{children:a==="ar"?"قيمنا":"Our Values"}),c.jsxs(M5,{children:[c.jsxs(Ds,{children:[c.jsx(V2,{}),c.jsx("h3",{children:a==="ar"?"الجودة":"Quality"}),c.jsx("p",{children:a==="ar"?"نلتزم بتقديم خدمات عالية الجودة تلبي توقعات عملائنا":"We are committed to providing high-quality services that meet our customers expectations."})]}),c.jsxs(Ds,{children:[c.jsx("i",{className:"fas fa-handshake"}),c.jsx("h3",{children:a==="ar"?"الموثوقية":"Reliability"}),c.jsx("p",{children:a==="ar"?"نحرص على بناء علاقات قوية مع عملائنا وشركائنا":"We are keen to build strong relationships with our clients and partners."})]}),c.jsxs(Ds,{children:[c.jsx("i",{className:"fas fa-lightbulb"}),c.jsx("h3",{children:a==="ar"?"الابتكار":"Innovation"}),c.jsx("p",{children:a==="ar"?"نواكب أحدث التقنيات لتقديم تجربة سفر فريدة":"We keep pace with the latest technologies to provide a unique travel experience."})]}),c.jsxs(Ds,{children:[c.jsx("i",{className:"fas fa-users"}),c.jsx("h3",{children:a==="ar"?"العمل الجماعي":"Teamwork"}),c.jsx("p",{children:a==="ar"?"نؤمن بقوة العمل الجماعي في تحقيق أهدافنا":"We believe in the power of teamwork to achieve our goals."})]})]})]}),c.jsxs(N5,{children:[c.jsx("h2",{children:a==="ar"?"فريقنا":"Our Team"}),c.jsxs(B5,{children:[c.jsxs(ki,{children:[c.jsx(zi,{children:c.jsx("img",{src:"/src/images/hadir.jpg",alt:"Hadir El-Sayeed"})}),c.jsxs("div",{class:"member-info",children:[c.jsxs("h3",{children:[" ",a==="ar"?"هدير السيد":"Hadeer El-Sayeed"," "]}),c.jsx("p",{children:"UI/UX Designer"})]})]}),c.jsxs(ki,{children:[c.jsx(zi,{children:c.jsx("img",{src:"/src/images/hager.jpg",alt:"Hager Abdelmgeed"})}),c.jsxs("div",{class:"member-info",children:[c.jsxs("h3",{children:[" ",a==="ar"?"هاجر عبدالمجيد":"Hagar Abd-Elmejeed"," "]}),c.jsx("p",{children:"Frontend Developer"})]})]}),c.jsxs(ki,{children:[c.jsx(zi,{children:c.jsx("img",{src:"/src/images/fatma.jpg",alt:"fatma radwan"})}),c.jsxs("div",{class:"member-info",children:[c.jsxs("h3",{children:[" ",a==="ar"?"فاطمة رضوان":"Fatma Radwan"," "]}),c.jsx("p",{children:"Frontend Developer"})]})]}),c.jsxs(ki,{children:[c.jsx(zi,{children:c.jsx("img",{src:"/src/images/karim.jpg",alt:"karim fathi"})}),c.jsxs("div",{class:"member-info",children:[c.jsxs("h3",{children:[" ",a==="ar"?"كريم فتحي":"Kareem Fathy"," "]}),c.jsx("p",{children:"Backend Developer"})]})]}),c.jsxs(ki,{children:[c.jsx(zi,{children:c.jsx("img",{src:"/src/images/alaa.jpg",alt:"Alaa Yasser"})}),c.jsxs("div",{class:"member-info",children:[c.jsxs("h3",{children:[" ",a==="ar"?"الاء ياسر":"Alaa Yasser"," "]}),c.jsx("p",{children:"Backend Developer"})]})]}),c.jsxs(ki,{children:[c.jsx(zi,{children:c.jsx("img",{src:"/src/images/team3.jpg",alt:"Team Member"})}),c.jsxs("div",{class:"member-info",children:[c.jsxs("h3",{children:[" ",a==="ar"?"يوسف علاء":"Yousef alaa"," "]}),c.jsx("p",{children:"Flutter Developer"})]})]})]})]})]})})]})},H5=qa`
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
`,U5=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,$5=j.div`
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
`,Ms=j.section`
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
`,Ns=j.div`
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
`,Bs=j.div`
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
`,q5=j.div`
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
`,Y5=()=>{const{language:a}=pa();return c.jsxs(c.Fragment,{children:[c.jsx(H5,{}),c.jsxs(U5,{children:[c.jsxs($5,{children:[c.jsx("h1",{children:a==="ar"?"سياسة الإلغاء":"Cancellation Policy"}),c.jsx("p",{children:a==="ar"?"نفهم أن الخطط قد تتغير. تعرف على سياسات الإلغاء الخاصة بنا لجميع خدمات السفر":"We understand that plans can change. Learn about our cancellation policies for all travel services"})]}),c.jsxs(Ms,{children:[c.jsxs(Ns,{children:[c.jsx("i",{className:"fas fa-plane icon"}),c.jsx("h2",{children:a==="ar"?"1. رحلات الطيران":"1. Flight Bookings"})]}),c.jsxs(Bs,{children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-ticket-alt sub-icon"}),a==="ar"?"التذاكر القابلة للإلغاء":"Cancellable Tickets"]}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"يمكن إلغاء الحجز قبل 24 ساعة من موعد الرحلة":"Reservations can be cancelled 24 hours before the flight time"}),c.jsx("li",{children:a==="ar"?"يتم خصم رسوم إدارية بنسبة 10% من قيمة التذكرة":"An administrative fee of 10% will be deducted from the ticket value"}),c.jsx("li",{children:a==="ar"?"يتم استرداد المبلغ المتبقي خلال 5-7 أيام عمل":"The remaining amount will be refunded within 5-7 business days"})]}),c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-ban sub-icon"}),a==="ar"?"التذاكر غير القابلة للإلغاء":"Non-Cancellable Tickets"]}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"لا يمكن إلغاء التذاكر الاقتصادية غير القابلة للإلغاء":"Economy non-cancellable tickets cannot be cancelled"}),c.jsx("li",{children:a==="ar"?"يمكن تغيير التاريخ مقابل رسوم إضافية":"Date changes are possible for an additional fee"})]})]})]}),c.jsxs(Ms,{children:[c.jsxs(Ns,{children:[c.jsx("i",{className:"fas fa-hotel icon"}),c.jsx("h2",{children:a==="ar"?"2. حجوزات الفنادق":"2. Hotel Bookings"})]}),c.jsxs(Bs,{children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-check-circle sub-icon"}),a==="ar"?"الحجوزات القابلة للإلغاء":"Cancellable Bookings"]}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"يمكن إلغاء الحجز قبل 48 ساعة من موعد الوصول":"Reservations can be cancelled 48 hours before check-in"}),c.jsx("li",{children:a==="ar"?"لا يتم خصم أي رسوم إضافية":"No additional fees will be charged"}),c.jsx("li",{children:a==="ar"?"يتم استرداد المبلغ كاملاً خلال 3-5 أيام عمل":"Full refund will be processed within 3-5 business days"})]}),c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-exclamation-triangle sub-icon"}),a==="ar"?"الحجوزات المتأخرة":"Late Cancellations"]}),c.jsx("ul",{children:c.jsx("li",{children:a==="ar"?"الإلغاء خلال 24 ساعة من الوصول: خصم ليلة واحدة":"Cancellation within 24 hours of check-in: One night charge"})})]})]}),c.jsxs(Ms,{children:[c.jsxs(Ns,{children:[c.jsx("i",{className:"fas fa-car icon"}),c.jsx("h2",{children:a==="ar"?"3. حجوزات السيارات":"3. Car Rentals"})]}),c.jsxs(Bs,{children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-key sub-icon"}),a==="ar"?"الحجوزات القابلة للإلغاء":"Cancellable Bookings"]}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"يمكن إلغاء الحجز قبل 24 ساعة من موعد الاستلام":"Reservations can be cancelled 24 hours before pickup time"}),c.jsx("li",{children:a==="ar"?"يتم خصم رسوم إدارية بنسبة 5% من قيمة الحجز":"An administrative fee of 5% will be deducted from the booking value"}),c.jsx("li",{children:a==="ar"?"يتم استرداد المبلغ المتبقي خلال 3-5 أيام عمل":"The remaining amount will be refunded within 3-5 business days"})]})]})]}),c.jsxs(Ms,{children:[c.jsxs(Ns,{children:[c.jsx("i",{className:"fas fa-exclamation-circle icon"}),c.jsx("h2",{children:a==="ar"?"4. حالات خاصة":"4. Special Cases"})]}),c.jsxs(Bs,{children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-shield-alt sub-icon"}),a==="ar"?"الإلغاء بسبب ظروف قاهرة":"Cancellation Due to Force Majeure"]}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"في حالة الكوارث الطبيعية أو الأوبئة":"In case of natural disasters or pandemics"}),c.jsx("li",{children:a==="ar"?"في حالة إغلاق المطارات أو الفنادق":"In case of airport or hotel closures"}),c.jsx("li",{children:a==="ar"?"في حالة القيود الحكومية المفروضة على السفر":"In case of government-imposed travel restrictions"})]}),c.jsx("p",{children:a==="ar"?"في هذه الحالات، يتم استرداد المبلغ كاملاً أو إعادة جدولة الحجز دون أي رسوم إضافية.":"In these cases, a full refund will be provided or the booking will be rescheduled without any additional fees."})]})]}),c.jsxs(q5,{children:[c.jsxs("h4",{children:[c.jsx("i",{className:"fas fa-info-circle",style:{marginLeft:"0.5rem"}}),a==="ar"?"ملاحظة مهمة":"Important Note"]}),c.jsx("p",{children:a==="ar"?"جميع طلبات الإلغاء يجب أن تتم من خلال موقعنا الإلكتروني أو تطبيقنا أ, التواصل معنا عبر الإيميل":"All cancellation requests must be made through our website, mobile app, or by contacting us via email"})]})]})]})},G5=qa`
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
`,V5=j.div`
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
`,X5=j.div`
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
`,Ri=j.section`
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
`,Q5=j.div`
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
`;const Z5=()=>{const{language:a}=pa();return c.jsxs(c.Fragment,{children:[c.jsx(G5,{}),c.jsxs(V5,{children:[c.jsxs(X5,{children:[c.jsxs("h1",{children:[c.jsx("i",{className:"fas fa-file-contract",style:{marginLeft:a==="ar"?"0.5rem":"0",marginRight:a==="ar"?"0":"0.5rem"}}),a==="ar"?"الشروط والأحكام":"Terms and Conditions"]}),c.jsx("p",{children:a==="ar"?"يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا":"Please read these terms and conditions carefully before using our services."})]}),c.jsxs(Ri,{children:[c.jsxs("h2",{children:[c.jsx("i",{className:"fas fa-info-circle"}),a==="ar"?"1. مقدمة":"1. Introduction"]}),c.jsx("p",{children:a==="ar"?"مرحباً بك في تيكيفاي، منصة حجز السفر الرائدة في الشرق الأوسط. باستخدامك لموقعنا الإلكتروني أو تطبيقنا، فإنك توافق على الالتزام بهذه الشروط والأحكام بالكامل.":"Welcome to Tickify, the leading travel booking platform in the Middle East. By using our website or application, you agree to fully comply with these terms and conditions."})]}),c.jsxs(Ri,{children:[c.jsxs("h2",{children:[c.jsx("i",{className:"fas fa-user-check"}),a==="ar"?"2. استخدام الموقع":"2. Use of Website"]}),c.jsx("p",{children:a==="ar"?"يجب استخدام موقعنا بشكل قانوني وأخلاقي. يحظر أي استخدام غير مصرح به أو ضار أو يسيء للآخرين.":"Our website must be used legally and ethically. Any unauthorized, harmful, or abusive use is prohibited."}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"يجب أن تكون عمرك 18 عاماً أو أكثر لاستخدام خدمات الحجز":"You must be 18 years or older to use booking services"}),c.jsx("li",{children:a==="ar"?"يجب تقديم معلومات دقيقة وصحيحة عند إنشاء الحساب":"You must provide accurate and correct information when creating an account"}),c.jsx("li",{children:a==="ar"?"يحظر استخدام الموقع لأي أغراض غير مشروعة":"Using the website for any illegal purposes is prohibited"})]})]}),c.jsxs(Ri,{children:[c.jsxs("h2",{children:[c.jsx("i",{className:"fas fa-credit-card"}),a==="ar"?"3. الحجوزات والمدفوعات":"3. Bookings and Payments"]}),c.jsx("p",{children:a==="ar"?"جميع الحجوزات تخضع لسياسة الإلغاء الخاصة بنا. يجب إتمام المدفوعات بالكامل قبل تأكيد الحجز.":"All bookings are subject to our cancellation policy. Payments must be completed in full before booking confirmation."}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"الأسعار المعروضة شاملة الضرائب والرسوم":"Displayed prices include taxes and fees"}),c.jsx("li",{children:a==="ar"?"يمكن إلغاء الحجز وفقاً لسياسة الإلغاء المطبقة":"Bookings can be cancelled according to the applicable cancellation policy"}),c.jsx("li",{children:a==="ar"?"نحن نستخدم أنظمة دفع آمنة ومشفرة":"We use secure and encrypted payment systems"})]})]}),c.jsxs(Ri,{children:[c.jsxs("h2",{children:[c.jsx("i",{className:"fas fa-shield-alt"}),a==="ar"?"4. الخصوصية والأمان":"4. Privacy and Security"]}),c.jsx("p",{children:a==="ar"?"نحن نحمي خصوصية مستخدمينا ونلتزم بحماية بياناتهم الشخصية وفقاً لأحدث معايير الأمان.":"We protect our users' privacy and are committed to protecting their personal data according to the latest security standards."}),c.jsxs("ul",{children:[c.jsx("li",{children:a==="ar"?"نحن لا نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك":"We do not share your personal information with third parties without your consent"}),c.jsx("li",{children:a==="ar"?"نستخدم تقنيات تشفير متقدمة لحماية بياناتك":"We use advanced encryption technologies to protect your data"})]})]}),c.jsxs(Ri,{children:[c.jsxs("h2",{children:[c.jsx("i",{className:"fas fa-exclamation-triangle"}),a==="ar"?"5. المسؤولية القانونية":"5. Legal Liability"]}),c.jsx("p",{children:a==="ar"?"لا نتحمل المسؤولية عن أي خسائر أو أضرار ناتجة عن استخدام موقعنا أو خدماتنا، إلا في حدود المسؤولية القانونية المطبقة.":"We are not liable for any losses or damages resulting from the use of our website or services, except within the limits of applicable legal liability."})]}),c.jsxs(Ri,{children:[c.jsxs("h2",{children:[c.jsx("i",{className:"fas fa-edit"}),a==="ar"?"6. التغييرات والتحديثات":"6. Changes and Updates"]}),c.jsx("p",{children:a==="ar"?"نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على الموقع.":"We reserve the right to modify these terms and conditions at any time. Users will be notified of any significant changes via email or website notification."})]}),c.jsxs(Q5,{children:[c.jsxs("h3",{children:[c.jsx("i",{className:"fas fa-exclamation-circle"}),a==="ar"?"ملاحظة مهمة":"Important Note"]}),c.jsx("p",{children:a==="ar"?"باستمرارك في استخدام موقعنا، فإنك تؤكد أنك قد قرأت وفهمت هذه الشروط والأحكام وتوافق على الالتزام بها.":"By continuing to use our website, you confirm that you have read and understood these terms and conditions and agree to comply with them."})]})]})]})},K5=j.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`,P5=j.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/src/images/اخةث.jpg");
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
`,F5=j.h1`
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
`,J5=j.p`
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
`,W5=j.div`
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
`,Fd=j.button`
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
`,I5=j.div`
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
`,e6=j.form`
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
`,_s=j.div`
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
`,t6=j.div`
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
`,a6=j.button`
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
`,n6=j.button`
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
`,r6=j.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 0;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 2rem 0;
  }
`,Ls=j.div`
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
`,i6=j.section`
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`,l6=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`,Hs=j.div`
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,Us=j.div`
  height: 200px;
  background-image: url(${a=>a.image});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 160px;
  }
`,$s=j.div`
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
`,o6=()=>{const{language:a}=pa(),[i,l]=x.useState("flights"),[s,d]=x.useState(!0),[f,g]=x.useState(""),[b,v]=x.useState(""),[p,y]=x.useState(""),[k,E]=x.useState(""),[D,z]=x.useState({}),N=()=>{const A=f;g(b),v(A)},B=()=>{const A={};return f.trim()||(A.origin=!0),b.trim()||(A.destination=!0),p||(A.departureDate=!0),k||(A.returnDate=!0),z(A),Object.keys(A).length===0},O=A=>{A.preventDefault(),B()&&console.log("Form is valid, proceeding with search")};return x.useEffect(()=>{setTimeout(()=>{d(!1)},2e3)},[]),s?c.jsx("div",{className:"loader-container",children:c.jsxs("div",{className:"loader",children:[c.jsx("div",{className:"loader-circle"}),c.jsx("div",{className:"loader-icon",children:c.jsx("i",{className:"fas fa-plane-departure"})})]})}):c.jsx(c.Fragment,{children:c.jsxs(K5,{children:[c.jsxs(P5,{children:[c.jsx(F5,{children:a==="ar"?"رحلتك تبدأ هنا":"Your journey Start Here"}),c.jsx(J5,{children:a==="ar"?"احجز رحلاتك وفنادقك وسياراتك بأفضل الأسعار":"Book your flights, hotels and cars at the best prices."}),c.jsxs(W5,{children:[c.jsxs(Fd,{className:i==="flights"?"active":"",onClick:()=>l("flights"),children:[c.jsx("i",{className:"fas fa-plane"}),a==="ar"?"رحلات طيران":"Flights"]}),c.jsxs(Fd,{className:i==="hotels"?"active":"",onClick:()=>l("hotels"),children:[c.jsx("i",{className:"fas fa-hotel"}),a==="ar"?"الفنادق":"Hotels"]}),c.jsxs(Fd,{className:i==="cars"?"active":"",onClick:()=>l("cars"),children:[c.jsx("i",{className:"fas fa-car"}),a==="ar"?"السيارات":"Cars"]})]}),c.jsx(I5,{children:c.jsxs(e6,{onSubmit:O,children:[c.jsxs(t6,{children:[c.jsxs(_s,{children:[c.jsx("label",{htmlFor:"origin",children:a==="ar"?"من":"From"}),c.jsx("input",{type:"text",id:"origin",placeholder:a==="ar"?"مدينة المغادرة":"Departure city",value:f,onChange:A=>g(A.target.value),className:D.origin?"error":""})]}),c.jsx(a6,{type:"button",onClick:N,children:c.jsx("i",{className:"fas fa-exchange-alt"})}),c.jsxs(_s,{children:[c.jsx("label",{htmlFor:"destination",children:a==="ar"?"إلى":"To"}),c.jsx("input",{type:"text",id:"destination",placeholder:a==="ar"?"مدينة الوصول":"Arrival city",value:b,onChange:A=>v(A.target.value),className:D.destination?"error":""})]})]}),c.jsxs(_s,{children:[c.jsx("label",{htmlFor:"departure-date",children:a==="ar"?"تاريخ المغادرة":"Departure Date"}),c.jsx("input",{type:"date",id:"departure-date",value:p,onChange:A=>y(A.target.value),className:D.departureDate?"error":""})]}),c.jsxs(_s,{children:[c.jsx("label",{htmlFor:"return-date",children:a==="ar"?"تاريخ العودة":"Return Date"}),c.jsx("input",{type:"date",id:"return-date",value:k,onChange:A=>E(A.target.value),className:D.returnDate?"error":""})]}),c.jsx(n6,{type:"submit",children:a==="ar"?"ابحث":"Search"})]})})]}),c.jsxs(r6,{children:[c.jsxs(Ls,{children:[c.jsx("i",{className:"fas fa-globe"}),c.jsx("h3",{children:a==="ar"?"وجهات متعددة":"Multiple parties"}),c.jsx("p",{children:a==="ar"?"اكتشف أكثر من 1000 وجهة حول العالم":"Discover over 1,000 destinations around the world"})]}),c.jsxs(Ls,{children:[c.jsx("i",{className:"fas fa-tag"}),c.jsx("h3",{children:a==="ar"?"أفضل الأسعار":"Best Prices"}),c.jsx("p",{children:a==="ar"?"نضمن لك أفضل الأسعار مع خيارات متعددة":"We guarantee the best prices with Multipl options"})]}),c.jsxs(Ls,{children:[c.jsx("i",{className:"fas fa-headset"}),c.jsx("h3",{children:a==="ar"?"دعم 24/7":"24/7 support"}),c.jsx("p",{children:a==="ar"?" فريق دعم متكامل لمساعدتك في أي وقت":"A full support team to help you at any time"})]}),c.jsxs(Ls,{children:[c.jsx("i",{className:"fas fa-lock"}),c.jsx("h3",{children:a==="ar"?"دفع آمن":"Secure payment"}),c.jsx("p",{children:a==="ar"?"نضمن لك أمان معاملاتك وحماية بياناتك":"We guarantee the security of your transactions and the protection of your data."})]})]}),c.jsxs(i6,{children:[c.jsx("h2",{children:a==="ar"?"أفضل العروض":"Best offers"}),c.jsxs(l6,{children:[c.jsxs(Hs,{children:[c.jsx(Us,{image:"/src/images/dubai.jpg"}),c.jsxs($s,{children:[c.jsx("h3",{children:a==="ar"?"عرض دبي المميز":"Dubai Special Offer"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 1999 ريال":"Starting from 1999 SAR"}),c.jsx("p",{children:a==="ar"?"3 ليالي في فندق 5 نجوم مع تذاكر الطيران":"3 nights in a 5-star hotel with flight tickets"})]})]}),c.jsxs(Hs,{children:[c.jsx(Us,{image:"/src/images/istanbul.jpg"}),c.jsxs($s,{children:[c.jsx("h3",{children:a==="ar"?"رحلة إسطنبول":"Istanbul trip"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 2499 ريال":"Starting from 2499 SAR"}),c.jsx("p",{children:a==="ar"?"5 ليالي شاملة الفندق والطيران":"5 nights including hotel and flight"})]})]}),c.jsxs(Hs,{children:[c.jsx(Us,{image:"/src/images/maldives.jpg"}),c.jsxs($s,{children:[c.jsx("h3",{children:a==="ar"?"جزر المالديف":"Maldives"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 4999 ريال":"Starting from 4999 riyals"}),c.jsx("p",{children:a==="ar"?"7 ليالي في منتجع فاخر مع الطيران":"7 nights in a luxury resort with flights"})]})]}),c.jsxs(Hs,{children:[c.jsx(Us,{image:"/src/images/paris.jpg"}),c.jsxs($s,{children:[c.jsx("h3",{children:a==="ar"?"باريس _ فرنسا":"Paris, France"}),c.jsx("p",{className:"offer-price",children:a==="ar"?"يبدأ من 3999 ريال":"Starting from 3999 riyals"}),c.jsx("p",{children:a==="ar"?"4 ليالي في فندق 5 نجوم مع تذاكر الطيران":"4 nights in a 5-star hotel with flight tickets"})]})]})]})]})]})})},s6=qa`
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
`,c6=j.div`
    max-width: 1200px;
    margin: -0px auto;
    padding: 2rem;

    h1 {
    text-align: center;
    color: #00233D;
    margin-bottom: 3rem;
    font-size: 2.5rem;
}
`,Jd=j.div`
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
`,u6=j.section`
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
`,d6=j.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`,g0=j.div`
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
`,f6=()=>{const{language:a}=pa();return c.jsxs(c.Fragment,{children:[c.jsx(s6,{}),c.jsxs(c6,{children:[c.jsx("h1",{children:a==="ar"?"كيف يمكننا مساعدتك؟":"How can we help you?"}),c.jsxs(Jd,{children:[c.jsx("h3",{children:"كيف يمكنني حجز رحلة طيران؟"}),c.jsx("p",{children:"يمكنك حجز رحلة طيران بسهولة من خلال اتباع الخطوات التالية:"}),c.jsxs("ul",{children:[c.jsx("li",{children:"اختر وجهة سفرك وتاريخ الرحلة"}),c.jsx("li",{children:"حدد عدد المسافرين"}),c.jsx("li",{children:"اختر الرحلة المناسبة من النتائج"}),c.jsx("li",{children:"أدخل بيانات المسافرين"}),c.jsx("li",{children:"اختر طريقة الدفع المناسبة"})]})]}),c.jsxs(Jd,{children:[c.jsx("h3",{children:"كيف يمكنني إلغاء حجز؟"}),c.jsx("p",{children:"يمكنك إلغاء حجزك من خلال:"}),c.jsxs("p",{children:["يرجى مراجعة ",c.jsx(ma,{to:"/cancellation",children:"سياسة الإلغاء"})," للاطلاع على الشروط والأحكام."]})]}),c.jsxs(Jd,{children:[c.jsx("h3",{children:"كيف يمكنني تعديل حجز؟"}),c.jsx("p",{children:"يمكنك تعديل حجزك من خلال:"}),c.jsx("p",{children:"يمكنك تعديل تفاصيل حجزك مثل التاريخ أو الوجهة أو عدد المسافرين من خلال حسابك الشخصي. يرجى مراعاة أن بعض التعديلات قد تكون خاضعة لرسوم إضافية حسب سياسة التعديل الخاصة بالخدمة المقدمة."})]}),c.jsxs(u6,{children:[c.jsx("h2",{children:"طرق التواصل معنا"}),c.jsxs(d6,{children:[c.jsxs(g0,{children:[c.jsx(Y2,{}),c.jsx("h3",{children:"اتصل بنا"}),c.jsx("p",{children:"123456789"}),c.jsx("p",{children:"متاح على مدار الساعة"})]}),c.jsxs(g0,{children:[c.jsx(H2,{}),c.jsx("h3",{children:"راسلنا عبر البريد الإلكتروني"}),c.jsx("p",{children:c.jsx("a",{href:"mailto:bessie.ferry32@ethereal.email",children:"bessie.ferry32@ethereal.email"})}),c.jsx("p",{children:"الرد خلال 24 ساعة"})]})]})]})]})]})},m6=({userData:a,loading:i,error:l})=>i?c.jsx("div",{children:"Loading user info..."}):l?c.jsx("div",{style:{color:"red"},children:l}):a?c.jsxs("div",{className:"user-info-card",children:[c.jsx("h2",{children:"Account Information"}),c.jsxs("div",{children:[c.jsx("b",{children:"Name:"})," ",a.firstName," ",a.lastName]}),c.jsxs("div",{children:[c.jsx("b",{children:"Email:"})," ",a.email]}),c.jsxs("div",{children:[c.jsx("b",{children:"Phone:"})," ",a.phone||"N/A"]})]}):c.jsx("div",{children:"No user data."}),h6=a=>c.jsxs("div",{className:"settings-section",children:[c.jsx("h2",{children:"Settings"}),c.jsxs("div",{className:"settings-cards-grid",children:[c.jsxs("div",{className:"settings-card",children:[c.jsxs("div",{className:"settings-card-header",children:[c.jsx($2,{className:"settings-icon"}),c.jsx("span",{children:"Reset Password"})]}),c.jsxs("div",{className:"settings-card-body",children:[c.jsx("input",{className:"settings-input",type:"password",placeholder:"Current Password"}),c.jsx("input",{className:"settings-input",type:"password",placeholder:"New Password"}),c.jsx("input",{className:"settings-input",type:"password",placeholder:"Confirm New Password"}),c.jsx("button",{className:"settings-btn",children:"Reset Password"})]})]}),c.jsxs("div",{className:"settings-card",children:[c.jsxs("div",{className:"settings-card-header",children:[c.jsx(L2,{className:"settings-icon"}),c.jsx("span",{children:"Forgot Email"})]}),c.jsxs("div",{className:"settings-card-body",children:[c.jsx("input",{className:"settings-input",type:"email",placeholder:"Enter your email"}),c.jsx("button",{className:"settings-btn",children:"Send Reset Link"})]})]}),c.jsxs("div",{className:"settings-card",children:[c.jsxs("div",{className:"settings-card-header",children:[c.jsx(q2,{className:"settings-icon"}),c.jsx("span",{children:"Linked Accounts"})]}),c.jsxs("div",{className:"settings-card-body",children:[c.jsxs("div",{className:"linked-account-row",children:[c.jsx("img",{src:"/src/images/google.png",alt:"Google",className:"linked-icon"}),c.jsx("span",{children:"Google"}),c.jsx("button",{className:"settings-btn settings-btn-secondary",children:"Unlink"})]}),c.jsxs("div",{className:"linked-account-row",children:[c.jsx("img",{src:"/src/images/facebook.png",alt:"Facebook",className:"linked-icon"}),c.jsx("span",{children:"Facebook"}),c.jsx("button",{className:"settings-btn settings-btn-secondary",children:"Link"})]}),c.jsxs("div",{className:"linked-account-row",children:[c.jsx("img",{src:"/src/images/X.png",alt:"X",className:"linked-icon"}),c.jsx("span",{children:"X"}),c.jsx("button",{className:"settings-btn settings-btn-secondary",children:"Link"})]})]})]})]})]});/*!
* sweetalert2 v11.22.1
* Released under the MIT License.
*/function _x(a,i,l){if(typeof a=="function"?a===i:a.has(i))return arguments.length<3?i:l;throw new TypeError("Private element is not present on this object")}function p6(a,i){if(i.has(a))throw new TypeError("Cannot initialize the same private elements twice on an object")}function x0(a,i){return a.get(_x(a,i))}function g6(a,i,l){p6(a,i),i.set(a,l)}function x6(a,i,l){return a.set(_x(a,i),l),l}const v6=100,fe={},b6=()=>{fe.previousActiveElement instanceof HTMLElement?(fe.previousActiveElement.focus(),fe.previousActiveElement=null):document.body&&document.body.focus()},y6=a=>new Promise(i=>{if(!a)return i();const l=window.scrollX,s=window.scrollY;fe.restoreFocusTimeout=setTimeout(()=>{b6(),i()},v6),window.scrollTo(l,s)}),Lx="swal2-",w6=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],Y=w6.reduce((a,i)=>(a[i]=Lx+i,a),{}),S6=["success","warning","info","question","error"],nc=S6.reduce((a,i)=>(a[i]=Lx+i,a),{}),Hx="SweetAlert2:",Nf=a=>a.charAt(0).toUpperCase()+a.slice(1),Zt=a=>{console.warn(`${Hx} ${typeof a=="object"?a.join(" "):a}`)},Lr=a=>{console.error(`${Hx} ${a}`)},v0=[],j6=a=>{v0.includes(a)||(v0.push(a),Zt(a))},Ux=(a,i=null)=>{j6(`"${a}" is deprecated and will be removed in the next major release.${i?` Use "${i}" instead.`:""}`)},wc=a=>typeof a=="function"?a():a,Bf=a=>a&&typeof a.toPromise=="function",oo=a=>Bf(a)?a.toPromise():Promise.resolve(a),_f=a=>a&&Promise.resolve(a)===a,Kt=()=>document.body.querySelector(`.${Y.container}`),so=a=>{const i=Kt();return i?i.querySelector(a):null},ga=a=>so(`.${a}`),Ne=()=>ga(Y.popup),Qi=()=>ga(Y.icon),E6=()=>ga(Y["icon-content"]),$x=()=>ga(Y.title),Lf=()=>ga(Y["html-container"]),qx=()=>ga(Y.image),Hf=()=>ga(Y["progress-steps"]),Sc=()=>ga(Y["validation-message"]),nn=()=>so(`.${Y.actions} .${Y.confirm}`),Zi=()=>so(`.${Y.actions} .${Y.cancel}`),Hr=()=>so(`.${Y.actions} .${Y.deny}`),C6=()=>ga(Y["input-label"]),Ki=()=>so(`.${Y.loader}`),co=()=>ga(Y.actions),Yx=()=>ga(Y.footer),jc=()=>ga(Y["timer-progress-bar"]),Uf=()=>ga(Y.close),A6=`
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
`,$f=()=>{const a=Ne();if(!a)return[];const i=a.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),l=Array.from(i).sort((f,g)=>{const b=parseInt(f.getAttribute("tabindex")||"0"),v=parseInt(g.getAttribute("tabindex")||"0");return b>v?1:b<v?-1:0}),s=a.querySelectorAll(A6),d=Array.from(s).filter(f=>f.getAttribute("tabindex")!=="-1");return[...new Set(l.concat(d))].filter(f=>ea(f))},qf=()=>Rn(document.body,Y.shown)&&!Rn(document.body,Y["toast-shown"])&&!Rn(document.body,Y["no-backdrop"]),Ec=()=>{const a=Ne();return a?Rn(a,Y.toast):!1},T6=()=>{const a=Ne();return a?a.hasAttribute("data-loading"):!1},xa=(a,i)=>{if(a.textContent="",i){const s=new DOMParser().parseFromString(i,"text/html"),d=s.querySelector("head");d&&Array.from(d.childNodes).forEach(g=>{a.appendChild(g)});const f=s.querySelector("body");f&&Array.from(f.childNodes).forEach(g=>{g instanceof HTMLVideoElement||g instanceof HTMLAudioElement?a.appendChild(g.cloneNode(!0)):a.appendChild(g)})}},Rn=(a,i)=>{if(!i)return!1;const l=i.split(/\s+/);for(let s=0;s<l.length;s++)if(!a.classList.contains(l[s]))return!1;return!0},k6=(a,i)=>{Array.from(a.classList).forEach(l=>{!Object.values(Y).includes(l)&&!Object.values(nc).includes(l)&&!Object.values(i.showClass||{}).includes(l)&&a.classList.remove(l)})},ha=(a,i,l)=>{if(k6(a,i),!i.customClass)return;const s=i.customClass[l];if(s){if(typeof s!="string"&&!s.forEach){Zt(`Invalid type of customClass.${l}! Expected string or iterable object, got "${typeof s}"`);return}Le(a,s)}},Cc=(a,i)=>{if(!i)return null;switch(i){case"select":case"textarea":case"file":return a.querySelector(`.${Y.popup} > .${Y[i]}`);case"checkbox":return a.querySelector(`.${Y.popup} > .${Y.checkbox} input`);case"radio":return a.querySelector(`.${Y.popup} > .${Y.radio} input:checked`)||a.querySelector(`.${Y.popup} > .${Y.radio} input:first-child`);case"range":return a.querySelector(`.${Y.popup} > .${Y.range} input`);default:return a.querySelector(`.${Y.popup} > .${Y.input}`)}},Gx=a=>{if(a.focus(),a.type!=="file"){const i=a.value;a.value="",a.value=i}},Vx=(a,i,l)=>{!a||!i||(typeof i=="string"&&(i=i.split(/\s+/).filter(Boolean)),i.forEach(s=>{Array.isArray(a)?a.forEach(d=>{l?d.classList.add(s):d.classList.remove(s)}):l?a.classList.add(s):a.classList.remove(s)}))},Le=(a,i)=>{Vx(a,i,!0)},Oa=(a,i)=>{Vx(a,i,!1)},lr=(a,i)=>{const l=Array.from(a.children);for(let s=0;s<l.length;s++){const d=l[s];if(d instanceof HTMLElement&&Rn(d,i))return d}},Dr=(a,i,l)=>{l===`${parseInt(l)}`&&(l=parseInt(l)),l||parseInt(l)===0?a.style.setProperty(i,typeof l=="number"?`${l}px`:l):a.style.removeProperty(i)},zt=(a,i="flex")=>{a&&(a.style.display=i)},qt=a=>{a&&(a.style.display="none")},Yf=(a,i="block")=>{a&&new MutationObserver(()=>{uo(a,a.innerHTML,i)}).observe(a,{childList:!0,subtree:!0})},b0=(a,i,l,s)=>{const d=a.querySelector(i);d&&d.style.setProperty(l,s)},uo=(a,i,l="flex")=>{i?zt(a,l):qt(a)},ea=a=>!!(a&&(a.offsetWidth||a.offsetHeight||a.getClientRects().length)),z6=()=>!ea(nn())&&!ea(Hr())&&!ea(Zi()),vf=a=>a.scrollHeight>a.clientHeight,R6=(a,i)=>{let l=a;for(;l&&l!==i;){if(vf(l))return!0;l=l.parentElement}return!1},Xx=a=>{const i=window.getComputedStyle(a),l=parseFloat(i.getPropertyValue("animation-duration")||"0"),s=parseFloat(i.getPropertyValue("transition-duration")||"0");return l>0||s>0},Gf=(a,i=!1)=>{const l=jc();l&&ea(l)&&(i&&(l.style.transition="none",l.style.width="100%"),setTimeout(()=>{l.style.transition=`width ${a/1e3}s linear`,l.style.width="0%"},10))},O6=()=>{const a=jc();if(!a)return;const i=parseInt(window.getComputedStyle(a).width);a.style.removeProperty("transition"),a.style.width="100%";const l=parseInt(window.getComputedStyle(a).width),s=i/l*100;a.style.width=`${s}%`},D6=()=>typeof window>"u"||typeof document>"u",M6=`
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
`.replace(/(^|\n)\s*/g,""),N6=()=>{const a=Kt();return a?(a.remove(),Oa([document.documentElement,document.body],[Y["no-backdrop"],Y["toast-shown"],Y["has-column"]]),!0):!1},kr=()=>{fe.currentInstance.resetValidationMessage()},B6=()=>{const a=Ne(),i=lr(a,Y.input),l=lr(a,Y.file),s=a.querySelector(`.${Y.range} input`),d=a.querySelector(`.${Y.range} output`),f=lr(a,Y.select),g=a.querySelector(`.${Y.checkbox} input`),b=lr(a,Y.textarea);i.oninput=kr,l.onchange=kr,f.onchange=kr,g.onchange=kr,b.oninput=kr,s.oninput=()=>{kr(),d.value=s.value},s.onchange=()=>{kr(),d.value=s.value}},_6=a=>typeof a=="string"?document.querySelector(a):a,L6=a=>{const i=Ne();i.setAttribute("role",a.toast?"alert":"dialog"),i.setAttribute("aria-live",a.toast?"polite":"assertive"),a.toast||i.setAttribute("aria-modal","true")},H6=a=>{window.getComputedStyle(a).direction==="rtl"&&Le(Kt(),Y.rtl)},U6=a=>{const i=N6();if(D6()){Lr("SweetAlert2 requires document to initialize");return}const l=document.createElement("div");l.className=Y.container,i&&Le(l,Y["no-transition"]),xa(l,M6),l.dataset.swal2Theme=a.theme;const s=_6(a.target);s.appendChild(l),a.topLayer&&(l.setAttribute("popover",""),l.showPopover()),L6(a),H6(s),B6()},Vf=(a,i)=>{a instanceof HTMLElement?i.appendChild(a):typeof a=="object"?$6(a,i):a&&xa(i,a)},$6=(a,i)=>{a.jquery?q6(i,a):xa(i,a.toString())},q6=(a,i)=>{if(a.textContent="",0 in i)for(let l=0;l in i;l++)a.appendChild(i[l].cloneNode(!0));else a.appendChild(i.cloneNode(!0))},Y6=(a,i)=>{const l=co(),s=Ki();!l||!s||(!i.showConfirmButton&&!i.showDenyButton&&!i.showCancelButton?qt(l):zt(l),ha(l,i,"actions"),G6(l,s,i),xa(s,i.loaderHtml||""),ha(s,i,"loader"))};function G6(a,i,l){const s=nn(),d=Hr(),f=Zi();!s||!d||!f||(Id(s,"confirm",l),Id(d,"deny",l),Id(f,"cancel",l),V6(s,d,f,l),l.reverseButtons&&(l.toast?(a.insertBefore(f,s),a.insertBefore(d,s)):(a.insertBefore(f,i),a.insertBefore(d,i),a.insertBefore(s,i))))}function V6(a,i,l,s){if(!s.buttonsStyling){Oa([a,i,l],Y.styled);return}Le([a,i,l],Y.styled),s.confirmButtonColor&&a.style.setProperty("--swal2-confirm-button-background-color",s.confirmButtonColor),s.denyButtonColor&&i.style.setProperty("--swal2-deny-button-background-color",s.denyButtonColor),s.cancelButtonColor&&l.style.setProperty("--swal2-cancel-button-background-color",s.cancelButtonColor),Wd(a),Wd(i),Wd(l)}function Wd(a){const i=window.getComputedStyle(a);if(i.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const l=i.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");a.style.setProperty("--swal2-action-button-focus-box-shadow",i.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${l}`))}function Id(a,i,l){const s=Nf(i);uo(a,l[`show${s}Button`],"inline-block"),xa(a,l[`${i}ButtonText`]||""),a.setAttribute("aria-label",l[`${i}ButtonAriaLabel`]||""),a.className=Y[i],ha(a,l,`${i}Button`)}const X6=(a,i)=>{const l=Uf();l&&(xa(l,i.closeButtonHtml||""),ha(l,i,"closeButton"),uo(l,i.showCloseButton),l.setAttribute("aria-label",i.closeButtonAriaLabel||""))},Q6=(a,i)=>{const l=Kt();l&&(Z6(l,i.backdrop),K6(l,i.position),P6(l,i.grow),ha(l,i,"container"))};function Z6(a,i){typeof i=="string"?a.style.background=i:i||Le([document.documentElement,document.body],Y["no-backdrop"])}function K6(a,i){i&&(i in Y?Le(a,Y[i]):(Zt('The "position" parameter is not valid, defaulting to "center"'),Le(a,Y.center)))}function P6(a,i){i&&Le(a,Y[`grow-${i}`])}var Pe={innerParams:new WeakMap,domCache:new WeakMap};const F6=["input","file","range","select","radio","checkbox","textarea"],J6=(a,i)=>{const l=Ne();if(!l)return;const s=Pe.innerParams.get(a),d=!s||i.input!==s.input;F6.forEach(f=>{const g=lr(l,Y[f]);g&&(e3(f,i.inputAttributes),g.className=Y[f],d&&qt(g))}),i.input&&(d&&W6(i),t3(i))},W6=a=>{if(!a.input)return;if(!dt[a.input]){Lr(`Unexpected type of input! Expected ${Object.keys(dt).join(" | ")}, got "${a.input}"`);return}const i=Qx(a.input);if(!i)return;const l=dt[a.input](i,a);zt(i),a.inputAutoFocus&&setTimeout(()=>{Gx(l)})},I6=a=>{for(let i=0;i<a.attributes.length;i++){const l=a.attributes[i].name;["id","type","value","style"].includes(l)||a.removeAttribute(l)}},e3=(a,i)=>{const l=Ne();if(!l)return;const s=Cc(l,a);if(s){I6(s);for(const d in i)s.setAttribute(d,i[d])}},t3=a=>{if(!a.input)return;const i=Qx(a.input);i&&ha(i,a,"input")},Xf=(a,i)=>{!a.placeholder&&i.inputPlaceholder&&(a.placeholder=i.inputPlaceholder)},fo=(a,i,l)=>{if(l.inputLabel){const s=document.createElement("label"),d=Y["input-label"];s.setAttribute("for",a.id),s.className=d,typeof l.customClass=="object"&&Le(s,l.customClass.inputLabel),s.innerText=l.inputLabel,i.insertAdjacentElement("beforebegin",s)}},Qx=a=>{const i=Ne();if(i)return lr(i,Y[a]||Y.input)},rc=(a,i)=>{["string","number"].includes(typeof i)?a.value=`${i}`:_f(i)||Zt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof i}"`)},dt={};dt.text=dt.email=dt.password=dt.number=dt.tel=dt.url=dt.search=dt.date=dt["datetime-local"]=dt.time=dt.week=dt.month=(a,i)=>(rc(a,i.inputValue),fo(a,a,i),Xf(a,i),a.type=i.input,a);dt.file=(a,i)=>(fo(a,a,i),Xf(a,i),a);dt.range=(a,i)=>{const l=a.querySelector("input"),s=a.querySelector("output");return rc(l,i.inputValue),l.type=i.input,rc(s,i.inputValue),fo(l,a,i),a};dt.select=(a,i)=>{if(a.textContent="",i.inputPlaceholder){const l=document.createElement("option");xa(l,i.inputPlaceholder),l.value="",l.disabled=!0,l.selected=!0,a.appendChild(l)}return fo(a,a,i),a};dt.radio=a=>(a.textContent="",a);dt.checkbox=(a,i)=>{const l=Cc(Ne(),"checkbox");l.value="1",l.checked=!!i.inputValue;const s=a.querySelector("span");return xa(s,i.inputPlaceholder||i.inputLabel),l};dt.textarea=(a,i)=>{rc(a,i.inputValue),Xf(a,i),fo(a,a,i);const l=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(Ne()).width),d=()=>{if(!document.body.contains(a))return;const f=a.offsetWidth+l(a);f>s?Ne().style.width=`${f}px`:Dr(Ne(),"width",i.width)};new MutationObserver(d).observe(a,{attributes:!0,attributeFilter:["style"]})}}),a};const a3=(a,i)=>{const l=Lf();l&&(Yf(l),ha(l,i,"htmlContainer"),i.html?(Vf(i.html,l),zt(l,"block")):i.text?(l.textContent=i.text,zt(l,"block")):qt(l),J6(a,i))},n3=(a,i)=>{const l=Yx();l&&(Yf(l),uo(l,i.footer,"block"),i.footer&&Vf(i.footer,l),ha(l,i,"footer"))},r3=(a,i)=>{const l=Pe.innerParams.get(a),s=Qi();if(!s)return;if(l&&i.icon===l.icon){w0(s,i),y0(s,i);return}if(!i.icon&&!i.iconHtml){qt(s);return}if(i.icon&&Object.keys(nc).indexOf(i.icon)===-1){Lr(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${i.icon}"`),qt(s);return}zt(s),w0(s,i),y0(s,i),Le(s,i.showClass&&i.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Zx)},y0=(a,i)=>{for(const[l,s]of Object.entries(nc))i.icon!==l&&Oa(a,s);Le(a,i.icon&&nc[i.icon]),o3(a,i),Zx(),ha(a,i,"icon")},Zx=()=>{const a=Ne();if(!a)return;const i=window.getComputedStyle(a).getPropertyValue("background-color"),l=a.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<l.length;s++)l[s].style.backgroundColor=i},i3=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,l3=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,w0=(a,i)=>{if(!i.icon&&!i.iconHtml)return;let l=a.innerHTML,s="";i.iconHtml?s=S0(i.iconHtml):i.icon==="success"?(s=i3,l=l.replace(/ style=".*?"/g,"")):i.icon==="error"?s=l3:i.icon&&(s=S0({question:"?",warning:"!",info:"i"}[i.icon])),l.trim()!==s.trim()&&xa(a,s)},o3=(a,i)=>{if(i.iconColor){a.style.color=i.iconColor,a.style.borderColor=i.iconColor;for(const l of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])b0(a,l,"background-color",i.iconColor);b0(a,".swal2-success-ring","border-color",i.iconColor)}},S0=a=>`<div class="${Y["icon-content"]}">${a}</div>`,s3=(a,i)=>{const l=qx();if(l){if(!i.imageUrl){qt(l);return}zt(l,""),l.setAttribute("src",i.imageUrl),l.setAttribute("alt",i.imageAlt||""),Dr(l,"width",i.imageWidth),Dr(l,"height",i.imageHeight),l.className=Y.image,ha(l,i,"image")}};let Qf=!1,Kx=0,Px=0,Fx=0,Jx=0;const c3=a=>{a.addEventListener("mousedown",ic),document.body.addEventListener("mousemove",lc),a.addEventListener("mouseup",oc),a.addEventListener("touchstart",ic),document.body.addEventListener("touchmove",lc),a.addEventListener("touchend",oc)},u3=a=>{a.removeEventListener("mousedown",ic),document.body.removeEventListener("mousemove",lc),a.removeEventListener("mouseup",oc),a.removeEventListener("touchstart",ic),document.body.removeEventListener("touchmove",lc),a.removeEventListener("touchend",oc)},ic=a=>{const i=Ne();if(a.target===i||Qi().contains(a.target)){Qf=!0;const l=Wx(a);Kx=l.clientX,Px=l.clientY,Fx=parseInt(i.style.insetInlineStart)||0,Jx=parseInt(i.style.insetBlockStart)||0,Le(i,"swal2-dragging")}},lc=a=>{const i=Ne();if(Qf){let{clientX:l,clientY:s}=Wx(a);i.style.insetInlineStart=`${Fx+(l-Kx)}px`,i.style.insetBlockStart=`${Jx+(s-Px)}px`}},oc=()=>{const a=Ne();Qf=!1,Oa(a,"swal2-dragging")},Wx=a=>{let i=0,l=0;return a.type.startsWith("mouse")?(i=a.clientX,l=a.clientY):a.type.startsWith("touch")&&(i=a.touches[0].clientX,l=a.touches[0].clientY),{clientX:i,clientY:l}},d3=(a,i)=>{const l=Kt(),s=Ne();if(!(!l||!s)){if(i.toast){Dr(l,"width",i.width),s.style.width="100%";const d=Ki();d&&s.insertBefore(d,Qi())}else Dr(s,"width",i.width);Dr(s,"padding",i.padding),i.color&&(s.style.color=i.color),i.background&&(s.style.background=i.background),qt(Sc()),f3(s,i),i.draggable&&!i.toast?(Le(s,Y.draggable),c3(s)):(Oa(s,Y.draggable),u3(s))}},f3=(a,i)=>{const l=i.showClass||{};a.className=`${Y.popup} ${ea(a)?l.popup:""}`,i.toast?(Le([document.documentElement,document.body],Y["toast-shown"]),Le(a,Y.toast)):Le(a,Y.modal),ha(a,i,"popup"),typeof i.customClass=="string"&&Le(a,i.customClass),i.icon&&Le(a,Y[`icon-${i.icon}`])},m3=(a,i)=>{const l=Hf();if(!l)return;const{progressSteps:s,currentProgressStep:d}=i;if(!s||s.length===0||d===void 0){qt(l);return}zt(l),l.textContent="",d>=s.length&&Zt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.forEach((f,g)=>{const b=h3(f);if(l.appendChild(b),g===d&&Le(b,Y["active-progress-step"]),g!==s.length-1){const v=p3(i);l.appendChild(v)}})},h3=a=>{const i=document.createElement("li");return Le(i,Y["progress-step"]),xa(i,a),i},p3=a=>{const i=document.createElement("li");return Le(i,Y["progress-step-line"]),a.progressStepsDistance&&Dr(i,"width",a.progressStepsDistance),i},g3=(a,i)=>{const l=$x();l&&(Yf(l),uo(l,i.title||i.titleText,"block"),i.title&&Vf(i.title,l),i.titleText&&(l.innerText=i.titleText),ha(l,i,"title"))},Ix=(a,i)=>{d3(a,i),Q6(a,i),m3(a,i),r3(a,i),s3(a,i),g3(a,i),X6(a,i),a3(a,i),Y6(a,i),n3(a,i);const l=Ne();typeof i.didRender=="function"&&l&&i.didRender(l),fe.eventEmitter.emit("didRender",l)},x3=()=>ea(Ne()),ev=()=>{var a;return(a=nn())===null||a===void 0?void 0:a.click()},v3=()=>{var a;return(a=Hr())===null||a===void 0?void 0:a.click()},b3=()=>{var a;return(a=Zi())===null||a===void 0?void 0:a.click()},Pi=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),tv=a=>{a.keydownTarget&&a.keydownHandlerAdded&&(a.keydownTarget.removeEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!1)},y3=(a,i,l)=>{tv(a),i.toast||(a.keydownHandler=s=>S3(i,s,l),a.keydownTarget=i.keydownListenerCapture?window:Ne(),a.keydownListenerCapture=i.keydownListenerCapture,a.keydownTarget.addEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!0)},bf=(a,i)=>{var l;const s=$f();if(s.length){a=a+i,a===-2&&(a=s.length-1),a===s.length?a=0:a===-1&&(a=s.length-1),s[a].focus();return}(l=Ne())===null||l===void 0||l.focus()},av=["ArrowRight","ArrowDown"],w3=["ArrowLeft","ArrowUp"],S3=(a,i,l)=>{a&&(i.isComposing||i.keyCode===229||(a.stopKeydownPropagation&&i.stopPropagation(),i.key==="Enter"?j3(i,a):i.key==="Tab"?E3(i):[...av,...w3].includes(i.key)?C3(i.key):i.key==="Escape"&&A3(i,a,l)))},j3=(a,i)=>{if(!wc(i.allowEnterKey))return;const l=Cc(Ne(),i.input);if(a.target&&l&&a.target instanceof HTMLElement&&a.target.outerHTML===l.outerHTML){if(["textarea","file"].includes(i.input))return;ev(),a.preventDefault()}},E3=a=>{const i=a.target,l=$f();let s=-1;for(let d=0;d<l.length;d++)if(i===l[d]){s=d;break}a.shiftKey?bf(s,-1):bf(s,1),a.stopPropagation(),a.preventDefault()},C3=a=>{const i=co(),l=nn(),s=Hr(),d=Zi();if(!i||!l||!s||!d)return;const f=[l,s,d];if(document.activeElement instanceof HTMLElement&&!f.includes(document.activeElement))return;const g=av.includes(a)?"nextElementSibling":"previousElementSibling";let b=document.activeElement;if(b){for(let v=0;v<i.children.length;v++){if(b=b[g],!b)return;if(b instanceof HTMLButtonElement&&ea(b))break}b instanceof HTMLButtonElement&&b.focus()}},A3=(a,i,l)=>{a.preventDefault(),wc(i.allowEscapeKey)&&l(Pi.esc)};var qi={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const T3=()=>{const a=Kt();Array.from(document.body.children).forEach(l=>{l.contains(a)||(l.hasAttribute("aria-hidden")&&l.setAttribute("data-previous-aria-hidden",l.getAttribute("aria-hidden")||""),l.setAttribute("aria-hidden","true"))})},nv=()=>{Array.from(document.body.children).forEach(i=>{i.hasAttribute("data-previous-aria-hidden")?(i.setAttribute("aria-hidden",i.getAttribute("data-previous-aria-hidden")||""),i.removeAttribute("data-previous-aria-hidden")):i.removeAttribute("aria-hidden")})},rv=typeof window<"u"&&!!window.GestureEvent,k3=()=>{if(rv&&!Rn(document.body,Y.iosfix)){const a=document.body.scrollTop;document.body.style.top=`${a*-1}px`,Le(document.body,Y.iosfix),z3()}},z3=()=>{const a=Kt();if(!a)return;let i;a.ontouchstart=l=>{i=R3(l)},a.ontouchmove=l=>{i&&(l.preventDefault(),l.stopPropagation())}},R3=a=>{const i=a.target,l=Kt(),s=Lf();return!l||!s||O3(a)||D3(a)?!1:i===l||!vf(l)&&i instanceof HTMLElement&&!R6(i,s)&&i.tagName!=="INPUT"&&i.tagName!=="TEXTAREA"&&!(vf(s)&&s.contains(i))},O3=a=>a.touches&&a.touches.length&&a.touches[0].touchType==="stylus",D3=a=>a.touches&&a.touches.length>1,M3=()=>{if(Rn(document.body,Y.iosfix)){const a=parseInt(document.body.style.top,10);Oa(document.body,Y.iosfix),document.body.style.top="",document.body.scrollTop=a*-1}},N3=()=>{const a=document.createElement("div");a.className=Y["scrollbar-measure"],document.body.appendChild(a);const i=a.getBoundingClientRect().width-a.clientWidth;return document.body.removeChild(a),i};let Mi=null;const B3=a=>{Mi===null&&(document.body.scrollHeight>window.innerHeight||a==="scroll")&&(Mi=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Mi+N3()}px`)},_3=()=>{Mi!==null&&(document.body.style.paddingRight=`${Mi}px`,Mi=null)};function iv(a,i,l,s){Ec()?j0(a,s):(y6(l).then(()=>j0(a,s)),tv(fe)),rv?(i.setAttribute("style","display:none !important"),i.removeAttribute("class"),i.innerHTML=""):i.remove(),qf()&&(_3(),M3(),nv()),L3()}function L3(){Oa([document.documentElement,document.body],[Y.shown,Y["height-auto"],Y["no-backdrop"],Y["toast-shown"]])}function or(a){a=U3(a);const i=qi.swalPromiseResolve.get(this),l=H3(this);this.isAwaitingPromise?a.isDismissed||(mo(this),i(a)):l&&i(a)}const H3=a=>{const i=Ne();if(!i)return!1;const l=Pe.innerParams.get(a);if(!l||Rn(i,l.hideClass.popup))return!1;Oa(i,l.showClass.popup),Le(i,l.hideClass.popup);const s=Kt();return Oa(s,l.showClass.backdrop),Le(s,l.hideClass.backdrop),$3(a,i,l),!0};function lv(a){const i=qi.swalPromiseReject.get(this);mo(this),i&&i(a)}const mo=a=>{a.isAwaitingPromise&&(delete a.isAwaitingPromise,Pe.innerParams.get(a)||a._destroy())},U3=a=>typeof a>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},a),$3=(a,i,l)=>{var s;const d=Kt(),f=Xx(i);typeof l.willClose=="function"&&l.willClose(i),(s=fe.eventEmitter)===null||s===void 0||s.emit("willClose",i),f?q3(a,i,d,l.returnFocus,l.didClose):iv(a,d,l.returnFocus,l.didClose)},q3=(a,i,l,s,d)=>{fe.swalCloseEventFinishedCallback=iv.bind(null,a,l,s,d);const f=function(g){if(g.target===i){var b;(b=fe.swalCloseEventFinishedCallback)===null||b===void 0||b.call(fe),delete fe.swalCloseEventFinishedCallback,i.removeEventListener("animationend",f),i.removeEventListener("transitionend",f)}};i.addEventListener("animationend",f),i.addEventListener("transitionend",f)},j0=(a,i)=>{setTimeout(()=>{var l;typeof i=="function"&&i.bind(a.params)(),(l=fe.eventEmitter)===null||l===void 0||l.emit("didClose"),a._destroy&&a._destroy()})},Yi=a=>{let i=Ne();if(i||new Qt,i=Ne(),!i)return;const l=Ki();Ec()?qt(Qi()):Y3(i,a),zt(l),i.setAttribute("data-loading","true"),i.setAttribute("aria-busy","true"),i.focus()},Y3=(a,i)=>{const l=co(),s=Ki();!l||!s||(!i&&ea(nn())&&(i=nn()),zt(l),i&&(qt(i),s.setAttribute("data-button-to-replace",i.className),l.insertBefore(s,i)),Le([a,l],Y.loading))},G3=(a,i)=>{i.input==="select"||i.input==="radio"?K3(a,i):["text","email","number","tel","textarea"].some(l=>l===i.input)&&(Bf(i.inputValue)||_f(i.inputValue))&&(Yi(nn()),P3(a,i))},V3=(a,i)=>{const l=a.getInput();if(!l)return null;switch(i.input){case"checkbox":return X3(l);case"radio":return Q3(l);case"file":return Z3(l);default:return i.inputAutoTrim?l.value.trim():l.value}},X3=a=>a.checked?1:0,Q3=a=>a.checked?a.value:null,Z3=a=>a.files&&a.files.length?a.getAttribute("multiple")!==null?a.files:a.files[0]:null,K3=(a,i)=>{const l=Ne();if(!l)return;const s=d=>{i.input==="select"?F3(l,sc(d),i):i.input==="radio"&&J3(l,sc(d),i)};Bf(i.inputOptions)||_f(i.inputOptions)?(Yi(nn()),oo(i.inputOptions).then(d=>{a.hideLoading(),s(d)})):typeof i.inputOptions=="object"?s(i.inputOptions):Lr(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof i.inputOptions}`)},P3=(a,i)=>{const l=a.getInput();l&&(qt(l),oo(i.inputValue).then(s=>{l.value=i.input==="number"?`${parseFloat(s)||0}`:`${s}`,zt(l),l.focus(),a.hideLoading()}).catch(s=>{Lr(`Error in inputValue promise: ${s}`),l.value="",zt(l),l.focus(),a.hideLoading()}))};function F3(a,i,l){const s=lr(a,Y.select);if(!s)return;const d=(f,g,b)=>{const v=document.createElement("option");v.value=b,xa(v,g),v.selected=ov(b,l.inputValue),f.appendChild(v)};i.forEach(f=>{const g=f[0],b=f[1];if(Array.isArray(b)){const v=document.createElement("optgroup");v.label=g,v.disabled=!1,s.appendChild(v),b.forEach(p=>d(v,p[1],p[0]))}else d(s,b,g)}),s.focus()}function J3(a,i,l){const s=lr(a,Y.radio);if(!s)return;i.forEach(f=>{const g=f[0],b=f[1],v=document.createElement("input"),p=document.createElement("label");v.type="radio",v.name=Y.radio,v.value=g,ov(g,l.inputValue)&&(v.checked=!0);const y=document.createElement("span");xa(y,b),y.className=Y.label,p.appendChild(v),p.appendChild(y),s.appendChild(p)});const d=s.querySelectorAll("input");d.length&&d[0].focus()}const sc=a=>{const i=[];return a instanceof Map?a.forEach((l,s)=>{let d=l;typeof d=="object"&&(d=sc(d)),i.push([s,d])}):Object.keys(a).forEach(l=>{let s=a[l];typeof s=="object"&&(s=sc(s)),i.push([l,s])}),i},ov=(a,i)=>!!i&&i.toString()===a.toString(),W3=a=>{const i=Pe.innerParams.get(a);a.disableButtons(),i.input?sv(a,"confirm"):Kf(a,!0)},I3=a=>{const i=Pe.innerParams.get(a);a.disableButtons(),i.returnInputValueOnDeny?sv(a,"deny"):Zf(a,!1)},ej=(a,i)=>{a.disableButtons(),i(Pi.cancel)},sv=(a,i)=>{const l=Pe.innerParams.get(a);if(!l.input){Lr(`The "input" parameter is needed to be set when using returnInputValueOn${Nf(i)}`);return}const s=a.getInput(),d=V3(a,l);l.inputValidator?tj(a,d,i):s&&!s.checkValidity()?(a.enableButtons(),a.showValidationMessage(l.validationMessage||s.validationMessage)):i==="deny"?Zf(a,d):Kf(a,d)},tj=(a,i,l)=>{const s=Pe.innerParams.get(a);a.disableInput(),Promise.resolve().then(()=>oo(s.inputValidator(i,s.validationMessage))).then(f=>{a.enableButtons(),a.enableInput(),f?a.showValidationMessage(f):l==="deny"?Zf(a,i):Kf(a,i)})},Zf=(a,i)=>{const l=Pe.innerParams.get(a||void 0);l.showLoaderOnDeny&&Yi(Hr()),l.preDeny?(a.isAwaitingPromise=!0,Promise.resolve().then(()=>oo(l.preDeny(i,l.validationMessage))).then(d=>{d===!1?(a.hideLoading(),mo(a)):a.close({isDenied:!0,value:typeof d>"u"?i:d})}).catch(d=>cv(a||void 0,d))):a.close({isDenied:!0,value:i})},E0=(a,i)=>{a.close({isConfirmed:!0,value:i})},cv=(a,i)=>{a.rejectPromise(i)},Kf=(a,i)=>{const l=Pe.innerParams.get(a||void 0);l.showLoaderOnConfirm&&Yi(),l.preConfirm?(a.resetValidationMessage(),a.isAwaitingPromise=!0,Promise.resolve().then(()=>oo(l.preConfirm(i,l.validationMessage))).then(d=>{ea(Sc())||d===!1?(a.hideLoading(),mo(a)):E0(a,typeof d>"u"?i:d)}).catch(d=>cv(a||void 0,d))):E0(a,i)};function cc(){const a=Pe.innerParams.get(this);if(!a)return;const i=Pe.domCache.get(this);qt(i.loader),Ec()?a.icon&&zt(Qi()):aj(i),Oa([i.popup,i.actions],Y.loading),i.popup.removeAttribute("aria-busy"),i.popup.removeAttribute("data-loading"),i.confirmButton.disabled=!1,i.denyButton.disabled=!1,i.cancelButton.disabled=!1}const aj=a=>{const i=a.popup.getElementsByClassName(a.loader.getAttribute("data-button-to-replace"));i.length?zt(i[0],"inline-block"):z6()&&qt(a.actions)};function uv(){const a=Pe.innerParams.get(this),i=Pe.domCache.get(this);return i?Cc(i.popup,a.input):null}function dv(a,i,l){const s=Pe.domCache.get(a);i.forEach(d=>{s[d].disabled=l})}function fv(a,i){const l=Ne();if(!(!l||!a))if(a.type==="radio"){const s=l.querySelectorAll(`[name="${Y.radio}"]`);for(let d=0;d<s.length;d++)s[d].disabled=i}else a.disabled=i}function mv(){dv(this,["confirmButton","denyButton","cancelButton"],!1)}function hv(){dv(this,["confirmButton","denyButton","cancelButton"],!0)}function pv(){fv(this.getInput(),!1)}function gv(){fv(this.getInput(),!0)}function xv(a){const i=Pe.domCache.get(this),l=Pe.innerParams.get(this);xa(i.validationMessage,a),i.validationMessage.className=Y["validation-message"],l.customClass&&l.customClass.validationMessage&&Le(i.validationMessage,l.customClass.validationMessage),zt(i.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid","true"),s.setAttribute("aria-describedby",Y["validation-message"]),Gx(s),Le(s,Y.inputerror))}function vv(){const a=Pe.domCache.get(this);a.validationMessage&&qt(a.validationMessage);const i=this.getInput();i&&(i.removeAttribute("aria-invalid"),i.removeAttribute("aria-describedby"),Oa(i,Y.inputerror))}const Ni={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},nj=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],rj={allowEnterKey:void 0},ij=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],bv=a=>Object.prototype.hasOwnProperty.call(Ni,a),yv=a=>nj.indexOf(a)!==-1,wv=a=>rj[a],lj=a=>{bv(a)||Zt(`Unknown parameter "${a}"`)},oj=a=>{ij.includes(a)&&Zt(`The parameter "${a}" is incompatible with toasts`)},sj=a=>{const i=wv(a);i&&Ux(a,i)},Sv=a=>{a.backdrop===!1&&a.allowOutsideClick&&Zt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),a.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(a.theme)&&Zt(`Invalid theme "${a.theme}"`);for(const i in a)lj(i),a.toast&&oj(i),sj(i)};function jv(a){const i=Kt(),l=Ne(),s=Pe.innerParams.get(this);if(!l||Rn(l,s.hideClass.popup)){Zt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const d=cj(a),f=Object.assign({},s,d);Sv(f),i.dataset.swal2Theme=f.theme,Ix(this,f),Pe.innerParams.set(this,f),Object.defineProperties(this,{params:{value:Object.assign({},this.params,a),writable:!1,enumerable:!0}})}const cj=a=>{const i={};return Object.keys(a).forEach(l=>{yv(l)?i[l]=a[l]:Zt(`Invalid parameter to update: ${l}`)}),i};function Ev(){const a=Pe.domCache.get(this),i=Pe.innerParams.get(this);if(!i){Cv(this);return}a.popup&&fe.swalCloseEventFinishedCallback&&(fe.swalCloseEventFinishedCallback(),delete fe.swalCloseEventFinishedCallback),typeof i.didDestroy=="function"&&i.didDestroy(),fe.eventEmitter.emit("didDestroy"),uj(this)}const uj=a=>{Cv(a),delete a.params,delete fe.keydownHandler,delete fe.keydownTarget,delete fe.currentInstance},Cv=a=>{a.isAwaitingPromise?(ef(Pe,a),a.isAwaitingPromise=!0):(ef(qi,a),ef(Pe,a),delete a.isAwaitingPromise,delete a.disableButtons,delete a.enableButtons,delete a.getInput,delete a.disableInput,delete a.enableInput,delete a.hideLoading,delete a.disableLoading,delete a.showValidationMessage,delete a.resetValidationMessage,delete a.close,delete a.closePopup,delete a.closeModal,delete a.closeToast,delete a.rejectPromise,delete a.update,delete a._destroy)},ef=(a,i)=>{for(const l in a)a[l].delete(i)};var dj=Object.freeze({__proto__:null,_destroy:Ev,close:or,closeModal:or,closePopup:or,closeToast:or,disableButtons:hv,disableInput:gv,disableLoading:cc,enableButtons:mv,enableInput:pv,getInput:uv,handleAwaitingPromise:mo,hideLoading:cc,rejectPromise:lv,resetValidationMessage:vv,showValidationMessage:xv,update:jv});const fj=(a,i,l)=>{a.toast?mj(a,i,l):(pj(i),gj(i),xj(a,i,l))},mj=(a,i,l)=>{i.popup.onclick=()=>{a&&(hj(a)||a.timer||a.input)||l(Pi.close)}},hj=a=>!!(a.showConfirmButton||a.showDenyButton||a.showCancelButton||a.showCloseButton);let uc=!1;const pj=a=>{a.popup.onmousedown=()=>{a.container.onmouseup=function(i){a.container.onmouseup=()=>{},i.target===a.container&&(uc=!0)}}},gj=a=>{a.container.onmousedown=i=>{i.target===a.container&&i.preventDefault(),a.popup.onmouseup=function(l){a.popup.onmouseup=()=>{},(l.target===a.popup||l.target instanceof HTMLElement&&a.popup.contains(l.target))&&(uc=!0)}}},xj=(a,i,l)=>{i.container.onclick=s=>{if(uc){uc=!1;return}s.target===i.container&&wc(a.allowOutsideClick)&&l(Pi.backdrop)}},vj=a=>typeof a=="object"&&a.jquery,C0=a=>a instanceof Element||vj(a),bj=a=>{const i={};return typeof a[0]=="object"&&!C0(a[0])?Object.assign(i,a[0]):["title","html","icon"].forEach((l,s)=>{const d=a[s];typeof d=="string"||C0(d)?i[l]=d:d!==void 0&&Lr(`Unexpected type of ${l}! Expected "string" or "Element", got ${typeof d}`)}),i};function yj(...a){return new this(...a)}function wj(a){class i extends this{_main(s,d){return super._main(s,Object.assign({},a,d))}}return i}const Sj=()=>fe.timeout&&fe.timeout.getTimerLeft(),Av=()=>{if(fe.timeout)return O6(),fe.timeout.stop()},Tv=()=>{if(fe.timeout){const a=fe.timeout.start();return Gf(a),a}},jj=()=>{const a=fe.timeout;return a&&(a.running?Av():Tv())},Ej=a=>{if(fe.timeout){const i=fe.timeout.increase(a);return Gf(i,!0),i}},Cj=()=>!!(fe.timeout&&fe.timeout.isRunning());let A0=!1;const yf={};function Aj(a="data-swal-template"){yf[a]=this,A0||(document.body.addEventListener("click",Tj),A0=!0)}const Tj=a=>{for(let i=a.target;i&&i!==document;i=i.parentNode)for(const l in yf){const s=i.getAttribute(l);if(s){yf[l].fire({template:s});return}}};class kj{constructor(){this.events={}}_getHandlersByEventName(i){return typeof this.events[i]>"u"&&(this.events[i]=[]),this.events[i]}on(i,l){const s=this._getHandlersByEventName(i);s.includes(l)||s.push(l)}once(i,l){const s=(...d)=>{this.removeListener(i,s),l.apply(this,d)};this.on(i,s)}emit(i,...l){this._getHandlersByEventName(i).forEach(s=>{try{s.apply(this,l)}catch(d){console.error(d)}})}removeListener(i,l){const s=this._getHandlersByEventName(i),d=s.indexOf(l);d>-1&&s.splice(d,1)}removeAllListeners(i){this.events[i]!==void 0&&(this.events[i].length=0)}reset(){this.events={}}}fe.eventEmitter=new kj;const zj=(a,i)=>{fe.eventEmitter.on(a,i)},Rj=(a,i)=>{fe.eventEmitter.once(a,i)},Oj=(a,i)=>{if(!a){fe.eventEmitter.reset();return}i?fe.eventEmitter.removeListener(a,i):fe.eventEmitter.removeAllListeners(a)};var Dj=Object.freeze({__proto__:null,argsToParams:bj,bindClickHandler:Aj,clickCancel:b3,clickConfirm:ev,clickDeny:v3,enableLoading:Yi,fire:yj,getActions:co,getCancelButton:Zi,getCloseButton:Uf,getConfirmButton:nn,getContainer:Kt,getDenyButton:Hr,getFocusableElements:$f,getFooter:Yx,getHtmlContainer:Lf,getIcon:Qi,getIconContent:E6,getImage:qx,getInputLabel:C6,getLoader:Ki,getPopup:Ne,getProgressSteps:Hf,getTimerLeft:Sj,getTimerProgressBar:jc,getTitle:$x,getValidationMessage:Sc,increaseTimer:Ej,isDeprecatedParameter:wv,isLoading:T6,isTimerRunning:Cj,isUpdatableParameter:yv,isValidParameter:bv,isVisible:x3,mixin:wj,off:Oj,on:zj,once:Rj,resumeTimer:Tv,showLoading:Yi,stopTimer:Av,toggleTimer:jj});class Mj{constructor(i,l){this.callback=i,this.remaining=l,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(i){const l=this.running;return l&&this.stop(),this.remaining+=i,l&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const kv=["swal-title","swal-html","swal-footer"],Nj=a=>{const i=typeof a.template=="string"?document.querySelector(a.template):a.template;if(!i)return{};const l=i.content;return Yj(l),Object.assign(Bj(l),_j(l),Lj(l),Hj(l),Uj(l),$j(l),qj(l,kv))},Bj=a=>{const i={};return Array.from(a.querySelectorAll("swal-param")).forEach(s=>{Nr(s,["name","value"]);const d=s.getAttribute("name"),f=s.getAttribute("value");!d||!f||(typeof Ni[d]=="boolean"?i[d]=f!=="false":typeof Ni[d]=="object"?i[d]=JSON.parse(f):i[d]=f)}),i},_j=a=>{const i={};return Array.from(a.querySelectorAll("swal-function-param")).forEach(s=>{const d=s.getAttribute("name"),f=s.getAttribute("value");!d||!f||(i[d]=new Function(`return ${f}`)())}),i},Lj=a=>{const i={};return Array.from(a.querySelectorAll("swal-button")).forEach(s=>{Nr(s,["type","color","aria-label"]);const d=s.getAttribute("type");!d||!["confirm","cancel","deny"].includes(d)||(i[`${d}ButtonText`]=s.innerHTML,i[`show${Nf(d)}Button`]=!0,s.hasAttribute("color")&&(i[`${d}ButtonColor`]=s.getAttribute("color")),s.hasAttribute("aria-label")&&(i[`${d}ButtonAriaLabel`]=s.getAttribute("aria-label")))}),i},Hj=a=>{const i={},l=a.querySelector("swal-image");return l&&(Nr(l,["src","width","height","alt"]),l.hasAttribute("src")&&(i.imageUrl=l.getAttribute("src")||void 0),l.hasAttribute("width")&&(i.imageWidth=l.getAttribute("width")||void 0),l.hasAttribute("height")&&(i.imageHeight=l.getAttribute("height")||void 0),l.hasAttribute("alt")&&(i.imageAlt=l.getAttribute("alt")||void 0)),i},Uj=a=>{const i={},l=a.querySelector("swal-icon");return l&&(Nr(l,["type","color"]),l.hasAttribute("type")&&(i.icon=l.getAttribute("type")),l.hasAttribute("color")&&(i.iconColor=l.getAttribute("color")),i.iconHtml=l.innerHTML),i},$j=a=>{const i={},l=a.querySelector("swal-input");l&&(Nr(l,["type","label","placeholder","value"]),i.input=l.getAttribute("type")||"text",l.hasAttribute("label")&&(i.inputLabel=l.getAttribute("label")),l.hasAttribute("placeholder")&&(i.inputPlaceholder=l.getAttribute("placeholder")),l.hasAttribute("value")&&(i.inputValue=l.getAttribute("value")));const s=Array.from(a.querySelectorAll("swal-input-option"));return s.length&&(i.inputOptions={},s.forEach(d=>{Nr(d,["value"]);const f=d.getAttribute("value");if(!f)return;const g=d.innerHTML;i.inputOptions[f]=g})),i},qj=(a,i)=>{const l={};for(const s in i){const d=i[s],f=a.querySelector(d);f&&(Nr(f,[]),l[d.replace(/^swal-/,"")]=f.innerHTML.trim())}return l},Yj=a=>{const i=kv.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(a.children).forEach(l=>{const s=l.tagName.toLowerCase();i.includes(s)||Zt(`Unrecognized element <${s}>`)})},Nr=(a,i)=>{Array.from(a.attributes).forEach(l=>{i.indexOf(l.name)===-1&&Zt([`Unrecognized attribute "${l.name}" on <${a.tagName.toLowerCase()}>.`,`${i.length?`Allowed attributes are: ${i.join(", ")}`:"To set the value, use HTML within the element."}`])})},zv=10,Gj=a=>{const i=Kt(),l=Ne();typeof a.willOpen=="function"&&a.willOpen(l),fe.eventEmitter.emit("willOpen",l);const d=window.getComputedStyle(document.body).overflowY;Qj(i,l,a),setTimeout(()=>{Vj(i,l)},zv),qf()&&(Xj(i,a.scrollbarPadding,d),T3()),!Ec()&&!fe.previousActiveElement&&(fe.previousActiveElement=document.activeElement),typeof a.didOpen=="function"&&setTimeout(()=>a.didOpen(l)),fe.eventEmitter.emit("didOpen",l),Oa(i,Y["no-transition"])},dc=a=>{const i=Ne();if(a.target!==i)return;const l=Kt();i.removeEventListener("animationend",dc),i.removeEventListener("transitionend",dc),l.style.overflowY="auto"},Vj=(a,i)=>{Xx(i)?(a.style.overflowY="hidden",i.addEventListener("animationend",dc),i.addEventListener("transitionend",dc)):a.style.overflowY="auto"},Xj=(a,i,l)=>{k3(),i&&l!=="hidden"&&B3(l),setTimeout(()=>{a.scrollTop=0})},Qj=(a,i,l)=>{Le(a,l.showClass.backdrop),l.animation?(i.style.setProperty("opacity","0","important"),zt(i,"grid"),setTimeout(()=>{Le(i,l.showClass.popup),i.style.removeProperty("opacity")},zv)):zt(i,"grid"),Le([document.documentElement,document.body],Y.shown),l.heightAuto&&l.backdrop&&!l.toast&&Le([document.documentElement,document.body],Y["height-auto"])};var T0={email:(a,i)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(a)?Promise.resolve():Promise.resolve(i||"Invalid email address"),url:(a,i)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(a)?Promise.resolve():Promise.resolve(i||"Invalid URL")};function Zj(a){a.inputValidator||(a.input==="email"&&(a.inputValidator=T0.email),a.input==="url"&&(a.inputValidator=T0.url))}function Kj(a){(!a.target||typeof a.target=="string"&&!document.querySelector(a.target)||typeof a.target!="string"&&!a.target.appendChild)&&(Zt('Target parameter is not valid, defaulting to "body"'),a.target="body")}function Pj(a){Zj(a),a.showLoaderOnConfirm&&!a.preConfirm&&Zt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Kj(a),typeof a.title=="string"&&(a.title=a.title.split(`
`).join("<br />")),U6(a)}let en;var qs=new WeakMap;class ft{constructor(...i){if(g6(this,qs,void 0),typeof window>"u")return;en=this;const l=Object.freeze(this.constructor.argsToParams(i));this.params=l,this.isAwaitingPromise=!1,x6(qs,this,this._main(en.params))}_main(i,l={}){if(Sv(Object.assign({},l,i)),fe.currentInstance){const f=qi.swalPromiseResolve.get(fe.currentInstance),{isAwaitingPromise:g}=fe.currentInstance;fe.currentInstance._destroy(),g||f({isDismissed:!0}),qf()&&nv()}fe.currentInstance=en;const s=Jj(i,l);Pj(s),Object.freeze(s),fe.timeout&&(fe.timeout.stop(),delete fe.timeout),clearTimeout(fe.restoreFocusTimeout);const d=Wj(en);return Ix(en,s),Pe.innerParams.set(en,s),Fj(en,d,s)}then(i){return x0(qs,this).then(i)}finally(i){return x0(qs,this).finally(i)}}const Fj=(a,i,l)=>new Promise((s,d)=>{const f=g=>{a.close({isDismissed:!0,dismiss:g})};qi.swalPromiseResolve.set(a,s),qi.swalPromiseReject.set(a,d),i.confirmButton.onclick=()=>{W3(a)},i.denyButton.onclick=()=>{I3(a)},i.cancelButton.onclick=()=>{ej(a,f)},i.closeButton.onclick=()=>{f(Pi.close)},fj(l,i,f),y3(fe,l,f),G3(a,l),Gj(l),Ij(fe,l,f),e4(i,l),setTimeout(()=>{i.container.scrollTop=0})}),Jj=(a,i)=>{const l=Nj(a),s=Object.assign({},Ni,i,l,a);return s.showClass=Object.assign({},Ni.showClass,s.showClass),s.hideClass=Object.assign({},Ni.hideClass,s.hideClass),s.animation===!1&&(s.showClass={backdrop:"swal2-noanimation"},s.hideClass={}),s},Wj=a=>{const i={popup:Ne(),container:Kt(),actions:co(),confirmButton:nn(),denyButton:Hr(),cancelButton:Zi(),loader:Ki(),closeButton:Uf(),validationMessage:Sc(),progressSteps:Hf()};return Pe.domCache.set(a,i),i},Ij=(a,i,l)=>{const s=jc();qt(s),i.timer&&(a.timeout=new Mj(()=>{l("timer"),delete a.timeout},i.timer),i.timerProgressBar&&(zt(s),ha(s,i,"timerProgressBar"),setTimeout(()=>{a.timeout&&a.timeout.running&&Gf(i.timer)})))},e4=(a,i)=>{if(!i.toast){if(!wc(i.allowEnterKey)){Ux("allowEnterKey"),n4();return}t4(a)||a4(a,i)||bf(-1,1)}},t4=a=>{const i=Array.from(a.popup.querySelectorAll("[autofocus]"));for(const l of i)if(l instanceof HTMLElement&&ea(l))return l.focus(),!0;return!1},a4=(a,i)=>i.focusDeny&&ea(a.denyButton)?(a.denyButton.focus(),!0):i.focusCancel&&ea(a.cancelButton)?(a.cancelButton.focus(),!0):i.focusConfirm&&ea(a.confirmButton)?(a.confirmButton.focus(),!0):!1,n4=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const a=new Date,i=localStorage.getItem("swal-initiation");i?(a.getTime()-Date.parse(i))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const l=document.createElement("audio");l.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",l.loop=!0,document.body.appendChild(l),setTimeout(()=>{l.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${a}`)}ft.prototype.disableButtons=hv;ft.prototype.enableButtons=mv;ft.prototype.getInput=uv;ft.prototype.disableInput=gv;ft.prototype.enableInput=pv;ft.prototype.hideLoading=cc;ft.prototype.disableLoading=cc;ft.prototype.showValidationMessage=xv;ft.prototype.resetValidationMessage=vv;ft.prototype.close=or;ft.prototype.closePopup=or;ft.prototype.closeModal=or;ft.prototype.closeToast=or;ft.prototype.rejectPromise=lv;ft.prototype.update=jv;ft.prototype._destroy=Ev;Object.assign(ft,Dj);Object.keys(dj).forEach(a=>{ft[a]=function(...i){return en&&en[a]?en[a](...i):null}});ft.DismissReason=Pi;ft.version="11.22.1";const Qt=ft;Qt.default=Qt;typeof document<"u"&&function(a,i){var l=a.createElement("style");if(a.getElementsByTagName("head")[0].appendChild(l),l.styleSheet)l.styleSheet.disabled||(l.styleSheet.cssText=i);else try{l.innerHTML=i}catch{l.innerText=i}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const Fl=["BMW","Toyota","Honda","Mercedes","Hyundai","Kia"],r4=()=>{const a=Br(),[i,l]=x.useState({}),[s,d]=x.useState([]),[f,g]=x.useState(!0),[b,v]=x.useState(null),[p,y]=x.useState({}),[k,E]=x.useState({}),[D,z]=x.useState({}),[N,B]=x.useState({});x.useEffect(()=>{(async()=>{g(!0),v(null);try{const G=localStorage.getItem("token"),P=await fetch("https://tickifywebsite.runasp.net/me/my-reservations",{headers:{Authorization:G?`Bearer ${G}`:void 0}});if(!P.ok)throw new Error("فشل في جلب الرحلات");const ne=await P.json();d(Array.isArray(ne)?ne:[])}catch(G){v(G.message)}finally{g(!1)}})()},[]),x.useEffect(()=>{s&&s.length>0&&s.forEach(_=>{if(_.id!==void 0&&_.id!==null&&!p[_.id]){E(P=>({...P,[_.id]:!0}));const G=localStorage.getItem("token");fetch(`https://tickifywebsite.runasp.net/me/my-Hotel-reservations/${_.id}`,{headers:{Authorization:G?`Bearer ${G}`:void 0}}).then(P=>{if(!P.ok)throw new Error("فشل في جلب حجوزات الفنادق");return P.json()}).then(P=>{y(ne=>({...ne,[_.id]:P})),E(ne=>({...ne,[_.id]:!1}))}).catch(P=>{z(ne=>({...ne,[_.id]:P.message})),E(ne=>({...ne,[_.id]:!1}))})}})},[s]);const O=async(_,G)=>{var P;l(ne=>({...ne,[G]:{...ne[G],loading:!0}}));try{const ne=localStorage.getItem("token"),ee={type:((P=i[G])==null?void 0:P.type)||Fl[0],flightReservationId:_,hotelReservationId:G},le=await fetch("https://tickifywebsite.runasp.net/api/Car/Reserve",{method:"POST",headers:{"Content-Type":"application/json",Authorization:ne?`Bearer ${ne}`:void 0},body:JSON.stringify(ee)});if(!le.ok){const oe=await le.json();throw new Error(oe.description||"Failed to book car")}l(oe=>({...oe,[G]:{open:!1,type:Fl[0],loading:!1}})),await Qt.fire({icon:"success",title:"تم حجز السيارة بنجاح!",confirmButtonText:"حسناً"})}catch(ne){l(Z=>({...Z,[G]:{...Z[G],loading:!1}})),await Qt.fire({icon:"error",title:"فشل الحجز",text:ne.message,confirmButtonText:"حسناً"})}},A=_=>{B(G=>({...G,[_]:!G[_]}))},q=[],W=new Set;return s.forEach(_=>{const G=`${_.departureAirport}|${_.arrivalAirport}|${_.departureDate}|${_.arrivalDate}`;W.has(G)||(q.push(_),W.add(G))}),f?c.jsx("div",{className:"user-info-card",children:"Loading your reservations..."}):b?c.jsx("div",{className:"user-info-card",style:{color:"red"},children:b}):c.jsxs("div",{className:"trips-section",children:[c.jsx("h2",{children:"My Trips"}),q.length===0?c.jsx("div",{children:"No trips found."}):q.map(_=>{const G=p[_.id]||[],P=k[_.id],ne=D[_.id];return c.jsxs("div",{className:"trip-card",children:[c.jsx("div",{className:"trip-header",onClick:()=>A(_.id),style:{cursor:"pointer",userSelect:"none",transition:"background-color 0.3s ease"},children:c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsxs("div",{children:[c.jsx("b",{children:_.flight?`${_.flight.from} → ${_.flight.to}`:_.departureAirport+" → "+_.arrivalAirport}),c.jsx("br",{}),c.jsx("span",{style:{fontSize:"14px",color:"#666"},children:_.flight?`${new Date(_.flight.departureDate).toLocaleString()} - ${new Date(_.flight.arrivalDate).toLocaleString()}`:`${new Date(_.departureDate).toLocaleString()} - ${new Date(_.arrivalDate).toLocaleString()}`})]}),c.jsx("div",{style:{fontSize:"20px",transition:"transform 0.3s ease",margin:"0px 20px 20px 20px",transform:N[_.id]?"rotate(180deg)":"rotate(0deg)"},children:"▼"})]})}),c.jsx("div",{style:{maxHeight:N[_.id]?"1000px":"0",overflow:"hidden",transition:"max-height 0.5s ease-in-out",backgroundColor:"#f8f9fa",borderTop:N[_.id]?"1px solid #dee2e6":"none"},children:c.jsxs("div",{style:{padding:"16px"},children:[c.jsx("b",{style:{display:"block",marginBottom:"12px",color:"#495057"},children:"Hotels for this flight:"}),P?c.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#6c757d"},children:"Loading hotels..."}):ne?c.jsx("div",{style:{textAlign:"center",padding:"20px"},children:c.jsx("button",{className:"settings-btn",style:{marginTop:8},onClick:()=>{_.id?a("/hotels/results",{state:{reservationId:_.id}}):alert("No reservation ID found for this reservation.")},children:"احجز فندقك"})}):G.length===0?c.jsxs("div",{style:{textAlign:"center",padding:"20px"},children:[c.jsx("div",{style:{background:"#f8d7da",color:"#c82333",borderRadius:"6px",padding:"12px",marginBottom:"12px",fontWeight:500},children:'{"code": "NoReservations", "description": "No hotel reservations found for this flight reservation."}'}),c.jsx("button",{className:"settings-btn",style:{marginTop:8},onClick:()=>{_.id?a("/hotels/results",{state:{reservationId:_.id}}):alert("No reservation ID found for this reservation.")},children:"احجز فندق"})]}):c.jsx("div",{style:{display:"grid",gap:"12px"},children:G.map(Z=>{var ee,le,oe,be;return c.jsxs("div",{className:"hotel-card-in-trip",style:{backgroundColor:"white",padding:"16px",borderRadius:"8px",border:"1px solid #dee2e6",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[c.jsxs("div",{style:{marginBottom:"8px"},children:[c.jsx("b",{style:{color:"#495057"},children:"Hotel:"})," ",Z.hotelName]}),c.jsxs("div",{style:{marginBottom:"8px"},children:[c.jsx("b",{style:{color:"#495057"},children:"Address:"})," ",Z.hotelAddress]}),c.jsxs("div",{style:{marginBottom:"12px"},children:[c.jsx("b",{style:{color:"#495057"},children:"Room IDs:"})," ",Z.roomsId&&Z.roomsId.length>0?Z.roomsId.join(", "):"N/A"]}),Z.car?c.jsxs("div",{className:"car-card-in-trip",style:{backgroundColor:"#e8f5e8",padding:"8px",borderRadius:"4px",marginBottom:"12px"},children:[c.jsx("b",{children:"Car:"})," ",Z.car.type," from ",Z.car.from," ","to ",Z.car.to," ($",Z.car.price,")"]}):null,Z.car?c.jsx("div",{style:{marginTop:8,color:"#28a745",fontWeight:600,textAlign:"center"},children:"تم حجز السيارة لهذا الفندق"}):(ee=i[Z.id])!=null&&ee.open?c.jsxs("form",{onSubmit:async xe=>{xe.preventDefault(),await O(_.id,Z.id)},style:{display:"inline",marginTop:8},children:[c.jsx("select",{value:((le=i[Z.id])==null?void 0:le.type)||Fl[0],onChange:xe=>l(he=>({...he,[Z.id]:{...he[Z.id],type:xe.target.value}})),style:{padding:"8px",borderRadius:6,border:"1px solid #ccc",marginRight:8},children:Fl.map(xe=>c.jsx("option",{value:xe,children:xe},xe))}),c.jsx("button",{type:"submit",style:{padding:"8px 16px",borderRadius:6,border:"none",background:"#00233d",color:"#fff"},disabled:(oe=i[Z.id])==null?void 0:oe.loading,children:(be=i[Z.id])!=null&&be.loading?"...جاري الحجز":"احجز سيارة"})]}):c.jsx("div",{style:{textAlign:"center",marginTop:8},children:c.jsx("button",{className:"settings-btn",style:{marginTop:8,display:"block",margin:"8px auto 0"},onClick:()=>l(xe=>({...xe,[Z.id]:{open:!0,type:Fl[0],loading:!1}})),children:"احجز سيارة"})})]},Z.id)})})]})})]},`${_.departureAirport}|${_.arrivalAirport}|${_.departureDate}|${_.arrivalDate}`)})]})};qa`
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
`;const i4=()=>{const[a,i]=x.useState(!1),[l,s]=x.useState(""),[d,f]=x.useState(""),[g,b]=x.useState(""),[v,p]=x.useState(!1),[y,k]=x.useState(""),[E,D]=x.useState(""),[z,N]=x.useState(""),[B,O]=x.useState(""),[A,q]=x.useState(!1),[W,_]=x.useState(!0),[G,P]=x.useState(!1),[ne,Z]=x.useState(!0),[ee,le]=x.useState(!1),[oe,be]=x.useState(!1),[xe,he]=x.useState(!1),[U,J]=x.useState(!1),[ie,ce]=x.useState(""),[w,T]=x.useState(""),[X,F]=x.useState(""),[te,re]=x.useState(localStorage.getItem("avatar")||""),[ae,Se]=x.useState(null),[I,ye]=x.useState(null),[we,Ae]=x.useState(!0),[ve,tt]=x.useState(null),[mt,ta]=x.useState([]),[aa,Je]=x.useState(!0),[na,st]=x.useState(null),[Da,Pt]=x.useState([]),[Ya,wt]=x.useState(!0),[Yt,Gt]=x.useState(null),[Rt,We]=x.useState("user");x.useEffect(()=>{(async()=>{try{Ae(!0),tt(null);const Be=localStorage.getItem("token");if(!Be){tt("No authentication token found"),Ae(!1);return}const Oe=await fetch("https://tickifywebsite.runasp.net/me/info",{method:"GET",headers:{Authorization:`Bearer ${Be}`,"Content-Type":"application/json"}});if(!Oe.ok){Oe.status===401?(tt("Authentication failed. Please login again."),localStorage.removeItem("token"),localStorage.removeItem("isLoggedIn")):tt(`Failed to fetch user data: ${Oe.status}`),Ae(!1);return}const pt=await Oe.json();ye(pt),localStorage.setItem("firstName",pt.firstName||""),localStorage.setItem("lastName",pt.lastName||""),localStorage.setItem("email",pt.email||"")}catch(Be){console.error("Error fetching user data:",Be),tt("Failed to fetch user data. Please try again.")}finally{Ae(!1)}})()},[]),x.useEffect(()=>{(async()=>{try{Je(!0),st(null);const Be=localStorage.getItem("token");if(!Be){st("No authentication token found"),Je(!1);return}const Oe=await fetch("https://tickifywebsite.runasp.net/me/my-reservations",{method:"GET",headers:{Authorization:`Bearer ${Be}`,"Content-Type":"application/json"}});if(!Oe.ok){Oe.status===401?st("Authentication failed. Please login again."):st(`Failed to fetch reservations: ${Oe.status}`),Je(!1);return}const pt=await Oe.json();ta(Array.isArray(pt)?pt:[])}catch{st("Failed to fetch reservations. Please try again.")}finally{Je(!1)}})()},[]),x.useEffect(()=>{(async()=>{try{wt(!0),Gt(null);const Be=localStorage.getItem("token");if(!Be){Gt("No authentication token found"),wt(!1);return}const Oe=await fetch("https://tickifywebsite.runasp.net/me/my-Hotel-reservations",{method:"GET",headers:{Authorization:`Bearer ${Be}`,"Content-Type":"application/json"}});if(!Oe.ok){Oe.status===401?Gt("Authentication failed. Please login again."):Gt(`Failed to fetch hotel reservations: ${Oe.status}`),wt(!1);return}const pt=await Oe.json();Pt(Array.isArray(pt)?pt:[])}catch{Gt("Failed to fetch hotel reservations. Please try again.")}finally{wt(!1)}})()},[]);const ht=(I==null?void 0:I.firstName)||localStorage.getItem("firstName")||"",Ue=(I==null?void 0:I.lastName)||localStorage.getItem("lastName")||"",Ga=(I==null?void 0:I.email)||localStorage.getItem("email")||"",Ma=localStorage.getItem("phone")||"",Fi=ht&&Ue?`${ht} ${Ue}`:localStorage.getItem("fullName")||"اسم المستخدم",[Va,ur]=x.useState(!1),[Na,Xa]=x.useState(Fi),[on,ho]=x.useState(Ga),[Ur,va]=x.useState(Ma),[$r,it]=x.useState(""),[sn,Mn]=x.useState(!1),[qr,Yr]=x.useState(!1),[Gr,cn]=x.useState(!1),Vr=[{key:"user",label:"Account"},{key:"settings",label:"Settings"},{key:"trips",label:"Reservations"}];return c.jsxs("div",{className:"dashboard-layout",children:[c.jsx("div",{className:"dashboard-tabs",children:Vr.map(St=>c.jsx("button",{className:`dashboard-tab${Rt===St.key?" active":""}`,onClick:()=>We(St.key),children:St.label},St.key))}),c.jsxs("main",{className:"dashboard-main",children:[Rt==="user"&&c.jsx(m6,{userData:I,loading:we,error:ve}),Rt==="settings"&&c.jsx(h6,{}),Rt==="trips"&&c.jsx(r4,{trips:mt,loading:aa,error:na,hotelReservations:Da,hotelReservationsLoading:Ya,hotelReservationsError:Yt,setHotelReservations:Pt})]})]})},Rv=x.createContext(),l4=()=>{const a=x.useContext(Rv);if(!a)throw new Error("useBooking must be used within a BookingProvider");return a},o4=({children:a})=>{const[i,l]=x.useState(null),g={activeFlight:i,hasActiveFlight:!!i,addFlightBooking:b=>{l(b)},clearFlightBooking:()=>{l(null)}};return c.jsx(Rv.Provider,{value:g,children:a})},s4=qa`
  @media (max-width: 768px) {
    body {
      padding: 0 !important;
    }
  }
`,k0=j.div`
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
`,tf=j.h2`
  color: #00233d;
  margin-bottom: 18px;
  text-align: center;
`,c4=j.div`
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
`,u4=j.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,d4=j.div`
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
`,z0=j.button`
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
`;const R0=j.div`
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
`,O0=j.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.08rem;
  color: #00233d;
  font-weight: bold;
  margin-bottom: 0.3rem;
  letter-spacing: 0.5px;
`,Ys=j.input`
  width: 90%;
  margin: 0.2rem 0 0.7rem 0;
  accent-color: #1976d2;
  height: 3px;
  border-radius: 2px;
  background: #e0e0e0;
  min-width: 60px;
`,D0=j.button`
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
`,f4=j.div`
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
`,M0=[{value:"all",labelAr:"جميع النتائج",labelEn:"All Results"},{value:"cheapest",labelAr:"الأقل سعراً",labelEn:"Lowest Price"},{value:"expensive",labelAr:"الأكثر سعراً",labelEn:"Highest Price"},{value:"shortest_duration",labelAr:"أقصر مدة رحلة",labelEn:"Shortest Duration"},{value:"longest_duration",labelAr:"أطول مدة رحلة",labelEn:"Longest Duration"}];j.button`
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
`;const m4=()=>{const{language:a}=pa(),{addFlightBooking:i}=l4(),l=$a(),s=Br(),[d,f]=x.useState(!1),[g,b]=x.useState("all"),[v,p]=x.useState(!1),[y,k]=x.useState(!1),E=l.state||{},{origin:D,destination:z,departureDate:N,cabinClass:B,results:O,noFlights:A,minPrice:q,maxPrice:W,showAllFlights:_}=E,[G,P]=x.useState(q??0),[ne,Z]=x.useState(W??5e3),[ee,le]=x.useState(O||[]),oe=50,be=5e3;x.useEffect(()=>{const T=()=>k(window.innerWidth<=768);return T(),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]);const xe=T=>{if(!T)return 0;const X=T.match(/(\d+)h/),F=T.match(/(\d+)m/),te=X?parseInt(X[1]):0,re=F?parseInt(F[1]):0;return te*60+re},he=T=>!T.classes||T.classes.length===0?1/0:Math.min(...T.classes.map(X=>X.price)),U=(T,X)=>{if(!T||X==="all")return T;const F=[...T];switch(X){case"cheapest":return F.sort((te,re)=>he(te)-he(re));case"expensive":return F.sort((te,re)=>he(re)-he(te));case"shortest_duration":return F.sort((te,re)=>{const ae=xe(te.durationFormatted),Se=xe(re.durationFormatted);return ae-Se});case"longest_duration":return F.sort((te,re)=>{const ae=xe(te.durationFormatted);return xe(re.durationFormatted)-ae});case"early_departure":return F.sort((te,re)=>new Date(te.departureDate)-new Date(re.departureDate));case"late_departure":return F.sort((te,re)=>new Date(re.departureDate)-new Date(te.departureDate));default:return F}};x.useEffect(()=>{if(O){const T=U(O,g);le(T)}},[g,O]);const J=T=>{const X=Math.min(Number(T.target.value),ne-oe);P(X)},ie=T=>{const X=Math.max(Number(T.target.value),G+oe);Z(X)},ce=()=>{if(!O)return;const T=O.filter(F=>Array.isArray(F.classes)&&F.classes.length>0?F.classes.some(te=>te.price>=G&&te.price<=ne):!1),X=U(T,g);le(X)},w=async(T,X)=>{if(!hf()){Qt.fire({icon:"warning",title:a==="ar"?"تسجيل الدخول مطلوب":"Login Required",text:a==="ar"?"يرجى تسجيل الدخول أولاً قبل الحجز.":"Please log in first before booking.",confirmButtonText:a==="ar"?"تسجيل الدخول":"Login"}).then(te=>{te.isConfirmed&&(window.location.href="/login")});return}if((await Qt.fire({icon:"question",title:a==="ar"?"تأكيد الحجز":"Confirm Reservation",text:a==="ar"?"هل أنت متأكد أنك تريد حجز هذه الرحلة؟":"Are you sure you want to book this flight?",showCancelButton:!0,confirmButtonText:a==="ar"?"نعم، احجز":"Yes, Book",cancelButtonText:a==="ar"?"إلغاء":"Cancel"})).isConfirmed){p(!0);try{const te=localStorage.getItem("token");if(!(await fetch(`https://tickifywebsite.runasp.net/api/${T}/${X}/FlightReservations/Reserve`,{method:"POST",headers:{"Content-Type":"application/json",...te?{Authorization:`Bearer ${te}`}:{}},body:JSON.stringify({flightId:T,classId:X})})).ok)throw new Error("Reservation failed");i({flightId:T,classId:X,from:D,to:z,departureDate:N,cabinClass:B}),await Qt.fire({icon:"success",title:a==="ar"?"تم الحجز بنجاح!":"Reservation successful!",text:a==="ar"?"يمكنك الآن حجز فندق في وجهتك!":"You can now book a hotel at your destination!",confirmButtonText:a==="ar"?"حسناً":"OK"})}catch{await Qt.fire({icon:"error",title:a==="ar"?"فشل الحجز!":"Reservation failed!",confirmButtonText:a==="ar"?"حسناً":"OK"})}finally{p(!1)}}};return O?A?c.jsxs(k0,{children:[c.jsx(tf,{children:a==="ar"?"لا توجد رحلات متاحة":"No Flights Available"}),c.jsx("div",{style:{color:"#c62828",fontSize:"1.2rem",textAlign:"center",marginTop:24},children:a==="ar"?"لا توجد رحلات متاحة بناءً على معايير البحث التي أدخلتها.":"There are no flights available for your search criteria."})]}):c.jsxs(c.Fragment,{children:[c.jsx(s4,{}),c.jsxs(f4,{children:[!y&&c.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:c.jsxs(R0,{children:[c.jsx("label",{style:{color:"#00233d",fontWeight:600,marginBottom:4,fontSize:"1.08rem",letterSpacing:"0.5px"},children:a==="ar"?"نطاق السعر":"Price Range"}),c.jsxs(O0,{children:[c.jsxs("span",{children:[a==="ar"?"الحد الأدنى":"Min",": ",G," $"]}),c.jsxs("span",{children:[a==="ar"?"الحد الأقصى":"Max",": ",ne," $"]})]}),c.jsxs("div",{style:{display:"flex",gap:10,width:"100%",alignItems:"center",justifyContent:"center",marginBottom:8},children:[c.jsx(Ys,{type:"range",min:0,max:be,value:G,onChange:J}),c.jsx(Ys,{type:"range",min:0,max:be,value:ne,onChange:ie})]}),c.jsx("div",{style:{color:"#666",fontSize:"0.97rem",marginTop:2},children:a==="ar"?"يجب أن يكون الفرق بين الحدين الأدنى والأقصى 50 دولارًا على الأقل.":"The minimum gap between min and max is $50."}),c.jsx(D0,{onClick:ce,children:a==="ar"?"بحث":"Search"})]})}),c.jsxs("div",{style:{flex:1},children:[y&&c.jsxs(R0,{style:{margin:"0 0 16px 0",width:"100%"},children:[c.jsx("label",{style:{color:"#00233d",fontWeight:600,marginBottom:4,fontSize:"1.08rem",letterSpacing:"0.5px"},children:a==="ar"?"نطاق السعر":"Price Range"}),c.jsxs(O0,{children:[c.jsxs("span",{children:[a==="ar"?"الحد الأدنى":"Min",": ",G," $"]}),c.jsxs("span",{children:[a==="ar"?"الحد الأقصى":"Max",": ",ne," $"]})]}),c.jsxs("div",{style:{display:"flex",gap:10,width:"100%",alignItems:"center",justifyContent:"center",marginBottom:8},children:[c.jsx(Ys,{type:"range",min:0,max:be,value:G,onChange:J}),c.jsx(Ys,{type:"range",min:0,max:be,value:ne,onChange:ie})]}),c.jsx("div",{style:{color:"#666",fontSize:"0.97rem",marginTop:2},children:a==="ar"?"يجب أن يكون الفرق بين الحدين الأدنى والأقصى 50 دولارًا على الأقل.":"The minimum gap between min and max is $50."}),c.jsx(D0,{onClick:ce,children:a==="ar"?"بحث":"Search"})]}),c.jsx(tf,{children:_?a==="ar"?"عرض جميع الرحلات المتاحة في النظام":"Showing all available flights in the system":a==="ar"?"الرحلات المتاحة":"Flight Search Results"}),c.jsx("div",{style:{width:"auto",display:"flex",justifyContent:"flex-end",marginBottom:"8px"},children:c.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",gap:8},children:[c.jsxs("button",{onClick:()=>f(T=>!T),style:{background:"#fff",border:"1px solid #ccc",borderRadius:8,padding:"7px 18px",fontWeight:"bold",cursor:"pointer",minWidth:120,display:"flex",alignItems:"center",gap:8},children:[M0.find(T=>T.value===g)[a==="ar"?"labelAr":"labelEn"],c.jsx("span",{style:{fontSize:"1.2em"},children:d?"▲":"▼"})]}),d&&c.jsx("div",{style:{position:"absolute",top:"110%",left:0,right:0,background:"#fff",border:"1px solid #ccc",borderRadius:8,zIndex:10,boxShadow:"0 2px 8px #eee",minWidth:150},children:M0.map(T=>c.jsx("div",{onClick:()=>{b(T.value),f(!1)},style:{padding:"10px 16px",cursor:"pointer",fontWeight:g===T.value?"bold":"normal",background:g===T.value?"#f5f7fa":"#fff",textAlign:a==="ar"?"right":"left"},children:a==="ar"?T.labelAr:T.labelEn},T.value))})]})}),c.jsxs(c4,{children:[c.jsx("span",{style:{marginRight:16},children:_?a==="ar"?"عرض جميع الرحلات المتاحة في النظام":"Showing all available flights in the system":a==="ar"?`من ${D||"-"} إلى ${z||"-"} | مغادرة: ${N||"-"} | درجة المقعد: ${B||"-"}`:`From ${D||"-"} to ${z||"-"} | Departure: ${N||"-"} | Cabin: ${B||"-"}`}),c.jsx(z0,{onClick:()=>s("/"),children:_?a==="ar"?"بحث جديد":"New Search":a==="ar"?"تعديل البحث":"Edit Search"})]}),c.jsx(u4,{children:ee.length===0?c.jsx("div",{children:a==="ar"?"لا توجد رحلات متاحة":"No flights available."}):ee.map(T=>c.jsxs(d4,{children:[c.jsxs("div",{style:{flex:1},children:[c.jsxs("div",{style:{fontWeight:"bold",color:"#1976d2",fontSize:"1.1em",marginBottom:"8px"},children:[T.departureAirportName," (",T.departureAirportCity,")",c.jsx("span",{style:{color:"#888",margin:"0 8px"},children:"→"}),T.arrivalAirportName," (",T.arrivalAirportCity,")"]}),c.jsxs("div",{style:{color:"#444",fontSize:"0.98em",marginBottom:"8px",display:"flex",flexWrap:"wrap",gap:"20px"},children:[c.jsxs("div",{children:[c.jsx("i",{className:"fas fa-calendar-alt"})," ",c.jsx("strong",{children:a==="ar"?"تاريخ المغادرة:":"Departure:"})," ",new Date(T.departureDate).toLocaleDateString()," ",new Date(T.departureDate).toLocaleTimeString()]}),c.jsxs("div",{children:[c.jsx("i",{className:"fas fa-calendar-check"})," ",c.jsx("strong",{children:a==="ar"?"تاريخ الوصول:":"Arrival:"})," ",new Date(T.arrivalDate).toLocaleDateString()," ",new Date(T.arrivalDate).toLocaleTimeString()]}),T.durationFormatted&&c.jsxs("div",{children:[c.jsx("i",{className:"fas fa-clock"})," ",c.jsx("strong",{children:a==="ar"?"مدة الرحلة:":"Duration:"})," ",T.durationFormatted]})]}),T.classes&&T.classes.length>0&&c.jsxs("div",{style:{background:"#f8f9fa",padding:"12px",borderRadius:"8px",marginTop:"8px"},children:[c.jsx("div",{style:{fontWeight:"bold",marginBottom:"8px",color:"#333"},children:a==="ar"?"فئات المقاعد المتاحة:":"Available Seat Classes:"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:T.classes.map(X=>c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"#fff",borderRadius:"6px",border:"1px solid #e0e0e0"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[c.jsxs("span",{style:{fontWeight:"bold",color:"#1976d2"},children:[c.jsx("i",{className:"fas fa-crown"})," ",X.className]}),c.jsxs("span",{style:{color:"#666"},children:[c.jsx("i",{className:"fas fa-money-bill-wave"})," ",X.price," $"]})]}),c.jsxs("div",{style:{color:"#666",fontSize:"0.9em"},children:[c.jsx("i",{className:"fas fa-chair"})," ",a==="ar"?"المقاعد:":"Seats:"," ",X.availableSeats," / ",X.capacity]})]},X.id))})]})]}),c.jsx(z0,{onClick:()=>{var X;return w(T.id,(X=T.classes[0])==null?void 0:X.id)},disabled:v,children:a==="ar"?"احجز الآن":"Book Now"})]},T.id))}),y&&c.jsx("div",{style:{marginTop:24}})]})]})]}):c.jsx(k0,{children:c.jsx(tf,{children:a==="ar"?"لا توجد نتائج بحث":"No search results found."})})},h4=j.div`
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
`,p4=j.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
`,g4=j.div`
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
`,x4=j.div`
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
`;const v4=j.div`
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
`,b4=j.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  @media (max-width: 900px) {
    font-size: 1.05rem;
  }
`,y4=j.p`
  color: #888;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  @media (max-width: 900px) {
    font-size: 0.95rem;
  }
`,w4=j.div`
  color: #f5b50a;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`,S4=j.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`,j4=j.button`
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
`,E4=qa`
  @media (max-width: 900px) {
    body {
    
      padding-top: 60px !important;
      padding-bottom:0px !important;
      padding-right:0px !important;
      padding-left:0px !important;

    }
  }
`,C4=()=>{const{language:a}=pa(),i=$a(),[l,s]=x.useState(!1),[d,f]=x.useState(""),[g,b]=x.useState(""),[v,p]=x.useState(!1),[y,k]=x.useState(!1),[E,D]=x.useState({}),[z,N]=x.useState(!1),[B,O]=x.useState(!0),[A,q]=x.useState(null),[W,_]=x.useState([]),[G,P]=x.useState([]),[ne,Z]=x.useState(!1),[ee,le]=x.useState(null),[oe,be]=x.useState(null),[xe,he]=x.useState(""),[U,J]=x.useState(null),[ie,ce]=x.useState(!1),w=new Date().toISOString().split("T")[0],T=[{id:0,type:"Single",price:100},{id:1,type:"Double",price:150},{id:2,type:"Twin",price:170},{id:3,type:"Suite",price:250},{id:4,type:"Deluxe",price:300},{id:5,type:"Family",price:350}],X=i.state&&i.state.reservationId,F=i.state&&i.state.destination?i.state.destination:"Egypt";x.useEffect(()=>{(async()=>{O(!0),q(null);try{const ye=localStorage.getItem("token");let we="";X?we=`https://tickifywebsite.runasp.net/api/Hotel/Search?FlightReservationId=${X}`:we=`https://tickifywebsite.runasp.net/api/Hotel/Search?Country=${encodeURIComponent(F)}`;const Ae=await fetch(we,{headers:{Authorization:ye?`Bearer ${ye}`:void 0}});if(!Ae.ok){let tt=a==="ar"?"فشل جلب بيانات الفنادق":"Failed to fetch hotels";try{const mt=await Ae.json();mt.code==="Empty Results."&&mt.description==="You Must Reserve a Flight To This Country First."?tt=a==="ar"?"يجب عليك حجز رحلة إلى هذا البلد أولاً قبل حجز فندق.":"You must reserve a flight to this country first before booking a hotel.":mt.description&&(tt=mt.description)}catch{}throw new Error(tt)}const ve=await Ae.json();_(Array.isArray(ve)?ve:[])}catch(ye){q(ye.message),_([])}finally{O(!1)}})()},[X,F,a]);const te=I=>{switch(I.toLowerCase()){case"single":return 0;case"double":return 1;case"twin":return 2;case"suite":return 3;case"deluxe":return 4;case"family":return 5;default:return""}},re=I=>{be(I.id),s(!0),f(""),b(""),p(!1)},ae=()=>{s(!1),N(!1),k(!1),p(!1)};return c.jsxs(c.Fragment,{children:[c.jsx(E4,{}),c.jsx("style",{children:`
    .main-content.hotel-results-margin-fix {
      margin-top: 0px !important;
    }
  `}),c.jsxs(h4,{as:"section",className:"hotel-results-margin-fix",children:[c.jsx(p4,{children:a==="ar"?"الفنادق المتاحة ":"Hotel Results"}),B?c.jsx("div",{style:{textAlign:"center",fontSize:"1.2rem",margin:"2rem 0"},children:a==="ar"?"جاري تحميل الفنادق...":"Loading hotels..."}):A?c.jsxs("div",{style:{color:"#c62828",background:"#fff0f0",border:"1px solid #f8bdbd",borderRadius:8,padding:"1.2rem 1rem",textAlign:"center",fontSize:"1.1rem",margin:"2rem 0",maxWidth:500,marginLeft:"auto",marginRight:"auto",fontWeight:500},children:[c.jsx("i",{className:"fas fa-exclamation-triangle",style:{marginRight:8}}),A]}):W.length===0?c.jsx("div",{style:{textAlign:"center",fontSize:"1.1rem",margin:"2rem 0",color:"#888"},children:a==="ar"?"لا توجد فنادق متاحة في هذه الوجهة.":"No hotels available for this destination."}):c.jsx(g4,{children:W.map(I=>c.jsx(x4,{children:c.jsxs(v4,{children:[c.jsx(b4,{children:a==="ar"&&I.name_ar||I.name}),c.jsxs(y4,{children:[c.jsx("i",{className:"fas fa-map-marker-alt",style:{color:"#0085d8",marginRight:a==="ar"?0:8,marginLeft:a==="ar"?8:0}}),a==="ar"&&I.location_ar||I.location]}),I.rating&&c.jsxs(w4,{children:[c.jsx("i",{className:"fas fa-star"})," ",I.rating]}),I.price&&c.jsx(S4,{children:a==="ar"?`ابتداءً من ${I.price}$ / ليلة`:`From $${I.price} / night`}),c.jsx(j4,{onClick:()=>re(I),children:a==="ar"?"احجز الآن":"Book Now"})]})},I.id||I.hotelId))}),l&&c.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.3)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:"32px 24px",minWidth:320,maxWidth:400,boxShadow:"0 4px 16px #0002",position:"relative"},children:[c.jsx("button",{onClick:ae,style:{position:"absolute",top:12,right:12,background:"none",border:"none",fontSize:22,cursor:"pointer",color:"#888"},children:"×"}),!v&&!y&&!z&&c.jsxs("form",{onSubmit:async I=>{if(I.preventDefault(),g<=d){D({checkOutDate:!0,checkInDate:!0,dateMsg:!0});return}D({}),Z(!0),le(null),P([]);const ye=te(xe);try{const we=localStorage.getItem("token"),Ae=`https://tickifywebsite.runasp.net/api/Hotels/${oe}/Rooms/select?checkInDate=${d}T22:06:15.774Z&checkOutDate=${g}T22:06:15.774Z&RoomType=${ye}&BedType&OpptionalBedType`,ve=await fetch(Ae,{headers:{Authorization:we?`Bearer ${we}`:void 0}});if(!ve.ok)throw new Error(a==="ar"?"فشل جلب الغرف المتاحة":"Failed to fetch available rooms");const tt=await ve.json();P(Array.isArray(tt)?tt:[])}catch(we){le(we.message)}finally{Z(!1),N(!0)}},style:{display:"flex",flexDirection:"column",gap:14,marginTop:8},children:[c.jsx("h3",{style:{textAlign:"center",marginBottom:8},children:a==="ar"?"بيانات الحجز":"Booking Details"}),c.jsxs("select",{value:xe,onChange:I=>he(I.target.value),style:{padding:"8px",borderRadius:6,border:"1px solid #ccc",marginBottom:8},required:!0,children:[c.jsx("option",{value:"",disabled:!0,children:a==="ar"?"نوع الغرفة":"Room Type"}),T.map(I=>c.jsx("option",{value:I.type,children:I.type},I.id))]}),c.jsx("label",{style:{fontWeight:500},children:a==="ar"?"تاريخ الوصول":"Check-in Date"}),c.jsx("input",{type:"date",value:d,onChange:I=>f(I.target.value),min:w,required:!0,style:{padding:"8px",borderRadius:6,border:E.checkInDate?"2px solid red":"1px solid #ccc",boxShadow:E.checkInDate?"0 0 0 2px #ff000055":void 0}}),c.jsx("label",{style:{fontWeight:500},children:a==="ar"?"تاريخ المغادرة":"Check-out Date"}),c.jsx("input",{type:"date",value:g,onChange:I=>b(I.target.value),min:w,required:!0,style:{padding:"8px",borderRadius:6,border:E.checkOutDate?"2px solid red":"1px solid #ccc",boxShadow:E.checkOutDate?"0 0 0 2px #ff000055":void 0}}),E.dateMsg&&c.jsx("div",{style:{color:"red",fontSize:13,marginTop:2},children:a==="ar"?"تاريخ المغادرة يجب أن يكون بعد تاريخ الوصول":"Check-out date must be after check-in date"}),c.jsx("button",{type:"submit",style:{marginTop:10,background:"#1976d2",color:"#fff",border:"none",borderRadius:6,padding:"10px 0",fontWeight:600,cursor:"pointer"},children:a==="ar"?"عرض النتائج":"Show Results"})]}),z&&c.jsxs("div",{style:{margin:"0 0 0 0",position:"relative"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12},children:[c.jsx("span",{style:{fontWeight:700,fontSize:18},children:a==="ar"?"الغرف المتاحة:":"Available Rooms:"}),c.jsxs("button",{style:{background:"none",color:"#1976d2",border:"none",fontWeight:700,fontSize:15,cursor:"pointer",padding:"6px 12px",borderRadius:6,transition:"background 0.2s",display:"flex",alignItems:"center",gap:6},onMouseOver:I=>I.currentTarget.style.background="#f0f4fa",onMouseOut:I=>I.currentTarget.style.background="none",onClick:()=>{N(!1)},children:[a==="ar"?c.jsx("span",{style:{fontSize:18,marginLeft:2},children:"◀"}):null,a==="ar"?"رجوع":"Back",a!=="ar"?c.jsx("span",{style:{fontSize:18,marginLeft:2},children:"⬅"}):null]})]}),ne?c.jsx("div",{style:{textAlign:"center",margin:"1.5rem 0",color:"#1976d2"},children:a==="ar"?"جاري تحميل الغرف...":"Loading rooms..."}):ee?c.jsx("div",{style:{textAlign:"center",margin:"1.5rem 0",color:"#c62828"},children:ee}):G.length===0?c.jsx("div",{style:{textAlign:"center",margin:"1.5rem 0",color:"#888"},children:a==="ar"?"لا توجد غرف متاحة لهذا البحث.":"No available rooms for this search."}):c.jsx("div",{style:{height:350,overflowY:"auto",paddingRight:8,display:"flex",flexDirection:"column",gap:16},children:G.map((I,ye)=>c.jsxs("label",{style:{background:"#f8f8f8",borderRadius:10,padding:"18px 20px",minWidth:220,boxShadow:"0 2px 8px #eee",border:"1px solid #ddd",marginBottom:4,display:"flex",alignItems:"flex-start",gap:12,cursor:"pointer"},children:[c.jsx("input",{type:"radio",name:"selectedRoom",checked:U===ye,onChange:()=>J(ye),style:{marginTop:4,accentColor:"#1976d2"}}),c.jsxs("div",{style:{flex:1},children:[c.jsxs("div",{style:{fontWeight:600,marginBottom:8},children:[a==="ar"?"نوع الغرفة:":"Room Type:"," ",I.roomType]}),c.jsxs("div",{style:{marginBottom:8},children:[a==="ar"?"السعر:":"Price:"," ",I.pricePerNight,"$"]}),c.jsxs("div",{children:[a==="ar"?"الأسرة:":"Beds:"," ",I.beds&&Array.isArray(I.beds)?I.beds.map(we=>`${we.count} ${we.type}`).join(a==="ar"?" و ":" & "):"-"]})]})]},I.id||ye))}),c.jsx("button",{style:{margin:"24px auto 0 auto",display:"block",background:"#1976d2",color:"#fff",border:"none",borderRadius:6,padding:"12px 40px",fontWeight:600,fontSize:18,cursor:U===null||ie?"not-allowed":"pointer",opacity:U===null||ie?.6:1},disabled:U===null||ie,onClick:async()=>{if(U===null||ie)return;ce(!0);const ye={Id:G[U].id,checkInDate:d+"T22:06:15.774Z",checkOutDate:g+"T22:09:15.774Z",flightReservationId:X};try{const we=localStorage.getItem("token"),Ae=await fetch("https://tickifywebsite.runasp.net/api/HotelReservation/Reserve",{method:"POST",headers:{"Content-Type":"application/json",Authorization:we?`Bearer ${we}`:void 0},body:JSON.stringify(ye)}),ve=await Ae.json();if(!Ae.ok){ve.code==="NotValidRoom"&&ve.description==="The room is already reserved at the same time."?await Qt.fire({icon:"error",title:a==="ar"?"الغرفة محجوزة بالفعل":"Room Already Reserved",text:a==="ar"?"هذه الغرفة محجوزة بالفعل في نفس الوقت.":"The room is already reserved at the same time.",confirmButtonText:a==="ar"?"حسناً":"OK"}):await Qt.fire({icon:"error",title:a==="ar"?"فشل الحجز":"Reservation Failed",text:ve.description||(a==="ar"?"حدث خطأ أثناء الحجز.":"An error occurred while booking."),confirmButtonText:a==="ar"?"حسناً":"OK"}),ce(!1);return}await Qt.fire({icon:"success",title:a==="ar"?"تم الحجز بنجاح!":"Booking successful!",html:`
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
                          `,confirmButtonText:a==="ar"?"حسناً":"OK"}),ae()}catch{await Qt.fire({icon:"error",title:a==="ar"?"فشل الحجز":"Reservation Failed",text:a==="ar"?"حدث خطأ أثناء الحجز.":"An error occurred while booking.",confirmButtonText:a==="ar"?"حسناً":"OK"})}finally{ce(!1)}},children:a==="ar"?"حجز":"Book"})]})]})})]})]})},A4=[{id:1,name:{ar:"تويوتا كورولا",en:"Toyota Corolla"},type:{ar:"اقتصادية",en:"Economic"},price:45,image:"/src/images/cars.jpg"},{id:2,name:{ar:"هوندا CR-V",en:"Honda CR-V"},type:{ar:"دفع رباعي",en:"4WD"},price:65,image:"/src/images/cars.jpg"},{id:3,name:{ar:"بي إم دبليو الفئة الخامسة",en:"BMW 5 Series"},type:{ar:"فاخرة",en:"Luxury"},price:95,image:"/src/images/cars.jpg"},{id:4,name:{ar:"هيونداي إلنترا",en:"Hyundai Elantra"},type:{ar:"اقتصادية",en:"Economic"},price:40,image:"/src/images/cars.jpg"},{id:5,name:{ar:"مرسيدس E-Class",en:"Mercedes E-Class"},type:{ar:"فاخرة",en:"Luxury"},price:120,image:"/src/images/cars.jpg"},{id:6,name:{ar:"كيا سبورتاج",en:"Kia Sportage"},type:{ar:"دفع رباعي",en:"4WD"},price:70,image:"/src/images/cars.jpg"}],T4=j.div`
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
`,k4=j.h2`
  text-align: center;
  color: #1976d2;
  margin-bottom: 32px;
`,z4=j.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,R4=j.div`
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px #eee;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,O4=j.img`
  width: 100%;
  max-width: 200px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`,D4=j.button`
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
`,M4=j.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.35);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,N4=j.div`
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
`,B4=j.button`
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
`,N0=j.label`
  font-weight: 600;
  color: #00233d;
  margin-bottom: 4px;
`,_4=j.button`
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
`,L4=qa`
  @media (max-width: 900px) {
    body {
      padding: 0 !important;
    }
  }
`,H4=()=>{const{language:a}=pa(),[i,l]=x.useState(null),[s,d]=x.useState({date:"",time:""}),f=new Date().toISOString().split("T")[0],g=y=>{l(y),d({date:"",time:""})},b=()=>{l(null)},v=(y,k)=>{d(E=>({...E,[y]:k}))},p=async y=>{y.preventDefault(),(await Qt.fire({icon:"question",title:a==="ar"?"تأكيد الحجز":"Confirm Booking",text:a==="ar"?"هل أنت متأكد أنك تريد حجز هذه السيارة؟":"Are you sure you want to book this car?",showCancelButton:!0,confirmButtonText:a==="ar"?"نعم، احجز":"Yes, Book",cancelButtonText:a==="ar"?"إلغاء":"Cancel",reverseButtons:a==="ar"})).isConfirmed&&(l(null),await Qt.fire({icon:"success",title:a==="ar"?"تم الحجز بنجاح!":"Booking successful!",confirmButtonText:a==="ar"?"حسناً":"OK"}))};return c.jsxs(c.Fragment,{children:[c.jsx(L4,{}),c.jsxs(T4,{children:[c.jsx(k4,{children:a==="ar"?"السيارات المتاحة":"Available Cars"}),c.jsx(z4,{children:A4.map(y=>c.jsxs(R4,{children:[c.jsx(O4,{src:y.image,alt:a==="ar"?y.name.ar:y.name.en}),c.jsx("h3",{style:{color:"#1976d2",marginBottom:8},children:a==="ar"?y.name.ar:y.name.en}),c.jsx("div",{style:{color:"#444",marginBottom:6},children:a==="ar"?y.type.ar:y.type.en}),c.jsxs("div",{style:{color:"#28a745",fontWeight:600,marginBottom:8},children:[y.price,"$ / ",a==="ar"?"يوم":"day"]}),c.jsx(D4,{onClick:()=>g(y),children:a==="ar"?"احجز الآن":"Book Now"})]},y.id))}),i&&c.jsx(M4,{onClick:b,children:c.jsxs(N4,{onClick:y=>y.stopPropagation(),children:[c.jsx(B4,{onClick:b,title:a==="ar"?"إغلاق":"Close",children:"×"}),c.jsx("h3",{style:{color:"#1976d2",textAlign:"center",marginBottom:8},children:a==="ar"?"حجز سيارة":"Car Booking"}),c.jsxs("div",{style:{textAlign:"center",marginBottom:8},children:[c.jsx("b",{children:a==="ar"?i.name.ar:i.name.en}),c.jsx("span",{style:{color:"#888",margin:"0 8px"},children:"|"}),c.jsx("span",{children:a==="ar"?i.type.ar:i.type.en})]}),c.jsxs("form",{onSubmit:p,style:{display:"flex",flexDirection:"column",gap:12},children:[c.jsx(N0,{children:a==="ar"?"تاريخ الوصول":"Arrival Date"}),c.jsx("input",{type:"date",min:f,value:s.date,onChange:y=>v("date",y.target.value),required:!0,style:{padding:"8px",borderRadius:6,border:"1px solid #ccc"}}),c.jsx(N0,{children:a==="ar"?"وقت الوصول":"Arrival Time"}),c.jsx("input",{type:"time",value:s.time,onChange:y=>v("time",y.target.value),required:!0,style:{padding:"10px",borderRadius:"8px",border:"1.5px solid #ccc",fontSize:"1rem",boxShadow:"0 1px 4px rgba(25, 118, 210, 0.07)",outline:"none",transition:"border 0.2s",marginBottom:"4px"},onFocus:y=>y.target.style.border="1.5px solid #1976d2",onBlur:y=>y.target.style.border="1.5px solid #ccc"}),c.jsx(_4,{type:"submit",children:a==="ar"?"تأكيد الحجز":"Confirm Booking"})]})]})})]})]})};function U4(){const a=$a(),i=a.pathname==="/login"||a.pathname==="/signup";return c.jsx(gw,{children:c.jsxs(x2,{children:[c.jsx(T5,{}),c.jsxs("div",{className:"app",children:[!i&&c.jsx(k2,{}),!i&&c.jsx(E5,{}),a.pathname==="/profile"?c.jsx(i4,{}):c.jsx("main",{className:`main-content ${a.pathname.includes("/hotels")?"hotels-page":""}`,"data-route":a.pathname==="/hotels/results"?"/hotels/results":void 0,children:c.jsxs(By,{children:[c.jsx(ka,{path:"/",element:c.jsx(US,{})}),c.jsx(ka,{path:"/flights",element:c.jsx(o6,{})}),c.jsx(ka,{path:"/available-cars",element:c.jsx(H4,{})}),c.jsx(ka,{path:"/login",element:c.jsx(t5,{})}),c.jsx(ka,{path:"/signup",element:c.jsx(p5,{})}),c.jsx(ka,{path:"/about",element:c.jsx(L5,{})}),c.jsx(ka,{path:"/cancellation",element:c.jsx(Y5,{})}),c.jsx(ka,{path:"/terms",element:c.jsx(Z5,{})}),c.jsx(ka,{path:"/help",element:c.jsx(f6,{})}),c.jsx(ka,{path:"/flights/results",element:c.jsx(m4,{})}),c.jsx(ka,{path:"/hotels/results",element:c.jsx(C4,{})})]})}),!i&&c.jsx(y5,{})]})]})})}function $4(){return c.jsx(iw,{children:c.jsx(o4,{children:c.jsx(U4,{})})})}V1.createRoot(document.getElementById("root")).render(c.jsx(x.StrictMode,{children:c.jsx($4,{})}));
