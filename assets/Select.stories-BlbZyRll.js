import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r}from"./index-Bv9Y92EF.js";import{S as s}from"./Select-xWzEopA2.js";import{T as a}from"./Typography-CidD3oMh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-CVW2bgxI.js";import"./Chip--FEJIdFJ.js";import"./Icon-DSqvK6Kv.js";import"./Search-Bpcrs37S.js";import"./createSvgIcon-Ce6eLUkr.js";import"./ExpandMore-Bd7rmlfk.js";import"./Close-CtL5j8iM.js";import"./Settings-aYyvLXSG.js";import"./Home-Bococija.js";import"./FieldImportance-D7BkpLTs.js";import"./InputField-BAIr4sa2.js";import"./HelpingText-DBD3feHR.js";import"./Checkbox-D2w4VPJI.js";import"./RadioButton-DHcwHeDp.js";const ma={title:"Components/Select",component:s,parameters:{layout:"centered",docs:{description:{component:`
# Select Component

A dropdown select component with search functionality and support for single or multiple selection.

## Enhanced with Component Maturity Checklist

✅ **Multi-select chips display** - NEW! Inline & below modes  
✅ **Smart overflow calculation** - NEW! Auto "+N More" chip  
✅ **Performance optimized** - NEW! Memoization, debouncing, virtual scrolling  
✅ **forwardRef support** - NEW!  
✅ **Polymorphic 'as' prop** - NEW!  
✅ **Loading & Empty states** - NEW!  
✅ **Enhanced keyboard navigation** - Arrow keys, Enter, Escape  
✅ **Multiple className overrides** - 4 override points  
✅ **Comprehensive event callbacks** - 7 new events  
✅ **100% design tokens** - Zero hardcoded values  

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

## New Features

### Multi-Select Chips Display
\`\`\`tsx
// Inline chips with smart overflow
<Select
  multiple={true}
  showChips={true}
  chipsPosition="inline"  // Chips inside field
  options={options}
  value={selected}
  onChange={setSelected}
  onMoreChipsClick={() => showModal()}
/>

// Below chips - all visible
<Select
  multiple={true}
  showChips={true}
  chipsPosition="below"  // Chips below field
  options={options}
  value={selected}
  onChange={setSelected}
/>
\`\`\`

### Performance Optimization
\`\`\`tsx
// Debounced search (300ms default)
<Select
  searchable={true}
  searchDebounceDelay={300}
  onSearchChange={(query) => fetchResults(query)}
/>

// Virtual scrolling for large datasets
<Select
  options={largeDataset}  // 1000+ items
  enableVirtualization={true}
  itemHeight={40}
/>
\`\`\`

### Loading State
\`\`\`tsx
<Select
  label="Countries"
  options={[]}
  isLoading={true}
/>
\`\`\`

### Empty State
\`\`\`tsx
<Select
  label="Results"
  options={[]}
  isEmpty={true}
  emptyMessage="No results found"
/>
\`\`\`

### Event Callbacks
\`\`\`tsx
<Select
  label="Country"
  options={countries}
  onOpen={() => {}}
  onAfterOpen={() => {}}
  onClose={() => {}}
  onSearchChange={(query) => {}}
  onEnter={() => {}}
  onEscape={() => {}}
/>
\`\`\`

### className Overrides
\`\`\`tsx
<Select
  label="Country"
  options={countries}
  className="custom-container"
  labelClassName="custom-label"
  dropdownClassName="custom-dropdown"
  optionClassName="custom-option"
  helperTextClassName="custom-helper"
/>
\`\`\`

## Keyboard Navigation

- **Tab** - Focus select
- **Enter/Space** - Open dropdown
- **Arrow Up/Down** - Navigate options (NEW!)
- **Enter** - Select focused option
- **Escape** - Close dropdown
- **Type** - Search/filter options

## Accessibility

- ✅ ARIA roles and labels
- ✅ Enhanced keyboard navigation
- ✅ Focus management
- ✅ Screen reader support
- ✅ Disabled state announcements
- ✅ Required field indicators
        `}}},tags:["autodocs"]},l=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"},{value:"cn",label:"China"},{value:"in",label:"India"},{value:"br",label:"Brazil"}],j=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],k=t=>{const[o,i]=r.useState(t.value);return e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(s,{...t,value:o,onChange:i})})},d={render:()=>e.jsx(k,{label:"Country",placeholder:"Select a country",options:l,helperText:"Choose your country"})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(a,{variant:"headingM",weight:"semibold",children:"Loading State"}),e.jsx(a,{variant:"body",children:"Shows loading indicator while fetching options."}),e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{label:"Countries",options:[],isLoading:!0,placeholder:"Loading..."})})]}),parameters:{docs:{description:{story:"Use `isLoading` prop to show a loading state with hourglass icon."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(a,{variant:"headingM",weight:"semibold",children:"Empty State"}),e.jsx(a,{variant:"body",children:"Shows empty state when no options available."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsx(s,{label:"Search Results",options:[],isEmpty:!0,emptyMessage:"No results found"}),e.jsx(s,{label:"Recent Items",options:[],isEmpty:!0,emptyMessage:"No recent items"})]})]}),parameters:{docs:{description:{story:"Use `isEmpty` prop with custom `emptyMessage`."}}}},y={render:()=>{const[t,o]=r.useState(""),[i,Ge]=r.useState([]),n=p=>{Ge(E=>[...E.slice(-5),`${new Date().toLocaleTimeString()}: ${p}`])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(a,{variant:"headingM",weight:"semibold",children:"Event Callbacks"}),e.jsx(a,{variant:"body",children:"All available event callbacks demonstrated."}),e.jsx(s,{label:"Country",options:l,value:t,onChange:p=>{o(p),n(`onChange: ${p}`)},onOpen:()=>n("onOpen fired"),onAfterOpen:()=>n("onAfterOpen fired (200ms delay)"),onClose:()=>n("onClose fired"),onAfterClose:()=>n("onAfterClose fired (200ms delay)"),onSearchChange:p=>n(`onSearchChange: ${p}`),onEnter:()=>n("onEnter fired"),onEscape:()=>n("onEscape fired"),searchable:!0,style:{width:"400px"}}),e.jsxs("div",{style:{marginTop:"16px",padding:"12px",background:"#f5f5f5",borderRadius:"4px",maxHeight:"150px",overflow:"auto"},children:[e.jsx(a,{variant:"caption",weight:"semibold",style:{marginBottom:"8px",display:"block"},children:"Event Log:"}),i.length===0?e.jsx(a,{variant:"caption",style:{color:"#666"},children:"No events yet..."}):i.map((p,E)=>e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:p},E))]})]})},parameters:{docs:{description:{story:`
New event callbacks:
- **onOpen**: Dropdown opens
- **onClose**: Dropdown closes
- **onAfterOpen**: After open animation (200ms)
- **onAfterClose**: After close animation (200ms)
- **onSearchChange**: Search query changes
- **onEnter**: Enter key pressed
- **onEscape**: Escape key pressed
        `}}}},u={render:()=>e.jsx(k,{label:"Country",placeholder:"Select a country",options:l,required:!0,helperText:"This field is required"})},m={render:()=>e.jsx(k,{label:"Country",placeholder:"Search countries...",options:l,searchable:!0,helperText:"Type to search"})},g={render:()=>{const[t,o]=r.useState([]);return e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(s,{label:"Favorite Fruits",placeholder:"Select fruits",options:j,value:t,onChange:i=>o(i),multiple:!0,helperText:"Select multiple options"})})}},x={render:()=>e.jsx(k,{label:"Country",placeholder:"Select a country",options:l,error:!0,helperText:"Please select a valid country",required:!0})},v={render:()=>e.jsx(k,{label:"Country",placeholder:"Select a country",options:l,disabled:!0,helperText:"This field is disabled"})},b={render:()=>{const[t,o]=r.useState(["us","uk","ca","au","de"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(a,{variant:"headingM",weight:"semibold",children:"Below Chips - All Visible"}),e.jsx(a,{variant:"body",children:"All selected chips displayed below the input field with wrapping."}),e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{label:"Select Countries",placeholder:"Select countries...",options:l,value:t,onChange:i=>o(i),multiple:!0,showChips:!0,chipsPosition:"below",helperText:"All chips visible below field",onChipRemove:i=>{}})}),e.jsx(a,{variant:"caption",style:{color:"#666"},children:"All chips are visible with wrapping. Maximum 3 rows, then scrollable."})]})},parameters:{docs:{description:{story:`
**Below Chips Mode:**
- All chips displayed below the input field
- Chips wrap naturally to multiple rows
- Maximum 3 rows (~120px), then scrollable
- Full width matching select field
- Click X on chip to remove selection
        `}}}},w={render:()=>{const[t,o]=r.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px",background:"#f0f0f0"},children:[e.jsx(a,{variant:"headingM",weight:"semibold",children:"Inline Chips - Manual Limit"}),e.jsx(a,{variant:"body",children:'Use maxInlineChips prop to limit how many chips show inline. Remaining shown as "+N More".'}),e.jsx("div",{style:{width:"600px"},children:e.jsx(s,{label:"Select Fruits",placeholder:"Select fruits...",options:j,value:t,onChange:i=>o(i),multiple:!0,showChips:!0,chipsPosition:"inline",maxInlineChips:3,helperText:"Maximum 3 chips shown inline",onMoreChipsClick:()=>{alert(`All ${t.length} selections:
${t.join(", ")}`)}})}),e.jsx(a,{variant:"caption",style:{color:"#666"},children:'Only 3 chips shown due to maxInlineChips=3. Click "+N More" to see all.'})]})},parameters:{docs:{description:{story:`
Use \`maxInlineChips\` prop to manually limit visible chips:
\`\`\`tsx
<Select
  showChips={true}
  chipsPosition="inline"
  maxInlineChips={3}  // Show max 3 chips
/>
\`\`\`
        `}}}},C={render:()=>{const[t,o]=r.useState(["us","uk","ca","au","de","fr"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(a,{variant:"headingM",weight:"semibold",children:"Inline Chips - Wrapping"}),e.jsx(a,{variant:"body",children:"All chips wrap to multiple lines inside the field. Field height grows automatically."}),e.jsx("div",{style:{width:"600px"},children:e.jsx(s,{label:"Select Countries",options:l,value:t,onChange:i=>o(i),multiple:!0,showChips:!0,chipsPosition:"inline",helperText:"Chips wrap to multiple lines"})}),e.jsx(a,{variant:"caption",style:{color:"#666"},children:"Select more countries to see chips wrap. Field height adjusts automatically."})]})},parameters:{docs:{description:{story:`
**Inline chips with wrapping:**
- All chips displayed inside the field
- Chips wrap to multiple lines automatically
- Field height grows to accommodate all chips
- No manual limit needed
- Perfect for showing all selections
        `}}}},f={render:()=>{const[t,o]=r.useState(["us","uk","ca"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(a,{variant:"headingM",weight:"semibold",children:"Chips + Searchable"}),e.jsx(a,{variant:"body",children:"Combine chips display with search functionality."}),e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{label:"Search Countries",placeholder:"Search and select...",options:l,value:t,onChange:i=>o(i),multiple:!0,searchable:!0,showChips:!0,chipsPosition:"below",helperText:"Search and see selected chips below"})})]})},parameters:{docs:{description:{story:"Chips work seamlessly with searchable dropdown."}}}},S={render:()=>{const[t,o]=r.useState(["apple","banana","orange","grape"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"20px"},children:[e.jsx(a,{variant:"headingL",weight:"semibold",children:"Chips Display Modes Comparison"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"headingM",weight:"semibold",style:{marginBottom:"12px"},children:"Inline Mode"}),e.jsx(a,{variant:"body",style:{marginBottom:"16px",color:"#666"},children:'Compact, chips inside field, smart overflow with "+N More"'}),e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{label:"Inline Chips",options:j,value:t,onChange:i=>o(i),multiple:!0,showChips:!0,chipsPosition:"inline"})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"headingM",weight:"semibold",style:{marginBottom:"12px"},children:"Below Mode"}),e.jsx(a,{variant:"body",style:{marginBottom:"16px",color:"#666"},children:"All chips visible, wrapping below field"}),e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{label:"Below Chips",options:j,value:t,onChange:i=>o(i),multiple:!0,showChips:!0,chipsPosition:"below"})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"headingM",weight:"semibold",style:{marginBottom:"12px"},children:"No Chips (Default)"}),e.jsx(a,{variant:"body",style:{marginBottom:"16px",color:"#666"},children:'Traditional "N selected" text'}),e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{label:"No Chips",options:j,value:t,onChange:i=>o(i),multiple:!0,showChips:!1})})]})]})]})},parameters:{docs:{description:{story:`
**When to use each mode:**

**Inline Chips:**
- ✅ 2-5 selections typically
- ✅ Compact UI needed
- ✅ Limited vertical space

**Below Chips:**
- ✅ Many selections (10+)
- ✅ Need to see all selections
- ✅ Vertical space available

**No Chips (Default):**
- ✅ Very large datasets (100+)
- ✅ Minimal UI
- ✅ Just need count
        `}}}},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px",maxWidth:"800px"},children:[e.jsx(a,{variant:"headingL",weight:"semibold",children:"Component Maturity Enhancements"}),e.jsx(a,{variant:"body",children:"Select now meets enterprise-grade standards with the following enhancements:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginTop:"16px"},children:[e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(a,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ API & Composition"}),e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• forwardRef support (NEW!)"}),e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• Polymorphic 'as' prop"}),e.jsx(a,{variant:"caption",style:{display:"block"},children:"• ...restProps passthrough"})]}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(a,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ Design Tokens"}),e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• Zero hardcoded colors"}),e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• Zero hardcoded spacing"}),e.jsx(a,{variant:"caption",style:{display:"block"},children:"• 100% token usage"})]}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(a,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ States & Behavior"}),e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• isLoading state"}),e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• isEmpty state"}),e.jsx(a,{variant:"caption",style:{display:"block"},children:"• Enhanced keyboard nav"})]}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(a,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ Event Callbacks"}),e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• onOpen/Close"}),e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• onAfterOpen/Close"}),e.jsx(a,{variant:"caption",style:{display:"block"},children:"• onSearchChange"})]})]}),e.jsxs("div",{style:{marginTop:"16px",padding:"16px",background:"#e3f2fd",borderRadius:"8px",borderLeft:"4px solid #2196f3"},children:[e.jsx(a,{variant:"body",weight:"semibold",style:{marginBottom:"8px"},children:"📊 Total Enhancements"}),e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 10 new props"}),e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 7 new event callbacks"}),e.jsx(a,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 4 className override points"}),e.jsx(a,{variant:"caption",style:{display:"block"},children:"• Zero breaking changes"})]})]}),parameters:{docs:{description:{story:"Summary of all Component Maturity Checklist enhancements applied to Select."}}}};var M,B,N,A,D;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} helperText="Choose your country" />
}`,...(N=(B=d.parameters)==null?void 0:B.docs)==null?void 0:N.source},description:{story:"Default select with single selection",...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var L,I,V,W,R;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Loading State</Typography>
      <Typography variant="body">Shows loading indicator while fetching options.</Typography>
      
      <div style={{
      width: '400px'
    }}>
        <Select label="Countries" options={[]} isLoading={true} placeholder="Loading..." />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`isLoading\` prop to show a loading state with hourglass icon.'
      }
    }
  }
}`,...(V=(I=c.parameters)==null?void 0:I.docs)==null?void 0:V.source},description:{story:"NEW: Loading State",...(R=(W=c.parameters)==null?void 0:W.docs)==null?void 0:R.description}}};var P,O,F,U,q;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Empty State</Typography>
      <Typography variant="body">Shows empty state when no options available.</Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '400px'
    }}>
        <Select label="Search Results" options={[]} isEmpty={true} emptyMessage="No results found" />
        <Select label="Recent Items" options={[]} isEmpty={true} emptyMessage="No recent items" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`isEmpty\` prop with custom \`emptyMessage\`.'
      }
    }
  }
}`,...(F=(O=h.parameters)==null?void 0:O.docs)==null?void 0:F.source},description:{story:"NEW: Empty State",...(q=(U=h.parameters)==null?void 0:U.docs)==null?void 0:q.description}}};var $,Z,z,H,J;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [logs, setLogs] = useState<string[]>([]);
    const addLog = (message: string) => {
      setLogs(prev => [...prev.slice(-5), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Event Callbacks</Typography>
        <Typography variant="body">All available event callbacks demonstrated.</Typography>
        
        <Select label="Country" options={countries} value={value} onChange={val => {
        setValue(val as string);
        addLog(\`onChange: \${val}\`);
      }} onOpen={() => addLog('onOpen fired')} onAfterOpen={() => addLog('onAfterOpen fired (200ms delay)')} onClose={() => addLog('onClose fired')} onAfterClose={() => addLog('onAfterClose fired (200ms delay)')} onSearchChange={query => addLog(\`onSearchChange: \${query}\`)} onEnter={() => addLog('onEnter fired')} onEscape={() => addLog('onEscape fired')} searchable={true} style={{
        width: '400px'
      }} />
        
        <div style={{
        marginTop: '16px',
        padding: '12px',
        background: '#f5f5f5',
        borderRadius: '4px',
        maxHeight: '150px',
        overflow: 'auto'
      }}>
          <Typography variant="caption" weight="semibold" style={{
          marginBottom: '8px',
          display: 'block'
        }}>
            Event Log:
          </Typography>
          {logs.length === 0 ? <Typography variant="caption" style={{
          color: '#666'
        }}>No events yet...</Typography> : logs.map((log, i) => <Typography key={i} variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>
                {log}
              </Typography>)}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
New event callbacks:
- **onOpen**: Dropdown opens
- **onClose**: Dropdown closes
- **onAfterOpen**: After open animation (200ms)
- **onAfterClose**: After close animation (200ms)
- **onSearchChange**: Search query changes
- **onEnter**: Enter key pressed
- **onEscape**: Escape key pressed
        \`
      }
    }
  }
}`,...(z=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:z.source},description:{story:"NEW: Event Callbacks",...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var K,G,X,_,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} required={true} helperText="This field is required" />
}`,...(X=(G=u.parameters)==null?void 0:G.docs)==null?void 0:X.source},description:{story:"Select with required field indicator",...(Q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:Q.description}}};var Y,ee,ae,ie,te;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Search countries..." options={countries} searchable={true} helperText="Type to search" />
}`,...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Select with searchable dropdown",...(te=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:te.description}}};var oe,se,re,le,ne;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: '100%',
      maxWidth: '400px'
    }}>
        <Select label="Favorite Fruits" placeholder="Select fruits" options={fruits} value={value} onChange={val => setValue(val as string[])} multiple={true} helperText="Select multiple options" />
      </div>;
  }
}`,...(re=(se=g.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:"Multiple selection with checkboxes",...(ne=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ne.description}}};var pe,de,ce,he,ye;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} error={true} helperText="Please select a valid country" required={true} />
}`,...(ce=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:"Select with error state",...(ye=(he=x.parameters)==null?void 0:he.docs)==null?void 0:ye.description}}};var ue,me,ge,xe,ve;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} disabled={true} helperText="This field is disabled" />
}`,...(ge=(me=v.parameters)==null?void 0:me.docs)==null?void 0:ge.source},description:{story:"Disabled select",...(ve=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:ve.description}}};var be,we,Ce,fe,Se;b.parameters={...b.parameters,docs:{...(be=b.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['us', 'uk', 'ca', 'au', 'de']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Below Chips - All Visible</Typography>
        <Typography variant="body">
          All selected chips displayed below the input field with wrapping.
        </Typography>
        
        <div style={{
        width: '400px'
      }}>
          <Select label="Select Countries" placeholder="Select countries..." options={countries} value={value} onChange={val => setValue(val as string[])} multiple={true} showChips={true} chipsPosition="below" helperText="All chips visible below field" onChipRemove={removedValue => {}} />
        </div>
        
        <Typography variant="caption" style={{
        color: '#666'
      }}>
          All chips are visible with wrapping. Maximum 3 rows, then scrollable.
        </Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Below Chips Mode:**
- All chips displayed below the input field
- Chips wrap naturally to multiple rows
- Maximum 3 rows (~120px), then scrollable
- Full width matching select field
- Click X on chip to remove selection
        \`
      }
    }
  }
}`,...(Ce=(we=b.parameters)==null?void 0:we.docs)==null?void 0:Ce.source},description:{story:"NEW: Multi-Select with Below Chips (All Visible)",...(Se=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:Se.description}}};var Te,je,ke,Ee,Me;w.parameters={...w.parameters,docs:{...(Te=w.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
      background: '#f0f0f0'
    }}>
        <Typography variant="headingM" weight="semibold">Inline Chips - Manual Limit</Typography>
        <Typography variant="body">
          Use maxInlineChips prop to limit how many chips show inline. Remaining shown as "+N More".
        </Typography>
        
        <div style={{
        width: '600px'
      }}>
          <Select label="Select Fruits" placeholder="Select fruits..." options={fruits} value={value} onChange={val => setValue(val as string[])} multiple={true} showChips={true} chipsPosition="inline" maxInlineChips={3} helperText="Maximum 3 chips shown inline" onMoreChipsClick={() => {
          alert(\`All \${value.length} selections:\\n\${value.join(', ')}\`);
        }} />
        </div>
        
        <Typography variant="caption" style={{
        color: '#666'
      }}>
          Only 3 chips shown due to maxInlineChips=3. Click "+N More" to see all.
        </Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
Use \\\`maxInlineChips\\\` prop to manually limit visible chips:
\\\`\\\`\\\`tsx
<Select
  showChips={true}
  chipsPosition="inline"
  maxInlineChips={3}  // Show max 3 chips
/>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(ke=(je=w.parameters)==null?void 0:je.docs)==null?void 0:ke.source},description:{story:"NEW: Inline Chips with Manual Limit",...(Me=(Ee=w.parameters)==null?void 0:Ee.docs)==null?void 0:Me.description}}};var Be,Ne,Ae,De,Le;C.parameters={...C.parameters,docs:{...(Be=C.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['us', 'uk', 'ca', 'au', 'de', 'fr']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Inline Chips - Wrapping</Typography>
        <Typography variant="body">
          All chips wrap to multiple lines inside the field. Field height grows automatically.
        </Typography>
        
        <div style={{
        width: '600px'
      }}>
          <Select label="Select Countries" options={countries} value={value} onChange={val => setValue(val as string[])} multiple={true} showChips={true} chipsPosition="inline" helperText="Chips wrap to multiple lines" />
        </div>
        
        <Typography variant="caption" style={{
        color: '#666'
      }}>
          Select more countries to see chips wrap. Field height adjusts automatically.
        </Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
**Inline chips with wrapping:**
- All chips displayed inside the field
- Chips wrap to multiple lines automatically
- Field height grows to accommodate all chips
- No manual limit needed
- Perfect for showing all selections
        \`
      }
    }
  }
}`,...(Ae=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source},description:{story:"NEW: Chips Responsive Behavior",...(Le=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Le.description}}};var Ie,Ve,We,Re,Pe;f.parameters={...f.parameters,docs:{...(Ie=f.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['us', 'uk', 'ca']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Chips + Searchable</Typography>
        <Typography variant="body">
          Combine chips display with search functionality.
        </Typography>
        
        <div style={{
        width: '400px'
      }}>
          <Select label="Search Countries" placeholder="Search and select..." options={countries} value={value} onChange={val => setValue(val as string[])} multiple={true} searchable={true} showChips={true} chipsPosition="below" helperText="Search and see selected chips below" />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Chips work seamlessly with searchable dropdown.'
      }
    }
  }
}`,...(We=(Ve=f.parameters)==null?void 0:Ve.docs)==null?void 0:We.source},description:{story:"NEW: Chips with Searchable",...(Pe=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:Pe.description}}};var Oe,Fe,Ue,qe,$e;S.parameters={...S.parameters,docs:{...(Oe=S.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['apple', 'banana', 'orange', 'grape']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '20px'
    }}>
        <Typography variant="headingL" weight="semibold">Chips Display Modes Comparison</Typography>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div>
            <Typography variant="headingM" weight="semibold" style={{
            marginBottom: '12px'
          }}>
              Inline Mode
            </Typography>
            <Typography variant="body" style={{
            marginBottom: '16px',
            color: '#666'
          }}>
              Compact, chips inside field, smart overflow with "+N More"
            </Typography>
            <div style={{
            width: '400px'
          }}>
              <Select label="Inline Chips" options={fruits} value={value} onChange={val => setValue(val as string[])} multiple={true} showChips={true} chipsPosition="inline" />
            </div>
          </div>
          
          <div>
            <Typography variant="headingM" weight="semibold" style={{
            marginBottom: '12px'
          }}>
              Below Mode
            </Typography>
            <Typography variant="body" style={{
            marginBottom: '16px',
            color: '#666'
          }}>
              All chips visible, wrapping below field
            </Typography>
            <div style={{
            width: '400px'
          }}>
              <Select label="Below Chips" options={fruits} value={value} onChange={val => setValue(val as string[])} multiple={true} showChips={true} chipsPosition="below" />
            </div>
          </div>
          
          <div>
            <Typography variant="headingM" weight="semibold" style={{
            marginBottom: '12px'
          }}>
              No Chips (Default)
            </Typography>
            <Typography variant="body" style={{
            marginBottom: '16px',
            color: '#666'
          }}>
              Traditional "N selected" text
            </Typography>
            <div style={{
            width: '400px'
          }}>
              <Select label="No Chips" options={fruits} value={value} onChange={val => setValue(val as string[])} multiple={true} showChips={false} />
            </div>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
**When to use each mode:**

**Inline Chips:**
- ✅ 2-5 selections typically
- ✅ Compact UI needed
- ✅ Limited vertical space

**Below Chips:**
- ✅ Many selections (10+)
- ✅ Need to see all selections
- ✅ Vertical space available

**No Chips (Default):**
- ✅ Very large datasets (100+)
- ✅ Minimal UI
- ✅ Just need count
        \`
      }
    }
  }
}`,...(Ue=(Fe=S.parameters)==null?void 0:Fe.docs)==null?void 0:Ue.source},description:{story:"NEW: Chips Comparison - Inline vs Below",...($e=(qe=S.parameters)==null?void 0:qe.docs)==null?void 0:$e.description}}};var Ze,ze,He,Je,Ke;T.parameters={...T.parameters,docs:{...(Ze=T.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    maxWidth: '800px'
  }}>
      <Typography variant="headingL" weight="semibold">Component Maturity Enhancements</Typography>
      <Typography variant="body">Select now meets enterprise-grade standards with the following enhancements:</Typography>
      
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginTop: '16px'
    }}>
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '12px'
        }}>✅ API & Composition</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• forwardRef support (NEW!)</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• Polymorphic 'as' prop</Typography>
          <Typography variant="caption" style={{
          display: 'block'
        }}>• ...restProps passthrough</Typography>
        </div>
        
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '12px'
        }}>✅ Design Tokens</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• Zero hardcoded colors</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• Zero hardcoded spacing</Typography>
          <Typography variant="caption" style={{
          display: 'block'
        }}>• 100% token usage</Typography>
        </div>
        
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '12px'
        }}>✅ States & Behavior</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• isLoading state</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• isEmpty state</Typography>
          <Typography variant="caption" style={{
          display: 'block'
        }}>• Enhanced keyboard nav</Typography>
        </div>
        
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '12px'
        }}>✅ Event Callbacks</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• onOpen/Close</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• onAfterOpen/Close</Typography>
          <Typography variant="caption" style={{
          display: 'block'
        }}>• onSearchChange</Typography>
        </div>
      </div>
      
      <div style={{
      marginTop: '16px',
      padding: '16px',
      background: '#e3f2fd',
      borderRadius: '8px',
      borderLeft: '4px solid #2196f3'
    }}>
        <Typography variant="body" weight="semibold" style={{
        marginBottom: '8px'
      }}>📊 Total Enhancements</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• 10 new props</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• 7 new event callbacks</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• 4 className override points</Typography>
        <Typography variant="caption" style={{
        display: 'block'
      }}>• Zero breaking changes</Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Summary of all Component Maturity Checklist enhancements applied to Select.'
      }
    }
  }
}`,...(He=(ze=T.parameters)==null?void 0:ze.docs)==null?void 0:He.source},description:{story:"Component Maturity Summary",...(Ke=(Je=T.parameters)==null?void 0:Je.docs)==null?void 0:Ke.description}}};const ga=["Default","LoadingState","EmptyState","EventCallbacks","Required","Searchable","Multiple","Error","Disabled","BelowChips","InlineChipsManualLimit","ChipsResponsive","ChipsWithSearch","ChipsComparison","ComponentMaturity"];export{b as BelowChips,S as ChipsComparison,C as ChipsResponsive,f as ChipsWithSearch,T as ComponentMaturity,d as Default,v as Disabled,h as EmptyState,x as Error,y as EventCallbacks,w as InlineChipsManualLimit,c as LoadingState,g as Multiple,u as Required,m as Searchable,ga as __namedExportsOrder,ma as default};
