import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{T as L}from"./TopHeader--5A2RIRX.js";import{I as m}from"./Icon-BytZhcyh.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./MenuItem-DPngPyes.js";import"./Avatar-yJnDtia8.js";const T={title:"Components/TopHeader",component:L,parameters:{layout:"fullscreen",docs:{description:{component:"A horizontal navigation header with branding, app name, menu items, and user avatar."}}},tags:["autodocs"],argTypes:{mode:{control:"radio",options:["dark","light"],description:"Color mode"}}},t=[{id:"home",label:"Home",icon:n.jsx(m,{name:"Home",size:"small"}),active:!0},{id:"about",label:"About",icon:n.jsx(m,{name:"Info",size:"small"}),showIndicator:!0}],e={args:{mode:"dark",appName:"Product Name",showLogo:!0,showAppName:!0,showDivider:!0,showMenuItems:!0,showAvatar:!0,menuItems:t,userInitials:"AS"}},o={args:{mode:"light",appName:"Product Name",showLogo:!0,showAppName:!0,showDivider:!0,showMenuItems:!0,showAvatar:!0,menuItems:t,userInitials:"AS"}},r={args:{mode:"dark",appName:"Product Name",showLogo:!1,showAppName:!0,showDivider:!1,showMenuItems:!0,showAvatar:!0,menuItems:t,userInitials:"AS"}},s={args:{mode:"dark",appName:"Product Name",showLogo:!0,showAppName:!0,showDivider:!0,showMenuItems:!1,showAvatar:!0,userInitials:"AS"}},a={args:{mode:"dark",appName:"Product Name",showLogo:!0,showAppName:!0,showDivider:!0,showMenuItems:!1,showAvatar:!1}};var u,i,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: true,
    showAvatar: true,
    menuItems: sampleMenuItems,
    userInitials: 'AS'
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,h,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    mode: 'light',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: true,
    showAvatar: true,
    menuItems: sampleMenuItems,
    userInitials: 'AS'
  }
}`,...(c=(h=o.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var w,l,g;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: false,
    showAppName: true,
    showDivider: false,
    showMenuItems: true,
    showAvatar: true,
    menuItems: sampleMenuItems,
    userInitials: 'AS'
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var I,A,N;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: false,
    showAvatar: true,
    userInitials: 'AS'
  }
}`,...(N=(A=s.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var v,M,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: false,
    showAvatar: false
  }
}`,...(f=(M=a.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};const W=["DarkMode","LightMode","WithoutLogo","WithoutMenuItems","MinimalHeader"];export{e as DarkMode,o as LightMode,a as MinimalHeader,r as WithoutLogo,s as WithoutMenuItems,W as __namedExportsOrder,T as default};
