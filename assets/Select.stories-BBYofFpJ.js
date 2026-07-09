import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as x}from"./index-B0WjJBI_.js";import{S as g}from"./Select-2I4xB7Ap.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-DVcPNpfh.js";import"./InputField-B2MYZsZr.js";import"./FieldImportance-BcdMchzX.js";import"./HelpingText-DBmPat_K.js";import"./Icon-D1GQI8nt.js";import"./ExpandMore-GavyM6T7.js";import"./Checkbox-CWZMyd52.js";import"./RadioButton-BHbwfvFd.js";const Ge={title:"Components/Select",component:g,parameters:{layout:"centered",docs:{description:{component:`
# Select

A dropdown select component with search functionality and support for single or multiple selection.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Select } from '@ajaysoni7832/lean-ids-components';

function MyForm() {
  const [value, setValue] = useState('');
  
  const options = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ];

  return (
    <Select
      label="Country"
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select a country"
    />
  );
}
\`\`\`

## Features

✅ **Single/Multiple Selection** - Choose one or many options
✅ **Search/Filter** - Type to filter options
✅ **Keyboard Navigation** - Full keyboard support
✅ **Disabled Options** - Disable specific options
✅ **Custom Rendering** - Custom option display
✅ **Error States** - Validation support
✅ **Sizes** - Multiple size variants
✅ **Accessible** - WCAG compliant

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | SelectOption[] | required | Array of options |
| value | string \\| string[] | - | Selected value(s) |
| onChange | (value) => void | required | Change handler |
| label | string | - | Field label |
| placeholder | string | 'Select...' | Placeholder text |
| multiple | boolean | false | Allow multiple selection |
| searchable | boolean | true | Enable search/filter |
| disabled | boolean | false | Disable the select |
| error | boolean | false | Show error state |
| helperText | string | - | Helper/error message |
| size | 'small' \\| 'default' \\| 'large' | 'default' | Select size |
| required | boolean | false | Mark as required |
| clearable | boolean | false | Show clear button |
| className | string | - | Custom CSS class |

## SelectOption Interface

\`\`\`tsx
interface SelectOption {
  value: string;        // Option value
  label: string;        // Display label
  disabled?: boolean;   // Disable option
  icon?: ReactNode;     // Leading icon
  description?: string; // Optional description
}
\`\`\`

## Examples

### Basic Select
\`\`\`tsx
<Select
  label="Country"
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
/>
\`\`\`

### Multiple Selection
\`\`\`tsx
<Select
  label="Skills"
  options={skills}
  value={selectedSkills}
  onChange={setSelectedSkills}
  multiple
  placeholder="Select skills"
/>
\`\`\`

### With Search Disabled
\`\`\`tsx
<Select
  label="Status"
  options={statuses}
  value={status}
  onChange={setStatus}
  searchable={false}
/>
\`\`\`

### With Error
\`\`\`tsx
<Select
  label="Department"
  options={departments}
  value={department}
  onChange={setDepartment}
  error={!!error}
  helperText={error || 'Required field'}
  required
/>
\`\`\`

### With Disabled Options
\`\`\`tsx
const options = [
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending', disabled: true },
  { value: 'inactive', label: 'Inactive' },
];
\`\`\`

### Clearable
\`\`\`tsx
<Select
  label="Filter"
  options={filters}
  value={filter}
  onChange={setFilter}
  clearable
/>
\`\`\`

### Different Sizes
\`\`\`tsx
<Select label="Small" options={options} size="small" />
<Select label="Default" options={options} size="default" />
<Select label="Large" options={options} size="large" />
\`\`\`

## Best Practices

1. **Use labels** - Always provide clear labels
2. **Limit options** - Consider autocomplete for 20+ options
3. **Sort logically** - Alphabetical or by frequency
4. **Provide search** - For 10+ options
5. **Show selection** - Clear visual feedback
6. **Handle empty** - Show "No options" message

## Keyboard Navigation

- **Tab** - Focus select
- **Enter/Space** - Open dropdown
- **Arrow Up/Down** - Navigate options
- **Enter** - Select option
- **Escape** - Close dropdown
- **Type** - Search/filter options
- **Backspace** - Remove last selection (multiple)

## Accessibility

- ✅ ARIA roles and labels
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Screen reader support
- ✅ Disabled state announcements
- ✅ Required field indicators
        `}}},tags:["autodocs"]},l=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"},{value:"cn",label:"China"},{value:"in",label:"India"},{value:"br",label:"Brazil"}],C=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],r=t=>{const[o,a]=x.useState(t.value);return e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(g,{...t,value:o,onChange:a})})},s={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:l,helperText:"Choose your country"})},i={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:l,required:!0,helperText:"This field is required"})},n={render:()=>e.jsx(r,{label:"Country",placeholder:"Search countries...",options:l,searchable:!0,helperText:"Type to search"})},c={render:()=>{const[t,o]=x.useState([]);return e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(g,{label:"Favorite Fruits",placeholder:"Select fruits",options:C,value:t,onChange:a=>o(a),multiple:!0,helperText:"Select multiple options"})})}},p={render:()=>{const[t,o]=x.useState([]);return e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(g,{label:"Countries",placeholder:"Search and select",options:l,value:t,onChange:a=>o(a),multiple:!0,searchable:!0,helperText:"Search and select multiple"})})}},d={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:l,error:!0,helperText:"Please select a valid country",required:!0})},u={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:l,disabled:!0,helperText:"This field is disabled"})},h={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:l,value:"us",helperText:"United States is pre-selected"})},m={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:l,showLeadingIcon:!1,showTrailingIcon:!1,helperText:"No leading or trailing icons"})},b={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom",disabled:!0},{value:"ca",label:"Canada"},{value:"au",label:"Australia",disabled:!0},{value:"de",label:"Germany"}],helperText:"Some options are disabled"})},S={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:C,size:"small",helperText:"Small size select"})},y={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:C,size:"large",helperText:"Large size select"})},v={render:()=>{const t=Array.from({length:50},(o,a)=>({value:`option-${a}`,label:`Option ${a+1}`}));return e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(g,{label:"Options",placeholder:"Search options...",options:t,searchable:!0,helperText:"50 options available"})})}};var f,T,w,j,z;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} helperText="Choose your country" />
}`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:"Default select with single selection",...(z=(j=s.parameters)==null?void 0:j.docs)==null?void 0:z.description}}};var D,W,A,L,q;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} required={true} helperText="This field is required" />
}`,...(A=(W=i.parameters)==null?void 0:W.docs)==null?void 0:A.source},description:{story:"Select with required field indicator",...(q=(L=i.parameters)==null?void 0:L.docs)==null?void 0:q.description}}};var O,F,k,U,E;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Search countries..." options={countries} searchable={true} helperText="Type to search" />
}`,...(k=(F=n.parameters)==null?void 0:F.docs)==null?void 0:k.source},description:{story:"Select with searchable dropdown",...(E=(U=n.parameters)==null?void 0:U.docs)==null?void 0:E.description}}};var M,I,N,P,V;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: '100%',
      maxWidth: '400px'
    }}>
        <Select label="Favorite Fruits" placeholder="Select fruits" options={fruits} value={value} onChange={val => setValue(val as string[])} multiple={true} helperText="Select multiple options" />
      </div>;
  }
}`,...(N=(I=c.parameters)==null?void 0:I.docs)==null?void 0:N.source},description:{story:"Multiple selection with checkboxes",...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.description}}};var R,K,B,G,_;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: '100%',
      maxWidth: '400px'
    }}>
        <Select label="Countries" placeholder="Search and select" options={countries} value={value} onChange={val => setValue(val as string[])} multiple={true} searchable={true} helperText="Search and select multiple" />
      </div>;
  }
}`,...(B=(K=p.parameters)==null?void 0:K.docs)==null?void 0:B.source},description:{story:"Multiple selection with search",...(_=(G=p.parameters)==null?void 0:G.docs)==null?void 0:_.description}}};var $,H,J,Q,X;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} error={true} helperText="Please select a valid country" required={true} />
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:"Select with error state",...(X=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,ee,re,te;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} disabled={true} helperText="This field is disabled" />
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Disabled select",...(te=(re=u.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var ae,le,oe,se,ie;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} value="us" helperText="United States is pre-selected" />
}`,...(oe=(le=h.parameters)==null?void 0:le.docs)==null?void 0:oe.source},description:{story:"Select with pre-selected value",...(ie=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var ne,ce,pe,de,ue;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} showLeadingIcon={false} showTrailingIcon={false} helperText="No leading or trailing icons" />
}`,...(pe=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:"Select without icons",...(ue=(de=m.parameters)==null?void 0:de.docs)==null?void 0:ue.description}}};var he,me,be,Se,ye;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={[{
    value: 'us',
    label: 'United States'
  }, {
    value: 'uk',
    label: 'United Kingdom',
    disabled: true
  }, {
    value: 'ca',
    label: 'Canada'
  }, {
    value: 'au',
    label: 'Australia',
    disabled: true
  }, {
    value: 'de',
    label: 'Germany'
  }]} helperText="Some options are disabled" />
}`,...(be=(me=b.parameters)==null?void 0:me.docs)==null?void 0:be.source},description:{story:"Select with disabled options",...(ye=(Se=b.parameters)==null?void 0:Se.docs)==null?void 0:ye.description}}};var ve,ge,xe,Ce,fe;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={fruits} size="small" helperText="Small size select" />
}`,...(xe=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:xe.source},description:{story:"Small size select",...(fe=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:fe.description}}};var Te,we,je,ze,De;y.parameters={...y.parameters,docs:{...(Te=y.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={fruits} size="large" helperText="Large size select" />
}`,...(je=(we=y.parameters)==null?void 0:we.docs)==null?void 0:je.source},description:{story:"Large size select",...(De=(ze=y.parameters)==null?void 0:ze.docs)==null?void 0:De.description}}};var We,Ae,Le,qe,Oe;v.parameters={...v.parameters,docs:{...(We=v.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    const longList = Array.from({
      length: 50
    }, (_, i) => ({
      value: \`option-\${i}\`,
      label: \`Option \${i + 1}\`
    }));
    return <div style={{
      width: '100%',
      maxWidth: '400px'
    }}>
        <Select label="Options" placeholder="Search options..." options={longList} searchable={true} helperText="50 options available" />
      </div>;
  }
}`,...(Le=(Ae=v.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source},description:{story:"Long list with search",...(Oe=(qe=v.parameters)==null?void 0:qe.docs)==null?void 0:Oe.description}}};const _e=["Default","Required","Searchable","Multiple","MultipleSearchable","Error","Disabled","PreSelected","NoIcons","DisabledOptions","SmallSize","LargeSize","LongList"];export{s as Default,u as Disabled,b as DisabledOptions,d as Error,y as LargeSize,v as LongList,c as Multiple,p as MultipleSearchable,m as NoIcons,h as PreSelected,i as Required,n as Searchable,S as SmallSize,_e as __namedExportsOrder,Ge as default};
