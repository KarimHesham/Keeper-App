(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),s=n(11),i=n.n(s),o=n(18),l=n(10),j=n(31),u=n(30),d=n(29),h=n(191),m=n(184),b=n(181),p=n(188),x=n(176),O=n(182),f=n(189),g=n(62),v=n.n(g),k=n(94),N=n(177),C=n(92),w=n(183),y=n(180),S=n(178),T=n(179),W=n(19),D=n.n(W);function q(){return Object(a.jsxs)(k.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(x.a,{href:"https://thisiskeeper.herokuapp.com",color:"inherit",children:"Keeper"})," ",(new Date).getFullYear(),"."]})}var A=function(){return Object(a.jsx)(f.a,{mt:8,children:Object(a.jsx)(q,{})})},F=Object(N.a)((function(e){return{body:{},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.warning.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),backgroundColor:e.palette.warning.dark,color:"#fff","&:hover":{backgroundColor:e.palette.warning.main}},signupText:{color:"#fff"}}})),E=Object(C.a)({palette:{primary:S.a,secondary:T.a}});function I(){var e=F(),t=Object(l.e)(),n=Object(c.useState)({firstName:"",lastName:"",username:"",email:"",password:""}),r=Object(d.a)(n,2),s=r[0],i=r[1];function o(e){var t=e.target,n=t.name,a=t.value;i((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},n,a))}))}return Object(a.jsxs)(y.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(b.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(h.a,{className:e.avatar,children:Object(a.jsx)(v.a,{})}),Object(a.jsx)(k.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(a.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),D.a.post("https://thisiskeeper.herokuapp.com/signup",s).then((function(e){t.push("/notes/"+s.username)})).catch((function(e){return console.log(e)}))},children:[Object(a.jsxs)(O.a,{container:!0,spacing:2,children:[Object(a.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(w.a,{theme:E,children:Object(a.jsx)(p.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,color:"primary",value:s.firstName,onChange:o,className:e.textField})})}),Object(a.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(w.a,{theme:E,children:Object(a.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",value:s.lastName,onChange:o})})}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{theme:E,children:Object(a.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",value:s.username,onChange:o})})}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{theme:E,children:Object(a.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:s.email,onChange:o})})}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{theme:E,children:Object(a.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:s.password,onChange:o})})})]}),Object(a.jsx)(m.a,{type:"submit",fullWidth:!0,className:e.submit,children:Object(a.jsx)("span",{className:e.signupText,children:"Sign Up"})}),Object(a.jsx)(O.a,{container:!0,justify:"flex-end",children:Object(a.jsx)(O.a,{item:!0,children:Object(a.jsx)(x.a,{href:"https://thisiskeeper.herokuapp.com/signin",variant:"body2",color:"textSecondary",children:"Already have an account? Sign in"})})})]})]}),Object(a.jsx)(f.a,{mt:8,children:Object(a.jsx)(A,{})})]})}var U=n(185),K=n(190),L=Object(N.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.warning.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:e.palette.warning.dark,color:"#fff","&:hover":{backgroundColor:e.palette.warning.main,color:"#fff"},signinText:{color:"#fff"}}}})),P=Object(C.a)({palette:{primary:S.a,secondary:T.a}});function _(){var e=L(),t=Object(l.e)(),n=Object(c.useState)({username:"",password:""}),r=Object(d.a)(n,2),s=r[0],i=r[1];function o(e){var t=e.target,n=t.name,a=t.value;i((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},n,a))}))}return Object(a.jsxs)(y.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(b.a,{}),Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(h.a,{className:e.avatar,children:Object(a.jsx)(v.a,{})}),Object(a.jsx)(k.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(a.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),D.a.post("https://thisiskeeper.herokuapp.com/signin",s).then((function(e){t.push("/notes/"+s.username)})).catch((function(e){return console.log(e)}))},children:[Object(a.jsx)(w.a,{theme:P,children:Object(a.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,color:"primary",onChange:o})}),Object(a.jsx)(w.a,{theme:P,children:Object(a.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:o})}),Object(a.jsx)(U.a,{control:Object(a.jsx)(K.a,{value:"remember",color:"default"}),label:"Remember me"}),Object(a.jsx)(m.a,{type:"submit",fullWidth:!0,className:e.submit,children:"Sign In"}),Object(a.jsxs)(O.a,{container:!0,children:[Object(a.jsx)(O.a,{item:!0,xs:!0,children:Object(a.jsx)(x.a,{href:"#",variant:"body2",color:"textSecondary",children:"Forgot password?"})}),Object(a.jsx)(O.a,{item:!0,children:Object(a.jsx)(x.a,{href:"https://thisiskeeper.herokuapp.com/signup",variant:"body2",color:"textSecondary",children:"Don't have an account? Sign Up"})})]})]})]}),Object(a.jsx)(f.a,{mt:8,children:Object(a.jsx)(A,{})})]})}var J=n(93),R=(n(140),n(63)),B=n.n(R),H=n(89),M=n.n(H);var Q=function(){var e=Object(l.e)();return Object(a.jsx)(o.a,{children:Object(a.jsx)("header",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(o.b,{href:"https://thisiskeeper.herokuapp.com",style:{textDecoration:"none"},children:Object(a.jsxs)("h1",{children:[Object(a.jsx)(B.a,{className:"keeperIcon"}),"Keeper"]})}),Object(a.jsx)(o.b,{href:"https://thisiskeeper.herokuapp.com",children:Object(a.jsx)(M.a,{onClick:function(){D.a.get("https://thisiskeeper.herokuapp.com/logout").then((function(t){e.push("/")})).catch((function(e){console.log(e)}))},className:"logout"})})]})})})},Y=n(90),z=n.n(Y);var G=function(e){var t=Object(l.f)().username;return Object(a.jsxs)("div",{className:"note",children:[Object(a.jsx)("h1",{children:e.title}),Object(a.jsx)("p",{children:e.content}),Object(a.jsx)("button",{onClick:function(){D.a.delete("https://thisiskeeper.herokuapp.com/notes/".concat(t,"/")+e.id).then((function(e){return"Note Deleted"})).catch((function(e){return console.log(e)})),e.onDelete(e.id)},children:Object(a.jsx)(z.a,{})})]})},V=n(91),X=n.n(V),Z=n(187),$=n(186);var ee=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)({id:"",title:"",content:""}),o=Object(d.a)(i,2),h=o[0],m=o[1],b=Object(l.f)();function p(e){var t=e.target,n=t.name,a=t.value;m((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(j.a)({},n,a))}))}return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"create-note",children:[r&&Object(a.jsx)("input",{name:"title",onChange:p,value:h.title,placeholder:"Title"}),Object(a.jsx)("textarea",{name:"content",onClick:function(){s(!0)},onChange:p,value:h.content,placeholder:"Take a note...",rows:r?3:1}),Object(a.jsx)($.a,{in:r,children:Object(a.jsx)(Z.a,{onClick:function(t){var n=b.username;D.a.post("https://thisiskeeper.herokuapp.com/notes/".concat(n,"/add"),h).then((function(t){h.id=t.data._id,e.onAdd(h)})).catch((function(e){return console.log(e)})),m({id:"",title:"",content:""}),t.preventDefault()},children:Object(a.jsx)(X.a,{})})})]})})};n(141);var te=function(){var e=Object(l.f)().username,t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],s=n[1];function i(e){s((function(t){return t.filter((function(t){return t._id!==e}))}))}return Object(c.useEffect)((function(){D.a.get("/notes/".concat(e),r).then((function(e){console.log("then statement"),console.log("RESPONSE"),console.log(e),console.log("DATAA"),console.log(e.data),s(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(Q,{}),Object(a.jsxs)(O.a,{container:!0,children:[Object(a.jsx)(O.a,{item:!0,xs:!0,children:Object(a.jsx)(ee,{onAdd:function(e){s((function(t){return[].concat(Object(J.a)(t),[e])}))}})}),Object(a.jsx)(O.a,{container:!0,children:Object(a.jsx)(O.a,{item:!0,xs:!0,children:function(){if(D.a.get("https://thisiskeeper.herokuapp.com/notes/".concat(e)).then((function(e){s(e.data),console.log(e.data)})).catch((function(e){console.log(e)})),r.length>0)return r.map((function(e,t){return Object(a.jsx)(G,{id:e._id,title:e.title,content:e.content,onDelete:i},t)}))}()})})]}),Object(a.jsx)(A,{})]})},ne=(n(142),Object(N.a)((function(e){return{container:{marginTop:"5%"},submit:{margin:e.spacing(0,0,2),backgroundColor:e.palette.warning.dark,color:"#fff","&:hover":{backgroundColor:e.palette.warning.main}},submitOutline:{margin:e.spacing(1,0,2),backgroundColor:e.palette.background.default,color:e.palette.warning.dark,textTransform:"none",fontWeight:"500",borderColor:e.palette.background.default,"&:hover":{borderColor:e.palette.warning.dark,backgroundColor:e.palette.background.default,textDecoration:"none"}},signupText:{color:"#fff"},orText:{marginLeft:"48%",color:e.palette.text.secondary,fontWeight:"100"},span:{"&:hover":{textDecoration:"none"}}}})));function ae(){var e=ne();return Object(a.jsxs)(y.a,{component:"main",maxWidth:"xs",className:e.container,children:[Object(a.jsx)(b.a,{}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)("div",{className:"Home",children:Object(a.jsxs)("div",{className:"lander",children:[Object(a.jsx)(B.a,{className:"logo"}),Object(a.jsx)("h1",{children:"Keeper"}),Object(a.jsx)("p",{className:"text-muted",children:"Quickly capture what's on your mind"})]})})}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)(x.a,{href:"https://thisiskeeper.herokuapp.com/signup",children:Object(a.jsx)(m.a,{type:"submit",fullWidth:!0,className:e.submit,children:Object(a.jsx)("span",{className:e.signupText,children:"Sign Up"})})})}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)("span",{className:e.orText,children:"or"})}),Object(a.jsx)(O.a,{item:!0,xs:12,children:Object(a.jsx)(x.a,{href:"https://thisiskeeper.herokuapp.com/signin",children:Object(a.jsx)(m.a,{type:"submit",fullWidth:!0,variant:"outlined",className:e.submitOutline,children:Object(a.jsx)("span",{children:"Login"})})})}),Object(a.jsx)(A,{})]})}var ce=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(l.a,{path:"/",exact:!0,component:ae}),Object(a.jsx)(l.a,{path:"/signup",exact:!0,component:I}),Object(a.jsx)(l.a,{path:"/signin",exact:!0,component:_}),Object(a.jsx)(l.a,{path:"/notes/:username",exact:!0,component:te}),Object(a.jsx)(l.a,{path:"/notes/:username/add",exact:!0,component:ee}),Object(a.jsx)(l.a,{path:"/notes/:username/:id",exact:!0,component:G})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(ce,{})})}),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.50e0e7f7.chunk.js.map