(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();function s(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(l=o[c])&&(n=(i<3?l(n):i>3?l(e,t,n):l(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n}let _o;const Ki="fast-kernel";try{if(document.currentScript)_o=document.currentScript.getAttribute(Ki);else{const o=document.getElementsByTagName("script");_o=o[o.length-1].getAttribute(Ki)}}catch{_o="isolate"}let St;switch(_o){case"share":St=Object.freeze({updateQueue:1,observable:2,contextEvent:3,elementRegistry:4});break;case"share-v2":St=Object.freeze({updateQueue:1.2,observable:2.2,contextEvent:3.2,elementRegistry:4.2});break;default:const o=`-${Math.random().toString(36).substring(2,8)}`;St=Object.freeze({updateQueue:`1.2${o}`,observable:`2.2${o}`,contextEvent:`3.2${o}`,elementRegistry:`4.2${o}`});break}const Ut=o=>typeof o=="function",Re=o=>typeof o=="string",Gn=()=>{};var Dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){if(!(typeof globalThis<"u"))if(typeof Dr<"u")Dr.globalThis=Dr;else if(typeof self<"u")self.globalThis=self;else if(typeof window<"u")window.globalThis=window;else{const e=new Function("return this")();e.globalThis=e}})();const Kn={configurable:!1,enumerable:!1,writable:!1};globalThis.FAST===void 0&&Reflect.defineProperty(globalThis,"FAST",Object.assign({value:Object.create(null)},Kn));const ne=globalThis.FAST;if(ne.getById===void 0){const o=Object.create(null);Reflect.defineProperty(ne,"getById",Object.assign({value(e,t){let r=o[e];return r===void 0&&(r=t?o[e]=t():null),r}},Kn))}ne.error===void 0&&Object.assign(ne,{warn(){},error(o){return new Error(`Error ${o}`)},addMessages(){}});const Ea=Object.freeze([]);function hi(){const o=new Map;return Object.freeze({register(e){return o.has(e.type)?!1:(o.set(e.type,e),!0)},getByType(e){return o.get(e)},getForInstance(e){if(e!=null)return o.get(e.constructor)}})}function Yn(){const o=new WeakMap;return function(e){let t=o.get(e);if(t===void 0){let r=Reflect.getPrototypeOf(e);for(;t===void 0&&r!==null;)t=o.get(r),r=Reflect.getPrototypeOf(r);t=t===void 0?[]:t.slice(0),o.set(e,t)}return t}}function It(o){o.prototype.toJSON=Gn}const ee=Object.freeze({none:0,attribute:1,booleanAttribute:2,property:3,content:4,tokenList:5,event:6}),Yi=o=>o,Ma=globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("fast-html",{createHTML:Yi}):{createHTML:Yi};let Do=Object.freeze({createHTML(o){return Ma.createHTML(o)},protect(o,e,t,r){return r}});const Ha=Do,Ht=Object.freeze({get policy(){return Do},setPolicy(o){if(Do!==Ha)throw ne.error(1201);Do=o},setAttribute(o,e,t){t==null?o.removeAttribute(e):o.setAttribute(e,t)},setBooleanAttribute(o,e,t){t?o.setAttribute(e,""):o.removeAttribute(e)}}),De=ne.getById(St.updateQueue,()=>{const o=[],e=[],t=globalThis.requestAnimationFrame;let r=!0;function i(){if(e.length)throw e.shift()}function n(p){try{p.call()}catch(g){if(r)e.push(g),setTimeout(i,0);else throw o.length=0,g}}function l(){let g=0;for(;g<o.length;)if(n(o[g]),g++,g>1024){for(let d=0,$=o.length-g;d<$;d++)o[d]=o[d+g];o.length-=g,g=0}o.length=0}function c(p){o.push(p),o.length<2&&(r?t(l):l())}return Object.freeze({enqueue:c,next:()=>new Promise(c),process:l,setMode:p=>r=p})});class Zr{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.subject=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){const t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const r=t.indexOf(e);r!==-1&&t.splice(r,1)}}notify(e){const t=this.spillover,r=this.subject;if(t===void 0){const i=this.sub1,n=this.sub2;i!==void 0&&i.handleChange(r,e),n!==void 0&&n.handleChange(r,e)}else for(let i=0,n=t.length;i<n;++i)t[i].handleChange(r,e)}}class Qn{constructor(e){this.subscribers={},this.subjectSubscribers=null,this.subject=e}notify(e){var t,r;(t=this.subscribers[e])===null||t===void 0||t.notify(e),(r=this.subjectSubscribers)===null||r===void 0||r.notify(e)}subscribe(e,t){var r,i;let n;t?n=(r=this.subscribers[t])!==null&&r!==void 0?r:this.subscribers[t]=new Zr(this.subject):n=(i=this.subjectSubscribers)!==null&&i!==void 0?i:this.subjectSubscribers=new Zr(this.subject),n.subscribe(e)}unsubscribe(e,t){var r,i;t?(r=this.subscribers[t])===null||r===void 0||r.unsubscribe(e):(i=this.subjectSubscribers)===null||i===void 0||i.unsubscribe(e)}}const nr=Object.freeze({unknown:void 0,coupled:1}),v=ne.getById(St.observable,()=>{const o=De.enqueue,e=/(:|&&|\|\||if|\?\.)/,t=new WeakMap;let r,i=g=>{throw ne.error(1101)};function n(g){var d;let $=(d=g.$fastController)!==null&&d!==void 0?d:t.get(g);return $===void 0&&(Array.isArray(g)?$=i(g):t.set(g,$=new Qn(g))),$}const l=Yn();class c{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return r!==void 0&&r.watch(d,this.name),d[this.field]}setValue(d,$){const C=this.field,pe=d[C];if(pe!==$){d[C]=$;const ct=d[this.callback];Ut(ct)&&ct.call(d,pe,$),n(d).notify(this.name)}}}class p extends Zr{constructor(d,$,C=!1){super(d,$),this.expression=d,this.isVolatileBinding=C,this.needsRefresh=!0,this.needsQueue=!0,this.isAsync=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}setMode(d){this.isAsync=this.needsQueue=d}bind(d){this.controller=d;const $=this.observe(d.source,d.context);return!d.isBound&&this.requiresUnbind(d)&&d.onUnbind(this),$}requiresUnbind(d){return d.sourceLifetime!==nr.coupled||this.first!==this.last||this.first.propertySource!==d.source}unbind(d){this.dispose()}observe(d,$){this.needsRefresh&&this.last!==null&&this.dispose();const C=r;r=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let pe;try{pe=this.expression(d,$)}finally{r=C}return pe}disconnect(){this.dispose()}dispose(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=this.isAsync}}watch(d,$){const C=this.last,pe=n(d),ct=C===null?this.first:{};if(ct.propertySource=d,ct.propertyName=$,ct.notifier=pe,pe.subscribe(this,$),C!==null){if(!this.needsRefresh){let Gi;r=void 0,Gi=C.propertySource[C.propertyName],r=this,d===Gi&&(this.needsRefresh=!0)}C.next=ct}this.last=ct}handleChange(){this.needsQueue?(this.needsQueue=!1,o(this)):this.isAsync||this.call()}call(){this.last!==null&&(this.needsQueue=this.isAsync,this.notify(this))}*records(){let d=this.first;for(;d!==void 0;)yield d,d=d.next}}return It(p),Object.freeze({setArrayObserverFactory(g){i=g},getNotifier:n,track(g,d){r&&r.watch(g,d)},trackVolatile(){r&&(r.needsRefresh=!0)},notify(g,d){n(g).notify(d)},defineProperty(g,d){Re(d)&&(d=new c(d)),l(g).push(d),Reflect.defineProperty(g,d.name,{enumerable:!0,get(){return d.getValue(this)},set($){d.setValue(this,$)}})},getAccessors:l,binding(g,d,$=this.isVolatileBinding(g)){return new p(g,d,$)},isVolatileBinding(g){return e.test(g.toString())}})});function B(o,e){v.defineProperty(o,e)}function La(o,e,t){return Object.assign({},t,{get(){return v.trackVolatile(),t.get.apply(this)}})}const Qi=ne.getById(St.contextEvent,()=>{let o=null;return{get(){return o},set(e){o=e}}}),uo=Object.freeze({default:{index:0,length:0,get event(){return uo.getEvent()},eventDetail(){return this.event.detail},eventTarget(){return this.event.target}},getEvent(){return Qi.get()},setEvent(o){Qi.set(o)}});class sr{constructor(e,t,r=!1){this.evaluate=e,this.policy=t,this.isVolatile=r}}class Va extends sr{createObserver(e){return v.binding(this.evaluate,e,this.isVolatile)}}function ui(o,e,t=v.isVolatileBinding(o)){return new Va(o,e,t)}class Zn extends sr{createObserver(){return this}bind(e){return this.evaluate(e.source,e.context)}}It(Zn);function Jn(o,e){return new Zn(o,e)}let Zi;function es(o){return o.map(e=>e instanceof fe?es(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}class fe{constructor(e){this.styles=e,this.targets=new WeakSet,this._strategy=null,this.behaviors=e.map(t=>t instanceof fe?t.behaviors:null).reduce((t,r)=>r===null?t:t===null?r:t.concat(r),null)}get strategy(){return this._strategy===null&&this.withStrategy(Zi),this._strategy}addStylesTo(e){this.strategy.addStylesTo(e),this.targets.add(e)}removeStylesFrom(e){this.strategy.removeStylesFrom(e),this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}withStrategy(e){return this._strategy=new e(es(this.styles)),this}static setDefaultStrategy(e){Zi=e}static normalize(e){return e===void 0?void 0:Array.isArray(e)?new fe(e):e instanceof fe?e:new fe([e])}}fe.supportsAdoptedStyleSheets=Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype;const Rr=hi(),pi=Object.freeze({getForInstance:Rr.getForInstance,getByType:Rr.getByType,define(o){return Rr.register({type:o}),o}});function jr(o,e,t){e.source.style.setProperty(o.targetAspect,t.bind(e))}class Jr{constructor(e,t){this.dataBinding=e,this.targetAspect=t}createCSS(e){return e(this),`var(${this.targetAspect})`}addedCallback(e){var t;const r=e.source;if(!r.$cssBindings){r.$cssBindings=new Map;const n=r.setAttribute;r.setAttribute=(l,c)=>{n.call(r,l,c),l==="style"&&r.$cssBindings.forEach((p,g)=>jr(g,p.controller,p.observer))}}const i=(t=e[this.targetAspect])!==null&&t!==void 0?t:e[this.targetAspect]=this.dataBinding.createObserver(this,this);i.controller=e,e.source.$cssBindings.set(this,{controller:e,observer:i})}connectedCallback(e){jr(this,e,e[this.targetAspect])}removedCallback(e){e.source.$cssBindings&&e.source.$cssBindings.delete(this)}handleChange(e,t){jr(this,t.controller,t)}}pi.define(Jr);const Oa=`${Math.random().toString(36).substring(2,8)}`;let _a=0;const Ji=()=>`--v${Oa}${++_a}`;function ts(o,e){const t=[];let r="";const i=[],n=l=>{i.push(l)};for(let l=0,c=o.length-1;l<c;++l){r+=o[l];let p=e[l];Ut(p)?p=new Jr(ui(p),Ji()).createCSS(n):p instanceof sr?p=new Jr(p,Ji()).createCSS(n):pi.getForInstance(p)!==void 0&&(p=p.createCSS(n)),p instanceof fe||p instanceof CSSStyleSheet?(r.trim()!==""&&(t.push(r),r=""),t.push(p)):r+=p}return r+=o[o.length-1],r.trim()!==""&&t.push(r),{styles:t,behaviors:i}}const b=(o,...e)=>{const{styles:t,behaviors:r}=ts(o,e),i=new fe(t);return r.length?i.withBehaviors(...r):i};class os{constructor(e,t){this.behaviors=t,this.css="";const r=e.reduce((i,n)=>(Re(n)?this.css+=n:i.push(n),i),[]);r.length&&(this.styles=new fe(r))}createCSS(e){return this.behaviors.forEach(e),this.styles&&e(this),this.css}addedCallback(e){e.addStyles(this.styles)}removedCallback(e){e.removeStyles(this.styles)}}pi.define(os);b.partial=(o,...e)=>{const{styles:t,behaviors:r}=ts(o,e);return new os(t,r)};const en=/fe-b\$\$start\$\$(\d+)\$\$(.+)\$\$fe-b/,tn=/fe-b\$\$end\$\$(\d+)\$\$(.+)\$\$fe-b/,on=/fe-repeat\$\$start\$\$(\d+)\$\$fe-repeat/,rn=/fe-repeat\$\$end\$\$(\d+)\$\$fe-repeat/,nn=/^(?:.{0,1000})fe-eb\$\$start\$\$(.+?)\$\$fe-eb/,sn=/fe-eb\$\$end\$\$(.{0,1000})\$\$fe-eb(?:.{0,1000})$/;function an(o){return o&&o.nodeType===Node.COMMENT_NODE}const _e=Object.freeze({attributeMarkerName:"data-fe-b",attributeBindingSeparator:" ",contentBindingStartMarker(o,e){return`fe-b$$start$$${o}$$${e}$$fe-b`},contentBindingEndMarker(o,e){return`fe-b$$end$$${o}$$${e}$$fe-b`},repeatStartMarker(o){return`fe-repeat$$start$$${o}$$fe-repeat`},repeatEndMarker(o){return`fe-repeat$$end$$${o}$$fe-repeat`},isContentBindingStartMarker(o){return en.test(o)},isContentBindingEndMarker(o){return tn.test(o)},isRepeatViewStartMarker(o){return on.test(o)},isRepeatViewEndMarker(o){return rn.test(o)},isElementBoundaryStartMarker(o){return an(o)&&nn.test(o.data.trim())},isElementBoundaryEndMarker(o){return an(o)&&sn.test(o.data)},parseAttributeBinding(o){const e=o.getAttribute(this.attributeMarkerName);return e===null?e:e.split(this.attributeBindingSeparator).map(t=>parseInt(t))},parseContentBindingStartMarker(o){return cn(en,o)},parseContentBindingEndMarker(o){return cn(tn,o)},parseRepeatStartMarker(o){return ln(on,o)},parseRepeatEndMarker(o){return ln(rn,o)},parseElementBoundaryStartMarker(o){return dn(nn,o.trim())},parseElementBoundaryEndMarker(o){return dn(sn,o)}});function ln(o,e){const t=o.exec(e);return t===null?t:parseInt(t[1])}function dn(o,e){const t=o.exec(e);return t===null?t:t[1]}function cn(o,e){const t=o.exec(e);return t===null?t:[parseInt(t[1]),t[2]]}const Xo=Symbol.for("fe-hydration");function Uo(o){return o[Xo]===Xo}const gi=`fast-${Math.random().toString(36).substring(2,8)}`,Ro=`${gi}{`,ao=`}${gi}`,Da=ao.length;let Ra=0;const bi=()=>`${gi}-${++Ra}`,rs=Object.freeze({interpolation:o=>`${Ro}${o}${ao}`,attribute:o=>`${bi()}="${Ro}${o}${ao}"`,comment:o=>`<!--${Ro}${o}${ao}-->`}),ar=Object.freeze({parse(o,e){const t=o.split(Ro);if(t.length===1)return null;const r=[];for(let i=0,n=t.length;i<n;++i){const l=t[i],c=l.indexOf(ao);let p;if(c===-1)p=l;else{const g=l.substring(0,c);r.push(e[g]),p=l.substring(c+Da)}p!==""&&r.push(p)}return r}}),qr=hi(),Ae=Object.freeze({getForInstance:qr.getForInstance,getByType:qr.getByType,define(o,e){return e=e||{},e.type=o,qr.register(e),o},assignAspect(o,e){if(!e){o.aspectType=ee.content;return}switch(o.sourceAspect=e,e[0]){case":":o.targetAspect=e.substring(1),o.aspectType=o.targetAspect==="classList"?ee.tokenList:ee.property;break;case"?":o.targetAspect=e.substring(1),o.aspectType=ee.booleanAttribute;break;case"@":o.targetAspect=e.substring(1),o.aspectType=ee.event;break;default:o.targetAspect=e,o.aspectType=ee.attribute;break}}});class fi{constructor(e){this.options=e}createHTML(e){return rs.attribute(e(this))}createBehavior(){return this}}It(fi);class is extends Error{constructor(e,t,r){super(e),this.factories=t,this.node=r}}function mi(o){return o.nodeType===Node.COMMENT_NODE}function ns(o){return o.nodeType===Node.TEXT_NODE}function ss(o,e){const t=document.createRange();return t.setStart(o,0),t.setEnd(e,mi(e)||ns(e)?e.data.length:e.childNodes.length),t}function ja(o){return o instanceof DocumentFragment&&"mode"in o}function qa(o,e,t){const r=ss(o,e),i=r.commonAncestorContainer,n=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT+NodeFilter.SHOW_COMMENT+NodeFilter.SHOW_TEXT,{acceptNode(g){return r.comparePoint(g,0)===0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),l={},c={};let p=n.currentNode=o;for(;p!==null;){switch(p.nodeType){case Node.ELEMENT_NODE:{Wa(p,t,l);break}case Node.COMMENT_NODE:{Xa(p,n,t,l,c);break}}p=n.nextNode()}return r.detach(),{targets:l,boundaries:c}}function Wa(o,e,t){const r=_e.parseAttributeBinding(o);if(r!==null){for(const i of r){if(!e[i])throw new is(`HydrationView was unable to successfully target factory on ${o.nodeName} inside ${o.getRootNode().host.nodeName}. This likely indicates a template mismatch between SSR rendering and hydration.`,e,o);Go(e[i],o,t)}o.removeAttribute(_e.attributeMarkerName)}}function Xa(o,e,t,r,i){if(_e.isElementBoundaryStartMarker(o)){Ua(o,e);return}if(_e.isContentBindingStartMarker(o.data)){const n=_e.parseContentBindingStartMarker(o.data);if(n===null)return;const[l,c]=n,p=t[l],g=[];let d=e.nextSibling();o.data="";const $=d;for(;d!==null;){if(mi(d)){const C=_e.parseContentBindingEndMarker(d.data);if(C&&C[1]===c)break}g.push(d),d=e.nextSibling()}if(d===null){const C=o.getRootNode();throw new Error(`Error hydrating Comment node inside "${ja(C)?C.host.nodeName:C.nodeName}".`)}if(d.data="",g.length===1&&ns(g[0]))Go(p,g[0],r);else{d!==$&&d.previousSibling!==null&&(i[p.targetNodeId]={first:$,last:d.previousSibling});const C=d.parentNode.insertBefore(document.createTextNode(""),d);Go(p,C,r)}}}function Ua(o,e){const t=_e.parseElementBoundaryStartMarker(o.data);let r=e.nextSibling();for(;r!==null;){if(mi(r)){const i=_e.parseElementBoundaryEndMarker(r.data);if(i&&i===t)break}r=e.nextSibling()}}function Go(o,e,t){if(o.targetNodeId===void 0)throw new Error("Factory could not be target to the node");t[o.targetNodeId]=e}var as;function ei(o,e){const t=o.parentNode;let r=o,i;for(;r!==e;){if(i=r.nextSibling,!i)throw new Error(`Unmatched first/last child inside "${e.getRootNode().host.nodeName}".`);t.removeChild(r),r=i}t.removeChild(e)}class ls{constructor(){this.index=0,this.length=0}get event(){return uo.getEvent()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}eventDetail(){return this.event.detail}eventTarget(){return this.event.target}}class lr extends ls{constructor(e,t,r){super(),this.fragment=e,this.factories=t,this.targets=r,this.behaviors=null,this.unbindables=[],this.source=null,this.isBound=!1,this.sourceLifetime=nr.unknown,this.context=this,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const r=e.parentNode;let i=this.firstChild,n;for(;i!==t;)n=i.nextSibling,r.insertBefore(i,e),i=n;r.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let r=this.firstChild,i;for(;r!==t;)i=r.nextSibling,e.appendChild(r),r=i;e.appendChild(t)}dispose(){ei(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}bind(e,t=this){if(this.source===e)return;let r=this.behaviors;if(r===null){this.source=e,this.context=t,this.behaviors=r=new Array(this.factories.length);const i=this.factories;for(let n=0,l=i.length;n<l;++n){const c=i[n].createBehavior();c.bind(this),r[n]=c}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let i=0,n=r.length;i<n;++i)r[i].bind(this)}this.isBound=!0}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}evaluateUnbindables(){const e=this.unbindables;for(let t=0,r=e.length;t<r;++t)e[t].unbind(this);e.length=0}static disposeContiguousBatch(e){if(e.length!==0){ei(e[0].firstChild,e[e.length-1].lastChild);for(let t=0,r=e.length;t<r;++t)e[t].unbind()}}}It(lr);v.defineProperty(lr.prototype,"index");v.defineProperty(lr.prototype,"length");const zt={unhydrated:"unhydrated",hydrating:"hydrating",hydrated:"hydrated"};class Ga extends Error{constructor(e,t,r,i){super(e),this.factory=t,this.fragment=r,this.templateString=i}}class Ka extends ls{constructor(e,t,r,i){super(),this.firstChild=e,this.lastChild=t,this.sourceTemplate=r,this.hostBindingTarget=i,this[as]=Xo,this.context=this,this.source=null,this.isBound=!1,this.sourceLifetime=nr.unknown,this.unbindables=[],this.fragment=null,this.behaviors=null,this._hydrationStage=zt.unhydrated,this._bindingViewBoundaries={},this._targets={},this.factories=r.compile().factories}get hydrationStage(){return this._hydrationStage}get targets(){return this._targets}get bindingViewBoundaries(){return this._bindingViewBoundaries}insertBefore(e){if(this.fragment!==null)if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const r=e.parentNode;let i=this.firstChild,n;for(;i!==t;)n=i.nextSibling,r.insertBefore(i,e),i=n;r.insertBefore(t,e)}}appendTo(e){this.fragment!==null&&e.appendChild(this.fragment)}remove(){const e=this.fragment||(this.fragment=document.createDocumentFragment()),t=this.lastChild;let r=this.firstChild,i;for(;r!==t;){if(i=r.nextSibling,!i)throw new Error(`Unmatched first/last child inside "${t.getRootNode().host.nodeName}".`);e.appendChild(r),r=i}e.appendChild(t)}bind(e,t=this){var r,i;if(this.hydrationStage!==zt.hydrated&&(this._hydrationStage=zt.hydrating),this.source===e)return;let n=this.behaviors;if(n===null){this.source=e,this.context=t;try{const{targets:c,boundaries:p}=qa(this.firstChild,this.lastChild,this.factories);this._targets=c,this._bindingViewBoundaries=p}catch(c){if(c instanceof is){let p=this.sourceTemplate.html;typeof p!="string"&&(p=p.innerHTML),c.templateString=p}throw c}this.behaviors=n=new Array(this.factories.length);const l=this.factories;for(let c=0,p=l.length;c<p;++c){const g=l[c];if(g.targetNodeId==="h"&&this.hostBindingTarget&&Go(g,this.hostBindingTarget,this._targets),g.targetNodeId in this.targets){const d=g.createBehavior();d.bind(this),n[c]=d}else{let d=this.sourceTemplate.html;throw typeof d!="string"&&(d=d.innerHTML),new Ga(`HydrationView was unable to successfully target bindings inside "${(i=((r=this.firstChild)===null||r===void 0?void 0:r.getRootNode()).host)===null||i===void 0?void 0:i.nodeName}".`,g,ss(this.firstChild,this.lastChild).cloneContents(),d)}}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=e,this.context=t;for(let l=0,c=n.length;l<c;++l)n[l].bind(this)}this.isBound=!0,this._hydrationStage=zt.hydrated}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}dispose(){ei(this.firstChild,this.lastChild),this.unbind()}onUnbind(e){this.unbindables.push(e)}evaluateUnbindables(){const e=this.unbindables;for(let t=0,r=e.length;t<r;++t)e[t].unbind(this);e.length=0}}as=Xo;It(Ka);function Ya(o){return o.create!==void 0}function Qa(o,e,t,r){if(t==null&&(t=""),Ya(t)){o.textContent="";let i=o.$fastView;if(i===void 0)if(Uo(r)&&Uo(t)&&r.bindingViewBoundaries[this.targetNodeId]!==void 0&&r.hydrationStage!==zt.hydrated){const n=r.bindingViewBoundaries[this.targetNodeId];i=t.hydrate(n.first,n.last)}else i=t.create();else o.$fastTemplate!==t&&(i.isComposed&&(i.remove(),i.unbind()),i=t.create());i.isComposed?i.needsBindOnly&&(i.needsBindOnly=!1,i.bind(r.source,r.context)):(i.isComposed=!0,i.bind(r.source,r.context),i.insertBefore(o),o.$fastView=i,o.$fastTemplate=t)}else{const i=o.$fastView;i!==void 0&&i.isComposed&&(i.isComposed=!1,i.remove(),i.needsBindOnly?i.needsBindOnly=!1:i.unbind()),o.textContent=t}}function Za(o,e,t){var r;const i=`${this.id}-t`,n=(r=o[i])!==null&&r!==void 0?r:o[i]={v:0,cv:Object.create(null)},l=n.cv;let c=n.v;const p=o[e];if(t!=null&&t.length){const g=t.split(/\s+/);for(let d=0,$=g.length;d<$;++d){const C=g[d];C!==""&&(l[C]=c,p.add(C))}}if(n.v=c+1,c!==0){c-=1;for(const g in l)l[g]===c&&p.remove(g)}}const Ja={[ee.attribute]:Ht.setAttribute,[ee.booleanAttribute]:Ht.setBooleanAttribute,[ee.property]:(o,e,t)=>o[e]=t,[ee.content]:Qa,[ee.tokenList]:Za,[ee.event]:()=>{}};class Et{constructor(e){this.dataBinding=e,this.updateTarget=null,this.aspectType=ee.content}createHTML(e){return rs.interpolation(e(this))}createBehavior(){var e;if(this.updateTarget===null){const t=Ja[this.aspectType],r=(e=this.dataBinding.policy)!==null&&e!==void 0?e:this.policy;if(!t)throw ne.error(1205);this.data=`${this.id}-d`,this.updateTarget=r.protect(this.targetTagName,this.aspectType,this.targetAspect,t)}return this}bind(e){var t;const r=e.targets[this.targetNodeId],i=Uo(e)&&e.hydrationStage&&e.hydrationStage!==zt.hydrated;switch(this.aspectType){case ee.event:r[this.data]=e,r.addEventListener(this.targetAspect,this,this.dataBinding.options);break;case ee.content:e.onUnbind(this);default:const n=(t=r[this.data])!==null&&t!==void 0?t:r[this.data]=this.dataBinding.createObserver(this,this);if(n.target=r,n.controller=e,i&&(this.aspectType===ee.attribute||this.aspectType===ee.booleanAttribute)){n.bind(e);break}this.updateTarget(r,this.targetAspect,n.bind(e),e);break}}unbind(e){const r=e.targets[this.targetNodeId].$fastView;r!==void 0&&r.isComposed&&(r.unbind(),r.needsBindOnly=!0)}handleEvent(e){const t=e.currentTarget[this.data];if(t.isBound){uo.setEvent(e);const r=this.dataBinding.evaluate(t.source,t.context);uo.setEvent(null),r!==!0&&e.preventDefault()}}handleChange(e,t){const r=t.target,i=t.controller;this.updateTarget(r,this.targetAspect,t.bind(i),i)}}Ae.define(Et,{aspected:!0});const ds=(o,e)=>`${o}.${e}`,hn={},Le={index:0,node:null};function un(o){o.startsWith("fast-")||ne.warn(1204,{name:o})}const el=new Proxy(document.createElement("div"),{get(o,e){un(e);const t=Reflect.get(o,e);return Ut(t)?t.bind(o):t},set(o,e,t){return un(e),Reflect.set(o,e,t)}});class tl{constructor(e,t,r){this.fragment=e,this.directives=t,this.policy=r,this.proto=null,this.nodeIds=new Set,this.descriptors={},this.factories=[]}addFactory(e,t,r,i,n){var l,c;this.nodeIds.has(r)||(this.nodeIds.add(r),this.addTargetDescriptor(t,r,i)),e.id=(l=e.id)!==null&&l!==void 0?l:bi(),e.targetNodeId=r,e.targetTagName=n,e.policy=(c=e.policy)!==null&&c!==void 0?c:this.policy,this.factories.push(e)}freeze(){return this.proto=Object.create(null,this.descriptors),this}addTargetDescriptor(e,t,r){const i=this.descriptors;if(t==="r"||t==="h"||i[t])return;if(!i[e]){const l=e.lastIndexOf("."),c=e.substring(0,l),p=parseInt(e.substring(l+1));this.addTargetDescriptor(c,e,p)}let n=hn[t];if(!n){const l=`_${t}`;hn[t]=n={get(){var c;return(c=this[l])!==null&&c!==void 0?c:this[l]=this[e].childNodes[r]}}}i[t]=n}createView(e){const t=this.fragment.cloneNode(!0),r=Object.create(this.proto);r.r=t,r.h=e??el;for(const i of this.nodeIds)r[i];return new lr(t,this.factories,r)}}function cs(o,e,t,r,i,n=!1){const l=t.attributes,c=o.directives;for(let p=0,g=l.length;p<g;++p){const d=l[p],$=d.value,C=ar.parse($,c);let pe=null;C===null?n&&(pe=new Et(Jn(()=>$,o.policy)),Ae.assignAspect(pe,d.name)):pe=vi.aggregate(C,o.policy),pe!==null&&(t.removeAttributeNode(d),p--,g--,o.addFactory(pe,e,r,i,t.tagName))}}function ol(o,e,t,r,i){const n=ar.parse(e.textContent,o.directives);if(n===null)return Le.node=e.nextSibling,Le.index=i+1,Le;let l,c=l=e;for(let p=0,g=n.length;p<g;++p){const d=n[p];p!==0&&(i++,r=ds(t,i),l=c.parentNode.insertBefore(document.createTextNode(""),c.nextSibling)),Re(d)?l.textContent=d:(l.textContent=" ",Ae.assignAspect(d),o.addFactory(d,t,r,i,null)),c=l}return Le.index=i+1,Le.node=c.nextSibling,Le}function hs(o,e,t){let r=0,i=e.firstChild;for(;i;){const n=rl(o,t,i,r);i=n.node,r=n.index}}function rl(o,e,t,r){const i=ds(e,r);switch(t.nodeType){case 1:cs(o,e,t,i,r),hs(o,t,i);break;case 3:return ol(o,t,e,i,r);case 8:const n=ar.parse(t.data,o.directives);n!==null&&o.addFactory(vi.aggregate(n),e,i,r,null);break}return Le.index=r+1,Le.node=t.nextSibling,Le}function il(o,e){return o&&o.nodeType==8&&ar.parse(o.data,e)!==null}const pn="TEMPLATE",vi={compile(o,e,t=Ht.policy){let r;if(Re(o)){r=document.createElement(pn),r.innerHTML=t.createHTML(o);const l=r.content.firstElementChild;l!==null&&l.tagName===pn&&(r=l)}else r=o;!r.content.firstChild&&!r.content.lastChild&&r.content.appendChild(document.createComment(""));const i=document.adoptNode(r.content),n=new tl(i,e,t);return cs(n,"",r,"h",0,!0),(il(i.firstChild,e)||i.childNodes.length===1&&Object.keys(e).length>0)&&i.insertBefore(document.createComment(""),i.firstChild),hs(n,i,"r"),Le.node=null,n.freeze()},setDefaultStrategy(o){this.compile=o},aggregate(o,e=Ht.policy){if(o.length===1)return o[0];let t,r=!1,i;const n=o.length,l=o.map(g=>Re(g)?()=>g:(t=g.sourceAspect||t,r=r||g.dataBinding.isVolatile,i=i||g.dataBinding.policy,g.dataBinding.evaluate)),c=(g,d)=>{let $="";for(let C=0;C<n;++C)$+=l[C](g,d);return $},p=new Et(ui(c,i??e,r));return Ae.assignAspect(p,t),p}},nl=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,sl=Object.create(null);class wt{constructor(e,t=sl){this.html=e,this.factories=t}createHTML(e){const t=this.factories;for(const r in t)e(t[r]);return this.html}}wt.empty=new wt("");Ae.define(wt);function al(o,e,t,r=Ae.getForInstance(o)){if(r.aspected){const i=nl.exec(e);i!==null&&Ae.assignAspect(o,i[2])}return o.createHTML(t)}class dr{constructor(e,t={},r){this.policy=r,this.result=null,this.html=e,this.factories=t}compile(){return this.result===null&&(this.result=vi.compile(this.html,this.factories,this.policy)),this.result}create(e){return this.compile().createView(e)}inline(){return new wt(Re(this.html)?this.html:this.html.innerHTML,this.factories)}withPolicy(e){if(this.result)throw ne.error(1208);if(this.policy)throw ne.error(1207);return this.policy=e,this}render(e,t,r){const i=this.create(r);return i.bind(e),i.appendTo(t),i}static create(e,t,r){let i="";const n=Object.create(null),l=c=>{var p;const g=(p=c.id)!==null&&p!==void 0?p:c.id=bi();return n[g]=c,g};for(let c=0,p=e.length-1;c<p;++c){const g=e[c];let d=t[c],$;if(i+=g,Ut(d))d=new Et(ui(d));else if(d instanceof sr)d=new Et(d);else if(!($=Ae.getForInstance(d))){const C=d;d=new Et(Jn(()=>C))}i+=al(d,g,l,$)}return new dr(i+e[e.length-1],n,r)}}It(dr);const f=(o,...e)=>{if(Array.isArray(o)&&Array.isArray(o.raw))return dr.create(o,e);throw ne.error(1206)};f.partial=o=>new wt(o);class us extends fi{bind(e){e.source[this.options]=e.targets[this.targetNodeId]}}Ae.define(us);const Se=o=>new us(o),ll=o=>o.nodeType===1,Lt=o=>o?e=>e.nodeType===1&&e.matches(o):ll;class ps extends fi{get id(){return this._id}set id(e){this._id=e,this._controllerProperty=`${e}-c`}bind(e){const t=e.targets[this.targetNodeId];t[this._controllerProperty]=e,this.updateTarget(e.source,this.computeNodes(t)),this.observe(t),e.onUnbind(this)}unbind(e){const t=e.targets[this.targetNodeId];this.updateTarget(e.source,Ea),this.disconnect(t),t[this._controllerProperty]=null}getSource(e){return e[this._controllerProperty].source}updateTarget(e,t){e[this.options.property]=t}computeNodes(e){let t=this.getNodes(e);return"filter"in this.options&&(t=t.filter(this.options.filter)),t}}const gn="slotchange";class gs extends ps{observe(e){e.addEventListener(gn,this)}disconnect(e){e.removeEventListener(gn,this)}getNodes(e){return e.assignedNodes(this.options)}handleEvent(e){const t=e.currentTarget;this.updateTarget(this.getSource(t),this.computeNodes(t))}}Ae.define(gs);function se(o){return Re(o)&&(o={property:o}),new gs(o)}class bs extends ps{constructor(e){super(e),this.observerProperty=Symbol(),this.handleEvent=(t,r)=>{const i=r.target;this.updateTarget(this.getSource(i),this.computeNodes(i))},e.childList=!0}observe(e){let t=e[this.observerProperty];t||(t=new MutationObserver(this.handleEvent),t.toJSON=Gn,e[this.observerProperty]=t),t.target=e,t.observe(e,this.options)}disconnect(e){const t=e[this.observerProperty];t.target=null,t.disconnect()}getNodes(e){return"selector"in this.options?Array.from(e.querySelectorAll(this.options.selector)):Array.from(e.childNodes)}}Ae.define(bs);function dl(o){return Re(o)&&(o={property:o}),new bs(o)}const bn="boolean",fn="reflect",Ko=Object.freeze({locate:Yn()}),cl={toView(o){return o?"true":"false"},fromView(o){return!(o==null||o==="false"||o===!1||o===0)}};function mn(o){if(o==null)return null;const e=o*1;return isNaN(e)?null:e}const le={toView(o){const e=mn(o);return e&&e.toString()},fromView:mn};class Yo{constructor(e,t,r=t.toLowerCase(),i=fn,n){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=r,this.mode=i,this.converter=n,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,i===bn&&n===void 0&&(this.converter=cl)}setValue(e,t){const r=e[this.fieldName],i=this.converter;i!==void 0&&(t=i.fromView(t)),r!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](r,t),e.$fastController.notify(this.name))}getValue(e){return v.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,r=this.guards;r.has(e)||t==="fromView"||De.enqueue(()=>{r.add(e);const i=e[this.fieldName];switch(t){case fn:const n=this.converter;Ht.setAttribute(e,this.attribute,n!==void 0?n.toView(i):i);break;case bn:Ht.setBooleanAttribute(e,this.attribute,i);break}r.delete(e)})}static collect(e,...t){const r=[];t.push(Ko.locate(e));for(let i=0,n=t.length;i<n;++i){const l=t[i];if(l!==void 0)for(let c=0,p=l.length;c<p;++c){const g=l[c];Re(g)?r.push(new Yo(e,g)):r.push(new Yo(e,g.property,g.attribute,g.mode,g.converter))}}return r}}function a(o,e){let t;function r(i,n){arguments.length>1&&(t.property=n),Ko.locate(i.constructor).push(t)}if(arguments.length>1){t={},r(o,e);return}return t=o===void 0?{}:o,r}const vn={mode:"open"},$n={},kn=new Set,Qo=ne.getById(St.elementRegistry,()=>hi());class Ee{constructor(e,t=e.definition){var r;this.platformDefined=!1,Re(t)&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template,this.registry=(r=t.registry)!==null&&r!==void 0?r:customElements;const i=e.prototype,n=Yo.collect(e,t.attributes),l=new Array(n.length),c={},p={};for(let g=0,d=n.length;g<d;++g){const $=n[g];l[g]=$.attribute,c[$.name]=$,p[$.attribute]=$,v.defineProperty(i,$)}Reflect.defineProperty(e,"observedAttributes",{value:l,enumerable:!0}),this.attributes=n,this.propertyLookup=c,this.attributeLookup=p,this.shadowOptions=t.shadowOptions===void 0?vn:t.shadowOptions===null?void 0:Object.assign(Object.assign({},vn),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?$n:Object.assign(Object.assign({},$n),t.elementOptions),this.styles=fe.normalize(t.styles),Qo.register(this)}get isDefined(){return this.platformDefined}define(e=this.registry){const t=this.type;return e.get(this.name)||(this.platformDefined=!0,e.define(this.name,t,this.elementOptions)),this}static compose(e,t){return kn.has(e)||Qo.getByType(e)?new Ee(class extends e{},t):new Ee(e,t)}static registerBaseType(e){kn.add(e)}}Ee.getByType=Qo.getByType;Ee.getForInstance=Qo.getForInstance;class hl extends MutationObserver{constructor(e){function t(r){this.callback.call(null,r.filter(i=>this.observedNodes.has(i.target)))}super(t),this.callback=e,this.observedNodes=new Set}observe(e,t){this.observedNodes.add(e),super.observe(e,t)}unobserve(e){this.observedNodes.delete(e),this.observedNodes.size<1&&this.disconnect()}}const ul={bubbles:!0,composed:!0,cancelable:!0},jo="isConnected",fs=new WeakMap;function lo(o){var e,t;return(t=(e=o.shadowRoot)!==null&&e!==void 0?e:fs.get(o))!==null&&t!==void 0?t:null}let yn;class Vt extends Qn{constructor(e,t){super(e),this.boundObservables=null,this.needsInitialization=!0,this.hasExistingShadowRoot=!1,this._template=null,this.stage=3,this.guardBehaviorConnection=!1,this.behaviors=null,this.behaviorsConnected=!1,this._mainStyles=null,this.$fastController=this,this.view=null,this.source=e,this.definition=t;const r=t.shadowOptions;if(r!==void 0){let n=e.shadowRoot;n?this.hasExistingShadowRoot=!0:(n=e.attachShadow(r),r.mode==="closed"&&fs.set(e,n))}const i=v.getAccessors(e);if(i.length>0){const n=this.boundObservables=Object.create(null);for(let l=0,c=i.length;l<c;++l){const p=i[l].name,g=e[p];g!==void 0&&(delete e[p],n[p]=g)}}}get isConnected(){return v.track(this,jo),this.stage===1}get context(){var e,t;return(t=(e=this.view)===null||e===void 0?void 0:e.context)!==null&&t!==void 0?t:uo.default}get isBound(){var e,t;return(t=(e=this.view)===null||e===void 0?void 0:e.isBound)!==null&&t!==void 0?t:!1}get sourceLifetime(){var e;return(e=this.view)===null||e===void 0?void 0:e.sourceLifetime}get template(){var e;if(this._template===null){const t=this.definition;this.source.resolveTemplate?this._template=this.source.resolveTemplate():t.template&&(this._template=(e=t.template)!==null&&e!==void 0?e:null)}return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get mainStyles(){var e;if(this._mainStyles===null){const t=this.definition;this.source.resolveStyles?this._mainStyles=this.source.resolveStyles():t.styles&&(this._mainStyles=(e=t.styles)!==null&&e!==void 0?e:null)}return this._mainStyles}set mainStyles(e){this._mainStyles!==e&&(this._mainStyles!==null&&this.removeStyles(this._mainStyles),this._mainStyles=e,this.needsInitialization||this.addStyles(e))}onUnbind(e){var t;(t=this.view)===null||t===void 0||t.onUnbind(e)}addBehavior(e){var t,r;const i=(t=this.behaviors)!==null&&t!==void 0?t:this.behaviors=new Map,n=(r=i.get(e))!==null&&r!==void 0?r:0;n===0?(i.set(e,1),e.addedCallback&&e.addedCallback(this),e.connectedCallback&&!this.guardBehaviorConnection&&(this.stage===1||this.stage===0)&&e.connectedCallback(this)):i.set(e,n+1)}removeBehavior(e,t=!1){const r=this.behaviors;if(r===null)return;const i=r.get(e);i!==void 0&&(i===1||t?(r.delete(e),e.disconnectedCallback&&this.stage!==3&&e.disconnectedCallback(this),e.removedCallback&&e.removedCallback(this)):r.set(e,i-1))}addStyles(e){var t;if(!e)return;const r=this.source;if(e instanceof HTMLElement)((t=lo(r))!==null&&t!==void 0?t:this.source).append(e);else if(!e.isAttachedTo(r)){const i=e.behaviors;if(e.addStylesTo(r),i!==null)for(let n=0,l=i.length;n<l;++n)this.addBehavior(i[n])}}removeStyles(e){var t;if(!e)return;const r=this.source;if(e instanceof HTMLElement)((t=lo(r))!==null&&t!==void 0?t:r).removeChild(e);else if(e.isAttachedTo(r)){const i=e.behaviors;if(e.removeStylesFrom(r),i!==null)for(let n=0,l=i.length;n<l;++n)this.removeBehavior(i[n])}}connect(){this.stage===3&&(this.stage=0,this.bindObservables(),this.connectBehaviors(),this.needsInitialization?(this.renderTemplate(this.template),this.addStyles(this.mainStyles),this.needsInitialization=!1):this.view!==null&&this.view.bind(this.source),this.stage=1,v.notify(this,jo))}bindObservables(){if(this.boundObservables!==null){const e=this.source,t=this.boundObservables,r=Object.keys(t);for(let i=0,n=r.length;i<n;++i){const l=r[i];e[l]=t[l]}this.boundObservables=null}}connectBehaviors(){if(this.behaviorsConnected===!1){const e=this.behaviors;if(e!==null){this.guardBehaviorConnection=!0;for(const t of e.keys())t.connectedCallback&&t.connectedCallback(this);this.guardBehaviorConnection=!1}this.behaviorsConnected=!0}}disconnectBehaviors(){if(this.behaviorsConnected===!0){const e=this.behaviors;if(e!==null)for(const t of e.keys())t.disconnectedCallback&&t.disconnectedCallback(this);this.behaviorsConnected=!1}}disconnect(){this.stage===1&&(this.stage=2,v.notify(this,jo),this.view!==null&&this.view.unbind(),this.disconnectBehaviors(),this.stage=3)}onAttributeChangedCallback(e,t,r){const i=this.definition.attributeLookup[e];i!==void 0&&i.onAttributeChangedCallback(this.source,r)}emit(e,t,r){return this.stage===1?this.source.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},ul),r))):!1}renderTemplate(e){var t;const r=this.source,i=(t=lo(r))!==null&&t!==void 0?t:r;if(this.view!==null)this.view.dispose(),this.view=null;else if(!this.needsInitialization||this.hasExistingShadowRoot){this.hasExistingShadowRoot=!1;for(let n=i.firstChild;n!==null;n=i.firstChild)i.removeChild(n)}e&&(this.view=e.render(r,i,r),this.view.sourceLifetime=nr.coupled)}static forCustomElement(e){const t=e.$fastController;if(t!==void 0)return t;const r=Ee.getForInstance(e);if(r===void 0)throw ne.error(1401);return e.$fastController=new yn(e,r)}static setStrategy(e){yn=e}}It(Vt);Vt.setStrategy(Vt);function Zo(o){var e;return"adoptedStyleSheets"in o?o:(e=lo(o))!==null&&e!==void 0?e:o.getRootNode()}class cr{constructor(e){const t=cr.styleSheetCache;this.sheets=e.map(r=>{if(r instanceof CSSStyleSheet)return r;let i=t.get(r);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(r),t.set(r,i)),i})}addStylesTo(e){ms(Zo(e),this.sheets)}removeStylesFrom(e){vs(Zo(e),this.sheets)}}cr.styleSheetCache=new Map;let pl=0;const gl=()=>`fast-${++pl}`;function xn(o){return o===document?document.body:o}class bl{constructor(e){this.styles=e,this.styleClass=gl()}addStylesTo(e){e=xn(Zo(e));const t=this.styles,r=this.styleClass;for(let i=0;i<t.length;i++){const n=document.createElement("style");n.innerHTML=t[i],n.className=r,e.append(n)}}removeStylesFrom(e){e=xn(Zo(e));const t=e.querySelectorAll(`.${this.styleClass}`);for(let r=0,i=t.length;r<i;++r)e.removeChild(t[r])}}let ms=(o,e)=>{o.adoptedStyleSheets=[...o.adoptedStyleSheets,...e]},vs=(o,e)=>{o.adoptedStyleSheets=o.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(fe.supportsAdoptedStyleSheets){try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),ms=(o,e)=>{o.adoptedStyleSheets.push(...e)},vs=(o,e)=>{for(const t of e){const r=o.adoptedStyleSheets.indexOf(t);r!==-1&&o.adoptedStyleSheets.splice(r,1)}}}catch{}fe.setDefaultStrategy(cr)}else fe.setDefaultStrategy(bl);const Sn="defer-hydration",wn="needs-hydration";class xt extends Vt{static hydrationObserverHandler(e){for(const t of e)xt.hydrationObserver.unobserve(t.target),t.target.$fastController.connect()}connect(){var e,t;if(this.needsHydration===void 0&&(this.needsHydration=this.source.getAttribute(wn)!==null),this.source.hasAttribute(Sn)){xt.hydrationObserver.observe(this.source,{attributeFilter:[Sn]});return}if(!this.needsHydration){super.connect();return}if(this.stage!==3)return;this.stage=0,this.bindObservables(),this.connectBehaviors();const r=this.source,i=(e=lo(r))!==null&&e!==void 0?e:r;if(this.template)if(Uo(this.template)){let n=i.firstChild,l=i.lastChild;r.shadowRoot===null&&(_e.isElementBoundaryStartMarker(n)&&(n.data="",n=n.nextSibling),_e.isElementBoundaryEndMarker(l)&&(l.data="",l=l.previousSibling)),this.view=this.template.hydrate(n,l,r),(t=this.view)===null||t===void 0||t.bind(this.source)}else this.renderTemplate(this.template);this.addStyles(this.mainStyles),this.stage=1,this.source.removeAttribute(wn),this.needsInitialization=this.needsHydration=!1,v.notify(this,jo)}disconnect(){super.disconnect(),xt.hydrationObserver.unobserve(this.source)}static install(){Vt.setStrategy(xt)}}xt.hydrationObserver=new hl(xt.hydrationObserverHandler);function $s(o){const e=class extends o{constructor(){super(),Vt.forCustomElement(this)}$emit(t,r,i){return this.$fastController.emit(t,r,i)}connectedCallback(){this.$fastController.connect()}disconnectedCallback(){this.$fastController.disconnect()}attributeChangedCallback(t,r,i){this.$fastController.onAttributeChangedCallback(t,r,i)}};return Ee.registerBaseType(e),e}function fl(o,e){return Ut(o)?Ee.compose(o,e):Ee.compose(this,o)}function ml(o,e){return Ut(o)?Ee.compose(o,e).define().type:Ee.compose(this,o).define().type}function vl(o){return $s(o)}const z=Object.assign($s(HTMLElement),{from:vl,define:ml,compose:fl}),ge={horizontal:"horizontal",vertical:"vertical"};function $l(o,e){let t=o.length;for(;t--;)if(e(o[t],t,o))return t;return-1}function Bn(...o){return o.every(e=>e instanceof HTMLElement)}const hr="ArrowDown",ur="ArrowLeft",pr="ArrowRight",gr="ArrowUp",br="End",fr="Enter",kl="Escape",mr="Home",$i=" ",yl="Tab";var ze;(function(o){o.ltr="ltr",o.rtl="rtl"})(ze||(ze={}));function xl(o,e,t){return t<o?e:t>e?o:t}function ki(o,e,t){return Math.min(Math.max(t,o),e)}let Sl=0;function Ot(o=""){return`${o}${Sl++}`}const yi={fromView(o){const e=parseFloat(o);return Number.isNaN(e)?"":e.toString()},toView(o){const e=parseFloat(o);return Number.isNaN(e)?void 0:e.toString()}},xi=o=>{var e;return((e=o.closest("[dir]"))===null||e===void 0?void 0:e.dir)==="rtl"?ze.rtl:ze.ltr};function we(o){return o?typeof o=="string"?new wt(o):"inline"in o?o.inline():o:wt.empty}const ti=o=>{var e;return o.nodeType!==Node.TEXT_NODE||!!(!((e=o.nodeValue)===null||e===void 0)&&e.trim().length)},wl=":host([hidden]){display:none}";function P(o){return`${wl}:host{display:${o}}`}class Bl{constructor(e){this.listenerCache=new WeakMap,this.query=e}connectedCallback(e){const{query:t}=this;let r=this.listenerCache.get(e);r||(r=this.constructListener(e),this.listenerCache.set(e,r)),r.bind(t)(),t.addEventListener("change",r)}disconnectedCallback(e){const t=this.listenerCache.get(e);t&&this.query.removeEventListener("change",t)}}class xo extends Bl{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new xo(e,t)}constructListener(e){let t=!1;const r=this.styles;return function(){const{matches:n}=this;n&&!t?(e.addStyles(r),t=n):!n&&t&&(e.removeStyles(r),t=n)}}removedCallback(e){e.removeStyles(this.styles)}}const te=xo.with(window.matchMedia("(forced-colors)"));xo.with(window.matchMedia("(prefers-color-scheme: dark)"));xo.with(window.matchMedia("(prefers-color-scheme: light)"));class it{}function mt(o){return f` <slot name="end" ${Se("end")}>${we(o.end)}</slot> `.inline()}function nt(o){return f` <slot name="start" ${Se("start")}>${we(o.start)}</slot> `.inline()}function st(o,...e){const t=Ko.locate(o);e.forEach(r=>{Object.getOwnPropertyNames(r.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(o.prototype,n,Object.getOwnPropertyDescriptor(r.prototype,n))}),Ko.locate(r).forEach(n=>t.push(n))})}const ks=CSS.supports("selector(:state(g))"),Cn=new Map;function h(o){var e;return(e=Cn.get(o))!==null&&e!==void 0?e:Cn.set(o,ks?`:state(${o})`:`[state--${o}]`).get(o)}function y(o,e,t){if(e){if(!ks){o.shadowRoot.host.toggleAttribute(`state--${e}`,t);return}if(t??!o.states.has(e)){o.states.add(e);return}o.states.delete(e)}}const Wr=new WeakMap;function Si(o,e){if(!o||!e)return!1;if(Wr.has(o))return Wr.get(o).has(e);const t=new Set(Object.values(o));return Wr.set(o,t),t.has(e)}function m(o,e="",t="",r,i=""){y(o,`${i}${e}`,!1),(!r||Si(r,t))&&y(o,`${i}${t}`,!0)}const Cl={small:"small",medium:"medium",large:"large",extraLarge:"extra-large"},Il={start:"start",end:"end"};class Je extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.headinglevel=2,this.expanded=!1,this.disabled=!1,this.id=Ot("accordion-")}expandedChanged(e,t){y(this.elementInternals,"expanded",t)}disabledChanged(e,t){y(this.elementInternals,"disabled",t)}}s([a({attribute:"heading-level",mode:"fromView",converter:le})],Je.prototype,"headinglevel",void 0);s([a({mode:"boolean"})],Je.prototype,"expanded",void 0);s([a({mode:"boolean"})],Je.prototype,"disabled",void 0);s([a],Je.prototype,"id",void 0);class So extends Je{constructor(){super(...arguments),this.block=!1}sizeChanged(e,t){m(this.elementInternals,e,t,Cl)}markerPositionChanged(e,t){m(this.elementInternals,e,t,Il,"align-")}blockChanged(e,t){y(this.elementInternals,"block",t)}}s([a],So.prototype,"size",void 0);s([a({attribute:"marker-position"})],So.prototype,"markerPosition",void 0);s([a({mode:"boolean"})],So.prototype,"block",void 0);st(So,it);const Ze=h("align-end"),In=h("align-start"),Nl=h("anchor"),Nn=h("auto-resize"),Tl=h("bad-input"),zl=h("beige"),po=h("block"),Fl=h("blue"),Pl=h("bold"),Al=h("bordered"),Ve=h("brand"),El=h("brass"),Ml=h("brown"),Hl=h("center"),w=h("checked"),go=h("circular"),Ll=h("cornflower"),Vl=h("cranberry"),Ol=h("custom-error"),vr=h("danger"),_l=h("dark-green"),Dl=h("dark-red"),V=h("disabled"),Tn=h("display-shadow"),zn=h("dot"),Rl=h("end"),oi=h("error"),$t=h("expanded"),Jo=h("extra-large"),bo=h("extra-small"),Ft=h("filled-darker"),Pt=h("filled-lighter"),jl=h("fit-center"),ql=h("fit-contain"),Wl=h("fit-cover"),Xl=h("fit-none"),Ul=h("focus-visible"),Gl=h("forest"),Qe=h("ghost"),Kl=h("gold"),Yl=h("grape"),Ql=h("has-message"),Zl=h("huge"),pt=h("icon"),$r=h("important"),kt=h("indeterminate"),kr=h("informative"),Jl=h("inline"),Xr=h("inset"),Fn=h("inverted"),ed=h("italic"),td=h("justify"),T=h("large"),od=h("lavender"),rd=h("light-teal"),id=h("lilac"),nd=h("magenta"),sd=h("marigold"),ad=h("medium"),ld=h("mink"),dd=h("monospace"),oo=h("multiline"),cd=h("navy"),Eo=h("neutral"),Pn=h("nowrap"),hd=h("numeric"),Y=h("outline"),ud=h("pattern-mismatch"),pd=h("peach"),gd=h("pink"),bd=h("platinum"),fd=h("plum"),_=h("pressed"),ce=h("primary"),md=h("pumpkin"),vd=h("purple"),$d=h("range-overflow"),kd=h("range-underflow"),yd=h("red"),xd=h("resize-both"),Sd=h("resize-horizontal"),wd=h("resize-vertical"),et=h("rounded"),Bd=h("royal-blue"),Cd=h("seafoam"),ys=h("semibold"),yr=h("severe"),Id=h("shadow"),Nd=h("size-1000"),Td=h("size-100"),zd=h("size-200"),Fd=h("size-400"),Pd=h("size-500"),Ad=h("size-600"),Ed=h("size-700"),Md=h("size-800"),Hd=h("size-900"),E=h("small"),fo=h("square"),Ld=h("steel"),Vd=h("step-mismatch"),An=h("strikethrough"),ro=h("strong"),Mo=h("submenu"),A=h("subtle"),Bt=h("success"),Od=h("teal"),ht=h("tint"),mo=h("tiny"),_d=h("too-long"),Dd=h("too-short"),J=h("transparent"),En=h("truncate"),Rd=h("type-mismatch"),yt=h("underline"),jd=h("user-invalid"),qd=h("valid"),Wd=h("value-missing"),I=h("vertical"),Ct=h("warning"),L="var(--colorNeutralForeground1)",wi="var(--colorNeutralForeground1Hover)",Xd="var(--colorNeutralForeground1Pressed)",je="var(--colorNeutralForeground2)",xr="var(--colorNeutralForeground2Hover)",Sr="var(--colorNeutralForeground2Pressed)",Ud="var(--colorNeutralForeground2Selected)",er="var(--colorNeutralForeground2BrandHover)",tr="var(--colorNeutralForeground2BrandPressed)",Gd="var(--colorNeutralForeground2BrandSelected)",ve="var(--colorNeutralForeground3)",Kd="var(--colorNeutralForeground3Hover)",Yd="var(--colorNeutralForeground3Pressed)",xs="var(--colorNeutralForeground4)",M="var(--colorNeutralForegroundDisabled)",Qd="var(--colorBrandForegroundLink)",Zd="var(--colorBrandForegroundLinkHover)",Jd="var(--colorBrandForegroundLinkPressed)",ec="var(--colorNeutralForeground2Link)",tc="var(--colorNeutralForeground2LinkHover)",oc="var(--colorNeutralForeground2LinkPressed)",Ss="var(--colorCompoundBrandForeground1Hover)",rc="var(--colorCompoundBrandForeground1Pressed)",tt="var(--colorNeutralForegroundOnBrand)",Gt="var(--colorNeutralForegroundInverted)",ic="var(--colorNeutralForegroundInvertedHover)",nc="var(--colorNeutralForegroundInvertedPressed)",ws="var(--colorNeutralForegroundStaticInverted)",Bi="var(--colorBrandForeground1)",sc="var(--colorBrandForeground2)",ac="var(--colorNeutralForeground1Static)",j="var(--colorNeutralBackground1)",Ci="var(--colorNeutralBackground1Hover)",Ii="var(--colorNeutralBackground1Pressed)",Bs="var(--colorNeutralBackground1Selected)",or="var(--colorNeutralBackground3)",lc="var(--colorNeutralBackground4)",dc="var(--colorNeutralBackground5)",qo="var(--colorNeutralBackground6)",Cs="var(--colorNeutralBackgroundInverted)",cc="var(--colorSubtleBackground)",wr="var(--colorSubtleBackgroundHover)",_t="var(--colorSubtleBackgroundPressed)",hc="var(--colorSubtleBackgroundSelected)",Ne="var(--colorTransparentBackground)",ri="var(--colorTransparentBackgroundHover)",ii="var(--colorTransparentBackgroundPressed)",uc="var(--colorTransparentBackgroundSelected)",Kt="var(--colorNeutralBackgroundDisabled)",ni="var(--colorBackgroundOverlay)",Ni="var(--colorBrandBackground)",Is="var(--colorBrandBackgroundHover)",Ns="var(--colorBrandBackgroundPressed)",pc="var(--colorBrandBackgroundSelected)",Dt="var(--colorCompoundBrandBackground)",vo="var(--colorCompoundBrandBackgroundHover)",$o="var(--colorCompoundBrandBackgroundPressed)",Mn="var(--colorBrandBackgroundStatic)",gc="var(--colorBrandBackground2)",ft="var(--colorNeutralStrokeAccessible)",Rt="var(--colorNeutralStrokeAccessibleHover)",jt="var(--colorNeutralStrokeAccessiblePressed)",rt="var(--colorNeutralStroke1)",wo="var(--colorNeutralStroke1Hover)",Br="var(--colorNeutralStroke1Pressed)",ko="var(--colorNeutralStroke2)",bc="var(--colorNeutralStroke3)",fc="var(--colorNeutralStrokeOnBrand2)",Ts="var(--colorBrandStroke1)",Ti="var(--colorBrandStroke2)",Bo="var(--colorCompoundBrandStroke)",mc="var(--colorCompoundBrandStrokeHover)",zs="var(--colorCompoundBrandStrokePressed)",Fe="var(--colorNeutralStrokeDisabled)",$e="var(--colorTransparentStroke)",Hn="var(--colorTransparentStrokeInteractive)",zi="var(--colorStrokeFocus1)",qe="var(--colorStrokeFocus2)",Fs="var(--colorPaletteRedBackground1)",vc="var(--colorPaletteRedBackground2)",Ps="var(--colorPaletteRedBackground3)",As="var(--colorPaletteRedBorder1)",si="var(--colorPaletteRedBorder2)",Es="var(--colorPaletteRedForeground1)",$c="var(--colorPaletteRedForeground2)",Ms="var(--colorPaletteRedForeground3)",Hs="var(--colorPaletteGreenBackground1)",Ls="var(--colorPaletteGreenBackground3)",kc="var(--colorPaletteGreenBorder1)",yc="var(--colorPaletteGreenBorder2)",xc="var(--colorPaletteGreenForeground1)",Sc="var(--colorPaletteGreenForeground2)",wc="var(--colorPaletteGreenForeground3)",Vs="var(--colorPaletteDarkOrangeBackground1)",Os="var(--colorPaletteDarkOrangeBackground3)",_s="var(--colorPaletteDarkOrangeBorder1)",Bc="var(--colorPaletteDarkOrangeForeground1)",Ds="var(--colorPaletteDarkOrangeForeground3)",Cc="var(--colorPaletteYellowBackground1)",Ic="var(--colorPaletteYellowBackground3)",Nc="var(--colorPaletteYellowBorder1)",Fi="var(--colorPaletteYellowForeground2)",Rs="var(--colorPaletteMarigoldBackground2)",Tc="var(--colorPaletteMarigoldBackground3)",zc="var(--colorPaletteMarigoldForeground2)",Fc="var(--colorPaletteAnchorBackground2)",Pc="var(--colorPaletteAnchorForeground2)",Ac="var(--colorPaletteBeigeBackground2)",Ec="var(--colorPaletteBeigeForeground2)",Mc="var(--colorPaletteBlueBackground2)",Hc="var(--colorPaletteBlueForeground2)",Lc="var(--colorPaletteBrassBackground2)",Vc="var(--colorPaletteBrassForeground2)",Oc="var(--colorPaletteBrownBackground2)",_c="var(--colorPaletteBrownForeground2)",Dc="var(--colorPaletteCornflowerBackground2)",Rc="var(--colorPaletteCornflowerForeground2)",jc="var(--colorPaletteCranberryBackground2)",qc="var(--colorPaletteCranberryForeground2)",Wc="var(--colorPaletteDarkGreenBackground2)",Xc="var(--colorPaletteDarkGreenForeground2)",Uc="var(--colorPaletteDarkRedBackground2)",Gc="var(--colorPaletteDarkRedForeground2)",Kc="var(--colorPaletteForestBackground2)",Yc="var(--colorPaletteForestForeground2)",Qc="var(--colorPaletteGoldBackground2)",Zc="var(--colorPaletteGoldForeground2)",Jc="var(--colorPaletteGrapeBackground2)",eh="var(--colorPaletteGrapeForeground2)",th="var(--colorPaletteLavenderBackground2)",oh="var(--colorPaletteLavenderForeground2)",rh="var(--colorPaletteLightTealBackground2)",ih="var(--colorPaletteLightTealForeground2)",nh="var(--colorPaletteLilacBackground2)",sh="var(--colorPaletteLilacForeground2)",ah="var(--colorPaletteMagentaBackground2)",lh="var(--colorPaletteMagentaForeground2)",dh="var(--colorPaletteMinkBackground2)",ch="var(--colorPaletteMinkForeground2)",hh="var(--colorPaletteNavyBackground2)",uh="var(--colorPaletteNavyForeground2)",ph="var(--colorPalettePeachBackground2)",gh="var(--colorPalettePeachForeground2)",bh="var(--colorPalettePinkBackground2)",fh="var(--colorPalettePinkForeground2)",mh="var(--colorPalettePlatinumBackground2)",vh="var(--colorPalettePlatinumForeground2)",$h="var(--colorPalettePlumBackground2)",kh="var(--colorPalettePlumForeground2)",yh="var(--colorPalettePumpkinBackground2)",xh="var(--colorPalettePumpkinForeground2)",Sh="var(--colorPalettePurpleBackground2)",wh="var(--colorPalettePurpleForeground2)",Bh="var(--colorPaletteRoyalBlueBackground2)",Ch="var(--colorPaletteRoyalBlueForeground2)",Ih="var(--colorPaletteSeafoamBackground2)",Nh="var(--colorPaletteSeafoamForeground2)",Th="var(--colorPaletteSteelBackground2)",zh="var(--colorPaletteSteelForeground2)",Fh="var(--colorPaletteTealBackground2)",Ph="var(--colorPaletteTealForeground2)",Pi="var(--borderRadiusNone)",We="var(--borderRadiusSmall)",H="var(--borderRadiusMedium)",js="var(--borderRadiusLarge)",qs="var(--borderRadiusXLarge)",ke="var(--borderRadiusCircular)",S="var(--fontFamilyBase)",Ah="var(--fontFamilyMonospace)",Eh="var(--fontFamilyNumeric)",Co="var(--fontSizeBase100)",G="var(--fontSizeBase200)",O="var(--fontSizeBase300)",ue="var(--fontSizeBase400)",Yt="var(--fontSizeBase500)",Cr="var(--fontSizeBase600)",Ws="var(--fontSizeHero700)",Xs="var(--fontSizeHero800)",Us="var(--fontSizeHero900)",Gs="var(--fontSizeHero1000)",R="var(--fontWeightRegular)",Mh="var(--fontWeightMedium)",U="var(--fontWeightSemibold)",Ir="var(--fontWeightBold)",Nr="var(--lineHeightBase100)",ae="var(--lineHeightBase200)",W="var(--lineHeightBase300)",Be="var(--lineHeightBase400)",Tr="var(--lineHeightBase500)",Ks="var(--lineHeightBase600)",Ys="var(--lineHeightHero700)",Qs="var(--lineHeightHero800)",Zs="var(--lineHeightHero900)",Js="var(--lineHeightHero1000)",Ai="var(--shadow2)",zr="var(--shadow4)",Hh="var(--shadow8)",ea="var(--shadow16)",Lh="var(--shadow28)",ta="var(--shadow64)",X="var(--strokeWidthThin)",Pe="var(--strokeWidthThick)",re="var(--strokeWidthThicker)",ai="var(--strokeWidthThickest)",he="var(--spacingHorizontalXXS)",Xe="var(--spacingHorizontalXS)",xe="var(--spacingHorizontalSNudge)",ot="var(--spacingHorizontalS)",be="var(--spacingHorizontalMNudge)",me="var(--spacingHorizontalM)",Vh="var(--spacingHorizontalL)",Oh="var(--spacingHorizontalXL)",_h="var(--spacingHorizontalXXL)",yo="var(--spacingVerticalXXS)",li="var(--spacingVerticalXS)",gt="var(--spacingVerticalSNudge)",ie="var(--spacingVerticalS)",Mt="var(--spacingVerticalMNudge)",Dh="var(--spacingVerticalM)",Fr="var(--spacingVerticalL)",io="var(--spacingVerticalXXL)",oa="var(--durationUltraFast)",di="var(--durationFaster)",Ei="var(--durationNormal)",ci="var(--durationGentle)",ra="var(--durationSlow)",Ln="var(--durationSlower)",Ho="var(--durationUltraSlow)",Rh="var(--curveAccelerateMax)",qt="var(--curveAccelerateMid)",jh="var(--curveAccelerateMin)",Mi="var(--curveDecelerateMax)",Wt="var(--curveDecelerateMid)",qh="var(--curveDecelerateMin)",Wh="var(--curveEasyEaseMax)",Pr="var(--curveEasyEase)",Hi="var(--curveLinear)",Xh=b`
  ${P("block")}

  :host {
    max-width: fit-content;
    contain: content;
  }

  .heading {
    height: 44px;
    display: grid;
    position: relative;
    padding-inline: ${me} ${be};
    border-radius: ${H};
    font-family: ${S};
    font-size: ${O};
    font-weight: ${R};
    line-height: ${W};
    grid-template-columns: auto auto 1fr auto;
  }

  .button {
    appearance: none;
    background: ${Ne};
    border: none;
    box-sizing: border-box;
    color: ${L};
    cursor: pointer;
    font: inherit;
    grid-column: auto / span 2;
    grid-row: 1;
    height: 44px;
    outline: none;
    padding: 0;
    text-align: start;
  }

  .button::before {
    content: '';
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: ${We};
  }

  :where(.default-marker-collapsed, .default-marker-expanded),
  ::slotted(:is([slot='marker-collapsed'], [slot='marker-expanded'])) {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    position: relative;
    height: 100%;
    padding-inline-end: ${ot};
    grid-column: 1 / span 1;
    grid-row: 1;
  }

  .content {
    margin: 0 ${me};
  }

  ::slotted([slot='start']) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: ${ot};
    grid-column: 2 / span 1;
    grid-row: 1;
  }

  button:focus-visible::after {
    content: '';
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: ${We};
    outline: none;
    border: 2px solid ${zi};
    box-shadow: inset 0 0 0 1px ${qe};
  }

  /* --- Disabled attr styles --- */

  :host(${V}) .button {
    color: ${M};
  }

  :host(${V}) svg {
    filter: invert(89%) sepia(0%) saturate(569%) hue-rotate(155deg) brightness(88%) contrast(87%);
  }

  /* --- Expanded attr styles --- */

  :host(${$t}) .content {
    display: block;
  }

  :host(${$t}) .default-marker-collapsed,
  :host(${$t}) ::slotted([slot='marker-collapsed']),
  :host(:not(${$t})) :is(.default-marker-expanded, .content),
  :host(:not(${$t})) ::slotted([slot='marker-expanded']) {
    display: none;
  }

  :host(${$t}) ::slotted([slot='marker-expanded']),
  :host(:not(${$t})) ::slotted([slot='marker-collapsed']) {
    display: flex;
  }

  /* --- Appearance attr styles --- */

  .heading {
    font-size: ${O};
    line-height: ${W};
  }

  :host(${E}) .heading {
    font-size: ${G};
    line-height: ${ae};
  }

  :host(${T}) .heading {
    font-size: ${ue};
    line-height: ${Be};
  }

  :host(${Jo}) .heading {
    font-size: ${Yt};
    line-height: ${Tr};
  }

  /* --- marker-position attr styles --- */

  :host(${Ze}) :slotted([slot='start']) {
    grid-column: 1 / span 1;
  }

  :host(${Ze}) :is(.default-marker-collapsed, .default-marker-expanded) {
    grid-column: 4 / span 1;
    padding-inline-start: ${ot};
    padding-inline-end: 0;
  }

  :host(${Ze}) .button {
    grid-column: 2 / span 3;
  }

  /* --- Block attr styles --- */

  :host([block]) {
    max-width: 100%;
  }

  :host(${Ze}) .heading {
    grid-template-columns: auto auto 28px;
    padding-inline: ${me};
  }

  :host(${Ze}:has([slot='start'])) .heading {
    padding-inline: ${be} ${me};
  }

  :host(${po}${Ze}) .heading {
    grid-template-columns: auto 1fr;
  }

  :host(${Ze}) :is(.default-marker-collapsed, .default-marker-expanded) {
    grid-column: 5 / span 1;
  }
`,x=Object.freeze({prefix:"fluent",shadowRootMode:"open",registry:customElements}),Uh=f.partial(`<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="default-marker-collapsed"
  aria-hidden="true"
>
  <path
    d="M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z"
    fill="currentColor"
  />
</svg>`),Gh=f.partial(`<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="default-marker-expanded"
  aria-hidden="true"
>
  <path
    d="M15.794 7.73271C16.0797 8.03263 16.0681 8.50737 15.7682 8.79306L10.5178 13.7944C10.2281 14.0703 9.77285 14.0703 9.48318 13.7944L4.23271 8.79306C3.93279 8.50737 3.92125 8.03263 4.20694 7.73271C4.49264 7.43279 4.96737 7.42125 5.26729 7.70694L10.0005 12.2155L14.7336 7.70694C15.0336 7.42125 15.5083 7.43279 15.794 7.73271Z"
    fill="currentColor"
  />
</svg>`);function Kh(o={}){return f`
    <div class="heading" part="heading" role="heading" aria-level="${e=>e.headinglevel}">
      <button
        class="button"
        part="button"
        ${Se("expandbutton")}
        ?disabled="${e=>e.disabled?"true":void 0}"
        aria-expanded="${e=>e.expanded}"
        aria-controls="${e=>e.id}-panel"
        id="${e=>e.id}"
      >
        <slot name="heading"></slot>
      </button>
      ${nt(o)}
      <slot name="marker-expanded"> ${we(o.expandedIcon)} </slot>
      <slot name="marker-collapsed"> ${we(o.collapsedIcon)} </slot>
    </div>
    <div class="content" part="content" id="${e=>e.id}-panel" role="region" aria-labelledby="${e=>e.id}">
      <slot></slot>
    </div>
  `}const Yh=Kh({collapsedIcon:Uh,expandedIcon:Gh}),Qh=So.compose({name:`${x.prefix}-accordion-item`,template:Yh,styles:Xh}),Ur={single:"single",multi:"multi"};class Li extends z{constructor(){super(...arguments),this.expandmode=Ur.multi,this.activeItemIndex=0,this.setItems=()=>{if(this.slottedAccordionItems.length===0)return;const e=Array.from(this.children);if(this.removeItemListeners(e),e.forEach(t=>v.getNotifier(t).subscribe(this,"disabled")),this.accordionItems=e.filter(t=>!t.hasAttribute("disabled")),this.accordionItems.forEach((t,r)=>{t instanceof Je&&(t.addEventListener("click",this.expandedChangedHandler),v.getNotifier(t).subscribe(this,"expanded"))}),this.isSingleExpandMode()){const t=this.findExpandedItem();this.setSingleExpandMode(t)}},this.removeItemListeners=e=>{e.forEach((t,r)=>{v.getNotifier(t).unsubscribe(this,"disabled"),v.getNotifier(t).unsubscribe(this,"expanded"),t.removeEventListener("click",this.expandedChangedHandler)})},this.expandedChangedHandler=e=>{const t=e.target;t instanceof Je&&(this.isSingleExpandMode()?this.setSingleExpandMode(t):(t.expanded=!t.expanded,this.activeItemIndex=this.accordionItems.indexOf(t)),this.$emit("change"))}}expandmodeChanged(e,t){if(!this.$fastController.isConnected)return;const r=this.findExpandedItem();if(r){if(t===Ur.single){this.setSingleExpandMode(r);return}r==null||r.expandbutton.removeAttribute("aria-disabled")}}slottedAccordionItemsChanged(e,t){this.$fastController.isConnected&&this.setItems()}handleChange(e,t){t==="disabled"?this.setItems():t==="expanded"&&e.expanded&&this.isSingleExpandMode()&&this.setSingleExpandMode(e)}findExpandedItem(){var e;return this.accordionItems.length===0?null:(e=this.accordionItems.find(t=>t instanceof Je&&t.expanded))!==null&&e!==void 0?e:this.accordionItems[0]}isSingleExpandMode(){return this.expandmode===Ur.single}setSingleExpandMode(e){if(this.accordionItems.length===0)return;const t=Array.from(this.accordionItems);this.activeItemIndex=t.indexOf(e),t.forEach((r,i)=>{r instanceof Je&&(this.activeItemIndex===i?(r.expanded=!0,r.expandbutton.setAttribute("aria-disabled","true")):(r.expanded=!1,r.hasAttribute("disabled")||r.expandbutton.removeAttribute("aria-disabled")))})}}s([a({attribute:"expand-mode"})],Li.prototype,"expandmode",void 0);s([B],Li.prototype,"slottedAccordionItems",void 0);function Zh(){return f`
    <template>
      <slot ${se({property:"slottedAccordionItems",filter:Lt()})}></slot>
    </template>
  `}const Jh=Zh(),eu=b`
  ${P("flex")}

  :host {
    flex-direction: column;
    width: 100%;
    contain: content;
  }
`,tu=Li.compose({name:`${x.prefix}-accordion`,template:Jh,styles:eu}),ia={primary:"primary",outline:"outline",subtle:"subtle",transparent:"transparent"},na={circular:"circular",rounded:"rounded",square:"square"},sa={small:"small",medium:"medium",large:"large"},Lo={submit:"submit",reset:"reset",button:"button"},ou=ia,ru=na,iu=sa,nu={download:"download",href:"href",hreflang:"hreflang",ping:"ping",referrerpolicy:"referrerpolicy",rel:"rel",target:"target",type:"type"};class Ge extends z{constructor(){super(),this.isMac=navigator.userAgent.includes("Mac"),this.elementInternals=this.attachInternals(),this.internalProxyAnchor=this.createProxyElement(),this.elementInternals.role="link"}connectedCallback(){super.connectedCallback(),v.getNotifier(this).subscribe(this),Object.keys(this.$fastController.definition.attributeLookup).forEach(e=>{this.handleChange(this,e)}),this.append(this.internalProxyAnchor)}disconnectedCallback(){super.disconnectedCallback(),v.getNotifier(this).unsubscribe(this)}handleChange(e,t){var r;if(t in nu){const i=(r=this.$fastController.definition.attributeLookup[t])===null||r===void 0?void 0:r.attribute;i&&this.handleProxyAttributeChange(i,this[t])}}clickHandler(e){if(this.href){const t=this.isMac?e.metaKey:e.ctrlKey;this.handleNavigation(t)}return!0}keydownHandler(e){if(this.href&&e.key===fr){const t=this.isMac&&e.metaKey||e.ctrlKey;this.handleNavigation(t);return}return!0}handleNavigation(e){e?window.open(this.href,"_blank"):this.internalProxyAnchor.click()}handleProxyAttributeChange(e,t){t?this.internalProxyAnchor.setAttribute(e,t):this.internalProxyAnchor.removeAttribute(e)}createProxyElement(){var e;const t=(e=this.internalProxyAnchor)!==null&&e!==void 0?e:document.createElement("a");return t.ariaHidden="true",t.tabIndex=-1,t}}s([a],Ge.prototype,"download",void 0);s([a],Ge.prototype,"href",void 0);s([a],Ge.prototype,"hreflang",void 0);s([a],Ge.prototype,"ping",void 0);s([a],Ge.prototype,"referrerpolicy",void 0);s([a],Ge.prototype,"rel",void 0);s([a],Ge.prototype,"target",void 0);s([a],Ge.prototype,"type",void 0);class Qt extends Ge{constructor(){super(...arguments),this.iconOnly=!1}appearanceChanged(e,t){m(this.elementInternals,e,t,ou)}shapeChanged(e,t){m(this.elementInternals,e,t,ru)}sizeChanged(e,t){m(this.elementInternals,e,t,iu)}iconOnlyChanged(e,t){y(this.elementInternals,"icon",!!t)}}s([a],Qt.prototype,"appearance",void 0);s([a],Qt.prototype,"shape",void 0);s([a],Qt.prototype,"size",void 0);s([a({attribute:"icon-only",mode:"boolean"})],Qt.prototype,"iconOnly",void 0);st(Qt,it);const su={subtle:"subtle"};class Vi extends Ge{constructor(){super(...arguments),this.inline=!1}appearanceChanged(e,t){m(this.elementInternals,e,t,su)}inlineChanged(e,t){y(this.elementInternals,"inline",t)}}s([a],Vi.prototype,"appearance",void 0);s([a({mode:"boolean"})],Vi.prototype,"inline",void 0);const au=b`
  ${P("inline")}

  :host {
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    color: ${Qd};
    cursor: pointer;
    font-family: ${S};
    font-size: ${O};
    font-weight: ${R};
    overflow: inherit;
    text-align: start;
    text-decoration: none;
    text-decoration-thickness: ${X};
    text-overflow: inherit;
    user-select: text;
  }

  :host(:is(:hover, :focus-visible)) {
    outline: none;
    text-decoration-line: underline;
  }

  @media (hover: hover) {
    :host(:hover) {
      color: ${Zd};
    }

    :host(:active) {
      color: ${Jd};
    }

    :host(${A}:hover) {
      color: ${tc};
    }

    :host(${A}:active) {
      color: ${oc};
    }
  }

  :host(${A}) {
    color: ${ec};
  }

  :host-context(:is(h1, h2, h3, h4, h5, h6, p, fluent-text)),
  :host(${Jl}) {
    font: inherit;
    text-decoration: underline;
  }

  :host(:not([href])) {
    color: inherit;
    text-decoration: none;
  }

  ::slotted(a) {
    position: absolute;
    inset: 0;
  }
`.withBehaviors(te(b`
    :host {
      color: LinkText;
    }
  `));function lu(){return f`
    <template
      tabindex="0"
      @click="${(o,e)=>o.clickHandler(e.event)}"
      @keydown="${(o,e)=>o.keydownHandler(e.event)}"
    >
      <slot></slot>
    </template>
  `}const du=lu(),cu=Vi.compose({name:`${x.prefix}-link`,template:du,styles:au}),hu=/[\(\[\{][^\)\]\}]*[\)\]\}]/g,uu=/[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g,pu=/^\d+[\d\s]*(:?ext|x|)\s*\d+$/i,gu=/\s+/g,bu=/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;function fu(o,e,t){let r="";const i=o.split(" ");return i.length!==0&&(r+=i[0].charAt(0).toUpperCase()),t||(i.length===2?r+=i[1].charAt(0).toUpperCase():i.length===3&&(r+=i[2].charAt(0).toUpperCase())),e&&r.length>1?r.charAt(1)+r.charAt(0):r}function mu(o){return o=o.replace(hu,""),o=o.replace(uu,""),o=o.replace(gu," "),o=o.trim(),o}function vu(o,e,t){return!o||(o=mu(o),bu.test(o)||!(t!=null&&t.allowPhoneInitials)&&pu.test(o))?"":fu(o,e,t==null?void 0:t.firstInitialOnly)}const aa={darkRed:"dark-red",cranberry:"cranberry",red:"red",pumpkin:"pumpkin",peach:"peach",marigold:"marigold",gold:"gold",brass:"brass",brown:"brown",forest:"forest",seafoam:"seafoam",darkGreen:"dark-green",lightTeal:"light-teal",teal:"teal",steel:"steel",blue:"blue",royalBlue:"royal-blue",cornflower:"cornflower",navy:"navy",lavender:"lavender",purple:"purple",grape:"grape",lilac:"lilac",pink:"pink",magenta:"magenta",plum:"plum",beige:"beige",mink:"mink",platinum:"platinum",anchor:"anchor"},Vn={neutral:"neutral",brand:"brand",colorful:"colorful",...aa};class Ar extends z{constructor(){super(),this.elementInternals=this.attachInternals(),this.elementInternals.role="img"}}s([a],Ar.prototype,"name",void 0);s([a],Ar.prototype,"initials",void 0);s([a],Ar.prototype,"active",void 0);class Ue extends Ar{handleChange(e,t){switch(t){case"color":case"colorId":this.generateColor();break}}generateInitials(){var e,t;if(!this.name&&!this.initials)return;const r=(e=this.size)!==null&&e!==void 0?e:32;return(t=this.initials)!==null&&t!==void 0?t:vu(this.name,window.getComputedStyle(this).direction==="rtl",{firstInitialOnly:r<=16})}generateColor(){var e,t;const r=this.color===Vn.colorful,i=this.currentColor;this.currentColor=r&&this.colorId?this.colorId:r?Ue.colors[$u((e=this.name)!==null&&e!==void 0?e:"")%Ue.colors.length]:(t=this.color)!==null&&t!==void 0?t:Vn.neutral,m(this.elementInternals,i,this.currentColor)}connectedCallback(){super.connectedCallback(),v.getNotifier(this).subscribe(this),this.generateColor()}disconnectedCallback(){super.disconnectedCallback(),v.getNotifier(this).unsubscribe(this)}}Ue.colors=Object.values(aa);s([a],Ue.prototype,"shape",void 0);s([a],Ue.prototype,"appearance",void 0);s([a({converter:le})],Ue.prototype,"size",void 0);s([a],Ue.prototype,"color",void 0);s([a({attribute:"color-id"})],Ue.prototype,"colorId",void 0);const $u=o=>{let e=0;for(let t=o.length-1;t>=0;t--){const r=o.charCodeAt(t),i=t%8;e^=(r<<i)+(r>>8-i)}return e},ku=f`<svg
  width="1em"
  height="1em"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
  class="default-icon"
  fill="currentcolor"
  aria-hidden="true"
>
  <path
    d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0010 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0017 13a2 2 0 00-2-2H5zm-1 2a1 1 0 011-1h10a1 1 0 011 1c0 1.3-.62 2.28-1.67 2.95A8.16 8.16 0 0110 17a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 014 13z"
  ></path>
</svg>`;function yu(){return f`
    <slot>${o=>o.name||o.initials?o.generateInitials():ku}</slot>
    <slot name="badge"></slot>
  `}const xu=yu(),ut={fastOutSlowInMax:Mi,fastOutSlowInMid:Wt,fastOutSlowInMin:qh,slowOutFastInMax:Rh,slowOutFastInMid:qt,slowOutFastInMin:jh,fastEase:Wh,normalEase:Pr,nullEasing:Hi},Su=b`
  ${P("inline-flex")} :host {
    position: relative;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    font-family: ${S};
    font-weight: ${U};
    font-size: ${O};
    border-radius: ${ke};
    color: ${ve};
    background-color: ${qo};
    contain: layout style;
  }

  .default-icon,
  ::slotted(svg) {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }

  ::slotted(img) {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: ${ke};
  }

  ::slotted([slot='badge']) {
    position: absolute;
    bottom: 0;
    right: 0;
    box-shadow: 0 0 0 ${X}) ${j};
  }

  :host([size='64']) ::slotted([slot='badge']),
  :host([size='72']) ::slotted([slot='badge']),
  :host([size='96']) ::slotted([slot='badge']),
  :host([size='120']) ::slotted([slot='badge']),
  :host([size='128']) ::slotted([slot='badge']) {
    box-shadow: 0 0 0 ${Pe}) ${j};
  }

  :host([size='16']),
  :host([size='20']),
  :host([size='24']) {
    font-size: ${Co};
    font-weight: ${R};
  }

  :host([size='16']) {
    width: 16px;
    height: 16px;
  }

  :host([size='20']) {
    width: 20px;
    height: 20px;
  }

  :host([size='24']) {
    width: 24px;
    height: 24px;
  }

  :host([size='16']) .default-icon,
  :host([size='16']) ::slotted(svg) {
    width: 12px;
    height: 12px;
    font-size: 12px;
  }

  :host([size='20']) .default-icon,
  :host([size='24']) .default-icon,
  :host([size='20']) ::slotted(svg),
  :host([size='24']) ::slotted(svg) {
    width: 16px;
    height: 16px;
    font-size: 16px;
  }

  :host([size='28']) {
    width: 28px;
    height: 28px;
    font-size: ${G};
  }

  :host([size='36']) {
    width: 36px;
    height: 36px;
  }

  :host([size='40']) {
    width: 40px;
    height: 40px;
  }

  :host([size='48']),
  :host([size='56']) {
    font-size: ${ue};
  }

  :host([size='48']) {
    width: 48px;
    height: 48px;
  }

  :host([size='48']) .default-icon,
  :host([size='48']) ::slotted(svg) {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }

  :host([size='56']) {
    width: 56px;
    height: 56px;
  }

  :host([size='56']) .default-icon,
  :host([size='56']) ::slotted(svg) {
    width: 28px;
    height: 28px;
    font-size: 28px;
  }

  :host([size='64']),
  :host([size='72']),
  :host([size='96']) {
    font-size: ${Yt};
  }

  :host([size='64']) .default-icon,
  :host([size='72']) .default-icon,
  :host([size='64']) ::slotted(svg),
  :host([size='72']) ::slotted(svg) {
    width: 32px;
    height: 32px;
    font-size: 32px;
  }

  :host([size='64']) {
    width: 64px;
    height: 64px;
  }

  :host([size='72']) {
    width: 72px;
    height: 72px;
  }

  :host([size='96']) {
    width: 96px;
    height: 96px;
  }

  :host([size='96']) .default-icon,
  :host([size='120']) .default-icon,
  :host([size='128']) .default-icon,
  :host([size='96']) ::slotted(svg),
  :host([size='120']) ::slotted(svg),
  :host([size='128']) ::slotted(svg) {
    width: 48px;
    height: 48px;
    font-size: 48px;
  }

  :host([size='120']),
  :host([size='128']) {
    font-size: ${Cr};
  }

  :host([size='120']) {
    width: 120px;
    height: 120px;
  }

  :host([size='128']) {
    width: 128px;
    height: 128px;
  }

  :host([shape='square']) {
    border-radius: ${H};
  }

  :host([shape='square'][size='20']),
  :host([shape='square'][size='24']) {
    border-radius: ${We};
  }

  :host([shape='square'][size='56']),
  :host([shape='square'][size='64']),
  :host([shape='square'][size='72']) {
    border-radius: ${js};
  }
  :host([shape='square'][size='96']),
  :host([shape='square'][size='120']),
  :host([shape='square'][size='128']) {
    border-radius: ${qs};
  }

  :host(${Ve}) {
    color: ${ws};
    background-color: ${Mn};
  }

  :host(${Dl}) {
    color: ${Gc};
    background-color: ${Uc};
  }

  :host(${Vl}) {
    color: ${qc};
    background-color: ${jc};
  }

  :host(${yd}) {
    color: ${$c};
    background-color: ${vc};
  }

  :host(${md}) {
    color: ${xh};
    background-color: ${yh};
  }

  :host(${pd}) {
    color: ${gh};
    background-color: ${ph};
  }

  :host(${sd}) {
    color: ${zc};
    background-color: ${Rs};
  }

  :host(${Kl}) {
    color: ${Zc};
    background-color: ${Qc};
  }

  :host(${El}) {
    color: ${Vc};
    background-color: ${Lc};
  }

  :host(${Ml}) {
    color: ${_c};
    background-color: ${Oc};
  }

  :host(${Gl}) {
    color: ${Yc};
    background-color: ${Kc};
  }

  :host(${Cd}) {
    color: ${Nh};
    background-color: ${Ih};
  }

  :host(${_l}) {
    color: ${Xc};
    background-color: ${Wc};
  }

  :host(${rd}) {
    color: ${ih};
    background-color: ${rh};
  }

  :host(${Od}) {
    color: ${Ph};
    background-color: ${Fh};
  }

  :host(${Ld}) {
    color: ${zh};
    background-color: ${Th};
  }

  :host(${Fl}) {
    color: ${Hc};
    background-color: ${Mc};
  }

  :host(${Bd}) {
    color: ${Ch};
    background-color: ${Bh};
  }

  :host(${Ll}) {
    color: ${Rc};
    background-color: ${Dc};
  }

  :host(${cd}) {
    color: ${uh};
    background-color: ${hh};
  }

  :host(${od}) {
    color: ${oh};
    background-color: ${th};
  }

  :host(${vd}) {
    color: ${wh};
    background-color: ${Sh};
  }

  :host(${Yl}) {
    color: ${eh};
    background-color: ${Jc};
  }

  :host(${id}) {
    color: ${sh};
    background-color: ${nh};
  }

  :host(${gd}) {
    color: ${fh};
    background-color: ${bh};
  }

  :host(${nd}) {
    color: ${lh};
    background-color: ${ah};
  }

  :host(${fd}) {
    color: ${kh};
    background-color: ${$h};
  }

  :host(${zl}) {
    color: ${Ec};
    background-color: ${Ac};
  }

  :host(${ld}) {
    color: ${ch};
    background-color: ${dh};
  }

  :host(${bd}) {
    color: ${vh};
    background-color: ${mh};
  }

  :host(${Nl}) {
    color: ${Pc};
    background-color: ${Fc};
  }

  :host([active]) {
    /* Work-around for text pixel snapping at the end of the animation */
    transform: perspective(1px);
    transition-property: transform, opacity;
    transition-duration: ${Ho}, ${di};
    transition-delay: ${ut.fastEase}, ${ut.nullEasing};
  }

  :host([active])::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit;
    transition-property: margin, opacity;
    transition-duration: ${Ho}), ${Ln};
    transition-delay: ${ut.fastEase}), ${ut.nullEasing});
  }
  :host([active])::before {
    box-shadow: ${Hh};
    border-style: solid;
    border-color: ${Mn};
  }

  :host([active][appearance='shadow'])::before {
    border-style: none;
    border-color: none;
  }

  :host([active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${Pe});
    border-width: ${Pe};
  }

  :host([size='56'][active]:not([appearance='shadow']))::before,
  :host([size='64'][active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${re});
    border-width: ${re};
  }

  :host([size='72'][active]:not([appearance='shadow']))::before,
  :host([size='96'][active]:not([appearance='shadow']))::before,
  :host([size='120'][active]:not([appearance='shadow']))::before,
  :host([size='128'][active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${ai});
    border-width: ${ai};
  }

  :host([size='20'][active][appearance])::before,
  :host([size='24'][active][appearance])::before,
  :host([size='28'][active][appearance])::before {
    box-shadow: ${zr};
  }

  :host([size='56'][active][appearance])::before,
  :host([size='64'][active][appearance])::before {
    box-shadow: ${ea};
  }

  :host([size='72'][active][appearance])::before,
  :host([size='96'][active][appearance])::before,
  :host([size='120'][active][appearance])::before,
  :host([size='128'][active][appearance])::before {
    box-shadow: ${Lh};
  }

  :host([active][appearance='ring'])::before {
    box-shadow: none;
  }

  :host([active='inactive']) {
    opacity: 0.8;
    transform: scale(0.875);
    transition-property: transform, opacity;
    transition-duration: ${Ho}, ${di};
    transition-delay: ${ut.fastOutSlowInMin}, ${ut.nullEasing};
  }

  :host([active='inactive'])::before {
    margin: 0;
    opacity: 0;
    transition-property: margin, opacity;
    transition-duration: ${Ho}, ${Ln};
    transition-delay: ${ut.fastOutSlowInMin}, ${ut.nullEasing};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    :host([active]) {
      transition-duration: 0.01ms;
    }

    :host([active])::before {
      transition-duration: 0.01ms;
      transition-delay: 0.01ms;
    }
  }
`,wu=Ue.compose({name:`${x.prefix}-avatar`,template:xu,styles:Su}),On={filled:"filled",ghost:"ghost",outline:"outline",tint:"tint"},_n={brand:"brand",danger:"danger",important:"important",informative:"informative",severe:"severe",subtle:"subtle",success:"success",warning:"warning"},Bu={circular:"circular",rounded:"rounded",square:"square"},Cu={tiny:"tiny",extraSmall:"extra-small",small:"small",medium:"medium",large:"large",extraLarge:"extra-large"};class Zt extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.appearance=On.filled,this.color=_n.brand}appearanceChanged(e,t){m(this.elementInternals,e,t,On)}colorChanged(e,t){m(this.elementInternals,e,t,_n)}shapeChanged(e,t){m(this.elementInternals,e,t,Bu)}sizeChanged(e,t){m(this.elementInternals,e,t,Cu)}}s([a],Zt.prototype,"appearance",void 0);s([a],Zt.prototype,"color",void 0);s([a],Zt.prototype,"shape",void 0);s([a],Zt.prototype,"size",void 0);st(Zt,it);function la(o={}){return f`
    ${nt(o)}
    <slot>${we(o.defaultContent)}</slot>
    ${mt(o)}
  `}const Iu=la(),da=b.partial`
  ${P("inline-flex")} :host {
    position: relative;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    font-family: ${S};
    font-weight: ${U};
    font-size: ${G};
    line-height: ${ae};
    min-width: 20px;
    height: 20px;
    padding-inline: calc(${Xe} + ${he});
    border-radius: ${ke};
    border-color: ${$e};
    background-color: ${Ni};
    color: ${tt};
    contain: content;
  }

  ::slotted(svg) {
    font-size: 12px;
  }

  :host(:not(${Qe}))::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: ${X};
    border-color: inherit;
    border-radius: inherit;
  }
`,ca=b.partial`
  :host(${mo}) {
    width: 6px;
    height: 6px;
    font-size: 4px;
    line-height: 4px;
    padding-inline: 0;
    min-width: unset;
  }
  :host(${mo}) ::slotted(svg) {
    font-size: 6px;
  }
  :host(${bo}) {
    width: 10px;
    height: 10px;
    font-size: 6px;
    line-height: 6px;
    padding-inline: 0;
    min-width: unset;
  }
  :host(${bo}) ::slotted(svg) {
    font-size: 10px;
  }
  :host(${E}) {
    min-width: 16px;
    height: 16px;
    font-size: ${Co};
    line-height: ${Nr};
    padding-inline: calc(${he} + ${he});
  }
  :host(${E}) ::slotted(svg) {
    font-size: 12px;
  }
  :host(${T}) {
    min-width: 24px;
    height: 24px;
    font-size: ${G};
    line-height: ${ae};
    padding-inline: calc(${Xe} + ${he});
  }
  :host(${T}) ::slotted(svg) {
    font-size: 16px;
  }
  :host(${Jo}) {
    min-width: 32px;
    height: 32px;
    font-size: ${G};
    line-height: ${ae};
    padding-inline: calc(${xe} + ${he});
  }
  :host(${Jo}) ::slotted(svg) {
    font-size: 20px;
  }
`,ha=b.partial`
  :host(${vr}) {
    background-color: ${Ps};
    color: ${tt};
  }

  :host(${$r}) {
    background-color: ${L};
    color: ${j};
  }

  :host(${kr}) {
    background-color: ${dc};
    color: ${ve};
  }

  :host(${yr}) {
    background-color: ${Os};
    color: ${tt};
  }

  :host(${A}) {
    background-color: ${j};
    color: ${L};
  }

  :host(${Bt}) {
    background-color: ${Ls};
    color: ${tt};
  }

  :host(${Ct}) {
    background-color: ${Ic};
    color: ${ac};
  }
`,ua=b.partial`
  :host(${Qe}) {
    color: ${Bi};
    background-color: initial;
  }

  :host(${Qe}${vr}) {
    color: ${Ms};
  }

  :host(${Qe}${$r}) {
    color: ${L};
  }

  :host(${Qe}${kr}) {
    color: ${ve};
  }

  :host(${Qe}${yr}) {
    color: ${Ds};
  }

  :host(${Qe}${A}) {
    color: ${Gt};
  }

  :host(${Qe}${Bt}) {
    color: ${wc};
  }

  :host(${Qe}${Ct}) {
    color: ${Fi};
  }
`,Nu=b.partial`
  :host(${Y}) {
    border-color: currentColor;
    color: ${Bi};
    background-color: initial;
  }

  :host(${Y}${vr}) {
    color: ${Ms};
  }

  :host(${Y}${$r}) {
    color: ${ve};
    border-color: ${ft};
  }

  :host(${Y}${kr}) {
    color: ${ve};
    border-color: ${ko};
  }

  :host(${Y}${yr}) {
    color: ${Ds};
  }

  :host(${Y}${A}) {
    color: ${ws};
  }

  :host(${Y}${Bt}) {
    color: ${Sc};
  }

  :host(${Y}${Ct}) {
    color: ${Fi};
  }
`,Tu=b.partial`
  :host(${ht}) {
    background-color: ${gc};
    color: ${sc};
    border-color: ${Ti};
  }

  :host(${ht}${vr}) {
    background-color: ${Fs};
    color: ${Es};
    border-color: ${As};
  }

  :host(${ht}${$r}) {
    background-color: ${ve};
    color: ${j};
    border-color: ${$e};
  }

  :host(${ht}${kr}) {
    background-color: ${lc};
    color: ${ve};
    border-color: ${ko};
  }

  :host(${ht}${yr}) {
    background-color: ${Vs};
    color: ${Bc};
    border-color: ${_s};
  }

  :host(${ht}${A}) {
    background-color: ${j};
    color: ${ve};
    border-color: ${ko};
  }

  :host(${ht}${Bt}) {
    background-color: ${Hs};
    color: ${xc};
    border-color: ${yc};
  }

  :host(${ht}${Ct}) {
    background-color: ${Cc};
    color: ${Fi};
    border-color: ${Nc};
  }
`;b.partial`
  font-family: ${S};
  font-size: ${O};
  line-height: ${W};
  font-weight: ${R};
`;b.partial`
  font-family: ${S};
  font-size: ${O};
  line-height: ${W};
  font-weight: ${U};
`;b.partial`
  font-family: ${S};
  font-size: ${O};
  line-height: ${W};
  font-weight: ${Ir};
`;b.partial`
  font-family: ${S};
  font-size: ${ue};
  line-height: ${Be};
  font-weight: ${R};
`;b.partial`
  font-family: ${S};
  font-size: ${G};
  line-height: ${ae};
  font-weight: ${R};
`;b.partial`
  font-family: ${S};
  font-size: ${G};
  line-height: ${ae};
  font-weight: ${U};
`;b.partial`
  font-family: ${S};
  font-size: ${G};
  line-height: ${ae};
  font-weight: ${Ir};
`;b.partial`
  font-family: ${S};
  font-size: ${Co};
  line-height: ${Nr};
  font-weight: ${R};
`;b.partial`
  font-family: ${S};
  font-size: ${Co};
  line-height: ${Nr};
  font-weight: ${U};
`;const zu=b.partial`
  font-family: ${S};
  font-size: ${Yt};
  line-height: ${Tr};
  font-weight: ${U};
`;b.partial`
  font-family: ${S};
  font-size: ${ue};
  line-height: ${Be};
  font-weight: ${U};
`;b.partial`
  font-family: ${S};
  font-size: ${ue};
  line-height: ${Be};
  font-weight: ${Ir};
`;b.partial`
  font-family: ${S};
  font-size: ${Xs};
  line-height: ${Qs};
  font-weight: ${U};
`;b.partial`
  font-family: ${S};
  font-size: ${Ws};
  line-height: ${Ys};
  font-weight: ${U};
`;b.partial`
  font-family: ${S};
  font-size: ${Cr};
  line-height: ${Ks};
  font-weight: ${U};
`;b.partial`
  font-family: ${S};
  font-size: ${Us};
  line-height: ${Zs};
  font-weight: ${U};
`;b.partial`
  font-family: ${S};
  font-size: ${Gs};
  line-height: ${Js};
  font-weight: ${U};
`;const Fu=b`
  :host(${fo}) {
    border-radius: ${Pi};
  }

  :host(${et}) {
    border-radius: ${H};
  }

  :host(${et}${mo}),
  :host(${et}${bo}),
  :host(${et}${E}) {
    border-radius: ${We};
  }

  ${ca}
  ${ha}
  ${ua}
  ${Nu}
  ${Tu}
  ${da}
`.withBehaviors(te(b`
    :host,
    :host([appearance='outline']),
    :host([appearance='tint']) {
      border-color: CanvasText;
    }
  `)),Pu=Zt.compose({name:`${x.prefix}-badge`,template:Iu,styles:Fu});class de extends z{disabledFocusableChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.ariaDisabled=`${!!t}`)}get form(){return this.elementInternals.form}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}typeChanged(e,t){var r,i,n;t!==Lo.submit&&((r=this.formSubmissionFallbackControl)===null||r===void 0||r.remove(),(n=(i=this.shadowRoot)===null||i===void 0?void 0:i.querySelector('slot[name="internal"]'))===null||n===void 0||n.remove())}clickHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}return this.press(),!0}connectedCallback(){super.connectedCallback(),this.elementInternals.ariaDisabled=`${!!this.disabledFocusable}`}constructor(){super(),this.disabledFocusable=!1,this.tabIndex=0,this.elementInternals=this.attachInternals(),this.elementInternals.role="button"}createAndInsertFormSubmissionFallbackControl(){var e,t,r,i,n,l,c,p;const g=(e=this.formSubmissionFallbackControlSlot)!==null&&e!==void 0?e:document.createElement("slot");g.setAttribute("name","internal"),(t=this.shadowRoot)===null||t===void 0||t.appendChild(g),this.formSubmissionFallbackControlSlot=g;const d=(r=this.formSubmissionFallbackControl)!==null&&r!==void 0?r:document.createElement("button");d.style.display="none",d.setAttribute("type","submit"),d.setAttribute("slot","internal"),this.formNoValidate&&d.toggleAttribute("formnovalidate",!0),!((i=this.elementInternals.form)===null||i===void 0)&&i.id&&d.setAttribute("form",this.elementInternals.form.id),this.name&&d.setAttribute("name",this.name),this.value&&d.setAttribute("value",this.value),this.formAction&&d.setAttribute("formaction",(n=this.formAction)!==null&&n!==void 0?n:""),this.formEnctype&&d.setAttribute("formenctype",(l=this.formEnctype)!==null&&l!==void 0?l:""),this.formMethod&&d.setAttribute("formmethod",(c=this.formMethod)!==null&&c!==void 0?c:""),this.formTarget&&d.setAttribute("formtarget",(p=this.formTarget)!==null&&p!==void 0?p:""),this.append(d),this.formSubmissionFallbackControl=d}formDisabledCallback(e){this.disabled=e}keypressHandler(e){if(e&&this.disabledFocusable){e.stopImmediatePropagation();return}if(e.key===fr||e.key===$i){this.click();return}return!0}press(){switch(this.type){case Lo.reset:{this.resetForm();break}case Lo.submit:{this.submitForm();break}}}resetForm(){var e;(e=this.elementInternals.form)===null||e===void 0||e.reset()}submitForm(){var e;if(!(!this.elementInternals.form||this.disabled||this.type!==Lo.submit)){if(!this.name&&!this.formAction&&!this.formEnctype&&!this.form&&!this.formMethod&&!this.formNoValidate&&!this.formTarget){this.elementInternals.form.requestSubmit();return}try{this.elementInternals.setFormValue((e=this.value)!==null&&e!==void 0?e:""),this.elementInternals.form.requestSubmit(this)}catch{this.createAndInsertFormSubmissionFallbackControl(),this.elementInternals.setFormValue(null),this.elementInternals.form.requestSubmit(this.formSubmissionFallbackControl)}}}}de.formAssociated=!0;s([a({mode:"boolean"})],de.prototype,"autofocus",void 0);s([B],de.prototype,"defaultSlottedContent",void 0);s([a({mode:"boolean"})],de.prototype,"disabled",void 0);s([a({attribute:"disabled-focusable",mode:"boolean"})],de.prototype,"disabledFocusable",void 0);s([a({attribute:"tabindex",mode:"fromView",converter:le})],de.prototype,"tabIndex",void 0);s([a({attribute:"formaction"})],de.prototype,"formAction",void 0);s([a({attribute:"form"})],de.prototype,"formAttribute",void 0);s([a({attribute:"formenctype"})],de.prototype,"formEnctype",void 0);s([a({attribute:"formmethod"})],de.prototype,"formMethod",void 0);s([a({attribute:"formnovalidate",mode:"boolean"})],de.prototype,"formNoValidate",void 0);s([a({attribute:"formtarget"})],de.prototype,"formTarget",void 0);s([a],de.prototype,"name",void 0);s([a],de.prototype,"type",void 0);s([a],de.prototype,"value",void 0);class at extends de{constructor(){super(...arguments),this.iconOnly=!1}appearanceChanged(e,t){m(this.elementInternals,e,t,ia)}shapeChanged(e,t){m(this.elementInternals,e,t,na)}sizeChanged(e,t){m(this.elementInternals,e,t,sa)}iconOnlyChanged(e,t){y(this.elementInternals,"icon",t)}}s([a],at.prototype,"appearance",void 0);s([a],at.prototype,"shape",void 0);s([a],at.prototype,"size",void 0);s([a({attribute:"icon-only",mode:"boolean"})],at.prototype,"iconOnly",void 0);st(at,it);const pa=b`
  ${P("inline-flex")}

  :host {
    --icon-spacing: ${xe};
    position: relative;
    contain: layout style;
    vertical-align: middle;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    text-decoration-line: none;
    margin: 0;
    min-height: 32px;
    outline-style: none;
    background-color: ${j};
    color: ${L};
    border: ${X} solid ${rt};
    padding: 0 ${me};
    min-width: 96px;
    border-radius: ${H};
    font-size: ${O};
    font-family: ${S};
    font-weight: ${U};
    line-height: ${W};
    transition-duration: ${di};
    transition-property: background, border, color;
    transition-timing-function: ${Pr};
    cursor: pointer;
    user-select: none;
  }

  .content {
    display: inherit;
  }

  :host(:hover) {
    background-color: ${Ci};
    color: ${wi};
    border-color: ${wo};
  }

  :host(:hover:active) {
    background-color: ${Ii};
    border-color: ${Br};
    color: ${Xd};
    outline-style: none;
  }

  :host(:focus-visible) {
    border-color: ${$e};
    outline: ${Pe} solid ${$e};
    box-shadow: ${zr}, 0 0 0 2px ${qe};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    :host {
      transition-duration: 0.01ms;
    }
  }

  ::slotted(svg) {
    font-size: 20px;
    height: 20px;
    width: 20px;
    fill: currentColor;
  }

  :is([slot='start'], ::slotted([slot='start'])) {
    margin-inline-end: var(--icon-spacing);
  }

  :is([slot='end'], ::slotted([slot='end'])) {
    flex-shrink: 0;
  }

  :host(:not(${pt})) :is([slot='end'], :host(:not(${pt}))::slotted([slot='end'])) {
    margin-inline-start: var(--icon-spacing);
  }

  :host(${pt}) {
    min-width: 32px;
    max-width: 32px;
  }

  :host(${E}) {
    --icon-spacing: ${Xe};
    min-height: 24px;
    min-width: 64px;
    padding: 0 ${ot};
    border-radius: ${We};
    font-size: ${G};
    line-height: ${ae};
    font-weight: ${R};
  }

  :host(${E}${pt}) {
    min-width: 24px;
    max-width: 24px;
  }

  :host(${T}) {
    min-height: 40px;
    border-radius: ${js};
    padding: 0 ${Vh};
    font-size: ${ue};
    line-height: ${Be};
  }

  :host(${T}${pt}) {
    min-width: 40px;
    max-width: 40px;
  }

  :host(${T}) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host(:is(${go}, ${go}:focus-visible)) {
    border-radius: ${ke};
  }

  :host(:is(${fo}, ${fo}:focus-visible)) {
    border-radius: ${Pi};
  }

  :host(${ce}) {
    background-color: ${Ni};
    color: ${tt};
    border-color: transparent;
  }

  :host(${ce}:hover) {
    background-color: ${Is};
  }

  :host(${ce}:is(:hover, :hover:active)) {
    border-color: transparent;
    color: ${tt};
  }

  :host(${ce}:hover:active) {
    background-color: ${Ns};
  }

  :host(${ce}:focus-visible) {
    border-color: ${tt};
    box-shadow: ${Ai}, 0 0 0 2px ${qe};
  }

  :host(${Y}) {
    background-color: ${Ne};
  }

  :host(${Y}:hover) {
    background-color: ${ri};
  }

  :host(${Y}:hover:active) {
    background-color: ${ii};
  }

  :host(${A}) {
    background-color: ${cc};
    color: ${je};
    border-color: transparent;
  }

  :host(${A}:hover) {
    background-color: ${wr};
    color: ${xr};
    border-color: transparent;
  }

  :host(${A}:hover:active) {
    background-color: ${_t};
    color: ${Sr};
    border-color: transparent;
  }

  :host(${A}:hover) ::slotted(svg) {
    fill: ${er};
  }

  :host(${A}:hover:active) ::slotted(svg) {
    fill: ${tr};
  }

  :host(${J}) {
    background-color: ${Ne};
    color: ${je};
  }

  :host(${J}:hover) {
    background-color: ${ri};
    color: ${er};
  }

  :host(${J}:hover:active) {
    background-color: ${ii};
    color: ${tr};
  }

  :host(:is(${J}, ${J}:is(:hover, :active))) {
    border-color: transparent;
  }
`,Er=b`
  ${pa}

  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover),
  :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable]):hover:active) {
    background-color: ${Kt};
    border-color: ${Fe};
    color: ${M};
    cursor: not-allowed;
  }

  :host(${ce}:is(:disabled, [disabled-focusable])),
  :host(${ce}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
  }

  :host(${Y}:is(:disabled, [disabled-focusable])),
  :host(${Y}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${Ne};
  }

  :host(${A}:is(:disabled, [disabled-focusable])),
  :host(${A}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    background-color: ${Ne};
    border-color: transparent;
  }

  :host(${J}:is(:disabled, [disabled-focusable])),
  :host(${J}:is(:disabled, [disabled-focusable]):is(:hover, :hover:active)) {
    border-color: transparent;
    background-color: ${Ne};
  }
`.withBehaviors(te(b`
    :host {
      background-color: ButtonFace;
      color: ButtonText;
    }

    :host(:is(:hover, :focus-visible)) {
      border-color: Highlight !important;
    }

    :host(${ce}:not(:is(:hover, :focus-visible))) {
      background-color: Highlight;
      color: HighlightText;
      forced-color-adjust: none;
    }

    :host(:is(:disabled, [disabled-focusable], [appearance]:disabled, [appearance][disabled-focusable])) {
      background-color: ButtonFace;
      color: GrayText;
      border-color: ButtonText;
    }
  `));function Oi(o={}){return f`
    <template
      tabindex="${e=>{var t;return e.disabled?null:(t=e.tabIndex)!==null&&t!==void 0?t:0}}"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keypress="${(e,t)=>e.keypressHandler(t.event)}"
    >
      ${nt(o)}
      <span class="content" part="content">
        <slot ${se("defaultSlottedContent")}></slot>
      </span>
      ${mt(o)}
    </template>
  `}const Au=Oi(),Eu=at.compose({name:`${x.prefix}-button`,template:Au,styles:Er}),Mu={circular:"circular",square:"square"},Hu={medium:"medium",large:"large"};class Te extends z{constructor(){super(...arguments),this.initialValue="on",this.dirtyChecked=!1,this.elementInternals=this.attachInternals(),this._validationFallbackMessage="",this._value=this.initialValue}get checked(){return v.track(this,"checked"),!!this._checked}set checked(e){this._checked=e,this.setFormValue(e?this.value:null),this.setValidity(),this.setAriaChecked(),y(this.elementInternals,"checked",e),v.notify(this,"checked")}disabledChanged(e,t){this.elementInternals.ariaDisabled=this.disabled?"true":"false",y(this.elementInternals,"disabled",this.disabled)}disabledAttributeChanged(e,t){this.disabled=!!t}initialCheckedChanged(e,t){this.dirtyChecked||(this.checked=!!t)}initialValueChanged(e,t){this._value=t}requiredChanged(e,t){this.$fastController.isConnected&&(this.setValidity(),this.elementInternals.ariaRequired=this.required?"true":"false")}get form(){return this.elementInternals.form}get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}get validationMessage(){if(this.elementInternals.validationMessage)return this.elementInternals.validationMessage;if(!this._validationFallbackMessage){const e=document.createElement("input");e.type="checkbox",e.required=!0,e.checked=!1,this._validationFallbackMessage=e.validationMessage}return this._validationFallbackMessage}get validity(){return this.elementInternals.validity}get value(){return v.track(this,"value"),this._value}set value(e){this._value=e,this.$fastController.isConnected&&(this.setFormValue(e),this.setValidity(),v.notify(this,"value"))}get willValidate(){return this.elementInternals.willValidate}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){if(this.disabled)return;this.dirtyChecked=!0;const t=this.checked;return this.toggleChecked(),t!==this.checked&&(this.$emit("change"),this.$emit("input")),!0}connectedCallback(){super.connectedCallback(),this.setAriaChecked(),this.setValidity()}inputHandler(e){return this.setFormValue(this.value),this.setValidity(),!0}keydownHandler(e){if(e.key!==" ")return!0}keyupHandler(e){if(e.key!==" ")return!0;this.click()}formResetCallback(){var e;this.checked=(e=this.initialChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1,this.setValidity()}reportValidity(){return this.elementInternals.reportValidity()}setAriaChecked(e=this.checked){this.elementInternals.ariaChecked=e?"true":"false"}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}setCustomValidity(e){this.elementInternals.setValidity({customError:!0},e),this.setValidity()}setValidity(e,t,r){if(this.$fastController.isConnected){if(this.disabled||!this.required){this.elementInternals.setValidity({});return}this.elementInternals.setValidity({valueMissing:!!this.required&&!this.checked,...e},t??this.validationMessage,r)}}toggleChecked(e=!this.checked){this.checked=e}}Te.formAssociated=!0;s([a({mode:"boolean"})],Te.prototype,"autofocus",void 0);s([B],Te.prototype,"disabled",void 0);s([a({attribute:"disabled",mode:"boolean"})],Te.prototype,"disabledAttribute",void 0);s([a({attribute:"form"})],Te.prototype,"formAttribute",void 0);s([a({attribute:"checked",mode:"boolean"})],Te.prototype,"initialChecked",void 0);s([a({attribute:"value",mode:"fromView"})],Te.prototype,"initialValue",void 0);s([a],Te.prototype,"name",void 0);s([a({mode:"boolean"})],Te.prototype,"required",void 0);class Mr extends Te{indeterminateChanged(e,t){this.setAriaChecked(),y(this.elementInternals,"indeterminate",t)}shapeChanged(e,t){m(this.elementInternals,e,t,Mu)}sizeChanged(e,t){m(this.elementInternals,e,t,Hu)}constructor(){super(),this.elementInternals.role="checkbox"}setAriaChecked(e=this.checked){if(this.indeterminate){this.elementInternals.ariaChecked="mixed";return}super.setAriaChecked(e)}toggleChecked(e=!this.checked){this.indeterminate=!1,super.toggleChecked(e)}}s([B],Mr.prototype,"indeterminate",void 0);s([a],Mr.prototype,"shape",void 0);s([a],Mr.prototype,"size",void 0);const Lu=b`
  ${P("inline-flex")}

  :host {
    --size: 16px;
    background-color: ${j};
    border-radius: ${We};
    border: ${X} solid ${ft};
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    width: var(--size);
  }

  :host,
  .indeterminate-indicator,
  .checked-indicator {
    aspect-ratio: 1;
  }

  :host(:hover) {
    border-color: ${Rt};
  }

  :host(:active) {
    border-color: ${jt};
  }

  :host(${w}:hover) {
    background-color: ${vo};
    border-color: ${mc};
  }

  :host(${w}:active) {
    background-color: ${$o};
    border-color: ${zs};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:not([slot='input']))::after {
    content: '';
    position: absolute;
    inset: -8px;
    box-sizing: border-box;
    outline: none;
    border: ${Pe} solid ${$e};
    border-radius: ${H};
  }

  :host(:not([slot='input']):focus-visible)::after {
    border-color: ${qe};
  }

  .indeterminate-indicator,
  .checked-indicator {
    color: ${Gt};
    inset: 0;
    margin: auto;
    position: absolute;
  }

  ::slotted([slot='checked-indicator']),
  .checked-indicator {
    fill: currentColor;
    display: inline-flex;
    flex: 1 0 auto;
    width: 12px;
  }

  :host(:not(${w})) *:is(::slotted([slot='checked-indicator']), .checked-indicator) {
    display: none;
  }

  :host(${w}),
  :host(${kt}) {
    border-color: ${Bo};
  }

  :host(${w}),
  :host(${kt}) .indeterminate-indicator {
    background-color: ${Dt};
  }

  :host(${kt}) .indeterminate-indicator {
    border-radius: ${We};
    position: absolute;
    width: calc(var(--size) / 2);
    inset: 0;
  }

  :host(${T}) {
    --size: 20px;
  }

  :host(${T}) ::slotted([slot='checked-indicator']),
  :host(${T}) .checked-indicator {
    width: 16px;
  }

  :host(${go}),
  :host(${go}) .indeterminate-indicator {
    border-radius: ${ke};
  }

  :host([disabled]),
  :host([disabled]${w}) {
    background-color: ${Kt};
    border-color: ${Fe};
  }

  :host([disabled]) {
    cursor: unset;
  }

  :host([disabled]${kt}) .indeterminate-indicator {
    background-color: ${Fe};
  }

  :host([disabled]${w}) .checked-indicator {
    color: ${Fe};
  }
`.withBehaviors(te(b`
    :host {
      border-color: FieldText;
    }

    :host(:not([slot='input']:focus-visible))::after {
      border-color: Canvas;
    }

    :host(:not([disabled]):hover),
    :host(${w}:not([disabled]):hover),
    :host(:not([slot='input']):focus-visible)::after {
      border-color: Highlight;
    }

    .indeterminate-indicator,
    .checked-indicator {
      color: HighlightText;
    }

    :host(${w}),
    :host(${kt}) .indeterminate-indicator {
      background-color: FieldText;
    }

    :host(${w}:not([disabled]):hover),
    :host(${kt}:not([disabled]):hover) .indeterminate-indicator {
      background-color: Highlight;
    }

    :host([disabled]) {
      border-color: GrayText;
    }

    :host([disabled]${kt}) .indeterminate-indicator {
      background-color: GrayText;
    }

    :host([disabled]),
    :host([disabled]${w}) .checked-indicator {
      color: GrayText;
    }
  `)),Vu=f.partial(`
    <svg
        fill="currentColor"
        aria-hidden="true"
        class="checked-indicator"
        width="1em"
        height="1em"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg">
            <path d="M9.76 3.2c.3.29.32.76.04 1.06l-4.25 4.5a.75.75 0 0 1-1.08.02L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.7 1.7L8.7 3.24a.75.75 0 0 1 1.06-.04Z" fill="currentColor"></path>
    </svg>
`),Ou=f.partial(`
    <span class="indeterminate-indicator"></span>
`);function _u(o={}){return f`
    <template
      tabindex="${e=>e.disabled?void 0:0}"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @input="${(e,t)=>e.inputHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
      @keyup="${(e,t)=>e.keyupHandler(t.event)}"
    >
      <slot name="checked-indicator">${we(o.checkedIndicator)}</slot>
      <slot name="indeterminate-indicator">${we(o.indeterminateIndicator)}</slot>
    </template>
  `}const Du=_u({checkedIndicator:Vu,indeterminateIndicator:Ou}),Ru=Mr.compose({name:`${x.prefix}-checkbox`,template:Du,styles:Lu});class ju extends at{}function qu(o={}){return f`
    <template ?disabled="${e=>e.disabled}" tabindex="${e=>{var t;return e.disabled?null:(t=e.tabIndex)!==null&&t!==void 0?t:0}}">
      ${nt(o)}
      <span class="content" part="content">
        <slot ${se("defaultSlottedContent")}></slot>
        <slot name="description"></slot>
      </span>
      ${mt(o)}
    </template>
  `}const Wu=qu(),Xu=b`
  ${Er}

  :host,
  :host(:is([size])) {
    gap: 12px;
    height: auto;
    padding-top: 14px;
    padding-inline: 12px;
    padding-bottom: 16px;
    font-size: ${O};
    line-height: ${W};
  }

  .content {
    display: flex;
    flex-direction: column;
    text-align: start;
  }

  ::slotted([slot='description']) {
    color: ${je};
    line-height: 100%;
    font-size: ${G};
    font-weight: ${R};
  }

  ::slotted(svg),
  :host(${T}) ::slotted(svg) {
    font-size: 40px;
    height: 40px;
    width: 40px;
  }

  :host(:hover) ::slotted([slot='description']) {
    color: ${xr};
  }

  :host(:active) ::slotted([slot='description']) {
    color: ${Sr};
  }

  :host(:is(${ce}, ${ce}:hover, ${ce}:active)) ::slotted([slot='description']) {
    color: ${tt};
  }

  :host(:is(${A}, ${A}:hover, ${A}:active)) ::slotted([slot='description']),
  :host(${J}) ::slotted([slot='description']) {
    color: ${je};
  }

  :host(${J}:hover) ::slotted([slot='description']) {
    color: ${er};
  }

  :host(${J}:active) ::slotted([slot='description']) {
    color: ${tr};
  }

  :host(:is(:disabled, :disabled[appearance], [disabled-focusable], [disabled-focusable][appearance]))
    ::slotted([slot='description']) {
    color: ${M};
  }

  :host(${E}) {
    padding: 8px;
    padding-bottom: 10px;
  }

  :host(${pt}) {
    min-width: 52px;
    max-width: 52px;
    padding: ${xe};
  }

  :host(${pt}${E}) {
    min-width: 48px;
    max-width: 48px;
    padding: ${Xe};
  }

  :host(${pt}${T}) {
    min-width: 56px;
    max-width: 56px;
    padding: ${ot};
  }

  :host(${T}) {
    padding-top: 18px;
    padding-inline: 16px;
    padding-bottom: 20px;
    font-size: ${ue};
    line-height: ${Be};
  }
  :host(${T}) ::slotted([slot='description']) {
    font-size: ${O};
  }
`,Uu=ju.compose({name:`${x.prefix}-compound-button`,template:Wu,styles:Xu}),Gu={filled:"filled",ghost:"ghost"},Ku={brand:"brand",danger:"danger",important:"important",informative:"informative",severe:"severe",subtle:"subtle",success:"success",warning:"warning"},Yu={circular:"circular",rounded:"rounded"},Qu={tiny:"tiny",extraSmall:"extra-small",small:"small",medium:"medium",large:"large",extraLarge:"extra-large"};class Ke extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.count=0,this.overflowCount=99,this.showZero=!1,this.dot=!1}appearanceChanged(e,t){m(this.elementInternals,e,t,Gu)}colorChanged(e,t){m(this.elementInternals,e,t,Ku)}shapeChanged(e,t){m(this.elementInternals,e,t,Yu)}sizeChanged(e,t){m(this.elementInternals,e,t,Qu)}countChanged(){this.setCount()}overflowCountChanged(){this.setCount()}dotChanged(e,t){y(this.elementInternals,"dot",!!t)}setCount(){var e;const t=(e=this.count)!==null&&e!==void 0?e:0;if((t!==0||this.showZero)&&!this.dot)return t>this.overflowCount?`${this.overflowCount}+`:`${t}`}}s([a],Ke.prototype,"appearance",void 0);s([a],Ke.prototype,"color",void 0);s([a],Ke.prototype,"shape",void 0);s([a],Ke.prototype,"size",void 0);s([a({converter:le})],Ke.prototype,"count",void 0);s([a({attribute:"overflow-count",converter:le})],Ke.prototype,"overflowCount",void 0);s([a({attribute:"show-zero",mode:"boolean"})],Ke.prototype,"showZero",void 0);s([a({mode:"boolean"})],Ke.prototype,"dot",void 0);st(Ke,it);function Zu(o={}){return la({defaultContent:f`${e=>e.setCount()}`})}const Ju=Zu(),ep=b`
  :host(${et}) {
    border-radius: ${H};
  }

  :host(${et}${mo}),
  :host(${et}${bo}),
  :host(${et}${E}) {
    border-radius: ${We};
  }

  ${ca}
  ${ha}
  ${ua}
  ${da}

  :host(${zn}),
  :host(${zn}[appearance][size]) {
    min-width: auto;
    width: 6px;
    height: 6px;
    padding: 0;
  }
`,tp=Ke.compose({name:`${x.prefix}-counter-badge`,template:Ju,styles:ep}),Oe={modal:"modal",nonModal:"non-modal",alert:"alert"};class Io extends z{constructor(){super(...arguments),this.type=Oe.modal,this.emitBeforeToggle=()=>{this.$emit("beforetoggle",{oldState:this.dialog.open?"open":"closed",newState:this.dialog.open?"closed":"open"})},this.emitToggle=()=>{this.$emit("toggle",{oldState:this.dialog.open?"closed":"open",newState:this.dialog.open?"open":"closed"})}}show(){De.enqueue(()=>{this.emitBeforeToggle(),this.type===Oe.alert||this.type===Oe.modal?this.dialog.showModal():this.type===Oe.nonModal&&this.dialog.show(),this.emitToggle()})}hide(){this.emitBeforeToggle(),this.dialog.close(),this.emitToggle()}clickHandler(e){return e.preventDefault(),this.dialog.open&&this.type!==Oe.alert&&e.target===this.dialog&&this.hide(),!0}}s([B],Io.prototype,"dialog",void 0);s([a({attribute:"aria-describedby"})],Io.prototype,"ariaDescribedby",void 0);s([a({attribute:"aria-labelledby"})],Io.prototype,"ariaLabelledby",void 0);s([a],Io.prototype,"type",void 0);const op=f`
  <dialog
    role="${o=>o.type===Oe.alert?"alertdialog":"dialog"}"
    type="${o=>o.type}"
    class="dialog"
    part="dialog"
    aria-modal="${o=>o.type===Oe.modal||o.type===Oe.alert?"true":void 0}"
    aria-describedby="${o=>o.ariaDescribedby}"
    aria-labelledby="${o=>o.ariaLabelledby}"
    aria-label="${o=>o.ariaLabel}"
    @click="${(o,e)=>o.clickHandler(e.event)}"
    @cancel="${(o,e)=>o.type===Oe.alert?e.event.preventDefault():o.hide()}"
    ${Se("dialog")}
  >
    <slot></slot>
  </dialog>
`,rp=b`
  @layer base {
    :host {
      --dialog-backdrop: ${ni};
      --dialog-starting-scale: 0.85;
    }

    ::backdrop {
      background: var(--dialog-backdrop, rgba(0, 0, 0, 0.4));
    }

    dialog {
      background: ${j};
      border-radius: ${qs};
      border: none;
      box-shadow: ${ta};
      color: ${L};
      max-height: calc(-48px + 100vh);
      padding: 0;
      width: 100%;
      max-width: 600px;
    }

    :host([type='non-modal']) dialog {
      inset: 0;
      position: fixed;
      z-index: 2;
      overflow: auto;
    }
  }

  @layer animations {
    /* Disable animations for reduced motion */
    @media (prefers-reduced-motion: no-preference) {
      dialog,
      ::backdrop {
        transition: display allow-discrete, opacity, overlay allow-discrete, scale;
        transition-duration: ${ci};
        transition-timing-function: ${Wt};
        /* Set opacity to 0 when closed */
        opacity: 0;
      }
      ::backdrop {
        transition-timing-function: ${Hi};
      }

      /* Set opacity to 1 when open */
      [open],
      [open]::backdrop {
        opacity: 1;
      }

      /* Exit styles for dialog */
      dialog:not([open]) {
        /* Make small when leaving */
        scale: var(--dialog-starting-scale);
        /* Faster leaving the stage then entering */
        transition-timing-function: ${qt};
      }
    }

    @starting-style {
      [open],
      [open]::backdrop {
        opacity: 0;
      }

      dialog {
        scale: var(--dialog-starting-scale);
      }
    }
  }
`.withBehaviors(te(b`
    @layer base {
      dialog {
        border: ${X} solid ${$e};
      }
    }
  `)),ip=Io.compose({name:`${x.prefix}-dialog`,template:op,styles:rp});class ga extends z{constructor(){super(...arguments),this.noTitleAction=!1}}s([a({mode:"boolean",attribute:"no-title-action"})],ga.prototype,"noTitleAction",void 0);const np=f.partial(`
  <svg
    fill="currentColor"
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m4.09 4.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L10 9.29l5.15-5.14a.5.5 0 0 1 .63-.06l.07.06c.18.17.2.44.06.63l-.06.07L10.71 10l5.14 5.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L10 10.71l-5.15 5.14a.5.5 0 0 1-.63.06l-.07-.06a.5.5 0 0 1-.06-.63l.06-.07L9.29 10 4.15 4.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
      fill="currentColor"
    ></path>
  </svg>`),sp=f`
  <div class="title" part="title">
    <slot name="title"></slot>
    <slot name="title-action">
      <fluent-button
        ?hidden=${o=>{var e;return o.noTitleAction||((e=o.parentNode)===null||e===void 0?void 0:e.type)===Oe.alert}}
        tabindex="0"
        part="title-action"
        class="title-action"
        appearance="transparent"
        icon-only
        @click=${o=>{var e;return(e=o.parentNode)===null||e===void 0?void 0:e.hide()}}
        ${Se("defaultTitleAction")}
      >
        ${np}
      </fluent-button>
    </slot>
  </div>
  <div class="content" part="content"><slot></slot></div>
  <div class="actions" part="actions"><slot name="action"></slot></div>
`,ap=b`
  ${P("grid")}

  :host {
    background: ${j};
    box-sizing: border-box;
    gap: ${ie};
    padding: ${io} ${_h};
    container: dialog-body / inline-size;
  }

  .title {
    box-sizing: border-box;
    align-items: flex-start;
    background: ${j};
    color: ${L};
    column-gap: 8px;
    display: flex;
    font-family: ${S};
    font-size: ${Yt};
    font-weight: ${U};
    inset-block-start: 0;
    justify-content: space-between;
    line-height: ${Tr};
    margin-block-end: calc(${ie} * -1);
    margin-block-start: calc(${io} * -1);
    padding-block-end: ${ie};
    padding-block-start: ${io};
    position: sticky;
    z-index: 1;
  }

  .content {
    box-sizing: border-box;
    color: ${L};
    font-family: ${S};
    font-size: ${O};
    font-weight: ${R};
    line-height: ${W};
    min-height: 32px;
  }

  .actions {
    box-sizing: border-box;
    background: ${j};
    display: flex;
    flex-direction: column;
    gap: ${ie};
    inset-block-end: 0;
    margin-block-end: calc(${io} * -1);
    padding-block-end: ${io};
    padding-block-start: ${Fr};
    position: sticky;
    z-index: 2;
  }

  /* Hide slots if nothing is slotted to remove grid gap */
  :not(:has(:is([slot='title'], [slot='title-action']))) .title:not(:has(.title-action)),
  :not(:has([slot='action'])) .actions {
    display: none;
  }

  @container (min-width: 480px) {
    .actions {
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      margin-block-start: calc(${ie} * -1);
      padding-block-start: ${ie};
    }
  }
`,lp=ga.compose({name:`${x.prefix}-dialog-body`,template:sp,styles:ap}),no={separator:"separator",presentation:"presentation"},Dn=ge,dp={center:"center",start:"start",end:"end"},cp={strong:"strong",brand:"brand",subtle:"subtle"};class _i extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals()}connectedCallback(){var e,t;super.connectedCallback(),this.elementInternals.role=(e=this.role)!==null&&e!==void 0?e:no.separator,this.role!==no.presentation&&(this.elementInternals.ariaOrientation=(t=this.orientation)!==null&&t!==void 0?t:Dn.horizontal)}roleChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.role=`${t??no.separator}`),t===no.presentation&&(this.elementInternals.ariaOrientation=null)}orientationChanged(e,t){this.elementInternals.ariaOrientation=this.role!==no.presentation?t??null:null,m(this.elementInternals,e,t,Dn)}}s([a],_i.prototype,"role",void 0);s([a],_i.prototype,"orientation",void 0);class Hr extends _i{alignContentChanged(e,t){m(this.elementInternals,e,t,dp,"align-")}appearanceChanged(e,t){m(this.elementInternals,e,t,cp)}insetChanged(e,t){y(this.elementInternals,"inset",t)}}s([a({attribute:"align-content"})],Hr.prototype,"alignContent",void 0);s([a],Hr.prototype,"appearance",void 0);s([a({mode:"boolean"})],Hr.prototype,"inset",void 0);function hp(){return f`<slot></slot>`}const up=hp(),pp=b`
  ${P("flex")}

  :host {
    contain: content;
  }

  :host::after,
  :host::before {
    align-self: center;
    background: ${ko};
    box-sizing: border-box;
    content: '';
    display: flex;
    flex-grow: 1;
    height: ${X};
  }

  :host(${Xr}) {
    padding: 0 12px;
  }

  :host ::slotted(*) {
    color: ${je};
    font-family: ${S};
    font-size: ${G};
    font-weight: ${R};
    margin: 0;
    padding: 0 12px;
  }

  :host(${In})::before,
  :host(${Ze})::after {
    flex-basis: 12px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  :host(${I}) {
    height: 100%;
    min-height: 84px;
  }
  :host(${I}):empty {
    min-height: 20px;
  }

  :host(${I}) {
    flex-direction: column;
    align-items: center;
  }

  :host(${I}${Xr})::before {
    margin-top: 12px;
  }
  :host(${I}${Xr})::after {
    margin-bottom: 12px;
  }

  :host(${I}):empty::before,
  :host(${I}):empty::after {
    height: 10px;
    min-height: 10px;
    flex-grow: 0;
  }

  :host(${I})::before,
  :host(${I})::after {
    width: ${X};
    min-height: 20px;
    height: 100%;
  }

  :host(${I}) ::slotted(*) {
    display: flex;
    flex-direction: column;
    padding: 12px 0;
    line-height: 20px;
  }

  :host(${I}${In})::before {
    min-height: 8px;
  }
  :host(${I}${Ze})::after {
    min-height: 8px;
  }

  :host(${ro})::before,
  :host(${ro})::after {
    background: ${rt};
  }
  :host(${ro}) ::slotted(*) {
    color: ${L};
  }
  :host(${Ve})::before,
  :host(${Ve})::after {
    background: ${Ts};
  }
  :host(${Ve}) ::slotted(*) {
    color: ${Bi};
  }
  :host(${A})::before,
  :host(${A})::after {
    background: ${bc};
  }
  :host(${A}) ::slotted(*) {
    color: ${ve};
  }
`.withBehaviors(te(b`
    :host(${ro})::before,
    :host(${ro})::after,
    :host(${Ve})::before,
    :host(${Ve})::after,
    :host(${A})::before,
    :host(${A})::after,
    :host::after,
    :host::before {
      background: WindowText;
      color: WindowText;
    }
  `)),gp=Hr.compose({name:`${x.prefix}-divider`,template:up,styles:pp}),bp={start:"start",end:"end"},fp={small:"small",medium:"medium",large:"large",full:"full"},Gr={nonModal:"non-modal",modal:"modal",inline:"inline"};class Nt extends z{constructor(){super(...arguments),this.type=Gr.modal,this.position=bp.start,this.size=fp.medium,this.emitToggle=()=>{this.$emit("toggle",{oldState:this.dialog.open?"closed":"open",newState:this.dialog.open?"open":"closed"})},this.emitBeforeToggle=()=>{this.$emit("beforetoggle",{oldState:this.dialog.open?"open":"closed",newState:this.dialog.open?"closed":"open"})}}show(){De.enqueue(()=>{this.emitBeforeToggle(),this.type===Gr.inline||this.type===Gr.nonModal?this.dialog.show():this.dialog.showModal(),this.emitToggle()})}hide(){this.emitBeforeToggle(),this.dialog.close(),this.emitToggle()}clickHandler(e){return e.preventDefault(),this.dialog.open&&e.target===this.dialog&&this.hide(),!0}}s([a],Nt.prototype,"type",void 0);s([a({attribute:"aria-labelledby"})],Nt.prototype,"ariaLabelledby",void 0);s([a({attribute:"aria-describedby"})],Nt.prototype,"ariaDescribedby",void 0);s([a],Nt.prototype,"position",void 0);s([a({attribute:"size"})],Nt.prototype,"size",void 0);s([B],Nt.prototype,"dialog",void 0);const mp=b`
  ${P("block")}

  :host {
    --dialog-backdrop: ${ni};
  }

  :host([type='non-modal']) dialog[open]::backdrop {
    display: none;
  }

  :host([type='non-modal']) dialog {
    position: fixed;
    top: 0;
    bottom: 0;
  }

  :host([type='inline']) {
    height: 100%;
    width: fit-content;
  }

  :host([type='inline']) dialog[open] {
    box-shadow: none;
    position: relative;
  }

  :host([size='small']) dialog {
    width: 320px;
    max-width: 320px;
  }

  :host([size='large']) dialog {
    width: 940px;
    max-width: 940px;
  }

  :host([size='full']) dialog {
    width: 100%;
    max-width: 100%;
  }

  :host([position='end']) dialog {
    margin-inline-start: auto;
    margin-inline-end: 0;
  }

  dialog {
    box-sizing: border-box;
    z-index: var(--drawer-elevation, 1000);
    font-size: ${O};
    line-height: ${W};
    font-family: ${S};
    font-weight: ${R};
    color: ${L};
    max-width: var(--drawer-width, 592px);
    max-height: 100vh;
    height: 100%;
    margin-inline-start: 0;
    margin-inline-end: auto;
    border-inline-end-color: ${$e};
    border-inline-start-color: var(--drawer-separator, ${$e});
    outline: none;
    top: 0;
    bottom: 0;
    width: var(--drawer-width, 592px);
    border-radius: 0;
    padding: 0;
    max-width: var(--drawer-width, 592px);
    box-shadow: ${ta};
    border: ${X} solid ${$e};
    background: ${j};
  }

  dialog::backdrop {
    background: var(--dialog-backdrop);
  }

  @layer animations {
    /* Disable animations for reduced motion */
    @media (prefers-reduced-motion: no-preference) {
      dialog {
        transition: display allow-discrete, opacity, overlay allow-discrete, transform;
        transition-duration: ${ci};
        transition-timing-function: ${Wt};
      }

      /* Exit styles for dialog */
      :host dialog:not([open]) {
        transform: translateX(-100%);
        transition-timing-function: ${qt};
      }
      :host([position='end']) dialog:not([open]) {
        transform: translateX(100%);
        transition-timing-function: ${qt};
      }

      dialog[open] {
        transform: translateX(0);
      }

      dialog::backdrop {
        transition: display allow-discrete, opacity, overlay allow-discrete, scale;
        transition-duration: ${ci};
        transition-timing-function: ${Wt};
        background: var(--dialog-backdrop, ${ni});
        opacity: 0;
      }

      dialog[open]::backdrop {
        opacity: 1;
      }

      dialog::backdrop {
        transition-timing-function: ${Hi};
      }
    }

    @starting-style {
      dialog[open] {
        transform: translateX(-100%);
      }
      :host([position='end']) dialog[open] {
        transform: translateX(100%);
      }
      dialog[open]::backdrop {
        opacity: 0;
      }
    }
  }
`;function vp(){return f`
    <dialog
      class="dialog"
      part="dialog"
      role="${o=>o.type==="modal"?"dialog":o.role}"
      aria-modal="${o=>o.type==="modal"?"true":void 0}"
      aria-describedby="${o=>o.ariaDescribedby}"
      aria-labelledby="${o=>o.ariaLabelledby}"
      aria-label="${o=>o.ariaLabel}"
      size="${o=>o.size}"
      position="${o=>o.position}"
      type="${o=>o.type}"
      @click="${(o,e)=>o.clickHandler(e.event)}"
      @cancel="${(o,e)=>o.hide()}"
      ${Se("dialog")}
    >
      <slot></slot>
    </dialog>
  `}const $p=vp(),kp=Nt.compose({name:`${x.prefix}-drawer`,template:$p,styles:mp});class yp extends z{}const xp=b`
  ${P("grid")}
  :host {
    box-sizing: border-box;
    grid-template-rows: min-content auto min-content;
    position: relative;
    height: 100%;
    padding: ${Oh};
    max-height: 100svh;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${zu}
  }

  .footer {
    display: flex;
    justify-content: flex-start;
    gap: ${me};
  }
`;function Sp(){return f`
    <div class="header" part="header">
      <slot name="title"></slot>
      <slot name="close"></slot>
    </div>
    <div class="content" part="content">
      <slot></slot>
    </div>
    <div class="footer" part="footer">
      <slot name="footer"></slot>
    </div>
  `}const wp=Sp(),Bp=yp.compose({name:`${x.prefix}-drawer-body`,template:wp,styles:xp}),Cp={above:"above",after:"after",before:"before"},Ce={badInput:"bad-input",customError:"custom-error",patternMismatch:"pattern-mismatch",rangeOverflow:"range-overflow",rangeUnderflow:"range-underflow",stepMismatch:"step-mismatch",tooLong:"too-long",tooShort:"too-short",typeMismatch:"type-mismatch",valueMissing:"value-missing",valid:"valid"};class No extends z{labelSlotChanged(e,t){t&&this.input&&(this.setLabelProperties(),this.setStates())}messageSlotChanged(e,t){if(y(this.elementInternals,"has-message",!!t.length),!t.length){this.removeEventListener("invalid",this.invalidHandler,{capture:!0});return}this.addEventListener("invalid",this.invalidHandler,{capture:!0})}slottedInputsChanged(e,t){t!=null&&t.length&&(this.input=t==null?void 0:t[0],this.setStates())}inputChanged(e,t){t&&(this.setStates(),this.setLabelProperties())}changeHandler(e){return this.setStates(),this.setValidationStates(),!0}clickHandler(e){return this===e.target&&this.input.click(),!0}constructor(){super(),this.labelSlot=[],this.elementInternals=this.attachInternals(),this.elementInternals.role="presentation"}focusinHandler(e){return this.matches(":focus-within:has(> :focus-visible)")&&y(this.elementInternals,"focus-visible",!0),!0}focusoutHandler(e){return y(this.elementInternals,"focus-visible",!1),!0}invalidHandler(e){this.messageSlot.length&&e.preventDefault(),this.setValidationStates()}setLabelProperties(){var e;this.$fastController.isConnected&&(this.input.id=this.input.id||Ot("input"),(e=this.labelSlot)===null||e===void 0||e.forEach(t=>{t instanceof HTMLLabelElement&&(t.htmlFor=t.htmlFor||this.input.id,t.id=t.id||`${this.input.id}--label`,t.setAttribute("aria-hidden","true"),this.input.setAttribute("aria-labelledby",t.id))}))}setStates(){this.$fastController.isConnected&&(y(this.elementInternals,"disabled",!!this.input.disabled),y(this.elementInternals,"readonly",!!this.input.readOnly),y(this.elementInternals,"required",!!this.input.required),y(this.elementInternals,"checked",!!this.input.checked))}setValidationStates(){if(this.input.validity)for(const[e,t]of Object.entries(Ce))y(this.elementInternals,t,this.input.validity[e])}}s([B],No.prototype,"labelSlot",void 0);s([B],No.prototype,"messageSlot",void 0);s([B],No.prototype,"slottedInputs",void 0);s([B],No.prototype,"input",void 0);class ba extends No{constructor(){super(...arguments),this.labelPosition=Cp.above}}s([a({attribute:"label-position"})],ba.prototype,"labelPosition",void 0);const Ip=b`
  ${P("inline-grid")}

  :host {
    color: ${L};
    align-items: center;
    gap: 0 ${me};
    justify-items: start;
    position: relative;
  }

  :has([slot='message']) {
    color: ${L};
    row-gap: ${ie};
  }

  :not(::slotted([slot='label'])) {
    gap: 0;
  }

  :host([label-position='before']) {
    grid-template-areas: 'label input' 'label message';
  }

  :host([label-position='after']) {
    gap: 0;
    grid-template-areas: 'input label' 'message message';
    grid-template-columns: auto 1fr;
  }

  :host([label-position='after']) ::slotted([slot='input']) {
    margin-inline-end: ${me};
  }

  :host([label-position='above']) {
    grid-template-areas: 'label' 'input' 'message';
    row-gap: ${yo};
  }

  :host([label-position='below']) {
    grid-template-areas: 'input' 'label' 'message';
    justify-items: center;
  }

  :host([label-position='below']) ::slotted([slot='label']) {
    margin-block-start: ${Dh};
  }

  :host([label-position='below']:not(${Ql})) {
    grid-template-areas: 'input' 'label';
  }

  ::slotted([slot='label'])::after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
  }

  ::slotted([slot='input']) {
    grid-area: input;
    position: relative;
    z-index: 1;
  }

  ::slotted([slot='message']) {
    margin-block-start: ${yo};
    grid-area: message;
  }

  :host(${Ul}:focus-within) {
    border-radius: ${H};
    outline: ${Pe} solid ${qe};
  }

  ::slotted(label),
  ::slotted([slot='label']) {
    cursor: inherit;
    display: inline-flex;
    font-family: ${S};
    font-size: ${O};
    font-weight: ${R};
    grid-area: label;
    line-height: ${W};
    user-select: none;
  }

  :host([size='small']) ::slotted(label) {
    font-size: ${G};
    line-height: ${ae};
  }

  :host([size='large']) ::slotted(label) {
    font-size: ${ue};
    line-height: ${Be};
  }

  :host([size='large']) ::slotted(label),
  :host([weight='semibold']) ::slotted(label) {
    font-weight: ${U};
  }

  :host(${V}) {
    cursor: default;
  }

  ::slotted([flag]) {
    display: none;
  }

  :host(${Tl}) ::slotted([flag='${Ce.badInput}']),
  :host(${Ol}) ::slotted([flag='${Ce.customError}']),
  :host(${ud}) ::slotted([flag='${Ce.patternMismatch}']),
  :host(${$d}) ::slotted([flag='${Ce.rangeOverflow}']),
  :host(${kd}) ::slotted([flag='${Ce.rangeUnderflow}']),
  :host(${Vd}) ::slotted([flag='${Ce.stepMismatch}']),
  :host(${_d}) ::slotted([flag='${Ce.tooLong}']),
  :host(${Dd}) ::slotted([flag='${Ce.tooShort}']),
  :host(${Rd}) ::slotted([flag='${Ce.typeMismatch}']),
  :host(${Wd}) ::slotted([flag='${Ce.valueMissing}']),
  :host(${qd}) ::slotted([flag='${Ce.valid}']) {
    display: block;
  }
`,Np=f`
  <template
    @click="${(o,e)=>o.clickHandler(e.event)}"
    @change="${(o,e)=>o.changeHandler(e.event)}"
    @focusin="${(o,e)=>o.focusinHandler(e.event)}"
    @focusout="${(o,e)=>o.focusoutHandler(e.event)}"
    ${dl({property:"slottedInputs",attributes:!0,attributeFilter:["disabled","required","readonly"],subtree:!0,selector:'[slot="input"]',filter:Lt()})}
  >
    <slot name="label" part="label" ${se("labelSlot")}></slot>
    <slot name="input" part="input"></slot>
    <slot name="message" part="message" ${se({property:"messageSlot",filter:Lt("[flag]")})}></slot>
  </template>
`,Tp=ba.compose({name:`${x.prefix}-field`,template:Np,styles:Ip,shadowOptions:{delegatesFocus:!0}}),zp={none:"none",center:"center",contain:"contain",cover:"cover"},Fp={circular:"circular",rounded:"rounded",square:"square"};class Jt extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals()}blockChanged(e,t){y(this.elementInternals,"block",t)}borderedChanged(e,t){y(this.elementInternals,"bordered",t)}shadowChanged(e,t){y(this.elementInternals,"shadow",t)}fitChanged(e,t){m(this.elementInternals,e,t,zp,"fit-")}shapeChanged(e,t){m(this.elementInternals,e,t,Fp)}}s([a({mode:"boolean"})],Jt.prototype,"block",void 0);s([a({mode:"boolean"})],Jt.prototype,"bordered",void 0);s([a({mode:"boolean"})],Jt.prototype,"shadow",void 0);s([a],Jt.prototype,"fit",void 0);s([a],Jt.prototype,"shape",void 0);const Pp=f`<slot></slot>`,Ap=b`
  :host {
    contain: content;
  }

  :host ::slotted(img) {
    box-sizing: border-box;
    min-height: 8px;
    min-width: 8px;
    display: inline-block;
  }
  :host(${po}) ::slotted(img) {
    width: 100%;
    height: auto;
  }
  :host(${Al}) ::slotted(img) {
    border: ${X} solid ${ko};
  }
  :host(${Xl}) ::slotted(img) {
    object-fit: none;
    object-position: top left;
    height: 100%;
    width: 100%;
  }
  :host(${jl}) ::slotted(img) {
    object-fit: none;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  :host(${ql}) ::slotted(img) {
    object-fit: contain;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  :host(${Wl}) ::slotted(img) {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  :host(${Id}) ::slotted(img) {
    box-shadow: ${zr};
  }
  :host(${go}) ::slotted(img) {
    border-radius: ${ke};
  }
  :host(${et}) ::slotted(img) {
    border-radius: ${H};
  }
`,Ep=Jt.compose({name:`${x.prefix}-image`,template:Pp,styles:Ap}),Mp={small:"small",medium:"medium",large:"large"},Hp={regular:"regular",semibold:"semibold"};class To extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.disabled=!1,this.required=!1}sizeChanged(e,t){m(this.elementInternals,e,t,Mp)}weightChanged(e,t){m(this.elementInternals,e,t,Hp)}disabledChanged(e,t){y(this.elementInternals,"disabled",t)}}s([a],To.prototype,"size",void 0);s([a],To.prototype,"weight",void 0);s([a({mode:"boolean"})],To.prototype,"disabled",void 0);s([a({mode:"boolean"})],To.prototype,"required",void 0);const Lp=b`
  ${P("inline-flex")}

  :host {
    color: ${L};
    cursor: pointer;
    font-family: ${S};
    font-size: ${O};
    font-weight: ${R};
    line-height: ${W};
    user-select: none;
  }

  .asterisk {
    color: ${Es};
    margin-inline-start: ${Xe};
  }

  :host(${E}) {
    font-size: ${G};
    line-height: ${ae};
  }

  :host(${T}) {
    font-size: ${ue};
    line-height: ${Be};
  }

  :host(:is(${T}, ${ys})) {
    font-weight: ${U};
  }

  :host(${V}),
  :host(${V}) .asterisk {
    color: ${M};
  }
`;function Vp(){return f`
    <slot></slot>
    <span part="asterisk" class="asterisk" ?hidden="${o=>!o.required}">*</span>
  `}const Op=Vp(),_p=To.compose({name:`${x.prefix}-label`,template:Op,styles:Lp}),Dp=b`
  ${pa}

  ::slotted(a) {
    position: absolute;
    inset: 0;
  }
`.withBehaviors(te(b`
    :host {
      border-color: LinkText;
      color: LinkText;
    }
  `));function Rp(o={}){return f`
    <template
      tabindex="0"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
      ${nt(o)}
      <span class="content" part="content">
        <slot></slot>
      </span>
      ${mt(o)}
    </template>
  `}const jp=Rp(),qp=Qt.compose({name:`${x.prefix}-anchor-button`,template:jp,styles:Dp}),Wp={multiline:"multiline",singleline:"singleline"},Xp={rounded:"rounded",square:"square"},Up={success:"success",warning:"warning",error:"error",info:"info"};class Lr extends z{constructor(){super(),this.elementInternals=this.attachInternals(),this.dismissMessageBar=()=>{this.$emit("dismiss",{})},this.elementInternals.role="status"}shapeChanged(e,t){m(this.elementInternals,e,t,Xp)}layoutChanged(e,t){m(this.elementInternals,e,t,Wp)}intentChanged(e,t){m(this.elementInternals,e,t,Up)}}s([a],Lr.prototype,"shape",void 0);s([a],Lr.prototype,"layout",void 0);s([a],Lr.prototype,"intent",void 0);const Gp=b`
  :host {
    display: grid;
    box-sizing: border-box;
    font-family: ${S};
    font-size: ${G};
    line-height: ${ae};
    width: 100%;
    background: ${or};
    border: 1px solid ${rt};
    padding-inline: ${me};
    border-radius: ${H};
    min-height: 36px;
    align-items: center;
    grid-template: 'icon body actions dismiss' / auto 1fr auto auto;
    contain: layout style paint;
  }

  :host(${fo}) {
    border-radius: 0;
  }

  :host(${Bt}) {
    background-color: ${Hs};
    border-color: ${kc};
  }

  :host(${Ct}) {
    background-color: ${Vs};
    border-color: ${_s};
  }

  :host(${oi}) {
    background-color: ${Fs};
    border-color: ${As};
  }

  :host(${oo}) {
    grid-template-areas:
      'icon body dismiss'
      'actions actions actions';
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto 1fr;
    padding-block: ${Mt};
    padding-inline: ${me};
  }

  .content {
    grid-area: body;
    max-width: 520px;
    padding-block: ${Mt};
    padding-inline: 0;
  }

  :host(${oo}) .content {
    padding: 0;
  }

  ::slotted([slot='icon']) {
    display: flex;
    grid-area: icon;
    flex-direction: column;
    align-items: center;
    color: ${ve};
    margin-inline-end: ${ot};
  }

  :host(${oo}) ::slotted([slot='icon']) {
    align-items: start;
    height: 100%;
  }

  ::slotted([slot='dismiss']) {
    grid-area: dismiss;
  }

  .actions {
    grid-area: actions;
    display: flex;
    justify-self: end;
    margin-inline-end: ${ot};
    gap: ${ot};
  }

  :host(${oo}) .actions {
    margin-block-start: ${Mt};
    margin-inline-end: 0;
  }

  :host(${oo}) ::slotted([slot='dismiss']) {
    align-items: start;
    height: 100%;
    padding-block-start: ${ie};
  }

  ::slotted(*) {
    font-size: inherit;
  }
`;function Kp(){return f`
    <slot name="icon"></slot>
    <div class="content">
      <slot></slot>
    </div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
    <slot name="dismiss"></slot>
  `}const Yp=Kp(),Qp=Lr.compose({name:`${x.prefix}-message-bar`,template:Yp,styles:Gp,shadowOptions:{mode:x.shadowRootMode}});class Zp extends at{}const Jp=Oi({end:f.partial(`
    <svg slot="end" fill="currentColor" aria-hidden="true" width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z" fill="currentColor"></path>
    </svg>
  `)}),eg=Zp.compose({name:`${x.prefix}-menu-button`,template:Jp,styles:Er}),Z={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"};Z.menuitem+"",Z.menuitemcheckbox+"",Z.menuitemradio+"";const tg=()=>o=>o.nodeType===1&&o.elementInternals.role==="menu";class Me extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.role=Z.menuitem,this.checked=!1,this.handleMenuItemKeyDown=e=>{var t,r,i,n;if(e.defaultPrevented)return!1;switch(e.key){case fr:case $i:return this.invoke(),!1;case pr:return this.disabled||((t=this.submenu)===null||t===void 0||t.togglePopover(!0),(r=this.submenu)===null||r===void 0||r.focus()),!1;case ur:return!((i=this.parentElement)===null||i===void 0)&&i.hasAttribute("popover")&&(this.parentElement.togglePopover(!1),(n=this.parentElement.parentElement)===null||n===void 0||n.focus()),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.handleMouseOver=e=>{var t;return this.disabled||(t=this.submenu)===null||t===void 0||t.togglePopover(!0),!1},this.handleMouseOut=e=>{var t;return this.contains(document.activeElement)||(t=this.submenu)===null||t===void 0||t.togglePopover(!1),!1},this.toggleHandler=e=>{e instanceof ToggleEvent&&e.newState==="open"&&(this.setAttribute("tabindex","-1"),this.elementInternals.ariaExpanded="true",this.setSubmenuPosition()),e instanceof ToggleEvent&&e.newState==="closed"&&(this.elementInternals.ariaExpanded="false",this.setAttribute("tabindex","0"))},this.invoke=()=>{if(!this.disabled)switch(this.role){case Z.menuitemcheckbox:this.checked=!this.checked;break;case Z.menuitem:if(this.submenu){this.submenu.togglePopover(!0),this.submenu.focus();break}this.$emit("change");break;case Z.menuitemradio:this.checked||(this.checked=!0);break}},this.setSubmenuPosition=()=>{if(!CSS.supports("anchor-name","--anchor")&&this.submenu){const e=this.getBoundingClientRect(),t=this.submenu.getBoundingClientRect(),r=getComputedStyle(this).direction==="ltr"?"right":"left";if(e.width+t.width>window.innerWidth*.75){this.submenu.style.translate="0 -100%";return}if(e[r]+t.width>window.innerWidth){this.submenu.style.translate="-100% 0";return}this.submenu.style.translate=`${e.width-8}px 0`}}}disabledChanged(e,t){this.elementInternals.ariaDisabled=t?`${t}`:null,y(this.elementInternals,"disabled",t)}roleChanged(e,t){this.elementInternals.role=t??Z.menuitem}checkedChanged(e,t){const r=this.role!==Z.menuitem;this.elementInternals.ariaChecked=r?`${!!t}`:null,y(this.elementInternals,"checked",r?t:!1),this.$fastController.isConnected&&this.$emit("change",t,{bubbles:!0})}slottedSubmenuChanged(e,t){var r;(r=this.submenu)===null||r===void 0||r.removeEventListener("toggle",this.toggleHandler),t.length?(this.submenu=t[0],this.submenu.toggleAttribute("popover",!0),this.submenu.addEventListener("toggle",this.toggleHandler),this.elementInternals.ariaHasPopup="menu",y(this.elementInternals,"submenu",!0)):(this.elementInternals.ariaHasPopup=null,y(this.elementInternals,"submenu",!1))}connectedCallback(){var e;super.connectedCallback(),this.elementInternals.role=(e=this.role)!==null&&e!==void 0?e:Z.menuitem,this.elementInternals.ariaChecked=this.role!==Z.menuitem?`${!!this.checked}`:null}}s([a({mode:"boolean"})],Me.prototype,"disabled",void 0);s([a],Me.prototype,"role",void 0);s([a({mode:"boolean"})],Me.prototype,"checked",void 0);s([a({mode:"boolean"})],Me.prototype,"hidden",void 0);s([B],Me.prototype,"slottedSubmenu",void 0);s([B],Me.prototype,"submenu",void 0);st(Me,it);const og=b`
  ${P("grid")}

  :host {
    --indent: 0;
    align-items: center;
    background: ${j};
    border-radius: ${H};
    color: ${je};
    contain: layout;
    cursor: pointer;
    /* Prevent shrinking of MenuItems when max-height is applied to MenuList */
    flex-shrink: 0;
    font: ${R} ${O} / ${W} ${S};
    grid-gap: 4px;
    grid-template-columns: 20px 20px auto 20px;
    height: 32px;
    overflow: visible;
    padding: 0 10px;
  }

  :host(:hover) {
    background: ${Ci};
    color: ${xr};
  }

  :host(:active) {
    background-color: ${Bs};
    color: ${Sr};
  }

  :host(:active) ::slotted([slot='start']) {
    color: ${rc};
  }

  :host(${V}) {
    background-color: ${Kt};
    color: ${M};
  }

  :host(${V}) ::slotted([slot='start']),
  :host(${V}) ::slotted([slot='end']) {
    color: ${M};
  }

  :host(:focus-visible) {
    border-radius: ${H};
    outline: 2px solid ${qe};
  }

  .content {
    white-space: nowrap;
    flex-grow: 1;
    grid-column: auto / span 2;
    padding: 0 2px;
  }

  :host(:not(${w})) .indicator,
  :host(:not(${w})) ::slotted([slot='indicator']),
  :host(:not(${Mo})) .submenu-glyph,
  :host(:not(${Mo})) ::slotted([slot='submenu-glyph']) {
    display: none;
  }

  ::slotted([slot='end']) {
    color: ${ve};
    font: ${R} ${G} / ${ae} ${S};
    white-space: nowrap;
  }

  :host([data-indent='1']) {
    --indent: 1;
  }

  :host([data-indent='2']) {
    --indent: 2;
    grid-template-columns: 20px 20px auto auto;
  }

  :host(${Mo}) {
    grid-template-columns: 20px auto auto 20px;
  }

  :host([data-indent='2']${Mo}) {
    grid-template-columns: 20px 20px auto auto 20px;
  }

  .indicator,
  ::slotted([slot='indicator']) {
    grid-column: 1 / span 1;
    width: 20px;
  }

  ::slotted([slot='start']) {
    display: inline-flex;
    grid-column: calc(var(--indent)) / span 1;
  }

  .content {
    grid-column: calc(var(--indent) + 1) / span 1;
  }

  ::slotted([slot='end']) {
    grid-column: calc(var(--indent) + 2) / span 1;
    justify-self: end;
  }

  .submenu-glyph,
  ::slotted([slot='submenu-glyph']) {
    grid-column: -2 / span 1;
    justify-self: end;
  }

  @layer popover {
    :host {
      anchor-name: --menu-trigger;
      position: relative;
    }

    ::slotted([popover]) {
      margin: 0;
      max-height: var(--menu-max-height, auto);
      position: absolute;
      position-anchor: --menu-trigger;
      position-area: inline-end span-block-end;
      position-try-fallbacks: flip-inline;
      z-index: 1;
    }

    ::slotted([popover]:not(:popover-open)) {
      display: none;
    }

    ::slotted([popover]:popover-open) {
      inset: unset;
    }

    /* Fallback for no anchor-positioning */
    @supports not (anchor-name: --menu-trigger) {
      ::slotted([popover]) {
        align-self: start;
      }
    }
  }
`.withBehaviors(te(b`
    :host(${V}),
    :host(${V}) ::slotted([slot='start']),
    :host(${V}) ::slotted([slot='end']) {
      color: GrayText;
    }
  `)),rg=f.partial('<svg class="indicator" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.05 3.49c.28.3.27.77-.04 1.06l-7.93 7.47A.85.85 0 014.9 12L2.22 9.28a.75.75 0 111.06-1.06l2.24 2.27 7.47-7.04a.75.75 0 011.06.04z" fill="currentColor"></path></svg>'),ig=f.partial('<svg class="submenu-glyph" fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.74 3.2a.75.75 0 00-.04 1.06L9.23 8 5.7 11.74a.75.75 0 101.1 1.02l4-4.25a.75.75 0 000-1.02l-4-4.25a.75.75 0 00-1.06-.04z" fill="currentColor"></path></svg>');function ng(o={}){return f`
    <template
      @keydown="${(e,t)=>e.handleMenuItemKeyDown(t.event)}"
      @click="${(e,t)=>e.handleMenuItemClick(t.event)}"
      @mouseover="${(e,t)=>e.handleMouseOver(t.event)}"
      @mouseout="${(e,t)=>e.handleMouseOut(t.event)}"
      @toggle="${(e,t)=>e.toggleHandler(t.event)}"
    >
      <slot name="indicator"> ${we(o.indicator)} </slot>
      ${nt(o)}
      <div part="content" class="content">
        <slot></slot>
      </div>
      ${mt(o)}
      <slot name="submenu-glyph"> ${we(o.submenuGlyph)} </slot>
      <slot name="submenu" ${se({property:"slottedSubmenu",filter:tg()})}></slot>
    </template>
  `}const sg=ng({indicator:rg,submenuGlyph:ig}),ag=Me.compose({name:`${x.prefix}-menu-item`,template:sg,styles:og});class Xt extends z{itemsChanged(e,t){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}constructor(){super(),this.elementInternals=this.attachInternals(),this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Bn(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&this.menuItems!==void 0){const t=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[t].setAttribute("tabindex","0"),this.focusIndex=t}},this.handleItemFocus=e=>{const t=e.target;this.menuItems!==void 0&&t!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0"))},this.changedMenuItemHandler=e=>{if(this.menuItems===void 0)return;const t=e.target,r=this.menuItems.indexOf(t);if(r!==-1&&t.role==="menuitemradio"&&t.checked===!0){for(let n=r-1;n>=0;--n){const l=this.menuItems[n],c=l.getAttribute("role");if(c===Z.menuitemradio&&(l.checked=!1),c==="separator")break}const i=this.menuItems.length-1;for(let n=r+1;n<=i;++n){const l=this.menuItems[n],c=l.getAttribute("role");if(c===Z.menuitemradio&&(l.checked=!1),c==="separator")break}}},this.isMenuItemElement=e=>e instanceof Me||Bn(e)&&e.getAttribute("role")in Xt.focusableElementRoles,this.isFocusableElement=e=>this.isMenuItemElement(e),this.elementInternals.role="menu"}connectedCallback(){super.connectedCallback(),De.enqueue(()=>{this.setItems()}),this.addEventListener("change",this.changedMenuItemHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changedMenuItemHandler)}focus(){this.setFocus(0,1)}handleMenuKeyDown(e){if(!(e.defaultPrevented||this.menuItems===void 0))switch(e.key){case hr:this.setFocus(this.focusIndex+1,1);return;case gr:this.setFocus(this.focusIndex-1,-1);return;case br:this.setFocus(this.menuItems.length-1,-1);return;case mr:this.setFocus(0,1);return;default:return!0}}removeItemListeners(e=this.items){e.forEach(t=>{t.removeEventListener("focus",this.handleItemFocus),v.getNotifier(t).unsubscribe(this,"hidden")})}static elementIndent(e){const t=e.getAttribute("role"),r=e.querySelector("[slot=start]");return t&&t!==Z.menuitem?r?2:1:r?1:0}setItems(){var e;const t=Array.from(this.children);this.removeItemListeners(t),t.forEach(c=>v.getNotifier(c).subscribe(this,"hidden"));const r=t.filter(c=>!c.hasAttribute("hidden"));this.menuItems=r;const i=this.menuItems.filter(this.isMenuItemElement);i.length&&(this.focusIndex=0),i.forEach((c,p)=>{c.setAttribute("tabindex",p===0?"0":"-1"),c.addEventListener("focus",this.handleItemFocus)});const n=(e=this.menuItems)===null||e===void 0?void 0:e.filter(this.isMenuItemElement),l=n==null?void 0:n.reduce((c,p)=>{const g=Xt.elementIndent(p);return Math.max(c,g)},0);n==null||n.forEach(c=>{c instanceof Me&&c.setAttribute("data-indent",`${l}`)})}handleChange(e,t){t==="hidden"&&this.setItems()}setFocus(e,t){if(this.menuItems!==void 0)for(;e>=0&&e<this.menuItems.length;){const r=this.menuItems[e];if(this.isFocusableElement(r)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,r.setAttribute("tabindex","0"),r.focus();break}e+=t}}}Xt.focusableElementRoles=Z;s([B],Xt.prototype,"items",void 0);function lg(){return f`
    <template
      slot="${o=>o.slot?o.slot:o.isNestedMenu()?"submenu":void 0}"
      @keydown="${(o,e)=>o.handleMenuKeyDown(e.event)}"
      @focusout="${(o,e)=>o.handleFocusOut(e.event)}"
    >
      <slot ${se("items")}></slot>
    </template>
  `}const dg=lg(),cg=b`
  ${P("flex")}

  :host {
    flex-direction: column;
    height: fit-content;
    max-width: 300px;
    min-width: 160px;
    width: auto;
    background-color: ${j};
    border: 1px solid ${$e};
    border-radius: ${H};
    box-shadow: ${ea};
    padding: 4px;
    row-gap: 2px;
  }
`,hg=Xt.compose({name:`${x.prefix}-menu-list`,template:dg,styles:cg});class lt extends z{constructor(){super(...arguments),this.slottedMenuList=[],this.slottedTriggers=[],this._open=!1,this.toggleMenu=()=>{var e;(e=this._menuList)===null||e===void 0||e.togglePopover(!this._open)},this.closeMenu=e=>{var t;(e==null?void 0:e.target)instanceof Me&&(e.target.getAttribute("role")===Z.menuitemcheckbox||e.target.getAttribute("role")===Z.menuitemradio)||((t=this._menuList)===null||t===void 0||t.togglePopover(!1),this.closeOnScroll&&document.removeEventListener("scroll",this.closeMenu))},this.openMenu=e=>{var t;(t=this._menuList)===null||t===void 0||t.togglePopover(!0),e&&this.openOnContext&&e.preventDefault(),this.closeOnScroll&&document.addEventListener("scroll",this.closeMenu)},this.toggleHandler=e=>{var t;if(e.type==="toggle"&&e.newState){const r=e.newState==="open";(t=this._trigger)===null||t===void 0||t.setAttribute("aria-expanded",`${r}`),this._open=r,this.focusMenuList()}},this.triggerKeydownHandler=e=>{if(e.defaultPrevented)return;switch(e.key){case $i:case fr:e.preventDefault(),this.toggleMenu();break;default:return!0}},this.documentClickHandler=e=>{e.composedPath().some(t=>t===this._trigger||t===this._menuList)||this.closeMenu()}}connectedCallback(){super.connectedCallback(),De.enqueue(()=>this.setComponent())}disconnectedCallback(){super.disconnectedCallback(),this.removeListeners()}setComponent(){this.$fastController.isConnected&&this.slottedMenuList.length&&this.slottedTriggers.length&&(this._trigger=this.slottedTriggers[0],this._menuList=this.slottedMenuList[0],this._trigger.setAttribute("aria-haspopup","true"),this._trigger.setAttribute("aria-expanded",`${this._open}`),this._menuList.setAttribute("popover",this.openOnContext?"manual":""),this.addListeners())}focusMenuList(){De.enqueue(()=>{this._menuList.focus()})}focusTrigger(){De.enqueue(()=>{this._trigger.focus()})}openOnHoverChanged(e,t){var r,i;t?(r=this._trigger)===null||r===void 0||r.addEventListener("mouseover",this.openMenu):(i=this._trigger)===null||i===void 0||i.removeEventListener("mouseover",this.openMenu)}persistOnItemClickChanged(e,t){var r,i;t?(i=this._menuList)===null||i===void 0||i.removeEventListener("change",this.closeMenu):(r=this._menuList)===null||r===void 0||r.addEventListener("change",this.closeMenu)}openOnContextChanged(e,t){var r,i;t?(r=this._trigger)===null||r===void 0||r.addEventListener("contextmenu",this.openMenu):(i=this._trigger)===null||i===void 0||i.removeEventListener("contextmenu",this.openMenu)}closeOnScrollChanged(e,t){t?document.addEventListener("scroll",this.closeMenu):document.removeEventListener("scroll",this.closeMenu)}addListeners(){var e,t,r,i,n,l;(e=this._menuList)===null||e===void 0||e.addEventListener("toggle",this.toggleHandler),(t=this._trigger)===null||t===void 0||t.addEventListener("keydown",this.triggerKeydownHandler),this.persistOnItemClick||(r=this._menuList)===null||r===void 0||r.addEventListener("change",this.closeMenu),this.openOnHover?(i=this._trigger)===null||i===void 0||i.addEventListener("mouseover",this.openMenu):this.openOnContext?((n=this._trigger)===null||n===void 0||n.addEventListener("contextmenu",this.openMenu),document.addEventListener("click",this.documentClickHandler)):(l=this._trigger)===null||l===void 0||l.addEventListener("click",this.toggleMenu)}removeListeners(){var e,t,r,i,n,l;(e=this._menuList)===null||e===void 0||e.removeEventListener("toggle",this.toggleHandler),(t=this._trigger)===null||t===void 0||t.removeEventListener("keydown",this.triggerKeydownHandler),this.persistOnItemClick||(r=this._menuList)===null||r===void 0||r.removeEventListener("change",this.closeMenu),this.openOnHover&&((i=this._trigger)===null||i===void 0||i.removeEventListener("mouseover",this.openMenu)),this.openOnContext?((n=this._trigger)===null||n===void 0||n.removeEventListener("contextmenu",this.openMenu),document.removeEventListener("click",this.documentClickHandler)):(l=this._trigger)===null||l===void 0||l.removeEventListener("click",this.toggleMenu)}menuKeydownHandler(e){if(e.defaultPrevented)return;switch(e.key){case kl:e.preventDefault(),this._open&&(this.closeMenu(),this.focusTrigger());break;case yl:if(this._open&&this.closeMenu(),e.shiftKey&&e.composedPath()[0]!==this._trigger&&e.composedPath()[0].assignedSlot!==this.primaryAction)this.focusTrigger();else if(e.shiftKey)return!0;default:return!0}}}s([a({attribute:"open-on-hover",mode:"boolean"})],lt.prototype,"openOnHover",void 0);s([a({attribute:"open-on-context",mode:"boolean"})],lt.prototype,"openOnContext",void 0);s([a({attribute:"close-on-scroll",mode:"boolean"})],lt.prototype,"closeOnScroll",void 0);s([a({attribute:"persist-on-item-click",mode:"boolean"})],lt.prototype,"persistOnItemClick",void 0);s([a({mode:"boolean"})],lt.prototype,"split",void 0);s([B],lt.prototype,"slottedMenuList",void 0);s([B],lt.prototype,"slottedTriggers",void 0);s([B],lt.prototype,"primaryAction",void 0);function ug(){return f`
    <template
      ?open-on-hover="${o=>o.openOnHover}"
      ?open-on-context="${o=>o.openOnContext}"
      ?close-on-scroll="${o=>o.closeOnScroll}"
      ?persist-on-item-click="${o=>o.persistOnItemClick}"
      @keydown="${(o,e)=>o.menuKeydownHandler(e.event)}"
    >
      <slot name="primary-action" ${Se("primaryAction")}></slot>
      <slot name="trigger" ${se({property:"slottedTriggers",filter:Lt()})}></slot>
      <slot ${se({property:"slottedMenuList",filter:Lt()})}></slot>
    </template>
  `}const pg=ug(),gg=b`
  ${P("inline-block")}

  ::slotted([slot='trigger']) {
    anchor-name: --menu-trigger;
  }

  ::slotted([popover]) {
    margin: 0;
    max-height: var(--menu-max-height, auto);
    position-anchor: --menu-trigger;
    position-area: block-end span-inline-end;
    position-try-fallbacks: flip-block;
    position: absolute;
    z-index: 1;
  }

  :host([split]) ::slotted([popover]) {
    position-area: block-end span-inline-start;
  }

  ::slotted([popover]:popover-open) {
    inset: unset;
  }

  ::slotted([popover]:not(:popover-open)) {
    display: none;
  }

  :host([split]) {
    display: inline-flex;
  }

  :host([split]) ::slotted([slot='primary-action']) {
    border-inline-end: ${X} solid ${rt};
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  /* Keeps focus visible visuals above trigger slot*/
  :host([split]) ::slotted([slot='primary-action']:focus-visible) {
    z-index: 1;
  }

  :host([split]) ::slotted([slot='primary-action'][appearance='primary']) {
    border-inline-end: ${X} solid white;
  }

  :host([split]) ::slotted([slot='trigger']) {
    border-inline-start: 0;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }
`,bg=lt.compose({name:`${x.prefix}-menu`,template:pg,styles:gg}),fg={medium:"medium",large:"large"},mg={rounded:"rounded",square:"square"},vg={success:"success",warning:"warning",error:"error"};class eo extends z{validationStateChanged(e,t){m(this.elementInternals,e,t,vg)}valueChanged(e,t){this.elementInternals.ariaValueNow=typeof t=="number"?`${t}`:null}minChanged(e,t){this.elementInternals.ariaValueMin=typeof t=="number"?`${t}`:null}maxChanged(e,t){this.elementInternals.ariaValueMax=typeof t=="number"?`${t}`:null}get percentComplete(){var e,t,r;const i=(e=this.min)!==null&&e!==void 0?e:0,n=(t=this.max)!==null&&t!==void 0?t:100,l=(r=this.value)!==null&&r!==void 0?r:0,c=n-i;return c===0?0:Math.fround((l-i)/c*100)}constructor(){super(),this.elementInternals=this.attachInternals(),this.validationState=null,this.elementInternals.role="progressbar"}}s([a({attribute:"validation-state"})],eo.prototype,"validationState",void 0);s([a({converter:le})],eo.prototype,"value",void 0);s([a({converter:le})],eo.prototype,"min",void 0);s([a({converter:le})],eo.prototype,"max",void 0);s([La],eo.prototype,"percentComplete",null);class Di extends eo{thicknessChanged(e,t){m(this.elementInternals,e,t,fg)}shapeChanged(e,t){m(this.elementInternals,e,t,mg)}}s([a],Di.prototype,"thickness",void 0);s([a],Di.prototype,"shape",void 0);const $g=b`
  ${P("block")}

  :host {
    width: 100%;
    height: 2px;
    overflow-x: hidden;
    background-color: ${qo};
    border-radius: ${H};
    contain: content;
  }

  :host(${T}) {
    height: 4px;
  }

  :host(${fo}) {
    border-radius: ${Pi};
  }

  .indicator {
    background-color: ${Dt};
    border-radius: inherit;
    height: 100%;
  }

  :host([value]) .indicator {
    transition: all 0.2s ease-in-out;
  }

  :host(:not([value])) .indicator {
    position: relative;
    width: 33%;
    background-image: linear-gradient(
      to right,
      ${qo} 0%,
      ${Ne} 50%,
      ${qo} 100%
    );
    animation-name: indeterminate;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  :host(${oi}) .indicator {
    background-color: ${Ps};
  }

  :host(${Ct}) .indicator {
    background-color: ${Os};
  }

  :host(${Bt}) .indicator {
    background-color: ${Ls};
  }

  @layer animations {
    /* Disable animations for reduced motion */
    @media (prefers-reduced-motion: no-preference) {
      :host([value]) {
        transition: none;
      }
      :host(:not([value])) .indicator {
        animation-duration: 0.01ms;
        animation-iteration-count: 1;
      }
    }
  }

  @keyframes indeterminate {
    0% {
      inset-inline-start: -33%;
    }
    100% {
      inset-inline-start: 100%;
    }
  }
`.withBehaviors(te(b`
    :host {
      background-color: CanvasText;
    }
    .indicator,
    :host(:is(${Bt}, ${Ct}, ${oi})) .indicator {
      background-color: Highlight;
    }
  `));function kg(){return f`
    <div
      class="indicator"
      part="indicator"
      style="${o=>typeof o.value=="number"?`width: ${o.percentComplete}%`:void 0}"
    ></div>
  `}const yg=kg(),xg=Di.compose({name:`${x.prefix}-progress-bar`,template:yg,styles:$g});class fa extends Te{connectedCallback(){super.connectedCallback(),this.tabIndex=this.disabled?-1:0}constructor(){super(),this.elementInternals.role="radio"}disabledChanged(e,t){super.disabledChanged(e,t),t&&(this.checked=!1,this.tabIndex=-1),this.$emit("disabled",t,{bubbles:!0})}requiredChanged(){}setFormValue(){}setValidity(){this.elementInternals.setValidity({})}toggleChecked(e=!0){super.toggleChecked(e)}}function Rn(o){const e=o.getRootNode();return e instanceof ShadowRoot?e.activeElement:document.activeElement}const jn=ge;class dt extends z{checkedIndexChanged(e,t){this.enabledRadios&&this.checkRadio(t)}disabledChanged(e,t){var r;this.$fastController.isConnected&&(this.checkedIndex=-1,(r=this.radios)===null||r===void 0||r.forEach(i=>{i.disabled=i.disabledAttribute||this.disabled}),this.restrictFocus())}initialValueChanged(e,t){this.value=t??""}nameChanged(e,t){var r;this.isConnected&&t&&((r=this.radios)===null||r===void 0||r.forEach(i=>{i.name=this.name}))}orientationChanged(e,t){var r;this.elementInternals.ariaOrientation=(r=this.orientation)!==null&&r!==void 0?r:jn.horizontal}radiosChanged(e,t){const r=t==null?void 0:t.length;if(!r)return;!this.name&&t.every(l=>l.name===t[0].name)&&(this.name=t[0].name);const i=$l(this.enabledRadios,l=>l.initialChecked);t.forEach((l,c)=>{var p;l.ariaPosInSet=`${c+1}`,l.ariaSetSize=`${r}`,this.initialValue&&!this.dirtyState?l.checked=l.value===this.initialValue:l.checked=c===i,l.name=(p=this.name)!==null&&p!==void 0?p:l.name,l.disabled=this.disabled||l.disabledAttribute}),!this.dirtyState&&this.initialValue&&(this.value=this.initialValue),this.value||(this.checkedIndex=i);const n=t.map(l=>l.id).join(" ").trim();n&&this.setAttribute("aria-owns",n),De.enqueue(()=>{this.restrictFocus()})}requiredChanged(e,t){this.elementInternals.ariaRequired=t?"true":null,this.setValidity()}get enabledRadios(){var e,t;return this.disabled?[]:(t=(e=this.radios)===null||e===void 0?void 0:e.filter(r=>!r.disabled))!==null&&t!==void 0?t:[]}get validationMessage(){var e,t;if(this.elementInternals.validationMessage)return this.elementInternals.validationMessage;if(!((t=(e=this.enabledRadios)===null||e===void 0?void 0:e[0])===null||t===void 0)&&t.validationMessage)return this.enabledRadios[0].validationMessage;if(!this._validationFallbackMessage){const r=document.createElement("input");r.type="radio",r.required=!0,r.checked=!1,this._validationFallbackMessage=r.validationMessage}return this._validationFallbackMessage}get validity(){return this.elementInternals.validity}get value(){var e,t;return v.notify(this,"value"),(t=(e=this.enabledRadios.find(r=>r.checked))===null||e===void 0?void 0:e.value)!==null&&t!==void 0?t:null}set value(e){const t=this.enabledRadios.findIndex(r=>r.value===e);this.checkedIndex=t,this.$fastController.isConnected&&(this.setFormValue(e),this.setValidity()),v.track(this,"value")}changeHandler(e){if(this===e.target)return!0;this.dirtyState=!0;const t=this.enabledRadios.indexOf(e.target);return this.checkRadio(t),!0}checkRadio(e=this.checkedIndex){let t=this.checkedIndex;this.enabledRadios.forEach((r,i)=>{const n=i===e;r.checked=n,n&&(t=i)}),this.checkedIndex=t,this.setFormValue(this.value),this.setValidity()}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){var t;return this===e.target&&((t=this.enabledRadios[Math.max(0,this.checkedIndex)])===null||t===void 0||t.focus()),!0}constructor(){var e;super(),this.dirtyState=!1,this.disabled=!1,this.elementInternals=this.attachInternals(),this.elementInternals.role="radiogroup",this.elementInternals.ariaOrientation=(e=this.orientation)!==null&&e!==void 0?e:jn.horizontal}focus(){var e;(e=this.enabledRadios[Math.max(0,this.checkedIndex)])===null||e===void 0||e.focus()}focusinHandler(e){return this.disabled||this.enabledRadios.forEach(t=>{t.tabIndex=0}),!0}focusoutHandler(e){var t,r;return!((t=this.radios)===null||t===void 0)&&t.includes(e.relatedTarget)&&(!((r=this.radios)===null||r===void 0)&&r.some(i=>i.checked))&&this.restrictFocus(),!0}formResetCallback(){this.dirtyState=!1,this.checkedIndex=-1,this.setFormValue(this.value),this.setValidity()}getEnabledIndexInBounds(e,t=this.enabledRadios.length){return t===0?-1:(e+t)%t}keydownHandler(e){var t,r;const i=xi(this)==="rtl",n=(t=this.enabledRadios.findIndex(p=>p===Rn(this)))!==null&&t!==void 0?t:this.checkedIndex;let l=0;switch(e.key){case"ArrowLeft":{l=i?1:-1;break}case"ArrowUp":{l=-1;break}case"ArrowRight":{l=i?-1:1;break}case"ArrowDown":{l=1;break}case"Tab":{this.restrictFocus();break}case" ":{this.checkRadio();break}}if(!l)return!0;const c=n+l;this.checkedIndex=this.getEnabledIndexInBounds(c),(r=this.enabledRadios[this.checkedIndex])===null||r===void 0||r.focus()}disabledRadioHandler(e){e.detail===!0&&e.target.checked&&(this.checkedIndex=-1)}reportValidity(){return this.elementInternals.reportValidity()}restrictFocus(){let e=Math.max(this.checkedIndex,0);const t=this.enabledRadios.indexOf(Rn(this));t!==-1&&(e=t),e=this.getEnabledIndexInBounds(e),this.enabledRadios.forEach((r,i)=>{r.tabIndex=i===e?0:-1})}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}setValidity(e,t,r){if(this.$fastController.isConnected){if(this.disabled||!this.required){this.elementInternals.setValidity({});return}this.elementInternals.setValidity({valueMissing:this.required&&!this.value,...e},t??this.validationMessage,r??this.enabledRadios[0])}}slotchangeHandler(e){De.enqueue(()=>{this.radios=[...this.querySelectorAll("*")].filter(t=>t instanceof fa)})}}dt.formAssociated=!0;s([B],dt.prototype,"checkedIndex",void 0);s([a({attribute:"disabled",mode:"boolean"})],dt.prototype,"disabled",void 0);s([a({attribute:"value",mode:"fromView"})],dt.prototype,"initialValue",void 0);s([a],dt.prototype,"name",void 0);s([a],dt.prototype,"orientation",void 0);s([B],dt.prototype,"radios",void 0);s([a({mode:"boolean"})],dt.prototype,"required",void 0);const Sg=b`
  ${P("flex")}

  :host {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    gap: ${Fr};
  }

  :host(${V}),
  :host([orientation='vertical']) {
    flex-direction: column;
    justify-content: flex-start;
  }

  :host([orientation='horizontal']) {
    flex-direction: row;
  }

  ::slotted(*) {
    color: ${ve};
  }

  ::slotted(:hover) {
    color: ${je};
  }

  ::slotted(:active) {
    color: ${L};
  }

  ::slotted(${V}) {
    color: ${M};
  }

  ::slotted(${w}) {
    color: ${L};
  }
`;function wg(){return f`
    <template
      @disabled="${(o,e)=>o.disabledRadioHandler(e.event)}"
      @change="${(o,e)=>o.changeHandler(e.event)}"
      @click="${(o,e)=>o.clickHandler(e.event)}"
      @focusin="${(o,e)=>o.focusinHandler(e.event)}"
      @focusout="${(o,e)=>o.focusoutHandler(e.event)}"
      @keydown="${(o,e)=>o.keydownHandler(e.event)}"
    >
      <slot @slotchange="${(o,e)=>o.slotchangeHandler(e.event)}"></slot>
    </template>
  `}const Bg=wg(),Cg=dt.compose({name:`${x.prefix}-radio-group`,template:Bg,styles:Sg}),Ig=b`
  ${P("inline-flex")}

  :host {
    --size: 16px;
    aspect-ratio: 1;
    background-color: ${j};
    border: ${X} solid ${ft};
    border-radius: ${ke};
    box-sizing: border-box;
    position: relative;
    width: var(--size);
  }

  :host([size='large']) {
    --size: 20px;
  }

  .checked-indicator {
    aspect-ratio: 1;
    border-radius: ${ke};
    color: ${Gt};
    inset: 0;
    margin: auto;
    position: absolute;
    width: calc(var(--size) * 0.625);
  }

  :host(:not([slot='input']))::after {
    content: '' / '';
    position: absolute;
    display: block;
    inset: -8px;
    box-sizing: border-box;
    outline: none;
    border: ${Pe} solid ${$e};
    border-radius: ${H};
  }

  :host(:not([slot='input']):focus-visible)::after {
    border-color: ${qe};
  }

  :host(:hover) {
    border-color: ${Rt};
  }

  :host(${w}) {
    border-color: ${Bo};
  }

  :host(${w}) .checked-indicator {
    background-color: ${Dt};
  }

  :host(${w}:hover) .checked-indicator {
    background-color: ${vo};
  }

  :host(:active) {
    border-color: ${jt};
  }

  :host(${w}:active) .checked-indicator {
    background-color: ${$o};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(${V}) {
    background-color: ${Kt};
    border-color: ${Fe};
  }

  :host(${w}${V}) .checked-indicator {
    background-color: ${Fe};
  }
`.withBehaviors(te(b`
    :host {
      border-color: FieldText;
    }

    :host(:not([slot='input']:focus-visible))::after {
      border-color: Canvas;
    }

    :host(:not(${V}):hover),
    :host(:not([slot='input']):focus-visible)::after {
      border-color: Highlight;
    }

    .checked-indicator {
      color: HighlightText;
    }

    :host(${w}) .checked-indicator {
      background-color: FieldText;
    }

    :host(${w}:not(${V}):hover) .checked-indicator {
      background-color: Highlight;
    }

    :host(${V}) {
      border-color: GrayText;
      color: GrayText;
    }

    :host(${V}${w}) .checked-indicator {
      background-color: GrayText;
    }
  `)),Ng=f.partial(`
    <span part="checked-indicator" class="checked-indicator" role="presentation"></span>
`);function Tg(o={}){return f`
    <template
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
      @keyup="${(e,t)=>e.keyupHandler(t.event)}"
    >
      <slot name="checked-indicator">${we(o.checkedIndicator)}</slot>
    </template>
  `}const zg=Tg({checkedIndicator:Ng}),Fg=fa.compose({name:`${x.prefix}-radio`,template:zg,styles:Ig}),Pg={neutral:"neutral",brand:"brand",marigold:"marigold"},Ag={small:"small",medium:"medium",large:"large"};class Tt extends z{slottedIconChanged(){var e;this.$fastController.isConnected&&(this.customIcon=(e=this.slottedIcon[0])===null||e===void 0?void 0:e.outerHTML)}constructor(){super(),this.elementInternals=this.attachInternals(),this.intlNumberFormatter=new Intl.NumberFormat,this.elementInternals.role="img"}get formattedCount(){return this.count?this.intlNumberFormatter.format(this.count):""}getSelectedValue(){var e;return Math.round(((e=this.value)!==null&&e!==void 0?e:0)*2)/2}getMaxIcons(){var e;return((e=this.max)!==null&&e!==void 0?e:5)*2}generateIcons(){var e,t,r;let i="",n;this.customIcon&&(n=(t=(e=/<svg[^>]*>([\s\S]*?)<\/svg>/.exec(this.customIcon))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:"");const l=this.getSelectedValue();for(let c=0;c<this.getMaxIcons();c++){const p=(c+1)/2;i+=`<svg aria-hidden="true" viewBox="${(r=this.iconViewBox)!==null&&r!==void 0?r:"0 0 20 20"}" ${p===l?"selected":""}>${n??'<use href="#star"></use>'}</svg>`}return i}}s([a({converter:le})],Tt.prototype,"count",void 0);s([a({attribute:"icon-view-box"})],Tt.prototype,"iconViewBox",void 0);s([a({converter:le})],Tt.prototype,"max",void 0);s([a({converter:le})],Tt.prototype,"value",void 0);s([B],Tt.prototype,"slottedIcon",void 0);s([B],Tt.prototype,"customIcon",void 0);class Vr extends Tt{constructor(){super(...arguments),this.compact=!1}colorChanged(e,t){m(this.elementInternals,e,t,Pg)}sizeChanged(e,t){m(this.elementInternals,e,t,Ag)}getSelectedValue(){var e;return Math.round((this.compact?1:(e=this.value)!==null&&e!==void 0?e:0)*2)/2}getMaxIcons(){var e;return(this.compact?1:(e=this.max)!==null&&e!==void 0?e:5)*2}}s([a],Vr.prototype,"color",void 0);s([a],Vr.prototype,"size",void 0);s([a({mode:"boolean"})],Vr.prototype,"compact",void 0);const Eg=f`
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="star">
      <path
        d="M9.10433 2.89874C9.47114 2.15549 10.531 2.1555 10.8978 2.89874L12.8282 6.81024L17.1448 7.43748C17.9651 7.55666 18.2926 8.56464 17.699 9.14317L14.5755 12.1878L15.3129 16.487C15.453 17.3039 14.5956 17.9269 13.8619 17.5412L10.0011 15.5114L6.14018 17.5412C5.40655 17.9269 4.54913 17.3039 4.68924 16.487L5.4266 12.1878L2.30308 9.14317C1.70956 8.56463 2.03708 7.55666 2.8573 7.43748L7.17389 6.81024L9.10433 2.89874Z"
      />
    </symbol>
  </svg>
`;function Mg(){return f`
    ${o=>f`${we(o.generateIcons())}`}
    <slot name="icon" ${se({property:"slottedIcon",filter:Lt("svg")})}>${Eg}</slot>
    <slot name="value"><span class="value-label" aria-hidden="true">${o=>o.value}</span></slot>
    <slot name="count"><span class="count-label" aria-hidden="true">${o=>o.formattedCount}</span></slot>
  `}const Hg=Mg(),Lg=b`
  ${P("inline-flex")}

  :host {
    --icon-size: 16px;
    --icon-color-filled: ${Tc};
    --icon-color-empty: ${Rs};
    align-items: center;
    color: ${L};
    font-family: ${S};
    font-size: ${G};
    line-height: ${ae};
    contain: layout style;
    user-select: none;
  }

  :host(${E}) {
    --icon-size: 12px;
  }

  :host(${T}) {
    --icon-size: 20px;
    font-size: ${O};
    line-height: ${W};
  }

  ::slotted([slot='icon']) {
    display: none;
  }

  svg {
    width: var(--icon-size);
    height: var(--icon-size);
    fill: var(--icon-color-filled);
    margin-inline-end: ${he};
  }

  svg:nth-child(odd) {
    clip-path: inset(0 50% 0 0);
    margin-inline-end: calc(0px - var(--icon-size));
  }

  :host(${Eo}) svg {
    --icon-color-filled: ${L};
  }

  :host(${Ve}) svg {
    --icon-color-filled: ${Ni};
  }

  :host(:is([value^='-'], [value='0'])) svg,
  :host(:not([value])) svg,
  svg[selected] ~ svg {
    fill: var(--icon-color-empty);
  }

  :host(${Eo}:is([value^='-'], [value='0'])) svg,
  :host(${Eo}:not([value])) svg,
  :host(${Eo}) svg[selected] ~ svg {
    --icon-color-empty: ${Ii};
  }

  :host(${Ve}:is([value^='-'], [value='0'])) svg,
  :host(${Ve}:not([value])) svg,
  :host(${Ve}) svg[selected] ~ svg {
    --icon-color-empty: ${Ti};
  }

  .value-label,
  ::slotted([slot='value']) {
    display: block;
    margin-inline-start: ${Xe};
    font-weight: ${U};
  }

  :host(${E}) .value-label,
  :host(${E}) ::slotted([slot='value']) {
    margin-inline-start: ${he};
  }

  :host(${T}) .value-label,
  :host(${T}) ::slotted([slot='value']) {
    margin-inline-start: ${xe};
  }

  :host(:not([count])) .count-label {
    display: none;
  }

  .count-label::before,
  ::slotted([slot='count'])::before {
    content: '·';
    margin-inline: ${Xe};
  }

  :host(${E}) .count-label::before,
  :host(${E}) ::slotted([slot='count'])::before {
    margin-inline: ${he};
  }

  :host(${T}) .count-label::before,
  :host(${T}) ::slotted([slot='count'])::before {
    margin-inline: ${xe};
  }
`.withBehaviors(te(b`
    :host([color]) svg {
      fill: CanvasText;
    }

    :host([color]:is([value^='-'], [value='0'])) svg,
    :host(:not([value])) svg,
    :host([color]) svg[selected] ~ svg {
      fill: Canvas;
      stroke: CanvasText;
    }
  `)),Vg=Vr.compose({name:`${x.prefix}-rating-display`,template:Hg,styles:Lg}),Og={small:"small",medium:"medium"},_g=ge,Dg={singleValue:"single-value"};function qn(o,e,t,r){let i=ki(0,1,(o-e)/(t-e));return r===ze.rtl&&(i=1-i),i}class K extends z{get labels(){return Object.freeze(Array.from(this.elementInternals.labels))}sizeChanged(e,t){m(this.elementInternals,e,t,Og)}handleChange(e,t){switch(t){case"min":case"max":this.setSliderPosition(this.direction);case"step":this.handleStepStyles();break}}handleStepStyles(){if(this.step){const e=100/Math.floor((this.maxAsNumber-this.minAsNumber)/this.stepAsNumber);this.stepStyles!==void 0&&this.$fastController.removeStyles(this.stepStyles),this.stepStyles=b`
        :host {
          --step-rate: ${e}%;
        }
      `,this.$fastController.addStyles(this.stepStyles)}else this.stepStyles!==void 0&&this.$fastController.removeStyles(this.stepStyles)}initialValueChanged(e,t){this.$fastController.isConnected?this.value=t:this._value=t}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage}get willValidate(){return this.elementInternals.willValidate}checkValidity(){return this.elementInternals.checkValidity()}reportValidity(){return this.elementInternals.reportValidity()}setCustomValidity(e){this.setValidity({customError:!!e},e)}setValidity(e,t,r){if(this.$fastController.isConnected){if(this.disabled){this.elementInternals.setValidity({});return}this.elementInternals.setValidity({customError:!!t,...e},t??this.validationMessage,r)}}get value(){return v.track(this,"value"),this._value.toString()}set value(e){if(!this.$fastController.isConnected){this._value=e.toString();return}const t=parseFloat(e),r=ki(this.minAsNumber,this.maxAsNumber,this.convertToConstrainedValue(t)).toString();if(r!==e){this.value=r;return}this._value=e.toString(),this.elementInternals.ariaValueNow=this._value,this.elementInternals.ariaValueText=this.valueTextFormatter(this._value),this.setSliderPosition(this.direction),this.$emit("change"),this.setFormValue(e),v.notify(this,"value")}formResetCallback(){var e;this.value=(e=this.initialValue)!==null&&e!==void 0?e:this.midpoint}formDisabledCallback(e){this.setDisabledSideEffect(e)}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}get valueAsNumber(){return parseFloat(this.value)}set valueAsNumber(e){this.value=e.toString()}valueTextFormatterChanged(){typeof this.valueTextFormatter=="function"?this.elementInternals.ariaValueText=this.valueTextFormatter(this._value):this.elementInternals.ariaValueText=""}disabledChanged(){this.setDisabledSideEffect(this.disabled)}minChanged(){this.elementInternals.ariaValueMin=`${this.minAsNumber}`,this.$fastController.isConnected&&this.minAsNumber>this.valueAsNumber&&(this.value=this.min)}get minAsNumber(){if(this.min!==void 0){const e=parseFloat(this.min);if(!Number.isNaN(e))return e}return 0}maxChanged(){this.elementInternals.ariaValueMax=`${this.maxAsNumber}`,this.$fastController.isConnected&&this.maxAsNumber<this.valueAsNumber&&(this.value=this.max)}get maxAsNumber(){if(this.max!==void 0){const e=parseFloat(this.max);if(!Number.isNaN(e))return e}return 100}stepChanged(){this.updateStepMultiplier(),this.$fastController.isConnected&&(this.value=this._value)}get stepAsNumber(){if(this.step!==void 0){const e=parseFloat(this.step);if(!Number.isNaN(e)&&e>0)return e}return 1}orientationChanged(e,t){this.elementInternals.ariaOrientation=t??ge.horizontal,m(this.elementInternals,e,t,ge),this.$fastController.isConnected&&this.setSliderPosition(this.direction)}constructor(){var e;super(),this.elementInternals=this.attachInternals(),this.direction=ze.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>"",this.disabled=!1,this.min="",this.max="",this.step="",this.mode=Dg.singleValue,this.keypressHandler=t=>{if(!this.disabled)switch(t.key){case mr:t.preventDefault(),this.value=this.direction!==ze.rtl&&this.orientation!==ge.vertical?`${this.minAsNumber}`:`${this.maxAsNumber}`;break;case br:t.preventDefault(),this.value=this.direction!==ze.rtl&&this.orientation!==ge.vertical?`${this.maxAsNumber}`:`${this.minAsNumber}`;break;case pr:case gr:t.shiftKey||(t.preventDefault(),this.increment());break;case ur:case hr:t.shiftKey||(t.preventDefault(),this.decrement());break}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.top,this.trackMinHeight=t.bottom,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{this.addEventListener("keydown",this.keypressHandler),t&&this.removeEventListener("keydown",this.keypressHandler)},this.handleThumbPointerDown=t=>{const r=t!==null?window.addEventListener:window.removeEventListener;r("pointerup",this.handleWindowPointerUp),r("pointermove",this.handlePointerMove,{passive:!0}),r("touchmove",this.handlePointerMove,{passive:!0}),r("touchend",this.handleWindowPointerUp),this.isDragging=t!==null},this.handlePointerMove=t=>{if(this.disabled||t.defaultPrevented)return;const r=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,i=this.orientation===ge.vertical?r.pageY-document.documentElement.scrollTop:r.pageX-document.documentElement.scrollLeft-this.trackLeft;this.value=`${this.calculateNewValue(i)}`},this.handleWindowPointerUp=()=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handlePointerDown(null),this.handleThumbPointerDown(null)},this.handlePointerDown=t=>{if(t===null||!this.disabled){const r=t!==null?window.addEventListener:window.removeEventListener,i=t!==null?document.addEventListener:document.removeEventListener;if(r("pointerup",this.handleWindowPointerUp),i("mouseleave",this.handleWindowPointerUp),r("pointermove",this.handlePointerMove),t){this.setupTrackConstraints();const n=this.orientation===ge.vertical?t.pageY-document.documentElement.scrollTop:t.pageX-document.documentElement.scrollLeft-this.trackLeft;this.value=`${this.calculateNewValue(n)}`}}},this.elementInternals.role="slider",this.elementInternals.ariaOrientation=(e=this.orientation)!==null&&e!==void 0?e:_g.horizontal}connectedCallback(){super.connectedCallback(),this.direction=xi(this),this.setDisabledSideEffect(this.disabled),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setSliderPosition(this.direction),v.getNotifier(this).subscribe(this,"max"),v.getNotifier(this).subscribe(this,"min"),v.getNotifier(this).subscribe(this,"step"),this.handleStepStyles()}disconnectedCallback(){super.disconnectedCallback(),this.setupListeners(!0),v.getNotifier(this).unsubscribe(this,"max"),v.getNotifier(this).unsubscribe(this,"min"),v.getNotifier(this).unsubscribe(this,"step")}increment(){const e=this.direction!==ze.rtl?Number(this.value)+this.stepAsNumber:Number(this.value)-this.stepAsNumber,t=this.convertToConstrainedValue(e),r=t<this.maxAsNumber?`${t}`:`${this.maxAsNumber}`;this.value=r}decrement(){const e=this.direction!==ze.rtl?Number(this.value)-Number(this.stepAsNumber):Number(this.value)+Number(this.stepAsNumber),t=this.convertToConstrainedValue(e),r=t>this.minAsNumber?`${t}`:`${this.minAsNumber}`;this.value=r}setSliderPosition(e){const r=(1-qn(parseFloat(this.value),this.minAsNumber,this.maxAsNumber,e))*100,i=`calc(100% - ${r}%)`,n=this.orientation!==ge.vertical&&e===ze.rtl?`${r}%`:`calc(100% - ${r}%)`;this.position=`--slider-thumb: ${i}; --slider-progress: ${n}`}updateStepMultiplier(){const e=this.stepAsNumber+"",t=this.stepAsNumber%1?e.length-e.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,t)}get midpoint(){return`${this.convertToConstrainedValue((this.maxAsNumber+this.minAsNumber)/2)}`}setupDefaultValue(){var e;this._value||(this.value=(e=this.initialValue)!==null&&e!==void 0?e:this.midpoint),!Number.isNaN(this.valueAsNumber)&&(this.valueAsNumber<this.minAsNumber||this.valueAsNumber>this.maxAsNumber)&&(this.value=this.midpoint),this.elementInternals.ariaValueNow=this.value}calculateNewValue(e){this.setupTrackConstraints();const t=qn(e,this.orientation===ge.vertical?this.trackMinHeight:this.trackMinWidth,this.orientation===ge.vertical?this.trackHeight:this.trackWidth,this.direction),r=(this.maxAsNumber-this.minAsNumber)*t+this.minAsNumber;return this.convertToConstrainedValue(r)}convertToConstrainedValue(e){isNaN(e)&&(e=this.minAsNumber);let t=e-this.minAsNumber;const r=Math.round(t/this.stepAsNumber),i=t-r*(this.stepMultiplier*this.stepAsNumber)/this.stepMultiplier;return t=i>=Number(this.stepAsNumber)/2?t-i+Number(this.stepAsNumber):t-i,t+this.minAsNumber}setDisabledSideEffect(e){this.$fastController.isConnected&&(this.elementInternals.ariaDisabled=e.toString(),this.tabIndex=e?-1:0)}}K.formAssociated=!0;s([a],K.prototype,"size",void 0);s([a({attribute:"value",mode:"fromView"})],K.prototype,"initialValue",void 0);s([B],K.prototype,"direction",void 0);s([B],K.prototype,"isDragging",void 0);s([B],K.prototype,"position",void 0);s([B],K.prototype,"trackWidth",void 0);s([B],K.prototype,"trackMinWidth",void 0);s([B],K.prototype,"trackHeight",void 0);s([B],K.prototype,"trackLeft",void 0);s([B],K.prototype,"trackMinHeight",void 0);s([B],K.prototype,"valueTextFormatter",void 0);s([a({mode:"boolean"})],K.prototype,"disabled",void 0);s([a({converter:yi})],K.prototype,"min",void 0);s([a({converter:yi})],K.prototype,"max",void 0);s([a({converter:yi})],K.prototype,"step",void 0);s([a],K.prototype,"orientation",void 0);s([a],K.prototype,"mode",void 0);const Rg=b`
  ${P("inline-grid")}

  :host {
    --thumb-size: 20px;
    --track-margin-inline: calc(var(--thumb-size) / 2);
    --track-size: 4px;
    --track-overhang: calc(var(--track-size) / -2);
    --rail-color: ${Dt};
    --track-color: ${ft};
    --slider-direction: 90deg;
    --border-radius: ${H};
    --step-marker-inset: var(--track-overhang) -1px;

    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    outline: none;
    user-select: none;
    touch-action: none;
    min-width: 120px;
    min-height: 32px;
    grid-template-rows: 1fr var(--thumb-size) 1fr;
    grid-template-columns: var(--track-margin-inline) 1fr var(--track-margin-inline);
  }

  :host(:hover) {
    --rail-color: ${vo};
  }

  :host(:active) {
    --rail-color: ${$o};
  }

  :host(:disabled) {
    --rail-color: ${M};
    --track-color: ${Kt};
  }

  :host(:not(:disabled)) {
    cursor: pointer;
  }

  :host(:dir(rtl)) {
    --slider-direction: -90deg;
  }

  :host(${E}) {
    --thumb-size: 16px;
    --track-overhang: -1px;
    --track-size: 2px;
    --border-radius: ${We};
  }

  :host(${I}) {
    --slider-direction: 0deg;
    --step-marker-inset: -1px var(--track-overhang);
    min-height: 120px;
    grid-template-rows: var(--track-margin-inline) 1fr var(--track-margin-inline);
    grid-template-columns: 1fr var(--thumb-size) 1fr;
    width: unset;
    min-width: 32px;
    justify-items: center;
  }

  :host(:not([slot='input']):focus-visible) {
    box-shadow: 0 0 0 2pt ${qe};
    outline: 1px solid ${zi};
  }

  :host:after,
  .track {
    height: var(--track-size);
    width: 100%;
  }

  :host:after {
    background-image: linear-gradient(
      var(--slider-direction),
      var(--rail-color) 0%,
      var(--rail-color) 50%,
      var(--track-color) 50.1%,
      var(--track-color) 100%
    );
    border-radius: var(--border-radius);
    content: '';
    grid-row: 1 / -1;
    grid-column: 1 / -1;
  }

  .track {
    position: relative;
    background-color: var(--track-color);
    grid-row: 2 / 2;
    grid-column: 2 / 2;
    forced-color-adjust: none;
    overflow: hidden;
  }

  :host(${I})::after,
  :host(${I}) .track {
    height: 100%;
    width: var(--track-size);
  }

  :host(${I}) .track {
    top: var(--track-overhang);
    bottom: var(--track-overhang);
  }

  .track::before {
    content: '';
    position: absolute;
    height: 100%;
    border-radius: inherit;
    inset-inline-start: 0;
    width: var(--slider-progress);
  }

  :host(${I}) .track::before {
    width: 100%;
    bottom: 0;
    height: var(--slider-progress);
  }

  :host([step]) .track::after {
    content: '';
    position: absolute;
    border-radius: inherit;
    inset: var(--step-marker-inset);
    background-image: repeating-linear-gradient(
      var(--slider-direction),
      #0000 0%,
      #0000 calc(var(--step-rate) - 1px),
      ${j} calc(var(--step-rate) - 1px),
      ${j} var(--step-rate)
    );
  }

  .thumb-container {
    position: absolute;
    grid-row: 2 / 2;
    grid-column: 2 / 2;
    transform: translateX(-50%);
    left: var(--slider-thumb);
  }

  :host(${I}) .thumb-container {
    transform: translateY(50%);
    left: unset;
    bottom: var(--slider-thumb);
  }

  :host(:not(:active)) :is(.thumb-container, .track::before) {
    transition: all 0.2s ease;
  }

  .thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: ${ke};
    box-shadow: 0 0 0 calc(var(--thumb-size) * 0.2) ${j} inset;
    border: calc(var(--thumb-size) * 0.05) solid ${rt};
    box-sizing: border-box;
  }

  .thumb,
  .track::before {
    background-color: var(--rail-color);
  }
`.withBehaviors(te(b`
    .track:hover,
    .track:active,
    .track {
      background: WindowText;
    }
    .thumb:hover,
    .thumb:active,
    .thumb {
      background: ButtonText;
    }

    :host(:hover) .track::before,
    :host(:active) .track::before,
    .track::before {
      background: Highlight;
    }
  `));function jg(o={}){return f`
    <template
      tabindex="${e=>e.disabled?null:0}"
      @pointerdown="${(e,t)=>e.handlePointerDown(t.event)}"
    >
      <div ${Se("track")} part="track-container" class="track" style="${e=>e.position}"></div>
      <div
        ${Se("thumb")}
        part="thumb-container"
        class="thumb-container"
        style="${e=>e.position}"
        @pointerdown="${(e,t)=>e.handleThumbPointerDown(t.event)}"
      >
        <slot name="thumb">${we(o.thumb)}</slot>
      </div>
    </template>
  `}const qg=jg({thumb:'<div class="thumb"></div>'}),Wg=K.compose({name:`${x.prefix}-slider`,template:qg,styles:Rg}),Xg={primary:"primary",inverted:"inverted"},Ug={tiny:"tiny",extraSmall:"extra-small",small:"small",medium:"medium",large:"large",extraLarge:"extra-large",huge:"huge"};class Gg extends z{constructor(){super(),this.elementInternals=this.attachInternals(),this.elementInternals.role="progressbar"}}class Ri extends Gg{sizeChanged(e,t){m(this.elementInternals,e,t,Ug)}appearanceChanged(e,t){m(this.elementInternals,e,t,Xg)}}s([a],Ri.prototype,"size",void 0);s([a],Ri.prototype,"appearance",void 0);const Kg=f`
  <slot name="indicator">
    <div class="background"></div>
    <div class="progress">
      <div class="spinner">
        <div class="start">
          <div class="indicator"></div>
        </div>
        <div class="end">
          <div class="indicator"></div>
        </div>
      </div>
    </div>
  </slot>
`,Yg=b`
  ${P("inline-flex")}

  :host {
    --duration: 1.5s;
    --indicatorSize: ${re};
    --size: 32px;
    height: var(--size);
    width: var(--size);
    contain: strict;
    content-visibility: auto;
  }

  :host(${mo}) {
    --indicatorSize: ${Pe};
    --size: 20px;
  }
  :host(${bo}) {
    --indicatorSize: ${Pe};
    --size: 24px;
  }
  :host(${E}) {
    --indicatorSize: ${Pe};
    --size: 28px;
  }
  :host(${T}) {
    --indicatorSize: ${re};
    --size: 36px;
  }
  :host(${Jo}) {
    --indicatorSize: ${re};
    --size: 40px;
  }
  :host(${Zl}) {
    --indicatorSize: ${ai};
    --size: 44px;
  }

  .progress,
  .background,
  .spinner,
  .start,
  .end,
  .indicator {
    position: absolute;
    inset: 0;
  }

  .progress,
  .spinner,
  .indicator {
    animation: none var(--duration) infinite ${Pr};
  }

  .progress {
    animation-timing-function: linear;
    animation-name: spin-linear;
  }

  .background {
    border: var(--indicatorSize) solid ${Ti};
    border-radius: 50%;
  }

  :host(${Fn}) .background {
    border-color: rgba(255, 255, 255, 0.2);
  }

  .spinner {
    animation-name: spin-swing;
  }

  .start {
    overflow: hidden;
    inset-inline-end: 50%;
  }

  .end {
    overflow: hidden;
    inset-inline-start: 50%;
  }

  .indicator {
    color: ${Ts};
    box-sizing: border-box;
    border-radius: 50%;
    border: var(--indicatorSize) solid transparent;
    border-block-start-color: currentcolor;
    border-inline-end-color: currentcolor;
  }

  :host(${Fn}) .indicator {
    color: ${fc};
  }

  .start .indicator {
    rotate: 135deg; /* Starts 9 o'clock */
    inset: 0 -100% 0 0;
    animation-name: spin-start;
  }

  .end .indicator {
    rotate: 135deg; /* Ends at 3 o'clock */
    inset: 0 0 0 -100%;
    animation-name: spin-end;
  }

  @keyframes spin-linear {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-swing {
    0% {
      transform: rotate(-135deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(225deg);
    }
  }

  @keyframes spin-start {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-80deg);
    }
  }

  @keyframes spin-end {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(70deg);
    }
  }
`.withBehaviors(te(b`
    .background {
      display: none;
    }
    .indicator {
      border-color: Canvas;
      border-block-start-color: Highlight;
      border-inline-end-color: Highlight;
    }
  `)),Qg=Ri.compose({name:`${x.prefix}-spinner`,template:Kg,styles:Yg});class Zg extends Te{constructor(){super(),this.elementInternals.role="switch"}}function Jg(o={}){return f`
    <template
      tabindex="${e=>e.disabled?void 0:0}"
      @click="${(e,t)=>e.clickHandler(t.event)}"
      @input="${(e,t)=>e.inputHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
      @keyup="${(e,t)=>e.keyupHandler(t.event)}"
    >
      <slot name="switch">${we(o.switch)}</slot>
    </template>
  `}const eb=Jg({switch:'<span class="checked-indicator" part="checked-indicator"></span>'}),tb=b`
  ${P("inline-flex")}

  :host {
    box-sizing: border-box;
    align-items: center;
    flex-direction: row;
    outline: none;
    user-select: none;
    contain: content;
    padding: 0 ${he};
    width: 40px;
    height: 20px;
    background-color: ${Ne};
    border: 1px solid ${ft};
    border-radius: ${ke};
    cursor: pointer;
  }

  :host(:hover) {
    background: none;
    border-color: ${Rt};
  }
  :host(:active) {
    border-color: ${jt};
  }
  :host(:disabled),
  :host([readonly]) {
    border: 1px solid ${Fe};
    background-color: none;
    pointer: default;
  }
  :host(${w}) {
    background: ${Dt};
    border-color: ${Dt};
  }
  :host(${w}:hover) {
    background: ${vo};
    border-color: ${vo};
  }
  :host(${w}:active) {
    background: ${$o};
    border-color: ${$o};
  }
  :host(${w}:disabled) {
    background: ${Kt};
    border-color: ${Fe};
  }
  .checked-indicator {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    margin-inline-start: 0;
    background-color: ${ve};
    transition-duration: ${Ei};
    transition-timing-function: ${Pr};
    transition-property: margin-inline-start;
  }
  :host(${w}) .checked-indicator {
    background-color: ${Gt};
    margin-inline-start: calc(100% - 14px);
  }
  :host(${w}:hover) .checked-indicator {
    background: ${ic};
  }
  :host(${w}:active) .checked-indicator {
    background: ${nc};
  }
  :host(:hover) .checked-indicator {
    background-color: ${Kd};
  }
  :host(:active) .checked-indicator {
    background-color: ${Yd};
  }
  :host(:disabled) .checked-indicator,
  :host([readonly]) .checked-indicator {
    background: ${M};
  }
  :host(${w}:disabled) .checked-indicator {
    background: ${M};
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:not([slot='input']):focus-visible) {
    border-color: ${$e};
    outline: ${Pe} solid ${$e};
    box-shadow: ${zr}, 0 0 0 2px ${qe};
  }
`.withBehaviors(te(b`
    :host {
      border-color: InactiveBorder;
    }
    :host(${w}),
    :host(${w}:active),
    :host(${w}:hover) {
      background: Highlight;
      border-color: Highlight;
    }
    .checked-indicator,
    :host(:hover) .checked-indicator,
    :host(:active) .checked-indicator {
      background-color: ActiveCaption;
    }
    :host(${w}) .checked-indicator,
    :host(${w}:hover) .checked-indicator,
    :host(${w}:active) .checked-indicator {
      background-color: ButtonFace;
    }
  `)),ob=Zg.compose({name:`${x.prefix}-switch`,template:eb,styles:tb});class rb extends z{}function ib(){return f`
    <template slot="tabpanel" role="tabpanel">
      <slot></slot>
    </template>
  `}const nb=ib(),sb=b`
  ${P("block")}

  :host {
    box-sizing: border-box;
    padding: ${me} ${be};
  }
`,ab=rb.compose({name:`${x.prefix}-tab-panel`,template:nb,styles:sb});class ji extends z{connectedCallback(){super.connectedCallback(),this.styles!==void 0&&this.$fastController.removeStyles(this.styles),this.styles=b`
      :host {
        --textContent: '${this.textContent}';
      }
    `,this.$fastController.addStyles(this.styles)}}s([a({mode:"boolean"})],ji.prototype,"disabled",void 0);st(ji,it);function lb(o={}){return f`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
      ${nt(o)}
      <span class="tab-content"><slot></slot></span>
      ${mt(o)}
    </template>
  `}const db=lb({}),cb=b`
  ${P("inline-flex")}

  :host {
    position: relative;
    flex-direction: column;
    cursor: pointer;
    box-sizing: border-box;
    justify-content: center;
    line-height: ${W};
    font-family: ${S};
    font-size: ${O};
    color: ${je};
    fill: currentcolor;
    grid-row: 1;
    padding: ${me} ${be};
    border-radius: ${H};
  }
  :host .tab-content {
    display: inline-flex;
    flex-direction: column;
    padding: 0 2px;
  }

  :host([aria-selected='true']) {
    color: ${L};
    font-weight: ${U};
  }

  /* adds hidden textContent to prevent shifting ui on bold / unbolding of text */
  :host .tab-content::after {
    content: var(--textContent);
    visibility: hidden;
    height: 0;
    line-height: ${W};
    font-weight: ${U};
  }

  :host([aria-selected='true'])::after {
    background-color: ${Bo};
    border-radius: ${ke};
    content: '';
    inset: 0;
    position: absolute;
    z-index: 2;
  }

  :host([aria-selected='false']:hover)::after {
    background-color: ${wo};
    border-radius: ${ke};
    content: '';
    inset: 0;
    position: absolute;
    z-index: 1;
  }

  :host([aria-selected='true'][disabled])::after {
    background-color: ${M};
  }

  ::slotted([slot='start']),
  ::slotted([slot='end']) {
    display: flex;
  }
  ::slotted([slot='start']) {
    margin-inline-end: 11px;
  }
  ::slotted([slot='end']) {
    margin-inline-start: 11px;
  }
  :host([disabled]) {
    cursor: not-allowed;
    fill: ${M};
    color: ${M};
  }

  :host([disabled]:hover)::after {
    background-color: unset;
  }

  :host(:focus) {
    outline: none;
  }

  :host(:focus-visible) {
    border-radius: ${We};
    box-shadow: 0 0 0 3px ${qe};
    outline: 1px solid ${zi};
  }
`.withBehaviors(te(b`
    :host([aria-selected='true'])::after {
      background-color: Highlight;
    }
  `)),hb=ji.compose({name:`${x.prefix}-tab`,template:db,styles:cb}),ub={subtle:"subtle",transparent:"transparent"},rr=ge;class zo extends z{constructor(){super(...arguments),this.orientation=rr.horizontal,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.handleTabClick=e=>{const t=e.currentTarget;t.nodeType===1&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case ur:e.preventDefault(),this.adjustBackward(e);break;case pr:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case gr:e.preventDefault(),this.adjustBackward(e);break;case hr:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case mr:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case br:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}}}orientationChanged(){this.$fastController.isConnected&&this.setTabs()}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(r=>r.id===e),this.setTabs())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}setTabs(){const e="gridColumn",t="gridRow",r=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.tabs.forEach((i,n)=>{if(i.slot==="tab"){const l=this.activeTabIndex===n&&this.isFocusableElement(i),c=this.tabIds[n],p=this.tabpanelIds[n];i.setAttribute("id",c),i.setAttribute("aria-selected",l?"true":"false"),i.setAttribute("aria-controls",p),i.addEventListener("click",this.handleTabClick),i.addEventListener("keydown",this.handleTabKeyDown),i.setAttribute("tabindex",l?"0":"-1"),l&&(this.activetab=i,this.activeid=c)}i.style[e]="",i.style[t]="",i.style[r]=`${n+1}`,this.isHorizontal()?i.classList.remove("vertical"):i.classList.add("vertical")}),this.setTabPanels()}setTabPanels(){this.tabpanels.forEach((e,t)=>{const r=this.tabIds[t],i=this.tabpanelIds[t];e.setAttribute("id",i),e.setAttribute("aria-labelledby",r),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")})}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${Ot()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`panel-${Ot()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===rr.horizontal}adjust(e){const t=this.tabs.filter(l=>this.isFocusableElement(l)),r=t.indexOf(this.activetab),i=ki(0,t.length-1,r+e),n=this.tabs.indexOf(t[i]);n>-1&&this.moveToTabByIndex(this.tabs,n)}adjustForward(e){const t=this.tabs;let r=0;for(r=this.activetab?t.indexOf(this.activetab)+1:1,r===t.length&&(r=0);r<t.length&&t.length>1;)if(this.isFocusableElement(t[r])){this.moveToTabByIndex(t,r);break}else{if(this.activetab&&r===t.indexOf(this.activetab))break;r+1>=t.length?r=0:r+=1}}adjustBackward(e){const t=this.tabs;let r=0;for(r=this.activetab?t.indexOf(this.activetab)-1:0,r=r<0?t.length-1:r;r>=0&&t.length>1;)if(this.isFocusableElement(t[r])){this.moveToTabByIndex(t,r);break}else r-1<0?r=t.length-1:r-=1}moveToTabByIndex(e,t){const r=e[t];this.activetab=r,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,r.focus(),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}s([a],zo.prototype,"orientation",void 0);s([a],zo.prototype,"activeid",void 0);s([B],zo.prototype,"tabs",void 0);s([B],zo.prototype,"tabpanels",void 0);class Fo extends zo{constructor(){super(...arguments),this.activeTabData={x:0,y:0,height:0,width:0},this.previousActiveTabData={x:0,y:0,height:0,width:0},this.activeTabOffset=0,this.activeTabScale=1,this.appearance=ub.transparent}calculateAnimationProperties(e){this.activeTabOffset=this.getTabPosition(e),this.activeTabScale=this.getTabScale(e)}getTabPosition(e){return this.orientation===rr.horizontal?this.previousActiveTabData.x-(e.getBoundingClientRect().x-this.getBoundingClientRect().x):this.previousActiveTabData.y-(e.getBoundingClientRect().y-this.getBoundingClientRect().y)}getTabScale(e){return this.orientation===rr.horizontal?this.previousActiveTabData.width/e.getBoundingClientRect().width:this.previousActiveTabData.height/e.getBoundingClientRect().height}applyUpdatedCSSValues(e){this.calculateAnimationProperties(e),this.setTabScaleCSSVar(),this.setTabOffsetCSSVar()}animationLoop(e){e.setAttribute("data-animate","false"),this.applyUpdatedCSSValues(e),this.previousActiveTabData=this.activeTabData,this.applyUpdatedCSSValues(e),e.setAttribute("data-animate","true")}setTabData(){var e,t,r,i;if(this.tabs&&this.tabs.length>0){const n=this.tabs,l=this.activetab||n[0],c=l==null?void 0:l.getBoundingClientRect(),p=this.getBoundingClientRect();this.activeTabData={x:c.x-p.x,y:c.y-p.y,height:c.height,width:c.width},((e=this.previousActiveTabData)===null||e===void 0?void 0:e.x)!==((t=this.activeTabData)===null||t===void 0?void 0:t.x)&&((r=this.previousActiveTabData)===null||r===void 0?void 0:r.y)!==((i=this.activeTabData)===null||i===void 0?void 0:i.y)&&(this.previousActiveTabData=this.activeTabData)}}setTabOffsetCSSVar(){this.styles=b`
      :host {
        --tabIndicatorOffset: ${this.activeTabOffset.toString()}px;
      }
    `,this.$fastController.addStyles(this.styles)}setTabScaleCSSVar(){this.styles=b`
      :host {
        --tabIndicatorScale: ${this.activeTabScale.toString()};
      }
    `,this.$fastController.addStyles(this.styles)}activeidChanged(e,t){super.activeidChanged(e,t),this.setTabData(),this.activetab&&this.animationLoop(this.activetab)}tabsChanged(){super.tabsChanged(),this.setTabData()}}s([a],Fo.prototype,"appearance",void 0);s([a({mode:"boolean"})],Fo.prototype,"disabled",void 0);s([a],Fo.prototype,"size",void 0);st(Fo,it);function pb(o={}){return f`
    ${nt(o)}
    <div class="tablist" part="tablist" role="tablist">
      <slot name="tab" ${se("tabs")}></slot>
    </div>
    ${mt(o)}
    <div class="tabpanel" part="tabpanel">
      <slot name="tabpanel" ${se("tabpanels")}></slot>
    </div>
  `}const gb=pb({}),bb=b`
  ${P("grid")}

  :host {
    box-sizing: border-box;
    font-family: ${S};
    font-size: ${O};
    line-height: ${W};
    color: ${je};
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr;
  }

  :host([disabled]) {
    cursor: not-allowed;
    color: ${M};
  }

  :host([disabled]) ::slotted(fluent-tab) {
    pointer-events: none;
    cursor: not-allowed;
    color: ${M};
  }
  :host([disabled]) ::slotted(fluent-tab:after) {
    background-color: ${M};
  }
  :host([disabled]) ::slotted(fluent-tab[aria-selected='true'])::after {
    background-color: ${M};
  }
  :host([disabled]) ::slotted(fluent-tab:hover):before {
    content: unset;
  }

  :host ::slotted(fluent-tab) {
    border-radius: ${H};
  }

  :host ::slotted(fluent-tab[aria-selected='true'])::before {
    background-color: ${M};
  }

  .tablist {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    position: relative;
    width: max-content;
    align-self: end;
    box-sizing: border-box;
  }
  ::slotted([slot='start']),
  ::slotted([slot='end']) {
    display: flex;
    align-self: center;
  }
  ::slotted([slot='start']) {
    margin-inline-end: 11px;
  }
  ::slotted([slot='end']) {
    margin-inline-start: 11px;
  }

  .tabpanel {
    grid-row: 2;
    grid-column-start: 1;
    grid-column-end: 4;
    position: relative;
  }
  :host([orientation='vertical']) {
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr;
  }
  :host([orientation='vertical']) .tablist {
    grid-row-start: 2;
    grid-row-end: 2;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
    position: relative;
    width: max-content;
    justify-self: end;
    align-self: flex-start;
    width: 100%;
  }
  :host([orientation='vertical']) .tabpanel {
    grid-column: 2;
    grid-row-start: 1;
    grid-row-end: 4;
  }
  :host([orientation='vertical']) ::slotted([slot='end']) {
    grid-row: 3;
  }

  :host([appearance='subtle']) ::slotted(fluent-tab:hover) {
    background-color: ${wr};
    color: ${wi};
    fill: ${Ss};
  }

  :host([appearance='subtle']) ::slotted(fluent-tab:active) {
    background-color: ${_t};
    fill: ${_t};
    color: ${L};
  }

  :host([size='small']) ::slotted(fluent-tab) {
    font-size: ${O};
    line-height: ${W};
    padding: ${gt} ${xe};
  }

  :host([size='large']) ::slotted(fluent-tab) {
    font-size: ${ue};
    line-height: ${Be};
    padding: ${Fr} ${be};
  }

  /* indicator animation  */
  :host ::slotted(fluent-tab[data-animate='true'])::after {
    transition-property: transform;
    transition-duration: ${ra};
    transition-timing-function: ${Mi};
  }
  :host ::slotted(fluent-tab)::after {
    height: ${re};
    margin-top: auto;
    transform-origin: left;
    transform: translateX(var(--tabIndicatorOffset)) scaleX(var(--tabIndicatorScale));
  }
  :host([orientation='vertical']) ::slotted(fluent-tab)::after {
    width: ${re};
    height: unset;
    margin-top: unset;
    transform-origin: top;
    transform: translateY(var(--tabIndicatorOffset)) scaleY(var(--tabIndicatorScale));
  }

  /* ::before adds a secondary indicator placeholder that appears right after click on the active tab */
  :host ::slotted(fluent-tab)::before {
    height: ${re};
    border-radius: ${ke};
    content: '';
    inset: 0;
    position: absolute;
    margin-top: auto;
  }
  :host([orientation='vertical']) ::slotted(fluent-tab)::before {
    height: unset;
    width: ${re};
    margin-inline-end: auto;
    transform-origin: top;
  }

  :host ::slotted(fluent-tab[aria-selected='false']:hover)::after {
    height: ${re};
    margin-top: auto;
    transform-origin: left;
  }
  :host([orientation='vertical']) ::slotted(fluent-tab[aria-selected='false']:hover)::after {
    height: unset;
    margin-inline-end: auto;
    transform-origin: top;
    width: ${re};
  }

  :host([orientation='vertical']) ::slotted(fluent-tab) {
    align-items: flex-start;
    grid-column: 2;
    padding-top: ${gt};
    padding-bottom: ${gt};
  }
  :host([orientation='vertical'][size='small']) ::slotted(fluent-tab) {
    padding-top: ${yo};
    padding-bottom: ${yo};
  }
  :host([orientation='vertical'][size='large']) ::slotted(fluent-tab) {
    padding-top: ${ie};
    padding-bottom: ${ie};
  }

  /* horizontal spacing for indicator */
  :host([size='small']) ::slotted(fluent-tab)::after,
  :host([size='small']) ::slotted(fluent-tab)::before,
  :host([size='small']) ::slotted(fluent-tab:hover)::after {
    right: ${xe};
    left: ${xe};
  }
  :host ::slotted(fluent-tab)::after,
  :host ::slotted(fluent-tab)::before,
  :host ::slotted(fluent-tab:hover)::after {
    right: ${be};
    left: ${be};
  }
  :host([size='large']) ::slotted(fluent-tab)::after,
  :host([size='large']) ::slotted(fluent-tab)::before,
  :host([size='large']) ::slotted(fluent-tab:hover)::after {
    right: ${be};
    left: ${be};
  }

  /* vertical spacing for indicator */
  :host([orientation='vertical'][size='small']) ::slotted(fluent-tab)::after,
  :host([orientation='vertical'][size='small']) ::slotted(fluent-tab)::before,
  :host([orientation='vertical'][size='small']) ::slotted(fluent-tab:hover)::after {
    right: 0;
    left: 0;
    top: ${gt};
    bottom: ${gt};
  }
  :host([orientation='vertical']) ::slotted(fluent-tab)::after,
  :host([orientation='vertical']) ::slotted(fluent-tab)::before,
  :host([orientation='vertical']) ::slotted(fluent-tab:hover)::after {
    right: 0;
    left: 0;
    top: ${ie};
    bottom: ${ie};
  }
  :host([orientation='vertical'][size='large']) ::slotted(fluent-tab)::after,
  :host([orientation='vertical'][size='large']) ::slotted(fluent-tab)::before,
  :host([orientation='vertical'][size='large']) ::slotted(fluent-tab:hover)::after {
    right: 0;
    left: 0;
    top: ${Mt};
    bottom: ${Mt};
  }
`,fb=Fo.compose({name:`${x.prefix}-tabs`,template:gb,styles:bb}),mb=o=>o.getAttribute("aria-disabled")==="true",vb=o=>o.hasAttribute("hidden"),Vo=o=>!mb(o)&&!vb(o),Wn={subtle:"subtle",transparent:"transparent"},$b={small:"small",medium:"medium",large:"large"},At=ge;class Po extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.disabled=!1,this.orientation=At.horizontal,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.change=()=>{this.$emit("change",this.activetab)},this.handleTabClick=e=>{const t=e.currentTarget;t.nodeType===Node.ELEMENT_NODE&&Vo(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{const t=xi(this);switch(e.key){case ur:if(!this.isHorizontal())return;e.preventDefault(),this.adjust(t==="ltr"?-1:1);break;case pr:if(!this.isHorizontal())return;e.preventDefault(),this.adjust(t==="ltr"?1:-1);break;case gr:if(this.isHorizontal())return;e.preventDefault(),this.adjust(-1);break;case hr:if(this.isHorizontal())return;e.preventDefault(),this.adjust(1);break;case mr:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case br:e.preventDefault(),this.adjust(this.tabs.filter(r=>Vo(r)).length-this.activeTabIndex-1);break}}}disabledChanged(e,t){y(this.elementInternals,"disabled",t)}orientationChanged(e,t){this.elementInternals.ariaOrientation=t??At.horizontal,m(this.elementInternals,e,t,At),this.$fastController.isConnected&&this.setTabs()}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length>0&&(this.prevActiveTabIndex=this.tabs.findIndex(r=>r.id===e),this.setTabs())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length>0&&(this.tabIds=this.getTabIds(),this.setTabs())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}setTabs(){this.activeTabIndex=this.getActiveIndex(),this.tabs.forEach((e,t)=>{if(e.slot==="tab"){const r=this.activeTabIndex===t&&Vo(e),i=this.tabIds[t];e.setAttribute("id",i),e.setAttribute("aria-selected",r?"true":"false"),e.addEventListener("click",this.handleTabClick),e.addEventListener("keydown",this.handleTabKeyDown),e.setAttribute("tabindex",r&&!this.disabled?"0":"-1"),r&&(this.activetab=e,this.activeid=i),this.change()}})}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${Ot()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===At.horizontal}adjust(e){const t=this.tabs.filter(l=>Vo(l)),r=t.indexOf(this.activetab),i=xl(0,t.length-1,r+e),n=this.tabs.indexOf(t[i]);n>-1&&this.activateTabByIndex(this.tabs,n)}activateTabByIndex(e,t){const r=e[t];this.activetab=r,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,r.focus(),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.activeTabIndex=this.getActiveIndex()}}s([a({mode:"boolean"})],Po.prototype,"disabled",void 0);s([a],Po.prototype,"orientation",void 0);s([a],Po.prototype,"activeid",void 0);s([B],Po.prototype,"tabs",void 0);class qi extends Po{constructor(){super(...arguments),this.activeTabData={x:0,y:0,height:0,width:0},this.previousActiveTabData={x:0,y:0,height:0,width:0},this.activeTabOffset=0,this.activeTabScale=1,this.appearance=Wn.transparent}appearanceChanged(e,t){m(this.elementInternals,e,t,Wn)}sizeChanged(e,t){m(this.elementInternals,e,t,$b)}calculateAnimationProperties(e){this.activeTabOffset=this.getTabPosition(e),this.activeTabScale=this.getTabScale(e)}getTabPosition(e){return this.orientation===At.horizontal?this.previousActiveTabData.x-(e.getBoundingClientRect().x-this.getBoundingClientRect().x):this.previousActiveTabData.y-(e.getBoundingClientRect().y-this.getBoundingClientRect().y)}getTabScale(e){return this.orientation===At.horizontal?this.previousActiveTabData.width/e.getBoundingClientRect().width:this.previousActiveTabData.height/e.getBoundingClientRect().height}applyUpdatedCSSValues(e){this.calculateAnimationProperties(e),this.setAnimationVars()}animationLoop(e){e.setAttribute("data-animate","false"),this.applyUpdatedCSSValues(e),this.previousActiveTabData=this.activeTabData,this.applyUpdatedCSSValues(e),e.setAttribute("data-animate","true")}setTabData(){var e,t,r,i;if(this.tabs&&this.tabs.length>0){const n=this.tabs,l=this.activetab||n[0],c=l==null?void 0:l.getBoundingClientRect(),p=this.getBoundingClientRect();this.activeTabData={x:c.x-p.x,y:c.y-p.y,height:c.height,width:c.width},((e=this.previousActiveTabData)===null||e===void 0?void 0:e.x)!==((t=this.activeTabData)===null||t===void 0?void 0:t.x)&&((r=this.previousActiveTabData)===null||r===void 0?void 0:r.y)!==((i=this.activeTabData)===null||i===void 0?void 0:i.y)&&(this.previousActiveTabData=this.activeTabData)}}setAnimationVars(){this.style.setProperty("--tabIndicatorOffset",`${this.activeTabOffset}px`),this.style.setProperty("--tabIndicatorScale",`${this.activeTabScale}`)}activeidChanged(e,t){super.activeidChanged(e,t),this.setTabData(),this.activetab&&this.animationLoop(this.activetab)}tabsChanged(){super.tabsChanged(),this.setTabData(),this.activetab&&this.animationLoop(this.activetab)}}s([a],qi.prototype,"appearance",void 0);s([a],qi.prototype,"size",void 0);const kb=f`
  <template role="tablist">
    <slot name="tab" ${se("tabs")}></slot>
  </template>
`,yb=b`
  ${P("flex")}

  :host {
    --tabPaddingInline: inherit;
    --tabPaddingBlock: inherit;
    --tabIndicatorInsetInline: 0;
    --tabIndicatorInsetBlock: 0;
    box-sizing: border-box;
    color: ${je};
    flex-direction: row;
  }

  :host(${I}) {
    flex-direction: column;
  }

  :host ::slotted([role='tab']) {
    align-items: flex-start;
  }

  /* indicator animation  */
  :host ::slotted([slot='tab'][data-animate='true'])::after {
    transition-property: transform;
    transition-duration: ${ra};
    transition-timing-function: ${Mi};
  }

  :host ::slotted([slot='tab'])::after {
    height: ${re};
    margin-block-start: auto;
    transform-origin: left;
    transform: translateX(var(--tabIndicatorOffset)) scaleX(var(--tabIndicatorScale));
  }

  :host(${I}) ::slotted([slot='tab'])::after {
    width: ${re};
    height: unset;
    margin-block-start: unset;
    transform-origin: top;
    transform: translateY(var(--tabIndicatorOffset)) scaleY(var(--tabIndicatorScale));
  }

  /* ::before adds a secondary indicator placeholder that appears right after click on the active tab */
  :host ::slotted([slot='tab'])::before {
    height: ${re};
    border-radius: ${ke};
    content: '';
    inset-inline: var(--tabIndicatorInsetInline);
    inset-block: var(--tabIndicatorInsetBlock);
    position: absolute;
    margin-top: auto;
  }

  :host ::slotted([slot='tab'])::before {
    inset-inline: var(--tabIndicatorInsetInline);
    inset-block: var(--tabIndicatorInsetBlock);
  }

  :host ::slotted([slot='tab'][aria-selected='true'])::before {
    background-color: ${M};
  }

  :host ::slotted([slot='tab'][aria-selected='false']:hover)::after {
    height: ${re};
    margin-block-start: auto;
    transform-origin: left;
  }

  :host(${I}) ::slotted([slot='tab'])::before,
  :host(${I}) ::slotted([slot='tab'][aria-selected='false']:hover)::after {
    height: unset;
    width: ${re};
    margin-inline-end: auto;
    transform-origin: top;
  }

  :host(:where(${E}, ${T})) ::slotted([slot='tab']) {
    padding-inline: var(--tabPaddingInline);
    padding-block: var(--tabPaddingBlock);
  }

  :host(${E}) ::slotted([slot='tab']) {
    --tabPaddingBlock: ${gt};
    --tabPaddingInline: ${xe};
    font-size: ${O};
    line-height: ${W};
  }

  :host(${T}) ::slotted([slot='tab']) {
    --tabPaddingBlock: ${Fr};
    --tabPaddingInline: ${be};
    font-size: ${ue};
    line-height: ${Be};
  }

  /* horizontal spacing for indicator */
  :host ::slotted([slot='tab'])::after,
  :host ::slotted([slot='tab'])::before,
  :host ::slotted([slot='tab']:hover)::after {
    inset-inline: var(--tabIndicatorInsetInline);
  }

  :host ::slotted([slot='tab']) {
    --tabIndicatorInsetInline: ${be};
  }

  :host(${E}) ::slotted([slot='tab']) {
    --tabIndicatorInsetInline: ${xe};
  }

  :host(${T}) ::slotted([slot='tab']) {
    --tabIndicatorInsetInline: ${be};
  }

  :host(${I}) ::slotted([slot='tab']) {
    padding-block: var(--tabPaddingBlock);
  }

  :host(${I}) ::slotted([slot='tab']) {
    --tabPaddingBlock: ${ie};
  }

  :host(${I}${E}) ::slotted([slot='tab']) {
    --tabPaddingBlock: ${yo};
  }

  :host(${I}${T}) ::slotted([slot='tab']) {
    --tabPaddingBlock: ${ie};
  }

  :host(${I}) ::slotted([slot='tab'])::after,
  :host(${I}) ::slotted([slot='tab'])::before,
  :host(${I}) ::slotted([slot='tab']:hover)::after {
    inset-inline: 0;
    inset-block: var(--tabIndicatorInsetBlock);
  }

  :host(${I}) {
    --tabIndicatorInsetBlock: ${ie};
  }

  :host(${I}${E}) {
    --tabIndicatorInsetBlock: ${gt};
  }

  :host(${I}${T}) {
    --tabIndicatorInsetBlock: ${Mt};
  }

  /* disabled styles */
  :host(${V}) {
    cursor: not-allowed;
    color: ${M};
  }

  :host(${V}) ::slotted([slot='tab']) {
    pointer-events: none;
    cursor: not-allowed;
    color: ${M};
  }

  :host(${V}) ::slotted([slot='tab']:after) {
    background-color: ${M};
  }

  :host(${V}) ::slotted([slot='tab'][aria-selected='true'])::after {
    background-color: ${M};
  }

  :host(${V}) ::slotted([slot='tab']:hover):before {
    content: unset;
  }

  :host(${A}) ::slotted([slot='tab']:hover) {
    background-color: ${wr};
    color: ${wi};
    fill: ${Ss};
  }

  :host(${A}) ::slotted([slot='tab']:active) {
    background-color: ${_t};
    fill: ${_t};
    color: ${L};
  }
`,xb=qi.compose({name:`${x.prefix}-tablist`,template:kb,styles:yb}),Sb={small:"small",medium:"medium",large:"large"},co={outline:"outline",filledLighter:"filled-lighter",filledDarker:"filled-darker"},wb=[co.filledLighter,co.filledDarker],Oo={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};class Q extends z{defaultSlottedNodesChanged(){const e=this.getContent();this.defaultValue=e,this.value=e}labelSlottedNodesChanged(){this.labelEl&&(this.labelEl.hidden=!this.labelSlottedNodes.length),this.labelSlottedNodes.forEach(e=>{e.disabled=this.disabled,e.required=this.required})}autoResizeChanged(){this.maybeCreateAutoSizerEl(),y(this.elementInternals,"auto-resize",this.autoResize)}disabledChanged(){this.setDisabledSideEffect(this.disabled)}get form(){return this.elementInternals.form}get labels(){return this.elementInternals.labels}readOnlyChanged(){this.elementInternals.ariaReadOnly=`${!!this.readOnly}`}requiredChanged(){var e;this.elementInternals.ariaRequired=`${!!this.required}`,!((e=this.labelSlottedNodes)===null||e===void 0)&&e.length&&this.labelSlottedNodes.forEach(t=>t.required=this.required)}resizeChanged(e,t){m(this.elementInternals,e,t,Oo,"resize-"),y(this.elementInternals,"resize",Si(Oo,t)&&t!==Oo.none)}get textLength(){return this.controlEl.textLength}get type(){return"textarea"}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage||this.controlEl.validationMessage}get willValidate(){return this.elementInternals.willValidate}get defaultValue(){var e,t;return(t=(e=this.controlEl)===null||e===void 0?void 0:e.defaultValue)!==null&&t!==void 0?t:this.preConnectControlEl.defaultValue}set defaultValue(e){var t;const r=(t=this.controlEl)!==null&&t!==void 0?t:this.preConnectControlEl;r.defaultValue=e,this.controlEl&&!this.userInteracted&&(this.controlEl.value=e)}get value(){var e,t;return(t=(e=this.controlEl)===null||e===void 0?void 0:e.value)!==null&&t!==void 0?t:this.preConnectControlEl.value}set value(e){var t;const r=(t=this.controlEl)!==null&&t!==void 0?t:this.preConnectControlEl;r.value=e,this.setFormValue(e),this.setValidity()}constructor(){super(),this.elementInternals=this.attachInternals(),this.userInteracted=!1,this.preConnectControlEl=document.createElement("textarea"),this.autoResize=!1,this.disabled=!1,this.displayShadow=!1,this.readOnly=!1,this.required=!1,this.resize=Oo.none,this.spellcheck=!1}connectedCallback(){super.connectedCallback(),this.setDefaultValue(),this.maybeCreateAutoSizerEl(),this.bindEvents(),this.observeControlElAttrs()}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.autoSizerObserver)===null||e===void 0||e.disconnect(),(t=this.controlElAttrObserver)===null||t===void 0||t.disconnect()}formResetCallback(){this.value=this.defaultValue}formDisabledCallback(e){this.setDisabledSideEffect(e),this.setValidity()}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}checkValidity(){return this.elementInternals.checkValidity()}reportValidity(){return this.elementInternals.reportValidity()}setCustomValidity(e){this.elementInternals.setValidity({customError:!!e},e?e.toString():void 0),this.reportValidity()}setValidity(e,t,r){this.$fastController.isConnected&&(this.disabled||this.readOnly?this.elementInternals.setValidity({}):this.elementInternals.setValidity(e??this.controlEl.validity,t??this.controlEl.validationMessage,r??this.controlEl),this.userInteracted&&this.toggleUserValidityState())}select(){this.controlEl.select()}setDefaultValue(){this.defaultValue=this.innerHTML.trim()||this.preConnectControlEl.defaultValue||"",this.value=this.preConnectControlEl.value||this.defaultValue,this.setFormValue(this.value),this.setValidity(),this.preConnectControlEl=null}bindEvents(){this.controlEl.addEventListener("input",()=>this.userInteracted=!0,{once:!0})}getContent(){return this.defaultSlottedNodes.map(e=>{switch(e.nodeType){case Node.ELEMENT_NODE:return e.outerHTML;case Node.TEXT_NODE:return e.textContent.trim();default:return""}}).join("")||""}observeControlElAttrs(){this.controlElAttrObserver=new MutationObserver(()=>{this.setValidity()}),this.controlElAttrObserver.observe(this.controlEl,{attributes:!0,attributeFilter:["disabled","required","readonly","maxlength","minlength"]})}setDisabledSideEffect(e){var t;this.elementInternals.ariaDisabled=`${e}`,this.controlEl&&(this.controlEl.disabled=e),!((t=this.labelSlottedNodes)===null||t===void 0)&&t.length&&this.labelSlottedNodes.forEach(r=>r.disabled=this.disabled)}toggleUserValidityState(){y(this.elementInternals,"user-invalid",!this.validity.valid),y(this.elementInternals,"user-valid",this.validity.valid)}maybeCreateAutoSizerEl(){var e,t;if(!CSS.supports("field-sizing: content")){if(!this.autoResize){(e=this.autoSizerEl)===null||e===void 0||e.remove(),(t=this.autoSizerObserver)===null||t===void 0||t.disconnect();return}this.autoSizerEl||(this.autoSizerEl=document.createElement("div"),this.autoSizerEl.classList.add("auto-sizer"),this.autoSizerEl.ariaHidden="true"),this.shadowRoot.prepend(this.autoSizerEl),this.autoSizerObserver||(this.autoSizerObserver=new ResizeObserver((r,i)=>{var n;const l=window.getComputedStyle(this).writingMode.startsWith("horizontal")?"height":"width";this.style.getPropertyValue(l)!==""&&((n=this.autoSizerEl)===null||n===void 0||n.remove(),i.disconnect())})),this.autoSizerObserver.observe(this)}}handleControlInput(){this.autoResize&&this.autoSizerEl&&(this.autoSizerEl.textContent=this.value+" "),this.setFormValue(this.value),this.setValidity()}handleControlChange(){this.toggleUserValidityState(),this.$emit("change")}handleControlSelect(){this.$emit("select")}}Q.formAssociated=!0;s([B],Q.prototype,"defaultSlottedNodes",void 0);s([B],Q.prototype,"labelSlottedNodes",void 0);s([a],Q.prototype,"autocomplete",void 0);s([a({attribute:"auto-resize",mode:"boolean"})],Q.prototype,"autoResize",void 0);s([a({attribute:"dirname"})],Q.prototype,"dirName",void 0);s([a({mode:"boolean"})],Q.prototype,"disabled",void 0);s([a({attribute:"display-shadow",mode:"boolean"})],Q.prototype,"displayShadow",void 0);s([a({attribute:"form"})],Q.prototype,"initialForm",void 0);s([a({attribute:"maxlength",converter:le})],Q.prototype,"maxLength",void 0);s([a({attribute:"minlength",converter:le})],Q.prototype,"minLength",void 0);s([a],Q.prototype,"name",void 0);s([a],Q.prototype,"placeholder",void 0);s([a({attribute:"readonly",mode:"boolean"})],Q.prototype,"readOnly",void 0);s([a({mode:"boolean"})],Q.prototype,"required",void 0);s([a({mode:"fromView"})],Q.prototype,"resize",void 0);s([a({mode:"boolean"})],Q.prototype,"spellcheck",void 0);class Or extends Q{constructor(){super(...arguments),this.appearance=co.outline,this.block=!1}labelSlottedNodesChanged(){super.labelSlottedNodesChanged(),this.labelSlottedNodes.forEach(e=>{e.size=this.size})}appearanceChanged(e,t){y(this.elementInternals,e,!1),Si(co,t)?y(this.elementInternals,t,!0):this.appearance=co.outline}blockChanged(){y(this.elementInternals,"block",this.block)}sizeChanged(e,t){m(this.elementInternals,e,t,Sb)}handleChange(e,t){switch(t){case"size":this.labelSlottedNodes.forEach(r=>{r.size=this.size});break;case"appearance":case"displayShadow":this.maybeDisplayShadow();break}}connectedCallback(){super.connectedCallback(),this.maybeDisplayShadow(),v.getNotifier(this).subscribe(this,"appearance"),v.getNotifier(this).subscribe(this,"displayShadow"),v.getNotifier(this).subscribe(this,"size")}disconnectedCallback(){super.disconnectedCallback(),v.getNotifier(this).unsubscribe(this,"appearance"),v.getNotifier(this).unsubscribe(this,"displayShadow"),v.getNotifier(this).unsubscribe(this,"size")}maybeDisplayShadow(){y(this.elementInternals,"display-shadow",this.displayShadow&&wb.includes(this.appearance))}}s([a({mode:"fromView"})],Or.prototype,"appearance",void 0);s([a({mode:"boolean"})],Or.prototype,"block",void 0);s([a],Or.prototype,"size",void 0);const Bb=b`
  ${P("inline-block")}

  :host {
    /* typography */
    --font-size: ${O};
    --line-height: ${W};

    /* layout */
    --padding-inline: ${be};
    --padding-block: ${gt};
    --min-block-size: 52px;
    --block-size: var(--min-block-size);
    --inline-size: 18rem;
    --border-width: ${X};
    --control-padding-inline: ${he};

    /* colors */
    --color: ${L};
    --background-color: ${j};
    --border-color: ${rt};
    --border-block-end-color: ${ft};
    --placeholder-color: ${xs};
    --focus-indicator-color: ${Bo};

    /* elevations */
    --box-shadow: none;

    /* others */
    --contain-size: size;
    --resize: none;

    color: var(--color);
    font-family: ${S};
    font-size: var(--font-size);
    font-weight: ${R};
    line-height: var(--line-height);
    position: relative;
  }

  :host(:hover) {
    --border-color: ${wo};
    --border-block-end-color: ${Rt};
  }

  :host(:active) {
    --border-color: ${Br};
    --border-block-end-color: ${jt};
  }

  :host(:focus-within) {
    outline: none;
  }

  :host(${po}:not([hidden])) {
    display: block;
  }

  :host(${E}) {
    --font-size: ${G};
    --line-height: ${ae};
    --min-block-size: 40px;
    --padding-block: ${li};
    --padding-inline: ${xe};
    --control-padding-inline: ${he};
  }

  :host(${T}) {
    --font-size: ${ue};
    --line-height: ${Be};
    --min-block-size: 64px;
    --padding-block: ${ie};
    --padding-inline: ${me};
    --control-padding-inline: ${xe};
  }

  :host(${xd}:not(:disabled)) {
    --resize: both;
  }

  :host(${Sd}:not(:disabled)) {
    --resize: horizontal;
  }

  :host(${wd}:not(:disabled)) {
    --resize: vertical;
  }

  :host(${Nn}) {
    --block-size: auto;
    --contain-size: inline-size;
  }

  :host(${Ft}) {
    --background-color: ${or};
    --border-color: var(--background-color);
    --border-block-end-color: var(--border-color);
  }

  :host(${Pt}) {
    --border-color: var(--background-color);
    --border-block-end-color: var(--border-color);
  }

  :host(${Ft}${Tn}),
  :host(${Pt}${Tn}) {
    --box-shadow: ${Ai};
  }

  :host(${jd}) {
    --border-color: ${si};
    --border-block-end-color: ${si};
  }

  :host(:disabled) {
    --color: ${M};
    --background-color: ${Ne};
    --border-color: ${Fe};
    --border-block-end-color: var(--border-color);
    --box-shadow: none;
    --placeholder-color: ${M};

    cursor: no-drop;
    user-select: none;
  }

  .root {
    background-color: var(--background-color);
    border: var(--border-width) solid var(--border-color);
    border-block-end-color: var(--border-block-end-color);
    border-radius: ${H};
    box-sizing: border-box;
    box-shadow: var(--box-shadow);
    contain: paint layout style var(--contain-size);
    display: grid;
    grid-template: 1fr / 1fr;
    inline-size: var(--inline-size);
    min-block-size: var(--min-block-size);
    block-size: var(--block-size);
    overflow: hidden;
    padding: var(--padding-block) var(--padding-inline);
    position: relative;
    resize: var(--resize);
  }

  :host(${po}) .root {
    inline-size: auto;
  }

  .root::after {
    border-bottom: 2px solid var(--focus-indicator-color);
    border-radius: 0 0 ${H} ${H};
    box-sizing: border-box;
    clip-path: inset(calc(100% - 2px) 1px 0px);
    content: '';
    height: max(2px, ${H});
    inset: auto -1px 0;
    position: absolute;
    transform: scaleX(0);
    transition-delay: ${qt};
    transition-duration: ${oa};
    transition-property: transform;
  }

  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${Ei};
    transition-delay: ${Wt};
  }

  :host([readonly]) .root::after,
  :host(:disabled) .root::after {
    content: none;
  }

  label {
    color: var(--color);
    display: flex;
    inline-size: fit-content;
    padding-block-end: ${li};
    padding-inline-end: ${Xe};
  }

  :host(:empty) label,
  label[hidden] {
    display: none;
  }

  .auto-sizer,
  .control {
    box-sizing: border-box;
    font: inherit;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    letter-space: inherit;
    padding: 0 var(--control-padding-inline);
  }

  .auto-sizer {
    display: none;
    padding-block-end: 2px; /* avoid scroll bar in Firefox */
    pointer-events: none;
    visibility: hidden;
    white-space: pre-wrap;
  }

  :host(${Nn}) .auto-sizer {
    display: block;
  }

  .control {
    appearance: none;
    background-color: transparent;
    border: 0;
    color: inherit;
    field-sizing: content;
    max-block-size: 100%;
    outline: 0;
    resize: none;
    text-align: inherit;
  }

  .control:disabled {
    cursor: inherit;
  }

  .control::placeholder {
    color: var(--placeholder-color);
  }

  ::selection {
    color: ${Gt};
    background-color: ${Cs};
  }
`.withBehaviors(te(b`
    :host {
      --border-color: FieldText;
      --border-block-end-color: FieldText;
      --focus-indicator-color: Highlight;
      --placeholder-color: FieldText;
    }

    :host(:hover),
    :host(:active),
    :host(:focus-within) {
      --border-color: Highlight;
      --border-block-end-color: Highlight;
    }

    :host(:disabled) {
      --color: GrayText;
      --border-color: GrayText;
      --border-block-end-color: GrayText;
      --placeholder-color: GrayText;
    }
  `));function Cb(){return f`
    <template>
      <label ${Se("labelEl")} for="control" part="label">
        <slot
          name="label"
          ${se({property:"labelSlottedNodes",filter:ti})}
        ></slot>
      </label>
      <div class="root" part="root">
        <textarea
          ${Se("controlEl")}
          id="control"
          class="control"
          part="control"
          ?required="${o=>o.required}"
          ?disabled="${o=>o.disabled}"
          ?readonly="${o=>o.readOnly}"
          ?spellcheck="${o=>o.spellcheck}"
          autocomplete="${o=>o.autocomplete}"
          maxlength="${o=>o.maxLength}"
          minlength="${o=>o.minLength}"
          placeholder="${o=>o.placeholder}"
          @change="${o=>o.handleControlChange()}"
          @select="${o=>o.handleControlSelect()}"
          @input="${o=>o.handleControlInput()}"
        ></textarea>
      </div>
      <div hidden>
        <slot
          ${se({property:"defaultSlottedNodes",filter:ti})}
        ></slot>
      </div>
    </template>
  `}const Ib=Cb(),Nb=Or.compose({name:`${x.prefix}-textarea`,template:Ib,styles:Bb,shadowOptions:{delegatesFocus:!0}}),Tb={small:"small",medium:"medium",large:"large"},zb={outline:"outline",underline:"underline",filledLighter:"filled-lighter",filledDarker:"filled-darker"},Fb={email:"email",password:"password",tel:"tel",text:"text",url:"url"},Pb=["date","datetime-local","email","month","number","password","search","tel","text","time","url","week"];class q extends z{constructor(){super(...arguments),this.type=Fb.text,this._value=this.initialValue,this.dirtyValue=!1,this.elementInternals=this.attachInternals()}defaultSlottedNodesChanged(e,t){this.$fastController.isConnected&&(this.controlLabel.hidden=!(t!=null&&t.length))}initialValueChanged(){this.dirtyValue||(this.value=this.initialValue)}readOnlyChanged(){this.$fastController.isConnected&&(this.elementInternals.ariaReadOnly=`${!!this.readOnly}`)}requiredChanged(e,t){this.$fastController.isConnected&&(this.elementInternals.ariaRequired=`${!!t}`)}get validity(){return this.elementInternals.validity}get validationMessage(){return this.elementInternals.validationMessage||this.control.validationMessage}get value(){return v.track(this,"value"),this._value}set value(e){this._value=e,this.$fastController.isConnected&&(this.control.value=e,this.setFormValue(e),this.setValidity(),v.notify(this,"value"))}get willValidate(){return this.elementInternals.willValidate}get form(){return this.elementInternals.form}beforeinputHandler(e){return e.inputType==="insertLineBreak"&&this.implicitSubmit(),!0}changeHandler(e){return this.setValidity(),this.$emit("change",e,{bubbles:!0,composed:!0}),!0}checkValidity(){return this.elementInternals.checkValidity()}clickHandler(e){var t;return e.target===this&&((t=this.control)===null||t===void 0||t.click()),!0}connectedCallback(){super.connectedCallback(),this.setFormValue(this.value),this.setValidity()}focusinHandler(e){var t;return e.target===this&&((t=this.control)===null||t===void 0||t.focus()),!0}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}implicitSubmit(){if(!this.elementInternals.form)return;if(this.elementInternals.form.elements.length===1){this.elementInternals.form.requestSubmit();return}const e=[...this.elementInternals.form.elements],t=e.find(i=>i.getAttribute("type")==="submit");if(t){t.click();return}e.filter(i=>{var n;return Pb.includes((n=i.getAttribute("type"))!==null&&n!==void 0?n:"")}).length>1||this.elementInternals.form.requestSubmit()}inputHandler(e){return this.dirtyValue=!0,this.value=this.control.value,!0}keydownHandler(e){return e.key==="Enter"&&this.implicitSubmit(),!0}select(){this.control.select(),this.$emit("select")}setCustomValidity(e){this.elementInternals.setValidity({customError:!0},e),this.reportValidity()}reportValidity(){return this.elementInternals.reportValidity()}setFormValue(e,t){this.elementInternals.setFormValue(e,e??t)}setValidity(e=this.control.validity,t=this.validationMessage,r=this.control){if(this.$fastController.isConnected){if(this.disabled){this.elementInternals.setValidity({});return}this.elementInternals.setValidity(e,t,r)}}}q.formAssociated=!0;s([a],q.prototype,"autocomplete",void 0);s([a({mode:"boolean"})],q.prototype,"autofocus",void 0);s([B],q.prototype,"defaultSlottedNodes",void 0);s([a],q.prototype,"dirname",void 0);s([a({mode:"boolean"})],q.prototype,"disabled",void 0);s([a({attribute:"form"})],q.prototype,"formAttribute",void 0);s([a({attribute:"value",mode:"fromView"})],q.prototype,"initialValue",void 0);s([a],q.prototype,"list",void 0);s([a({converter:le})],q.prototype,"maxlength",void 0);s([a({converter:le})],q.prototype,"minlength",void 0);s([a({mode:"boolean"})],q.prototype,"multiple",void 0);s([a],q.prototype,"name",void 0);s([a],q.prototype,"pattern",void 0);s([a],q.prototype,"placeholder",void 0);s([a({attribute:"readonly",mode:"boolean"})],q.prototype,"readOnly",void 0);s([a({mode:"boolean"})],q.prototype,"required",void 0);s([a({converter:le})],q.prototype,"size",void 0);s([a({converter:{fromView:o=>typeof o=="string"?["true",""].includes(o.trim().toLowerCase()):null,toView:o=>o.toString()}})],q.prototype,"spellcheck",void 0);s([a],q.prototype,"type",void 0);s([B],q.prototype,"controlLabel",void 0);class _r extends q{appearanceChanged(e,t){m(this.elementInternals,e,t,zb)}controlSizeChanged(e,t){m(this.elementInternals,e,t,Tb)}}s([a],_r.prototype,"appearance",void 0);s([a({attribute:"control-size"})],_r.prototype,"controlSize",void 0);st(_r,it);const Ab=b`
  ${P("block")}

  :host {
    font-family: ${S};
    font-size: ${O};
    font-weight: ${R};
    line-height: ${W};
    max-width: 400px;
  }
  .label {
    display: flex;
    color: ${L};
    padding-bottom: ${li};
    flex-shrink: 0;
    padding-inline-end: ${Xe};
  }

  .label[hidden],
  :host(:empty) .label {
    display: none;
  }

  .root {
    align-items: center;
    background-color: ${j};
    border: ${X} solid ${rt};
    border-bottom-color: ${ft};
    border-radius: ${H};
    box-sizing: border-box;
    height: 32px;
    display: inline-flex;
    flex-direction: row;
    gap: ${he};
    padding: 0 ${be};
    position: relative;
    width: 100%;
  }

  :has(.control:user-invalid) {
    border-color: ${si};
  }

  .root::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: -1px;
    bottom: 0px;
    right: -1px;
    height: max(2px, ${H});
    border-radius: 0 0 ${H} ${H};
    border-bottom: 2px solid ${Bo};
    clip-path: inset(calc(100% - 2px) 1px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: ${oa};
    transition-delay: ${qt};
  }
  .control {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${L};
    border-radius: ${H};
    background: ${Ne};
    font-family: ${S};
    font-weight: ${R};
    font-size: ${O};
    border: none;
    vertical-align: center;
  }
  .control:focus-visible {
    outline: 0;
    border: 0;
  }
  .control::placeholder {
    color: ${xs};
  }
  :host ::slotted([slot='start']),
  :host ::slotted([slot='end']) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ve};
    font-size: ${Yt};
  }
  :host ::slotted([slot='start']) {
    padding-right: ${he};
  }
  :host ::slotted([slot='end']) {
    padding-left: ${he};
    gap: ${Xe};
  }
  :host(:hover) .root {
    border-color: ${wo};
    border-bottom-color: ${Rt};
  }
  :host(:active) .root {
    border-color: ${Br};
  }
  :host(:focus-within) .root {
    outline: transparent solid 2px;
    border-bottom: 0;
  }
  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${Ei};
    transition-delay: ${Wt};
  }
  :host(:focus-within:active) .root:after {
    border-bottom-color: ${zs};
  }
  :host(${Y}:focus-within) .root {
    border: ${X} solid ${rt};
  }
  :host(:focus-within) .control {
    color: ${L};
  }
  :host([disabled]) .root {
    background: ${Ne};
    border: ${X} solid ${Fe};
  }
  :host([disabled]) .control::placeholder,
  :host([disabled]) ::slotted([slot='start']),
  :host([disabled]) ::slotted([slot='end']) {
    color: ${M};
  }
  ::selection {
    color: ${Gt};
    background-color: ${Cs};
  }
  :host(${E}) .control {
    font-size: ${G};
    font-weight: ${R};
    line-height: ${ae};
  }
  :host(${E}) .root {
    height: 24px;
    gap: ${he};
    padding: 0 ${xe};
  }
  :host(${E}) ::slotted([slot='start']),
  :host(${E}) ::slotted([slot='end']) {
    font-size: ${ue};
  }
  :host(${T}) .control {
    font-size: ${ue};
    font-weight: ${R};
    line-height: ${Be};
  }
  :host(${T}) .root {
    height: 40px;
    gap: ${ot};
    padding: 0 ${me};
  }
  :host(${T}) ::slotted([slot='start']),
  :host(${T}) ::slotted([slot='end']) {
    font-size: ${Cr};
  }
  :host(${yt}) .root {
    background: ${Ne};
    border: 0;
    border-radius: 0;
    border-bottom: ${X} solid ${ft};
  }
  :host(${yt}:hover) .root {
    border-bottom-color: ${Rt};
  }
  :host(${yt}:active) .root {
    border-bottom-color: ${jt};
  }
  :host(${yt}:focus-within) .root {
    border: 0;
    border-bottom-color: ${jt};
  }
  :host(${yt}[disabled]) .root {
    border-bottom-color: ${Fe};
  }
  :host(${Pt}) .root,
  :host(${Ft}) .root {
    border: ${X} solid ${$e};
    box-shadow: ${Ai};
  }
  :host(${Pt}) .root {
    background: ${j};
  }
  :host(${Ft}) .root {
    background: ${or};
  }
  :host(${Pt}:hover) .root,
  :host(${Ft}:hover) .root {
    border-color: ${Hn};
  }
  :host(${Pt}:active) .root,
  :host(${Ft}:active) .root {
    border-color: ${Hn};
    background: ${or};
  }
`;function Eb(o={}){return f`
    <template
      @beforeinput="${(e,t)=>e.beforeinputHandler(t.event)}"
      @focusin="${(e,t)=>e.focusinHandler(t.event)}"
      @keydown="${(e,t)=>e.keydownHandler(t.event)}"
    >
      <label part="label" for="control" class="label" ${Se("controlLabel")}>
        <slot
          ${se({property:"defaultSlottedNodes",filter:ti})}
        ></slot>
      </label>
      <div class="root" part="root">
        ${nt(o)}
        <input
          class="control"
          part="control"
          id="control"
          @change="${(e,t)=>e.changeHandler(t.event)}"
          @input="${(e,t)=>e.inputHandler(t.event)}"
          ?autofocus="${e=>e.autofocus}"
          autocomplete="${e=>e.autocomplete}"
          ?disabled="${e=>e.disabled}"
          list="${e=>e.list}"
          maxlength="${e=>e.maxlength}"
          minlength="${e=>e.minlength}"
          ?multiple="${e=>e.multiple}"
          name="${e=>e.name}"
          pattern="${e=>e.pattern}"
          placeholder="${e=>e.placeholder}"
          ?readonly="${e=>e.readOnly}"
          ?required="${e=>e.required}"
          size="${e=>e.size}"
          spellcheck="${e=>e.spellcheck}"
          type="${e=>e.type}"
          value="${e=>e.initialValue}"
          ${Se("control")}
        />
        ${mt(o)}
      </div>
    </template>
  `}const Mb=Eb(),Hb=_r.compose({name:`${x.prefix}-text-input`,template:Mb,styles:Ab,shadowOptions:{delegatesFocus:!0}}),Lb={_100:"100",_200:"200",_300:"300",_400:"400",_500:"500",_600:"600",_700:"700",_800:"800",_900:"900",_1000:"1000"},Vb={base:"base",numeric:"numeric",monospace:"monospace"},Ob={medium:"medium",regular:"regular",semibold:"semibold",bold:"bold"},_b={start:"start",end:"end",center:"center",justify:"justify"};class He extends z{constructor(){super(...arguments),this.elementInternals=this.attachInternals(),this.nowrap=!1,this.truncate=!1,this.italic=!1,this.underline=!1,this.strikethrough=!1,this.block=!1}sizeChanged(e,t){m(this.elementInternals,e,t,Lb,"size-")}fontChanged(e,t){m(this.elementInternals,e,t,Vb)}weightChanged(e,t){m(this.elementInternals,e,t,Ob)}alignChanged(e,t){m(this.elementInternals,e,t,_b)}connectedCallback(){super.connectedCallback(),v.getNotifier(this).subscribe(this),Object.keys(this.$fastController.definition.attributeLookup).forEach(e=>{this.handleChange(this,e)})}disconnectedCallback(){super.disconnectedCallback(),v.getNotifier(this).unsubscribe(this)}handleChange(e,t){switch(t){case"nowrap":case"truncate":case"italic":case"underline":case"strikethrough":case"block":y(this.elementInternals,t,!!this[t]);break}}}s([a({mode:"boolean"})],He.prototype,"nowrap",void 0);s([a({mode:"boolean"})],He.prototype,"truncate",void 0);s([a({mode:"boolean"})],He.prototype,"italic",void 0);s([a({mode:"boolean"})],He.prototype,"underline",void 0);s([a({mode:"boolean"})],He.prototype,"strikethrough",void 0);s([a({mode:"boolean"})],He.prototype,"block",void 0);s([a],He.prototype,"size",void 0);s([a],He.prototype,"font",void 0);s([a],He.prototype,"weight",void 0);s([a],He.prototype,"align",void 0);const Db=f`<slot></slot>`,Rb=b`
  ${P("inline")}

  :host {
    contain: content;
    font-family: ${S};
    font-size: ${O};
    line-height: ${W};
    font-weight: ${R};
    text-align: start;
  }

  :host(${Pn}),
  :host(${Pn}) ::slotted(*) {
    white-space: nowrap;
    overflow: hidden;
  }
  :host(${En}),
  :host(${En}) ::slotted(*) {
    text-overflow: ellipsis;
  }
  :host(${po}) {
    display: block;
  }
  :host(${ed}) {
    font-style: italic;
  }
  :host(${yt}) {
    text-decoration-line: underline;
  }
  :host(${An}) {
    text-decoration-line: line-through;
  }
  :host(${yt}${An}) {
    text-decoration-line: line-through underline;
  }
  :host(${Td}) {
    font-size: ${Co};
    line-height: ${Nr};
  }
  :host(${zd}) {
    font-size: ${G};
    line-height: ${ae};
  }
  :host(${Fd}) {
    font-size: ${ue};
    line-height: ${Be};
  }
  :host(${Pd}) {
    font-size: ${Yt};
    line-height: ${Tr};
  }
  :host(${Ad}) {
    font-size: ${Cr};
    line-height: ${Ks};
  }
  :host(${Ed}) {
    font-size: ${Ws};
    line-height: ${Ys};
  }
  :host(${Md}) {
    font-size: ${Xs};
    line-height: ${Qs};
  }
  :host(${Hd}) {
    font-size: ${Us};
    line-height: ${Zs};
  }
  :host(${Nd}) {
    font-size: ${Gs};
    line-height: ${Js};
  }
  :host(${dd}) {
    font-family: ${Ah};
  }
  :host(${hd}) {
    font-family: ${Eh};
  }
  :host(${ad}) {
    font-weight: ${Mh};
  }
  :host(${ys}) {
    font-weight: ${U};
  }
  :host(${Pl}) {
    font-weight: ${Ir};
  }
  :host(${Hl}) {
    text-align: center;
  }
  :host(${Rl}) {
    text-align: end;
  }
  :host(${td}) {
    text-align: justify;
  }

  ::slotted(*) {
    font: inherit;
    line-height: inherit;
    text-decoration-line: inherit;
    text-align: inherit;
    text-decoration-line: inherit;
    margin: 0;
  }
`,jb=He.compose({name:`${x.prefix}-text`,template:Db,styles:Rb}),qb="adoptedStyleSheets"in document,Wb="CSSScopeRule"in window,Kr=new Map,Yr=new Map,ho=new Map,Qr=new Map,so=new CSSStyleSheet;function ma(o,e=document){if(!(!e||!Xb(e))){if(!qb||e instanceof HTMLElement&&!e.shadowRoot&&!Wb){const t=e===document?document.documentElement:e;Qb(o,t);return}[document,document.documentElement,document.body].includes(e)?Ub(o):Gb(o,e)}}function Wi(o){if(!Kr.has(o)){const e=[];for(const[t,r]of Object.entries(o))e.push(`--${t}:${r.toString()};`);Kr.set(o,e.join(""))}return Kr.get(o)}function Xb(o){return[document,document.documentElement].includes(o)||o instanceof HTMLElement&&!!o.closest("body")}function Ub(o){if(o===null){document.adoptedStyleSheets.includes(so)&&so.replaceSync("");return}so.replaceSync(`
    html {
      ${Wi(o)}
    }
  `),document.adoptedStyleSheets.includes(so)||document.adoptedStyleSheets.push(so)}function Gb(o,e){if(o===null){e.shadowRoot&&ho.has(e)?ho.get(e).replaceSync(""):(delete e.dataset.fluentTheme,Xn(e));return}e.shadowRoot?Kb(e).replaceSync(`
      :host {
        ${Wi(o)}
      }
    `):(e.dataset.fluentTheme=Yb(o),Xn(e))}function Kb(o){var e;if(!ho.has(o)){const t=new CSSStyleSheet;ho.set(o,t),(e=o.shadowRoot)===null||e===void 0||e.adoptedStyleSheets.push(t)}return ho.get(o)}function Yb(o){if(!Yr.has(o)){const e=Ot("fluent-theme-"),t=new CSSStyleSheet;Yr.set(o,e),t.replaceSync(`
      @scope ([data-fluent-theme="${e}"]) {
        :scope {
          ${Wi(o)}
        }
      }
    `),document.adoptedStyleSheets.push(t)}return Yr.get(o)}function Qb(o,e){let t;if(o===null){if(!Qr.has(e))return;t=Qr.get(e)}else Qr.set(e,o),t=o;for(const[r,i]of Object.entries(t))o===null?e.style.removeProperty(`--${r}`):e.style.setProperty(`--${r}`,i.toString())}const{userAgent:Zb}=navigator,Jb=/\bAppleWebKit\/[\d+\.]+\b/.test(Zb);function Xn(o){if(!Jb)return;const e="visibility",t="hidden",r=o.style.getPropertyValue(e);o.style.setProperty(e,t),requestAnimationFrame(()=>{o.style.setProperty(e,r)})}class Xi extends at{pressedChanged(){this.setPressedState()}mixedChanged(){this.setPressedState()}press(){this.pressed=!this.pressed}connectedCallback(){super.connectedCallback(),this.setPressedState()}setPressedState(){if(this.$fastController.isConnected){const e=`${this.mixed?"mixed":!!this.pressed}`;this.elementInternals.ariaPressed=e,y(this.elementInternals,"pressed",!!this.pressed||!!this.mixed)}}}s([a({mode:"boolean"})],Xi.prototype,"pressed",void 0);s([a({mode:"boolean"})],Xi.prototype,"mixed",void 0);const e0=b`
  ${Er}

  :host(${_}) {
    border-color: ${rt};
    background-color: ${Bs};
    color: ${L};
    border-width: ${X};
  }

  :host(${_}:hover) {
    border-color: ${wo};
    background-color: ${Ci};
  }

  :host(${_}:active) {
    border-color: ${Br};
    background-color: ${Ii};
  }

  :host(${_}${ce}) {
    border-color: transparent;
    background-color: ${pc};
    color: ${tt};
  }

  :host(${_}${ce}:hover) {
    background-color: ${Is};
  }

  :host(${_}${ce}:active) {
    background-color: ${Ns};
  }

  :host(${_}${A}) {
    border-color: transparent;
    background-color: ${hc};
    color: ${Ud};
  }

  :host(${_}${A}:hover) {
    background-color: ${wr};
    color: ${xr};
  }

  :host(${_}${A}:active) {
    background-color: ${_t};
    color: ${Sr};
  }

  :host(${_}${Y}),
  :host(${_}${J}) {
    background-color: ${uc};
  }

  :host(${_}${Y}:hover),
  :host(${_}${J}:hover) {
    background-color: ${ri};
  }

  :host(${_}${Y}:active),
  :host(${_}${J}:active) {
    background-color: ${ii};
  }

  :host(${_}${J}) {
    border-color: transparent;
    color: ${Gd};
  }

  :host(${_}${J}:hover) {
    color: ${er};
  }

  :host(${_}${J}:active) {
    color: ${tr};
  }
`.withBehaviors(te(b`
    :host(${_}),
    :host(${_}${ce}),
    :host(${_}${A}),
    :host(${_}${Y}),
    :host(${_}${J}) {
      background: SelectedItem;
      color: SelectedItemText;
    }
  `)),t0=Oi(),o0=Xi.compose({name:`${x.prefix}-toggle-button`,template:t0,styles:e0}),u={2:"#050505",4:"#0a0a0a",6:"#0f0f0f",8:"#141414",10:"#1a1a1a",12:"#1f1f1f",14:"#242424",16:"#292929",18:"#2e2e2e",20:"#333333",22:"#383838",24:"#3d3d3d",26:"#424242",28:"#474747",30:"#4d4d4d",32:"#525252",34:"#575757",36:"#5c5c5c",38:"#616161",40:"#666666",42:"#6b6b6b",44:"#707070",46:"#757575",48:"#7a7a7a",50:"#808080",52:"#858585",54:"#8a8a8a",56:"#8f8f8f",58:"#949494",60:"#999999",62:"#9e9e9e",64:"#a3a3a3",66:"#a8a8a8",68:"#adadad",70:"#b3b3b3",72:"#b8b8b8",74:"#bdbdbd",76:"#c2c2c2",78:"#c7c7c7",80:"#cccccc",82:"#d1d1d1",84:"#d6d6d6",86:"#dbdbdb",88:"#e0e0e0",90:"#e6e6e6",92:"#ebebeb",94:"#f0f0f0",96:"#f5f5f5",98:"#fafafa"},oe={5:"rgba(255, 255, 255, 0.05)",10:"rgba(255, 255, 255, 0.1)",20:"rgba(255, 255, 255, 0.2)",30:"rgba(255, 255, 255, 0.3)",40:"rgba(255, 255, 255, 0.4)",50:"rgba(255, 255, 255, 0.5)",60:"rgba(255, 255, 255, 0.6)",70:"rgba(255, 255, 255, 0.7)",80:"rgba(255, 255, 255, 0.8)",90:"rgba(255, 255, 255, 0.9)"},Ie={5:"rgba(0, 0, 0, 0.05)",10:"rgba(0, 0, 0, 0.1)",20:"rgba(0, 0, 0, 0.2)",30:"rgba(0, 0, 0, 0.3)",40:"rgba(0, 0, 0, 0.4)",50:"rgba(0, 0, 0, 0.5)",60:"rgba(0, 0, 0, 0.6)",70:"rgba(0, 0, 0, 0.7)",80:"rgba(0, 0, 0, 0.8)",90:"rgba(0, 0, 0, 0.9)"},r0={5:"rgba(26, 26, 26, 0.05)",10:"rgba(26, 26, 26, 0.1)",20:"rgba(26, 26, 26, 0.2)",30:"rgba(26, 26, 26, 0.3)",40:"rgba(26, 26, 26, 0.4)",50:"rgba(26, 26, 26, 0.5)",60:"rgba(26, 26, 26, 0.6)",70:"rgba(26, 26, 26, 0.7)",80:"rgba(26, 26, 26, 0.8)",90:"rgba(26, 26, 26, 0.9)"},i0={5:"rgba(31, 31, 31, 0.05)",10:"rgba(31, 31, 31, 0.1)",20:"rgba(31, 31, 31, 0.2)",30:"rgba(31, 31, 31, 0.3)",40:"rgba(31, 31, 31, 0.4)",50:"rgba(31, 31, 31, 0.5)",60:"rgba(31, 31, 31, 0.6)",70:"rgba(31, 31, 31, 0.7)",80:"rgba(31, 31, 31, 0.8)",90:"rgba(31, 31, 31, 0.9)"},Un={5:"rgba(36, 36, 36, 0.05)",10:"rgba(36, 36, 36, 0.1)",20:"rgba(36, 36, 36, 0.2)",30:"rgba(36, 36, 36, 0.3)",40:"rgba(36, 36, 36, 0.4)",50:"rgba(36, 36, 36, 0.5)",60:"rgba(36, 36, 36, 0.6)",70:"rgba(36, 36, 36, 0.7)",80:"rgba(36, 36, 36, 0.8)",90:"rgba(36, 36, 36, 0.9)"},k="#ffffff",Wo="#000000",n0={shade50:"#130204",shade40:"#230308",shade30:"#420610",shade20:"#590815",shade10:"#690a19",primary:"#750b1c",tint10:"#861b2c",tint20:"#962f3f",tint30:"#ac4f5e",tint40:"#d69ca5",tint50:"#e9c7cd",tint60:"#f9f0f2"},va={shade50:"#200205",shade40:"#3b0509",shade30:"#6e0811",shade20:"#960b18",shade10:"#b10e1c",primary:"#c50f1f",tint10:"#cc2635",tint20:"#d33f4c",tint30:"#dc626d",tint40:"#eeacb2",tint50:"#f6d1d5",tint60:"#fdf3f4"},s0={shade50:"#210809",shade40:"#3f1011",shade30:"#751d1f",shade20:"#9f282b",shade10:"#bc2f32",primary:"#d13438",tint10:"#d7494c",tint20:"#dc5e62",tint30:"#e37d80",tint40:"#f1bbbc",tint50:"#f8dadb",tint60:"#fdf6f6"},a0={shade50:"#230900",shade40:"#411200",shade30:"#7a2101",shade20:"#a62d01",shade10:"#c43501",primary:"#da3b01",tint10:"#de501c",tint20:"#e36537",tint30:"#e9835e",tint40:"#f4bfab",tint50:"#f9dcd1",tint60:"#fdf6f3"},l0={shade50:"#200d03",shade40:"#3d1805",shade30:"#712d09",shade20:"#9a3d0c",shade10:"#b6480e",primary:"#ca5010",tint10:"#d06228",tint20:"#d77440",tint30:"#df8e64",tint40:"#efc4ad",tint50:"#f7dfd2",tint60:"#fdf7f4"},d0={shade50:"#271002",shade40:"#4a1e04",shade30:"#8a3707",shade20:"#bc4b09",shade10:"#de590b",primary:"#f7630c",tint10:"#f87528",tint20:"#f98845",tint30:"#faa06b",tint40:"#fdcfb4",tint50:"#fee5d7",tint60:"#fff9f5"},c0={shade50:"#291600",shade40:"#4d2a00",shade30:"#8f4e00",shade20:"#c26a00",shade10:"#e67e00",primary:"#ff8c00",tint10:"#ff9a1f",tint20:"#ffa83d",tint30:"#ffba66",tint40:"#ffddb3",tint50:"#ffedd6",tint60:"#fffaf5"},h0={shade50:"#251a00",shade40:"#463100",shade30:"#835b00",shade20:"#b27c00",shade10:"#d39300",primary:"#eaa300",tint10:"#edad1c",tint20:"#efb839",tint30:"#f2c661",tint40:"#f9e2ae",tint50:"#fcefd3",tint60:"#fefbf4"},u0={shade50:"#282400",shade40:"#4c4400",shade30:"#817400",shade20:"#c0ad00",shade10:"#e4cc00",primary:"#fde300",tint10:"#fde61e",tint20:"#fdea3d",tint30:"#feee66",tint40:"#fef7b2",tint50:"#fffad6",tint60:"#fffef5"},p0={shade50:"#1f1900",shade40:"#3a2f00",shade30:"#6c5700",shade20:"#937700",shade10:"#ae8c00",primary:"#c19c00",tint10:"#c8a718",tint20:"#d0b232",tint30:"#dac157",tint40:"#ecdfa5",tint50:"#f5eece",tint60:"#fdfbf2"},g0={shade50:"#181202",shade40:"#2e2103",shade30:"#553e06",shade20:"#745408",shade10:"#89640a",primary:"#986f0b",tint10:"#a47d1e",tint20:"#b18c34",tint30:"#c1a256",tint40:"#e0cea2",tint50:"#efe4cb",tint60:"#fbf8f2"},b0={shade50:"#170e07",shade40:"#2b1a0e",shade30:"#50301a",shade20:"#6c4123",shade10:"#804d29",primary:"#8e562e",tint10:"#9c663f",tint20:"#a97652",tint30:"#bb8f6f",tint40:"#ddc3b0",tint50:"#edded3",tint60:"#faf7f4"},f0={shade50:"#0c1501",shade40:"#162702",shade30:"#294903",shade20:"#376304",shade10:"#427505",primary:"#498205",tint10:"#599116",tint20:"#6ba02b",tint30:"#85b44c",tint40:"#bdd99b",tint50:"#dbebc7",tint60:"#f6faf0"},m0={shade50:"#002111",shade40:"#003d20",shade30:"#00723b",shade20:"#009b51",shade10:"#00b85f",primary:"#00cc6a",tint10:"#19d279",tint20:"#34d889",tint30:"#5ae0a0",tint40:"#a8f0cd",tint50:"#cff7e4",tint60:"#f3fdf8"},v0={shade50:"#031a02",shade40:"#063004",shade30:"#0b5a08",shade20:"#0e7a0b",shade10:"#11910d",primary:"#13a10e",tint10:"#27ac22",tint20:"#3db838",tint30:"#5ec75a",tint40:"#a7e3a5",tint50:"#cef0cd",tint60:"#f2fbf2"},$a={shade50:"#031403",shade40:"#052505",shade30:"#094509",shade20:"#0c5e0c",shade10:"#0e700e",primary:"#107c10",tint10:"#218c21",tint20:"#359b35",tint30:"#54b054",tint40:"#9fd89f",tint50:"#c9eac9",tint60:"#f1faf1"},$0={shade50:"#021102",shade40:"#032003",shade30:"#063b06",shade20:"#085108",shade10:"#0a5f0a",primary:"#0b6a0b",tint10:"#1a7c1a",tint20:"#2d8e2d",tint30:"#4da64d",tint40:"#9ad29a",tint50:"#c6e7c6",tint60:"#f0f9f0"},k0={shade50:"#001d1f",shade40:"#00373a",shade30:"#00666d",shade20:"#008b94",shade10:"#00a5af",primary:"#00b7c3",tint10:"#18bfca",tint20:"#32c8d1",tint30:"#58d3db",tint40:"#a6e9ed",tint50:"#cef3f5",tint60:"#f2fcfd"},y0={shade50:"#001516",shade40:"#012728",shade30:"#02494c",shade20:"#026467",shade10:"#037679",primary:"#038387",tint10:"#159195",tint20:"#2aa0a4",tint30:"#4cb4b7",tint40:"#9bd9db",tint50:"#c7ebec",tint60:"#f0fafa"},x0={shade50:"#000f12",shade40:"#001b22",shade30:"#00333f",shade20:"#004555",shade10:"#005265",primary:"#005b70",tint10:"#0f6c81",tint20:"#237d92",tint30:"#4496a9",tint40:"#94c8d4",tint50:"#c3e1e8",tint60:"#eff7f9"},S0={shade50:"#001322",shade40:"#002440",shade30:"#004377",shade20:"#005ba1",shade10:"#006cbf",primary:"#0078d4",tint10:"#1a86d9",tint20:"#3595de",tint30:"#5caae5",tint40:"#a9d3f2",tint50:"#d0e7f8",tint60:"#f3f9fd"},w0={shade50:"#000c16",shade40:"#00172a",shade30:"#002c4e",shade20:"#003b6a",shade10:"#00467e",primary:"#004e8c",tint10:"#125e9a",tint20:"#286fa8",tint30:"#4a89ba",tint40:"#9abfdc",tint50:"#c7dced",tint60:"#f0f6fa"},B0={shade50:"#0d1126",shade40:"#182047",shade30:"#2c3c85",shade20:"#3c51b4",shade10:"#4760d5",primary:"#4f6bed",tint10:"#637cef",tint20:"#778df1",tint30:"#93a4f4",tint40:"#c8d1fa",tint50:"#e1e6fc",tint60:"#f7f9fe"},C0={shade50:"#00061d",shade40:"#000c36",shade30:"#001665",shade20:"#001e89",shade10:"#0023a2",primary:"#0027b4",tint10:"#173bbd",tint20:"#3050c6",tint30:"#546fd2",tint40:"#a3b2e8",tint50:"#ccd5f3",tint60:"#f2f4fc"},I0={shade50:"#120f25",shade40:"#221d46",shade30:"#3f3682",shade20:"#5649b0",shade10:"#6656d1",primary:"#7160e8",tint10:"#8172eb",tint20:"#9184ee",tint30:"#a79cf1",tint40:"#d2ccf8",tint50:"#e7e4fb",tint60:"#f9f8fe"},N0={shade50:"#0f0717",shade40:"#1c0e2b",shade30:"#341a51",shade20:"#46236e",shade10:"#532982",primary:"#5c2e91",tint10:"#6b3f9e",tint20:"#7c52ab",tint30:"#9470bd",tint40:"#c6b1de",tint50:"#e0d3ed",tint60:"#f7f4fb"},T0={shade50:"#160418",shade40:"#29072e",shade30:"#4c0d55",shade20:"#671174",shade10:"#7a1589",primary:"#881798",tint10:"#952aa4",tint20:"#a33fb1",tint30:"#b55fc1",tint40:"#d9a7e0",tint50:"#eaceef",tint60:"#faf2fb"},z0={shade50:"#1f091d",shade40:"#3a1136",shade30:"#6d2064",shade20:"#932b88",shade10:"#af33a1",primary:"#c239b3",tint10:"#c94cbc",tint20:"#d161c4",tint30:"#da7ed0",tint40:"#edbbe7",tint50:"#f5daf2",tint60:"#fdf5fc"},F0={shade50:"#1c0b1f",shade40:"#35153a",shade30:"#63276d",shade20:"#863593",shade10:"#9f3faf",primary:"#b146c2",tint10:"#ba58c9",tint20:"#c36bd1",tint30:"#cf87da",tint40:"#e6bfed",tint50:"#f2dcf5",tint60:"#fcf6fd"},P0={shade50:"#24091b",shade40:"#441232",shade30:"#80215d",shade20:"#ad2d7e",shade10:"#cd3595",primary:"#e43ba6",tint10:"#e750b0",tint20:"#ea66ba",tint30:"#ef85c8",tint40:"#f7c0e3",tint50:"#fbddf0",tint60:"#fef6fb"},A0={shade50:"#1f0013",shade40:"#390024",shade30:"#6b0043",shade20:"#91005a",shade10:"#ac006b",primary:"#bf0077",tint10:"#c71885",tint20:"#ce3293",tint30:"#d957a8",tint40:"#eca5d1",tint50:"#f5cee6",tint60:"#fcf2f9"},E0={shade50:"#13000c",shade40:"#240017",shade30:"#43002b",shade20:"#5a003b",shade10:"#6b0045",primary:"#77004d",tint10:"#87105d",tint20:"#98246f",tint30:"#ad4589",tint40:"#d696c0",tint50:"#e9c4dc",tint60:"#faf0f6"},M0={shade50:"#141313",shade40:"#252323",shade30:"#444241",shade20:"#5d5958",shade10:"#6e6968",primary:"#7a7574",tint10:"#8a8584",tint20:"#9a9594",tint30:"#afabaa",tint40:"#d7d4d4",tint50:"#eae8e8",tint60:"#faf9f9"},H0={shade50:"#0f0e0e",shade40:"#1c1b1a",shade30:"#343231",shade20:"#474443",shade10:"#54514f",primary:"#5d5a58",tint10:"#706d6b",tint20:"#84817e",tint30:"#9e9b99",tint40:"#cecccb",tint50:"#e5e4e3",tint60:"#f8f8f8"},L0={shade50:"#111314",shade40:"#1f2426",shade30:"#3b4447",shade20:"#505c60",shade10:"#5f6d71",primary:"#69797e",tint10:"#79898d",tint20:"#89989d",tint30:"#a0adb2",tint40:"#cdd6d8",tint50:"#e4e9ea",tint60:"#f8f9fa"},V0={shade50:"#090a0b",shade40:"#111315",shade30:"#202427",shade20:"#2b3135",shade10:"#333a3f",primary:"#394146",tint10:"#4d565c",tint20:"#626c72",tint30:"#808a90",tint40:"#bcc3c7",tint50:"#dbdfe1",tint60:"#f6f7f8"},F={red:s0,green:$a,darkOrange:a0,yellow:u0,berry:z0,lightGreen:v0,marigold:h0},bt={darkRed:n0,cranberry:va,pumpkin:l0,peach:c0,gold:p0,brass:g0,brown:b0,forest:f0,seafoam:m0,darkGreen:$0,lightTeal:k0,teal:y0,steel:x0,blue:S0,royalBlue:w0,cornflower:B0,navy:C0,lavender:I0,purple:N0,grape:T0,lilac:F0,pink:P0,magenta:A0,plum:E0,beige:M0,mink:H0,platinum:L0,anchor:V0},N={cranberry:va,green:$a,orange:d0},ka=["red","green","darkOrange","yellow","berry","lightGreen","marigold"],ya=["darkRed","cranberry","pumpkin","peach","gold","brass","brown","forest","seafoam","darkGreen","lightTeal","teal","steel","blue","royalBlue","cornflower","navy","lavender","purple","grape","lilac","pink","magenta","plum","beige","mink","platinum","anchor"],ye={success:"green",warning:"orange",danger:"cranberry"},Ao=ka.reduce((o,e)=>{const t=e.slice(0,1).toUpperCase()+e.slice(1),r={[`colorPalette${t}Background1`]:F[e].tint60,[`colorPalette${t}Background2`]:F[e].tint40,[`colorPalette${t}Background3`]:F[e].primary,[`colorPalette${t}Foreground1`]:F[e].shade10,[`colorPalette${t}Foreground2`]:F[e].shade30,[`colorPalette${t}Foreground3`]:F[e].primary,[`colorPalette${t}BorderActive`]:F[e].primary,[`colorPalette${t}Border1`]:F[e].tint40,[`colorPalette${t}Border2`]:F[e].primary};return Object.assign(o,r)},{});Ao.colorPaletteYellowForeground1=F.yellow.shade30;Ao.colorPaletteRedForegroundInverted=F.red.tint20;Ao.colorPaletteGreenForegroundInverted=F.green.tint20;Ao.colorPaletteYellowForegroundInverted=F.yellow.tint40;const O0=ya.reduce((o,e)=>{const t=e.slice(0,1).toUpperCase()+e.slice(1),r={[`colorPalette${t}Background2`]:bt[e].tint40,[`colorPalette${t}Foreground2`]:bt[e].shade30,[`colorPalette${t}BorderActive`]:bt[e].primary};return Object.assign(o,r)},{}),_0={...Ao,...O0},to=Object.entries(ye).reduce((o,[e,t])=>{const r=e.slice(0,1).toUpperCase()+e.slice(1),i={[`colorStatus${r}Background1`]:N[t].tint60,[`colorStatus${r}Background2`]:N[t].tint40,[`colorStatus${r}Background3`]:N[t].primary,[`colorStatus${r}Foreground1`]:N[t].shade10,[`colorStatus${r}Foreground2`]:N[t].shade30,[`colorStatus${r}Foreground3`]:N[t].primary,[`colorStatus${r}ForegroundInverted`]:N[t].tint30,[`colorStatus${r}BorderActive`]:N[t].primary,[`colorStatus${r}Border1`]:N[t].tint40,[`colorStatus${r}Border2`]:N[t].primary};return Object.assign(o,i)},{});to.colorStatusDangerBackground3Hover=N[ye.danger].shade10;to.colorStatusDangerBackground3Pressed=N[ye.danger].shade20;to.colorStatusWarningForeground1=N[ye.warning].shade20;to.colorStatusWarningForeground3=N[ye.warning].shade20;to.colorStatusWarningBorder2=N[ye.warning].shade20;const D0=o=>({colorNeutralForeground1:u[14],colorNeutralForeground1Hover:u[14],colorNeutralForeground1Pressed:u[14],colorNeutralForeground1Selected:u[14],colorNeutralForeground2:u[26],colorNeutralForeground2Hover:u[14],colorNeutralForeground2Pressed:u[14],colorNeutralForeground2Selected:u[14],colorNeutralForeground2BrandHover:o[80],colorNeutralForeground2BrandPressed:o[70],colorNeutralForeground2BrandSelected:o[80],colorNeutralForeground3:u[38],colorNeutralForeground3Hover:u[26],colorNeutralForeground3Pressed:u[26],colorNeutralForeground3Selected:u[26],colorNeutralForeground3BrandHover:o[80],colorNeutralForeground3BrandPressed:o[70],colorNeutralForeground3BrandSelected:o[80],colorNeutralForeground4:u[44],colorNeutralForegroundDisabled:u[74],colorNeutralForegroundInvertedDisabled:oe[40],colorBrandForegroundLink:o[70],colorBrandForegroundLinkHover:o[60],colorBrandForegroundLinkPressed:o[40],colorBrandForegroundLinkSelected:o[70],colorNeutralForeground2Link:u[26],colorNeutralForeground2LinkHover:u[14],colorNeutralForeground2LinkPressed:u[14],colorNeutralForeground2LinkSelected:u[14],colorCompoundBrandForeground1:o[80],colorCompoundBrandForeground1Hover:o[70],colorCompoundBrandForeground1Pressed:o[60],colorBrandForeground1:o[80],colorBrandForeground2:o[70],colorBrandForeground2Hover:o[60],colorBrandForeground2Pressed:o[30],colorNeutralForeground1Static:u[14],colorNeutralForegroundStaticInverted:k,colorNeutralForegroundInverted:k,colorNeutralForegroundInvertedHover:k,colorNeutralForegroundInvertedPressed:k,colorNeutralForegroundInvertedSelected:k,colorNeutralForegroundInverted2:k,colorNeutralForegroundOnBrand:k,colorNeutralForegroundInvertedLink:k,colorNeutralForegroundInvertedLinkHover:k,colorNeutralForegroundInvertedLinkPressed:k,colorNeutralForegroundInvertedLinkSelected:k,colorBrandForegroundInverted:o[100],colorBrandForegroundInvertedHover:o[110],colorBrandForegroundInvertedPressed:o[100],colorBrandForegroundOnLight:o[80],colorBrandForegroundOnLightHover:o[70],colorBrandForegroundOnLightPressed:o[50],colorBrandForegroundOnLightSelected:o[60],colorNeutralBackground1:k,colorNeutralBackground1Hover:u[96],colorNeutralBackground1Pressed:u[88],colorNeutralBackground1Selected:u[92],colorNeutralBackground2:u[98],colorNeutralBackground2Hover:u[94],colorNeutralBackground2Pressed:u[86],colorNeutralBackground2Selected:u[90],colorNeutralBackground3:u[96],colorNeutralBackground3Hover:u[92],colorNeutralBackground3Pressed:u[84],colorNeutralBackground3Selected:u[88],colorNeutralBackground4:u[94],colorNeutralBackground4Hover:u[98],colorNeutralBackground4Pressed:u[96],colorNeutralBackground4Selected:k,colorNeutralBackground5:u[92],colorNeutralBackground5Hover:u[96],colorNeutralBackground5Pressed:u[94],colorNeutralBackground5Selected:u[98],colorNeutralBackground6:u[90],colorNeutralBackgroundInverted:u[16],colorNeutralBackgroundStatic:u[20],colorNeutralBackgroundAlpha:oe[50],colorNeutralBackgroundAlpha2:oe[80],colorSubtleBackground:"transparent",colorSubtleBackgroundHover:u[96],colorSubtleBackgroundPressed:u[88],colorSubtleBackgroundSelected:u[92],colorSubtleBackgroundLightAlphaHover:oe[70],colorSubtleBackgroundLightAlphaPressed:oe[50],colorSubtleBackgroundLightAlphaSelected:"transparent",colorSubtleBackgroundInverted:"transparent",colorSubtleBackgroundInvertedHover:Ie[10],colorSubtleBackgroundInvertedPressed:Ie[30],colorSubtleBackgroundInvertedSelected:Ie[20],colorTransparentBackground:"transparent",colorTransparentBackgroundHover:"transparent",colorTransparentBackgroundPressed:"transparent",colorTransparentBackgroundSelected:"transparent",colorNeutralBackgroundDisabled:u[94],colorNeutralBackgroundInvertedDisabled:oe[10],colorNeutralStencil1:u[90],colorNeutralStencil2:u[98],colorNeutralStencil1Alpha:Ie[10],colorNeutralStencil2Alpha:Ie[5],colorBackgroundOverlay:Ie[40],colorScrollbarOverlay:Ie[50],colorBrandBackground:o[80],colorBrandBackgroundHover:o[70],colorBrandBackgroundPressed:o[40],colorBrandBackgroundSelected:o[60],colorCompoundBrandBackground:o[80],colorCompoundBrandBackgroundHover:o[70],colorCompoundBrandBackgroundPressed:o[60],colorBrandBackgroundStatic:o[80],colorBrandBackground2:o[160],colorBrandBackground2Hover:o[150],colorBrandBackground2Pressed:o[130],colorBrandBackground3Static:o[60],colorBrandBackground4Static:o[40],colorBrandBackgroundInverted:k,colorBrandBackgroundInvertedHover:o[160],colorBrandBackgroundInvertedPressed:o[140],colorBrandBackgroundInvertedSelected:o[150],colorNeutralCardBackground:u[98],colorNeutralCardBackgroundHover:k,colorNeutralCardBackgroundPressed:u[96],colorNeutralCardBackgroundSelected:u[92],colorNeutralCardBackgroundDisabled:u[94],colorNeutralStrokeAccessible:u[38],colorNeutralStrokeAccessibleHover:u[34],colorNeutralStrokeAccessiblePressed:u[30],colorNeutralStrokeAccessibleSelected:o[80],colorNeutralStroke1:u[82],colorNeutralStroke1Hover:u[78],colorNeutralStroke1Pressed:u[70],colorNeutralStroke1Selected:u[74],colorNeutralStroke2:u[88],colorNeutralStroke3:u[94],colorNeutralStrokeSubtle:u[88],colorNeutralStrokeOnBrand:k,colorNeutralStrokeOnBrand2:k,colorNeutralStrokeOnBrand2Hover:k,colorNeutralStrokeOnBrand2Pressed:k,colorNeutralStrokeOnBrand2Selected:k,colorBrandStroke1:o[80],colorBrandStroke2:o[140],colorBrandStroke2Hover:o[120],colorBrandStroke2Pressed:o[80],colorBrandStroke2Contrast:o[140],colorCompoundBrandStroke:o[80],colorCompoundBrandStrokeHover:o[70],colorCompoundBrandStrokePressed:o[60],colorNeutralStrokeDisabled:u[88],colorNeutralStrokeInvertedDisabled:oe[40],colorTransparentStroke:"transparent",colorTransparentStrokeInteractive:"transparent",colorTransparentStrokeDisabled:"transparent",colorNeutralStrokeAlpha:Ie[5],colorNeutralStrokeAlpha2:oe[20],colorStrokeFocus1:k,colorStrokeFocus2:Wo,colorNeutralShadowAmbient:"rgba(0,0,0,0.12)",colorNeutralShadowKey:"rgba(0,0,0,0.14)",colorNeutralShadowAmbientLighter:"rgba(0,0,0,0.06)",colorNeutralShadowKeyLighter:"rgba(0,0,0,0.07)",colorNeutralShadowAmbientDarker:"rgba(0,0,0,0.20)",colorNeutralShadowKeyDarker:"rgba(0,0,0,0.24)",colorBrandShadowAmbient:"rgba(0,0,0,0.30)",colorBrandShadowKey:"rgba(0,0,0,0.25)"}),xa={borderRadiusNone:"0",borderRadiusSmall:"2px",borderRadiusMedium:"4px",borderRadiusLarge:"6px",borderRadiusXLarge:"8px",borderRadiusCircular:"10000px"},Sa={curveAccelerateMax:"cubic-bezier(0.9,0.1,1,0.2)",curveAccelerateMid:"cubic-bezier(1,0,1,1)",curveAccelerateMin:"cubic-bezier(0.8,0,0.78,1)",curveDecelerateMax:"cubic-bezier(0.1,0.9,0.2,1)",curveDecelerateMid:"cubic-bezier(0,0,0,1)",curveDecelerateMin:"cubic-bezier(0.33,0,0.1,1)",curveEasyEaseMax:"cubic-bezier(0.8,0,0.2,1)",curveEasyEase:"cubic-bezier(0.33,0,0.67,1)",curveLinear:"cubic-bezier(0,0,1,1)"},wa={durationUltraFast:"50ms",durationFaster:"100ms",durationFast:"150ms",durationNormal:"200ms",durationGentle:"250ms",durationSlow:"300ms",durationSlower:"400ms",durationUltraSlow:"500ms"},Ba={fontSizeBase100:"10px",fontSizeBase200:"12px",fontSizeBase300:"14px",fontSizeBase400:"16px",fontSizeBase500:"20px",fontSizeBase600:"24px",fontSizeHero700:"28px",fontSizeHero800:"32px",fontSizeHero900:"40px",fontSizeHero1000:"68px"},Ca={lineHeightBase100:"14px",lineHeightBase200:"16px",lineHeightBase300:"20px",lineHeightBase400:"22px",lineHeightBase500:"28px",lineHeightBase600:"32px",lineHeightHero700:"36px",lineHeightHero800:"40px",lineHeightHero900:"52px",lineHeightHero1000:"92px"},Ia={fontWeightRegular:400,fontWeightMedium:500,fontWeightSemibold:600,fontWeightBold:700},Na={fontFamilyBase:"'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",fontFamilyMonospace:"Consolas, 'Courier New', Courier, monospace",fontFamilyNumeric:"Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif"},D={none:"0",xxs:"2px",xs:"4px",sNudge:"6px",s:"8px",mNudge:"10px",m:"12px",l:"16px",xl:"20px",xxl:"24px",xxxl:"32px"},Ta={spacingHorizontalNone:D.none,spacingHorizontalXXS:D.xxs,spacingHorizontalXS:D.xs,spacingHorizontalSNudge:D.sNudge,spacingHorizontalS:D.s,spacingHorizontalMNudge:D.mNudge,spacingHorizontalM:D.m,spacingHorizontalL:D.l,spacingHorizontalXL:D.xl,spacingHorizontalXXL:D.xxl,spacingHorizontalXXXL:D.xxxl},za={spacingVerticalNone:D.none,spacingVerticalXXS:D.xxs,spacingVerticalXS:D.xs,spacingVerticalSNudge:D.sNudge,spacingVerticalS:D.s,spacingVerticalMNudge:D.mNudge,spacingVerticalM:D.m,spacingVerticalL:D.l,spacingVerticalXL:D.xl,spacingVerticalXXL:D.xxl,spacingVerticalXXXL:D.xxxl},Fa={strokeWidthThin:"1px",strokeWidthThick:"2px",strokeWidthThicker:"3px",strokeWidthThickest:"4px"};function ir(o,e,t=""){return{[`shadow2${t}`]:`0 0 2px ${o}, 0 1px 2px ${e}`,[`shadow4${t}`]:`0 0 2px ${o}, 0 2px 4px ${e}`,[`shadow8${t}`]:`0 0 2px ${o}, 0 4px 8px ${e}`,[`shadow16${t}`]:`0 0 2px ${o}, 0 8px 16px ${e}`,[`shadow28${t}`]:`0 0 8px ${o}, 0 14px 28px ${e}`,[`shadow64${t}`]:`0 0 8px ${o}, 0 32px 64px ${e}`}}const R0=o=>{const e=D0(o);return{...xa,...Ba,...Ca,...Na,...Ia,...Fa,...Ta,...za,...wa,...Sa,...e,..._0,...to,...ir(e.colorNeutralShadowAmbient,e.colorNeutralShadowKey),...ir(e.colorBrandShadowAmbient,e.colorBrandShadowKey,"Brand")}},Pa={10:"#061724",20:"#082338",30:"#0a2e4a",40:"#0c3b5e",50:"#0e4775",60:"#0f548c",70:"#115ea3",80:"#0f6cbd",90:"#2886de",100:"#479ef5",110:"#62abf5",120:"#77b7f7",130:"#96c6fa",140:"#b4d6fa",150:"#cfe4fa",160:"#ebf3fc"},Ye=ka.reduce((o,e)=>{const t=e.slice(0,1).toUpperCase()+e.slice(1),r={[`colorPalette${t}Background1`]:F[e].shade40,[`colorPalette${t}Background2`]:F[e].shade30,[`colorPalette${t}Background3`]:F[e].primary,[`colorPalette${t}Foreground1`]:F[e].tint30,[`colorPalette${t}Foreground2`]:F[e].tint40,[`colorPalette${t}Foreground3`]:F[e].tint20,[`colorPalette${t}BorderActive`]:F[e].tint30,[`colorPalette${t}Border1`]:F[e].primary,[`colorPalette${t}Border2`]:F[e].tint20};return Object.assign(o,r)},{});Ye.colorPaletteRedForeground3=F.red.tint30;Ye.colorPaletteRedBorder2=F.red.tint30;Ye.colorPaletteGreenForeground3=F.green.tint40;Ye.colorPaletteGreenBorder2=F.green.tint40;Ye.colorPaletteDarkOrangeForeground3=F.darkOrange.tint30;Ye.colorPaletteDarkOrangeBorder2=F.darkOrange.tint30;Ye.colorPaletteRedForegroundInverted=F.red.primary;Ye.colorPaletteGreenForegroundInverted=F.green.primary;Ye.colorPaletteYellowForegroundInverted=F.yellow.shade30;const Ui=ya.reduce((o,e)=>{const t=e.slice(0,1).toUpperCase()+e.slice(1),r={[`colorPalette${t}Background2`]:bt[e].shade30,[`colorPalette${t}Foreground2`]:bt[e].tint40,[`colorPalette${t}BorderActive`]:bt[e].tint30};return Object.assign(o,r)},{});Ui.colorPaletteDarkRedBackground2=bt.darkRed.shade20;Ui.colorPalettePlumBackground2=bt.plum.shade20;const j0={...Ye,...Ui},vt=Object.entries(ye).reduce((o,[e,t])=>{const r=e.slice(0,1).toUpperCase()+e.slice(1),i={[`colorStatus${r}Background1`]:N[t].shade40,[`colorStatus${r}Background2`]:N[t].shade30,[`colorStatus${r}Background3`]:N[t].primary,[`colorStatus${r}Foreground1`]:N[t].tint30,[`colorStatus${r}Foreground2`]:N[t].tint40,[`colorStatus${r}Foreground3`]:N[t].tint20,[`colorStatus${r}BorderActive`]:N[t].tint30,[`colorStatus${r}ForegroundInverted`]:N[t].shade10,[`colorStatus${r}Border1`]:N[t].primary,[`colorStatus${r}Border2`]:N[t].tint20};return Object.assign(o,i)},{});vt.colorStatusDangerBackground3Hover=N[ye.danger].shade10;vt.colorStatusDangerBackground3Pressed=N[ye.danger].shade20;vt.colorStatusDangerForeground3=N[ye.danger].tint40;vt.colorStatusDangerBorder2=N[ye.danger].tint30;vt.colorStatusSuccessForeground3=N[ye.success].tint40;vt.colorStatusSuccessBorder2=N[ye.success].tint40;vt.colorStatusWarningForegroundInverted=N[ye.warning].shade20;const Aa=R0(Pa),q0=o=>({colorNeutralForeground1:k,colorNeutralForeground1Hover:k,colorNeutralForeground1Pressed:k,colorNeutralForeground1Selected:k,colorNeutralForeground2:u[84],colorNeutralForeground2Hover:k,colorNeutralForeground2Pressed:k,colorNeutralForeground2Selected:k,colorNeutralForeground2BrandHover:o[100],colorNeutralForeground2BrandPressed:o[90],colorNeutralForeground2BrandSelected:o[100],colorNeutralForeground3:u[68],colorNeutralForeground3Hover:u[84],colorNeutralForeground3Pressed:u[84],colorNeutralForeground3Selected:u[84],colorNeutralForeground3BrandHover:o[100],colorNeutralForeground3BrandPressed:o[90],colorNeutralForeground3BrandSelected:o[100],colorNeutralForeground4:u[60],colorNeutralForegroundDisabled:u[36],colorNeutralForegroundInvertedDisabled:oe[40],colorBrandForegroundLink:o[100],colorBrandForegroundLinkHover:o[110],colorBrandForegroundLinkPressed:o[90],colorBrandForegroundLinkSelected:o[100],colorNeutralForeground2Link:u[84],colorNeutralForeground2LinkHover:k,colorNeutralForeground2LinkPressed:k,colorNeutralForeground2LinkSelected:k,colorCompoundBrandForeground1:o[100],colorCompoundBrandForeground1Hover:o[110],colorCompoundBrandForeground1Pressed:o[90],colorBrandForeground1:o[100],colorBrandForeground2:o[110],colorBrandForeground2Hover:o[130],colorBrandForeground2Pressed:o[160],colorNeutralForeground1Static:u[14],colorNeutralForegroundStaticInverted:k,colorNeutralForegroundInverted:u[14],colorNeutralForegroundInvertedHover:u[14],colorNeutralForegroundInvertedPressed:u[14],colorNeutralForegroundInvertedSelected:u[14],colorNeutralForegroundInverted2:u[14],colorNeutralForegroundOnBrand:k,colorNeutralForegroundInvertedLink:k,colorNeutralForegroundInvertedLinkHover:k,colorNeutralForegroundInvertedLinkPressed:k,colorNeutralForegroundInvertedLinkSelected:k,colorBrandForegroundInverted:o[80],colorBrandForegroundInvertedHover:o[70],colorBrandForegroundInvertedPressed:o[60],colorBrandForegroundOnLight:o[80],colorBrandForegroundOnLightHover:o[70],colorBrandForegroundOnLightPressed:o[50],colorBrandForegroundOnLightSelected:o[60],colorNeutralBackground1:u[16],colorNeutralBackground1Hover:u[24],colorNeutralBackground1Pressed:u[12],colorNeutralBackground1Selected:u[22],colorNeutralBackground2:u[12],colorNeutralBackground2Hover:u[20],colorNeutralBackground2Pressed:u[8],colorNeutralBackground2Selected:u[18],colorNeutralBackground3:u[8],colorNeutralBackground3Hover:u[16],colorNeutralBackground3Pressed:u[4],colorNeutralBackground3Selected:u[14],colorNeutralBackground4:u[4],colorNeutralBackground4Hover:u[12],colorNeutralBackground4Pressed:Wo,colorNeutralBackground4Selected:u[10],colorNeutralBackground5:Wo,colorNeutralBackground5Hover:u[8],colorNeutralBackground5Pressed:u[2],colorNeutralBackground5Selected:u[6],colorNeutralBackground6:u[20],colorNeutralBackgroundInverted:k,colorNeutralBackgroundStatic:u[24],colorNeutralBackgroundAlpha:r0[50],colorNeutralBackgroundAlpha2:i0[70],colorSubtleBackground:"transparent",colorSubtleBackgroundHover:u[22],colorSubtleBackgroundPressed:u[18],colorSubtleBackgroundSelected:u[20],colorSubtleBackgroundLightAlphaHover:Un[80],colorSubtleBackgroundLightAlphaPressed:Un[50],colorSubtleBackgroundLightAlphaSelected:"transparent",colorSubtleBackgroundInverted:"transparent",colorSubtleBackgroundInvertedHover:Ie[10],colorSubtleBackgroundInvertedPressed:Ie[30],colorSubtleBackgroundInvertedSelected:Ie[20],colorTransparentBackground:"transparent",colorTransparentBackgroundHover:"transparent",colorTransparentBackgroundPressed:"transparent",colorTransparentBackgroundSelected:"transparent",colorNeutralBackgroundDisabled:u[8],colorNeutralBackgroundInvertedDisabled:oe[10],colorNeutralStencil1:u[34],colorNeutralStencil2:u[20],colorNeutralStencil1Alpha:oe[10],colorNeutralStencil2Alpha:oe[5],colorBackgroundOverlay:Ie[50],colorScrollbarOverlay:oe[60],colorBrandBackground:o[70],colorBrandBackgroundHover:o[80],colorBrandBackgroundPressed:o[40],colorBrandBackgroundSelected:o[60],colorCompoundBrandBackground:o[100],colorCompoundBrandBackgroundHover:o[110],colorCompoundBrandBackgroundPressed:o[90],colorBrandBackgroundStatic:o[80],colorBrandBackground2:o[20],colorBrandBackground2Hover:o[40],colorBrandBackground2Pressed:o[10],colorBrandBackground3Static:o[60],colorBrandBackground4Static:o[40],colorBrandBackgroundInverted:k,colorBrandBackgroundInvertedHover:o[160],colorBrandBackgroundInvertedPressed:o[140],colorBrandBackgroundInvertedSelected:o[150],colorNeutralCardBackground:u[20],colorNeutralCardBackgroundHover:u[24],colorNeutralCardBackgroundPressed:u[18],colorNeutralCardBackgroundSelected:u[22],colorNeutralCardBackgroundDisabled:u[8],colorNeutralStrokeAccessible:u[68],colorNeutralStrokeAccessibleHover:u[74],colorNeutralStrokeAccessiblePressed:u[70],colorNeutralStrokeAccessibleSelected:o[100],colorNeutralStroke1:u[40],colorNeutralStroke1Hover:u[46],colorNeutralStroke1Pressed:u[42],colorNeutralStroke1Selected:u[44],colorNeutralStroke2:u[32],colorNeutralStroke3:u[24],colorNeutralStrokeSubtle:u[4],colorNeutralStrokeOnBrand:u[16],colorNeutralStrokeOnBrand2:k,colorNeutralStrokeOnBrand2Hover:k,colorNeutralStrokeOnBrand2Pressed:k,colorNeutralStrokeOnBrand2Selected:k,colorBrandStroke1:o[100],colorBrandStroke2:o[50],colorBrandStroke2Hover:o[50],colorBrandStroke2Pressed:o[30],colorBrandStroke2Contrast:o[50],colorCompoundBrandStroke:o[100],colorCompoundBrandStrokeHover:o[110],colorCompoundBrandStrokePressed:o[90],colorNeutralStrokeDisabled:u[26],colorNeutralStrokeInvertedDisabled:oe[40],colorTransparentStroke:"transparent",colorTransparentStrokeInteractive:"transparent",colorTransparentStrokeDisabled:"transparent",colorNeutralStrokeAlpha:oe[10],colorNeutralStrokeAlpha2:oe[20],colorStrokeFocus1:Wo,colorStrokeFocus2:k,colorNeutralShadowAmbient:"rgba(0,0,0,0.24)",colorNeutralShadowKey:"rgba(0,0,0,0.28)",colorNeutralShadowAmbientLighter:"rgba(0,0,0,0.12)",colorNeutralShadowKeyLighter:"rgba(0,0,0,0.14)",colorNeutralShadowAmbientDarker:"rgba(0,0,0,0.40)",colorNeutralShadowKeyDarker:"rgba(0,0,0,0.48)",colorBrandShadowAmbient:"rgba(0,0,0,0.30)",colorBrandShadowKey:"rgba(0,0,0,0.25)"}),W0=o=>{const e=q0(o);return{...xa,...Ba,...Ca,...Na,...Ia,...Fa,...Ta,...za,...wa,...Sa,...e,...j0,...vt,...ir(e.colorNeutralShadowAmbient,e.colorNeutralShadowKey),...ir(e.colorBrandShadowAmbient,e.colorBrandShadowKey,"Brand")}},X0=W0(Pa),U0={setTheme:ma,webLightTheme:Aa,webDarkTheme:X0};window.fluent3=U0;const G0=[tu,Qh,qp,wu,Pu,Eu,Ru,Uu,tp,lp,ip,gp,Bp,kp,Tp,Ep,_p,cu,eg,bg,ag,hg,Qp,xg,Fg,Cg,Vg,Wg,Qg,ob,hb,xb,ab,fb,Nb,jb,Hb,o0];G0.forEach(o=>{Object.defineProperty(o,"name",{value:o.name.replace("fluent","f3"),writable:!1}),o.define(x.registry)});ma(Aa);
