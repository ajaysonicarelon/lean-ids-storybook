import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as j,R as re}from"./index-B0WjJBI_.js";import{c as l}from"./styled-components.browser.esm-DvYOtweu.js";import{C as Y}from"./Checkbox-BBM9hoQN.js";import{B as ie}from"./Badge-B_606pXo.js";import{C as de}from"./Chip-BmQRtEfP.js";import{B as V}from"./Button-B6IX_q4c.js";import{E as ce}from"./ExpandMore-CVtF5XTt.js";import{I as E,C as ue}from"./Icon-jrFtYy1b.js";import{I as pe}from"./InlineMessage-CQv8tPZm.js";const fe=l.th`
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
  vertical-align: middle;
  
  ${({$side:e})=>e==="left"?"border-top-left-radius: 8px;":e==="right"?"border-top-right-radius: 8px;":""}

  ${({$locked:e,$leftOffset:a,theme:n})=>e?`
    position: sticky;
    left: ${a||0}px;
    z-index: 10;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
    
    &.is-stuck {
      background-color: ${n.colors.palette.primary[50]};
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
  `:""}

  &:hover {
    background-color: ${({theme:e,$sortable:a})=>a?e.colors.palette.primary[100]:e.colors.palette.primary[50]};
  }
`,G=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  ${({$variant:e})=>e==="search"?"justify-content: space-between;":""}
`,me=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex: 1;
  min-width: 0;
`,J=l.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-left: auto;
`,K=l.span`
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
`,ge=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Q=l.div`
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
`,he=l.div`
  display: flex;
  flex: 1;
  min-width: 0;
`,xe=l.input`
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
`,ve=l.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`,ee=()=>t.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8 11L4 7H12L8 11Z",fill:"currentColor"})}),te=()=>t.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M12.667 7.333H12V5.333C12 3.493 10.507 2 8.667 2C6.827 2 5.333 3.493 5.333 5.333V7.333H4.667C4.113 7.333 3.667 7.78 3.667 8.333V13C3.667 13.553 4.113 14 4.667 14H12.667C13.22 14 13.667 13.553 13.667 13V8.333C13.667 7.78 13.22 7.333 12.667 7.333ZM8.667 11C8.113 11 7.667 10.553 7.667 10C7.667 9.447 8.113 9 8.667 9C9.22 9 9.667 9.447 9.667 10C9.667 10.553 9.22 11 8.667 11ZM10.533 7.333H6.8V5.333C6.8 4.3 7.633 3.467 8.667 3.467C9.7 3.467 10.533 4.3 10.533 5.333V7.333Z",fill:"currentColor"})}),ae=()=>t.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"7.5",y:"4",width:"1",height:"8",rx:"0.5",fill:"currentColor"}),t.jsx("circle",{cx:"8",cy:"8",r:"1",fill:"currentColor"})]}),ye=({label:e,variant:a="default",side:n="middle",sortable:o=!1,sortDirection:v="none",onSort:L,showCheckbox:g=!1,checked:h=!1,indeterminate:f=!1,onCheckChange:w,locked:C=!1,onLockToggle:$,leftOffset:z=0,isChildColumn:D=!1,resizable:q=!1,onResize:S,searchValue:x="",searchPlaceholder:A="Search",onSearchChange:R,align:W="left",width:H,className:O,subHeader:I,subHeaderSpan:M=1,isFirstInGroup:k=!1,isLastInGroup:F=!1,colSpan:r,rowSpan:d})=>{const[s,c]=j.useState(!1),p=j.useRef(null),m=j.useRef(0),y=j.useRef(0),T=()=>{o&&L&&a!=="search"&&L()},i=u=>{w&&w(u.target.checked)},b=u=>{u.stopPropagation(),$&&$()},Z=u=>{R&&R(u.target.value)},N=u=>{u.preventDefault(),u.stopPropagation(),c(!0),m.current=u.clientX,p.current&&(y.current=p.current.offsetWidth)};re.useEffect(()=>{if(!s)return;const u=B=>{if(!p.current||!S)return;const X=B.clientX-m.current,oe=y.current+X;S(Math.max(50,oe))},U=()=>{c(!1)};return document.addEventListener("mousemove",u),document.addEventListener("mouseup",U),()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",U)}},[s,S]);const P=(a==="resizeable"||a==="resizeable-locked")&&q,_=a==="search";return t.jsx(fe,{ref:p,$align:W,$sortable:o&&!_,$variant:a,$side:n,$resizable:q,$locked:C,$leftOffset:z,$sortDirection:v,onClick:T,style:{width:H},className:O,"data-locked":C?"true":void 0,colSpan:r,rowSpan:d,children:_?t.jsxs(G,{$variant:a,children:[t.jsx(he,{children:t.jsx(xe,{type:"text",value:x,placeholder:A,onChange:Z,onClick:u=>u.stopPropagation()})}),t.jsxs(J,{children:[t.jsx(ve,{children:o&&t.jsx(K,{$direction:v,children:t.jsx(ee,{})})}),P&&t.jsx(Q,{onMouseDown:N,children:t.jsx(ae,{})})]})]}):t.jsxs(G,{$variant:a,children:[t.jsxs(me,{children:[g&&t.jsx(ge,{children:t.jsx(Y,{checked:h,onChange:i,onClick:u=>u.stopPropagation()})}),e&&(I?t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",position:"relative"},children:[k&&t.jsx("div",{style:{position:"absolute",top:"-12px",left:k?"0":void 0,right:F?"0":void 0,width:k?`calc(${M*100}% + ${(M-1)*1}px)`:void 0,fontSize:"12px",fontWeight:500,textAlign:"center",paddingBottom:"4px",borderBottom:"1px solid",borderColor:"inherit"},children:I}),t.jsx("span",{style:{marginTop:k?"16px":"0"},children:e})]}):t.jsx("span",{children:e})),o&&t.jsx(K,{$direction:v,children:t.jsx(ee,{})}),C&&!D&&($?t.jsx("button",{onClick:b,style:{background:"none",border:"none",padding:0,margin:"0 0 0 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",color:"#A5B4FC",transition:"color 0.2s"},onMouseEnter:u=>u.currentTarget.style.color="#818CF8",onMouseLeave:u=>u.currentTarget.style.color="#A5B4FC",title:"Unlock column",children:t.jsx(te,{})}):t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",margin:"0 0 0 8px",color:"#A5B4FC"},title:"Column is locked",children:t.jsx(te,{})}))]}),P&&t.jsx(J,{children:t.jsx(Q,{onMouseDown:N,children:t.jsx(ae,{})})})]})})};ye.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'locked' | 'resizeable' | 'resizeable-locked' | 'search'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'locked'"},{name:"literal",value:"'resizeable'"},{name:"literal",value:"'resizeable-locked'"},{name:"literal",value:"'search'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'left' | 'middle' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'middle'",computed:!1}},sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onLockToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},isChildColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},subHeader:{required:!1,tsType:{name:"string"},description:""},subHeaderSpan:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},isFirstInGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLastInGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},colSpan:{required:!1,tsType:{name:"number"},description:""},rowSpan:{required:!1,tsType:{name:"number"},description:""}}};const be=l.td`
  background-color: ${({theme:e,$selected:a,$locked:n})=>n||a?e.colors.palette.primary[50]:e.colors.palette.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  border-left: ${({theme:e,$selected:a,$isFirst:n})=>a&&n?`2px solid ${e.colors.palette.primary[500]}`:"none"};
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[7]}`};
  height: 72px;
  text-align: ${({$align:e})=>e||"left"};
  vertical-align: middle;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  
  ${({$locked:e,$leftOffset:a,theme:n})=>e?`
    position: sticky;
    left: ${a||0}px;
    z-index: 9;
    
    &.is-stuck {
      background-color: ${n.colors.palette.primary[50]};
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
  `:""}
`,we=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[7]};
  flex-wrap: nowrap;
`,$e=l.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,Ce=l.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,ke=l.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,Te=l.div`
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
`,je=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  flex-shrink: 0;
`,qe=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
`,Se=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[12]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  white-space: nowrap;
`,le=l.div`
  font-family: 'Roboto Mono', monospace;
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  flex-shrink: 0;
`,Ve=l(le)`
  text-align: right;
`,ze=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  flex-shrink: 0;
`,Ie=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  flex-shrink: 0;
`,Le=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-left: auto;
  flex-shrink: 0;
`,De=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"currentColor"})}),Re=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fill:"currentColor"})}),Ee=({showCheckbox:e=!1,checked:a=!1,onCheckChange:n,showAvatar:o=!1,avatarSrc:v,avatarAlt:L="Avatar",showUserInfo:g=!1,userName:h,userRole:f,showNumber:w=!1,number:C,showAmount:$=!1,amount:z,showDate:D=!1,date:q,showText:S=!1,text:x,showBadge:A=!1,badgeLabel:R,badgeType:W="info",badgeStyle:H="default",showChip:O=!1,chipLabel:I,chipType:M="primary",chipVariant:k="filled",onChipRemove:F,showButton:r=!1,buttonLabel:d="Button",onButtonClick:s,showEditAction:c=!1,onEdit:p,showDeleteAction:m=!1,onDelete:y,align:T="left",className:i,selected:b=!1,isFirstColumn:Z=!1,locked:N=!1,leftOffset:P=0,children:_})=>{const u=B=>{n&&n(B.target.checked)},U=B=>B?B.split(" ").map(X=>X[0]).join("").toUpperCase().slice(0,2):"?";return t.jsx(be,{$align:T,$selected:b,$isFirst:Z,$locked:N,$leftOffset:P,className:i,"data-locked":N?"true":void 0,children:t.jsxs(we,{children:[e&&t.jsx($e,{children:t.jsx(Y,{checked:a,onChange:u})}),o&&t.jsx(Ce,{children:v?t.jsx(ke,{src:v,alt:L}):t.jsx(Te,{children:U(h)})}),g&&t.jsxs(je,{children:[h&&t.jsx(qe,{children:h}),f&&t.jsx(Se,{children:f})]}),w&&C&&t.jsx(le,{children:C}),$&&z&&t.jsx(Ve,{children:z}),D&&q&&t.jsx(ze,{children:q}),S&&x&&t.jsx(Ie,{children:x}),A&&R&&t.jsx(ie,{label:R,type:W,style:H}),O&&I&&t.jsx(de,{label:I,type:M,variant:k,onRemove:F}),r&&t.jsx(V,{variant:"secondary",size:"small",onClick:s,children:d}),(c||m)&&t.jsxs(Le,{children:[c&&t.jsx(V,{onClick:p,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(De,{}),children:"Edit"}),m&&t.jsx(V,{onClick:y,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(Re,{}),children:"Delete"})]}),_]})})};Ee.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},showUserInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:""},userRole:{required:!1,tsType:{name:"string"},description:""},showNumber:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},number:{required:!1,tsType:{name:"string"},description:""},showAmount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},amount:{required:!1,tsType:{name:"string"},description:""},showDate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},date:{required:!1,tsType:{name:"string"},description:""},showText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},showBadge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeLabel:{required:!1,tsType:{name:"string"},description:""},badgeType:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},badgeStyle:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showChip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipLabel:{required:!1,tsType:{name:"string"},description:""},chipType:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},chipVariant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},onChipRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showEditAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showDeleteAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFirstColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Me=l.div`
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
`,Be=l.div`
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  width: 400px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Ae=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[7]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
`,We=l.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  margin: 0;
`;l.button`
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
`;const He=l.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[7]};
`,Oe=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,se=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e,$isDragging:a,$isLocked:n})=>n?e.colors.palette.primary[50]:a?e.colors.palette.neutral[100]:e.colors.palette.neutral[50]};
  border: 1px solid ${({theme:e,$isLocked:a})=>a?e.colors.palette.primary[200]:e.colors.palette.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"move"};
  transition: all 0.2s;
  opacity: ${({$isLocked:e})=>e?.7:1};
  
  &:hover {
    background-color: ${({theme:e,$isLocked:a})=>a?e.colors.palette.primary[50]:e.colors.palette.neutral[100]};
    border-color: ${({theme:e,$isLocked:a})=>a?e.colors.palette.primary[200]:e.colors.palette.neutral[400]};
  }
`,Fe=l.div`
  display: flex;
  align-items: center;
  color: ${({theme:e,$isLocked:a})=>a?e.colors.palette.neutral[400]:e.colors.palette.neutral[600]};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"grab"};
  opacity: ${({$isLocked:e})=>e?.5:1};
  
  &:active {
    cursor: ${({$isLocked:e})=>e?"not-allowed":"grabbing"};
  }
`,Ne=l.span`
  flex: 1;
  font-family: ${({theme:e})=>e.typography.paragraph.medium.fontFamily};
  font-size: ${({theme:e})=>e.typography.paragraph.medium.fontSize};
  font-weight: ${({theme:e})=>e.typography.paragraph.medium.fontWeight};
  line-height: ${({theme:e})=>e.typography.paragraph.medium.lineHeight};
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
`,Pe=l(se)`
  margin-left: ${({theme:e})=>e.spacing[10]};
  background-color: ${({theme:e,$isDragging:a,$isLocked:n})=>n?e.colors.palette.primary[50]:e.colors.palette.neutral[100]};
`,ne=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  transition: color 0.2s;

  &:hover {
    color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,_e=l.div`
  display: flex;
  align-items: center;
`,Ue=l.button`
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

  svg {
    width: 16px;
    height: 16px;
  }
`,Ze=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[7]};
  border-top: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
`,Xe=({isOpen:e,onClose:a,columns:n,onColumnsChange:o,lockWarning:v,className:L})=>{const[g,h]=j.useState(n),[f,w]=j.useState(null),[C,$]=j.useState(!1),[z,D]=j.useState(new Set);j.useEffect(()=>{h(n)},[n]),j.useEffect(()=>{if(v){$(!0);const r=setTimeout(()=>$(!1),3e3);return()=>clearTimeout(r)}},[v]);const q=r=>{D(d=>{const s=new Set(d);return s.has(r)?s.delete(r):s.add(r),s})},S=r=>{h(d=>d.map(s=>s.id===r?s.subColumns?{...s,visible:!s.visible,subColumns:s.subColumns.map(c=>({...c,visible:!s.visible}))}:{...s,visible:!s.visible}:s.subColumns?{...s,subColumns:s.subColumns.map(c=>c.id===r?{...c,visible:!c.visible}:c)}:s))},x=r=>{const d=g.find(i=>i.id===r);if(!d)return;const s=g.filter(i=>i.locked&&i.id!=="checkbox").length;if(!d.locked&&s>=3){$(!0),setTimeout(()=>$(!1),3e3);return}const c=g.map(i=>i.id===r?i.subColumns?{...i,locked:!i.locked,subColumns:i.subColumns.map(b=>({...b,locked:!i.locked}))}:{...i,locked:!i.locked}:i),p=c.find(i=>i.id==="checkbox"),y=c.filter(i=>i.id!=="checkbox").sort((i,b)=>i.locked&&!b.locked?-1:!i.locked&&b.locked?1:i.order-b.order),T=p?[{...p,order:0},...y.map((i,b)=>({...i,order:b+1}))]:y.map((i,b)=>({...i,order:b}));h(T)},A=r=>{g[r].locked||w(r)},R=(r,d)=>{if(r.preventDefault(),f===null||f===d||g[d].locked||g[f].locked)return;const s=[...g],c=s[f];s.splice(f,1),s.splice(d,0,c);const p=s.map((m,y)=>({...m,order:y}));h(p),w(d)},W=()=>{w(null)},H=(r,d)=>{w(d)},O=(r,d,s)=>{r.preventDefault(),!(f===null||f===s)&&(h(c=>c.map(p=>{if(p.id===d&&p.subColumns){const m=[...p.subColumns],y=m[f];return m.splice(f,1),m.splice(s,0,y),{...p,subColumns:m}}return p})),w(s))},I=(r,d,s)=>{const c=r.subColumns&&r.subColumns.length>0,p=z.has(r.id),m=!!s,y=m?Pe:se;return t.jsxs(re.Fragment,{children:[t.jsxs(y,{draggable:!r.locked&&!c,onDragStart:()=>{m&&s?H(s,d):c||A(d)},onDragOver:T=>{m&&s?O(T,s,d):c||R(T,d)},onDragEnd:W,$isDragging:f===d,$isLocked:r.locked,children:[c?t.jsx(ne,{onClick:()=>q(r.id),children:p?t.jsx(ce,{}):t.jsx(ue,{})}):t.jsx(ne,{style:{visibility:"hidden"}}),t.jsx(_e,{children:t.jsx(Y,{checked:r.visible!==!1,onChange:()=>S(r.id)})}),t.jsx(Fe,{$isLocked:r.locked||c,children:t.jsx(E,{name:"DragIndicator",size:"small"})}),t.jsx(Ne,{children:r.label}),!m&&t.jsx(Ue,{onClick:()=>x(r.id),children:t.jsx(E,{name:r.locked?"Lock":"LockOpen",size:"small"})})]}),c&&p&&r.subColumns.map((T,i)=>I(T,i,r.id))]},r.id)},M=()=>{o(g),a()},k=()=>{h(n),a()},F=r=>{r.target===r.currentTarget&&k()};return t.jsx(Me,{$isOpen:e,onClick:F,children:t.jsxs(Be,{className:L,children:[t.jsxs(Ae,{children:[t.jsx(We,{children:"Table Settings"}),t.jsx(V,{onClick:k,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(E,{name:"Close",size:"small"}),children:"Close"})]}),t.jsxs(He,{children:[C&&t.jsx("div",{style:{marginBottom:"16px"},children:t.jsx(pe,{type:"warning",style:"accentBorder",text:"Maximum columns reached",descriptionText:"You can only freeze any 3 columns at a time.",showLeadingIcon:!0,showTrailingIcon:!1,action:!1,link:!1})}),t.jsx(Oe,{children:g.filter(r=>r.id!=="checkbox").map((r,d)=>I(r,d))})]}),t.jsxs(Ze,{children:[t.jsx(V,{onClick:k,variant:"secondary",children:"Cancel"}),t.jsx(V,{variant:"primary",onClick:M,children:"Apply Changes"})]})]})})};Xe.__docgenInfo={description:"",methods:[],displayName:"TableSettings",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the settings modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when modal is closed"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:"Array of column configurations"},onColumnsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(columns: ColumnConfig[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},name:"columns"}],return:{name:"void"}}},description:"Callback when columns are updated"},lockWarning:{required:!1,tsType:{name:"boolean"},description:"Whether to show lock warning"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}}};const Ye=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 0;
`,Ge=l.h2`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>{var a,n,o;return((o=(n=(a=e.colors)==null?void 0:a.semantic)==null?void 0:n.text)==null?void 0:o.primary)||"#111827"}};
  margin: 0;
`,Je=l.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,Ke=l.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid ${({theme:e})=>{var a,n,o;return((o=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:o[400])||"#b1b1b1"}};
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Elevance Sans', sans-serif;
  color: ${({theme:e})=>{var a,n,o;return((o=(n=(a=e.colors)==null?void 0:a.semantic)==null?void 0:n.text)==null?void 0:o.primary)||"#111827"}};
  background: #ffffff;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{var a,n,o;return((o=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.primary)==null?void 0:o[500])||"#3b82f6"}};
  }
`,Qe=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,et=l.input`
  padding: 8px 12px 8px 36px;
  border: 1px solid ${({theme:e})=>{var a,n,o;return((o=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:o[300])||"#d1d5db"}};
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Elevance Sans', sans-serif;
  color: ${({theme:e})=>{var a,n,o;return((o=(n=(a=e.colors)==null?void 0:a.semantic)==null?void 0:n.text)==null?void 0:o.primary)||"#111827"}};
  background: #ffffff;
  width: 300px;
  
  &::placeholder {
    color: ${({theme:e})=>{var a,n,o;return((o=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:o[500])||"#6b7280"}};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{var a,n,o;return((o=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.primary)==null?void 0:o[500])||"#3b82f6"}};
  }
`,tt=l.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${({theme:e})=>{var a,n,o;return((o=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:o[500])||"#6b7280"}};
`,at=({title:e,showDropdown:a=!1,dropdownOptions:n=[],dropdownValue:o,onDropdownChange:v,dropdownLabel:L="Select",showGlobalSearch:g=!1,globalSearchValue:h="",onGlobalSearchChange:f,globalSearchPlaceholder:w="Search...",showDownload:C=!0,onDownload:$,showFilter:z=!0,onFilter:D,showSettings:q=!0,onSettingsClick:S})=>t.jsxs(Ye,{children:[e&&t.jsx(Ge,{children:e}),t.jsxs(Je,{children:[g&&t.jsxs(Qe,{children:[t.jsx(tt,{children:t.jsx(E,{name:"Search",size:"small"})}),t.jsx(et,{type:"text",value:h,onChange:x=>f==null?void 0:f(x.target.value),placeholder:w})]}),a&&n.length>0&&t.jsx(Ke,{value:o,onChange:x=>v==null?void 0:v(x.target.value),children:n.map(x=>t.jsx("option",{value:x.value,children:x.label},x.value))}),C&&t.jsx(V,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(E,{name:"Download",size:"medium"}),onClick:$,"aria-label":"Download",children:"Download"}),z&&t.jsx(V,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(E,{name:"FilterAlt",size:"medium"}),onClick:D,"aria-label":"Filter",children:"Filter"}),q&&t.jsx(V,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(E,{name:"Settings",size:"medium"}),onClick:S,"aria-label":"Settings",children:"Settings"})]})]});at.__docgenInfo={description:"",methods:[],displayName:"TableToolbar",props:{title:{required:!1,tsType:{name:"string"},description:"Table title"},showDropdown:{required:!1,tsType:{name:"boolean"},description:"Show dropdown selector",defaultValue:{value:"false",computed:!1}},dropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"Dropdown options",defaultValue:{value:"[]",computed:!1}},dropdownValue:{required:!1,tsType:{name:"string"},description:"Selected dropdown value"},onDropdownChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Dropdown change handler"},dropdownLabel:{required:!1,tsType:{name:"string"},description:"Dropdown placeholder/label",defaultValue:{value:"'Select'",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search",defaultValue:{value:"false",computed:!1}},globalSearchValue:{required:!1,tsType:{name:"string"},description:"Global search value",defaultValue:{value:"''",computed:!1}},onGlobalSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Global search change handler"},globalSearchPlaceholder:{required:!1,tsType:{name:"string"},description:"Global search placeholder",defaultValue:{value:"'Search...'",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button",defaultValue:{value:"true",computed:!1}},onFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Filter handler"},showSettings:{required:!1,tsType:{name:"boolean"},description:"Show settings button",defaultValue:{value:"true",computed:!1}},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Settings click handler"}}};export{at as T,ye as a,Ee as b,Xe as c};
