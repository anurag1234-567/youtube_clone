"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[271],{463:(s,e,a)=>{a.d(e,{A:()=>t});var i=a(475),c=a(579);const t=s=>{let{sidebar:e}=s;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:e?"sidebar active":"sidebar",children:[(0,c.jsxs)(i.k2,{exact:!0,to:"/",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon1.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon1-d.svg",alt:"",className:"dark-icon"})," Home"]}),(0,c.jsxs)(i.k2,{to:"/shorts",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon2.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon2-d.svg",alt:"",className:"dark-icon"})," Shorts"]}),(0,c.jsxs)("div",{className:"explore-items",children:[(0,c.jsx)("p",{className:"title",children:"Explore"}),(0,c.jsxs)(i.k2,{to:"/trending",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon4.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon4-d.svg",alt:"",className:"dark-icon"})," Trending"]}),(0,c.jsxs)(i.k2,{to:"/category/26",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon5.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon5-d.svg",alt:"",className:"dark-icon"})," Shopping"]}),(0,c.jsxs)(i.k2,{to:"/category/10",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon6.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon6-d.svg",alt:"",className:"dark-icon"})," Music"]}),(0,c.jsxs)(i.k2,{to:"/category/25",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon7.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon7-d.svg",alt:"",className:"dark-icon"})," News"]}),(0,c.jsxs)(i.k2,{to:"/category/17",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon8.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon8-d.svg",alt:"",className:"dark-icon"})," Sports"]}),(0,c.jsxs)(i.k2,{to:"/category/28",className:"list-item",children:[(0,c.jsx)("img",{src:"/youtube_clone/images/icon9.svg",alt:"",className:"light-icon"}),(0,c.jsx)("img",{src:"/youtube_clone/images/icon9-d.svg",alt:"",className:"dark-icon"})," Learning"]})]})]}),(0,c.jsx)("div",{className:"overlay"})]})}},271:(s,e,a)=>{a.r(e),a.d(e,{default:()=>m});var i=a(43),c=a(475),t=a(216),o=a(463),l=a(969),n=a(154),r=a(579);const m=s=>{let{sidebar:e}=s;const[a,m]=(0,i.useState)([]),[g]=(0,c.ok)(),d=g.get("q"),u=(0,t.Zp)();return(0,i.useEffect)((()=>{(async()=>{if(d){console.log("called");try{const s="AIzaSyAb71WqTsBg3ALaULi3TeTF4PO8kfn7IS4";let e="https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=48&q=".concat(d,"&regionCode=IN&relevanceLanguage=hi&key=").concat(s);const a=await n.A.get(e),i=a.data.items.map((s=>s.id.videoId)).join(",");e="https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=".concat(i,"&key=").concat(s);const c=await n.A.get(e);m(c.data.items)}catch(s){console.log(s),alert("Error fetching video data")}}})()}),[d]),(0,r.jsxs)("div",{className:"main",children:[(0,r.jsx)(o.A,{sidebar:e}),(0,r.jsx)("div",{className:"content",children:a.length>0&&a.map(((s,e)=>(0,r.jsxs)("div",{className:"video",onClick:()=>{u("/watch/v/".concat(s.id))},children:[(0,r.jsxs)("div",{className:"img-wrp",children:[(0,r.jsx)("img",{src:s.snippet.thumbnails.medium.url,alt:""}),(0,r.jsx)("span",{className:"duration",children:(0,l.a3)(s.contentDetails.duration)})]}),(0,r.jsxs)("div",{className:"description",children:[(0,r.jsx)("p",{className:"title",children:s.snippet.title}),(0,r.jsx)("p",{className:"channel_name",children:s.snippet.channelTitle}),(0,r.jsxs)("p",{className:"rating",children:[(0,l.B4)(s.statistics.viewCount)," views \u2022 ",(0,l.Yq)(s.snippet.publishedAt)]})]})]},e)))})]})}},969:(s,e,a)=>{a.d(e,{B4:()=>t,Yq:()=>o,a3:()=>l});var i=a(178),c=a.n(i);const t=s=>s?s>1e6?(s/1e6).toFixed(1)+"M":s>1e3?(s/1e3).toFixed(1)+"K":0===s?"":s.toString():"",o=s=>c()(s).fromNow(),l=s=>{const e=c().duration(s);let a;return a=e.asHours()>=1?c().utc(e.asMilliseconds()).format("H:mm:ss"):c().utc(e.asMilliseconds()).format("m:ss"),a}}}]);
//# sourceMappingURL=271.5adcc870.chunk.js.map