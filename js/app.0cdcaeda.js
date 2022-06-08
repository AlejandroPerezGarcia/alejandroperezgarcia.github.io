(function(){"use strict";var t={3710:function(t,e,a){var i=a(8935),r=a(8262),s=a(3266),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("FooterView")],1)},n=[],l=a(6926),c=a(4665),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"site-footer container-fluid"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8 col-sm-6 col-xs-12"},[a("p",{staticClass:"copyright-text"},[t._v(" Copyright © 2022 All Rights Reserved by "),a("a",{attrs:{href:"#"}},[t._v("PELICOOLAPP")]),t._v(". ")])])])])])}],v={name:"FooterView"},d=v,p=a(1001),b=(0,p.Z)(d,m,u,!1,null,null,null),h=b.exports,f={name:"App",components:{FooterView:h},methods:{...(0,c.nv)(["instanceFirestore","getMovieList","getNick"]),initFirestore(){this.instanceFirestore(l.ad)}},created(){this.initFirestore()},beforeMount(){this.getMovieList(),this.getNick()}},g=f,_=(0,p.Z)(g,o,n,!1,null,null,null),y=_.exports,k=a(2809),x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("NavBar"),i("div",{staticClass:"video"},[i("video",{attrs:{src:a(7102),autoplay:"",loop:"",muted:""},domProps:{muted:!0}}),i("h1",[t._v("PELICOOLAPP")])]),i("b-container",[i("div",{staticClass:"text-center py-5"},[i("h2",{staticClass:"title"},[t._v(" Hazle seguimiento a lo que ves"),i("br"),i("strong",[t._v("Descubre")]),t._v(" nuevas películas ")])]),i("b-row",{staticClass:"justify-content-center mb-5"},[i("b-col",{attrs:{cols:"auto",md:"4"}},[i("img",{staticClass:"img-fluid popcorn-home",attrs:{src:a(2727),height:"400px",alt:"popcorn-home"}})]),i("b-col",{attrs:{cols:"auto",md:"5"}},[i("p",{staticClass:"pt-5 register-text"},[i("strong",[t._v("¿No sabes que ver este fin de semana?")]),t._v(" "),i("br"),t._v(" Revisa lo que está viendo el resto, guíate por puntuación y sigue el contenido más relevante ")]),i("b-button",{attrs:{to:"/register"}},[t._v("¡Regístrate!")])],1)],1),i("PopularHome"),i("hr"),i("UpcomingHome")],1)],1)},w=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mt-4"},[a("h1",{staticClass:"mb-5 text-center"},[t._v("Peliculas más populares")]),a("b-row",{staticClass:"d-flex justify-content-center"},t._l(t.popularMovies.slice(0,5),(function(e,i){return a("b-col",{key:i,staticClass:"col-lg-2 col-md-6",attrs:{cols:"auto"}},[a("img",{staticClass:"img-fluid",attrs:{src:t.getImage(e.poster_path)}})])})),1),a("div",{staticClass:"text-center my-4"},[a("b-button",{attrs:{to:"/login"}},[t._v(" Ver todas ")])],1)],1)},M=[],S={name:"PopularHome",methods:{...(0,c.nv)(["getPopularMovies"]),getImage(t){return`https://image.tmdb.org/t/p/original${t}`}},mounted(){this.getPopularMovies()},computed:{...(0,c.rn)(["popularMovies"])}},$=S,I=(0,p.Z)($,C,M,!1,null,"42db8a78",null),N=I.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mt-4"},[a("h1",{staticClass:"mb-5 text-center"},[t._v("Próximos estrenos")]),a("b-row",{staticClass:"d-flex justify-content-center"},t._l(t.upcomingMovies.slice(0,5),(function(e,i){return a("b-col",{key:i,staticClass:"col-lg-2 col-md-6",attrs:{cols:"auto"}},[a("img",{staticClass:"img-fluid",attrs:{src:t.getImage(e.poster_path)}})])})),1)],1)},E=[],L={name:"UpcomingHome",methods:{...(0,c.nv)(["getUpcomingMovies"]),getImage(t){return`https://image.tmdb.org/t/p/original${t}`}},mounted(){this.getUpcomingMovies()},computed:{...(0,c.rn)(["upcomingMovies"])}},U=L,B=(0,p.Z)(U,P,E,!1,null,"47d6402f",null),F=B.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-navbar",{staticClass:"my-navbar",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[i("b-navbar-brand",{attrs:{to:"/"}},[i("img",{attrs:{src:a(2877),height:"50px",alt:"logo"}})]),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar",{staticClass:"d-md-none d-sm-block navbar-mobile"},[i("b-nav-item",{on:{click:t.login}},[t._v("Login")]),i("b-nav-item",{on:{click:t.register}},[t._v("Registrate")])],1),i("b-navbar-nav",{staticClass:"ml-auto d-none d-sm-flex"},[i("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("b-avatar",{attrs:{variant:"info"}}),i("b-badge")]},proxy:!0}])},[i("b-dropdown-item",{on:{click:t.login}},[t._v("Login")]),i("b-dropdown-item",{on:{click:t.register}},[t._v("Registrate")])],1)],1)],1)],1)],1)},Z=[],A={name:"NavBar",methods:{exit(){this.$router.push("/")},login(){this.$router.push("/login")},register(){this.$router.push("/register")}}},q=A,V=(0,p.Z)(q,R,Z,!1,null,"c963c674",null),O=V.exports,j={name:"HomeView",components:{PopularHome:N,UpcomingHome:F,NavBar:O}},T=j,H=(0,p.Z)(T,x,w,!1,null,"07d9eb13",null),J=H.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("NavBarAuth"),a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:"/popularmovies"}},[a("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}})],1),a("b-breadcrumb-item",{attrs:{active:""},on:{click:t.popular}},[t._v("Películas Populares")])],1),a("PopularList")],1)},Y=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mt-4"},[a("h1",{staticClass:"mb-5"},[t._v("Peliculas más populares")]),a("b-row",t._l(t.popularMovies,(function(e,i){return a("b-col",{key:i,attrs:{cols:"auto",md:"3"}},[a("b-card",{staticClass:"mb-4 mx-2",attrs:{title:e.title,"img-src":t.getImage(e.poster_path),"img-alt":"movie.title","img-top":"",tag:"article"}},[a("div",{staticClass:"d-flex"},[a("p",{staticClass:"mr-2"},[t._v(" "+t._s(e.vote_average)+" / 10 ")]),a("b-icon-star-fill",{attrs:{variant:"warning"}})],1),a("b-button",[a("router-link",{attrs:{to:{path:"/movieinfo/"+e.id}}},[t._v(" Ver más detalles ")])],1)],1)],1)})),1)],1)},X=[],G={name:"PopularList",methods:{...(0,c.nv)(["getPopularMovies"]),getImage(t){return`https://image.tmdb.org/t/p/original${t}`}},mounted(){this.getPopularMovies()},computed:{...(0,c.rn)(["popularMovies"])}},K=G,Q=(0,p.Z)(K,D,X,!1,null,"dee491ee",null),W=Q.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-navbar",{staticClass:"my-navbar",attrs:{toggleable:"lg",type:"dark",variant:"info"}},[i("b-navbar-brand",{attrs:{to:"/popularmovies"}},[i("img",{attrs:{src:a(2877),height:"50px",alt:"logo"}})]),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar",{staticClass:"d-md-none d-sm-block navbar-mobile"},[i("SearchBar"),i("b-nav-item",{on:{click:t.edit}},[t._v("Editar mi perfil")]),i("b-nav-item",{attrs:{to:"/movielist"}},[t._v("Mi Lista")]),i("b-nav-item",{on:{click:t.exit}},[t._v("Salir")])],1),i("b-navbar-nav",{staticClass:"ml-auto d-none d-sm-flex"},[i("SearchBar"),i("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("b-avatar",{attrs:{variant:"info",src:"https://placekitten.com/300/300"}})]},proxy:!0}])},[i("b-dropdown-item",{on:{click:t.edit}},[t._v("Editar mi perfil")]),i("b-dropdown-item",{attrs:{to:"/movielist"}},[t._v("Mi Lista")]),i("b-dropdown-item",{on:{click:t.exit}},[t._v("Salir")])],1)],1)],1)],1)],1)},et=[],at=a(1826),it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-nav-form",[a("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Ingresa una película"},model:{value:t.movieid,callback:function(e){t.movieid=e},expression:"movieid"}}),a("b-button",{staticClass:"search my-2 my-sm-0",attrs:{size:"sm",type:"button",to:"/search"},on:{click:function(e){return t.getMovieSearch([t.movieid])}}},[a("b-icon-search")],1)],1)],1)},rt=[],st={data(){return{movieid:""}},name:"SearchBar",methods:{...(0,c.nv)(["getMovieSearch"])}},ot=st,nt=(0,p.Z)(ot,it,rt,!1,null,"6d998b0d",null),lt=nt.exports,ct={name:"NavBarAuth",components:{SearchBar:lt},methods:{exit(){const t=(0,at.v0)();(0,at.w7)(t).then((()=>{this.$router.push("/")})).catch((()=>{}))},edit(){this.$router.push("/profile")}}},mt=ct,ut=(0,p.Z)(mt,tt,et,!1,null,"60cb0b8e",null),vt=ut.exports,dt={name:"PopularMovies",components:{PopularList:W,NavBarAuth:vt},methods:{popular(){this.$router.push("/popularmovies")}},mounted(){}},pt=dt,bt=(0,p.Z)(pt,z,Y,!1,null,null,null),ht=bt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:"/"}},[a("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}})],1),a("b-breadcrumb-item",{attrs:{active:"",to:"/upcomingmovies"}},[t._v("Próximos Estrenos")])],1),a("UpcomingList")],1)},gt=[],_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mt-4"},[a("h1",{staticClass:"mb-5"},[t._v("Próximos Estrenos")]),a("b-row",t._l(t.upcomingMovies,(function(e,i){return a("b-col",{key:i,attrs:{cols:"auto",md:"3"}},[a("b-card",{staticClass:"mb-4 mx-2",attrs:{title:e.title,"img-src":t.getImage(e.poster_path),"img-alt":"movie.title","img-top":"",tag:"article"}},[a("div",{staticClass:"d-flex"},[a("p",{staticClass:"mr-2"},[t._v(t._s(e.vote_average)+" / 10")]),a("b-icon-star-fill",{attrs:{variant:"warning"}})],1),a("b-button",{attrs:{href:"/movieinfo/"+e.id}},[t._v("Ver más detalles")])],1)],1)})),1)],1)},yt=[],kt={name:"UpcomingList",methods:{...(0,c.nv)(["getUpcomingMovies"]),getImage(t){return`https://image.tmdb.org/t/p/original${t}`}},mounted(){this.getUpcomingMovies()},computed:{...(0,c.rn)(["upcomingMovies"])}},xt=kt,wt=(0,p.Z)(xt,_t,yt,!1,null,"63462dcc",null),Ct=wt.exports,Mt={name:"UpcomingMovies",components:{UpcomingList:Ct},methods:{},mounted(){}},St=Mt,$t=(0,p.Z)(St,ft,gt,!1,null,null,null),It=$t.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBarAuth"),a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:"/popularmovies"}},[a("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}})],1),a("b-breadcrumb-item",{attrs:{active:"",to:"/movielist"}},[t._v("Mi Lista")])],1),a("b-container",{staticClass:"my-5"},[a("h1",[t._v("Mi lista")]),t._l(t.listMovieList,(function(e,i){return a("b-card",{key:i,staticClass:"overflow-hidden",attrs:{"no-body":""}},[e.mail_user==t.activeUser.email?a("b-row",{attrs:{"no-gutters":""}},[a("b-col",{attrs:{md:"2"}},[a("b-card-img",{staticClass:"rounded-0 mt-3 ml-3",attrs:{src:e.poster_path,alt:"Image"}})],1),a("b-col",{staticClass:"mt-3 ml-3",attrs:{md:"7"}},[a("b-card-body",{attrs:{title:e.original_title}},[a("div",{staticClass:"d-flex "},[a("p",{staticClass:"mr-2"},[t._v(t._s(e.vote_average)+" / 10")]),a("b-icon-star-fill",{attrs:{variant:"warning"}})],1)])],1),a("b-col",{staticClass:"text-right p-2 mt-3 mb-3",attrs:{md:"2"}},[a("b-button",{staticClass:"mb-3",attrs:{to:{path:"/movieinfoView/"+e.id_movie}}},[t._v("Más información")]),a("b-button",{attrs:{to:"/popularmovies"},on:{click:function(a){return a.preventDefault(),t.activateRemoverList([e.id])}}},[t._v("Quitar de mi lista")])],1)],1):t._e()],1)}))],2)],1)},Pt=[],Et={name:"MovieList",components:{NavBarAuth:vt},methods:{...(0,c.nv)(["activateRemoverList"])},computed:{...(0,c.rn)(["listMovieList"]),...(0,c.Se)(["activeUser"])}},Lt=Et,Ut=(0,p.Z)(Lt,Nt,Pt,!1,null,"a361b8de",null),Bt=Ut.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBarAuth"),a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:"/popularmovies"}},[a("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}})],1),a("b-breadcrumb-item",{attrs:{active:"",to:"/profile"}},[t._v("Editar Perfil")])],1),t._l(t.listNick,(function(e,i){return a("b-container",{key:i,staticClass:"d-flex justify-content-center"},[e.mailuser==t.activeUser.email?a("b-card",{staticClass:"mb-2 my-5",staticStyle:{"max-width":"25rem"}},[a("div",{staticClass:"text-center"},[a("b-avatar",{staticClass:"mt-5 mb-3",attrs:{src:"https://placekitten.com/300/300",size:"6rem"}}),a("h1",[t._v("Hola "+t._s(e.nick_user)+" ")]),a("div",{staticClass:"d-flex"},[a("p",{staticClass:"mr-2"},[t._v("Cambiar tu usuario")]),a("b-icon-pencil-square",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-profile",modifiers:{"modal-profile":!0}}],staticClass:"edit"})],1)],1),a("hr"),a("p",[t._v("email: "+t._s(e.mailuser))]),a("p",[t._v("Edita tu lista")]),a("p",[t._v("Soporte")]),a("p",[t._v("Salir")]),a("hr"),a("small",[t._v("Versión 1.0")])]):t._e(),e.mailuser==t.activeUser.email?a("b-modal",{attrs:{id:"modal-profile","hide-footer":"",title:"Editar nombre de usuario"}},[a("b-form-input",{attrs:{placeholder:"Ingresa tu nuevo nombre de usuario"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("div",{staticClass:"mt-2"}),a("b-button",{staticClass:"mt-2 mr-3",on:{click:function(a){t.closeModal(t.activateUpdateNick([e.id,t.text]))}}},[t._v("Guardar")]),a("b-button",{staticClass:"mt-2",on:{click:t.closeModal}},[t._v("Cerrar")])],1):t._e()],1)}))],2)},Rt=[],Zt={name:"ProfileView",components:{NavBarAuth:vt},data(){return{text:""}},computed:{...(0,c.Se)(["activeUser"]),...(0,c.rn)(["listNick"])},methods:{closeModal(){this.$bvModal.hide("modal-profile")},...(0,c.nv)(["activateUpdateNick"])}},At=Zt,qt=(0,p.Z)(At,Ft,Rt,!1,null,"42e682b6",null),Vt=qt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:"/"}},[a("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}})],1),a("b-breadcrumb-item",{attrs:{active:"",to:"/login"}},[t._v("Login")])],1),a("b-container",{staticClass:"d-flex justify-content-center"},[a("b-card",{staticClass:"mb-2 my-5 mx-2 text-center",staticStyle:{"max-width":"25rem"}},[a("h1",{staticClass:"my-4"},[t._v("Ingresa tus datos")]),a("div",{attrs:{role:"group"}},[a("label",{attrs:{for:"input-live"}}),a("b-form-input",{attrs:{id:"input-live",state:t.emailState,"aria-describedby":"input-live-help input-live-feedback",placeholder:"Ingresa tu email",trim:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" Ingresa al menos 6 letras ")])],1),a("div",{attrs:{role:"group"}},[a("label",{attrs:{for:"input-live"}}),a("b-form-input",{attrs:{id:"input-live",state:t.passwordState,"aria-describedby":"input-live-help input-live-feedback",placeholder:"Ingresa tu password",trim:""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" Ingresa al menos 8 letras ")])],1),a("b-button",{staticClass:"my-4",on:{click:t.login}},[t._v("Ingresar")])],1)],1)],1)},jt=[],Tt={name:"LoginView",components:{NavBar:O},data(){return{email:"",password:"",user:{email:"",password:""}}},computed:{emailState(){return this.user.email.length>6},passwordState(){return this.user.password.length>7}},methods:{async login(){try{const{email:t,password:e}=this.user,a=(0,at.v0)();await(0,at.e5)(a,t,e),this.$router.push("/popularmovies")}catch(t){alert("Usuario o Contraseña Erronea Ingrese Nuevamente los Datos")}}}},Ht=Tt,Jt=(0,p.Z)(Ht,Ot,jt,!1,null,"f531e086",null),zt=Jt.exports,Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:"/"}},[a("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}})],1),a("b-breadcrumb-item",{attrs:{active:"",to:"/register"}},[t._v("Registro")])],1),a("b-container",{staticClass:"d-flex justify-content-center"},[a("b-card",{staticClass:"mb-2 my-5 mx-2 text-center",staticStyle:{"max-width":"25rem"}},[a("h1",{staticClass:"my-4"},[t._v("Registra tus datos")]),a("div",{attrs:{role:"group"}},[a("b-form-input",{attrs:{id:"input-live",state:t.nickState,type:"text","aria-describedby":"input-live-help input-live-feedback",placeholder:"Ingresa tu Nick",trim:""},model:{value:t.user.nick,callback:function(e){t.$set(t.user,"nick",e)},expression:"user.nick"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" Ingresa al menos 4 letras ")])],1),a("div",{attrs:{role:"group"}},[a("label",{attrs:{for:"input-live"}}),a("b-form-input",{attrs:{id:"input-live",type:"email",state:t.emailState,"aria-describedby":"input-live-help input-live-feedback",placeholder:"Ingresa tu email",trim:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" Ingresa al menos 8 letras ")])],1),a("div",{attrs:{role:"group"}},[a("label",{attrs:{for:"input-live"}}),a("b-form-input",{attrs:{id:"input-live",type:"text",state:t.passwordState,"aria-describedby":"input-live-help input-live-feedback",placeholder:"Ingresa tu password",trim:""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),a("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" Ingresa al menos 8 letras ")])],1),a("b-button",{staticClass:"my-4",on:{click:t.register}},[t._v("Ingresar")])],1)],1)],1)},Dt=[],Xt={name:"RegisterView",components:{NavBar:O},computed:{emailState(){return this.user.email.length>8},passwordState(){return this.user.password.length>7},nickState(){return this.user.nick.length>3},...(0,c.rn)(["myFirestore"])},data(){return{user:{email:"",password:"",nick:""}}},methods:{async register(){try{const{email:t,password:e,nick:a}=this.user,i=(0,at.v0)();await(0,at.Xb)(i,t,e),await(0,l.ET)((0,l.hJ)(this.myFirestore,"nickuser"),{mailuser:t,nick_user:a}),this.$router.push("/popularmovies")}catch(t){alert("Este usuario ya existe ingrese Nuevo correo")}}}},Gt=Xt,Kt=(0,p.Z)(Gt,Yt,Dt,!1,null,"5118dbf1",null),Qt=Kt.exports,Wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("NavBar"),i("b-container",{staticClass:"text-center my-5"},[i("img",{attrs:{src:a(7131),height:"400px",alt:"notfound"}}),i("h1",[t._v("404")]),i("p",[t._v("¡Oops, no encontramos lo que estás buscando!")])]),i("FooterView")],1)},te=[],ee={name:"NotFound",components:{NavBar:O,FooterView:h}},ae=ee,ie=(0,p.Z)(ae,Wt,te,!1,null,"3eee5486",null),re=ie.exports,se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBarAuth"),t.movie?a("div",{staticClass:"bg-movie",style:{backgroundImage:"url("+t.getPoster(t.movie.backdrop_path)+")"}}):t._e(),a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:"/popularmovies"}},[a("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}})],1),a("b-breadcrumb-item",{attrs:{to:"/popularmovies"}},[t._v("Películas")]),a("b-breadcrumb-item",{attrs:{active:""}},[t._v(t._s(t.movie.title))])],1),a("b-container",[a("b-row",[a("b-col",{staticClass:"movie-description",attrs:{cols:"12",md:"5"}},[a("h1",[t._v(t._s(t.movie.title))]),a("p",[t._v(t._s(t.movieYear(t.movie.release_date)))]),a("p",[t._v(t._s(t.movie.overview))]),a("div",{staticClass:"d-flex"},[a("p",{staticClass:"mr-2"},[t._v(t._s(t.movie.vote_average)+" / 10")]),a("b-icon-star-fill",{attrs:{variant:"warning"}})],1),a("b-button",{on:{click:t.MovieToSee}},[t._v("Agregar a mi lista "),a("b-icon-plus-circle")],1)],1)],1)],1)],1)},oe=[],ne={name:"MovieInfo",components:{NavBarAuth:vt},computed:{getMovieId(){const t=this.$route.params.id;return t},...(0,c.rn)(["movie"]),...(0,c.rn)(["myFirestore"]),...(0,c.Se)(["activeUser"])},destroyed(){document.body.classList.remove("no-bg")},methods:{...(0,c.nv)(["getMovie"]),getPoster(t){return`https://image.tmdb.org/t/p/original${t}`},movieYear(t){return String(t).substring(0,4)},async MovieToSee(){await(0,l.ET)((0,l.hJ)(this.myFirestore,"movieapp"),{id_movie:this.movie.id,mail_user:this.activeUser.email,original_title:this.movie.title,overview:this.movie.overview,poster_path:`https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`,vote_average:this.movie.vote_average}),this.$router.push("/movielist")}},created(){this.getMovie(this.getMovieId),document.body.classList.add("no-bg")}},le=ne,ce=(0,p.Z)(le,se,oe,!1,null,"98a7da90",null),me=ce.exports,ue=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBarAuth"),t.movie?a("div",{staticClass:"bg-movie",style:{backgroundImage:"url("+t.getPoster(t.movie.backdrop_path)+")"}}):t._e(),a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:"/popularmovies"}},[a("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}})],1),a("b-breadcrumb-item",{attrs:{to:"/popularmovies"}},[t._v("Mi lista")]),a("b-breadcrumb-item",{attrs:{active:""}},[t._v(t._s(t.movie.title))])],1),a("b-container",[a("b-row",[a("b-col",{staticClass:"movie-description",attrs:{cols:"12",md:"5"}},[a("h1",[t._v(t._s(t.movie.title))]),a("p",[t._v(t._s(t.movieYear(t.movie.release_date)))]),a("p",[t._v(t._s(t.movie.overview))]),a("div",{staticClass:"d-flex"},[a("p",{staticClass:"mr-2"},[t._v(t._s(t.movie.vote_average)+" / 10")]),a("b-icon-star-fill",{attrs:{variant:"warning"}})],1),a("b-button",{on:{click:t.list}},[t._v("Volver "),a("b-icon-arrow-left-circle")],1)],1)],1)],1)],1)},ve=[],de={name:"MovieInfoView",components:{NavBarAuth:vt},methods:{...(0,c.nv)(["getMovie"]),getPoster(t){return`https://image.tmdb.org/t/p/original${t}`},movieYear(t){return String(t).substring(0,4)},list(){this.$router.push("/movielist")}},created(){this.getMovie(this.getMovieId),document.body.classList.add("no-bg")},computed:{getMovieId(){const t=this.$route.params.id;return t},...(0,c.rn)(["movie"])},destroyed(){document.body.classList.remove("no-bg")}},pe=de,be=(0,p.Z)(pe,ue,ve,!1,null,"00a50a78",null),he=be.exports,fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("NavBarAuth"),a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:"/popularmovies"}},[a("b-icon",{attrs:{icon:"house-fill",scale:"1.25","shift-v":"1.25","aria-hidden":"true"}})],1),a("b-breadcrumb-item",[t._v("Resultado de la Busqueda")])],1),a("SearchList")],1)},ge=[],_e=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mt-4"},[a("h1",{staticClass:"mb-5"},[t._v("Resultado de la Busqueda")]),a("b-row",t._l(t.MovieSearch,(function(e,i){return a("b-col",{key:i,attrs:{cols:"auto",md:"3"}},[a("b-card",{staticClass:"mb-4 mx-2",attrs:{title:e.title,"img-src":t.getImage(e.poster_path),"img-alt":"movie.title","img-top":"",tag:"article"}},[a("div",{staticClass:"d-flex"},[a("p",{staticClass:"mr-2"},[t._v(t._s(e.vote_average)+" / 10")]),a("b-icon-star-fill",{attrs:{variant:"warning"}})],1),a("b-button",[a("router-link",{attrs:{to:{path:"/movieinfo/"+e.id}}},[t._v(" Ver más detalles ")])],1)],1)],1)})),1)],1)},ye=[],ke={name:"SearchList",data(){return{}},methods:{...(0,c.Se)(["getSearchIdMovie"]),getImage(t){return`https://image.tmdb.org/t/p/original${t}`},...(0,c.nv)(["getMovieSearch"])},mounted(){this.getMovieSearch()},computed:{...(0,c.rn)(["MovieSearch"])}},xe=ke,we=(0,p.Z)(xe,_e,ye,!1,null,"333b325f",null),Ce=we.exports,Me={name:"SearchView",components:{SearchList:Ce,NavBarAuth:vt},methods:{popular(){this.$router.push("/popularmovies")}},mounted(){}},Se=Me,$e=(0,p.Z)(Se,fe,ge,!1,null,null,null),Ie=$e.exports,Ne=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Pe=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],Ee={name:"AboutView"},Le=Ee,Ue=(0,p.Z)(Le,Ne,Pe,!1,null,null,null),Be=Ue.exports;i["default"].use(k.Z);const Fe=[{path:"/",name:"home",component:J,meta:{authRequired:!1}},{path:"/popularmovies",name:"popularmovies",component:ht,meta:{authRequired:!0}},{path:"/upcomingmovies",name:"upcomingmovies",component:It,meta:{authRequired:!0}},{path:"/movielist",name:"movielist",component:Bt,meta:{authRequired:!0}},{path:"/movieinfo/:id",name:"movieinfo",component:me,meta:{authRequired:!0}},{path:"/movieinfoView/:id",name:"movieinfoview",component:he,meta:{authRequired:!0}},{path:"/profile",name:"profile",component:Vt,meta:{authRequired:!0}},{path:"/login",name:"login",component:zt,meta:{authRequired:!1}},{path:"/register",name:"register",component:Qt,meta:{authRequired:!1}},{path:"/search",name:"search",component:Ie,meta:{authRequired:!0}},{path:"/:catchAll(.*)",name:"notfound",component:re},{path:"/about",name:"about",component:Be,meta:{authRequired:!1}}],Re=new k.Z({mode:"history",base:"/",routes:Fe});Re.beforeEach(((t,e,a)=>{const{currentUser:i}=(0,at.v0)(),{meta:{authRequired:r}}=t;window.scrollTo(0,0),console.log({to:t,from:e}),i&&r?a():!i&&r?a("/login"):a()}));var Ze=Re;i["default"].use(c.ZP);var Ae=new c.ZP.Store({state:{popularMovies:[],upcomingMovies:[],movie:"",MovieSearch:[],myFirestore:null,listMovie:[],listNick:[],listUsers:[]},getters:{activeUser(){let{currentUser:t}=(0,at.v0)(),e={currentUser:t};return void 0==e.currentUser?void 0:e.currentUser},getListMovieList(t){return t.listMovie},getListUsers(t){return t.listUsers}},mutations:{setPopularMovies:(t,e)=>{t.popularMovies=e},setUpcomingMovies:(t,e)=>{t.upcomingMovies=e},setMovie:(t,e)=>{t.movie=e},setMovieSearch:(t,e)=>{t.MovieSearch=e},instanceFirestore(t,e){t.myFirestore=e},mutateMovie(t,e){t.listMovieList=[...e]},mutateNick(t,e){t.listNick=e},removerList(t,e){let[a]=e;(0,l.oe)((0,l.JU)(t.myFirestore,"movieapp",a))},updateNick(t,e){let[a,i]=e;console.log("id documento nick"+a),console.log("nick a actualizar"+i);const r=(0,l.JU)(t.myFirestore,"nickuser",a);(0,l.r7)(r,{nick_user:i})}},actions:{async getPopularMovies({commit:t}){const e="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=733f8294a8f9c6962c5acff96c96abfb",a=await fetch(e).then((t=>t.json()));t("setPopularMovies",a.results)},async getUpcomingMovies({commit:t}){const e="https://api.themoviedb.org/3/movie/upcoming?api_key=733f8294a8f9c6962c5acff96c96abfb&language=en-US&page=1",a=await fetch(e).then((t=>t.json()));t("setUpcomingMovies",a.results)},async getMovie({commit:t},e){const a=`https://api.themoviedb.org/3/movie/${e}?api_key=733f8294a8f9c6962c5acff96c96abfb`,i=await fetch(a).then((t=>t.json()));t("setMovie",i)},async getMovieSearch({commit:t},e){const a=`https://api.themoviedb.org/3/search/movie?api_key=733f8294a8f9c6962c5acff96c96abfb&query=${e}&page=1`,i=await fetch(a).then((t=>t.json()));t("setMovieSearch",i.results)},async instanceFirestore({commit:t},e){t("instanceFirestore",e())},async getMovieList({commit:t}){if(console.log("intente sacar la lista desde accion"),this.state.myFirestore){const e=(0,l.IO)((0,l.hJ)(this.state.myFirestore,"movieapp"));(0,l.cf)(e,(e=>{const a=[];e.forEach((t=>{a.push({id:t.id,...t.data()})})),console.log(a),t("mutateMovie",a)}))}},activateRemoverList({commit:t},[e]){t("removerList",[e])},activateUpdateNick({commit:t},[e,a,i,r]){t("updateNick",[e,a,i,r])},async getNick({commit:t}){if(this.state.myFirestore){const e=(0,l.IO)((0,l.hJ)(this.state.myFirestore,"nickuser"));(0,l.cf)(e,(e=>{const a=[];e.forEach((t=>{a.push({id:t.id,...t.data()})})),console.log(a),t("mutateNick",a)}))}}},modules:{},methods:{}}),qe=a(9017);a(44);const Ve={apiKey:"AIzaSyBgqnJxW6IKUfYsmdr1DhYnBN_5ittT0V4",authDomain:"movieapp-250bd.firebaseapp.com",databaseURL:"https://movieapp-250bd-default-rtdb.firebaseio.com",projectId:"movieapp-250bd",storageBucket:"movieapp-250bd.appspot.com",messagingSenderId:"757182449879",appId:"1:757182449879:web:c74614ee8dea1c43e04892",measurementId:"G-MQ7JXPX77X"},Oe=(0,qe.ZF)(Ve);i["default"].config.productionTip=!1,i["default"].use(r.XG7),i["default"].use(s.A7),new i["default"]({app:Oe,router:Ze,store:Ae,render:t=>t(y)}).$mount("#app")},7131:function(t,e,a){t.exports=a.p+"img/notfound.4a05b227.svg"},2877:function(t,e,a){t.exports=a.p+"img/pelicoolapp-logo.c020324a.svg"},2727:function(t,e,a){t.exports=a.p+"img/popcorn-home.28204a8e.svg"},7102:function(t,e,a){t.exports=a.p+"media/hd0983_preview.c097ff2f.mp4"}},e={};function a(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,i,r,s){if(!i){var o=1/0;for(m=0;m<t.length;m++){i=t[m][0],r=t[m][1],s=t[m][2];for(var n=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(n=!1,s<o&&(o=s));if(n){t.splice(m--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var m=t.length;m>0&&t[m-1][2]>s;m--)t[m]=t[m-1];t[m]=[i,r,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,s,o=i[0],n=i[1],l=i[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(l)var m=l(a)}for(e&&e(i);c<o.length;c++)s=o[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(m)},i=self["webpackChunkpelicoolapp"]=self["webpackChunkpelicoolapp"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(3710)}));i=a.O(i)})();
//# sourceMappingURL=app.0cdcaeda.js.map