(this.webpackJsonparnaksolo=this.webpackJsonparnaksolo||[]).push([[0],{38:function(t,i,e){},39:function(t,i,e){},44:function(t,i,e){"use strict";e.r(i);var c=e(4),n=e(0),a=e.n(n),r=e(13),s=e.n(r),d=(e(38),e(19)),f=e(24),l=e(25),o=e(27),u=e(26),p=e.p+"static/media/back_right.5d7514db.png",h=e.p+"static/media/back_left.f9380e33.png",b=e.p+"static/media/basic_front_1.2fee07ec.png",y=e.p+"static/media/basic_front_2.c502fa87.png",g=e.p+"static/media/basic_front_3.794612d8.png",j=e.p+"static/media/basic_front_4.46b1bc0b.png",m=e.p+"static/media/basic_front_5.f420f6d7.png",k=e.p+"static/media/green_front_1.c70d1160.png",_=e.p+"static/media/green_front_2.96fdcca1.png",v=e.p+"static/media/green_front_3.66f05e8f.png",D=e.p+"static/media/green_front_4.b57910a3.png",O=e.p+"static/media/green_front_5.8f95a384.png",x=e.p+"static/media/red_front_1.f8058cf3.png",C=e.p+"static/media/red_front_2.b806a5a3.png",I=e.p+"static/media/red_front_3.7ed0661c.png",S=e.p+"static/media/red_front_4.4586df07.png",w=e.p+"static/media/red_front_5.ef415b43.png",N=e.p+"static/media/purple_front_1.b9b9da93.png",M=e.p+"static/media/purple_front_2.721046a8.png",T=e.p+"static/media/purple_front_3.d422f7b3.png",F=e.p+"static/media/purple_front_4.5d137886.png",L=e.p+"static/media/purple_front_5.d823700f.png",P=(e(39),e(60)),R=e(63),B=e(62),G=[{id:1,front:b,back:p},{id:2,front:y,back:h},{id:3,front:g,back:p},{id:4,front:j,back:h},{id:5,front:m,back:p}],J=[{id:1,front:k,back:h,difficulty:0},{id:2,front:_,back:p,difficulty:0},{id:3,front:v,back:h,difficulty:0},{id:4,front:D,back:p,difficulty:0},{id:5,front:O,back:h,difficulty:0}],A=[{id:1,front:x,back:h,difficulty:1},{id:2,front:C,back:p,difficulty:1},{id:3,front:I,back:h,difficulty:1},{id:4,front:S,back:p,difficulty:1},{id:5,front:w,back:h,difficulty:1}],E=[{id:1,front:N,back:h,difficulty:2},{id:2,front:M,back:p,difficulty:2},{id:3,front:T,back:h,difficulty:2},{id:4,front:F,back:p,difficulty:2},{id:5,front:L,back:h,difficulty:2}];function V(t){var i,e,c;for(c=t.length-1;c>0;c--)i=Math.floor(Math.random()*(c+1)),e=t[c],t[c]=t[i],t[i]=e;return t}var q=function(t){Object(o.a)(e,t);var i=Object(u.a)(e);function e(t){var c;return Object(f.a)(this,e),(c=i.call(this,t)).state={difficultyText:"5 Green Cards",difficulty:0},c}return Object(l.a)(e,[{key:"friendlyDifficultyString",value:function(){var t="";if(this.state.difficulty%5==0)0==this.state.difficulty?(console.log("get string"),t="5 Green Cards"):5==this.state.difficulty?t="5 Red Cards":10==this.state.difficulty&&(t="5 Purple Cards");else{var i=this.state.difficulty%5,e=5-i;this.state.difficulty<5?t=e+" Green "+this.state.difficulty+" Red Cards":this.state.difficulty>5&&(t=e+" Red "+i+" Purple Cards")}return t}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"difficulty-container",children:[Object(c.jsx)(P.a,{id:"discrete-slider",gutterBottom:!0,children:"Select Difficulty"}),Object(c.jsxs)("div",{className:"slider-container",children:[Object(c.jsx)(P.a,{className:"difficulty-text",children:this.state.difficultyText}),Object(c.jsx)(R.a,{className:"slider-component",defaultValue:0,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",marks:!0,step:1,min:0,max:10,onChange:function(i,e){return t.setState((function(){return{difficultyText:t.friendlyDifficultyString(),difficulty:e}}))},onChangeCommitted:function(i,e){return t.setState((function(){return{difficultyText:t.friendlyDifficultyString(),difficulty:e}}))}})]}),Object(c.jsx)(B.a,{variant:"contained",color:"primary",onClick:function(){return t.props.onClick(t.state.difficulty)},children:"Start"})]})}}]),e}(a.a.Component),z=function(t){Object(o.a)(e,t);var i=Object(u.a)(e);function e(t){var c;return Object(f.a)(this,e),(c=i.call(this,t)).state={cardsInDeck:[],cardsInDiscard:[],difficulty:-1},c.onDifficultySelected=c.onDifficultySelected.bind(Object(d.a)(c)),c}return Object(l.a)(e,[{key:"onDifficultySelected",value:function(t){var i=G.slice();if(t%5==0)0==t?i=V(i.concat(J)):5==t?i=V(i.concat(A)):10==t&&(i=V(i.concat(E)));else{var e=[];t<5?e=this.selectDifficultyCards(t,J.slice(),A.slice()):t>5&&(e=this.selectDifficultyCards(t%5,A.slice(),E.slice())),i=V(i.concat(e))}this.setState((function(){return{cardsInDeck:i,cardsInDiscard:[],difficulty:t}}))}},{key:"selectDifficultyCards",value:function(t,i,e){for(var c=[],n=1;n<=t;){var a=Math.floor(Math.random()*e.length),r=e.splice(a,1);console.log(r[0]),c.push(r[0]);var s=Math.floor(Math.random()*i.length);i.splice(s,1),n++}return console.log(i),c=c.concat(i)}},{key:"handleDrawCard",value:function(){var t=this.state.cardsInDeck.slice(),i=this.state.cardsInDiscard.slice();i.push(t.splice(t.length-1,1)[0]),this.setState((function(){return{cardsInDeck:t,cardsInDiscard:i}}))}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"cards-container",children:[Object(c.jsx)(q,{onClick:this.onDifficultySelected}),Object(c.jsx)(H,{cards:this.state.cardsInDeck,name:"draw-pile",canDraw:this.state.cardsInDeck.length>0,index:this.state.cardsInDeck.length>0?this.state.cardsInDeck.length-1:0,onClick:function(){return t.handleDrawCard()}}),Object(c.jsx)(H,{cards:this.state.cardsInDiscard,name:"discard-pile",canDraw:!1,index:this.state.cardsInDiscard.length>0?this.state.cardsInDiscard.length-1:0})]})}}]),e}(a.a.Component),H=function(t){Object(o.a)(e,t);var i=Object(u.a)(e);function e(t){return Object(f.a)(this,e),i.call(this,t)}return Object(l.a)(e,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:this.props.name,children:[Object(c.jsx)("img",{className:"Draw",src:this.props.cards[this.props.index]?this.props.canDraw?this.props.cards[this.props.index].back:this.props.cards[this.props.index].front:null}),Object(c.jsx)("h1",{children:this.props.cards.length}),this.props.canDraw?Object(c.jsx)(B.a,{variant:"contained",color:"primary",onClick:function(){return t.props.onClick()},children:"Draw"}):null]})}}]),e}(a.a.Component),K=function(t){return Object(c.jsxs)("div",{className:"root-container",children:[Object(c.jsxs)("h1",{children:["Lost Ruins of Arnak - ","v0.1"]}),Object(c.jsx)(z,{})]})},Q=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,65)).then((function(i){var e=i.getCLS,c=i.getFID,n=i.getFCP,a=i.getLCP,r=i.getTTFB;e(t),c(t),n(t),a(t),r(t)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(K,{})}),document.getElementById("root")),Q()}},[[44,1,2]]]);
//# sourceMappingURL=main.52b81fea.chunk.js.map