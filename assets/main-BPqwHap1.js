import{r as h,a as Yr,R as Xr,o as de}from"./react-leV0Ogbt.js";var er={exports:{}},Me={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=h,Kr=Symbol.for("react.element"),qr=Symbol.for("react.fragment"),Qr=Object.prototype.hasOwnProperty,en=Jr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tn={key:!0,ref:!0,__self:!0,__source:!0};function tr(e,t,r){var n,s={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)Qr.call(t,n)&&!tn.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:Kr,type:e,key:a,ref:o,props:s,_owner:en.current}}Me.Fragment=qr;Me.jsx=tr;Me.jsxs=tr;er.exports=Me;var i=er.exports,rr,St=Yr;rr=St.createRoot,St.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},pe.apply(this,arguments)}var F;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(F||(F={}));const Lt="popstate";function rn(e){e===void 0&&(e={});function t(n,s){let{pathname:a,search:o,hash:l}=n.location;return rt("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(n,s){return typeof s=="string"?s:sr(s)}return sn(t,r,null,e)}function $(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function nn(){return Math.random().toString(36).substr(2,8)}function At(e,t){return{usr:e.state,key:e.key,idx:t}}function rt(e,t,r,n){return r===void 0&&(r=null),pe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?re(t):t,{state:r,key:t&&t.key||n||nn()})}function sr(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function re(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function sn(e,t,r,n){n===void 0&&(n={});let{window:s=document.defaultView,v5Compat:a=!1}=n,o=s.history,l=F.Pop,c=null,p=u();p==null&&(p=0,o.replaceState(pe({},o.state,{idx:p}),""));function u(){return(o.state||{idx:null}).idx}function d(){l=F.Pop;let g=u(),w=g==null?null:g-p;p=g,c&&c({action:l,location:x.location,delta:w})}function m(g,w){l=F.Push;let C=rt(x.location,g,w);p=u()+1;let E=At(C,p),L=x.createHref(C);try{o.pushState(E,"",L)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(L)}a&&c&&c({action:l,location:x.location,delta:1})}function v(g,w){l=F.Replace;let C=rt(x.location,g,w);p=u();let E=At(C,p),L=x.createHref(C);o.replaceState(E,"",L),a&&c&&c({action:l,location:x.location,delta:0})}function y(g){let w=s.location.origin!=="null"?s.location.origin:s.location.href,C=typeof g=="string"?g:sr(g);return C=C.replace(/ $/,"%20"),$(w,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,w)}let x={get action(){return l},get location(){return e(s,o)},listen(g){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Lt,d),c=g,()=>{s.removeEventListener(Lt,d),c=null}},createHref(g){return t(s,g)},createURL:y,encodeLocation(g){let w=y(g);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:v,go(g){return o.go(g)}};return x}var Rt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Rt||(Rt={}));function an(e,t,r){return r===void 0&&(r="/"),on(e,t,r,!1)}function on(e,t,r,n){let s=typeof t=="string"?re(t):t,a=or(s.pathname||"/",r);if(a==null)return null;let o=ar(e);cn(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let p=yn(a);l=vn(o[c],p,n)}return l}function ar(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let s=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&($(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let p=Z([n,c.relativePath]),u=r.concat(c);a.children&&a.children.length>0&&($(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),ar(a.children,t,u,p)),!(a.path==null&&!a.index)&&t.push({path:p,score:gn(p,a.index),routesMeta:u})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let c of ir(a.path))s(a,o,c)}),t}function ir(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,s=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return s?[a,""]:[a];let o=ir(n.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),s&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function cn(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:mn(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const ln=/^:[\w-]+$/,un=3,dn=2,pn=1,hn=10,fn=-2,kt=e=>e==="*";function gn(e,t){let r=e.split("/"),n=r.length;return r.some(kt)&&(n+=fn),t&&(n+=dn),r.filter(s=>!kt(s)).reduce((s,a)=>s+(ln.test(a)?un:a===""?pn:hn),n)}function mn(e,t){return e.length===t.length&&e.slice(0,-1).every((n,s)=>n===t[s])?e[e.length-1]-t[t.length-1]:0}function vn(e,t,r){let{routesMeta:n}=e,s={},a="/",o=[];for(let l=0;l<n.length;++l){let c=n[l],p=l===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",d=It({path:c.relativePath,caseSensitive:c.caseSensitive,end:p},u),m=c.route;if(!d&&p&&r&&!n[n.length-1].route.index&&(d=It({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},u)),!d)return null;Object.assign(s,d.params),o.push({params:s,pathname:Z([a,d.pathname]),pathnameBase:Sn(Z([a,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(a=Z([a,d.pathnameBase]))}return o}function It(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=xn(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:n.reduce((p,u,d)=>{let{paramName:m,isOptional:v}=u;if(m==="*"){let x=l[d]||"";o=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const y=l[d];return v&&!y?p[m]=void 0:p[m]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:o,pattern:e}}function xn(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),nr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),n]}function yn(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return nr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function or(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function bn(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:s=""}=typeof e=="string"?re(e):e;return{pathname:r?r.startsWith("/")?r:wn(r,t):t,search:Ln(n),hash:An(s)}}function wn(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Je(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cn(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function jn(e,t){let r=Cn(e);return t?r.map((n,s)=>s===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function En(e,t,r,n){n===void 0&&(n=!1);let s;typeof e=="string"?s=re(e):(s=pe({},e),$(!s.pathname||!s.pathname.includes("?"),Je("?","pathname","search",s)),$(!s.pathname||!s.pathname.includes("#"),Je("#","pathname","hash",s)),$(!s.search||!s.search.includes("#"),Je("#","search","hash",s)));let a=e===""||s.pathname==="",o=a?"/":s.pathname,l;if(o==null)l=r;else{let d=t.length-1;if(!n&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),d-=1;s.pathname=m.join("/")}l=d>=0?t[d]:"/"}let c=bn(s,l),p=o&&o!=="/"&&o.endsWith("/"),u=(a||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(p||u)&&(c.pathname+="/"),c}const Z=e=>e.join("/").replace(/\/\/+/g,"/"),Sn=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ln=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,An=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Rn(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cr=["post","put","patch","delete"];new Set(cr);const kn=["get",...cr];new Set(kn);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},he.apply(this,arguments)}const gt=h.createContext(null),In=h.createContext(null),Oe=h.createContext(null),De=h.createContext(null),ne=h.createContext({outlet:null,matches:[],isDataRoute:!1}),lr=h.createContext(null);function ze(){return h.useContext(De)!=null}function mt(){return ze()||$(!1),h.useContext(De).location}function ur(e){h.useContext(Oe).static||h.useLayoutEffect(e)}function $n(){let{isDataRoute:e}=h.useContext(ne);return e?Hn():Pn()}function Pn(){ze()||$(!1);let e=h.useContext(gt),{basename:t,future:r,navigator:n}=h.useContext(Oe),{matches:s}=h.useContext(ne),{pathname:a}=mt(),o=JSON.stringify(jn(s,r.v7_relativeSplatPath)),l=h.useRef(!1);return ur(()=>{l.current=!0}),h.useCallback(function(p,u){if(u===void 0&&(u={}),!l.current)return;if(typeof p=="number"){n.go(p);return}let d=En(p,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Z([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,a,e])}function Nn(e,t){return Tn(e,t)}function Tn(e,t,r,n){ze()||$(!1);let{navigator:s}=h.useContext(Oe),{matches:a}=h.useContext(ne),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let p=mt(),u;if(t){var d;let g=typeof t=="string"?re(t):t;c==="/"||(d=g.pathname)!=null&&d.startsWith(c)||$(!1),u=g}else u=p;let m=u.pathname||"/",v=m;if(c!=="/"){let g=c.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(g.length).join("/")}let y=an(e,{pathname:v}),x=Dn(y&&y.map(g=>Object.assign({},g,{params:Object.assign({},l,g.params),pathname:Z([c,s.encodeLocation?s.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?c:Z([c,s.encodeLocation?s.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),a,r,n);return t&&x?h.createElement(De.Provider,{value:{location:he({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:F.Pop}},x):x}function _n(){let e=Fn(),t=Rn(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},t),r?h.createElement("pre",{style:s},r):null,null)}const Bn=h.createElement(_n,null);class Mn extends h.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?h.createElement(ne.Provider,{value:this.props.routeContext},h.createElement(lr.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function On(e){let{routeContext:t,match:r,children:n}=e,s=h.useContext(gt);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),h.createElement(ne.Provider,{value:t},n)}function Dn(e,t,r,n){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=n)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,l=(s=r)==null?void 0:s.errors;if(l!=null){let u=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);u>=0||$(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,p=-1;if(r&&n&&n.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(p=u),d.route.id){let{loaderData:m,errors:v}=r,y=d.route.loader&&m[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||y){c=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((u,d,m)=>{let v,y=!1,x=null,g=null;r&&(v=l&&d.route.id?l[d.route.id]:void 0,x=d.route.errorElement||Bn,c&&(p<0&&m===0?(y=!0,g=null):p===m&&(y=!0,g=d.route.hydrateFallbackElement||null)));let w=t.concat(o.slice(0,m+1)),C=()=>{let E;return v?E=x:y?E=g:d.route.Component?E=h.createElement(d.route.Component,null):d.route.element?E=d.route.element:E=u,h.createElement(On,{match:d,routeContext:{outlet:u,matches:w,isDataRoute:r!=null},children:E})};return r&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?h.createElement(Mn,{location:r.location,revalidation:r.revalidation,component:x,error:v,children:C(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):C()},null)}var dr=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(dr||{}),$e=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($e||{});function zn(e){let t=h.useContext(gt);return t||$(!1),t}function Un(e){let t=h.useContext(In);return t||$(!1),t}function Wn(e){let t=h.useContext(ne);return t||$(!1),t}function pr(e){let t=Wn(),r=t.matches[t.matches.length-1];return r.route.id||$(!1),r.route.id}function Fn(){var e;let t=h.useContext(lr),r=Un($e.UseRouteError),n=pr($e.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Hn(){let{router:e}=zn(dr.UseNavigateStable),t=pr($e.UseNavigateStable),r=h.useRef(!1);return ur(()=>{r.current=!0}),h.useCallback(function(s,a){a===void 0&&(a={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,he({fromRouteId:t},a)))},[e,t])}function nt(e){$(!1)}function Gn(e){let{basename:t="/",children:r=null,location:n,navigationType:s=F.Pop,navigator:a,static:o=!1,future:l}=e;ze()&&$(!1);let c=t.replace(/^\/*/,"/"),p=h.useMemo(()=>({basename:c,navigator:a,static:o,future:he({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof n=="string"&&(n=re(n));let{pathname:u="/",search:d="",hash:m="",state:v=null,key:y="default"}=n,x=h.useMemo(()=>{let g=or(u,c);return g==null?null:{location:{pathname:g,search:d,hash:m,state:v,key:y},navigationType:s}},[c,u,d,m,v,y,s]);return x==null?null:h.createElement(Oe.Provider,{value:p},h.createElement(De.Provider,{children:r,value:x}))}function Zn(e){let{children:t,location:r}=e;return Nn(st(t),r)}new Promise(()=>{});function st(e,t){t===void 0&&(t=[]);let r=[];return h.Children.forEach(e,(n,s)=>{if(!h.isValidElement(n))return;let a=[...t,s];if(n.type===h.Fragment){r.push.apply(r,st(n.props.children,a));return}n.type!==nt&&$(!1),!n.props.index||!n.props.children||$(!1);let o={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=st(n.props.children,a)),r.push(o)}),r}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Vn="6";try{window.__reactRouterVersion=Vn}catch{}const Yn="startTransition",$t=Xr[Yn];function Xn(e){let{basename:t,children:r,future:n,window:s}=e,a=h.useRef();a.current==null&&(a.current=rn({window:s,v5Compat:!0}));let o=a.current,[l,c]=h.useState({action:o.action,location:o.location}),{v7_startTransition:p}=n||{},u=h.useCallback(d=>{p&&$t?$t(()=>c(d)):c(d)},[c,p]);return h.useLayoutEffect(()=>o.listen(u),[o,u]),h.createElement(Gn,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o,future:n})}var Pt;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pt||(Pt={}));var Nt;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nt||(Nt={}));const Tt="/slider-app/assets/vdo-CYnARIuX.mp4",Jn="/slider-app/assets/image1-CSkYycHA.png",Kn="/slider-app/assets/image3-DAwXXQT2.png",qn="/slider-app/assets/image4-BvtUkoaz.png",Qn="/slider-app/assets/image5-Djk9RnGn.png",es="/slider-app/assets/image2-DZDIWwU0.png";var N=function(){return N=Object.assign||function(t){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},N.apply(this,arguments)};function Pe(e,t,r){if(r||arguments.length===2)for(var n=0,s=t.length,a;n<s;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var R="-ms-",ue="-moz-",S="-webkit-",hr="comm",Ue="rule",vt="decl",ts="@import",fr="@keyframes",rs="@layer",gr=Math.abs,xt=String.fromCharCode,at=Object.assign;function ns(e,t){return P(e,0)^45?(((t<<2^P(e,0))<<2^P(e,1))<<2^P(e,2))<<2^P(e,3):0}function mr(e){return e.trim()}function D(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,r){return e.replace(t,r)}function Le(e,t,r){return e.indexOf(t,r)}function P(e,t){return e.charCodeAt(t)|0}function K(e,t,r){return e.slice(t,r)}function M(e){return e.length}function vr(e){return e.length}function le(e,t){return t.push(e),e}function ss(e,t){return e.map(t).join("")}function _t(e,t){return e.filter(function(r){return!D(r,t)})}var We=1,q=1,xr=0,_=0,I=0,se="";function Fe(e,t,r,n,s,a,o,l){return{value:e,root:t,parent:r,type:n,props:s,children:a,line:We,column:q,length:o,return:"",siblings:l}}function W(e,t){return at(Fe("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function X(e){for(;e.root;)e=W(e.root,{children:[e]});le(e,e.siblings)}function as(){return I}function is(){return I=_>0?P(se,--_):0,q--,I===10&&(q=1,We--),I}function B(){return I=_<xr?P(se,_++):0,q++,I===10&&(q=1,We++),I}function V(){return P(se,_)}function Ae(){return _}function He(e,t){return K(se,e,t)}function it(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function os(e){return We=q=1,xr=M(se=e),_=0,[]}function cs(e){return se="",e}function Ke(e){return mr(He(_-1,ot(e===91?e+2:e===40?e+1:e)))}function ls(e){for(;(I=V())&&I<33;)B();return it(e)>2||it(I)>3?"":" "}function us(e,t){for(;--t&&B()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return He(e,Ae()+(t<6&&V()==32&&B()==32))}function ot(e){for(;B();)switch(I){case e:return _;case 34:case 39:e!==34&&e!==39&&ot(I);break;case 40:e===41&&ot(e);break;case 92:B();break}return _}function ds(e,t){for(;B()&&e+I!==57;)if(e+I===84&&V()===47)break;return"/*"+He(t,_-1)+"*"+xt(e===47?e:B())}function ps(e){for(;!it(V());)B();return He(e,_)}function hs(e){return cs(Re("",null,null,null,[""],e=os(e),0,[0],e))}function Re(e,t,r,n,s,a,o,l,c){for(var p=0,u=0,d=o,m=0,v=0,y=0,x=1,g=1,w=1,C=0,E="",L=s,k=a,A=n,j=E;g;)switch(y=C,C=B()){case 40:if(y!=108&&P(j,d-1)==58){Le(j+=b(Ke(C),"&","&\f"),"&\f",gr(p?l[p-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:j+=Ke(C);break;case 9:case 10:case 13:case 32:j+=ls(y);break;case 92:j+=us(Ae()-1,7);continue;case 47:switch(V()){case 42:case 47:le(fs(ds(B(),Ae()),t,r,c),c);break;default:j+="/"}break;case 123*x:l[p++]=M(j)*w;case 125*x:case 59:case 0:switch(C){case 0:case 125:g=0;case 59+u:w==-1&&(j=b(j,/\f/g,"")),v>0&&M(j)-d&&le(v>32?Mt(j+";",n,r,d-1,c):Mt(b(j," ","")+";",n,r,d-2,c),c);break;case 59:j+=";";default:if(le(A=Bt(j,t,r,p,u,s,l,E,L=[],k=[],d,a),a),C===123)if(u===0)Re(j,t,A,A,L,a,d,l,k);else switch(m===99&&P(j,3)===110?100:m){case 100:case 108:case 109:case 115:Re(e,A,A,n&&le(Bt(e,A,A,0,0,s,l,E,s,L=[],d,k),k),s,k,d,l,n?L:k);break;default:Re(j,A,A,A,[""],k,0,l,k)}}p=u=v=0,x=w=1,E=j="",d=o;break;case 58:d=1+M(j),v=y;default:if(x<1){if(C==123)--x;else if(C==125&&x++==0&&is()==125)continue}switch(j+=xt(C),C*x){case 38:w=u>0?1:(j+="\f",-1);break;case 44:l[p++]=(M(j)-1)*w,w=1;break;case 64:V()===45&&(j+=Ke(B())),m=V(),u=d=M(E=j+=ps(Ae())),C++;break;case 45:y===45&&M(j)==2&&(x=0)}}return a}function Bt(e,t,r,n,s,a,o,l,c,p,u,d){for(var m=s-1,v=s===0?a:[""],y=vr(v),x=0,g=0,w=0;x<n;++x)for(var C=0,E=K(e,m+1,m=gr(g=o[x])),L=e;C<y;++C)(L=mr(g>0?v[C]+" "+E:b(E,/&\f/g,v[C])))&&(c[w++]=L);return Fe(e,t,r,s===0?Ue:l,c,p,u,d)}function fs(e,t,r,n){return Fe(e,t,r,hr,xt(as()),K(e,2,-2),0,n)}function Mt(e,t,r,n,s){return Fe(e,t,r,vt,K(e,0,n),K(e,n+1,-1),n,s)}function yr(e,t,r){switch(ns(e,t)){case 5103:return S+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return S+e+e;case 4789:return ue+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return S+e+ue+e+R+e+e;case 5936:switch(P(e,t+11)){case 114:return S+e+R+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return S+e+R+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return S+e+R+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return S+e+R+e+e;case 6165:return S+e+R+"flex-"+e+e;case 5187:return S+e+b(e,/(\w+).+(:[^]+)/,S+"box-$1$2"+R+"flex-$1$2")+e;case 5443:return S+e+R+"flex-item-"+b(e,/flex-|-self/g,"")+(D(e,/flex-|baseline/)?"":R+"grid-row-"+b(e,/flex-|-self/g,""))+e;case 4675:return S+e+R+"flex-line-pack"+b(e,/align-content|flex-|-self/g,"")+e;case 5548:return S+e+R+b(e,"shrink","negative")+e;case 5292:return S+e+R+b(e,"basis","preferred-size")+e;case 6060:return S+"box-"+b(e,"-grow","")+S+e+R+b(e,"grow","positive")+e;case 4554:return S+b(e,/([^-])(transform)/g,"$1"+S+"$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,S+"$1"),/(image-set)/,S+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,S+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,S+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+S+e+e;case 4200:if(!D(e,/flex-|baseline/))return R+"grid-column-align"+K(e,t)+e;break;case 2592:case 3360:return R+b(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,s){return t=s,D(n.props,/grid-\w+-end/)})?~Le(e+(r=r[t].value),"span",0)?e:R+b(e,"-start","")+e+R+"grid-row-span:"+(~Le(r,"span",0)?D(r,/\d+/):+D(r,/\d+/)-+D(e,/\d+/))+";":R+b(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return D(n.props,/grid-\w+-start/)})?e:R+b(b(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,S+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(M(e)-1-t>6)switch(P(e,t+1)){case 109:if(P(e,t+4)!==45)break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1"+S+"$2-$3$1"+ue+(P(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Le(e,"stretch",0)?yr(b(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return b(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,a,o,l,c,p){return R+s+":"+a+p+(o?R+s+"-span:"+(l?c:+c-+a)+p:"")+e});case 4949:if(P(e,t+6)===121)return b(e,":",":"+S)+e;break;case 6444:switch(P(e,P(e,14)===45?18:11)){case 120:return b(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+S+(P(e,14)===45?"inline-":"")+"box$3$1"+S+"$2$3$1"+R+"$2box$3")+e;case 100:return b(e,":",":"+R)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return b(e,"scroll-","scroll-snap-")+e}return e}function Ne(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function gs(e,t,r,n){switch(e.type){case rs:if(e.children.length)break;case ts:case vt:return e.return=e.return||e.value;case hr:return"";case fr:return e.return=e.value+"{"+Ne(e.children,n)+"}";case Ue:if(!M(e.value=e.props.join(",")))return""}return M(r=Ne(e.children,n))?e.return=e.value+"{"+r+"}":""}function ms(e){var t=vr(e);return function(r,n,s,a){for(var o="",l=0;l<t;l++)o+=e[l](r,n,s,a)||"";return o}}function vs(e){return function(t){t.root||(t=t.return)&&e(t)}}function xs(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case vt:e.return=yr(e.value,e.length,r);return;case fr:return Ne([W(e,{value:b(e.value,"@","@"+S)})],n);case Ue:if(e.length)return ss(r=e.props,function(s){switch(D(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":X(W(e,{props:[b(s,/:(read-\w+)/,":"+ue+"$1")]})),X(W(e,{props:[s]})),at(e,{props:_t(r,n)});break;case"::placeholder":X(W(e,{props:[b(s,/:(plac\w+)/,":"+S+"input-$1")]})),X(W(e,{props:[b(s,/:(plac\w+)/,":"+ue+"$1")]})),X(W(e,{props:[b(s,/:(plac\w+)/,R+"input-$1")]})),X(W(e,{props:[s]})),at(e,{props:_t(r,n)});break}return""})}}var ys={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},T={},Q=typeof process<"u"&&T!==void 0&&(T.REACT_APP_SC_ATTR||T.SC_ATTR)||"data-styled",br="active",wr="data-styled-version",Ge="6.1.13",yt=`/*!sc*/
`,Te=typeof window<"u"&&"HTMLElement"in window,bs=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&T!==void 0&&T.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&T.REACT_APP_SC_DISABLE_SPEEDY!==""?T.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&T.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&T!==void 0&&T.SC_DISABLE_SPEEDY!==void 0&&T.SC_DISABLE_SPEEDY!==""&&T.SC_DISABLE_SPEEDY!=="false"&&T.SC_DISABLE_SPEEDY),Ze=Object.freeze([]),ee=Object.freeze({});function ws(e,t,r){return r===void 0&&(r=ee),e.theme!==r.theme&&e.theme||t||r.theme}var Cr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cs=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,js=/(^-|-$)/g;function Ot(e){return e.replace(Cs,"-").replace(js,"")}var Es=/(a)(d)/gi,we=52,Dt=function(e){return String.fromCharCode(e+(e>25?39:97))};function ct(e){var t,r="";for(t=Math.abs(e);t>we;t=t/we|0)r=Dt(t%we)+r;return(Dt(t%we)+r).replace(Es,"$1-$2")}var qe,jr=5381,J=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Er=function(e){return J(jr,e)};function Ss(e){return ct(Er(e)>>>0)}function Ls(e){return e.displayName||e.name||"Component"}function Qe(e){return typeof e=="string"&&!0}var Sr=typeof Symbol=="function"&&Symbol.for,Lr=Sr?Symbol.for("react.memo"):60115,As=Sr?Symbol.for("react.forward_ref"):60112,Rs={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ks={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ar={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Is=((qe={})[As]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qe[Lr]=Ar,qe);function zt(e){return("type"in(t=e)&&t.type.$$typeof)===Lr?Ar:"$$typeof"in e?Is[e.$$typeof]:Rs;var t}var $s=Object.defineProperty,Ps=Object.getOwnPropertyNames,Ut=Object.getOwnPropertySymbols,Ns=Object.getOwnPropertyDescriptor,Ts=Object.getPrototypeOf,Wt=Object.prototype;function Rr(e,t,r){if(typeof t!="string"){if(Wt){var n=Ts(t);n&&n!==Wt&&Rr(e,n,r)}var s=Ps(t);Ut&&(s=s.concat(Ut(t)));for(var a=zt(e),o=zt(t),l=0;l<s.length;++l){var c=s[l];if(!(c in ks||r&&r[c]||o&&c in o||a&&c in a)){var p=Ns(t,c);try{$s(e,c,p)}catch{}}}}return e}function te(e){return typeof e=="function"}function bt(e){return typeof e=="object"&&"styledComponentId"in e}function G(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ft(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function fe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function lt(e,t,r){if(r===void 0&&(r=!1),!r&&!fe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=lt(e[n],t[n]);else if(fe(t))for(var n in t)e[n]=lt(e[n],t[n]);return e}function wt(e,t){Object.defineProperty(e,"toString",{value:t})}function ge(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _s=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,a=s;t>=a;)if((a<<=1)<0)throw ge(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=s;o<a;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),c=(o=0,r.length);o<c;o++)this.tag.insertRule(l,r[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),s=n+r;this.groupSizes[t]=0;for(var a=n;a<s;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],s=this.indexOfGroup(t),a=s+n,o=s;o<a;o++)r+="".concat(this.tag.getRule(o)).concat(yt);return r},e}(),ke=new Map,_e=new Map,Ie=1,Ce=function(e){if(ke.has(e))return ke.get(e);for(;_e.has(Ie);)Ie++;var t=Ie++;return ke.set(e,t),_e.set(t,e),t},Bs=function(e,t){Ie=t+1,ke.set(e,t),_e.set(t,e)},Ms="style[".concat(Q,"][").concat(wr,'="').concat(Ge,'"]'),Os=new RegExp("^".concat(Q,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ds=function(e,t,r){for(var n,s=r.split(","),a=0,o=s.length;a<o;a++)(n=s[a])&&e.registerName(t,n)},zs=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(yt),s=[],a=0,o=n.length;a<o;a++){var l=n[a].trim();if(l){var c=l.match(Os);if(c){var p=0|parseInt(c[1],10),u=c[2];p!==0&&(Bs(u,p),Ds(e,u,c[3]),e.getTag().insertRules(p,s)),s.length=0}else s.push(l)}}},Ht=function(e){for(var t=document.querySelectorAll(Ms),r=0,n=t.length;r<n;r++){var s=t[r];s&&s.getAttribute(Q)!==br&&(zs(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function Us(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var kr=function(e){var t=document.head,r=e||t,n=document.createElement("style"),s=function(l){var c=Array.from(l.querySelectorAll("style[".concat(Q,"]")));return c[c.length-1]}(r),a=s!==void 0?s.nextSibling:null;n.setAttribute(Q,br),n.setAttribute(wr,Ge);var o=Us();return o&&n.setAttribute("nonce",o),r.insertBefore(n,a),n},Ws=function(){function e(t){this.element=kr(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,a=n.length;s<a;s++){var o=n[s];if(o.ownerNode===r)return o}throw ge(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Fs=function(){function e(t){this.element=kr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Hs=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Gt=Te,Gs={isServer:!Te,useCSSOMInjection:!bs},Ir=function(){function e(t,r,n){t===void 0&&(t=ee),r===void 0&&(r={});var s=this;this.options=N(N({},Gs),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Te&&Gt&&(Gt=!1,Ht(this)),wt(this,function(){return function(a){for(var o=a.getTag(),l=o.length,c="",p=function(d){var m=function(w){return _e.get(w)}(d);if(m===void 0)return"continue";var v=a.names.get(m),y=o.getGroup(d);if(v===void 0||!v.size||y.length===0)return"continue";var x="".concat(Q,".g").concat(d,'[id="').concat(m,'"]'),g="";v!==void 0&&v.forEach(function(w){w.length>0&&(g+="".concat(w,","))}),c+="".concat(y).concat(x,'{content:"').concat(g,'"}').concat(yt)},u=0;u<l;u++)p(u);return c}(s)})}return e.registerId=function(t){return Ce(t)},e.prototype.rehydrate=function(){!this.server&&Te&&Ht(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(N(N({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new Hs(s):n?new Ws(s):new Fs(s)}(this.options),new _s(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Ce(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Ce(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ce(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Zs=/&/g,Vs=/^\s*\/\/.*$/gm;function $r(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=$r(r.children,t)),r})}function Ys(e){var t,r,n,s=ee,a=s.options,o=a===void 0?ee:a,l=s.plugins,c=l===void 0?Ze:l,p=function(m,v,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):m},u=c.slice();u.push(function(m){m.type===Ue&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Zs,r).replace(n,p))}),o.prefix&&u.push(xs),u.push(gs);var d=function(m,v,y,x){v===void 0&&(v=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,r=v,n=new RegExp("\\".concat(r,"\\b"),"g");var g=m.replace(Vs,""),w=hs(y||v?"".concat(y," ").concat(v," { ").concat(g," }"):g);o.namespace&&(w=$r(w,o.namespace));var C=[];return Ne(w,ms(u.concat(vs(function(E){return C.push(E)})))),C};return d.hash=c.length?c.reduce(function(m,v){return v.name||ge(15),J(m,v.name)},jr).toString():"",d}var Xs=new Ir,ut=Ys(),Pr=de.createContext({shouldForwardProp:void 0,styleSheet:Xs,stylis:ut});Pr.Consumer;de.createContext(void 0);function Zt(){return h.useContext(Pr)}var Js=function(){function e(t,r){var n=this;this.inject=function(s,a){a===void 0&&(a=ut);var o=n.name+a.hash;s.hasNameForId(n.id,o)||s.insertRules(n.id,o,a(n.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,wt(this,function(){throw ge(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ut),this.name+t.hash},e}(),Ks=function(e){return e>="A"&&e<="Z"};function Vt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;Ks(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Nr=function(e){return e==null||e===!1||e===""},Tr=function(e){var t,r,n=[];for(var s in e){var a=e[s];e.hasOwnProperty(s)&&!Nr(a)&&(Array.isArray(a)&&a.isCss||te(a)?n.push("".concat(Vt(s),":"),a,";"):fe(a)?n.push.apply(n,Pe(Pe(["".concat(s," {")],Tr(a),!1),["}"],!1)):n.push("".concat(Vt(s),": ").concat((t=s,(r=a)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in ys||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Y(e,t,r,n){if(Nr(e))return[];if(bt(e))return[".".concat(e.styledComponentId)];if(te(e)){if(!te(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var s=e(t);return Y(s,t,r,n)}var a;return e instanceof Js?r?(e.inject(r,n),[e.getName(n)]):[e]:fe(e)?Tr(e):Array.isArray(e)?Array.prototype.concat.apply(Ze,e.map(function(o){return Y(o,t,r,n)})):[e.toString()]}function qs(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(te(r)&&!bt(r))return!1}return!0}var Qs=Er(Ge),ea=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&qs(t),this.componentId=r,this.baseHash=J(Qs,r),this.baseStyle=n,Ir.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=G(s,this.staticRulesId);else{var a=Ft(Y(this.rules,t,r,n)),o=ct(J(this.baseHash,a)>>>0);if(!r.hasNameForId(this.componentId,o)){var l=n(a,".".concat(o),void 0,this.componentId);r.insertRules(this.componentId,o,l)}s=G(s,o),this.staticRulesId=o}else{for(var c=J(this.baseHash,n.hash),p="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")p+=d;else if(d){var m=Ft(Y(d,t,r,n));c=J(c,m+u),p+=m}}if(p){var v=ct(c>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,n(p,".".concat(v),void 0,this.componentId)),s=G(s,v)}}return s},e}(),_r=de.createContext(void 0);_r.Consumer;var et={};function ta(e,t,r){var n=bt(e),s=e,a=!Qe(e),o=t.attrs,l=o===void 0?Ze:o,c=t.componentId,p=c===void 0?function(L,k){var A=typeof L!="string"?"sc":Ot(L);et[A]=(et[A]||0)+1;var j="".concat(A,"-").concat(Ss(Ge+A+et[A]));return k?"".concat(k,"-").concat(j):j}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(L){return Qe(L)?"styled.".concat(L):"Styled(".concat(Ls(L),")")}(e):u,m=t.displayName&&t.componentId?"".concat(Ot(t.displayName),"-").concat(t.componentId):t.componentId||p,v=n&&s.attrs?s.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(n&&s.shouldForwardProp){var x=s.shouldForwardProp;if(t.shouldForwardProp){var g=t.shouldForwardProp;y=function(L,k){return x(L,k)&&g(L,k)}}else y=x}var w=new ea(r,m,n?s.componentStyle:void 0);function C(L,k){return function(A,j,ae){var me=A.attrs,Ur=A.componentStyle,Wr=A.defaultProps,Fr=A.foldedComponentIds,Hr=A.styledComponentId,Gr=A.target,Zr=de.useContext(_r),Vr=Zt(),Ve=A.shouldForwardProp||Vr.shouldForwardProp,jt=ws(j,Zr,Wr)||ee,O=function(xe,oe,ye){for(var ce,H=N(N({},oe),{className:void 0,theme:ye}),Xe=0;Xe<xe.length;Xe+=1){var be=te(ce=xe[Xe])?ce(H):ce;for(var U in be)H[U]=U==="className"?G(H[U],be[U]):U==="style"?N(N({},H[U]),be[U]):be[U]}return oe.className&&(H.className=G(H.className,oe.className)),H}(me,j,jt),ve=O.as||Gr,ie={};for(var z in O)O[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&O.theme===jt||(z==="forwardedAs"?ie.as=O.forwardedAs:Ve&&!Ve(z,ve)||(ie[z]=O[z]));var Et=function(xe,oe){var ye=Zt(),ce=xe.generateAndInjectStyles(oe,ye.styleSheet,ye.stylis);return ce}(Ur,O),Ye=G(Fr,Hr);return Et&&(Ye+=" "+Et),O.className&&(Ye+=" "+O.className),ie[Qe(ve)&&!Cr.has(ve)?"class":"className"]=Ye,ie.ref=ae,h.createElement(ve,ie)}(E,L,k)}C.displayName=d;var E=de.forwardRef(C);return E.attrs=v,E.componentStyle=w,E.displayName=d,E.shouldForwardProp=y,E.foldedComponentIds=n?G(s.foldedComponentIds,s.styledComponentId):"",E.styledComponentId=m,E.target=n?s.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=n?function(k){for(var A=[],j=1;j<arguments.length;j++)A[j-1]=arguments[j];for(var ae=0,me=A;ae<me.length;ae++)lt(k,me[ae],!0);return k}({},s.defaultProps,L):L}}),wt(E,function(){return".".concat(E.styledComponentId)}),a&&Rr(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function Yt(e,t){for(var r=[e[0]],n=0,s=t.length;n<s;n+=1)r.push(t[n],e[n+1]);return r}var Xt=function(e){return Object.assign(e,{isCss:!0})};function ra(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(te(e)||fe(e))return Xt(Y(Yt(Ze,Pe([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Y(n):Xt(Y(Yt(n,t)))}function dt(e,t,r){if(r===void 0&&(r=ee),!t)throw ge(1,t);var n=function(s){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,r,ra.apply(void 0,Pe([s],a,!1)))};return n.attrs=function(s){return dt(e,t,N(N({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return dt(e,t,N(N({},r),s))},n}var Br=function(e){return dt(ta,e)},f=Br;Cr.forEach(function(e){f[e]=Br(e)});const na=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  & :hover {
    cursor: pointer;
  }
`,Be=({src:e,onClick:t,alt:r})=>i.jsx(na,{children:i.jsx("img",{className:"scroll-button-updated",src:e,onClick:t,alt:r})}),Mr="data:image/svg+xml,%3csvg%20width='80'%20height='70'%20viewBox='0%200%2080%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='path-1-outside-1_10666_596'%20maskUnits='userSpaceOnUse'%20x='0.398438'%20y='0.386719'%20width='80'%20height='69'%20fill='black'%3e%3crect%20fill='white'%20x='0.398438'%20y='0.386719'%20width='80'%20height='69'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M39.9453%208.51312C42.7805%205.67792%2047.3772%205.67792%2050.2125%208.51312L70.7924%2029.0931C70.9272%2029.2279%2071.0556%2029.3667%2071.1776%2029.5091C72.7329%2030.8406%2073.7185%2032.8183%2073.7185%2035.0262C73.7185%2036.2013%2073.4393%2037.3111%2072.9437%2038.293C72.5908%2039.104%2072.0827%2039.8637%2071.4194%2040.5271L50.8394%2061.107C48.0042%2063.9422%2043.4074%2063.9422%2040.5722%2061.107C37.737%2058.2718%2037.737%2053.675%2040.5722%2050.8398L49.1258%2042.2862H13.6584C9.64885%2042.2862%206.39844%2039.0358%206.39844%2035.0262C6.39844%2031.0167%209.64885%2027.7662%2013.6584%2027.7662H48.9312L39.9453%2018.7803C37.1101%2015.9451%2037.1101%2011.3483%2039.9453%208.51312Z'/%3e%3c/mask%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M39.9453%208.51312C42.7805%205.67792%2047.3772%205.67792%2050.2125%208.51312L70.7924%2029.0931C70.9272%2029.2279%2071.0556%2029.3667%2071.1776%2029.5091C72.7329%2030.8406%2073.7185%2032.8183%2073.7185%2035.0262C73.7185%2036.2013%2073.4393%2037.3111%2072.9437%2038.293C72.5908%2039.104%2072.0827%2039.8637%2071.4194%2040.5271L50.8394%2061.107C48.0042%2063.9422%2043.4074%2063.9422%2040.5722%2061.107C37.737%2058.2718%2037.737%2053.675%2040.5722%2050.8398L49.1258%2042.2862H13.6584C9.64885%2042.2862%206.39844%2039.0358%206.39844%2035.0262C6.39844%2031.0167%209.64885%2027.7662%2013.6584%2027.7662H48.9312L39.9453%2018.7803C37.1101%2015.9451%2037.1101%2011.3483%2039.9453%208.51312Z'%20fill='white'/%3e%3cpath%20d='M50.2125%208.51312L54.4551%204.27048V4.27048L50.2125%208.51312ZM39.9453%208.51312L44.1879%2012.7558V12.7558L39.9453%208.51312ZM70.7924%2029.0931L66.5498%2033.3357L66.5498%2033.3358L70.7924%2029.0931ZM71.1776%2029.5091L66.6211%2033.4127L66.923%2033.7651L67.2754%2034.0668L71.1776%2029.5091ZM72.9437%2038.293L67.5873%2035.5896L67.5103%2035.7421L67.4421%2035.8988L72.9437%2038.293ZM71.4194%2040.5271L67.1767%2036.2844L71.4194%2040.5271ZM50.8394%2061.107L55.082%2065.3497L50.8394%2061.107ZM49.1258%2042.2862L53.3684%2046.5289L63.6111%2036.2862H49.1258V42.2862ZM48.9312%2027.7662V33.7662H63.4165L53.1738%2023.5236L48.9312%2027.7662ZM39.9453%2018.7803L44.1879%2014.5377L39.9453%2018.7803ZM54.4551%204.27048C49.2767%20-0.907871%2040.881%20-0.907867%2035.7026%204.27048L44.1879%2012.7558C44.68%2012.2637%2045.4778%2012.2637%2045.9698%2012.7558L54.4551%204.27048ZM75.035%2024.8504L54.4551%204.27048L45.9698%2012.7558L66.5498%2033.3357L75.035%2024.8504ZM75.7341%2025.6054C75.512%2025.3462%2075.2789%2025.0943%2075.035%2024.8504L66.5498%2033.3358C66.5755%2033.3615%2066.5992%2033.3871%2066.6211%2033.4127L75.7341%2025.6054ZM79.7185%2035.0262C79.7185%2030.9922%2077.9096%2027.3741%2075.0797%2024.9513L67.2754%2034.0668C67.5561%2034.3071%2067.7185%2034.6445%2067.7185%2035.0262H79.7185ZM78.3002%2040.9965C79.2092%2039.1953%2079.7185%2037.1616%2079.7185%2035.0262H67.7185C67.7185%2035.2409%2067.6694%2035.4268%2067.5873%2035.5896L78.3002%2040.9965ZM75.662%2044.7697C76.8657%2043.566%2077.7972%2042.1766%2078.4454%2040.6872L67.4421%2035.8988C67.3844%2036.0315%2067.2996%2036.1615%2067.1767%2036.2844L75.662%2044.7697ZM55.082%2065.3497L75.662%2044.7697L67.1767%2036.2844L46.5968%2056.8644L55.082%2065.3497ZM36.3296%2065.3497C41.5079%2070.528%2049.9037%2070.528%2055.082%2065.3497L46.5968%2056.8644C46.1047%2057.3564%2045.3069%2057.3564%2044.8149%2056.8644L36.3296%2065.3497ZM36.3296%2046.5972C31.1512%2051.7756%2031.1512%2060.1713%2036.3296%2065.3497L44.8149%2056.8644C44.3228%2056.3723%2044.3228%2055.5745%2044.8148%2055.0825L36.3296%2046.5972ZM44.8832%2038.0436L36.3296%2046.5972L44.8148%2055.0825L53.3684%2046.5289L44.8832%2038.0436ZM13.6584%2048.2862H49.1258V36.2862H13.6584V48.2862ZM0.398438%2035.0262C0.398438%2042.3495%206.33513%2048.2862%2013.6584%2048.2862V36.2862C12.9626%2036.2862%2012.3984%2035.7221%2012.3984%2035.0262H0.398438ZM13.6584%2021.7662C6.33514%2021.7662%200.398438%2027.703%200.398438%2035.0262H12.3984C12.3984%2034.3304%2012.9626%2033.7662%2013.6584%2033.7662V21.7662ZM48.9312%2021.7662H13.6584V33.7662H48.9312V21.7662ZM35.7026%2023.0229L44.6886%2032.0089L53.1738%2023.5236L44.1879%2014.5377L35.7026%2023.0229ZM35.7026%204.27048C30.5243%209.44882%2030.5243%2017.8446%2035.7026%2023.0229L44.1879%2014.5377C43.6958%2014.0456%2043.6958%2013.2478%2044.1879%2012.7558L35.7026%204.27048Z'%20fill='%23353535'%20mask='url(%23path-1-outside-1_10666_596)'/%3e%3c/svg%3e",Or="/slider-app/assets/left-arrow-KMrI0ntJ.svg",Ct=({activeTab:e="All",images:t=[],videos:r=[]})=>{const n=h.useRef(null),s=()=>{n.current&&n.current.scrollBy({left:-400,behavior:"smooth"})},a=()=>{n.current&&n.current.scrollBy({left:400,behavior:"smooth"})},o=()=>{switch(e){case"Images":return i.jsx("div",{className:"horizontal-gallery",ref:n,children:t.map((l,c)=>i.jsx("img",{src:l,alt:`Images ${c+1}`,className:"gallery-item-updated"},c))});case"Videos":return i.jsx("div",{className:"horizontal-gallery",ref:n,children:r.map((l,c)=>i.jsxs("video",{className:"gallery-item-updated",controls:!0,children:[i.jsx("source",{src:l,type:"video/mp4"}),"Your browser does not support the video tag."]},c))});default:return i.jsxs("div",{className:"horizontal-gallery",ref:n,children:[t.map((l,c)=>i.jsx("img",{src:l,alt:`Images ${c+1}`,className:"gallery-item-updated"},c)),r.map((l,c)=>i.jsxs("video",{className:"gallery-item-updated",controls:!0,children:[i.jsx("source",{src:l,type:"video/mp4"}),"Your browser does not support the video tag."]},c))]})}};return i.jsxs("div",{style:{display:"flex",padding:"20px"},children:[i.jsx(Be,{src:Or,onClick:s,alt:"left arrow"}),i.jsx("div",{className:"right-scroll",children:o()}),i.jsx(Be,{src:Mr,onClick:a,alt:"right arrow"})]})},sa=()=>{const e=[Jn,es,Kn,qn,Qn],t=[Tt,Tt],[r,n]=h.useState("All");return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"tab-section",children:[i.jsx("button",{onClick:()=>n("All"),className:`tab ${r==="All"?"active":""}`,children:"ALL"}),i.jsx("button",{onClick:()=>n("Images"),className:`tab ${r==="Images"?"active":""}`,children:"IMAGES"}),i.jsx("button",{onClick:()=>n("Videos"),className:`tab ${r==="Videos"?"active":""}`,children:"VIDEOS"})]}),i.jsx(Ct,{videos:t,images:e,activeTab:r})]})},aa="/slider-app/assets/first1-B8fhSxbi.png",ia=()=>i.jsxs("div",{className:"content-wrapper",children:[i.jsx("div",{className:"slider-tip"}),i.jsxs("div",{className:"dog-section-updated",children:[i.jsx("img",{src:aa,alt:"Dog",className:"dog-image-updated"}),i.jsxs("div",{className:"dog-history-updated",children:[i.jsx("h3",{className:"history-heading",children:"History of"}),i.jsx("h2",{className:"dog-name-updated",children:"Alabay"}),i.jsx("p",{className:"right-text",children:"The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty."})]})]})]}),oa="/slider-app/assets/second-CuH-I1dT.png",ca="/slider-app/assets/third-CfH-DwKw.png",la=f.div`
  padding-top: 5rem;
  width: 90%;
  margin: auto;
`,ua=f.div`
  font-size: 6rem;
  font-family: "CHEESEBURGA", sans-serif;
  color: white;
`,da=f.div`
  display: flex;
`,pa=f.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`,ha=f.div`
  display: flex;
`,fa=f.div`
  margin-top: 20px;
  color: rgba(255, 168, 0, 1);
`,ga=f.img`
  height: 500px;
  transform: translateY(-3rem);
`,ma=()=>i.jsxs(la,{children:[i.jsx(ua,{children:"ROAD MAP"}),i.jsx(da,{children:i.jsxs(ha,{children:[i.jsxs(pa,{children:["Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.",i.jsx(fa,{children:"Join us as we grow and achieve new heights"})]}),i.jsx(ga,{src:ca,alt:"Dog"})]})})]}),va="/slider-app/assets/building-dog-DJ7-xSo_.svg",xa="/slider-app/assets/merchandise-dog-C_nJwQn0.svg",ya="/slider-app/assets/events-dog-Dzxj37UE.svg",ba="/slider-app/assets/expansion-dog-BVHyLWc5.svg",wa=f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;

  @media (min-width: 769px) {
    justify-content: space-between;
    flex-wrap: nowrap; /* Prevent wrapping on larger screens */
  }
`,je=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

    &:first-child {
    border-top-left-radius: 15px; /* Adjust value as needed */
  }

  /* Set top-right radius for last child */
  &:last-child {
    border-top-right-radius: 15px; /* Adjust value as needed */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
  }
`,Ee=f.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
`,Se=f.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`,Ca=()=>i.jsxs(wa,{children:[i.jsxs(je,{style:{background:"linear-gradient(180deg, #DBC70C 0%, rgba(255, 242, 128, 0) 100%)"},children:[i.jsx(Ee,{children:"Community Building and Initial Launch"}),i.jsx(Se,{src:va,alt:"Dog Build"})]}),i.jsxs(je,{style:{background:"linear-gradient(180deg, #00D4D4 0%, rgba(65, 255, 255, 0) 100%)"},children:[i.jsx(Ee,{children:"Merchandise Store Launch"}),i.jsx(Se,{src:xa,alt:"Dog Merchandise"})]}),i.jsxs(je,{style:{background:"linear-gradient(180deg, #D427FF 0%, rgba(212, 39, 255, 0) 100%)"},children:[i.jsx(Ee,{children:"Community Events and Contests"}),i.jsx(Se,{src:ya,alt:"Dog Events"})]}),i.jsxs(je,{style:{background:"linear-gradient(179.53deg, #8F3A3C 0.41%, rgba(143, 58, 60, 0) 95.85%)"},children:[i.jsx(Ee,{children:"Expansions and New Features"}),i.jsx(Se,{src:ba,alt:"Dog Expansion"})]})]}),ja=f.div`
  background: linear-gradient(190deg, transparent 54.5%, #fff 20%),
    linear-gradient(-11deg, transparent 81.5%, #fff 20%),
    radial-gradient(50% 13.19% at 50% 36.33%, #fff280 0%, #ffc700 100%);
`,Ea=f.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.87);
  margin: 2rem;
`,Sa=()=>i.jsxs(ja,{children:[i.jsx("div",{className:"second",children:i.jsx("img",{src:oa,alt:"Dog",className:"second-img"})}),i.jsx(Ea,{children:"Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together."}),i.jsx(ma,{}),i.jsx(Ca,{})]}),La="/slider-app/assets/economy-dog-CrUWD26k.svg",Aa=f.button`
  background: rgba(53, 53, 53, 1);
  box-shadow: 16.62px 20.12px 35.77px 0px rgba(168, 125, 41, 1);
  width: 70%;
  height: 7rem;
  border-radius: 1rem;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`,Ra=f.label`
  font-size: 1.5rem;
  font-weight: 900;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`,ka=f.label`
  font-size: 2rem;
  font-weight: 900;
  text-align: left;
  color: rgba(255, 242, 128, 1);
`,tt=({text1:e,text2:t})=>i.jsxs(Aa,{children:[i.jsx(Ra,{children:e}),i.jsx(ka,{children:t})]}),Ia=f.div`
  background: linear-gradient(188deg, transparent 67.5%, #fff 20%),
    linear-gradient(-7deg, transparent 88.5%, #fff 20%),
    radial-gradient(50% 13.19% at 50% 36.33%, #fff280 0%, #ffc700 100%);
  padding-top: 10rem;
`,$a=f.div`
  font-size: 6rem;
  font-family: "CHEESEBURGA", sans-serif;
  width: 90%;
  color: white;
  margin: auto;
`,Pa=f.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 90%;
`,Na=f.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  padding-top: 5rem;
`,Ta=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }
`,_a=()=>i.jsxs(Ia,{children:[i.jsx($a,{children:"TOCKNOMICS"}),i.jsxs(Pa,{children:[i.jsxs(Na,{children:[i.jsx(tt,{text1:"LIQUIDITY",text2:"LOCKED"}),i.jsx(tt,{text1:"CONTRACT",text2:"RENOUNCED"}),i.jsx(tt,{text1:"TAXES",text2:"0%"})]}),i.jsx(Ta,{children:i.jsx("img",{src:La,alt:"Dog",className:"img5"})})]})]}),Ba="/slider-app/assets/black-hoodie-bck-Dbr0qJPY.png",Ma="/slider-app/assets/black-hoodie-BfKOuaLX.png",Oa="/slider-app/assets/blue-cap-bck-TAZW5cHA.png",Da="/slider-app/assets/cap-mockup-DrfzuWFh.png",za="/slider-app/assets/pink-tee-bck-Ds4-CTI2.png",Ua="/slider-app/assets/pink-tshirt-I8nhePTM.png",Wa="/slider-app/assets/yellow-tee-bck-BqtbvA6q.png",Fa="/slider-app/assets/yellow-tshirt-C4u4OSme.png",Ha="data:image/svg+xml,%3csvg%20width='97'%20height='96'%20viewBox='0%200%2097%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='48'%20cy='48'%20r='48'%20transform='matrix(-1%200%200%201%2096.5%200)'%20fill='white'/%3e%3cpath%20d='M22.5%2050.5C21.1193%2050.5%2020%2049.3807%2020%2048C20%2046.6193%2021.1193%2045.5%2022.5%2045.5L22.5%2050.5ZM76.2678%2046.2322C77.2441%2047.2085%2077.2441%2048.7915%2076.2678%2049.7678L60.3579%2065.6777C59.3816%2066.654%2057.7986%2066.654%2056.8223%2065.6777C55.846%2064.7014%2055.846%2063.1184%2056.8223%2062.1421L70.9645%2048L56.8223%2033.8579C55.846%2032.8816%2055.846%2031.2986%2056.8223%2030.3223C57.7986%2029.346%2059.3816%2029.346%2060.3579%2030.3223L76.2678%2046.2322ZM22.5%2045.5L74.5%2045.5L74.5%2050.5L22.5%2050.5L22.5%2045.5Z'%20fill='%23575472'/%3e%3c/svg%3e",Ga="data:image/svg+xml,%3csvg%20width='97'%20height='96'%20viewBox='0%200%2097%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='48.5'%20cy='48'%20r='48'%20fill='white'/%3e%3cpath%20d='M74.5%2050.5C75.8807%2050.5%2077%2049.3807%2077%2048C77%2046.6193%2075.8807%2045.5%2074.5%2045.5L74.5%2050.5ZM20.7322%2046.2322C19.7559%2047.2085%2019.7559%2048.7915%2020.7322%2049.7678L36.6421%2065.6777C37.6184%2066.654%2039.2014%2066.654%2040.1777%2065.6777C41.154%2064.7014%2041.154%2063.1184%2040.1777%2062.1421L26.0355%2048L40.1777%2033.8579C41.154%2032.8816%2041.154%2031.2986%2040.1777%2030.3223C39.2014%2029.346%2037.6184%2029.346%2036.6421%2030.3223L20.7322%2046.2322ZM74.5%2045.5L22.5%2045.5L22.5%2050.5L74.5%2050.5L74.5%2045.5Z'%20fill='%23575472'/%3e%3c/svg%3e",Za="/slider-app/assets/guard-prev-21-Acbtt_xP.png",Va="/slider-app/assets/lost-heritage-prev1-DBbHLtB-.png",Ya="data:image/svg+xml,%3csvg%20width='59'%20height='52'%20viewBox='0%200%2059%2052'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2022.5C2.067%2022.5%200.5%2024.067%200.5%2026C0.5%2027.933%202.067%2029.5%204%2029.5V22.5ZM57.4749%2028.4749C58.8417%2027.108%2058.8417%2024.892%2057.4749%2023.5251L35.201%201.25126C33.8342%20-0.115572%2031.6181%20-0.115572%2030.2513%201.25126C28.8844%202.6181%2028.8844%204.83418%2030.2513%206.20101L50.0503%2026L30.2513%2045.799C28.8844%2047.1658%2028.8844%2049.3819%2030.2513%2050.7487C31.6181%2052.1156%2033.8342%2052.1156%2035.201%2050.7487L57.4749%2028.4749ZM4%2029.5H55V22.5H4V29.5Z'%20fill='white'/%3e%3c/svg%3e",pt="/slider-app/assets/game-preview-img1-B8xMPKBN.svg",ht="/slider-app/assets/game-preview-img2-BmkJcpVU.svg",ft="/slider-app/assets/game-preview-img3-CZLH_AyL.svg",Xa="/slider-app/assets/alabay-guardian-B0an_08x.svg",Dr="/slider-app/assets/alabay-heritage-DnXPqYxf.svg",Ja="/slider-app/assets/abilities-CMOKLexj.png",Ka="/slider-app/assets/artifacts-CWFc-g_R.png",qa="/slider-app/assets/locations-preview-CP0xMXJH.png",Qa="/slider-app/assets/overview-ClvfElLc.png",ei="/slider-app/assets/image1-guard-CFg3fxuT.png",ti="/slider-app/assets/image2-guard-BdMSqu89.png",ri="/slider-app/assets/image3-guard-BmGn9Co2.png",ni="/slider-app/assets/social-media-t-XV2vU-0C.svg",si="/slider-app/assets/social-media-x-PLy_tMjD.svg",ai="/slider-app/assets/social-media-dog-BkUsLl3O.svg",ii=f.a`
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
`,oi=f.label`
  color: rgba(255, 255, 255, 1);
  font-size: 1.5rem;
  font-weight: 900;
`,ci=f.img`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
`,Jt=({logo:e="",text:t="",href:r="#"})=>i.jsxs(ii,{href:r,children:[i.jsx(ci,{src:e,alt:"Dog"}),i.jsx(oi,{children:t})]}),Kt=f.div`
  font-size: 6rem;
  font-family: "CHEESEBURGA", sans-serif;
  color: rgba(255, 168, 0, 1);
`,li=f.div`
    width: 90%;
    margin: auto;
`,ui=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,di=f.img``,pi=f.div`
  display: flex;
  flex-direction: column;
`,hi=f.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 30vh;
  border-radius: 2rem;
  box-shadow: 15px 15px 34.3px 0px rgba(0, 0, 0, 0.37);
  border: 8px solid rgba(5, 83, 200, 0.66);
  background: linear-gradient(137.69deg, #80b3ff 31.37%, #417df1 84.39%);
  align-items: center;
  justify-content: center;
  
`,fi=()=>i.jsxs(li,{children:[i.jsx(Kt,{children:"SOCIAL MEDIA"}),i.jsx(Kt,{children:"LINKS"}),i.jsxs(ui,{children:[i.jsx(hi,{children:i.jsxs(pi,{children:[i.jsx(Jt,{logo:si,text:"Twitter Link"}),i.jsx(Jt,{logo:ni,text:"Telegram Link"})]})}),i.jsx(di,{src:ai,alt:"Dog",className:"img5"})]})]}),gi=f.img`
  border-radius: 10px;
  width: -webkit-fill-available;
  border-radius: 2rem;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  transform: ${({direction:e})=>e==="left"?"translateX(-30%)":e==="right"?"translateX(30%)":"translateX(0)"};
  opacity: ${({direction:e})=>e?0:1};
`,mi=f.div`
  margin: auto;
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  position: relative;
`,vi=f.div`
  font-size: 6rem;
  font-family: "CHEESEBURGA", sans-serif;
  color: rgba(255, 255, 255, 1);
  margin: 5rem auto 2rem;
  width: 100%;
  text-align: center;
`,xi=f.div`
  font-size: 2rem;
  margin: auto;
  margin-bottom: 2rem;
  width: 100%;
  font-weight: 900;
  text-align: center;
`,yi=f.div`
  z-index: 4;
  position: absolute;
  left: 0;
`,bi=f.div`
  position: absolute;
  right: 0;
`,wi=f.button`
  border: none;
  box-shadow: 12px 11px 11.3px 0px rgba(0, 0, 0, 0.61);
  background: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2rem;
  padding: 1rem 2rem;
  border-radius: 8rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 1);

  & :hover {
    cursor: pointer;
  }
`,Ci=f.img`
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 1.2rem;
`,qt=f.label`
  color: ${({color:e="red"})=>e};
  padding: 0.3rem;
  font-weight: 900;
  font-size: 2rem;
`,ji=f.div`
  margin: 5rem auto 0;
  width: 80%;
`,Ei=f.label`
  font-weight: 900;
`,Si=()=>{const e=[Za,Va],t=[pt,ht,ft],r=$n(),[n,s]=h.useState(0),[a,o]=h.useState(null),l=()=>{o("right"),setTimeout(()=>{s(u=>u===e.length-1?0:u+1),o(null)},500)},c=()=>{o("left"),setTimeout(()=>{s(u=>u===0?e.length-1:u-1),o(null)},500)},p=()=>{const u=n===0?[ei,ti,ri]:[Ja,Ka,qa,Qa];r("/game-player",{state:{gameData:n===0?{backgroundImage:Xa,color:"rgba(164, 168, 255, 1)",header:"ALABAY GUARDIAN",text:"SHEPHERD OF THE STEPPES",images:u}:{backgroundImage:Dr,color:"rgba(144, 255, 174, 1)",header:"ALABAY HERITAGE",text:"THE LOST ADVENTURE",images:u}}})};return i.jsxs("div",{children:[i.jsx(vi,{children:"GAMES"}),i.jsx(xi,{children:"Stay tuned for upcoming games!"}),i.jsxs(mi,{children:[i.jsx(yi,{children:i.jsx(Be,{src:Or,onClick:c,alt:"left arrow"})}),i.jsx(gi,{src:e[n],alt:`Slide ${n+1}`,direction:a}),i.jsxs(wi,{onClick:p,background:n===0?"rgba(132, 58, 252, 1)":"rgba(69, 214, 137, 1)",children:[i.jsx(Ei,{children:"DISCOVER"}),i.jsx(Ci,{src:Ya,alt:"right button arrow"})]}),i.jsx(bi,{children:i.jsx(Be,{src:Mr,onClick:l,alt:"right arrow"})})]}),i.jsxs(ji,{children:[i.jsx(qt,{color:"rgba(255, 168, 0, 1)",children:"GAME"}),i.jsx(qt,{color:"rgba(53, 53, 53, 1)",children:"PREVIEWS"})]}),i.jsx(Ct,{images:t}),i.jsx(fi,{})]})},Li=f.div`
  background: linear-gradient(191deg, transparent 50.5%, #fff 20%),
    linear-gradient(-7deg, transparent 72.5%, #fff 20%),
    radial-gradient(50% 13.19% at 50% 36.33%, #fff280 0%, #ffc700 100%);
  padding: 5rem 0;
`,Ai=f.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "CHEESEBURGA", sans-serif;
  color: rgba(255, 168, 0, 1);
  font-size: 7rem;
  transform: translateY(-10rem);
`,Ri=f.div`
  position: relative;
  border-radius: 2rem;
  width: 80%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`,ki=f.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
  transform: ${({direction:e})=>e==="left"?"translateX(-30%)":e==="right"?"translateX(30%)":"translateX(0)"};
  opacity: ${({direction:e})=>e?0:1};
`,Ii=f.img`
  border-radius: 10px;
  width: -webkit-fill-available;
  border-radius: 2rem;
  position: relative;
  z-index: 2;
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
  transform: ${({direction:e})=>e==="left"?"translateX(-30%)":e==="right"?"translateX(30%)":"translateX(0)"};
  opacity: ${({direction:e})=>e?0:1};
`,$i=f.div`
  z-index: 5;
  position: absolute;
  right: 1rem;
  &:hover {
    cursor: pointer;
  }
`,Pi=f.div`
  z-index: 5;
  position: absolute;
  left: 1rem;
  &:hover {
    cursor: pointer;
  }
`,Ni=()=>{const e=[Ma,Da,Ua,Fa],t=[Ba,Oa,za,Wa],[r,n]=h.useState(0),[s,a]=h.useState(null),o=()=>{a("right"),setTimeout(()=>{n(c=>c===e.length-1?0:c+1),a(null)},800)},l=()=>{a("left"),setTimeout(()=>{n(c=>c===0?e.length-1:c-1),a(null)},800)};return i.jsxs(Li,{children:[i.jsx(Ai,{children:"MERCHANDISE"}),i.jsx("div",{className:"slide1",children:i.jsxs(Ri,{children:[i.jsx(Pi,{children:i.jsx("img",{src:Ga,alt:"",onClick:l,width:"50"})}),i.jsx(ki,{src:t[r],alt:`Background ${r+1}`,direction:s}),i.jsx(Ii,{src:e[r],alt:`Slide ${r+1}`,direction:s}),i.jsx($i,{children:i.jsx("img",{src:Ha,alt:"",onClick:o,width:"50"})})]})}),i.jsx(Si,{})]})},Ti=()=>{const[e,t]=h.useState(310);return h.useEffect(()=>{const r=()=>{window.scrollY===310&&t(20),window.scrollY===0&&t(310)};return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),i.jsx("div",{className:"scrollable-slider",style:{transform:`translateY(${e}px)`},children:i.jsxs("div",{className:"wrapper",children:[i.jsx(ia,{}),i.jsx(sa,{}),i.jsx("div",{className:"head1-updated",children:"project vision"}),i.jsx(Sa,{}),i.jsx(_a,{}),i.jsx(Ni,{})]})})},_i=()=>i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"text-container",children:[i.jsx("h1",{className:"gradient-text",children:"WELCOME TO ALBAY WORLD"}),i.jsxs("div",{className:"description",children:[i.jsx("span",{className:"highlight",children:"legendary Central Asian Shepherd Dog"})," ","meets a new-age adventure. ",i.jsx("span",{className:"highlight",children:"Join us"})," ","in celebrating the ",i.jsx("span",{className:"highlight",children:"strength"}),","," ",i.jsx("span",{className:"highlight",children:"loyalty"}),", and"," ",i.jsx("span",{className:"highlight",children:"heritage"})," of the Alabay breed."]})]}),i.jsx(Ti,{})]}),Bi="data:image/svg+xml,%3csvg%20width='43'%20height='44'%20viewBox='0%200%2043%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='21.0678'%20cy='21.999'%20r='21.06'%20fill='%23201E26'/%3e%3cpath%20d='M17.0865%2018.3331C17.0865%2017.2246%2018.2865%2016.5318%2019.2465%2017.0861L27.1737%2021.6628C28.1337%2022.2171%2028.1337%2023.6027%2027.1737%2024.157L19.2465%2028.7338C18.2865%2029.288%2017.0865%2028.5952%2017.0865%2027.4867L17.0865%2018.3331Z'%20fill='white'/%3e%3c/svg%3e",Mi=f.button`
  background: ${e=>e.color};
  display: flex;
  align-items: center;
  justify-content: center; /* Centers the span */
  width: 10%;
  height: 3rem;
  border-radius: 1.5rem;

  img {
    width: 2rem;
  }

  span {
    flex: 1; /* Allows the span to take up the remaining space and center itself */
    text-align: center;
    font-weight: 700;
    margin: auto;
  }

  &: hover {
    cursor: pointer;
  }
`,zr=({color:e,onClick:t})=>i.jsxs(Mi,{color:e,onClick:t,children:[i.jsx("img",{src:Bi,alt:"Play Button"}),i.jsx("span",{children:"PLAY"})]}),Oi=f.div`
  color: rgba(255, 255, 255, 1);
  font-size: 1rem;
  width: 20%;
  font-weight: 500;
`,Di=f.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%;
  margin: auto;
  z-index: 1;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1.5s ease, transform 1.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,Qt=f.label`
  color: ${({color:e="red"})=>e};
  padding: 0.3rem;
  font-weight: 600;
  font-size: 1.5rem;
`,zi=({color:e,images:t=[],setPlaying:r})=>{const[n,s]=h.useState(!1);return h.useEffect(()=>{const a=setTimeout(()=>{s(!0)},500);return()=>clearTimeout(a)},[]),i.jsxs(Di,{className:n?"visible":"",children:[i.jsx(Oi,{children:"Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors."}),i.jsx(zr,{color:e,onClick:()=>r(!0)}),i.jsxs("div",{children:[i.jsx(Qt,{color:e,children:"GAME"}),i.jsx(Qt,{color:"rgba(255, 255, 255, 1)",children:"PREVIEW"})]}),i.jsx(Ct,{images:t})]})},Ui=f.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
  margin-top: 3rem;

  z-index: 1;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1.5s ease, transform 1.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,Wi=f.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`,Fi=f.div`
  color: ${e=>e.color};
  font-size: 1.5rem;
  font-weight: 600;
`,Hi=f.button`
  width: 10%;
  border: 2px solid rgba(255, 255, 255, 1);
  background: transparent;
  color: rgba(255, 255, 255, 1);
  height: 3rem;
  border-radius: 2rem;
  font-weight: 600;

  &: hover {
    cursor: pointer;
  }
`,Gi=f.div`
  height: 15rem;
  overflow-y: scroll;
  width: 100%;
  line-height: 2rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  span {
    color: ${e=>e.color};
  }

  /* WebKit-based browsers (Chrome, Safari, etc.) */
  &::-webkit-scrollbar {
    width: 16px; /* Adjust the width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: rgba(217, 217, 217, 0.34); /* Scrollbar track background */
    border-radius: 1rem; /* Border radius for the scrollbar track */
  }

  &::-webkit-scrollbar-thumb {
    background: ${e=>e.color}; /* Scrollbar thumb color */
    border-radius: 1rem; /* Border radius for the scrollbar thumb */
    border: 3px solid rgba(217, 217, 217, 0.34); /* Optional border around thumb to give more visibility */
  }

  /* Firefox */
  scrollbar-width: thin; /* Makes the scrollbar thinner */
  scrollbar-color: ${e=>e.color} rgba(217, 217, 217, 0.34); /* Thumb and track colors */
`,Zi=({color:e="rgba(144, 255, 174, 1)",setPlaying:t})=>{const r=`Explore a variety of landscapes, including [mountains], [forests], [deserts], and [ancient ruins].
    Use the Alabay's [abilities] to solve [puzzles] that involve moving objects, activating mechanisms, or finding hidden clues.
    Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.
    Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.
    Challenge Modes:
    - [Time Trials]: Compete in special timed challenges where the Alabai must navigate through complex mazes or
    complete puzzles within a time limit.
    - [Exploration Mastery]: A mode that rewards players for fully exploring every nook and cranny of the game’s world,
    uncovering all secrets.
    Explore a variety of landscapes, including [mountains], [forests], [deserts], and [ancient ruins].
    Use the Alabay's [abilities] to solve [puzzles] that involve moving objects, activating mechanisms, or finding hidden clues.
    Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.
    Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.
    Challenge Modes:
    - [Time Trials]: Compete in special timed challenges where the Alabai must navigate through complex mazes or
    complete puzzles within a time limit.
    - [Exploration Mastery]: A mode that rewards players for fully exploring every nook and cranny of the game’s world,
    uncovering all secrets.`,n=o=>o.split(new RegExp("(?<=\\.)","g")).map(c=>c.trim()).map((c,p)=>i.jsx("div",{children:c.split(/(\[.*?\])/).map((u,d)=>u.startsWith("[")&&u.endsWith("]")?i.jsx("span",{children:u.slice(1,-1)},d):u)},p));h.useEffect(()=>{const o=setTimeout(()=>{a(!0)},500);return()=>clearTimeout(o)},[]);const[s,a]=h.useState(!1);return i.jsxs(Ui,{className:s?"visible":"",children:[i.jsx(Fi,{color:e,children:"FEATURES"}),i.jsx(Gi,{color:e,children:n(r)}),i.jsxs(Wi,{children:[i.jsx(zr,{color:"rgba(255, 255, 255, 1)",onClick:()=>t(!1)}),i.jsx(Hi,{onClick:()=>t(!1),children:"Exit"})]})]})},Vi=f.div`
  background-image: url(${e=>e.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`,Yi=f.div`
  font-family: "BaronKuffner", sans-serif;
  font-size: 5rem;
  color: rgba(255, 255, 255, 1);
  width: 90%;
  margin: auto;
`,Xi=f.div`
  color: ${e=>e.color};
  font-size: 2rem;
  letter-spacing: 0.3rem;
  font-weight: 600;
  width: 90%;
  margin: auto;
`,Ji=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  opacity: 0;
  transform: translateY(-50px);
  transition: opacity 1.5s ease, transform 1.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`,Ki=[pt,ht,ft,pt,ht,ft],qi=()=>{const e=mt(),{gameData:t}=e.state||{},{backgroundImage:r=Dr,color:n="rgba(144, 255, 174, 1)",header:s="ALABAY HERITAGE",text:a="THE LOST ADVENTURE",images:o=Ki}=t,[l,c]=h.useState(!1),[p,u]=h.useState(!1);return h.useEffect(()=>{const d=setTimeout(()=>{c(!0)},500);return()=>clearTimeout(d)},[]),i.jsx(Vi,{backgroundImage:r,children:i.jsxs(Ji,{className:l?"visible":"",children:[i.jsx(Yi,{children:s}),i.jsx(Xi,{color:n,children:a}),p?i.jsx(Zi,{color:n,setPlaying:u}):i.jsx(zi,{color:n,images:o,setPlaying:u})]})})},Qi=()=>i.jsx(Xn,{children:i.jsxs(Zn,{children:[i.jsx(nt,{path:"/",element:i.jsx(_i,{})}),i.jsx(nt,{path:"/game-player",element:i.jsx(qi,{})})]})});rr(document.getElementById("root")).render(i.jsx(h.StrictMode,{children:i.jsx(Qi,{})}));
