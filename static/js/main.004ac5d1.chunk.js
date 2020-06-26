(this["webpackJsonpgoit-react-hw-03-image-finder-infinite-scroll"]=this["webpackJsonpgoit-react-hw-03-image-finder-infinite-scroll"]||[]).push([[0],{24:function(e,t,a){e.exports=a(72)},29:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=(a(29),a(8)),s=a.n(l),i=a(9),u=a(20),m=a(3),g=a(4),h=a(6),p=a(5),d=a(21),f=a(22),v=a.n(f),b="16727206-7ae7a1f614d6d42142bf6389f",y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2?arguments[2]:void 0;return v.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=").concat(a,"&key=").concat(b)).then((function(e){return e}))},E=a(23),w=a.n(E),I=(a(69),function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement(w.a,{type:"Rings",color:"#20b2aa",height:200,width:200,timeout:3e3}))}),S=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search...",onChange:this.handleChange,value:this.state.inputValue})))}}]),a}(n.Component),M=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,o=e.onGetLargeImageUrl;return r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{src:t,alt:n,className:"ImageGalleryItem-image",onClick:function(){return o(a)}}))},N=function(e){var t=e.images,a=e.onGetLargeImageUrl;return r.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){return r.a.createElement(M,Object.assign({key:e.id},e,{onGetLargeImageUrl:a}))})))},O=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeModal=function(t){"Escape"===t.code&&e.props.onCloseModal()},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModal)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Overlay"},r.a.createElement("div",{className:"Modal"},this.props.children))}}]),a}(n.Component),T=a(7),k=a.n(T),j=(a(71),function(e){var t=e.message,a=e.error,n=e.type;return T.store.addNotification({title:"".concat(t),message:"".concat(a),type:"".concat(n),insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:5e3}}),r.a.createElement(k.a,null)}),C=function(e){var t=e.largeImg,a=e.closeModal;return r.a.createElement("div",{className:"ModalWrapper"},r.a.createElement("img",{src:t,alt:t}),r.a.createElement("button",{type:"button",className:"CloseModal",onClick:a}))},L=function(e){var t=e.atTheTop,a=e.toggleButton;return r.a.createElement("button",{type:"button",className:t?"ToBottomBtn":"ToTopBtn",onClick:a})},U=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},F=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,searchQuery:"",page:1,perPage:12,largeImg:null,atTheTop:!1,hasMore:!0},e.fetchImages=Object(u.a)(s.a.mark((function t(){var a,n,r,o,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.searchQuery,r=a.page,o=a.perPage,e.setState({hasMore:!0}),t.prev=2,t.next=5,y(n,r,o);case 5:c=t.sent,e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(c.data.hits)),page:e.page+1,hasMore:c.data.total>0}})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])}))),e.handleSearchSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.getLargeImageUrl=function(t){e.setState({largeImg:t})},e.closeModal=function(){e.setState({largeImg:null})},e.toggleButton=function(){e.setState((function(e){return{atTheTop:!e.atTheTop}})),e.state.atTheTop?U():window.scrollTo(0,0)},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){this.fetchImages()}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.searchQuery;t.searchQuery!==a&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,n=e.largeImg,o=e.atTheTop,c=e.hasMore;return r.a.createElement("div",{className:"App"},a&&r.a.createElement(j,{message:"Whoops, something went wrong",error:a.message,type:"danger"}),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{onSubmit:this.handleSearchSubmit}),!c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"NotFound"}),r.a.createElement(j,{message:"Whoops, something went wrong",error:"No matches found",type:"danger"}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{dataLength:t.length,next:this.fetchImages,hasMore:c,loader:r.a.createElement(I,null)},r.a.createElement(N,{images:t,onGetLargeImageUrl:this.getLargeImageUrl})),t.length>0&&r.a.createElement(L,{atTheTop:o,toggleButton:this.toggleButton}),n&&r.a.createElement(O,{onCloseModal:this.closeModal},r.a.createElement(C,{largeImg:n,closeModal:this.closeModal}))))}}]),a}(n.Component);c.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.004ac5d1.chunk.js.map