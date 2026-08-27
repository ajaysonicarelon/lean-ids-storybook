import{j as t}from"./jsx-runtime-DztICxWZ.js";import{r as c,R as Fe}from"./index-Bv9Y92EF.js";import{g as i}from"./styled-components.browser.esm-CVW2bgxI.js";import{c as G}from"./createSvgIcon-Ce6eLUkr.js";import{L as Ae,b as Ke,a as qe,d as Xe,I as re}from"./Icon-DSqvK6Kv.js";import{C as Le}from"./Checkbox-D2w4VPJI.js";import{B as Ye}from"./Badge-FGqUbZvd.js";import{C as Je}from"./Chip--FEJIdFJ.js";import{B as K}from"./Button-DlNRQx8j.js";const ye=G(t.jsx("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"})),be=G(t.jsx("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"})),Qe=G(t.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),ke=G(t.jsx("path",{d:"M17 4h3c1.1 0 2 .9 2 2v2h-2V6h-3zM4 8V6h3V4H4c-1.1 0-2 .9-2 2v2zm16 8v2h-3v2h3c1.1 0 2-.9 2-2v-2zM7 18H4v-2H2v2c0 1.1.9 2 2 2h3zM18 8H6v8h12z"})),Ze=G(t.jsx("path",{d:"M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"})),Ge=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: ${({$open:e})=>e?"block":"none"};
`,et=i.div`
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
`,N=i.button`
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
`,H=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex: 1;
`,ie=i.div`
  height: 1px;
  background: ${({theme:e})=>e.colors.palette.neutral[200]};
  margin: ${({theme:e})=>`${e.spacing[1]} 0`};
`,tt=i.div`
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
`,ve=i(N)`
  ${({$active:e,theme:n})=>e&&`
    background: ${n.colors.palette.primary[50]};
    color: ${n.colors.palette.primary[700]};
    font-weight: 600;
    
    &:hover {
      background: ${n.colors.palette.primary[100]};
    }
  `}
`,Ie=({anchorEl:e,open:n,onClose:a,onSortAscending:r,onSortDescending:s,onSortNone:u,onPinChange:m,onAutosizeColumn:g,onAutosizeAll:L,onResetColumn:P,currentPinState:x,currentSortDirection:T="none",isParentWithSubColumns:$=!1,isChildColumn:j=!1,enableUserPinning:z=!0})=>{const[q,v]=c.useState(!1),[I,h]=c.useState({top:0,left:0}),[_,X]=c.useState({top:0,left:0}),W=c.useRef(null),E=c.useRef(null),V=c.useRef(null);c.useEffect(()=>()=>{V.current&&clearTimeout(V.current)},[]);const D=()=>{V.current&&clearTimeout(V.current),v(!0)},k=()=>{V.current=window.setTimeout(()=>{v(!1)},300)};c.useEffect(()=>{if(n&&e){const d=e.getBoundingClientRect(),C=200,R=300;let l=d.bottom+4,p=d.left;p+C>window.innerWidth&&(p=window.innerWidth-C-8),l+R>window.innerHeight&&(l=d.top-R-4),h({top:l,left:p})}},[n,e]),c.useEffect(()=>{if(q&&E.current&&W.current){const d=W.current.getBoundingClientRect(),C=E.current.getBoundingClientRect(),R=160;let l=C.top,p=d.right+2;p+R>window.innerWidth&&(p=d.left-R-2);const b=120;l+b>window.innerHeight&&(l=window.innerHeight-b-8),X({top:l,left:p})}},[q]);const y=d=>{d(),a()},B=d=>{m(d),v(!1),a()};return n?t.jsx(Ge,{$open:n,onClick:a,children:t.jsxs(et,{ref:W,$top:I.top,$left:I.left,onClick:d=>d.stopPropagation(),children:[!$&&t.jsxs(t.Fragment,{children:[t.jsx(N,{onClick:()=>y(r),children:t.jsxs(H,{children:[t.jsx(be,{sx:{fontSize:16}}),"Sort Ascending"]})}),t.jsx(N,{onClick:()=>y(s),children:t.jsxs(H,{children:[t.jsx(ye,{sx:{fontSize:16}}),"Sort Descending"]})}),T!=="none"&&t.jsx(N,{onClick:()=>y(u),children:t.jsxs(H,{children:[t.jsx(Qe,{sx:{fontSize:16}}),"Clear Sort"]})}),t.jsx(ie,{})]}),!j&&z&&t.jsxs(t.Fragment,{children:[t.jsxs(N,{ref:E,$hasSubmenu:!0,onMouseEnter:D,onMouseLeave:k,children:[t.jsxs(H,{children:[t.jsx(Ae,{sx:{fontSize:16}}),"Lock Column"]}),t.jsx(Ke,{sx:{fontSize:16}})]}),t.jsx(ie,{})]}),q&&t.jsxs(tt,{$top:_.top,$left:_.left,onMouseEnter:D,onMouseLeave:k,children:[t.jsx(ve,{$active:x==="none",onClick:()=>B("none"),children:"No Lock"}),t.jsx(ve,{$active:x==="left",onClick:()=>B("left"),children:"Lock to Left"}),t.jsx(ve,{$active:x==="right",onClick:()=>B("right"),children:"Lock to Right"})]}),t.jsx(ie,{}),t.jsx(N,{onClick:()=>y(g),children:t.jsxs(H,{children:[t.jsx(ke,{sx:{fontSize:16}}),"Autosize This Column"]})}),t.jsx(N,{onClick:()=>y(L),children:t.jsxs(H,{children:[t.jsx(ke,{sx:{fontSize:16}}),"Autosize All Columns"]})}),t.jsx(ie,{}),t.jsx(N,{onClick:()=>y(P),children:t.jsxs(H,{children:[t.jsx(Ze,{sx:{fontSize:16}}),"Reset Column"]})})]})}):null};Ie.__docgenInfo={description:"",methods:[],displayName:"ColumnMenu",props:{anchorEl:{required:!0,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSortAscending:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSortDescending:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSortNone:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPinChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(pinState: 'none' | 'left' | 'right') => void",signature:{arguments:[{type:{name:"union",raw:"'none' | 'left' | 'right'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},name:"pinState"}],return:{name:"void"}}},description:""},onAutosizeColumn:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAutosizeAll:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onResetColumn:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},currentPinState:{required:!0,tsType:{name:"union",raw:"'none' | 'left' | 'right'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""},currentSortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},isParentWithSubColumns:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isChildColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},enableUserPinning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const nt=i.th`
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
`,Ce=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  ${({$variant:e})=>e==="search"?"justify-content: space-between;":""}
`,at=i.div`
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
`,Se=i.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-left: auto;
`,ze=i.span`
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
`,rt=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ve=i.div`
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
`,it=i.div`
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
`,ot=i.div`
  display: flex;
  flex: 1;
  min-width: 0;
`,lt=i.input`
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
`,st=i.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`,ut=({label:e,variant:n="default",side:a="middle",sortable:r=!1,sortDirection:s="none",onSort:u,onSortNone:m,showCheckbox:g=!1,checked:L=!1,indeterminate:P=!1,onCheckChange:x,locked:T=!1,pinned:$="none",onPinChange:j,onAutosizeColumn:z,onAutosizeAll:q,onResetColumn:v,showColumnMenu:I=!0,enableUserPinning:h=!0,leftOffset:_=0,rightOffset:X=0,isChildColumn:W=!1,hasSubColumns:E=!1,showPinBorder:V=!1,resizable:D=!1,onResize:k,initialWidth:y,searchValue:B="",searchPlaceholder:d="Search",onSearchChange:C,align:R="left",width:l,minWidth:p,maxWidth:b,className:le,subHeader:O,subHeaderSpan:f=1,isFirstInGroup:M=!1,isLastInGroup:se=!1,colSpan:ue,rowSpan:de})=>{const[Y,ee]=c.useState(!1),[ce,te]=c.useState(!1),[pe,S]=c.useState(null),U=c.useRef(null),ne=c.useRef(0),F=c.useRef(0),J=c.useRef(0),w=o=>{o.stopPropagation(),r&&u&&n!=="search"&&u()},Q=o=>{x&&x(o.target.checked)},We=o=>{o.stopPropagation(),S(o.currentTarget),te(!0)},Ee=()=>{te(!1),S(null)},De=()=>{u&&u()},Ne=()=>{u&&u()},Pe=()=>{m&&m()},Be=o=>{j&&j(o)},He=()=>{z&&z()},_e=()=>{q&&q()},Oe=()=>{v&&v()},Ue=o=>{C&&C(o.target.value)},Te=o=>{o.preventDefault(),o.stopPropagation(),y&&k&&k(y)},fe=o=>{o.preventDefault(),o.stopPropagation(),ee(!0),ne.current=o.clientX,l!==void 0?F.current=typeof l=="number"?l:parseInt(l,10):U.current&&(F.current=U.current.offsetWidth),J.current=F.current};Fe.useEffect(()=>{if(!Y)return;const o=me=>{if(!U.current||!k)return;const ge=me.clientX-ne.current,A=F.current+ge,he=p?typeof p=="number"?p:parseInt(p,10):80,xe=b?typeof b=="number"?b:parseInt(b,10):1/0,Z=Math.max(he,Math.min(xe,A));Z===he&&A<he?document.body.style.cursor="w-resize":Z===xe&&A>xe?document.body.style.cursor="e-resize":document.body.style.cursor="col-resize",Z!==J.current&&(J.current=Z,k(Z))},ae=()=>{ee(!1),document.body.style.cursor=""};return document.addEventListener("mousemove",o),document.addEventListener("mouseup",ae),()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",ae)}},[Y,k,p,b]);const $e=(n==="resizeable"||n==="resizeable-locked")&&D,je=n==="search";return t.jsxs(nt,{ref:U,$align:R,$sortable:r&&!je,$variant:n,$side:a,$resizable:D,$locked:T,$pinned:$,$leftOffset:_,$rightOffset:X,$showPinBorder:V,$sortDirection:s,$showCheckbox:g,$hasLabel:!!e,className:le,"data-locked":T?"true":void 0,colSpan:ue,rowSpan:de,style:l!==void 0?{width:typeof l=="number"?`${l}px`:l,minWidth:typeof l=="number"?`${l}px`:l,maxWidth:typeof l=="number"?`${l}px`:l}:void 0,children:[je?t.jsxs(Ce,{$variant:n,children:[t.jsx(ot,{children:t.jsx(lt,{type:"text",value:B,placeholder:d,onChange:Ue,onClick:o=>o.stopPropagation()})}),t.jsxs(Se,{children:[t.jsx(st,{children:r&&t.jsx(ze,{$direction:s,children:s==="asc"?t.jsx(be,{fontSize:"small"}):t.jsx(ye,{fontSize:"small"})})}),$e&&t.jsx(Ve,{onMouseDown:fe,children:t.jsx(qe,{sx:{fontSize:16}})})]})]}):t.jsxs(Ce,{$variant:n,children:[t.jsxs(at,{children:[g&&t.jsx(rt,{children:t.jsx(Le,{checked:L,indeterminate:P,onChange:Q,onClick:o=>o.stopPropagation()})}),r?t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"8px 4px",margin:"-8px -4px",flex:1,minWidth:0},onClick:w,children:[e&&(O?t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",position:"relative",minWidth:0},children:[M&&t.jsx("div",{style:{position:"absolute",top:"-12px",left:M?"0":void 0,right:se?"0":void 0,width:M?`calc(${f*100}% + ${(f-1)*1}px)`:void 0,fontSize:"12px",fontWeight:500,textAlign:"center",paddingBottom:"4px",borderBottom:"1px solid",borderColor:"inherit"},children:O}),t.jsx(oe,{style:{marginTop:M?"16px":"0"},children:e})]}):t.jsx(oe,{children:e})),t.jsx(ze,{$direction:s,children:s==="asc"?t.jsx(be,{fontSize:"small"}):t.jsx(ye,{fontSize:"small"})})]}):t.jsx(t.Fragment,{children:e&&(O?t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",position:"relative",minWidth:0},children:[M&&t.jsx("div",{style:{position:"absolute",top:"-12px",left:M?"0":void 0,right:se?"0":void 0,width:M?`calc(${f*100}% + ${(f-1)*1}px)`:void 0,fontSize:"12px",fontWeight:500,textAlign:"center",paddingBottom:"4px",borderBottom:"1px solid",borderColor:"inherit"},children:O}),t.jsx(oe,{style:{marginTop:M?"16px":"0"},children:e})]}):t.jsx(oe,{children:e}))}),!W&&!g&&(()=>{const o=$||(T?"left":"none");if(o==="none")return null;const ae=Ae,me=o==="left"?"Locked to left (click to unlock)":"Locked to right (click to unlock)",ge=A=>{A.stopPropagation(),j&&j("none")};return t.jsx("button",{onClick:ge,style:{background:"none",border:"none",padding:0,margin:"0 0 0 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",color:"#A5B4FC",transition:"color 0.2s"},onMouseEnter:A=>A.currentTarget.style.color="#818CF8",onMouseLeave:A=>A.currentTarget.style.color="#A5B4FC",title:me,children:t.jsx(ae,{sx:{fontSize:16}})})})()]}),t.jsxs(Se,{children:[!g&&I&&t.jsx("button",{onClick:We,style:{background:"none",border:"none",padding:0,margin:"0 8px 0 0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",color:"#94A3B8",transition:"color 0.2s"},onMouseEnter:o=>o.currentTarget.style.color="#64748B",onMouseLeave:o=>o.currentTarget.style.color="#94A3B8",title:"Column options",children:t.jsx(Xe,{sx:{fontSize:16}})}),$e&&t.jsx(Ve,{onMouseDown:fe,onDoubleClick:Te,title:"Double-click to reset width",children:t.jsx(qe,{sx:{fontSize:16}})})]})]}),D&&t.jsx(it,{onMouseDown:fe,onDoubleClick:Te,title:"Double-click to reset width"}),t.jsx(Ie,{anchorEl:pe,open:ce,onClose:Ee,onSortAscending:De,onSortDescending:Ne,onSortNone:Pe,onPinChange:Be,onAutosizeColumn:He,onAutosizeAll:_e,onResetColumn:Oe,currentPinState:$||(T?"left":"none"),currentSortDirection:s,isParentWithSubColumns:E,isChildColumn:W,enableUserPinning:h})]})};ut.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'locked' | 'resizeable' | 'resizeable-locked' | 'search'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'locked'"},{name:"literal",value:"'resizeable'"},{name:"literal",value:"'resizeable-locked'"},{name:"literal",value:"'search'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'left' | 'middle' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'middle'",computed:!1}},sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSortNone:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPinChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(pinState: 'none' | 'left' | 'right') => void",signature:{arguments:[{type:{name:"union",raw:"'none' | 'left' | 'right'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},name:"pinState"}],return:{name:"void"}}},description:""},onAutosizeColumn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAutosizeAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onResetColumn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showColumnMenu:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},enableUserPinning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},rightOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},pinned:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'none'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},isChildColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasSubColumns:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showPinBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},initialWidth:{required:!1,tsType:{name:"number"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},minWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},subHeader:{required:!1,tsType:{name:"string"},description:""},subHeaderSpan:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},isFirstInGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLastInGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},colSpan:{required:!1,tsType:{name:"number"},description:""},rowSpan:{required:!1,tsType:{name:"number"},description:""}}};const dt=i.td`
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
`,ct=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[7]};
  flex-wrap: nowrap;
  min-width: 0; /* Allow flex children to shrink below content size */
  overflow: hidden; /* Hide overflow content */
`,pt=i.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  user-select: none;
`,ft=i.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,mt=i.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,gt=i.div`
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
`,ht=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0; /* Allow shrinking */
  overflow: hidden; /* Hide overflow */
`,xt=i.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,vt=i.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[12]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,we=i.div`
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
`,yt=i(we)`
  text-align: right;
`,bt=i.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0; /* Allow shrinking */
`,Re=i.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0; /* Allow shrinking */
`,wt=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-left: auto;
  flex-shrink: 0;
`,Tt=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"currentColor"})}),$t=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fill:"currentColor"})}),jt=({showCheckbox:e=!1,checked:n=!1,onCheckChange:a,showAvatar:r=!1,avatarSrc:s,avatarAlt:u="Avatar",showUserInfo:m=!1,userName:g,userRole:L,showNumber:P=!1,number:x,showAmount:T=!1,amount:$,showDate:j=!1,date:z,showText:q=!1,text:v,showBadge:I=!1,badgeLabel:h,badgeType:_="info",badgeStyle:X="default",showChip:W=!1,chipLabel:E,chipType:V="default",chipVariant:D="filled",onChipRemove:k,showButton:y=!1,buttonLabel:B="Button",onButtonClick:d,showEditAction:C=!1,onEdit:R,showDeleteAction:l=!1,onDelete:p,onClick:b,align:le="left",className:O,width:f,minWidth:M,maxWidth:se,selected:ue=!1,isFirstColumn:de=!1,locked:Y=!1,pinned:ee="none",leftOffset:ce=0,rightOffset:te=0,showPinBorder:pe=!1,children:S})=>{const U=w=>{w.stopPropagation(),a&&a(!n,w.shiftKey)},ne=w=>w?w.split(" ").map(Q=>Q[0]).join("").toUpperCase().slice(0,2):"?",F=w=>{if(typeof w=="number")return!0;if(typeof w=="string"){const Q=w.replace(/[$,\s]/g,"");return/^\d+\.?\d*$/.test(Q)}return!1},J=()=>S?typeof S=="string"||typeof S=="number"?F(S)?t.jsx(we,{children:S}):t.jsx(Re,{children:S}):S:null;return t.jsx(dt,{$align:le,$selected:ue,$isFirst:de,$locked:Y,$pinned:ee,$leftOffset:ce,$rightOffset:te,$showPinBorder:pe,className:O,"data-locked":Y?"true":void 0,onClick:b,style:{cursor:b?"pointer":"default",...f!==void 0&&{width:typeof f=="number"?`${f}px`:f,minWidth:typeof f=="number"?`${f}px`:f,maxWidth:typeof f=="number"?`${f}px`:f}},children:t.jsxs(ct,{children:[e&&t.jsx(pt,{onClick:U,style:{cursor:"pointer"},children:t.jsx(Le,{checked:n,onChange:()=>{}})}),r&&t.jsx(ft,{children:s?t.jsx(mt,{src:s,alt:u}):t.jsx(gt,{children:ne(g)})}),m&&t.jsxs(ht,{children:[g&&t.jsx(xt,{children:g}),L&&t.jsx(vt,{children:L})]}),P&&x&&t.jsx(we,{children:x}),T&&$&&t.jsx(yt,{children:$}),j&&z&&t.jsx(bt,{children:z}),q&&v&&t.jsx(Re,{children:v}),I&&h&&t.jsx(Ye,{label:h,type:_,styleVariant:X}),W&&E&&t.jsx(Je,{label:E,type:V,variant:D,onRemove:k}),y&&t.jsx(K,{variant:"secondary",size:"small",onClick:d,children:B}),(C||l)&&t.jsxs(wt,{children:[C&&t.jsx(K,{onClick:R,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(Tt,{}),children:"Edit"}),l&&t.jsx(K,{onClick:p,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx($t,{}),children:"Delete"})]}),J()]})})};jt.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, shiftKey?: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"boolean"},name:"shiftKey"}],return:{name:"void"}}},description:""},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},showUserInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:""},userRole:{required:!1,tsType:{name:"string"},description:""},showNumber:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},number:{required:!1,tsType:{name:"string"},description:""},showAmount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},amount:{required:!1,tsType:{name:"string"},description:""},showDate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},date:{required:!1,tsType:{name:"string"},description:""},showText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},showBadge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeLabel:{required:!1,tsType:{name:"string"},description:""},badgeType:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},badgeStyle:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showChip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipLabel:{required:!1,tsType:{name:"string"},description:""},chipType:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},chipVariant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},onChipRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showEditAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showDeleteAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLTableCellElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableCellElement>",elements:[{name:"HTMLTableCellElement"}]},name:"event"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},minWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFirstColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},rightOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},pinned:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'none'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},showPinBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Me=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 0;
`,qt=i.h2`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.semantic)==null?void 0:a.text)==null?void 0:r.primary)||"#111827"}};
  margin: 0;
`,kt=i.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,Ct=i.select`
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
`,St=i.div`
  position: relative;
  display: flex;
  align-items: center;
`,zt=i.input`
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
`,Vt=i.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.palette)==null?void 0:a.neutral)==null?void 0:r[500])||"#6b7280"}};
`,Rt=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>{var n;return((n=e.spacing)==null?void 0:n[5])||"12px"}};
  ${({$align:e})=>e==="right"?"margin-left: auto;":e==="center"?"margin: 0 auto;":""}
`,Mt=i.h2`
  font-family: ${({theme:e})=>{var n;return((n=e.fonts)==null?void 0:n.primary)||"Elevance Sans, sans-serif"}};
  font-size: ${({theme:e})=>{var n;return((n=e.fontSizes)==null?void 0:n[20])||"20px"}};
  font-weight: ${({theme:e})=>{var n;return((n=e.fontWeights)==null?void 0:n.semibold)||600}};
  color: ${({theme:e})=>{var n,a,r;return((r=(a=(n=e.colors)==null?void 0:n.semantic)==null?void 0:a.text)==null?void 0:r.primary)||"#111827"}};
  margin: 0;
`,At=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>{var n;return((n=e.spacing)==null?void 0:n[5])||"12px"}};
`,Lt=({align:e="left",children:n,className:a})=>t.jsx(Rt,{$align:e,className:a,children:n}),It=({children:e,className:n})=>t.jsx(Mt,{className:n,children:e}),Wt=({children:e,className:n})=>t.jsx(At,{className:n,children:e}),Et=({children:e,className:n,title:a,showDropdown:r=!1,dropdownOptions:s=[],dropdownValue:u,onDropdownChange:m,dropdownLabel:g="Select",showGlobalSearch:L=!1,globalSearchValue:P="",onGlobalSearchChange:x,globalSearchPlaceholder:T="Search...",showDownload:$=!0,onDownload:j,showFilter:z=!0,onFilter:q,showSettings:v=!0,onSettingsClick:I})=>e?t.jsx(Me,{className:n,children:e}):t.jsxs(Me,{className:n,children:[a&&t.jsx(qt,{children:a}),t.jsxs(kt,{children:[L&&t.jsxs(St,{children:[t.jsx(Vt,{children:t.jsx(re,{name:"Search",size:"small"})}),t.jsx(zt,{type:"text",value:P,onChange:h=>x==null?void 0:x(h.target.value),placeholder:T})]}),r&&s.length>0&&t.jsx(Ct,{value:u,onChange:h=>m==null?void 0:m(h.target.value),children:s.map(h=>t.jsx("option",{value:h.value,children:h.label},h.value))}),$&&t.jsx(K,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(re,{name:"Download",size:"medium"}),onClick:j,"aria-label":"Download",children:"Download"}),z&&t.jsx(K,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(re,{name:"FilterAlt",size:"medium"}),onClick:q,"aria-label":"Filter",children:"Filter"}),v&&t.jsx(K,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(re,{name:"Settings",size:"medium"}),onClick:I,"aria-label":"Settings",children:"Settings"})]})]});Lt.__docgenInfo={description:"",methods:[],displayName:"TableToolbarSection",props:{align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};It.__docgenInfo={description:"",methods:[],displayName:"TableToolbarTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};Wt.__docgenInfo={description:"",methods:[],displayName:"TableToolbarActions",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};Et.__docgenInfo={description:"",methods:[],displayName:"TableToolbar",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom children - when provided, renders custom content instead of default toolbar"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},title:{required:!1,tsType:{name:"string"},description:"Table title"},showDropdown:{required:!1,tsType:{name:"boolean"},description:"Show dropdown selector",defaultValue:{value:"false",computed:!1}},dropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"Dropdown options",defaultValue:{value:"[]",computed:!1}},dropdownValue:{required:!1,tsType:{name:"string"},description:"Selected dropdown value"},onDropdownChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Dropdown change handler"},dropdownLabel:{required:!1,tsType:{name:"string"},description:"Dropdown placeholder/label",defaultValue:{value:"'Select'",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search",defaultValue:{value:"false",computed:!1}},globalSearchValue:{required:!1,tsType:{name:"string"},description:"Global search value",defaultValue:{value:"''",computed:!1}},onGlobalSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Global search change handler"},globalSearchPlaceholder:{required:!1,tsType:{name:"string"},description:"Global search placeholder",defaultValue:{value:"'Search...'",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button",defaultValue:{value:"true",computed:!1}},onFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Filter handler"},showSettings:{required:!1,tsType:{name:"boolean"},description:"Show settings button",defaultValue:{value:"true",computed:!1}},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Settings click handler"}}};export{Et as T,ut as a,jt as b,Lt as c,It as d,Wt as e};
