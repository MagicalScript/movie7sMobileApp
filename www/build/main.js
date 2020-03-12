webpackJsonp([19],{137:function(t,e,o){"use strict";o.d(e,"a",function(){return a});o(2);var n=o(22),r=o(36),a=(o.n(r),function(){function t(t){this.http=t,this.apiKey="?api_key=1bded0cf5ec81699b719a0ab217e461e",this.apiUrl="https://api.themoviedb.org/",this.imageBaseurl="https://image.tmdb.org/t/p/"}return t.prototype.getList=function(t){return this.http.get(this.apiUrl+"3/movie/"+t+this.apiKey)},t.prototype.getImageBaseUrl=function(){return this.imageBaseurl},t.prototype.search=function(t){var e=new n.d;e.append("Content-Type","application/json");new n.g({headers:e});t=this.convertToSlug(t);var o=this.apiUrl+"3/search/multi"+this.apiKey+"&query="+t;return console.log(o),this.http.get(o).map(function(t){return t.json()})},t.prototype.convertToSlug=function(t){return t=t.toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"+").replace(/-+/g,"+")},t.prototype.getMovie=function(t){var e=this.apiUrl+"3/movie/"+t+this.apiKey;return console.log(e),this.http.get(e).map(function(t){return t.json()})},t.prototype.getTV=function(t){var e=this.apiUrl+"3/tv/"+t+this.apiKey;return console.log(e),this.http.get(e).map(function(t){return t.json()})},t.prototype.getEpisodesBySeason=function(t,e){var o=this.apiUrl+"3/tv/"+t+"/season/"+e+this.apiKey;return console.log(o),this.http.get(o).map(function(t){return t.json()})},t.prototype.getEpisode=function(t,e,o){var n=this.apiUrl+"3/tv/"+t+"/season/"+e+"/episode/"+o+this.apiKey;return console.log(n),this.http.get(n).map(function(t){return t.json()})},t.prototype.getSeason=function(t,e){var o=this.apiUrl+"3/tv/"+t+"/season/"+e+this.apiKey;return console.log(o),this.http.get(o).map(function(t){return t.json()})},t}())},139:function(t,e,o){"use strict";o.d(e,"a",function(){return n});o(2);var n=function(){function t(t){this.http=t,this.apiRoot="http://api.movie7s.com"}return t.prototype.gethello=function(){return this.http.get(this.apiRoot+"/")},t.prototype.getnews=function(t){return this.http.get(this.apiRoot+"/news/"+t)},t.prototype.addServer=function(t){return console.log("POST"),this.http.post(this.apiRoot+"/addServer",t)},t.prototype.getTvPage=function(t){return this.http.get(this.apiRoot+"/tv/"+t)},t.prototype.getTvPageCategory=function(t,e){return this.http.get(this.apiRoot+"/tv/"+t+"&"+e)},t.prototype.getCategoriesList=function(){return this.http.get(this.apiRoot+"/getCategory/")},t.prototype.getMoviesPage=function(t){var e=this.apiRoot+"/mov/"+t;return console.log(e),this.http.get(e)},t.prototype.getMoviesPageCategory=function(t,e){var o=this.apiRoot+"/movByCate/"+t+"&"+e;return console.log(o),this.http.get(o)},t.prototype.getSeasonByTvPage=function(t,e){return this.http.get(this.apiRoot+"/sea/"+t+"&"+e)},t.prototype.getEpiBySeaPage=function(t,e){var o=this.apiRoot+"/epi/"+t+"&"+e;return console.log(o),this.http.get(o)},t.prototype.getLinksbyTmdbPage=function(t,e){var o=this.apiRoot+"/link/"+t+"&"+e;return console.log(o),this.http.get(o)},t.prototype.deleteLinkById=function(t){return this.http.delete(this.apiRoot+"/deleteserver/"+t)},t.prototype.getShowTime=function(t){return this.http.get(this.apiRoot+"/showtimes/"+t)},t.prototype.getShowTimeByTmdb=function(t,e){var o=this.apiRoot+"/showtimesTmdb/"+t+"&"+e;return console.log(o),this.http.get(o)},t.prototype.deleteShowTimeById=function(t){return this.http.delete(this.apiRoot+"/deletetime/"+t)},t.prototype.doPOSTShowTime=function(t){return console.log("_____________________POST_______________________________________________"),this.http.post(this.apiRoot+"/addShowTime",t)},t.prototype.addCommentTmdb=function(t){console.log("______________POST Commnet________________________________");var e=this.apiRoot+"/addComment";return console.log(e),this.http.post(e,t)},t.prototype.addMovie=function(t){return console.log("_____________________POST_______________________________________________"),this.http.post(this.apiRoot+"/addMovies",t)},t.prototype.addInfo=function(t){return console.log("_____________________POST_______________________________________________"),this.http.post(this.apiRoot+"/addInfo",t)},t.prototype.addCategory=function(t){return console.log("_____________________POST_______________________________________________"),this.http.post(this.apiRoot+"/addCategory",t)},t.prototype.addTv=function(t){return console.log("_____________________POST_______________________________________________"),this.http.post(this.apiRoot+"/addTvShow",t)},t.prototype.addSeason=function(t){return console.log("_____________________POST_______________________________________________"),this.http.post(this.apiRoot+"/addSeason",t)},t.prototype.addEpisode=function(t){return console.log("_____________________POST_______________________________________________"),this.http.post(this.apiRoot+"/addEpisode",t)},t.prototype.getinfo=function(t){var e=this.apiRoot+"/info/"+t;return console.log(e),this.http.get(e)},t.prototype.getSeasonsByCategory=function(t,e){var o=this.apiRoot+"/newseasons/"+t+"&"+e;return console.log(o),this.http.get(o)},t.prototype.getCommentTmdb=function(t,e){var o=this.apiRoot+"/getComment/"+t+"&"+e;return console.log(o),this.http.get(o)},t}()},141:function(t,e,o){"use strict";o.d(e,"a",function(){return n});o(2),o(43);var n=function(){function t(t){this.storage=t}return t.prototype.isFavorite=function(t){return this.getAllFavoriteFilms().then(function(e){return e&&-1!==e.indexOf(t)})},t.prototype.favoriteFilm=function(t){var e=this;return this.unfavoriteFilm(t).then(function(o){e.getAllFavoriteFilms().then(function(o){return o?(o.push(t),e.storage.set("favoriteFilms",o)):e.storage.set("favoriteFilms",[t])})})},t.prototype.unfavoriteFilm=function(t){var e=this;return this.getAllFavoriteFilms().then(function(o){if(o)for(var n=0,r=o;n<r.length;n++){var a=r[n];if(a.tmdb==t.tmdb){var i=o.indexOf(a);o.splice(i,1),e.storage.set("favoriteFilms",o)}}})},t.prototype.getAllFavoriteFilms=function(){return this.storage.get("favoriteFilms")},t}()},169:function(t,e){function o(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=169},194:function(t,e,o){var n={"../pages/actor-details/actor-details.module.ngfactory":[272,12],"../pages/actors/actors.module.ngfactory":[274,11],"../pages/anime/anime.module.ngfactory":[276,16],"../pages/cinemas/cinemas.module.ngfactory":[273,18],"../pages/contactus/contactus.module.ngfactory":[277,15],"../pages/discover/discover.module.ngfactory":[275,17],"../pages/episode-details/episode-details.module.ngfactory":[279,2],"../pages/favorites/favorites.module.ngfactory":[278,10],"../pages/home/home.module.ngfactory":[284,9],"../pages/login/login.module.ngfactory":[280,14],"../pages/movie-details/movie-details.module.ngfactory":[281,1],"../pages/movies/movies.module.ngfactory":[282,8],"../pages/movihome/movihome.module.ngfactory":[283,5],"../pages/register/register.module.ngfactory":[285,13],"../pages/search/search.module.ngfactory":[286,0],"../pages/serie-details/serie-details.module.ngfactory":[287,6],"../pages/seriehome/seriehome.module.ngfactory":[288,4],"../pages/series/series.module.ngfactory":[289,7],"../pages/video-player/video-player.module.ngfactory":[290,3]};function r(t){var e=n[t];return e?o.e(e[1]).then(function(){return o(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}r.keys=function(){return Object.keys(n)},r.id=194,t.exports=r},229:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(28),r=o(0),a=(o(2),o(22)),i=o(65),s=(o(84),o(81)),l=o(82),u=o(60),_=o(99),c=o(58),p=o(83),h=o(95),g=function(){function t(t,e,o,n,r,a,i,s,l){var u=this;this._platform=t,this.localNotifications=e,this.events=o,this.user=n,this.menuCtrl=s,this.api=l,this.rootPage="Home",this.pages=[{name:"الرئيسية",component:"Home"},{name:"مكتبتي",component:"FavoritesPage"},{name:"الأفلام",component:"MovihomePage"},{name:"المسلسلات",component:"SerieHomePage"},{name:"الانمي",component:"AnimePage"},{name:"راسلنا",component:"ContactusPage"}],this.notifications=[],this.chosenHours=20,this.chosenMinutes=30,this._user={token:"",name:"لا يوجد حساب مفعل"},this.mdays=[{title:"Monday",dayCode:1,checked:!0},{title:"Tuesday",dayCode:2,checked:!0},{title:"Wednesday",dayCode:3,checked:!0},{title:"Thursday",dayCode:4,checked:!0},{title:"Friday",dayCode:5,checked:!0},{title:"Saturday",dayCode:6,checked:!0},{title:"Sunday",dayCode:0,checked:!0}],this.notLogged=!0,r.ready().then(function(){a.styleDefault(),i.hide(),u.api.getAll(),u.getUser(),_.a.logButton("startApp",{pram:"paramValue"}),h.a.run(),o.subscribe("user:login",function(){u.getUser()}),u.addNotifications()})}return t.prototype.openPage=function(t){this.nav.setRoot(t.component)},t.prototype.gotoLogin=function(){this.nav.setRoot("LoginPage")},t.prototype.gotoRegester=function(){this.nav.setRoot("RegisterPage")},t.prototype.LogOut=function(){this.user.logout(),this.getUser()},t.prototype.getUser=function(){this.user.loggedIn()?(this._user=this.user.getCurrentUser(),this.notLogged=!1):(this._user={token:"",name:"لا يوجد حساب مفعل"},this.notLogged=!0)},t.prototype.addNotifications=function(){for(var t=(new Date).getDay(),e=0,o=this.mdays;e<o.length;e++){var n=o[e];if(n.checked){var r=new Date,a=n.dayCode-t;a<0&&(a+=7),r.setHours(r.getHours()+24*a),r.setHours(this.chosenHours),r.setMinutes(this.chosenMinutes),this.notif={id:n.dayCode,title:"Movies7",text:"لقد تم إضافة الأفلام والمسلسلات الجديدة اليوم ، انقر و اكتشف هنا",icon:"file://assets/imgs/favicon.png",data:{mydata:"My hidden message this is"},at:new Date(r.getTime()+5e3)},this.notifications.push(this.notif)}}console.log(this.notifications),this.localNotifications.schedule(this.notifications)},t.prototype.timeChange=function(t){this.chosenHours=20,this.chosenMinutes=30},t.prototype.cancelAll=function(){this.localNotifications.cancelAll()},t}(),d=o(43),m=o(147),f=o(157),y=o(96),v=o(92),S=o(93),b=o(88),k=o(91),C=o(94),O=o(148),P=o(139),N=o(137),w=o(141),j=function(){return function(){}}(),R=o(51),M=o(216),T=o(217),F=o(218),E=o(219),J=o(220),D=o(221),H=o(222),U=o(223),I=o(224),A=o(115),L=o(23),B=o(38),Y=o(1),Z=o(145),z=o(16),K=o(14),x=o(40),G=o(59),V=o(34),X=o(4),q=o(270),W=o(75),$=o(25),Q=o(6),tt=o(9),et=o(8),ot=o(86),nt=o(5),rt=o(227),at=o(37),it=o(225),st=o(21),lt=o(20),ut=o(12),_t=o(89),ct=o(47),pt=o(271),ht=o(55),gt=o(31),dt=o(15),mt=o(64),ft=r.X({encapsulation:2,styles:[],data:{}});function yt(t){return r._22(0,[(t()(),r.Z(0,0,null,null,5,"button",[["class","mbu"],["menuClose",""]],null,[[null,"click"]],function(t,e,o){var n=!0,a=t.component;"click"===e&&(n=!1!==r._13(t,1).close()&&n);"click"===e&&(n=!1!==a.gotoLogin()&&n);return n},null,null)),r.Y(1,16384,null,0,A.a,[L.a],{menuClose:[0,"menuClose"]},null),(t()(),r._20(-1,null,["\n          "])),(t()(),r.Z(3,0,null,null,1,"ion-icon",[["class","mlogin"],["name","ios-log-in"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(4,147456,null,0,B.a,[Y.a,r.j,r.z],{name:[0,"name"]},null),(t()(),r._20(-1,null,["\n      "]))],function(t,e){t(e,1,0,"");t(e,4,0,"ios-log-in")},function(t,e){t(e,3,0,r._13(e,4)._hidden)})}function vt(t){return r._22(0,[(t()(),r.Z(0,0,null,null,5,"button",[["class","mbu"],["menuClose",""]],null,[[null,"click"]],function(t,e,o){var n=!0,a=t.component;"click"===e&&(n=!1!==r._13(t,1).close()&&n);"click"===e&&(n=!1!==a.LogOut()&&n);return n},null,null)),r.Y(1,16384,null,0,A.a,[L.a],{menuClose:[0,"menuClose"]},null),(t()(),r._20(-1,null,["\n          "])),(t()(),r.Z(3,0,null,null,1,"ion-icon",[["class","mlogin"],["name","ios-log-out"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(4,147456,null,0,B.a,[Y.a,r.j,r.z],{name:[0,"name"]},null),(t()(),r._20(-1,null,["\n      "]))],function(t,e){t(e,1,0,"");t(e,4,0,"ios-log-out")},function(t,e){t(e,3,0,r._13(e,4)._hidden)})}function St(t){return r._22(0,[(t()(),r.Z(0,0,null,null,12,"div",[["class","wigo"]],null,null,null,null,null)),(t()(),r._20(-1,null,["\n          "])),(t()(),r.Z(2,0,null,null,7,"button",[["class","item item-block"],["detail-none",""],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(t,e,o){var n=!0,a=t.component;"click"===e&&(n=!1!==r._13(t,8).close()&&n);"click"===e&&(n=!1!==a.openPage(t.context.$implicit)&&n);return n},Z.b,Z.a)),r.Y(3,1097728,null,3,z.a,[K.a,Y.a,r.j,r.z,[2,x.a]],null,null),r._18(335544320,5,{contentLabel:0}),r._18(603979776,6,{_buttons:1}),r._18(603979776,7,{_icons:1}),r.Y(7,16384,null,0,G.a,[],null,null),r.Y(8,16384,null,0,A.a,[L.a],{menuClose:[0,"menuClose"]},null),(t()(),r._20(9,2,["\n              ","\n            "])),(t()(),r._20(-1,null,["\n            "])),(t()(),r.Z(11,0,null,null,0,"hr",[],null,null,null,null,null)),(t()(),r._20(-1,null,["\n        "]))],function(t,e){t(e,8,0,"")},function(t,e){t(e,9,0,e.context.$implicit.name)})}function bt(t){return r._22(0,[r._18(402653184,1,{nav:0}),(t()(),r.Z(1,0,null,null,53,"ion-split-pane",[["when","lg"]],null,null,null,null,null)),r.Y(2,4341760,null,1,V.b,[r.u,X.a,Y.a,r.j,r.z],{when:[0,"when"]},null),r._18(603979776,2,{_setchildren:1}),r._17(2048,[[2,4]],V.a,null,[V.b]),(t()(),r._20(-1,null,["\n  "])),(t()(),r.Z(6,0,null,null,43,"ion-menu",[["role","navigation"],["side","left"]],null,null,null,q.b,q.a)),r.Y(7,245760,null,2,W.a,[L.a,r.j,Y.a,X.a,r.z,$.a,Q.l,tt.a,et.a],{content:[0,"content"],side:[1,"side"]},null),r._18(335544320,3,{menuContent:0}),r._18(335544320,4,{menuNav:0}),r._17(2048,[[2,4]],V.a,null,[W.a]),(t()(),r._20(-1,0,[" \n    "])),(t()(),r.Z(12,0,null,0,8,"ion-header",[],null,null,null,null,null)),r.Y(13,16384,null,0,ot.a,[Y.a,r.j,r.z,[2,nt.a]],null,null),(t()(),r._20(-1,null,["\n      "])),(t()(),r.Z(15,0,null,null,4,"ion-toolbar",[["class","toolbar"],["color","dark"]],[[2,"statusbar-padding",null]],null,null,rt.b,rt.a)),r.Y(16,49152,null,0,at.a,[Y.a,r.j,r.z],{color:[0,"color"]},null),(t()(),r._20(-1,3,["\n          "])),(t()(),r.Z(18,0,null,3,0,"img",[["alt","logo"],["height","30"],["src","assets/imgs/logo.png"]],null,null,null,null,null)),(t()(),r._20(-1,3,["\n      "])),(t()(),r._20(-1,null,["\n    "])),(t()(),r._20(-1,0,["\n\n    "])),(t()(),r.Z(22,0,null,0,26,"ion-content",[["class","sidebar"],["color","primary"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,it.b,it.a)),r.Y(23,4374528,[[3,4]],0,st.a,[Y.a,X.a,tt.a,r.j,r.z,et.a,$.a,r.u,[2,nt.a],[2,lt.a]],{color:[0,"color"]},null),(t()(),r._20(-1,1,["\n      "])),(t()(),r.U(16777216,null,1,1,null,yt)),r.Y(26,16384,null,0,ut.j,[r.I,r.F],{ngIf:[0,"ngIf"]},null),(t()(),r._20(-1,1,["\n      "])),(t()(),r.U(16777216,null,1,1,null,vt)),r.Y(29,16384,null,0,ut.j,[r.I,r.F],{ngIf:[0,"ngIf"]},null),(t()(),r._20(-1,1,["\n        "])),(t()(),r.Z(31,0,null,1,8,"ion-card",[["style","background: rgba(255, 255, 255, 0)"],["text-center",""]],null,null,null,null,null)),r.Y(32,16384,null,0,_t.a,[Y.a,r.j,r.z],null,null),(t()(),r._20(-1,null,["\n            "])),(t()(),r.Z(34,0,null,null,1,"ion-icon",[["class","mavatar"],["name","ios-people"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r.Y(35,147456,null,0,B.a,[Y.a,r.j,r.z],{name:[0,"name"]},null),(t()(),r._20(-1,null,["\n            "])),(t()(),r.Z(37,0,null,null,1,"div",[["class","card-title"]],null,null,null,null,null)),(t()(),r._20(38,null,["",""])),(t()(),r._20(-1,null,["  \n        "])),(t()(),r._20(-1,1,["\n       "])),(t()(),r._20(-1,1,["\n      "])),(t()(),r.Z(42,0,null,1,5,"ion-list",[["class","menu"],["no-lines",""]],null,null,null,null,null)),r.Y(43,16384,null,0,ct.a,[Y.a,r.j,r.z,X.a,Q.l,tt.a],null,null),(t()(),r._20(-1,null,["\n        "])),(t()(),r.U(16777216,null,null,1,null,St)),r.Y(46,802816,null,0,ut.i,[r.I,r.F,r.p],{ngForOf:[0,"ngForOf"]},null),(t()(),r._20(-1,null,["\n      "])),(t()(),r._20(-1,1,["\n    "])),(t()(),r._20(-1,0,["\n    \n  "])),(t()(),r._20(-1,null,["\n\n  "])),(t()(),r.Z(51,0,null,null,2,"ion-nav",[["main",""],["swipeBackEnabled","false"]],null,null,null,pt.b,pt.a)),r.Y(52,4374528,[[1,4],["content",4]],0,ht.a,[[2,nt.a],[2,lt.a],et.a,Y.a,X.a,r.j,r.u,r.z,r.i,Q.l,gt.a,[2,dt.a],tt.a,r.k],{swipeBackEnabled:[0,"swipeBackEnabled"],root:[1,"root"]},null),r._17(2048,[[2,4]],V.a,null,[ht.a]),(t()(),r._20(-1,null,["\n"]))],function(t,e){var o=e.component;t(e,2,0,"lg");t(e,7,0,r._13(e,52),"left");t(e,16,0,"dark");t(e,23,0,"primary"),t(e,26,0,o.notLogged),t(e,29,0,!o.notLogged);t(e,35,0,"ios-people"),t(e,46,0,o.pages);t(e,52,0,"false",o.rootPage)},function(t,e){var o=e.component;t(e,15,0,r._13(e,16)._sbPadding),t(e,22,0,r._13(e,23).statusbarPadding,r._13(e,23)._hasRefresher),t(e,34,0,r._13(e,35)._hidden),t(e,38,0,o._user.name)})}var kt=r.V("ng-component",g,function(t){return r._22(0,[(t()(),r.Z(0,0,null,null,1,"ng-component",[],null,null,null,bt,ft)),r.Y(1,49152,null,0,g,[X.a,p.a,mt.a,c.a,X.a,s.a,l.a,L.a,u.a],null,null)],null,null)},{},{},[]),Ct=o(118),Ot=o(18),Pt=o(195),Nt=o(109),wt=o(97),jt=o(33),Rt=o(114),Mt=o(136),Tt=o(53),Ft=o(39),Et=o(122),Jt=o(70),Dt=o(101),Ht=o(120),Ut=o(90),It=o(215),At=o(119),Lt=o(116),Bt=o(121),Yt=r.W(j,[R.b],function(t){return r._10([r._11(512,r.i,r.S,[[8,[M.a,T.a,F.a,E.a,J.a,D.a,H.a,U.a,I.a,kt]],[3,r.i],r.s]),r._11(5120,r.r,r._9,[[3,r.r]]),r._11(4608,ut.l,ut.k,[r.r,[2,ut.u]]),r._11(5120,r.b,r._0,[]),r._11(5120,r.p,r._6,[]),r._11(5120,r.q,r._7,[]),r._11(4608,n.c,n.q,[ut.c]),r._11(6144,r.D,null,[n.c]),r._11(4608,n.f,Ct.a,[]),r._11(5120,n.d,function(t,e,o,r,a){return[new n.k(t,e),new n.o(o),new n.n(r,a)]},[ut.c,r.u,ut.c,ut.c,n.f]),r._11(4608,n.e,n.e,[n.d,r.u]),r._11(135680,n.m,n.m,[ut.c]),r._11(4608,n.l,n.l,[n.e,n.m]),r._11(6144,r.B,null,[n.l]),r._11(6144,n.p,null,[n.m]),r._11(4608,r.G,r.G,[r.u]),r._11(4608,n.h,n.h,[ut.c]),r._11(4608,n.i,n.i,[ut.c]),r._11(4608,a.c,a.c,[]),r._11(4608,a.h,a.b,[]),r._11(5120,a.j,a.k,[]),r._11(4608,a.i,a.i,[a.c,a.h,a.j]),r._11(4608,a.g,a.a,[]),r._11(5120,a.e,a.l,[a.i,a.g]),r._11(4608,i.h,i.m,[ut.c,r.w,i.k]),r._11(4608,i.n,i.n,[i.h,i.l]),r._11(5120,i.a,function(t){return[t]},[i.n]),r._11(4608,i.j,i.j,[]),r._11(6144,i.i,null,[i.j]),r._11(4608,i.g,i.g,[i.i]),r._11(6144,i.b,null,[i.g]),r._11(5120,i.f,i.o,[i.b,[2,i.a]]),r._11(4608,i.c,i.c,[i.f]),r._11(4608,Ot.k,Ot.k,[]),r._11(4608,Ot.c,Ot.c,[]),r._11(5120,Pt.a,Pt.c,[Pt.b]),r._11(4608,Nt.a,Nt.a,[et.a,Y.a]),r._11(4608,wt.a,wt.a,[et.a,Y.a]),r._11(4608,mt.a,mt.a,[]),r._11(4608,K.a,K.a,[]),r._11(4608,jt.a,jt.a,[X.a]),r._11(4608,$.a,$.a,[Y.a,X.a,r.u,tt.a]),r._11(4608,Rt.a,Rt.a,[et.a,Y.a]),r._11(5120,ut.g,Mt.c,[ut.r,[2,ut.a],Y.a]),r._11(4608,ut.f,ut.f,[ut.g]),r._11(5120,Tt.b,Tt.d,[et.a,Tt.a]),r._11(5120,dt.a,dt.b,[et.a,Tt.b,ut.f,Ft.b,r.i]),r._11(4608,Et.a,Et.a,[et.a,Y.a,dt.a]),r._11(4608,Jt.a,Jt.a,[et.a,Y.a]),r._11(4608,Dt.a,Dt.a,[et.a,Y.a,dt.a]),r._11(4608,Ht.a,Ht.a,[Y.a,X.a,tt.a,et.a,Q.l]),r._11(4608,Ut.a,Ut.a,[et.a,Y.a]),r._11(4608,gt.a,gt.a,[X.a,Y.a]),r._11(4608,s.a,s.a,[]),r._11(4608,l.a,l.a,[]),r._11(4608,b.a,b.a,[a.e,Pt.a]),r._11(4608,y.a,y.a,[a.e,b.a]),r._11(4608,C.a,C.a,[a.e,Pt.a]),r._11(4608,S.a,S.a,[a.e,C.a]),r._11(4608,k.a,k.a,[a.e,Pt.a]),r._11(4608,v.a,v.a,[a.e,k.a]),r._11(4608,u.a,u.a,[a.e,S.a,y.a,v.a]),r._11(4608,O.a,O.a,[]),r._11(4608,m.a,m.a,[]),r._11(4608,p.a,p.a,[]),r._11(4608,f.a,f.a,[]),r._11(4608,P.a,P.a,[i.c]),r._11(4608,N.a,N.a,[a.e]),r._11(4608,w.a,w.a,[Pt.a]),r._11(4608,h.a,h.a,[i.c]),r._11(4608,_.a,_.a,[]),r._11(4608,c.a,c.a,[a.e]),r._11(512,ut.b,ut.b,[]),r._11(512,r.k,It.a,[]),r._11(256,Y.b,{backButtonText:"رجوع",backButtonIcon:"ios-arrow-back",iconMode:"md"},[]),r._11(1024,At.a,At.b,[]),r._11(1024,X.a,X.b,[n.b,At.a,r.u]),r._11(1024,Y.a,Y.c,[Y.b,X.a]),r._11(512,tt.a,tt.a,[X.a]),r._11(512,L.a,L.a,[]),r._11(512,et.a,et.a,[Y.a,X.a,[2,L.a]]),r._11(512,Q.l,Q.l,[et.a]),r._11(256,Tt.a,{links:[{loadChildren:"../pages/actor-details/actor-details.module.ngfactory#ActorDetailsModuleNgFactory",name:"ActorDetails",segment:"actors/:id",priority:"low",defaultHistory:["Actors"]},{loadChildren:"../pages/cinemas/cinemas.module.ngfactory#CinemasPageModuleNgFactory",name:"CinemasPage",segment:"cinemas",priority:"low",defaultHistory:[]},{loadChildren:"../pages/actors/actors.module.ngfactory#ActorsModuleNgFactory",name:"Actors",segment:"actors",priority:"low",defaultHistory:[]},{loadChildren:"../pages/discover/discover.module.ngfactory#DiscoverModuleNgFactory",name:"Discover",segment:"discover",priority:"low",defaultHistory:[]},{loadChildren:"../pages/anime/anime.module.ngfactory#AnimePageModuleNgFactory",name:"AnimePage",segment:"anime",priority:"low",defaultHistory:[]},{loadChildren:"../pages/contactus/contactus.module.ngfactory#ContactusPageModuleNgFactory",name:"ContactusPage",segment:"contactus",priority:"low",defaultHistory:[]},{loadChildren:"../pages/favorites/favorites.module.ngfactory#FavoritesPageModuleNgFactory",name:"FavoritesPage",segment:"favorites",priority:"low",defaultHistory:[]},{loadChildren:"../pages/episode-details/episode-details.module.ngfactory#EpisodeDetailsPageModuleNgFactory",name:"EpisodeDetailsPage",segment:"episode-details",priority:"low",defaultHistory:[]},{loadChildren:"../pages/login/login.module.ngfactory#LoginPageModuleNgFactory",name:"LoginPage",segment:"login",priority:"low",defaultHistory:[]},{loadChildren:"../pages/movie-details/movie-details.module.ngfactory#MovieDetailsModuleNgFactory",name:"MovieDetails",segment:"movies/:id",priority:"low",defaultHistory:["Movies"]},{loadChildren:"../pages/movies/movies.module.ngfactory#MoviesModuleNgFactory",name:"Movies",segment:"movies",priority:"low",defaultHistory:[]},{loadChildren:"../pages/movihome/movihome.module.ngfactory#MovihomePageModuleNgFactory",name:"MovihomePage",segment:"movihome",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#HomeModuleNgFactory",name:"Home",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/register/register.module.ngfactory#RegisterPageModuleNgFactory",name:"RegisterPage",segment:"register",priority:"low",defaultHistory:[]},{loadChildren:"../pages/search/search.module.ngfactory#SearchModuleNgFactory",name:"Search",segment:"search",priority:"low",defaultHistory:["Home"]},{loadChildren:"../pages/serie-details/serie-details.module.ngfactory#SerieDetailsModuleNgFactory",name:"SerieDetails",segment:"series/:id",priority:"low",defaultHistory:["Series"]},{loadChildren:"../pages/seriehome/seriehome.module.ngfactory#SerieHomePageModuleNgFactory",name:"SerieHomePage",segment:"seriehome",priority:"low",defaultHistory:[]},{loadChildren:"../pages/series/series.module.ngfactory#SeriesModuleNgFactory",name:"Series",segment:"series",priority:"low",defaultHistory:[]},{loadChildren:"../pages/video-player/video-player.module.ngfactory#VideoPlayerPageModuleNgFactory",name:"VideoPlayerPage",segment:"video-player",priority:"low",defaultHistory:[]}]},[]),r._11(512,r.h,r.h,[]),r._11(512,Lt.a,Lt.a,[r.h]),r._11(1024,Ft.b,Ft.c,[Lt.a,r.o]),r._11(1024,r.c,function(t,e,o,r,a,i,s,l,u,_,c,p,h){return[n.s(t),Bt.a(e),mt.b(o,r),Ht.b(a,i,s,l,u),Ft.d(_,c,p,h)]},[[2,r.t],Y.a,X.a,tt.a,Y.a,X.a,tt.a,et.a,Q.l,Y.a,Tt.a,Ft.b,r.u]),r._11(512,r.d,r.d,[[2,r.c]]),r._11(131584,r.f,r.f,[r.u,r.T,r.o,r.k,r.i,r.d]),r._11(512,r.e,r.e,[r.f]),r._11(512,n.a,n.a,[[3,n.a]]),r._11(512,a.f,a.f,[]),r._11(512,i.e,i.e,[]),r._11(512,i.d,i.d,[]),r._11(512,d.a,d.a,[]),r._11(512,Ot.j,Ot.j,[]),r._11(512,Ot.d,Ot.d,[]),r._11(512,Ot.i,Ot.i,[]),r._11(512,Mt.a,Mt.a,[]),r._11(512,j,j,[]),r._11(256,i.k,"XSRF-TOKEN",[]),r._11(256,i.l,"X-XSRF-TOKEN",[]),r._11(256,Pt.b,null,[]),r._11(256,R.a,g,[]),r._11(256,ut.a,"/",[])])});Object(r.M)(),Object(n.j)().bootstrapModuleFactory(Yt)},58:function(t,e,o){"use strict";o.d(e,"a",function(){return n});o(2);var n=function(){function t(t){this.http=t,this.ApiProvider="http://api.movie7s.com",this.user={token:"",name:"",role:"",loginDate:"",diffDays:0}}return t.prototype.login=function(t,e){var o=this;return this._dbPromise=new Promise(function(n,r){try{o.http.post(o.ApiProvider+"/login",{email:t,password:e}).map(function(t){return t.json()}).subscribe(function(t){if(""!=t.api_token){localStorage.setItem("api_token",JSON.stringify(t.api_token)),localStorage.setItem("name",JSON.stringify(t.message.name)),localStorage.setItem("user",JSON.stringify(t.message)),localStorage.setItem("role",JSON.stringify(t.message.role));var e=(new Date).toLocaleDateString();localStorage.setItem("LoginDate",JSON.stringify(e)),console.log(),n(t)}})}catch(t){r({err:t})}})},t.prototype.logout=function(){localStorage.removeItem("api_token"),localStorage.removeItem("name"),localStorage.removeItem("user"),localStorage.removeItem("role")},t.prototype.getCurrentUser=function(){try{this.user={token:JSON.parse(localStorage.getItem("api_token")),name:JSON.parse(localStorage.getItem("name")),role:JSON.parse(localStorage.getItem("role")),loginDate:JSON.parse(localStorage.getItem("LoginDate")),diffDays:0};var t=new Date,e=new Date(this.user.loginDate);console.log("-- USER LOGIN TEST ----");var o=Math.abs(e.getTime()-t.getTime()),n=Math.ceil(o/864e5);return this.user.diffDays=n,console.log(n),console.log("getCurrentUser"),console.log(this.user),this.user}catch(t){return this.user}},t.prototype.getUserId=function(){try{var t=JSON.parse(localStorage.getItem("user"));return console.log("getCurrentUser"),console.log(t),t.id}catch(t){return""}},t.prototype.isEmptyObject=function(t){return t&&0===Object.keys(t).length},t.prototype.loggedIn=function(){return null!=this.getCurrentUser().token&&""!=this.getCurrentUser().token},t.prototype.regesterUser=function(t,e,o){return console.log("_____________________POST Auth_______________________________________________"),this.http.post(this.ApiProvider+"/register",{email:t,password:e,name:o}).map(function(t){return t.json()})},t}()},60:function(t,e,o){"use strict";o.d(e,"a",function(){return s});o(2),o(96),o(92),o(93);var n=o(36),r=(o.n(n),o(268)),a=(o.n(r),o(269)),i=(o.n(a),o(63)),s=(o.n(i),function(){function t(t,e,o,n){this.https=t,this.actors=e,this.movies=o,this.series=n}return t.prototype.getAll=function(){},t.prototype.search=function(t,e){return"movies"===e?(this.moviesObservable=this.movies.search(t),this.movies.search(t)):"actors"===e?(this.actorsObservable=this.actors.search(t),this.actors.search(t)):"series"===e?(this.seriesObservable=this.series.search(t),this.series.search(t)):void 0},t}())},88:function(t,e,o){"use strict";o.d(e,"a",function(){return r});o(2);var n=o(36),r=(o.n(n),o(43),function(){function t(t,e){this.https=t,this.store=e,console.log("Hello MoviesStorage Provider")}return t.prototype.setUpcoming=function(t){return this.store.set("upcomingMovies",t)},t.prototype.getUpcoming=function(){return this.store.get("upcomingMovies").then(function(t){return t?JSON.parse(t):{results:[]}})},t.prototype.setLatest=function(t){return this.store.set("latestMovies",t)},t.prototype.getLatest=function(){return this.store.get("latestMovies").then(function(t){return t||{results:[]}})},t.prototype.setPopular=function(t){return this.store.set("popularMovies",t)},t.prototype.getPopular=function(){return this.store.get("popularMovies").then(function(t){return t?JSON.parse(t):{results:[]}})},t.prototype.setTopRated=function(t){return this.store.set("topRatedMovies",t)},t.prototype.getTopRated=function(){return this.store.get("topRatedMovies").then(function(t){return t?JSON.parse(t):{results:[]}})},t}())},91:function(t,e,o){"use strict";o.d(e,"a",function(){return n});o(2),o(43);var n=function(){function t(t,e){this.https=t,this.store=e,console.log("Hello SeriesStorage Provider")}return t.prototype.setUpcoming=function(t){return this.store.set("upcomingSeries",t)},t.prototype.getUpcoming=function(){return this.store.get("upcomingSeries").then(function(t){return t?JSON.parse(t):{results:[]}})},t.prototype.setLatest=function(t){return this.store.set("latestSeries",t)},t.prototype.getLatest=function(){return this.store.get("latestSeries").then(function(t){return t?JSON.parse(t):{results:[]}})},t.prototype.setPopular=function(t){return this.store.set("popularSeries",t)},t.prototype.getPopular=function(){return this.store.get("popularSeries").then(function(t){return t?JSON.parse(t):{results:[]}})},t.prototype.setTopRated=function(t){return this.store.set("topRatedSeries",t)},t.prototype.getTopRated=function(){return this.store.get("topRatedSeries").then(function(t){return t?JSON.parse(t):{results:[]}})},t}()},92:function(t,e,o){"use strict";o.d(e,"a",function(){return s});o(2),o(91);var n=o(10),r=(o.n(n),o(36)),a=(o.n(r),o(63)),i=(o.n(a),o(117)),s=(o.n(i),function(){function t(t,e){this.http=t,this.store=e}return t.prototype.one=function(t){return this.http.get("https://movie-ease.herokuapp.com/series/one/"+t).map(function(t){return JSON.parse(t.json())}).catch(this._handleError)},t.prototype.search=function(t){return this.http.get("https://movie-ease.herokuapp.com/series/search/"+t).map(function(t){return JSON.parse(t.json())}).catch(this._handleError)},t.prototype.popular=function(t){return void 0===t&&(t=1),this.http.get("https://movie-ease.herokuapp.com/series/popular/"+t).map(function(t){return JSON.parse(t.json())}).catch(this._handleError)},t.prototype.latest=function(t){return void 0===t&&(t=1),this.http.get("https://movie-ease.herokuapp.com/series/latest/"+t).map(function(t){return JSON.parse(t.json())}).catch(this._handleError)},t.prototype.upcoming=function(t){return void 0===t&&(t=1),this.http.get("https://movie-ease.herokuapp.com/series/upcoming/"+t).map(function(t){return JSON.parse(t.json())}).catch(this._handleError)},t.prototype.topRated=function(t){return void 0===t&&(t=1),this.http.get("https://movie-ease.herokuapp.com/series/top-rated/"+t).map(function(t){return JSON.parse(t.json())}).catch(this._handleError)},t.prototype._handleError=function(){return n.Observable.throw("Network Error")},t.prototype.getCategories=function(){return[{id:0,cate:"agnabi"},{id:1,cate:"arabi"}]},t.prototype.getByCategory=function(t,e){},t}())},93:function(t,e,o){"use strict";o.d(e,"a",function(){return s});o(2),o(94);var n=o(10),r=(o.n(n),o(36)),a=(o.n(r),o(63)),i=(o.n(a),o(117)),s=(o.n(i),function(){function t(t,e){this.http=t,this.store=e}return t.prototype.one=function(t){return this.http.get("https://movie-ease.herokuapp.com/actors/one/"+t).map(function(t){return JSON.parse(t.json())}).catch(this._handleError)},t.prototype.search=function(t){return this.http.get("https://movie-ease.herokuapp.com/actors/search/"+t).map(function(t){return JSON.parse(t.json())}).catch(this._handleError)},t.prototype.popular=function(t){var e=this;return void 0===t&&(t=1),this.http.get("https://movie-ease.herokuapp.com/actors/popular/"+t).map(function(o){return 1===t&&e.store.setPopular(o.json()),JSON.parse(o.json())}).catch(this._handleError)},t.prototype._handleError=function(t){return n.Observable.throw("Network Error occured")},t}())},94:function(t,e,o){"use strict";o.d(e,"a",function(){return r});o(2);var n=o(36),r=(o.n(n),o(43),function(){function t(t,e){this.https=t,this.store=e,console.log("Hello ActorsStorage Provider")}return t.prototype.setUpcoming=function(t){return this.store.set("upcomingActors",t)},t.prototype.getUpcoming=function(){return this.store.get("upcomingActors").then(function(t){return t?JSON.parse(t):{results:[]}})},t.prototype.setLatest=function(t){return this.store.set("latestActors",t)},t.prototype.getLatest=function(){return this.store.get("latestActors").then(function(t){return t?JSON.parse(t):{results:[]}})},t.prototype.setPopular=function(t){return this.store.set("popularActors",t)},t.prototype.getPopular=function(){return this.store.get("popularActors").then(function(t){return t?JSON.parse(t):{results:[]}})},t.prototype.setTopRated=function(t){return this.store.set("topRatedActors",t)},t.prototype.getTopRated=function(){return this.store.get("topRatedActors").then(function(t){return t?JSON.parse(t):{results:[]}})},t}())},95:function(t,e,o){"use strict";o.d(e,"a",function(){return n});o(2);var n=function(){function t(t){this.http=t,console.log("Hello GlobalProvider Provider")}return t.isRaning=function(){return this.runing},t.getCurrentUser=function(){try{this._user={token:JSON.parse(localStorage.getItem("api_token")),name:JSON.parse(localStorage.getItem("name")),role:JSON.parse(localStorage.getItem("role")),loginDate:JSON.parse(localStorage.getItem("LoginDate")),diffDays:0};var t=new Date,e=new Date(this._user.loginDate);console.log("-- USER LOGIN TEST ----");var o=Math.abs(e.getTime()-t.getTime()),n=Math.ceil(o/864e5);return this._user.diffDays=n,console.log(n),console.log("getCurrentUser"),console.log(this._user),this._user}catch(t){return this._user}},t.run=function(){this.runing=!(this.getCurrentUser().diffDays<=30&&"2"==this.getCurrentUser().role)},t.numberOfAdShows=1,t.runing=!0,t.turn=0,t._user={token:"",name:"",role:"",loginDate:"",diffDays:0},t}()},96:function(t,e,o){"use strict";o.d(e,"a",function(){return l});o(2);var n=o(10),r=(o.n(n),o(88),o(117)),a=(o.n(r),o(36)),i=(o.n(a),o(265)),s=(o.n(i),o(63)),l=(o.n(s),function(){function t(t,e){this.http=t,this.store=e}return t.prototype.one=function(t){return this.http.get("https://movie-ease.herokuapp.com/movies/one/"+t).map(function(t){return JSON.parse(t.json())}).catch(this._handleError)},t.prototype.search=function(t){return this.http.get("https://movie-ease.herokuapp.com/movies/search/"+t).map(function(t){return JSON.parse(t.json())}).catch(this._handleError)},t.prototype.popular=function(t){var e=this;return void 0===t&&(t=1),console.log("Getting popular"),this.http.get("https://movie-ease.herokuapp.com/movies/popular/"+t).map(function(o){return 1===t&&e.store.setPopular(o.json()),JSON.parse(o.json())}).catch(this._handleError)},t.prototype.latest=function(t){var e=this;return void 0===t&&(t=1),console.log("Getting latest"),this.http.get("https://movie-ease.herokuapp.com/movies/latest/"+t).map(function(o){return t<2&&o.json().results&&e.store.setLatest(o.json()),JSON.parse(o.json())}).catch(this._handleError)},t.prototype.upcoming=function(t){var e=this;return void 0===t&&(t=1),console.log("Getting upcoming"),this.http.get("https://movie-ease.herokuapp.com/movies/upcoming/"+t).map(function(o){return 1===t&&e.store.setUpcoming(o.json()),JSON.parse(o.json())}).catch(this._handleError)},t.prototype.topRated=function(t){var e=this;return void 0===t&&(t=1),console.log("Getting topRated"),this.http.get("https://movie-ease.herokuapp.com/movies/top-rated/"+t).map(function(o){return 1===t&&e.store.setTopRated(o.json()),JSON.parse(o.json())}).catch(this._handleError)},t.prototype.ozone=function(){return this.http.get("https://movie-ease.herokuapp.com/movies/ozone").map(function(t){return console.log(t.json()),JSON.parse(t.json())}).catch(this._handleError)},t.prototype.getAll=function(){this.topRated(1).subscribe(function(t){return console.log(t)}),this.latest(1).subscribe(function(t){return console.log(t)}),this.upcoming(1).subscribe(function(t){return console.log(t)}),this.popular(1).subscribe(function(t){return console.log(t)})},t.prototype._handleError=function(t){return n.Observable.throw("A Network Error Occured")},t.prototype.getCategories=function(){return[{id:0,cate:"agnabi"},{id:1,cate:"arabi"}]},t.prototype.getByCategory=function(t,e){},t}())},99:function(t,e,o){"use strict";o.d(e,"a",function(){return n});o(2);var n=function(){function t(){console.log("Hello EventLoggerProvider Provider")}return t.logButton=function(t,e){},t}()}},[229]);