import{j as r}from"./jsx-runtime-DSvmvvsx.js";import{c as i}from"./styled-components.browser.esm-BIi91Tbq.js";const n={large:"72px",medium:"48px",small:"32px"},m={large:"32px",medium:"20px",small:"14px"},d={large:"40px",medium:"24px",small:"16px"},c=(e,a,l)=>a?l.colors.palette.neutral[300]:{default:l.colors.palette.primary[500],purple:"#8B5CF6",amber:"#F59E0B",cyan:"#06B6D4",lime:"#84CC16",yellow:"#EAB308",grey:l.colors.palette.neutral[300]}[e],f=(e,a)=>e?a.colors.palette.neutral[500]:a.colors.palette.neutral[50],g=i.div`
  position: relative;
  width: ${({$size:e})=>n[e]};
  height: ${({$size:e})=>n[e]};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({$color:e,$disabled:a,theme:l})=>c(e,a,l)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,v=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,y=i.span`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({$size:e})=>m[e]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: ${({$size:e})=>d[e]};
  letter-spacing: -0.1px;
  color: ${({$disabled:e,theme:a})=>f(e,a)};
  text-align: center;
  user-select: none;
  white-space: nowrap;
`,x=({size:e="medium",color:a="default",src:l,alt:t="Avatar",initials:o="AA",disabled:s=!1,className:u})=>{const p=o.slice(0,2).toUpperCase();return r.jsx(g,{$size:e,$color:a,$disabled:s,className:u,role:"img","aria-label":t,children:l?r.jsx(v,{src:l,alt:t}):r.jsx(y,{$size:e,$disabled:s,children:p})})};x.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'purple' | 'amber' | 'cyan' | 'lime' | 'yellow' | 'grey'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'amber'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'grey'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'AA'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};export{x as A};
