import{L as D,o as V,v as o,M as v,N as y,O as p,r as d,t as i,x as _,y as L}from"./iliRiO3Q.js";import{s as a}from"./CUJHAJLH.js";import{u as I}from"./DdmcDBKK.js";const b={class:"index_container"},A=["id"],N={class:"sort_itemBox"},O=["onClick"],j=["src"],C={key:1,class:"item_icon"},M={class:"item_siteName"},H={__name:"[sort]",setup(E){const n=I(),k=t=>{window.open(t.siteUrl)},m=D(),{channel:x,sort:T}=m.params,h=Object.values(a[x]),S=()=>{const t=d([]);return{sortBoxRefList:t,getSortBoxRefList:s=>{s&&t.value.push(s.children[0])}}},{sortBoxRefList:f,getSortBoxRefList:R}=S(),w=()=>{const t=d(null),l=()=>{t.value=document.querySelector(".layout_view"),t.value&&t.value.addEventListener("scroll",s)},s=c=>{for(let e=0;e<f.value.length;e++)if(f.value[e].offsetTop>c.target.scrollTop){let u=Object.keys(r.value||{});n.setAsideSelIndex(u[e]);return}};return{layoutViewRef:t,initLayoutViewRef:l,onLayoutViewScroll:s}},{layoutViewRef:U,initLayoutViewRef:B,onLayoutViewScroll:q}=w(),g=()=>({asideDatalist:d(n.asideDatalist)}),{asideDatalist:r}=g();return V(()=>{if(B(),!r.value){let t=Object.keys(a)[0];n.setAsideDatalist(a[t]),r.value=a.UIDesign}}),(t,l)=>(i(),o("div",b,[(i(!0),o(v,null,y(p(h),(s,c)=>(i(),o("div",{ref_for:!0,ref:p(R),key:c,class:"sort_box"},[_("div",{class:"sort_title",id:s.route},L(s.title),9,A),_("div",N,[(i(!0),o(v,null,y(s.list,(e,u)=>(i(),o("div",{key:u,class:"sort_item",onClick:F=>k(e)},[e.siteIcon!=""?(i(),o("img",{key:0,class:"item_icon",src:e.siteIcon,alt:""},null,8,j)):(i(),o("div",C)),_("div",M,L((e==null?void 0:e.siteName)||"----"),1)],8,O))),128))])]))),128))]))}};export{H as default};
