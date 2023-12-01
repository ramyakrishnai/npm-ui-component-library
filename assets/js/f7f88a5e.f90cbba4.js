"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[9588],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>m});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(l),g=r,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||a;return l?n.createElement(m,o(o({ref:t},c),{},{components:l})):n.createElement(m,o({ref:t},c))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<a;d++)o[d]=l[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}g.displayName="MDXCreateElement"},3047:(e,t,l)=>{l.d(t,{Z:()=>m});var n=l(7294),r=l(3933),a=l(4184),o=l.n(a),i=l(5697),s=l.n(i),d=l(5667),c=l(1346);const p=(0,n.forwardRef)((({id:e,children:t,label:l,labelSuffix:a,description:i,checked:s,disabled:p,onChange:u,className:g,"aria-label":m,...f},b)=>(0,n.createElement)(r.r.Group,{as:"div",className:o()("nfd-toggle-field",p&&"nfd-toggle-field--disabled",g)},(0,n.createElement)("div",{className:"nfd-toggle-field__header"},l&&(0,n.createElement)("div",{className:"nfd-toggle-field__label-wrapper"},(0,n.createElement)(d.Z,{as:r.r.Label,className:"nfd-toggle-field__label",label:l,"aria-label":m}),a),(0,n.createElement)(c.Z,{id:e,ref:b,checked:s,onChange:u,screenReaderLabel:l,disabled:p,...f})),(i||t)&&(0,n.createElement)(r.r.Description,{as:"div",className:"nfd-toggle-field__description"},i||t)))),u={id:s().string.isRequired,children:s().node,label:s().string.isRequired,labelSuffix:s().node,description:s().node,checked:s().bool.isRequired,disabled:s().bool,onChange:s().func.isRequired,className:s().string,"aria-label":s().string};p.propTypes=u,p.defaultProps={children:null,labelSuffix:null,description:null,disabled:!1,className:""};const g=e=>(0,n.createElement)(p,{...e});g.propTypes=u,g.defaultProps=p.defaultProps,g.displayName="ToggleField";const m=p},5667:(e,t,l)=>{l.d(t,{Z:()=>p});var n=l(7294),r=l(4184),a=l.n(r),o=l(5697),i=l.n(o);const s=(0,n.forwardRef)((({as:e,className:t,label:l,children:r,...o},i)=>(0,n.createElement)(e,{ref:i,className:a()("nfd-label",t),...o},l||r||null))),d={label:i().string,children:i().string,as:i().elementType,className:i().string};s.propTypes=d,s.defaultProps={label:"",children:"",as:"label",className:""};const c=e=>(0,n.createElement)(s,{...e});c.propTypes=d,c.defaultProps=s.defaultProps,c.displayName="Label";const p=s},1346:(e,t,l)=>{l.d(t,{Z:()=>h});var n=l(7294),r=l(3933),a=l(4080),o=l(8057),i=l(8163),s=l(4184),d=l.n(s),c=l(6486),p=l(5697),u=l.n(p),g=l(7201);const m=(0,n.forwardRef)((({id:e,as:t,checked:l,screenReaderLabel:s,onChange:p,disabled:u,className:m,type:f,...b},h)=>{const y=(0,g.Z)();return(0,n.createElement)(r.r,{ref:h,as:t,checked:l,disabled:u,onChange:u?c.noop:p,className:d()("nfd-toggle",l&&"nfd-toggle--checked",u&&"nfd-toggle--disabled",m),"data-id":e,...b,type:"button"===t?"button":f},(0,n.createElement)("span",{className:"nfd-sr-only"},s),(0,n.createElement)("span",{className:"nfd-toggle__handle"},(0,n.createElement)(a.u,{show:l,unmount:!1,as:"span","aria-hidden":!l,enter:"",enterFrom:"nfd-opacity-0 nfd-hidden",enterTo:"nfd-opacity-100",leaveFrom:"nfd-opacity-100",leaveTo:"nfd-opacity-0 nfd-hidden"},(0,n.createElement)(o.Z,{className:"nfd-toggle__icon nfd-toggle__icon--check",...y})),(0,n.createElement)(a.u,{show:!l,unmount:!1,as:"span","aria-hidden":l,enterFrom:"nfd-opacity-0 nfd-hidden",enterTo:"nfd-opacity-100",leaveFrom:"nfd-opacity-100",leaveTo:"nfd-opacity-0 nfd-hidden"},(0,n.createElement)(i.Z,{className:"nfd-toggle__icon nfd-toggle__icon--x",...y}))))})),f={as:u().elementType,id:u().string.isRequired,checked:u().bool,screenReaderLabel:u().string.isRequired,onChange:u().func.isRequired,disabled:u().bool,type:u().string,className:u().string};m.propTypes=f,m.defaultProps={as:"button",checked:!1,disabled:!1,type:"",className:""};const b=e=>(0,n.createElement)(m,{...e});b.propTypes=f,b.defaultProps=m.defaultProps,b.displayName="Toggle";const h=m},2279:(e,t,l)=>{l.d(t,{n:()=>a,y:()=>o});var n=l(7294),r=l(3047);const a=e=>{let{id:t="toggle-field-demo",label:l="A toggle field",description:a,checked:o=!1,disabled:i=!1,className:s}=e;const[d,c]=(0,n.useState)(o);return n.createElement(r.Z,{id:t,label:l,description:a,checked:d,disabled:i,onChange:c,className:s})},o={id:{type:"string",description:"The id for the toggle field.",isRequired:!0},label:{type:"string",description:"The label for the toggle field.",isRequired:!0},checked:{type:"bool",description:"Toggle field checked state",defaultValue:"false",isRequired:!0},onChange:{type:"function",description:"Fired when changed. The function will receive the new value as an argument.",isRequired:!0},labelSuffix:{type:"string",description:"Content to display after the label."},description:{type:"node",description:"The description for the toggle field."},disabled:{type:"bool",description:"If true, the toggle will be disabled.",defaultValue:"false"},ariaLabel:{type:"string"},className:{type:"string"}}},2504:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(7294);const r={Table:e=>{let{children:t,docs:l}=e;const a=[],o=()=>!!(l&&"object"==typeof l&&Object.keys(l).length>0);return n.createElement("div",{className:"props-table"},n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Attribute"),n.createElement("th",null,"Type"),n.createElement("th",null,"Description"),n.createElement("th",null,"Default"))),n.createElement("tbody",null,!t&&!o()&&n.createElement("div",{className:"empty-props"},"This component has no props."),(()=>{if(o())for(const e in l)if(l.hasOwnProperty(e)){const t=l[e];t.name=e,void 0===t.type&&(t.type=[]),void 0===t.description&&(t.description=""),void 0===t.defaultValue&&(t.defaultValue=""),void 0===t.isRequired&&(t.isRequired=!1),a.push(n.createElement(r.Row,{key:t.name,name:t.name,type:t.type,description:t.description,defaultValue:t.defaultValue,isRequired:t.isRequired}))}return a})(),t)))}};r.Row=e=>{let{name:t,type:l=[],description:r="-",defaultValue:a="-",isRequired:o=!1}=e;return t&&"string"==typeof t?n.createElement("tr",null,n.createElement("td",{className:"props-table-name-col"},"boolean"==typeof o&&o?n.createElement("span",{className:"required-prop"},t,n.createElement("sup",null,"*")):n.createElement("span",null,t)),n.createElement("td",{className:"props-table-types-col"},(()=>{let e=l;return"string"==typeof e&&(e=[e]),e.length>0?n.createElement(n.Fragment,null,e.map(((e,t)=>n.createElement(n.Fragment,{key:t},n.createElement("code",null,e),n.createElement("span",null," | "))))):n.createElement("span",null,"-")})()),n.createElement("td",{className:"props-table-description-col"},r&&"string"==typeof r&&""!==r?n.createElement("span",null,r):n.createElement("span",null,"-")),n.createElement("td",{className:"props-table-default-col"},a&&"string"==typeof a&&""!==a&&"-"!==a?n.createElement("code",null,a):n.createElement("span",null,"-"))):(console.warn("From: PropsTable.Row. Invalid prop name or missing required props: name."),null)};const a=r},3615:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=l(7462),r=(l(7294),l(3905)),a=l(2504),o=l(1629),i=l(2279);const s={},d="Toggle Field",c={unversionedId:"components/toggle-field",id:"components/toggle-field",title:"Toggle Field",description:"A toggle switch allows users to switch between two states (on and off) by clicking or",source:"@site/docs/components/toggle-field.mdx",sourceDirName:"components",slug:"/components/toggle-field",permalink:"/npm-ui-component-library/docs/components/toggle-field",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/components/toggle-field.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Textarea Field",permalink:"/npm-ui-component-library/docs/components/textarea-field"},next:{title:"Hooks",permalink:"/npm-ui-component-library/docs/category/hooks"}},p={},u=[{value:"Usage",id:"usage",level:3},{value:"Label",id:"label",level:3},{value:"Description",id:"description",level:3},{value:"Checked",id:"checked",level:3},{value:"Disabled",id:"disabled",level:3},{value:"Props",id:"props",level:3}],g={toc:u},m="wrapper";function f(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"toggle-field"},"Toggle Field"),(0,r.kt)("p",null,"A toggle switch allows users to switch between two states (on and off) by clicking or\ntapping on it. Toggle switches are commonly used in settings or\noptions menus to enable or disable certain features or functions."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ToggleField")," extends the ",(0,r.kt)("a",{parentName:"p",href:"/npm-ui-component-library/docs/elements/toggle"},(0,r.kt)("inlineCode",{parentName:"a"},"Toggle"))," element by adding a\n",(0,r.kt)("a",{parentName:"p",href:"#label"},"label")," and ",(0,r.kt)("a",{parentName:"p",href:"#description"},"description"),"."),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(i.n,{mdxType:"ToggleFieldDemo"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { TextArea } from "@newfold/ui-component-library";\n\nconst [isChecked, setIsChecked] = useState(false);\n\n<ToggleField\n    id="toggle-field-demo"\n    label="A toggle field"\n    checked={isChecked}\n    onChange={setIsChecked}\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"label"},"Label"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," prop to add a label to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ToggleField")," component."),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(i.n,{id:"toggle-field-label",label:"Toggle field Label \ud83d\udc4b",mdxType:"ToggleFieldDemo"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<ToggleField\n    id="toggle-field-label"\n    label="Toggle field Label \ud83d\udc4b"\n    checked={isChecked}\n    onChange={setIsChecked}\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," prop to add a description to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ToggleField")," component."),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(i.n,{id:"toggle-field-description",label:"Toggle field Label \ud83d\udc4b",description:"Toggle field description \ud83d\ude4c",mdxType:"ToggleFieldDemo"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<ToggleField\n    id="toggle-field-description"\n    label="Toggle field Label \ud83d\udc4b"\n    description="Toggle field description \ud83d\ude4c"\n    checked={isChecked}\n    onChange={setIsChecked}\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"checked"},"Checked"),(0,r.kt)("p",null,"You can set the toggle to be checked by default by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"checked")," prop."),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(i.n,{id:"toggle-field-checked",label:"Default checked toggle field",checked:!0,mdxType:"ToggleFieldDemo"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<ToggleField\n    id="toggle-field-checked"\n    label="Default checked toggle field"\n    checked={true}\n    onChange={setIsChecked}\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disabled"},"Disabled"),(0,r.kt)("p",null,"You can disable the toggle by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," prop."),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(i.n,{id:"toggle-field-disable",label:"Disabled toggle field",disabled:!0,mdxType:"ToggleFieldDemo"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<ToggleField\n    id="toggle-field-disable"\n    label="Disabled toggle field"\n    checked={isChecked}\n    onChange={setIsChecked}\n    disabled={true}\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(a.Z.Table,{docs:i.y}))}f.isMDXComponent=!0},9516:(e,t,l)=>{l.d(t,{d:()=>g,f:()=>p});var n=l(7294),r=l(9946),a=l(2351),o=l(6723),i=l(3784),s=l(3781);let d=(0,n.createContext)(null);function c(){let e=(0,n.useContext)(d);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,c),e}return e}function p(){let[e,t]=(0,n.useState)([]);return[e.length>0?e.join(" "):void 0,(0,n.useMemo)((()=>function(e){let l=(0,s.z)((e=>(t((t=>[...t,e])),()=>t((t=>{let l=t.slice(),n=l.indexOf(e);return-1!==n&&l.splice(n,1),l}))))),r=(0,n.useMemo)((()=>({register:l,slot:e.slot,name:e.name,props:e.props})),[l,e.slot,e.name,e.props]);return n.createElement(d.Provider,{value:r},e.children)}),[t])]}let u=(0,a.yV)((function(e,t){let l=(0,r.M)(),{id:n=`headlessui-description-${l}`,...s}=e,d=c(),p=(0,i.T)(t);(0,o.e)((()=>d.register(n)),[n,d.register]);let u={ref:p,...d.props,id:n};return(0,a.sY)({ourProps:u,theirProps:s,slot:d.slot||{},defaultTag:"p",name:d.name||"Description"})})),g=Object.assign(u,{})},3933:(e,t,l)=>{l.d(t,{r:()=>x});var n=l(7294),r=l(2351),a=l(9946),o=l(1363),i=l(4103),s=l(6723),d=l(3784),c=l(3781);let p=(0,n.createContext)(null);function u(){let e=(0,n.useContext)(p);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,u),e}return e}function g(){let[e,t]=(0,n.useState)([]);return[e.length>0?e.join(" "):void 0,(0,n.useMemo)((()=>function(e){let l=(0,c.z)((e=>(t((t=>[...t,e])),()=>t((t=>{let l=t.slice(),n=l.indexOf(e);return-1!==n&&l.splice(n,1),l}))))),r=(0,n.useMemo)((()=>({register:l,slot:e.slot,name:e.name,props:e.props})),[l,e.slot,e.name,e.props]);return n.createElement(p.Provider,{value:r},e.children)}),[t])]}let m=(0,r.yV)((function(e,t){let l=(0,a.M)(),{id:n=`headlessui-label-${l}`,passive:o=!1,...i}=e,c=u(),p=(0,d.T)(t);(0,s.e)((()=>c.register(n)),[n,c.register]);let g={ref:p,...c.props,id:n};return o&&("onClick"in g&&(delete g.htmlFor,delete g.onClick),"onClick"in i&&delete i.onClick),(0,r.sY)({ourProps:g,theirProps:i,slot:c.slot||{},defaultTag:"label",name:c.name||"Label"})})),f=Object.assign(m,{});var b=l(9516),h=l(4157),y=l(6045),k=l(8689),v=l(1147),T=l(4192);let E=(0,n.createContext)(null);E.displayName="GroupContext";let w=n.Fragment;let N=(0,r.yV)((function(e,t){let l=(0,a.M)(),{id:s=`headlessui-switch-${l}`,checked:p,defaultChecked:u=!1,onChange:g,name:m,value:f,form:b,...w}=e,N=(0,n.useContext)(E),C=(0,n.useRef)(null),x=(0,d.T)(C,t,null===N?null:N.setSwitch),[P,R]=(0,v.q)(p,g,u),O=(0,c.z)((()=>null==R?void 0:R(!P))),D=(0,c.z)((e=>{if((0,i.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),O()})),F=(0,c.z)((e=>{e.key===o.R.Space?(e.preventDefault(),O()):e.key===o.R.Enter&&(0,k.g)(e.currentTarget)})),j=(0,c.z)((e=>e.preventDefault())),S=(0,n.useMemo)((()=>({checked:P})),[P]),L={id:s,ref:x,role:"switch",type:(0,h.f)(e,C),tabIndex:0,"aria-checked":P,"aria-labelledby":null==N?void 0:N.labelledby,"aria-describedby":null==N?void 0:N.describedby,onClick:D,onKeyUp:F,onKeyPress:j},_=(0,T.G)();return(0,n.useEffect)((()=>{var e;let t=null==(e=C.current)?void 0:e.closest("form");t&&void 0!==u&&_.addEventListener(t,"reset",(()=>{R(u)}))}),[C,R]),n.createElement(n.Fragment,null,null!=m&&P&&n.createElement(y._,{features:y.A.Hidden,...(0,r.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:b,checked:P,name:m,value:f})}),(0,r.sY)({ourProps:L,theirProps:w,slot:S,defaultTag:"button",name:"Switch"}))})),C=function(e){var t;let[l,a]=(0,n.useState)(null),[o,i]=g(),[s,d]=(0,b.f)(),c=(0,n.useMemo)((()=>({switch:l,setSwitch:a,labelledby:o,describedby:s})),[l,a,o,s]),p=e;return n.createElement(d,{name:"Switch.Description"},n.createElement(i,{name:"Switch.Label",props:{htmlFor:null==(t=c.switch)?void 0:t.id,onClick(e){l&&("LABEL"===e.currentTarget.tagName&&e.preventDefault(),l.click(),l.focus({preventScroll:!0}))}}},n.createElement(E.Provider,{value:c},(0,r.sY)({ourProps:{},theirProps:p,defaultTag:w,name:"Switch.Group"}))))},x=Object.assign(N,{Group:C,Label:f,Description:b.d})},8163:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(7294);const r=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))}))}}]);