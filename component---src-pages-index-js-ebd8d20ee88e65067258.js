(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=a("Bl7J"),d=a("lZQB");t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(d.a,null))}},lZQB:function(e,t,a){"use strict";var n=a("x7DL"),o=a("q1tI"),i=a.n(o),d=a("Wbzz"),r=a("vOnD"),l=r.b.li.withConfig({displayName:"PostListItem__Post",componentId:"xleytv-0"})(["display:flex;border-bottom:1px dotted #252526;padding:2rem 1rem;&:hover{background-color:#252526;h2{color:#68b8ee;}time{color:#68b8ee;}}@media only screen and (max-width:767px){flex-direction:column;}"]),s=Object(r.b)(d.Link).withConfig({displayName:"PostListItem__PostLink",componentId:"xleytv-1"})(["flex-grow:1;"]),c=r.b.h2.withConfig({displayName:"PostListItem__PostTitle",componentId:"xleytv-2"})(["font-size:3rem;padding:0 0 1rem;"]),m=r.b.p.withConfig({displayName:"PostListItem__PostDesc",componentId:"xleytv-3"})(["font-size:2.4rem;line-height:3rem;"]),f=r.b.div.withConfig({displayName:"PostListItem__PostInfo",componentId:"xleytv-4"})(["display:flex;flex-direction:column;font-size:1.2rem;text-align:right;@media only screen and (max-width:767px){flex-direction:row;justify-content:space-between;align-items:center;text-align:left;padding-top:1rem;}"]),p=r.b.time.withConfig({displayName:"PostListItem__PostTime",componentId:"xleytv-5"})(["width:100px;font-size:1.8rem;padding-bottom:1rem;@media only screen and (max-width:767px){padding:0;}"]),g=r.b.div.withConfig({displayName:"PostListItem__PostTag",componentId:"xleytv-6"})(["font-size:1.4rem;p{display:inline-block;color:",";background-color:",";border-radius:0.4rem;padding:1rem;}"],(function(e){return e.type.color}),(function(e){return e.type.background})),u={Code:{background:"#222222",color:"#fafbfc"},Blog:{background:"#f57d00",color:"#1a1a1a"},Games:{background:"#6441a4",color:"#fafbfc"},Movies:{background:"#f5c518",color:"#1a1a1a"}},b=function(e){return i.a.createElement(l,null,i.a.createElement(s,{to:e.post.fields.slug},i.a.createElement(c,null,e.post.frontmatter.title),i.a.createElement(m,null,e.post.excerpt)),i.a.createElement(f,null,i.a.createElement(p,{datetime:e.post.frontmatter.date},e.post.frontmatter.date),i.a.createElement(g,{type:u[e.post.frontmatter.tag]},i.a.createElement("p",null,e.post.frontmatter.tag))))},h=r.b.ol.withConfig({displayName:"PostList__Wrapper",componentId:"sc-1vfqdo3-0"})(["list-style:none;padding:0;"]);t.a=function(){return i.a.createElement(d.StaticQuery,{query:"3857981134",render:function(e){return i.a.createElement(h,null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return i.a.createElement(b,{key:t.id,post:t})})))},data:n})}},x7DL:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"totalCount":10,"edges":[{"node":{"id":"62a0478a-16b0-51ae-a5ab-92da72edf65c","frontmatter":{"title":"Internet Identity 🕵️‍","date":"2019-12-10","tag":"Blog"},"fields":{"slug":"/internet-identity/"},"excerpt":"Having an consistent username on platforms is something I value…"}},{"node":{"id":"44d5c5f3-76a4-5979-a2fc-4513dd3a9cc7","frontmatter":{"title":"Development News 👨‍💻","date":"2019-07-31","tag":"Code"},"fields":{"slug":"/development-news/"},"excerpt":"Keeping up with development is tricky. There is always the new…"}},{"node":{"id":"e8180d44-1f99-5b85-a140-42f235e98f4d","frontmatter":{"title":"Underlords 🎰","date":"2019-06-29","tag":"Games"},"fields":{"slug":"/underlords/"},"excerpt":"I\'m not a Dota player and I think because of this I did not see…"}},{"node":{"id":"19dac355-688d-510e-b1e7-6c8d3e833f16","frontmatter":{"title":"Klunsa ✊✋✌","date":"2019-05-30","tag":"Code"},"fields":{"slug":"/klunsa/"},"excerpt":"I\'ve been coding a rock paper scissor game and wanted to write a…"}},{"node":{"id":"89a1f2ef-987c-5592-a05f-ae11cff4406f","frontmatter":{"title":"Big Eyes 👀","date":"2019-04-23","tag":"Movies"},"fields":{"slug":"/big-eyes/"},"excerpt":"I am a fan of most of Tim Burtons movies and just wanted to…"}},{"node":{"id":"3eaa9cb7-7a98-59a0-b0f9-453edfa9bfc8","frontmatter":{"title":"Developer Podcasts 🎧","date":"2019-03-27","tag":"Code"},"fields":{"slug":"/developer-podcast/"},"excerpt":"I often listen to podcasts on my commute to work. So I thought I…"}},{"node":{"id":"b751aa52-ca28-5791-98be-05c55607c96f","frontmatter":{"title":"What Remains of Edith Finch 💭","date":"2019-03-02","tag":"Games"},"fields":{"slug":"/what-remains-of-edith-finch/"},"excerpt":"I just have to recommend this game. It\'s a short story driven…"}},{"node":{"id":"8dcc4897-982f-52ba-9c03-81a89018d5c8","frontmatter":{"title":"Furi 🗡️","date":"2019-02-24","tag":"Games"},"fields":{"slug":"/furi/"},"excerpt":"Just finished playing through the campaign of this game. And…"}},{"node":{"id":"3a94b5d3-2414-583c-b8ec-732d7a5ca1dc","frontmatter":{"title":"Mega Man Legacy 🕹️","date":"2019-01-16","tag":"Games"},"fields":{"slug":"/mega-man-legacy/"},"excerpt":"Recently I\'ve had an urge to play some of the older retro games…"}},{"node":{"id":"7165b4fd-b120-5bc6-b3f2-c9416e43291c","frontmatter":{"title":"Hello World 👋","date":"2019-01-15","tag":"Blog"},"fields":{"slug":"/hello-world/"},"excerpt":"Just making a quick post to get this site up and running. I will…"}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-ebd8d20ee88e65067258.js.map