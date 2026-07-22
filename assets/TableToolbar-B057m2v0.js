import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as P,R as pe}from"./index-B0WjJBI_.js";import{g as l}from"./styled-components.browser.esm-DVcPNpfh.js";import{c as ce}from"./createSvgIcon-B7ekv6yR.js";import{C as ue}from"./Checkbox-FOTO3Ujj.js";import{B as fe}from"./Badge-DSAVxi_S.js";import{C as me}from"./Chip-YwhtXZXO.js";import{B as C}from"./Button-BULM1ePa.js";import{I as F}from"./Icon-DTHcdsUG.js";const ee=ce(t.jsx("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"})),te=ce(t.jsx("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"})),ge=l.th`
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
  position: relative;
  
  /* Fixed width for checkbox-only columns */
  ${({$showCheckbox:e,$hasLabel:a,$sortable:n})=>e&&!a&&!n?`
    width: 56px;
    min-width: 56px;
    max-width: 56px;
  `:""}
  
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
`,ae=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  ${({$variant:e})=>e==="search"?"justify-content: space-between;":""}
`,he=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex: 1;
  min-width: 0;
`,U=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,ne=l.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-left: auto;
`,re=l.span`
  display: ${({$direction:e})=>e==="none"?"none":"inline-flex"};
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  transition: all 0.2s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`,xe=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,le=l.div`
  display: none; /* Hidden - using ResizeBorder instead */
  /* display: inline-flex; */
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
`,ye=l.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 50%;
  cursor: col-resize;
  user-select: none;
  z-index: 2;
  
  /* Visual border - half height, centered vertically */
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: ${({theme:e})=>e.colors.palette.neutral[400]};
    transition: background-color 0.2s ease;
  }
  
  /* Hover state */
  &:hover::before {
    background-color: ${({theme:e})=>e.colors.palette.primary[500]};
  }
  
  /* Active/dragging state */
  &:active::before {
    background-color: ${({theme:e})=>e.colors.palette.primary[600]};
  }
`,ve=l.div`
  display: flex;
  flex: 1;
  min-width: 0;
`,be=l.input`
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
`,we=l.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`,ie=()=>t.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M12.667 7.333H12V5.333C12 3.493 10.507 2 8.667 2C6.827 2 5.333 3.493 5.333 5.333V7.333H4.667C4.113 7.333 3.667 7.78 3.667 8.333V13C3.667 13.553 4.113 14 4.667 14H12.667C13.22 14 13.667 13.553 13.667 13V8.333C13.667 7.78 13.22 7.333 12.667 7.333ZM8.667 11C8.113 11 7.667 10.553 7.667 10C7.667 9.447 8.113 9 8.667 9C9.22 9 9.667 9.447 9.667 10C9.667 10.553 9.22 11 8.667 11ZM10.533 7.333H6.8V5.333C6.8 4.3 7.633 3.467 8.667 3.467C9.7 3.467 10.533 4.3 10.533 5.333V7.333Z",fill:"currentColor"})}),se=()=>t.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"7.5",y:"4",width:"1",height:"8",rx:"0.5",fill:"currentColor"}),t.jsx("circle",{cx:"8",cy:"8",r:"1",fill:"currentColor"})]}),Te=({label:e,variant:a="default",side:n="middle",sortable:r=!1,sortDirection:o="none",onSort:y,showCheckbox:f=!1,checked:v=!1,indeterminate:k=!1,onCheckChange:b,locked:c=!1,onLockToggle:h,leftOffset:w=0,isChildColumn:V=!1,resizable:m=!1,onResize:x,searchValue:T="",searchPlaceholder:z="Search",onSearchChange:s,align:O="left",width:g,minWidth:I,maxWidth:S,className:K,subHeader:$,subHeaderSpan:j=1,isFirstInGroup:u=!1,isLastInGroup:N=!1,colSpan:X,rowSpan:E})=>{const[B,R]=P.useState(!1),q=P.useRef(null),L=P.useRef(0),M=P.useRef(0),Z=i=>{i.stopPropagation(),r&&y&&a!=="search"&&y()},Y=i=>{b&&b(i.target.checked)},J=i=>{i.stopPropagation(),h&&h()},D=i=>{s&&s(i.target.value)},W=i=>{i.preventDefault(),i.stopPropagation(),R(!0),L.current=i.clientX,q.current&&(M.current=q.current.offsetWidth)};pe.useEffect(()=>{if(!B)return;const i=Q=>{if(!q.current||!x)return;const d=Q.clientX-L.current,A=M.current+d;x(Math.max(80,A))},_=()=>{R(!1)};return document.addEventListener("mousemove",i),document.addEventListener("mouseup",_),()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",_)}},[B,x]);const p=(a==="resizeable"||a==="resizeable-locked")&&m,H=a==="search";return t.jsxs(ge,{ref:q,$align:O,$sortable:r&&!H,$variant:a,$side:n,$resizable:m,$locked:c,$leftOffset:w,$sortDirection:o,$showCheckbox:f,$hasLabel:!!e,style:{width:g?`${g}px`:void 0,minWidth:I?`${I}px`:g?`${g}px`:void 0,maxWidth:S?`${S}px`:g?`${g}px`:void 0},className:K,"data-locked":c?"true":void 0,colSpan:X,rowSpan:E,children:[H?t.jsxs(ae,{$variant:a,children:[t.jsx(ve,{children:t.jsx(be,{type:"text",value:T,placeholder:z,onChange:D,onClick:i=>i.stopPropagation()})}),t.jsxs(ne,{children:[t.jsx(we,{children:r&&t.jsx(re,{$direction:o,children:o==="asc"?t.jsx(te,{fontSize:"small"}):t.jsx(ee,{fontSize:"small"})})}),p&&t.jsx(le,{onMouseDown:W,children:t.jsx(se,{})})]})]}):t.jsxs(ae,{$variant:a,children:[t.jsxs(he,{children:[f&&t.jsx(xe,{children:t.jsx(ue,{checked:v,onChange:Y,onClick:i=>i.stopPropagation()})}),r?t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"8px 4px",margin:"-8px -4px",flex:1,minWidth:0},onClick:Z,children:[e&&($?t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",position:"relative",minWidth:0},children:[u&&t.jsx("div",{style:{position:"absolute",top:"-12px",left:u?"0":void 0,right:N?"0":void 0,width:u?`calc(${j*100}% + ${(j-1)*1}px)`:void 0,fontSize:"12px",fontWeight:500,textAlign:"center",paddingBottom:"4px",borderBottom:"1px solid",borderColor:"inherit"},children:$}),t.jsx(U,{style:{marginTop:u?"16px":"0"},children:e})]}):t.jsx(U,{children:e})),t.jsx(re,{$direction:o,children:o==="asc"?t.jsx(te,{fontSize:"small"}):t.jsx(ee,{fontSize:"small"})})]}):t.jsx(t.Fragment,{children:e&&($?t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",position:"relative",minWidth:0},children:[u&&t.jsx("div",{style:{position:"absolute",top:"-12px",left:u?"0":void 0,right:N?"0":void 0,width:u?`calc(${j*100}% + ${(j-1)*1}px)`:void 0,fontSize:"12px",fontWeight:500,textAlign:"center",paddingBottom:"4px",borderBottom:"1px solid",borderColor:"inherit"},children:$}),t.jsx(U,{style:{marginTop:u?"16px":"0"},children:e})]}):t.jsx(U,{children:e}))}),c&&!V&&!f&&(h?t.jsx("button",{onClick:J,style:{background:"none",border:"none",padding:0,margin:"0 0 0 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",color:"#A5B4FC",transition:"color 0.2s"},onMouseEnter:i=>i.currentTarget.style.color="#818CF8",onMouseLeave:i=>i.currentTarget.style.color="#A5B4FC",title:"Unlock column",children:t.jsx(ie,{})}):t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",margin:"0 0 0 8px",color:"#A5B4FC"},title:"Column is locked",children:t.jsx(ie,{})}))]}),p&&t.jsx(ne,{children:t.jsx(le,{onMouseDown:W,children:t.jsx(se,{})})})]}),m&&t.jsx(ye,{onMouseDown:W})]})};Te.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'locked' | 'resizeable' | 'resizeable-locked' | 'search'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'locked'"},{name:"literal",value:"'resizeable'"},{name:"literal",value:"'resizeable-locked'"},{name:"literal",value:"'search'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'left' | 'middle' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'middle'",computed:!1}},sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onLockToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},isChildColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},minWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},subHeader:{required:!1,tsType:{name:"string"},description:""},subHeaderSpan:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},isFirstInGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLastInGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},colSpan:{required:!1,tsType:{name:"number"},description:""},rowSpan:{required:!1,tsType:{name:"number"},description:""}}};const $e=l.td`
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
`,je=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[7]};
  flex-wrap: nowrap;
`,qe=l.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  user-select: none;
`,Ce=l.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,ke=l.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,Ve=l.div`
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
`,ze=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  flex-shrink: 0;
`,Se=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
`,Re=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[12]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  white-space: nowrap;
`,G=l.div`
  font-family: ${({theme:e})=>e.fonts.monospace};
  font-size: ${({theme:e})=>e.typography.code["regular-14"].fontSize};
  font-weight: ${({theme:e})=>e.typography.code["regular-14"].fontWeight};
  line-height: ${({theme:e})=>e.typography.code["regular-14"].lineHeight};
  letter-spacing: ${({theme:e})=>e.typography.code["regular-14"].letterSpacing};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  flex-shrink: 0;
`,Le=l(G)`
  text-align: right;
`,We=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  flex-shrink: 0;
`,oe=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  flex-shrink: 0;
`,Ae=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-left: auto;
  flex-shrink: 0;
`,Ie=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"currentColor"})}),Ne=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fill:"currentColor"})}),Ee=({showCheckbox:e=!1,checked:a=!1,onCheckChange:n,showAvatar:r=!1,avatarSrc:o,avatarAlt:y="Avatar",showUserInfo:f=!1,userName:v,userRole:k,showNumber:b=!1,number:c,showAmount:h=!1,amount:w,showDate:V=!1,date:m,showText:x=!1,text:T,showBadge:z=!1,badgeLabel:s,badgeType:O="info",badgeStyle:g="default",showChip:I=!1,chipLabel:S,chipType:K="primary",chipVariant:$="filled",onChipRemove:j,showButton:u=!1,buttonLabel:N="Button",onButtonClick:X,showEditAction:E=!1,onEdit:B,showDeleteAction:R=!1,onDelete:q,onClick:L,align:M="left",className:Z,selected:Y=!1,isFirstColumn:J=!1,locked:D=!1,leftOffset:W=0,children:p})=>{const H=d=>{d.stopPropagation(),n&&n(!a,d.shiftKey)},i=d=>d?d.split(" ").map(A=>A[0]).join("").toUpperCase().slice(0,2):"?",_=d=>{if(typeof d=="number")return!0;if(typeof d=="string"){const A=d.replace(/[$,\s]/g,"");return/^\d+\.?\d*$/.test(A)}return!1},Q=()=>p?typeof p=="string"||typeof p=="number"?_(p)?t.jsx(G,{children:p}):t.jsx(oe,{children:p}):p:null;return t.jsx($e,{$align:M,$selected:Y,$isFirst:J,$locked:D,$leftOffset:W,className:Z,"data-locked":D?"true":void 0,onClick:L,style:{cursor:L?"pointer":"default"},children:t.jsxs(je,{children:[e&&t.jsx(qe,{onClick:H,style:{cursor:"pointer"},children:t.jsx(ue,{checked:a,onChange:()=>{}})}),r&&t.jsx(Ce,{children:o?t.jsx(ke,{src:o,alt:y}):t.jsx(Ve,{children:i(v)})}),f&&t.jsxs(ze,{children:[v&&t.jsx(Se,{children:v}),k&&t.jsx(Re,{children:k})]}),b&&c&&t.jsx(G,{children:c}),h&&w&&t.jsx(Le,{children:w}),V&&m&&t.jsx(We,{children:m}),x&&T&&t.jsx(oe,{children:T}),z&&s&&t.jsx(fe,{label:s,type:O,style:g}),I&&S&&t.jsx(me,{label:S,type:K,variant:$,onRemove:j}),u&&t.jsx(C,{variant:"secondary",size:"small",onClick:X,children:N}),(E||R)&&t.jsxs(Ae,{children:[E&&t.jsx(C,{onClick:B,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(Ie,{}),children:"Edit"}),R&&t.jsx(C,{onClick:q,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(Ne,{}),children:"Delete"})]}),Q()]})})};Ee.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, shiftKey?: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"boolean"},name:"shiftKey"}],return:{name:"void"}}},description:""},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},showUserInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:""},userRole:{required:!1,tsType:{name:"string"},description:""},showNumber:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},number:{required:!1,tsType:{name:"string"},description:""},showAmount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},amount:{required:!1,tsType:{name:"string"},description:""},showDate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},date:{required:!1,tsType:{name:"string"},description:""},showText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},showBadge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeLabel:{required:!1,tsType:{name:"string"},description:""},badgeType:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},badgeStyle:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showChip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipLabel:{required:!1,tsType:{name:"string"},description:""},chipType:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},chipVariant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},onChipRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showEditAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showDeleteAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLTableCellElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableCellElement>",elements:[{name:"HTMLTableCellElement"}]},name:"event"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFirstColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const de=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 0;
`,Be=l.h2`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.semantic)==null?void 0:n.text)==null?void 0:r.primary)||"#111827"}};
  margin: 0;
`,Me=l.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,De=l.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:r[400])||"#b1b1b1"}};
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Elevance Sans', sans-serif;
  color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.semantic)==null?void 0:n.text)==null?void 0:r.primary)||"#111827"}};
  background: #ffffff;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.primary)==null?void 0:r[500])||"#3b82f6"}};
  }
`,He=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,_e=l.input`
  padding: 8px 12px 8px 36px;
  border: 1px solid ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:r[300])||"#d1d5db"}};
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Elevance Sans', sans-serif;
  color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.semantic)==null?void 0:n.text)==null?void 0:r.primary)||"#111827"}};
  background: #ffffff;
  width: 300px;
  
  &::placeholder {
    color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:r[500])||"#6b7280"}};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.primary)==null?void 0:r[500])||"#3b82f6"}};
  }
`,Pe=l.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:r[500])||"#6b7280"}};
`,Fe=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>{var a;return((a=e.spacing)==null?void 0:a[5])||"12px"}};
  ${({$align:e})=>e==="right"?"margin-left: auto;":e==="center"?"margin: 0 auto;":""}
`,Ue=l.h2`
  font-family: ${({theme:e})=>{var a;return((a=e.fonts)==null?void 0:a.primary)||"Elevance Sans, sans-serif"}};
  font-size: ${({theme:e})=>{var a;return((a=e.fontSizes)==null?void 0:a[20])||"20px"}};
  font-weight: ${({theme:e})=>{var a;return((a=e.fontWeights)==null?void 0:a.semibold)||600}};
  color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.semantic)==null?void 0:n.text)==null?void 0:r.primary)||"#111827"}};
  margin: 0;
`,Oe=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>{var a;return((a=e.spacing)==null?void 0:a[5])||"12px"}};
`,Ke=({align:e="left",children:a,className:n})=>t.jsx(Fe,{$align:e,className:n,children:a}),Xe=({children:e,className:a})=>t.jsx(Ue,{className:a,children:e}),Ze=({children:e,className:a})=>t.jsx(Oe,{className:a,children:e}),Ye=({children:e,className:a,title:n,showDropdown:r=!1,dropdownOptions:o=[],dropdownValue:y,onDropdownChange:f,dropdownLabel:v="Select",showGlobalSearch:k=!1,globalSearchValue:b="",onGlobalSearchChange:c,globalSearchPlaceholder:h="Search...",showDownload:w=!0,onDownload:V,showFilter:m=!0,onFilter:x,showSettings:T=!0,onSettingsClick:z})=>e?t.jsx(de,{className:a,children:e}):t.jsxs(de,{className:a,children:[n&&t.jsx(Be,{children:n}),t.jsxs(Me,{children:[k&&t.jsxs(He,{children:[t.jsx(Pe,{children:t.jsx(F,{name:"Search",size:"small"})}),t.jsx(_e,{type:"text",value:b,onChange:s=>c==null?void 0:c(s.target.value),placeholder:h})]}),r&&o.length>0&&t.jsx(De,{value:y,onChange:s=>f==null?void 0:f(s.target.value),children:o.map(s=>t.jsx("option",{value:s.value,children:s.label},s.value))}),w&&t.jsx(C,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(F,{name:"Download",size:"medium"}),onClick:V,"aria-label":"Download",children:"Download"}),m&&t.jsx(C,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(F,{name:"FilterAlt",size:"medium"}),onClick:x,"aria-label":"Filter",children:"Filter"}),T&&t.jsx(C,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(F,{name:"Settings",size:"medium"}),onClick:z,"aria-label":"Settings",children:"Settings"})]})]});Ke.__docgenInfo={description:"",methods:[],displayName:"TableToolbarSection",props:{align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};Xe.__docgenInfo={description:"",methods:[],displayName:"TableToolbarTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};Ze.__docgenInfo={description:"",methods:[],displayName:"TableToolbarActions",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};Ye.__docgenInfo={description:"",methods:[],displayName:"TableToolbar",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom children - when provided, renders custom content instead of default toolbar"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},title:{required:!1,tsType:{name:"string"},description:"Table title"},showDropdown:{required:!1,tsType:{name:"boolean"},description:"Show dropdown selector",defaultValue:{value:"false",computed:!1}},dropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"Dropdown options",defaultValue:{value:"[]",computed:!1}},dropdownValue:{required:!1,tsType:{name:"string"},description:"Selected dropdown value"},onDropdownChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Dropdown change handler"},dropdownLabel:{required:!1,tsType:{name:"string"},description:"Dropdown placeholder/label",defaultValue:{value:"'Select'",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search",defaultValue:{value:"false",computed:!1}},globalSearchValue:{required:!1,tsType:{name:"string"},description:"Global search value",defaultValue:{value:"''",computed:!1}},onGlobalSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Global search change handler"},globalSearchPlaceholder:{required:!1,tsType:{name:"string"},description:"Global search placeholder",defaultValue:{value:"'Search...'",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button",defaultValue:{value:"true",computed:!1}},onFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Filter handler"},showSettings:{required:!1,tsType:{name:"boolean"},description:"Show settings button",defaultValue:{value:"true",computed:!1}},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Settings click handler"}}};export{Ye as T,Te as a,Ee as b,Ke as c,Xe as d,Ze as e};
