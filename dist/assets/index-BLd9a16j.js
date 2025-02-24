(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $s(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Z={},Zt=[],Ke=()=>{},cl=()=>!1,kr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Hs=t=>t.startsWith("onUpdate:"),fe=Object.assign,Bs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ll=Object.prototype.hasOwnProperty,G=(t,e)=>ll.call(t,e),H=Array.isArray,en=t=>xr(t)==="[object Map]",Bo=t=>xr(t)==="[object Set]",j=t=>typeof t=="function",oe=t=>typeof t=="string",Rt=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",jo=t=>(re(t)||j(t))&&j(t.then)&&j(t.catch),Vo=Object.prototype.toString,xr=t=>Vo.call(t),ul=t=>xr(t).slice(8,-1),Wo=t=>xr(t)==="[object Object]",js=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Sn=$s(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fl=/-(\w)/g,Pe=Nr(t=>t.replace(fl,(e,n)=>n?n.toUpperCase():"")),dl=/\B([A-Z])/g,Vt=Nr(t=>t.replace(dl,"-$1").toLowerCase()),Dr=Nr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gr=Nr(t=>t?`on${Dr(t)}`:""),wt=(t,e)=>!Object.is(t,e),ar=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ko=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},gs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vi;const Mr=()=>vi||(vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vs(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=oe(r)?ml(r):Vs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(oe(t)||re(t))return t}const hl=/;(?![^(]*\))/g,pl=/:([^]+)/,gl=/\/\*[^]*?\*\//g;function ml(t){const e={};return t.replace(gl,"").split(hl).forEach(n=>{if(n){const r=n.split(pl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ws(t){let e="";if(oe(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=Ws(t[n]);r&&(e+=r+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vl=$s(_l);function zo(t){return!!t||t===""}const qo=t=>!!(t&&t.__v_isRef===!0),Go=t=>oe(t)?t:t==null?"":H(t)||re(t)&&(t.toString===Vo||!j(t.toString))?qo(t)?Go(t.value):JSON.stringify(t,Jo,2):String(t),Jo=(t,e)=>qo(e)?Jo(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Jr(r,i)+" =>"]=s,n),{})}:Bo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Jr(n))}:Rt(e)?Jr(e):re(e)&&!H(e)&&!Wo(e)?String(e):e,Jr=(t,e="")=>{var n;return Rt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class yl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ee;try{return Ee=this,e()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function bl(){return Ee}let ne;const Yr=new WeakSet;class Yo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Yr.has(this)&&(Yr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yi(this),Zo(this);const e=ne,n=Ne;ne=this,Ne=!0;try{return this.fn()}finally{ea(this),ne=e,Ne=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qs(e);this.deps=this.depsTail=void 0,yi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Yr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ms(this)&&this.run()}get dirty(){return ms(this)}}let Xo=0,Tn,Rn;function Qo(t,e=!1){if(t.flags|=8,e){t.next=Rn,Rn=t;return}t.next=Tn,Tn=t}function Ks(){Xo++}function zs(){if(--Xo>0)return;if(Rn){let e=Rn;for(Rn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Tn;){let e=Tn;for(Tn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Zo(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ea(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),qs(r),El(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ms(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ta(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ta(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ln))return;t.globalVersion=Ln;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ms(t)){t.flags&=-3;return}const n=ne,r=Ne;ne=t,Ne=!0;try{Zo(t);const s=t.fn(t._value);(e.version===0||wt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ne=n,Ne=r,ea(t),t.flags&=-3}}function qs(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)qs(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function El(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ne=!0;const na=[];function Ct(){na.push(Ne),Ne=!1}function At(){const t=na.pop();Ne=t===void 0?!0:t}function yi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ne;ne=void 0;try{e()}finally{ne=n}}}let Ln=0;class wl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ne||!Ne||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new wl(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,ra(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=r)}return n}trigger(e){this.version++,Ln++,this.notify(e)}notify(e){Ks();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{zs()}}}function ra(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ra(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const _s=new WeakMap,Lt=Symbol(""),vs=Symbol(""),Un=Symbol("");function ce(t,e,n){if(Ne&&ne){let r=_s.get(t);r||_s.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Gs),s.map=r,s.key=n),s.track()}}function et(t,e,n,r,s,i){const o=_s.get(t);if(!o){Ln++;return}const a=c=>{c&&c.trigger()};if(Ks(),e==="clear")o.forEach(a);else{const c=H(t),l=c&&js(n);if(c&&n==="length"){const u=Number(r);o.forEach((h,g)=>{(g==="length"||g===Un||!Rt(g)&&g>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Un)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Lt)),en(t)&&a(o.get(vs)));break;case"delete":c||(a(o.get(Lt)),en(t)&&a(o.get(vs)));break;case"set":en(t)&&a(o.get(Lt));break}}zs()}function Gt(t){const e=q(t);return e===t?e:(ce(e,"iterate",Un),De(t)?e:e.map(he))}function Js(t){return ce(t=q(t),"iterate",Un),t}const Il={__proto__:null,[Symbol.iterator](){return Xr(this,Symbol.iterator,he)},concat(...t){return Gt(this).concat(...t.map(e=>H(e)?Gt(e):e))},entries(){return Xr(this,"entries",t=>(t[1]=he(t[1]),t))},every(t,e){return Xe(this,"every",t,e,void 0,arguments)},filter(t,e){return Xe(this,"filter",t,e,n=>n.map(he),arguments)},find(t,e){return Xe(this,"find",t,e,he,arguments)},findIndex(t,e){return Xe(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xe(this,"findLast",t,e,he,arguments)},findLastIndex(t,e){return Xe(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xe(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qr(this,"includes",t)},indexOf(...t){return Qr(this,"indexOf",t)},join(t){return Gt(this).join(t)},lastIndexOf(...t){return Qr(this,"lastIndexOf",t)},map(t,e){return Xe(this,"map",t,e,void 0,arguments)},pop(){return mn(this,"pop")},push(...t){return mn(this,"push",t)},reduce(t,...e){return bi(this,"reduce",t,e)},reduceRight(t,...e){return bi(this,"reduceRight",t,e)},shift(){return mn(this,"shift")},some(t,e){return Xe(this,"some",t,e,void 0,arguments)},splice(...t){return mn(this,"splice",t)},toReversed(){return Gt(this).toReversed()},toSorted(t){return Gt(this).toSorted(t)},toSpliced(...t){return Gt(this).toSpliced(...t)},unshift(...t){return mn(this,"unshift",t)},values(){return Xr(this,"values",he)}};function Xr(t,e,n){const r=Js(t),s=r[e]();return r!==t&&!De(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Sl=Array.prototype;function Xe(t,e,n,r,s,i){const o=Js(t),a=o!==t&&!De(t),c=o[e];if(c!==Sl[e]){const h=c.apply(t,i);return a?he(h):h}let l=n;o!==t&&(a?l=function(h,g){return n.call(this,he(h),g,t)}:n.length>2&&(l=function(h,g){return n.call(this,h,g,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function bi(t,e,n,r){const s=Js(t);let i=n;return s!==t&&(De(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,he(a),c,t)}),s[e](i,...r)}function Qr(t,e,n){const r=q(t);ce(r,"iterate",Un);const s=r[e](...n);return(s===-1||s===!1)&&Qs(n[0])?(n[0]=q(n[0]),r[e](...n)):s}function mn(t,e,n=[]){Ct(),Ks();const r=q(t)[e].apply(t,n);return zs(),At(),r}const Tl=$s("__proto__,__v_isRef,__isVue"),sa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rt));function Rl(t){Rt(t)||(t=String(t));const e=q(this);return ce(e,"has",t),e.hasOwnProperty(t)}class ia{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ll:la:i?ca:aa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=H(e);if(!s){let c;if(o&&(c=Il[n]))return c;if(n==="hasOwnProperty")return Rl}const a=Reflect.get(e,n,ue(e)?e:r);return(Rt(n)?sa.has(n):Tl(n))||(s||ce(e,"get",n),i)?a:ue(a)?o&&js(n)?a:a.value:re(a)?s?fa(a):Lr(a):a}}class oa extends ia{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Ut(i);if(!De(r)&&!Ut(r)&&(i=q(i),r=q(r)),!H(e)&&ue(i)&&!ue(r))return c?!1:(i.value=r,!0)}const o=H(e)&&js(n)?Number(n)<e.length:G(e,n),a=Reflect.set(e,n,r,ue(e)?e:s);return e===q(s)&&(o?wt(r,i)&&et(e,"set",n,r):et(e,"add",n,r)),a}deleteProperty(e,n){const r=G(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&et(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Rt(n)||!sa.has(n))&&ce(e,"has",n),r}ownKeys(e){return ce(e,"iterate",H(e)?"length":Lt),Reflect.ownKeys(e)}}class Cl extends ia{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Al=new oa,Pl=new Cl,Ol=new oa(!0);const ys=t=>t,nr=t=>Reflect.getPrototypeOf(t);function kl(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=en(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ys:e?bs:he;return!e&&ce(i,"iterate",c?vs:Lt),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:a?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function rr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xl(t,e){const n={get(s){const i=this.__v_raw,o=q(i),a=q(s);t||(wt(s,a)&&ce(o,"get",s),ce(o,"get",a));const{has:c}=nr(o),l=e?ys:t?bs:he;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ce(q(s),"iterate",Lt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=q(i),a=q(s);return t||(wt(s,a)&&ce(o,"has",s),ce(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=q(a),l=e?ys:t?bs:he;return!t&&ce(c,"iterate",Lt),a.forEach((u,h)=>s.call(i,l(u),l(h),o))}};return fe(n,t?{add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear")}:{add(s){!e&&!De(s)&&!Ut(s)&&(s=q(s));const i=q(this);return nr(i).has.call(i,s)||(i.add(s),et(i,"add",s,s)),this},set(s,i){!e&&!De(i)&&!Ut(i)&&(i=q(i));const o=q(this),{has:a,get:c}=nr(o);let l=a.call(o,s);l||(s=q(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?wt(i,u)&&et(o,"set",s,i):et(o,"add",s,i),this},delete(s){const i=q(this),{has:o,get:a}=nr(i);let c=o.call(i,s);c||(s=q(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&et(i,"delete",s,void 0),l},clear(){const s=q(this),i=s.size!==0,o=s.clear();return i&&et(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=kl(s,t,e)}),n}function Ys(t,e){const n=xl(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Nl={get:Ys(!1,!1)},Dl={get:Ys(!1,!0)},Ml={get:Ys(!0,!1)};const aa=new WeakMap,ca=new WeakMap,la=new WeakMap,Ll=new WeakMap;function Ul(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fl(t){return t.__v_skip||!Object.isExtensible(t)?0:Ul(ul(t))}function Lr(t){return Ut(t)?t:Xs(t,!1,Al,Nl,aa)}function ua(t){return Xs(t,!1,Ol,Dl,ca)}function fa(t){return Xs(t,!0,Pl,Ml,la)}function Xs(t,e,n,r,s){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Fl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Cn(t){return Ut(t)?Cn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ut(t){return!!(t&&t.__v_isReadonly)}function De(t){return!!(t&&t.__v_isShallow)}function Qs(t){return t?!!t.__v_raw:!1}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function $l(t){return!G(t,"__v_skip")&&Object.isExtensible(t)&&Ko(t,"__v_skip",!0),t}const he=t=>re(t)?Lr(t):t,bs=t=>re(t)?fa(t):t;function ue(t){return t?t.__v_isRef===!0:!1}function da(t){return ha(t,!1)}function Hl(t){return ha(t,!0)}function ha(t,e){return ue(t)?t:new Bl(t,e)}class Bl{constructor(e,n){this.dep=new Gs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:q(e),this._value=n?e:he(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||De(e)||Ut(e);e=r?e:q(e),wt(e,n)&&(this._rawValue=e,this._value=r?e:he(e),this.dep.trigger())}}function It(t){return ue(t)?t.value:t}const jl={get:(t,e,n)=>e==="__v_raw"?t:It(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function pa(t){return Cn(t)?t:new Proxy(t,jl)}class Vl{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ln-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return Qo(this,!0),!0}get value(){const e=this.dep.track();return ta(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Wl(t,e,n=!1){let r,s;return j(t)?r=t:(r=t.get,s=t.set),new Vl(r,s,n)}const sr={},_r=new WeakMap;let Dt;function Kl(t,e=!1,n=Dt){if(n){let r=_r.get(n);r||_r.set(n,r=[]),r.push(t)}}function zl(t,e,n=Z){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>s?O:De(O)||s===!1||s===0?tt(O,1):tt(O);let u,h,g,m,R=!1,P=!1;if(ue(t)?(h=()=>t.value,R=De(t)):Cn(t)?(h=()=>l(t),R=!0):H(t)?(P=!0,R=t.some(O=>Cn(O)||De(O)),h=()=>t.map(O=>{if(ue(O))return O.value;if(Cn(O))return l(O);if(j(O))return c?c(O,2):O()})):j(t)?e?h=c?()=>c(t,2):t:h=()=>{if(g){Ct();try{g()}finally{At()}}const O=Dt;Dt=u;try{return c?c(t,3,[m]):t(m)}finally{Dt=O}}:h=Ke,e&&s){const O=h,W=s===!0?1/0:s;h=()=>tt(O(),W)}const $=bl(),D=()=>{u.stop(),$&&$.active&&Bs($.effects,u)};if(i&&e){const O=e;e=(...W)=>{O(...W),D()}}let k=P?new Array(t.length).fill(sr):sr;const N=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const W=u.run();if(s||R||(P?W.some((se,ee)=>wt(se,k[ee])):wt(W,k))){g&&g();const se=Dt;Dt=u;try{const ee=[W,k===sr?void 0:P&&k[0]===sr?[]:k,m];c?c(e,3,ee):e(...ee),k=W}finally{Dt=se}}}else u.run()};return a&&a(N),u=new Yo(h),u.scheduler=o?()=>o(N,!1):N,m=O=>Kl(O,!1,u),g=u.onStop=()=>{const O=_r.get(u);if(O){if(c)c(O,4);else for(const W of O)W();_r.delete(u)}},e?r?N(!0):k=u.run():o?o(N.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function tt(t,e=1/0,n){if(e<=0||!re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ue(t))tt(t.value,e,n);else if(H(t))for(let r=0;r<t.length;r++)tt(t[r],e,n);else if(Bo(t)||en(t))t.forEach(r=>{tt(r,e,n)});else if(Wo(t)){for(const r in t)tt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&tt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zn(t,e,n,r){try{return r?t(...r):t()}catch(s){Ur(s,e,n)}}function Ge(t,e,n,r){if(j(t)){const s=zn(t,e,n,r);return s&&jo(s)&&s.catch(i=>{Ur(i,e,n)}),s}if(H(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ge(t[i],e,n,r));return s}}function Ur(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Z;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,c,l)===!1)return}a=a.parent}if(i){Ct(),zn(i,null,10,[t,c,l]),At();return}}ql(t,n,s,r,o)}function ql(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const pe=[];let Ve=-1;const tn=[];let gt=null,Jt=0;const ga=Promise.resolve();let vr=null;function ma(t){const e=vr||ga;return t?e.then(this?t.bind(this):t):e}function Gl(t){let e=Ve+1,n=pe.length;for(;e<n;){const r=e+n>>>1,s=pe[r],i=Fn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Zs(t){if(!(t.flags&1)){const e=Fn(t),n=pe[pe.length-1];!n||!(t.flags&2)&&e>=Fn(n)?pe.push(t):pe.splice(Gl(e),0,t),t.flags|=1,_a()}}function _a(){vr||(vr=ga.then(ya))}function Jl(t){H(t)?tn.push(...t):gt&&t.id===-1?gt.splice(Jt+1,0,t):t.flags&1||(tn.push(t),t.flags|=1),_a()}function Ei(t,e,n=Ve+1){for(;n<pe.length;n++){const r=pe[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;pe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function va(t){if(tn.length){const e=[...new Set(tn)].sort((n,r)=>Fn(n)-Fn(r));if(tn.length=0,gt){gt.push(...e);return}for(gt=e,Jt=0;Jt<gt.length;Jt++){const n=gt[Jt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gt=null,Jt=0}}const Fn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ya(t){try{for(Ve=0;Ve<pe.length;Ve++){const e=pe[Ve];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ve<pe.length;Ve++){const e=pe[Ve];e&&(e.flags&=-2)}Ve=-1,pe.length=0,va(),vr=null,(pe.length||tn.length)&&ya()}}let Ie=null,ba=null;function yr(t){const e=Ie;return Ie=t,ba=t&&t.type.__scopeId||null,e}function yn(t,e=Ie,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ki(-1);const i=yr(e);let o;try{o=t(...s)}finally{yr(i),r._d&&ki(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function An(t,e){if(Ie===null)return t;const n=Br(Ie),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Z]=e[s];i&&(j(i)&&(i={mounted:i,updated:i}),i.deep&&tt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function xt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ct(),Ge(c,n,8,[t.el,a,t,e]),At())}}const Yl=Symbol("_vte"),Xl=t=>t.__isTeleport;function ei(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ei(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ea(t,e){return j(t)?fe({name:t.name},e,{setup:t}):t}function wa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function br(t,e,n,r,s=!1){if(H(t)){t.forEach((R,P)=>br(R,e&&(H(e)?e[P]:e),n,r,s));return}if(Pn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&br(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Br(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Z?a.refs={}:a.refs,h=a.setupState,g=q(h),m=h===Z?()=>!1:R=>G(g,R);if(l!=null&&l!==c&&(oe(l)?(u[l]=null,m(l)&&(h[l]=null)):ue(l)&&(l.value=null)),j(c))zn(c,a,12,[o,u]);else{const R=oe(c),P=ue(c);if(R||P){const $=()=>{if(t.f){const D=R?m(c)?h[c]:u[c]:c.value;s?H(D)&&Bs(D,i):H(D)?D.includes(i)||D.push(i):R?(u[c]=[i],m(c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else R?(u[c]=o,m(c)&&(h[c]=o)):P&&(c.value=o,t.k&&(u[t.k]=o))};o?($.id=-1,be($,n)):$()}}}Mr().requestIdleCallback;Mr().cancelIdleCallback;const Pn=t=>!!t.type.__asyncLoader,Ia=t=>t.type.__isKeepAlive;function Ql(t,e){Sa(t,"a",e)}function Zl(t,e){Sa(t,"da",e)}function Sa(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Fr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ia(s.parent.vnode)&&eu(r,e,n,s),s=s.parent}}function eu(t,e,n,r){const s=Fr(e,t,r,!0);Ta(()=>{Bs(r[e],s)},n)}function Fr(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ct();const a=qn(n),c=Ge(e,n,t,o);return a(),At(),c});return r?s.unshift(i):s.push(i),i}}const lt=t=>(e,n=le)=>{(!Hn||t==="sp")&&Fr(t,(...r)=>e(...r),n)},tu=lt("bm"),nu=lt("m"),ru=lt("bu"),su=lt("u"),iu=lt("bum"),Ta=lt("um"),ou=lt("sp"),au=lt("rtg"),cu=lt("rtc");function lu(t,e=le){Fr("ec",t,e)}const uu="components";function fu(t,e){return hu(uu,t,!0,e)||t}const du=Symbol.for("v-ndc");function hu(t,e,n=!0,r=!1){const s=Ie||le;if(s){const i=s.type;{const a=Zu(i,!1);if(a&&(a===e||a===Pe(e)||a===Dr(Pe(e))))return i}const o=wi(s[t]||i[t],e)||wi(s.appContext[t],e);return!o&&r?i:o}}function wi(t,e){return t&&(t[e]||t[Pe(e)]||t[Dr(Pe(e))])}const Es=t=>t?za(t)?Br(t):Es(t.parent):null,On=fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Es(t.parent),$root:t=>Es(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ca(t),$forceUpdate:t=>t.f||(t.f=()=>{Zs(t.update)}),$nextTick:t=>t.n||(t.n=ma.bind(t.proxy)),$watch:t=>Du.bind(t)}),Zr=(t,e)=>t!==Z&&!t.__isScriptSetup&&G(t,e),pu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Zr(r,e))return o[e]=1,r[e];if(s!==Z&&G(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==Z&&G(n,e))return o[e]=4,n[e];ws&&(o[e]=0)}}const u=On[e];let h,g;if(u)return e==="$attrs"&&ce(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Z&&G(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,G(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Zr(s,e)?(s[e]=n,!0):r!==Z&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Z&&G(t,o)||Zr(e,o)||(a=i[0])&&G(a,o)||G(r,o)||G(On,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ii(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ws=!0;function gu(t){const e=Ca(t),n=t.proxy,r=t.ctx;ws=!1,e.beforeCreate&&Si(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:g,beforeUpdate:m,updated:R,activated:P,deactivated:$,beforeDestroy:D,beforeUnmount:k,destroyed:N,unmounted:O,render:W,renderTracked:se,renderTriggered:ee,errorCaptured:Te,serverPrefetch:Re,expose:Ce,inheritAttrs:ft,components:kt,directives:Ue,filters:pn}=e;if(l&&mu(l,r,null),o)for(const Y in o){const K=o[Y];j(K)&&(r[Y]=K.bind(n))}if(s){const Y=s.call(n,n);re(Y)&&(t.data=Lr(Y))}if(ws=!0,i)for(const Y in i){const K=i[Y],Ye=j(K)?K.bind(n,n):j(K.get)?K.get.bind(n,n):Ke,dt=!j(K)&&j(K.set)?K.set.bind(n):Ke,Fe=ke({get:Ye,set:dt});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:me=>Fe.value=me})}if(a)for(const Y in a)Ra(a[Y],r,n,Y);if(c){const Y=j(c)?c.call(n):c;Reflect.ownKeys(Y).forEach(K=>{cr(K,Y[K])})}u&&Si(u,t,"c");function ae(Y,K){H(K)?K.forEach(Ye=>Y(Ye.bind(n))):K&&Y(K.bind(n))}if(ae(tu,h),ae(nu,g),ae(ru,m),ae(su,R),ae(Ql,P),ae(Zl,$),ae(lu,Te),ae(cu,se),ae(au,ee),ae(iu,k),ae(Ta,O),ae(ou,Re),H(Ce))if(Ce.length){const Y=t.exposed||(t.exposed={});Ce.forEach(K=>{Object.defineProperty(Y,K,{get:()=>n[K],set:Ye=>n[K]=Ye})})}else t.exposed||(t.exposed={});W&&t.render===Ke&&(t.render=W),ft!=null&&(t.inheritAttrs=ft),kt&&(t.components=kt),Ue&&(t.directives=Ue),Re&&wa(t)}function mu(t,e,n=Ke){H(t)&&(t=Is(t));for(const r in t){const s=t[r];let i;re(s)?"default"in s?i=it(s.from||r,s.default,!0):i=it(s.from||r):i=it(s),ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Si(t,e,n){Ge(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ra(t,e,n,r){let s=r.includes(".")?Ba(n,r):()=>n[r];if(oe(t)){const i=e[t];j(i)&&lr(s,i)}else if(j(t))lr(s,t.bind(n));else if(re(t))if(H(t))t.forEach(i=>Ra(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&lr(s,i,t)}}function Ca(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Er(c,l,o,!0)),Er(c,e,o)),re(e)&&i.set(e,c),c}function Er(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Er(t,i,n,!0),s&&s.forEach(o=>Er(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=_u[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const _u={data:Ti,props:Ri,emits:Ri,methods:bn,computed:bn,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:bn,directives:bn,watch:yu,provide:Ti,inject:vu};function Ti(t,e){return e?t?function(){return fe(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function vu(t,e){return bn(Is(t),Is(e))}function Is(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function bn(t,e){return t?fe(Object.create(null),t,e):e}function Ri(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:fe(Object.create(null),Ii(t),Ii(e??{})):e}function yu(t,e){if(!t)return e;if(!e)return t;const n=fe(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function Aa(){return{app:null,config:{isNativeTag:cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bu=0;function Eu(t,e){return function(r,s=null){j(r)||(r=fe({},r)),s!=null&&!re(s)&&(s=null);const i=Aa(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:bu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:tf,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(l,...h)):j(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,g){if(!c){const m=l._ceVNode||ie(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(m,u,g),c=!0,l._container=u,u.__vue_app__=l,Br(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ge(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=nn;nn=l;try{return u()}finally{nn=h}}};return l}}let nn=null;function cr(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function it(t,e,n=!1){const r=le||Ie;if(r||nn){const s=nn?nn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}const Pa={},Oa=()=>Object.create(Pa),ka=t=>Object.getPrototypeOf(t)===Pa;function wu(t,e,n,r=!1){const s={},i=Oa();t.propsDefaults=Object.create(null),xa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ua(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Iu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=q(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if($r(t.emitsOptions,g))continue;const m=e[g];if(c)if(G(i,g))m!==i[g]&&(i[g]=m,l=!0);else{const R=Pe(g);s[R]=Ss(c,a,R,m,t,!1)}else m!==i[g]&&(i[g]=m,l=!0)}}}else{xa(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!G(e,h)&&((u=Vt(h))===h||!G(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ss(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!G(e,h))&&(delete i[h],l=!0)}l&&et(t.attrs,"set","")}function xa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Sn(c))continue;const l=e[c];let u;s&&G(s,u=Pe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:$r(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=q(n),l=a||Z;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ss(s,c,h,l[h],t,!G(l,h))}}return o}function Ss(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=qn(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}const Su=new WeakMap;function Na(t,e,n=!1){const r=n?Su:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=h=>{c=!0;const[g,m]=Na(h,e,!0);fe(o,g),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return re(t)&&r.set(t,Zt),Zt;if(H(i))for(let u=0;u<i.length;u++){const h=Pe(i[u]);Ci(h)&&(o[h]=Z)}else if(i)for(const u in i){const h=Pe(u);if(Ci(h)){const g=i[u],m=o[h]=H(g)||j(g)?{type:g}:fe({},g),R=m.type;let P=!1,$=!0;if(H(R))for(let D=0;D<R.length;++D){const k=R[D],N=j(k)&&k.name;if(N==="Boolean"){P=!0;break}else N==="String"&&($=!1)}else P=j(R)&&R.name==="Boolean";m[0]=P,m[1]=$,(P||G(m,"default"))&&a.push(h)}}const l=[o,a];return re(t)&&r.set(t,l),l}function Ci(t){return t[0]!=="$"&&!Sn(t)}const Da=t=>t[0]==="_"||t==="$stable",ti=t=>H(t)?t.map(We):[We(t)],Tu=(t,e,n)=>{if(e._n)return e;const r=yn((...s)=>ti(e(...s)),n);return r._c=!1,r},Ma=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Da(s))continue;const i=t[s];if(j(i))e[s]=Tu(s,i,r);else if(i!=null){const o=ti(i);e[s]=()=>o}}},La=(t,e)=>{const n=ti(e);t.slots.default=()=>n},Ua=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Ru=(t,e,n)=>{const r=t.slots=Oa();if(t.vnode.shapeFlag&32){const s=e._;s?(Ua(r,e,n),n&&Ko(r,"_",s,!0)):Ma(e,r)}else e&&La(t,e)},Cu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Ua(s,e,n):(i=!e.$stable,Ma(e,s)),o=e}else e&&(La(t,e),o={default:1});if(i)for(const a in s)!Da(a)&&o[a]==null&&delete s[a]},be=Bu;function Au(t){return Pu(t)}function Pu(t,e){const n=Mr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:m=Ke,insertStaticContent:R}=t,P=(f,d,p,_=null,b=null,y=null,S=void 0,I=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!_n(f,d)&&(_=v(f),me(f,b,y,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:E,ref:L,shapeFlag:C}=d;switch(E){case Hr:$(f,d,p,_);break;case Ft:D(f,d,p,_);break;case ts:f==null&&k(d,p,_,S);break;case we:kt(f,d,p,_,b,y,S,I,w);break;default:C&1?W(f,d,p,_,b,y,S,I,w):C&6?Ue(f,d,p,_,b,y,S,I,w):(C&64||C&128)&&E.process(f,d,p,_,b,y,S,I,w,x)}L!=null&&b&&br(L,f&&f.ref,y,d||f,!d)},$=(f,d,p,_)=>{if(f==null)r(d.el=a(d.children),p,_);else{const b=d.el=f.el;d.children!==f.children&&l(b,d.children)}},D=(f,d,p,_)=>{f==null?r(d.el=c(d.children||""),p,_):d.el=f.el},k=(f,d,p,_)=>{[f.el,f.anchor]=R(f.children,d,p,_,f.el,f.anchor)},N=({el:f,anchor:d},p,_)=>{let b;for(;f&&f!==d;)b=g(f),r(f,p,_),f=b;r(d,p,_)},O=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=g(f),s(f),f=p;s(d)},W=(f,d,p,_,b,y,S,I,w)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),f==null?se(d,p,_,b,y,S,I,w):Re(f,d,b,y,S,I,w)},se=(f,d,p,_,b,y,S,I)=>{let w,E;const{props:L,shapeFlag:C,transition:M,dirs:F}=f;if(w=f.el=o(f.type,y,L&&L.is,L),C&8?u(w,f.children):C&16&&Te(f.children,w,null,_,b,es(f,y),S,I),F&&xt(f,null,_,"created"),ee(w,f,f.scopeId,S,_),L){for(const te in L)te!=="value"&&!Sn(te)&&i(w,te,null,L[te],y,_);"value"in L&&i(w,"value",null,L.value,y),(E=L.onVnodeBeforeMount)&&je(E,_,f)}F&&xt(f,null,_,"beforeMount");const V=Ou(b,M);V&&M.beforeEnter(w),r(w,d,p),((E=L&&L.onVnodeMounted)||V||F)&&be(()=>{E&&je(E,_,f),V&&M.enter(w),F&&xt(f,null,_,"mounted")},b)},ee=(f,d,p,_,b)=>{if(p&&m(f,p),_)for(let y=0;y<_.length;y++)m(f,_[y]);if(b){let y=b.subTree;if(d===y||Va(y.type)&&(y.ssContent===d||y.ssFallback===d)){const S=b.vnode;ee(f,S,S.scopeId,S.slotScopeIds,b.parent)}}},Te=(f,d,p,_,b,y,S,I,w=0)=>{for(let E=w;E<f.length;E++){const L=f[E]=I?mt(f[E]):We(f[E]);P(null,L,d,p,_,b,y,S,I)}},Re=(f,d,p,_,b,y,S)=>{const I=d.el=f.el;let{patchFlag:w,dynamicChildren:E,dirs:L}=d;w|=f.patchFlag&16;const C=f.props||Z,M=d.props||Z;let F;if(p&&Nt(p,!1),(F=M.onVnodeBeforeUpdate)&&je(F,p,d,f),L&&xt(d,f,p,"beforeUpdate"),p&&Nt(p,!0),(C.innerHTML&&M.innerHTML==null||C.textContent&&M.textContent==null)&&u(I,""),E?Ce(f.dynamicChildren,E,I,p,_,es(d,b),y):S||K(f,d,I,null,p,_,es(d,b),y,!1),w>0){if(w&16)ft(I,C,M,p,b);else if(w&2&&C.class!==M.class&&i(I,"class",null,M.class,b),w&4&&i(I,"style",C.style,M.style,b),w&8){const V=d.dynamicProps;for(let te=0;te<V.length;te++){const J=V[te],ve=C[J],_e=M[J];(_e!==ve||J==="value")&&i(I,J,ve,_e,b,p)}}w&1&&f.children!==d.children&&u(I,d.children)}else!S&&E==null&&ft(I,C,M,p,b);((F=M.onVnodeUpdated)||L)&&be(()=>{F&&je(F,p,d,f),L&&xt(d,f,p,"updated")},_)},Ce=(f,d,p,_,b,y,S)=>{for(let I=0;I<d.length;I++){const w=f[I],E=d[I],L=w.el&&(w.type===we||!_n(w,E)||w.shapeFlag&70)?h(w.el):p;P(w,E,L,null,_,b,y,S,!0)}},ft=(f,d,p,_,b)=>{if(d!==p){if(d!==Z)for(const y in d)!Sn(y)&&!(y in p)&&i(f,y,d[y],null,b,_);for(const y in p){if(Sn(y))continue;const S=p[y],I=d[y];S!==I&&y!=="value"&&i(f,y,I,S,b,_)}"value"in p&&i(f,"value",d.value,p.value,b)}},kt=(f,d,p,_,b,y,S,I,w)=>{const E=d.el=f?f.el:a(""),L=d.anchor=f?f.anchor:a("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:F}=d;F&&(I=I?I.concat(F):F),f==null?(r(E,p,_),r(L,p,_),Te(d.children||[],p,L,b,y,S,I,w)):C>0&&C&64&&M&&f.dynamicChildren?(Ce(f.dynamicChildren,M,p,b,y,S,I),(d.key!=null||b&&d===b.subTree)&&Fa(f,d,!0)):K(f,d,p,L,b,y,S,I,w)},Ue=(f,d,p,_,b,y,S,I,w)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?b.ctx.activate(d,p,_,S,w):pn(d,p,_,b,y,S,w):Kt(f,d,w)},pn=(f,d,p,_,b,y,S)=>{const I=f.component=Gu(f,_,b);if(Ia(f)&&(I.ctx.renderer=x),Ju(I,!1,S),I.asyncDep){if(b&&b.registerDep(I,ae,S),!f.el){const w=I.subTree=ie(Ft);D(null,w,d,p)}}else ae(I,f,d,p,b,y,S)},Kt=(f,d,p)=>{const _=d.component=f.component;if($u(f,d,p))if(_.asyncDep&&!_.asyncResolved){Y(_,d,p);return}else _.next=d,_.update();else d.el=f.el,_.vnode=d},ae=(f,d,p,_,b,y,S)=>{const I=()=>{if(f.isMounted){let{next:C,bu:M,u:F,parent:V,vnode:te}=f;{const He=$a(f);if(He){C&&(C.el=te.el,Y(f,C,S)),He.asyncDep.then(()=>{f.isUnmounted||I()});return}}let J=C,ve;Nt(f,!1),C?(C.el=te.el,Y(f,C,S)):C=te,M&&ar(M),(ve=C.props&&C.props.onVnodeBeforeUpdate)&&je(ve,V,C,te),Nt(f,!0);const _e=Pi(f),$e=f.subTree;f.subTree=_e,P($e,_e,h($e.el),v($e),f,b,y),C.el=_e.el,J===null&&Hu(f,_e.el),F&&be(F,b),(ve=C.props&&C.props.onVnodeUpdated)&&be(()=>je(ve,V,C,te),b)}else{let C;const{el:M,props:F}=d,{bm:V,m:te,parent:J,root:ve,type:_e}=f,$e=Pn(d);Nt(f,!1),V&&ar(V),!$e&&(C=F&&F.onVnodeBeforeMount)&&je(C,J,d),Nt(f,!0);{ve.ce&&ve.ce._injectChildStyle(_e);const He=f.subTree=Pi(f);P(null,He,p,_,f,b,y),d.el=He.el}if(te&&be(te,b),!$e&&(C=F&&F.onVnodeMounted)){const He=d;be(()=>je(C,J,He),b)}(d.shapeFlag&256||J&&Pn(J.vnode)&&J.vnode.shapeFlag&256)&&f.a&&be(f.a,b),f.isMounted=!0,d=p=_=null}};f.scope.on();const w=f.effect=new Yo(I);f.scope.off();const E=f.update=w.run.bind(w),L=f.job=w.runIfDirty.bind(w);L.i=f,L.id=f.uid,w.scheduler=()=>Zs(L),Nt(f,!0),E()},Y=(f,d,p)=>{d.component=f;const _=f.vnode.props;f.vnode=d,f.next=null,Iu(f,d.props,_,p),Cu(f,d.children,p),Ct(),Ei(f),At()},K=(f,d,p,_,b,y,S,I,w=!1)=>{const E=f&&f.children,L=f?f.shapeFlag:0,C=d.children,{patchFlag:M,shapeFlag:F}=d;if(M>0){if(M&128){dt(E,C,p,_,b,y,S,I,w);return}else if(M&256){Ye(E,C,p,_,b,y,S,I,w);return}}F&8?(L&16&&Ae(E,b,y),C!==E&&u(p,C)):L&16?F&16?dt(E,C,p,_,b,y,S,I,w):Ae(E,b,y,!0):(L&8&&u(p,""),F&16&&Te(C,p,_,b,y,S,I,w))},Ye=(f,d,p,_,b,y,S,I,w)=>{f=f||Zt,d=d||Zt;const E=f.length,L=d.length,C=Math.min(E,L);let M;for(M=0;M<C;M++){const F=d[M]=w?mt(d[M]):We(d[M]);P(f[M],F,p,null,b,y,S,I,w)}E>L?Ae(f,b,y,!0,!1,C):Te(d,p,_,b,y,S,I,w,C)},dt=(f,d,p,_,b,y,S,I,w)=>{let E=0;const L=d.length;let C=f.length-1,M=L-1;for(;E<=C&&E<=M;){const F=f[E],V=d[E]=w?mt(d[E]):We(d[E]);if(_n(F,V))P(F,V,p,null,b,y,S,I,w);else break;E++}for(;E<=C&&E<=M;){const F=f[C],V=d[M]=w?mt(d[M]):We(d[M]);if(_n(F,V))P(F,V,p,null,b,y,S,I,w);else break;C--,M--}if(E>C){if(E<=M){const F=M+1,V=F<L?d[F].el:_;for(;E<=M;)P(null,d[E]=w?mt(d[E]):We(d[E]),p,V,b,y,S,I,w),E++}}else if(E>M)for(;E<=C;)me(f[E],b,y,!0),E++;else{const F=E,V=E,te=new Map;for(E=V;E<=M;E++){const ye=d[E]=w?mt(d[E]):We(d[E]);ye.key!=null&&te.set(ye.key,E)}let J,ve=0;const _e=M-V+1;let $e=!1,He=0;const gn=new Array(_e);for(E=0;E<_e;E++)gn[E]=0;for(E=F;E<=C;E++){const ye=f[E];if(ve>=_e){me(ye,b,y,!0);continue}let Be;if(ye.key!=null)Be=te.get(ye.key);else for(J=V;J<=M;J++)if(gn[J-V]===0&&_n(ye,d[J])){Be=J;break}Be===void 0?me(ye,b,y,!0):(gn[Be-V]=E+1,Be>=He?He=Be:$e=!0,P(ye,d[Be],p,null,b,y,S,I,w),ve++)}const mi=$e?ku(gn):Zt;for(J=mi.length-1,E=_e-1;E>=0;E--){const ye=V+E,Be=d[ye],_i=ye+1<L?d[ye+1].el:_;gn[E]===0?P(null,Be,p,_i,b,y,S,I,w):$e&&(J<0||E!==mi[J]?Fe(Be,p,_i,2):J--)}}},Fe=(f,d,p,_,b=null)=>{const{el:y,type:S,transition:I,children:w,shapeFlag:E}=f;if(E&6){Fe(f.component.subTree,d,p,_);return}if(E&128){f.suspense.move(d,p,_);return}if(E&64){S.move(f,d,p,x);return}if(S===we){r(y,d,p);for(let C=0;C<w.length;C++)Fe(w[C],d,p,_);r(f.anchor,d,p);return}if(S===ts){N(f,d,p);return}if(_!==2&&E&1&&I)if(_===0)I.beforeEnter(y),r(y,d,p),be(()=>I.enter(y),b);else{const{leave:C,delayLeave:M,afterLeave:F}=I,V=()=>r(y,d,p),te=()=>{C(y,()=>{V(),F&&F()})};M?M(y,V,te):te()}else r(y,d,p)},me=(f,d,p,_=!1,b=!1)=>{const{type:y,props:S,ref:I,children:w,dynamicChildren:E,shapeFlag:L,patchFlag:C,dirs:M,cacheIndex:F}=f;if(C===-2&&(b=!1),I!=null&&br(I,null,p,f,!0),F!=null&&(d.renderCache[F]=void 0),L&256){d.ctx.deactivate(f);return}const V=L&1&&M,te=!Pn(f);let J;if(te&&(J=S&&S.onVnodeBeforeUnmount)&&je(J,d,f),L&6)tr(f.component,p,_);else{if(L&128){f.suspense.unmount(p,_);return}V&&xt(f,null,d,"beforeUnmount"),L&64?f.type.remove(f,d,p,x,_):E&&!E.hasOnce&&(y!==we||C>0&&C&64)?Ae(E,d,p,!1,!0):(y===we&&C&384||!b&&L&16)&&Ae(w,d,p),_&&zt(f)}(te&&(J=S&&S.onVnodeUnmounted)||V)&&be(()=>{J&&je(J,d,f),V&&xt(f,null,d,"unmounted")},p)},zt=f=>{const{type:d,el:p,anchor:_,transition:b}=f;if(d===we){qt(p,_);return}if(d===ts){O(f);return}const y=()=>{s(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:S,delayLeave:I}=b,w=()=>S(p,y);I?I(f.el,y,w):w()}else y()},qt=(f,d)=>{let p;for(;f!==d;)p=g(f),s(f),f=p;s(d)},tr=(f,d,p)=>{const{bum:_,scope:b,job:y,subTree:S,um:I,m:w,a:E}=f;Ai(w),Ai(E),_&&ar(_),b.stop(),y&&(y.flags|=8,me(S,f,d,p)),I&&be(I,d),be(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ae=(f,d,p,_=!1,b=!1,y=0)=>{for(let S=y;S<f.length;S++)me(f[S],d,p,_,b)},v=f=>{if(f.shapeFlag&6)return v(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const d=g(f.anchor||f.el),p=d&&d[Yl];return p?g(p):d};let A=!1;const T=(f,d,p)=>{f==null?d._vnode&&me(d._vnode,null,null,!0):P(d._vnode||null,f,d,null,null,null,p),d._vnode=f,A||(A=!0,Ei(),va(),A=!1)},x={p:P,um:me,m:Fe,r:zt,mt:pn,mc:Te,pc:K,pbc:Ce,n:v,o:t};return{render:T,hydrate:void 0,createApp:Eu(T)}}function es({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Nt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ou(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fa(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=mt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Fa(o,a)),a.type===Hr&&(a.el=o.el)}}function ku(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function $a(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$a(e)}function Ai(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const xu=Symbol.for("v-scx"),Nu=()=>it(xu);function lr(t,e,n){return Ha(t,e,n)}function Ha(t,e,n=Z){const{immediate:r,deep:s,flush:i,once:o}=n,a=fe({},n),c=e&&r||!e&&i!=="post";let l;if(Hn){if(i==="sync"){const m=Nu();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Ke,m.resume=Ke,m.pause=Ke,m}}const u=le;a.call=(m,R,P)=>Ge(m,u,R,P);let h=!1;i==="post"?a.scheduler=m=>{be(m,u&&u.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(m,R)=>{R?m():Zs(m)}),a.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const g=zl(t,e,a);return Hn&&(l?l.push(g):c&&g()),g}function Du(t,e,n){const r=this.proxy,s=oe(t)?t.includes(".")?Ba(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=qn(this),a=Ha(s,i.bind(r),n);return o(),a}function Ba(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Mu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Pe(e)}Modifiers`]||t[`${Vt(e)}Modifiers`];function Lu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&Mu(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>oe(u)?u.trim():u)),o.number&&(s=n.map(gs)));let a,c=r[a=Gr(e)]||r[a=Gr(Pe(e))];!c&&i&&(c=r[a=Gr(Vt(e))]),c&&Ge(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ge(l,t,6,s)}}function ja(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=ja(l,e,!0);u&&(a=!0,fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(re(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):fe(o,i),re(t)&&r.set(t,o),o)}function $r(t,e){return!t||!kr(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,Vt(e))||G(t,e))}function Pi(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:g,setupState:m,ctx:R,inheritAttrs:P}=t,$=yr(t);let D,k;try{if(n.shapeFlag&4){const O=s||r,W=O;D=We(l.call(W,O,u,h,m,g,R)),k=a}else{const O=e;D=We(O.length>1?O(h,{attrs:a,slots:o,emit:c}):O(h,null)),k=e.props?a:Uu(a)}}catch(O){kn.length=0,Ur(O,t,1),D=ie(Ft)}let N=D;if(k&&P!==!1){const O=Object.keys(k),{shapeFlag:W}=N;O.length&&W&7&&(i&&O.some(Hs)&&(k=Fu(k,i)),N=cn(N,k,!1,!0))}return n.dirs&&(N=cn(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&ei(N,n.transition),D=N,yr($),D}const Uu=t=>{let e;for(const n in t)(n==="class"||n==="style"||kr(n))&&((e||(e={}))[n]=t[n]);return e},Fu=(t,e)=>{const n={};for(const r in t)(!Hs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $u(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Oi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==r[g]&&!$r(l,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Oi(r,o,l):!0:!!o;return!1}function Oi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!$r(n,i))return!0}return!1}function Hu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Va=t=>t.__isSuspense;function Bu(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Jl(t)}const we=Symbol.for("v-fgt"),Hr=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),ts=Symbol.for("v-stc"),kn=[];let Se=null;function Oe(t=!1){kn.push(Se=t?null:[])}function ju(){kn.pop(),Se=kn[kn.length-1]||null}let $n=1;function ki(t,e=!1){$n+=t,t<0&&Se&&e&&(Se.hasOnce=!0)}function Wa(t){return t.dynamicChildren=$n>0?Se||Zt:null,ju(),$n>0&&Se&&Se.push(t),t}function $t(t,e,n,r,s,i){return Wa(B(t,e,n,r,s,i,!0))}function ur(t,e,n,r,s){return Wa(ie(t,e,n,r,s,!0))}function wr(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const Ka=({key:t})=>t??null,fr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||ue(t)||j(t)?{i:Ie,r:t,k:e,f:!!n}:t:null);function B(t,e=null,n=null,r=0,s=null,i=t===we?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ka(e),ref:e&&fr(e),scopeId:ba,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return a?(ni(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=oe(n)?8:16),$n>0&&!o&&Se&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Se.push(c),c}const ie=Vu;function Vu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===du)&&(t=Ft),wr(t)){const a=cn(t,e,!0);return n&&ni(a,n),$n>0&&!i&&Se&&(a.shapeFlag&6?Se[Se.indexOf(t)]=a:Se.push(a)),a.patchFlag=-2,a}if(ef(t)&&(t=t.__vccOpts),e){e=Wu(e);let{class:a,style:c}=e;a&&!oe(a)&&(e.class=Ws(a)),re(c)&&(Qs(c)&&!H(c)&&(c=fe({},c)),e.style=Vs(c))}const o=oe(t)?1:Va(t)?128:Xl(t)?64:re(t)?4:j(t)?2:0;return B(t,e,n,r,s,o,i,!0)}function Wu(t){return t?Qs(t)||ka(t)?fe({},t):t:null}function cn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Ku(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ka(l),ref:e&&e.ref?n&&i?H(i)?i.concat(fr(e)):[i,fr(e)]:fr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==we?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cn(t.ssContent),ssFallback:t.ssFallback&&cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ei(u,c.clone(u)),u}function En(t=" ",e=0){return ie(Hr,null,t,e)}function ir(t="",e=!1){return e?(Oe(),ur(Ft,null,t)):ie(Ft,null,t)}function We(t){return t==null||typeof t=="boolean"?ie(Ft):H(t)?ie(we,null,t.slice()):wr(t)?mt(t):ie(Hr,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cn(t)}function ni(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ni(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ka(e)?e._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),r&64?(n=16,e=[En(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ku(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ws([e.class,r.class]));else if(s==="style")e.style=Vs([e.style,r.style]);else if(kr(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function je(t,e,n,r=null){Ge(t,e,7,[n,r])}const zu=Aa();let qu=0;function Gu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||zu,i={uid:qu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Na(r,s),emitsOptions:ja(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Lu.bind(null,i),t.ce&&t.ce(i),i}let le=null,Ir,Ts;{const t=Mr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ir=e("__VUE_INSTANCE_SETTERS__",n=>le=n),Ts=e("__VUE_SSR_SETTERS__",n=>Hn=n)}const qn=t=>{const e=le;return Ir(t),t.scope.on(),()=>{t.scope.off(),Ir(e)}},xi=()=>{le&&le.scope.off(),Ir(null)};function za(t){return t.vnode.shapeFlag&4}let Hn=!1;function Ju(t,e=!1,n=!1){e&&Ts(e);const{props:r,children:s}=t.vnode,i=za(t);wu(t,r,i,e),Ru(t,s,n);const o=i?Yu(t,e):void 0;return e&&Ts(!1),o}function Yu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pu);const{setup:r}=n;if(r){Ct();const s=t.setupContext=r.length>1?Qu(t):null,i=qn(t),o=zn(r,t,0,[t.props,s]),a=jo(o);if(At(),i(),(a||t.sp)&&!Pn(t)&&wa(t),a){if(o.then(xi,xi),e)return o.then(c=>{Ni(t,c)}).catch(c=>{Ur(c,t,0)});t.asyncDep=o}else Ni(t,o)}else qa(t)}function Ni(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=pa(e)),qa(t)}function qa(t,e,n){const r=t.type;t.render||(t.render=r.render||Ke);{const s=qn(t);Ct();try{gu(t)}finally{At(),s()}}}const Xu={get(t,e){return ce(t,"get",""),t[e]}};function Qu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Xu),slots:t.slots,emit:t.emit,expose:e}}function Br(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(pa($l(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in On)return On[n](t)},has(e,n){return n in e||n in On}})):t.proxy}function Zu(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function ef(t){return j(t)&&"__vccOpts"in t}const ke=(t,e)=>Wl(t,e,Hn);function Ga(t,e,n){const r=arguments.length;return r===2?re(e)&&!H(e)?wr(e)?ie(t,null,[e]):ie(t,e):ie(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&wr(n)&&(n=[n]),ie(t,e,n))}const tf="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rs;const Di=typeof window<"u"&&window.trustedTypes;if(Di)try{Rs=Di.createPolicy("vue",{createHTML:t=>t})}catch{}const Ja=Rs?t=>Rs.createHTML(t):t=>t,nf="http://www.w3.org/2000/svg",rf="http://www.w3.org/1998/Math/MathML",Ze=typeof document<"u"?document:null,Mi=Ze&&Ze.createElement("template"),sf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ze.createElementNS(nf,t):e==="mathml"?Ze.createElementNS(rf,t):n?Ze.createElement(t,{is:n}):Ze.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ze.createTextNode(t),createComment:t=>Ze.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ze.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Mi.innerHTML=Ja(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Mi.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},of=Symbol("_vtc");function af(t,e,n){const r=t[of];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Li=Symbol("_vod"),cf=Symbol("_vsh"),lf=Symbol(""),uf=/(^|;)\s*display\s*:/;function ff(t,e,n){const r=t.style,s=oe(n);let i=!1;if(n&&!s){if(e)if(oe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&dr(r,a,"")}else for(const o in e)n[o]==null&&dr(r,o,"");for(const o in n)o==="display"&&(i=!0),dr(r,o,n[o])}else if(s){if(e!==n){const o=r[lf];o&&(n+=";"+o),r.cssText=n,i=uf.test(n)}}else e&&t.removeAttribute("style");Li in t&&(t[Li]=i?r.display:"",t[cf]&&(r.display="none"))}const Ui=/\s*!important$/;function dr(t,e,n){if(H(n))n.forEach(r=>dr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=df(t,e);Ui.test(n)?t.setProperty(Vt(r),n.replace(Ui,""),"important"):t[r]=n}}const Fi=["Webkit","Moz","ms"],ns={};function df(t,e){const n=ns[e];if(n)return n;let r=Pe(e);if(r!=="filter"&&r in t)return ns[e]=r;r=Dr(r);for(let s=0;s<Fi.length;s++){const i=Fi[s]+r;if(i in t)return ns[e]=i}return e}const $i="http://www.w3.org/1999/xlink";function Hi(t,e,n,r,s,i=vl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($i,e.slice(6,e.length)):t.setAttributeNS($i,e,n):n==null||i&&!zo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Rt(n)?String(n):n)}function Bi(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ja(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=zo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Yt(t,e,n,r){t.addEventListener(e,n,r)}function hf(t,e,n,r){t.removeEventListener(e,n,r)}const ji=Symbol("_vei");function pf(t,e,n,r,s=null){const i=t[ji]||(t[ji]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=gf(e);if(r){const l=i[e]=vf(r,s);Yt(t,a,l,c)}else o&&(hf(t,a,o,c),i[e]=void 0)}}const Vi=/(?:Once|Passive|Capture)$/;function gf(t){let e;if(Vi.test(t)){e={};let r;for(;r=t.match(Vi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vt(t.slice(2)),e]}let rs=0;const mf=Promise.resolve(),_f=()=>rs||(mf.then(()=>rs=0),rs=Date.now());function vf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ge(yf(r,n.value),e,5,[r])};return n.value=t,n.attached=_f(),n}function yf(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,bf=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?af(t,r,o):e==="style"?ff(t,n,r):kr(e)?Hs(e)||pf(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ef(t,e,r,o))?(Bi(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hi(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!oe(r))?Bi(t,Pe(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hi(t,e,r,o))};function Ef(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wi(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wi(e)&&oe(n)?!1:e in t}const Ki=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>ar(e,n):e};function wf(t){t.target.composing=!0}function zi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ss=Symbol("_assign"),xn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ss]=Ki(s);const i=r||s.props&&s.props.type==="number";Yt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=gs(a)),t[ss](a)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",wf),Yt(t,"compositionend",zi),Yt(t,"change",zi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ss]=Ki(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?gs(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},If=["ctrl","shift","alt","meta"],Sf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>If.some(n=>t[`${n}Key`]&&!e.includes(n))},Ya=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Sf[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Tf=fe({patchProp:bf},sf);let qi;function Rf(){return qi||(qi=Au(Tf))}const Cf=(...t)=>{const e=Rf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pf(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Af(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Af(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pf(t){return oe(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Xt=typeof document<"u";function Xa(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Of(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Xa(t.default)}const z=Object.assign;function is(t,e){const n={};for(const r in e){const s=e[r];n[r]=Me(s)?s.map(t):t(s)}return n}const Nn=()=>{},Me=Array.isArray,Qa=/#/g,kf=/&/g,xf=/\//g,Nf=/=/g,Df=/\?/g,Za=/\+/g,Mf=/%5B/g,Lf=/%5D/g,ec=/%5E/g,Uf=/%60/g,tc=/%7B/g,Ff=/%7C/g,nc=/%7D/g,$f=/%20/g;function ri(t){return encodeURI(""+t).replace(Ff,"|").replace(Mf,"[").replace(Lf,"]")}function Hf(t){return ri(t).replace(tc,"{").replace(nc,"}").replace(ec,"^")}function Cs(t){return ri(t).replace(Za,"%2B").replace($f,"+").replace(Qa,"%23").replace(kf,"%26").replace(Uf,"`").replace(tc,"{").replace(nc,"}").replace(ec,"^")}function Bf(t){return Cs(t).replace(Nf,"%3D")}function jf(t){return ri(t).replace(Qa,"%23").replace(Df,"%3F")}function Vf(t){return t==null?"":jf(t).replace(xf,"%2F")}function Bn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Wf=/\/$/,Kf=t=>t.replace(Wf,"");function os(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Jf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Bn(o)}}function zf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ln(e.matched[r],n.matched[s])&&rc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ln(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function rc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Gf(t[n],e[n]))return!1;return!0}function Gf(t,e){return Me(t)?Ji(t,e):Me(e)?Ji(e,t):t===e}function Ji(t,e){return Me(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Jf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var jn;(function(t){t.pop="pop",t.push="push"})(jn||(jn={}));var Dn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Dn||(Dn={}));function Yf(t){if(!t)if(Xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Kf(t)}const Xf=/^[^#]+#/;function Qf(t,e){return t.replace(Xf,"#")+e}function Zf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const jr=()=>({left:window.scrollX,top:window.scrollY});function ed(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Zf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yi(t,e){return(history.state?history.state.position-e:-1)+t}const As=new Map;function td(t,e){As.set(t,e)}function nd(t){const e=As.get(t);return As.delete(t),e}let rd=()=>location.protocol+"//"+location.host;function sc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Gi(c,"")}return Gi(n,t)+r+s}function sd(t,e,n,r){let s=[],i=[],o=null;const a=({state:g})=>{const m=sc(t,location),R=n.value,P=e.value;let $=0;if(g){if(n.value=m,e.value=g,o&&o===R){o=null;return}$=P?g.position-P.position:0}else r(m);s.forEach(D=>{D(n.value,R,{delta:$,type:jn.pop,direction:$?$>0?Dn.forward:Dn.back:Dn.unknown})})};function c(){o=n.value}function l(g){s.push(g);const m=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(m),m}function u(){const{history:g}=window;g.state&&g.replaceState(z({},g.state,{scroll:jr()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Xi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?jr():null}}function id(t){const{history:e,location:n}=window,r={value:sc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:rd()+t+c;try{e[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](g)}}function o(c,l){const u=z({},e.state,Xi(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=z({},s.value,e.state,{forward:c,scroll:jr()});i(u.current,u,!0);const h=z({},Xi(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function od(t){t=Yf(t);const e=id(t),n=sd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=z({location:"",base:t,go:r,createHref:Qf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ad(t){return typeof t=="string"||t&&typeof t=="object"}function ic(t){return typeof t=="string"||typeof t=="symbol"}const oc=Symbol("");var Qi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qi||(Qi={}));function un(t,e){return z(new Error,{type:t,[oc]:!0},e)}function Qe(t,e){return t instanceof Error&&oc in t&&(e==null||!!(t.type&e))}const Zi="[^/]+?",cd={sensitive:!1,strict:!1,start:!0,end:!0},ld=/[.+*?^${}()[\]/\\]/g;function ud(t,e){const n=z({},cd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let m=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(ld,"\\$&"),m+=40;else if(g.type===1){const{value:R,repeatable:P,optional:$,regexp:D}=g;i.push({name:R,repeatable:P,optional:$});const k=D||Zi;if(k!==Zi){m+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${R}" (${k}): `+O.message)}}let N=P?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(N=$&&l.length<2?`(?:/${N})`:"/"+N),$&&(N+="?"),s+=N,m+=20,$&&(m+=-8),P&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let g=1;g<u.length;g++){const m=u[g]||"",R=i[g-1];h[R.name]=m&&R.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const g of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of g)if(m.type===0)u+=m.value;else if(m.type===1){const{value:R,repeatable:P,optional:$}=m,D=R in l?l[R]:"";if(Me(D)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const k=Me(D)?D.join("/"):D;if(!k)if($)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${R}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function fd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ac(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=fd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(eo(r))return 1;if(eo(s))return-1}return s.length-r.length}function eo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dd={type:0,value:""},hd=/[a-zA-Z0-9_]/;function pd(t){if(!t)return[[]];if(t==="/")return[[dd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:hd.test(c)?g():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function gd(t,e,n){const r=ud(pd(t.path),n),s=z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function md(t,e){const n=[],r=new Map;e=so({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,g,m){const R=!m,P=no(h);P.aliasOf=m&&m.record;const $=so(e,h),D=[P];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const W of O)D.push(no(z({},P,{components:m?m.record.components:P.components,path:W,aliasOf:m?m.record:P})))}let k,N;for(const O of D){const{path:W}=O;if(g&&W[0]!=="/"){const se=g.record.path,ee=se[se.length-1]==="/"?"":"/";O.path=g.record.path+(W&&ee+W)}if(k=gd(O,g,$),m?m.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),R&&h.name&&!ro(k)&&o(h.name)),cc(k)&&c(k),P.children){const se=P.children;for(let ee=0;ee<se.length;ee++)i(se[ee],k,m&&m.children[ee])}m=m||k}return N?()=>{o(N)}:Nn}function o(h){if(ic(h)){const g=r.get(h);g&&(r.delete(h),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(h);g>-1&&(n.splice(g,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function c(h){const g=yd(h,n);n.splice(g,0,h),h.record.name&&!ro(h)&&r.set(h.record.name,h)}function l(h,g){let m,R={},P,$;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw un(1,{location:h});$=m.record.name,R=z(to(g.params,m.keys.filter(N=>!N.optional).concat(m.parent?m.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),h.params&&to(h.params,m.keys.map(N=>N.name))),P=m.stringify(R)}else if(h.path!=null)P=h.path,m=n.find(N=>N.re.test(P)),m&&(R=m.parse(P),$=m.record.name);else{if(m=g.name?r.get(g.name):n.find(N=>N.re.test(g.path)),!m)throw un(1,{location:h,currentLocation:g});$=m.record.name,R=z({},g.params,h.params),P=m.stringify(R)}const D=[];let k=m;for(;k;)D.unshift(k.record),k=k.parent;return{name:$,path:P,params:R,matched:D,meta:vd(D)}}t.forEach(h=>i(h));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function to(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function no(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:_d(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function _d(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ro(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function vd(t){return t.reduce((e,n)=>z(e,n.meta),{})}function so(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yd(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ac(t,e[i])<0?r=i:n=i+1}const s=bd(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function bd(t){let e=t;for(;e=e.parent;)if(cc(e)&&ac(t,e)===0)return e}function cc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ed(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Za," "),o=i.indexOf("="),a=Bn(o<0?i:i.slice(0,o)),c=o<0?null:Bn(i.slice(o+1));if(a in e){let l=e[a];Me(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function io(t){let e="";for(let n in t){const r=t[n];if(n=Bf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Me(r)?r.map(i=>i&&Cs(i)):[r&&Cs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function wd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Me(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Id=Symbol(""),oo=Symbol(""),si=Symbol(""),lc=Symbol(""),Ps=Symbol("");function vn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _t(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=g=>{g===!1?c(un(4,{from:n,to:e})):g instanceof Error?c(g):ad(g)?c(un(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(g=>c(g))})}function as(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Xa(c)){const u=(c.__vccOpts||c)[e];u&&i.push(_t(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=Of(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const m=(h.__vccOpts||h)[e];return m&&_t(m,n,r,o,a,s)()}))}}return i}function ao(t){const e=it(si),n=it(lc),r=ke(()=>{const c=It(t.to);return e.resolve(c)}),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(ln.bind(null,u));if(g>-1)return g;const m=co(c[l-2]);return l>1&&co(u)===m&&h[h.length-1].path!==m?h.findIndex(ln.bind(null,c[l-2])):g}),i=ke(()=>s.value>-1&&Ad(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&rc(n.params,r.value.params));function a(c={}){if(Cd(c)){const l=e[It(t.replace)?"replace":"push"](It(t.to)).catch(Nn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Sd(t){return t.length===1?t[0]:t}const Td=Ea({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ao,setup(t,{slots:e}){const n=Lr(ao(t)),{options:r}=it(si),s=ke(()=>({[lo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[lo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Sd(e.default(n));return t.custom?i:Ga("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Rd=Td;function Cd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ad(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Me(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function co(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const lo=(t,e,n)=>t??e??n,Pd=Ea({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=it(Ps),s=ke(()=>t.route||r.value),i=it(oo,0),o=ke(()=>{let l=It(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ke(()=>s.value.matched[o.value]);cr(oo,ke(()=>o.value+1)),cr(Id,a),cr(Ps,s);const c=da();return lr(()=>[c.value,a.value,t.name],([l,u,h],[g,m,R])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!ln(u,m)||!g)&&(u.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,g=h&&h.components[u];if(!g)return uo(n.default,{Component:g,route:l});const m=h.props[u],R=m?m===!0?l.params:typeof m=="function"?m(l):m:null,$=Ga(g,z({},R,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return uo(n.default,{Component:$,route:l})||$}}});function uo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uc=Pd;function Od(t){const e=md(t.routes,t),n=t.parseQuery||Ed,r=t.stringifyQuery||io,s=t.history,i=vn(),o=vn(),a=vn(),c=Hl(ht);let l=ht;Xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=is.bind(null,v=>""+v),h=is.bind(null,Vf),g=is.bind(null,Bn);function m(v,A){let T,x;return ic(v)?(T=e.getRecordMatcher(v),x=A):x=v,e.addRoute(x,T)}function R(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(v=>v.record)}function $(v){return!!e.getRecordMatcher(v)}function D(v,A){if(A=z({},A||c.value),typeof v=="string"){const p=os(n,v,A.path),_=e.resolve({path:p.path},A),b=s.createHref(p.fullPath);return z(p,_,{params:g(_.params),hash:Bn(p.hash),redirectedFrom:void 0,href:b})}let T;if(v.path!=null)T=z({},v,{path:os(n,v.path,A.path).path});else{const p=z({},v.params);for(const _ in p)p[_]==null&&delete p[_];T=z({},v,{params:h(p)}),A.params=h(A.params)}const x=e.resolve(T,A),X=v.hash||"";x.params=u(g(x.params));const f=zf(r,z({},v,{hash:Hf(X),path:x.path})),d=s.createHref(f);return z({fullPath:f,hash:X,query:r===io?wd(v.query):v.query||{}},x,{redirectedFrom:void 0,href:d})}function k(v){return typeof v=="string"?os(n,v,c.value.path):z({},v)}function N(v,A){if(l!==v)return un(8,{from:A,to:v})}function O(v){return ee(v)}function W(v){return O(z(k(v),{replace:!0}))}function se(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let x=typeof T=="function"?T(v):T;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=k(x):{path:x},x.params={}),z({query:v.query,hash:v.hash,params:x.path!=null?{}:v.params},x)}}function ee(v,A){const T=l=D(v),x=c.value,X=v.state,f=v.force,d=v.replace===!0,p=se(T);if(p)return ee(z(k(p),{state:typeof p=="object"?z({},X,p.state):X,force:f,replace:d}),A||T);const _=T;_.redirectedFrom=A;let b;return!f&&qf(r,x,T)&&(b=un(16,{to:_,from:x}),Fe(x,x,!0,!1)),(b?Promise.resolve(b):Ce(_,x)).catch(y=>Qe(y)?Qe(y,2)?y:dt(y):K(y,_,x)).then(y=>{if(y){if(Qe(y,2))return ee(z({replace:d},k(y.to),{state:typeof y.to=="object"?z({},X,y.to.state):X,force:f}),A||_)}else y=kt(_,x,!0,d,X);return ft(_,x,y),y})}function Te(v,A){const T=N(v,A);return T?Promise.reject(T):Promise.resolve()}function Re(v){const A=qt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function Ce(v,A){let T;const[x,X,f]=kd(v,A);T=as(x.reverse(),"beforeRouteLeave",v,A);for(const p of x)p.leaveGuards.forEach(_=>{T.push(_t(_,v,A))});const d=Te.bind(null,v,A);return T.push(d),Ae(T).then(()=>{T=[];for(const p of i.list())T.push(_t(p,v,A));return T.push(d),Ae(T)}).then(()=>{T=as(X,"beforeRouteUpdate",v,A);for(const p of X)p.updateGuards.forEach(_=>{T.push(_t(_,v,A))});return T.push(d),Ae(T)}).then(()=>{T=[];for(const p of f)if(p.beforeEnter)if(Me(p.beforeEnter))for(const _ of p.beforeEnter)T.push(_t(_,v,A));else T.push(_t(p.beforeEnter,v,A));return T.push(d),Ae(T)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),T=as(f,"beforeRouteEnter",v,A,Re),T.push(d),Ae(T))).then(()=>{T=[];for(const p of o.list())T.push(_t(p,v,A));return T.push(d),Ae(T)}).catch(p=>Qe(p,8)?p:Promise.reject(p))}function ft(v,A,T){a.list().forEach(x=>Re(()=>x(v,A,T)))}function kt(v,A,T,x,X){const f=N(v,A);if(f)return f;const d=A===ht,p=Xt?history.state:{};T&&(x||d?s.replace(v.fullPath,z({scroll:d&&p&&p.scroll},X)):s.push(v.fullPath,X)),c.value=v,Fe(v,A,T,d),dt()}let Ue;function pn(){Ue||(Ue=s.listen((v,A,T)=>{if(!tr.listening)return;const x=D(v),X=se(x);if(X){ee(z(X,{replace:!0,force:!0}),x).catch(Nn);return}l=x;const f=c.value;Xt&&td(Yi(f.fullPath,T.delta),jr()),Ce(x,f).catch(d=>Qe(d,12)?d:Qe(d,2)?(ee(z(k(d.to),{force:!0}),x).then(p=>{Qe(p,20)&&!T.delta&&T.type===jn.pop&&s.go(-1,!1)}).catch(Nn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),K(d,x,f))).then(d=>{d=d||kt(x,f,!1),d&&(T.delta&&!Qe(d,8)?s.go(-T.delta,!1):T.type===jn.pop&&Qe(d,20)&&s.go(-1,!1)),ft(x,f,d)}).catch(Nn)}))}let Kt=vn(),ae=vn(),Y;function K(v,A,T){dt(v);const x=ae.list();return x.length?x.forEach(X=>X(v,A,T)):console.error(v),Promise.reject(v)}function Ye(){return Y&&c.value!==ht?Promise.resolve():new Promise((v,A)=>{Kt.add([v,A])})}function dt(v){return Y||(Y=!v,pn(),Kt.list().forEach(([A,T])=>v?T(v):A()),Kt.reset()),v}function Fe(v,A,T,x){const{scrollBehavior:X}=t;if(!Xt||!X)return Promise.resolve();const f=!T&&nd(Yi(v.fullPath,0))||(x||!T)&&history.state&&history.state.scroll||null;return ma().then(()=>X(v,A,f)).then(d=>d&&ed(d)).catch(d=>K(d,v,A))}const me=v=>s.go(v);let zt;const qt=new Set,tr={currentRoute:c,listening:!0,addRoute:m,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:$,getRoutes:P,resolve:D,options:t,push:O,replace:W,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:Ye,install(v){const A=this;v.component("RouterLink",Rd),v.component("RouterView",uc),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>It(c)}),Xt&&!zt&&c.value===ht&&(zt=!0,O(s.location).catch(X=>{}));const T={};for(const X in ht)Object.defineProperty(T,X,{get:()=>c.value[X],enumerable:!0});v.provide(si,A),v.provide(lc,ua(T)),v.provide(Ps,c);const x=v.unmount;qt.add(v),v.unmount=function(){qt.delete(v),qt.size<1&&(l=ht,Ue&&Ue(),Ue=null,c.value=ht,zt=!1,Y=!1),x()}}};function Ae(v){return v.reduce((A,T)=>A.then(()=>Re(T)),Promise.resolve())}return tr}function kd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ln(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ln(l,c))||s.push(c))}return[n,r,s]}const fc=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},xd={__name:"App",setup(t){return(e,n)=>(Oe(),$t(we,null,[n[0]||(n[0]=B("header",null,[B("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),B("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""}),B("link",{href:"https://fonts.googleapis.com/css2?family=Parisienne&family=Quicksand:wght@300..700&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap",rel:"stylesheet"})],-1)),ie(It(uc))],64))}},Nd=fc(xd,[["__scopeId","data-v-f540ffc1"]]);var fo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Dd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let g=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(g=64)),r.push(n[u],n[h],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Md;const g=i<<2|a>>4;if(r.push(g),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const R=l<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Md extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ld=function(t){const e=dc(t);return hc.encodeByteArray(e,!0)},pc=function(t){return Ld(t).replace(/\./g,"")},gc=function(t){try{return hc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=()=>Ud().__FIREBASE_DEFAULTS__,$d=()=>{if(typeof process>"u"||typeof fo>"u")return;const t=fo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gc(t[1]);return e&&JSON.parse(e)},ii=()=>{try{return Fd()||$d()||Hd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bd=t=>{var e,n;return(n=(e=ii())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mc=()=>{var t;return(t=ii())===null||t===void 0?void 0:t.config},_c=t=>{var e;return(e=ii())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Wd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qd(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gd(){try{return typeof indexedDB=="object"}catch{return!1}}function Jd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="FirebaseError";class Pt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Yd,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Xd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Pt(s,a,r)}}function Xd(t,e){return t.replace(Qd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qd=/\{\$([^}]+)}/g;function Zd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ho(i)&&ho(o)){if(!Sr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ho(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function In(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function eh(t,e){const n=new th(t,e);return n.subscribe.bind(n)}class th{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=cs),s.error===void 0&&(s.error=cs),s.complete===void 0&&(s.complete=cs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ih(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sh(t){return t===Mt?void 0:t}function ih(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const ah={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},ch=Q.INFO,lh={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},uh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vc{constructor(e){this.name=e,this._logLevel=ch,this._logHandler=uh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ah[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const fh=(t,e)=>e.some(n=>t instanceof n);let po,go;function dh(){return po||(po=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hh(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yc=new WeakMap,Os=new WeakMap,bc=new WeakMap,ls=new WeakMap,oi=new WeakMap;function ph(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(St(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yc.set(n,t)}).catch(()=>{}),oi.set(e,t),e}function gh(t){if(Os.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Os.set(t,e)}let ks={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Os.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mh(t){ks=t(ks)}function _h(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(us(this),e,...n);return bc.set(r,e.sort?e.sort():[e]),St(r)}:hh().includes(t)?function(...e){return t.apply(us(this),e),St(yc.get(this))}:function(...e){return St(t.apply(us(this),e))}}function vh(t){return typeof t=="function"?_h(t):(t instanceof IDBTransaction&&gh(t),fh(t,dh())?new Proxy(t,ks):t)}function St(t){if(t instanceof IDBRequest)return ph(t);if(ls.has(t))return ls.get(t);const e=vh(t);return e!==t&&(ls.set(t,e),oi.set(e,t)),e}const us=t=>oi.get(t);function yh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=St(o);return r&&o.addEventListener("upgradeneeded",c=>{r(St(o.result),c.oldVersion,c.newVersion,St(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const bh=["get","getKey","getAll","getAllKeys","count"],Eh=["put","add","delete","clear"],fs=new Map;function mo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fs.get(e))return fs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Eh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return fs.set(e,i),i}mh(t=>({...t,get:(e,n,r)=>mo(e,n)||t.get(e,n,r),has:(e,n)=>!!mo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ih(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ih(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xs="@firebase/app",_o="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new vc("@firebase/app"),Sh="@firebase/app-compat",Th="@firebase/analytics-compat",Rh="@firebase/analytics",Ch="@firebase/app-check-compat",Ah="@firebase/app-check",Ph="@firebase/auth",Oh="@firebase/auth-compat",kh="@firebase/database",xh="@firebase/data-connect",Nh="@firebase/database-compat",Dh="@firebase/functions",Mh="@firebase/functions-compat",Lh="@firebase/installations",Uh="@firebase/installations-compat",Fh="@firebase/messaging",$h="@firebase/messaging-compat",Hh="@firebase/performance",Bh="@firebase/performance-compat",jh="@firebase/remote-config",Vh="@firebase/remote-config-compat",Wh="@firebase/storage",Kh="@firebase/storage-compat",zh="@firebase/firestore",qh="@firebase/vertexai",Gh="@firebase/firestore-compat",Jh="firebase",Yh="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="[DEFAULT]",Xh={[xs]:"fire-core",[Sh]:"fire-core-compat",[Rh]:"fire-analytics",[Th]:"fire-analytics-compat",[Ah]:"fire-app-check",[Ch]:"fire-app-check-compat",[Ph]:"fire-auth",[Oh]:"fire-auth-compat",[kh]:"fire-rtdb",[xh]:"fire-data-connect",[Nh]:"fire-rtdb-compat",[Dh]:"fire-fn",[Mh]:"fire-fn-compat",[Lh]:"fire-iid",[Uh]:"fire-iid-compat",[Fh]:"fire-fcm",[$h]:"fire-fcm-compat",[Hh]:"fire-perf",[Bh]:"fire-perf-compat",[jh]:"fire-rc",[Vh]:"fire-rc-compat",[Wh]:"fire-gcs",[Kh]:"fire-gcs-compat",[zh]:"fire-fst",[Gh]:"fire-fst-compat",[qh]:"fire-vertex","fire-js":"fire-js",[Jh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map,Qh=new Map,Ds=new Map;function vo(t,e){try{t.container.addComponent(e)}catch(n){at.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(Ds.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;Ds.set(e,t);for(const n of Tr.values())vo(n,t);for(const n of Qh.values())vo(n,t);return!0}function Ec(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tt=new Gn("app","Firebase",Zh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=Yh;function wc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ns,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tt.create("bad-app-name",{appName:String(s)});if(n||(n=mc()),!n)throw Tt.create("no-options");const i=Tr.get(s);if(i){if(Sr(n,i.options)&&Sr(r,i.config))return i;throw Tt.create("duplicate-app",{appName:s})}const o=new oh(s);for(const c of Ds.values())o.addComponent(c);const a=new ep(n,r,o);return Tr.set(s,a),a}function tp(t=Ns){const e=Tr.get(t);if(!e&&t===Ns&&mc())return wc();if(!e)throw Tt.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let s=(r=Xh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(a.join(" "));return}Vn(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="firebase-heartbeat-database",rp=1,Wn="firebase-heartbeat-store";let ds=null;function Ic(){return ds||(ds=yh(np,rp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tt.create("idb-open",{originalErrorMessage:t.message})})),ds}async function sp(t){try{const n=(await Ic()).transaction(Wn),r=await n.objectStore(Wn).get(Sc(t));return await n.done,r}catch(e){if(e instanceof Pt)at.warn(e.message);else{const n=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(n.message)}}}async function yo(t,e){try{const r=(await Ic()).transaction(Wn,"readwrite");await r.objectStore(Wn).put(e,Sc(t)),await r.done}catch(n){if(n instanceof Pt)at.warn(n.message);else{const r=Tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});at.warn(r.message)}}}function Sc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=1024,op=30;class ap{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>op){const o=up(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){at.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bo(),{heartbeatsToSend:r,unsentEntries:s}=cp(this._heartbeatsCache.heartbeats),i=pc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return at.warn(n),""}}}function bo(){return new Date().toISOString().substring(0,10)}function cp(t,e=ip){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Eo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Eo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gd()?Jd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Eo(t){return pc(JSON.stringify({version:2,heartbeats:t})).length}function up(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){Vn(new fn("platform-logger",e=>new wh(e),"PRIVATE")),Vn(new fn("heartbeat",e=>new ap(e),"PRIVATE")),rn(xs,_o,t),rn(xs,_o,"esm2017"),rn("fire-js","")}fp("");function ai(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Tc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dp=Tc,Rc=new Gn("auth","Firebase",Tc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new vc("@firebase/auth");function hp(t,...e){Rr.logLevel<=Q.WARN&&Rr.warn(`Auth (${Yn}): ${t}`,...e)}function hr(t,...e){Rr.logLevel<=Q.ERROR&&Rr.error(`Auth (${Yn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,...e){throw ci(t,...e)}function ze(t,...e){return ci(t,...e)}function Cc(t,e,n){const r=Object.assign(Object.assign({},dp()),{[e]:n});return new Gn("auth","Firebase",r).create(e,{appName:t.name})}function ot(t){return Cc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ci(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rc.create(t,...e)}function U(t,e,...n){if(!t)throw ci(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hr(e),new Error(e)}function ct(t,e){t||nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pp(){return wo()==="http:"||wo()==="https:"}function wo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pp()||Kd()||"connection"in navigator)?navigator.onLine:!0}function mp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ct(n>e,"Short delay should be less than long delay!"),this.isMobile=Vd()||zd()}get(){return gp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t,e){ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=new Xn(3e4,6e4);function Ot(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ut(t,e,n,r,s={}){return Pc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Jn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return Wd()||(l.referrerPolicy="no-referrer"),Ac.fetch()(Oc(t,t.config.apiHost,n,a),l)})}async function Pc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_p),e);try{const s=new bp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw or(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw or(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw or(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Cc(t,u,l);Le(t,u)}}catch(s){if(s instanceof Pt)throw s;Le(t,"network-request-failed",{message:String(s)})}}async function Qn(t,e,n,r,s={}){const i=await ut(t,e,n,r,s);return"mfaPendingCredential"in i&&Le(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Oc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?li(t.config,s):`${t.config.apiScheme}://${s}`}function yp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),vp.get())})}}function or(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ze(t,e,r);return s.customData._tokenResponse=n,s}function Io(t){return t!==void 0&&t.enterprise!==void 0}class Ep{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wp(t,e){return ut(t,"GET","/v2/recaptchaConfig",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(t,e){return ut(t,"POST","/v1/accounts:delete",e)}async function kc(t,e){return ut(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sp(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=ui(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mn(hs(s.auth_time)),issuedAtTime:Mn(hs(s.iat)),expirationTime:Mn(hs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hs(t){return Number(t)*1e3}function ui(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hr("JWT malformed, contained fewer than 3 sections"),null;try{const s=gc(n);return s?JSON.parse(s):(hr("Failed to decode base64 JWT payload"),null)}catch(s){return hr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function So(t){const e=ui(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pt&&Tp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Tp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await dn(t,kc(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xc(i.providerUserInfo):[],a=Ap(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ls(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Cp(t){const e=Je(t);await Cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ap(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xc(t){return t.map(e=>{var{providerId:n}=e,r=ai(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pp(t,e){const n=await Pc(t,{},async()=>{const r=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Oc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ac.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Op(t,e){return ut(t,"POST","/v2/accounts:revokeToken",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):So(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=So(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Pp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new sn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ai(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ls(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await dn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sp(this,e)}reload(){return Cp(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(ot(this.auth));const e=await this.getIdToken();return await dn(this,Ip(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,$=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:O,isAnonymous:W,providerData:se,stsTokenManager:ee}=n;U(N&&ee,e,"internal-error");const Te=sn.fromJSON(this.name,ee);U(typeof N=="string",e,"internal-error"),pt(h,e.name),pt(g,e.name),U(typeof O=="boolean",e,"internal-error"),U(typeof W=="boolean",e,"internal-error"),pt(m,e.name),pt(R,e.name),pt(P,e.name),pt($,e.name),pt(D,e.name),pt(k,e.name);const Re=new rt({uid:N,auth:e,email:g,emailVerified:O,displayName:h,isAnonymous:W,photoURL:R,phoneNumber:m,tenantId:P,stsTokenManager:Te,createdAt:D,lastLoginAt:k});return se&&Array.isArray(se)&&(Re.providerData=se.map(Ce=>Object.assign({},Ce))),$&&(Re._redirectEventId=$),Re}static async _fromIdTokenResponse(e,n,r=!1){const s=new sn;s.updateFromServerResponse(n);const i=new rt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Cr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?xc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new sn;a.updateFromIdToken(r);const c=new rt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ls(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map;function st(t){ct(t instanceof Function,"Expected a class definition");let e=To.get(t);return e?(ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,To.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nc.type="NONE";const Ro=Nc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e,n){return`firebase:${t}:${e}:${n}`}class on{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=pr(this.userKey,s.apiKey,i),this.fullPersistenceKey=pr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new on(st(Ro),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||st(Ro);const o=pr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=rt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new on(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new on(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($c(e))return"Blackberry";if(Hc(e))return"Webos";if(Mc(e))return"Safari";if((e.includes("chrome/")||Lc(e))&&!e.includes("edge/"))return"Chrome";if(Fc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dc(t=ge()){return/firefox\//i.test(t)}function Mc(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lc(t=ge()){return/crios\//i.test(t)}function Uc(t=ge()){return/iemobile/i.test(t)}function Fc(t=ge()){return/android/i.test(t)}function $c(t=ge()){return/blackberry/i.test(t)}function Hc(t=ge()){return/webos/i.test(t)}function fi(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kp(t=ge()){var e;return fi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xp(){return qd()&&document.documentMode===10}function Bc(t=ge()){return fi(t)||Fc(t)||Hc(t)||$c(t)||/windows phone/i.test(t)||Uc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t,e=[]){let n;switch(t){case"Browser":n=Co(ge());break;case"Worker":n=`${Co(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(t,e={}){return ut(t,"GET","/v2/passwordPolicy",Ot(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=6;class Lp{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Mp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ao(this),this.idTokenSubscription=new Ao(this),this.beforeStateQueue=new Np(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kc(this,{idToken:e}),r=await rt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(ot(this));const n=e?Je(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dp(this),n=new Lp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Op(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wt(t){return Je(t)}class Ao{constructor(e){this.auth=e,this.observer=null,this.addObserver=eh(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fp(t){Vr=t}function Vc(t){return Vr.loadJS(t)}function $p(){return Vr.recaptchaEnterpriseScript}function Hp(){return Vr.gapiScript}function Bp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class jp{constructor(){this.enterprise=new Vp}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Vp{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Wp="recaptcha-enterprise",Wc="NO_RECAPTCHA";class Kp{constructor(e){this.type=Wp,this.auth=Wt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{wp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ep(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Io(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Wc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jp().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Io(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=$p();c.length!==0&&(c+=a),Vc(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Po(t,e,n,r=!1,s=!1){const i=new Kp(t);let o;if(s)o=Wc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Us(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Po(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Po(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t,e){const n=Ec(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Sr(i,e??{}))return s;Le(s,"already-initialized")}return n.initialize({options:e})}function qp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Gp(t,e,n){const r=Wt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Kc(e),{host:o,port:a}=Jp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Yp()}function Kc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Jp(t){const e=Kc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Oo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Oo(o)}}}function Oo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function Xp(t,e){return ut(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(t,e){return Qn(t,"POST","/v1/accounts:signInWithPassword",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(t,e){return Qn(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}async function eg(t,e){return Qn(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends di{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Kn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Kn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Us(e,n,"signInWithPassword",Qp);case"emailLink":return Zp(e,{email:this._email,oobCode:this._password});default:Le(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Us(e,r,"signUpPassword",Xp);case"emailLink":return eg(e,{idToken:n,email:this._email,oobCode:this._password});default:Le(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(t,e){return Qn(t,"POST","/v1/accounts:signInWithIdp",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="http://localhost";class Ht extends di{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Le("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ai(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ht(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,an(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}buildRequest(){const e={requestUri:tg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rg(t){const e=wn(In(t)).link,n=e?wn(In(e)).deep_link_id:null,r=wn(In(t)).deep_link_id;return(r?wn(In(r)).link:null)||r||n||e||t}class hi{constructor(e){var n,r,s,i,o,a;const c=wn(In(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=ng((s=c.mode)!==null&&s!==void 0?s:null);U(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=rg(e);try{return new hi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.providerId=hn.PROVIDER_ID}static credential(e,n){return Kn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hi.parseLink(n);return U(r,"argument-error"),Kn._fromEmailAndCode(e,r.code,r.tenantId)}}hn.PROVIDER_ID="password";hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends zc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Zn{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ht._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Zn{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Zn{constructor(){super("twitter.com")}static credential(e,n){return Ht._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(t,e){return Qn(t,"POST","/v1/accounts:signUp",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rt._fromIdTokenResponse(e,r,s),o=ko(r);return new Bt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ko(r);return new Bt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ko(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Pt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ar.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ar(e,n,r,s)}}function qc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ar._fromErrorAndOperation(t,i,e,r):i})}async function ig(t,e,n=!1){const r=await dn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function og(t,e,n=!1){const{auth:r}=t;if(xe(r.app))return Promise.reject(ot(r));const s="reauthenticate";try{const i=await dn(t,qc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=ui(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Bt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Le(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(t,e,n=!1){if(xe(t.app))return Promise.reject(ot(t));const r="signIn",s=await qc(t,r,e),i=await Bt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ag(t,e){return Gc(Wt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(t){const e=Wt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cg(t,e,n){if(xe(t.app))return Promise.reject(ot(t));const r=Wt(t),o=await Us(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sg).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Jc(t),c}),a=await Bt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function lg(t,e,n){return xe(t.app)?Promise.reject(ot(t)):ag(Je(t),hn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jc(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(t,e){return ut(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fg(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Je(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await dn(r,ug(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function dg(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function hg(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function pg(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function Yc(t){return Je(t).signOut()}const Pr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pr,"1"),this.storage.removeItem(Pr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=1e3,mg=10;class Qc extends Xc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);xp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qc.type="LOCAL";const _g=Qc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends Xc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zc.type="SESSION";const el=Zc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await vg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=pi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function bg(t){qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function Eg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ig(){return tl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="firebaseLocalStorageDb",Sg=1,Or="firebaseLocalStorage",rl="fbase_key";class er{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kr(t,e){return t.transaction([Or],e?"readwrite":"readonly").objectStore(Or)}function Tg(){const t=indexedDB.deleteDatabase(nl);return new er(t).toPromise()}function Fs(){const t=indexedDB.open(nl,Sg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Or,{keyPath:rl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Or)?e(r):(r.close(),await Tg(),e(await Fs()))})})}async function xo(t,e,n){const r=Kr(t,!0).put({[rl]:e,value:n});return new er(r).toPromise()}async function Rg(t,e){const n=Kr(t,!1).get(e),r=await new er(n).toPromise();return r===void 0?null:r.value}function No(t,e){const n=Kr(t,!0).delete(e);return new er(n).toPromise()}const Cg=800,Ag=3;class sl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ag)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wr._getInstance(Ig()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Eg(),!this.activeServiceWorker)return;this.sender=new yg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fs();return await xo(e,Pr,"1"),await No(e,Pr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>No(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Kr(s,!1).getAll();return new er(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sl.type="LOCAL";const Pg=sl;new Xn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t,e){return e?st(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends di{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,n){return an(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kg(t){return Gc(t.auth,new gi(t),t.bypassAuthState)}function xg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),og(n,new gi(t),t.bypassAuthState)}async function Ng(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),ig(n,new gi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kg;case"linkViaPopup":case"linkViaRedirect":return Ng;case"reauthViaPopup":case"reauthViaRedirect":return xg;default:Le(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=new Xn(2e3,1e4);class Qt extends il{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qt.currentPopupAction&&Qt.currentPopupAction.cancel(),Qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=pi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dg.get())};e()}}Qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="pendingRedirect",gr=new Map;class Lg extends il{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gr.get(this.auth._key());if(!e){try{const r=await Ug(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gr.set(this.auth._key(),e)}return this.bypassAuthState||gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ug(t,e){const n=Hg(e),r=$g(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Fg(t,e){gr.set(t._key(),e)}function $g(t){return st(t._redirectPersistence)}function Hg(t){return pr(Mg,t.config.apiKey,t.name)}async function Bg(t,e,n=!1){if(xe(t.app))return Promise.reject(ot(t));const r=Wt(t),s=Og(r,e),o=await new Lg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=10*60*1e3;class Vg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ol(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Do(e))}saveEventToCache(e){this.cachedEventUids.add(Do(e)),this.lastProcessedEventTime=Date.now()}}function Do(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ol({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ol(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(t,e={}){return ut(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qg=/^https?/;async function Gg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Kg(t);for(const n of e)try{if(Jg(n))return}catch{}Le(t,"unauthorized-domain")}function Jg(t){const e=Ms(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qg.test(n))return!1;if(zg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new Xn(3e4,6e4);function Mo(){const t=qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xg(t){return new Promise((e,n)=>{var r,s,i;function o(){Mo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mo(),n(ze(t,"network-request-failed"))},timeout:Yg.get()})}if(!((s=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qe().gapi)===null||i===void 0)&&i.load)o();else{const a=Bp("iframefcb");return qe()[a]=()=>{gapi.load?o():n(ze(t,"network-request-failed"))},Vc(`${Hp()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw mr=null,e})}let mr=null;function Qg(t){return mr=mr||Xg(t),mr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Xn(5e3,15e3),em="__/auth/iframe",tm="emulator/auth/iframe",nm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sm(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?li(e,tm):`https://${t.config.authDomain}/${em}`,r={apiKey:e.apiKey,appName:t.name,v:Yn},s=rm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Jn(r).slice(1)}`}async function im(t){const e=await Qg(t),n=qe().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:sm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ze(t,"network-request-failed"),a=qe().setTimeout(()=>{i(o)},Zg.get());function c(){qe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},am=500,cm=600,lm="_blank",um="http://localhost";class Lo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fm(t,e,n,r=am,s=cm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},om),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ge().toLowerCase();n&&(a=Lc(l)?lm:n),Dc(l)&&(e=e||um,c.scrollbars="yes");const u=Object.entries(c).reduce((g,[m,R])=>`${g}${m}=${R},`,"");if(kp(l)&&a!=="_self")return dm(e||"",a),new Lo(null);const h=window.open(e||"",a,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Lo(h)}function dm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="__/auth/handler",pm="emulator/auth/handler",gm=encodeURIComponent("fac");async function Uo(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yn,eventId:s};if(e instanceof zc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Zn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${gm}=${encodeURIComponent(c)}`:"";return`${mm(t)}?${Jn(a).slice(1)}${l}`}function mm({config:t}){return t.emulator?li(t,pm):`https://${t.authDomain}/${hm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="webStorageSupport";class _m{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=el,this._completeRedirectFn=Bg,this._overrideRedirectResult=Fg}async _openPopup(e,n,r,s){var i;ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Uo(e,n,r,Ms(),s);return fm(e,o,pi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Uo(e,n,r,Ms(),s);return bg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await im(e),r=new Vg(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ps,{type:ps},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ps];o!==void 0&&n(!!o),Le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bc()||Mc()||fi()}}const vm=_m;var Fo="@firebase/auth",$o="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Em(t){Vn(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jc(t)},l=new Up(r,s,i,c);return qp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new fn("auth-internal",e=>{const n=Wt(e.getProvider("auth").getImmediate());return(r=>new ym(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Fo,$o,bm(t)),rn(Fo,$o,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=5*60,Im=_c("authIdTokenMaxAge")||wm;let Ho=null;const Sm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Im)return;const s=n==null?void 0:n.token;Ho!==s&&(Ho=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jt(t=tp()){const e=Ec(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zp(t,{popupRedirectResolver:vm,persistence:[Pg,_g,el]}),r=_c("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Sm(i.toString());hg(n,o,()=>o(n.currentUser)),dg(n,a=>o(a))}}const s=Bd("auth");return s&&Gp(n,`http://${s}`),n}function Tm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Fp({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ze("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Tm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Em("Browser");const Rm={class:"w-screen bg-fuchsia-100 p-4 h-[12vh] flex items-center"},Cm={class:"container mx-auto flex justify-between items-center"},Am={class:"flex gap-8"},Pm={__name:"NavBar",setup(t){const e=da(!1),n=jt();pg(n,s=>{s?(s.uid,e.value=!0):e.value=!1});function r(){const s=jt();Yc(s).then(()=>{e.value=!1,qr.push("/")}).catch(i=>{alert(i)})}return(s,i)=>{const o=fu("router-link");return Oe(),$t("nav",Rm,[B("div",Cm,[i[4]||(i[4]=B("div",{class:"text-[#66469a] text-3xl font-bold sour-gummy"},"My App",-1)),B("div",Am,[ie(o,{to:"/",class:"quicksand text-lg text-[#66469a] hover:text-violet-950"},{default:yn(()=>i[0]||(i[0]=[En("Home")])),_:1}),e.value?ir("",!0):(Oe(),ur(o,{key:0,to:"/login",class:"quicksand text-lg text-[#66469a] hover:text-violet-950"},{default:yn(()=>i[1]||(i[1]=[En("Log In")])),_:1})),e.value?ir("",!0):(Oe(),ur(o,{key:1,to:"/signup",class:"quicksand text-lg text-[#66469a] hover:text-violet-950"},{default:yn(()=>i[2]||(i[2]=[En("Create Account")])),_:1})),e.value?(Oe(),ur(o,{key:2,to:"/dashboard",class:"quicksand text-lg text-[#66469a] hover:text-violet-950"},{default:yn(()=>i[3]||(i[3]=[En("Dashboard")])),_:1})):ir("",!0),e.value?(Oe(),$t("button",{key:3,onClick:r,class:"quicksand text-lg text-[#66469a] hover:text-violet-950"},"Log Out")):ir("",!0)])])])}}},zr=fc(Pm,[["__scopeId","data-v-5db4e523"]]),Om={class:""},km={__name:"HomeView",setup(t){return(e,n)=>(Oe(),$t("div",Om,[ie(zr),n[0]||(n[0]=B("div",{class:"flex flex-col justify-center items-center h-[88vh] bg-[url('../components/imgs/7087775.jpg')] bg-center bg-cover"},[B("h1",{class:"parisienne text-9xl text-[#66469a]"},"Welcome"),B("p",{class:"quicksand text-[#7e2998] text-xl"},"Login to start learning")],-1))]))}},xm={class:"flex justify-center items-center bg-[url('../components/imgs/7087596.jpg')] bg-center bg-cover h-[88vh]"},Nm={class:"bg-white rounded-4xl px-30 py-20 flex flex-col justify-center gap-7"},Dm={class:"quicksand text-[#66469a] text-5xl"},Mm={__name:"Dashboard",setup(t){const n=jt().currentUser;function r(){const s=jt();Yc(s).then(()=>{qr.push("/")}).catch(i=>{alert(i)})}return(s,i)=>(Oe(),$t(we,null,[ie(zr),B("div",xm,[B("div",Nm,[B("h1",Dm,"User: "+Go(It(n).displayName),1),B("button",{onClick:r,class:"sour-gummy text-2xl bg-violet-500 text-purple-100 px-6 py-2 rounded-md hover:bg-violet-600 transition duration-300"},"Log out")])])],64))}},Lm={class:"flex items-center justify-center h-[88vh] bg-[url('../components/imgs/abstractbackground.jpg')] bg-center bg-cover"},Um={class:"p-10 bg-white rounded-xl shadow-md w-lg"},Fm={class:"mb-4"},$m={class:"mb-6"},Hm={data(){return{email:"",password:""}},methods:{login(){const t=jt();lg(t,this.email,this.password).then(e=>{e.user,this.$router.push("/dashboard")}).catch(e=>{e.code;const n=e.message;alert(n),console.log(n)})}}},Bm=Object.assign(Hm,{__name:"Login",setup(t){return(e,n)=>(Oe(),$t(we,null,[ie(zr),B("div",Lm,[B("div",Um,[n[6]||(n[6]=B("h2",{class:"parisienne text-5xl font-bold text-center text-[#66469a] mb-4"},"Login",-1)),B("form",{onSubmit:n[2]||(n[2]=Ya((...r)=>e.login&&e.login(...r),["prevent"])),class:"flex flex-col"},[B("div",Fm,[n[3]||(n[3]=B("label",{for:"email",class:"block text-sm font-medium text-gray-800"},"Email",-1)),An(B("input",{id:"email",type:"email","onUpdate:modelValue":n[0]||(n[0]=r=>e.email=r),class:"mt-2 p-2 w-full border border-gray-300 rounded-md text-gray-700",placeholder:"Enter your email",required:""},null,512),[[xn,e.email]])]),B("div",$m,[n[4]||(n[4]=B("label",{for:"password",class:"block text-sm font-medium text-gray-800"},"Password",-1)),An(B("input",{id:"password",type:"password","onUpdate:modelValue":n[1]||(n[1]=r=>e.password=r),class:"mt-2 p-2 w-full border border-gray-300 rounded-md text-gray-700",placeholder:"Enter your password",required:"",minlength:"6"},null,512),[[xn,e.password]])]),n[5]||(n[5]=B("div",{class:"text-center"},[B("button",{type:"submit",class:"sour-gummy text-2xl w-full bg-violet-500 text-purple-100 py-4 rounded-md hover:bg-violet-600 transition duration-300"}," Log In ")],-1))],32)])])],64))}}),jm={class:"flex items-center justify-center h-[88vh] bg-[url('../components/imgs/abstractbackground.jpg')] bg-center bg-cover"},Vm={class:"p-10 bg-white rounded-xl shadow-md w-lg"},Wm={class:"mb-4"},Km={class:"mb-4"},zm={class:"mb-6"},qm={data(){return{email:"",password:"",name:""}},methods:{register(){console.log("Email:",this.email),console.log("Password:",this.password),console.log("Name: ",this.name);const t=jt();cg(t,this.email,this.password).then(e=>{const n=e.user;fg(t.currentUser,{displayName:this.name}).then(()=>{console.log(n),this.$router.push("/dashboard")}).catch(r=>{alert(r)})}).catch(e=>{e.code;const n=e.message;console.log(n)})}}},Gm=Object.assign(qm,{__name:"SignUp",setup(t){return(e,n)=>(Oe(),$t(we,null,[ie(zr),B("div",jm,[B("div",Vm,[n[8]||(n[8]=B("h2",{class:"parisienne text-5xl font-bold text-center text-[#66469a] mb-4"},"Create account",-1)),B("form",{onSubmit:n[3]||(n[3]=Ya((...r)=>e.register&&e.register(...r),["prevent"])),class:"flex flex-col"},[B("div",Wm,[n[4]||(n[4]=B("label",{for:"email",class:"block text-sm font-medium text-gray-800"},"Name",-1)),An(B("input",{id:"name",type:"text","onUpdate:modelValue":n[0]||(n[0]=r=>e.name=r),class:"mt-2 p-2 w-full border border-gray-300 rounded-md text-gray-700",placeholder:"Enter your name",required:""},null,512),[[xn,e.name]])]),B("div",Km,[n[5]||(n[5]=B("label",{for:"email",class:"block text-sm font-medium text-gray-800"},"Email",-1)),An(B("input",{id:"email",type:"email","onUpdate:modelValue":n[1]||(n[1]=r=>e.email=r),class:"mt-2 p-2 w-full border border-gray-300 rounded-md text-gray-700",placeholder:"Enter your email",required:""},null,512),[[xn,e.email]])]),B("div",zm,[n[6]||(n[6]=B("label",{for:"password",class:"block text-sm font-medium text-gray-800"},"Password",-1)),An(B("input",{id:"password",type:"password","onUpdate:modelValue":n[2]||(n[2]=r=>e.password=r),class:"mt-2 p-2 w-full border border-gray-300 rounded-md text-gray-700",placeholder:"Enter your password",required:""},null,512),[[xn,e.password]])]),n[7]||(n[7]=B("div",{class:"text-center"},[B("button",{type:"submit",class:"sour-gummy text-2xl w-full bg-violet-500 text-purple-100 py-4 rounded-md hover:bg-violet-600 transition duration-300"}," Sign Up ")],-1))],32)])])],64))}}),qr=Od({history:od("/"),routes:[{path:"/",name:"home",component:km},{path:"/dashboard",name:"Dashboard",component:Mm,meta:{authRequired:!0}},{path:"/login",name:"Login",component:Bm},{path:"/signup",name:"Signup",component:Gm}]});qr.beforeEach((t,e,n)=>{const s=jt().currentUser;t.matched.some(i=>i.meta.authRequired)?s?n():n({path:"/"}):n()});var Jm="firebase",Ym="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(Jm,Ym,"app");const Xm={apiKey:"AIzaSyBJpejep81ioNVUO4egC89F0EWxdyEtlmI",authDomain:"tarea7-ef72c.firebaseapp.com",projectId:"tarea7-ef72c",storageBucket:"tarea7-ef72c.firebasestorage.app",messagingSenderId:"617097137418",appId:"1:617097137418:web:90021c4300162293573ef3"};wc(Xm);const al=Cf(Nd);al.use(qr);al.mount("#app");
