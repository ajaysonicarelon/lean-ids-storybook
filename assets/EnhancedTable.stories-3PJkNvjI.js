import{j as a}from"./jsx-runtime-DztICxWZ.js";import{fn as d}from"./index-DH-M5T-F.js";import{r as g,R as ws}from"./index-Bv9Y92EF.js";import{g as T}from"./styled-components.browser.esm-CVW2bgxI.js";import{T as vs,b as Y,a as nt}from"./TableToolbar-BLBexT0b.js";import{a as Ss,T as Ts}from"./TableGroupHeader-DchhggP_.js";import{E as xs}from"./ExpandMore-Rc_6KUah.js";import{C as Ns,V as ks,E as Ds,D as As,d as Ps}from"./Icon-Cw_FlUY4.js";import{T as Oe}from"./Typography-CidD3oMh.js";import{B as X}from"./Button-DlNRQx8j.js";import{T as Is,F as Rs}from"./TableSidePanel-Dwswusrl.js";import{P as zs}from"./Pagination-Cq4_L77K.js";import{C as _}from"./Chip--FEJIdFJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createSvgIcon-Ce6eLUkr.js";import"./Checkbox-D2w4VPJI.js";import"./Badge-FGqUbZvd.js";import"./WarningAmberOutlined-Chc0M3hO.js";import"./Close-CtL5j8iM.js";import"./InlineMessage-D0nF0rE-.js";import"./Search-Bpcrs37S.js";import"./Settings-aYyvLXSG.js";import"./Home-Bococija.js";import"./Select-CDKfHEcu.js";import"./FieldImportance-D7BkpLTs.js";import"./InputField-BAIr4sa2.js";import"./HelpingText-DBD3feHR.js";import"./RadioButton-DHcwHeDp.js";const Ls=T.th`
  padding: ${({theme:o})=>o.spacing[3]} ${({theme:o})=>o.spacing[7]};
  background-color: ${({theme:o})=>o.colors.palette.primary[50]};
  border-bottom: 1px solid ${({theme:o})=>o.colors.palette.neutral[300]};
  text-align: left;
  font-size: ${({theme:o})=>o.fontSizes[14]};
  font-weight: ${({theme:o})=>o.fontWeights.regular};
  transition: box-shadow 0.2s ease;
  
  ${({$locked:o,$pinned:C,$leftOffset:P,$rightOffset:k,$showPinBorder:f,theme:v})=>{const M=C||(o?"left":"none");return M==="left"?`
        position: sticky;
        left: ${P||0}px;
        z-index: 3;
        ${f?`border-right: 1px solid ${v.colors.palette.neutral[300]};`:""}
        
        &.is-stuck {
          box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
        }
      `:M==="right"?`
        position: sticky;
        right: ${k||0}px;
        z-index: 3;
        ${f?`border-left: 1px solid ${v.colors.palette.neutral[300]};`:""}
        
        &.is-stuck-right {
          box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
        }
      `:"position: relative; z-index: 1;"}}
`,Ms=T.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[8]};
  width: 100%;
`,Fs=T.input`
  width: 100%;
  height: 32px;
  padding: ${({theme:o})=>o.spacing[2]} ${({theme:o})=>o.spacing[3]};
  border: 1px solid ${({theme:o})=>o.colors.palette.neutral[300]};
  border-radius: ${({theme:o})=>o.borderRadius.sm};
  font-size: ${({theme:o})=>o.fontSizes[14]};
  font-family: ${({theme:o})=>o.fonts.primary};
  background-color: ${({theme:o})=>o.colors.palette.neutral[50]};
  color: ${({theme:o})=>o.colors.palette.neutral[900]};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({theme:o})=>o.colors.palette.primary[500]};
  }

  &::placeholder {
    color: ${({theme:o})=>o.colors.palette.neutral[500]};
  }
`,ot=T.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:o})=>o.spacing[4]};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:o})=>o.colors.palette.neutral[600]};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:o})=>o.colors.palette.primary[600]};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Ws=()=>a.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),$s=()=>a.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),ho=({searchValue:o="",searchPlaceholder:C="Search",onSearchChange:P,locked:k=!1,pinned:f="none",leftOffset:v=0,rightOffset:M=0,showPinBorder:Pe=!1,width:Ve,className:Be,showClearFilter:rt=!0,onClearFilter:Ge,showAdvancedFilter:Je=!1,onAdvancedFilter:Ie,customActions:Ye=[]})=>{const _e=N=>{P&&P(N.target.value)},q=N=>{N.stopPropagation(),Ge?Ge():P&&P("")},Re=N=>{N.stopPropagation(),Ie&&Ie()};return a.jsx(Ls,{$locked:k,$pinned:f,$leftOffset:v,$rightOffset:M,$showPinBorder:Pe,style:{width:Ve},className:Be,"data-locked":k?"true":void 0,children:a.jsxs(Ms,{children:[a.jsx(Fs,{type:"text",value:o,placeholder:C,onChange:_e,onClick:N=>N.stopPropagation()}),rt&&a.jsx(ot,{type:"button",onClick:q,title:"Clear filter",children:a.jsx(Ws,{})}),Je&&a.jsx(ot,{type:"button",onClick:Re,title:"Advanced filter",children:a.jsx($s,{})}),Ye.map((N,Xe)=>a.jsx(ot,{type:"button",onClick:Ke=>{Ke.stopPropagation(),N.onClick()},title:N.title,children:N.icon},Xe))]})})};ho.__docgenInfo={description:"",methods:[],displayName:"TableSubHeader",props:{searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinned:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'none'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},rightOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},showPinBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showClearFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClearFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showAdvancedFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onAdvancedFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customActions:{required:!1,tsType:{name:"Array",elements:[{name:"FilterAction"}],raw:"FilterAction[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const Es=T.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
  
  ${({$hasMaxHeight:o})=>o&&`
    thead {
      position: sticky;
      top: 0;
      z-index: 10;
      background: #f9fafb;
    }
  `}
`,qt=T.tr`
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
  animation-delay: ${({$animationDelay:o})=>o}ms;
  animation-fill-mode: backwards;
`,js=T.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.spacing[8]};
  width: 100%;
`,qs=T.div`
  display: flex;
  gap: 0;
  width: 100%;
  position: relative;
`,Hs=T.div`
  overflow-x: auto;
  overflow-y: auto;
  max-height: ${({$maxHeight:o})=>o||"calc(100vh - 300px)"};
  border: 1px solid ${({theme:o})=>o.colors.palette.neutral[300]};
  border-radius: ${({$hasSidePanel:o})=>o?"8px 0 0 8px":"8px"};
  position: relative;
  flex: 1;
  
  /* Always show scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:o})=>o.colors.palette.neutral[100]};
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:o})=>o.colors.palette.neutral[400]};
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:o})=>o.colors.palette.neutral[500]};
  }
`,Os=T.tr``,Us=T.td`
  padding: ${({theme:o})=>o.spacing[4]};
  border-bottom: ${({theme:o})=>o.borderWidth[1]} solid ${({theme:o})=>o.colors.palette.neutral[200]};
`,Ht=T.div`
  width: ${({width:o})=>o||"100%"};
  height: ${({height:o})=>o||"1rem"};
  background: ${({theme:o})=>o.colors.palette.neutral[200]};
  border-radius: ${({theme:o})=>o.borderRadius.sm};
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
      ${({theme:o})=>o.colors.palette.neutral[100]} 50%,
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
`,Ot=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:o})=>o.spacing[16]} ${({theme:o})=>o.spacing[8]};
  min-height: 400px;
  width: 100vw;
  background: ${({theme:o})=>o.colors.palette.neutral[50]};
`,Ut=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[6]};
  max-width: min(18.75rem, 90%);
`,Vt=T.div`
  width: ${({theme:o})=>o.spacing[20]};
  height: ${({theme:o})=>o.spacing[20]};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Bt=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[4]};
  text-align: center;
`,Vs=()=>[{id:"1234567890",claimId:"1234567890",firstName:"John",lastName:"Doe",userDetails:"Associate Name",nrCodes:"NR001",paidAmount:"$4,680",acrLoadDates:"March 12, 2025",contact:"(555) 112.3334",amount:"$4,680",avatar:"https://i.pravatar.cc/32?img=1",city:"New York",state:"NY",status:"Approved",priority:"High"},{id:"1234567891",claimId:"1234567891",firstName:"Jane",lastName:"Smith",userDetails:"Manager",nrCodes:"NR002",paidAmount:"$10,293",acrLoadDates:"March 15, 2025",contact:"(555) 800.0000",amount:"$10,293",avatar:"https://i.pravatar.cc/32?img=2",city:"Los Angeles",state:"CA",status:"Pending",priority:"Medium"},{id:"1234567892",claimId:"1234567892",firstName:"Michael",lastName:"Johnson",userDetails:"Senior Associate",nrCodes:"NR003",paidAmount:"$7,450",acrLoadDates:"March 18, 2025",contact:"(555) 234.5678",amount:"$7,450",avatar:"https://i.pravatar.cc/32?img=3",city:"Chicago",state:"IL",status:"Approved",priority:"Low"},{id:"1234567893",claimId:"1234567893",firstName:"Emily",lastName:"Brown",userDetails:"Analyst",nrCodes:"NR004",paidAmount:"$5,820",acrLoadDates:"March 20, 2025",contact:"(555) 345.6789",amount:"$5,820",avatar:"https://i.pravatar.cc/32?img=4",city:"Houston",state:"TX",status:"Rejected",priority:"High"},{id:"1234567894",claimId:"1234567894",firstName:"David",lastName:"Wilson",userDetails:"Supervisor",nrCodes:"NR005",paidAmount:"$12,100",acrLoadDates:"March 22, 2025",contact:"(555) 456.7890",amount:"$12,100",avatar:"https://i.pravatar.cc/32?img=5",city:"Phoenix",state:"AZ",status:"Approved",priority:"Medium"},{id:"1234567895",claimId:"1234567895",firstName:"Sarah",lastName:"Martinez",userDetails:"Associate Name",nrCodes:"NR006",paidAmount:"$8,900",acrLoadDates:"March 25, 2025",contact:"(555) 567.8901",amount:"$8,900",avatar:"https://i.pravatar.cc/32?img=6",city:"Philadelphia",state:"PA",status:"Pending",priority:"High"},{id:"1234567896",claimId:"1234567896",firstName:"James",lastName:"Anderson",userDetails:"Lead",nrCodes:"NR007",paidAmount:"$15,200",acrLoadDates:"March 28, 2025",contact:"(555) 678.9012",amount:"$15,200",avatar:"https://i.pravatar.cc/32?img=7",city:"San Antonio",state:"TX",status:"Approved",priority:"Low"},{id:"1234567897",claimId:"1234567897",firstName:"Linda",lastName:"Taylor",userDetails:"Manager",nrCodes:"NR008",paidAmount:"$6,750",acrLoadDates:"March 30, 2025",contact:"(555) 789.0123",amount:"$6,750",avatar:"https://i.pravatar.cc/32?img=8",city:"San Diego",state:"CA",status:"Pending",priority:"Medium"},{id:"1234567898",claimId:"1234567898",firstName:"Robert",lastName:"Thomas",userDetails:"Associate Name",nrCodes:"NR009",paidAmount:"$9,300",acrLoadDates:"April 2, 2025",contact:"(555) 890.1234",amount:"$9,300",avatar:"https://i.pravatar.cc/32?img=9",city:"Dallas",state:"TX",status:"Approved",priority:"High"},{id:"1234567899",claimId:"1234567899",firstName:"Patricia",lastName:"Jackson",userDetails:"Senior Associate",nrCodes:"NR010",paidAmount:"$11,500",acrLoadDates:"April 5, 2025",contact:"(555) 901.2345",amount:"$11,500",avatar:"https://i.pravatar.cc/32?img=10",city:"San Jose",state:"CA",status:"Rejected",priority:"Low"},{id:"1234567900",claimId:"1234567900",firstName:"Christopher",lastName:"White",userDetails:"Analyst",nrCodes:"NR011",paidAmount:"$7,200",acrLoadDates:"April 8, 2025",contact:"(555) 012.3456",amount:"$7,200",avatar:"https://i.pravatar.cc/32?img=11",city:"Austin",state:"TX",status:"Approved",priority:"Medium"},{id:"1234567901",claimId:"1234567901",firstName:"Barbara",lastName:"Harris",userDetails:"Supervisor",nrCodes:"NR012",paidAmount:"$13,800",acrLoadDates:"April 10, 2025",contact:"(555) 123.4567",amount:"$13,800",avatar:"https://i.pravatar.cc/32?img=12",city:"Jacksonville",state:"FL",status:"Pending",priority:"High"},{id:"1234567902",claimId:"1234567902",firstName:"Daniel",lastName:"Martin",userDetails:"Associate Name",nrCodes:"NR013",paidAmount:"$5,600",acrLoadDates:"April 12, 2025",contact:"(555) 234.5678",amount:"$5,600",avatar:"https://i.pravatar.cc/32?img=13",city:"Fort Worth",state:"TX",status:"Approved",priority:"Low"},{id:"1234567903",claimId:"1234567903",firstName:"Nancy",lastName:"Thompson",userDetails:"Lead",nrCodes:"NR014",paidAmount:"$10,900",acrLoadDates:"April 15, 2025",contact:"(555) 345.6789",amount:"$10,900",avatar:"https://i.pravatar.cc/32?img=14",city:"Columbus",state:"OH",status:"Pending",priority:"Medium"},{id:"1234567904",claimId:"1234567904",firstName:"Matthew",lastName:"Garcia",userDetails:"Manager",nrCodes:"NR015",paidAmount:"$8,400",acrLoadDates:"April 18, 2025",contact:"(555) 456.7890",amount:"$8,400",avatar:"https://i.pravatar.cc/32?img=15",city:"Charlotte",state:"NC",status:"Approved",priority:"High"},{id:"1234567905",claimId:"1234567905",firstName:"Karen",lastName:"Martinez",userDetails:"Associate Name",nrCodes:"NR016",paidAmount:"$14,200",acrLoadDates:"April 20, 2025",contact:"(555) 567.8901",amount:"$14,200",avatar:"https://i.pravatar.cc/32?img=16",city:"San Francisco",state:"CA",status:"Rejected",priority:"Low"},{id:"1234567906",claimId:"1234567906",firstName:"Joseph",lastName:"Robinson",userDetails:"Senior Associate",nrCodes:"NR017",paidAmount:"$6,900",acrLoadDates:"April 22, 2025",contact:"(555) 678.9012",amount:"$6,900",avatar:"https://i.pravatar.cc/32?img=17",city:"Indianapolis",state:"IN",status:"Approved",priority:"Medium"},{id:"1234567907",claimId:"1234567907",firstName:"Lisa",lastName:"Clark",userDetails:"Analyst",nrCodes:"NR018",paidAmount:"$12,700",acrLoadDates:"April 25, 2025",contact:"(555) 789.0123",amount:"$12,700",avatar:"https://i.pravatar.cc/32?img=18",city:"Seattle",state:"WA",status:"Pending",priority:"High"},{id:"1234567908",claimId:"1234567908",firstName:"Thomas",lastName:"Rodriguez",userDetails:"Supervisor",nrCodes:"NR019",paidAmount:"$9,800",acrLoadDates:"April 28, 2025",contact:"(555) 890.1234",amount:"$9,800",avatar:"https://i.pravatar.cc/32?img=19",city:"Denver",state:"CO",status:"Approved",priority:"Low"},{id:"1234567909",claimId:"1234567909",firstName:"Betty",lastName:"Lewis",userDetails:"Associate Name",nrCodes:"NR020",paidAmount:"$11,100",acrLoadDates:"April 30, 2025",contact:"(555) 901.2345",amount:"$11,100",avatar:"https://i.pravatar.cc/32?img=20",city:"Boston",state:"MA",status:"Pending",priority:"Medium"}],Bs=()=>[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0},{id:"claimId",label:"Claim ID",visible:!0,locked:!1,order:1},{id:"firstName",label:"First Name",visible:!0,locked:!1,order:2},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:3},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:4},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:5},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:6},{id:"acrLoadDates",label:"ACR Load Dates",visible:!0,locked:!1,order:7},{id:"city",label:"City",visible:!0,locked:!1,order:8},{id:"state",label:"State",visible:!0,locked:!1,order:9},{id:"contact",label:"Contact",visible:!0,locked:!1,order:10},{id:"status",label:"Status",visible:!0,locked:!1,order:11},{id:"priority",label:"Priority",visible:!0,locked:!1,order:12},{id:"amount",label:"Amount",visible:!0,locked:!1,order:13}],w=()=>[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0,width:48,minWidth:48,maxWidth:48},{id:"claimId",label:"User Details",visible:!0,locked:!1,order:1,subColumns:[{id:"firstName",label:"First Name",visible:!0,locked:!1,order:0,parentId:"claimId",width:200,minWidth:120,maxWidth:300,resizable:!0},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:1,parentId:"claimId",width:200,minWidth:120,maxWidth:300,resizable:!0}]},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:2,width:180,minWidth:100,maxWidth:250,resizable:!0},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:3,width:150,minWidth:100,maxWidth:200,resizable:!0},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:4,width:150,minWidth:100,maxWidth:200,resizable:!0},{id:"acrLoadDates",label:"ACR Load Dates",visible:!0,locked:!1,order:5,width:180,minWidth:120,maxWidth:250,resizable:!0},{id:"address",label:"Address",visible:!0,locked:!1,order:6,subColumns:[{id:"city",label:"City",visible:!0,locked:!1,order:0,parentId:"address",width:150,minWidth:100,maxWidth:200,resizable:!0},{id:"state",label:"State",visible:!0,locked:!1,order:1,parentId:"address",width:100,minWidth:80,maxWidth:150,resizable:!0}]},{id:"contact",label:"Contact",visible:!0,locked:!1,order:7,width:180,minWidth:120,maxWidth:250,resizable:!0},{id:"status",label:"Status",visible:!0,locked:!1,order:8,width:120,minWidth:80,maxWidth:180,resizable:!0},{id:"priority",label:"Priority",visible:!0,locked:!1,order:9,width:120,minWidth:80,maxWidth:180,resizable:!0},{id:"amount",label:"Amount",visible:!0,locked:!1,order:10,width:150,minWidth:100,maxWidth:200,resizable:!0}],st=g.forwardRef(({as:o="div",data:C,initialColumns:P,rowKey:k="id",groups:f,groupConfig:v,useSidePanel:M=!1,useModal:Pe=!1,showToolbar:Ve=!0,toolbarTitle:Be="Data Table",description:rt,toolbar:Ge,showGlobalSearch:Je=!0,showFilter:Ie=!0,showDownload:Ye=!1,onDownload:_e,showColumnFilters:q,showColumnFiltersFor:Re,onColumnFiltersChange:N,customSidePanelTabs:Xe=[],maxHeight:Ke,showColumnMenu:it=!0,enableUserPinning:lt=!0,enableDevPinning:go=!0,selectable:fo=!1,onRowSelect:Gs,paginated:bo=!0,itemsPerPage:ct=10,paginationMode:H="client",onPageChange:ze,onPageSizeChange:dt,currentPage:yo,totalItems:Co,showPageSizeSelector:wo=!0,pageSizeOptions:vo=[10,25,50,100],sortMode:O="client",onSort:Le,sortColumn:So,sortDirection:To,searchMode:U="client",onColumnSearch:Ze,columnSearches:$,columnSearchDebounceMs:ut=300,defaultMinWidth:K=50,defaultMaxWidth:Z=250,onRowClick:F,onOpen:Js,onClose:Ys,onAfterOpen:_s,onAfterClose:Xs,loading:xo=!1,isInvalid:No=!1,errorMessage:ko,errorDescription:Do,errorIcon:Ao,errorActionLabel:Po,onErrorAction:mt,errorStateContent:Io,emptyMessage:Ks="No data available",emptyIcon:Ro,emptyTitle:zo="No Results Found",emptyDescription:Lo="Try adjusting your filters or search criteria",emptyActionLabel:Qe,onEmptyAction:Me,emptyStateContent:Mo,containerClassName:Zs,containerStyle:Qs,scrollContainerClassName:er,scrollContainerStyle:tr,emptyStateClassName:Fo,emptyStateStyle:Wo,loadingClassName:ar,loadingStyle:nr,errorClassName:or,errorStyle:sr,className:$o,...Eo},jo)=>{const[qo,pt]=g.useState(1),[Ho,Oo]=g.useState(ct),[Uo,ht]=g.useState(""),[Vo,gt]=g.useState("none"),[Bo,ft]=g.useState({}),bt=H==="server"?yo||1:qo,Q=H==="server"?ct:Ho,I=O==="server"?So||"":Uo,D=O==="server"?To||"none":Vo,Fe=Bo,[Go,yt]=g.useState(!1),[R,V]=g.useState([]),[et,Ct]=g.useState(null),[Jo,wt]=g.useState(!1),[ee,Yo]=g.useState({}),[vt,St]=g.useState(!1),[Tt,_o]=g.useState(()=>f?new Set(f.filter(e=>e.defaultExpanded!==!1).map(e=>e.id)):new Set),xt=()=>{const e=P||Bs();return go?e:e.map(t=>{const{pinned:n,...s}=t;return s})},[A,We]=g.useState(xt()),[Xo,Nt]=g.useState(!1),[B,Ko]=g.useState(""),[E,$e]=g.useState({}),[te,Zo]=g.useState({}),[kt,Ee]=g.useState(!1),[G,Qo]=g.useState([]),je=q!==void 0?q:Xo,j=C||Vs(),es=g.useMemo(()=>{const e=j.length;return e===0||R.length===0?!1:R.length>0&&R.length<e},[R.length,j.length]),Dt=(e,t)=>{if(!A.find(l=>l.id===e))return;if(t==="left"&&A.filter(h=>(h.pinned==="left"||h.locked&&!h.pinned)&&h.id!=="checkbox"&&h.id!==e).length>=3){St(!0),setTimeout(()=>St(!1),3e3);return}const s=A.map(l=>l.id===e?l.subColumns?{...l,pinned:t,locked:!1,subColumns:l.subColumns.map(h=>({...h,pinned:t,locked:!1}))}:{...l,pinned:t,locked:!1}:l),i=s.find(l=>l.id==="checkbox"),m=s.filter(l=>l.id!=="checkbox").sort((l,h)=>{const c=l.pinned||(l.locked?"left":"none"),p=h.pinned||(h.locked?"left":"none");return c==="left"&&p!=="left"?-1:c!=="left"&&p==="left"||c==="right"&&p!=="right"?1:c!=="right"&&p==="right"?-1:l.order-h.order}),u=i?[{...i,order:0},...m.map((l,h)=>({...l,order:h+1}))]:m.map((l,h)=>({...l,order:h}));We(u)},At=e=>{const t=document.querySelectorAll(`[data-column-id="${e}"]`);let n=100;t.forEach(s=>{const i=s.scrollWidth+32;i>n&&(n=i)}),n=Math.min(n,500),$e(s=>({...s,[e]:n}))},Pt=()=>{const e={};S.forEach(t=>{const n=document.querySelectorAll(`[data-column-id="${t.id}"]`);let s=100;n.forEach(i=>{const r=i.scrollWidth+32;r>s&&(s=r)}),s=Math.min(s,500),e[t.id]=s}),$e(e)},It=e=>{const n=xt().find(i=>i.id===e);if(!n)return;$e(i=>{const r={...i};return delete r[e],r});const s=A.map(i=>i.id===e?{...i,pinned:n.pinned||"none",locked:n.locked||!1}:i);We(s)},Rt=e=>{let t;I===e?t=D==="asc"?"desc":D==="desc"?"none":"asc":t="asc",O==="server"&&Le?Le(e,t):(ht(e),gt(t)),Ee(!0),setTimeout(()=>Ee(!1),300)},zt=e=>{O==="server"&&Le?Le(e,"none"):(ht(e),gt("none")),Ee(!0),setTimeout(()=>Ee(!1),50)},ts=e=>{H==="server"&&ze?ze(e):pt(e)},as=e=>{H==="server"&&dt?(dt(e),ze&&ze(1)):(Oo(e),pt(1))},ns=e=>{yt(e),V(e?Array.from({length:j.length},(t,n)=>n):[])},Lt=(e,t,n=!1)=>{if(t)if(n&&et!==null){const s=Math.min(et,e),i=Math.max(et,e),r=Array.from({length:i-s+1},(u,l)=>s+l),m=Array.from(new Set([...R,...r]));V(m)}else V([...R,e]),Ct(e);else V(R.filter(s=>s!==e)),yt(!1),Ct(e)},Mt=()=>{const e=!je;N?N(e):Nt(e)};g.useEffect(()=>{q===void 0&&Nt(G.length>0)},[G,q]);const Ft=g.useRef(void 0);g.useEffect(()=>{if(U!=="server"||!$)return;const e=Ft.current;(e===void 0||Object.keys($).length!==Object.keys(e).length||Object.keys($).some(n=>$[n]!==e[n]))&&(Ft.current=$,ft($))},[$,U]);const ae=g.useRef(null);g.useEffect(()=>()=>{ae.current&&clearTimeout(ae.current)},[]);const Wt=(e,t)=>{let n=A.find(m=>m.id===e);if(!n){for(const m of A)if(m.subColumns&&(n=m.subColumns.find(u=>u.id===e),n))break}const s=(n==null?void 0:n.minWidth)!==void 0?n.minWidth:K,i=(n==null?void 0:n.maxWidth)!==void 0?n.maxWidth:Z;let r=t;r=Math.max(r,s),r=Math.min(r,i),$e(m=>({...m,[e]:r}))},os=(e,t)=>{ft(n=>{const s={...n,[e]:t};return U==="server"&&Ze&&(ae.current&&clearTimeout(ae.current),ut===0?Ze(s):ae.current=setTimeout(()=>{Ze(s)},ut)),s})},ss=e=>{if(_o(t=>{const n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}),v!=null&&v.onGroupToggle){const t=!Tt.has(e);v.onGroupToggle(e,t)}},rs=(e,t)=>{if(!(f==null?void 0:f.find(r=>r.id===e)))return;const s=[];let i=0;f==null||f.forEach(r=>{r.id===e?r.rows.forEach(()=>{s.push(i),i++}):i+=r.rows.length}),V(t?r=>[...new Set([...r,...s])]:r=>r.filter(m=>!s.includes(m)))},is=e=>{const t=f==null?void 0:f.find(r=>r.id===e);if(!t||t.rows.length===0)return!1;let n=0,s=0;return f==null||f.forEach(r=>{r.id===e&&(s=n),n+=r.rows.length}),Array.from({length:t.rows.length},(r,m)=>s+m).every(r=>R.includes(r))},ls=e=>e.filter(t=>{if(B){const s=B.toLowerCase();if(!Object.values(t).some(r=>String(r||"").toLowerCase().includes(s)))return!1}return U==="client"&&!Object.entries(Fe).every(([i,r])=>{if(!r)return!0;const m=t[i];return String(m).toLowerCase().includes(r.toLowerCase())})?!1:G.every(s=>{const i=t[s.columnId];return String(i)===s.value})}),cs=e=>O!=="client"||!I||D==="none"?e:[...e].sort((t,n)=>{let s=t[I],i=n[I];return s<i?D==="asc"?-1:1:s>i?D==="asc"?1:-1:0}),W=g.useMemo(()=>!f||f.length===0?null:f.map(e=>({...e,rows:cs(ls(e.rows))})),[f,B,Fe,G,I,D,U]),ds=g.useMemo(()=>W?W.flatMap(e=>e.rows):j,[W,j]),tt=W?ds:j.filter(e=>{if(B){const n=B.toLowerCase();if(!Object.values(e).some(i=>String(i||"").toLowerCase().includes(n)))return!1}return U==="client"&&!Object.entries(Fe).every(([s,i])=>{if(!i)return!0;const r=e[s];return String(r).toLowerCase().includes(i.toLowerCase())})?!1:G.every(n=>{const s=e[n.columnId];return String(s)===n.value})}),at=W?tt:O==="client"&&I&&D!=="none"?[...tt].sort((e,t)=>{let n=e[I],s=t[I];return n<s?D==="asc"?-1:1:n>s?D==="asc"?1:-1:0}):tt,$t=H==="server"?Co||0:at.length,us=Math.ceil($t/Q),z=(bt-1)*Q,ms=z+Q,Et=H==="server"?at:at.slice(z,ms),ps=e=>{const t=[];return e.forEach(n=>{if(n.subColumns&&n.subColumns.length>0){const s=n.subColumns.map(i=>{const r=i.pinned||(i.locked?"left":"none");return{...i,pinned:r!=="none"?i.pinned:n.pinned,locked:i.locked||n.locked}});t.push(...s)}else t.push(n)}),t},L=A.filter(e=>e.visible),S=ps(L);g.useEffect(()=>{const e=document.querySelector("[data-scroll-container]");if(!e)return;const t=()=>{const i=e.querySelector("tbody tr");if(!i)return;const r=i.querySelectorAll("td");if(!r||r.length===0)return;const m={};let u=0;S.forEach((c,p)=>{if((c.pinned||(c.locked?"left":"none"))==="left"&&r[p]){m[c.id]=u;const b=r[p].offsetWidth;u+=b}}),L.forEach(c=>{if(c.subColumns&&c.subColumns.length>0){const p=c.pinned||(c.locked?"left":"none");if(c.subColumns.some(b=>{const x=b.pinned||(b.locked?"left":"none");return x==="left"||x==="none"&&p==="left"})||p==="left"){const b=c.subColumns[0];m[b.id]!==void 0&&(m[c.id]=m[b.id])}}}),S.some(c=>c.id==="checkbox")&&(m.checkbox=0),Yo(m);const l={};let h=0;for(let c=S.length-1;c>=0;c--){const p=S[c];if((p.pinned||(p.locked?"left":"none"))==="right"&&r[c]){l[p.id]=h;const b=r[c].offsetWidth;h+=b}}L.forEach(c=>{if(c.subColumns&&c.subColumns.length>0){const p=c.pinned||(c.locked?"left":"none");if(c.subColumns.some(b=>{const x=b.pinned||(b.locked?"left":"none");return x==="right"||x==="none"&&p==="right"})||p==="right"){const b=c.subColumns.filter(ne=>{const J=ne.pinned||(ne.locked?"left":"none");return J==="right"||J==="none"&&p==="right"}),x=b[b.length-1];x&&l[x.id]!==void 0&&(l[c.id]=l[x.id])}}}),Zo(l)};t();const n=new ResizeObserver(()=>{t()}),s=e.querySelector("tbody tr");return s&&s.querySelectorAll("td").forEach(r=>n.observe(r)),()=>{n.disconnect()}},[S.map(e=>e.id+e.locked+(e.pinned||"none")).join(",")]);const jt=L.some(e=>e.subColumns&&e.subColumns.length>0),hs=L.map((e,t)=>(e.pinned||(e.locked?"left":"none"))==="left"?t:-1).reduce((e,t)=>t>e?t:e,-1),gs=L.findIndex(e=>(e.pinned||(e.locked?"left":"none"))==="right"),qe=S.map((e,t)=>(e.pinned||(e.locked?"left":"none"))==="left"?t:-1).reduce((e,t)=>t>e?t:e,-1),He=S.findIndex(e=>(e.pinned||(e.locked?"left":"none"))==="right"),fs=()=>a.jsxs(a.Fragment,{children:[a.jsx("tr",{children:L.map((e,t)=>{const n=e.pinned||(e.locked?"left":"none"),s=e.locked,i=ee[e.id],r=te[e.id],m=e.subColumns&&e.subColumns.length>0?e.subColumns.length:1,u=jt&&(!e.subColumns||e.subColumns.length===0)?2:1,l=n==="left"&&t===hs||n==="right"&&t===gs;if(e.id==="checkbox")return a.jsx(nt,{label:"",variant:"default",showCheckbox:!0,checked:Go,indeterminate:es,onCheckChange:ns,locked:s,pinned:n,leftOffset:i,rightOffset:r,showPinBorder:l,"data-locked":s,rowSpan:u,isChildColumn:!0},e.id);const c=E[e.id]||(typeof e.width=="number"?e.width:void 0);return a.jsx(nt,{label:e.label,variant:!s&&!e.subColumns?"resizeable-locked":"default",sortable:!e.subColumns||e.subColumns.length===0,sortDirection:I===e.id?D:"none",onSort:()=>Rt(e.id),onSortNone:()=>zt(e.id),locked:s,pinned:n,onPinChange:p=>Dt(e.id,p),onAutosizeColumn:()=>At(e.id),onAutosizeAll:Pt,onResetColumn:()=>It(e.id),showColumnMenu:it,enableUserPinning:lt,leftOffset:i,rightOffset:r,showPinBorder:l,hasSubColumns:e.subColumns&&e.subColumns.length>0,"data-locked":s,align:m>1?"center":"left",colSpan:m,rowSpan:u,resizable:!e.subColumns,onResize:e.subColumns?void 0:p=>Wt(e.id,p),width:c,minWidth:e.minWidth!==void 0?e.minWidth:K,maxWidth:e.maxWidth!==void 0?e.maxWidth:Z,initialWidth:typeof e.width=="number"?e.width:void 0,customIcon:e.headerIcon,onCustomIconClick:e.onHeaderIconClick?p=>e.onHeaderIconClick(e.id,p):void 0,customIconTitle:e.headerIconTitle},e.id)})}),jt&&a.jsx("tr",{children:L.map(e=>!e.subColumns||e.subColumns.length===0?null:e.subColumns.map(t=>{const n=e.pinned||(e.locked?"left":"none"),s=t.pinned||(t.locked?"left":"none"),i=s!=="none"?s:n,r=t.locked||e.locked,m=ee[t.id],u=te[t.id],h=E[t.id]||(typeof t.width=="number"?t.width:void 0),c=S.findIndex(y=>y.id===t.id),p=i==="left"&&c===qe||i==="right"&&c===He;return a.jsx(nt,{label:t.label,variant:r?"default":"resizeable-locked",sortable:!0,sortDirection:I===t.id?D:"none",onSort:()=>Rt(t.id),onSortNone:()=>zt(t.id),locked:r,pinned:i,onPinChange:y=>Dt(t.id,y),onAutosizeColumn:()=>At(t.id),onAutosizeAll:Pt,onResetColumn:()=>It(t.id),showColumnMenu:it,enableUserPinning:lt,leftOffset:m,rightOffset:u,showPinBorder:p,"data-locked":r,isChildColumn:!0,resizable:!0,onResize:y=>Wt(t.id,y),width:h,minWidth:t.minWidth!==void 0?t.minWidth:K,maxWidth:t.maxWidth!==void 0?t.maxWidth:Z,initialWidth:typeof t.width=="number"?t.width:void 0,customIcon:t.headerIcon,onCustomIconClick:t.onHeaderIconClick?y=>t.onHeaderIconClick(t.id,y):void 0,customIconTitle:t.headerIconTitle},t.id)}))})]}),bs=()=>je?a.jsx("tr",{children:S.map((t,n)=>{const s=t.pinned||(t.locked?"left":"none"),i=t.locked,r=ee[t.id],m=te[t.id],u=t.filterable!==!1;let l=!1;return Re?l=Re.includes(t.id):je&&(l=t.showColumnSearch!==!1),t.id==="checkbox"?a.jsx("th",{style:{position:s!=="none"?"sticky":"relative",left:s==="left"?`${r}px`:"auto",right:s==="right"?`${m}px`:"auto",zIndex:s!=="none"?3:1,background:"#f9fafb",borderBottom:"1px solid #e5e7eb",padding:"8px 12px",minWidth:"48px"},"data-locked":i?"true":void 0},t.id):!u||!l?a.jsx("th",{style:{position:s!=="none"?"sticky":"relative",left:s==="left"?`${r}px`:"auto",right:s==="right"?`${m}px`:"auto",zIndex:s!=="none"?3:1,background:"#f9fafb",borderBottom:"1px solid #e5e7eb",padding:"8px 12px"},"data-locked":i?"true":void 0},t.id):a.jsx(ho,{searchValue:Fe[t.id]||"",searchPlaceholder:`Search ${t.label}`,onSearchChange:h=>os(t.id,h),locked:i,pinned:s,leftOffset:r,rightOffset:m,showPinBorder:s==="left"&&n===qe||s==="right"&&n===He,"data-locked":i},t.id)})}):null;return a.jsx(o,{ref:jo,className:$o,...Eo,children:a.jsxs(js,{children:[Ve&&a.jsx(vs,{title:Be,showGlobalSearch:Je,globalSearchValue:B,onGlobalSearchChange:Ko,globalSearchPlaceholder:"Search across all columns...",showDropdown:!1,dropdownOptions:[],showDownload:Ye,onDownload:_e,showFilter:Ie,onFilter:Mt,showSettings:Pe,onSettingsClick:()=>wt(!0)}),Pe&&a.jsx(Ss,{isOpen:Jo,onClose:()=>wt(!1),columns:A.filter(e=>e.id!=="checkbox"),lockWarning:vt,onColumnsChange:e=>{const t=A.find(s=>s.id==="checkbox"),n=t?[t,...e]:e;We(n)}}),a.jsxs(qs,{$hasSidePanel:M,children:[a.jsx(Hs,{"data-scroll-container":!0,$hasSidePanel:M,$maxHeight:Ke,children:a.jsxs(Es,{$hasMaxHeight:!0,children:[a.jsx("colgroup",{children:L.map(e=>{if(e.subColumns&&e.subColumns.length>0)return e.subColumns.map(t=>{const n=E[t.id],s=n?`${n}px`:t.width||e.width||"150px",i=t.minWidth?`${t.minWidth}px`:`${K}px`,r=t.maxWidth?`${t.maxWidth}px`:`${Z}px`;return a.jsx("col",{style:{width:s,minWidth:i,maxWidth:r}},t.id)});if(e.id==="checkbox"){const t=E[e.id],n=t?`${t}px`:e.width||"48px";return a.jsx("col",{style:{width:n,minWidth:"48px",maxWidth:"48px"}},e.id)}else{const t=E[e.id],n=t?`${t}px`:e.width||"150px",s=e.minWidth?`${e.minWidth}px`:`${K}px`,i=e.maxWidth?`${e.maxWidth}px`:`${Z}px`;return a.jsx("col",{style:{width:n,minWidth:s,maxWidth:i}},e.id)}})}),a.jsxs("thead",{children:[fs(),bs()]}),a.jsx("tbody",{children:xo?Array.from({length:Q}).map((e,t)=>a.jsx(Os,{children:S.map(n=>a.jsx(Us,{children:n.id==="checkbox"?a.jsx(Ht,{width:"20px",height:"20px"}):a.jsx(Ht,{width:"80%"})},n.id))},`skeleton-${t}`)):No?a.jsx("tr",{children:a.jsx("td",{colSpan:S.length,style:{padding:0,border:"none"},children:a.jsx(Ot,{role:"alert","aria-live":"assertive",children:Io??a.jsxs(Ut,{children:[a.jsx(Vt,{children:Ao??a.jsx(xs,{sx:{fontSize:64,color:"error.main"}})}),a.jsxs(Bt,{children:[a.jsx(Oe,{variant:"headingL",weight:"semibold",as:"h3",color:"error",children:ko||"Something went wrong"}),a.jsx(Oe,{variant:"body",color:"secondary",children:Do||"There was a problem loading the table data."})]}),(mt||Me)&&a.jsx(X,{variant:"primary",size:"medium",onClick:mt??Me,children:Po||Qe||"Retry"})]})})})}):Et.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:S.length,style:{padding:0,border:"none"},children:a.jsx(Ot,{className:Fo,style:Wo,role:"status","aria-live":"polite",children:Mo??a.jsxs(Ut,{children:[a.jsx(Vt,{children:Ro??a.jsx(Ns,{sx:{fontSize:64,color:"text.secondary"}})}),a.jsxs(Bt,{children:[a.jsx(Oe,{variant:"headingL",weight:"semibold",as:"h3",children:zo}),a.jsx(Oe,{variant:"body",color:"secondary",children:Lo})]}),Qe&&Me&&a.jsx(X,{variant:"primary",size:"medium",onClick:Me,children:Qe})]})})})}):W&&W.length>0?W.map(e=>{const t=Tt.has(e.id);return a.jsxs(ws.Fragment,{children:[a.jsx(Ts,{groupName:e.groupName,groupDescription:e.groupDescription,isExpanded:t,onToggle:()=>ss(e.id),colSpan:S.length,expandPosition:(v==null?void 0:v.expandPosition)||"left",customContent:v!=null&&v.renderGroupContent?v.renderGroupContent(e):e.customContent,className:e.className,style:e.style,showCheckbox:fo,isSelected:is(e.id),onCheckboxChange:n=>rs(e.id,n)}),t&&e.rows.map((n,s)=>{const i=R.includes(z+s),r=S.map((u,l)=>{const h=u.pinned||(u.locked?"left":"none"),c=u.locked,p=ee[u.id],y=te[u.id],b=l===0,x=h==="left"&&l===qe||h==="right"&&l===He;if(u.id==="checkbox")return a.jsx(Y,{"data-column-id":u.id,selected:i,locked:c,pinned:h,leftOffset:p,rightOffset:y,showPinBorder:x,"data-locked":c,isFirstColumn:b,showCheckbox:!0,checked:i,onCheckChange:(ys,Cs)=>Lt(z+s,ys,Cs)},u.id);if(u.id==="userDetails")return a.jsx(Y,{"data-column-id":u.id,selected:i,locked:c,pinned:h,leftOffset:p,rightOffset:y,showPinBorder:x,"data-locked":c,isFirstColumn:b,children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("img",{src:n.avatar,alt:n.userDetails,style:{width:32,height:32,borderRadius:"50%"}}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:600},children:n.userDetails}),a.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Role"})]})]})},u.id);const J=E[u.id]||(typeof u.width=="number"?u.width:void 0);return a.jsx(Y,{selected:i,locked:c,pinned:h,leftOffset:p,rightOffset:y,showPinBorder:x,"data-locked":c,isFirstColumn:b,width:J,children:u.renderCell?u.renderCell(n[u.id],n,z+s):n[u.id]},u.id)}),m=u=>{F&&F(n,z+s,u)};return kt?a.jsx(qt,{$animationDelay:s*20,onClick:m,style:{cursor:F?"pointer":"default"},children:r},n.id):a.jsx("tr",{onClick:m,style:{cursor:F?"pointer":"default"},children:r},n.id)})]},e.id)}):Et.map((e,t)=>{const n=R.includes(z+t),s=S.map((r,m)=>{const u=r.pinned||(r.locked?"left":"none"),l=r.locked,h=ee[r.id],c=te[r.id],p=m===0,y=u==="left"&&m===qe||u==="right"&&m===He;if(r.id==="checkbox")return a.jsx(Y,{"data-column-id":r.id,selected:n,locked:l,pinned:u,leftOffset:h,rightOffset:c,showPinBorder:y,"data-locked":l,isFirstColumn:p,showCheckbox:!0,checked:n,onCheckChange:(ne,J)=>Lt(z+t,ne,J)},r.id);if(r.id==="userDetails")return a.jsx(Y,{"data-column-id":r.id,selected:n,locked:l,pinned:u,leftOffset:h,rightOffset:c,showPinBorder:y,"data-locked":l,isFirstColumn:p,children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("img",{src:e.avatar,alt:e.userDetails,style:{width:32,height:32,borderRadius:"50%"}}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:600},children:e.userDetails}),a.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Role"})]})]})},r.id);const x=E[r.id]||(typeof r.width=="number"?r.width:void 0);return a.jsx(Y,{selected:n,locked:l,pinned:u,leftOffset:h,rightOffset:c,showPinBorder:y,"data-locked":l,isFirstColumn:p,width:x,children:r.renderCell?r.renderCell(e[r.id],e,z+t):e[r.id]},r.id)}),i=r=>{F&&F(e,z+t,r)};return kt?a.jsx(qt,{$animationDelay:t*20,onClick:i,style:{cursor:F?"pointer":"default"},children:s},e.id):a.jsx("tr",{onClick:i,style:{cursor:F?"pointer":"default"},children:s},e.id)})})]})}),M&&a.jsx(Is,{columns:A.filter(e=>e.id!=="checkbox"),onColumnsChange:e=>{const t=A.find(s=>s.id==="checkbox"),n=t?[t,...e]:e;We(n)},onFilterToggle:Mt,showFilters:je,lockWarning:vt,tableData:j,columnFilters:G,onFiltersChange:Qo,customTabs:Xe})]}),bo&&a.jsx(zs,{currentPage:bt,totalPages:us,totalItems:$t,itemsPerPage:Q,onPageChange:ts,onItemsPerPageChange:as,showPageSizeSelector:wo,itemsPerPageOptions:vo})]})})});st.displayName="AdvancedDataTable";st.__docgenInfo={description:"",methods:[],displayName:"AdvancedDataTable",props:{as:{required:!1,tsType:{name:"ElementType"},description:"Polymorphic component type (default: 'div')",defaultValue:{value:"'div'",computed:!1}},data:{required:!1,tsType:{name:"Array",elements:[{name:"DataRow"}],raw:"DataRow[]"},description:"Array of data objects to display"},initialColumns:{required:!1,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:"Column configuration using ColumnConfig interface"},rowKey:{required:!1,tsType:{name:"string"},description:"Custom row key accessor (default: 'id')",defaultValue:{value:"'id'",computed:!1}},groups:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  groupName: string;
  groupDescription?: string;
  rows: DataRow[];
  defaultExpanded?: boolean;
  customContent?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"groupName",value:{name:"string",required:!0}},{key:"groupDescription",value:{name:"string",required:!1}},{key:"rows",value:{name:"Array",elements:[{name:"DataRow"}],raw:"DataRow[]",required:!0}},{key:"defaultExpanded",value:{name:"boolean",required:!1}},{key:"customContent",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"style",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}}]}}],raw:`Array<{
  id: string;
  groupName: string;
  groupDescription?: string;
  rows: DataRow[];
  defaultExpanded?: boolean;
  customContent?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}>`},description:"Table row groups (alternative to data prop for grouped tables)"},groupConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  expandPosition?: 'left' | 'right';
  onGroupToggle?: (groupId: string, isExpanded: boolean) => void;
  renderGroupContent?: (group: any) => React.ReactNode;
}`,signature:{properties:[{key:"expandPosition",value:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"onGroupToggle",value:{name:"signature",type:"function",raw:"(groupId: string, isExpanded: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"groupId"},{type:{name:"boolean"},name:"isExpanded"}],return:{name:"void"}},required:!1}},{key:"renderGroupContent",value:{name:"signature",type:"function",raw:"(group: any) => React.ReactNode",signature:{arguments:[{type:{name:"any"},name:"group"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}}]}},description:"Group configuration"},useSidePanel:{required:!1,tsType:{name:"boolean"},description:"Show side panel for column/filter controls (alternative to modal settings)",defaultValue:{value:"false",computed:!1}},useModal:{required:!1,tsType:{name:"boolean"},description:"Show modal for column/filter controls",defaultValue:{value:"false",computed:!1}},showToolbar:{required:!1,tsType:{name:"boolean"},description:"Show default toolbar",defaultValue:{value:"true",computed:!1}},toolbarTitle:{required:!1,tsType:{name:"string"},description:"Table title (used in default toolbar)",defaultValue:{value:"'Data Table'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Table description (used in default toolbar)"},toolbar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom toolbar content - when provided, renders instead of default toolbar"},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search in default toolbar",defaultValue:{value:"true",computed:!1}},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button in default toolbar",defaultValue:{value:"true",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button in default toolbar",defaultValue:{value:"false",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"},showColumnFilters:{required:!1,tsType:{name:"boolean"},description:"Show column search bars in sub-header (controlled)"},showColumnFiltersFor:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Limit column search inputs to specific columns (array of column IDs). The search row still requires showColumnFilters (user toggle) to be visible."},onColumnFiltersChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(show: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"show"}],return:{name:"void"}}},description:"Callback when column filters visibility changes"},customSidePanelTabs:{required:!1,tsType:{name:"Array",elements:[{name:"CustomTabConfig"}],raw:"CustomTabConfig[]"},description:"Custom tabs for side panel",defaultValue:{value:"[]",computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height for table body (enables fixed header with internal scroll). Example: '400px', '50vh'"},showColumnMenu:{required:!1,tsType:{name:"boolean"},description:"Enable column header menu (three-dot menu with sort, pin, autosize options) (default: true)",defaultValue:{value:"true",computed:!1}},allowUserLeftPin:{required:!1,tsType:{name:"boolean"},description:"Allow users to pin columns to the left via menu (default: true)"},allowUserRightPin:{required:!1,tsType:{name:"boolean"},description:"Allow users to pin columns to the right via menu (default: true)"},allowDevLeftPin:{required:!1,tsType:{name:"boolean"},description:"Allow developers to set initial left-pinned columns via column config (default: true)"},allowDevRightPin:{required:!1,tsType:{name:"boolean"},description:"Allow developers to set initial right-pinned columns via column config (default: true)"},selectable:{required:!1,tsType:{name:"boolean"},description:"Enable row selection",defaultValue:{value:"false",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedIds"}],return:{name:"void"}}},description:"Callback when rows are selected"},paginated:{required:!1,tsType:{name:"boolean"},description:"Enable pagination",defaultValue:{value:"true",computed:!1}},itemsPerPage:{required:!1,tsType:{name:"number"},description:"Items per page (default: 10)",defaultValue:{value:"10",computed:!1}},paginationMode:{required:!1,tsType:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}]},description:"Pagination mode: 'client' (default) or 'server'. When 'server', use onPageChange callback to handle pagination",defaultValue:{value:"'client'",computed:!1}},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback for page change (server-side pagination). Called with (page)"},onPageSizeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:"Callback for page size change (server-side pagination). Called with (pageSize)"},currentPage:{required:!1,tsType:{name:"number"},description:"Current page (controlled, for server-side pagination)"},totalItems:{required:!1,tsType:{name:"number"},description:"Total number of items (required for server-side pagination)"},showPageSizeSelector:{required:!1,tsType:{name:"boolean"},description:"Show/hide page size selector dropdown (default: true)",defaultValue:{value:"true",computed:!1}},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"Custom page size options (default: [10, 25, 50, 100])",defaultValue:{value:"[10, 25, 50, 100]",computed:!1}},sortMode:{required:!1,tsType:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}]},description:"Sorting mode: 'client' (default) or 'server'. When 'server', use onSort callback to handle sorting",defaultValue:{value:"'client'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnId: string, direction: 'asc' | 'desc' | 'none') => void",signature:{arguments:[{type:{name:"string"},name:"columnId"},{type:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sort changes (only used when sortMode='server')"},sortColumn:{required:!1,tsType:{name:"string"},description:"Controlled sort column (only used when sortMode='server')"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"Controlled sort direction (only used when sortMode='server')"},searchMode:{required:!1,tsType:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}]},description:"Search mode: 'client' (default) or 'server'. When 'server', use onColumnSearch callback to handle column search",defaultValue:{value:"'client'",computed:!1}},onColumnSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnSearches: { [key: string]: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ [key: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},name:"columnSearches"}],return:{name:"void"}}},description:"Callback when column search changes (only used when searchMode='server')"},columnSearches:{required:!1,tsType:{name:"signature",type:"object",raw:"{ [key: string]: string }",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},description:"Controlled column search values (only used when searchMode='server')"},columnSearchDebounceMs:{required:!1,tsType:{name:"number"},description:"Debounce delay in ms before firing onColumnSearch callback (default: 300, set 0 to disable). Only used when searchMode='server'",defaultValue:{value:"300",computed:!1}},defaultMinWidth:{required:!1,tsType:{name:"number"},description:"Default minimum width for columns that don't specify minWidth (default: 50px)",defaultValue:{value:"50",computed:!1}},defaultMaxWidth:{required:!1,tsType:{name:"number"},description:"Default maximum width for columns that don't specify maxWidth (default: 250px)",defaultValue:{value:"250",computed:!1}},enableUserPinning:{required:!1,tsType:{name:"boolean"},description:`Allow users to pin columns via column menu (both left and right). 
When false, hides pin options from column menu. Default: true`,defaultValue:{value:"true",computed:!1}},enableDevPinning:{required:!1,tsType:{name:"boolean"},description:`Allow developers to set initial pinned columns via column config (pinned: 'left' | 'right'). 
When false, ignores pinned property in column config. Default: true`,defaultValue:{value:"true",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: any, rowIndex: number, event: React.MouseEvent<HTMLTableRowElement>) => void",signature:{arguments:[{type:{name:"any"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableRowElement>",elements:[{name:"HTMLTableRowElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when a row is clicked"},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when side panel/modal opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when side panel/modal closes"},onAfterOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback after side panel/modal open animation completes"},onAfterClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback after side panel/modal close animation completes"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Invalid/error state",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error state title/heading (default: 'Something went wrong')"},errorDescription:{required:!1,tsType:{name:"string"},description:"Error state description text (default: 'There was a problem loading the table data.')"},errorIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Error state icon – any ReactNode (e.g. custom SVG, MUI icon). Defaults to ErrorIcon."},errorActionLabel:{required:!1,tsType:{name:"string"},description:"Error state action button label (default: 'Retry')"},onErrorAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Error state action button handler. When provided, shows the button."},errorStateContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Fully custom error state content.
When provided, replaces the entire error state UI (icon, text, button).
Ideal for API-driven content or completely custom layouts.
@example
errorStateContent={<MyApiErrorBanner error={apiError} onRetry={refetch} />}`},emptyMessage:{required:!1,tsType:{name:"string"},description:"Custom empty state message",defaultValue:{value:"'No data available'",computed:!1}},emptyIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Empty state icon – any ReactNode. Defaults to CloudOffIcon."},emptyTitle:{required:!1,tsType:{name:"string"},description:"Empty state title",defaultValue:{value:"'No Results Found'",computed:!1}},emptyDescription:{required:!1,tsType:{name:"string"},description:"Empty state description",defaultValue:{value:"'Try adjusting your filters or search criteria'",computed:!1}},emptyActionLabel:{required:!1,tsType:{name:"string"},description:"Empty state action button label"},onEmptyAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Empty state action button handler"},emptyStateContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Fully custom empty state content.
When provided, replaces the entire empty state UI (icon, text, button).
Ideal for API-driven content or completely custom layouts.
@example
emptyStateContent={<MyEmptyIllustration onAction={handleAction} />}`},containerClassName:{required:!1,tsType:{name:"string"},description:"Override className for container"},containerStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for container"},scrollContainerClassName:{required:!1,tsType:{name:"string"},description:"Override className for scroll container"},scrollContainerStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for scroll container"},emptyStateClassName:{required:!1,tsType:{name:"string"},description:"Override className for empty state"},emptyStateStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for empty state"},loadingClassName:{required:!1,tsType:{name:"string"},description:"Override className for loading state"},loadingStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for loading state"},errorClassName:{required:!1,tsType:{name:"string"},description:"Override className for error state"},errorStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for error state"},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};const Mr={title:"Components/Table/Advanced Table",component:st,argTypes:{as:{control:"select",options:["div","section","article","main"],description:"Polymorphic component type",table:{category:"Polymorphism"}},className:{control:"text",description:"Custom CSS class",table:{category:"Polymorphism"}},initialColumns:{control:!1,description:'Column configuration array. Each column supports: id, label, visible, locked, pinned ("left"|"right"|"none"), order, width, minWidth, maxWidth, resizable, filterable, showColumnSearch, subColumns, parentId, renderCell, headerIcon, onHeaderIconClick, headerIconTitle. The renderCell function signature is: (value, row, rowIndex) => ReactNode. Example: renderCell: (value, row) => <Chip label={value} />',table:{category:"Data & Columns"}},data:{control:!1,description:"Table data rows",table:{category:"Data & Columns"}},rowKey:{control:"text",description:"Row key accessor",table:{category:"Data & Columns"}},useSidePanel:{control:"boolean",description:"Show side panel",table:{category:"Layout & Display"}},useModal:{control:"boolean",description:"Show modal for settings",table:{category:"Layout & Display"}},showToolbar:{control:"boolean",description:"Show toolbar",table:{category:"Layout & Display"}},toolbarTitle:{control:"text",description:"Toolbar title",table:{category:"Layout & Display"}},description:{control:"text",description:"Table description",table:{category:"Layout & Display"}},showGlobalSearch:{control:"boolean",description:"Show global search",table:{category:"Layout & Display"}},showFilter:{control:"boolean",description:"Show filter button",table:{category:"Layout & Display"}},showDownload:{control:"boolean",description:"Show download button",table:{category:"Layout & Display"}},maxHeight:{control:"text",description:'Max height for table body (e.g., "400px", "50vh"). Enables fixed header with scrollable body and always-visible 8px scrollbar',table:{category:"Layout & Display"}},showColumnFilters:{control:"boolean",description:"Show column search bars for all columns (controlled). When provided, parent controls visibility via onColumnFiltersChange callback",table:{category:"Layout & Display"}},showColumnFiltersFor:{control:"object",description:"Show column search bars for specific columns only (array of column IDs). When provided, only these columns show search inputs. Takes precedence over showColumnFilters.",table:{category:"Layout & Display"}},onColumnFiltersChange:{action:"columnFiltersChanged",description:"Callback when column filters visibility changes",table:{category:"Layout & Display"}},showColumnMenu:{control:"boolean",description:"Enable column header menu (three-dot menu with sort, pin, autosize, and reset options). Default: true",table:{category:"Column Menu & Pinning"}},enableUserPinning:{control:"boolean",description:"Allow users to pin columns (left or right) via column menu. When false, hides pin options from menu. Default: true",table:{category:"Column Menu & Pinning"}},enableDevPinning:{control:"boolean",description:'Allow developers to set initial pinned columns via column config (pinned: "left" | "right"). When false, ignores pinned property in column config. Default: true',table:{category:"Column Menu & Pinning"}},selectable:{control:"boolean",description:"Enable row selection",table:{category:"Selection"}},paginated:{control:"boolean",description:"Enable pagination",table:{category:"Pagination"}},itemsPerPage:{control:"number",description:"Items per page",table:{category:"Pagination"}},paginationMode:{control:"select",options:["client","server"],description:'Pagination mode: "client" (default) handles data slicing automatically, "server" expects pre-paginated data and calls callbacks',table:{category:"Pagination"}},onPageChange:{action:"pageChanged",description:'Callback when page changes (server-side pagination). Called with (page). Use with paginationMode="server"',table:{category:"Pagination"}},onPageSizeChange:{action:"pageSizeChanged",description:'Callback when page size changes (server-side pagination). Called with (pageSize). Use with paginationMode="server"',table:{category:"Pagination"}},currentPage:{control:"number",description:'Controlled current page (for server-side pagination). Use with paginationMode="server"',table:{category:"Pagination"}},totalItems:{control:"number",description:'Total number of items across all pages (required for server-side pagination). Use with paginationMode="server"',table:{category:"Pagination"}},showPageSizeSelector:{control:"boolean",description:"Show/hide page size selector dropdown",table:{category:"Pagination"}},pageSizeOptions:{control:"object",description:"Custom page size options (default: [10, 25, 50, 100])",table:{category:"Pagination"}},sortMode:{control:"select",options:["client","server"],description:'Sorting mode: "client" (default) handles sorting internally, "server" calls onSort callback',table:{category:"Sorting"}},onSort:{action:"sorted",description:'Callback when sort changes (only used when sortMode="server")',table:{category:"Sorting"}},sortColumn:{control:"text",description:'Controlled sort column (only used when sortMode="server")',table:{category:"Sorting"}},sortDirection:{control:"select",options:["asc","desc","none"],description:'Controlled sort direction (only used when sortMode="server")',table:{category:"Sorting"}},searchMode:{control:"select",options:["client","server"],description:'Search mode: "client" (default) handles filtering internally, "server" calls onColumnSearch callback after debounce',table:{category:"Column Search"}},onColumnSearch:{action:"columnSearchChanged",description:'Callback fired (after debounce) with the full accumulated column search map. Only used when searchMode="server"',table:{category:"Column Search"}},columnSearches:{control:"object",description:'Controlled column search values. Used in searchMode="server" to externally reset inputs (e.g. a "Clear all" button). Changes to this prop are synced back into the internal display state.',table:{category:"Column Search"}},columnSearchDebounceMs:{control:"number",description:'Debounce delay in ms before onColumnSearch fires (default: 300). Set to 0 to disable debouncing. Only used when searchMode="server".',table:{category:"Column Search"}},defaultMinWidth:{control:"number",description:"Default min width for columns",table:{category:"Column Resizing"}},defaultMaxWidth:{control:"number",description:"Default max width for columns",table:{category:"Column Resizing"}},loading:{control:"boolean",description:"Loading state",table:{category:"States"}},isInvalid:{control:"boolean",description:"Error state",table:{category:"States"}},errorMessage:{control:"text",description:'Error state title/heading (default: "Something went wrong")',table:{category:"States"}},errorDescription:{control:"text",description:'Error state description text (default: "There was a problem loading the table data.")',table:{category:"States"}},errorIcon:{control:!1,description:"Error state icon – any ReactNode. Defaults to ErrorIcon.",table:{category:"States"}},errorActionLabel:{control:"text",description:'Error state action button label (default: "Retry")',table:{category:"States"}},onErrorAction:{action:"errorActionClicked",description:"Error state action button handler. When provided, shows the button.",table:{category:"States"}},errorStateContent:{control:!1,description:"Fully custom error state content (ReactNode). Replaces entire error UI. Ideal for API-driven content.",table:{category:"States"}},emptyTitle:{control:"text",description:"Empty state title",table:{category:"Empty State"}},emptyDescription:{control:"text",description:"Empty state description",table:{category:"Empty State"}},emptyActionLabel:{control:"text",description:"Empty action button label",table:{category:"Empty State"}},emptyIcon:{control:!1,description:"Empty state icon – any ReactNode. Defaults to CloudOffIcon.",table:{category:"Empty State"}},emptyStateContent:{control:!1,description:"Fully custom empty state content (ReactNode). Replaces entire empty state UI. Ideal for API-driven content.",table:{category:"Empty State"}},containerClassName:{control:"text",description:"Container class",table:{category:"Customization"}},scrollContainerClassName:{control:"text",description:"Scroll container class",table:{category:"Customization"}},emptyStateClassName:{control:"text",description:"Empty state class",table:{category:"Customization"}},loadingClassName:{control:"text",description:"Loading state class",table:{category:"Customization"}},errorClassName:{control:"text",description:"Error state class",table:{category:"Customization"}},onRowClick:{action:"row clicked",table:{category:"Events"}},onRowSelect:{action:"rows selected",table:{category:"Events"}},onDownload:{action:"download clicked",table:{category:"Events"}},onEmptyAction:{action:"empty action clicked",table:{category:"Events"}},onOpen:{action:"panel opened",table:{category:"Events"}},onClose:{action:"panel closed",table:{category:"Events"}},onAfterOpen:{action:"after open",table:{category:"Events"}},onAfterClose:{action:"after close",table:{category:"Events"}}},parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:600},description:{component:`
Advanced enterprise-grade table with **40+ props** for maximum flexibility. **Component Maturity: 100% Compliant**

## ✨ Features

**Core Features:**
- 🎯 Nested headers with sub-columns
- 📏 Column resizing with min/max constraints
- 🎨 Side panel & modal for settings
- 🔄 Drag-and-drop column reordering
- 🔍 Sorting & filtering
- 📄 Pagination
- ✅ Row selection
- 🎭 8 States (default, hover, focus, active, disabled, loading, empty, error)

**Enterprise Features:**
- 🔧 **forwardRef** support
- 🎨 **Polymorphic 'as' prop** - render as any element
- 📊 **Loading state** with customization
- ❌ **Error state** with custom messages
- 📭 **Empty state** with 7 customization props
- 🎛️ **10+ override points** for styling
- 🎨 **Typography component** integration
- 🔔 **Lifecycle callbacks** (onOpen, onClose, onAfterOpen, onAfterClose)
- 🛠️ **Custom toolbar** support
- 📦 **40+ props** for complete control

## 🚀 Quick Start

\`\`\`tsx
import { AdvancedDataTable, getNestedColumnConfigs } from '@ajaysoni7832/lean-ids-components';

// Basic usage
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="My Table"
/>

// With states
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  loading={isLoading}
  isInvalid={hasError}
  errorMessage="Failed to load"
/>

// Full customization
<AdvancedDataTable
  as="section"
  ref={tableRef}
  initialColumns={getNestedColumnConfigs()}
  selectable={true}
  paginated={true}
  itemsPerPage={20}
  onRowSelect={(ids) => {}}
  containerClassName="custom-table"
/>
\`\`\`

## 📚 Props Overview

| Category | Props |
|----------|-------|
| **Polymorphism** | \`as\`, \`ref\` (forwardRef) |
| **Data** | \`initialColumns\`, \`data\`, \`rowKey\` |
| **Layout** | \`useSidePanel\`, \`useModal\`, \`showToolbar\`, \`toolbar\`, \`maxHeight\` |
| **Toolbar** | \`toolbarTitle\`, \`description\`, \`showGlobalSearch\`, \`showFilter\`, \`showDownload\` |
| **Column Menu** | \`showColumnMenu\`, \`allowUserLeftPin\`, \`allowUserRightPin\`, \`allowDevLeftPin\`, \`allowDevRightPin\` |
| **Selection** | \`selectable\`, \`onRowSelect\` |
| **Pagination** | \`paginated\`, \`itemsPerPage\`, \`paginationMode\`, \`onPageChange\`, \`onPageSizeChange\`, \`currentPage\`, \`totalItems\`, \`showPageSizeSelector\`, \`pageSizeOptions\` |
| **Sorting** | \`sortMode\`, \`onSort\`, \`sortColumn\`, \`sortDirection\` |
| **Column Search** | \`searchMode\`, \`onColumnSearch\`, \`columnSearches\`, \`showColumnFilters\`, \`showColumnFiltersFor\`, \`onColumnFiltersChange\` |
| **Resizing** | \`defaultMinWidth\`, \`defaultMaxWidth\` |
| **Events** | \`onRowClick\`, \`onOpen\`, \`onClose\`, \`onAfterOpen\`, \`onAfterClose\` |
| **States** | \`loading\`, \`isInvalid\`, \`errorMessage\`, \`errorDescription\`, \`errorIcon\`, \`errorActionLabel\`, \`onErrorAction\`, \`errorStateContent\` |
| **Empty State** | \`emptyTitle\`, \`emptyDescription\`, \`emptyActionLabel\`, \`onEmptyAction\`, \`emptyIcon\`, \`emptyStateContent\` |
| **Customization** | 10+ className/style override props |

## 🎨 Custom Cell Rendering

Columns support custom rendering via the \`renderCell\` function:

**Signature:** \`(value, row, rowIndex) => ReactNode\`

\`\`\`tsx
const columns = [
  {
    id: 'status',
    label: 'Status',
    // value = cell value, row = full row object, rowIndex = row index
    renderCell: (value, row, rowIndex) => (
      <Chip label={value} type="success" />
    )
  },
  {
    id: 'actions',
    label: 'Actions',
    // For actions column, value is ignored, use row object
    renderCell: (_value, row) => (
      <Button onClick={() => handleEdit(row)}>Edit</Button>
    )
  }
];
\`\`\`

## 🎯 Custom Header Icons

Columns support custom icons in the header with click handlers:

**Properties:** \`headerIcon\`, \`onHeaderIconClick\`, \`headerIconTitle\`

\`\`\`tsx
import FilterListIcon from '@mui/icons-material/FilterList';

const columns = [
  {
    id: 'firstName',
    label: 'First Name',
    headerIcon: <FilterListIcon fontSize="small" />,
    onHeaderIconClick: (columnId, event) => {
      console.log(\`Filter icon clicked for column: \${columnId}\`);
      // Handle custom action
    },
    headerIconTitle: 'Toggle column filters'
  }
];
\`\`\`

## 🔍 Server-Side Search

Enable server-side search for large datasets:

**Properties:** \`searchMode\`, \`onColumnSearch\`, \`columnSearches\`, \`columnSearchDebounceMs\`

**How it works:**
- The input is always immediately responsive — typing never blocks waiting for an API round-trip.
- \`onColumnSearch\` fires **after the debounce delay** (default 300 ms) with the full accumulated search map.
- Pass \`columnSearches\` back only when you need to **externally reset** the inputs (e.g. a "Clear all filters" button). You do not need to pass it on every keystroke.
- Set \`columnSearchDebounceMs={0}\` to disable debouncing and fire on every keystroke.

\`\`\`tsx
const [columnSearches, setColumnSearches] = useState({});

<AdvancedDataTable
  searchMode="server"
  columnSearches={columnSearches}        // only needed for external resets
  columnSearchDebounceMs={300}           // default — omit to use default
  onColumnSearch={(searches) => {
    setColumnSearches(searches);
    // Called once after user stops typing (debounced)
    // searches contains the full accumulated value
    fetchFilteredData(searches);
  }}
/>
\`\`\`

To programmatically reset all column search inputs from outside the table:
\`\`\`tsx
// Passing an empty object resets all column search inputs
setColumnSearches({});
\`\`\`

## 🎛️ Controlled Column Filters

Control column filter visibility with parent state:

**Properties:** \`showColumnFilters\`, \`onColumnFiltersChange\`

\`\`\`tsx
const [showFilters, setShowFilters] = useState(false);

<AdvancedDataTable
  showColumnFilters={showFilters}
  onColumnFiltersChange={setShowFilters}
/>
\`\`\`

## 🎯 Column-Specific Search

Control which columns show inline search inputs:

**Three modes available:**

1. **Global toggle (all columns):**
   \`\`\`tsx
   <AdvancedDataTable
     showColumnFilters={true}
   />
   \`\`\`

2. **Specific columns only:**
   \`\`\`tsx
   <AdvancedDataTable
     showColumnFiltersFor={['firstName', 'lastName']}
   />
   \`\`\`

3. **Per-column configuration:**
   \`\`\`tsx
   const columns = [
     { id: 'firstName', label: 'First Name', showColumnSearch: true },
     { id: 'lastName', label: 'Last Name', showColumnSearch: false },
   ];
   <AdvancedDataTable
     showColumnFilters={true}
     initialColumns={columns}
   />
   \`\`\`

**Priority Logic:**
- If \`showColumnFiltersFor\` is provided → Only those columns
- Else if \`showColumnFilters\` is true → All columns with \`showColumnSearch: true\` (or all if not set)
- Else → No search inputs

## 📄 Server-Side Pagination

Industry-standard pagination with separate callbacks for page and page size changes:

**Properties:** \`paginationMode\`, \`onPageChange\`, \`onPageSizeChange\`, \`showPageSizeSelector\`, \`pageSizeOptions\`

\`\`\`tsx
const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(10);

<AdvancedDataTable
  paginationMode="server"
  currentPage={currentPage}
  itemsPerPage={pageSize}
  totalItems={1000}
  onPageChange={(page) => {
    setCurrentPage(page);
    fetchPaginatedData(page, pageSize);
  }}
  onPageSizeChange={(newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1); // Reset to page 1
    fetchPaginatedData(1, newPageSize);
  }}
  showPageSizeSelector={true}
  pageSizeOptions={[10, 25, 50, 100]}
/>
\`\`\`

See stories below for detailed examples of each feature.
        `}}},args:{initialColumns:w(),useSidePanel:!1,useModal:!1,showToolbar:!0,toolbarTitle:"Data Table",showGlobalSearch:!0,showFilter:!1,showDownload:!1,showColumnFilters:!1,showColumnMenu:!0,enableUserPinning:!0,enableDevPinning:!0,selectable:!1,paginated:!0,itemsPerPage:10,sortMode:"client",defaultMinWidth:50,defaultMaxWidth:250,loading:!1,isInvalid:!1,errorMessage:"",emptyTitle:"No Results Found",emptyDescription:"Try adjusting your search criteria or filters",emptyActionLabel:"",rowKey:"id"},tags:["autodocs"]},oe={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Claims Data",onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:"Table with side panel for column and filter controls. The table has no right border radius to seamlessly connect with the side panel. Column resizing works in both Canvas and Docs views."},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

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
/>`},story:{inline:!1,iframeHeight:600}}}},se={args:{useSidePanel:!1,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data",onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:"Traditional table with modal settings. Click the settings icon button in the toolbar to open column settings. Column resizing works in both Canvas and Docs views."},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

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
/>`},story:{inline:!1,iframeHeight:600}}}},Ue={args:{useSidePanel:!0,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data",onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:"Table with both side panel and modal controls available. The toolbar settings button opens the modal, while the side panel provides quick access to column/filter controls. Column resizing works in both Canvas and Docs views."}}}},re={args:{useSidePanel:!1,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data with Sub-Headers",initialColumns:w(),onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:'Table with sub-header support showing nested columns. The "User Details" parent column contains "First Name" and "Last Name" sub-columns, and the "Address" parent column contains "City" and "State" sub-columns. This demonstrates the hierarchical column structure with parent-child relationships. Column resizing works in both Canvas and Docs views.'},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

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
/>`},story:{inline:!1,iframeHeight:600}}}},ie={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Filter Count Badge Demo",onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:"**Filter Count Badge & Smart Search Headers**: The Filter button now shows a purple badge with the count of active filters. Search headers only appear when filters are actually applied, not just when clicking the Filter button. This provides better visual feedback and cleaner UX."},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

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
  onFiltersChange={(filters) => {}}
/>`},story:{inline:!1,iframeHeight:600}}}},le={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Always Visible Search Headers",showColumnFilters:!0,onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:"**Always Visible Search Headers**: Set showColumnFilters to true to force search headers to always be visible, regardless of filter state. Useful when column search is the primary filtering method."}}}},ce={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Custom Tabs Demo",customSidePanelTabs:[{id:"export",label:"Export",icon:"📥",onClick:()=>alert("Export functionality triggered!")},{id:"info",label:"Info",icon:"ℹ️",content:a.jsxs("div",{style:{padding:"16px"},children:[a.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"16px",fontWeight:600},children:"Custom Info Panel"}),a.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666",lineHeight:1.5},children:"This is a custom content panel. You can render any React component here. Perfect for settings, filters, analytics, or any custom functionality."})]})}],onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:'**Custom Tabs**: Add your own tabs to the side panel with customSidePanelTabs prop. Supports both action-only tabs (with onClick) and content tabs (with content ReactNode). Try clicking the "Export" and "Info" tabs!'}}}},de={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Click Outside to Close Demo",onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:"**Click Outside to Close**: The side panel now closes when clicking outside, providing standard overlay/modal behavior. However, if there are unsaved filter changes, the panel prevents closing and shows a warning with shake animation. This prevents accidental loss of filter selections."}}}},ue={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Unsaved Changes Protection Demo",onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:'**Unsaved Changes Protection**: Filter selections are now tracked as "pending" until you click Apply. If you try to close the panel with unsaved changes, it prevents closing and shows a shake animation with a warning message: "Please apply, cancel, or reset filters before closing." This ensures users never accidentally lose their filter selections.'}}}},me={args:{initialColumns:w(),loading:!0,showToolbar:!0,toolbarTitle:"Loading Data"},parameters:{docs:{description:{story:"Shows a loading state with Typography component. Customize with `loadingClassName` and `loadingStyle` props."}}}},pe={args:{initialColumns:w(),isInvalid:!0,errorMessage:"Failed to load data.",errorDescription:"The server returned an unexpected error. Please try again.",errorActionLabel:"Retry",onErrorAction:d(),showToolbar:!0,toolbarTitle:"Error Loading Data"},parameters:{docs:{description:{story:"Shows an error state. Customize the title (`errorMessage`), description (`errorDescription`), icon (`errorIcon`), and action button (`errorActionLabel` + `onErrorAction`). For fully custom content from an API, use `errorStateContent`."}}}},he={args:{initialColumns:w(),data:[],emptyTitle:"No Claims Found",emptyDescription:"Try adjusting your search criteria or filters",emptyActionLabel:"Clear Filters",onEmptyAction:d(),showToolbar:!0,toolbarTitle:"Empty State Demo"},parameters:{docs:{description:{story:"Shows a custom empty state with title, description, and action button. Customize with `emptyTitle`, `emptyDescription`, `emptyActionLabel`, `emptyIcon`. For fully custom content from an API, use `emptyStateContent`."}}}},ge={args:{initialColumns:w(),data:[],showToolbar:!0,toolbarTitle:"Custom Empty State Content",emptyStateContent:a.jsxs("div",{style:{textAlign:"center",padding:"48px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[a.jsx("div",{style:{fontSize:"48px"},children:"🗂️"}),a.jsxs("div",{children:[a.jsx("h3",{style:{margin:"0 0 8px",fontWeight:600},children:"No claims to display"}),a.jsx("p",{style:{margin:0,color:"#6b7280"},children:"Your custom API-driven empty state goes here — illustrations, multi-action buttons, rich text, anything."})]})]})},parameters:{docs:{description:{story:"**Custom State Content**: Use `emptyStateContent` or `errorStateContent` to supply any ReactNode, completely replacing the built-in UI. Ideal for API-driven content, custom illustrations, or multi-action layouts. Toggle `isInvalid` in controls to see the error state variant."}}}},fe={args:{initialColumns:w(),selectable:!0,onRowSelect:d(),showToolbar:!0,toolbarTitle:"Selectable Table"},parameters:{docs:{description:{story:"Enable row selection with checkboxes. Use `onRowSelect` callback to handle selection changes."}}}},be={args:{initialColumns:w().map(o=>o.subColumns?{...o,subColumns:o.subColumns.map(C=>C.id==="firstName"?{...C,headerIcon:a.jsx(Rs,{fontSize:"small"}),onHeaderIconClick:d(),headerIconTitle:"Toggle column filters"}:C.id==="lastName"?{...C,headerIcon:a.jsx(Ps,{fontSize:"small"}),onHeaderIconClick:d(),headerIconTitle:"Column information"}:C)}:o),showToolbar:!0,toolbarTitle:"Custom Header Icons",showColumnFilters:!0,onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:"**Custom Header Icons**: Add custom icons to column headers with click handlers. Each column can have its own icon and action. Icons appear before the three-dot menu button and include hover effects and tooltips."}}}},ye={args:{initialColumns:w(),searchMode:"server",showToolbar:!0,toolbarTitle:"Server-Side Search Demo",showColumnFilters:!0,onRowClick:d(),onSort:d(),onColumnSearch:d()},parameters:{docs:{description:{story:'**Server-Side Search**: When `searchMode="server"`, inputs are immediately responsive and `onColumnSearch` fires after the debounce delay (default 300 ms) with the full accumulated search map. The parent component must handle the actual filtering and update the `data` prop. For immediate filtering in Storybook, use the Client-Side Search demo.'}}}},Ce={args:{initialColumns:w(),searchMode:"client",showToolbar:!0,toolbarTitle:"Client-Side Search Demo",showColumnFilters:!0,onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:'**Client-Side Search**: When `searchMode="client"`, the table handles filtering internally and updates the view immediately as you type. This is perfect for smaller datasets and provides instant visual feedback.'}}}},we={args:{initialColumns:w(),showToolbar:!0,toolbarTitle:"Controlled Column Filters",showColumnFilters:!1,onColumnFiltersChange:d(),onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:"**Controlled Column Filters**: Control column filter visibility using parent state. Click the filter icon in any column header to toggle the search row for all columns. This follows the industry-standard pattern where filter icons in headers control global filter visibility."}}}},ve={args:{initialColumns:w(),paginationMode:"client",showToolbar:!0,toolbarTitle:"Server-Side Pagination Demo",showPageSizeSelector:!0,pageSizeOptions:[10,25,50,100],onRowClick:d(),onPageChange:d(),onPageSizeChange:d()},parameters:{docs:{description:{story:"**Server-Side Pagination**: Industry-standard pagination with separate callbacks for page changes (`onPageChange`) and page size changes (`onPageSizeChange`). Also supports hiding the page size selector (`showPageSizeSelector`) and customizing available page sizes (`pageSizeOptions`)."}}}},Se={args:{initialColumns:w(),paginated:!0,itemsPerPage:5,showPageSizeSelector:!0,pageSizeOptions:[5,10,25,50,100],showToolbar:!0,toolbarTitle:"Custom Pagination (5 per page)"},parameters:{docs:{description:{story:"Customize pagination with `itemsPerPage` prop, `showPageSizeSelector` to control dropdown visibility, and `pageSizeOptions` to customize available page sizes. This example shows 5 items per page with custom page size options."}}}},Te={args:{initialColumns:w(),showToolbar:!0,toolbarTitle:"Column-Specific Search",showColumnFiltersFor:["firstName","lastName"],onRowClick:d(),onSort:d()},parameters:{docs:{description:{story:"**Column-Specific Search**: Control which columns show inline search inputs. This example shows search inputs only for `firstName` and `lastName` columns using `showColumnFiltersFor`. You can also use `showColumnSearch` on individual column configs or the global `showColumnFilters` toggle."},story:{inline:!1,iframeHeight:600}}}},xe={args:{as:"section",initialColumns:w(),className:"enterprise-table-section",showToolbar:!0,toolbarTitle:"Rendered as <section>"},parameters:{docs:{description:{story:"Use the `as` prop to render as any HTML element. This example renders as a `<section>` element. Supports forwardRef for accessing the DOM element."}}}},Ne={args:{initialColumns:w(),toolbar:a.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderBottom:"1px solid #ddd"},children:[a.jsx("h3",{style:{margin:0,fontSize:"18px",fontWeight:600},children:"Custom Toolbar Content"}),a.jsx("p",{style:{margin:"8px 0 0",fontSize:"14px",color:"#666"},children:"You can pass any React component as the toolbar prop"})]})},parameters:{docs:{description:{story:"Replace the default toolbar with custom content using the `toolbar` prop. Pass any React component."}}}},ke={args:{initialColumns:w(),showToolbar:!0,toolbarTitle:"Claims Management",description:"View and manage all claims in the system",showGlobalSearch:!0,showFilter:!0,showDownload:!0,onDownload:d()},parameters:{docs:{description:{story:"Customize the default toolbar with title, description, and toggle various features like global search, filter, and download buttons."}}}},De={args:{as:"section",className:"enterprise-table",initialColumns:[{id:"checkbox",label:"",visible:!0,locked:!0,order:0},{id:"claimId",label:"Claim ID",visible:!0,locked:!1,pinned:"left",order:1,width:120},{id:"userDetails",label:"User",visible:!0,locked:!1,pinned:"left",order:2,width:200},{id:"status",label:"Status",visible:!0,locked:!1,order:3,width:150,renderCell:(o,C)=>{const k={approved:{type:"success",label:"Approved"},pending:{type:"warning",label:"Pending"},rejected:{type:"error",label:"Rejected"},review:{type:"default",label:"In Review"}}[String(o||"").toLowerCase()]||{type:"default",label:o};return a.jsx(_,{label:k.label,type:k.type,variant:"filled",size:"small"})}},{id:"priority",label:"Priority",visible:!0,locked:!1,order:4,width:120,renderCell:(o,C)=>{const k={high:{type:"error",label:"High"},medium:{type:"warning",label:"Medium"},low:{type:"success",label:"Low"}}[String(o||"").toLowerCase()]||{type:"warning",label:o};return a.jsx(_,{label:k.label,type:k.type,variant:"outlined",size:"small"})}},{id:"amount",label:"Amount",visible:!0,locked:!1,order:5,width:120},{id:"contact",label:"Contact",visible:!0,locked:!1,order:6,width:150},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:7,width:120},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:8,width:130},{id:"acrLoadDates",label:"ACR Load Date",visible:!0,locked:!1,order:9,width:140},{id:"firstName",label:"First Name",visible:!0,locked:!1,order:10,width:120},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:11,width:120},{id:"actions",label:"Actions",visible:!0,locked:!1,pinned:"right",order:12,width:180,renderCell:(o,C)=>a.jsxs("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[a.jsx(X,{variant:"tertiary",size:"small",onClick:()=>console.log("View",C.claimId),"aria-label":"View",children:a.jsx(ks,{style:{fontSize:"16px"}})}),a.jsx(X,{variant:"tertiary",size:"small",onClick:()=>console.log("Edit",C.claimId),"aria-label":"Edit",children:a.jsx(Ds,{style:{fontSize:"16px"}})}),a.jsx(X,{variant:"tertiary",size:"small",onClick:()=>console.log("Delete",C.claimId),"aria-label":"Delete",children:a.jsx(As,{style:{fontSize:"16px"}})})]})}],data:[{id:"1",claimId:"CLM-1001",firstName:"John",lastName:"Doe",userDetails:"John Doe",status:"approved",priority:"high",amount:"$15,200",paidAmount:"$15,200",contact:"(555) 100-1001",nrCodes:"NR-001",acrLoadDates:"2024-01-15",avatar:"https://i.pravatar.cc/32?img=1"},{id:"2",claimId:"CLM-1002",firstName:"Jane",lastName:"Smith",userDetails:"Jane Smith",status:"pending",priority:"medium",amount:"$8,500",paidAmount:"$8,500",contact:"(555) 100-1002",nrCodes:"NR-002",acrLoadDates:"2024-01-16",avatar:"https://i.pravatar.cc/32?img=2"},{id:"3",claimId:"CLM-1003",firstName:"Bob",lastName:"Wilson",userDetails:"Bob Wilson",status:"review",priority:"low",amount:"$12,300",paidAmount:"$12,300",contact:"(555) 100-1003",nrCodes:"NR-003",acrLoadDates:"2024-01-17",avatar:"https://i.pravatar.cc/32?img=3"},{id:"4",claimId:"CLM-1004",firstName:"Alice",lastName:"Brown",userDetails:"Alice Brown",status:"rejected",priority:"high",amount:"$22,100",paidAmount:"$22,100",contact:"(555) 100-1004",nrCodes:"NR-004",acrLoadDates:"2024-01-18",avatar:"https://i.pravatar.cc/32?img=4"},{id:"5",claimId:"CLM-1005",firstName:"Charlie",lastName:"Davis",userDetails:"Charlie Davis",status:"approved",priority:"medium",amount:"$9,800",paidAmount:"$9,800",contact:"(555) 100-1005",nrCodes:"NR-005",acrLoadDates:"2024-01-19",avatar:"https://i.pravatar.cc/32?img=5"}],showToolbar:!0,toolbarTitle:"Enterprise Table with Custom Renders & Right Pinning",description:"Scroll horizontally to see the Actions column pinned to the right. Status and Priority use custom Chip renders.",showGlobalSearch:!0,showFilter:!0,showDownload:!0,onDownload:d(),maxHeight:"500px",selectable:!0,onRowSelect:d(),paginated:!0,itemsPerPage:10,onRowClick:d(),onOpen:d(),onClose:d(),containerClassName:"custom-container",scrollContainerClassName:"custom-scroll"},parameters:{docs:{description:{story:"Complete example showing all customization options including **right-side column pinning** (Actions column) and **custom cell rendering** (Status and Priority columns with Chips). Try scrolling horizontally to see the Actions column stay fixed on the right."}}}},Ae={args:{groups:[{id:"high-priority",groupName:"High Priority Claims",groupDescription:"Urgent claims requiring immediate attention",defaultExpanded:!0,rows:[{id:"1001",claimId:"CLM-1001",firstName:"Sarah",lastName:"Johnson",userDetails:"Senior Analyst",nrCodes:"NR-H001",paidAmount:"$15,200",acrLoadDates:"March 10, 2025",contact:"(555) 100-1001",amount:"$15,200",avatar:"https://i.pravatar.cc/32?img=1",city:"New York",state:"NY",status:"Pending",priority:"High"},{id:"1002",claimId:"CLM-1002",firstName:"Michael",lastName:"Chen",userDetails:"Lead Processor",nrCodes:"NR-H002",paidAmount:"$22,500",acrLoadDates:"March 12, 2025",contact:"(555) 100-1002",amount:"$22,500",avatar:"https://i.pravatar.cc/32?img=2",city:"Los Angeles",state:"CA",status:"Approved",priority:"High"},{id:"1003",claimId:"CLM-1003",firstName:"Emily",lastName:"Rodriguez",userDetails:"Manager",nrCodes:"NR-H003",paidAmount:"$18,900",acrLoadDates:"March 14, 2025",contact:"(555) 100-1003",amount:"$18,900",avatar:"https://i.pravatar.cc/32?img=3",city:"Chicago",state:"IL",status:"Pending",priority:"High"}],customContent:a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(_,{label:"3 claims",size:"small"}),a.jsx(_,{label:"Urgent",size:"small"}),a.jsx(X,{variant:"tertiary",size:"small",children:"Process All"})]})},{id:"medium-priority",groupName:"Medium Priority Claims",groupDescription:"Standard processing timeline",defaultExpanded:!0,rows:[{id:"2001",claimId:"CLM-2001",firstName:"David",lastName:"Thompson",userDetails:"Associate",nrCodes:"NR-M001",paidAmount:"$8,400",acrLoadDates:"March 16, 2025",contact:"(555) 200-2001",amount:"$8,400",avatar:"https://i.pravatar.cc/32?img=4",city:"Houston",state:"TX",status:"Approved",priority:"Medium"},{id:"2002",claimId:"CLM-2002",firstName:"Jessica",lastName:"Martinez",userDetails:"Specialist",nrCodes:"NR-M002",paidAmount:"$12,100",acrLoadDates:"March 18, 2025",contact:"(555) 200-2002",amount:"$12,100",avatar:"https://i.pravatar.cc/32?img=5",city:"Phoenix",state:"AZ",status:"Pending",priority:"Medium"}],customContent:a.jsx(_,{label:"2 claims",size:"small"})},{id:"completed",groupName:"Completed Claims",groupDescription:"Successfully processed and closed",defaultExpanded:!1,rows:[{id:"3001",claimId:"CLM-3001",firstName:"Robert",lastName:"Wilson",userDetails:"Senior Associate",nrCodes:"NR-C001",paidAmount:"$9,750",acrLoadDates:"March 5, 2025",contact:"(555) 300-3001",amount:"$9,750",avatar:"https://i.pravatar.cc/32?img=6",city:"Philadelphia",state:"PA",status:"Approved",priority:"Low"},{id:"3002",claimId:"CLM-3002",firstName:"Amanda",lastName:"Taylor",userDetails:"Analyst",nrCodes:"NR-C002",paidAmount:"$6,800",acrLoadDates:"March 7, 2025",contact:"(555) 300-3002",amount:"$6,800",avatar:"https://i.pravatar.cc/32?img=7",city:"San Antonio",state:"TX",status:"Approved",priority:"Low"},{id:"3003",claimId:"CLM-3003",firstName:"Christopher",lastName:"Anderson",userDetails:"Lead",nrCodes:"NR-C003",paidAmount:"$14,300",acrLoadDates:"March 8, 2025",contact:"(555) 300-3003",amount:"$14,300",avatar:"https://i.pravatar.cc/32?img=8",city:"San Diego",state:"CA",status:"Approved",priority:"Low"},{id:"3004",claimId:"CLM-3004",firstName:"Jennifer",lastName:"White",userDetails:"Supervisor",nrCodes:"NR-C004",paidAmount:"$11,200",acrLoadDates:"March 9, 2025",contact:"(555) 300-3004",amount:"$11,200",avatar:"https://i.pravatar.cc/32?img=9",city:"Dallas",state:"TX",status:"Approved",priority:"Low"}],customContent:a.jsx(_,{label:"4 claims",size:"small"})}],groupConfig:{expandPosition:"left",onGroupToggle:d()},initialColumns:[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0,width:48},{id:"claimId",label:"Claim ID",visible:!0,locked:!1,order:1,width:120},{id:"firstName",label:"First Name",visible:!0,locked:!1,order:2,width:150},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:3,width:150},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:4,width:180},{id:"paidAmount",label:"Amount",visible:!0,locked:!1,order:5,width:120},{id:"status",label:"Status",visible:!0,locked:!1,order:6,width:100},{id:"priority",label:"Priority",visible:!0,locked:!1,order:7,width:100}],showToolbar:!0,toolbarTitle:"Claims Management",description:"Grouped by priority level",selectable:!0,paginated:!1,showGlobalSearch:!0,showFilter:!0,onRowSelect:d()},parameters:{docs:{description:{story:`
Advanced Table with row grouping feature. Groups can be expanded/collapsed, and support:
- **Sorting within groups** - Click column headers to sort rows within each group independently
- **Group-level selection** - Checkbox in group header selects all rows in that group
- **Custom content** - Add chips, buttons, or any components to group headers
- **All table features** - Works seamlessly with selection, filtering, sorting, etc.

**Try it:**
1. Click column headers to sort within groups
2. Click group checkboxes to select all rows in a group
3. Expand/collapse groups with the arrow button
4. Use global search to filter across all groups
        `}}}};var Gt,Jt,Yt,_t,Xt;oe.parameters={...oe.parameters,docs:{...(Gt=oe.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Claims Data',
    onRowClick: fn(),
    onSort: fn()
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
}`,...(Yt=(Jt=oe.parameters)==null?void 0:Jt.docs)==null?void 0:Yt.source},description:{story:`## With Side Panel

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
\`\`\``,...(Xt=(_t=oe.parameters)==null?void 0:_t.docs)==null?void 0:Xt.description}}};var Kt,Zt,Qt,ea,ta;se.parameters={...se.parameters,docs:{...(Kt=se.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  args: {
    useSidePanel: false,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data',
    onRowClick: fn(),
    onSort: fn()
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
}`,...(Qt=(Zt=se.parameters)==null?void 0:Zt.docs)==null?void 0:Qt.source},description:{story:`## With Modal

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
\`\`\``,...(ta=(ea=se.parameters)==null?void 0:ea.docs)==null?void 0:ta.description}}};var aa,na,oa;Ue.parameters={...Ue.parameters,docs:{...(aa=Ue.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data',
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with both side panel and modal controls available. The toolbar settings button opens the modal, while the side panel provides quick access to column/filter controls. Column resizing works in both Canvas and Docs views.'
      }
    }
  }
}`,...(oa=(na=Ue.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var sa,ra,ia,la,ca;re.parameters={...re.parameters,docs:{...(sa=re.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    useSidePanel: false,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data with Sub-Headers',
    initialColumns: getNestedColumnConfigs(),
    onRowClick: fn(),
    onSort: fn()
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
}`,...(ia=(ra=re.parameters)==null?void 0:ra.docs)==null?void 0:ia.source},description:{story:`## With Sub-Headers (Nested Columns)

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
\`\`\``,...(ca=(la=re.parameters)==null?void 0:la.docs)==null?void 0:ca.description}}};var da,ua,ma,pa,ha;ie.parameters={...ie.parameters,docs:{...(da=ie.parameters)==null?void 0:da.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Filter Count Badge Demo',
    onRowClick: fn(),
    onSort: fn()
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
  onFiltersChange={(filters) => {}}
/>\`
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(ma=(ua=ie.parameters)==null?void 0:ua.docs)==null?void 0:ma.source},description:{story:`## With Filters & Filter Count Badge

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
  onFiltersChange={(filters) => {}}
/>
\`\`\`

**Features:**
- Filter count badge shows number of active filters
- Smart search headers appear when filters are applied
- Search headers persist when side panel is closed`,...(ha=(pa=ie.parameters)==null?void 0:pa.docs)==null?void 0:ha.description}}};var ga,fa,ba,ya,Ca;le.parameters={...le.parameters,docs:{...(ga=le.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Always Visible Search Headers',
    showColumnFilters: true,
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Always Visible Search Headers**: Set showColumnFilters to true to force search headers to always be visible, regardless of filter state. Useful when column search is the primary filtering method.'
      }
    }
  }
}`,...(ba=(fa=le.parameters)==null?void 0:fa.docs)==null?void 0:ba.source},description:{story:`## New Feature: Always Show Search Headers

**What's New:**
- 🎛️ **Developer control** via showColumnFilters prop (controlled)
- 📌 Force search headers to always be visible
- 🔧 Useful when you want search functionality always available

**Use Case:**
When you want column-specific search to be the primary filtering method,
set showColumnFilters to true to keep search headers always visible.`,...(Ca=(ya=le.parameters)==null?void 0:ya.docs)==null?void 0:Ca.description}}};var wa,va,Sa,Ta,xa;ce.parameters={...ce.parameters,docs:{...(wa=ce.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Custom Tabs Demo',
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
    }],
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Custom Tabs**: Add your own tabs to the side panel with customSidePanelTabs prop. Supports both action-only tabs (with onClick) and content tabs (with content ReactNode). Try clicking the "Export" and "Info" tabs!'
      }
    }
  }
}`,...(Sa=(va=ce.parameters)==null?void 0:va.docs)==null?void 0:Sa.source},description:{story:`## New Feature: Custom Tabs in Side Panel

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
\`\`\``,...(xa=(Ta=ce.parameters)==null?void 0:Ta.docs)==null?void 0:xa.description}}};var Na,ka,Da,Aa,Pa;de.parameters={...de.parameters,docs:{...(Na=de.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Click Outside to Close Demo',
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Click Outside to Close**: The side panel now closes when clicking outside, providing standard overlay/modal behavior. However, if there are unsaved filter changes, the panel prevents closing and shows a warning with shake animation. This prevents accidental loss of filter selections.'
      }
    }
  }
}`,...(Da=(ka=de.parameters)==null?void 0:ka.docs)==null?void 0:Da.source},description:{story:`## New Feature: Click Outside to Close

**What's New:**
- 🖱️ **Click outside** the expanded panel to close it
- 🛡️ **Protected closing** - prevents closing if there are unsaved filter changes
- ⚠️ **Shake animation** + warning message when trying to close with unsaved changes

**Try it:**
1. Click "Filters" to open side panel
2. Click outside the panel - it closes (no unsaved changes)
3. Click "Filters" again, select a filter but DON'T click Apply
4. Try clicking outside - panel shakes and shows warning
5. Must click Apply/Cancel/Reset to close`,...(Pa=(Aa=de.parameters)==null?void 0:Aa.docs)==null?void 0:Pa.description}}};var Ia,Ra,za,La,Ma;ue.parameters={...ue.parameters,docs:{...(Ia=ue.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Unsaved Changes Protection Demo',
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Unsaved Changes Protection**: Filter selections are now tracked as "pending" until you click Apply. If you try to close the panel with unsaved changes, it prevents closing and shows a shake animation with a warning message: "Please apply, cancel, or reset filters before closing." This ensures users never accidentally lose their filter selections.'
      }
    }
  }
}`,...(za=(Ra=ue.parameters)==null?void 0:Ra.docs)==null?void 0:za.source},description:{story:`## New Feature: Unsaved Changes Protection

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
5. Click Apply to save, Cancel to discard, or Reset to clear all`,...(Ma=(La=ue.parameters)==null?void 0:La.docs)==null?void 0:Ma.description}}};var Fa,Wa,$a,Ea,ja;me.parameters={...me.parameters,docs:{...(Fa=me.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    loading: true,
    showToolbar: true,
    toolbarTitle: 'Loading Data'
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows a loading state with Typography component. Customize with \`loadingClassName\` and \`loadingStyle\` props.'
      }
    }
  }
}`,...($a=(Wa=me.parameters)==null?void 0:Wa.docs)==null?void 0:$a.source},description:{story:`## Loading State

Display a loading state while data is being fetched.

**Usage:**
\`\`\`tsx
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  loading={true}
  loadingClassName="custom-loading"
  loadingStyle={{ backgroundColor: '#f5f5f5' }}
/>
\`\`\``,...(ja=(Ea=me.parameters)==null?void 0:Ea.docs)==null?void 0:ja.description}}};var qa,Ha,Oa,Ua,Va;pe.parameters={...pe.parameters,docs:{...(qa=pe.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    isInvalid: true,
    errorMessage: 'Failed to load data.',
    errorDescription: 'The server returned an unexpected error. Please try again.',
    errorActionLabel: 'Retry',
    onErrorAction: fn(),
    showToolbar: true,
    toolbarTitle: 'Error Loading Data'
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows an error state. Customize the title (\`errorMessage\`), description (\`errorDescription\`), icon (\`errorIcon\`), and action button (\`errorActionLabel\` + \`onErrorAction\`). For fully custom content from an API, use \`errorStateContent\`.'
      }
    }
  }
}`,...(Oa=(Ha=pe.parameters)==null?void 0:Ha.docs)==null?void 0:Oa.source},description:{story:`## Error State

Display an error state when data fails to load.

**Usage:**
\`\`\`tsx
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  isInvalid={true}
  errorMessage="Failed to load data. Please try again."
  errorClassName="custom-error"
  errorStyle={{ color: 'red' }}
/>
\`\`\``,...(Va=(Ua=pe.parameters)==null?void 0:Ua.docs)==null?void 0:Va.description}}};var Ba,Ga,Ja,Ya,_a;he.parameters={...he.parameters,docs:{...(Ba=he.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    data: [],
    emptyTitle: 'No Claims Found',
    emptyDescription: 'Try adjusting your search criteria or filters',
    emptyActionLabel: 'Clear Filters',
    onEmptyAction: fn(),
    showToolbar: true,
    toolbarTitle: 'Empty State Demo'
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows a custom empty state with title, description, and action button. Customize with \`emptyTitle\`, \`emptyDescription\`, \`emptyActionLabel\`, \`emptyIcon\`. For fully custom content from an API, use \`emptyStateContent\`.'
      }
    }
  }
}`,...(Ja=(Ga=he.parameters)==null?void 0:Ga.docs)==null?void 0:Ja.source},description:{story:`## Empty State

Display a custom empty state when no data is available.

**Usage:**
\`\`\`tsx
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  data={[]}
  emptyTitle="No Claims Found"
  emptyDescription="Try adjusting your search criteria or filters"
  emptyActionLabel="Clear Filters"
  onEmptyAction={() => {}}
/>
\`\`\``,...(_a=(Ya=he.parameters)==null?void 0:Ya.docs)==null?void 0:_a.description}}};var Xa,Ka,Za,Qa,en;ge.parameters={...ge.parameters,docs:{...(Xa=ge.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    data: [],
    showToolbar: true,
    toolbarTitle: 'Custom Empty State Content',
    emptyStateContent: <div style={{
      textAlign: 'center',
      padding: '48px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px'
    }}>
        <div style={{
        fontSize: '48px'
      }}>🗂️</div>
        <div>
          <h3 style={{
          margin: '0 0 8px',
          fontWeight: 600
        }}>No claims to display</h3>
          <p style={{
          margin: 0,
          color: '#6b7280'
        }}>Your custom API-driven empty state goes here — illustrations, multi-action buttons, rich text, anything.</p>
        </div>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: '**Custom State Content**: Use \`emptyStateContent\` or \`errorStateContent\` to supply any ReactNode, completely replacing the built-in UI. Ideal for API-driven content, custom illustrations, or multi-action layouts. Toggle \`isInvalid\` in controls to see the error state variant.'
      }
    }
  }
}`,...(Za=(Ka=ge.parameters)==null?void 0:Ka.docs)==null?void 0:Za.source},description:{story:`## Custom State Content (API-driven)

Supply any ReactNode via \`errorStateContent\` or \`emptyStateContent\` to completely
replace the built-in state UI. Perfect when content comes from an API or you need
a fully custom layout (illustration, multi-action, rich text, etc.).

**Usage – empty state from API:**
\`\`\`tsx
<AdvancedDataTable
  data={[]}
  emptyStateContent={
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <img src={apiData.illustrationUrl} alt="" />
      <h3>{apiData.title}</h3>
      <p>{apiData.message}</p>
      <Button onClick={apiData.onAction}>{apiData.actionLabel}</Button>
    </div>
  }
/>
\`\`\`

**Usage – error state from API:**
\`\`\`tsx
<AdvancedDataTable
  isInvalid={true}
  errorStateContent={
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <p>Error {apiError.code}: {apiError.message}</p>
      <Button onClick={refetch}>Retry</Button>
      <Button onClick={reportError} variant="tertiary">Report</Button>
    </div>
  }
/>
\`\`\``,...(en=(Qa=ge.parameters)==null?void 0:Qa.docs)==null?void 0:en.description}}};var tn,an,nn,on,sn;fe.parameters={...fe.parameters,docs:{...(tn=fe.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    selectable: true,
    onRowSelect: fn(),
    showToolbar: true,
    toolbarTitle: 'Selectable Table'
  },
  parameters: {
    docs: {
      description: {
        story: 'Enable row selection with checkboxes. Use \`onRowSelect\` callback to handle selection changes.'
      }
    }
  }
}`,...(nn=(an=fe.parameters)==null?void 0:an.docs)==null?void 0:nn.source},description:{story:`## With Selection

Enable row selection with callback.

**Usage:**
\`\`\`tsx
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  selectable={true}
  onRowSelect={(selectedIds) => {}}
/>
\`\`\``,...(sn=(on=fe.parameters)==null?void 0:on.docs)==null?void 0:sn.description}}};var rn,ln,cn,dn,un;be.parameters={...be.parameters,docs:{...(rn=be.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs().map(col => {
      // Add icons to nested columns
      if (col.subColumns) {
        return {
          ...col,
          subColumns: col.subColumns.map(subCol => {
            if (subCol.id === 'firstName') {
              return {
                ...subCol,
                headerIcon: <FilterList fontSize="small" />,
                onHeaderIconClick: fn(),
                headerIconTitle: 'Toggle column filters'
              };
            }
            if (subCol.id === 'lastName') {
              return {
                ...subCol,
                headerIcon: <Info fontSize="small" />,
                onHeaderIconClick: fn(),
                headerIconTitle: 'Column information'
              };
            }
            return subCol;
          })
        };
      }
      return col;
    }),
    showToolbar: true,
    toolbarTitle: 'Custom Header Icons',
    showColumnFilters: true,
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Custom Header Icons**: Add custom icons to column headers with click handlers. Each column can have its own icon and action. Icons appear before the three-dot menu button and include hover effects and tooltips.'
      }
    }
  }
}`,...(cn=(ln=be.parameters)==null?void 0:ln.docs)==null?void 0:cn.source},description:{story:`## New Feature: Custom Header Icons

**What's New:**
- 🎯 **Add custom icons** to column headers
- 🔔 **Click handlers** for custom actions
- 💡 **Tooltip support** for accessibility

**Use Case:**
Add custom icons like filter toggles, info buttons, or settings icons to column headers.

**Usage:**
\`\`\`tsx
import FilterListIcon from '@mui/icons-material/FilterList';

const columns = [
  {
    id: 'firstName',
    label: 'First Name',
    headerIcon: <FilterListIcon fontSize="small" />,
    onHeaderIconClick: (columnId, event) => {
      console.log(\`Icon clicked for column: \${columnId}\`);
    },
    headerIconTitle: 'Toggle column filters'
  }
];
\`\`\``,...(un=(dn=be.parameters)==null?void 0:dn.docs)==null?void 0:un.description}}};var mn,pn,hn,gn,fn;ye.parameters={...ye.parameters,docs:{...(mn=ye.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    searchMode: 'server',
    showToolbar: true,
    toolbarTitle: 'Server-Side Search Demo',
    showColumnFilters: true,
    onRowClick: fn(),
    onSort: fn(),
    onColumnSearch: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Server-Side Search**: When \`searchMode="server"\`, inputs are immediately responsive and \`onColumnSearch\` fires after the debounce delay (default 300 ms) with the full accumulated search map. The parent component must handle the actual filtering and update the \`data\` prop. For immediate filtering in Storybook, use the Client-Side Search demo.'
      }
    }
  }
}`,...(hn=(pn=ye.parameters)==null?void 0:pn.docs)==null?void 0:hn.source},description:{story:`## Server-Side Column Search

**How it works:**
- Inputs are immediately responsive — typing never blocks waiting for an API round-trip.
- \`onColumnSearch\` fires **after the debounce delay** (default 300 ms) with the **full accumulated** search map.
  e.g. typing "AED" fires a single callback with \`{ applicationCode: 'AED' }\`, not three separate calls.
- Pass \`columnSearches\` back only when you need to **externally reset** inputs (e.g. "Clear all" button).
- Set \`columnSearchDebounceMs={0}\` to disable debouncing.

**Usage:**
\`\`\`tsx
const [columnSearches, setColumnSearches] = useState({});

<AdvancedDataTable
  searchMode="server"
  columnSearches={columnSearches}        // only needed for external resets
  columnSearchDebounceMs={300}           // default — omit to use default
  onColumnSearch={(searches) => {
    setColumnSearches(searches);
    // searches = { applicationCode: 'AED' } — always the full value
    fetchFilteredData(searches);
  }}
/>
\`\`\``,...(fn=(gn=ye.parameters)==null?void 0:gn.docs)==null?void 0:fn.description}}};var bn,yn,Cn,wn,vn;Ce.parameters={...Ce.parameters,docs:{...(bn=Ce.parameters)==null?void 0:bn.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    searchMode: 'client',
    showToolbar: true,
    toolbarTitle: 'Client-Side Search Demo',
    showColumnFilters: true,
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Client-Side Search**: When \`searchMode="client"\`, the table handles filtering internally and updates the view immediately as you type. This is perfect for smaller datasets and provides instant visual feedback.'
      }
    }
  }
}`,...(Cn=(yn=Ce.parameters)==null?void 0:yn.docs)==null?void 0:Cn.source},description:{story:`## Client-Side Search (Immediate Filtering)

Table with client-side search that filters data immediately as you type.

**Usage:**
\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

<AdvancedDataTable
  searchMode="client"
  showColumnFilters={true}
  initialColumns={columns}
  data={data}
/>
\`\`\``,...(vn=(wn=Ce.parameters)==null?void 0:wn.docs)==null?void 0:vn.description}}};var Sn,Tn,xn,Nn,kn;we.parameters={...we.parameters,docs:{...(Sn=we.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    showToolbar: true,
    toolbarTitle: 'Controlled Column Filters',
    showColumnFilters: false,
    onColumnFiltersChange: fn(),
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Controlled Column Filters**: Control column filter visibility using parent state. Click the filter icon in any column header to toggle the search row for all columns. This follows the industry-standard pattern where filter icons in headers control global filter visibility.'
      }
    }
  }
}`,...(xn=(Tn=we.parameters)==null?void 0:Tn.docs)==null?void 0:xn.source},description:{story:`## New Feature: Controlled Column Filters with Toggle

**What's New:**
- 🎛️ **Controlled filter visibility** via parent state
- 🔘 **Toggle from anywhere** including custom header icons
- 🎯 **Industry-standard pattern** for filter management

**Use Case:**
Control column filter visibility from parent state, allowing toggles from custom icons or external controls.

**Usage:**
\`\`\`tsx
const [showFilters, setShowFilters] = useState(false);

const columns = [
  {
    id: 'firstName',
    label: 'First Name',
    headerIcon: <FilterListIcon />,
    onHeaderIconClick: (columnId) => {
      setShowFilters(!showFilters);
    }
  }
];

<AdvancedDataTable
  initialColumns={columns}
  showColumnFilters={showFilters}
  onColumnFiltersChange={setShowFilters}
/>
\`\`\``,...(kn=(Nn=we.parameters)==null?void 0:Nn.docs)==null?void 0:kn.description}}};var Dn,An,Pn,In,Rn;ve.parameters={...ve.parameters,docs:{...(Dn=ve.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    paginationMode: 'client',
    showToolbar: true,
    toolbarTitle: 'Server-Side Pagination Demo',
    showPageSizeSelector: true,
    pageSizeOptions: [10, 25, 50, 100],
    onRowClick: fn(),
    onPageChange: fn(),
    onPageSizeChange: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Server-Side Pagination**: Industry-standard pagination with separate callbacks for page changes (\`onPageChange\`) and page size changes (\`onPageSizeChange\`). Also supports hiding the page size selector (\`showPageSizeSelector\`) and customizing available page sizes (\`pageSizeOptions\`).'
      }
    }
  }
}`,...(Pn=(An=ve.parameters)==null?void 0:An.docs)==null?void 0:Pn.source},description:{story:`## New Feature: Server-Side Pagination with Separate Callbacks

**What's New:**
- 🌐 **Industry-standard pagination** with separate callbacks
- 📡 **onPageChange** - called when page changes
- 📊 **onPageSizeChange** - called when page size changes
- 🔘 **showPageSizeSelector** - control dropdown visibility
- 🎯 **pageSizeOptions** - customize available page sizes

**Industry Standard:**
Follows Material UI, AG Grid, and Ant Design patterns with separate callbacks for page and page size changes.

**Usage:**
\`\`\`tsx
const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(10);

<AdvancedDataTable
  paginationMode="server"
  currentPage={currentPage}
  itemsPerPage={pageSize}
  totalItems={1000}
  onPageChange={(page) => {
    setCurrentPage(page);
    fetchPaginatedData(page, pageSize);
  }}
  onPageSizeChange={(newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    fetchPaginatedData(1, newPageSize);
  }}
  showPageSizeSelector={true}
  pageSizeOptions={[10, 25, 50, 100]}
/>
\`\`\``,...(Rn=(In=ve.parameters)==null?void 0:In.docs)==null?void 0:Rn.description}}};var zn,Ln,Mn,Fn,Wn;Se.parameters={...Se.parameters,docs:{...(zn=Se.parameters)==null?void 0:zn.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    paginated: true,
    itemsPerPage: 5,
    showPageSizeSelector: true,
    pageSizeOptions: [5, 10, 25, 50, 100],
    showToolbar: true,
    toolbarTitle: 'Custom Pagination (5 per page)'
  },
  parameters: {
    docs: {
      description: {
        story: 'Customize pagination with \`itemsPerPage\` prop, \`showPageSizeSelector\` to control dropdown visibility, and \`pageSizeOptions\` to customize available page sizes. This example shows 5 items per page with custom page size options.'
      }
    }
  }
}`,...(Mn=(Ln=Se.parameters)==null?void 0:Ln.docs)==null?void 0:Mn.source},description:{story:`## Custom Pagination

Control pagination settings with industry-standard callbacks.

**Usage:**
\`\`\`tsx
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  paginated={true}
  itemsPerPage={25}
  showPageSizeSelector={true}
  pageSizeOptions={[5, 10, 25, 50, 100]}
/>
\`\`\``,...(Wn=(Fn=Se.parameters)==null?void 0:Fn.docs)==null?void 0:Wn.description}}};var $n,En,jn,qn,Hn;Te.parameters={...Te.parameters,docs:{...($n=Te.parameters)==null?void 0:$n.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    showToolbar: true,
    toolbarTitle: 'Column-Specific Search',
    showColumnFiltersFor: ['firstName', 'lastName'],
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Column-Specific Search**: Control which columns show inline search inputs. This example shows search inputs only for \`firstName\` and \`lastName\` columns using \`showColumnFiltersFor\`. You can also use \`showColumnSearch\` on individual column configs or the global \`showColumnFilters\` toggle.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(jn=(En=Te.parameters)==null?void 0:En.docs)==null?void 0:jn.source},description:{story:`## Column-Specific Search

Control which columns show inline search inputs with three modes:

**1. Global toggle (all columns):**
\`\`\`tsx
<AdvancedDataTable showColumnFilters={true} />
\`\`\`

**2. Specific columns only:**
\`\`\`tsx
<AdvancedDataTable showColumnFiltersFor={['firstName', 'lastName']} />
\`\`\`

**3. Per-column configuration:**
\`\`\`tsx
const columns = [
  { id: 'firstName', label: 'First Name', showColumnSearch: true },
  { id: 'lastName', label: 'Last Name', showColumnSearch: false },
];
<AdvancedDataTable showColumnFilters={true} initialColumns={columns} />
\`\`\`

**Priority Logic:**
- If \`showColumnFiltersFor\` is provided → Only those columns
- Else if \`showColumnFilters\` is true → All columns with \`showColumnSearch: true\` (or all if not set)
- Else → No search inputs`,...(Hn=(qn=Te.parameters)==null?void 0:qn.docs)==null?void 0:Hn.description}}};var On,Un,Vn,Bn,Gn;xe.parameters={...xe.parameters,docs:{...(On=xe.parameters)==null?void 0:On.docs,source:{originalSource:`{
  args: {
    as: 'section',
    initialColumns: getNestedColumnConfigs(),
    className: 'enterprise-table-section',
    showToolbar: true,
    toolbarTitle: 'Rendered as <section>'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the \`as\` prop to render as any HTML element. This example renders as a \`<section>\` element. Supports forwardRef for accessing the DOM element.'
      }
    }
  }
}`,...(Vn=(Un=xe.parameters)==null?void 0:Un.docs)==null?void 0:Vn.source},description:{story:`## Polymorphic Rendering

Render as any HTML element using the \`as\` prop.

**Usage:**
\`\`\`tsx
const tableRef = useRef<HTMLDivElement>(null);

<AdvancedDataTable
  as="section"
  ref={tableRef}
  className="my-table-section"
  initialColumns={getNestedColumnConfigs()}
/>
\`\`\``,...(Gn=(Bn=xe.parameters)==null?void 0:Bn.docs)==null?void 0:Gn.description}}};var Jn,Yn,_n,Xn,Kn;Ne.parameters={...Ne.parameters,docs:{...(Jn=Ne.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    toolbar: <div style={{
      padding: '16px',
      background: '#f5f5f5',
      borderBottom: '1px solid #ddd'
    }}>
        <h3 style={{
        margin: 0,
        fontSize: '18px',
        fontWeight: 600
      }}>Custom Toolbar Content</h3>
        <p style={{
        margin: '8px 0 0',
        fontSize: '14px',
        color: '#666'
      }}>
          You can pass any React component as the toolbar prop
        </p>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Replace the default toolbar with custom content using the \`toolbar\` prop. Pass any React component.'
      }
    }
  }
}`,...(_n=(Yn=Ne.parameters)==null?void 0:Yn.docs)==null?void 0:_n.source},description:{story:`## Custom Toolbar

Replace the default toolbar with custom content.

**Usage:**
\`\`\`tsx
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  toolbar={
    <div style={{ padding: '16px', background: '#f5f5f5' }}>
      <Typography variant="headingM">Custom Toolbar</Typography>
      <Button>Export</Button>
      <Button>Import</Button>
    </div>
  }
/>
\`\`\``,...(Kn=(Xn=Ne.parameters)==null?void 0:Xn.docs)==null?void 0:Kn.description}}};var Zn,Qn,eo,to,ao;ke.parameters={...ke.parameters,docs:{...(Zn=ke.parameters)==null?void 0:Zn.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    showToolbar: true,
    toolbarTitle: 'Claims Management',
    description: 'View and manage all claims in the system',
    showGlobalSearch: true,
    showFilter: true,
    showDownload: true,
    onDownload: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Customize the default toolbar with title, description, and toggle various features like global search, filter, and download buttons.'
      }
    }
  }
}`,...(eo=(Qn=ke.parameters)==null?void 0:Qn.docs)==null?void 0:eo.source},description:{story:`## Toolbar Customization

Customize the default toolbar with various options.

**Usage:**
\`\`\`tsx
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  showToolbar={true}
  toolbarTitle="Claims Management"
  description="View and manage all claims"
  showGlobalSearch={true}
  showFilter={true}
  showDownload={true}
  onDownload={() => {}}
/>
\`\`\``,...(ao=(to=ke.parameters)==null?void 0:to.docs)==null?void 0:ao.description}}};var no,oo,so,ro,io;De.parameters={...De.parameters,docs:{...(no=De.parameters)==null?void 0:no.docs,source:{originalSource:`{
  args: {
    as: 'section',
    className: 'enterprise-table',
    initialColumns: [{
      id: 'checkbox',
      label: '',
      visible: true,
      locked: true,
      order: 0
    }, {
      id: 'claimId',
      label: 'Claim ID',
      visible: true,
      locked: false,
      pinned: 'left',
      order: 1,
      width: 120
    }, {
      id: 'userDetails',
      label: 'User',
      visible: true,
      locked: false,
      pinned: 'left',
      order: 2,
      width: 200
    }, {
      id: 'status',
      label: 'Status',
      visible: true,
      locked: false,
      order: 3,
      width: 150,
      // Custom render with Chip component
      renderCell: (value: any, _row: any) => {
        const statusMap: Record<string, {
          type: 'success' | 'warning' | 'error' | 'default';
          label: string;
        }> = {
          'approved': {
            type: 'success',
            label: 'Approved'
          },
          'pending': {
            type: 'warning',
            label: 'Pending'
          },
          'rejected': {
            type: 'error',
            label: 'Rejected'
          },
          'review': {
            type: 'default',
            label: 'In Review'
          }
        };
        const status = statusMap[String(value || '').toLowerCase()] || {
          type: 'default',
          label: value
        };
        return <Chip label={status.label} type={status.type} variant="filled" size="small" />;
      }
    }, {
      id: 'priority',
      label: 'Priority',
      visible: true,
      locked: false,
      order: 4,
      width: 120,
      // Custom render with Chip component
      renderCell: (value: any, _row: any) => {
        const priorityMap: Record<string, {
          type: 'success' | 'warning' | 'error';
          label: string;
        }> = {
          'high': {
            type: 'error',
            label: 'High'
          },
          'medium': {
            type: 'warning',
            label: 'Medium'
          },
          'low': {
            type: 'success',
            label: 'Low'
          }
        };
        const priority = priorityMap[String(value || '').toLowerCase()] || {
          type: 'warning',
          label: value
        };
        return <Chip label={priority.label} type={priority.type} variant="outlined" size="small" />;
      }
    }, {
      id: 'amount',
      label: 'Amount',
      visible: true,
      locked: false,
      order: 5,
      width: 120
    }, {
      id: 'contact',
      label: 'Contact',
      visible: true,
      locked: false,
      order: 6,
      width: 150
    }, {
      id: 'nrCodes',
      label: 'NR Codes',
      visible: true,
      locked: false,
      order: 7,
      width: 120
    }, {
      id: 'paidAmount',
      label: 'Paid Amount',
      visible: true,
      locked: false,
      order: 8,
      width: 130
    }, {
      id: 'acrLoadDates',
      label: 'ACR Load Date',
      visible: true,
      locked: false,
      order: 9,
      width: 140
    }, {
      id: 'firstName',
      label: 'First Name',
      visible: true,
      locked: false,
      order: 10,
      width: 120
    }, {
      id: 'lastName',
      label: 'Last Name',
      visible: true,
      locked: false,
      order: 11,
      width: 120
    }, {
      id: 'actions',
      label: 'Actions',
      visible: true,
      locked: false,
      pinned: 'right',
      // Pin to right side
      order: 12,
      width: 180,
      // Custom renderCell with icon action buttons
      // Signature: (value, row, rowIndex) - value is ignored for actions column
      renderCell: (_value: any, row: any) => <div style={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center'
      }}>
            <Button variant="tertiary" size="small" onClick={() => console.log('View', row.claimId)} aria-label="View">
              <Visibility style={{
            fontSize: '16px'
          }} />
            </Button>
            <Button variant="tertiary" size="small" onClick={() => console.log('Edit', row.claimId)} aria-label="Edit">
              <Edit style={{
            fontSize: '16px'
          }} />
            </Button>
            <Button variant="tertiary" size="small" onClick={() => console.log('Delete', row.claimId)} aria-label="Delete">
              <Delete style={{
            fontSize: '16px'
          }} />
            </Button>
          </div>
    }],
    data: [{
      id: '1',
      claimId: 'CLM-1001',
      firstName: 'John',
      lastName: 'Doe',
      userDetails: 'John Doe',
      status: 'approved',
      priority: 'high',
      amount: '$15,200',
      paidAmount: '$15,200',
      contact: '(555) 100-1001',
      nrCodes: 'NR-001',
      acrLoadDates: '2024-01-15',
      avatar: 'https://i.pravatar.cc/32?img=1'
    }, {
      id: '2',
      claimId: 'CLM-1002',
      firstName: 'Jane',
      lastName: 'Smith',
      userDetails: 'Jane Smith',
      status: 'pending',
      priority: 'medium',
      amount: '$8,500',
      paidAmount: '$8,500',
      contact: '(555) 100-1002',
      nrCodes: 'NR-002',
      acrLoadDates: '2024-01-16',
      avatar: 'https://i.pravatar.cc/32?img=2'
    }, {
      id: '3',
      claimId: 'CLM-1003',
      firstName: 'Bob',
      lastName: 'Wilson',
      userDetails: 'Bob Wilson',
      status: 'review',
      priority: 'low',
      amount: '$12,300',
      paidAmount: '$12,300',
      contact: '(555) 100-1003',
      nrCodes: 'NR-003',
      acrLoadDates: '2024-01-17',
      avatar: 'https://i.pravatar.cc/32?img=3'
    }, {
      id: '4',
      claimId: 'CLM-1004',
      firstName: 'Alice',
      lastName: 'Brown',
      userDetails: 'Alice Brown',
      status: 'rejected',
      priority: 'high',
      amount: '$22,100',
      paidAmount: '$22,100',
      contact: '(555) 100-1004',
      nrCodes: 'NR-004',
      acrLoadDates: '2024-01-18',
      avatar: 'https://i.pravatar.cc/32?img=4'
    }, {
      id: '5',
      claimId: 'CLM-1005',
      firstName: 'Charlie',
      lastName: 'Davis',
      userDetails: 'Charlie Davis',
      status: 'approved',
      priority: 'medium',
      amount: '$9,800',
      paidAmount: '$9,800',
      contact: '(555) 100-1005',
      nrCodes: 'NR-005',
      acrLoadDates: '2024-01-19',
      avatar: 'https://i.pravatar.cc/32?img=5'
    }] as any,
    // Layout
    showToolbar: true,
    toolbarTitle: 'Enterprise Table with Custom Renders & Right Pinning',
    description: 'Scroll horizontally to see the Actions column pinned to the right. Status and Priority use custom Chip renders.',
    showGlobalSearch: true,
    showFilter: true,
    showDownload: true,
    onDownload: fn(),
    maxHeight: '500px',
    // Selection
    selectable: true,
    onRowSelect: fn(),
    // Pagination
    paginated: true,
    itemsPerPage: 10,
    // Events
    onRowClick: fn(),
    onOpen: fn(),
    onClose: fn(),
    // Customization
    containerClassName: 'custom-container',
    scrollContainerClassName: 'custom-scroll'
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete example showing all customization options including **right-side column pinning** (Actions column) and **custom cell rendering** (Status and Priority columns with Chips). Try scrolling horizontally to see the Actions column stay fixed on the right.'
      }
    }
  }
}`,...(so=(oo=De.parameters)==null?void 0:oo.docs)==null?void 0:so.source},description:{story:`## Full Customization

Demonstrates all customization options together including column pinning.

**Column Pinning:**
- Claim ID and User columns are pinned to the LEFT
- Actions column is pinned to the RIGHT
- Users can change pinning via column menu (enableUserPinning: true)
- Developers can set initial pins in config (enableDevPinning: true)

**Usage:**
\`\`\`tsx
<AdvancedDataTable
  as="section"
  className="enterprise-table"
  initialColumns={[
    { id: 'claimId', label: 'Claim ID', pinned: 'left' },
    { id: 'userDetails', label: 'User', pinned: 'left' },
    { id: 'status', label: 'Status' },
    { id: 'actions', label: 'Actions', pinned: 'right' }
  ]}
  
  // Column Pinning Control
  enableUserPinning={true}  // Users can pin via menu
  enableDevPinning={true}   // Respect dev's initial pins
  
  // Layout
  showToolbar={true}
  toolbarTitle="Enterprise Table"
  description="Full customization example"
  maxHeight="500px"
  
  // Selection
  selectable={true}
  onRowSelect={(ids) => {}}
  
  // Pagination
  paginated={true}
  itemsPerPage={10}
  
  // Customization
  containerClassName="custom-container"
  scrollContainerClassName="custom-scroll"
  emptyStateClassName="custom-empty"
/>
\`\`\``,...(io=(ro=De.parameters)==null?void 0:ro.docs)==null?void 0:io.description}}};var lo,co,uo,mo,po;Ae.parameters={...Ae.parameters,docs:{...(lo=Ae.parameters)==null?void 0:lo.docs,source:{originalSource:`{
  args: {
    groups: [{
      id: 'high-priority',
      groupName: 'High Priority Claims',
      groupDescription: 'Urgent claims requiring immediate attention',
      defaultExpanded: true,
      rows: [{
        id: '1001',
        claimId: 'CLM-1001',
        firstName: 'Sarah',
        lastName: 'Johnson',
        userDetails: 'Senior Analyst',
        nrCodes: 'NR-H001',
        paidAmount: '$15,200',
        acrLoadDates: 'March 10, 2025',
        contact: '(555) 100-1001',
        amount: '$15,200',
        avatar: 'https://i.pravatar.cc/32?img=1',
        city: 'New York',
        state: 'NY',
        status: 'Pending',
        priority: 'High'
      }, {
        id: '1002',
        claimId: 'CLM-1002',
        firstName: 'Michael',
        lastName: 'Chen',
        userDetails: 'Lead Processor',
        nrCodes: 'NR-H002',
        paidAmount: '$22,500',
        acrLoadDates: 'March 12, 2025',
        contact: '(555) 100-1002',
        amount: '$22,500',
        avatar: 'https://i.pravatar.cc/32?img=2',
        city: 'Los Angeles',
        state: 'CA',
        status: 'Approved',
        priority: 'High'
      }, {
        id: '1003',
        claimId: 'CLM-1003',
        firstName: 'Emily',
        lastName: 'Rodriguez',
        userDetails: 'Manager',
        nrCodes: 'NR-H003',
        paidAmount: '$18,900',
        acrLoadDates: 'March 14, 2025',
        contact: '(555) 100-1003',
        amount: '$18,900',
        avatar: 'https://i.pravatar.cc/32?img=3',
        city: 'Chicago',
        state: 'IL',
        status: 'Pending',
        priority: 'High'
      }],
      customContent: <div style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
            <Chip label="3 claims" size="small" />
            <Chip label="Urgent" size="small" />
            <Button variant="tertiary" size="small">Process All</Button>
          </div>
    }, {
      id: 'medium-priority',
      groupName: 'Medium Priority Claims',
      groupDescription: 'Standard processing timeline',
      defaultExpanded: true,
      rows: [{
        id: '2001',
        claimId: 'CLM-2001',
        firstName: 'David',
        lastName: 'Thompson',
        userDetails: 'Associate',
        nrCodes: 'NR-M001',
        paidAmount: '$8,400',
        acrLoadDates: 'March 16, 2025',
        contact: '(555) 200-2001',
        amount: '$8,400',
        avatar: 'https://i.pravatar.cc/32?img=4',
        city: 'Houston',
        state: 'TX',
        status: 'Approved',
        priority: 'Medium'
      }, {
        id: '2002',
        claimId: 'CLM-2002',
        firstName: 'Jessica',
        lastName: 'Martinez',
        userDetails: 'Specialist',
        nrCodes: 'NR-M002',
        paidAmount: '$12,100',
        acrLoadDates: 'March 18, 2025',
        contact: '(555) 200-2002',
        amount: '$12,100',
        avatar: 'https://i.pravatar.cc/32?img=5',
        city: 'Phoenix',
        state: 'AZ',
        status: 'Pending',
        priority: 'Medium'
      }],
      customContent: <Chip label="2 claims" size="small" />
    }, {
      id: 'completed',
      groupName: 'Completed Claims',
      groupDescription: 'Successfully processed and closed',
      defaultExpanded: false,
      rows: [{
        id: '3001',
        claimId: 'CLM-3001',
        firstName: 'Robert',
        lastName: 'Wilson',
        userDetails: 'Senior Associate',
        nrCodes: 'NR-C001',
        paidAmount: '$9,750',
        acrLoadDates: 'March 5, 2025',
        contact: '(555) 300-3001',
        amount: '$9,750',
        avatar: 'https://i.pravatar.cc/32?img=6',
        city: 'Philadelphia',
        state: 'PA',
        status: 'Approved',
        priority: 'Low'
      }, {
        id: '3002',
        claimId: 'CLM-3002',
        firstName: 'Amanda',
        lastName: 'Taylor',
        userDetails: 'Analyst',
        nrCodes: 'NR-C002',
        paidAmount: '$6,800',
        acrLoadDates: 'March 7, 2025',
        contact: '(555) 300-3002',
        amount: '$6,800',
        avatar: 'https://i.pravatar.cc/32?img=7',
        city: 'San Antonio',
        state: 'TX',
        status: 'Approved',
        priority: 'Low'
      }, {
        id: '3003',
        claimId: 'CLM-3003',
        firstName: 'Christopher',
        lastName: 'Anderson',
        userDetails: 'Lead',
        nrCodes: 'NR-C003',
        paidAmount: '$14,300',
        acrLoadDates: 'March 8, 2025',
        contact: '(555) 300-3003',
        amount: '$14,300',
        avatar: 'https://i.pravatar.cc/32?img=8',
        city: 'San Diego',
        state: 'CA',
        status: 'Approved',
        priority: 'Low'
      }, {
        id: '3004',
        claimId: 'CLM-3004',
        firstName: 'Jennifer',
        lastName: 'White',
        userDetails: 'Supervisor',
        nrCodes: 'NR-C004',
        paidAmount: '$11,200',
        acrLoadDates: 'March 9, 2025',
        contact: '(555) 300-3004',
        amount: '$11,200',
        avatar: 'https://i.pravatar.cc/32?img=9',
        city: 'Dallas',
        state: 'TX',
        status: 'Approved',
        priority: 'Low'
      }],
      customContent: <Chip label="4 claims" size="small" />
    }],
    groupConfig: {
      expandPosition: 'left',
      onGroupToggle: fn()
    },
    initialColumns: [{
      id: 'checkbox',
      label: 'Select',
      visible: true,
      locked: true,
      order: 0,
      width: 48
    }, {
      id: 'claimId',
      label: 'Claim ID',
      visible: true,
      locked: false,
      order: 1,
      width: 120
    }, {
      id: 'firstName',
      label: 'First Name',
      visible: true,
      locked: false,
      order: 2,
      width: 150
    }, {
      id: 'lastName',
      label: 'Last Name',
      visible: true,
      locked: false,
      order: 3,
      width: 150
    }, {
      id: 'userDetails',
      label: 'Role',
      visible: true,
      locked: false,
      order: 4,
      width: 180
    }, {
      id: 'paidAmount',
      label: 'Amount',
      visible: true,
      locked: false,
      order: 5,
      width: 120
    }, {
      id: 'status',
      label: 'Status',
      visible: true,
      locked: false,
      order: 6,
      width: 100
    }, {
      id: 'priority',
      label: 'Priority',
      visible: true,
      locked: false,
      order: 7,
      width: 100
    }],
    showToolbar: true,
    toolbarTitle: 'Claims Management',
    description: 'Grouped by priority level',
    selectable: true,
    paginated: false,
    showGlobalSearch: true,
    showFilter: true,
    onRowSelect: fn()
  },
  parameters: {
    docs: {
      description: {
        story: \`
Advanced Table with row grouping feature. Groups can be expanded/collapsed, and support:
- **Sorting within groups** - Click column headers to sort rows within each group independently
- **Group-level selection** - Checkbox in group header selects all rows in that group
- **Custom content** - Add chips, buttons, or any components to group headers
- **All table features** - Works seamlessly with selection, filtering, sorting, etc.

**Try it:**
1. Click column headers to sort within groups
2. Click group checkboxes to select all rows in a group
3. Expand/collapse groups with the arrow button
4. Use global search to filter across all groups
        \`
      }
    }
  }
}`,...(uo=(co=Ae.parameters)==null?void 0:co.docs)==null?void 0:uo.source},description:{story:`## Table with Row Grouping

Group table rows into collapsible sections with custom headers.

**Features:**
- ✅ Expand/collapse groups
- ✅ Sorting within each group
- ✅ Group-level selection (checkbox in header)
- ✅ Custom content (chips, buttons, etc.)
- ✅ Works with all table features

**Usage:**
\`\`\`tsx
const groups = [
  {
    id: 'active',
    groupName: 'Active Claims',
    groupDescription: 'Currently processing',
    defaultExpanded: true,
    rows: [...],
    customContent: <Chip label="5 items" />
  }
];

<AdvancedDataTable
  groups={groups}
  initialColumns={columns}
  selectable
  groupConfig={{
    expandPosition: 'left',
    onGroupToggle: (id, expanded) => {}
  }}
/>
\`\`\``,...(po=(mo=Ae.parameters)==null?void 0:mo.docs)==null?void 0:po.description}}};const Fr=["WithSidePanel","WithModal","WithBothControls","WithSubHeaders","WithFilterCountBadge","WithAlwaysVisibleSearchHeaders","WithCustomTabs","WithClickOutsideToClose","WithUnsavedChangesProtection","LoadingState","ErrorState","EmptyState","CustomStateContent","WithSelection","WithCustomHeaderIcons","WithServerSideSearch","WithClientSideSearch","WithControlledColumnFilters","WithServerSidePagination","CustomPagination","ColumnSpecificSearch","PolymorphicRendering","CustomToolbar","ToolbarCustomization","FullCustomization","WithGrouping"];export{Te as ColumnSpecificSearch,Se as CustomPagination,ge as CustomStateContent,Ne as CustomToolbar,he as EmptyState,pe as ErrorState,De as FullCustomization,me as LoadingState,xe as PolymorphicRendering,ke as ToolbarCustomization,le as WithAlwaysVisibleSearchHeaders,Ue as WithBothControls,de as WithClickOutsideToClose,Ce as WithClientSideSearch,we as WithControlledColumnFilters,be as WithCustomHeaderIcons,ce as WithCustomTabs,ie as WithFilterCountBadge,Ae as WithGrouping,se as WithModal,fe as WithSelection,ve as WithServerSidePagination,ye as WithServerSideSearch,oe as WithSidePanel,re as WithSubHeaders,ue as WithUnsavedChangesProtection,Fr as __namedExportsOrder,Mr as default};
