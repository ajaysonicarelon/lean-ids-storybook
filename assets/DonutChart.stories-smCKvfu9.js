import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as ce,R as ue}from"./index-Bv9Y92EF.js";import{g as m}from"./styled-components.browser.esm-CVW2bgxI.js";import{T as r}from"./Typography-CidD3oMh.js";import{I as Ie}from"./Icon-DSqvK6Kv.js";import{T as Me}from"./Tooltip-BfGYN0oC.js";import{D as Ir}from"./DataVisualizationCard-ZB8oZ4kV.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Search-Bpcrs37S.js";import"./createSvgIcon-Ce6eLUkr.js";import"./ExpandMore-Bd7rmlfk.js";import"./Close-CtL5j8iM.js";import"./Settings-aYyvLXSG.js";import"./Home-Bococija.js";import"./index-BBZT4uEL.js";import"./index-CJSLNY_5.js";import"./Select-xWzEopA2.js";import"./Chip--FEJIdFJ.js";import"./FieldImportance-D7BkpLTs.js";import"./InputField-BAIr4sa2.js";import"./HelpingText-DBD3feHR.js";import"./Checkbox-D2w4VPJI.js";import"./RadioButton-DHcwHeDp.js";const Mr=m.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: ${({$clickable:t})=>t?"pointer":"default"};
  opacity: ${({$active:t})=>t?1:.5};
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: ${({$clickable:t,$active:s})=>t&&!s?.7:1};
  }
`,Rr=m.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({$color:t})=>t};
  flex-shrink: 0;
`,kr=m.span`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #222222; // gray-900
  white-space: nowrap;
  text-decoration: ${({$active:t})=>t?"none":"line-through"};
`,dr=({color:t,label:s,active:i=!0,onClick:l,className:d})=>{const p=!!l,h=()=>{l&&l()};return e.jsxs(Mr,{$active:i,$clickable:p,onClick:h,className:d,type:"button","aria-label":`${s} - ${i?"active":"inactive"}`,"aria-pressed":p?i:void 0,children:[e.jsx(Rr,{$color:t}),e.jsx(kr,{$active:i,children:s})]})};dr.__docgenInfo={description:"",methods:[],displayName:"ChartLegend",props:{color:{required:!0,tsType:{name:"string"},description:"Color for the indicator dot"},label:{required:!0,tsType:{name:"string"},description:"Metric label text"},active:{required:!1,tsType:{name:"boolean"},description:"Whether the legend item is active (affects opacity)",defaultValue:{value:"true",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for toggling metric visibility"},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};const de=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing[9]};
  width: ${({$width:t})=>t||"auto"};
  max-width: ${({$maxWidth:t})=>t};
  min-width: ${({$minWidth:t})=>t};
  opacity: ${({$disabled:t})=>t?.5:1};
  pointer-events: ${({$disabled:t})=>t?"none":"auto"};
  cursor: ${({$disabled:t})=>t?"not-allowed":"default"};
`,Er=m.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:t})=>t.spacing[2]};
`,Ar=m.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:t})=>t.spacing[7]};
  height: ${({theme:t})=>t.spacing[7]};
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({theme:t})=>t.colors.semantic.text.secondary};
  padding: 0;
  
  &:hover {
    color: ${({theme:t})=>t.colors.semantic.text.primary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:t})=>t.colors.semantic.focus.indicator};
    outline-offset: 2px;
    border-radius: ${({theme:t})=>t.borderRadius.sm};
  }
  
  &:active {
    color: ${({theme:t})=>t.colors.semantic.text.secondary};
  }
`,Fr=m.div`
  display: flex;
  flex-direction: ${({$layout:t})=>t==="horizontal"?"row":"column"};
  gap: ${({theme:t})=>t.spacing[9]};
  align-items: ${({$layout:t})=>t==="horizontal"?"flex-start":"center"};
  width: 100%;
`,Pr=m.div`
  position: relative;
  flex-shrink: 0;
`,Re=m.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
`,Br=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:t})=>`${t.spacing[6]} ${t.spacing[5]}`};
  align-items: center;
  justify-content: ${({$layout:t})=>t==="horizontal"?"flex-start":"center"};
  width: ${({$layout:t})=>t==="horizontal"?"auto":"100%"};
`,ge=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:t})=>t.spacing[5]};
  padding: ${({theme:t})=>t.spacing[10]};
  text-align: center;
`,Lr=m(ge)`
  color: ${({theme:t})=>t.colors.semantic.text.error};
`,Nr=(t,s)=>{const i=t.reduce((x,f)=>x+f.value,0),l=s/2,d=l*.6,p=l-d;let h=-90;return t.map(x=>{const f=x.value/i,C=f*360,Z=h,g=h+C;return h=g,{...x,percentage:f,startAngle:Z,endAngle:g,strokeWidth:p,radius:d+p/2}})},n=ce.forwardRef(({as:t,width:s,maxWidth:i,minWidth:l,title:d,data:p,centerValue:h,showCenterValue:x=!0,autoCalculateCenterValue:f=!1,centerValueFormatter:C,layout:Z="vertical",size:g=196,showInfoIcon:pe=!1,onInfoClick:ve,infoTooltipContent:me,customHeader:ee,customCenterContent:te,customLegend:ae,emptyContent:ur,errorContent:pr,loadingContent:mr,isLoading:hr=!1,isInvalid:gr=!1,errorMessage:yr="An error occurred while loading the chart",isEmpty:vr=!1,emptyMessage:fr="No data available",disabled:y=!1,onLegendClick:fe,onSegmentHover:xe,onSegmentClick:Ce,className:re,style:oe,headerClassName:xr,chartClassName:Cr,legendsClassName:br,centerValueClassName:be,...ne},ie)=>{const[b,wr]=ce.useState(new Set(p.map((a,o)=>o))),[w,we]=ce.useState({visible:!1,heading:"",description:"",x:0,y:0}),[D,De]=ce.useState({visible:!1,x:0,y:0}),Se=a=>{y||(fe?fe(a):wr(o=>{const u=new Set(o);return u.has(a)?u.delete(a):u.add(a),u}))},Dr=(a,o,u)=>{y||(xe&&xe({label:o.label,value:o.value,color:o.color},u),we({visible:!0,heading:o.label,description:`Value: ${o.value}`,x:a.clientX+15,y:a.clientY-40}))},Sr=(a,o)=>{y||Ce&&Ce({label:a.label,value:a.value,color:a.color},o)},Tr=()=>{we({visible:!1,heading:"",description:"",x:0,y:0})},$r=a=>{if(ve&&ve(),me){const o=a.currentTarget.getBoundingClientRect();De(u=>({visible:!u.visible,x:o.left,y:o.bottom+10}))}};ue.useEffect(()=>{if(D.visible){const a=()=>{De({visible:!1,x:0,y:0})};return document.addEventListener("click",a),()=>document.removeEventListener("click",a)}},[D.visible]);const se=t||"div",Vr=vr||!p||p.length===0,Te=p.map((a,o)=>({...a,originalIndex:o,value:b.has(o)?a.value:0})),$e=Nr(Te,g),le=g/2,he=ue.useMemo(()=>{if(!f)return h;const a=p.filter((o,u)=>b.has(u)).reduce((o,u)=>o+u.value,0);return a===0?h||"0":C?C(a):a.toString()},[f,h,p,b,C]);return hr?e.jsx(de,{as:se,ref:ie,className:re,style:oe,$width:s,$maxWidth:i,$minWidth:l,$disabled:y,...ne,children:mr||e.jsx(ge,{children:e.jsx(r,{variant:"body",color:"secondary",children:"Loading chart data..."})})}):gr?e.jsx(de,{as:se,ref:ie,className:re,style:oe,$width:s,$maxWidth:i,$minWidth:l,$disabled:y,...ne,children:pr||e.jsxs(Lr,{children:[e.jsx(Ie,{name:"Error",size:"medium"}),e.jsx(r,{variant:"body",weight:"semibold",children:yr})]})}):Vr?e.jsx(de,{as:se,ref:ie,className:re,style:oe,$width:s,$maxWidth:i,$minWidth:l,$disabled:y,...ne,children:ur||e.jsx(ge,{children:e.jsx(r,{variant:"body",color:"secondary",children:fr})})}):e.jsxs(de,{as:se,ref:ie,className:re,style:oe,$width:s,$maxWidth:i,$minWidth:l,$disabled:y,role:"img","aria-label":d?`${d} donut chart`:"Donut chart",...ne,children:[ee?typeof ee=="function"?ee({title:d,showInfoIcon:pe}):ee:d||pe?e.jsxs(Er,{className:xr,children:[d&&e.jsx(r,{variant:"body",weight:"semibold",as:"h4",children:d}),pe&&e.jsx(Ar,{onClick:a=>{a.stopPropagation(),$r(a)},"aria-label":"More information",disabled:y,children:e.jsx(Ie,{name:"Info",size:"small"})})]}):null,me&&e.jsx(Me,{visible:D.visible,heading:me,x:D.x,y:D.y,variant:"pointer",pointerPosition:"top"}),e.jsxs(Fr,{$layout:Z,children:[e.jsxs(Pr,{className:Cr,children:[e.jsx("svg",{width:g,height:g,viewBox:`0 0 ${g} ${g}`,"aria-hidden":"true",children:$e.map((a,o)=>{const u=a.radius,Ve=2*Math.PI*u,jr=`${a.percentage*Ve} ${Ve}`;let je=-90;for(let S=0;S<o;S++)je+=$e[S].percentage*360;return e.jsx("circle",{cx:le,cy:le,r:u,fill:"none",stroke:a.color,strokeWidth:a.strokeWidth,strokeDasharray:jr,strokeDashoffset:0,strokeLinecap:"butt",transform:`rotate(${je} ${le} ${le})`,onMouseMove:S=>Dr(S,a,o),onMouseLeave:Tr,onClick:()=>Sr(a,o),style:{cursor:y?"not-allowed":"pointer",transition:"stroke-dasharray 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",willChange:"stroke-dasharray, transform"}},o)})}),te?e.jsx(Re,{className:be,children:typeof te=="function"?te({centerValue:he}):te}):x&&he&&Te.length>0?e.jsx(Re,{className:be,children:e.jsx(r,{variant:"headingM",weight:"semibold",children:he})}):null,e.jsx(Me,{visible:w.visible,heading:w.heading,description:w.description,x:w.x,y:w.y,variant:"default"})]}),ae?typeof ae=="function"?ae({data:p,activeMetrics:b,onToggle:Se}):ae:e.jsx(Br,{$layout:Z,className:br,children:p.map((a,o)=>e.jsx(dr,{color:a.color,label:a.label,active:b.has(o),onClick:()=>Se(o)},o))})]})]})});n.displayName="DonutChart";n.__docgenInfo={description:"",methods:[],displayName:"DonutChart",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Render as a different HTML element or custom component
@default 'div'`},width:{required:!1,tsType:{name:"string"},description:`Custom width (supports px, rem, %, vw, min(), max())
@default 'auto'
@example '100%' | 'min(90vw, 37.5rem)' | '25rem'`},maxWidth:{required:!1,tsType:{name:"string"},description:`Maximum width constraint
@example '600px' | '37.5rem'`},minWidth:{required:!1,tsType:{name:"string"},description:`Minimum width constraint
@example '200px' | '12.5rem'`},title:{required:!1,tsType:{name:"ReactNode"},description:"Chart title (use Typography component for custom rendering)"},data:{required:!0,tsType:{name:"Array",elements:[{name:"DonutChartData"}],raw:"DonutChartData[]"},description:"Array of data points (2-6 metrics recommended)"},centerValue:{required:!1,tsType:{name:"string"},description:`Center KPI value to display
If autoCalculateCenterValue is true, this serves as a fallback when no segments are active
@example '$3m' | '85%' | '1,234'`},showCenterValue:{required:!1,tsType:{name:"boolean"},description:`Show center value
@default true`,defaultValue:{value:"true",computed:!1}},autoCalculateCenterValue:{required:!1,tsType:{name:"boolean"},description:`Automatically calculate and update center value based on active segments
When true, the center value will update when legends are toggled
@default false`,defaultValue:{value:"false",computed:!1}},centerValueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(total: number) => string",signature:{arguments:[{type:{name:"number"},name:"total"}],return:{name:"string"}}},description:"Custom formatter for auto-calculated center value\nReceives the sum of active segment values\n@example (total) => `$${total.toFixed(1)}m`\n@example (total) => `${Math.round(total)}%`\n@default (total) => total.toString()"},layout:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:`Layout orientation
@default 'vertical'`,defaultValue:{value:"'vertical'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:`Chart size (diameter in pixels)
@default 196`,defaultValue:{value:"196",computed:!1}},showInfoIcon:{required:!1,tsType:{name:"boolean"},description:`Show info icon next to title
@default false`,defaultValue:{value:"false",computed:!1}},onInfoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Info icon click handler"},infoTooltipContent:{required:!1,tsType:{name:"string"},description:"Info icon tooltip content"},customHeader:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { title?: ReactNode; showInfoIcon?: boolean }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom header content (replaces default title + info icon)"},customCenterContent:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { centerValue?: string }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom center content (replaces default center value)"},customLegend:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { data: DonutChartData[]; activeMetrics: Set<number>; onToggle: (index: number) => void }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom legend renderer"},emptyContent:{required:!1,tsType:{name:"ReactNode"},description:"Custom empty state content"},errorContent:{required:!1,tsType:{name:"ReactNode"},description:"Custom error state content"},loadingContent:{required:!1,tsType:{name:"ReactNode"},description:"Custom loading state content"},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows loading indicator
@default false`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Error state - shows error message
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true",defaultValue:{value:"'An error occurred while loading the chart'",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state - shows when data array is empty
@default false`,defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:`Empty state message
@default 'No data available'`,defaultValue:{value:"'No data available'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state - prevents interaction
@default false`,defaultValue:{value:"false",computed:!1}},onLegendClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Legend click handler (for custom toggle behavior)"},onSegmentHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(segment: DonutChartData, index: number) => void",signature:{arguments:[{type:{name:"DonutChartData"},name:"segment"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Segment hover handler"},onSegmentClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(segment: DonutChartData, index: number) => void",signature:{arguments:[{type:{name:"DonutChartData"},name:"segment"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Segment click handler"},className:{required:!1,tsType:{name:"string"},description:"Custom className for root container"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for root container"},headerClassName:{required:!1,tsType:{name:"string"},description:"Custom className for header section"},chartClassName:{required:!1,tsType:{name:"string"},description:"Custom className for chart SVG container"},legendsClassName:{required:!1,tsType:{name:"string"},description:"Custom className for legends container"},centerValueClassName:{required:!1,tsType:{name:"string"},description:"Custom className for center value"}},composes:["Omit"]};const mo={title:"Data Visualization/DonutChart",component:n,parameters:{layout:"padded",docs:{description:{component:`
Enterprise-grade donut chart visualization component for displaying 2-6 metrics with optional center KPI.

**Features:**
- ✅ forwardRef support for DOM access
- ✅ Polymorphic 'as' prop
- ✅ All 8 states (default, hover, focus, active, disabled, loading, empty, error)
- ✅ Typography component (no hardcoded text styles)
- ✅ Design tokens (no hardcoded values)
- ✅ Width/maxWidth/minWidth props for responsive design
- ✅ Multiple customization slots (header, center content, legends)
- ✅ Full accessibility (ARIA, keyboard navigation)
- ✅ Comprehensive event callbacks
- ✅ **Auto-calculate center value** - Automatically updates when legends are toggled

**Auto-Calculate Center Value:**
Enable \`autoCalculateCenterValue={true}\` to automatically sum active segments and display in the center.
Use \`centerValueFormatter\` to customize the display format (e.g., currency, percentage, decimals).

**Usage:**
Always wrap in DataVisualizationCard for consistent styling in production.
        `}}},tags:["autodocs"]},qr=[{label:"Product A",value:60,color:"#6222BC"},{label:"Product B",value:40,color:"#E3725F"}],v=[{label:"Product A",value:45,color:"#6222BC"},{label:"Product B",value:30,color:"#E3725F"},{label:"Product C",value:25,color:"#1AC2C1"}],c=[{label:"Product A",value:40,color:"#6222BC"},{label:"Product B",value:25,color:"#E3725F"},{label:"Product C",value:20,color:"#1AC2C1"},{label:"Product D",value:15,color:"#F5C563"}],ye=[{label:"Product A",value:30,color:"#6222BC"},{label:"Product B",value:25,color:"#E3725F"},{label:"Product C",value:20,color:"#1AC2C1"},{label:"Product D",value:15,color:"#F5C563"},{label:"Product E",value:10,color:"#3E71C2"}],Wr=[{label:"Product A",value:25,color:"#6222BC"},{label:"Product B",value:20,color:"#E3725F"},{label:"Product C",value:18,color:"#1AC2C1"},{label:"Product D",value:15,color:"#F5C563"},{label:"Product E",value:12,color:"#3E71C2"},{label:"Product F",value:10,color:"#7AC943"}],T={args:{title:"Revenue Distribution",showInfoIcon:!0,data:qr,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},$={args:{title:"Market Share",showInfoIcon:!0,data:v,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},V={args:{title:"Sales by Category",showInfoIcon:!0,data:c,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},j={args:{title:"Product Performance",showInfoIcon:!0,data:ye,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},I={args:{title:"Regional Sales",showInfoIcon:!0,data:Wr,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},M={args:{title:"Revenue Breakdown",showInfoIcon:!0,data:c,centerValue:"$3m",showCenterValue:!0,layout:"horizontal"}},R={args:{title:"Distribution Analysis",showInfoIcon:!0,data:v,showCenterValue:!1,layout:"vertical"}},k={args:{data:v,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},E={args:{title:"Simple Chart",showInfoIcon:!1,data:v,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},A={args:{title:"Large Donut Chart",showInfoIcon:!0,data:c,centerValue:"$5.2m",showCenterValue:!0,layout:"vertical",size:250}},F={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(n,{title:"Interactive Chart (Click Legends)",showInfoIcon:!0,data:ye,centerValue:"$3m",showCenterValue:!0,layout:"vertical"})})},P={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx("div",{children:e.jsx(r,{variant:"body",color:"secondary",style:{marginBottom:"12px"},children:"Click legends to toggle segments. The center value will update automatically."})}),e.jsx(n,{title:"Revenue Distribution (Auto-Calculate)",data:ye,autoCalculateCenterValue:!0,centerValueFormatter:t=>`$${t}m`,showCenterValue:!0,layout:"vertical"})]})},B={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Currency Format ($XXm)"}),e.jsx(n,{title:"Revenue",data:c,autoCalculateCenterValue:!0,centerValueFormatter:t=>`$${t}m`,layout:"vertical"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Percentage Format"}),e.jsx(n,{title:"Market Share",data:[{label:"Product A",value:35,color:"#6222BC"},{label:"Product B",value:25,color:"#E3725F"},{label:"Product C",value:20,color:"#1AC2C1"},{label:"Product D",value:20,color:"#F5C563"}],autoCalculateCenterValue:!0,centerValueFormatter:t=>`${t}%`,layout:"vertical"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Formatted Number (1,234)"}),e.jsx(n,{title:"Total Users",data:[{label:"Active",value:1250,color:"#6222BC"},{label:"Inactive",value:850,color:"#E3725F"},{label:"Pending",value:400,color:"#1AC2C1"}],autoCalculateCenterValue:!0,centerValueFormatter:t=>t.toLocaleString(),layout:"vertical"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Decimal Format (XX.X)"}),e.jsx(n,{title:"Performance Score",data:[{label:"Excellent",value:8.5,color:"#6222BC"},{label:"Good",value:6.2,color:"#E3725F"},{label:"Average",value:4.3,color:"#1AC2C1"}],autoCalculateCenterValue:!0,centerValueFormatter:t=>t.toFixed(1),layout:"vertical"})]})]})},L={render:()=>e.jsx("div",{style:{width:"500px"},children:e.jsx(Ir,{title:"Revenue Distribution",showInfoIcon:!0,infoTooltipContent:"Revenue breakdown by product category",showTimeRange:!0,timeRangeValue:"Last 7 days",children:e.jsx(n,{data:c,centerValue:"$3m",showCenterValue:!0,layout:"vertical"})})})},N={args:{title:"Revenue Distribution",data:c,isLoading:!0}},q={args:{title:"Revenue Distribution",data:c,isInvalid:!0,errorMessage:"Failed to load chart data. Please try again."}},W={args:{title:"Revenue Distribution",data:[],isEmpty:!0,emptyMessage:"No revenue data available for the selected period"}},z={args:{title:"Revenue Distribution (Disabled)",data:c,centerValue:"$3m",disabled:!0}},H={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Full Width (100%)"}),e.jsx(n,{title:"Revenue Distribution",data:v,centerValue:"$3m",width:"100%",layout:"horizontal"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Fluid with Max Width (min(90vw, 37.5rem))"}),e.jsx(n,{title:"Market Share",data:v,centerValue:"$2.5m",width:"min(90vw, 37.5rem)",layout:"vertical"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Fixed Width (25rem)"}),e.jsx(n,{title:"Sales by Category",data:c,centerValue:"$4.2m",width:"25rem",layout:"vertical"})]})]})},X={render:()=>e.jsx(n,{data:c,centerValue:"$3m",customHeader:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(r,{variant:"headingM",weight:"semibold",children:"Custom Header Title"}),e.jsx(r,{variant:"caption",color:"secondary",children:"This is a custom header with subtitle"})]})})},U={render:()=>e.jsx(n,{title:"Revenue Distribution",data:c,customCenterContent:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[e.jsx(r,{variant:"headingL",weight:"semibold",children:"$3.2M"}),e.jsx(r,{variant:"caption",color:"secondary",children:"Total"})]})})},O={render:()=>e.jsx(n,{title:"Revenue Distribution",data:c,centerValue:"$3m",customLegend:({data:t,activeMetrics:s,onToggle:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%"},children:[e.jsx(r,{variant:"body",weight:"semibold",style:{marginBottom:"4px"},children:"Product Categories"}),t.map((l,d)=>e.jsxs("div",{onClick:()=>i(d),style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",opacity:s.has(d)?1:.5},children:[e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",backgroundColor:l.color}}),e.jsxs(r,{variant:"body",children:[l.label,": ",l.value]})]},d))]})})},_={render:()=>e.jsx(n,{title:"Revenue Distribution",data:[],isEmpty:!0,emptyContent:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",padding:"40px"},children:[e.jsx(r,{variant:"headingM",weight:"semibold",children:"No Data Available"}),e.jsx(r,{variant:"body",color:"secondary",style:{textAlign:"center"},children:"There is no revenue data for the selected time period. Try selecting a different date range."})]})})},K={render:()=>e.jsx(n,{title:"Revenue Distribution",data:c,isInvalid:!0,errorContent:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",padding:"40px"},children:[e.jsx(r,{variant:"headingM",weight:"semibold",color:"error",children:"Connection Error"}),e.jsx(r,{variant:"body",color:"secondary",style:{textAlign:"center"},children:"Unable to connect to the server. Please check your internet connection and try again."})]})})},G={render:()=>{const[t,s]=ue.useState("No events yet");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(n,{title:"Interactive Chart",data:c,centerValue:"$3m",onLegendClick:i=>s(`Legend clicked: ${c[i].label}`),onSegmentHover:(i,l)=>s(`Segment hovered: ${i.label}`),onSegmentClick:(i,l)=>s(`Segment clicked: ${i.label}`)}),e.jsxs("div",{style:{padding:"12px",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx(r,{variant:"caption",weight:"semibold",children:"Last Event:"}),e.jsx(r,{variant:"caption",style:{marginLeft:"8px"},children:t})]})]})}},Y={render:()=>{const t=ue.useRef(null),s=()=>{var i;(i=t.current)==null||i.scrollIntoView({behavior:"smooth",block:"center"})};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"body",style:{marginBottom:"12px"},children:"Click the button to scroll to the chart (demonstrates ref access)"}),e.jsx("button",{onClick:s,style:{padding:"8px 16px",cursor:"pointer"},children:"Scroll to Chart"})]}),e.jsx("div",{style:{height:"100vh"}}),e.jsx(n,{ref:t,title:"Chart with Ref",data:c,centerValue:"$3m"}),e.jsx("div",{style:{height:"100vh"}})]})}},J={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Rendered as <section>"}),e.jsx(n,{as:"section",title:"Revenue Distribution",data:v,centerValue:"$3m"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Rendered as <article>"}),e.jsx(n,{as:"article",title:"Market Share",data:v,centerValue:"$2.5m"})]})]})},Q={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Custom Background & Border"}),e.jsx(n,{title:"Revenue Distribution",data:c,centerValue:"$3m",style:{backgroundColor:"#f9fafb",border:"2px solid #e5e7eb",borderRadius:"8px",padding:"20px"}})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Custom Header & Chart Styling"}),e.jsx(n,{title:"Market Share",data:v,centerValue:"$2.5m",headerClassName:"custom-header",chartClassName:"custom-chart",legendsClassName:"custom-legends",style:{backgroundColor:"#fef3c7",padding:"16px",borderRadius:"12px"}})]})]})};var ke,Ee,Ae,Fe,Pe;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    title: 'Revenue Distribution',
    showInfoIcon: true,
    data: twoMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(Ae=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source},description:{story:"2 Metrics - Vertical layout with center KPI",...(Pe=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.description}}};var Be,Le,Ne,qe,We;$.parameters={...$.parameters,docs:{...(Be=$.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    title: 'Market Share',
    showInfoIcon: true,
    data: threeMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(Ne=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source},description:{story:"3 Metrics - Vertical layout with center KPI",...(We=(qe=$.parameters)==null?void 0:qe.docs)==null?void 0:We.description}}};var ze,He,Xe,Ue,Oe;V.parameters={...V.parameters,docs:{...(ze=V.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    title: 'Sales by Category',
    showInfoIcon: true,
    data: fourMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(Xe=(He=V.parameters)==null?void 0:He.docs)==null?void 0:Xe.source},description:{story:"4 Metrics - Vertical layout with center KPI",...(Oe=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:Oe.description}}};var _e,Ke,Ge,Ye,Je;j.parameters={...j.parameters,docs:{...(_e=j.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    title: 'Product Performance',
    showInfoIcon: true,
    data: fiveMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(Ge=(Ke=j.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source},description:{story:"5 Metrics - Vertical layout with center KPI",...(Je=(Ye=j.parameters)==null?void 0:Ye.docs)==null?void 0:Je.description}}};var Qe,Ze,et,tt,at;I.parameters={...I.parameters,docs:{...(Qe=I.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    title: 'Regional Sales',
    showInfoIcon: true,
    data: sixMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(et=(Ze=I.parameters)==null?void 0:Ze.docs)==null?void 0:et.source},description:{story:"6 Metrics - Vertical layout with center KPI",...(at=(tt=I.parameters)==null?void 0:tt.docs)==null?void 0:at.description}}};var rt,ot,nt,it,st;M.parameters={...M.parameters,docs:{...(rt=M.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    title: 'Revenue Breakdown',
    showInfoIcon: true,
    data: fourMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'horizontal'
  }
}`,...(nt=(ot=M.parameters)==null?void 0:ot.docs)==null?void 0:nt.source},description:{story:"Horizontal layout - Chart on left, legends on right",...(st=(it=M.parameters)==null?void 0:it.docs)==null?void 0:st.description}}};var lt,ct,dt,ut,pt;R.parameters={...R.parameters,docs:{...(lt=R.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    title: 'Distribution Analysis',
    showInfoIcon: true,
    data: threeMetricsData,
    showCenterValue: false,
    layout: 'vertical'
  }
}`,...(dt=(ct=R.parameters)==null?void 0:ct.docs)==null?void 0:dt.source},description:{story:"Without center value",...(pt=(ut=R.parameters)==null?void 0:ut.docs)==null?void 0:pt.description}}};var mt,ht,gt,yt,vt;k.parameters={...k.parameters,docs:{...(mt=k.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    data: threeMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(gt=(ht=k.parameters)==null?void 0:ht.docs)==null?void 0:gt.source},description:{story:"Without title",...(vt=(yt=k.parameters)==null?void 0:yt.docs)==null?void 0:vt.description}}};var ft,xt,Ct,bt,wt;E.parameters={...E.parameters,docs:{...(ft=E.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    title: 'Simple Chart',
    showInfoIcon: false,
    data: threeMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(Ct=(xt=E.parameters)==null?void 0:xt.docs)==null?void 0:Ct.source},description:{story:"Without info icon",...(wt=(bt=E.parameters)==null?void 0:bt.docs)==null?void 0:wt.description}}};var Dt,St,Tt,$t,Vt;A.parameters={...A.parameters,docs:{...(Dt=A.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  args: {
    title: 'Large Donut Chart',
    showInfoIcon: true,
    data: fourMetricsData,
    centerValue: '$5.2m',
    showCenterValue: true,
    layout: 'vertical',
    size: 250
  }
}`,...(Tt=(St=A.parameters)==null?void 0:St.docs)==null?void 0:Tt.source},description:{story:"Custom size - Larger donut",...(Vt=($t=A.parameters)==null?void 0:$t.docs)==null?void 0:Vt.description}}};var jt,It,Mt,Rt,kt;F.parameters={...F.parameters,docs:{...(jt=F.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <DonutChart title="Interactive Chart (Click Legends)" showInfoIcon={true} data={fiveMetricsData} centerValue="$3m" showCenterValue={true} layout="vertical" />
    </div>
}`,...(Mt=(It=F.parameters)==null?void 0:It.docs)==null?void 0:Mt.source},description:{story:`Interactive - Click legends to toggle metrics
This story demonstrates the smooth circular animation when toggling segments`,...(kt=(Rt=F.parameters)==null?void 0:Rt.docs)==null?void 0:kt.description}}};var Et,At,Ft,Pt,Bt;P.parameters={...P.parameters,docs:{...(Et=P.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div>
        <Typography variant="body" color="secondary" style={{
        marginBottom: '12px'
      }}>
          Click legends to toggle segments. The center value will update automatically.
        </Typography>
      </div>
      
      <DonutChart title="Revenue Distribution (Auto-Calculate)" data={fiveMetricsData} autoCalculateCenterValue={true} centerValueFormatter={total => \`$\${total}m\`} showCenterValue={true} layout="vertical" />
    </div>
}`,...(Ft=(At=P.parameters)==null?void 0:At.docs)==null?void 0:Ft.source},description:{story:`Auto-Calculate Center Value
Center value automatically updates when legends are toggled`,...(Bt=(Pt=P.parameters)==null?void 0:Pt.docs)==null?void 0:Bt.description}}};var Lt,Nt,qt,Wt,zt;B.parameters={...B.parameters,docs:{...(Lt=B.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Currency Format ($XXm)
        </Typography>
        <DonutChart title="Revenue" data={fourMetricsData} autoCalculateCenterValue={true} centerValueFormatter={total => \`$\${total}m\`} layout="vertical" />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Percentage Format
        </Typography>
        <DonutChart title="Market Share" data={[{
        label: 'Product A',
        value: 35,
        color: '#6222BC'
      }, {
        label: 'Product B',
        value: 25,
        color: '#E3725F'
      }, {
        label: 'Product C',
        value: 20,
        color: '#1AC2C1'
      }, {
        label: 'Product D',
        value: 20,
        color: '#F5C563'
      }]} autoCalculateCenterValue={true} centerValueFormatter={total => \`\${total}%\`} layout="vertical" />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Formatted Number (1,234)
        </Typography>
        <DonutChart title="Total Users" data={[{
        label: 'Active',
        value: 1250,
        color: '#6222BC'
      }, {
        label: 'Inactive',
        value: 850,
        color: '#E3725F'
      }, {
        label: 'Pending',
        value: 400,
        color: '#1AC2C1'
      }]} autoCalculateCenterValue={true} centerValueFormatter={total => total.toLocaleString()} layout="vertical" />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Decimal Format (XX.X)
        </Typography>
        <DonutChart title="Performance Score" data={[{
        label: 'Excellent',
        value: 8.5,
        color: '#6222BC'
      }, {
        label: 'Good',
        value: 6.2,
        color: '#E3725F'
      }, {
        label: 'Average',
        value: 4.3,
        color: '#1AC2C1'
      }]} autoCalculateCenterValue={true} centerValueFormatter={total => total.toFixed(1)} layout="vertical" />
      </div>
    </div>
}`,...(qt=(Nt=B.parameters)==null?void 0:Nt.docs)==null?void 0:qt.source},description:{story:`Auto-Calculate with Custom Formatter
Demonstrates different formatting options for auto-calculated values`,...(zt=(Wt=B.parameters)==null?void 0:Wt.docs)==null?void 0:zt.description}}};var Ht,Xt,Ut,Ot,_t;L.parameters={...L.parameters,docs:{...(Ht=L.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>
      <DataVisualizationCard title="Revenue Distribution" showInfoIcon={true} infoTooltipContent="Revenue breakdown by product category" showTimeRange={true} timeRangeValue="Last 7 days">
        <DonutChart data={fourMetricsData} centerValue="$3m" showCenterValue={true} layout="vertical" />
      </DataVisualizationCard>
    </div>
}`,...(Ut=(Xt=L.parameters)==null?void 0:Xt.docs)==null?void 0:Ut.source},description:{story:`Donut Chart in Card Container (Example)
Shows how to wrap the chart in DataVisualizationCard with Select component and date ranges`,...(_t=(Ot=L.parameters)==null?void 0:Ot.docs)==null?void 0:_t.description}}};var Kt,Gt,Yt,Jt,Qt;N.parameters={...N.parameters,docs:{...(Kt=N.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  args: {
    title: 'Revenue Distribution',
    data: fourMetricsData,
    isLoading: true
  }
}`,...(Yt=(Gt=N.parameters)==null?void 0:Gt.docs)==null?void 0:Yt.source},description:{story:`Loading State
Shows loading indicator while data is being fetched`,...(Qt=(Jt=N.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.description}}};var Zt,ea,ta,aa,ra;q.parameters={...q.parameters,docs:{...(Zt=q.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  args: {
    title: 'Revenue Distribution',
    data: fourMetricsData,
    isInvalid: true,
    errorMessage: 'Failed to load chart data. Please try again.'
  }
}`,...(ta=(ea=q.parameters)==null?void 0:ea.docs)==null?void 0:ta.source},description:{story:`Error State
Shows error message when data fails to load`,...(ra=(aa=q.parameters)==null?void 0:aa.docs)==null?void 0:ra.description}}};var oa,na,ia,sa,la;W.parameters={...W.parameters,docs:{...(oa=W.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  args: {
    title: 'Revenue Distribution',
    data: [],
    isEmpty: true,
    emptyMessage: 'No revenue data available for the selected period'
  }
}`,...(ia=(na=W.parameters)==null?void 0:na.docs)==null?void 0:ia.source},description:{story:`Empty State
Shows message when no data is available`,...(la=(sa=W.parameters)==null?void 0:sa.docs)==null?void 0:la.description}}};var ca,da,ua,pa,ma;z.parameters={...z.parameters,docs:{...(ca=z.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  args: {
    title: 'Revenue Distribution (Disabled)',
    data: fourMetricsData,
    centerValue: '$3m',
    disabled: true
  }
}`,...(ua=(da=z.parameters)==null?void 0:da.docs)==null?void 0:ua.source},description:{story:`Disabled State
Chart is visible but interaction is disabled`,...(ma=(pa=z.parameters)==null?void 0:pa.docs)==null?void 0:ma.description}}};var ha,ga,ya,va,fa;H.parameters={...H.parameters,docs:{...(ha=H.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Full Width (100%)
        </Typography>
        <DonutChart title="Revenue Distribution" data={threeMetricsData} centerValue="$3m" width="100%" layout="horizontal" />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Fluid with Max Width (min(90vw, 37.5rem))
        </Typography>
        <DonutChart title="Market Share" data={threeMetricsData} centerValue="$2.5m" width="min(90vw, 37.5rem)" layout="vertical" />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Fixed Width (25rem)
        </Typography>
        <DonutChart title="Sales by Category" data={fourMetricsData} centerValue="$4.2m" width="25rem" layout="vertical" />
      </div>
    </div>
}`,...(ya=(ga=H.parameters)==null?void 0:ga.docs)==null?void 0:ya.source},description:{story:`Responsive Width
Demonstrates width, maxWidth, and minWidth props for responsive design`,...(fa=(va=H.parameters)==null?void 0:va.docs)==null?void 0:fa.description}}};var xa,Ca,ba,wa,Da;X.parameters={...X.parameters,docs:{...(xa=X.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  render: () => <DonutChart data={fourMetricsData} centerValue="$3m" customHeader={<div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  }}>
          <Typography variant="headingM" weight="semibold">
            Custom Header Title
          </Typography>
          <Typography variant="caption" color="secondary">
            This is a custom header with subtitle
          </Typography>
        </div>} />
}`,...(ba=(Ca=X.parameters)==null?void 0:Ca.docs)==null?void 0:ba.source},description:{story:`Custom Header Slot
Replace default header with custom content`,...(Da=(wa=X.parameters)==null?void 0:wa.docs)==null?void 0:Da.description}}};var Sa,Ta,$a,Va,ja;U.parameters={...U.parameters,docs:{...(Sa=U.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  render: () => <DonutChart title="Revenue Distribution" data={fourMetricsData} customCenterContent={<div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px'
  }}>
          <Typography variant="headingL" weight="semibold">
            $3.2M
          </Typography>
          <Typography variant="caption" color="secondary">
            Total
          </Typography>
        </div>} />
}`,...($a=(Ta=U.parameters)==null?void 0:Ta.docs)==null?void 0:$a.source},description:{story:`Custom Center Content Slot
Replace default center value with custom content`,...(ja=(Va=U.parameters)==null?void 0:Va.docs)==null?void 0:ja.description}}};var Ia,Ma,Ra,ka,Ea;O.parameters={...O.parameters,docs:{...(Ia=O.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  render: () => <DonutChart title="Revenue Distribution" data={fourMetricsData} centerValue="$3m" customLegend={({
    data,
    activeMetrics,
    onToggle
  }) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%'
  }}>
          <Typography variant="body" weight="semibold" style={{
      marginBottom: '4px'
    }}>
            Product Categories
          </Typography>
          {data.map((item, index) => <div key={index} onClick={() => onToggle(index)} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      opacity: activeMetrics.has(index) ? 1 : 0.5
    }}>
              <div style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: item.color
      }} />
              <Typography variant="body">
                {item.label}: {item.value}
              </Typography>
            </div>)}
        </div>} />
}`,...(Ra=(Ma=O.parameters)==null?void 0:Ma.docs)==null?void 0:Ra.source},description:{story:`Custom Legend Slot
Replace default legends with custom rendering`,...(Ea=(ka=O.parameters)==null?void 0:ka.docs)==null?void 0:Ea.description}}};var Aa,Fa,Pa,Ba,La;_.parameters={..._.parameters,docs:{...(Aa=_.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  render: () => <DonutChart title="Revenue Distribution" data={[]} isEmpty={true} emptyContent={<div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    padding: '40px'
  }}>
          <Typography variant="headingM" weight="semibold">
            No Data Available
          </Typography>
          <Typography variant="body" color="secondary" style={{
      textAlign: 'center'
    }}>
            There is no revenue data for the selected time period. Try selecting a different date range.
          </Typography>
        </div>} />
}`,...(Pa=(Fa=_.parameters)==null?void 0:Fa.docs)==null?void 0:Pa.source},description:{story:`Custom Empty State
Custom content for empty state`,...(La=(Ba=_.parameters)==null?void 0:Ba.docs)==null?void 0:La.description}}};var Na,qa,Wa,za,Ha;K.parameters={...K.parameters,docs:{...(Na=K.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  render: () => <DonutChart title="Revenue Distribution" data={fourMetricsData} isInvalid={true} errorContent={<div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    padding: '40px'
  }}>
          <Typography variant="headingM" weight="semibold" color="error">
            Connection Error
          </Typography>
          <Typography variant="body" color="secondary" style={{
      textAlign: 'center'
    }}>
            Unable to connect to the server. Please check your internet connection and try again.
          </Typography>
        </div>} />
}`,...(Wa=(qa=K.parameters)==null?void 0:qa.docs)==null?void 0:Wa.source},description:{story:`Custom Error State
Custom content for error state`,...(Ha=(za=K.parameters)==null?void 0:za.docs)==null?void 0:Ha.description}}};var Xa,Ua,Oa,_a,Ka;G.parameters={...G.parameters,docs:{...(Xa=G.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
  render: () => {
    const [lastEvent, setLastEvent] = React.useState<string>('No events yet');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <DonutChart title="Interactive Chart" data={fourMetricsData} centerValue="$3m" onLegendClick={index => setLastEvent(\`Legend clicked: \${fourMetricsData[index].label}\`)} onSegmentHover={(segment, index) => setLastEvent(\`Segment hovered: \${segment.label}\`)} onSegmentClick={(segment, index) => setLastEvent(\`Segment clicked: \${segment.label}\`)} />
        
        <div style={{
        padding: '12px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>
          <Typography variant="caption" weight="semibold">
            Last Event:
          </Typography>
          <Typography variant="caption" style={{
          marginLeft: '8px'
        }}>
            {lastEvent}
          </Typography>
        </div>
      </div>;
  }
}`,...(Oa=(Ua=G.parameters)==null?void 0:Ua.docs)==null?void 0:Oa.source},description:{story:`With Event Callbacks
Demonstrates all available event callbacks`,...(Ka=(_a=G.parameters)==null?void 0:_a.docs)==null?void 0:Ka.description}}};var Ga,Ya,Ja,Qa,Za;Y.parameters={...Y.parameters,docs:{...(Ga=Y.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  render: () => {
    const chartRef = React.useRef<HTMLDivElement>(null);
    const scrollToChart = () => {
      chartRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <div>
          <Typography variant="body" style={{
          marginBottom: '12px'
        }}>
            Click the button to scroll to the chart (demonstrates ref access)
          </Typography>
          <button onClick={scrollToChart} style={{
          padding: '8px 16px',
          cursor: 'pointer'
        }}>
            Scroll to Chart
          </button>
        </div>
        
        <div style={{
        height: '100vh'
      }} />
        
        <DonutChart ref={chartRef} title="Chart with Ref" data={fourMetricsData} centerValue="$3m" />
        
        <div style={{
        height: '100vh'
      }} />
      </div>;
  }
}`,...(Ja=(Ya=Y.parameters)==null?void 0:Ya.docs)==null?void 0:Ja.source},description:{story:`ForwardRef Usage
Demonstrates ref forwarding to access DOM element`,...(Za=(Qa=Y.parameters)==null?void 0:Qa.docs)==null?void 0:Za.description}}};var er,tr,ar,rr,or;J.parameters={...J.parameters,docs:{...(er=J.parameters)==null?void 0:er.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Rendered as &lt;section&gt;
        </Typography>
        <DonutChart as="section" title="Revenue Distribution" data={threeMetricsData} centerValue="$3m" />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Rendered as &lt;article&gt;
        </Typography>
        <DonutChart as="article" title="Market Share" data={threeMetricsData} centerValue="$2.5m" />
      </div>
    </div>
}`,...(ar=(tr=J.parameters)==null?void 0:tr.docs)==null?void 0:ar.source},description:{story:`Polymorphic 'as' Prop
Render as different HTML element`,...(or=(rr=J.parameters)==null?void 0:rr.docs)==null?void 0:or.description}}};var nr,ir,sr,lr,cr;Q.parameters={...Q.parameters,docs:{...(nr=Q.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Custom Background & Border
        </Typography>
        <DonutChart title="Revenue Distribution" data={fourMetricsData} centerValue="$3m" style={{
        backgroundColor: '#f9fafb',
        border: '2px solid #e5e7eb',
        borderRadius: '8px',
        padding: '20px'
      }} />
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Custom Header & Chart Styling
        </Typography>
        <DonutChart title="Market Share" data={threeMetricsData} centerValue="$2.5m" headerClassName="custom-header" chartClassName="custom-chart" legendsClassName="custom-legends" style={{
        backgroundColor: '#fef3c7',
        padding: '16px',
        borderRadius: '12px'
      }} />
      </div>
    </div>
}`,...(sr=(ir=Q.parameters)==null?void 0:ir.docs)==null?void 0:sr.source},description:{story:`Style Overrides
Demonstrates className and style prop overrides`,...(cr=(lr=Q.parameters)==null?void 0:lr.docs)==null?void 0:cr.description}}};const ho=["TwoMetrics","ThreeMetrics","FourMetrics","FiveMetrics","SixMetrics","HorizontalLayout","WithoutCenterValue","WithoutTitle","WithoutInfoIcon","CustomSize","Interactive","AutoCalculateCenterValue","AutoCalculateWithFormatters","InCard","LoadingState","ErrorState","EmptyState","DisabledState","ResponsiveWidth","CustomHeader","CustomCenterContent","CustomLegend","CustomEmptyState","CustomErrorState","WithEventCallbacks","ForwardRefUsage","PolymorphicAs","StyleOverrides"];export{P as AutoCalculateCenterValue,B as AutoCalculateWithFormatters,U as CustomCenterContent,_ as CustomEmptyState,K as CustomErrorState,X as CustomHeader,O as CustomLegend,A as CustomSize,z as DisabledState,W as EmptyState,q as ErrorState,j as FiveMetrics,Y as ForwardRefUsage,V as FourMetrics,M as HorizontalLayout,L as InCard,F as Interactive,N as LoadingState,J as PolymorphicAs,H as ResponsiveWidth,I as SixMetrics,Q as StyleOverrides,$ as ThreeMetrics,T as TwoMetrics,G as WithEventCallbacks,R as WithoutCenterValue,E as WithoutInfoIcon,k as WithoutTitle,ho as __namedExportsOrder,mo as default};
