import{j as f}from"./jsx-runtime-DSvmvvsx.js";import{g as m,f as c}from"./styled-components.browser.esm-DVcPNpfh.js";const y=m.div`
  display: flex;
  /* align-items removed - allows text alignment to work independently */
  gap: ${({theme:n})=>n.spacing[4]};
  width: 100%; /* Constrain width for text truncation */
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  ${({$aligned:n,$border:t,$state:a,$mode:o,theme:e})=>{const d=n==="vertical",u=d?"flex-direction: column;":"",r=d?`padding: ${e.spacing[2]} ${e.spacing[2]};`:t==="left"?`padding: ${e.spacing[7]};`:`padding: ${e.spacing[4]} ${e.spacing[5]}; justify-content: center;`,l=`border-radius: ${e.borderRadius.sm};`;if(a==="inactive")return c`
        ${u}
        ${r}
        background-color: transparent;
        
        &:hover {
          background-color: ${o==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(199, 199, 199, 0.05)"};
          ${l}
        }
      `;const i=o==="dark"?e.colors.palette.neutral[50]:e.colors.palette.neutral[900],p=o==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(199, 199, 199, 0.1)",s=t==="left"?`border-left: 3px solid ${i};`:`border-bottom: 3px solid ${i};`;return c`
      ${u}
      ${r}
      ${l}
      background-color: ${p};
      ${s}
    `}}
`,h=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({$mode:n,theme:t})=>{const a=n==="dark"?t.colors.palette.neutral[50]:t.colors.palette.neutral[900];return c`
      color: ${a};
      
      svg {
        color: ${a};
      }
    `}}
`,w=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  min-width: 0; /* Important for text truncation to work */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  /* Dynamic text alignment: center for short labels (≤7 chars), left for longer labels */
  text-align: ${({$aligned:n,$label:t})=>n==="vertical"?((t==null?void 0:t.length)||0)>7?"left":"center":"left"};

  ${({$aligned:n,$border:t,$state:a,$mode:o,theme:e})=>{const d=a==="active",u=o==="dark",r=t==="left",l=n==="vertical",i=l?e.fontSizes[12]:r?e.fontSizes[16]:e.fontSizes[14],p=l?e.lineHeights[14]:r?e.lineHeights[19]:e.lineHeights[16],s=d?e.fontWeights.semibold:e.fontWeights.regular,v=u?e.colors.palette.neutral[50]:e.colors.palette.neutral[900];return c`
      font-family: ${e.fonts.primary};
      font-size: ${i};
      line-height: ${p};
      font-weight: ${s};
      color: ${v};
    `}}
`,M=m.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({theme:n})=>n.colors.palette.error[500]};
  
  ${({$border:n,$aligned:t})=>t==="vertical"?c`
        right: 0;
        top: 0;
      `:n==="bottom"?c`
        right: 8px;
        top: 8px;
      `:c`
      right: 16px;
      top: 15px;
    `}
`,T=m.div`
  position: relative;
  width: 100%;
`,k=({aligned:n="horizontal",border:t="bottom",iconM:a,iconS:o,mode:e="dark",nestedMenu:d=!1,showIcon:u=!0,showIndicator:r=!1,showLabel:l=!0,state:i="inactive",type:p="single",label:s="Menu Item",onClick:v,onMouseEnter:$,onMouseLeave:b,className:x})=>{const g=t==="left"?a:o;return f.jsxs(T,{className:x,onMouseEnter:$,onMouseLeave:b,children:[f.jsxs(y,{$aligned:n,$border:t,$mode:e,$state:i,$type:p,$label:s,onClick:v,role:"button",tabIndex:0,"aria-current":i==="active"?"page":void 0,children:[u&&g&&f.jsx(h,{$mode:e,children:g}),l&&f.jsx(w,{$aligned:n,$border:t,$state:i,$mode:e,$label:s,children:s}),d&&p==="single"&&n==="horizontal"&&f.jsx(h,{$mode:e,children:t==="bottom"?"▼":"▶"})]}),r&&i==="inactive"&&f.jsx(M,{$mode:e,$border:t,$aligned:n})]})};k.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{aligned:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Alignment direction",defaultValue:{value:"'horizontal'",computed:!1}},border:{required:!1,tsType:{name:"union",raw:"'bottom' | 'left'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"Border position - bottom for horizontal nav, left for vertical nav",defaultValue:{value:"'bottom'",computed:!1}},iconM:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for medium size (24px) - used in side navigation"},iconS:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for small size (16px) - used in top header"},mode:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:"Color mode",defaultValue:{value:"'dark'",computed:!1}},nestedMenu:{required:!1,tsType:{name:"boolean"},description:"Whether this menu item has nested children",defaultValue:{value:"false",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show icon",defaultValue:{value:"true",computed:!1}},showIndicator:{required:!1,tsType:{name:"boolean"},description:"Whether to show notification indicator",defaultValue:{value:"false",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to show label text",defaultValue:{value:"true",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'active' | 'inactive'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'inactive'"}]},description:"Active/inactive state",defaultValue:{value:"'inactive'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'single' | 'nested'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'nested'"}]},description:"Menu item type - single or nested",defaultValue:{value:"'single'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text",defaultValue:{value:"'Menu Item'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Mouse enter handler"},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Mouse leave handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};export{k as M};
