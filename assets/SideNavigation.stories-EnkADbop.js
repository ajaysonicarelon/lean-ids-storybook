import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{S as U}from"./SideNavigation-DfBcVL_w.js";import{I as s}from"./Icon-BytZhcyh.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./MenuItem-DPngPyes.js";import"./Avatar-yJnDtia8.js";const y={title:"Navigation/SideNavigation",component:U,parameters:{layout:"fullscreen",docs:{description:{component:"A vertical navigation sidebar that can be expanded or collapsed. Contains brand logo, navigation groups, and user profile."}}},tags:["autodocs"],argTypes:{state:{control:"radio",options:["expanded","collapsed"],description:"Sidebar state"}}},n=[{title:"MAIN MENU",items:[{id:"home",label:"Home",icon:e.jsx(s,{name:"Home",size:"medium"}),active:!0},{id:"about",label:"About Us",icon:e.jsx(s,{name:"Info",size:"medium"}),showIndicator:!0},{id:"services",label:"Services",icon:e.jsx(s,{name:"Settings",size:"medium"})},{id:"blog",label:"Blog",icon:e.jsx(s,{name:"Edit",size:"medium"})},{id:"portfolio",label:"Portfolio",icon:e.jsx(s,{name:"Visibility",size:"medium"})}]},{title:"SETTINGS",items:[{id:"profile",label:"Profile",icon:e.jsx(s,{name:"AccountCircle",size:"medium"})},{id:"preferences",label:"Preferences",icon:e.jsx(s,{name:"Tune",size:"medium"})}]}],m={initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"},a={args:{state:"expanded",groups:n,user:m}},r={args:{state:"collapsed",groups:n,user:m}},o={args:{state:"expanded",groups:n}},i={args:{state:"expanded",groups:[n[0]],user:m}},t={args:{state:"expanded",groups:[{title:"NOTIFICATIONS",items:[{id:"messages",label:"Messages",icon:e.jsx(s,{name:"Info",size:"medium"}),showIndicator:!0},{id:"alerts",label:"Alerts",icon:e.jsx(s,{name:"Warning",size:"medium"}),showIndicator:!0},{id:"updates",label:"Updates",icon:e.jsx(s,{name:"CheckCircle",size:"medium"})}]}],user:m}};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    state: 'expanded',
    groups: sampleGroups,
    user: sampleUser
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,u,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    state: 'collapsed',
    groups: sampleGroups,
    user: sampleUser
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,b,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    state: 'expanded',
    groups: sampleGroups
  }
}`,...(I=(b=o.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var S,f,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    state: 'expanded',
    groups: [sampleGroups[0]],
    user: sampleUser
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,z,N;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    state: 'expanded',
    groups: [{
      title: 'NOTIFICATIONS',
      items: [{
        id: 'messages',
        label: 'Messages',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true
      }, {
        id: 'alerts',
        label: 'Alerts',
        icon: <Icon name="Warning" size="medium" />,
        showIndicator: true
      }, {
        id: 'updates',
        label: 'Updates',
        icon: <Icon name="CheckCircle" size="medium" />
      }]
    }],
    user: sampleUser
  }
}`,...(N=(z=t.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const O=["Expanded","Collapsed","WithoutUser","SingleGroup","WithNotifications"];export{r as Collapsed,a as Expanded,i as SingleGroup,t as WithNotifications,o as WithoutUser,O as __namedExportsOrder,y as default};
