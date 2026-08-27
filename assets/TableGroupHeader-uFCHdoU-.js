import{j as t}from"./jsx-runtime-DztICxWZ.js";import{r as y,R as Y}from"./index-Bv9Y92EF.js";import{g as s}from"./styled-components.browser.esm-CVW2bgxI.js";import{a as J}from"./ExpandMore-Bd7rmlfk.js";import{I,b as Q}from"./Icon-DSqvK6Kv.js";import{B as R}from"./Button-DlNRQx8j.js";import{I as U}from"./InlineMessage-D0nF0rE-.js";import{C as W}from"./Checkbox-D2w4VPJI.js";import{c as M}from"./createSvgIcon-Ce6eLUkr.js";import{T as L}from"./Typography-CidD3oMh.js";const X=M(t.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),Z=M(t.jsx("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"})),ee=s.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({$isOpen:e})=>e?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,re=s.div`
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  width: 400px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,te=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[7]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
`,oe=s.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  margin: 0;
`;s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
    color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  }
`;const ne=s.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[7]};
`,ae=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,H=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e,$isDragging:l,$isLocked:c})=>c?e.colors.palette.primary[50]:l?e.colors.palette.neutral[100]:e.colors.palette.neutral[50]};
  border: 1px solid ${({theme:e,$isLocked:l})=>l?e.colors.palette.primary[200]:e.colors.palette.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"move"};
  transition: all 0.2s;
  opacity: ${({$isLocked:e})=>e?.7:1};
  
  &:hover {
    background-color: ${({theme:e,$isLocked:l})=>l?e.colors.palette.primary[50]:e.colors.palette.neutral[100]};
    border-color: ${({theme:e,$isLocked:l})=>l?e.colors.palette.primary[200]:e.colors.palette.neutral[400]};
  }
`,se=s.div`
  display: flex;
  align-items: center;
  color: ${({theme:e,$isLocked:l})=>l?e.colors.palette.neutral[400]:e.colors.palette.neutral[600]};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"grab"};
  opacity: ${({$isLocked:e})=>e?.5:1};
  
  &:active {
    cursor: ${({$isLocked:e})=>e?"not-allowed":"grabbing"};
  }
`,ie=s.span`
  flex: 1;
  font-family: ${({theme:e})=>e.typography.paragraph.medium.fontFamily};
  font-size: ${({theme:e})=>e.typography.paragraph.medium.fontSize};
  font-weight: ${({theme:e})=>e.typography.paragraph.medium.fontWeight};
  line-height: ${({theme:e})=>e.typography.paragraph.medium.lineHeight};
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
`,le=s(H)`
  margin-left: ${({theme:e})=>e.spacing[10]};
  background-color: ${({theme:e,$isDragging:l,$isLocked:c})=>c?e.colors.palette.primary[50]:e.colors.palette.neutral[100]};
`,z=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  transition: color 0.2s;

  &:hover {
    color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,ce=s.div`
  display: flex;
  align-items: center;
`,de=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all 0.2s;

  &:hover {
    background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
    color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,pe=s.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[7]};
  border-top: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
`,ue=({isOpen:e,onClose:l,columns:c,onColumnsChange:k,lockWarning:v,className:$})=>{const[p,f]=y.useState(c),[u,x]=y.useState(null),[w,C]=y.useState(!1),[j,T]=y.useState(new Set);y.useEffect(()=>{f(c)},[c]),y.useEffect(()=>{if(v){C(!0);const r=setTimeout(()=>C(!1),3e3);return()=>clearTimeout(r)}},[v]);const S=r=>{T(a=>{const o=new Set(a);return o.has(r)?o.delete(r):o.add(r),o})},O=r=>{f(a=>a.map(o=>o.id===r?o.subColumns?{...o,visible:!o.visible,subColumns:o.subColumns.map(i=>({...i,visible:!o.visible}))}:{...o,visible:!o.visible}:o.subColumns?{...o,subColumns:o.subColumns.map(i=>i.id===r?{...i,visible:!i.visible}:i)}:o))},B=r=>{const a=p.find(n=>n.id===r);if(!a)return;const o=p.filter(n=>n.locked&&n.id!=="checkbox").length;if(!a.locked&&o>=3){C(!0),setTimeout(()=>C(!1),3e3);return}const i=p.map(n=>n.id===r?n.subColumns?{...n,locked:!n.locked,subColumns:n.subColumns.map(g=>({...g,locked:!n.locked}))}:{...n,locked:!n.locked}:n),d=i.find(n=>n.id==="checkbox"),h=i.filter(n=>n.id!=="checkbox").sort((n,g)=>n.locked&&!g.locked?-1:!n.locked&&g.locked?1:n.order-g.order),b=d?[{...d,order:0},...h.map((n,g)=>({...n,order:g+1}))]:h.map((n,g)=>({...n,order:g}));f(b)},G=r=>{p[r].locked||x(r)},A=(r,a)=>{if(r.preventDefault(),u===null||u===a||p[a].locked||p[u].locked)return;const o=[...p],i=o[u];o.splice(u,1),o.splice(a,0,i);const d=o.map((m,h)=>({...m,order:h}));f(d),x(a)},P=()=>{x(null)},V=(r,a)=>{x(a)},_=(r,a,o)=>{r.preventDefault(),!(u===null||u===o)&&(f(i=>i.map(d=>{if(d.id===a&&d.subColumns){const m=[...d.subColumns],h=m[u];return m.splice(u,1),m.splice(o,0,h),{...d,subColumns:m}}return d})),x(o))},D=(r,a,o)=>{const i=r.subColumns&&r.subColumns.length>0,d=j.has(r.id),m=!!o,h=m?le:H;return t.jsxs(Y.Fragment,{children:[t.jsxs(h,{draggable:!r.locked&&!i,onDragStart:()=>{m&&o?V(o,a):i||G(a)},onDragOver:b=>{m&&o?_(b,o,a):i||A(b,a)},onDragEnd:P,$isDragging:u===a,$isLocked:r.locked,children:[i?t.jsx(z,{onClick:()=>S(r.id),children:d?t.jsx(J,{}):t.jsx(Q,{})}):t.jsx(z,{style:{visibility:"hidden"}}),t.jsx(ce,{children:t.jsx(W,{checked:r.visible!==!1,onChange:()=>O(r.id)})}),t.jsx(se,{$isLocked:r.locked||i,children:t.jsx(I,{name:"DragIndicator",size:"small"})}),t.jsx(ie,{children:r.label}),!m&&t.jsx(de,{onClick:()=>B(r.id),children:t.jsx(I,{name:r.locked?"Lock":"LockOpen",size:"small"})})]}),i&&d&&r.subColumns.map((b,n)=>D(b,n,r.id))]},r.id)},F=()=>{k(p),l()},q=()=>{f(c),l()},K=r=>{r.target===r.currentTarget&&q()};return t.jsx(ee,{$isOpen:e,onClick:K,children:t.jsxs(re,{className:$,children:[t.jsxs(te,{children:[t.jsx(oe,{children:"Table Settings"}),t.jsx(R,{onClick:q,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(I,{name:"Close",size:"small"}),children:"Close"})]}),t.jsxs(ne,{children:[w&&t.jsx("div",{style:{marginBottom:"16px"},children:t.jsx(U,{type:"warning",style:"accentBorder",text:"Maximum columns reached",descriptionText:"You can only freeze any 3 columns at a time.",showLeadingIcon:!0,showTrailingIcon:!1,action:!1,link:!1})}),t.jsx(ae,{children:p.filter(r=>r.id!=="checkbox").map((r,a)=>D(r,a))})]}),t.jsxs(pe,{children:[t.jsx(R,{onClick:q,variant:"secondary",children:"Cancel"}),t.jsx(R,{variant:"primary",onClick:F,children:"Apply Changes"})]})]})})};ue.__docgenInfo={description:"",methods:[],displayName:"TableSettings",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the settings modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when modal is closed"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:"Array of column configurations"},onColumnsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(columns: ColumnConfig[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},name:"columns"}],return:{name:"void"}}},description:"Callback when columns are updated"},lockWarning:{required:!1,tsType:{name:"boolean"},description:"Whether to show lock warning"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}}};const me=s.tr`
  background: ${({theme:e})=>e.colors.palette.secondary.cyan[100]};
  border-bottom: ${({theme:e})=>e.borderWidth[1]} solid ${({theme:e})=>e.colors.palette.neutral[300]};
  
  &:hover {
    background: ${({theme:e})=>e.colors.palette.secondary.cyan[200]};
  }
`,ge=s.td`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[7]};
  height: 48px;
`,fe=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[7]};
`,E=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  flex-shrink: 0;
  
  &:hover {
    color: ${({theme:e})=>e.colors.palette.primary[400]};
  }
  
  &:focus-visible {
    outline: ${({theme:e})=>e.borderWidth[2]} solid ${({theme:e})=>e.colors.palette.primary[400]};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
  }
`,he=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  flex-shrink: 0;
`,xe=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[7]};
  flex: 1;
`,N=({groupName:e,groupDescription:l,isExpanded:c,onToggle:k,colSpan:v,expandPosition:$="left",customContent:p,className:f,style:u,showCheckbox:x=!1,isSelected:w=!1,isIndeterminate:C=!1,onCheckboxChange:j})=>{const T=c?X:Z;return t.jsx(me,{$isExpanded:c,className:f,style:u,children:t.jsx(ge,{colSpan:v,children:t.jsxs(fe,{children:[$==="left"&&t.jsx(E,{onClick:k,"aria-label":c?"Collapse group":"Expand group","aria-expanded":c,children:t.jsx(T,{sx:{fontSize:24}})}),x&&j&&t.jsx("div",{onClick:S=>{S.stopPropagation(),j(!w)},style:{cursor:"pointer",display:"inline-flex",marginRight:"8px"},children:t.jsx(W,{checked:w,onChange:()=>{},"aria-label":`Select all rows in ${e}`})}),t.jsxs(he,{children:[t.jsx(L,{variant:"paragraph",weight:"semibold",color:"primary",children:e}),l&&t.jsx(L,{variant:"caption",weight:"medium",color:"secondary",style:{letterSpacing:"1px"},children:l})]}),p&&t.jsx(xe,{children:p}),$==="right"&&t.jsx(E,{onClick:k,"aria-label":c?"Collapse group":"Expand group","aria-expanded":c,style:{marginLeft:"auto"},children:t.jsx(T,{sx:{fontSize:24}})})]})})})};N.displayName="TableGroupHeader";N.__docgenInfo={description:"",methods:[],displayName:"TableGroupHeader",props:{groupName:{required:!0,tsType:{name:"string"},description:"Group name/title"},groupDescription:{required:!1,tsType:{name:"string"},description:"Optional short description"},isExpanded:{required:!0,tsType:{name:"boolean"},description:"Whether the group is expanded"},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when expand/collapse is clicked"},colSpan:{required:!0,tsType:{name:"number"},description:"Number of columns to span"},expandPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Position of expand/collapse button",defaultValue:{value:"'left'",computed:!1}},customContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content to render in the header (chips, buttons, etc.)"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Custom style"},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"Show checkbox for group selection",defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"Whether all rows in group are selected",defaultValue:{value:"false",computed:!1}},isIndeterminate:{required:!1,tsType:{name:"boolean"},description:"Whether some (but not all) rows in group are selected",defaultValue:{value:"false",computed:!1}},onCheckboxChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Callback when checkbox is clicked"}}};export{N as T,ue as a};
