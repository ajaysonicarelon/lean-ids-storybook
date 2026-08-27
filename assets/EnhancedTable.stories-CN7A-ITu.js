import{j as n}from"./jsx-runtime-DztICxWZ.js";import{fn as h}from"./index-DH-M5T-F.js";import{r as b,R as us}from"./index-Bv9Y92EF.js";import{g as v}from"./styled-components.browser.esm-CVW2bgxI.js";import{T as ms,b as G,a as Ve}from"./TableToolbar-wKRS3c34.js";import{a as ps,T as hs}from"./TableGroupHeader-uFCHdoU-.js";import{E as bs}from"./ExpandMore-Bd7rmlfk.js";import{C as fs,V as gs,E as ys,D as Cs}from"./Icon-DSqvK6Kv.js";import{T as Ie}from"./Typography-CidD3oMh.js";import{B as Y}from"./Button-DlNRQx8j.js";import{T as ws}from"./TableSidePanel-CWHhw4bm.js";import{P as vs}from"./Pagination-CpbEHcGU.js";import{C as J}from"./Chip--FEJIdFJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createSvgIcon-Ce6eLUkr.js";import"./Checkbox-D2w4VPJI.js";import"./Badge-FGqUbZvd.js";import"./WarningAmberOutlined-Chc0M3hO.js";import"./Close-CtL5j8iM.js";import"./InlineMessage-D0nF0rE-.js";import"./Search-Bpcrs37S.js";import"./Settings-aYyvLXSG.js";import"./Home-Bococija.js";import"./Select-xWzEopA2.js";import"./FieldImportance-D7BkpLTs.js";import"./InputField-BAIr4sa2.js";import"./HelpingText-DBD3feHR.js";import"./RadioButton-DHcwHeDp.js";const Ss=v.th`
  padding: ${({theme:s})=>s.spacing[3]} ${({theme:s})=>s.spacing[7]};
  background-color: ${({theme:s})=>s.colors.palette.primary[50]};
  border-bottom: 1px solid ${({theme:s})=>s.colors.palette.neutral[300]};
  text-align: left;
  font-size: ${({theme:s})=>s.fontSizes[14]};
  font-weight: ${({theme:s})=>s.fontWeights.regular};
  transition: box-shadow 0.2s ease;
  
  ${({$locked:s,$pinned:T,$leftOffset:A,$rightOffset:N,$showPinBorder:f,theme:C})=>{const z=T||(s?"left":"none");return z==="left"?`
        position: sticky;
        left: ${A||0}px;
        z-index: 3;
        ${f?`border-right: 1px solid ${C.colors.palette.neutral[300]};`:""}
        
        &.is-stuck {
          box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
        }
      `:z==="right"?`
        position: sticky;
        right: ${N||0}px;
        z-index: 3;
        ${f?`border-left: 1px solid ${C.colors.palette.neutral[300]};`:""}
        
        &.is-stuck-right {
          box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
        }
      `:"position: relative; z-index: 1;"}}
`,xs=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:s})=>s.spacing[8]};
  width: 100%;
`,Ts=v.input`
  width: 100%;
  height: 32px;
  padding: ${({theme:s})=>s.spacing[2]} ${({theme:s})=>s.spacing[3]};
  border: 1px solid ${({theme:s})=>s.colors.palette.neutral[300]};
  border-radius: ${({theme:s})=>s.borderRadius.sm};
  font-size: ${({theme:s})=>s.fontSizes[14]};
  font-family: ${({theme:s})=>s.fonts.primary};
  background-color: ${({theme:s})=>s.colors.palette.neutral[50]};
  color: ${({theme:s})=>s.colors.palette.neutral[900]};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({theme:s})=>s.colors.palette.primary[500]};
  }

  &::placeholder {
    color: ${({theme:s})=>s.colors.palette.neutral[500]};
  }
`,Ge=v.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:s})=>s.spacing[4]};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:s})=>s.colors.palette.neutral[600]};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:s})=>s.colors.palette.primary[600]};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Ns=()=>n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Ds=()=>n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),pn=({searchValue:s="",searchPlaceholder:T="Search",onSearchChange:A,locked:N=!1,pinned:f="none",leftOffset:C=0,rightOffset:z=0,showPinBorder:ye=!1,width:ze,className:$e,showClearFilter:Ye=!0,onClearFilter:We,showAdvancedFilter:je=!1,onAdvancedFilter:Ce,customActions:Ee=[]})=>{const Fe=x=>{A&&A(x.target.value)},we=x=>{x.stopPropagation(),We?We():A&&A("")},qe=x=>{x.stopPropagation(),Ce&&Ce()};return n.jsx(Ss,{$locked:N,$pinned:f,$leftOffset:C,$rightOffset:z,$showPinBorder:ye,style:{width:ze},className:$e,"data-locked":N?"true":void 0,children:n.jsxs(xs,{children:[n.jsx(Ts,{type:"text",value:s,placeholder:T,onChange:Fe,onClick:x=>x.stopPropagation()}),Ye&&n.jsx(Ge,{type:"button",onClick:we,title:"Clear filter",children:n.jsx(Ns,{})}),je&&n.jsx(Ge,{type:"button",onClick:qe,title:"Advanced filter",children:n.jsx(Ds,{})}),Ee.map((x,ve)=>n.jsx(Ge,{type:"button",onClick:Se=>{Se.stopPropagation(),x.onClick()},title:x.title,children:x.icon},ve))]})})};pn.__docgenInfo={description:"",methods:[],displayName:"TableSubHeader",props:{searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},pinned:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'none'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},rightOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},showPinBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showClearFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClearFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showAdvancedFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onAdvancedFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customActions:{required:!1,tsType:{name:"Array",elements:[{name:"FilterAction"}],raw:"FilterAction[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const ks=v.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
  
  ${({$hasMaxHeight:s})=>s&&`
    thead {
      position: sticky;
      top: 0;
      z-index: 10;
      background: #f9fafb;
    }
  `}
`,vt=v.tr`
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
  animation-delay: ${({$animationDelay:s})=>s}ms;
  animation-fill-mode: backwards;
`,As=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:s})=>s.spacing[8]};
  width: 100%;
`,Ps=v.div`
  display: flex;
  gap: 0;
  width: 100%;
  position: relative;
`,Rs=v.div`
  overflow-x: auto;
  overflow-y: auto;
  max-height: ${({$maxHeight:s})=>s||"calc(100vh - 300px)"};
  border: 1px solid ${({theme:s})=>s.colors.palette.neutral[300]};
  border-radius: ${({$hasSidePanel:s})=>s?"8px 0 0 8px":"8px"};
  position: relative;
  flex: 1;
  
  /* Always show scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:s})=>s.colors.palette.neutral[100]};
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:s})=>s.colors.palette.neutral[400]};
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:s})=>s.colors.palette.neutral[500]};
  }
`,Ls=v.tr``,Is=v.td`
  padding: ${({theme:s})=>s.spacing[4]};
  border-bottom: ${({theme:s})=>s.borderWidth[1]} solid ${({theme:s})=>s.colors.palette.neutral[200]};
`,St=v.div`
  width: ${({width:s})=>s||"100%"};
  height: ${({height:s})=>s||"1rem"};
  background: ${({theme:s})=>s.colors.palette.neutral[200]};
  border-radius: ${({theme:s})=>s.borderRadius.sm};
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
      ${({theme:s})=>s.colors.palette.neutral[100]} 50%,
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
`,xt=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:s})=>s.spacing[16]} ${({theme:s})=>s.spacing[8]};
  min-height: 400px;
  width: 100vw;
  background: ${({theme:s})=>s.colors.palette.neutral[50]};
`,Tt=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:s})=>s.spacing[6]};
  max-width: min(18.75rem, 90%);
`,Nt=v.div`
  width: ${({theme:s})=>s.spacing[20]};
  height: ${({theme:s})=>s.spacing[20]};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Dt=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:s})=>s.spacing[4]};
  text-align: center;
`,Ms=()=>[{id:"1234567890",claimId:"1234567890",firstName:"John",lastName:"Doe",userDetails:"Associate Name",nrCodes:"NR001",paidAmount:"$4,680",acrLoadDates:"March 12, 2025",contact:"(555) 112.3334",amount:"$4,680",avatar:"https://i.pravatar.cc/32?img=1",city:"New York",state:"NY",status:"Approved",priority:"High"},{id:"1234567891",claimId:"1234567891",firstName:"Jane",lastName:"Smith",userDetails:"Manager",nrCodes:"NR002",paidAmount:"$10,293",acrLoadDates:"March 15, 2025",contact:"(555) 800.0000",amount:"$10,293",avatar:"https://i.pravatar.cc/32?img=2",city:"Los Angeles",state:"CA",status:"Pending",priority:"Medium"},{id:"1234567892",claimId:"1234567892",firstName:"Michael",lastName:"Johnson",userDetails:"Senior Associate",nrCodes:"NR003",paidAmount:"$7,450",acrLoadDates:"March 18, 2025",contact:"(555) 234.5678",amount:"$7,450",avatar:"https://i.pravatar.cc/32?img=3",city:"Chicago",state:"IL",status:"Approved",priority:"Low"},{id:"1234567893",claimId:"1234567893",firstName:"Emily",lastName:"Brown",userDetails:"Analyst",nrCodes:"NR004",paidAmount:"$5,820",acrLoadDates:"March 20, 2025",contact:"(555) 345.6789",amount:"$5,820",avatar:"https://i.pravatar.cc/32?img=4",city:"Houston",state:"TX",status:"Rejected",priority:"High"},{id:"1234567894",claimId:"1234567894",firstName:"David",lastName:"Wilson",userDetails:"Supervisor",nrCodes:"NR005",paidAmount:"$12,100",acrLoadDates:"March 22, 2025",contact:"(555) 456.7890",amount:"$12,100",avatar:"https://i.pravatar.cc/32?img=5",city:"Phoenix",state:"AZ",status:"Approved",priority:"Medium"},{id:"1234567895",claimId:"1234567895",firstName:"Sarah",lastName:"Martinez",userDetails:"Associate Name",nrCodes:"NR006",paidAmount:"$8,900",acrLoadDates:"March 25, 2025",contact:"(555) 567.8901",amount:"$8,900",avatar:"https://i.pravatar.cc/32?img=6",city:"Philadelphia",state:"PA",status:"Pending",priority:"High"},{id:"1234567896",claimId:"1234567896",firstName:"James",lastName:"Anderson",userDetails:"Lead",nrCodes:"NR007",paidAmount:"$15,200",acrLoadDates:"March 28, 2025",contact:"(555) 678.9012",amount:"$15,200",avatar:"https://i.pravatar.cc/32?img=7",city:"San Antonio",state:"TX",status:"Approved",priority:"Low"},{id:"1234567897",claimId:"1234567897",firstName:"Linda",lastName:"Taylor",userDetails:"Manager",nrCodes:"NR008",paidAmount:"$6,750",acrLoadDates:"March 30, 2025",contact:"(555) 789.0123",amount:"$6,750",avatar:"https://i.pravatar.cc/32?img=8",city:"San Diego",state:"CA",status:"Pending",priority:"Medium"},{id:"1234567898",claimId:"1234567898",firstName:"Robert",lastName:"Thomas",userDetails:"Associate Name",nrCodes:"NR009",paidAmount:"$9,300",acrLoadDates:"April 2, 2025",contact:"(555) 890.1234",amount:"$9,300",avatar:"https://i.pravatar.cc/32?img=9",city:"Dallas",state:"TX",status:"Approved",priority:"High"},{id:"1234567899",claimId:"1234567899",firstName:"Patricia",lastName:"Jackson",userDetails:"Senior Associate",nrCodes:"NR010",paidAmount:"$11,500",acrLoadDates:"April 5, 2025",contact:"(555) 901.2345",amount:"$11,500",avatar:"https://i.pravatar.cc/32?img=10",city:"San Jose",state:"CA",status:"Rejected",priority:"Low"},{id:"1234567900",claimId:"1234567900",firstName:"Christopher",lastName:"White",userDetails:"Analyst",nrCodes:"NR011",paidAmount:"$7,200",acrLoadDates:"April 8, 2025",contact:"(555) 012.3456",amount:"$7,200",avatar:"https://i.pravatar.cc/32?img=11",city:"Austin",state:"TX",status:"Approved",priority:"Medium"},{id:"1234567901",claimId:"1234567901",firstName:"Barbara",lastName:"Harris",userDetails:"Supervisor",nrCodes:"NR012",paidAmount:"$13,800",acrLoadDates:"April 10, 2025",contact:"(555) 123.4567",amount:"$13,800",avatar:"https://i.pravatar.cc/32?img=12",city:"Jacksonville",state:"FL",status:"Pending",priority:"High"},{id:"1234567902",claimId:"1234567902",firstName:"Daniel",lastName:"Martin",userDetails:"Associate Name",nrCodes:"NR013",paidAmount:"$5,600",acrLoadDates:"April 12, 2025",contact:"(555) 234.5678",amount:"$5,600",avatar:"https://i.pravatar.cc/32?img=13",city:"Fort Worth",state:"TX",status:"Approved",priority:"Low"},{id:"1234567903",claimId:"1234567903",firstName:"Nancy",lastName:"Thompson",userDetails:"Lead",nrCodes:"NR014",paidAmount:"$10,900",acrLoadDates:"April 15, 2025",contact:"(555) 345.6789",amount:"$10,900",avatar:"https://i.pravatar.cc/32?img=14",city:"Columbus",state:"OH",status:"Pending",priority:"Medium"},{id:"1234567904",claimId:"1234567904",firstName:"Matthew",lastName:"Garcia",userDetails:"Manager",nrCodes:"NR015",paidAmount:"$8,400",acrLoadDates:"April 18, 2025",contact:"(555) 456.7890",amount:"$8,400",avatar:"https://i.pravatar.cc/32?img=15",city:"Charlotte",state:"NC",status:"Approved",priority:"High"},{id:"1234567905",claimId:"1234567905",firstName:"Karen",lastName:"Martinez",userDetails:"Associate Name",nrCodes:"NR016",paidAmount:"$14,200",acrLoadDates:"April 20, 2025",contact:"(555) 567.8901",amount:"$14,200",avatar:"https://i.pravatar.cc/32?img=16",city:"San Francisco",state:"CA",status:"Rejected",priority:"Low"},{id:"1234567906",claimId:"1234567906",firstName:"Joseph",lastName:"Robinson",userDetails:"Senior Associate",nrCodes:"NR017",paidAmount:"$6,900",acrLoadDates:"April 22, 2025",contact:"(555) 678.9012",amount:"$6,900",avatar:"https://i.pravatar.cc/32?img=17",city:"Indianapolis",state:"IN",status:"Approved",priority:"Medium"},{id:"1234567907",claimId:"1234567907",firstName:"Lisa",lastName:"Clark",userDetails:"Analyst",nrCodes:"NR018",paidAmount:"$12,700",acrLoadDates:"April 25, 2025",contact:"(555) 789.0123",amount:"$12,700",avatar:"https://i.pravatar.cc/32?img=18",city:"Seattle",state:"WA",status:"Pending",priority:"High"},{id:"1234567908",claimId:"1234567908",firstName:"Thomas",lastName:"Rodriguez",userDetails:"Supervisor",nrCodes:"NR019",paidAmount:"$9,800",acrLoadDates:"April 28, 2025",contact:"(555) 890.1234",amount:"$9,800",avatar:"https://i.pravatar.cc/32?img=19",city:"Denver",state:"CO",status:"Approved",priority:"Low"},{id:"1234567909",claimId:"1234567909",firstName:"Betty",lastName:"Lewis",userDetails:"Associate Name",nrCodes:"NR020",paidAmount:"$11,100",acrLoadDates:"April 30, 2025",contact:"(555) 901.2345",amount:"$11,100",avatar:"https://i.pravatar.cc/32?img=20",city:"Boston",state:"MA",status:"Pending",priority:"Medium"}],zs=()=>[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0},{id:"claimId",label:"Claim ID",visible:!0,locked:!1,order:1},{id:"firstName",label:"First Name",visible:!0,locked:!1,order:2},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:3},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:4},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:5},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:6},{id:"acrLoadDates",label:"ACR Load Dates",visible:!0,locked:!1,order:7},{id:"city",label:"City",visible:!0,locked:!1,order:8},{id:"state",label:"State",visible:!0,locked:!1,order:9},{id:"contact",label:"Contact",visible:!0,locked:!1,order:10},{id:"status",label:"Status",visible:!0,locked:!1,order:11},{id:"priority",label:"Priority",visible:!0,locked:!1,order:12},{id:"amount",label:"Amount",visible:!0,locked:!1,order:13}],I=()=>[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0,width:48,minWidth:48,maxWidth:48},{id:"claimId",label:"User Details",visible:!0,locked:!1,order:1,subColumns:[{id:"firstName",label:"First Name",visible:!0,locked:!1,order:0,parentId:"claimId",width:200,minWidth:120,maxWidth:300,resizable:!0},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:1,parentId:"claimId",width:200,minWidth:120,maxWidth:300,resizable:!0}]},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:2,width:180,minWidth:100,maxWidth:250,resizable:!0},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:3,width:150,minWidth:100,maxWidth:200,resizable:!0},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:4,width:150,minWidth:100,maxWidth:200,resizable:!0},{id:"acrLoadDates",label:"ACR Load Dates",visible:!0,locked:!1,order:5,width:180,minWidth:120,maxWidth:250,resizable:!0},{id:"address",label:"Address",visible:!0,locked:!1,order:6,subColumns:[{id:"city",label:"City",visible:!0,locked:!1,order:0,parentId:"address",width:150,minWidth:100,maxWidth:200,resizable:!0},{id:"state",label:"State",visible:!0,locked:!1,order:1,parentId:"address",width:100,minWidth:80,maxWidth:150,resizable:!0}]},{id:"contact",label:"Contact",visible:!0,locked:!1,order:7,width:180,minWidth:120,maxWidth:250,resizable:!0},{id:"status",label:"Status",visible:!0,locked:!1,order:8,width:120,minWidth:80,maxWidth:180,resizable:!0},{id:"priority",label:"Priority",visible:!0,locked:!1,order:9,width:120,minWidth:80,maxWidth:180,resizable:!0},{id:"amount",label:"Amount",visible:!0,locked:!1,order:10,width:150,minWidth:100,maxWidth:200,resizable:!0}],Je=b.forwardRef(({as:s="div",data:T,initialColumns:A,rowKey:N="id",groups:f,groupConfig:C,useSidePanel:z=!1,useModal:ye=!1,showToolbar:ze=!0,toolbarTitle:$e="Data Table",description:Ye,toolbar:We,showGlobalSearch:je=!0,showFilter:Ce=!0,showDownload:Ee=!1,onDownload:Fe,showColumnSearchByDefault:we=!1,customSidePanelTabs:qe=[],maxHeight:x,showColumnMenu:ve=!0,enableUserPinning:Se=!0,enableDevPinning:hn=!0,selectable:bn=!1,onRowSelect:$s,paginated:fn=!0,itemsPerPage:_e=10,paginationMode:F="client",onPageChange:xe,currentPage:gn,totalItems:yn,sortMode:q="client",onSort:Te,sortColumn:Cn,sortDirection:wn,defaultMinWidth:_=50,defaultMaxWidth:X=250,onRowClick:$,onOpen:Ws,onClose:js,onAfterOpen:Es,onAfterClose:Fs,loading:vn=!1,isInvalid:Sn=!1,errorMessage:xn,emptyMessage:qs="No data available",emptyIcon:Hs="inbox",emptyTitle:Tn="No Results Found",emptyDescription:Nn="Try adjusting your filters or search criteria",emptyActionLabel:He,onEmptyAction:Ne,containerClassName:Os,containerStyle:Bs,scrollContainerClassName:Us,scrollContainerStyle:Vs,emptyStateClassName:Dn,emptyStateStyle:kn,loadingClassName:Gs,loadingStyle:Js,errorClassName:Ys,errorStyle:_s,className:An,...Pn},Rn)=>{const[Ln,Xe]=b.useState(1),[In,Mn]=b.useState(_e),[zn,Ke]=b.useState(""),[$n,Ze]=b.useState("none"),Qe=F==="server"?gn||1:Ln,H=F==="server"?_e:In,P=q==="server"?Cn||"":zn,D=q==="server"?wn||"none":$n,[Wn,et]=b.useState(!1),[R,O]=b.useState([]),[Oe,tt]=b.useState(null),[jn,at]=b.useState(!1),[K,En]=b.useState({}),[nt,st]=b.useState(!1),[it,Fn]=b.useState(()=>f?new Set(f.filter(e=>e.defaultExpanded!==!1).map(e=>e.id)):new Set),ot=()=>{const e=A||zs();return hn?e:e.map(t=>{const{pinned:a,...o}=t;return o})},[k,De]=b.useState(ot()),[rt,lt]=b.useState(!1),[ke,qn]=b.useState({}),[B,Hn]=b.useState(""),[j,Ae]=b.useState({}),[Z,On]=b.useState({}),[dt,Pe]=b.useState(!1),[U,Bn]=b.useState([]),E=T||Ms(),Un=b.useMemo(()=>{const e=E.length;return e===0||R.length===0?!1:R.length>0&&R.length<e},[R.length,E.length]),ct=(e,t)=>{if(!k.find(d=>d.id===e))return;if(t==="left"&&k.filter(p=>(p.pinned==="left"||p.locked&&!p.pinned)&&p.id!=="checkbox"&&p.id!==e).length>=3){st(!0),setTimeout(()=>st(!1),3e3);return}const o=k.map(d=>d.id===e?d.subColumns?{...d,pinned:t,locked:!1,subColumns:d.subColumns.map(p=>({...p,pinned:t,locked:!1}))}:{...d,pinned:t,locked:!1}:d),r=o.find(d=>d.id==="checkbox"),u=o.filter(d=>d.id!=="checkbox").sort((d,p)=>{const l=d.pinned||(d.locked?"left":"none"),m=p.pinned||(p.locked?"left":"none");return l==="left"&&m!=="left"?-1:l!=="left"&&m==="left"||l==="right"&&m!=="right"?1:l!=="right"&&m==="right"?-1:d.order-p.order}),c=r?[{...r,order:0},...u.map((d,p)=>({...d,order:p+1}))]:u.map((d,p)=>({...d,order:p}));De(c)},ut=e=>{const t=document.querySelectorAll(`[data-column-id="${e}"]`);let a=100;t.forEach(o=>{const r=o.scrollWidth+32;r>a&&(a=r)}),a=Math.min(a,500),Ae(o=>({...o,[e]:a}))},mt=()=>{const e={};w.forEach(t=>{const a=document.querySelectorAll(`[data-column-id="${t.id}"]`);let o=100;a.forEach(r=>{const i=r.scrollWidth+32;i>o&&(o=i)}),o=Math.min(o,500),e[t.id]=o}),Ae(e)},pt=e=>{const a=ot().find(r=>r.id===e);if(!a)return;Ae(r=>{const i={...r};return delete i[e],i});const o=k.map(r=>r.id===e?{...r,pinned:a.pinned||"none",locked:a.locked||!1}:r);De(o)},ht=e=>{let t;P===e?t=D==="asc"?"desc":D==="desc"?"none":"asc":t="asc",q==="server"&&Te?Te(e,t):(Ke(e),Ze(t)),Pe(!0),setTimeout(()=>Pe(!1),300)},bt=e=>{q==="server"&&Te?Te(e,"none"):(Ke(e),Ze("none")),Pe(!0),setTimeout(()=>Pe(!1),50)},Vn=e=>{F==="server"&&xe?xe(e,H):Xe(e)},Gn=e=>{F==="server"&&xe?xe(1,e):(Mn(e),Xe(1))},Jn=e=>{et(e),O(e?Array.from({length:E.length},(t,a)=>a):[])},ft=(e,t,a=!1)=>{if(t)if(a&&Oe!==null){const o=Math.min(Oe,e),r=Math.max(Oe,e),i=Array.from({length:r-o+1},(c,d)=>o+d),u=Array.from(new Set([...R,...i]));O(u)}else O([...R,e]),tt(e);else O(R.filter(o=>o!==e)),et(!1),tt(e)},Yn=()=>{};b.useEffect(()=>{lt(we?!0:U.length>0)},[U,we]);const gt=(e,t)=>{let a=k.find(u=>u.id===e);if(!a){for(const u of k)if(u.subColumns&&(a=u.subColumns.find(c=>c.id===e),a))break}const o=(a==null?void 0:a.minWidth)!==void 0?a.minWidth:_,r=(a==null?void 0:a.maxWidth)!==void 0?a.maxWidth:X;let i=t;i=Math.max(i,o),i=Math.min(i,r),Ae(u=>({...u,[e]:i}))},_n=(e,t)=>{qn(a=>({...a,[e]:t}))},Xn=e=>{if(Fn(t=>{const a=new Set(t);return a.has(e)?a.delete(e):a.add(e),a}),C!=null&&C.onGroupToggle){const t=!it.has(e);C.onGroupToggle(e,t)}},Kn=(e,t)=>{if(!(f==null?void 0:f.find(i=>i.id===e)))return;const o=[];let r=0;f==null||f.forEach(i=>{i.id===e?i.rows.forEach(()=>{o.push(r),r++}):r+=i.rows.length}),O(t?i=>[...new Set([...i,...o])]:i=>i.filter(u=>!o.includes(u)))},Zn=e=>{const t=f==null?void 0:f.find(i=>i.id===e);if(!t||t.rows.length===0)return!1;let a=0,o=0;return f==null||f.forEach(i=>{i.id===e&&(o=a),a+=i.rows.length}),Array.from({length:t.rows.length},(i,u)=>o+u).every(i=>R.includes(i))},Qn=e=>e.filter(t=>{if(B){const r=B.toLowerCase();if(!Object.values(t).some(u=>String(u||"").toLowerCase().includes(r)))return!1}return Object.entries(ke).every(([r,i])=>{if(!i)return!0;const u=t[r];return String(u).toLowerCase().includes(i.toLowerCase())})?U.every(r=>{const i=t[r.columnId];return String(i)===r.value}):!1}),es=e=>q!=="client"||!P||D==="none"?e:[...e].sort((t,a)=>{let o=t[P],r=a[P];return o<r?D==="asc"?-1:1:o>r?D==="asc"?1:-1:0}),W=b.useMemo(()=>!f||f.length===0?null:f.map(e=>({...e,rows:es(Qn(e.rows))})),[f,B,ke,U,P,D]),ts=b.useMemo(()=>W?W.flatMap(e=>e.rows):E,[W,E]),Be=W?ts:E.filter(e=>{if(B){const o=B.toLowerCase();if(!Object.values(e).some(i=>String(i||"").toLowerCase().includes(o)))return!1}return Object.entries(ke).every(([o,r])=>{if(!r)return!0;const i=e[o];return String(i).toLowerCase().includes(r.toLowerCase())})?U.every(o=>{const r=e[o.columnId];return String(r)===o.value}):!1}),Ue=W?Be:q==="client"&&P&&D!=="none"?[...Be].sort((e,t)=>{let a=e[P],o=t[P];return a<o?D==="asc"?-1:1:a>o?D==="asc"?1:-1:0}):Be,yt=F==="server"?yn||0:Ue.length,as=Math.ceil(yt/H),L=(Qe-1)*H,ns=L+H,Ct=F==="server"?Ue:Ue.slice(L,ns),ss=e=>{const t=[];return e.forEach(a=>{if(a.subColumns&&a.subColumns.length>0){const o=a.subColumns.map(r=>{const i=r.pinned||(r.locked?"left":"none");return{...r,pinned:i!=="none"?r.pinned:a.pinned,locked:r.locked||a.locked}});t.push(...o)}else t.push(a)}),t},M=k.filter(e=>e.visible),w=ss(M);b.useEffect(()=>{const e=document.querySelector("[data-scroll-container]");if(!e)return;const t=()=>{const r=e.querySelector("tbody tr");if(!r)return;const i=r.querySelectorAll("td");if(!i||i.length===0)return;const u={};let c=0;w.forEach((l,m)=>{if((l.pinned||(l.locked?"left":"none"))==="left"&&i[m]){u[l.id]=c;const g=i[m].offsetWidth;c+=g}}),M.forEach(l=>{if(l.subColumns&&l.subColumns.length>0){const m=l.pinned||(l.locked?"left":"none");if(l.subColumns.some(g=>{const S=g.pinned||(g.locked?"left":"none");return S==="left"||S==="none"&&m==="left"})||m==="left"){const g=l.subColumns[0];u[g.id]!==void 0&&(u[l.id]=u[g.id])}}}),w.some(l=>l.id==="checkbox")&&(u.checkbox=0),En(u);const d={};let p=0;for(let l=w.length-1;l>=0;l--){const m=w[l];if((m.pinned||(m.locked?"left":"none"))==="right"&&i[l]){d[m.id]=p;const g=i[l].offsetWidth;p+=g}}M.forEach(l=>{if(l.subColumns&&l.subColumns.length>0){const m=l.pinned||(l.locked?"left":"none");if(l.subColumns.some(g=>{const S=g.pinned||(g.locked?"left":"none");return S==="right"||S==="none"&&m==="right"})||m==="right"){const g=l.subColumns.filter(Q=>{const V=Q.pinned||(Q.locked?"left":"none");return V==="right"||V==="none"&&m==="right"}),S=g[g.length-1];S&&d[S.id]!==void 0&&(d[l.id]=d[S.id])}}}),On(d)};t();const a=new ResizeObserver(()=>{t()}),o=e.querySelector("tbody tr");return o&&o.querySelectorAll("td").forEach(i=>a.observe(i)),()=>{a.disconnect()}},[w.map(e=>e.id+e.locked+(e.pinned||"none")).join(",")]);const wt=M.some(e=>e.subColumns&&e.subColumns.length>0),is=M.map((e,t)=>(e.pinned||(e.locked?"left":"none"))==="left"?t:-1).reduce((e,t)=>t>e?t:e,-1),os=M.findIndex(e=>(e.pinned||(e.locked?"left":"none"))==="right"),Re=w.map((e,t)=>(e.pinned||(e.locked?"left":"none"))==="left"?t:-1).reduce((e,t)=>t>e?t:e,-1),Le=w.findIndex(e=>(e.pinned||(e.locked?"left":"none"))==="right"),rs=()=>n.jsxs(n.Fragment,{children:[n.jsx("tr",{children:M.map((e,t)=>{const a=e.pinned||(e.locked?"left":"none"),o=e.locked,r=K[e.id],i=Z[e.id],u=e.subColumns&&e.subColumns.length>0?e.subColumns.length:1,c=wt&&(!e.subColumns||e.subColumns.length===0)?2:1,d=a==="left"&&t===is||a==="right"&&t===os;if(e.id==="checkbox")return n.jsx(Ve,{label:"",variant:"default",showCheckbox:!0,checked:Wn,indeterminate:Un,onCheckChange:Jn,locked:o,pinned:a,leftOffset:r,rightOffset:i,showPinBorder:d,"data-locked":o,rowSpan:c,isChildColumn:!0},e.id);const l=j[e.id]||(typeof e.width=="number"?e.width:void 0);return n.jsx(Ve,{label:e.label,variant:!o&&!e.subColumns?"resizeable-locked":"default",sortable:!e.subColumns||e.subColumns.length===0,sortDirection:P===e.id?D:"none",onSort:()=>ht(e.id),onSortNone:()=>bt(e.id),locked:o,pinned:a,onPinChange:m=>ct(e.id,m),onAutosizeColumn:()=>ut(e.id),onAutosizeAll:mt,onResetColumn:()=>pt(e.id),showColumnMenu:ve,enableUserPinning:Se,leftOffset:r,rightOffset:i,showPinBorder:d,hasSubColumns:e.subColumns&&e.subColumns.length>0,"data-locked":o,align:u>1?"center":"left",colSpan:u,rowSpan:c,resizable:!e.subColumns,onResize:e.subColumns?void 0:m=>gt(e.id,m),width:l,minWidth:e.minWidth!==void 0?e.minWidth:_,maxWidth:e.maxWidth!==void 0?e.maxWidth:X,initialWidth:typeof e.width=="number"?e.width:void 0},e.id)})}),wt&&n.jsx("tr",{children:M.map(e=>!e.subColumns||e.subColumns.length===0?null:e.subColumns.map(t=>{const a=e.pinned||(e.locked?"left":"none"),o=t.pinned||(t.locked?"left":"none"),r=o!=="none"?o:a,i=t.locked||e.locked,u=K[t.id],c=Z[t.id],p=j[t.id]||(typeof t.width=="number"?t.width:void 0),l=w.findIndex(y=>y.id===t.id),m=r==="left"&&l===Re||r==="right"&&l===Le;return n.jsx(Ve,{label:t.label,variant:i?"default":"resizeable-locked",sortable:!0,sortDirection:P===t.id?D:"none",onSort:()=>ht(t.id),onSortNone:()=>bt(t.id),locked:i,pinned:r,onPinChange:y=>ct(t.id,y),onAutosizeColumn:()=>ut(t.id),onAutosizeAll:mt,onResetColumn:()=>pt(t.id),showColumnMenu:ve,enableUserPinning:Se,leftOffset:u,rightOffset:c,showPinBorder:m,"data-locked":i,isChildColumn:!0,resizable:!0,onResize:y=>gt(t.id,y),width:p,minWidth:t.minWidth!==void 0?t.minWidth:_,maxWidth:t.maxWidth!==void 0?t.maxWidth:X,initialWidth:typeof t.width=="number"?t.width:void 0},t.id)}))})]}),ls=()=>rt?n.jsx("tr",{children:w.map((e,t)=>{const a=e.pinned||(e.locked?"left":"none"),o=e.locked,r=K[e.id],i=Z[e.id],u=e.filterable!==!1;return e.id==="checkbox"?n.jsx("th",{style:{position:a!=="none"?"sticky":"relative",left:a==="left"?`${r}px`:"auto",right:a==="right"?`${i}px`:"auto",zIndex:a!=="none"?3:1,background:"#f9fafb",borderBottom:"1px solid #e5e7eb",padding:"8px 12px",minWidth:"48px"},"data-locked":o?"true":void 0},e.id):u?n.jsx(pn,{searchValue:ke[e.id]||"",searchPlaceholder:`Search ${e.label}`,onSearchChange:c=>_n(e.id,c),locked:o,pinned:a,leftOffset:r,rightOffset:i,showPinBorder:a==="left"&&t===Re||a==="right"&&t===Le,"data-locked":o},e.id):n.jsx("th",{style:{position:a!=="none"?"sticky":"relative",left:a==="left"?`${r}px`:"auto",right:a==="right"?`${i}px`:"auto",zIndex:a!=="none"?3:1,background:"#f9fafb",borderBottom:"1px solid #e5e7eb",padding:"8px 12px"},"data-locked":o?"true":void 0},e.id)})}):null;return n.jsx(s,{ref:Rn,className:An,...Pn,children:n.jsxs(As,{children:[ze&&n.jsx(ms,{title:$e,showGlobalSearch:je,globalSearchValue:B,onGlobalSearchChange:Hn,globalSearchPlaceholder:"Search across all columns...",showDropdown:!1,dropdownOptions:[],showDownload:Ee,onDownload:Fe,showFilter:Ce,onFilter:()=>{},showSettings:ye,onSettingsClick:()=>at(!0)}),ye&&n.jsx(ps,{isOpen:jn,onClose:()=>at(!1),columns:k.filter(e=>e.id!=="checkbox"),lockWarning:nt,onColumnsChange:e=>{const t=k.find(o=>o.id==="checkbox"),a=t?[t,...e]:e;De(a)}}),n.jsxs(Ps,{$hasSidePanel:z,children:[n.jsx(Rs,{"data-scroll-container":!0,$hasSidePanel:z,$maxHeight:x,children:n.jsxs(ks,{$hasMaxHeight:!0,children:[n.jsx("colgroup",{children:M.map(e=>{if(e.subColumns&&e.subColumns.length>0)return e.subColumns.map(t=>{const a=j[t.id],o=a?`${a}px`:t.width||e.width||"150px",r=t.minWidth?`${t.minWidth}px`:`${_}px`,i=t.maxWidth?`${t.maxWidth}px`:`${X}px`;return n.jsx("col",{style:{width:o,minWidth:r,maxWidth:i}},t.id)});if(e.id==="checkbox"){const t=j[e.id],a=t?`${t}px`:e.width||"48px";return n.jsx("col",{style:{width:a,minWidth:"48px",maxWidth:"48px"}},e.id)}else{const t=j[e.id],a=t?`${t}px`:e.width||"150px",o=e.minWidth?`${e.minWidth}px`:`${_}px`,r=e.maxWidth?`${e.maxWidth}px`:`${X}px`;return n.jsx("col",{style:{width:a,minWidth:o,maxWidth:r}},e.id)}})}),n.jsxs("thead",{children:[rs(),ls()]}),n.jsx("tbody",{children:vn?Array.from({length:H}).map((e,t)=>n.jsx(Ls,{children:w.map(a=>n.jsx(Is,{children:a.id==="checkbox"?n.jsx(St,{width:"20px",height:"20px"}):n.jsx(St,{width:"80%"})},a.id))},`skeleton-${t}`)):Sn?n.jsx("tr",{children:n.jsx("td",{colSpan:w.length,style:{padding:0,border:"none"},children:n.jsx(xt,{role:"alert","aria-live":"assertive",children:n.jsxs(Tt,{children:[n.jsx(Nt,{children:n.jsx(bs,{sx:{fontSize:64,color:"error.main"}})}),n.jsxs(Dt,{children:[n.jsx(Ie,{variant:"headingL",weight:"semibold",as:"h3",color:"error",children:xn||"Error loading data"}),n.jsx(Ie,{variant:"body",color:"secondary",children:"There was a problem loading the table data."})]}),Ne&&n.jsx(Y,{variant:"primary",size:"medium",onClick:Ne,children:He||"Retry"})]})})})}):Ct.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:w.length,style:{padding:0,border:"none"},children:n.jsx(xt,{className:Dn,style:kn,role:"status","aria-live":"polite",children:n.jsxs(Tt,{children:[n.jsx(Nt,{children:n.jsx(fs,{sx:{fontSize:64,color:"text.secondary"}})}),n.jsxs(Dt,{children:[n.jsx(Ie,{variant:"headingL",weight:"semibold",as:"h3",children:Tn}),n.jsx(Ie,{variant:"body",color:"secondary",children:Nn})]}),He&&Ne&&n.jsx(Y,{variant:"primary",size:"medium",onClick:Ne,children:He})]})})})}):W&&W.length>0?W.map(e=>{const t=it.has(e.id);return n.jsxs(us.Fragment,{children:[n.jsx(hs,{groupName:e.groupName,groupDescription:e.groupDescription,isExpanded:t,onToggle:()=>Xn(e.id),colSpan:w.length,expandPosition:(C==null?void 0:C.expandPosition)||"left",customContent:C!=null&&C.renderGroupContent?C.renderGroupContent(e):e.customContent,className:e.className,style:e.style,showCheckbox:bn,isSelected:Zn(e.id),onCheckboxChange:a=>Kn(e.id,a)}),t&&e.rows.map((a,o)=>{const r=R.includes(L+o),i=w.map((c,d)=>{const p=c.pinned||(c.locked?"left":"none"),l=c.locked,m=K[c.id],y=Z[c.id],g=d===0,S=p==="left"&&d===Re||p==="right"&&d===Le;if(c.id==="checkbox")return n.jsx(G,{"data-column-id":c.id,selected:r,locked:l,pinned:p,leftOffset:m,rightOffset:y,showPinBorder:S,"data-locked":l,isFirstColumn:g,showCheckbox:!0,checked:r,onCheckChange:(ds,cs)=>ft(L+o,ds,cs)},c.id);if(c.id==="userDetails")return n.jsx(G,{"data-column-id":c.id,selected:r,locked:l,pinned:p,leftOffset:m,rightOffset:y,showPinBorder:S,"data-locked":l,isFirstColumn:g,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("img",{src:a.avatar,alt:a.userDetails,style:{width:32,height:32,borderRadius:"50%"}}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:600},children:a.userDetails}),n.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Role"})]})]})},c.id);const V=j[c.id]||(typeof c.width=="number"?c.width:void 0);return n.jsx(G,{selected:r,locked:l,pinned:p,leftOffset:m,rightOffset:y,showPinBorder:S,"data-locked":l,isFirstColumn:g,width:V,children:c.render?c.render(a[c.id],a,L+o):a[c.id]},c.id)}),u=c=>{$&&$(a,L+o,c)};return dt?n.jsx(vt,{$animationDelay:o*20,onClick:u,style:{cursor:$?"pointer":"default"},children:i},a.id):n.jsx("tr",{onClick:u,style:{cursor:$?"pointer":"default"},children:i},a.id)})]},e.id)}):Ct.map((e,t)=>{const a=R.includes(L+t),o=w.map((i,u)=>{const c=i.pinned||(i.locked?"left":"none"),d=i.locked,p=K[i.id],l=Z[i.id],m=u===0,y=c==="left"&&u===Re||c==="right"&&u===Le;if(i.id==="checkbox")return n.jsx(G,{"data-column-id":i.id,selected:a,locked:d,pinned:c,leftOffset:p,rightOffset:l,showPinBorder:y,"data-locked":d,isFirstColumn:m,showCheckbox:!0,checked:a,onCheckChange:(Q,V)=>ft(L+t,Q,V)},i.id);if(i.id==="userDetails")return n.jsx(G,{"data-column-id":i.id,selected:a,locked:d,pinned:c,leftOffset:p,rightOffset:l,showPinBorder:y,"data-locked":d,isFirstColumn:m,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("img",{src:e.avatar,alt:e.userDetails,style:{width:32,height:32,borderRadius:"50%"}}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:600},children:e.userDetails}),n.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Role"})]})]})},i.id);const S=j[i.id]||(typeof i.width=="number"?i.width:void 0);return n.jsx(G,{selected:a,locked:d,pinned:c,leftOffset:p,rightOffset:l,showPinBorder:y,"data-locked":d,isFirstColumn:m,width:S,children:i.render?i.render(e[i.id],e,L+t):e[i.id]},i.id)}),r=i=>{$&&$(e,L+t,i)};return dt?n.jsx(vt,{$animationDelay:t*20,onClick:r,style:{cursor:$?"pointer":"default"},children:o},e.id):n.jsx("tr",{onClick:r,style:{cursor:$?"pointer":"default"},children:o},e.id)})})]})}),z&&n.jsx(ws,{columns:k.filter(e=>e.id!=="checkbox"),onColumnsChange:e=>{const t=k.find(o=>o.id==="checkbox"),a=t?[t,...e]:e;De(a)},onFilterToggle:Yn,showFilters:rt,lockWarning:nt,tableData:E,columnFilters:U,onFiltersChange:Bn,customTabs:qe})]}),fn&&n.jsx(vs,{currentPage:Qe,totalPages:as,totalItems:yt,itemsPerPage:H,onPageChange:Vn,onItemsPerPageChange:Gn})]})})});Je.displayName="AdvancedDataTable";Je.__docgenInfo={description:"",methods:[],displayName:"AdvancedDataTable",props:{as:{required:!1,tsType:{name:"ElementType"},description:"Polymorphic component type (default: 'div')",defaultValue:{value:"'div'",computed:!1}},data:{required:!1,tsType:{name:"Array",elements:[{name:"DataRow"}],raw:"DataRow[]"},description:"Array of data objects to display"},initialColumns:{required:!1,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:"Column configuration using ColumnConfig interface"},rowKey:{required:!1,tsType:{name:"string"},description:"Custom row key accessor (default: 'id')",defaultValue:{value:"'id'",computed:!1}},groups:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"expandPosition",value:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}},{key:"onGroupToggle",value:{name:"signature",type:"function",raw:"(groupId: string, isExpanded: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"groupId"},{type:{name:"boolean"},name:"isExpanded"}],return:{name:"void"}},required:!1}},{key:"renderGroupContent",value:{name:"signature",type:"function",raw:"(group: any) => React.ReactNode",signature:{arguments:[{type:{name:"any"},name:"group"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}},required:!1}}]}},description:"Group configuration"},useSidePanel:{required:!1,tsType:{name:"boolean"},description:"Show side panel for column/filter controls (alternative to modal settings)",defaultValue:{value:"false",computed:!1}},useModal:{required:!1,tsType:{name:"boolean"},description:"Show modal for column/filter controls",defaultValue:{value:"false",computed:!1}},showToolbar:{required:!1,tsType:{name:"boolean"},description:"Show default toolbar",defaultValue:{value:"true",computed:!1}},toolbarTitle:{required:!1,tsType:{name:"string"},description:"Table title (used in default toolbar)",defaultValue:{value:"'Data Table'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Table description (used in default toolbar)"},toolbar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom toolbar content - when provided, renders instead of default toolbar"},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search in default toolbar",defaultValue:{value:"true",computed:!1}},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button in default toolbar",defaultValue:{value:"true",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button in default toolbar",defaultValue:{value:"false",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"},showColumnSearchByDefault:{required:!1,tsType:{name:"boolean"},description:"Show column search bars in sub-header (default: false, shows on filter apply)",defaultValue:{value:"false",computed:!1}},customSidePanelTabs:{required:!1,tsType:{name:"Array",elements:[{name:"CustomTabConfig"}],raw:"CustomTabConfig[]"},description:"Custom tabs for side panel",defaultValue:{value:"[]",computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height for table body (enables fixed header with internal scroll). Example: '400px', '50vh'"},showColumnMenu:{required:!1,tsType:{name:"boolean"},description:"Enable column header menu (three-dot menu with sort, pin, autosize options) (default: true)",defaultValue:{value:"true",computed:!1}},allowUserLeftPin:{required:!1,tsType:{name:"boolean"},description:"Allow users to pin columns to the left via menu (default: true)"},allowUserRightPin:{required:!1,tsType:{name:"boolean"},description:"Allow users to pin columns to the right via menu (default: true)"},allowDevLeftPin:{required:!1,tsType:{name:"boolean"},description:"Allow developers to set initial left-pinned columns via column config (default: true)"},allowDevRightPin:{required:!1,tsType:{name:"boolean"},description:"Allow developers to set initial right-pinned columns via column config (default: true)"},selectable:{required:!1,tsType:{name:"boolean"},description:"Enable row selection",defaultValue:{value:"false",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedIds"}],return:{name:"void"}}},description:"Callback when rows are selected"},paginated:{required:!1,tsType:{name:"boolean"},description:"Enable pagination",defaultValue:{value:"true",computed:!1}},itemsPerPage:{required:!1,tsType:{name:"number"},description:"Items per page (default: 10)",defaultValue:{value:"10",computed:!1}},paginationMode:{required:!1,tsType:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}]},description:"Pagination mode: 'client' (default) or 'server'. When 'server', use onPageChange callback to handle pagination",defaultValue:{value:"'client'",computed:!1}},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number, itemsPerPage: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"itemsPerPage"}],return:{name:"void"}}},description:"Callback for page change (server-side pagination). Called with (page, itemsPerPage)"},currentPage:{required:!1,tsType:{name:"number"},description:"Current page (controlled, for server-side pagination)"},totalItems:{required:!1,tsType:{name:"number"},description:"Total number of items (required for server-side pagination)"},sortMode:{required:!1,tsType:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}]},description:"Sorting mode: 'client' (default) or 'server'. When 'server', use onSort callback to handle sorting",defaultValue:{value:"'client'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnId: string, direction: 'asc' | 'desc' | 'none') => void",signature:{arguments:[{type:{name:"string"},name:"columnId"},{type:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sort changes (only used when sortMode='server')"},sortColumn:{required:!1,tsType:{name:"string"},description:"Controlled sort column (only used when sortMode='server')"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"Controlled sort direction (only used when sortMode='server')"},defaultMinWidth:{required:!1,tsType:{name:"number"},description:"Default minimum width for columns that don't specify minWidth (default: 50px)",defaultValue:{value:"50",computed:!1}},defaultMaxWidth:{required:!1,tsType:{name:"number"},description:"Default maximum width for columns that don't specify maxWidth (default: 250px)",defaultValue:{value:"250",computed:!1}},enableUserPinning:{required:!1,tsType:{name:"boolean"},description:`Allow users to pin columns via column menu (both left and right). 
When false, hides pin options from column menu. Default: true`,defaultValue:{value:"true",computed:!1}},enableDevPinning:{required:!1,tsType:{name:"boolean"},description:`Allow developers to set initial pinned columns via column config (pinned: 'left' | 'right'). 
When false, ignores pinned property in column config. Default: true`,defaultValue:{value:"true",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: any, rowIndex: number, event: React.MouseEvent<HTMLTableRowElement>) => void",signature:{arguments:[{type:{name:"any"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableRowElement>",elements:[{name:"HTMLTableRowElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when a row is clicked"},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when side panel/modal opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when side panel/modal closes"},onAfterOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback after side panel/modal open animation completes"},onAfterClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback after side panel/modal close animation completes"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Invalid/error state",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true"},emptyMessage:{required:!1,tsType:{name:"string"},description:"Custom empty state message",defaultValue:{value:"'No data available'",computed:!1}},emptyIcon:{required:!1,tsType:{name:"string"},description:"Empty state icon name (Material Icons)",defaultValue:{value:"'inbox'",computed:!1}},emptyTitle:{required:!1,tsType:{name:"string"},description:"Empty state title",defaultValue:{value:"'No Results Found'",computed:!1}},emptyDescription:{required:!1,tsType:{name:"string"},description:"Empty state description",defaultValue:{value:"'Try adjusting your filters or search criteria'",computed:!1}},emptyActionLabel:{required:!1,tsType:{name:"string"},description:"Empty state action button label"},onEmptyAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Empty state action button handler"},containerClassName:{required:!1,tsType:{name:"string"},description:"Override className for container"},containerStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for container"},scrollContainerClassName:{required:!1,tsType:{name:"string"},description:"Override className for scroll container"},scrollContainerStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for scroll container"},emptyStateClassName:{required:!1,tsType:{name:"string"},description:"Override className for empty state"},emptyStateStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for empty state"},loadingClassName:{required:!1,tsType:{name:"string"},description:"Override className for loading state"},loadingStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for loading state"},errorClassName:{required:!1,tsType:{name:"string"},description:"Override className for error state"},errorStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for error state"},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};const Ti={title:"Components/Table/Advanced Table",component:Je,argTypes:{as:{control:"select",options:["div","section","article","main"],description:"Polymorphic component type",table:{category:"Polymorphism"}},className:{control:"text",description:"Custom CSS class",table:{category:"Polymorphism"}},initialColumns:{control:!1,description:'Column configuration array. Each column supports: id, label, visible, locked, pinned ("left"|"right"|"none"), order, width, and render function. The render function signature is: (value, row, rowIndex) => ReactNode. Example: render: (value, row) => <Chip label={value} />',table:{category:"Data & Columns"}},data:{control:!1,description:"Table data rows",table:{category:"Data & Columns"}},rowKey:{control:"text",description:"Row key accessor",table:{category:"Data & Columns"}},useSidePanel:{control:"boolean",description:"Show side panel",table:{category:"Layout & Display"}},useModal:{control:"boolean",description:"Show modal for settings",table:{category:"Layout & Display"}},showToolbar:{control:"boolean",description:"Show toolbar",table:{category:"Layout & Display"}},toolbarTitle:{control:"text",description:"Toolbar title",table:{category:"Layout & Display"}},description:{control:"text",description:"Table description",table:{category:"Layout & Display"}},showGlobalSearch:{control:"boolean",description:"Show global search",table:{category:"Layout & Display"}},showFilter:{control:"boolean",description:"Show filter button",table:{category:"Layout & Display"}},showDownload:{control:"boolean",description:"Show download button",table:{category:"Layout & Display"}},maxHeight:{control:"text",description:'Max height for table body (e.g., "400px", "50vh"). Enables fixed header with scrollable body and always-visible 8px scrollbar',table:{category:"Layout & Display"}},showColumnSearchByDefault:{control:"boolean",description:"Show column search bars",table:{category:"Layout & Display"}},showColumnMenu:{control:"boolean",description:"Enable column header menu (three-dot menu with sort, pin, autosize, and reset options). Default: true",table:{category:"Column Menu & Pinning"}},enableUserPinning:{control:"boolean",description:"Allow users to pin columns (left or right) via column menu. When false, hides pin options from menu. Default: true",table:{category:"Column Menu & Pinning"}},enableDevPinning:{control:"boolean",description:'Allow developers to set initial pinned columns via column config (pinned: "left" | "right"). When false, ignores pinned property in column config. Default: true',table:{category:"Column Menu & Pinning"}},selectable:{control:"boolean",description:"Enable row selection",table:{category:"Selection"}},paginated:{control:"boolean",description:"Enable pagination",table:{category:"Pagination"}},itemsPerPage:{control:"number",description:"Items per page",table:{category:"Pagination"}},paginationMode:{control:"select",options:["client","server"],description:'Pagination mode: "client" (default) handles data slicing automatically, "server" expects pre-paginated data and calls onPageChange callback',table:{category:"Pagination"}},onPageChange:{action:"pageChanged",description:'Callback for server-side pagination. Called with (page, itemsPerPage) when page changes. Use with paginationMode="server"',table:{category:"Pagination"}},currentPage:{control:"number",description:'Controlled current page (for server-side pagination). Use with paginationMode="server"',table:{category:"Pagination"}},totalItems:{control:"number",description:'Total number of items across all pages (required for server-side pagination). Use with paginationMode="server"',table:{category:"Pagination"}},sortMode:{control:"select",options:["client","server"],description:"Sorting mode",table:{category:"Sorting"}},defaultMinWidth:{control:"number",description:"Default min width for columns",table:{category:"Column Resizing"}},defaultMaxWidth:{control:"number",description:"Default max width for columns",table:{category:"Column Resizing"}},loading:{control:"boolean",description:"Loading state",table:{category:"States"}},isInvalid:{control:"boolean",description:"Error state",table:{category:"States"}},errorMessage:{control:"text",description:"Error message",table:{category:"States"}},emptyTitle:{control:"text",description:"Empty state title",table:{category:"Empty State"}},emptyDescription:{control:"text",description:"Empty state description",table:{category:"Empty State"}},emptyActionLabel:{control:"text",description:"Empty action button label",table:{category:"Empty State"}},emptyIcon:{control:"text",description:"Empty state icon",table:{category:"Empty State"}},containerClassName:{control:"text",description:"Container class",table:{category:"Customization"}},scrollContainerClassName:{control:"text",description:"Scroll container class",table:{category:"Customization"}},emptyStateClassName:{control:"text",description:"Empty state class",table:{category:"Customization"}},loadingClassName:{control:"text",description:"Loading state class",table:{category:"Customization"}},errorClassName:{control:"text",description:"Error state class",table:{category:"Customization"}},onRowClick:{action:"row clicked",table:{category:"Events"}},onRowSelect:{action:"rows selected",table:{category:"Events"}},onSort:{action:"sorted",table:{category:"Events"}},onDownload:{action:"download clicked",table:{category:"Events"}},onEmptyAction:{action:"empty action clicked",table:{category:"Events"}},onOpen:{action:"panel opened",table:{category:"Events"}},onClose:{action:"panel closed",table:{category:"Events"}},onAfterOpen:{action:"after open",table:{category:"Events"}},onAfterClose:{action:"after close",table:{category:"Events"}}},parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:600},description:{component:`
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
| **Pagination** | \`paginated\`, \`itemsPerPage\`, \`paginationMode\`, \`onPageChange\`, \`currentPage\`, \`totalItems\` |
| **Sorting** | \`sortMode\`, \`onSort\`, \`sortColumn\`, \`sortDirection\` |
| **Resizing** | \`defaultMinWidth\`, \`defaultMaxWidth\` |
| **Events** | \`onRowClick\`, \`onOpen\`, \`onClose\`, \`onAfterOpen\`, \`onAfterClose\` |
| **States** | \`loading\`, \`isInvalid\`, \`errorMessage\` |
| **Empty State** | \`emptyTitle\`, \`emptyDescription\`, \`emptyActionLabel\`, \`onEmptyAction\` |
| **Customization** | 10+ className/style override props |

## 🎨 Custom Cell Rendering

Columns support custom rendering via the \`render\` function:

**Signature:** \`(value, row, rowIndex) => ReactNode\`

\`\`\`tsx
const columns = [
  {
    id: 'status',
    label: 'Status',
    // value = cell value, row = full row object, rowIndex = row index
    render: (value, row, rowIndex) => (
      <Chip label={value} type="success" />
    )
  },
  {
    id: 'actions',
    label: 'Actions',
    // For actions column, value is ignored, use row object
    render: (_value, row) => (
      <Button onClick={() => handleEdit(row)}>Edit</Button>
    )
  }
];
\`\`\`

See stories below for detailed examples of each feature.
        `}}},args:{initialColumns:I(),useSidePanel:!1,useModal:!1,showToolbar:!0,toolbarTitle:"Data Table",showGlobalSearch:!0,showFilter:!1,showDownload:!1,showColumnSearchByDefault:!1,showColumnMenu:!0,enableUserPinning:!0,enableDevPinning:!0,selectable:!1,paginated:!0,itemsPerPage:10,sortMode:"client",defaultMinWidth:50,defaultMaxWidth:250,loading:!1,isInvalid:!1,errorMessage:"",emptyTitle:"No Results Found",emptyDescription:"Try adjusting your search criteria or filters",emptyActionLabel:"",rowKey:"id"},tags:["autodocs"]},ee={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Claims Data",onRowClick:h(),onSort:h()},parameters:{docs:{description:{story:"Table with side panel for column and filter controls. The table has no right border radius to seamlessly connect with the side panel. Column resizing works in both Canvas and Docs views."},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

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
/>`},story:{inline:!1,iframeHeight:600}}}},te={args:{useSidePanel:!1,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data",onRowClick:h(),onSort:h()},parameters:{docs:{description:{story:"Traditional table with modal settings. Click the settings icon button in the toolbar to open column settings. Column resizing works in both Canvas and Docs views."},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

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
/>`},story:{inline:!1,iframeHeight:600}}}},Me={args:{useSidePanel:!0,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data",onRowClick:h(),onSort:h()},parameters:{docs:{description:{story:"Table with both side panel and modal controls available. The toolbar settings button opens the modal, while the side panel provides quick access to column/filter controls. Column resizing works in both Canvas and Docs views."},story:{inline:!1,iframeHeight:600}}}},ae={args:{useSidePanel:!1,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data with Sub-Headers",initialColumns:I(),onRowClick:h(),onSort:h()},parameters:{docs:{description:{story:'Table with sub-header support showing nested columns. The "User Details" parent column contains "First Name" and "Last Name" sub-columns, and the "Address" parent column contains "City" and "State" sub-columns. This demonstrates the hierarchical column structure with parent-child relationships. Column resizing works in both Canvas and Docs views.'},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

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
/>`},story:{inline:!1,iframeHeight:600}}}},ne={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Filter Count Badge Demo",onRowClick:h(),onSort:h()},parameters:{docs:{description:{story:"**Filter Count Badge & Smart Search Headers**: The Filter button now shows a purple badge with the count of active filters. Search headers only appear when filters are actually applied, not just when clicking the Filter button. This provides better visual feedback and cleaner UX."},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

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
/>`},story:{inline:!1,iframeHeight:600}}}},se={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Always Visible Search Headers",showColumnSearchByDefault:!0,onRowClick:h(),onSort:h()},parameters:{docs:{description:{story:"**Always Visible Search Headers**: Set showColumnSearchByDefault to true to force search headers to always be visible, regardless of filter state. Useful when column search is the primary filtering method."},story:{inline:!1,iframeHeight:600}}}},ie={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Custom Tabs Demo",customSidePanelTabs:[{id:"export",label:"Export",icon:"📥",onClick:()=>alert("Export functionality triggered!")},{id:"info",label:"Info",icon:"ℹ️",content:n.jsxs("div",{style:{padding:"16px"},children:[n.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"16px",fontWeight:600},children:"Custom Info Panel"}),n.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666",lineHeight:1.5},children:"This is a custom content panel. You can render any React component here. Perfect for settings, filters, analytics, or any custom functionality."})]})}],onRowClick:h(),onSort:h()},parameters:{docs:{description:{story:'**Custom Tabs**: Add your own tabs to the side panel with customSidePanelTabs prop. Supports both action-only tabs (with onClick) and content tabs (with content ReactNode). Try clicking the "Export" and "Info" tabs!'},story:{inline:!1,iframeHeight:600}}}},oe={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Click Outside to Close Demo",onRowClick:h(),onSort:h()},parameters:{docs:{description:{story:"**Click Outside to Close**: The side panel now closes when clicking outside, providing standard overlay/modal behavior. However, if there are unsaved filter changes, the panel prevents closing and shows a warning with shake animation. This prevents accidental loss of filter selections."},story:{inline:!1,iframeHeight:600}}}},re={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Unsaved Changes Protection Demo",onRowClick:h(),onSort:h()},parameters:{docs:{description:{story:'**Unsaved Changes Protection**: Filter selections are now tracked as "pending" until you click Apply. If you try to close the panel with unsaved changes, it prevents closing and shows a shake animation with a warning message: "Please apply, cancel, or reset filters before closing." This ensures users never accidentally lose their filter selections.'},story:{inline:!1,iframeHeight:600}}}},le={args:{initialColumns:I(),loading:!0,showToolbar:!0,toolbarTitle:"Loading Data"},parameters:{docs:{description:{story:"Shows a loading state with Typography component. Customize with `loadingClassName` and `loadingStyle` props."}}}},de={args:{initialColumns:I(),isInvalid:!0,errorMessage:"Failed to load data.",showToolbar:!0,toolbarTitle:"Error Loading Data"},parameters:{docs:{description:{story:"Shows an error state with custom error message using Typography component. Customize with `errorClassName` and `errorStyle` props."}}}},ce={args:{initialColumns:I(),data:[],emptyTitle:"No Claims Found",emptyDescription:"Try adjusting your search criteria or filters",emptyActionLabel:"Clear Filters",onEmptyAction:h(),showToolbar:!0,toolbarTitle:"Empty State Demo"},parameters:{docs:{description:{story:"Shows a custom empty state with title, description, and action button. All text uses Typography component. Customize with `emptyStateClassName` and `emptyStateStyle` props."}}}},ue={args:{initialColumns:I(),selectable:!0,onRowSelect:h(),showToolbar:!0,toolbarTitle:"Selectable Table"},parameters:{docs:{description:{story:"Enable row selection with checkboxes. Use `onRowSelect` callback to handle selection changes."}}}},me={args:{initialColumns:I(),paginated:!0,itemsPerPage:5,showToolbar:!0,toolbarTitle:"Custom Pagination (5 per page)"},parameters:{docs:{description:{story:"Customize pagination with `itemsPerPage` prop. This example shows 5 items per page."}}}},pe={args:{as:"section",initialColumns:I(),className:"enterprise-table-section",showToolbar:!0,toolbarTitle:"Rendered as <section>"},parameters:{docs:{description:{story:"Use the `as` prop to render as any HTML element. This example renders as a `<section>` element. Supports forwardRef for accessing the DOM element."}}}},he={args:{initialColumns:I(),toolbar:n.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderBottom:"1px solid #ddd"},children:[n.jsx("h3",{style:{margin:0,fontSize:"18px",fontWeight:600},children:"Custom Toolbar Content"}),n.jsx("p",{style:{margin:"8px 0 0",fontSize:"14px",color:"#666"},children:"You can pass any React component as the toolbar prop"})]})},parameters:{docs:{description:{story:"Replace the default toolbar with custom content using the `toolbar` prop. Pass any React component."}}}},be={args:{initialColumns:I(),showToolbar:!0,toolbarTitle:"Claims Management",description:"View and manage all claims in the system",showGlobalSearch:!0,showFilter:!0,showDownload:!0,onDownload:h()},parameters:{docs:{description:{story:"Customize the default toolbar with title, description, and toggle various features like global search, filter, and download buttons."}}}},fe={args:{as:"section",className:"enterprise-table",initialColumns:[{id:"checkbox",label:"",visible:!0,locked:!0,order:0},{id:"claimId",label:"Claim ID",visible:!0,locked:!1,pinned:"left",order:1,width:120},{id:"userDetails",label:"User",visible:!0,locked:!1,pinned:"left",order:2,width:200},{id:"status",label:"Status",visible:!0,locked:!1,order:3,width:150,render:(s,T)=>{const N={approved:{type:"success",label:"Approved"},pending:{type:"warning",label:"Pending"},rejected:{type:"error",label:"Rejected"},review:{type:"default",label:"In Review"}}[String(s||"").toLowerCase()]||{type:"default",label:s};return n.jsx(J,{label:N.label,type:N.type,variant:"filled",size:"small"})}},{id:"priority",label:"Priority",visible:!0,locked:!1,order:4,width:120,render:(s,T)=>{const N={high:{type:"error",label:"High"},medium:{type:"warning",label:"Medium"},low:{type:"success",label:"Low"}}[String(s||"").toLowerCase()]||{type:"warning",label:s};return n.jsx(J,{label:N.label,type:N.type,variant:"outlined",size:"small"})}},{id:"amount",label:"Amount",visible:!0,locked:!1,order:5,width:120},{id:"contact",label:"Contact",visible:!0,locked:!1,order:6,width:150},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:7,width:120},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:8,width:130},{id:"acrLoadDates",label:"ACR Load Date",visible:!0,locked:!1,order:9,width:140},{id:"firstName",label:"First Name",visible:!0,locked:!1,order:10,width:120},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:11,width:120},{id:"actions",label:"Actions",visible:!0,locked:!1,pinned:"right",order:12,width:180,render:(s,T)=>n.jsxs("div",{style:{display:"flex",gap:"4px",alignItems:"center"},children:[n.jsx(Y,{variant:"tertiary",size:"small",onClick:()=>console.log("View",T.claimId),"aria-label":"View",children:n.jsx(gs,{style:{fontSize:"16px"}})}),n.jsx(Y,{variant:"tertiary",size:"small",onClick:()=>console.log("Edit",T.claimId),"aria-label":"Edit",children:n.jsx(ys,{style:{fontSize:"16px"}})}),n.jsx(Y,{variant:"tertiary",size:"small",onClick:()=>console.log("Delete",T.claimId),"aria-label":"Delete",children:n.jsx(Cs,{style:{fontSize:"16px"}})})]})}],data:[{id:"1",claimId:"CLM-1001",firstName:"John",lastName:"Doe",userDetails:"John Doe",status:"approved",priority:"high",amount:"$15,200",paidAmount:"$15,200",contact:"(555) 100-1001",nrCodes:"NR-001",acrLoadDates:"2024-01-15",avatar:"https://i.pravatar.cc/32?img=1"},{id:"2",claimId:"CLM-1002",firstName:"Jane",lastName:"Smith",userDetails:"Jane Smith",status:"pending",priority:"medium",amount:"$8,500",paidAmount:"$8,500",contact:"(555) 100-1002",nrCodes:"NR-002",acrLoadDates:"2024-01-16",avatar:"https://i.pravatar.cc/32?img=2"},{id:"3",claimId:"CLM-1003",firstName:"Bob",lastName:"Wilson",userDetails:"Bob Wilson",status:"review",priority:"low",amount:"$12,300",paidAmount:"$12,300",contact:"(555) 100-1003",nrCodes:"NR-003",acrLoadDates:"2024-01-17",avatar:"https://i.pravatar.cc/32?img=3"},{id:"4",claimId:"CLM-1004",firstName:"Alice",lastName:"Brown",userDetails:"Alice Brown",status:"rejected",priority:"high",amount:"$22,100",paidAmount:"$22,100",contact:"(555) 100-1004",nrCodes:"NR-004",acrLoadDates:"2024-01-18",avatar:"https://i.pravatar.cc/32?img=4"},{id:"5",claimId:"CLM-1005",firstName:"Charlie",lastName:"Davis",userDetails:"Charlie Davis",status:"approved",priority:"medium",amount:"$9,800",paidAmount:"$9,800",contact:"(555) 100-1005",nrCodes:"NR-005",acrLoadDates:"2024-01-19",avatar:"https://i.pravatar.cc/32?img=5"}],showToolbar:!0,toolbarTitle:"Enterprise Table with Custom Renders & Right Pinning",description:"Scroll horizontally to see the Actions column pinned to the right. Status and Priority use custom Chip renders.",showGlobalSearch:!0,showFilter:!0,showDownload:!0,onDownload:h(),maxHeight:"500px",selectable:!0,onRowSelect:h(),paginated:!0,itemsPerPage:10,onRowClick:h(),onOpen:h(),onClose:h(),containerClassName:"custom-container",scrollContainerClassName:"custom-scroll"},parameters:{docs:{description:{story:"Complete example showing all customization options including **right-side column pinning** (Actions column) and **custom cell rendering** (Status and Priority columns with Chips). Try scrolling horizontally to see the Actions column stay fixed on the right."}}}},ge={args:{groups:[{id:"high-priority",groupName:"High Priority Claims",groupDescription:"Urgent claims requiring immediate attention",defaultExpanded:!0,rows:[{id:"1001",claimId:"CLM-1001",firstName:"Sarah",lastName:"Johnson",userDetails:"Senior Analyst",nrCodes:"NR-H001",paidAmount:"$15,200",acrLoadDates:"March 10, 2025",contact:"(555) 100-1001",amount:"$15,200",avatar:"https://i.pravatar.cc/32?img=1",city:"New York",state:"NY",status:"Pending",priority:"High"},{id:"1002",claimId:"CLM-1002",firstName:"Michael",lastName:"Chen",userDetails:"Lead Processor",nrCodes:"NR-H002",paidAmount:"$22,500",acrLoadDates:"March 12, 2025",contact:"(555) 100-1002",amount:"$22,500",avatar:"https://i.pravatar.cc/32?img=2",city:"Los Angeles",state:"CA",status:"Approved",priority:"High"},{id:"1003",claimId:"CLM-1003",firstName:"Emily",lastName:"Rodriguez",userDetails:"Manager",nrCodes:"NR-H003",paidAmount:"$18,900",acrLoadDates:"March 14, 2025",contact:"(555) 100-1003",amount:"$18,900",avatar:"https://i.pravatar.cc/32?img=3",city:"Chicago",state:"IL",status:"Pending",priority:"High"}],customContent:n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[n.jsx(J,{label:"3 claims",size:"small"}),n.jsx(J,{label:"Urgent",size:"small"}),n.jsx(Y,{variant:"tertiary",size:"small",children:"Process All"})]})},{id:"medium-priority",groupName:"Medium Priority Claims",groupDescription:"Standard processing timeline",defaultExpanded:!0,rows:[{id:"2001",claimId:"CLM-2001",firstName:"David",lastName:"Thompson",userDetails:"Associate",nrCodes:"NR-M001",paidAmount:"$8,400",acrLoadDates:"March 16, 2025",contact:"(555) 200-2001",amount:"$8,400",avatar:"https://i.pravatar.cc/32?img=4",city:"Houston",state:"TX",status:"Approved",priority:"Medium"},{id:"2002",claimId:"CLM-2002",firstName:"Jessica",lastName:"Martinez",userDetails:"Specialist",nrCodes:"NR-M002",paidAmount:"$12,100",acrLoadDates:"March 18, 2025",contact:"(555) 200-2002",amount:"$12,100",avatar:"https://i.pravatar.cc/32?img=5",city:"Phoenix",state:"AZ",status:"Pending",priority:"Medium"}],customContent:n.jsx(J,{label:"2 claims",size:"small"})},{id:"completed",groupName:"Completed Claims",groupDescription:"Successfully processed and closed",defaultExpanded:!1,rows:[{id:"3001",claimId:"CLM-3001",firstName:"Robert",lastName:"Wilson",userDetails:"Senior Associate",nrCodes:"NR-C001",paidAmount:"$9,750",acrLoadDates:"March 5, 2025",contact:"(555) 300-3001",amount:"$9,750",avatar:"https://i.pravatar.cc/32?img=6",city:"Philadelphia",state:"PA",status:"Approved",priority:"Low"},{id:"3002",claimId:"CLM-3002",firstName:"Amanda",lastName:"Taylor",userDetails:"Analyst",nrCodes:"NR-C002",paidAmount:"$6,800",acrLoadDates:"March 7, 2025",contact:"(555) 300-3002",amount:"$6,800",avatar:"https://i.pravatar.cc/32?img=7",city:"San Antonio",state:"TX",status:"Approved",priority:"Low"},{id:"3003",claimId:"CLM-3003",firstName:"Christopher",lastName:"Anderson",userDetails:"Lead",nrCodes:"NR-C003",paidAmount:"$14,300",acrLoadDates:"March 8, 2025",contact:"(555) 300-3003",amount:"$14,300",avatar:"https://i.pravatar.cc/32?img=8",city:"San Diego",state:"CA",status:"Approved",priority:"Low"},{id:"3004",claimId:"CLM-3004",firstName:"Jennifer",lastName:"White",userDetails:"Supervisor",nrCodes:"NR-C004",paidAmount:"$11,200",acrLoadDates:"March 9, 2025",contact:"(555) 300-3004",amount:"$11,200",avatar:"https://i.pravatar.cc/32?img=9",city:"Dallas",state:"TX",status:"Approved",priority:"Low"}],customContent:n.jsx(J,{label:"4 claims",size:"small"})}],groupConfig:{expandPosition:"left",onGroupToggle:h()},initialColumns:[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0,width:48},{id:"claimId",label:"Claim ID",visible:!0,locked:!1,order:1,width:120},{id:"firstName",label:"First Name",visible:!0,locked:!1,order:2,width:150},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:3,width:150},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:4,width:180},{id:"paidAmount",label:"Amount",visible:!0,locked:!1,order:5,width:120},{id:"status",label:"Status",visible:!0,locked:!1,order:6,width:100},{id:"priority",label:"Priority",visible:!0,locked:!1,order:7,width:100}],showToolbar:!0,toolbarTitle:"Claims Management",description:"Grouped by priority level",selectable:!0,paginated:!1,showGlobalSearch:!0,showFilter:!0,onRowSelect:h()},parameters:{docs:{description:{story:`
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
        `}}}};var kt,At,Pt,Rt,Lt;ee.parameters={...ee.parameters,docs:{...(kt=ee.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Pt=(At=ee.parameters)==null?void 0:At.docs)==null?void 0:Pt.source},description:{story:`## With Side Panel

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
\`\`\``,...(Lt=(Rt=ee.parameters)==null?void 0:Rt.docs)==null?void 0:Lt.description}}};var It,Mt,zt,$t,Wt;te.parameters={...te.parameters,docs:{...(It=te.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(zt=(Mt=te.parameters)==null?void 0:Mt.docs)==null?void 0:zt.source},description:{story:`## With Modal

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
\`\`\``,...(Wt=($t=te.parameters)==null?void 0:$t.docs)==null?void 0:Wt.description}}};var jt,Et,Ft;Me.parameters={...Me.parameters,docs:{...(jt=Me.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(Ft=(Et=Me.parameters)==null?void 0:Et.docs)==null?void 0:Ft.source}}};var qt,Ht,Ot,Bt,Ut;ae.parameters={...ae.parameters,docs:{...(qt=ae.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Ot=(Ht=ae.parameters)==null?void 0:Ht.docs)==null?void 0:Ot.source},description:{story:`## With Sub-Headers (Nested Columns)

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
\`\`\``,...(Ut=(Bt=ae.parameters)==null?void 0:Bt.docs)==null?void 0:Ut.description}}};var Vt,Gt,Jt,Yt,_t;ne.parameters={...ne.parameters,docs:{...(Vt=ne.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Jt=(Gt=ne.parameters)==null?void 0:Gt.docs)==null?void 0:Jt.source},description:{story:`## With Filters & Filter Count Badge

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
- Search headers persist when side panel is closed`,...(_t=(Yt=ne.parameters)==null?void 0:Yt.docs)==null?void 0:_t.description}}};var Xt,Kt,Zt,Qt,ea;se.parameters={...se.parameters,docs:{...(Xt=se.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Always Visible Search Headers',
    showColumnSearchByDefault: true,
    onRowClick: fn(),
    onSort: fn()
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
}`,...(Zt=(Kt=se.parameters)==null?void 0:Kt.docs)==null?void 0:Zt.source},description:{story:`## New Feature: Always Show Search Headers

**What's New:**
- 🎛️ **Developer control** via showColumnSearchByDefault prop
- 📌 Force search headers to always be visible
- 🔧 Useful when you want search functionality always available

**Use Case:**
When you want column-specific search to be the primary filtering method,
set showColumnSearchByDefault to true to keep search headers always visible.`,...(ea=(Qt=se.parameters)==null?void 0:Qt.docs)==null?void 0:ea.description}}};var ta,aa,na,sa,ia;ie.parameters={...ie.parameters,docs:{...(ta=ie.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(na=(aa=ie.parameters)==null?void 0:aa.docs)==null?void 0:na.source},description:{story:`## New Feature: Custom Tabs in Side Panel

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
\`\`\``,...(ia=(sa=ie.parameters)==null?void 0:sa.docs)==null?void 0:ia.description}}};var oa,ra,la,da,ca;oe.parameters={...oe.parameters,docs:{...(oa=oe.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(la=(ra=oe.parameters)==null?void 0:ra.docs)==null?void 0:la.source},description:{story:`## New Feature: Click Outside to Close

**What's New:**
- 🖱️ **Click outside** the expanded panel to close it
- 🛡️ **Protected closing** - prevents closing if there are unsaved filter changes
- ⚠️ **Shake animation** + warning message when trying to close with unsaved changes

**Try it:**
1. Click "Filters" to open side panel
2. Click outside the panel - it closes (no unsaved changes)
3. Click "Filters" again, select a filter but DON'T click Apply
4. Try clicking outside - panel shakes and shows warning
5. Must click Apply/Cancel/Reset to close`,...(ca=(da=oe.parameters)==null?void 0:da.docs)==null?void 0:ca.description}}};var ua,ma,pa,ha,ba;re.parameters={...re.parameters,docs:{...(ua=re.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(pa=(ma=re.parameters)==null?void 0:ma.docs)==null?void 0:pa.source},description:{story:`## New Feature: Unsaved Changes Protection

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
5. Click Apply to save, Cancel to discard, or Reset to clear all`,...(ba=(ha=re.parameters)==null?void 0:ha.docs)==null?void 0:ba.description}}};var fa,ga,ya,Ca,wa;le.parameters={...le.parameters,docs:{...(fa=le.parameters)==null?void 0:fa.docs,source:{originalSource:`{
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
}`,...(ya=(ga=le.parameters)==null?void 0:ga.docs)==null?void 0:ya.source},description:{story:`## Loading State

Display a loading state while data is being fetched.

**Usage:**
\`\`\`tsx
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  loading={true}
  loadingClassName="custom-loading"
  loadingStyle={{ backgroundColor: '#f5f5f5' }}
/>
\`\`\``,...(wa=(Ca=le.parameters)==null?void 0:Ca.docs)==null?void 0:wa.description}}};var va,Sa,xa,Ta,Na;de.parameters={...de.parameters,docs:{...(va=de.parameters)==null?void 0:va.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    isInvalid: true,
    errorMessage: 'Failed to load data.',
    showToolbar: true,
    toolbarTitle: 'Error Loading Data'
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows an error state with custom error message using Typography component. Customize with \`errorClassName\` and \`errorStyle\` props.'
      }
    }
  }
}`,...(xa=(Sa=de.parameters)==null?void 0:Sa.docs)==null?void 0:xa.source},description:{story:`## Error State

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
\`\`\``,...(Na=(Ta=de.parameters)==null?void 0:Ta.docs)==null?void 0:Na.description}}};var Da,ka,Aa,Pa,Ra;ce.parameters={...ce.parameters,docs:{...(Da=ce.parameters)==null?void 0:Da.docs,source:{originalSource:`{
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
        story: 'Shows a custom empty state with title, description, and action button. All text uses Typography component. Customize with \`emptyStateClassName\` and \`emptyStateStyle\` props.'
      }
    }
  }
}`,...(Aa=(ka=ce.parameters)==null?void 0:ka.docs)==null?void 0:Aa.source},description:{story:`## Empty State

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
  emptyStateClassName="custom-empty"
  emptyStateStyle={{ padding: '60px' }}
/>
\`\`\``,...(Ra=(Pa=ce.parameters)==null?void 0:Pa.docs)==null?void 0:Ra.description}}};var La,Ia,Ma,za,$a;ue.parameters={...ue.parameters,docs:{...(La=ue.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(Ma=(Ia=ue.parameters)==null?void 0:Ia.docs)==null?void 0:Ma.source},description:{story:`## With Selection

Enable row selection with callback.

**Usage:**
\`\`\`tsx
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  selectable={true}
  onRowSelect={(selectedIds) => {}}
/>
\`\`\``,...($a=(za=ue.parameters)==null?void 0:za.docs)==null?void 0:$a.description}}};var Wa,ja,Ea,Fa,qa;me.parameters={...me.parameters,docs:{...(Wa=me.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  args: {
    initialColumns: getNestedColumnConfigs(),
    paginated: true,
    itemsPerPage: 5,
    showToolbar: true,
    toolbarTitle: 'Custom Pagination (5 per page)'
  },
  parameters: {
    docs: {
      description: {
        story: 'Customize pagination with \`itemsPerPage\` prop. This example shows 5 items per page.'
      }
    }
  }
}`,...(Ea=(ja=me.parameters)==null?void 0:ja.docs)==null?void 0:Ea.source},description:{story:`## Custom Pagination

Control pagination settings.

**Usage:**
\`\`\`tsx
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  paginated={true}
  itemsPerPage={25}
/>
\`\`\``,...(qa=(Fa=me.parameters)==null?void 0:Fa.docs)==null?void 0:qa.description}}};var Ha,Oa,Ba,Ua,Va;pe.parameters={...pe.parameters,docs:{...(Ha=pe.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Ba=(Oa=pe.parameters)==null?void 0:Oa.docs)==null?void 0:Ba.source},description:{story:`## Polymorphic Rendering

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
\`\`\``,...(Va=(Ua=pe.parameters)==null?void 0:Ua.docs)==null?void 0:Va.description}}};var Ga,Ja,Ya,_a,Xa;he.parameters={...he.parameters,docs:{...(Ga=he.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
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
}`,...(Ya=(Ja=he.parameters)==null?void 0:Ja.docs)==null?void 0:Ya.source},description:{story:`## Custom Toolbar

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
\`\`\``,...(Xa=(_a=he.parameters)==null?void 0:_a.docs)==null?void 0:Xa.description}}};var Ka,Za,Qa,en,tn;be.parameters={...be.parameters,docs:{...(Ka=be.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
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
}`,...(Qa=(Za=be.parameters)==null?void 0:Za.docs)==null?void 0:Qa.source},description:{story:`## Toolbar Customization

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
\`\`\``,...(tn=(en=be.parameters)==null?void 0:en.docs)==null?void 0:tn.description}}};var an,nn,sn,on,rn;fe.parameters={...fe.parameters,docs:{...(an=fe.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
      render: (value: any, _row: any) => {
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
      render: (value: any, _row: any) => {
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
      // Custom render with icon action buttons
      // Signature: (value, row, rowIndex) - value is ignored for actions column
      render: (_value: any, row: any) => <div style={{
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
}`,...(sn=(nn=fe.parameters)==null?void 0:nn.docs)==null?void 0:sn.source},description:{story:`## Full Customization

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
\`\`\``,...(rn=(on=fe.parameters)==null?void 0:on.docs)==null?void 0:rn.description}}};var ln,dn,cn,un,mn;ge.parameters={...ge.parameters,docs:{...(ln=ge.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(cn=(dn=ge.parameters)==null?void 0:dn.docs)==null?void 0:cn.source},description:{story:`## Table with Row Grouping

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
\`\`\``,...(mn=(un=ge.parameters)==null?void 0:un.docs)==null?void 0:mn.description}}};const Ni=["WithSidePanel","WithModal","WithBothControls","WithSubHeaders","WithFilterCountBadge","WithAlwaysVisibleSearchHeaders","WithCustomTabs","WithClickOutsideToClose","WithUnsavedChangesProtection","LoadingState","ErrorState","EmptyState","WithSelection","CustomPagination","PolymorphicRendering","CustomToolbar","ToolbarCustomization","FullCustomization","WithGrouping"];export{me as CustomPagination,he as CustomToolbar,ce as EmptyState,de as ErrorState,fe as FullCustomization,le as LoadingState,pe as PolymorphicRendering,be as ToolbarCustomization,se as WithAlwaysVisibleSearchHeaders,Me as WithBothControls,oe as WithClickOutsideToClose,ie as WithCustomTabs,ne as WithFilterCountBadge,ge as WithGrouping,te as WithModal,ue as WithSelection,ee as WithSidePanel,ae as WithSubHeaders,re as WithUnsavedChangesProtection,Ni as __namedExportsOrder,Ti as default};
