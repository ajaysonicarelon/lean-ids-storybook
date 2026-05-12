import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{A as i}from"./Avatar-yJnDtia8.js";import{c as O}from"./styled-components.browser.esm-BIi91Tbq.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";const r=O.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 24px;
  align-items: center;
`,d=O.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`,K={title:"Components/Avatar",component:i,parameters:{layout:"centered",docs:{description:{component:`
## Usage

\`\`\`tsx
import { Avatar } from '@lean-ids/components';

function UserProfile() {
  return (
    <div>
      {/* With image */}
      <Avatar 
        size="large" 
        src="https://example.com/avatar.jpg" 
        alt="John Doe" 
      />
      
      {/* With initials */}
      <Avatar 
        size="medium" 
        color="purple" 
        initials="JD" 
      />
      
      {/* Disabled state */}
      <Avatar 
        size="small" 
        initials="AB" 
        disabled 
      />
    </div>
  );
}
\`\`\`

Avatar component displays user profile pictures or initials in a circular container with various sizes and color options.
        `}}},tags:["autodocs"],argTypes:{size:{control:"radio",options:["large","medium","small"],description:"Size of the avatar (72px, 48px, or 32px)"},color:{control:"select",options:["default","purple","amber","cyan","lime","yellow","grey"],description:"Background color variant"},src:{control:"text",description:"Image URL for the avatar"},initials:{control:"text",description:"Initials to display (max 2 characters)"},disabled:{control:"boolean",description:"Disabled/greyed out state"}}},s={args:{size:"medium",color:"default",initials:"AA"}},e={render:()=>a.jsxs(r,{children:[a.jsx(i,{size:"large",color:"default",initials:"AA"}),a.jsx(i,{size:"medium",color:"default",initials:"AA"}),a.jsx(i,{size:"small",color:"default",initials:"AA"})]})},l={render:()=>a.jsxs(d,{children:[a.jsxs(r,{children:[a.jsx(i,{size:"large",color:"default",initials:"AA"}),a.jsx(i,{size:"medium",color:"default",initials:"AA"}),a.jsx(i,{size:"small",color:"default",initials:"AA"})]}),a.jsxs(r,{children:[a.jsx(i,{size:"large",color:"purple",initials:"AA"}),a.jsx(i,{size:"medium",color:"purple",initials:"AA"}),a.jsx(i,{size:"small",color:"purple",initials:"AA"})]}),a.jsxs(r,{children:[a.jsx(i,{size:"large",color:"amber",initials:"AA"}),a.jsx(i,{size:"medium",color:"amber",initials:"AA"}),a.jsx(i,{size:"small",color:"amber",initials:"AA"})]}),a.jsxs(r,{children:[a.jsx(i,{size:"large",color:"cyan",initials:"AA"}),a.jsx(i,{size:"medium",color:"cyan",initials:"AA"}),a.jsx(i,{size:"small",color:"cyan",initials:"AA"})]}),a.jsxs(r,{children:[a.jsx(i,{size:"large",color:"lime",initials:"AA"}),a.jsx(i,{size:"medium",color:"lime",initials:"AA"}),a.jsx(i,{size:"small",color:"lime",initials:"AA"})]}),a.jsxs(r,{children:[a.jsx(i,{size:"large",color:"yellow",initials:"AA"}),a.jsx(i,{size:"medium",color:"yellow",initials:"AA"}),a.jsx(i,{size:"small",color:"yellow",initials:"AA"})]}),a.jsxs(r,{children:[a.jsx(i,{size:"large",color:"grey",initials:"AA"}),a.jsx(i,{size:"medium",color:"grey",initials:"AA"}),a.jsx(i,{size:"small",color:"grey",initials:"AA"})]})]})},t={render:()=>a.jsxs(d,{children:[a.jsxs(r,{children:[a.jsx(i,{size:"large",src:"https://i.pravatar.cc/72?img=1",alt:"User 1"}),a.jsx(i,{size:"medium",src:"https://i.pravatar.cc/48?img=1",alt:"User 1"}),a.jsx(i,{size:"small",src:"https://i.pravatar.cc/32?img=1",alt:"User 1"})]}),a.jsxs(r,{children:[a.jsx(i,{size:"large",src:"https://i.pravatar.cc/72?img=5",alt:"User 2"}),a.jsx(i,{size:"medium",src:"https://i.pravatar.cc/48?img=5",alt:"User 2"}),a.jsx(i,{size:"small",src:"https://i.pravatar.cc/32?img=5",alt:"User 2"})]})]})},o={render:()=>a.jsxs(d,{children:[a.jsxs(r,{children:[a.jsx(i,{size:"large",initials:"AA",disabled:!0}),a.jsx(i,{size:"medium",initials:"AA",disabled:!0}),a.jsx(i,{size:"small",initials:"AA",disabled:!0})]}),a.jsxs(r,{children:[a.jsx(i,{size:"large",src:"https://i.pravatar.cc/72?img=3",alt:"User",disabled:!0}),a.jsx(i,{size:"medium",src:"https://i.pravatar.cc/48?img=3",alt:"User",disabled:!0}),a.jsx(i,{size:"small",src:"https://i.pravatar.cc/32?img=3",alt:"User",disabled:!0})]})]})},n={render:()=>a.jsxs(r,{children:[a.jsx(i,{size:"large",color:"purple",initials:"JD"}),a.jsx(i,{size:"medium",color:"cyan",initials:"SM"}),a.jsx(i,{size:"small",color:"amber",initials:"AB"})]})},c={args:{size:"large",color:"default",initials:"AA"}},m={args:{size:"medium",color:"purple",initials:"JD"}},A={args:{size:"small",color:"cyan",initials:"SM"}};var p,u,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'default',
    initials: 'AA'
  }
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var z,g,x;e.parameters={...e.parameters,docs:{...(z=e.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <AvatarGrid>
      <Avatar size="large" color="default" initials="AA" />
      <Avatar size="medium" color="default" initials="AA" />
      <Avatar size="small" color="default" initials="AA" />
    </AvatarGrid>
}`,...(x=(g=e.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var j,h,y;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <AvatarColumn>
      <AvatarGrid>
        <Avatar size="large" color="default" initials="AA" />
        <Avatar size="medium" color="default" initials="AA" />
        <Avatar size="small" color="default" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="purple" initials="AA" />
        <Avatar size="medium" color="purple" initials="AA" />
        <Avatar size="small" color="purple" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="amber" initials="AA" />
        <Avatar size="medium" color="amber" initials="AA" />
        <Avatar size="small" color="amber" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="cyan" initials="AA" />
        <Avatar size="medium" color="cyan" initials="AA" />
        <Avatar size="small" color="cyan" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="lime" initials="AA" />
        <Avatar size="medium" color="lime" initials="AA" />
        <Avatar size="small" color="lime" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="yellow" initials="AA" />
        <Avatar size="medium" color="yellow" initials="AA" />
        <Avatar size="small" color="yellow" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="grey" initials="AA" />
        <Avatar size="medium" color="grey" initials="AA" />
        <Avatar size="small" color="grey" initials="AA" />
      </AvatarGrid>
    </AvatarColumn>
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,b,G;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <AvatarColumn>
      <AvatarGrid>
        <Avatar size="large" src="https://i.pravatar.cc/72?img=1" alt="User 1" />
        <Avatar size="medium" src="https://i.pravatar.cc/48?img=1" alt="User 1" />
        <Avatar size="small" src="https://i.pravatar.cc/32?img=1" alt="User 1" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" src="https://i.pravatar.cc/72?img=5" alt="User 2" />
        <Avatar size="medium" src="https://i.pravatar.cc/48?img=5" alt="User 2" />
        <Avatar size="small" src="https://i.pravatar.cc/32?img=5" alt="User 2" />
      </AvatarGrid>
    </AvatarColumn>
}`,...(G=(b=t.parameters)==null?void 0:b.docs)==null?void 0:G.source}}};var S,U,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <AvatarColumn>
      <AvatarGrid>
        <Avatar size="large" initials="AA" disabled />
        <Avatar size="medium" initials="AA" disabled />
        <Avatar size="small" initials="AA" disabled />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" src="https://i.pravatar.cc/72?img=3" alt="User" disabled />
        <Avatar size="medium" src="https://i.pravatar.cc/48?img=3" alt="User" disabled />
        <Avatar size="small" src="https://i.pravatar.cc/32?img=3" alt="User" disabled />
      </AvatarGrid>
    </AvatarColumn>
}`,...(C=(U=o.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var D,w,I;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <AvatarGrid>
      <Avatar size="large" color="purple" initials="JD" />
      <Avatar size="medium" color="cyan" initials="SM" />
      <Avatar size="small" color="amber" initials="AB" />
    </AvatarGrid>
}`,...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var J,M,B;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: 'large',
    color: 'default',
    initials: 'AA'
  }
}`,...(B=(M=c.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var W,L,E;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'purple',
    initials: 'JD'
  }
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var R,_,k;A.parameters={...A.parameters,docs:{...(R=A.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'small',
    color: 'cyan',
    initials: 'SM'
  }
}`,...(k=(_=A.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const N=["Default","AllSizes","AllColors","WithImages","Disabled","CustomInitials","LargeSize","MediumSize","SmallSize"];export{l as AllColors,e as AllSizes,n as CustomInitials,s as Default,o as Disabled,c as LargeSize,m as MediumSize,A as SmallSize,t as WithImages,N as __namedExportsOrder,K as default};
