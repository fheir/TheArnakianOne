(this.webpackJsonparnaksolo=this.webpackJsonparnaksolo||[]).push([[0],{45:function(t,e,i){},46:function(t,e,i){},52:function(t,e,i){"use strict";i.r(e);var n=i(4),a=i(0),c=i.n(a),r=i(13),s=i.n(r),o=(i(45),i(16)),d=i(17),l=i(18),f=i(20),u=i(19),b=i.p+"static/media/back_right.5d7514db.png",p=i.p+"static/media/back_left.f9380e33.png",h=i.p+"static/media/basic_front_1.2fee07ec.png",j=i.p+"static/media/basic_front_2.c502fa87.png",v=i.p+"static/media/basic_front_3.794612d8.png",O=i.p+"static/media/basic_front_4.46b1bc0b.png",g=i.p+"static/media/basic_front_5.f420f6d7.png",m=i.p+"static/media/green_front_1.c70d1160.png",y=i.p+"static/media/green_front_2.96fdcca1.png",k=i.p+"static/media/green_front_3.66f05e8f.png",_=i.p+"static/media/green_front_4.b57910a3.png",x=i.p+"static/media/green_front_5.8f95a384.png",D=i.p+"static/media/red_front_1.f8058cf3.png",C=i.p+"static/media/red_front_2.b806a5a3.png",w=i.p+"static/media/red_front_3.7ed0661c.png",I=i.p+"static/media/red_front_4.4586df07.png",S=i.p+"static/media/red_front_5.ef415b43.png",N=i.p+"static/media/purple_front_1.b9b9da93.png",T=i.p+"static/media/purple_front_2.721046a8.png",L=i.p+"static/media/purple_front_3.d422f7b3.png",M=i.p+"static/media/purple_front_4.5d137886.png",R=i.p+"static/media/purple_front_5.d823700f.png",A=i.p+"static/media/objective_front_1.b636a3a6.png",E=i.p+"static/media/objective_front_2.9a6dd850.png",F=i.p+"static/media/objective_front_3.ebcc7853.png",P=i.p+"static/media/objective_front_4.9754c7d5.png",B=i.p+"static/media/objective_front_5.9387c67c.png",G=(i.p,i(46),i(53)),J=i(35),V=i(76),z=i(80),H=i(78),q=i(79),K=i(77),Q=(i(47),[{id:1,front:h,back:b},{id:2,front:j,back:p},{id:3,front:v,back:b},{id:4,front:O,back:p},{id:5,front:g,back:b}]),U=[{id:1,front:m,back:p,difficulty:0},{id:2,front:y,back:b,difficulty:0},{id:3,front:k,back:p,difficulty:0},{id:4,front:_,back:b,difficulty:0},{id:5,front:x,back:p,difficulty:0}],W=[{id:1,front:D,back:p,difficulty:1},{id:2,front:C,back:b,difficulty:1},{id:3,front:w,back:p,difficulty:1},{id:4,front:I,back:b,difficulty:1},{id:5,front:S,back:p,difficulty:1}],X=[{id:1,front:N,back:p,difficulty:2},{id:2,front:T,back:b,difficulty:2},{id:3,front:L,back:p,difficulty:2},{id:4,front:M,back:b,difficulty:2},{id:5,front:R,back:p,difficulty:2}],Y=[{id:1,front:A},{id:2,front:E},{id:3,front:F},{id:4,front:P},{id:5,front:B}],Z=function(t){Object(f.a)(i,t);var e=Object(u.a)(i);function i(){return Object(d.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"componentDidMount",value:function(){document.title="Arnak Solo",document.description="hello"}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"root-container",children:[Object(n.jsxs)(G.a,{align:"center",variant:"h5",children:["Lost Ruins of Arnak Solo Helper ","v0.67"]}),Object(n.jsx)(et,{})]})}}]),i}(c.a.Component);function $(t){var e,i,n;for(n=t.length-1;n>0;n--)e=Math.floor(Math.random()*(n+1)),i=t[n],t[n]=t[e],t[e]=i;return t}var tt=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,a=!1,c=void 0;try{for(var r,s=t[Symbol.iterator]();!(n=(r=s.next()).done)&&(i.push(r.value),!e||i.length!==e);n=!0);}catch(o){a=!0,c=o}finally{try{!n&&s.return&&s.return()}finally{if(a)throw c}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},et=function(t){Object(f.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(d.a)(this,i),(n=e.call(this,t)).state={selectedDeck:[],cardsInDeck:[],cardsInDiscard:[],numberOfObjectives:3,selectedObjectives:[],difficulty:-1,deviceOrientation:"portrait"},n.changedOrientation=n.changedOrientation.bind(Object(o.a)(n)),n.onDifficultySelected=n.onDifficultySelected.bind(Object(o.a)(n)),n}return Object(l.a)(i,[{key:"changedOrientation",value:function(){var t="portrait",e=0;if(window.orientation&&(e=window.orientation,t=90===Math.abs(e)?"landscape":"portrait"),window.screen.orientation){var i=window.screen.orientation.type.split("-"),n=tt(i,2);t=n[0]}console.log(t),this.setState((function(){return{deviceOrientation:t}}))}},{key:"componentDidMount",value:function(){window.screen.orientation&&"onchange"in window.screen.orientation?(window.screen.orientation.addEventListener("change",this.changedOrientation),this.changedOrientation()):"onorientationchange"in window?(window.addEventListener("orientationchange",this.changedOrientation),this.changedOrientation()):console.warn("No orientationchange events")}},{key:"onDifficultySelected",value:function(t,e,i){var n=Q.slice();if(t%5===0)0===t?n=$(n.concat(U)):5===t?n=$(n.concat(W)):10===t&&(n=$(n.concat(X)));else{var a=[];t<5?a=this.selectDifficultyCards(t,U.slice(),W.slice()):t>5&&(a=this.selectDifficultyCards(t%5,W.slice(),X.slice())),n=$(n.concat(a))}i||(e=0);var c=i?this.selectObjectiveCards(e):[];this.setState((function(){return{selectedDeck:n.slice(),cardsInDeck:n.slice(),cardsInDiscard:[],selectedObjectives:c.slice(),difficulty:t,numberOfObjectives:e}}))}},{key:"selectDifficultyCards",value:function(t,e,i){for(var n=[],a=1,c=function(){r=Math.floor(Math.random()*i.length),s=i.splice(r,1),n.push(s[0]);var t=s[0].id;e=e.filter((function(e){return e.id!==t})),a++};a<=t;){var r,s;c()}return n=n.concat(e)}},{key:"selectObjectiveCards",value:function(t){var e=$(Y.slice());return e.splice(0,5-t),e}},{key:"handleDrawCard",value:function(){var t=[],e=[];if(this.state.cardsInDeck.length>0)t=this.state.cardsInDeck.slice(),(e=this.state.cardsInDiscard.slice()).push(t.splice(t.length-1,1)[0]),this.setState((function(){return{cardsInDeck:t,cardsInDiscard:e}}));else{t=$(this.state.selectedDeck.slice()),e=[];var i=this.selectObjectiveCards(this.state.numberOfObjectives);this.setState((function(){return{selectedObjectives:i,cardsInDeck:t,cardsInDiscard:e}}))}}},{key:"render",value:function(){var t,e,i,a=this,c=this.state.difficulty<0,r=this.state.numberOfObjectives>0?"":"-noobj",s="draw-pile-"+this.state.deviceOrientation+r;c?t=Object(n.jsx)(nt,{orientation:this.state.deviceOrientation,onClick:this.onDifficultySelected}):(e=Object(n.jsx)(at,{orientation:this.state.deviceOrientation,cards:this.state.cardsInDeck,discard:this.state.cardsInDiscard,name:s,canDraw:!0,drawIndex:this.state.cardsInDeck.length>0?this.state.cardsInDeck.length-1:0,discardIndex:this.state.cardsInDiscard.length>0?this.state.cardsInDiscard.length-1:0,onClick:function(){return a.handleDrawCard()}}),i=Object(n.jsx)(ct,{orientation:this.state.deviceOrientation,cards:this.state.selectedObjectives}));var o="cards-container-"+this.state.deviceOrientation;return Object(n.jsxs)("div",{className:o,children:[t,i,e]})}}]),i}(c.a.Component),it=Object(J.a)({typography:{subtitle1:{fontSize:20}}}),nt=function(t){Object(f.a)(i,t);var e=Object(u.a)(i);function i(t){var n;return Object(d.a)(this,i),(n=e.call(this,t)).state={difficultyText:"5 Green Cards",difficulty:0,numObjectives:3,objectivesOn:!0},n.toggleObjectives=n.toggleObjectives.bind(Object(o.a)(n)),n}return Object(l.a)(i,[{key:"friendlyDifficultyString",value:function(){var t="";if(this.state.difficulty%5===0)0===this.state.difficulty?t="5 Green Cards":5===this.state.difficulty?t="5 Red Cards":10===this.state.difficulty&&(t="5 Purple Cards");else{var e=this.state.difficulty%5,i=5-e;this.state.difficulty<5?t=i+" Green "+this.state.difficulty+" Red Cards":this.state.difficulty>5&&(t=i+" Red "+e+" Purple Cards")}return t}},{key:"toggleObjectives",value:function(){var t=!this.state.objectivesOn;console.log("toggle"),this.setState((function(){return{objectivesOn:t}}))}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{className:"difficulty-container",children:[Object(n.jsx)(G.a,{id:"discrete-slider",gutterBottom:!0,children:"Select Difficulty"}),Object(n.jsx)(V.a,{theme:it,children:Object(n.jsx)(G.a,{variant:"subtitle1",align:"center",className:"difficulty-text",children:this.state.difficultyText})}),Object(n.jsx)("div",{className:"slider-container",children:Object(n.jsx)(z.a,{className:"slider-component",defaultValue:0,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",marks:!0,step:1,min:0,max:10,onChange:function(e,i){return t.setState((function(){return{difficultyText:t.friendlyDifficultyString(),difficulty:i}}))},onChangeCommitted:function(e,i){return t.setState((function(){return{difficultyText:t.friendlyDifficultyString(),difficulty:i}}))}})}),Object(n.jsx)(K.a,{control:Object(n.jsx)(q.a,{checked:this.state.objectivesOn,onChange:this.toggleObjectives,color:"primary"}),label:"Select Number of Objectives"}),Object(n.jsx)("div",{className:"objectives-slider-container",children:Object(n.jsx)(z.a,{className:"objectives-slider-container",defaultValue:3,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",marks:!0,step:1,min:2,max:4,disabled:!this.state.objectivesOn,onChange:function(e,i){return t.setState((function(){return{numObjectives:i}}))},onChangeCommitted:function(e,i){return t.setState((function(){return{numObjectives:i}}))}})}),Object(n.jsx)(H.a,{variant:"contained",color:"primary",onClick:function(){return t.props.onClick(t.state.difficulty,t.state.numObjectives,t.state.objectivesOn)},children:"Start"})]})}}]),i}(c.a.Component),at=function(t){Object(f.a)(i,t);var e=Object(u.a)(i);function i(t){return Object(d.a)(this,i),e.call(this,t)}return Object(l.a)(i,[{key:"render",value:function(){var t,e,i,a,c=this,r=this.props.cards.length<=0,s="Draw-"+this.props.orientation,o="Discard-"+this.props.orientation,d="Tiebreaker-"+this.props.orientation;return this.props.cards[this.props.drawIndex]&&(t=Object(n.jsx)("img",{className:s,src:this.props.cards[this.props.drawIndex].back}),a="Cards Left: "+this.props.cards.length),this.props.discard[this.props.discardIndex]&&(r&&(i=Object(n.jsx)("img",{className:d,src:this.props.discard[0].back}),a="Deck empty: Tiebreaker shown"),e=Object(n.jsx)("img",{className:o,src:this.props.discard[this.props.discardIndex].front})),Object(n.jsxs)("div",{className:this.props.name,children:[t,i,e,Object(n.jsxs)("div",{children:[Object(n.jsx)(G.a,{variant:"h5",children:a}),this.props.canDraw?Object(n.jsx)(H.a,{variant:"contained",color:"primary",onClick:function(){return c.props.onClick()},children:this.props.cards.length>0?"Draw":"Next Round"}):null]})]})}}]),i}(c.a.Component),ct=function(t){Object(f.a)(i,t);var e=Object(u.a)(i);function i(t){return Object(d.a)(this,i),e.call(this,t)}return Object(l.a)(i,[{key:"render",value:function(){for(var t="Objectives-Container-"+this.props.orientation,e="Objectives-"+this.props.orientation,i=[],a=0;a<this.props.cards.length;a++)i.push(Object(n.jsx)("img",{className:e,src:this.props.cards[a]?this.props.cards[a].front:null},a));return Object(n.jsx)("div",{className:t,children:i})}}]),i}(c.a.Component),rt=Z,st=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,81)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;i(t),n(t),a(t),c(t),r(t)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(rt,{})}),document.getElementById("root")),st()}},[[52,1,2]]]);
//# sourceMappingURL=main.aebd15f0.chunk.js.map