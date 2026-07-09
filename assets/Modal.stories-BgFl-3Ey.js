import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as n}from"./index-B0WjJBI_.js";import{g as i}from"./styled-components.browser.esm-DVcPNpfh.js";import{I as x}from"./Icon-D1GQI8nt.js";import{B as o}from"./Button-CnBDXljr.js";import{I as b}from"./InputField-B2MYZsZr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ExpandMore-GavyM6T7.js";import"./FieldImportance-BcdMchzX.js";import"./HelpingText-DBmPat_K.js";const ve=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({$isOpen:t})=>t?1:0};
  visibility: ${({$isOpen:t})=>t?"visible":"hidden"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`,Ce=i.div`
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: ${({$width:t})=>t?`${t}px`:"600px"};
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: ${({$isOpen:t})=>t?"scale(1)":"scale(0.95)"};
  opacity: ${({$isOpen:t})=>t?1:0};
  transition: transform 0.3s ease, opacity 0.3s ease;
`,we=i.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #D5D5D5;
`,je=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`,Oe=i.h2`
  margin: 0;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #222222;
`,Se=i.p`
  margin: 0;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #909090;
`,Te=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #222222;
  transition: background 0.2s;

  &:hover {
    background: #F5F5F5;
  }

  &:active {
    background: #E5E5E5;
  }
`,ke=i.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  min-height: ${({$height:t})=>t?`${t}px`:"442px"};
`,Ie=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-top: 1px solid #D5D5D5;
`,Me=i.div`
  display: flex;
  align-items: center;
`,Be=i.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,a=({isOpen:t,onClose:s,title:y,description:h,children:ie,showReset:ne=!0,resetLabel:ae="Reset",onReset:re,showCancel:le=!0,cancelLabel:de="Cancel",onCancel:g,showSubmit:ce=!0,submitLabel:ue="Submit",onSubmit:pe,submitType:me="default",customFooter:v,width:fe,height:C,closeOnOverlayClick:he=!0,closeOnEscape:w=!0,className:xe})=>{n.useEffect(()=>{if(!t||!w)return;const r=ge=>{ge.key==="Escape"&&s()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t,w,s]),n.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const be=r=>{r.target===r.currentTarget&&he&&s()},ye=()=>{g?g():s()};return e.jsx(ve,{$isOpen:t,onClick:be,children:e.jsxs(Ce,{$width:fe,$height:C,$isOpen:t,className:xe,children:[e.jsxs(we,{children:[e.jsxs(je,{children:[e.jsx(Oe,{children:y}),h&&e.jsx(Se,{children:h})]}),e.jsx(Te,{onClick:s,"aria-label":"Close modal",children:e.jsx(x,{name:"Close",size:"medium"})})]}),e.jsx(ke,{$height:C,children:ie}),e.jsx(Ie,{children:v||e.jsxs(e.Fragment,{children:[e.jsx(Me,{children:ne&&e.jsx(o,{variant:"tertiary",size:"medium",onClick:re,children:ae})}),e.jsxs(Be,{children:[le&&e.jsx(o,{variant:"secondary",size:"medium",leadingIcon:e.jsx(x,{name:"Close",size:"small"}),onClick:ye,children:de}),ce&&e.jsx(o,{variant:"primary",size:"medium",buttonType:me,leadingIcon:e.jsx(x,{name:"Check",size:"small"}),onClick:pe,children:ue})]})]})})]})})};a.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when modal should close"},title:{required:!0,tsType:{name:"string"},description:"Modal title"},description:{required:!1,tsType:{name:"string"},description:"Modal description"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal body content"},showReset:{required:!1,tsType:{name:"boolean"},description:"Show reset button",defaultValue:{value:"true",computed:!1}},resetLabel:{required:!1,tsType:{name:"string"},description:"Reset button label",defaultValue:{value:"'Reset'",computed:!1}},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Reset button callback"},showCancel:{required:!1,tsType:{name:"boolean"},description:"Show cancel button",defaultValue:{value:"true",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"Cancel button label",defaultValue:{value:"'Cancel'",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Cancel button callback"},showSubmit:{required:!1,tsType:{name:"boolean"},description:"Show submit button",defaultValue:{value:"true",computed:!1}},submitLabel:{required:!1,tsType:{name:"string"},description:"Submit button label",defaultValue:{value:"'Submit'",computed:!1}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Submit button callback"},submitType:{required:!1,tsType:{name:"union",raw:"'default' | 'safe' | 'warning' | 'alert'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'safe'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'alert'"}]},description:"Submit button type",defaultValue:{value:"'default'",computed:!1}},customFooter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom footer content"},width:{required:!1,tsType:{name:"number"},description:"Modal width"},height:{required:!1,tsType:{name:"number"},description:"Modal height"},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"Close on overlay click",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Close on escape key",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};const Ve={title:"Components/Modal",component:a,parameters:{layout:"centered",docs:{description:{component:`
A modal dialog component with header, body, and footer sections. Based on Figma design.

## Usage

\`\`\`tsx
import { Modal, Button } from '@ajaysoni7832/lean-ids-components';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Your Title"
        description="Optional description"
        onSubmit={() => console.log('Submit')}
        onReset={() => console.log('Reset')}
      >
        {/* Your modal content */}
      </Modal>
    </>
  );
}
\`\`\`
        `}}},tags:["autodocs"]},l={render:()=>{const[t,s]=n.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>s(!0),children:"Open Modal"}),e.jsx(a,{isOpen:t,onClose:()=>s(!1),title:"Popup Example",description:"This is a modal popup with header, body, and footer sections.",onSubmit:()=>console.log("Submit clicked"),onReset:()=>console.log("Reset clicked"),children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Modal Body Content"}),e.jsx("p",{children:"This is the body content of the modal. You can put any content here."}),e.jsx("p",{children:"The modal includes:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Header with title and description"}),e.jsx("li",{children:"Close button"}),e.jsx("li",{children:"Scrollable body"}),e.jsx("li",{children:"Footer with Reset, Cancel, and Submit buttons"})]})]})})]})}},d={render:()=>{const[t,s]=n.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>s(!0),children:"Edit Profile"}),e.jsx(a,{isOpen:t,onClose:()=>s(!1),title:"Edit Profile",description:"Update your profile information",submitLabel:"Save Changes",onSubmit:()=>console.log("Form submitted"),children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(b,{label:"Name",placeholder:"Enter your name",type:"text",size:"default"}),e.jsx(b,{label:"Email",placeholder:"Enter your email",type:"email",size:"default"}),e.jsx(b,{label:"Bio",placeholder:"Tell us about yourself",type:"text",size:"default"})]})})]})}},c={render:()=>{const[t,s]=n.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>s(!0),children:"Confirm Action"}),e.jsx(a,{isOpen:t,onClose:()=>s(!1),title:"Confirm Action",description:"Are you sure you want to proceed?",showReset:!1,cancelLabel:"No, Cancel",submitLabel:"Yes, Proceed",onSubmit:()=>console.log("Confirmed"),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"This action cannot be undone. Please confirm that you want to continue."})})})]})}},u={render:()=>{const[t,s]=n.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>s(!0),buttonType:"alert",children:"Delete Item"}),e.jsx(a,{isOpen:t,onClose:()=>s(!1),title:"Delete Item",description:"This action is permanent",showReset:!1,submitLabel:"Delete",submitType:"alert",onSubmit:()=>console.log("Deleted"),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Are you sure you want to delete this item? This action cannot be undone."})})})]})}},p={render:()=>{const[t,s]=n.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>s(!0),children:"Open Custom Footer Modal"}),e.jsx(a,{isOpen:t,onClose:()=>s(!1),title:"Custom Footer",description:"Modal with custom footer content",customFooter:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",width:"100%",gap:"12px"},children:[e.jsx(o,{variant:"tertiary",size:"medium",children:"Skip"}),e.jsx(o,{variant:"secondary",size:"medium",children:"Back"}),e.jsx(o,{variant:"primary",size:"medium",children:"Next"})]}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"This modal has a custom footer with different buttons."})})})]})}},m={render:()=>{const[t,s]=n.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>s(!0),children:"View Terms"}),e.jsx(a,{isOpen:t,onClose:()=>s(!1),title:"Terms and Conditions",description:"Please read and accept our terms",submitLabel:"Accept",height:600,children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Terms of Service"}),[...Array(20)].map((y,h)=>e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},h))]})})]})}},f={render:()=>{const[t,s]=n.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>s(!0),children:"Show Note"}),e.jsx(a,{isOpen:t,onClose:()=>s(!1),title:"Quick Note",width:400,height:200,showReset:!1,submitLabel:"Got it",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"This is a smaller modal for quick messages."})})})]})}};var j,O,S,T,k;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Popup Example" description="This is a modal popup with header, body, and footer sections." onSubmit={() => console.log('Submit clicked')} onReset={() => console.log('Reset clicked')}>
          <div style={{
          padding: '20px'
        }}>
            <h3>Modal Body Content</h3>
            <p>This is the body content of the modal. You can put any content here.</p>
            <p>The modal includes:</p>
            <ul>
              <li>Header with title and description</li>
              <li>Close button</li>
              <li>Scrollable body</li>
              <li>Footer with Reset, Cancel, and Submit buttons</li>
            </ul>
          </div>
        </Modal>
      </div>;
  }
}`,...(S=(O=l.parameters)==null?void 0:O.docs)==null?void 0:S.source},description:{story:`Default modal with all standard features.
Shows how to manage modal state with useState and handle open/close actions.`,...(k=(T=l.parameters)==null?void 0:T.docs)==null?void 0:k.description}}};var I,M,B,R,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Edit Profile</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Edit Profile" description="Update your profile information" submitLabel="Save Changes" onSubmit={() => console.log('Form submitted')}>
          <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <InputField label="Name" placeholder="Enter your name" type="text" size="default" />
            <InputField label="Email" placeholder="Enter your email" type="email" size="default" />
            <InputField label="Bio" placeholder="Tell us about yourself" type="text" size="default" />
          </div>
        </Modal>
      </div>;
  }
}`,...(B=(M=d.parameters)==null?void 0:M.docs)==null?void 0:B.source},description:{story:`Modal with form content.
Demonstrates using InputField components inside a modal for form submissions.`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};var F,E,z,D,L;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Confirm Action</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action" description="Are you sure you want to proceed?" showReset={false} cancelLabel="No, Cancel" submitLabel="Yes, Proceed" onSubmit={() => console.log('Confirmed')}>
          <div style={{
          padding: '20px'
        }}>
            <p>This action cannot be undone. Please confirm that you want to continue.</p>
          </div>
        </Modal>
      </div>;
  }
}`,...(z=(E=c.parameters)==null?void 0:E.docs)==null?void 0:z.source},description:{story:`Modal without reset button.
Use showReset={false} to hide the reset button for confirmation dialogs.`,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.description}}};var N,A,P,V,$;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)} buttonType="alert">Delete Item</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Delete Item" description="This action is permanent" showReset={false} submitLabel="Delete" submitType="alert" onSubmit={() => console.log('Deleted')}>
          <div style={{
          padding: '20px'
        }}>
            <p>Are you sure you want to delete this item? This action cannot be undone.</p>
          </div>
        </Modal>
      </div>;
  }
}`,...(P=(A=u.parameters)==null?void 0:A.docs)==null?void 0:P.source},description:{story:`Modal with warning submit button.
Use submitType="alert" for destructive actions like deletes.`,...($=(V=u.parameters)==null?void 0:V.docs)==null?void 0:$.description}}};var U,Y,_,W,H;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Open Custom Footer Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Custom Footer" description="Modal with custom footer content" customFooter={<div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        gap: '12px'
      }}>
              <Button variant="tertiary" size="medium">
                Skip
              </Button>
              <Button variant="secondary" size="medium">
                Back
              </Button>
              <Button variant="primary" size="medium">
                Next
              </Button>
            </div>}>
          <div style={{
          padding: '20px'
        }}>
            <p>This modal has a custom footer with different buttons.</p>
          </div>
        </Modal>
      </div>;
  }
}`,...(_=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:_.source},description:{story:`Modal with custom footer.
Use customFooter prop to replace default buttons with custom actions.`,...(H=(W=p.parameters)==null?void 0:W.docs)==null?void 0:H.description}}};var G,Q,J,K,X;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>View Terms</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Terms and Conditions" description="Please read and accept our terms" submitLabel="Accept" height={600}>
          <div style={{
          padding: '20px'
        }}>
            <h3>Terms of Service</h3>
            {[...Array(20)].map((_, i) => <p key={i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>)}
          </div>
        </Modal>
      </div>;
  }
}`,...(J=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:J.source},description:{story:`Large modal with scrollable content.
Use height prop to control modal height for long content.`,...(X=(K=m.parameters)==null?void 0:K.docs)==null?void 0:X.description}}};var Z,ee,te,se,oe;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Show Note</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Quick Note" width={400} height={200} showReset={false} submitLabel="Got it">
          <div style={{
          padding: '20px'
        }}>
            <p>This is a smaller modal for quick messages.</p>
          </div>
        </Modal>
      </div>;
  }
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:`Small modal.
Use width and height props to customize modal size for quick messages.`,...(oe=(se=f.parameters)==null?void 0:se.docs)==null?void 0:oe.description}}};const $e=["Default","WithForm","NoReset","WarningAction","CustomFooter","ScrollableContent","SmallModal"];export{p as CustomFooter,l as Default,c as NoReset,m as ScrollableContent,f as SmallModal,u as WarningAction,d as WithForm,$e as __namedExportsOrder,Ve as default};
