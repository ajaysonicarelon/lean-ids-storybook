import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{r as u}from"./index-B0WjJBI_.js";import{g as l}from"./styled-components.browser.esm-DVcPNpfh.js";import{I as j}from"./InputField-B2MYZsZr.js";import{I as y}from"./Icon-D1GQI8nt.js";import{C as L}from"./Checkbox-CWZMyd52.js";import{R as O}from"./RadioButton-BHbwfvFd.js";import{F as R}from"./FieldImportance-BcdMchzX.js";import{H as C}from"./HelpingText-DBmPat_K.js";const N=l.div`
  position: relative;
  width: 100%;
`,W=l.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 300px;
  background: #ffffff;
  border: 1px solid #D5D5D5;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  overflow-y: auto;
  overflow-x: hidden;
  display: ${({$isOpen:r})=>r?"block":"none"};
`,H=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  cursor: ${({$disabled:r})=>r?"not-allowed":"pointer"};
  background: ${({$selected:r})=>r?"#F8F7FB":"#ffffff"};
  opacity: ${({$disabled:r})=>r?.5:1};
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: ${({$selected:r})=>r?500:400};
  color: #222222;
  transition: background 0.2s;

  &:hover {
    background: ${({$disabled:r})=>r?"#ffffff":"#F5F5F5"};
  }
`,P=l.div`
  padding: 20px;
  text-align: center;
  color: #909090;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
`,B=l.div`
  padding: 8px 8px 8px 8px;
  border-bottom: 1px solid #E5E5E5;
  background: #ffffff;
  
  /* Ensure the input field inside doesn't overflow */
  & > div {
    width: 100%;
  }
`,Q=l.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 4px;
`,_=l.label`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
`,K=({label:r,placeholder:T="Placeholder",options:o=[],value:s,onChange:n,multiple:d=!1,searchable:v=!1,showLeadingIcon:q=!0,showTrailingIcon:E=!0,required:I=!1,disabled:i=!1,error:b=!1,helperText:w,size:k="default",className:z,showSelectionIndicator:F=!0})=>{const[c,f]=u.useState(!1),[p,m]=u.useState(""),x=u.useRef(null),V=()=>{if(!s)return"";if(d&&Array.isArray(s)){if(s.length===0)return"";if(s.length===1){const t=o.find(h=>h.value===s[0]);return(t==null?void 0:t.label)||""}return`${s.length} selected`}const e=o.find(t=>t.value===s);return(e==null?void 0:e.label)||""},S=v&&p?o.filter(e=>e.label.toLowerCase().includes(p.toLowerCase())):o,A=e=>{if(!i)if(d){const t=Array.isArray(s)?s:[],h=t.includes(e)?t.filter(D=>D!==e):[...t,e];n==null||n(h)}else n==null||n(e),f(!1),m("")},g=e=>d&&Array.isArray(s)?s.includes(e):s===e;u.useEffect(()=>{const e=t=>{x.current&&!x.current.contains(t.target)&&(f(!1),m(""))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const $=V();return a.jsxs(N,{ref:x,className:z,children:[a.jsxs(Q,{children:[a.jsx(_,{children:r}),I&&a.jsx(R,{variant:"asterisk",style:"normal"})]}),a.jsx("div",{onClick:()=>!i&&f(!c),children:a.jsx(j,{value:$,placeholder:T,disabled:i,error:b,size:k,fullWidth:!0,leadingIcon:q?a.jsx(y,{name:"Search",size:"small"}):void 0,trailingIcon:E?a.jsx(y,{name:c?"ExpandLess":"ExpandMore",size:"small"}):void 0,onKeyDown:e=>e.preventDefault(),onFocus:e=>e.target.blur(),style:{cursor:i?"not-allowed":"pointer"}})}),a.jsxs(W,{$isOpen:c&&!i,children:[v&&a.jsx(B,{children:a.jsx(j,{value:p,onChange:e=>m(e.target.value),placeholder:"Search...",size:"small",fullWidth:!0,leadingIcon:a.jsx(y,{name:"Search",size:"small"}),autoFocus:!0})}),S.length===0?a.jsx(P,{children:"No options found"}):S.map(e=>a.jsxs(H,{$selected:g(e.value),$disabled:!!e.disabled,onClick:()=>!e.disabled&&A(e.value),children:[F&&(d?a.jsx(L,{checked:g(e.value),disabled:e.disabled,size:"default",onChange:()=>{}}):a.jsx(O,{checked:g(e.value),disabled:e.disabled,size:"default",onChange:()=>{}})),a.jsx("span",{children:e.label})]},e.value))]}),w&&a.jsx("div",{style:{marginTop:"4px"},children:a.jsx(C,{text:w,state:b?"error":"default",showIcon:!0,size:"default"})})]})};K.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!0,tsType:{name:"string"},description:"Field label"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Placeholder'",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"Array of options",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Selected value(s)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:"Change handler"},multiple:{required:!1,tsType:{name:"boolean"},description:"Enable multiple selection",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"Enable search/filter",defaultValue:{value:"false",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show leading search icon",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show trailing dropdown icon",defaultValue:{value:"true",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Required field",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text"},size:{required:!1,tsType:{name:"union",raw:"'xsmall' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"},showSelectionIndicator:{required:!1,tsType:{name:"boolean"},description:"Show selection indicator (radio/checkbox)",defaultValue:{value:"true",computed:!1}}}};export{K as S};
