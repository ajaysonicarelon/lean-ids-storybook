import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{R as r}from"./index-B0WjJBI_.js";import{g as l}from"./styled-components.browser.esm-DVcPNpfh.js";import{B as Q}from"./Brand-DbZMKrpN.js";import{M as I}from"./MenuItem-D6jJqfKZ.js";import{N as X}from"./NestedMenuOverlay-D7Cbiqm0.js";import{A as Y}from"./Avatar-BvEhiZvw.js";const Z=l.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  width: ${({$state:e})=>e==="collapsed"?"60px":"236px"};
  height: 100vh; /* Fixed viewport height - sidebar doesn't grow with content */
  background-color: ${({theme:e})=>e.colors.palette.primary[800]};
  padding: 16px ${({$state:e,theme:i})=>e==="collapsed"?i.spacing[1]:i.spacing[2]};
  overflow: visible; /* Changed from hidden to visible so toggle button can overlap */
  transition: width 0.3s ease, padding 0.3s ease;
  flex-shrink: 0;
  z-index: 101; /* Above TopHeader (100) so sidebar and toggle button appear on top */
`,ee=l.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  width: 100%;
  flex: 1;
  overflow: visible; /* No overflow here - logo and user profile stay fixed */
  min-height: 0; /* Important for flex children to scroll properly */
`,te=l.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0; /* Important for flex scrolling */
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
`,oe=l.div`
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
`,N=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  flex-shrink: 0;
`,ne=l.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.caption};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights.caption};
  letter-spacing: 1px;
  color: #ccc;
  padding: 0 ${({theme:e})=>e.spacing[7]};
  text-transform: uppercase;
  flex-shrink: 0;
`,R=l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,z=l.div`
  width: 100%; /* Critical for text truncation to work */
`,ie=l.div`
  display: flex;
  align-items: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  justify-content: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({$state:e,theme:i})=>e==="collapsed"?"0":`0 ${i.spacing[7]}`};
  width: 100%;
  flex-shrink: 0;
`,le=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-shrink: 0;
  white-space: nowrap;
  text-align: left;
`,ae=l.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.body};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: ${({theme:e})=>e.lineHeights.body};
  color: ${({theme:e})=>e.colors.palette.neutral[50]};
  flex-shrink: 0;
`,re=l.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: 14px;
  letter-spacing: 1.5px;
  color: ${({theme:e})=>e.colors.palette.primary[50]};
  flex-shrink: 0;
`,q=l.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: ${({theme:e})=>e.spacing[3]} 0;
`,se=l.button`
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
`,ce=l.button`
  position: absolute;
  
  /* Position: half inside, half outside sidebar - aligned with brand logo vertically */
  ${({$position:e,$offset:i,$size:m})=>{const u=(m==="small"?24:32)/2;return e==="top"?`
        top: ${i}px;
        right: -${u}px; /* Half outside */
      `:`
        bottom: ${i}px;
        right: -${u}px; /* Half outside */
      `}}
  
  /* Size variants - small: 24px, large: 32px */
  width: ${({$size:e})=>e==="small"?"24px":"32px"};
  height: ${({$size:e})=>e==="small"?"24px":"32px"};
  
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]}; /* White background */
  border: 2px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 102;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
    border-color: ${({theme:e})=>e.colors.palette.primary[600]};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    width: ${({$size:e})=>e==="small"?"16px":"20px"};
    height: ${({$size:e})=>e==="small"?"16px":"20px"};
    color: ${({theme:e})=>e.colors.palette.primary[600]}; /* Primary color icon */
    flex-shrink: 0;
  }
`,de=({groups:e=[],user:i,className:m,children:w,onPinChange:u,isPinned:y,expandMode:f="hover",toggleButtonPosition:H="top",toggleButtonOffset:P=24,toggleButtonSize:E="large",toggleButtonIcon:k,customLogoUrl:U,customSymbolUrl:B,logoAlignment:L="left",logoPadding:V,showLabelsWhenCollapsed:W=!0})=>{const[c,$]=r.useState(!1),[h,A]=r.useState(!1),[F,G]=r.useState(!1),[x,b]=r.useState(null),a=y!==void 0?y:F,d=a?"expanded":f==="hover"?c?"expanded":"collapsed":f==="button"?h?"expanded":"collapsed":c||h?"expanded":"collapsed",O=()=>{const n=!a;G(n),u==null||u(n)},_=()=>{A(!h)},j=n=>{var s;return{id:n.id,label:n.label,active:n.active,onClick:n.onClick,children:(s=n.children)==null?void 0:s.map(j)}},[D,C]=r.useState(!1),p=r.useRef(null),v=r.useRef(c);r.useEffect(()=>{if(!a&&v.current!==c){C(!0),c||b(null);const n=setTimeout(()=>{C(!1)},300);return v.current=c,()=>clearTimeout(n)}v.current=c},[c,a]);const S=(n,s)=>{p.current&&clearTimeout(p.current);const o=D&&!c;if(n.children&&n.children.length>0&&!o){const g=s.currentTarget.getBoundingClientRect(),J=n.children,K=236;p.current=setTimeout(()=>{b({items:J.map(j),position:{top:g.top,left:K}})},100)}},T=()=>{p.current&&(clearTimeout(p.current),p.current=null)};r.useEffect(()=>()=>{p.current&&clearTimeout(p.current)},[]);const M=f==="hover"||f==="both";return t.jsxs(Z,{$state:d,className:m,"aria-label":"Side navigation",onMouseEnter:()=>!a&&M&&$(!0),onMouseLeave:()=>!a&&M&&$(!1),children:[(f==="button"||f==="both")&&!a&&t.jsx(ce,{$position:H,$offset:P,$size:E,onClick:_,"aria-label":h?"Collapse sidebar":"Expand sidebar",title:h?"Collapse sidebar":"Expand sidebar",children:k||t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:h?t.jsx("path",{d:"M15 18l-6-6 6-6"}):t.jsx("path",{d:"M9 18l6-6-6-6"})})}),t.jsxs(ee,{children:[t.jsxs(oe,{$state:d,children:[t.jsx(Q,{variant:d==="collapsed"?"symbol":"logo",mode:"dark",customLogoUrl:U,customSymbolUrl:B,logoAlignment:L,logoPadding:V}),d==="expanded"&&t.jsx(se,{$isPinned:a,$state:d,onClick:O,"aria-label":a?"Unpin sidebar":"Pin sidebar",title:a?"Unpin sidebar":"Pin sidebar",children:t.jsx("svg",{viewBox:"0 0 24 24",fill:a?"currentColor":"none",stroke:"currentColor",strokeWidth:a?"0":"2",children:a?t.jsx("path",{d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"}):t.jsx("path",{d:"M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"})})})]}),t.jsxs(te,{children:[d==="expanded"&&t.jsx(N,{children:w||e.map((n,s)=>t.jsxs(r.Fragment,{children:[n.title&&t.jsx(ne,{children:n.title}),t.jsx(R,{children:n.items.map(o=>t.jsx(z,{onMouseEnter:g=>S(o,g),onMouseLeave:T,children:t.jsx(I,{border:"left",mode:"dark",state:o.active?"active":"inactive",label:o.label,iconM:o.icon,showIcon:!0,showLabel:!0,showIndicator:o.showIndicator,nestedMenu:!!o.children&&o.children.length>0,onClick:o.onClick})},o.id))}),s<e.length-1&&t.jsx(q,{})]},s))}),d==="collapsed"&&t.jsx(N,{children:e.map((n,s)=>t.jsxs(r.Fragment,{children:[t.jsx(R,{children:n.items.map(o=>t.jsx(z,{onMouseEnter:g=>S(o,g),onMouseLeave:T,children:t.jsx(I,{aligned:"vertical",border:"left",mode:"dark",state:o.active?"active":"inactive",label:o.label,iconM:o.icon,showIcon:!0,showLabel:W,showIndicator:o.showIndicator,nestedMenu:!!o.children&&o.children.length>0,onClick:o.onClick})},o.id))}),s<e.length-1&&t.jsx(q,{})]},s))})]})]}),x&&t.jsx(X,{items:x.items,position:x.position,onClose:()=>b(null)}),i&&t.jsxs(ie,{$state:d,onClick:i.onClick,style:{cursor:i.onClick?"pointer":"default"},children:[t.jsx(Y,{size:"medium",initials:i.initials,src:i.avatarUrl,alt:i.name,onClick:i.onClick}),d==="expanded"&&t.jsxs(le,{children:[t.jsx(ae,{children:i.name}),t.jsx(re,{children:i.subtitle})]})]})]})};de.__docgenInfo={description:"",methods:[],displayName:"SideNavigation",props:{groups:{required:!1,tsType:{name:"Array",elements:[{name:"NavigationGroup"}],raw:"NavigationGroup[]"},description:"Navigation groups",defaultValue:{value:"[]",computed:!1}},user:{required:!1,tsType:{name:"UserProfile"},description:"User profile information"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content (overrides default groups)"},onPinChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isPinned: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isPinned"}],return:{name:"void"}}},description:"Callback when pin state changes"},isPinned:{required:!1,tsType:{name:"boolean"},description:"Whether sidebar is pinned (locked in expanded state)"},expandMode:{required:!1,tsType:{name:"union",raw:"'hover' | 'button' | 'both'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'button'"},{name:"literal",value:"'both'"}]},description:"Expand/collapse mode - 'hover', 'button', or 'both'",defaultValue:{value:"'hover'",computed:!1}},toggleButtonPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Position of toggle button - 'top' or 'bottom'",defaultValue:{value:"'top'",computed:!1}},toggleButtonOffset:{required:!1,tsType:{name:"number"},description:"Vertical offset for toggle button (in pixels)",defaultValue:{value:"24",computed:!1}},toggleButtonSize:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"Size of toggle button - 'small' or 'large'",defaultValue:{value:"'large'",computed:!1}},toggleButtonIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon for toggle button (collapsed state)"},customLogoUrl:{required:!1,tsType:{name:"string"},description:"Custom logo URL for expanded state (full logo)"},customSymbolUrl:{required:!1,tsType:{name:"string"},description:"Custom symbol URL for collapsed state (icon only)"},logoAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Logo alignment - 'left', 'center', or 'right'",defaultValue:{value:"'left'",computed:!1}},logoPadding:{required:!1,tsType:{name:"string"},description:"Custom padding for logo (CSS padding value)"},showLabelsWhenCollapsed:{required:!1,tsType:{name:"boolean"},description:"Whether to show menu item labels when sidebar is collapsed",defaultValue:{value:"true",computed:!1}}}};export{de as S};
