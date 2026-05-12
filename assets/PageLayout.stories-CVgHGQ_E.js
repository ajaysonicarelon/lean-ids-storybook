import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{R as v}from"./index-B0WjJBI_.js";import{c as i}from"./styled-components.browser.esm-BIi91Tbq.js";import{T as ie}from"./TopHeader--5A2RIRX.js";import{S as te}from"./SideNavigation-DfBcVL_w.js";import{B as re}from"./Breadcrumb-DEF5sgBW.js";import{F as oe}from"./Footer-CaAF6IQN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./MenuItem-DPngPyes.js";import"./Avatar-yJnDtia8.js";const m=i.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({theme:e})=>e.colors.semantic.background.primary};
  position: relative;
`,S=i(m)`
  padding-top: 64px; // Top header height
`,se=i(m)`
  margin-left: 60px; // Side nav width (collapsed) - use margin for fixed sidebar
`,le=i(m)`
  margin-left: 236px; // Side nav width (pinned/expanded) - use margin for fixed sidebar
`,de=i(m)`
  padding-top: 64px; // Light top header height
  margin-left: 60px; // Side nav width (collapsed) - use margin for fixed sidebar
`,pe=i(m)`
  padding-top: 64px; // Light top header height
  margin-left: 236px; // Side nav width (pinned/expanded) - use margin for fixed sidebar
`,ce=i.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({theme:e})=>e.spacing[7]} ${({theme:e})=>e.spacing[10]}; // 16px 24px
  gap: ${({theme:e})=>e.spacing[7]}; // 16px
`,ue=i.nav`
  display: flex;
  align-items: center;
  gap: 0;
`,me=i.span`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[16]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 19px;
  color: ${({theme:e})=>e.colors.palette.neutral[500]};
  padding: 0 4px;
`;i.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px ${({theme:e})=>e.spacing[10]}; // 9px 24px
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border-top: 1px solid ${({theme:e})=>e.colors.palette.neutral[400]};
  min-height: 40px;
`;i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;const Y=i.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 16px;
  margin: 0;
`;i(Y)`
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
`;i(Y)`
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
`;i.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  color: #6c6c6c;
  
  a {
    color: #0064ef;
    text-decoration: underline;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    
    &:hover {
      text-decoration: none;
    }
  }
`;const ge=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]}; // 8px
  width: 100%;
`,be=i.h1`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 28px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 33px;
  letter-spacing: 1px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]}; // gray-900
  margin: 0;
`,he=i.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[16]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 19px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  margin: 0;
`,J=({title:e,description:g,className:h})=>n.jsxs(ge,{className:h,children:[n.jsx(be,{children:e}),g&&n.jsx(he,{children:g})]});J.__docgenInfo={description:"",methods:[],displayName:"PageHeader",props:{title:{required:!0,tsType:{name:"string"},description:"Page title/heading"},description:{required:!1,tsType:{name:"string"},description:"Short description of the page"},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling"}}};const V=({variant:e,pageTitle:g,pageDescription:h,breadcrumbs:x,children:Z,topHeader:o,sideNav:r,footer:t,className:K})=>{const[f,Q]=v.useState((r==null?void 0:r.isPinned)||!1),X=b=>{var s;Q(b),(s=r==null?void 0:r.onPinChange)==null||s.call(r,b)},ee=e==="topbar-only"?S:e==="sidebar-only"?f?le:se:e==="topbar-sidebar"?f?pe:de:S,ne=()=>n.jsx(ue,{"aria-label":"Breadcrumb",children:x.map((b,s)=>n.jsxs(v.Fragment,{children:[n.jsx(re,{...b}),s<x.length-1&&n.jsx(me,{children:"/"})]},s))}),ae=()=>n.jsx(oe,{lastUpdated:(t==null?void 0:t.lastUpdated)||"Sept 23, 2024",version:(t==null?void 0:t.version)||"1.0",feedbackText:(t==null?void 0:t.feedbackText)||"Send us a Feedback here",feedbackUrl:(t==null?void 0:t.feedbackUrl)||"#"});return n.jsxs(ee,{className:K,children:[(e==="topbar-only"||e==="topbar-sidebar")&&o&&n.jsx(ie,{mode:e==="topbar-only"?"dark":"light",appName:o.appName,menuItems:o.menuItems,userInitials:o.userInitials,userAvatarUrl:o.userAvatarUrl,showLogo:e==="topbar-only"&&o.showLogo!==!1,showAppName:!!o.appName,showMenuItems:!!o.menuItems&&o.menuItems.length>0,showAvatar:!!o.userInitials}),(e==="sidebar-only"||e==="topbar-sidebar")&&r&&n.jsx(te,{state:"collapsed",groups:r.groups,user:r.user,isPinned:f,onPinChange:X}),n.jsxs(ce,{children:[ne(),n.jsx(J,{title:g,description:h}),Z]}),ae()]})};V.__docgenInfo={description:"",methods:[],displayName:"PageLayout",props:{variant:{required:!0,tsType:{name:"union",raw:"'topbar-only' | 'sidebar-only' | 'topbar-sidebar'",elements:[{name:"literal",value:"'topbar-only'"},{name:"literal",value:"'sidebar-only'"},{name:"literal",value:"'topbar-sidebar'"}]},description:`Layout variant - determines which navigation components to show
- 'topbar-only': Only top header (dark mode with logo)
- 'sidebar-only': Only side navigation (expanded with logo)
- 'topbar-sidebar': Both (light top bar without logo, collapsed sidebar with symbol)`},pageTitle:{required:!0,tsType:{name:"string"},description:"Page title"},pageDescription:{required:!1,tsType:{name:"string"},description:"Page description (optional)"},breadcrumbs:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbProps"}],raw:"BreadcrumbProps[]"},description:"Breadcrumb items"},children:{required:!0,tsType:{name:"ReactNode"},description:"Main page content"},topHeader:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  appName?: string;
  menuItems?: TopHeaderMenuItem[];
  userInitials?: string;
  userAvatarUrl?: string;
  showLogo?: boolean; // Only for topbar-only variant
}`,signature:{properties:[{key:"appName",value:{name:"string",required:!1}},{key:"menuItems",value:{name:"Array",elements:[{name:"TopHeaderMenuItem"}],raw:"TopHeaderMenuItem[]",required:!1}},{key:"userInitials",value:{name:"string",required:!1}},{key:"userAvatarUrl",value:{name:"string",required:!1}},{key:"showLogo",value:{name:"boolean",required:!1}}]}},description:"Top header props (for topbar-only and topbar-sidebar variants)"},sideNav:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  groups: NavigationGroup[];
  user?: UserProfile;
  isPinned?: boolean; // Whether sidebar is pinned
  onPinChange?: (isPinned: boolean) => void; // Callback when pin state changes
}`,signature:{properties:[{key:"groups",value:{name:"Array",elements:[{name:"NavigationGroup"}],raw:"NavigationGroup[]",required:!0}},{key:"user",value:{name:"UserProfile",required:!1}},{key:"isPinned",value:{name:"boolean",required:!1}},{key:"onPinChange",value:{name:"signature",type:"function",raw:"(isPinned: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isPinned"}],return:{name:"void"}},required:!1}}]}},description:"Side navigation props (for sidebar-only and topbar-sidebar variants)"},footer:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  lastUpdated?: string;
  version?: string;
  feedbackText?: string;
  feedbackUrl?: string;
}`,signature:{properties:[{key:"lastUpdated",value:{name:"string",required:!1}},{key:"version",value:{name:"string",required:!1}},{key:"feedbackText",value:{name:"string",required:!1}},{key:"feedbackUrl",value:{name:"string",required:!1}}]}},description:"Footer props (optional)"},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling"}}};const a=()=>n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:n.jsx("path",{d:"M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z"})}),Ae={title:"Templates/PageLayout",component:V,parameters:{layout:"fullscreen",docs:{description:{component:`
# Page Layout Templates

Three vanilla page templates for building consistent layouts in Lean IDS applications.

## Variants

### 1. Top Bar Only
- Dark top header with brand logo
- Main content area with breadcrumbs and page header
- Footer at bottom
- **Use for:** Simple applications, dashboards, content-focused pages

### 2. Side Bar Only  
- Expanded side navigation (236px) with brand logo
- Main content area with breadcrumbs and page header
- Footer at bottom
- **Use for:** Navigation-heavy apps, admin panels, multi-section applications

### 3. Top Bar + Side Bar
- Light top bar (NO logo, only product name)
- Collapsed sidebar (60px, icons only) with brand symbol
- Main content area with breadcrumbs and page header
- Footer at bottom
- **Use for:** Complex applications needing both navigations, enterprise apps

## Important Rules

When using **both navigations** (topbar-sidebar):
- ✅ Top bar is LIGHT mode (no dark background)
- ✅ Top bar has NO brand logo (logo is in sidebar)
- ✅ Sidebar is COLLAPSED (60px wide, icons only)
- ✅ Product name stays in top bar

## Grid & Spacing
- **Padding:** 24px horizontal, 16px vertical
- **Gaps:** 16px between sections
- **Top Bar:** 78px (dark), 64px (light)
- **Side Nav:** 236px (expanded), 60px (collapsed)
        `}}},tags:["autodocs"]},y=()=>n.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px",minHeight:"400px"},children:[n.jsx("h2",{style:{marginTop:0},children:"Main Content Area"}),n.jsx("p",{children:"This is where your page content goes. You can add any components here:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Cards and panels"}),n.jsx("li",{children:"Forms and inputs"}),n.jsx("li",{children:"Tables and data grids"}),n.jsx("li",{children:"Charts and visualizations"}),n.jsx("li",{children:"Any custom components"})]}),n.jsx("p",{children:"The content area automatically fills the remaining space between the header/navigation and footer."})]}),l={args:{variant:"topbar-only",pageTitle:"Dashboard",pageDescription:"Overview of your application metrics and data",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Dashboard",isActive:!0}],topHeader:{appName:"Product Name",showLogo:!0,menuItems:[{id:"1",label:"Home",icon:n.jsx(a,{}),active:!0},{id:"2",label:"Reports",icon:n.jsx(a,{}),active:!1},{id:"3",label:"Settings",icon:n.jsx(a,{}),showIndicator:!0}],userInitials:"AS"},footer:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackText:"Send us a Feedback here",feedbackUrl:"/feedback"},children:n.jsx(y,{})}},d={args:{variant:"sidebar-only",pageTitle:"Services",pageDescription:"Manage and configure your services",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Services",isActive:!0}],sideNav:{expanded:!0,groups:[{title:"MAIN MENU",items:[{id:"1",label:"Home",icon:n.jsx(a,{}),active:!1},{id:"2",label:"Services",icon:n.jsx(a,{}),active:!0},{id:"3",label:"About Us",icon:n.jsx(a,{}),showIndicator:!0},{id:"4",label:"Portfolio",icon:n.jsx(a,{}),active:!1}]},{title:"SETTINGS",items:[{id:"5",label:"Profile",icon:n.jsx(a,{}),active:!1},{id:"6",label:"Preferences",icon:n.jsx(a,{}),active:!1}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"}},footer:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackText:"Send us a Feedback here",feedbackUrl:"/feedback"},children:n.jsx(y,{})}},p={args:{variant:"topbar-sidebar",pageTitle:"Settings",pageDescription:"Configure your application preferences and options",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Settings",isActive:!0}],topHeader:{appName:"Product Name",menuItems:[{id:"1",label:"Help",icon:n.jsx(a,{}),active:!1},{id:"2",label:"Notifications",icon:n.jsx(a,{}),showIndicator:!0}],userInitials:"AS"},sideNav:{groups:[{items:[{id:"1",label:"Home",icon:n.jsx(a,{}),active:!1},{id:"2",label:"Dashboard",icon:n.jsx(a,{}),active:!1},{id:"3",label:"Settings",icon:n.jsx(a,{}),active:!0},{id:"4",label:"Reports",icon:n.jsx(a,{}),active:!1},{id:"5",label:"Profile",icon:n.jsx(a,{}),active:!1}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"}},footer:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackText:"Send us a Feedback here",feedbackUrl:"/feedback"},children:n.jsx(y,{})}},c={args:{variant:"topbar-only",pageTitle:"Simple Page",breadcrumbs:[{label:"Home",isActive:!1},{label:"Simple Page",isActive:!0}],topHeader:{appName:"My App",userInitials:"JD"},children:n.jsx("div",{style:{padding:"24px"},children:n.jsx("p",{children:"Minimal page layout with default footer."})})}},u={args:{variant:"sidebar-only",pageTitle:"Dashboard Grid",pageDescription:"Custom grid layout example",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Dashboard",isActive:!0}],sideNav:{groups:[{items:[{id:"1",label:"Dashboard",icon:n.jsx(a,{}),active:!0},{id:"2",label:"Analytics",icon:n.jsx(a,{}),active:!1}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"}},children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px"},children:[n.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[n.jsx("h3",{style:{marginTop:0},children:"Card 1"}),n.jsx("p",{children:"Content for card 1"})]}),n.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[n.jsx("h3",{style:{marginTop:0},children:"Card 2"}),n.jsx("p",{children:"Content for card 2"})]}),n.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[n.jsx("h3",{style:{marginTop:0},children:"Card 3"}),n.jsx("p",{children:"Content for card 3"})]})]})}};var P,T,w,j,I;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'topbar-only',
    pageTitle: 'Dashboard',
    pageDescription: 'Overview of your application metrics and data',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Dashboard',
      isActive: true
    }],
    topHeader: {
      appName: 'Product Name',
      showLogo: true,
      menuItems: [{
        id: '1',
        label: 'Home',
        icon: <IconPlaceholder />,
        active: true
      }, {
        id: '2',
        label: 'Reports',
        icon: <IconPlaceholder />,
        active: false
      }, {
        id: '3',
        label: 'Settings',
        icon: <IconPlaceholder />,
        showIndicator: true
      }],
      userInitials: 'AS'
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
      feedbackText: 'Send us a Feedback here',
      feedbackUrl: '/feedback'
    },
    children: <SampleContent />
  }
}`,...(w=(T=l.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:`Template with **dark top header only**. Includes brand logo, product name, menu items, and avatar.

**Use this template for:**
- Simple applications without side navigation
- Dashboard-style layouts
- Content-focused pages

**Structure:**
- Top Header: 78px height, dark mode, with logo
- Content Area: Breadcrumbs + Page Header + Your Content
- Footer: 40px height`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.description}}};var k,A,C,L,N;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar-only',
    pageTitle: 'Services',
    pageDescription: 'Manage and configure your services',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Services',
      isActive: true
    }],
    sideNav: {
      expanded: true,
      groups: [{
        title: 'MAIN MENU',
        items: [{
          id: '1',
          label: 'Home',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '2',
          label: 'Services',
          icon: <IconPlaceholder />,
          active: true
        }, {
          id: '3',
          label: 'About Us',
          icon: <IconPlaceholder />,
          showIndicator: true
        }, {
          id: '4',
          label: 'Portfolio',
          icon: <IconPlaceholder />,
          active: false
        }]
      }, {
        title: 'SETTINGS',
        items: [{
          id: '5',
          label: 'Profile',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '6',
          label: 'Preferences',
          icon: <IconPlaceholder />,
          active: false
        }]
      }],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID'
      }
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
      feedbackText: 'Send us a Feedback here',
      feedbackUrl: '/feedback'
    },
    children: <SampleContent />
  }
}`,...(C=(A=d.parameters)==null?void 0:A.docs)==null?void 0:C.source},description:{story:`Template with **expanded side navigation only**. Shows brand logo in sidebar with navigation groups.

**Use this template for:**
- Navigation-heavy applications
- Multi-section applications
- Admin panels

**Structure:**
- Side Navigation: 236px width, expanded, with logo
- Content Area: Breadcrumbs + Page Header + Your Content
- Footer: 40px height`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.description}}};var U,D,H,B,q;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'topbar-sidebar',
    pageTitle: 'Settings',
    pageDescription: 'Configure your application preferences and options',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Settings',
      isActive: true
    }],
    topHeader: {
      appName: 'Product Name',
      // NO logo in this variant!
      menuItems: [{
        id: '1',
        label: 'Help',
        icon: <IconPlaceholder />,
        active: false
      }, {
        id: '2',
        label: 'Notifications',
        icon: <IconPlaceholder />,
        showIndicator: true
      }],
      userInitials: 'AS'
    },
    sideNav: {
      // Automatically collapsed in this variant
      groups: [{
        items: [{
          id: '1',
          label: 'Home',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '2',
          label: 'Dashboard',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '3',
          label: 'Settings',
          icon: <IconPlaceholder />,
          active: true
        }, {
          id: '4',
          label: 'Reports',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '5',
          label: 'Profile',
          icon: <IconPlaceholder />,
          active: false
        }]
      }],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID'
      }
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
      feedbackText: 'Send us a Feedback here',
      feedbackUrl: '/feedback'
    },
    children: <SampleContent />
  }
}`,...(H=(D=p.parameters)==null?void 0:D.docs)==null?void 0:H.source},description:{story:`Template with **both top bar and side navigation**.

**IMPORTANT RULES:**
- ✅ Top bar is **LIGHT mode** (no dark background)
- ✅ Top bar has **NO brand logo** (logo is in sidebar)
- ✅ Sidebar is **COLLAPSED** (60px wide, icons only)
- ✅ Product name stays in top bar

**Use this template for:**
- Complex applications needing both navigations
- Enterprise applications
- Multi-level navigation requirements

**Structure:**
- Top Header: 64px height, light mode, NO logo, only product name
- Side Navigation: 60px width, collapsed, icons only
- Content Area: Breadcrumbs + Page Header + Your Content
- Footer: 40px height`,...(q=(B=p.parameters)==null?void 0:B.docs)==null?void 0:q.description}}};var $,M,O,F,E;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'topbar-only',
    pageTitle: 'Simple Page',
    breadcrumbs: [{
      label: 'Home',
      isActive: false
    }, {
      label: 'Simple Page',
      isActive: true
    }],
    topHeader: {
      appName: 'My App',
      userInitials: 'JD'
    },
    children: <div style={{
      padding: '24px'
    }}>
        <p>Minimal page layout with default footer.</p>
      </div>
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:"Minimal example with just the required props and default footer.",...(E=(F=c.parameters)==null?void 0:F.docs)==null?void 0:E.description}}};var R,W,z,G,_;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar-only',
    pageTitle: 'Dashboard Grid',
    pageDescription: 'Custom grid layout example',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Dashboard',
      isActive: true
    }],
    sideNav: {
      groups: [{
        items: [{
          id: '1',
          label: 'Dashboard',
          icon: <IconPlaceholder />,
          active: true
        }, {
          id: '2',
          label: 'Analytics',
          icon: <IconPlaceholder />,
          active: false
        }]
      }],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID'
      }
    },
    children: <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px'
    }}>
        <div style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
          <h3 style={{
          marginTop: 0
        }}>Card 1</h3>
          <p>Content for card 1</p>
        </div>
        <div style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
          <h3 style={{
          marginTop: 0
        }}>Card 2</h3>
          <p>Content for card 2</p>
        </div>
        <div style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
          <h3 style={{
          marginTop: 0
        }}>Card 3</h3>
          <p>Content for card 3</p>
        </div>
      </div>
  }
}`,...(z=(W=u.parameters)==null?void 0:W.docs)==null?void 0:z.source},description:{story:"Example with custom content layout using grid.",...(_=(G=u.parameters)==null?void 0:G.docs)==null?void 0:_.description}}};const Ce=["TopBarOnly","SideBarOnly","TopBarAndSideBar","Minimal","CustomContentLayout"];export{u as CustomContentLayout,c as Minimal,d as SideBarOnly,p as TopBarAndSideBar,l as TopBarOnly,Ce as __namedExportsOrder,Ae as default};
