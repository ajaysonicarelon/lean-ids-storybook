import{j as a}from"./jsx-runtime-DztICxWZ.js";import{r as c,R as M}from"./index-Bv9Y92EF.js";import{g as y}from"./styled-components.browser.esm-CVW2bgxI.js";import{E as Ya}from"./ExpandMore-Bd7rmlfk.js";import{C as Qa,M as Pe,V as tt,D as Xa,E as Za,I as at}from"./Icon-CnD2zmcO.js";import{T as Yt,a as Z,b as le,c as rt,d as Ka,e as er}from"./TableToolbar-DNn88ULK.js";import{T as tr,a as ar}from"./TableGroupHeader-ds_WSAth.js";import{P as rr}from"./Pagination-Cq4_L77K.js";import{T as f}from"./Typography-CidD3oMh.js";import{B as D}from"./Button-DlNRQx8j.js";import{C as nr}from"./Checkbox-D2w4VPJI.js";import{B as or}from"./Badge-FGqUbZvd.js";import{C as Me}from"./Chip--FEJIdFJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createSvgIcon-Ce6eLUkr.js";import"./Search-Bpcrs37S.js";import"./Close-CtL5j8iM.js";import"./Settings-aYyvLXSG.js";import"./Home-Bococija.js";import"./InlineMessage-D0nF0rE-.js";import"./WarningAmberOutlined-Chc0M3hO.js";const ir=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[8]};
  width: 100%;
`,Ae=y.div`
  overflow-x: auto;
  overflow-y: auto;
  width: min-content; /* Allow table to use natural width based on column widths */
  min-width: 100%; /* But don't shrink below container width */
  max-height: ${({$maxHeight:n})=>n||"calc(100vh - 300px)"};
  border: ${({theme:n})=>n.borderWidth[1]} solid ${({theme:n})=>n.colors.palette.neutral[300]};
  border-radius: ${({theme:n})=>n.borderRadius.md};
  position: relative;
  
  /* Always show scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:n})=>n.colors.palette.neutral[100]};
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:n})=>n.colors.palette.neutral[400]};
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:n})=>n.colors.palette.neutral[500]};
  }
`,Ie=y.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
  
  ${({$hasMaxHeight:n})=>n&&`
    thead {
      position: sticky;
      top: 0;
      z-index: 10;
      background: #f9fafb;
    }
  `}
`,nt=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:n})=>n.spacing[32]} ${({theme:n})=>n.spacing[24]};
  min-height: min(25rem, 50vh);
  background: ${({theme:n})=>n.colors.palette.neutral[50]};
`,ot=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[6]};
  max-width: min(18.75rem, 90%);
`,it=y.div`
  width: ${({theme:n})=>n.spacing[20]};
  height: ${({theme:n})=>n.spacing[20]};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,st=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  text-align: center;
`,sr=y.tr``,lr=y.tr`
  /* Keyframe animation disabled - using FLIP animation instead */
`,dr=y.td`
  padding: ${({theme:n})=>n.spacing[4]};
  border-bottom: ${({theme:n})=>n.borderWidth[1]} solid ${({theme:n})=>n.colors.palette.neutral[200]};
`,de=y.div`
  width: ${({width:n})=>n||"100%"};
  height: ${({height:n})=>n||"1rem"};
  background: ${({theme:n})=>n.colors.palette.neutral[200]};
  border-radius: ${({theme:n})=>n.borderRadius.sm};
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
      ${({theme:n})=>n.colors.palette.neutral[100]} 50%,
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
`,cr=y.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({theme:n})=>n.colors.palette.neutral[600]};
  cursor: pointer;
  border-radius: ${({theme:n})=>n.borderRadius.sm};
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:n})=>n.colors.palette.neutral[100]};
    color: ${({theme:n})=>n.colors.palette.primary[600]};
  }

  &:active {
    background: ${({theme:n})=>n.colors.palette.neutral[200]};
  }

  &:focus-visible {
    outline: ${({theme:n})=>n.borderWidth[2]} solid ${({theme:n})=>n.colors.palette.primary[400]};
    outline-offset: 2px;
  }

  svg {
    font-size: 20px;
  }
`,mr=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[2]};
`,U=c.forwardRef(({as:n="div",data:u=[],columns:g=[],selectable:E=!1,paginated:A=!0,itemsPerPage:ye=10,paginationMode:I="client",onPageChange:R,currentPage:_,totalItems:xe,showSettings:z=!0,showActions:q=!1,actions:Y=[],onRowSelect:h,onRowAction:re,onRowClick:W,rowKey:p="id",emptyMessage:ur="No data available",emptyIcon:pr="CloudOff",emptyTitle:Qt="No data available",emptyDescription:Xt="There are no items to display",emptyActionLabel:ve,onEmptyAction:ne,loading:we=!1,className:Zt,toolbar:Re,title:Te,description:hr,showToolbar:Kt=!0,showGlobalSearch:ea=!1,showFilter:ta=!0,showDownload:aa=!0,onDownload:ra,sortMode:L="client",onSort:ze,sortColumn:na,sortDirection:oa,maxHeight:F,isInvalid:qe=!1,errorMessage:ia,errorDescription:sa,errorIcon:la,errorActionLabel:da,onErrorAction:Le,errorStateContent:ca,emptyStateContent:ma,scrollContainerClassName:ua,scrollContainerStyle:Fe,emptyStateClassName:pa,emptyStateStyle:Oe,groups:O,groupConfig:v,style:Ve,...ha},ga)=>{const ba=e=>({Edit:Za,Delete:Xa,Visibility:tt,View:tt,MoreVert:Pe,More:Pe})[e]||Pe,[fa,Ne]=c.useState(1),[V,ya]=c.useState(ye),$e=_!==void 0?_:fa,[xa,va]=c.useState(""),[wa,Ta]=c.useState("none"),N=L==="server"?na||"":xa,j=L==="server"?oa||"none":wa,[S,$]=c.useState([]),[Ce,Be]=c.useState(null),[Se,ke]=c.useState(!1),[He,Ca]=c.useState({}),[Sa,Ge]=c.useState(!1),[ka,Ue]=c.useState(!1),[Q,Da]=c.useState({}),[oe,Ea]=c.useState(()=>{const e={};return g.forEach(t=>{if(t.width){let r=typeof t.width=="number"?t.width:parseInt(t.width,10);const i=t.minWidth?typeof t.minWidth=="number"?t.minWidth:parseInt(t.minWidth,10):0,o=t.maxWidth?typeof t.maxWidth=="number"?t.maxWidth:parseInt(t.maxWidth,10):1/0,l=Math.max(i,Math.min(o,r));e[t.id]=l}}),e}),[Je,Wa]=c.useState(()=>O?new Set(O.filter(e=>e.defaultExpanded!==!1).map(e=>e.id)):new Set),X=c.useRef(new Map),P=c.useRef(null),De=c.useRef(!1),[B,Ee]=c.useState(()=>{const e=[];return E&&e.push({id:"checkbox",label:"Select",visible:!0,locked:!0,order:0}),g.forEach((t,r)=>{e.push({id:t.id,label:t.label,visible:t.visible!==!1,locked:t.locked||!1,order:E?r+1:r})}),q&&e.push({id:"actions",label:"Actions",visible:!0,locked:!1,order:e.length}),e}),ie=(e,t)=>{const r=B.filter(s=>s.locked&&s.id!=="checkbox").length;if(t&&r>=3){Ge(!0),setTimeout(()=>Ge(!1),3e3);return}const l=B.map(s=>s.id===e?{...s,locked:t}:s).sort((s,d)=>s.id==="checkbox"?-1:d.id==="checkbox"?1:s.locked&&!d.locked?-1:!s.locked&&d.locked?1:s.order-d.order).map((s,d)=>({...s,order:d}));Ee(l)},ja=e=>{L==="client"&&P.current&&Array.from(P.current.querySelectorAll("tr")).forEach((i,o)=>{var s;const l=(s=H[o])==null?void 0:s[p];if(l){const d=i.getBoundingClientRect().top;X.current.set(l,d)}});let t;N===e?t=j==="asc"?"desc":j==="desc"?"none":"asc":t="asc",L==="server"&&ze?ze(e,t):(va(e),Ta(t)),Ue(!0),setTimeout(()=>Ue(!1),50)},_e=e=>{const t=e?T.map(r=>r[p]):[];$(t),h==null||h(t)},Pa=(e,t,r,i=!1)=>{if(t)if(i&&Ce!==null){const o=Math.min(Ce,r),l=Math.max(Ce,r),s=H.slice(o,l+1).map(m=>m[p]),d=Array.from(new Set([...S,...s]));$(d),h==null||h(d)}else{const o=[...S,e];$(o),Be(r),h==null||h(o)}else{const o=S.filter(l=>l!==e);$(o),Be(r),h==null||h(o)}},Ma=(e,t)=>{Da(r=>({...r,[e]:t})),Ye(1)},Ye=e=>{I==="server"&&R?R(e,V):Ne(e)},Aa=e=>{I==="server"&&R?R(1,e):(Ne(1),ya(e))},Ia=(e,t)=>{Ea(r=>({...r,[e]:t}))},Ra=e=>{if(Wa(t=>{const r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r}),v!=null&&v.onGroupToggle){const t=!Je.has(e);v.onGroupToggle(e,t)}},za=(e,t)=>{const r=w==null?void 0:w.find(o=>o.id===e);if(!r)return;const i=r.rows.map(o=>o[p]);$(t?o=>[...new Set([...o,...i])]:o=>o.filter(l=>!i.includes(l)))},qa=e=>e.rows.length===0?!1:e.rows.map(r=>r[p]).every(r=>S.includes(r)),Qe=(e,t)=>{const r=e[p],i=S.includes(r),o=s=>{W&&W(e,t,s)},l=a.jsx(M.Fragment,{children:x.map((s,d)=>{const m=g.find(k=>k.id===s.id),b=s.locked,G=He[s.id],je=d===0;if(s.id==="checkbox")return a.jsx(le,{selected:i,locked:b,leftOffset:G,"data-locked":b,isFirstColumn:je,width:48,children:a.jsx("div",{onClick:k=>{k.stopPropagation(),Pa(r,!i,t,k.shiftKey)},style:{cursor:"pointer",display:"inline-flex"},children:a.jsx(nr,{checked:i,onChange:()=>{}})})},s.id);if(s.id==="actions")return a.jsx(le,{selected:i,locked:b,leftOffset:G,"data-locked":b,width:120,children:a.jsx(mr,{children:Y.map((k,Ua)=>{const Ja=ba(k.icon);return a.jsx(cr,{onClick:_a=>{_a.stopPropagation(),k.onClick(e),re&&re(k.label,e)},"aria-label":k.label,title:k.label,children:a.jsx(Ja,{})},Ua)})})},s.id);if(!m)return null;const et=m.accessor?typeof m.accessor=="function"?m.accessor(e):e[m.accessor]:e[m.id];return m.renderCell?a.jsx(le,{selected:i,locked:b,leftOffset:G,"data-locked":b,isFirstColumn:je,width:oe[m.id]||m.width,children:m.renderCell(et,e,t)},s.id):a.jsx(le,{selected:i,locked:b,leftOffset:G,"data-locked":b,isFirstColumn:je,width:oe[m.id]||m.width,children:String(et||"")},s.id)})});return ka?a.jsx(lr,{$animationDelay:t*30,onClick:o,style:{cursor:W?"pointer":"default"},children:l},r):a.jsx("tr",{onClick:o,style:{cursor:W?"pointer":"default"},children:l},r)},Xe=(e,t,r)=>{if(L!=="client"||!t||r==="none")return e;const i=g.find(o=>o.id===t);return i?[...e].sort((o,l)=>{const s=i.accessor?typeof i.accessor=="function"?i.accessor(o):o[i.accessor]:o[t],d=i.accessor?typeof i.accessor=="function"?i.accessor(l):l[i.accessor]:l[t];return s<d?r==="asc"?-1:1:s>d?r==="asc"?1:-1:0}):e},Ze=(e,t)=>{let r=[...e];return Object.entries(t).forEach(([i,o])=>{if(o){const l=g.find(s=>s.id===i);l&&(r=r.filter(s=>{const d=l.accessor?typeof l.accessor=="function"?l.accessor(s):s[l.accessor]:s[i];return String(d).toLowerCase().includes(o.toLowerCase())}))}}),r},w=c.useMemo(()=>!O||O.length===0?null:O.map(e=>{let t=Ze(e.rows,Q),r=Xe(t,N,j);return{...e,rows:r}}),[O,g,Q,N,j]),T=c.useMemo(()=>w?w.flatMap(e=>e.rows):u,[w,u]),We=c.useMemo(()=>{if(w)return T;let e=Ze(u,Q);return e=Xe(e,N,j),e},[w,T,u,Q,N,j]),La=c.useMemo(()=>T.length===0?!1:T.every(e=>S.includes(e[p])),[T,S,p]),Fa=c.useMemo(()=>{if(T.length===0||S.length===0)return!1;const e=T.filter(t=>S.includes(t[p])).length;return e>0&&e<T.length},[T,S,p]),se=I==="server"?xe||0:We.length,Oa=A?Math.ceil(se/V):1,Ke=A?($e-1)*V:0,Va=A?Ke+V:se,H=I==="server"?We:We.slice(Ke,Va),x=B.filter(e=>e.visible).sort((e,t)=>e.order-t.order);c.useLayoutEffect(()=>{if(L!=="server"||!P.current)return;Array.from(P.current.querySelectorAll("tr")).forEach((t,r)=>{var o;const i=(o=H[r])==null?void 0:o[p];if(i&&!X.current.has(i)){const l=t.getBoundingClientRect().top;X.current.set(i,l)}})}),c.useLayoutEffect(()=>{if(De.current||!P.current)return;const e=Array.from(P.current.querySelectorAll("tr"));let t=!1;e.forEach((r,i)=>{var d;const o=(d=H[i])==null?void 0:d[p];if(!o)return;const l=X.current.get(o),s=r.getBoundingClientRect().top;if(l!==void 0&&l!==s){const m=l-s,b=1e3,G=Math.max(-b,Math.min(b,m));t=!0,r.style.transform=`translateY(${G}px)`,r.style.transition="none",r.offsetHeight,requestAnimationFrame(()=>{r.style.transition="transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",r.style.transform="translateY(0)"})}X.current.set(o,s)}),t&&(De.current=!0,setTimeout(()=>{De.current=!1},600))},[H,p]),c.useEffect(()=>{const e=document.querySelector("[data-scroll-container]");if(!e)return;const t=()=>{const o=e.querySelectorAll("thead th"),l={};let s=0;x.forEach((d,m)=>{if(d.locked&&o[m]){l[d.id]=s;const b=o[m].offsetWidth;s+=b}}),Ca(l)};t();const r=new ResizeObserver(()=>{t()});return e.querySelectorAll("thead th").forEach(o=>r.observe(o)),()=>{r.disconnect()}},[x.map(e=>e.id+e.locked).join(",")]),c.useEffect(()=>{const e=document.querySelector("[data-scroll-container]");if(!e)return;const t=()=>{const r=e.scrollLeft;e.querySelectorAll('[data-locked="true"]').forEach(o=>{r>0?o.classList.add("is-stuck"):o.classList.remove("is-stuck")})};return e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)},[]),c.useEffect(()=>{const e=t=>{t.key==="Escape"&&Se&&ke(!1),(t.ctrlKey||t.metaKey)&&t.key==="a"&&E&&u.length>0&&(t.preventDefault(),_e(!0))};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[Se,E,u.length]);const Na=()=>a.jsxs(Ae,{"data-scroll-container":!0,$maxHeight:F,children:[a.jsx(Ie,{$hasMaxHeight:!!F,children:a.jsx("thead",{children:a.jsx("tr",{children:x.map((e,t)=>{const r=g.find(o=>o.id===e.id),i=t===0?"left":t===x.length-1?"right":void 0;return a.jsx(Z,{label:(r==null?void 0:r.label)||e.id,variant:"default",side:i,showColumnMenu:!1},e.id)})})})}),a.jsx(nt,{className:pa,style:Ga,role:"status","aria-live":"polite",children:ma??a.jsxs(ot,{children:[a.jsx(it,{children:a.jsx(Qa,{sx:{fontSize:64,color:"text.secondary"}})}),a.jsxs(st,{children:[a.jsx(f,{variant:"headingL",weight:"semibold",as:"h3",children:Qt}),a.jsx(f,{variant:"body",color:"secondary",children:Xt})]}),ve&&ne&&a.jsx(D,{variant:"primary",size:"medium",onClick:ne,children:ve})]})})]}),$a=()=>a.jsxs(Ae,{"data-scroll-container":!0,$maxHeight:F,children:[a.jsx(Ie,{$hasMaxHeight:!!F,children:a.jsx("thead",{children:a.jsx("tr",{children:x.map((e,t)=>{const r=g.find(o=>o.id===e.id),i=t===0?"left":t===x.length-1?"right":void 0;return a.jsx(Z,{label:(r==null?void 0:r.label)||e.id,variant:"default",side:i,showColumnMenu:!1},e.id)})})})}),a.jsx(nt,{role:"alert","aria-live":"assertive",children:ca??a.jsxs(ot,{children:[a.jsx(it,{children:la??a.jsx(Ya,{sx:{fontSize:64,color:"error.main"}})}),a.jsxs(st,{children:[a.jsx(f,{variant:"headingL",weight:"semibold",as:"h3",color:"error",children:ia||"Something went wrong"}),a.jsx(f,{variant:"body",color:"secondary",children:sa||"There was a problem loading the table data."})]}),(Le||ne)&&a.jsx(D,{variant:"primary",size:"medium",onClick:Le??ne,children:da||ve||"Retry"})]})})]}),Ba=typeof Ve=="object"?Ve:void 0,Ha=typeof Fe=="object"?Fe:void 0,Ga=typeof Oe=="object"?Oe:void 0;return a.jsx(n,{ref:ga,style:Ba,...ha,children:a.jsxs(ir,{className:Zt,role:"region","aria-label":Te||"Data table","aria-busy":we,"aria-invalid":qe,children:[Re||(Kt?a.jsx(Yt,{title:Te,showDropdown:!1,dropdownOptions:[],showDownload:aa,onDownload:ra,showFilter:ta,onFilter:()=>{},showSettings:z,onSettingsClick:()=>ke(!0),showGlobalSearch:ea}):null),qe?$a():T.length===0&&!we?Na():a.jsx(Ae,{"data-scroll-container":!0,$maxHeight:F,className:ua,style:Ha,children:a.jsxs(Ie,{$hasMaxHeight:!!F,role:"table","aria-label":Te||"Data table","aria-rowcount":se,children:[a.jsx("colgroup",{children:x.map(e=>{const t=g.find(o=>o.id===e.id),r=oe[e.id];let i;if(r)i=`${r}px`;else if(t!=null&&t.width){let o=typeof t.width=="number"?t.width:parseInt(t.width,10);const l=t.minWidth?typeof t.minWidth=="number"?t.minWidth:parseInt(t.minWidth,10):0,s=t.maxWidth?typeof t.maxWidth=="number"?t.maxWidth:parseInt(t.maxWidth,10):1/0;o=Math.max(l,Math.min(s,o)),i=`${o}px`}else e.id==="checkbox"?i="48px":e.id==="actions"?i="120px":i="150px";return a.jsx("col",{width:i,style:{width:i}},e.id)})}),a.jsx("thead",{children:a.jsx("tr",{children:x.map((e,t)=>{const r=g.find(d=>d.id===e.id),i=e.locked,o=He[e.id],l=t===0?"left":t===x.length-1?"right":void 0;if(e.id==="checkbox")return a.jsx(Z,{label:"",variant:"default",side:l,locked:i,leftOffset:o,"data-locked":i,showCheckbox:!0,checked:La,indeterminate:Fa,onCheckChange:_e,onPinChange:d=>{d==="none"&&ie("checkbox",!1)},showColumnMenu:!1},e.id);if(e.id==="actions")return a.jsx(Z,{label:"Actions",variant:"default",side:l,locked:i,leftOffset:o,"data-locked":i,onPinChange:d=>{d==="none"&&ie("actions",!1)},showColumnMenu:!1},e.id);if(!r)return null;const s=r.searchable?"search":r.resizable&&!i?"resizeable-locked":r.resizable?"resizeable":"default";return a.jsx(Z,{label:r.label,variant:s,side:l,sortable:r.sortable,sortDirection:N===r.id?j:"none",onSort:r.sortable?()=>ja(r.id):void 0,searchValue:Q[r.id]||"",onSearchChange:r.searchable?d=>Ma(r.id,d):void 0,resizable:r.resizable&&!i,onResize:r.resizable&&!i?d=>Ia(r.id,d):void 0,width:oe[r.id]||r.width,minWidth:r.minWidth,maxWidth:r.maxWidth,initialWidth:typeof r.width=="number"?r.width:void 0,onPinChange:d=>{d==="none"?ie(r.id,!1):ie(r.id,!0)},locked:i,leftOffset:o,"data-locked":i,showColumnMenu:!1},e.id)})})}),a.jsx("tbody",{ref:P,children:we?Array.from({length:V}).map((e,t)=>a.jsx(sr,{children:x.map(r=>a.jsx(dr,{children:r.id==="checkbox"?a.jsx(de,{width:"20px",height:"20px"}):r.id==="actions"?a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx(de,{width:"32px",height:"32px"}),a.jsx(de,{width:"32px",height:"32px"})]}):a.jsx(de,{width:"80%"})},r.id))},`skeleton-${t}`)):w&&w.length>0?w.map(e=>{const t=Je.has(e.id);return a.jsxs(M.Fragment,{children:[a.jsx(tr,{groupName:e.groupName,groupDescription:e.groupDescription,isExpanded:t,onToggle:()=>Ra(e.id),colSpan:x.length,expandPosition:(v==null?void 0:v.expandPosition)||"left",customContent:v!=null&&v.renderGroupContent?v.renderGroupContent(e):e.customContent,className:e.className,style:e.style,showCheckbox:E,isSelected:qa(e),onCheckboxChange:r=>za(e.id,r)}),t&&e.rows.map((r,i)=>Qe(r,i))]},e.id)}):H.map((e,t)=>Qe(e,t))})]})}),A&&a.jsx(rr,{currentPage:$e,totalPages:Oa,totalItems:se,itemsPerPage:V,onPageChange:Ye,onItemsPerPageChange:Aa}),z&&a.jsx(a.Fragment,{children:a.jsx(ar,{isOpen:Se,onClose:()=>ke(!1),columns:B.filter(e=>e.id!=="checkbox"),lockWarning:Sa,onColumnsChange:e=>{const t=B.find(o=>o.id==="checkbox"),r=t?[t,...e]:e;if(e.some(o=>{const l=B.find(s=>s.id===o.id);return l&&l.locked!==o.locked})){const l=r.sort((s,d)=>s.id==="checkbox"?-1:d.id==="checkbox"?1:s.locked&&!d.locked?-1:!s.locked&&d.locked?1:s.order-d.order).map((s,d)=>({...s,order:d}));Ee(l)}else Ee(r)}})})]})})});U.displayName="Table";U.__docgenInfo={description:"",methods:[],displayName:"Table",props:{as:{required:!1,tsType:{name:"ElementType"},description:"Polymorphic component type (default: 'div')",defaultValue:{value:"'div'",computed:!1}},data:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"Array of data objects to display",defaultValue:{value:"[]",computed:!1}},columns:{required:!1,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:"Column configuration",defaultValue:{value:"[]",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"Enable row selection",defaultValue:{value:"false",computed:!1}},paginated:{required:!1,tsType:{name:"boolean"},description:"Enable pagination",defaultValue:{value:"true",computed:!1}},itemsPerPage:{required:!1,tsType:{name:"number"},description:"Items per page (default: 10)",defaultValue:{value:"10",computed:!1}},paginationMode:{required:!1,tsType:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}]},description:"Pagination mode: 'client' (default) or 'server'. When 'server', use onPageChange callback",defaultValue:{value:"'client'",computed:!1}},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number, itemsPerPage: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"itemsPerPage"}],return:{name:"void"}}},description:"Callback for page change (server-side pagination). Called with (page, itemsPerPage)"},currentPage:{required:!1,tsType:{name:"number"},description:"Current page (controlled, for server-side pagination)"},totalItems:{required:!1,tsType:{name:"number"},description:"Total number of items (required for server-side pagination)"},showSettings:{required:!1,tsType:{name:"boolean"},description:"Enable column settings",defaultValue:{value:"true",computed:!1}},showActions:{required:!1,tsType:{name:"boolean"},description:"Enable actions column",defaultValue:{value:"false",computed:!1}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: string;
  label: string;
  onClick: (row: any) => void;
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(row: any) => void",signature:{arguments:[{type:{name:"any"},name:"row"}],return:{name:"void"}},required:!0}}]}}],raw:`Array<{
  icon: string;
  label: string;
  onClick: (row: any) => void;
}>`},description:"Custom actions for each row",defaultValue:{value:"[]",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedIds"}],return:{name:"void"}}},description:"Callback when rows are selected"},onRowAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: string, row: any) => void",signature:{arguments:[{type:{name:"string"},name:"action"},{type:{name:"any"},name:"row"}],return:{name:"void"}}},description:"Callback when row action is triggered"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: any, rowIndex: number, event: React.MouseEvent<HTMLTableRowElement>) => void",signature:{arguments:[{type:{name:"any"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableRowElement>",elements:[{name:"HTMLTableRowElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when a row is clicked"},rowKey:{required:!1,tsType:{name:"string"},description:"Custom row key accessor (default: 'id')",defaultValue:{value:"'id'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Custom empty state message",defaultValue:{value:"'No data available'",computed:!1}},emptyIcon:{required:!1,tsType:{name:"string"},description:"Empty state icon name (Material Icons)",defaultValue:{value:"'CloudOff'",computed:!1}},emptyTitle:{required:!1,tsType:{name:"string"},description:"Empty state title",defaultValue:{value:"'No data available'",computed:!1}},emptyDescription:{required:!1,tsType:{name:"string"},description:"Empty state description",defaultValue:{value:"'There are no items to display'",computed:!1}},emptyActionLabel:{required:!1,tsType:{name:"string"},description:"Empty state action button label"},onEmptyAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Empty state action button handler"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"},toolbar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom toolbar content - when provided, renders instead of default toolbar"},title:{required:!1,tsType:{name:"string"},description:"Table title"},description:{required:!1,tsType:{name:"string"},description:"Table description"},showToolbar:{required:!1,tsType:{name:"boolean"},description:"Show toolbar",defaultValue:{value:"true",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search in toolbar",defaultValue:{value:"false",computed:!1}},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button in toolbar",defaultValue:{value:"true",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button in toolbar",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"},sortMode:{required:!1,tsType:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}]},description:"Sorting mode: 'client' (default) or 'server'",defaultValue:{value:"'client'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnId: string, direction: 'asc' | 'desc' | 'none') => void",signature:{arguments:[{type:{name:"string"},name:"columnId"},{type:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sort changes (only used when sortMode='server')"},sortColumn:{required:!1,tsType:{name:"string"},description:"Controlled sort column (only used when sortMode='server')"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"Controlled sort direction (only used when sortMode='server')"},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height for table body (enables fixed header with internal scroll). Example: '400px', '50vh'"},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Invalid/error state",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error state title/heading (default: 'Something went wrong')"},errorDescription:{required:!1,tsType:{name:"string"},description:"Error state description text (default: 'There was a problem loading the table data.')"},errorIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error state icon – any ReactNode (e.g. custom SVG, MUI icon). Defaults to ErrorIcon."},errorActionLabel:{required:!1,tsType:{name:"string"},description:"Error state action button label (default: 'Retry')"},onErrorAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Error state action button handler. When provided, shows the button."},errorStateContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Fully custom error state content.
When provided, replaces the entire error state UI (icon, text, button).
Ideal for API-driven content or completely custom layouts.`},emptyStateContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Fully custom empty state content.
When provided, replaces the entire empty state UI (icon, text, button).
Ideal for API-driven content or completely custom layouts.`},scrollContainerClassName:{required:!1,tsType:{name:"string"},description:"Override className for scroll container"},scrollContainerStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for scroll container"},emptyStateClassName:{required:!1,tsType:{name:"string"},description:"Override className for empty state"},emptyStateStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for empty state"},groups:{required:!1,tsType:{name:"Array",elements:[{name:"TableGroup"}],raw:"TableGroup[]"},description:"Grouped data - when provided, data prop is ignored"},groupConfig:{required:!1,tsType:{name:"TableGroupConfig"},description:"Group configuration"}}};const qr={title:"Components/Table",component:U,parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:600},description:{component:`
Data table with sorting, filtering, pagination, and column resizing.

**Features:** Sorting (Client/Server) • Filtering • Pagination (Client/Server) • Row selection • Column resizing • Column menu • Column pinning • Custom cell rendering • Always-visible scrollbar

## Quick Start
\`\`\`tsx
import { Table } from '@ajaysoni7832/lean-ids-components';

<Table 
  data={data} 
  columns={columns}
  paginated
  selectable
/>
\`\`\`

## Server-Side Pagination
\`\`\`tsx
<Table
  data={currentPageData}
  columns={columns}
  paginated
  paginationMode="server"
  currentPage={page}
  totalItems={1000}
  onPageChange={(page, itemsPerPage) => {
    // Fetch data for the new page
    fetchData(page, itemsPerPage);
  }}
/>
\`\`\`

## Server-Side Sorting
\`\`\`tsx
<Table
  data={sortedData}
  columns={columns}
  sortMode="server"
  sortColumn={sortColumn}
  sortDirection={sortDirection}
  onSort={(columnId, direction) => {
    // Fetch sorted data from server
    fetchSortedData(columnId, direction);
  }}
/>
\`\`\`

See stories below for detailed examples.
        `}}},argTypes:{data:{control:!1,description:"Array of data objects to display",table:{category:"Data & Columns"}},columns:{control:!1,description:"Column configuration array (TableColumn[])",table:{category:"Data & Columns"}},rowKey:{control:"text",description:'Row key accessor (default: "id")',table:{category:"Data & Columns"}},selectable:{control:"boolean",description:"Enable row selection with checkboxes",table:{category:"Selection"}},onRowSelect:{action:"rowsSelected",description:"Callback when rows are selected. Receives array of selected row IDs",table:{category:"Selection"}},onRowClick:{action:"rowClicked",description:"Callback when a row is clicked. Receives (row, rowIndex, event)",table:{category:"Selection"}},paginated:{control:"boolean",description:"Enable pagination",table:{category:"Pagination"}},itemsPerPage:{control:"number",description:"Items per page (default: 10)",table:{category:"Pagination"}},paginationMode:{control:"select",options:["client","server"],description:'Pagination mode: "client" (default) handles data slicing automatically, "server" expects pre-paginated data and calls onPageChange callback',table:{category:"Pagination"}},onPageChange:{action:"pageChanged",description:'Callback for server-side pagination. Called with (page, itemsPerPage) when page changes. Use with paginationMode="server"',table:{category:"Pagination"}},currentPage:{control:"number",description:'Controlled current page (for server-side pagination). Use with paginationMode="server"',table:{category:"Pagination"}},totalItems:{control:"number",description:'Total number of items across all pages (required for server-side pagination). Use with paginationMode="server"',table:{category:"Pagination"}},sortMode:{control:"select",options:["client","server"],description:'Sorting mode: "client" (default) sorts data automatically, "server" calls onSort callback for server-side sorting',table:{category:"Sorting"}},onSort:{action:"sorted",description:'Callback for server-side sorting. Called with (columnId, direction) when sort changes. Use with sortMode="server"',table:{category:"Sorting"}},sortColumn:{control:"text",description:'Controlled sort column (for server-side sorting). Use with sortMode="server"',table:{category:"Sorting"}},sortDirection:{control:"select",options:["asc","desc","none"],description:'Controlled sort direction (for server-side sorting). Use with sortMode="server"',table:{category:"Sorting"}},showSettings:{control:"boolean",description:"Show column settings modal",table:{category:"Layout & Display"}},showToolbar:{control:"boolean",description:"Show default toolbar",table:{category:"Layout & Display"}},toolbar:{control:!1,description:"Custom toolbar content (replaces default toolbar)",table:{category:"Layout & Display"}},title:{control:"text",description:"Table title (used in default toolbar)",table:{category:"Layout & Display"}},description:{control:"text",description:"Table description (used in default toolbar)",table:{category:"Layout & Display"}},showGlobalSearch:{control:"boolean",description:"Show global search in toolbar",table:{category:"Layout & Display"}},showFilter:{control:"boolean",description:"Show filter button in toolbar",table:{category:"Layout & Display"}},showDownload:{control:"boolean",description:"Show download button in toolbar",table:{category:"Layout & Display"}},onDownload:{action:"downloaded",description:"Download button click handler",table:{category:"Layout & Display"}},maxHeight:{control:"text",description:'Max height for table body (e.g., "400px", "50vh"). Enables fixed header with scrollable body and always-visible 8px scrollbar',table:{category:"Layout & Display"}},showActions:{control:"boolean",description:"Enable actions column",table:{category:"Actions"}},actions:{control:!1,description:"Custom row actions array",table:{category:"Actions"}},onRowAction:{action:"actionTriggered",description:"Callback when row action is triggered",table:{category:"Actions"}},loading:{control:"boolean",description:"Loading state - shows skeleton rows",table:{category:"States"}},isInvalid:{control:"boolean",description:"Error/invalid state",table:{category:"States"}},errorMessage:{control:"text",description:"Error message to display when isInvalid is true",table:{category:"States"}},emptyMessage:{control:"text",description:"Custom empty state message",table:{category:"Empty State"}},emptyIcon:{control:"text",description:"Empty state icon name (Material Icons)",table:{category:"Empty State"}},emptyTitle:{control:"text",description:"Empty state title",table:{category:"Empty State"}},emptyDescription:{control:"text",description:"Empty state description",table:{category:"Empty State"}},emptyActionLabel:{control:"text",description:"Empty state action button label",table:{category:"Empty State"}},onEmptyAction:{action:"emptyActionClicked",description:"Empty state action button handler",table:{category:"Empty State"}},className:{control:"text",description:"Custom CSS class",table:{category:"Customization"}},scrollContainerClassName:{control:"text",description:"Override className for scroll container",table:{category:"Customization"}},scrollContainerStyle:{control:"object",description:"Override style for scroll container",table:{category:"Customization"}},emptyStateClassName:{control:"text",description:"Override className for empty state",table:{category:"Customization"}},emptyStateStyle:{control:"object",description:"Override style for empty state",table:{category:"Customization"}}},tags:["autodocs"]},C=[{id:"1",name:"Alice Johnson",email:"alice.johnson@company.com",role:"Senior Developer",department:"Engineering",status:"Active",salary:125e3,avatar:"https://i.pravatar.cc/32?img=1"},{id:"2",name:"Bob Smith",email:"bob.smith@company.com",role:"Product Manager",department:"Product",status:"Active",salary:115e3,avatar:"https://i.pravatar.cc/32?img=2"},{id:"3",name:"Carol Williams",email:"carol.williams@company.com",role:"UX Designer",department:"Design",status:"Active",salary:95e3,avatar:"https://i.pravatar.cc/32?img=3"},{id:"4",name:"David Brown",email:"david.brown@company.com",role:"DevOps Engineer",department:"Engineering",status:"Inactive",salary:11e4,avatar:"https://i.pravatar.cc/32?img=4"},{id:"5",name:"Eve Davis",email:"eve.davis@company.com",role:"Marketing Manager",department:"Marketing",status:"Active",salary:105e3,avatar:"https://i.pravatar.cc/32?img=5"},{id:"6",name:"Frank Miller",email:"frank.miller@company.com",role:"Backend Developer",department:"Engineering",status:"Active",salary:118e3,avatar:"https://i.pravatar.cc/32?img=6"},{id:"7",name:"Grace Lee",email:"grace.lee@company.com",role:"Data Analyst",department:"Analytics",status:"Active",salary:98e3,avatar:"https://i.pravatar.cc/32?img=7"},{id:"8",name:"Henry Wilson",email:"henry.wilson@company.com",role:"QA Engineer",department:"Engineering",status:"Inactive",salary:92e3,avatar:"https://i.pravatar.cc/32?img=8"},{id:"9",name:"Iris Martinez",email:"iris.martinez@company.com",role:"Frontend Developer",department:"Engineering",status:"Active",salary:112e3,avatar:"https://i.pravatar.cc/32?img=9"},{id:"10",name:"Jack Anderson",email:"jack.anderson@company.com",role:"Sales Manager",department:"Sales",status:"Active",salary:108e3,avatar:"https://i.pravatar.cc/32?img=10"},{id:"11",name:"Karen Taylor",email:"karen.taylor@company.com",role:"HR Manager",department:"Human Resources",status:"Active",salary:95e3,avatar:"https://i.pravatar.cc/32?img=11"},{id:"12",name:"Leo Thomas",email:"leo.thomas@company.com",role:"Security Engineer",department:"Engineering",status:"Active",salary:125e3,avatar:"https://i.pravatar.cc/32?img=12"},{id:"13",name:"Maria Garcia",email:"maria.garcia@company.com",role:"Content Writer",department:"Marketing",status:"Active",salary:75e3,avatar:"https://i.pravatar.cc/32?img=13"},{id:"14",name:"Nathan Moore",email:"nathan.moore@company.com",role:"System Administrator",department:"IT",status:"Inactive",salary:88e3,avatar:"https://i.pravatar.cc/32?img=14"},{id:"15",name:"Olivia Jackson",email:"olivia.jackson@company.com",role:"UI Designer",department:"Design",status:"Active",salary:102e3,avatar:"https://i.pravatar.cc/32?img=15"},{id:"16",name:"Paul White",email:"paul.white@company.com",role:"Business Analyst",department:"Product",status:"Active",salary:96e3,avatar:"https://i.pravatar.cc/32?img=16"},{id:"17",name:"Quinn Harris",email:"quinn.harris@company.com",role:"Mobile Developer",department:"Engineering",status:"Active",salary:115e3,avatar:"https://i.pravatar.cc/32?img=17"},{id:"18",name:"Rachel Clark",email:"rachel.clark@company.com",role:"Scrum Master",department:"Product",status:"Active",salary:105e3,avatar:"https://i.pravatar.cc/32?img=18"},{id:"19",name:"Samuel Lewis",email:"samuel.lewis@company.com",role:"Cloud Architect",department:"Engineering",status:"Active",salary:135e3,avatar:"https://i.pravatar.cc/32?img=19"},{id:"20",name:"Tina Robinson",email:"tina.robinson@company.com",role:"Customer Success Manager",department:"Support",status:"Active",salary:85e3,avatar:"https://i.pravatar.cc/32?img=20"}],J=[{id:"id",label:"ID",width:80,minWidth:60,maxWidth:100},{id:"name",label:"Name",width:200,minWidth:150,maxWidth:300},{id:"email",label:"Email",width:250,minWidth:200,maxWidth:400},{id:"role",label:"Role",width:180,minWidth:150,maxWidth:250}],fe=[{id:"id",label:"ID",sortable:!0,resizable:!0,width:80,minWidth:60,maxWidth:100},{id:"user",label:"User",sortable:!0,resizable:!0,width:250,minWidth:200,maxWidth:400,accessor:n=>n.name,renderCell:(n,u)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("img",{src:u.avatar,alt:u.name,style:{width:32,height:32,borderRadius:"50%"}}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[a.jsx(f,{variant:"body",weight:"semibold",children:u.name}),a.jsx(f,{variant:"caption",color:"secondary",children:u.role})]})]})},{id:"email",label:"Email",accessor:"email",sortable:!0,searchable:!0,resizable:!0,width:250,minWidth:200,maxWidth:400},{id:"department",label:"Department",accessor:"department",sortable:!0,resizable:!0,width:150,minWidth:120,maxWidth:200},{id:"status",label:"Status",accessor:"status",sortable:!0,resizable:!0,width:120,minWidth:100,maxWidth:150,renderCell:n=>a.jsx(or,{label:n,type:n==="Active"?"success":"error",styleVariant:"default"})},{id:"salary",label:"Salary",accessor:"salary",sortable:!0,resizable:!0,width:120,minWidth:100,maxWidth:180,renderCell:n=>`$${n.toLocaleString()}`}],K={args:{data:C,columns:fe,selectable:!0,paginated:!0,itemsPerPage:10,showSettings:!0,showActions:!0,showToolbar:!0,title:"Employee Directory",description:"Manage and view all employee information",showGlobalSearch:!0,showFilter:!0,showDownload:!0,actions:[{icon:"Edit",label:"Edit",onClick:n=>{}},{icon:"Delete",label:"Delete",onClick:n=>{}}],onRowSelect:n=>{}},parameters:{docs:{story:{inline:!1,iframeHeight:600}}}},ee={args:{data:C,columns:fe,selectable:!0,paginated:!0,itemsPerPage:20,maxHeight:"500px",showToolbar:!0,title:"Fixed Header Table",description:"Header stays fixed while body scrolls. Try changing items per page!",showSettings:!0},parameters:{docs:{description:{story:"The `maxHeight` prop enables a fixed header with internal scrolling. The table height stays constant regardless of how many items per page you select. Perfect for dashboards and constrained layouts."},story:{inline:!1,iframeHeight:700}}}},te={args:{data:C,columns:fe,selectable:!0,paginated:!0,itemsPerPage:10,toolbar:a.jsxs(Yt,{children:[a.jsx(rt,{align:"left",children:a.jsx(Ka,{children:"Custom Employee Directory"})}),a.jsx(rt,{align:"right",children:a.jsxs(er,{children:[a.jsx(D,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:a.jsx(at,{name:"Download",size:"medium"}),onClick:()=>{},"aria-label":"Export",children:"Export"}),a.jsx(D,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:a.jsx(at,{name:"FilterAlt",size:"medium"}),onClick:()=>{},"aria-label":"Filter",children:"Filter"}),a.jsx(D,{variant:"primary",size:"medium",onClick:()=>{},children:"Add Employee"})]})})]})},parameters:{docs:{description:{story:"Example of a custom toolbar using `TableToolbar`, `TableToolbarSection`, `TableToolbarTitle`, and `TableToolbarActions` helper components. These components provide a consistent layout and styling while allowing full customization. You can add any Lean DS components (Button, Input, Select, etc.) inside the toolbar sections."},story:{inline:!1,iframeHeight:600}}}},ae={render:n=>{const[u,g]=M.useState(C),[E,A]=M.useState(""),[ye,I]=M.useState("none"),[R,_]=M.useState(!1),xe=async(z,q)=>{if(A(z),I(q),_(!0),await new Promise(Y=>setTimeout(Y,500)),q==="none")g([...C]);else{const Y=[...C].sort((h,re)=>{const W=h[z],p=re[z];return W<p?q==="asc"?-1:1:W>p?q==="asc"?1:-1:0});g(Y)}_(!1)};return a.jsx(U,{...n,data:u,loading:R,sortMode:"server",sortColumn:E,sortDirection:ye,onSort:xe})},args:{columns:fe,paginated:!0,itemsPerPage:10,title:"Server-Side Sorting Example",description:'Click column headers to sort. Data is "fetched" from server.'},parameters:{docs:{description:{story:'Example of server-side sorting. The parent component manages `sortColumn` and `sortDirection` state, and fetches sorted data when `onSort` is called. Set `sortMode="server"` to enable this mode.'},story:{inline:!1,iframeHeight:600}}}},ce={args:{data:[],columns:J,showToolbar:!0,title:"Tabular View",emptyIcon:"CloudOff",emptyTitle:"Not able to sync",emptyDescription:"Please check your internet connection",emptyActionLabel:"Refresh",onEmptyAction:()=>{}}},me={args:{data:C,columns:J,showToolbar:!0,title:"Employee Directory",isInvalid:!0,errorMessage:"Failed to load data."},parameters:{docs:{description:{story:"Table with error state. Use `isInvalid` and `errorMessage` props to display error messages."}}}},ue={args:{data:C,columns:J,showToolbar:!0,title:"Employee Directory",loading:!0},parameters:{docs:{description:{story:"Table in loading state. Shows skeleton rows while data is being fetched."}}}},pe={render:n=>{const u=M.useRef(null);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx(D,{variant:"secondary",size:"small",onClick:()=>{u.current&&u.current.scrollIntoView({behavior:"smooth"})},children:"Scroll to Table"}),a.jsx(D,{variant:"secondary",size:"small",onClick:()=>{},children:"Log Dimensions"})]}),a.jsx(U,{ref:u,...n})]})},args:{data:C,columns:J,showToolbar:!0,title:"ForwardRef Example"},parameters:{docs:{description:{story:"Table with forwardRef support. The ref is forwarded to the root container element, allowing parent components to access the DOM node."}}}},he={render:()=>{const n=[{id:"fixed",label:"Fixed Width",accessor:"name",width:150,minWidth:150,maxWidth:150,resizable:!0},{id:"flexible",label:"Flexible (150-400px)",accessor:"email",width:250,minWidth:150,maxWidth:400,resizable:!0},{id:"minOnly",label:"Min Only (200px+)",accessor:"department",minWidth:200,resizable:!0},{id:"maxOnly",label:"Max Only (≤300px)",accessor:"role",maxWidth:300,resizable:!0}];return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsx(f,{variant:"headingM",weight:"semibold",children:"Column Width Control Demo"}),a.jsx(f,{variant:"body",color:"secondary",children:"Try resizing the columns by dragging their borders. Each column has different width constraints:"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"16px",background:"#f9fafb",borderRadius:"8px"},children:[a.jsx(f,{variant:"body",weight:"semibold",children:"Column Configurations:"}),a.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[a.jsx("li",{children:a.jsxs(f,{variant:"body",children:[a.jsx("strong",{children:"Fixed Width:"})," width=150, minWidth=150, maxWidth=150 (cannot resize)"]})}),a.jsx("li",{children:a.jsxs(f,{variant:"body",children:[a.jsx("strong",{children:"Flexible:"})," width=250, minWidth=150, maxWidth=400 (can resize between 150-400px)"]})}),a.jsx("li",{children:a.jsxs(f,{variant:"body",children:[a.jsx("strong",{children:"Min Only:"})," minWidth=200 (can grow indefinitely, but not below 200px)"]})}),a.jsx("li",{children:a.jsxs(f,{variant:"body",children:[a.jsx("strong",{children:"Max Only:"})," maxWidth=300 (can shrink, but not above 300px)"]})})]})]})]}),a.jsx(U,{data:C.slice(0,5),columns:n})]})},parameters:{docs:{description:{story:`
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
        `}}}},ge={args:{as:"section",data:C,columns:J,showToolbar:!0,title:"Polymorphic Table"},parameters:{docs:{description:{story:"Table rendered as a different HTML element using the `as` prop. In this example, the table is rendered as a `<section>` instead of a `<div>`."}}}},be={args:{columns:J.map(n=>({...n,sortable:!0})),groups:[{id:"active",groupName:"Active Claims",groupDescription:"Claims currently being processed",defaultExpanded:!0,rows:[{id:"1",name:"John Doe",email:"john@example.com",role:"Developer",status:"Active"},{id:"2",name:"Jane Smith",email:"jane@example.com",role:"Designer",status:"Active"},{id:"3",name:"Bob Johnson",email:"bob@example.com",role:"Manager",status:"Active"}],customContent:a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(Me,{label:"3 items",size:"small"}),a.jsx(D,{variant:"tertiary",size:"small",children:"View All"})]})},{id:"pending",groupName:"Pending Review",groupDescription:"Awaiting approval",defaultExpanded:!0,rows:[{id:"4",name:"Alice Williams",email:"alice@example.com",role:"Developer",status:"Pending"},{id:"5",name:"Charlie Brown",email:"charlie@example.com",role:"Designer",status:"Pending"}],customContent:a.jsx(Me,{label:"2 items",size:"small"})},{id:"completed",groupName:"Completed",groupDescription:"Successfully processed",defaultExpanded:!1,rows:[{id:"6",name:"David Lee",email:"david@example.com",role:"Manager",status:"Completed"},{id:"7",name:"Emma Davis",email:"emma@example.com",role:"Developer",status:"Completed"},{id:"8",name:"Frank Miller",email:"frank@example.com",role:"Designer",status:"Completed"},{id:"9",name:"Grace Wilson",email:"grace@example.com",role:"Manager",status:"Completed"}],customContent:a.jsx(Me,{label:"4 items",size:"small"})}],groupConfig:{expandPosition:"left",onGroupToggle:(n,u)=>{}},showToolbar:!0,title:"Grouped Table",selectable:!0},parameters:{docs:{description:{story:`
Group table rows into collapsible sections with custom headers.

**Features:**
- Expand/collapse groups
- Custom content slot (chips, buttons, etc.)
- Group-level selection
- Configurable expand button position
- Callbacks for group toggle events

**Usage:**
\`\`\`tsx
<Table
  groups={[
    {
      id: 'group1',
      groupName: 'Section Name',
      groupDescription: 'Short description',
      rows: [...],
      defaultExpanded: true,
      customContent: <Badge label="5 items" />,
    },
  ]}
  groupConfig={{
    expandPosition: 'left',
    onGroupToggle: (id, expanded) => {},
  }}
/>
\`\`\`
        `}}}};var lt,dt,ct,mt,ut;K.parameters={...K.parameters,docs:{...(lt=K.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
      onClick: row => {}
    }, {
      icon: 'Delete',
      label: 'Delete',
      onClick: row => {}
    }],
    onRowSelect: ids => {}
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(ct=(dt=K.parameters)==null?void 0:dt.docs)==null?void 0:ct.source},description:{story:`Complete table with all features enabled - matches CompleteExample design

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

**Note:** Column resizing is fully interactive in both Canvas and Docs views.`,...(ut=(mt=K.parameters)==null?void 0:mt.docs)==null?void 0:ut.description}}};var pt,ht,gt,bt,ft;ee.parameters={...ee.parameters,docs:{...(pt=ee.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(gt=(ht=ee.parameters)==null?void 0:ht.docs)==null?void 0:gt.source},description:{story:`Fixed Header with Scroll - demonstrates maxHeight prop for fixed header with internal scrolling

When you set maxHeight, the table header stays fixed and only the body scrolls.
This is useful for tables with many rows where you want to keep the header visible.`,...(ft=(bt=ee.parameters)==null?void 0:bt.docs)==null?void 0:ft.description}}};var yt,xt,vt,wt,Tt;te.parameters={...te.parameters,docs:{...(yt=te.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
            <Button variant="secondary" size="medium" showLabel={false} leadingIcon={<Icon name="Download" size="medium" />} onClick={() => {}} aria-label="Export">
              Export
            </Button>
            <Button variant="secondary" size="medium" showLabel={false} leadingIcon={<Icon name="FilterAlt" size="medium" />} onClick={() => {}} aria-label="Filter">
              Filter
            </Button>
            <Button variant="primary" size="medium" onClick={() => {}}>
              Add Employee
            </Button>
          </TableToolbarActions>
        </TableToolbarSection>
      </TableToolbar>
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a custom toolbar using \`TableToolbar\`, \`TableToolbarSection\`, \`TableToolbarTitle\`, and \`TableToolbarActions\` helper components. These components provide a consistent layout and styling while allowing full customization. You can add any Lean DS components (Button, Input, Select, etc.) inside the toolbar sections.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(vt=(xt=te.parameters)==null?void 0:xt.docs)==null?void 0:vt.source},description:{story:`Custom Toolbar - demonstrates how to create a fully custom toolbar using TableToolbar helper components

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
\`\`\``,...(Tt=(wt=te.parameters)==null?void 0:wt.docs)==null?void 0:Tt.description}}};var Ct,St,kt,Dt,Et;ae.parameters={...ae.parameters,docs:{...(Ct=ae.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(kt=(St=ae.parameters)==null?void 0:St.docs)==null?void 0:kt.source},description:{story:`Empty state with action button
Server-Side Sorting - demonstrates how to implement server-side sorting

In this example, the parent component manages the sort state and simulates
a server request. In a real application, you would fetch sorted data from your API.`,...(Et=(Dt=ae.parameters)==null?void 0:Dt.docs)==null?void 0:Et.description}}};var Wt,jt,Pt;ce.parameters={...ce.parameters,docs:{...(Wt=ce.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: basicColumns,
    showToolbar: true,
    title: 'Tabular View',
    emptyIcon: 'CloudOff',
    emptyTitle: 'Not able to sync',
    emptyDescription: 'Please check your internet connection',
    emptyActionLabel: 'Refresh',
    onEmptyAction: () => {}
  }
}`,...(Pt=(jt=ce.parameters)==null?void 0:jt.docs)==null?void 0:Pt.source}}};var Mt,At,It;me.parameters={...me.parameters,docs:{...(Mt=me.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'Employee Directory',
    isInvalid: true,
    errorMessage: 'Failed to load data.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with error state. Use \`isInvalid\` and \`errorMessage\` props to display error messages.'
      }
    }
  }
}`,...(It=(At=me.parameters)==null?void 0:At.docs)==null?void 0:It.source}}};var Rt,zt,qt;ue.parameters={...ue.parameters,docs:{...(Rt=ue.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(qt=(zt=ue.parameters)==null?void 0:zt.docs)==null?void 0:qt.source}}};var Lt,Ft,Ot;pe.parameters={...pe.parameters,docs:{...(Lt=pe.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
          }
        }}>
            Scroll to Table
          </Button>
          <Button variant="secondary" size="small" onClick={() => {}}>
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
}`,...(Ot=(Ft=pe.parameters)==null?void 0:Ft.docs)==null?void 0:Ot.source}}};var Vt,Nt,$t;he.parameters={...he.parameters,docs:{...(Vt=he.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...($t=(Nt=he.parameters)==null?void 0:Nt.docs)==null?void 0:$t.source}}};var Bt,Ht,Gt;ge.parameters={...ge.parameters,docs:{...(Bt=ge.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Gt=(Ht=ge.parameters)==null?void 0:Ht.docs)==null?void 0:Gt.source}}};var Ut,Jt,_t;be.parameters={...be.parameters,docs:{...(Ut=be.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
  args: {
    columns: basicColumns.map(col => ({
      ...col,
      sortable: true
    })),
    groups: [{
      id: 'active',
      groupName: 'Active Claims',
      groupDescription: 'Claims currently being processed',
      defaultExpanded: true,
      rows: [{
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Developer',
        status: 'Active'
      }, {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'Designer',
        status: 'Active'
      }, {
        id: '3',
        name: 'Bob Johnson',
        email: 'bob@example.com',
        role: 'Manager',
        status: 'Active'
      }],
      customContent: <div style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
            <Chip label="3 items" size="small" />
            <Button variant="tertiary" size="small">View All</Button>
          </div>
    }, {
      id: 'pending',
      groupName: 'Pending Review',
      groupDescription: 'Awaiting approval',
      defaultExpanded: true,
      rows: [{
        id: '4',
        name: 'Alice Williams',
        email: 'alice@example.com',
        role: 'Developer',
        status: 'Pending'
      }, {
        id: '5',
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        role: 'Designer',
        status: 'Pending'
      }],
      customContent: <Chip label="2 items" size="small" />
    }, {
      id: 'completed',
      groupName: 'Completed',
      groupDescription: 'Successfully processed',
      defaultExpanded: false,
      rows: [{
        id: '6',
        name: 'David Lee',
        email: 'david@example.com',
        role: 'Manager',
        status: 'Completed'
      }, {
        id: '7',
        name: 'Emma Davis',
        email: 'emma@example.com',
        role: 'Developer',
        status: 'Completed'
      }, {
        id: '8',
        name: 'Frank Miller',
        email: 'frank@example.com',
        role: 'Designer',
        status: 'Completed'
      }, {
        id: '9',
        name: 'Grace Wilson',
        email: 'grace@example.com',
        role: 'Manager',
        status: 'Completed'
      }],
      customContent: <Chip label="4 items" size="small" />
    }],
    groupConfig: {
      expandPosition: 'left',
      onGroupToggle: (groupId, isExpanded) => {}
    },
    showToolbar: true,
    title: 'Grouped Table',
    selectable: true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Group table rows into collapsible sections with custom headers.

**Features:**
- Expand/collapse groups
- Custom content slot (chips, buttons, etc.)
- Group-level selection
- Configurable expand button position
- Callbacks for group toggle events

**Usage:**
\\\`\\\`\\\`tsx
<Table
  groups={[
    {
      id: 'group1',
      groupName: 'Section Name',
      groupDescription: 'Short description',
      rows: [...],
      defaultExpanded: true,
      customContent: <Badge label="5 items" />,
    },
  ]}
  groupConfig={{
    expandPosition: 'left',
    onGroupToggle: (id, expanded) => {},
  }}
/>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(_t=(Jt=be.parameters)==null?void 0:Jt.docs)==null?void 0:_t.source}}};const Lr=["Complete","FixedHeaderScroll","CustomToolbar","ServerSideSorting","Empty","ErrorState","LoadingState","WithForwardRef","ColumnWidthControl","PolymorphicAs","WithGrouping"];export{he as ColumnWidthControl,K as Complete,te as CustomToolbar,ce as Empty,me as ErrorState,ee as FixedHeaderScroll,ue as LoadingState,ge as PolymorphicAs,ae as ServerSideSorting,pe as WithForwardRef,be as WithGrouping,Lr as __namedExportsOrder,qr as default};
