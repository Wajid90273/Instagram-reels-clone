(this["webpackJsonpinstagram-reels-clone1"]=this["webpackJsonpinstagram-reels-clone1"]||[]).push([[0],{58:function(e,s,a){},59:function(e,s,a){},60:function(e,s,a){},61:function(e,s,a){},67:function(e,s,a){},72:function(e,s,a){"use strict";a.r(s);var c=a(5),t=a(2),n=a.n(t),r=a(22),o=a.n(r),i=(a(58),a(34)),l=(a(59),a(60),a(61),a(40)),j=a.n(l),d=a(45),b=a.n(d);var h=function(){return Object(c.jsxs)("div",{className:"videoHeader",children:[Object(c.jsx)(j.a,{}),Object(c.jsx)("h3",{children:"Sach-Reels"}),Object(c.jsx)(b.a,{})]})},v=(a(67),a(88)),O=a(87),m=a(47),u=a.n(m),x=a(46),p=a(37),g=a.n(p),f=a(38),_=a.n(f),N=a(48),k=a.n(N),S=a(49),w=a.n(S);var F=function(e){var s=e.channel,a=e.song,t=e.likes,n=e.shares,r=e.avatarSrc;return Object(c.jsxs)("div",{className:"videoFooter",children:[Object(c.jsxs)("div",{className:"videoFooter__text",children:[Object(c.jsx)(v.a,{src:r}),Object(c.jsxs)("h3",{children:[s," . ",Object(c.jsx)(O.a,{children:"Follow"})]})]}),Object(c.jsxs)("div",{className:"videoFooter__ticker",children:[Object(c.jsx)(u.a,{className:"videoFooter__icon"}),Object(c.jsx)(x.a,{mode:"smooth",children:function(e){e.index;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{children:a})})}})]}),Object(c.jsxs)("div",{className:"videoFooter__actions",children:[Object(c.jsxs)("div",{className:"videoFooter__actionsLeft",children:[Object(c.jsx)(g.a,{fontsize:"large"}),Object(c.jsx)(_.a,{fontsize:"large"}),Object(c.jsx)(k.a,{fontsize:"large"}),Object(c.jsx)(w.a,{fontsize:"large"})]}),Object(c.jsxs)("div",{className:"videoFooter__actionsRight",children:[Object(c.jsxs)("div",{className:"videoFooter__stat",children:[Object(c.jsx)(g.a,{}),Object(c.jsx)("p",{children:t})]}),Object(c.jsxs)("div",{className:"videoFooter__stat",children:[Object(c.jsx)(_.a,{}),Object(c.jsx)("p",{children:n})]})]})]})]})};var I=function(e){var s=e.url,a=e.likes,n=e.shares,r=e.channel,o=e.avatarSrc,l=e.song,j=Object(t.useState)(!1),d=Object(i.a)(j,2),b=d[0],v=d[1],O=Object(t.useRef)(null);return Object(c.jsxs)("div",{className:"videoCard",children:[Object(c.jsx)(h,{}),Object(c.jsx)("video",{ref:O,onClick:function(){b?(O.current.pause(),v(!1)):(O.current.play(),v(!0))},className:"videoCard__player",src:s,alt:"IG reel video",loop:!0}),Object(c.jsx)(h,{}),Object(c.jsx)(F,{channel:r,likes:a,shares:n,avatarSrc:o,song:l})]})},y=a(50).a.initializeApp({apiKey:"AIzaSyCv48Hr77S6P2LOnLDK56qLQ_-cPGO9R1E",authDomain:"instagram-reels-clone-42d10.firebaseapp.com",projectId:"instagram-reels-clone-42d10",storageBucket:"instagram-reels-clone-42d10.appspot.com",messagingSenderId:"199285730695",appId:"1:199285730695:web:dc4c93fcd7bea9bab17722",measurementId:"G-W5J93NG35P"}).firestore();var z=function(){var e=Object(t.useState)([]),s=Object(i.a)(e,2),a=s[0],n=s[1];return Object(t.useEffect)((function(){y.collection("reels").onSnapshot((function(e){return n(e.docs.map((function(e){return e.data()})))}))}),[]),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsxs)("div",{className:"app__top",children:[Object(c.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png",alt:"",className:"app__logo"}),Object(c.jsx)("h1",{children:"REELS"})]}),Object(c.jsx)("div",{className:"app__videos",children:a.map((function(e){var s=e.channel,a=e.avatarSrc,t=e.song,n=e.url,r=e.likes,o=e.shares;return Object(c.jsx)(I,{channel:s,avatarSrc:a,song:t,url:n,likes:r,shares:o})}))})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.a65687ef.chunk.js.map