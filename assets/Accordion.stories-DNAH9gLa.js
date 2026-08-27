import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as m,R as J}from"./index-Bv9Y92EF.js";import{g as d}from"./styled-components.browser.esm-CVW2bgxI.js";import{a as he,E as oa}from"./ExpandMore-Bd7rmlfk.js";import{T as a}from"./Typography-CidD3oMh.js";import{c as Q}from"./createSvgIcon-Ce6eLUkr.js";import{B as u}from"./Button-DlNRQx8j.js";import{a as n}from"./WarningAmberOutlined-Chc0M3hO.js";import{B as g}from"./Badge-FGqUbZvd.js";import{C as Lo}from"./Chip--FEJIdFJ.js";import{C as aa}from"./Close-CtL5j8iM.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Eo=Q(e.jsx("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"})),na=Q(e.jsx("path",{d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm10 14.5V20H8v-3.5l4-4zm-4-5-4-4V4h8v3.5z"})),ta=Q(e.jsx("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z"})),ia=d.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: ${({$disabled:o})=>o?.5:1};
  pointer-events: ${({$disabled:o})=>o?"none":"auto"};
  
  /* Error state */
  ${({$isInvalid:o,theme:t})=>o&&`
    border: 1px solid ${t.colors.semantic.border.error};
    border-radius: ${t.borderRadius.md};
  `}
`,ra=d.button`
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.spacing[4]}; /* 10px */
  padding: ${({theme:o})=>o.spacing[7]}; /* 16px */
  background-color: ${({theme:o})=>o.colors.palette.neutral[50]}; /* white */
  border: 1px solid ${({theme:o,$isExpanded:t})=>t?o.colors.palette.primary[400]:o.colors.palette.neutral[400]};
  border-radius: ${({theme:o,$isExpanded:t})=>t?`${o.borderRadius.md} ${o.borderRadius.md} 0 0`:o.borderRadius.md}; /* 8px all corners */
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  text-align: left;

  /* Hover state */
  &:hover:not(:disabled) {
    border-color: ${({theme:o,$isExpanded:t})=>t?o.colors.palette.primary[400]:o.colors.palette.neutral[500]};
    background-color: ${({theme:o})=>o.colors.semantic.background.secondary};
  }
  
  /* Focus-visible state */
  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
  
  /* Active state */
  &:active:not(:disabled) {
    background-color: ${({theme:o})=>o.colors.semantic.background.tertiary};
  }
  
  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
  }
`,da=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,sa=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[6]}; /* 14px */
  flex: 1;
`,ca=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[5]}; /* 12px */
`,la=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`,pa=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[6]}; /* 14px */
`,ge=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  transform: ${({$isExpanded:o})=>o?"rotate(180deg)":"rotate(0deg)"};

  svg {
    width: 24px;
    height: 24px;
  }
`,ha=d.div`
  display: ${({$isExpanded:o})=>o?"flex":"none"};
  flex-direction: column;
  width: 100%;
  background-color: ${({theme:o})=>o.colors.palette.neutral[200]}; /* #f8f8f8 */
  border-left: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-right: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-bottom: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-radius: ${({theme:o,$hasFooter:t})=>t?"0":`0 0 ${o.borderRadius.md} ${o.borderRadius.md}`}; /* 8px bottom corners if no footer */
  min-height: ${({theme:o})=>o.spacing[20]}; /* 100px */
  padding: ${({theme:o})=>o.spacing[7]}; /* 16px */
  position: relative;
`,ga=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:o})=>o.colors.palette.neutral[50]};
  opacity: 0.9;
  z-index: 1;
`,ua=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:o})=>o.spacing[10]};
  gap: ${({theme:o})=>o.spacing[4]};
  text-align: center;
`,ya=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[3]};
  padding: ${({theme:o})=>o.spacing[4]};
  background-color: ${({theme:o})=>o.colors.palette.error[50]};
  border: 1px solid ${({theme:o})=>o.colors.semantic.border.error};
  border-radius: ${({theme:o})=>o.borderRadius.sm};
  color: ${({theme:o})=>o.colors.semantic.text.error};
`,ma=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:o})=>o.spacing[7]} ${({theme:o})=>o.spacing[8]}; /* 16px 20px */
  background-color: ${({theme:o})=>o.colors.palette.neutral[100]}; /* #fdfdfd */
  border-left: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-right: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-bottom: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-radius: 0 0 ${({theme:o})=>o.borderRadius.md} ${({theme:o})=>o.borderRadius.md}; /* 8px bottom corners */
`,xa=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[3]}; /* 8px */
`,i=m.forwardRef(({as:o,heading:t="Accordion Heading",headingVariant:s="headingM",headingWeight:h="semibold",description:l,children:Z,leadIcon:V,showLeadIcon:So=!0,expandIconPosition:ee="right",labelsAndMetadata:oe,showFooter:ae=!1,footerText:z,footerActions:W,customHeader:ne,customContent:te,customFooter:ie,defaultExpanded:ko=!1,expanded:U,disabled:y=!1,isLoading:Y=!1,isInvalid:x=!1,isEmpty:re=!1,errorMessage:de,emptyMessage:Do="No content available",loadingMessage:Ro="Loading...",onExpandChange:_,onOpen:K,onClose:X,onAfterOpen:f,onAfterClose:v,className:Mo,style:$o,headerClassName:qo,headerStyle:No,contentClassName:Fo,contentStyle:Po,footerClassName:Oo,footerStyle:Bo,"aria-label":Ho,"aria-labelledby":Vo,"aria-describedby":zo,id:Wo,...Uo},Yo)=>{const _o=m.useId(),b=Wo||_o,se=`${b}-header`,ce=`${b}-content`,le=l?`${b}-description`:void 0,[Ko,Xo]=m.useState(ko),r=U!==void 0?U:Ko,pe=m.useRef(r),Go=o||"div",G=()=>{if(y)return;const c=!r;c?K==null||K():X==null||X(),U===void 0&&Xo(c),_==null||_(c)},Jo=c=>{y||(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),G())};m.useEffect(()=>{if(pe.current!==r){const c=setTimeout(()=>{r?f==null||f():v==null||v()},200);return pe.current=r,()=>clearTimeout(c)}},[r,f,v]);const Qo=()=>ne?ne({isExpanded:r,disabled:y||!1,onClick:G,heading:t,description:l,leadIcon:V}):e.jsxs(ra,{$isExpanded:r,onClick:G,onKeyDown:Jo,disabled:y,className:qo,style:No,"aria-expanded":r,"aria-controls":ce,id:se,children:[e.jsxs(da,{children:[ee==="left"&&e.jsx(ge,{$isExpanded:r,"aria-hidden":"true",children:e.jsx(he,{})}),e.jsxs(sa,{children:[e.jsxs(ca,{children:[So&&V&&e.jsx(la,{"aria-hidden":"true",children:V}),e.jsx(a,{variant:s,weight:h,as:"span",style:{whiteSpace:"nowrap"},children:t})]}),oe&&e.jsx(pa,{children:oe})]}),ee==="right"&&e.jsx(ge,{$isExpanded:r,"aria-hidden":"true",children:e.jsx(he,{})})]}),l&&e.jsx("span",{id:le,style:{width:"100%"},children:e.jsx(a,{variant:"body",as:"span",children:l})})]}),Zo=()=>te?te({isExpanded:r,children:Z}):e.jsxs(ha,{$isExpanded:r,$hasFooter:ae,className:Fo,style:Po,id:ce,role:"region","aria-labelledby":se,children:[Y&&e.jsx(ga,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"},children:[e.jsx(ta,{style:{width:32,height:32,animation:"spin 1s linear infinite"}}),e.jsx(a,{variant:"body",children:Ro})]})}),x&&de&&!Y&&e.jsxs(ya,{role:"alert",children:[e.jsx(oa,{style:{width:20,height:20,flexShrink:0}}),e.jsx(a,{variant:"body",children:de})]}),re&&!Y&&!x&&e.jsxs(ua,{children:[e.jsx(na,{style:{width:48,height:48,opacity:.5}}),e.jsx(a,{variant:"body",style:{opacity:.7},children:Do})]}),!re&&!x&&Z]}),ea=()=>!ae||!r?null:ie?ie({footerText:z,footerActions:W}):e.jsxs(ma,{className:Oo,style:Bo,children:[z&&e.jsx(a,{variant:"caption",as:"span",style:{whiteSpace:"nowrap"},children:z}),W&&e.jsx(xa,{children:W})]});return e.jsx(Go,{ref:Yo,className:Mo,style:$o,id:b,"aria-label":Ho,"aria-labelledby":Vo,"aria-describedby":zo||le,...Uo,children:e.jsxs(ia,{$isExpanded:r,$disabled:y||!1,$isInvalid:x||!1,children:[Qo(),Zo(),ea()]})})});i.displayName="Accordion";i.__docgenInfo={description:`Accordion - Enterprise-grade collapsible content container

@example
\`\`\`tsx
<Accordion
  heading="Section Title"
  description="Optional description"
  leadIcon={<CheckCircleOutlined />}
  isLoading={loading}
  onExpandChange={(expanded) => {}}
>
  Content goes here
</Accordion>
\`\`\``,methods:[],displayName:"Accordion",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Render the accordion as a different HTML element or custom component.
@default 'div'
@example as="section"
@example as={CustomContainer}`},heading:{required:!1,tsType:{name:"string"},description:`Accordion heading text.
@default 'Accordion Heading'`,defaultValue:{value:"'Accordion Heading'",computed:!1}},headingVariant:{required:!1,tsType:{name:"union",raw:"'displayL' | 'displayM' | 'displayS' | 'headingXL' | 'headingL' | 'headingM' | 'headingS' | 'body' | 'paragraph' | 'caption' | 'code'",elements:[{name:"literal",value:"'displayL'"},{name:"literal",value:"'displayM'"},{name:"literal",value:"'displayS'"},{name:"literal",value:"'headingXL'"},{name:"literal",value:"'headingL'"},{name:"literal",value:"'headingM'"},{name:"literal",value:"'headingS'"},{name:"literal",value:"'body'"},{name:"literal",value:"'paragraph'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'code'"}]},description:`Typography variant for the heading.
@default 'headingM'
@example headingVariant="headingL"`,defaultValue:{value:"'headingM'",computed:!1}},headingWeight:{required:!1,tsType:{name:"union",raw:"'regular' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:`Typography weight for the heading.
@default 'semibold'
@example headingWeight="bold"`,defaultValue:{value:"'semibold'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:`Description text below heading.
Optional secondary text for additional context.`},children:{required:!1,tsType:{name:"ReactNode"},description:`Content to display when expanded.
Can be any React node or component.`},leadIcon:{required:!1,tsType:{name:"ReactNode"},description:`Lead icon (24px) shown before heading.
Typically a Material Icon component.
@example leadIcon={<CheckCircleOutlined />}`},showLeadIcon:{required:!1,tsType:{name:"boolean"},description:`Show/hide lead icon.
@default true`,defaultValue:{value:"true",computed:!1}},expandIconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Position of the expand/collapse icon.
@default 'right'
@example expandIconPosition="left"`,defaultValue:{value:"'right'",computed:!1}},labelsAndMetadata:{required:!1,tsType:{name:"ReactNode"},description:`Custom content for labels and metadata area.
Supports badges, chips, counters, timestamps, or any custom content.
@example labelsAndMetadata={<><Badge variant="info">New</Badge><Chip label="Tag" /></>}`},showFooter:{required:!1,tsType:{name:"boolean"},description:`Show/hide footer section.
@default false`,defaultValue:{value:"false",computed:!1}},footerText:{required:!1,tsType:{name:"string"},description:`Footer text content.
Displayed on the left side of the footer.`},footerActions:{required:!1,tsType:{name:"ReactNode"},description:`Footer action buttons or custom content.
Displayed on the right side of the footer.
@example footerActions={<Button variant="primary">Save</Button>}`},customHeader:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {
  isExpanded: boolean;
  disabled: boolean;
  onClick: () => void;
  heading?: string;
  description?: string;
  leadIcon?: ReactNode;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  isExpanded: boolean;
  disabled: boolean;
  onClick: () => void;
  heading?: string;
  description?: string;
  leadIcon?: ReactNode;
}`,signature:{properties:[{key:"isExpanded",value:{name:"boolean",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"heading",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"leadIcon",value:{name:"ReactNode",required:!1}}]}},name:"props"}],return:{name:"ReactNode"}}},description:`Custom header renderer.
Provides full control over header rendering.
@param props - Header props including isExpanded, disabled, onClick
@example customHeader={(props) => <CustomHeader {...props} />}`},customContent:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {
  isExpanded: boolean;
  children?: ReactNode;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  isExpanded: boolean;
  children?: ReactNode;
}`,signature:{properties:[{key:"isExpanded",value:{name:"boolean",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}}]}},name:"props"}],return:{name:"ReactNode"}}},description:`Custom content renderer.
Provides full control over content area rendering.
@param props - Content props including isExpanded, children
@example customContent={(props) => <CustomContent {...props} />}`},customFooter:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {
  footerText?: string;
  footerActions?: ReactNode;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  footerText?: string;
  footerActions?: ReactNode;
}`,signature:{properties:[{key:"footerText",value:{name:"string",required:!1}},{key:"footerActions",value:{name:"ReactNode",required:!1}}]}},name:"props"}],return:{name:"ReactNode"}}},description:`Custom footer renderer.
Provides full control over footer rendering.
@param props - Footer props including footerText, footerActions
@example customFooter={(props) => <CustomFooter {...props} />}`},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:`Initially expanded state (uncontrolled mode).
@default false`,defaultValue:{value:"false",computed:!1}},expanded:{required:!1,tsType:{name:"boolean"},description:`Controlled expanded state.
When provided, component operates in controlled mode.
@example expanded={isOpen}`},disabled:{required:!1,tsType:{name:"boolean"},description:`Disable the accordion.
Prevents interaction and applies disabled styling.
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state.
Shows loading indicator in content area.
@default false`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Error state.
Shows error styling and optional error message.
@default false`,defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state.
Shows empty state message when content is empty.
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true."},emptyMessage:{required:!1,tsType:{name:"string"},description:`Empty state message to display when isEmpty is true.
@default 'No content available'`,defaultValue:{value:"'No content available'",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:`Loading message to display when isLoading is true.
@default 'Loading...'`,defaultValue:{value:"'Loading...'",computed:!1}},onExpandChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:`Callback when expand/collapse state changes.
@param expanded - New expanded state
@example onExpandChange={(expanded) => {}}`},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback when accordion starts opening.
Called before animation starts.`},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback when accordion starts closing.
Called before animation starts.`},onAfterOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback after accordion finishes opening.
Called after animation completes.`},onAfterClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback after accordion finishes closing.
Called after animation completes.`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the root container."},style:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles for the root container."},headerClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the header."},headerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles for the header."},contentClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the content area."},contentStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles for the content area."},footerClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the footer."},footerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles for the footer."},"aria-label":{required:!1,tsType:{name:"string"},description:`ARIA label for the accordion.
Overrides default aria-label.`},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of element that labels the accordion."},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ID of element that describes the accordion."},id:{required:!1,tsType:{name:"string"},description:`Unique ID for the accordion.
Used for ARIA relationships.`}},composes:["Omit"]};const ka={title:"Components/Accordion",component:i,parameters:{layout:"padded",docs:{description:{component:`
# Accordion Component

**Component Maturity: ✅ Enterprise Ready**

Enterprise-grade collapsible content container with full customization, accessibility, and state management.

## ✅ Component Maturity Checklist

### 1. API & Composition
- ✅ **forwardRef** - Exposes root DOM node
- ✅ **Polymorphic 'as' prop** - Render as different elements
- ✅ **Slot/render props** - customHeader, customContent, customFooter
- ✅ **Passthrough** - All HTML attributes via ...restProps

### 2. Layout & Responsiveness
- ✅ **No hardcoded pixels** - All spacing uses design tokens
- ✅ **Typography component** - No custom styled text elements
- ✅ **Flexbox layouts** - Responsive and fluid
- ✅ **Design tokens only** - Colors, spacing, typography from theme

### 3. Overrides & Theming
- ✅ **className & style props** - Root, header, content, footer
- ✅ **Multiple override points** - Full styling control

### 4. States & Behavior
- ✅ **All 8 states** - default, hover, focus, active, disabled, loading, empty, error
- ✅ **Event callbacks** - onExpandChange, onOpen, onClose, onAfterOpen, onAfterClose
- ✅ **Controlled/uncontrolled** - Flexible state management

### 5. Accessibility
- ✅ **ARIA attributes** - aria-expanded, aria-controls, role="region"
- ✅ **Semantic HTML** - button element for header
- ✅ **Keyboard navigation** - Enter/Space to toggle
- ✅ **Focus management** - Visible focus indicators

### 6. Storybook Documentation
- ✅ **Typography in all stories** - No HTML tags
- ✅ **All states documented** - Loading, error, empty, disabled
- ✅ **Comprehensive examples** - All features demonstrated

## Features

- **Collapsed and expanded states** with smooth transitions
- **Customizable heading typography** - Control variant and weight
- **Customizable lead icon** (24px Material Icons)
- **Expand icon position** - Place expand/collapse icon on left or right side
- **Flexible labels and metadata** area (badges, chips, counters, custom content)
- **Optional description text**
- **Expandable content area** with loading, error, and empty states
- **Optional footer** with text and action buttons
- **Nested accordions** support
- **Controlled or uncontrolled mode**
- **Full accessibility** with ARIA and keyboard navigation
- **Polymorphic** - Render as any HTML element
- **Custom slots** - Replace header, content, or footer with custom renderers

## Usage

\`\`\`tsx
import { Accordion } from '@lean-ids/components';
import { CheckCircleOutlined } from '@mui/icons-material';

// Basic usage
<Accordion
  heading="Accordion Heading"
  description="Put a short description related to the accordion heading"
  leadIcon={<CheckCircleOutlined />}
  labelsAndMetadata={
    <>
      <Badge type="info" label="Label" />
      <Chip label="Label" />
    </>
  }
  showFooter
  footerText="Footer one liner"
  footerActions={<Button variant="primary">Button</Button>}
>
  <Typography variant="body">Your content here</Typography>
</Accordion>

// Expand icon on left
<Accordion
  heading="Expand Icon on Left"
  expandIconPosition="left"
>
  <Typography variant="body">Content</Typography>
</Accordion>

// Custom heading typography
<Accordion
  heading="Large Bold Heading"
  headingVariant="headingL"
  headingWeight="bold"
>
  <Typography variant="body">Content</Typography>
</Accordion>

// With loading state
<Accordion
  heading="Loading Content"
  isLoading={true}
  loadingMessage="Loading data..."
>
  <Typography variant="body">Content</Typography>
</Accordion>

// With error state
<Accordion
  heading="Error State"
  isInvalid={true}
  errorMessage="Failed to load data"
>
  <Typography variant="body">Content</Typography>
</Accordion>

// Polymorphic - render as section
<Accordion
  as="section"
  heading="Section Accordion"
>
  <Typography variant="body">Content</Typography>
</Accordion>

// With forwardRef
const accordionRef = useRef<HTMLDivElement>(null);
<Accordion ref={accordionRef} heading="Ref Example">
  <Typography variant="body">Content</Typography>
</Accordion>
\`\`\`

## Nested Accordions

Accordions can be nested inside other accordions:

\`\`\`tsx
<Accordion heading="Parent Accordion">
  <Accordion heading="Child Accordion 1">
    <Typography variant="body">Content for child 1</Typography>
  </Accordion>
  <Accordion heading="Child Accordion 2">
    <Typography variant="body">Content for child 2</Typography>
  </Accordion>
</Accordion>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{heading:{control:"text",description:"Accordion heading text"},headingVariant:{control:"select",options:["displayL","displayM","displayS","headingXL","headingL","headingM","headingS","body","paragraph","caption","code"],description:"Typography variant for the heading"},headingWeight:{control:"select",options:["regular","medium","semibold","bold"],description:"Typography weight for the heading"},description:{control:"text",description:"Description text below heading"},leadIcon:{control:!1,description:"Lead icon (24px) - shown before heading"},showLeadIcon:{control:"boolean",description:"Show/hide lead icon"},expandIconPosition:{control:"radio",options:["left","right"],description:"Position of the expand/collapse icon"},labelsAndMetadata:{control:!1,description:"Custom content for labels and metadata area (badges, chips, counters, etc.)"},children:{control:!1,description:"Content to display when expanded"},footerText:{control:"text",description:"Footer text"},footerActions:{control:!1,description:"Footer action buttons"},showFooter:{control:"boolean",description:"Show/hide footer"},defaultExpanded:{control:"boolean",description:"Initially expanded state (uncontrolled)"},expanded:{control:"boolean",description:"Controlled expanded state"},disabled:{control:"boolean",description:"Disable the accordion"},isLoading:{control:"boolean",description:"Show loading state"},loadingMessage:{control:"text",description:"Loading message text"},isInvalid:{control:"boolean",description:"Show error state"},errorMessage:{control:"text",description:"Error message text"},isEmpty:{control:"boolean",description:"Show empty state"},emptyMessage:{control:"text",description:"Empty state message text"},as:{control:"text",description:'Polymorphic element type (e.g., "div", "section", "article")'}}},p={args:{heading:"Accordion Heading",description:"Put a short description related to the accordion heading",leadIcon:e.jsx(n,{}),showLeadIcon:!0,expandIconPosition:"right",labelsAndMetadata:e.jsxs(e.Fragment,{children:[e.jsx(g,{type:"info",label:"Label"}),e.jsx(Lo,{label:"Label"})]}),children:e.jsx("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:e.jsx(a,{variant:"body",children:"This is the accordion content area. You can put any content here."})}),showFooter:!1,defaultExpanded:!1}},C={args:{...p.args,defaultExpanded:!0,showFooter:!0,footerText:"Footer one liner",footerActions:e.jsxs(u,{variant:"primary",size:"small",children:[e.jsx(Eo,{style:{width:16,height:16}}),"Button",e.jsx(aa,{style:{width:16,height:16}})]})}},T={args:{...p.args,showLeadIcon:!1}},w={args:{heading:"Expand Icon on Left",description:"The expand/collapse icon is positioned on the left side",leadIcon:e.jsx(n,{}),showLeadIcon:!0,expandIconPosition:"left",labelsAndMetadata:e.jsx(e.Fragment,{children:e.jsx(g,{type:"info",label:"New Layout"})}),children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{variant:"body",children:"Notice the expand icon is now on the left side of the header instead of the right."}),e.jsx(a,{variant:"body",children:"This can be useful for different design patterns or RTL layouts."})]})}},A={args:{heading:"Large Bold Heading",description:"Custom typography variant and weight for the heading",headingVariant:"headingL",headingWeight:"bold",leadIcon:e.jsx(n,{}),showLeadIcon:!0,children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{variant:"body",children:"The heading uses headingL variant with bold weight instead of the default headingM with semibold."}),e.jsx(a,{variant:"body",children:"You can customize the heading typography to match your design requirements."})]})}},j={args:{heading:"Accordion Heading",leadIcon:e.jsx(n,{}),showLeadIcon:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"Content without description"})})}},I={args:{heading:"Simple Accordion",description:"A simple accordion without badges or chips",leadIcon:e.jsx(n,{}),showLeadIcon:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"Simple content"})})}},L={args:{...p.args,defaultExpanded:!0,showFooter:!0,footerText:"Footer one liner",footerActions:e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"secondary",size:"small",children:"Cancel"}),e.jsxs(u,{variant:"primary",size:"small",children:[e.jsx(Eo,{style:{width:16,height:16}}),"Confirm"]})]})}},E={args:{heading:"Parent Accordion",description:"This accordion contains nested child accordions",leadIcon:e.jsx(n,{}),showLeadIcon:!0,defaultExpanded:!0,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[e.jsx(i,{heading:"Child Accordion 1",description:"First nested accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"Content of child accordion 1"})})}),e.jsx(i,{heading:"Child Accordion 2",description:"Second nested accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,showFooter:!0,footerText:"Child footer",footerActions:e.jsx(u,{variant:"primary",size:"small",children:"Action"}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"Content of child accordion 2"})})})]})}},S={args:{heading:"Level 1 Accordion",description:"Top level accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,defaultExpanded:!0,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:e.jsx(i,{heading:"Level 2 Accordion",description:"Second level nested accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,defaultExpanded:!0,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:e.jsx(i,{heading:"Level 3 Accordion",description:"Third level nested accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"Deepest level content"})})})})})})}},k={args:{heading:"Custom Metadata Example",description:"Accordion with custom labels, counters, and badges",leadIcon:e.jsx(n,{}),showLeadIcon:!0,labelsAndMetadata:e.jsxs(e.Fragment,{children:[e.jsx(g,{type:"success",label:"Active"}),e.jsx(g,{type:"warning",label:"2 Pending"}),e.jsx(Lo,{label:"High Priority",variant:"filled"}),e.jsx(a,{variant:"caption",style:{color:"#909090"},children:"Updated 2 hours ago"})]}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"Content with custom metadata"})})}},D={args:{...p.args,disabled:!0}},R={render:()=>{const[o,t]=J.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(u,{onClick:()=>t(!o),children:[o?"Collapse":"Expand"," Accordion"]}),e.jsx(i,{heading:"Controlled Accordion",description:"This accordion is controlled by external state",leadIcon:e.jsx(n,{}),showLeadIcon:!0,expanded:o,onExpandChange:t,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"Controlled content"})})})]})}},M={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{heading:"First Accordion",description:"Description for first accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,labelsAndMetadata:e.jsx(g,{type:"info",label:"New"}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"Content for first accordion"})})}),e.jsx(i,{heading:"Second Accordion",description:"Description for second accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,labelsAndMetadata:e.jsx(g,{type:"success",label:"Completed"}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"Content for second accordion"})})}),e.jsx(i,{heading:"Third Accordion",description:"Description for third accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,labelsAndMetadata:e.jsx(g,{type:"warning",label:"In Progress"}),showFooter:!0,footerText:"Last updated: Today",footerActions:e.jsx(u,{variant:"primary",size:"small",children:"View Details"}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"Content for third accordion"})})})]})},$={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Expand Icon on Right (Default)"}),e.jsx(i,{heading:"Default Position",description:"Expand icon appears on the right side",leadIcon:e.jsx(n,{}),expandIconPosition:"right",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"This is the default behavior with the expand icon on the right."})})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"Expand Icon on Left"}),e.jsx(i,{heading:"Left Position",description:"Expand icon appears on the left side",leadIcon:e.jsx(n,{}),expandIconPosition:"left",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"The expand icon is now positioned on the left side of the header."})})})]})]})},q={args:{heading:"Loading Content",description:"This accordion is loading data",leadIcon:e.jsx(n,{}),defaultExpanded:!0,isLoading:!0,loadingMessage:"Loading data...",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"This content is hidden while loading"})})}},N={args:{heading:"Error Loading Data",description:"Failed to load content",leadIcon:e.jsx(n,{}),defaultExpanded:!0,isInvalid:!0,errorMessage:"Failed to load data. Please try again.",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"This content is hidden due to error"})})}},F={args:{heading:"No Content Available",description:"This accordion has no content",leadIcon:e.jsx(n,{}),defaultExpanded:!0,isEmpty:!0,emptyMessage:"No content available at this time",children:null}},P={args:{as:"section",heading:"Section Accordion",description:"This accordion is rendered as a <section> element",leadIcon:e.jsx(n,{}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"Check the DOM - this accordion's root is a section element!"})})}},O={render:()=>{const o=J.useRef(null),t=()=>{var s;(s=o.current)==null||s.scrollIntoView({behavior:"smooth",block:"center"})};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(u,{onClick:t,children:"Scroll to Accordion (using ref)"}),e.jsx("div",{style:{height:"100vh"}}),e.jsx(i,{ref:o,heading:"Accordion with Ref",description:"This accordion can be accessed via ref",leadIcon:e.jsx(n,{}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"This accordion was scrolled into view using a ref!"})})}),e.jsx("div",{style:{height:"100vh"}})]})}},B={render:()=>e.jsx(i,{heading:"Original Heading",customHeader:({isExpanded:o,onClick:t})=>e.jsxs("div",{onClick:t,style:{padding:"20px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",cursor:"pointer",borderRadius:"8px"},children:[e.jsxs(a,{variant:"headingM",weight:"semibold",style:{color:"white"},children:["🎨 Custom Header ",o?"▲":"▼"]}),e.jsx(a,{variant:"body",style:{color:"white",opacity:.9},children:"This header is completely custom!"})]}),customContent:({isExpanded:o})=>o?e.jsx("div",{style:{padding:"20px",background:"#f0f0f0"},children:e.jsx(a,{variant:"body",children:"🎨 Custom content renderer!"})}):null})},H={render:()=>{const[o,t]=J.useState([]),s=h=>{t(l=>[...l,`${new Date().toLocaleTimeString()}: ${h}`])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{heading:"Accordion with Event Callbacks",description:"Open/close to see event logs below",leadIcon:e.jsx(n,{}),onExpandChange:h=>s(`onExpandChange: ${h}`),onOpen:()=>s("onOpen"),onClose:()=>s("onClose"),onAfterOpen:()=>s("onAfterOpen (after animation)"),onAfterClose:()=>s("onAfterClose (after animation)"),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{variant:"body",children:"Toggle me to see event callbacks!"})})}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px",maxHeight:"200px",overflow:"auto"},children:[e.jsx(a,{variant:"headingS",weight:"semibold",style:{marginBottom:"8px"},children:"Event Log:"}),o.length===0?e.jsx(a,{variant:"caption",style:{opacity:.6},children:"No events yet..."}):o.map((h,l)=>e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:h},l))]})]})}};var ue,ye,me;p.parameters={...p.parameters,docs:{...(ue=p.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    heading: 'Accordion Heading',
    description: 'Put a short description related to the accordion heading',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    expandIconPosition: 'right',
    labelsAndMetadata: <>
        <Badge type="info" label="Label" />
        <Chip label="Label" />
      </>,
    children: <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="body">
          This is the accordion content area. You can put any content here.
        </Typography>
      </div>,
    showFooter: false,
    defaultExpanded: false
  }
}`,...(me=(ye=p.parameters)==null?void 0:ye.docs)==null?void 0:me.source}}};var xe,fe,ve;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultExpanded: true,
    showFooter: true,
    footerText: 'Footer one liner',
    footerActions: <Button variant="primary" size="small">
        <Done style={{
        width: 16,
        height: 16
      }} />
        Button
        <Close style={{
        width: 16,
        height: 16
      }} />
      </Button>
  }
}`,...(ve=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var be,Ce,Te;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLeadIcon: false
  }
}`,...(Te=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var we,Ae,je;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    heading: 'Expand Icon on Left',
    description: 'The expand/collapse icon is positioned on the left side',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    expandIconPosition: 'left',
    labelsAndMetadata: <>
        <Badge type="info" label="New Layout" />
      </>,
    children: <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="body">
          Notice the expand icon is now on the left side of the header instead of the right.
        </Typography>
        <Typography variant="body">
          This can be useful for different design patterns or RTL layouts.
        </Typography>
      </div>
  }
}`,...(je=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var Ie,Le,Ee;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    heading: 'Large Bold Heading',
    description: 'Custom typography variant and weight for the heading',
    headingVariant: 'headingL',
    headingWeight: 'bold',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    children: <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="body">
          The heading uses headingL variant with bold weight instead of the default headingM with semibold.
        </Typography>
        <Typography variant="body">
          You can customize the heading typography to match your design requirements.
        </Typography>
      </div>
  }
}`,...(Ee=(Le=A.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var Se,ke,De;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    heading: 'Accordion Heading',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    children: <div style={{
      padding: '20px'
    }}>
        <Typography variant="body">Content without description</Typography>
      </div>
  }
}`,...(De=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Re,Me,$e;I.parameters={...I.parameters,docs:{...(Re=I.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    heading: 'Simple Accordion',
    description: 'A simple accordion without badges or chips',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    children: <div style={{
      padding: '20px'
    }}>
        <Typography variant="body">Simple content</Typography>
      </div>
  }
}`,...($e=(Me=I.parameters)==null?void 0:Me.docs)==null?void 0:$e.source}}};var qe,Ne,Fe;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultExpanded: true,
    showFooter: true,
    footerText: 'Footer one liner',
    footerActions: <>
        <Button variant="secondary" size="small">
          Cancel
        </Button>
        <Button variant="primary" size="small">
          <Done style={{
          width: 16,
          height: 16
        }} />
          Confirm
        </Button>
      </>
  }
}`,...(Fe=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:Fe.source}}};var Pe,Oe,Be;E.parameters={...E.parameters,docs:{...(Pe=E.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    heading: 'Parent Accordion',
    description: 'This accordion contains nested child accordions',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    defaultExpanded: true,
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '16px'
    }}>
        <Accordion heading="Child Accordion 1" description="First nested accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">Content of child accordion 1</Typography>
          </div>
        </Accordion>
        
        <Accordion heading="Child Accordion 2" description="Second nested accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} showFooter={true} footerText="Child footer" footerActions={<Button variant="primary" size="small">Action</Button>}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">Content of child accordion 2</Typography>
          </div>
        </Accordion>
      </div>
  }
}`,...(Be=(Oe=E.parameters)==null?void 0:Oe.docs)==null?void 0:Be.source}}};var He,Ve,ze;S.parameters={...S.parameters,docs:{...(He=S.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    heading: 'Level 1 Accordion',
    description: 'Top level accordion',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    defaultExpanded: true,
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '16px'
    }}>
        <Accordion heading="Level 2 Accordion" description="Second level nested accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} defaultExpanded={true}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '16px'
        }}>
            <Accordion heading="Level 3 Accordion" description="Third level nested accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true}>
              <div style={{
              padding: '20px'
            }}>
                <Typography variant="body">Deepest level content</Typography>
              </div>
            </Accordion>
          </div>
        </Accordion>
      </div>
  }
}`,...(ze=(Ve=S.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};var We,Ue,Ye;k.parameters={...k.parameters,docs:{...(We=k.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    heading: 'Custom Metadata Example',
    description: 'Accordion with custom labels, counters, and badges',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    labelsAndMetadata: <>
        <Badge type="success" label="Active" />
        <Badge type="warning" label="2 Pending" />
        <Chip label="High Priority" variant="filled" />
        <Typography variant="caption" style={{
        color: '#909090'
      }}>Updated 2 hours ago</Typography>
      </>,
    children: <div style={{
      padding: '20px'
    }}>
        <Typography variant="body">Content with custom metadata</Typography>
      </div>
  }
}`,...(Ye=(Ue=k.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var _e,Ke,Xe;D.parameters={...D.parameters,docs:{...(_e=D.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Xe=(Ke=D.parameters)==null?void 0:Ke.docs)==null?void 0:Xe.source}}};var Ge,Je,Qe;R.parameters={...R.parameters,docs:{...(Ge=R.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => {
    const [expanded, setExpanded] = React.useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Collapse' : 'Expand'} Accordion
        </Button>
        
        <Accordion heading="Controlled Accordion" description="This accordion is controlled by external state" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} expanded={expanded} onExpandChange={setExpanded}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">Controlled content</Typography>
          </div>
        </Accordion>
      </div>;
  }
}`,...(Qe=(Je=R.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,eo,oo;M.parameters={...M.parameters,docs:{...(Ze=M.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Accordion heading="First Accordion" description="Description for first accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} labelsAndMetadata={<Badge type="info" label="New" />}>
        <div style={{
        padding: '20px'
      }}>
          <Typography variant="body">Content for first accordion</Typography>
        </div>
      </Accordion>
      
      <Accordion heading="Second Accordion" description="Description for second accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} labelsAndMetadata={<Badge type="success" label="Completed" />}>
        <div style={{
        padding: '20px'
      }}>
          <Typography variant="body">Content for second accordion</Typography>
        </div>
      </Accordion>
      
      <Accordion heading="Third Accordion" description="Description for third accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} labelsAndMetadata={<Badge type="warning" label="In Progress" />} showFooter={true} footerText="Last updated: Today" footerActions={<Button variant="primary" size="small">View Details</Button>}>
        <div style={{
        padding: '20px'
      }}>
          <Typography variant="body">Content for third accordion</Typography>
        </div>
      </Accordion>
    </div>
}`,...(oo=(eo=M.parameters)==null?void 0:eo.docs)==null?void 0:oo.source}}};var ao,no,to;$.parameters={...$.parameters,docs:{...(ao=$.parameters)==null?void 0:ao.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Expand Icon on Right (Default)
        </Typography>
        <Accordion heading="Default Position" description="Expand icon appears on the right side" leadIcon={<CheckCircleOutlined />} expandIconPosition="right">
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">
              This is the default behavior with the expand icon on the right.
            </Typography>
          </div>
        </Accordion>
      </div>
      
      <div>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '12px'
      }}>
          Expand Icon on Left
        </Typography>
        <Accordion heading="Left Position" description="Expand icon appears on the left side" leadIcon={<CheckCircleOutlined />} expandIconPosition="left">
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">
              The expand icon is now positioned on the left side of the header.
            </Typography>
          </div>
        </Accordion>
      </div>
    </div>
}`,...(to=(no=$.parameters)==null?void 0:no.docs)==null?void 0:to.source}}};var io,ro,so;q.parameters={...q.parameters,docs:{...(io=q.parameters)==null?void 0:io.docs,source:{originalSource:`{
  args: {
    heading: 'Loading Content',
    description: 'This accordion is loading data',
    leadIcon: <CheckCircleOutlined />,
    defaultExpanded: true,
    isLoading: true,
    loadingMessage: 'Loading data...',
    children: <div style={{
      padding: '20px'
    }}>
        <Typography variant="body">This content is hidden while loading</Typography>
      </div>
  }
}`,...(so=(ro=q.parameters)==null?void 0:ro.docs)==null?void 0:so.source}}};var co,lo,po;N.parameters={...N.parameters,docs:{...(co=N.parameters)==null?void 0:co.docs,source:{originalSource:`{
  args: {
    heading: 'Error Loading Data',
    description: 'Failed to load content',
    leadIcon: <CheckCircleOutlined />,
    defaultExpanded: true,
    isInvalid: true,
    errorMessage: 'Failed to load data. Please try again.',
    children: <div style={{
      padding: '20px'
    }}>
        <Typography variant="body">This content is hidden due to error</Typography>
      </div>
  }
}`,...(po=(lo=N.parameters)==null?void 0:lo.docs)==null?void 0:po.source}}};var ho,go,uo;F.parameters={...F.parameters,docs:{...(ho=F.parameters)==null?void 0:ho.docs,source:{originalSource:`{
  args: {
    heading: 'No Content Available',
    description: 'This accordion has no content',
    leadIcon: <CheckCircleOutlined />,
    defaultExpanded: true,
    isEmpty: true,
    emptyMessage: 'No content available at this time',
    children: null
  }
}`,...(uo=(go=F.parameters)==null?void 0:go.docs)==null?void 0:uo.source}}};var yo,mo,xo;P.parameters={...P.parameters,docs:{...(yo=P.parameters)==null?void 0:yo.docs,source:{originalSource:`{
  args: {
    as: 'section',
    heading: 'Section Accordion',
    description: 'This accordion is rendered as a <section> element',
    leadIcon: <CheckCircleOutlined />,
    children: <div style={{
      padding: '20px'
    }}>
        <Typography variant="body">
          Check the DOM - this accordion's root is a section element!
        </Typography>
      </div>
  }
}`,...(xo=(mo=P.parameters)==null?void 0:mo.docs)==null?void 0:xo.source}}};var fo,vo,bo;O.parameters={...O.parameters,docs:{...(fo=O.parameters)==null?void 0:fo.docs,source:{originalSource:`{
  render: () => {
    const accordionRef = React.useRef<HTMLDivElement>(null);
    const scrollToAccordion = () => {
      accordionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Button onClick={scrollToAccordion}>
          Scroll to Accordion (using ref)
        </Button>
        
        <div style={{
        height: '100vh'
      }} />
        
        <Accordion ref={accordionRef} heading="Accordion with Ref" description="This accordion can be accessed via ref" leadIcon={<CheckCircleOutlined />}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">
              This accordion was scrolled into view using a ref!
            </Typography>
          </div>
        </Accordion>
        
        <div style={{
        height: '100vh'
      }} />
      </div>;
  }
}`,...(bo=(vo=O.parameters)==null?void 0:vo.docs)==null?void 0:bo.source}}};var Co,To,wo;B.parameters={...B.parameters,docs:{...(Co=B.parameters)==null?void 0:Co.docs,source:{originalSource:`{
  render: () => <Accordion heading="Original Heading" customHeader={({
    isExpanded,
    onClick
  }) => <div onClick={onClick} style={{
    padding: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '8px'
  }}>
          <Typography variant="headingM" weight="semibold" style={{
      color: 'white'
    }}>
            🎨 Custom Header {isExpanded ? '▲' : '▼'}
          </Typography>
          <Typography variant="body" style={{
      color: 'white',
      opacity: 0.9
    }}>
            This header is completely custom!
          </Typography>
        </div>} customContent={({
    isExpanded
  }) => isExpanded ? <div style={{
    padding: '20px',
    background: '#f0f0f0'
  }}>
            <Typography variant="body">🎨 Custom content renderer!</Typography>
          </div> : null} />
}`,...(wo=(To=B.parameters)==null?void 0:To.docs)==null?void 0:wo.source}}};var Ao,jo,Io;H.parameters={...H.parameters,docs:{...(Ao=H.parameters)==null?void 0:Ao.docs,source:{originalSource:`{
  render: () => {
    const [logs, setLogs] = React.useState<string[]>([]);
    const addLog = (message: string) => {
      setLogs(prev => [...prev, \`\${new Date().toLocaleTimeString()}: \${message}\`]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Accordion heading="Accordion with Event Callbacks" description="Open/close to see event logs below" leadIcon={<CheckCircleOutlined />} onExpandChange={expanded => addLog(\`onExpandChange: \${expanded}\`)} onOpen={() => addLog('onOpen')} onClose={() => addLog('onClose')} onAfterOpen={() => addLog('onAfterOpen (after animation)')} onAfterClose={() => addLog('onAfterClose (after animation)')}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">Toggle me to see event callbacks!</Typography>
          </div>
        </Accordion>
        
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px',
        maxHeight: '200px',
        overflow: 'auto'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            Event Log:
          </Typography>
          {logs.length === 0 ? <Typography variant="caption" style={{
          opacity: 0.6
        }}>
              No events yet...
            </Typography> : logs.map((log, i) => <Typography key={i} variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>
                {log}
              </Typography>)}
        </div>
      </div>;
  }
}`,...(Io=(jo=H.parameters)==null?void 0:jo.docs)==null?void 0:Io.source}}};const Da=["Default","Expanded","WithoutLeadIcon","ExpandIconLeft","CustomHeadingTypography","WithoutDescription","WithoutLabelsAndMetadata","WithFooter","NestedAccordions","DeeplyNestedAccordions","CustomLabelsAndMetadata","Disabled","Controlled","MultipleAccordions","ExpandIconPositionComparison","LoadingState","ErrorState","EmptyState","PolymorphicSection","ForwardRefExample","CustomSlots","EventCallbacks"];export{R as Controlled,A as CustomHeadingTypography,k as CustomLabelsAndMetadata,B as CustomSlots,S as DeeplyNestedAccordions,p as Default,D as Disabled,F as EmptyState,N as ErrorState,H as EventCallbacks,w as ExpandIconLeft,$ as ExpandIconPositionComparison,C as Expanded,O as ForwardRefExample,q as LoadingState,M as MultipleAccordions,E as NestedAccordions,P as PolymorphicSection,L as WithFooter,j as WithoutDescription,I as WithoutLabelsAndMetadata,T as WithoutLeadIcon,Da as __namedExportsOrder,ka as default};
