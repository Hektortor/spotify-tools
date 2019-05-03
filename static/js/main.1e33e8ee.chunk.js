(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),i=a.n(o),s=(a(69),a(9)),l=a(10),c=a(12),u=a(11),m=a(13),p=a(7),d=a(22),g=(a(24),a(21)),h=a.n(g),f={id:"8df5f41dfa6d43e0b6f2bf7be259268d",redirectUri:"https%3A%2F%2Fhektortor.github.io%2Fspotify-tools%2F"},y=a(58),v=a.n(y),b=a(14),x=a.n(b),k=a(30),E=a.n(k),A=a(38),w=a.n(A),S=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{style:{fontFamily:"Gotham Bold",marginTop:"40px"}},"Home"),r.a.createElement(p.b,{className:"link",to:"/releases"},r.a.createElement("div",{className:"card",style:{background:"linear-gradient(-45deg, #52a7ea, #712e98)",boxShadow:"0px 7px 50px 0px rgba(82,167,234,0.5)"}},r.a.createElement("h1",null,"Releases"),r.a.createElement("h4",null,"Get all the new releases of your followed artists in a glance"))),r.a.createElement(p.b,{className:"link",to:"/feelings"},r.a.createElement("div",{className:"card",style:{background:"linear-gradient(-45deg, #f6356f, #ff5f50)",boxShadow:"0px 7px 50px 0px rgba(246,53,111,0.5)"}},r.a.createElement("h1",null,"Feelings"),r.a.createElement("h4",null,"Get a playlist based on your current feelings from your library tracks"))),r.a.createElement(p.b,{className:"link",to:"/tops"},r.a.createElement("div",{className:"card",style:{background:"linear-gradient(-45deg, #f8ff3f, #ff9b30)",boxShadow:"0px 7px 50px 0px rgba(255,155,48,0.5)"}},r.a.createElement("h1",null,"Tops"),r.a.createElement("h4",null,"Get a playlist of your top tracks of the last 1 year, 6 months or 4 weeks"))),r.a.createElement(p.b,{className:"link",to:"/statistics"},r.a.createElement("div",{className:"card",style:{background:"linear-gradient(-45deg, #e1eb01, #92d000)",boxShadow:"0px 7px 50px 0px rgba(146,208,0,0.5)"}},r.a.createElement("h1",null,"Statistics"),r.a.createElement("h4",null,"Get statistics of your hearing which you can't access on Spotify"))))}}]),t}(n.Component),T=Object(d.e)(S),R=a(61),C=a(63),O=a(23),W=a.n(O),j=a(27),P=a.n(j),N=a(6),_=a.n(N),F=new h.a,z=function(e){function t(){var e;Object(s.a)(this,t);var a=(e=Object(c.a)(this,Object(u.a)(t).call(this))).getHashParams();return e.state={topTracks:[],currentPlaylist:{},loading:!1,created:!1,error:!1,rangeSelection:1},a.access_token&&F.setAccessToken(a.access_token),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getHashParams",value:function(){for(var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);e=a.exec(n);)t[e[1]]=decodeURIComponent(e[2]);return t}},{key:"getProfile",value:function(){var e=this;F.getMe().then(function(t){e.setState({currentUser:t})})}},{key:"getTops",value:function(){var e=this,t=this,a={};switch(this.state.rangeSelection){case 1:a={limit:50,time_range:"long_term"};break;case 2:a={limit:50,time_range:"medium_term"};break;case 3:a={limit:50,time_range:"short_term"};break;default:a={limit:50,time_range:"medium_term"}}F.getMyTopTracks(a).then(function(a){var n=[],r=[];a.items.forEach(function(e){var t={type:e.type,name:e.name,interpret:e.artists[0].name,uri:e.uri};n.push(t),r.push(e.uri)}),t.setState({topTracks:n}),e.createPlaylist(r)})}},{key:"formatDate",value:function(e){return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()}},{key:"createPlaylist",value:function(e){var t=this;this.setState({loading:!0,created:!1,error:!1,currentPlaylist:{}});var a=this,n=this.state.rangeSelection,r=new Date;switch(n){case 1:r.setFullYear(r.getFullYear()-1);break;case 2:r.setMonth(r.getMonth()-6);break;case 3:r.setDate(r.getDate()-28);break;default:r.setMonth(r.getMonth()-6)}F.getMe().then(function(n){var o={name:"My Top Tracks "+t.formatDate(r)+" - "+t.formatDate(new Date),description:"Autogenerated by Spotify Tools by Viktor Frohnapfel",public:!1};F.createPlaylist(n.id,o).then(function(t){F.addTracksToPlaylist(t.id,e).then(function(){F.getPlaylist(t.id).then(function(e){var t=e.images[0].url,n={name:e.name,uri:e.uri,image:t};a.setState({created:!0,loading:!1,currentPlaylist:n})}).catch(function(e){console.log(e),a.setState({created:!1,loading:!1,error:!0})})}).catch(function(e){console.log(e),a.setState({created:!1,loading:!1,error:!0})})}).catch(function(e){console.log(e),a.setState({created:!1,loading:!1,error:!0})})}).catch(function(e){console.log(e),a.setState({created:!1,loading:!1,error:!0})})}},{key:"setRange",value:function(e){this.setState({rangeSelection:e})}},{key:"render",value:function(){var e=this,t=this.state.loading,a=this.state.created,n=this.state.error,o=this.state.rangeSelection;return r.a.createElement("div",{className:"Tops",style:{background:"black"}},r.a.createElement("h1",{style:{fontFamily:"Gotham Bold",color:"white",marginTop:"0px"}},"Get Your Personal Top Playlists"),t?r.a.createElement(W.a,{animation:"grow",variant:"success"}):r.a.createElement("div",null),r.a.createElement("div",{className:"formLayout",style:{margin:"0px",paddingTop:"20px",paddingBottom:"20px"}},r.a.createElement(P.a,{variant:"success",type:"radio",name:"rangeSelection",defaultValue:1,style:{margin:"8px",padding:"0px",background:"rgb(15, 185, 88)",borderRadius:"30px",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",textAlign:"center"}},1===o?r.a.createElement(_.a,{variant:"success",style:{background:"black",color:"rgb(15, 185, 88)",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",borderRadius:"30px 2px 2px 30px",paddingLeft:"30px"},onClick:function(){return e.setRange(1)},value:1},"1 year"):r.a.createElement(_.a,{variant:"success",style:{background:"black",color:"white",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",borderRadius:"30px 2px 2px 30px",paddingLeft:"30px"},onClick:function(){return e.setRange(1)},value:1},"1 year"),2===o?r.a.createElement(_.a,{variant:"success",style:{background:"black",color:"rgb(15, 185, 88)",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer"},onClick:function(){return e.setRange(2)},value:2},"6 months"):r.a.createElement(_.a,{variant:"success",style:{background:"black",color:"white",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer"},onClick:function(){return e.setRange(2)},value:2},"6 months"),3===o?r.a.createElement(_.a,{variant:"success",style:{background:"black",color:"rgb(15, 185, 88)",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",borderRadius:"2px 30px 30px 2px",paddingRight:"30px"},onClick:function(){return e.setRange(3)},value:3},"4 weeks"):r.a.createElement(_.a,{variant:"success",style:{background:"black",color:"white",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",borderRadius:"2px 30px 30px 2px",paddingRight:"30px"},onClick:function(){return e.setRange(3)},value:3},"4 weeks")),r.a.createElement(x.a,{variant:"success",style:{width:"260px",background:"rgb(15, 185, 88)",borderRadius:"30px",textTransform:"uppercase",fontWeight:"600",paddingRight:"30px",paddingLeft:"30px",fontSize:"14px"},onClick:function(){return e.getTops()}},"Get top tracks playlist"),n?r.a.createElement("h3",{style:{marginTop:"20px",fontFamily:"Gotham Bold"}},"Error occurred"):r.a.createElement("div",null),a?r.a.createElement("a",{href:this.state.currentPlaylist.uri,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"card",style:{background:"rgb(24, 24, 24)",borderColor:"#464646",borderWidth:"2px"}},r.a.createElement("div",null,r.a.createElement("div",{style:{float:"left",borderRadius:"4px"}},r.a.createElement("img",{src:this.state.currentPlaylist.image,style:{borderRadius:"26px",borderColor:"#464646",borderWidth:"7px",width:"64px",height:"64px"},alt:"cover"})),r.a.createElement("div",{style:{float:"left",paddingLeft:"6px",paddingRight:"10px",paddingTop:"8px",paddingBottom:"8px"}},r.a.createElement("div",{style:{fontSize:"14px",fontWeight:"500",color:"white"}},this.state.currentPlaylist.name),r.a.createElement("div",{style:{fontSize:"12px",fontWeight:"500",color:"white"}},"50 Tracks"))))):r.a.createElement("div",null)))}}]),t}(n.Component),L=Object(d.e)(z),B=a(29),G=a.n(B),U=new h.a,I=function(e){function t(){var e;Object(s.a)(this,t);var a=(e=Object(c.a)(this,Object(u.a)(t).call(this))).getHashParams();return e.state={topTracks:[],topArtists:[],currentUser:{},loading:!1,created:!1,error:!1,rangeSelection:1},a.access_token&&U.setAccessToken(a.access_token),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getHashParams",value:function(){for(var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);e=a.exec(n);)t[e[1]]=decodeURIComponent(e[2]);return t}},{key:"getTops",value:function(){this.setState({loading:!0,created:!1,error:!1,topTracks:[],topArtists:[]});var e=this,t=this.state.rangeSelection,a={};switch(t){case 1:a={limit:10,time_range:"long_term"};break;case 2:a={limit:10,time_range:"medium_term"};break;case 3:a={limit:10,time_range:"short_term"};break;default:a={limit:10,time_range:"medium_term"}}U.getMyTopArtists(a).then(function(t){t.items.forEach(function(e){"undefined"!==typeof e.images&&null!==e.images?0===e.images.length?e.hasImage=!1:e.hasImage=!0:e.hasImage=!1}),e.setState({topArtists:t.items}),U.getMyTopTracks(a).then(function(t){t.items.forEach(function(e){"undefined"!==typeof e.album.images&&null!==e.album.images?0===e.album.images.length?e.hasImage=!1:e.hasImage=!0:e.hasImage=!1}),e.setState({topTracks:t.items,loading:!1,created:!0})}).catch(function(t){console.log(t),e.setState({created:!1,loading:!1,error:!0})})}).catch(function(t){console.log(t),e.setState({created:!1,loading:!1,error:!0})})}},{key:"setRange",value:function(e){this.setState({rangeSelection:e})}},{key:"formatDate",value:function(e){var t=e.split("-");return t.length>1?t[2]+"."+t[1]+"."+t[0]:""+t[0]}},{key:"formatFollowers",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},{key:"render",value:function(){var e=this,t=this.state.loading,a=this.state.rangeSelection,n=(this.state.error,this.state.created);return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{style:{fontFamily:"Gotham Bold"}},"Get your Personal Top Tracks and Artists"),t?r.a.createElement(W.a,{animation:"grow",variant:"success"}):r.a.createElement("div",null),r.a.createElement("div",{className:"formLayout"},r.a.createElement(P.a,{variant:"success",type:"radio",name:"rangeSelection",defaultValue:1,style:{margin:"8px",padding:"0px",background:"rgb(15, 185, 88)",borderRadius:"30px",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",textAlign:"center"}},1===a?r.a.createElement(_.a,{variant:"success",style:{background:"black",color:"rgb(15, 185, 88)",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",borderRadius:"30px 2px 2px 30px",paddingLeft:"30px"},onClick:function(){return e.setRange(1)},value:1},"1 year"):r.a.createElement(_.a,{variant:"success",style:{background:"black",color:"white",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",borderRadius:"30px 2px 2px 30px",paddingLeft:"30px"},onClick:function(){return e.setRange(1)},value:1},"1 year"),2===a?r.a.createElement(_.a,{variant:"success",style:{background:"black",color:"rgb(15, 185, 88)",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer"},onClick:function(){return e.setRange(2)},value:2},"6 months"):r.a.createElement(_.a,{variant:"success",style:{background:"black",color:"white",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer"},onClick:function(){return e.setRange(2)},value:2},"6 months"),3===a?r.a.createElement(_.a,{variant:"success",style:{background:"black",color:"rgb(15, 185, 88)",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",borderRadius:"2px 30px 30px 2px",paddingRight:"30px"},onClick:function(){return e.setRange(3)},value:3},"4 weeks"):r.a.createElement(_.a,{variant:"success",style:{background:"black",color:"white",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",borderRadius:"2px 30px 30px 2px",paddingRight:"30px"},onClick:function(){return e.setRange(3)},value:3},"4 weeks")),r.a.createElement(x.a,{variant:"success",className:"button",onClick:function(){return e.getTops()}},"Check Statistics"),n?r.a.createElement("h2",{style:{fontFamily:"Gotham Bold",marginTop:"30px"}},"Top 10 Artists"):r.a.createElement("div",null),r.a.createElement(G.a,{style:{background:"black",textAlign:"center",margin:"10px"}},this.state.topArtists.map(function(t){return r.a.createElement("div",{key:t.id,className:"cardRelease",style:{background:"rgb(24, 24, 24)",textAlign:"center"}},r.a.createElement("div",{id:"oben",style:{height:"64px",clear:"both"}},r.a.createElement("div",{id:"obenLinks",style:{float:"left",height:"64px"}},r.a.createElement("a",{href:t.external_urls.spotify,target:"_blank",rel:"noopener noreferrer"},t.hasImage?r.a.createElement("img",{src:t.images[1].url,style:{marginRight:"4px",float:"left",borderRadius:"26px",borderColor:"#464646",borderWidth:"7px",width:"64px",height:"64px"},alt:"cover"}):r.a.createElement("img",{style:{marginRight:"4px",float:"left",borderRadius:"26px",borderColor:"#464646",borderWidth:"7px",width:"64px",height:"64px"},alt:"cover"})),r.a.createElement("div",{style:{float:"left",marginTop:"18px",marginBottom:"18px",marginLeft:"4px",textAlign:"left"}},r.a.createElement("div",{style:{fontSize:"17px",fontWeight:"500",color:"white",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},t.name)))),r.a.createElement("div",{id:"unten",style:{clear:"both",marginTop:"8px",color:"grey"}},r.a.createElement("div",{style:{marginLeft:"6px",fontSize:"14px",fontWeight:"500",float:"left",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.formatFollowers(t.followers.total)),r.a.createElement("div",{style:{marginRight:"6px",fontSize:"12px",fontWeight:"400",float:"right",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},t.popularity,"%")))})),n?r.a.createElement("h2",{style:{fontFamily:"Gotham Bold",marginTop:"20px"}},"Top 10 Tracks"):r.a.createElement("div",null),r.a.createElement(G.a,{style:{margin:"10px"}},this.state.topTracks.map(function(t){return r.a.createElement("div",{key:t.id,className:"cardRelease",style:{background:"rgb(24, 24, 24)",textAlign:"center"}},r.a.createElement("div",{id:"oben",style:{height:"64px",clear:"both"}},r.a.createElement("div",{id:"obenLinks",style:{float:"left",height:"64px"}},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.hasImage?r.a.createElement("img",{src:t.album.images[2].url,style:{marginRight:"4px",float:"left",borderRadius:"26px",borderColor:"#464646",borderWidth:"7px",width:"64px",height:"64px"},alt:"cover"}):r.a.createElement("img",{style:{marginRight:"4px",float:"left",borderRadius:"26px",borderColor:"#464646",borderWidth:"7px",width:"64px",height:"64px"},alt:"cover"}),r.a.createElement("div",{className:"tooltip"})),r.a.createElement("div",{style:{float:"left",marginTop:"10px",marginBottom:"10px",marginLeft:"4px",textAlign:"left"}},r.a.createElement("div",{style:{fontSize:"14px",fontWeight:"500",color:"white",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},t.name),r.a.createElement("div",{style:{fontSize:"12px",fontWeight:"400",color:"grey",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},t.album.artists[0].name)))),r.a.createElement("div",{id:"unten",style:{clear:"both",marginTop:"8px",color:"grey"}},r.a.createElement("div",{style:{marginLeft:"6px",fontSize:"14px",fontWeight:"500",float:"left",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.formatDate(t.album.release_date)),r.a.createElement("div",{style:{marginRight:"6px",fontSize:"12px",fontWeight:"400",float:"right",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},t.popularity,"%")))}))))}}]),t}(n.Component),V=Object(d.e)(I),M=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h2",{style:{fontFamily:"Gotham Bold",marginTop:"40px"}},"Made by Viktor Frohnapfel with \u2665"))}}]),t}(n.Component),D=Object(d.e)(M),H=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{fontFamily:"Gotham Bold"}},r.a.createElement("h1",null,"Page Not Found"),r.a.createElement("p",null,"No match for ",this.props.location.pathname))}}]),t}(n.Component),Z=Object(d.e)(H),Q="https://accounts.spotify.com/authorize",J=f.id,Y=f.redirectUri,K=["user-read-private","user-read-email","user-read-birthdate","user-follow-read","user-library-modify","user-library-read","user-top-read","playlist-modify-private"],q=new h.a,X=function(e){function t(){var e;Object(s.a)(this,t);var a=(e=Object(c.a)(this,Object(u.a)(t).call(this))).getHashParams();return e.state={loggedIn:!!a.access_token,currentUser:{}},a.access_token&&q.setAccessToken(a.access_token),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getHashParams",value:function(){for(var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);e=a.exec(n);)t[e[1]]=decodeURIComponent(e[2]);return t}},{key:"getUserProfile",value:function(){var e=this;q.getMe().then(function(t){var a={id:t.id,name:t.display_name,country:t.country,email:t.email,spotifyUrl:t.external_urls.spotify,totalFollowers:t.followers.total,imageUrl:0!==t.images.length?t.images[0].url:"https://azpinesmotel.com/wp-content/uploads/2014/11/user-avatar-placeholder.png",product:t.product};e.setState({currentUser:a,loggedIn:!0})}).catch(function(e){console.log("Error:"+e)})}},{key:"logout",value:function(){q.setAccessToken(null),this.params=null,this.setState({loggedIn:!1})}},{key:"componentDidMount",value:function(){q.getAccessToken()&&this.getUserProfile()}},{key:"render",value:function(){var e=this,t=this.state.loggedIn;return r.a.createElement(p.a,{basename:"/toolify"},r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",sticky:"top",style:{background:"black"}},r.a.createElement(p.b,{to:"/"},r.a.createElement(E.a.Brand,{style:{fontFamily:"Gotham Bold"}},"Spotify Tools")),r.a.createElement(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(w.a,{className:"mr-auto"},r.a.createElement(p.b,{className:"link",exact:!0,to:"/"},"Home"),r.a.createElement(p.b,{className:"link",exact:!0,to:"/releases"},"Releases"),r.a.createElement(p.b,{className:"link",exact:!0,to:"/feelings"},"Feelings"),r.a.createElement(p.b,{className:"link",exact:!0,to:"/tops"},"Tops"),r.a.createElement(p.b,{className:"link",exact:!0,to:"/statistics"},"Statistics"),r.a.createElement(p.b,{className:"link",exact:!0,to:"/about"},"About")),r.a.createElement(w.a,null,t?r.a.createElement(x.a,{className:"button",variant:"success",onClick:function(){return e.logout()}},"Logout"):r.a.createElement(x.a,{className:"button",variant:"success",href:"".concat(Q,"?client_id=").concat(J,"&redirect_uri=").concat(Y,"&scope=").concat(K.join("%20"),"&response_type=token&show_dialog=true")},"Login with Spotify")))),t?r.a.createElement("a",{href:this.state.currentUser.spotifyUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"card",style:{background:"rgb(24, 24, 24)",borderColor:"#464646",borderWidth:"2px"}},r.a.createElement("div",null,r.a.createElement("div",{style:{float:"left"}},r.a.createElement("img",{src:this.state.currentUser.imageUrl,style:{borderRadius:"26px",borderColor:"#464646",borderWidth:"7px",width:"64px",height:"64px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},alt:"cover"})),r.a.createElement("div",{style:{float:"left",paddingLeft:"10px",paddingRight:"10px",paddingTop:"3px",paddingBottom:"3px",maxWidth:"70%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}},r.a.createElement("div",{style:{fontSize:"14px",fontWeight:"500",color:"white",margin:"auto",boxSizing:"border-box"}},this.state.currentUser.name," \xb7 ",this.state.currentUser.country),r.a.createElement("div",{style:{fontSize:"12px",fontWeight:"400",color:"grey",margin:"auto",boxSizing:"border-box"}},this.state.currentUser.email),r.a.createElement("div",{style:{fontSize:"12px",fontWeight:"400",color:"grey",margin:"auto",boxSizing:"border-box"}},this.state.currentUser.spotifyUrl))))):r.a.createElement("div",null),r.a.createElement("div",{className:"content",style:{height:"100vh"}},t?r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:T}),r.a.createElement(d.a,{path:"/releases",component:R.a}),r.a.createElement(d.a,{path:"/feelings",component:C.a}),r.a.createElement(d.a,{path:"/tops",component:L}),r.a.createElement(d.a,{path:"/statistics",component:V}),r.a.createElement(d.a,{path:"/about",component:D}),r.a.createElement(d.a,{component:Z})):r.a.createElement("div",null,r.a.createElement("h2",{style:{fontFamily:"Gotham Bold",margin:"30px"}},"Welcome to Toolify"),r.a.createElement("div",{style:{borderRadius:"32px",background:"rgb(24, 24, 24)",width:"96px",height:"96px",margin:"auto",textAlign:"center"}},r.a.createElement("img",{src:v.a,alt:"welcome"})),r.a.createElement(x.a,{className:"button",href:"".concat(Q,"?client_id=").concat(J,"&redirect_uri=").concat(Y,"&scope=").concat(K.join("%20"),"&response_type=token&show_dialog=true"),variant:"success",style:{margin:"30px"}},"Login with Spotify")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,t,a){},58:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAB8UlEQVR4AezWA8zVcRgF4F/W7ZuyPWa7KbtZecyYkW03L9s2pmyO2Taf5vwZ/7vdZ/Y7vOeckJCQkJCQkBWUM9IRL7102CjlQzwRs953v/puvViIDwo441/OKBDigSX+Z0mIPtV88z/fVAtRZ5LkTApR55zknA9R54PkvAtR57XkvA5R57zkXAhRZ4rkTAlRp2KyMVohvotsabxMifP+5bwC8TPmNv415jaKhXiivFGOeuaZo+md0wka2+0rHjpgjoGaKhqymCRNDTDHfg/wxW6NQ/po5ZO/3bbXYqP1UldSJp1cRw8jLbTXbX/7pFVID2ek7JmTdlhhvnGG66u7NhqrpYbyiovJK6+Y4sqroZbG2uimj+HGmWe5HU55KmWnQtrJL0ryh7RSVHR8VSh9sywq9oT00M5nUfBK9ZA+Gjoup+1XN2SEMroaZ5dnstNju4zVWfGQeZTQQj9TbXPFZ5ntoys2m6q/FkqErCa3ytoZZoZVjrjhrbR666YjVptpsHYqyxVyljQKUeNH+3OAASAQRVF0DUG0+9pCe2qAWcMLxAAfhZFzAS44AAAAAAAAAO8DAAAAAAAAAAAAAAAAqD8AAAAAAAAAwE8AAAAAAAAAV8au8s9W9owd5Z+trGl5alnKP1/Zcqan58xWf0mSvugGS29/ADd16HYAAAAASUVORK5CYII="},61:function(e,t,a){"use strict";(function(e){var n=a(9),r=a(10),o=a(12),i=a(11),s=a(13),l=a(0),c=a.n(l),u=(a(24),a(62)),m=a.n(u),p=a(21),d=a.n(p),g=a(14),h=a.n(g),f=a(29),y=a.n(f),v=a(27),b=a.n(v),x=a(6),k=a.n(x),E=a(23),A=a.n(E),w=a(22),S=new d.a,T=function(t){function a(){var e;Object(n.a)(this,a);var t=(e=Object(o.a)(this,Object(i.a)(a).call(this))).getHashParams();return e.state={artists:[],releases:[],lastArtistId:"",lastReleaseId:"",typeSelection:1,loading:!1},t.access_token&&S.setAccessToken(t.access_token),e}return Object(s.a)(a,t),Object(r.a)(a,[{key:"getHashParams",value:function(){for(var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);e=a.exec(n);)t[e[1]]=decodeURIComponent(e[2]);return t}},{key:"compareReleases",value:function(e,t){var a=e.date.split("-").join(""),n=t.date.split("-").join(""),r=e.interpret,o=t.interpret;return a<n?1:a>n?-1:r.localeCompare(o)}},{key:"forEachPromiseReleases",value:function(e,t,a,n){return e.reduce(function(e,r){return e.then(function(){return n(r,t,a)})},Promise.resolve())}},{key:"addReleases",value:function(t,a,n){return new Promise(function(r,o){e.nextTick(function(){S.getArtistAlbums(t.id,a).then(function(e){e.items.forEach(function(e){var a={interpret:t.name,id:e.id,name:e.name,type:e.album_type,date:e.release_date,url:e.external_urls.spotify,imageSmall:e.images[2].url};n.push(a)}),r()})})})}},{key:"getLatestReleases",value:function(){var e=this,t=this.state.artists,a=[],n={};switch(this.state.typeSelection){case 1:n={include_groups:"album",limit:1};break;case 2:n={include_groups:"single",limit:1};break;case 3:n={include_groups:"album,single",limit:1};break;default:n={limit:1}}this.forEachPromiseReleases(t,n,a,this.addReleases).then(function(){console.log(a.length+" Releases loaded"),a.sort(e.compareReleases),e.setState({releases:a,loading:!1})})}},{key:"forEachPromiseArtists",value:function(e,t,a,n,r,o){return e.reduce(function(e,i){return e.then(function(){return o(i,t,n,r,a)})},Promise.resolve())}},{key:"addArtists",value:function(t,a,n,r,o){return new Promise(function(t,i){e.nextTick(function(){n=r.state.lastArtistId,a={},a=""===n?{limit:50}:{limit:50,after:n},S.getFollowedArtists(a).then(function(e){e.artists.items.forEach(function(e){var t={id:e.id,name:e.name};o.push(t),n=e.id}),r.setState({lastArtistId:n}),t()})})})}},{key:"getFollowedArtists",value:function(){var e=this;S.getFollowedArtists({limit:1}).then(function(t){for(var a=t.artists.total,n=[],r=[],o=a/50,i=e,s=0;s<o;s++)r.push(1);e.forEachPromiseArtists(r,"",n,"",i,e.addArtists).then(function(){console.log(n.length+" Artists loaded"),e.setState({artists:n}),e.getLatestReleases()})})}},{key:"getNewFollowedArtists",value:function(){this.setState({loading:!0});var e=this.state.artists;"undefined"!==typeof e&&e.length>0?(this.setState({releases:[]}),this.getLatestReleases()):this.getFollowedArtists()}},{key:"addAlbumToLibrary",value:function(e,t){var a=[];a.push(e),S.addToMySavedAlbums(a).then(function(e){console.log(t+" successfully saved to library")})}},{key:"setType",value:function(e){this.setState({typeSelection:e})}},{key:"formatDate",value:function(e){var t=e.split("-");return t.length>1?t[2]+"."+t[1]+"."+t[0]:""+t[0]}},{key:"render",value:function(){var e=this,t=this.state.loading,a=this.state.typeSelection;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{style:{fontFamily:"Gotham Bold"}},"New Releases of your Followed Artists"),t?c.a.createElement(A.a,{animation:"grow",variant:"success"}):c.a.createElement("div",null),c.a.createElement("div",{className:"formLayout"},c.a.createElement(b.a,{variant:"success",type:"radio",name:"typeSelection",defaultValue:1,style:{margin:"8px",padding:"0px",background:"rgb(15, 185, 88)",borderRadius:"30px",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",textAlign:"center"}},1===a?c.a.createElement(k.a,{variant:"success",style:{background:"black",color:"rgb(15, 185, 88)",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",borderRadius:"30px 2px 2px 30px",paddingLeft:"30px"},onClick:function(){return e.setType(1)},value:1},"Albums"):c.a.createElement(k.a,{variant:"success",style:{background:"black",color:"white",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",borderRadius:"30px 2px 2px 30px",paddingLeft:"30px"},onClick:function(){return e.setType(1)},value:1},"Albums"),2===a?c.a.createElement(k.a,{variant:"success",style:{background:"black",color:"rgb(15, 185, 88)",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer"},onClick:function(){return e.setType(2)},value:2},"Singles"):c.a.createElement(k.a,{variant:"success",style:{background:"black",color:"white",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer"},onClick:function(){return e.setType(2)},value:2},"Singles"),3===a?c.a.createElement(k.a,{variant:"success",style:{background:"black",color:"rgb(15, 185, 88)",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",borderRadius:"2px 30px 30px 2px",paddingRight:"30px"},onClick:function(){return e.setType(3)},value:3},"Both"):c.a.createElement(k.a,{variant:"success",style:{background:"black",color:"white",textTransform:"uppercase",fontWeight:"600",fontSize:"14px",cursor:"pointer",borderRadius:"2px 30px 30px 2px",paddingRight:"30px"},onClick:function(){return e.setType(3)},value:3},"Both")),c.a.createElement(h.a,{className:"button",variant:"success",onClick:function(){return e.getNewFollowedArtists()}},"Check followed artists")),c.a.createElement(y.a,{style:{background:"black",textAlign:"center"}},this.state.releases.map(function(t){return c.a.createElement("div",{className:"cardRelease",style:{background:"rgb(24, 24, 24)",textAlign:"center"}},c.a.createElement("div",{id:"oben",style:{height:"64px",clear:"both"}},c.a.createElement("div",{id:"obenRechts",style:{float:"right"}},c.a.createElement("img",{style:{width:30,height:30,marginTop:"17px",marginBottom:"17px",cursor:"pointer"},alt:"cover",src:m.a,onClick:function(){return e.addAlbumToLibrary(t.id,t.name)}})),c.a.createElement("div",{id:"obenLinks",style:{float:"left",height:"64px"}},c.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:t.imageSmall,style:{marginRight:"4px",float:"left",borderRadius:"26px",borderColor:"#464646",borderWidth:"7px",width:"64px",height:"64px"},alt:"cover"})),c.a.createElement("div",{style:{float:"left",marginTop:"10px",marginBottom:"10px",marginLeft:"4px",textAlign:"left"}},c.a.createElement("div",{style:{fontSize:"14px",fontWeight:"500",color:"white",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},t.name),c.a.createElement("div",{style:{fontSize:"12px",fontWeight:"400",color:"grey",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},t.interpret)))),c.a.createElement("div",{id:"unten",style:{clear:"both",marginTop:"8px",color:"grey"}},c.a.createElement("div",{style:{marginLeft:"6px",fontSize:"14px",fontWeight:"500",float:"left",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e.formatDate(t.date)),c.a.createElement("div",{style:{marginRight:"6px",fontSize:"12px",fontWeight:"400",float:"right",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},t.type)))})))}}]),a}(l.Component);t.a=Object(w.e)(T)}).call(this,a(43))},62:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAl0lEQVR4Ae3MAQYCURSG0UuNEm2hAGhHEWgFAcKQQBBJQIsIBCJhltASQgABEH3hJw3Fmy5h3LOAYyHUAA3WXBh6myY7AM7eZo+MvY1MoikjezVTX3Oo0DBgROZv+tyBgs7XZmYp6PEAoKD9sZlbKpbIUVWpWVgVbN8rWglNQtXl9GMjbJAbsjJxVL5GFf5GyLmS21+F8ATE1PHSKfdPSAAAAABJRU5ErkJggg=="},63:function(e,t,a){"use strict";(function(e){var n=a(9),r=a(10),o=a(12),i=a(11),s=a(13),l=a(0),c=a.n(l),u=(a(24),a(21)),m=a.n(u),p=a(14),d=a.n(p),g=a(23),h=a.n(g),f=a(19),y=a.n(f),v=a(22),b=new m.a,x=function(t){function a(){var e;Object(n.a)(this,a);var t=(e=Object(o.a)(this,Object(i.a)(a).call(this))).getHashParams();return e.state={tracks:[],playlist:[],currentPlaylist:{},lastTrackId:"",typeSelection:1,loading:!1,created:!1,error:!1,name:"Pure Love",amount:8,feeling:"Love",trackCount:0},t.access_token&&b.setAccessToken(t.access_token),e}return Object(s.a)(a,t),Object(r.a)(a,[{key:"getHashParams",value:function(){for(var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);e=a.exec(n);)t[e[1]]=decodeURIComponent(e[2]);return t}},{key:"forEachPromiseSavedTracks",value:function(e,t,a,n,r,o,i){return e.reduce(function(e,s){return e.then(function(){return o(s,t,n,r,a,i)})},Promise.resolve())}},{key:"addSavedTracks",value:function(t,a,n,r,o,i){return new Promise(function(t,i){e.nextTick(function(){n=r.state.lastTrackId,a={},a=""===n?{limit:50}:{limit:50,after:n},b.getMySavedTracks(a).then(function(e){e.items.forEach(function(e){o.push(e.track.id),n=e.track.id}),r.setState({lastTrackId:n,tracks:o}),t()})})})}},{key:"getSavedTracks",value:function(e){for(var t=this,a=[],n=[],r=e/50,o=0;o<r;o++)n.push(1);this.forEachPromiseSavedTracks(n,"",a,"",this,this.addSavedTracks).then(function(){console.log(a.length+" Tracks loaded"),t.setState({tracks:a}),t.getTracksFeelings(a)})}},{key:"equals",value:function(e,t){return!!e.danceability(t.danceability)&&(!!e.acousticness(t.acousticness)&&(!!e.energy(t.energy)&&(!!e.loudness(t.loudness)&&(!!e.instrumentalness(t.instrumentalness)&&(!!e.liveness(t.liveness)&&(!!e.mode(t.mode)&&(!!e.speechiness(t.speechiness)&&(!!e.tempo(t.tempo)&&(!!e.time_signature(t.time_signature)&&(!!e.valence(t.valence)&&!!e.key(t.key)))))))))))}},{key:"less",value:function(e){return function(t){return t<e}}},{key:"greater",value:function(e){return function(t){return t>e}}},{key:"and",value:function(e,t){return function(a){return e(a)&&t(a)}}},{key:"matchesFeeling",value:function(e,t){var a={danceability:this.less(1),acousticness:this.less(1),energy:this.less(1),loudness:this.less(10),instrumentalness:this.less(1),liveness:this.less(1),mode:this.less(1),speechiness:this.less(1),tempo:this.less(130),time_signature:this.less(30),valence:this.less(1),key:this.less(20)},n={danceability:t.danceability,acousticness:t.acousticness,energy:t.energy,loudness:t.loudness,instrumentalness:t.instrumentalness,liveness:t.liveness,mode:t.mode,speechiness:t.speechiness,tempo:t.tempo,time_signature:t.time_signature,valence:t.valence,key:t.key};switch(e){case"Love":return this.equals(a,n);case"Sorrow":case"Joy":case"Rage":return this.equals({danceability:1,acousticness:1,energy:1,loudness:1,instrumentalness:1,liveness:1,mode:1,speechiness:1,tempo:1,time_signature:1,valence:1,key:1},n);default:return this.equals(a,n)}}},{key:"createPlaylist",value:function(e){this.setState({loading:!0,created:!1,error:!1,currentPlaylist:{}});var t=this,a=this.state.name;b.getMe().then(function(n){var r={name:a,description:"Autogenerated by Spotify Tools by Viktor Frohnapfel",public:!1};b.createPlaylist(n.id,r).then(function(a){b.addTracksToPlaylist(a.id,e).then(function(e){b.getPlaylist(a.id).then(function(e){var a=e.images[0].url,n={name:e.name,uri:e.uri,image:a};t.setState({created:!0,loading:!1,currentPlaylist:n})}).catch(function(e){console.log(e),t.setState({created:!1,loading:!1,error:!0})})}).catch(function(e){console.log(e),t.setState({created:!1,loading:!1,error:!0})})}).catch(function(e){console.log(e),t.setState({created:!1,loading:!1,error:!0})})}).catch(function(e){console.log(e),t.setState({created:!1,loading:!1,error:!0})})}},{key:"getTracksFeelings",value:function(e){var t=this,a=[],n=this,r=this.state.feeling,o=this.state.amount,i=this.state.trackCount;b.getAudioFeaturesForTracks(e).then(function(e){e.audio_features.forEach(function(e){t.matchesFeeling(r,e)&&a.length<o&&(a.push(e.uri),i++,console.log(JSON.stringify(e)))}),n.setState({playlist:a,trackCount:i}),t.createPlaylist(a)})}},{key:"createFeelingPlaylist",value:function(){""!==this.state.name&&this.getSavedTracks(50)}},{key:"handleAmountChange",value:function(e){this.setState({amount:e.target.value})}},{key:"handleFeelingChange",value:function(e){this.setState({feeling:e.target.value})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.loading,a=this.state.created,n=this.state.error;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{style:{fontFamily:"Gotham Bold"}},"Create playlists from your library with your current feelings"),c.a.createElement("div",{className:"formLayout"},c.a.createElement(y.a,null,c.a.createElement(y.a.Group,{controlId:"form.name"},c.a.createElement(y.a.Label,null,"Playlist Name"),c.a.createElement(y.a.Control,{type:"text",placeholder:"e. g. Pure Love",onChange:function(t){return e.handleNameChange(t)}})),c.a.createElement(y.a.Group,{controlId:"form.feeling"},c.a.createElement(y.a.Label,null,"Select feeling..."),c.a.createElement(y.a.Control,{as:"select",onChange:function(t){return e.handleFeelingChange(t)}},c.a.createElement("option",null,"Love"),c.a.createElement("option",null,"Sorrow"),c.a.createElement("option",null,"Joy"),c.a.createElement("option",null,"Rage"))),c.a.createElement(y.a.Group,{controlId:"form.amount"},c.a.createElement(y.a.Label,null,"Select amount of tracks"),c.a.createElement(y.a.Control,{as:"select",onChange:function(t){return e.handleAmountChange(t)}},c.a.createElement("option",null,"8"),c.a.createElement("option",null,"16"),c.a.createElement("option",null,"32"),c.a.createElement("option",null,"64"),c.a.createElement("option",null,"96"),c.a.createElement("option",null,"128"))),c.a.createElement(d.a,{className:"button",variant:"success",disabled:!0},"Coming Soon")),t?c.a.createElement(h.a,{animation:"grow",variant:"success"}):c.a.createElement("div",null),n?c.a.createElement("h3",{style:{marginTop:"20px",fontFamily:"Gotham Bold"}},"Error occurred"):c.a.createElement("div",null),a?c.a.createElement("a",{href:this.state.currentPlaylist.uri,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"card",style:{background:"rgb(24, 24, 24)",borderColor:"#464646",borderWidth:"2px"}},c.a.createElement("div",null,c.a.createElement("div",{style:{float:"left",borderRadius:"4px"}},c.a.createElement("img",{src:"https://cdn3.iconfinder.com/data/icons/UltimateGnome/256x256/apps/gnome-cd.png",style:{borderRadius:"26px",borderColor:"#464646",borderWidth:"7px",width:"64px",height:"64px"},alt:"cover"})),c.a.createElement("div",{style:{float:"left",paddingLeft:"10px",paddingRight:"10px",paddingTop:"3px",paddingBottom:"3px"}},c.a.createElement("div",{style:{fontSize:"18px",fontWeight:"500",color:"white",margin:"auto"}},this.state.currentPlaylist.name),c.a.createElement("div",{style:{fontSize:"16px",fontWeight:"500",color:"white",margin:"auto"}},this.state.trackCount," Tracks"))))):c.a.createElement("div",null)))}}]),a}(l.Component);t.a=Object(v.e)(x)}).call(this,a(43))},64:function(e,t,a){e.exports=a(115)},69:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.1e33e8ee.chunk.js.map