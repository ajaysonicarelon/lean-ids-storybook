import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as be,R as Ce}from"./index-B0WjJBI_.js";import{g as t}from"./styled-components.browser.esm-DVcPNpfh.js";import{E as we,C as n,D as he,a as je}from"./ExpandMore-GavyM6T7.js";import{B as c}from"./Button-CnBDXljr.js";import{B as s}from"./Badge-DSAVxi_S.js";import{C as ue}from"./Chip-YwhtXZXO.js";import"./_commonjsHelpers-CqkleIqs.js";const Ie=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: ${({$disabled:o})=>o?.5:1};
  pointer-events: ${({$disabled:o})=>o?"none":"auto"};
`,Le=t.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: ${({theme:o})=>o.spacing[7]}; /* 16px */
  background-color: ${({theme:o})=>o.colors.palette.neutral[50]}; /* white */
  border: 1px solid ${({theme:o,$isExpanded:i})=>i?o.colors.palette.primary[400]:o.colors.palette.neutral[400]};
  border-radius: ${({theme:o,$isExpanded:i})=>i?`${o.borderRadius.md} ${o.borderRadius.md} 0 0`:o.borderRadius.md}; /* 8px all corners */
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({theme:o,$isExpanded:i})=>i?o.colors.palette.primary[400]:o.colors.palette.neutral[500]};
  }
`,$e=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Te=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[6]}; /* 14px */
  flex: 1;
`,De=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[5]}; /* 12px */
`,Se=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`,Ee=t.h3`
  margin: 0;
  font-family: ${({theme:o})=>o.fonts.primary};
  font-size: ${({theme:o})=>o.fontSizes[20]};
  font-weight: ${({theme:o})=>o.fontWeights.semibold};
  line-height: 24px;
  color: ${({theme:o})=>o.colors.palette.neutral[900]};
  white-space: nowrap;
`,Fe=t.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,Be=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  transform: ${({$isExpanded:o})=>o?"rotate(180deg)":"rotate(0deg)"};

  svg {
    width: 24px;
    height: 24px;
  }
`,ke=t.p`
  margin: 0;
  font-family: ${({theme:o})=>o.fonts.primary};
  font-size: ${({theme:o})=>o.fontSizes[16]};
  font-weight: ${({theme:o})=>o.fontWeights.regular};
  line-height: 19px;
  color: ${({theme:o})=>o.colors.palette.neutral[600]};
  width: 100%;
`,Me=t.div`
  display: ${({$isExpanded:o})=>o?"flex":"none"};
  flex-direction: column;
  width: 100%;
  background-color: ${({theme:o})=>o.colors.palette.neutral[200]}; /* #f8f8f8 */
  border-left: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-right: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-bottom: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-radius: ${({theme:o,$hasFooter:i})=>i?"0":`0 0 ${o.borderRadius.md} ${o.borderRadius.md}`}; /* 8px bottom corners if no footer */
  min-height: 100px;
  padding: ${({theme:o})=>o.spacing[7]}; /* 16px */
`,ze=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:o})=>o.spacing[7]} ${({theme:o})=>o.spacing[8]}; /* 16px 20px */
  background-color: ${({theme:o})=>o.colors.palette.neutral[100]}; /* #fdfdfd */
  border-left: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-right: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-bottom: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-radius: 0 0 ${({theme:o})=>o.borderRadius.md} ${({theme:o})=>o.borderRadius.md}; /* 8px bottom corners */
`,Oe=t.p`
  margin: 0;
  font-family: ${({theme:o})=>o.fonts.primary};
  font-size: ${({theme:o})=>o.fontSizes[14]};
  font-weight: ${({theme:o})=>o.fontWeights.regular};
  line-height: 16px;
  color: ${({theme:o})=>o.colors.palette.neutral[900]};
  white-space: nowrap;
`,Re=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[3]}; /* 8px */
`,d=({heading:o="Accordion Heading",description:i,leadIcon:w,showLeadIcon:xe=!0,labelsAndMetadata:j,children:ge,footerText:I,footerActions:L,showFooter:$=!1,defaultExpanded:fe=!1,expanded:b,onExpandChange:C,className:me,disabled:T=!1})=>{const[ye,Ae]=be.useState(fe),a=b!==void 0?b:ye,ve=()=>{if(T)return;const D=!a;b===void 0&&Ae(D),C==null||C(D)};return e.jsxs(Ie,{$isExpanded:a,$disabled:T,className:me,children:[e.jsxs(Le,{$isExpanded:a,onClick:ve,children:[e.jsxs($e,{children:[e.jsxs(Te,{children:[e.jsxs(De,{children:[xe&&w&&e.jsx(Se,{children:w}),e.jsx(Ee,{children:o})]}),j&&e.jsx(Fe,{children:j})]}),e.jsx(Be,{$isExpanded:a,children:e.jsx(we,{})})]}),i&&e.jsx(ke,{children:i})]}),e.jsx(Me,{$isExpanded:a,$hasFooter:$,children:ge}),$&&a&&e.jsxs(ze,{children:[I&&e.jsx(Oe,{children:I}),L&&e.jsx(Re,{children:L})]})]})};d.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{heading:{required:!1,tsType:{name:"string"},description:"Accordion heading text",defaultValue:{value:"'Accordion Heading'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text below heading"},leadIcon:{required:!1,tsType:{name:"ReactNode"},description:"Lead icon (24px) - shown before heading"},showLeadIcon:{required:!1,tsType:{name:"boolean"},description:"Show/hide lead icon",defaultValue:{value:"true",computed:!1}},labelsAndMetadata:{required:!1,tsType:{name:"ReactNode"},description:"Custom content for labels and metadata area (badges, chips, counters, etc.)"},children:{required:!1,tsType:{name:"ReactNode"},description:"Content to display when expanded"},footerText:{required:!1,tsType:{name:"string"},description:"Footer text"},footerActions:{required:!1,tsType:{name:"ReactNode"},description:"Footer action buttons"},showFooter:{required:!1,tsType:{name:"boolean"},description:"Show/hide footer",defaultValue:{value:"false",computed:!1}},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"Initially expanded state",defaultValue:{value:"false",computed:!1}},expanded:{required:!1,tsType:{name:"boolean"},description:"Controlled expanded state"},onExpandChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Callback when expand/collapse state changes"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the accordion",defaultValue:{value:"false",computed:!1}}}};const Ye={title:"Components/Accordion",component:d,parameters:{layout:"padded",docs:{description:{component:`
A collapsible content container with customizable header, content, and footer.

## Features
- Collapsed and expanded states with smooth transitions
- Customizable lead icon (24px Material Icons)
- Flexible labels and metadata area (badges, chips, counters, custom content)
- Optional description text
- Expandable content area
- Optional footer with text and action buttons
- **Supports nested accordions** - accordions can be placed inside other accordions
- Controlled or uncontrolled mode

## Usage

\`\`\`tsx
import { Accordion } from '@ajaysoni7832/lean-ids-components';
import { CheckCircleOutlined } from '@mui/icons-material';

<Accordion
  heading="Accordion Heading"
  description="Put a short description related to the accordion heading"
  leadIcon={<CheckCircleOutlined />}
  labelsAndMetadata={
    <>
      <Badge variant="info">Label</Badge>
      <Chip label="Label" />
    </>
  }
  showFooter
  footerText="Footer one liner"
  footerActions={<Button variant="primary">Button</Button>}
>
  {/* Your content here */}
</Accordion>
\`\`\`

## Nested Accordions

Accordions can be nested inside other accordions:

\`\`\`tsx
<Accordion heading="Parent Accordion">
  <Accordion heading="Child Accordion 1">
    Content for child 1
  </Accordion>
  <Accordion heading="Child Accordion 2">
    Content for child 2
  </Accordion>
</Accordion>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{heading:{control:"text",description:"Accordion heading text"},description:{control:"text",description:"Description text below heading"},leadIcon:{control:!1,description:"Lead icon (24px) - shown before heading"},showLeadIcon:{control:"boolean",description:"Show/hide lead icon"},labelsAndMetadata:{control:!1,description:"Custom content for labels and metadata area (badges, chips, counters, etc.)"},children:{control:!1,description:"Content to display when expanded"},footerText:{control:"text",description:"Footer text"},footerActions:{control:!1,description:"Footer action buttons"},showFooter:{control:"boolean",description:"Show/hide footer"},defaultExpanded:{control:"boolean",description:"Initially expanded state (uncontrolled)"},expanded:{control:"boolean",description:"Controlled expanded state"},disabled:{control:"boolean",description:"Disable the accordion"}}},r={args:{heading:"Accordion Heading",description:"Put a short description related to the accordion heading",leadIcon:e.jsx(n,{}),showLeadIcon:!0,labelsAndMetadata:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"info",label:"Label"}),e.jsx(ue,{label:"Label"})]}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"This is the accordion content area. You can put any content here."})}),showFooter:!1,defaultExpanded:!1}},l={args:{...r.args,defaultExpanded:!0,showFooter:!0,footerText:"Footer one liner",footerActions:e.jsxs(c,{variant:"primary",size:"small",children:[e.jsx(he,{style:{width:16,height:16}}),"Button",e.jsx(je,{style:{width:16,height:16}})]})}},p={args:{...r.args,showLeadIcon:!1}},h={args:{heading:"Accordion Heading",leadIcon:e.jsx(n,{}),showLeadIcon:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Content without description"})})}},u={args:{heading:"Simple Accordion",description:"A simple accordion without badges or chips",leadIcon:e.jsx(n,{}),showLeadIcon:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Simple content"})})}},x={args:{...r.args,defaultExpanded:!0,showFooter:!0,footerText:"Footer one liner",footerActions:e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"secondary",size:"small",children:"Cancel"}),e.jsxs(c,{variant:"primary",size:"small",children:[e.jsx(he,{style:{width:16,height:16}}),"Confirm"]})]})}},g={args:{heading:"Parent Accordion",description:"This accordion contains nested child accordions",leadIcon:e.jsx(n,{}),showLeadIcon:!0,defaultExpanded:!0,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[e.jsx(d,{heading:"Child Accordion 1",description:"First nested accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Content of child accordion 1"})})}),e.jsx(d,{heading:"Child Accordion 2",description:"Second nested accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,showFooter:!0,footerText:"Child footer",footerActions:e.jsx(c,{variant:"primary",size:"small",children:"Action"}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Content of child accordion 2"})})})]})}},f={args:{heading:"Level 1 Accordion",description:"Top level accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,defaultExpanded:!0,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:e.jsx(d,{heading:"Level 2 Accordion",description:"Second level nested accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,defaultExpanded:!0,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:e.jsx(d,{heading:"Level 3 Accordion",description:"Third level nested accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Deepest level content"})})})})})})}},m={args:{heading:"Custom Metadata Example",description:"Accordion with custom labels, counters, and badges",leadIcon:e.jsx(n,{}),showLeadIcon:!0,labelsAndMetadata:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"success",children:"Active"}),e.jsx(s,{variant:"warning",children:"2 Pending"}),e.jsx(ue,{label:"High Priority",variant:"filled"}),e.jsx("span",{style:{fontSize:"14px",color:"#909090"},children:"Updated 2 hours ago"})]}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Content with custom metadata"})})}},y={args:{...r.args,disabled:!0}},A={render:()=>{const[o,i]=Ce.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(c,{onClick:()=>i(!o),children:[o?"Collapse":"Expand"," Accordion"]}),e.jsx(d,{heading:"Controlled Accordion",description:"This accordion is controlled by external state",leadIcon:e.jsx(n,{}),showLeadIcon:!0,expanded:o,onExpandChange:i,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Controlled content"})})})]})}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(d,{heading:"First Accordion",description:"Description for first accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,labelsAndMetadata:e.jsx(s,{variant:"info",children:"New"}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Content for first accordion"})})}),e.jsx(d,{heading:"Second Accordion",description:"Description for second accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,labelsAndMetadata:e.jsx(s,{variant:"success",children:"Completed"}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Content for second accordion"})})}),e.jsx(d,{heading:"Third Accordion",description:"Description for third accordion",leadIcon:e.jsx(n,{}),showLeadIcon:!0,labelsAndMetadata:e.jsx(s,{variant:"warning",children:"In Progress"}),showFooter:!0,footerText:"Last updated: Today",footerActions:e.jsx(c,{variant:"primary",size:"small",children:"View Details"}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Content for third accordion"})})})]})};var S,E,F;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    heading: 'Accordion Heading',
    description: 'Put a short description related to the accordion heading',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    labelsAndMetadata: <>
        <Badge variant="info" label="Label" />
        <Chip label="Label" />
      </>,
    children: <div style={{
      padding: '20px'
    }}>
        <p>This is the accordion content area. You can put any content here.</p>
      </div>,
    showFooter: false,
    defaultExpanded: false
  }
}`,...(F=(E=r.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var B,k,M;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultExpanded: true,
    showFooter: true,
    footerText: 'Footer one liner',
    footerActions: <Button variant="primary" size="small">
        <Done style={{
        width: 16,
        height: 16
      }} />
        Button
        <Close style={{
        width: 16,
        height: 16
      }} />
      </Button>
  }
}`,...(M=(k=l.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var z,O,R;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLeadIcon: false
  }
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,H,N;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    heading: 'Accordion Heading',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    children: <div style={{
      padding: '20px'
    }}>
        <p>Content without description</p>
      </div>
  }
}`,...(N=(H=h.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var W,P,V;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    heading: 'Simple Accordion',
    description: 'A simple accordion without badges or chips',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    children: <div style={{
      padding: '20px'
    }}>
        <p>Simple content</p>
      </div>
  }
}`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var _,U,Y;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultExpanded: true,
    showFooter: true,
    footerText: 'Footer one liner',
    footerActions: <>
        <Button variant="secondary" size="small">
          Cancel
        </Button>
        <Button variant="primary" size="small">
          <Done style={{
          width: 16,
          height: 16
        }} />
          Confirm
        </Button>
      </>
  }
}`,...(Y=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    heading: 'Parent Accordion',
    description: 'This accordion contains nested child accordions',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    defaultExpanded: true,
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '16px'
    }}>
        <Accordion heading="Child Accordion 1" description="First nested accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true}>
          <div style={{
          padding: '20px'
        }}>
            <p>Content of child accordion 1</p>
          </div>
        </Accordion>
        
        <Accordion heading="Child Accordion 2" description="Second nested accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} showFooter={true} footerText="Child footer" footerActions={<Button variant="primary" size="small">Action</Button>}>
          <div style={{
          padding: '20px'
        }}>
            <p>Content of child accordion 2</p>
          </div>
        </Accordion>
      </div>
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    heading: 'Level 1 Accordion',
    description: 'Top level accordion',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    defaultExpanded: true,
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '16px'
    }}>
        <Accordion heading="Level 2 Accordion" description="Second level nested accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} defaultExpanded={true}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '16px'
        }}>
            <Accordion heading="Level 3 Accordion" description="Third level nested accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true}>
              <div style={{
              padding: '20px'
            }}>
                <p>Deepest level content</p>
              </div>
            </Accordion>
          </div>
        </Accordion>
      </div>
  }
}`,...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,oe,ne;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    heading: 'Custom Metadata Example',
    description: 'Accordion with custom labels, counters, and badges',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    labelsAndMetadata: <>
        <Badge variant="success">Active</Badge>
        <Badge variant="warning">2 Pending</Badge>
        <Chip label="High Priority" variant="filled" />
        <span style={{
        fontSize: '14px',
        color: '#909090'
      }}>Updated 2 hours ago</span>
      </>,
    children: <div style={{
      padding: '20px'
    }}>
        <p>Content with custom metadata</p>
      </div>
  }
}`,...(ne=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var te,ie,de;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(de=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var re,ae,se;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [expanded, setExpanded] = React.useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Collapse' : 'Expand'} Accordion
        </Button>
        
        <Accordion heading="Controlled Accordion" description="This accordion is controlled by external state" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} expanded={expanded} onExpandChange={setExpanded}>
          <div style={{
          padding: '20px'
        }}>
            <p>Controlled content</p>
          </div>
        </Accordion>
      </div>;
  }
}`,...(se=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ce,le,pe;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Accordion heading="First Accordion" description="Description for first accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} labelsAndMetadata={<Badge variant="info">New</Badge>}>
        <div style={{
        padding: '20px'
      }}>
          <p>Content for first accordion</p>
        </div>
      </Accordion>
      
      <Accordion heading="Second Accordion" description="Description for second accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} labelsAndMetadata={<Badge variant="success">Completed</Badge>}>
        <div style={{
        padding: '20px'
      }}>
          <p>Content for second accordion</p>
        </div>
      </Accordion>
      
      <Accordion heading="Third Accordion" description="Description for third accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} labelsAndMetadata={<Badge variant="warning">In Progress</Badge>} showFooter={true} footerText="Last updated: Today" footerActions={<Button variant="primary" size="small">View Details</Button>}>
        <div style={{
        padding: '20px'
      }}>
          <p>Content for third accordion</p>
        </div>
      </Accordion>
    </div>
}`,...(pe=(le=v.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};const Ge=["Default","Expanded","WithoutLeadIcon","WithoutDescription","WithoutLabelsAndMetadata","WithFooter","NestedAccordions","DeeplyNestedAccordions","CustomLabelsAndMetadata","Disabled","Controlled","MultipleAccordions"];export{A as Controlled,m as CustomLabelsAndMetadata,f as DeeplyNestedAccordions,r as Default,y as Disabled,l as Expanded,v as MultipleAccordions,g as NestedAccordions,x as WithFooter,h as WithoutDescription,u as WithoutLabelsAndMetadata,p as WithoutLeadIcon,Ge as __namedExportsOrder,Ye as default};
