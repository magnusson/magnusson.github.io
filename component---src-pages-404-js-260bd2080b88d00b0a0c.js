(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(153),r=n(160),l=n(150),d=l.b.h2.withConfig({displayName:"sc-404__Title",componentId:"xz8l1l-0"})(["font-size:3rem;padding:1rem;"]),c=l.b.p.withConfig({displayName:"sc-404__Content",componentId:"xz8l1l-1"})(["font-size:2rem;line-height:2.4rem;padding:1rem;"]);t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(d,null,"Not found"," ",o.a.createElement("span",{role:"img","aria-label":"Fearful"},"😨")),o.a.createElement(c,null,"This should not happen, go read one of the working posts instead."," ",o.a.createElement("span",{role:"img","aria-label":"Backhand Index Pointing Down"},"👇")),o.a.createElement(r.a,null))}},151:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=n(32),d=n.n(l);n.d(t,"a",function(){return d.a});n(152);var c=o.a.createContext({}),s=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},152:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},153:function(e,t,n){"use strict";var a=n(158),o=n.n(a),i=n(154),r=n(0),l=n.n(r),d=n(157),c=n.n(d),s=n(151),m=n(156),u=n.n(m),f=n(150);function p(){var e=o()(['\n  html {\n    box-sizing: border-box;\n    background-color: #1a1a1a;\n    font-size: 62.5%;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: "Oxygen", sans-serif;\n    color: #fafbfc;\n  }\n\n  a {\n    color: #fafbfc;\n    text-decoration: none;\n  }\n\n  iframe {\n    border: none;\n  }\n']);return p=function(){return e},e}var g=Object(f.a)(p()),h=f.b.main.withConfig({displayName:"layout__Main",componentId:"sc-1q48o6v-0"})(["width:85%;max-width:825px;margin:4em auto;"]);t.a=function(e){var t=e.children;return l.a.createElement(s.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"A simple personal place on the web"}],link:[{rel:"shortcut icon",type:"image/png",href:""+u.a}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(h,null,t),l.a.createElement(g,null))},data:i})}},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Rickard Magnusson"}}}}},155:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=n(54),d=n(2),c=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,n){e.exports=n.p+"static/favicon-7741141cfe083d8463d9e7ab94948a32.png"},159:function(e){e.exports={data:{allMarkdownRemark:{totalCount:4,edges:[{node:{id:"b751aa52-ca28-5791-98be-05c55607c96f",frontmatter:{title:"What Remains of Edith Finch",date:"2019-03-02",tag:"Games"},fields:{slug:"/what-remains-of-edith-finch/"},excerpt:"I just have to recommend this game. It's a short story driven…"}},{node:{id:"8dcc4897-982f-52ba-9c03-81a89018d5c8",frontmatter:{title:"Furi",date:"2019-02-24",tag:"Games"},fields:{slug:"/furi/"},excerpt:"Just finished playing through the campaign of this game. And…"}},{node:{id:"3a94b5d3-2414-583c-b8ec-732d7a5ca1dc",frontmatter:{title:"Mega Man Legacy",date:"2019-01-16",tag:"Games"},fields:{slug:"/mega-man-legacy/"},excerpt:"Recently I've had an urge to play some of the older retro games…"}},{node:{id:"7165b4fd-b120-5bc6-b3f2-c9416e43291c",frontmatter:{title:"Hello World",date:"2019-01-15",tag:"Blog"},fields:{slug:"/hello-world/"},excerpt:"Just making a quick post to get this site up and running. I will…"}}]}}}},160:function(e,t,n){"use strict";var a=n(159),o=n(0),i=n.n(o),r=n(151),l=n(150),d=l.b.li.withConfig({displayName:"PostListItem__Post",componentId:"xleytv-0"})(["display:flex;border-bottom:1px dotted #252526;padding:2rem 1rem;&:hover{background-color:#252526;h2{color:#0e639c;}time{color:#0e639c;}}@media only screen and (max-width:767px){flex-direction:column;}"]),c=Object(l.b)(r.a).withConfig({displayName:"PostListItem__PostLink",componentId:"xleytv-1"})(["flex-grow:1;"]),s=l.b.h2.withConfig({displayName:"PostListItem__PostTitle",componentId:"xleytv-2"})(["font-size:3rem;padding:1rem 0;"]),m=l.b.p.withConfig({displayName:"PostListItem__PostDesc",componentId:"xleytv-3"})(["font-size:2.4rem;line-height:3rem;"]),u=l.b.div.withConfig({displayName:"PostListItem__PostInfo",componentId:"xleytv-4"})(["display:flex;flex-direction:column;font-size:1.2rem;text-align:right;@media only screen and (max-width:767px){flex-direction:row;justify-content:space-between;align-items:center;text-align:left;padding-top:1rem;}"]),f=l.b.time.withConfig({displayName:"PostListItem__PostTime",componentId:"xleytv-5"})(["width:100px;font-size:1.8rem;padding-bottom:1rem;@media only screen and (max-width:767px){padding:0;}"]),p=l.b.div.withConfig({displayName:"PostListItem__PostTag",componentId:"xleytv-6"})(["font-size:1.4rem;p{display:inline-block;background-color:#68217a;border-radius:0.4rem;padding:1rem;}"]),g=function(e){return i.a.createElement(d,null,i.a.createElement(c,{to:e.post.fields.slug},i.a.createElement(s,null,e.post.frontmatter.title),i.a.createElement(m,null,e.post.excerpt)),i.a.createElement(u,null,i.a.createElement(f,{datetime:e.post.frontmatter.date},e.post.frontmatter.date),i.a.createElement(p,null,i.a.createElement("p",null,e.post.frontmatter.tag))))},h=l.b.ol.withConfig({displayName:"PostList__Wrapper",componentId:"sc-1vfqdo3-0"})(["list-style:none;padding:0;"]);t.a=function(){return i.a.createElement(r.b,{query:"3857981134",render:function(e){return i.a.createElement(h,null,e.allMarkdownRemark.edges.map(function(e){var t=e.node;return i.a.createElement(g,{key:t.id,post:t})}))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-404-js-260bd2080b88d00b0a0c.js.map