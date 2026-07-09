import{j as s}from"./jsx-runtime-DSvmvvsx.js";import{r as d}from"./index-B0WjJBI_.js";import{g as p}from"./styled-components.browser.esm-DVcPNpfh.js";import{T as Ze,a as A,b as V,c as Ke}from"./TableToolbar-RY4TaKDr.js";import{I as K}from"./Icon-D1GQI8nt.js";import{P as et}from"./Pagination-BbvT3jVa.js";import{C as tt}from"./Checkbox-CWZMyd52.js";import{B as ee}from"./Button-CnBDXljr.js";import{B as at}from"./Badge-DSAVxi_S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Chip-YwhtXZXO.js";import"./ExpandMore-GavyM6T7.js";import"./InlineMessage-MDOeQZie.js";const st=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:n})=>n.spacing[8]};
  width: 100%;
`,te=p.div`
  overflow-x: auto;
  border: 1px solid ${({theme:n})=>n.colors.palette.neutral[300]};
  border-radius: 8px;
  position: relative;
`,ae=p.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
`,nt=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:n})=>n.spacing[32]} ${({theme:n})=>n.spacing[24]};
  min-height: 400px;
  background: ${({theme:n})=>n.colors.palette.neutral[50]};
`,rt=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[6]};
  max-width: 300px;
`,ot=p.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,lt=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:n})=>n.spacing[4]};
  text-align: center;
`,it=p.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${({theme:n})=>n.colors.semantic.text.primary};
  margin: 0;
`,ct=p.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  color: ${({theme:n})=>n.colors.semantic.text.secondary};
  margin: 0;
`,dt=p.tr``,ut=p.td`
  padding: 16px;
  border-bottom: 1px solid ${({theme:n})=>n.colors.palette.neutral[200]};
`,L=p.div`
  width: ${({width:n})=>n||"100%"};
  height: ${({height:n})=>n||"16px"};
  background: ${({theme:n})=>n.colors.palette.neutral[200]};
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
`,ye=({data:n=[],columns:u=[],selectable:$=!1,paginated:T=!0,itemsPerPage:ke=10,showSettings:F=!0,showActions:we=!1,actions:Ce=[],onRowSelect:m,onRowAction:pt,rowKey:j="id",emptyMessage:ft="No data available",emptyIcon:Se="CloudOff",emptyTitle:Te="No data available",emptyDescription:je="There are no items to display",emptyActionLabel:M,onEmptyAction:N,loading:W=!1,className:Ee,title:De,description:ht,showToolbar:qe=!0,showGlobalSearch:gt=!1,showFilter:Ae=!0,showDownload:Ve=!0,onDownload:Le})=>{const[B,R]=d.useState(1),[x,Oe]=d.useState(ke),[b,Pe]=d.useState(""),[y,G]=d.useState("none"),[ze,E]=d.useState(!1),[D,q]=d.useState([]),[O,_]=d.useState(null),[Ie,U]=d.useState(!1),[X,$e]=d.useState({}),[Fe,H]=d.useState(!1),[P,Me]=d.useState({}),[Ne,We]=d.useState({}),[bt,yt]=d.useState(""),[v,z]=d.useState(()=>{const e=[];return $&&e.push({id:"checkbox",label:"Select",visible:!0,locked:!0,order:0}),u.forEach((a,t)=>{e.push({id:a.id,label:a.label,visible:a.visible!==!1,locked:a.locked||!1,order:$?t+1:t})}),we&&e.push({id:"actions",label:"Actions",visible:!0,locked:!1,order:e.length}),e}),Be=(e,a)=>{const t=v.filter(o=>o.locked&&o.id!=="checkbox").length;if(a&&t>=3){H(!0),setTimeout(()=>H(!1),3e3);return}const c=v.map(o=>o.id===e?{...o,locked:a}:o).sort((o,l)=>o.id==="checkbox"?-1:l.id==="checkbox"?1:o.locked&&!l.locked?-1:!o.locked&&l.locked?1:o.order-l.order).map((o,l)=>({...o,order:l}));z(c)},Re=e=>{b===e?G(y==="asc"?"desc":y==="desc"?"none":"asc"):(Pe(e),G("asc"))},Ge=e=>{E(e);const a=e?n.map(t=>t[j]):[];q(a),m==null||m(a)},_e=(e,a,t,i=!1)=>{if(a)if(i&&O!==null){const r=Math.min(O,t),c=Math.max(O,t),o=Y.slice(r,c+1).map(f=>f[j]),l=Array.from(new Set([...D,...o]));q(l),E(l.length===n.length),m==null||m(l)}else{const r=[...D,e];q(r),E(r.length===n.length),_(t),m==null||m(r)}else{const r=D.filter(c=>c!==e);q(r),E(!1),_(t),m==null||m(r)}},Ue=(e,a)=>{Me(t=>({...t,[e]:a})),R(1)},Xe=(e,a)=>{We(t=>({...t,[e]:a}))},J=d.useMemo(()=>{let e=[...n];if(Object.entries(P).forEach(([a,t])=>{if(t){const i=u.find(r=>r.id===a);i&&(e=e.filter(r=>{const c=i.accessor?typeof i.accessor=="function"?i.accessor(r):r[i.accessor]:r[a];return String(c).toLowerCase().includes(t.toLowerCase())}))}}),b&&y!=="none"){const a=u.find(t=>t.id===b);a&&e.sort((t,i)=>{const r=a.accessor?typeof a.accessor=="function"?a.accessor(t):t[a.accessor]:t[b],c=a.accessor?typeof a.accessor=="function"?a.accessor(i):i[a.accessor]:i[b];return r<c?y==="asc"?-1:1:r>c?y==="asc"?1:-1:0})}return e},[n,u,P,b,y,j]),I=J.length,He=T?Math.ceil(I/x):1,Q=T?(B-1)*x:0,Je=T?Q+x:I,Y=J.slice(Q,Je),g=v.filter(e=>e.visible).sort((e,a)=>e.order-a.order);d.useEffect(()=>{const e=document.querySelector("[data-scroll-container]");if(!e)return;const a=()=>{const r=e.querySelectorAll("thead th"),c={};let o=0;g.forEach((l,f)=>{if(l.locked&&r[f]){c[l.id]=o;const k=r[f].offsetWidth;o+=k}}),$e(c)};a();const t=new ResizeObserver(()=>{a()});return e.querySelectorAll("thead th").forEach(r=>t.observe(r)),()=>{t.disconnect()}},[g.map(e=>e.id+e.locked).join(",")]),d.useEffect(()=>{const e=document.querySelector("[data-scroll-container]");if(!e)return;const a=()=>{const t=e.scrollLeft;e.querySelectorAll('[data-locked="true"]').forEach(r=>{t>0?r.classList.add("is-stuck"):r.classList.remove("is-stuck")})};return e.addEventListener("scroll",a),()=>e.removeEventListener("scroll",a)},[]);const Qe=()=>s.jsxs(te,{"data-scroll-container":!0,children:[s.jsx(ae,{children:s.jsx("thead",{children:s.jsx("tr",{children:g.map((e,a)=>{const t=u.find(r=>r.id===e.id),i=a===0?"left":a===g.length-1?"right":void 0;return s.jsx(A,{label:(t==null?void 0:t.label)||e.id,variant:"default",side:i},e.id)})})})}),s.jsx(nt,{children:s.jsxs(rt,{children:[s.jsx(ot,{children:s.jsx(K,{name:Se,size:"large",style:{width:"60px",height:"60px"}})}),s.jsxs(lt,{children:[s.jsx(it,{children:Te}),s.jsx(ct,{children:je})]}),M&&N&&s.jsx(ee,{variant:"primary",size:"medium",onClick:N,children:M})]})})]});return s.jsxs(st,{className:Ee,children:[qe&&s.jsx(Ze,{title:De,showDropdown:!1,dropdownOptions:[],showDownload:Ve,onDownload:Le,showFilter:Ae,onFilter:()=>console.log("Filter clicked"),showSettings:F,onSettingsClick:()=>U(!0)}),n.length===0&&!W?Qe():s.jsx(te,{"data-scroll-container":!0,children:s.jsxs(ae,{children:[s.jsx("thead",{children:s.jsx("tr",{children:g.map((e,a)=>{const t=u.find(l=>l.id===e.id),i=e.locked,r=X[e.id],c=a===0?"left":a===g.length-1?"right":void 0;if(e.id==="checkbox")return s.jsx(A,{label:"",variant:"default",side:c,locked:i,leftOffset:r,"data-locked":i,showCheckbox:!0,checked:ze,onCheckChange:Ge},e.id);if(e.id==="actions")return s.jsx(A,{label:"Actions",variant:"default",side:c,locked:i,leftOffset:r,"data-locked":i},e.id);if(!t)return null;const o=t.searchable?"search":t.resizable&&!i?"resizeable-locked":t.resizable?"resizeable":"default";return s.jsx(A,{label:t.label,variant:o,side:c,sortable:t.sortable,sortDirection:b===t.id?y:"none",onSort:t.sortable?()=>Re(t.id):void 0,searchValue:P[t.id]||"",onSearchChange:t.searchable?l=>Ue(t.id,l):void 0,resizable:t.resizable&&!i,onResize:t.resizable&&!i?l=>Xe(t.id,l):void 0,width:Ne[t.id]||t.width,onLockToggle:()=>Be(t.id,!i),locked:i,leftOffset:r,"data-locked":i},e.id)})})}),s.jsx("tbody",{children:W?Array.from({length:x}).map((e,a)=>s.jsx(dt,{children:g.map(t=>s.jsx(ut,{children:t.id==="checkbox"?s.jsx(L,{width:"20px",height:"20px"}):t.id==="actions"?s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s.jsx(L,{width:"32px",height:"32px"}),s.jsx(L,{width:"32px",height:"32px"})]}):s.jsx(L,{width:"80%"})},t.id))},`skeleton-${a}`)):Y.map((e,a)=>{const t=e[j],i=D.includes(t);return s.jsx("tr",{children:g.map((r,c)=>{const o=u.find(h=>h.id===r.id),l=r.locked,f=X[r.id],k=c===0;if(r.id==="checkbox")return s.jsx(V,{selected:i,locked:l,leftOffset:f,"data-locked":l,isFirstColumn:k,children:s.jsx(tt,{checked:i,onChange:h=>_e(t,h.target.checked,a,h.nativeEvent.shiftKey)})},r.id);if(r.id==="actions")return s.jsx(V,{selected:i,locked:l,leftOffset:f,"data-locked":l,children:s.jsx("div",{style:{display:"flex",gap:"8px"},children:Ce.map((h,Ye)=>s.jsx(ee,{variant:"secondary",size:"small",showLabel:!1,leadingIcon:s.jsx(K,{name:h.icon,size:"small"}),onClick:()=>h.onClick(e),"aria-label":h.label,children:h.label},Ye))})},r.id);if(!o)return null;const Z=o.accessor?typeof o.accessor=="function"?o.accessor(e):e[o.accessor]:e[o.id];return o.renderCell?s.jsx(V,{selected:i,locked:l,leftOffset:f,"data-locked":l,isFirstColumn:k,children:o.renderCell(Z,e,a)},r.id):s.jsx(V,{selected:i,locked:l,leftOffset:f,"data-locked":l,isFirstColumn:k,children:String(Z||"")},r.id)})},t)})})]})}),T&&s.jsx(et,{currentPage:B,totalPages:He,totalItems:I,itemsPerPage:x,onPageChange:R,onItemsPerPageChange:Oe}),F&&s.jsx(s.Fragment,{children:s.jsx(Ke,{isOpen:Ie,onClose:()=>U(!1),columns:v.filter(e=>e.id!=="checkbox"),lockWarning:Fe,onColumnsChange:e=>{const a=v.find(r=>r.id==="checkbox"),t=a?[a,...e]:e;if(e.some(r=>{const c=v.find(o=>o.id===r.id);return c&&c.locked!==r.locked})){const c=t.sort((o,l)=>o.id==="checkbox"?-1:l.id==="checkbox"?1:o.locked&&!l.locked?-1:!o.locked&&l.locked?1:o.order-l.order).map((o,l)=>({...o,order:l}));z(c)}else z(t)}})})]})};ye.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"Array of data objects to display",defaultValue:{value:"[]",computed:!1}},columns:{required:!1,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:"Column configuration",defaultValue:{value:"[]",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"Enable row selection",defaultValue:{value:"false",computed:!1}},paginated:{required:!1,tsType:{name:"boolean"},description:"Enable pagination",defaultValue:{value:"true",computed:!1}},itemsPerPage:{required:!1,tsType:{name:"number"},description:"Items per page (default: 10)",defaultValue:{value:"10",computed:!1}},showSettings:{required:!1,tsType:{name:"boolean"},description:"Enable column settings",defaultValue:{value:"true",computed:!1}},showActions:{required:!1,tsType:{name:"boolean"},description:"Enable actions column",defaultValue:{value:"false",computed:!1}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: string;
  label: string;
  onClick: (row: any) => void;
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(row: any) => void",signature:{arguments:[{type:{name:"any"},name:"row"}],return:{name:"void"}},required:!0}}]}}],raw:`Array<{
  icon: string;
  label: string;
  onClick: (row: any) => void;
}>`},description:"Custom actions for each row",defaultValue:{value:"[]",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedIds"}],return:{name:"void"}}},description:"Callback when rows are selected"},onRowAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: string, row: any) => void",signature:{arguments:[{type:{name:"string"},name:"action"},{type:{name:"any"},name:"row"}],return:{name:"void"}}},description:"Callback when row action is triggered"},rowKey:{required:!1,tsType:{name:"string"},description:"Custom row key accessor (default: 'id')",defaultValue:{value:"'id'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Custom empty state message",defaultValue:{value:"'No data available'",computed:!1}},emptyIcon:{required:!1,tsType:{name:"string"},description:"Empty state icon name (Material Icons)",defaultValue:{value:"'CloudOff'",computed:!1}},emptyTitle:{required:!1,tsType:{name:"string"},description:"Empty state title",defaultValue:{value:"'No data available'",computed:!1}},emptyDescription:{required:!1,tsType:{name:"string"},description:"Empty state description",defaultValue:{value:"'There are no items to display'",computed:!1}},emptyActionLabel:{required:!1,tsType:{name:"string"},description:"Empty state action button label"},onEmptyAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Empty state action button handler"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"},title:{required:!1,tsType:{name:"string"},description:"Table title"},description:{required:!1,tsType:{name:"string"},description:"Table description"},showToolbar:{required:!1,tsType:{name:"boolean"},description:"Show toolbar",defaultValue:{value:"true",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search in toolbar",defaultValue:{value:"false",computed:!1}},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button in toolbar",defaultValue:{value:"true",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button in toolbar",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"}}};const Lt={title:"Components/Table",component:ye,parameters:{layout:"padded",docs:{description:{component:`
# Table

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
        `}}},tags:["autodocs"]},ve=[{id:"1",name:"Alice Johnson",email:"alice.johnson@company.com",role:"Senior Developer",department:"Engineering",status:"Active",salary:125e3,avatar:"https://i.pravatar.cc/32?img=1"},{id:"2",name:"Bob Smith",email:"bob.smith@company.com",role:"Product Manager",department:"Product",status:"Active",salary:115e3,avatar:"https://i.pravatar.cc/32?img=2"},{id:"3",name:"Carol Williams",email:"carol.williams@company.com",role:"UX Designer",department:"Design",status:"Active",salary:95e3,avatar:"https://i.pravatar.cc/32?img=3"},{id:"4",name:"David Brown",email:"david.brown@company.com",role:"DevOps Engineer",department:"Engineering",status:"Inactive",salary:11e4,avatar:"https://i.pravatar.cc/32?img=4"},{id:"5",name:"Eve Davis",email:"eve.davis@company.com",role:"Marketing Manager",department:"Marketing",status:"Active",salary:105e3,avatar:"https://i.pravatar.cc/32?img=5"}],xe=[{id:"id",label:"ID"},{id:"name",label:"Name"},{id:"email",label:"Email"},{id:"role",label:"Role"}],mt=[{id:"id",label:"ID",sortable:!0,resizable:!0,width:80},{id:"user",label:"User",sortable:!0,resizable:!0,width:250,accessor:n=>n.name,renderCell:(n,u)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[s.jsx("img",{src:u.avatar,alt:u.name,style:{width:32,height:32,borderRadius:"50%"}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:600},children:u.name}),s.jsx("div",{style:{fontSize:"12px",color:"#666"},children:u.role})]})]})},{id:"email",label:"Email",sortable:!0,searchable:!0,resizable:!0},{id:"department",label:"Department",sortable:!0},{id:"status",label:"Status",sortable:!0,renderCell:n=>s.jsx(at,{label:n,type:n==="Active"?"success":"error",style:"default"})},{id:"salary",label:"Salary",sortable:!0,resizable:!0,renderCell:n=>`$${n.toLocaleString()}`}],w={args:{data:ve,columns:mt,selectable:!0,paginated:!0,itemsPerPage:10,showSettings:!0,showActions:!0,showToolbar:!0,title:"Employee Directory",description:"Manage and view all employee information",showGlobalSearch:!0,showFilter:!0,showDownload:!0,actions:[{icon:"Edit",label:"Edit",onClick:n=>console.log("Edit:",n)},{icon:"Delete",label:"Delete",onClick:n=>console.log("Delete:",n)}],onRowSelect:n=>console.log("Selected:",n)}},C={args:{data:ve,columns:xe,loading:!0,title:"Tabular View"}},S={args:{data:[],columns:xe,showToolbar:!0,title:"Tabular View",emptyIcon:"CloudOff",emptyTitle:"Not able to sync",emptyDescription:"Please check your internet connection",emptyActionLabel:"Refresh",onEmptyAction:()=>console.log("Refresh clicked")}};var se,ne,re,oe,le;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:`Complete table with all features enabled - matches CompleteExample design

**Features:**
- ✅ Row selection with checkboxes
- ✅ **Shift-click multi-select**: Click first row, hold Shift, click another row to select range
- ✅ Pagination
- ✅ Column settings
- ✅ Row actions
- ✅ Global search
- ✅ Filters
- ✅ Download`,...(le=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:le.description}}};var ie,ce,de,ue,me;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    loading: true,
    title: 'Tabular View'
  }
}`,...(de=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Loading state",...(me=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:me.description}}};var pe,fe,he,ge,be;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:he.source},description:{story:"Empty state with action button",...(be=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};const Ot=["Complete","Loading","Empty"];export{w as Complete,S as Empty,C as Loading,Ot as __namedExportsOrder,Lt as default};
