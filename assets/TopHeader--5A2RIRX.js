import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{c as o}from"./styled-components.browser.esm-BIi91Tbq.js";import{B as h,M as v}from"./MenuItem-DPngPyes.js";import{A as g}from"./Avatar-yJnDtia8.js";const x=o.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  overflow: hidden;
  z-index: 100;
  
  ${({$mode:e,theme:t})=>e==="light"?`
        background-color: ${t.colors.palette.neutral[50]};
        border-bottom: 1px solid ${t.colors.palette.neutral[400]};
      `:`
      background-color: ${t.colors.palette.primary[800]};
    `}
`,w=o.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
`,y=o.div`
  width: 2px;
  height: 32px;
  flex-shrink: 0;
  background-color: ${({$mode:e})=>e==="light"?"#464646":"#eee"};
`,b=o.div`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
  flex-shrink: 0;
  color: ${({$mode:e,theme:t})=>e==="light"?t.colors.palette.neutral[800]:t.colors.palette.neutral[50]};
`,T=o.div`
  display: flex;
  align-items: center;
  gap: 22px;
  flex-shrink: 0;
`,k=o.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`,j=({mode:e="dark",appName:t="Product Name",showLogo:s=!0,showAppName:i=!0,showDivider:l=!0,showMenuItems:n=!0,showAvatar:d=!0,menuItems:u=[],userInitials:p="AS",userAvatarUrl:c,className:m,children:f})=>a.jsxs(x,{$mode:e,className:m,role:"banner",children:[a.jsxs(w,{children:[s&&a.jsx(h,{variant:"logo",mode:e}),l&&a.jsx(y,{$mode:e}),i&&a.jsx(b,{$mode:e,children:t})]}),a.jsxs(T,{children:[n&&a.jsx(k,{children:f||u.map(r=>a.jsx(v,{border:"bottom",mode:e,state:r.active?"active":"inactive",label:r.label,iconS:r.icon,showIcon:!0,showLabel:!0,showIndicator:r.showIndicator,onClick:r.onClick},r.id))}),d&&a.jsx(g,{size:"small",initials:p,src:c,alt:"User avatar"})]})]});j.__docgenInfo={description:"",methods:[],displayName:"TopHeader",props:{mode:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:"Color mode",defaultValue:{value:"'dark'",computed:!1}},appName:{required:!1,tsType:{name:"string"},description:"Application name",defaultValue:{value:"'Product Name'",computed:!1}},showLogo:{required:!1,tsType:{name:"boolean"},description:"Whether to show logo",defaultValue:{value:"true",computed:!1}},showAppName:{required:!1,tsType:{name:"boolean"},description:"Whether to show app name",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"Whether to show divider between logo and app name",defaultValue:{value:"true",computed:!1}},showMenuItems:{required:!1,tsType:{name:"boolean"},description:"Whether to show menu items",defaultValue:{value:"true",computed:!1}},showAvatar:{required:!1,tsType:{name:"boolean"},description:"Whether to show avatar",defaultValue:{value:"true",computed:!1}},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"TopHeaderMenuItem"}],raw:"TopHeaderMenuItem[]"},description:"Menu items",defaultValue:{value:"[]",computed:!1}},userInitials:{required:!1,tsType:{name:"string"},description:"User initials for avatar",defaultValue:{value:"'AS'",computed:!1}},userAvatarUrl:{required:!1,tsType:{name:"string"},description:"User avatar image URL"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content (overrides default menu items)"}}};export{j as T};
