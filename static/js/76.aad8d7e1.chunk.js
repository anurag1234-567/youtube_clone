"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[76],{463:(s,e,a)=>{a.d(e,{A:()=>t});var i=a(475),c=a(579);const t=s=>{let{sidebar:e}=s;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:e?"sidebar active":"sidebar",children:[(0,c.jsxs)(i.k2,{exact:!0,to:"/",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon1.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon1-d.svg",alt:"",className:"dark-icon"})," Home"]}),(0,c.jsxs)(i.k2,{to:"/shorts",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon2.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon2-d.svg",alt:"",className:"dark-icon"})," Shorts"]}),(0,c.jsxs)("div",{className:"explore-items",children:[(0,c.jsx)("p",{className:"title",children:"Explore"}),(0,c.jsxs)(i.k2,{to:"/trending",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon4.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon4-d.svg",alt:"",className:"dark-icon"})," Trending"]}),(0,c.jsxs)(i.k2,{to:"/category/26",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon5.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon5-d.svg",alt:"",className:"dark-icon"})," Shopping"]}),(0,c.jsxs)(i.k2,{to:"/category/10",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon6.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon6-d.svg",alt:"",className:"dark-icon"})," Music"]}),(0,c.jsxs)(i.k2,{to:"/category/25",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon7.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon7-d.svg",alt:"",className:"dark-icon"})," News"]}),(0,c.jsxs)(i.k2,{to:"/category/17",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon8.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon8-d.svg",alt:"",className:"dark-icon"})," Sports"]}),(0,c.jsxs)(i.k2,{to:"/category/28",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon9.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon9-d.svg",alt:"",className:"dark-icon"})," Learning"]})]})]}),(0,c.jsx)("div",{className:"overlay"})]})}},76:(s,e,a)=>{a.r(e),a.d(e,{default:()=>o});var i=a(43),c=a(463),t=a(154),l=a(579);const o=s=>{let{sidebar:e}=s;const[a,o]=(0,i.useState)([]),[n,r]=(0,i.useState)(null),m=(0,i.useRef)(null),[g,d]=(0,i.useState)(!0);(0,i.useEffect)((()=>{(async()=>{try{const s="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=shorts&regionCode=IN&relevanceLanguage=hi&key=".concat("AIzaSyAb71WqTsBg3ALaULi3TeTF4PO8kfn7IS4"),e=await t.A.get(s);d(!1),o(e.data.items),r(e.data.items[0].id.videoId),console.log(e.data.items)}catch(s){console.log(s),alert("error")}})()}),[]);return(0,l.jsxs)("div",{className:"main",children:[(0,l.jsx)(c.A,{sidebar:e}),(0,l.jsx)("div",{className:"shorts-wrp",ref:m,onScroll:()=>{const s=m.current,e=document.querySelectorAll(".shorts")[0].clientHeight,i=s.scrollTop,c=Math.floor((i+50)/e);r(a[c].id.videoId),console.log("done")},children:g?(0,l.jsx)("p",{children:"Loading..."}):a.map(((s,e)=>(0,l.jsx)("div",{className:"shorts",children:n===s.id.videoId?(0,l.jsx)("iframe",{className:"video",src:"https://www.youtube.com/embed/".concat(s.id.videoId,"?autoplay=1"),title:s.snippet.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):(0,l.jsx)("img",{src:s.snippet.thumbnails.high.url,alt:""})},e)))})]})}}}]);
//# sourceMappingURL=76.aad8d7e1.chunk.js.map