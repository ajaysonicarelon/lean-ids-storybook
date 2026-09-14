import{j as t}from"./jsx-runtime-DztICxWZ.js";import{r as f}from"./index-Bv9Y92EF.js";import{fn as L}from"./index-DH-M5T-F.js";import{g as o}from"./styled-components.browser.esm-CVW2bgxI.js";import{T as i}from"./Typography-CidD3oMh.js";import{I as je}from"./Icon-Cw_FlUY4.js";import{T as _e}from"./Tooltip-BfGYN0oC.js";import{D as Ai}from"./DataVisualizationCard-CuSuHgZm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Search-Bpcrs37S.js";import"./createSvgIcon-Ce6eLUkr.js";import"./ExpandMore-Rc_6KUah.js";import"./Close-CtL5j8iM.js";import"./Settings-aYyvLXSG.js";import"./Home-Bococija.js";import"./index-BBZT4uEL.js";import"./index-CJSLNY_5.js";import"./Select-BK_b8O5u.js";import"./Chip--FEJIdFJ.js";import"./FieldImportance-D7BkpLTs.js";import"./InputField-BAIr4sa2.js";import"./HelpingText-DBD3feHR.js";import"./Checkbox-D2w4VPJI.js";import"./RadioButton-DHcwHeDp.js";const Si=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  width: ${({$width:e})=>e||"100%"};
  max-width: ${({$maxWidth:e})=>e||"100%"};
  height: 100%;
`,$i=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Ti=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[7]};
  height: ${({theme:e})=>e.spacing[7]};
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.semantic.text.secondary};
  padding: 0;
  
  &:hover {
    color: ${({theme:e})=>e.colors.semantic.text.primary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ue=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  height: ${({$height:e})=>e};
  width: 100%;
`,ji=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  height: 100%;
  flex-shrink: 0;
`,ki=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[3]};
  height: min(${({theme:e})=>e.spacing[20]}, 30%);
  flex-shrink: 0;
`,Pe=o.div`
  white-space: nowrap;
  transform: rotate(-90deg);
`,Mi=o.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-shrink: 0;
  text-align: right;
  gap: ${({$labelSpacing:e})=>e||"0"};
  margin-right: ${({$labelMargin:e})=>e||"0"};
`,Bi=o.div`
  flex: 1;
  height: 100%;
  border-left: 2px solid ${({theme:e})=>e.colors.semantic.text.primary};
  border-bottom: 2px solid ${({theme:e})=>e.colors.semantic.text.primary};
  padding-left: ${({$paddingLeft:e,theme:n})=>e||n.spacing[5]};
  padding-right: ${({$paddingRight:e,theme:n})=>e||n.spacing[5]};
  padding-top: ${({$paddingTop:e,theme:n})=>e||n.spacing[7]};
  padding-bottom: ${({$paddingBottom:e})=>e||"0"};
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  position: relative;
  gap: ${({$barGap:e,theme:n})=>e||n.spacing[3]};
`,Ri=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  padding-top: ${({theme:e})=>e.spacing[7]};
  z-index: 0;
`,Di=o.div`
  width: 100%;
  height: 1px;
  background-image: linear-gradient(to right, ${({theme:e})=>e.colors.semantic.border.default} 50%, transparent 50%);
  background-size: ${({theme:e})=>e.spacing[2]} 1px;
  background-repeat: repeat-x;
`,Ei=o.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: flex-end;
  width: ${({theme:e})=>e.spacing[8]};
  min-width: ${({$minWidth:e,theme:n})=>e||n.spacing[8]};
  max-width: ${({$maxWidth:e,theme:n})=>e||n.spacing[12]};
  height: ${({$height:e})=>e};
  flex: 1 1 ${({theme:e})=>e.spacing[8]};
  cursor: pointer;
  transition: opacity 0.2s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    opacity: 0.85;
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`,Fi=o.div`
  width: 100%;
  height: ${({$height:e})=>e};
  background: ${({$color:e})=>e};
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  flex-shrink: 0;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
  will-change: height;
  cursor: ${({$clickable:e})=>e?"pointer":"default"};
  position: relative;
  
  ${({$clickable:e})=>e&&`
    &:hover {
      opacity: 0.8;
    }
    
    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
      z-index: 2;
    }
  `}
`,Gi=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  height: 100%;
  flex-shrink: 0;
`,zi=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[3]};
  height: min(${({theme:e})=>e.spacing[10]}, 20%);
  flex-shrink: 0;
`,qi=o.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-shrink: 0;
  text-align: right;
  padding-top: 1.55rem;
  padding-bottom: 1.75rem;
`,Ii=o.div`
  flex: 1;
  height: 100%;
  border-left: 2px solid ${({theme:e})=>e.colors.semantic.text.primary};
  border-bottom: 2px solid ${({theme:e})=>e.colors.semantic.text.primary};
  padding-left: ${({$paddingLeft:e})=>e||"0"};
  padding-right: ${({$paddingRight:e,theme:n})=>e||n.spacing[5]};
  padding-top: ${({$paddingTop:e})=>e||"0"};
  padding-bottom: ${({$paddingBottom:e})=>e||"0"};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  position: relative;
  gap: ${({$barGap:e})=>e||"0"};
`,Vi=o.div`
  display: flex;
  align-items: center;
  height: 1.875rem;
  min-height: ${({$minHeight:e})=>e||"auto"};
  max-height: ${({$maxHeight:e})=>e||"none"};
  width: 100%;
  flex-shrink: 0;
  position: relative;
`,Hi=o.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: ${({$width:e})=>Math.max(e,1)}%;
  min-width: ${({theme:e})=>e.spacing[2]};
  cursor: pointer;
  transition: opacity 0.2s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    opacity: 0.85;
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`,Wi=o.div`
  height: 100%;
  width: ${({$width:e})=>e}%;
  background: ${({$color:e})=>e};
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  flex-shrink: 0;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
  will-change: width;
  cursor: ${({$clickable:e})=>e?"pointer":"default"};
  position: relative;
  
  ${({$clickable:e})=>e&&`
    &:hover {
      opacity: 0.8;
    }
    
    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
      z-index: 2;
    }
  `}
`,Ni=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({$labelSpacing:e,theme:n})=>e||n.spacing[2]};
  align-items: center;
  width: 100%;
  padding-left: ${({$paddingLeft:e})=>e||"0"};
  padding-right: ${({theme:e})=>e.spacing[5]};
  margin-top: ${({$labelMargin:e})=>e||"0"};
`,Xi=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  width: 100%;
  padding-left: ${({$paddingLeft:e})=>e||"0"};
`,Qe=o.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: ${({$labelSpacing:e,theme:n})=>e||n.spacing[3]};
`,Yi=o.div`
  width: auto;
  min-width: ${({theme:e})=>e.spacing[8]};
  max-width: ${({theme:e})=>e.spacing[12]};
  flex: 1 1 ${({theme:e})=>e.spacing[8]};
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transform: ${({$rotation:e})=>e?`rotate(${e}deg)`:"none"};
  transform-origin: center;
`,T=o.div`
  ${({$flex:e})=>e?"flex: 1; min-width: 0;":"flex-shrink: 0;"}
  overflow: hidden;
  text-overflow: ellipsis;
`,Oi=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  width: 100%;
`,Ji=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`,Ki=o.button`
  display: flex;
  gap: ${({theme:e})=>e.spacing[1]};
  align-items: center;
  cursor: pointer;
  opacity: ${({$isActive:e})=>e?1:.4};
  transition: opacity 0.2s ease;
  background: transparent;
  border: none;
  padding: ${({theme:e})=>e.spacing[1]};
  
  &:hover {
    opacity: ${({$isActive:e})=>e?.8:.6};
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
  }
`,_i=o.div`
  width: ${({theme:e})=>e.spacing[3]};
  height: ${({theme:e})=>e.spacing[3]};
  border-radius: 50%;
  background: ${({$color:e})=>e};
  flex-shrink: 0;
`,Ui=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.semantic.background.primary};
  opacity: 0.9;
  z-index: 10;
`,Pi=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[8]};
  text-align: center;
`,Qi=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[8]};
  text-align: center;
  color: ${({theme:e})=>e.colors.semantic.text.error};
`,v=f.forwardRef(({title:e,data:n,orientation:g="vertical",showValues:m=!1,showGrid:ce=!0,height:ye="18.75rem",width:ai,maxWidth:ri,yAxisLabel:j,xAxisLabel:me,chartPadding:l,barGap:pe,xAxisLabelSpacing:ue,yAxisLabelSpacing:ke,axisLabelMargin:A,minBarWidth:he,maxBarWidth:ge,xAxisLabelRotation:ii,showLegend:ni=!1,legendTitle:Me,customLegend:Be,showInfoIcon:Re=!1,onInfoClick:De,infoTooltipContent:be,isLoading:fe=!1,loadingMessage:si="Loading chart data...",isEmpty:ve=!1,emptyMessage:oi="No data available",isInvalid:k=!1,errorMessage:xe="Failed to load chart data",disabled:u=!1,onLoad:Ce,onError:we,onBarClick:Ee,onBarHover:Fe,onSegmentClick:x,onLegendClick:Ge,customHeader:ze,customTooltip:qe,customEmptyState:Ie,customLoadingState:Ve,customErrorState:He,as:li,className:di,style:ci,chartClassName:mi,headerClassName:pi,legendClassName:ui,...hi},gi)=>{const b=(a,r="0")=>a===void 0?r:typeof a=="number"?`${a}px`:a,[S,We]=f.useState({visible:!1,heading:"",description:"",x:0,y:0}),[M,Ne]=f.useState({visible:!1,x:0,y:0}),[C,xi]=f.useState(new Set(n.flatMap(a=>a.metrics).map(a=>a.name)));f.useEffect(()=>{!fe&&!k&&!ve&&Ce&&Ce()},[fe,k,ve,Ce]),f.useEffect(()=>{k&&we&&we(new Error(xe||"Chart error"))},[k,xe,we]),f.useEffect(()=>{if(M.visible){const a=()=>{Ne({visible:!1,x:0,y:0})};return document.addEventListener("click",a),()=>document.removeEventListener("click",a)}},[M.visible]);const Le=Array.from(new Map(n.flatMap(a=>a.metrics).map(a=>[a.name,a])).values()),$=Math.max(...n.map(a=>a.metrics.filter(r=>C.has(r.name)).reduce((r,d)=>r+d.value,0)),1),yi=[$,Math.round($*2/3),Math.round($/3),0],w=a=>a>=1e3?`${Math.round(a/1e3)}K`:a.toString(),Xe=(a,r,d)=>{if(u)return;const y=r.metrics.reduce((p,Se)=>p+Se.value,0),s=r.metrics.map(p=>`${p.name}: ${w(p.value)}`).join(`
`);We({visible:!0,heading:`${r.label} - Total: ${w(y)}`,description:s,x:a.clientX+15,y:a.clientY-40}),Fe&&Fe(r,d)},Ye=()=>{We({visible:!1,heading:"",description:"",x:0,y:0})},Ae=(a,r)=>{u||!Ee||Ee(a,r)},Oe=(a,r,d,y,s)=>{u||!x||(a.stopPropagation(),x(r,d,y,s))},bi=a=>{if(a.stopPropagation(),De&&De(),be){const r=a.currentTarget.getBoundingClientRect();Ne(d=>({visible:!d.visible,x:r.left,y:r.bottom+10}))}},Je=a=>{u||xi(r=>{const d=new Set(r),y=d.has(a);return y?d.delete(a):d.add(a),Ge&&Ge(a,!y),d})},Ke=(a,r,d)=>{u||(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),Ae(r,d))},fi=()=>!e&&!Re?null:ze?ze(e):t.jsxs($i,{className:pi,children:[e&&t.jsx(i,{variant:"headingM",weight:"semibold",as:"h3",children:e}),Re&&t.jsx(Ti,{onClick:bi,"aria-label":"More information",disabled:u,type:"button",children:t.jsx(je,{name:"Info",size:"small"})})]}),vi=()=>t.jsxs(t.Fragment,{children:[t.jsxs(Ue,{$height:ye,children:[t.jsxs(ji,{children:[j&&t.jsx(ki,{children:t.jsx(Pe,{children:t.jsx(i,{variant:"caption",weight:"semibold",children:j})})}),t.jsx(Mi,{$labelSpacing:ke?b(ke):void 0,$labelMargin:A==null?void 0:A.y,children:yi.map((a,r)=>t.jsx(i,{variant:"caption",weight:"semibold",children:w(a)},r))})]}),t.jsxs(Bi,{$paddingLeft:l==null?void 0:l.left,$paddingRight:l==null?void 0:l.right,$paddingTop:l==null?void 0:l.top,$paddingBottom:l==null?void 0:l.bottom,$barGap:pe?b(pe):void 0,children:[ce&&t.jsx(Ri,{children:[...Array(4)].map((a,r)=>t.jsx(Di,{},r))}),n.map((a,r)=>{const d=a.metrics.filter(s=>C.has(s.name)).reduce((s,p)=>s+p.value,0),y=`${d/$*100}%`;return t.jsx(Ei,{$height:y,$minWidth:he?b(he):void 0,$maxWidth:ge?b(ge):void 0,onMouseMove:s=>Xe(s,a,r),onMouseLeave:Ye,onClick:()=>Ae(a,r),onKeyDown:s=>Ke(s,a,r),tabIndex:u?-1:0,role:"button","aria-label":`${a.label}: ${w(d)}`,"aria-disabled":u,children:a.metrics.map((s,p)=>{const $e=C.has(s.name)?`${s.value/$*100}%`:"0%";return t.jsx(Fi,{$color:s.color,$height:$e,$clickable:!!x,onClick:Te=>Oe(Te,s,a,r,p),role:x?"button":void 0,tabIndex:x&&!u?0:-1,"aria-label":x?`${s.name}: ${w(s.value)}`:void 0},p)})},r)})]})]}),t.jsxs(Ni,{$paddingLeft:"3.9rem",$labelSpacing:ue?b(ue):void 0,$labelMargin:A==null?void 0:A.x,children:[t.jsx(Qe,{$labelSpacing:ue?b(ue):void 0,children:n.map((a,r)=>t.jsx(Yi,{$rotation:ii,children:t.jsx(i,{variant:"caption",weight:"medium",children:a.label})},r))}),me&&t.jsx(i,{variant:"caption",weight:"semibold",align:"center",children:me})]})]}),Ci=()=>t.jsxs(t.Fragment,{children:[t.jsxs(Ue,{$height:ye,children:[t.jsxs(Gi,{children:[j&&t.jsx(zi,{children:t.jsx(Pe,{children:t.jsx(i,{variant:"caption",weight:"semibold",children:j})})}),t.jsx(qi,{children:n.map((a,r)=>t.jsx(i,{variant:"caption",weight:"semibold",children:a.label},r))})]}),t.jsx(Ii,{$paddingLeft:l==null?void 0:l.left,$paddingRight:l==null?void 0:l.right,$paddingTop:l==null?void 0:l.top,$paddingBottom:l==null?void 0:l.bottom,$barGap:pe?b(pe):void 0,children:n.map((a,r)=>{const d=a.metrics.filter(s=>C.has(s.name)).reduce((s,p)=>s+p.value,0),y=d>0?d/$*100:0;return t.jsx(Vi,{$minHeight:he?b(he):void 0,$maxHeight:ge?b(ge):void 0,children:t.jsx(Hi,{$width:y,onMouseMove:s=>Xe(s,a,r),onMouseLeave:Ye,onClick:()=>Ae(a,r),onKeyDown:s=>Ke(s,a,r),tabIndex:u?-1:0,role:"button","aria-label":`${a.label}: ${w(d)}`,"aria-disabled":u,children:a.metrics.map((s,p)=>{const $e=C.has(s.name)&&d>0?s.value/d*100:0;return t.jsx(Wi,{$color:s.color,$width:$e,$clickable:!!x,onClick:Te=>Oe(Te,s,a,r,p),role:x?"button":void 0,tabIndex:x&&!u?0:-1,"aria-label":x?`${s.name}: ${w(s.value)}`:void 0},p)})})},r)})})]}),t.jsxs(Xi,{$paddingLeft:j?"5.0625rem":"3.5rem",children:[t.jsxs(Qe,{children:[t.jsx(T,{$flex:!0,children:t.jsx(i,{variant:"caption",weight:"medium",children:"0%"})}),t.jsx(T,{$flex:!0,children:t.jsx(i,{variant:"caption",weight:"medium",children:"10%"})}),t.jsx(T,{$flex:!0,children:t.jsx(i,{variant:"caption",weight:"medium",children:"25%"})}),t.jsx(T,{$flex:!0,children:t.jsx(i,{variant:"caption",weight:"medium",children:"50%"})}),t.jsx(T,{$flex:!0,children:t.jsx(i,{variant:"caption",weight:"medium",children:"75%"})}),t.jsx(T,{children:t.jsx(i,{variant:"caption",weight:"medium",children:"100%"})})]}),me&&t.jsx(i,{variant:"caption",weight:"semibold",align:"center",children:me})]})]}),wi=()=>!ni||Le.length===0?null:Be?Be(Le,C,Je):t.jsxs(Oi,{className:ui,children:[Me&&t.jsx(i,{variant:"body",weight:"semibold",align:"center",children:Me}),t.jsx(Ji,{children:Le.map((a,r)=>t.jsxs(Ki,{$isActive:C.has(a.name),onClick:()=>Je(a.name),disabled:u,type:"button","aria-label":`Toggle ${a.name}`,"aria-pressed":C.has(a.name),children:[t.jsx(_i,{$color:a.color}),t.jsx(i,{variant:"body",weight:"medium",children:a.name})]},r))})]});if(fe)return Ve?Ve():t.jsx(Ui,{children:t.jsx(i,{variant:"body",weight:"medium",align:"center",children:si})});if(k)return He?He(xe):t.jsxs(Qi,{children:[t.jsx(je,{name:"Error",size:"medium"}),t.jsx(i,{variant:"body",weight:"medium",align:"center",children:xe})]});if(ve||n.length===0)return Ie?Ie():t.jsxs(Pi,{children:[t.jsx(je,{name:"BarChart",size:"medium"}),t.jsx(i,{variant:"body",weight:"medium",align:"center",children:oi})]});const Li=li||"div";return t.jsxs(t.Fragment,{children:[t.jsxs(Si,{as:Li,ref:gi,className:di,style:ci,$width:ai,$maxWidth:ri,"aria-label":e?String(e):"Bar chart",role:"img",...hi,children:[fi(),t.jsx("div",{className:mi,children:g==="vertical"?vi():Ci()}),wi()]}),be&&t.jsx(_e,{visible:M.visible,heading:be,x:M.x,y:M.y,variant:"pointer",pointerPosition:"top"}),S.visible&&(qe?qe(n[0]):t.jsx(_e,{visible:S.visible,heading:S.heading,description:S.description,x:S.x,y:S.y,variant:"default"}))]})});v.displayName="BarChart";v.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"Chart title"},data:{required:!0,tsType:{name:"Array",elements:[{name:"BarChartData"}],raw:"BarChartData[]"},description:"Array of bar data"},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Chart orientation",defaultValue:{value:"'vertical'",computed:!1}},showValues:{required:!1,tsType:{name:"boolean"},description:"Show value labels on bars",defaultValue:{value:"false",computed:!1}},showGrid:{required:!1,tsType:{name:"boolean"},description:"Show grid lines (dotted)",defaultValue:{value:"true",computed:!1}},height:{required:!1,tsType:{name:"string"},description:"Chart height (responsive units: rem, %, vh, or auto)",defaultValue:{value:"'18.75rem'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"Chart width (responsive units: rem, %, vw, or auto)"},maxWidth:{required:!1,tsType:{name:"string"},description:"Maximum width (responsive units)"},yAxisLabel:{required:!1,tsType:{name:"string"},description:"Y-axis label (vertical text on left)"},xAxisLabel:{required:!1,tsType:{name:"string"},description:"X-axis label (horizontal text below)"},chartPadding:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}`,signature:{properties:[{key:"left",value:{name:"string",required:!1}},{key:"right",value:{name:"string",required:!1}},{key:"top",value:{name:"string",required:!1}},{key:"bottom",value:{name:"string",required:!1}}]}},description:"Control chart padding (left, right, top, bottom)"},barGap:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Space between bars (responsive units: rem, px, or theme spacing token)"},xAxisLabelSpacing:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Horizontal spacing between X-axis labels (responsive units)"},yAxisLabelSpacing:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Vertical spacing between Y-axis labels (responsive units)"},axisLabelMargin:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  x?: string;
  y?: string;
}`,signature:{properties:[{key:"x",value:{name:"string",required:!1}},{key:"y",value:{name:"string",required:!1}}]}},description:"Distance from axis to labels"},minBarWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Minimum bar width (responsive units)"},maxBarWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum bar width (responsive units)"},xAxisLabelRotation:{required:!1,tsType:{name:"number"},description:"Rotate X-axis labels in degrees (e.g., 45 for diagonal labels)"},showLegend:{required:!1,tsType:{name:"boolean"},description:"Show legend at bottom",defaultValue:{value:"false",computed:!1}},legendTitle:{required:!1,tsType:{name:"string"},description:"Legend title"},customLegend:{required:!1,tsType:{name:"signature",type:"function",raw:"(metrics: BarMetric[], activeMetrics: Set<string>, toggleMetric: (name: string) => void) => ReactNode",signature:{arguments:[{type:{name:"Array",elements:[{name:"BarMetric"}],raw:"BarMetric[]"},name:"metrics"},{type:{name:"Set",elements:[{name:"string"}],raw:"Set<string>"},name:"activeMetrics"},{type:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},name:"toggleMetric"}],return:{name:"ReactNode"}}},description:"Custom legend render function"},showInfoIcon:{required:!1,tsType:{name:"boolean"},description:"Show info icon",defaultValue:{value:"false",computed:!1}},onInfoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Info icon click handler"},infoTooltipContent:{required:!1,tsType:{name:"string"},description:"Info icon tooltip content"},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"Loading message",defaultValue:{value:"'Loading chart data...'",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:"Empty state (no data)",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No data available'",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message",defaultValue:{value:"'Failed to load chart data'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when chart loads successfully"},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error) => void",signature:{arguments:[{type:{name:"Error"},name:"error"}],return:{name:"void"}}},description:"Called when chart encounters an error"},onBarClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: BarChartData, index: number) => void",signature:{arguments:[{type:{name:"BarChartData"},name:"data"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Called when a bar is clicked (entire bar)"},onBarHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: BarChartData, index: number) => void",signature:{arguments:[{type:{name:"BarChartData"},name:"data"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Called when a bar is hovered"},onSegmentClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(metric: BarMetric, barData: BarChartData, barIndex: number, metricIndex: number) => void",signature:{arguments:[{type:{name:"BarMetric"},name:"metric"},{type:{name:"BarChartData"},name:"barData"},{type:{name:"number"},name:"barIndex"},{type:{name:"number"},name:"metricIndex"}],return:{name:"void"}}},description:"Called when a specific segment/metric in a bar is clicked (for filtering or drill-down)"},onLegendClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(metricName: string, isActive: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"metricName"},{type:{name:"boolean"},name:"isActive"}],return:{name:"void"}}},description:"Called when legend item is clicked"},customHeader:{required:!1,tsType:{name:"signature",type:"function",raw:"(title?: ReactNode) => ReactNode",signature:{arguments:[{type:{name:"ReactNode"},name:"title"}],return:{name:"ReactNode"}}},description:"Custom header render function"},customTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: BarChartData) => ReactNode",signature:{arguments:[{type:{name:"BarChartData"},name:"data"}],return:{name:"ReactNode"}}},description:"Custom tooltip render function"},customEmptyState:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:"Custom empty state render function"},customLoadingState:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:"Custom loading state render function"},customErrorState:{required:!1,tsType:{name:"signature",type:"function",raw:"(error?: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"error"}],return:{name:"ReactNode"}}},description:"Custom error state render function"},as:{required:!1,tsType:{name:"ElementType"},description:"Render as different element"},className:{required:!1,tsType:{name:"string"},description:"Custom className for root container"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for root container"},chartClassName:{required:!1,tsType:{name:"string"},description:"Custom className for chart content area"},headerClassName:{required:!1,tsType:{name:"string"},description:"Custom className for header"},legendClassName:{required:!1,tsType:{name:"string"},description:"Custom className for legend"}},composes:["Omit"]};const An={title:"Data Visualization/BarChart",component:v,parameters:{layout:"padded",docs:{description:{component:`
Enterprise-grade bar chart component with full accessibility and customization support.

## Features
- ✅ **forwardRef** - Exposes root DOM node
- ✅ **Polymorphic 'as' prop** - Render as different elements
- ✅ **All 8 states** - default, hover, focus, active, disabled, loading, empty, error
- ✅ **Typography component** - All text uses Typography (no hardcoded styles)
- ✅ **Design tokens only** - No hardcoded pixels, colors, or spacing
- ✅ **Full accessibility** - ARIA attributes, keyboard navigation
- ✅ **Customization slots** - Custom header, tooltip, legend, states
- ✅ **Event callbacks** - onLoad, onError, onBarClick, onBarHover, onSegmentClick, onLegendClick
- ✅ **Granular interactions** - Click individual segments in stacked bars for filtering/drill-down
- ✅ **Layout customization** - Chart padding, bar gaps, label spacing, bar widths, label rotation

## Layout Customization
Control chart layout with these props:
- **chartPadding** - Control left/right/top/bottom padding
- **barGap** - Space between bars
- **xAxisLabelSpacing** / **yAxisLabelSpacing** - Label spacing
- **axisLabelMargin** - Distance from axis to labels
- **minBarWidth** / **maxBarWidth** - Bar width constraints
- **xAxisLabelRotation** - Rotate labels (e.g., 45°)

## Usage
\`\`\`tsx
import { BarChart } from '@ajaysoni7832/lean-ids-components';

<BarChart
  title="Monthly Revenue"
  data={[
    { label: 'Jan', metrics: [{ name: 'Sales', value: 100, color: '#6222BC' }] }
  ]}
  showLegend
  yAxisLabel="Revenue ($K)"
  xAxisLabel="Month"
  chartPadding={{ left: '2rem', right: '2rem' }}
  barGap="1rem"
  xAxisLabelRotation={45}
/>
\`\`\`
        `}}},tags:["autodocs"],args:{onLoad:L(),onError:L(),onBarClick:L(),onBarHover:L(),onSegmentClick:L(),onLegendClick:L(),onInfoClick:L()},argTypes:{orientation:{control:"radio",options:["vertical","horizontal"],description:"Chart orientation"},height:{control:"text",description:"Chart height (responsive units: rem, %, vh)"},width:{control:"text",description:"Chart width (responsive units: rem, %, vw)"},isLoading:{control:"boolean",description:"Loading state"},isEmpty:{control:"boolean",description:"Empty state (no data)"},isInvalid:{control:"boolean",description:"Error state"},disabled:{control:"boolean",description:"Disabled state"},chartPadding:{control:"object",description:"Control chart padding (left, right, top, bottom)"},barGap:{control:"text",description:"Space between bars (responsive units: rem, px, or number)"},xAxisLabelSpacing:{control:"text",description:"Horizontal spacing between X-axis labels"},yAxisLabelSpacing:{control:"text",description:"Vertical spacing between Y-axis labels"},axisLabelMargin:{control:"object",description:"Distance from axis to labels (x and y)"},minBarWidth:{control:"text",description:"Minimum bar width (responsive units)"},maxBarWidth:{control:"text",description:"Maximum bar width (responsive units)"},xAxisLabelRotation:{control:"number",description:"Rotate X-axis labels in degrees (e.g., 45)"}}},h=[{label:"Jan",metrics:[{name:"Revenue",value:45e3,color:"#6222BC"}]},{label:"Feb",metrics:[{name:"Revenue",value:52e3,color:"#6222BC"}]},{label:"Mar",metrics:[{name:"Revenue",value:48e3,color:"#6222BC"}]},{label:"Apr",metrics:[{name:"Revenue",value:61e3,color:"#6222BC"}]},{label:"May",metrics:[{name:"Revenue",value:55e3,color:"#6222BC"}]},{label:"Jun",metrics:[{name:"Revenue",value:67e3,color:"#6222BC"}]}],c=[{label:"Jan",metrics:[{name:"Claims Approved",value:5e4,color:"#3E71C2"},{name:"Claims Pending",value:7e4,color:"#E3725F"},{name:"Claims Denied",value:8e4,color:"#1AC2C1"}]},{label:"Feb",metrics:[{name:"Claims Approved",value:9e4,color:"#3E71C2"},{name:"Claims Pending",value:9e4,color:"#E3725F"},{name:"Claims Denied",value:9e4,color:"#1AC2C1"}]},{label:"Mar",metrics:[{name:"Claims Approved",value:4e4,color:"#3E71C2"},{name:"Claims Pending",value:5e4,color:"#E3725F"},{name:"Claims Denied",value:5e4,color:"#1AC2C1"}]},{label:"Apr",metrics:[{name:"Claims Approved",value:8e4,color:"#3E71C2"},{name:"Claims Pending",value:9e4,color:"#E3725F"},{name:"Claims Denied",value:8e4,color:"#1AC2C1"}]},{label:"May",metrics:[{name:"Claims Approved",value:6e4,color:"#3E71C2"},{name:"Claims Pending",value:7e4,color:"#E3725F"},{name:"Claims Denied",value:7e4,color:"#1AC2C1"}]},{label:"Jun",metrics:[{name:"Claims Approved",value:85e3,color:"#3E71C2"},{name:"Claims Pending",value:9e4,color:"#E3725F"},{name:"Claims Denied",value:95e3,color:"#1AC2C1"}]}],B={args:{data:h,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem"}},R={args:{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem"},parameters:{docs:{description:{story:"Hover over bars to see interactive tooltips with metric details."}}}},D={args:{data:h,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem"},parameters:{docs:{description:{story:"Press Tab to navigate through bars. Focus indicators are visible for keyboard navigation."}}}},E={args:{data:h,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem"},parameters:{docs:{description:{story:"Click on bars to see the active state and trigger the callback. Check the Actions panel to see the callback fired."}}}},F={args:{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem",disabled:!0},parameters:{docs:{description:{story:"Disabled chart with no hover effects or interactions."}}}},G={args:{data:[],isLoading:!0,loadingMessage:"Loading chart data...",height:"18.75rem"},parameters:{docs:{description:{story:"Loading state with customizable message."}}}},z={args:{data:[],isEmpty:!0,emptyMessage:"No data available for the selected period",height:"18.75rem"},parameters:{docs:{description:{story:"Empty state with customizable message."}}}},q={args:{data:[],isInvalid:!0,errorMessage:"Failed to load chart data. Please try again.",height:"18.75rem"},parameters:{docs:{description:{story:"Error state with customizable error message."}}}},I={args:{data:c,orientation:"vertical",yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem"}},V={args:{data:c,orientation:"horizontal",yAxisLabel:"Status",xAxisLabel:"Percentage",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem"}},H={args:{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem"}},W={args:{title:"Monthly Claims Analysis",data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",showInfoIcon:!0,infoTooltipContent:"This chart shows monthly claim counts by status",height:"18.75rem"}},N={args:{data:h,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!1,height:"18.75rem"}},X={args:{data:h,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"12.5rem",width:"min(90vw, 25rem)"}},Y={args:{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,height:"18.75rem",width:"min(90vw, 37.5rem)"}},O={args:{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"25rem",width:"min(90vw, 50rem)"}},J={render:()=>t.jsxs("div",{style:{width:"100%",maxWidth:"800px",padding:"20px"},children:[t.jsx(i,{variant:"headingM",weight:"semibold",style:{marginBottom:"12px"},children:"Responsive Chart Example"}),t.jsx(i,{variant:"body",style:{marginBottom:"20px"},children:"This chart adapts to its container width using responsive units."}),t.jsx(v,{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem",width:"100%",maxWidth:"100%"})]})},K={args:{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,height:"18.75rem",customHeader:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"16px"},children:[t.jsx(i,{variant:"headingL",weight:"bold",color:"#6222BC",children:"Custom Header Design"}),t.jsx(i,{variant:"body",color:"#909090",children:"This header is fully customized using the customHeader slot"})]})}},_={args:{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,height:"18.75rem",customLegend:(e,n,g)=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginTop:"20px"},children:[t.jsx(i,{variant:"body",weight:"semibold",children:"Custom Legend"}),t.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:e.map((m,ce)=>t.jsx("button",{onClick:()=>g(m.name),style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",border:`2px solid ${m.color}`,borderRadius:"8px",background:n.has(m.name)?m.color:"transparent",cursor:"pointer"},children:t.jsx(i,{variant:"body",weight:"medium",color:n.has(m.name)?"#FFFFFF":m.color,children:m.name})},ce))})]})}},U={args:{data:[],isEmpty:!0,height:"18.75rem",customEmptyState:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",padding:"40px"},children:[t.jsx(i,{variant:"headingM",weight:"semibold",color:"#6222BC",children:"No Data Yet"}),t.jsx(i,{variant:"body",align:"center",color:"#909090",children:"Start by adding some data to see your chart visualization"}),t.jsx("button",{style:{padding:"8px 16px",background:"#6222BC",color:"#FFFFFF",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Add Data"})]})}},P={args:{data:[],isLoading:!0,height:"18.75rem",customLoadingState:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",padding:"40px"},children:[t.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid #EFE6F8",borderTop:"4px solid #6222BC",borderRadius:"50%",animation:"spin 1s linear infinite"}}),t.jsx(i,{variant:"body",weight:"medium",children:"Loading your data..."})]})}},Q={args:{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem"},parameters:{docs:{description:{story:"All event callbacks use explicit spies. Check the Actions panel to see callbacks fired when interacting with the chart."}}}},Z={args:{orientation:"horizontal"},render:()=>{const[e,n]=f.useState(null);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[t.jsxs("div",{children:[t.jsx(i,{variant:"headingM",weight:"semibold",style:{marginBottom:"8px"},children:"Segment Click Example"}),t.jsx(i,{variant:"body",style:{marginBottom:"12px"},children:"Click on individual colored segments in the stacked bars to filter or drill down. Each segment is independently clickable for granular data interaction."}),e&&t.jsx("div",{style:{padding:"12px",background:"#EFE6F8",borderRadius:"8px"},children:t.jsxs(i,{variant:"body",weight:"semibold",color:"#6222BC",children:["Selected: ",e]})})]}),t.jsx(v,{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem",onSegmentClick:(g,m,ce,ye)=>{n(`${g.name} in ${m.label} (Value: ${g.value})`)},onBarClick:(g,m)=>{}})]})},parameters:{docs:{description:{story:"Demonstrates `onSegmentClick` for individual segment interactions. Perfect for filtering data by specific metrics or implementing drill-down functionality. Click segments to see the callback in action."}}}},ee={render:()=>{const e=f.useRef(null),n=()=>{var g,m;(g=e.current)==null||g.focus(),(m=e.current)==null||m.scrollIntoView({behavior:"smooth",block:"center"})};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[t.jsxs("div",{children:[t.jsx(i,{variant:"headingM",weight:"semibold",style:{marginBottom:"8px"},children:"ForwardRef Example"}),t.jsx(i,{variant:"body",style:{marginBottom:"12px"},children:"The chart exposes its root DOM node via forwardRef. Click the button to programmatically focus the chart."}),t.jsx("button",{onClick:n,style:{padding:"8px 16px",background:"#6222BC",color:"#FFFFFF",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Focus Chart"})]}),t.jsx(v,{ref:e,data:h,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem"})]})}},te={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[t.jsxs("div",{children:[t.jsx(i,{variant:"headingM",weight:"semibold",style:{marginBottom:"8px"},children:"Polymorphic Example"}),t.jsx(i,{variant:"body",style:{marginBottom:"12px"},children:"This chart is rendered as a <section> element instead of a <div>."})]}),t.jsx(v,{as:"section",data:h,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem"})]})},ae={args:{data:h,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem",chartPadding:{left:"2rem",right:"3rem",top:"2rem",bottom:"0.5rem"}},parameters:{docs:{description:{story:"Customize the padding inside the chart area using the `chartPadding` prop."}}}},re={args:{data:h,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem",barGap:"1.5rem"},parameters:{docs:{description:{story:"Control the gap between bars using the `barGap` prop (accepts rem, px, or numbers)."}}}},ie={args:{data:h,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem",minBarWidth:"3rem",maxBarWidth:"6rem"},parameters:{docs:{description:{story:"Control bar width constraints using `minBarWidth` and `maxBarWidth` props."}}}},ne={args:{data:[{label:"January",metrics:[{name:"Revenue",value:45e3,color:"#6222BC"}]},{label:"February",metrics:[{name:"Revenue",value:52e3,color:"#6222BC"}]},{label:"March",metrics:[{name:"Revenue",value:48e3,color:"#6222BC"}]},{label:"April",metrics:[{name:"Revenue",value:61e3,color:"#6222BC"}]},{label:"May",metrics:[{name:"Revenue",value:55e3,color:"#6222BC"}]},{label:"June",metrics:[{name:"Revenue",value:67e3,color:"#6222BC"}]}],yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem",xAxisLabelRotation:45},parameters:{docs:{description:{story:"Rotate X-axis labels using `xAxisLabelRotation` prop (in degrees) for long labels."}}}},se={args:{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,height:"18.75rem",xAxisLabelSpacing:"2rem",yAxisLabelSpacing:"0.5rem"},parameters:{docs:{description:{story:"Control spacing between labels using `xAxisLabelSpacing` and `yAxisLabelSpacing` props."}}}},oe={args:{data:h,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem",axisLabelMargin:{x:"1rem",y:"0.5rem"}},parameters:{docs:{description:{story:"Adjust the distance from axis to labels using `axisLabelMargin` prop."}}}},le={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[t.jsxs("div",{children:[t.jsx(i,{variant:"headingM",weight:"semibold",style:{marginBottom:"8px"},children:"Fully Customized Layout"}),t.jsx(i,{variant:"body",style:{marginBottom:"12px"},children:"This example demonstrates all layout customization props working together."})]}),t.jsx(v,{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"25rem",chartPadding:{left:"2rem",right:"2rem",top:"1.5rem",bottom:"0.5rem"},barGap:"1rem",minBarWidth:"2.5rem",maxBarWidth:"5rem",xAxisLabelSpacing:"1.5rem",yAxisLabelSpacing:"0.5rem",axisLabelMargin:{x:"0.75rem",y:"0.5rem"}})]}),parameters:{docs:{description:{story:"Complete example showing all layout customization props: padding, gaps, widths, spacing, and margins."}}}},de={render:()=>t.jsx("div",{style:{width:"min(90vw, 37.5rem)"},children:t.jsx(Ai,{title:"Claims by Status",showInfoIcon:!0,infoTooltipContent:"Monthly breakdown of claims by approval status",showTimeRange:!0,timeRangeValue:"Last 6 months",children:t.jsx(v,{data:c,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem"})})}),parameters:{docs:{description:{story:"Complete example showing BarChart wrapped in DataVisualizationCard with all features."}}}};var Ze,et,tt,at,rt;B.parameters={...B.parameters,docs:{...(Ze=B.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem'
  }
}`,...(tt=(et=B.parameters)==null?void 0:et.docs)==null?void 0:tt.source},description:{story:"**Default State** - Standard bar chart with single metric",...(rt=(at=B.parameters)==null?void 0:at.docs)==null?void 0:rt.description}}};var it,nt,st,ot,lt;R.parameters={...R.parameters,docs:{...(it=R.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over bars to see interactive tooltips with metric details.'
      }
    }
  }
}`,...(st=(nt=R.parameters)==null?void 0:nt.docs)==null?void 0:st.source},description:{story:"**Hover State** - Hover over bars to see tooltips (interactive in canvas)",...(lt=(ot=R.parameters)==null?void 0:ot.docs)==null?void 0:lt.description}}};var dt,ct,mt,pt,ut;D.parameters={...D.parameters,docs:{...(dt=D.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Press Tab to navigate through bars. Focus indicators are visible for keyboard navigation.'
      }
    }
  }
}`,...(mt=(ct=D.parameters)==null?void 0:ct.docs)==null?void 0:mt.source},description:{story:"**Focus State** - Tab through bars to see focus indicators (keyboard accessible)",...(ut=(pt=D.parameters)==null?void 0:pt.docs)==null?void 0:ut.description}}};var ht,gt,xt,yt,bt;E.parameters={...E.parameters,docs:{...(ht=E.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on bars to see the active state and trigger the callback. Check the Actions panel to see the callback fired.'
      }
    }
  }
}`,...(xt=(gt=E.parameters)==null?void 0:gt.docs)==null?void 0:xt.source},description:{story:"**Active State** - Click bars to trigger onBarClick callback",...(bt=(yt=E.parameters)==null?void 0:yt.docs)==null?void 0:bt.description}}};var ft,vt,Ct,wt,Lt;F.parameters={...F.parameters,docs:{...(ft=F.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled chart with no hover effects or interactions.'
      }
    }
  }
}`,...(Ct=(vt=F.parameters)==null?void 0:vt.docs)==null?void 0:Ct.source},description:{story:"**Disabled State** - Chart is disabled (no interactions)",...(Lt=(wt=F.parameters)==null?void 0:wt.docs)==null?void 0:Lt.description}}};var At,St,$t,Tt,jt;G.parameters={...G.parameters,docs:{...(At=G.parameters)==null?void 0:At.docs,source:{originalSource:`{
  args: {
    data: [],
    isLoading: true,
    loadingMessage: 'Loading chart data...',
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with customizable message.'
      }
    }
  }
}`,...($t=(St=G.parameters)==null?void 0:St.docs)==null?void 0:$t.source},description:{story:"**Loading State** - Shows loading indicator",...(jt=(Tt=G.parameters)==null?void 0:Tt.docs)==null?void 0:jt.description}}};var kt,Mt,Bt,Rt,Dt;z.parameters={...z.parameters,docs:{...(kt=z.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  args: {
    data: [],
    isEmpty: true,
    emptyMessage: 'No data available for the selected period',
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state with customizable message.'
      }
    }
  }
}`,...(Bt=(Mt=z.parameters)==null?void 0:Mt.docs)==null?void 0:Bt.source},description:{story:"**Empty State** - No data available",...(Dt=(Rt=z.parameters)==null?void 0:Rt.docs)==null?void 0:Dt.description}}};var Et,Ft,Gt,zt,qt;q.parameters={...q.parameters,docs:{...(Et=q.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    data: [],
    isInvalid: true,
    errorMessage: 'Failed to load chart data. Please try again.',
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state with customizable error message.'
      }
    }
  }
}`,...(Gt=(Ft=q.parameters)==null?void 0:Ft.docs)==null?void 0:Gt.source},description:{story:"**Error State** - Failed to load data",...(qt=(zt=q.parameters)==null?void 0:zt.docs)==null?void 0:qt.description}}};var It,Vt,Ht,Wt,Nt;I.parameters={...I.parameters,docs:{...(It=I.parameters)==null?void 0:It.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    orientation: 'vertical',
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem'
  }
}`,...(Ht=(Vt=I.parameters)==null?void 0:Vt.docs)==null?void 0:Ht.source},description:{story:"**Vertical Orientation** - Standard vertical bars (default)",...(Nt=(Wt=I.parameters)==null?void 0:Wt.docs)==null?void 0:Nt.description}}};var Xt,Yt,Ot,Jt,Kt;V.parameters={...V.parameters,docs:{...(Xt=V.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    orientation: 'horizontal',
    yAxisLabel: 'Status',
    xAxisLabel: 'Percentage',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem'
  }
}`,...(Ot=(Yt=V.parameters)==null?void 0:Yt.docs)==null?void 0:Ot.source},description:{story:"**Horizontal Orientation** - Horizontal bars",...(Kt=(Jt=V.parameters)==null?void 0:Jt.docs)==null?void 0:Kt.description}}};var _t,Ut,Pt,Qt,Zt;H.parameters={...H.parameters,docs:{...(_t=H.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem'
  }
}`,...(Pt=(Ut=H.parameters)==null?void 0:Ut.docs)==null?void 0:Pt.source},description:{story:"**Stacked Bars** - Multiple metrics per bar",...(Zt=(Qt=H.parameters)==null?void 0:Qt.docs)==null?void 0:Zt.description}}};var ea,ta,aa,ra,ia;W.parameters={...W.parameters,docs:{...(ea=W.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  args: {
    title: 'Monthly Claims Analysis',
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    showInfoIcon: true,
    infoTooltipContent: 'This chart shows monthly claim counts by status',
    height: '18.75rem'
  }
}`,...(aa=(ta=W.parameters)==null?void 0:ta.docs)==null?void 0:aa.source},description:{story:"**With Title and Info Icon**",...(ia=(ra=W.parameters)==null?void 0:ra.docs)==null?void 0:ia.description}}};var na,sa,oa,la,da;N.parameters={...N.parameters,docs:{...(na=N.parameters)==null?void 0:na.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: false,
    height: '18.75rem'
  }
}`,...(oa=(sa=N.parameters)==null?void 0:sa.docs)==null?void 0:oa.source},description:{story:"**Without Grid Lines**",...(da=(la=N.parameters)==null?void 0:la.docs)==null?void 0:da.description}}};var ca,ma,pa,ua,ha;X.parameters={...X.parameters,docs:{...(ca=X.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '12.5rem',
    width: 'min(90vw, 25rem)'
  }
}`,...(pa=(ma=X.parameters)==null?void 0:ma.docs)==null?void 0:pa.source},description:{story:"**Small Chart** - Compact size",...(ha=(ua=X.parameters)==null?void 0:ua.docs)==null?void 0:ha.description}}};var ga,xa,ya,ba,fa;Y.parameters={...Y.parameters,docs:{...(ga=Y.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    height: '18.75rem',
    width: 'min(90vw, 37.5rem)'
  }
}`,...(ya=(xa=Y.parameters)==null?void 0:xa.docs)==null?void 0:ya.source},description:{story:"**Medium Chart** - Standard size (default)",...(fa=(ba=Y.parameters)==null?void 0:ba.docs)==null?void 0:fa.description}}};var va,Ca,wa,La,Aa;O.parameters={...O.parameters,docs:{...(va=O.parameters)==null?void 0:va.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '25rem',
    width: 'min(90vw, 50rem)'
  }
}`,...(wa=(Ca=O.parameters)==null?void 0:Ca.docs)==null?void 0:wa.source},description:{story:"**Large Chart** - Expanded size",...(Aa=(La=O.parameters)==null?void 0:La.docs)==null?void 0:Aa.description}}};var Sa,$a,Ta,ja,ka;J.parameters={...J.parameters,docs:{...(Sa=J.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '800px',
    padding: '20px'
  }}>
      <Typography variant="headingM" weight="semibold" style={{
      marginBottom: '12px'
    }}>
        Responsive Chart Example
      </Typography>
      <Typography variant="body" style={{
      marginBottom: '20px'
    }}>
        This chart adapts to its container width using responsive units.
      </Typography>
      <BarChart data={stackedClaimData} yAxisLabel="Claim Count" xAxisLabel="Month" showGrid showLegend legendTitle="Claim Status" height="18.75rem" width="100%" maxWidth="100%" />
    </div>
}`,...(Ta=($a=J.parameters)==null?void 0:$a.docs)==null?void 0:Ta.source},description:{story:"**Responsive Width** - Adapts to container",...(ka=(ja=J.parameters)==null?void 0:ja.docs)==null?void 0:ka.description}}};var Ma,Ba,Ra,Da,Ea;K.parameters={...K.parameters,docs:{...(Ma=K.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    height: '18.75rem',
    customHeader: () => <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '16px'
    }}>
        <Typography variant="headingL" weight="bold" color="#6222BC">
          Custom Header Design
        </Typography>
        <Typography variant="body" color="#909090">
          This header is fully customized using the customHeader slot
        </Typography>
      </div>
  }
}`,...(Ra=(Ba=K.parameters)==null?void 0:Ba.docs)==null?void 0:Ra.source},description:{story:"**Custom Header** - Custom header render function",...(Ea=(Da=K.parameters)==null?void 0:Da.docs)==null?void 0:Ea.description}}};var Fa,Ga,za,qa,Ia;_.parameters={..._.parameters,docs:{...(Fa=_.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    height: '18.75rem',
    customLegend: (metrics, activeMetrics, toggleMetric) => <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginTop: '20px'
    }}>
        <Typography variant="body" weight="semibold">
          Custom Legend
        </Typography>
        <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
          {metrics.map((metric, index) => <button key={index} onClick={() => toggleMetric(metric.name)} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          border: \`2px solid \${metric.color}\`,
          borderRadius: '8px',
          background: activeMetrics.has(metric.name) ? metric.color : 'transparent',
          cursor: 'pointer'
        }}>
              <Typography variant="body" weight="medium" color={activeMetrics.has(metric.name) ? '#FFFFFF' : metric.color}>
                {metric.name}
              </Typography>
            </button>)}
        </div>
      </div>
  }
}`,...(za=(Ga=_.parameters)==null?void 0:Ga.docs)==null?void 0:za.source},description:{story:"**Custom Legend** - Custom legend render function",...(Ia=(qa=_.parameters)==null?void 0:qa.docs)==null?void 0:Ia.description}}};var Va,Ha,Wa,Na,Xa;U.parameters={...U.parameters,docs:{...(Va=U.parameters)==null?void 0:Va.docs,source:{originalSource:`{
  args: {
    data: [],
    isEmpty: true,
    height: '18.75rem',
    customEmptyState: () => <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      padding: '40px'
    }}>
        <Typography variant="headingM" weight="semibold" color="#6222BC">
          No Data Yet
        </Typography>
        <Typography variant="body" align="center" color="#909090">
          Start by adding some data to see your chart visualization
        </Typography>
        <button style={{
        padding: '8px 16px',
        background: '#6222BC',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          Add Data
        </button>
      </div>
  }
}`,...(Wa=(Ha=U.parameters)==null?void 0:Ha.docs)==null?void 0:Wa.source},description:{story:"**Custom Empty State** - Custom empty state render function",...(Xa=(Na=U.parameters)==null?void 0:Na.docs)==null?void 0:Xa.description}}};var Ya,Oa,Ja,Ka,_a;P.parameters={...P.parameters,docs:{...(Ya=P.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  args: {
    data: [],
    isLoading: true,
    height: '18.75rem',
    customLoadingState: () => <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      padding: '40px'
    }}>
        <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #EFE6F8',
        borderTop: '4px solid #6222BC',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
        <Typography variant="body" weight="medium">
          Loading your data...
        </Typography>
      </div>
  }
}`,...(Ja=(Oa=P.parameters)==null?void 0:Oa.docs)==null?void 0:Ja.source},description:{story:"**Custom Loading State** - Custom loading state render function",...(_a=(Ka=P.parameters)==null?void 0:Ka.docs)==null?void 0:_a.description}}};var Ua,Pa,Qa,Za,er;Q.parameters={...Q.parameters,docs:{...(Ua=Q.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'All event callbacks use explicit spies. Check the Actions panel to see callbacks fired when interacting with the chart.'
      }
    }
  }
}`,...(Qa=(Pa=Q.parameters)==null?void 0:Pa.docs)==null?void 0:Qa.source},description:{story:"**Event Callbacks** - All event callbacks demonstrated",...(er=(Za=Q.parameters)==null?void 0:Za.docs)==null?void 0:er.description}}};var tr,ar,rr,ir,nr;Z.parameters={...Z.parameters,docs:{...(tr=Z.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  },
  render: () => {
    const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <div>
          <Typography variant="headingM" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            Segment Click Example
          </Typography>
          <Typography variant="body" style={{
          marginBottom: '12px'
        }}>
            Click on individual colored segments in the stacked bars to filter or drill down. 
            Each segment is independently clickable for granular data interaction.
          </Typography>
          {selectedSegment && <div style={{
          padding: '12px',
          background: '#EFE6F8',
          borderRadius: '8px'
        }}>
              <Typography variant="body" weight="semibold" color="#6222BC">
                Selected: {selectedSegment}
              </Typography>
            </div>}
        </div>
        <BarChart data={stackedClaimData} yAxisLabel="Claim Count" xAxisLabel="Month" showGrid showLegend legendTitle="Claim Status" height="18.75rem" onSegmentClick={(metric, barData, barIndex, metricIndex) => {
        setSelectedSegment(\`\${metric.name} in \${barData.label} (Value: \${metric.value})\`);
      }} onBarClick={(data, index) => {}} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates \`onSegmentClick\` for individual segment interactions. Perfect for filtering data by specific metrics or implementing drill-down functionality. Click segments to see the callback in action.'
      }
    }
  }
}`,...(rr=(ar=Z.parameters)==null?void 0:ar.docs)==null?void 0:rr.source},description:{story:"**Segment Click Handler** - Click individual segments for filtering/drill-down",...(nr=(ir=Z.parameters)==null?void 0:ir.docs)==null?void 0:nr.description}}};var sr,or,lr,dr,cr;ee.parameters={...ee.parameters,docs:{...(sr=ee.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  render: () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const handleFocusChart = () => {
      chartRef.current?.focus();
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
          <Typography variant="headingM" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            ForwardRef Example
          </Typography>
          <Typography variant="body" style={{
          marginBottom: '12px'
        }}>
            The chart exposes its root DOM node via forwardRef. Click the button to programmatically focus the chart.
          </Typography>
          <button onClick={handleFocusChart} style={{
          padding: '8px 16px',
          background: '#6222BC',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
            Focus Chart
          </button>
        </div>
        <BarChart ref={chartRef} data={revenueData} yAxisLabel="Revenue" xAxisLabel="Month" showGrid height="18.75rem" />
      </div>;
  }
}`,...(lr=(or=ee.parameters)==null?void 0:or.docs)==null?void 0:lr.source},description:{story:"**ForwardRef Usage** - Accessing the root DOM node via ref",...(cr=(dr=ee.parameters)==null?void 0:dr.docs)==null?void 0:cr.description}}};var mr,pr,ur,hr,gr;te.parameters={...te.parameters,docs:{...(mr=te.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div>
        <Typography variant="headingM" weight="semibold" style={{
        marginBottom: '8px'
      }}>
          Polymorphic Example
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '12px'
      }}>
          This chart is rendered as a &lt;section&gt; element instead of a &lt;div&gt;.
        </Typography>
      </div>
      <BarChart as="section" data={revenueData} yAxisLabel="Revenue" xAxisLabel="Month" showGrid height="18.75rem" />
    </div>
}`,...(ur=(pr=te.parameters)==null?void 0:pr.docs)==null?void 0:ur.source},description:{story:"**Polymorphic 'as' Prop** - Render as different element",...(gr=(hr=te.parameters)==null?void 0:hr.docs)==null?void 0:gr.description}}};var xr,yr,br,fr,vr;ae.parameters={...ae.parameters,docs:{...(xr=ae.parameters)==null?void 0:xr.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem',
    chartPadding: {
      left: '2rem',
      right: '3rem',
      top: '2rem',
      bottom: '0.5rem'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Customize the padding inside the chart area using the \`chartPadding\` prop.'
      }
    }
  }
}`,...(br=(yr=ae.parameters)==null?void 0:yr.docs)==null?void 0:br.source},description:{story:"**Custom Chart Padding** - Control padding around the chart area",...(vr=(fr=ae.parameters)==null?void 0:fr.docs)==null?void 0:vr.description}}};var Cr,wr,Lr,Ar,Sr;re.parameters={...re.parameters,docs:{...(Cr=re.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem',
    barGap: '1.5rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Control the gap between bars using the \`barGap\` prop (accepts rem, px, or numbers).'
      }
    }
  }
}`,...(Lr=(wr=re.parameters)==null?void 0:wr.docs)==null?void 0:Lr.source},description:{story:"**Custom Bar Gap** - Adjust spacing between bars",...(Sr=(Ar=re.parameters)==null?void 0:Ar.docs)==null?void 0:Sr.description}}};var $r,Tr,jr,kr,Mr;ie.parameters={...ie.parameters,docs:{...($r=ie.parameters)==null?void 0:$r.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem',
    minBarWidth: '3rem',
    maxBarWidth: '6rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Control bar width constraints using \`minBarWidth\` and \`maxBarWidth\` props.'
      }
    }
  }
}`,...(jr=(Tr=ie.parameters)==null?void 0:Tr.docs)==null?void 0:jr.source},description:{story:"**Custom Bar Width** - Set minimum and maximum bar widths",...(Mr=(kr=ie.parameters)==null?void 0:kr.docs)==null?void 0:Mr.description}}};var Br,Rr,Dr,Er,Fr;ne.parameters={...ne.parameters,docs:{...(Br=ne.parameters)==null?void 0:Br.docs,source:{originalSource:`{
  args: {
    data: [{
      label: 'January',
      metrics: [{
        name: 'Revenue',
        value: 45000,
        color: '#6222BC'
      }]
    }, {
      label: 'February',
      metrics: [{
        name: 'Revenue',
        value: 52000,
        color: '#6222BC'
      }]
    }, {
      label: 'March',
      metrics: [{
        name: 'Revenue',
        value: 48000,
        color: '#6222BC'
      }]
    }, {
      label: 'April',
      metrics: [{
        name: 'Revenue',
        value: 61000,
        color: '#6222BC'
      }]
    }, {
      label: 'May',
      metrics: [{
        name: 'Revenue',
        value: 55000,
        color: '#6222BC'
      }]
    }, {
      label: 'June',
      metrics: [{
        name: 'Revenue',
        value: 67000,
        color: '#6222BC'
      }]
    }],
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem',
    xAxisLabelRotation: 45
  },
  parameters: {
    docs: {
      description: {
        story: 'Rotate X-axis labels using \`xAxisLabelRotation\` prop (in degrees) for long labels.'
      }
    }
  }
}`,...(Dr=(Rr=ne.parameters)==null?void 0:Rr.docs)==null?void 0:Dr.source},description:{story:"**Rotated X-Axis Labels** - Rotate labels for better readability",...(Fr=(Er=ne.parameters)==null?void 0:Er.docs)==null?void 0:Fr.description}}};var Gr,zr,qr,Ir,Vr;se.parameters={...se.parameters,docs:{...(Gr=se.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    height: '18.75rem',
    xAxisLabelSpacing: '2rem',
    yAxisLabelSpacing: '0.5rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Control spacing between labels using \`xAxisLabelSpacing\` and \`yAxisLabelSpacing\` props.'
      }
    }
  }
}`,...(qr=(zr=se.parameters)==null?void 0:zr.docs)==null?void 0:qr.source},description:{story:"**Custom Label Spacing** - Adjust spacing between axis labels",...(Vr=(Ir=se.parameters)==null?void 0:Ir.docs)==null?void 0:Vr.description}}};var Hr,Wr,Nr,Xr,Yr;oe.parameters={...oe.parameters,docs:{...(Hr=oe.parameters)==null?void 0:Hr.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem',
    axisLabelMargin: {
      x: '1rem',
      y: '0.5rem'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Adjust the distance from axis to labels using \`axisLabelMargin\` prop.'
      }
    }
  }
}`,...(Nr=(Wr=oe.parameters)==null?void 0:Wr.docs)==null?void 0:Nr.source},description:{story:"**Custom Axis Label Margins** - Adjust distance from axis to labels",...(Yr=(Xr=oe.parameters)==null?void 0:Xr.docs)==null?void 0:Yr.description}}};var Or,Jr,Kr,_r,Ur;le.parameters={...le.parameters,docs:{...(Or=le.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div>
        <Typography variant="headingM" weight="semibold" style={{
        marginBottom: '8px'
      }}>
          Fully Customized Layout
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '12px'
      }}>
          This example demonstrates all layout customization props working together.
        </Typography>
      </div>
      <BarChart data={stackedClaimData} yAxisLabel="Claim Count" xAxisLabel="Month" showGrid showLegend legendTitle="Claim Status" height="25rem" chartPadding={{
      left: '2rem',
      right: '2rem',
      top: '1.5rem',
      bottom: '0.5rem'
    }} barGap="1rem" minBarWidth="2.5rem" maxBarWidth="5rem" xAxisLabelSpacing="1.5rem" yAxisLabelSpacing="0.5rem" axisLabelMargin={{
      x: '0.75rem',
      y: '0.5rem'
    }} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete example showing all layout customization props: padding, gaps, widths, spacing, and margins.'
      }
    }
  }
}`,...(Kr=(Jr=le.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source},description:{story:"**Complete Layout Customization** - All layout props combined",...(Ur=(_r=le.parameters)==null?void 0:_r.docs)==null?void 0:Ur.description}}};var Pr,Qr,Zr,ei,ti;de.parameters={...de.parameters,docs:{...(Pr=de.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 'min(90vw, 37.5rem)'
  }}>
      <DataVisualizationCard title="Claims by Status" showInfoIcon infoTooltipContent="Monthly breakdown of claims by approval status" showTimeRange timeRangeValue="Last 6 months">
        <BarChart data={stackedClaimData} yAxisLabel="Claim Count" xAxisLabel="Month" showGrid showLegend legendTitle="Claim Status" height="18.75rem" />
      </DataVisualizationCard>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete example showing BarChart wrapped in DataVisualizationCard with all features.'
      }
    }
  }
}`,...(Zr=(Qr=de.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source},description:{story:"**In DataVisualizationCard** - Complete integration example",...(ti=(ei=de.parameters)==null?void 0:ei.docs)==null?void 0:ti.description}}};const Sn=["Default","Hover","Focus","Active","Disabled","Loading","Empty","Error","Vertical","Horizontal","Stacked","WithTitle","WithoutGrid","Small","Medium","Large","ResponsiveWidth","CustomHeader","CustomLegend","CustomEmptyState","CustomLoadingState","EventCallbacks","SegmentClickHandler","ForwardRef","Polymorphic","CustomPadding","CustomBarGap","CustomBarWidth","RotatedLabels","CustomLabelSpacing","CustomAxisMargins","CompleteLayoutCustomization","InCard"];export{E as Active,le as CompleteLayoutCustomization,oe as CustomAxisMargins,re as CustomBarGap,ie as CustomBarWidth,U as CustomEmptyState,K as CustomHeader,se as CustomLabelSpacing,_ as CustomLegend,P as CustomLoadingState,ae as CustomPadding,B as Default,F as Disabled,z as Empty,q as Error,Q as EventCallbacks,D as Focus,ee as ForwardRef,V as Horizontal,R as Hover,de as InCard,O as Large,G as Loading,Y as Medium,te as Polymorphic,J as ResponsiveWidth,ne as RotatedLabels,Z as SegmentClickHandler,X as Small,H as Stacked,I as Vertical,W as WithTitle,N as WithoutGrid,Sn as __namedExportsOrder,An as default};
