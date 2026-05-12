import{j as i}from"./jsx-runtime-DSvmvvsx.js";import{R as c}from"./index-B0WjJBI_.js";import{c as n}from"./styled-components.browser.esm-BIi91Tbq.js";import{B as $,M as x}from"./MenuItem-DPngPyes.js";import{A as k}from"./Avatar-yJnDtia8.js";const j=n.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  width: ${({$state:e})=>e==="collapsed"?"60px":"236px"};
  height: 100vh;
  background-color: ${({theme:e})=>e.colors.palette.primary[800]};
  padding: 39px 0;
  overflow: hidden;
  transition: width 0.3s ease;
  z-index: 99;
`,S=n.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  width: 100%;
  flex-shrink: 0;
`,N=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({$state:e})=>e==="collapsed"?"center":"space-between"};
  gap: 8px;
  padding: 0 ${({theme:e})=>e.spacing[7]};
  width: 100%;
  flex-shrink: 0;
  position: relative;
  
  /* Show pin button on hover */
  &:hover button {
    opacity: 1;
    visibility: visible;
  }
`,g=n.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  flex-shrink: 0;
`,I=n.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.caption};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights.caption};
  letter-spacing: 1px;
  color: #ccc;
  padding: 0 ${({theme:e})=>e.spacing[7]};
  text-transform: uppercase;
  flex-shrink: 0;
`,M=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,P=n.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: 0 ${({theme:e})=>e.spacing[7]};
  width: 100%;
  flex-shrink: 0;
`,C=n.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-shrink: 0;
  white-space: nowrap;
  text-align: left;
`,H=n.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.body};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: ${({theme:e})=>e.lineHeights.body};
  color: ${({theme:e})=>e.colors.palette.neutral[50]};
  flex-shrink: 0;
`,z=n.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: 14px;
  letter-spacing: 1.5px;
  color: ${({theme:e})=>e.colors.palette.primary[50]};
  flex-shrink: 0;
`,T=n.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: ${({theme:e})=>e.spacing[3]} 0;
`,U=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  background-color: ${({$isPinned:e})=>e?"rgba(255, 255, 255, 0.15)":"transparent"};
  border: none;
  border-radius: 4px;
  color: ${({theme:e})=>e.colors.palette.neutral[50]};
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  flex-shrink: 0;
  
  /* Hidden by default, shown on hover or when pinned */
  opacity: ${({$isPinned:e})=>e?"1":"0"};
  visibility: ${({$isPinned:e})=>e?"visible":"hidden"};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,R=({state:e="expanded",groups:l=[],user:o,className:m,children:u,onPinChange:d,isPinned:p})=>{const[v,f]=c.useState(!1),[b,w]=c.useState(!1),s=p!==void 0?p:b,a=s?"expanded":v?e==="collapsed"?"expanded":"collapsed":e,y=()=>{const t=!s;w(t),d==null||d(t)};return i.jsxs(j,{$state:a,className:m,"aria-label":"Side navigation",onMouseEnter:()=>!s&&f(!0),onMouseLeave:()=>!s&&f(!1),children:[i.jsxs(S,{children:[i.jsxs(N,{$state:a,children:[i.jsx($,{variant:a==="collapsed"?"symbol":"logo",mode:"dark"}),a==="expanded"&&i.jsx(U,{$isPinned:s,$state:a,onClick:y,"aria-label":s?"Unpin sidebar":"Pin sidebar",title:s?"Unpin sidebar":"Pin sidebar",children:i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s?i.jsx("path",{d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"}):i.jsx("path",{d:"M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"})})})]}),a==="expanded"&&i.jsx(g,{children:u||l.map((t,h)=>i.jsxs(c.Fragment,{children:[t.title&&i.jsx(I,{children:t.title}),i.jsx(M,{children:t.items.map(r=>i.jsx(x,{border:"left",mode:"dark",state:r.active?"active":"inactive",label:r.label,iconM:r.icon,showIcon:!0,showLabel:!0,showIndicator:r.showIndicator,onClick:r.onClick},r.id))}),h<l.length-1&&i.jsx(T,{})]},h))}),a==="collapsed"&&i.jsx(g,{children:l.flatMap(t=>t.items).map(t=>i.jsx(x,{border:"left",mode:"dark",state:t.active?"active":"inactive",iconM:t.icon,showIcon:!0,showLabel:!1,showIndicator:t.showIndicator,onClick:t.onClick},t.id))})]}),o&&i.jsxs(P,{$state:a,children:[i.jsx(k,{size:a==="collapsed"?"small":"medium",initials:o.initials,src:o.avatarUrl,alt:o.name}),a==="expanded"&&i.jsxs(C,{children:[i.jsx(H,{children:o.name}),i.jsx(z,{children:o.subtitle})]})]})]})};R.__docgenInfo={description:"",methods:[],displayName:"SideNavigation",props:{state:{required:!1,tsType:{name:"union",raw:"'expanded' | 'collapsed'",elements:[{name:"literal",value:"'expanded'"},{name:"literal",value:"'collapsed'"}]},description:"Expanded or collapsed state",defaultValue:{value:"'expanded'",computed:!1}},groups:{required:!1,tsType:{name:"Array",elements:[{name:"NavigationGroup"}],raw:"NavigationGroup[]"},description:"Navigation groups",defaultValue:{value:"[]",computed:!1}},user:{required:!1,tsType:{name:"UserProfile"},description:"User profile information"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content (overrides default groups)"},onPinChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isPinned: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isPinned"}],return:{name:"void"}}},description:"Callback when pin state changes"},isPinned:{required:!1,tsType:{name:"boolean"},description:"Whether sidebar is pinned (locked in expanded state)"}}};export{R as S};
