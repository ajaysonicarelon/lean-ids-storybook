import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as o}from"./index-Bv9Y92EF.js";import{S as l}from"./Select-CDKfHEcu.js";import{T as t}from"./Typography-CidD3oMh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./styled-components.browser.esm-CVW2bgxI.js";import"./Chip--FEJIdFJ.js";import"./Icon-Cw_FlUY4.js";import"./Search-Bpcrs37S.js";import"./createSvgIcon-Ce6eLUkr.js";import"./ExpandMore-Rc_6KUah.js";import"./Close-CtL5j8iM.js";import"./Settings-aYyvLXSG.js";import"./Home-Bococija.js";import"./FieldImportance-D7BkpLTs.js";import"./InputField-BAIr4sa2.js";import"./HelpingText-DBD3feHR.js";import"./Checkbox-D2w4VPJI.js";import"./RadioButton-DHcwHeDp.js";const It={title:"Components/Select",component:l,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"]},r=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"},{value:"cn",label:"China"},{value:"in",label:"India"},{value:"br",label:"Brazil"}],d=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],L=i=>{const[a,s]=o.useState(i.value);return e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(l,{...i,value:a,onChange:s})})},h={render:()=>e.jsx(L,{label:"Country",placeholder:"Select a country",options:r,helperText:"Choose your country"})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Loading State"}),e.jsx(t,{variant:"body",children:"Shows loading indicator while fetching options."}),e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{label:"Countries",options:[],isLoading:!0,placeholder:"Loading..."})})]}),parameters:{docs:{description:{story:"Use `isLoading` prop to show a loading state with hourglass icon."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Empty State"}),e.jsx(t,{variant:"body",children:"Shows empty state when no options available."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsx(l,{label:"Search Results",options:[],isEmpty:!0,emptyMessage:"No results found"}),e.jsx(l,{label:"Recent Items",options:[],isEmpty:!0,emptyMessage:"No recent items"})]})]}),parameters:{docs:{description:{story:"Use `isEmpty` prop with custom `emptyMessage`."}}}},y={render:()=>{const[i,a]=o.useState(""),[s,D]=o.useState([]),n=p=>{D(c=>[...c.slice(-5),`${new Date().toLocaleTimeString()}: ${p}`])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Event Callbacks"}),e.jsx(t,{variant:"body",children:"All available event callbacks demonstrated."}),e.jsx(l,{label:"Country",options:r,value:i,onChange:p=>{a(p),n(`onChange: ${p}`)},onOpen:()=>n("onOpen fired"),onAfterOpen:()=>n("onAfterOpen fired (200ms delay)"),onClose:()=>n("onClose fired"),onAfterClose:()=>n("onAfterClose fired (200ms delay)"),onSearchChange:p=>n(`onSearchChange: ${p}`),onEnter:()=>n("onEnter fired"),onEscape:()=>n("onEscape fired"),searchable:!0,style:{width:"400px"}}),e.jsxs("div",{style:{marginTop:"16px",padding:"12px",background:"#f5f5f5",borderRadius:"4px",maxHeight:"150px",overflow:"auto"},children:[e.jsx(t,{variant:"caption",weight:"semibold",style:{marginBottom:"8px",display:"block"},children:"Event Log:"}),s.length===0?e.jsx(t,{variant:"caption",style:{color:"#666"},children:"No events yet..."}):s.map((p,c)=>e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:p},c))]})]})},parameters:{docs:{description:{story:`
New event callbacks:
- **onOpen**: Dropdown opens
- **onClose**: Dropdown closes
- **onAfterOpen**: After open animation (200ms)
- **onAfterClose**: After close animation (200ms)
- **onSearchChange**: Search query changes
- **onEnter**: Enter key pressed
- **onEscape**: Escape key pressed
        `}}}},g={render:()=>e.jsx(L,{label:"Country",placeholder:"Select a country",options:r,required:!0,helperText:"This field is required"})},x={render:()=>e.jsx(L,{label:"Country",placeholder:"Search countries...",options:r,searchable:!0,helperText:"Type to search"})},v={render:()=>{const[i,a]=o.useState([]);return e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(l,{label:"Favorite Fruits",placeholder:"Select fruits",options:d,value:i,onChange:s=>a(s),multiple:!0,helperText:"Select multiple options"})})}},b={render:()=>e.jsx(L,{label:"Country",placeholder:"Select a country",options:r,error:!0,helperText:"Please select a valid country",required:!0})},w={render:()=>e.jsx(L,{label:"Country",placeholder:"Select a country",options:r,disabled:!0,helperText:"This field is disabled"})},S={render:()=>{const[i,a]=o.useState(["us","uk","ca","au","de"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Below Chips - All Visible"}),e.jsx(t,{variant:"body",children:"All selected chips displayed below the input field with wrapping."}),e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{label:"Select Countries",placeholder:"Select countries...",options:r,value:i,onChange:s=>a(s),multiple:!0,showChips:!0,chipsPosition:"below",helperText:"All chips visible below field",onChipRemove:s=>{}})}),e.jsx(t,{variant:"caption",style:{color:"#666"},children:"All chips are visible with wrapping. Maximum 3 rows, then scrollable."})]})},parameters:{docs:{description:{story:`
**Below Chips Mode:**
- All chips displayed below the input field
- Chips wrap naturally to multiple rows
- Maximum 3 rows (~120px), then scrollable
- Full width matching select field
- Click X on chip to remove selection
        `}}}},f={render:()=>{const[i,a]=o.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px",background:"#f0f0f0"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Inline Chips - Manual Limit"}),e.jsx(t,{variant:"body",children:'Use maxInlineChips prop to limit how many chips show inline. Remaining shown as "+N More".'}),e.jsx("div",{style:{width:"600px"},children:e.jsx(l,{label:"Select Fruits",placeholder:"Select fruits...",options:d,value:i,onChange:s=>a(s),multiple:!0,showChips:!0,chipsPosition:"inline",maxInlineChips:3,helperText:"Maximum 3 chips shown inline",onMoreChipsClick:()=>{alert(`All ${i.length} selections:
${i.join(", ")}`)}})}),e.jsx(t,{variant:"caption",style:{color:"#666"},children:'Only 3 chips shown due to maxInlineChips=3. Click "+N More" to see all.'})]})},parameters:{docs:{description:{story:`
Use \`maxInlineChips\` prop to manually limit visible chips:
\`\`\`tsx
<Select
  showChips={true}
  chipsPosition="inline"
  maxInlineChips={3}  // Show max 3 chips
/>
\`\`\`
        `}}}},C={render:()=>{const[i,a]=o.useState(["us","uk","ca","au","de","fr"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Inline Chips - Wrapping"}),e.jsx(t,{variant:"body",children:"All chips wrap to multiple lines inside the field. Field height grows automatically."}),e.jsx("div",{style:{width:"600px"},children:e.jsx(l,{label:"Select Countries",options:r,value:i,onChange:s=>a(s),multiple:!0,showChips:!0,chipsPosition:"inline",helperText:"Chips wrap to multiple lines"})}),e.jsx(t,{variant:"caption",style:{color:"#666"},children:"Select more countries to see chips wrap. Field height adjusts automatically."})]})},parameters:{docs:{description:{story:`
**Inline chips with wrapping:**
- All chips displayed inside the field
- Chips wrap to multiple lines automatically
- Field height grows to accommodate all chips
- No manual limit needed
- Perfect for showing all selections
        `}}}},T={render:()=>{const[i,a]=o.useState(["us","uk","ca"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Chips + Searchable"}),e.jsx(t,{variant:"body",children:"Combine chips display with search functionality."}),e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{label:"Search Countries",placeholder:"Search and select...",options:r,value:i,onChange:s=>a(s),multiple:!0,searchable:!0,showChips:!0,chipsPosition:"below",helperText:"Search and see selected chips below"})})]})},parameters:{docs:{description:{story:"Chips work seamlessly with searchable dropdown."}}}},j={render:()=>{const[i,a]=o.useState(["apple","banana","orange","grape"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"20px"},children:[e.jsx(t,{variant:"headingL",weight:"semibold",children:"Chips Display Modes Comparison"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(t,{variant:"headingM",weight:"semibold",style:{marginBottom:"12px"},children:"Inline Mode"}),e.jsx(t,{variant:"body",style:{marginBottom:"16px",color:"#666"},children:'Compact, chips inside field, smart overflow with "+N More"'}),e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{label:"Inline Chips",options:d,value:i,onChange:s=>a(s),multiple:!0,showChips:!0,chipsPosition:"inline"})})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"headingM",weight:"semibold",style:{marginBottom:"12px"},children:"Below Mode"}),e.jsx(t,{variant:"body",style:{marginBottom:"16px",color:"#666"},children:"All chips visible, wrapping below field"}),e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{label:"Below Chips",options:d,value:i,onChange:s=>a(s),multiple:!0,showChips:!0,chipsPosition:"below"})})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"headingM",weight:"semibold",style:{marginBottom:"12px"},children:"No Chips (Default)"}),e.jsx(t,{variant:"body",style:{marginBottom:"16px",color:"#666"},children:'Traditional "N selected" text'}),e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{label:"No Chips",options:d,value:i,onChange:s=>a(s),multiple:!0,showChips:!1})})]})]})]})},parameters:{docs:{description:{story:`
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
        `}}}},A={render:()=>{const[i,a]=o.useState(["apple","banana"]),[s,D]=o.useState(["apple","banana"]),[n,p]=o.useState(["apple","banana"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px",maxWidth:"500px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Chip Size Control"}),e.jsxs(t,{variant:"body",children:["Use ",e.jsx("code",{children:"chipSize"})," prop to control the size of chips displayed in multi-select. Accepts ",e.jsx("code",{children:"'small'"}),", ",e.jsx("code",{children:"'medium'"}),", or ",e.jsx("code",{children:"'large'"}),"."]}),e.jsxs("div",{children:[e.jsx(t,{variant:"bodyS",weight:"semibold",style:{marginBottom:"8px"},children:'chipSize="small" (default)'}),e.jsx(l,{label:"Fruits",placeholder:"Select fruits...",options:d,value:i,onChange:c=>a(c),multiple:!0,showChips:!0,chipsPosition:"below",chipSize:"small"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"bodyS",weight:"semibold",style:{marginBottom:"8px"},children:'chipSize="medium"'}),e.jsx(l,{label:"Fruits",placeholder:"Select fruits...",options:d,value:s,onChange:c=>D(c),multiple:!0,showChips:!0,chipsPosition:"below",chipSize:"medium"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"bodyS",weight:"semibold",style:{marginBottom:"8px"},children:'chipSize="large"'}),e.jsx(l,{label:"Fruits",placeholder:"Select fruits...",options:d,value:n,onChange:c=>p(c),multiple:!0,showChips:!0,chipsPosition:"below",chipSize:"large"})]})]})},parameters:{docs:{description:{story:`
**chipSize prop:** Controls the size of chips in the multi-select chip display.

\`\`\`tsx
<Select
  multiple={true}
  showChips={true}
  chipSize="medium"  // 'small' | 'medium' | 'large'
/>
\`\`\`
        `}}}},k={render:()=>{const[i,a]=o.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px",maxWidth:"400px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Select All / Deselect All"}),e.jsxs(t,{variant:"body",children:["The label toggles between ",e.jsx("code",{children:"selectAllLabel"})," and ",e.jsx("code",{children:"deselectAllLabel"})," based on selection state. The checkbox shows an indeterminate state when only some items are selected."]}),e.jsx(l,{label:"Countries",placeholder:"Select countries...",options:r,value:i,onChange:s=>a(s),multiple:!0,showSelectAll:!0,selectAllLabel:"Select All",deselectAllLabel:"Deselect All",showChips:!0,chipsPosition:"below",helperText:`${i.length} of ${r.length} selected`})]})},parameters:{docs:{description:{story:`
**showSelectAll prop:** Adds a "Select All / Deselect All" toggle at the top of the multi-select list.

| State | Checkbox | Label |
|---|---|---|
| Nothing selected | Unchecked | \`selectAllLabel\` ("Select All") |
| Some selected | Indeterminate | \`selectAllLabel\` ("Select All") |
| All selected | Checked | \`deselectAllLabel\` ("Deselect All") |

\`\`\`tsx
<Select
  multiple={true}
  showSelectAll={true}
  selectAllLabel="Select All"      // shown when not all selected
  deselectAllLabel="Deselect All"  // shown when all selected
/>
\`\`\`
        `}}}},M={render:()=>{const[i,a]=o.useState(["ca","jp","br"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Sort Selected First"}),e.jsxs(t,{variant:"body",children:["Use ",e.jsx("code",{children:"sortSelectedFirst"})," to move selected (checked) items to the top of the list. Useful when there are many options and the user needs to quickly review their selections."]}),e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{flex:"1",minWidth:"280px"},children:[e.jsx(t,{variant:"bodyS",weight:"semibold",style:{marginBottom:"8px"},children:"Without sortSelectedFirst"}),e.jsx(l,{label:"Countries (default order)",placeholder:"Select countries...",options:r,value:i,onChange:s=>a(s),multiple:!0,showChips:!0,chipsPosition:"below",helperText:"Selections stay in original order"})]}),e.jsxs("div",{style:{flex:"1",minWidth:"280px"},children:[e.jsx(t,{variant:"bodyS",weight:"semibold",style:{marginBottom:"8px"},children:"With sortSelectedFirst"}),e.jsx(l,{label:"Countries (selected on top)",placeholder:"Select countries...",options:r,value:i,onChange:s=>a(s),multiple:!0,sortSelectedFirst:!0,showChips:!0,chipsPosition:"below",helperText:"Selected items float to top"})]})]}),e.jsx(t,{variant:"caption",style:{color:"#666"},children:"Both selects share the same state. Toggle items in either to see the difference."})]})},parameters:{docs:{description:{story:`
**sortSelectedFirst prop:** Moves selected items to the top of the dropdown list.

\`\`\`tsx
<Select
  multiple={true}
  sortSelectedFirst={true}
/>
\`\`\`

Works with \`showSelectAll\` and \`searchable\` too — selected items float above unselected ones.
        `}}}},E={render:()=>{const[i,a]=o.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px",maxWidth:"480px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Multi-Select — All Enhancements"}),e.jsxs(t,{variant:"body",children:["Combines ",e.jsx("code",{children:"showSelectAll"}),", ",e.jsx("code",{children:"sortSelectedFirst"}),", and ",e.jsx("code",{children:'chipSize="medium"'}),"."]}),e.jsx(l,{label:"Team Members",placeholder:"Choose members...",options:r,value:i,onChange:s=>a(s),multiple:!0,showSelectAll:!0,sortSelectedFirst:!0,showChips:!0,chipsPosition:"below",chipSize:"medium",searchable:!0,helperText:i.length>0?`${i.length} member(s) selected`:"Select team members"})]})},parameters:{docs:{description:{story:'\nCombines all three new multi-select features:\n- `showSelectAll` — "Select All" at top with indeterminate state\n- `sortSelectedFirst` — selected items float to top  \n- `chipSize="medium"` — medium-sized chips below the field\n        '}}}},B={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px",maxWidth:"800px"},children:[e.jsx(t,{variant:"headingL",weight:"semibold",children:"Component Maturity Enhancements"}),e.jsx(t,{variant:"body",children:"Select now meets enterprise-grade standards with the following enhancements:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginTop:"16px"},children:[e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ API & Composition"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• forwardRef support (NEW!)"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• Polymorphic 'as' prop"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• ...restProps passthrough"})]}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ Design Tokens"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• Zero hardcoded colors"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• Zero hardcoded spacing"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• 100% token usage"})]}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ States & Behavior"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• isLoading state"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• isEmpty state"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• Enhanced keyboard nav"})]}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ Event Callbacks"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• onOpen/Close"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• onAfterOpen/Close"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• onSearchChange"})]})]}),e.jsxs("div",{style:{marginTop:"16px",padding:"16px",background:"#e3f2fd",borderRadius:"8px",borderLeft:"4px solid #2196f3"},children:[e.jsx(t,{variant:"body",weight:"semibold",style:{marginBottom:"8px"},children:"📊 Total Enhancements"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 10 new props"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 7 new event callbacks"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 4 className override points"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• Zero breaking changes"})]})]}),parameters:{docs:{description:{story:"Summary of all Component Maturity Checklist enhancements applied to Select."}}}};var V,N,W,F,P;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} helperText="Choose your country" />
}`,...(W=(N=h.parameters)==null?void 0:N.docs)==null?void 0:W.source},description:{story:"Default select with single selection",...(P=(F=h.parameters)==null?void 0:F.docs)==null?void 0:P.description}}};var z,I,R,U,O;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(I=u.parameters)==null?void 0:I.docs)==null?void 0:R.source},description:{story:"NEW: Loading State",...(O=(U=u.parameters)==null?void 0:U.docs)==null?void 0:O.description}}};var q,$,Z,H,J;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Z=($=m.parameters)==null?void 0:$.docs)==null?void 0:Z.source},description:{story:"NEW: Empty State",...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};var K,G,X,_,Q;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(G=y.parameters)==null?void 0:G.docs)==null?void 0:X.source},description:{story:"NEW: Event Callbacks",...(Q=(_=y.parameters)==null?void 0:_.docs)==null?void 0:Q.description}}};var Y,ee,te,ie,se;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} required={true} helperText="This field is required" />
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Select with required field indicator",...(se=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:se.description}}};var ae,le,oe,re,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Search countries..." options={countries} searchable={true} helperText="Type to search" />
}`,...(oe=(le=x.parameters)==null?void 0:le.docs)==null?void 0:oe.source},description:{story:"Select with searchable dropdown",...(ne=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ne.description}}};var pe,ce,de,he,ue;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: '100%',
      maxWidth: '400px'
    }}>
        <Select label="Favorite Fruits" placeholder="Select fruits" options={fruits} value={value} onChange={val => setValue(val as string[])} multiple={true} helperText="Select multiple options" />
      </div>;
  }
}`,...(de=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Multiple selection with checkboxes",...(ue=(he=v.parameters)==null?void 0:he.docs)==null?void 0:ue.description}}};var me,ye,ge,xe,ve;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} error={true} helperText="Please select a valid country" required={true} />
}`,...(ge=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:ge.source},description:{story:"Select with error state",...(ve=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:ve.description}}};var be,we,Se,fe,Ce;w.parameters={...w.parameters,docs:{...(be=w.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} disabled={true} helperText="This field is disabled" />
}`,...(Se=(we=w.parameters)==null?void 0:we.docs)==null?void 0:Se.source},description:{story:"Disabled select",...(Ce=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:Ce.description}}};var Te,je,Ae,ke,Me;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ae=(je=S.parameters)==null?void 0:je.docs)==null?void 0:Ae.source},description:{story:"NEW: Multi-Select with Below Chips (All Visible)",...(Me=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:Me.description}}};var Ee,Be,Le,De,Ve;f.parameters={...f.parameters,docs:{...(Ee=f.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Le=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:Le.source},description:{story:"NEW: Inline Chips with Manual Limit",...(Ve=(De=f.parameters)==null?void 0:De.docs)==null?void 0:Ve.description}}};var Ne,We,Fe,Pe,ze;C.parameters={...C.parameters,docs:{...(Ne=C.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Fe=(We=C.parameters)==null?void 0:We.docs)==null?void 0:Fe.source},description:{story:"NEW: Chips Responsive Behavior",...(ze=(Pe=C.parameters)==null?void 0:Pe.docs)==null?void 0:ze.description}}};var Ie,Re,Ue,Oe,qe;T.parameters={...T.parameters,docs:{...(Ie=T.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ue=(Re=T.parameters)==null?void 0:Re.docs)==null?void 0:Ue.source},description:{story:"NEW: Chips with Searchable",...(qe=(Oe=T.parameters)==null?void 0:Oe.docs)==null?void 0:qe.description}}};var $e,Ze,He,Je,Ke;j.parameters={...j.parameters,docs:{...($e=j.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(He=(Ze=j.parameters)==null?void 0:Ze.docs)==null?void 0:He.source},description:{story:"NEW: Chips Comparison - Inline vs Below",...(Ke=(Je=j.parameters)==null?void 0:Je.docs)==null?void 0:Ke.description}}};var Ge,Xe,_e,Qe,Ye;A.parameters={...A.parameters,docs:{...(Ge=A.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => {
    const [smallValue, setSmallValue] = useState<string[]>(['apple', 'banana']);
    const [mediumValue, setMediumValue] = useState<string[]>(['apple', 'banana']);
    const [largeValue, setLargeValue] = useState<string[]>(['apple', 'banana']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '20px',
      maxWidth: '500px'
    }}>
        <Typography variant="headingM" weight="semibold">Chip Size Control</Typography>
        <Typography variant="body">
          Use <code>chipSize</code> prop to control the size of chips displayed in multi-select.
          Accepts <code>'small'</code>, <code>'medium'</code>, or <code>'large'</code>.
        </Typography>

        <div>
          <Typography variant="bodyS" weight="semibold" style={{
          marginBottom: '8px'
        }}>chipSize="small" (default)</Typography>
          <Select label="Fruits" placeholder="Select fruits..." options={fruits} value={smallValue} onChange={val => setSmallValue(val as string[])} multiple={true} showChips={true} chipsPosition="below" chipSize="small" />
        </div>

        <div>
          <Typography variant="bodyS" weight="semibold" style={{
          marginBottom: '8px'
        }}>chipSize="medium"</Typography>
          <Select label="Fruits" placeholder="Select fruits..." options={fruits} value={mediumValue} onChange={val => setMediumValue(val as string[])} multiple={true} showChips={true} chipsPosition="below" chipSize="medium" />
        </div>

        <div>
          <Typography variant="bodyS" weight="semibold" style={{
          marginBottom: '8px'
        }}>chipSize="large"</Typography>
          <Select label="Fruits" placeholder="Select fruits..." options={fruits} value={largeValue} onChange={val => setLargeValue(val as string[])} multiple={true} showChips={true} chipsPosition="below" chipSize="large" />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
**chipSize prop:** Controls the size of chips in the multi-select chip display.

\\\`\\\`\\\`tsx
<Select
  multiple={true}
  showChips={true}
  chipSize="medium"  // 'small' | 'medium' | 'large'
/>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(_e=(Xe=A.parameters)==null?void 0:Xe.docs)==null?void 0:_e.source},description:{story:`NEW: Chip Size Control
Demonstrates the chipSize prop to change the size of chips in multi-select`,...(Ye=(Qe=A.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.description}}};var et,tt,it,st,at;k.parameters={...k.parameters,docs:{...(et=k.parameters)==null?void 0:et.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
      maxWidth: '400px'
    }}>
        <Typography variant="headingM" weight="semibold">Select All / Deselect All</Typography>
        <Typography variant="body">
          The label toggles between <code>selectAllLabel</code> and <code>deselectAllLabel</code> based on
          selection state. The checkbox shows an indeterminate state when only some items are selected.
        </Typography>

        <Select label="Countries" placeholder="Select countries..." options={countries} value={value} onChange={val => setValue(val as string[])} multiple={true} showSelectAll={true} selectAllLabel="Select All" deselectAllLabel="Deselect All" showChips={true} chipsPosition="below" helperText={\`\${value.length} of \${countries.length} selected\`} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
**showSelectAll prop:** Adds a "Select All / Deselect All" toggle at the top of the multi-select list.

| State | Checkbox | Label |
|---|---|---|
| Nothing selected | Unchecked | \\\`selectAllLabel\\\` ("Select All") |
| Some selected | Indeterminate | \\\`selectAllLabel\\\` ("Select All") |
| All selected | Checked | \\\`deselectAllLabel\\\` ("Deselect All") |

\\\`\\\`\\\`tsx
<Select
  multiple={true}
  showSelectAll={true}
  selectAllLabel="Select All"      // shown when not all selected
  deselectAllLabel="Deselect All"  // shown when all selected
/>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(it=(tt=k.parameters)==null?void 0:tt.docs)==null?void 0:it.source},description:{story:`NEW: Select All option in multi-select dropdown
Demonstrates showSelectAll, selectAllLabel, and deselectAllLabel props`,...(at=(st=k.parameters)==null?void 0:st.docs)==null?void 0:at.description}}};var lt,ot,rt,nt,pt;M.parameters={...M.parameters,docs:{...(lt=M.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['ca', 'jp', 'br']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Sort Selected First</Typography>
        <Typography variant="body">
          Use <code>sortSelectedFirst</code> to move selected (checked) items to the top of the list.
          Useful when there are many options and the user needs to quickly review their selections.
        </Typography>

        <div style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
          <div style={{
          flex: '1',
          minWidth: '280px'
        }}>
            <Typography variant="bodyS" weight="semibold" style={{
            marginBottom: '8px'
          }}>Without sortSelectedFirst</Typography>
            <Select label="Countries (default order)" placeholder="Select countries..." options={countries} value={value} onChange={val => setValue(val as string[])} multiple={true} showChips={true} chipsPosition="below" helperText="Selections stay in original order" />
          </div>

          <div style={{
          flex: '1',
          minWidth: '280px'
        }}>
            <Typography variant="bodyS" weight="semibold" style={{
            marginBottom: '8px'
          }}>With sortSelectedFirst</Typography>
            <Select label="Countries (selected on top)" placeholder="Select countries..." options={countries} value={value} onChange={val => setValue(val as string[])} multiple={true} sortSelectedFirst={true} showChips={true} chipsPosition="below" helperText="Selected items float to top" />
          </div>
        </div>

        <Typography variant="caption" style={{
        color: '#666'
      }}>
          Both selects share the same state. Toggle items in either to see the difference.
        </Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
**sortSelectedFirst prop:** Moves selected items to the top of the dropdown list.

\\\`\\\`\\\`tsx
<Select
  multiple={true}
  sortSelectedFirst={true}
/>
\\\`\\\`\\\`

Works with \\\`showSelectAll\\\` and \\\`searchable\\\` too — selected items float above unselected ones.
        \`
      }
    }
  }
}`,...(rt=(ot=M.parameters)==null?void 0:ot.docs)==null?void 0:rt.source},description:{story:`NEW: Sort Selected First in multi-select dropdown
Demonstrates sortSelectedFirst prop`,...(pt=(nt=M.parameters)==null?void 0:nt.docs)==null?void 0:pt.description}}};var ct,dt,ht,ut,mt;E.parameters={...E.parameters,docs:{...(ct=E.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
      maxWidth: '480px'
    }}>
        <Typography variant="headingM" weight="semibold">Multi-Select — All Enhancements</Typography>
        <Typography variant="body">
          Combines <code>showSelectAll</code>, <code>sortSelectedFirst</code>, and <code>chipSize="medium"</code>.
        </Typography>

        <Select label="Team Members" placeholder="Choose members..." options={countries} value={value} onChange={val => setValue(val as string[])} multiple={true} showSelectAll={true} sortSelectedFirst={true} showChips={true} chipsPosition="below" chipSize="medium" searchable={true} helperText={value.length > 0 ? \`\${value.length} member(s) selected\` : 'Select team members'} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
Combines all three new multi-select features:
- \\\`showSelectAll\\\` — "Select All" at top with indeterminate state
- \\\`sortSelectedFirst\\\` — selected items float to top  
- \\\`chipSize="medium"\\\` — medium-sized chips below the field
        \`
      }
    }
  }
}`,...(ht=(dt=E.parameters)==null?void 0:dt.docs)==null?void 0:ht.source},description:{story:"NEW: All three new props combined",...(mt=(ut=E.parameters)==null?void 0:ut.docs)==null?void 0:mt.description}}};var yt,gt,xt,vt,bt;B.parameters={...B.parameters,docs:{...(yt=B.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(xt=(gt=B.parameters)==null?void 0:gt.docs)==null?void 0:xt.source},description:{story:"Component Maturity Summary",...(bt=(vt=B.parameters)==null?void 0:vt.docs)==null?void 0:bt.description}}};const Rt=["Default","LoadingState","EmptyState","EventCallbacks","Required","Searchable","Multiple","Error","Disabled","BelowChips","InlineChipsManualLimit","ChipsResponsive","ChipsWithSearch","ChipsComparison","ChipSizes","SelectAll","SortSelectedFirst","MultiSelectEnhanced","ComponentMaturity"];export{S as BelowChips,A as ChipSizes,j as ChipsComparison,C as ChipsResponsive,T as ChipsWithSearch,B as ComponentMaturity,h as Default,w as Disabled,m as EmptyState,b as Error,y as EventCallbacks,f as InlineChipsManualLimit,u as LoadingState,E as MultiSelectEnhanced,v as Multiple,g as Required,x as Searchable,k as SelectAll,M as SortSelectedFirst,Rt as __namedExportsOrder,It as default};
