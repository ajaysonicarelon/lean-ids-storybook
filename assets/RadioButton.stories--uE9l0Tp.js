import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r}from"./index-B0WjJBI_.js";import{c as i}from"./styled-components.browser.esm-BIi91Tbq.js";import"./_commonjsHelpers-CqkleIqs.js";const K=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[3]};
`,Q=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[1]};
`,q=i.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,X=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  cursor: ${({$disabled:a})=>a?"not-allowed":"pointer"};
  position: relative;
  
  ${q}:focus-visible + & {
    box-shadow: 0 0 0 2px ${({theme:a})=>a.colors.semantic.focus.indicator};
  }
  
  ${({$size:a})=>{const t=a==="large"?"24px":"16px";return`
      width: ${t};
      height: ${t};
    `}}
  
  ${({theme:a,$checked:t,$disabled:s})=>s&&t?`
        border: 2px solid ${a.colors.palette.neutral[300]};
      `:s?`
        border: 2px solid ${a.colors.palette.neutral[300]};
      `:t?`
        border: 2px solid ${a.colors.palette.primary[500]};
      `:`
      border: 2px solid ${a.colors.palette.neutral[400]};
    `}
  
  &:hover {
    ${({theme:a,$checked:t,$disabled:s})=>s?"":t?`border-color: ${a.colors.palette.primary[600]};`:`border-color: ${a.colors.palette.neutral[500]};`}
  }
`,Y=i.div`
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  
  ${({$size:a})=>{const t=a==="large"?"10px":"7px";return`
      width: ${t};
      height: ${t};
    `}}
  
  background-color: ${({theme:a,$disabled:t})=>t?a.colors.palette.neutral[300]:a.colors.palette.primary[500]};
`,ee=i.label`
  font-family: ${({theme:a})=>a.fonts.primary};
  font-weight: ${({theme:a})=>a.fontWeights.regular};
  line-height: normal;
  white-space: nowrap;
  cursor: ${({$disabled:a})=>a?"not-allowed":"pointer"};
  user-select: none;
  
  ${({theme:a,$size:t})=>t==="large"?`font-size: ${a.fontSizes[16]};`:`font-size: ${a.fontSizes[14]};`}
  
  color: ${({theme:a,$disabled:t})=>t?a.colors.palette.neutral[400]:a.colors.palette.neutral[900]};
`,ae=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({$size:a})=>{const t=a==="large"?"24px":"16px";return`
      width: ${t};
      height: ${t};
    `}}
  
  color: ${({theme:a,$disabled:t})=>t?a.colors.palette.neutral[400]:a.colors.palette.neutral[600]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,te=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 10.5L4 6.5L4.7 5.8L8 9.1L11.3 5.8L12 6.5L8 10.5Z"})}),o=r.forwardRef(({label:a,size:t="default",checked:s=!1,disabled:l=!1,showTrailingIcon:n=!1,onChange:V,className:_,name:U,value:F,id:G,...H},N)=>{const Z=r.useId(),f=G||Z,b=()=>{if(l)return;const d=document.getElementById(f);d&&d.click()},J=d=>{d.preventDefault(),b()};return e.jsxs(K,{className:_,children:[e.jsxs(Q,{children:[e.jsx(q,{ref:N,id:f,checked:s,disabled:l,onChange:V,name:U,value:F,"aria-checked":s,$size:t,...H}),e.jsx(X,{$size:t,$checked:s,$disabled:l,onClick:b,role:"presentation",children:s&&e.jsx(Y,{$size:t,$disabled:l})}),a&&e.jsx(ee,{htmlFor:f,$size:t,$disabled:l,onClick:J,children:a})]}),n&&e.jsx(ae,{$size:t,$disabled:l,children:e.jsx(te,{})})]})});o.displayName="RadioButton";o.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!1,tsType:{name:"string"},description:"Radio button label text"},size:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Size variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the radio button is checked",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the radio button is disabled",defaultValue:{value:"false",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show trailing icon (expand_more icon)
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},name:{required:!1,tsType:{name:"string"},description:"Input name attribute (required for radio groups)"},value:{required:!1,tsType:{name:"string"},description:"Input value attribute"}},composes:["Omit"]};const ie={title:"Components/RadioButton",component:o,parameters:{layout:"centered",docs:{description:{component:`
# RadioButton Component

A fully accessible radio button component for the Lean IDS design system.

## Features

- **Two Sizes**: Default (16px) and Large (24px)
- **Multiple States**: Unchecked, Checked, Disabled
- **Optional Label**: Display text next to radio button
- **Trailing Icon**: Optional info icon
- **Fully Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes
- **Groups**: Works seamlessly in radio button groups

## Usage

\`\`\`tsx
import { RadioButton } from '@lean-ids/components';

<RadioButton
  label="Option 1"
  name="options"
  checked={selected === 'option1'}
  onChange={() => setSelected('option1')}
/>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed next to the radio button",table:{type:{summary:"string"},category:"Content"}},size:{control:"radio",options:["default","large"],description:"Radio button size",table:{type:{summary:"default | large"},defaultValue:{summary:"default"},category:"Appearance"}},checked:{control:"boolean",description:"Whether the radio button is checked",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},disabled:{control:"boolean",description:"Whether the radio button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},showTrailingIcon:{control:"boolean",description:"Whether to show trailing expand icon",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}},name:{control:"text",description:"Name attribute for radio group",table:{type:{summary:"string"},category:"Behavior"}}}},c={args:{label:"Default Radio message",size:"default",checked:!1,disabled:!1,showTrailingIcon:!1}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(o,{label:"Default size (16px)",size:"default",name:"size-demo"}),e.jsx(o,{label:"Large size (24px)",size:"large",name:"size-demo"})]}),parameters:{docs:{description:{story:"Radio buttons are available in two sizes: default (16px) and large (24px)."}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(o,{label:"Unselected",checked:!1,name:"state-demo-1"}),e.jsx(o,{label:"Selected",checked:!0,name:"state-demo-2"}),e.jsx(o,{label:"Disabled Unselected",checked:!1,disabled:!0,name:"state-demo-3"}),e.jsx(o,{label:"Disabled Selected",checked:!0,disabled:!0,name:"state-demo-4"})]}),parameters:{docs:{description:{story:"Radio buttons support multiple states: unselected, selected, disabled unselected, and disabled selected."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(o,{label:"Default with icon",showTrailingIcon:!0,name:"icon-demo-1"}),e.jsx(o,{label:"Large with icon",size:"large",showTrailingIcon:!0,name:"icon-demo-2"}),e.jsx(o,{label:"Selected with icon",checked:!0,showTrailingIcon:!0,name:"icon-demo-3"}),e.jsx(o,{label:"Disabled with icon",disabled:!0,showTrailingIcon:!0,name:"icon-demo-4"})]}),parameters:{docs:{description:{story:"Radio buttons can display an optional trailing expand_more icon."}}}},g={render:()=>{const[a,t]=r.useState("option1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Select an option:"}),e.jsx(o,{label:"Option 1",name:"radio-group",value:"option1",checked:a==="option1",onChange:s=>t(s.target.value)}),e.jsx(o,{label:"Option 2",name:"radio-group",value:"option2",checked:a==="option2",onChange:s=>t(s.target.value)}),e.jsx(o,{label:"Option 3",name:"radio-group",value:"option3",checked:a==="option3",onChange:s=>t(s.target.value)}),e.jsxs("p",{style:{fontSize:"14px",color:"#666",marginTop:"8px"},children:["Selected: ",a]})]})},parameters:{docs:{description:{story:"Radio buttons work together in groups where only one option can be selected at a time."}}}},h={render:()=>{const[a,t]=r.useState("credit-card"),[s,l]=r.useState("standard");return e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 0"},children:"Payment Method"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{label:"Credit Card",name:"payment",value:"credit-card",checked:a==="credit-card",onChange:n=>t(n.target.value)}),e.jsx(o,{label:"PayPal",name:"payment",value:"paypal",checked:a==="paypal",onChange:n=>t(n.target.value)}),e.jsx(o,{label:"Bank Transfer",name:"payment",value:"bank-transfer",checked:a==="bank-transfer",onChange:n=>t(n.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 0"},children:"Shipping Speed"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{label:"Standard (5-7 days)",name:"shipping",value:"standard",checked:s==="standard",onChange:n=>l(n.target.value)}),e.jsx(o,{label:"Express (2-3 days)",name:"shipping",value:"express",checked:s==="express",onChange:n=>l(n.target.value)}),e.jsx(o,{label:"Overnight",name:"shipping",value:"overnight",checked:s==="overnight",onChange:n=>l(n.target.value)})]})]})]})},parameters:{docs:{description:{story:"Example of radio buttons used in a form with multiple groups."}}}},x={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px",padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"16px"},children:"Default Size"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{label:"Default Radio message",name:"default-1"}),e.jsx(o,{label:"Default Radio message",checked:!0,name:"default-2"}),e.jsx(o,{label:"Default Radio message",disabled:!0,name:"default-3"}),e.jsx(o,{label:"Default Radio message",checked:!0,disabled:!0,name:"default-4"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"16px"},children:"Large Size"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(o,{label:"Default Radio message",size:"large",name:"large-1"}),e.jsx(o,{label:"Default Radio message",size:"large",checked:!0,name:"large-2"}),e.jsx(o,{label:"Default Radio message",size:"large",disabled:!0,name:"large-3"}),e.jsx(o,{label:"Default Radio message",size:"large",checked:!0,disabled:!0,name:"large-4"})]})]})]}),parameters:{docs:{description:{story:"All radio button variants showing both sizes and all states."}}}};var y,v,R;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Default Radio message',
    size: 'default',
    checked: false,
    disabled: false,
    showTrailingIcon: false
  }
}`,...(R=(v=c.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var S,j,k;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <RadioButton label="Default size (16px)" size="default" name="size-demo" />
      <RadioButton label="Large size (24px)" size="large" name="size-demo" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons are available in two sizes: default (16px) and large (24px).'
      }
    }
  }
}`,...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var w,D,z;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <RadioButton label="Unselected" checked={false} name="state-demo-1" />
      <RadioButton label="Selected" checked={true} name="state-demo-2" />
      <RadioButton label="Disabled Unselected" checked={false} disabled={true} name="state-demo-3" />
      <RadioButton label="Disabled Selected" checked={true} disabled={true} name="state-demo-4" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons support multiple states: unselected, selected, disabled unselected, and disabled selected.'
      }
    }
  }
}`,...(z=(D=u.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var B,C,$;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <RadioButton label="Default with icon" showTrailingIcon name="icon-demo-1" />
      <RadioButton label="Large with icon" size="large" showTrailingIcon name="icon-demo-2" />
      <RadioButton label="Selected with icon" checked showTrailingIcon name="icon-demo-3" />
      <RadioButton label="Disabled with icon" disabled showTrailingIcon name="icon-demo-4" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons can display an optional trailing expand_more icon.'
      }
    }
  }
}`,...($=(C=m.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var T,I,L;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('option1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <h3 style={{
        margin: '0 0 8px 0'
      }}>Select an option:</h3>
        <RadioButton label="Option 1" name="radio-group" value="option1" checked={selected === 'option1'} onChange={e => setSelected(e.target.value)} />
        <RadioButton label="Option 2" name="radio-group" value="option2" checked={selected === 'option2'} onChange={e => setSelected(e.target.value)} />
        <RadioButton label="Option 3" name="radio-group" value="option3" checked={selected === 'option3'} onChange={e => setSelected(e.target.value)} />
        <p style={{
        fontSize: '14px',
        color: '#666',
        marginTop: '8px'
      }}>
          Selected: {selected}
        </p>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons work together in groups where only one option can be selected at a time.'
      }
    }
  }
}`,...(L=(I=g.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var M,E,A;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const [shippingSpeed, setShippingSpeed] = useState('standard');
    return <form style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '400px'
    }}>
        <div>
          <h3 style={{
          margin: '0 0 12px 0'
        }}>Payment Method</h3>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <RadioButton label="Credit Card" name="payment" value="credit-card" checked={paymentMethod === 'credit-card'} onChange={e => setPaymentMethod(e.target.value)} />
            <RadioButton label="PayPal" name="payment" value="paypal" checked={paymentMethod === 'paypal'} onChange={e => setPaymentMethod(e.target.value)} />
            <RadioButton label="Bank Transfer" name="payment" value="bank-transfer" checked={paymentMethod === 'bank-transfer'} onChange={e => setPaymentMethod(e.target.value)} />
          </div>
        </div>
        
        <div>
          <h3 style={{
          margin: '0 0 12px 0'
        }}>Shipping Speed</h3>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <RadioButton label="Standard (5-7 days)" name="shipping" value="standard" checked={shippingSpeed === 'standard'} onChange={e => setShippingSpeed(e.target.value)} />
            <RadioButton label="Express (2-3 days)" name="shipping" value="express" checked={shippingSpeed === 'express'} onChange={e => setShippingSpeed(e.target.value)} />
            <RadioButton label="Overnight" name="shipping" value="overnight" checked={shippingSpeed === 'overnight'} onChange={e => setShippingSpeed(e.target.value)} />
          </div>
        </div>
      </form>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of radio buttons used in a form with multiple groups.'
      }
    }
  }
}`,...(A=(E=h.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var O,P,W;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
    padding: '20px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '16px'
      }}>Default Size</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <RadioButton label="Default Radio message" name="default-1" />
          <RadioButton label="Default Radio message" checked name="default-2" />
          <RadioButton label="Default Radio message" disabled name="default-3" />
          <RadioButton label="Default Radio message" checked disabled name="default-4" />
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '16px'
      }}>Large Size</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <RadioButton label="Default Radio message" size="large" name="large-1" />
          <RadioButton label="Default Radio message" size="large" checked name="large-2" />
          <RadioButton label="Default Radio message" size="large" disabled name="large-3" />
          <RadioButton label="Default Radio message" size="large" checked disabled name="large-4" />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All radio button variants showing both sizes and all states.'
      }
    }
  }
}`,...(W=(P=x.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const re=["Playground","Sizes","States","WithTrailingIcon","RadioGroup","FormExample","AllVariants"];export{x as AllVariants,h as FormExample,c as Playground,g as RadioGroup,p as Sizes,u as States,m as WithTrailingIcon,re as __namedExportsOrder,ie as default};
