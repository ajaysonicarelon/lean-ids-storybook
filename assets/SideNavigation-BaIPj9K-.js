import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as b,R as f}from"./index-B0WjJBI_.js";import{c as l}from"./styled-components.browser.esm-BIi91Tbq.js";import{B as Y}from"./Brand-Dg4Zibkd.js";import{M as U}from"./MenuItem-GyhTBxF9.js";import{A as Z}from"./Avatar-BtdRwqdw.js";const ee=l.nav`
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
`,te=l.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  width: 100%;
  flex: 1;
  overflow: visible; /* No overflow here - logo and user profile stay fixed */
  min-height: 0; /* Important for flex children to scroll properly */
`,ne=l.div`
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
`,re=l.div`
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
`,W=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  flex-shrink: 0;
`,oe=l.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.caption};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights.caption};
  letter-spacing: 1px;
  color: #ccc;
  padding: 0 ${({theme:e})=>e.spacing[7]};
  text-transform: uppercase;
  flex-shrink: 0;
`,V=l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,O=l.div`
  width: 100%; /* Critical for text truncation to work */
`,ie=l.div`
  display: flex;
  align-items: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  justify-content: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({$state:e,theme:r})=>e==="collapsed"?"0":`0 ${r.spacing[7]}`};
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
`,se=l.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: 14px;
  letter-spacing: 1.5px;
  color: ${({theme:e})=>e.colors.palette.primary[50]};
  flex-shrink: 0;
`,F=l.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: ${({theme:e})=>e.spacing[3]} 0;
`,ce=l.button`
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
`,de=l.button`
  position: absolute;
  
  /* Position: half inside, half outside sidebar - aligned with brand logo vertically */
  ${({$position:e,$offset:r,$size:a})=>{const g=(a==="small"?24:32)/2;return e==="top"?`
        top: ${r}px;
        right: -${g}px; /* Half outside */
      `:`
        bottom: ${r}px;
        right: -${g}px; /* Half outside */
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
`,ue=l.div`
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
`,pe=l.div`
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
`,fe=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[16]};
  line-height: ${({theme:e})=>e.lineHeights[19]};
  font-weight: ${({$isActive:e,theme:r})=>e?r.fontWeights.semibold:r.fontWeights.regular};
  color: ${({theme:e})=>e.colors.palette.neutral[50]};
  white-space: nowrap;
`,he=l.div`
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
`,E=({items:e,position:r,onClose:a,className:k})=>{const[g,y]=b.useState(null),[d,j]=b.useState(null),w=b.useRef(null),u=b.useRef(null),s=b.useRef(null);b.useEffect(()=>{const n=p=>{w.current&&!w.current.contains(p.target)&&(a==null||a())};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[a]),b.useEffect(()=>()=>{u.current&&clearTimeout(u.current),s.current&&clearTimeout(s.current)},[]);const T=(n,p)=>{if(u.current&&(clearTimeout(u.current),u.current=null),s.current&&(clearTimeout(s.current),s.current=null),y(null),j(null),n.children&&n.children.length>0){const m=p.currentTarget.getBoundingClientRect(),R=n.children;u.current=setTimeout(()=>{y({top:m.top,left:m.right}),j(R)},100)}},S=()=>{u.current&&(clearTimeout(u.current),u.current=null)},I=()=>{s.current&&(clearTimeout(s.current),s.current=null)},M=()=>{s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{(!d||d.length===0)&&(a==null||a())},200)},C=n=>{var p;(!n.children||n.children.length===0)&&((p=n.onClick)==null||p.call(n),a==null||a())};return t.jsxs(t.Fragment,{children:[t.jsx(ue,{ref:w,className:k,style:{top:r.top,left:r.left},onMouseEnter:I,onMouseLeave:M,children:e.map(n=>t.jsxs(pe,{$isActive:n.active||!1,$hasChildren:!!n.children&&n.children.length>0,onMouseEnter:p=>T(n,p),onMouseLeave:S,onClick:()=>C(n),children:[t.jsx(fe,{$isActive:n.active||!1,children:n.label}),n.children&&n.children.length>0&&t.jsx(he,{children:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z",fill:"currentColor"})})})]},n.id))}),g&&d&&t.jsx(E,{items:d,position:g,onClose:a})]})};E.__docgenInfo={description:"",methods:[],displayName:"NestedMenuOverlay",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"NestedMenuItem"}],raw:"NestedMenuItem[]"},description:""},position:{required:!0,tsType:{name:"signature",type:"object",raw:"{ top: number; left: number }",signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ge=({groups:e=[],user:r,className:a,children:k,onPinChange:g,isPinned:y,expandMode:d="hover",toggleButtonPosition:j="top",toggleButtonOffset:w=24,toggleButtonSize:u="large",toggleButtonIcon:s,customLogoUrl:T,customSymbolUrl:S,logoAlignment:I="left",logoPadding:M,showLabelsWhenCollapsed:C=!0})=>{const[n,p]=f.useState(!1),[m,R]=f.useState(!1),[G,_]=f.useState(!1),[N,q]=f.useState(null),c=y!==void 0?y:G,v=c?"expanded":d==="hover"?n?"expanded":"collapsed":d==="button"?m?"expanded":"collapsed":n||m?"expanded":"collapsed",D=()=>{const i=!c;_(i),g==null||g(i)},J=()=>{R(!m)},L=i=>{var h;return{id:i.id,label:i.label,active:i.active,onClick:i.onClick,children:(h=i.children)==null?void 0:h.map(L)}},[K,H]=f.useState(!1),x=f.useRef(null),z=f.useRef(n);f.useEffect(()=>{if(!c&&z.current!==n){H(!0),n||q(null);const i=setTimeout(()=>{H(!1)},300);return z.current=n,()=>clearTimeout(i)}z.current=n},[n,c]);const P=(i,h)=>{x.current&&clearTimeout(x.current);const o=K&&!n;if(i.children&&i.children.length>0&&!o){const $=h.currentTarget.getBoundingClientRect(),Q=i.children,X=236;x.current=setTimeout(()=>{q({items:Q.map(L),position:{top:$.top,left:X}})},100)}},A=()=>{x.current&&(clearTimeout(x.current),x.current=null)};f.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]);const B=d==="hover"||d==="both";return t.jsxs(ee,{$state:v,className:a,"aria-label":"Side navigation",onMouseEnter:()=>!c&&B&&p(!0),onMouseLeave:()=>!c&&B&&p(!1),children:[(d==="button"||d==="both")&&!c&&t.jsx(de,{$position:j,$offset:w,$size:u,onClick:J,"aria-label":m?"Collapse sidebar":"Expand sidebar",title:m?"Collapse sidebar":"Expand sidebar",children:s||t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:m?t.jsx("path",{d:"M15 18l-6-6 6-6"}):t.jsx("path",{d:"M9 18l6-6-6-6"})})}),t.jsxs(te,{children:[t.jsxs(re,{$state:v,children:[t.jsx(Y,{variant:v==="collapsed"?"symbol":"logo",mode:"dark",customLogoUrl:T,customSymbolUrl:S,logoAlignment:I,logoPadding:M}),v==="expanded"&&t.jsx(ce,{$isPinned:c,$state:v,onClick:D,"aria-label":c?"Unpin sidebar":"Pin sidebar",title:c?"Unpin sidebar":"Pin sidebar",children:t.jsx("svg",{viewBox:"0 0 24 24",fill:c?"currentColor":"none",stroke:"currentColor",strokeWidth:c?"0":"2",children:c?t.jsx("path",{d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"}):t.jsx("path",{d:"M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"})})})]}),t.jsxs(ne,{children:[v==="expanded"&&t.jsx(W,{children:k||e.map((i,h)=>t.jsxs(f.Fragment,{children:[i.title&&t.jsx(oe,{children:i.title}),t.jsx(V,{children:i.items.map(o=>t.jsx(O,{onMouseEnter:$=>P(o,$),onMouseLeave:A,children:t.jsx(U,{border:"left",mode:"dark",state:o.active?"active":"inactive",label:o.label,iconM:o.icon,showIcon:!0,showLabel:!0,showIndicator:o.showIndicator,nestedMenu:!!o.children&&o.children.length>0,onClick:o.onClick})},o.id))}),h<e.length-1&&t.jsx(F,{})]},h))}),v==="collapsed"&&t.jsx(W,{children:e.map((i,h)=>t.jsxs(f.Fragment,{children:[t.jsx(V,{children:i.items.map(o=>t.jsx(O,{onMouseEnter:$=>P(o,$),onMouseLeave:A,children:t.jsx(U,{aligned:"vertical",border:"left",mode:"dark",state:o.active?"active":"inactive",label:o.label,iconM:o.icon,showIcon:!0,showLabel:C,showIndicator:o.showIndicator,nestedMenu:!!o.children&&o.children.length>0,onClick:o.onClick})},o.id))}),h<e.length-1&&t.jsx(F,{})]},h))})]})]}),N&&t.jsx(E,{items:N.items,position:N.position,onClose:()=>q(null)}),r&&t.jsxs(ie,{$state:v,onClick:r.onClick,style:{cursor:r.onClick?"pointer":"default"},children:[t.jsx(Z,{size:"medium",initials:r.initials,src:r.avatarUrl,alt:r.name,onClick:r.onClick}),v==="expanded"&&t.jsxs(le,{children:[t.jsx(ae,{children:r.name}),t.jsx(se,{children:r.subtitle})]})]})]})};ge.__docgenInfo={description:"",methods:[],displayName:"SideNavigation",props:{groups:{required:!1,tsType:{name:"Array",elements:[{name:"NavigationGroup"}],raw:"NavigationGroup[]"},description:"Navigation groups",defaultValue:{value:"[]",computed:!1}},user:{required:!1,tsType:{name:"UserProfile"},description:"User profile information"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content (overrides default groups)"},onPinChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isPinned: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isPinned"}],return:{name:"void"}}},description:"Callback when pin state changes"},isPinned:{required:!1,tsType:{name:"boolean"},description:"Whether sidebar is pinned (locked in expanded state)"},expandMode:{required:!1,tsType:{name:"union",raw:"'hover' | 'button' | 'both'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'button'"},{name:"literal",value:"'both'"}]},description:"Expand/collapse mode - 'hover', 'button', or 'both'",defaultValue:{value:"'hover'",computed:!1}},toggleButtonPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Position of toggle button - 'top' or 'bottom'",defaultValue:{value:"'top'",computed:!1}},toggleButtonOffset:{required:!1,tsType:{name:"number"},description:"Vertical offset for toggle button (in pixels)",defaultValue:{value:"24",computed:!1}},toggleButtonSize:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"Size of toggle button - 'small' or 'large'",defaultValue:{value:"'large'",computed:!1}},toggleButtonIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon for toggle button (collapsed state)"},customLogoUrl:{required:!1,tsType:{name:"string"},description:"Custom logo URL for expanded state (full logo)"},customSymbolUrl:{required:!1,tsType:{name:"string"},description:"Custom symbol URL for collapsed state (icon only)"},logoAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Logo alignment - 'left', 'center', or 'right'",defaultValue:{value:"'left'",computed:!1}},logoPadding:{required:!1,tsType:{name:"string"},description:"Custom padding for logo (CSS padding value)"},showLabelsWhenCollapsed:{required:!1,tsType:{name:"boolean"},description:"Whether to show menu item labels when sidebar is collapsed",defaultValue:{value:"true",computed:!1}}}};export{ge as S};
