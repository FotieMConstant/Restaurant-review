(this["webpackJsonprestaurant-review"]=this["webpackJsonprestaurant-review"]||[]).push([[0],{117:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),i=t.n(r),c=(t(94),t(95),t(158)),o=t(161),s=t(163),u=t(33),m=t(68),g=t.n(m),p=t(67),d=t.n(p),E=Object(c.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(0)},title:{flexGrow:1},list:{width:250},fullList:{width:"auto"}}}));function v(){var e=E();return l.a.createElement("div",{className:e.root},l.a.createElement(o.a,{position:"static"},l.a.createElement(s.a,null,l.a.createElement(d.a,null),l.a.createElement(u.a,{variant:"h6",edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},"Restaurant review"),l.a.createElement(u.a,{variant:"h6",className:e.title}),l.a.createElement(g.a,null))))}var w=t(11),f=t(75),h=t(177),b=t(185),y=t(69),O=t(46),R=t.n(O),j=t(168),N=t(169),S=t(174),V=t(170),x=t(171),C=t(186),k=t(167),A=t(3),_=t(176),z=t(173),D=t(166),G=t(172),I=t(73),U=t.n(I),B=t(182),P=t(165),L=t(184),W=t(71),J=t.n(W),F=t(164),T=Object(c.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),q=l.a.forwardRef((function(e,a){return l.a.createElement(F.a,Object.assign({direction:"up",ref:a},e))}));function M(e){var a=T(),t=l.a.useState(!1),n=Object(w.a)(t,2),r=n[0],i=n[1],c=function(){i(!1)};return console.log("Props gottten => lat => "+e.latitude+" lng => "+e.longitude),l.a.createElement("div",null,l.a.createElement(P.a,{variant:"outlined",color:"primary",onClick:function(){i(!0)}},"Street View"),l.a.createElement(L.a,{fullScreen:!0,open:r,onClose:c,TransitionComponent:q},l.a.createElement(o.a,{className:a.appBar},l.a.createElement(s.a,null,l.a.createElement(D.a,{edge:"start",color:"inherit",onClick:c,"aria-label":"close"},l.a.createElement(J.a,null)),l.a.createElement(u.a,{variant:"h6",className:a.title},"Street view photo of ",l.a.createElement("em",null,e.restoName)))),l.a.createElement("img",{src:"https://maps.googleapis.com/maps/api/streetview?size=600x625&location=".concat(e.latitude,",").concat(e.longitude,"&radius=2000&heading=151.78&pitch=-0.76&key=AIzaSyD4p0gchCyP98IGwRwGes-UGx4BDEqDrjU"),alt:"Google Streetview"})))}var H=t(175),Y=Object(c.a)((function(e){return{root:{width:"100%",maxWidth:"36ch",backgroundColor:e.palette.background.paper},inline:{display:"inline"},large:{width:e.spacing(11),height:e.spacing(11),"margin-top":"8px"},profile:{"margin-right":"-120px !important"},wrapper:{"overflow-y":"scroll",height:"525px"},waiting:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));var K=l.a.memo((function(e){var a=Y(),t=Object(n.useState)({}),r=Object(w.a)(t,2),i=r[0],c=r[1],o=Object(n.useState)({newReviewUserValue:""}),s=Object(w.a)(o,2),m=s[0],g=s[1],p=Object(n.useState)({newReviewValue:""}),d=Object(w.a)(p,2),E=d[0],v=d[1],f=Object(n.useState)({newReviewRatingValue:""}),h=Object(w.a)(f,2),O=h[0],I=h[1],L={author_name:m.newReviewUserValue,rating:O.newReviewRatingValue,text:E.newReviewValue},W=l.a.useState({}),J=Object(w.a)(W,2),F=J[0],T=J[1],q=function(e){g({newReviewUserValue:e.target.value})},K=function(e){v({newReviewValue:e.target.value})},$=function(e){I({newReviewRatingValue:e.target.value})},Q=function(e){R.a.get("https://maps.googleapis.com/maps/api/place/details/json?place_id=".concat(e,"&fields=name,rating,reviews,formatted_phone_number&key=AIzaSyD4p0gchCyP98IGwRwGes-UGx4BDEqDrjU")).then((function(a){var t=a.data.result;console.log(JSON.stringify(a.data.result)),c(t),console.log("Your Resto ID is => "+e),console.log("HERE ARE THE DETAILS "+t)}))};return l.a.createElement("div",null,l.a.createElement(k.a,{className:a.wrapper},e.Feeds.map((function(t,n){return t.rating<=e.filterRating?l.a.createElement("div",{key:n},l.a.createElement(j.a,{className:a.root},l.a.createElement(N.a,{alignItems:"flex-start"},l.a.createElement(V.a,{secondary:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary"},l.a.createElement("span",null,l.a.createElement("h3",{key:n},t.name.substring(0,35)),l.a.createElement("i",{key:n},t.vicinity.substring(0,40),"..."),l.a.createElement("br",null))),l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:a.root},l.a.createElement("span",{key:n},t.rating),l.a.createElement(b.a,{name:"half-rating",precision:.5,defaultValue:t.rating,key:n,size:"small",readOnly:!0}))))}),l.a.createElement("div",{className:a.profile},l.a.createElement(x.a,null,l.a.createElement(C.a,{className:a.large,alt:t.name,src:t.icon,key:n})))),l.a.createElement(G.a,{disableSpacing:!0},l.a.createElement(D.a,{className:Object(A.a)(a.expand,Object(y.a)({},a.expandOpen,F[t.place_id])),onClick:function(){return e=t.place_id,F[e]=!F[e],T(F),void Q(e);var e},"aria-expanded":F[t.place_id],"aria-label":"show more",key:n},l.a.createElement(U.a,{size:"small",className:a.dropper}))),l.a.createElement(z.a,{in:F[t.place_id],timeout:"auto",unmountOnExit:!0},i&&i.reviews?i.reviews.map((function(e,t){return l.a.createElement(j.a,null,l.a.createElement(N.a,{alignItems:"flex-start"},l.a.createElement(x.a,null,l.a.createElement(C.a,{alt:"Remy Sharp",src:e.profile_photo_url})),l.a.createElement(V.a,{style:{width:"60px","word-wrap":"anywhere"},primary:e.author_name,secondary:l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary"},l.a.createElement(b.a,{name:"half-rating",precision:.5,defaultValue:e.rating,size:"small",readOnly:!0})),l.a.createElement("br",null),e.text,l.a.createElement("br",null),l.a.createElement("em",null,e.relative_time_description))})),l.a.createElement(S.a,{variant:"inset",component:"li"}))})):l.a.createElement("div",{className:a.waiting},l.a.createElement("p",null,"No reviews here yet!"),l.a.createElement(H.a,null)),l.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off"},l.a.createElement(_.a,null,l.a.createElement("div",null,l.a.createElement(B.a,{label:"Username",id:"standard-size-small",placeholder:"Enter your name",size:"small",value:m.newReviewUserValue,onChange:q,name:"userName"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(b.a,{name:"rating",defaultValue:0,value:O.newReviewRatingValue,size:"small",onChange:$})),l.a.createElement("div",null,l.a.createElement(B.a,{label:"Review",id:"filled-size-small",placeholder:"Enter your review",multiline:!0,rows:4,size:"small",value:E.newReviewValue,onChange:K})),l.a.createElement("br",null),l.a.createElement(P.a,{variant:"contained",color:"primary",onClick:function(){return function(e){console.log("Adding a new review with place_id => "+e),void 0!==i&&"undefined"!==typeof i||c({reviews:[]});var a=JSON.parse(JSON.stringify(i));a.reviews||(a.reviews=[]),a.reviews.push(L),c(a)}(t.place_id)},key:n},"Add review"),l.a.createElement("br",null),l.a.createElement(M,{key:n,restoName:t.name,latitude:t.geometry.location.lat,longitude:t.geometry.location.lng})))),l.a.createElement("br",null),l.a.createElement(S.a,null))):l.a.createElement("span",null)}))))})),$=t(37),Q=t(181),X=t(179),Z=t(180),ee=t(178),ae=t(74),te=t.n(ae),ne={width:"auto",height:"620px"},le=Object(c.a)((function(e){return{container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:e.spacing(3)},paper:{padding:e.spacing(0),textAlign:"center",color:e.palette.text.secondary,whiteSpace:"nowrap",marginBottom:e.spacing(1)},divider:{margin:e.spacing(2,0)}}}));function re(){var e=le(),a=Object(n.useState)({newRestaurantNameValue:""}),t=Object(w.a)(a,2),r=t[0],i=t[1],c=Object(n.useState)({newRatingValue:""}),o=Object(w.a)(c,2),s=o[0],m=o[1],g=Object(n.useState)({newRestaurantAddressValue:""}),p=Object(w.a)(g,2),d=p[0],E=p[1],v=Object(n.useState)({filterRatingValue:"5"}),y=Object(w.a)(v,2),O=y[0],j=y[1],N=Object(n.useState)(0),S=Object(w.a)(N,2),V=S[0],x=S[1],C=Object(n.useState)(0),k=Object(w.a)(C,2),A=k[0],_=k[1],z=Object(n.useState)(0),D=Object(w.a)(z,2),G=D[0],I=D[1],U=Object(n.useState)(0),W=Object(w.a)(U,2),J=W[0],F=W[1],T=Object(n.useState)(""),q=Object(w.a)(T,2),M=q[0],H=q[1];Object(n.useEffect)((function(){"geolocation"in navigator?(navigator.geolocation.getCurrentPosition((function(e){x(e.coords.longitude),_(e.coords.latitude)}),(function(e){console.error("Error Code = "+e.code+" - "+e.message)})),navigator.geolocation.watchPosition((function(e){console.log("WatchPosition => Latitude is :",e.coords.latitude),console.log("WatchPosition => Longitude is :",e.coords.longitude)}))):console.log("Not Available")}),[]);var Y=Object(n.useState)([]),ae=Object(w.a)(Y,2),re=ae[0],ie=ae[1],ce=Object(n.useState)(!1),oe=Object(w.a)(ce,2),se=oe[0],ue=oe[1],me=function(){ue(!1)},ge={place_id:M,name:r.newRestaurantNameValue,vicinity:d.newRestaurantAddressValue,rating:s.newRatingValue,geometry:{location:{lat:J,lng:G}}},pe=function(e){console.log(e.latLng);var a=e.latLng.lat(),t=e.latLng.lng();F(a),I(t),ue(!0),console.log("You clicked on the coordinates => lng: "+t+" lat:"+a)};Object(n.useEffect)((function(){R.a.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=".concat(A,",").concat(V,"&radius=2000&type=restaurant&key=AIzaSyD4p0gchCyP98IGwRwGes-UGx4BDEqDrjU")).then((function(e){var a=e.data.results;console.log(a),ie(a)}))}),[A,V]);var de={lat:A,lng:V},Ee={lat:A,lng:V};return l.a.createElement("div",null,l.a.createElement(u.a,{variant:"subtitle1",gutterBottom:!0}),l.a.createElement(h.a,{container:!0,spacing:0},l.a.createElement(h.a,{item:!0,xs:8},l.a.createElement(f.a,{className:e.paper},l.a.createElement($.b,{googleMapsApiKey:"AIzaSyD4p0gchCyP98IGwRwGes-UGx4BDEqDrjU"},l.a.createElement($.a,{mapContainerStyle:ne,center:de,zoom:15,onClick:function(e){return pe(e)}},l.a.createElement(L.a,{open:se,onClose:me,"aria-labelledby":"form-dialog-title"},l.a.createElement(ee.a,{id:"form-dialog-title"},"Add new restaurant"),l.a.createElement(X.a,null,l.a.createElement(Z.a,null,"Enter restaurant details below"),l.a.createElement(B.a,{autoFocus:!0,margin:"dense",id:"name",label:"Restaurant name",type:"text",fullWidth:!0,value:r.newRestaurantNameValue,onChange:function(e){i({newRestaurantNameValue:e.target.value})}}),l.a.createElement(b.a,{name:"rating",defaultValue:0,value:s.newRatingValue,onChange:function(e){m({newRatingValue:e.target.value})}}),l.a.createElement(B.a,{margin:"dense",id:"Address",label:"Address",type:"text",fullWidth:!0,value:d.newRestaurantAddressValue,onChange:function(e){E({newRestaurantAddressValue:e.target.value})}})),l.a.createElement(Q.a,null,l.a.createElement(P.a,{onClick:me,color:"primary"},"Cancel"),l.a.createElement(P.a,{onClick:function(){ue(!1);var e=te()();console.log("Restaurant gen =>"+e),H(e),console.log("Newly added resto => "+ge),ge.place_id=e;var a=JSON.parse(JSON.stringify(re));a.push(ge),ie(a)},color:"primary"},"ADD"))),l.a.createElement($.c,{position:Ee,icon:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}),re.map((function(e,a){return e.rating<=O.filterRatingValue?l.a.createElement($.c,{position:{lat:e.geometry.location.lat,lng:e.geometry.location.lng},icon:{path:"M7 0c-3.314 0-6 3.134-6 7 0 3.31 1.969 6.083 4.616 6.812l-0.993 16.191c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.993-16.191c2.646-0.729 4.616-3.502 4.616-6.812 0-3.866-2.686-7-6-7zM27.167 0l-1.667 10h-1.25l-0.833-10h-0.833l-0.833 10h-1.25l-1.667-10h-0.833v13c0 0.552 0.448 1 1 1h2.604l-0.982 16.004c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.982-16.004h2.604c0.552 0 1-0.448 1-1v-13h-0.833z",fillColor:"#375fc4",fillOpacity:1,strokeWeight:0,scale:1}}):l.a.createElement("span",null)})))))),l.a.createElement(h.a,{item:!0,xs:4},l.a.createElement(f.a,{className:e.paper},l.a.createElement("h3",null,"Nearby Places ",l.a.createElement("br",null)," ",l.a.createElement("h6",null,"Filter Restaurants with ratings less than"," ",O.filterRatingValue)),l.a.createElement(b.a,{name:"half-rating",precision:.5,value:O.filterRatingValue,onChange:function(e){j({filterRatingValue:e.target.value})}}),l.a.createElement(K,{Feeds:re,filterRating:O.filterRatingValue})))))}var ie=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,a,t){e.exports=t(117)},94:function(e,a,t){},95:function(e,a,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.a4dbd5a9.chunk.js.map