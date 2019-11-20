(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,n){e.exports=n(47)},37:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),c=n.n(i),s=(n(37),n(4)),o=n(5),l=n(7),u=n(6),h=n(8),p=(n(38),n(17)),d=n(14),m=function(e){var t=e.children;return r.a.createElement("header",{className:"App-header"},r.a.createElement(d.c,{className:"App-link",style:{marginRight:"10px"},to:"/"},"Home"),t)},f=n(3);function g(){return function(e){fetch("/api/v1/sketches").then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(t){e({type:"FETCH_SKETCHES",payload:t.data.map((function(e){return{id:e.id,name:e.attributes.name,url:e.links.sketch_url,lastUpdated:e.attributes.last_updated}}))})})).catch((function(e){return console.log(e)}))}}var E=function(e,t){return function(e){e({type:"CLEAR_CURRENT_SKETCH",payload:{id:"",name:"",elements:[]}})}},v=n(2),y=function(e){var t=e.sketches;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{key:e.id,to:e.url},e.name)," ",r.a.createElement("br",null))})))},k=n(31),b=Object(v.b)(null,{createSketch:function(e){return function(t){t({type:"SAVING_SKETCH"}),fetch("/api/v1/sketches",{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify(e)}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){t({type:"CREATE_SKETCH",payload:{id:e.data.id,name:e.data.attributes.name,elements:e.included.map((function(e){return{type:e.attributes.elementable_type,properties:e.attributes.elementable}}))}})})).catch((function(e){return console.log(e)}))}}})((function(e){var t=Object(a.useState)(""),n=Object(k.a)(t,2),i=n[0],c=n[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.createSketch({name:i})}},r.a.createElement("input",{type:"text",name:"name",value:i,onChange:function(e){c(e.target.value)},placeholder:"New Sketch Name"}),r.a.createElement("input",{type:"submit",value:"CREATE"}))})),C=(n(44),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.clearCurrentSketch(),this.props.sketches.length||this.props.fetchSketches()}},{key:"componentDidUpdate",value:function(){this.props.currentSketch.id&&this.props.history.push("/sketches/".concat(this.props.currentSketch.id,"/edit"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(b,null),r.a.createElement("div",{className:"recently-created"},r.a.createElement("h1",null,"Recently Created"),r.a.createElement(y,{sketches:this.props.sketches})),r.a.createElement("div",{className:"recently-updated"},r.a.createElement("h1",null,"Recently Updated"),r.a.createElement(y,{sketches:Object(f.a)(this.props.sketches).sort((function(e,t){return t.lastUpdated.localeCompare(e.lastUpdated)}))})))}}]),t}(r.a.Component)),S=Object(v.b)((function(e){return{sketches:e.sketches,currentSketch:e.currentSketch}}),{fetchSketches:g,clearCurrentSketch:E})(C);function O(e){return function(t){t({type:"LOADING_SKETCH"}),fetch("/api/v1/sketches/".concat(e)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){t({type:"FETCH_CURRENT_SKETCH",payload:{id:e.data.id,name:e.data.attributes.name,created:e.data.attributes.created,lastUpdated:e.data.attributes.last_updated,elements:e.included.map((function(e){return{type:e.attributes.elementable_type,properties:e.attributes.elementable}}))}})})).catch((function(e){return console.log(e)}))}}var w=n(16),j=function(e){var t=e.properties;return r.a.createElement("circle",{cx:t.cx,cy:t.cy,r:t.r,stroke:t.stroke,fill:t.fill,strokeWidth:t.stroke_width})},P=function(e){var t=e.properties;return r.a.createElement("line",{x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stroke:t.stroke,strokeWidth:t.stroke_width})},T=function(e){var t=e.properties;return r.a.createElement("rect",{x:t.x,y:t.y,width:t.width,height:t.height,stroke:t.stroke,fill:t.fill,strokeWidth:t.stroke_width})},D=function(e){var t=e.properties;return r.a.createElement("polyline",{points:t.points,stroke:t.stroke,fill:"transparent",strokeWidth:t.stroke_width})},R=function(e){return r.a.createElement(r.a.Fragment,null,e.elements.map((function(e){switch(e.type){case"Circle":return r.a.createElement(j,{properties:e.properties});case"Line":return r.a.createElement(P,{properties:e.properties});case"Rectangle":return r.a.createElement(T,{properties:e.properties});case"Polyline":return r.a.createElement(D,{properties:e.properties});default:return r.a.createElement("div",null,"Don't know what this is")}})))};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleOnMouseDown=function(t){e.sketchClientRect=e.sketchArea.current.getBoundingClientRect();var n=t.clientX-e.sketchClientRect.left,a=t.clientY-e.sketchClientRect.top;e.setState({isDrawing:!0}),e.startPoint.push(n,a)},e.handleOnMouseMove=function(t){if(e.state.isDrawing){var n=t.clientX-e.sketchClientRect.left,a=t.clientY-e.sketchClientRect.top,r=1e3/e.sketchClientRect.width,i=1e3/e.sketchClientRect.width,c=500/e.sketchClientRect.height;switch(e.props.settings.lineType){case"Circle":e.drawCircle(n,a,i,c);break;case"Line":e.drawLine(n,a,r);break;case"Rectangle":e.drawRectangle(n,a,r);break;case"Polyline":e.drawPolyline(n,a,r)}}},e.handleOnMouseUp=function(t){e.state.isDrawing&&(e.state.tempElements.length&&e.setState({isDrawing:!1,elements:[].concat(Object(f.a)(e.state.elements),Object(f.a)(e.state.tempElements)),tempElements:[]}),e.startPoint=[])},e.drawCircle=function(t,n,a,r){var i=Math.pow(Math.pow(t-e.startPoint[0],2)+Math.pow(n-e.startPoint[1],2),.5)*r;e.setState({tempElements:[{type:"Circle",properties:{cx:e.startPoint[0]*a,cy:e.startPoint[1]*r,r:i,stroke:e.getHSL(e.props.settings.lineColor),fill:e.getHSL(e.props.settings.fillColor),stroke_width:"".concat(e.props.settings.lineWidth)}}]})},e.drawLine=function(t,n,a){e.setState({tempElements:[{type:"Line",properties:{x1:e.startPoint[0]*a,y1:e.startPoint[1]*a,x2:t*a,y2:n*a,stroke:e.getHSL(e.props.settings.lineColor),stroke_width:"".concat(e.props.settings.lineWidth)}}]})},e.drawRectangle=function(t,n,a){e.setState({tempElements:[{type:"Rectangle",properties:{x:Math.min(e.startPoint[0],t)*a,y:Math.min(e.startPoint[1],n)*a,width:Math.abs(t-e.startPoint[0])*a,height:Math.abs(n-e.startPoint[1])*a,stroke:e.getHSL(e.props.settings.lineColor),fill:e.getHSL(e.props.settings.fillColor),stroke_width:"".concat(e.props.settings.lineWidth)}}]})},e.drawPolyline=function(t,n,a){e.state.tempElements.length?e.setState({tempElements:[{type:"Polyline",properties:N({},e.state.tempElements[0].properties,{points:e.state.tempElements[0].properties.points+" ".concat(t*a," ").concat(n*a)})}]}):e.setState({tempElements:[{type:"Polyline",properties:{points:"".concat(e.startPoint[0]*a," ").concat(e.startPoint[1]*a," ").concat(t*a," ").concat(n*a),stroke:e.getHSL(e.props.settings.lineColor),stroke_width:"".concat(e.props.settings.lineWidth)}}]})},e.handleSubmit=function(t){t.preventDefault(),e.props.handleSave(e.props.currentSketch.id,e.state)},e.getHSL=function(e){var t=e.h,n=e.s,a=e.l;return"hsl(".concat(t,",").concat(n,"%,").concat(a,"%)")},e.state={elements:[],tempElements:[],isDrawing:!1},e.sketchClientRect="",e.sketchArea=r.a.createRef(),e.startPoint=[],e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({elements:this.props.currentSketch.elements})}},{key:"componentDidUpdate",value:function(e){this.props.currentSketch&&this.props.currentSketch!==e.currentSketch&&this.setState({elements:this.props.currentSketch.elements})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"edit-sketch"},r.a.createElement("svg",{ref:this.sketchArea,viewBox:"0 0 1000 500",className:"sketch-board",onMouseDown:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseMove:this.handleOnMouseMove},r.a.createElement(R,{elements:[].concat(Object(f.a)(e.state.elements),Object(f.a)(e.state.tempElements))})),r.a.createElement("button",{onClick:this.handleSubmit},"SAVE")))}}]),t}(r.a.Component),H=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).updateDimensions=function(){e.hueBarClientRect=e.hueBar.current.getBoundingClientRect(),e.setState({sliderPosition:e.getSliderPosition(e.state.hue)})},e.handleOnMouseDown=function(t){e.hueBarClientRect=e.hueBar.current.getBoundingClientRect();var n=t.clientY-e.hueBarClientRect.top;e.setState({sliderPosition:n,hue:e.getHue(n)})},e.getHue=function(t){return t/e.hueBarClientRect.height*360},e.getSliderPosition=function(t){return e.hueBarClientRect.height*t/360},e.state={sliderPosition:0,hue:0},e.hueBarClientRect="",e.hueBar=r.a.createRef(),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.hueBarClientRect=this.hueBar.current.getBoundingClientRect(),window.addEventListener("resize",this.updateDimensions),this.setState({hue:this.props.initHue,sliderPosition:this.getSliderPosition(this.props.initHue)})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"componentDidUpdate",value:function(e,t){this.state.sliderPosition&&this.state.sliderPosition!==t.sliderPosition&&this.props.handleChange({h:this.state.hue})}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.hueBar,onMouseDown:this.handleOnMouseDown,className:"hue-bar",style:{background:"linear-gradient(to bottom,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(180,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))"}},r.a.createElement("div",{style:{backgroundColor:"hsl(".concat(this.state.hue,",100%,50%)"),width:"140%",paddingTop:"70%",borderRadius:"35%",border:"1px solid white",position:"relative",top:"".concat(this.state.sliderPosition-15,"px"),display:"inline-block",right:"calc(20% + 1px)"}}))}}]),t}(r.a.Component),U=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleOnMouseDown=function(t){e.canvasClientRect=e.canvas.current.getBoundingClientRect();var n=t.clientY-e.canvasClientRect.top-e.canvasClientRect.height,a=t.clientX-e.canvasClientRect.left;e.setState({selectorPosition:{x:a,y:n},saturation:e.getSaturation(a,n),lightness:e.getLightness(a,n)})},e.updateDimensions=function(){e.canvas.current&&(e.canvasClientRect=e.canvas.current.getBoundingClientRect(),e.setState({selectorPosition:e.getSelectorPosition(e.state.saturation,e.state.lightness)}))},e.fillCanvas=function(){var t=e.canvas.current.getContext("2d");e.canvas.current.style.width="100%",e.canvas.current.style.height="100%";var n=e.canvas.current.height,a=e.canvas.current.width,r=t.createLinearGradient(0,0,0,n);r.addColorStop(0,"white"),r.addColorStop(1,"black");var i=t.createLinearGradient(0,0,a,0);i.addColorStop(0,"hsla("+e.props.initColor.h+",100%,50%,0)"),i.addColorStop(1,"hsla("+e.props.initColor.h+",100%,50%,1)"),t.fillStyle=r,t.fillRect(0,0,a,n),t.fillStyle=i,t.globalCompositeOperation="multiply",t.fillRect(0,0,a,n),t.globalCompositeOperation="source-over"},e.getSaturation=function(t,n){return 100*e.hsvSatToHslSat(e.getHSVSat(t),e.getHSVValue(n))},e.getLightness=function(t,n){return 100*e.hsvVToHslL(e.getHSVSat(t),e.getHSVValue(n))},e.getHSVSat=function(t){return t/e.canvasClientRect.width},e.getHSVValue=function(t){return-t/e.canvasClientRect.height},e.hsvSatToHslSat=function(e,t){return(2-e)*t<1?e*t/((2-e)*t):e*t/(2-(2-e)*t)},e.hsvVToHslL=function(e,t){return(2-e)*t/2},e.hslSatToHsvSat=function(e,t){return 2*(e*=t<.5?t:1-t)/(t+e)},e.hslLtoHsvV=function(e,t){return t+(e*=t<.5?t:1-t)},e.getSelectorPosition=function(t,n){return{x:e.hslSatToHsvSat(t/100,n/100)*e.canvasClientRect.width,y:-e.canvasClientRect.height*e.hslLtoHsvV(t/100,n/100)}},e.state={selectorPosition:{x:0,y:0},saturation:0,lightness:0},e.canvasClientRect="",e.canvas=r.a.createRef(),e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fillCanvas(),window.addEventListener("resize",this.updateDimensions),this.canvasClientRect=this.canvas.current.getBoundingClientRect(),this.setState({saturation:this.props.initColor.s,lightness:this.props.initColor.l,selectorPosition:this.getSelectorPosition(this.props.initColor.s,this.props.initColor.l)})}},{key:"componentDidUpdate",value:function(e,t){this.props.initColor.h!==e.initColor.h&&this.fillCanvas(),t.selectorPosition.x&&this.state.selectorPosition!==t.selectorPosition&&this.props.handleChange({s:this.state.saturation,l:this.state.lightness})}},{key:"render",value:function(){return r.a.createElement("div",{className:"sat-light-select"},r.a.createElement("canvas",{ref:this.canvas,onMouseDown:this.handleOnMouseDown,style:{verticalAlign:"top"}}),r.a.createElement("div",{style:{backgroundColor:"hsl(".concat(this.props.initColor.h,",").concat(this.state.saturation,"%,").concat(this.state.lightness,"%)"),width:"10px",height:"10px",border:"2px solid white",borderRadius:"7px",position:"relative",top:"".concat(this.state.selectorPosition.y-5,"px"),left:"".concat(this.state.selectorPosition.x-5,"px")}}))}}]),t}(r.a.Component),x=function(e){var t=e.color;return r.a.createElement("div",{className:"color-indicator",style:{backgroundColor:"hsl(".concat(t.h,",").concat(t.s,"%,").concat(t.l,"%)")}})},A=Object(v.b)(null,(function(e){return{updateLineColorSetting:function(t,n,a){return e({type:"UPDATE_LINE_COLOR",payload:{h:t,s:n,l:a}})},updateFillColorSetting:function(t,n,a){return e({type:"UPDATE_FILL_COLOR",payload:{h:t,s:n,l:a}})}}}))((function(e){var t=e.settings.lineColor,n=e.settings.fillColor,a=function(n){var a=n.h,r=void 0===a?t.h:a,i=n.s,c=void 0===i?t.s:i,s=n.l,o=void 0===s?t.l:s;e.updateLineColorSetting(r,c,o)},i=function(t){var a=t.h,r=void 0===a?n.h:a,i=t.s,c=void 0===i?n.s:i,s=t.l,o=void 0===s?n.l:s;e.updateFillColorSetting(r,c,o)};return r.a.createElement("div",{className:"color-selectors"},r.a.createElement("div",{className:"line-color"},r.a.createElement("div",{className:"hue-select"},r.a.createElement(H,{handleChange:a,initHue:e.settings.lineColor.h})),r.a.createElement("div",{className:"color-select"},r.a.createElement("h3",null,"Line Color"),r.a.createElement(U,{initColor:e.settings.lineColor,handleChange:a}),r.a.createElement(x,{color:e.settings.lineColor}))),r.a.createElement("div",{className:"fill-color"},r.a.createElement("div",{className:"hue-select"},r.a.createElement(H,{handleChange:i,initHue:e.settings.fillColor.h})),r.a.createElement("div",{className:"color-select"},r.a.createElement("h3",null,"Fill Color"),r.a.createElement(U,{initColor:e.settings.fillColor,handleChange:i}),r.a.createElement(x,{color:e.settings.fillColor}))))})),M=function(e){var t=function(t){t.target.value&&e.handleUpdate(t.target.value)},n=function(t){return t===e.lineWidth};return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:n("2")?"selected":null,onClick:t,value:2,style:{height:"50%",width:"18%",margin:"1%"}},r.a.createElement("div",{style:{background:"black",width:"2px",height:"2px"}})),r.a.createElement("button",{className:n("4")?"selected":null,onClick:t,value:4,style:{height:"50%",width:"18%",margin:"1%"}},r.a.createElement("div",{style:{background:"black",width:"4px",height:"4px"}})),r.a.createElement("button",{className:n("6")?"selected":null,onClick:t,value:6,style:{height:"50%",width:"18%",margin:"1%"}},r.a.createElement("div",{style:{background:"black",width:"6px",height:"6px"}})),r.a.createElement("button",{className:n("8")?"selected":null,onClick:t,value:8,style:{height:"50%",width:"18%",margin:"1%"}},r.a.createElement("div",{style:{background:"black",width:"8px",height:"8px"}})),r.a.createElement("button",{className:n("10")?"selected":null,onClick:t,value:10,style:{height:"50%",width:"18%",margin:"1%"}},r.a.createElement("div",{style:{background:"black",width:"10px",height:"10px"}})))},I=function(e){var t=function(t){console.log(t.target.value),e.handleUpdate(t.target.value)},n=function(t){return t===e.lineType};return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:n("Circle")?"selected":null,onClick:t,value:"Circle",style:{paddingTop:"21%",margin:"1%",background:"url(/images/Circle.png)",backgroundSize:"cover"}}," "),r.a.createElement("button",{className:n("Line")?"selected":null,onClick:t,value:"Line",style:{paddingTop:"21%",margin:"1%",background:"url(/images/Line.png)",backgroundSize:"cover"}},"  "),r.a.createElement("button",{className:n("Rectangle")?"selected":null,onClick:t,value:"Rectangle",style:{paddingTop:"21%",margin:"1%",background:"url(/images/Rectangle.png)",backgroundSize:"cover"}}," "),r.a.createElement("button",{className:n("Polyline")?"selected":null,onClick:t,value:"Polyline",style:{paddingTop:"21%",margin:"1%",background:"url(/images/Free.png)",backgroundSize:"cover"}},"  "))},B=Object(v.b)(null,(function(e){return{updateLineWidthSetting:function(t){return e({type:"UPDATE_LINE_WIDTH",payload:t})},updateLineTypeSetting:function(t){return e({type:"UPDATE_LINE_TYPE",payload:t})}}}))((function(e){return r.a.createElement("div",{className:"stroke-selectors"},r.a.createElement("h3",null,"Line Width"),r.a.createElement("div",{className:"line-width"},r.a.createElement(M,{handleUpdate:function(t){e.updateLineWidthSetting(t)},lineWidth:e.settings.lineWidth})),r.a.createElement("h3",null,"Line Type"),r.a.createElement("div",{className:"line-type"},r.a.createElement(I,{handleUpdate:function(t){e.updateLineTypeSetting(t)},lineType:e.settings.lineType})))})),K=(n(45),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleUpdateSketch=function(e,t){n.props.updateSketch(e,t)},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.match.params.sketchID!==this.props.currentSketch.id&&this.props.fetchSketch(this.props.match.params.sketchID)}},{key:"componentWillUnmount",value:function(){this.props.clearCurrentSketch()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"edit-view"},e.props.currentSketch.loading?r.a.createElement("h1",null,"LOADING"):e.props.currentSketch.saving?r.a.createElement("h1",null,"SAVING"):void 0,r.a.createElement("div",{className:"settings"},r.a.createElement(A,{settings:this.props.settings}),r.a.createElement(B,{settings:this.props.settings})),r.a.createElement(L,{settings:this.props.settings,currentSketch:this.props.currentSketch,handleSave:this.handleUpdateSketch}))}}]),t}(r.a.Component)),W=Object(v.b)((function(e){return{settings:e.settings,currentSketch:e.currentSketch}}),(function(e){return{fetchSketch:function(t){return e(O(t))},updateSketch:function(t,n){return e(function(e,t){return function(n){n({type:"SAVING_SKETCH"}),fetch("/api/v1/sketches/".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"PATCH",body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){n({type:"UPDATE_CURRENT_SKETCH",payload:{id:e.data.id,name:e.data.attributes.name,elements:e.included.map((function(e){return{type:e.attributes.elementable_type,properties:e.attributes.elementable}}))}}),n({type:"UPDATE_SKETCH",payload:{id:e.data.id,lastUpdated:e.data.attributes.last_updated}})})).catch((function(e){return console.log(e)}))}}(t,n))},clearCurrentSketch:function(){return e((function(e){e({type:"CLEAR_CURRENT_SKETCH",payload:{id:"",name:"",elements:[]}})}))}}}))(K),V=function(e){return r.a.createElement("svg",{viewBox:"0 0 1000 500",className:"sketch-board preview"},r.a.createElement(R,{elements:e.elements}))},F=(n(46),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){n.props.clearCurrentSketch(),n.props.deleteSketch(n.props.currentSketch.id)},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.match.params.sketchID!==this.props.currentSketch.id&&this.props.fetchSketch(this.props.match.params.sketchID),this.props.sketches.length||this.props.fetchSketches()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.sketchID!==e.match.params.sketchID&&this.props.fetchSketch(this.props.match.params.sketchID)}},{key:"render",value:function(){return r.a.createElement("div",{className:"sketch-view"},r.a.createElement(b,null),r.a.createElement("div",{className:"sketch-list"},r.a.createElement("h1",null,"Sketches"),r.a.createElement(y,{sketches:Object(f.a)(this.props.sketches).sort((function(e,t){return t.lastUpdated.localeCompare(e.lastUpdated)}))})),r.a.createElement("div",{className:"sketch-data"},r.a.createElement("h1",null,this.props.currentSketch.name),r.a.createElement("h6",null,"Created: ",this.props.currentSketch.created),r.a.createElement("h6",null,"Updated: ",this.props.currentSketch.lastUpdated),r.a.createElement(d.b,{to:"/sketches/".concat(this.props.currentSketch.id,"/edit")},"EDIT"),r.a.createElement("button",{onClick:this.handleClick},"DELETE")),r.a.createElement("div",{className:"sketch-show"},r.a.createElement(V,{elements:this.props.currentSketch.elements,handleSave:this.handleUpdateSketch})))}}]),t}(r.a.Component)),G=Object(v.b)((function(e){return{sketches:e.sketches,currentSketch:e.currentSketch}}),{fetchSketch:O,fetchSketches:g,deleteSketch:function(e){return function(t){fetch("/api/v1/sketches/".concat(e),{method:"DELETE"}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){t({type:"DELETE_SKETCH",payload:e})})).catch((function(e){return console.log(e)}))}},clearCurrentSketch:E})(F),z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(S,e)}}),r.a.createElement(p.a,{exact:!0,path:"/sketches/:sketchID",render:function(e){return r.a.createElement(G,e)}}),r.a.createElement(p.a,{path:"/sketches/:sketchID/edit",render:function(e){return r.a.createElement(W,e)}}))}}]),t}(r.a.Component),Y=n(18),X=n(30);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SKETCHES":return t.payload;case"CREATE_SKETCH":return[].concat(Object(f.a)(e),[{id:t.payload.id,name:t.payload.name,url:"/sketches/".concat(t.payload.id)}]);case"DELETE_SKETCH":var n=e.findIndex((function(e){return e.id==t.payload}));return[].concat(Object(f.a)(e.slice(0,n)),Object(f.a)(e.slice(n+1)));case"UPDATE_SKETCH":var a=e.findIndex((function(e){return e.id===t.payload.id}));return[].concat(Object(f.a)(e.slice(0,a)),[q({},e[a],{lastUpdated:t.payload.lastUpdated})],Object(f.a)(e.slice(a+1)));default:return e}};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:"",name:"",elements:[],created:"",lastUpdated:"",loading:!1,saving:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_SKETCH":return $({},e,{loading:!0});case"SAVING_SKETCH":return $({},e,{saving:!0});case"CREATE_SKETCH":return $({},e,{id:t.payload.id,name:t.payload.name,elements:t.payload.elements,loading:!1,saving:!1});case"FETCH_CURRENT_SKETCH":case"CLEAR_CURRENT_SKETCH":case"UPDATE_CURRENT_SKETCH":return $({},e,{id:t.payload.id,name:t.payload.name,elements:t.payload.elements,created:t.payload.created,lastUpdated:t.payload.lastUpdated,loading:!1,saving:!1});default:return e}};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lineColor:{h:0,s:100,l:50},lineWidth:"4",lineType:"Line",fillColor:{h:0,s:100,l:50}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LINE_COLOR":return ne({},e,{lineColor:{h:t.payload.h,s:t.payload.s,l:t.payload.l}});case"UPDATE_FILL_COLOR":return ne({},e,{fillColor:{h:t.payload.h,s:t.payload.s,l:t.payload.l}});case"UPDATE_LINE_WIDTH":return ne({},e,{lineWidth:t.payload});case"UPDATE_LINE_TYPE":return ne({},e,{lineType:t.payload});default:return e}},re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.d,ie=Object(Y.c)({sketches:Q,currentSketch:ee,settings:ae}),ce=Object(Y.e)(ie,re(Object(Y.a)(X.a)));c.a.render(r.a.createElement(v.a,{store:ce},r.a.createElement(d.a,null,r.a.createElement(z,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.00d29a2c.chunk.js.map