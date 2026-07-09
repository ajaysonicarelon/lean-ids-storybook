import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{r as h,R as tt}from"./index-B0WjJBI_.js";import{g as b}from"./styled-components.browser.esm-DVcPNpfh.js";import{T as at,b as be,c as st,a as ge}from"./TableToolbar-RY4TaKDr.js";import{a as we,E as ot}from"./ExpandMore-GavyM6T7.js";import{D as Te,F as rt,C as nt,L as it,a as lt}from"./Icon-D1GQI8nt.js";import{I as dt}from"./InlineMessage-MDOeQZie.js";import{S as ct}from"./Select-2I4xB7Ap.js";import{C as ut}from"./Chip-YwhtXZXO.js";import{C as mt}from"./Checkbox-CWZMyd52.js";import{P as pt}from"./Pagination-BbvT3jVa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-DSAVxi_S.js";import"./Button-CnBDXljr.js";import"./InputField-B2MYZsZr.js";import"./FieldImportance-BcdMchzX.js";import"./HelpingText-DBmPat_K.js";import"./RadioButton-BHbwfvFd.js";const ft=b.th`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[7]};
  background-color: ${({theme:e})=>e.colors.palette.primary[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  text-align: left;
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  position: ${({$locked:e})=>e?"sticky":"relative"};
  left: ${({$leftOffset:e})=>e!==void 0?`${e}px`:"auto"};
  z-index: ${({$locked:e})=>e?3:1};
  transition: box-shadow 0.2s ease;

  &.is-stuck {
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  }
`,ht=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[8]};
  width: 100%;
`,bt=b.input`
  width: 100%;
  height: 32px;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-family: ${({theme:e})=>e.fonts.primary};
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.palette.primary[500]};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.palette.neutral[500]};
  }
`,Ce=b.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.palette.primary[600]};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,gt=()=>a.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Ct=()=>a.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),_e=({searchValue:e="",searchPlaceholder:v="Search",onSearchChange:L,locked:G=!1,leftOffset:O=0,width:M,className:H,showClearFilter:P=!0,onClearFilter:T,showAdvancedFilter:j=!1,onAdvancedFilter:$,customActions:D=[]})=>{const y=S=>{L&&L(S.target.value)},w=S=>{S.stopPropagation(),T?T():L&&L("")},R=S=>{S.stopPropagation(),$&&$()};return a.jsx(ft,{$locked:G,$leftOffset:O,style:{width:M},className:H,"data-locked":G?"true":void 0,children:a.jsxs(ht,{children:[a.jsx(bt,{type:"text",value:e,placeholder:v,onChange:y,onClick:S=>S.stopPropagation()}),P&&a.jsx(Ce,{type:"button",onClick:w,title:"Clear filter",children:a.jsx(gt,{})}),j&&a.jsx(Ce,{type:"button",onClick:R,title:"Advanced filter",children:a.jsx(Ct,{})}),D.map((S,N)=>a.jsx(Ce,{type:"button",onClick:F=>{F.stopPropagation(),S.onClick()},title:S.title,children:S.icon},N))]})})};_e.__docgenInfo={description:"",methods:[],displayName:"TableSubHeader",props:{searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},showClearFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClearFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showAdvancedFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onAdvancedFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customActions:{required:!1,tsType:{name:"Array",elements:[{name:"FilterAction"}],raw:"FilterAction[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const vt=b.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 100%;
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  flex-shrink: 0;
`,$e=b.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[7]} 0;
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
  }
`,De=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
`,Ae=b.div`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
`,yt=b.div`
  position: absolute;
  top: 0;
  right: 30px;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
`,xt=b.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  background-color: ${({theme:e})=>e.colors.palette.neutral[200]};
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
`,kt=b.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[7]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  background-color: ${({theme:e})=>e.colors.palette.neutral[200]};
`,ve=b.button`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  
  ${({$variant:e,theme:v})=>e==="primary"?`
        background-color: ${v.colors.palette.primary[600]};
        color: white;
        border-color: ${v.colors.palette.primary[600]};
        &:hover {
          background-color: ${v.colors.palette.primary[700]};
        }
      `:e==="danger"?`
        background-color: transparent;
        color: ${v.colors.palette.error[600]};
        border-color: ${v.colors.palette.error[600]};
        &:hover {
          background-color: ${v.colors.palette.error[50]};
        }
      `:`
      background-color: transparent;
      color: ${v.colors.palette.neutral[700]};
      &:hover {
        background-color: ${v.colors.palette.neutral[100]};
      }
    `}
`,St=b.div`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[7]};
  overflow-y: auto;
  background-color: ${({theme:e})=>e.colors.palette.neutral[200]};
`,wt=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,Je=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  opacity: ${({$isDragging:e})=>e?.5:1};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"grab"};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
  }
`,Tt=b(Je)`
  margin-left: ${({theme:e})=>e.spacing[7]};
  background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
`,je=b.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[700]};
  flex-shrink: 0;

  &:hover {
    color: ${({theme:e})=>e.colors.palette.neutral[900]};
  }
`,$t=b.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,Dt=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({$isLocked:e,theme:v})=>e?v.colors.palette.neutral[400]:v.colors.palette.neutral[600]};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"grab"};
  flex-shrink: 0;
`,At=b.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  flex-shrink: 0;

  &:hover {
    color: ${({theme:e})=>e.colors.palette.neutral[900]};
  }
`,jt=b.span`
  flex: 1;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ue=({columns:e,onColumnsChange:v,onFilterToggle:L,showFilters:G=!1,lockWarning:O=!1,className:M,tableData:H=[],columnFilters:P=[],onFiltersChange:T})=>{const[j,$]=h.useState(null),[D,y]=h.useState(e),[w,R]=h.useState(null),[S,N]=h.useState(!1),[F,V]=h.useState(new Set),[ue,Q]=h.useState(null);h.useEffect(()=>{y(e)},[e]),h.useEffect(()=>{if(O){N(!0);const o=setTimeout(()=>N(!1),3e3);return()=>clearTimeout(o)}},[O]);const ee=()=>{$(j==="columns"?null:"columns")},B=()=>{$(j==="filters"?null:"filters"),L&&L()},me=()=>{const o=e.map((r,i)=>r.subColumns?{...r,visible:!0,locked:!1,order:i,subColumns:r.subColumns.map((c,f)=>({...c,visible:!0,locked:!1}))}:{...r,visible:!0,locked:!1,order:i});y(o),V(new Set),T&&T([])},te=()=>{v(D),$(null)},ae=()=>{y(e),$(null)},I=o=>{V(r=>{const i=new Set(r);return i.has(o)?i.delete(o):i.add(o),i})},X=o=>{y(r=>r.map(i=>i.id===o?i.subColumns?{...i,visible:!i.visible,subColumns:i.subColumns.map(c=>({...c,visible:!i.visible}))}:{...i,visible:!i.visible}:i.subColumns?{...i,subColumns:i.subColumns.map(c=>c.id===o?{...c,visible:!c.visible}:c)}:i))},Y=o=>{const r=D.find(d=>d.id===o);if(!r)return;const i=D.filter(d=>d.locked&&d.id!=="checkbox").length;if(!r.locked&&i>=3){N(!0),setTimeout(()=>N(!1),3e3);return}const C=D.map(d=>d.id===o?d.subColumns?{...d,locked:!d.locked,subColumns:d.subColumns.map(m=>({...m,locked:!d.locked}))}:{...d,locked:!d.locked}:d).sort((d,m)=>d.id==="checkbox"?-1:m.id==="checkbox"?1:d.locked&&!m.locked?-1:!d.locked&&m.locked?1:d.order-m.order).map((d,m)=>({...d,order:m}));y(C)},pe=(o,r)=>{const i=D.filter(c=>c.id!=="checkbox")[o];i&&i.locked||R(o)},se=(o,r,i)=>{var _,oe;if(o.preventDefault(),w===null||w===r)return;const c=D.filter(q=>q.id!=="checkbox");if((_=c[r])!=null&&_.locked||(oe=c[w])!=null&&oe.locked)return;const f=D.find(q=>q.id==="checkbox"),C=[...c],d=C[w];C.splice(w,1),C.splice(r,0,d);const m=C.map((q,re)=>({...q,order:f?re+1:re})),z=f?[{...f,order:0},...m]:m;y(z),R(r)},fe=(o,r)=>{R(r)},K=(o,r,i)=>{o.preventDefault(),!(w===null||w===i)&&(y(c=>c.map(f=>{if(f.id===r&&f.subColumns){const C=[...f.subColumns],d=C[w];return C.splice(w,1),C.splice(i,0,d),{...f,subColumns:C}}return f})),R(i))},he=()=>{R(null)},W=(o,r,i)=>{const c=o.subColumns&&o.subColumns.length>0,f=F.has(o.id),C=!!i,d=C?Tt:Je;return a.jsxs(tt.Fragment,{children:[a.jsxs(d,{draggable:!o.locked&&!c,onDragStart:()=>{C&&i?fe(i,r):c||pe(r)},onDragOver:m=>{C&&i?K(m,i,r):c||se(m,r)},onDragEnd:he,onMouseEnter:()=>Q(o.id),onMouseLeave:()=>Q(null),$isDragging:w===r,$isLocked:o.locked,children:[c?a.jsx(je,{onClick:()=>I(o.id),children:f?a.jsx(ot,{}):a.jsx(nt,{})}):a.jsx(je,{style:{visibility:"hidden"}}),a.jsx($t,{children:a.jsx(mt,{checked:o.visible!==!1,onChange:()=>X(o.id)})}),a.jsx(Dt,{$isLocked:o.locked||c,children:a.jsx(Te,{style:{fontSize:"16px"}})}),!C&&a.jsx(At,{onClick:()=>Y(o.id),children:o.locked?a.jsx(it,{style:{fontSize:"16px"}}):a.jsx(lt,{style:{fontSize:"16px"}})}),a.jsx(jt,{children:o.label})]}),c&&f&&o.subColumns.map((m,z)=>W(m,z,o.id))]},o.id)};return a.jsxs(a.Fragment,{children:[a.jsxs(vt,{className:M,children:[a.jsxs($e,{onClick:ee,$active:j==="columns",children:[a.jsx(De,{children:j==="columns"?a.jsx(we,{style:{fontSize:"16px"}}):a.jsx(Te,{style:{fontSize:"16px"}})}),a.jsx(Ae,{children:"Columns"})]}),a.jsxs($e,{onClick:B,$active:j==="filters",children:[a.jsx(De,{children:a.jsx(rt,{style:{fontSize:"16px"}})}),a.jsx(Ae,{children:"Filters"})]})]}),j&&a.jsx(yt,{children:a.jsxs(xt,{children:[a.jsxs(kt,{children:[a.jsx(ve,{onClick:me,$variant:"danger",children:"Reset"}),a.jsx(ve,{onClick:ae,$variant:"secondary",children:"Cancel"}),a.jsx(ve,{onClick:te,$variant:"primary",children:"Apply"})]}),a.jsxs(St,{children:[S&&a.jsx("div",{style:{marginBottom:"16px"},children:a.jsx(dt,{type:"warning",style:"accentBorder",text:"Maximum columns reached",descriptionText:"You can only freeze any 3 columns at a time.",showLeadingIcon:!0,showTrailingIcon:!1,action:!1,link:!1})}),j==="columns"&&a.jsx(wt,{children:D.filter(o=>o.id!=="checkbox").map((o,r)=>W(o,r))}),j==="filters"&&a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:H.length===0?a.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666",fontStyle:"italic"},children:"No data available for filtering"}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666",fontStyle:"italic"},children:"Select values to filter table rows"}),P.length>0&&T&&a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"12px",background:"#f9fafb",borderRadius:"4px",border:"1px solid #e5e7eb"},children:P.map(o=>{const r=D.find(c=>c.id===o.columnId?!0:c.subColumns?c.subColumns.some(f=>f.id===o.columnId):!1);let i=o.columnId;if(r){if(r.id===o.columnId)i=r.label;else if(r.subColumns){const c=r.subColumns.find(f=>f.id===o.columnId);c&&(i=c.label)}}return a.jsx(ut,{label:`${i}: ${o.value}`,size:"small",variant:"filled",type:"default",trailingIcon:a.jsx(we,{style:{fontSize:"14px"}}),onTrailingIconClick:()=>{const c=P.filter(f=>f.columnId!==o.columnId);T(c)}},o.columnId)})})]}),(()=>{const o=[];return D.forEach(r=>{r.subColumns&&r.subColumns.length>0?o.push(...r.subColumns):o.push(r)}),o.filter(r=>r.id!=="checkbox"&&r.visible!==!1).map(r=>{const i=new Set;H.forEach(d=>{const m=d[r.id];m!=null&&m!==""&&i.add(String(m))});const c=[{value:"",label:"All"},...Array.from(i).sort().map(d=>({value:d,label:d}))],f=P.find(d=>d.columnId===r.id),C=(f==null?void 0:f.value)||"";return a.jsx(ct,{label:r.label,placeholder:`Filter by ${r.label}`,options:c,value:C,onChange:d=>{if(T){const m=Array.isArray(d)?d[0]:d,z=P.filter(_=>_.columnId!==r.id);m&&z.push({columnId:r.id,value:m}),T(z)}},size:"small",searchable:!0,showSelectionIndicator:!1},r.id)})})()]})})]})]})})]})};Ue.__docgenInfo={description:"",methods:[],displayName:"TableSidePanel",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:""},onColumnsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(columns: ColumnConfig[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},name:"columns"}],return:{name:"void"}}},description:""},onFilterToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showFilters:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lockWarning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},tableData:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"",defaultValue:{value:"[]",computed:!1}},columnFilters:{required:!1,tsType:{name:"Array",elements:[{name:"ColumnFilter"}],raw:"ColumnFilter[]"},description:"",defaultValue:{value:"[]",computed:!1}},onFiltersChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(filters: ColumnFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ColumnFilter"}],raw:"ColumnFilter[]"},name:"filters"}],return:{name:"void"}}},description:""}}};const Nt=b.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
`,It=b.tr`
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: slideIn 0.3s ease-out;
  animation-delay: ${({$animationDelay:e})=>e}ms;
  animation-fill-mode: backwards;
`,Lt=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};
  width: 100%;
`,Pt=b.div`
  display: flex;
  gap: 0;
  width: 100%;
  position: relative;
`,Rt=b.div`
  overflow-x: auto;
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  border-radius: ${({$hasSidePanel:e})=>e?"8px 0 0 8px":"8px"};
  position: relative;
  flex: 1;
  min-height: 500px;
`,Mt=()=>[{id:"1234567890",claimId:"1234567890",firstName:"John",lastName:"Doe",userDetails:"Associate Name",nrCodes:"NR001",paidAmount:"$4,680",acrLoadDates:"March 12, 2025",contact:"(555) 112.3334",amount:"$4,680",avatar:"https://i.pravatar.cc/32?img=1",city:"New York",state:"NY",status:"Approved",priority:"High"},{id:"1234567891",claimId:"1234567891",firstName:"Jane",lastName:"Smith",userDetails:"Manager",nrCodes:"NR002",paidAmount:"$10,293",acrLoadDates:"March 15, 2025",contact:"(555) 800.0000",amount:"$10,293",avatar:"https://i.pravatar.cc/32?img=2",city:"Los Angeles",state:"CA",status:"Pending",priority:"Medium"},{id:"1234567892",claimId:"1234567892",firstName:"Michael",lastName:"Johnson",userDetails:"Senior Associate",nrCodes:"NR003",paidAmount:"$7,450",acrLoadDates:"March 18, 2025",contact:"(555) 234.5678",amount:"$7,450",avatar:"https://i.pravatar.cc/32?img=3",city:"Chicago",state:"IL",status:"Approved",priority:"Low"},{id:"1234567893",claimId:"1234567893",firstName:"Emily",lastName:"Brown",userDetails:"Analyst",nrCodes:"NR004",paidAmount:"$5,820",acrLoadDates:"March 20, 2025",contact:"(555) 345.6789",amount:"$5,820",avatar:"https://i.pravatar.cc/32?img=4",city:"Houston",state:"TX",status:"Rejected",priority:"High"},{id:"1234567894",claimId:"1234567894",firstName:"David",lastName:"Wilson",userDetails:"Supervisor",nrCodes:"NR005",paidAmount:"$12,100",acrLoadDates:"March 22, 2025",contact:"(555) 456.7890",amount:"$12,100",avatar:"https://i.pravatar.cc/32?img=5",city:"Phoenix",state:"AZ",status:"Approved",priority:"Medium"},{id:"1234567895",claimId:"1234567895",firstName:"Sarah",lastName:"Martinez",userDetails:"Associate Name",nrCodes:"NR006",paidAmount:"$8,900",acrLoadDates:"March 25, 2025",contact:"(555) 567.8901",amount:"$8,900",avatar:"https://i.pravatar.cc/32?img=6",city:"Philadelphia",state:"PA",status:"Pending",priority:"High"},{id:"1234567896",claimId:"1234567896",firstName:"James",lastName:"Anderson",userDetails:"Lead",nrCodes:"NR007",paidAmount:"$15,200",acrLoadDates:"March 28, 2025",contact:"(555) 678.9012",amount:"$15,200",avatar:"https://i.pravatar.cc/32?img=7",city:"San Antonio",state:"TX",status:"Approved",priority:"Low"},{id:"1234567897",claimId:"1234567897",firstName:"Linda",lastName:"Taylor",userDetails:"Manager",nrCodes:"NR008",paidAmount:"$6,750",acrLoadDates:"March 30, 2025",contact:"(555) 789.0123",amount:"$6,750",avatar:"https://i.pravatar.cc/32?img=8",city:"San Diego",state:"CA",status:"Pending",priority:"Medium"},{id:"1234567898",claimId:"1234567898",firstName:"Robert",lastName:"Thomas",userDetails:"Associate Name",nrCodes:"NR009",paidAmount:"$9,300",acrLoadDates:"April 2, 2025",contact:"(555) 890.1234",amount:"$9,300",avatar:"https://i.pravatar.cc/32?img=9",city:"Dallas",state:"TX",status:"Approved",priority:"High"},{id:"1234567899",claimId:"1234567899",firstName:"Patricia",lastName:"Jackson",userDetails:"Senior Associate",nrCodes:"NR010",paidAmount:"$11,500",acrLoadDates:"April 5, 2025",contact:"(555) 901.2345",amount:"$11,500",avatar:"https://i.pravatar.cc/32?img=10",city:"San Jose",state:"CA",status:"Rejected",priority:"Low"},{id:"1234567900",claimId:"1234567900",firstName:"Christopher",lastName:"White",userDetails:"Analyst",nrCodes:"NR011",paidAmount:"$7,200",acrLoadDates:"April 8, 2025",contact:"(555) 012.3456",amount:"$7,200",avatar:"https://i.pravatar.cc/32?img=11",city:"Austin",state:"TX",status:"Approved",priority:"Medium"},{id:"1234567901",claimId:"1234567901",firstName:"Barbara",lastName:"Harris",userDetails:"Supervisor",nrCodes:"NR012",paidAmount:"$13,800",acrLoadDates:"April 10, 2025",contact:"(555) 123.4567",amount:"$13,800",avatar:"https://i.pravatar.cc/32?img=12",city:"Jacksonville",state:"FL",status:"Pending",priority:"High"},{id:"1234567902",claimId:"1234567902",firstName:"Daniel",lastName:"Martin",userDetails:"Associate Name",nrCodes:"NR013",paidAmount:"$5,600",acrLoadDates:"April 12, 2025",contact:"(555) 234.5678",amount:"$5,600",avatar:"https://i.pravatar.cc/32?img=13",city:"Fort Worth",state:"TX",status:"Approved",priority:"Low"},{id:"1234567903",claimId:"1234567903",firstName:"Nancy",lastName:"Thompson",userDetails:"Lead",nrCodes:"NR014",paidAmount:"$10,900",acrLoadDates:"April 15, 2025",contact:"(555) 345.6789",amount:"$10,900",avatar:"https://i.pravatar.cc/32?img=14",city:"Columbus",state:"OH",status:"Pending",priority:"Medium"},{id:"1234567904",claimId:"1234567904",firstName:"Matthew",lastName:"Garcia",userDetails:"Manager",nrCodes:"NR015",paidAmount:"$8,400",acrLoadDates:"April 18, 2025",contact:"(555) 456.7890",amount:"$8,400",avatar:"https://i.pravatar.cc/32?img=15",city:"Charlotte",state:"NC",status:"Approved",priority:"High"},{id:"1234567905",claimId:"1234567905",firstName:"Karen",lastName:"Martinez",userDetails:"Associate Name",nrCodes:"NR016",paidAmount:"$14,200",acrLoadDates:"April 20, 2025",contact:"(555) 567.8901",amount:"$14,200",avatar:"https://i.pravatar.cc/32?img=16",city:"San Francisco",state:"CA",status:"Rejected",priority:"Low"},{id:"1234567906",claimId:"1234567906",firstName:"Joseph",lastName:"Robinson",userDetails:"Senior Associate",nrCodes:"NR017",paidAmount:"$6,900",acrLoadDates:"April 22, 2025",contact:"(555) 678.9012",amount:"$6,900",avatar:"https://i.pravatar.cc/32?img=17",city:"Indianapolis",state:"IN",status:"Approved",priority:"Medium"},{id:"1234567907",claimId:"1234567907",firstName:"Lisa",lastName:"Clark",userDetails:"Analyst",nrCodes:"NR018",paidAmount:"$12,700",acrLoadDates:"April 25, 2025",contact:"(555) 789.0123",amount:"$12,700",avatar:"https://i.pravatar.cc/32?img=18",city:"Seattle",state:"WA",status:"Pending",priority:"High"},{id:"1234567908",claimId:"1234567908",firstName:"Thomas",lastName:"Rodriguez",userDetails:"Supervisor",nrCodes:"NR019",paidAmount:"$9,800",acrLoadDates:"April 28, 2025",contact:"(555) 890.1234",amount:"$9,800",avatar:"https://i.pravatar.cc/32?img=19",city:"Denver",state:"CO",status:"Approved",priority:"Low"},{id:"1234567909",claimId:"1234567909",firstName:"Betty",lastName:"Lewis",userDetails:"Associate Name",nrCodes:"NR020",paidAmount:"$11,100",acrLoadDates:"April 30, 2025",contact:"(555) 901.2345",amount:"$11,100",avatar:"https://i.pravatar.cc/32?img=20",city:"Boston",state:"MA",status:"Pending",priority:"Medium"}],Ft=()=>[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0},{id:"claimId",label:"Claim ID",visible:!0,locked:!1,order:1},{id:"firstName",label:"First Name",visible:!0,locked:!1,order:2},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:3},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:4},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:5},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:6},{id:"acrLoadDates",label:"ACR Load Dates",visible:!0,locked:!1,order:7},{id:"city",label:"City",visible:!0,locked:!1,order:8},{id:"state",label:"State",visible:!0,locked:!1,order:9},{id:"contact",label:"Contact",visible:!0,locked:!1,order:10},{id:"status",label:"Status",visible:!0,locked:!1,order:11},{id:"priority",label:"Priority",visible:!0,locked:!1,order:12},{id:"amount",label:"Amount",visible:!0,locked:!1,order:13}],Wt=()=>[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0},{id:"claimId",label:"User Details",visible:!0,locked:!1,order:1,subColumns:[{id:"firstName",label:"First Name",visible:!0,locked:!1,order:0,parentId:"claimId"},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:1,parentId:"claimId"}]},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:2},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:3},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:4},{id:"acrLoadDates",label:"ACR Load Dates",visible:!0,locked:!1,order:5},{id:"address",label:"Address",visible:!0,locked:!1,order:6,subColumns:[{id:"city",label:"City",visible:!0,locked:!1,order:0,parentId:"address"},{id:"state",label:"State",visible:!0,locked:!1,order:1,parentId:"address"}]},{id:"contact",label:"Contact",visible:!0,locked:!1,order:7},{id:"status",label:"Status",visible:!0,locked:!1,order:8},{id:"priority",label:"Priority",visible:!0,locked:!1,order:9},{id:"amount",label:"Amount",visible:!0,locked:!1,order:10}],Ge=({useSidePanel:e=!1,useModal:v=!1,showToolbar:L=!0,toolbarTitle:G="Data Table",initialColumns:O,onRowClick:M})=>{const[H,P]=h.useState(1),[T,j]=h.useState(10),[$,D]=h.useState(""),[y,w]=h.useState("none"),[R,S]=h.useState(!1),[N,F]=h.useState([]),[V,ue]=h.useState(null),[Q,ee]=h.useState(!1),[B,me]=h.useState({}),[te,ae]=h.useState(!1),[I,X]=h.useState(O||Ft()),[Y,pe]=h.useState(!1),[se,fe]=h.useState({}),[K,he]=h.useState(""),[W,o]=h.useState({}),[r,i]=h.useState(!1),[c,f]=h.useState([]),C=Mt(),d=t=>{const s=I.find(l=>l.id===t);if(!s)return;const n=I.filter(l=>l.locked&&l.id!=="checkbox").length;if(!s.locked&&n>=3){ae(!0),setTimeout(()=>ae(!1),3e3);return}const u=I.map(l=>l.id===t?l.subColumns?{...l,locked:!l.locked,subColumns:l.subColumns.map(k=>({...k,locked:!l.locked}))}:{...l,locked:!l.locked}:l),g=u.find(l=>l.id==="checkbox"),x=u.filter(l=>l.id!=="checkbox").sort((l,k)=>l.locked&&!k.locked?-1:!l.locked&&k.locked?1:l.order-k.order),A=g?[{...g,order:0},...x.map((l,k)=>({...l,order:k+1}))]:x.map((l,k)=>({...l,order:k}));X(A)},m=t=>{$===t?w(y==="asc"?"desc":y==="desc"?"none":"asc"):(D(t),w("asc")),i(!0),setTimeout(()=>i(!1),50)},z=t=>{S(t),F(t?Array.from({length:C.length},(s,n)=>n):[])},_=(t,s,n=!1)=>{if(s)if(n&&V!==null){const u=Math.min(V,t),g=Math.max(V,t),p=Array.from({length:g-u+1},(A,l)=>u+l),x=Array.from(new Set([...N,...p]));F(x)}else F([...N,t]),ue(t);else F(N.filter(u=>u!==t)),S(!1),ue(t)},oe=()=>{pe(!Y)},q=(t,s)=>{o(n=>({...n,[t]:s}))},re=(t,s)=>{fe(n=>({...n,[t]:s}))},ye=[...C.filter(t=>{if(K){const u=K.toLowerCase();if(!Object.values(t).some(p=>String(p||"").toLowerCase().includes(u)))return!1}return Object.entries(se).every(([u,g])=>{if(!g)return!0;const p=t[u];return String(p).toLowerCase().includes(g.toLowerCase())})?c.every(u=>{const g=t[u.columnId];return String(g)===u.value}):!1})].sort((t,s)=>{if(y==="none"||!$)return 0;let n=t[$],u=s[$];return n<u?y==="asc"?-1:1:n>u?y==="asc"?1:-1:0}),xe=ye.length,Xe=Math.ceil(xe/T),Z=(H-1)*T,Ye=Z+T,ke=ye.slice(Z,Ye),Ke=t=>{const s=[];return t.forEach(n=>{n.subColumns&&n.subColumns.length>0?s.push(...n.subColumns):s.push(n)}),s},J=I.filter(t=>t.visible),U=Ke(J);h.useEffect(()=>{const t=document.querySelector("[data-scroll-container]");if(!t)return;const s=()=>{const g=t.querySelector("tbody tr");if(!g)return;const p=g.querySelectorAll("td");if(!p||p.length===0)return;const x={};let A=0;U.forEach((l,k)=>{if(l.locked&&p[k]){x[l.id]=A;const E=p[k].offsetWidth;A+=E}}),J.forEach(l=>{if(l.subColumns&&l.subColumns.length>0&&(l.subColumns.some(E=>E.locked)||l.locked)){const E=l.subColumns[0];x[E.id]!==void 0&&(x[l.id]=x[E.id])}}),U.some(l=>l.id==="checkbox")&&(x.checkbox=0),me(x)};s();const n=new ResizeObserver(()=>{s()}),u=t.querySelector("tbody tr");return u&&u.querySelectorAll("td").forEach(p=>n.observe(p)),()=>{n.disconnect()}},[U.map(t=>t.id+t.locked).join(",")]);const Se=J.some(t=>t.subColumns&&t.subColumns.length>0),Ze=()=>a.jsxs(a.Fragment,{children:[a.jsx("tr",{children:J.map(t=>{const s=t.locked,n=B[t.id],u=t.subColumns&&t.subColumns.length>0?t.subColumns.length:1,g=Se&&(!t.subColumns||t.subColumns.length===0)?2:1;if(t.id==="checkbox")return a.jsx(ge,{label:"",variant:"default",showCheckbox:!0,checked:R,onCheckChange:z,locked:s,leftOffset:n,"data-locked":s,rowSpan:g,isChildColumn:!0},t.id);const x=W[t.id]||(typeof t.width=="number"?t.width:void 0);return a.jsx(ge,{label:t.label,variant:!s&&!t.subColumns?"resizeable-locked":"default",sortable:!t.subColumns||t.subColumns.length===0,sortDirection:$===t.id?y:"none",onSort:()=>m(t.id),locked:s,onLockToggle:()=>d(t.id),leftOffset:n,"data-locked":s,align:u>1?"center":"left",colSpan:u,rowSpan:g,resizable:!t.subColumns,onResize:t.subColumns?void 0:A=>q(t.id,A),width:x},t.id)})}),Se&&a.jsx("tr",{children:J.map(t=>!t.subColumns||t.subColumns.length===0?null:t.subColumns.map(s=>{const n=s.locked,u=B[s.id],p=W[s.id]||(typeof s.width=="number"?s.width:void 0);return a.jsx(ge,{label:s.label,variant:n?"default":"resizeable-locked",sortable:!0,sortDirection:$===s.id?y:"none",onSort:()=>m(s.id),locked:n,leftOffset:u,"data-locked":n,isChildColumn:!0,resizable:!0,onResize:x=>q(s.id,x),width:p},s.id)}))})]}),Qe=()=>Y?a.jsx("tr",{children:U.map(t=>{const s=t.locked,n=B[t.id],u=t.filterable!==!1;return t.id==="checkbox"?a.jsx("th",{style:{position:s?"sticky":"relative",left:s?`${n}px`:"auto",zIndex:s?3:1,background:"#f9fafb",borderBottom:"1px solid #e5e7eb",padding:"8px 12px",minWidth:"48px"},"data-locked":s?"true":void 0},t.id):u?a.jsx(_e,{searchValue:se[t.id]||"",searchPlaceholder:`Search ${t.label}`,onSearchChange:g=>re(t.id,g),locked:s,leftOffset:n,"data-locked":s},t.id):a.jsx("th",{style:{position:s?"sticky":"relative",left:s?`${n}px`:"auto",zIndex:s?3:1,background:"#f9fafb",borderBottom:"1px solid #e5e7eb",padding:"8px 12px"},"data-locked":s?"true":void 0},t.id)})}):null;return a.jsxs(Lt,{children:[L&&a.jsx(at,{title:G,showGlobalSearch:!0,globalSearchValue:K,onGlobalSearchChange:he,globalSearchPlaceholder:"Search across all columns...",showDropdown:!1,dropdownOptions:[],showDownload:!1,onDownload:()=>console.log("Download clicked"),showFilter:!1,onFilter:()=>console.log("Filter clicked"),showSettings:v,onSettingsClick:()=>ee(!0)}),a.jsxs(Pt,{$hasSidePanel:e,children:[a.jsx(Rt,{"data-scroll-container":!0,$hasSidePanel:e,children:a.jsxs(Nt,{children:[a.jsx("colgroup",{children:J.map(t=>{if(t.subColumns&&t.subColumns.length>0)return t.subColumns.map(s=>{const n=W[s.id],u=n?`${n}px`:s.width||t.width||"150px";return a.jsx("col",{style:{width:u}},s.id)});if(t.id==="checkbox"){const s=W[t.id],n=s?`${s}px`:t.width||"48px";return a.jsx("col",{style:{width:n}},t.id)}else{const s=W[t.id],n=s?`${s}px`:t.width||"150px";return a.jsx("col",{style:{width:n}},t.id)}})}),a.jsxs("thead",{children:[Ze(),Qe()]}),a.jsx("tbody",{children:ke.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:U.length,style:{textAlign:"center",padding:"48px 24px",color:"#666",fontSize:"14px",fontStyle:"italic"},children:"No data available"})}):ke.map((t,s)=>{const n=N.includes(Z+s),u=U.map((p,x)=>{const A=p.locked,l=B[p.id],k=x===0;return p.id==="checkbox"?a.jsx(be,{selected:n,locked:A,leftOffset:l,"data-locked":A,isFirstColumn:k,showCheckbox:!0,checked:n,onCheckChange:(E,et)=>_(Z+s,E,et)},p.id):p.id==="userDetails"?a.jsx(be,{selected:n,locked:A,leftOffset:l,"data-locked":A,isFirstColumn:k,children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("img",{src:t.avatar,alt:t.userDetails,style:{width:32,height:32,borderRadius:"50%"}}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:600},children:t.userDetails}),a.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Role"})]})]})},p.id):a.jsx(be,{selected:n,locked:A,leftOffset:l,"data-locked":A,isFirstColumn:k,children:t[p.id]},p.id)}),g=p=>{M&&M(t,Z+s,p)};return r?a.jsx(It,{$animationDelay:s*20,onClick:g,style:{cursor:M?"pointer":"default"},children:u},t.id):a.jsx("tr",{onClick:g,style:{cursor:M?"pointer":"default"},children:u},t.id)})})]})}),e&&a.jsx(Ue,{columns:I.filter(t=>t.id!=="checkbox"),onColumnsChange:t=>{const s=I.find(u=>u.id==="checkbox"),n=s?[s,...t]:t;X(n)},onFilterToggle:oe,showFilters:Y,lockWarning:te,tableData:C,columnFilters:c,onFiltersChange:f})]}),a.jsx(pt,{currentPage:H,totalPages:Xe,totalItems:xe,itemsPerPage:T,onPageChange:P,onItemsPerPageChange:j}),v&&a.jsx(st,{isOpen:Q,onClose:()=>ee(!1),columns:I.filter(t=>t.id!=="checkbox"),lockWarning:te,onColumnsChange:t=>{const s=I.find(u=>u.id==="checkbox"),n=s?[s,...t]:t;X(n)}})]})};Ge.__docgenInfo={description:"",methods:[],displayName:"AdvancedDataTable",props:{useSidePanel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},useModal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showToolbar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},toolbarTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Data Table'",computed:!1}},initialColumns:{required:!1,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: any, rowIndex: number, event: React.MouseEvent<HTMLTableRowElement>) => void",signature:{arguments:[{type:{name:"any"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableRowElement>",elements:[{name:"HTMLTableRowElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const sa={title:"Components/Table/Advanced Table",component:Ge,parameters:{layout:"padded",docs:{description:{component:`
# Advanced Data Table

Advanced table with nested columns, column filters, side panel controls, and drag-and-drop.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel
  showToolbar
  toolbarTitle="Claims Data"
/>
\`\`\`

## Features

The Advanced Data Table includes all standard table features plus:

## New Features

### 1. Sub-Headers (Nested Columns)
- Support for nested column structures
- Parent columns can contain multiple sub-columns
- Example: "Claim ID" header with "First Name" and "Last Name" sub-headers

### 2. Column Search Filters
- Individual search bars for each column in sub-header row
- Toggle filters on/off via side panel
- Real-time filtering as you type

### 3. Side Panel Controls
- Alternative to modal settings
- Vertical panel on the right side of table
- Two action buttons: "Columns" and "Filters"
- Clicking "Columns" shows overlay with column visibility and ordering
- Clicking "Filters" toggles column search bars in sub-header
- Table border radius adjusts when side panel is active (left side only)

### 4. Nested Column Management
- Expandable/collapsible parent columns in settings
- Drag-and-drop reordering for both parent and child columns
- Individual visibility and lock controls for nested columns

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| useSidePanel | boolean | false | Enable side panel for column/filter controls |
| useModal | boolean | false | Enable modal for column settings |
| showToolbar | boolean | true | Show toolbar with title and actions |
| toolbarTitle | string | 'Data Table' | Title displayed in toolbar |
| initialColumns | ColumnConfig[] | - | Custom column configuration (for nested columns) |

## Usage Modes

### With Side Panel (Recommended for complex tables)
\`\`\`tsx
<AdvancedDataTable 
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>
\`\`\`

### With Modal (Traditional approach)
\`\`\`tsx
<AdvancedDataTable 
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>
\`\`\`

### With Sub-Headers (Nested Columns)
\`\`\`tsx
import { AdvancedDataTable, getNestedColumnConfigs } from '@ajaysoni7832/lean-ids-components';

<AdvancedDataTable 
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data with Sub-Headers"
  initialColumns={getNestedColumnConfigs()}
/>
\`\`\`

### Both Modes
\`\`\`tsx
<AdvancedDataTable 
  useSidePanel={true} 
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>
\`\`\`

## Design Reference
Based on Figma designs:
- Sub-header structure: node-id=5450-11756
- Search filters: node-id=5450-11755
- Side panel overlay: node-id=4041-15211
- Table with side panel: node-id=4038-14309
        `}}},tags:["autodocs"]},ne={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Claims Data"},parameters:{docs:{description:{story:"Table with side panel for column and filter controls. The table has no right border radius to seamlessly connect with the side panel."}}}},ie={args:{useSidePanel:!1,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data"},parameters:{docs:{description:{story:"Traditional table with modal settings. Click the settings icon button in the toolbar to open column settings."}}}},le={args:{useSidePanel:!0,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data"},parameters:{docs:{description:{story:"Table with both side panel and modal controls available. The toolbar settings button opens the modal, while the side panel provides quick access to column/filter controls."}}}},de={args:{useSidePanel:!1,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data with Sub-Headers",initialColumns:Wt()},parameters:{docs:{description:{story:'Table with sub-header support showing nested columns. The "User Details" parent column contains "First Name" and "Last Name" sub-columns, and the "Address" parent column contains "City" and "State" sub-columns. This demonstrates the hierarchical column structure with parent-child relationships.'}}}},ce={args:{useSidePanel:!1,useModal:!1,showToolbar:!1},parameters:{docs:{description:{story:"Basic table without toolbar or settings controls. Useful when column configuration is managed externally."}}}};var Ne,Ie,Le;ne.parameters={...ne.parameters,docs:{...(Ne=ne.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Claims Data'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with side panel for column and filter controls. The table has no right border radius to seamlessly connect with the side panel.'
      }
    }
  }
}`,...(Le=(Ie=ne.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var Pe,Re,Me;ie.parameters={...ie.parameters,docs:{...(Pe=ie.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    useSidePanel: false,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data'
  },
  parameters: {
    docs: {
      description: {
        story: 'Traditional table with modal settings. Click the settings icon button in the toolbar to open column settings.'
      }
    }
  }
}`,...(Me=(Re=ie.parameters)==null?void 0:Re.docs)==null?void 0:Me.source}}};var Fe,We,ze;le.parameters={...le.parameters,docs:{...(Fe=le.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with both side panel and modal controls available. The toolbar settings button opens the modal, while the side panel provides quick access to column/filter controls.'
      }
    }
  }
}`,...(ze=(We=le.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var qe,Ee,He;de.parameters={...de.parameters,docs:{...(qe=de.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    useSidePanel: false,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data with Sub-Headers',
    initialColumns: getNestedColumnConfigs()
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with sub-header support showing nested columns. The "User Details" parent column contains "First Name" and "Last Name" sub-columns, and the "Address" parent column contains "City" and "State" sub-columns. This demonstrates the hierarchical column structure with parent-child relationships.'
      }
    }
  }
}`,...(He=(Ee=de.parameters)==null?void 0:Ee.docs)==null?void 0:He.source}}};var Oe,Ve,Be;ce.parameters={...ce.parameters,docs:{...(Oe=ce.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    useSidePanel: false,
    useModal: false,
    showToolbar: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic table without toolbar or settings controls. Useful when column configuration is managed externally.'
      }
    }
  }
}`,...(Be=(Ve=ce.parameters)==null?void 0:Ve.docs)==null?void 0:Be.source}}};const oa=["WithSidePanel","WithModal","WithBothControls","WithSubHeaders","DefaultTable"];export{ce as DefaultTable,le as WithBothControls,ie as WithModal,ne as WithSidePanel,de as WithSubHeaders,oa as __namedExportsOrder,sa as default};
