import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as d,R as M}from"./index-B0WjJBI_.js";import{g as y}from"./styled-components.browser.esm-DVcPNpfh.js";import{T as Rt,a as ee,b as te,c as Fe,d as ha,e as ga}from"./TableToolbar-B057m2v0.js";import{I as B}from"./Icon-DTHcdsUG.js";import{T as f}from"./Typography-D6QTKejU.js";import{P as fa}from"./Pagination-Lb6yfKFp.js";import{T as ba}from"./TableSettings-CfqKS5a9.js";import{C as ya}from"./Checkbox-FOTO3Ujj.js";import{B as W}from"./Button-BULM1ePa.js";import{B as va}from"./Badge-DSAVxi_S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createSvgIcon-B7ekv6yR.js";import"./Chip-YwhtXZXO.js";import"./ExpandMore-CGeKdORQ.js";import"./Settings-BrfMxiKS.js";import"./InlineMessage-DFe4V2fc.js";const xa=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing[8]};
  width: 100%;
`,qe=y.div`
  overflow-x: auto;
  overflow-y: hidden; /* Prevent rows from appearing outside during animation */
  ${({$maxHeight:t})=>t&&`
    max-height: ${t};
    overflow-y: auto;
    display: block;
  `}
  border: ${({theme:t})=>t.borderWidth[1]} solid ${({theme:t})=>t.colors.palette.neutral[300]};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  position: relative;
`,Ve=y.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
  
  ${({$hasMaxHeight:t})=>t&&`
    thead {
      position: sticky;
      top: 0;
      z-index: 10;
      background: #f9fafb;
    }
  `}
`,wa=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:t})=>t.spacing[32]} ${({theme:t})=>t.spacing[24]};
  min-height: min(25rem, 50vh);
  background: ${({theme:t})=>t.colors.palette.neutral[50]};
`,Ta=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:t})=>t.spacing[6]};
  max-width: min(18.75rem, 90%);
`,Sa=y.div`
  width: ${({theme:t})=>t.spacing[20]};
  height: ${({theme:t})=>t.spacing[20]};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Ca=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:t})=>t.spacing[4]};
  text-align: center;
`,ka=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing[2]};
  padding: ${({theme:t})=>t.spacing[3]} ${({theme:t})=>t.spacing[4]};
  background: ${({theme:t})=>t.colors.palette.error[50]};
  border: ${({theme:t})=>t.borderWidth[1]} solid ${({theme:t})=>t.colors.semantic.border.error};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  margin-bottom: ${({theme:t})=>t.spacing[4]};
`,Da=y.tr``,Ea=y.tr`
  /* Keyframe animation disabled - using FLIP animation instead */
`,Wa=y.td`
  padding: ${({theme:t})=>t.spacing[4]};
  border-bottom: ${({theme:t})=>t.borderWidth[1]} solid ${({theme:t})=>t.colors.palette.neutral[200]};
`,ae=y.div`
  width: ${({width:t})=>t||"100%"};
  height: ${({height:t})=>t||"1rem"};
  background: ${({theme:t})=>t.colors.palette.neutral[200]};
  border-radius: ${({theme:t})=>t.borderRadius.sm};
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
      ${({theme:t})=>t.colors.palette.neutral[100]} 50%,
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
`,z=d.forwardRef(({as:t="div",data:m=[],columns:v=[],selectable:j=!1,paginated:A=!0,itemsPerPage:de=10,showSettings:N=!0,showActions:me=!1,actions:G=[],onRowSelect:p,onRowAction:U,onRowClick:x,rowKey:g="id",emptyMessage:Te="No data available",emptyIcon:ue="CloudOff",emptyTitle:_="No data available",emptyDescription:Y="There are no items to display",emptyActionLabel:Se,onEmptyAction:Ce,loading:pe=!1,className:Pt,toolbar:ke,title:he,description:ja,showToolbar:Mt=!0,showGlobalSearch:zt=!1,showFilter:It=!0,showDownload:Lt=!0,onDownload:Ot,sortMode:k="client",onSort:De,sortColumn:$t,sortDirection:Ft,maxHeight:J,isInvalid:Ee=!1,errorMessage:We,scrollContainerClassName:qt,scrollContainerStyle:Vt,emptyStateClassName:Ht,emptyStateStyle:Bt,style:Nt,...Gt},Ut)=>{const[je,Ae]=d.useState(1),[L,_t]=d.useState(de),[Yt,Jt]=d.useState(""),[Xt,Qt]=d.useState("none"),T=k==="server"?$t||"":Yt,S=k==="server"?Ft||"none":Xt,[Kt,X]=d.useState(!1),[Q,K]=d.useState([]),[ge,Re]=d.useState(null),[fe,be]=d.useState(!1),[Pe,Zt]=d.useState({}),[ea,Me]=d.useState(!1),[ta,ze]=d.useState(!1),[ye,aa]=d.useState({}),[na,ra]=d.useState({}),[Aa,Ra]=d.useState(""),O=d.useRef(new Map),D=d.useRef(null),ve=d.useRef(!1),[R,xe]=d.useState(()=>{const a=[];return j&&a.push({id:"checkbox",label:"Select",visible:!0,locked:!0,order:0}),v.forEach((r,n)=>{a.push({id:r.id,label:r.label,visible:r.visible!==!1,locked:r.locked||!1,order:j?n+1:n})}),me&&a.push({id:"actions",label:"Actions",visible:!0,locked:!1,order:a.length}),a}),oa=(a,r)=>{const n=R.filter(s=>s.locked&&s.id!=="checkbox").length;if(r&&n>=3){Me(!0),setTimeout(()=>Me(!1),3e3);return}const l=R.map(s=>s.id===a?{...s,locked:r}:s).sort((s,c)=>s.id==="checkbox"?-1:c.id==="checkbox"?1:s.locked&&!c.locked?-1:!s.locked&&c.locked?1:s.order-c.order).map((s,c)=>({...s,order:c}));xe(l)},sa=a=>{k==="client"&&D.current&&(console.log("🔵 CLIENT-SIDE: Capturing positions before sort..."),Array.from(D.current.querySelectorAll("tr")).forEach((i,o)=>{var s;const l=(s=P[o])==null?void 0:s[g];if(l){const c=i.getBoundingClientRect().top;O.current.set(l,c),console.log(`🔵 Row ${o} (ID: ${l}): position = ${c}px`)}}));let r;T===a?r=S==="asc"?"desc":S==="desc"?"none":"asc":r="asc",console.log(`🟣 Sort state changing: column=${a}, direction=${r}`),k==="server"&&De?De(a,r):(console.log("🟣 Setting internal sort state..."),Jt(a),Qt(r)),ze(!0),setTimeout(()=>ze(!1),50)},Ie=a=>{X(a);const r=a?m.map(n=>n[g]):[];K(r),p==null||p(r)},ia=(a,r,n,i=!1)=>{if(r)if(i&&ge!==null){const o=Math.min(ge,n),l=Math.max(ge,n),s=P.slice(o,l+1).map(u=>u[g]),c=Array.from(new Set([...Q,...s]));K(c),X(c.length===m.length),p==null||p(c)}else{const o=[...Q,a];K(o),X(o.length===m.length),Re(n),p==null||p(o)}else{const o=Q.filter(l=>l!==a);K(o),X(!1),Re(n),p==null||p(o)}},la=(a,r)=>{aa(n=>({...n,[a]:r})),Ae(1)},ca=(a,r)=>{ra(n=>({...n,[a]:r}))},Le=d.useMemo(()=>{console.log(`🟠 Processing data - sortMode=${k}, sortColumn=${T}, sortDirection=${S}`);let a=[...m];if(Object.entries(ye).forEach(([r,n])=>{if(n){const i=v.find(o=>o.id===r);i&&(a=a.filter(o=>{const l=i.accessor?typeof i.accessor=="function"?i.accessor(o):o[i.accessor]:o[r];return String(l).toLowerCase().includes(n.toLowerCase())}))}}),k==="client"&&T&&S!=="none"){const r=v.find(n=>n.id===T);r&&a.sort((n,i)=>{const o=r.accessor?typeof r.accessor=="function"?r.accessor(n):n[r.accessor]:n[T],l=r.accessor?typeof r.accessor=="function"?r.accessor(i):i[r.accessor]:i[T];return o<l?S==="asc"?-1:1:o>l?S==="asc"?1:-1:0})}return a},[m,v,ye,T,S,g]),Z=Le.length,da=A?Math.ceil(Z/L):1,Oe=A?(je-1)*L:0,ma=A?Oe+L:Z,P=Le.slice(Oe,ma),C=R.filter(a=>a.visible).sort((a,r)=>a.order-r.order);d.useLayoutEffect(()=>{if(k!=="server"||!D.current)return;Array.from(D.current.querySelectorAll("tr")).forEach((r,n)=>{var o;const i=(o=P[n])==null?void 0:o[g];if(i&&!O.current.has(i)){const l=r.getBoundingClientRect().top;O.current.set(i,l),console.log(`🔵 SERVER-SIDE: Initial capture Row ${n} (ID: ${i}): position = ${l}px`)}})}),d.useLayoutEffect(()=>{if(console.log("🟢 AFTER SORT - useLayoutEffect running..."),ve.current){console.log("⏸️ Animation already in progress, skipping...");return}if(!D.current){console.log("🔴 No tbody ref!");return}const a=Array.from(D.current.querySelectorAll("tr"));console.log("🟢 Found rows in DOM:",a.length);let r=!1;a.forEach((n,i)=>{var c;const o=(c=P[i])==null?void 0:c[g];if(!o)return;const l=O.current.get(o),s=n.getBoundingClientRect().top;if(console.log(`🟢 Row ${i} (ID: ${o}): old=${l}px, new=${s}px`),l!==void 0&&l!==s){const u=l-s,h=1e3,E=Math.max(-h,Math.min(h,u));console.log(`🟡 ANIMATING Row ${o}: delta=${u}px (clamped: ${E}px)`),r=!0,n.style.transform=`translateY(${E}px)`,n.style.transition="none",n.offsetHeight,requestAnimationFrame(()=>{n.style.transition="transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",n.style.transform="translateY(0)"})}else console.log(`⚪ Row ${o}: No animation (same position or first render)`);O.current.set(o,s)}),r&&(ve.current=!0,setTimeout(()=>{ve.current=!1,console.log("✅ Animation complete, lock released")},600))},[P,g]),d.useEffect(()=>{const a=document.querySelector("[data-scroll-container]");if(!a)return;const r=()=>{const o=a.querySelectorAll("thead th"),l={};let s=0;C.forEach((c,u)=>{if(c.locked&&o[u]){l[c.id]=s;const h=o[u].offsetWidth;s+=h}}),Zt(l)};r();const n=new ResizeObserver(()=>{r()});return a.querySelectorAll("thead th").forEach(o=>n.observe(o)),()=>{n.disconnect()}},[C.map(a=>a.id+a.locked).join(",")]),d.useEffect(()=>{const a=document.querySelector("[data-scroll-container]");if(!a)return;const r=()=>{const n=a.scrollLeft;a.querySelectorAll('[data-locked="true"]').forEach(o=>{n>0?o.classList.add("is-stuck"):o.classList.remove("is-stuck")})};return a.addEventListener("scroll",r),()=>a.removeEventListener("scroll",r)},[]),d.useEffect(()=>{const a=r=>{r.key==="Escape"&&fe&&be(!1),(r.ctrlKey||r.metaKey)&&r.key==="a"&&j&&m.length>0&&(r.preventDefault(),Ie(!0))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[fe,j,m.length]);const ua=()=>e.jsxs(qe,{"data-scroll-container":!0,$maxHeight:J,children:[e.jsx(Ve,{$hasMaxHeight:!!J,children:e.jsx("thead",{children:e.jsx("tr",{children:C.map((a,r)=>{const n=v.find(o=>o.id===a.id),i=r===0?"left":r===C.length-1?"right":void 0;return e.jsx(ee,{label:(n==null?void 0:n.label)||a.id,variant:"default",side:i},a.id)})})})}),e.jsx(wa,{className:Ht,style:Bt,role:"status","aria-live":"polite",children:e.jsxs(Ta,{children:[e.jsx(Sa,{children:e.jsx(B,{name:ue,size:"large",style:{width:"60px",height:"60px"}})}),e.jsxs(Ca,{children:[e.jsx(f,{variant:"headingL",weight:"semibold",as:"h3",children:_}),e.jsx(f,{variant:"body",color:"secondary",children:Y})]}),Se&&Ce&&e.jsx(W,{variant:"primary",size:"medium",onClick:Ce,children:Se})]})})]});return e.jsx(t,{ref:Ut,style:Nt,...Gt,children:e.jsxs(xa,{className:Pt,role:"region","aria-label":he||"Data table","aria-busy":pe,"aria-invalid":Ee,children:[Ee&&We&&e.jsxs(ka,{role:"alert","aria-live":"polite",children:[e.jsx(B,{name:"Error",size:"small"}),e.jsx(f,{variant:"body",color:"error",children:We})]}),ke||(Mt?e.jsx(Rt,{title:he,showDropdown:!1,dropdownOptions:[],showDownload:Lt,onDownload:Ot,showFilter:It,onFilter:()=>console.log("Filter clicked"),showSettings:N,onSettingsClick:()=>be(!0),showGlobalSearch:zt}):null),m.length===0&&!pe?ua():e.jsx(qe,{"data-scroll-container":!0,$maxHeight:J,className:qt,style:Vt,children:e.jsxs(Ve,{$hasMaxHeight:!!J,role:"table","aria-label":he||"Data table","aria-rowcount":Z,children:[e.jsx("thead",{children:e.jsx("tr",{children:C.map((a,r)=>{const n=v.find(c=>c.id===a.id),i=a.locked,o=Pe[a.id],l=r===0?"left":r===C.length-1?"right":void 0;if(a.id==="checkbox")return e.jsx(ee,{label:"",variant:"default",side:l,locked:i,leftOffset:o,"data-locked":i,showCheckbox:!0,checked:Kt,onCheckChange:Ie},a.id);if(a.id==="actions")return e.jsx(ee,{label:"Actions",variant:"default",side:l,locked:i,leftOffset:o,"data-locked":i},a.id);if(!n)return null;const s=n.searchable?"search":n.resizable&&!i?"resizeable-locked":n.resizable?"resizeable":"default";return e.jsx(ee,{label:n.label,variant:s,side:l,sortable:n.sortable,sortDirection:T===n.id?S:"none",onSort:n.sortable?()=>sa(n.id):void 0,searchValue:ye[n.id]||"",onSearchChange:n.searchable?c=>la(n.id,c):void 0,resizable:n.resizable&&!i,onResize:n.resizable&&!i?c=>ca(n.id,c):void 0,width:na[n.id]||n.width,minWidth:n.minWidth,maxWidth:n.maxWidth,onLockToggle:()=>oa(n.id,!i),locked:i,leftOffset:o,"data-locked":i},a.id)})})}),e.jsx("tbody",{ref:D,children:pe?Array.from({length:L}).map((a,r)=>e.jsx(Da,{children:C.map(n=>e.jsx(Wa,{children:n.id==="checkbox"?e.jsx(ae,{width:"20px",height:"20px"}):n.id==="actions"?e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(ae,{width:"32px",height:"32px"}),e.jsx(ae,{width:"32px",height:"32px"})]}):e.jsx(ae,{width:"80%"})},n.id))},`skeleton-${r}`)):P.map((a,r)=>{const n=a[g],i=Q.includes(n),o=s=>{x&&x(a,r,s)},l=e.jsx(M.Fragment,{children:C.map((s,c)=>{const u=v.find(w=>w.id===s.id),h=s.locked,E=Pe[s.id],we=c===0;if(s.id==="checkbox")return e.jsx(te,{selected:i,locked:h,leftOffset:E,"data-locked":h,isFirstColumn:we,children:e.jsx("div",{onClick:w=>{w.stopPropagation(),ia(n,!i,r,w.shiftKey)},style:{cursor:"pointer",display:"inline-flex"},children:e.jsx(ya,{checked:i,onChange:()=>{}})})},s.id);if(s.id==="actions")return e.jsx(te,{selected:i,locked:h,leftOffset:E,"data-locked":h,children:e.jsx("div",{style:{display:"flex",gap:"8px"},children:G.map((w,pa)=>e.jsx(W,{variant:"tertiary",size:"small",showLabel:!1,leadingIcon:e.jsx(B,{name:w.icon,size:"small"}),onClick:()=>w.onClick(a),"aria-label":w.label,children:w.label},pa))})},s.id);if(!u)return null;const $e=u.accessor?typeof u.accessor=="function"?u.accessor(a):a[u.accessor]:a[u.id];return u.renderCell?e.jsx(te,{selected:i,locked:h,leftOffset:E,"data-locked":h,isFirstColumn:we,children:u.renderCell($e,a,r)},s.id):e.jsx(te,{selected:i,locked:h,leftOffset:E,"data-locked":h,isFirstColumn:we,children:String($e||"")},s.id)})});return ta?e.jsx(Ea,{$animationDelay:r*30,onClick:o,style:{cursor:x?"pointer":"default"},children:l},n):e.jsx("tr",{onClick:o,style:{cursor:x?"pointer":"default"},children:l},n)})})]})}),A&&e.jsx(fa,{currentPage:je,totalPages:da,totalItems:Z,itemsPerPage:L,onPageChange:Ae,onItemsPerPageChange:_t}),N&&e.jsx(e.Fragment,{children:e.jsx(ba,{isOpen:fe,onClose:()=>be(!1),columns:R.filter(a=>a.id!=="checkbox"),lockWarning:ea,onColumnsChange:a=>{const r=R.find(o=>o.id==="checkbox"),n=r?[r,...a]:a;if(a.some(o=>{const l=R.find(s=>s.id===o.id);return l&&l.locked!==o.locked})){const l=n.sort((s,c)=>s.id==="checkbox"?-1:c.id==="checkbox"?1:s.locked&&!c.locked?-1:!s.locked&&c.locked?1:s.order-c.order).map((s,c)=>({...s,order:c}));xe(l)}else xe(n)}})})]})})});z.displayName="Table";z.__docgenInfo={description:"",methods:[],displayName:"Table",props:{as:{required:!1,tsType:{name:"ElementType"},description:"Polymorphic component type (default: 'div')",defaultValue:{value:"'div'",computed:!1}},data:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"Array of data objects to display",defaultValue:{value:"[]",computed:!1}},columns:{required:!1,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:"Column configuration",defaultValue:{value:"[]",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"Enable row selection",defaultValue:{value:"false",computed:!1}},paginated:{required:!1,tsType:{name:"boolean"},description:"Enable pagination",defaultValue:{value:"true",computed:!1}},itemsPerPage:{required:!1,tsType:{name:"number"},description:"Items per page (default: 10)",defaultValue:{value:"10",computed:!1}},showSettings:{required:!1,tsType:{name:"boolean"},description:"Enable column settings",defaultValue:{value:"true",computed:!1}},showActions:{required:!1,tsType:{name:"boolean"},description:"Enable actions column",defaultValue:{value:"false",computed:!1}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: string;
  label: string;
  onClick: (row: any) => void;
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(row: any) => void",signature:{arguments:[{type:{name:"any"},name:"row"}],return:{name:"void"}},required:!0}}]}}],raw:`Array<{
  icon: string;
  label: string;
  onClick: (row: any) => void;
}>`},description:"Custom actions for each row",defaultValue:{value:"[]",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedIds"}],return:{name:"void"}}},description:"Callback when rows are selected"},onRowAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: string, row: any) => void",signature:{arguments:[{type:{name:"string"},name:"action"},{type:{name:"any"},name:"row"}],return:{name:"void"}}},description:"Callback when row action is triggered"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: any, rowIndex: number, event: React.MouseEvent<HTMLTableRowElement>) => void",signature:{arguments:[{type:{name:"any"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableRowElement>",elements:[{name:"HTMLTableRowElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when a row is clicked"},rowKey:{required:!1,tsType:{name:"string"},description:"Custom row key accessor (default: 'id')",defaultValue:{value:"'id'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Custom empty state message",defaultValue:{value:"'No data available'",computed:!1}},emptyIcon:{required:!1,tsType:{name:"string"},description:"Empty state icon name (Material Icons)",defaultValue:{value:"'CloudOff'",computed:!1}},emptyTitle:{required:!1,tsType:{name:"string"},description:"Empty state title",defaultValue:{value:"'No data available'",computed:!1}},emptyDescription:{required:!1,tsType:{name:"string"},description:"Empty state description",defaultValue:{value:"'There are no items to display'",computed:!1}},emptyActionLabel:{required:!1,tsType:{name:"string"},description:"Empty state action button label"},onEmptyAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Empty state action button handler"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"},toolbar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom toolbar content - when provided, renders instead of default toolbar"},title:{required:!1,tsType:{name:"string"},description:"Table title"},description:{required:!1,tsType:{name:"string"},description:"Table description"},showToolbar:{required:!1,tsType:{name:"boolean"},description:"Show toolbar",defaultValue:{value:"true",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search in toolbar",defaultValue:{value:"false",computed:!1}},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button in toolbar",defaultValue:{value:"true",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button in toolbar",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"},sortMode:{required:!1,tsType:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}]},description:"Sorting mode: 'client' (default) or 'server'",defaultValue:{value:"'client'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnId: string, direction: 'asc' | 'desc' | 'none') => void",signature:{arguments:[{type:{name:"string"},name:"columnId"},{type:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sort changes (only used when sortMode='server')"},sortColumn:{required:!1,tsType:{name:"string"},description:"Controlled sort column (only used when sortMode='server')"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"Controlled sort direction (only used when sortMode='server')"},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height for table body (enables fixed header with internal scroll). Example: '400px', '50vh'"},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Invalid/error state",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true"},scrollContainerClassName:{required:!1,tsType:{name:"string"},description:"Override className for scroll container"},scrollContainerStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for scroll container"},emptyStateClassName:{required:!1,tsType:{name:"string"},description:"Override className for empty state"},emptyStateStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for empty state"}}};const Ja={title:"Components/Table",component:z,parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:600},description:{component:`
# Basic Table

Complete data table with sorting, filtering, pagination.

## Installation
\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage
\`\`\`tsx
import { Table } from '@ajaysoni7832/lean-ids-components';

const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
];

<Table data={data} columns={columns} />
\`\`\`

## Features
✅ Sorting, filtering, pagination
✅ Row selection
✅ Custom cell rendering
✅ Responsive
        `}}},tags:["autodocs"]},b=[{id:"1",name:"Alice Johnson",email:"alice.johnson@company.com",role:"Senior Developer",department:"Engineering",status:"Active",salary:125e3,avatar:"https://i.pravatar.cc/32?img=1"},{id:"2",name:"Bob Smith",email:"bob.smith@company.com",role:"Product Manager",department:"Product",status:"Active",salary:115e3,avatar:"https://i.pravatar.cc/32?img=2"},{id:"3",name:"Carol Williams",email:"carol.williams@company.com",role:"UX Designer",department:"Design",status:"Active",salary:95e3,avatar:"https://i.pravatar.cc/32?img=3"},{id:"4",name:"David Brown",email:"david.brown@company.com",role:"DevOps Engineer",department:"Engineering",status:"Inactive",salary:11e4,avatar:"https://i.pravatar.cc/32?img=4"},{id:"5",name:"Eve Davis",email:"eve.davis@company.com",role:"Marketing Manager",department:"Marketing",status:"Active",salary:105e3,avatar:"https://i.pravatar.cc/32?img=5"},{id:"6",name:"Frank Miller",email:"frank.miller@company.com",role:"Backend Developer",department:"Engineering",status:"Active",salary:118e3,avatar:"https://i.pravatar.cc/32?img=6"},{id:"7",name:"Grace Lee",email:"grace.lee@company.com",role:"Data Analyst",department:"Analytics",status:"Active",salary:98e3,avatar:"https://i.pravatar.cc/32?img=7"},{id:"8",name:"Henry Wilson",email:"henry.wilson@company.com",role:"QA Engineer",department:"Engineering",status:"Inactive",salary:92e3,avatar:"https://i.pravatar.cc/32?img=8"},{id:"9",name:"Iris Martinez",email:"iris.martinez@company.com",role:"Frontend Developer",department:"Engineering",status:"Active",salary:112e3,avatar:"https://i.pravatar.cc/32?img=9"},{id:"10",name:"Jack Anderson",email:"jack.anderson@company.com",role:"Sales Manager",department:"Sales",status:"Active",salary:108e3,avatar:"https://i.pravatar.cc/32?img=10"},{id:"11",name:"Karen Taylor",email:"karen.taylor@company.com",role:"HR Manager",department:"Human Resources",status:"Active",salary:95e3,avatar:"https://i.pravatar.cc/32?img=11"},{id:"12",name:"Leo Thomas",email:"leo.thomas@company.com",role:"Security Engineer",department:"Engineering",status:"Active",salary:125e3,avatar:"https://i.pravatar.cc/32?img=12"},{id:"13",name:"Maria Garcia",email:"maria.garcia@company.com",role:"Content Writer",department:"Marketing",status:"Active",salary:75e3,avatar:"https://i.pravatar.cc/32?img=13"},{id:"14",name:"Nathan Moore",email:"nathan.moore@company.com",role:"System Administrator",department:"IT",status:"Inactive",salary:88e3,avatar:"https://i.pravatar.cc/32?img=14"},{id:"15",name:"Olivia Jackson",email:"olivia.jackson@company.com",role:"UI Designer",department:"Design",status:"Active",salary:102e3,avatar:"https://i.pravatar.cc/32?img=15"},{id:"16",name:"Paul White",email:"paul.white@company.com",role:"Business Analyst",department:"Product",status:"Active",salary:96e3,avatar:"https://i.pravatar.cc/32?img=16"},{id:"17",name:"Quinn Harris",email:"quinn.harris@company.com",role:"Mobile Developer",department:"Engineering",status:"Active",salary:115e3,avatar:"https://i.pravatar.cc/32?img=17"},{id:"18",name:"Rachel Clark",email:"rachel.clark@company.com",role:"Scrum Master",department:"Product",status:"Active",salary:105e3,avatar:"https://i.pravatar.cc/32?img=18"},{id:"19",name:"Samuel Lewis",email:"samuel.lewis@company.com",role:"Cloud Architect",department:"Engineering",status:"Active",salary:135e3,avatar:"https://i.pravatar.cc/32?img=19"},{id:"20",name:"Tina Robinson",email:"tina.robinson@company.com",role:"Customer Success Manager",department:"Support",status:"Active",salary:85e3,avatar:"https://i.pravatar.cc/32?img=20"}],I=[{id:"id",label:"ID",width:80,minWidth:60,maxWidth:100},{id:"name",label:"Name",width:200,minWidth:150,maxWidth:300},{id:"email",label:"Email",width:250,minWidth:200,maxWidth:400},{id:"role",label:"Role",width:180,minWidth:150,maxWidth:250}],ce=[{id:"id",label:"ID",sortable:!0,resizable:!0,width:80,minWidth:60,maxWidth:100},{id:"user",label:"User",sortable:!0,resizable:!0,width:250,minWidth:200,maxWidth:400,accessor:t=>t.name,renderCell:(t,m)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("img",{src:m.avatar,alt:m.name,style:{width:32,height:32,borderRadius:"50%"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(f,{variant:"body",weight:"semibold",children:m.name}),e.jsx(f,{variant:"caption",color:"secondary",children:m.role})]})]})},{id:"email",label:"Email",accessor:"email",sortable:!0,searchable:!0,resizable:!0,width:250,minWidth:200,maxWidth:400},{id:"department",label:"Department",accessor:"department",sortable:!0,width:150,minWidth:120,maxWidth:200},{id:"status",label:"Status",accessor:"status",sortable:!0,width:120,minWidth:100,maxWidth:150,renderCell:t=>e.jsx(va,{label:t,type:t==="Active"?"success":"error",style:"default"})},{id:"salary",label:"Salary",accessor:"salary",sortable:!0,resizable:!0,width:120,minWidth:100,maxWidth:180,renderCell:t=>`$${t.toLocaleString()}`}],$={args:{data:b,columns:ce,selectable:!0,paginated:!0,itemsPerPage:10,showSettings:!0,showActions:!0,showToolbar:!0,title:"Employee Directory",description:"Manage and view all employee information",showGlobalSearch:!0,showFilter:!0,showDownload:!0,actions:[{icon:"Edit",label:"Edit",onClick:t=>console.log("Edit:",t)},{icon:"Delete",label:"Delete",onClick:t=>console.log("Delete:",t)}],onRowSelect:t=>console.log("Selected:",t)},parameters:{docs:{story:{inline:!1,iframeHeight:600}}}},F={args:{data:b,columns:ce,selectable:!0,paginated:!0,itemsPerPage:20,maxHeight:"500px",showToolbar:!0,title:"Fixed Header Table",description:"Header stays fixed while body scrolls. Try changing items per page!",showSettings:!0},parameters:{docs:{description:{story:"The `maxHeight` prop enables a fixed header with internal scrolling. The table height stays constant regardless of how many items per page you select. Perfect for dashboards and constrained layouts."},story:{inline:!1,iframeHeight:700}}}},q={args:{data:b,columns:I,loading:!0,title:"Tabular View"}},V={args:{data:b,columns:ce,selectable:!0,paginated:!0,itemsPerPage:10,toolbar:e.jsxs(Rt,{children:[e.jsx(Fe,{align:"left",children:e.jsx(ha,{children:"Custom Employee Directory"})}),e.jsx(Fe,{align:"right",children:e.jsxs(ga,{children:[e.jsx(W,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:e.jsx(B,{name:"Download",size:"medium"}),onClick:()=>console.log("Export clicked"),"aria-label":"Export",children:"Export"}),e.jsx(W,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:e.jsx(B,{name:"FilterAlt",size:"medium"}),onClick:()=>console.log("Filter clicked"),"aria-label":"Filter",children:"Filter"}),e.jsx(W,{variant:"primary",size:"medium",onClick:()=>console.log("Add Employee clicked"),children:"Add Employee"})]})})]})},parameters:{docs:{description:{story:"Example of a custom toolbar using `TableToolbar`, `TableToolbarSection`, `TableToolbarTitle`, and `TableToolbarActions` helper components. These components provide a consistent layout and styling while allowing full customization. You can add any Lean IDS components (Button, Input, Select, etc.) inside the toolbar sections."},story:{inline:!1,iframeHeight:600}}}},H={render:t=>{const[m,v]=M.useState(b),[j,A]=M.useState(""),[de,N]=M.useState("none"),[me,G]=M.useState(!1),p=async(U,x)=>{if(A(U),N(x),G(!0),await new Promise(g=>setTimeout(g,500)),x==="none")v([...b]);else{const g=[...b].sort((Te,ue)=>{const _=Te[U],Y=ue[U];return _<Y?x==="asc"?-1:1:_>Y?x==="asc"?1:-1:0});v(g)}G(!1)};return e.jsx(z,{...t,data:m,loading:me,sortMode:"server",sortColumn:j,sortDirection:de,onSort:p})},args:{columns:ce,paginated:!0,itemsPerPage:10,title:"Server-Side Sorting Example",description:'Click column headers to sort. Data is "fetched" from server.'},parameters:{docs:{description:{story:'Example of server-side sorting. The parent component manages `sortColumn` and `sortDirection` state, and fetches sorted data when `onSort` is called. Set `sortMode="server"` to enable this mode.'},story:{inline:!1,iframeHeight:600}}}},ne={args:{data:[],columns:I,showToolbar:!0,title:"Tabular View",emptyIcon:"CloudOff",emptyTitle:"Not able to sync",emptyDescription:"Please check your internet connection",emptyActionLabel:"Refresh",onEmptyAction:()=>console.log("Refresh clicked")}},re={args:{data:b,columns:I,showToolbar:!0,title:"Employee Directory",isInvalid:!0,errorMessage:"Failed to load data. Please try again later."},parameters:{docs:{description:{story:"Table with error state. Use `isInvalid` and `errorMessage` props to display error messages."}}}},oe={args:{data:b,columns:I,showToolbar:!0,title:"Employee Directory",loading:!0},parameters:{docs:{description:{story:"Table in loading state. Shows skeleton rows while data is being fetched."}}}},se={render:t=>{const m=M.useRef(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(W,{variant:"secondary",size:"small",onClick:()=>{m.current&&(m.current.scrollIntoView({behavior:"smooth"}),console.log("Table ref:",m.current))},children:"Scroll to Table"}),e.jsx(W,{variant:"secondary",size:"small",onClick:()=>{m.current&&console.log("Table dimensions:",{width:m.current.offsetWidth,height:m.current.offsetHeight})},children:"Log Dimensions"})]}),e.jsx(z,{ref:m,...t})]})},args:{data:b,columns:I,showToolbar:!0,title:"ForwardRef Example"},parameters:{docs:{description:{story:"Table with forwardRef support. The ref is forwarded to the root container element, allowing parent components to access the DOM node."}}}},ie={render:()=>{const t=[{id:"fixed",label:"Fixed Width",accessor:"name",width:150,minWidth:150,maxWidth:150,resizable:!0},{id:"flexible",label:"Flexible (150-400px)",accessor:"email",width:250,minWidth:150,maxWidth:400,resizable:!0},{id:"minOnly",label:"Min Only (200px+)",accessor:"department",minWidth:200,resizable:!0},{id:"maxOnly",label:"Max Only (≤300px)",accessor:"role",maxWidth:300,resizable:!0}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(f,{variant:"headingM",weight:"semibold",children:"Column Width Control Demo"}),e.jsx(f,{variant:"body",color:"secondary",children:"Try resizing the columns by dragging their borders. Each column has different width constraints:"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"16px",background:"#f9fafb",borderRadius:"8px"},children:[e.jsx(f,{variant:"body",weight:"semibold",children:"Column Configurations:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[e.jsx("li",{children:e.jsxs(f,{variant:"body",children:[e.jsx("strong",{children:"Fixed Width:"})," width=150, minWidth=150, maxWidth=150 (cannot resize)"]})}),e.jsx("li",{children:e.jsxs(f,{variant:"body",children:[e.jsx("strong",{children:"Flexible:"})," width=250, minWidth=150, maxWidth=400 (can resize between 150-400px)"]})}),e.jsx("li",{children:e.jsxs(f,{variant:"body",children:[e.jsx("strong",{children:"Min Only:"})," minWidth=200 (can grow indefinitely, but not below 200px)"]})}),e.jsx("li",{children:e.jsxs(f,{variant:"body",children:[e.jsx("strong",{children:"Max Only:"})," maxWidth=300 (can shrink, but not above 300px)"]})})]})]})]}),e.jsx(z,{data:b.slice(0,5),columns:t})]})},parameters:{docs:{description:{story:`
Demonstrates column width control with \`width\`, \`minWidth\`, and \`maxWidth\` properties.

**Width Properties:**
- \`width\` - Sets the initial/preferred width
- \`minWidth\` - Prevents column from shrinking below this value
- \`maxWidth\` - Prevents column from growing above this value

**Use Cases:**
- **Fixed Width**: Set all three properties to the same value
- **Flexible with Constraints**: Set different min and max values
- **Minimum Only**: Set only minWidth to allow unlimited growth
- **Maximum Only**: Set only maxWidth to allow unlimited shrinking

Try resizing the columns to see how the constraints work!
        `},source:{code:`
const columns: TableColumn[] = [
  {
    id: 'fixed',
    label: 'Fixed Width',
    width: 150,
    minWidth: 150,
    maxWidth: 150,
    resizable: true,
  },
  {
    id: 'flexible',
    label: 'Flexible',
    width: 250,
    minWidth: 150,
    maxWidth: 400,
    resizable: true,
  },
  {
    id: 'minOnly',
    label: 'Min Only',
    minWidth: 200,
    resizable: true,
  },
  {
    id: 'maxOnly',
    label: 'Max Only',
    maxWidth: 300,
    resizable: true,
  },
];

<Table data={data} columns={columns} />
        `}}}},le={args:{as:"section",data:b,columns:I,showToolbar:!0,title:"Polymorphic Table"},parameters:{docs:{description:{story:"Table rendered as a different HTML element using the `as` prop. In this example, the table is rendered as a `<section>` instead of a `<div>`."}}}};var He,Be,Ne,Ge,Ue;$.parameters={...$.parameters,docs:{...(He=$.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(Ne=(Be=$.parameters)==null?void 0:Be.docs)==null?void 0:Ne.source},description:{story:`Complete table with all features enabled - matches CompleteExample design

**Features:**
- ✅ Row selection with checkboxes
- ✅ **Shift-click multi-select**: Click first row, hold Shift, click another row to select range
- ✅ Pagination
- ✅ Column settings
- ✅ Row actions
- ✅ Global search
- ✅ Filters
- ✅ Download
- ✅ **Column resizing**: Drag column borders to resize (works in both Canvas and Docs)
- ✅ **Width constraints**: Columns have \`minWidth\` and \`maxWidth\` to prevent over-shrinking or over-growing

**Column Width Control:**
Each column is configured with:
- \`width\` - Preferred/initial width
- \`minWidth\` - Minimum width constraint (prevents shrinking too small)
- \`maxWidth\` - Maximum width constraint (prevents growing too large)

When resizing columns, they respect these constraints for a professional, consistent layout.

**Note:** Column resizing is fully interactive in both Canvas and Docs views.`,...(Ue=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.description}}};var _e,Ye,Je,Xe,Qe;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: advancedColumns,
    selectable: true,
    paginated: true,
    itemsPerPage: 20,
    // Show all 20 rows
    maxHeight: '500px',
    // Fixed height - header stays visible
    showToolbar: true,
    title: 'Fixed Header Table',
    description: 'Header stays fixed while body scrolls. Try changing items per page!',
    showSettings: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The \`maxHeight\` prop enables a fixed header with internal scrolling. The table height stays constant regardless of how many items per page you select. Perfect for dashboards and constrained layouts.'
      },
      story: {
        inline: false,
        iframeHeight: 700
      }
    }
  }
}`,...(Je=(Ye=F.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source},description:{story:`Fixed Header with Scroll - demonstrates maxHeight prop for fixed header with internal scrolling

When you set maxHeight, the table header stays fixed and only the body scrolls.
This is useful for tables with many rows where you want to keep the header visible.`,...(Qe=(Xe=F.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.description}}};var Ke,Ze,et,tt,at;q.parameters={...q.parameters,docs:{...(Ke=q.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    loading: true,
    title: 'Tabular View'
  }
}`,...(et=(Ze=q.parameters)==null?void 0:Ze.docs)==null?void 0:et.source},description:{story:"Loading state",...(at=(tt=q.parameters)==null?void 0:tt.docs)==null?void 0:at.description}}};var nt,rt,ot,st,it;V.parameters={...V.parameters,docs:{...(nt=V.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: advancedColumns,
    selectable: true,
    paginated: true,
    itemsPerPage: 10,
    toolbar: <TableToolbar>
        <TableToolbarSection align="left">
          <TableToolbarTitle>Custom Employee Directory</TableToolbarTitle>
        </TableToolbarSection>
        <TableToolbarSection align="right">
          <TableToolbarActions>
            <Button variant="secondary" size="medium" showLabel={false} leadingIcon={<Icon name="Download" size="medium" />} onClick={() => console.log('Export clicked')} aria-label="Export">
              Export
            </Button>
            <Button variant="secondary" size="medium" showLabel={false} leadingIcon={<Icon name="FilterAlt" size="medium" />} onClick={() => console.log('Filter clicked')} aria-label="Filter">
              Filter
            </Button>
            <Button variant="primary" size="medium" onClick={() => console.log('Add Employee clicked')}>
              Add Employee
            </Button>
          </TableToolbarActions>
        </TableToolbarSection>
      </TableToolbar>
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a custom toolbar using \`TableToolbar\`, \`TableToolbarSection\`, \`TableToolbarTitle\`, and \`TableToolbarActions\` helper components. These components provide a consistent layout and styling while allowing full customization. You can add any Lean IDS components (Button, Input, Select, etc.) inside the toolbar sections.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(ot=(rt=V.parameters)==null?void 0:rt.docs)==null?void 0:ot.source},description:{story:`Custom Toolbar - demonstrates how to create a fully custom toolbar using TableToolbar helper components

**How to use:**
\`\`\`tsx
import { 
  Table, 
  TableToolbar, 
  TableToolbarSection, 
  TableToolbarTitle,
  TableToolbarActions,
  Button,
  Icon
} from '@ajaysoni7832/lean-ids-components';

<Table
  data={data}
  columns={columns}
  toolbar={
    <TableToolbar>
      <TableToolbarSection align="left">
        <TableToolbarTitle>Custom Title</TableToolbarTitle>
      </TableToolbarSection>
      <TableToolbarSection align="right">
        <TableToolbarActions>
          <Button variant="secondary">Export</Button>
          <Button variant="primary">Add New</Button>
        </TableToolbarActions>
      </TableToolbarSection>
    </TableToolbar>
  }
/>
\`\`\``,...(it=(st=V.parameters)==null?void 0:st.docs)==null?void 0:it.description}}};var lt,ct,dt,mt,ut;H.parameters={...H.parameters,docs:{...(lt=H.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: args => {
    const [sortedData, setSortedData] = React.useState(sampleData);
    const [sortCol, setSortCol] = React.useState('');
    const [sortDir, setSortDir] = React.useState<'asc' | 'desc' | 'none'>('none');
    const [loading, setLoading] = React.useState(false);
    const handleSort = async (columnId: string, direction: 'asc' | 'desc' | 'none') => {
      setSortCol(columnId);
      setSortDir(direction);
      setLoading(true);

      // Simulate server request
      await new Promise(resolve => setTimeout(resolve, 500));

      // Simulate server-side sorting
      if (direction === 'none') {
        setSortedData([...sampleData]);
      } else {
        const sorted = [...sampleData].sort((a, b) => {
          const aVal = a[columnId as keyof typeof a];
          const bVal = b[columnId as keyof typeof b];
          if (aVal < bVal) return direction === 'asc' ? -1 : 1;
          if (aVal > bVal) return direction === 'asc' ? 1 : -1;
          return 0;
        });
        setSortedData(sorted);
      }
      setLoading(false);
    };
    return <Table {...args} data={sortedData} loading={loading} sortMode="server" sortColumn={sortCol} sortDirection={sortDir} onSort={handleSort} />;
  },
  args: {
    columns: advancedColumns,
    paginated: true,
    itemsPerPage: 10,
    title: 'Server-Side Sorting Example',
    description: 'Click column headers to sort. Data is "fetched" from server.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of server-side sorting. The parent component manages \`sortColumn\` and \`sortDirection\` state, and fetches sorted data when \`onSort\` is called. Set \`sortMode="server"\` to enable this mode.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(dt=(ct=H.parameters)==null?void 0:ct.docs)==null?void 0:dt.source},description:{story:`Empty state with action button
Server-Side Sorting - demonstrates how to implement server-side sorting

In this example, the parent component manages the sort state and simulates
a server request. In a real application, you would fetch sorted data from your API.`,...(ut=(mt=H.parameters)==null?void 0:mt.docs)==null?void 0:ut.description}}};var pt,ht,gt;ne.parameters={...ne.parameters,docs:{...(pt=ne.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(gt=(ht=ne.parameters)==null?void 0:ht.docs)==null?void 0:gt.source}}};var ft,bt,yt;re.parameters={...re.parameters,docs:{...(ft=re.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'Employee Directory',
    isInvalid: true,
    errorMessage: 'Failed to load data. Please try again later.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with error state. Use \`isInvalid\` and \`errorMessage\` props to display error messages.'
      }
    }
  }
}`,...(yt=(bt=re.parameters)==null?void 0:bt.docs)==null?void 0:yt.source}}};var vt,xt,wt;oe.parameters={...oe.parameters,docs:{...(vt=oe.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'Employee Directory',
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Table in loading state. Shows skeleton rows while data is being fetched.'
      }
    }
  }
}`,...(wt=(xt=oe.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var Tt,St,Ct;se.parameters={...se.parameters,docs:{...(Tt=se.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  render: args => {
    const tableRef = React.useRef<HTMLDivElement>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <Button variant="secondary" size="small" onClick={() => {
          if (tableRef.current) {
            tableRef.current.scrollIntoView({
              behavior: 'smooth'
            });
            console.log('Table ref:', tableRef.current);
          }
        }}>
            Scroll to Table
          </Button>
          <Button variant="secondary" size="small" onClick={() => {
          if (tableRef.current) {
            console.log('Table dimensions:', {
              width: tableRef.current.offsetWidth,
              height: tableRef.current.offsetHeight
            });
          }
        }}>
            Log Dimensions
          </Button>
        </div>
        <Table ref={tableRef} {...args} />
      </div>;
  },
  args: {
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'ForwardRef Example'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with forwardRef support. The ref is forwarded to the root container element, allowing parent components to access the DOM node.'
      }
    }
  }
}`,...(Ct=(St=se.parameters)==null?void 0:St.docs)==null?void 0:Ct.source}}};var kt,Dt,Et;ie.parameters={...ie.parameters,docs:{...(kt=ie.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  render: () => {
    const widthControlColumns: TableColumn[] = [{
      id: 'fixed',
      label: 'Fixed Width',
      accessor: 'name',
      width: 150,
      minWidth: 150,
      maxWidth: 150,
      resizable: true
    }, {
      id: 'flexible',
      label: 'Flexible (150-400px)',
      accessor: 'email',
      width: 250,
      minWidth: 150,
      maxWidth: 400,
      resizable: true
    }, {
      id: 'minOnly',
      label: 'Min Only (200px+)',
      accessor: 'department',
      minWidth: 200,
      resizable: true
    }, {
      id: 'maxOnly',
      label: 'Max Only (≤300px)',
      accessor: 'role',
      maxWidth: 300,
      resizable: true
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingM" weight="semibold">Column Width Control Demo</Typography>
          <Typography variant="body" color="secondary">
            Try resizing the columns by dragging their borders. Each column has different width constraints:
          </Typography>
          
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '16px',
          background: '#f9fafb',
          borderRadius: '8px'
        }}>
            <Typography variant="body" weight="semibold">Column Configurations:</Typography>
            <ul style={{
            margin: 0,
            paddingLeft: '20px'
          }}>
              <li>
                <Typography variant="body">
                  <strong>Fixed Width:</strong> width=150, minWidth=150, maxWidth=150 (cannot resize)
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  <strong>Flexible:</strong> width=250, minWidth=150, maxWidth=400 (can resize between 150-400px)
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  <strong>Min Only:</strong> minWidth=200 (can grow indefinitely, but not below 200px)
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  <strong>Max Only:</strong> maxWidth=300 (can shrink, but not above 300px)
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        <Table data={sampleData.slice(0, 5)} columns={widthControlColumns} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates column width control with \\\`width\\\`, \\\`minWidth\\\`, and \\\`maxWidth\\\` properties.

**Width Properties:**
- \\\`width\\\` - Sets the initial/preferred width
- \\\`minWidth\\\` - Prevents column from shrinking below this value
- \\\`maxWidth\\\` - Prevents column from growing above this value

**Use Cases:**
- **Fixed Width**: Set all three properties to the same value
- **Flexible with Constraints**: Set different min and max values
- **Minimum Only**: Set only minWidth to allow unlimited growth
- **Maximum Only**: Set only maxWidth to allow unlimited shrinking

Try resizing the columns to see how the constraints work!
        \`
      },
      source: {
        code: \`
const columns: TableColumn[] = [
  {
    id: 'fixed',
    label: 'Fixed Width',
    width: 150,
    minWidth: 150,
    maxWidth: 150,
    resizable: true,
  },
  {
    id: 'flexible',
    label: 'Flexible',
    width: 250,
    minWidth: 150,
    maxWidth: 400,
    resizable: true,
  },
  {
    id: 'minOnly',
    label: 'Min Only',
    minWidth: 200,
    resizable: true,
  },
  {
    id: 'maxOnly',
    label: 'Max Only',
    maxWidth: 300,
    resizable: true,
  },
];

<Table data={data} columns={columns} />
        \`
      }
    }
  }
}`,...(Et=(Dt=ie.parameters)==null?void 0:Dt.docs)==null?void 0:Et.source}}};var Wt,jt,At;le.parameters={...le.parameters,docs:{...(Wt=le.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  args: {
    as: 'section',
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'Polymorphic Table'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table rendered as a different HTML element using the \`as\` prop. In this example, the table is rendered as a \`<section>\` instead of a \`<div>\`.'
      }
    }
  }
}`,...(At=(jt=le.parameters)==null?void 0:jt.docs)==null?void 0:At.source}}};const Xa=["Complete","FixedHeaderScroll","Loading","CustomToolbar","ServerSideSorting","Empty","ErrorState","LoadingState","WithForwardRef","ColumnWidthControl","PolymorphicAs"];export{ie as ColumnWidthControl,$ as Complete,V as CustomToolbar,ne as Empty,re as ErrorState,F as FixedHeaderScroll,q as Loading,oe as LoadingState,le as PolymorphicAs,H as ServerSideSorting,se as WithForwardRef,Xa as __namedExportsOrder,Ja as default};
