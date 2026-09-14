import{j as e}from"./jsx-runtime-DztICxWZ.js";import{fn as l}from"./index-DH-M5T-F.js";import{r as w}from"./index-Bv9Y92EF.js";import{C as t}from"./Checkbox-D2w4VPJI.js";import{T as o}from"./Typography-CidD3oMh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-CVW2bgxI.js";const Ke={title:"Components/Checkbox",component:t,parameters:{layout:"centered",docs:{description:{component:`
# Checkbox Component

Enterprise-grade checkbox following Component Maturity Checklist.

## Features

- ✅ **forwardRef** + polymorphic 'as' prop
- ✅ **All 8 States**: default, hover, focus, active, disabled, loading, empty, error
- ✅ **Indeterminate State**: For "select all" scenarios in tables/lists
- ✅ **Typography Component**: NO custom styled text
- ✅ **100% Design Tokens**: NO hardcoded values
- ✅ **Two Sizes**: Default (16px) and Large (24px)
- ✅ **Event Callbacks**: onChange, onFocus, onBlur, onKeyDown, onCheck, onUncheck
- ✅ **Render Props**: customLabel, customIcon, customTrailingIcon
- ✅ **Full Accessibility**: WCAG 2.1 AA compliant (aria-checked="mixed")

## Usage

\`\`\`tsx
import { Checkbox } from '@ajaysoni7832/lean-ids-components';

<Checkbox
  label="Accept terms"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
\`\`\`
        `}}},tags:["autodocs"],args:{onChange:l(),onFocus:l(),onBlur:l(),onKeyDown:l(),onMouseEnter:l(),onMouseLeave:l(),onCheck:l(),onUncheck:l()},argTypes:{label:{control:"text",description:"Label text displayed next to the checkbox",table:{type:{summary:"string"},category:"Content"}},size:{control:"radio",options:["default","large"],description:"Checkbox size",table:{type:{summary:"default | large"},defaultValue:{summary:"default"},category:"Appearance"}},checked:{control:"boolean",description:"Whether the checkbox is checked",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},disabled:{control:"boolean",description:"Whether the checkbox is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},isLoading:{control:"boolean",description:"Loading state with spinner",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},isEmpty:{control:"boolean",description:"Empty state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},isInvalid:{control:"boolean",description:"Error/invalid state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},showTrailingIcon:{control:"boolean",description:"Whether to show trailing info icon",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}}}},d={args:{label:"Accept terms and conditions",size:"default",checked:!1,disabled:!1,isLoading:!1,isEmpty:!1,isInvalid:!1,showTrailingIcon:!1}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"Default (unchecked)",checked:!1}),e.jsx(t,{label:"Checked (active)",checked:!0}),e.jsx(t,{label:"Disabled (unchecked)",checked:!1,disabled:!0}),e.jsx(t,{label:"Disabled (checked)",checked:!0,disabled:!0}),e.jsx(t,{label:"Loading state",isLoading:!0}),e.jsx(t,{label:"Empty state",isEmpty:!0,emptyMessage:"No options available"}),e.jsx(t,{label:"Error state",isInvalid:!0,errorMessage:"This field is required"}),e.jsx(t,{label:"With trailing icon",showTrailingIcon:!0})]}),parameters:{docs:{description:{story:"All 8 states: default, active (checked), disabled, loading, empty, error, and with icon. Copy any checkbox you need."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{variant:"headingS",weight:"semibold",children:"Default Size (16px)"}),e.jsx(t,{label:"Default checkbox",size:"default"}),e.jsx(t,{label:"Default checked",size:"default",checked:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{variant:"headingS",weight:"semibold",children:"Large Size (24px)"}),e.jsx(t,{label:"Large checkbox",size:"large"}),e.jsx(t,{label:"Large checked",size:"large",checked:!0})]})]}),parameters:{docs:{description:{story:"Checkboxes are available in two sizes: default (16px) and large (24px)."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{isLoading:!0}),e.jsx(o,{variant:"caption",style:{color:"#737373"},children:"Shows animated spinner while loading"})]}),parameters:{docs:{description:{story:"Loading state displays an animated spinner. Use when checkbox options are being fetched."}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{isEmpty:!0,emptyMessage:"No options available"}),e.jsx(t,{isEmpty:!0,emptyMessage:"All items selected"})]}),parameters:{docs:{description:{story:"Empty state shows a message when no options are available. Customize with emptyMessage prop."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{isInvalid:!0,errorMessage:"This field is required"}),e.jsx(t,{isInvalid:!0,errorMessage:"Please accept the terms"})]}),parameters:{docs:{description:{story:"Error state displays an error icon and message. Use for form validation errors."}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"Default with icon",showTrailingIcon:!0}),e.jsx(t,{label:"Large with icon",size:"large",showTrailingIcon:!0}),e.jsx(t,{label:"Checked with icon",checked:!0,showTrailingIcon:!0}),e.jsx(t,{label:"Disabled with icon",disabled:!0,showTrailingIcon:!0})]}),parameters:{docs:{description:{story:"Optional trailing info icon. Icon size adjusts based on checkbox size."}}}},x={render:()=>{const[a,r]=w.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{label:"Toggle me",checked:a,onChange:s=>r(s.target.checked)}),e.jsxs(o,{variant:"body",style:{color:"#737373"},children:["Status: ",a?"Checked ✓":"Unchecked"]})]})},parameters:{docs:{description:{story:"Interactive checkbox with state management. Click to toggle."}}}},b={render:()=>{const[a,r]=w.useState({terms:!1,newsletter:!1,updates:!1});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(o,{variant:"headingM",weight:"semibold",children:"Sign Up Preferences"}),e.jsx(t,{label:"I agree to the terms and conditions",checked:a.terms,onChange:s=>r({...a,terms:s.target.checked}),showTrailingIcon:!0}),e.jsx(t,{label:"Subscribe to newsletter",checked:a.newsletter,onChange:s=>r({...a,newsletter:s.target.checked})}),e.jsx(t,{label:"Receive product updates",checked:a.updates,onChange:s=>r({...a,updates:s.target.checked})}),e.jsxs(o,{variant:"caption",style:{color:"#737373",marginTop:"8px"},children:["Selected: ",Object.values(a).filter(Boolean).length," of 3"]})]})},parameters:{docs:{description:{story:"Example of checkboxes in a form with multiple options and state tracking."}}}},f={render:()=>{const[a,r]=w.useState([]),s=i=>{r(c=>[...c.slice(-4),`${new Date().toLocaleTimeString()}: ${i}`])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"Checkbox with callbacks",onChange:()=>s("onChange"),onCheck:()=>s("onCheck"),onUncheck:()=>s("onUncheck"),onFocus:()=>s("onFocus"),onBlur:()=>s("onBlur")}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(o,{variant:"caption",weight:"semibold",children:"Event Log:"}),a.length===0?e.jsx(o,{variant:"caption",style:{color:"#A3A3A3"},children:"No events yet. Interact with the checkbox."}):a.map((i,c)=>e.jsx(o,{variant:"caption",style:{color:"#737373",fontFamily:"monospace"},children:i},c))]})]})},parameters:{docs:{description:{story:"All event callbacks: onChange, onCheck, onUncheck, onFocus, onBlur. Check Actions panel and event log."}}}},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{checked:!1,customLabel:({checked:a})=>e.jsx(o,{variant:"body",weight:a?"bold":"regular",children:a?"✓ Agreed to terms":"Click to agree to terms"})}),e.jsx(t,{checked:!0,customLabel:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(o,{variant:"body",weight:"semibold",style:{color:"#16A34A"},children:"Premium Plan"}),e.jsx(o,{variant:"caption",style:{color:"#737373"},children:"$29/month"})]})})]}),parameters:{docs:{description:{story:"Use customLabel render prop for complex label layouts. Receives checked and disabled state."}}}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{as:"div",label:"Rendered as div (default)"}),e.jsx(t,{as:"label",label:"Rendered as label element"}),e.jsx(o,{variant:"caption",style:{color:"#737373"},children:"Use 'as' prop to change root element type"})]}),parameters:{docs:{description:{story:'Polymorphic "as" prop allows changing the root element type. Default is div.'}}}},C={render:()=>{const[a,r]=w.useState([{id:1,name:"Item 1",selected:!1},{id:2,name:"Item 2",selected:!1},{id:3,name:"Item 3",selected:!1},{id:4,name:"Item 4",selected:!1}]),s=a.filter(n=>n.selected).length,i=s===a.length,c=s>0&&s<a.length,Pe=()=>{r(a.map(n=>({...n,selected:!i})))},We=n=>{r(a.map(S=>S.id===n?{...S,selected:!S.selected}:S))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",minWidth:"300px"},children:[e.jsx(o,{variant:"headingS",weight:"semibold",children:"Table Selection Example"}),e.jsx("div",{style:{padding:"12px",borderBottom:"2px solid #E5E5E5",backgroundColor:"#F5F5F5"},children:e.jsx(t,{label:"Select All",checked:i,indeterminate:c,onChange:Pe})}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:a.map(n=>e.jsx("div",{style:{padding:"8px 12px"},children:e.jsx(t,{label:n.name,checked:n.selected,onChange:()=>We(n.id)})},n.id))}),e.jsxs(o,{variant:"caption",style:{color:"#737373"},children:[s===0&&"No items selected",c&&`${s} of ${a.length} items selected (indeterminate)`,i&&"All items selected"]})]})},parameters:{docs:{description:{story:`
**Indeterminate State** is used for "select all" scenarios in tables or lists.

The header checkbox shows three states:
- **Unchecked** (☐): No items selected
- **Indeterminate** (☑ with minus): Some items selected
- **Checked** (☑ with checkmark): All items selected

This provides clear visual feedback about partial selections.

\`\`\`tsx
const someSelected = selectedCount > 0 && selectedCount < items.length;
const allSelected = selectedCount === items.length;

<Checkbox
  label="Select All"
  checked={allSelected}
  indeterminate={someSelected}
  onChange={handleSelectAll}
/>
\`\`\`
        `}}}};var T,j,D,I,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    size: 'default',
    checked: false,
    disabled: false,
    isLoading: false,
    isEmpty: false,
    isInvalid: false,
    showTrailingIcon: false
  }
}`,...(D=(j=d.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:"Interactive playground to test all checkbox props",...(E=(I=d.parameters)==null?void 0:I.docs)==null?void 0:E.description}}};var A,L,z,F,U;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Checkbox label="Default (unchecked)" checked={false} />
      <Checkbox label="Checked (active)" checked={true} />
      <Checkbox label="Disabled (unchecked)" checked={false} disabled={true} />
      <Checkbox label="Disabled (checked)" checked={true} disabled={true} />
      <Checkbox label="Loading state" isLoading={true} />
      <Checkbox label="Empty state" isEmpty={true} emptyMessage="No options available" />
      <Checkbox label="Error state" isInvalid={true} errorMessage="This field is required" />
      <Checkbox label="With trailing icon" showTrailingIcon={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All 8 states: default, active (checked), disabled, loading, empty, error, and with icon. Copy any checkbox you need.'
      }
    }
  }
}`,...(z=(L=p.parameters)==null?void 0:L.docs)==null?void 0:z.source},description:{story:"All 8 component states",...(U=(F=p.parameters)==null?void 0:F.docs)==null?void 0:U.description}}};var M,P,W,B,N;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingS" weight="semibold">Default Size (16px)</Typography>
        <Checkbox label="Default checkbox" size="default" />
        <Checkbox label="Default checked" size="default" checked />
      </div>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingS" weight="semibold">Large Size (24px)</Typography>
        <Checkbox label="Large checkbox" size="large" />
        <Checkbox label="Large checked" size="large" checked />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes are available in two sizes: default (16px) and large (24px).'
      }
    }
  }
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source},description:{story:"Two available sizes",...(N=(B=m.parameters)==null?void 0:B.docs)==null?void 0:N.description}}};var R,$,O,V,q;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox isLoading={true} />
      <Typography variant="caption" style={{
      color: '#737373'
    }}>
        Shows animated spinner while loading
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Loading state displays an animated spinner. Use when checkbox options are being fetched.'
      }
    }
  }
}`,...(O=($=h.parameters)==null?void 0:$.docs)==null?void 0:O.source},description:{story:"Loading state with spinner",...(q=(V=h.parameters)==null?void 0:V.docs)==null?void 0:q.description}}};var K,_,G,H,J;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox isEmpty={true} emptyMessage="No options available" />
      <Checkbox isEmpty={true} emptyMessage="All items selected" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Empty state shows a message when no options are available. Customize with emptyMessage prop.'
      }
    }
  }
}`,...(G=(_=g.parameters)==null?void 0:_.docs)==null?void 0:G.source},description:{story:"Empty state",...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var Q,X,Y,Z,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox isInvalid={true} errorMessage="This field is required" />
      <Checkbox isInvalid={true} errorMessage="Please accept the terms" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Error state displays an error icon and message. Use for form validation errors.'
      }
    }
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Error/invalid state",...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,ae,se,oe,re;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Checkbox label="Default with icon" showTrailingIcon />
      <Checkbox label="Large with icon" size="large" showTrailingIcon />
      <Checkbox label="Checked with icon" checked showTrailingIcon />
      <Checkbox label="Disabled with icon" disabled showTrailingIcon />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Optional trailing info icon. Icon size adjusts based on checkbox size.'
      }
    }
  }
}`,...(se=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"With trailing info icon",...(re=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:re.description}}};var ne,le,ie,ce,de;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Checkbox label="Toggle me" checked={checked} onChange={e => setChecked(e.target.checked)} />
        <Typography variant="body" style={{
        color: '#737373'
      }}>
          Status: {checked ? 'Checked ✓' : 'Unchecked'}
        </Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive checkbox with state management. Click to toggle.'
      }
    }
  }
}`,...(ie=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ie.source},description:{story:"Interactive example with state",...(de=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var pe,me,he,ge,ye;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      newsletter: false,
      updates: false
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <Typography variant="headingM" weight="semibold">Sign Up Preferences</Typography>
        
        <Checkbox label="I agree to the terms and conditions" checked={formData.terms} onChange={e => setFormData({
        ...formData,
        terms: e.target.checked
      })} showTrailingIcon />
        <Checkbox label="Subscribe to newsletter" checked={formData.newsletter} onChange={e => setFormData({
        ...formData,
        newsletter: e.target.checked
      })} />
        <Checkbox label="Receive product updates" checked={formData.updates} onChange={e => setFormData({
        ...formData,
        updates: e.target.checked
      })} />
        
        <Typography variant="caption" style={{
        color: '#737373',
        marginTop: '8px'
      }}>
          Selected: {Object.values(formData).filter(Boolean).length} of 3
        </Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of checkboxes in a form with multiple options and state tracking.'
      }
    }
  }
}`,...(he=(me=b.parameters)==null?void 0:me.docs)==null?void 0:he.source},description:{story:"Form example with multiple checkboxes",...(ye=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:ye.description}}};var ue,xe,be,fe,ke;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [events, setEvents] = useState<string[]>([]);
    const addEvent = (event: string) => {
      setEvents(prev => [...prev.slice(-4), \`\${new Date().toLocaleTimeString()}: \${event}\`]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Checkbox label="Checkbox with callbacks" onChange={() => addEvent('onChange')} onCheck={() => addEvent('onCheck')} onUncheck={() => addEvent('onUncheck')} onFocus={() => addEvent('onFocus')} onBlur={() => addEvent('onBlur')} />
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
          <Typography variant="caption" weight="semibold">Event Log:</Typography>
          {events.length === 0 ? <Typography variant="caption" style={{
          color: '#A3A3A3'
        }}>
              No events yet. Interact with the checkbox.
            </Typography> : events.map((event, i) => <Typography key={i} variant="caption" style={{
          color: '#737373',
          fontFamily: 'monospace'
        }}>
                {event}
              </Typography>)}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'All event callbacks: onChange, onCheck, onUncheck, onFocus, onBlur. Check Actions panel and event log.'
      }
    }
  }
}`,...(be=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:be.source},description:{story:"Event callbacks demonstration",...(ke=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:ke.description}}};var ve,Ce,Se,we,Te;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Checkbox checked={false} customLabel={({
      checked
    }) => <Typography variant="body" weight={checked ? 'bold' : 'regular'}>
            {checked ? '✓ Agreed to terms' : 'Click to agree to terms'}
          </Typography>} />
      
      <Checkbox checked={true} customLabel={() => <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
            <Typography variant="body" weight="semibold" style={{
        color: '#16A34A'
      }}>
              Premium Plan
            </Typography>
            <Typography variant="caption" style={{
        color: '#737373'
      }}>
              $29/month
            </Typography>
          </div>} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use customLabel render prop for complex label layouts. Receives checked and disabled state.'
      }
    }
  }
}`,...(Se=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source},description:{story:"Custom label with render prop",...(Te=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Te.description}}};var je,De,Ie,Ee,Ae;v.parameters={...v.parameters,docs:{...(je=v.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox as="div" label="Rendered as div (default)" />
      <Checkbox as="label" label="Rendered as label element" />
      <Typography variant="caption" style={{
      color: '#737373'
    }}>
        Use 'as' prop to change root element type
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Polymorphic "as" prop allows changing the root element type. Default is div.'
      }
    }
  }
}`,...(Ie=(De=v.parameters)==null?void 0:De.docs)==null?void 0:Ie.source},description:{story:"Polymorphic 'as' prop",...(Ae=(Ee=v.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.description}}};var Le,ze,Fe,Ue,Me;C.parameters={...C.parameters,docs:{...(Le=C.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState([{
      id: 1,
      name: 'Item 1',
      selected: false
    }, {
      id: 2,
      name: 'Item 2',
      selected: false
    }, {
      id: 3,
      name: 'Item 3',
      selected: false
    }, {
      id: 4,
      name: 'Item 4',
      selected: false
    }]);
    const selectedCount = items.filter(item => item.selected).length;
    const allSelected = selectedCount === items.length;
    const someSelected = selectedCount > 0 && selectedCount < items.length;
    const handleSelectAll = () => {
      setItems(items.map(item => ({
        ...item,
        selected: !allSelected
      })));
    };
    const handleItemToggle = (id: number) => {
      setItems(items.map(item => item.id === id ? {
        ...item,
        selected: !item.selected
      } : item));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      minWidth: '300px'
    }}>
        <Typography variant="headingS" weight="semibold">
          Table Selection Example
        </Typography>
        
        {/* Header checkbox with indeterminate state */}
        <div style={{
        padding: '12px',
        borderBottom: '2px solid #E5E5E5',
        backgroundColor: '#F5F5F5'
      }}>
          <Checkbox label="Select All" checked={allSelected} indeterminate={someSelected} onChange={handleSelectAll} />
        </div>

        {/* Individual item checkboxes */}
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          {items.map(item => <div key={item.id} style={{
          padding: '8px 12px'
        }}>
              <Checkbox label={item.name} checked={item.selected} onChange={() => handleItemToggle(item.id)} />
            </div>)}
        </div>

        {/* Status */}
        <Typography variant="caption" style={{
        color: '#737373'
      }}>
          {selectedCount === 0 && 'No items selected'}
          {someSelected && \`\${selectedCount} of \${items.length} items selected (indeterminate)\`}
          {allSelected && 'All items selected'}
        </Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Indeterminate State** is used for "select all" scenarios in tables or lists.

The header checkbox shows three states:
- **Unchecked** (☐): No items selected
- **Indeterminate** (☑ with minus): Some items selected
- **Checked** (☑ with checkmark): All items selected

This provides clear visual feedback about partial selections.

\\\`\\\`\\\`tsx
const someSelected = selectedCount > 0 && selectedCount < items.length;
const allSelected = selectedCount === items.length;

<Checkbox
  label="Select All"
  checked={allSelected}
  indeterminate={someSelected}
  onChange={handleSelectAll}
/>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(Fe=(ze=C.parameters)==null?void 0:ze.docs)==null?void 0:Fe.source},description:{story:'Indeterminate State - "Select All" Pattern',...(Me=(Ue=C.parameters)==null?void 0:Ue.docs)==null?void 0:Me.description}}};const _e=["Playground","AllStates","Sizes","LoadingState","EmptyState","ErrorState","WithTrailingIcon","Interactive","FormExample","WithEventCallbacks","CustomLabel","PolymorphicAs","IndeterminateState"];export{p as AllStates,k as CustomLabel,g as EmptyState,y as ErrorState,b as FormExample,C as IndeterminateState,x as Interactive,h as LoadingState,d as Playground,v as PolymorphicAs,m as Sizes,f as WithEventCallbacks,u as WithTrailingIcon,_e as __namedExportsOrder,Ke as default};
