import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{r as m,R as Ve}from"./index-B0WjJBI_.js";import{c as p}from"./styled-components.browser.esm-DvYOtweu.js";import{T as Be,b as ue,c as _e,a as pe}from"./TableToolbar-DatDlyNC.js";import{a as Je,E as Ge}from"./ExpandMore-CVtF5XTt.js";import{D as be,F as Xe,C as Ue,L as Ye,a as Ke}from"./Icon-jrFtYy1b.js";import{I as Ze}from"./InlineMessage-CQv8tPZm.js";import{S as Qe}from"./Select-DaX1ClJ7.js";import{C as Oe}from"./Checkbox-BBM9hoQN.js";import{P as et}from"./Pagination-B5YwtZ0w.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-B_606pXo.js";import"./Chip-BmQRtEfP.js";import"./Button-B6IX_q4c.js";import"./InputField-Bzy5pWwT.js";import"./FieldImportance-jg2xgwkw.js";import"./HelpingText-DR1HlZpx.js";import"./RadioButton-aYFoBlAR.js";const tt=p.th`
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
`,at=p.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[8]};
  width: 100%;
`,st=p.input`
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
`,ot=p.button`
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
`,rt=()=>a.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),he=({searchValue:e="",searchPlaceholder:g="Search",onSearchChange:L,locked:H=!1,leftOffset:I=0,width:E,className:v})=>{const T=h=>{L&&L(h.target.value)};return a.jsx(tt,{$locked:H,$leftOffset:I,style:{width:E},className:v,"data-locked":H?"true":void 0,children:a.jsxs(at,{children:[a.jsx(st,{type:"text",value:e,placeholder:g,onChange:T,onClick:h=>h.stopPropagation()}),a.jsx(ot,{type:"button",onClick:h=>h.stopPropagation(),children:a.jsx(rt,{})})]})})};he.__docgenInfo={description:"",methods:[],displayName:"TableSubHeader",props:{searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const nt=p.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 100%;
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  flex-shrink: 0;
`,Ce=p.button`
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
`,xe=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
`,ve=p.div`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
`,lt=p.div`
  position: absolute;
  top: 0;
  right: 30px;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
`,it=p.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  background-color: ${({theme:e})=>e.colors.palette.neutral[200]};
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
`,dt=p.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[7]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  background-color: ${({theme:e})=>e.colors.palette.neutral[200]};
`,me=p.button`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  
  ${({$variant:e,theme:g})=>e==="primary"?`
        background-color: ${g.colors.palette.primary[600]};
        color: white;
        border-color: ${g.colors.palette.primary[600]};
        &:hover {
          background-color: ${g.colors.palette.primary[700]};
        }
      `:e==="danger"?`
        background-color: transparent;
        color: ${g.colors.palette.error[600]};
        border-color: ${g.colors.palette.error[600]};
        &:hover {
          background-color: ${g.colors.palette.error[50]};
        }
      `:`
      background-color: transparent;
      color: ${g.colors.palette.neutral[700]};
      &:hover {
        background-color: ${g.colors.palette.neutral[100]};
      }
    `}
`,ct=p.div`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[7]};
  overflow-y: auto;
  background-color: ${({theme:e})=>e.colors.palette.neutral[200]};
`,ut=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,We=p.div`
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
`,pt=p(We)`
  margin-left: ${({theme:e})=>e.spacing[7]};
  background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
`,ye=p.button`
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
`,mt=p.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,ht=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({$isLocked:e,theme:g})=>e?g.colors.palette.neutral[400]:g.colors.palette.neutral[600]};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"grab"};
  flex-shrink: 0;
`,ft=p.button`
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
`,gt=p.span`
  flex: 1;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ze=({columns:e,onColumnsChange:g,onFilterToggle:L,showFilters:H=!1,lockWarning:I=!1,className:E})=>{const[v,T]=m.useState(null),[h,D]=m.useState(e),[b,j]=m.useState(null),[ne,P]=m.useState(!1),[q,R]=m.useState(new Set),[fe,V]=m.useState(null);m.useEffect(()=>{D(e)},[e]),m.useEffect(()=>{if(I){P(!0);const s=setTimeout(()=>P(!1),3e3);return()=>clearTimeout(s)}},[I]);const F=()=>{T(v==="columns"?null:"columns")},le=()=>{T(v==="filters"?null:"filters"),L&&L()},X=()=>{const s=e.map((r,n)=>r.subColumns?{...r,visible:!0,locked:!1,order:n,subColumns:r.subColumns.map((u,x)=>({...u,visible:!0,locked:!1}))}:{...r,visible:!0,locked:!1,order:n});D(s),R(new Set)},U=()=>{g(h),T(null)},$=()=>{D(e),T(null)},B=s=>{R(r=>{const n=new Set(r);return n.has(s)?n.delete(s):n.add(s),n})},_=s=>{D(r=>r.map(n=>n.id===s?n.subColumns?{...n,visible:!n.visible,subColumns:n.subColumns.map(u=>({...u,visible:!n.visible}))}:{...n,visible:!n.visible}:n.subColumns?{...n,subColumns:n.subColumns.map(u=>u.id===s?{...u,visible:!u.visible}:u)}:n))},ie=s=>{const r=h.find(c=>c.id===s);if(!r)return;const n=h.filter(c=>c.locked&&c.id!=="checkbox").length;if(!r.locked&&n>=3){P(!0),setTimeout(()=>P(!1),3e3);return}const C=h.map(c=>c.id===s?c.subColumns?{...c,locked:!c.locked,subColumns:c.subColumns.map(f=>({...f,locked:!c.locked}))}:{...c,locked:!c.locked}:c).sort((c,f)=>c.id==="checkbox"?-1:f.id==="checkbox"?1:c.locked&&!f.locked?-1:!c.locked&&f.locked?1:c.order-f.order).map((c,f)=>({...c,order:f}));D(C)},Y=(s,r)=>{const n=h.filter(u=>u.id!=="checkbox")[s];n&&n.locked||j(s)},de=(s,r,n)=>{var M,Q;if(s.preventDefault(),b===null||b===r)return;const u=h.filter(N=>N.id!=="checkbox");if((M=u[r])!=null&&M.locked||(Q=u[b])!=null&&Q.locked)return;const x=h.find(N=>N.id==="checkbox"),C=[...u],c=C[b];C.splice(b,1),C.splice(r,0,c);const f=C.map((N,ee)=>({...N,order:x?ee+1:ee})),G=x?[{...x,order:0},...f]:f;D(G),j(r)},J=(s,r)=>{j(r)},ce=(s,r,n)=>{s.preventDefault(),!(b===null||b===n)&&(D(u=>u.map(x=>{if(x.id===r&&x.subColumns){const C=[...x.subColumns],c=C[b];return C.splice(b,1),C.splice(n,0,c),{...x,subColumns:C}}return x})),j(n))},K=()=>{j(null)},Z=(s,r,n)=>{const u=s.subColumns&&s.subColumns.length>0,x=q.has(s.id),C=!!n,c=C?pt:We;return a.jsxs(Ve.Fragment,{children:[a.jsxs(c,{draggable:!s.locked&&!u,onDragStart:()=>{C&&n?J(n,r):u||Y(r)},onDragOver:f=>{C&&n?ce(f,n,r):u||de(f,r)},onDragEnd:K,onMouseEnter:()=>V(s.id),onMouseLeave:()=>V(null),$isDragging:b===r,$isLocked:s.locked,children:[u?a.jsx(ye,{onClick:()=>B(s.id),children:x?a.jsx(Ge,{}):a.jsx(Ue,{})}):a.jsx(ye,{style:{visibility:"hidden"}}),a.jsx(mt,{children:a.jsx(Oe,{checked:s.visible!==!1,onChange:()=>_(s.id)})}),a.jsx(ht,{$isLocked:s.locked||u,children:a.jsx(be,{style:{fontSize:"16px"}})}),!C&&a.jsx(ft,{onClick:()=>ie(s.id),children:s.locked?a.jsx(Ye,{style:{fontSize:"16px"}}):a.jsx(Ke,{style:{fontSize:"16px"}})}),a.jsx(gt,{children:s.label})]}),u&&x&&s.subColumns.map((f,G)=>Z(f,G,s.id))]},s.id)};return a.jsxs(a.Fragment,{children:[a.jsxs(nt,{className:E,children:[a.jsxs(Ce,{onClick:F,$active:v==="columns",children:[a.jsx(xe,{children:v==="columns"?a.jsx(Je,{style:{fontSize:"16px"}}):a.jsx(be,{style:{fontSize:"16px"}})}),a.jsx(ve,{children:"Columns"})]}),a.jsxs(Ce,{onClick:le,$active:v==="filters",children:[a.jsx(xe,{children:a.jsx(Xe,{style:{fontSize:"16px"}})}),a.jsx(ve,{children:"Filters"})]})]}),v&&a.jsx(lt,{children:a.jsxs(it,{children:[a.jsxs(dt,{children:[a.jsx(me,{onClick:X,$variant:"danger",children:"Reset"}),a.jsx(me,{onClick:$,$variant:"secondary",children:"Cancel"}),a.jsx(me,{onClick:U,$variant:"primary",children:"Apply"})]}),a.jsxs(ct,{children:[ne&&a.jsx("div",{style:{marginBottom:"16px"},children:a.jsx(Ze,{type:"warning",style:"accentBorder",text:"Maximum columns reached",descriptionText:"You can only freeze any 3 columns at a time.",showLeadingIcon:!0,showTrailingIcon:!1,action:!1,link:!1})}),v==="columns"&&a.jsx(ut,{children:h.filter(s=>s.id!=="checkbox").map((s,r)=>Z(s,r))}),v==="filters"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666",fontStyle:"italic"},children:"Note: Filter options will be populated with actual table data values"}),(()=>{const s=[];return h.forEach(r=>{r.subColumns&&r.subColumns.length>0?s.push(...r.subColumns):s.push(r)}),s.filter(r=>r.id!=="checkbox"&&r.visible!==!1).map(r=>{const n=[{value:"",label:"All"},{value:"value1",label:"Value 1"},{value:"value2",label:"Value 2"},{value:"value3",label:"Value 3"}];return a.jsx(Qe,{label:r.label,placeholder:`Filter by ${r.label}`,options:n,size:"small",searchable:!0,showSelectionIndicator:!1},r.id)})})()]})]})]})})]})};ze.__docgenInfo={description:"",methods:[],displayName:"TableSidePanel",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:""},onColumnsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(columns: ColumnConfig[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},name:"columns"}],return:{name:"void"}}},description:""},onFilterToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showFilters:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lockWarning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const bt=p.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
`,Ct=p.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[8]};
  width: 100%;
`,xt=p.div`
  display: flex;
  gap: 0;
  width: 100%;
  position: relative;
`,vt=p.div`
  overflow-x: auto;
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  border-radius: ${({$hasSidePanel:e})=>e?"8px 0 0 8px":"8px"};
  position: relative;
  flex: 1;
`,yt=()=>[{id:"1234567890",claimId:"1234567890",firstName:"John",lastName:"Doe",userDetails:"Associate Name",nrCodes:"NR001",paidAmount:"$4,680",acrLoadDates:"March 12, 2025",contact:"(555) 112.3334",amount:"$4,680",avatar:"https://i.pravatar.cc/32?img=1",city:"New York",state:"NY",status:"Approved",priority:"High"},{id:"1234567891",claimId:"1234567891",firstName:"Jane",lastName:"Smith",userDetails:"Manager",nrCodes:"NR002",paidAmount:"$10,293",acrLoadDates:"March 15, 2025",contact:"(555) 800.0000",amount:"$10,293",avatar:"https://i.pravatar.cc/32?img=2",city:"Los Angeles",state:"CA",status:"Pending",priority:"Medium"},{id:"1234567892",claimId:"1234567892",firstName:"Michael",lastName:"Johnson",userDetails:"Senior Associate",nrCodes:"NR003",paidAmount:"$7,450",acrLoadDates:"March 18, 2025",contact:"(555) 234.5678",amount:"$7,450",avatar:"https://i.pravatar.cc/32?img=3",city:"Chicago",state:"IL",status:"Approved",priority:"Low"},{id:"1234567893",claimId:"1234567893",firstName:"Emily",lastName:"Brown",userDetails:"Analyst",nrCodes:"NR004",paidAmount:"$5,820",acrLoadDates:"March 20, 2025",contact:"(555) 345.6789",amount:"$5,820",avatar:"https://i.pravatar.cc/32?img=4",city:"Houston",state:"TX",status:"Rejected",priority:"High"},{id:"1234567894",claimId:"1234567894",firstName:"David",lastName:"Wilson",userDetails:"Supervisor",nrCodes:"NR005",paidAmount:"$12,100",acrLoadDates:"March 22, 2025",contact:"(555) 456.7890",amount:"$12,100",avatar:"https://i.pravatar.cc/32?img=5",city:"Phoenix",state:"AZ",status:"Approved",priority:"Medium"},{id:"1234567895",claimId:"1234567895",firstName:"Sarah",lastName:"Martinez",userDetails:"Associate Name",nrCodes:"NR006",paidAmount:"$8,900",acrLoadDates:"March 25, 2025",contact:"(555) 567.8901",amount:"$8,900",avatar:"https://i.pravatar.cc/32?img=6",city:"Philadelphia",state:"PA",status:"Pending",priority:"High"},{id:"1234567896",claimId:"1234567896",firstName:"James",lastName:"Anderson",userDetails:"Lead",nrCodes:"NR007",paidAmount:"$15,200",acrLoadDates:"March 28, 2025",contact:"(555) 678.9012",amount:"$15,200",avatar:"https://i.pravatar.cc/32?img=7",city:"San Antonio",state:"TX",status:"Approved",priority:"Low"},{id:"1234567897",claimId:"1234567897",firstName:"Linda",lastName:"Taylor",userDetails:"Manager",nrCodes:"NR008",paidAmount:"$6,750",acrLoadDates:"March 30, 2025",contact:"(555) 789.0123",amount:"$6,750",avatar:"https://i.pravatar.cc/32?img=8",city:"San Diego",state:"CA",status:"Pending",priority:"Medium"},{id:"1234567898",claimId:"1234567898",firstName:"Robert",lastName:"Thomas",userDetails:"Associate Name",nrCodes:"NR009",paidAmount:"$9,300",acrLoadDates:"April 2, 2025",contact:"(555) 890.1234",amount:"$9,300",avatar:"https://i.pravatar.cc/32?img=9",city:"Dallas",state:"TX",status:"Approved",priority:"High"},{id:"1234567899",claimId:"1234567899",firstName:"Patricia",lastName:"Jackson",userDetails:"Senior Associate",nrCodes:"NR010",paidAmount:"$11,500",acrLoadDates:"April 5, 2025",contact:"(555) 901.2345",amount:"$11,500",avatar:"https://i.pravatar.cc/32?img=10",city:"San Jose",state:"CA",status:"Rejected",priority:"Low"},{id:"1234567900",claimId:"1234567900",firstName:"Christopher",lastName:"White",userDetails:"Analyst",nrCodes:"NR011",paidAmount:"$7,200",acrLoadDates:"April 8, 2025",contact:"(555) 012.3456",amount:"$7,200",avatar:"https://i.pravatar.cc/32?img=11",city:"Austin",state:"TX",status:"Approved",priority:"Medium"},{id:"1234567901",claimId:"1234567901",firstName:"Barbara",lastName:"Harris",userDetails:"Supervisor",nrCodes:"NR012",paidAmount:"$13,800",acrLoadDates:"April 10, 2025",contact:"(555) 123.4567",amount:"$13,800",avatar:"https://i.pravatar.cc/32?img=12",city:"Jacksonville",state:"FL",status:"Pending",priority:"High"},{id:"1234567902",claimId:"1234567902",firstName:"Daniel",lastName:"Martin",userDetails:"Associate Name",nrCodes:"NR013",paidAmount:"$5,600",acrLoadDates:"April 12, 2025",contact:"(555) 234.5678",amount:"$5,600",avatar:"https://i.pravatar.cc/32?img=13",city:"Fort Worth",state:"TX",status:"Approved",priority:"Low"},{id:"1234567903",claimId:"1234567903",firstName:"Nancy",lastName:"Thompson",userDetails:"Lead",nrCodes:"NR014",paidAmount:"$10,900",acrLoadDates:"April 15, 2025",contact:"(555) 345.6789",amount:"$10,900",avatar:"https://i.pravatar.cc/32?img=14",city:"Columbus",state:"OH",status:"Pending",priority:"Medium"},{id:"1234567904",claimId:"1234567904",firstName:"Matthew",lastName:"Garcia",userDetails:"Manager",nrCodes:"NR015",paidAmount:"$8,400",acrLoadDates:"April 18, 2025",contact:"(555) 456.7890",amount:"$8,400",avatar:"https://i.pravatar.cc/32?img=15",city:"Charlotte",state:"NC",status:"Approved",priority:"High"},{id:"1234567905",claimId:"1234567905",firstName:"Karen",lastName:"Martinez",userDetails:"Associate Name",nrCodes:"NR016",paidAmount:"$14,200",acrLoadDates:"April 20, 2025",contact:"(555) 567.8901",amount:"$14,200",avatar:"https://i.pravatar.cc/32?img=16",city:"San Francisco",state:"CA",status:"Rejected",priority:"Low"},{id:"1234567906",claimId:"1234567906",firstName:"Joseph",lastName:"Robinson",userDetails:"Senior Associate",nrCodes:"NR017",paidAmount:"$6,900",acrLoadDates:"April 22, 2025",contact:"(555) 678.9012",amount:"$6,900",avatar:"https://i.pravatar.cc/32?img=17",city:"Indianapolis",state:"IN",status:"Approved",priority:"Medium"},{id:"1234567907",claimId:"1234567907",firstName:"Lisa",lastName:"Clark",userDetails:"Analyst",nrCodes:"NR018",paidAmount:"$12,700",acrLoadDates:"April 25, 2025",contact:"(555) 789.0123",amount:"$12,700",avatar:"https://i.pravatar.cc/32?img=18",city:"Seattle",state:"WA",status:"Pending",priority:"High"},{id:"1234567908",claimId:"1234567908",firstName:"Thomas",lastName:"Rodriguez",userDetails:"Supervisor",nrCodes:"NR019",paidAmount:"$9,800",acrLoadDates:"April 28, 2025",contact:"(555) 890.1234",amount:"$9,800",avatar:"https://i.pravatar.cc/32?img=19",city:"Denver",state:"CO",status:"Approved",priority:"Low"},{id:"1234567909",claimId:"1234567909",firstName:"Betty",lastName:"Lewis",userDetails:"Associate Name",nrCodes:"NR020",paidAmount:"$11,100",acrLoadDates:"April 30, 2025",contact:"(555) 901.2345",amount:"$11,100",avatar:"https://i.pravatar.cc/32?img=20",city:"Boston",state:"MA",status:"Pending",priority:"Medium"}],kt=()=>[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0},{id:"claimId",label:"User Details",visible:!0,locked:!1,order:1,subColumns:[{id:"firstName",label:"First Name",visible:!0,locked:!1,order:0,parentId:"claimId"},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:1,parentId:"claimId"}]},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:2},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:3},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:4},{id:"acrLoadDates",label:"ACR Load Dates",visible:!0,locked:!1,order:5},{id:"address",label:"Address",visible:!0,locked:!1,order:6,subColumns:[{id:"city",label:"City",visible:!0,locked:!1,order:0,parentId:"address"},{id:"state",label:"State",visible:!0,locked:!1,order:1,parentId:"address"}]},{id:"contact",label:"Contact",visible:!0,locked:!1,order:7},{id:"status",label:"Status",visible:!0,locked:!1,order:8},{id:"priority",label:"Priority",visible:!0,locked:!1,order:9},{id:"amount",label:"Amount",visible:!0,locked:!1,order:10}],He=({useSidePanel:e=!1,useModal:g=!1,showToolbar:L=!0,toolbarTitle:H="Data Table"})=>{const[I,E]=m.useState(1),[v,T]=m.useState(10),[h,D]=m.useState("claimId"),[b,j]=m.useState("asc"),[ne,P]=m.useState(!1),[q,R]=m.useState([]),[fe,V]=m.useState(!1),[F,le]=m.useState({}),[X,U]=m.useState(!1),[$,B]=m.useState(kt()),[_,ie]=m.useState(!1),[Y,de]=m.useState({}),[J,ce]=m.useState(""),K=yt(),Z=t=>{const o=$.find(i=>i.id===t);if(!o)return;const l=$.filter(i=>i.locked&&i.id!=="checkbox").length;if(!o.locked&&l>=3){U(!0),setTimeout(()=>U(!1),3e3);return}const d=$.map(i=>i.id===t?i.subColumns?{...i,locked:!i.locked,subColumns:i.subColumns.map(S=>({...S,locked:!i.locked}))}:{...i,locked:!i.locked}:i),w=d.find(i=>i.id==="checkbox"),k=d.filter(i=>i.id!=="checkbox").sort((i,S)=>i.locked&&!S.locked?-1:!i.locked&&S.locked?1:i.order-S.order),A=w?[{...w,order:0},...k.map((i,S)=>({...i,order:S+1}))]:k.map((i,S)=>({...i,order:S}));B(A)},s=t=>{h===t?j(b==="asc"?"desc":b==="desc"?"none":"asc"):(D(t),j("asc"))},r=t=>{P(t),R(t?Array.from({length:K.length},(o,l)=>l):[])},n=(t,o)=>{o?R([...q,t]):(R(q.filter(l=>l!==t)),P(!1))},u=()=>{ie(!_)},x=(t,o)=>{de(l=>({...l,[t]:o}))},c=[...K.filter(t=>{if(J){const o=J.toLowerCase();if(!Object.values(t).some(d=>String(d||"").toLowerCase().includes(o)))return!1}return Object.entries(Y).every(([o,l])=>{if(!l)return!0;const d=t[o];return String(d).toLowerCase().includes(l.toLowerCase())})})].sort((t,o)=>{if(b==="none")return 0;let l=t[h],d=o[h];return l<d?b==="asc"?-1:1:l>d?b==="asc"?1:-1:0}),f=c.length,G=Math.ceil(f/v),M=(I-1)*v,Q=M+v,N=c.slice(M,Q),ee=t=>{const o=[];return t.forEach(l=>{l.subColumns&&l.subColumns.length>0?o.push(...l.subColumns):o.push(l)}),o},O=$.filter(t=>t.visible),W=ee(O);m.useEffect(()=>{const t=document.querySelector("[data-scroll-container]");if(!t)return;const o=()=>{const w=t.querySelector("tbody tr");if(!w)return;const y=w.querySelectorAll("td");if(!y||y.length===0)return;const k={};let A=0;W.forEach((i,S)=>{if(i.locked&&y[S]){k[i.id]=A;const z=y[S].offsetWidth;A+=z}}),O.forEach(i=>{if(i.subColumns&&i.subColumns.length>0&&(i.subColumns.some(z=>z.locked)||i.locked)){const z=i.subColumns[0];k[z.id]!==void 0&&(k[i.id]=k[z.id])}}),W.some(i=>i.id==="checkbox")&&(k.checkbox=0),le(k)};o();const l=new ResizeObserver(()=>{o()}),d=t.querySelector("tbody tr");return d&&d.querySelectorAll("td").forEach(y=>l.observe(y)),()=>{l.disconnect()}},[W.map(t=>t.id+t.locked).join(",")]);const ge=O.some(t=>t.subColumns&&t.subColumns.length>0),Ee=()=>a.jsxs(a.Fragment,{children:[a.jsx("tr",{children:O.map(t=>{const o=t.locked,l=F[t.id],d=t.subColumns&&t.subColumns.length>0?t.subColumns.length:1,w=ge&&(!t.subColumns||t.subColumns.length===0)?2:1;return t.id==="checkbox"?a.jsx(pe,{label:"",variant:"default",showCheckbox:!0,checked:ne,onCheckChange:r,locked:o,leftOffset:l,"data-locked":o,rowSpan:w,isChildColumn:!0},t.id):a.jsx(pe,{label:t.label,variant:"default",sortable:!t.subColumns||t.subColumns.length===0,sortDirection:h===t.id?b:"none",onSort:()=>s(t.id),locked:o,onLockToggle:()=>Z(t.id),leftOffset:l,"data-locked":o,align:d>1?"center":"left",colSpan:d,rowSpan:w},t.id)})}),ge&&a.jsx("tr",{children:O.map(t=>!t.subColumns||t.subColumns.length===0?null:t.subColumns.map(o=>{const l=o.locked,d=F[o.id];return a.jsx(pe,{label:o.label,variant:"default",sortable:!0,sortDirection:h===o.id?b:"none",onSort:()=>s(o.id),locked:l,leftOffset:d,"data-locked":l,isChildColumn:!0},o.id)}))})]}),qe=()=>_?a.jsx("tr",{children:W.map(t=>{const o=t.locked,l=F[t.id];return t.id==="checkbox"?a.jsx(he,{locked:o,leftOffset:l},t.id):a.jsx(he,{searchValue:Y[t.id]||"",searchPlaceholder:`Search ${t.label}`,onSearchChange:d=>x(t.id,d),locked:o,leftOffset:l,"data-locked":o},t.id)})}):null;return a.jsxs(Ct,{children:[L&&a.jsx(Be,{title:H,showGlobalSearch:!0,globalSearchValue:J,onGlobalSearchChange:ce,globalSearchPlaceholder:"Search across all columns...",showDropdown:!1,dropdownOptions:[],showDownload:!1,onDownload:()=>console.log("Download clicked"),showFilter:!1,onFilter:()=>console.log("Filter clicked"),showSettings:g,onSettingsClick:()=>V(!0)}),a.jsxs(xt,{$hasSidePanel:e,children:[a.jsx(vt,{"data-scroll-container":!0,$hasSidePanel:e,children:a.jsxs(bt,{children:[a.jsx("colgroup",{children:O.map(t=>t.subColumns&&t.subColumns.length>0?t.subColumns.map(o=>a.jsx("col",{style:{width:"150px"}},o.id)):t.id==="checkbox"?a.jsx("col",{style:{width:"48px"}},t.id):a.jsx("col",{style:{width:"150px"}},t.id))}),a.jsxs("thead",{children:[Ee(),qe()]}),a.jsx("tbody",{children:N.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:W.length,style:{textAlign:"center",padding:"48px 24px",color:"#666",fontSize:"14px",fontStyle:"italic"},children:"No data available"})}):N.map((t,o)=>{const l=q.includes(M+o);return a.jsx("tr",{children:W.map((d,w)=>{const y=d.locked,k=F[d.id],A=w===0;return d.id==="checkbox"?a.jsx(ue,{selected:l,locked:y,leftOffset:k,"data-locked":y,isFirstColumn:A,children:a.jsx(Oe,{checked:l,onChange:i=>n(M+o,i.target.checked)})},d.id):d.id==="userDetails"?a.jsx(ue,{selected:l,locked:y,leftOffset:k,"data-locked":y,isFirstColumn:A,children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("img",{src:t.avatar,alt:t.userDetails,style:{width:32,height:32,borderRadius:"50%"}}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:600},children:t.userDetails}),a.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Role"})]})]})},d.id):a.jsx(ue,{selected:l,locked:y,leftOffset:k,"data-locked":y,isFirstColumn:A,children:t[d.id]},d.id)})},t.id)})})]})}),e&&a.jsx(ze,{columns:$.filter(t=>t.id!=="checkbox"),onColumnsChange:t=>{const o=$.find(d=>d.id==="checkbox"),l=o?[o,...t]:t;B(l)},onFilterToggle:u,showFilters:_,lockWarning:X})]}),a.jsx(et,{currentPage:I,totalPages:G,totalItems:f,itemsPerPage:v,onPageChange:E,onItemsPerPageChange:T}),g&&a.jsx(_e,{isOpen:fe,onClose:()=>V(!1),columns:$.filter(t=>t.id!=="checkbox"),lockWarning:X,onColumnsChange:t=>{const o=$.find(d=>d.id==="checkbox"),l=o?[o,...t]:t;B(l)}})]})};He.__docgenInfo={description:"",methods:[],displayName:"AdvancedDataTable",props:{useSidePanel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},useModal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showToolbar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},toolbarTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Data Table'",computed:!1}}}};const Et={title:"Components/Table/Advanced Table",component:He,parameters:{layout:"padded",docs:{description:{component:`
# Advanced Data Table

The Advanced Data Table includes all the features of the standard table plus:

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

## Usage Modes

### With Side Panel (Recommended for complex tables)
\`\`\`tsx
<AdvancedDataTable useSidePanel={true} />
\`\`\`

### With Modal (Traditional approach)
\`\`\`tsx
<AdvancedDataTable useModal={true} />
\`\`\`

### Both Modes
\`\`\`tsx
<AdvancedDataTable useSidePanel={true} useModal={true} />
\`\`\`

## Design Reference
Based on Figma designs:
- Sub-header structure: node-id=5450-11756
- Search filters: node-id=5450-11755
- Side panel overlay: node-id=4041-15211
- Table with side panel: node-id=4038-14309
        `}}},tags:["autodocs"]},te={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Claims Data"},parameters:{docs:{description:{story:"Table with side panel for column and filter controls. The table has no right border radius to seamlessly connect with the side panel."}}}},ae={args:{useSidePanel:!1,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data"},parameters:{docs:{description:{story:"Traditional table with modal settings. Click the settings icon button in the toolbar to open column settings."}}}},se={args:{useSidePanel:!0,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data"},parameters:{docs:{description:{story:"Table with both side panel and modal controls available. The toolbar settings button opens the modal, while the side panel provides quick access to column/filter controls."}}}},oe={args:{useSidePanel:!1,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data with Sub-Headers"},parameters:{docs:{description:{story:'Table with sub-header support showing nested columns. The "Claim ID" column has two sub-columns: "First Name" and "Last Name". This demonstrates the hierarchical column structure.'}}}},re={args:{useSidePanel:!1,useModal:!1,showToolbar:!1},parameters:{docs:{description:{story:"Basic table without toolbar or settings controls. Useful when column configuration is managed externally."}}}};var ke,Se,we;te.parameters={...te.parameters,docs:{...(ke=te.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(we=(Se=te.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var $e,De,Te;ae.parameters={...ae.parameters,docs:{...($e=ae.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Te=(De=ae.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var je,Ne,Ae;se.parameters={...se.parameters,docs:{...(je=se.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ae=(Ne=se.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Le,Ie,Pe;oe.parameters={...oe.parameters,docs:{...(Le=oe.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    useSidePanel: false,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data with Sub-Headers'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with sub-header support showing nested columns. The "Claim ID" column has two sub-columns: "First Name" and "Last Name". This demonstrates the hierarchical column structure.'
      }
    }
  }
}`,...(Pe=(Ie=oe.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Me,Re,Fe;re.parameters={...re.parameters,docs:{...(Me=re.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Fe=(Re=re.parameters)==null?void 0:Re.docs)==null?void 0:Fe.source}}};const qt=["WithSidePanel","WithModal","WithBothControls","WithSubHeaders","DefaultTable"];export{re as DefaultTable,se as WithBothControls,ae as WithModal,te as WithSidePanel,oe as WithSubHeaders,qt as __namedExportsOrder,Et as default};
