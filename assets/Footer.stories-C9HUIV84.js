import{F as k}from"./Footer-CFaptl5F.js";import"./jsx-runtime-DSvmvvsx.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-DVcPNpfh.js";const U={title:"Components/Footer",component:k,parameters:{layout:"fullscreen",docs:{description:{component:`
# Footer

A footer bar component displaying last updated date, version number, and feedback link.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Footer } from '@ajaysoni7832/lean-ids-components';

function App() {
  return (
    <Footer
      lastUpdated="Sept 23, 2024"
      version="1.0"
      feedbackUrl="#"
      feedbackText="Send us a Feedback here"
      onFeedbackClick={() => console.log('Feedback clicked')}
    />
  );
}
\`\`\`

## Features

✅ **Last Updated Date** - Show when content was last updated
✅ **Version Display** - Application version number
✅ **Feedback Link** - Clickable feedback/support link
✅ **Custom Styling** - Matches design system
✅ **Responsive** - Adapts to screen size

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| lastUpdated | string | required | Last updated date text |
| version | string | required | Version number |
| feedbackUrl | string | - | Feedback link URL |
| feedbackText | string | 'Send Feedback' | Feedback link text |
| onFeedbackClick | () => void | - | Feedback click handler |
| className | string | - | Custom CSS class |

## Examples

### Basic Footer
\`\`\`tsx
<Footer
  lastUpdated="Sept 23, 2024"
  version="1.0"
  feedbackUrl="#"
/>
\`\`\`

### With Custom Feedback Text
\`\`\`tsx
<Footer
  lastUpdated="May 7, 2026"
  version="2.1.5"
  feedbackUrl="https://feedback.example.com"
  feedbackText="Report an Issue"
/>
\`\`\`

### With Click Handler
\`\`\`tsx
<Footer
  lastUpdated="Today"
  version="3.0.0-beta"
  feedbackUrl="#"
  feedbackText="Give Feedback"
  onFeedbackClick={() => {
    // Open feedback modal or navigate
    openFeedbackModal();
  }}
/>
\`\`\`

## Best Practices

1. **Keep version updated** - Match your app version
2. **Use relative dates** - "Today", "Yesterday" for recent updates
3. **Provide working feedback link** - Ensure users can reach support
4. **Place at bottom** - Typically at page/app bottom
5. **Keep text concise** - Footer should be minimal

## Accessibility

- ✅ Semantic HTML
- ✅ Keyboard accessible links
- ✅ Proper contrast ratios
- ✅ Screen reader friendly
        `}}},tags:["autodocs"]},e={args:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackUrl:"#",feedbackText:"Send us a Feedback here",onFeedbackClick:()=>alert("Feedback link clicked!")}},a={args:{lastUpdated:"May 7, 2026",version:"2.1.5",feedbackUrl:"https://feedback.example.com",feedbackText:"Report an Issue"}},t={args:{lastUpdated:"Today",version:"3.0.0-beta",feedbackUrl:"#",feedbackText:"Give Feedback"}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    lastUpdated: 'Sept 23, 2024',
    version: '1.0',
    feedbackUrl: '#',
    feedbackText: 'Send us a Feedback here',
    onFeedbackClick: () => alert('Feedback link clicked!')
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var n,d,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    lastUpdated: 'May 7, 2026',
    version: '2.1.5',
    feedbackUrl: 'https://feedback.example.com',
    feedbackText: 'Report an Issue'
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,l,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    lastUpdated: 'Today',
    version: '3.0.0-beta',
    feedbackUrl: '#',
    feedbackText: 'Give Feedback'
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const x=["Default","CustomDate","BetaVersion"];export{t as BetaVersion,a as CustomDate,e as Default,x as __namedExportsOrder,U as default};
