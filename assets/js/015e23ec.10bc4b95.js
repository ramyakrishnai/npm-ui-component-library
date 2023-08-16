"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>R,contentTitle:()=>j,default:()=>Z,frontMatter:()=>A,metadata:()=>P,toc:()=>D});var r=n(7462),a=n(7294),l=n(3905);const o={Table:e=>{let{children:t,docs:n}=e;const r=[];return a.createElement("div",{className:"props-table"},a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Attribute"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"),a.createElement("th",null,"Default"))),a.createElement("tbody",null,!t&&!n&&a.createElement("div",{className:"empty-props"},"This component has no props."),(()=>{if(n)for(const e in n)if(console.log(e),n.hasOwnProperty(e)){const t=n[e];t.name=e,void 0===t.type&&(t.type=[]),void 0===t.description&&(t.description=""),void 0===t.defaultValue&&(t.defaultValue=""),void 0===t.isRequired&&(t.isRequired=!1),r.push(a.createElement(o.Row,{key:t.name,name:t.name,type:t.type,description:t.description,defaultValue:t.defaultValue,isRequired:t.isRequired}))}return r})(),t)))}};o.Row=e=>{let{name:t,type:n=[],description:r="-",defaultValue:l="-",isRequired:o=!1}=e;return t&&"string"==typeof t?a.createElement("tr",null,a.createElement("td",{className:"props-table-name-col"},"boolean"==typeof o&&o?a.createElement("span",{className:"required-prop"},t,a.createElement("sup",null,"*")):a.createElement("span",null,t)),a.createElement("td",{className:"props-table-types-col"},(()=>{let e=n;return"string"==typeof e&&(e=[e]),e.length>0?a.createElement(a.Fragment,null,e.map(((e,t)=>a.createElement(a.Fragment,{key:t},a.createElement("code",null,e),a.createElement("span",null," | "))))):a.createElement("span",null,"-")})()),a.createElement("td",{className:"props-table-description-col"},r&&"string"==typeof r&&""!==r?a.createElement("span",null,r):a.createElement("span",null,"-")),a.createElement("td",{className:"props-table-default-col"},l&&"string"==typeof l&&""!==l&&"-"!==l?a.createElement("code",null,l):a.createElement("span",null,"-"))):(console.warn("From: PropsTable.Row. Invalid prop name or missing required props: name."),null)};const s=o;var i=n(1629),c=n(4184),p=n.n(c),m=n(5697),u=n.n(m),d=n(403),f=n(6486);const y={variant:{success:"nfd-validation-message--success",warning:"nfd-validation-message--warning",info:"nfd-validation-message--info",error:"nfd-validation-message--error"}},h=({as:e="p",variant:t="info",children:n,className:r="",...l})=>(0,a.createElement)(e,{...l,className:p()("nfd-validation-message",y.variant[t],r)},n);h.propTypes={as:u().elementType,variant:u().oneOf((0,f.keys)(y.variant)),message:u().node,className:u().string,children:u().node.isRequired};const v=h,b={variant:{info:"nfd-alert--info",warning:"nfd-alert--warning",success:"nfd-alert--success",error:"nfd-alert--error"}},g={alert:"alert",status:"status"},k=(0,a.forwardRef)((({children:e,role:t="status",as:n="span",variant:r="info",className:l="",...o},s)=>(0,a.createElement)(n,{ref:s,className:p()("nfd-alert",b.variant[r],l),role:g[t],...o},(0,a.createElement)(d.Z,{variant:r,className:"nfd-alert__icon"}),(0,a.createElement)(v,{as:"div",variant:r,className:"nfd-alert__message"},e)))),w={children:u().node.isRequired,as:u().elementType,variant:u().oneOf(Object.keys(b.variant)),className:u().string,role:u().oneOf(Object.keys(g))};k.propTypes=w,k.defaultProps={as:"span",variant:"info",className:"",role:"status"};const E=k,T=e=>(0,a.createElement)(k,{...e});T.propTypes=k.propTypes,T.DefaultProps=k.defaultProps,T.displayName="Alert";const N={toc:[{value:"Info",id:"info",level:4},{value:"Warning",id:"warning",level:4},{value:"Success",id:"success",level:4},{value:"Error",id:"error",level:4}]},O="wrapper";function x(e){let{components:t,...n}=e;return(0,l.kt)(O,(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"info"},"Info"),(0,l.kt)(i.Z,{mdxType:"NewfoldRoot"},(0,l.kt)(E,{variant:"info",mdxType:"Alert"},"This is an information alert"," ",(0,l.kt)("a",{href:"https://github.com/newfold-labs/npm-ui-component-library"},"with a link"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Alert variant="info">\n    This is an information alert{\' \'}\n    <a href="https://github.com/newfold-labs/npm-ui-component-library">\n      with a link\n    </a>\n    . (default)\n</Alert>\n')),(0,l.kt)("h4",{id:"warning"},"Warning"),(0,l.kt)(i.Z,{mdxType:"NewfoldRoot"},(0,l.kt)(E,{variant:"warning",mdxType:"Alert"},"This is a warning alert"," ",(0,l.kt)("a",{href:"https://github.com/newfold-labs/npm-ui-component-library"},"with a link"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Alert variant="warning">\n    This is a warning alert{\' \'}\n    <a href="https://github.com/newfold-labs/npm-ui-component-library">\n      with a link\n    </a>\n    .\n</Alert>\n')),(0,l.kt)("h4",{id:"success"},"Success"),(0,l.kt)(i.Z,{mdxType:"NewfoldRoot"},(0,l.kt)(E,{role:"alert",variant:"success",mdxType:"Alert"},"This is a success alert"," ",(0,l.kt)("a",{href:"https://github.com/newfold-labs/npm-ui-component-library"},"with a link"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Alert\n    role="alert"\n    variant="success"\n>\n    This is a success alert{\' \'}\n    <a href="https://github.com/newfold-labs/npm-ui-component-library">\n      with a link\n    </a>\n    .\n</Alert>\n')),(0,l.kt)("h4",{id:"error"},"Error"),(0,l.kt)(i.Z,{mdxType:"NewfoldRoot"},(0,l.kt)(E,{role:"alert",variant:"error",mdxType:"Alert"},"This is an error alert"," ",(0,l.kt)("a",{href:"https://github.com/newfold-labs/npm-ui-component-library"},"with a link"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Alert\n    role="alert"\n    variant="error"\n>\n    This is an error alert{\' \'}\n    <a href="https://github.com/newfold-labs/npm-ui-component-library">\n      with a link\n    </a>\n    .\n</Alert>\n')))}x.isMDXComponent=!0;const A={sidebar_position:1},j="Alert",P={unversionedId:"elements/alert",id:"elements/alert",title:"Alert",description:"A simple alert component.",source:"@site/docs/elements/alert.mdx",sourceDirName:"elements",slug:"/elements/alert",permalink:"/npm-ui-component-library/docs/elements/alert",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/elements/alert.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Elements",permalink:"/npm-ui-component-library/docs/category/elements"}},R={},D=[{value:"Usage",id:"usage",level:3},{value:"Variants",id:"variants",level:3},{value:"Props",id:"props",level:3}],q={toc:D},_="wrapper";function Z(e){let{components:t,...n}=e;return(0,l.kt)(_,(0,r.Z)({},q,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alert"},"Alert"),(0,l.kt)("p",null,"A simple alert component."),(0,l.kt)(i.Z,{mdxType:"NewfoldRoot"},(0,l.kt)(E,{mdxType:"Alert"},"This is an information alert. \ud83d\ude80")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Alert } from "@newfold/ui-component-library";\n\n<Alert>This is an information alert. \ud83d\ude80</Alert>\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"variants"},"Variants"),(0,l.kt)("p",null,"The Alert provides four different levels, each with a unique icon and color."),(0,l.kt)(x,{mdxType:"Variants"}),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"props"},"Props"),(0,l.kt)(s.Table,{docs:E.docs}))}Z.isMDXComponent=!0}}]);