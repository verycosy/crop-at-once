(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(n,e,t){n.exports=t(246)},154:function(n,e){},156:function(n,e){},246:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),c=t(38),o=t.n(c),i=t(39),l=t(40),u=t(43),s=t(41),f=t(44),p=t(5),d=t(4),m=t(112),g=t.n(m);function h(){var n=Object(p.a)(['\n    @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR");\n    ',';\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family: "Noto Sans KR", sans-serif;\n        font-size:12px;\n        text-align:center;\n        color:white;\n        background-color: hsl(70, 0%, 15%);\n        padding:0px 0px 40px;\n        display:flex;\n        flex-direction:column;\n        align-items:center;\n    }\n']);return h=function(){return n},n}var b=Object(d.createGlobalStyle)(h(),g.a);function x(){var n=Object(p.a)(["\n  margin: 10px 0px;\n"]);return x=function(){return n},n}function v(){var n=Object(p.a)(["\n  height: 400px;\n  margin-top: -16px;\n\n  &:nth-child(3) {\n    margin-right: 10px;\n    margin-left: 10px;\n  }\n"]);return v=function(){return n},n}function w(){var n=Object(p.a)(["\n  height: 16px;\n  position: relative;\n  margin: 0 auto;\n  width: 726px;\n  animation: "," 1.2s infinite;\n  animation-direction: alternate;\n"]);return w=function(){return n},n}function O(){var n=Object(p.a)(["\n  from {\n    background-color: #d3394c;\n    opacity:0.5;\n  }\n\n  to {\n    background-color: hsl(70, 0%, 15%);\n    opacity:1;\n  }\n"]);return O=function(){return n},n}function E(){var n=Object(p.a)(["\n  margin-top: 40px;\n"]);return E=function(){return n},n}function j(){var n=Object(p.a)(["\n  margin-top: 30px;\n  font-size: 32px;\n  font-weight: 700;\n"]);return j=function(){return n},n}function y(){var n=Object(p.a)([""]);return y=function(){return n},n}var k=d.default.header(y()),C=d.default.h1(j()),z=d.default.div(E()),S=Object(d.keyframes)(O()),R=d.default.div(w(),S),B=d.default.img(v()),A=d.default.p(x()),F=function(){return r.a.createElement(k,null,r.a.createElement(z,null,r.a.createElement(R,null),r.a.createElement(B,{src:"/sample/1.png"}),r.a.createElement(B,{src:"/sample/2.png"}),r.a.createElement(B,{src:"/sample/3.png"}),r.a.createElement(R,{style:{height:"36px",marginTop:"-36px"}})),r.a.createElement(C,null,"Crop At Once"),r.a.createElement(A,null,"Please upload same height images."))},L=t(20),U=t.n(L),_=t(115),I=t(29),Y=t(116),H=t.n(Y),M=t(135),N=t(133),J=t.n(N),K=t(134);function T(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  z-index: 11;\n  left: 50%;\n  transform: translateX(-40px);\n  width: 80px;\n  border-radius: 50%;\n  background-color: #f6c84b;\n  font-weight: 700;\n  color: #444;\n  padding: 10px 0px;\n  box-shadow: 0px 0px 40px 2px #444;\n\n  span {\n    padding: 5px 0px;\n    font-size: 14px;\n  }\n\n  i {\n    animation: "," 1s linear infinite;\n    font-size: 24px;\n  }\n"]);return T=function(){return n},n}function G(){var n=Object(p.a)(["\n    100% {\n        transform: rotate(360deg);\n    }\n"]);return G=function(){return n},n}var P=Object(d.keyframes)(G()),W=d.default.div(T(),P),X=function(n){var e=n.current,t=n.length,a=n.scrollY;return r.a.createElement(W,{style:{top:window.innerHeight/2+a/2}},r.a.createElement("span",null,r.a.createElement("i",{class:"fas fa-cut"})),r.a.createElement("span",null,e," / ",t))};function q(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return q=function(){return n},n}function D(){var n=Object(p.a)(["\n  display: inline-block;\n  cursor: pointer;\n  background-color: #d3394c;\n  padding: 18px 28px;\n  margin: 40px 0px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 20px;\n\n  &:hover {\n    background-color: #722040;\n  }\n\n  i {\n    margin-right: 10px;\n  }\n"]);return D=function(){return n},n}function Q(){var n=Object(p.a)(["\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 40px;\n"]);return Q=function(){return n},n}function V(){var n=Object(p.a)(["\n  background-color: #f6c84b;\n  color: #444;\n  padding: 18px 28px;\n  border-radius: 10px;\n  border: none;\n  font-size: 20px;\n  font-weight: 600;\n  cursor: pointer;\n  margin: 40px 0px;\n  transition: transform 0.5s;\n\n  &:hover {\n    transform: scale(1.4);\n  }\n"]);return V=function(){return n},n}function Z(){var n=Object(p.a)(["\n  display: none;\n"]);return Z=function(){return n},n}var $=d.default.input(Z()),nn=d.default.button(V()),en=d.default.div(Q()),tn=d.default.label(D()),an=d.default.div(q()),rn=function(n){function e(){var n,t;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(r)))).state={uploaded:!1,files:null,event:null,checkCnt:0,loading:!1,current:0},t._sizeCheck=function(n,e,a){var r=t.state.checkCnt;a!==n.height||e!==n.width?t.setState({checkCnt:0}):t.setState({checkCnt:r+1})},t._upload=function(){t.setState({checkCnt:0});var n=document.getElementById("uploadFileBtn").files,e=document.getElementById("container");e.innerHTML="",0!==n.length?function(){var a=document.createElement("img");a.src=window.URL.createObjectURL(n[0]),a.style.maxHeight="60vh",e.appendChild(a);var r=Object(I.a)(t);new H.a(a,{zoomable:!1,viewMode:1,ready:function(){r.setState({uploaded:!0,files:n})},crop:function(n){r.setState({event:n})}});var c=!0,o=!1,i=void 0;try{for(var l,u=function(){var n=l.value,e=new Image;e.onload=function(){t._sizeCheck(e,a.naturalWidth,a.naturalHeight)},e.src=window.URL.createObjectURL(n)},s=n[Symbol.iterator]();!(c=(l=s.next()).done);c=!0)u()}catch(f){o=!0,i=f}finally{try{c||null==s.return||s.return()}finally{if(o)throw i}}}():t.setState({uploaded:!1,files:null,event:null})},t._crop=Object(_.a)(U.a.mark(function n(){var e,a,r,c;return U.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.state,a=e.checkCnt,r=e.files,c=e.event,r.length!==a){n.next=5;break}return n.delegateYield(U.a.mark(function n(){var e,a,o,i,l;return U.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.setState({loading:!0}),e=new J.a,a=c.detail,o=Object(I.a)(t),i=U.a.mark(function n(c){var o;return U.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.a.read(window.URL.createObjectURL(r[c]));case 2:return(o=n.sent).crop(a.x,a.y,a.width,a.height),n.next=6,o.getBuffer(o.getMIME(),function(n,a){e.file(r[c].name,a,{base64:!0}),t.setState({current:c+1}),console.log(a)});case 6:case"end":return n.stop()}},n)}),l=0;case 6:if(!(l<r.length)){n.next=11;break}return n.delegateYield(i(l),"t0",8);case 8:l++,n.next=6;break;case 11:e.generateAsync({type:"blob"}).then(function(n){Object(K.saveAs)(n,"Crop-At-Once.zip"),o.setState({loading:!1,current:0})});case 12:case"end":return n.stop()}},n)})(),"t0",3);case 3:n.next=6;break;case 5:alert("\uc774\ubbf8\uc9c0\ub4e4\uc758 \ud06c\uae30\uac00 \uc11c\ub85c \ub2e4\ub985\ub2c8\ub2e4!\n\uc774\ubbf8\uc9c0\ub97c \ub2e4\uc2dc \uc120\ud0dd\ud574\uc8fc\uc138\uc694!");case 6:case"end":return n.stop()}},n)})),t}return Object(f.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){var n=this.state,e=n.loading,t=n.uploaded,a=n.files,c=n.current;return r.a.createElement(r.a.Fragment,null,r.a.createElement($,{type:"file",id:"uploadFileBtn",accept:"image/*",onChange:this._upload,multiple:!0}),r.a.createElement(tn,{htmlFor:"uploadFileBtn"},r.a.createElement("i",{className:"far fa-images"}),"Choose images !"),r.a.createElement(an,{id:"container"}),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(en,null,r.a.createElement("span",{role:"img","aria-label":"clap",style:{marginRight:"5px"}},"\ud83d\udc4f"),"\ub300\ud45c \uc774\ubbf8\uc9c0\ub97c \ud3ec\ud568\ud574 ",r.a.createElement("u",null,"\uc0ac\uc9c4 ",a.length,"\uc7a5"),"\uc774 \uc120\ud0dd\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),r.a.createElement(nn,{id:"cropBtn",onClick:this._crop},r.a.createElement("i",{class:"fas fa-cut"})," \uc2f9\ub451\uc2f9\ub451")):null,e?r.a.createElement(X,{current:c,length:a.length,scrollY:window.scrollY}):null)}}]),e}(a.Component);function cn(){var n=Object(p.a)(["\n  font-size: 14px;\n"]);return cn=function(){return n},n}var on=d.default.footer(cn()),ln=function(){return r.a.createElement(on,null,"\xa9 2019 Crop At Once All rights reserved.")},un=function(n){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(F,null),r.a.createElement(rn,null),r.a.createElement(ln,null))}}]),e}(a.Component);o.a.render(r.a.createElement(un,null),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.d4487907.chunk.js.map