import{j as t}from"./jsx-runtime-DztICxWZ.js";import{r as c,R as Ye}from"./index-Bv9Y92EF.js";import{g as i}from"./styled-components.browser.esm-CVW2bgxI.js";import{c as Q}from"./createSvgIcon-Ce6eLUkr.js";import{L as Le,b as Je,a as ke,e as Qe,I as re}from"./Icon-CnD2zmcO.js";import{C as Ie}from"./Checkbox-D2w4VPJI.js";import{B as Ze}from"./Badge-FGqUbZvd.js";import{C as Ge}from"./Chip--FEJIdFJ.js";import{B as K}from"./Button-DlNRQx8j.js";const be=Q(t.jsx("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"})),we=Q(t.jsx("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"})),et=Q(t.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),Ce=Q(t.jsx("path",{d:"M17 4h3c1.1 0 2 .9 2 2v2h-2V6h-3zM4 8V6h3V4H4c-1.1 0-2 .9-2 2v2zm16 8v2h-3v2h3c1.1 0 2-.9 2-2v-2zM7 18H4v-2H2v2c0 1.1.9 2 2 2h3zM18 8H6v8h12z"})),tt=Q(t.jsx("path",{d:"M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"})),nt=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: ${({$open:e})=>e?"block":"none"};
`,at=i.div`
  position: absolute;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  background: #ffffff;
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[200]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  padding: ${({theme:e})=>e.spacing[1]} 0;
  overflow: visible;
  z-index: 10000;
`,B=i.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[3]}`};
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: ${({theme:e})=>e.fontSizes[14]};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  text-align: left;
  transition: background-color 0.2s;

  &:hover {
    background: ${({theme:e})=>e.colors.palette.primary[50]};
    color: ${({theme:e})=>e.colors.palette.neutral[900]};
  }

  &:active {
    background: ${({theme:e})=>e.colors.palette.primary[100]};
    color: ${({theme:e})=>e.colors.palette.neutral[900]};
  }

  svg {
    font-size: 16px;
    color: ${({theme:e})=>e.colors.palette.neutral[600]};
  }
`,_=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex: 1;
`,ie=i.div`
  height: 1px;
  background: ${({theme:e})=>e.colors.palette.neutral[200]};
  margin: ${({theme:e})=>`${e.spacing[1]} 0`};
`,rt=i.div`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  background: #ffffff;
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  box-shadow: ${({theme:e})=>e.shadows.lg};
  min-width: 160px;
  z-index: 10001;
  overflow: hidden;
`,ye=i(B)`
  ${({$active:e,theme:n})=>e&&`
    background: ${n.colors.palette.primary[50]};
    color: ${n.colors.palette.primary[700]};
    font-weight: 600;
    
    &:hover {
      background: ${n.colors.palette.primary[100]};
    }
  `}
`,Ee=({anchorEl:e,open:n,onClose:a,onSortAscending:r,onSortDescending:s,onSortNone:u,onPinChange:m,onAutosizeColumn:g,onAutosizeAll:L,onResetColumn:P,currentPinState:x,currentSortDirection:T="none",isParentWithSubColumns:$=!1,isChildColumn:j=!1,enableUserPinning:S=!0})=>{const[q,y]=c.useState(!1),[I,h]=c.useState({top:0,left:0}),[O,X]=c.useState({top:0,left:0}),E=c.useRef(null),W=c.useRef(null),z=c.useRef(null);c.useEffect(()=>()=>{z.current&&clearTimeout(z.current)},[]);const D=()=>{z.current&&clearTimeout(z.current),y(!0)},k=()=>{z.current=window.setTimeout(()=>{y(!1)},300)};c.useEffect(()=>{if(n&&e){const d=e.getBoundingClientRect(),C=200,V=300;let l=d.bottom+4,p=d.left;p+C>window.innerWidth&&(p=window.innerWidth-C-8),l+V>window.innerHeight&&(l=d.top-V-4),h({top:l,left:p})}},[n,e]),c.useEffect(()=>{if(q&&W.current&&E.current){const d=E.current.getBoundingClientRect(),C=W.current.getBoundingClientRect(),V=160;let l=C.top,p=d.right+2;p+V>window.innerWidth&&(p=d.left-V-2);const w=120;l+w>window.innerHeight&&(l=window.innerHeight-w-8),X({top:l,left:p})}},[q]);const b=d=>{d(),a()},H=d=>{m(d),y(!1),a()};return n?t.jsx(nt,{$open:n,onClick:a,children:t.jsxs(at,{ref:E,$top:I.top,$left:I.left,onClick:d=>d.stopPropagation(),children:[!$&&t.jsxs(t.Fragment,{children:[t.jsx(B,{onClick:()=>b(r),children:t.jsxs(_,{children:[t.jsx(we,{sx:{fontSize:16}}),"Sort Ascending"]})}),t.jsx(B,{onClick:()=>b(s),children:t.jsxs(_,{children:[t.jsx(be,{sx:{fontSize:16}}),"Sort Descending"]})}),T!=="none"&&t.jsx(B,{onClick:()=>b(u),children:t.jsxs(_,{children:[t.jsx(et,{sx:{fontSize:16}}),"Clear Sort"]})}),t.jsx(ie,{})]}),!j&&S&&t.jsxs(t.Fragment,{children:[t.jsxs(B,{ref:W,$hasSubmenu:!0,onMouseEnter:D,onMouseLeave:k,children:[t.jsxs(_,{children:[t.jsx(Le,{sx:{fontSize:16}}),"Lock Column"]}),t.jsx(Je,{sx:{fontSize:16}})]}),t.jsx(ie,{})]}),q&&t.jsxs(rt,{$top:O.top,$left:O.left,onMouseEnter:D,onMouseLeave:k,children:[t.jsx(ye,{$active:x==="none",onClick:()=>H("none"),children:"No Lock"}),t.jsx(ye,{$active:x==="left",onClick:()=>H("left"),children:"Lock to Left"}),t.jsx(ye,{$active:x==="right",onClick:()=>H("right"),children:"Lock to Right"})]}),t.jsx(ie,{}),t.jsx(B,{onClick:()=>b(g),children:t.jsxs(_,{children:[t.jsx(Ce,{sx:{fontSize:16}}),"Autosize This Column"]})}),t.jsx(B,{onClick:()=>b(L),children:t.jsxs(_,{children:[t.jsx(Ce,{sx:{fontSize:16}}),"Autosize All Columns"]})}),t.jsx(ie,{}),t.jsx(B,{onClick:()=>b(P),children:t.jsxs(_,{children:[t.jsx(tt,{sx:{fontSize:16}}),"Reset Column"]})})]})}):null};Ee.__docgenInfo={description:"",methods:[],displayName:"ColumnMenu",props:{anchorEl:{required:!0,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSortAscending:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSortDescending:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSortNone:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPinChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(pinState: 'none' | 'left' | 'right') => void",signature:{arguments:[{type:{name:"union",raw:"'none' | 'left' | 'right'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},name:"pinState"}],return:{name:"void"}}},description:""},onAutosizeColumn:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAutosizeAll:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onResetColumn:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},currentPinState:{required:!0,tsType:{name:"union",raw:"'none' | 'left' | 'right'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},currentSortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},isParentWithSubColumns:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isChildColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},enableUserPinning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const it=i.th`
  background-color: ${({theme:e,$sortDirection:n})=>n&&n!=="none"?e.colors.palette.primary[100]:e.colors.palette.primary[50]};
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
  overflow: hidden;
  box-sizing: border-box;
  
  /* Width is set via inline style prop and controlled by <col> elements with table-layout: fixed */
  
  ${({$side:e})=>e==="left"?"border-top-left-radius: 8px;":e==="right"?"border-top-right-radius: 8px;":""}

  ${({$locked:e,$pinned:n,$leftOffset:a,$rightOffset:r,$showPinBorder:s,theme:u})=>{const m=n||(e?"left":"none");return m==="left"?`
        position: sticky;
        left: ${a||0}px;
        z-index: 10;
        background-color: ${u.colors.palette.primary[50]};
        ${s?`border-right: 1px solid ${u.colors.palette.neutral[300]};`:""}
        transition: background-color 0.2s ease, box-shadow 0.2s ease;
        
        &.is-stuck {
          box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
        }
      `:m==="right"?`
        position: sticky;
        right: ${r||0}px;
        z-index: 10;
        background-color: ${u.colors.palette.primary[50]};
        ${s?`border-left: 1px solid ${u.colors.palette.neutral[300]};`:""}
        transition: background-color 0.2s ease, box-shadow 0.2s ease;
        
        &.is-stuck-right {
          box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.05);
        }
      `:""}}

  &:hover {
    background-color: ${({theme:e,$sortable:n})=>n?e.colors.palette.primary[100]:e.colors.palette.primary[50]};
  }
`,Se=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  ${({$variant:e})=>e==="search"?"justify-content: space-between;":""}
`,ot=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex: 1;
  min-width: 0;
`,oe=i.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,ze=i.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-left: auto;
`,Ve=i.span`
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
`,lt=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Re=i.div`
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
`,st=i.div`
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
`,ut=i.div`
  display: flex;
  flex: 1;
  min-width: 0;
`,dt=i.input`
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
`,ct=i.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`,pt=({label:e,variant:n="default",side:a="middle",sortable:r=!1,sortDirection:s="none",onSort:u,onSortNone:m,showCheckbox:g=!1,checked:L=!1,indeterminate:P=!1,onCheckChange:x,locked:T=!1,pinned:$="none",onPinChange:j,onAutosizeColumn:S,onAutosizeAll:q,onResetColumn:y,showColumnMenu:I=!0,enableUserPinning:h=!0,leftOffset:O=0,rightOffset:X=0,isChildColumn:E=!1,hasSubColumns:W=!1,showPinBorder:z=!1,resizable:D=!1,onResize:k,initialWidth:b,searchValue:H="",searchPlaceholder:d="Search",onSearchChange:C,align:V="left",width:l,minWidth:p,maxWidth:w,className:le,subHeader:U,subHeaderSpan:f=1,isFirstInGroup:R=!1,isLastInGroup:se=!1,colSpan:ue,rowSpan:de,customIcon:Y,onCustomIconClick:Z,customIconTitle:ce})=>{const[G,ee]=c.useState(!1),[M,te]=c.useState(!1),[pe,ne]=c.useState(null),F=c.useRef(null),v=c.useRef(0),N=c.useRef(0),fe=c.useRef(0),We=o=>{o.stopPropagation(),r&&u&&n!=="search"&&u()},De=o=>{x&&x(o.target.checked)},Ne=o=>{o.stopPropagation(),ne(o.currentTarget),te(!0)},Be=()=>{te(!1),ne(null)},Pe=()=>{u&&u()},He=()=>{u&&u()},_e=()=>{m&&m()},Oe=o=>{j&&j(o)},Ue=()=>{S&&S()},Fe=()=>{q&&q()},Ke=()=>{y&&y()},Xe=o=>{C&&C(o.target.value)},$e=o=>{o.preventDefault(),o.stopPropagation(),b&&k&&k(b)},me=o=>{o.preventDefault(),o.stopPropagation(),ee(!0),v.current=o.clientX,l!==void 0?N.current=typeof l=="number"?l:parseInt(l,10):F.current&&(N.current=F.current.offsetWidth),fe.current=N.current};Ye.useEffect(()=>{if(!G)return;const o=ge=>{if(!F.current||!k)return;const he=ge.clientX-v.current,A=N.current+he,xe=p?typeof p=="number"?p:parseInt(p,10):80,ve=w?typeof w=="number"?w:parseInt(w,10):1/0,J=Math.max(xe,Math.min(ve,A));J===xe&&A<xe?document.body.style.cursor="w-resize":J===ve&&A>ve?document.body.style.cursor="e-resize":document.body.style.cursor="col-resize",J!==fe.current&&(fe.current=J,k(J))},ae=()=>{ee(!1),document.body.style.cursor=""};return document.addEventListener("mousemove",o),document.addEventListener("mouseup",ae),()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",ae)}},[G,k,p,w]);const je=(n==="resizeable"||n==="resizeable-locked")&&D,qe=n==="search";return t.jsxs(it,{ref:F,$align:V,$sortable:r&&!qe,$variant:n,$side:a,$resizable:D,$locked:T,$pinned:$,$leftOffset:O,$rightOffset:X,$showPinBorder:z,$sortDirection:s,$showCheckbox:g,$hasLabel:!!e,className:le,"data-locked":T?"true":void 0,colSpan:ue,rowSpan:de,style:l!==void 0?{width:typeof l=="number"?`${l}px`:l,minWidth:typeof l=="number"?`${l}px`:l,maxWidth:typeof l=="number"?`${l}px`:l}:void 0,children:[qe?t.jsxs(Se,{$variant:n,children:[t.jsx(ut,{children:t.jsx(dt,{type:"text",value:H,placeholder:d,onChange:Xe,onClick:o=>o.stopPropagation()})}),t.jsxs(ze,{children:[t.jsx(ct,{children:r&&t.jsx(Ve,{$direction:s,children:s==="asc"?t.jsx(we,{fontSize:"small"}):t.jsx(be,{fontSize:"small"})})}),je&&t.jsx(Re,{onMouseDown:me,children:t.jsx(ke,{sx:{fontSize:16}})})]})]}):t.jsxs(Se,{$variant:n,children:[t.jsxs(ot,{children:[g&&t.jsx(lt,{children:t.jsx(Ie,{checked:L,indeterminate:P,onChange:De,onClick:o=>o.stopPropagation()})}),r?t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"8px 4px",margin:"-8px -4px",flex:1,minWidth:0},onClick:We,children:[e&&(U?t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",position:"relative",minWidth:0},children:[R&&t.jsx("div",{style:{position:"absolute",top:"-12px",left:R?"0":void 0,right:se?"0":void 0,width:R?`calc(${f*100}% + ${(f-1)*1}px)`:void 0,fontSize:"12px",fontWeight:500,textAlign:"center",paddingBottom:"4px",borderBottom:"1px solid",borderColor:"inherit"},children:U}),t.jsx(oe,{style:{marginTop:R?"16px":"0"},children:e})]}):t.jsx(oe,{children:e})),t.jsx(Ve,{$direction:s,children:s==="asc"?t.jsx(we,{fontSize:"small"}):t.jsx(be,{fontSize:"small"})})]}):t.jsx(t.Fragment,{children:e&&(U?t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",position:"relative",minWidth:0},children:[R&&t.jsx("div",{style:{position:"absolute",top:"-12px",left:R?"0":void 0,right:se?"0":void 0,width:R?`calc(${f*100}% + ${(f-1)*1}px)`:void 0,fontSize:"12px",fontWeight:500,textAlign:"center",paddingBottom:"4px",borderBottom:"1px solid",borderColor:"inherit"},children:U}),t.jsx(oe,{style:{marginTop:R?"16px":"0"},children:e})]}):t.jsx(oe,{children:e}))}),!E&&!g&&(()=>{const o=$||(T?"left":"none");if(o==="none")return null;const ae=Le,ge=o==="left"?"Locked to left (click to unlock)":"Locked to right (click to unlock)",he=A=>{A.stopPropagation(),j&&j("none")};return t.jsx("button",{onClick:he,style:{background:"none",border:"none",padding:0,margin:"0 0 0 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",color:"#A5B4FC",transition:"color 0.2s"},onMouseEnter:A=>A.currentTarget.style.color="#818CF8",onMouseLeave:A=>A.currentTarget.style.color="#A5B4FC",title:ge,children:t.jsx(ae,{sx:{fontSize:16}})})})()]}),t.jsxs(ze,{children:[Y&&t.jsx("button",{onClick:o=>{o.stopPropagation(),Z&&Z(o)},style:{background:"none",border:"none",padding:0,margin:"0 8px 0 0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",color:"#94A3B8",transition:"color 0.2s"},onMouseEnter:o=>o.currentTarget.style.color="#64748B",onMouseLeave:o=>o.currentTarget.style.color="#94A3B8",title:ce||"Custom action",children:Y}),!g&&I&&t.jsx("button",{onClick:Ne,style:{background:"none",border:"none",padding:0,margin:"0 8px 0 0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",color:"#94A3B8",transition:"color 0.2s"},onMouseEnter:o=>o.currentTarget.style.color="#64748B",onMouseLeave:o=>o.currentTarget.style.color="#94A3B8",title:"Column options",children:t.jsx(Qe,{sx:{fontSize:16}})}),je&&t.jsx(Re,{onMouseDown:me,onDoubleClick:$e,title:"Double-click to reset width",children:t.jsx(ke,{sx:{fontSize:16}})})]})]}),D&&t.jsx(st,{onMouseDown:me,onDoubleClick:$e,title:"Double-click to reset width"}),t.jsx(Ee,{anchorEl:pe,open:M,onClose:Be,onSortAscending:Pe,onSortDescending:He,onSortNone:_e,onPinChange:Oe,onAutosizeColumn:Ue,onAutosizeAll:Fe,onResetColumn:Ke,currentPinState:$||(T?"left":"none"),currentSortDirection:s,isParentWithSubColumns:W,isChildColumn:E,enableUserPinning:h})]})};pt.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'locked' | 'resizeable' | 'resizeable-locked' | 'search'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'locked'"},{name:"literal",value:"'resizeable'"},{name:"literal",value:"'resizeable-locked'"},{name:"literal",value:"'search'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'left' | 'middle' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'middle'",computed:!1}},sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSortNone:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPinChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(pinState: 'none' | 'left' | 'right') => void",signature:{arguments:[{type:{name:"union",raw:"'none' | 'left' | 'right'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},name:"pinState"}],return:{name:"void"}}},description:""},onAutosizeColumn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAutosizeAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onResetColumn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showColumnMenu:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},enableUserPinning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},rightOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},pinned:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'none'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},isChildColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasSubColumns:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showPinBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},initialWidth:{required:!1,tsType:{name:"number"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},minWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},subHeader:{required:!1,tsType:{name:"string"},description:""},subHeaderSpan:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},isFirstInGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLastInGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},colSpan:{required:!1,tsType:{name:"number"},description:""},rowSpan:{required:!1,tsType:{name:"number"},description:""},customIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onCustomIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},customIconTitle:{required:!1,tsType:{name:"string"},description:""}}};const ft=i.td`
  background-color: ${({theme:e,$selected:n,$locked:a,$pinned:r})=>a||r==="left"||r==="right"||n?e.colors.palette.primary[50]:e.colors.palette.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  border-left: ${({theme:e,$selected:n,$isFirst:a})=>n&&a?`2px solid ${e.colors.palette.primary[500]}`:"none"};
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[7]}`};
  height: 72px;
  text-align: ${({$align:e})=>e||"left"};
  vertical-align: middle;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
  overflow: hidden;
  
  ${({$locked:e,$pinned:n,$leftOffset:a,$rightOffset:r,$showPinBorder:s,theme:u,$selected:m})=>{const g=n||(e?"left":"none");return g==="left"?`
        position: sticky;
        left: ${a||0}px;
        z-index: 9;
        ${s?`border-right: 1px solid ${u.colors.palette.neutral[300]};`:""}
        
        &.is-stuck {
          box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
        }
      `:g==="right"?`
        position: sticky;
        right: ${r||0}px;
        z-index: 9;
        ${s?`border-left: 1px solid ${u.colors.palette.neutral[300]};`:""}
        
        &.is-stuck-right {
          box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.05);
        }
      `:""}}
`,mt=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[7]};
  flex-wrap: nowrap;
  min-width: 0; /* Allow flex children to shrink below content size */
  overflow: hidden; /* Hide overflow content */
`,gt=i.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  user-select: none;
`,ht=i.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,xt=i.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,vt=i.div`
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
`,yt=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0; /* Allow shrinking */
  overflow: hidden; /* Hide overflow */
`,bt=i.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,wt=i.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[12]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Te=i.div`
  font-family: ${({theme:e})=>e.fonts.monospace};
  font-size: ${({theme:e})=>e.typography.code["regular-14"].fontSize};
  font-weight: ${({theme:e})=>e.typography.code["regular-14"].fontWeight};
  line-height: ${({theme:e})=>e.typography.code["regular-14"].lineHeight};
  letter-spacing: ${({theme:e})=>e.typography.code["regular-14"].letterSpacing};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0; /* Allow shrinking */
`,Tt=i(Te)`
  text-align: right;
`,$t=i.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0; /* Allow shrinking */
`,Me=i.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0; /* Allow shrinking */
`,jt=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-left: auto;
  flex-shrink: 0;
`,qt=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"currentColor"})}),kt=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fill:"currentColor"})}),Ct=({showCheckbox:e=!1,checked:n=!1,onCheckChange:a,showAvatar:r=!1,avatarSrc:s,avatarAlt:u="Avatar",showUserInfo:m=!1,userName:g,userRole:L,showNumber:P=!1,number:x,showAmount:T=!1,amount:$,showDate:j=!1,date:S,showText:q=!1,text:y,showBadge:I=!1,badgeLabel:h,badgeType:O="info",badgeStyle:X="default",showChip:E=!1,chipLabel:W,chipType:z="default",chipVariant:D="filled",onChipRemove:k,showButton:b=!1,buttonLabel:H="Button",onButtonClick:d,showEditAction:C=!1,onEdit:V,showDeleteAction:l=!1,onDelete:p,onClick:w,align:le="left",className:U,width:f,minWidth:R,maxWidth:se,selected:ue=!1,isFirstColumn:de=!1,locked:Y=!1,pinned:Z="none",leftOffset:ce=0,rightOffset:G=0,showPinBorder:ee=!1,children:M})=>{const te=v=>{v.stopPropagation(),a&&a(!n,v.shiftKey)},pe=v=>v?v.split(" ").map(N=>N[0]).join("").toUpperCase().slice(0,2):"?",ne=v=>{if(typeof v=="number")return!0;if(typeof v=="string"){const N=v.replace(/[$,\s]/g,"");return/^\d+\.?\d*$/.test(N)}return!1},F=()=>M?typeof M=="string"||typeof M=="number"?ne(M)?t.jsx(Te,{children:M}):t.jsx(Me,{children:M}):M:null;return t.jsx(ft,{$align:le,$selected:ue,$isFirst:de,$locked:Y,$pinned:Z,$leftOffset:ce,$rightOffset:G,$showPinBorder:ee,className:U,"data-locked":Y?"true":void 0,onClick:w,style:{cursor:w?"pointer":"default",...f!==void 0&&{width:typeof f=="number"?`${f}px`:f,minWidth:typeof f=="number"?`${f}px`:f,maxWidth:typeof f=="number"?`${f}px`:f}},children:t.jsxs(mt,{children:[e&&t.jsx(gt,{onClick:te,style:{cursor:"pointer"},children:t.jsx(Ie,{checked:n,onChange:()=>{}})}),r&&t.jsx(ht,{children:s?t.jsx(xt,{src:s,alt:u}):t.jsx(vt,{children:pe(g)})}),m&&t.jsxs(yt,{children:[g&&t.jsx(bt,{children:g}),L&&t.jsx(wt,{children:L})]}),P&&x&&t.jsx(Te,{children:x}),T&&$&&t.jsx(Tt,{children:$}),j&&S&&t.jsx($t,{children:S}),q&&y&&t.jsx(Me,{children:y}),I&&h&&t.jsx(Ze,{label:h,type:O,styleVariant:X}),E&&W&&t.jsx(Ge,{label:W,type:z,variant:D,onRemove:k}),b&&t.jsx(K,{variant:"secondary",size:"small",onClick:d,children:H}),(C||l)&&t.jsxs(jt,{children:[C&&t.jsx(K,{onClick:V,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(qt,{}),children:"Edit"}),l&&t.jsx(K,{onClick:p,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(kt,{}),children:"Delete"})]}),F()]})})};Ct.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, shiftKey?: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"boolean"},name:"shiftKey"}],return:{name:"void"}}},description:""},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},showUserInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:""},userRole:{required:!1,tsType:{name:"string"},description:""},showNumber:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},number:{required:!1,tsType:{name:"string"},description:""},showAmount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},amount:{required:!1,tsType:{name:"string"},description:""},showDate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},date:{required:!1,tsType:{name:"string"},description:""},showText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},showBadge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeLabel:{required:!1,tsType:{name:"string"},description:""},badgeType:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},badgeStyle:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showChip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipLabel:{required:!1,tsType:{name:"string"},description:""},chipType:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},chipVariant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},onChipRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showEditAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showDeleteAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLTableCellElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableCellElement>",elements:[{name:"HTMLTableCellElement"}]},name:"event"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},minWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFirstColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},rightOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},pinned:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'none'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},showPinBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ae=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 0;
`,St=i.h2`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.semantic)==null?void 0:a.text)==null?void 0:r.primary)||"#111827"}};
  margin: 0;
`,zt=i.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,Vt=i.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.palette)==null?void 0:a.neutral)==null?void 0:r[400])||"#b1b1b1"}};
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Elevance Sans', sans-serif;
  color: ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.semantic)==null?void 0:a.text)==null?void 0:r.primary)||"#111827"}};
  background: #ffffff;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.palette)==null?void 0:a.primary)==null?void 0:r[500])||"#3b82f6"}};
  }
`,Rt=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,Mt=i.input`
  padding: 8px 12px 8px 36px;
  border: 1px solid ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.palette)==null?void 0:a.neutral)==null?void 0:r[300])||"#d1d5db"}};
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Elevance Sans', sans-serif;
  color: ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.semantic)==null?void 0:a.text)==null?void 0:r.primary)||"#111827"}};
  background: #ffffff;
  width: 300px;
  
  &::placeholder {
    color: ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.palette)==null?void 0:a.neutral)==null?void 0:r[500])||"#6b7280"}};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.palette)==null?void 0:a.primary)==null?void 0:r[500])||"#3b82f6"}};
  }
`,At=i.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.palette)==null?void 0:a.neutral)==null?void 0:r[500])||"#6b7280"}};
`,Lt=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>{var n;return((n=e.spacing)==null?void 0:n[5])||"12px"}};
  ${({$align:e})=>e==="right"?"margin-left: auto;":e==="center"?"margin: 0 auto;":""}
`,It=i.h2`
  font-family: ${({theme:e})=>{var n;return((n=e.fonts)==null?void 0:n.primary)||"Elevance Sans, sans-serif"}};
  font-size: ${({theme:e})=>{var n;return((n=e.fontSizes)==null?void 0:n[20])||"20px"}};
  font-weight: ${({theme:e})=>{var n;return((n=e.fontWeights)==null?void 0:n.semibold)||600}};
  color: ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.semantic)==null?void 0:a.text)==null?void 0:r.primary)||"#111827"}};
  margin: 0;
`,Et=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>{var n;return((n=e.spacing)==null?void 0:n[5])||"12px"}};
`,Wt=({align:e="left",children:n,className:a})=>t.jsx(Lt,{$align:e,className:a,children:n}),Dt=({children:e,className:n})=>t.jsx(It,{className:n,children:e}),Nt=({children:e,className:n})=>t.jsx(Et,{className:n,children:e}),Bt=({children:e,className:n,title:a,showDropdown:r=!1,dropdownOptions:s=[],dropdownValue:u,onDropdownChange:m,dropdownLabel:g="Select",showGlobalSearch:L=!1,globalSearchValue:P="",onGlobalSearchChange:x,globalSearchPlaceholder:T="Search...",showDownload:$=!0,onDownload:j,showFilter:S=!0,onFilter:q,showSettings:y=!0,onSettingsClick:I})=>e?t.jsx(Ae,{className:n,children:e}):t.jsxs(Ae,{className:n,children:[a&&t.jsx(St,{children:a}),t.jsxs(zt,{children:[L&&t.jsxs(Rt,{children:[t.jsx(At,{children:t.jsx(re,{name:"Search",size:"small"})}),t.jsx(Mt,{type:"text",value:P,onChange:h=>x==null?void 0:x(h.target.value),placeholder:T})]}),r&&s.length>0&&t.jsx(Vt,{value:u,onChange:h=>m==null?void 0:m(h.target.value),children:s.map(h=>t.jsx("option",{value:h.value,children:h.label},h.value))}),$&&t.jsx(K,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(re,{name:"Download",size:"medium"}),onClick:j,"aria-label":"Download",children:"Download"}),S&&t.jsx(K,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(re,{name:"FilterAlt",size:"medium"}),onClick:q,"aria-label":"Filter",children:"Filter"}),y&&t.jsx(K,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(re,{name:"Settings",size:"medium"}),onClick:I,"aria-label":"Settings",children:"Settings"})]})]});Wt.__docgenInfo={description:"",methods:[],displayName:"TableToolbarSection",props:{align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};Dt.__docgenInfo={description:"",methods:[],displayName:"TableToolbarTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};Nt.__docgenInfo={description:"",methods:[],displayName:"TableToolbarActions",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};Bt.__docgenInfo={description:"",methods:[],displayName:"TableToolbar",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom children - when provided, renders custom content instead of default toolbar"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},title:{required:!1,tsType:{name:"string"},description:"Table title"},showDropdown:{required:!1,tsType:{name:"boolean"},description:"Show dropdown selector",defaultValue:{value:"false",computed:!1}},dropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"Dropdown options",defaultValue:{value:"[]",computed:!1}},dropdownValue:{required:!1,tsType:{name:"string"},description:"Selected dropdown value"},onDropdownChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Dropdown change handler"},dropdownLabel:{required:!1,tsType:{name:"string"},description:"Dropdown placeholder/label",defaultValue:{value:"'Select'",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search",defaultValue:{value:"false",computed:!1}},globalSearchValue:{required:!1,tsType:{name:"string"},description:"Global search value",defaultValue:{value:"''",computed:!1}},onGlobalSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Global search change handler"},globalSearchPlaceholder:{required:!1,tsType:{name:"string"},description:"Global search placeholder",defaultValue:{value:"'Search...'",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button",defaultValue:{value:"true",computed:!1}},onFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Filter handler"},showSettings:{required:!1,tsType:{name:"boolean"},description:"Show settings button",defaultValue:{value:"true",computed:!1}},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Settings click handler"}}};export{Bt as T,pt as a,Ct as b,Wt as c,Dt as d,Nt as e};
