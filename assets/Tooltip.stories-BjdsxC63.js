import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as a}from"./index-B0WjJBI_.js";import{T as s}from"./Tooltip-DCYm5M9Z.js";import{g as m}from"./styled-components.browser.esm-DVcPNpfh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Clv5cdFl.js";import"./index-B2UzP9c-.js";const xt={title:"Components/Tooltip",component:s,parameters:{layout:"centered",docs:{description:{component:`
# Tooltip

Universal tooltip component for contextual information with default and pointer variants.

## Installation
\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage
\`\`\`tsx
import { Tooltip } from '@ajaysoni7832/lean-ids-components';

<Tooltip content="Helpful information" variant="pointer" pointerPosition="top">
  <InfoIcon />
</Tooltip>
\`\`\`

## Features
✅ **Two Variants** - Default (rectangular) and pointer (with arrow)
✅ **Four Positions** - Top, bottom, left, right
✅ **Portal Rendering** - No clipping issues
✅ **Accessible** - ARIA attributes

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| content | ReactNode | required | Tooltip content |
| children | ReactNode | required | Trigger element |
| variant | 'default' \\| 'pointer' | 'default' | Tooltip style |
| pointerPosition | 'top' \\| 'bottom' \\| 'left' \\| 'right' | 'top' | Arrow position |
| show | boolean | - | Controlled visibility |

## Examples
### Info Icon Tooltip
\`\`\`tsx
<Tooltip content="More information" variant="pointer" pointerPosition="top">
  <InfoIcon />
</Tooltip>
\`\`\`

### Chart Hover
\`\`\`tsx
<Tooltip content="Value: 42" variant="default">
  <ChartBar />
</Tooltip>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","pointer"],description:"Tooltip variant"},pointerPosition:{control:"select",options:["top","bottom","left","right"],description:"Position of the pointer triangle (only for pointer variant)"}}},l=m.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F8F8F8;
  border: 1px solid #D5D5D5;
  border-radius: 8px;
  position: relative;
`;m.button`
  padding: 12px 24px;
  background: #6222BC;
  color: white;
  border: none;
  border-radius: 6px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #4F1B9A;
  }
`;const h=m.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #6222BC;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #4F1B9A;
  }
`,st=m.div`
  width: 120px;
  height: 120px;
  background: #E3725F;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #D15E4A;
  }
`,p={render:()=>{const[e,n]=a.useState({visible:!1,x:0,y:0});return t.jsxs(l,{children:[t.jsx(st,{onMouseMove:o=>{n({visible:!0,x:o.clientX+15,y:o.clientY-40})},onMouseLeave:()=>n({visible:!1,x:0,y:0}),children:"Hover Me"}),t.jsx(s,{visible:e.visible,heading:"Product A",description:"Value: $45,000 (35%)",x:e.x,y:e.y,variant:"default"})]})}},c={render:()=>{const[e,n]=a.useState({visible:!1,x:0,y:0});return t.jsxs(l,{children:[t.jsx(h,{onClick:o=>{o.stopPropagation();const i=o.currentTarget.getBoundingClientRect();n(r=>({visible:!r.visible,x:i.left,y:i.bottom+10}))},children:"i"}),t.jsx(s,{visible:e.visible,heading:"This chart shows revenue distribution by product category for the selected time period",x:e.x,y:e.y,variant:"pointer",pointerPosition:"top"})]})}},d={render:()=>{const[e,n]=a.useState({visible:!1,x:0,y:0});return t.jsxs(l,{children:[t.jsx(h,{onClick:o=>{o.stopPropagation();const i=o.currentTarget.getBoundingClientRect();n(r=>({visible:!r.visible,x:i.left+i.width/2-126.5,y:i.top-90}))},children:"i"}),t.jsx(s,{visible:e.visible,heading:"Click the info icon to toggle this tooltip",x:e.x,y:e.y,variant:"pointer",pointerPosition:"bottom"})]})}},u={render:()=>{const[e,n]=a.useState({visible:!1,x:0,y:0});return t.jsxs(l,{children:[t.jsx(h,{onClick:o=>{o.stopPropagation();const i=o.currentTarget.getBoundingClientRect();n(r=>({visible:!r.visible,x:i.right+10,y:i.top+i.height/2-40}))},children:"i"}),t.jsx(s,{visible:e.visible,heading:"Tooltip with pointer on the left side",x:e.x,y:e.y,variant:"pointer",pointerPosition:"left"})]})}},v={render:()=>{const[e,n]=a.useState({visible:!1,x:0,y:0});return t.jsxs(l,{children:[t.jsx(h,{onClick:o=>{o.stopPropagation();const i=o.currentTarget.getBoundingClientRect();n(r=>({visible:!r.visible,x:i.left-263,y:i.top+i.height/2-40}))},children:"i"}),t.jsx(s,{visible:e.visible,heading:"Tooltip with pointer on the right side",x:e.x,y:e.y,variant:"pointer",pointerPosition:"right"})]})}},g={render:()=>{const[e,n]=a.useState({visible:!1,x:0,y:0}),[o,i]=a.useState({visible:!1,x:0,y:0});return t.jsxs(l,{children:[t.jsxs("div",{style:{display:"flex",gap:"100px",alignItems:"center"},children:[t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("p",{style:{marginBottom:"16px",fontFamily:"Elevance Sans",fontSize:"14px",color:"#222"},children:"Default (Hover)"}),t.jsx(st,{style:{width:"100px",height:"100px"},onMouseMove:r=>{n({visible:!0,x:r.clientX+15,y:r.clientY-40})},onMouseLeave:()=>n({visible:!1,x:0,y:0}),children:"Chart"})]}),t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("p",{style:{marginBottom:"16px",fontFamily:"Elevance Sans",fontSize:"14px",color:"#222"},children:"Pointer (Click)"}),t.jsx(h,{onClick:r=>{r.stopPropagation();const y=r.currentTarget.getBoundingClientRect();i(at=>({visible:!at.visible,x:y.left,y:y.bottom+10}))},children:"i"})]})]}),t.jsx(s,{visible:e.visible,heading:"Chart Data",description:"Value: $125,000",x:e.x,y:e.y,variant:"default"}),t.jsx(s,{visible:o.visible,heading:"This is an info tooltip with a pointer triangle",x:o.x,y:o.y,variant:"pointer",pointerPosition:"top"})]})}},x={args:{visible:!0,heading:"Product Revenue",description:"Value: $125,450 (42%)",x:300,y:200,variant:"default"}},f={args:{visible:!0,heading:"This chart displays revenue breakdown across different product categories",x:300,y:200,variant:"pointer",pointerPosition:"top"}};var b,T,P,C,w;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <ChartSegment onMouseMove={e => {
        setTooltip({
          visible: true,
          x: e.clientX + 15,
          y: e.clientY - 40
        });
      }} onMouseLeave={() => setTooltip({
        visible: false,
        x: 0,
        y: 0
      })}>
          Hover Me
        </ChartSegment>
        <Tooltip visible={tooltip.visible} heading="Product A" description="Value: $45,000 (35%)" x={tooltip.x} y={tooltip.y} variant="default" />
      </DemoContainer>;
  }
}`,...(P=(T=p.parameters)==null?void 0:T.docs)==null?void 0:P.source},description:{story:"Default rectangular tooltip - perfect for chart hovers",...(w=(C=p.parameters)==null?void 0:C.docs)==null?void 0:w.description}}};var S,j,I,D,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <InfoIcon onClick={e => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip(prev => ({
          visible: !prev.visible,
          x: rect.left,
          y: rect.bottom + 10
        }));
      }}>
          i
        </InfoIcon>
        <Tooltip visible={tooltip.visible} heading="This chart shows revenue distribution by product category for the selected time period" x={tooltip.x} y={tooltip.y} variant="pointer" pointerPosition="top" />
      </DemoContainer>;
  }
}`,...(I=(j=c.parameters)==null?void 0:j.docs)==null?void 0:I.source},description:{story:"Pointer tooltip with triangle on top - for info icons",...(k=(D=c.parameters)==null?void 0:D.docs)==null?void 0:k.description}}};var B,R,A,V,M;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <InfoIcon onClick={e => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip(prev => ({
          visible: !prev.visible,
          x: rect.left + rect.width / 2 - 126.5,
          y: rect.top - 90
        }));
      }}>
          i
        </InfoIcon>
        <Tooltip visible={tooltip.visible} heading="Click the info icon to toggle this tooltip" x={tooltip.x} y={tooltip.y} variant="pointer" pointerPosition="bottom" />
      </DemoContainer>;
  }
}`,...(A=(R=d.parameters)==null?void 0:R.docs)==null?void 0:A.source},description:{story:"Pointer tooltip with triangle on bottom",...(M=(V=d.parameters)==null?void 0:V.docs)==null?void 0:M.description}}};var E,F,z,H,L;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <InfoIcon onClick={e => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip(prev => ({
          visible: !prev.visible,
          x: rect.right + 10,
          y: rect.top + rect.height / 2 - 40
        }));
      }}>
          i
        </InfoIcon>
        <Tooltip visible={tooltip.visible} heading="Tooltip with pointer on the left side" x={tooltip.x} y={tooltip.y} variant="pointer" pointerPosition="left" />
      </DemoContainer>;
  }
}`,...(z=(F=u.parameters)==null?void 0:F.docs)==null?void 0:z.source},description:{story:"Pointer tooltip with triangle on left",...(L=(H=u.parameters)==null?void 0:H.docs)==null?void 0:L.description}}};var $,X,Y,N,q;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <InfoIcon onClick={e => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip(prev => ({
          visible: !prev.visible,
          x: rect.left - 263,
          y: rect.top + rect.height / 2 - 40
        }));
      }}>
          i
        </InfoIcon>
        <Tooltip visible={tooltip.visible} heading="Tooltip with pointer on the right side" x={tooltip.x} y={tooltip.y} variant="pointer" pointerPosition="right" />
      </DemoContainer>;
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Pointer tooltip with triangle on right",...(q=(N=v.parameters)==null?void 0:N.docs)==null?void 0:q.description}}};var U,_,O,G,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [defaultTooltip, setDefaultTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    const [pointerTooltip, setPointerTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <div style={{
        display: 'flex',
        gap: '100px',
        alignItems: 'center'
      }}>
          <div style={{
          textAlign: 'center'
        }}>
            <p style={{
            marginBottom: '16px',
            fontFamily: 'Elevance Sans',
            fontSize: '14px',
            color: '#222'
          }}>
              Default (Hover)
            </p>
            <ChartSegment style={{
            width: '100px',
            height: '100px'
          }} onMouseMove={e => {
            setDefaultTooltip({
              visible: true,
              x: e.clientX + 15,
              y: e.clientY - 40
            });
          }} onMouseLeave={() => setDefaultTooltip({
            visible: false,
            x: 0,
            y: 0
          })}>
              Chart
            </ChartSegment>
          </div>

          <div style={{
          textAlign: 'center'
        }}>
            <p style={{
            marginBottom: '16px',
            fontFamily: 'Elevance Sans',
            fontSize: '14px',
            color: '#222'
          }}>
              Pointer (Click)
            </p>
            <InfoIcon onClick={e => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            setPointerTooltip(prev => ({
              visible: !prev.visible,
              x: rect.left,
              y: rect.bottom + 10
            }));
          }}>
              i
            </InfoIcon>
          </div>
        </div>

        <Tooltip visible={defaultTooltip.visible} heading="Chart Data" description="Value: $125,000" x={defaultTooltip.x} y={defaultTooltip.y} variant="default" />

        <Tooltip visible={pointerTooltip.visible} heading="This is an info tooltip with a pointer triangle" x={pointerTooltip.x} y={pointerTooltip.y} variant="pointer" pointerPosition="top" />
      </DemoContainer>;
  }
}`,...(O=(_=g.parameters)==null?void 0:_.docs)==null?void 0:O.source},description:{story:"Side-by-side comparison of both variants",...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var K,Q,W,Z,tt;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    visible: true,
    heading: 'Product Revenue',
    description: 'Value: $125,450 (42%)',
    x: 300,
    y: 200,
    variant: 'default'
  }
}`,...(W=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:W.source},description:{story:"Always visible example for testing positioning",...(tt=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:tt.description}}};var et,ot,it,nt,rt;f.parameters={...f.parameters,docs:{...(et=f.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    visible: true,
    heading: 'This chart displays revenue breakdown across different product categories',
    x: 300,
    y: 200,
    variant: 'pointer',
    pointerPosition: 'top'
  }
}`,...(it=(ot=f.parameters)==null?void 0:ot.docs)==null?void 0:it.source},description:{story:"Pointer variant always visible",...(rt=(nt=f.parameters)==null?void 0:nt.docs)==null?void 0:rt.description}}};const ft=["DefaultVariant","PointerTop","PointerBottom","PointerLeft","PointerRight","VariantComparison","AlwaysVisible","PointerAlwaysVisible"];export{x as AlwaysVisible,p as DefaultVariant,f as PointerAlwaysVisible,d as PointerBottom,u as PointerLeft,v as PointerRight,c as PointerTop,g as VariantComparison,ft as __namedExportsOrder,xt as default};
