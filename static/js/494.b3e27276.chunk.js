"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[494],{9494:(n,e,t)=>{t.r(e),t.d(e,{default:()=>M});var r=t(7689),o=t(7834),s=t(5705),i=t(8007),a=t(4420),c=t(6052);const l=n=>{let{contacts:e}=n;return e.items},d=n=>{let{contacts:e}=n;return e.isLoading},x=n=>{let{contacts:e}=n;return e.error};var p,u,m,h,g,f=t(5299),b=t(168),j=t(7924);const v=(0,j.ZP)(s.l0)(p||(p=(0,b.Z)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  margin-bottom: 16px;\n  align-items: center;\n"]))),Z=j.ZP.label(u||(u=(0,b.Z)(["\n  font-size: 20px;\n"]))),w=(0,j.ZP)(s.gN)(m||(m=(0,b.Z)(["\n  padding: 10px;\n  border: 1px solid #f28f2c;\n  line-height: 1.11;\n  letter-spacing: 0.72px;\n  font-size: 20px;\n  color: #736c65;\n  font-weight: 600;\n\n  border-radius: 10px;\n  width: 400px;\n"]))),y=(0,j.ZP)(s.Bc)(h||(h=(0,b.Z)(["\n  font-size: 24px;\n  color: #f28f2c;\n"]))),k=j.ZP.button(g||(g=(0,b.Z)(["\n  padding: 10px 15px;\n  background-color: #eab886;\n  color: white;\n\n  border: none;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  cursor: pointer;\n\n  font-size: 24px;\n\n  transition: background-color 0.3s ease, color 0.3s ease;\n  width: 280px;\n\n  &:active {\n    background-color: grey;\n  }\n"])));var P=t(3329);const z=(0,i.Ry)().shape({name:(0,i.Z_)().trim().matches(/^[a-zA-Z\s]+$/,"Invalid name format").required("This field is required"),number:(0,i.Z_)().trim().matches(/^[^a-zA-Z]*\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}[^a-zA-Z]*$/,"Invalid phone number format").required("This field is required")}),F=()=>{const n=(0,a.v9)(l),e=(0,a.I0)();return(0,P.jsx)(s.J9,{initialValues:{name:"",number:""},validationSchema:z,onSubmit:(t,r)=>{let{name:o,number:s}=t;return n.find((n=>{let{name:e}=n;return e.toLowerCase()===o.toLowerCase()}))?(f.Report.success("Notiflix Success","".concat(o," is already in contacts"),"Okay"),void r.resetForm()):n.find((n=>{let{number:e}=n;return e.toLowerCase()===s.toLowerCase()}))?(f.Report.success("Notiflix Success","".concat(s," is already in contacts"),"Okay"),void r.resetForm()):(f.Report.success("Notiflix Success","".concat(o," added to your contact list"),"Okay"),e((0,c.uK)({name:o,number:s})),void r.resetForm())},children:(0,P.jsxs)(v,{children:[(0,P.jsxs)("div",{children:[(0,P.jsx)(Z,{htmlFor:"name",children:"Please, enter name"}),(0,P.jsx)(w,{type:"text",name:"name",placeholder:" "}),(0,P.jsx)(y,{name:"name",component:"div"})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)(Z,{htmlFor:"name",children:"Please, enter number"}),(0,P.jsx)(w,{type:"text",name:"number",placeholder:" "}),(0,P.jsx)(y,{name:"number",component:"div"})]}),(0,P.jsx)(k,{type:"submit",children:"Add contact"})]})})};var C=t(2791);const L=n=>{let{filter:e}=n;return e.filter};var I;const S=j.ZP.button(I||(I=(0,b.Z)(["\n  display: inline-flex;\n  align-items: center;\n  text-transform: uppercase;\n  text-align: center;\n\n  color: grey;\n  text-shadow: 1px 1px 1px #d1c4c4;\n  background-color: white;\n\n  font-size: 16px;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  padding: 8px;\n  border: 1px solid #f28f2c;\n\n  border-radius: 10px;\n  box-shadow: rgba(216, 225, 215, 0.24) 0px 3px 8px;\n"]))),_=n=>{let{id:e,name:t,number:r,onDelete:o}=n;return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("li",{children:[" ",t,": ",r,(0,P.jsx)(S,{type:"button",onClick:()=>o(e)})]})})};var N,q,A,R=t(4137);const T=j.ZP.ul(N||(N=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  gap: 16px;\n  margin-top: 20px;\n  padding: 0;\n\n  list-style: none;\n"]))),D=j.ZP.span(q||(q=(0,b.Z)(["\n  font-size: 24px;\n  padding-right: 12px;\n"]))),O=j.ZP.button(A||(A=(0,b.Z)(["\n  display: inline-flex;\n  align-items: center;\n  text-transform: uppercase;\n  text-align: center;\n\n  color: grey;\n  text-shadow: 1px 1px 1px #d1c4c4;\n  background-color: white;\n\n  font-size: 16px;\n  margin-bottom: 20px;\n  padding: 8px;\n  border: 1px solid #f28f2c;\n\n  border-radius: 10px;\n  box-shadow: rgba(216, 225, 215, 0.24) 0px 3px 8px;\n"]))),K=()=>{const n=(0,a.I0)(),e=(0,a.v9)(l),t=(0,a.v9)(d),r=(0,a.v9)(x),o=(0,a.v9)(L);(0,C.useEffect)((()=>{n((0,c.yF)())}),[n]);const s=(()=>{const n=o.toLowerCase();return e.filter((e=>{let{name:t}=e;return t.toLowerCase().includes(n)}))})(),i=!s.length&&!t&&!r,p=e=>{n((0,c.GK)(e))};return(0,P.jsxs)(P.Fragment,{children:[t&&(0,P.jsx)(R.a,{}),i&&(0,P.jsx)("p",{children:"No contact details"}),s.length>0&&(0,P.jsx)(T,{children:s.map((n=>{let{id:e,name:t,number:r}=n;return(0,P.jsxs)(_,{id:e,children:[(0,P.jsxs)(D,{children:[t,":"]}),(0,P.jsx)(D,{children:r}),(0,P.jsx)(O,{type:"button",onDelete:()=>p,children:"Delete"})]},e)}))})]})};var $,B,E=t(4563),G=t(1634);const J=j.ZP.label($||($=(0,b.Z)(["\n  font-size: 20px;\n  color: #ec8014;\n"]))),V=j.ZP.input(B||(B=(0,b.Z)(["\n  padding: 10px;\n  border: 1px solid #f28f2c;\n  line-height: 1.11;\n  letter-spacing: 0.72px;\n  font-size: 20px;\n\n  color: #736c65;\n\n  border-radius: 10px;\n  width: 400px;\n"]))),H=()=>{const n=(0,a.v9)(L),e=(0,a.I0)(),t=(0,E.x0)();return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(J,{children:(0,P.jsx)(V,{type:"text",placeholder:"Search",value:n,name:"filter",id:t,onChange:n=>{e((0,G.Tv)(n.currentTarget.value))}})})})},M=()=>{const{isLoggedIn:n}=(0,o.a)();return(0,P.jsx)(P.Fragment,{children:n?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(F,{}),(0,P.jsx)(H,{}),(0,P.jsx)(K,{})]}):(0,P.jsx)(r.Fg,{to:"/login"})})}}}]);
//# sourceMappingURL=494.b3e27276.chunk.js.map