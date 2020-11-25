(this["webpackJsonpmy-template"]=this["webpackJsonpmy-template"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(1),s=c.n(r),i=c(16),n=c.n(i),l=(c(23),c(14)),j=c(2),o=(c(24),c(4)),h=(c(25),c.p+"static/media/Rick-Morty_logo.de13d484.png"),d=function(e){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:h,alt:"Logo Rick y Morty",title:"Volver al inicio"})})})},b=(c(31),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsxs)("p",{className:"footer__copyright",children:["Made with"," ",Object(a.jsx)("i",{className:"fa fa-heart footer__copyright--icon","aria-hidden":"true"})," ","by"," ",Object(a.jsxs)("a",{className:"footer__copyright--author",href:"https://www.linkedin.com/in/aliciacolomortega/",target:"_blank",title:"Enlace a LinkedIn de Alicia Colom",children:[" ","Alicia Colom"," "]})]}),Object(a.jsx)("a",{className:"footer__small",href:"https://twitter.com/hashtag/PromoKizzy?src=hashtag_click",target:"_blank",title:"Enlace al hashtag de Twitter de #PromoKizzy",children:"Adalab #PromoKizzy 2020"})]})})}),m=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{}),Object(a.jsxs)("main",{className:"landing",children:[Object(a.jsx)("h1",{className:"landing__title",children:"Find the craziest characters from your favourite TV show and know them better"}),Object(a.jsx)(o.b,{to:"/home",className:"landing__link",title:"Ir al buscador de Rick y Morty",children:"Let's go!"})]}),Object(a.jsx)(b,{})]})},u=(c(32),c(33),c.p,c(34),c(35),c.p,c(36),function(e){return Object(a.jsxs)("article",{className:"character-card",children:[Object(a.jsx)("img",{src:e.character.image,alt:"Imagen de "+e.character.name,title:"Personaje: "+e.character.name,className:"character-card__img"}),Object(a.jsxs)("div",{className:"character-card__info",children:[Object(a.jsx)("h2",{className:"character-card__info--name",children:e.character.name}),Object(a.jsx)("p",{className:"character-card__info--paragraph",children:e.character.species}),Object(a.jsx)(o.b,{to:"/info/".concat(e.character.name),className:"character-card__info--link",children:"+ info"})]})]})}),x=function(e){var t=e.resultList.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(u,{character:e})},e.id)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{}),Object(a.jsxs)("main",{className:"character-list",children:[Object(a.jsxs)("form",{action:"",className:"character-list__form",children:[Object(a.jsx)("label",{htmlFor:"searchInput",className:"character-list__form--label",children:"\xbfQu\xe9 personaje buscas?"}),Object(a.jsxs)("div",{className:"character-list__form--container",children:[Object(a.jsx)("i",{className:"fa fa-search character-list__form--icon","aria-hidden":"true"}),Object(a.jsx)("input",{id:"searchInput",type:"text",className:"character-list__form--input",title:"Escribe el personaje que quieres buscar",placeholder:"Escribe aqu\xed...",onSubmit:function(e){e.preventDefault()},onChange:function(t){e.handleInputValue(t.currentTarget.value)}})]})]}),Object(a.jsx)("div",{children:e.resultList?Object(a.jsx)("ul",{className:"character-list__list",children:t}):e.children})]}),Object(a.jsx)(b,{})]})},O=(c(37),function(e){var t=e.detail.episode.map((function(e,t){var c=e.replace("https://rickandmortyapi.com/api/episode/","");return Object(a.jsx)("option",{className:"detail__episodes--item",value:e,children:c})}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{}),Object(a.jsxs)("main",{className:"character-detail",children:[Object(a.jsx)(o.b,{to:"/home",className:"character-detail__link",children:"Back to search"}),Object(a.jsxs)("div",{className:"character-detail__container",children:[Object(a.jsx)("img",{src:e.detail.image,alt:"",className:"character-detail__container--img"}),Object(a.jsxs)("div",{className:"character-detail__container--info detail",children:[Object(a.jsx)("h2",{className:"detail__name",children:e.detail.name}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Status: "}),e.detail.status]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Specie: "}),e.detail.species]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Gender: "}),e.detail.gender]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Origin: "}),e.detail.origin.name]}),Object(a.jsxs)("div",{className:"detail__episodes",children:[Object(a.jsx)("label",{htmlFor:"episodes",children:Object(a.jsx)("b",{children:"Episodes: "})}),Object(a.jsx)("select",{className:"detail__episodes--list",id:"episodes",name:"episodes",children:t})]})]})]})]}),Object(a.jsx)(b,{})]})}),f=(c(38),function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("main",{className:"error",children:[Object(a.jsx)(o.b,{to:"/home",className:"error__link",children:"Try again your search"}),Object(a.jsxs)("div",{className:"error__container",children:[Object(a.jsx)("h1",{className:"error__container--title",children:"This character doesn't exist."}),Object(a.jsx)("h2",{children:"I mean... It doesn't exist dead or alive."}),Object(a.jsx)("h3",{children:"It's your invention, dude. "}),Object(a.jsx)("h4",{children:"You made it up!!"}),Object(a.jsx)("h5",{children:"Do you think you are better than us?!"}),Object(a.jsx)("h6",{children:"What the *$%* !?"})]})]}),Object(a.jsx)(b,{})]})}),p=function(e){return fetch("https://rickandmortyapi.com/api/character/?name="+e).then((function(e){return e.json()})).then((function(e){return console.log(e),e}))},_=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)([]),n=Object(l.a)(i,2),o=n[0],h=n[1];Object(r.useEffect)((function(){p(c).then((function(e){h(e.results)}))}),[c]);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",children:Object(a.jsx)(m,{})}),Object(a.jsxs)(j.a,{exact:!0,path:"/home",children:[Object(a.jsx)(x,{resultList:o,handleInputValue:function(e){s(e)}}),");"]}),Object(a.jsx)(j.a,{exact:!0,path:"/info/:characterName",component:function(e){var t=e.match.params.characterName,c=o.find((function(e){return t===e.name}));return c?Object(a.jsx)(O,{detail:c}):Object(a.jsx)(f,{})}})]})})};n.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(_,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.faf386ee.chunk.js.map