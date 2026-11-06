import{j as t}from"./jsx-runtime-DztICxWZ.js";import{r as x}from"./index-Bv9Y92EF.js";import{H as Vt}from"./Home-Bococija.js";import{P as Pt}from"./Person-C_m7jF1T.js";import{c as Rt}from"./createSvgIcon-Ce6eLUkr.js";import{C as Wt}from"./CheckCircle-7eFwq9GJ.js";import{g as d,f as n,E as Nt}from"./styled-components.browser.esm-CVW2bgxI.js";import{C as ae}from"./Check-DsOlYiB6.js";import{T as i}from"./Typography-CidD3oMh.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Et=Rt(t.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z"})),Lt=Nt`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`,Mt=Nt`
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
`,re=e=>({small:"1rem",medium:"1.5rem",large:"2rem"})[e],se=e=>({small:"2.75rem",medium:"2.75rem",large:"2.75rem"})[e],Q=e=>({small:"0.625rem",medium:"0.875rem",large:"1.125rem"})[e],Ht=e=>n`
  ${({theme:a})=>{const p={default:a.colors.palette.primary[500],safe:a.colors.palette.success[500],warning:a.colors.palette.warning[600],alert:a.colors.palette.error[500]}[e];return n`
      background: transparent;
      border: ${a.borderWidth[2]} solid ${p};
      color: ${p};
    `}}
`,Ot=e=>n`
  ${({theme:a})=>{const p={default:a.colors.palette.primary[500],safe:a.colors.palette.success[500],warning:a.colors.palette.warning[600],alert:a.colors.palette.error[500]}[e];return n`
      background: ${p};
      border: ${a.borderWidth[2]} solid ${p};
      color: ${a.colors.palette.neutral[50]};
    `}}
`,Bt=()=>n`
  ${({theme:e})=>n`
    background: transparent;
    border: ${e.borderWidth[2]} solid ${e.colors.palette.error[500]};
    color: ${e.colors.palette.error[500]};
  `}
`,_t=()=>n`
  ${({theme:e})=>n`
    background: transparent;
    border: ${e.borderWidth[2]} solid ${e.colors.palette.neutral[400]};
    color: ${e.colors.palette.neutral[400]};
  `}
`,Kt=()=>n`
  ${({theme:e})=>n`
    background: transparent;
    border: ${e.borderWidth[2]} solid ${e.colors.palette.neutral[300]};
    color: ${e.colors.palette.neutral[300]};
    cursor: not-allowed;
  `}
`,Ft=(e,a)=>{switch(e){case"completed":return Ot(a);case"active":return Ht(a);case"error":return Bt();case"disabled":return Kt();case"incomplete":default:return _t()}},Yt=(e,a)=>n`
  ${({theme:r})=>e?`background: ${{default:r.colors.palette.primary[300],safe:r.colors.palette.success[300],warning:r.colors.palette.warning[400],alert:r.colors.palette.error[300]}[a]};`:`background: ${r.colors.palette.neutral[400]};`}
`,Zt=d.div`
  display: flex;
  /* Horizontal: single row of [bubble–connector–bubble–connector–bubble]
     Vertical:   single column, everything centred on the same axis        */
  flex-direction: ${({$orientation:e})=>e==="vertical"?"column":"row"};
  align-items: ${({$orientation:e})=>e==="vertical"?"center":"flex-start"};
  width: 100%;
`,Ut=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Horizontal: do NOT flex — stay as narrow as the bubble+label */
  flex: 0 0 auto;
  min-width: 0;

  ${({$clickable:e,$disabled:a})=>e&&!a&&n`
      cursor: pointer;
    `}

  ${({$disabled:e})=>e&&n`
      cursor: not-allowed;
      pointer-events: none;
    `}
`,Xt=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`,Gt=d.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({$size:e})=>se(e)};
  min-height: ${({$size:e})=>se(e)};
  border-radius: ${({theme:e})=>e.borderRadius.full};

  /* Show focus ring on the touch target, not the bubble */
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }

  ${({$clickable:e})=>e&&n`
      &:hover .step-bubble {
        filter: brightness(0.9);
      }
    `}
`,Jt=d.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({$size:e})=>re(e)};
  height: ${({$size:e})=>re(e)};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  flex-shrink: 0;
  transition:
    background 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  /* Icon / number sizing */
  font-size: ${({$size:e})=>Q(e)};
  line-height: 1;

  /* Status-driven colour */
  ${({$status:e,$type:a})=>Ft(e,a)}

  svg {
    width: ${({$size:e})=>Q(e)};
    height: ${({$size:e})=>Q(e)};
    display: block;
    flex-shrink: 0;
  }
`,Qt=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: ${({theme:e})=>e.spacing[2]};
  gap: ${({theme:e})=>e.spacing[1]};
`,ea=d.span`
  color: ${({theme:e,$disabled:a})=>a?e.colors.palette.neutral[400]:e.colors.palette.primary[800]};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[16]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights[19]};
  white-space: nowrap;
`,ta=d.span`
  color: ${({theme:e,$disabled:a})=>a?e.colors.palette.neutral[300]:e.colors.palette.neutral[600]};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[12]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  white-space: nowrap;
`,aa=d.span`
  color: ${({theme:e})=>e.colors.palette.neutral[500]};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[12]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  font-style: italic;
`,ra=d.span`
  color: ${({theme:e})=>e.colors.palette.error[600]};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[12]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  white-space: nowrap;
`,sa=d.div`
  display: flex;
  align-items: center;
  justify-content: center;

  /* ── HORIZONTAL ─────────────────────────────────────────────────────────
     flex:1 makes the connector stretch to fill all remaining space between
     the fixed-width bubbles. align-self:flex-start keeps it vertically
     aligned with the bubble row (not the label text below).              */
  ${({$orientation:e})=>e==="horizontal"&&n`
      flex: 1 1 auto;
      align-self: flex-start;
      /* Vertically centre the line within the touch-target height (44px) */
      height: 2.75rem;
      padding: 0 ${({theme:a})=>a.spacing[2]};
    `}

  /* ── VERTICAL ───────────────────────────────────────────────────────────
     Fixed height, stays on the shared centre axis (align-self: center
     because StepperRoot uses align-items: center for vertical).          */
  ${({$orientation:e})=>e==="vertical"&&n`
      flex: 0 0 auto;
      align-self: center;
      width: 4px; /* wider wrapper to hold the 2px line + room to breathe */
      height: ${({theme:a})=>a.spacing[21]}; /* 70px */
      padding: ${({theme:a})=>a.spacing[1]} 0;
    `}
`,ia=d.div`
  border-radius: ${({theme:e})=>e.borderRadius.full};

  ${({$orientation:e})=>e==="horizontal"?n`
          width: 100%;
          height: 2px;
          transform-origin: left center;
        `:n`
          height: 100%;
          width: 2px;
          transform-origin: top center;
        `}

  /* Colour transition for incomplete → completed */
  transition: background 0.3s ease-in-out;

  /* Fill animation — plays once when connector becomes completed */
  ${({$completed:e,$orientation:a})=>e&&n`
      animation: ${a==="horizontal"?Lt:Mt}
        0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;

      /* Respect reduced-motion preference */
      @media (prefers-reduced-motion: reduce) {
        animation: none;
        transform: none;
      }
    `}

  ${({$completed:e,$type:a})=>Yt(e,a)}
`,ie=d.span`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-size: ${({$size:e,theme:a})=>e==="large"?a.fontSizes[16]:a.fontSizes[12]};
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`,T=x.forwardRef(({status:e="incomplete",size:a="large",type:r="default",content:p="icon",stepNumber:h=1,icon:S,label:u,description:B,optional:j=!1,errorMessage:_,showLabel:Y=!0,clickable:Z=!1,onClick:y,className:U,style:X,...G},J)=>{const g=e==="disabled",K=e==="completed",s=e==="error",c=e==="active",l=Z&&!g,f=x.useCallback(b=>{l&&(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),y==null||y())},[l,y]),w=()=>S||(K?t.jsx(ae,{fontSize:"inherit"}):s?p==="number"?t.jsx(ie,{$size:a,children:h}):t.jsx(ae,{fontSize:"inherit"}):p==="number"?t.jsx(ie,{$size:a,children:h}):null),F=u?`${u}${c?" — current step":""}${K?" — completed":""}${s?" — error":""}${g?" — disabled":""}`:void 0;return t.jsxs(Xt,{ref:J,className:U,style:X,...G,children:[t.jsx(Gt,{$size:a,$clickable:l,role:l?"button":void 0,tabIndex:l?0:void 0,"aria-label":F,"aria-current":c?"step":void 0,"aria-disabled":g?!0:void 0,onClick:l?y:void 0,onKeyDown:f,children:t.jsx(Jt,{className:"step-bubble",$size:a,$status:e,$type:r,$clickable:l,children:w()})}),Y&&u&&t.jsxs(Qt,{children:[t.jsx(ea,{$disabled:g,children:t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:u})}),j&&t.jsx(aa,{children:t.jsx(i,{variant:"caption",as:"span",children:"(Optional)"})}),B&&t.jsx(ta,{$disabled:g,children:t.jsx(i,{variant:"caption",as:"span",children:B})}),s&&_&&t.jsx(ra,{role:"alert",children:t.jsx(i,{variant:"caption",as:"span",children:_})})]})]})});T.displayName="StepIndicator";T.__docgenInfo={description:"",methods:[],displayName:"StepIndicator",props:{status:{required:!1,tsType:{name:"union",raw:"'completed' | 'active' | 'incomplete' | 'error' | 'disabled'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'incomplete'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:`Lifecycle status of this step.
@default 'incomplete'`,defaultValue:{value:"'incomplete'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Size of the bubble.
@default 'large'`,defaultValue:{value:"'large'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'safe' | 'warning' | 'alert'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'safe'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'alert'"}]},description:`Semantic color type.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},content:{required:!1,tsType:{name:"union",raw:"'icon' | 'number'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'number'"}]},description:`What to render inside the bubble.
@default 'icon'`,defaultValue:{value:"'icon'",computed:!1}},stepNumber:{required:!1,tsType:{name:"number"},description:`Step number displayed when content === 'number'.
@default 1`,defaultValue:{value:"1",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon to render inside the bubble (overrides content prop)."},label:{required:!1,tsType:{name:"string"},description:"Label text shown below the bubble."},description:{required:!1,tsType:{name:"string"},description:"Description text shown below the label."},optional:{required:!1,tsType:{name:"boolean"},description:'Optional hint text "(Optional)" shown below the label.',defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message shown below the label (only when status === 'error')."},showLabel:{required:!1,tsType:{name:"boolean"},description:`Hide the label below the bubble — compact/icon-only mode.
@default true`,defaultValue:{value:"true",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:`Whether this step is part of a clickable stepper.
Adds tabIndex and keyboard handler.
@default false`,defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when this step is clicked or activated via keyboard."},className:{required:!1,tsType:{name:"string"},description:"Additional className for the outer wrapper."},style:{required:!1,tsType:{name:"CSSProperties"},description:"Inline style for the outer wrapper."}},composes:["Omit"]};const O=x.forwardRef(({completed:e=!1,orientation:a="horizontal",type:r="default",className:p,style:h,...S},u)=>t.jsx(sa,{ref:u,$orientation:a,className:p,style:h,"aria-hidden":"true",...S,children:t.jsx(ia,{$completed:e,$orientation:a,$type:r})}));O.displayName="StepConnector";O.__docgenInfo={description:"",methods:[],displayName:"StepConnector",props:{completed:{required:!1,tsType:{name:"boolean"},description:`Whether the step before this connector is completed.
Controls the colour of the line.
@default false`,defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Connector orientation.
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'safe' | 'warning' | 'alert'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'safe'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'alert'"}]},description:`Semantic type — drives completed line colour.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className."},style:{required:!1,tsType:{name:"CSSProperties"},description:"Inline style."}},composes:["HTMLAttributes"]};function ne(e,a,r){return e.status?e.status:e.disabled?"disabled":a<r?"completed":a===r?"active":"incomplete"}const o=x.forwardRef(({steps:e,activeStep:a=0,orientation:r="horizontal",size:p="large",type:h="default",content:S="icon",clickable:u=!1,showLabel:B=!0,onStepClick:j,as:_,className:Y,style:Z,stepClassName:y,connectorClassName:U,"aria-label":X="Progress steps",...G},J)=>{const g=_||"div",K=x.useCallback(s=>{var ee,te;if(!u)return;const c=document.activeElement,l=Array.from(s.currentTarget.querySelectorAll('[role="button"]')),f=l.indexOf(c),w=r==="horizontal",F=w?"ArrowRight":"ArrowDown",b=w?"ArrowLeft":"ArrowUp";if(s.key===F){s.preventDefault();const v=l[f+1];v==null||v.focus()}else if(s.key===b){s.preventDefault();const v=l[f-1];v==null||v.focus()}else s.key==="Home"?(s.preventDefault(),(ee=l[0])==null||ee.focus()):s.key==="End"&&(s.preventDefault(),(te=l[l.length-1])==null||te.focus())},[u,r,e]);return t.jsx(Zt,{as:g,ref:J,$orientation:r,role:"group","aria-label":X,className:Y,style:Z,onKeyDown:K,...G,children:e.map((s,c)=>{const l=ne(s,c,a),f=l==="disabled",w=s.key??String(c),b=(c>0?ne(e[c-1],c-1,a):null)==="completed";return t.jsxs(x.Fragment,{children:[c>0&&t.jsx(O,{orientation:r,completed:b,type:h,className:U}),t.jsx(Ut,{$orientation:r,$clickable:u&&!f,$disabled:f,className:y,children:t.jsx(T,{status:l,size:p,type:h,content:S,stepNumber:c+1,icon:s.icon,label:s.label,description:s.description,optional:s.optional,errorMessage:s.errorMessage,showLabel:B,clickable:u&&!f,onClick:u&&!f?()=>j==null?void 0:j(c,s):void 0})})]},w)})})});o.displayName="Stepper";o.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:`Array of step data objects.
@required`},activeStep:{required:!1,tsType:{name:"number"},description:`Zero-based index of the currently active step.
@default 0`,defaultValue:{value:"0",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Orientation of the stepper.
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Global size applied to all step bubbles unless overridden per step.
@default 'large'`,defaultValue:{value:"'large'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'safe' | 'warning' | 'alert'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'safe'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'alert'"}]},description:`Semantic type (color) applied globally.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},content:{required:!1,tsType:{name:"union",raw:"'icon' | 'number'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'number'"}]},description:`What to render inside each bubble — icon or step number.
@default 'icon'`,defaultValue:{value:"'icon'",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"Whether steps are clickable for non-linear navigation.\nWhen true, `onStepClick` is called on each completed/incomplete step.\n@default false",defaultValue:{value:"false",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Hide labels below every step bubble — compact/icon-only mode.
Useful for tight horizontal spaces or mobile layouts.
@default true`,defaultValue:{value:"true",computed:!1}},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(stepIndex: number, step: StepItem) => void",signature:{arguments:[{type:{name:"number"},name:"stepIndex"},{type:{name:"StepItem"},name:"step"}],return:{name:"void"}}},description:"Callback fired when a user clicks a step (requires `clickable` to be true)."},as:{required:!1,tsType:{name:"ElementType"},description:`Polymorphic: render the stepper root as a different element.
@default 'div'`},className:{required:!1,tsType:{name:"string"},description:"Additional className for the root container."},style:{required:!1,tsType:{name:"CSSProperties"},description:"Inline style for the root container."},stepClassName:{required:!1,tsType:{name:"string"},description:"Additional className for each step wrapper."},connectorClassName:{required:!1,tsType:{name:"string"},description:"Additional className for each connector."},"aria-label":{required:!1,tsType:{name:"string"},description:`ARIA label for the stepper navigation landmark.
@default 'Progress steps'`,defaultValue:{value:"'Progress steps'",computed:!1}}},composes:["Omit"]};const ya={title:"Components/Stepper",component:o,parameters:{layout:"padded",docs:{description:{component:`
Stepper guides users through a sequence of steps in a multi-step flow such as a form, checkout, or onboarding wizard.

**Orientations:** Horizontal · Vertical

**Sizes:** Small (16px) · Medium (24px) · Large (32px)

**Types:** Default · Safe · Warning · Alert

**Step states:** Completed · Active · Incomplete · Error · Disabled

**Sub-components:** \`StepIndicator\` and \`StepConnector\` are also exported for fully custom layouts.
        `}}},tags:["autodocs"],argTypes:{activeStep:{control:{type:"number",min:0,max:5},description:"Zero-based index of the active step"},orientation:{control:"radio",options:["horizontal","vertical"]},size:{control:"select",options:["small","medium","large"]},type:{control:"select",options:["default","safe","warning","alert"]},content:{control:"radio",options:["icon","number"]},clickable:{control:"boolean"},showLabel:{control:"boolean"}}},m=[{label:"Personal Info",description:"Your basic details"},{label:"Review",description:"Check your info"},{label:"Confirm",description:"Submit form"}],H=[{label:"Account",description:"Create credentials"},{label:"Profile",description:"Personal details",optional:!0},{label:"Payment",description:"Billing info"},{label:"Review",description:"Check everything"},{label:"Done",description:"All complete"}],$={args:{steps:m,activeStep:1,orientation:"horizontal",size:"large",type:"default",content:"icon"}},z={args:{content:"number"},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[t.jsxs("div",{children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:"Small (16px)"}),t.jsx("div",{style:{marginTop:"12px"},children:t.jsx(o,{steps:m,activeStep:1,size:"small"})})]}),t.jsxs("div",{children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:"Medium (24px)"}),t.jsx("div",{style:{marginTop:"12px"},children:t.jsx(o,{steps:m,activeStep:1,size:"medium"})})]}),t.jsxs("div",{children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:"Large (32px) — Default"}),t.jsx("div",{style:{marginTop:"12px"},children:t.jsx(o,{steps:m,activeStep:1,size:"large"})})]})]})},C={render:()=>t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:["default","safe","warning","alert"].map(e=>t.jsxs("div",{children:[t.jsxs(i,{variant:"caption",weight:"medium",as:"span",children:["Type: ",e]}),t.jsx("div",{style:{marginTop:"12px"},children:t.jsx(o,{steps:m,activeStep:1,type:e})})]},e))})},k={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[t.jsxs("div",{children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:"Content: Icon (default)"}),t.jsx("div",{style:{marginTop:"12px"},children:t.jsx(o,{steps:m,activeStep:1,content:"icon"})})]}),t.jsxs("div",{children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:"Content: Number"}),t.jsx("div",{style:{marginTop:"12px"},children:t.jsx(o,{steps:m,activeStep:1,content:"number"})})]})]})},D={args:{steps:m,activeStep:1,orientation:"vertical",size:"large"}},I={render:()=>{const e=[{label:"Completed",status:"completed"},{label:"Active",status:"active"},{label:"Incomplete",status:"incomplete"},{label:"Error",status:"error",errorMessage:"Validation failed"},{label:"Disabled",status:"disabled"}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:"All five statuses in one stepper"}),t.jsx(o,{steps:e,activeStep:1})]})}},A={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:"Steps with description and optional flag"}),t.jsx(o,{steps:H,activeStep:2})]})},q={render:()=>{const e=[{label:"Account",status:"completed"},{label:"Payment",status:"error",errorMessage:"Card number is invalid"},{label:"Confirm",status:"incomplete"}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:"Step 2 — active error (validation failed)"}),t.jsx(o,{steps:e,activeStep:1})]})}},N={render:()=>{const e=[{label:"Account",icon:t.jsx(Vt,{fontSize:"inherit"}),status:"completed"},{label:"Profile",icon:t.jsx(Pt,{fontSize:"inherit"}),status:"active"},{label:"Payment",icon:t.jsx(Et,{fontSize:"inherit"}),status:"incomplete"},{label:"Done",icon:t.jsx(Wt,{fontSize:"inherit"}),status:"incomplete"}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:"Custom per-step icons from @mui/icons-material"}),t.jsx(o,{steps:e,activeStep:1})]})}},V={render:()=>{const[e,a]=x.useState(1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsxs(i,{variant:"caption",weight:"medium",as:"span",children:["Clickable stepper — active step: ",e+1]}),t.jsx(o,{steps:H,activeStep:e,clickable:!0,onStepClick:r=>a(r)}),t.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"8px"},children:[t.jsx("button",{onClick:()=>a(Math.max(0,e-1)),disabled:e===0,style:{padding:"8px 16px",cursor:e===0?"not-allowed":"pointer"},children:"Back"}),t.jsx("button",{onClick:()=>a(Math.min(H.length-1,e+1)),disabled:e===H.length-1,style:{padding:"8px 16px",cursor:e===H.length-1?"not-allowed":"pointer"},children:"Next"})]})]})}},P={render:()=>{const e=[{label:"Account",status:"completed"},{label:"Profile",status:"active"},{label:"Payment",disabled:!0},{label:"Review",disabled:!0},{label:"Done",disabled:!0}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:"Steps 3–5 are disabled (locked)"}),t.jsx(o,{steps:e,activeStep:1,clickable:!0})]})}},R={args:{steps:m,activeStep:1,showLabel:!1}},W={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:"Custom layout using StepIndicator + StepConnector primitives"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(T,{status:"completed",size:"large",label:"Step 1"}),t.jsx(O,{orientation:"horizontal",completed:!0,type:"default",style:{flex:1}}),t.jsx(T,{status:"active",size:"large",content:"number",stepNumber:2,label:"Step 2"}),t.jsx(O,{orientation:"horizontal",completed:!1,type:"default",style:{flex:1}}),t.jsx(T,{status:"incomplete",size:"large",content:"number",stepNumber:3,label:"Step 3"})]})]})},E={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:"forwardRef — the ref attaches to the root stepper div"}),t.jsx(o,{steps:m,activeStep:1,ref:e=>{e&&(e.dataset.refAttached="true")}})]})},L={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsxs(i,{variant:"caption",weight:"medium",as:"span",children:["Stepper rendered as a ","<nav>"," element"]}),t.jsx(o,{as:"nav",steps:m,activeStep:1,"aria-label":"Checkout steps"})]})},M={render:()=>t.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"64px",flexWrap:"wrap"},children:["default","safe","warning","alert"].map(e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(i,{variant:"caption",weight:"medium",as:"span",children:e}),t.jsx(o,{steps:m,activeStep:1,orientation:"vertical",type:e})]},e))})};var oe,le,pe,ce,de;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    activeStep: 1,
    orientation: 'horizontal',
    size: 'large',
    type: 'default',
    content: 'icon'
  }
}`,...(pe=(le=$.parameters)==null?void 0:le.docs)==null?void 0:pe.source},description:{story:`Default horizontal stepper with 3 steps.
Step 0 is completed, Step 1 is active (current), Step 2 is incomplete.`,...(de=(ce=$.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var ue,me,fe,he,ye;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    content: "number"
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Typography variant="caption" weight="medium" as="span">Small (16px)</Typography>
        <div style={{
        marginTop: '12px'
      }}>
          <Stepper steps={basicSteps} activeStep={1} size="small" />
        </div>
      </div>
      <div>
        <Typography variant="caption" weight="medium" as="span">Medium (24px)</Typography>
        <div style={{
        marginTop: '12px'
      }}>
          <Stepper steps={basicSteps} activeStep={1} size="medium" />
        </div>
      </div>
      <div>
        <Typography variant="caption" weight="medium" as="span">Large (32px) — Default</Typography>
        <div style={{
        marginTop: '12px'
      }}>
          <Stepper steps={basicSteps} activeStep={1} size="large" />
        </div>
      </div>
    </div>
}`,...(fe=(me=z.parameters)==null?void 0:me.docs)==null?void 0:fe.source},description:{story:"Side-by-side comparison of all three bubble sizes.",...(ye=(he=z.parameters)==null?void 0:he.docs)==null?void 0:ye.description}}};var ge,be,ve,xe,Se;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      {(['default', 'safe', 'warning', 'alert'] as const).map(type => <div key={type}>
          <Typography variant="caption" weight="medium" as="span">
            Type: {type}
          </Typography>
          <div style={{
        marginTop: '12px'
      }}>
            <Stepper steps={basicSteps} activeStep={1} type={type} />
          </div>
        </div>)}
    </div>
}`,...(ve=(be=C.parameters)==null?void 0:be.docs)==null?void 0:ve.source},description:{story:`All four semantic type variants — default (purple), safe (green),
warning (yellow), alert (red).`,...(Se=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:Se.description}}};var we,Te,je,$e,ze;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Typography variant="caption" weight="medium" as="span">Content: Icon (default)</Typography>
        <div style={{
        marginTop: '12px'
      }}>
          <Stepper steps={basicSteps} activeStep={1} content="icon" />
        </div>
      </div>
      <div>
        <Typography variant="caption" weight="medium" as="span">Content: Number</Typography>
        <div style={{
        marginTop: '12px'
      }}>
          <Stepper steps={basicSteps} activeStep={1} content="number" />
        </div>
      </div>
    </div>
}`,...(je=(Te=k.parameters)==null?void 0:Te.docs)==null?void 0:je.source},description:{story:"Icon content (default checkmark) vs number content inside the bubble.",...(ze=($e=k.parameters)==null?void 0:$e.docs)==null?void 0:ze.description}}};var Ce,ke,De,Ie,Ae;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    activeStep: 1,
    orientation: 'vertical',
    size: 'large'
  }
}`,...(De=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:De.source},description:{story:"Vertical stepper — steps stacked top-to-bottom with a vertical connector.",...(Ae=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.description}}};var qe,Ne,Ve,Pe,Re;I.parameters={...I.parameters,docs:{...(qe=I.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => {
    const statusSteps: StepItem[] = [{
      label: 'Completed',
      status: 'completed'
    }, {
      label: 'Active',
      status: 'active'
    }, {
      label: 'Incomplete',
      status: 'incomplete'
    }, {
      label: 'Error',
      status: 'error',
      errorMessage: 'Validation failed'
    }, {
      label: 'Disabled',
      status: 'disabled'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Typography variant="caption" weight="medium" as="span">
          All five statuses in one stepper
        </Typography>
        <Stepper steps={statusSteps} activeStep={1} />
      </div>;
  }
}`,...(Ve=(Ne=I.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source},description:{story:"Every possible step status displayed in a single stepper using explicit\nper-step `status` overrides.",...(Re=(Pe=I.parameters)==null?void 0:Pe.docs)==null?void 0:Re.description}}};var We,Ee,Le,Me,He;A.parameters={...A.parameters,docs:{...(We=A.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Typography variant="caption" weight="medium" as="span">
        Steps with description and optional flag
      </Typography>
      <Stepper steps={fullSteps} activeStep={2} />
    </div>
}`,...(Le=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source},description:{story:"Steps with secondary description lines and optional step markers.",...(He=(Me=A.parameters)==null?void 0:Me.docs)==null?void 0:He.description}}};var Oe,Be,_e,Ke,Fe;q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => {
    const errorSteps: StepItem[] = [{
      label: 'Account',
      status: 'completed'
    }, {
      label: 'Payment',
      status: 'error',
      errorMessage: 'Card number is invalid'
    }, {
      label: 'Confirm',
      status: 'incomplete'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Typography variant="caption" weight="medium" as="span">
          Step 2 — active error (validation failed)
        </Typography>
        <Stepper steps={errorSteps} activeStep={1} />
      </div>;
  }
}`,...(_e=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:_e.source},description:{story:`Active step in error state — red bubble outline + inline error message.
This is the "Active Error" instance: an in-progress step that failed.`,...(Fe=(Ke=q.parameters)==null?void 0:Ke.docs)==null?void 0:Fe.description}}};var Ye,Ze,Ue,Xe,Ge;N.parameters={...N.parameters,docs:{...(Ye=N.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => {
    const iconSteps: StepItem[] = [{
      label: 'Account',
      icon: <HomeIcon fontSize="inherit" />,
      status: 'completed'
    }, {
      label: 'Profile',
      icon: <PersonIcon fontSize="inherit" />,
      status: 'active'
    }, {
      label: 'Payment',
      icon: <PaymentIcon fontSize="inherit" />,
      status: 'incomplete'
    }, {
      label: 'Done',
      icon: <CheckCircleIcon fontSize="inherit" />,
      status: 'incomplete'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Typography variant="caption" weight="medium" as="span">
          Custom per-step icons from @mui/icons-material
        </Typography>
        <Stepper steps={iconSteps} activeStep={1} />
      </div>;
  }
}`,...(Ue=(Ze=N.parameters)==null?void 0:Ze.docs)==null?void 0:Ue.source},description:{story:`Each step uses a custom Material icon instead of the default checkmark.
Pass the icon node on the step object — it overrides the bubble content
for that step only.`,...(Ge=(Xe=N.parameters)==null?void 0:Xe.docs)==null?void 0:Ge.description}}};var Je,Qe,et,tt,at;V.parameters={...V.parameters,docs:{...(Je=V.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Typography variant="caption" weight="medium" as="span">
          Clickable stepper — active step: {active + 1}
        </Typography>
        <Stepper steps={fullSteps} activeStep={active} clickable onStepClick={i => setActive(i)} />
        <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: '8px'
      }}>
          <button onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0} style={{
          padding: '8px 16px',
          cursor: active === 0 ? 'not-allowed' : 'pointer'
        }}>
            Back
          </button>
          <button onClick={() => setActive(Math.min(fullSteps.length - 1, active + 1))} disabled={active === fullSteps.length - 1} style={{
          padding: '8px 16px',
          cursor: active === fullSteps.length - 1 ? 'not-allowed' : 'pointer'
        }}>
            Next
          </button>
        </div>
      </div>;
  }
}`,...(et=(Qe=V.parameters)==null?void 0:Qe.docs)==null?void 0:et.source},description:{story:`Clickable stepper — users can jump to any non-disabled step.
onStepClick fires with the step index and step data.
Try Tab + Enter / Space for keyboard navigation.`,...(at=(tt=V.parameters)==null?void 0:tt.docs)==null?void 0:at.description}}};var rt,st,it,nt,ot;P.parameters={...P.parameters,docs:{...(rt=P.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: () => {
    const disabledSteps: StepItem[] = [{
      label: 'Account',
      status: 'completed'
    }, {
      label: 'Profile',
      status: 'active'
    }, {
      label: 'Payment',
      disabled: true
    }, {
      label: 'Review',
      disabled: true
    }, {
      label: 'Done',
      disabled: true
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Typography variant="caption" weight="medium" as="span">
          Steps 3–5 are disabled (locked)
        </Typography>
        <Stepper steps={disabledSteps} activeStep={1} clickable />
      </div>;
  }
}`,...(it=(st=P.parameters)==null?void 0:st.docs)==null?void 0:it.source},description:{story:`Steps marked as disabled are greyed out and not clickable,
even when the stepper has clickable=true.`,...(ot=(nt=P.parameters)==null?void 0:nt.docs)==null?void 0:ot.description}}};var lt,pt,ct,dt,ut;R.parameters={...R.parameters,docs:{...(lt=R.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    activeStep: 1,
    showLabel: false
  }
}`,...(ct=(pt=R.parameters)==null?void 0:pt.docs)==null?void 0:ct.source},description:{story:`Compact stepper with labels hidden — useful in tight horizontal spaces
or when the step context is obvious.`,...(ut=(dt=R.parameters)==null?void 0:dt.docs)==null?void 0:ut.description}}};var mt,ft,ht,yt,gt;W.parameters={...W.parameters,docs:{...(mt=W.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Typography variant="caption" weight="medium" as="span">
        Custom layout using StepIndicator + StepConnector primitives
      </Typography>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <StepIndicator status="completed" size="large" label="Step 1" />
        <StepConnector orientation="horizontal" completed type="default" style={{
        flex: 1
      }} />
        <StepIndicator status="active" size="large" content="number" stepNumber={2} label="Step 2" />
        <StepConnector orientation="horizontal" completed={false} type="default" style={{
        flex: 1
      }} />
        <StepIndicator status="incomplete" size="large" content="number" stepNumber={3} label="Step 3" />
      </div>
    </div>
}`,...(ht=(ft=W.parameters)==null?void 0:ft.docs)==null?void 0:ht.source},description:{story:`Advanced: using StepIndicator + StepConnector directly for a fully custom
layout (e.g. step label on the right in a vertical flow).`,...(gt=(yt=W.parameters)==null?void 0:yt.docs)==null?void 0:gt.description}}};var bt,vt,xt,St,wt;E.parameters={...E.parameters,docs:{...(bt=E.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  render: () => {
    // In real usage: const ref = useRef<HTMLDivElement>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <Typography variant="caption" weight="medium" as="span">
          forwardRef — the ref attaches to the root stepper div
        </Typography>
        <Stepper steps={basicSteps} activeStep={1} ref={el => {
        if (el) el.dataset.refAttached = 'true';
      }} />
      </div>;
  }
}`,...(xt=(vt=E.parameters)==null?void 0:vt.docs)==null?void 0:xt.source},description:{story:`Demonstrates forwardRef — the ref is attached to the root DOM node
of the Stepper container.`,...(wt=(St=E.parameters)==null?void 0:St.docs)==null?void 0:wt.description}}};var Tt,jt,$t,zt,Ct;L.parameters={...L.parameters,docs:{...(Tt=L.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Typography variant="caption" weight="medium" as="span">
        Stepper rendered as a {"<nav>"} element
      </Typography>
      <Stepper as="nav" steps={basicSteps} activeStep={1} aria-label="Checkout steps" />
    </div>
}`,...($t=(jt=L.parameters)==null?void 0:jt.docs)==null?void 0:$t.source},description:{story:"Stepper rendered as a <nav> element using the polymorphic 'as' prop.",...(Ct=(zt=L.parameters)==null?void 0:zt.docs)==null?void 0:Ct.description}}};var kt,Dt,It,At,qt;M.parameters={...M.parameters,docs:{...(kt=M.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '64px',
    flexWrap: 'wrap'
  }}>
      {(['default', 'safe', 'warning', 'alert'] as const).map(type => <div key={type} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
          <Typography variant="caption" weight="medium" as="span">{type}</Typography>
          <Stepper steps={basicSteps} activeStep={1} orientation="vertical" type={type} />
        </div>)}
    </div>
}`,...(It=(Dt=M.parameters)==null?void 0:Dt.docs)==null?void 0:It.source},description:{story:"Vertical orientation with all semantic type variants.",...(qt=(At=M.parameters)==null?void 0:At.docs)==null?void 0:qt.description}}};const ga=["Default","AllSizes","AllTypes","ContentVariants","Vertical","AllStatuses","WithDescriptionAndOptional","ErrorState","CustomIcons","Clickable","DisabledSteps","NoLabels","CustomLayout","WithRef","AsNav","VerticalAllTypes"];export{z as AllSizes,I as AllStatuses,C as AllTypes,L as AsNav,V as Clickable,k as ContentVariants,N as CustomIcons,W as CustomLayout,$ as Default,P as DisabledSteps,q as ErrorState,R as NoLabels,D as Vertical,M as VerticalAllTypes,A as WithDescriptionAndOptional,E as WithRef,ga as __namedExportsOrder,ya as default};
