(this.webpackJsonpfulvin=this.webpackJsonpfulvin||[]).push([[0],{15:function(e,t,n){},28:function(e,t,n){},41:function(e,t,n){},55:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(2),i=n.n(s),c=n(20),l=n.n(c),r=(n(55),n(26)),j=n(5),d=(n(15),n(13)),o=function(){return Object(a.jsxs)("div",{className:"LandingPage",children:[Object(a.jsx)("h1",{className:"logo",children:"FULVIN."}),Object(a.jsx)("li",{className:"Button",children:Object(a.jsxs)(d.b,{to:"/newBrew",children:["B\xd6RJA BRYGG ",Object(a.jsx)("div",{id:"pil_lila2"})]})})]})},b=n(7),h=function(e){var t=e.onClick,n=e.children;return Object(a.jsxs)("div",{className:"ButtonHome",onClick:t,children:[n,Object(a.jsx)("div",{id:"pil_lila"})]})},u=(n(28),function(e){var t=e.onInput,n=Object(s.useState)(""),i=Object(j.a)(n,2),c=i[0],l=i[1];return Object(a.jsxs)("div",{class:"EnterInfoone",children:[Object(a.jsx)("div",{id:"top",children:Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"NAMNGE"})})}),Object(a.jsx)("div",{id:"theText",children:Object(a.jsx)("input",{class:"Input",type:"text",placeholder:"Ange namn",onChange:function(e){return l(e.target.value)}})}),Object(a.jsx)(h,{onClick:function(){return t(c)},children:"N\xc4STA"}),Object(a.jsxs)("div",{class:"footer_dot",children:[Object(a.jsx)("div",{class:"white"}),Object(a.jsx)("div",{class:"grey"}),Object(a.jsx)("div",{class:"grey"}),Object(a.jsx)("div",{class:"grey"})]})]})}),O=n(42),x=n.n(O),p={color:"#FE9677",backgroundColor:"white",zIndex:1},v=function(e){var t=e.onToggle,n=e.option1,s=e.option2,i=e.active;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("button",{className:"left_btnn",style:i===n?p:{},onClick:function(){return t(n)},children:[" ",n]}),Object(a.jsxs)("button",{className:"right_btnn",style:i===s?p:{},onClick:function(){return t(s)},children:[" ",s]})]})};console.log("hjahdjhaskldjaksldjklaasjkldjaskjka");var g=function(e){var t=e.onInput,n=Object(s.useState)(new Date),i=Object(j.a)(n,2),c=i[0],l=i[1],r=Object(s.useState)("initialDate"),d=Object(j.a)(r,2),o=d[0],b=d[1];return Object(a.jsxs)("div",{class:"EnterInfoone",children:[Object(a.jsx)("div",{id:"top",children:Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"ANGE DATUM"})})}),Object(a.jsxs)("div",{id:"content",children:[Object(a.jsx)("p",{id:"info",children:" Ange om du vill best\xe4mma startdatum eller n\xe4r fulvinet ska vara klart "}),Object(a.jsx)("div",{class:"btn-group",children:Object(a.jsx)(v,{active:o,option1:"Start",option2:"Klar",onToggle:b})}),Object(a.jsx)(x.a,{className:"DatePick",value:c,onChange:l})]}),Object(a.jsx)(h,{onClick:function(){return t(c,o)},children:"N\xc4STA"}),Object(a.jsxs)("div",{class:"footer_dot",children:[Object(a.jsx)("div",{class:"grey"}),Object(a.jsx)("div",{class:"white"}),Object(a.jsx)("div",{class:"grey"}),Object(a.jsx)("div",{class:"grey"})]}),o]})},f=function(){return Object(a.jsxs)("div",{class:"EnterInfoone",children:[Object(a.jsx)("div",{id:"top",children:Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"F\xe4rdig!"})})}),Object(a.jsx)("p",{id:"finalText",children:"Nu \xe4r din bryggning redo"}),Object(a.jsx)("div",{id:"tillbakaa",children:Object(a.jsxs)(d.b,{id:"link_home",to:"/Home",children:["TILL BRYGGNINGEN ",Object(a.jsx)("div",{id:"pil_lila2"})," "]})})]})},m=function(e){var t=e.onInput;return Object(a.jsxs)("div",{children:[t(),";"]})},D=n(92),k=function(e){var t,n,i,c=e.onInput,l=Object(s.useState)(50),r=Object(j.a)(l,2),d=r[0],o=r[1],b=Object(s.useState)(0),u=Object(j.a)(b,2),O=u[0],x=u[1],p=Object(s.useState)("Liter"),g=Object(j.a)(p,2),f=g[0],m=g[1],k=function(e,t){o(t)};return function(e,a,s){"Liter"===s?(console.log("Ber\xe4knar utifr\xe5n liter"),(i=a*e*.01)%20===0?0===(t=i/20)&&(t=1):(console.log("Ber\xe4knar utifr\xe5n satser"),t=Math.floor(i/20)+1),n=t*(20/(.01*e))):(n=(t=a)*(20/(.01*e)),i=a)}(d,O,f),Object(a.jsxs)("div",{class:"EnterInfoone",children:[Object(a.jsx)("div",{id:"top",children:Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"HUR MYCKET?"})})}),Object(a.jsxs)("div",{id:"content",children:[Object(a.jsx)("p",{id:"info",children:" Ange m\xe4ngd i antal liter utblandat eller satser "}),Object(a.jsxs)("div",{id:"button-and-input",children:[Object(a.jsx)("div",{class:"btn-group-2",children:Object(a.jsx)(v,{active:f,option1:"Liter",option2:"Satser",onToggle:m})}),Object(a.jsx)("input",{id:"Input2",type:"text2",placeholder:"Ex. 80",onChange:function(e){return x(e.target.value)}})]}),Object(a.jsx)("p",{id:"info-text",children:"Andel fulvin"}),Object(a.jsxs)("div",{id:"slider-and-text",children:[Object(a.jsx)(D.a,{valueLabelDisplay:"auto",defaultValue:50,step:10,max:100,min:0,color:"white",onChange:k,text:k}),Object(a.jsxs)("p",{id:"slider-text",children:[d,"%"]})]}),"Liter"===f&&O>0&&Object(a.jsxs)("p",{children:["Ger ",t," satser och ",Math.round(n,1)," liter utblandat"]}),"Satser"===f&&Object(a.jsxs)("p",{children:["Ger ",Math.round(n,1)," liter utblandat"]})]}),Object(a.jsx)(h,{onClick:function(){return c(t,n,f,d)},children:"N\xc4STA"}),Object(a.jsxs)("div",{class:"footer_dot",children:[Object(a.jsx)("div",{class:"grey"}),Object(a.jsx)("div",{class:"grey"}),Object(a.jsx)("div",{class:"white"}),Object(a.jsx)("div",{class:"grey"})]})]})},w=function(e){var t=e.onInput,n=Object(s.useState)("3.5"),i=Object(j.a)(n,2),c=i[0],l=i[1];return Object(a.jsxs)("div",{class:"EnterInfoone",children:[Object(a.jsx)("div",{id:"top",children:Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"M\xe4ngd socker"})})}),Object(a.jsxs)("div",{id:"content",children:[Object(a.jsx)("p",{id:"info",children:"3.5 eller 4.5 kilo socker"}),Object(a.jsx)("div",{class:"btn-group","data-toggle":"buttons",children:Object(a.jsx)(v,{active:c,option1:"3.5",option2:"4.5",onToggle:l})})]}),Object(a.jsx)(h,{onClick:function(){return t(c)},children:"N\xc4STA"}),Object(a.jsxs)("div",{class:"footer_dot",children:[Object(a.jsx)("div",{class:"grey"}),Object(a.jsx)("div",{class:"grey"}),Object(a.jsx)("div",{class:"grey"}),Object(a.jsx)("div",{class:"white"})]})]})},A=(n(41),n(16)),S=n(9);A.a,S.f;var N=function(e){var t,n=e.onNewBrew,i=e.brewList,c=Object(s.useState)(1),l=Object(j.a)(c,2),r=l[0],d=l[1],o=Object(s.useState)({name:"Bryggning",initialDate:null,finalDate:null,task2Date:null,type:null,volumeLiter:null,volumeBatch:null,sugarAmount:null,activeStep:0,ratio:null}),h=Object(j.a)(o,2),O=h[0],x=h[1];function p(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n}return t=1!=r?Object(a.jsx)("button",{className:"backbtn",onClick:function(){d(r>1?r-1:1)}}):t=Object(a.jsx)("button",{}),Object(a.jsxs)("div",{children:[1===r&&Object(a.jsx)(u,{onInput:function(e){x(""===e?Object(b.a)(Object(b.a)({},O),{},{name:"Bryggning "+(i.length+1)}):Object(b.a)(Object(b.a)({},O),{},{name:e})),d(2)}}),"  ",2===r&&Object(a.jsx)(g,{onInput:function(e,t){d(3),x("Start"===t?Object(b.a)(Object(b.a)({},O),{},{initialDate:e}):Object(b.a)(Object(b.a)({},O),{},{finalDate:e}))}}),"  ",3===r&&Object(a.jsx)(k,{onInput:function(e,t,n,a){x(Object(b.a)(Object(b.a)({},O),{},{volumeBatch:e,volumeLiter:t,ratio:a})),d(4)}}),"  ",4===r&&Object(a.jsx)(w,{onInput:function(e){O.initialDate?x("3.5"===e?Object(b.a)(Object(b.a)({},O),{},{finalDate:p(O.initialDate,8),task2Date:p(O.initialDate,4),sugarAmount:e}):Object(b.a)(Object(b.a)({},O),{},{finalDate:p(O.initialDate,14),task2Date:p(O.initialDate,10),sugarAmount:e})):x("3.5"===e?Object(b.a)(Object(b.a)({},O),{},{initialDate:p(O.finalDate,-8),task2Date:p(O.finalDate,-4),sugarAmount:e}):Object(b.a)(Object(b.a)({},O),{},{initialDate:p(O.finalDate,-14),task2Date:p(O.finalDate,-4),sugarAmount:e})),d(5)}}),5===r&&Object(a.jsx)(m,{onInput:function(){n(O),d(6)}})," ",t,6===r&&Object(a.jsx)(f,{})," "]})};n(76);var T=function(){return Object(a.jsxs)("div",{className:"receptPage",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{className:"receptHeader",children:"Recept"})}),Object(a.jsxs)("div",{className:"recept",children:[Object(a.jsx)("div",{className:"receptIcon1"}),Object(a.jsxs)("div",{className:"receptOne",children:[Object(a.jsx)("h2",{className:"receptName",children:"Majs"}),Object(a.jsxs)("ul",{className:"receptParts1",children:["20% FUN Light Tropical Fruits",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"80% Vatten"]})]}),Object(a.jsx)("div",{className:"receptIcon2"}),Object(a.jsxs)("div",{className:"receptTwo",children:[Object(a.jsx)("h2",{className:"receptName",children:"3Cant"}),Object(a.jsxs)("ul",{className:"receptParts2",children:["20% Ica basic r\xf6da b\xe4r",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"80% Vatten"]})]})]}),Object(a.jsx)("div",{className:"breaker"})]})};n(77);console.log("hj\xe4kldsj\xf6");var y=function(){return Object(a.jsxs)("div",{className:"Handbook",children:[Object(a.jsx)("div",{className:"breaker1",children:Object(a.jsx)("h2",{className:"handbookHeader",children:"Handbok"})}),Object(a.jsxs)("div",{className:"handbook",children:[Object(a.jsxs)("div",{className:"box1",children:[Object(a.jsx)("h2",{className:"rubriker",children:"Material"}),Object(a.jsxs)("ul",{className:"handbookList1",children:[Object(a.jsx)("li",{children:"Rulles 7-dagars vin, r\xf6tt eller vitt"}),Object(a.jsx)("li",{children:"J\xe4shink  25 liter"}),Object(a.jsx)("li",{children:"J\xe4sr\xf6r"}),Object(a.jsx)("li",{children:"H\xe4vert"}),Object(a.jsx)("li",{children:"3.5 - 4.5 kg socker"})]})]}),Object(a.jsxs)("div",{className:"box2",children:[Object(a.jsx)("h2",{className:"rubriker",children:"Instruktioner"}),Object(a.jsxs)("ol",{className:"handbookList1",children:[Object(a.jsx)("li",{children:"I en v\xe4l rengjord j\xe4shink l\xf6ses sockret i 8 liter varmt kranvatten. H\xe4ll i fruktsaften och fyll p\xe5 med 10 liter kallt vatten. Tills\xe4tt j\xe4stn\xe4rsalt, p\xe5se A - skaka om noga. Temperaturen b\xf6r nu vara 25-30 grader. Tills\xe4tt j\xe4sten - p\xe5se 1, l\xe5t st\xe5 10 minuter och skaka sen om ordentligt. S\xe4tt p\xe5 j\xe4sr\xf6r och l\xe5t st\xe5 i j\xe4mn temperatur, inte under 20 grader."}),Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"J\xe4sningen tar 3-4 dagar, sedan slutar det bubbla ur j\xe4sr\xf6ret, vinet b\xf6rjar klarna vid ytan och smakar inte l\xe4ngre s\xf6tt. Detta g\xe4ller vid ovan angivna temperaturer. \xc4r de l\xe4gre tar j\xe4sningen l\xe4ngre tid. Tills\xe4tt j\xe4sstopp - p\xe5se 2 och skaka ur kolsyran. Skaka flera g\xe5nger med 15-30 minuters mellanrum. Tills\xe4tt klarning - p\xe5se 3 och skaka om. Tills\xe4tt klarning - p\xe5se 4 (samt essensp\xe5sen m\xe4rkt med namnet p\xe5 sorten du g\xf6r - ej r\xf6dvin). Skaka om noga igen och st\xe4ll vinet p\xe5 ett bord. Klarningen tar 3-4 dagar. F\xf6r r\xf6dvin g\xf6rs nu en omtappning. Tappa f\xf6rst om 5 liter, tills\xe4tt r\xf6dvinsf\xe4rg och skaka om. Tappa \xf6ver resten av vinet och skaka."})]})]})]})]})},I=(n(78),function(e){var t=e.brewList,n=e.nBrew,s=e.months,i="J\xe4sningen tar i regel 4 dagar. Det ska d\xe5 ha slutat bubbla ur j\xe4sr\xf6ret, vinet ska ha b\xf6rjat klarna vid ytan och inte l\xe4ngre smaka s\xf6tt. Detta g\xe4ller vid angivna temperaturer. \xc4r temperaturen l\xe4gre tar j\xe4sningen l\xe4ngre tid. Tills\xe4tt j\xe4sstopp, p\xe5se 2 och skaka ur kolsyran. Skaka flera g\xe5nger med 15-30 mellanrum. Tills\xe4tt klarning, p\xe5se 3 och skaka om. Tills\xe4tt klarning, p\xe5se 4. Skaka om noga igen och st\xe4ll vinet p\xe5 ett bord",c="Tappa upp vinet i en ren beh\xe5llare med hj\xe4lp av en h\xe4vert. Se till att inte hinkens bottensats r\xf6rs upp och f\xf6rs med till beh\xe5llaren. Nu \xe5terst\xe5r bara smaks\xe4ttningen av fulvinet. Du har valt f\xf6ljande utsp\xe4dningshalt: "+t[n].ratio+"% vin.";return 0===t[n].activeStep?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"uppgift",children:[" ",Object(a.jsxs)("p",{id:"datum",children:[" ",new Date(t[n].initialDate).getDate()," ",s[new Date(t[n].initialDate).getMonth()]," "]}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{id:"uppgift_text",children:[" "," I en v\xe4l rengjord j\xe4shink l\xf6ses sockret i 8 liter varmt kranvatten. H\xe4ll i fruksaften och fyll p\xe5 med 10 liter kallt vatten. Tills\xe4tt j\xe4stn\xe4rsalt,p\xe5se A och skaka om noga. Temperaturen b\xf6r nu vara 25-30 grader. Tills\xe4tt j\xe4sten, p\xe5se 1, l\xe5t st\xe5 10 minuter och skaka sedan om ordentligt. S\xe4tt p\xe5 j\xe4sr\xf6r och l\xe5t st\xe5 i j\xe4mn temperatur, inte under 20 grader."," "]})]}),Object(a.jsxs)("div",{id:"uppgift",children:[" ",Object(a.jsxs)("p",{id:"datum",children:[" ",new Date(t[n].task2Date).getDate()," ",s[new Date(t[n].task2Date).getMonth()]," "]}),Object(a.jsxs)("p",{id:"uppgift_text",children:[" ",i," "]})]}),Object(a.jsxs)("div",{id:"uppgift",children:[" ",Object(a.jsxs)("p",{id:"datum",children:[" ",new Date(t[n].finalDate).getDate()," ",s[new Date(t[n].finalDate).getMonth()]," "]}),Object(a.jsxs)("p",{id:"uppgift_text",children:[" ",c," "]})]})]}):1===t[n].activeStep?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"uppgift",children:[" ",Object(a.jsxs)("p",{id:"datum",children:[" ",new Date(t[n].task2Date).getDate()," ",s[new Date(t[n].task2Date).getMonth()]," "]}),Object(a.jsxs)("p",{id:"uppgift_text",children:[" ",i," "]})]}),Object(a.jsxs)("div",{id:"uppgift",children:[" ",Object(a.jsxs)("p",{id:"datum",children:[" ",new Date(t[n].finalDate).getDate()," ",s[new Date(t[n].finalDate).getMonth()]," "]}),Object(a.jsxs)("p",{id:"uppgift_text",children:[" ",c," "]})]})]}):2===t[n].activeStep?Object(a.jsxs)("div",{id:"uppgift",children:[" ",Object(a.jsxs)("p",{id:"datum",children:[" ",new Date(t[n].finalDate).getDate()," ",s[new Date(t[n].finalDate).getMonth()]," "]}),Object(a.jsxs)("p",{id:"uppgift_text",children:[" ",c," "]})]}):Object(a.jsxs)("div",{children:[" ",Object(a.jsx)("p",{id:"brygg_klar",children:" Bryggningen \xe4r klar "})]})}),B=function(e){var t=e.brewList,n=e.nBrew,s=e.months,i=" I en v\xe4l rengjord j\xe4shink l\xf6ses sockret i 8 liter varmt kranvatten. H\xe4ll i fruksaften och fyll p\xe5 med 10 liter kallt vatten. Tills\xe4tt j\xe4stn\xe4rsalt,p\xe5se A och skaka om noga. Temperaturen b\xf6r nu vara 25-30 grader. Tills\xe4tt j\xe4sten, p\xe5se 1, l\xe5t st\xe5 10 minuter och skaka sedan om ordentligt. S\xe4tt p\xe5 j\xe4sr\xf6r och l\xe5t st\xe5 i j\xe4mn temperatur, inte under 20 grader.",c="J\xe4sningen tar i regel 4 dagar. Det ska d\xe5 ha slutat bubbla ur j\xe4sr\xf6ret, vinet ska ha b\xf6rjat klarna vid ytan och inte l\xe4ngre smaka s\xf6tt. Detta g\xe4ller vid angivna temperaturer. \xc4r temperaturen l\xe4gre tar j\xe4sningen l\xe4ngre tid. Tills\xe4tt j\xe4sstopp, p\xe5se 2 och skaka ur kolsyran. Skaka flera g\xe5nger med 15-30 mellanrum. Tills\xe4tt klarning, p\xe5se 3 och skaka om. Tills\xe4tt klarning, p\xe5se 4. Skaka om noga igen och st\xe4ll vinet p\xe5 ett bord",l="Tappa upp vinet i en ren beh\xe5llare med hj\xe4lp av en h\xe4vert. Se till att inte hinkens bottensats r\xf6rs upp och f\xf6rs med till beh\xe5llaren. Nu \xe5terst\xe5r bara smaks\xe4ttningen av fulvinet. Du har valt f\xf6ljande utsp\xe4dningshalt: "+t[n].ratio+"% vin.";return 3===t[n].activeStep?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"uppgiftAvslutad",children:[" ",Object(a.jsxs)("p",{id:"datum",children:[" ",new Date(t[n].initialDate).getDate()," ",s[new Date(t[n].initialDate).getMonth()]," "]}),Object(a.jsxs)("p",{id:"uppgift_text",children:[" ",i," "]})]}),Object(a.jsxs)("div",{id:"uppgiftAvslutad",children:[" ",Object(a.jsxs)("p",{id:"datum",children:[" ",new Date(t[n].task2Date).getDate()," ",s[new Date(t[n].task2Date).getMonth()]," "]}),Object(a.jsxs)("p",{id:"uppgift_text",children:[" ",c," "]})]}),Object(a.jsxs)("div",{id:"uppgiftAvslutad",children:[" ",Object(a.jsxs)("p",{id:"datum",children:[" ",new Date(t[n].finalDate).getDate()," ",s[new Date(t[n].finalDate).getMonth()]," "]}),Object(a.jsxs)("p",{id:"uppgift_text",children:[" ",l," "]})]})]}):2===t[n].activeStep?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"uppgiftAvslutad",children:[" ",Object(a.jsxs)("p",{id:"datum",children:[" ",new Date(t[n].initialDate).getDate()," ",s[new Date(t[n].initialDate).getMonth()]," "]}),Object(a.jsxs)("p",{id:"uppgift_text",children:[" ",i," "]})]}),Object(a.jsxs)("div",{id:"uppgiftAvslutad",children:[" ",Object(a.jsxs)("p",{id:"datum",children:[" ",new Date(t[n].task2Date).getDate()," ",s[new Date(t[n].initialDate).getMonth()]," "]}),Object(a.jsxs)("p",{id:"uppgift_text",children:[" ",c," "]})]})]}):1===t[n].activeStep?Object(a.jsxs)("div",{id:"uppgiftAvslutad",children:[" ",Object(a.jsxs)("p",{id:"datum",children:[" ",new Date(t[n].initialDate).getDate()," ",s[new Date(t[n].initialDate).getMonth()]," "]}),Object(a.jsxs)("p",{id:"uppgift_text",children:[" ",i," "]})]}):0===t[n].activeStep?Object(a.jsx)("div",{id:"taskText",children:" H\xe4r visas avslutade uppgifter"}):Object(a.jsx)("div",{})},L=n(46),_=n.n(L),C=Object(a.jsx)(A.a,{icon:S.b,color:"#F7727D"}),M=Object(a.jsx)(A.a,{icon:S.f}),F=Object(a.jsx)(A.a,{icon:S.e});var H=function(e){var t,n,i=e.brewList,c=e.setBrewListFunction,l=Object(s.useState)([0,0,0,0,0]),b=Object(j.a)(l,2),h=(b[0],b[1],Object(s.useState)(0)),u=Object(j.a)(h,2),O=u[0],x=u[1],p=!0,v="prevUnavailable",g="nextAvailable",f=["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"];return console.log(i),0!=i.length?(0===i[O].activeStep?m(new Date,new Date(i[O].initialDate))<0&&(i[O].task2Date=D(new Date(i[O].task2Date),-m(new Date,new Date(i[O].initialDate))),i[O].finalDate=D(new Date(i[O].finalDate),-m(new Date,new Date(i[O].initialDate))),i[O].initialDate=new Date):1===i[O].activeStep?m(new Date,new Date(i[O].task2Date))<0&&(i[O].finalDate=D(new Date(i[O].finalDate),-m(new Date,i[O].task2Date)),i[O].task2Date=D(new Date(i[O].task2Date),-m(new Date,i[O].task2Date))):2===i[O].activeStep&&m(new Date,new Date(i[O].finalDate))<0&&(i[O].finalDate=D(new Date(i[O].finalDate),-m(new Date,i[O].finalDate))),g=O<i.length-1?"nextAvailable":"nextUnavailable",v=O>0?"prevAvailable":"prevUnavailable",p=0==i[O].activeStep&&0==m(new Date,new Date(i[O].initialDate))||1==i[O].activeStep&&0==m(new Date,new Date(i[O].task2Date))||2==i[O].activeStep&&0==m(new Date,new Date(i[O].finalDate)),Object(a.jsxs)("div",{className:"Wrapper",children:[Object(a.jsxs)("div",{class:"info",children:[Object(a.jsx)("div",{class:"top",children:Object(a.jsxs)("button",{className:"trashBtn",onClick:function(){return function(){var e=Object(r.a)(i);e[O]=null;for(var t=O;t<e.length-1;t++)e[t]=e[t+1];e.pop(),c(e),O>0&&x(O-1)}()},children:[" ",Object(a.jsx)("div",{className:"icon",children:M})]})}),Object(a.jsxs)("div",{class:"middle",children:[Object(a.jsx)("div",{class:"v\xe4nster",children:Object(a.jsxs)("p",{class:"undertext",children:[Object(a.jsxs)("p",{class:"\xf6vertext",children:[new Date(i[O].finalDate).getDate()," ",f[new Date(i[O].finalDate).getMonth()]]})," Ber\xe4knat slutdatum"]})}),Object(a.jsx)("div",{class:"progress",children:Object(a.jsx)(_.a,{mask:"url(#mask)",fill:"white",options:{height:function(e,t){var n=m(new Date,new Date(t));return console.log("Days:"),console.log(n),"3.5"===e?(console.log(60-(8-n)/8*55),60-(8-n)/8*55):(console.log(60-(14-n)/14*55),60-(14-n)/14*55)}(i[O].sugarAmount,i[O].finalDate),amplitude:2,speed:.25,points:3},children:Object(a.jsxs)("defs",{children:[Object(a.jsxs)("linearGradient",{id:"gradient",gradientTransform:"rotate(90)",children:[Object(a.jsx)("stop",{offset:"1.0",stopColor:"white"}),Object(a.jsx)("stop",{offset:"4.5",stopColor:"black"})]}),Object(a.jsx)("mask",{id:"mask",children:Object(a.jsx)("rect",{x:"0",y:"0",width:"2000",height:"71",fill:"url(#gradient)"})})]})})}),Object(a.jsxs)("div",{class:"h\xf6ger",children:[Object(a.jsxs)("p",{class:"\xf6vertext",children:[" ",function(){var e;0===i[O].activeStep?e=0:1===i[O].activeStep?e=m(new Date,new Date(i[O].task2Date)):2===i[O].activeStep&&(e=m(new Date,new Date(i[O].finalDate)));return e}()," Dagar"]}),Object(a.jsx)("p",{class:"undertext",children:" till n\xe4sta uppgift "})]})]}),Object(a.jsxs)("div",{class:"bottom",children:[Object(a.jsxs)("div",{class:"v\xe4nster",children:[" ",Object(a.jsxs)("p",{class:"\xf6vertext",children:[" "," "]}),Object(a.jsxs)("p",{class:"undertext",children:[" Satser : ",i[O].volumeBatch]})]}),Object(a.jsxs)("div",{class:"mitten",children:[" ",Object(a.jsxs)("p",{class:"\xf6vertext",children:[" ",Math.round((t=i[O].ratio,n=i[O].sugarAmount,3.5===n?.01*t*11:.01*t*14)),"% "]}),Object(a.jsx)("p",{class:"undertext",children:" Alkohol "})," "]}),Object(a.jsxs)("div",{class:"h\xf6ger",children:[" ",Object(a.jsxs)("p",{class:"\xf6vertext",children:[" "," "]}),Object(a.jsxs)("p",{class:"undertext",children:[" Liter totalt: ",Math.round(i[O].volumeLiter)," "]})]})]})]}),Object(a.jsxs)("div",{id:"fulvinsnamn",children:[Object(a.jsx)("div",{class:"prevone",children:Object(a.jsx)("button",{id:v,onClick:function(){O>0&&x(O-1)}})}),Object(a.jsx)("div",{class:"prevtwo",children:Object(a.jsxs)("p",{class:"fulvinsnamn_text",children:[" ",i[O].name," "]})}),Object(a.jsx)("div",{class:"prevtre",children:Object(a.jsx)("button",{id:g,onClick:function(){O<i.length-1&&(console.log(i.length),x(O+1))}})})]}),Object(a.jsx)("div",{classname:"plus1",children:Object(a.jsx)(d.b,{to:"/NewBrew",children:Object(a.jsxs)("button",{className:"plusBtn",children:[" ",Object(a.jsx)("div",{className:"icon",children:F})]})})}),Object(a.jsxs)("div",{id:"kommande",children:[" ",Object(a.jsx)("p",{id:"kommande_text",children:" Kommande uppgifter "}),i[O].activeStep<3&&1==p&&Object(a.jsx)("div",{id:"checkButton",onClick:function(){console.log("yjpjakdjskl");var e=Object(r.a)(i);e[O].activeStep=e[O].activeStep+1,c(e),console.log("hej funkar jagh")},children:C}),Object(a.jsx)(I,{months:f,brewList:i,nBrew:O})]}),Object(a.jsxs)("div",{id:"avslutade",children:[" ",Object(a.jsx)("p",{id:"kommande_text",children:" Avslutade uppgifter "}),Object(a.jsx)(B,{months:f,brewList:i,nBrew:O})]})]})):Object(a.jsx)(o,{});function m(e,t){var n=new Date(e.getFullYear(),e.getMonth(),e.getDate()),a=(new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-n.getTime())/864e5;return Math.floor(a)}function D(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n}},E=n(6);var G=function(){var e=Object(s.useState)("#F7727D"),t=Object(j.a)(e,2),n=t[0],c=t[1],l=Object(s.useState)("#AAAAAA"),b=Object(j.a)(l,2),h=b[0],u=b[1],O=Object(s.useState)("#AAAAAA"),x=Object(j.a)(O,2),p=x[0],v=x[1],g=i.a.useState(JSON.parse(localStorage.getItem("myValueInLocalStorage"))||[]),f=Object(j.a)(g,2),m=f[0],D=f[1];i.a.useEffect((function(){localStorage.setItem("myValueInLocalStorage",JSON.stringify(m))}),[m]);var k=Object(a.jsx)(A.a,{icon:S.d,color:n}),w=Object(a.jsx)(A.a,{icon:S.a,color:h}),I=Object(a.jsx)(A.a,{icon:S.c,color:p});return Object(a.jsx)("div",{children:Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(E.c,{children:[Object(a.jsx)(E.a,{path:"/NewBrew",children:Object(a.jsx)(N,{onNewBrew:function(e){D([].concat(Object(r.a)(m),[e]))},brewList:m})}),Object(a.jsx)(E.a,{path:"/Recepies",children:Object(a.jsx)(T,{})}),Object(a.jsx)(E.a,{path:"/Handbook",children:Object(a.jsx)(y,{})}),Object(a.jsx)(E.a,{path:"/Home",children:Object(a.jsx)(H,{brewList:m,setBrewListFunction:function(e){D(e)}})}),Object(a.jsx)(E.a,{path:"/",children:Object(a.jsx)(o,{})})]}),Object(a.jsxs)("div",{class:"Footer",children:[Object(a.jsx)(d.b,{to:"/Recepies",onClick:function(){return c("#AAAAAA"),u("#AAAAAA"),void v("#F7727D")},children:Object(a.jsxs)("div",{class:"Foot-left",children:[" ",Object(a.jsxs)("p",{class:"Footer_text",style:{color:p},children:[Object(a.jsx)("div",{className:"icon",children:I})," Recept "]})," "]})}),Object(a.jsxs)(d.b,{to:"/Home",onClick:function(){return c("#F7727D"),u("#AAAAAA"),void v("#AAAAAA")},children:[Object(a.jsx)("i",{class:"fas fa-home"}),Object(a.jsxs)("div",{class:"Foot-middle",children:[" ",Object(a.jsxs)("p",{class:"Footer_text",style:{color:n},children:[" ",Object(a.jsx)("div",{className:"icon",children:k})," Hem "]})," "]})]}),Object(a.jsx)(d.b,{to:"/Handbook",onClick:function(){return c("#AAAAAA"),u("#F7727D"),void v("#AAAAAA")},children:Object(a.jsxs)("div",{class:"Foot-right",children:[" ",Object(a.jsxs)("p",{class:"Footer_text",children:[Object(a.jsx)("div",{className:"icon",children:w})," Handbok "]})," "]})})]})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};l.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root")),J()}},[[80,1,2]]]);
//# sourceMappingURL=main.815782e7.chunk.js.map