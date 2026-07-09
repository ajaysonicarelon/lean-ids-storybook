import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as l}from"./index-DL7Mpk60.js";import{M as c}from"./index-BdJW3kKQ.js";import"./index-B0WjJBI_.js";import"./iframe-X3o-TrYz.js";import"./index-Clv5cdFl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function i(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"About/Updates & Changelog"}),`
`,e.jsx("script",{children:`
  // Mark updates as viewed when user visits this page
  if (typeof window !== 'undefined') {
    const currentVersion = '1.7.1';
    const lastViewedVersion = localStorage.getItem('lean-ids-last-viewed-version');
    
    // Mark as viewed
    localStorage.setItem('lean-ids-last-viewed-version', currentVersion);
    
    // Show notification if there's a new version
    if (lastViewedVersion && lastViewedVersion !== currentVersion) {
      console.log('New Lean IDS version available:', currentVersion);
    }
  }
`}),`
`,e.jsx("style",{children:`
    .version-container {
      margin: 2rem 0;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
    }

    .version-header {
      background: #5e35b1;
      color: white;
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .version-number {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .version-date {
      font-size: 0.875rem;
      opacity: 0.9;
    }

    .version-content {
      padding: 1.5rem;
      background: #fafafa;
    }

    .change-section {
      margin-bottom: 1.5rem;
    }

    .change-section:last-child {
      margin-bottom: 0;
    }

    .change-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .change-icon {
      width: 20px;
      height: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }

    .change-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .change-item {
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
      line-height: 1.6;
    }

    .change-item:before {
      content: "•";
      position: absolute;
      left: 0.5rem;
      color: #666;
    }

    .change-item.critical {
      background: #fff3cd;
      border-left: 4px solid #ff9800;
      padding-left: 1.5rem;
      margin: 0.5rem 0;
      border-radius: 4px;
    }

    .change-item.critical:before {
      content: "⚠️ ";
      left: 0.25rem;
    }

    .change-item.breaking {
      background: #ffebee;
      border-left: 4px solid #f44336;
      padding-left: 1.5rem;
      margin: 0.5rem 0;
      border-radius: 4px;
    }

    .change-item.breaking:before {
      content: "🚨 ";
      left: 0.25rem;
    }

    .change-item code {
      background: #e0e0e0;
      padding: 0.125rem 0.375rem;
      border-radius: 3px;
      font-size: 0.875rem;
      font-family: 'Monaco', 'Courier New', monospace;
    }

    .migration-note {
      background: #e3f2fd;
      border-left: 4px solid #2196f3;
      padding: 1rem;
      margin-top: 1rem;
      border-radius: 4px;
    }

    .migration-note strong {
      display: block;
      margin-bottom: 0.5rem;
      color: #1976d2;
    }

    .stats-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      margin: 2rem 0;
    }

    .stat-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      color: #5e35b1;
    }

    .stat-label {
      font-size: 0.875rem;
      color: #666;
      margin-top: 0.25rem;
    }

    .npm-badge {
      display: inline-block;
      margin: 1rem 0;
    }

    .new-update-banner {
      background: #fff3cd;
      border-left: 4px solid #ff9800;
      padding: 1rem 1.5rem;
      margin-bottom: 2rem;
      border-radius: 4px;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .new-update-banner .icon {
      font-size: 1.5rem;
    }

    .new-update-banner .content {
      flex: 1;
    }

    .new-update-banner .title {
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: #f57c00;
    }

    .new-update-banner .message {
      font-size: 0.875rem;
      color: #666;
    }
  `}),`
`,e.jsx("div",{id:"new-update-notification",style:{display:"none"},children:e.jsxs("div",{className:"new-update-banner",children:[e.jsx("div",{className:"icon",children:"🔔"}),e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"title",children:"New Update Available!"}),e.jsx("div",{className:"message",children:"Version 1.7.1 has been released. Check out the latest changes below."})]})]})}),`
`,e.jsx("script",{dangerouslySetInnerHTML:{__html:`
  (function() {
    if (typeof window !== 'undefined') {
      const currentVersion = '1.7.1';
      const lastViewedVersion = localStorage.getItem('lean-ids-last-viewed-version');
      
      // Show banner if user hasn't seen this version
      if (!lastViewedVersion || lastViewedVersion !== currentVersion) {
        const banner = document.getElementById('new-update-notification');
        if (banner) {
          banner.style.display = 'block';
        }
      }
      
      // Mark as viewed when page loads
      localStorage.setItem('lean-ids-last-viewed-version', currentVersion);
    }
  })();
`}}),`
`,e.jsx(s.h1,{id:"-lean-ids-updates--changelog",children:"📦 Lean IDS Updates & Changelog"}),`
`,e.jsxs("div",{className:"npm-badge",children:[e.jsx("img",{src:"https://img.shields.io/npm/v/@ajaysoni7832/lean-ids-components.svg",alt:"npm version"}),e.jsx("img",{src:"https://img.shields.io/npm/dm/@ajaysoni7832/lean-ids-components.svg",alt:"npm downloads",style:{marginLeft:"8px"}}),e.jsx("img",{src:"https://img.shields.io/npm/l/@ajaysoni7832/lean-ids-components.svg",alt:"license",style:{marginLeft:"8px"}})]}),`
`,e.jsx(s.p,{children:"Stay up to date with the latest changes, improvements, and fixes to the Lean IDS design system."}),`
`,e.jsxs("div",{className:"stats-container",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-number",children:"1.7.1"}),e.jsx("div",{className:"stat-label",children:"Current Version"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-number",children:"50+"}),e.jsx("div",{className:"stat-label",children:"Components"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-number",children:"100%"}),e.jsx("div",{className:"stat-label",children:"TypeScript"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-number",children:"WCAG 2.1"}),e.jsx("div",{className:"stat-label",children:"Accessible"})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-current-version",children:"🚀 Current Version"}),`
`,e.jsxs("div",{className:"version-container",children:[e.jsxs("div",{className:"version-header",children:[e.jsx("div",{className:"version-number",children:"v1.7.1"}),e.jsx("div",{className:"version-date",children:"July 8, 2026"})]}),e.jsxs("div",{className:"version-content",children:[e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon",children:"✨"}),`
New Components`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"AdvancedDataTable"})," component with nested columns, column locking, global search, and side panel controls"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"TableSidePanel"})," component for table detail views with collapsible/expandable overlay"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"Accordion"})," component with expand/collapse functionality"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"DateTimePickers"})," suite: ",e.jsx("code",{children:"TimePickerInput"}),", ",e.jsx("code",{children:"DateTimePickerInput"}),", and ",e.jsx("code",{children:"DateTimeRangePickerInput"})]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"TableSubHeader"})," component for column search filters"]})})]})]}),e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon",children:"🔧"}),`
Advanced Table Features`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Nested Columns (Sub-Headers):"})," Support for parent-child column hierarchies with expandable/collapsible groups"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Column Locking:"})," Lock up to 3 columns with sticky positioning and cascading parent-child lock behavior"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Global Search:"})," Search across all columns with real-time filtering in the toolbar"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Column Search Filters:"})," Individual search bars for each column with toggle on/off via side panel"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Side Panel Controls:"})," Alternative to modal settings with vertical panel for columns and filters"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Drag & Drop Reordering:"})," Reorder both parent and child columns with visual feedback"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Empty State:"}),' "No data available" message when search/filters yield no results']})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Configurable Columns:"})," ",e.jsx("code",{children:"initialColumns"})," prop with ",e.jsx("code",{children:"getNestedColumnConfigs()"})," helper for custom setups"]})})]})]}),e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon",children:"🎨"}),`
Component Improvements`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Enhanced ",e.jsx("code",{children:"TableHeader"})," with lock icon visibility control, proper padding for checkbox columns, and ",e.jsx("code",{children:"isChildColumn"})," prop"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Improved ",e.jsx("code",{children:"TableToolbar"})," with global search integration and better action button layout"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Enhanced ",e.jsx("code",{children:"TableSettings"})," with nested column management and improved visibility controls"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Updated ",e.jsx("code",{children:"TableSidePanel"})," with hover states and expandable parent columns"]})})]})]}),e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon",children:"📝"}),`
Documentation`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("strong",{children:"Updates & Changelog"})," page in Storybook (About section)"]})}),e.jsx("li",{className:"change-item",children:e.jsx(s.p,{children:"Added new update notification system with localStorage tracking"})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"TABLE_ENHANCEMENTS.md"})," documentation for table improvements"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"TABLE_IMPLEMENTATION_SUMMARY.md"})," for implementation guide"]})})]})]}),e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon",children:"�"}),`
Bug Fixes`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item critical",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"CRITICAL:"})," Fixed postinstall script CommonJS/ESM module conflict - renamed ",e.jsx("code",{children:"postinstall.js"})," to ",e.jsx("code",{children:"postinstall.cjs"})]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Fixed ",e.jsx("code",{children:"require('fs')"})," error that developers encountered during npm install"]})}),e.jsx("li",{className:"change-item",children:e.jsx(s.p,{children:"Synced package versions - both tokens and components now at v1.7.1"})})]})]}),e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon",children:"�📦"}),`
Dependencies`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item critical",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"CRITICAL:"})," Added ",e.jsx("code",{children:"date-fns@4.4.0"})," for date handling in DateTimePickers"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Updated ",e.jsx("code",{children:"@ajaysoni7832/lean-ids-tokens"})," dependency to ",e.jsx("code",{children:"^1.7.1"})]})})]})]}),e.jsxs("div",{className:"migration-note",children:[e.jsxs(s.p,{children:[e.jsx("strong",{children:"📦 Installation & Setup:"}),`
Update to v1.7.1 to get all new components and improvements.`]}),e.jsx("code",{children:"npm install @ajaysoni7832/lean-ids-components@1.7.1"})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-previous-versions",children:"📜 Previous Versions"}),`
`,e.jsxs("div",{className:"version-container",children:[e.jsxs("div",{className:"version-header",children:[e.jsx("div",{className:"version-number",children:"v1.6.3"}),e.jsx("div",{className:"version-date",children:"July 1, 2026"})]}),e.jsxs("div",{className:"version-content",children:[e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon icon-breaking",children:"🚨"}),`
AI Guidelines System - Critical Update`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item breaking",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"BREAKING:"})," Added strict AI guidelines enforcement system with 4 critical rules"]})}),e.jsx("li",{className:"change-item critical",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"CRITICAL:"})," All AI assistants must read ",e.jsx("code",{children:"AI_READING_FLOW.md"})," before generating code"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"postinstall"})," script to auto-distribute AI guidelines to consuming projects"]})})]})]}),e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon icon-new",children:"✨"}),`
New Features`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"AI Reading Flow:"})," Added master ",e.jsx("code",{children:"AI_READING_FLOW.md"})," file for proper guideline reading order"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Component Creation Rules:"})," Strict enforcement - build ONLY from existing Lean IDS components"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Token Usage Rules:"})," Mandatory token usage for all styling (colors, spacing, typography)"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Icon Rules:"})," Import ONLY icons from ",e.jsx("code",{children:"@mui/icons-material"}),", no other MUI components"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"Gradient Rules:"})," NO gradients unless user explicitly requests"]})})]})]}),e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon icon-improved",children:"📝"}),`
Documentation`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Updated ",e.jsx("code",{children:".cursorrules"})," with comprehensive component creation examples"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Updated ",e.jsx("code",{children:".windsurfrules"})," with strict enforcement rules"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Enhanced ",e.jsx("code",{children:"AI_GUIDELINES.md"})," with detailed sections for each rule"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"CRITICAL_RULES_UPDATE.md"})," documentation"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"QUICK_START_AI_SETUP.md"})," for quick reference"]})})]})]}),e.jsxs("div",{className:"migration-note",children:[e.jsxs(s.p,{children:[e.jsx("strong",{children:"📦 Installation & Setup:"}),`
After installing/updating to v1.6.3, AI guideline files will automatically copy to your project root via postinstall script. Restart your IDE to load the new rules.`]}),e.jsx("code",{children:"npm install @ajaysoni7832/lean-ids-components@1.6.3"})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-previous-versions-1",children:"📜 Previous Versions"}),`
`,e.jsxs("div",{className:"version-container",children:[e.jsxs("div",{className:"version-header",children:[e.jsx("div",{className:"version-number",children:"v1.6.2"}),e.jsx("div",{className:"version-date",children:"June 28, 2026"})]}),e.jsxs("div",{className:"version-content",children:[e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon icon-new",children:"✨"}),`
New Components`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"TableSidePanel"})," component for table detail views"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"Accordion"})," component with expand/collapse functionality"]})})]})]}),e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon icon-improved",children:"🔧"}),`
Improvements`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Enhanced ",e.jsx("code",{children:"Table"})," component with better TypeScript types"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Improved ",e.jsx("code",{children:"PageLayout"})," sidebar pin functionality"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Updated ",e.jsx("code",{children:"Brand"})," component with better logo handling"]})})]})]}),e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon icon-fixed",children:"🐛"}),`
Bug Fixes`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Fixed sidebar hover state in ",e.jsx("code",{children:"SideNavigation"})]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Fixed z-index issues in ",e.jsx("code",{children:"Modal"})," and ",e.jsx("code",{children:"Drawer"})]})})]})]})]})]}),`
`,e.jsxs("div",{className:"version-container",children:[e.jsxs("div",{className:"version-header",children:[e.jsx("div",{className:"version-number",children:"v1.6.1"}),e.jsx("div",{className:"version-date",children:"June 20, 2026"})]}),e.jsxs("div",{className:"version-content",children:[e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon icon-improved",children:"🔧"}),`
Improvements`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Performance optimization for ",e.jsx("code",{children:"Table"})," component with large datasets"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Improved accessibility for ",e.jsx("code",{children:"Modal"})," and ",e.jsx("code",{children:"Drawer"})," components"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Enhanced ",e.jsx("code",{children:"Input"})," component error state styling"]})})]})]}),e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon icon-fixed",children:"🐛"}),`
Bug Fixes`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Fixed ",e.jsx("code",{children:"Select"})," dropdown positioning on scroll"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Fixed ",e.jsx("code",{children:"Tooltip"})," arrow alignment"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Fixed ",e.jsx("code",{children:"Pagination"})," button states"]})})]})]})]})]}),`
`,e.jsxs("div",{className:"version-container",children:[e.jsxs("div",{className:"version-header",children:[e.jsx("div",{className:"version-number",children:"v1.6.0"}),e.jsx("div",{className:"version-date",children:"June 10, 2026"})]}),e.jsxs("div",{className:"version-content",children:[e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon icon-new",children:"✨"}),`
New Features`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item critical",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"CRITICAL:"})," Added ",e.jsx("code",{children:"EnhancedTableTemplate"})," with advanced features (sorting, filtering, pagination)"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"TableSettings"})," component for column visibility control"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"MetricCard"})," component for dashboard metrics"]})})]})]}),e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon icon-breaking",children:"🚨"}),`
Breaking Changes`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item breaking",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"BREAKING:"})," ",e.jsx("code",{children:"Table"})," component API changed - ",e.jsx("code",{children:"columns"})," prop now requires ",e.jsx("code",{children:"id"})," field"]})}),e.jsx("li",{className:"change-item breaking",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"BREAKING:"})," Removed deprecated ",e.jsx("code",{children:"LegacyButton"})," component"]})})]})]}),e.jsxs("div",{className:"migration-note",children:[e.jsxs(s.p,{children:[e.jsx("strong",{children:"🔄 Migration Guide:"}),`
Update your `,e.jsx("code",{children:"Table"})," columns to include ",e.jsx("code",{children:"id"})," field:"]}),e.jsx("code",{children:e.jsxs(s.p,{children:["columns=","[{ id: 'name', header: 'Name', accessor: 'name' }]"]})})]})]})]}),`
`,e.jsxs("div",{className:"version-container",children:[e.jsxs("div",{className:"version-header",children:[e.jsx("div",{className:"version-number",children:"v1.5.0"}),e.jsx("div",{className:"version-date",children:"May 25, 2026"})]}),e.jsxs("div",{className:"version-content",children:[e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon icon-new",children:"✨"}),`
New Components`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"Pagination"})," component"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"Tabs"})," component"]})}),e.jsx("li",{className:"change-item",children:e.jsxs(s.p,{children:["Added ",e.jsx("code",{children:"Toast"})," notification component"]})})]})]}),e.jsxs("div",{className:"change-section",children:[e.jsx("div",{className:"change-title",children:e.jsxs(s.p,{children:[e.jsx("span",{className:"change-icon icon-security",children:"🔒"}),`
Security`]})}),e.jsxs("ul",{className:"change-list",children:[e.jsx("li",{className:"change-item critical",children:e.jsxs(s.p,{children:[e.jsx("strong",{children:"CRITICAL:"})," Updated ",e.jsx("code",{children:"styled-components"})," to v6.1.8 (security patch)"]})}),e.jsx("li",{className:"change-item",children:e.jsx(s.p,{children:"Updated all dependencies to latest secure versions"})})]})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-version-history-summary",children:"📋 Version History Summary"}),`
`,e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginTop:"1rem"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5",borderBottom:"2px solid #e0e0e0"},children:[e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",fontWeight:600},children:"Version"}),e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",fontWeight:600},children:"Release Date"}),e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",fontWeight:600},children:"Type"}),e.jsx("th",{style:{padding:"0.75rem",textAlign:"left",fontWeight:600},children:"Key Changes"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e0e0e0"},children:[e.jsx("td",{style:{padding:"0.75rem",fontWeight:600},children:"1.7.1"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Jul 8, 2026"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Patch"}),e.jsx("td",{style:{padding:"0.75rem"},children:"TableSidePanel, Accordion, DateTimePickers, EnhancedTableTemplate, Updates page"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e0e0e0"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"1.6.3"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Jul 1, 2026"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Major"}),e.jsx("td",{style:{padding:"0.75rem"},children:"AI Guidelines System, Strict Rules Enforcement"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e0e0e0"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"1.6.2"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Jun 28, 2026"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Minor"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Component improvements"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e0e0e0"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"1.6.1"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Jun 20, 2026"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Patch"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Performance improvements, bug fixes"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e0e0e0"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"1.6.0"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Jun 10, 2026"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Major"}),e.jsx("td",{style:{padding:"0.75rem"},children:"EnhancedTableTemplate, Breaking changes"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e0e0e0"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"1.5.0"}),e.jsx("td",{style:{padding:"0.75rem"},children:"May 25, 2026"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Minor"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Pagination, Tabs, Toast components"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e0e0e0"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"1.4.0"}),e.jsx("td",{style:{padding:"0.75rem"},children:"May 10, 2026"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Minor"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Table component enhancements"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e0e0e0"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"1.3.0"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Apr 25, 2026"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Minor"}),e.jsx("td",{style:{padding:"0.75rem"},children:"PageLayout improvements"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e0e0e0"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"1.2.0"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Apr 10, 2026"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Minor"}),e.jsx("td",{style:{padding:"0.75rem"},children:"New form components"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e0e0e0"},children:[e.jsx("td",{style:{padding:"0.75rem"},children:"1.1.0"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Mar 25, 2026"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Minor"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Initial component library"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"0.75rem"},children:"1.0.0"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Mar 1, 2026"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Major"}),e.jsx("td",{style:{padding:"0.75rem"},children:"Initial release"})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-stay-updated",children:"🔔 Stay Updated"}),`
`,e.jsx(s.h3,{id:"npm-package",children:e.jsx(s.strong,{children:"NPM Package"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npm install @ajaysoni7832/lean-ids-components@latest
`})}),`
`,e.jsx(s.h3,{id:"check-current-version",children:e.jsx(s.strong,{children:"Check Current Version"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npm list @ajaysoni7832/lean-ids-components
`})}),`
`,e.jsx(s.h3,{id:"view-all-versions",children:e.jsx(s.strong,{children:"View All Versions"})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npm view @ajaysoni7832/lean-ids-components versions
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-additional-resources",children:"📚 Additional Resources"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"GitHub Repository:"})," ",e.jsx(s.a,{href:"https://github.com/ajaysonicarelon/Lean-IDS",rel:"nofollow",children:"Lean-IDS"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"NPM Package:"})," ",e.jsx(s.a,{href:"https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components",rel:"nofollow",children:"@ajaysoni7832/lean-ids-components"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Documentation:"})," See individual component stories"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Migration Guides:"})," Check version-specific migration notes above"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"-feedback--support",children:"💬 Feedback & Support"}),`
`,e.jsx(s.p,{children:"Found a bug or have a feature request?"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"GitHub Issues:"})," ",e.jsx(s.a,{href:"https://github.com/ajaysonicarelon/Lean-IDS/issues",rel:"nofollow",children:"Report an issue"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Discussions:"})," ",e.jsx(s.a,{href:"https://github.com/ajaysonicarelon/Lean-IDS/discussions",rel:"nofollow",children:"Join the discussion"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Email:"})," Contact the design system team"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs("div",{style:{marginTop:"3rem",padding:"1.5rem",background:"#f5f5f5",borderRadius:"8px",textAlign:"center"},children:[e.jsx("strong",{children:"🎯 Always use the latest version for the best experience and latest features!"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("code",{children:"npm install @ajaysoni7832/lean-ids-components@latest"})]})]})}function g(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{g as default};
