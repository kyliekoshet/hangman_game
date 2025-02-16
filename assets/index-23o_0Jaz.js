(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function $c(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var lh={exports:{}},ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function _y(){if(Pg)return ko;Pg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var Bg;function gy(){return Bg||(Bg=1,lh.exports=_y()),lh.exports}var Mt=gy(),ch={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function vy(){if(zg)return fe;zg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(U,nt,Et){this.props=U,this.context=nt,this.refs=w,this.updater=Et||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,nt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,nt,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=y.prototype;function z(U,nt,Et){this.props=U,this.context=nt,this.refs=w,this.updater=Et||M}var O=z.prototype=new g;O.constructor=z,E(O,y.prototype),O.isPureReactComponent=!0;var D=Array.isArray,F={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function B(U,nt,Et,At,W,pt){return Et=pt.ref,{$$typeof:r,type:U,key:nt,ref:Et!==void 0?Et:null,props:pt}}function G(U,nt){return B(U.type,nt,void 0,void 0,void 0,U.props)}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function T(U){var nt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Et){return nt[Et]})}var I=/\/+/g;function rt(U,nt){return typeof U=="object"&&U!==null&&U.key!=null?T(""+U.key):nt.toString(36)}function Q(){}function ct(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(Q,Q):(U.status="pending",U.then(function(nt){U.status==="pending"&&(U.status="fulfilled",U.value=nt)},function(nt){U.status==="pending"&&(U.status="rejected",U.reason=nt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ut(U,nt,Et,At,W){var pt=typeof U;(pt==="undefined"||pt==="boolean")&&(U=null);var vt=!1;if(U===null)vt=!0;else switch(pt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(U.$$typeof){case r:case t:vt=!0;break;case _:return vt=U._init,ut(vt(U._payload),nt,Et,At,W)}}if(vt)return W=W(U),vt=At===""?"."+rt(U,0):At,D(W)?(Et="",vt!=null&&(Et=vt.replace(I,"$&/")+"/"),ut(W,nt,Et,"",function(Yt){return Yt})):W!=null&&(A(W)&&(W=G(W,Et+(W.key==null||U&&U.key===W.key?"":(""+W.key).replace(I,"$&/")+"/")+vt)),nt.push(W)),1;vt=0;var bt=At===""?".":At+":";if(D(U))for(var Ct=0;Ct<U.length;Ct++)At=U[Ct],pt=bt+rt(At,Ct),vt+=ut(At,nt,Et,pt,W);else if(Ct=v(U),typeof Ct=="function")for(U=Ct.call(U),Ct=0;!(At=U.next()).done;)At=At.value,pt=bt+rt(At,Ct++),vt+=ut(At,nt,Et,pt,W);else if(pt==="object"){if(typeof U.then=="function")return ut(ct(U),nt,Et,At,W);throw nt=String(U),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return vt}function V(U,nt,Et){if(U==null)return U;var At=[],W=0;return ut(U,At,"","",function(pt){return nt.call(Et,pt,W++)}),At}function et(U){if(U._status===-1){var nt=U._result;nt=nt(),nt.then(function(Et){(U._status===0||U._status===-1)&&(U._status=1,U._result=Et)},function(Et){(U._status===0||U._status===-1)&&(U._status=2,U._result=Et)}),U._status===-1&&(U._status=0,U._result=nt)}if(U._status===1)return U._result.default;throw U._result}var k=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function St(){}return fe.Children={map:V,forEach:function(U,nt,Et){V(U,function(){nt.apply(this,arguments)},Et)},count:function(U){var nt=0;return V(U,function(){nt++}),nt},toArray:function(U){return V(U,function(nt){return nt})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},fe.Component=y,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=z,fe.StrictMode=s,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,fe.act=function(){throw Error("act(...) is not supported in production builds of React.")},fe.cache=function(U){return function(){return U.apply(null,arguments)}},fe.cloneElement=function(U,nt,Et){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var At=E({},U.props),W=U.key,pt=void 0;if(nt!=null)for(vt in nt.ref!==void 0&&(pt=void 0),nt.key!==void 0&&(W=""+nt.key),nt)!N.call(nt,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&nt.ref===void 0||(At[vt]=nt[vt]);var vt=arguments.length-2;if(vt===1)At.children=Et;else if(1<vt){for(var bt=Array(vt),Ct=0;Ct<vt;Ct++)bt[Ct]=arguments[Ct+2];At.children=bt}return B(U.type,W,void 0,void 0,pt,At)},fe.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},fe.createElement=function(U,nt,Et){var At,W={},pt=null;if(nt!=null)for(At in nt.key!==void 0&&(pt=""+nt.key),nt)N.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(W[At]=nt[At]);var vt=arguments.length-2;if(vt===1)W.children=Et;else if(1<vt){for(var bt=Array(vt),Ct=0;Ct<vt;Ct++)bt[Ct]=arguments[Ct+2];W.children=bt}if(U&&U.defaultProps)for(At in vt=U.defaultProps,vt)W[At]===void 0&&(W[At]=vt[At]);return B(U,pt,void 0,void 0,null,W)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(U){return{$$typeof:d,render:U}},fe.isValidElement=A,fe.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:et}},fe.memo=function(U,nt){return{$$typeof:p,type:U,compare:nt===void 0?null:nt}},fe.startTransition=function(U){var nt=F.T,Et={};F.T=Et;try{var At=U(),W=F.S;W!==null&&W(Et,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(St,k)}catch(pt){k(pt)}finally{F.T=nt}},fe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},fe.use=function(U){return F.H.use(U)},fe.useActionState=function(U,nt,Et){return F.H.useActionState(U,nt,Et)},fe.useCallback=function(U,nt){return F.H.useCallback(U,nt)},fe.useContext=function(U){return F.H.useContext(U)},fe.useDebugValue=function(){},fe.useDeferredValue=function(U,nt){return F.H.useDeferredValue(U,nt)},fe.useEffect=function(U,nt){return F.H.useEffect(U,nt)},fe.useId=function(){return F.H.useId()},fe.useImperativeHandle=function(U,nt,Et){return F.H.useImperativeHandle(U,nt,Et)},fe.useInsertionEffect=function(U,nt){return F.H.useInsertionEffect(U,nt)},fe.useLayoutEffect=function(U,nt){return F.H.useLayoutEffect(U,nt)},fe.useMemo=function(U,nt){return F.H.useMemo(U,nt)},fe.useOptimistic=function(U,nt){return F.H.useOptimistic(U,nt)},fe.useReducer=function(U,nt,Et){return F.H.useReducer(U,nt,Et)},fe.useRef=function(U){return F.H.useRef(U)},fe.useState=function(U){return F.H.useState(U)},fe.useSyncExternalStore=function(U,nt,Et){return F.H.useSyncExternalStore(U,nt,Et)},fe.useTransition=function(){return F.H.useTransition()},fe.version="19.0.0",fe}var Fg;function jd(){return Fg||(Fg=1,ch.exports=vy()),ch.exports}var lt=jd();const Rs=$c(lt);var uh={exports:{}},Xo={},fh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function xy(){return Ig||(Ig=1,function(r){function t(V,et){var k=V.length;V.push(et);t:for(;0<k;){var St=k-1>>>1,U=V[St];if(0<l(U,et))V[St]=et,V[k]=U,k=St;else break t}}function i(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var et=V[0],k=V.pop();if(k!==et){V[0]=k;t:for(var St=0,U=V.length,nt=U>>>1;St<nt;){var Et=2*(St+1)-1,At=V[Et],W=Et+1,pt=V[W];if(0>l(At,k))W<U&&0>l(pt,At)?(V[St]=pt,V[W]=k,St=W):(V[St]=At,V[Et]=k,St=Et);else if(W<U&&0>l(pt,k))V[St]=pt,V[W]=k,St=W;else break t}}return et}function l(V,et){var k=V.sortIndex-et.sortIndex;return k!==0?k:V.id-et.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,x=null,v=3,M=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function O(V){for(var et=i(p);et!==null;){if(et.callback===null)s(p);else if(et.startTime<=V)s(p),et.sortIndex=et.expirationTime,t(m,et);else break;et=i(p)}}function D(V){if(w=!1,O(V),!E)if(i(m)!==null)E=!0,ct();else{var et=i(p);et!==null&&ut(D,et.startTime-V)}}var F=!1,N=-1,B=5,G=-1;function A(){return!(r.unstable_now()-G<B)}function T(){if(F){var V=r.unstable_now();G=V;var et=!0;try{t:{E=!1,w&&(w=!1,g(N),N=-1),M=!0;var k=v;try{e:{for(O(V),x=i(m);x!==null&&!(x.expirationTime>V&&A());){var St=x.callback;if(typeof St=="function"){x.callback=null,v=x.priorityLevel;var U=St(x.expirationTime<=V);if(V=r.unstable_now(),typeof U=="function"){x.callback=U,O(V),et=!0;break e}x===i(m)&&s(m),O(V)}else s(m);x=i(m)}if(x!==null)et=!0;else{var nt=i(p);nt!==null&&ut(D,nt.startTime-V),et=!1}}break t}finally{x=null,v=k,M=!1}et=void 0}}finally{et?I():F=!1}}}var I;if(typeof z=="function")I=function(){z(T)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,Q=rt.port2;rt.port1.onmessage=T,I=function(){Q.postMessage(null)}}else I=function(){y(T,0)};function ct(){F||(F=!0,I())}function ut(V,et){N=y(function(){V(r.unstable_now())},et)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,ct())},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return i(m)},r.unstable_next=function(V){switch(v){case 1:case 2:case 3:var et=3;break;default:et=v}var k=v;v=et;try{return V()}finally{v=k}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,et){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var k=v;v=V;try{return et()}finally{v=k}},r.unstable_scheduleCallback=function(V,et,k){var St=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?St+k:St):k=St,V){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=k+U,V={id:_++,callback:et,priorityLevel:V,startTime:k,expirationTime:U,sortIndex:-1},k>St?(V.sortIndex=k,t(p,V),i(m)===null&&V===i(p)&&(w?(g(N),N=-1):w=!0,ut(D,k-St))):(V.sortIndex=U,t(m,V),E||M||(E=!0,ct())),V},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(V){var et=v;return function(){var k=v;v=et;try{return V.apply(this,arguments)}finally{v=k}}}}(hh)),hh}var Hg;function Sy(){return Hg||(Hg=1,fh.exports=xy()),fh.exports}var dh={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function yy(){if(Gg)return Rn;Gg=1;var r=jd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Rn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.0.0",Rn}var Vg;function s0(){if(Vg)return dh.exports;Vg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),dh.exports=yy(),dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function My(){if(kg)return Xo;kg=1;var r=Sy(),t=jd(),i=s0();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),M=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function N(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var B=Symbol.for("react.client.reference");function G(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===B?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case d:return"Portal";case _:return"Profiler";case p:return"StrictMode";case w:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case v:return(e._context.displayName||"Context")+".Consumer";case E:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case g:return n=e.displayName||null,n!==null?n:G(e.type)||"Memo";case z:n=e._payload,e=e._init;try{return G(e(n))}catch{}}return null}var A=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=Object.assign,I,rt;function Q(e){if(I===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||"",rt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+I+e+rt}var ct=!1;function ut(e,n){if(!e||ct)return"";ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ht){var st=ht}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ht){st=ht}e.call(xt.prototype)}}else{try{throw Error()}catch(ht){st=ht}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ht){if(ht&&st&&typeof ht.stack=="string")return[ht.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],R=h[1];if(S&&R){var P=S.split(`
`),q=R.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<q.length&&!q[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===q.length)for(o=P.length-1,u=q.length-1;1<=o&&0<=u&&P[o]!==q[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==q[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==q[u]){var dt=`
`+P[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{ct=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Q(a):""}function V(e){switch(e.tag){case 26:case 27:case 5:return Q(e.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 15:return e=ut(e.type,!1),e;case 11:return e=ut(e.type.render,!1),e;case 1:return e=ut(e.type,!0),e;default:return""}}function et(e){try{var n="";do n+=V(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function k(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function St(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function U(e){if(k(e)!==e)throw Error(s(188))}function nt(e){var n=e.alternate;if(!n){if(n=k(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return U(u),e;if(h===o)return U(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=h;break}if(R===o){S=!0,o=u,a=h;break}R=R.sibling}if(!S){for(R=h.child;R;){if(R===a){S=!0,a=h,o=u;break}if(R===o){S=!0,o=h,a=u;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function Et(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Et(e),n!==null)return n;e=e.sibling}return null}var At=Array.isArray,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},vt=[],bt=-1;function Ct(e){return{current:e}}function Yt(e){0>bt||(e.current=vt[bt],vt[bt]=null,bt--)}function Ut(e,n){bt++,vt[bt]=e.current,e.current=n}var _e=Ct(null),xe=Ct(null),te=Ct(null),H=Ct(null);function ce(e,n){switch(Ut(te,n),Ut(xe,e),Ut(_e,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?ug(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=ug(e),n=fg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Yt(_e),Ut(_e,n)}function ae(){Yt(_e),Yt(xe),Yt(te)}function re(e){e.memoizedState!==null&&Ut(H,e);var n=_e.current,a=fg(n,e.type);n!==a&&(Ut(xe,e),Ut(_e,a))}function kt(e){xe.current===e&&(Yt(_e),Yt(xe)),H.current===e&&(Yt(H),Fo._currentValue=pt)}var Le=Object.prototype.hasOwnProperty,Xt=r.unstable_scheduleCallback,L=r.unstable_cancelCallback,b=r.unstable_shouldYield,it=r.unstable_requestPaint,mt=r.unstable_now,yt=r.unstable_getCurrentPriorityLevel,ot=r.unstable_ImmediatePriority,Ft=r.unstable_UserBlockingPriority,Dt=r.unstable_NormalPriority,It=r.unstable_LowPriority,Se=r.unstable_IdlePriority,Rt=r.log,Ht=r.unstable_setDisableYieldValue,Zt=null,Wt=null;function Gt(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Zt,e,void 0,(e.current.flags&128)===128)}catch{}}function le(e){if(typeof Rt=="function"&&Ht(e),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(Zt,e)}catch{}}var Qt=Math.clz32?Math.clz32:Pt,Ne=Math.log,Y=Math.LN2;function Pt(e){return e>>>=0,e===0?32:31-(Ne(e)/Y|0)|0}var ft=128,gt=4194304;function Lt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nt(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,u=e.suspendedLanes,h=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var R=a&134217727;return R!==0?(a=R&~u,a!==0?o=Lt(a):(h&=R,h!==0?o=Lt(h):e||(S=R&~S,S!==0&&(o=Lt(S))))):(R=a&~u,R!==0?o=Lt(R):h!==0?o=Lt(h):e||(S=a&~S,S!==0&&(o=Lt(S)))),o===0?0:n!==0&&n!==o&&!(n&u)&&(u=o&-o,S=n&-n,u>=S||u===32&&(S&4194176)!==0)?n:o}function ee(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Xe(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rn(){var e=ft;return ft<<=1,!(ft&4194176)&&(ft=128),e}function Re(){var e=gt;return gt<<=1,!(gt&62914560)&&(gt=4194304),e}function Ln(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function cl(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,P=e.expirationTimes,q=e.hiddenUpdates;for(a=S&~a;0<a;){var dt=31-Qt(a),xt=1<<dt;R[dt]=0,P[dt]=-1;var st=q[dt];if(st!==null)for(q[dt]=null,dt=0;dt<st.length;dt++){var ht=st[dt];ht!==null&&(ht.lane&=-536870913)}a&=~xt}o!==0&&jr(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function jr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Qt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function bi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Qt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ps(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Zr(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:wg(e.type))}function ul(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var Yn=Math.random().toString(36).slice(2),on="__reactFiber$"+Yn,ln="__reactProps$"+Yn,zi="__reactContainer$"+Yn,Bs="__reactEvents$"+Yn,su="__reactListeners$"+Yn,ru="__reactHandles$"+Yn,fl="__reactResources$"+Yn,Za="__reactMarker$"+Yn;function Kr(e){delete e[on],delete e[ln],delete e[Bs],delete e[su],delete e[ru]}function Fi(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=pg(e);e!==null;){if(a=e[on])return a;e=pg(e)}return n}e=a,a=e.parentNode}return null}function C(e){if(e=e[on]||e[zi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function j(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function at(e){var n=e[fl];return n||(n=e[fl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function J(e){e[Za]=!0}var Z=new Set,Tt={};function wt(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(Tt[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Kt={};function ye(e){return Le.call(Kt,e)?!0:Le.call(ie,e)?!1:ne.test(e)?Kt[e]=!0:(ie[e]=!0,!1)}function Me(e,n,a){if(ye(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ke(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ce(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cn(e){var n=Jt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ee(e){e._valueTracker||(e._valueTracker=cn(e))}function In(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Jt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var On=/[\n"\\]/g;function _n(e){return e.replace(On,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oe(e,n,a,o,u,h,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+se(n)):e.value!==""+se(n)&&(e.value=""+se(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?bn(e,S,se(n)):a!=null?bn(e,S,se(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+se(R):e.removeAttribute("name")}function Pn(e,n,a,o,u,h,S,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+se(a):"",n=n!=null?""+se(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function bn(e,n,a){n==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ye(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+se(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+se(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+se(a):""}function zs(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(At(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=se(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var dx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||dx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function xp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&vp(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&vp(e,h,n[h])}function ou(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var px=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(e){return mx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var lu=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,Is=null;function Sp(e){var n=C(e);if(n&&(e=n.stateNode)){var a=e[ln]||null;t:switch(e=n.stateNode,n.type){case"input":if(Oe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[ln]||null;if(!u)throw Error(s(90));Oe(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&In(o)}break t;case"textarea":yn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ye(e,!!a.multiple,n,!1)}}}var uu=!1;function yp(e,n,a){if(uu)return e(n,a);uu=!0;try{var o=e(n);return o}finally{if(uu=!1,(Fs!==null||Is!==null)&&(Zl(),Fs&&(n=Fs,e=Is,Is=Fs=null,Sp(n),e)))for(n=0;n<e.length;n++)Sp(e[n])}}function Qr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[ln]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var fu=!1;if(Bt)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){fu=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{fu=!1}var ma=null,hu=null,dl=null;function Mp(){if(dl)return dl;var e,n=hu,a=n.length,o,u="value"in ma?ma.value:ma.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return dl=u.slice(e,1<o?1-o:void 0)}function pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function Ep(){return!1}function Gn(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ml:Ep,this.isPropagationStopped=Ep,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Gn(Ka),$r=T({},Ka,{view:0,detail:0}),_x=Gn($r),du,pu,to,gl=T({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(du=e.screenX-to.screenX,pu=e.screenY-to.screenY):pu=du=0,to=e),du)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),Tp=Gn(gl),gx=T({},gl,{dataTransfer:0}),vx=Gn(gx),xx=T({},$r,{relatedTarget:0}),mu=Gn(xx),Sx=T({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),yx=Gn(Sx),Mx=T({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ex=Gn(Mx),Tx=T({},Ka,{data:0}),bp=Gn(Tx),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Rx[e])?!!n[e]:!1}function _u(){return Cx}var wx=T({},$r,{key:function(e){if(e.key){var n=bx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dx=Gn(wx),Ux=T({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ap=Gn(Ux),Lx=T({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),Nx=Gn(Lx),Ox=T({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Px=Gn(Ox),Bx=T({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=Gn(Bx),Fx=T({},Ka,{newState:0,oldState:0}),Ix=Gn(Fx),Hx=[9,13,27,32],gu=Bt&&"CompositionEvent"in window,eo=null;Bt&&"documentMode"in document&&(eo=document.documentMode);var Gx=Bt&&"TextEvent"in window&&!eo,Rp=Bt&&(!gu||eo&&8<eo&&11>=eo),Cp=" ",wp=!1;function Dp(e,n){switch(e){case"keyup":return Hx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hs=!1;function Vx(e,n){switch(e){case"compositionend":return Up(n);case"keypress":return n.which!==32?null:(wp=!0,Cp);case"textInput":return e=n.data,e===Cp&&wp?null:e;default:return null}}function kx(e,n){if(Hs)return e==="compositionend"||!gu&&Dp(e,n)?(e=Mp(),dl=hu=ma=null,Hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rp&&n.locale!=="ko"?null:n.data;default:return null}}var Xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xx[e.type]:n==="textarea"}function Np(e,n,a,o){Fs?Is?Is.push(o):Is=[o]:Fs=o,n=tc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var no=null,io=null;function Wx(e){sg(e,0)}function vl(e){var n=j(e);if(In(n))return e}function Op(e,n){if(e==="change")return n}var Pp=!1;if(Bt){var vu;if(Bt){var xu="oninput"in document;if(!xu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),xu=typeof Bp.oninput=="function"}vu=xu}else vu=!1;Pp=vu&&(!document.documentMode||9<document.documentMode)}function zp(){no&&(no.detachEvent("onpropertychange",Fp),io=no=null)}function Fp(e){if(e.propertyName==="value"&&vl(io)){var n=[];Np(n,io,e,cu(e)),yp(Wx,n)}}function qx(e,n,a){e==="focusin"?(zp(),no=n,io=a,no.attachEvent("onpropertychange",Fp)):e==="focusout"&&zp()}function Yx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(io)}function jx(e,n){if(e==="click")return vl(n)}function Zx(e,n){if(e==="input"||e==="change")return vl(n)}function Kx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:Kx;function ao(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Le.call(n,u)||!jn(e[u],n[u]))return!1}return!0}function Ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hp(e,n){var a=Ip(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ip(a)}}function Gp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=pi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=pi(e.document)}return n}function Su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Qx(e,n){var a=Vp(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&Gp(n.ownerDocument.documentElement,n)){if(o!==null&&Su(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var u=n.textContent.length,h=Math.min(o.start,u);o=o.end===void 0?h:Math.min(o.end,u),!a.extend&&h>o&&(u=o,o=h,h=u),u=Hp(n,h);var S=Hp(n,o);u&&S&&(a.rangeCount!==1||a.anchorNode!==u.node||a.anchorOffset!==u.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(u.node,u.offset),a.removeAllRanges(),h>o?(a.addRange(e),a.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var Jx=Bt&&"documentMode"in document&&11>=document.documentMode,Gs=null,yu=null,so=null,Mu=!1;function kp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Gs==null||Gs!==pi(o)||(o=Gs,"selectionStart"in o&&Su(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ao(so,o)||(so=o,o=tc(yu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Gs)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Vs={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},Eu={},Xp={};Bt&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function Ja(e){if(Eu[e])return Eu[e];if(!Vs[e])return e;var n=Vs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xp)return Eu[e]=n[a];return e}var Wp=Ja("animationend"),qp=Ja("animationiteration"),Yp=Ja("animationstart"),$x=Ja("transitionrun"),tS=Ja("transitionstart"),eS=Ja("transitioncancel"),jp=Ja("transitionend"),Zp=new Map,Kp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function mi(e,n){Zp.set(e,n),wt(n,[e])}var ei=[],ks=0,Tu=0;function xl(){for(var e=ks,n=Tu=ks=0;n<e;){var a=ei[n];ei[n++]=null;var o=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var h=ei[n];if(ei[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&Qp(a,u,h)}}function Sl(e,n,a,o){ei[ks++]=e,ei[ks++]=n,ei[ks++]=a,ei[ks++]=o,Tu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function bu(e,n,a,o){return Sl(e,n,a,o),yl(e)}function _a(e,n){return Sl(e,null,null,n),yl(e)}function Qp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;u&&n!==null&&e.tag===3&&(h=e.stateNode,u=31-Qt(a),h=h.hiddenUpdates,e=h[u],e===null?h[u]=[n]:e.push(n),n.lane=a|536870912)}function yl(e){if(50<Uo)throw Uo=0,Lf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xs={},Jp=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=Jp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:et(n)},Jp.set(e,n),n)}return{value:e,source:n,stack:et(n)}}var Ws=[],qs=0,Ml=null,El=0,ii=[],ai=0,$a=null,Ii=1,Hi="";function ts(e,n){Ws[qs++]=El,Ws[qs++]=Ml,Ml=e,El=n}function $p(e,n,a){ii[ai++]=Ii,ii[ai++]=Hi,ii[ai++]=$a,$a=e;var o=Ii;e=Hi;var u=32-Qt(o)-1;o&=~(1<<u),a+=1;var h=32-Qt(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ii=1<<32-Qt(n)+u|a<<u|o,Hi=h+e}else Ii=1<<h|a<<u|o,Hi=e}function Au(e){e.return!==null&&(ts(e,1),$p(e,1,0))}function Ru(e){for(;e===Ml;)Ml=Ws[--qs],Ws[qs]=null,El=Ws[--qs],Ws[qs]=null;for(;e===$a;)$a=ii[--ai],ii[ai]=null,Hi=ii[--ai],ii[ai]=null,Ii=ii[--ai],ii[ai]=null}var Bn=null,Mn=null,we=!1,_i=null,Ai=!1,Cu=Error(s(519));function es(e){var n=Error(s(418,""));throw lo(ni(n,e)),Cu}function tm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[ln]=o,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)Te(No[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ee(n);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),zs(n,o.value,o.defaultValue,o.children),Ee(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||cg(n.textContent,a)?(o.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),o.onScroll!=null&&Te("scroll",n),o.onScrollEnd!=null&&Te("scrollend",n),o.onClick!=null&&(n.onclick=ec),n=!0):n=!1,n||es(e)}function em(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 3:case 27:Ai=!0;return;case 5:case 13:Ai=!1;return;default:Bn=Bn.return}}function ro(e){if(e!==Bn)return!1;if(!we)return em(e),we=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&Mn&&es(e),em(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Mn=vi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Mn=null}}else Mn=Bn?vi(e.stateNode.nextSibling):null;return!0}function oo(){Mn=Bn=null,we=!1}function lo(e){_i===null?_i=[e]:_i.push(e)}var co=Error(s(460)),nm=Error(s(474)),wu={then:function(){}};function im(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tl(){}function am(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Tl,Tl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===co?Error(s(483)):e;default:if(typeof n.status=="string")n.then(Tl,Tl);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===co?Error(s(483)):e}throw uo=n,co}}var uo=null;function sm(){if(uo===null)throw Error(s(459));var e=uo;return uo=null,e}var Ys=null,fo=0;function bl(e){var n=fo;return fo+=1,Ys===null&&(Ys=[]),am(Ys,e,n)}function ho(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===c?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function rm(e){var n=e._init;return n(e._payload)}function om(e){function n(K,X){if(e){var $=K.deletions;$===null?(K.deletions=[X],K.flags|=16):$.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=Ca(K,X),K.index=0,K.sibling=null,K}function h(K,X,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<X?(K.flags|=33554434,X):$):(K.flags|=33554434,X)):(K.flags|=1048576,X)}function S(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function R(K,X,$,_t){return X===null||X.tag!==6?(X=Tf($,K.mode,_t),X.return=K,X):(X=u(X,$),X.return=K,X)}function P(K,X,$,_t){var Vt=$.type;return Vt===m?dt(K,X,$.props.children,_t,$.key):X!==null&&(X.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===z&&rm(Vt)===X.type)?(X=u(X,$.props),ho(X,$),X.return=K,X):(X=Xl($.type,$.key,$.props,null,K.mode,_t),ho(X,$),X.return=K,X)}function q(K,X,$,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=bf($,K.mode,_t),X.return=K,X):(X=u(X,$.children||[]),X.return=K,X)}function dt(K,X,$,_t,Vt){return X===null||X.tag!==7?(X=fs($,K.mode,_t,Vt),X.return=K,X):(X=u(X,$),X.return=K,X)}function xt(K,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Tf(""+X,K.mode,$),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case f:return $=Xl(X.type,X.key,X.props,null,K.mode,$),ho($,X),$.return=K,$;case d:return X=bf(X,K.mode,$),X.return=K,X;case z:var _t=X._init;return X=_t(X._payload),xt(K,X,$)}if(At(X)||N(X))return X=fs(X,K.mode,$,null),X.return=K,X;if(typeof X.then=="function")return xt(K,bl(X),$);if(X.$$typeof===M)return xt(K,Gl(K,X),$);Al(K,X)}return null}function st(K,X,$,_t){var Vt=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Vt!==null?null:R(K,X,""+$,_t);if(typeof $=="object"&&$!==null){switch($.$$typeof){case f:return $.key===Vt?P(K,X,$,_t):null;case d:return $.key===Vt?q(K,X,$,_t):null;case z:return Vt=$._init,$=Vt($._payload),st(K,X,$,_t)}if(At($)||N($))return Vt!==null?null:dt(K,X,$,_t,null);if(typeof $.then=="function")return st(K,X,bl($),_t);if($.$$typeof===M)return st(K,X,Gl(K,$),_t);Al(K,$)}return null}function ht(K,X,$,_t,Vt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get($)||null,R(X,K,""+_t,Vt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case f:return K=K.get(_t.key===null?$:_t.key)||null,P(X,K,_t,Vt);case d:return K=K.get(_t.key===null?$:_t.key)||null,q(X,K,_t,Vt);case z:var me=_t._init;return _t=me(_t._payload),ht(K,X,$,_t,Vt)}if(At(_t)||N(_t))return K=K.get($)||null,dt(X,K,_t,Vt,null);if(typeof _t.then=="function")return ht(K,X,$,bl(_t),Vt);if(_t.$$typeof===M)return ht(K,X,$,Gl(X,_t),Vt);Al(X,_t)}return null}function qt(K,X,$,_t){for(var Vt=null,me=null,jt=X,$t=X=0,xn=null;jt!==null&&$t<$.length;$t++){jt.index>$t?(xn=jt,jt=null):xn=jt.sibling;var De=st(K,jt,$[$t],_t);if(De===null){jt===null&&(jt=xn);break}e&&jt&&De.alternate===null&&n(K,jt),X=h(De,X,$t),me===null?Vt=De:me.sibling=De,me=De,jt=xn}if($t===$.length)return a(K,jt),we&&ts(K,$t),Vt;if(jt===null){for(;$t<$.length;$t++)jt=xt(K,$[$t],_t),jt!==null&&(X=h(jt,X,$t),me===null?Vt=jt:me.sibling=jt,me=jt);return we&&ts(K,$t),Vt}for(jt=o(jt);$t<$.length;$t++)xn=ht(jt,K,$t,$[$t],_t),xn!==null&&(e&&xn.alternate!==null&&jt.delete(xn.key===null?$t:xn.key),X=h(xn,X,$t),me===null?Vt=xn:me.sibling=xn,me=xn);return e&&jt.forEach(function(Pa){return n(K,Pa)}),we&&ts(K,$t),Vt}function oe(K,X,$,_t){if($==null)throw Error(s(151));for(var Vt=null,me=null,jt=X,$t=X=0,xn=null,De=$.next();jt!==null&&!De.done;$t++,De=$.next()){jt.index>$t?(xn=jt,jt=null):xn=jt.sibling;var Pa=st(K,jt,De.value,_t);if(Pa===null){jt===null&&(jt=xn);break}e&&jt&&Pa.alternate===null&&n(K,jt),X=h(Pa,X,$t),me===null?Vt=Pa:me.sibling=Pa,me=Pa,jt=xn}if(De.done)return a(K,jt),we&&ts(K,$t),Vt;if(jt===null){for(;!De.done;$t++,De=$.next())De=xt(K,De.value,_t),De!==null&&(X=h(De,X,$t),me===null?Vt=De:me.sibling=De,me=De);return we&&ts(K,$t),Vt}for(jt=o(jt);!De.done;$t++,De=$.next())De=ht(jt,K,$t,De.value,_t),De!==null&&(e&&De.alternate!==null&&jt.delete(De.key===null?$t:De.key),X=h(De,X,$t),me===null?Vt=De:me.sibling=De,me=De);return e&&jt.forEach(function(my){return n(K,my)}),we&&ts(K,$t),Vt}function Ke(K,X,$,_t){if(typeof $=="object"&&$!==null&&$.type===m&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case f:t:{for(var Vt=$.key;X!==null;){if(X.key===Vt){if(Vt=$.type,Vt===m){if(X.tag===7){a(K,X.sibling),_t=u(X,$.props.children),_t.return=K,K=_t;break t}}else if(X.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===z&&rm(Vt)===X.type){a(K,X.sibling),_t=u(X,$.props),ho(_t,$),_t.return=K,K=_t;break t}a(K,X);break}else n(K,X);X=X.sibling}$.type===m?(_t=fs($.props.children,K.mode,_t,$.key),_t.return=K,K=_t):(_t=Xl($.type,$.key,$.props,null,K.mode,_t),ho(_t,$),_t.return=K,K=_t)}return S(K);case d:t:{for(Vt=$.key;X!==null;){if(X.key===Vt)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(K,X.sibling),_t=u(X,$.children||[]),_t.return=K,K=_t;break t}else{a(K,X);break}else n(K,X);X=X.sibling}_t=bf($,K.mode,_t),_t.return=K,K=_t}return S(K);case z:return Vt=$._init,$=Vt($._payload),Ke(K,X,$,_t)}if(At($))return qt(K,X,$,_t);if(N($)){if(Vt=N($),typeof Vt!="function")throw Error(s(150));return $=Vt.call($),oe(K,X,$,_t)}if(typeof $.then=="function")return Ke(K,X,bl($),_t);if($.$$typeof===M)return Ke(K,X,Gl(K,$),_t);Al(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(K,X.sibling),_t=u(X,$),_t.return=K,K=_t):(a(K,X),_t=Tf($,K.mode,_t),_t.return=K,K=_t),S(K)):a(K,X)}return function(K,X,$,_t){try{fo=0;var Vt=Ke(K,X,$,_t);return Ys=null,Vt}catch(jt){if(jt===co)throw jt;var me=li(29,jt,null,K.mode);return me.lanes=_t,me.return=K,me}finally{}}}var ns=om(!0),lm=om(!1),js=Ct(null),Rl=Ct(0);function cm(e,n){e=Qi,Ut(Rl,e),Ut(js,n),Qi=e|n.baseLanes}function Du(){Ut(Rl,Qi),Ut(js,js.current)}function Uu(){Qi=Rl.current,Yt(js),Yt(Rl)}var si=Ct(null),Ri=null;function ga(e){var n=e.alternate;Ut(un,un.current&1),Ut(si,e),Ri===null&&(n===null||js.current!==null||n.memoizedState!==null)&&(Ri=e)}function um(e){if(e.tag===22){if(Ut(un,un.current),Ut(si,e),Ri===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ri=e)}}else va()}function va(){Ut(un,un.current),Ut(si,si.current)}function Gi(e){Yt(si),Ri===e&&(Ri=null),Yt(un)}var un=Ct(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var nS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},iS=r.unstable_scheduleCallback,aS=r.unstable_NormalPriority,fn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new nS,data:new Map,refCount:0}}function po(e){e.refCount--,e.refCount===0&&iS(aS,function(){e.controller.abort()})}var mo=null,Nu=0,Zs=0,Ks=null;function sS(e,n){if(mo===null){var a=mo=[];Nu=0,Zs=Hf(),Ks={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Nu++,n.then(fm,fm),n}function fm(){if(--Nu===0&&mo!==null){Ks!==null&&(Ks.status="fulfilled");var e=mo;mo=null,Zs=0,Ks=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function rS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var hm=A.S;A.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&sS(e,n),hm!==null&&hm(e,n)};var is=Ct(null);function Ou(){var e=is.current;return e!==null?e:Ge.pooledCache}function wl(e,n){n===null?Ut(is,is.current):Ut(is,n.pool)}function dm(){var e=Ou();return e===null?null:{parent:fn._currentValue,pool:e}}var xa=0,pe=null,Pe=null,en=null,Dl=!1,Qs=!1,as=!1,Ul=0,_o=0,Js=null,oS=0;function $e(){throw Error(s(321))}function Pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,o,u,h){return xa=h,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,A.H=e===null||e.memoizedState===null?ss:Sa,as=!1,h=a(o,u),as=!1,Qs&&(h=mm(n,a,o,u)),pm(e),h}function pm(e){A.H=Ci;var n=Pe!==null&&Pe.next!==null;if(xa=0,en=Pe=pe=null,Dl=!1,_o=0,Js=null,n)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&Hl(e)&&(gn=!0))}function mm(e,n,a,o){pe=e;var u=0;do{if(Qs&&(Js=null),_o=0,Qs=!1,25<=u)throw Error(s(301));if(u+=1,en=Pe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}A.H=rs,h=n(a,o)}while(Qs);return h}function lS(){var e=A.H,n=e.useState()[0];return n=typeof n.then=="function"?go(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(pe.flags|=1024),n}function zu(){var e=Ul!==0;return Ul=0,e}function Fu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Iu(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}xa=0,en=Pe=pe=null,Qs=!1,_o=Ul=0,Js=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?pe.memoizedState=en=e:en=en.next=e,en}function nn(){if(Pe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=en===null?pe.memoizedState:en.next;if(n!==null)en=n,Pe=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},en===null?pe.memoizedState=en=e:en=en.next=e}return en}var Ll;Ll=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function go(e){var n=_o;return _o+=1,Js===null&&(Js=[]),e=am(Js,e,n),n=pe,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,A.H=n===null||n.memoizedState===null?ss:Sa),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return go(e);if(e.$$typeof===M)return An(e)}throw Error(s(438,String(e)))}function Hu(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ll(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function Vi(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=nn();return Gu(n,Pe,e)}function Gu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var R=S=null,P=null,q=n,dt=!1;do{var xt=q.lane&-536870913;if(xt!==q.lane?(be&xt)===xt:(xa&xt)===xt){var st=q.revertLane;if(st===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),xt===Zs&&(dt=!0);else if((xa&st)===st){q=q.next,st===Zs&&(dt=!0);continue}else xt={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},P===null?(R=P=xt,S=h):P=P.next=xt,pe.lanes|=st,wa|=st;xt=q.action,as&&a(h,xt),h=q.hasEagerState?q.eagerState:a(h,xt)}else st={lane:xt,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},P===null?(R=P=st,S=h):P=P.next=st,pe.lanes|=xt,wa|=xt;q=q.next}while(q!==null&&q!==n);if(P===null?S=h:P.next=R,!jn(h,e.memoizedState)&&(gn=!0,dt&&(a=Ks,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=P,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Vu(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);jn(h,n.memoizedState)||(gn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function _m(e,n,a){var o=pe,u=nn(),h=we;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!jn((Pe||u).memoizedState,a);if(S&&(u.memoizedState=a,gn=!0),u=u.queue,Wu(xm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,$s(9,vm.bind(null,o,u,a,n),{destroy:void 0},null),Ge===null)throw Error(s(349));h||xa&60||gm(o,n,a)}return a}function gm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Ll(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function vm(e,n,a,o){n.value=a,n.getSnapshot=o,Sm(n)&&ym(e)}function xm(e,n,a){return a(function(){Sm(n)&&ym(e)})}function Sm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function ym(e){var n=_a(e,2);n!==null&&zn(n,e,2)}function ku(e){var n=Vn();if(typeof e=="function"){var a=e;if(e=a(),as){le(!0);try{a()}finally{le(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},n}function Mm(e,n,a,o){return e.baseState=a,Gu(e,Pe,typeof o=="function"?o:Vi)}function cS(e,n,a,o,u){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};A.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Em(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Em(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=A.T,S={};A.T=S;try{var R=a(u,o),P=A.S;P!==null&&P(S,R),Tm(e,n,R)}catch(q){Xu(e,n,q)}finally{A.T=h}}else try{h=a(u,o),Tm(e,n,h)}catch(q){Xu(e,n,q)}}function Tm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){bm(e,n,o)},function(o){return Xu(e,n,o)}):bm(e,n,a)}function bm(e,n,a){n.status="fulfilled",n.value=a,Am(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Em(e,a)))}function Xu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Am(n),n=n.next;while(n!==o)}e.action=null}function Am(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Rm(e,n){return n}function Cm(e,n){if(we){var a=Ge.formState;if(a!==null){t:{var o=pe;if(we){if(Mn){e:{for(var u=Mn,h=Ai;u.nodeType!==8;){if(!h){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Mn=vi(u.nextSibling),o=u.data==="F!";break t}}es(o)}o=!1}o&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rm,lastRenderedState:n},a.queue=o,a=qm.bind(null,pe,o),o.dispatch=a,o=ku(!1),h=Ku.bind(null,pe,!1,o.queue),o=Vn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=cS.bind(null,pe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function wm(e){var n=nn();return Dm(n,Pe,e)}function Dm(e,n,a){n=Gu(e,n,Rm)[0],e=Ol(Vi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?go(n):n;var o=nn(),u=o.queue,h=u.dispatch;return a!==o.memoizedState&&(pe.flags|=2048,$s(9,uS.bind(null,u,a),{destroy:void 0},null)),[n,h,e]}function uS(e,n){e.action=n}function Um(e){var n=nn(),a=Pe;if(a!==null)return Dm(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function $s(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=pe.updateQueue,n===null&&(n=Ll(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Lm(){return nn().memoizedState}function Pl(e,n,a,o){var u=Vn();pe.flags|=e,u.memoizedState=$s(1|n,a,{destroy:void 0},o===void 0?null:o)}function Bl(e,n,a,o){var u=nn();o=o===void 0?null:o;var h=u.memoizedState.inst;Pe!==null&&o!==null&&Pu(o,Pe.memoizedState.deps)?u.memoizedState=$s(n,a,h,o):(pe.flags|=e,u.memoizedState=$s(1|n,a,h,o))}function Nm(e,n){Pl(8390656,8,e,n)}function Wu(e,n){Bl(2048,8,e,n)}function Om(e,n){return Bl(4,2,e,n)}function Pm(e,n){return Bl(4,4,e,n)}function Bm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zm(e,n,a){a=a!=null?a.concat([e]):null,Bl(4,4,Bm.bind(null,n,e),a)}function qu(){}function Fm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Pu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Im(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Pu(n,o[1]))return o[0];if(o=e(),as){le(!0);try{e()}finally{le(!1)}}return a.memoizedState=[o,n],o}function Yu(e,n,a){return a===void 0||xa&1073741824?e.memoizedState=n:(e.memoizedState=a,e=G_(),pe.lanes|=e,wa|=e,a)}function Hm(e,n,a,o){return jn(a,n)?a:js.current!==null?(e=Yu(e,a,o),jn(e,n)||(gn=!0),e):xa&42?(e=G_(),pe.lanes|=e,wa|=e,n):(gn=!0,e.memoizedState=a)}function Gm(e,n,a,o,u){var h=W.p;W.p=h!==0&&8>h?h:8;var S=A.T,R={};A.T=R,Ku(e,!1,n,a);try{var P=u(),q=A.S;if(q!==null&&q(R,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var dt=rS(P,o);vo(e,n,dt,Jn(e))}else vo(e,n,o,Jn(e))}catch(xt){vo(e,n,{then:function(){},status:"rejected",reason:xt},Jn())}finally{W.p=h,A.T=S}}function fS(){}function ju(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Vm(e).queue;Gm(e,u,n,pt,a===null?fS:function(){return km(e),a(o)})}function Vm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:pt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function km(e){var n=Vm(e).next.queue;vo(e,n,{},Jn())}function Zu(){return An(Fo)}function Xm(){return nn().memoizedState}function Wm(){return nn().memoizedState}function hS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=Ea(a);var o=Ta(n,e,a);o!==null&&(zn(o,n,a),yo(o,n,a)),n={cache:Lu()},e.payload=n;return}n=n.return}}function dS(e,n,a){var o=Jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?Ym(n,a):(a=bu(e,n,a,o),a!==null&&(zn(a,e,o),jm(a,n,o)))}function qm(e,n,a){var o=Jn();vo(e,n,a,o)}function vo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))Ym(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,R=h(S,a);if(u.hasEagerState=!0,u.eagerState=R,jn(R,S))return Sl(e,n,u,0),Ge===null&&xl(),!1}catch{}finally{}if(a=bu(e,n,u,o),a!==null)return zn(a,e,o),jm(a,n,o),!0}return!1}function Ku(e,n,a,o){if(o={lane:2,revertLane:Hf(),action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=bu(e,a,o,2),n!==null&&zn(n,e,2)}function zl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function Ym(e,n){Qs=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function jm(e,n,a){if(a&4194176){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,bi(e,a)}}var Ci={readContext:An,use:Nl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e};Ci.useCacheRefresh=$e,Ci.useMemoCache=$e,Ci.useHostTransitionStatus=$e,Ci.useFormState=$e,Ci.useActionState=$e,Ci.useOptimistic=$e;var ss={readContext:An,use:Nl,useCallback:function(e,n){return Vn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Nm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,Bm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=Vn();n=n===void 0?null:n;var o=e();if(as){le(!0);try{e()}finally{le(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Vn();if(a!==void 0){var u=a(n);if(as){le(!0);try{a(n)}finally{le(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=dS.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=Vn();return e={current:e},n.memoizedState=e},useState:function(e){e=ku(e);var n=e.queue,a=qm.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(e,n){var a=Vn();return Yu(a,e,n)},useTransition:function(){var e=ku(!1);return e=Gm.bind(null,pe,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,u=Vn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ge===null)throw Error(s(349));be&60||gm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Nm(xm.bind(null,o,h,e),[e]),o.flags|=2048,$s(9,vm.bind(null,o,h,a,n),{destroy:void 0},null),a},useId:function(){var e=Vn(),n=Ge.identifierPrefix;if(we){var a=Hi,o=Ii;a=(o&~(1<<32-Qt(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=oS++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Vn().memoizedState=hS.bind(null,pe)}};ss.useMemoCache=Hu,ss.useHostTransitionStatus=Zu,ss.useFormState=Cm,ss.useActionState=Cm,ss.useOptimistic=function(e){var n=Vn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,pe,!0,a),a.dispatch=n,[e,n]};var Sa={readContext:An,use:Nl,useCallback:Fm,useContext:An,useEffect:Wu,useImperativeHandle:zm,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:Im,useReducer:Ol,useRef:Lm,useState:function(){return Ol(Vi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=nn();return Hm(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Ol(Vi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:_m,useId:Xm};Sa.useCacheRefresh=Wm,Sa.useMemoCache=Hu,Sa.useHostTransitionStatus=Zu,Sa.useFormState=wm,Sa.useActionState=wm,Sa.useOptimistic=function(e,n){var a=nn();return Mm(a,Pe,e,n)};var rs={readContext:An,use:Nl,useCallback:Fm,useContext:An,useEffect:Wu,useImperativeHandle:zm,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:Im,useReducer:Vu,useRef:Lm,useState:function(){return Vu(Vi)},useDebugValue:qu,useDeferredValue:function(e,n){var a=nn();return Pe===null?Yu(a,e,n):Hm(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Vu(Vi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:go(e),n]},useSyncExternalStore:_m,useId:Xm};rs.useCacheRefresh=Wm,rs.useMemoCache=Hu,rs.useHostTransitionStatus=Zu,rs.useFormState=Um,rs.useActionState=Um,rs.useOptimistic=function(e,n){var a=nn();return Pe!==null?Mm(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Qu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:T({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ju={isMounted:function(e){return(e=e._reactInternals)?k(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=Ea(o);u.payload=n,a!=null&&(u.callback=a),n=Ta(e,u,o),n!==null&&(zn(n,e,o),yo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=Ea(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ta(e,u,o),n!==null&&(zn(n,e,o),yo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=Ta(e,o,a),n!==null&&(zn(n,e,a),yo(n,e,a))}};function Zm(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,h):!0}function Km(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function os(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=T({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Qm(e){Fl(e)}function Jm(e){console.error(e)}function $m(e){Fl(e)}function Il(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function t_(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $u(e,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,n)},a}function e_(e){return e=Ea(e),e.tag=3,e}function n_(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){t_(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){t_(n,a,o),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function pS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&So(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ri===null?Pf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),zf(e,o,u)),!1;case 22:return a.flags|=65536,o===wu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),zf(e,o,u)),!1}throw Error(s(435,a.tag))}return zf(e,o,u),Pf(),!1}if(we)return n=si.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Cu&&(e=Error(s(422),{cause:o}),lo(ni(e,a)))):(o!==Cu&&(n=Error(s(423),{cause:o}),lo(ni(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ni(o,a),u=$u(e.stateNode,o,u),mf(e,u),Ze!==4&&(Ze=2)),!1;var h=Error(s(520),{cause:o});if(h=ni(h,a),wo===null?wo=[h]:wo.push(h),Ze!==4&&(Ze=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=$u(a.stateNode,o,e),mf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Da===null||!Da.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=e_(u),n_(u,e,a,o),mf(a,u),!1}a=a.return}while(a!==null);return!1}var i_=Error(s(461)),gn=!1;function En(e,n,a,o){n.child=e===null?lm(n,null,a,o):ns(n,e.child,a,o)}function a_(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return cs(n),o=Bu(e,n,a,S,h,u),R=zu(),e!==null&&!gn?(Fu(e,n,u),ki(e,n,u)):(we&&R&&Au(n),n.flags|=1,En(e,n,o,u),n.child)}function s_(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Ef(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,r_(e,n,h,o,u)):(e=Xl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!cf(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(S,o)&&e.ref===n.ref)return ki(e,n,u)}return n.flags|=1,e=Ca(h,o),e.ref=n.ref,e.return=n,n.child=e}function r_(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(ao(h,o)&&e.ref===n.ref)if(gn=!1,n.pendingProps=o=h,cf(e,u))e.flags&131072&&(gn=!0);else return n.lanes=e.lanes,ki(e,n,u)}return tf(e,n,a,o,u)}function o_(e,n,a){var o=n.pendingProps,u=o.children,h=(n.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if(xo(e,n),o.mode==="hidden"||h){if(n.flags&128){if(o=S!==null?S.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return l_(e,n,o,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&wl(n,S!==null?S.cachePool:null),S!==null?cm(n,S):Du(),um(n);else return n.lanes=n.childLanes=536870912,l_(e,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(wl(n,S.cachePool),cm(n,S),va(),n.memoizedState=null):(e!==null&&wl(n,null),Du(),va());return En(e,n,u,a),n.child}function l_(e,n,a,o){var u=Ou();return u=u===null?null:{parent:fn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&wl(n,null),Du(),um(n),e!==null&&So(e,n,o,!0),null}function xo(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function tf(e,n,a,o,u){return cs(n),a=Bu(e,n,a,o,void 0,u),o=zu(),e!==null&&!gn?(Fu(e,n,u),ki(e,n,u)):(we&&o&&Au(n),n.flags|=1,En(e,n,a,u),n.child)}function c_(e,n,a,o,u,h){return cs(n),n.updateQueue=null,a=mm(n,o,a,u),pm(e),o=zu(),e!==null&&!gn?(Fu(e,n,h),ki(e,n,h)):(we&&o&&Au(n),n.flags|=1,En(e,n,a,h),n.child)}function u_(e,n,a,o,u){if(cs(n),n.stateNode===null){var h=Xs,S=a.contextType;typeof S=="object"&&S!==null&&(h=An(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Ju,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},df(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?An(S):Xs,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Qu(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Ju.enqueueReplaceState(h,h.state,null),Eo(n,o,h,u),Mo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,P=os(a,R);h.props=P;var q=h.context,dt=a.contextType;S=Xs,typeof dt=="object"&&dt!==null&&(S=An(dt));var xt=a.getDerivedStateFromProps;dt=typeof xt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||q!==S)&&Km(n,h,o,S),Ma=!1;var st=n.memoizedState;h.state=st,Eo(n,o,h,u),Mo(),q=n.memoizedState,R||st!==q||Ma?(typeof xt=="function"&&(Qu(n,a,xt,o),q=n.memoizedState),(P=Ma||Zm(n,a,P,o,st,q,S))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=q),h.props=o,h.state=q,h.context=S,o=P):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,pf(e,n),S=n.memoizedProps,dt=os(a,S),h.props=dt,xt=n.pendingProps,st=h.context,q=a.contextType,P=Xs,typeof q=="object"&&q!==null&&(P=An(q)),R=a.getDerivedStateFromProps,(q=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==xt||st!==P)&&Km(n,h,o,P),Ma=!1,st=n.memoizedState,h.state=st,Eo(n,o,h,u),Mo();var ht=n.memoizedState;S!==xt||st!==ht||Ma||e!==null&&e.dependencies!==null&&Hl(e.dependencies)?(typeof R=="function"&&(Qu(n,a,R,o),ht=n.memoizedState),(dt=Ma||Zm(n,a,dt,o,st,ht,P)||e!==null&&e.dependencies!==null&&Hl(e.dependencies))?(q||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ht,P),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ht,P)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ht),h.props=o,h.state=ht,h.context=P,o=dt):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,xo(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=ns(n,e.child,null,u),n.child=ns(n,null,a,u)):En(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ki(e,n,u),e}function f_(e,n,a,o){return oo(),n.flags|=256,En(e,n,a,o),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function nf(e){return{baseLanes:e,cachePool:dm()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ci),e}function h_(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?ga(n):va(),we){var R=Mn,P;if(P=R){t:{for(P=R,R=Ai;P.nodeType!==8;){if(!R){R=null;break t}if(P=vi(P.nextSibling),P===null){R=null;break t}}R=P}R!==null?(n.memoizedState={dehydrated:R,treeContext:$a!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912},P=li(18,null,null,0),P.stateNode=R,P.return=n,n.child=P,Bn=n,Mn=null,P=!0):P=!1}P||es(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return R.data==="$!"?n.lanes=16:n.lanes=536870912,null;Gi(n)}return R=o.children,o=o.fallback,u?(va(),u=n.mode,R=rf({mode:"hidden",children:R},u),o=fs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=nf(a),u.childLanes=af(e,S,a),n.memoizedState=ef,o):(ga(n),sf(n,R))}if(P=e.memoizedState,P!==null&&(R=P.dehydrated,R!==null)){if(h)n.flags&256?(ga(n),n.flags&=-257,n=of(e,n,a)):n.memoizedState!==null?(va(),n.child=e.child,n.flags|=128,n=null):(va(),u=o.fallback,R=n.mode,o=rf({mode:"visible",children:o.children},R),u=fs(u,R,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,ns(n,e.child,null,a),o=n.child,o.memoizedState=nf(a),o.childLanes=af(e,S,a),n.memoizedState=ef,n=u);else if(ga(n),R.data==="$!"){if(S=R.nextSibling&&R.nextSibling.dataset,S)var q=S.dgst;S=q,o=Error(s(419)),o.stack="",o.digest=S,lo({value:o,source:null,stack:null}),n=of(e,n,a)}else if(gn||So(e,n,a,!1),S=(a&e.childLanes)!==0,gn||S){if(S=Ge,S!==null){if(o=a&-a,o&42)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=o&(S.suspendedLanes|a)?0:o,o!==0&&o!==P.retryLane)throw P.retryLane=o,_a(e,o),zn(S,e,o),i_}R.data==="$?"||Pf(),n=of(e,n,a)}else R.data==="$?"?(n.flags|=128,n.child=e.child,n=wS.bind(null,e),R._reactRetry=n,n=null):(e=P.treeContext,Mn=vi(R.nextSibling),Bn=n,we=!0,_i=null,Ai=!1,e!==null&&(ii[ai++]=Ii,ii[ai++]=Hi,ii[ai++]=$a,Ii=e.id,Hi=e.overflow,$a=n),n=sf(n,o.children),n.flags|=4096);return n}return u?(va(),u=o.fallback,R=n.mode,P=e.child,q=P.sibling,o=Ca(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&31457280,q!==null?u=Ca(q,u):(u=fs(u,R,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=e.child.memoizedState,R===null?R=nf(a):(P=R.cachePool,P!==null?(q=fn._currentValue,P=P.parent!==q?{parent:q,pool:q}:P):P=dm(),R={baseLanes:R.baseLanes|a,cachePool:P}),u.memoizedState=R,u.childLanes=af(e,S,a),n.memoizedState=ef,o):(ga(n),a=e.child,e=a.sibling,a=Ca(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function sf(e,n){return n=rf({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function rf(e,n){return F_(e,n,0,null)}function of(e,n,a){return ns(n,e.child,null,a),e=sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function d_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ff(e.return,n,a)}function lf(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function p_(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(En(e,n,o.children,a),o=un.current,o&2)o=o&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&d_(e,a,n);else if(e.tag===19)d_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Ut(un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),lf(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}lf(n,!0,a,null,h);break;case"together":lf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,!(a&n.childLanes))if(e!==null){if(So(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ca(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ca(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(e,n){return e.lanes&n?!0:(e=e.dependencies,!!(e!==null&&Hl(e)))}function mS(e,n,a){switch(n.tag){case 3:ce(n,n.stateNode.containerInfo),ya(n,fn,e.memoizedState.cache),oo();break;case 27:case 5:re(n);break;case 4:ce(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ga(n),n.flags|=128,null):a&n.child.childLanes?h_(e,n,a):(ga(n),e=ki(e,n,a),e!==null?e.sibling:null);ga(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(So(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return p_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ut(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,o_(e,n,a);case 24:ya(n,fn,e.memoizedState.cache)}return ki(e,n,a)}function m_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!cf(e,a)&&!(n.flags&128))return gn=!1,mS(e,n,a);gn=!!(e.flags&131072)}else gn=!1,we&&n.flags&1048576&&$p(n,El,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Ef(o)?(e=os(o,e),n.tag=1,n=u_(null,n,o,e,a)):(n.tag=0,n=tf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===E){n.tag=11,n=a_(null,n,o,e,a);break t}else if(u===g){n.tag=14,n=s_(null,n,o,e,a);break t}}throw n=G(o)||o,Error(s(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=os(o,n.pendingProps),u_(e,n,o,u,a);case 3:t:{if(ce(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var h=n.pendingProps;u=n.memoizedState,o=u.element,pf(e,n),Eo(n,h,null,a);var S=n.memoizedState;if(h=S.cache,ya(n,fn,h),h!==u.cache&&hf(n,[fn],a,!0),Mo(),h=S.element,u.isDehydrated)if(u={element:h,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=f_(e,n,h,a);break t}else if(h!==o){o=ni(Error(s(424)),n),lo(o),n=f_(e,n,h,a);break t}else for(Mn=vi(n.stateNode.containerInfo.firstChild),Bn=n,we=!0,_i=null,Ai=!0,a=lm(n,null,h,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(oo(),h===o){n=ki(e,n,a);break t}En(e,n,h,a)}n=n.child}return n;case 26:return xo(e,n),e===null?(a=vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=nc(te.current).createElement(a),o[on]=n,o[ln]=e,Tn(o,a,e),J(o),n.stateNode=o):n.memoizedState=vg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return re(n),e===null&&we&&(o=n.stateNode=mg(n.type,n.pendingProps,te.current),Bn=n,Ai=!0,Mn=vi(o.firstChild)),o=n.pendingProps.children,e!==null||we?En(e,n,o,a):n.child=ns(n,null,o,a),xo(e,n),n.child;case 5:return e===null&&we&&((u=o=Mn)&&(o=WS(o,n.type,n.pendingProps,Ai),o!==null?(n.stateNode=o,Bn=n,Mn=vi(o.firstChild),Ai=!1,u=!0):u=!1),u||es(n)),re(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,Zf(u,h)?o=null:S!==null&&Zf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Bu(e,n,lS,null,null,a),Fo._currentValue=u),xo(e,n),En(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=Mn)&&(a=qS(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,Bn=n,Mn=null,e=!0):e=!1),e||es(n)),null;case 13:return h_(e,n,a);case 4:return ce(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ns(n,null,o,a):En(e,n,o,a),n.child;case 11:return a_(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ya(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,cs(n),u=An(u),o=o(u),n.flags|=1,En(e,n,o,a),n.child;case 14:return s_(e,n,n.type,n.pendingProps,a);case 15:return r_(e,n,n.type,n.pendingProps,a);case 19:return p_(e,n,a);case 22:return o_(e,n,a);case 24:return cs(n),o=An(fn),e===null?(u=Ou(),u===null&&(u=Ge,h=Lu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},df(n),ya(n,fn,u)):(e.lanes&a&&(pf(e,n),Eo(n,null,null,a),Mo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ya(n,fn,o)):(o=h.cache,ya(n,fn,o),o!==u.cache&&hf(n,[fn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var uf=Ct(null),ls=null,Xi=null;function ya(e,n,a){Ut(uf,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=uf.current,Yt(uf)}function ff(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function hf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var P=0;P<n.length;P++)if(R.context===n[P]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),ff(h.return,a,e),o||(S=null);break t}h=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),ff(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function So(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if(u.flags&524288)h=!0;else if(u.flags&262144)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=u.type;jn(u.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(u===H.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}u=u.return}e!==null&&hf(n,e,a,o),n.flags|=262144}function Hl(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cs(e){ls=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return __(ls,e)}function Gl(e,n){return ls===null&&cs(e),__(e,n)}function __(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(s(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var Ma=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,qe&2){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(e),Qp(e,null,a),n}return Sl(e,o,n,a),yl(e)}function yo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,bi(e,a)}}function mf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var _f=!1;function Mo(){if(_f){var e=Ks;if(e!==null)throw e}}function Eo(e,n,a,o){_f=!1;var u=e.updateQueue;Ma=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var P=R,q=P.next;P.next=null,S===null?h=q:S.next=q,S=P;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==S&&(R===null?dt.firstBaseUpdate=q:R.next=q,dt.lastBaseUpdate=P))}if(h!==null){var xt=u.baseState;S=0,dt=q=P=null,R=h;do{var st=R.lane&-536870913,ht=st!==R.lane;if(ht?(be&st)===st:(o&st)===st){st!==0&&st===Zs&&(_f=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var qt=e,oe=R;st=n;var Ke=a;switch(oe.tag){case 1:if(qt=oe.payload,typeof qt=="function"){xt=qt.call(Ke,xt,st);break t}xt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=oe.payload,st=typeof qt=="function"?qt.call(Ke,xt,st):qt,st==null)break t;xt=T({},xt,st);break t;case 2:Ma=!0}}st=R.callback,st!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[st]:ht.push(st))}else ht={lane:st,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(q=dt=ht,P=xt):dt=dt.next=ht,S|=st;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ht=R,R=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);dt===null&&(P=xt),u.baseState=P,u.firstBaseUpdate=q,u.lastBaseUpdate=dt,h===null&&(u.shared.lanes=0),wa|=S,e.lanes=S,e.memoizedState=xt}}function g_(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function v_(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)g_(a[e],n)}function To(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){He(n,n.return,R)}}function ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var P=a;try{R()}catch(q){He(u,P,q)}}}o=o.next}while(o!==h)}}catch(q){He(n,n.return,q)}}function x_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{v_(n,a)}catch(o){He(e,e.return,o)}}}function S_(e,n,a){a.props=os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){He(e,n,o)}}function us(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var u=o;break;default:u=o}typeof a=="function"?e.refCleanup=a(u):a.current=u}}catch(h){He(e,n,h)}}function Zn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){He(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(e,n,u)}else a.current=null}function y_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){He(e,e.return,u)}}function M_(e,n,a){try{var o=e.stateNode;HS(o,e.type,a,n),o[ln]=n}catch(u){He(e,e.return,u)}}function E_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||E_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ec));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(vf(e,n,a),e=e.sibling;e!==null;)vf(e,n,a),e=e.sibling}function Vl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Vl(e,n,a),e=e.sibling;e!==null;)Vl(e,n,a),e=e.sibling}var qi=!1,je=!1,xf=!1,T_=typeof WeakSet=="function"?WeakSet:Set,vn=null,b_=!1;function _S(e,n){if(e=e.containerInfo,Yf=lc,e=Vp(e),Su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,R=-1,P=-1,q=0,dt=0,xt=e,st=null;e:for(;;){for(var ht;xt!==a||u!==0&&xt.nodeType!==3||(R=S+u),xt!==h||o!==0&&xt.nodeType!==3||(P=S+o),xt.nodeType===3&&(S+=xt.nodeValue.length),(ht=xt.firstChild)!==null;)st=xt,xt=ht;for(;;){if(xt===e)break e;if(st===a&&++q===u&&(R=S),st===h&&++dt===o&&(P=S),(ht=xt.nextSibling)!==null)break;xt=st,st=xt.parentNode}xt=ht}a=R===-1||P===-1?null:{start:R,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(jf={focusedElem:e,selectionRange:a},lc=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var qt=os(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(qt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(oe){He(a,a.return,oe)}}break;case 3:if(e&1024){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Jf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}return qt=b_,b_=!1,qt}function A_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),o&4&&To(5,a);break;case 1:if(ji(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(R){He(a,a.return,R)}else{var u=os(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(R){He(a,a.return,R)}}o&64&&x_(a),o&512&&us(a,a.return);break;case 3:if(ji(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{v_(o,e)}catch(R){He(a,a.return,R)}}break;case 26:ji(e,a),o&512&&us(a,a.return);break;case 27:case 5:ji(e,a),n===null&&o&4&&y_(a),o&512&&us(a,a.return);break;case 12:ji(e,a);break;case 13:ji(e,a),o&4&&w_(e,a);break;case 22:if(u=a.memoizedState!==null||qi,!u){n=n!==null&&n.memoizedState!==null||je;var h=qi,S=je;qi=u,(je=n)&&!S?Aa(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),qi=h,je=S}o&512&&(a.memoizedProps.mode==="manual"?us(a,a.return):Zn(a,a.return));break;default:ji(e,a)}}function R_(e){var n=e.alternate;n!==null&&(e.alternate=null,R_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Kr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,Kn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)C_(e,n,a),a=a.sibling}function C_(e,n,a){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 26:je||Zn(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||Zn(a,n);var o=an,u=Kn;for(an=a.stateNode,Yi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Kr(a),an=o,Kn=u;break;case 5:je||Zn(a,n);case 6:u=an;var h=Kn;if(an=null,Yi(e,n,a),an=u,Kn=h,an!==null)if(Kn)try{e=an,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(S){He(a,n,S)}else try{an.removeChild(a.stateNode)}catch(S){He(a,n,S)}break;case 18:an!==null&&(Kn?(n=an,a=a.stateNode,n.nodeType===8?Qf(n.parentNode,a):n.nodeType===1&&Qf(n,a),Vo(n)):Qf(an,a.stateNode));break;case 4:o=an,u=Kn,an=a.stateNode.containerInfo,Kn=!0,Yi(e,n,a),an=o,Kn=u;break;case 0:case 11:case 14:case 15:je||ba(2,a,n),je||ba(4,a,n),Yi(e,n,a);break;case 1:je||(Zn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&S_(a,n,o)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:je||Zn(a,n),je=(o=je)||a.memoizedState!==null,Yi(e,n,a),je=o;break;default:Yi(e,n,a)}}function w_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vo(e)}catch(a){He(n,n.return,a)}}function gS(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new T_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new T_),n;default:throw Error(s(435,e.tag))}}function Sf(e,n){var a=gS(e);n.forEach(function(o){var u=DS.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function ri(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,S=n,R=S;t:for(;R!==null;){switch(R.tag){case 27:case 5:an=R.stateNode,Kn=!1;break t;case 3:an=R.stateNode.containerInfo,Kn=!0;break t;case 4:an=R.stateNode.containerInfo,Kn=!0;break t}R=R.return}if(an===null)throw Error(s(160));C_(h,S,u),an=null,Kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)D_(n,e),n=n.sibling}var gi=null;function D_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ri(n,e),oi(e),o&4&&(ba(3,e,e.return),To(3,e),ba(5,e,e.return));break;case 1:ri(n,e),oi(e),o&512&&(je||a===null||Zn(a,a.return)),o&64&&qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=gi;if(ri(n,e),oi(e),o&512&&(je||a===null||Zn(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Za]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Tn(h,o,a),h[on]=e,J(h),o=h;break t;case"link":var S=yg("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(h=S[R],h.getAttribute("href")===(a.href==null?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break e}}h=u.createElement(o),Tn(h,o,a),u.head.appendChild(h);break;case"meta":if(S=yg("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(h=S[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break e}}h=u.createElement(o),Tn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[on]=e,J(h),o=h}e.stateNode=o}else Mg(u,e.type,e.stateNode);else e.stateNode=Sg(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Mg(u,e.type,e.stateNode):Sg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&M_(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){u=e.stateNode,h=e.memoizedProps;try{for(var P=u.firstChild;P;){var q=P.nextSibling,dt=P.nodeName;P[Za]||dt==="HEAD"||dt==="BODY"||dt==="SCRIPT"||dt==="STYLE"||dt==="LINK"&&P.rel.toLowerCase()==="stylesheet"||u.removeChild(P),P=q}for(var xt=e.type,st=u.attributes;st.length;)u.removeAttributeNode(st[0]);Tn(u,xt,h),u[on]=e,u[ln]=h}catch(qt){He(e,e.return,qt)}}case 5:if(ri(n,e),oi(e),o&512&&(je||a===null||Zn(a,a.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch(qt){He(e,e.return,qt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,M_(e,u,a!==null?a.memoizedProps:u)),o&1024&&(xf=!0);break;case 6:if(ri(n,e),oi(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(qt){He(e,e.return,qt)}}break;case 3:if(sc=null,u=gi,gi=ic(n.containerInfo),ri(n,e),gi=u,oi(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Vo(n.containerInfo)}catch(qt){He(e,e.return,qt)}xf&&(xf=!1,U_(e));break;case 4:o=gi,gi=ic(e.stateNode.containerInfo),ri(n,e),oi(e),gi=o;break;case 12:ri(n,e),oi(e);break;case 13:ri(n,e),oi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wf=mt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sf(e,o)));break;case 22:if(o&512&&(je||a===null||Zn(a,a.return)),P=e.memoizedState!==null,q=a!==null&&a.memoizedState!==null,dt=qi,xt=je,qi=dt||P,je=xt||q,ri(n,e),je=xt,qi=dt,oi(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=P?n._visibility&-2:n._visibility|1,P&&(n=qi||je,a===null||q||n||tr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){q=a=n;try{if(u=q.stateNode,P)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{S=q.stateNode,R=q.memoizedProps.style;var ht=R!=null&&R.hasOwnProperty("display")?R.display:null;S.style.display=ht==null||typeof ht=="boolean"?"":(""+ht).trim()}}catch(qt){He(q,q.return,qt)}}}else if(n.tag===6){if(a===null){q=n;try{q.stateNode.nodeValue=P?"":q.memoizedProps}catch(qt){He(q,q.return,qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Sf(e,a))));break;case 19:ri(n,e),oi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sf(e,o)));break;case 21:break;default:ri(n,e),oi(e)}}function oi(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(E_(a)){var o=a;break t}a=a.return}throw Error(s(160))}switch(o.tag){case 27:var u=o.stateNode,h=gf(e);Vl(e,h,u);break;case 5:var S=o.stateNode;o.flags&32&&(Hn(S,""),o.flags&=-33);var R=gf(e);Vl(e,R,S);break;case 3:case 4:var P=o.stateNode.containerInfo,q=gf(e);vf(e,q,P);break;default:throw Error(s(161))}}}catch(dt){He(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function U_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;U_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)A_(e,n.alternate,n),n=n.sibling}function tr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),tr(n);break;case 1:Zn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&S_(n,n.return,a),tr(n);break;case 26:case 27:case 5:Zn(n,n.return),tr(n);break;case 22:Zn(n,n.return),n.memoizedState===null&&tr(n);break;default:tr(n)}e=e.sibling}}function Aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:Aa(u,h,a),To(4,h);break;case 1:if(Aa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(q){He(o,o.return,q)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)g_(P[u],R)}catch(q){He(o,o.return,q)}}a&&S&64&&x_(h),us(h,h.return);break;case 26:case 27:case 5:Aa(u,h,a),a&&o===null&&S&4&&y_(h),us(h,h.return);break;case 12:Aa(u,h,a);break;case 13:Aa(u,h,a),a&&S&4&&w_(u,h);break;case 22:h.memoizedState===null&&Aa(u,h,a),us(h,h.return);break;default:Aa(u,h,a)}n=n.sibling}}function yf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&po(a))}function Mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e))}function Ra(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)L_(e,n,a,o),n=n.sibling}function L_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ra(e,n,a,o),u&2048&&To(9,n);break;case 3:Ra(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e)));break;case 12:if(u&2048){Ra(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,R=h.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){He(n,n.return,P)}}else Ra(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,n.memoizedState!==null?h._visibility&4?Ra(e,n,a,o):bo(e,n):h._visibility&4?Ra(e,n,a,o):(h._visibility|=4,er(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&yf(n.alternate,n);break;case 24:Ra(e,n,a,o),u&2048&&Mf(n.alternate,n);break;default:Ra(e,n,a,o)}}function er(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,S=n,R=a,P=o,q=S.flags;switch(S.tag){case 0:case 11:case 15:er(h,S,R,P,u),To(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&4?er(h,S,R,P,u):bo(h,S):(dt._visibility|=4,er(h,S,R,P,u)),u&&q&2048&&yf(S.alternate,S);break;case 24:er(h,S,R,P,u),u&&q&2048&&Mf(S.alternate,S);break;default:er(h,S,R,P,u)}n=n.sibling}}function bo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:bo(a,o),u&2048&&yf(o.alternate,o);break;case 24:bo(a,o),u&2048&&Mf(o.alternate,o);break;default:bo(a,o)}n=n.sibling}}var Ao=8192;function nr(e){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)N_(e),e=e.sibling}function N_(e){switch(e.tag){case 26:nr(e),e.flags&Ao&&e.memoizedState!==null&&sy(gi,e.memoizedState,e.memoizedProps);break;case 5:nr(e);break;case 3:case 4:var n=gi;gi=ic(e.stateNode.containerInfo),nr(e),gi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ao,Ao=16777216,nr(e),Ao=n):nr(e));break;default:nr(e)}}function O_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ro(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,B_(o,e)}O_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)P_(e),e=e.sibling}function P_(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&ba(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,kl(e)):Ro(e);break;default:Ro(e)}}function kl(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,B_(o,e)}O_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,kl(n));break;default:kl(n)}e=e.sibling}}function B_(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else t:for(a=e;vn!==null;){o=vn;var u=o.sibling,h=o.return;if(R_(o),o===a){vn=null;break t}if(u!==null){u.return=h,vn=u;break t}vn=h}}}function vS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,n,a,o){return new vS(e,n,a,o)}function Ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ca(e,n){var a=e.alternate;return a===null?(a=li(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function z_(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Xl(e,n,a,o,u,h){var S=0;if(o=e,typeof e=="function")Ef(e)&&(S=1);else if(typeof e=="string")S=iy(e,a,_e.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return fs(a.children,u,h,n);case p:S=8,u|=24;break;case _:return e=li(12,a,n,u|2),e.elementType=_,e.lanes=h,e;case w:return e=li(13,a,n,u),e.elementType=w,e.lanes=h,e;case y:return e=li(19,a,n,u),e.elementType=y,e.lanes=h,e;case O:return F_(a,u,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case M:S=10;break t;case v:S=9;break t;case E:S=11;break t;case g:S=14;break t;case z:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=li(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function fs(e,n,a,o){return e=li(7,e,o,n),e.lanes=a,e}function F_(e,n,a,o){e=li(22,e,o,n),e.elementType=O,e.lanes=a;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var h=u._current;if(h===null)throw Error(s(456));if(!(u._pendingVisibility&2)){var S=_a(h,2);S!==null&&(u._pendingVisibility|=2,zn(S,h,2))}},attach:function(){var h=u._current;if(h===null)throw Error(s(456));if(u._pendingVisibility&2){var S=_a(h,2);S!==null&&(u._pendingVisibility&=-3,zn(S,h,2))}}};return e.stateNode=u,e}function Tf(e,n,a){return e=li(6,e,null,n),e.lanes=a,e}function bf(e,n,a){return n=li(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Zi(e){e.flags|=4}function I_(e,n){if(n.type!=="stylesheet"||n.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Eg(n)){if(n=si.current,n!==null&&((be&4194176)===be?Ri!==null:(be&62914560)!==be&&!(be&536870912)||n!==Ri))throw uo=wu,nm;e.flags|=8192}}function Wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Re():536870912,e.lanes|=n,ar|=n)}function Co(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&31457280,o|=u.flags&31457280,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function xS(e,n,a){var o=n.pendingProps;switch(Ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wi(fn),ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ro(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_i!==null&&(Nf(_i),_i=null))),We(n),null;case 26:return a=n.memoizedState,e===null?(Zi(n),a!==null?(We(n),I_(n,a)):(We(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Zi(n),We(n),I_(n,a)):(We(n),n.flags&=-16777217):(e.memoizedProps!==o&&Zi(n),We(n),n.flags&=-16777217),null;case 27:kt(n),a=te.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return We(n),null}e=_e.current,ro(n)?tm(n):(e=mg(u,o,a),n.stateNode=e,Zi(n))}return We(n),null;case 5:if(kt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(e=_e.current,ro(n))tm(n);else{switch(u=nc(te.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[on]=n,e[ln]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Tn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=te.current,ro(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||cg(e.nodeValue,a)),e||es(n)}else e=nc(e).createTextNode(o),e[on]=n,n.stateNode=e}return We(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ro(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else oo(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else _i!==null&&(Nf(_i),_i=null),u=!0;if(!u)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),n.flags&128)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),We(n),null;case 4:return ae(),e===null&&Xf(n.stateNode.containerInfo),We(n),null;case 10:return Wi(n.type),We(n),null;case 19:if(Yt(un),u=n.memoizedState,u===null)return We(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)Co(u,!1);else{if(Ze!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(h=Cl(e),h!==null){for(n.flags|=128,Co(u,!1),e=h.updateQueue,n.updateQueue=e,Wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)z_(a,e),a=a.sibling;return Ut(un,un.current&1|2),n.child}e=e.sibling}u.tail!==null&&mt()>ql&&(n.flags|=128,o=!0,Co(u,!1),n.lanes=4194304)}else{if(!o)if(e=Cl(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Wl(n,e),Co(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!we)return We(n),null}else 2*mt()-u.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,o=!0,Co(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=mt(),n.sibling=null,e=un.current,Ut(un,o?e&1|2:e&1),n):(We(n),null);case 22:case 23:return Gi(n),Uu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?a&536870912&&!(n.flags&128)&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Yt(is),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(fn),We(n),null;case 25:return null}throw Error(s(156,n.tag))}function SS(e,n){switch(Ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(fn),ae(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 13:if(Gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));oo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Yt(un),null;case 4:return ae(),null;case 10:return Wi(n.type),null;case 22:case 23:return Gi(n),Uu(),e!==null&&Yt(is),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(fn),null;case 25:return null;default:return null}}function H_(e,n){switch(Ru(n),n.tag){case 3:Wi(fn),ae();break;case 26:case 27:case 5:kt(n);break;case 4:ae();break;case 13:Gi(n);break;case 19:Yt(un);break;case 10:Wi(n.type);break;case 22:case 23:Gi(n),Uu(),e!==null&&Yt(is);break;case 24:Wi(fn)}}var yS={getCacheForType:function(e){var n=An(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},MS=typeof WeakMap=="function"?WeakMap:Map,qe=0,Ge=null,ge=null,be=0,Ve=0,Qn=null,Ki=!1,ir=!1,Af=!1,Qi=0,Ze=0,wa=0,hs=0,Rf=0,ci=0,ar=0,wo=null,wi=null,Cf=!1,wf=0,ql=1/0,Yl=null,Da=null,jl=!1,ds=null,Do=0,Df=0,Uf=null,Uo=0,Lf=null;function Jn(){if(qe&2&&be!==0)return be&-be;if(A.T!==null){var e=Zs;return e!==0?e:Hf()}return Zr()}function G_(){ci===0&&(ci=!(be&536870912)||we?rn():536870912);var e=si.current;return e!==null&&(e.flags|=32),ci}function zn(e,n,a){(e===Ge&&Ve===2||e.cancelPendingCommit!==null)&&(sr(e,0),Ji(e,be,ci,!1)),Nn(e,a),(!(qe&2)||e!==Ge)&&(e===Ge&&(!(qe&2)&&(hs|=a),Ze===4&&Ji(e,be,ci,!1)),Di(e))}function V_(e,n,a){if(qe&6)throw Error(s(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||ee(e,n),u=o?bS(e,n):Bf(e,n,!0),h=o;do{if(u===0){ir&&!o&&Ji(e,n,0,!1);break}else if(u===6)Ji(e,n,0,!Ki);else{if(a=e.current.alternate,h&&!ES(a)){u=Bf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var R=e;u=wo;var P=R.current.memoizedState.isDehydrated;if(P&&(sr(R,S).flags|=256),S=Bf(R,S,!1),S!==2){if(Af&&!P){R.errorRecoveryDisabledLanes|=h,hs|=h,u=4;break t}h=wi,wi=u,h!==null&&Nf(h)}u=S}if(h=!1,u!==2)continue}}if(u===1){sr(e,0),Ji(e,n,0,!0);break}t:{switch(o=e,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){Ji(o,n,ci,!Ki);break t}break;case 2:wi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(h=wf+300-mt(),10<h)){if(Ji(o,n,ci,!Ki),Nt(o,0)!==0)break t;o.timeoutHandle=hg(k_.bind(null,o,a,wi,Yl,Cf,n,ci,hs,ar,Ki,2,-0,0),h);break t}k_(o,a,wi,Yl,Cf,n,ci,hs,ar,Ki,0,-0,0)}}break}while(!0);Di(e)}function Nf(e){wi===null?wi=e:wi.push.apply(wi,e)}function k_(e,n,a,o,u,h,S,R,P,q,dt,xt,st){var ht=n.subtreeFlags;if((ht&8192||(ht&16785408)===16785408)&&(zo={stylesheets:null,count:0,unsuspend:ay},N_(n),n=ry(),n!==null)){e.cancelPendingCommit=n(K_.bind(null,e,a,o,u,S,R,P,1,xt,st)),Ji(e,h,S,!q);return}K_(e,a,o,u,S,R,P,dt,xt,st)}function ES(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!jn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ji(e,n,a,o){n&=~Rf,n&=~hs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Qt(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&jr(e,a,n)}function Zl(){return qe&6?!0:(Lo(0),!1)}function Of(){if(ge!==null){if(Ve===0)var e=ge.return;else e=ge,Xi=ls=null,Iu(e),Ys=null,fo=0,e=ge;for(;e!==null;)H_(e.alternate,e),e=e.return;ge=null}}function sr(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,VS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Of(),Ge=e,ge=a=Ca(e.current,null),be=n,Ve=0,Qn=null,Ki=!1,ir=ee(e,n),Af=!1,ar=ci=Rf=hs=wa=Ze=0,wi=wo=null,Cf=!1,n&8&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Qt(o),h=1<<u;n|=e[u],o&=~h}return Qi=n,xl(),a}function X_(e,n){pe=null,A.H=Ci,n===co?(n=sm(),Ve=3):n===nm?(n=sm(),Ve=4):Ve=n===i_?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,ge===null&&(Ze=1,Il(e,ni(n,e.current)))}function W_(){var e=A.H;return A.H=Ci,e===null?Ci:e}function q_(){var e=A.A;return A.A=yS,e}function Pf(){Ze=4,Ki||(be&4194176)!==be&&si.current!==null||(ir=!0),!(wa&134217727)&&!(hs&134217727)||Ge===null||Ji(Ge,be,ci,!1)}function Bf(e,n,a){var o=qe;qe|=2;var u=W_(),h=q_();(Ge!==e||be!==n)&&(Yl=null,sr(e,n)),n=!1;var S=Ze;t:do try{if(Ve!==0&&ge!==null){var R=ge,P=Qn;switch(Ve){case 8:Of(),S=6;break t;case 3:case 2:case 6:si.current===null&&(n=!0);var q=Ve;if(Ve=0,Qn=null,rr(e,R,P,q),a&&ir){S=0;break t}break;default:q=Ve,Ve=0,Qn=null,rr(e,R,P,q)}}TS(),S=Ze;break}catch(dt){X_(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Xi=ls=null,qe=o,A.H=u,A.A=h,ge===null&&(Ge=null,be=0,xl()),S}function TS(){for(;ge!==null;)Y_(ge)}function bS(e,n){var a=qe;qe|=2;var o=W_(),u=q_();Ge!==e||be!==n?(Yl=null,ql=mt()+500,sr(e,n)):ir=ee(e,n);t:do try{if(Ve!==0&&ge!==null){n=ge;var h=Qn;e:switch(Ve){case 1:Ve=0,Qn=null,rr(e,n,h,1);break;case 2:if(im(h)){Ve=0,Qn=null,j_(n);break}n=function(){Ve===2&&Ge===e&&(Ve=7),Di(e)},h.then(n,n);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:im(h)?(Ve=0,Qn=null,j_(n)):(Ve=0,Qn=null,rr(e,n,h,7));break;case 5:var S=null;switch(ge.tag){case 26:S=ge.memoizedState;case 5:case 27:var R=ge;if(!S||Eg(S)){Ve=0,Qn=null;var P=R.sibling;if(P!==null)ge=P;else{var q=R.return;q!==null?(ge=q,Kl(q)):ge=null}break e}}Ve=0,Qn=null,rr(e,n,h,5);break;case 6:Ve=0,Qn=null,rr(e,n,h,6);break;case 8:Of(),Ze=6;break t;default:throw Error(s(462))}}AS();break}catch(dt){X_(e,dt)}while(!0);return Xi=ls=null,A.H=o,A.A=u,qe=a,ge!==null?0:(Ge=null,be=0,xl(),Ze)}function AS(){for(;ge!==null&&!b();)Y_(ge)}function Y_(e){var n=m_(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Kl(e):ge=n}function j_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=c_(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=c_(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Iu(n);default:H_(a,n),n=ge=z_(n,Qi),n=m_(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Kl(e):ge=n}function rr(e,n,a,o){Xi=ls=null,Iu(n),Ys=null,fo=0;var u=n.return;try{if(pS(e,u,n,a,be)){Ze=1,Il(e,ni(a,e.current)),ge=null;return}}catch(h){if(u!==null)throw ge=u,h;Ze=1,Il(e,ni(a,e.current)),ge=null;return}n.flags&32768?(we||o===1?e=!0:ir||be&536870912?e=!1:(Ki=e=!0,(o===2||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Z_(n,e)):Kl(n)}function Kl(e){var n=e;do{if(n.flags&32768){Z_(n,Ki);return}e=n.return;var a=xS(n.alternate,n,Qi);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);Ze===0&&(Ze=5)}function Z_(e,n){do{var a=SS(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);Ze=6,ge=null}function K_(e,n,a,o,u,h,S,R,P,q){var dt=A.T,xt=W.p;try{W.p=2,A.T=null,RS(e,n,a,o,xt,u,h,S,R,P,q)}finally{A.T=dt,W.p=xt}}function RS(e,n,a,o,u,h,S,R){do or();while(ds!==null);if(qe&6)throw Error(s(327));var P=e.finishedWork;if(o=e.finishedLanes,P===null)return null;if(e.finishedWork=null,e.finishedLanes=0,P===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var q=P.lanes|P.childLanes;if(q|=Tu,cl(e,o,q,h,S,R),e===Ge&&(ge=Ge=null,be=0),!(P.subtreeFlags&10256)&&!(P.flags&10256)||jl||(jl=!0,Df=q,Uf=a,US(Dt,function(){return or(),null})),a=(P.flags&15990)!==0,P.subtreeFlags&15990||a?(a=A.T,A.T=null,h=W.p,W.p=2,S=qe,qe|=4,_S(e,P),D_(P,e),Qx(jf,e.containerInfo),lc=!!Yf,jf=Yf=null,e.current=P,A_(e,P.alternate,P),it(),qe=S,W.p=h,A.T=a):e.current=P,jl?(jl=!1,ds=e,Do=o):Q_(e,q),q=e.pendingLanes,q===0&&(Da=null),Gt(P.stateNode),Di(e),n!==null)for(u=e.onRecoverableError,P=0;P<n.length;P++)q=n[P],u(q.value,{componentStack:q.stack});return Do&3&&or(),q=e.pendingLanes,o&4194218&&q&42?e===Lf?Uo++:(Uo=0,Lf=e):Uo=0,Lo(0),null}function Q_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,po(n)))}function or(){if(ds!==null){var e=ds,n=Df;Df=0;var a=Ps(Do),o=A.T,u=W.p;try{if(W.p=32>a?32:a,A.T=null,ds===null)var h=!1;else{a=Uf,Uf=null;var S=ds,R=Do;if(ds=null,Do=0,qe&6)throw Error(s(331));var P=qe;if(qe|=4,P_(S.current),L_(S,S.current,R,a),qe=P,Lo(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Zt,S)}catch{}h=!0}return h}finally{W.p=u,A.T=o,Q_(e,n)}}return!1}function J_(e,n,a){n=ni(a,n),n=$u(e.stateNode,n,2),e=Ta(e,n,2),e!==null&&(Nn(e,2),Di(e))}function He(e,n,a){if(e.tag===3)J_(e,e,a);else for(;n!==null;){if(n.tag===3){J_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Da===null||!Da.has(o))){e=ni(a,e),a=e_(2),o=Ta(n,a,2),o!==null&&(n_(a,o,n,e),Nn(o,2),Di(o));break}}n=n.return}}function zf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new MS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),e=CS.bind(null,e,n,a),n.then(e,e))}function CS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ge===e&&(be&a)===a&&(Ze===4||Ze===3&&(be&62914560)===be&&300>mt()-wf?!(qe&2)&&sr(e,0):Rf|=a,ar===be&&(ar=0)),Di(e)}function $_(e,n){n===0&&(n=Re()),e=_a(e,n),e!==null&&(Nn(e,n),Di(e))}function wS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),$_(e,a)}function DS(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),$_(e,a)}function US(e,n){return Xt(e,n)}var Ql=null,lr=null,Ff=!1,Jl=!1,If=!1,ps=0;function Di(e){e!==lr&&e.next===null&&(lr===null?Ql=lr=e:lr=lr.next=e),Jl=!0,Ff||(Ff=!0,NS(LS))}function Lo(e,n){if(!If&&Jl){If=!0;do for(var a=!1,o=Ql;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Qt(42|e)+1)-1,h&=u&~(S&~R),h=h&201326677?h&201326677|1:h?h|2:0}h!==0&&(a=!0,ng(o,h))}else h=be,h=Nt(o,o===Ge?h:0),!(h&3)||ee(o,h)||(a=!0,ng(o,h));o=o.next}while(a);If=!1}}function LS(){Jl=Ff=!1;var e=0;ps!==0&&(GS()&&(e=ps),ps=0);for(var n=mt(),a=null,o=Ql;o!==null;){var u=o.next,h=tg(o,n);h===0?(o.next=null,a===null?Ql=u:a.next=u,u===null&&(lr=a)):(a=o,(e!==0||h&3)&&(Jl=!0)),o=u}Lo(e)}function tg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Qt(h),R=1<<S,P=u[S];P===-1?(!(R&a)||R&o)&&(u[S]=Xe(R,n)):P<=n&&(e.expiredLanes|=R),h&=~R}if(n=Ge,a=be,a=Nt(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&Ve===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&L(o),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||ee(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&L(o),Ps(a)){case 2:case 8:a=Ft;break;case 32:a=Dt;break;case 268435456:a=Se;break;default:a=Dt}return o=eg.bind(null,e),a=Xt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&L(o),e.callbackPriority=2,e.callbackNode=null,2}function eg(e,n){var a=e.callbackNode;if(or()&&e.callbackNode!==a)return null;var o=be;return o=Nt(e,e===Ge?o:0),o===0?null:(V_(e,o,n),tg(e,mt()),e.callbackNode!=null&&e.callbackNode===a?eg.bind(null,e):null)}function ng(e,n){if(or())return null;V_(e,n,!0)}function NS(e){kS(function(){qe&6?Xt(ot,e):e()})}function Hf(){return ps===0&&(ps=rn()),ps}function ig(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hl(""+e)}function ag(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function OS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=ig((u[ln]||null).action),S=o.submitter;S&&(n=(n=S[ln]||null)?ig(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var R=new _l("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ps!==0){var P=S?ag(u,S):new FormData(u);ju(a,{pending:!0,data:P,method:u.method,action:h},null,P)}}else typeof h=="function"&&(R.preventDefault(),P=S?ag(u,S):new FormData(u),ju(a,{pending:!0,data:P,method:u.method,action:h},h,P))},currentTarget:u}]})}}for(var Gf=0;Gf<Kp.length;Gf++){var Vf=Kp[Gf],PS=Vf.toLowerCase(),BS=Vf[0].toUpperCase()+Vf.slice(1);mi(PS,"on"+BS)}mi(Wp,"onAnimationEnd"),mi(qp,"onAnimationIteration"),mi(Yp,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi($x,"onTransitionRun"),mi(tS,"onTransitionStart"),mi(eS,"onTransitionCancel"),mi(jp,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function sg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],P=R.instance,q=R.currentTarget;if(R=R.listener,P!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=q;try{h(u)}catch(dt){Fl(dt)}u.currentTarget=null,h=P}else for(S=0;S<o.length;S++){if(R=o[S],P=R.instance,q=R.currentTarget,R=R.listener,P!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=q;try{h(u)}catch(dt){Fl(dt)}u.currentTarget=null,h=P}}}}function Te(e,n){var a=n[Bs];a===void 0&&(a=n[Bs]=new Set);var o=e+"__bubble";a.has(o)||(rg(n,e,2,!1),a.add(o))}function kf(e,n,a){var o=0;n&&(o|=4),rg(a,e,o,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Xf(e){if(!e[$l]){e[$l]=!0,Z.forEach(function(a){a!=="selectionchange"&&(zS.has(a)||kf(a,!1,e),kf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$l]||(n[$l]=!0,kf("selectionchange",!1,n))}}function rg(e,n,a,o){switch(wg(n)){case 2:var u=cy;break;case 8:u=uy;break;default:u=ih}a=u.bind(null,n,a,e),u=void 0,!fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Wf(e,n,a,o,u){var h=o;if(!(n&1)&&!(n&2)&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u||R.nodeType===8&&R.parentNode===u)break;if(S===4)for(S=o.return;S!==null;){var P=S.tag;if((P===3||P===4)&&(P=S.stateNode.containerInfo,P===u||P.nodeType===8&&P.parentNode===u))return;S=S.return}for(;R!==null;){if(S=Fi(R),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){o=h=S;continue t}R=R.parentNode}}o=o.return}yp(function(){var q=h,dt=cu(a),xt=[];t:{var st=Zp.get(e);if(st!==void 0){var ht=_l,qt=e;switch(e){case"keypress":if(pl(a)===0)break t;case"keydown":case"keyup":ht=Dx;break;case"focusin":qt="focus",ht=mu;break;case"focusout":qt="blur",ht=mu;break;case"beforeblur":case"afterblur":ht=mu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Nx;break;case Wp:case qp:case Yp:ht=yx;break;case jp:ht=Px;break;case"scroll":case"scrollend":ht=_x;break;case"wheel":ht=zx;break;case"copy":case"cut":case"paste":ht=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=Ap;break;case"toggle":case"beforetoggle":ht=Ix}var oe=(n&4)!==0,Ke=!oe&&(e==="scroll"||e==="scrollend"),K=oe?st!==null?st+"Capture":null:st;oe=[];for(var X=q,$;X!==null;){var _t=X;if($=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||$===null||K===null||(_t=Qr(X,K),_t!=null&&oe.push(Oo(X,_t,$))),Ke)break;X=X.return}0<oe.length&&(st=new ht(st,qt,null,a,dt),xt.push({event:st,listeners:oe}))}}if(!(n&7)){t:{if(st=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",st&&a!==lu&&(qt=a.relatedTarget||a.fromElement)&&(Fi(qt)||qt[zi]))break t;if((ht||st)&&(st=dt.window===dt?dt:(st=dt.ownerDocument)?st.defaultView||st.parentWindow:window,ht?(qt=a.relatedTarget||a.toElement,ht=q,qt=qt?Fi(qt):null,qt!==null&&(Ke=k(qt),oe=qt.tag,qt!==Ke||oe!==5&&oe!==27&&oe!==6)&&(qt=null)):(ht=null,qt=q),ht!==qt)){if(oe=Tp,_t="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Ap,_t="onPointerLeave",K="onPointerEnter",X="pointer"),Ke=ht==null?st:j(ht),$=qt==null?st:j(qt),st=new oe(_t,X+"leave",ht,a,dt),st.target=Ke,st.relatedTarget=$,_t=null,Fi(dt)===q&&(oe=new oe(K,X+"enter",qt,a,dt),oe.target=$,oe.relatedTarget=Ke,_t=oe),Ke=_t,ht&&qt)e:{for(oe=ht,K=qt,X=0,$=oe;$;$=cr($))X++;for($=0,_t=K;_t;_t=cr(_t))$++;for(;0<X-$;)oe=cr(oe),X--;for(;0<$-X;)K=cr(K),$--;for(;X--;){if(oe===K||K!==null&&oe===K.alternate)break e;oe=cr(oe),K=cr(K)}oe=null}else oe=null;ht!==null&&og(xt,st,ht,oe,!1),qt!==null&&Ke!==null&&og(xt,Ke,qt,oe,!0)}}t:{if(st=q?j(q):window,ht=st.nodeName&&st.nodeName.toLowerCase(),ht==="select"||ht==="input"&&st.type==="file")var Vt=Op;else if(Lp(st))if(Pp)Vt=Zx;else{Vt=Yx;var me=qx}else ht=st.nodeName,!ht||ht.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?q&&ou(q.elementType)&&(Vt=Op):Vt=jx;if(Vt&&(Vt=Vt(e,q))){Np(xt,Vt,a,dt);break t}me&&me(e,st,q),e==="focusout"&&q&&st.type==="number"&&q.memoizedProps.value!=null&&bn(st,"number",st.value)}switch(me=q?j(q):window,e){case"focusin":(Lp(me)||me.contentEditable==="true")&&(Gs=me,yu=q,so=null);break;case"focusout":so=yu=Gs=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,kp(xt,a,dt);break;case"selectionchange":if(Jx)break;case"keydown":case"keyup":kp(xt,a,dt)}var jt;if(gu)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Hs?Dp(e,a)&&($t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(Rp&&a.locale!=="ko"&&(Hs||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Hs&&(jt=Mp()):(ma=dt,hu="value"in ma?ma.value:ma.textContent,Hs=!0)),me=tc(q,$t),0<me.length&&($t=new bp($t,e,null,a,dt),xt.push({event:$t,listeners:me}),jt?$t.data=jt:(jt=Up(a),jt!==null&&($t.data=jt)))),(jt=Gx?Vx(e,a):kx(e,a))&&($t=tc(q,"onBeforeInput"),0<$t.length&&(me=new bp("onBeforeInput","beforeinput",null,a,dt),xt.push({event:me,listeners:$t}),me.data=jt)),OS(xt,e,q,a,dt)}sg(xt,n)})}function Oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function tc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Qr(e,a),u!=null&&o.unshift(Oo(e,u,h)),u=Qr(e,n),u!=null&&o.push(Oo(e,u,h))),e=e.return}return o}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function og(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var R=a,P=R.alternate,q=R.stateNode;if(R=R.tag,P!==null&&P===o)break;R!==5&&R!==26&&R!==27||q===null||(P=q,u?(q=Qr(a,h),q!=null&&S.unshift(Oo(a,q,P))):u||(q=Qr(a,h),q!=null&&S.push(Oo(a,q,P)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var FS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function lg(e){return(typeof e=="string"?e:""+e).replace(FS,`
`).replace(IS,"")}function cg(e,n){return n=lg(n),lg(e)===n}function ec(){}function Be(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(e,""+o);break;case"className":ke(e,"class",o);break;case"tabIndex":ke(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(e,a,o);break;case"style":xp(e,o,h);break;case"data":if(n!=="object"){ke(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=hl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ec);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=hl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Me(e,"popover",o);break;case"xlinkActuate":Ce(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ce(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ce(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ce(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ce(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ce(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ce(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ce(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ce(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Me(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=px.get(a)||a,Me(e,a,o))}}function qf(e,n,a,o,u,h){switch(a){case"style":xp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ec);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[ln]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Me(e,a,o)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,h,S,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),o&&Be(e,n,"src",a.src,a,null);return;case"input":Te("invalid",e);var R=h=S=u=null,P=null,q=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":S=dt;break;case"checked":P=dt;break;case"defaultChecked":q=dt;break;case"value":h=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Be(e,n,o,dt,a,null)}}Pn(e,h,R,P,q,S,u,!1),Ee(e);return;case"select":Te("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Be(e,n,u,R,a,null)}n=h,a=S,e.multiple=!!o,n!=null?Ye(e,!!o,n,!1):a!=null&&Ye(e,!!o,a,!0);return;case"textarea":Te("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Be(e,n,S,R,a,null)}zs(e,o,u,h),Ee(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(e,n,P,o,a,null)}return;case"dialog":Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(o=0;o<No.length;o++)Te(No[o],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(o=a[q],o!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,q,o,a,null)}return;default:if(ou(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&qf(e,n,dt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Be(e,n,R,o,a,null))}function HS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,R=null,P=null,q=null,dt=null;for(ht in a){var xt=a[ht];if(a.hasOwnProperty(ht)&&xt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":P=xt;default:o.hasOwnProperty(ht)||Be(e,n,ht,null,o,xt)}}for(var st in o){var ht=o[st];if(xt=a[st],o.hasOwnProperty(st)&&(ht!=null||xt!=null))switch(st){case"type":h=ht;break;case"name":u=ht;break;case"checked":q=ht;break;case"defaultChecked":dt=ht;break;case"value":S=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==xt&&Be(e,n,st,ht,o,xt)}}Oe(e,S,R,P,q,dt,h,u);return;case"select":ht=S=R=st=null;for(h in a)if(P=a[h],a.hasOwnProperty(h)&&P!=null)switch(h){case"value":break;case"multiple":ht=P;default:o.hasOwnProperty(h)||Be(e,n,h,null,o,P)}for(u in o)if(h=o[u],P=a[u],o.hasOwnProperty(u)&&(h!=null||P!=null))switch(u){case"value":st=h;break;case"defaultValue":R=h;break;case"multiple":S=h;default:h!==P&&Be(e,n,u,h,o,P)}n=R,a=S,o=ht,st!=null?Ye(e,!!a,st,!1):!!o!=!!a&&(n!=null?Ye(e,!!a,n,!0):Ye(e,!!a,a?[]:"",!1));return;case"textarea":ht=st=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Be(e,n,R,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":st=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Be(e,n,S,u,o,h)}yn(e,st,ht);return;case"option":for(var qt in a)if(st=a[qt],a.hasOwnProperty(qt)&&st!=null&&!o.hasOwnProperty(qt))switch(qt){case"selected":e.selected=!1;break;default:Be(e,n,qt,null,o,st)}for(P in o)if(st=o[P],ht=a[P],o.hasOwnProperty(P)&&st!==ht&&(st!=null||ht!=null))switch(P){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Be(e,n,P,st,o,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)st=a[oe],a.hasOwnProperty(oe)&&st!=null&&!o.hasOwnProperty(oe)&&Be(e,n,oe,null,o,st);for(q in o)if(st=o[q],ht=a[q],o.hasOwnProperty(q)&&st!==ht&&(st!=null||ht!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Be(e,n,q,st,o,ht)}return;default:if(ou(n)){for(var Ke in a)st=a[Ke],a.hasOwnProperty(Ke)&&st!==void 0&&!o.hasOwnProperty(Ke)&&qf(e,n,Ke,void 0,o,st);for(dt in o)st=o[dt],ht=a[dt],!o.hasOwnProperty(dt)||st===ht||st===void 0&&ht===void 0||qf(e,n,dt,st,o,ht);return}}for(var K in a)st=a[K],a.hasOwnProperty(K)&&st!=null&&!o.hasOwnProperty(K)&&Be(e,n,K,null,o,st);for(xt in o)st=o[xt],ht=a[xt],!o.hasOwnProperty(xt)||st===ht||st==null&&ht==null||Be(e,n,xt,st,o,ht)}var Yf=null,jf=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function ug(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kf=null;function GS(){var e=window.event;return e&&e.type==="popstate"?e===Kf?!1:(Kf=e,!0):(Kf=null,!1)}var hg=typeof setTimeout=="function"?setTimeout:void 0,VS=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,kS=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(e){return dg.resolve(null).then(e).catch(XS)}:hg;function XS(e){setTimeout(function(){throw e})}function Qf(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(o===0){e.removeChild(u),Vo(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=u}while(a);Vo(n)}function Jf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),Kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function WS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Za])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function qS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function pg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function mg(e,n,a){switch(n=nc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var ui=new Map,_g=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var $i=W.d;W.d={f:YS,r:jS,D:ZS,C:KS,L:QS,m:JS,X:ty,S:$S,M:ey};function YS(){var e=$i.f(),n=Zl();return e||n}function jS(e){var n=C(e);n!==null&&n.tag===5&&n.type==="form"?km(n):$i.r(e)}var ur=typeof document>"u"?null:document;function gg(e,n,a){var o=ur;if(o&&typeof n=="string"&&n){var u=_n(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),_g.has(u)||(_g.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",e),J(n),o.head.appendChild(n)))}}function ZS(e){$i.D(e),gg("dns-prefetch",e,null)}function KS(e,n){$i.C(e,n),gg("preconnect",e,n)}function QS(e,n,a){$i.L(e,n,a);var o=ur;if(o&&e&&n){var u='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+_n(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+_n(a.imageSizes)+'"]')):u+='[href="'+_n(e)+'"]';var h=u;switch(n){case"style":h=fr(e);break;case"script":h=hr(e)}ui.has(h)||(e=T({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(h))||n==="script"&&o.querySelector(Bo(h))||(n=o.createElement("link"),Tn(n,"link",e),J(n),o.head.appendChild(n)))}}function JS(e,n){$i.m(e,n);var a=ur;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+_n(o)+'"][href="'+_n(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=hr(e)}if(!ui.has(h)&&(e=T({rel:"modulepreload",href:e},n),ui.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(h)))return}o=a.createElement("link"),Tn(o,"link",e),J(o),a.head.appendChild(o)}}}function $S(e,n,a){$i.S(e,n,a);var o=ur;if(o&&e){var u=at(o).hoistableStyles,h=fr(e);n=n||"default";var S=u.get(h);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Po(h)))R.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(h))&&$f(e,a);var P=S=o.createElement("link");J(P),Tn(P,"link",e),P._p=new Promise(function(q,dt){P.onload=q,P.onerror=dt}),P.addEventListener("load",function(){R.loading|=1}),P.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ac(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(h,S)}}}function ty(e,n){$i.X(e,n);var a=ur;if(a&&e){var o=at(a).hoistableScripts,u=hr(e),h=o.get(u);h||(h=a.querySelector(Bo(u)),h||(e=T({src:e,async:!0},n),(n=ui.get(u))&&th(e,n),h=a.createElement("script"),J(h),Tn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function ey(e,n){$i.M(e,n);var a=ur;if(a&&e){var o=at(a).hoistableScripts,u=hr(e),h=o.get(u);h||(h=a.querySelector(Bo(u)),h||(e=T({src:e,async:!0,type:"module"},n),(n=ui.get(u))&&th(e,n),h=a.createElement("script"),J(h),Tn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function vg(e,n,a,o){var u=(u=te.current)?ic(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fr(a.href),a=at(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=fr(a.href);var h=at(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(Po(e)))&&!h._p&&(S.instance=h,S.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),h||ny(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hr(a),a=at(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function fr(e){return'href="'+_n(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function xg(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function ny(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),J(n),e.head.appendChild(n))}function hr(e){return'[src="'+_n(e)+'"]'}function Bo(e){return"script[async]"+e}function Sg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+_n(a.href)+'"]');if(o)return n.instance=o,J(o),o;var u=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),J(o),Tn(o,"style",u),ac(o,a.precedence,e),n.instance=o;case"stylesheet":u=fr(a.href);var h=e.querySelector(Po(u));if(h)return n.state.loading|=4,n.instance=h,J(h),h;o=xg(a),(u=ui.get(u))&&$f(o,u),h=(e.ownerDocument||e).createElement("link"),J(h);var S=h;return S._p=new Promise(function(R,P){S.onload=R,S.onerror=P}),Tn(h,"link",o),n.state.loading|=4,ac(h,a.precedence,e),n.instance=h;case"script":return h=hr(a.src),(u=e.querySelector(Bo(h)))?(n.instance=u,J(u),u):(o=a,(u=ui.get(h))&&(o=T({},a),th(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),J(u),Tn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(o=n.instance,n.state.loading|=4,ac(o,a.precedence,e));return n.instance}function ac(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var sc=null;function yg(e,n,a){if(sc===null){var o=new Map,u=sc=new Map;u.set(a,o)}else u=sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Za]||h[on]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var R=o.get(S);R?R.push(h):o.set(S,[h])}}return o}function Mg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function iy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Eg(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var zo=null;function ay(){}function sy(e,n,a){if(zo===null)throw Error(s(475));var o=zo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var u=fr(a.href),h=e.querySelector(Po(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=rc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,J(h);return}h=e.ownerDocument||e,a=xg(a),(u=ui.get(u))&&$f(a,u),h=h.createElement("link"),J(h);var S=h;S._p=new Promise(function(R,P){S.onload=R,S.onerror=P}),Tn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(o.count++,n=rc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function ry(){if(zo===null)throw Error(s(475));var e=zo;return e.stylesheets&&e.count===0&&eh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&eh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function rc(){if(this.count--,this.count===0){if(this.stylesheets)eh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function eh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,n.forEach(oy,e),oc=null,rc.call(e))}function oy(e,n){if(!(n.state.loading&4)){var a=oc.get(e);if(a)var o=a.get(null);else{a=new Map,oc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Fo={$$typeof:M,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function ly(e,n,a,o,u,h,S,R){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ln(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ln(0),this.hiddenUpdates=Ln(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function Tg(e,n,a,o,u,h,S,R,P,q,dt,xt){return e=new ly(e,n,a,S,R,P,q,xt),n=1,h===!0&&(n|=24),h=li(3,null,null,n),e.current=h,h.stateNode=e,n=Lu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},df(h),e}function bg(e){return e?(e=Xs,e):Xs}function Ag(e,n,a,o,u,h){u=bg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ea(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ta(e,o,n),a!==null&&(zn(a,e,n),yo(a,e,n))}function Rg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function nh(e,n){Rg(e,n),(e=e.alternate)&&Rg(e,n)}function Cg(e){if(e.tag===13){var n=_a(e,67108864);n!==null&&zn(n,e,67108864),nh(e,67108864)}}var lc=!0;function cy(e,n,a,o){var u=A.T;A.T=null;var h=W.p;try{W.p=2,ih(e,n,a,o)}finally{W.p=h,A.T=u}}function uy(e,n,a,o){var u=A.T;A.T=null;var h=W.p;try{W.p=8,ih(e,n,a,o)}finally{W.p=h,A.T=u}}function ih(e,n,a,o){if(lc){var u=ah(o);if(u===null)Wf(e,n,o,cc,a),Dg(e,o);else if(hy(u,e,n,a,o))o.stopPropagation();else if(Dg(e,o),n&4&&-1<fy.indexOf(e)){for(;u!==null;){var h=C(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Lt(h.pendingLanes);if(S!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var P=1<<31-Qt(S);R.entanglements[1]|=P,S&=~P}Di(h),!(qe&6)&&(ql=mt()+500,Lo(0))}}break;case 13:R=_a(h,2),R!==null&&zn(R,h,2),Zl(),nh(h,2)}if(h=ah(o),h===null&&Wf(e,n,o,cc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Wf(e,n,o,null,a)}}function ah(e){return e=cu(e),sh(e)}var cc=null;function sh(e){if(cc=null,e=Fi(e),e!==null){var n=k(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=St(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return cc=e,null}function wg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case ot:return 2;case Ft:return 8;case Dt:case It:return 32;case Se:return 268435456;default:return 32}default:return 32}}var rh=!1,Ua=null,La=null,Na=null,Io=new Map,Ho=new Map,Oa=[],fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dg(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=C(n),n!==null&&Cg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function hy(e,n,a,o,u){switch(n){case"focusin":return Ua=Go(Ua,e,n,a,o,u),!0;case"dragenter":return La=Go(La,e,n,a,o,u),!0;case"mouseover":return Na=Go(Na,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Io.set(h,Go(Io.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Ho.set(h,Go(Ho.get(h)||null,e,n,a,o,u)),!0}return!1}function Ug(e){var n=Fi(e.target);if(n!==null){var a=k(n);if(a!==null){if(n=a.tag,n===13){if(n=St(a),n!==null){e.blockedOn=n,ul(e.priority,function(){if(a.tag===13){var o=Jn(),u=_a(a,o);u!==null&&zn(u,a,o),nh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ah(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);lu=o,a.target.dispatchEvent(o),lu=null}else return n=C(a),n!==null&&Cg(n),e.blockedOn=a,!1;n.shift()}return!0}function Lg(e,n,a){uc(e)&&a.delete(n)}function dy(){rh=!1,Ua!==null&&uc(Ua)&&(Ua=null),La!==null&&uc(La)&&(La=null),Na!==null&&uc(Na)&&(Na=null),Io.forEach(Lg),Ho.forEach(Lg)}function fc(e,n){e.blockedOn===n&&(e.blockedOn=null,rh||(rh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,dy)))}var hc=null;function Ng(e){hc!==e&&(hc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){hc===e&&(hc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(sh(o||a)===null)continue;break}var h=C(a);h!==null&&(e.splice(n,3),n-=3,ju(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Vo(e){function n(P){return fc(P,e)}Ua!==null&&fc(Ua,e),La!==null&&fc(La,e),Na!==null&&fc(Na,e),Io.forEach(n),Ho.forEach(n);for(var a=0;a<Oa.length;a++){var o=Oa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)Ug(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[ln]||null;if(typeof h=="function")S||Ng(a);else if(S){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[ln]||null)R=S.formAction;else if(sh(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Ng(a)}}}function oh(e){this._internalRoot=e}dc.prototype.render=oh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Jn();Ag(a,o,e,n,null,null)},dc.prototype.unmount=oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&or(),Ag(e.current,2,null,e,null,null),Zl(),n[zi]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&Ug(e)}};var Og=t.version;if(Og!=="19.0.0")throw Error(s(527,Og,"19.0.0"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=nt(n),e=e!==null?Et(e):null,e=e===null?null:e.stateNode,e};var py={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Fi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{Zt=pc.inject(py),Wt=pc}catch{}}return Xo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Qm,h=Jm,S=$m,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=Tg(e,1,!1,null,null,a,o,u,h,S,R,null),e[zi]=n.current,Xf(e.nodeType===8?e.parentNode:e),new oh(n)},Xo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Qm,S=Jm,R=$m,P=null,q=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(q=a.formState)),n=Tg(e,1,!0,n,a??null,o,u,h,S,R,P,q),n.context=bg(null),a=n.current,o=Jn(),u=Ea(o),u.callback=null,Ta(a,u,o),n.current.lanes=o,Nn(n,o),Di(n),e[zi]=n.current,Xf(e),new dc(n)},Xo.version="19.0.0",Xo}var Xg;function Ey(){if(Xg)return uh.exports;Xg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),uh.exports=My(),uh.exports}var Ty=Ey();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zd="173",Pr={ROTATE:0,DOLLY:1,PAN:2},Ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},by=0,Wg=1,Ay=2,r0=1,o0=2,sa=3,Ya=0,Wn=1,ra=2,Wa=0,Br=1,qg=2,Yg=3,jg=4,Ry=5,Es=100,Cy=101,wy=102,Dy=103,Uy=104,Ly=200,Ny=201,Oy=202,Py=203,td=204,ed=205,By=206,zy=207,Fy=208,Iy=209,Hy=210,Gy=211,Vy=212,ky=213,Xy=214,nd=0,id=1,ad=2,Ir=3,sd=4,rd=5,od=6,ld=7,l0=0,Wy=1,qy=2,qa=0,Yy=1,jy=2,Zy=3,Ky=4,Qy=5,Jy=6,$y=7,c0=300,Hr=301,Gr=302,cd=303,ud=304,tu=306,fd=1e3,Cs=1001,hd=1002,Ti=1003,tM=1004,mc=1005,Ni=1006,ph=1007,ws=1008,ha=1009,u0=1010,f0=1011,nl=1012,Kd=1013,Us=1014,oa=1015,il=1016,Qd=1017,Jd=1018,Vr=1020,h0=35902,d0=1021,p0=1022,Ei=1023,m0=1024,_0=1025,zr=1026,kr=1027,g0=1028,$d=1029,v0=1030,tp=1031,ep=1033,Ic=33776,Hc=33777,Gc=33778,Vc=33779,dd=35840,pd=35841,md=35842,_d=35843,gd=36196,vd=37492,xd=37496,Sd=37808,yd=37809,Md=37810,Ed=37811,Td=37812,bd=37813,Ad=37814,Rd=37815,Cd=37816,wd=37817,Dd=37818,Ud=37819,Ld=37820,Nd=37821,kc=36492,Od=36494,Pd=36495,x0=36283,Bd=36284,zd=36285,Fd=36286,eM=3200,nM=3201,S0=0,iM=1,Xa="",hi="srgb",Xr="srgb-linear",Yc="linear",ze="srgb",dr=7680,Zg=519,aM=512,sM=513,rM=514,y0=515,oM=516,lM=517,cM=518,uM=519,Kg=35044,Qg="300 es",la=2e3,jc=2001;class Os{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,Id=180/Math.PI;function al(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function ve(r,t,i){return Math.max(t,Math.min(i,r))}function fM(r,t){return(r%t+t)%t}function mh(r,t,i){return(1-i)*r+i*t}function Wo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hM={DEG2RAD:Xc};class ue{constructor(t=0,i=0){ue.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,i,s,l,c,f,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],x=s[7],v=s[2],M=s[5],E=s[8],w=l[0],y=l[3],g=l[6],z=l[1],O=l[4],D=l[7],F=l[2],N=l[5],B=l[8];return c[0]=f*w+d*z+m*F,c[3]=f*y+d*O+m*N,c[6]=f*g+d*D+m*B,c[1]=p*w+_*z+x*F,c[4]=p*y+_*O+x*N,c[7]=p*g+_*D+x*B,c[2]=v*w+M*z+E*F,c[5]=v*y+M*O+E*N,c[8]=v*g+M*D+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=_*f-d*p,v=d*m-_*c,M=p*c-f*m,E=i*x+s*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=x*w,t[1]=(l*p-_*s)*w,t[2]=(d*s-l*f)*w,t[3]=v*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=M*w,t[7]=(s*m-p*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(_h.makeScale(t,i)),this}rotate(t){return this.premultiply(_h.makeRotation(-t)),this}translate(t,i){return this.premultiply(_h.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new he;function M0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dM(){const r=Zc("canvas");return r.style.display="block",r}const Jg={};function Dr(r){r in Jg||(Jg[r]=!0,console.warn(r))}function pM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function mM(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _M(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $g=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tv=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gM(){const r={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ze&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ze&&(l.r=Fr(l.r),l.g=Fr(l.g),l.b=Fr(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Yc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Xr]:{primaries:t,whitePoint:s,transfer:Yc,toXYZ:$g,fromXYZ:tv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:s,transfer:ze,toXYZ:$g,fromXYZ:tv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),r}const Ue=gM();function ua(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let pr;class vM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{pr===void 0&&(pr=Zc("canvas")),pr.width=t.width,pr.height=t.height;const s=pr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=pr}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ua(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ua(i[s]/255)*255):i[s]=ua(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xM=0;class E0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=al(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(gh(l[f].image)):c.push(gh(l[f]))}else c=gh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function gh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SM=0;class qn extends Os{constructor(t=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,s=Cs,l=Cs,c=Ni,f=ws,d=Ei,m=ha,p=qn.DEFAULT_ANISOTROPY,_=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=al(),this.name="",this.source=new E0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==c0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fd:t.x=t.x-Math.floor(t.x);break;case Cs:t.x=t.x<0?0:1;break;case hd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fd:t.y=t.y-Math.floor(t.y);break;case Cs:t.y=t.y<0?0:1;break;case hd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=c0;qn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,s=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],x=m[8],v=m[1],M=m[5],E=m[9],w=m[2],y=m[6],g=m[10];if(Math.abs(_-v)<.01&&Math.abs(x-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(M+1)/2,F=(g+1)/2,N=(_+v)/4,B=(x+w)/4,G=(E+y)/4;return O>D&&O>F?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=N/s,c=B/s):D>F?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=N/l,c=G/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=B/c,l=G/c),this.set(s,l,c,i),this}let z=Math.sqrt((y-E)*(y-E)+(x-w)*(x-w)+(v-_)*(v-_));return Math.abs(z)<.001&&(z=1),this.x=(y-E)/z,this.y=(x-w)/z,this.z=(v-_)/z,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends Os{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new qn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new E0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends yM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class T0 extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class MM extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3];const v=c[f+0],M=c[f+1],E=c[f+2],w=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x;return}if(d===1){t[i+0]=v,t[i+1]=M,t[i+2]=E,t[i+3]=w;return}if(x!==w||m!==v||p!==M||_!==E){let y=1-d;const g=m*v+p*M+_*E+x*w,z=g>=0?1:-1,O=1-g*g;if(O>Number.EPSILON){const F=Math.sqrt(O),N=Math.atan2(F,g*z);y=Math.sin(y*N)/F,d=Math.sin(d*N)/F}const D=d*z;if(m=m*y+v*D,p=p*y+M*D,_=_*y+E*D,x=x*y+w*D,y===1-d){const F=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=F,p*=F,_*=F,x*=F}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=c[f],v=c[f+1],M=c[f+2],E=c[f+3];return t[i]=d*E+_*x+m*M-p*v,t[i+1]=m*E+_*v+p*x-d*M,t[i+2]=p*E+_*M+d*v-m*x,t[i+3]=_*E-d*x-m*v-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),x=d(c/2),v=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*_*x+p*M*E,this._y=p*M*x-v*_*E,this._z=p*_*E+v*M*x,this._w=p*_*x-v*M*E;break;case"YXZ":this._x=v*_*x+p*M*E,this._y=p*M*x-v*_*E,this._z=p*_*E-v*M*x,this._w=p*_*x+v*M*E;break;case"ZXY":this._x=v*_*x-p*M*E,this._y=p*M*x+v*_*E,this._z=p*_*E+v*M*x,this._w=p*_*x-v*M*E;break;case"ZYX":this._x=v*_*x-p*M*E,this._y=p*M*x+v*_*E,this._z=p*_*E-v*M*x,this._w=p*_*x+v*M*E;break;case"YZX":this._x=v*_*x+p*M*E,this._y=p*M*x+v*_*E,this._z=p*_*E-v*M*x,this._w=p*_*x-v*M*E;break;case"XZY":this._x=v*_*x-p*M*E,this._y=p*M*x-v*_*E,this._z=p*_*E+v*M*x,this._w=p*_*x+v*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],x=i[10],v=s+d+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),x=Math.sin((1-i)*_)/p,v=Math.sin(i*_)/p;return this._w=f*x+this._w*v,this._x=s*x+this._x*v,this._y=l*x+this._y*v,this._z=c*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,s=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ev.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ev.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*i-c*l),x=2*(c*s-f*i);return this.x=i+m*p+f*x-d*_,this.y=s+m*_+d*p-c*x,this.z=l+m*x+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return vh.copy(this).projectOnVector(t),this.sub(vh)}reflect(t){return this.sub(vh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vh=new tt,ev=new Ns;class sl{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,xi):xi.fromBufferAttribute(c,f),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_c.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_c.copy(s.boundingBox)),_c.applyMatrix4(t.matrixWorld),this.union(_c)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),gc.subVectors(this.max,qo),mr.subVectors(t.a,qo),_r.subVectors(t.b,qo),gr.subVectors(t.c,qo),Ba.subVectors(_r,mr),za.subVectors(gr,_r),ms.subVectors(mr,gr);let i=[0,-Ba.z,Ba.y,0,-za.z,za.y,0,-ms.z,ms.y,Ba.z,0,-Ba.x,za.z,0,-za.x,ms.z,0,-ms.x,-Ba.y,Ba.x,0,-za.y,za.x,0,-ms.y,ms.x,0];return!xh(i,mr,_r,gr,gc)||(i=[1,0,0,0,1,0,0,0,1],!xh(i,mr,_r,gr,gc))?!1:(vc.crossVectors(Ba,za),i=[vc.x,vc.y,vc.z],xh(i,mr,_r,gr,gc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],xi=new tt,_c=new sl,mr=new tt,_r=new tt,gr=new tt,Ba=new tt,za=new tt,ms=new tt,qo=new tt,gc=new tt,vc=new tt,_s=new tt;function xh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){_s.fromArray(r,c);const d=l.x*Math.abs(_s.x)+l.y*Math.abs(_s.y)+l.z*Math.abs(_s.z),m=t.dot(_s),p=i.dot(_s),_=s.dot(_s);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const EM=new sl,Yo=new tt,Sh=new tt;class np{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):EM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Sh)),this.expandByPoint(Yo.copy(t.center).sub(Sh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new tt,yh=new tt,xc=new tt,Fa=new tt,Mh=new tt,Sc=new tt,Eh=new tt;class b0{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){yh.copy(t).add(i).multiplyScalar(.5),xc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(yh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(xc),d=Fa.dot(this.direction),m=-Fa.dot(xc),p=Fa.lengthSq(),_=Math.abs(1-f*f);let x,v,M,E;if(_>0)if(x=f*m-d,v=f*d-m,E=c*_,x>=0)if(v>=-E)if(v<=E){const w=1/_;x*=w,v*=w,M=x*(x+f*v+2*d)+v*(f*x+v+2*m)+p}else v=c,x=Math.max(0,-(f*v+d)),M=-x*x+v*(v+2*m)+p;else v=-c,x=Math.max(0,-(f*v+d)),M=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-f*c+d)),v=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+p):(x=Math.max(0,-(f*c+d)),v=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+v*(v+2*m)+p);else v=f>0?-c:c,x=Math.max(0,-(f*v+d)),M=-x*x+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(yh).addScaledVector(xc,v),M}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const s=ea.dot(this.direction),l=ea.dot(ea)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),_>=0?(c=(t.min.y-v.y)*_,f=(t.max.y-v.y)*_):(c=(t.max.y-v.y)*_,f=(t.min.y-v.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),x>=0?(d=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(d=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,s,l,c){Mh.subVectors(i,t),Sc.subVectors(s,t),Eh.crossVectors(Mh,Sc);let f=this.direction.dot(Eh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Fa.subVectors(this.origin,t);const m=d*this.direction.dot(Sc.crossVectors(Fa,Sc));if(m<0)return null;const p=d*this.direction.dot(Mh.cross(Fa));if(p<0||m+p>f)return null;const _=-d*Fa.dot(Eh);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,s,l,c,f,d,m,p,_,x,v,M,E,w,y){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,_,x,v,M,E,w,y)}set(t,i,s,l,c,f,d,m,p,_,x,v,M,E,w,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=f,g[9]=d,g[13]=m,g[2]=p,g[6]=_,g[10]=x,g[14]=v,g[3]=M,g[7]=E,g[11]=w,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/vr.setFromMatrixColumn(t,0).length(),c=1/vr.setFromMatrixColumn(t,1).length(),f=1/vr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const v=f*_,M=f*x,E=d*_,w=d*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=M+E*p,i[5]=v-w*p,i[9]=-d*m,i[2]=w-v*p,i[6]=E+M*p,i[10]=f*m}else if(t.order==="YXZ"){const v=m*_,M=m*x,E=p*_,w=p*x;i[0]=v+w*d,i[4]=E*d-M,i[8]=f*p,i[1]=f*x,i[5]=f*_,i[9]=-d,i[2]=M*d-E,i[6]=w+v*d,i[10]=f*m}else if(t.order==="ZXY"){const v=m*_,M=m*x,E=p*_,w=p*x;i[0]=v-w*d,i[4]=-f*x,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*_,i[9]=w-v*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const v=f*_,M=f*x,E=d*_,w=d*x;i[0]=m*_,i[4]=E*p-M,i[8]=v*p+w,i[1]=m*x,i[5]=w*p+v,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,M=f*p,E=d*m,w=d*p;i[0]=m*_,i[4]=w-v*x,i[8]=E*x+M,i[1]=x,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*x+E,i[10]=v-w*x}else if(t.order==="XZY"){const v=f*m,M=f*p,E=d*m,w=d*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=v*x+w,i[5]=f*_,i[9]=M*x-E,i[2]=E*x-M,i[6]=d*_,i[10]=w*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(TM,t,bM)}lookAt(t,i,s){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ia.crossVectors(s,$n),Ia.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ia.crossVectors(s,$n)),Ia.normalize(),yc.crossVectors($n,Ia),l[0]=Ia.x,l[4]=yc.x,l[8]=$n.x,l[1]=Ia.y,l[5]=yc.y,l[9]=$n.y,l[2]=Ia.z,l[6]=yc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],x=s[5],v=s[9],M=s[13],E=s[2],w=s[6],y=s[10],g=s[14],z=s[3],O=s[7],D=s[11],F=s[15],N=l[0],B=l[4],G=l[8],A=l[12],T=l[1],I=l[5],rt=l[9],Q=l[13],ct=l[2],ut=l[6],V=l[10],et=l[14],k=l[3],St=l[7],U=l[11],nt=l[15];return c[0]=f*N+d*T+m*ct+p*k,c[4]=f*B+d*I+m*ut+p*St,c[8]=f*G+d*rt+m*V+p*U,c[12]=f*A+d*Q+m*et+p*nt,c[1]=_*N+x*T+v*ct+M*k,c[5]=_*B+x*I+v*ut+M*St,c[9]=_*G+x*rt+v*V+M*U,c[13]=_*A+x*Q+v*et+M*nt,c[2]=E*N+w*T+y*ct+g*k,c[6]=E*B+w*I+y*ut+g*St,c[10]=E*G+w*rt+y*V+g*U,c[14]=E*A+w*Q+y*et+g*nt,c[3]=z*N+O*T+D*ct+F*k,c[7]=z*B+O*I+D*ut+F*St,c[11]=z*G+O*rt+D*V+F*U,c[15]=z*A+O*Q+D*et+F*nt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],x=t[6],v=t[10],M=t[14],E=t[3],w=t[7],y=t[11],g=t[15];return E*(+c*m*x-l*p*x-c*d*v+s*p*v+l*d*M-s*m*M)+w*(+i*m*M-i*p*v+c*f*v-l*f*M+l*p*_-c*m*_)+y*(+i*p*x-i*d*M-c*f*x+s*f*M+c*d*_-s*p*_)+g*(-l*d*_-i*m*x+i*d*v+l*f*x-s*f*v+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],x=t[9],v=t[10],M=t[11],E=t[12],w=t[13],y=t[14],g=t[15],z=x*y*p-w*v*p+w*m*M-d*y*M-x*m*g+d*v*g,O=E*v*p-_*y*p-E*m*M+f*y*M+_*m*g-f*v*g,D=_*w*p-E*x*p+E*d*M-f*w*M-_*d*g+f*x*g,F=E*x*m-_*w*m-E*d*v+f*w*v+_*d*y-f*x*y,N=i*z+s*O+l*D+c*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return t[0]=z*B,t[1]=(w*v*c-x*y*c-w*l*M+s*y*M+x*l*g-s*v*g)*B,t[2]=(d*y*c-w*m*c+w*l*p-s*y*p-d*l*g+s*m*g)*B,t[3]=(x*m*c-d*v*c-x*l*p+s*v*p+d*l*M-s*m*M)*B,t[4]=O*B,t[5]=(_*y*c-E*v*c+E*l*M-i*y*M-_*l*g+i*v*g)*B,t[6]=(E*m*c-f*y*c-E*l*p+i*y*p+f*l*g-i*m*g)*B,t[7]=(f*v*c-_*m*c+_*l*p-i*v*p-f*l*M+i*m*M)*B,t[8]=D*B,t[9]=(E*x*c-_*w*c-E*s*M+i*w*M+_*s*g-i*x*g)*B,t[10]=(f*w*c-E*d*c+E*s*p-i*w*p-f*s*g+i*d*g)*B,t[11]=(_*d*c-f*x*c-_*s*p+i*x*p+f*s*M-i*d*M)*B,t[12]=F*B,t[13]=(_*w*l-E*x*l+E*s*v-i*w*v-_*s*y+i*x*y)*B,t[14]=(E*d*l-f*w*l-E*s*m+i*w*m+f*s*y-i*d*y)*B,t[15]=(f*x*l-_*d*l+_*s*m-i*x*m-f*s*v+i*d*v)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,x=d+d,v=c*p,M=c*_,E=c*x,w=f*_,y=f*x,g=d*x,z=m*p,O=m*_,D=m*x,F=s.x,N=s.y,B=s.z;return l[0]=(1-(w+g))*F,l[1]=(M+D)*F,l[2]=(E-O)*F,l[3]=0,l[4]=(M-D)*N,l[5]=(1-(v+g))*N,l[6]=(y+z)*N,l[7]=0,l[8]=(E+O)*B,l[9]=(y-z)*B,l[10]=(1-(v+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=vr.set(l[0],l[1],l[2]).length();const f=vr.set(l[4],l[5],l[6]).length(),d=vr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Si.copy(this);const p=1/c,_=1/f,x=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=_,Si.elements[5]*=_,Si.elements[6]*=_,Si.elements[8]*=x,Si.elements[9]*=x,Si.elements[10]*=x,i.setFromRotationMatrix(Si),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=la){const m=this.elements,p=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),v=(s+l)/(s-l);let M,E;if(d===la)M=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===jc)M=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=la){const m=this.elements,p=1/(i-t),_=1/(s-l),x=1/(f-c),v=(i+t)*p,M=(s+l)*_;let E,w;if(d===la)E=(f+c)*x,w=-2*x;else if(d===jc)E=c*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const vr=new tt,Si=new Je,TM=new tt(0,0,0),bM=new tt(1,1,1),Ia=new tt,yc=new tt,$n=new tt,nv=new Je,iv=new Ns;class Pi{constructor(t=0,i=0,s=0,l=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],x=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return nv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return iv.setFromEuler(this),this.setFromQuaternion(iv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class A0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let AM=0;const av=new tt,xr=new Ns,na=new Je,Mc=new tt,jo=new tt,RM=new tt,CM=new Ns,sv=new tt(1,0,0),rv=new tt(0,1,0),ov=new tt(0,0,1),lv={type:"added"},wM={type:"removed"},Sr={type:"childadded",child:null},Th={type:"childremoved",child:null};class Dn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const t=new tt,i=new Pi,s=new Ns,l=new tt(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new he}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new A0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xr.setFromAxisAngle(t,i),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,i){return xr.setFromAxisAngle(t,i),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(sv,t)}rotateY(t){return this.rotateOnAxis(rv,t)}rotateZ(t){return this.rotateOnAxis(ov,t)}translateOnAxis(t,i){return av.copy(t).applyQuaternion(this.quaternion),this.position.add(av.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(sv,t)}translateY(t){return this.translateOnAxis(rv,t)}translateZ(t){return this.translateOnAxis(ov,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Mc.copy(t):Mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(jo,Mc,this.up):na.lookAt(Mc,jo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),xr.setFromRotationMatrix(na),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lv),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(wM),Th.child=t,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lv),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,RM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,CM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),x=f(t.shapes),v=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new tt(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new tt,ia=new tt,bh=new tt,aa=new tt,yr=new tt,Mr=new tt,cv=new tt,Ah=new tt,Rh=new tt,Ch=new tt,wh=new Qe,Dh=new Qe,Uh=new Qe;class Mi{constructor(t=new tt,i=new tt,s=new tt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),yi.subVectors(t,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){yi.subVectors(l,i),ia.subVectors(s,i),bh.subVectors(t,i);const f=yi.dot(yi),d=yi.dot(ia),m=yi.dot(bh),p=ia.dot(ia),_=ia.dot(bh),x=f*p-d*d;if(x===0)return c.set(0,0,0),null;const v=1/x,M=(p*m-d*_)*v,E=(f*_-d*m)*v;return c.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(f,aa.y),m.addScaledVector(d,aa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return wh.setScalar(0),Dh.setScalar(0),Uh.setScalar(0),wh.fromBufferAttribute(t,i),Dh.fromBufferAttribute(t,s),Uh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(wh,c.x),f.addScaledVector(Dh,c.y),f.addScaledVector(Uh,c.z),f}static isFrontFacing(t,i,s,l){return yi.subVectors(s,i),ia.subVectors(t,i),yi.cross(ia).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),yi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;yr.subVectors(l,s),Mr.subVectors(c,s),Ah.subVectors(t,s);const m=yr.dot(Ah),p=Mr.dot(Ah);if(m<=0&&p<=0)return i.copy(s);Rh.subVectors(t,l);const _=yr.dot(Rh),x=Mr.dot(Rh);if(_>=0&&x<=_)return i.copy(l);const v=m*x-_*p;if(v<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(yr,f);Ch.subVectors(t,c);const M=yr.dot(Ch),E=Mr.dot(Ch);if(E>=0&&M<=E)return i.copy(c);const w=M*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Mr,d);const y=_*E-M*x;if(y<=0&&x-_>=0&&M-E>=0)return cv.subVectors(c,l),d=(x-_)/(x-_+(M-E)),i.copy(l).addScaledVector(cv,d);const g=1/(y+w+v);return f=w*g,d=v*g,i.copy(s).addScaledVector(yr,f).addScaledVector(Mr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const R0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Lh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ae{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ue.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ue.workingColorSpace){if(t=fM(t,1),i=ve(i,0,1),s=ve(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Lh(f,c,t+1/3),this.g=Lh(f,c,t),this.b=Lh(f,c,t-1/3)}return Ue.toWorkingColorSpace(this,l),this}setStyle(t,i=hi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const s=R0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Ue.fromWorkingColorSpace(wn.copy(this),t),Math.round(ve(wn.r*255,0,255))*65536+Math.round(ve(wn.g*255,0,255))*256+Math.round(ve(wn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.fromWorkingColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,c=wn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const x=f-d;switch(p=_<=.5?x/(f+d):x/(2-f-d),f){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=hi){Ue.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,s=wn.g,l=wn.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(Ec);const s=mh(Ha.h,Ec.h,i),l=mh(Ha.s,Ec.s,i),c=mh(Ha.l,Ec.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ae;Ae.NAMES=R0;let DM=0;class rl extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Br,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=ed,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==td&&(s.blendSrc=this.blendSrc),this.blendDst!==ed&&(s.blendDst=this.blendDst),this.blendEquation!==Es&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class C0 extends rl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=l0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new tt,Tc=new ue;let UM=0;class Oi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Kg,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(t),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Wo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Wo(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Wo(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Wo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Wo(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kg&&(t.usage=this.usage),t}}class w0 extends Oi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class D0 extends Oi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Un extends Oi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let LM=0;const fi=new Je,Nh=new Dn,Er=new tt,ti=new sl,Zo=new sl,Sn=new tt;class Bi extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(M0(t)?D0:w0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new he().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,s){return fi.makeTranslation(t,i,s),this.applyMatrix4(fi),this}scale(t,i,s){return fi.makeScale(t,i,s),this.applyMatrix4(fi),this}lookAt(t){return Nh.lookAt(t),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Un(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new np);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Zo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ti.min,Zo.min),ti.expandByPoint(Sn),Sn.addVectors(ti.max,Zo.max),ti.expandByPoint(Sn)):(ti.expandByPoint(Zo.min),ti.expandByPoint(Zo.max))}ti.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Sn.fromBufferAttribute(d,p),m&&(Er.fromBufferAttribute(t,p),Sn.add(Er)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let G=0;G<s.count;G++)d[G]=new tt,m[G]=new tt;const p=new tt,_=new tt,x=new tt,v=new ue,M=new ue,E=new ue,w=new tt,y=new tt;function g(G,A,T){p.fromBufferAttribute(s,G),_.fromBufferAttribute(s,A),x.fromBufferAttribute(s,T),v.fromBufferAttribute(c,G),M.fromBufferAttribute(c,A),E.fromBufferAttribute(c,T),_.sub(p),x.sub(p),M.sub(v),E.sub(v);const I=1/(M.x*E.y-E.x*M.y);isFinite(I)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(I),y.copy(x).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(I),d[G].add(w),d[A].add(w),d[T].add(w),m[G].add(y),m[A].add(y),m[T].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let G=0,A=z.length;G<A;++G){const T=z[G],I=T.start,rt=T.count;for(let Q=I,ct=I+rt;Q<ct;Q+=3)g(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const O=new tt,D=new tt,F=new tt,N=new tt;function B(G){F.fromBufferAttribute(l,G),N.copy(F);const A=d[G];O.copy(A),O.sub(F.multiplyScalar(F.dot(A))).normalize(),D.crossVectors(N,A);const I=D.dot(m[G])<0?-1:1;f.setXYZW(G,O.x,O.y,O.z,I)}for(let G=0,A=z.length;G<A;++G){const T=z[G],I=T.start,rt=T.count;for(let Q=I,ct=I+rt;Q<ct;Q+=3)B(t.getX(Q+0)),B(t.getX(Q+1)),B(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const l=new tt,c=new tt,f=new tt,d=new tt,m=new tt,p=new tt,_=new tt,x=new tt;if(t)for(let v=0,M=t.count;v<M;v+=3){const E=t.getX(v+0),w=t.getX(v+1),y=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,y),_.subVectors(f,c),x.subVectors(l,c),_.cross(x),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),d.add(_),m.add(_),p.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),_.subVectors(f,c),x.subVectors(l,c),_.cross(x),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,x=d.normalized,v=new p.constructor(m.length*_);let M=0,E=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*_;for(let g=0;g<_;g++)v[E++]=p[M++]}return new Oi(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,x=p.length;_<x;_++){const v=p[_],M=t(v,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,v=p.length;x<v;x++){const M=p[x];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],x=c[p];for(let v=0,M=x.length;v<M;v++)_.push(x[v].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uv=new Je,gs=new b0,bc=new np,fv=new tt,Ac=new tt,Rc=new tt,Cc=new tt,Oh=new tt,wc=new tt,hv=new tt,Dc=new tt;class dn extends Dn{constructor(t=new Bi,i=new C0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){wc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],x=c[m];_!==0&&(Oh.fromBufferAttribute(x,t),f?wc.addScaledVector(Oh,_):wc.addScaledVector(Oh.sub(i),_))}i.add(wc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(c),gs.copy(t.ray).recast(t.near),!(bc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(bc,fv)===null||gs.origin.distanceToSquared(fv)>(t.far-t.near)**2))&&(uv.copy(c).invert(),gs.copy(t.ray).applyMatrix4(uv),!(s.boundingBox!==null&&gs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,gs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,v=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,w=v.length;E<w;E++){const y=v[E],g=f[y.materialIndex],z=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=z,F=O;D<F;D+=3){const N=d.getX(D),B=d.getX(D+1),G=d.getX(D+2);l=Uc(this,g,t,s,p,_,x,N,B,G),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=E,g=w;y<g;y+=3){const z=d.getX(y),O=d.getX(y+1),D=d.getX(y+2);l=Uc(this,f,t,s,p,_,x,z,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,w=v.length;E<w;E++){const y=v[E],g=f[y.materialIndex],z=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=z,F=O;D<F;D+=3){const N=D,B=D+1,G=D+2;l=Uc(this,g,t,s,p,_,x,N,B,G),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=E,g=w;y<g;y+=3){const z=y,O=y+1,D=y+2;l=Uc(this,f,t,s,p,_,x,z,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function NM(r,t,i,s,l,c,f,d){let m;if(t.side===Wn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===Ya,d),m===null)return null;Dc.copy(d),Dc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Dc);return p<i.near||p>i.far?null:{distance:p,point:Dc.clone(),object:r}}function Uc(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Ac),r.getVertexPosition(m,Rc),r.getVertexPosition(p,Cc);const _=NM(r,t,i,s,Ac,Rc,Cc,hv);if(_){const x=new tt;Mi.getBarycoord(hv,Ac,Rc,Cc,x),l&&(_.uv=Mi.getInterpolatedAttribute(l,d,m,p,x,new ue)),c&&(_.uv1=Mi.getInterpolatedAttribute(c,d,m,p,x,new ue)),f&&(_.normal=Mi.getInterpolatedAttribute(f,d,m,p,x,new tt),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new tt,materialIndex:0};Mi.getNormal(Ac,Rc,Cc,v.normal),_.face=v,_.barycoord=x}return _}class ca extends Bi{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],x=[];let v=0,M=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Un(p,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(x,2));function E(w,y,g,z,O,D,F,N,B,G,A){const T=D/B,I=F/G,rt=D/2,Q=F/2,ct=N/2,ut=B+1,V=G+1;let et=0,k=0;const St=new tt;for(let U=0;U<V;U++){const nt=U*I-Q;for(let Et=0;Et<ut;Et++){const At=Et*T-rt;St[w]=At*z,St[y]=nt*O,St[g]=ct,p.push(St.x,St.y,St.z),St[w]=0,St[y]=0,St[g]=N>0?1:-1,_.push(St.x,St.y,St.z),x.push(Et/B),x.push(1-U/G),et+=1}}for(let U=0;U<G;U++)for(let nt=0;nt<B;nt++){const Et=v+nt+ut*U,At=v+nt+ut*(U+1),W=v+(nt+1)+ut*(U+1),pt=v+(nt+1)+ut*U;m.push(Et,At,pt),m.push(At,W,pt),k+=6}d.addGroup(M,k,A),M+=k,v+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Fn(r){const t={};for(let i=0;i<r.length;i++){const s=Wr(r[i]);for(const l in s)t[l]=s[l]}return t}function OM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function U0(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const PM={clone:Wr,merge:Fn};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends rl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=zM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=OM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class L0 extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=la}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new tt,dv=new ue,pv=new ue;class di extends L0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Id*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Id*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,dv,pv),i.subVectors(pv,dv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Xc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Tr=-90,br=1;class FM extends Dn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(Tr,br,t,i);l.layers=this.layers,this.add(l);const c=new di(Tr,br,t,i);c.layers=this.layers,this.add(c);const f=new di(Tr,br,t,i);f.layers=this.layers,this.add(f);const d=new di(Tr,br,t,i);d.layers=this.layers,this.add(d);const m=new di(Tr,br,t,i);m.layers=this.layers,this.add(m);const p=new di(Tr,br,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===la)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(x,v,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class N0 extends qn{constructor(t,i,s,l,c,f,d,m,p,_){t=t!==void 0?t:[],i=i!==void 0?i:Hr,super(t,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class IM extends Ls{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new N0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ni}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ca(5,5,5),c=new ja({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:Wa});c.uniforms.tEquirect.value=i;const f=new dn(l,c),d=i.minFilter;return i.minFilter===ws&&(i.minFilter=Ni),new FM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Lr extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HM={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),g=this._getHandJoint(p,w);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=_.position.distanceTo(x.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(HM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Lr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class ip{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Ae(t),this.near=i,this.far=s}clone(){return new ip(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class GM extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bh=new tt,VM=new tt,kM=new he;class Va{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Bh.subVectors(s,i).cross(VM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Bh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||kM.getNormalMatrix(t),l=this.coplanarPoint(Bh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new np,Lc=new tt;class ap{constructor(t=new Va,i=new Va,s=new Va,l=new Va,c=new Va,f=new Va){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=la){const s=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],m=l[3],p=l[4],_=l[5],x=l[6],v=l[7],M=l[8],E=l[9],w=l[10],y=l[11],g=l[12],z=l[13],O=l[14],D=l[15];if(s[0].setComponents(m-c,v-p,y-M,D-g).normalize(),s[1].setComponents(m+c,v+p,y+M,D+g).normalize(),s[2].setComponents(m+f,v+_,y+E,D+z).normalize(),s[3].setComponents(m-f,v-_,y-E,D-z).normalize(),s[4].setComponents(m-d,v-x,y-w,D-O).normalize(),i===la)s[5].setComponents(m+d,v+x,y+w,D+O).normalize();else if(i===jc)s[5].setComponents(d,x,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Lc.x=l.normal.x>0?t.max.x:t.min.x,Lc.y=l.normal.y>0?t.max.y:t.min.y,Lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O0 extends qn{constructor(t,i,s,l,c,f,d,m,p,_=zr){if(_!==zr&&_!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===zr&&(s=Us),s===void 0&&_===kr&&(s=Vr),super(null,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Ti,this.minFilter=m!==void 0?m:Ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class el extends Bi{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],x=[],v=[],M=[];let E=0;const w=[],y=s/2;let g=0;z(),f===!1&&(t>0&&O(!0),i>0&&O(!1)),this.setIndex(_),this.setAttribute("position",new Un(x,3)),this.setAttribute("normal",new Un(v,3)),this.setAttribute("uv",new Un(M,2));function z(){const D=new tt,F=new tt;let N=0;const B=(i-t)/s;for(let G=0;G<=c;G++){const A=[],T=G/c,I=T*(i-t)+t;for(let rt=0;rt<=l;rt++){const Q=rt/l,ct=Q*m+d,ut=Math.sin(ct),V=Math.cos(ct);F.x=I*ut,F.y=-T*s+y,F.z=I*V,x.push(F.x,F.y,F.z),D.set(ut,B,V).normalize(),v.push(D.x,D.y,D.z),M.push(Q,1-T),A.push(E++)}w.push(A)}for(let G=0;G<l;G++)for(let A=0;A<c;A++){const T=w[A][G],I=w[A+1][G],rt=w[A+1][G+1],Q=w[A][G+1];(t>0||A!==0)&&(_.push(T,I,Q),N+=3),(i>0||A!==c-1)&&(_.push(I,rt,Q),N+=3)}p.addGroup(g,N,0),g+=N}function O(D){const F=E,N=new ue,B=new tt;let G=0;const A=D===!0?t:i,T=D===!0?1:-1;for(let rt=1;rt<=l;rt++)x.push(0,y*T,0),v.push(0,T,0),M.push(.5,.5),E++;const I=E;for(let rt=0;rt<=l;rt++){const ct=rt/l*m+d,ut=Math.cos(ct),V=Math.sin(ct);B.x=A*V,B.y=y*T,B.z=A*ut,x.push(B.x,B.y,B.z),v.push(0,T,0),N.x=ut*.5+.5,N.y=V*.5*T+.5,M.push(N.x,N.y),E++}for(let rt=0;rt<l;rt++){const Q=F+rt,ct=I+rt;D===!0?_.push(ct,ct+1,Q):_.push(ct+1,ct,Q),G+=3}p.addGroup(g,G,D===!0?1:2),g+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ol extends Bi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,x=t/d,v=i/m,M=[],E=[],w=[],y=[];for(let g=0;g<_;g++){const z=g*v-f;for(let O=0;O<p;O++){const D=O*x-c;E.push(D,-z,0),w.push(0,0,1),y.push(O/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let z=0;z<d;z++){const O=z+p*g,D=z+p*(g+1),F=z+1+p*(g+1),N=z+1+p*g;M.push(O,D,N),M.push(D,F,N)}this.setIndex(M),this.setAttribute("position",new Un(E,3)),this.setAttribute("normal",new Un(w,3)),this.setAttribute("uv",new Un(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.widthSegments,t.heightSegments)}}class sp extends Bi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const _=[],x=new tt,v=new tt,M=[],E=[],w=[],y=[];for(let g=0;g<=s;g++){const z=[],O=g/s;let D=0;g===0&&f===0?D=.5/i:g===s&&m===Math.PI&&(D=-.5/i);for(let F=0;F<=i;F++){const N=F/i;x.x=-t*Math.cos(l+N*c)*Math.sin(f+O*d),x.y=t*Math.cos(f+O*d),x.z=t*Math.sin(l+N*c)*Math.sin(f+O*d),E.push(x.x,x.y,x.z),v.copy(x).normalize(),w.push(v.x,v.y,v.z),y.push(N+D,1-O),z.push(p++)}_.push(z)}for(let g=0;g<s;g++)for(let z=0;z<i;z++){const O=_[g][z+1],D=_[g][z],F=_[g+1][z],N=_[g+1][z+1];(g!==0||f>0)&&M.push(O,D,N),(g!==s-1||m<Math.PI)&&M.push(D,F,N)}this.setIndex(M),this.setAttribute("position",new Un(E,3)),this.setAttribute("normal",new Un(w,3)),this.setAttribute("uv",new Un(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rp extends Bi{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],d=[],m=[],p=[],_=new tt,x=new tt,v=new tt;for(let M=0;M<=s;M++)for(let E=0;E<=l;E++){const w=E/l*c,y=M/s*Math.PI*2;x.x=(t+i*Math.cos(y))*Math.cos(w),x.y=(t+i*Math.cos(y))*Math.sin(w),x.z=i*Math.sin(y),d.push(x.x,x.y,x.z),_.x=t*Math.cos(w),_.y=t*Math.sin(w),v.subVectors(x,_).normalize(),m.push(v.x,v.y,v.z),p.push(E/l),p.push(M/s)}for(let M=1;M<=s;M++)for(let E=1;E<=l;E++){const w=(l+1)*M+E-1,y=(l+1)*(M-1)+E-1,g=(l+1)*(M-1)+E,z=(l+1)*M+E;f.push(w,y,z),f.push(y,g,z)}this.setIndex(f),this.setAttribute("position",new Un(d,3)),this.setAttribute("normal",new Un(m,3)),this.setAttribute("uv",new Un(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rp(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ko extends rl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=S0,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class XM extends rl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class WM extends rl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class P0 extends Dn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const zh=new Je,mv=new tt,_v=new tt;class qM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ap,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;mv.setFromMatrixPosition(t.matrixWorld),i.position.copy(mv),_v.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(_v),i.updateMatrixWorld(),zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class B0 extends L0{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class YM extends qM{constructor(){super(new B0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jM extends P0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new YM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ZM extends P0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class KM extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class gv{constructor(t=1,i=0,s=0){return this.radius=t,this.phi=i,this.theta=s,this}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class QM extends Os{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function vv(r,t,i,s){const l=JM(s);switch(i){case d0:return r*t;case m0:return r*t;case _0:return r*t*2;case g0:return r*t/l.components*l.byteLength;case $d:return r*t/l.components*l.byteLength;case v0:return r*t*2/l.components*l.byteLength;case tp:return r*t*2/l.components*l.byteLength;case p0:return r*t*3/l.components*l.byteLength;case Ei:return r*t*4/l.components*l.byteLength;case ep:return r*t*4/l.components*l.byteLength;case Ic:case Hc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Gc:case Vc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pd:case _d:return Math.max(r,16)*Math.max(t,8)/4;case dd:case md:return Math.max(r,8)*Math.max(t,8)/2;case gd:case vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Md:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case wd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ld:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case kc:case Od:case Pd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case x0:case Bd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case zd:case Fd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JM(r){switch(r){case ha:case u0:return{byteLength:1,components:1};case nl:case f0:case il:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case Us:case Kd:case oa:return{byteLength:4,components:1};case h0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function z0(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function $M(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,x=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,m,p){const _=m.array,x=m.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,_);else{x.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<x.length;M++){const E=x[v],w=x[M];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++v,x[v]=w)}x.length=v+1;for(let M=0,E=x.length;M<E;M++){const w=x[M];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var tE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eE=`#ifdef USE_ALPHAHASH
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
#endif`,nE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rE=`#ifdef USE_AOMAP
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
#endif`,oE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lE=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dE=`#ifdef USE_IRIDESCENCE
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
#endif`,pE=`#ifdef USE_BUMPMAP
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
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,EE=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,TE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bE=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DE="gl_FragColor = linearToOutputTexel( gl_FragColor );",UE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GE=`#ifdef USE_GRADIENTMAP
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
}`,VE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WE=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,qE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,JE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$E=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cT=`#if defined( USE_POINTS_UV )
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
#endif`,uT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mT=`#ifdef USE_MORPHTARGETS
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
#endif`,_T=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MT=`#ifdef USE_NORMALMAP
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
#endif`,ET=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,BT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,zT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,FT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,IT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HT=`#ifdef USE_SKINNING
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
#endif`,GT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VT=`#ifdef USE_SKINNING
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
#endif`,kT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YT=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jT=`#ifdef USE_TRANSMISSION
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
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tb=`uniform sampler2D t2D;
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
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`#include <common>
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
}`,rb=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ob=`#define DISTANCE
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
}`,lb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`uniform float scale;
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
}`,hb=`uniform vec3 diffuse;
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
}`,db=`#include <common>
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#define LAMBERT
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
}`,_b=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,gb=`#define MATCAP
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
}`,vb=`#define MATCAP
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
}`,xb=`#define NORMAL
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
}`,Sb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yb=`#define PHONG
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
}`,Mb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Eb=`#define STANDARD
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
}`,Tb=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,bb=`#define TOON
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
}`,Ab=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Rb=`uniform float size;
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
}`,Cb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
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
}`,Db=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ub=`uniform float rotation;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:tE,alphahash_pars_fragment:eE,alphamap_fragment:nE,alphamap_pars_fragment:iE,alphatest_fragment:aE,alphatest_pars_fragment:sE,aomap_fragment:rE,aomap_pars_fragment:oE,batching_pars_vertex:lE,batching_vertex:cE,begin_vertex:uE,beginnormal_vertex:fE,bsdfs:hE,iridescence_fragment:dE,bumpmap_pars_fragment:pE,clipping_planes_fragment:mE,clipping_planes_pars_fragment:_E,clipping_planes_pars_vertex:gE,clipping_planes_vertex:vE,color_fragment:xE,color_pars_fragment:SE,color_pars_vertex:yE,color_vertex:ME,common:EE,cube_uv_reflection_fragment:TE,defaultnormal_vertex:bE,displacementmap_pars_vertex:AE,displacementmap_vertex:RE,emissivemap_fragment:CE,emissivemap_pars_fragment:wE,colorspace_fragment:DE,colorspace_pars_fragment:UE,envmap_fragment:LE,envmap_common_pars_fragment:NE,envmap_pars_fragment:OE,envmap_pars_vertex:PE,envmap_physical_pars_fragment:qE,envmap_vertex:BE,fog_vertex:zE,fog_pars_vertex:FE,fog_fragment:IE,fog_pars_fragment:HE,gradientmap_pars_fragment:GE,lightmap_pars_fragment:VE,lights_lambert_fragment:kE,lights_lambert_pars_fragment:XE,lights_pars_begin:WE,lights_toon_fragment:YE,lights_toon_pars_fragment:jE,lights_phong_fragment:ZE,lights_phong_pars_fragment:KE,lights_physical_fragment:QE,lights_physical_pars_fragment:JE,lights_fragment_begin:$E,lights_fragment_maps:tT,lights_fragment_end:eT,logdepthbuf_fragment:nT,logdepthbuf_pars_fragment:iT,logdepthbuf_pars_vertex:aT,logdepthbuf_vertex:sT,map_fragment:rT,map_pars_fragment:oT,map_particle_fragment:lT,map_particle_pars_fragment:cT,metalnessmap_fragment:uT,metalnessmap_pars_fragment:fT,morphinstance_vertex:hT,morphcolor_vertex:dT,morphnormal_vertex:pT,morphtarget_pars_vertex:mT,morphtarget_vertex:_T,normal_fragment_begin:gT,normal_fragment_maps:vT,normal_pars_fragment:xT,normal_pars_vertex:ST,normal_vertex:yT,normalmap_pars_fragment:MT,clearcoat_normal_fragment_begin:ET,clearcoat_normal_fragment_maps:TT,clearcoat_pars_fragment:bT,iridescence_pars_fragment:AT,opaque_fragment:RT,packing:CT,premultiplied_alpha_fragment:wT,project_vertex:DT,dithering_fragment:UT,dithering_pars_fragment:LT,roughnessmap_fragment:NT,roughnessmap_pars_fragment:OT,shadowmap_pars_fragment:PT,shadowmap_pars_vertex:BT,shadowmap_vertex:zT,shadowmask_pars_fragment:FT,skinbase_vertex:IT,skinning_pars_vertex:HT,skinning_vertex:GT,skinnormal_vertex:VT,specularmap_fragment:kT,specularmap_pars_fragment:XT,tonemapping_fragment:WT,tonemapping_pars_fragment:qT,transmission_fragment:YT,transmission_pars_fragment:jT,uv_pars_fragment:ZT,uv_pars_vertex:KT,uv_vertex:QT,worldpos_vertex:JT,background_vert:$T,background_frag:tb,backgroundCube_vert:eb,backgroundCube_frag:nb,cube_vert:ib,cube_frag:ab,depth_vert:sb,depth_frag:rb,distanceRGBA_vert:ob,distanceRGBA_frag:lb,equirect_vert:cb,equirect_frag:ub,linedashed_vert:fb,linedashed_frag:hb,meshbasic_vert:db,meshbasic_frag:pb,meshlambert_vert:mb,meshlambert_frag:_b,meshmatcap_vert:gb,meshmatcap_frag:vb,meshnormal_vert:xb,meshnormal_frag:Sb,meshphong_vert:yb,meshphong_frag:Mb,meshphysical_vert:Eb,meshphysical_frag:Tb,meshtoon_vert:bb,meshtoon_frag:Ab,points_vert:Rb,points_frag:Cb,shadow_vert:wb,shadow_frag:Db,sprite_vert:Ub,sprite_frag:Lb},Ot={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Li={basic:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ae(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Fn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Fn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ae(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Fn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Fn([Ot.points,Ot.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Fn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Fn([Ot.common,Ot.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Fn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Fn([Ot.sprite,Ot.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Fn([Ot.common,Ot.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Fn([Ot.lights,Ot.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Li.physical={uniforms:Fn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Nc={r:0,b:0,g:0},xs=new Pi,Nb=new Je;function Ob(r,t,i,s,l,c,f){const d=new Ae(0);let m=c===!0?0:1,p,_,x=null,v=0,M=null;function E(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function w(O){let D=!1;const F=E(O);F===null?g(d,m):F&&F.isColor&&(g(F,1),D=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,f):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(O,D){const F=E(D);F&&(F.isCubeTexture||F.mapping===tu)?(_===void 0&&(_=new dn(new ca(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Wr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(N,B,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),xs.copy(D.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),_.material.uniforms.envMap.value=F,_.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(xs)),_.material.toneMapped=Ue.getTransfer(F.colorSpace)!==ze,(x!==F||v!==F.version||M!==r.toneMapping)&&(_.material.needsUpdate=!0,x=F,v=F.version,M=r.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new dn(new ol(2,2),new ja({name:"BackgroundMaterial",uniforms:Wr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(F.colorSpace)!==ze,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||v!==F.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,x=F,v=F.version,M=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function g(O,D){O.getRGB(Nc,U0(r)),s.buffers.color.setClear(Nc.r,Nc.g,Nc.b,D,f)}function z(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,g(d,m)},render:w,addToRenderList:y,dispose:z}}function Pb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function d(T,I,rt,Q,ct){let ut=!1;const V=x(Q,rt,I);c!==V&&(c=V,p(c.object)),ut=M(T,Q,rt,ct),ut&&E(T,Q,rt,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,D(T,I,rt,Q),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return r.createVertexArray()}function p(T){return r.bindVertexArray(T)}function _(T){return r.deleteVertexArray(T)}function x(T,I,rt){const Q=rt.wireframe===!0;let ct=s[T.id];ct===void 0&&(ct={},s[T.id]=ct);let ut=ct[I.id];ut===void 0&&(ut={},ct[I.id]=ut);let V=ut[Q];return V===void 0&&(V=v(m()),ut[Q]=V),V}function v(T){const I=[],rt=[],Q=[];for(let ct=0;ct<i;ct++)I[ct]=0,rt[ct]=0,Q[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:rt,attributeDivisors:Q,object:T,attributes:{},index:null}}function M(T,I,rt,Q){const ct=c.attributes,ut=I.attributes;let V=0;const et=rt.getAttributes();for(const k in et)if(et[k].location>=0){const U=ct[k];let nt=ut[k];if(nt===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(nt=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(nt=T.instanceColor)),U===void 0||U.attribute!==nt||nt&&U.data!==nt.data)return!0;V++}return c.attributesNum!==V||c.index!==Q}function E(T,I,rt,Q){const ct={},ut=I.attributes;let V=0;const et=rt.getAttributes();for(const k in et)if(et[k].location>=0){let U=ut[k];U===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(U=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(U=T.instanceColor));const nt={};nt.attribute=U,U&&U.data&&(nt.data=U.data),ct[k]=nt,V++}c.attributes=ct,c.attributesNum=V,c.index=Q}function w(){const T=c.newAttributes;for(let I=0,rt=T.length;I<rt;I++)T[I]=0}function y(T){g(T,0)}function g(T,I){const rt=c.newAttributes,Q=c.enabledAttributes,ct=c.attributeDivisors;rt[T]=1,Q[T]===0&&(r.enableVertexAttribArray(T),Q[T]=1),ct[T]!==I&&(r.vertexAttribDivisor(T,I),ct[T]=I)}function z(){const T=c.newAttributes,I=c.enabledAttributes;for(let rt=0,Q=I.length;rt<Q;rt++)I[rt]!==T[rt]&&(r.disableVertexAttribArray(rt),I[rt]=0)}function O(T,I,rt,Q,ct,ut,V){V===!0?r.vertexAttribIPointer(T,I,rt,ct,ut):r.vertexAttribPointer(T,I,rt,Q,ct,ut)}function D(T,I,rt,Q){w();const ct=Q.attributes,ut=rt.getAttributes(),V=I.defaultAttributeValues;for(const et in ut){const k=ut[et];if(k.location>=0){let St=ct[et];if(St===void 0&&(et==="instanceMatrix"&&T.instanceMatrix&&(St=T.instanceMatrix),et==="instanceColor"&&T.instanceColor&&(St=T.instanceColor)),St!==void 0){const U=St.normalized,nt=St.itemSize,Et=t.get(St);if(Et===void 0)continue;const At=Et.buffer,W=Et.type,pt=Et.bytesPerElement,vt=W===r.INT||W===r.UNSIGNED_INT||St.gpuType===Kd;if(St.isInterleavedBufferAttribute){const bt=St.data,Ct=bt.stride,Yt=St.offset;if(bt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<k.locationSize;Ut++)g(k.location+Ut,bt.meshPerAttribute);T.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Ut=0;Ut<k.locationSize;Ut++)y(k.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,At);for(let Ut=0;Ut<k.locationSize;Ut++)O(k.location+Ut,nt/k.locationSize,W,U,Ct*pt,(Yt+nt/k.locationSize*Ut)*pt,vt)}else{if(St.isInstancedBufferAttribute){for(let bt=0;bt<k.locationSize;bt++)g(k.location+bt,St.meshPerAttribute);T.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let bt=0;bt<k.locationSize;bt++)y(k.location+bt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let bt=0;bt<k.locationSize;bt++)O(k.location+bt,nt/k.locationSize,W,U,nt*pt,nt/k.locationSize*bt*pt,vt)}}else if(V!==void 0){const U=V[et];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(k.location,U);break;case 3:r.vertexAttrib3fv(k.location,U);break;case 4:r.vertexAttrib4fv(k.location,U);break;default:r.vertexAttrib1fv(k.location,U)}}}}z()}function F(){G();for(const T in s){const I=s[T];for(const rt in I){const Q=I[rt];for(const ct in Q)_(Q[ct].object),delete Q[ct];delete I[rt]}delete s[T]}}function N(T){if(s[T.id]===void 0)return;const I=s[T.id];for(const rt in I){const Q=I[rt];for(const ct in Q)_(Q[ct].object),delete Q[ct];delete I[rt]}delete s[T.id]}function B(T){for(const I in s){const rt=s[I];if(rt[T.id]===void 0)continue;const Q=rt[T.id];for(const ct in Q)_(Q[ct].object),delete Q[ct];delete rt[T.id]}}function G(){A(),f=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:A,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:z}}function Bb(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,x){x!==0&&(r.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function d(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let M=0;for(let E=0;E<x;E++)M+=_[E];i.update(M,s,1)}function m(p,_,x,v){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],_[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,v,0,x);let E=0;for(let w=0;w<x;w++)E+=_[w]*v[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function zb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Ei&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const G=B===il&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ha&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==oa&&!G)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:z,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:F,maxSamples:N}}function Fb(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Va,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||s!==0||l;return l=v,s=x.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){i=_(x,v,0)},this.setState=function(x,v,M){const E=x.clippingPlanes,w=x.clipIntersection,y=x.clipShadows,g=r.get(x);if(!l||E===null||E.length===0||c&&!y)c?_(null):p();else{const z=c?0:s,O=z*4;let D=g.clippingState||null;m.value=D,D=_(E,v,O,M);for(let F=0;F!==O;++F)D[F]=i[F];g.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,v,M,E){const w=x!==null?x.length:0;let y=null;if(w!==0){if(y=m.value,E!==!0||y===null){const g=M+w*4,z=v.matrixWorldInverse;d.getNormalMatrix(z),(y===null||y.length<g)&&(y=new Float32Array(g));for(let O=0,D=M;O!==w;++O,D+=4)f.copy(x[O]).applyMatrix4(z,d),f.normal.toArray(y,D),y[D+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function Ib(r){let t=new WeakMap;function i(f,d){return d===cd?f.mapping=Hr:d===ud&&(f.mapping=Gr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===cd||d===ud)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new IM(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Nr=4,xv=[.125,.215,.35,.446,.526,.582],Ts=20,Fh=new B0,Sv=new Ae;let Ih=null,Hh=0,Gh=0,Vh=!1;const ys=(1+Math.sqrt(5))/2,Ar=1/ys,yv=[new tt(-ys,Ar,0),new tt(ys,Ar,0),new tt(-Ar,0,ys),new tt(Ar,0,ys),new tt(0,ys,-Ar),new tt(0,ys,Ar),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)];class Mv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){Ih=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ih,Hh,Gh),this._renderer.xr.enabled=Vh,t.scissorTest=!1,Oc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Hr||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ih=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:il,format:Ei,colorSpace:Xr,depthBuffer:!1},l=Ev(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ev(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hb(c)),this._blurMaterial=Gb(c,t,i)}return l}_compileMaterial(t){const i=new dn(this._lodPlanes[0],t);this._renderer.compile(i,Fh)}_sceneToCubeUV(t,i,s,l){const d=new di(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(Sv),_.toneMapping=qa,_.autoClear=!1;const M=new C0({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),E=new dn(new ca,M);let w=!1;const y=t.background;y?y.isColor&&(M.color.copy(y),t.background=null,w=!0):(M.color.copy(Sv),w=!0);for(let g=0;g<6;g++){const z=g%3;z===0?(d.up.set(0,m[g],0),d.lookAt(p[g],0,0)):z===1?(d.up.set(0,0,m[g]),d.lookAt(0,p[g],0)):(d.up.set(0,m[g],0),d.lookAt(0,0,p[g]));const O=this._cubeSize;Oc(l,z*O,g>2?O:0,O,O),_.setRenderTarget(l),w&&_.render(E,d),_.render(t,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=v,_.autoClear=x,t.background=y}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Hr||t.mapping===Gr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=bv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new dn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Oc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Fh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=yv[(l-c-1)%yv.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new dn(this._lodPlanes[l],p),v=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ts-1),w=c/E,y=isFinite(c)?1+Math.floor(_*w):Ts;y>Ts&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ts}`);const g=[];let z=0;for(let B=0;B<Ts;++B){const G=B/w,A=Math.exp(-G*G/2);g.push(A),B===0?z+=A:B<y&&(z+=2*A)}for(let B=0;B<g.length;B++)g[B]=g[B]/z;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:O}=this;v.dTheta.value=E,v.mipInt.value=O-s;const D=this._sizeLods[l],F=3*D*(l>O-Nr?l-O+Nr:0),N=4*(this._cubeSize-D);Oc(i,F,N,3*D,2*D),m.setRenderTarget(i),m.render(x,Fh)}}function Hb(r){const t=[],i=[],s=[];let l=r;const c=r-Nr+1+xv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>r-Nr?m=xv[f-r+Nr-1]:f===0&&(m=0),s.push(m);const p=1/(d-2),_=-p,x=1+p,v=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,E=6,w=3,y=2,g=1,z=new Float32Array(w*E*M),O=new Float32Array(y*E*M),D=new Float32Array(g*E*M);for(let N=0;N<M;N++){const B=N%3*2/3-1,G=N>2?0:-1,A=[B,G,0,B+2/3,G,0,B+2/3,G+1,0,B,G,0,B+2/3,G+1,0,B,G+1,0];z.set(A,w*E*N),O.set(v,y*E*N);const T=[N,N,N,N,N,N];D.set(T,g*E*N)}const F=new Bi;F.setAttribute("position",new Oi(z,w)),F.setAttribute("uv",new Oi(O,y)),F.setAttribute("faceIndex",new Oi(D,g)),t.push(F),l>Nr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Ev(r,t,i){const s=new Ls(r,t,i);return s.texture.mapping=tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Oc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Gb(r,t,i){const s=new Float32Array(Ts),l=new tt(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Tv(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function bv(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:op(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function op(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===cd||m===ud,_=m===Hr||m===Gr;if(p||_){let x=t.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new Mv(r)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Mv(r)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function kb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Dr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Xb(r,t,i,s){const l={},c=new WeakMap;function f(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const M=c.get(v);M&&(t.remove(M),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const M in v)t.update(v[M],r.ARRAY_BUFFER)}function p(x){const v=[],M=x.index,E=x.attributes.position;let w=0;if(M!==null){const z=M.array;w=M.version;for(let O=0,D=z.length;O<D;O+=3){const F=z[O+0],N=z[O+1],B=z[O+2];v.push(F,N,N,B,B,F)}}else if(E!==void 0){const z=E.array;w=E.version;for(let O=0,D=z.length/3-1;O<D;O+=3){const F=O+0,N=O+1,B=O+2;v.push(F,N,N,B,B,F)}}else return;const y=new(M0(v)?D0:w0)(v,1);y.version=w;const g=c.get(x);g&&t.remove(g),c.set(x,y)}function _(x){const v=c.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:_}}function Wb(r,t,i){let s;function l(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function m(v,M){r.drawElements(s,M,c,v*f),i.update(M,s,1)}function p(v,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,v*f,E),i.update(M,s,E))}function _(v,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,v,0,E);let y=0;for(let g=0;g<E;g++)y+=M[g];i.update(y,s,1)}function x(v,M,E,w){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<v.length;g++)p(v[g]/f,M[g],w[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,v,0,w,0,E);let g=0;for(let z=0;z<E;z++)g+=M[z]*w[z];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function qb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Yb(r,t,i){const s=new WeakMap,l=new Qe;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let v=s.get(d);if(v===void 0||v.count!==x){let T=function(){G.dispose(),s.delete(d),d.removeEventListener("dispose",T)};var M=T;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let F=d.attributes.position.count*D,N=1;F>t.maxTextureSize&&(N=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const B=new Float32Array(F*N*4*x),G=new T0(B,F,N,x);G.type=oa,G.needsUpdate=!0;const A=D*4;for(let I=0;I<x;I++){const rt=g[I],Q=z[I],ct=O[I],ut=F*N*4*I;for(let V=0;V<rt.count;V++){const et=V*A;E===!0&&(l.fromBufferAttribute(rt,V),B[ut+et+0]=l.x,B[ut+et+1]=l.y,B[ut+et+2]=l.z,B[ut+et+3]=0),w===!0&&(l.fromBufferAttribute(Q,V),B[ut+et+4]=l.x,B[ut+et+5]=l.y,B[ut+et+6]=l.z,B[ut+et+7]=0),y===!0&&(l.fromBufferAttribute(ct,V),B[ut+et+8]=l.x,B[ut+et+9]=l.y,B[ut+et+10]=l.z,B[ut+et+11]=ct.itemSize===4?l.w:1)}}v={count:x,texture:G,size:new ue(F,N)},s.set(d,v),d.addEventListener("dispose",T)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const w=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function jb(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,x=t.get(m,_);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const F0=new qn,Av=new O0(1,1),I0=new T0,H0=new MM,G0=new N0,Rv=[],Cv=[],wv=new Float32Array(16),Dv=new Float32Array(9),Uv=new Float32Array(4);function qr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Rv[l];if(c===void 0&&(c=new Float32Array(l),Rv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function pn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function mn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function eu(r,t){let i=Cv[t];i===void 0&&(i=new Int32Array(t),Cv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Zb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Kb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2fv(this.addr,t),mn(i,t)}}function Qb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;r.uniform3fv(this.addr,t),mn(i,t)}}function Jb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4fv(this.addr,t),mn(i,t)}}function $b(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;Uv.set(s),r.uniformMatrix2fv(this.addr,!1,Uv),mn(i,s)}}function tA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;Dv.set(s),r.uniformMatrix3fv(this.addr,!1,Dv),mn(i,s)}}function eA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;wv.set(s),r.uniformMatrix4fv(this.addr,!1,wv),mn(i,s)}}function nA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function iA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2iv(this.addr,t),mn(i,t)}}function aA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3iv(this.addr,t),mn(i,t)}}function sA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4iv(this.addr,t),mn(i,t)}}function rA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function oA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2uiv(this.addr,t),mn(i,t)}}function lA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3uiv(this.addr,t),mn(i,t)}}function cA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4uiv(this.addr,t),mn(i,t)}}function uA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Av.compareFunction=y0,c=Av):c=F0,i.setTexture2D(t||c,l)}function fA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||H0,l)}function hA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||G0,l)}function dA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||I0,l)}function pA(r){switch(r){case 5126:return Zb;case 35664:return Kb;case 35665:return Qb;case 35666:return Jb;case 35674:return $b;case 35675:return tA;case 35676:return eA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return sA;case 5125:return rA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return dA}}function mA(r,t){r.uniform1fv(this.addr,t)}function _A(r,t){const i=qr(t,this.size,2);r.uniform2fv(this.addr,i)}function gA(r,t){const i=qr(t,this.size,3);r.uniform3fv(this.addr,i)}function vA(r,t){const i=qr(t,this.size,4);r.uniform4fv(this.addr,i)}function xA(r,t){const i=qr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function SA(r,t){const i=qr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function yA(r,t){const i=qr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function MA(r,t){r.uniform1iv(this.addr,t)}function EA(r,t){r.uniform2iv(this.addr,t)}function TA(r,t){r.uniform3iv(this.addr,t)}function bA(r,t){r.uniform4iv(this.addr,t)}function AA(r,t){r.uniform1uiv(this.addr,t)}function RA(r,t){r.uniform2uiv(this.addr,t)}function CA(r,t){r.uniform3uiv(this.addr,t)}function wA(r,t){r.uniform4uiv(this.addr,t)}function DA(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||F0,c[f])}function UA(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||H0,c[f])}function LA(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||G0,c[f])}function NA(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||I0,c[f])}function OA(r){switch(r){case 5126:return mA;case 35664:return _A;case 35665:return gA;case 35666:return vA;case 35674:return xA;case 35675:return SA;case 35676:return yA;case 5124:case 35670:return MA;case 35667:case 35671:return EA;case 35668:case 35672:return TA;case 35669:case 35673:return bA;case 5125:return AA;case 36294:return RA;case 36295:return CA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return NA}}class PA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=pA(i.type)}}class BA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OA(i.type)}}class zA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function Lv(r,t){r.seq.push(t),r.map[t.id]=t}function FA(r,t,i){const s=r.name,l=s.length;for(kh.lastIndex=0;;){const c=kh.exec(s),f=kh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Lv(i,p===void 0?new PA(d,r,t):new BA(d,r,t));break}else{let x=i.map[d];x===void 0&&(x=new zA(d),Lv(i,x)),i=x}}}class Wc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);FA(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Nv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const IA=37297;let HA=0;function GA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const Ov=new he;function VA(r){Ue._getMatrix(Ov,Ue.workingColorSpace,r);const t=`mat3( ${Ov.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(r)){case Yc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Pv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+GA(r.getShaderSource(t),f)}else return l}function kA(r,t){const i=VA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function XA(r,t){let i;switch(t){case Yy:i="Linear";break;case jy:i="Reinhard";break;case Zy:i="Cineon";break;case Ky:i="ACESFilmic";break;case Jy:i="AgX";break;case $y:i="Neutral";break;case Qy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pc=new tt;function WA(){Ue.getLuminanceCoefficients(Pc);const r=Pc.x.toFixed(4),t=Pc.y.toFixed(4),i=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function YA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function jA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Jo(r){return r!==""}function Bv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ZA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(r){return r.replace(ZA,QA)}const KA=new Map;function QA(r,t){let i=de[t];if(i===void 0){const s=KA.get(t);if(s!==void 0)i=de[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Hd(i)}const JA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fv(r){return r.replace(JA,$A)}function $A(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Iv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function t1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===r0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===o0?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function e1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hr:case Gr:t="ENVMAP_TYPE_CUBE";break;case tu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gr:t="ENVMAP_MODE_REFRACTION";break}return t}function i1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case l0:t="ENVMAP_BLENDING_MULTIPLY";break;case Wy:t="ENVMAP_BLENDING_MIX";break;case qy:t="ENVMAP_BLENDING_ADD";break}return t}function a1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function s1(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=t1(i),p=e1(i),_=n1(i),x=i1(i),v=a1(i),M=qA(i),E=YA(c),w=l.createProgram();let y,g,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Jo).join(`
`),g.length>0&&(g+=`
`)):(y=[Iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),g=[Iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?de.tonemapping_pars_fragment:"",i.toneMapping!==qa?XA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,kA("linearToOutputTexel",i.outputColorSpace),WA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),f=Hd(f),f=Bv(f,i),f=zv(f,i),d=Hd(d),d=Bv(d,i),d=zv(d,i),f=Fv(f),d=Fv(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const O=z+y+f,D=z+g+d,F=Nv(l,l.VERTEX_SHADER,O),N=Nv(l,l.FRAGMENT_SHADER,D);l.attachShader(w,F),l.attachShader(w,N),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(I){if(r.debug.checkShaderErrors){const rt=l.getProgramInfoLog(w).trim(),Q=l.getShaderInfoLog(F).trim(),ct=l.getShaderInfoLog(N).trim();let ut=!0,V=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ut=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,F,N);else{const et=Pv(l,F,"vertex"),k=Pv(l,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+rt+`
`+et+`
`+k)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(Q===""||ct==="")&&(V=!1);V&&(I.diagnostics={runnable:ut,programLog:rt,vertexShader:{log:Q,prefix:y},fragmentShader:{log:ct,prefix:g}})}l.deleteShader(F),l.deleteShader(N),G=new Wc(l,w),A=jA(l,w)}let G;this.getUniforms=function(){return G===void 0&&B(this),G};let A;this.getAttributes=function(){return A===void 0&&B(this),A};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(w,IA)),T},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=N,this}let r1=0;class o1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new l1(t),i.set(t,s)),s}}class l1{constructor(t){this.id=r1++,this.code=t,this.usedTimes=0}}function c1(r,t,i,s,l,c,f){const d=new A0,m=new o1,p=new Set,_=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,T,I,rt,Q){const ct=rt.fog,ut=Q.geometry,V=A.isMeshStandardMaterial?rt.environment:null,et=(A.isMeshStandardMaterial?i:t).get(A.envMap||V),k=et&&et.mapping===tu?et.image.height:null,St=E[A.type];A.precision!==null&&(M=l.getMaxPrecision(A.precision),M!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",M,"instead."));const U=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,nt=U!==void 0?U.length:0;let Et=0;ut.morphAttributes.position!==void 0&&(Et=1),ut.morphAttributes.normal!==void 0&&(Et=2),ut.morphAttributes.color!==void 0&&(Et=3);let At,W,pt,vt;if(St){const Re=Li[St];At=Re.vertexShader,W=Re.fragmentShader}else At=A.vertexShader,W=A.fragmentShader,m.update(A),pt=m.getVertexShaderID(A),vt=m.getFragmentShaderID(A);const bt=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),Yt=Q.isInstancedMesh===!0,Ut=Q.isBatchedMesh===!0,_e=!!A.map,xe=!!A.matcap,te=!!et,H=!!A.aoMap,ce=!!A.lightMap,ae=!!A.bumpMap,re=!!A.normalMap,kt=!!A.displacementMap,Le=!!A.emissiveMap,Xt=!!A.metalnessMap,L=!!A.roughnessMap,b=A.anisotropy>0,it=A.clearcoat>0,mt=A.dispersion>0,yt=A.iridescence>0,ot=A.sheen>0,Ft=A.transmission>0,Dt=b&&!!A.anisotropyMap,It=it&&!!A.clearcoatMap,Se=it&&!!A.clearcoatNormalMap,Rt=it&&!!A.clearcoatRoughnessMap,Ht=yt&&!!A.iridescenceMap,Zt=yt&&!!A.iridescenceThicknessMap,Wt=ot&&!!A.sheenColorMap,Gt=ot&&!!A.sheenRoughnessMap,le=!!A.specularMap,Qt=!!A.specularColorMap,Ne=!!A.specularIntensityMap,Y=Ft&&!!A.transmissionMap,Pt=Ft&&!!A.thicknessMap,ft=!!A.gradientMap,gt=!!A.alphaMap,Lt=A.alphaTest>0,Nt=!!A.alphaHash,ee=!!A.extensions;let Xe=qa;A.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Xe=r.toneMapping);const rn={shaderID:St,shaderType:A.type,shaderName:A.name,vertexShader:At,fragmentShader:W,defines:A.defines,customVertexShaderID:pt,customFragmentShaderID:vt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:M,batching:Ut,batchingColor:Ut&&Q._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&Q.instanceColor!==null,instancingMorph:Yt&&Q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Xr,alphaToCoverage:!!A.alphaToCoverage,map:_e,matcap:xe,envMap:te,envMapMode:te&&et.mapping,envMapCubeUVHeight:k,aoMap:H,lightMap:ce,bumpMap:ae,normalMap:re,displacementMap:v&&kt,emissiveMap:Le,normalMapObjectSpace:re&&A.normalMapType===iM,normalMapTangentSpace:re&&A.normalMapType===S0,metalnessMap:Xt,roughnessMap:L,anisotropy:b,anisotropyMap:Dt,clearcoat:it,clearcoatMap:It,clearcoatNormalMap:Se,clearcoatRoughnessMap:Rt,dispersion:mt,iridescence:yt,iridescenceMap:Ht,iridescenceThicknessMap:Zt,sheen:ot,sheenColorMap:Wt,sheenRoughnessMap:Gt,specularMap:le,specularColorMap:Qt,specularIntensityMap:Ne,transmission:Ft,transmissionMap:Y,thicknessMap:Pt,gradientMap:ft,opaque:A.transparent===!1&&A.blending===Br&&A.alphaToCoverage===!1,alphaMap:gt,alphaTest:Lt,alphaHash:Nt,combine:A.combine,mapUv:_e&&w(A.map.channel),aoMapUv:H&&w(A.aoMap.channel),lightMapUv:ce&&w(A.lightMap.channel),bumpMapUv:ae&&w(A.bumpMap.channel),normalMapUv:re&&w(A.normalMap.channel),displacementMapUv:kt&&w(A.displacementMap.channel),emissiveMapUv:Le&&w(A.emissiveMap.channel),metalnessMapUv:Xt&&w(A.metalnessMap.channel),roughnessMapUv:L&&w(A.roughnessMap.channel),anisotropyMapUv:Dt&&w(A.anisotropyMap.channel),clearcoatMapUv:It&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:Se&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&w(A.sheenRoughnessMap.channel),specularMapUv:le&&w(A.specularMap.channel),specularColorMapUv:Qt&&w(A.specularColorMap.channel),specularIntensityMapUv:Ne&&w(A.specularIntensityMap.channel),transmissionMapUv:Y&&w(A.transmissionMap.channel),thicknessMapUv:Pt&&w(A.thicknessMap.channel),alphaMapUv:gt&&w(A.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(re||b),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ut.attributes.uv&&(_e||gt),fog:!!ct,useFog:A.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ct,skinning:Q.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Et,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,decodeVideoTexture:_e&&A.map.isVideoTexture===!0&&Ue.getTransfer(A.map.colorSpace)===ze,decodeVideoTextureEmissive:Le&&A.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(A.emissiveMap.colorSpace)===ze,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ra,flipSided:A.side===Wn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ee&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&A.extensions.multiDraw===!0||Ut)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return rn.vertexUv1s=p.has(1),rn.vertexUv2s=p.has(2),rn.vertexUv3s=p.has(3),p.clear(),rn}function g(A){const T=[];if(A.shaderID?T.push(A.shaderID):(T.push(A.customVertexShaderID),T.push(A.customFragmentShaderID)),A.defines!==void 0)for(const I in A.defines)T.push(I),T.push(A.defines[I]);return A.isRawShaderMaterial===!1&&(z(T,A),O(T,A),T.push(r.outputColorSpace)),T.push(A.customProgramCacheKey),T.join()}function z(A,T){A.push(T.precision),A.push(T.outputColorSpace),A.push(T.envMapMode),A.push(T.envMapCubeUVHeight),A.push(T.mapUv),A.push(T.alphaMapUv),A.push(T.lightMapUv),A.push(T.aoMapUv),A.push(T.bumpMapUv),A.push(T.normalMapUv),A.push(T.displacementMapUv),A.push(T.emissiveMapUv),A.push(T.metalnessMapUv),A.push(T.roughnessMapUv),A.push(T.anisotropyMapUv),A.push(T.clearcoatMapUv),A.push(T.clearcoatNormalMapUv),A.push(T.clearcoatRoughnessMapUv),A.push(T.iridescenceMapUv),A.push(T.iridescenceThicknessMapUv),A.push(T.sheenColorMapUv),A.push(T.sheenRoughnessMapUv),A.push(T.specularMapUv),A.push(T.specularColorMapUv),A.push(T.specularIntensityMapUv),A.push(T.transmissionMapUv),A.push(T.thicknessMapUv),A.push(T.combine),A.push(T.fogExp2),A.push(T.sizeAttenuation),A.push(T.morphTargetsCount),A.push(T.morphAttributeCount),A.push(T.numDirLights),A.push(T.numPointLights),A.push(T.numSpotLights),A.push(T.numSpotLightMaps),A.push(T.numHemiLights),A.push(T.numRectAreaLights),A.push(T.numDirLightShadows),A.push(T.numPointLightShadows),A.push(T.numSpotLightShadows),A.push(T.numSpotLightShadowsWithMaps),A.push(T.numLightProbes),A.push(T.shadowMapType),A.push(T.toneMapping),A.push(T.numClippingPlanes),A.push(T.numClipIntersection),A.push(T.depthPacking)}function O(A,T){d.disableAll(),T.supportsVertexTextures&&d.enable(0),T.instancing&&d.enable(1),T.instancingColor&&d.enable(2),T.instancingMorph&&d.enable(3),T.matcap&&d.enable(4),T.envMap&&d.enable(5),T.normalMapObjectSpace&&d.enable(6),T.normalMapTangentSpace&&d.enable(7),T.clearcoat&&d.enable(8),T.iridescence&&d.enable(9),T.alphaTest&&d.enable(10),T.vertexColors&&d.enable(11),T.vertexAlphas&&d.enable(12),T.vertexUv1s&&d.enable(13),T.vertexUv2s&&d.enable(14),T.vertexUv3s&&d.enable(15),T.vertexTangents&&d.enable(16),T.anisotropy&&d.enable(17),T.alphaHash&&d.enable(18),T.batching&&d.enable(19),T.dispersion&&d.enable(20),T.batchingColor&&d.enable(21),A.push(d.mask),d.disableAll(),T.fog&&d.enable(0),T.useFog&&d.enable(1),T.flatShading&&d.enable(2),T.logarithmicDepthBuffer&&d.enable(3),T.reverseDepthBuffer&&d.enable(4),T.skinning&&d.enable(5),T.morphTargets&&d.enable(6),T.morphNormals&&d.enable(7),T.morphColors&&d.enable(8),T.premultipliedAlpha&&d.enable(9),T.shadowMapEnabled&&d.enable(10),T.doubleSided&&d.enable(11),T.flipSided&&d.enable(12),T.useDepthPacking&&d.enable(13),T.dithering&&d.enable(14),T.transmission&&d.enable(15),T.sheen&&d.enable(16),T.opaque&&d.enable(17),T.pointsUvs&&d.enable(18),T.decodeVideoTexture&&d.enable(19),T.decodeVideoTextureEmissive&&d.enable(20),T.alphaToCoverage&&d.enable(21),A.push(d.mask)}function D(A){const T=E[A.type];let I;if(T){const rt=Li[T];I=PM.clone(rt.uniforms)}else I=A.uniforms;return I}function F(A,T){let I;for(let rt=0,Q=_.length;rt<Q;rt++){const ct=_[rt];if(ct.cacheKey===T){I=ct,++I.usedTimes;break}}return I===void 0&&(I=new s1(r,T,A,c),_.push(I)),I}function N(A){if(--A.usedTimes===0){const T=_.indexOf(A);_[T]=_[_.length-1],_.pop(),A.destroy()}}function B(A){m.remove(A)}function G(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:F,releaseProgram:N,releaseShaderCache:B,programs:_,dispose:G}}function u1(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function f1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Hv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Gv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(x,v,M,E,w,y){let g=r[t];return g===void 0?(g={id:x.id,object:x,geometry:v,material:M,groupOrder:E,renderOrder:x.renderOrder,z:w,group:y},r[t]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=M,g.groupOrder=E,g.renderOrder=x.renderOrder,g.z=w,g.group=y),t++,g}function d(x,v,M,E,w,y){const g=f(x,v,M,E,w,y);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(x,v,M,E,w,y){const g=f(x,v,M,E,w,y);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(x,v){i.length>1&&i.sort(x||f1),s.length>1&&s.sort(v||Hv),l.length>1&&l.sort(v||Hv)}function _(){for(let x=t,v=r.length;x<v;x++){const M=r[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function h1(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Gv,r.set(s,[f])):l>=c.length?(f=new Gv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function d1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new Ae};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return r[t.id]=i,i}}}function p1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let m1=0;function _1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function g1(r){const t=new d1,i=p1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new tt);const l=new tt,c=new Je,f=new Je;function d(p){let _=0,x=0,v=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let M=0,E=0,w=0,y=0,g=0,z=0,O=0,D=0,F=0,N=0,B=0;p.sort(_1);for(let A=0,T=p.length;A<T;A++){const I=p[A],rt=I.color,Q=I.intensity,ct=I.distance,ut=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)_+=rt.r*Q,x+=rt.g*Q,v+=rt.b*Q;else if(I.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(I.sh.coefficients[V],Q);B++}else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,k=i.get(I);k.shadowIntensity=et.intensity,k.shadowBias=et.bias,k.shadowNormalBias=et.normalBias,k.shadowRadius=et.radius,k.shadowMapSize=et.mapSize,s.directionalShadow[M]=k,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=I.shadow.matrix,z++}s.directional[M]=V,M++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(rt).multiplyScalar(Q),V.distance=ct,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,s.spot[w]=V;const et=I.shadow;if(I.map&&(s.spotLightMap[F]=I.map,F++,et.updateMatrices(I),I.castShadow&&N++),s.spotLightMatrix[w]=et.matrix,I.castShadow){const k=i.get(I);k.shadowIntensity=et.intensity,k.shadowBias=et.bias,k.shadowNormalBias=et.normalBias,k.shadowRadius=et.radius,k.shadowMapSize=et.mapSize,s.spotShadow[w]=k,s.spotShadowMap[w]=ut,D++}w++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(rt).multiplyScalar(Q),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),s.rectArea[y]=V,y++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const et=I.shadow,k=i.get(I);k.shadowIntensity=et.intensity,k.shadowBias=et.bias,k.shadowNormalBias=et.normalBias,k.shadowRadius=et.radius,k.shadowMapSize=et.mapSize,k.shadowCameraNear=et.camera.near,k.shadowCameraFar=et.camera.far,s.pointShadow[E]=k,s.pointShadowMap[E]=ut,s.pointShadowMatrix[E]=I.shadow.matrix,O++}s.point[E]=V,E++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(Q),V.groundColor.copy(I.groundColor).multiplyScalar(Q),s.hemi[g]=V,g++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=v;const G=s.hash;(G.directionalLength!==M||G.pointLength!==E||G.spotLength!==w||G.rectAreaLength!==y||G.hemiLength!==g||G.numDirectionalShadows!==z||G.numPointShadows!==O||G.numSpotShadows!==D||G.numSpotMaps!==F||G.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+F-N,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=B,G.directionalLength=M,G.pointLength=E,G.spotLength=w,G.rectAreaLength=y,G.hemiLength=g,G.numDirectionalShadows=z,G.numPointShadows=O,G.numSpotShadows=D,G.numSpotMaps=F,G.numLightProbes=B,s.version=m1++)}function m(p,_){let x=0,v=0,M=0,E=0,w=0;const y=_.matrixWorldInverse;for(let g=0,z=p.length;g<z;g++){const O=p[g];if(O.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),x++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),f.identity(),c.copy(O.matrixWorld),c.premultiply(y),f.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(O.isPointLight){const D=s.point[v];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),v++}else if(O.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:m,state:s}}function Vv(r){const t=new g1(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function v1(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Vv(r),t.set(l,[d])):c>=f.length?(d=new Vv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const x1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y1(r,t,i){let s=new ap;const l=new ue,c=new ue,f=new Qe,d=new XM({depthPacking:nM}),m=new WM,p={},_=i.maxTextureSize,x={[Ya]:Wn,[Wn]:Ya,[ra]:ra},v=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:x1,fragmentShader:S1}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new Bi;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new dn(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r0;let g=this.type;this.render=function(N,B,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const A=r.getRenderTarget(),T=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),rt=r.state;rt.setBlending(Wa),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const Q=g!==sa&&this.type===sa,ct=g===sa&&this.type!==sa;for(let ut=0,V=N.length;ut<V;ut++){const et=N[ut],k=et.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const St=k.getFrameExtents();if(l.multiply(St),c.copy(k.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/St.x),l.x=c.x*St.x,k.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/St.y),l.y=c.y*St.y,k.mapSize.y=c.y)),k.map===null||Q===!0||ct===!0){const nt=this.type!==sa?{minFilter:Ti,magFilter:Ti}:{};k.map!==null&&k.map.dispose(),k.map=new Ls(l.x,l.y,nt),k.map.texture.name=et.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const U=k.getViewportCount();for(let nt=0;nt<U;nt++){const Et=k.getViewport(nt);f.set(c.x*Et.x,c.y*Et.y,c.x*Et.z,c.y*Et.w),rt.viewport(f),k.updateMatrices(et,nt),s=k.getFrustum(),D(B,G,k.camera,et,this.type)}k.isPointLightShadow!==!0&&this.type===sa&&z(k,G),k.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(A,T,I)};function z(N,B){const G=t.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ls(l.x,l.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(B,null,G,v,w,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(B,null,G,M,w,null)}function O(N,B,G,A){let T=null;const I=G.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(I!==void 0)T=I;else if(T=G.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const rt=T.uuid,Q=B.uuid;let ct=p[rt];ct===void 0&&(ct={},p[rt]=ct);let ut=ct[Q];ut===void 0&&(ut=T.clone(),ct[Q]=ut,B.addEventListener("dispose",F)),T=ut}if(T.visible=B.visible,T.wireframe=B.wireframe,A===sa?T.side=B.shadowSide!==null?B.shadowSide:B.side:T.side=B.shadowSide!==null?B.shadowSide:x[B.side],T.alphaMap=B.alphaMap,T.alphaTest=B.alphaTest,T.map=B.map,T.clipShadows=B.clipShadows,T.clippingPlanes=B.clippingPlanes,T.clipIntersection=B.clipIntersection,T.displacementMap=B.displacementMap,T.displacementScale=B.displacementScale,T.displacementBias=B.displacementBias,T.wireframeLinewidth=B.wireframeLinewidth,T.linewidth=B.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const rt=r.properties.get(T);rt.light=G}return T}function D(N,B,G,A,T){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===sa)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,N.matrixWorld);const Q=t.update(N),ct=N.material;if(Array.isArray(ct)){const ut=Q.groups;for(let V=0,et=ut.length;V<et;V++){const k=ut[V],St=ct[k.materialIndex];if(St&&St.visible){const U=O(N,St,A,T);N.onBeforeShadow(r,N,B,G,Q,U,k),r.renderBufferDirect(G,null,Q,U,N,k),N.onAfterShadow(r,N,B,G,Q,U,k)}}}else if(ct.visible){const ut=O(N,ct,A,T);N.onBeforeShadow(r,N,B,G,Q,ut,null),r.renderBufferDirect(G,null,Q,ut,N,null),N.onAfterShadow(r,N,B,G,Q,ut,null)}}const rt=N.children;for(let Q=0,ct=rt.length;Q<ct;Q++)D(rt[Q],B,G,A,T)}function F(N){N.target.removeEventListener("dispose",F);for(const G in p){const A=p[G],T=N.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}const M1={[nd]:id,[ad]:od,[sd]:ld,[Ir]:rd,[id]:nd,[od]:ad,[ld]:sd,[rd]:Ir};function E1(r,t){function i(){let Y=!1;const Pt=new Qe;let ft=null;const gt=new Qe(0,0,0,0);return{setMask:function(Lt){ft!==Lt&&!Y&&(r.colorMask(Lt,Lt,Lt,Lt),ft=Lt)},setLocked:function(Lt){Y=Lt},setClear:function(Lt,Nt,ee,Xe,rn){rn===!0&&(Lt*=Xe,Nt*=Xe,ee*=Xe),Pt.set(Lt,Nt,ee,Xe),gt.equals(Pt)===!1&&(r.clearColor(Lt,Nt,ee,Xe),gt.copy(Pt))},reset:function(){Y=!1,ft=null,gt.set(-1,0,0,0)}}}function s(){let Y=!1,Pt=!1,ft=null,gt=null,Lt=null;return{setReversed:function(Nt){if(Pt!==Nt){const ee=t.get("EXT_clip_control");Pt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);const Xe=Lt;Lt=null,this.setClear(Xe)}Pt=Nt},getReversed:function(){return Pt},setTest:function(Nt){Nt?bt(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(Nt){ft!==Nt&&!Y&&(r.depthMask(Nt),ft=Nt)},setFunc:function(Nt){if(Pt&&(Nt=M1[Nt]),gt!==Nt){switch(Nt){case nd:r.depthFunc(r.NEVER);break;case id:r.depthFunc(r.ALWAYS);break;case ad:r.depthFunc(r.LESS);break;case Ir:r.depthFunc(r.LEQUAL);break;case sd:r.depthFunc(r.EQUAL);break;case rd:r.depthFunc(r.GEQUAL);break;case od:r.depthFunc(r.GREATER);break;case ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=Nt}},setLocked:function(Nt){Y=Nt},setClear:function(Nt){Lt!==Nt&&(Pt&&(Nt=1-Nt),r.clearDepth(Nt),Lt=Nt)},reset:function(){Y=!1,ft=null,gt=null,Lt=null,Pt=!1}}}function l(){let Y=!1,Pt=null,ft=null,gt=null,Lt=null,Nt=null,ee=null,Xe=null,rn=null;return{setTest:function(Re){Y||(Re?bt(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(Re){Pt!==Re&&!Y&&(r.stencilMask(Re),Pt=Re)},setFunc:function(Re,Ln,Nn){(ft!==Re||gt!==Ln||Lt!==Nn)&&(r.stencilFunc(Re,Ln,Nn),ft=Re,gt=Ln,Lt=Nn)},setOp:function(Re,Ln,Nn){(Nt!==Re||ee!==Ln||Xe!==Nn)&&(r.stencilOp(Re,Ln,Nn),Nt=Re,ee=Ln,Xe=Nn)},setLocked:function(Re){Y=Re},setClear:function(Re){rn!==Re&&(r.clearStencil(Re),rn=Re)},reset:function(){Y=!1,Pt=null,ft=null,gt=null,Lt=null,Nt=null,ee=null,Xe=null,rn=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},x={},v=new WeakMap,M=[],E=null,w=!1,y=null,g=null,z=null,O=null,D=null,F=null,N=null,B=new Ae(0,0,0),G=0,A=!1,T=null,I=null,rt=null,Q=null,ct=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,et=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=et>=1):k.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=et>=2);let St=null,U={};const nt=r.getParameter(r.SCISSOR_BOX),Et=r.getParameter(r.VIEWPORT),At=new Qe().fromArray(nt),W=new Qe().fromArray(Et);function pt(Y,Pt,ft,gt){const Lt=new Uint8Array(4),Nt=r.createTexture();r.bindTexture(Y,Nt),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ee=0;ee<ft;ee++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Pt,0,r.RGBA,1,1,gt,0,r.RGBA,r.UNSIGNED_BYTE,Lt):r.texImage2D(Pt+ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Lt);return Nt}const vt={};vt[r.TEXTURE_2D]=pt(r.TEXTURE_2D,r.TEXTURE_2D,1),vt[r.TEXTURE_CUBE_MAP]=pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[r.TEXTURE_2D_ARRAY]=pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),vt[r.TEXTURE_3D]=pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),bt(r.DEPTH_TEST),f.setFunc(Ir),ae(!1),re(Wg),bt(r.CULL_FACE),H(Wa);function bt(Y){_[Y]!==!0&&(r.enable(Y),_[Y]=!0)}function Ct(Y){_[Y]!==!1&&(r.disable(Y),_[Y]=!1)}function Yt(Y,Pt){return x[Y]!==Pt?(r.bindFramebuffer(Y,Pt),x[Y]=Pt,Y===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Pt),Y===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Ut(Y,Pt){let ft=M,gt=!1;if(Y){ft=v.get(Pt),ft===void 0&&(ft=[],v.set(Pt,ft));const Lt=Y.textures;if(ft.length!==Lt.length||ft[0]!==r.COLOR_ATTACHMENT0){for(let Nt=0,ee=Lt.length;Nt<ee;Nt++)ft[Nt]=r.COLOR_ATTACHMENT0+Nt;ft.length=Lt.length,gt=!0}}else ft[0]!==r.BACK&&(ft[0]=r.BACK,gt=!0);gt&&r.drawBuffers(ft)}function _e(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const xe={[Es]:r.FUNC_ADD,[Cy]:r.FUNC_SUBTRACT,[wy]:r.FUNC_REVERSE_SUBTRACT};xe[Dy]=r.MIN,xe[Uy]=r.MAX;const te={[Ly]:r.ZERO,[Ny]:r.ONE,[Oy]:r.SRC_COLOR,[td]:r.SRC_ALPHA,[Hy]:r.SRC_ALPHA_SATURATE,[Fy]:r.DST_COLOR,[By]:r.DST_ALPHA,[Py]:r.ONE_MINUS_SRC_COLOR,[ed]:r.ONE_MINUS_SRC_ALPHA,[Iy]:r.ONE_MINUS_DST_COLOR,[zy]:r.ONE_MINUS_DST_ALPHA,[Gy]:r.CONSTANT_COLOR,[Vy]:r.ONE_MINUS_CONSTANT_COLOR,[ky]:r.CONSTANT_ALPHA,[Xy]:r.ONE_MINUS_CONSTANT_ALPHA};function H(Y,Pt,ft,gt,Lt,Nt,ee,Xe,rn,Re){if(Y===Wa){w===!0&&(Ct(r.BLEND),w=!1);return}if(w===!1&&(bt(r.BLEND),w=!0),Y!==Ry){if(Y!==y||Re!==A){if((g!==Es||D!==Es)&&(r.blendEquation(r.FUNC_ADD),g=Es,D=Es),Re)switch(Y){case Br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qg:r.blendFunc(r.ONE,r.ONE);break;case Yg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Yg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}z=null,O=null,F=null,N=null,B.set(0,0,0),G=0,y=Y,A=Re}return}Lt=Lt||Pt,Nt=Nt||ft,ee=ee||gt,(Pt!==g||Lt!==D)&&(r.blendEquationSeparate(xe[Pt],xe[Lt]),g=Pt,D=Lt),(ft!==z||gt!==O||Nt!==F||ee!==N)&&(r.blendFuncSeparate(te[ft],te[gt],te[Nt],te[ee]),z=ft,O=gt,F=Nt,N=ee),(Xe.equals(B)===!1||rn!==G)&&(r.blendColor(Xe.r,Xe.g,Xe.b,rn),B.copy(Xe),G=rn),y=Y,A=!1}function ce(Y,Pt){Y.side===ra?Ct(r.CULL_FACE):bt(r.CULL_FACE);let ft=Y.side===Wn;Pt&&(ft=!ft),ae(ft),Y.blending===Br&&Y.transparent===!1?H(Wa):H(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const gt=Y.stencilWrite;d.setTest(gt),gt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Le(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function ae(Y){T!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),T=Y)}function re(Y){Y!==by?(bt(r.CULL_FACE),Y!==I&&(Y===Wg?r.cullFace(r.BACK):Y===Ay?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),I=Y}function kt(Y){Y!==rt&&(V&&r.lineWidth(Y),rt=Y)}function Le(Y,Pt,ft){Y?(bt(r.POLYGON_OFFSET_FILL),(Q!==Pt||ct!==ft)&&(r.polygonOffset(Pt,ft),Q=Pt,ct=ft)):Ct(r.POLYGON_OFFSET_FILL)}function Xt(Y){Y?bt(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function L(Y){Y===void 0&&(Y=r.TEXTURE0+ut-1),St!==Y&&(r.activeTexture(Y),St=Y)}function b(Y,Pt,ft){ft===void 0&&(St===null?ft=r.TEXTURE0+ut-1:ft=St);let gt=U[ft];gt===void 0&&(gt={type:void 0,texture:void 0},U[ft]=gt),(gt.type!==Y||gt.texture!==Pt)&&(St!==ft&&(r.activeTexture(ft),St=ft),r.bindTexture(Y,Pt||vt[Y]),gt.type=Y,gt.texture=Pt)}function it(){const Y=U[St];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function mt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function yt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ot(){try{r.texSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ft(){try{r.texSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Dt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function It(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(){try{r.texStorage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Rt(){try{r.texStorage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ht(){try{r.texImage2D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Zt(){try{r.texImage3D.apply(r,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Wt(Y){At.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),At.copy(Y))}function Gt(Y){W.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),W.copy(Y))}function le(Y,Pt){let ft=p.get(Pt);ft===void 0&&(ft=new WeakMap,p.set(Pt,ft));let gt=ft.get(Y);gt===void 0&&(gt=r.getUniformBlockIndex(Pt,Y.name),ft.set(Y,gt))}function Qt(Y,Pt){const gt=p.get(Pt).get(Y);m.get(Pt)!==gt&&(r.uniformBlockBinding(Pt,gt,Y.__bindingPointIndex),m.set(Pt,gt))}function Ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},St=null,U={},x={},v=new WeakMap,M=[],E=null,w=!1,y=null,g=null,z=null,O=null,D=null,F=null,N=null,B=new Ae(0,0,0),G=0,A=!1,T=null,I=null,rt=null,Q=null,ct=null,At.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:bt,disable:Ct,bindFramebuffer:Yt,drawBuffers:Ut,useProgram:_e,setBlending:H,setMaterial:ce,setFlipSided:ae,setCullFace:re,setLineWidth:kt,setPolygonOffset:Le,setScissorTest:Xt,activeTexture:L,bindTexture:b,unbindTexture:it,compressedTexImage2D:mt,compressedTexImage3D:yt,texImage2D:Ht,texImage3D:Zt,updateUBOMapping:le,uniformBlockBinding:Qt,texStorage2D:Se,texStorage3D:Rt,texSubImage2D:ot,texSubImage3D:Ft,compressedTexSubImage2D:Dt,compressedTexSubImage3D:It,scissor:Wt,viewport:Gt,reset:Ne}}function T1(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ue,_=new WeakMap;let x;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return M?new OffscreenCanvas(L,b):Zc("canvas")}function w(L,b,it){let mt=1;const yt=Xt(L);if((yt.width>it||yt.height>it)&&(mt=it/Math.max(yt.width,yt.height)),mt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ot=Math.floor(mt*yt.width),Ft=Math.floor(mt*yt.height);x===void 0&&(x=E(ot,Ft));const Dt=b?E(ot,Ft):x;return Dt.width=ot,Dt.height=Ft,Dt.getContext("2d").drawImage(L,0,0,ot,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ot+"x"+Ft+")."),Dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),L;return L}function y(L){return L.generateMipmaps}function g(L){r.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(L,b,it,mt,yt=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ot=b;if(b===r.RED&&(it===r.FLOAT&&(ot=r.R32F),it===r.HALF_FLOAT&&(ot=r.R16F),it===r.UNSIGNED_BYTE&&(ot=r.R8)),b===r.RED_INTEGER&&(it===r.UNSIGNED_BYTE&&(ot=r.R8UI),it===r.UNSIGNED_SHORT&&(ot=r.R16UI),it===r.UNSIGNED_INT&&(ot=r.R32UI),it===r.BYTE&&(ot=r.R8I),it===r.SHORT&&(ot=r.R16I),it===r.INT&&(ot=r.R32I)),b===r.RG&&(it===r.FLOAT&&(ot=r.RG32F),it===r.HALF_FLOAT&&(ot=r.RG16F),it===r.UNSIGNED_BYTE&&(ot=r.RG8)),b===r.RG_INTEGER&&(it===r.UNSIGNED_BYTE&&(ot=r.RG8UI),it===r.UNSIGNED_SHORT&&(ot=r.RG16UI),it===r.UNSIGNED_INT&&(ot=r.RG32UI),it===r.BYTE&&(ot=r.RG8I),it===r.SHORT&&(ot=r.RG16I),it===r.INT&&(ot=r.RG32I)),b===r.RGB_INTEGER&&(it===r.UNSIGNED_BYTE&&(ot=r.RGB8UI),it===r.UNSIGNED_SHORT&&(ot=r.RGB16UI),it===r.UNSIGNED_INT&&(ot=r.RGB32UI),it===r.BYTE&&(ot=r.RGB8I),it===r.SHORT&&(ot=r.RGB16I),it===r.INT&&(ot=r.RGB32I)),b===r.RGBA_INTEGER&&(it===r.UNSIGNED_BYTE&&(ot=r.RGBA8UI),it===r.UNSIGNED_SHORT&&(ot=r.RGBA16UI),it===r.UNSIGNED_INT&&(ot=r.RGBA32UI),it===r.BYTE&&(ot=r.RGBA8I),it===r.SHORT&&(ot=r.RGBA16I),it===r.INT&&(ot=r.RGBA32I)),b===r.RGB&&it===r.UNSIGNED_INT_5_9_9_9_REV&&(ot=r.RGB9_E5),b===r.RGBA){const Ft=yt?Yc:Ue.getTransfer(mt);it===r.FLOAT&&(ot=r.RGBA32F),it===r.HALF_FLOAT&&(ot=r.RGBA16F),it===r.UNSIGNED_BYTE&&(ot=Ft===ze?r.SRGB8_ALPHA8:r.RGBA8),it===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),it===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)}return(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function D(L,b){let it;return L?b===null||b===Us||b===Vr?it=r.DEPTH24_STENCIL8:b===oa?it=r.DEPTH32F_STENCIL8:b===nl&&(it=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Us||b===Vr?it=r.DEPTH_COMPONENT24:b===oa?it=r.DEPTH_COMPONENT32F:b===nl&&(it=r.DEPTH_COMPONENT16),it}function F(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ti&&L.minFilter!==Ni?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function N(L){const b=L.target;b.removeEventListener("dispose",N),G(b),b.isVideoTexture&&_.delete(b)}function B(L){const b=L.target;b.removeEventListener("dispose",B),T(b)}function G(L){const b=s.get(L);if(b.__webglInit===void 0)return;const it=L.source,mt=v.get(it);if(mt){const yt=mt[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&A(L),Object.keys(mt).length===0&&v.delete(it)}s.remove(L)}function A(L){const b=s.get(L);r.deleteTexture(b.__webglTexture);const it=L.source,mt=v.get(it);delete mt[b.__cacheKey],f.memory.textures--}function T(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let yt=0;yt<b.__webglFramebuffer[mt].length;yt++)r.deleteFramebuffer(b.__webglFramebuffer[mt][yt]);else r.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)r.deleteFramebuffer(b.__webglFramebuffer[mt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const it=L.textures;for(let mt=0,yt=it.length;mt<yt;mt++){const ot=s.get(it[mt]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),f.memory.textures--),s.remove(it[mt])}s.remove(L)}let I=0;function rt(){I=0}function Q(){const L=I;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),I+=1,L}function ct(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function ut(L,b){const it=s.get(L);if(L.isVideoTexture&&kt(L),L.isRenderTargetTexture===!1&&L.version>0&&it.__version!==L.version){const mt=L.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(it,L,b);return}}i.bindTexture(r.TEXTURE_2D,it.__webglTexture,r.TEXTURE0+b)}function V(L,b){const it=s.get(L);if(L.version>0&&it.__version!==L.version){W(it,L,b);return}i.bindTexture(r.TEXTURE_2D_ARRAY,it.__webglTexture,r.TEXTURE0+b)}function et(L,b){const it=s.get(L);if(L.version>0&&it.__version!==L.version){W(it,L,b);return}i.bindTexture(r.TEXTURE_3D,it.__webglTexture,r.TEXTURE0+b)}function k(L,b){const it=s.get(L);if(L.version>0&&it.__version!==L.version){pt(it,L,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture,r.TEXTURE0+b)}const St={[fd]:r.REPEAT,[Cs]:r.CLAMP_TO_EDGE,[hd]:r.MIRRORED_REPEAT},U={[Ti]:r.NEAREST,[tM]:r.NEAREST_MIPMAP_NEAREST,[mc]:r.NEAREST_MIPMAP_LINEAR,[Ni]:r.LINEAR,[ph]:r.LINEAR_MIPMAP_NEAREST,[ws]:r.LINEAR_MIPMAP_LINEAR},nt={[aM]:r.NEVER,[uM]:r.ALWAYS,[sM]:r.LESS,[y0]:r.LEQUAL,[rM]:r.EQUAL,[cM]:r.GEQUAL,[oM]:r.GREATER,[lM]:r.NOTEQUAL};function Et(L,b){if(b.type===oa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ni||b.magFilter===ph||b.magFilter===mc||b.magFilter===ws||b.minFilter===Ni||b.minFilter===ph||b.minFilter===mc||b.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,St[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,St[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,St[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,U[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ti||b.minFilter!==mc&&b.minFilter!==ws||b.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function At(L,b){let it=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",N));const mt=b.source;let yt=v.get(mt);yt===void 0&&(yt={},v.set(mt,yt));const ot=ct(b);if(ot!==L.__cacheKey){yt[ot]===void 0&&(yt[ot]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,it=!0),yt[ot].usedTimes++;const Ft=yt[L.__cacheKey];Ft!==void 0&&(yt[L.__cacheKey].usedTimes--,Ft.usedTimes===0&&A(b)),L.__cacheKey=ot,L.__webglTexture=yt[ot].texture}return it}function W(L,b,it){let mt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=r.TEXTURE_3D);const yt=At(L,b),ot=b.source;i.bindTexture(mt,L.__webglTexture,r.TEXTURE0+it);const Ft=s.get(ot);if(ot.version!==Ft.__version||yt===!0){i.activeTexture(r.TEXTURE0+it);const Dt=Ue.getPrimaries(Ue.workingColorSpace),It=b.colorSpace===Xa?null:Ue.getPrimaries(b.colorSpace),Se=b.colorSpace===Xa||Dt===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Rt=w(b.image,!1,l.maxTextureSize);Rt=Le(b,Rt);const Ht=c.convert(b.format,b.colorSpace),Zt=c.convert(b.type);let Wt=O(b.internalFormat,Ht,Zt,b.colorSpace,b.isVideoTexture);Et(mt,b);let Gt;const le=b.mipmaps,Qt=b.isVideoTexture!==!0,Ne=Ft.__version===void 0||yt===!0,Y=ot.dataReady,Pt=F(b,Rt);if(b.isDepthTexture)Wt=D(b.format===kr,b.type),Ne&&(Qt?i.texStorage2D(r.TEXTURE_2D,1,Wt,Rt.width,Rt.height):i.texImage2D(r.TEXTURE_2D,0,Wt,Rt.width,Rt.height,0,Ht,Zt,null));else if(b.isDataTexture)if(le.length>0){Qt&&Ne&&i.texStorage2D(r.TEXTURE_2D,Pt,Wt,le[0].width,le[0].height);for(let ft=0,gt=le.length;ft<gt;ft++)Gt=le[ft],Qt?Y&&i.texSubImage2D(r.TEXTURE_2D,ft,0,0,Gt.width,Gt.height,Ht,Zt,Gt.data):i.texImage2D(r.TEXTURE_2D,ft,Wt,Gt.width,Gt.height,0,Ht,Zt,Gt.data);b.generateMipmaps=!1}else Qt?(Ne&&i.texStorage2D(r.TEXTURE_2D,Pt,Wt,Rt.width,Rt.height),Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Ht,Zt,Rt.data)):i.texImage2D(r.TEXTURE_2D,0,Wt,Rt.width,Rt.height,0,Ht,Zt,Rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qt&&Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,Wt,le[0].width,le[0].height,Rt.depth);for(let ft=0,gt=le.length;ft<gt;ft++)if(Gt=le[ft],b.format!==Ei)if(Ht!==null)if(Qt){if(Y)if(b.layerUpdates.size>0){const Lt=vv(Gt.width,Gt.height,b.format,b.type);for(const Nt of b.layerUpdates){const ee=Gt.data.subarray(Nt*Lt/Gt.data.BYTES_PER_ELEMENT,(Nt+1)*Lt/Gt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,Nt,Gt.width,Gt.height,1,Ht,ee)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,Gt.width,Gt.height,Rt.depth,Ht,Gt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ft,Wt,Gt.width,Gt.height,Rt.depth,0,Gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?Y&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ft,0,0,0,Gt.width,Gt.height,Rt.depth,Ht,Zt,Gt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ft,Wt,Gt.width,Gt.height,Rt.depth,0,Ht,Zt,Gt.data)}else{Qt&&Ne&&i.texStorage2D(r.TEXTURE_2D,Pt,Wt,le[0].width,le[0].height);for(let ft=0,gt=le.length;ft<gt;ft++)Gt=le[ft],b.format!==Ei?Ht!==null?Qt?Y&&i.compressedTexSubImage2D(r.TEXTURE_2D,ft,0,0,Gt.width,Gt.height,Ht,Gt.data):i.compressedTexImage2D(r.TEXTURE_2D,ft,Wt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?Y&&i.texSubImage2D(r.TEXTURE_2D,ft,0,0,Gt.width,Gt.height,Ht,Zt,Gt.data):i.texImage2D(r.TEXTURE_2D,ft,Wt,Gt.width,Gt.height,0,Ht,Zt,Gt.data)}else if(b.isDataArrayTexture)if(Qt){if(Ne&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,Wt,Rt.width,Rt.height,Rt.depth),Y)if(b.layerUpdates.size>0){const ft=vv(Rt.width,Rt.height,b.format,b.type);for(const gt of b.layerUpdates){const Lt=Rt.data.subarray(gt*ft/Rt.data.BYTES_PER_ELEMENT,(gt+1)*ft/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,gt,Rt.width,Rt.height,1,Ht,Zt,Lt)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ht,Zt,Rt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,Rt.width,Rt.height,Rt.depth,0,Ht,Zt,Rt.data);else if(b.isData3DTexture)Qt?(Ne&&i.texStorage3D(r.TEXTURE_3D,Pt,Wt,Rt.width,Rt.height,Rt.depth),Y&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ht,Zt,Rt.data)):i.texImage3D(r.TEXTURE_3D,0,Wt,Rt.width,Rt.height,Rt.depth,0,Ht,Zt,Rt.data);else if(b.isFramebufferTexture){if(Ne)if(Qt)i.texStorage2D(r.TEXTURE_2D,Pt,Wt,Rt.width,Rt.height);else{let ft=Rt.width,gt=Rt.height;for(let Lt=0;Lt<Pt;Lt++)i.texImage2D(r.TEXTURE_2D,Lt,Wt,ft,gt,0,Ht,Zt,null),ft>>=1,gt>>=1}}else if(le.length>0){if(Qt&&Ne){const ft=Xt(le[0]);i.texStorage2D(r.TEXTURE_2D,Pt,Wt,ft.width,ft.height)}for(let ft=0,gt=le.length;ft<gt;ft++)Gt=le[ft],Qt?Y&&i.texSubImage2D(r.TEXTURE_2D,ft,0,0,Ht,Zt,Gt):i.texImage2D(r.TEXTURE_2D,ft,Wt,Ht,Zt,Gt);b.generateMipmaps=!1}else if(Qt){if(Ne){const ft=Xt(Rt);i.texStorage2D(r.TEXTURE_2D,Pt,Wt,ft.width,ft.height)}Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ht,Zt,Rt)}else i.texImage2D(r.TEXTURE_2D,0,Wt,Ht,Zt,Rt);y(b)&&g(mt),Ft.__version=ot.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function pt(L,b,it){if(b.image.length!==6)return;const mt=At(L,b),yt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+it);const ot=s.get(yt);if(yt.version!==ot.__version||mt===!0){i.activeTexture(r.TEXTURE0+it);const Ft=Ue.getPrimaries(Ue.workingColorSpace),Dt=b.colorSpace===Xa?null:Ue.getPrimaries(b.colorSpace),It=b.colorSpace===Xa||Ft===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Se=b.isCompressedTexture||b.image[0].isCompressedTexture,Rt=b.image[0]&&b.image[0].isDataTexture,Ht=[];for(let gt=0;gt<6;gt++)!Se&&!Rt?Ht[gt]=w(b.image[gt],!0,l.maxCubemapSize):Ht[gt]=Rt?b.image[gt].image:b.image[gt],Ht[gt]=Le(b,Ht[gt]);const Zt=Ht[0],Wt=c.convert(b.format,b.colorSpace),Gt=c.convert(b.type),le=O(b.internalFormat,Wt,Gt,b.colorSpace),Qt=b.isVideoTexture!==!0,Ne=ot.__version===void 0||mt===!0,Y=yt.dataReady;let Pt=F(b,Zt);Et(r.TEXTURE_CUBE_MAP,b);let ft;if(Se){Qt&&Ne&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,le,Zt.width,Zt.height);for(let gt=0;gt<6;gt++){ft=Ht[gt].mipmaps;for(let Lt=0;Lt<ft.length;Lt++){const Nt=ft[Lt];b.format!==Ei?Wt!==null?Qt?Y&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,0,0,Nt.width,Nt.height,Wt,Nt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,le,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,0,0,Nt.width,Nt.height,Wt,Gt,Nt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt,le,Nt.width,Nt.height,0,Wt,Gt,Nt.data)}}}else{if(ft=b.mipmaps,Qt&&Ne){ft.length>0&&Pt++;const gt=Xt(Ht[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,le,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Rt){Qt?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ht[gt].width,Ht[gt].height,Wt,Gt,Ht[gt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,le,Ht[gt].width,Ht[gt].height,0,Wt,Gt,Ht[gt].data);for(let Lt=0;Lt<ft.length;Lt++){const ee=ft[Lt].image[gt].image;Qt?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,0,0,ee.width,ee.height,Wt,Gt,ee.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,le,ee.width,ee.height,0,Wt,Gt,ee.data)}}else{Qt?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Wt,Gt,Ht[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,le,Wt,Gt,Ht[gt]);for(let Lt=0;Lt<ft.length;Lt++){const Nt=ft[Lt];Qt?Y&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,0,0,Wt,Gt,Nt.image[gt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Lt+1,le,Wt,Gt,Nt.image[gt])}}}y(b)&&g(r.TEXTURE_CUBE_MAP),ot.__version=yt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function vt(L,b,it,mt,yt,ot){const Ft=c.convert(it.format,it.colorSpace),Dt=c.convert(it.type),It=O(it.internalFormat,Ft,Dt,it.colorSpace),Se=s.get(b),Rt=s.get(it);if(Rt.__renderTarget=b,!Se.__hasExternalTextures){const Ht=Math.max(1,b.width>>ot),Zt=Math.max(1,b.height>>ot);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?i.texImage3D(yt,ot,It,Ht,Zt,b.depth,0,Ft,Dt,null):i.texImage2D(yt,ot,It,Ht,Zt,0,Ft,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),re(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,yt,Rt.__webglTexture,0,ae(b)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,yt,Rt.__webglTexture,ot),i.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(L,b,it){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer){const mt=b.depthTexture,yt=mt&&mt.isDepthTexture?mt.type:null,ot=D(b.stencilBuffer,yt),Ft=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=ae(b);re(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,ot,b.width,b.height):it?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,ot,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ot,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ft,r.RENDERBUFFER,L)}else{const mt=b.textures;for(let yt=0;yt<mt.length;yt++){const ot=mt[yt],Ft=c.convert(ot.format,ot.colorSpace),Dt=c.convert(ot.type),It=O(ot.internalFormat,Ft,Dt,ot.colorSpace),Se=ae(b);it&&re(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,It,b.width,b.height):re(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,It,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,It,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(b.depthTexture);mt.__renderTarget=b,(!mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ut(b.depthTexture,0);const yt=mt.__webglTexture,ot=ae(b);if(b.depthTexture.format===zr)re(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,yt,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,yt,0);else if(b.depthTexture.format===kr)re(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,yt,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Yt(L){const b=s.get(L),it=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const mt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",yt)};mt.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=mt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");Ct(b.__webglFramebuffer,L)}else if(it){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=r.createRenderbuffer(),bt(b.__webglDepthbuffer[mt],L,!1);else{const yt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ot)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),bt(b.__webglDepthbuffer,L,!1);else{const mt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,yt),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,yt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(L,b,it){const mt=s.get(L);b!==void 0&&vt(mt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),it!==void 0&&Yt(L)}function _e(L){const b=L.texture,it=s.get(L),mt=s.get(b);L.addEventListener("dispose",B);const yt=L.textures,ot=L.isWebGLCubeRenderTarget===!0,Ft=yt.length>1;if(Ft||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=b.version,f.memory.textures++),ot){it.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer[Dt]=[];for(let It=0;It<b.mipmaps.length;It++)it.__webglFramebuffer[Dt][It]=r.createFramebuffer()}else it.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)it.__webglFramebuffer[Dt]=r.createFramebuffer()}else it.__webglFramebuffer=r.createFramebuffer();if(Ft)for(let Dt=0,It=yt.length;Dt<It;Dt++){const Se=s.get(yt[Dt]);Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&re(L)===!1){it.__webglMultisampledFramebuffer=r.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){const It=yt[Dt];it.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,it.__webglColorRenderbuffer[Dt]);const Se=c.convert(It.format,It.colorSpace),Rt=c.convert(It.type),Ht=O(It.internalFormat,Se,Rt,It.colorSpace,L.isXRRenderTarget===!0),Zt=ae(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Ht,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,it.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(it.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(it.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ot){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),Et(r.TEXTURE_CUBE_MAP,b);for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let It=0;It<b.mipmaps.length;It++)vt(it.__webglFramebuffer[Dt][It],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,It);else vt(it.__webglFramebuffer[Dt],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(b)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ft){for(let Dt=0,It=yt.length;Dt<It;Dt++){const Se=yt[Dt],Rt=s.get(Se);i.bindTexture(r.TEXTURE_2D,Rt.__webglTexture),Et(r.TEXTURE_2D,Se),vt(it.__webglFramebuffer,L,Se,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,0),y(Se)&&g(r.TEXTURE_2D)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,mt.__webglTexture),Et(Dt,b),b.mipmaps&&b.mipmaps.length>0)for(let It=0;It<b.mipmaps.length;It++)vt(it.__webglFramebuffer[It],L,b,r.COLOR_ATTACHMENT0,Dt,It);else vt(it.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,Dt,0);y(b)&&g(Dt),i.unbindTexture()}L.depthBuffer&&Yt(L)}function xe(L){const b=L.textures;for(let it=0,mt=b.length;it<mt;it++){const yt=b[it];if(y(yt)){const ot=z(L),Ft=s.get(yt).__webglTexture;i.bindTexture(ot,Ft),g(ot),i.unbindTexture()}}}const te=[],H=[];function ce(L){if(L.samples>0){if(re(L)===!1){const b=L.textures,it=L.width,mt=L.height;let yt=r.COLOR_BUFFER_BIT;const ot=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ft=s.get(L),Dt=b.length>1;if(Dt)for(let It=0;It<b.length;It++)i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let It=0;It<b.length;It++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[It]);const Se=s.get(b[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,it,mt,0,0,it,mt,yt,r.NEAREST),m===!0&&(te.length=0,H.length=0,te.push(r.COLOR_ATTACHMENT0+It),L.depthBuffer&&L.resolveDepthBuffer===!1&&(te.push(ot),H.push(ot),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,H)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let It=0;It<b.length;It++){i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[It]);const Se=s.get(b[It]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,Se,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function ae(L){return Math.min(l.maxSamples,L.samples)}function re(L){const b=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function kt(L){const b=f.render.frame;_.get(L)!==b&&(_.set(L,b),L.update())}function Le(L,b){const it=L.colorSpace,mt=L.format,yt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||it!==Xr&&it!==Xa&&(Ue.getTransfer(it)===ze?(mt!==Ei||yt!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),b}function Xt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=rt,this.setTexture2D=ut,this.setTexture2DArray=V,this.setTexture3D=et,this.setTextureCube=k,this.rebindTextures=Ut,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=re}function b1(r,t){function i(s,l=Xa){let c;const f=Ue.getTransfer(l);if(s===ha)return r.UNSIGNED_BYTE;if(s===Qd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Jd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===h0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===u0)return r.BYTE;if(s===f0)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===Kd)return r.INT;if(s===Us)return r.UNSIGNED_INT;if(s===oa)return r.FLOAT;if(s===il)return r.HALF_FLOAT;if(s===d0)return r.ALPHA;if(s===p0)return r.RGB;if(s===Ei)return r.RGBA;if(s===m0)return r.LUMINANCE;if(s===_0)return r.LUMINANCE_ALPHA;if(s===zr)return r.DEPTH_COMPONENT;if(s===kr)return r.DEPTH_STENCIL;if(s===g0)return r.RED;if(s===$d)return r.RED_INTEGER;if(s===v0)return r.RG;if(s===tp)return r.RG_INTEGER;if(s===ep)return r.RGBA_INTEGER;if(s===Ic||s===Hc||s===Gc||s===Vc)if(f===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ic)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ic)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dd||s===pd||s===md||s===_d)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===dd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gd||s===vd||s===xd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===gd||s===vd)return f===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===xd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sd||s===yd||s===Md||s===Ed||s===Td||s===bd||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Sd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Md)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ed)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Td)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ad)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ud)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ld)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kc||s===Od||s===Pd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===kc)return f===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Od)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===x0||s===Bd||s===zd||s===Fd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===kc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vr?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const A1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
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

}`;class C1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new qn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ja({vertexShader:A1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new dn(new ol(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w1 extends Os{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,x=null,v=null,M=null,E=null;const w=new C1,y=i.getContextAttributes();let g=null,z=null;const O=[],D=[],F=new ue;let N=null;const B=new di;B.viewport=new Qe;const G=new di;G.viewport=new Qe;const A=[B,G],T=new KM;let I=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let pt=O[W];return pt===void 0&&(pt=new Ph,O[W]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(W){let pt=O[W];return pt===void 0&&(pt=new Ph,O[W]=pt),pt.getGripSpace()},this.getHand=function(W){let pt=O[W];return pt===void 0&&(pt=new Ph,O[W]=pt),pt.getHandSpace()};function Q(W){const pt=D.indexOf(W.inputSource);if(pt===-1)return;const vt=O[pt];vt!==void 0&&(vt.update(W.inputSource,W.frame,p||f),vt.dispatchEvent({type:W.type,data:W.inputSource}))}function ct(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",ut);for(let W=0;W<O.length;W++){const pt=D[W];pt!==null&&(D[W]=null,O[W].disconnect(pt))}I=null,rt=null,w.reset(),t.setRenderTarget(g),M=null,v=null,x=null,l=null,z=null,At.stop(),s.isPresenting=!1,t.setPixelRatio(N),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await i.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,bt=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,vt=y.stencil?kr:zr,bt=y.stencil?Vr:Us);const Yt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:c};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(Yt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),z=new Ls(v.textureWidth,v.textureHeight,{format:Ei,type:ha,depthTexture:new O0(v.textureWidth,v.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const vt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,vt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new Ls(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:ha,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),At.setContext(l),At.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ut(W){for(let pt=0;pt<W.removed.length;pt++){const vt=W.removed[pt],bt=D.indexOf(vt);bt>=0&&(D[bt]=null,O[bt].disconnect(vt))}for(let pt=0;pt<W.added.length;pt++){const vt=W.added[pt];let bt=D.indexOf(vt);if(bt===-1){for(let Yt=0;Yt<O.length;Yt++)if(Yt>=D.length){D.push(vt),bt=Yt;break}else if(D[Yt]===null){D[Yt]=vt,bt=Yt;break}if(bt===-1)break}const Ct=O[bt];Ct&&Ct.connect(vt)}}const V=new tt,et=new tt;function k(W,pt,vt){V.setFromMatrixPosition(pt.matrixWorld),et.setFromMatrixPosition(vt.matrixWorld);const bt=V.distanceTo(et),Ct=pt.projectionMatrix.elements,Yt=vt.projectionMatrix.elements,Ut=Ct[14]/(Ct[10]-1),_e=Ct[14]/(Ct[10]+1),xe=(Ct[9]+1)/Ct[5],te=(Ct[9]-1)/Ct[5],H=(Ct[8]-1)/Ct[0],ce=(Yt[8]+1)/Yt[0],ae=Ut*H,re=Ut*ce,kt=bt/(-H+ce),Le=kt*-H;if(pt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Le),W.translateZ(kt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ct[10]===-1)W.projectionMatrix.copy(pt.projectionMatrix),W.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Xt=Ut+kt,L=_e+kt,b=ae-Le,it=re+(bt-Le),mt=xe*_e/L*Xt,yt=te*_e/L*Xt;W.projectionMatrix.makePerspective(b,it,mt,yt,Xt,L),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function St(W,pt){pt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(pt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let pt=W.near,vt=W.far;w.texture!==null&&(w.depthNear>0&&(pt=w.depthNear),w.depthFar>0&&(vt=w.depthFar)),T.near=G.near=B.near=pt,T.far=G.far=B.far=vt,(I!==T.near||rt!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,rt=T.far),B.layers.mask=W.layers.mask|2,G.layers.mask=W.layers.mask|4,T.layers.mask=B.layers.mask|G.layers.mask;const bt=W.parent,Ct=T.cameras;St(T,bt);for(let Yt=0;Yt<Ct.length;Yt++)St(Ct[Yt],bt);Ct.length===2?k(T,B,G):T.projectionMatrix.copy(B.projectionMatrix),U(W,T,bt)};function U(W,pt,vt){vt===null?W.matrix.copy(pt.matrixWorld):(W.matrix.copy(vt.matrixWorld),W.matrix.invert(),W.matrix.multiply(pt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(pt.projectionMatrix),W.projectionMatrixInverse.copy(pt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Id*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(W){m=W,v!==null&&(v.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(T)};let nt=null;function Et(W,pt){if(_=pt.getViewerPose(p||f),E=pt,_!==null){const vt=_.views;M!==null&&(t.setRenderTargetFramebuffer(z,M.framebuffer),t.setRenderTarget(z));let bt=!1;vt.length!==T.cameras.length&&(T.cameras.length=0,bt=!0);for(let Ut=0;Ut<vt.length;Ut++){const _e=vt[Ut];let xe=null;if(M!==null)xe=M.getViewport(_e);else{const H=x.getViewSubImage(v,_e);xe=H.viewport,Ut===0&&(t.setRenderTargetTextures(z,H.colorTexture,v.ignoreDepthValues?void 0:H.depthStencilTexture),t.setRenderTarget(z))}let te=A[Ut];te===void 0&&(te=new di,te.layers.enable(Ut),te.viewport=new Qe,A[Ut]=te),te.matrix.fromArray(_e.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(_e.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(xe.x,xe.y,xe.width,xe.height),Ut===0&&(T.matrix.copy(te.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),bt===!0&&T.cameras.push(te)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Ut=x.getDepthInformation(vt[0]);Ut&&Ut.isValid&&Ut.texture&&w.init(t,Ut,l.renderState)}}for(let vt=0;vt<O.length;vt++){const bt=D[vt],Ct=O[vt];bt!==null&&Ct!==void 0&&Ct.update(bt,pt,p||f)}nt&&nt(W,pt),pt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pt}),E=null}const At=new z0;At.setAnimationLoop(Et),this.setAnimationLoop=function(W){nt=W},this.dispose=function(){}}}const Ss=new Pi,D1=new Je;function U1(r,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,U0(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,z,O,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),x(y,g)):g.isMeshPhongMaterial?(c(y,g),_(y,g)):g.isMeshStandardMaterial?(c(y,g),v(y,g),g.isMeshPhysicalMaterial&&M(y,g,D)):g.isMeshMatcapMaterial?(c(y,g),E(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),w(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,z,O):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Wn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Wn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const z=t.get(g),O=z.envMap,D=z.envMapRotation;O&&(y.envMap.value=O,Ss.copy(D),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),y.envMapRotation.value.setFromMatrix4(D1.makeRotationFromEuler(Ss)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,z,O){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*z,y.scale.value=O*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,z){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Wn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function w(y,g){const z=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function L1(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,O){const D=O.program;s.uniformBlockBinding(z,D)}function p(z,O){let D=l[z.id];D===void 0&&(E(z),D=_(z),l[z.id]=D,z.addEventListener("dispose",y));const F=O.program;s.updateUBOMapping(z,F);const N=t.render.frame;c[z.id]!==N&&(v(z),c[z.id]=N)}function _(z){const O=x();z.__bindingPointIndex=O;const D=r.createBuffer(),F=z.__size,N=z.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,D),D}function x(){for(let z=0;z<d;z++)if(f.indexOf(z)===-1)return f.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(z){const O=l[z.id],D=z.uniforms,F=z.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let N=0,B=D.length;N<B;N++){const G=Array.isArray(D[N])?D[N]:[D[N]];for(let A=0,T=G.length;A<T;A++){const I=G[A];if(M(I,N,A,F)===!0){const rt=I.__offset,Q=Array.isArray(I.value)?I.value:[I.value];let ct=0;for(let ut=0;ut<Q.length;ut++){const V=Q[ut],et=w(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,rt+ct,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,ct),ct+=et.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,rt,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(z,O,D,F){const N=z.value,B=O+"_"+D;if(F[B]===void 0)return typeof N=="number"||typeof N=="boolean"?F[B]=N:F[B]=N.clone(),!0;{const G=F[B];if(typeof N=="number"||typeof N=="boolean"){if(G!==N)return F[B]=N,!0}else if(G.equals(N)===!1)return G.copy(N),!0}return!1}function E(z){const O=z.uniforms;let D=0;const F=16;for(let B=0,G=O.length;B<G;B++){const A=Array.isArray(O[B])?O[B]:[O[B]];for(let T=0,I=A.length;T<I;T++){const rt=A[T],Q=Array.isArray(rt.value)?rt.value:[rt.value];for(let ct=0,ut=Q.length;ct<ut;ct++){const V=Q[ct],et=w(V),k=D%F,St=k%et.boundary,U=k+St;D+=St,U!==0&&F-U<et.storage&&(D+=F-U),rt.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=D,D+=et.storage}}}const N=D%F;return N>0&&(D+=F-N),z.__size=D,z.__cache={},this}function w(z){const O={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(O.boundary=4,O.storage=4):z.isVector2?(O.boundary=8,O.storage=8):z.isVector3||z.isColor?(O.boundary=16,O.storage=12):z.isVector4?(O.boundary=16,O.storage=16):z.isMatrix3?(O.boundary=48,O.storage=48):z.isMatrix4?(O.boundary=64,O.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),O}function y(z){const O=z.target;O.removeEventListener("dispose",y);const D=f.indexOf(O.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function g(){for(const z in l)r.deleteBuffer(l[z]);f=[],l={},c={}}return{bind:m,update:p,dispose:g}}class N1{constructor(t={}){const{canvas:i=dM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,g=null;const z=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hi,this.toneMapping=qa,this.toneMappingExposure=1;const D=this;let F=!1,N=0,B=0,G=null,A=-1,T=null;const I=new Qe,rt=new Qe;let Q=null;const ct=new Ae(0);let ut=0,V=i.width,et=i.height,k=1,St=null,U=null;const nt=new Qe(0,0,V,et),Et=new Qe(0,0,V,et);let At=!1;const W=new ap;let pt=!1,vt=!1;this.transmissionResolutionScale=1;const bt=new Je,Ct=new Je,Yt=new tt,Ut=new Qe,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function te(){return G===null?k:1}let H=s;function ce(C,j){return i.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zd}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Lt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),H===null){const j="webgl2";if(H=ce(j,C),H===null)throw ce(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ae,re,kt,Le,Xt,L,b,it,mt,yt,ot,Ft,Dt,It,Se,Rt,Ht,Zt,Wt,Gt,le,Qt,Ne,Y;function Pt(){ae=new kb(H),ae.init(),Qt=new b1(H,ae),re=new zb(H,ae,t,Qt),kt=new E1(H,ae),re.reverseDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),Le=new qb(H),Xt=new u1,L=new T1(H,ae,kt,Xt,re,Qt,Le),b=new Ib(D),it=new Vb(D),mt=new $M(H),Ne=new Pb(H,mt),yt=new Xb(H,mt,Le,Ne),ot=new jb(H,yt,mt,Le),Wt=new Yb(H,re,L),Rt=new Fb(Xt),Ft=new c1(D,b,it,ae,re,Ne,Rt),Dt=new U1(D,Xt),It=new h1,Se=new v1(ae),Zt=new Ob(D,b,it,kt,ot,M,m),Ht=new y1(D,ot,re),Y=new L1(H,Le,re,kt),Gt=new Bb(H,ae,Le),le=new Wb(H,ae,Le),Le.programs=Ft.programs,D.capabilities=re,D.extensions=ae,D.properties=Xt,D.renderLists=It,D.shadowMap=Ht,D.state=kt,D.info=Le}Pt();const ft=new w1(D,H);this.xr=ft,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(V,et,!1))},this.getSize=function(C){return C.set(V,et)},this.setSize=function(C,j,at=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,et=j,i.width=Math.floor(C*k),i.height=Math.floor(j*k),at===!0&&(i.style.width=C+"px",i.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(V*k,et*k).floor()},this.setDrawingBufferSize=function(C,j,at){V=C,et=j,k=at,i.width=Math.floor(C*at),i.height=Math.floor(j*at),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,j,at,J){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,j,at,J),kt.viewport(I.copy(nt).multiplyScalar(k).round())},this.getScissor=function(C){return C.copy(Et)},this.setScissor=function(C,j,at,J){C.isVector4?Et.set(C.x,C.y,C.z,C.w):Et.set(C,j,at,J),kt.scissor(rt.copy(Et).multiplyScalar(k).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(C){kt.setScissorTest(At=C)},this.setOpaqueSort=function(C){St=C},this.setTransparentSort=function(C){U=C},this.getClearColor=function(C){return C.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(C=!0,j=!0,at=!0){let J=0;if(C){let Z=!1;if(G!==null){const Tt=G.texture.format;Z=Tt===ep||Tt===tp||Tt===$d}if(Z){const Tt=G.texture.type,wt=Tt===ha||Tt===Us||Tt===nl||Tt===Vr||Tt===Qd||Tt===Jd,zt=Zt.getClearColor(),Bt=Zt.getClearAlpha(),ne=zt.r,ie=zt.g,Kt=zt.b;wt?(E[0]=ne,E[1]=ie,E[2]=Kt,E[3]=Bt,H.clearBufferuiv(H.COLOR,0,E)):(w[0]=ne,w[1]=ie,w[2]=Kt,w[3]=Bt,H.clearBufferiv(H.COLOR,0,w))}else J|=H.COLOR_BUFFER_BIT}j&&(J|=H.DEPTH_BUFFER_BIT),at&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Lt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),Zt.dispose(),It.dispose(),Se.dispose(),Xt.dispose(),b.dispose(),it.dispose(),ot.dispose(),Ne.dispose(),Y.dispose(),Ft.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",cl),ft.removeEventListener("sessionend",jr),bi.stop()};function gt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const C=Le.autoReset,j=Ht.enabled,at=Ht.autoUpdate,J=Ht.needsUpdate,Z=Ht.type;Pt(),Le.autoReset=C,Ht.enabled=j,Ht.autoUpdate=at,Ht.needsUpdate=J,Ht.type=Z}function Nt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ee(C){const j=C.target;j.removeEventListener("dispose",ee),Xe(j)}function Xe(C){rn(C),Xt.remove(C)}function rn(C){const j=Xt.get(C).programs;j!==void 0&&(j.forEach(function(at){Ft.releaseProgram(at)}),C.isShaderMaterial&&Ft.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,at,J,Z,Tt){j===null&&(j=_e);const wt=Z.isMesh&&Z.matrixWorld.determinant()<0,zt=su(C,j,at,J,Z);kt.setMaterial(J,wt);let Bt=at.index,ne=1;if(J.wireframe===!0){if(Bt=yt.getWireframeAttribute(at),Bt===void 0)return;ne=2}const ie=at.drawRange,Kt=at.attributes.position;let ye=ie.start*ne,Me=(ie.start+ie.count)*ne;Tt!==null&&(ye=Math.max(ye,Tt.start*ne),Me=Math.min(Me,(Tt.start+Tt.count)*ne)),Bt!==null?(ye=Math.max(ye,0),Me=Math.min(Me,Bt.count)):Kt!=null&&(ye=Math.max(ye,0),Me=Math.min(Me,Kt.count));const ke=Me-ye;if(ke<0||ke===1/0)return;Ne.setup(Z,J,zt,at,Bt);let Ce,se=Gt;if(Bt!==null&&(Ce=mt.get(Bt),se=le,se.setIndex(Ce)),Z.isMesh)J.wireframe===!0?(kt.setLineWidth(J.wireframeLinewidth*te()),se.setMode(H.LINES)):se.setMode(H.TRIANGLES);else if(Z.isLine){let Jt=J.linewidth;Jt===void 0&&(Jt=1),kt.setLineWidth(Jt*te()),Z.isLineSegments?se.setMode(H.LINES):Z.isLineLoop?se.setMode(H.LINE_LOOP):se.setMode(H.LINE_STRIP)}else Z.isPoints?se.setMode(H.POINTS):Z.isSprite&&se.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)se.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))se.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Jt=Z._multiDrawStarts,cn=Z._multiDrawCounts,Ee=Z._multiDrawCount,In=Bt?mt.get(Bt).bytesPerElement:1,pi=Xt.get(J).currentProgram.getUniforms();for(let On=0;On<Ee;On++)pi.setValue(H,"_gl_DrawID",On),se.render(Jt[On]/In,cn[On])}else if(Z.isInstancedMesh)se.renderInstances(ye,ke,Z.count);else if(at.isInstancedBufferGeometry){const Jt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,cn=Math.min(at.instanceCount,Jt);se.renderInstances(ye,ke,cn)}else se.render(ye,ke)};function Re(C,j,at){C.transparent===!0&&C.side===ra&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,ln(C,j,at),C.side=Ya,C.needsUpdate=!0,ln(C,j,at),C.side=ra):ln(C,j,at)}this.compile=function(C,j,at=null){at===null&&(at=C),g=Se.get(at),g.init(j),O.push(g),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),C!==at&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights();const J=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const zt=Tt[wt];Re(zt,at,Z),J.add(zt)}else Re(Tt,at,Z),J.add(Tt)}),O.pop(),g=null,J},this.compileAsync=function(C,j,at=null){const J=this.compile(C,j,at);return new Promise(Z=>{function Tt(){if(J.forEach(function(wt){Xt.get(wt).currentProgram.isReady()&&J.delete(wt)}),J.size===0){Z(C);return}setTimeout(Tt,10)}ae.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ln=null;function Nn(C){Ln&&Ln(C)}function cl(){bi.stop()}function jr(){bi.start()}const bi=new z0;bi.setAnimationLoop(Nn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(C){Ln=C,ft.setAnimationLoop(C),C===null?bi.stop():bi.start()},ft.addEventListener("sessionstart",cl),ft.addEventListener("sessionend",jr),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(j),j=ft.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,j,G),g=Se.get(C,O.length),g.init(j),O.push(g),Ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W.setFromProjectionMatrix(Ct),vt=this.localClippingEnabled,pt=Rt.init(this.clippingPlanes,vt),y=It.get(C,z.length),y.init(),z.push(y),ft.enabled===!0&&ft.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Ps(Tt,j,-1/0,D.sortObjects)}Ps(C,j,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(St,U),xe=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,xe&&Zt.addToRenderList(y,C),this.info.render.frame++,pt===!0&&Rt.beginShadows();const at=g.state.shadowsArray;Ht.render(at,C,j),pt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=y.opaque,Z=y.transmissive;if(g.setupLights(),j.isArrayCamera){const Tt=j.cameras;if(Z.length>0)for(let wt=0,zt=Tt.length;wt<zt;wt++){const Bt=Tt[wt];ul(J,Z,C,Bt)}xe&&Zt.render(C);for(let wt=0,zt=Tt.length;wt<zt;wt++){const Bt=Tt[wt];Zr(y,C,Bt,Bt.viewport)}}else Z.length>0&&ul(J,Z,C,j),xe&&Zt.render(C),Zr(y,C,j);G!==null&&B===0&&(L.updateMultisampleRenderTarget(G),L.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(D,C,j),Ne.resetDefaultState(),A=-1,T=null,O.pop(),O.length>0?(g=O[O.length-1],pt===!0&&Rt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,z.pop(),z.length>0?y=z[z.length-1]:y=null};function Ps(C,j,at,J){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)at=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){J&&Ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const wt=ot.update(C),zt=C.material;zt.visible&&y.push(C,wt,zt,at,Ut.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const wt=ot.update(C),zt=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ut.copy(C.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ut.copy(wt.boundingSphere.center)),Ut.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(zt)){const Bt=wt.groups;for(let ne=0,ie=Bt.length;ne<ie;ne++){const Kt=Bt[ne],ye=zt[Kt.materialIndex];ye&&ye.visible&&y.push(C,wt,ye,at,Ut.z,Kt)}}else zt.visible&&y.push(C,wt,zt,at,Ut.z,null)}}const Tt=C.children;for(let wt=0,zt=Tt.length;wt<zt;wt++)Ps(Tt[wt],j,at,J)}function Zr(C,j,at,J){const Z=C.opaque,Tt=C.transmissive,wt=C.transparent;g.setupLightsView(at),pt===!0&&Rt.setGlobalState(D.clippingPlanes,at),J&&kt.viewport(I.copy(J)),Z.length>0&&Yn(Z,j,at),Tt.length>0&&Yn(Tt,j,at),wt.length>0&&Yn(wt,j,at),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function ul(C,j,at,J){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new Ls(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?il:ha,minFilter:ws,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Tt=g.state.transmissionRenderTarget[J.id],wt=J.viewport||I;Tt.setSize(wt.z*D.transmissionResolutionScale,wt.w*D.transmissionResolutionScale);const zt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(ct),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),xe&&Zt.render(at);const Bt=D.toneMapping;D.toneMapping=qa;const ne=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),pt===!0&&Rt.setGlobalState(D.clippingPlanes,J),Yn(C,at,J),L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Kt=0,ye=j.length;Kt<ye;Kt++){const Me=j[Kt],ke=Me.object,Ce=Me.geometry,se=Me.material,Jt=Me.group;if(se.side===ra&&ke.layers.test(J.layers)){const cn=se.side;se.side=Wn,se.needsUpdate=!0,on(ke,at,J,Ce,se,Jt),se.side=cn,se.needsUpdate=!0,ie=!0}}ie===!0&&(L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt))}D.setRenderTarget(zt),D.setClearColor(ct,ut),ne!==void 0&&(J.viewport=ne),D.toneMapping=Bt}function Yn(C,j,at){const J=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Tt=C.length;Z<Tt;Z++){const wt=C[Z],zt=wt.object,Bt=wt.geometry,ne=J===null?wt.material:J,ie=wt.group;zt.layers.test(at.layers)&&on(zt,j,at,Bt,ne,ie)}}function on(C,j,at,J,Z,Tt){C.onBeforeRender(D,j,at,J,Z,Tt),C.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(D,j,at,J,C,Tt),Z.transparent===!0&&Z.side===ra&&Z.forceSinglePass===!1?(Z.side=Wn,Z.needsUpdate=!0,D.renderBufferDirect(at,j,J,Z,C,Tt),Z.side=Ya,Z.needsUpdate=!0,D.renderBufferDirect(at,j,J,Z,C,Tt),Z.side=ra):D.renderBufferDirect(at,j,J,Z,C,Tt),C.onAfterRender(D,j,at,J,Z,Tt)}function ln(C,j,at){j.isScene!==!0&&(j=_e);const J=Xt.get(C),Z=g.state.lights,Tt=g.state.shadowsArray,wt=Z.state.version,zt=Ft.getParameters(C,Z.state,Tt,j,at),Bt=Ft.getProgramCacheKey(zt);let ne=J.programs;J.environment=C.isMeshStandardMaterial?j.environment:null,J.fog=j.fog,J.envMap=(C.isMeshStandardMaterial?it:b).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,ne===void 0&&(C.addEventListener("dispose",ee),ne=new Map,J.programs=ne);let ie=ne.get(Bt);if(ie!==void 0){if(J.currentProgram===ie&&J.lightsStateVersion===wt)return Bs(C,zt),ie}else zt.uniforms=Ft.getUniforms(C),C.onBeforeCompile(zt,D),ie=Ft.acquireProgram(zt,Bt),ne.set(Bt,ie),J.uniforms=zt.uniforms;const Kt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Kt.clippingPlanes=Rt.uniform),Bs(C,zt),J.needsLights=fl(C),J.lightsStateVersion=wt,J.needsLights&&(Kt.ambientLightColor.value=Z.state.ambient,Kt.lightProbe.value=Z.state.probe,Kt.directionalLights.value=Z.state.directional,Kt.directionalLightShadows.value=Z.state.directionalShadow,Kt.spotLights.value=Z.state.spot,Kt.spotLightShadows.value=Z.state.spotShadow,Kt.rectAreaLights.value=Z.state.rectArea,Kt.ltc_1.value=Z.state.rectAreaLTC1,Kt.ltc_2.value=Z.state.rectAreaLTC2,Kt.pointLights.value=Z.state.point,Kt.pointLightShadows.value=Z.state.pointShadow,Kt.hemisphereLights.value=Z.state.hemi,Kt.directionalShadowMap.value=Z.state.directionalShadowMap,Kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Kt.spotShadowMap.value=Z.state.spotShadowMap,Kt.spotLightMatrix.value=Z.state.spotLightMatrix,Kt.spotLightMap.value=Z.state.spotLightMap,Kt.pointShadowMap.value=Z.state.pointShadowMap,Kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=ie,J.uniformsList=null,ie}function zi(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Wc.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Bs(C,j){const at=Xt.get(C);at.outputColorSpace=j.outputColorSpace,at.batching=j.batching,at.batchingColor=j.batchingColor,at.instancing=j.instancing,at.instancingColor=j.instancingColor,at.instancingMorph=j.instancingMorph,at.skinning=j.skinning,at.morphTargets=j.morphTargets,at.morphNormals=j.morphNormals,at.morphColors=j.morphColors,at.morphTargetsCount=j.morphTargetsCount,at.numClippingPlanes=j.numClippingPlanes,at.numIntersection=j.numClipIntersection,at.vertexAlphas=j.vertexAlphas,at.vertexTangents=j.vertexTangents,at.toneMapping=j.toneMapping}function su(C,j,at,J,Z){j.isScene!==!0&&(j=_e),L.resetTextureUnits();const Tt=j.fog,wt=J.isMeshStandardMaterial?j.environment:null,zt=G===null?D.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Xr,Bt=(J.isMeshStandardMaterial?it:b).get(J.envMap||wt),ne=J.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ie=!!at.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Kt=!!at.morphAttributes.position,ye=!!at.morphAttributes.normal,Me=!!at.morphAttributes.color;let ke=qa;J.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ke=D.toneMapping);const Ce=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,se=Ce!==void 0?Ce.length:0,Jt=Xt.get(J),cn=g.state.lights;if(pt===!0&&(vt===!0||C!==T)){const Ye=C===T&&J.id===A;Rt.setState(J,C,Ye)}let Ee=!1;J.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==cn.state.version||Jt.outputColorSpace!==zt||Z.isBatchedMesh&&Jt.batching===!1||!Z.isBatchedMesh&&Jt.batching===!0||Z.isBatchedMesh&&Jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Jt.instancing===!1||!Z.isInstancedMesh&&Jt.instancing===!0||Z.isSkinnedMesh&&Jt.skinning===!1||!Z.isSkinnedMesh&&Jt.skinning===!0||Z.isInstancedMesh&&Jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Jt.instancingMorph===!1&&Z.morphTexture!==null||Jt.envMap!==Bt||J.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Rt.numPlanes||Jt.numIntersection!==Rt.numIntersection)||Jt.vertexAlphas!==ne||Jt.vertexTangents!==ie||Jt.morphTargets!==Kt||Jt.morphNormals!==ye||Jt.morphColors!==Me||Jt.toneMapping!==ke||Jt.morphTargetsCount!==se)&&(Ee=!0):(Ee=!0,Jt.__version=J.version);let In=Jt.currentProgram;Ee===!0&&(In=ln(J,j,Z));let pi=!1,On=!1,_n=!1;const Oe=In.getUniforms(),Pn=Jt.uniforms;if(kt.useProgram(In.program)&&(pi=!0,On=!0,_n=!0),J.id!==A&&(A=J.id,On=!0),pi||T!==C){kt.buffers.depth.getReversed()?(bt.copy(C.projectionMatrix),mM(bt),_M(bt),Oe.setValue(H,"projectionMatrix",bt)):Oe.setValue(H,"projectionMatrix",C.projectionMatrix),Oe.setValue(H,"viewMatrix",C.matrixWorldInverse);const yn=Oe.map.cameraPosition;yn!==void 0&&yn.setValue(H,Yt.setFromMatrixPosition(C.matrixWorld)),re.logarithmicDepthBuffer&&Oe.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Oe.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,On=!0,_n=!0)}if(Z.isSkinnedMesh){Oe.setOptional(H,Z,"bindMatrix"),Oe.setOptional(H,Z,"bindMatrixInverse");const Ye=Z.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Oe.setValue(H,"boneTexture",Ye.boneTexture,L))}Z.isBatchedMesh&&(Oe.setOptional(H,Z,"batchingTexture"),Oe.setValue(H,"batchingTexture",Z._matricesTexture,L),Oe.setOptional(H,Z,"batchingIdTexture"),Oe.setValue(H,"batchingIdTexture",Z._indirectTexture,L),Oe.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Oe.setValue(H,"batchingColorTexture",Z._colorsTexture,L));const bn=at.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Wt.update(Z,at,In),(On||Jt.receiveShadow!==Z.receiveShadow)&&(Jt.receiveShadow=Z.receiveShadow,Oe.setValue(H,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Pn.envMap.value=Bt,Pn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&j.environment!==null&&(Pn.envMapIntensity.value=j.environmentIntensity),On&&(Oe.setValue(H,"toneMappingExposure",D.toneMappingExposure),Jt.needsLights&&ru(Pn,_n),Tt&&J.fog===!0&&Dt.refreshFogUniforms(Pn,Tt),Dt.refreshMaterialUniforms(Pn,J,k,et,g.state.transmissionRenderTarget[C.id]),Wc.upload(H,zi(Jt),Pn,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Wc.upload(H,zi(Jt),Pn,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Oe.setValue(H,"center",Z.center),Oe.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Oe.setValue(H,"normalMatrix",Z.normalMatrix),Oe.setValue(H,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ye=J.uniformsGroups;for(let yn=0,zs=Ye.length;yn<zs;yn++){const Hn=Ye[yn];Y.update(Hn,In),Y.bind(Hn,In)}}return In}function ru(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function fl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,j,at){Xt.get(C.texture).__webglTexture=j,Xt.get(C.depthTexture).__webglTexture=at;const J=Xt.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=at===void 0,J.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const at=Xt.get(C);at.__webglFramebuffer=j,at.__useDefaultFramebuffer=j===void 0};const Za=H.createFramebuffer();this.setRenderTarget=function(C,j=0,at=0){G=C,N=j,B=at;let J=!0,Z=null,Tt=!1,wt=!1;if(C){const Bt=Xt.get(C);if(Bt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(H.FRAMEBUFFER,null),J=!1;else if(Bt.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Bt.__hasExternalTextures)L.rebindTextures(C,Xt.get(C.texture).__webglTexture,Xt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Kt=C.depthTexture;if(Bt.__boundDepthTexture!==Kt){if(Kt!==null&&Xt.has(Kt)&&(C.width!==Kt.image.width||C.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const ne=C.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(wt=!0);const ie=Xt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ie[j])?Z=ie[j][at]:Z=ie[j],Tt=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?Z=Xt.get(C).__webglMultisampledFramebuffer:Array.isArray(ie)?Z=ie[at]:Z=ie,I.copy(C.viewport),rt.copy(C.scissor),Q=C.scissorTest}else I.copy(nt).multiplyScalar(k).floor(),rt.copy(Et).multiplyScalar(k).floor(),Q=At;if(at!==0&&(Z=Za),kt.bindFramebuffer(H.FRAMEBUFFER,Z)&&J&&kt.drawBuffers(C,Z),kt.viewport(I),kt.scissor(rt),kt.setScissorTest(Q),Tt){const Bt=Xt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Bt.__webglTexture,at)}else if(wt){const Bt=Xt.get(C.texture),ne=j;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Bt.__webglTexture,at,ne)}else if(C!==null&&at!==0){const Bt=Xt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Bt.__webglTexture,at)}A=-1},this.readRenderTargetPixels=function(C,j,at,J,Z,Tt,wt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(zt=zt[wt]),zt){kt.bindFramebuffer(H.FRAMEBUFFER,zt);try{const Bt=C.texture,ne=Bt.format,ie=Bt.type;if(!re.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-J&&at>=0&&at<=C.height-Z&&H.readPixels(j,at,J,Z,Qt.convert(ne),Qt.convert(ie),Tt)}finally{const Bt=G!==null?Xt.get(G).__webglFramebuffer:null;kt.bindFramebuffer(H.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(C,j,at,J,Z,Tt,wt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(zt=zt[wt]),zt){const Bt=C.texture,ne=Bt.format,ie=Bt.type;if(!re.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-J&&at>=0&&at<=C.height-Z){kt.bindFramebuffer(H.FRAMEBUFFER,zt);const Kt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Kt),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),H.readPixels(j,at,J,Z,Qt.convert(ne),Qt.convert(ie),0);const ye=G!==null?Xt.get(G).__webglFramebuffer:null;kt.bindFramebuffer(H.FRAMEBUFFER,ye);const Me=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await pM(H,Me,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Kt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(Kt),H.deleteSync(Me),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,at=0){C.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const J=Math.pow(2,-at),Z=Math.floor(C.image.width*J),Tt=Math.floor(C.image.height*J),wt=j!==null?j.x:0,zt=j!==null?j.y:0;L.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,at,0,0,wt,zt,Z,Tt),kt.unbindTexture()};const Kr=H.createFramebuffer(),Fi=H.createFramebuffer();this.copyTextureToTexture=function(C,j,at=null,J=null,Z=0,Tt=null){C.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],j=arguments[2],Tt=arguments[3]||0,at=null),Tt===null&&(Z!==0?(Dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let wt,zt,Bt,ne,ie,Kt,ye,Me,ke;const Ce=C.isCompressedTexture?C.mipmaps[Tt]:C.image;if(at!==null)wt=at.max.x-at.min.x,zt=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,ne=at.min.x,ie=at.min.y,Kt=at.isBox3?at.min.z:0;else{const bn=Math.pow(2,-Z);wt=Math.floor(Ce.width*bn),zt=Math.floor(Ce.height*bn),C.isDataArrayTexture?Bt=Ce.depth:C.isData3DTexture?Bt=Math.floor(Ce.depth*bn):Bt=1,ne=0,ie=0,Kt=0}J!==null?(ye=J.x,Me=J.y,ke=J.z):(ye=0,Me=0,ke=0);const se=Qt.convert(j.format),Jt=Qt.convert(j.type);let cn;j.isData3DTexture?(L.setTexture3D(j,0),cn=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),cn=H.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),cn=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const Ee=H.getParameter(H.UNPACK_ROW_LENGTH),In=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pi=H.getParameter(H.UNPACK_SKIP_PIXELS),On=H.getParameter(H.UNPACK_SKIP_ROWS),_n=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ce.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ce.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ne),H.pixelStorei(H.UNPACK_SKIP_ROWS,ie),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Kt);const Oe=C.isDataArrayTexture||C.isData3DTexture,Pn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const bn=Xt.get(C),Ye=Xt.get(j),yn=Xt.get(bn.__renderTarget),zs=Xt.get(Ye.__renderTarget);kt.bindFramebuffer(H.READ_FRAMEBUFFER,yn.__webglFramebuffer),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let Hn=0;Hn<Bt;Hn++)Oe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.get(C).__webglTexture,Z,Kt+Hn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.get(j).__webglTexture,Tt,ke+Hn)),H.blitFramebuffer(ne,ie,wt,zt,ye,Me,wt,zt,H.DEPTH_BUFFER_BIT,H.NEAREST);kt.bindFramebuffer(H.READ_FRAMEBUFFER,null),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||Xt.has(C)){const bn=Xt.get(C),Ye=Xt.get(j);kt.bindFramebuffer(H.READ_FRAMEBUFFER,Kr),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fi);for(let yn=0;yn<Bt;yn++)Oe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,Z,Kt+yn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,Z),Pn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.__webglTexture,Tt,ke+yn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ye.__webglTexture,Tt),Z!==0?H.blitFramebuffer(ne,ie,wt,zt,ye,Me,wt,zt,H.COLOR_BUFFER_BIT,H.NEAREST):Pn?H.copyTexSubImage3D(cn,Tt,ye,Me,ke+yn,ne,ie,wt,zt):H.copyTexSubImage2D(cn,Tt,ye,Me,ne,ie,wt,zt);kt.bindFramebuffer(H.READ_FRAMEBUFFER,null),kt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Pn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(cn,Tt,ye,Me,ke,wt,zt,Bt,se,Jt,Ce.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(cn,Tt,ye,Me,ke,wt,zt,Bt,se,Ce.data):H.texSubImage3D(cn,Tt,ye,Me,ke,wt,zt,Bt,se,Jt,Ce):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,ye,Me,wt,zt,se,Jt,Ce.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,ye,Me,Ce.width,Ce.height,se,Ce.data):H.texSubImage2D(H.TEXTURE_2D,Tt,ye,Me,wt,zt,se,Jt,Ce);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,In),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pi),H.pixelStorei(H.UNPACK_SKIP_ROWS,On),H.pixelStorei(H.UNPACK_SKIP_IMAGES,_n),Tt===0&&j.generateMipmaps&&H.generateMipmap(cn),kt.unbindTexture()},this.copyTextureToTexture3D=function(C,j,at=null,J=null,Z=0){return C.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,J=arguments[1]||null,C=arguments[2],j=arguments[3],Z=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,at,J,Z)},this.initRenderTarget=function(C){Xt.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),kt.unbindTexture()},this.resetState=function(){N=0,B=0,G=null,kt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const kv={type:"change"},lp={type:"start"},V0={type:"end"},Bc=new b0,Xv=new Va,O1=Math.cos(70*hM.DEG2RAD),hn=new tt,Xn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xh=1e-6;class P1 extends QM{constructor(t,i=null){super(t,i),this.state=Fe.NONE,this.enabled=!0,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Ur.ROTATE,TWO:Ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new Ns,this._lastTargetPosition=new tt,this._quat=new Ns().setFromUnitVectors(t.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gv,this._sphericalDelta=new gv,this._scale=1,this._panOffset=new tt,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new tt,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=z1.bind(this),this._onPointerDown=B1.bind(this),this._onPointerUp=F1.bind(this),this._onContextMenu=W1.bind(this),this._onMouseWheel=G1.bind(this),this._onKeyDown=V1.bind(this),this._onTouchStart=k1.bind(this),this._onTouchMove=X1.bind(this),this._onMouseDown=I1.bind(this),this._onMouseMove=H1.bind(this),this._interceptControlDown=q1.bind(this),this._interceptControlUp=Y1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kv),this.update(),this.state=Fe.NONE}update(t=null){const i=this.object.position;hn.copy(i).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),l<-Math.PI?l+=Xn:l>Math.PI&&(l-=Xn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),i.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=hn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new tt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new tt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Bc.origin.copy(this.object.position),Bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bc.direction))<O1?this.object.lookAt(this.target):(Xv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bc.intersectPlane(Xv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Xh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xh||this._lastTargetPosition.distanceToSquared(this.target)>Xh?(this.dispatchEvent(kv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){hn.setFromMatrixColumn(i,0),hn.multiplyScalar(-t),this._panOffset.add(hn)}_panUp(t,i){this.screenSpacePanning===!0?hn.setFromMatrixColumn(i,1):(hn.setFromMatrixColumn(i,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(t),this._panOffset.add(hn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;hn.copy(l).sub(this.target);let c=hn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ue,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function B1(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function z1(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function F1(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(V0),this.state=Fe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function I1(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Fe.DOLLY;break;case Pr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}break;case Pr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(lp)}function H1(r){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function G1(r){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(r.preventDefault(),this.dispatchEvent(lp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(V0))}function V1(r){this.enabled!==!1&&this._handleKeyDown(r)}function k1(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ur.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Fe.TOUCH_ROTATE;break;case Ur.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case Ur.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Fe.TOUCH_DOLLY_PAN;break;case Ur.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(lp)}function X1(r){switch(this._trackPointer(r),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Fe.NONE}}function W1(r){this.enabled!==!1&&r.preventDefault()}function q1(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Y1(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function j1({mistakes:r}){const t=lt.useRef(null),i=lt.useRef([]),s=lt.useRef(null);return lt.useEffect(()=>{if(!t.current)return;for(;t.current.firstChild;)t.current.removeChild(t.current.firstChild);const l=new GM,c=new di(75,1,.1,1e3),f=new N1({antialias:!0});f.setSize(450,300),f.shadowMap.enabled=!0,f.shadowMap.type=o0,t.current.appendChild(f.domElement),l.background=new Ae("#87CEEB");const d=new ip("#87CEEB",15,30);l.fog=d;const m=new ZM(16777215,.5);l.add(m);const p=new jM(16777215,1);p.position.set(5,10,5),p.castShadow=!0,p.shadow.mapSize.width=1024,p.shadow.mapSize.height=1024,l.add(p);const _=new ol(50,50),x=new Ko({color:9498256,roughness:.8,metalness:.2}),v=new dn(_,x);v.rotation.x=-Math.PI/2,v.position.y=-4,v.receiveShadow=!0,l.add(v);const M=new Ko({color:16767673,roughness:.3,metalness:.1}),E=new Ko({color:4286945,roughness:.7,metalness:.1}),w=new Ko({color:9127187,roughness:.9,metalness:.1}),y=new Ko({color:8421504,roughness:.2,metalness:.8}),g=new Lr,z=new dn(new sp(.7,32,32),M),O=new dn(new el(.4,.4,3,16),E),D=new dn(new el(.2,.2,2),M),F=D.clone(),N=new dn(new el(.25,.2,2),E),B=N.clone(),G=new dn(new ca(.6,.3,.8),M),A=G.clone();z.position.set(0,1.5,0),O.position.set(0,0,0),D.position.set(1,1,0),D.rotation.z=Math.PI*.75,F.position.set(-1,1,0),F.rotation.z=-Math.PI*.75,N.position.set(.3,-2,0),N.rotation.z=Math.PI*.1,B.position.set(-.3,-2,0),B.rotation.z=-Math.PI*.1,G.position.set(.6,-3,.2),A.position.set(-.6,-3,.2),[z,O,D,F,N,B,G,A].forEach(et=>{et.castShadow=!0,et.receiveShadow=!0}),i.current=[z,O,D,F,N,B,G,A],i.current.forEach(et=>{et.visible=!1,g.add(et)}),l.add(g);const T=new Lr,I=new dn(new ca(.5,8,.5),w);I.position.set(-4,0,0),I.castShadow=!0;const rt=new dn(new ca(4.5,.5,.5),w);rt.position.set(-2,4,0),rt.castShadow=!0;const Q=new dn(new ca(.3,3,.3),w);Q.position.set(-3,3,0),Q.rotation.z=Math.PI*-.25,Q.castShadow=!0;const ct=new dn(new rp(.2,.05,32,64),y);ct.rotation.x=Math.PI/2,ct.scale.z=10,ct.position.set(0,3.5,0),ct.castShadow=!0,T.add(I,rt,Q,ct),l.add(T),c.position.set(5,3,6),c.lookAt(l.position);const ut=new P1(c,f.domElement);ut.enableDamping=!0,ut.dampingFactor=.05,ut.minDistance=5,ut.maxDistance=20;function V(){s.current=requestAnimationFrame(V),i.current.forEach((et,k)=>{et.visible&&(et.rotation.z+=Math.sin(Date.now()*.001)*5e-4)}),ut.update(),f.render(l,c)}return V(),()=>{cancelAnimationFrame(s.current),f.dispose(),ut.dispose()}},[]),lt.useEffect(()=>{i.current.forEach((l,c)=>{l.visible=c<r})},[r]),Mt.jsx("div",{className:"scene-container",children:Mt.jsx("div",{ref:t,className:"scene-canvas"})})}var Wh={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Wv;function Z1(){return Wv||(Wv=1,function(r){(function(){var t={}.hasOwnProperty;function i(){for(var c="",f=0;f<arguments.length;f++){var d=arguments[f];d&&(c=l(c,s(d)))}return c}function s(c){if(typeof c=="string"||typeof c=="number")return c;if(typeof c!="object")return"";if(Array.isArray(c))return i.apply(null,c);if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]"))return c.toString();var f="";for(var d in c)t.call(c,d)&&c[d]&&(f=l(f,d));return f}function l(c,f){return f?c?c+" "+f:c+f:c}r.exports?(i.default=i,r.exports=i):window.classNames=i})()}(Wh)),Wh.exports}var K1=Z1();const Ie=$c(K1);function Q1(r,t){if(r==null)return{};var i={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(t.indexOf(s)!==-1)continue;i[s]=r[s]}return i}function Gd(r,t){return Gd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},Gd(r,t)}function J1(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,Gd(r,t)}const $1=["xxl","xl","lg","md","sm","xs"],tR="xs",ll=lt.createContext({prefixes:{},breakpoints:$1,minBreakpoint:tR}),{Consumer:AC,Provider:RC}=ll;function tn(r,t){const{prefixes:i}=lt.useContext(ll);return r||i[t]||t}function k0(){const{breakpoints:r}=lt.useContext(ll);return r}function X0(){const{minBreakpoint:r}=lt.useContext(ll);return r}function eR(){const{dir:r}=lt.useContext(ll);return r==="rtl"}function nu(r){return r&&r.ownerDocument||document}function nR(r){var t=nu(r);return t&&t.defaultView||window}function iR(r,t){return nR(r).getComputedStyle(r,t)}var aR=/([A-Z])/g;function sR(r){return r.replace(aR,"-$1").toLowerCase()}var rR=/^ms-/;function zc(r){return sR(r).replace(rR,"-ms-")}var oR=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function lR(r){return!!(r&&oR.test(r))}function Ds(r,t){var i="",s="";if(typeof t=="string")return r.style.getPropertyValue(zc(t))||iR(r).getPropertyValue(zc(t));Object.keys(t).forEach(function(l){var c=t[l];!c&&c!==0?r.style.removeProperty(zc(l)):lR(l)?s+=l+"("+c+") ":i+=zc(l)+": "+c+";"}),s&&(i+="transform: "+s+";"),r.style.cssText+=";"+i}var qh={exports:{}},Yh,qv;function cR(){if(qv)return Yh;qv=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Yh=r,Yh}var jh,Yv;function uR(){if(Yv)return jh;Yv=1;var r=cR();function t(){}function i(){}return i.resetWarningCache=t,jh=function(){function s(f,d,m,p,_,x){if(x!==r){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}s.isRequired=s;function l(){return s}var c={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:i,resetWarningCache:t};return c.PropTypes=c,c},jh}var jv;function fR(){return jv||(jv=1,qh.exports=uR()()),qh.exports}var hR=fR();const fa=$c(hR);var dR=s0();const Or=$c(dR),Zv={disabled:!1},W0=Rs.createContext(null);var pR=function(t){return t.scrollTop},$o="unmounted",Ms="exited",ka="entering",bs="entered",Vd="exiting",pa=function(r){J1(t,r);function t(s,l){var c;c=r.call(this,s,l)||this;var f=l,d=f&&!f.isMounting?s.enter:s.appear,m;return c.appearStatus=null,s.in?d?(m=Ms,c.appearStatus=ka):m=bs:s.unmountOnExit||s.mountOnEnter?m=$o:m=Ms,c.state={status:m},c.nextCallback=null,c}t.getDerivedStateFromProps=function(l,c){var f=l.in;return f&&c.status===$o?{status:Ms}:null};var i=t.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(l){var c=null;if(l!==this.props){var f=this.state.status;this.props.in?f!==ka&&f!==bs&&(c=ka):(f===ka||f===bs)&&(c=Vd)}this.updateStatus(!1,c)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var l=this.props.timeout,c,f,d;return c=f=d=l,l!=null&&typeof l!="number"&&(c=l.exit,f=l.enter,d=l.appear!==void 0?l.appear:f),{exit:c,enter:f,appear:d}},i.updateStatus=function(l,c){if(l===void 0&&(l=!1),c!==null)if(this.cancelNextCallback(),c===ka){if(this.props.unmountOnExit||this.props.mountOnEnter){var f=this.props.nodeRef?this.props.nodeRef.current:Or.findDOMNode(this);f&&pR(f)}this.performEnter(l)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ms&&this.setState({status:$o})},i.performEnter=function(l){var c=this,f=this.props.enter,d=this.context?this.context.isMounting:l,m=this.props.nodeRef?[d]:[Or.findDOMNode(this),d],p=m[0],_=m[1],x=this.getTimeouts(),v=d?x.appear:x.enter;if(!l&&!f||Zv.disabled){this.safeSetState({status:bs},function(){c.props.onEntered(p)});return}this.props.onEnter(p,_),this.safeSetState({status:ka},function(){c.props.onEntering(p,_),c.onTransitionEnd(v,function(){c.safeSetState({status:bs},function(){c.props.onEntered(p,_)})})})},i.performExit=function(){var l=this,c=this.props.exit,f=this.getTimeouts(),d=this.props.nodeRef?void 0:Or.findDOMNode(this);if(!c||Zv.disabled){this.safeSetState({status:Ms},function(){l.props.onExited(d)});return}this.props.onExit(d),this.safeSetState({status:Vd},function(){l.props.onExiting(d),l.onTransitionEnd(f.exit,function(){l.safeSetState({status:Ms},function(){l.props.onExited(d)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(l,c){c=this.setNextCallback(c),this.setState(l,c)},i.setNextCallback=function(l){var c=this,f=!0;return this.nextCallback=function(d){f&&(f=!1,c.nextCallback=null,l(d))},this.nextCallback.cancel=function(){f=!1},this.nextCallback},i.onTransitionEnd=function(l,c){this.setNextCallback(c);var f=this.props.nodeRef?this.props.nodeRef.current:Or.findDOMNode(this),d=l==null&&!this.props.addEndListener;if(!f||d){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var m=this.props.nodeRef?[this.nextCallback]:[f,this.nextCallback],p=m[0],_=m[1];this.props.addEndListener(p,_)}l!=null&&setTimeout(this.nextCallback,l)},i.render=function(){var l=this.state.status;if(l===$o)return null;var c=this.props,f=c.children;c.in,c.mountOnEnter,c.unmountOnExit,c.appear,c.enter,c.exit,c.timeout,c.addEndListener,c.onEnter,c.onEntering,c.onEntered,c.onExit,c.onExiting,c.onExited,c.nodeRef;var d=Q1(c,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Rs.createElement(W0.Provider,{value:null},typeof f=="function"?f(l,d):Rs.cloneElement(Rs.Children.only(f),d))},t}(Rs.Component);pa.contextType=W0;pa.propTypes={};function Rr(){}pa.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Rr,onEntering:Rr,onEntered:Rr,onExit:Rr,onExiting:Rr,onExited:Rr};pa.UNMOUNTED=$o;pa.EXITED=Ms;pa.ENTERING=ka;pa.ENTERED=bs;pa.EXITING=Vd;function mR(r){return r.code==="Escape"||r.keyCode===27}function _R(){const r=lt.version.split(".");return{major:+r[0],minor:+r[1],patch:+r[2]}}function iu(r){if(!r||typeof r=="function")return null;const{major:t}=_R();return t>=19?r.props.ref:r.ref}const Yr=!!(typeof window<"u"&&window.document&&window.document.createElement);var kd=!1,Xd=!1;try{var Zh={get passive(){return kd=!0},get once(){return Xd=kd=!0}};Yr&&(window.addEventListener("test",Zh,Zh),window.removeEventListener("test",Zh,!0))}catch{}function q0(r,t,i,s){if(s&&typeof s!="boolean"&&!Xd){var l=s.once,c=s.capture,f=i;!Xd&&l&&(f=i.__once||function d(m){this.removeEventListener(t,d,c),i.call(this,m)},i.__once=f),r.addEventListener(t,f,kd?s:c)}r.addEventListener(t,i,s)}function Wd(r,t,i,s){var l=s&&typeof s!="boolean"?s.capture:s;r.removeEventListener(t,i,l),i.__once&&r.removeEventListener(t,i.__once,l)}function Kc(r,t,i,s){return q0(r,t,i,s),function(){Wd(r,t,i,s)}}function gR(r,t,i,s){if(s===void 0&&(s=!0),r){var l=document.createEvent("HTMLEvents");l.initEvent(t,i,s),r.dispatchEvent(l)}}function vR(r){var t=Ds(r,"transitionDuration")||"",i=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*i}function xR(r,t,i){i===void 0&&(i=5);var s=!1,l=setTimeout(function(){s||gR(r,"transitionend",!0)},t+i),c=Kc(r,"transitionend",function(){s=!0},{once:!0});return function(){clearTimeout(l),c()}}function Y0(r,t,i,s){i==null&&(i=vR(r)||0);var l=xR(r,i,s),c=Kc(r,"transitionend",t);return function(){l(),c()}}function Kv(r,t){const i=Ds(r,t)||"",s=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*s}function SR(r,t){const i=Kv(r,"transitionDuration"),s=Kv(r,"transitionDelay"),l=Y0(r,c=>{c.target===r&&(l(),t(c))},i+s)}function yR(r){r.offsetHeight}const Qv=r=>!r||typeof r=="function"?r:t=>{r.current=t};function MR(r,t){const i=Qv(r),s=Qv(t);return l=>{i&&i(l),s&&s(l)}}function j0(r,t){return lt.useMemo(()=>MR(r,t),[r,t])}function ER(r){return r&&"setState"in r?Or.findDOMNode(r):r??null}const TR=Rs.forwardRef(({onEnter:r,onEntering:t,onEntered:i,onExit:s,onExiting:l,onExited:c,addEndListener:f,children:d,childRef:m,...p},_)=>{const x=lt.useRef(null),v=j0(x,m),M=N=>{v(ER(N))},E=N=>B=>{N&&x.current&&N(x.current,B)},w=lt.useCallback(E(r),[r]),y=lt.useCallback(E(t),[t]),g=lt.useCallback(E(i),[i]),z=lt.useCallback(E(s),[s]),O=lt.useCallback(E(l),[l]),D=lt.useCallback(E(c),[c]),F=lt.useCallback(E(f),[f]);return Mt.jsx(pa,{ref:_,...p,onEnter:w,onEntered:g,onEntering:y,onExit:z,onExited:D,onExiting:O,addEndListener:F,nodeRef:x,children:typeof d=="function"?(N,B)=>d(N,{...B,ref:M}):Rs.cloneElement(d,{ref:M})})});function bR(r){const t=lt.useRef(r);return lt.useEffect(()=>{t.current=r},[r]),t}function qd(r){const t=bR(r);return lt.useCallback(function(...i){return t.current&&t.current(...i)},[t])}const AR=r=>lt.forwardRef((t,i)=>Mt.jsx("div",{...t,ref:i,className:Ie(t.className,r)}));function RR(r){const t=lt.useRef(r);return lt.useEffect(()=>{t.current=r},[r]),t}function As(r){const t=RR(r);return lt.useCallback(function(...i){return t.current&&t.current(...i)},[t])}function CR(){const r=lt.useRef(!0),t=lt.useRef(()=>r.current);return lt.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[]),t.current}function wR(r){const t=lt.useRef(null);return lt.useEffect(()=>{t.current=r}),t.current}const DR=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",UR=typeof document<"u",Jv=UR||DR?lt.useLayoutEffect:lt.useEffect,LR=["as","disabled"];function NR(r,t){if(r==null)return{};var i={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(t.indexOf(s)>=0)continue;i[s]=r[s]}return i}function OR(r){return!r||r.trim()==="#"}function Z0({tagName:r,disabled:t,href:i,target:s,rel:l,role:c,onClick:f,tabIndex:d=0,type:m}){r||(i!=null||s!=null||l!=null?r="a":r="button");const p={tagName:r};if(r==="button")return[{type:m||"button",disabled:t},p];const _=v=>{if((t||r==="a"&&OR(i))&&v.preventDefault(),t){v.stopPropagation();return}f==null||f(v)},x=v=>{v.key===" "&&(v.preventDefault(),_(v))};return r==="a"&&(i||(i="#"),t&&(i=void 0)),[{role:c??"button",disabled:void 0,tabIndex:t?void 0:d,href:i,target:r==="a"?s:void 0,"aria-disabled":t||void 0,rel:r==="a"?l:void 0,onClick:_,onKeyDown:x},p]}const PR=lt.forwardRef((r,t)=>{let{as:i,disabled:s}=r,l=NR(r,LR);const[c,{tagName:f}]=Z0(Object.assign({tagName:i,disabled:s},l));return Mt.jsx(f,Object.assign({},l,c,{ref:t}))});PR.displayName="Button";const BR={[ka]:"show",[bs]:"show"},cp=lt.forwardRef(({className:r,children:t,transitionClasses:i={},onEnter:s,...l},c)=>{const f={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...l},d=lt.useCallback((m,p)=>{yR(m),s==null||s(m,p)},[s]);return Mt.jsx(TR,{ref:c,addEndListener:SR,...f,onEnter:d,childRef:iu(t),children:(m,p)=>lt.cloneElement(t,{...p,className:Ie("fade",r,t.props.className,BR[m],i[m])})})});cp.displayName="Fade";const zR={"aria-label":fa.string,onClick:fa.func,variant:fa.oneOf(["white"])},up=lt.forwardRef(({className:r,variant:t,"aria-label":i="Close",...s},l)=>Mt.jsx("button",{ref:l,type:"button",className:Ie("btn-close",t&&`btn-close-${t}`,r),"aria-label":i,...s}));up.displayName="CloseButton";up.propTypes=zR;const qc=lt.forwardRef(({as:r,bsPrefix:t,variant:i="primary",size:s,active:l=!1,disabled:c=!1,className:f,...d},m)=>{const p=tn(t,"btn"),[_,{tagName:x}]=Z0({tagName:r,disabled:c,...d}),v=x;return Mt.jsx(v,{..._,...d,ref:m,disabled:c,className:Ie(f,p,l&&"active",i&&`${p}-${i}`,s&&`${p}-${s}`,d.href&&c&&"disabled")})});qc.displayName="Button";function FR(r){const t=lt.useRef(r);return t.current=r,t}function IR(r){const t=FR(r);lt.useEffect(()=>()=>t.current(),[])}function HR(r,t){return lt.Children.toArray(r).some(i=>lt.isValidElement(i)&&i.type===t)}function GR({as:r,bsPrefix:t,className:i,...s}){t=tn(t,"col");const l=k0(),c=X0(),f=[],d=[];return l.forEach(m=>{const p=s[m];delete s[m];let _,x,v;typeof p=="object"&&p!=null?{span:_,offset:x,order:v}=p:_=p;const M=m!==c?`-${m}`:"";_&&f.push(_===!0?`${t}${M}`:`${t}${M}-${_}`),v!=null&&d.push(`order${M}-${v}`),x!=null&&d.push(`offset${M}-${x}`)}),[{...s,className:Ie(i,...f,...d)},{as:r,bsPrefix:t,spans:f}]}const Ui=lt.forwardRef((r,t)=>{const[{className:i,...s},{as:l="div",bsPrefix:c,spans:f}]=GR(r);return Mt.jsx(l,{...s,ref:t,className:Ie(i,!f.length&&c)})});Ui.displayName="Col";const Yd=lt.forwardRef(({bsPrefix:r,fluid:t=!1,as:i="div",className:s,...l},c)=>{const f=tn(r,"container"),d=typeof t=="string"?`-${t}`:"-fluid";return Mt.jsx(i,{ref:c,...l,className:Ie(s,t?`${f}${d}`:f)})});Yd.displayName="Container";var VR=Function.prototype.bind.call(Function.prototype.call,[].slice);function Cr(r,t){return VR(r.querySelectorAll(t))}function $v(r,t){if(r.contains)return r.contains(t);if(r.compareDocumentPosition)return r===t||!!(r.compareDocumentPosition(t)&16)}const kR="data-rr-ui-";function XR(r){return`${kR}${r}`}const K0=lt.createContext(Yr?window:void 0);K0.Provider;function fp(){return lt.useContext(K0)}const WR={type:fa.string,tooltip:fa.bool,as:fa.elementType},au=lt.forwardRef(({as:r="div",className:t,type:i="valid",tooltip:s=!1,...l},c)=>Mt.jsx(r,{...l,ref:c,className:Ie(t,`${i}-${s?"tooltip":"feedback"}`)}));au.displayName="Feedback";au.propTypes=WR;const da=lt.createContext({}),hp=lt.forwardRef(({id:r,bsPrefix:t,className:i,type:s="checkbox",isValid:l=!1,isInvalid:c=!1,as:f="input",...d},m)=>{const{controlId:p}=lt.useContext(da);return t=tn(t,"form-check-input"),Mt.jsx(f,{...d,ref:m,type:s,id:r||p,className:Ie(i,t,l&&"is-valid",c&&"is-invalid")})});hp.displayName="FormCheckInput";const Qc=lt.forwardRef(({bsPrefix:r,className:t,htmlFor:i,...s},l)=>{const{controlId:c}=lt.useContext(da);return r=tn(r,"form-check-label"),Mt.jsx("label",{...s,ref:l,htmlFor:i||c,className:Ie(t,r)})});Qc.displayName="FormCheckLabel";const Q0=lt.forwardRef(({id:r,bsPrefix:t,bsSwitchPrefix:i,inline:s=!1,reverse:l=!1,disabled:c=!1,isValid:f=!1,isInvalid:d=!1,feedbackTooltip:m=!1,feedback:p,feedbackType:_,className:x,style:v,title:M="",type:E="checkbox",label:w,children:y,as:g="input",...z},O)=>{t=tn(t,"form-check"),i=tn(i,"form-switch");const{controlId:D}=lt.useContext(da),F=lt.useMemo(()=>({controlId:r||D}),[D,r]),N=!y&&w!=null&&w!==!1||HR(y,Qc),B=Mt.jsx(hp,{...z,type:E==="switch"?"checkbox":E,ref:O,isValid:f,isInvalid:d,disabled:c,as:g});return Mt.jsx(da.Provider,{value:F,children:Mt.jsx("div",{style:v,className:Ie(x,N&&t,s&&`${t}-inline`,l&&`${t}-reverse`,E==="switch"&&i),children:y||Mt.jsxs(Mt.Fragment,{children:[B,N&&Mt.jsx(Qc,{title:M,children:w}),p&&Mt.jsx(au,{type:_,tooltip:m,children:p})]})})})});Q0.displayName="FormCheck";const Jc=Object.assign(Q0,{Input:hp,Label:Qc}),J0=lt.forwardRef(({bsPrefix:r,type:t,size:i,htmlSize:s,id:l,className:c,isValid:f=!1,isInvalid:d=!1,plaintext:m,readOnly:p,as:_="input",...x},v)=>{const{controlId:M}=lt.useContext(da);return r=tn(r,"form-control"),Mt.jsx(_,{...x,type:t,size:s,ref:v,readOnly:p,id:l||M,className:Ie(c,m?`${r}-plaintext`:r,i&&`${r}-${i}`,t==="color"&&`${r}-color`,f&&"is-valid",d&&"is-invalid")})});J0.displayName="FormControl";const qR=Object.assign(J0,{Feedback:au}),$0=lt.forwardRef(({className:r,bsPrefix:t,as:i="div",...s},l)=>(t=tn(t,"form-floating"),Mt.jsx(i,{ref:l,className:Ie(r,t),...s})));$0.displayName="FormFloating";const dp=lt.forwardRef(({controlId:r,as:t="div",...i},s)=>{const l=lt.useMemo(()=>({controlId:r}),[r]);return Mt.jsx(da.Provider,{value:l,children:Mt.jsx(t,{...i,ref:s})})});dp.displayName="FormGroup";const tx=lt.forwardRef(({as:r="label",bsPrefix:t,column:i=!1,visuallyHidden:s=!1,className:l,htmlFor:c,...f},d)=>{const{controlId:m}=lt.useContext(da);t=tn(t,"form-label");let p="col-form-label";typeof i=="string"&&(p=`${p} ${p}-${i}`);const _=Ie(l,t,s&&"visually-hidden",i&&p);return c=c||m,i?Mt.jsx(Ui,{ref:d,as:"label",className:_,htmlFor:c,...f}):Mt.jsx(r,{ref:d,className:_,htmlFor:c,...f})});tx.displayName="FormLabel";const ex=lt.forwardRef(({bsPrefix:r,className:t,id:i,...s},l)=>{const{controlId:c}=lt.useContext(da);return r=tn(r,"form-range"),Mt.jsx("input",{...s,type:"range",ref:l,className:Ie(t,r),id:i||c})});ex.displayName="FormRange";const nx=lt.forwardRef(({bsPrefix:r,size:t,htmlSize:i,className:s,isValid:l=!1,isInvalid:c=!1,id:f,...d},m)=>{const{controlId:p}=lt.useContext(da);return r=tn(r,"form-select"),Mt.jsx("select",{...d,size:i,ref:m,className:Ie(s,r,t&&`${r}-${t}`,l&&"is-valid",c&&"is-invalid"),id:f||p})});nx.displayName="FormSelect";const ix=lt.forwardRef(({bsPrefix:r,className:t,as:i="small",muted:s,...l},c)=>(r=tn(r,"form-text"),Mt.jsx(i,{...l,ref:c,className:Ie(t,r,s&&"text-muted")})));ix.displayName="FormText";const ax=lt.forwardRef((r,t)=>Mt.jsx(Jc,{...r,ref:t,type:"switch"}));ax.displayName="Switch";const YR=Object.assign(ax,{Input:Jc.Input,Label:Jc.Label}),sx=lt.forwardRef(({bsPrefix:r,className:t,children:i,controlId:s,label:l,...c},f)=>(r=tn(r,"form-floating"),Mt.jsxs(dp,{ref:f,className:Ie(t,r),controlId:s,...c,children:[i,Mt.jsx("label",{htmlFor:s,children:l})]})));sx.displayName="FloatingLabel";const jR={_ref:fa.any,validated:fa.bool,as:fa.elementType},pp=lt.forwardRef(({className:r,validated:t,as:i="form",...s},l)=>Mt.jsx(i,{...s,ref:l,className:Ie(r,t&&"was-validated")}));pp.displayName="Form";pp.propTypes=jR;const ZR=Object.assign(pp,{Group:dp,Control:qR,Floating:$0,Check:Jc,Switch:YR,Label:tx,Text:ix,Range:ex,Select:nx,FloatingLabel:sx}),t0=r=>!r||typeof r=="function"?r:t=>{r.current=t};function KR(r,t){const i=t0(r),s=t0(t);return l=>{i&&i(l),s&&s(l)}}function mp(r,t){return lt.useMemo(()=>KR(r,t),[r,t])}var Fc;function e0(r){if((!Fc&&Fc!==0||r)&&Yr){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),Fc=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Fc}function QR(){return lt.useState(null)}function Kh(r){r===void 0&&(r=nu());try{var t=r.activeElement;return!t||!t.nodeName?null:t}catch{return r.body}}function JR(r){const t=lt.useRef(r);return t.current=r,t}function $R(r){const t=JR(r);lt.useEffect(()=>()=>t.current(),[])}function tC(r=document){const t=r.defaultView;return Math.abs(t.innerWidth-r.documentElement.clientWidth)}const n0=XR("modal-open");class _p{constructor({ownerDocument:t,handleContainerOverflow:i=!0,isRTL:s=!1}={}){this.handleContainerOverflow=i,this.isRTL=s,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return tC(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const i={overflow:"hidden"},s=this.isRTL?"paddingLeft":"paddingRight",l=this.getElement();t.style={overflow:l.style.overflow,[s]:l.style[s]},t.scrollBarWidth&&(i[s]=`${parseInt(Ds(l,s)||"0",10)+t.scrollBarWidth}px`),l.setAttribute(n0,""),Ds(l,i)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const i=this.getElement();i.removeAttribute(n0),Object.assign(i.style,t.style)}add(t){let i=this.modals.indexOf(t);return i!==-1||(i=this.modals.length,this.modals.push(t),this.setModalAttributes(t),i!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),i}remove(t){const i=this.modals.indexOf(t);i!==-1&&(this.modals.splice(i,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const Qh=(r,t)=>Yr?r==null?(t||nu()).body:(typeof r=="function"&&(r=r()),r&&"current"in r&&(r=r.current),r&&("nodeType"in r||r.getBoundingClientRect)?r:null):null;function eC(r,t){const i=fp(),[s,l]=lt.useState(()=>Qh(r,i==null?void 0:i.document));if(!s){const c=Qh(r);c&&l(c)}return lt.useEffect(()=>{},[t,s]),lt.useEffect(()=>{const c=Qh(r);c!==s&&l(c)},[r,s]),s}function nC({children:r,in:t,onExited:i,mountOnEnter:s,unmountOnExit:l}){const c=lt.useRef(null),f=lt.useRef(t),d=As(i);lt.useEffect(()=>{t?f.current=!0:d(c.current)},[t,d]);const m=mp(c,iu(r)),p=lt.cloneElement(r,{ref:m});return t?p:l||!f.current&&s?null:p}const iC=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function aC(r,t){if(r==null)return{};var i={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(t.indexOf(s)>=0)continue;i[s]=r[s]}return i}function sC(r){let{onEnter:t,onEntering:i,onEntered:s,onExit:l,onExiting:c,onExited:f,addEndListener:d,children:m}=r,p=aC(r,iC);const _=lt.useRef(null),x=mp(_,iu(m)),v=D=>F=>{D&&_.current&&D(_.current,F)},M=lt.useCallback(v(t),[t]),E=lt.useCallback(v(i),[i]),w=lt.useCallback(v(s),[s]),y=lt.useCallback(v(l),[l]),g=lt.useCallback(v(c),[c]),z=lt.useCallback(v(f),[f]),O=lt.useCallback(v(d),[d]);return Object.assign({},p,{nodeRef:_},t&&{onEnter:M},i&&{onEntering:E},s&&{onEntered:w},l&&{onExit:y},c&&{onExiting:g},f&&{onExited:z},d&&{addEndListener:O},{children:typeof m=="function"?(D,F)=>m(D,Object.assign({},F,{ref:x})):lt.cloneElement(m,{ref:x})})}const rC=["component"];function oC(r,t){if(r==null)return{};var i={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(t.indexOf(s)>=0)continue;i[s]=r[s]}return i}const lC=lt.forwardRef((r,t)=>{let{component:i}=r,s=oC(r,rC);const l=sC(s);return Mt.jsx(i,Object.assign({ref:t},l))});function cC({in:r,onTransition:t}){const i=lt.useRef(null),s=lt.useRef(!0),l=As(t);return Jv(()=>{if(!i.current)return;let c=!1;return l({in:r,element:i.current,initial:s.current,isStale:()=>c}),()=>{c=!0}},[r,l]),Jv(()=>(s.current=!1,()=>{s.current=!0}),[]),i}function uC({children:r,in:t,onExited:i,onEntered:s,transition:l}){const[c,f]=lt.useState(!t);t&&c&&f(!1);const d=cC({in:!!t,onTransition:p=>{const _=()=>{p.isStale()||(p.in?s==null||s(p.element,p.initial):(f(!0),i==null||i(p.element)))};Promise.resolve(l(p)).then(_,x=>{throw p.in||f(!0),x})}}),m=mp(d,iu(r));return c&&!t?null:lt.cloneElement(r,{ref:m})}function i0(r,t,i){return r?Mt.jsx(lC,Object.assign({},i,{component:r})):t?Mt.jsx(uC,Object.assign({},i,{transition:t})):Mt.jsx(nC,Object.assign({},i))}const fC=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function hC(r,t){if(r==null)return{};var i={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(t.indexOf(s)>=0)continue;i[s]=r[s]}return i}let Jh;function dC(r){return Jh||(Jh=new _p({ownerDocument:r==null?void 0:r.document})),Jh}function pC(r){const t=fp(),i=r||dC(t),s=lt.useRef({dialog:null,backdrop:null});return Object.assign(s.current,{add:()=>i.add(s.current),remove:()=>i.remove(s.current),isTopModal:()=>i.isTopModal(s.current),setDialogRef:lt.useCallback(l=>{s.current.dialog=l},[]),setBackdropRef:lt.useCallback(l=>{s.current.backdrop=l},[])})}const rx=lt.forwardRef((r,t)=>{let{show:i=!1,role:s="dialog",className:l,style:c,children:f,backdrop:d=!0,keyboard:m=!0,onBackdropClick:p,onEscapeKeyDown:_,transition:x,runTransition:v,backdropTransition:M,runBackdropTransition:E,autoFocus:w=!0,enforceFocus:y=!0,restoreFocus:g=!0,restoreFocusOptions:z,renderDialog:O,renderBackdrop:D=ce=>Mt.jsx("div",Object.assign({},ce)),manager:F,container:N,onShow:B,onHide:G=()=>{},onExit:A,onExited:T,onExiting:I,onEnter:rt,onEntering:Q,onEntered:ct}=r,ut=hC(r,fC);const V=fp(),et=eC(N),k=pC(F),St=CR(),U=wR(i),[nt,Et]=lt.useState(!i),At=lt.useRef(null);lt.useImperativeHandle(t,()=>k,[k]),Yr&&!U&&i&&(At.current=Kh(V==null?void 0:V.document)),i&&nt&&Et(!1);const W=As(()=>{if(k.add(),Ut.current=Kc(document,"keydown",Ct),Yt.current=Kc(document,"focus",()=>setTimeout(vt),!0),B&&B(),w){var ce,ae;const re=Kh((ce=(ae=k.dialog)==null?void 0:ae.ownerDocument)!=null?ce:V==null?void 0:V.document);k.dialog&&re&&!$v(k.dialog,re)&&(At.current=re,k.dialog.focus())}}),pt=As(()=>{if(k.remove(),Ut.current==null||Ut.current(),Yt.current==null||Yt.current(),g){var ce;(ce=At.current)==null||ce.focus==null||ce.focus(z),At.current=null}});lt.useEffect(()=>{!i||!et||W()},[i,et,W]),lt.useEffect(()=>{nt&&pt()},[nt,pt]),$R(()=>{pt()});const vt=As(()=>{if(!y||!St()||!k.isTopModal())return;const ce=Kh(V==null?void 0:V.document);k.dialog&&ce&&!$v(k.dialog,ce)&&k.dialog.focus()}),bt=As(ce=>{ce.target===ce.currentTarget&&(p==null||p(ce),d===!0&&G())}),Ct=As(ce=>{m&&mR(ce)&&k.isTopModal()&&(_==null||_(ce),ce.defaultPrevented||G())}),Yt=lt.useRef(),Ut=lt.useRef(),_e=(...ce)=>{Et(!0),T==null||T(...ce)};if(!et)return null;const xe=Object.assign({role:s,ref:k.setDialogRef,"aria-modal":s==="dialog"?!0:void 0},ut,{style:c,className:l,tabIndex:-1});let te=O?O(xe):Mt.jsx("div",Object.assign({},xe,{children:lt.cloneElement(f,{role:"document"})}));te=i0(x,v,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!i,onExit:A,onExiting:I,onExited:_e,onEnter:rt,onEntering:Q,onEntered:ct,children:te});let H=null;return d&&(H=D({ref:k.setBackdropRef,onClick:bt}),H=i0(M,E,{in:!!i,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:H})),Mt.jsx(Mt.Fragment,{children:Or.createPortal(Mt.jsxs(Mt.Fragment,{children:[H,te]}),et)})});rx.displayName="Modal";const mC=Object.assign(rx,{Manager:_p});function _C(r,t){return r.classList?r.classList.contains(t):(" "+(r.className.baseVal||r.className)+" ").indexOf(" "+t+" ")!==-1}function gC(r,t){r.classList?r.classList.add(t):_C(r,t)||(typeof r.className=="string"?r.className=r.className+" "+t:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+t))}function a0(r,t){return r.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function vC(r,t){r.classList?r.classList.remove(t):typeof r.className=="string"?r.className=a0(r.className,t):r.setAttribute("class",a0(r.className&&r.className.baseVal||"",t))}const wr={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class xC extends _p{adjustAndStore(t,i,s){const l=i.style[t];i.dataset[t]=l,Ds(i,{[t]:`${parseFloat(Ds(i,t))+s}px`})}restore(t,i){const s=i.dataset[t];s!==void 0&&(delete i.dataset[t],Ds(i,{[t]:s}))}setContainerStyle(t){super.setContainerStyle(t);const i=this.getElement();if(gC(i,"modal-open"),!t.scrollBarWidth)return;const s=this.isRTL?"paddingLeft":"paddingRight",l=this.isRTL?"marginLeft":"marginRight";Cr(i,wr.FIXED_CONTENT).forEach(c=>this.adjustAndStore(s,c,t.scrollBarWidth)),Cr(i,wr.STICKY_CONTENT).forEach(c=>this.adjustAndStore(l,c,-t.scrollBarWidth)),Cr(i,wr.NAVBAR_TOGGLER).forEach(c=>this.adjustAndStore(l,c,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const i=this.getElement();vC(i,"modal-open");const s=this.isRTL?"paddingLeft":"paddingRight",l=this.isRTL?"marginLeft":"marginRight";Cr(i,wr.FIXED_CONTENT).forEach(c=>this.restore(s,c)),Cr(i,wr.STICKY_CONTENT).forEach(c=>this.restore(l,c)),Cr(i,wr.NAVBAR_TOGGLER).forEach(c=>this.restore(l,c))}}let $h;function SC(r){return $h||($h=new xC(r)),$h}const ox=lt.forwardRef(({className:r,bsPrefix:t,as:i="div",...s},l)=>(t=tn(t,"modal-body"),Mt.jsx(i,{ref:l,className:Ie(r,t),...s})));ox.displayName="ModalBody";const lx=lt.createContext({onHide(){}}),gp=lt.forwardRef(({bsPrefix:r,className:t,contentClassName:i,centered:s,size:l,fullscreen:c,children:f,scrollable:d,...m},p)=>{r=tn(r,"modal");const _=`${r}-dialog`,x=typeof c=="string"?`${r}-fullscreen-${c}`:`${r}-fullscreen`;return Mt.jsx("div",{...m,ref:p,className:Ie(_,t,l&&`${r}-${l}`,s&&`${_}-centered`,d&&`${_}-scrollable`,c&&x),children:Mt.jsx("div",{className:Ie(`${r}-content`,i),children:f})})});gp.displayName="ModalDialog";const cx=lt.forwardRef(({className:r,bsPrefix:t,as:i="div",...s},l)=>(t=tn(t,"modal-footer"),Mt.jsx(i,{ref:l,className:Ie(r,t),...s})));cx.displayName="ModalFooter";const yC=lt.forwardRef(({closeLabel:r="Close",closeVariant:t,closeButton:i=!1,onHide:s,children:l,...c},f)=>{const d=lt.useContext(lx),m=qd(()=>{d==null||d.onHide(),s==null||s()});return Mt.jsxs("div",{ref:f,...c,children:[l,i&&Mt.jsx(up,{"aria-label":r,variant:t,onClick:m})]})}),ux=lt.forwardRef(({bsPrefix:r,className:t,closeLabel:i="Close",closeButton:s=!1,...l},c)=>(r=tn(r,"modal-header"),Mt.jsx(yC,{ref:c,...l,className:Ie(t,r),closeLabel:i,closeButton:s})));ux.displayName="ModalHeader";const MC=AR("h4"),fx=lt.forwardRef(({className:r,bsPrefix:t,as:i=MC,...s},l)=>(t=tn(t,"modal-title"),Mt.jsx(i,{ref:l,className:Ie(r,t),...s})));fx.displayName="ModalTitle";function EC(r){return Mt.jsx(cp,{...r,timeout:null})}function TC(r){return Mt.jsx(cp,{...r,timeout:null})}const hx=lt.forwardRef(({bsPrefix:r,className:t,style:i,dialogClassName:s,contentClassName:l,children:c,dialogAs:f=gp,"data-bs-theme":d,"aria-labelledby":m,"aria-describedby":p,"aria-label":_,show:x=!1,animation:v=!0,backdrop:M=!0,keyboard:E=!0,onEscapeKeyDown:w,onShow:y,onHide:g,container:z,autoFocus:O=!0,enforceFocus:D=!0,restoreFocus:F=!0,restoreFocusOptions:N,onEntered:B,onExit:G,onExiting:A,onEnter:T,onEntering:I,onExited:rt,backdropClassName:Q,manager:ct,...ut},V)=>{const[et,k]=lt.useState({}),[St,U]=lt.useState(!1),nt=lt.useRef(!1),Et=lt.useRef(!1),At=lt.useRef(null),[W,pt]=QR(),vt=j0(V,pt),bt=qd(g),Ct=eR();r=tn(r,"modal");const Yt=lt.useMemo(()=>({onHide:bt}),[bt]);function Ut(){return ct||SC({isRTL:Ct})}function _e(ot){if(!Yr)return;const Ft=Ut().getScrollbarWidth()>0,Dt=ot.scrollHeight>nu(ot).documentElement.clientHeight;k({paddingRight:Ft&&!Dt?e0():void 0,paddingLeft:!Ft&&Dt?e0():void 0})}const xe=qd(()=>{W&&_e(W.dialog)});IR(()=>{Wd(window,"resize",xe),At.current==null||At.current()});const te=()=>{nt.current=!0},H=ot=>{nt.current&&W&&ot.target===W.dialog&&(Et.current=!0),nt.current=!1},ce=()=>{U(!0),At.current=Y0(W.dialog,()=>{U(!1)})},ae=ot=>{ot.target===ot.currentTarget&&ce()},re=ot=>{if(M==="static"){ae(ot);return}if(Et.current||ot.target!==ot.currentTarget){Et.current=!1;return}g==null||g()},kt=ot=>{E?w==null||w(ot):(ot.preventDefault(),M==="static"&&ce())},Le=(ot,Ft)=>{ot&&_e(ot),T==null||T(ot,Ft)},Xt=ot=>{At.current==null||At.current(),G==null||G(ot)},L=(ot,Ft)=>{I==null||I(ot,Ft),q0(window,"resize",xe)},b=ot=>{ot&&(ot.style.display=""),rt==null||rt(ot),Wd(window,"resize",xe)},it=lt.useCallback(ot=>Mt.jsx("div",{...ot,className:Ie(`${r}-backdrop`,Q,!v&&"show")}),[v,Q,r]),mt={...i,...et};mt.display="block";const yt=ot=>Mt.jsx("div",{role:"dialog",...ot,style:mt,className:Ie(t,r,St&&`${r}-static`,!v&&"show"),onClick:M?re:void 0,onMouseUp:H,"data-bs-theme":d,"aria-label":_,"aria-labelledby":m,"aria-describedby":p,children:Mt.jsx(f,{...ut,onMouseDown:te,className:s,contentClassName:l,children:c})});return Mt.jsx(lx.Provider,{value:Yt,children:Mt.jsx(mC,{show:x,ref:vt,backdrop:M,container:z,keyboard:!0,autoFocus:O,enforceFocus:D,restoreFocus:F,restoreFocusOptions:N,onEscapeKeyDown:kt,onShow:y,onHide:g,onEnter:Le,onEntering:L,onEntered:B,onExit:Xt,onExiting:A,onExited:b,manager:Ut(),transition:v?EC:void 0,backdropTransition:v?TC:void 0,renderBackdrop:it,renderDialog:yt})})});hx.displayName="Modal";const Qo=Object.assign(hx,{Body:ox,Header:ux,Title:fx,Footer:cx,Dialog:gp,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),tl=lt.forwardRef(({bsPrefix:r,className:t,as:i="div",...s},l)=>{const c=tn(r,"row"),f=k0(),d=X0(),m=`${c}-cols`,p=[];return f.forEach(_=>{const x=s[_];delete s[_];let v;x!=null&&typeof x=="object"?{cols:v}=x:v=x;const M=_!==d?`-${_}`:"";v!=null&&p.push(`${m}${M}-${v}`)}),Mt.jsx(i,{ref:l,...s,className:Ie(t,c,...p)})});tl.displayName="Row";function bC(){const[r,t]=lt.useState("english"),[i,s]=lt.useState(""),[l,c]=lt.useState(0),[f,d]=lt.useState("playing"),[m,p]=lt.useState(new Set),[_,x]=lt.useState(!1),[v,M]=lt.useState(()=>{const N=localStorage.getItem("hangmanScores");return N?JSON.parse(N):{wins:0,losses:0}}),E=()=>{const N=localStorage.getItem("hangmanScores");return N?JSON.parse(N):{wins:0,losses:0}},w="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");async function y(N){try{let B,G=!1,A;for(;!G;)if(N==="spanish"?B=await fetch("https://random-word-api.herokuapp.com/word?lang=es"):N==="italian"?B=await fetch("https://random-word-api.herokuapp.com/word?lang=it"):N==="french"?B=await fetch("https://random-word-api.herokuapp.com/word?lang=fr"):N==="brazilian-portuguese"?B=await fetch("https://random-word-api.herokuapp.com/word?lang=pt-br"):B=await fetch("https://random-word-api.herokuapp.com/word"),A=await B.json(),A){const T=A[0];/^[a-zA-Z]+$/.test(T)&&(G=!0)}return console.log(A),A[0].toUpperCase()}catch(B){return console.error("Error fetching word:",B),null}}const g=async()=>{const N=await y(r);N&&(s(N),c(0),d("playing"),p(new Set))};lt.useEffect(()=>{g()},[r]);const z=N=>{if(f!=="playing")return;const B=new Set([...m,N]);if(p(B),i.includes(N))i.split("").every(A=>B.has(A))&&(d("won"),O("wins"));else{const G=l+1;c(G),G>=8&&(d("lost"),O("losses"))}},O=N=>{const B=E(),G={wins:N==="wins"?B.wins+1:B.wins,losses:N==="losses"?B.losses+1:B.losses};localStorage.setItem("hangmanScores",JSON.stringify(G)),M(G)},D=f!=="playing",F=f==="won";return Mt.jsxs(Yd,{fluid:!0,className:"p-4 body-container",children:[Mt.jsxs(tl,{className:"title-row",children:[Mt.jsx(Ui,{children:Mt.jsx("h1",{className:"hangman-title",children:"Hangman"})}),Mt.jsxs(Ui,{className:"title-col-extras",children:[Mt.jsxs("div",{className:"language-select-container",children:[Mt.jsx("h2",{children:"Language:"}),Mt.jsxs(ZR.Select,{onChange:N=>t(N.target.value),children:[Mt.jsx("option",{value:"english",children:"English"}),Mt.jsx("option",{value:"spanish",children:"Spanish"}),Mt.jsx("option",{value:"italian",children:"Italian"}),Mt.jsx("option",{value:"german",children:"German"}),Mt.jsx("option",{value:"french",children:"French"})]})]}),Mt.jsx(qc,{className:"new-game-btn",onClick:g,children:"New Game"})]})]}),Mt.jsxs(tl,{children:[Mt.jsx(Ui,{children:Mt.jsxs("h2",{children:["Lives Left: ",8-l]})}),Mt.jsx(Ui,{children:Mt.jsxs("h2",{children:["Wins: ",v.wins]})}),Mt.jsx(Ui,{children:Mt.jsxs("h2",{children:["Losses: ",v.losses]})})]}),Mt.jsxs(tl,{className:"game-row",children:[Mt.jsx(Ui,{children:Mt.jsx(j1,{mistakes:l})}),Mt.jsx(Ui,{children:Mt.jsx(Yd,{fluid:!0,className:"letter-container",children:w.map(N=>Mt.jsx(qc,{variant:"outline-primary",className:"letter-btn",disabled:m.has(N)||f!=="playing",onClick:()=>z(N),children:N},N))})})]}),Mt.jsx(tl,{children:Mt.jsx(Ui,{children:Mt.jsx("div",{className:"word-display",children:i.split("").map((N,B)=>Mt.jsx("span",{className:`word-letter ${m.has(N)?"revealed":""}`,children:m.has(N)?N:" "},B))})})}),D&&Mt.jsxs(Qo,{show:!0,centered:!0,children:[Mt.jsx(Qo.Header,{children:Mt.jsx(Qo.Title,{children:F?"You Won! 🎉":"You Lost! 😔"})}),Mt.jsx(Qo.Body,{children:F?"Congratulations! You've guessed the word correctly!":"Don't worry, you can try again with a new word!"}),Mt.jsx(Qo.Footer,{children:Mt.jsx(qc,{variant:"primary",onClick:g,children:"Play Again"})})]})]})}Ty.createRoot(document.getElementById("root")).render(Mt.jsx(lt.StrictMode,{children:Mt.jsx(bC,{})}));
