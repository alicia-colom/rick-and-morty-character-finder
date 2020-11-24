(this["webpackJsonpmy-template"]=this["webpackJsonpmy-template"]||[]).push([[0],{23:function(e,c,t){},24:function(e,c,t){},25:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){"use strict";t.r(c);var a=t(0),r=t(1),s=t.n(r),n=t(16),i=t.n(n),l=(t(23),t(14)),j=t(2),o=(t(24),t(4)),d=(t(25),t.p+"static/media/Rick-Morty_logo.de13d484.png"),h=function(e){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:d,alt:"Logo Rick y Morty",title:"Ir al buscador de Rick y Morty"})})})},b=(t(31),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsx)("img",{className:"footer__img",src:"",alt:"Logo footer",title:"Logo footer"}),Object(a.jsx)("small",{className:"footer__copyright",children:"Copyright"})]})})}),m=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{}),Object(a.jsxs)("main",{className:"landing",children:[Object(a.jsx)("h1",{className:"landing__title",children:"Busca tu personaje favorito de Rick y Morty"}),Object(a.jsx)(o.b,{to:"/home",className:"landing__link",title:"Ir al buscador de Rick y Morty",children:"\xa1Vamos!"})]}),Object(a.jsx)(b,{})]})},u=(t(32),t(33),t.p,t(34),t(35),function(e){return Object(a.jsxs)("article",{className:"character-card",children:[Object(a.jsx)("img",{src:e.character.image,alt:"Imagen de "+e.character.name,title:"Personaje: "+e.character.name,className:"character-card__img"}),Object(a.jsxs)("div",{className:"character-card__info",children:[Object(a.jsx)("h2",{className:"character-card__info--name",children:e.character.name}),Object(a.jsx)("p",{className:"character-card__info--paragraph",children:e.character.species}),Object(a.jsx)(o.b,{to:"/info/".concat(e.character.name),className:"character-card__info--link",children:"+ info"})]})]})}),x=function(e){var c=e.resultList.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(u,{character:e})},e.id)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{}),Object(a.jsxs)("main",{className:"character-list",children:[Object(a.jsxs)("form",{action:"",className:"character-list__form",children:[Object(a.jsx)("label",{htmlFor:"searchInput",className:"character-list__form--label",children:"\xbfQu\xe9 personaje buscas?"}),Object(a.jsx)("input",{id:"searchInput",type:"text",className:"character-list__form--input",placeholder:"Escribe aqu\xed...",onSubmit:function(e){e.preventDefault()},onChange:function(c){e.handleInputValue(c.currentTarget.value)}})]}),Object(a.jsx)("ul",{className:"character-list__list",children:c})]}),Object(a.jsx)(b,{})]})},O=(t(36),function(e){var c=e.detail.episode.map((function(e,c){return Object(a.jsxs)("option",{className:"detail__episodes--item",value:e,children:["Episode #",c]})}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{}),Object(a.jsxs)("main",{className:"character-detail",children:[Object(a.jsx)(o.b,{to:"/home",className:"character-detail__link",children:"Back to search"}),Object(a.jsxs)("div",{className:"character-detail__container",children:[Object(a.jsx)("img",{src:e.detail.image,alt:"",className:"character-detail__container--img"}),Object(a.jsxs)("div",{className:"character-detail__container--info detail",children:[Object(a.jsx)("h2",{className:"detail__name",children:e.detail.name}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Status: "}),e.detail.status]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Specie: "}),e.detail.species]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Gender: "}),e.detail.gender]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Origin: "}),e.detail.origin.name]}),Object(a.jsxs)("div",{className:"detail__episodes",children:[Object(a.jsx)("label",{htmlFor:"episodes",children:Object(a.jsx)("b",{children:"Episodes: "})}),Object(a.jsx)("select",{className:"detail__episodes--list",id:"episodes",name:"episodes",children:c})]})]})]})]}),Object(a.jsx)(b,{})]})}),f=(t(37),function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("main",{className:"error",children:[Object(a.jsx)(o.b,{to:"/home",className:"error__link",children:"Try again your search"}),Object(a.jsxs)("div",{className:"error__container",children:[Object(a.jsx)("h1",{className:"error__container--title",children:"This character doesn't exist."}),Object(a.jsx)("h2",{children:"I mean... It doesn't exist dead or alive."}),Object(a.jsx)("h3",{children:"It's your invention, dude. "}),Object(a.jsx)("h4",{children:"You made it up!!"}),Object(a.jsx)("h5",{children:"Do you think you are better than us?!"}),Object(a.jsx)("h6",{children:"What the *$%* !?"})]})]}),Object(a.jsx)(b,{})]})}),p=function(e){return fetch("https://rickandmortyapi.com/api/character/?name="+e).then((function(e){return e.json()})).then((function(e){return e}))},_=function(){var e=Object(r.useState)(""),c=Object(l.a)(e,2),t=c[0],s=c[1],n=Object(r.useState)([]),i=Object(l.a)(n,2),o=i[0],d=i[1];Object(r.useEffect)((function(){p(t).then((function(e){d(e.results)}))}),[t]);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",children:Object(a.jsx)(m,{})}),Object(a.jsx)(j.a,{exact:!0,path:"/home",children:Object(a.jsx)(x,{resultList:o,handleInputValue:function(e){s(e)}})}),Object(a.jsx)(j.a,{exact:!0,path:"/info/:characterName",component:function(e){var c=e.match.params.characterName,t=o.find((function(e){return c===e.name}));return t?Object(a.jsx)(O,{detail:t}):Object(a.jsx)(f,{})}})]})})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(_,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2b4c4647.chunk.js.map