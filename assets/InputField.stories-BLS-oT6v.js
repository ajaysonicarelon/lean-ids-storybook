import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as A}from"./index-B0WjJBI_.js";import{c as o,s as r}from"./styled-components.browser.esm-BIi91Tbq.js";import{F as Ye}from"./FieldImportance-finWzFXd.js";import{H as _e}from"./HelpingText-ClsYb8vx.js";import"./_commonjsHelpers-CqkleIqs.js";const Ke=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing[1]};
  width: ${({$fullWidth:t})=>t?"100%":"300px"};
  font-family: ${({theme:t})=>t.fonts.primary};
`,Je=o.div`
  display: flex;
  gap: 4px;
  align-items: flex-start;
`,Xe=o.label`
  font-family: ${({theme:t})=>t.fonts.primary};
  font-weight: ${({theme:t})=>t.fontWeights.medium};
  color: ${({theme:t,$disabled:l})=>l?t.colors.palette.neutral[400]:t.colors.palette.neutral[900]};
  white-space: nowrap;
  
  ${({$size:t,theme:l})=>t==="large"?r`
        font-size: ${l.fontSizes[16]};
        line-height: ${l.lineHeights[19]};
      `:r`
      font-size: ${l.fontSizes[14]};
      line-height: ${l.lineHeights[16]};
    `}
`;o.span`
  font-family: ${({theme:t})=>t.fonts.primary};
  font-size: ${({theme:t})=>t.fontSizes[14]};
  font-weight: ${({theme:t})=>t.fontWeights.regular};
  line-height: ${({theme:t})=>t.lineHeights[16]};
  color: ${({theme:t})=>t.colors.palette.error[500]};
  white-space: nowrap;
`;const Qe={xsmall:r`
    height: 28px;
    padding: ${({theme:t})=>t.spacing[2]};
    gap: ${({theme:t})=>t.spacing[2]};
  `,small:r`
    height: 32px;
    padding: ${({theme:t})=>t.spacing[2]};
    gap: ${({theme:t})=>t.spacing[2]};
  `,default:r`
    height: 40px;
    padding: ${({theme:t})=>t.spacing[2]};
    gap: ${({theme:t})=>t.spacing[2]};
  `,large:r`
    height: 50px;
    padding: ${({theme:t})=>t.spacing[2]};
    gap: ${({theme:t})=>t.spacing[2]};
  `},Ze=o.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:t,$disabled:l,$readOnly:s})=>l?t.colors.palette.neutral[100]:s?t.colors.palette.primary[50]:t.colors.palette.neutral[50]};
  border-width: ${({$isFocused:t})=>t?"2px":"1px"};
  border-style: solid;
  border-color: ${({theme:t,$error:l,$disabled:s,$readOnly:I,$isFocused:i})=>s||I?t.colors.palette.neutral[300]:l&&i||l?t.colors.palette.error[500]:i?t.colors.semantic.focus.input:t.colors.palette.neutral[400]};
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  transition: all 0.2s ease-in-out;
  
  ${({$size:t})=>Qe[t]}
  
  ${({$disabled:t})=>t&&r`
      cursor: not-allowed;
      opacity: 0.6;
    `}
  
  ${({$readOnly:t})=>t&&r`
      cursor: default;
      opacity: 0.8;
    `}
  
  ${({$error:t,$isFocused:l,theme:s})=>t&&l&&r`
      background-color: ${s.colors.palette.error[50]};
    `}
`,et=o.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({theme:t})=>t.fonts.primary};
  color: ${({theme:t})=>t.colors.palette.neutral[900]};
  padding: 0;
  min-width: 0;
  
  /* Typography based on Figma design tokens */
  ${({$size:t,theme:l})=>t==="large"?r`
        font-size: ${l.fontSizes[16]};
        line-height: ${l.lineHeights[19]};
        font-weight: ${l.fontWeights.medium}; /* 500 for filled state */
      `:r`
      font-size: ${l.fontSizes[14]};
      line-height: ${l.lineHeights[16]};
      font-weight: ${l.fontWeights.medium}; /* 500 for filled state */
    `}
  
  &::placeholder {
    color: ${({theme:t})=>t.colors.palette.neutral[400]};
    font-weight: ${({theme:t})=>t.fontWeights.regular}; /* 400 for placeholder */
  }
  
  &:disabled {
    cursor: not-allowed;
    color: ${({theme:t})=>t.colors.palette.neutral[500]};
  }
  
  /* Remove default number input spinners */
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type='number'] {
    -moz-appearance: textfield;
  }
  
  /* Remove default search input clear button */
  &[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`,H=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({theme:t})=>t.colors.palette.neutral[600]};
  
  ${({$size:t})=>{const l=t==="large"?"24px":"16px";return r`
      width: ${l};
      height: ${l};
    `}}
  
  svg {
    width: 100%;
    height: 100%;
  }
`,a=A.forwardRef(({label:t,helperText:l,helperTextState:s="default",type:I="text",size:i="default",required:k=!1,disabled:T=!1,readOnly:W=!1,error:Fe=!1,showLabel:Se=!0,showFieldImportance:Ee=!1,fieldImportanceVariant:De="asterisk",showInlineText:Ae=!0,leadingIcon:j,trailingIcon:z,placeholder:L,value:C,defaultValue:ke,onChange:We,onFocus:F,onBlur:S,fullWidth:je=!1,name:ze,id:Le,className:Ce,"aria-label":Re,"aria-describedby":qe,...Be},He)=>{const Pe=A.useId(),n=Le||Pe,$e=`${n}-helper-text`,R=`${n}-label`,[Me,q]=A.useState(!1),E=l,B=Fe,Ue=[E?$e:null,qe].filter(Boolean).join(" ")||void 0,Ve=D=>{q(!0),F==null||F(D)},Ne=D=>{q(!1),S==null||S(D)},Ge=s,Oe=i==="large"?"large":"default";return e.jsxs(Ke,{$fullWidth:je,className:Ce,children:[Se&&t&&e.jsxs(Je,{children:[e.jsx(Xe,{htmlFor:n,id:R,$size:i,$disabled:T,children:t}),Ee&&e.jsx(Ye,{variant:De})]}),e.jsxs(Ze,{$size:i,$error:B,$disabled:T,$readOnly:W,$isFocused:Me,$filled:!!C,children:[j&&e.jsx(H,{$size:i,children:j}),e.jsx(et,{ref:He,id:n,type:I,name:ze,placeholder:L,value:C,defaultValue:ke,onChange:We,onFocus:Ve,onBlur:Ne,disabled:T,readOnly:W,required:k,"aria-label":Re||(t?void 0:L),"aria-labelledby":t?R:void 0,"aria-describedby":Ue,"aria-invalid":B,"aria-required":k,$size:i,...Be}),z&&e.jsx(H,{$size:i,children:z})]}),Ae&&E&&e.jsx(_e,{text:E,state:Ge,size:Oe,showIcon:!0})]})});a.displayName="InputField";a.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:"Input field label"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the input"},helperTextState:{required:!1,tsType:{name:"union",raw:"'default' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`State of the helper text (controls icon and color)
@default 'default'
Options: 'default' | 'info' | 'warning' | 'error'`,defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:`| 'text'
| 'password'
| 'number'
| 'email'
| 'search'
| 'tel'
| 'url'
| 'date'
| 'datetime-local'
| 'time'`,elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'email'"},{name:"literal",value:"'search'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'url'"},{name:"literal",value:"'date'"},{name:"literal",value:"'datetime-local'"},{name:"literal",value:"'time'"}]},description:`Input type
@default 'text'`,defaultValue:{value:"'text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xsmall' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Input size
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the field is disabled",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the field is read-only (non-editable)",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Whether the field has an error",defaultValue:{value:"false",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show the label
@default true`,defaultValue:{value:"true",computed:!1}},showFieldImportance:{required:!1,tsType:{name:"boolean"},description:`Whether to show field importance (Required indicator)
@default false`,defaultValue:{value:"false",computed:!1}},fieldImportanceVariant:{required:!1,tsType:{name:"union",raw:"'mandatory' | 'optional' | 'asterisk'",elements:[{name:"literal",value:"'mandatory'"},{name:"literal",value:"'optional'"},{name:"literal",value:"'asterisk'"}]},description:`Field importance variant
@default 'mandatory'`,defaultValue:{value:"'asterisk'",computed:!1}},showInlineText:{required:!1,tsType:{name:"boolean"},description:`Whether to show inline helping text
@default true`,defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the start of the input"},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the end of the input"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},value:{required:!1,tsType:{name:"string"},description:"Input value (for controlled component)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value (for uncontrolled component)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Full width input
@default false`,defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Input name attribute"},id:{required:!1,tsType:{name:"string"},description:"Input id attribute"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by for accessibility"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}},composes:["Omit"]};const ot={title:"Components/InputField",component:a,parameters:{layout:"centered",docs:{description:{component:`
# Input Field Component

A fully accessible input field component designed for the Lean IDS design system, supporting both Carelon and Elevance brand themes.

## About

The Input Field is a fundamental form component that allows users to enter and edit text-based information. It provides a consistent, accessible interface for data collection across all applications with **6 distinct states** to handle every user interaction scenario.

## Purpose

- **Data Collection**: Enable users to input various types of information (text, email, password, numbers, dates, etc.)
- **State Management**: Provide clear visual feedback through 6 states (Active, Focused, Error, Disabled, Filled, Non-editable)
- **Accessibility**: Ensure WCAG 2.1 AA compliance with proper ARIA labels and keyboard navigation
- **Brand Consistency**: Maintain visual consistency across Carelon and Elevance themes
- **User Guidance**: Help users understand field requirements and validation status

## 6 Input States

1. **Active** - Default empty state, awaiting user input
2. **Focused** - User is actively typing (primary border color)
3. **Error** - Validation failed (red border and error message)
4. **Disabled** - Field cannot be edited (grayed out)
5. **Filled** - Contains user-entered value (white background)
6. **Non-editable** - System/locked data (primary-50 background, read-only)

> 💡 **See the "All States" story below for detailed documentation on when and how to use each state.**

## Component Architecture

InputField uses the **HelpingText** component internally to display helper messages, errors, and warnings. HelpingText is a standalone, reusable component that can be used independently.

### Component Relationship:
\`\`\`
InputField
├── Label
├── FieldImportance (asterisk)
├── InputWrapper
│   ├── LeadingIcon (optional)
│   ├── Input
│   └── TrailingIcon (optional)
└── HelpingText (standalone component)
    ├── Icon (based on state)
    └── Text
\`\`\`

## Usage

\`\`\`tsx
import { InputField } from '@lean-ids/components';

// Default helping text (gray)
<InputField
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  helperText="We'll never share your email"
  helperTextState="default"  // Optional, 'default' is the default value
/>

// Info helping text (blue icon)
<InputField
  label="Password"
  type="password"
  helperText="Password must be at least 8 characters"
  helperTextState="info"
/>

// Warning helping text (yellow/orange icon)
<InputField
  label="Username"
  helperText="This field will be locked after submission"
  helperTextState="warning"
/>

// Error helping text (red icon)
<InputField
  label="Email"
  helperText="Invalid email format"
  helperTextState="error"
/>

// You can also use HelpingText as a standalone component
import { HelpingText } from '@lean-ids/components';

<HelpingText 
  text="This is a standalone helping message"
  state="info"
  size="default"
  showIcon={true}
/>
\`\`\`

## When to Use

✅ **Use Input Field when:**
- Collecting single-line text input from users
- Users need to enter email addresses, passwords, or search queries
- You need to validate user input and show error/success states
- Building forms that require accessible, keyboard-navigable inputs
- You want consistent styling across your application

## When NOT to Use

❌ **Don't use Input Field when:**
- You need multi-line text input (use TextArea instead)
- Users need to select from predefined options (use Select/Dropdown instead)
- You need binary choices (use Checkbox or Radio buttons instead)
- Collecting dates with a calendar picker (use DatePicker instead)
- The input is read-only display text (use Text component instead)

## Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets all accessibility standards
- **Keyboard Navigation**: Full keyboard support (Tab, Shift+Tab, Enter, Escape)
- **Screen Reader Support**: Proper ARIA labels and announcements
- **Focus Management**: Clear focus indicators and logical tab order
- **Error Announcements**: Errors are announced to screen readers via role="alert"
- **Label Association**: Labels properly associated with inputs for assistive technology
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed above the input field",table:{type:{summary:"string"},category:"Content"}},placeholder:{control:"text",description:"Placeholder text shown when input is empty",table:{type:{summary:"string"},category:"Content"}},helperText:{control:"text",description:"Helper text displayed below the input",table:{type:{summary:"string"},category:"Content"}},helperTextState:{control:"select",options:["default","info","warning","error"],description:"State of the helper text (controls icon and color)",table:{type:{summary:"'default' | 'info' | 'warning' | 'error'"},defaultValue:{summary:"'default'"},category:"Content"}},type:{control:"select",options:["text","password","number","email","search","tel","url","date","datetime-local","time"],description:"Input type attribute",table:{type:{summary:"InputType"},defaultValue:{summary:"text"},category:"Behavior"}},size:{control:"radio",options:["small","default","large"],description:"Input field size",table:{type:{summary:"small | default | large"},defaultValue:{summary:"default"},category:"Appearance"}},showLabel:{control:"boolean",description:"Whether to show the label",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},showFieldImportance:{control:"boolean",description:"Whether to show field importance (Required indicator)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}},showInlineText:{control:"boolean",description:"Whether to show inline helping text",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},fieldImportanceVariant:{control:"radio",options:["mandatory","optional","asterisk"],description:"Field importance variant",table:{type:{summary:"mandatory | optional | asterisk"},defaultValue:{summary:"mandatory"},category:"Appearance"}},required:{control:"boolean",description:"Whether the field is required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Validation"}},disabled:{control:"boolean",description:"Whether the field is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},error:{control:"boolean",description:"Whether the field has an error",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},fullWidth:{control:"boolean",description:"Whether the input takes full width of container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Layout"}},leadingIcon:{control:!1,description:"Icon element to display at the start of the input",table:{type:{summary:"React.ReactNode"},category:"Content"}},trailingIcon:{control:!1,description:"Icon element to display at the end of the input",table:{type:{summary:"React.ReactNode"},category:"Content"}}}},d={args:{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",helperTextState:"default",type:"text",size:"default",required:!1,disabled:!1,error:!1,fullWidth:!1,showLabel:!0,showFieldImportance:!1,showInlineText:!0}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Small Input",placeholder:"Small size",size:"small"}),e.jsx(a,{label:"Default Input",placeholder:"Default size",size:"default"}),e.jsx(a,{label:"Large Input",placeholder:"Large size",size:"large"})]}),parameters:{docs:{description:{story:"Input fields are available in three sizes: small (32px), medium (40px), and large (48px)."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Default State",placeholder:"Enter text"}),e.jsx(a,{label:"Disabled State",placeholder:"Disabled input",disabled:!0,value:"Cannot edit this"}),e.jsx(a,{label:"Error State",placeholder:"Enter text",helperText:"Inline error text",helperTextState:"error"}),e.jsx(a,{label:"Active/Focused State",placeholder:"Click to focus",helperText:"This shows focus styling when clicked"})]}),parameters:{docs:{description:{story:"Input fields support multiple states: default, hover (automatic), focused (automatic), disabled, error, and success."}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Text Input",type:"text",placeholder:"Enter text"}),e.jsx(a,{label:"Email Input",type:"email",placeholder:"email@example.com"}),e.jsx(a,{label:"Password Input",type:"password",placeholder:"Enter password"}),e.jsx(a,{label:"Number Input",type:"number",placeholder:"Enter number"}),e.jsx(a,{label:"Search Input",type:"search",placeholder:"Search..."}),e.jsx(a,{label:"Date Input",type:"date"})]}),parameters:{docs:{description:{story:"Input fields support various HTML5 input types including text, email, password, number, search, date, and more."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Search",type:"search",placeholder:"Search...",leadingIcon:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})}),e.jsx(a,{label:"Email",type:"email",placeholder:"email@example.com",trailingIcon:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[e.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),e.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]})})]}),parameters:{docs:{description:{story:"Input fields can include leading or trailing icons to provide visual context."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Full Name",placeholder:"John Doe",required:!0,showFieldImportance:!0,fieldImportanceVariant:"mandatory",helperText:"This field is required"}),e.jsx(a,{label:"Email Address",type:"email",placeholder:"email@example.com",required:!0,showFieldImportance:!0,fieldImportanceVariant:"asterisk"}),e.jsx(a,{label:"Middle Name",placeholder:"Optional",showFieldImportance:!0,fieldImportanceVariant:"optional",helperText:"This field is optional"})]}),parameters:{docs:{description:{story:"Field importance can be shown in three variants: (Required), * asterisk, or (Optional)."}}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Default State",placeholder:"Enter text",helperText:"Default helping message with icon"}),e.jsx(a,{label:"Error State",placeholder:"Enter text",helperText:"This field has an error",helperTextState:"error"}),e.jsx(a,{label:"Large Size with Helper",placeholder:"Enter text",size:"large",helperText:"Large size uses 14px font for helper text"})]}),parameters:{docs:{description:{story:"Helper text appears below the input with icons and supports different states (default, error) and sizes."}}}},x={render:()=>e.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:e.jsx(a,{label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0,helperText:"Use fullWidth prop for responsive layouts"})}),parameters:{docs:{description:{story:"Use the fullWidth prop to make the input field responsive and fill its container."}}}},y={render:()=>e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px"},children:[e.jsx(a,{label:"First Name",placeholder:"Enter your first name",required:!0}),e.jsx(a,{label:"Last Name",placeholder:"Enter your last name",required:!0}),e.jsx(a,{label:"Email",type:"email",placeholder:"email@example.com",required:!0,helperText:"We'll never share your email"}),e.jsx(a,{label:"Phone Number",type:"tel",placeholder:"(555) 123-4567"}),e.jsx(a,{label:"Password",type:"password",placeholder:"Enter password",required:!0,helperText:"Must be at least 8 characters"})]}),parameters:{docs:{description:{story:"Example of a complete form using multiple input fields with various types and configurations."}}}},g={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px",width:"800px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{color:"#10B981",marginBottom:"16px"},children:"✓ Do"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Email address",type:"email",placeholder:"email@example.com",helperText:"Use sentence case for labels"}),e.jsx(a,{label:"Search products",type:"search",placeholder:"Search...",helperText:"Provide clear, concise labels"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{color:"#EF4444",marginBottom:"16px"},children:"✗ Don't"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"EMAIL ADDRESS",type:"email",placeholder:"EMAIL@EXAMPLE.COM",helperText:"Don't use all caps"}),e.jsx(a,{label:"Enter Your Complete Email Address Here",type:"email",placeholder:"Please type your email",helperText:"Don't use overly verbose labels"})]})]})]}),parameters:{docs:{description:{story:`
### Do's
- Use sentence case for labels (not Title Case or ALL CAPS)
- Provide clear, concise labels and placeholders
- Show helper text for additional context
- Use appropriate input types for better mobile experience
- Indicate required fields clearly
- Provide immediate validation feedback

### Don'ts
- Don't use vague or ambiguous labels
- Don't override core design tokens
- Don't ignore accessibility requirements
- Don't use placeholder text as the only label
- Don't make inputs too narrow for expected content
- Don't use input fields for read-only data display
        `}}}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"1. Active (Default)"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",showFieldImportance:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"2. Focused"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",showFieldImportance:!0,autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"3. Error"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",helperText:"Error helping message",helperTextState:"error",showFieldImportance:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"4. Disabled"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",disabled:!0,helperText:"Default helping message",showFieldImportance:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"5. Filled"}),e.jsx(a,{label:"Label",value:"Filled value",helperText:"Default helping message",showFieldImportance:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"6. Non-editable (Read-only)"}),e.jsx(a,{label:"Label",value:"System-filled value",readOnly:!0,helperText:"Default helping message",showFieldImportance:!0})]})]}),parameters:{docs:{description:{story:`
## All 6 Input Field States

### 1. **Active (Default State)**
**Purpose:** Initial state when the input is empty and awaiting user interaction.

**Visual Characteristics:**
- Background: White (neutral-50)
- Border: Gray (neutral-400)
- Helping text: Gray with default icon
- Label: Black (neutral-900)

**When to Use:**
- Default state for all new, empty input fields
- User hasn't interacted with the field yet
- No validation has occurred

---

### 2. **Focused State**
**Purpose:** Indicates the input is currently selected and ready for user input.

**Visual Characteristics:**
- Background: White (neutral-50)
- Border: **Primary-500** (brand blue) - Input fields use primary color for focus
- Helping text: Remains gray (default state)
- Label: Black (neutral-900)

**When to Use:**
- User clicks or tabs into the input field
- Input has keyboard focus
- User is actively typing

**Behavior:**
- Border changes to primary color to show focus
- Helping text does NOT change color (stays gray)
- Only visual change is the border color

**Accessibility:**
- Input fields use primary color for focus (different from other interactive elements)
- Other components (buttons, links, icons, breadcrumbs) use turquoise-400 for keyboard navigation
- Meets WCAG 2.1 AA contrast requirements

---

### 3. **Error State**
**Purpose:** Indicates validation failure or incorrect input.

**Visual Characteristics:**
- Background: White (neutral-50), or light red (error-50) when focused
- Border: Red (error-500)
- Helping text: Red with error icon
- Label: Black (neutral-900)

**When to Use:**
- Form validation fails (e.g., invalid email format)
- Required field is empty on submit
- Input doesn't match expected pattern
- Server-side validation error

**Best Practices:**
- Always provide clear, actionable error messages
- Show errors after user interaction (on blur or submit)
- Use live validation for complex fields (email, password)

---

### 4. **Disabled State**
**Purpose:** Indicates the field cannot be interacted with.

**Visual Characteristics:**
- Background: Light gray (neutral-100)
- Border: Gray (neutral-300)
- Helping text: Gray (muted)
- Label: Gray (neutral-500)
- Cursor: not-allowed
- Opacity: 0.6

**When to Use:**
- Field is not applicable in current context
- User lacks permission to edit
- Conditional fields that depend on other selections
- During form submission (temporarily)

**Accessibility:**
- Properly announced to screen readers as disabled
- Not included in tab order

---

### 5. **Filled State**
**Purpose:** Shows the input has a user-entered value.

**Visual Characteristics:**
- Background: White (neutral-50) - same as active
- Border: Gray (neutral-400)
- Text: Medium weight (500) for better readability
- Helping text: Gray with default icon

**When to Use:**
- User has entered a value
- Form is pre-populated with user data
- Editing existing information

**Typography:**
- Large size: Uses primitive/body/medium (16px, weight 500)
- Small/Default size: Uses primitive/paragraph/medium (14px, weight 500)
- Placeholder: Regular weight (400)

---

### 6. **Non-editable (Read-only) State**
**Purpose:** Displays system-filled or locked data that users cannot modify.

**Visual Characteristics:**
- Background: Light blue (primary-50) - distinguishes from editable fields
- Border: Gray (neutral-300)
- Text: Medium weight (500)
- Helping text: Gray with default icon
- Cursor: default (not text cursor)
- Opacity: 0.8

**When to Use:**
- System-generated values (ID, timestamps, calculated fields)
- Data from external sources that shouldn't be modified
- Reference information in forms
- Locked fields after certain workflow stages

**Accessibility:**
- Announced as read-only to screen readers
- Still included in tab order for screen reader users
- Value can be selected and copied

---

## State Comparison Table

| State | Background | Border | Text Weight | Helping Text Color | Editable | Use Case |
|-------|------------|--------|-------------|-------------------|----------|----------|
| Active | White | Gray | Medium (500) | Gray | ✅ Yes | Empty field, awaiting input |
| Focused | White | Primary | Medium (500) | Gray | ✅ Yes | User is typing |
| Error | White/Red-50 | Red | Medium (500) | Red | ✅ Yes | Validation failed |
| Disabled | Gray-100 | Gray | Medium (500) | Gray | ❌ No | Not applicable/No permission |
| Filled | White | Gray | Medium (500) | Gray | ✅ Yes | Has user-entered value |
| Non-editable | Primary-50 | Gray | Medium (500) | Gray | ❌ No | System/locked data |

---

## Implementation Guidelines

### For Developers:
\`\`\`tsx
// Active/Default
<InputField label="Email" placeholder="Enter email" />

// Focused (automatic on click/tab)
<InputField label="Email" placeholder="Enter email" autoFocus />

// Error
<InputField 
  label="Email" 
  helperText="Invalid email format"
  helperTextState="error"
/>

// Disabled
<InputField label="Email" disabled />

// Filled
<InputField label="Email" value="user@example.com" />

// Non-editable
<InputField 
  label="User ID" 
  value="USR-12345" 
  readOnly 
  helperText="System-generated ID"
/>
\`\`\`

### For Designers:
- Use **Active** for all new form fields
- Show **Focused** state in prototypes for interactive demos
- Always design **Error** states with clear messages
- Use **Disabled** sparingly - hide fields if possible
- **Filled** state should look clean and readable
- **Non-editable** fields should be visually distinct (primary-50 background)
        `}}}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Extra Small (28px)",placeholder:"xsmall size",size:"xsmall",helperText:"Height: 28px"}),e.jsx(a,{label:"Small (32px)",placeholder:"small size",size:"small",helperText:"Height: 32px"}),e.jsx(a,{label:"Default (40px)",placeholder:"default size",size:"default",helperText:"Height: 40px"}),e.jsx(a,{label:"Large (50px)",placeholder:"large size",size:"large",helperText:"Height: 50px"})]}),parameters:{docs:{description:{story:"Input fields are available in four sizes matching Figma design: xsmall (28px), small (32px), default (40px), and large (50px)."}}}},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Accessible Input",placeholder:"Try tabbing to this field",helperText:"Press Tab to navigate, Enter to submit"}),e.jsx(a,{label:"Email with ARIA",type:"email",placeholder:"email@example.com","aria-label":"Email address input",helperText:"Screen readers announce this properly"}),e.jsx(a,{label:"Error with Announcement",placeholder:"Enter text",helperText:"This error is announced to screen readers",helperTextState:"error"})]}),parameters:{docs:{description:{story:`
### Keyboard Navigation
- **Tab**: Move focus to the input field
- **Shift + Tab**: Move focus to previous element
- **Enter**: Submit form (if in a form)
- **Escape**: Clear input (browser default)

### Screen Reader Support
- Labels are properly associated with inputs
- Helper text is announced via aria-describedby
- Error messages use role="alert" for immediate announcement
- Required fields are announced as required
- Disabled state is properly communicated

### Focus Management
- Clear focus indicators (2px outline with offset)
- Focus ring uses theme color for brand consistency
- Logical tab order maintained
- Focus visible on keyboard navigation only
        `}}}};var P,$,M;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Default helping message',
    helperTextState: 'default',
    type: 'text',
    size: 'default',
    required: false,
    disabled: false,
    error: false,
    fullWidth: false,
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true
  }
}`,...(M=($=d.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var U,V,N;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Small Input" placeholder="Small size" size="small" />
      <InputField label="Default Input" placeholder="Default size" size="default" />
      <InputField label="Large Input" placeholder="Large size" size="large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input fields are available in three sizes: small (32px), medium (40px), and large (48px).'
      }
    }
  }
}`,...(N=(V=p.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var G,O,Y;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Default State" placeholder="Enter text" />
      <InputField label="Disabled State" placeholder="Disabled input" disabled value="Cannot edit this" />
      <InputField label="Error State" placeholder="Enter text" helperText="Inline error text" helperTextState="error" />
      <InputField label="Active/Focused State" placeholder="Click to focus" helperText="This shows focus styling when clicked" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input fields support multiple states: default, hover (automatic), focused (automatic), disabled, error, and success.'
      }
    }
  }
}`,...(Y=(O=c.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var _,K,J;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Text Input" type="text" placeholder="Enter text" />
      <InputField label="Email Input" type="email" placeholder="email@example.com" />
      <InputField label="Password Input" type="password" placeholder="Enter password" />
      <InputField label="Number Input" type="number" placeholder="Enter number" />
      <InputField label="Search Input" type="search" placeholder="Search..." />
      <InputField label="Date Input" type="date" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input fields support various HTML5 input types including text, email, password, number, search, date, and more.'
      }
    }
  }
}`,...(J=(K=u.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var X,Q,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Search" type="search" placeholder="Search..." leadingIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>} />
      <InputField label="Email" type="email" placeholder="email@example.com" trailingIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input fields can include leading or trailing icons to provide visual context.'
      }
    }
  }
}`,...(Z=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ae;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Full Name" placeholder="John Doe" required showFieldImportance fieldImportanceVariant="mandatory" helperText="This field is required" />
      <InputField label="Email Address" type="email" placeholder="email@example.com" required showFieldImportance fieldImportanceVariant="asterisk" />
      <InputField label="Middle Name" placeholder="Optional" showFieldImportance fieldImportanceVariant="optional" helperText="This field is optional" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Field importance can be shown in three variants: (Required), * asterisk, or (Optional).'
      }
    }
  }
}`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var le,re,ie;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Default State" placeholder="Enter text" helperText="Default helping message with icon" />
      <InputField label="Error State" placeholder="Enter text" helperText="This field has an error" helperTextState="error" />
      <InputField label="Large Size with Helper" placeholder="Enter text" size="large" helperText="Large size uses 14px font for helper text" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Helper text appears below the input with icons and supports different states (default, error) and sizes.'
      }
    }
  }
}`,...(ie=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,oe,ne;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <InputField label="Full Width Input" placeholder="This input takes full width" fullWidth helperText="Use fullWidth prop for responsive layouts" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use the fullWidth prop to make the input field responsive and fill its container.'
      }
    }
  }
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var de,pe,ce;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <form style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '400px'
  }}>
      <InputField label="First Name" placeholder="Enter your first name" required />
      <InputField label="Last Name" placeholder="Enter your last name" required />
      <InputField label="Email" type="email" placeholder="email@example.com" required helperText="We'll never share your email" />
      <InputField label="Phone Number" type="tel" placeholder="(555) 123-4567" />
      <InputField label="Password" type="password" placeholder="Enter password" required helperText="Must be at least 8 characters" />
    </form>,
  parameters: {
    docs: {
      description: {
        story: 'Example of a complete form using multiple input fields with various types and configurations.'
      }
    }
  }
}`,...(ce=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ue,me,he;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    width: '800px'
  }}>
      <div>
        <h3 style={{
        color: '#10B981',
        marginBottom: '16px'
      }}>✓ Do</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <InputField label="Email address" type="email" placeholder="email@example.com" helperText="Use sentence case for labels" />
          <InputField label="Search products" type="search" placeholder="Search..." helperText="Provide clear, concise labels" />
        </div>
      </div>
      <div>
        <h3 style={{
        color: '#EF4444',
        marginBottom: '16px'
      }}>✗ Don't</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <InputField label="EMAIL ADDRESS" type="email" placeholder="EMAIL@EXAMPLE.COM" helperText="Don't use all caps" />
          <InputField label="Enter Your Complete Email Address Here" type="email" placeholder="Please type your email" helperText="Don't use overly verbose labels" />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`
### Do's
- Use sentence case for labels (not Title Case or ALL CAPS)
- Provide clear, concise labels and placeholders
- Show helper text for additional context
- Use appropriate input types for better mobile experience
- Indicate required fields clearly
- Provide immediate validation feedback

### Don'ts
- Don't use vague or ambiguous labels
- Don't override core design tokens
- Don't ignore accessibility requirements
- Don't use placeholder text as the only label
- Don't make inputs too narrow for expected content
- Don't use input fields for read-only data display
        \`
      }
    }
  }
}`,...(he=(me=g.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var fe,xe,ye;b.parameters={...b.parameters,docs:{...(fe=b.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>1. Active (Default)</h3>
        <InputField label="Label" placeholder="Placeholder" helperText="Default helping message" showFieldImportance />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>2. Focused</h3>
        <InputField label="Label" placeholder="Placeholder" helperText="Default helping message" showFieldImportance autoFocus />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>3. Error</h3>
        <InputField label="Label" placeholder="Placeholder" helperText="Error helping message" helperTextState="error" showFieldImportance />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>4. Disabled</h3>
        <InputField label="Label" placeholder="Placeholder" disabled helperText="Default helping message" showFieldImportance />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>5. Filled</h3>
        <InputField label="Label" value="Filled value" helperText="Default helping message" showFieldImportance />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>6. Non-editable (Read-only)</h3>
        <InputField label="Label" value="System-filled value" readOnly helperText="Default helping message" showFieldImportance />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`
## All 6 Input Field States

### 1. **Active (Default State)**
**Purpose:** Initial state when the input is empty and awaiting user interaction.

**Visual Characteristics:**
- Background: White (neutral-50)
- Border: Gray (neutral-400)
- Helping text: Gray with default icon
- Label: Black (neutral-900)

**When to Use:**
- Default state for all new, empty input fields
- User hasn't interacted with the field yet
- No validation has occurred

---

### 2. **Focused State**
**Purpose:** Indicates the input is currently selected and ready for user input.

**Visual Characteristics:**
- Background: White (neutral-50)
- Border: **Primary-500** (brand blue) - Input fields use primary color for focus
- Helping text: Remains gray (default state)
- Label: Black (neutral-900)

**When to Use:**
- User clicks or tabs into the input field
- Input has keyboard focus
- User is actively typing

**Behavior:**
- Border changes to primary color to show focus
- Helping text does NOT change color (stays gray)
- Only visual change is the border color

**Accessibility:**
- Input fields use primary color for focus (different from other interactive elements)
- Other components (buttons, links, icons, breadcrumbs) use turquoise-400 for keyboard navigation
- Meets WCAG 2.1 AA contrast requirements

---

### 3. **Error State**
**Purpose:** Indicates validation failure or incorrect input.

**Visual Characteristics:**
- Background: White (neutral-50), or light red (error-50) when focused
- Border: Red (error-500)
- Helping text: Red with error icon
- Label: Black (neutral-900)

**When to Use:**
- Form validation fails (e.g., invalid email format)
- Required field is empty on submit
- Input doesn't match expected pattern
- Server-side validation error

**Best Practices:**
- Always provide clear, actionable error messages
- Show errors after user interaction (on blur or submit)
- Use live validation for complex fields (email, password)

---

### 4. **Disabled State**
**Purpose:** Indicates the field cannot be interacted with.

**Visual Characteristics:**
- Background: Light gray (neutral-100)
- Border: Gray (neutral-300)
- Helping text: Gray (muted)
- Label: Gray (neutral-500)
- Cursor: not-allowed
- Opacity: 0.6

**When to Use:**
- Field is not applicable in current context
- User lacks permission to edit
- Conditional fields that depend on other selections
- During form submission (temporarily)

**Accessibility:**
- Properly announced to screen readers as disabled
- Not included in tab order

---

### 5. **Filled State**
**Purpose:** Shows the input has a user-entered value.

**Visual Characteristics:**
- Background: White (neutral-50) - same as active
- Border: Gray (neutral-400)
- Text: Medium weight (500) for better readability
- Helping text: Gray with default icon

**When to Use:**
- User has entered a value
- Form is pre-populated with user data
- Editing existing information

**Typography:**
- Large size: Uses primitive/body/medium (16px, weight 500)
- Small/Default size: Uses primitive/paragraph/medium (14px, weight 500)
- Placeholder: Regular weight (400)

---

### 6. **Non-editable (Read-only) State**
**Purpose:** Displays system-filled or locked data that users cannot modify.

**Visual Characteristics:**
- Background: Light blue (primary-50) - distinguishes from editable fields
- Border: Gray (neutral-300)
- Text: Medium weight (500)
- Helping text: Gray with default icon
- Cursor: default (not text cursor)
- Opacity: 0.8

**When to Use:**
- System-generated values (ID, timestamps, calculated fields)
- Data from external sources that shouldn't be modified
- Reference information in forms
- Locked fields after certain workflow stages

**Accessibility:**
- Announced as read-only to screen readers
- Still included in tab order for screen reader users
- Value can be selected and copied

---

## State Comparison Table

| State | Background | Border | Text Weight | Helping Text Color | Editable | Use Case |
|-------|------------|--------|-------------|-------------------|----------|----------|
| Active | White | Gray | Medium (500) | Gray | ✅ Yes | Empty field, awaiting input |
| Focused | White | Primary | Medium (500) | Gray | ✅ Yes | User is typing |
| Error | White/Red-50 | Red | Medium (500) | Red | ✅ Yes | Validation failed |
| Disabled | Gray-100 | Gray | Medium (500) | Gray | ❌ No | Not applicable/No permission |
| Filled | White | Gray | Medium (500) | Gray | ✅ Yes | Has user-entered value |
| Non-editable | Primary-50 | Gray | Medium (500) | Gray | ❌ No | System/locked data |

---

## Implementation Guidelines

### For Developers:
\\\`\\\`\\\`tsx
// Active/Default
<InputField label="Email" placeholder="Enter email" />

// Focused (automatic on click/tab)
<InputField label="Email" placeholder="Enter email" autoFocus />

// Error
<InputField 
  label="Email" 
  helperText="Invalid email format"
  helperTextState="error"
/>

// Disabled
<InputField label="Email" disabled />

// Filled
<InputField label="Email" value="user@example.com" />

// Non-editable
<InputField 
  label="User ID" 
  value="USR-12345" 
  readOnly 
  helperText="System-generated ID"
/>
\\\`\\\`\\\`

### For Designers:
- Use **Active** for all new form fields
- Show **Focused** state in prototypes for interactive demos
- Always design **Error** states with clear messages
- Use **Disabled** sparingly - hide fields if possible
- **Filled** state should look clean and readable
- **Non-editable** fields should be visually distinct (primary-50 background)
        \`
      }
    }
  }
}`,...(ye=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var ge,be,ve;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Extra Small (28px)" placeholder="xsmall size" size="xsmall" helperText="Height: 28px" />
      <InputField label="Small (32px)" placeholder="small size" size="small" helperText="Height: 32px" />
      <InputField label="Default (40px)" placeholder="default size" size="default" helperText="Height: 40px" />
      <InputField label="Large (50px)" placeholder="large size" size="large" helperText="Height: 50px" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input fields are available in four sizes matching Figma design: xsmall (28px), small (32px), default (40px), and large (50px).'
      }
    }
  }
}`,...(ve=(be=v.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var we,Ie,Te;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Accessible Input" placeholder="Try tabbing to this field" helperText="Press Tab to navigate, Enter to submit" />
      <InputField label="Email with ARIA" type="email" placeholder="email@example.com" aria-label="Email address input" helperText="Screen readers announce this properly" />
      <InputField label="Error with Announcement" placeholder="Enter text" helperText="This error is announced to screen readers" helperTextState="error" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`
### Keyboard Navigation
- **Tab**: Move focus to the input field
- **Shift + Tab**: Move focus to previous element
- **Enter**: Submit form (if in a form)
- **Escape**: Clear input (browser default)

### Screen Reader Support
- Labels are properly associated with inputs
- Helper text is announced via aria-describedby
- Error messages use role="alert" for immediate announcement
- Required fields are announced as required
- Disabled state is properly communicated

### Focus Management
- Clear focus indicators (2px outline with offset)
- Focus ring uses theme color for brand consistency
- Logical tab order maintained
- Focus visible on keyboard navigation only
        \`
      }
    }
  }
}`,...(Te=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:Te.source}}};const nt=["Playground","Sizes","States","InputTypes","WithIcons","RequiredFields","HelpingTextStates","FullWidthLayout","FormExample","BestPractices","AllStates","AllSizes","AccessibilityDemo"];export{w as AccessibilityDemo,v as AllSizes,b as AllStates,g as BestPractices,y as FormExample,x as FullWidthLayout,f as HelpingTextStates,u as InputTypes,d as Playground,h as RequiredFields,p as Sizes,c as States,m as WithIcons,nt as __namedExportsOrder,ot as default};
