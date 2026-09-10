import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as s,R as wa}from"./index-Bv9Y92EF.js";import{g as d}from"./styled-components.browser.esm-CVW2bgxI.js";import{T as r}from"./Typography-CidD3oMh.js";import{I as y}from"./Icon-CnD2zmcO.js";import{B as i}from"./Button-DlNRQx8j.js";import{I as f}from"./InputField-BAIr4sa2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Search-Bpcrs37S.js";import"./createSvgIcon-Ce6eLUkr.js";import"./ExpandMore-Bd7rmlfk.js";import"./Close-CtL5j8iM.js";import"./Settings-aYyvLXSG.js";import"./Home-Bococija.js";import"./FieldImportance-D7BkpLTs.js";import"./HelpingText-DBD3feHR.js";const Ta=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1100; /* Drawer overlay - above Modal (1000) */
  opacity: ${({$isOpen:t})=>t?1:0};
  visibility: ${({$isOpen:t})=>t?"visible":"hidden"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`,ja=d.div`
  position: fixed;
  top: 0;
  ${({$position:t})=>t==="right"?"right: 0":"left: 0"};
  bottom: 0;
  width: ${({$width:t})=>t||"min(90vw, 37.5rem)"};
  max-width: ${({$maxWidth:t})=>t||"90vw"};
  min-width: ${({$minWidth:t})=>t};
  background: ${({theme:t})=>t.colors.semantic.background.secondary};
  display: flex;
  flex-direction: column;
  z-index: 1101; /* Drawer container - above Drawer overlay (1100) */
  box-shadow: ${({theme:t,$position:a})=>a==="right"?t.shadows.xl||"-4px 0 6px -1px rgba(0, 0, 0, 0.1)":t.shadows.xl||"4px 0 6px -1px rgba(0, 0, 0, 0.1)"};
  transform: ${({$isOpen:t,$position:a})=>t?"translateX(0)":a==="right"?"translateX(100%)":"translateX(-100%)"};
  transition: transform 0.3s ease;
  pointer-events: ${({$disabled:t})=>t?"none":"auto"};
  opacity: ${({$disabled:t})=>t?.6:1};
`,Ca=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${({theme:t})=>`${t.spacing[8]} ${t.spacing[10]}`};
  border-bottom: ${({theme:t})=>t.borderWidth[1]} solid ${({theme:t})=>t.colors.semantic.border.default};
  flex-shrink: 0;
  gap: ${({theme:t})=>t.spacing[4]};
`,Sa=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing[3]};
  flex: 1;
  min-width: 0;
`,Da=d.div`
  color: ${({theme:t})=>t.colors.semantic.text.secondary};
`,ka=d.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({theme:t})=>t.spacing[12]};
  min-height: ${({theme:t})=>t.spacing[12]};
  padding: ${({theme:t})=>t.spacing[3]};
  background: none;
  border: none;
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  cursor: pointer;
  color: ${({theme:t})=>t.colors.semantic.text.primary};
  transition: background 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({theme:t})=>t.colors.semantic.background.secondary};
  }

  &:focus-visible {
    outline: ${({theme:t})=>t.borderWidth[2]} solid ${({theme:t})=>t.colors.semantic.focus.indicator};
    outline-offset: ${({theme:t})=>t.spacing[1]};
  }

  &:active {
    background: ${({theme:t})=>t.colors.semantic.background.tertiary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ra=d.div`
  flex: 1;
  padding: ${({theme:t})=>t.spacing[4]};
  overflow-y: auto;
  overflow-x: hidden;
  
  /* Smooth scrolling */
  scroll-behavior: smooth;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: ${({theme:t})=>t.spacing[3]};
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:t})=>t.colors.semantic.background.secondary};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:t})=>t.colors.semantic.border.default};
    border-radius: ${({theme:t})=>t.borderRadius.sm};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:t})=>t.colors.semantic.border.hover};
  }
`,Ba=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:t})=>`${t.spacing[6]} ${t.spacing[10]} ${t.spacing[11]}`};
  border-top: ${({theme:t})=>t.borderWidth[1]} solid ${({theme:t})=>t.colors.semantic.border.default};
  flex-shrink: 0;
  gap: ${({theme:t})=>t.spacing[4]};
`,Ea=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing[4]};
`,Wa=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing[5]};
`,za=d.div`
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
`,Na=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:t})=>t.spacing[12]};
  text-align: center;
  gap: ${({theme:t})=>t.spacing[4]};
`,Fa=d.div`
  padding: ${({theme:t})=>t.spacing[4]};
  background: ${({theme:t})=>t.colors.palette.error[50]};
  border: ${({theme:t})=>t.borderWidth[1]} solid ${({theme:t})=>t.colors.semantic.border.error};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  margin: ${({theme:t})=>t.spacing[4]};
  color: ${({theme:t})=>t.colors.semantic.text.error};
`,Ia=d.div`
  color: ${({theme:t})=>t.colors.semantic.text.secondary};
`,$a=d.div`
  color: ${({theme:t})=>t.colors.semantic.text.secondary};
`,h=s.forwardRef(({isOpen:t,onClose:a,title:p,children:G,as:_r,description:m,position:Jr="right",width:Kr,maxWidth:Qr,minWidth:Zr,isLoading:oe=!1,isInvalid:Gr=!1,errorMessage:se,isEmpty:ea=!1,emptyMessage:ta="No content available",disabled:l=!1,showHeader:ra=!0,showFooter:aa=!0,showCloseButton:ne=!0,headerActions:ee,footerStart:te,footerEnd:re,showReset:de=!0,resetLabel:le="Reset",onReset:pe,showCancel:ce=!0,cancelLabel:ue="Cancel",onCancel:ae,showSubmit:ye=!0,submitLabel:he="Submit",onSubmit:me,submitType:fe="default",isSubmitting:ge=!1,customHeader:g,customFooter:b,customLoadingOverlay:ia,customEmptyState:oa,customErrorState:sa,closeOnOverlayClick:be=!0,closeOnEscape:xe=!0,autoFocus:ve=!0,returnFocus:U=!0,preventBodyScroll:we=!0,onOpen:H,onAfterOpen:X,onAfterClose:Y,onOverlayClick:_,onEscapeKeyDown:J,className:na,style:da,overlayClassName:la,overlayStyle:pa,headerClassName:Te,headerStyle:je,bodyClassName:ca,bodyStyle:ua,footerClassName:Ce,footerStyle:Se,"aria-label":De,"aria-labelledby":ya,"aria-describedby":ha,...ma},K)=>{const Q=s.useRef(null),Z=s.useRef(null),fa=s.useRef(`drawer-title-${Math.random().toString(36).substr(2,9)}`),ga=s.useRef(`drawer-description-${Math.random().toString(36).substr(2,9)}`),ba=s.useCallback(n=>{n.target===n.currentTarget&&be&&!l&&(_==null||_(),a())},[be,l,a,_]),ke=s.useCallback(()=>{l||(ae?ae():a())},[l,ae,a]),ie=s.useCallback(n=>{n.key==="Escape"&&!l&&(J==null||J(),a())},[l,a,J]);s.useEffect(()=>{if(t){H==null||H();const n=setTimeout(()=>{X==null||X()},300);return()=>clearTimeout(n)}else{const n=setTimeout(()=>{Y==null||Y()},300);return()=>clearTimeout(n)}},[t,H,X,Y]),s.useEffect(()=>{if(!(!t||!xe))return document.addEventListener("keydown",ie),()=>document.removeEventListener("keydown",ie)},[t,xe,ie]),s.useEffect(()=>{if(we){if(t){const n=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",document.body.style.paddingRight=`${n}px`}else document.body.style.overflow="",document.body.style.paddingRight="";return()=>{document.body.style.overflow="",document.body.style.paddingRight=""}}},[t,we]),s.useEffect(()=>{if(t&&(U&&(Z.current=document.activeElement),ve)){const n=setTimeout(()=>{var u;const c=(u=Q.current)==null?void 0:u.querySelector('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])');c==null||c.focus()},100);return()=>clearTimeout(n)}},[t,ve,U]),s.useEffect(()=>{!t&&U&&Z.current&&(Z.current.focus(),Z.current=null)},[t,U]),s.useEffect(()=>{if(!t)return;const n=c=>{var Ee;if(c.key!=="Tab")return;const u=(Ee=Q.current)==null?void 0:Ee.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])');if(!u||u.length===0)return;const Re=u[0],Be=u[u.length-1];c.shiftKey&&document.activeElement===Re?(c.preventDefault(),Be.focus()):!c.shiftKey&&document.activeElement===Be&&(c.preventDefault(),Re.focus())};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[t]);const xa=s.useMemo(()=>g?typeof g=="function"?g({onClose:a}):g:e.jsxs(Ca,{className:Te,style:je,children:[e.jsxs(Sa,{children:[typeof p=="string"?e.jsx(r,{variant:"headingM",weight:"semibold",as:"h2",children:p}):p,m&&e.jsx(Da,{children:typeof m=="string"?e.jsx(r,{variant:"body",children:m}):m})]}),ee&&ee,ne&&e.jsx(ka,{onClick:a,"aria-label":"Close drawer",disabled:l,children:e.jsx(y,{name:"Close",size:"medium"})})]}),[g,a,p,m,Te,je,l,ee,ne]),va=s.useMemo(()=>b?typeof b=="function"?b({onClose:a}):b:e.jsxs(Ba,{className:Ce,style:Se,children:[e.jsx(Ea,{children:te!==void 0?te:de&&e.jsx(i,{variant:"tertiary",size:"medium",onClick:pe,disabled:l,children:le})}),e.jsx(Wa,{children:re!==void 0?re:e.jsxs(e.Fragment,{children:[ce&&e.jsx(i,{variant:"secondary",size:"medium",leadingIcon:e.jsx(y,{name:"Close",size:"small"}),onClick:ke,disabled:l,children:ue}),ye&&e.jsx(i,{variant:"primary",size:"medium",buttonType:fe,leadingIcon:e.jsx(y,{name:"Check",size:"small"}),onClick:me,disabled:l,isLoading:ge,children:he})]})})]}),[b,a,te,re,de,le,pe,ce,ue,ke,ye,he,fe,me,ge,l,Ce,Se]);return t?e.jsxs(e.Fragment,{children:[e.jsx(Ta,{$isOpen:t,onClick:ba,className:la,style:pa,"aria-hidden":"true"}),e.jsxs(ja,{ref:n=>{Q&&(Q.current=n),typeof K=="function"?K(n):K&&(K.current=n)},as:_r,$width:Kr,$maxWidth:Qr,$minWidth:Zr,$position:Jr,$isOpen:t,$disabled:l,className:na,style:da,role:"dialog","aria-modal":"true","aria-label":De,"aria-labelledby":ya||(De?void 0:fa.current),"aria-describedby":ha||(m?ga.current:void 0),...ma,children:[ra&&xa,e.jsxs(Ra,{className:ca,style:ua,children:[Gr&&se&&(sa||e.jsx(Fa,{role:"alert",children:e.jsx(r,{variant:"body",weight:"medium",children:se})})),ea&&!oe?oa||e.jsx(Na,{children:e.jsx(Ia,{children:e.jsx(r,{variant:"body",children:ta})})}):G]}),aa&&va,oe&&(ia||e.jsx(za,{children:e.jsx($a,{children:e.jsx(r,{variant:"body",children:"Loading..."})})}))]})]}):null});h.displayName="Drawer";h.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the drawer is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when drawer should close"},title:{required:!0,tsType:{name:"ReactNode"},description:"Drawer title — accepts a string or any ReactNode (e.g. with a badge or icon)"},children:{required:!0,tsType:{name:"ReactNode"},description:"Drawer body content"},as:{required:!1,tsType:{name:"ElementType"},description:"Render drawer container as a different element"},description:{required:!1,tsType:{name:"ReactNode"},description:"Drawer description/subtitle — accepts a string or any ReactNode (e.g. with links or rich text)"},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Drawer position",defaultValue:{value:"'right'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:`Drawer width (e.g., '400px', '50%', 'min(90vw, 600px)')
@default 'min(90vw, 37.5rem)' (600px max)`},maxWidth:{required:!1,tsType:{name:"string"},description:`Maximum width constraint
@default '90vw'`},minWidth:{required:!1,tsType:{name:"string"},description:"Minimum width constraint"},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state - shows spinner overlay",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Error state - shows error message",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true"},isEmpty:{required:!1,tsType:{name:"boolean"},description:"Empty state - shows empty message",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No content available'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state - prevents all interactions",defaultValue:{value:"false",computed:!1}},showHeader:{required:!1,tsType:{name:"boolean"},description:`Show header section
@default true`,defaultValue:{value:"true",computed:!1}},showFooter:{required:!1,tsType:{name:"boolean"},description:`Show footer section
@default true`,defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:`Show the default close (X) icon button in the header
@default true`,defaultValue:{value:"true",computed:!1}},headerActions:{required:!1,tsType:{name:"ReactNode"},description:`Extra icon buttons or actions rendered between the title block and the close
button. Use this to add bookmark, share, edit, or any other icon actions
without replacing the entire header.

@example
headerActions={<>
  <IconButton icon="Bookmark" onClick={onBookmark} />
  <IconButton icon="Share" onClick={onShare} />
</>}`},footerStart:{required:!1,tsType:{name:"ReactNode"},description:`Replaces the left slot of the default footer (where the Reset button lives).
Use this to put any content on the left side — status text, a stepper, a
checkbox, extra links, etc. — while keeping the right slot (cancel/submit)
intact.

@example
footerStart={<Typography variant="bodyS">Step 2 of 4</Typography>}`},footerEnd:{required:!1,tsType:{name:"ReactNode"},description:`Replaces the right slot of the default footer (where Cancel + Submit live).
Use this to put any content on the right side — custom buttons, a link, a
split-button, etc. — while keeping the left slot (reset) intact.

@example
footerEnd={<>
  <Button variant="secondary" onClick={onSaveDraft}>Save Draft</Button>
  <Button variant="primary" onClick={onPublish}>Publish</Button>
</>}`},showReset:{required:!1,tsType:{name:"boolean"},description:"Show reset button",defaultValue:{value:"true",computed:!1}},resetLabel:{required:!1,tsType:{name:"string"},description:"Reset button label",defaultValue:{value:"'Reset'",computed:!1}},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Reset button callback"},showCancel:{required:!1,tsType:{name:"boolean"},description:"Show cancel button",defaultValue:{value:"true",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"Cancel button label",defaultValue:{value:"'Cancel'",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Cancel button callback"},showSubmit:{required:!1,tsType:{name:"boolean"},description:"Show submit button",defaultValue:{value:"true",computed:!1}},submitLabel:{required:!1,tsType:{name:"string"},description:"Submit button label",defaultValue:{value:"'Submit'",computed:!1}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Submit button callback"},submitType:{required:!1,tsType:{name:"union",raw:"'default' | 'safe' | 'warning' | 'alert'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'safe'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'alert'"}]},description:"Submit button type",defaultValue:{value:"'default'",computed:!1}},isSubmitting:{required:!1,tsType:{name:"boolean"},description:"Submit button loading state",defaultValue:{value:"false",computed:!1}},customHeader:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { onClose: () => void }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom header content (replaces default header)"},customFooter:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { onClose: () => void }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom footer content (replaces default footer)"},customLoadingOverlay:{required:!1,tsType:{name:"ReactNode"},description:"Custom loading overlay"},customEmptyState:{required:!1,tsType:{name:"ReactNode"},description:"Custom empty state"},customErrorState:{required:!1,tsType:{name:"ReactNode"},description:"Custom error state"},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"Close on overlay click",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Close on escape key",defaultValue:{value:"true",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Auto-focus first focusable element on open",defaultValue:{value:"true",computed:!1}},returnFocus:{required:!1,tsType:{name:"boolean"},description:"Return focus to trigger element on close",defaultValue:{value:"true",computed:!1}},preventBodyScroll:{required:!1,tsType:{name:"boolean"},description:"Prevent body scroll when drawer is open",defaultValue:{value:"true",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when drawer starts opening"},onAfterOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired after drawer finishes opening (after animation)"},onAfterClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired after drawer finishes closing (after animation)"},onOverlayClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when overlay is clicked"},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when escape key is pressed"},className:{required:!1,tsType:{name:"string"},description:"Custom className for drawer container"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for drawer container"},overlayClassName:{required:!1,tsType:{name:"string"},description:"Custom className for overlay"},overlayStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for overlay"},headerClassName:{required:!1,tsType:{name:"string"},description:"Custom className for header"},headerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for header"},bodyClassName:{required:!1,tsType:{name:"string"},description:"Custom className for body"},bodyStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for body"},footerClassName:{required:!1,tsType:{name:"string"},description:"Custom className for footer"},footerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for footer"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for the drawer"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of element that labels the drawer"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ID of element that describes the drawer"}},composes:["Omit"]};const Ga={title:"Components/Drawer",component:h,parameters:{layout:"fullscreen",docs:{description:{component:`
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
        `}}},tags:["autodocs"]},o=t=>{const[a,p]=s.useState(!1);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(i,{onClick:()=>p(!0),children:"Open Drawer"}),e.jsx(h,{...t,isOpen:a,onClose:()=>p(!1)})]})},x={render:()=>e.jsx(o,{title:"Side panel Heading",description:"Put short description here",onSubmit:()=>{},onReset:()=>{},children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{variant:"headingS",weight:"semibold",children:"Drawer Body Content"}),e.jsx(r,{variant:"body",children:"This is the body content of the drawer. You can put any content here."}),e.jsx(r,{variant:"body",weight:"medium",children:"The drawer includes:"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingLeft:"16px"},children:[e.jsx(r,{variant:"body",children:"• Header with title and description"}),e.jsx(r,{variant:"body",children:"• Close button"}),e.jsx(r,{variant:"body",children:"• Scrollable body"}),e.jsx(r,{variant:"body",children:"• Footer with Reset, Cancel, and Submit buttons"})]})]})})},v={render:()=>e.jsx(o,{title:"Left Side Panel",description:"This drawer opens from the left",position:"left",onSubmit:()=>{},children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{variant:"headingS",weight:"semibold",children:"Left Drawer"}),e.jsx(r,{variant:"body",children:"This drawer slides in from the left side of the screen."})]})})},w={render:()=>e.jsx(o,{title:"Add New User",description:"Fill in the user details",submitLabel:"Create User",onSubmit:()=>{},children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(f,{label:"First Name",placeholder:"Enter first name",type:"text",size:"default"}),e.jsx(f,{label:"Last Name",placeholder:"Enter last name",type:"text",size:"default"}),e.jsx(f,{label:"Email",placeholder:"Enter email",type:"email",size:"default"}),e.jsx(f,{label:"Phone",placeholder:"Enter phone number",type:"tel",size:"default"})]})})},T={render:()=>e.jsx(o,{title:"View Details",description:"User information",showReset:!1,showSubmit:!1,cancelLabel:"Close",children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{variant:"headingS",weight:"semibold",children:"User Profile"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs(r,{variant:"body",children:[e.jsx(r,{variant:"body",weight:"semibold",as:"span",children:"Name:"})," John Doe"]}),e.jsxs(r,{variant:"body",children:[e.jsx(r,{variant:"body",weight:"semibold",as:"span",children:"Email:"})," john.doe@example.com"]}),e.jsxs(r,{variant:"body",children:[e.jsx(r,{variant:"body",weight:"semibold",as:"span",children:"Role:"})," Administrator"]}),e.jsxs(r,{variant:"body",children:[e.jsx(r,{variant:"body",weight:"semibold",as:"span",children:"Status:"})," Active"]})]})]})})},j={render:()=>e.jsx(o,{title:"Activity Log",description:"Recent system activities",showReset:!1,showSubmit:!1,cancelLabel:"Close",children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{variant:"headingS",weight:"semibold",children:"Recent Activities"}),[...Array(30)].map((t,a)=>e.jsxs("div",{style:{padding:"12px",border:"1px solid #E5E5E5",borderRadius:"4px",display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsxs(r,{variant:"body",weight:"semibold",children:["Activity ",a+1]}),e.jsx(r,{variant:"body",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},a))]})})},C={render:()=>e.jsx(o,{title:"Quick Actions",width:"400px",showReset:!1,showCancel:!1,submitLabel:"Done",children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{variant:"headingS",weight:"semibold",children:"Actions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(i,{variant:"secondary",size:"medium",fullWidth:!0,children:"Export Data"}),e.jsx(i,{variant:"secondary",size:"medium",fullWidth:!0,children:"Import Data"}),e.jsx(i,{variant:"secondary",size:"medium",fullWidth:!0,children:"Settings"}),e.jsx(i,{variant:"secondary",size:"medium",fullWidth:!0,children:"Help"})]})]})})},S={render:()=>e.jsx(o,{title:"Data Table",description:"View and manage data",width:"800px",children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{variant:"headingS",weight:"semibold",children:"User List"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[...Array(10)].map((t,a)=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"60px 1fr 1fr 100px",gap:"12px",padding:"12px",border:"1px solid #E5E5E5",borderRadius:"4px"},children:[e.jsx(r,{variant:"body",children:a+1}),e.jsxs(r,{variant:"body",children:["User ",a+1]}),e.jsxs(r,{variant:"body",children:["user",a+1,"@example.com"]}),e.jsx(r,{variant:"body",children:"Active"})]},a))})]})})},D={render:()=>e.jsx(o,{title:"Processing",description:"Please wait while we process your request",isLoading:!0,showReset:!1,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:"This content is hidden behind the loading overlay."})})})},k={render:()=>e.jsx(o,{title:"Form Submission",description:"There was an error with your submission",isInvalid:!0,errorMessage:"Failed to save changes. Please check your input and try again.",children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(f,{label:"Name",placeholder:"Enter name",type:"text",size:"default"}),e.jsx(f,{label:"Email",placeholder:"Enter email",type:"email",size:"default"})]})})},R={render:()=>e.jsx(o,{title:"Notifications",description:"Your notification center",isEmpty:!0,emptyMessage:"No notifications at this time",showReset:!1,showSubmit:!1,cancelLabel:"Close",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:"This content is replaced by the empty state."})})})},B={render:()=>e.jsx(o,{title:"Disabled Drawer",description:"All interactions are disabled",disabled:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:"This drawer is disabled. You cannot interact with any elements."})})})},E={render:()=>e.jsx(o,{title:"This title is ignored",customHeader:({onClose:t})=>e.jsxs("div",{style:{padding:"20px",background:"#F5F5F5",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(r,{variant:"headingL",weight:"bold",children:"Custom Header"}),e.jsx(i,{variant:"tertiary",size:"small",onClick:t,children:"Close"})]}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:"This drawer uses a custom header slot."})})})},W={render:()=>e.jsx(o,{title:"Custom Footer",description:"With custom footer actions",customFooter:({onClose:t})=>e.jsxs("div",{style:{padding:"20px",background:"#F5F5F5",display:"flex",justifyContent:"flex-end",gap:"12px"},children:[e.jsx(i,{variant:"tertiary",size:"medium",onClick:t,children:"Maybe Later"}),e.jsx(i,{variant:"secondary",size:"medium",onClick:()=>{},children:"Save Draft"}),e.jsx(i,{variant:"primary",size:"medium",onClick:()=>{},children:"Publish"})]}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:"This drawer uses a custom footer slot with three action buttons."})})})},z={render:()=>{const[t,a]=s.useState(!1),p=wa.useRef(null),G=()=>{a(!0),setTimeout(()=>{},100)};return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(i,{onClick:G,children:"Open Drawer (Check Console)"}),e.jsx(h,{ref:p,isOpen:t,onClose:()=>a(!1),title:"Drawer with Ref",description:"Check console for DOM node access",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:"This drawer uses forwardRef. Check the console to see the DOM node access."})})})]})}},N={render:()=>e.jsx(o,{title:"This title is hidden",description:"This description is hidden",showHeader:!1,children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{variant:"headingM",weight:"semibold",children:"Content Without Header"}),e.jsx(r,{variant:"body",children:"The header section is completely hidden. Only the body and footer are visible."}),e.jsx(r,{variant:"body",children:"This is useful for full-screen content or when you want maximum space for the body."})]})})},F={render:()=>e.jsx(o,{title:"Content Viewer",description:"View-only mode without footer actions",showFooter:!1,children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{variant:"headingS",weight:"semibold",children:"Article Content"}),e.jsx(r,{variant:"body",children:"The footer section is completely hidden. Only the header and body are visible."}),e.jsx(r,{variant:"body",children:"This is useful for read-only content where no actions are needed, or when you want to provide custom actions within the body content itself."}),e.jsxs("div",{style:{marginTop:"16px",display:"flex",gap:"8px"},children:[e.jsx(i,{variant:"secondary",size:"small",children:"Share"}),e.jsx(i,{variant:"secondary",size:"small",children:"Print"})]})]})})},I={render:()=>e.jsx(o,{title:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(r,{variant:"headingM",weight:"semibold",as:"h2",children:"User Settings"}),e.jsx("span",{style:{display:"inline-flex",alignItems:"center",padding:"2px 8px",borderRadius:"12px",background:"#EFF6FF",color:"#1D4ED8",fontSize:"12px",fontWeight:600},children:"Beta"})]}),description:"Manage your account preferences",onSubmit:()=>{},children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:"The title is a ReactNode — badge, icon, anything goes."})})})},$={render:()=>e.jsx(o,{title:"Import Data",description:e.jsxs(r,{variant:"body",children:["Upload a CSV file. Need help?"," ",e.jsx("a",{href:"#",style:{color:"#2563EB"},children:"View the import guide"}),"."]}),submitLabel:"Import",onSubmit:()=>{},children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:"The description is a ReactNode — links, bold text, anything."})})})},q={render:()=>e.jsx(o,{title:"Document Preview",description:"Review before publishing",headerActions:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx("button",{"aria-label":"Bookmark",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:36,height:36,border:"none",background:"none",borderRadius:6,cursor:"pointer",color:"#6B7280"},children:e.jsx(y,{name:"Bookmark",size:"medium"})}),e.jsx("button",{"aria-label":"Share",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:36,height:36,border:"none",background:"none",borderRadius:6,cursor:"pointer",color:"#6B7280"},children:e.jsx(y,{name:"Share",size:"medium"})})]}),onSubmit:()=>{},children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:"Bookmark and Share icon buttons appear in the header alongside the default close button. The default header structure is preserved — only extra actions are injected."})})})},L={render:()=>{const[t,a]=s.useState(!1);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(i,{onClick:()=>a(!0),children:"Open Drawer"}),e.jsx(h,{isOpen:t,onClose:()=>a(!1),title:"Confirm Action",description:"Please read before proceeding",showCloseButton:!1,showReset:!1,cancelLabel:"Discard",submitLabel:"Confirm",onSubmit:()=>a(!1),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:"The X close button is removed. Dismissal is only via the footer Cancel/Confirm buttons."})})})]})}},A={render:()=>e.jsx(o,{title:"Multi-step Wizard",description:"Complete all steps to finish",footerStart:e.jsx(r,{variant:"caption",style:{color:"#6B7280"},children:"Step 2 of 4"}),onSubmit:()=>{},cancelLabel:"Back",submitLabel:"Continue",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:'The left footer slot shows "Step 2 of 4" instead of the default Reset button. The right slot keeps Cancel + Submit as usual.'})})})},O={render:()=>e.jsx(o,{title:"Publish Settings",description:"Choose how to save your work",showReset:!1,footerEnd:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"tertiary",size:"medium",onClick:()=>{},children:"Discard"}),e.jsx(i,{variant:"secondary",size:"medium",onClick:()=>{},children:"Save Draft"}),e.jsx(i,{variant:"primary",size:"medium",onClick:()=>{},children:"Publish Now"})]}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:"The right footer slot has three custom buttons (Discard, Save Draft, Publish Now) instead of the default Cancel + Submit pair."})})})},P={render:()=>e.jsx(o,{title:"Review Changes",description:"12 items pending review",footerStart:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:"#F59E0B",display:"inline-block"}}),e.jsx(r,{variant:"caption",style:{color:"#6B7280"},children:"Unsaved changes"})]}),footerEnd:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"secondary",size:"medium",onClick:()=>{},children:"Reject All"}),e.jsx(i,{variant:"primary",size:"medium",onClick:()=>{},children:"Approve All"})]}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{variant:"body",children:'Both footer slots are overridden. Left shows an "Unsaved changes" status dot, right shows Reject All + Approve All buttons.'})})})},M={render:()=>{const[t,a]=s.useState(!1);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(i,{onClick:()=>a(!0),children:"Open Flexible Drawer"}),e.jsx(h,{isOpen:t,onClose:()=>a(!1),title:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(y,{name:"Settings",size:"medium"}),e.jsx(r,{variant:"headingM",weight:"semibold",as:"h2",children:"Advanced Config"}),e.jsx("span",{style:{display:"inline-flex",alignItems:"center",padding:"2px 8px",borderRadius:"12px",background:"#FEF3C7",color:"#92400E",fontSize:"11px",fontWeight:600},children:"Experimental"})]}),description:e.jsxs(r,{variant:"body",children:["Changes apply immediately."," ",e.jsx("a",{href:"#",style:{color:"#2563EB"},children:"Read the docs"})," before continuing."]}),headerActions:e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:e.jsx("button",{"aria-label":"Bookmark",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:36,height:36,border:"none",background:"none",borderRadius:6,cursor:"pointer",color:"#6B7280"},children:e.jsx(y,{name:"Bookmark",size:"medium"})})}),showCloseButton:!0,footerStart:e.jsx(r,{variant:"caption",style:{color:"#6B7280"},children:"Last saved: 2 min ago"}),footerEnd:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"tertiary",size:"medium",onClick:()=>a(!1),children:"Cancel"}),e.jsx(i,{variant:"secondary",size:"medium",onClick:()=>{},children:"Save Draft"}),e.jsx(i,{variant:"primary",size:"medium",onClick:()=>a(!1),children:"Apply"})]}),children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{variant:"headingS",weight:"semibold",children:"All flexibility props active"}),e.jsx(r,{variant:"body",children:"• title — ReactNode with icon + badge"}),e.jsx(r,{variant:"body",children:"• description — ReactNode with a link"}),e.jsx(r,{variant:"body",children:"• headerActions — bookmark icon button"}),e.jsx(r,{variant:"body",children:'• footerStart — "Last saved" status text'}),e.jsx(r,{variant:"body",children:"• footerEnd — 3 custom action buttons"})]})})]})}},V={render:()=>e.jsx(o,{title:"This title is hidden",showHeader:!1,showFooter:!1,children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(r,{variant:"headingL",weight:"bold",children:"Custom Full-Screen Content"}),e.jsx(i,{variant:"tertiary",size:"small",onClick:()=>{},children:"Close"})]}),e.jsx(r,{variant:"body",children:"Both header and footer are completely hidden. You have full control over the entire drawer content."}),e.jsx(r,{variant:"body",children:"This is useful for:"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",paddingLeft:"16px"},children:[e.jsx(r,{variant:"body",children:"• Custom layouts that need maximum space"}),e.jsx(r,{variant:"body",children:"• Image galleries or media viewers"}),e.jsx(r,{variant:"body",children:"• Custom navigation or wizard flows"}),e.jsx(r,{variant:"body",children:"• Embedded applications or iframes"})]}),e.jsxs("div",{style:{marginTop:"auto",paddingTop:"20px",display:"flex",justifyContent:"flex-end",gap:"12px",borderTop:"1px solid #E5E5E5"},children:[e.jsx(i,{variant:"secondary",size:"medium",children:"Cancel"}),e.jsx(i,{variant:"primary",size:"medium",children:"Save"})]})]})})};var We,ze,Ne,Fe,Ie;x.parameters={...x.parameters,docs:{...(We=x.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ne=(ze=x.parameters)==null?void 0:ze.docs)==null?void 0:Ne.source},description:{story:"Default drawer from the right side with all features",...(Ie=(Fe=x.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.description}}};var $e,qe,Le,Ae,Oe;v.parameters={...v.parameters,docs:{...($e=v.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Le=(qe=v.parameters)==null?void 0:qe.docs)==null?void 0:Le.source},description:{story:"Drawer from the left side",...(Oe=(Ae=v.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.description}}};var Pe,Me,Ve,Ue,He;w.parameters={...w.parameters,docs:{...(Pe=w.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=w.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source},description:{story:"Drawer with form content",...(He=(Ue=w.parameters)==null?void 0:Ue.docs)==null?void 0:He.description}}};var Xe,Ye,_e,Je,Ke;T.parameters={...T.parameters,docs:{...(Xe=T.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(_e=(Ye=T.parameters)==null?void 0:Ye.docs)==null?void 0:_e.source},description:{story:"Drawer without reset button - view only mode",...(Ke=(Je=T.parameters)==null?void 0:Je.docs)==null?void 0:Ke.description}}};var Qe,Ze,Ge,et,tt;j.parameters={...j.parameters,docs:{...(Qe=j.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ge=(Ze=j.parameters)==null?void 0:Ze.docs)==null?void 0:Ge.source},description:{story:"Drawer with scrollable content",...(tt=(et=j.parameters)==null?void 0:et.docs)==null?void 0:tt.description}}};var rt,at,it,ot,st;C.parameters={...C.parameters,docs:{...(rt=C.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(at=C.parameters)==null?void 0:at.docs)==null?void 0:it.source},description:{story:"Narrow drawer for quick actions",...(st=(ot=C.parameters)==null?void 0:ot.docs)==null?void 0:st.description}}};var nt,dt,lt,pt,ct;S.parameters={...S.parameters,docs:{...(nt=S.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(lt=(dt=S.parameters)==null?void 0:dt.docs)==null?void 0:lt.source},description:{story:"Wide drawer for data tables",...(ct=(pt=S.parameters)==null?void 0:pt.docs)==null?void 0:ct.description}}};var ut,yt,ht,mt,ft;D.parameters={...D.parameters,docs:{...(ut=D.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Processing" description="Please wait while we process your request" isLoading={true} showReset={false}>
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">This content is hidden behind the loading overlay.</Typography>
    </div>
  </DrawerWrapper>
}`,...(ht=(yt=D.parameters)==null?void 0:yt.docs)==null?void 0:ht.source},description:{story:"Loading state - shows loading overlay",...(ft=(mt=D.parameters)==null?void 0:mt.docs)==null?void 0:ft.description}}};var gt,bt,xt,vt,wt;k.parameters={...k.parameters,docs:{...(gt=k.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(xt=(bt=k.parameters)==null?void 0:bt.docs)==null?void 0:xt.source},description:{story:"Error state - shows error message",...(wt=(vt=k.parameters)==null?void 0:vt.docs)==null?void 0:wt.description}}};var Tt,jt,Ct,St,Dt;R.parameters={...R.parameters,docs:{...(Tt=R.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Notifications" description="Your notification center" isEmpty={true} emptyMessage="No notifications at this time" showReset={false} showSubmit={false} cancelLabel="Close">
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">This content is replaced by the empty state.</Typography>
    </div>
  </DrawerWrapper>
}`,...(Ct=(jt=R.parameters)==null?void 0:jt.docs)==null?void 0:Ct.source},description:{story:"Empty state - shows empty message",...(Dt=(St=R.parameters)==null?void 0:St.docs)==null?void 0:Dt.description}}};var kt,Rt,Bt,Et,Wt;B.parameters={...B.parameters,docs:{...(kt=B.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Disabled Drawer" description="All interactions are disabled" disabled={true}>
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">This drawer is disabled. You cannot interact with any elements.</Typography>
    </div>
  </DrawerWrapper>
}`,...(Bt=(Rt=B.parameters)==null?void 0:Rt.docs)==null?void 0:Bt.source},description:{story:"Disabled state - all interactions disabled",...(Wt=(Et=B.parameters)==null?void 0:Et.docs)==null?void 0:Wt.description}}};var zt,Nt,Ft,It,$t;E.parameters={...E.parameters,docs:{...(zt=E.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Ft=(Nt=E.parameters)==null?void 0:Nt.docs)==null?void 0:Ft.source},description:{story:"Custom header slot",...($t=(It=E.parameters)==null?void 0:It.docs)==null?void 0:$t.description}}};var qt,Lt,At,Ot,Pt;W.parameters={...W.parameters,docs:{...(qt=W.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(At=(Lt=W.parameters)==null?void 0:Lt.docs)==null?void 0:At.source},description:{story:"Custom footer slot",...(Pt=(Ot=W.parameters)==null?void 0:Ot.docs)==null?void 0:Pt.description}}};var Mt,Vt,Ut,Ht,Xt;z.parameters={...z.parameters,docs:{...(Mt=z.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Ut=(Vt=z.parameters)==null?void 0:Vt.docs)==null?void 0:Ut.source},description:{story:"With forwardRef - access drawer DOM node",...(Xt=(Ht=z.parameters)==null?void 0:Ht.docs)==null?void 0:Xt.description}}};var Yt,_t,Jt,Kt,Qt;N.parameters={...N.parameters,docs:{...(Yt=N.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
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
}`,...(Jt=(_t=N.parameters)==null?void 0:_t.docs)==null?void 0:Jt.source},description:{story:"No header - body only with footer",...(Qt=(Kt=N.parameters)==null?void 0:Kt.docs)==null?void 0:Qt.description}}};var Zt,Gt,er,tr,rr;F.parameters={...F.parameters,docs:{...(Zt=F.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(er=(Gt=F.parameters)==null?void 0:Gt.docs)==null?void 0:er.source},description:{story:"No footer - header and body only",...(rr=(tr=F.parameters)==null?void 0:tr.docs)==null?void 0:rr.description}}};var ar,ir,or,sr,nr;I.parameters={...I.parameters,docs:{...(ar=I.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title={<div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }}>
        <Typography variant="headingM" weight="semibold" as="h2">User Settings</Typography>
        <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px 8px',
      borderRadius: '12px',
      background: '#EFF6FF',
      color: '#1D4ED8',
      fontSize: '12px',
      fontWeight: 600
    }}>Beta</span>
      </div>} description="Manage your account preferences" onSubmit={() => {}}>
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">The title is a ReactNode — badge, icon, anything goes.</Typography>
    </div>
  </DrawerWrapper>
}`,...(or=(ir=I.parameters)==null?void 0:ir.docs)==null?void 0:or.source},description:{story:"ReactNode title — pass a badge, icon, or any JSX as the heading.\nThe `title` prop accepts `string | ReactNode`.",...(nr=(sr=I.parameters)==null?void 0:sr.docs)==null?void 0:nr.description}}};var dr,lr,pr,cr,ur;$.parameters={...$.parameters,docs:{...(dr=$.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Import Data" description={<Typography variant="body">
        Upload a CSV file. Need help?{' '}
        <a href="#" style={{
      color: '#2563EB'
    }}>View the import guide</a>.
      </Typography>} submitLabel="Import" onSubmit={() => {}}>
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">The description is a ReactNode — links, bold text, anything.</Typography>
    </div>
  </DrawerWrapper>
}`,...(pr=(lr=$.parameters)==null?void 0:lr.docs)==null?void 0:pr.source},description:{story:"ReactNode description — rich text with links, emphasis, or any JSX.\nThe `description` prop accepts `string | ReactNode`.",...(ur=(cr=$.parameters)==null?void 0:cr.docs)==null?void 0:ur.description}}};var yr,hr,mr,fr,gr;q.parameters={...q.parameters,docs:{...(yr=q.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Document Preview" description="Review before publishing" headerActions={<div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  }}>
        <button aria-label="Bookmark" style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      border: 'none',
      background: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      color: '#6B7280'
    }}>
          <Icon name="Bookmark" size="medium" />
        </button>
        <button aria-label="Share" style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      border: 'none',
      background: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      color: '#6B7280'
    }}>
          <Icon name="Share" size="medium" />
        </button>
      </div>} onSubmit={() => {}}>
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">
        Bookmark and Share icon buttons appear in the header alongside the default close button.
        The default header structure is preserved — only extra actions are injected.
      </Typography>
    </div>
  </DrawerWrapper>
}`,...(mr=(hr=q.parameters)==null?void 0:hr.docs)==null?void 0:mr.source},description:{story:`headerActions — extra icon buttons injected between the title block and the
close button without replacing the whole header.`,...(gr=(fr=q.parameters)==null?void 0:fr.docs)==null?void 0:gr.description}}};var br,xr,vr,wr,Tr;L.parameters={...L.parameters,docs:{...(br=L.parameters)==null?void 0:br.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      padding: '20px'
    }}>
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action" description="Please read before proceeding" showCloseButton={false} showReset={false} cancelLabel="Discard" submitLabel="Confirm" onSubmit={() => setIsOpen(false)}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">
              The X close button is removed. Dismissal is only via the footer Cancel/Confirm buttons.
            </Typography>
          </div>
        </Drawer>
      </div>;
  }
}`,...(vr=(xr=L.parameters)==null?void 0:xr.docs)==null?void 0:vr.source},description:{story:`showCloseButton={false} — remove the X icon from the header entirely.
Useful when your headerActions or custom footer manage dismissal.`,...(Tr=(wr=L.parameters)==null?void 0:wr.docs)==null?void 0:Tr.description}}};var jr,Cr,Sr,Dr,kr;A.parameters={...A.parameters,docs:{...(jr=A.parameters)==null?void 0:jr.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Multi-step Wizard" description="Complete all steps to finish" footerStart={<Typography variant="caption" style={{
    color: '#6B7280'
  }}>
        Step 2 of 4
      </Typography>} onSubmit={() => {}} cancelLabel="Back" submitLabel="Continue">
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">
        The left footer slot shows "Step 2 of 4" instead of the default Reset button.
        The right slot keeps Cancel + Submit as usual.
      </Typography>
    </div>
  </DrawerWrapper>
}`,...(Sr=(Cr=A.parameters)==null?void 0:Cr.docs)==null?void 0:Sr.source},description:{story:`footerStart — replace the left footer slot (where Reset lives) with any content:
step counter, status chip, helper text, checkbox, etc.`,...(kr=(Dr=A.parameters)==null?void 0:Dr.docs)==null?void 0:kr.description}}};var Rr,Br,Er,Wr,zr;O.parameters={...O.parameters,docs:{...(Rr=O.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Publish Settings" description="Choose how to save your work" showReset={false} footerEnd={<>
        <Button variant="tertiary" size="medium" onClick={() => {}}>Discard</Button>
        <Button variant="secondary" size="medium" onClick={() => {}}>Save Draft</Button>
        <Button variant="primary" size="medium" onClick={() => {}}>Publish Now</Button>
      </>}>
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">
        The right footer slot has three custom buttons (Discard, Save Draft, Publish Now)
        instead of the default Cancel + Submit pair.
      </Typography>
    </div>
  </DrawerWrapper>
}`,...(Er=(Br=O.parameters)==null?void 0:Br.docs)==null?void 0:Er.source},description:{story:`footerEnd — replace the right footer slot (Cancel + Submit) with any content:
custom button set, split-button, link, etc.`,...(zr=(Wr=O.parameters)==null?void 0:Wr.docs)==null?void 0:zr.description}}};var Nr,Fr,Ir,$r,qr;P.parameters={...P.parameters,docs:{...(Nr=P.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Review Changes" description="12 items pending review" footerStart={<div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  }}>
        <span style={{
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#F59E0B',
      display: 'inline-block'
    }} />
        <Typography variant="caption" style={{
      color: '#6B7280'
    }}>Unsaved changes</Typography>
      </div>} footerEnd={<>
        <Button variant="secondary" size="medium" onClick={() => {}}>Reject All</Button>
        <Button variant="primary" size="medium" onClick={() => {}}>Approve All</Button>
      </>}>
    <div style={{
      padding: '20px'
    }}>
      <Typography variant="body">
        Both footer slots are overridden. Left shows an "Unsaved changes" status dot,
        right shows Reject All + Approve All buttons.
      </Typography>
    </div>
  </DrawerWrapper>
}`,...(Ir=(Fr=P.parameters)==null?void 0:Fr.docs)==null?void 0:Ir.source},description:{story:`Both footer slots overridden — full control over left and right areas while
keeping the default footer shell (border, padding, layout).`,...(qr=($r=P.parameters)==null?void 0:$r.docs)==null?void 0:qr.description}}};var Lr,Ar,Or,Pr,Mr;M.parameters={...M.parameters,docs:{...(Lr=M.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div style={{
      padding: '20px'
    }}>
        <Button onClick={() => setIsOpen(true)}>Open Flexible Drawer</Button>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title={<div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
              <Icon name="Settings" size="medium" />
              <Typography variant="headingM" weight="semibold" as="h2">Advanced Config</Typography>
              <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '2px 8px',
          borderRadius: '12px',
          background: '#FEF3C7',
          color: '#92400E',
          fontSize: '11px',
          fontWeight: 600
        }}>Experimental</span>
            </div>} description={<Typography variant="body">
              Changes apply immediately.{' '}
              <a href="#" style={{
          color: '#2563EB'
        }}>Read the docs</a> before continuing.
            </Typography>} headerActions={<div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}>
              <button aria-label="Bookmark" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 36,
          height: 36,
          border: 'none',
          background: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          color: '#6B7280'
        }}>
                <Icon name="Bookmark" size="medium" />
              </button>
            </div>} showCloseButton={true} footerStart={<Typography variant="caption" style={{
        color: '#6B7280'
      }}>Last saved: 2 min ago</Typography>} footerEnd={<>
              <Button variant="tertiary" size="medium" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button variant="secondary" size="medium" onClick={() => {}}>Save Draft</Button>
              <Button variant="primary" size="medium" onClick={() => setIsOpen(false)}>Apply</Button>
            </>}>
          <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <Typography variant="headingS" weight="semibold">All flexibility props active</Typography>
            <Typography variant="body">• title — ReactNode with icon + badge</Typography>
            <Typography variant="body">• description — ReactNode with a link</Typography>
            <Typography variant="body">• headerActions — bookmark icon button</Typography>
            <Typography variant="body">• footerStart — "Last saved" status text</Typography>
            <Typography variant="body">• footerEnd — 3 custom action buttons</Typography>
          </div>
        </Drawer>
      </div>;
  }
}`,...(Or=(Ar=M.parameters)==null?void 0:Ar.docs)==null?void 0:Or.source},description:{story:`Kitchen sink — all new flexibility props used together:
ReactNode title, ReactNode description, headerActions, showCloseButton=false,
footerStart, and footerEnd.`,...(Mr=(Pr=M.parameters)==null?void 0:Pr.docs)==null?void 0:Mr.description}}};var Vr,Ur,Hr,Xr,Yr;V.parameters={...V.parameters,docs:{...(Vr=V.parameters)==null?void 0:Vr.docs,source:{originalSource:`{
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
}`,...(Hr=(Ur=V.parameters)==null?void 0:Ur.docs)==null?void 0:Hr.source},description:{story:"No header and no footer - body only",...(Yr=(Xr=V.parameters)==null?void 0:Xr.docs)==null?void 0:Yr.description}}};const ei=["Default","LeftPosition","WithForm","ViewOnly","ScrollableContent","NarrowDrawer","WideDrawer","LoadingState","ErrorState","EmptyState","DisabledState","CustomHeader","CustomFooter","WithRef","NoHeader","NoFooter","RichTitle","RichDescription","WithHeaderActions","NoCloseButton","FooterStartSlot","FooterEndSlot","BothFooterSlotsOverridden","FullFlexibility","BodyOnly"];export{V as BodyOnly,P as BothFooterSlotsOverridden,W as CustomFooter,E as CustomHeader,x as Default,B as DisabledState,R as EmptyState,k as ErrorState,O as FooterEndSlot,A as FooterStartSlot,M as FullFlexibility,v as LeftPosition,D as LoadingState,C as NarrowDrawer,L as NoCloseButton,F as NoFooter,N as NoHeader,$ as RichDescription,I as RichTitle,j as ScrollableContent,T as ViewOnly,S as WideDrawer,w as WithForm,q as WithHeaderActions,z as WithRef,ei as __namedExportsOrder,Ga as default};
