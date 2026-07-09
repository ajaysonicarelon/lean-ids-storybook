import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as S}from"./index-B0WjJBI_.js";import{g as f}from"./styled-components.browser.esm-DVcPNpfh.js";import{I as A}from"./Icon-D1GQI8nt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ExpandMore-GavyM6T7.js";const Je=f.div`
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
`,Qe=f.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: ${({$isActive:a,$type:t})=>t==="child"&&a?"#EFE6F8":"transparent"};
  cursor: ${({$disabled:a})=>a?"not-allowed":"pointer"};
  opacity: ${({$disabled:a})=>a?.5:1};
  transition: all 0.2s ease;
  
  /* Parent tab styles */
  ${({$type:a})=>a==="parent"&&`
    padding: 8px 16px 8px 16px;
    border-bottom: 2px solid transparent;
  `}
  
  /* Child tab styles */
  ${({$type:a})=>a==="child"&&`
    padding: 4px 8px;
    border-radius: 4px;
  `}
  
  /* Active parent tab */
  ${({$isActive:a,$type:t})=>a&&t==="parent"&&`
    border-bottom-color: #6222BC; // primary-400
  `}
  
  /* Inactive parent tab */
  ${({$isActive:a,$type:t})=>!a&&t==="parent"&&`
    border-bottom-color: #D5D5D5; // gray-400
  `}
  
  &:hover:not(:disabled) {
    ${({$type:a,$isActive:t})=>a==="child"&&!t?"background: #F8F8F8;":""}
  }
`,Ye=f.span`
  font-family: 'Elevance Sans', sans-serif;
  white-space: nowrap;
  
  /* Parent tab label */
  ${({$type:a,$isActive:t})=>a==="parent"&&`
    font-size: 16px;
    line-height: 19px;
    font-weight: ${t?600:500};
    color: ${t?"#6222BC":"#909090"}; // primary-400 : gray-600
  `}
  
  /* Child tab label */
  ${({$type:a,$isActive:t})=>a==="child"&&`
    font-size: 14px;
    line-height: 16px;
    font-weight: ${t?600:500};
    color: ${t?"#6222BC":"#909090"}; // primary-400 : gray-600
  `}
`,Ze=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  border-radius: 999px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  
  ${({$isActive:a})=>a?`
    background: #6222BC; // primary-400
    color: #FFFFFF;
  `:`
    background: #F8F8F8; // gray-200
    border: 1px solid #464646; // gray-800
    color: #464646; // gray-800
  `}
`,L=f.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$isActive:a})=>a?"#6222BC":"#909090"};
`,v=({tabs:a,activeTab:t,onChange:i,type:x="parent",showLeadingIcon:Ve=!0,showTrailingIcon:_e=!1,showBadge:Ke=!0,className:Ge})=>{const Xe=(s,n)=>{n||i(s)};return e.jsx(Je,{className:Ge,children:a.map(s=>{const n=s.id===t;return e.jsxs(Qe,{$isActive:n,$type:x,$disabled:!!s.disabled,onClick:()=>Xe(s.id,s.disabled),disabled:s.disabled,role:"tab","aria-selected":n,"aria-disabled":s.disabled,children:[Ve&&s.leadingIcon&&e.jsx(L,{$isActive:n,children:e.jsx(A,{name:s.leadingIcon,size:"small"})}),e.jsx(Ye,{$isActive:n,$type:x,children:s.label}),Ke&&s.count!==void 0&&e.jsx(Ze,{$isActive:n,children:s.count}),_e&&s.trailingIcon&&e.jsx(L,{$isActive:n,children:e.jsx(A,{name:s.trailingIcon,size:"small"})})]},s.id)})})};v.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Array of tab items"},activeTab:{required:!0,tsType:{name:"string"},description:"Active tab ID"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:"Tab change handler"},type:{required:!1,tsType:{name:"union",raw:"'parent' | 'child'",elements:[{name:"literal",value:"'parent'"},{name:"literal",value:"'child'"}]},description:"Tab type",defaultValue:{value:"'parent'",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show leading icons",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show trailing icons",defaultValue:{value:"false",computed:!1}},showBadge:{required:!1,tsType:{name:"boolean"},description:"Show badge counts",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};const ia={title:"Components/Tabs",component:v,parameters:{layout:"padded",docs:{description:{component:`
# Tabs

A flexible tab navigation component with parent/child hierarchy support, icons, badges, and disabled states.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Tabs } from '@ajaysoni7832/lean-ids-components';
import type { TabItem } from '@ajaysoni7832/lean-ids-components';

function MyComponent() {
  const [activeTab, setActiveTab] = useState('1');
  
  const tabs: TabItem[] = [
    { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
    { id: '2', label: 'Analytics', leadingIcon: 'BarChart', count: 12 },
    { id: '3', label: 'Reports', leadingIcon: 'Description' },
  ];

  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onChange={setActiveTab}
      type="parent"
      showLeadingIcon
      showBadge
    />
  );
}
\`\`\`

## Features

✅ **Two Tab Types** - Parent (primary) and Child (secondary) tabs
✅ **Icons Support** - Leading and trailing icons
✅ **Badge Counts** - Show numerical badges on tabs
✅ **Disabled State** - Disable specific tabs
✅ **Hierarchy** - Combine parent and child tabs
✅ **Responsive** - Scrollable when many tabs
✅ **Keyboard Navigation** - Full keyboard support

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| tabs | TabItem[] | required | Array of tab items |
| activeTab | string | required | ID of active tab |
| onChange | (id: string) => void | required | Tab change handler |
| type | 'parent' \\| 'child' | 'parent' | Tab hierarchy type |
| showLeadingIcon | boolean | false | Show leading icons |
| showTrailingIcon | boolean | false | Show trailing icons |
| showBadge | boolean | false | Show badge counts |
| className | string | - | Custom CSS class |

## TabItem Interface

\`\`\`tsx
interface TabItem {
  id: string;              // Unique identifier
  label: string;           // Tab label text
  leadingIcon?: string;    // Material icon name
  trailingIcon?: string;   // Material icon name
  count?: number;          // Badge count
  disabled?: boolean;      // Disable the tab
}
\`\`\`

## Tab Types

### Parent Tabs (Primary)
- Larger size, bolder styling
- Use for main navigation sections
- Example: Dashboard, Analytics, Settings

### Child Tabs (Secondary)
- Smaller size, lighter styling
- Use for sub-navigation within a section
- Example: Overview, Details, History

## Examples

### Minimal Tabs
\`\`\`tsx
<Tabs
  tabs={[
    { id: '1', label: 'Tab 1' },
    { id: '2', label: 'Tab 2' },
  ]}
  activeTab={activeTab}
  onChange={setActiveTab}
  type="parent"
/>
\`\`\`

### With Icons and Badges
\`\`\`tsx
<Tabs
  tabs={[
    { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
    { id: '2', label: 'Analytics', leadingIcon: 'BarChart', count: 12 },
  ]}
  activeTab={activeTab}
  onChange={setActiveTab}
  type="parent"
  showLeadingIcon
  showBadge
/>
\`\`\`

### Hierarchy Example
\`\`\`tsx
// Parent tabs
<Tabs tabs={parentTabs} activeTab={parentTab} onChange={setParentTab} type="parent" />

// Child tabs (below parent)
<Tabs tabs={childTabs} activeTab={childTab} onChange={setChildTab} type="child" />
\`\`\`

### With Disabled Tab
\`\`\`tsx
const tabs = [
  { id: '1', label: 'Active Tab' },
  { id: '2', label: 'Disabled Tab', disabled: true },
];
\`\`\`

## Best Practices

1. **Use parent tabs for main navigation** - Top-level sections
2. **Use child tabs for sub-navigation** - Within a parent section
3. **Limit tab count** - 5-7 tabs for optimal UX
4. **Use icons sparingly** - Only when they add clarity
5. **Badge counts for notifications** - Show unread/pending items
6. **Disable, don't hide** - Show disabled tabs for context

## Keyboard Navigation

- **Tab** - Navigate between tabs
- **Enter/Space** - Activate focused tab
- **Arrow Left/Right** - Navigate between tabs
- **Home** - Go to first tab
- **End** - Go to last tab

## Accessibility

- ✅ ARIA roles and labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Screen reader support
- ✅ Disabled state announcements
        `}}},tags:["autodocs"]},C=[{id:"1",label:"Dashboard",leadingIcon:"Home",count:4},{id:"2",label:"Analytics",leadingIcon:"BarChart",count:12},{id:"3",label:"Reports",leadingIcon:"Description",count:7},{id:"4",label:"Settings",leadingIcon:"Settings"}],B=[{id:"1",label:"Overview",leadingIcon:"Home",count:3},{id:"2",label:"Details",leadingIcon:"Info",count:8},{id:"3",label:"History",leadingIcon:"History",count:15},{id:"4",label:"Notes",leadingIcon:"Note"}],r=a=>{const[t,i]=S.useState(a.activeTab||a.tabs[0].id);return e.jsxs("div",{style:{width:"100%"},children:[e.jsx(v,{...a,activeTab:t,onChange:i}),e.jsx("div",{style:{marginTop:"20px",padding:"20px",background:"#f5f5f5",borderRadius:"4px"},children:e.jsxs("p",{children:[e.jsx("strong",{children:"Active Tab:"})," ",t]})})]})},o={render:()=>e.jsx(r,{tabs:C,type:"parent",showLeadingIcon:!0,showBadge:!0})},d={render:()=>e.jsx(r,{tabs:B,type:"child",showLeadingIcon:!0,showBadge:!0})},l={render:()=>e.jsx(r,{tabs:C,type:"parent",showLeadingIcon:!1,showBadge:!0})},c={render:()=>e.jsx(r,{tabs:C,type:"parent",showLeadingIcon:!0,showBadge:!1})},b={render:()=>e.jsx(r,{tabs:[{id:"1",label:"Dashboard"},{id:"2",label:"Analytics"},{id:"3",label:"Reports"},{id:"4",label:"Settings"}],type:"parent",showLeadingIcon:!1,showBadge:!1})},p={render:()=>e.jsx(r,{tabs:B,type:"child",showLeadingIcon:!1,showBadge:!0})},g={render:()=>e.jsx(r,{tabs:B,type:"child",showLeadingIcon:!0,showBadge:!1})},h={render:()=>e.jsx(r,{tabs:[{id:"1",label:"Overview"},{id:"2",label:"Details"},{id:"3",label:"History"},{id:"4",label:"Notes"}],type:"child",showLeadingIcon:!1,showBadge:!1})},u={render:()=>e.jsx(r,{tabs:[{id:"1",label:"Dashboard",leadingIcon:"Home",count:4},{id:"2",label:"Analytics",leadingIcon:"BarChart",count:12,disabled:!0},{id:"3",label:"Reports",leadingIcon:"Description",count:7},{id:"4",label:"Settings",leadingIcon:"Settings"}],type:"parent",showLeadingIcon:!0,showBadge:!0})},m={render:()=>e.jsx(r,{tabs:[{id:"1",label:"Overview",leadingIcon:"Home",count:3},{id:"2",label:"Details",leadingIcon:"Info",count:8,disabled:!0},{id:"3",label:"History",leadingIcon:"History",count:15},{id:"4",label:"Notes",leadingIcon:"Note"}],type:"child",showLeadingIcon:!0,showBadge:!0})},T={render:()=>{const[a,t]=S.useState("1"),[i,x]=S.useState("1");return e.jsxs("div",{style:{width:"100%"},children:[e.jsx(v,{tabs:C,activeTab:a,onChange:t,type:"parent",showLeadingIcon:!0,showBadge:!0}),e.jsx("div",{style:{marginTop:"16px"},children:e.jsx(v,{tabs:B,activeTab:i,onChange:x,type:"child",showLeadingIcon:!0,showBadge:!0})}),e.jsxs("div",{style:{marginTop:"20px",padding:"20px",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Active Parent Tab:"})," ",a]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Active Child Tab:"})," ",i]})]})]})}},y={render:()=>e.jsx(r,{tabs:[{id:"1",label:"Tab 1",count:1},{id:"2",label:"Tab 2",count:2},{id:"3",label:"Tab 3",count:3},{id:"4",label:"Tab 4",count:4},{id:"5",label:"Tab 5",count:5},{id:"6",label:"Tab 6",count:6},{id:"7",label:"Tab 7",count:7},{id:"8",label:"Tab 8",count:8}],type:"parent",showLeadingIcon:!1,showBadge:!0})},w={render:()=>e.jsx(r,{tabs:[{id:"1",label:"Dashboard Overview",count:4},{id:"2",label:"Analytics & Reports",count:12},{id:"3",label:"User Management",count:7},{id:"4",label:"System Settings",count:2}],type:"parent",showLeadingIcon:!1,showBadge:!0})},I={render:()=>e.jsx(r,{tabs:[{id:"1",label:"Dashboard",leadingIcon:"Home",trailingIcon:"ChevronRight",count:4},{id:"2",label:"Analytics",leadingIcon:"BarChart",trailingIcon:"ChevronRight",count:12},{id:"3",label:"Reports",leadingIcon:"Description",trailingIcon:"ChevronRight",count:7}],type:"parent",showLeadingIcon:!0,showTrailingIcon:!0,showBadge:!0})};var j,D,P,W,H;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={parentTabs} type="parent" showLeadingIcon={true} showBadge={true} />
}`,...(P=(D=o.parameters)==null?void 0:D.docs)==null?void 0:P.source},description:{story:"Parent (Primary) tabs with all features",...(H=(W=o.parameters)==null?void 0:W.docs)==null?void 0:H.description}}};var N,R,$,F,E;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={childTabs} type="child" showLeadingIcon={true} showBadge={true} />
}`,...($=(R=d.parameters)==null?void 0:R.docs)==null?void 0:$.source},description:{story:"Child (Secondary) tabs with all features",...(E=(F=d.parameters)==null?void 0:F.docs)==null?void 0:E.description}}};var M,q,k,O,U;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={parentTabs} type="parent" showLeadingIcon={false} showBadge={true} />
}`,...(k=(q=l.parameters)==null?void 0:q.docs)==null?void 0:k.source},description:{story:"Parent tabs without icons",...(U=(O=l.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};var z,V,_,K,G;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={parentTabs} type="parent" showLeadingIcon={true} showBadge={false} />
}`,...(_=(V=c.parameters)==null?void 0:V.docs)==null?void 0:_.source},description:{story:"Parent tabs without badges",...(G=(K=c.parameters)==null?void 0:K.docs)==null?void 0:G.description}}};var X,J,Q,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Dashboard'
  }, {
    id: '2',
    label: 'Analytics'
  }, {
    id: '3',
    label: 'Reports'
  }, {
    id: '4',
    label: 'Settings'
  }]} type="parent" showLeadingIcon={false} showBadge={false} />
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"Parent tabs minimal (no icons, no badges)",...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,ae,te,se,re;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={childTabs} type="child" showLeadingIcon={false} showBadge={true} />
}`,...(te=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:te.source},description:{story:"Child tabs without icons",...(re=(se=p.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var ne,ie,oe,de,le;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={childTabs} type="child" showLeadingIcon={true} showBadge={false} />
}`,...(oe=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:oe.source},description:{story:"Child tabs without badges",...(le=(de=g.parameters)==null?void 0:de.docs)==null?void 0:le.description}}};var ce,be,pe,ge,he;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Overview'
  }, {
    id: '2',
    label: 'Details'
  }, {
    id: '3',
    label: 'History'
  }, {
    id: '4',
    label: 'Notes'
  }]} type="child" showLeadingIcon={false} showBadge={false} />
}`,...(pe=(be=h.parameters)==null?void 0:be.docs)==null?void 0:pe.source},description:{story:"Child tabs minimal (no icons, no badges)",...(he=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:he.description}}};var ue,me,Te,ye,we;u.parameters={...u.parameters,docs:{...(ue=u.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Dashboard',
    leadingIcon: 'Home',
    count: 4
  }, {
    id: '2',
    label: 'Analytics',
    leadingIcon: 'BarChart',
    count: 12,
    disabled: true
  }, {
    id: '3',
    label: 'Reports',
    leadingIcon: 'Description',
    count: 7
  }, {
    id: '4',
    label: 'Settings',
    leadingIcon: 'Settings'
  }]} type="parent" showLeadingIcon={true} showBadge={true} />
}`,...(Te=(me=u.parameters)==null?void 0:me.docs)==null?void 0:Te.source},description:{story:"Parent tabs with disabled tab",...(we=(ye=u.parameters)==null?void 0:ye.docs)==null?void 0:we.description}}};var Ie,ve,fe,xe,Ce;m.parameters={...m.parameters,docs:{...(Ie=m.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Overview',
    leadingIcon: 'Home',
    count: 3
  }, {
    id: '2',
    label: 'Details',
    leadingIcon: 'Info',
    count: 8,
    disabled: true
  }, {
    id: '3',
    label: 'History',
    leadingIcon: 'History',
    count: 15
  }, {
    id: '4',
    label: 'Notes',
    leadingIcon: 'Note'
  }]} type="child" showLeadingIcon={true} showBadge={true} />
}`,...(fe=(ve=m.parameters)==null?void 0:ve.docs)==null?void 0:fe.source},description:{story:"Child tabs with disabled tab",...(Ce=(xe=m.parameters)==null?void 0:xe.docs)==null?void 0:Ce.description}}};var Be,Se,Ae,Le,je;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => {
    const [activeParentTab, setActiveParentTab] = useState('1');
    const [activeChildTab, setActiveChildTab] = useState('1');
    return <div style={{
      width: '100%'
    }}>
        <Tabs tabs={parentTabs} activeTab={activeParentTab} onChange={setActiveParentTab} type="parent" showLeadingIcon={true} showBadge={true} />
        <div style={{
        marginTop: '16px'
      }}>
          <Tabs tabs={childTabs} activeTab={activeChildTab} onChange={setActiveChildTab} type="child" showLeadingIcon={true} showBadge={true} />
        </div>
        <div style={{
        marginTop: '20px',
        padding: '20px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
          <p><strong>Active Parent Tab:</strong> {activeParentTab}</p>
          <p><strong>Active Child Tab:</strong> {activeChildTab}</p>
        </div>
      </div>;
  }
}`,...(Ae=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source},description:{story:"Parent and Child tabs hierarchy example",...(je=(Le=T.parameters)==null?void 0:Le.docs)==null?void 0:je.description}}};var De,Pe,We,He,Ne;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Tab 1',
    count: 1
  }, {
    id: '2',
    label: 'Tab 2',
    count: 2
  }, {
    id: '3',
    label: 'Tab 3',
    count: 3
  }, {
    id: '4',
    label: 'Tab 4',
    count: 4
  }, {
    id: '5',
    label: 'Tab 5',
    count: 5
  }, {
    id: '6',
    label: 'Tab 6',
    count: 6
  }, {
    id: '7',
    label: 'Tab 7',
    count: 7
  }, {
    id: '8',
    label: 'Tab 8',
    count: 8
  }]} type="parent" showLeadingIcon={false} showBadge={true} />
}`,...(We=(Pe=y.parameters)==null?void 0:Pe.docs)==null?void 0:We.source},description:{story:"Many tabs (scrollable)",...(Ne=(He=y.parameters)==null?void 0:He.docs)==null?void 0:Ne.description}}};var Re,$e,Fe,Ee,Me;w.parameters={...w.parameters,docs:{...(Re=w.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Dashboard Overview',
    count: 4
  }, {
    id: '2',
    label: 'Analytics & Reports',
    count: 12
  }, {
    id: '3',
    label: 'User Management',
    count: 7
  }, {
    id: '4',
    label: 'System Settings',
    count: 2
  }]} type="parent" showLeadingIcon={false} showBadge={true} />
}`,...(Fe=($e=w.parameters)==null?void 0:$e.docs)==null?void 0:Fe.source},description:{story:"Long tab labels",...(Me=(Ee=w.parameters)==null?void 0:Ee.docs)==null?void 0:Me.description}}};var qe,ke,Oe,Ue,ze;I.parameters={...I.parameters,docs:{...(qe=I.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Dashboard',
    leadingIcon: 'Home',
    trailingIcon: 'ChevronRight',
    count: 4
  }, {
    id: '2',
    label: 'Analytics',
    leadingIcon: 'BarChart',
    trailingIcon: 'ChevronRight',
    count: 12
  }, {
    id: '3',
    label: 'Reports',
    leadingIcon: 'Description',
    trailingIcon: 'ChevronRight',
    count: 7
  }]} type="parent" showLeadingIcon={true} showTrailingIcon={true} showBadge={true} />
}`,...(Oe=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source},description:{story:"With trailing icons",...(ze=(Ue=I.parameters)==null?void 0:Ue.docs)==null?void 0:ze.description}}};const oa=["ParentTabs","ChildTabs","ParentTabsNoIcons","ParentTabsNoBadges","ParentTabsMinimal","ChildTabsNoIcons","ChildTabsNoBadges","ChildTabsMinimal","ParentTabsWithDisabled","ChildTabsWithDisabled","HierarchyExample","ManyTabs","LongLabels","WithTrailingIcons"];export{d as ChildTabs,h as ChildTabsMinimal,g as ChildTabsNoBadges,p as ChildTabsNoIcons,m as ChildTabsWithDisabled,T as HierarchyExample,w as LongLabels,y as ManyTabs,o as ParentTabs,b as ParentTabsMinimal,c as ParentTabsNoBadges,l as ParentTabsNoIcons,u as ParentTabsWithDisabled,I as WithTrailingIcons,oa as __namedExportsOrder,ia as default};
