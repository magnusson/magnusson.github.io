"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[883],{9777:function(e,t,n){n.d(t,{Z:function(){return h}});var o=n(7294),a=n(1597),l=n(9),i=l.default.li.withConfig({displayName:"PostListItem__Post",componentId:"sc-xleytv-0"})(["display:flex;border-bottom:1px dotted #252526;padding:2rem 1rem;&:hover{background-color:#252526;h2{color:#68b8ee;}time{color:#68b8ee;}}@media only screen and (max-width:767px){flex-direction:column;}"]),r=(0,l.default)(a.Link).withConfig({displayName:"PostListItem__PostLink",componentId:"sc-xleytv-1"})(["flex-grow:1;"]),d=l.default.h2.withConfig({displayName:"PostListItem__PostTitle",componentId:"sc-xleytv-2"})(["font-size:3rem;padding:0 0 1rem;"]),s=l.default.p.withConfig({displayName:"PostListItem__PostDesc",componentId:"sc-xleytv-3"})(["font-size:2.4rem;line-height:3rem;"]),m=l.default.div.withConfig({displayName:"PostListItem__PostInfo",componentId:"sc-xleytv-4"})(["display:flex;flex-direction:column;font-size:1.2rem;text-align:right;@media only screen and (max-width:767px){flex-direction:row;justify-content:space-between;align-items:center;text-align:left;padding-top:1rem;}"]),c=l.default.time.withConfig({displayName:"PostListItem__PostTime",componentId:"sc-xleytv-5"})(["width:100px;font-size:1.8rem;padding-bottom:1rem;@media only screen and (max-width:767px){padding:0;}"]),f=l.default.div.withConfig({displayName:"PostListItem__PostTag",componentId:"sc-xleytv-6"})(["font-size:1.4rem;p{display:inline-block;border-radius:0.4rem;padding:1rem;}"]),p={Code:{background:"#222222",color:"#fafbfc"},Blog:{background:"#f57d00",color:"#1a1a1a"},Games:{background:"#6441a4",color:"#fafbfc"},Movies:{background:"#f5c518",color:"#1a1a1a"}},u=function(e){return o.createElement(i,null,o.createElement(r,{to:e.post.fields.slug},o.createElement(d,null,e.post.frontmatter.title),o.createElement(s,null,e.post.excerpt)),o.createElement(m,null,o.createElement(c,{datetime:e.post.frontmatter.date},e.post.frontmatter.date),o.createElement(f,null,o.createElement("p",{style:{backgroundColor:p[e.post.frontmatter.tag].background,color:p[e.post.frontmatter.tag].color}},e.post.frontmatter.tag))))},g=l.default.ol.withConfig({displayName:"PostList__Wrapper",componentId:"sc-1vfqdo3-0"})(["list-style:none;padding:0;"]),h=function(){return o.createElement(a.StaticQuery,{query:"1612526021",render:function(e){return o.createElement(g,null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return o.createElement(u,{key:t.id,post:t})})))}})}},429:function(e,t,n){n.r(t);var o=n(7294),a=n(2868),l=n(9777),i=n(9),r=i.default.h2.withConfig({displayName:"sc-404__Title",componentId:"sc-xz8l1l-0"})(["font-size:3rem;padding:1rem;"]),d=i.default.p.withConfig({displayName:"sc-404__Content",componentId:"sc-xz8l1l-1"})(["font-size:2rem;line-height:2.4rem;padding:1rem;"]);t.default=function(){return o.createElement(a.Z,null,o.createElement(r,null,"Not found"," ",o.createElement("span",{role:"img","aria-label":"Fearful"},"😨")),o.createElement(d,null,"This should not happen, go read one of the working posts instead."," ",o.createElement("span",{role:"img","aria-label":"Backhand Index Pointing Down"},"👇")),o.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-404-js-df5c83cb49f6a776f9bd.js.map