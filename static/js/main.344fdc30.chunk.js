(this["webpackJsonpmy-app3"]=this["webpackJsonpmy-app3"]||[]).push([[0],{130:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(43),a=n(5),c="SEND-MESSAGE",o={messages:[{id:1,message:"Hi1"},{id:2,message:"Hi2"}],dialogs:[{id:1,name:"Dimon"},{id:2,name:"Andrey"}]},s=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},135:function(e,t,n){e.exports={userPhoto:"users_userPhoto__Hago7",selectedPage:"users_selectedPage__28snV"}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(90),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0bbd79f4-cae6-4275-8299-c3093045533d"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/".concat(e))},getSatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},166:function(e,t,n){},170:function(e,t,n){},24:function(e,t,n){e.exports={nav:"Navbar_nav__1XGZe",item:"Navbar_item__3ki9C",activeLink:"Navbar_activeLink__t82FB"}},296:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),o=(n(166),n(65)),s=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(34),u=n(35),l=n(37),d=n(36),f=(n(170),n(24)),j=n.n(f),b=n(15),p=function(){return Object(r.jsxs)("nav",{className:j.a.nav,children:[Object(r.jsx)("div",{className:j.a.item,children:Object(r.jsx)(b.b,{to:"/profile",activeClassName:j.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:j.a.item,children:Object(r.jsx)(b.b,{to:"/dialogs",activeClassName:j.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{children:Object(r.jsx)(b.b,{to:"/users",activeClassName:j.a.activeLink,children:"Users"})}),Object(r.jsx)("div",{className:j.a.item,children:Object(r.jsx)("a",{children:"News"})}),Object(r.jsx)("div",{className:j.a.item,children:Object(r.jsx)("a",{children:"Music"})}),Object(r.jsx)("div",{className:j.a.item,children:Object(r.jsx)("a",{children:"Settings"})})]})},g=n(9),h=n(13),O=n(44),m=n(132),v=n(45),x=n.n(v),w=n(75),P=(n(90),n(16)),_=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,o=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var f=Math.ceil(u/i),j=Object(a.useState)(1),b=Object(m.a)(j,2),p=b[0],g=b[1],h=(p-1)*i+1,O=p*i;return Object(r.jsxs)("div",{className:x.a.paginator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){return g(p-1)},children:"PREV"}),l.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(r.jsx)("span",{className:c===e?x.a.pageNumber+" "+x.a.selectedPage:x.a.pageNumber+" "+x.a.noSelectedPage,onClick:function(t){return o(e)},children:e},e)})),f>p&&Object(r.jsx)("button",{onClick:function(){return g(p+1)},children:"NEXT"})]})},y=n(135),S=n.n(y),C=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,c=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(b.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:w.a,className:S.a.userPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})},k=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,c=e.onPageChanged,o=e.users,s=e.followingInProgress,i=e.follow,u=e.unfollow;Object(O.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users","followingInProgress","follow","unfollow"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:a}),Object(r.jsx)("div",{children:o.map((function(e){return Object(r.jsx)(C,{user:e,followingInProgress:s,unfollow:u,follow:i},e.Id)}))}),")"]})},I=n(10),E=n.n(I),N=n(18),F=n(43),U=n(5),L=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(U.a)(Object(U.a)({},e),r):e}))},T="FOLLOW",A="UNFOLLOW",z="SET_USERS",M="SET_CURRENT_PAGE",R="SET_USERS_TOTAL_COUNT",G="TOGGLE_IS_FETCHING",D="TOGGLE_IS_FOLLOWING_PROGRESS",H={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(U.a)(Object(U.a)({},e),{},{users:L(e.users,t.userId,"id",{followed:!0})});case A:return Object(U.a)(Object(U.a)({},e),{},{users:L(e.users,t.userId,"id",{followed:!1})});case z:return Object(U.a)(Object(U.a)({},e),{},{users:t.users});case M:return Object(U.a)(Object(U.a)({},e),{},{currentPage:t.currentPage});case R:return Object(U.a)(Object(U.a)({},e),{},{totalUsersCount:t.totalCount});case G:return Object(U.a)(Object(U.a)({},e),{},{isFetching:t.isFetching});case D:return Object(U.a)(Object(U.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(F.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},W=function(e){return{type:T,userId:e}},X=function(e){return{type:A,userId:e}},Z=function(e){return{type:z,users:e}},q=function(e){return{type:M,currentPage:e}},J=function(e){return{type:R,totalCount:e}},K=function(e){return{type:G,isFetching:e}},V=function(e,t){return{type:D,isFetching:e,userId:t}},Q=n(68),Y=n(8),$=n(136),ee=Object($.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUsersCount},re=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.isFetching},ce=function(e){return e.usersPage.followingInProgress},oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(Q.a,{}):null,Object(r.jsx)(k,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),se=Object(Y.compose)(Object(h.b)((function(e){return{users:ee(e),pageSize:te(e),totalUsersCount:ne(e),currentPage:re(e),isFetching:ae(e),followingInProgress:ce(e)}}),{follow:function(e){return function(){var t=Object(N.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(V(!0,e)),t.next=3,P.c.follow(e);case 3:0==t.sent.data.resultCode&&n(W(e)),n(V(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(N.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(V(!0,e)),t.next=3,P.c.unfollow(e);case 3:0==t.sent.data.resultCode&&n(X(e)),n(V(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:q,toggleFollowingProgress:V,getUsers:function(e,t){return function(){var n=Object(N.a)(E.a.mark((function n(r){var a;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(K(!0)),r(q(e)),n.next=4,P.c.getUsers(e,t);case 4:a=n.sent,r(K(!1)),r(Z(a.items)),r(J(a.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(oe),ie=n.p+"static/media/logo_ract.9b933d39.jpg",ue=n(96),le=n.n(ue),de=function(e){return Object(r.jsxs)("header",{className:le.a.header,children:[Object(r.jsx)("img",{src:ie}),Object(r.jsx)("div",{className:le.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(b.b,{to:"/login",children:"Login"})})]})},fe=n(46),je="SET_USER_DATA",be={userId:null,email:null,login:null,isFetching:!1,isAuth:!1},pe=function(){return function(){var e=Object(N.a)(E.a.mark((function e(t){var n,r,a,c,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,o=r.login,t(ge(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ge=function(e,t,n,r){return{type:je,payload:{userId:e,email:t,login:n,isAuth:r}}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(U.a)(Object(U.a)({},e),t.payload);default:return e}},Oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(de,Object(U.a)({},this.props))}}]),n}(c.a.Component),me=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(N.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(ge(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Oe),ve=n(131),xe=n(32),we=n(66),Pe=n(54),_e=n.n(Pe),ye=(n(254),Object(we.a)(20),Object(ve.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(xe.c)("Email","email",[we.b],xe.a),Object(xe.c)("Password","password",[we.b],xe.a,{type:"password"}),Object(xe.c)(null,"rememberMe",[],xe.a,{type:"checkbox"},"remember me"),n&&Object(r.jsx)("div",{className:_e.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})}))),Se=Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(N.a)(E.a.mark((function r(a){var c,o;return E.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(pe()):(o=c.data.messages.length>0?c.data.messages[0]:"Some Error",a(Object(fe.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(g.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(ye,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ce="INITIALIZED_SUCCESS",ke={initialized:!1},Ie=function(){return{type:Ce}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return Object(U.a)(Object(U.a)({},e),{},{initialized:!0});default:return e}},Ne=n(99),Fe=n(130),Ue={},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;return e},Te=n(138),Ae=n(133),ze=Object(Y.combineReducers)({profilePage:Ne.b,dialogsPage:Fe.a,sidebar:Le,usersPage:B,auth:he,form:Ae.a,app:Ee}),Me=Object(Y.createStore)(ze,Object(Y.applyMiddleware)(Te.a));window.store=Me;var Re=Me,Ge=c.a.lazy((function(){return n.e(4).then(n.bind(null,304))})),De=c.a.lazy((function(){return n.e(3).then(n.bind(null,303))})),He=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(me,{}),Object(r.jsx)(p,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:[Object(r.jsx)(g.b,{path:"/dialogs",render:function(){return Object(r.jsx)(Ge,{})}}),Object(r.jsx)(g.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(De,{})}})]}),Object(r.jsx)(g.b,{path:"/users",render:function(){return Object(r.jsx)(se,{})}}),Object(r.jsx)(g.b,{path:"/login",render:function(){return Object(r.jsx)(Se,{})}})]})]}):Object(r.jsx)(Q.a,{})}}]),n}(c.a.Component),Be=Object(Y.compose)(g.f,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(pe()).then((function(){e(Ie())}))}}}))(He),We=function(e){return Object(r.jsx)(b.a,{children:Object(r.jsx)(h.a,{store:Re,children:Object(r.jsx)(Be,{})})})};s.a.render(Object(r.jsx)(We,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(5),a=n(1),c=n(44),o=(n(0),n(54)),s=n.n(o),i=n(91),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,o=(e.child,e.element,Object(c.a)(e,["input","meta","child","element"])),i=n&&r;return Object(a.jsxs)("div",{className:s.a.formControl+" "+(i?s.a.error:""),children:[Object(a.jsx)("div",{children:o.children}),i&&Object(a.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,["input","meta","child"]));return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(c.a)(e,["input","meta","child"]));return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,c){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(i.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},o)),s]})}},45:function(e,t,n){e.exports={paginator:"Paginator_paginator__1ZXng",pageNumber:"Paginator_pageNumber__2QgE2",selectedPage:"Paginator_selectedPage__2xx5F",noSelectedPage:"Paginator_noSelectedPage__3oL4d"}},54:function(e,t,n){e.exports={formControl:"FormsControl_formControl__3Svet",error:"FormsControl_error__1qaM5",formSummaryError:"FormsControl_formSummaryError__2bjHR"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},68:function(e,t,n){"use strict";var r=n(1),a=n.p+"static/media/preloader.10625dac.gif";n(0),t.a=function(e){return Object(r.jsx)("div",{style:{backgroundColor:"green"},children:Object(r.jsx)("img",{src:a})})}},75:function(e,t,n){"use strict";t.a=n.p+"static/media/ava.6ec58bca.jpg"},96:function(e,t,n){e.exports={header:"Header_header__3t-GK",loginBlock:"Header_loginBlock__2UDAW"}},99:function(e,t,n){"use strict";n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return g})),n.d(t,"a",(function(){return h}));var r=n(10),a=n.n(r),c=n(18),o=n(43),s=n(5),i=n(16),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",f="DELETE_POST",j={posts:[{id:1,message:"Hello World!",likesCount:12},{id:2,message:"Hello World!2",likesCount:20}],profile:null,status:""},b=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getSatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return{type:u,newPostText:e}},O=function(e){return{type:l,profile:e}},m=function(e){return{type:d,status:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case d:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case f:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[296,1,2]]]);
//# sourceMappingURL=main.344fdc30.chunk.js.map