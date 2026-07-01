import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as h,R as ut}from"./index-B0WjJBI_.js";import{c as s}from"./styled-components.browser.esm-BIi91Tbq.js";import{I as P}from"./Icon-BytZhcyh.js";import{B as z}from"./Button-DO4HjNMh.js";import{C as pe}from"./Checkbox-BdmLAclb.js";import{B as He}from"./Badge-BnocszLR.js";import{C as pt}from"./Chip-DQ4w4BrW.js";import{P as ft}from"./Pagination-OlLJGOmg.js";import{I as mt}from"./InlineMessage-Bi8bYhwz.js";import"./_commonjsHelpers-CqkleIqs.js";const ht=s.th`
  background-color: ${({theme:e,$sortDirection:a})=>a&&a!=="none"?e.colors.palette.primary[100]:e.colors.palette.primary[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[7]}`};
  height: 56px;
  text-align: ${({$align:e})=>e||"left"};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  white-space: nowrap;
  cursor: ${({$sortable:e})=>e?"pointer":"default"};
  user-select: none;
  
  ${({$side:e})=>e==="left"?"border-top-left-radius: 8px;":e==="right"?"border-top-right-radius: 8px;":""}

  ${({$locked:e,$leftOffset:a,theme:l})=>e?`
    position: sticky;
    left: ${a||0}px;
    z-index: 10;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
    
    &.is-stuck {
      background-color: ${l.colors.palette.primary[50]};
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
  `:""}

  &:hover {
    background-color: ${({theme:e,$sortable:a})=>a?e.colors.palette.primary[100]:e.colors.palette.primary[50]};
  }
`,we=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  ${({$variant:e})=>e==="search"?"justify-content: space-between;":""}
`,gt=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex: 1;
  min-width: 0;
`,ke=s.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-left: auto;
`,Te=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  transform: ${({$direction:e})=>e==="desc"?"rotate(180deg)":"none"};
  opacity: ${({$direction:e})=>e==="none"?.3:1};
  transition: all 0.2s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`,yt=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ce=s.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  cursor: col-resize;
  flex-shrink: 0;
  user-select: none;

  &:hover {
    color: ${({theme:e})=>e.colors.palette.primary[500]};
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`,xt=s.div`
  display: flex;
  flex: 1;
  min-width: 0;
`,bt=s.input`
  width: 100%;
  height: 32px;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[500]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: ${({theme:e})=>e.colors.palette.neutral[500]};
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.semantic.focus.input};
  }
`,vt=s.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`,je=()=>t.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8 11L4 7H12L8 11Z",fill:"currentColor"})}),wt=()=>t.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M12.667 7.333H12V5.333C12 3.493 10.507 2 8.667 2C6.827 2 5.333 3.493 5.333 5.333V7.333H4.667C4.113 7.333 3.667 7.78 3.667 8.333V13C3.667 13.553 4.113 14 4.667 14H12.667C13.22 14 13.667 13.553 13.667 13V8.333C13.667 7.78 13.22 7.333 12.667 7.333ZM8.667 11C8.113 11 7.667 10.553 7.667 10C7.667 9.447 8.113 9 8.667 9C9.22 9 9.667 9.447 9.667 10C9.667 10.553 9.22 11 8.667 11ZM10.533 7.333H6.8V5.333C6.8 4.3 7.633 3.467 8.667 3.467C9.7 3.467 10.533 4.3 10.533 5.333V7.333Z",fill:"currentColor"})}),$e=()=>t.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"7.5",y:"4",width:"1",height:"8",rx:"0.5",fill:"currentColor"}),t.jsx("circle",{cx:"8",cy:"8",r:"1",fill:"currentColor"})]}),le=({label:e,variant:a="default",side:l="middle",sortable:i=!1,sortDirection:T="none",onSort:D,showCheckbox:v=!1,checked:C=!1,indeterminate:y=!1,onCheckChange:E,locked:j=!1,onLockToggle:$,leftOffset:L=0,resizable:I=!1,onResize:S,searchValue:A="",searchPlaceholder:k="Search",onSearchChange:O,align:R="left",width:_,className:p})=>{const[g,w]=h.useState(!1),x=h.useRef(null),W=h.useRef(0),B=h.useRef(0),F=()=>{i&&D&&a!=="search"&&D()},J=m=>{E&&E(m.target.checked)},M=m=>{m.stopPropagation(),$&&$()},Y=m=>{O&&O(m.target.value)},q=m=>{m.preventDefault(),m.stopPropagation(),w(!0),W.current=m.clientX,x.current&&(B.current=x.current.offsetWidth)};ut.useEffect(()=>{if(!g)return;const m=K=>{if(!x.current||!S)return;const G=K.clientX-W.current,X=B.current+G;S(Math.max(50,X))},Q=()=>{w(!1)};return document.addEventListener("mousemove",m),document.addEventListener("mouseup",Q),()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",Q)}},[g,S]);const U=(a==="resizeable"||a==="resizeable-locked")&&I,V=a==="search";return t.jsx(ht,{ref:x,$align:R,$sortable:i&&!V,$variant:a,$side:l,$resizable:I,$locked:j,$leftOffset:L,$sortDirection:T,onClick:F,style:{width:_},className:p,"data-locked":j?"true":void 0,children:V?t.jsxs(we,{$variant:a,children:[t.jsx(xt,{children:t.jsx(bt,{type:"text",value:A,placeholder:k,onChange:Y,onClick:m=>m.stopPropagation()})}),t.jsxs(ke,{children:[t.jsx(vt,{children:i&&t.jsx(Te,{$direction:T,children:t.jsx(je,{})})}),U&&t.jsx(Ce,{onMouseDown:q,children:t.jsx($e,{})})]})]}):t.jsxs(we,{$variant:a,children:[t.jsxs(gt,{children:[v&&t.jsx(yt,{children:t.jsx(pe,{checked:C,onChange:J,onClick:m=>m.stopPropagation()})}),t.jsx("span",{children:e}),i&&t.jsx(Te,{$direction:T,children:t.jsx(je,{})}),j&&$&&t.jsx("button",{onClick:M,style:{background:"none",border:"none",padding:0,margin:"0 0 0 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",color:"#A5B4FC",transition:"color 0.2s"},onMouseEnter:m=>m.currentTarget.style.color="#818CF8",onMouseLeave:m=>m.currentTarget.style.color="#A5B4FC",title:"Unlock column",children:t.jsx(wt,{})})]}),U&&t.jsx(ke,{children:t.jsx(Ce,{onMouseDown:q,children:t.jsx($e,{})})})]})})};le.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'locked' | 'resizeable' | 'resizeable-locked' | 'search'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'locked'"},{name:"literal",value:"'resizeable'"},{name:"literal",value:"'resizeable-locked'"},{name:"literal",value:"'search'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'left' | 'middle' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'middle'",computed:!1}},sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onLockToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const kt=s.td`
  background-color: ${({theme:e,$selected:a,$locked:l})=>l||a?e.colors.palette.primary[50]:e.colors.palette.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  border-left: ${({theme:e,$selected:a,$isFirst:l})=>a&&l?`2px solid ${e.colors.palette.primary[500]}`:"none"};
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[7]}`};
  height: 72px;
  text-align: ${({$align:e})=>e||"left"};
  vertical-align: middle;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  
  ${({$locked:e,$leftOffset:a,theme:l})=>e?`
    position: sticky;
    left: ${a||0}px;
    z-index: 9;
    
    &.is-stuck {
      background-color: ${l.colors.palette.primary[50]};
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
  `:""}
`,Tt=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[7]};
  flex-wrap: nowrap;
`,Ct=s.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,jt=s.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,$t=s.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,St=s.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.palette.neutral[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.palette.neutral[700]};
`,qt=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  flex-shrink: 0;
`,Vt=s.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
`,zt=s.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[12]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  white-space: nowrap;
`,_e=s.div`
  font-family: 'Roboto Mono', monospace;
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  flex-shrink: 0;
`,Et=s(_e)`
  text-align: right;
`,Dt=s.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  flex-shrink: 0;
`,Lt=s.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  flex-shrink: 0;
`,It=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-left: auto;
  flex-shrink: 0;
`,At=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"currentColor"})}),Rt=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fill:"currentColor"})}),oe=({showCheckbox:e=!1,checked:a=!1,onCheckChange:l,showAvatar:i=!1,avatarSrc:T,avatarAlt:D="Avatar",showUserInfo:v=!1,userName:C,userRole:y,showNumber:E=!1,number:j,showAmount:$=!1,amount:L,showDate:I=!1,date:S,showText:A=!1,text:k,showBadge:O=!1,badgeLabel:R,badgeType:_="info",badgeStyle:p="default",showChip:g=!1,chipLabel:w,chipType:x="primary",chipVariant:W="filled",onChipRemove:B,showButton:F=!1,buttonLabel:J="Button",onButtonClick:M,showEditAction:Y=!1,onEdit:q,showDeleteAction:U=!1,onDelete:V,align:m="left",className:Q,selected:K=!1,isFirstColumn:G=!1,locked:X=!1,leftOffset:fe=0,children:ie})=>{const de=ee=>{l&&l(ee.target.checked)},me=ee=>ee?ee.split(" ").map(ce=>ce[0]).join("").toUpperCase().slice(0,2):"?";return t.jsx(kt,{$align:m,$selected:K,$isFirst:G,$locked:X,$leftOffset:fe,className:Q,"data-locked":X?"true":void 0,children:t.jsxs(Tt,{children:[e&&t.jsx(Ct,{children:t.jsx(pe,{checked:a,onChange:de})}),i&&t.jsx(jt,{children:T?t.jsx($t,{src:T,alt:D}):t.jsx(St,{children:me(C)})}),v&&t.jsxs(qt,{children:[C&&t.jsx(Vt,{children:C}),y&&t.jsx(zt,{children:y})]}),E&&j&&t.jsx(_e,{children:j}),$&&L&&t.jsx(Et,{children:L}),I&&S&&t.jsx(Dt,{children:S}),A&&k&&t.jsx(Lt,{children:k}),O&&R&&t.jsx(He,{label:R,type:_,style:p}),g&&w&&t.jsx(pt,{label:w,type:x,variant:W,onRemove:B}),F&&t.jsx(z,{variant:"secondary",size:"small",onClick:M,children:J}),(Y||U)&&t.jsxs(It,{children:[Y&&t.jsx(z,{onClick:q,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(At,{}),children:"Edit"}),U&&t.jsx(z,{onClick:V,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(Rt,{}),children:"Delete"})]}),ie]})})};oe.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},showUserInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:""},userRole:{required:!1,tsType:{name:"string"},description:""},showNumber:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},number:{required:!1,tsType:{name:"string"},description:""},showAmount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},amount:{required:!1,tsType:{name:"string"},description:""},showDate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},date:{required:!1,tsType:{name:"string"},description:""},showText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},showBadge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeLabel:{required:!1,tsType:{name:"string"},description:""},badgeType:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},badgeStyle:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showChip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipLabel:{required:!1,tsType:{name:"string"},description:""},chipType:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},chipVariant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},onChipRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showEditAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showDeleteAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFirstColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ot=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({$isOpen:e})=>e?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Mt=s.div`
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  width: 400px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Pt=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[7]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
`,Wt=s.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  margin: 0;
`;s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
    color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  }
`;const Bt=s.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[7]};
`,Ft=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,Nt=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e,$isDragging:a,$isLocked:l})=>l?e.colors.palette.primary[50]:a?e.colors.palette.neutral[100]:e.colors.palette.neutral[50]};
  border: 1px solid ${({theme:e,$isLocked:a})=>a?e.colors.palette.primary[200]:e.colors.palette.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"move"};
  transition: all 0.2s;
  opacity: ${({$isLocked:e})=>e?.7:1};
  
  &:hover {
    background-color: ${({theme:e,$isLocked:a})=>a?e.colors.palette.primary[50]:e.colors.palette.neutral[100]};
    border-color: ${({theme:e,$isLocked:a})=>a?e.colors.palette.primary[200]:e.colors.palette.neutral[400]};
  }
`,Ht=s.div`
  display: flex;
  align-items: center;
  color: ${({theme:e,$isLocked:a})=>a?e.colors.palette.neutral[400]:e.colors.palette.neutral[600]};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"grab"};
  opacity: ${({$isLocked:e})=>e?.5:1};
  
  &:active {
    cursor: ${({$isLocked:e})=>e?"not-allowed":"grabbing"};
  }
`,_t=s.span`
  flex: 1;
  font-family: ${({theme:e})=>e.typography.paragraph.medium.fontFamily};
  font-size: ${({theme:e})=>e.typography.paragraph.medium.fontSize};
  font-weight: ${({theme:e})=>e.typography.paragraph.medium.fontWeight};
  line-height: ${({theme:e})=>e.typography.paragraph.medium.lineHeight};
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
`,Ut=s.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[7]};
  border-top: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
`,Ue=({isOpen:e,onClose:a,columns:l,onColumnsChange:i,lockWarning:T,className:D})=>{const[v,C]=h.useState(l),[y,E]=h.useState(null),[j,$]=h.useState(!1);h.useEffect(()=>{C(l)},[l]),h.useEffect(()=>{if(T){$(!0);const p=setTimeout(()=>$(!1),3e3);return()=>clearTimeout(p)}},[T]);const L=p=>{C(v.map(g=>g.id===p?{...g,visible:!g.visible}:g))},I=p=>{const g=v.find(x=>x.id===p);if(!g)return;const w=v.filter(x=>x.locked&&x.id!=="checkbox").length;if(!g.locked&&w>=3){$(!0),setTimeout(()=>$(!1),3e3);return}C(v.map(x=>x.id===p?{...x,locked:!x.locked}:x))},S=p=>{v[p].locked||E(p)},A=(p,g)=>{if(p.preventDefault(),y===null||y===g||v[g].locked||v[y].locked)return;const w=[...v],x=w[y];w.splice(y,1),w.splice(g,0,x);const W=w.map((B,F)=>({...B,order:F}));C(W),E(g)},k=()=>{E(null)},O=()=>{i(v),a()},R=()=>{C(l),a()},_=p=>{p.target===p.currentTarget&&R()};return t.jsx(Ot,{$isOpen:e,onClick:_,children:t.jsxs(Mt,{className:D,children:[t.jsxs(Pt,{children:[t.jsx(Wt,{children:"Table Settings"}),t.jsx(z,{onClick:R,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(P,{name:"Close",size:"small"}),children:"Close"})]}),t.jsxs(Bt,{children:[j&&t.jsx("div",{style:{marginBottom:"16px"},children:t.jsx(mt,{type:"warning",style:"accentBorder",text:"Maximum columns reached",descriptionText:"You can only freeze any 3 columns at a time.",showLeadingIcon:!0,showTrailingIcon:!1,action:!1,link:!1})}),t.jsx(Ft,{children:v.map((p,g)=>t.jsxs(Nt,{draggable:!p.locked,onDragStart:()=>S(g),onDragOver:w=>A(w,g),onDragEnd:k,$isDragging:y===g,$isLocked:p.locked,children:[t.jsx(Ht,{$isLocked:p.locked,children:t.jsx(P,{name:"DragIndicator",size:"small"})}),t.jsx(pe,{checked:p.visible,onChange:()=>L(p.id)}),t.jsx(_t,{children:p.label}),t.jsx(z,{onClick:()=>I(p.id),variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(P,{name:p.locked?"Lock":"LockOpen",size:"small"}),disabled:!p.locked&&v.filter(w=>w.locked&&w.id!=="checkbox").length>=3,children:p.locked?"Unlock":"Lock"})]},p.id))})]}),t.jsxs(Ut,{children:[t.jsx(z,{onClick:R,variant:"secondary",children:"Cancel"}),t.jsx(z,{variant:"primary",onClick:O,children:"Apply Changes"})]})]})})};Ue.__docgenInfo={description:"",methods:[],displayName:"TableSettings",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the settings modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when modal is closed"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:"Array of column configurations"},onColumnsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(columns: ColumnConfig[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},name:"columns"}],return:{name:"void"}}},description:"Callback when columns are updated"},lockWarning:{required:!1,tsType:{name:"boolean"},description:"Whether to show lock warning"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}}};const Gt=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 0;
`,Xt=s.h2`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>{var a,l,i;return((i=(l=(a=e.colors)==null?void 0:a.semantic)==null?void 0:l.text)==null?void 0:i.primary)||"#111827"}};
  margin: 0;
`,Zt=s.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,Jt=s.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid ${({theme:e})=>{var a,l,i;return((i=(l=(a=e.colors)==null?void 0:a.palette)==null?void 0:l.neutral)==null?void 0:i[400])||"#b1b1b1"}};
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Elevance Sans', sans-serif;
  color: ${({theme:e})=>{var a,l,i;return((i=(l=(a=e.colors)==null?void 0:a.semantic)==null?void 0:l.text)==null?void 0:i.primary)||"#111827"}};
  background: #ffffff;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{var a,l,i;return((i=(l=(a=e.colors)==null?void 0:a.palette)==null?void 0:l.primary)==null?void 0:i[500])||"#3b82f6"}};
  }
`,Yt=s.div`
  position: relative;
  display: flex;
  align-items: center;
`,Qt=s.input`
  padding: 8px 12px 8px 36px;
  border: 1px solid ${({theme:e})=>{var a,l,i;return((i=(l=(a=e.colors)==null?void 0:a.palette)==null?void 0:l.neutral)==null?void 0:i[300])||"#d1d5db"}};
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Elevance Sans', sans-serif;
  color: ${({theme:e})=>{var a,l,i;return((i=(l=(a=e.colors)==null?void 0:a.semantic)==null?void 0:l.text)==null?void 0:i.primary)||"#111827"}};
  background: #ffffff;
  width: 300px;
  
  &::placeholder {
    color: ${({theme:e})=>{var a,l,i;return((i=(l=(a=e.colors)==null?void 0:a.palette)==null?void 0:l.neutral)==null?void 0:i[500])||"#6b7280"}};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{var a,l,i;return((i=(l=(a=e.colors)==null?void 0:a.palette)==null?void 0:l.primary)==null?void 0:i[500])||"#3b82f6"}};
  }
`,Kt=s.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${({theme:e})=>{var a,l,i;return((i=(l=(a=e.colors)==null?void 0:a.palette)==null?void 0:l.neutral)==null?void 0:i[500])||"#6b7280"}};
`,Ge=({title:e,showDropdown:a=!1,dropdownOptions:l=[],dropdownValue:i,onDropdownChange:T,dropdownLabel:D="Select",showGlobalSearch:v=!1,globalSearchValue:C="",onGlobalSearchChange:y,globalSearchPlaceholder:E="Search...",showDownload:j=!0,onDownload:$,showFilter:L=!0,onFilter:I,showSettings:S=!0,onSettingsClick:A})=>t.jsxs(Gt,{children:[e&&t.jsx(Xt,{children:e}),t.jsxs(Zt,{children:[v&&t.jsxs(Yt,{children:[t.jsx(Kt,{children:t.jsx(P,{name:"Search",size:"small"})}),t.jsx(Qt,{type:"text",value:C,onChange:k=>y==null?void 0:y(k.target.value),placeholder:E})]}),a&&l.length>0&&t.jsx(Jt,{value:i,onChange:k=>T==null?void 0:T(k.target.value),children:l.map(k=>t.jsx("option",{value:k.value,children:k.label},k.value))}),j&&t.jsx(z,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(P,{name:"Download",size:"medium"}),onClick:$,"aria-label":"Download",children:"Download"}),L&&t.jsx(z,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(P,{name:"FilterAlt",size:"medium"}),onClick:I,"aria-label":"Filter",children:"Filter"}),S&&t.jsx(z,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(P,{name:"Settings",size:"medium"}),onClick:A,"aria-label":"Settings",children:"Settings"})]})]});Ge.__docgenInfo={description:"",methods:[],displayName:"TableToolbar",props:{title:{required:!1,tsType:{name:"string"},description:"Table title"},showDropdown:{required:!1,tsType:{name:"boolean"},description:"Show dropdown selector",defaultValue:{value:"false",computed:!1}},dropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"Dropdown options",defaultValue:{value:"[]",computed:!1}},dropdownValue:{required:!1,tsType:{name:"string"},description:"Selected dropdown value"},onDropdownChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Dropdown change handler"},dropdownLabel:{required:!1,tsType:{name:"string"},description:"Dropdown placeholder/label",defaultValue:{value:"'Select'",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search",defaultValue:{value:"false",computed:!1}},globalSearchValue:{required:!1,tsType:{name:"string"},description:"Global search value",defaultValue:{value:"''",computed:!1}},onGlobalSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Global search change handler"},globalSearchPlaceholder:{required:!1,tsType:{name:"string"},description:"Global search placeholder",defaultValue:{value:"'Search...'",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button",defaultValue:{value:"true",computed:!1}},onFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Filter handler"},showSettings:{required:!1,tsType:{name:"boolean"},description:"Show settings button",defaultValue:{value:"true",computed:!1}},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Settings click handler"}}};const ea=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};
  width: 100%;
`,Se=s.div`
  overflow-x: auto;
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  border-radius: 8px;
  position: relative;
`,qe=s.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
`,ta=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[32]} ${({theme:e})=>e.spacing[24]};
  min-height: 400px;
  background: ${({theme:e})=>e.colors.palette.neutral[50]};
`,aa=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[6]};
  max-width: 300px;
`,na=s.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,ra=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  text-align: center;
`,sa=s.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${({theme:e})=>e.colors.semantic.text.primary};
  margin: 0;
`,la=s.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  color: ${({theme:e})=>e.colors.semantic.text.secondary};
  margin: 0;
`,oa=s.tr``,ia=s.td`
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[200]};
`,ue=s.div`
  width: ${({width:e})=>e||"100%"};
  height: ${({height:e})=>e||"16px"};
  background: ${({theme:e})=>e.colors.palette.neutral[200]};
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({theme:e})=>e.colors.palette.neutral[100]} 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,Xe=({data:e=[],columns:a=[],selectable:l=!1,paginated:i=!0,itemsPerPage:T=10,showSettings:D=!0,showActions:v=!1,actions:C=[],onRowSelect:y,onRowAction:E,rowKey:j="id",emptyMessage:$="No data available",emptyIcon:L="CloudOff",emptyTitle:I="No data available",emptyDescription:S="There are no items to display",emptyActionLabel:A,onEmptyAction:k,loading:O=!1,className:R,title:_,description:p,showToolbar:g=!0,showGlobalSearch:w=!1,showFilter:x=!0,showDownload:W=!0,onDownload:B})=>{const[F,J]=h.useState(1),[M,Y]=h.useState(T),[q,U]=h.useState(""),[V,m]=h.useState("none"),[Q,K]=h.useState(!1),[G,X]=h.useState([]),[fe,ie]=h.useState(!1),[de,me]=h.useState({}),[ee,ce]=h.useState(!1),[he,Ye]=h.useState({}),[Qe,Ke]=h.useState({}),[ca,ua]=h.useState(""),[te,ge]=h.useState(()=>{const n=[];return l&&n.push({id:"checkbox",label:"Select",visible:!0,locked:!0,order:0}),a.forEach((o,r)=>{n.push({id:o.id,label:o.label,visible:o.visible!==!1,locked:o.locked||!1,order:l?r+1:r})}),v&&n.push({id:"actions",label:"Actions",visible:!0,locked:!1,order:n.length}),n}),et=(n,o)=>{const r=te.filter(c=>c.locked&&c.id!=="checkbox").length;if(o&&r>=3){ce(!0),setTimeout(()=>ce(!1),3e3);return}const b=te.map(c=>c.id===n?{...c,locked:o}:c).sort((c,f)=>c.id==="checkbox"?-1:f.id==="checkbox"?1:c.locked&&!f.locked?-1:!c.locked&&f.locked?1:c.order-f.order).map((c,f)=>({...c,order:f}));ge(b)},tt=n=>{q===n?m(V==="asc"?"desc":V==="desc"?"none":"asc"):(U(n),m("asc"))},at=n=>{K(n);const o=n?e.map(r=>r[j]):[];X(o),y==null||y(o)},nt=(n,o)=>{const r=o?[...G,n]:G.filter(u=>u!==n);X(r),K(r.length===e.length),y==null||y(r)},rt=(n,o)=>{Ye(r=>({...r,[n]:o})),J(1)},st=(n,o)=>{Ke(r=>({...r,[n]:o}))},xe=h.useMemo(()=>{let n=[...e];if(Object.entries(he).forEach(([o,r])=>{if(r){const u=a.find(d=>d.id===o);u&&(n=n.filter(d=>{const b=u.accessor?typeof u.accessor=="function"?u.accessor(d):d[u.accessor]:d[o];return String(b).toLowerCase().includes(r.toLowerCase())}))}}),q&&V!=="none"){const o=a.find(r=>r.id===q);o&&n.sort((r,u)=>{const d=o.accessor?typeof o.accessor=="function"?o.accessor(r):r[o.accessor]:r[q],b=o.accessor?typeof o.accessor=="function"?o.accessor(u):u[o.accessor]:u[q];return d<b?V==="asc"?-1:1:d>b?V==="asc"?1:-1:0})}return n},[e,a,he,q,V,j]),ye=xe.length,lt=i?Math.ceil(ye/M):1,be=i?(F-1)*M:0,ot=i?be+M:ye,it=xe.slice(be,ot),N=te.filter(n=>n.visible).sort((n,o)=>n.order-o.order);h.useEffect(()=>{const n=document.querySelector("[data-scroll-container]");if(!n)return;const o=()=>{const d=n.querySelectorAll("thead th"),b={};let c=0;N.forEach((f,Z)=>{if(f.locked&&d[Z]){b[f.id]=c;const ae=d[Z].offsetWidth;c+=ae}}),me(b)};o();const r=new ResizeObserver(()=>{o()});return n.querySelectorAll("thead th").forEach(d=>r.observe(d)),()=>{r.disconnect()}},[N.map(n=>n.id+n.locked).join(",")]),h.useEffect(()=>{const n=document.querySelector("[data-scroll-container]");if(!n)return;const o=()=>{const r=n.scrollLeft;n.querySelectorAll('[data-locked="true"]').forEach(d=>{r>0?d.classList.add("is-stuck"):d.classList.remove("is-stuck")})};return n.addEventListener("scroll",o),()=>n.removeEventListener("scroll",o)},[]);const dt=()=>t.jsxs(Se,{"data-scroll-container":!0,children:[t.jsx(qe,{children:t.jsx("thead",{children:t.jsx("tr",{children:N.map((n,o)=>{const r=a.find(d=>d.id===n.id),u=o===0?"left":o===N.length-1?"right":void 0;return t.jsx(le,{label:(r==null?void 0:r.label)||n.id,variant:"default",side:u},n.id)})})})}),t.jsx(ta,{children:t.jsxs(aa,{children:[t.jsx(na,{children:t.jsx(P,{name:L,size:"large",style:{width:"60px",height:"60px"}})}),t.jsxs(ra,{children:[t.jsx(sa,{children:I}),t.jsx(la,{children:S})]}),A&&k&&t.jsx(z,{variant:"primary",size:"medium",onClick:k,children:A})]})})]});return t.jsxs(ea,{className:R,children:[g&&t.jsx(Ge,{title:_,showDropdown:!1,dropdownOptions:[],showDownload:W,onDownload:B,showFilter:x,onFilter:()=>console.log("Filter clicked"),showSettings:D,onSettingsClick:()=>ie(!0)}),e.length===0&&!O?dt():t.jsx(Se,{"data-scroll-container":!0,children:t.jsxs(qe,{children:[t.jsx("thead",{children:t.jsx("tr",{children:N.map((n,o)=>{const r=a.find(f=>f.id===n.id),u=n.locked,d=de[n.id],b=o===0?"left":o===N.length-1?"right":void 0;if(n.id==="checkbox")return t.jsx(le,{label:"",variant:"default",side:b,locked:u,leftOffset:d,"data-locked":u,showCheckbox:!0,checked:Q,onCheckChange:at},n.id);if(n.id==="actions")return t.jsx(le,{label:"Actions",variant:"default",side:b,locked:u,leftOffset:d,"data-locked":u},n.id);if(!r)return null;const c=r.searchable?"search":r.resizable&&!u?"resizeable-locked":r.resizable?"resizeable":"default";return t.jsx(le,{label:r.label,variant:c,side:b,sortable:r.sortable,sortDirection:q===r.id?V:"none",onSort:r.sortable?()=>tt(r.id):void 0,searchValue:he[r.id]||"",onSearchChange:r.searchable?f=>rt(r.id,f):void 0,resizable:r.resizable&&!u,onResize:r.resizable&&!u?f=>st(r.id,f):void 0,width:Qe[r.id]||r.width,onLockToggle:()=>et(r.id,!u),locked:u,leftOffset:d,"data-locked":u},n.id)})})}),t.jsx("tbody",{children:O?Array.from({length:M}).map((n,o)=>t.jsx(oa,{children:N.map(r=>t.jsx(ia,{children:r.id==="checkbox"?t.jsx(ue,{width:"20px",height:"20px"}):r.id==="actions"?t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(ue,{width:"32px",height:"32px"}),t.jsx(ue,{width:"32px",height:"32px"})]}):t.jsx(ue,{width:"80%"})},r.id))},`skeleton-${o}`)):it.map((n,o)=>{const r=n[j],u=G.includes(r);return t.jsx("tr",{children:N.map((d,b)=>{const c=a.find(H=>H.id===d.id),f=d.locked,Z=de[d.id],ae=b===0;if(d.id==="checkbox")return t.jsx(oe,{selected:u,locked:f,leftOffset:Z,"data-locked":f,isFirstColumn:ae,children:t.jsx(pe,{checked:u,onChange:H=>nt(r,H.target.checked)})},d.id);if(d.id==="actions")return t.jsx(oe,{selected:u,locked:f,leftOffset:Z,"data-locked":f,children:t.jsx("div",{style:{display:"flex",gap:"8px"},children:C.map((H,ct)=>t.jsx(z,{variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(P,{name:H.icon,size:"small"}),onClick:()=>H.onClick(n),"aria-label":H.label,children:H.label},ct))})},d.id);if(!c)return null;const ve=c.accessor?typeof c.accessor=="function"?c.accessor(n):n[c.accessor]:n[c.id];return c.renderCell?t.jsx(oe,{selected:u,locked:f,leftOffset:Z,"data-locked":f,isFirstColumn:ae,children:c.renderCell(ve,n,o)},d.id):t.jsx(oe,{selected:u,locked:f,leftOffset:Z,"data-locked":f,isFirstColumn:ae,children:String(ve||"")},d.id)})},r)})})]})}),i&&t.jsx(ft,{currentPage:F,totalPages:lt,totalItems:ye,itemsPerPage:M,onPageChange:J,onItemsPerPageChange:Y}),D&&t.jsx(t.Fragment,{children:t.jsx(Ue,{isOpen:fe,onClose:()=>ie(!1),columns:te.filter(n=>n.id!=="checkbox"),lockWarning:ee,onColumnsChange:n=>{const o=te.find(d=>d.id==="checkbox"),r=o?[o,...n]:n;if(n.some(d=>{const b=te.find(c=>c.id===d.id);return b&&b.locked!==d.locked})){const b=r.sort((c,f)=>c.id==="checkbox"?-1:f.id==="checkbox"?1:c.locked&&!f.locked?-1:!c.locked&&f.locked?1:c.order-f.order).map((c,f)=>({...c,order:f}));ge(b)}else ge(r)}})})]})};Xe.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"Array of data objects to display",defaultValue:{value:"[]",computed:!1}},columns:{required:!1,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:"Column configuration",defaultValue:{value:"[]",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"Enable row selection",defaultValue:{value:"false",computed:!1}},paginated:{required:!1,tsType:{name:"boolean"},description:"Enable pagination",defaultValue:{value:"true",computed:!1}},itemsPerPage:{required:!1,tsType:{name:"number"},description:"Items per page (default: 10)",defaultValue:{value:"10",computed:!1}},showSettings:{required:!1,tsType:{name:"boolean"},description:"Enable column settings",defaultValue:{value:"true",computed:!1}},showActions:{required:!1,tsType:{name:"boolean"},description:"Enable actions column",defaultValue:{value:"false",computed:!1}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: string;
  label: string;
  onClick: (row: any) => void;
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(row: any) => void",signature:{arguments:[{type:{name:"any"},name:"row"}],return:{name:"void"}},required:!0}}]}}],raw:`Array<{
  icon: string;
  label: string;
  onClick: (row: any) => void;
}>`},description:"Custom actions for each row",defaultValue:{value:"[]",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedIds"}],return:{name:"void"}}},description:"Callback when rows are selected"},onRowAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: string, row: any) => void",signature:{arguments:[{type:{name:"string"},name:"action"},{type:{name:"any"},name:"row"}],return:{name:"void"}}},description:"Callback when row action is triggered"},rowKey:{required:!1,tsType:{name:"string"},description:"Custom row key accessor (default: 'id')",defaultValue:{value:"'id'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Custom empty state message",defaultValue:{value:"'No data available'",computed:!1}},emptyIcon:{required:!1,tsType:{name:"string"},description:"Empty state icon name (Material Icons)",defaultValue:{value:"'CloudOff'",computed:!1}},emptyTitle:{required:!1,tsType:{name:"string"},description:"Empty state title",defaultValue:{value:"'No data available'",computed:!1}},emptyDescription:{required:!1,tsType:{name:"string"},description:"Empty state description",defaultValue:{value:"'There are no items to display'",computed:!1}},emptyActionLabel:{required:!1,tsType:{name:"string"},description:"Empty state action button label"},onEmptyAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Empty state action button handler"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"},title:{required:!1,tsType:{name:"string"},description:"Table title"},description:{required:!1,tsType:{name:"string"},description:"Table description"},showToolbar:{required:!1,tsType:{name:"boolean"},description:"Show toolbar",defaultValue:{value:"true",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search in toolbar",defaultValue:{value:"false",computed:!1}},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button in toolbar",defaultValue:{value:"true",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button in toolbar",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"}}};const Ta={title:"Components/Table",component:Xe,parameters:{layout:"padded",docs:{description:{component:"A complete data table component with sorting, filtering, pagination, and more. Use this as your default table for all data display needs."}}},tags:["autodocs"]},Ze=[{id:"1",name:"Alice Johnson",email:"alice.johnson@company.com",role:"Senior Developer",department:"Engineering",status:"Active",salary:125e3,avatar:"https://i.pravatar.cc/32?img=1"},{id:"2",name:"Bob Smith",email:"bob.smith@company.com",role:"Product Manager",department:"Product",status:"Active",salary:115e3,avatar:"https://i.pravatar.cc/32?img=2"},{id:"3",name:"Carol Williams",email:"carol.williams@company.com",role:"UX Designer",department:"Design",status:"Active",salary:95e3,avatar:"https://i.pravatar.cc/32?img=3"},{id:"4",name:"David Brown",email:"david.brown@company.com",role:"DevOps Engineer",department:"Engineering",status:"Inactive",salary:11e4,avatar:"https://i.pravatar.cc/32?img=4"},{id:"5",name:"Eve Davis",email:"eve.davis@company.com",role:"Marketing Manager",department:"Marketing",status:"Active",salary:105e3,avatar:"https://i.pravatar.cc/32?img=5"}],Je=[{id:"id",label:"ID"},{id:"name",label:"Name"},{id:"email",label:"Email"},{id:"role",label:"Role"}],da=[{id:"id",label:"ID",sortable:!0,resizable:!0,width:80},{id:"user",label:"User",sortable:!0,resizable:!0,width:250,accessor:e=>e.name,renderCell:(e,a)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("img",{src:a.avatar,alt:a.name,style:{width:32,height:32,borderRadius:"50%"}}),t.jsxs("div",{children:[t.jsx("div",{style:{fontWeight:600},children:a.name}),t.jsx("div",{style:{fontSize:"12px",color:"#666"},children:a.role})]})]})},{id:"email",label:"Email",sortable:!0,searchable:!0,resizable:!0},{id:"department",label:"Department",sortable:!0},{id:"status",label:"Status",sortable:!0,renderCell:e=>t.jsx(He,{label:e,type:e==="Active"?"success":"error",style:"default"})},{id:"salary",label:"Salary",sortable:!0,resizable:!0,renderCell:e=>`$${e.toLocaleString()}`}],ne={args:{data:Ze,columns:da,selectable:!0,paginated:!0,itemsPerPage:10,showSettings:!0,showActions:!0,showToolbar:!0,title:"Employee Directory",description:"Manage and view all employee information",showGlobalSearch:!0,showFilter:!0,showDownload:!0,actions:[{icon:"Edit",label:"Edit",onClick:e=>console.log("Edit:",e)},{icon:"Delete",label:"Delete",onClick:e=>console.log("Delete:",e)}],onRowSelect:e=>console.log("Selected:",e)}},re={args:{data:Ze,columns:Je,loading:!0,title:"Tabular View"}},se={args:{data:[],columns:Je,showToolbar:!0,title:"Tabular View",emptyIcon:"CloudOff",emptyTitle:"Not able to sync",emptyDescription:"Please check your internet connection",emptyActionLabel:"Refresh",onEmptyAction:()=>console.log("Refresh clicked")}};var Ve,ze,Ee,De,Le;ne.parameters={...ne.parameters,docs:{...(Ve=ne.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: advancedColumns,
    selectable: true,
    paginated: true,
    itemsPerPage: 10,
    showSettings: true,
    showActions: true,
    showToolbar: true,
    title: 'Employee Directory',
    description: 'Manage and view all employee information',
    showGlobalSearch: true,
    showFilter: true,
    showDownload: true,
    actions: [{
      icon: 'Edit',
      label: 'Edit',
      onClick: row => console.log('Edit:', row)
    }, {
      icon: 'Delete',
      label: 'Delete',
      onClick: row => console.log('Delete:', row)
    }],
    onRowSelect: ids => console.log('Selected:', ids)
  }
}`,...(Ee=(ze=ne.parameters)==null?void 0:ze.docs)==null?void 0:Ee.source},description:{story:"Complete table with all features enabled - matches CompleteExample design",...(Le=(De=ne.parameters)==null?void 0:De.docs)==null?void 0:Le.description}}};var Ie,Ae,Re,Oe,Me;re.parameters={...re.parameters,docs:{...(Ie=re.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    loading: true,
    title: 'Tabular View'
  }
}`,...(Re=(Ae=re.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source},description:{story:"Loading state",...(Me=(Oe=re.parameters)==null?void 0:Oe.docs)==null?void 0:Me.description}}};var Pe,We,Be,Fe,Ne;se.parameters={...se.parameters,docs:{...(Pe=se.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: basicColumns,
    showToolbar: true,
    title: 'Tabular View',
    emptyIcon: 'CloudOff',
    emptyTitle: 'Not able to sync',
    emptyDescription: 'Please check your internet connection',
    emptyActionLabel: 'Refresh',
    onEmptyAction: () => console.log('Refresh clicked')
  }
}`,...(Be=(We=se.parameters)==null?void 0:We.docs)==null?void 0:Be.source},description:{story:"Empty state with action button",...(Ne=(Fe=se.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.description}}};const Ca=["Complete","Loading","Empty"];export{ne as Complete,se as Empty,re as Loading,Ca as __namedExportsOrder,Ta as default};
