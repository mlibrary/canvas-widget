(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},31:function(e,a,t){e.exports=t(67)},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(22),l=t.n(i),c=(t(16),t(23)),o=t(24),s=t(29),h=t(25),u=t(30),d=t(26),m=t.n(d),v=t(5),b=t.n(v),f=t(11),g=t.n(f),y=t(7),p=t.n(y),E=t(10),w=function(){return r.a.createElement("svg",{className:"library-logo-svg",viewBox:"0 0 954 144",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},r.a.createElement("defs",null,r.a.createElement("polygon",{id:"b",points:"0 143.94 0 0 953.94 0 953.94 143.94"})),r.a.createElement("g",{fill:"none",fillRule:"evenodd"},r.a.createElement("mask",{id:"a",fill:"#fff"},r.a.createElement("use",{xlinkHref:"#b"})),r.a.createElement("polyline",{points:"100.6 118.77 59.392 62.459 59.392 103.42 75.776 103.42 75.776 143.87 0 143.87 0 103.42 15.354 103.42 15.354 40.443 0 40.443 0 0 59.525 0 100.6 56.719 141.66 0 201.18 0 201.18 40.443 185.81 40.443 185.81 103.42 201.18 103.42 201.18 143.87 125.41 143.87 125.41 103.42 141.78 103.42 141.78 62.459 100.6 118.77",fill:"#EBBF28",mask:"url(#a)"}),r.a.createElement("polyline",{points:"281.5 144 281.5 0.202 299.82 0.202 299.82 128.07 352.6 128.07 352.6 144 281.5 144",fill:"#131D33",mask:"url(#a)"}),r.a.createElement("polygon",{points:"374.19 143.94 392.51 143.94 392.51 0.202 374.19 0.202",fill:"#131D33",mask:"url(#a)"}),r.a.createElement("path",{d:"m436.95 128.07h25.892c19.517 0 26.494-13.944 26.494-24.494 0-22.908-14.147-26.891-32.862-26.891h-19.524v51.385zm0-67.32h26.692c14.334-0.2 21.314-8.959 21.314-22.902 0-11.949-6.78-21.71-22.114-21.71h-25.892v44.612zm-18.323 83.253v-143.8h46.808c19.916 0 26.686 6.77 32.062 14.74 4.986 7.768 5.78 16.334 5.78 19.117 0 17.925-6.173 29.88-24.699 34.058v1c20.52 2.39 29.478 14.737 29.478 34.456 0 36.844-26.889 40.427-43.221 40.427h-46.208z",fill:"#131D33",mask:"url(#a)"}),r.a.createElement("path",{d:"m546.11 61.943h27.494c13.148 0 19.521-11.352 19.521-23.903 0-10.354-5.192-21.905-19.329-21.905h-27.686v45.808zm0 15.935v66.122h-18.318v-143.8h49.595c25.494 0 34.449 17.929 34.449 35.851 0 16.928-9.359 29.874-26.292 32.863v0.396c16.526 2.59 22.499 8.166 23.505 37.042 0.202 6.175 2.189 28.682 4.988 37.646h-19.12c-5.186-9.958-3.995-28.677-5.586-47.799-1.398-17.525-15.535-18.323-21.7-18.323h-21.521z",fill:"#131D33",mask:"url(#a)"}),r.a.createElement("path",{d:"m687.23 17.125h-0.4l-22.507 76.686h46.024l-23.117-76.686zm-11.16-16.923h23.307l46.811 143.8h-20.517l-10.351-34.262h-55.567l-10.76 34.262h-18.519l45.596-143.8z",fill:"#131D33",mask:"url(#a)"}),r.a.createElement("path",{d:"m782.3 61.943h27.484c13.141 0 19.51-11.352 19.51-23.903 0-10.354-5.174-21.905-19.313-21.905h-27.681v45.808zm0 15.935v66.122h-18.333v-143.8h49.595c25.488 0 34.459 17.929 34.459 35.851 0 16.928-9.362 29.874-26.294 32.863v0.396c16.53 2.59 22.504 8.166 23.497 37.042 0.214 6.175 2.201 28.682 4.982 37.646h-19.122c-5.172-9.958-3.972-28.677-5.569-47.799-1.395-17.525-15.534-18.323-21.707-18.323h-21.508z",fill:"#131D33",mask:"url(#a)"}),r.a.createElement("polyline",{points:"935.42 0.202 953.94 0.202 914.7 89.231 914.7 144 896.37 144 896.37 89.231 857.74 0.202 878.25 0.202 906.34 69.709 935.42 0.202",fill:"#131D33",mask:"url(#a)"}),r.a.createElement("polygon",{points:"239.54 143.94 242.07 143.94 242.07 0 239.54 0",fill:"#131D33",mask:"url(#a)"})))},S=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={librarySearchQuery:"",libGuideQuery:""},t.handleLibrarySearchQueryChange=function(e){t.setState({librarySearchQuery:e.target.value})},t.handleLibrarySearchSubmit=function(e){0===t.state.librarySearchQuery.length?(e.preventDefault(),t.setState({librarySearchInvalidText:"Enter a query to search."})):t.setState({librarySearchInvalidText:void 0})},t.handleLibGuideQueryChange=function(e){t.setState({libGuideQuery:e.target.value})},t.handleLibGuideSubmit=function(e){0===t.state.libGuideQuery.length?(e.preventDefault(),t.setState({libGuideInvalidText:"Enter a query to search."})):t.setState({libGuideInvalidText:void 0})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state,a=e.librarySearchQuery,t=e.libGuideQuery,n=e.librarySearchInvalidText,i=e.libGuideInvalidText,l=!!n,c=!!i;return r.a.createElement("div",{className:"canvas-widget-app"},r.a.createElement("header",{role:"banner",className:"canvas-widget-app__header"},r.a.createElement("a",{href:"https://lib.umich.edu/"},r.a.createElement(w,null)),r.a.createElement(m.a,null)),r.a.createElement("main",{role:"main","aria-labelledby":"library-canvas-widget"},r.a.createElement(E.default,null,r.a.createElement(p.a,{id:"library-canvas-widget",size:"xlarge",level:1},"Library Canvas Widget")),r.a.createElement("form",{action:"https://search.lib.umich.edu/everything",method:"get",className:"y-spacing",role:"search",onSubmit:this.handleLibrarySearchSubmit},r.a.createElement(p.a,{size:"medium",level:2},"Library Everything Search"),r.a.createElement("p",{className:"text"},"See results from the U-M Library catalog, articles, databases, online journals, and the library website."),r.a.createElement("div",{className:"x-spacing layout-flex layout-flex-start"},r.a.createElement(g.a,{id:"library-search",labelText:"Library Everything Search",hideLabel:!0,value:a,invalid:l,invalidText:n,name:"query",onChange:this.handleLibrarySearchQueryChange}),r.a.createElement(b.a,{type:"submit"},"Search"))),r.a.createElement("form",{action:"https://guides.lib.umich.edu/srch.php",method:"get",className:"y-spacing",role:"search",onSubmit:this.handleLibGuideSubmit},r.a.createElement(p.a,{size:"medium",level:2},"Research Guides Search"),r.a.createElement("p",{className:"text"},"Find research resources and help guides created by experts from U-M Library (Ann Arbor)."),r.a.createElement("div",{className:"x-spacing layout-flex layout-flex-start"},r.a.createElement(g.a,{id:"research-guides-search",labelText:"Research Guides Search",hideLabel:!0,value:t,invalid:c,invalidText:i,onChange:this.handleLibGuideQueryChange,name:"q"}),r.a.createElement(b.a,{type:"submit"},"Search")))))}}]),a}(n.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(S,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/canvas-widget",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/canvas-widget","/service-worker.js");x?(function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(e)})}}()}},[[31,2,1]]]);
//# sourceMappingURL=main.060802df.chunk.js.map