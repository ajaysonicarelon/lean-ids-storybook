import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as l,R as Qe}from"./index-B0WjJBI_.js";import{c as r}from"./styled-components.browser.esm-BIi91Tbq.js";import{C as ve}from"./Checkbox-BdmLAclb.js";import{B as q}from"./Button-DO4HjNMh.js";import{B as ea}from"./Badge-BnocszLR.js";import{C as aa}from"./Chip-DQ4w4BrW.js";import{P as ta}from"./Pagination-OlLJGOmg.js";import{I as te}from"./Icon-BytZhcyh.js";import{I as oa}from"./InlineMessage-Bi8bYhwz.js";import"./_commonjsHelpers-CqkleIqs.js";const na=r.th`
  background-color: ${({theme:a})=>a.colors.palette.primary[50]};
  border-bottom: 1px solid ${({theme:a})=>a.colors.palette.neutral[300]};
  padding: ${({theme:a})=>`${a.spacing[3]} ${a.spacing[7]}`};
  height: 56px;
  text-align: ${({$align:a})=>a||"left"};
  font-family: ${({theme:a})=>a.fonts.primary};
  font-size: ${({theme:a})=>a.fontSizes[14]};
  font-weight: ${({theme:a})=>a.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:a})=>a.colors.palette.neutral[1e3]};
  white-space: nowrap;
  cursor: ${({$sortable:a})=>a?"pointer":"default"};
  user-select: none;
  
  ${({$side:a})=>a==="left"?"border-top-left-radius: 8px;":a==="right"?"border-top-right-radius: 8px;":""}

  ${({$locked:a,$leftOffset:s,theme:b})=>a?`
    position: sticky;
    left: ${s||0}px;
    z-index: 10;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
    
    &.is-stuck {
      background-color: ${b.colors.palette.primary[50]};
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
  `:""}

  &:hover {
    background-color: ${({theme:a,$sortable:s})=>s?a.colors.palette.primary[100]:a.colors.palette.primary[50]};
  }
`,ye=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[3]};
  width: 100%;
  ${({$variant:a})=>a==="search"?"justify-content: space-between;":""}
`,ra=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[3]};
  flex: 1;
  min-width: 0;
`,ke=r.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-left: auto;
`,Ce=r.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:a})=>a.colors.palette.neutral[600]};
  transform: ${({$direction:a})=>a==="desc"?"rotate(180deg)":"none"};
  opacity: ${({$direction:a})=>a==="none"?.3:1};
  transition: all 0.2s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`,la=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Se=r.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:a})=>a.colors.palette.neutral[600]};
  cursor: col-resize;
  flex-shrink: 0;
  user-select: none;

  &:hover {
    color: ${({theme:a})=>a.colors.palette.primary[500]};
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`,sa=r.div`
  display: flex;
  flex: 1;
  min-width: 0;
`,ia=r.input`
  width: 100%;
  height: 32px;
  padding: ${({theme:a})=>a.spacing[3]};
  border: 1px solid ${({theme:a})=>a.colors.palette.neutral[500]};
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  background-color: ${({theme:a})=>a.colors.palette.neutral[50]};
  font-family: ${({theme:a})=>a.fonts.primary};
  font-size: ${({theme:a})=>a.fontSizes[14]};
  font-weight: ${({theme:a})=>a.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:a})=>a.colors.palette.neutral[1e3]};
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: ${({theme:a})=>a.colors.palette.neutral[500]};
  }

  &:focus {
    border-color: ${({theme:a})=>a.colors.semantic.focus.input};
  }
`,ca=r.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`,we=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 11L4 7H12L8 11Z",fill:"currentColor"})}),da=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12.667 7.333H12V5.333C12 3.493 10.507 2 8.667 2C6.827 2 5.333 3.493 5.333 5.333V7.333H4.667C4.113 7.333 3.667 7.78 3.667 8.333V13C3.667 13.553 4.113 14 4.667 14H12.667C13.22 14 13.667 13.553 13.667 13V8.333C13.667 7.78 13.22 7.333 12.667 7.333ZM8.667 11C8.113 11 7.667 10.553 7.667 10C7.667 9.447 8.113 9 8.667 9C9.22 9 9.667 9.447 9.667 10C9.667 10.553 9.22 11 8.667 11ZM10.533 7.333H6.8V5.333C6.8 4.3 7.633 3.467 8.667 3.467C9.7 3.467 10.533 4.3 10.533 5.333V7.333Z",fill:"currentColor"})}),Te=()=>e.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"7.5",y:"4",width:"1",height:"8",rx:"0.5",fill:"currentColor"}),e.jsx("circle",{cx:"8",cy:"8",r:"1",fill:"currentColor"})]}),f=({label:a,variant:s="default",side:b="middle",sortable:w=!1,sortDirection:W="none",onSort:B,showCheckbox:y=!1,checked:z=!1,indeterminate:$=!1,onCheckChange:T,locked:R=!1,onLockToggle:M,leftOffset:N=0,resizable:F=!1,onResize:P,searchValue:A="",searchPlaceholder:J="Search",onSearchChange:C,align:I="left",width:G,className:d})=>{const[m,v]=l.useState(!1),p=l.useRef(null),E=l.useRef(0),V=l.useRef(0),U=()=>{w&&B&&s!=="search"&&B()},Y=x=>{T&&T(x.target.checked)},X=x=>{x.stopPropagation(),M&&M()},j=x=>{C&&C(x.target.value)},K=x=>{x.preventDefault(),x.stopPropagation(),v(!0),E.current=x.clientX,p.current&&(V.current=p.current.offsetWidth)};Qe.useEffect(()=>{if(!m)return;const x=H=>{if(!p.current||!P)return;const _=H.clientX-E.current,Q=V.current+_;P(Math.max(50,Q))},u=()=>{v(!1)};return document.addEventListener("mousemove",x),document.addEventListener("mouseup",u),()=>{document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",u)}},[m,P]);const L=(s==="resizeable"||s==="resizeable-locked")&&F,O=s==="search";return e.jsx(na,{ref:p,$align:I,$sortable:w&&!O,$variant:s,$side:b,$resizable:F,$locked:R,$leftOffset:N,onClick:U,style:{width:G},className:d,"data-locked":R?"true":void 0,children:O?e.jsxs(ye,{$variant:s,children:[e.jsx(sa,{children:e.jsx(ia,{type:"text",value:A,placeholder:J,onChange:j,onClick:x=>x.stopPropagation()})}),e.jsxs(ke,{children:[e.jsx(ca,{children:w&&e.jsx(Ce,{$direction:W,children:e.jsx(we,{})})}),L&&e.jsx(Se,{onMouseDown:K,children:e.jsx(Te,{})})]})]}):e.jsxs(ye,{$variant:s,children:[e.jsxs(ra,{children:[y&&e.jsx(la,{children:e.jsx(ve,{checked:z,onChange:Y,onClick:x=>x.stopPropagation()})}),e.jsx("span",{children:a}),w&&e.jsx(Ce,{$direction:W,children:e.jsx(we,{})}),R!==void 0&&M&&e.jsx(q,{onClick:X,variant:"secondary",size:"small",showLabel:!1,leadingIcon:e.jsx(da,{}),children:R?"Unlock":"Lock"})]}),L&&e.jsx(ke,{children:e.jsx(Se,{onMouseDown:K,children:e.jsx(Te,{})})})]})})};f.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'locked' | 'resizeable' | 'resizeable-locked' | 'search'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'locked'"},{name:"literal",value:"'resizeable'"},{name:"literal",value:"'resizeable-locked'"},{name:"literal",value:"'search'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'left' | 'middle' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'middle'",computed:!1}},sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onLockToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ma=r.td`
  background-color: ${({theme:a,$selected:s,$locked:b})=>b||s?a.colors.palette.primary[50]:a.colors.palette.neutral[50]};
  border-bottom: 1px solid ${({theme:a})=>a.colors.palette.neutral[300]};
  border-left: ${({theme:a,$selected:s,$isFirst:b})=>s&&b?`2px solid ${a.colors.palette.primary[500]}`:"none"};
  padding: ${({theme:a,$selected:s,$isFirst:b})=>s&&b?`${a.spacing[3]} ${a.spacing[7]} ${a.spacing[3]} calc(${a.spacing[7]} - 2px)`:`${a.spacing[3]} ${a.spacing[7]}`};
  height: 72px;
  text-align: ${({$align:a})=>a||"left"};
  vertical-align: middle;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  
  ${({$locked:a,$leftOffset:s,theme:b})=>a?`
    position: sticky;
    left: ${s||0}px;
    z-index: 9;
    
    &.is-stuck {
      background-color: ${b.colors.palette.primary[50]};
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
  `:""}
`,ua=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[7]};
  flex-wrap: nowrap;
`,ha=r.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,pa=r.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,ga=r.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,fa=r.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:a})=>a.colors.palette.neutral[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:a})=>a.fonts.primary};
  font-size: ${({theme:a})=>a.fontSizes[14]};
  font-weight: ${({theme:a})=>a.fontWeights.semibold};
  color: ${({theme:a})=>a.colors.palette.neutral[700]};
`,ba=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing[1]};
  flex-shrink: 0;
`,va=r.div`
  font-family: ${({theme:a})=>a.fonts.primary};
  font-size: ${({theme:a})=>a.fontSizes[14]};
  font-weight: ${({theme:a})=>a.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:a})=>a.colors.palette.neutral[900]};
  white-space: nowrap;
`,xa=r.div`
  font-family: ${({theme:a})=>a.fonts.primary};
  font-size: ${({theme:a})=>a.fontSizes[12]};
  font-weight: ${({theme:a})=>a.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({theme:a})=>a.colors.palette.neutral[600]};
  white-space: nowrap;
`,Ye=r.div`
  font-family: 'Roboto Mono', monospace;
  font-size: ${({theme:a})=>a.fontSizes[14]};
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: ${({theme:a})=>a.colors.palette.neutral[900]};
  white-space: nowrap;
  flex-shrink: 0;
`,ya=r(Ye)`
  text-align: right;
`,ka=r.div`
  font-family: ${({theme:a})=>a.fonts.primary};
  font-size: ${({theme:a})=>a.fontSizes[14]};
  font-weight: ${({theme:a})=>a.fontWeights.medium};
  line-height: 16px;
  color: ${({theme:a})=>a.colors.palette.neutral[800]};
  white-space: nowrap;
  flex-shrink: 0;
`,Ca=r.div`
  font-family: ${({theme:a})=>a.fonts.primary};
  font-size: ${({theme:a})=>a.fontSizes[14]};
  font-weight: ${({theme:a})=>a.fontWeights.medium};
  line-height: 16px;
  color: ${({theme:a})=>a.colors.palette.neutral[800]};
  white-space: nowrap;
  flex-shrink: 0;
`,Sa=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
  margin-left: auto;
  flex-shrink: 0;
`,wa=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"currentColor"})}),Ta=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fill:"currentColor"})}),n=({showCheckbox:a=!1,checked:s=!1,onCheckChange:b,showAvatar:w=!1,avatarSrc:W,avatarAlt:B="Avatar",showUserInfo:y=!1,userName:z,userRole:$,showNumber:T=!1,number:R,showAmount:M=!1,amount:N,showDate:F=!1,date:P,showText:A=!1,text:J,showBadge:C=!1,badgeLabel:I,badgeType:G="info",badgeStyle:d="default",showChip:m=!1,chipLabel:v,chipType:p="primary",chipVariant:E="filled",onChipRemove:V,showButton:U=!1,buttonLabel:Y="Button",onButtonClick:X,showEditAction:j=!1,onEdit:K,showDeleteAction:L=!1,onDelete:O,align:x="left",className:u,selected:H=!1,isFirstColumn:_=!1,locked:Q=!1,leftOffset:le=0})=>{const ge=ae=>{b&&b(ae.target.checked)},oe=ae=>ae?ae.split(" ").map(fe=>fe[0]).join("").toUpperCase().slice(0,2):"?";return e.jsx(ma,{$align:x,$selected:H,$isFirst:_,$locked:Q,$leftOffset:le,className:u,"data-locked":Q?"true":void 0,children:e.jsxs(ua,{children:[a&&e.jsx(ha,{children:e.jsx(ve,{checked:s,onChange:ge})}),w&&e.jsx(pa,{children:W?e.jsx(ga,{src:W,alt:B}):e.jsx(fa,{children:oe(z)})}),y&&e.jsxs(ba,{children:[z&&e.jsx(va,{children:z}),$&&e.jsx(xa,{children:$})]}),T&&R&&e.jsx(Ye,{children:R}),M&&N&&e.jsx(ya,{children:N}),F&&P&&e.jsx(ka,{children:P}),A&&J&&e.jsx(Ca,{children:J}),C&&I&&e.jsx(ea,{label:I,type:G,style:d}),m&&v&&e.jsx(aa,{label:v,type:p,variant:E,onRemove:V}),U&&e.jsx(q,{variant:"secondary",size:"small",onClick:X,children:Y}),(j||L)&&e.jsxs(Sa,{children:[j&&e.jsx(q,{onClick:K,variant:"secondary",size:"small",showLabel:!1,leadingIcon:e.jsx(wa,{}),children:"Edit"}),L&&e.jsx(q,{onClick:O,variant:"secondary",size:"small",showLabel:!1,leadingIcon:e.jsx(Ta,{}),children:"Delete"})]})]})})};n.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},showUserInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:""},userRole:{required:!1,tsType:{name:"string"},description:""},showNumber:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},number:{required:!1,tsType:{name:"string"},description:""},showAmount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},amount:{required:!1,tsType:{name:"string"},description:""},showDate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},date:{required:!1,tsType:{name:"string"},description:""},showText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},showBadge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeLabel:{required:!1,tsType:{name:"string"},description:""},badgeType:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},badgeStyle:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showChip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipLabel:{required:!1,tsType:{name:"string"},description:""},chipType:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},chipVariant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},onChipRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showEditAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showDeleteAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFirstColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const Aa=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({$isOpen:a})=>a?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,ja=r.div`
  background-color: ${({theme:a})=>a.colors.palette.neutral[50]};
  border-radius: ${({theme:a})=>a.borderRadius.md};
  width: 400px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Da=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:a})=>a.spacing[7]};
  border-bottom: 1px solid ${({theme:a})=>a.colors.palette.neutral[300]};
`,za=r.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${({theme:a})=>a.colors.palette.neutral[1e3]};
  margin: 0;
`;r.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme:a})=>a.colors.palette.neutral[600]};
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({theme:a})=>a.colors.palette.neutral[100]};
    color: ${({theme:a})=>a.colors.palette.neutral[1e3]};
  }
`;const La=r.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:a})=>a.spacing[7]};
`,$a=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing[3]};
`,Ma=r.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[5]};
  padding: ${({theme:a})=>a.spacing[4]};
  background-color: ${({theme:a,$isDragging:s,$isLocked:b})=>b?a.colors.palette.primary[50]:s?a.colors.palette.neutral[100]:a.colors.palette.neutral[50]};
  border: 1px solid ${({theme:a,$isLocked:s})=>s?a.colors.palette.primary[200]:a.colors.palette.neutral[300]};
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  cursor: ${({$isLocked:a})=>a?"not-allowed":"move"};
  transition: all 0.2s;
  opacity: ${({$isLocked:a})=>a?.7:1};
  
  &:hover {
    background-color: ${({theme:a,$isLocked:s})=>s?a.colors.palette.primary[50]:a.colors.palette.neutral[100]};
    border-color: ${({theme:a,$isLocked:s})=>s?a.colors.palette.primary[200]:a.colors.palette.neutral[400]};
  }
`,Ra=r.div`
  display: flex;
  align-items: center;
  color: ${({theme:a,$isLocked:s})=>s?a.colors.palette.neutral[400]:a.colors.palette.neutral[600]};
  cursor: ${({$isLocked:a})=>a?"not-allowed":"grab"};
  opacity: ${({$isLocked:a})=>a?.5:1};
  
  &:active {
    cursor: ${({$isLocked:a})=>a?"not-allowed":"grabbing"};
  }
`,Ia=r.span`
  flex: 1;
  font-family: ${({theme:a})=>a.typography.paragraph.medium.fontFamily};
  font-size: ${({theme:a})=>a.typography.paragraph.medium.fontSize};
  font-weight: ${({theme:a})=>a.typography.paragraph.medium.fontWeight};
  line-height: ${({theme:a})=>a.typography.paragraph.medium.lineHeight};
  color: ${({theme:a})=>a.colors.palette.neutral[1e3]};
`,Wa=r.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:a})=>a.spacing[5]};
  padding: ${({theme:a})=>a.spacing[7]};
  border-top: 1px solid ${({theme:a})=>a.colors.palette.neutral[300]};
`,_e=({isOpen:a,onClose:s,columns:b,onColumnsChange:w,lockWarning:W,className:B})=>{const[y,z]=l.useState(b),[$,T]=l.useState(null),[R,M]=l.useState(!1);l.useEffect(()=>{z(b)},[b]),l.useEffect(()=>{if(W){M(!0);const d=setTimeout(()=>M(!1),3e3);return()=>clearTimeout(d)}},[W]);const N=d=>{z(y.map(m=>m.id===d?{...m,visible:!m.visible}:m))},F=d=>{const m=y.find(p=>p.id===d);if(!m)return;const v=y.filter(p=>p.locked&&p.id!=="checkbox").length;if(!m.locked&&v>=3){M(!0),setTimeout(()=>M(!1),3e3);return}z(y.map(p=>p.id===d?{...p,locked:!p.locked}:p))},P=d=>{y[d].locked||T(d)},A=(d,m)=>{if(d.preventDefault(),$===null||$===m||y[m].locked||y[$].locked)return;const v=[...y],p=v[$];v.splice($,1),v.splice(m,0,p);const E=v.map((V,U)=>({...V,order:U}));z(E),T(m)},J=()=>{T(null)},C=()=>{w(y),s()},I=()=>{z(b),s()},G=d=>{d.target===d.currentTarget&&I()};return e.jsx(Aa,{$isOpen:a,onClick:G,children:e.jsxs(ja,{className:B,children:[e.jsxs(Da,{children:[e.jsx(za,{children:"Table Settings"}),e.jsx(q,{onClick:I,variant:"secondary",size:"small",showLabel:!1,leadingIcon:e.jsx(te,{name:"Close",size:"small"}),children:"Close"})]}),e.jsxs(La,{children:[R&&e.jsx("div",{style:{marginBottom:"16px"},children:e.jsx(oa,{type:"warning",style:"accentBorder",text:"Maximum columns reached",descriptionText:"You can only freeze any 3 columns at a time.",showLeadingIcon:!0,showTrailingIcon:!1,action:!1,link:!1})}),e.jsx($a,{children:y.map((d,m)=>e.jsxs(Ma,{draggable:!d.locked,onDragStart:()=>P(m),onDragOver:v=>A(v,m),onDragEnd:J,$isDragging:$===m,$isLocked:d.locked,children:[e.jsx(Ra,{$isLocked:d.locked,children:e.jsx(te,{name:"DragIndicator",size:"small"})}),e.jsx(ve,{checked:d.visible,onChange:()=>N(d.id)}),e.jsx(Ia,{children:d.label}),e.jsx(q,{onClick:()=>F(d.id),variant:"secondary",size:"small",showLabel:!1,leadingIcon:e.jsx(te,{name:d.locked?"Lock":"LockOpen",size:"small"}),disabled:!d.locked&&y.filter(v=>v.locked&&v.id!=="checkbox").length>=3,children:d.locked?"Unlock":"Lock"})]},d.id))})]}),e.jsxs(Wa,{children:[e.jsx(q,{onClick:I,variant:"secondary",children:"Cancel"}),e.jsx(q,{variant:"primary",onClick:C,children:"Apply Changes"})]})]})})};_e.__docgenInfo={description:"",methods:[],displayName:"TableSettings",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the settings modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when modal is closed"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:"Array of column configurations"},onColumnsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(columns: ColumnConfig[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},name:"columns"}],return:{name:"void"}}},description:"Callback when columns are updated"},lockWarning:{required:!1,tsType:{name:"boolean"},description:"Whether to show lock warning"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}}};const Z=r.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`,xe=r.thead``,ee=r.tbody``,D=r.tr``,et={title:"Components/Table",parameters:{layout:"padded",docs:{description:{component:`
## Usage

\`\`\`tsx
import { TableHeader, TableCell } from '@lean-ids/components';

function DataTable() {
  return (
    <table>
      <thead>
        <tr>
          <TableHeader label="Name" sortable sortDirection="asc" />
          <TableHeader label="Email" />
          <TableHeader label="Status" />
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableCell 
            showAvatar 
            showUserInfo 
            userName="John Doe" 
            userRole="Developer" 
          />
          <TableCell showText text="john@example.com" />
          <TableCell showBadge badgeLabel="Active" badgeType="success" />
        </tr>
      </tbody>
    </table>
  );
}
\`\`\`

The Table components provide a flexible system for building data tables with sortable headers and customizable cells.

### TableHeader Variants

- **default** - Standard header with optional checkbox, label, and sort arrow
- **locked** - Adds a lock icon for freezing/pinning columns
- **resizeable** - Adds a resize handle for adjustable column width
- **resizeable-locked** - Combines both lock and resize features
- **search** - Replaces label with a search input field

### TableHeader Props

- \`variant\` - Header variant type
- \`side\` - Position for border radius ('left' | 'middle' | 'right')
- \`locked\` - Whether column is locked/frozen
- \`resizable\` - Whether column is resizable
- \`searchValue\` - Controlled search input value
- \`onLockToggle\` - Callback when lock is toggled
- \`onResize\` - Callback when column is resized
- \`onSearchChange\` - Callback when search value changes
        `}}},tags:["autodocs"]},Pa=r.div`
  width: 100%;
`,Ea=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  margin-bottom: 16px;
`,Oa=r.h2`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #222;
  margin: 0;
`,Ha=r.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,Va=r.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #b1b1b1;
  border-radius: 4px;
  background-color: white;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  color: #222;
  cursor: pointer;
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: #6366f1;
  }
`,qa=r.div`
  overflow-x: auto;
  max-height: 600px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;
`,Ba=r.thead`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #f8f7fb;
`,se={render:()=>{const a=()=>{const[s,b]=l.useState(1),[w,W]=l.useState(10),[B,y]=l.useState(100),[z,$]=l.useState(200),[T,R]=l.useState(""),[M,N]=l.useState(150),[F,P]=l.useState(120),[A,J]=l.useState("name"),[C,I]=l.useState("asc"),[G,d]=l.useState(!1),[m,v]=l.useState([]),[p,E]=l.useState(!1),[V,U]=l.useState({}),[Y,X]=l.useState(!1),[j,K]=l.useState([{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0},{id:"id",label:"ID",visible:!0,locked:!1,order:1},{id:"user",label:"User",visible:!0,locked:!1,order:2},{id:"email",label:"Email",visible:!0,locked:!1,order:3},{id:"phone",label:"Phone",visible:!0,locked:!1,order:4},{id:"location",label:"Location",visible:!0,locked:!1,order:5},{id:"amount",label:"Amount",visible:!0,locked:!1,order:6},{id:"date",label:"Date",visible:!0,locked:!1,order:7},{id:"department",label:"Department",visible:!0,locked:!1,order:8},{id:"manager",label:"Manager",visible:!0,locked:!1,order:9},{id:"status",label:"Status",visible:!0,locked:!1,order:10},{id:"actions",label:"Actions",visible:!0,locked:!1,order:11}]),L=(t,c)=>{const g=j.filter(o=>o.locked&&o.id!=="checkbox").length;if(c&&g>=3){X(!0),setTimeout(()=>X(!1),3e3);return}const i=j.map(o=>o.id===t?{...o,locked:c}:o).sort((o,k)=>o.id==="checkbox"?-1:k.id==="checkbox"?1:o.locked&&!k.locked?-1:!o.locked&&k.locked?1:o.order-k.order).map((o,k)=>({...o,order:k}));K(i)},O=t=>{A===t?I(C==="asc"?"desc":C==="desc"?"none":"asc"):(J(t),I("asc"))},x=t=>{d(t),v(t?Array.from({length:H.length},(c,g)=>g):[])},u=(t,c)=>{c?v([...m,t]):(v(m.filter(g=>g!==t)),d(!1))};l.useEffect(()=>{b(1)},[w]),l.useEffect(()=>{const t=document.querySelector("[data-scroll-container]");if(!t)return;const c=()=>{const g=t.scrollLeft;t.querySelectorAll('[data-locked="true"]').forEach(h=>{g>0?h.classList.add("is-stuck"):h.classList.remove("is-stuck")})};return t.addEventListener("scroll",c),()=>t.removeEventListener("scroll",c)},[]);const H=[{id:"1001",name:"Alice Johnson",role:"Senior Developer",email:"alice.johnson@company.com",phone:"+1 (555) 123-4567",location:"New York, NY",amount:"$245,000",date:"March 15, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=1"},{id:"1002",name:"Bob Smith",role:"Product Manager",email:"bob.smith@company.com",phone:"+1 (555) 234-5678",location:"San Francisco, CA",amount:"$189,500",date:"March 18, 2025",department:"Product",manager:"Michael Torres",status:"Pending",avatar:"https://i.pravatar.cc/32?img=2"},{id:"1003",name:"Carol Williams",role:"UX Designer",email:"carol.williams@company.com",phone:"+1 (555) 345-6789",location:"Austin, TX",amount:"$312,750",date:"March 20, 2025",department:"Design",manager:"Jennifer Lee",status:"Active",avatar:"https://i.pravatar.cc/32?img=3"},{id:"1004",name:"David Brown",role:"DevOps Engineer",email:"david.brown@company.com",phone:"+1 (555) 456-7890",location:"Seattle, WA",amount:"$198,250",date:"March 22, 2025",department:"Operations",manager:"Sarah Chen",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=4"},{id:"1005",name:"Emma Davis",role:"Data Analyst",email:"emma.davis@company.com",phone:"+1 (555) 567-8901",location:"Boston, MA",amount:"$275,800",date:"March 25, 2025",department:"Analytics",manager:"Robert Kim",status:"Active",avatar:"https://i.pravatar.cc/32?img=5"},{id:"1006",name:"Frank Martinez",role:"Backend Developer",email:"frank.martinez@company.com",phone:"+1 (555) 678-9012",location:"Chicago, IL",amount:"$220,000",date:"April 1, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=6"},{id:"1007",name:"Grace Lee",role:"Marketing Manager",email:"grace.lee@company.com",phone:"+1 (555) 789-0123",location:"Los Angeles, CA",amount:"$165,000",date:"April 3, 2025",department:"Marketing",manager:"Michael Torres",status:"Active",avatar:"https://i.pravatar.cc/32?img=7"},{id:"1008",name:"Henry Wilson",role:"QA Engineer",email:"henry.wilson@company.com",phone:"+1 (555) 890-1234",location:"Denver, CO",amount:"$145,500",date:"April 5, 2025",department:"Quality",manager:"Jennifer Lee",status:"Pending",avatar:"https://i.pravatar.cc/32?img=8"},{id:"1009",name:"Iris Taylor",role:"Frontend Developer",email:"iris.taylor@company.com",phone:"+1 (555) 901-2345",location:"Portland, OR",amount:"$210,000",date:"April 8, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=9"},{id:"1010",name:"Jack Anderson",role:"Sales Director",email:"jack.anderson@company.com",phone:"+1 (555) 012-3456",location:"Miami, FL",amount:"$295,000",date:"April 10, 2025",department:"Sales",manager:"Robert Kim",status:"Active",avatar:"https://i.pravatar.cc/32?img=10"},{id:"1011",name:"Kelly Thompson",role:"HR Manager",email:"kelly.thompson@company.com",phone:"+1 (555) 123-4568",location:"Atlanta, GA",amount:"$155,000",date:"April 12, 2025",department:"Human Resources",manager:"Michael Torres",status:"Active",avatar:"https://i.pravatar.cc/32?img=11"},{id:"1012",name:"Liam Garcia",role:"Security Analyst",email:"liam.garcia@company.com",phone:"+1 (555) 234-5679",location:"Phoenix, AZ",amount:"$185,000",date:"April 15, 2025",department:"Security",manager:"Sarah Chen",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=12"},{id:"1013",name:"Mia Rodriguez",role:"Content Writer",email:"mia.rodriguez@company.com",phone:"+1 (555) 345-6780",location:"Nashville, TN",amount:"$125,000",date:"April 18, 2025",department:"Marketing",manager:"Michael Torres",status:"Active",avatar:"https://i.pravatar.cc/32?img=13"},{id:"1014",name:"Noah Martinez",role:"Cloud Architect",email:"noah.martinez@company.com",phone:"+1 (555) 456-7891",location:"Dallas, TX",amount:"$285,000",date:"April 20, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=14"},{id:"1015",name:"Olivia Hernandez",role:"Business Analyst",email:"olivia.hernandez@company.com",phone:"+1 (555) 567-8902",location:"Philadelphia, PA",amount:"$175,000",date:"April 22, 2025",department:"Analytics",manager:"Robert Kim",status:"Pending",avatar:"https://i.pravatar.cc/32?img=15"},{id:"1016",name:"Paul Lopez",role:"Mobile Developer",email:"paul.lopez@company.com",phone:"+1 (555) 678-9013",location:"San Diego, CA",amount:"$225,000",date:"April 25, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=16"},{id:"1017",name:"Quinn Gonzalez",role:"UI Designer",email:"quinn.gonzalez@company.com",phone:"+1 (555) 789-0124",location:"Minneapolis, MN",amount:"$195,000",date:"April 28, 2025",department:"Design",manager:"Jennifer Lee",status:"Active",avatar:"https://i.pravatar.cc/32?img=17"},{id:"1018",name:"Rachel Wilson",role:"Project Manager",email:"rachel.wilson@company.com",phone:"+1 (555) 890-1235",location:"Detroit, MI",amount:"$205,000",date:"May 1, 2025",department:"Product",manager:"Michael Torres",status:"Active",avatar:"https://i.pravatar.cc/32?img=18"},{id:"1019",name:"Samuel Moore",role:"Database Admin",email:"samuel.moore@company.com",phone:"+1 (555) 901-2346",location:"Columbus, OH",amount:"$165,000",date:"May 3, 2025",department:"Operations",manager:"Sarah Chen",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=19"},{id:"1020",name:"Tara Taylor",role:"Scrum Master",email:"tara.taylor@company.com",phone:"+1 (555) 012-3457",location:"Charlotte, NC",amount:"$155,000",date:"May 5, 2025",department:"Product",manager:"Michael Torres",status:"Active",avatar:"https://i.pravatar.cc/32?img=20"},{id:"1021",name:"Uma Patel",role:"Technical Writer",email:"uma.patel@company.com",phone:"+1 (555) 123-4569",location:"San Jose, CA",amount:"$135,000",date:"May 8, 2025",department:"Documentation",manager:"Jennifer Lee",status:"Active",avatar:"https://i.pravatar.cc/32?img=21"},{id:"1022",name:"Victor Chang",role:"Solutions Architect",email:"victor.chang@company.com",phone:"+1 (555) 234-5680",location:"Houston, TX",amount:"$265,000",date:"May 10, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=22"},{id:"1023",name:"Wendy Kim",role:"Customer Success Manager",email:"wendy.kim@company.com",phone:"+1 (555) 345-6791",location:"Raleigh, NC",amount:"$145,000",date:"May 12, 2025",department:"Customer Success",manager:"Michael Torres",status:"Pending",avatar:"https://i.pravatar.cc/32?img=23"},{id:"1024",name:"Xavier Santos",role:"Network Engineer",email:"xavier.santos@company.com",phone:"+1 (555) 456-7892",location:"Tampa, FL",amount:"$175,000",date:"May 15, 2025",department:"Operations",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=24"},{id:"1025",name:"Yara Ahmed",role:"Product Designer",email:"yara.ahmed@company.com",phone:"+1 (555) 567-8903",location:"Baltimore, MD",amount:"$205,000",date:"May 18, 2025",department:"Design",manager:"Jennifer Lee",status:"Active",avatar:"https://i.pravatar.cc/32?img=25"},{id:"1026",name:"Zachary Brown",role:"Systems Administrator",email:"zachary.brown@company.com",phone:"+1 (555) 678-9014",location:"Indianapolis, IN",amount:"$155,000",date:"May 20, 2025",department:"Operations",manager:"Sarah Chen",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=26"},{id:"1027",name:"Aria Johnson",role:"Data Scientist",email:"aria.johnson@company.com",phone:"+1 (555) 789-0125",location:"San Antonio, TX",amount:"$235,000",date:"May 22, 2025",department:"Analytics",manager:"Robert Kim",status:"Active",avatar:"https://i.pravatar.cc/32?img=27"},{id:"1028",name:"Blake Miller",role:"DevOps Lead",email:"blake.miller@company.com",phone:"+1 (555) 890-1236",location:"Jacksonville, FL",amount:"$255,000",date:"May 25, 2025",department:"Operations",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=28"},{id:"1029",name:"Chloe Davis",role:"Brand Manager",email:"chloe.davis@company.com",phone:"+1 (555) 901-2347",location:"Columbus, OH",amount:"$165,000",date:"May 28, 2025",department:"Marketing",manager:"Michael Torres",status:"Active",avatar:"https://i.pravatar.cc/32?img=29"},{id:"1030",name:"Dylan Garcia",role:"Full Stack Developer",email:"dylan.garcia@company.com",phone:"+1 (555) 012-3458",location:"Fort Worth, TX",amount:"$215,000",date:"June 1, 2025",department:"Engineering",manager:"Sarah Chen",status:"Pending",avatar:"https://i.pravatar.cc/32?img=30"},{id:"1031",name:"Elena Martinez",role:"Compliance Officer",email:"elena.martinez@company.com",phone:"+1 (555) 123-4570",location:"Charlotte, NC",amount:"$185,000",date:"June 3, 2025",department:"Legal",manager:"Robert Kim",status:"Active",avatar:"https://i.pravatar.cc/32?img=31"},{id:"1032",name:"Felix Rodriguez",role:"AI Engineer",email:"felix.rodriguez@company.com",phone:"+1 (555) 234-5681",location:"San Francisco, CA",amount:"$295,000",date:"June 5, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=32"},{id:"1033",name:"Gina Wilson",role:"Account Manager",email:"gina.wilson@company.com",phone:"+1 (555) 345-6792",location:"Denver, CO",amount:"$175,000",date:"June 8, 2025",department:"Sales",manager:"Robert Kim",status:"Active",avatar:"https://i.pravatar.cc/32?img=33"},{id:"1034",name:"Hugo Anderson",role:"Release Manager",email:"hugo.anderson@company.com",phone:"+1 (555) 456-7893",location:"Seattle, WA",amount:"$195,000",date:"June 10, 2025",department:"Operations",manager:"Sarah Chen",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=34"},{id:"1035",name:"Ivy Thompson",role:"UX Researcher",email:"ivy.thompson@company.com",phone:"+1 (555) 567-8904",location:"Austin, TX",amount:"$185,000",date:"June 12, 2025",department:"Design",manager:"Jennifer Lee",status:"Active",avatar:"https://i.pravatar.cc/32?img=35"}],Q=[...T?H.filter(t=>t.email.toLowerCase().includes(T.toLowerCase())):H].sort((t,c)=>{if(C==="none")return 0;let g=t[A],S=c[A];return A==="amount"&&(g=parseFloat(String(g).replace(/[$,]/g,"")),S=parseFloat(String(S).replace(/[$,]/g,""))),A==="date"&&(g=new Date(String(g)).getTime(),S=new Date(String(S)).getTime()),g<S?C==="asc"?-1:1:g>S?C==="asc"?1:-1:0}),le=Q.length,ge=Math.ceil(le/w),oe=(s-1)*w,ae=oe+w,fe=Q.slice(oe,ae),ne=j.filter(t=>t.visible).sort((t,c)=>t.order-c.order);l.useEffect(()=>{const t=document.querySelector("[data-scroll-container]");if(!t)return;const c=()=>{const h=t.querySelectorAll("thead th"),i={};let o=0;ne.forEach((k,re)=>{if(k.locked&&h[re]){i[k.id]=o;const be=h[re].offsetWidth;o+=be}}),U(i)};c();const g=new ResizeObserver(()=>{c()});return t.querySelectorAll("thead th").forEach(h=>g.observe(h)),()=>{g.disconnect()}},[ne.map(t=>t.id+t.locked).join(",")]);const Ze=(t,c,g,S,h,i)=>{const o={selected:g,isFirstColumn:S,locked:h,leftOffset:i};switch(t){case"checkbox":return null;case"id":return e.jsx(n,{showNumber:!0,number:c.id,...o},"id");case"user":return e.jsx(n,{showAvatar:!0,avatarSrc:c.avatar,showUserInfo:!0,userName:c.name,userRole:c.role,...o},"user");case"email":return e.jsx(n,{showText:!0,text:c.email,...o},"email");case"phone":return e.jsx(n,{showText:!0,text:c.phone,...o},"phone");case"location":return e.jsx(n,{showText:!0,text:c.location,...o},"location");case"amount":return e.jsx(n,{showAmount:!0,amount:c.amount,align:"right",...o},"amount");case"date":return e.jsx(n,{showDate:!0,date:c.date,...o},"date");case"department":return e.jsx(n,{showText:!0,text:c.department,...o},"department");case"manager":return e.jsx(n,{showText:!0,text:c.manager,...o},"manager");case"status":return e.jsx(n,{showBadge:!0,badgeLabel:c.status,badgeType:c.status==="Active"?"success":c.status==="Pending"?"warning":"error",...o},"status");case"actions":return e.jsx(n,{showEditAction:!0,showDeleteAction:!0,...o},"actions");default:return null}};return e.jsxs(Pa,{children:[e.jsxs(Ea,{children:[e.jsx(Oa,{children:"Tabular View"}),e.jsxs(Ha,{children:[e.jsxs(Va,{defaultValue:"all",children:[e.jsx("option",{value:"all",children:"All Departments"}),e.jsx("option",{value:"engineering",children:"Engineering"}),e.jsx("option",{value:"product",children:"Product"}),e.jsx("option",{value:"design",children:"Design"})]}),e.jsx(q,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:e.jsx(te,{name:"Download",size:"medium"}),"aria-label":"Download",children:"Download"}),e.jsx(q,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:e.jsx(te,{name:"FilterAlt",size:"medium"}),"aria-label":"Filter",children:"Filter"}),e.jsx(q,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:e.jsx(te,{name:"Settings",size:"medium"}),onClick:()=>E(!0),"aria-label":"Settings",children:"Settings"})]})]}),e.jsx(qa,{"data-scroll-container":!0,children:e.jsxs(Z,{children:[e.jsx(Ba,{children:e.jsx(D,{children:ne.map((t,c)=>{const g=c===0,S=c===ne.length-1,h=g?"left":S?"right":"middle",i=t.locked||!1,o=V[t.id]||0;return t.id==="checkbox"?e.jsx(f,{label:"",side:h,showCheckbox:!0,checked:G,onCheckChange:x,locked:i,leftOffset:o},t.id):t.id==="id"?e.jsx(f,{label:t.label,variant:i?"resizeable-locked":"resizeable",side:h,resizable:!i,onLockToggle:()=>L("id",!i),onResize:i?void 0:y,width:i?void 0:B,sortable:!0,sortDirection:A==="id"?C:"none",onSort:()=>O("id"),locked:i,leftOffset:o},t.id):t.id==="user"?e.jsx(f,{label:t.label,variant:i?"resizeable-locked":"resizeable",side:h,resizable:!0,onLockToggle:()=>L("user",!i),onResize:$,width:z,sortable:!0,sortDirection:A==="name"?C:"none",onSort:()=>O("name"),locked:i,leftOffset:o},t.id):t.id==="email"?e.jsx(f,{label:t.label,variant:"search",side:h,searchValue:T,searchPlaceholder:"Search emails...",onSearchChange:R,onLockToggle:i?void 0:()=>L("email",!i),locked:i,leftOffset:o},t.id):t.id==="amount"?e.jsx(f,{label:t.label,variant:i?"resizeable-locked":"resizeable",side:h,resizable:!0,onLockToggle:()=>L("amount",!i),onResize:N,width:M,align:"right",sortable:!0,sortDirection:A==="amount"?C:"none",onSort:()=>O("amount"),locked:i,leftOffset:o},t.id):t.id==="status"?e.jsx(f,{label:t.label,variant:i?"resizeable-locked":"resizeable",side:h,resizable:!0,onLockToggle:()=>L("status",!i),onResize:P,width:F,locked:i,leftOffset:o},t.id):t.id==="date"?e.jsx(f,{label:t.label,variant:i?"resizeable-locked":"default",side:h,sortable:!0,sortDirection:A==="date"?C:"none",onSort:()=>O("date"),onLockToggle:()=>L("date",!i),locked:i,leftOffset:o},t.id):e.jsx(f,{label:t.label,variant:i?"resizeable-locked":"default",side:h,onLockToggle:()=>L(t.id,!i),locked:i,leftOffset:o},t.id)})})}),e.jsx(ee,{children:fe.map((t,c)=>{const g=oe+c,S=m.includes(g);return e.jsx(D,{children:ne.map((h,i)=>{const o=i===0,k=h.locked||!1,re=V[h.id]||0;return h.id==="checkbox"?e.jsx(n,{showCheckbox:!0,checked:S,onCheckChange:be=>u(g,be),selected:S,isFirstColumn:o,locked:k,leftOffset:re},"checkbox"):Ze(h.id,t,S,o,k,re)})},t.id)})})]})}),e.jsx(ta,{variant:"filled",currentPage:s,totalPages:ge,totalItems:le,itemsPerPage:w,onPageChange:b,onItemsPerPageChange:W}),e.jsx(_e,{isOpen:p,onClose:()=>E(!1),columns:j.filter(t=>t.id!=="checkbox"),lockWarning:Y,onColumnsChange:t=>{const c=j.find(h=>h.id==="checkbox"),g=c?[c,...t]:t;if(t.some(h=>{const i=j.find(o=>o.id===h.id);return i&&i.locked!==h.locked})){const i=g.sort((o,k)=>o.id==="checkbox"?-1:k.id==="checkbox"?1:o.locked&&!k.locked?-1:!o.locked&&k.locked?1:o.order-k.order).map((o,k)=>({...o,order:k}));K(i)}else K(g)}})]})};return e.jsx(a,{})}},ie={render:()=>e.jsx(Z,{children:e.jsx(xe,{children:e.jsxs(D,{children:[e.jsx(f,{label:"Name",sortable:!0,sortDirection:"asc"}),e.jsx(f,{label:"Email",sortable:!0,sortDirection:"none"}),e.jsx(f,{label:"Date",sortable:!0,sortDirection:"desc"}),e.jsx(f,{label:"Status"})]})})})},ce={render:()=>e.jsx(Z,{children:e.jsxs(ee,{children:[e.jsx(D,{children:e.jsx(n,{showAvatar:!0,showUserInfo:!0,userName:"John Doe",userRole:"Senior Developer"})}),e.jsx(D,{children:e.jsx(n,{showAvatar:!0,avatarSrc:"https://i.pravatar.cc/32?img=5",showUserInfo:!0,userName:"Jane Smith",userRole:"Product Manager"})})]})})},de={render:()=>e.jsx(Z,{children:e.jsx(ee,{children:e.jsxs(D,{children:[e.jsx(n,{showNumber:!0,number:"1234567890"}),e.jsx(n,{showAmount:!0,amount:"$123,654,000"}),e.jsx(n,{showDate:!0,date:"March 12, 2025"}),e.jsx(n,{showText:!0,text:"Regular text content"})]})})})},me={render:()=>e.jsx(Z,{children:e.jsxs(ee,{children:[e.jsxs(D,{children:[e.jsx(n,{showBadge:!0,badgeLabel:"Active",badgeType:"success",badgeStyle:"default"}),e.jsx(n,{showBadge:!0,badgeLabel:"Pending",badgeType:"warning",badgeStyle:"subdued"}),e.jsx(n,{showBadge:!0,badgeLabel:"Error",badgeType:"error",badgeStyle:"outlined"})]}),e.jsxs(D,{children:[e.jsx(n,{showChip:!0,chipLabel:"Premium",chipType:"success"}),e.jsx(n,{showChip:!0,chipLabel:"Trial",chipType:"warning"}),e.jsx(n,{showChip:!0,chipLabel:"Free",chipType:"neutral"})]})]})})},ue={render:()=>e.jsx(Z,{children:e.jsxs(ee,{children:[e.jsx(D,{children:e.jsx(n,{showEditAction:!0,showDeleteAction:!0})}),e.jsx(D,{children:e.jsx(n,{showButton:!0,buttonLabel:"View Details"})}),e.jsx(D,{children:e.jsx(n,{showButton:!0,buttonLabel:"Download",showEditAction:!0})})]})})},he={render:()=>e.jsxs(Z,{children:[e.jsx(xe,{children:e.jsxs(D,{children:[e.jsx(f,{label:"",showCheckbox:!0,checked:!1,indeterminate:!0}),e.jsx(f,{label:"Name"}),e.jsx(f,{label:"Email"})]})}),e.jsxs(ee,{children:[e.jsxs(D,{children:[e.jsx(n,{showCheckbox:!0,checked:!0}),e.jsx(n,{showText:!0,text:"John Doe"}),e.jsx(n,{showText:!0,text:"john@example.com"})]}),e.jsxs(D,{children:[e.jsx(n,{showCheckbox:!0,checked:!0}),e.jsx(n,{showText:!0,text:"Jane Smith"}),e.jsx(n,{showText:!0,text:"jane@example.com"})]}),e.jsxs(D,{children:[e.jsx(n,{showCheckbox:!0,checked:!1}),e.jsx(n,{showText:!0,text:"Bob Johnson"}),e.jsx(n,{showText:!0,text:"bob@example.com"})]})]})]})},pe={render:()=>{const a=()=>{const[s,b]=l.useState(!0),[w,W]=l.useState(!1),[B,y]=l.useState(100),[z,$]=l.useState(200),[T,R]=l.useState(""),[M,N]=l.useState(150),[F,P]=l.useState(180),[A,J]=l.useState(160),[C,I]=l.useState(140),[G,d]=l.useState(120),[m,v]=l.useState("name"),[p,E]=l.useState("asc"),[V,U]=l.useState(!1),[Y,X]=l.useState([]),j=u=>{m===u?E(p==="asc"?"desc":p==="desc"?"none":"asc"):(v(u),E("asc"))},K=u=>{U(u),X(u?[0,1,2,3]:[])},L=(u,H)=>{H?X([...Y,u]):(X(Y.filter(_=>_!==u)),U(!1))},O=[{id:"1001",name:"Alice Johnson",role:"Senior Developer",email:"alice.johnson@company.com",amount:"$245,000",date:"March 15, 2025",department:"Engineering",location:"New York, NY",phone:"+1 (555) 123-4567",status:"Active",avatar:"https://i.pravatar.cc/32?img=1"},{id:"1002",name:"Bob Smith",role:"Product Manager",email:"bob.smith@company.com",amount:"$189,500",date:"March 18, 2025",department:"Product",location:"San Francisco, CA",phone:"+1 (555) 234-5678",status:"Pending",avatar:"https://i.pravatar.cc/32?img=2"},{id:"1003",name:"Carol Williams",role:"UX Designer",email:"carol.williams@company.com",amount:"$312,750",date:"March 20, 2025",department:"Design",location:"Austin, TX",phone:"+1 (555) 345-6789",status:"Active",avatar:"https://i.pravatar.cc/32?img=3"},{id:"1004",name:"David Brown",role:"DevOps Engineer",email:"david.brown@company.com",amount:"$198,250",date:"March 22, 2025",department:"Operations",location:"Seattle, WA",phone:"+1 (555) 456-7890",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=4"}],x=T?O.filter(u=>u.email.toLowerCase().includes(T.toLowerCase())):O;return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f8f7fb",borderRadius:"8px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:600},children:"Interactive Features Demo"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px",fontSize:"12px",lineHeight:"1.6"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ID Column:"})," Locked (frozen) + Resizable - Stays visible when scrolling horizontally"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Horizontal Scroll:"})," Table has many columns - scroll right to see more"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Name Column:"})," Resizable + Sortable - Drag to resize, click to sort"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Email Column:"})," Search header - Type to filter rows"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Status Column:"})," Can be locked/unlocked - Toggle lock icon to freeze"]})]})]}),e.jsx("div",{style:{overflowX:"auto",border:"1px solid #e6e6e6",borderRadius:"8px"},children:e.jsxs(Z,{children:[e.jsx(xe,{children:e.jsxs(D,{children:[e.jsx(f,{label:"",side:"left",showCheckbox:!0,checked:V,onCheckChange:K}),e.jsx(f,{label:"ID",variant:"resizeable-locked",side:"left",locked:s,resizable:!0,onLockToggle:()=>b(!s),onResize:y,width:B,sortable:!0,sortDirection:m==="id"?p:"none",onSort:()=>j("id")}),e.jsx(f,{label:"User",variant:"resizeable",resizable:!0,onResize:$,width:z,sortable:!0,sortDirection:m==="name"?p:"none",onSort:()=>j("name")}),e.jsx(f,{label:"Email",variant:"search",searchValue:T,searchPlaceholder:"Search emails...",onSearchChange:R}),e.jsx(f,{label:"Amount",variant:"resizeable",resizable:!0,onResize:N,width:M,align:"right",sortable:!0,sortDirection:m==="amount"?p:"none",onSort:()=>j("amount")}),e.jsx(f,{label:"Date",sortable:!0,sortDirection:m==="date"?p:"none",onSort:()=>j("date")}),e.jsx(f,{label:"Department",variant:"resizeable",resizable:!0,onResize:P,width:F,sortable:!0,sortDirection:m==="department"?p:"none",onSort:()=>j("department")}),e.jsx(f,{label:"Location",variant:"resizeable",resizable:!0,onResize:J,width:A}),e.jsx(f,{label:"Phone",variant:"resizeable",resizable:!0,onResize:I,width:C}),e.jsx(f,{label:"Status",variant:"resizeable-locked",locked:w,resizable:!0,onLockToggle:()=>W(!w),onResize:d,width:G}),e.jsx(f,{label:"Actions",side:"right"})]})}),e.jsx(ee,{children:x.map((u,H)=>e.jsxs(D,{children:[e.jsx(n,{showCheckbox:!0,checked:Y.includes(H),onCheckChange:_=>L(H,_)}),e.jsx(n,{showNumber:!0,number:u.id}),e.jsx(n,{showAvatar:!0,avatarSrc:u.avatar,showUserInfo:!0,userName:u.name,userRole:u.role}),e.jsx(n,{showText:!0,text:u.email}),e.jsx(n,{showAmount:!0,amount:u.amount,align:"right"}),e.jsx(n,{showDate:!0,date:u.date}),e.jsx(n,{showText:!0,text:u.department}),e.jsx(n,{showText:!0,text:u.location}),e.jsx(n,{showText:!0,text:u.phone}),e.jsx(n,{showBadge:!0,badgeLabel:u.status,badgeType:u.status==="Active"?"success":u.status==="Pending"?"warning":"error"}),e.jsx(n,{showEditAction:!0,showDeleteAction:!0})]},u.id))})]})}),x.length===0&&e.jsxs("div",{style:{padding:"24px",textAlign:"center",color:"#6C6C6C"},children:['No results found for "',T,'"']})]})};return e.jsx(a,{})},parameters:{docs:{description:{story:`
### Complete Table with All Header Features

This example demonstrates all TableHeader variants and features:

**Header Variants:**
- **Default** - Standard header with checkbox and sort
- **Locked** - Column freeze/pin functionality
- **Resizeable** - Drag to adjust column width
- **Resizeable + Locked** - Both features combined
- **Search** - Inline search/filter input

**Interactive Features:**
- Checkbox selection (header + rows)
- Lock/unlock columns (ID, Status)
- Resize columns (drag handles)
- Search filtering (Email column)
- Sortable columns (click headers)
- Border radius on edge columns

**Try it:**
1. Click lock icons to freeze/unfreeze columns
2. Drag resize handles to adjust widths
3. Type in the Email search field to filter
4. Click sortable headers to change sort order
5. Select rows with checkboxes
        `}}}};var Ae,je,De;se.parameters={...se.parameters,docs:{...(Ae=se.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const CompleteTable = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage, setItemsPerPage] = useState(10);
      const [idWidth, setIdWidth] = useState(100);
      const [nameWidth, setNameWidth] = useState(200);
      const [emailSearch, setEmailSearch] = useState('');
      const [amountWidth, setAmountWidth] = useState(150);
      const [statusWidth, setStatusWidth] = useState(120);
      const [sortColumn, setSortColumn] = useState<string>('name');
      const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('asc');
      const [allChecked, setAllChecked] = useState(false);
      const [selectedRows, setSelectedRows] = useState<number[]>([]);
      const [settingsOpen, setSettingsOpen] = useState(false);
      const [columnOffsets, setColumnOffsets] = useState<{
        [key: string]: number;
      }>({});
      const [lockWarning, setLockWarning] = useState(false);
      const [columnConfigs, setColumnConfigs] = useState<ColumnConfig[]>([{
        id: 'checkbox',
        label: 'Select',
        visible: true,
        locked: true,
        order: 0
      }, {
        id: 'id',
        label: 'ID',
        visible: true,
        locked: false,
        order: 1
      }, {
        id: 'user',
        label: 'User',
        visible: true,
        locked: false,
        order: 2
      }, {
        id: 'email',
        label: 'Email',
        visible: true,
        locked: false,
        order: 3
      }, {
        id: 'phone',
        label: 'Phone',
        visible: true,
        locked: false,
        order: 4
      }, {
        id: 'location',
        label: 'Location',
        visible: true,
        locked: false,
        order: 5
      }, {
        id: 'amount',
        label: 'Amount',
        visible: true,
        locked: false,
        order: 6
      }, {
        id: 'date',
        label: 'Date',
        visible: true,
        locked: false,
        order: 7
      }, {
        id: 'department',
        label: 'Department',
        visible: true,
        locked: false,
        order: 8
      }, {
        id: 'manager',
        label: 'Manager',
        visible: true,
        locked: false,
        order: 9
      }, {
        id: 'status',
        label: 'Status',
        visible: true,
        locked: false,
        order: 10
      }, {
        id: 'actions',
        label: 'Actions',
        visible: true,
        locked: false,
        order: 11
      }]);

      // Handle column locking with auto-arrangement
      const handleColumnLock = (columnId: string, locked: boolean) => {
        // Check if trying to lock and already have 3 locked columns (excluding checkbox)
        const currentLockedCount = columnConfigs.filter(col => col.locked && col.id !== 'checkbox').length;
        if (locked && currentLockedCount >= 3) {
          setLockWarning(true);
          setTimeout(() => setLockWarning(false), 3000);
          return;
        }
        const updatedConfigs = columnConfigs.map(col => col.id === columnId ? {
          ...col,
          locked
        } : col);

        // Sort to move locked columns to the left (after checkbox)
        const sortedConfigs = updatedConfigs.sort((a, b) => {
          // Checkbox always first
          if (a.id === 'checkbox') return -1;
          if (b.id === 'checkbox') return 1;

          // Then locked columns
          if (a.locked && !b.locked) return -1;
          if (!a.locked && b.locked) return 1;

          // Maintain original order for same lock state
          return a.order - b.order;
        });

        // Update order property
        const reorderedConfigs = sortedConfigs.map((col, index) => ({
          ...col,
          order: index
        }));
        setColumnConfigs(reorderedConfigs);
      };
      const handleSort = (column: string) => {
        if (sortColumn === column) {
          setSortDirection(sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc');
        } else {
          setSortColumn(column);
          setSortDirection('asc');
        }
      };
      const handleSelectAll = (checked: boolean) => {
        setAllChecked(checked);
        setSelectedRows(checked ? Array.from({
          length: sampleData.length
        }, (_, i) => i) : []);
      };
      const handleRowSelect = (index: number, checked: boolean) => {
        if (checked) {
          setSelectedRows([...selectedRows, index]);
        } else {
          setSelectedRows(selectedRows.filter(i => i !== index));
          setAllChecked(false);
        }
      };

      // Reset to page 1 when items per page changes
      useEffect(() => {
        setCurrentPage(1);
      }, [itemsPerPage]);

      // Detect when locked columns are stuck and add is-stuck class
      useEffect(() => {
        const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;
        if (!scrollContainer) return;
        const handleScroll = () => {
          const scrollLeft = scrollContainer.scrollLeft;
          const lockedElements = scrollContainer.querySelectorAll('[data-locked="true"]');
          lockedElements.forEach(element => {
            if (scrollLeft > 0) {
              element.classList.add('is-stuck');
            } else {
              element.classList.remove('is-stuck');
            }
          });
        };
        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
      }, []);
      const sampleData = [{
        id: '1001',
        name: 'Alice Johnson',
        role: 'Senior Developer',
        email: 'alice.johnson@company.com',
        phone: '+1 (555) 123-4567',
        location: 'New York, NY',
        amount: '$245,000',
        date: 'March 15, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=1'
      }, {
        id: '1002',
        name: 'Bob Smith',
        role: 'Product Manager',
        email: 'bob.smith@company.com',
        phone: '+1 (555) 234-5678',
        location: 'San Francisco, CA',
        amount: '$189,500',
        date: 'March 18, 2025',
        department: 'Product',
        manager: 'Michael Torres',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/32?img=2'
      }, {
        id: '1003',
        name: 'Carol Williams',
        role: 'UX Designer',
        email: 'carol.williams@company.com',
        phone: '+1 (555) 345-6789',
        location: 'Austin, TX',
        amount: '$312,750',
        date: 'March 20, 2025',
        department: 'Design',
        manager: 'Jennifer Lee',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=3'
      }, {
        id: '1004',
        name: 'David Brown',
        role: 'DevOps Engineer',
        email: 'david.brown@company.com',
        phone: '+1 (555) 456-7890',
        location: 'Seattle, WA',
        amount: '$198,250',
        date: 'March 22, 2025',
        department: 'Operations',
        manager: 'Sarah Chen',
        status: 'Inactive',
        avatar: 'https://i.pravatar.cc/32?img=4'
      }, {
        id: '1005',
        name: 'Emma Davis',
        role: 'Data Analyst',
        email: 'emma.davis@company.com',
        phone: '+1 (555) 567-8901',
        location: 'Boston, MA',
        amount: '$275,800',
        date: 'March 25, 2025',
        department: 'Analytics',
        manager: 'Robert Kim',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=5'
      }, {
        id: '1006',
        name: 'Frank Martinez',
        role: 'Backend Developer',
        email: 'frank.martinez@company.com',
        phone: '+1 (555) 678-9012',
        location: 'Chicago, IL',
        amount: '$220,000',
        date: 'April 1, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=6'
      }, {
        id: '1007',
        name: 'Grace Lee',
        role: 'Marketing Manager',
        email: 'grace.lee@company.com',
        phone: '+1 (555) 789-0123',
        location: 'Los Angeles, CA',
        amount: '$165,000',
        date: 'April 3, 2025',
        department: 'Marketing',
        manager: 'Michael Torres',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=7'
      }, {
        id: '1008',
        name: 'Henry Wilson',
        role: 'QA Engineer',
        email: 'henry.wilson@company.com',
        phone: '+1 (555) 890-1234',
        location: 'Denver, CO',
        amount: '$145,500',
        date: 'April 5, 2025',
        department: 'Quality',
        manager: 'Jennifer Lee',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/32?img=8'
      }, {
        id: '1009',
        name: 'Iris Taylor',
        role: 'Frontend Developer',
        email: 'iris.taylor@company.com',
        phone: '+1 (555) 901-2345',
        location: 'Portland, OR',
        amount: '$210,000',
        date: 'April 8, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=9'
      }, {
        id: '1010',
        name: 'Jack Anderson',
        role: 'Sales Director',
        email: 'jack.anderson@company.com',
        phone: '+1 (555) 012-3456',
        location: 'Miami, FL',
        amount: '$295,000',
        date: 'April 10, 2025',
        department: 'Sales',
        manager: 'Robert Kim',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=10'
      }, {
        id: '1011',
        name: 'Kelly Thompson',
        role: 'HR Manager',
        email: 'kelly.thompson@company.com',
        phone: '+1 (555) 123-4568',
        location: 'Atlanta, GA',
        amount: '$155,000',
        date: 'April 12, 2025',
        department: 'Human Resources',
        manager: 'Michael Torres',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=11'
      }, {
        id: '1012',
        name: 'Liam Garcia',
        role: 'Security Analyst',
        email: 'liam.garcia@company.com',
        phone: '+1 (555) 234-5679',
        location: 'Phoenix, AZ',
        amount: '$185,000',
        date: 'April 15, 2025',
        department: 'Security',
        manager: 'Sarah Chen',
        status: 'Inactive',
        avatar: 'https://i.pravatar.cc/32?img=12'
      }, {
        id: '1013',
        name: 'Mia Rodriguez',
        role: 'Content Writer',
        email: 'mia.rodriguez@company.com',
        phone: '+1 (555) 345-6780',
        location: 'Nashville, TN',
        amount: '$125,000',
        date: 'April 18, 2025',
        department: 'Marketing',
        manager: 'Michael Torres',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=13'
      }, {
        id: '1014',
        name: 'Noah Martinez',
        role: 'Cloud Architect',
        email: 'noah.martinez@company.com',
        phone: '+1 (555) 456-7891',
        location: 'Dallas, TX',
        amount: '$285,000',
        date: 'April 20, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=14'
      }, {
        id: '1015',
        name: 'Olivia Hernandez',
        role: 'Business Analyst',
        email: 'olivia.hernandez@company.com',
        phone: '+1 (555) 567-8902',
        location: 'Philadelphia, PA',
        amount: '$175,000',
        date: 'April 22, 2025',
        department: 'Analytics',
        manager: 'Robert Kim',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/32?img=15'
      }, {
        id: '1016',
        name: 'Paul Lopez',
        role: 'Mobile Developer',
        email: 'paul.lopez@company.com',
        phone: '+1 (555) 678-9013',
        location: 'San Diego, CA',
        amount: '$225,000',
        date: 'April 25, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=16'
      }, {
        id: '1017',
        name: 'Quinn Gonzalez',
        role: 'UI Designer',
        email: 'quinn.gonzalez@company.com',
        phone: '+1 (555) 789-0124',
        location: 'Minneapolis, MN',
        amount: '$195,000',
        date: 'April 28, 2025',
        department: 'Design',
        manager: 'Jennifer Lee',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=17'
      }, {
        id: '1018',
        name: 'Rachel Wilson',
        role: 'Project Manager',
        email: 'rachel.wilson@company.com',
        phone: '+1 (555) 890-1235',
        location: 'Detroit, MI',
        amount: '$205,000',
        date: 'May 1, 2025',
        department: 'Product',
        manager: 'Michael Torres',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=18'
      }, {
        id: '1019',
        name: 'Samuel Moore',
        role: 'Database Admin',
        email: 'samuel.moore@company.com',
        phone: '+1 (555) 901-2346',
        location: 'Columbus, OH',
        amount: '$165,000',
        date: 'May 3, 2025',
        department: 'Operations',
        manager: 'Sarah Chen',
        status: 'Inactive',
        avatar: 'https://i.pravatar.cc/32?img=19'
      }, {
        id: '1020',
        name: 'Tara Taylor',
        role: 'Scrum Master',
        email: 'tara.taylor@company.com',
        phone: '+1 (555) 012-3457',
        location: 'Charlotte, NC',
        amount: '$155,000',
        date: 'May 5, 2025',
        department: 'Product',
        manager: 'Michael Torres',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=20'
      }, {
        id: '1021',
        name: 'Uma Patel',
        role: 'Technical Writer',
        email: 'uma.patel@company.com',
        phone: '+1 (555) 123-4569',
        location: 'San Jose, CA',
        amount: '$135,000',
        date: 'May 8, 2025',
        department: 'Documentation',
        manager: 'Jennifer Lee',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=21'
      }, {
        id: '1022',
        name: 'Victor Chang',
        role: 'Solutions Architect',
        email: 'victor.chang@company.com',
        phone: '+1 (555) 234-5680',
        location: 'Houston, TX',
        amount: '$265,000',
        date: 'May 10, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=22'
      }, {
        id: '1023',
        name: 'Wendy Kim',
        role: 'Customer Success Manager',
        email: 'wendy.kim@company.com',
        phone: '+1 (555) 345-6791',
        location: 'Raleigh, NC',
        amount: '$145,000',
        date: 'May 12, 2025',
        department: 'Customer Success',
        manager: 'Michael Torres',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/32?img=23'
      }, {
        id: '1024',
        name: 'Xavier Santos',
        role: 'Network Engineer',
        email: 'xavier.santos@company.com',
        phone: '+1 (555) 456-7892',
        location: 'Tampa, FL',
        amount: '$175,000',
        date: 'May 15, 2025',
        department: 'Operations',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=24'
      }, {
        id: '1025',
        name: 'Yara Ahmed',
        role: 'Product Designer',
        email: 'yara.ahmed@company.com',
        phone: '+1 (555) 567-8903',
        location: 'Baltimore, MD',
        amount: '$205,000',
        date: 'May 18, 2025',
        department: 'Design',
        manager: 'Jennifer Lee',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=25'
      }, {
        id: '1026',
        name: 'Zachary Brown',
        role: 'Systems Administrator',
        email: 'zachary.brown@company.com',
        phone: '+1 (555) 678-9014',
        location: 'Indianapolis, IN',
        amount: '$155,000',
        date: 'May 20, 2025',
        department: 'Operations',
        manager: 'Sarah Chen',
        status: 'Inactive',
        avatar: 'https://i.pravatar.cc/32?img=26'
      }, {
        id: '1027',
        name: 'Aria Johnson',
        role: 'Data Scientist',
        email: 'aria.johnson@company.com',
        phone: '+1 (555) 789-0125',
        location: 'San Antonio, TX',
        amount: '$235,000',
        date: 'May 22, 2025',
        department: 'Analytics',
        manager: 'Robert Kim',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=27'
      }, {
        id: '1028',
        name: 'Blake Miller',
        role: 'DevOps Lead',
        email: 'blake.miller@company.com',
        phone: '+1 (555) 890-1236',
        location: 'Jacksonville, FL',
        amount: '$255,000',
        date: 'May 25, 2025',
        department: 'Operations',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=28'
      }, {
        id: '1029',
        name: 'Chloe Davis',
        role: 'Brand Manager',
        email: 'chloe.davis@company.com',
        phone: '+1 (555) 901-2347',
        location: 'Columbus, OH',
        amount: '$165,000',
        date: 'May 28, 2025',
        department: 'Marketing',
        manager: 'Michael Torres',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=29'
      }, {
        id: '1030',
        name: 'Dylan Garcia',
        role: 'Full Stack Developer',
        email: 'dylan.garcia@company.com',
        phone: '+1 (555) 012-3458',
        location: 'Fort Worth, TX',
        amount: '$215,000',
        date: 'June 1, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/32?img=30'
      }, {
        id: '1031',
        name: 'Elena Martinez',
        role: 'Compliance Officer',
        email: 'elena.martinez@company.com',
        phone: '+1 (555) 123-4570',
        location: 'Charlotte, NC',
        amount: '$185,000',
        date: 'June 3, 2025',
        department: 'Legal',
        manager: 'Robert Kim',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=31'
      }, {
        id: '1032',
        name: 'Felix Rodriguez',
        role: 'AI Engineer',
        email: 'felix.rodriguez@company.com',
        phone: '+1 (555) 234-5681',
        location: 'San Francisco, CA',
        amount: '$295,000',
        date: 'June 5, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=32'
      }, {
        id: '1033',
        name: 'Gina Wilson',
        role: 'Account Manager',
        email: 'gina.wilson@company.com',
        phone: '+1 (555) 345-6792',
        location: 'Denver, CO',
        amount: '$175,000',
        date: 'June 8, 2025',
        department: 'Sales',
        manager: 'Robert Kim',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=33'
      }, {
        id: '1034',
        name: 'Hugo Anderson',
        role: 'Release Manager',
        email: 'hugo.anderson@company.com',
        phone: '+1 (555) 456-7893',
        location: 'Seattle, WA',
        amount: '$195,000',
        date: 'June 10, 2025',
        department: 'Operations',
        manager: 'Sarah Chen',
        status: 'Inactive',
        avatar: 'https://i.pravatar.cc/32?img=34'
      }, {
        id: '1035',
        name: 'Ivy Thompson',
        role: 'UX Researcher',
        email: 'ivy.thompson@company.com',
        phone: '+1 (555) 567-8904',
        location: 'Austin, TX',
        amount: '$185,000',
        date: 'June 12, 2025',
        department: 'Design',
        manager: 'Jennifer Lee',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=35'
      }];
      const filteredData = emailSearch ? sampleData.filter(row => row.email.toLowerCase().includes(emailSearch.toLowerCase())) : sampleData;

      // Sort the filtered data
      const sortedData = [...filteredData].sort((a, b) => {
        if (sortDirection === 'none') return 0;
        let aValue: any = a[sortColumn as keyof typeof a];
        let bValue: any = b[sortColumn as keyof typeof b];

        // Handle amount sorting (remove $ and commas)
        if (sortColumn === 'amount') {
          aValue = parseFloat(String(aValue).replace(/[$,]/g, ''));
          bValue = parseFloat(String(bValue).replace(/[$,]/g, ''));
        }

        // Handle date sorting
        if (sortColumn === 'date') {
          aValue = new Date(String(aValue)).getTime();
          bValue = new Date(String(bValue)).getTime();
        }
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
      const totalItems = sortedData.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      // Paginate the data
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = sortedData.slice(startIndex, endIndex);

      // Get visible columns sorted by order
      const visibleColumns = columnConfigs.filter(col => col.visible).sort((a, b) => a.order - b.order);

      // Dynamically calculate offsets from actual rendered column widths using ResizeObserver
      useEffect(() => {
        const scrollContainer = document.querySelector('[data-scroll-container]');
        if (!scrollContainer) return;
        const updateOffsets = () => {
          const headers = scrollContainer.querySelectorAll('thead th');
          const newOffsets: {
            [key: string]: number;
          } = {};
          let cumulativeOffset = 0;
          visibleColumns.forEach((col, index) => {
            if (col.locked && headers[index]) {
              newOffsets[col.id] = cumulativeOffset;
              const actualWidth = (headers[index] as HTMLElement).offsetWidth;
              cumulativeOffset += actualWidth;
            }
          });
          setColumnOffsets(newOffsets);
        };

        // Initial calculation
        updateOffsets();

        // Observe all header elements for size changes
        const resizeObserver = new ResizeObserver(() => {
          updateOffsets();
        });
        const headers = scrollContainer.querySelectorAll('thead th');
        headers.forEach(header => resizeObserver.observe(header));
        return () => {
          resizeObserver.disconnect();
        };
      }, [visibleColumns.map(c => c.id + c.locked).join(',')]);

      // Helper to render cell based on column ID
      const renderCell = (columnId: string, row: any, isSelected: boolean, isFirstColumn: boolean, locked: boolean, leftOffset: number) => {
        const commonProps = {
          selected: isSelected,
          isFirstColumn,
          locked,
          leftOffset
        };
        switch (columnId) {
          case 'checkbox':
            return null;
          // Handled separately
          case 'id':
            return <TableCell key="id" showNumber number={row.id} {...commonProps} />;
          case 'user':
            return <TableCell key="user" showAvatar avatarSrc={row.avatar} showUserInfo userName={row.name} userRole={row.role} {...commonProps} />;
          case 'email':
            return <TableCell key="email" showText text={row.email} {...commonProps} />;
          case 'phone':
            return <TableCell key="phone" showText text={row.phone} {...commonProps} />;
          case 'location':
            return <TableCell key="location" showText text={row.location} {...commonProps} />;
          case 'amount':
            return <TableCell key="amount" showAmount amount={row.amount} align="right" {...commonProps} />;
          case 'date':
            return <TableCell key="date" showDate date={row.date} {...commonProps} />;
          case 'department':
            return <TableCell key="department" showText text={row.department} {...commonProps} />;
          case 'manager':
            return <TableCell key="manager" showText text={row.manager} {...commonProps} />;
          case 'status':
            return <TableCell key="status" showBadge badgeLabel={row.status} badgeType={row.status === 'Active' ? 'success' : row.status === 'Pending' ? 'warning' : 'error'} {...commonProps} />;
          case 'actions':
            return <TableCell key="actions" showEditAction showDeleteAction {...commonProps} />;
          default:
            return null;
        }
      };
      return <TableContainer>
          {/* Table Heading Section */}
          <TableHeading>
            <TableTitle>Tabular View</TableTitle>
            <TableActions>
              <Dropdown defaultValue="all">
                <option value="all">All Departments</option>
                <option value="engineering">Engineering</option>
                <option value="product">Product</option>
                <option value="design">Design</option>
              </Dropdown>
              <Button variant="secondary" size="medium" showLabel={false} leadingIcon={<Icon name="Download" size="medium" />} aria-label="Download">
                Download
              </Button>
              <Button variant="secondary" size="medium" showLabel={false} leadingIcon={<Icon name="FilterAlt" size="medium" />} aria-label="Filter">
                Filter
              </Button>
              <Button variant="secondary" size="medium" showLabel={false} leadingIcon={<Icon name="Settings" size="medium" />} onClick={() => setSettingsOpen(true)} aria-label="Settings">
                Settings
              </Button>
            </TableActions>
          </TableHeading>

          {/* Table with Scroll */}
          <ScrollContainer data-scroll-container>
            <StyledTable>
              <StickyThead>
                <StyledTr>
                  {visibleColumns.map((col, index) => {
                  const isFirst = index === 0;
                  const isLast = index === visibleColumns.length - 1;
                  const side = isFirst ? 'left' : isLast ? 'right' : 'middle';
                  const isLocked = col.locked || false;
                  const offset = columnOffsets[col.id] || 0;

                  // Render checkbox column
                  if (col.id === 'checkbox') {
                    return <TableHeader key={col.id} label="" side={side} showCheckbox checked={allChecked} onCheckChange={handleSelectAll} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render ID column
                  if (col.id === 'id') {
                    return <TableHeader key={col.id} label={col.label} variant={isLocked ? "resizeable-locked" : "resizeable"} side={side} resizable={!isLocked} onLockToggle={() => handleColumnLock('id', !isLocked)} onResize={!isLocked ? setIdWidth : undefined} width={!isLocked ? idWidth : undefined} sortable sortDirection={sortColumn === 'id' ? sortDirection : 'none'} onSort={() => handleSort('id')} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render User column
                  if (col.id === 'user') {
                    return <TableHeader key={col.id} label={col.label} variant={isLocked ? "resizeable-locked" : "resizeable"} side={side} resizable onLockToggle={() => handleColumnLock('user', !isLocked)} onResize={setNameWidth} width={nameWidth} sortable sortDirection={sortColumn === 'name' ? sortDirection : 'none'} onSort={() => handleSort('name')} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render Email column with search
                  if (col.id === 'email') {
                    return <TableHeader key={col.id} label={col.label} variant="search" side={side} searchValue={emailSearch} searchPlaceholder="Search emails..." onSearchChange={setEmailSearch} onLockToggle={isLocked ? undefined : () => handleColumnLock('email', !isLocked)} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render Amount column
                  if (col.id === 'amount') {
                    return <TableHeader key={col.id} label={col.label} variant={isLocked ? "resizeable-locked" : "resizeable"} side={side} resizable onLockToggle={() => handleColumnLock('amount', !isLocked)} onResize={setAmountWidth} width={amountWidth} align="right" sortable sortDirection={sortColumn === 'amount' ? sortDirection : 'none'} onSort={() => handleSort('amount')} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render Status column
                  if (col.id === 'status') {
                    return <TableHeader key={col.id} label={col.label} variant={isLocked ? "resizeable-locked" : "resizeable"} side={side} resizable onLockToggle={() => handleColumnLock('status', !isLocked)} onResize={setStatusWidth} width={statusWidth} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render Date column (sortable)
                  if (col.id === 'date') {
                    return <TableHeader key={col.id} label={col.label} variant={isLocked ? "resizeable-locked" : "default"} side={side} sortable sortDirection={sortColumn === 'date' ? sortDirection : 'none'} onSort={() => handleSort('date')} onLockToggle={() => handleColumnLock('date', !isLocked)} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render other columns (phone, location, department, manager, actions)
                  return <TableHeader key={col.id} label={col.label} variant={isLocked ? "resizeable-locked" : "default"} side={side} onLockToggle={() => handleColumnLock(col.id, !isLocked)} locked={isLocked} leftOffset={offset} />;
                })}
                </StyledTr>
              </StickyThead>
              <StyledTbody>
                {paginatedData.map((row, index) => {
                const actualIndex = startIndex + index;
                const isSelected = selectedRows.includes(actualIndex);
                return <StyledTr key={row.id}>
                      {visibleColumns.map((col, colIndex) => {
                    const isFirstColumn = colIndex === 0;
                    const isLocked = col.locked || false;
                    const offset = columnOffsets[col.id] || 0;
                    if (col.id === 'checkbox') {
                      return <TableCell key="checkbox" showCheckbox checked={isSelected} onCheckChange={checked => handleRowSelect(actualIndex, checked)} selected={isSelected} isFirstColumn={isFirstColumn} locked={isLocked} leftOffset={offset} />;
                    }
                    return renderCell(col.id, row, isSelected, isFirstColumn, isLocked, offset);
                  })}
                    </StyledTr>;
              })}
              </StyledTbody>
            </StyledTable>
          </ScrollContainer>

          {/* Pagination */}
          <Pagination variant="filled" currentPage={currentPage} totalPages={totalPages} totalItems={totalItems} itemsPerPage={itemsPerPage} onPageChange={setCurrentPage} onItemsPerPageChange={setItemsPerPage} />

          {/* Table Settings Modal */}
          <TableSettings isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} columns={columnConfigs.filter(col => col.id !== 'checkbox')} lockWarning={lockWarning} onColumnsChange={newConfigs => {
          // Merge checkbox column back
          const checkboxCol = columnConfigs.find(c => c.id === 'checkbox');
          const mergedConfigs = checkboxCol ? [checkboxCol, ...newConfigs] : newConfigs;

          // Check if any lock state changed - if so, reorder locked columns to the left
          const hasLockChanges = newConfigs.some(newCol => {
            const oldCol = columnConfigs.find(c => c.id === newCol.id);
            return oldCol && oldCol.locked !== newCol.locked;
          });
          if (hasLockChanges) {
            // Sort to move locked columns to the left (after checkbox)
            const sortedConfigs = mergedConfigs.sort((a, b) => {
              // Checkbox always first
              if (a.id === 'checkbox') return -1;
              if (b.id === 'checkbox') return 1;

              // Then locked columns
              if (a.locked && !b.locked) return -1;
              if (!a.locked && b.locked) return 1;

              // Maintain original order for same lock state
              return a.order - b.order;
            });

            // Update order property
            const reorderedConfigs = sortedConfigs.map((col, index) => ({
              ...col,
              order: index
            }));
            setColumnConfigs(reorderedConfigs);
          } else {
            // Otherwise just update configs (for visibility/order changes)
            setColumnConfigs(mergedConfigs);
          }
        }} />
        </TableContainer>;
    };
    return <CompleteTable />;
  }
}`,...(De=(je=se.parameters)==null?void 0:je.docs)==null?void 0:De.source}}};var ze,Le,$e;ie.parameters={...ie.parameters,docs:{...(ze=ie.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <StyledTable>
      <StyledThead>
        <StyledTr>
          <TableHeader label="Name" sortable sortDirection="asc" />
          <TableHeader label="Email" sortable sortDirection="none" />
          <TableHeader label="Date" sortable sortDirection="desc" />
          <TableHeader label="Status" />
        </StyledTr>
      </StyledThead>
    </StyledTable>
}`,...($e=(Le=ie.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};var Me,Re,Ie;ce.parameters={...ce.parameters,docs:{...(Me=ce.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showAvatar showUserInfo userName="John Doe" userRole="Senior Developer" />
        </StyledTr>
        <StyledTr>
          <TableCell showAvatar avatarSrc="https://i.pravatar.cc/32?img=5" showUserInfo userName="Jane Smith" userRole="Product Manager" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
}`,...(Ie=(Re=ce.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var We,Pe,Ee;de.parameters={...de.parameters,docs:{...(We=de.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showNumber number="1234567890" />
          <TableCell showAmount amount="$123,654,000" />
          <TableCell showDate date="March 12, 2025" />
          <TableCell showText text="Regular text content" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
}`,...(Ee=(Pe=de.parameters)==null?void 0:Pe.docs)==null?void 0:Ee.source}}};var Oe,He,Ve;me.parameters={...me.parameters,docs:{...(Oe=me.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showBadge badgeLabel="Active" badgeType="success" badgeStyle="default" />
          <TableCell showBadge badgeLabel="Pending" badgeType="warning" badgeStyle="subdued" />
          <TableCell showBadge badgeLabel="Error" badgeType="error" badgeStyle="outlined" />
        </StyledTr>
        <StyledTr>
          <TableCell showChip chipLabel="Premium" chipType="success" />
          <TableCell showChip chipLabel="Trial" chipType="warning" />
          <TableCell showChip chipLabel="Free" chipType="neutral" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
}`,...(Ve=(He=me.parameters)==null?void 0:He.docs)==null?void 0:Ve.source}}};var qe,Be,Ne;ue.parameters={...ue.parameters,docs:{...(qe=ue.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showEditAction showDeleteAction />
        </StyledTr>
        <StyledTr>
          <TableCell showButton buttonLabel="View Details" />
        </StyledTr>
        <StyledTr>
          <TableCell showButton buttonLabel="Download" showEditAction />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
}`,...(Ne=(Be=ue.parameters)==null?void 0:Be.docs)==null?void 0:Ne.source}}};var Fe,Je,Ue;he.parameters={...he.parameters,docs:{...(Fe=he.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <StyledTable>
      <StyledThead>
        <StyledTr>
          <TableHeader label="" showCheckbox checked={false} indeterminate={true} />
          <TableHeader label="Name" />
          <TableHeader label="Email" />
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        <StyledTr>
          <TableCell showCheckbox checked={true} />
          <TableCell showText text="John Doe" />
          <TableCell showText text="john@example.com" />
        </StyledTr>
        <StyledTr>
          <TableCell showCheckbox checked={true} />
          <TableCell showText text="Jane Smith" />
          <TableCell showText text="jane@example.com" />
        </StyledTr>
        <StyledTr>
          <TableCell showCheckbox checked={false} />
          <TableCell showText text="Bob Johnson" />
          <TableCell showText text="bob@example.com" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
}`,...(Ue=(Je=he.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};var Xe,Ke,Ge;pe.parameters={...pe.parameters,docs:{...(Xe=pe.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => {
    const AllFeaturesTable = () => {
      const [idLocked, setIdLocked] = useState(true);
      const [statusLocked, setStatusLocked] = useState(false);
      const [idWidth, setIdWidth] = useState(100);
      const [nameWidth, setNameWidth] = useState(200);
      const [emailSearch, setEmailSearch] = useState('');
      const [amountWidth, setAmountWidth] = useState(150);
      const [departmentWidth, setDepartmentWidth] = useState(180);
      const [locationWidth, setLocationWidth] = useState(160);
      const [phoneWidth, setPhoneWidth] = useState(140);
      const [statusWidth, setStatusWidth] = useState(120);
      const [sortColumn, setSortColumn] = useState<string>('name');
      const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('asc');
      const [allChecked, setAllChecked] = useState(false);
      const [selectedRows, setSelectedRows] = useState<number[]>([]);
      const handleSort = (column: string) => {
        if (sortColumn === column) {
          setSortDirection(sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc');
        } else {
          setSortColumn(column);
          setSortDirection('asc');
        }
      };
      const handleSelectAll = (checked: boolean) => {
        setAllChecked(checked);
        setSelectedRows(checked ? [0, 1, 2, 3] : []);
      };
      const handleRowSelect = (index: number, checked: boolean) => {
        if (checked) {
          setSelectedRows([...selectedRows, index]);
        } else {
          setSelectedRows(selectedRows.filter(i => i !== index));
          setAllChecked(false);
        }
      };
      const sampleData = [{
        id: '1001',
        name: 'Alice Johnson',
        role: 'Senior Developer',
        email: 'alice.johnson@company.com',
        amount: '$245,000',
        date: 'March 15, 2025',
        department: 'Engineering',
        location: 'New York, NY',
        phone: '+1 (555) 123-4567',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=1'
      }, {
        id: '1002',
        name: 'Bob Smith',
        role: 'Product Manager',
        email: 'bob.smith@company.com',
        amount: '$189,500',
        date: 'March 18, 2025',
        department: 'Product',
        location: 'San Francisco, CA',
        phone: '+1 (555) 234-5678',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/32?img=2'
      }, {
        id: '1003',
        name: 'Carol Williams',
        role: 'UX Designer',
        email: 'carol.williams@company.com',
        amount: '$312,750',
        date: 'March 20, 2025',
        department: 'Design',
        location: 'Austin, TX',
        phone: '+1 (555) 345-6789',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=3'
      }, {
        id: '1004',
        name: 'David Brown',
        role: 'DevOps Engineer',
        email: 'david.brown@company.com',
        amount: '$198,250',
        date: 'March 22, 2025',
        department: 'Operations',
        location: 'Seattle, WA',
        phone: '+1 (555) 456-7890',
        status: 'Inactive',
        avatar: 'https://i.pravatar.cc/32?img=4'
      }];
      const filteredData = emailSearch ? sampleData.filter(row => row.email.toLowerCase().includes(emailSearch.toLowerCase())) : sampleData;
      return <div>
          <div style={{
          marginBottom: '16px',
          padding: '12px',
          backgroundColor: '#f8f7fb',
          borderRadius: '8px'
        }}>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            fontWeight: 600
          }}>Interactive Features Demo</h4>
            <ul style={{
            margin: 0,
            paddingLeft: '20px',
            fontSize: '12px',
            lineHeight: '1.6'
          }}>
              <li><strong>ID Column:</strong> Locked (frozen) + Resizable - Stays visible when scrolling horizontally</li>
              <li><strong>Horizontal Scroll:</strong> Table has many columns - scroll right to see more</li>
              <li><strong>Name Column:</strong> Resizable + Sortable - Drag to resize, click to sort</li>
              <li><strong>Email Column:</strong> Search header - Type to filter rows</li>
              <li><strong>Status Column:</strong> Can be locked/unlocked - Toggle lock icon to freeze</li>
            </ul>
          </div>
          <div style={{
          overflowX: 'auto',
          border: '1px solid #e6e6e6',
          borderRadius: '8px'
        }}>
            <StyledTable>
            <StyledThead>
              <StyledTr>
                <TableHeader label="" side="left" showCheckbox checked={allChecked} onCheckChange={handleSelectAll} />
                <TableHeader label="ID" variant="resizeable-locked" side="left" locked={idLocked} resizable onLockToggle={() => setIdLocked(!idLocked)} onResize={setIdWidth} width={idWidth} sortable sortDirection={sortColumn === 'id' ? sortDirection : 'none'} onSort={() => handleSort('id')} />
                <TableHeader label="User" variant="resizeable" resizable onResize={setNameWidth} width={nameWidth} sortable sortDirection={sortColumn === 'name' ? sortDirection : 'none'} onSort={() => handleSort('name')} />
                <TableHeader label="Email" variant="search" searchValue={emailSearch} searchPlaceholder="Search emails..." onSearchChange={setEmailSearch} />
                <TableHeader label="Amount" variant="resizeable" resizable onResize={setAmountWidth} width={amountWidth} align="right" sortable sortDirection={sortColumn === 'amount' ? sortDirection : 'none'} onSort={() => handleSort('amount')} />
                <TableHeader label="Date" sortable sortDirection={sortColumn === 'date' ? sortDirection : 'none'} onSort={() => handleSort('date')} />
                <TableHeader label="Department" variant="resizeable" resizable onResize={setDepartmentWidth} width={departmentWidth} sortable sortDirection={sortColumn === 'department' ? sortDirection : 'none'} onSort={() => handleSort('department')} />
                <TableHeader label="Location" variant="resizeable" resizable onResize={setLocationWidth} width={locationWidth} />
                <TableHeader label="Phone" variant="resizeable" resizable onResize={setPhoneWidth} width={phoneWidth} />
                <TableHeader label="Status" variant="resizeable-locked" locked={statusLocked} resizable onLockToggle={() => setStatusLocked(!statusLocked)} onResize={setStatusWidth} width={statusWidth} />
                <TableHeader label="Actions" side="right" />
              </StyledTr>
            </StyledThead>
            <StyledTbody>
              {filteredData.map((row, index) => <StyledTr key={row.id}>
                  <TableCell showCheckbox checked={selectedRows.includes(index)} onCheckChange={checked => handleRowSelect(index, checked)} />
                  <TableCell showNumber number={row.id} />
                  <TableCell showAvatar avatarSrc={row.avatar} showUserInfo userName={row.name} userRole={row.role} />
                  <TableCell showText text={row.email} />
                  <TableCell showAmount amount={row.amount} align="right" />
                  <TableCell showDate date={row.date} />
                  <TableCell showText text={row.department} />
                  <TableCell showText text={row.location} />
                  <TableCell showText text={row.phone} />
                  <TableCell showBadge badgeLabel={row.status} badgeType={row.status === 'Active' ? 'success' : row.status === 'Pending' ? 'warning' : 'error'} />
                  <TableCell showEditAction showDeleteAction />
                </StyledTr>)}
            </StyledTbody>
          </StyledTable>
          </div>
          {filteredData.length === 0 && <div style={{
          padding: '24px',
          textAlign: 'center',
          color: '#6C6C6C'
        }}>
              No results found for "{emailSearch}"
            </div>}
        </div>;
    };
    return <AllFeaturesTable />;
  },
  parameters: {
    docs: {
      description: {
        story: \`
### Complete Table with All Header Features

This example demonstrates all TableHeader variants and features:

**Header Variants:**
- **Default** - Standard header with checkbox and sort
- **Locked** - Column freeze/pin functionality
- **Resizeable** - Drag to adjust column width
- **Resizeable + Locked** - Both features combined
- **Search** - Inline search/filter input

**Interactive Features:**
- Checkbox selection (header + rows)
- Lock/unlock columns (ID, Status)
- Resize columns (drag handles)
- Search filtering (Email column)
- Sortable columns (click headers)
- Border radius on edge columns

**Try it:**
1. Click lock icons to freeze/unfreeze columns
2. Drag resize handles to adjust widths
3. Type in the Email search field to filter
4. Click sortable headers to change sort order
5. Select rows with checkboxes
        \`
      }
    }
  }
}`,...(Ge=(Ke=pe.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source}}};const at=["CompleteExample","SortableHeaders","CellWithUserInfo","CellWithDataFields","CellWithStatusIndicators","CellWithActions","SelectableRows","AllHeaderFeatures"];export{pe as AllHeaderFeatures,ue as CellWithActions,de as CellWithDataFields,me as CellWithStatusIndicators,ce as CellWithUserInfo,se as CompleteExample,he as SelectableRows,ie as SortableHeaders,at as __namedExportsOrder,et as default};
