(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),i=n("Bl7J"),r=n("lZQB");t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(r.a,null))}},lZQB:function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),i=n("Wbzz"),r=n("vOnD"),l=r.b.li.withConfig({displayName:"PostListItem__Post",componentId:"xleytv-0"})(["display:flex;border-bottom:1px dotted #252526;padding:2rem 1rem;&:hover{background-color:#252526;h2{color:#68b8ee;}time{color:#68b8ee;}}@media only screen and (max-width:767px){flex-direction:column;}"]),d=Object(r.b)(i.Link).withConfig({displayName:"PostListItem__PostLink",componentId:"xleytv-1"})(["flex-grow:1;"]),c=r.b.h2.withConfig({displayName:"PostListItem__PostTitle",componentId:"xleytv-2"})(["font-size:3rem;padding:0 0 1rem;"]),m=r.b.p.withConfig({displayName:"PostListItem__PostDesc",componentId:"xleytv-3"})(["font-size:2.4rem;line-height:3rem;"]),s=r.b.div.withConfig({displayName:"PostListItem__PostInfo",componentId:"xleytv-4"})(["display:flex;flex-direction:column;font-size:1.2rem;text-align:right;@media only screen and (max-width:767px){flex-direction:row;justify-content:space-between;align-items:center;text-align:left;padding-top:1rem;}"]),p=r.b.time.withConfig({displayName:"PostListItem__PostTime",componentId:"xleytv-5"})(["width:100px;font-size:1.8rem;padding-bottom:1rem;@media only screen and (max-width:767px){padding:0;}"]),f=r.b.div.withConfig({displayName:"PostListItem__PostTag",componentId:"xleytv-6"})(["font-size:1.4rem;p{display:inline-block;color:",";background-color:",";border-radius:0.4rem;padding:1rem;}"],(function(e){return e.type.color}),(function(e){return e.type.background})),u={Code:{background:"#222222",color:"#fafbfc"},Blog:{background:"#f57d00",color:"#1a1a1a"},Games:{background:"#6441a4",color:"#fafbfc"},Movies:{background:"#f5c518",color:"#1a1a1a"}},g=function(e){return a.a.createElement(l,null,a.a.createElement(d,{to:e.post.fields.slug},a.a.createElement(c,null,e.post.frontmatter.title),a.a.createElement(m,null,e.post.excerpt)),a.a.createElement(s,null,a.a.createElement(p,{datetime:e.post.frontmatter.date},e.post.frontmatter.date),a.a.createElement(f,{type:u[e.post.frontmatter.tag]},a.a.createElement("p",null,e.post.frontmatter.tag))))},b=r.b.ol.withConfig({displayName:"PostList__Wrapper",componentId:"sc-1vfqdo3-0"})(["list-style:none;padding:0;"]);t.a=function(){return a.a.createElement(i.StaticQuery,{query:"1612526021",render:function(e){return a.a.createElement(b,null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return a.a.createElement(g,{key:t.id,post:t})})))}})}}}]);
//# sourceMappingURL=component---src-pages-index-js-2d6c8d6070906282ca34.js.map