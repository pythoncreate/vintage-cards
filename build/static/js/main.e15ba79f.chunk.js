(this["webpackJsonpvintage-test"]=this["webpackJsonpvintage-test"]||[]).push([[0],{228:function(e,t,a){e.exports=a(393)},361:function(e,t,a){},393:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(44),c=a.n(l),o=a(22),u=a(30),i=a(51),s=a(404),m=a(60),f=a(33),d=a(403),E=function(e){return{type:"SET_SEARCH",search:e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH":return t.search;case"RESET_SEARCH":return null;default:return e}},p=Object(o.b)((function(e){return{search:e.search,filter:e.filter,baseball:e.baseball}}),{searchChange:E,clearSearch:function(e){return{type:"RESET_SEARCH",search:e}}})((function(e){return r.a.createElement("div",{style:{marginBottom:10}},r.a.createElement(d.a,{icon:"search",placeholder:"Enter filter...",onChange:function(t){e.searchChange(t.target.value.toLowerCase())}}))})),b=a(14),v=a.n(b),h=a(17),k=a(28),C=a.n(k),w=function(){return C.a.get("/testAPI").then((function(e){return e.data}))},y=function(e,t,a){var n=C.a.get("/testAPI"+"?keyword=".concat(e,"&page=").concat(t,"&entries=").concat(a));return console.log("URL","/testAPI"+"?keyword=".concat(e,"&page=").concat(t,"&entries=").concat(a)),console.log("Request",n),n.then((function(e){return e.data}))},N=function(e,t,a){return function(){var n=Object(h.a)(v.a.mark((function n(r){var l;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y(e,t,a);case 2:l=n.sent,r({type:"QUERY_DATA",data:JSON.parse(l.data)}),r({type:"GET_PAGE_OUTPUT",data:JSON.parse(l.pageOutput)});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":case"UPDATE_DATA":case"QUERY_DATA":return t.data;default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"10",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ENTRIES":return t.entries;default:return e}},B=a(408),S=[{key:"0",value:"10",text:"10"},{key:"1",value:"25",text:"25"},{key:"2",value:"50",text:"50"},{key:"3",value:"100",text:"100"}],x={entriesChange:function(e){return{type:"SET_ENTRIES",entries:e}},fetchData:N},A=Object(o.b)((function(e){return{query:e.query,entries:e.entries,page:e.page}}),x)((function(e){return r.a.createElement(r.a.Fragment,null,"Records per page:"," ",r.a.createElement(B.a,{inline:!0,options:S,defaultValue:e.entries,onChange:function(t,a){e.entriesChange(a.value),e.fetchData(e.query,e.page,a.value)}}))})),R=a(414),j=a(394),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"t206",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUERY":return t.query;case"RESET_QUERY":return null;default:return e}},I=(a(361),{fetchData:N,queryChange:function(e){return{type:"SET_QUERY",query:e}}}),F=Object(o.b)((function(e){return{baseball:e.baseball,entries:e.entries,query:e.query,page:e.page}}),I)((function(e){var t=function(t){e.queryChange(t),e.fetchData(t,e.page,e.entries),console.log("Baseball",e.baseball)},a=[{menuItem:"Early Tobacco (N)",render:function(){return r.a.createElement(R.a.Pane,null,r.a.createElement(j.a,{className:"oliveButton",color:"olive",onClick:function(){return t("N28")},value:"N28"},"N28"),r.a.createElement(j.a,{className:"oliveButton",color:"olive",onClick:function(){return t("N29")},value:"N29"},"N29"),r.a.createElement(j.a,{className:"oliveButton",color:"olive",onClick:function(){return t("N162")},value:"N162"},"N162"),r.a.createElement(j.a,{className:"oliveButton",color:"olive",onClick:function(){return t("N172 old judge")},value:"N172"},"N172"),r.a.createElement(j.a,{className:"oliveButton",color:"olive",onClick:function(){return t("N309 Mayo")},value:"N300"},"N300"))}},{menuItem:"Tobacco (T)",render:function(){return r.a.createElement(R.a.Pane,null,r.a.createElement(j.a,{className:"greenButton",color:"green",onClick:function(){return t("t200")},value:"t200"},"T200"),r.a.createElement(j.a,{className:"greenButton",color:"green",onClick:function(){return t("t201")},value:"t201"},"T201"),r.a.createElement(j.a,{className:"greenButton",color:"green",onClick:function(){return t("t202")},value:"t202"},"T202"),r.a.createElement(j.a,{className:"greenButton",color:"green",onClick:function(){return t("t204")},value:"t204"},"T204"),r.a.createElement(j.a,{className:"greenButton",color:"green",onClick:function(){return t("t205")},value:"t205"},"T205"),r.a.createElement(j.a,{className:"greenButton",color:"green",onClick:function(){return t("t206")},value:"t206"},"T206"),r.a.createElement(j.a,{className:"greenButton",color:"green",onClick:function(){return t("t207")},value:"t207"},"T207"),r.a.createElement(j.a,{className:"greenButton",color:"green",onClick:function(){return t("t210")},value:"t210"},"T210"),r.a.createElement(j.a,{className:"greenButton",color:"green",onClick:function(){return t("T3 Turkey Red")},value:"T3 Turkey Red"},"Turkey Reds"))}},{menuItem:"Strip Cards (W)",render:function(){return r.a.createElement(R.a.Pane,null,r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("w512")},value:"w512"},"W512"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("w514")},value:"w514"},"W514"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("w515")},value:"w515"},"W515"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("w516")},value:"w516"},"W516"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("w517")},value:"w517"},"W517"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("w520")},value:"w520"},"W520"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("w551")},value:"w551"},"W551"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("w573")},value:"w573"},"W573"))}},{menuItem:"Exhibit Cards (W)",render:function(){return r.a.createElement(R.a.Pane,null,r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("1921 Exhibit")},value:"1921 Exhibit"},"1921"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("1925 Exhibit")},value:"1925 Exhibit"},"1925"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("1926 Exhibit")},value:"1926 Exhibit"},"1926"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("1927 Exhibit")},value:"1927 Exhibit"},"1927"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("4-in-1 exhibit")},value:"1929-1938 W463 4-1"},"1929-1938 W463 4-1"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("salutation exhibit")},value:"W462 Exhibit"},"1939-1946 (W462)"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("W461 Exhibit")},value:"W461 Exhibit"},"1947-1966 (W461)"))}},{menuItem:"Early Candy Gum",render:function(){return r.a.createElement(R.a.Pane,null,r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("e90")},value:"e90"},"E-90"),r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("e91")},value:"E-91"},"E91"),r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("e92")},value:"E-92"},"E92"),r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("e93")},value:"E93"},"E93"),r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("e95")},value:"E95"},"E95"),r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("e96")},value:"E96"},"E96"),r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("e98")},value:"E98"},"E98"),r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("e106")},value:"E106"},"E106"),r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("e120")},value:"E120"},"E120"),r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("e121")},value:"E-93"},"E121"),r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("1914 Cracker Jack")},value:"1914 Cracker Jack"},"1914 Cracker Jack"),r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("1915 Cracker Jack")},value:"1915 Cracker Jack"},"1915 Cracker Jack"),r.a.createElement(j.a,{className:"blueButton",color:"blue",onClick:function(){return t("1933 Goudey")},value:"1933 Goudey"},"1933 Goudey"))}},{menuItem:"Early Bowman",render:function(){return r.a.createElement(R.a.Pane,null,r.a.createElement(j.a,{className:"brownButton",color:"brown",onClick:function(){return t("1948 Bowman")},value:"1948 Bowman"},"1948"),r.a.createElement(j.a,{className:"brownButton",color:"brown",onClick:function(){return t("1949 Bowman")},value:"1949 Bowman"},"1949"),r.a.createElement(j.a,{className:"brownButton",color:"brown",onClick:function(){return t("1950 Bowman")},value:"1950 Bowman"},"1950"),r.a.createElement(j.a,{className:"brownButton",color:"brown",onClick:function(){return t("1951 Bowman")},value:"1951 Bowman"},"1951"),r.a.createElement(j.a,{className:"brownButton",color:"brown",onClick:function(){return t("1952 Bowman")},value:"1952 Bowman"},"1952"),r.a.createElement(j.a,{className:"brownButton",color:"brown",onClick:function(){return t("1953 Bowman")},value:"1953 Bowman"},"1953"),r.a.createElement(j.a,{className:"brownButton",color:"brown",onClick:function(){return t("1954 Bowman")},value:"1954 Bowman"},"1954"),r.a.createElement(j.a,{className:"brownButton",color:"brown",onClick:function(){return t("1955 Bowman")},value:"1955 Bowman"},"1955"))}},{menuItem:"Early Topps",render:function(){return r.a.createElement(R.a.Pane,null,r.a.createElement(j.a,{className:"orangeButton",color:"orange",onClick:function(){return t("1952 Topps")},value:"1952 Topps"},"1952"),r.a.createElement(j.a,{className:"orangeButton",color:"orange",onClick:function(){return t("1953 Topps")},value:"1953 Topps"},"1953"),r.a.createElement(j.a,{className:"orangeButton",color:"orange",onClick:function(){return t("1954 Topps")},value:"1954 Topps"},"1954"),r.a.createElement(j.a,{className:"orangeButton",color:"orange",onClick:function(){return t("1955 Topps")},value:"1955 Topps"},"1955"),r.a.createElement(j.a,{className:"orangeButton",color:"orange",onClick:function(){return t("1956 Topps")},value:"1956 Topps"},"1956"),r.a.createElement(j.a,{className:"orangeButton",color:"orange",onClick:function(){return t("1957 Topps")},value:"1957 Topps"},"1957"),r.a.createElement(j.a,{className:"orangeButton",color:"orange",onClick:function(){return t("1958 Topps")},value:"1958 Topps"},"1958"))}},{menuItem:"By Player",render:function(){return r.a.createElement(R.a.Pane,null,r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("Babe Ruth")},value:"Babe Ruth"},"Babe Ruth"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("Ty Cobb")},value:"Ty Cobb"},"Ty Cobb"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("Honus Wagner")},value:"Honus Wagner"},"Honus Wagner"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("Walter Johnson")},value:"Walter Johnson"},"Walter Johnson"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("Nap Lajoie")},value:"Nap Lajoie"},"Nap Lajoie"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("Christy Mathewson")},value:"Christy Mathewson"},"Christy Mathewson"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("Cy Young")},value:"Cy Young"},"Cy Young"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("Lou Gehrig")},value:"Lou Gehrig"},"Lou Gehrig"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("Shoeless Joe Jackson")},value:"Shoeless Joe Jackson"},"Shoeless Joe Jackson"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("Mickey Mantle")},value:"Mickey Mantle"},"Mickey Mantle"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("Jackie Robinson")},value:"Jackie Robinson"},"Jackie Robinson"),r.a.createElement(j.a,{className:"blackButton",color:"black",onClick:function(){return t("Ted Williams")},value:"Ted Williams"},"Ted Williams"))}}];return r.a.createElement(R.a,{panes:a,defaultActiveIndex:1})})),_=a(140),P=a(409),W=a(407),J=a(52),D=a(415),H=null,M={getAll:function(){return C.a.get("/user").then((function(e){return e.data}))},getFavorites:function(e){return C.a.get("".concat("/user","/").concat(e,"/favorites")).then((function(e){return e.data}))},create:function(){var e=Object(h.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:H}},e.next=3,C.a.post("/user",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(h.a)(v.a.mark((function e(t,a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.put("".concat("/user","/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),removeFav:function(){var e=Object(h.a)(v.a.mark((function e(t,a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.put("".concat("/user","/").concat(t,"/removefav"),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),setToken:function(e){H="bearer ".concat(e)}},L={login:function(){var e=Object(h.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function V(){return{token:localStorage.token,firstName:localStorage.firstName,id:localStorage.id,favorites:localStorage.favorites,username:localStorage.username}}var G=function(e){return function(){var t=Object(h.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.login({username:e.username,password:e.password});case 2:n=t.sent,window.localStorage.setItem("loggedVintageUser",JSON.stringify(n)),a({type:"SET_USER",data:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},q=function(){return function(e){window.localStorage.removeItem("loggedVintageUser"),e({type:"SET_USER",data:V()})}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data&&M.setToken(t.data.token),t.data;default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_USER":return[].concat(Object(m.a)(e),[t.data]);case"ADD_FAVORITE":var a=t.data.user;console.log("USER",a);var n=a.favorites,r=n.concat(t.data.card);return a.favorites=r,M.update(a.id,t.data.card),t.data.user;case"REMOVE_FAVORITE":var l=t.data.user;return M.removeFav(l.id,t.data.card),t.data.user;case"DELETE_USER":var c=t.data;return e.filter((function(e){return e.id!==c.id}));case"INIT_USERS":return t.data;default:return e}},Q=a(39),$=a.n(Q),K=a(190);K().format();var X=function(e){var t=e.baseball,a=e.search;return a?t.filter((function(e){return e.title[0].toLowerCase().includes(a.toLowerCase())})):t},Z={borderRadius:0,padding:"2em"},ee={searchChange:E,fetchData:N,addFavorite:function(e,t){return function(){var a=Object(h.a)(v.a.mark((function a(n){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n({type:"ADD_FAVORITE",data:{card:e,user:t}});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},te=Object(o.b)((function(e){return{baseball:e.baseball,loggedUser:e.loggedUser,page:e.page,entries:e.entries,query:e.query,pageOutput:e.pageOutput,search:e.search,cardsToShow:X(e)}}),ee)((function(e){Object(n.useEffect)((function(){w(e.cardsToShow)}),[e]),console.log("Logged User",e.loggedUser);var t=Object(n.useState)(null),a=Object(f.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(null),u=Object(f.a)(o,2),s=u[0],d=u[1],E=Object(n.useState)(""),g=Object(f.a)(E,2),b=g[0],v=g[1],h=Object(n.useState)(e.cardsToShow),k=Object(f.a)(h,2),C=k[0],w=k[1],y=function(e){if(l!==e)return c(e),console.log("Column",e),w($.a.sortBy(C,[e])),console.log("Filtered Data",C),d("ascending"),void console.log("Direction",s);w("title"===e?$.a.sortBy(C.reverse()):$.a.sortBy(C,(function(e){return parseInt(e)})).reverse()),d("ascending"===s?"descending":"ascending")},N=Object(i.f)(),T=function(t,a){if("undefined"===typeof a.id)return N.push("/login");var n;console.log("USER",a),console.log("FAVORITES",b),e.addFavorite(t,a),b.includes(t.id)?(n=t.id,v(b.filter((function(e){return e!==n}))),console.log("FAVORITES AFTER REM",b)):v([].concat(Object(m.a)(b),[t.id]))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(F,null),r.a.createElement(_.a,null,r.a.createElement(A,null)," Total count: ",e.pageOutput.totalEntries),r.a.createElement(P.a,{sortable:!0,celled:!0,fixed:!0,striped:!0},r.a.createElement(P.a.Header,null,r.a.createElement(P.a.Row,null,r.a.createElement(P.a.HeaderCell,{sorted:"title"===l?s:null,onClick:function(){return y("title")}},"Card Title"),r.a.createElement(P.a.HeaderCell,{width:2,textAlign:"center",sorted:"bidCount"===l?s:null,onClick:function(){return y("bidCount")}},"# Bids"),r.a.createElement(P.a.HeaderCell,{textAlign:"center",sorted:"watchCount"===l?s:null,onClick:function(){return y("watchCount")}},"Watchers"),r.a.createElement(P.a.HeaderCell,{textAlign:"center",sorted:"price"===l?s:null,onClick:function(){return y("price")}},"Price"),r.a.createElement(P.a.HeaderCell,{textAlign:"center",sorted:"timeStamp"===l?s:null,onClick:function(){return y("timeStamp")}},"Time Left"),r.a.createElement(P.a.HeaderCell,{sorted:"acceptsOffers"===l?s:null,onClick:function(){return y("acceptsOffers")},textAlign:"center",width:2},"Auction Info"),r.a.createElement(P.a.HeaderCell,{textAlign:"center",width:"2"},"Favorite"))),r.a.createElement(P.a.Body,null,C?C.map((function(t){return r.a.createElement(P.a.Row,null,r.a.createElement(W.a,{trigger:r.a.createElement(P.a.Cell,null,r.a.createElement("a",{href:t.itemURL,target:"_blank"},t.title)),content:r.a.createElement("img",{alt:t.title,src:t.image}),style:Z,position:"left center"}),r.a.createElement(P.a.Cell,{textAlign:"center"},t.bidCount),r.a.createElement(P.a.Cell,{textAlign:"center"},t.watchCount),r.a.createElement(P.a.Cell,{textAlign:"center"},"$",t.price),r.a.createElement(P.a.Cell,{textAlign:"center"},K(t.timeLeft).fromNow(!0)),r.a.createElement(P.a.Cell,{textAlign:"center"},"true"===t.acceptsOffers[0]?r.a.createElement(W.a,{content:"Accepts Offers",trigger:r.a.createElement(J.a,{color:"green",name:"check circle"})}):null,"Auction"===t.listingType[0]?r.a.createElement(W.a,{content:"Auction",trigger:r.a.createElement(J.a,{color:"blue",name:"gavel"})}):null),r.a.createElement(P.a.Cell,{textAlign:"center"},r.a.createElement(j.a,{onClick:function(){return T(t,e.loggedUser)},color:b.includes(t.id)?"google plus":"twitter",icon:b.includes(t.id)?"heart":"heart outline"})))})):"Sorry No Cards Found"),r.a.createElement(P.a.Footer,null,r.a.createElement(P.a.Row,null,r.a.createElement(P.a.HeaderCell,{colSpan:"7"},r.a.createElement(D.a,{activePage:e.pageOutput.pageNumber,totalPages:Math.floor(e.pageOutput.totalEntries/e.entries),onPageChange:function(t,a){e.fetchData(e.query,a.activePage,e.entries)}}))))))})),ae=a(410),ne=Object(o.b)((function(e){return{notification:e.notification}}))((function(e){var t=e.notification;return t&&r.a.createElement(s.a,null,r.a.createElement(ae.a,null,t))})),re=a(412),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FAVORITES":return t.data;case"REMOVE_FAVORITE":var a=t.data.user;return console.log("Card",t.data.card),console.log("User",t.data.user),console.log("State",e.filter((function(e){return e.id!==t.data.card.id}))),M.removeFav(a.id,t.data.card),e.filter((function(e){return e.id[0]!==t.data.card.id}));default:return e}},ce="/getMultiple";function oe(){return(oe=Object(h.a)(v.a.mark((function e(t){var a,n,r,l,c,o,u,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<21)){e.next=3;break}return n=C.a.get(ce+"?id=".concat(t)),e.abrupt("return",n.then((function(e){return e.data})));case 3:for(r=Object(m.a)(t),console.log("IDS",r),20,l=[];r.length;)c=r.splice(0,20),console.log("Current batch",c),l.push(C.a.get(ce+"?id=".concat(c)));return console.log("Requests",l),e.next=11,Promise.all(l);case 11:return o=e.sent,u=o.map((function(e){return e.data})),i=(a=Array.prototype).concat.apply(a,Object(m.a)(u)),e.abrupt("return",i);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ue={getMultiple:function(e){return oe.apply(this,arguments)}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA":return t.data;default:return e}},se=function(e,t){return function(a){a({type:"SET_NOTIFICATION",data:e}),setTimeout((function(){a({type:"REMOVE_NOTIFICATION",data:null})}),1e3*t)}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return e=t.data;case"REMOVE_NOTIFICATION":return null;default:return e}},fe=a(190);fe().format();var de=function(e){var t=e.favUpdates,a=e.search;return a?t.filter((function(e){return e.title.toString().toLowerCase().includes(a.toLowerCase())})):t},Ee={borderRadius:0,padding:"2em"},ge={searchChange:E,fetchData:N,removeFavorite:function(e,t){return function(){var a=Object(h.a)(v.a.mark((function a(n){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n({type:"REMOVE_FAVORITE",data:{card:e,user:t}});case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},getFavorites:function(e){return function(){var t=Object(h.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.getFavorites(e);case 2:n=t.sent,a({type:"GET_FAVORITES",data:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUpdates:function(e){return function(){var t=Object(h.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ue.getMultiple(e);case 2:n=t.sent,a({type:"GET_DATA",data:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setNotification:se},pe=Object(o.b)((function(e){return{baseball:e.baseball,favorites:e.favorites,favUpdates:e.favUpdates,loggedUser:e.loggedUser,page:e.page,entries:e.entries,query:e.query,pageOutput:e.pageOutput,search:e.search,cardsToShow:de(e)}}),ge)((function(e){Object(n.useEffect)((function(){e.getFavorites(e.loggedUser.id)}),[e.loggedUser]),Object(n.useEffect)((function(){v(e.cardsToShow)}),[e]);var t=e.favorites,a=Array.from(t).map((function(e){return e.id})).map((function(e){return e.join(",")}));console.log("FORMAT FAVS",a),Object(n.useEffect)((function(){e.getUpdates(a)}),[e.favorites]);var l=Object(n.useState)(null),c=Object(f.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(null),s=Object(f.a)(i,2),m=s[0],d=s[1],E=Object(n.useState)(e.cardsToShow),g=Object(f.a)(E,2),b=g[0],v=g[1];console.log("Filtered Data",b);var h=function(e){if(o!==e)return u(e),v($.a.sortBy(b,[e])),void d("ascending");v("title"===e?$.a.sortBy(b.reverse()):$.a.sortBy(b,(function(e){return parseInt(e)})).reverse()),d("ascending"===m?"descending":"ascending")};return e.cardsToShow?r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(_.a,{inverted:!0,color:"blue"},r.a.createElement(re.a,{inverted:!0,color:"grey",size:"medium"},"My Favorites")),r.a.createElement(_.a,null,"Count: ",e.cardsToShow.length),r.a.createElement(P.a,{sortable:!0,celled:!0,fixed:!0,striped:!0},r.a.createElement(P.a.Header,null,r.a.createElement(P.a.Row,null,r.a.createElement(P.a.HeaderCell,{sorted:"title"===o?m:null,onClick:function(){return h("title")}},"Card Title"),r.a.createElement(P.a.HeaderCell,{width:2,textAlign:"center",sorted:"updatedBids"===o?m:null,onClick:function(){return h("updatedBids")}},"# Bids"),r.a.createElement(P.a.HeaderCell,{textAlign:"center",sorted:"updatedPrice"===o?m:null,onClick:function(){return h("updatedPrice")}},"Price"),r.a.createElement(P.a.HeaderCell,{textAlign:"center",sorted:"timeStamp"===o?m:null,onClick:function(){return h("timeStamp")}},"Time Left"),r.a.createElement(P.a.HeaderCell,{textAlign:"center",sorted:"status"===o?m:null,onClick:function(){return h("status")}},"Status"),r.a.createElement(P.a.HeaderCell,{textAlign:"center",width:2},"Remove"))),r.a.createElement(P.a.Body,null,b?b.map((function(t){return r.a.createElement(P.a.Row,{key:t.id},r.a.createElement(W.a,{trigger:r.a.createElement(P.a.Cell,null,r.a.createElement("a",{href:t.itemURL,target:"_blank"},t.title)),content:r.a.createElement("img",{alt:t.title,src:t.image,height:"250"}),style:Ee,size:"small",position:"left center"}),r.a.createElement(P.a.Cell,{textAlign:"center"},t.updatedBids),r.a.createElement(P.a.Cell,{textAlign:"center"},"$",t.updatedPrice),r.a.createElement(P.a.Cell,{textAlign:"center"},fe.duration(t.timeLeft,"minutes").humanize()),r.a.createElement(P.a.Cell,{textAlign:"center"},t.status),r.a.createElement(P.a.Cell,{textAlign:"center"},r.a.createElement(j.a,{onClick:function(){return function(t){e.removeFavorite(t,e.loggedUser),e.setNotification("You removed ".concat(t.title,"!"),5)}(t)},color:"red",icon:"remove circle"})))})):"Sorry No Cards Found"),r.a.createElement(P.a.Footer,null,r.a.createElement(P.a.Row,null,r.a.createElement(P.a.HeaderCell,{colSpan:"6"}))))):null})),be=a(216),ve=a(85),he={logout:q},ke=Object(o.b)((function(e){return{loggedUser:e.loggedUser}}),he)((function(e){return r.a.createElement(be.a,null,r.a.createElement(s.a,null,r.a.createElement(be.a.Item,{header:!0},r.a.createElement(re.a,{as:"h3"},r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{src:"".concat("","/assets/images/all-vintage-search-logo.png"),alt:"All Vintage Search",height:"60px"})))),r.a.createElement(be.a.Menu,{position:"right"},void 0!==e.loggedUser.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(be.a.Item,{link:!0},r.a.createElement(u.b,{to:"/favorites"},"My Favorites")),r.a.createElement(be.a.Item,{link:!0},r.a.createElement("span",null,r.a.createElement("em",null,"Hi ",e.loggedUser.firstName," you're logged in!")," ",r.a.createElement(j.a,{size:"mini",onClick:function(){return e.logout(),r.a.createElement(i.a,{to:"/"})}},"logout")))):r.a.createElement(ve.a,null,r.a.createElement(u.b,{to:"/login"},"login")))))})),Ce=a(217),we=a(405),ye=function(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),r=a[0],l=a[1],c=function(e){l(e.target.value)};return{type:e,value:r,onChange:c,reset:function(){l("")},omitreset:{type:e,value:r,onChange:c}}},Ne={login:G,setNotification:se,logout:q},Te=Object(i.g)((function(e){var t=ye("text"),a=ye("password"),n=function(){var n=Object(h.a)(v.a.mark((function n(r){var l;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,l={username:t.value,password:a.value},n.next=5,e.login(l);case 5:t.reset(),a.reset(),e.history.push("/"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),e.setNotification("Sorry wrong username or password.",5);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}();return void 0!==e.loggedUser.id?r.a.createElement("p",null,"You are currently logged in. Would you like to"," ",r.a.createElement(u.b,{onClick:function(){e.logout()},to:"/"},"logout?")):r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{centered:!0,columns:2},r.a.createElement(Ce.a.Column,null,r.a.createElement(re.a,{as:"h2",textAlign:"center"},r.a.createElement(_.a,null,r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{src:"".concat("","/assets/images/all-vintage-search-logo.png"),alt:"All Vintage Search",height:"60px"})))),r.a.createElement(_.a,null,r.a.createElement(we.a,{onSubmit:n,size:"large"},r.a.createElement(we.a.Input,Object.assign({fluid:!0,icon:"user",iconPosition:"left",placeholder:"Username",id:"username"},t.omitreset)),r.a.createElement(we.a.Input,Object.assign({fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password"},a.omitreset)),r.a.createElement(j.a,{color:"blue",fluid:!0,size:"large"},"Login"))),r.a.createElement(ae.a,null,"Not registered yet? ",r.a.createElement(u.b,{to:"/newuser"},"Sign Up")))))})),Oe=Object(o.b)((function(e){return{notification:e.notification,loggedUser:e.loggedUser}}),Ne)(Te),Be={createUser:function(e){return function(){var t=Object(h.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.create(e);case 2:n=t.sent,a({type:"NEW_USER",data:n}),G(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},login:G,setNotification:se},Se=Object(i.g)((function(e){var t=ye("text"),a=ye("text"),n=ye("text"),l=ye("text"),c=function(){var r=Object(h.a)(v.a.mark((function r(c){var o,u;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c.preventDefault(),o={firstName:t.value,email:a.value,username:n.value,password:l.value},u={username:n.value,password:l.value},r.next=6,e.createUser(o);case 6:return r.next=8,e.login(u);case 8:e.history.push("/"),e.setNotification("You've added a new account!",4),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),console.log("Error",r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Create an All Vintage Search Account"),r.a.createElement(we.a,{onSubmit:c},r.a.createElement(we.a.Field,null,r.a.createElement(we.a.Input,Object.assign({},t,{reset:null,label:"First Name"}))),r.a.createElement(we.a.Field,null,r.a.createElement(we.a.Input,Object.assign({},a,{reset:null,label:"Email"}))),r.a.createElement(we.a.Field,null,r.a.createElement(we.a.Input,Object.assign({},n,{reset:null,label:"Username"}))),r.a.createElement(we.a.Field,null,r.a.createElement(we.a.Input,Object.assign({},l,{reset:null,label:"Password"}))),r.a.createElement(we.a.Button,{type:"submit"},"sign up")))})),xe=Object(o.b)(null,Be)(Se),Ae={initializeBaseball:function(){return function(){var e=Object(h.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:a=e.sent,t({type:"INIT_BLOGS",data:JSON.parse(a.data)}),t({type:"GET_PAGE_OUTPUT",data:JSON.parse(a.pageOutput)});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchUser:function(){return function(e){var t=window.localStorage.getItem("loggedVintageUser"),a=JSON.parse(t);a&&e({type:"SET_USER",data:a})}},setUser:function(e){return function(t){t({type:"SET_USER",data:e})}}},Re=Object(o.b)((function(e){return{baseball:e.baseball,loggedUser:e.loggedUser}}),Ae)((function(e){var t=e.initializeBaseball;return Object(n.useEffect)((function(){t()}),[t]),Object(n.useEffect)((function(){var t=window.localStorage.getItem("loggedVintageUser");if(console.log("LOGGED USER",t),t){var a=JSON.parse(t);e.setUser(a),M.setToken(a.token)}}),[]),r.a.createElement(s.a,null,r.a.createElement(ne,null),r.a.createElement(u.a,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(ke,null),r.a.createElement(te,null)),r.a.createElement(i.b,{exact:!0,path:"/login"},r.a.createElement(Oe,null)),r.a.createElement(i.b,{exact:!0,path:"/favorites"},void 0!==e.loggedUser.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null),r.a.createElement(pe,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null),r.a.createElement(te,null))),r.a.createElement(i.b,{exact:!0,path:"/newuser"},r.a.createElement(xe,null))),r.a.createElement("div",null,r.a.createElement("br",null)))})),je=a(57),Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_PAGE":return t.data;default:return e}},Ie={entriesPerPage:10,pageNumber:1,totalPages:1,totalEntries:10},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PAGE_OUTPUT":return t.data;default:return e}},_e=a(213),Pe=a(214),We=Object(je.combineReducers)({baseball:T,entries:O,page:Ue,pageOutput:Fe,search:g,query:U,loggedUser:Y,users:z,notification:me,favorites:le,favUpdates:ie}),Je=Object(je.createStore)(We,Object(Pe.composeWithDevTools)(Object(je.applyMiddleware)(_e.a))),De=function(){c.a.render(r.a.createElement(o.a,{store:Je},r.a.createElement(Re,null)),document.getElementById("root"))};De(),Je.subscribe(De)}},[[228,1,2]]]);
//# sourceMappingURL=main.e15ba79f.chunk.js.map