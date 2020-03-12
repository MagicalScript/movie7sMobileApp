webpackJsonp([11],{274:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u(0),a=(u(2),u(84),u(94)),o=u(93),e=(u(294),function(){function l(l,n,u,t,a){this.navCtrl=l,this.navParams=n,this.toastCtrl=u,this.api=t,this.store=a,this.isOffline=!0,this._pageNo=1,this.getPopular()}return l.prototype.goToDetailsPage=function(l){this.navCtrl.push("ActorDetails",{data:l,id:l.id})},l.prototype.search=function(){this.navCtrl.push("Search",{type:"actors"})},l.prototype.getPopular=function(){var l=this;console.log("getting popular"),this.api.popular(this._pageNo).subscribe(function(n){l.isOffline=!1,l._pageNo++,l.popular=n.results},function(n){return l.getOffline()})},l.prototype.getOffline=function(l){var n=this;this.isOffline=!0,this.store.getPopular().then(function(l){l.results[0]?(n.presentToast("You are currently offline, serving you cached content"),n.popular=l.results):n.presentToast("You are offline and there's nothing in the cache. Guess we'd just have to be looking at ourselves")})},l.prototype.doInfinite=function(l){var n=this;console.log("async operation started"),this.isOffline&&l.complete(),this.api.popular(this._pageNo).toPromise().then(function(u){u.results&&(n.popular=n.popular.concat(u.results),n._pageNo++,l.complete(),console.log("async operation ended"))}).catch(function(l){n.presentToast("Can't fetch you more actors. There seems to be something wrong with the network 😥📵")})},l.prototype.presentToast=function(l){this.toastCtrl.create({position:"bottom",duration:4e3,message:l}).present()},l}()),i=function(){return function(){}}(),s=u(216),r=u(217),c=u(218),p=u(219),_=u(220),d=u(221),f=u(222),b=u(223),g=u(224),h=u(143),m=u(89),k=u(1),v=u(86),Y=u(5),j=u(291),Z=u(45),y=u(8),C=u(20),T=u(46),z=u(19),I=u(140),x=u(23),O=u(138),P=u(37),A=u(38),w=u(292),S=u(134),q=u(225),F=u(21),N=u(4),H=u(9),X=u(25),D=u(144),G=u(12),M=u(85),U=u(293),$=u(135),B=u(11),R=u(90),J=t.X({encapsulation:2,styles:[],data:{}});function L(l){return t._22(0,[(l()(),t.Z(0,0,null,null,9,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),t.Y(1,16384,null,0,h.a,[],null,null),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(3,0,null,null,5,"ion-card",[],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.goToDetailsPage(l.context.$implicit)&&t);return t},null,null)),t.Y(4,16384,null,0,m.a,[k.a,t.j,t.z],null,null),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Z(6,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t._20(-1,null,["\n    "]))],null,function(l,n){l(n,6,0,"https://image.tmdb.org/t/p/w500"+n.context.$implicit.profile_path,n.context.$implicit.name)})}function V(l){return t._22(0,[(l()(),t.Z(0,0,null,null,32,"ion-header",[],null,null,null,null,null)),t.Y(1,16384,null,0,v.a,[k.a,t.j,t.z,[2,Y.a]],null,null),(l()(),t._20(-1,null,["\n  "])),(l()(),t.Z(3,0,null,null,28,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,j.b,j.a)),t.Y(4,49152,null,0,Z.a,[y.a,[2,Y.a],[2,C.a],k.a,t.j,t.z],null,null),(l()(),t._20(-1,3,["\n    "])),(l()(),t.Z(6,0,null,0,8,"button",[["icon-only",""],["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var a=!0;"click"===n&&(a=!1!==t._13(l,8).toggle()&&a);return a},T.b,T.a)),t.Y(7,1097728,[[1,4]],0,z.a,[[8,""],k.a,t.j,t.z],null,null),t.Y(8,1064960,null,0,I.a,[x.a,[2,Y.a],[2,z.a],[2,Z.a]],{menuToggle:[0,"menuToggle"]},null),t.Y(9,16384,null,1,O.a,[k.a,t.j,t.z,[2,P.a],[2,Z.a]],null,null),t._18(603979776,1,{_buttons:1}),(l()(),t._20(-1,0,["\n      "])),(l()(),t.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(13,147456,null,0,A.a,[k.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n    "])),(l()(),t._20(-1,3,["\n    "])),(l()(),t.Z(16,0,null,3,2,"ion-title",[],null,null,null,w.b,w.a)),t.Y(17,49152,null,0,S.a,[k.a,t.j,t.z,[2,P.a],[2,Z.a]],null,null),(l()(),t._20(-1,0,["ACTORS"])),(l()(),t._20(-1,3,["\n    "])),(l()(),t.Z(20,0,null,2,10,"ion-buttons",[["end",""]],null,[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.search()&&t);return t},null,null)),t.Y(21,16384,null,1,O.a,[k.a,t.j,t.z,[2,P.a],[2,Z.a]],null,null),t._18(603979776,2,{_buttons:1}),(l()(),t._20(-1,null,["\n      "])),(l()(),t.Z(24,0,null,null,5,"button",[["icon-only",""],["ion-button",""]],null,null,null,T.b,T.a)),t.Y(25,1097728,[[2,4]],0,z.a,[[8,""],k.a,t.j,t.z],null,null),(l()(),t._20(-1,0,["\n        "])),(l()(),t.Z(27,0,null,0,1,"ion-icon",[["name","search"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(28,147456,null,0,A.a,[k.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t._20(-1,0,["\n      "])),(l()(),t._20(-1,null,["\n    "])),(l()(),t._20(-1,3,["\n  "])),(l()(),t._20(-1,null,["\n"])),(l()(),t._20(-1,null,["\n\n"])),(l()(),t.Z(34,0,null,null,16,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,q.b,q.a)),t.Y(35,4374528,null,0,F.a,[k.a,N.a,H.a,t.j,t.z,y.a,X.a,t.u,[2,Y.a],[2,C.a]],null,null),(l()(),t._20(-1,1,["\n  "])),(l()(),t.Z(37,0,null,1,5,"ion-row",[["class","row"]],null,null,null,null,null)),t.Y(38,16384,null,0,D.a,[],null,null),(l()(),t._20(-1,null,["\n    "])),(l()(),t.U(16777216,null,null,1,null,L)),t.Y(41,802816,null,0,G.i,[t.I,t.F,t.p],{ngForOf:[0,"ngForOf"]},null),(l()(),t._20(-1,null,["\n  "])),(l()(),t._20(-1,1,["\n  "])),(l()(),t.Z(44,0,null,1,5,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],function(l,n,u){var t=!0;"ionInfinite"===n&&(t=!1!==l.component.doInfinite(u)&&t);return t},null,null)),t.Y(45,1196032,null,0,M.a,[F.a,t.u,t.j,H.a],null,{ionInfinite:"ionInfinite"}),(l()(),t._20(-1,null,["\n    "])),(l()(),t.Z(47,0,null,null,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Getting more actors... Hold on"]],[[1,"state",0]],null,null,U.b,U.a)),t.Y(48,114688,null,0,$.a,[M.a,k.a],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),(l()(),t._20(-1,null,["\n  "])),(l()(),t._20(-1,1,["\n"]))],function(l,n){var u=n.component;l(n,8,0,"");l(n,13,0,"menu");l(n,28,0,"search"),l(n,41,0,u.popular);l(n,48,0,"bubbles","Getting more actors... Hold on")},function(l,n){l(n,3,0,t._13(n,4)._hidden,t._13(n,4)._sbPadding),l(n,6,0,t._13(n,8).isHidden),l(n,12,0,t._13(n,13)._hidden),l(n,27,0,t._13(n,28)._hidden),l(n,34,0,t._13(n,35).statusbarPadding,t._13(n,35)._hasRefresher),l(n,47,0,t._13(n,48).inf.state)})}var W=t.V("page-actors",e,function(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"page-actors",[],null,null,null,V,J)),t.Y(1,49152,null,0,e,[C.a,B.a,R.a,o.a,a.a],null,null)],null,null)},{},{},[]),E=u(18),K=u(136),Q=u(39);u.d(n,"ActorsModuleNgFactory",function(){return ll});var ll=t.W(i,[],function(l){return t._10([t._11(512,t.i,t.S,[[8,[s.a,r.a,c.a,p.a,_.a,d.a,f.a,b.a,g.a,W]],[3,t.i],t.s]),t._11(4608,G.l,G.k,[t.r,[2,G.u]]),t._11(4608,E.k,E.k,[]),t._11(4608,E.c,E.c,[]),t._11(512,G.b,G.b,[]),t._11(512,E.j,E.j,[]),t._11(512,E.d,E.d,[]),t._11(512,E.i,E.i,[]),t._11(512,K.a,K.a,[]),t._11(512,K.b,K.b,[]),t._11(512,i,i,[]),t._11(256,Q.a,e,[])])})},291:function(l,n,u){"use strict";u.d(n,"a",function(){return r}),n.b=c;var t=u(0),a=u(12),o=u(46),e=u(19),i=u(1),s=u(38),r=(u(45),u(5),u(20),t.X({encapsulation:2,styles:[],data:{}}));function c(l){return t._22(0,[(l()(),t.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),t.Y(1,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0;"click"===n&&(t=!1!==l.component.backButtonClick(u)&&t);return t},o.b,o.a)),t.Y(3,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(4,1097728,null,0,e.a,[[8,"bar-button"],i.a,t.j,t.z],null,null),(l()(),t.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),t.Y(6,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Y(7,147456,null,0,s.a,[i.a,t.j,t.z],{name:[0,"name"]},null),(l()(),t.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),t.Y(9,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t._20(10,null,["",""])),t._12(null,0),t._12(null,1),t._12(null,2),(l()(),t.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),t.Y(15,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._12(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode),l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb),l(n,5,0,t._13(n,7)._hidden),l(n,10,0,u._backText)})}},292:function(l,n,u){"use strict";u.d(n,"a",function(){return o}),n.b=e;var t=u(0),a=u(12),o=(u(134),u(1),u(37),u(45),t.X({encapsulation:2,styles:[],data:{}}));function e(l){return t._22(2,[(l()(),t.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),t.Y(1,278528,null,0,a.h,[t.p,t.q,t.j,t.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t._12(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}},293:function(l,n,u){"use strict";u.d(n,"a",function(){return s}),n.b=p;var t=u(0),a=u(226),o=u(57),e=u(1),i=u(12),s=(u(135),u(85),t.X({encapsulation:2,styles:[],data:{}}));function r(l){return t._22(0,[(l()(),t.Z(0,0,null,null,2,"div",[["class","infinite-loading-spinner"]],null,null,null,null,null)),(l()(),t.Z(1,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,a.b,a.a)),t.Y(2,114688,null,0,o.a,[e.a,t.j,t.z],{name:[0,"name"]},null)],function(l,n){l(n,2,0,n.component.loadingSpinner)},function(l,n){l(n,1,0,t._13(n,2)._paused)})}function c(l){return t._22(0,[(l()(),t.Z(0,0,null,null,0,"div",[["class","infinite-loading-text"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.loadingText)})}function p(l){return t._22(0,[(l()(),t.Z(0,0,null,null,4,"div",[["class","infinite-loading"]],null,null,null,null,null)),(l()(),t.U(16777216,null,null,1,null,r)),t.Y(2,16384,null,0,i.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null),(l()(),t.U(16777216,null,null,1,null,c)),t.Y(4,16384,null,0,i.j,[t.I,t.F],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.loadingSpinner),l(n,4,0,u.loadingText)},null)}},294:function(l,n){}});