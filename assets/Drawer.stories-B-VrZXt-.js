import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as s,R as jt}from"./index-Bv9Y92EF.js";import{g as d}from"./styled-components.browser.esm-CVW2bgxI.js";import{T as t}from"./Typography-CidD3oMh.js";import{I as _}from"./Icon-DSqvK6Kv.js";import{B as o}from"./Button-DlNRQx8j.js";import{I as y}from"./InputField-BAIr4sa2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Search-Bpcrs37S.js";import"./createSvgIcon-Ce6eLUkr.js";import"./ExpandMore-Bd7rmlfk.js";import"./Close-CtL5j8iM.js";import"./Settings-aYyvLXSG.js";import"./Home-Bococija.js";import"./FieldImportance-D7BkpLTs.js";import"./HelpingText-DBD3feHR.js";const Dt=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1100; /* Drawer overlay - above Modal (1000) */
  opacity: ${({$isOpen:r})=>r?1:0};
  visibility: ${({$isOpen:r})=>r?"visible":"hidden"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`,Ct=d.div`
  position: fixed;
  top: 0;
  ${({$position:r})=>r==="right"?"right: 0":"left: 0"};
  bottom: 0;
  width: ${({$width:r})=>r||"min(90vw, 37.5rem)"};
  max-width: ${({$maxWidth:r})=>r||"90vw"};
  min-width: ${({$minWidth:r})=>r};
  background: ${({theme:r})=>r.colors.semantic.background.secondary};
  display: flex;
  flex-direction: column;
  z-index: 1101; /* Drawer container - above Drawer overlay (1100) */
  box-shadow: ${({theme:r,$position:a})=>a==="right"?r.shadows.xl||"-4px 0 6px -1px rgba(0, 0, 0, 0.1)":r.shadows.xl||"4px 0 6px -1px rgba(0, 0, 0, 0.1)"};
  transform: ${({$isOpen:r,$position:a})=>r?"translateX(0)":a==="right"?"translateX(100%)":"translateX(-100%)"};
  transition: transform 0.3s ease;
  pointer-events: ${({$disabled:r})=>r?"none":"auto"};
  opacity: ${({$disabled:r})=>r?.6:1};
`,St=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${({theme:r})=>`${r.spacing[8]} ${r.spacing[10]}`};
  border-bottom: ${({theme:r})=>r.borderWidth[1]} solid ${({theme:r})=>r.colors.semantic.border.default};
  flex-shrink: 0;
  gap: ${({theme:r})=>r.spacing[4]};
`,kt=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:r})=>r.spacing[3]};
  flex: 1;
  min-width: 0;
`,Et=d.div`
  color: ${({theme:r})=>r.colors.semantic.text.secondary};
`,Rt=d.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({theme:r})=>r.spacing[12]};
  min-height: ${({theme:r})=>r.spacing[12]};
  padding: ${({theme:r})=>r.spacing[3]};
  background: none;
  border: none;
  border-radius: ${({theme:r})=>r.borderRadius.sm};
  cursor: pointer;
  color: ${({theme:r})=>r.colors.semantic.text.primary};
  transition: background 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({theme:r})=>r.colors.semantic.background.secondary};
  }

  &:focus-visible {
    outline: ${({theme:r})=>r.borderWidth[2]} solid ${({theme:r})=>r.colors.semantic.focus.indicator};
    outline-offset: ${({theme:r})=>r.spacing[1]};
  }

  &:active {
    background: ${({theme:r})=>r.colors.semantic.background.tertiary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,$t=d.div`
  flex: 1;
  padding: ${({theme:r})=>r.spacing[4]};
  overflow-y: auto;
  overflow-x: hidden;
  
  /* Smooth scrolling */
  scroll-behavior: smooth;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: ${({theme:r})=>r.spacing[3]};
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:r})=>r.colors.semantic.background.secondary};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:r})=>r.colors.semantic.border.default};
    border-radius: ${({theme:r})=>r.borderRadius.sm};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:r})=>r.colors.semantic.border.hover};
  }
`,Wt=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:r})=>`${r.spacing[6]} ${r.spacing[10]} ${r.spacing[11]}`};
  border-top: ${({theme:r})=>r.borderWidth[1]} solid ${({theme:r})=>r.colors.semantic.border.default};
  flex-shrink: 0;
  gap: ${({theme:r})=>r.spacing[4]};
`,qt=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[4]};
`,Nt=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[5]};
`,zt=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,Ft=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:r})=>r.spacing[12]};
  text-align: center;
  gap: ${({theme:r})=>r.spacing[4]};
`,Lt=d.div`
  padding: ${({theme:r})=>r.spacing[4]};
  background: ${({theme:r})=>r.colors.palette.error[50]};
  border: ${({theme:r})=>r.borderWidth[1]} solid ${({theme:r})=>r.colors.semantic.border.error};
  border-radius: ${({theme:r})=>r.borderRadius.md};
  margin: ${({theme:r})=>r.spacing[4]};
  color: ${({theme:r})=>r.colors.semantic.text.error};
`,Bt=d.div`
  color: ${({theme:r})=>r.colors.semantic.text.secondary};
`,It=d.div`
  color: ${({theme:r})=>r.colors.semantic.text.secondary};
`,N=s.forwardRef(({isOpen:r,onClose:a,title:u,children:H,as:Kr,description:z,position:Qr="right",width:Zr,maxWidth:Gr,minWidth:et,isLoading:X=!1,isInvalid:rt=!1,errorMessage:J,isEmpty:tt=!1,emptyMessage:at="No content available",disabled:l=!1,showHeader:it=!0,showFooter:st=!0,showReset:K=!0,resetLabel:Q="Reset",onReset:Z,showCancel:G=!0,cancelLabel:ee="Cancel",onCancel:U,showSubmit:re=!0,submitLabel:te="Submit",onSubmit:ae,submitType:ie="default",isSubmitting:se=!1,customHeader:m,customFooter:h,customLoadingOverlay:ot,customEmptyState:nt,customErrorState:dt,closeOnOverlayClick:oe=!0,closeOnEscape:ne=!0,autoFocus:de=!0,returnFocus:F=!0,preventBodyScroll:le=!0,onOpen:L,onAfterOpen:B,onAfterClose:I,onOverlayClick:A,onEscapeKeyDown:V,className:lt,style:pt,overlayClassName:ct,overlayStyle:ut,headerClassName:pe,headerStyle:ce,bodyClassName:yt,bodyStyle:mt,footerClassName:ue,footerStyle:ye,"aria-label":me,"aria-labelledby":ht,"aria-describedby":ft,...gt},P)=>{const M=s.useRef(null),O=s.useRef(null),xt=s.useRef(`drawer-title-${Math.random().toString(36).substr(2,9)}`),bt=s.useRef(`drawer-description-${Math.random().toString(36).substr(2,9)}`),vt=s.useCallback(i=>{i.target===i.currentTarget&&oe&&!l&&(A==null||A(),a())},[oe,l,a,A]),he=s.useCallback(()=>{l||(U?U():a())},[l,U,a]),Y=s.useCallback(i=>{i.key==="Escape"&&!l&&(V==null||V(),a())},[l,a,V]);s.useEffect(()=>{if(r){L==null||L();const i=setTimeout(()=>{B==null||B()},300);return()=>clearTimeout(i)}else{const i=setTimeout(()=>{I==null||I()},300);return()=>clearTimeout(i)}},[r,L,B,I]),s.useEffect(()=>{if(!(!r||!ne))return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[r,ne,Y]),s.useEffect(()=>{if(le){if(r){const i=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",document.body.style.paddingRight=`${i}px`}else document.body.style.overflow="",document.body.style.paddingRight="";return()=>{document.body.style.overflow="",document.body.style.paddingRight=""}}},[r,le]),s.useEffect(()=>{if(r&&(F&&(O.current=document.activeElement),de)){const i=setTimeout(()=>{var c;const p=(c=M.current)==null?void 0:c.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])');p==null||p.focus()},100);return()=>clearTimeout(i)}},[r,de,F]),s.useEffect(()=>{!r&&F&&O.current&&(O.current.focus(),O.current=null)},[r,F]),s.useEffect(()=>{if(!r)return;const i=p=>{var xe;if(p.key!=="Tab")return;const c=(xe=M.current)==null?void 0:xe.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])');if(!c||c.length===0)return;const fe=c[0],ge=c[c.length-1];p.shiftKey&&document.activeElement===fe?(p.preventDefault(),ge.focus()):!p.shiftKey&&document.activeElement===ge&&(p.preventDefault(),fe.focus())};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[r]);const wt=s.useMemo(()=>m?typeof m=="function"?m({onClose:a}):m:e.jsxs(St,{className:pe,style:ce,children:[e.jsxs(kt,{children:[e.jsx(t,{variant:"headingM",weight:"semibold",as:"h2",children:u}),z&&e.jsx(Et,{children:e.jsx(t,{variant:"body",children:z})})]}),e.jsx(Rt,{onClick:a,"aria-label":"Close drawer",disabled:l,children:e.jsx(_,{name:"Close",size:"medium"})})]}),[m,a,u,z,pe,ce,l]),Tt=s.useMemo(()=>h?typeof h=="function"?h({onClose:a}):h:e.jsxs(Wt,{className:ue,style:ye,children:[e.jsx(qt,{children:K&&e.jsx(o,{variant:"tertiary",size:"medium",onClick:Z,disabled:l,children:Q})}),e.jsxs(Nt,{children:[G&&e.jsx(o,{variant:"secondary",size:"medium",leadingIcon:e.jsx(_,{name:"Close",size:"small"}),onClick:he,disabled:l,children:ee}),re&&e.jsx(o,{variant:"primary",size:"medium",buttonType:ie,leadingIcon:e.jsx(_,{name:"Check",size:"small"}),onClick:ae,disabled:l,isLoading:se,children:te})]})]}),[h,a,K,Q,Z,G,ee,he,re,te,ie,ae,se,l,ue,ye]);return r?e.jsxs(e.Fragment,{children:[e.jsx(Dt,{$isOpen:r,onClick:vt,className:ct,style:ut,"aria-hidden":"true"}),e.jsxs(Ct,{ref:i=>{M&&(M.current=i),typeof P=="function"?P(i):P&&(P.current=i)},as:Kr,$width:Zr,$maxWidth:Gr,$minWidth:et,$position:Qr,$isOpen:r,$disabled:l,className:lt,style:pt,role:"dialog","aria-modal":"true","aria-label":me,"aria-labelledby":ht||(me?void 0:xt.current),"aria-describedby":ft||(z?bt.current:void 0),...gt,children:[it&&wt,e.jsxs($t,{className:yt,style:mt,children:[rt&&J&&(dt||e.jsx(Lt,{role:"alert",children:e.jsx(t,{variant:"body",weight:"medium",children:J})})),tt&&!X?nt||e.jsx(Ft,{children:e.jsx(Bt,{children:e.jsx(t,{variant:"body",children:at})})}):H]}),st&&Tt,X&&(ot||e.jsx(zt,{children:e.jsx(It,{children:e.jsx(t,{variant:"body",children:"Loading..."})})}))]})]}):null});N.displayName="Drawer";N.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the drawer is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when drawer should close"},title:{required:!0,tsType:{name:"string"},description:"Drawer title"},children:{required:!0,tsType:{name:"ReactNode"},description:"Drawer body content"},as:{required:!1,tsType:{name:"ElementType"},description:"Render drawer container as a different element"},description:{required:!1,tsType:{name:"string"},description:"Drawer description/subtitle"},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Drawer position",defaultValue:{value:"'right'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:`Drawer width (e.g., '400px', '50%', 'min(90vw, 600px)')
@default 'min(90vw, 37.5rem)' (600px max)`},maxWidth:{required:!1,tsType:{name:"string"},description:`Maximum width constraint
@default '90vw'`},minWidth:{required:!1,tsType:{name:"string"},description:"Minimum width constraint"},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state - shows spinner overlay",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Error state - shows error message",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true"},isEmpty:{required:!1,tsType:{name:"boolean"},description:"Empty state - shows empty message",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No content available'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state - prevents all interactions",defaultValue:{value:"false",computed:!1}},showHeader:{required:!1,tsType:{name:"boolean"},description:`Show header section
@default true`,defaultValue:{value:"true",computed:!1}},showFooter:{required:!1,tsType:{name:"boolean"},description:`Show footer section
@default true`,defaultValue:{value:"true",computed:!1}},showReset:{required:!1,tsType:{name:"boolean"},description:"Show reset button",defaultValue:{value:"true",computed:!1}},resetLabel:{required:!1,tsType:{name:"string"},description:"Reset button label",defaultValue:{value:"'Reset'",computed:!1}},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Reset button callback"},showCancel:{required:!1,tsType:{name:"boolean"},description:"Show cancel button",defaultValue:{value:"true",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"Cancel button label",defaultValue:{value:"'Cancel'",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Cancel button callback"},showSubmit:{required:!1,tsType:{name:"boolean"},description:"Show submit button",defaultValue:{value:"true",computed:!1}},submitLabel:{required:!1,tsType:{name:"string"},description:"Submit button label",defaultValue:{value:"'Submit'",computed:!1}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Submit button callback"},submitType:{required:!1,tsType:{name:"union",raw:"'default' | 'safe' | 'warning' | 'alert'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'safe'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'alert'"}]},description:"Submit button type",defaultValue:{value:"'default'",computed:!1}},isSubmitting:{required:!1,tsType:{name:"boolean"},description:"Submit button loading state",defaultValue:{value:"false",computed:!1}},customHeader:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { onClose: () => void }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom header content (replaces default header)"},customFooter:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { onClose: () => void }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom footer content (replaces default footer)"},customLoadingOverlay:{required:!1,tsType:{name:"ReactNode"},description:"Custom loading overlay"},customEmptyState:{required:!1,tsType:{name:"ReactNode"},description:"Custom empty state"},customErrorState:{required:!1,tsType:{name:"ReactNode"},description:"Custom error state"},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"Close on overlay click",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Close on escape key",defaultValue:{value:"true",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Auto-focus first focusable element on open",defaultValue:{value:"true",computed:!1}},returnFocus:{required:!1,tsType:{name:"boolean"},description:"Return focus to trigger element on close",defaultValue:{value:"true",computed:!1}},preventBodyScroll:{required:!1,tsType:{name:"boolean"},description:"Prevent body scroll when drawer is open",defaultValue:{value:"true",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when drawer starts opening"},onAfterOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired after drawer finishes opening (after animation)"},onAfterClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired after drawer finishes closing (after animation)"},onOverlayClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when overlay is clicked"},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when escape key is pressed"},className:{required:!1,tsType:{name:"string"},description:"Custom className for drawer container"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for drawer container"},overlayClassName:{required:!1,tsType:{name:"string"},description:"Custom className for overlay"},overlayStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for overlay"},headerClassName:{required:!1,tsType:{name:"string"},description:"Custom className for header"},headerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for header"},bodyClassName:{required:!1,tsType:{name:"string"},description:"Custom className for body"},bodyStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for body"},footerClassName:{required:!1,tsType:{name:"string"},description:"Custom className for footer"},footerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for footer"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for the drawer"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of element that labels the drawer"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ID of element that describes the drawer"}},composes:["Omit"]};const ra={title:"Components/Drawer",component:N,parameters:{layout:"fullscreen",docs:{description:{component:`
# Drawer

Enterprise-grade side panel drawer with comprehensive accessibility, customization, and state management.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Drawer, Typography } from '@ajaysoni7832/lean-ids-components';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Drawer Title"
      >
        <Typography variant="body">Drawer content goes here</Typography>
      </Drawer>
    </>
  );
}
\`\`\`

## Features

✅ **forwardRef Support** - Access drawer DOM node
✅ **Polymorphic 'as' Prop** - Render as different element
✅ **All 8 States** - Default, hover, focus, active, disabled, loading, empty, error
✅ **Full Accessibility** - ARIA, keyboard navigation, focus trap
✅ **Customization Slots** - Custom header, footer, loading, empty, error states
✅ **Multiple Override Points** - className and style for all sections
✅ **Event Callbacks** - onOpen, onAfterOpen, onAfterClose, etc.
✅ **Focus Management** - Auto-focus, return focus, focus trap
✅ **Performance Optimized** - Memoization with useMemo and useCallback
✅ **Design Tokens** - Zero hardcoded values

## Keyboard Navigation

- **Escape** - Close drawer
- **Tab** - Navigate forward through focusable elements
- **Shift+Tab** - Navigate backward
- **Focus Trap** - Focus stays within drawer when open

## Accessibility

- ✅ role="dialog" with aria-modal="true"
- ✅ aria-labelledby and aria-describedby
- ✅ Focus trap within drawer
- ✅ Return focus to trigger on close
- ✅ Keyboard navigation support
- ✅ Screen reader announcements
        `}}},tags:["autodocs"]},n=r=>{const[a,u]=s.useState(!1);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(o,{onClick:()=>u(!0),children:"Open Drawer"}),e.jsx(N,{...r,isOpen:a,onClose:()=>u(!1)})]})},f={render:()=>e.jsx(n,{title:"Side panel Heading",description:"Put short description here",onSubmit:()=>{},onReset:()=>{},children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",children:"Drawer Body Content"}),e.jsx(t,{variant:"body",children:"This is the body content of the drawer. You can put any content here."}),e.jsx(t,{variant:"body",weight:"medium",children:"The drawer includes:"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingLeft:"16px"},children:[e.jsx(t,{variant:"body",children:"• Header with title and description"}),e.jsx(t,{variant:"body",children:"• Close button"}),e.jsx(t,{variant:"body",children:"• Scrollable body"}),e.jsx(t,{variant:"body",children:"• Footer with Reset, Cancel, and Submit buttons"})]})]})})},g={render:()=>e.jsx(n,{title:"Left Side Panel",description:"This drawer opens from the left",position:"left",onSubmit:()=>{},children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",children:"Left Drawer"}),e.jsx(t,{variant:"body",children:"This drawer slides in from the left side of the screen."})]})})},x={render:()=>e.jsx(n,{title:"Add New User",description:"Fill in the user details",submitLabel:"Create User",onSubmit:()=>{},children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(y,{label:"First Name",placeholder:"Enter first name",type:"text",size:"default"}),e.jsx(y,{label:"Last Name",placeholder:"Enter last name",type:"text",size:"default"}),e.jsx(y,{label:"Email",placeholder:"Enter email",type:"email",size:"default"}),e.jsx(y,{label:"Phone",placeholder:"Enter phone number",type:"tel",size:"default"})]})})},b={render:()=>e.jsx(n,{title:"View Details",description:"User information",showReset:!1,showSubmit:!1,cancelLabel:"Close",children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",children:"User Profile"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs(t,{variant:"body",children:[e.jsx(t,{variant:"body",weight:"semibold",as:"span",children:"Name:"})," John Doe"]}),e.jsxs(t,{variant:"body",children:[e.jsx(t,{variant:"body",weight:"semibold",as:"span",children:"Email:"})," john.doe@example.com"]}),e.jsxs(t,{variant:"body",children:[e.jsx(t,{variant:"body",weight:"semibold",as:"span",children:"Role:"})," Administrator"]}),e.jsxs(t,{variant:"body",children:[e.jsx(t,{variant:"body",weight:"semibold",as:"span",children:"Status:"})," Active"]})]})]})})},v={render:()=>e.jsx(n,{title:"Activity Log",description:"Recent system activities",showReset:!1,showSubmit:!1,cancelLabel:"Close",children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",children:"Recent Activities"}),[...Array(30)].map((r,a)=>e.jsxs("div",{style:{padding:"12px",border:"1px solid #E5E5E5",borderRadius:"4px",display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsxs(t,{variant:"body",weight:"semibold",children:["Activity ",a+1]}),e.jsx(t,{variant:"body",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},a))]})})},w={render:()=>e.jsx(n,{title:"Quick Actions",width:"400px",showReset:!1,showCancel:!1,submitLabel:"Done",children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",children:"Actions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"secondary",size:"medium",fullWidth:!0,children:"Export Data"}),e.jsx(o,{variant:"secondary",size:"medium",fullWidth:!0,children:"Import Data"}),e.jsx(o,{variant:"secondary",size:"medium",fullWidth:!0,children:"Settings"}),e.jsx(o,{variant:"secondary",size:"medium",fullWidth:!0,children:"Help"})]})]})})},T={render:()=>e.jsx(n,{title:"Data Table",description:"View and manage data",width:"800px",children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",children:"User List"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[...Array(10)].map((r,a)=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"60px 1fr 1fr 100px",gap:"12px",padding:"12px",border:"1px solid #E5E5E5",borderRadius:"4px"},children:[e.jsx(t,{variant:"body",children:a+1}),e.jsxs(t,{variant:"body",children:["User ",a+1]}),e.jsxs(t,{variant:"body",children:["user",a+1,"@example.com"]}),e.jsx(t,{variant:"body",children:"Active"})]},a))})]})})},j={render:()=>e.jsx(n,{title:"Processing",description:"Please wait while we process your request",isLoading:!0,showReset:!1,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(t,{variant:"body",children:"This content is hidden behind the loading overlay."})})})},D={render:()=>e.jsx(n,{title:"Form Submission",description:"There was an error with your submission",isInvalid:!0,errorMessage:"Failed to save changes. Please check your input and try again.",children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(y,{label:"Name",placeholder:"Enter name",type:"text",size:"default"}),e.jsx(y,{label:"Email",placeholder:"Enter email",type:"email",size:"default"})]})})},C={render:()=>e.jsx(n,{title:"Notifications",description:"Your notification center",isEmpty:!0,emptyMessage:"No notifications at this time",showReset:!1,showSubmit:!1,cancelLabel:"Close",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(t,{variant:"body",children:"This content is replaced by the empty state."})})})},S={render:()=>e.jsx(n,{title:"Disabled Drawer",description:"All interactions are disabled",disabled:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(t,{variant:"body",children:"This drawer is disabled. You cannot interact with any elements."})})})},k={render:()=>e.jsx(n,{title:"This title is ignored",customHeader:({onClose:r})=>e.jsxs("div",{style:{padding:"20px",background:"#F5F5F5",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(t,{variant:"headingL",weight:"bold",children:"Custom Header"}),e.jsx(o,{variant:"tertiary",size:"small",onClick:r,children:"Close"})]}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(t,{variant:"body",children:"This drawer uses a custom header slot."})})})},E={render:()=>e.jsx(n,{title:"Custom Footer",description:"With custom footer actions",customFooter:({onClose:r})=>e.jsxs("div",{style:{padding:"20px",background:"#F5F5F5",display:"flex",justifyContent:"flex-end",gap:"12px"},children:[e.jsx(o,{variant:"tertiary",size:"medium",onClick:r,children:"Maybe Later"}),e.jsx(o,{variant:"secondary",size:"medium",onClick:()=>{},children:"Save Draft"}),e.jsx(o,{variant:"primary",size:"medium",onClick:()=>{},children:"Publish"})]}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(t,{variant:"body",children:"This drawer uses a custom footer slot with three action buttons."})})})},R={render:()=>{const[r,a]=s.useState(!1),u=jt.useRef(null),H=()=>{a(!0),setTimeout(()=>{},100)};return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(o,{onClick:H,children:"Open Drawer (Check Console)"}),e.jsx(N,{ref:u,isOpen:r,onClose:()=>a(!1),title:"Drawer with Ref",description:"Check console for DOM node access",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(t,{variant:"body",children:"This drawer uses forwardRef. Check the console to see the DOM node access."})})})]})}},$={render:()=>e.jsx(n,{title:"This title is hidden",description:"This description is hidden",showHeader:!1,children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Content Without Header"}),e.jsx(t,{variant:"body",children:"The header section is completely hidden. Only the body and footer are visible."}),e.jsx(t,{variant:"body",children:"This is useful for full-screen content or when you want maximum space for the body."})]})})},W={render:()=>e.jsx(n,{title:"Content Viewer",description:"View-only mode without footer actions",showFooter:!1,children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",children:"Article Content"}),e.jsx(t,{variant:"body",children:"The footer section is completely hidden. Only the header and body are visible."}),e.jsx(t,{variant:"body",children:"This is useful for read-only content where no actions are needed, or when you want to provide custom actions within the body content itself."}),e.jsxs("div",{style:{marginTop:"16px",display:"flex",gap:"8px"},children:[e.jsx(o,{variant:"secondary",size:"small",children:"Share"}),e.jsx(o,{variant:"secondary",size:"small",children:"Print"})]})]})})},q={render:()=>e.jsx(n,{title:"This title is hidden",showHeader:!1,showFooter:!1,children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(t,{variant:"headingL",weight:"bold",children:"Custom Full-Screen Content"}),e.jsx(o,{variant:"tertiary",size:"small",onClick:()=>{},children:"Close"})]}),e.jsx(t,{variant:"body",children:"Both header and footer are completely hidden. You have full control over the entire drawer content."}),e.jsx(t,{variant:"body",children:"This is useful for:"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingLeft:"16px"},children:[e.jsx(t,{variant:"body",children:"• Custom layouts that need maximum space"}),e.jsx(t,{variant:"body",children:"• Image galleries or media viewers"}),e.jsx(t,{variant:"body",children:"• Custom navigation or wizard flows"}),e.jsx(t,{variant:"body",children:"• Embedded applications or iframes"})]}),e.jsxs("div",{style:{marginTop:"auto",paddingTop:"20px",display:"flex",justifyContent:"flex-end",gap:"12px",borderTop:"1px solid #E5E5E5"},children:[e.jsx(o,{variant:"secondary",size:"medium",children:"Cancel"}),e.jsx(o,{variant:"primary",size:"medium",children:"Save"})]})]})})};var be,ve,we,Te,je;f.parameters={...f.parameters,docs:{...(be=f.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Side panel Heading" description="Put short description here" onSubmit={() => {}} onReset={() => {}}>
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <Typography variant="headingS" weight="semibold">Drawer Body Content</Typography>
      <Typography variant="body">This is the body content of the drawer. You can put any content here.</Typography>
      <Typography variant="body" weight="medium">The drawer includes:</Typography>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        paddingLeft: '16px'
      }}>
        <Typography variant="body">• Header with title and description</Typography>
        <Typography variant="body">• Close button</Typography>
        <Typography variant="body">• Scrollable body</Typography>
        <Typography variant="body">• Footer with Reset, Cancel, and Submit buttons</Typography>
      </div>
    </div>
  </DrawerWrapper>
}`,...(we=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:we.source},description:{story:"Default drawer from the right side with all features",...(je=(Te=f.parameters)==null?void 0:Te.docs)==null?void 0:je.description}}};var De,Ce,Se,ke,Ee;g.parameters={...g.parameters,docs:{...(De=g.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Left Side Panel" description="This drawer opens from the left" position="left" onSubmit={() => {}}>
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <Typography variant="headingS" weight="semibold">Left Drawer</Typography>
      <Typography variant="body">This drawer slides in from the left side of the screen.</Typography>
    </div>
  </DrawerWrapper>
}`,...(Se=(Ce=g.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source},description:{story:"Drawer from the left side",...(Ee=(ke=g.parameters)==null?void 0:ke.docs)==null?void 0:Ee.description}}};var Re,$e,We,qe,Ne;x.parameters={...x.parameters,docs:{...(Re=x.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Add New User" description="Fill in the user details" submitLabel="Create User" onSubmit={() => {}}>
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <InputField label="First Name" placeholder="Enter first name" type="text" size="default" />
      <InputField label="Last Name" placeholder="Enter last name" type="text" size="default" />
      <InputField label="Email" placeholder="Enter email" type="email" size="default" />
      <InputField label="Phone" placeholder="Enter phone number" type="tel" size="default" />
    </div>
  </DrawerWrapper>
}`,...(We=($e=x.parameters)==null?void 0:$e.docs)==null?void 0:We.source},description:{story:"Drawer with form content",...(Ne=(qe=x.parameters)==null?void 0:qe.docs)==null?void 0:Ne.description}}};var ze,Fe,Le,Be,Ie;b.parameters={...b.parameters,docs:{...(ze=b.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="View Details" description="User information" showReset={false} showSubmit={false} cancelLabel="Close">
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <Typography variant="headingS" weight="semibold">User Profile</Typography>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <Typography variant="body"><Typography variant="body" weight="semibold" as="span">Name:</Typography> John Doe</Typography>
        <Typography variant="body"><Typography variant="body" weight="semibold" as="span">Email:</Typography> john.doe@example.com</Typography>
        <Typography variant="body"><Typography variant="body" weight="semibold" as="span">Role:</Typography> Administrator</Typography>
        <Typography variant="body"><Typography variant="body" weight="semibold" as="span">Status:</Typography> Active</Typography>
      </div>
    </div>
  </DrawerWrapper>
}`,...(Le=(Fe=b.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source},description:{story:"Drawer without reset button - view only mode",...(Ie=(Be=b.parameters)==null?void 0:Be.docs)==null?void 0:Ie.description}}};var Ae,Ve,Pe,Me,Oe;v.parameters={...v.parameters,docs:{...(Ae=v.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Activity Log" description="Recent system activities" showReset={false} showSubmit={false} cancelLabel="Close">
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <Typography variant="headingS" weight="semibold">Recent Activities</Typography>
      {[...Array(30)].map((_, i) => <div key={i} style={{
        padding: '12px',
        border: '1px solid #E5E5E5',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
          <Typography variant="body" weight="semibold">Activity {i + 1}</Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </div>)}
    </div>
  </DrawerWrapper>
}`,...(Pe=(Ve=v.parameters)==null?void 0:Ve.docs)==null?void 0:Pe.source},description:{story:"Drawer with scrollable content",...(Oe=(Me=v.parameters)==null?void 0:Me.docs)==null?void 0:Oe.description}}};var He,Ue,Ye,_e,Xe;w.parameters={...w.parameters,docs:{...(He=w.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Quick Actions" width="400px" showReset={false} showCancel={false} submitLabel="Done">
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <Typography variant="headingS" weight="semibold">Actions</Typography>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <Button variant="secondary" size="medium" fullWidth>
          Export Data
        </Button>
        <Button variant="secondary" size="medium" fullWidth>
          Import Data
        </Button>
        <Button variant="secondary" size="medium" fullWidth>
          Settings
        </Button>
        <Button variant="secondary" size="medium" fullWidth>
          Help
        </Button>
      </div>
    </div>
  </DrawerWrapper>
}`,...(Ye=(Ue=w.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source},description:{story:"Narrow drawer for quick actions",...(Xe=(_e=w.parameters)==null?void 0:_e.docs)==null?void 0:Xe.description}}};var Je,Ke,Qe,Ze,Ge;T.parameters={...T.parameters,docs:{...(Je=T.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Data Table" description="View and manage data" width="800px">
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <Typography variant="headingS" weight="semibold">User List</Typography>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        {[...Array(10)].map((_, i) => <div key={i} style={{
          display: 'grid',
          gridTemplateColumns: '60px 1fr 1fr 100px',
          gap: '12px',
          padding: '12px',
          border: '1px solid #E5E5E5',
          borderRadius: '4px'
        }}>
            <Typography variant="body">{i + 1}</Typography>
            <Typography variant="body">User {i + 1}</Typography>
            <Typography variant="body">user{i + 1}@example.com</Typography>
            <Typography variant="body">Active</Typography>
          </div>)}
      </div>
    </div>
  </DrawerWrapper>
}`,...(Qe=(Ke=T.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source},description:{story:"Wide drawer for data tables",...(Ge=(Ze=T.parameters)==null?void 0:Ze.docs)==null?void 0:Ge.description}}};var er,rr,tr,ar,ir;j.parameters={...j.parameters,docs:{...(er=j.parameters)==null?void 0:er.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Processing" description="Please wait while we process your request" isLoading={true} showReset={false}>
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">This content is hidden behind the loading overlay.</Typography>
    </div>
  </DrawerWrapper>
}`,...(tr=(rr=j.parameters)==null?void 0:rr.docs)==null?void 0:tr.source},description:{story:"Loading state - shows loading overlay",...(ir=(ar=j.parameters)==null?void 0:ar.docs)==null?void 0:ir.description}}};var sr,or,nr,dr,lr;D.parameters={...D.parameters,docs:{...(sr=D.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Form Submission" description="There was an error with your submission" isInvalid={true} errorMessage="Failed to save changes. Please check your input and try again.">
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <InputField label="Name" placeholder="Enter name" type="text" size="default" />
      <InputField label="Email" placeholder="Enter email" type="email" size="default" />
    </div>
  </DrawerWrapper>
}`,...(nr=(or=D.parameters)==null?void 0:or.docs)==null?void 0:nr.source},description:{story:"Error state - shows error message",...(lr=(dr=D.parameters)==null?void 0:dr.docs)==null?void 0:lr.description}}};var pr,cr,ur,yr,mr;C.parameters={...C.parameters,docs:{...(pr=C.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Notifications" description="Your notification center" isEmpty={true} emptyMessage="No notifications at this time" showReset={false} showSubmit={false} cancelLabel="Close">
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">This content is replaced by the empty state.</Typography>
    </div>
  </DrawerWrapper>
}`,...(ur=(cr=C.parameters)==null?void 0:cr.docs)==null?void 0:ur.source},description:{story:"Empty state - shows empty message",...(mr=(yr=C.parameters)==null?void 0:yr.docs)==null?void 0:mr.description}}};var hr,fr,gr,xr,br;S.parameters={...S.parameters,docs:{...(hr=S.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Disabled Drawer" description="All interactions are disabled" disabled={true}>
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">This drawer is disabled. You cannot interact with any elements.</Typography>
    </div>
  </DrawerWrapper>
}`,...(gr=(fr=S.parameters)==null?void 0:fr.docs)==null?void 0:gr.source},description:{story:"Disabled state - all interactions disabled",...(br=(xr=S.parameters)==null?void 0:xr.docs)==null?void 0:br.description}}};var vr,wr,Tr,jr,Dr;k.parameters={...k.parameters,docs:{...(vr=k.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="This title is ignored" customHeader={({
    onClose
  }: {
    onClose: () => void;
  }) => <div style={{
    padding: '20px',
    background: '#F5F5F5',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
        <Typography variant="headingL" weight="bold">Custom Header</Typography>
        <Button variant="tertiary" size="small" onClick={onClose}>
          Close
        </Button>
      </div>}>
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">This drawer uses a custom header slot.</Typography>
    </div>
  </DrawerWrapper>
}`,...(Tr=(wr=k.parameters)==null?void 0:wr.docs)==null?void 0:Tr.source},description:{story:"Custom header slot",...(Dr=(jr=k.parameters)==null?void 0:jr.docs)==null?void 0:Dr.description}}};var Cr,Sr,kr,Er,Rr;E.parameters={...E.parameters,docs:{...(Cr=E.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Custom Footer" description="With custom footer actions" customFooter={({
    onClose
  }: {
    onClose: () => void;
  }) => <div style={{
    padding: '20px',
    background: '#F5F5F5',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px'
  }}>
        <Button variant="tertiary" size="medium" onClick={onClose}>
          Maybe Later
        </Button>
        <Button variant="secondary" size="medium" onClick={() => {}}>
          Save Draft
        </Button>
        <Button variant="primary" size="medium" onClick={() => {}}>
          Publish
        </Button>
      </div>}>
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">This drawer uses a custom footer slot with three action buttons.</Typography>
    </div>
  </DrawerWrapper>
}`,...(kr=(Sr=E.parameters)==null?void 0:Sr.docs)==null?void 0:kr.source},description:{story:"Custom footer slot",...(Rr=(Er=E.parameters)==null?void 0:Er.docs)==null?void 0:Rr.description}}};var $r,Wr,qr,Nr,zr;R.parameters={...R.parameters,docs:{...($r=R.parameters)==null?void 0:$r.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = React.useRef<HTMLDivElement>(null);
    const handleOpen = () => {
      setIsOpen(true);
      setTimeout(() => {}, 100);
    };
    return <div style={{
      padding: '20px'
    }}>
        <Button onClick={handleOpen}>Open Drawer (Check Console)</Button>
        <Drawer ref={drawerRef} isOpen={isOpen} onClose={() => setIsOpen(false)} title="Drawer with Ref" description="Check console for DOM node access">
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">
              This drawer uses forwardRef. Check the console to see the DOM node access.
            </Typography>
          </div>
        </Drawer>
      </div>;
  }
}`,...(qr=(Wr=R.parameters)==null?void 0:Wr.docs)==null?void 0:qr.source},description:{story:"With forwardRef - access drawer DOM node",...(zr=(Nr=R.parameters)==null?void 0:Nr.docs)==null?void 0:zr.description}}};var Fr,Lr,Br,Ir,Ar;$.parameters={...$.parameters,docs:{...(Fr=$.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="This title is hidden" description="This description is hidden" showHeader={false}>
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <Typography variant="headingM" weight="semibold">Content Without Header</Typography>
      <Typography variant="body">
        The header section is completely hidden. Only the body and footer are visible.
      </Typography>
      <Typography variant="body">
        This is useful for full-screen content or when you want maximum space for the body.
      </Typography>
    </div>
  </DrawerWrapper>
}`,...(Br=(Lr=$.parameters)==null?void 0:Lr.docs)==null?void 0:Br.source},description:{story:"No header - body only with footer",...(Ar=(Ir=$.parameters)==null?void 0:Ir.docs)==null?void 0:Ar.description}}};var Vr,Pr,Mr,Or,Hr;W.parameters={...W.parameters,docs:{...(Vr=W.parameters)==null?void 0:Vr.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Content Viewer" description="View-only mode without footer actions" showFooter={false}>
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <Typography variant="headingS" weight="semibold">Article Content</Typography>
      <Typography variant="body">
        The footer section is completely hidden. Only the header and body are visible.
      </Typography>
      <Typography variant="body">
        This is useful for read-only content where no actions are needed, or when you want
        to provide custom actions within the body content itself.
      </Typography>
      <div style={{
        marginTop: '16px',
        display: 'flex',
        gap: '8px'
      }}>
        <Button variant="secondary" size="small">
          Share
        </Button>
        <Button variant="secondary" size="small">
          Print
        </Button>
      </div>
    </div>
  </DrawerWrapper>
}`,...(Mr=(Pr=W.parameters)==null?void 0:Pr.docs)==null?void 0:Mr.source},description:{story:"No footer - header and body only",...(Hr=(Or=W.parameters)==null?void 0:Or.docs)==null?void 0:Hr.description}}};var Ur,Yr,_r,Xr,Jr;q.parameters={...q.parameters,docs:{...(Ur=q.parameters)==null?void 0:Ur.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="This title is hidden" showHeader={false} showFooter={false}>
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography variant="headingL" weight="bold">Custom Full-Screen Content</Typography>
        <Button variant="tertiary" size="small" onClick={() => {}}>
          Close
        </Button>
      </div>
      <Typography variant="body">
        Both header and footer are completely hidden. You have full control over the entire drawer content.
      </Typography>
      <Typography variant="body">
        This is useful for:
      </Typography>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        paddingLeft: '16px'
      }}>
        <Typography variant="body">• Custom layouts that need maximum space</Typography>
        <Typography variant="body">• Image galleries or media viewers</Typography>
        <Typography variant="body">• Custom navigation or wizard flows</Typography>
        <Typography variant="body">• Embedded applications or iframes</Typography>
      </div>
      <div style={{
        marginTop: 'auto',
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '12px',
        borderTop: '1px solid #E5E5E5'
      }}>
        <Button variant="secondary" size="medium">
          Cancel
        </Button>
        <Button variant="primary" size="medium">
          Save
        </Button>
      </div>
    </div>
  </DrawerWrapper>
}`,...(_r=(Yr=q.parameters)==null?void 0:Yr.docs)==null?void 0:_r.source},description:{story:"No header and no footer - body only",...(Jr=(Xr=q.parameters)==null?void 0:Xr.docs)==null?void 0:Jr.description}}};const ta=["Default","LeftPosition","WithForm","ViewOnly","ScrollableContent","NarrowDrawer","WideDrawer","LoadingState","ErrorState","EmptyState","DisabledState","CustomHeader","CustomFooter","WithRef","NoHeader","NoFooter","BodyOnly"];export{q as BodyOnly,E as CustomFooter,k as CustomHeader,f as Default,S as DisabledState,C as EmptyState,D as ErrorState,g as LeftPosition,j as LoadingState,w as NarrowDrawer,W as NoFooter,$ as NoHeader,v as ScrollableContent,b as ViewOnly,T as WideDrawer,x as WithForm,R as WithRef,ta as __namedExportsOrder,ra as default};
