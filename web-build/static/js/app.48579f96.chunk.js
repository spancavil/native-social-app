(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{192:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y}));var r=n(23),a=n.n(r),o=n(7),c=n.n(o),i=n(8),s=n.n(i),u=n(11),l=n.n(u),f=n(12),m=n.n(f),d=n(3),h=n.n(d),p=n(0),y=n.n(p),g=n(263),v=n(264),E=n(5),C=n(29),x=n(54),b=n(47),k=n(6),w=n(191),R=n(97);R.a.initializeApp({apiKey:"AIzaSyALvuIHd6n-6LlJyQ521DGGK7w-SZt0VPc",authDomain:"rn-udesa-9fc4c.firebaseapp.com",projectId:"rn-udesa-9fc4c",storageBucket:"rn-udesa-9fc4c.appspot.com",messagingSenderId:"187954354666",appId:"1:187954354666:web:3d9b5d9c4948db051afa93"});var S=R.a.auth(),A=(R.a.storage(),w.a.firestore());function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var D=function(e){l()(n,e);var t=B(n);function n(e){var r;return c()(this,n),(r=t.call(this,e)).state={email:"",password:"",error:null},r}return s()(n,[{key:"handlePress",value:function(){var e=this;alert("Email: "+this.state.email+", password: "+this.state.password),S.signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){e.user;console.log(e)})).catch((function(t){t.code;var n=t.message;console.log(n),e.setState({error:t})}))}},{key:"render",value:function(){var e=this;return y.a.createElement(k.a,{style:P.container},y.a.createElement(x.a,{style:P.input,placeholder:"Email",blurOnSubmit:!0,textContentType:"emailAddress",onChangeText:function(t){return e.setState({email:t})}}),y.a.createElement(x.a,{style:P.input,placeholder:"password",keyboardType:"defaul",secureTextEntry:!0,onChangeText:function(t){return e.setState({password:t})}}),this.state.error&&y.a.createElement(C.a,null,this.state.error.message),y.a.createElement(b.a,{style:P.button,onPress:function(){return e.handlePress()}},y.a.createElement(C.a,{style:P.textButton},"Login")))}}]),n}(p.Component),P=E.a.create({container:{flex:1,flexDirection:"column",justifyContent:"center",backgroundColor:"#EADCA6",alignItems:"center"},input:{padding:10,width:"80%",backgroundColor:"#212121",borderColor:"white",borderWidth:2,color:"#D9CAB3",marginVertical:4,fontFamily:"Oswald"},button:{marginTop:30,padding:10,width:"40%",backgroundColor:"#6D9886",justifyContent:"center",borderRadius:5,textAlign:"center",height:80},textButton:{fontSize:25,color:"#212121"}});function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var O=function(e){l()(n,e);var t=T(n);function n(e){var r;return c()(this,n),(r=t.call(this,e)).state={username:"",email:"",password:"",confirm:"",error:null},r}return s()(n,[{key:"handlePress",value:function(){var e=this;alert("Email: "+this.state.email+", password: "+this.state.password),S.createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(t){t.user;t.user.updateProfile({displayName:e.state.username}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})).finally(alert("Usuario creado!"))})).catch((function(t){var n=t.code,r=t.message;console.log(n,r),alert(r),e.setState({error:t})}))}},{key:"render",value:function(){var e=this;return y.a.createElement(k.a,{style:j.container},y.a.createElement(x.a,{style:j.input,placeholder:"username",blurOnSubmit:!0,onChangeText:function(t){return e.setState({username:t})}}),y.a.createElement(x.a,{style:j.input,placeholder:"Email",blurOnSubmit:!0,textContentType:"emailAddress",onChangeText:function(t){return e.setState({email:t})}}),y.a.createElement(x.a,{style:j.input,placeholder:"password",secureTextEntry:!0,onChangeText:function(t){return e.setState({password:t})}}),y.a.createElement(x.a,{style:j.input,placeholder:"confirm password",secureTextEntry:!0,onChangeText:function(t){return e.setState({confirm:t})}}),this.state.error&&y.a.createElement(C.a,null,this.state.error.message),y.a.createElement(b.a,{style:j.button,onPress:function(){return e.handlePress()}},y.a.createElement(C.a,{style:j.textButton},"Register")))}}]),n}(p.Component),j=E.a.create({container:{flex:1,flexDirection:"column",justifyContent:"center",backgroundColor:"#EADCA6",alignItems:"center"},input:{padding:10,width:"80%",backgroundColor:"#212121",borderColor:"white",borderWidth:2,color:"#D9CAB3",marginVertical:4,fontFamily:"Oswald"},button:{marginTop:30,padding:10,width:"40%",backgroundColor:"#6D9886",justifyContent:"center",borderRadius:5,textAlign:"center",height:80},textButton:{fontSize:25,color:"#212121"}}),I=n(67);function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var z=function(e){l()(n,e);var t=L(n);function n(e){var r;return c()(this,n),(r=t.call(this,e)).state={comment:""},r}return s()(n,[{key:"handlePost",value:function(){var e=this;A.collection("posts").add({comment:this.state.comment,username:S.currentUser.displayName,createdAt:Date.now(),likes:[]}).then((function(t){console.log(t),e.setState({comment:""}),e.props.navigation.navigate("Home")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return y.a.createElement(k.a,{style:F.container},y.a.createElement(x.a,{style:F.input,placeholder:"Your comment",blurOnSubmit:!0,multiline:!0,numberOfLines:3,onChangeText:function(t){return e.setState({comment:t})},value:this.state.comment}),this.state.error&&y.a.createElement(C.a,null,this.state.error.message),y.a.createElement(b.a,{style:F.button,onPress:function(){return e.handlePost()}},y.a.createElement(C.a,{style:F.textButton},"Post")))}}]),n}(p.Component),F=E.a.create({container:{flex:1,flexDirection:"column",justifyContent:"center",backgroundColor:"#EADCA6",alignItems:"center"},input:{padding:10,width:"80%",backgroundColor:"#212121",borderColor:"white",borderWidth:2,color:"#D9CAB3",marginVertical:4,fontFamily:"Oswald"},button:{marginTop:30,padding:10,width:"40%",backgroundColor:"#6D9886",justifyContent:"center",borderRadius:5,textAlign:"center",height:80},textButton:{fontSize:25,color:"#212121"}}),N=n(172),U=n(177);function V(e){return y.a.createElement(k.a,{style:W.container},y.a.createElement(C.a,{style:W.comment},e.comment),y.a.createElement(C.a,{style:W.like},e.likes.length," like"),y.a.createElement(k.a,{style:W.inline},y.a.createElement(C.a,{style:W.like},e.username),y.a.createElement(C.a,{style:W.like},Math.floor((Date.now()-e.createdAt)/36e5)," hours ago")),y.a.createElement(b.a,{style:W.inline,onPress:function(){return function(e){var t=S.currentUser.displayName;A.collection("posts").where("createdAt","==",e).limit(1).get().then((function(e){var n=e.docs[0],r=n.data();r.likes.find((function(e){return e===t}))||(r.likes.push(t),n.ref.update(r))}))}(e.createdAt)}},y.a.createElement(N.a,{icon:U.a}),y.a.createElement(C.a,{style:W.like},"Like")))}var W=E.a.create({container:{backgroundColor:"#e3ce7c",marginVertical:10,padding:10,flexDirection:"column",justifyContent:"flex-start",width:350},inline:{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:10},comment:{fontSize:20},like:{paddingVertical:5,fontSize:16}});function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var J=function(e){l()(n,e);var t=H(n);function n(e){var r;return c()(this,n),(r=t.call(this,e)).state={},r}return s()(n,[{key:"render",value:function(){return y.a.createElement(I.a,{data:this.props.posts,keyExtractor:function(e){return e.createdAt.toString()},renderItem:function(e){var t=e.item;return y.a.createElement(V,t)}})}}]),n}(p.Component);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var G=function(e){l()(n,e);var t=M(n);function n(e){var r;return c()(this,n),(r=t.call(this,e)).state={posts:[]},r}return s()(n,[{key:"handleLogout",value:function(){S.signOut().then((function(){alert("User sign out!")}))}},{key:"componentDidMount",value:function(){var e=this;A.collection("posts").onSnapshot((function(t){t.forEach((function(t){var n=t.data(),r=e.state.posts.filter((function(e){return e.createdAt!==n.createdAt})),a=e.state.posts.find((function(e){return e.createdAt===n.createdAt}));a?(a.likes=n.likes,r.push(a),e.setState({posts:r})):e.setState({posts:e.state.posts.concat({comment:n.comment,username:n.username,likes:n.likes,createdAt:n.createdAt})})}))}))}},{key:"render",value:function(){var e=this;return y.a.createElement(k.a,{style:K.container},y.a.createElement(C.a,{style:K.mainText},"Bienvenido a UDeSA app",this.props.user&&this.props.user.email),null!==this.props.user&&y.a.createElement(y.a.Fragment,null,y.a.createElement(b.a,{style:K.button,onPress:function(){return e.handleLogout()}},y.a.createElement(C.a,{style:K.textButton},"LogOut")),y.a.createElement(J,{posts:this.state.posts})),null===this.props.user&&y.a.createElement(k.a,{style:K.containerButton},y.a.createElement(b.a,{style:K.button,onPress:function(){return e.props.navigation.navigate("Register")}},y.a.createElement(C.a,{style:K.textButton},"Register")),y.a.createElement(b.a,{style:K.button,onPress:function(){return e.props.navigation.navigate("Login")}},y.a.createElement(C.a,{style:K.textButton},"Login"))))}}]),n}(p.Component),K=E.a.create({mainText:{textAlign:"center",fontSize:30},container:{width:"100%",flex:1,flexDirection:"column",justifyContent:"center",backgroundColor:"#EADCA6",alignItems:"center"},containerButton:{flexDirection:"row",justifyContent:"center",gap:50},button:{marginTop:30,padding:10,width:"50%",backgroundColor:"#6D9886",justifyContent:"center",borderRadius:5,textAlign:"center",height:80},textButton:{fontSize:25,color:"#212121"}});function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m()(this,n)}}var Y=function(e){l()(n,e);var t=Q(n);function n(e){var r;return c()(this,n),(r=t.call(this,e)).state={usuario:null},r}return s()(n,[{key:"componentDidMount",value:function(){var e=this;S.onAuthStateChanged((function(t){t?e.setState({usuario:t}):(console.log("No hay usuario loggeado"),e.setState({usuario:null}))}))}},{key:"render",value:function(){var e=this,t=Object(g.a)();return y.a.createElement(v.a,null,y.a.createElement(t.Navigator,{initialRouteName:"Home"},this.state.usuario&&y.a.createElement(y.a.Fragment,null,y.a.createElement(t.Screen,{name:"Home"},(function(t){return y.a.createElement(G,a()({},t,{user:e.state.usuario}))})),y.a.createElement(t.Screen,{name:"Camera"},(function(t){return y.a.createElement(Camera,a()({},t,{user:e.state.usuario}))})),y.a.createElement(t.Screen,{name:"Post"},(function(t){return y.a.createElement(z,a()({},t,{user:e.state.usuario}))}))),!this.state.usuario&&y.a.createElement(y.a.Fragment,null,y.a.createElement(t.Screen,{name:"Login",component:D}),y.a.createElement(t.Screen,{name:"Register",component:O}))))}}]),n}(p.Component)},198:function(e,t,n){e.exports=n(252)}},[[198,1,2]]]);
//# sourceMappingURL=app.48579f96.chunk.js.map