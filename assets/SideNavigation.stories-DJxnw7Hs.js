import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{S as X}from"./SideNavigation-Aa177t46.js";import{I as i}from"./Icon-BytZhcyh.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./Brand-D2_m1Vnv.js";import"./MenuItem-qyRq59Mo.js";import"./Avatar-BtdRwqdw.js";const ce={title:"Components/SideNavigation",component:X,parameters:{layout:"fullscreen",docs:{description:{component:`A vertical navigation sidebar with flexible expand/collapse behavior.

**Dimensions:**
- **Collapsed:** 60px width - shows only icons
- **Expanded:** 236px width - shows icons, labels, and group titles
- **Height:** 100vh (fixed viewport height)

**Positioning:**
- Uses \`position: sticky\` with \`top: 0\`
- Stays at viewport height while content scrolls
- Consistent height across all content lengths

**Expand Modes:**
- **hover** (default): Expands on mouse hover
- **button**: Expands only via toggle button click
- **both**: Expands on hover OR button click

**Features:**
- Multiple navigation groups with titles (visible when expanded)
- Active state indicators & notification badges
- **Pin Button:** Locks sidebar in expanded state (visible on hover, right of logo)
- **Toggle Button:** Circular button on right edge for manual expand/collapse
  - Sizes: small (24px) or large (32px, default)
  - Positions: top or bottom with adjustable offset
  - Custom icon support
  - Half inside/half outside sidebar
- User profile section with avatar & click handler
- Mouse enter/leave events on menu items
- Smooth transitions
- Scrollable content area within fixed viewport height

## Usage

### Basic Example

\`\`\`tsx
import { SideNavigation } from '@lean-ids/components';
import { Icon } from '@lean-ids/components';

function App() {
  const navigationGroups = [
    {
      title: 'MAIN MENU',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="Home" size="medium" />,
          active: true,
          onClick: () => console.log('Home clicked')
        },
        {
          id: 'about',
          label: 'About',
          icon: <Icon name="Info" size="medium" />,
          onClick: () => console.log('About clicked')
        }
      ]
    }
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID'
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
    />
  );
}
\`\`\`

### With Pin State Control

\`\`\`tsx
import { SideNavigation } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [isPinned, setIsPinned] = useState(false);

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => setIsPinned(pinned)}
    />
  );
}
\`\`\`

### With Notification Indicators

\`\`\`tsx
const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'messages',
        label: 'Messages',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true, // Shows notification dot
        onClick: () => console.log('Messages clicked')
      }
    ]
  }
];
\`\`\``}}},tags:["autodocs"],argTypes:{groups:{description:"Array of navigation groups with menu items",control:"object"},user:{description:"User profile information (initials, name, subtitle, avatarUrl)",control:"object"},isPinned:{control:"boolean",description:"Whether sidebar is pinned (locked in expanded state)"},onPinChange:{description:"Callback when pin state changes",action:"pinChanged"},expandMode:{control:"select",options:["hover","button","both"],description:"How the sidebar expands: hover (default), button only, or both"},toggleButtonPosition:{control:"select",options:["top","bottom"],description:"Position of the toggle button"},toggleButtonOffset:{control:"number",description:"Offset from the position (in pixels)"},toggleButtonSize:{control:"select",options:["small","large"],description:"Size of the toggle button: small (24px) or large (32px)"},toggleButtonIcon:{description:"Custom icon component for toggle button",control:!1},customLogoUrl:{control:"text",description:"URL for custom logo image"},logoAlignment:{control:"select",options:["left","center","right"],description:"Alignment of the logo"},logoPadding:{control:"text",description:"Custom padding for the logo (CSS padding value)"},className:{description:"Additional CSS class",control:"text"}}},f=[{title:"MAIN MENU",items:[{id:"home",label:"Home",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0},{id:"about",label:"About Us",icon:e.jsx(i,{name:"Info",size:"medium"}),showIndicator:!0},{id:"services",label:"Services",icon:e.jsx(i,{name:"Settings",size:"medium"})},{id:"blog",label:"Blog",icon:e.jsx(i,{name:"Edit",size:"medium"})},{id:"portfolio",label:"Portfolio",icon:e.jsx(i,{name:"Visibility",size:"medium"})}]},{title:"SETTINGS",items:[{id:"profile",label:"Profile",icon:e.jsx(i,{name:"AccountCircle",size:"medium"})},{id:"preferences",label:"Preferences",icon:e.jsx(i,{name:"Tune",size:"medium"})}]}],n={initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"},s={args:{groups:f,user:n},parameters:{layout:"fullscreen",docs:{description:{story:"Default collapsed sidebar. Hover to expand temporarily, or click the pin button to lock it in expanded state."},story:{inline:!0,iframeHeight:700},source:{transform:(Y,Q)=>{const{args:o}=Q,t=[];return o.isPinned&&t.push("isPinned={true}"),o.expandMode&&o.expandMode!=="hover"&&t.push(`expandMode="${o.expandMode}"`),o.toggleButtonPosition&&t.push(`toggleButtonPosition="${o.toggleButtonPosition}"`),o.toggleButtonOffset&&t.push(`toggleButtonOffset={${o.toggleButtonOffset}}`),o.toggleButtonSize&&o.toggleButtonSize!=="large"&&t.push(`toggleButtonSize="${o.toggleButtonSize}"`),o.customLogoUrl&&t.push(`customLogoUrl="${o.customLogoUrl}"`),o.logoAlignment&&o.logoAlignment!=="left"&&t.push(`logoAlignment="${o.logoAlignment}"`),o.logoPadding&&t.push(`logoPadding="${o.logoPadding}"`),`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'about',
        label: 'About Us',
        icon: <Icon name="Info" size="medium" />,
      },
    ],
  },
];

const userProfile = {
  initials: 'AS',
  name: 'Ajay Soni',
  subtitle: 'Employee ID',
};

<SideNavigation 
  groups={navigationGroups} 
  user={userProfile}${t.length>0?`
  `+t.join(`
  `)+`
`:""}
/>`}}}}},a={args:{groups:[{title:"MAIN MENU",items:[{id:"home",label:"Home",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0},{id:"messages",label:"Messages",icon:e.jsx(i,{name:"Info",size:"medium"}),showIndicator:!0},{id:"alerts",label:"Alerts",icon:e.jsx(i,{name:"Warning",size:"medium"}),showIndicator:!0}]}],user:n},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar with notification indicators on menu items."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'messages',
        label: 'Messages',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true, // Shows notification dot
      },
      {
        id: 'alerts',
        label: 'Alerts',
        icon: <Icon name="Warning" size="medium" />,
        showIndicator: true, // Shows notification dot
      },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />`}}}},r={args:{groups:f},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar without user profile section."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'about',
        label: 'About Us',
        icon: <Icon name="Info" size="medium" />,
      },
    ],
  },
];

// No user prop provided
<SideNavigation groups={navigationGroups} />`}}}},l={args:{groups:[{title:"NAVIGATION",items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0,onClick:()=>alert("Dashboard clicked!")},{id:"analytics",label:"Analytics",icon:e.jsx(i,{name:"Visibility",size:"medium"}),onClick:()=>alert("Analytics clicked!")},{id:"settings",label:"Settings",icon:e.jsx(i,{name:"Settings",size:"medium"}),onClick:()=>alert("Settings clicked!")}]}],user:n},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar with click handlers on menu items. Click any item to see the handler in action."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'NAVIGATION',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Icon name="Home" size="medium" />,
        active: true,
        onClick: () => navigate('/dashboard'),
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />,
        onClick: () => navigate('/analytics'),
      },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />`}}}},c={args:{groups:[{title:"MAIN",items:[{id:"home",label:"Home",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0},{id:"dashboard",label:"Dashboard",icon:e.jsx(i,{name:"Visibility",size:"medium"})}]},{title:"MANAGEMENT",items:[{id:"users",label:"Users",icon:e.jsx(i,{name:"AccountCircle",size:"medium"})},{id:"settings",label:"Settings",icon:e.jsx(i,{name:"Settings",size:"medium"})}]},{title:"SUPPORT",items:[{id:"help",label:"Help Center",icon:e.jsx(i,{name:"Info",size:"medium"})},{id:"feedback",label:"Feedback",icon:e.jsx(i,{name:"Edit",size:"medium"})}]}],user:n},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar with multiple navigation groups separated by dividers."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN',
    items: [
      { id: 'home', label: 'Home', icon: <Icon name="Home" size="medium" />, active: true },
      { id: 'dashboard', label: 'Dashboard', icon: <Icon name="Visibility" size="medium" /> },
    ],
  },
  {
    title: 'MANAGEMENT',
    items: [
      { id: 'users', label: 'Users', icon: <Icon name="AccountCircle" size="medium" /> },
      { id: 'settings', label: 'Settings', icon: <Icon name="Settings" size="medium" /> },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />`}}}},m={args:{groups:[{title:"PAGES",items:[{id:"home",label:"Home",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!1},{id:"about",label:"About",icon:e.jsx(i,{name:"Info",size:"medium"}),active:!0},{id:"contact",label:"Contact",icon:e.jsx(i,{name:"Edit",size:"medium"}),active:!1}]}],user:n},parameters:{layout:"fullscreen",docs:{description:{story:'Sidebar showing active state on the "About" menu item. Active items have a blue left border and background.'},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';
import { useState } from 'react';

function Navigation() {
  const [activeId, setActiveId] = useState('about');

  const navigationGroups = [
    {
      title: 'PAGES',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="Home" size="medium" />,
          active: activeId === 'home',
          onClick: () => setActiveId('home'),
        },
        {
          id: 'about',
          label: 'About',
          icon: <Icon name="Info" size="medium" />,
          active: activeId === 'about',
          onClick: () => setActiveId('about'),
        },
      ],
    },
  ];

  return <SideNavigation groups={navigationGroups} user={userProfile} />;
}`}}}},d={args:{groups:f,user:n,isPinned:!0},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar in pinned state (locked at 236px width). The pin button is filled when pinned."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [isPinned, setIsPinned] = useState(false);

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => {
        setIsPinned(pinned);
        console.log('Sidebar pinned:', pinned);
      }}
    />
  );
}`}}}},u={args:{groups:f,user:{initials:"JD",name:"John Doe",subtitle:"Admin User",avatarUrl:"https://i.pravatar.cc/150?img=12"}},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar with user profile including an avatar image."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation } from '@lean-ids/components';

const userProfile = {
  initials: 'JD',
  name: 'John Doe',
  subtitle: 'Admin User',
  avatarUrl: 'https://example.com/avatar.jpg', // Optional
};

<SideNavigation groups={navigationGroups} user={userProfile} />`}}}},p={args:{groups:[{title:"DASHBOARD",items:[{id:"overview",label:"Overview",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0},{id:"analytics",label:"Analytics",icon:e.jsx(i,{name:"Visibility",size:"medium"})},{id:"reports",label:"Reports",icon:e.jsx(i,{name:"Edit",size:"medium"})}]},{title:"CONTENT",items:[{id:"posts",label:"Posts",icon:e.jsx(i,{name:"Edit",size:"medium"})},{id:"pages",label:"Pages",icon:e.jsx(i,{name:"Info",size:"medium"})},{id:"media",label:"Media",icon:e.jsx(i,{name:"Visibility",size:"medium"})},{id:"comments",label:"Comments",icon:e.jsx(i,{name:"Info",size:"medium"})}]},{title:"USERS",items:[{id:"all-users",label:"All Users",icon:e.jsx(i,{name:"AccountCircle",size:"medium"})},{id:"add-user",label:"Add New",icon:e.jsx(i,{name:"Add",size:"medium"})},{id:"roles",label:"Roles",icon:e.jsx(i,{name:"Settings",size:"medium"})}]},{title:"SETTINGS",items:[{id:"general",label:"General",icon:e.jsx(i,{name:"Settings",size:"medium"})},{id:"security",label:"Security",icon:e.jsx(i,{name:"Lock",size:"medium"})},{id:"notifications",label:"Notifications",icon:e.jsx(i,{name:"Info",size:"medium"})},{id:"integrations",label:"Integrations",icon:e.jsx(i,{name:"Settings",size:"medium"})}]},{title:"TOOLS",items:[{id:"import",label:"Import",icon:e.jsx(i,{name:"Upload",size:"medium"})},{id:"export",label:"Export",icon:e.jsx(i,{name:"Download",size:"medium"})},{id:"backup",label:"Backup",icon:e.jsx(i,{name:"Save",size:"medium"})}]}],user:n},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar with many menu items demonstrating automatic scrolling when content overflows. The navigation area becomes scrollable while the user profile remains fixed at the bottom."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'DASHBOARD',
    items: [
      { id: 'overview', label: 'Overview', icon: <Icon name="Home" size="medium" />, active: true },
      { id: 'analytics', label: 'Analytics', icon: <Icon name="Visibility" size="medium" /> },
      { id: 'reports', label: 'Reports', icon: <Icon name="Edit" size="medium" /> },
    ],
  },
  {
    title: 'CONTENT',
    items: [
      { id: 'posts', label: 'Posts', icon: <Icon name="Edit" size="medium" /> },
      { id: 'pages', label: 'Pages', icon: <Icon name="Info" size="medium" /> },
      { id: 'media', label: 'Media', icon: <Icon name="Visibility" size="medium" /> },
      { id: 'comments', label: 'Comments', icon: <Icon name="Info" size="medium" /> },
    ],
  },
  // ... more groups
];

<SideNavigation groups={navigationGroups} user={userProfile} />`}}}},g={args:{groups:[{title:"DASHBOARD",items:[{id:"overview",label:"Overview",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0},{id:"analytics",label:"Analytics",icon:e.jsx(i,{name:"Visibility",size:"medium"})}]},{title:"CONTENT",items:[{id:"posts",label:"Posts",icon:e.jsx(i,{name:"Edit",size:"medium"}),showIndicator:!0},{id:"media",label:"Media",icon:e.jsx(i,{name:"Visibility",size:"medium"})},{id:"comments",label:"Comments",icon:e.jsx(i,{name:"Info",size:"medium"}),showIndicator:!0}]},{title:"SETTINGS",items:[{id:"profile",label:"Profile",icon:e.jsx(i,{name:"AccountCircle",size:"medium"})},{id:"preferences",label:"Preferences",icon:e.jsx(i,{name:"Settings",size:"medium"})}]}],user:{...n,onClick:()=>console.log("User profile clicked")},expandMode:"both",toggleButtonPosition:"top",toggleButtonSize:"large",customLogoUrl:void 0,logoAlignment:"center"},parameters:{layout:"fullscreen",docs:{description:{story:"Complete example showing ALL features: multiple groups, active states, notification indicators, user profile with click handler, expand modes (hover + button), toggle button, custom logo support, and mouse events."},story:{inline:!0,iframeHeight:700},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [activeId, setActiveId] = useState('overview');
  const [isPinned, setIsPinned] = useState(false);

  const navigationGroups = [
    {
      title: 'DASHBOARD',
      items: [
        {
          id: 'overview',
          label: 'Overview',
          icon: <Icon name="Home" size="medium" />,
          active: activeId === 'overview',
          onClick: () => setActiveId('overview'),
          onMouseEnter: () => console.log('Hovered: Overview'),
          onMouseLeave: () => console.log('Left: Overview'),
        },
        {
          id: 'analytics',
          label: 'Analytics',
          icon: <Icon name="Visibility" size="medium" />,
          active: activeId === 'analytics',
          onClick: () => setActiveId('analytics'),
        },
      ],
    },
    {
      title: 'CONTENT',
      items: [
        {
          id: 'posts',
          label: 'Posts',
          icon: <Icon name="Edit" size="medium" />,
          showIndicator: true, // Shows notification dot
          active: activeId === 'posts',
          onClick: () => setActiveId('posts'),
        },
        {
          id: 'media',
          label: 'Media',
          icon: <Icon name="Visibility" size="medium" />,
          active: activeId === 'media',
          onClick: () => setActiveId('media'),
        },
        {
          id: 'comments',
          label: 'Comments',
          icon: <Icon name="Info" size="medium" />,
          showIndicator: true,
          active: activeId === 'comments',
          onClick: () => setActiveId('comments'),
        },
      ],
    },
    {
      title: 'SETTINGS',
      items: [
        {
          id: 'profile',
          label: 'Profile',
          icon: <Icon name="AccountCircle" size="medium" />,
          active: activeId === 'profile',
          onClick: () => setActiveId('profile'),
        },
        {
          id: 'preferences',
          label: 'Preferences',
          icon: <Icon name="Settings" size="medium" />,
          active: activeId === 'preferences',
          onClick: () => setActiveId('preferences'),
        },
      ],
    },
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID',
    avatarUrl: 'https://example.com/avatar.jpg', // Optional
    onClick: () => console.log('User profile clicked!'),
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => setIsPinned(pinned)}
      
      // Expand mode: 'hover', 'button', or 'both'
      expandMode="both"
      
      // Toggle button configuration
      toggleButtonPosition="top"
      toggleButtonSize="large"
      toggleButtonOffset={24}
      
      // Custom logo (optional)
      customLogoUrl="/path/to/your/logo.png"
      logoAlignment="center"
      logoPadding="16px"
    />
  );
}`}}}},b={args:{groups:[{title:"MAIN MENU",items:[{id:"home",label:"Home",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0},{id:"products",label:"Products",icon:e.jsx(i,{name:"ShoppingCart",size:"medium"}),children:[{id:"products-all",label:"All Products"},{id:"products-categories",label:"Categories",children:[{id:"cat-electronics",label:"Electronics"},{id:"cat-clothing",label:"Clothing"},{id:"cat-food",label:"Food & Beverages"}]},{id:"products-featured",label:"Featured Items"}]},{id:"orders",label:"Orders",icon:e.jsx(i,{name:"Receipt",size:"medium"}),showIndicator:!0,children:[{id:"orders-pending",label:"Pending Orders"},{id:"orders-completed",label:"Completed Orders"},{id:"orders-cancelled",label:"Cancelled Orders"}]}]},{title:"REPORTS",items:[{id:"analytics",label:"Analytics",icon:e.jsx(i,{name:"Visibility",size:"medium"}),children:[{id:"analytics-sales",label:"Sales Report"},{id:"analytics-traffic",label:"Traffic Report",children:[{id:"traffic-daily",label:"Daily Traffic"},{id:"traffic-monthly",label:"Monthly Traffic"}]},{id:"analytics-customers",label:"Customer Report"}]}]},{title:"SETTINGS",items:[{id:"settings",label:"Settings",icon:e.jsx(i,{name:"Settings",size:"medium"}),children:[{id:"settings-general",label:"General"},{id:"settings-security",label:"Security"},{id:"settings-notifications",label:"Notifications"}]}]}],user:n},parameters:{layout:"fullscreen",docs:{description:{story:"Example showing nested menu functionality. Hover over menu items with arrows to see nested submenus appear on the right. Supports multiple levels of nesting."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

function App() {
  const navigationGroups = [
    {
      title: 'MAIN MENU',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="Home" size="medium" />,
          active: true,
        },
        {
          id: 'products',
          label: 'Products',
          icon: <Icon name="ShoppingCart" size="medium" />,
          children: [
            {
              id: 'products-all',
              label: 'All Products',
            },
            {
              id: 'products-categories',
              label: 'Categories',
              children: [
                {
                  id: 'cat-electronics',
                  label: 'Electronics',
                },
                {
                  id: 'cat-clothing',
                  label: 'Clothing',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID',
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
    />
  );
}`}}}};var v,h,I;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    groups: sampleGroups,
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default collapsed sidebar. Hover to expand temporarily, or click the pin button to lock it in expanded state.'
      },
      story: {
        inline: true,
        iframeHeight: 700
      },
      source: {
        transform: (_code: string, storyContext: any) => {
          const {
            args
          } = storyContext;
          const props = [];
          if (args.isPinned) props.push('isPinned={true}');
          if (args.expandMode && args.expandMode !== 'hover') props.push(\`expandMode="\${args.expandMode}"\`);
          if (args.toggleButtonPosition) props.push(\`toggleButtonPosition="\${args.toggleButtonPosition}"\`);
          if (args.toggleButtonOffset) props.push(\`toggleButtonOffset={\${args.toggleButtonOffset}}\`);
          if (args.toggleButtonSize && args.toggleButtonSize !== 'large') props.push(\`toggleButtonSize="\${args.toggleButtonSize}"\`);
          if (args.customLogoUrl) props.push(\`customLogoUrl="\${args.customLogoUrl}"\`);
          if (args.logoAlignment && args.logoAlignment !== 'left') props.push(\`logoAlignment="\${args.logoAlignment}"\`);
          if (args.logoPadding) props.push(\`logoPadding="\${args.logoPadding}"\`);
          const propsString = props.length > 0 ? '\\n  ' + props.join('\\n  ') + '\\n' : '';
          return \`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'about',
        label: 'About Us',
        icon: <Icon name="Info" size="medium" />,
      },
    ],
  },
];

const userProfile = {
  initials: 'AS',
  name: 'Ajay Soni',
  subtitle: 'Employee ID',
};

<SideNavigation 
  groups={navigationGroups} 
  user={userProfile}\${propsString}
/>\`;
        }
      }
    }
  }
}`,...(I=(h=s.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var S,y,A;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'MAIN MENU',
      items: [{
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true
      }, {
        id: 'messages',
        label: 'Messages',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true
      }, {
        id: 'alerts',
        label: 'Alerts',
        icon: <Icon name="Warning" size="medium" />,
        showIndicator: true
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with notification indicators on menu items.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'messages',
        label: 'Messages',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true, // Shows notification dot
      },
      {
        id: 'alerts',
        label: 'Alerts',
        icon: <Icon name="Warning" size="medium" />,
        showIndicator: true, // Shows notification dot
      },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />\`
      }
    }
  }
}`,...(A=(y=a.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var z,N,P;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    groups: sampleGroups
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar without user profile section.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'about',
        label: 'About Us',
        icon: <Icon name="Info" size="medium" />,
      },
    ],
  },
];

// No user prop provided
<SideNavigation groups={navigationGroups} />\`
      }
    }
  }
}`,...(P=(N=r.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var x,C,w;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'NAVIGATION',
      items: [{
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Icon name="Home" size="medium" />,
        active: true,
        onClick: () => alert('Dashboard clicked!')
      }, {
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />,
        onClick: () => alert('Analytics clicked!')
      }, {
        id: 'settings',
        label: 'Settings',
        icon: <Icon name="Settings" size="medium" />,
        onClick: () => alert('Settings clicked!')
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with click handlers on menu items. Click any item to see the handler in action.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'NAVIGATION',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Icon name="Home" size="medium" />,
        active: true,
        onClick: () => navigate('/dashboard'),
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />,
        onClick: () => navigate('/analytics'),
      },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />\`
      }
    }
  }
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var H,E,M;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'MAIN',
      items: [{
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true
      }, {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Icon name="Visibility" size="medium" />
      }]
    }, {
      title: 'MANAGEMENT',
      items: [{
        id: 'users',
        label: 'Users',
        icon: <Icon name="AccountCircle" size="medium" />
      }, {
        id: 'settings',
        label: 'Settings',
        icon: <Icon name="Settings" size="medium" />
      }]
    }, {
      title: 'SUPPORT',
      items: [{
        id: 'help',
        label: 'Help Center',
        icon: <Icon name="Info" size="medium" />
      }, {
        id: 'feedback',
        label: 'Feedback',
        icon: <Icon name="Edit" size="medium" />
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with multiple navigation groups separated by dividers.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN',
    items: [
      { id: 'home', label: 'Home', icon: <Icon name="Home" size="medium" />, active: true },
      { id: 'dashboard', label: 'Dashboard', icon: <Icon name="Visibility" size="medium" /> },
    ],
  },
  {
    title: 'MANAGEMENT',
    items: [
      { id: 'users', label: 'Users', icon: <Icon name="AccountCircle" size="medium" /> },
      { id: 'settings', label: 'Settings', icon: <Icon name="Settings" size="medium" /> },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />\`
      }
    }
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var k,G,U;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'PAGES',
      items: [{
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: false
      }, {
        id: 'about',
        label: 'About',
        icon: <Icon name="Info" size="medium" />,
        active: true
      }, {
        id: 'contact',
        label: 'Contact',
        icon: <Icon name="Edit" size="medium" />,
        active: false
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar showing active state on the "About" menu item. Active items have a blue left border and background.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';
import { useState } from 'react';

function Navigation() {
  const [activeId, setActiveId] = useState('about');

  const navigationGroups = [
    {
      title: 'PAGES',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="Home" size="medium" />,
          active: activeId === 'home',
          onClick: () => setActiveId('home'),
        },
        {
          id: 'about',
          label: 'About',
          icon: <Icon name="Info" size="medium" />,
          active: activeId === 'about',
          onClick: () => setActiveId('about'),
        },
      ],
    },
  ];

  return <SideNavigation groups={navigationGroups} user={userProfile} />;
}\`
      }
    }
  }
}`,...(U=(G=m.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var j,O,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    groups: sampleGroups,
    user: sampleUser,
    isPinned: true
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar in pinned state (locked at 236px width). The pin button is filled when pinned.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [isPinned, setIsPinned] = useState(false);

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => {
        setIsPinned(pinned);
        console.log('Sidebar pinned:', pinned);
      }}
    />
  );
}\`
      }
    }
  }
}`,...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var D,B,R;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    groups: sampleGroups,
    user: {
      initials: 'JD',
      name: 'John Doe',
      subtitle: 'Admin User',
      avatarUrl: 'https://i.pravatar.cc/150?img=12'
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with user profile including an avatar image.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation } from '@lean-ids/components';

const userProfile = {
  initials: 'JD',
  name: 'John Doe',
  subtitle: 'Admin User',
  avatarUrl: 'https://example.com/avatar.jpg', // Optional
};

<SideNavigation groups={navigationGroups} user={userProfile} />\`
      }
    }
  }
}`,...(R=(B=u.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var V,L,W;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'DASHBOARD',
      items: [{
        id: 'overview',
        label: 'Overview',
        icon: <Icon name="Home" size="medium" />,
        active: true
      }, {
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />
      }, {
        id: 'reports',
        label: 'Reports',
        icon: <Icon name="Edit" size="medium" />
      }]
    }, {
      title: 'CONTENT',
      items: [{
        id: 'posts',
        label: 'Posts',
        icon: <Icon name="Edit" size="medium" />
      }, {
        id: 'pages',
        label: 'Pages',
        icon: <Icon name="Info" size="medium" />
      }, {
        id: 'media',
        label: 'Media',
        icon: <Icon name="Visibility" size="medium" />
      }, {
        id: 'comments',
        label: 'Comments',
        icon: <Icon name="Info" size="medium" />
      }]
    }, {
      title: 'USERS',
      items: [{
        id: 'all-users',
        label: 'All Users',
        icon: <Icon name="AccountCircle" size="medium" />
      }, {
        id: 'add-user',
        label: 'Add New',
        icon: <Icon name="Add" size="medium" />
      }, {
        id: 'roles',
        label: 'Roles',
        icon: <Icon name="Settings" size="medium" />
      }]
    }, {
      title: 'SETTINGS',
      items: [{
        id: 'general',
        label: 'General',
        icon: <Icon name="Settings" size="medium" />
      }, {
        id: 'security',
        label: 'Security',
        icon: <Icon name="Lock" size="medium" />
      }, {
        id: 'notifications',
        label: 'Notifications',
        icon: <Icon name="Info" size="medium" />
      }, {
        id: 'integrations',
        label: 'Integrations',
        icon: <Icon name="Settings" size="medium" />
      }]
    }, {
      title: 'TOOLS',
      items: [{
        id: 'import',
        label: 'Import',
        icon: <Icon name="Upload" size="medium" />
      }, {
        id: 'export',
        label: 'Export',
        icon: <Icon name="Download" size="medium" />
      }, {
        id: 'backup',
        label: 'Backup',
        icon: <Icon name="Save" size="medium" />
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with many menu items demonstrating automatic scrolling when content overflows. The navigation area becomes scrollable while the user profile remains fixed at the bottom.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'DASHBOARD',
    items: [
      { id: 'overview', label: 'Overview', icon: <Icon name="Home" size="medium" />, active: true },
      { id: 'analytics', label: 'Analytics', icon: <Icon name="Visibility" size="medium" /> },
      { id: 'reports', label: 'Reports', icon: <Icon name="Edit" size="medium" /> },
    ],
  },
  {
    title: 'CONTENT',
    items: [
      { id: 'posts', label: 'Posts', icon: <Icon name="Edit" size="medium" /> },
      { id: 'pages', label: 'Pages', icon: <Icon name="Info" size="medium" /> },
      { id: 'media', label: 'Media', icon: <Icon name="Visibility" size="medium" /> },
      { id: 'comments', label: 'Comments', icon: <Icon name="Info" size="medium" /> },
    ],
  },
  // ... more groups
];

<SideNavigation groups={navigationGroups} user={userProfile} />\`
      }
    }
  }
}`,...(W=(L=p.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var $,J,F;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'DASHBOARD',
      items: [{
        id: 'overview',
        label: 'Overview',
        icon: <Icon name="Home" size="medium" />,
        active: true
      }, {
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />
      }]
    }, {
      title: 'CONTENT',
      items: [{
        id: 'posts',
        label: 'Posts',
        icon: <Icon name="Edit" size="medium" />,
        showIndicator: true
      }, {
        id: 'media',
        label: 'Media',
        icon: <Icon name="Visibility" size="medium" />
      }, {
        id: 'comments',
        label: 'Comments',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true
      }]
    }, {
      title: 'SETTINGS',
      items: [{
        id: 'profile',
        label: 'Profile',
        icon: <Icon name="AccountCircle" size="medium" />
      }, {
        id: 'preferences',
        label: 'Preferences',
        icon: <Icon name="Settings" size="medium" />
      }]
    }],
    user: {
      ...sampleUser,
      onClick: () => console.log('User profile clicked')
    },
    expandMode: 'both',
    toggleButtonPosition: 'top',
    toggleButtonSize: 'large',
    customLogoUrl: undefined,
    logoAlignment: 'center'
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete example showing ALL features: multiple groups, active states, notification indicators, user profile with click handler, expand modes (hover + button), toggle button, custom logo support, and mouse events.'
      },
      story: {
        inline: true,
        iframeHeight: 700
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [activeId, setActiveId] = useState('overview');
  const [isPinned, setIsPinned] = useState(false);

  const navigationGroups = [
    {
      title: 'DASHBOARD',
      items: [
        {
          id: 'overview',
          label: 'Overview',
          icon: <Icon name="Home" size="medium" />,
          active: activeId === 'overview',
          onClick: () => setActiveId('overview'),
          onMouseEnter: () => console.log('Hovered: Overview'),
          onMouseLeave: () => console.log('Left: Overview'),
        },
        {
          id: 'analytics',
          label: 'Analytics',
          icon: <Icon name="Visibility" size="medium" />,
          active: activeId === 'analytics',
          onClick: () => setActiveId('analytics'),
        },
      ],
    },
    {
      title: 'CONTENT',
      items: [
        {
          id: 'posts',
          label: 'Posts',
          icon: <Icon name="Edit" size="medium" />,
          showIndicator: true, // Shows notification dot
          active: activeId === 'posts',
          onClick: () => setActiveId('posts'),
        },
        {
          id: 'media',
          label: 'Media',
          icon: <Icon name="Visibility" size="medium" />,
          active: activeId === 'media',
          onClick: () => setActiveId('media'),
        },
        {
          id: 'comments',
          label: 'Comments',
          icon: <Icon name="Info" size="medium" />,
          showIndicator: true,
          active: activeId === 'comments',
          onClick: () => setActiveId('comments'),
        },
      ],
    },
    {
      title: 'SETTINGS',
      items: [
        {
          id: 'profile',
          label: 'Profile',
          icon: <Icon name="AccountCircle" size="medium" />,
          active: activeId === 'profile',
          onClick: () => setActiveId('profile'),
        },
        {
          id: 'preferences',
          label: 'Preferences',
          icon: <Icon name="Settings" size="medium" />,
          active: activeId === 'preferences',
          onClick: () => setActiveId('preferences'),
        },
      ],
    },
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID',
    avatarUrl: 'https://example.com/avatar.jpg', // Optional
    onClick: () => console.log('User profile clicked!'),
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => setIsPinned(pinned)}
      
      // Expand mode: 'hover', 'button', or 'both'
      expandMode="both"
      
      // Toggle button configuration
      toggleButtonPosition="top"
      toggleButtonSize="large"
      toggleButtonOffset={24}
      
      // Custom logo (optional)
      customLogoUrl="/path/to/your/logo.png"
      logoAlignment="center"
      logoPadding="16px"
    />
  );
}\`
      }
    }
  }
}`,...(F=(J=g.parameters)==null?void 0:J.docs)==null?void 0:F.source}}};var _,q,K;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'MAIN MENU',
      items: [{
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true
      }, {
        id: 'products',
        label: 'Products',
        icon: <Icon name="ShoppingCart" size="medium" />,
        children: [{
          id: 'products-all',
          label: 'All Products'
        }, {
          id: 'products-categories',
          label: 'Categories',
          children: [{
            id: 'cat-electronics',
            label: 'Electronics'
          }, {
            id: 'cat-clothing',
            label: 'Clothing'
          }, {
            id: 'cat-food',
            label: 'Food & Beverages'
          }]
        }, {
          id: 'products-featured',
          label: 'Featured Items'
        }]
      }, {
        id: 'orders',
        label: 'Orders',
        icon: <Icon name="Receipt" size="medium" />,
        showIndicator: true,
        children: [{
          id: 'orders-pending',
          label: 'Pending Orders'
        }, {
          id: 'orders-completed',
          label: 'Completed Orders'
        }, {
          id: 'orders-cancelled',
          label: 'Cancelled Orders'
        }]
      }]
    }, {
      title: 'REPORTS',
      items: [{
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />,
        children: [{
          id: 'analytics-sales',
          label: 'Sales Report'
        }, {
          id: 'analytics-traffic',
          label: 'Traffic Report',
          children: [{
            id: 'traffic-daily',
            label: 'Daily Traffic'
          }, {
            id: 'traffic-monthly',
            label: 'Monthly Traffic'
          }]
        }, {
          id: 'analytics-customers',
          label: 'Customer Report'
        }]
      }]
    }, {
      title: 'SETTINGS',
      items: [{
        id: 'settings',
        label: 'Settings',
        icon: <Icon name="Settings" size="medium" />,
        children: [{
          id: 'settings-general',
          label: 'General'
        }, {
          id: 'settings-security',
          label: 'Security'
        }, {
          id: 'settings-notifications',
          label: 'Notifications'
        }]
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Example showing nested menu functionality. Hover over menu items with arrows to see nested submenus appear on the right. Supports multiple levels of nesting.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

function App() {
  const navigationGroups = [
    {
      title: 'MAIN MENU',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="Home" size="medium" />,
          active: true,
        },
        {
          id: 'products',
          label: 'Products',
          icon: <Icon name="ShoppingCart" size="medium" />,
          children: [
            {
              id: 'products-all',
              label: 'All Products',
            },
            {
              id: 'products-categories',
              label: 'Categories',
              children: [
                {
                  id: 'cat-electronics',
                  label: 'Electronics',
                },
                {
                  id: 'cat-clothing',
                  label: 'Clothing',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID',
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
    />
  );
}\`
      }
    }
  }
}`,...(K=(q=b.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};const me=["Default","WithNotifications","WithoutUser","WithClickHandlers","MultipleGroups","WithActiveState","PinnedState","WithAvatarImage","WithManyItems","CompleteExample","WithNestedMenus"];export{g as CompleteExample,s as Default,c as MultipleGroups,d as PinnedState,m as WithActiveState,u as WithAvatarImage,l as WithClickHandlers,p as WithManyItems,b as WithNestedMenus,a as WithNotifications,r as WithoutUser,me as __namedExportsOrder,ce as default};
