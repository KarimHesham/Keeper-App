(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(11),s=n.n(i),o=n(18),l=n(10),j=n(31),u=n(30),d=n(29),b=n(191),h=n(184),m=n(181),p=n(188),x=n(176),O=n(182),f=n(189),g=n(62),v=n.n(g),k=n(94),N=n(177),C=n(92),w=n(183),y=n(180),S=n(178),W=n(179),T=n(22),D=n.n(T);function q(){return Object(a.jsxs)(k.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(x.a,{href:"https://thisiskeeper.herokuapp.com",color:"inherit",children:"Keeper"})," ",(new Date).getFullYear(),"."]})}var F=function(){return Object(a.jsx)(f.a,{mt:8,children:Object(a.jsx)(q,{})})},I=Object(N.a)((function(e){return{body:{},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.warning.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),backgroundColor:e.palette.warning.dark,color:"#fff","&:hover":{backgroundColor:e.palette.warning.main}},signupText:{color:"#fff"}}})),U=Object(C.a)({palette:{primary:S.a,secondary:W.a}});function A(){var e=I(),t=Object(l.e)(),n=Object(c.useState)({firstName:"",lastName:"",username:"",email:"",password:""}),r=Object(d.a)(n,2),i=r[0],s=r[1];function o(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},n,a))}))}return Object(a.jsxs)(y.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(m.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(b.a,{className:e.avatar,children:Object(a.jsx)(v.a,{})}),Object(a.jsx)(k.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(a.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),D.a.post("http://localhost:3000/signup",i).then((function(e){t.push("/notes/"+i.username)})).catch((function(e){return console.log(e)}))},children:[Object(a.jsxs)(O.a,{container:!0,spacing:2,children:[Object(a.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(w.a,{theme:U,children:Object(a.jsx)(p.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,color:"primary",value:i.firstName,onChange:o,className:e.textField})})}),Object(a.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(w.a,{theme:U,children:Object(a.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",value:i.lastName,onChange:o})})}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{theme:U,children:Object(a.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",value:i.username,onChange:o})})}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{theme:U,children:Object(a.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:i.email,onChange:o})})}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{theme:U,children:Object(a.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:i.password,onChange:o})})})]}),Object(a.jsx)(h.a,{type:"submit",fullWidth:!0,className:e.submit,children:Object(a.jsx)("span",{className:e.signupText,children:"Sign Up"})}),Object(a.jsx)(O.a,{container:!0,justify:"flex-end",children:Object(a.jsx)(O.a,{item:!0,children:Object(a.jsx)(x.a,{href:"https://thisiskeeper.herokuapp.com/signin",variant:"body2",color:"textSecondary",children:"Already have an account? Sign in"})})})]})]}),Object(a.jsx)(f.a,{mt:8,children:Object(a.jsx)(F,{})})]})}var E=n(185),K=n(190),L=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.warning.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:e.palette.warning.dark,color:"#fff","&:hover":{backgroundColor:e.palette.warning.main,color:"#fff"},signinText:{color:"#fff"}}}})),_=Object(C.a)({palette:{primary:S.a,secondary:W.a}});function J(){var e=L(),t=Object(l.e)(),n=Object(c.useState)({username:"",password:""}),r=Object(d.a)(n,2),i=r[0],s=r[1];function o(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},n,a))}))}return Object(a.jsxs)(y.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(m.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(b.a,{className:e.avatar,children:Object(a.jsx)(v.a,{})}),Object(a.jsx)(k.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(a.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),D.a.post("https://thisiskeeper.herokuapp.com/signin",i).then((function(e){t.push("/notes/"+i.username)})).catch((function(e){return console.log(e)}))},children:[Object(a.jsx)(w.a,{theme:_,children:Object(a.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,color:"primary",onChange:o})}),Object(a.jsx)(w.a,{theme:_,children:Object(a.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:o})}),Object(a.jsx)(E.a,{control:Object(a.jsx)(K.a,{value:"remember",color:"default"}),label:"Remember me"}),Object(a.jsx)(h.a,{type:"submit",fullWidth:!0,className:e.submit,children:"Sign In"}),Object(a.jsxs)(O.a,{container:!0,children:[Object(a.jsx)(O.a,{item:!0,xs:!0,children:Object(a.jsx)(x.a,{href:"#",variant:"body2",color:"textSecondary",children:"Forgot password?"})}),Object(a.jsx)(O.a,{item:!0,children:Object(a.jsx)(x.a,{href:"https://thisiskeeper.herokuapp.com/signup",variant:"body2",color:"textSecondary",children:"Don't have an account? Sign Up"})})]})]})]}),Object(a.jsx)(f.a,{mt:8,children:Object(a.jsx)(F,{})})]})}var P=n(93),B=(n(140),n(63)),H=n.n(B),M=n(89),Q=n.n(M);var R=function(){var e=Object(l.e)();return Object(a.jsx)(o.a,{children:Object(a.jsx)("header",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(a.jsxs)("h1",{children:[Object(a.jsx)(H.a,{className:"keeperIcon"}),"Keeper"]})}),Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)(Q.a,{onClick:function(){D.a.get("http://localhost:3000/notes/logout").then((function(t){e.push("/")})).catch((function(e){console.log(e)}))},className:"logout"})})]})})})},Y=n(90),z=n.n(Y);var G=function(e){var t=Object(l.f)().username;return Object(a.jsxs)("div",{className:"note",children:[Object(a.jsx)("h1",{children:e.title}),Object(a.jsx)("p",{children:e.content}),Object(a.jsx)("button",{onClick:function(){D.a.delete("http://localhost:3000/notes/".concat(t,"/")+e.id).then((function(e){return"Note Deleted"})).catch((function(e){return console.log(e)})),e.onDelete(e.id)},children:Object(a.jsx)(z.a,{})})]})},V=n(91),X=n.n(V),Z=n(187),$=n(186);var ee=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)({id:"",title:"",content:""}),o=Object(d.a)(s,2),b=o[0],h=o[1],m=Object(l.f)();function p(e){var t=e.target,n=t.name,a=t.value;h((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},n,a))}))}return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"create-note",children:[r&&Object(a.jsx)("input",{name:"title",onChange:p,value:b.title,placeholder:"Title"}),Object(a.jsx)("textarea",{name:"content",onClick:function(){i(!0)},onChange:p,value:b.content,placeholder:"Take a note...",rows:r?3:1}),Object(a.jsx)($.a,{in:r,children:Object(a.jsx)(Z.a,{onClick:function(t){var n=m.username;D.a.post("http://localhost:3000/notes/".concat(n,"/add"),b).then((function(t){b.id=t.data._id,e.onAdd(b)})).catch((function(e){return console.log(e)})),h({id:"",title:"",content:""}),t.preventDefault()},children:Object(a.jsx)(X.a,{})})})]})})};n(141);var te=function(){var e=Object(l.f)().username,t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],i=n[1];function s(e){i((function(t){return t.filter((function(t){return t._id!==e}))}))}return Object(c.useEffect)((function(){D.a.get("http://localhost:3000/notes/".concat(e),r).then((function(e){i(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(R,{}),Object(a.jsxs)(O.a,{container:!0,children:[Object(a.jsx)(O.a,{item:!0,xs:!0,children:Object(a.jsx)(ee,{onAdd:function(e){i((function(t){return[].concat(Object(P.a)(t),[e])}))}})}),Object(a.jsx)(O.a,{container:!0,children:Object(a.jsx)(O.a,{item:!0,xs:!0,children:function(){if(r.length>0)return r.map((function(e,t){return Object(a.jsx)(G,{id:e._id,title:e.title,content:e.content,onDelete:s},t)}))}()})})]}),Object(a.jsx)(F,{})]})},ne=(n(142),Object(N.a)((function(e){return{container:{marginTop:"5%"},submit:{margin:e.spacing(0,0,2),backgroundColor:e.palette.warning.dark,color:"#fff","&:hover":{backgroundColor:e.palette.warning.main}},submitOutline:{margin:e.spacing(1,0,2),backgroundColor:e.palette.background.default,color:e.palette.warning.dark,textTransform:"none",fontWeight:"500",borderColor:e.palette.background.default,"&:hover":{borderColor:e.palette.warning.dark,backgroundColor:e.palette.background.default,textDecoration:"none"}},signupText:{color:"#fff"},orText:{marginLeft:"48%",color:e.palette.text.secondary,fontWeight:"100"},span:{"&:hover":{textDecoration:"none"}}}})));function ae(){var e=ne();return Object(a.jsxs)(y.a,{component:"main",maxWidth:"xs",className:e.container,children:[Object(a.jsx)(m.a,{}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)("div",{className:"Home",children:Object(a.jsxs)("div",{className:"lander",children:[Object(a.jsx)(H.a,{className:"logo"}),Object(a.jsx)("h1",{children:"Keeper"}),Object(a.jsx)("p",{className:"text-muted",children:"Quickly capture what's on your mind"})]})})}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)(x.a,{href:"https://thisiskeeper.herokuapp.com/signup",children:Object(a.jsx)(h.a,{type:"submit",fullWidth:!0,className:e.submit,children:Object(a.jsx)("span",{className:e.signupText,children:"Sign Up"})})})}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)("span",{className:e.orText,children:"or"})}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)(x.a,{href:"https://thisiskeeper.herokuapp.com/signin",children:Object(a.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"outlined",className:e.submitOutline,children:Object(a.jsx)("span",{children:"Login"})})})}),Object(a.jsx)(F,{})]})}var ce=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(l.a,{path:"/",exact:!0,component:ae}),Object(a.jsx)(l.a,{path:"/signup",exact:!0,component:A}),Object(a.jsx)(l.a,{path:"/signin",exact:!0,component:J}),Object(a.jsx)(l.a,{path:"/notes/:username",exact:!0,component:te}),Object(a.jsx)(l.a,{path:"/notes/:username/add",exact:!0,component:ee}),Object(a.jsx)(l.a,{path:"/notes/:username/:id",exact:!0,component:G})]})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(ce,{})})}),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.20477d4e.chunk.js.map