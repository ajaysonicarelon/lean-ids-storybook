import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as b,R as h}from"./index-B0WjJBI_.js";import{c as a}from"./styled-components.browser.esm-BIi91Tbq.js";import{B as Q}from"./Brand-D2_m1Vnv.js";import{M as W}from"./MenuItem-DpIAPb1N.js";import{A as X}from"./Avatar-BtdRwqdw.js";const Y=a.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  width: ${({$state:e})=>e==="collapsed"?"60px":"236px"};
  height: 100vh; /* Fixed viewport height - sidebar doesn't grow with content */
  background-color: ${({theme:e})=>e.colors.palette.primary[800]};
  padding: 16px ${({$state:e,theme:r})=>e==="collapsed"?r.spacing[1]:r.spacing[2]};
  overflow: visible; /* Changed from hidden to visible so toggle button can overlap */
  transition: width 0.3s ease, padding 0.3s ease;
  flex-shrink: 0;
  z-index: 101; /* Above TopHeader (100) so sidebar and toggle button appear on top */
`,Z=a.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  width: 100%;
  flex: 1;
  overflow: visible; /* No overflow here - logo and user profile stay fixed */
  min-height: 0; /* Important for flex children to scroll properly */
`,ee=a.div`
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
`,te=a.div`
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
`,U=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  flex-shrink: 0;
`,ne=a.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.caption};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights.caption};
  letter-spacing: 1px;
  color: #ccc;
  padding: 0 ${({theme:e})=>e.spacing[7]};
  text-transform: uppercase;
  flex-shrink: 0;
`,V=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,re=a.div`
  display: flex;
  align-items: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  justify-content: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({$state:e,theme:r})=>e==="collapsed"?"0":`0 ${r.spacing[7]}`};
  width: 100%;
  flex-shrink: 0;
`,ie=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-shrink: 0;
  white-space: nowrap;
  text-align: left;
`,oe=a.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.body};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: ${({theme:e})=>e.lineHeights.body};
  color: ${({theme:e})=>e.colors.palette.neutral[50]};
  flex-shrink: 0;
`,ae=a.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: 14px;
  letter-spacing: 1.5px;
  color: ${({theme:e})=>e.colors.palette.primary[50]};
  flex-shrink: 0;
`,O=a.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: ${({theme:e})=>e.spacing[3]} 0;
`,le=a.button`
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
`,se=a.button`
  position: absolute;
  
  /* Position: half inside, half outside sidebar - aligned with brand logo vertically */
  ${({$position:e,$offset:r,$size:l})=>{const m=(l==="small"?24:32)/2;return e==="top"?`
        top: ${r}px;
        right: -${m}px; /* Half outside */
      `:`
        bottom: ${r}px;
        right: -${m}px; /* Half outside */
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
`,ce=a.div`
  position: fixed;
  z-index: 1000;
  
  /* Add invisible left padding to create safe zone for mouse movement */
  padding-left: 8px;
  margin-left: -8px; /* Offset to maintain visual position */
  
  /* Inner container styling */
  background-color: ${({theme:e})=>e.colors.palette.primary[700]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: 2px 2px 10.5px 0px rgba(70, 62, 93, 0.55);
  padding-top: ${({theme:e})=>e.spacing[2]};
  padding-right: ${({theme:e})=>e.spacing[2]};
  padding-bottom: ${({theme:e})=>e.spacing[2]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 237px;
  overflow: hidden;
`,de=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[7]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;
  
  background-color: ${({$isActive:e,theme:r})=>e?"rgba(255, 255, 255, 0.1)":"transparent"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,ue=a.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[16]};
  line-height: ${({theme:e})=>e.lineHeights[19]};
  font-weight: ${({$isActive:e,theme:r})=>e?r.fontWeights.semibold:r.fontWeights.regular};
  color: ${({theme:e})=>e.colors.palette.neutral[50]};
  white-space: nowrap;
`,pe=a.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.palette.neutral[50]};
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,q=({items:e,position:r,onClose:l,className:k})=>{const[m,y]=b.useState(null),[d,j]=b.useState(null),w=b.useRef(null),u=b.useRef(null),c=b.useRef(null);b.useEffect(()=>{const n=s=>{w.current&&!w.current.contains(s.target)&&(l==null||l())};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[l]),b.useEffect(()=>()=>{u.current&&clearTimeout(u.current),c.current&&clearTimeout(c.current)},[]);const S=(n,s)=>{if(u.current&&(clearTimeout(u.current),u.current=null),c.current&&(clearTimeout(c.current),c.current=null),y(null),j(null),n.children&&n.children.length>0){const T=s.currentTarget.getBoundingClientRect(),R=n.children;u.current=setTimeout(()=>{y({top:T.top,left:T.right}),j(R)},100)}},I=()=>{u.current&&(clearTimeout(u.current),u.current=null)},M=()=>{c.current&&(clearTimeout(c.current),c.current=null)},N=()=>{c.current&&clearTimeout(c.current),c.current=setTimeout(()=>{(!d||d.length===0)&&(l==null||l())},200)},p=n=>{var s;(!n.children||n.children.length===0)&&((s=n.onClick)==null||s.call(n),l==null||l())};return t.jsxs(t.Fragment,{children:[t.jsx(ce,{ref:w,className:k,style:{top:r.top,left:r.left},onMouseEnter:M,onMouseLeave:N,children:e.map(n=>t.jsxs(de,{$isActive:n.active||!1,$hasChildren:!!n.children&&n.children.length>0,onMouseEnter:s=>S(n,s),onMouseLeave:I,onClick:()=>p(n),children:[t.jsx(ue,{$isActive:n.active||!1,children:n.label}),n.children&&n.children.length>0&&t.jsx(pe,{children:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z",fill:"currentColor"})})})]},n.id))}),m&&d&&t.jsx(q,{items:d,position:m,onClose:l})]})};q.__docgenInfo={description:"",methods:[],displayName:"NestedMenuOverlay",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"NestedMenuItem"}],raw:"NestedMenuItem[]"},description:""},position:{required:!0,tsType:{name:"signature",type:"object",raw:"{ top: number; left: number }",signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const fe=({groups:e=[],user:r,className:l,children:k,onPinChange:m,isPinned:y,expandMode:d="hover",toggleButtonPosition:j="top",toggleButtonOffset:w=24,toggleButtonSize:u="large",toggleButtonIcon:c,customLogoUrl:S,logoAlignment:I="left",logoPadding:M,showLabelsWhenCollapsed:N=!0})=>{const[p,n]=h.useState(!1),[s,T]=h.useState(!1),[R,F]=h.useState(!1),[C,z]=h.useState(null),f=y!==void 0?y:R,v=f?"expanded":d==="hover"?p?"expanded":"collapsed":d==="button"?s?"expanded":"collapsed":p||s?"expanded":"collapsed",G=()=>{const o=!f;F(o),m==null||m(o)},_=()=>{T(!s)},L=o=>{var g;return{id:o.id,label:o.label,active:o.active,onClick:o.onClick,children:(g=o.children)==null?void 0:g.map(L)}},[D,H]=h.useState(!1),x=h.useRef(null),E=h.useRef(p);h.useEffect(()=>{if(!f&&E.current!==p){H(!0),p||z(null);const o=setTimeout(()=>{H(!1)},300);return E.current=p,()=>clearTimeout(o)}E.current=p},[p,f]);const P=(o,g)=>{x.current&&clearTimeout(x.current);const i=D&&!p;if(o.children&&o.children.length>0&&!i){const $=g.currentTarget.getBoundingClientRect(),J=o.children,K=236;x.current=setTimeout(()=>{z({items:J.map(L),position:{top:$.top,left:K}})},100)}},A=()=>{x.current&&(clearTimeout(x.current),x.current=null)};h.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]);const B=d==="hover"||d==="both";return t.jsxs(Y,{$state:v,className:l,"aria-label":"Side navigation",onMouseEnter:()=>!f&&B&&n(!0),onMouseLeave:()=>!f&&B&&n(!1),children:[(d==="button"||d==="both")&&!f&&t.jsx(se,{$position:j,$offset:w,$size:u,onClick:_,"aria-label":s?"Collapse sidebar":"Expand sidebar",title:s?"Collapse sidebar":"Expand sidebar",children:c||t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s?t.jsx("path",{d:"M15 18l-6-6 6-6"}):t.jsx("path",{d:"M9 18l6-6-6-6"})})}),t.jsxs(Z,{children:[t.jsxs(te,{$state:v,children:[t.jsx(Q,{variant:v==="collapsed"?"symbol":"logo",mode:"dark",customLogoUrl:S,logoAlignment:I,logoPadding:M}),v==="expanded"&&t.jsx(le,{$isPinned:f,$state:v,onClick:G,"aria-label":f?"Unpin sidebar":"Pin sidebar",title:f?"Unpin sidebar":"Pin sidebar",children:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:f?t.jsx("path",{d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"}):t.jsx("path",{d:"M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"})})})]}),t.jsxs(ee,{children:[v==="expanded"&&t.jsx(U,{children:k||e.map((o,g)=>t.jsxs(h.Fragment,{children:[o.title&&t.jsx(ne,{children:o.title}),t.jsx(V,{children:o.items.map(i=>t.jsx("div",{onMouseEnter:$=>P(i,$),onMouseLeave:A,children:t.jsx(W,{border:"left",mode:"dark",state:i.active?"active":"inactive",label:i.label,iconM:i.icon,showIcon:!0,showLabel:!0,showIndicator:i.showIndicator,nestedMenu:!!i.children&&i.children.length>0,onClick:i.onClick})},i.id))}),g<e.length-1&&t.jsx(O,{})]},g))}),v==="collapsed"&&t.jsx(U,{children:e.map((o,g)=>t.jsxs(h.Fragment,{children:[t.jsx(V,{children:o.items.map(i=>t.jsx("div",{onMouseEnter:$=>P(i,$),onMouseLeave:A,children:t.jsx(W,{aligned:"vertical",border:"left",mode:"dark",state:i.active?"active":"inactive",label:i.label,iconM:i.icon,showIcon:!0,showLabel:N,showIndicator:i.showIndicator,nestedMenu:!!i.children&&i.children.length>0,onClick:i.onClick})},i.id))}),g<e.length-1&&t.jsx(O,{})]},g))})]})]}),C&&t.jsx(q,{items:C.items,position:C.position,onClose:()=>z(null)}),r&&t.jsxs(re,{$state:v,onClick:r.onClick,style:{cursor:r.onClick?"pointer":"default"},children:[t.jsx(X,{size:"medium",initials:r.initials,src:r.avatarUrl,alt:r.name,onClick:r.onClick}),v==="expanded"&&t.jsxs(ie,{children:[t.jsx(oe,{children:r.name}),t.jsx(ae,{children:r.subtitle})]})]})]})};fe.__docgenInfo={description:"",methods:[],displayName:"SideNavigation",props:{groups:{required:!1,tsType:{name:"Array",elements:[{name:"NavigationGroup"}],raw:"NavigationGroup[]"},description:"Navigation groups",defaultValue:{value:"[]",computed:!1}},user:{required:!1,tsType:{name:"UserProfile"},description:"User profile information"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content (overrides default groups)"},onPinChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isPinned: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isPinned"}],return:{name:"void"}}},description:"Callback when pin state changes"},isPinned:{required:!1,tsType:{name:"boolean"},description:"Whether sidebar is pinned (locked in expanded state)"},expandMode:{required:!1,tsType:{name:"union",raw:"'hover' | 'button' | 'both'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'button'"},{name:"literal",value:"'both'"}]},description:"Expand/collapse mode - 'hover', 'button', or 'both'",defaultValue:{value:"'hover'",computed:!1}},toggleButtonPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Position of toggle button - 'top' or 'bottom'",defaultValue:{value:"'top'",computed:!1}},toggleButtonOffset:{required:!1,tsType:{name:"number"},description:"Vertical offset for toggle button (in pixels)",defaultValue:{value:"24",computed:!1}},toggleButtonSize:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"Size of toggle button - 'small' or 'large'",defaultValue:{value:"'large'",computed:!1}},toggleButtonIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon for toggle button (collapsed state)"},customLogoUrl:{required:!1,tsType:{name:"string"},description:"Custom logo URL"},logoAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Logo alignment - 'left', 'center', or 'right'",defaultValue:{value:"'left'",computed:!1}},logoPadding:{required:!1,tsType:{name:"string"},description:"Custom padding for logo (CSS padding value)"},showLabelsWhenCollapsed:{required:!1,tsType:{name:"boolean"},description:"Whether to show menu item labels when sidebar is collapsed",defaultValue:{value:"true",computed:!1}}}};export{fe as S};
