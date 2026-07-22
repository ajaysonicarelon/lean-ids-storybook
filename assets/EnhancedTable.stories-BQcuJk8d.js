import{j as s}from"./jsx-runtime-DSvmvvsx.js";import{r as d}from"./index-B0WjJBI_.js";import{g as b}from"./styled-components.browser.esm-DVcPNpfh.js";import{T as Ea,b as se,a as oe}from"./TableToolbar-B057m2v0.js";import{T as Ba}from"./TableSidePanel-DEATFIqQ.js";import{P as Ua}from"./Pagination-Lb6yfKFp.js";import{T as Oa}from"./TableSettings-CfqKS5a9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createSvgIcon-B7ekv6yR.js";import"./Checkbox-FOTO3Ujj.js";import"./Typography-D6QTKejU.js";import"./Badge-DSAVxi_S.js";import"./Chip-YwhtXZXO.js";import"./Button-BULM1ePa.js";import"./Icon-DTHcdsUG.js";import"./ExpandMore-CGeKdORQ.js";import"./Settings-BrfMxiKS.js";import"./InlineMessage-DFe4V2fc.js";import"./Select-c-9MiHma.js";import"./InputField-CaRn7l85.js";import"./FieldImportance-BcdMchzX.js";import"./HelpingText-DBmPat_K.js";import"./RadioButton-MmHkS4_W.js";const Ja=b.th`
  padding: ${({theme:t})=>t.spacing[3]} ${({theme:t})=>t.spacing[7]};
  background-color: ${({theme:t})=>t.colors.palette.primary[50]};
  border-bottom: 1px solid ${({theme:t})=>t.colors.palette.neutral[300]};
  text-align: left;
  font-size: ${({theme:t})=>t.fontSizes[14]};
  font-weight: ${({theme:t})=>t.fontWeights.regular};
  position: ${({$locked:t})=>t?"sticky":"relative"};
  left: ${({$leftOffset:t})=>t!==void 0?`${t}px`:"auto"};
  z-index: ${({$locked:t})=>t?3:1};
  transition: box-shadow 0.2s ease;

  &.is-stuck {
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  }
`,Va=b.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing[8]};
  width: 100%;
`,Ya=b.input`
  width: 100%;
  height: 32px;
  padding: ${({theme:t})=>t.spacing[2]} ${({theme:t})=>t.spacing[3]};
  border: 1px solid ${({theme:t})=>t.colors.palette.neutral[300]};
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  font-size: ${({theme:t})=>t.fontSizes[14]};
  font-family: ${({theme:t})=>t.fonts.primary};
  background-color: ${({theme:t})=>t.colors.palette.neutral[50]};
  color: ${({theme:t})=>t.colors.palette.neutral[900]};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.palette.primary[500]};
  }

  &::placeholder {
    color: ${({theme:t})=>t.colors.palette.neutral[500]};
  }
`,ne=b.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:t})=>t.spacing[4]};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:t})=>t.colors.palette.neutral[600]};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:t})=>t.colors.palette.primary[600]};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Ga=()=>s.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),_a=()=>s.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),ba=({searchValue:t="",searchPlaceholder:$="Search",onSearchChange:h,locked:N=!1,leftOffset:Y=0,width:G,className:H,showClearFilter:C=!0,onClearFilter:A,showAdvancedFilter:_=!1,onAdvancedFilter:y,customActions:W=[]})=>{const X=m=>{h&&h(m.target.value)},K=m=>{m.stopPropagation(),A?A():h&&h("")},q=m=>{m.stopPropagation(),y&&y()};return s.jsx(Ja,{$locked:N,$leftOffset:Y,style:{width:G},className:H,"data-locked":N?"true":void 0,children:s.jsxs(Va,{children:[s.jsx(Ya,{type:"text",value:t,placeholder:$,onChange:X,onClick:m=>m.stopPropagation()}),C&&s.jsx(ne,{type:"button",onClick:K,title:"Clear filter",children:s.jsx(Ga,{})}),_&&s.jsx(ne,{type:"button",onClick:q,title:"Advanced filter",children:s.jsx(_a,{})}),W.map((m,Z)=>s.jsx(ne,{type:"button",onClick:w=>{w.stopPropagation(),m.onClick()},title:m.title,children:m.icon},Z))]})})};ba.__docgenInfo={description:"",methods:[],displayName:"TableSubHeader",props:{searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},showClearFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClearFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showAdvancedFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onAdvancedFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customActions:{required:!1,tsType:{name:"Array",elements:[{name:"FilterAction"}],raw:"FilterAction[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const Xa=b.table`
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
`,Ka=b.tr`
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
  animation-delay: ${({$animationDelay:t})=>t}ms;
  animation-fill-mode: backwards;
`,Za=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing[8]};
  width: 100%;
`,Qa=b.div`
  display: flex;
  gap: 0;
  width: 100%;
  position: relative;
`,et=b.div`
  overflow-x: auto;
  ${({$maxHeight:t})=>t&&`
    max-height: ${t};
    overflow-y: auto;
    display: block;
  `}
  border: 1px solid ${({theme:t})=>t.colors.palette.neutral[300]};
  border-radius: ${({$hasSidePanel:t})=>t?"8px 0 0 8px":"8px"};
  position: relative;
  flex: 1;
  ${({$maxHeight:t})=>!t&&"min-height: 500px;"}
`,at=()=>[{id:"1234567890",claimId:"1234567890",firstName:"John",lastName:"Doe",userDetails:"Associate Name",nrCodes:"NR001",paidAmount:"$4,680",acrLoadDates:"March 12, 2025",contact:"(555) 112.3334",amount:"$4,680",avatar:"https://i.pravatar.cc/32?img=1",city:"New York",state:"NY",status:"Approved",priority:"High"},{id:"1234567891",claimId:"1234567891",firstName:"Jane",lastName:"Smith",userDetails:"Manager",nrCodes:"NR002",paidAmount:"$10,293",acrLoadDates:"March 15, 2025",contact:"(555) 800.0000",amount:"$10,293",avatar:"https://i.pravatar.cc/32?img=2",city:"Los Angeles",state:"CA",status:"Pending",priority:"Medium"},{id:"1234567892",claimId:"1234567892",firstName:"Michael",lastName:"Johnson",userDetails:"Senior Associate",nrCodes:"NR003",paidAmount:"$7,450",acrLoadDates:"March 18, 2025",contact:"(555) 234.5678",amount:"$7,450",avatar:"https://i.pravatar.cc/32?img=3",city:"Chicago",state:"IL",status:"Approved",priority:"Low"},{id:"1234567893",claimId:"1234567893",firstName:"Emily",lastName:"Brown",userDetails:"Analyst",nrCodes:"NR004",paidAmount:"$5,820",acrLoadDates:"March 20, 2025",contact:"(555) 345.6789",amount:"$5,820",avatar:"https://i.pravatar.cc/32?img=4",city:"Houston",state:"TX",status:"Rejected",priority:"High"},{id:"1234567894",claimId:"1234567894",firstName:"David",lastName:"Wilson",userDetails:"Supervisor",nrCodes:"NR005",paidAmount:"$12,100",acrLoadDates:"March 22, 2025",contact:"(555) 456.7890",amount:"$12,100",avatar:"https://i.pravatar.cc/32?img=5",city:"Phoenix",state:"AZ",status:"Approved",priority:"Medium"},{id:"1234567895",claimId:"1234567895",firstName:"Sarah",lastName:"Martinez",userDetails:"Associate Name",nrCodes:"NR006",paidAmount:"$8,900",acrLoadDates:"March 25, 2025",contact:"(555) 567.8901",amount:"$8,900",avatar:"https://i.pravatar.cc/32?img=6",city:"Philadelphia",state:"PA",status:"Pending",priority:"High"},{id:"1234567896",claimId:"1234567896",firstName:"James",lastName:"Anderson",userDetails:"Lead",nrCodes:"NR007",paidAmount:"$15,200",acrLoadDates:"March 28, 2025",contact:"(555) 678.9012",amount:"$15,200",avatar:"https://i.pravatar.cc/32?img=7",city:"San Antonio",state:"TX",status:"Approved",priority:"Low"},{id:"1234567897",claimId:"1234567897",firstName:"Linda",lastName:"Taylor",userDetails:"Manager",nrCodes:"NR008",paidAmount:"$6,750",acrLoadDates:"March 30, 2025",contact:"(555) 789.0123",amount:"$6,750",avatar:"https://i.pravatar.cc/32?img=8",city:"San Diego",state:"CA",status:"Pending",priority:"Medium"},{id:"1234567898",claimId:"1234567898",firstName:"Robert",lastName:"Thomas",userDetails:"Associate Name",nrCodes:"NR009",paidAmount:"$9,300",acrLoadDates:"April 2, 2025",contact:"(555) 890.1234",amount:"$9,300",avatar:"https://i.pravatar.cc/32?img=9",city:"Dallas",state:"TX",status:"Approved",priority:"High"},{id:"1234567899",claimId:"1234567899",firstName:"Patricia",lastName:"Jackson",userDetails:"Senior Associate",nrCodes:"NR010",paidAmount:"$11,500",acrLoadDates:"April 5, 2025",contact:"(555) 901.2345",amount:"$11,500",avatar:"https://i.pravatar.cc/32?img=10",city:"San Jose",state:"CA",status:"Rejected",priority:"Low"},{id:"1234567900",claimId:"1234567900",firstName:"Christopher",lastName:"White",userDetails:"Analyst",nrCodes:"NR011",paidAmount:"$7,200",acrLoadDates:"April 8, 2025",contact:"(555) 012.3456",amount:"$7,200",avatar:"https://i.pravatar.cc/32?img=11",city:"Austin",state:"TX",status:"Approved",priority:"Medium"},{id:"1234567901",claimId:"1234567901",firstName:"Barbara",lastName:"Harris",userDetails:"Supervisor",nrCodes:"NR012",paidAmount:"$13,800",acrLoadDates:"April 10, 2025",contact:"(555) 123.4567",amount:"$13,800",avatar:"https://i.pravatar.cc/32?img=12",city:"Jacksonville",state:"FL",status:"Pending",priority:"High"},{id:"1234567902",claimId:"1234567902",firstName:"Daniel",lastName:"Martin",userDetails:"Associate Name",nrCodes:"NR013",paidAmount:"$5,600",acrLoadDates:"April 12, 2025",contact:"(555) 234.5678",amount:"$5,600",avatar:"https://i.pravatar.cc/32?img=13",city:"Fort Worth",state:"TX",status:"Approved",priority:"Low"},{id:"1234567903",claimId:"1234567903",firstName:"Nancy",lastName:"Thompson",userDetails:"Lead",nrCodes:"NR014",paidAmount:"$10,900",acrLoadDates:"April 15, 2025",contact:"(555) 345.6789",amount:"$10,900",avatar:"https://i.pravatar.cc/32?img=14",city:"Columbus",state:"OH",status:"Pending",priority:"Medium"},{id:"1234567904",claimId:"1234567904",firstName:"Matthew",lastName:"Garcia",userDetails:"Manager",nrCodes:"NR015",paidAmount:"$8,400",acrLoadDates:"April 18, 2025",contact:"(555) 456.7890",amount:"$8,400",avatar:"https://i.pravatar.cc/32?img=15",city:"Charlotte",state:"NC",status:"Approved",priority:"High"},{id:"1234567905",claimId:"1234567905",firstName:"Karen",lastName:"Martinez",userDetails:"Associate Name",nrCodes:"NR016",paidAmount:"$14,200",acrLoadDates:"April 20, 2025",contact:"(555) 567.8901",amount:"$14,200",avatar:"https://i.pravatar.cc/32?img=16",city:"San Francisco",state:"CA",status:"Rejected",priority:"Low"},{id:"1234567906",claimId:"1234567906",firstName:"Joseph",lastName:"Robinson",userDetails:"Senior Associate",nrCodes:"NR017",paidAmount:"$6,900",acrLoadDates:"April 22, 2025",contact:"(555) 678.9012",amount:"$6,900",avatar:"https://i.pravatar.cc/32?img=17",city:"Indianapolis",state:"IN",status:"Approved",priority:"Medium"},{id:"1234567907",claimId:"1234567907",firstName:"Lisa",lastName:"Clark",userDetails:"Analyst",nrCodes:"NR018",paidAmount:"$12,700",acrLoadDates:"April 25, 2025",contact:"(555) 789.0123",amount:"$12,700",avatar:"https://i.pravatar.cc/32?img=18",city:"Seattle",state:"WA",status:"Pending",priority:"High"},{id:"1234567908",claimId:"1234567908",firstName:"Thomas",lastName:"Rodriguez",userDetails:"Supervisor",nrCodes:"NR019",paidAmount:"$9,800",acrLoadDates:"April 28, 2025",contact:"(555) 890.1234",amount:"$9,800",avatar:"https://i.pravatar.cc/32?img=19",city:"Denver",state:"CO",status:"Approved",priority:"Low"},{id:"1234567909",claimId:"1234567909",firstName:"Betty",lastName:"Lewis",userDetails:"Associate Name",nrCodes:"NR020",paidAmount:"$11,100",acrLoadDates:"April 30, 2025",contact:"(555) 901.2345",amount:"$11,100",avatar:"https://i.pravatar.cc/32?img=20",city:"Boston",state:"MA",status:"Pending",priority:"Medium"}],tt=()=>[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0},{id:"claimId",label:"Claim ID",visible:!0,locked:!1,order:1},{id:"firstName",label:"First Name",visible:!0,locked:!1,order:2},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:3},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:4},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:5},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:6},{id:"acrLoadDates",label:"ACR Load Dates",visible:!0,locked:!1,order:7},{id:"city",label:"City",visible:!0,locked:!1,order:8},{id:"state",label:"State",visible:!0,locked:!1,order:9},{id:"contact",label:"Contact",visible:!0,locked:!1,order:10},{id:"status",label:"Status",visible:!0,locked:!1,order:11},{id:"priority",label:"Priority",visible:!0,locked:!1,order:12},{id:"amount",label:"Amount",visible:!0,locked:!1,order:13}],st=()=>[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0},{id:"claimId",label:"User Details",visible:!0,locked:!1,order:1,subColumns:[{id:"firstName",label:"First Name",visible:!0,locked:!1,order:0,parentId:"claimId"},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:1,parentId:"claimId"}]},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:2},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:3},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:4},{id:"acrLoadDates",label:"ACR Load Dates",visible:!0,locked:!1,order:5},{id:"address",label:"Address",visible:!0,locked:!1,order:6,subColumns:[{id:"city",label:"City",visible:!0,locked:!1,order:0,parentId:"address"},{id:"state",label:"State",visible:!0,locked:!1,order:1,parentId:"address"}]},{id:"contact",label:"Contact",visible:!0,locked:!1,order:7},{id:"status",label:"Status",visible:!0,locked:!1,order:8},{id:"priority",label:"Priority",visible:!0,locked:!1,order:9},{id:"amount",label:"Amount",visible:!0,locked:!1,order:10}],ha=({data:t,columns:$,useSidePanel:h=!1,useModal:N=!1,showToolbar:Y=!0,toolbarTitle:G="Data Table",initialColumns:H,onRowClick:C,showColumnSearchByDefault:A=!1,customSidePanelTabs:_=[],sortMode:y="client",onSort:W,sortColumn:X,sortDirection:K,maxHeight:q})=>{const[m,Z]=d.useState(1),[w,fa]=d.useState(10),[ga,ya]=d.useState(""),[va,Ca]=d.useState("none"),T=y==="server"?X||"":ga,v=y==="server"?K||"none":va,[wa,re]=d.useState(!1),[E,B]=d.useState([]),[Q,le]=d.useState(null),[Ta,ie]=d.useState(!1),[U,Sa]=d.useState({}),[de,ce]=d.useState(!1),ka=()=>H||($?$.map((e,a)=>({id:e.id,label:e.label,visible:e.visible!==void 0?e.visible:!0,locked:e.locked||!1,order:e.order!==void 0?e.order:a})):tt()),[f,ee]=d.useState(ka()),[ue,me]=d.useState(!1),[pe,Na]=d.useState({}),[ae,Aa]=d.useState(""),[D,Da]=d.useState({}),[xa,be]=d.useState(!1),[O,Ia]=d.useState([]),te=t||at(),Pa=e=>{const a=f.find(n=>n.id===e);if(!a)return;const o=f.filter(n=>n.locked&&n.id!=="checkbox").length;if(!a.locked&&o>=3){ce(!0),setTimeout(()=>ce(!1),3e3);return}const r=f.map(n=>n.id===e?n.subColumns?{...n,locked:!n.locked,subColumns:n.subColumns.map(u=>({...u,locked:!n.locked}))}:{...n,locked:!n.locked}:n),i=r.find(n=>n.id==="checkbox"),c=r.filter(n=>n.id!=="checkbox").sort((n,u)=>n.locked&&!u.locked?-1:!n.locked&&u.locked?1:n.order-u.order),p=i?[{...i,order:0},...c.map((n,u)=>({...n,order:u+1}))]:c.map((n,u)=>({...n,order:u}));ee(p)},he=e=>{let a;T===e?a=v==="asc"?"desc":v==="desc"?"none":"asc":a="asc",y==="server"&&W?W(e,a):(ya(e),Ca(a)),be(!0),setTimeout(()=>be(!1),50)},Fa=e=>{re(e),B(e?Array.from({length:te.length},(a,o)=>o):[])},Ma=(e,a,o=!1)=>{if(a)if(o&&Q!==null){const r=Math.min(Q,e),i=Math.max(Q,e),l=Array.from({length:i-r+1},(p,n)=>r+n),c=Array.from(new Set([...E,...l]));B(c)}else B([...E,e]),le(e);else B(E.filter(r=>r!==e)),re(!1),le(e)},za=()=>{};d.useEffect(()=>{me(A?!0:O.length>0)},[O,A]);const fe=(e,a)=>{Da(o=>({...o,[e]:a}))},La=(e,a)=>{Na(o=>({...o,[e]:a}))},ge=te.filter(e=>{if(ae){const r=ae.toLowerCase();if(!Object.values(e).some(l=>String(l||"").toLowerCase().includes(r)))return!1}return Object.entries(pe).every(([r,i])=>{if(!i)return!0;const l=e[r];return String(l).toLowerCase().includes(i.toLowerCase())})?O.every(r=>{const i=e[r.columnId];return String(i)===r.value}):!1}),ye=y==="client"&&T&&v!=="none"?[...ge].sort((e,a)=>{let o=e[T],r=a[T];return o<r?v==="asc"?-1:1:o>r?v==="asc"?1:-1:0}):ge,ve=ye.length,Ra=Math.ceil(ve/w),x=(m-1)*w,ja=x+w,Ce=ye.slice(x,ja),$a=e=>{const a=[];return e.forEach(o=>{o.subColumns&&o.subColumns.length>0?a.push(...o.subColumns):a.push(o)}),a},S=f.filter(e=>e.visible),k=$a(S);d.useEffect(()=>{const e=document.querySelector("[data-scroll-container]");if(!e)return;const a=()=>{const i=e.querySelector("tbody tr");if(!i)return;const l=i.querySelectorAll("td");if(!l||l.length===0)return;const c={};let p=0;k.forEach((n,u)=>{if(n.locked&&l[u]){c[n.id]=p;const g=l[u].offsetWidth;p+=g}}),S.forEach(n=>{if(n.subColumns&&n.subColumns.length>0&&(n.subColumns.some(g=>g.locked)||n.locked)){const g=n.subColumns[0];c[g.id]!==void 0&&(c[n.id]=c[g.id])}}),k.some(n=>n.id==="checkbox")&&(c.checkbox=0),Sa(c)};a();const o=new ResizeObserver(()=>{a()}),r=e.querySelector("tbody tr");return r&&r.querySelectorAll("td").forEach(l=>o.observe(l)),()=>{o.disconnect()}},[k.map(e=>e.id+e.locked).join(",")]);const we=S.some(e=>e.subColumns&&e.subColumns.length>0),Ha=()=>s.jsxs(s.Fragment,{children:[s.jsx("tr",{children:S.map(e=>{const a=e.locked,o=U[e.id],r=e.subColumns&&e.subColumns.length>0?e.subColumns.length:1,i=we&&(!e.subColumns||e.subColumns.length===0)?2:1;if(e.id==="checkbox")return s.jsx(oe,{label:"",variant:"default",showCheckbox:!0,checked:wa,onCheckChange:Fa,locked:a,leftOffset:o,"data-locked":a,rowSpan:i,isChildColumn:!0},e.id);const c=D[e.id]||(typeof e.width=="number"?e.width:void 0);return s.jsx(oe,{label:e.label,variant:!a&&!e.subColumns?"resizeable-locked":"default",sortable:!e.subColumns||e.subColumns.length===0,sortDirection:T===e.id?v:"none",onSort:()=>he(e.id),locked:a,onLockToggle:()=>Pa(e.id),leftOffset:o,"data-locked":a,align:r>1?"center":"left",colSpan:r,rowSpan:i,resizable:!e.subColumns,onResize:e.subColumns?void 0:p=>fe(e.id,p),width:c},e.id)})}),we&&s.jsx("tr",{children:S.map(e=>!e.subColumns||e.subColumns.length===0?null:e.subColumns.map(a=>{const o=a.locked,r=U[a.id],l=D[a.id]||(typeof a.width=="number"?a.width:void 0);return s.jsx(oe,{label:a.label,variant:o?"default":"resizeable-locked",sortable:!0,sortDirection:T===a.id?v:"none",onSort:()=>he(a.id),locked:o,leftOffset:r,"data-locked":o,isChildColumn:!0,resizable:!0,onResize:c=>fe(a.id,c),width:l},a.id)}))})]}),Wa=()=>ue?s.jsx("tr",{children:k.map(e=>{const a=e.locked,o=U[e.id],r=e.filterable!==!1;return e.id==="checkbox"?s.jsx("th",{style:{position:a?"sticky":"relative",left:a?`${o}px`:"auto",zIndex:a?3:1,background:"#f9fafb",borderBottom:"1px solid #e5e7eb",padding:"8px 12px",minWidth:"48px"},"data-locked":a?"true":void 0},e.id):r?s.jsx(ba,{searchValue:pe[e.id]||"",searchPlaceholder:`Search ${e.label}`,onSearchChange:i=>La(e.id,i),locked:a,leftOffset:o,"data-locked":a},e.id):s.jsx("th",{style:{position:a?"sticky":"relative",left:a?`${o}px`:"auto",zIndex:a?3:1,background:"#f9fafb",borderBottom:"1px solid #e5e7eb",padding:"8px 12px"},"data-locked":a?"true":void 0},e.id)})}):null;return s.jsxs(Za,{children:[Y&&s.jsx(Ea,{title:G,showGlobalSearch:!0,globalSearchValue:ae,onGlobalSearchChange:Aa,globalSearchPlaceholder:"Search across all columns...",showDropdown:!1,dropdownOptions:[],showDownload:!1,onDownload:()=>console.log("Download clicked"),showFilter:!1,onFilter:()=>console.log("Filter clicked"),showSettings:N,onSettingsClick:()=>ie(!0)}),s.jsxs(Qa,{$hasSidePanel:h,children:[s.jsx(et,{"data-scroll-container":!0,$hasSidePanel:h,$maxHeight:q,children:s.jsxs(Xa,{$hasMaxHeight:!!q,children:[s.jsx("colgroup",{children:S.map(e=>{if(e.subColumns&&e.subColumns.length>0)return e.subColumns.map(a=>{const o=D[a.id],r=o?`${o}px`:a.width||e.width||"150px";return s.jsx("col",{style:{width:r}},a.id)});if(e.id==="checkbox"){const a=D[e.id],o=a?`${a}px`:e.width||"48px";return s.jsx("col",{style:{width:o}},e.id)}else{const a=D[e.id],o=a?`${a}px`:e.width||"150px";return s.jsx("col",{style:{width:o}},e.id)}})}),s.jsxs("thead",{children:[Ha(),Wa()]}),s.jsx("tbody",{children:Ce.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:k.length,style:{textAlign:"center",padding:"48px 24px",color:"#666",fontSize:"14px",fontStyle:"italic"},children:"No data available"})}):Ce.map((e,a)=>{const o=E.includes(x+a),r=k.map((l,c)=>{const p=l.locked,n=U[l.id],u=c===0;return l.id==="checkbox"?s.jsx(se,{selected:o,locked:p,leftOffset:n,"data-locked":p,isFirstColumn:u,showCheckbox:!0,checked:o,onCheckChange:(g,qa)=>Ma(x+a,g,qa)},l.id):l.id==="userDetails"?s.jsx(se,{selected:o,locked:p,leftOffset:n,"data-locked":p,isFirstColumn:u,children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[s.jsx("img",{src:e.avatar,alt:e.userDetails,style:{width:32,height:32,borderRadius:"50%"}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:600},children:e.userDetails}),s.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Role"})]})]})},l.id):s.jsx(se,{selected:o,locked:p,leftOffset:n,"data-locked":p,isFirstColumn:u,children:e[l.id]},l.id)}),i=l=>{C&&C(e,x+a,l)};return xa?s.jsx(Ka,{$animationDelay:a*20,onClick:i,style:{cursor:C?"pointer":"default"},children:r},e.id):s.jsx("tr",{onClick:i,style:{cursor:C?"pointer":"default"},children:r},e.id)})})]})}),h&&s.jsx(Ba,{columns:f.filter(e=>e.id!=="checkbox"),onColumnsChange:e=>{const a=f.find(r=>r.id==="checkbox"),o=a?[a,...e]:e;ee(o)},onFilterToggle:za,showFilters:ue,lockWarning:de,tableData:te,columnFilters:O,onFiltersChange:Ia,customTabs:_})]}),s.jsx(Ua,{currentPage:m,totalPages:Ra,totalItems:ve,itemsPerPage:w,onPageChange:Z,onItemsPerPageChange:fa}),N&&s.jsx(Oa,{isOpen:Ta,onClose:()=>ie(!1),columns:f.filter(e=>e.id!=="checkbox"),lockWarning:de,onColumnsChange:e=>{const a=f.find(r=>r.id==="checkbox"),o=a?[a,...e]:e;ee(o)}})]})};ha.__docgenInfo={description:"",methods:[],displayName:"AdvancedDataTable",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"DataRow"}],raw:"DataRow[]"},description:"Table data rows"},columns:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  accessor?: string | ((row: any) => any);
  sortable?: boolean;
  resizable?: boolean;
  visible?: boolean;
  locked?: boolean;
  order?: number;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"accessor",value:{name:"union",raw:"string | ((row: any) => any)",elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"resizable",value:{name:"boolean",required:!1}},{key:"visible",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"order",value:{name:"number",required:!1}}]}}],raw:`Array<{
  id: string;
  label: string;
  accessor?: string | ((row: any) => any);
  sortable?: boolean;
  resizable?: boolean;
  visible?: boolean;
  locked?: boolean;
  order?: number;
}>`},description:"Table column definitions"},useSidePanel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},useModal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showToolbar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},toolbarTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Data Table'",computed:!1}},initialColumns:{required:!1,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: any, rowIndex: number, event: React.MouseEvent<HTMLTableRowElement>) => void",signature:{arguments:[{type:{name:"any"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableRowElement>",elements:[{name:"HTMLTableRowElement"}]},name:"event"}],return:{name:"void"}}},description:""},showColumnSearchByDefault:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},customSidePanelTabs:{required:!1,tsType:{name:"Array",elements:[{name:"CustomTabConfig"}],raw:"CustomTabConfig[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortMode:{required:!1,tsType:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}]},description:"Sorting mode: 'client' (default) or 'server'",defaultValue:{value:"'client'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnId: string, direction: 'asc' | 'desc' | 'none') => void",signature:{arguments:[{type:{name:"string"},name:"columnId"},{type:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sort changes (only used when sortMode='server')"},sortColumn:{required:!1,tsType:{name:"string"},description:"Controlled sort column (only used when sortMode='server')"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"Controlled sort direction (only used when sortMode='server')"},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height for table body (enables fixed header with internal scroll). Example: '400px', '50vh'"}}};const Dt={title:"Components/Table/Advanced Table",component:ha,parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:600},description:{component:`
## Details:

Advanced table with nested columns, column filters, side panel controls, and drag-and-drop.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Complete Usage Example

\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

// 1. Define your data
const data = [
  { 
    id: 1, 
    claimId: 'CLM-001', 
    firstName: 'John', 
    lastName: 'Doe',
    status: 'Approved', 
    amount: 1500,
    date: '2024-01-15'
  },
  { 
    id: 2, 
    claimId: 'CLM-002', 
    firstName: 'Jane', 
    lastName: 'Smith',
    status: 'Pending', 
    amount: 2300,
    date: '2024-01-16'
  },
];

// 2. Define columns with nested structure
const columns = [
  {
    id: 'claimId',
    label: 'Claim ID',
    accessor: 'claimId',
    sortable: true,
    resizable: true,
    width: 150,
  },
  {
    id: 'patient',
    label: 'Patient Name',
    subColumns: [
      {
        id: 'firstName',
        label: 'First Name',
        accessor: 'firstName',
        sortable: true,
        resizable: true,
      },
      {
        id: 'lastName',
        label: 'Last Name',
        accessor: 'lastName',
        sortable: true,
        resizable: true,
      },
    ],
  },
  {
    id: 'status',
    label: 'Status',
    accessor: 'status',
    sortable: true,
    resizable: true,
  },
  {
    id: 'amount',
    label: 'Amount',
    accessor: 'amount',
    sortable: true,
    resizable: true,
    renderCell: (value) => \`$\${value.toLocaleString()}\`,
  },
];

// 3. Define filters (optional)
const filters = [
  {
    id: 'status',
    label: 'Status',
    type: 'select' as const,
    options: [
      { label: 'All', value: '' },
      { label: 'Approved', value: 'approved' },
      { label: 'Pending', value: 'pending' },
      { label: 'Rejected', value: 'rejected' },
    ],
  },
  {
    id: 'dateRange',
    label: 'Date Range',
    type: 'dateRange' as const,
  },
];

// 4. Use the component
<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
  columnFilters={filters}
  onFiltersChange={(filters) => console.log('Filters changed:', filters)}
/>
\`\`\`

## Customization Guide

### How to Customize the Advanced Table

**1. Custom Toolbar**

Use the toolbar prop to replace the default toolbar with your own:

\`\`\`tsx
import { AdvancedDataTable, TableToolbar, TableToolbarSection, TableToolbarTitle, TableToolbarActions } from '@ajaysoni7832/lean-ids-components';
import { Button } from '@ajaysoni7832/lean-ids-components';
import { Download, Upload } from '@mui/icons-material';

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  toolbar={
    <TableToolbar>
      <TableToolbarSection>
        <TableToolbarTitle>My Custom Title</TableToolbarTitle>
      </TableToolbarSection>
      <TableToolbarActions>
        <Button variant="outlined" size="small" startIcon={<Upload />}>
          Import
        </Button>
        <Button variant="contained" size="small" startIcon={<Download />}>
          Export
        </Button>
      </TableToolbarActions>
    </TableToolbar>
  }
/>
\`\`\`

**2. Custom Filters in Side Panel**

Add column filters using the columnFilters prop (Note: This feature is in the base Table component):

\`\`\`tsx
const filters = [
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'All', value: '' },
      { label: 'Approved', value: 'approved' },
      { label: 'Pending', value: 'pending' },
    ],
  },
  {
    id: 'dateRange',
    label: 'Date Range',
    type: 'dateRange',
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  columnFilters={filters}
  onFiltersChange={(filters) => console.log('Applied filters:', filters)}
/>
\`\`\`

**3. Custom Tabs in Side Panel**

Add custom tabs with your own content using customSidePanelTabs:

\`\`\`tsx
import { Settings, Info } from '@mui/icons-material';

const customTabs = [
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings />,
    content: (
      <div style={{ padding: '16px' }}>
        <h3>Custom Settings</h3>
        <p>Add your custom settings UI here</p>
      </div>
    ),
  },
  {
    id: 'info',
    label: 'Info',
    icon: <Info />,
    onClick: () => {
      alert('Info clicked!');
    },
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  customSidePanelTabs={customTabs}
/>
\`\`\`

**4. Always Show Search Headers**

Force column search headers to be visible by default:

\`\`\`tsx
<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showColumnSearchByDefault={true}
/>
\`\`\`

**5. Handle Row Clicks**

Add custom row click behavior:

\`\`\`tsx
<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  onRowClick={(row, rowIndex, event) => {
    console.log('Clicked row:', row);
    console.log('Row index:', rowIndex);
  }}
/>
\`\`\`

## Features

The Advanced Data Table includes all standard table features plus:

## Core Features

### 1. Sub-Headers (Nested Columns)
- Support for nested column structures
- Parent columns can contain multiple sub-columns
- Example: "Claim ID" header with "First Name" and "Last Name" sub-headers

### 2. Column Search Filters
- Individual search bars for each column in sub-header row
- NEW: Smart search headers - only appear when filters are applied
- Real-time filtering as you type

### 3. Side Panel Controls
- Alternative to modal settings
- Vertical panel on the right side of table
- Two action buttons: "Columns" and "Filters"
- NEW: Filter count badge shows active filter count
- NEW: Custom tabs support for extensibility
- Clicking "Columns" shows overlay with column visibility and ordering
- Clicking "Filters" toggles column search bars in sub-header
- NEW: Click outside to close panel
- Table border radius adjusts when side panel is active (left side only)

### 4. Nested Column Management
- Expandable/collapsible parent columns in settings
- Drag-and-drop reordering for both parent and child columns
- Individual visibility and lock controls for nested columns

## ✨ Latest Enhancements (v2.0)

### 5. Filter Count Badge
- Purple badge on Filter button showing active filter count
- Instant visual feedback without opening panel

### 6. Smart Search Headers
- Search headers only appear when filters are applied
- No more confusion about when search is available
- Developer control via showColumnSearchByDefault prop

### 7. Custom Tabs
- Add your own tabs to the side panel
- Two modes: action-only (onClick) or content panel
- Perfect for export, settings, analytics, etc.

### 8. Click Outside to Close
- Standard overlay behavior - click outside to dismiss
- Protected closing prevents accidental loss of unsaved changes

### 9. Unsaved Changes Protection
- Filter selections tracked as "pending" until Apply is clicked
- Shake animation + warning when trying to close with unsaved changes
- Prevents accidental loss of filter selections

## Props Reference

### Core Props

**data** (optional): Array of data objects to display in the table. If not provided, demo data will be used.

**columns** (optional): Column configuration array with support for nested columns via subColumns property. If not provided, demo columns will be used.

**useSidePanel**: Enable side panel for column/filter controls (default: false, recommended for complex tables)

**useModal**: Enable modal for column settings (default: false, traditional approach)

**showToolbar**: Show toolbar with title and actions (default: true)

**toolbarTitle**: Title displayed in toolbar (default: 'Data Table')

**toolbar**: Custom toolbar content - overrides default toolbar when provided

**initialColumns**: Custom column configuration for nested columns (use with getNestedColumnConfigs helper)

### Customization Props

**customSidePanelTabs**: Array of custom tab configurations to add to side panel - add your own tabs with custom content or actions

**showColumnSearchByDefault**: Force column search headers to always be visible (default: false)

**onRowClick**: Callback when a row is clicked: (row, rowIndex, event) => void

**columnFilters**: Array of filter configurations for the side panel (Note: This is a base Table prop)

**onFiltersChange**: Callback when filters are applied: (filters) => void

### Column Configuration Props

Each column object supports:

**id** (required): Unique identifier for the column

**label** (required): Display label for column header

**accessor**: Property key (string) or function to extract cell value

**sortable**: Enable sorting for this column (default: false)

**resizable**: Enable column resizing (default: false)

**width**: Initial column width in pixels

**minWidth**: Minimum column width (default: 50)

**maxWidth**: Maximum column width

**visible**: Initial visibility state (default: true)

**locked**: Lock column to left side with sticky positioning (default: false)

**subColumns**: Array of nested columns for sub-header structure

**renderCell**: Custom cell renderer function: (value, row, rowIndex) => ReactNode

### Filter Props

**columnFilters**: Array of filter configurations for the side panel

**onFiltersChange**: Callback when filters are applied: (filters) => void

**showColumnSearchByDefault**: Show column search headers by default without clicking Filter button (default: false)

### Custom Tabs

**customTabs**: Array of custom tab configurations to add additional functionality to side panel

### Filter Configuration Interface

\`\`\`tsx
interface ColumnFilter {
  id: string;                    // Must match column id
  label: string;                 // Display label
  type: 'select' | 'dateRange';  // Filter type
  options?: Array<{              // For select type
    label: string;
    value: string;
  }>;
}
\`\`\`

### Custom Tab Configuration Interface

\`\`\`tsx
interface CustomTabConfig {
  id: string;                    // Unique tab identifier
  label: string;                 // Tab button label
  icon?: React.ReactNode;        // Optional icon
  onClick?: () => void;          // Action-only mode (no panel)
  content?: React.ReactNode;     // Panel content mode
}
\`\`\`

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

## Main Reference
Complete basic example:
- Global Search
- Pagination
- Side Panel
        `}}},tags:["autodocs"]},I={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Claims Data"},parameters:{docs:{description:{story:"Table with side panel for column and filter controls. The table has no right border radius to seamlessly connect with the side panel. Column resizing works in both Canvas and Docs views."},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>`},story:{inline:!1,iframeHeight:600}}}},P={args:{useSidePanel:!1,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data"},parameters:{docs:{description:{story:"Traditional table with modal settings. Click the settings icon button in the toolbar to open column settings. Column resizing works in both Canvas and Docs views."},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>`},story:{inline:!1,iframeHeight:600}}}},J={args:{useSidePanel:!0,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data"},parameters:{docs:{description:{story:"Table with both side panel and modal controls available. The toolbar settings button opens the modal, while the side panel provides quick access to column/filter controls. Column resizing works in both Canvas and Docs views."},story:{inline:!1,iframeHeight:600}}}},F={args:{useSidePanel:!1,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data with Sub-Headers",initialColumns:st()},parameters:{docs:{description:{story:'Table with sub-header support showing nested columns. The "User Details" parent column contains "First Name" and "Last Name" sub-columns, and the "Address" parent column contains "City" and "State" sub-columns. This demonstrates the hierarchical column structure with parent-child relationships. Column resizing works in both Canvas and Docs views.'},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { 
    id: 1, 
    claimId: 'CLM-001', 
    firstName: 'John', 
    lastName: 'Doe',
    city: 'New York',
    state: 'NY',
    status: 'Approved'
  },
];

const columns = [
  {
    id: 'claimId',
    label: 'Claim ID',
    accessor: 'claimId',
    sortable: true,
    resizable: true,
  },
  {
    id: 'userDetails',
    label: 'User Details',
    subColumns: [
      {
        id: 'firstName',
        label: 'First Name',
        accessor: 'firstName',
        sortable: true,
        resizable: true,
      },
      {
        id: 'lastName',
        label: 'Last Name',
        accessor: 'lastName',
        sortable: true,
        resizable: true,
      },
    ],
  },
  {
    id: 'address',
    label: 'Address',
    subColumns: [
      {
        id: 'city',
        label: 'City',
        accessor: 'city',
        sortable: true,
        resizable: true,
      },
      {
        id: 'state',
        label: 'State',
        accessor: 'state',
        sortable: true,
        resizable: true,
      },
    ],
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data with Sub-Headers"
/>`},story:{inline:!1,iframeHeight:600}}}},V={args:{useSidePanel:!1,useModal:!1,showToolbar:!1},parameters:{docs:{description:{story:"Basic table without toolbar or settings controls. Useful when column configuration is managed externally."}}}},M={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Table with Filter Count Badge"},parameters:{docs:{description:{story:"**Filter Count Badge & Smart Search Headers**: The Filter button now shows a purple badge with the count of active filters. Search headers only appear when filters are actually applied, not just when clicking the Filter button. This provides better visual feedback and cleaner UX."},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

const filters = [
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'All', value: '' },
      { label: 'Approved', value: 'approved' },
      { label: 'Pending', value: 'pending' },
      { label: 'Rejected', value: 'rejected' },
    ],
  },
  {
    id: 'dateRange',
    label: 'Date Range',
    type: 'dateRange',
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Table with Filters"
  columnFilters={filters}
  onFiltersChange={(filters) => console.log('Filters:', filters)}
/>`},story:{inline:!1,iframeHeight:600}}}},z={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Always Show Search Headers",showColumnSearchByDefault:!0},parameters:{docs:{description:{story:"**Always Visible Search Headers**: Set showColumnSearchByDefault to true to force search headers to always be visible, regardless of filter state. Useful when column search is the primary filtering method."},story:{inline:!1,iframeHeight:600}}}},L={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Table with Custom Tabs",customSidePanelTabs:[{id:"export",label:"Export",icon:"📥",onClick:()=>alert("Export functionality triggered!")},{id:"info",label:"Info",icon:"ℹ️",content:s.jsxs("div",{style:{padding:"16px"},children:[s.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"16px",fontWeight:600},children:"Custom Info Panel"}),s.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666",lineHeight:1.5},children:"This is a custom content panel. You can render any React component here. Perfect for settings, filters, analytics, or any custom functionality."})]})}]},parameters:{docs:{description:{story:'**Custom Tabs**: Add your own tabs to the side panel with customSidePanelTabs prop. Supports both action-only tabs (with onClick) and content tabs (with content ReactNode). Try clicking the "Export" and "Info" tabs!'},story:{inline:!1,iframeHeight:600}}}},R={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Click Outside to Close Demo"},parameters:{docs:{description:{story:"**Click Outside to Close**: The side panel now closes when clicking outside, providing standard overlay/modal behavior. However, if there are unsaved filter changes, the panel prevents closing and shows a warning with shake animation. This prevents accidental loss of filter selections."},story:{inline:!1,iframeHeight:600}}}},j={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Unsaved Changes Protection Demo"},parameters:{docs:{description:{story:'**Unsaved Changes Protection**: Filter selections are now tracked as "pending" until you click Apply. If you try to close the panel with unsaved changes, it prevents closing and shows a shake animation with a warning message: "Please apply, cancel, or reset filters before closing." This ensures users never accidentally lose their filter selections.'},story:{inline:!1,iframeHeight:600}}}};var Te,Se,ke,Ne,Ae;I.parameters={...I.parameters,docs:{...(Te=I.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Claims Data'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with side panel for column and filter controls. The table has no right border radius to seamlessly connect with the side panel. Column resizing works in both Canvas and Docs views.'
      },
      source: {
        code: \`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>\`
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(ke=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:ke.source},description:{story:`## With Side Panel

Advanced table with side panel for column and filter controls. Recommended for complex tables.

**Usage:**
\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>
\`\`\``,...(Ae=(Ne=I.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.description}}};var De,xe,Ie,Pe,Fe;P.parameters={...P.parameters,docs:{...(De=P.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    useSidePanel: false,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data'
  },
  parameters: {
    docs: {
      description: {
        story: 'Traditional table with modal settings. Click the settings icon button in the toolbar to open column settings. Column resizing works in both Canvas and Docs views.'
      },
      source: {
        code: \`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>\`
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(Ie=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source},description:{story:`## With Modal

Traditional table with modal settings dialog. Click settings icon to configure columns.

**Usage:**
\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>
\`\`\``,...(Fe=(Pe=P.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.description}}};var Me,ze,Le;J.parameters={...J.parameters,docs:{...(Me=J.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with both side panel and modal controls available. The toolbar settings button opens the modal, while the side panel provides quick access to column/filter controls. Column resizing works in both Canvas and Docs views.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(Le=(ze=J.parameters)==null?void 0:ze.docs)==null?void 0:Le.source}}};var Re,je,$e,He,We;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
        story: 'Table with sub-header support showing nested columns. The "User Details" parent column contains "First Name" and "Last Name" sub-columns, and the "Address" parent column contains "City" and "State" sub-columns. This demonstrates the hierarchical column structure with parent-child relationships. Column resizing works in both Canvas and Docs views.'
      },
      source: {
        code: \`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { 
    id: 1, 
    claimId: 'CLM-001', 
    firstName: 'John', 
    lastName: 'Doe',
    city: 'New York',
    state: 'NY',
    status: 'Approved'
  },
];

const columns = [
  {
    id: 'claimId',
    label: 'Claim ID',
    accessor: 'claimId',
    sortable: true,
    resizable: true,
  },
  {
    id: 'userDetails',
    label: 'User Details',
    subColumns: [
      {
        id: 'firstName',
        label: 'First Name',
        accessor: 'firstName',
        sortable: true,
        resizable: true,
      },
      {
        id: 'lastName',
        label: 'Last Name',
        accessor: 'lastName',
        sortable: true,
        resizable: true,
      },
    ],
  },
  {
    id: 'address',
    label: 'Address',
    subColumns: [
      {
        id: 'city',
        label: 'City',
        accessor: 'city',
        sortable: true,
        resizable: true,
      },
      {
        id: 'state',
        label: 'State',
        accessor: 'state',
        sortable: true,
        resizable: true,
      },
    ],
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data with Sub-Headers"
/>\`
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...($e=(je=F.parameters)==null?void 0:je.docs)==null?void 0:$e.source},description:{story:`## With Sub-Headers (Nested Columns)

Table with hierarchical column structure using parent-child relationships.

**Usage:**
\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { 
    id: 1, 
    claimId: 'CLM-001', 
    firstName: 'John', 
    lastName: 'Doe',
    city: 'New York',
    state: 'NY',
    status: 'Approved'
  },
];

const columns = [
  {
    id: 'claimId',
    label: 'Claim ID',
    accessor: 'claimId',
    sortable: true,
    resizable: true,
  },
  {
    id: 'userDetails',
    label: 'User Details',
    subColumns: [
      {
        id: 'firstName',
        label: 'First Name',
        accessor: 'firstName',
        sortable: true,
        resizable: true,
      },
      {
        id: 'lastName',
        label: 'Last Name',
        accessor: 'lastName',
        sortable: true,
        resizable: true,
      },
    ],
  },
  {
    id: 'address',
    label: 'Address',
    subColumns: [
      {
        id: 'city',
        label: 'City',
        accessor: 'city',
        sortable: true,
        resizable: true,
      },
      {
        id: 'state',
        label: 'State',
        accessor: 'state',
        sortable: true,
        resizable: true,
      },
    ],
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data with Sub-Headers"
/>
\`\`\``,...(We=(He=F.parameters)==null?void 0:He.docs)==null?void 0:We.description}}};var qe,Ee,Be;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Be=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var Ue,Oe,Je,Ve,Ye;M.parameters={...M.parameters,docs:{...(Ue=M.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Table with Filter Count Badge'
  },
  parameters: {
    docs: {
      description: {
        story: '**Filter Count Badge & Smart Search Headers**: The Filter button now shows a purple badge with the count of active filters. Search headers only appear when filters are actually applied, not just when clicking the Filter button. This provides better visual feedback and cleaner UX.'
      },
      source: {
        code: \`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

const filters = [
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'All', value: '' },
      { label: 'Approved', value: 'approved' },
      { label: 'Pending', value: 'pending' },
      { label: 'Rejected', value: 'rejected' },
    ],
  },
  {
    id: 'dateRange',
    label: 'Date Range',
    type: 'dateRange',
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Table with Filters"
  columnFilters={filters}
  onFiltersChange={(filters) => console.log('Filters:', filters)}
/>\`
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(Je=(Oe=M.parameters)==null?void 0:Oe.docs)==null?void 0:Je.source},description:{story:`## With Filters & Filter Count Badge

Table with column filters and visual filter count badge.

**Usage:**
\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

const filters = [
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'All', value: '' },
      { label: 'Approved', value: 'approved' },
      { label: 'Pending', value: 'pending' },
      { label: 'Rejected', value: 'rejected' },
    ],
  },
  {
    id: 'dateRange',
    label: 'Date Range',
    type: 'dateRange',
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Table with Filters"
  columnFilters={filters}
  onFiltersChange={(filters) => console.log('Filters:', filters)}
/>
\`\`\`

**Features:**
- Filter count badge shows number of active filters
- Smart search headers appear when filters are applied
- Search headers persist when side panel is closed`,...(Ye=(Ve=M.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.description}}};var Ge,_e,Xe,Ke,Ze;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Always Show Search Headers',
    showColumnSearchByDefault: true
  },
  parameters: {
    docs: {
      description: {
        story: '**Always Visible Search Headers**: Set showColumnSearchByDefault to true to force search headers to always be visible, regardless of filter state. Useful when column search is the primary filtering method.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(Xe=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:Xe.source},description:{story:`## New Feature: Always Show Search Headers

**What's New:**
- 🎛️ **Developer control** via showColumnSearchByDefault prop
- 📌 Force search headers to always be visible
- 🔧 Useful when you want search functionality always available

**Use Case:**
When you want column-specific search to be the primary filtering method,
set showColumnSearchByDefault to true to keep search headers always visible.`,...(Ze=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.description}}};var Qe,ea,aa,ta,sa;L.parameters={...L.parameters,docs:{...(Qe=L.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Table with Custom Tabs',
    customSidePanelTabs: [{
      id: 'export',
      label: 'Export',
      icon: '📥',
      onClick: () => alert('Export functionality triggered!')
    }, {
      id: 'info',
      label: 'Info',
      icon: 'ℹ️',
      content: <div style={{
        padding: '16px'
      }}>
            <h3 style={{
          margin: '0 0 12px 0',
          fontSize: '16px',
          fontWeight: 600
        }}>
              Custom Info Panel
            </h3>
            <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#666',
          lineHeight: 1.5
        }}>
              This is a custom content panel. You can render any React component here.
              Perfect for settings, filters, analytics, or any custom functionality.
            </p>
          </div>
    }]
  },
  parameters: {
    docs: {
      description: {
        story: '**Custom Tabs**: Add your own tabs to the side panel with customSidePanelTabs prop. Supports both action-only tabs (with onClick) and content tabs (with content ReactNode). Try clicking the "Export" and "Info" tabs!'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(aa=(ea=L.parameters)==null?void 0:ea.docs)==null?void 0:aa.source},description:{story:`## New Feature: Custom Tabs in Side Panel

**What's New:**
- ➕ **Add custom tabs** below Columns and Filters
- 🎯 Two modes: **Action-only** or **Content panel**
- 🔧 Fully customizable for developer needs

**Example Custom Tabs:**
- Export: Action-only tab that triggers export
- Settings: Content tab with custom settings panel

**Usage:**
\`\`\`tsx
import { DownloadIcon, SettingsIcon } from '@mui/icons-material';

<AdvancedDataTable
  customSidePanelTabs={[
    {
      id: 'export',
      label: 'Export',
      icon: <DownloadIcon />,
      onClick: () => handleExport()
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      content: <CustomSettingsPanel />
    }
  ]}
/>
\`\`\``,...(sa=(ta=L.parameters)==null?void 0:ta.docs)==null?void 0:sa.description}}};var oa,na,ra,la,ia;R.parameters={...R.parameters,docs:{...(oa=R.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Click Outside to Close Demo'
  },
  parameters: {
    docs: {
      description: {
        story: '**Click Outside to Close**: The side panel now closes when clicking outside, providing standard overlay/modal behavior. However, if there are unsaved filter changes, the panel prevents closing and shows a warning with shake animation. This prevents accidental loss of filter selections.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(ra=(na=R.parameters)==null?void 0:na.docs)==null?void 0:ra.source},description:{story:`## New Feature: Click Outside to Close

**What's New:**
- 🖱️ **Click outside** the expanded panel to close it
- 🛡️ **Protected closing** - prevents closing if there are unsaved filter changes
- ⚠️ **Shake animation** + warning message when trying to close with unsaved changes

**Try it:**
1. Click "Filters" to open side panel
2. Click outside the panel - it closes (no unsaved changes)
3. Click "Filters" again, select a filter but DON'T click Apply
4. Try clicking outside - panel shakes and shows warning
5. Must click Apply/Cancel/Reset to close`,...(ia=(la=R.parameters)==null?void 0:la.docs)==null?void 0:ia.description}}};var da,ca,ua,ma,pa;j.parameters={...j.parameters,docs:{...(da=j.parameters)==null?void 0:da.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Unsaved Changes Protection Demo'
  },
  parameters: {
    docs: {
      description: {
        story: '**Unsaved Changes Protection**: Filter selections are now tracked as "pending" until you click Apply. If you try to close the panel with unsaved changes, it prevents closing and shows a shake animation with a warning message: "Please apply, cancel, or reset filters before closing." This ensures users never accidentally lose their filter selections.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(ua=(ca=j.parameters)==null?void 0:ca.docs)==null?void 0:ua.source},description:{story:`## New Feature: Unsaved Changes Protection

**What's New:**
- 💾 **Pending filter state** - filter selections aren't applied until you click Apply
- 🔒 **Prevents accidental loss** of filter selections
- 💥 **Shake animation** on action buttons when trying to close with unsaved changes
- ⚠️ **Inline warning message** explains what to do

**Behavior:**
- Select filters → stored as "pending" (not applied yet)
- Try to close → blocked with warning
- Must explicitly Apply, Cancel, or Reset

**Try it:**
1. Open Filters panel
2. Select any filter value from dropdown
3. Try clicking outside or pressing ESC
4. Notice the shake animation and warning message
5. Click Apply to save, Cancel to discard, or Reset to clear all`,...(pa=(ma=j.parameters)==null?void 0:ma.docs)==null?void 0:pa.description}}};const xt=["WithSidePanel","WithModal","WithBothControls","WithSubHeaders","DefaultTable","WithFilterCountBadge","WithAlwaysVisibleSearchHeaders","WithCustomTabs","WithClickOutsideToClose","WithUnsavedChangesProtection"];export{V as DefaultTable,z as WithAlwaysVisibleSearchHeaders,J as WithBothControls,R as WithClickOutsideToClose,L as WithCustomTabs,M as WithFilterCountBadge,P as WithModal,I as WithSidePanel,F as WithSubHeaders,j as WithUnsavedChangesProtection,xt as __namedExportsOrder,Dt as default};
