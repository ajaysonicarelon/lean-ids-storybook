import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{c as n}from"./styled-components.browser.esm-BIi91Tbq.js";const a=n.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 9px 24px;
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border-top: 1px solid ${({theme:e})=>e.colors.palette.neutral[400]};
  overflow: hidden;
  white-space: nowrap;
`,l=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.paragraph};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights.paragraph};
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  flex-shrink: 0;
`,c=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.paragraph};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights.paragraph};
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  flex-shrink: 0;
`,d=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #6c6c6c;
  flex-shrink: 0;
  white-space: nowrap;
`,p=n.a`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #0064ef;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  cursor: pointer;
  
  &:hover {
    color: #0052cc;
  }
  
  &:active {
    color: #003d99;
  }
`,f=({lastUpdated:e="Sept 23, 2024",version:i="1.0",feedbackUrl:o="#",feedbackText:r="Send us a Feedback here",className:s})=>t.jsxs(a,{className:s,role:"contentinfo",children:[t.jsxs(l,{children:["Last Updated on ",e]}),t.jsxs(c,{children:["Version ",i]}),t.jsxs(d,{children:["Facing any issues?"," ",t.jsx(p,{href:o,target:"_blank",rel:"noopener noreferrer",children:r})]})]});f.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{lastUpdated:{required:!1,tsType:{name:"string"},description:"Last updated date",defaultValue:{value:"'Sept 23, 2024'",computed:!1}},version:{required:!1,tsType:{name:"string"},description:"Version number",defaultValue:{value:"'1.0'",computed:!1}},feedbackUrl:{required:!1,tsType:{name:"string"},description:"Feedback link URL",defaultValue:{value:"'#'",computed:!1}},feedbackText:{required:!1,tsType:{name:"string"},description:"Feedback link text",defaultValue:{value:"'Send us a Feedback here'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};export{f as F};
