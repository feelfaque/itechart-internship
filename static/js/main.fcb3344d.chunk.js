(this.webpackJsonpcookbook=this.webpackJsonpcookbook||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){"use strict";s.r(t);var r=s(8),c=s(36),n=s.n(c),a=s(23),i=(s(43),s(44),s(11)),o=(s(45),s(46),"form-container form--font form--translate-left"),l="Join our community",m="Already have an account?",j="/login",u="Sign in",b=(s(47),s(48),s(7));var d=function(){return Object(b.jsxs)("div",{className:"logo",children:[Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAYAAADD0FVVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHgSURBVHgBtVZRMgNBEH09wZ+SG1gnwAlkq1DlCyfACZIb4AS4AScQX0qJwg3iBPYGwi+2vZndimyy2cwkvKpNNrNdLz2vu98sEAi9Rl072KuKMQghfDBnWJQ3QK71Hq1xcXPwhCNUtUQ9pHqFb7THxYoHH5hVAyKPvE3wqbHs8LsCftuXXMNUTycRZuFVGd4iwoJpctuH/Fnn1SXxBebRlpgyhJJqp3bA1M5zsmFUylBKOqBhFRLUdL0s43JNRc4wGRG+yttqhNTpCKzBB0YOvEjZuRF8oeWxQRPli1FSKa32WOgDlj1IzS5C8I24ktQVSbWBEJQUq5jpgjkGAgqVoTHsWH1SutBxPo7hYF/TY/sZu4nSDucbeo7ZYC0xlm10xek4L6/4GySyqSsm17HwgDLYirYRjkjvsGdIUBxJ6z5beKJOPUyDGnZtoQZJu9bOnEtNWzRm+09jKgWjjfQRdbd90OGngeLdanozsFRHmhVONtFiJcWdnGGk7Tn7wWybv4va4iCQPL2iCdPdZYkxvkjYp5d584ONL03MilSP+qQZsTuTGpgWyuN7Cyf2tl996hfbBwhHz2WYEzqukT+0Y1tjxgYbyI7nHjV94fXkXioEq/l6wvtnfPAdYL94ov4ASjivlfLURHUAAAAASUVORK5CYII=",className:"logo-image",alt:"LogoBig"}),Object(b.jsxs)("h1",{className:"logo-title",children:[Object(b.jsx)("span",{className:"logo-text--black",children:"Feed"}),Object(b.jsx)("span",{className:"logo-text--yellow",children:"me"})]})]})};var f=function(e){var t=e.className,s=e.title,r=e.subtitle,c=e.subtitleLink,n=e.subtitleLinkText,i=e.children;return Object(b.jsxs)("div",{className:t,children:[Object(b.jsx)(d,{}),Object(b.jsx)("h2",{className:"form-title",children:s}),Object(b.jsxs)("h3",{className:"form-subtitle",children:[" ",r," ",Object(b.jsx)(a.b,{to:c,className:"form-link--yellow",children:n})]}),i]})},O=s(21),x=s(24),p=s(13),h=s(37),N=s(38),g=s(31);Object(h.a)({apiKey:"AIzaSyBTVYnkskOZIB1DfYzRVJ5e_egjS39QNRI",authDomain:"cookbook-16369.firebaseapp.com",projectId:"cookbook-16369",storageBucket:"cookbook-16369.appspot.com",messagingSenderId:"281280824431",appId:"1:281280824431:web:7674692c2faf5d378c799a"});Object(N.a)();var v=Object(g.b)();var A=function(){var e=function(){var e=Object(r.useState)(null),t=Object(p.a)(e,2),s=t[0],c=t[1];return{error:s,signup:function(e,t){c(null),Object(g.a)(v,e,t).then((function(e){console.log(e.user)})).catch((function(e){c(e)}))}}}(),t=e.error,s=e.signup,c=Object(i.f)();return Object(b.jsx)(x.b,{onSubmit:function(e){var t=e.email,r=e.password;console.log(JSON.stringify(e,0,2)),s(t,r),c("/")},validate:function(e){var t={};return e.email||(t.email="Email is required"),/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(t.email="Email isn't valid"),e.password||(t.password="Password is required"),e.confirm?e.confirm!==e.password&&(t.confirm="Passwords must match"):t.confirm="Password confirmation is required",t},render:function(e){var s=e.handleSubmit,r=(e.form,e.submitting);e.pristine,e.values;return Object(b.jsxs)("form",{onSubmit:s,children:[Object(b.jsxs)("div",{className:"form--column",children:[Object(b.jsx)("label",{className:"form-input--text",children:"Email"}),Object(b.jsx)(x.a,{name:"email",children:function(e){var t=e.input,s=e.meta;return Object(b.jsxs)("div",{className:"form--column",children:[Object(b.jsx)("input",Object(O.a)(Object(O.a)({type:"email"},t),{},{className:"form-input"})),s.error&&s.touched&&Object(b.jsx)("span",{className:"form-error--text",children:s.error})]})}})]}),Object(b.jsxs)("div",{className:"form--column form-input--margin",children:[Object(b.jsxs)("div",{className:"form--row",children:[Object(b.jsx)("label",{className:"form-input--text",children:"Password"}),Object(b.jsx)(a.b,{to:"/",className:"form-link--yellow",children:"Forgot password?"})]}),Object(b.jsx)(x.a,{name:"password",children:function(e){var t=e.input,s=e.meta;return Object(b.jsxs)("div",{className:"form--column",children:[Object(b.jsx)("input",Object(O.a)(Object(O.a)({type:"password"},t),{},{className:"form-input"})),s.error&&s.touched&&Object(b.jsx)("span",{className:"form-error--text",children:s.error})]})}})]}),Object(b.jsxs)("div",{className:"form--column  form-input--margin",children:[Object(b.jsx)("label",{className:"form-input--text",children:"Confirm Password"}),Object(b.jsx)(x.a,{name:"confirm",children:function(e){var t=e.input,s=e.meta;return Object(b.jsxs)("div",{className:"form--column",children:[Object(b.jsx)("input",Object(O.a)(Object(O.a)({type:"password"},t),{},{className:"form-input"})),s.error&&s.touched&&Object(b.jsx)("span",{className:"form-error--text",children:s.error})]})}})]}),Object(b.jsx)("button",{type:"submit",className:"form-submit-button",disabled:r,children:"Sign up"}),t&&Object(b.jsx)("p",{children:"error"})]})}})};var w=function(){return Object(b.jsxs)("div",{className:"signup-page",children:[Object(b.jsx)("div",{className:"signup--background"}),Object(b.jsx)(f,{className:o,title:l,subtitle:m,subtitleLink:j,subtitleLinkText:u,children:Object(b.jsx)(A,{})})]})},k=(s(52),"form-container form--font form--translate-right"),y="Welcome back",S="New here?",B="/signup",R="Create an account";var Y=function(){return Object(b.jsx)(x.b,{onSubmit:function(){},validate:function(e){var t={};return e.email||(t.email="Email is required"),/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.email)||(t.email="Email isn't valid"),e.password||(t.password="Password is required"),t},render:function(e){var t=e.handleSubmit,s=(e.form,e.submitting);e.pristine,e.values;return Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsxs)("div",{className:"form--column",children:[Object(b.jsx)("label",{className:"form-input--text",children:"Email"}),Object(b.jsx)(x.a,{name:"email",children:function(e){var t=e.input,s=e.meta;return Object(b.jsxs)("div",{className:"form--column",children:[Object(b.jsx)("input",Object(O.a)(Object(O.a)({type:"email"},t),{},{className:"form-input"})),s.error&&s.touched&&Object(b.jsx)("span",{className:"form-error--text",children:s.error})]})}})]}),Object(b.jsxs)("div",{className:"form--column form-input--margin",children:[Object(b.jsxs)("div",{className:"form--row",children:[Object(b.jsx)("label",{className:"form-input--text",children:"Password"}),Object(b.jsx)(a.b,{to:"/",className:"form-link--yellow",children:"Forgot password?"})]}),Object(b.jsx)(x.a,{name:"password",children:function(e){var t=e.input,s=e.meta;return Object(b.jsxs)("div",{className:"form--column",children:[Object(b.jsx)("input",Object(O.a)(Object(O.a)({type:"password"},t),{},{className:"form-input"})),s.error&&s.touched&&Object(b.jsx)("span",{className:"form-error--text",children:s.error})]})}})]}),Object(b.jsx)("button",{type:"submit",className:"form-submit-button",disabled:s,children:"Sign up"})]})}})};var q=function(){return Object(b.jsxs)("div",{className:"signin-page",children:[Object(b.jsx)(f,{className:k,title:y,subtitle:S,subtitleLink:B,subtitleLinkText:R,children:Object(b.jsx)(Y,{})}),Object(b.jsx)("div",{className:"signin--background"})]})};function L(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/"}),Object(b.jsx)(i.a,{path:"/signup",element:Object(b.jsx)(w,{})}),Object(b.jsx)(i.a,{path:"/login",element:Object(b.jsx)(q,{})})]})})}n.a.render(Object(b.jsx)(a.a,{children:Object(b.jsx)(L,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.fcb3344d.chunk.js.map