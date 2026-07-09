import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as q,R as de}from"./index-B0WjJBI_.js";import{g as l}from"./styled-components.browser.esm-DVcPNpfh.js";import{C as G}from"./Checkbox-CWZMyd52.js";import{B as ue}from"./Badge-DSAVxi_S.js";import{C as pe}from"./Chip-YwhtXZXO.js";import{B as L}from"./Button-CnBDXljr.js";import{E as fe}from"./ExpandMore-GavyM6T7.js";import{I as B,C as me}from"./Icon-D1GQI8nt.js";import{I as ge}from"./InlineMessage-MDOeQZie.js";const he=l.th`
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
`,ee=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  ${({$variant:e})=>e==="search"?"justify-content: space-between;":""}
`,xe=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex: 1;
  min-width: 0;
`,te=l.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-left: auto;
`,ae=l.span`
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
`,ye=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,ne=l.div`
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
`,re=()=>t.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8 11L4 7H12L8 11Z",fill:"currentColor"})}),le=()=>t.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M12.667 7.333H12V5.333C12 3.493 10.507 2 8.667 2C6.827 2 5.333 3.493 5.333 5.333V7.333H4.667C4.113 7.333 3.667 7.78 3.667 8.333V13C3.667 13.553 4.113 14 4.667 14H12.667C13.22 14 13.667 13.553 13.667 13V8.333C13.667 7.78 13.22 7.333 12.667 7.333ZM8.667 11C8.113 11 7.667 10.553 7.667 10C7.667 9.447 8.113 9 8.667 9C9.22 9 9.667 9.447 9.667 10C9.667 10.553 9.22 11 8.667 11ZM10.533 7.333H6.8V5.333C6.8 4.3 7.633 3.467 8.667 3.467C9.7 3.467 10.533 4.3 10.533 5.333V7.333Z",fill:"currentColor"})}),se=()=>t.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"7.5",y:"4",width:"1",height:"8",rx:"0.5",fill:"currentColor"}),t.jsx("circle",{cx:"8",cy:"8",r:"1",fill:"currentColor"})]}),$e=({label:e,variant:a="default",side:n="middle",sortable:o=!1,sortDirection:v="none",onSort:I,showCheckbox:g=!1,checked:h=!1,indeterminate:f=!1,onCheckChange:$,locked:k=!1,onLockToggle:C,leftOffset:E=0,isChildColumn:R=!1,resizable:S=!1,onResize:V,searchValue:x="",searchPlaceholder:A="Search",onSearchChange:M,align:H="left",width:O,className:N,subHeader:j,subHeaderSpan:D=1,isFirstInGroup:y=!1,isLastInGroup:W=!1,colSpan:r,rowSpan:c})=>{const[s,u]=q.useState(!1),p=q.useRef(null),m=q.useRef(0),b=q.useRef(0),T=d=>{d.stopPropagation(),o&&I&&a!=="search"&&I()},i=d=>{$&&$(d.target.checked)},w=d=>{d.stopPropagation(),C&&C()},Z=d=>{M&&M(d.target.value)},P=d=>{d.preventDefault(),d.stopPropagation(),u(!0),m.current=d.clientX,p.current&&(b.current=p.current.offsetWidth)};de.useEffect(()=>{if(!s)return;const d=K=>{if(!p.current||!V)return;const X=K.clientX-m.current,Y=b.current+X;V(Math.max(50,Y))},U=()=>{u(!1)};return document.addEventListener("mousemove",d),document.addEventListener("mouseup",U),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",U)}},[s,V]);const F=(a==="resizeable"||a==="resizeable-locked")&&S,_=a==="search";return t.jsx(he,{ref:p,$align:H,$sortable:o&&!_,$variant:a,$side:n,$resizable:S,$locked:k,$leftOffset:E,$sortDirection:v,$showCheckbox:g,$hasLabel:!!e,style:{width:O},className:N,"data-locked":k?"true":void 0,colSpan:r,rowSpan:c,children:_?t.jsxs(ee,{$variant:a,children:[t.jsx(ve,{children:t.jsx(be,{type:"text",value:x,placeholder:A,onChange:Z,onClick:d=>d.stopPropagation()})}),t.jsxs(te,{children:[t.jsx(we,{children:o&&t.jsx(ae,{$direction:v,children:t.jsx(re,{})})}),F&&t.jsx(ne,{onMouseDown:P,children:t.jsx(se,{})})]})]}):t.jsxs(ee,{$variant:a,children:[t.jsxs(xe,{children:[g&&t.jsx(ye,{children:t.jsx(G,{checked:h,onChange:i,onClick:d=>d.stopPropagation()})}),o?t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"8px 4px",margin:"-8px -4px",flex:1},onClick:T,children:[e&&(j?t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",position:"relative"},children:[y&&t.jsx("div",{style:{position:"absolute",top:"-12px",left:y?"0":void 0,right:W?"0":void 0,width:y?`calc(${D*100}% + ${(D-1)*1}px)`:void 0,fontSize:"12px",fontWeight:500,textAlign:"center",paddingBottom:"4px",borderBottom:"1px solid",borderColor:"inherit"},children:j}),t.jsx("span",{style:{marginTop:y?"16px":"0"},children:e})]}):t.jsx("span",{children:e})),t.jsx(ae,{$direction:v,children:t.jsx(re,{})})]}):t.jsx(t.Fragment,{children:e&&(j?t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",position:"relative"},children:[y&&t.jsx("div",{style:{position:"absolute",top:"-12px",left:y?"0":void 0,right:W?"0":void 0,width:y?`calc(${D*100}% + ${(D-1)*1}px)`:void 0,fontSize:"12px",fontWeight:500,textAlign:"center",paddingBottom:"4px",borderBottom:"1px solid",borderColor:"inherit"},children:j}),t.jsx("span",{style:{marginTop:y?"16px":"0"},children:e})]}):t.jsx("span",{children:e}))}),k&&!R&&!g&&(C?t.jsx("button",{onClick:w,style:{background:"none",border:"none",padding:0,margin:"0 0 0 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",color:"#A5B4FC",transition:"color 0.2s"},onMouseEnter:d=>d.currentTarget.style.color="#818CF8",onMouseLeave:d=>d.currentTarget.style.color="#A5B4FC",title:"Unlock column",children:t.jsx(le,{})}):t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",margin:"0 0 0 8px",color:"#A5B4FC"},title:"Column is locked",children:t.jsx(le,{})}))]}),F&&t.jsx(te,{children:t.jsx(ne,{onMouseDown:P,children:t.jsx(se,{})})})]})})};$e.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'locked' | 'resizeable' | 'resizeable-locked' | 'search'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'locked'"},{name:"literal",value:"'resizeable'"},{name:"literal",value:"'resizeable-locked'"},{name:"literal",value:"'search'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'left' | 'middle' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'middle'",computed:!1}},sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onLockToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},isChildColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},subHeader:{required:!1,tsType:{name:"string"},description:""},subHeaderSpan:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},isFirstInGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLastInGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},colSpan:{required:!1,tsType:{name:"number"},description:""},rowSpan:{required:!1,tsType:{name:"number"},description:""}}};const Ce=l.td`
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
`,Te=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[7]};
  flex-wrap: nowrap;
`,ke=l.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,je=l.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,qe=l.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,Se=l.div`
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
`,Ve=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  flex-shrink: 0;
`,ze=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
`,Le=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[12]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  white-space: nowrap;
`,Q=l.div`
  font-family: ${({theme:e})=>e.fonts.monospace};
  font-size: ${({theme:e})=>e.typography.code["regular-14"].fontSize};
  font-weight: ${({theme:e})=>e.typography.code["regular-14"].fontWeight};
  line-height: ${({theme:e})=>e.typography.code["regular-14"].lineHeight};
  letter-spacing: ${({theme:e})=>e.typography.code["regular-14"].letterSpacing};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  flex-shrink: 0;
`,Ee=l(Q)`
  text-align: right;
`,De=l.div`
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
`,Ie=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-left: auto;
  flex-shrink: 0;
`,Re=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"currentColor"})}),Me=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fill:"currentColor"})}),Be=({showCheckbox:e=!1,checked:a=!1,onCheckChange:n,showAvatar:o=!1,avatarSrc:v,avatarAlt:I="Avatar",showUserInfo:g=!1,userName:h,userRole:f,showNumber:$=!1,number:k,showAmount:C=!1,amount:E,showDate:R=!1,date:S,showText:V=!1,text:x,showBadge:A=!1,badgeLabel:M,badgeType:H="info",badgeStyle:O="default",showChip:N=!1,chipLabel:j,chipType:D="primary",chipVariant:y="filled",onChipRemove:W,showButton:r=!1,buttonLabel:c="Button",onButtonClick:s,showEditAction:u=!1,onEdit:p,showDeleteAction:m=!1,onDelete:b,onClick:T,align:i="left",className:w,selected:Z=!1,isFirstColumn:P=!1,locked:F=!1,leftOffset:_=0,children:d})=>{const U=z=>{n&&n(z.target.checked,z.nativeEvent.shiftKey)},K=z=>z?z.split(" ").map(J=>J[0]).join("").toUpperCase().slice(0,2):"?",X=z=>{if(typeof z=="number")return!0;if(typeof z=="string"){const J=z.replace(/[$,\s]/g,"");return/^\d+\.?\d*$/.test(J)}return!1},Y=()=>d?typeof d=="string"||typeof d=="number"?X(d)?t.jsx(Q,{children:d}):t.jsx(oe,{children:d}):d:null;return t.jsx(Ce,{$align:i,$selected:Z,$isFirst:P,$locked:F,$leftOffset:_,className:w,"data-locked":F?"true":void 0,onClick:T,style:{cursor:T?"pointer":"default"},children:t.jsxs(Te,{children:[e&&t.jsx(ke,{children:t.jsx(G,{checked:a,onChange:U})}),o&&t.jsx(je,{children:v?t.jsx(qe,{src:v,alt:I}):t.jsx(Se,{children:K(h)})}),g&&t.jsxs(Ve,{children:[h&&t.jsx(ze,{children:h}),f&&t.jsx(Le,{children:f})]}),$&&k&&t.jsx(Q,{children:k}),C&&E&&t.jsx(Ee,{children:E}),R&&S&&t.jsx(De,{children:S}),V&&x&&t.jsx(oe,{children:x}),A&&M&&t.jsx(ue,{label:M,type:H,style:O}),N&&j&&t.jsx(pe,{label:j,type:D,variant:y,onRemove:W}),r&&t.jsx(L,{variant:"secondary",size:"small",onClick:s,children:c}),(u||m)&&t.jsxs(Ie,{children:[u&&t.jsx(L,{onClick:p,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(Re,{}),children:"Edit"}),m&&t.jsx(L,{onClick:b,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(Me,{}),children:"Delete"})]}),Y()]})})};Be.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, shiftKey?: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"boolean"},name:"shiftKey"}],return:{name:"void"}}},description:""},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},showUserInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:""},userRole:{required:!1,tsType:{name:"string"},description:""},showNumber:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},number:{required:!1,tsType:{name:"string"},description:""},showAmount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},amount:{required:!1,tsType:{name:"string"},description:""},showDate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},date:{required:!1,tsType:{name:"string"},description:""},showText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},showBadge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeLabel:{required:!1,tsType:{name:"string"},description:""},badgeType:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},badgeStyle:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showChip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipLabel:{required:!1,tsType:{name:"string"},description:""},chipType:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},chipVariant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},onChipRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showEditAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showDeleteAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLTableCellElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableCellElement>",elements:[{name:"HTMLTableCellElement"}]},name:"event"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFirstColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const We=l.div`
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
`,Ae=l.div`
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  width: 400px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,He=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[7]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
`,Oe=l.h3`
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
`;const Ne=l.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[7]};
`,Fe=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,ce=l.div`
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
`,Pe=l.div`
  display: flex;
  align-items: center;
  color: ${({theme:e,$isLocked:a})=>a?e.colors.palette.neutral[400]:e.colors.palette.neutral[600]};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"grab"};
  opacity: ${({$isLocked:e})=>e?.5:1};
  
  &:active {
    cursor: ${({$isLocked:e})=>e?"not-allowed":"grabbing"};
  }
`,_e=l.span`
  flex: 1;
  font-family: ${({theme:e})=>e.typography.paragraph.medium.fontFamily};
  font-size: ${({theme:e})=>e.typography.paragraph.medium.fontSize};
  font-weight: ${({theme:e})=>e.typography.paragraph.medium.fontWeight};
  line-height: ${({theme:e})=>e.typography.paragraph.medium.lineHeight};
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
`,Ue=l(ce)`
  margin-left: ${({theme:e})=>e.spacing[10]};
  background-color: ${({theme:e,$isDragging:a,$isLocked:n})=>n?e.colors.palette.primary[50]:e.colors.palette.neutral[100]};
`,ie=l.div`
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
`,Ze=l.div`
  display: flex;
  align-items: center;
`,Ke=l.button`
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
`,Xe=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[7]};
  border-top: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
`,Ye=({isOpen:e,onClose:a,columns:n,onColumnsChange:o,lockWarning:v,className:I})=>{const[g,h]=q.useState(n),[f,$]=q.useState(null),[k,C]=q.useState(!1),[E,R]=q.useState(new Set);q.useEffect(()=>{h(n)},[n]),q.useEffect(()=>{if(v){C(!0);const r=setTimeout(()=>C(!1),3e3);return()=>clearTimeout(r)}},[v]);const S=r=>{R(c=>{const s=new Set(c);return s.has(r)?s.delete(r):s.add(r),s})},V=r=>{h(c=>c.map(s=>s.id===r?s.subColumns?{...s,visible:!s.visible,subColumns:s.subColumns.map(u=>({...u,visible:!s.visible}))}:{...s,visible:!s.visible}:s.subColumns?{...s,subColumns:s.subColumns.map(u=>u.id===r?{...u,visible:!u.visible}:u)}:s))},x=r=>{const c=g.find(i=>i.id===r);if(!c)return;const s=g.filter(i=>i.locked&&i.id!=="checkbox").length;if(!c.locked&&s>=3){C(!0),setTimeout(()=>C(!1),3e3);return}const u=g.map(i=>i.id===r?i.subColumns?{...i,locked:!i.locked,subColumns:i.subColumns.map(w=>({...w,locked:!i.locked}))}:{...i,locked:!i.locked}:i),p=u.find(i=>i.id==="checkbox"),b=u.filter(i=>i.id!=="checkbox").sort((i,w)=>i.locked&&!w.locked?-1:!i.locked&&w.locked?1:i.order-w.order),T=p?[{...p,order:0},...b.map((i,w)=>({...i,order:w+1}))]:b.map((i,w)=>({...i,order:w}));h(T)},A=r=>{g[r].locked||$(r)},M=(r,c)=>{if(r.preventDefault(),f===null||f===c||g[c].locked||g[f].locked)return;const s=[...g],u=s[f];s.splice(f,1),s.splice(c,0,u);const p=s.map((m,b)=>({...m,order:b}));h(p),$(c)},H=()=>{$(null)},O=(r,c)=>{$(c)},N=(r,c,s)=>{r.preventDefault(),!(f===null||f===s)&&(h(u=>u.map(p=>{if(p.id===c&&p.subColumns){const m=[...p.subColumns],b=m[f];return m.splice(f,1),m.splice(s,0,b),{...p,subColumns:m}}return p})),$(s))},j=(r,c,s)=>{const u=r.subColumns&&r.subColumns.length>0,p=E.has(r.id),m=!!s,b=m?Ue:ce;return t.jsxs(de.Fragment,{children:[t.jsxs(b,{draggable:!r.locked&&!u,onDragStart:()=>{m&&s?O(s,c):u||A(c)},onDragOver:T=>{m&&s?N(T,s,c):u||M(T,c)},onDragEnd:H,$isDragging:f===c,$isLocked:r.locked,children:[u?t.jsx(ie,{onClick:()=>S(r.id),children:p?t.jsx(fe,{}):t.jsx(me,{})}):t.jsx(ie,{style:{visibility:"hidden"}}),t.jsx(Ze,{children:t.jsx(G,{checked:r.visible!==!1,onChange:()=>V(r.id)})}),t.jsx(Pe,{$isLocked:r.locked||u,children:t.jsx(B,{name:"DragIndicator",size:"small"})}),t.jsx(_e,{children:r.label}),!m&&t.jsx(Ke,{onClick:()=>x(r.id),children:t.jsx(B,{name:r.locked?"Lock":"LockOpen",size:"small"})})]}),u&&p&&r.subColumns.map((T,i)=>j(T,i,r.id))]},r.id)},D=()=>{o(g),a()},y=()=>{h(n),a()},W=r=>{r.target===r.currentTarget&&y()};return t.jsx(We,{$isOpen:e,onClick:W,children:t.jsxs(Ae,{className:I,children:[t.jsxs(He,{children:[t.jsx(Oe,{children:"Table Settings"}),t.jsx(L,{onClick:y,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(B,{name:"Close",size:"small"}),children:"Close"})]}),t.jsxs(Ne,{children:[k&&t.jsx("div",{style:{marginBottom:"16px"},children:t.jsx(ge,{type:"warning",style:"accentBorder",text:"Maximum columns reached",descriptionText:"You can only freeze any 3 columns at a time.",showLeadingIcon:!0,showTrailingIcon:!1,action:!1,link:!1})}),t.jsx(Fe,{children:g.filter(r=>r.id!=="checkbox").map((r,c)=>j(r,c))})]}),t.jsxs(Xe,{children:[t.jsx(L,{onClick:y,variant:"secondary",children:"Cancel"}),t.jsx(L,{variant:"primary",onClick:D,children:"Apply Changes"})]})]})})};Ye.__docgenInfo={description:"",methods:[],displayName:"TableSettings",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the settings modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when modal is closed"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:"Array of column configurations"},onColumnsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(columns: ColumnConfig[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},name:"columns"}],return:{name:"void"}}},description:"Callback when columns are updated"},lockWarning:{required:!1,tsType:{name:"boolean"},description:"Whether to show lock warning"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}}};const Je=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 0;
`,Qe=l.h2`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>{var a,n,o;return((o=(n=(a=e.colors)==null?void 0:a.semantic)==null?void 0:n.text)==null?void 0:o.primary)||"#111827"}};
  margin: 0;
`,Ge=l.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,et=l.select`
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
`,tt=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,at=l.input`
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
`,nt=l.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${({theme:e})=>{var a,n,o;return((o=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:o[500])||"#6b7280"}};
`,rt=({title:e,showDropdown:a=!1,dropdownOptions:n=[],dropdownValue:o,onDropdownChange:v,dropdownLabel:I="Select",showGlobalSearch:g=!1,globalSearchValue:h="",onGlobalSearchChange:f,globalSearchPlaceholder:$="Search...",showDownload:k=!0,onDownload:C,showFilter:E=!0,onFilter:R,showSettings:S=!0,onSettingsClick:V})=>t.jsxs(Je,{children:[e&&t.jsx(Qe,{children:e}),t.jsxs(Ge,{children:[g&&t.jsxs(tt,{children:[t.jsx(nt,{children:t.jsx(B,{name:"Search",size:"small"})}),t.jsx(at,{type:"text",value:h,onChange:x=>f==null?void 0:f(x.target.value),placeholder:$})]}),a&&n.length>0&&t.jsx(et,{value:o,onChange:x=>v==null?void 0:v(x.target.value),children:n.map(x=>t.jsx("option",{value:x.value,children:x.label},x.value))}),k&&t.jsx(L,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(B,{name:"Download",size:"medium"}),onClick:C,"aria-label":"Download",children:"Download"}),E&&t.jsx(L,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(B,{name:"FilterAlt",size:"medium"}),onClick:R,"aria-label":"Filter",children:"Filter"}),S&&t.jsx(L,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(B,{name:"Settings",size:"medium"}),onClick:V,"aria-label":"Settings",children:"Settings"})]})]});rt.__docgenInfo={description:"",methods:[],displayName:"TableToolbar",props:{title:{required:!1,tsType:{name:"string"},description:"Table title"},showDropdown:{required:!1,tsType:{name:"boolean"},description:"Show dropdown selector",defaultValue:{value:"false",computed:!1}},dropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"Dropdown options",defaultValue:{value:"[]",computed:!1}},dropdownValue:{required:!1,tsType:{name:"string"},description:"Selected dropdown value"},onDropdownChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Dropdown change handler"},dropdownLabel:{required:!1,tsType:{name:"string"},description:"Dropdown placeholder/label",defaultValue:{value:"'Select'",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search",defaultValue:{value:"false",computed:!1}},globalSearchValue:{required:!1,tsType:{name:"string"},description:"Global search value",defaultValue:{value:"''",computed:!1}},onGlobalSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Global search change handler"},globalSearchPlaceholder:{required:!1,tsType:{name:"string"},description:"Global search placeholder",defaultValue:{value:"'Search...'",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button",defaultValue:{value:"true",computed:!1}},onFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Filter handler"},showSettings:{required:!1,tsType:{name:"boolean"},description:"Show settings button",defaultValue:{value:"true",computed:!1}},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Settings click handler"}}};export{rt as T,$e as a,Be as b,Ye as c};
