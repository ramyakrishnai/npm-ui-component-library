"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[228],{1285:(e,t,n)=>{n.d(t,{ZP:()=>y});var a=n(7294),r=n(4184),s=n.n(r),l=n(6486),o=n(5697),d=n.n(o),i=n(7201);const p={variant:{default:"",primary:"nfd-text-primary-500",white:"nfd-text-white"},size:{3:"nfd-w-3 nfd-h-3",4:"nfd-w-4 nfd-h-4",8:"nfd-w-8 nfd-h-8"}},c=(0,a.forwardRef)((({variant:e,size:t,className:n},r)=>{const l=(0,i.Z)();return(0,a.createElement)("svg",{ref:r,xmlns:"http://www.w3.org/2000/svg/",fill:"none",viewBox:"0 0 24 24",className:s()("nfd-animate-spin",p.variant[e],p.size[t],n),...l},(0,a.createElement)("circle",{className:"nfd-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.createElement)("path",{className:"nfd-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))})),u={variant:d().oneOf((0,l.keys)(p.variant)),size:d().oneOf((0,l.keys)(p.size)),className:d().string};c.propTypes=u,c.defaultProps={variant:"default",size:"4",className:""};const f=e=>(0,a.createElement)(c,{...e});f.propTypes=u,f.defaultProps=c.defaultProps,f.displayName="Spinner";const m=c,b={variant:{primary:"nfd-button--primary",secondary:"nfd-button--secondary",error:"nfd-button--error",upsell:"nfd-button--upsell"},size:{default:"",small:"nfd-button--small",large:"nfd-button--large"}},h=(0,a.forwardRef)((({children:e,as:t,type:n,variant:r,size:l,isLoading:o,disabled:d,className:i,...p},c)=>(0,a.createElement)(t,{type:n||"button"===t&&"button"||void 0,disabled:d,ref:c,className:s()("nfd-button",b.variant[r],b.size[l],o&&"nfd-cursor-wait",d&&"nfd-button--disabled",i),...p},o&&(0,a.createElement)(m,{size:"small"===l?"3":"4",className:"nfd-mr-2"}),e))),v={children:d().node.isRequired,as:d().elementType,type:d().oneOf(["button","submit"]),variant:d().oneOf((0,l.keys)(b.variant)),size:d().oneOf((0,l.keys)(b.size)),isLoading:d().bool,disabled:d().bool,className:d().string};h.propTypes=v,h.defaultProps={as:"button",type:void 0,variant:"primary",size:"default",isLoading:!1,disabled:!1,className:""};const y=h,g=e=>(0,a.createElement)(h,{...e});g.propTypes=v,g.defaultProps=h.defaultProps,g.displayName="Button"},7201:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=(e=null)=>(0,a.useMemo)((()=>{const t={role:"img","aria-hidden":"true"};return null!==e&&(t.focusable=e?"true":"false"),t}),[e])},5796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>g,default:()=>T,frontMatter:()=>y,metadata:()=>k,toc:()=>N});var a=n(7462),r=n(7294),s=n(3905),l=n(2504),o=n(1629);const d=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}))}));var i=n(4184),p=n.n(i),c=n(5697),u=n.n(c),f=n(1285),m=n(7201);const b={variant:{default:"nfd-feature-upsell--default",card:"nfd-feature-upsell--card"}},h=({children:e,shouldUpsell:t=!0,className:n="",variant:a="card",cardLink:s="",cardText:l="",...o})=>{const i=(0,m.Z)();return t?(0,r.createElement)("div",{className:p()("nfd-feature-upsell",b.variant[a],n)},(0,r.createElement)("div",{className:"nfd-space-y-8 nfd-grayscale"},e),(0,r.createElement)("div",{className:"nfd-absolute nfd-inset-0 nfd-ring-1 nfd-ring-black nfd-ring-opacity-5 nfd-shadow-lg nfd-rounded-md"}),(0,r.createElement)("div",{className:"nfd-absolute nfd-inset-0 nfd-flex nfd-items-center nfd-justify-center"},(0,r.createElement)(f.ZP,{as:"a",className:"nfd-gap-2 nfd-shadow-lg nfd-shadow-amber-700/30",variant:"upsell",href:s,target:"_blank",rel:"noopener",...o},(0,r.createElement)(d,{className:"nfd-w-5 nfd-h-5 nfd--ml-1 nfd-shrink-0",...i}),l))):e};h.propTypes={children:u().node.isRequired,shouldUpsell:u().bool,className:u().string,variant:u().oneOf(Object.keys(b.variant)),cardLink:u().string,cardText:u().string};const v=h,y={},g="Feature Upsell",k={unversionedId:"components/FeatureUpsell",id:"components/FeatureUpsell",title:"Feature Upsell",description:"A feature upsell component.",source:"@site/docs/components/FeatureUpsell.mdx",sourceDirName:"components",slug:"/components/FeatureUpsell",permalink:"/npm-ui-component-library/docs/components/FeatureUpsell",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/components/FeatureUpsell.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Autocomplete",permalink:"/npm-ui-component-library/docs/components/AutocompleteField"},next:{title:"FileImport",permalink:"/npm-ui-component-library/docs/components/FileImport"}},w={},N=[{value:"Usage",id:"usage",level:3},{value:"Variants",id:"variants",level:3},{value:"Props",id:"props",level:3}],x={toc:N},U="wrapper";function T(e){let{components:t,...n}=e;return(0,s.kt)(U,(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"feature-upsell"},"Feature Upsell"),(0,s.kt)("p",null,"A feature upsell component."),(0,s.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,s.kt)(v,{cardText:"Upgrade Now!",cardLink:"https://bluehost.com",mdxType:"FeatureUpsell"},(0,s.kt)("p",{className:"nfd-p-2 nfd-bg-blue-700 nfd-text-white"},"Content that will be grayscale."))),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'import { FeatureUpsell } from "@newfold/ui-component-library";\n\n\n<FeatureUpsell\n    cardText="Upgrade Now!"\n    cardLink="https://bluehost.com"\n>\n    <p className="nfd-p-2 nfd-bg-blue-700 nfd-text-white">\n        Content that will be grayscale.\n    </p>\n</FeatureUpsell>\n')),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"variants"},"Variants"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"props"},"Props"),(0,s.kt)(l.Z.Table,{docs:{cardLink:{type:"string",defaultValue:'""',description:"Upsell Link for the upgrade button"},cardText:{type:"string",defaultValue:'""',description:"Text for the upgrade button"},children:{type:"node"},className:{type:"string",description:"Class attribute to add to the element",defaultValue:'""'},shouldUpsell:{type:"boolean",description:"Upsell flag",defaultValue:"true"},variant:{type:'string "default" "card"',defaultValue:"card",description:"Type of element to render as"}}}))}T.isMDXComponent=!0}}]);