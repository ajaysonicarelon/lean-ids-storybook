import{j as s}from"./jsx-runtime-DSvmvvsx.js";import{r as d}from"./index-B0WjJBI_.js";import{c as m}from"./styled-components.browser.esm-DvYOtweu.js";import{T as Qe,a as j,b as E,c as Ye}from"./TableToolbar-DatDlyNC.js";import{I as Q}from"./Icon-jrFtYy1b.js";import{P as Ze}from"./Pagination-B5YwtZ0w.js";import{C as Ke}from"./Checkbox-BBM9hoQN.js";import{B as Y}from"./Button-B6IX_q4c.js";import{B as et}from"./Badge-B_606pXo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Chip-BmQRtEfP.js";import"./ExpandMore-CVtF5XTt.js";import"./InlineMessage-CQv8tPZm.js";const tt=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:r})=>r.spacing[8]};
  width: 100%;
`,Z=m.div`
  overflow-x: auto;
  border: 1px solid ${({theme:r})=>r.colors.palette.neutral[300]};
  border-radius: 8px;
  position: relative;
`,K=m.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
`,at=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:r})=>r.spacing[32]} ${({theme:r})=>r.spacing[24]};
  min-height: 400px;
  background: ${({theme:r})=>r.colors.palette.neutral[50]};
`,st=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[6]};
  max-width: 300px;
`,rt=m.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,nt=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[4]};
  text-align: center;
`,ot=m.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${({theme:r})=>r.colors.semantic.text.primary};
  margin: 0;
`,lt=m.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  color: ${({theme:r})=>r.colors.semantic.text.secondary};
  margin: 0;
`,it=m.tr``,ct=m.td`
  padding: 16px;
  border-bottom: 1px solid ${({theme:r})=>r.colors.palette.neutral[200]};
`,D=m.div`
  width: ${({width:r})=>r||"100%"};
  height: ${({height:r})=>r||"16px"};
  background: ${({theme:r})=>r.colors.palette.neutral[200]};
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
      ${({theme:r})=>r.colors.palette.neutral[100]} 50%,
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
`,he=({data:r=[],columns:u=[],selectable:P=!1,paginated:T=!0,itemsPerPage:ye=10,showSettings:z=!0,showActions:ve=!1,actions:xe=[],onRowSelect:y,onRowAction:ut,rowKey:q="id",emptyMessage:mt="No data available",emptyIcon:ke="CloudOff",emptyTitle:we="No data available",emptyDescription:Ce="There are no items to display",emptyActionLabel:I,onEmptyAction:$,loading:R=!1,className:Se,title:Te,description:pt,showToolbar:je=!0,showGlobalSearch:ft=!1,showFilter:Ee=!0,showDownload:De=!0,onDownload:qe})=>{const[M,F]=d.useState(1),[x,Ae]=d.useState(ye),[h,Ve]=d.useState(""),[g,N]=d.useState("none"),[Oe,W]=d.useState(!1),[A,B]=d.useState([]),[Le,G]=d.useState(!1),[_,Pe]=d.useState({}),[ze,U]=d.useState(!1),[V,Ie]=d.useState({}),[$e,Re]=d.useState({}),[ht,gt]=d.useState(""),[v,O]=d.useState(()=>{const e=[];return P&&e.push({id:"checkbox",label:"Select",visible:!0,locked:!0,order:0}),u.forEach((a,t)=>{e.push({id:a.id,label:a.label,visible:a.visible!==!1,locked:a.locked||!1,order:P?t+1:t})}),ve&&e.push({id:"actions",label:"Actions",visible:!0,locked:!1,order:e.length}),e}),Me=(e,a)=>{const t=v.filter(o=>o.locked&&o.id!=="checkbox").length;if(a&&t>=3){U(!0),setTimeout(()=>U(!1),3e3);return}const c=v.map(o=>o.id===e?{...o,locked:a}:o).sort((o,i)=>o.id==="checkbox"?-1:i.id==="checkbox"?1:o.locked&&!i.locked?-1:!o.locked&&i.locked?1:o.order-i.order).map((o,i)=>({...o,order:i}));O(c)},Fe=e=>{h===e?N(g==="asc"?"desc":g==="desc"?"none":"asc"):(Ve(e),N("asc"))},Ne=e=>{W(e);const a=e?r.map(t=>t[q]):[];B(a),y==null||y(a)},We=(e,a)=>{const t=a?[...A,e]:A.filter(l=>l!==e);B(t),W(t.length===r.length),y==null||y(t)},Be=(e,a)=>{Ie(t=>({...t,[e]:a})),F(1)},Ge=(e,a)=>{Re(t=>({...t,[e]:a}))},X=d.useMemo(()=>{let e=[...r];if(Object.entries(V).forEach(([a,t])=>{if(t){const l=u.find(n=>n.id===a);l&&(e=e.filter(n=>{const c=l.accessor?typeof l.accessor=="function"?l.accessor(n):n[l.accessor]:n[a];return String(c).toLowerCase().includes(t.toLowerCase())}))}}),h&&g!=="none"){const a=u.find(t=>t.id===h);a&&e.sort((t,l)=>{const n=a.accessor?typeof a.accessor=="function"?a.accessor(t):t[a.accessor]:t[h],c=a.accessor?typeof a.accessor=="function"?a.accessor(l):l[a.accessor]:l[h];return n<c?g==="asc"?-1:1:n>c?g==="asc"?1:-1:0})}return e},[r,u,V,h,g,q]),L=X.length,_e=T?Math.ceil(L/x):1,H=T?(M-1)*x:0,Ue=T?H+x:L,Xe=X.slice(H,Ue),p=v.filter(e=>e.visible).sort((e,a)=>e.order-a.order);d.useEffect(()=>{const e=document.querySelector("[data-scroll-container]");if(!e)return;const a=()=>{const n=e.querySelectorAll("thead th"),c={};let o=0;p.forEach((i,b)=>{if(i.locked&&n[b]){c[i.id]=o;const k=n[b].offsetWidth;o+=k}}),Pe(c)};a();const t=new ResizeObserver(()=>{a()});return e.querySelectorAll("thead th").forEach(n=>t.observe(n)),()=>{t.disconnect()}},[p.map(e=>e.id+e.locked).join(",")]),d.useEffect(()=>{const e=document.querySelector("[data-scroll-container]");if(!e)return;const a=()=>{const t=e.scrollLeft;e.querySelectorAll('[data-locked="true"]').forEach(n=>{t>0?n.classList.add("is-stuck"):n.classList.remove("is-stuck")})};return e.addEventListener("scroll",a),()=>e.removeEventListener("scroll",a)},[]);const He=()=>s.jsxs(Z,{"data-scroll-container":!0,children:[s.jsx(K,{children:s.jsx("thead",{children:s.jsx("tr",{children:p.map((e,a)=>{const t=u.find(n=>n.id===e.id),l=a===0?"left":a===p.length-1?"right":void 0;return s.jsx(j,{label:(t==null?void 0:t.label)||e.id,variant:"default",side:l},e.id)})})})}),s.jsx(at,{children:s.jsxs(st,{children:[s.jsx(rt,{children:s.jsx(Q,{name:ke,size:"large",style:{width:"60px",height:"60px"}})}),s.jsxs(nt,{children:[s.jsx(ot,{children:we}),s.jsx(lt,{children:Ce})]}),I&&$&&s.jsx(Y,{variant:"primary",size:"medium",onClick:$,children:I})]})})]});return s.jsxs(tt,{className:Se,children:[je&&s.jsx(Qe,{title:Te,showDropdown:!1,dropdownOptions:[],showDownload:De,onDownload:qe,showFilter:Ee,onFilter:()=>console.log("Filter clicked"),showSettings:z,onSettingsClick:()=>G(!0)}),r.length===0&&!R?He():s.jsx(Z,{"data-scroll-container":!0,children:s.jsxs(K,{children:[s.jsx("thead",{children:s.jsx("tr",{children:p.map((e,a)=>{const t=u.find(i=>i.id===e.id),l=e.locked,n=_[e.id],c=a===0?"left":a===p.length-1?"right":void 0;if(e.id==="checkbox")return s.jsx(j,{label:"",variant:"default",side:c,locked:l,leftOffset:n,"data-locked":l,showCheckbox:!0,checked:Oe,onCheckChange:Ne},e.id);if(e.id==="actions")return s.jsx(j,{label:"Actions",variant:"default",side:c,locked:l,leftOffset:n,"data-locked":l},e.id);if(!t)return null;const o=t.searchable?"search":t.resizable&&!l?"resizeable-locked":t.resizable?"resizeable":"default";return s.jsx(j,{label:t.label,variant:o,side:c,sortable:t.sortable,sortDirection:h===t.id?g:"none",onSort:t.sortable?()=>Fe(t.id):void 0,searchValue:V[t.id]||"",onSearchChange:t.searchable?i=>Be(t.id,i):void 0,resizable:t.resizable&&!l,onResize:t.resizable&&!l?i=>Ge(t.id,i):void 0,width:$e[t.id]||t.width,onLockToggle:()=>Me(t.id,!l),locked:l,leftOffset:n,"data-locked":l},e.id)})})}),s.jsx("tbody",{children:R?Array.from({length:x}).map((e,a)=>s.jsx(it,{children:p.map(t=>s.jsx(ct,{children:t.id==="checkbox"?s.jsx(D,{width:"20px",height:"20px"}):t.id==="actions"?s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s.jsx(D,{width:"32px",height:"32px"}),s.jsx(D,{width:"32px",height:"32px"})]}):s.jsx(D,{width:"80%"})},t.id))},`skeleton-${a}`)):Xe.map((e,a)=>{const t=e[q],l=A.includes(t);return s.jsx("tr",{children:p.map((n,c)=>{const o=u.find(f=>f.id===n.id),i=n.locked,b=_[n.id],k=c===0;if(n.id==="checkbox")return s.jsx(E,{selected:l,locked:i,leftOffset:b,"data-locked":i,isFirstColumn:k,children:s.jsx(Ke,{checked:l,onChange:f=>We(t,f.target.checked)})},n.id);if(n.id==="actions")return s.jsx(E,{selected:l,locked:i,leftOffset:b,"data-locked":i,children:s.jsx("div",{style:{display:"flex",gap:"8px"},children:xe.map((f,Je)=>s.jsx(Y,{variant:"secondary",size:"small",showLabel:!1,leadingIcon:s.jsx(Q,{name:f.icon,size:"small"}),onClick:()=>f.onClick(e),"aria-label":f.label,children:f.label},Je))})},n.id);if(!o)return null;const J=o.accessor?typeof o.accessor=="function"?o.accessor(e):e[o.accessor]:e[o.id];return o.renderCell?s.jsx(E,{selected:l,locked:i,leftOffset:b,"data-locked":i,isFirstColumn:k,children:o.renderCell(J,e,a)},n.id):s.jsx(E,{selected:l,locked:i,leftOffset:b,"data-locked":i,isFirstColumn:k,children:String(J||"")},n.id)})},t)})})]})}),T&&s.jsx(Ze,{currentPage:M,totalPages:_e,totalItems:L,itemsPerPage:x,onPageChange:F,onItemsPerPageChange:Ae}),z&&s.jsx(s.Fragment,{children:s.jsx(Ye,{isOpen:Le,onClose:()=>G(!1),columns:v.filter(e=>e.id!=="checkbox"),lockWarning:ze,onColumnsChange:e=>{const a=v.find(n=>n.id==="checkbox"),t=a?[a,...e]:e;if(e.some(n=>{const c=v.find(o=>o.id===n.id);return c&&c.locked!==n.locked})){const c=t.sort((o,i)=>o.id==="checkbox"?-1:i.id==="checkbox"?1:o.locked&&!i.locked?-1:!o.locked&&i.locked?1:o.order-i.order).map((o,i)=>({...o,order:i}));O(c)}else O(t)}})})]})};he.__docgenInfo={description:"",methods:[],displayName:"Table",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"Array of data objects to display",defaultValue:{value:"[]",computed:!1}},columns:{required:!1,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:"Column configuration",defaultValue:{value:"[]",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"Enable row selection",defaultValue:{value:"false",computed:!1}},paginated:{required:!1,tsType:{name:"boolean"},description:"Enable pagination",defaultValue:{value:"true",computed:!1}},itemsPerPage:{required:!1,tsType:{name:"number"},description:"Items per page (default: 10)",defaultValue:{value:"10",computed:!1}},showSettings:{required:!1,tsType:{name:"boolean"},description:"Enable column settings",defaultValue:{value:"true",computed:!1}},showActions:{required:!1,tsType:{name:"boolean"},description:"Enable actions column",defaultValue:{value:"false",computed:!1}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: string;
  label: string;
  onClick: (row: any) => void;
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(row: any) => void",signature:{arguments:[{type:{name:"any"},name:"row"}],return:{name:"void"}},required:!0}}]}}],raw:`Array<{
  icon: string;
  label: string;
  onClick: (row: any) => void;
}>`},description:"Custom actions for each row",defaultValue:{value:"[]",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedIds"}],return:{name:"void"}}},description:"Callback when rows are selected"},onRowAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: string, row: any) => void",signature:{arguments:[{type:{name:"string"},name:"action"},{type:{name:"any"},name:"row"}],return:{name:"void"}}},description:"Callback when row action is triggered"},rowKey:{required:!1,tsType:{name:"string"},description:"Custom row key accessor (default: 'id')",defaultValue:{value:"'id'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Custom empty state message",defaultValue:{value:"'No data available'",computed:!1}},emptyIcon:{required:!1,tsType:{name:"string"},description:"Empty state icon name (Material Icons)",defaultValue:{value:"'CloudOff'",computed:!1}},emptyTitle:{required:!1,tsType:{name:"string"},description:"Empty state title",defaultValue:{value:"'No data available'",computed:!1}},emptyDescription:{required:!1,tsType:{name:"string"},description:"Empty state description",defaultValue:{value:"'There are no items to display'",computed:!1}},emptyActionLabel:{required:!1,tsType:{name:"string"},description:"Empty state action button label"},onEmptyAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Empty state action button handler"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"},title:{required:!1,tsType:{name:"string"},description:"Table title"},description:{required:!1,tsType:{name:"string"},description:"Table description"},showToolbar:{required:!1,tsType:{name:"boolean"},description:"Show toolbar",defaultValue:{value:"true",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search in toolbar",defaultValue:{value:"false",computed:!1}},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button in toolbar",defaultValue:{value:"true",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button in toolbar",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"}}};const At={title:"Components/Table",component:he,parameters:{layout:"padded",docs:{description:{component:"A complete data table component with sorting, filtering, pagination, and more. Use this as your default table for all data display needs."}}},tags:["autodocs"]},ge=[{id:"1",name:"Alice Johnson",email:"alice.johnson@company.com",role:"Senior Developer",department:"Engineering",status:"Active",salary:125e3,avatar:"https://i.pravatar.cc/32?img=1"},{id:"2",name:"Bob Smith",email:"bob.smith@company.com",role:"Product Manager",department:"Product",status:"Active",salary:115e3,avatar:"https://i.pravatar.cc/32?img=2"},{id:"3",name:"Carol Williams",email:"carol.williams@company.com",role:"UX Designer",department:"Design",status:"Active",salary:95e3,avatar:"https://i.pravatar.cc/32?img=3"},{id:"4",name:"David Brown",email:"david.brown@company.com",role:"DevOps Engineer",department:"Engineering",status:"Inactive",salary:11e4,avatar:"https://i.pravatar.cc/32?img=4"},{id:"5",name:"Eve Davis",email:"eve.davis@company.com",role:"Marketing Manager",department:"Marketing",status:"Active",salary:105e3,avatar:"https://i.pravatar.cc/32?img=5"}],be=[{id:"id",label:"ID"},{id:"name",label:"Name"},{id:"email",label:"Email"},{id:"role",label:"Role"}],dt=[{id:"id",label:"ID",sortable:!0,resizable:!0,width:80},{id:"user",label:"User",sortable:!0,resizable:!0,width:250,accessor:r=>r.name,renderCell:(r,u)=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[s.jsx("img",{src:u.avatar,alt:u.name,style:{width:32,height:32,borderRadius:"50%"}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:600},children:u.name}),s.jsx("div",{style:{fontSize:"12px",color:"#666"},children:u.role})]})]})},{id:"email",label:"Email",sortable:!0,searchable:!0,resizable:!0},{id:"department",label:"Department",sortable:!0},{id:"status",label:"Status",sortable:!0,renderCell:r=>s.jsx(et,{label:r,type:r==="Active"?"success":"error",style:"default"})},{id:"salary",label:"Salary",sortable:!0,resizable:!0,renderCell:r=>`$${r.toLocaleString()}`}],w={args:{data:ge,columns:dt,selectable:!0,paginated:!0,itemsPerPage:10,showSettings:!0,showActions:!0,showToolbar:!0,title:"Employee Directory",description:"Manage and view all employee information",showGlobalSearch:!0,showFilter:!0,showDownload:!0,actions:[{icon:"Edit",label:"Edit",onClick:r=>console.log("Edit:",r)},{icon:"Delete",label:"Delete",onClick:r=>console.log("Delete:",r)}],onRowSelect:r=>console.log("Selected:",r)}},C={args:{data:ge,columns:be,loading:!0,title:"Tabular View"}},S={args:{data:[],columns:be,showToolbar:!0,title:"Tabular View",emptyIcon:"CloudOff",emptyTitle:"Not able to sync",emptyDescription:"Please check your internet connection",emptyActionLabel:"Refresh",onEmptyAction:()=>console.log("Refresh clicked")}};var ee,te,ae,se,re;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:"Complete table with all features enabled - matches CompleteExample design",...(re=(se=w.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var ne,oe,le,ie,ce;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    loading: true,
    title: 'Tabular View'
  }
}`,...(le=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:le.source},description:{story:"Loading state",...(ce=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var de,ue,me,pe,fe;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:"Empty state with action button",...(fe=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:fe.description}}};const Vt=["Complete","Loading","Empty"];export{w as Complete,S as Empty,C as Loading,Vt as __namedExportsOrder,At as default};
