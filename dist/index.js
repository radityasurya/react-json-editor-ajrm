!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("react-json-editor-ajrm",[],t):"object"==typeof exports?exports["react-json-editor-ajrm"]=t(require("react")):e["react-json-editor-ajrm"]=t(e[void 0])}("undefined"!=typeof self?self:this,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),a=p(s),c=p(n(3)),l=n(4),u=p(n(5));function p(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(!("id"in n.props))throw"An 'id' property must be specified. Must be unique.";return n.updateInternalProps=n.updateInternalProps.bind(n),n.randomString=n.randomString.bind(n),n.createMarkup=n.createMarkup.bind(n),n.onClick=n.onClick.bind(n),n.onBlur=n.onBlur.bind(n),n.update=n.update.bind(n),n.getCursorPosition=n.getCursorPosition.bind(n),n.setCursorPosition=n.setCursorPosition.bind(n),n.scheduledUpdate=n.scheduledUpdate.bind(n),n.setUpdateTime=n.setUpdateTime.bind(n),n.renderLabels=n.renderLabels.bind(n),n.newSpan=n.newSpan.bind(n),n.renderErrorMessage=n.renderErrorMessage.bind(n),n.onScroll=n.onScroll.bind(n),n.showPlaceholder=n.showPlaceholder.bind(n),n.tokenize=n.tokenize.bind(n),n.onKeyPress=n.onKeyPress.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n.onPaste=n.onPaste.bind(n),n.stopEvent=n.stopEvent.bind(n),n.uniqueID="AJRM-JSON-EDITOR-"+("test"in n.props?"<RANDOM_NUMBER>":n.randomString(10))+"-"+n.props.id,n.contentID=n.uniqueID+"-content-box",n.updateInternalProps(),n.renderCount=1,n.state={preText:"",markupText:"",plainText:"",json:"",jsObject:void 0,lines:!1,error:!1},n.props.locale||console.warn("[react-json-editor-ajrm - Deprecation Warning] You did not provide a 'locale' prop for your JSON input - This will be required in a future version. English has been set as a default."),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),o(t,[{key:"updateInternalProps",value:function(){var e={},t={},n=c.default.dark_vscode_tribute;"theme"in this.props&&"string"==typeof this.props.theme&&this.props.theme in c.default&&(n=c.default[this.props.theme]),e=n,"colors"in this.props&&(e={default:"default"in this.props.colors?this.props.colors.default:e.default,string:"string"in this.props.colors?this.props.colors.string:e.string,number:"number"in this.props.colors?this.props.colors.number:e.number,colon:"colon"in this.props.colors?this.props.colors.colon:e.colon,keys:"keys"in this.props.colors?this.props.colors.keys:e.keys,keys_whiteSpace:"keys_whiteSpace"in this.props.colors?this.props.colors.keys_whiteSpace:e.keys_whiteSpace,primitive:"primitive"in this.props.colors?this.props.colors.primitive:e.primitive,error:"error"in this.props.colors?this.props.colors.error:e.error,background:"background"in this.props.colors?this.props.colors.background:e.background,background_warning:"background_warning"in this.props.colors?this.props.colors.background_warning:e.background_warning}),this.colors=e,t="style"in this.props?{outerBox:"outerBox"in this.props.style?this.props.style.outerBox:{},container:"container"in this.props.style?this.props.style.container:{},warningBox:"warningBox"in this.props.style?this.props.style.warningBox:{},errorMessage:"errorMessage"in this.props.style?this.props.style.errorMessage:{},body:"body"in this.props.style?this.props.style.body:{},labelColumn:"labelColumn"in this.props.style?this.props.style.labelColumn:{},labels:"labels"in this.props.style?this.props.style.labels:{},contentBox:"contentBox"in this.props.style?this.props.style.contentBox:{}}:{outerBox:{},container:{},warningBox:{},errorMessage:{},body:{},labelColumn:{},labels:{},contentBox:{}},this.style=t,this.confirmGood=!("confirmGood"in this.props)||this.props.confirmGood;var r=this.props.height||"610px",i=this.props.width||"479px";this.totalHeight=r,this.totalWidth=i,"onKeyPressUpdate"in this.props&&!this.props.onKeyPressUpdate?this.timer&&(clearInterval(this.timer),this.timer=!1):this.timer||(this.timer=setInterval(this.scheduledUpdate,100)),this.updateTime=!1,this.waitAfterKeyPress="waitAfterKeyPress"in this.props?this.props.waitAfterKeyPress:1e3}},{key:"render",value:function(){var e=this.state.markupText,t=this.state.error,n=this.uniqueID,r=this.contentID,o=this.colors,s=this.style,c=this.confirmGood,l=this.totalHeight,u=this.totalWidth,p=!!t&&"token"in t;return this.renderCount++,a.default.createElement("div",{name:"outer-box",id:n+"-outer-box",style:i({display:"block",overflow:"none",height:l,width:u,margin:0,boxSizing:"border-box",position:"relative"},s.outerBox)},c?a.default.createElement("div",{style:{opacity:p?0:1,height:"30px",width:"30px",position:"absolute",top:0,right:0,transform:"translate(-25%,25%)",pointerEvents:"none",transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0, 1, 0.5, 1)"}},a.default.createElement("svg",{height:"30px",width:"30px",viewBox:"0 0 100 100"},a.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"green",opacity:"0.85",d:"M39.363,79L16,55.49l11.347-11.419L39.694,56.49L72.983,23L84,34.085L39.363,79z"}))):void 0,a.default.createElement("div",{name:"container",id:n+"-container",style:i({display:"block",height:l,width:u,margin:0,boxSizing:"border-box",overflow:"hidden",fontFamily:"Roboto, sans-serif"},s.container),onClick:this.onClick},a.default.createElement("div",{name:"warning-box",id:n+"-warning-box",style:i({display:"block",overflow:"hidden",height:p?"60px":"0px",width:"100%",margin:0,backgroundColor:o.background_warning,transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0, 1, 0.5, 1)"},s.warningBox),onClick:this.onClick},a.default.createElement("span",{style:{display:"inline-block",height:"60px",width:"60px",margin:0,boxSizing:"border-box",overflow:"hidden",verticalAlign:"top",pointerEvents:"none"},onClick:this.onClick},a.default.createElement("div",{style:{position:"relative",top:0,left:0,height:"60px",width:"60px",margin:0,pointerEvents:"none"},onClick:this.onClick},a.default.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none"},onClick:this.onClick},a.default.createElement("svg",{height:"25px",width:"25px",viewBox:"0 0 100 100"},a.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"red",d:"M73.9,5.75c0.467-0.467,1.067-0.7,1.8-0.7c0.7,0,1.283,0.233,1.75,0.7l16.8,16.8  c0.467,0.5,0.7,1.084,0.7,1.75c0,0.733-0.233,1.334-0.7,1.801L70.35,50l23.9,23.95c0.5,0.467,0.75,1.066,0.75,1.8  c0,0.667-0.25,1.25-0.75,1.75l-16.8,16.75c-0.534,0.467-1.117,0.7-1.75,0.7s-1.233-0.233-1.8-0.7L50,70.351L26.1,94.25  c-0.567,0.467-1.167,0.7-1.8,0.7c-0.667,0-1.283-0.233-1.85-0.7L5.75,77.5C5.25,77,5,76.417,5,75.75c0-0.733,0.25-1.333,0.75-1.8  L29.65,50L5.75,26.101C5.25,25.667,5,25.066,5,24.3c0-0.666,0.25-1.25,0.75-1.75l16.8-16.8c0.467-0.467,1.05-0.7,1.75-0.7  c0.733,0,1.333,0.233,1.8,0.7L50,29.65L73.9,5.75z"}))))),a.default.createElement("span",{style:{display:"inline-block",height:"60px",width:"calc(100% - 60px)",margin:0,overflow:"hidden",verticalAlign:"top",position:"absolute",pointerEvents:"none"},onClick:this.onClick},this.renderErrorMessage())),a.default.createElement("div",{name:"body",id:n+"-body",style:i({display:"flex",overflow:"none",height:p?"calc(100% - 60px)":"100%",width:"",margin:0,resize:"none",fontFamily:"Roboto Mono, Monaco, monospace",fontSize:"11px",backgroundColor:o.background,transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0, 1, 0.5, 1)"},s.body),onClick:this.onClick},a.default.createElement("span",{name:"labels",id:n+"-labels",style:i({display:"inline-block",boxSizing:"border-box",verticalAlign:"top",height:"100%",width:"44px",margin:0,padding:"5px 0px 5px 10px",overflow:"hidden",color:"#D4D4D4"},s.labelColumn),onClick:this.onClick},this.renderLabels()),a.default.createElement("span",{id:r,contentEditable:!0,style:i({display:"inline-block",boxSizing:"border-box",verticalAlign:"top",height:"100%",width:"",flex:1,margin:0,padding:"5px",overflowX:"hidden",overflowY:"auto",wordWrap:"break-word",whiteSpace:"pre-line",color:"#D4D4D4",outline:"none"},s.contentBox),dangerouslySetInnerHTML:this.createMarkup(e),onKeyPress:this.onKeyPress,onKeyDown:this.onKeyDown,onClick:this.onClick,onBlur:this.onBlur,onScroll:this.onScroll,onPaste:this.onPaste,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1}))))}},{key:"renderErrorMessage",value:function(){var e=this.props.locale||u.default,t=this.state.error,n=this.style;if(t)return a.default.createElement("p",{style:i({color:"red",fontSize:"12px",position:"absolute",width:"calc(100% - 60px)",height:"60px",boxSizing:"border-box",margin:0,padding:0,paddingRight:"10px",overflowWrap:"break-word",display:"flex",flexDirection:"column",justifyContent:"center"},n.errorMessage)},(0,l.format)(e.format,t))}},{key:"renderLabels",value:function(){for(var e=this.uniqueID+"-line-",t=this.colors,n=this.style,r=this.state.error?this.state.error.line:-1,o=this.state.lines?this.state.lines:1,s=new Array(o),c=0;c<o-1;c++)s[c]=c+1;return s.map(function(o){var s=o!==r?t.default:"red";return a.default.createElement("div",{key:e+o,id:e+o,style:i({},n.labels,{color:s})},o)})}},{key:"createMarkup",value:function(e){return void 0===e?{__html:""}:{__html:""+e}}},{key:"newSpan",value:function(e,t,n){var r=this.uniqueID+"-token-"+e+"-rc-"+this.renderCount,i=this.colors,o=t.type,s=t.string,a="";switch(o){case"string":case"number":case"primitive":case"error":a=i[t.type];break;case"key":a=" "===s?i.keys_whiteSpace:i.keys;break;case"symbol":a=":"===s?i.colon:i.default;break;default:a=i.default}return s.length!==s.replace(/</g,"").replace(/>/g,"").length&&(s="<xmp style=display:inline;>"+s+"</xmp>"),'<span id="'+r+'" key="'+r+'" type="'+o+'" value="'+s+'" depth="'+n+'" style="color:'+a+'">'+s+"</span>"}},{key:"randomString",value:function(e){if("number"!=typeof e)throw"@randomString: Expected 'length' to be a number";for(var t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="",r=e;r>0;--r)n+=t[Math.floor(Math.random()*t.length)];return n}},{key:"getCursorPosition",value:function(){var e=this.contentID;var t=window.getSelection(),n=-1,r=void 0;if(t.focusNode&&function(t){for(;null!==t;){if(t.id===e)return!0;t=t.parentNode}return!1}(t.focusNode))for(r=t.focusNode,n=t.focusOffset;r&&r.id!==e;)if(r.previousSibling)n+=(r=r.previousSibling).textContent.length;else if(null===(r=r.parentNode))break;return n}},{key:"setCursorPosition",value:function(e){if(!([!1,null,void 0].indexOf(e)>-1)){var t=this.contentID;e>0?function(e){if(!(e<0)){var n=window.getSelection(),r=function e(t,n,r){if(r||((r=document.createRange()).selectNode(t),r.setStart(t,0)),0===n.count)r.setEnd(t,n.count);else if(t&&n.count>0)if(t.nodeType===Node.TEXT_NODE)t.textContent.length<n.count?n.count-=t.textContent.length:(r.setEnd(t,n.count),n.count=0);else for(var i=0;i<t.childNodes.length&&(r=e(t.childNodes[i],n,r),0!==n.count);i++);return r}(document.getElementById(t),{count:e});r&&(r.collapse(!1),n.removeAllRanges(),n.addRange(r))}}(e):document.getElementById(t).focus()}}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.getCursorPosition()+e,r=this.contentID,i=document.getElementById(r),o=this.tokenize(i);"onChange"in this.props&&this.props.onChange({plainText:o.indented,markupText:o.markup,json:o.json,jsObject:o.jsObject,lines:o.lines,error:o.error}),this.setState({plainText:o.indented,markupText:o.markup,json:o.json,jsObject:o.jsObject,lines:o.lines,error:o.error}),this.updateTime=!1,t&&this.setCursorPosition(n)}},{key:"scheduledUpdate",value:function(){if(!("onKeyPressUpdate"in this.props&&!1===this.props.onKeyPressUpdate)){var e=this.updateTime;!1!==e&&(e>(new Date).getTime()||this.update())}}},{key:"setUpdateTime",value:function(){"onKeyPressUpdate"in this.props&&!1===this.props.onKeyPressUpdate||(this.updateTime=(new Date).getTime()+this.waitAfterKeyPress)}},{key:"stopEvent",value:function(e){e&&(e.preventDefault(),e.stopPropagation())}},{key:"onKeyPress",value:function(e){"viewOnly"in this.props&&this.props.viewOnly&&this.stopEvent(e),this.setUpdateTime()}},{key:"onKeyDown",value:function(e){switch("viewOnly"in this.props&&this.props.viewOnly&&this.stopEvent(e),e.key){case"Backspace":case"Delete":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":return void this.setUpdateTime()}}},{key:"onPaste",value:function(e){"viewOnly"in this.props&&this.props.viewOnly&&this.stopEvent(e),this.update()}},{key:"onClick",value:function(){"viewOnly"in this.props&&this.props.viewOnly}},{key:"onBlur",value:function(){"viewOnly"in this.props&&this.props.viewOnly||this.update(0,!1)}},{key:"onScroll",value:function(e){var t=this.uniqueID;document.getElementById(t+"-labels").scrollTop=e.target.scrollTop}},{key:"componentDidUpdate",value:function(){this.updateInternalProps(),this.showPlaceholder()}},{key:"componentDidMount",value:function(){var e=this.contentID;document.getElementById(e).addEventListener("paste",function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)}),this.showPlaceholder()}},{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}},{key:"showPlaceholder",value:function(){var e=this.state.preText;if("placeholder"in this.props){var t=this.props.placeholder;if(!([e,void 0,null].indexOf(t)>-1)&&"object"===(void 0===t?"undefined":r(t))){var n=this.tokenize(t);this.setState({preText:t,plainText:n.indentation,markupText:n.markup,lines:n.lines,error:n.error})}}}},{key:"tokenize",value:function(e){if("object"!==(void 0===e?"undefined":r(e)))return console.error("tokenize() expects object type properties only. Got '"+(void 0===e?"undefined":r(e))+"' type instead.");var t=this.props.locale||u.default,n=this.newSpan;if("nodeType"in e){var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={active:!1,string:"",number:"",symbol:"",space:"",delimiter:"",quarks:[]};function r(e,r){switch(r){case"symbol":case"delimiter":n.active&&n.quarks.push({string:n[n.active],type:t+"-"+n.active}),n[n.active]="",n.active=r,n[n.active]=e;break;default:r!==n.active||[n.string,e].indexOf("\n")>-1?(n.active&&n.quarks.push({string:n[n.active],type:t+"-"+n.active}),n[n.active]="",n.active=r,n[n.active]=e):n[r]+=e}}for(var i=0;i<e.length;i++){var o=e.charAt(i);switch(o){case'"':case"'":r(o,"delimiter");break;case" ":case" ":r(o,"space");break;case"{":case"}":case"[":case"]":case":":case",":r(o,"symbol");break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":"string"===n.active?r(o,"string"):r(o,"number");break;case"-":if(i<e.length-1&&"0123456789".indexOf(e.charAt(i+1))>-1){r(o,"number");break}case".":if(i<e.length-1&&i>0&&"0123456789".indexOf(e.charAt(i+1))>-1&&"0123456789".indexOf(e.charAt(i-1))>-1){r(o,"number");break}default:r(o,"string")}}return n.active&&(n.quarks.push({string:n[n.active],type:t+"-"+n.active}),n[n.active]="",n.active=!1),n.quarks},o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;w={token:e,line:O,reason:t},f.tokens_merge[e+n].type="error"},s=function(e,t){if(void 0===e&&console.error("tokenID argument must be an integer."),void 0===t&&console.error("options argument must be an array."),e===f.tokens_merge.length-1)return!1;for(var n=e+1;n<f.tokens_merge.length;n++){var r=f.tokens_merge[n];switch(r.type){case"space":case"linebreak":break;case"symbol":case"colon":return t.indexOf(r.string)>-1&&n;default:return!1}}return!1},a=function(e,t){if(void 0===e&&console.error("tokenID argument must be an integer."),void 0===t&&console.error("options argument must be an array."),0===e)return!1;for(var n=e-1;n>=0;n--){var r=f.tokens_merge[n];switch(r.type){case"space":case"linebreak":break;case"symbol":case"colon":return t.indexOf(r.string)>-1;default:return!1}}return!1},c=function(e){if(void 0===e&&console.error("tokenID argument must be an integer."),0===e)return!1;for(var t=e-1;t>=0;t--){var n=f.tokens_merge[t];switch(n.type){case"space":case"linebreak":break;default:return n.type}}return!1},p=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return ee++,te>0||e?"<br>":""}(arguments.length>0&&void 0!==arguments[0]&&arguments[0])+function(){for(var e=[],t=0;t<2*te;t++)e.push("&nbsp;");return e.join("")}()},d=e.cloneNode(!0);if(!d.hasChildNodes())return"";var f={tokens_unknown:[],tokens_proto:[],tokens_split:[],tokens_fallback:[],tokens_normalize:[],tokens_merge:[],tokens_plainText:"",indented:"",json:"",jsObject:void 0,markup:""};d.childNodes.forEach(function(e,t){var n={};switch(e.nodeName){case"SPAN":n={string:e.textContent,type:e.attributes.type.textContent},f.tokens_unknown.push(n);break;case"DIV":f.tokens_unknown.push({string:e.textContent,type:"unknown"});break;case"BR":""===e.textContent&&f.tokens_unknown.push({string:"\n",type:"unknown"});break;case"#text":f.tokens_unknown.push({string:e.wholeText,type:"unknown"});break;case"FONT":f.tokens_unknown.push({string:e.textContent,type:"unknown"});break;default:console.error("Unrecognized node:",{child:e})}}),f.tokens_unknown.forEach(function(e,t){f.tokens_proto=f.tokens_proto.concat(i(e.string,"proto"))}),f.tokens_proto.forEach(function(e,t){-1===e.type.indexOf("proto")&&!function(e,t){var n="",r="",i=!1;switch(t){case"primitive":if(-1===["true","false","null","undefined"].indexOf(e))return!1;break;case"string":if(e.length<2)return!1;if(n=e.charAt(0),r=e.charAt(e.length-1),-1===(i="'\"".indexOf(n)))return!1;if(n!==r)return!1;for(var o=0;o<e.length;o++)if(o>0&&o<e.length-1&&e.charAt(o)==="'\""[i]&&"\\"!==e.charAt(o-1))return!1;break;case"key":if(0===e.length)return!1;if(n=e.charAt(0),r=e.charAt(e.length-1),(i="'\"".indexOf(n))>-1){if(1===e.length)return!1;if(n!==r)return!1;for(o=0;o<e.length;o++)if(o>0&&o<e.length-1&&e.charAt(o)==="'\""[i]&&"\\"!==e.charAt(o-1))return!1}else for(o=0;o<"'\"`.,:;{}[]&<>=~*%\\|/-+!?@^  ".length;o++){var s="'\"`.,:;{}[]&<>=~*%\\|/-+!?@^  ".charAt(o);if(e.indexOf(s)>-1)return!1}break;case"number":for(o=0;o<e.length;o++)if(-1==="0123456789".indexOf(e.charAt(o)))if(0===o){if("-"!==e.charAt(0))return!1}else if("."!==e.charAt(o))return!1;break;case"symbol":if(e.length>1)return!1;if(-1==="{[:]},".indexOf(e))return!1;break;case"colon":if(e.length>1)return!1;if(":"!==e)return!1;break;default:return!0}return!0}(e.string,e.type)?f.tokens_split=f.tokens_split.concat(i(e.string,"split")):f.tokens_split.push(e)}),f.tokens_split.forEach(function(e){var t=e.type,n=e.string,r=n.length,i=[];t.indexOf("-")>-1&&("string"!==(t=t.slice(t.indexOf("-")+1))&&i.push("string"),i.push("key"),i.push("error"));var o={string:n,length:r,type:t,fallback:i};f.tokens_fallback.push(o)});var k={brackets:[],stringOpen:!1,isValue:!1};f.tokens_fallback.forEach(function(e,t){var n=e.type,r=e.string,i={type:n,string:r};switch(n){case"symbol":case"colon":if(k.stringOpen){k.isValue?i.type="string":i.type="key";break}switch(r){case"[":case"{":k.brackets.push(r),k.isValue="["===k.brackets[k.brackets.length-1];break;case"]":case"}":k.brackets.pop(),k.isValue="["===k.brackets[k.brackets.length-1];break;case",":if("colon"===function(){var e=f.tokens_normalize.length-1;if(e<1)return!1;for(var t=e;t>=0;t--){var n=f.tokens_normalize[t];switch(n.type){case"space":case"linebreak":break;default:return n}}return!1}().type)break;k.isValue="["===k.brackets[k.brackets.length-1];break;case":":i.type="colon",k.isValue=!0}break;case"delimiter":if(k.isValue?i.type="string":i.type="key",!k.stringOpen){k.stringOpen=r;break}if(t>0){var o=f.tokens_fallback[t-1],s=o.string,a=o.type,c=s.charAt(s.length-1);if("string"===a&&"\\"===c)break}if(k.stringOpen===r){k.stringOpen=!1;break}break;case"primitive":case"string":if(["false","true","null","undefined"].indexOf(r)>-1){var l=f.tokens_normalize.length-1;if(l>=0){if("string"!==f.tokens_normalize[l].type){i.type="primitive";break}i.type="string";break}i.type="primitive";break}if("\n"===r&&!k.stringOpen){i.type="linebreak";break}k.isValue?i.type="string":i.type="key";break;case"space":case"number":k.stringOpen&&(k.isValue?i.type="string":i.type="key")}f.tokens_normalize.push(i)});for(var h=0;h<f.tokens_normalize.length;h++){var g=f.tokens_normalize[h],b={string:g.string,type:g.type,tokens:[h]};if(-1===["symbol","colon"].indexOf(g.type)&&h+1<f.tokens_normalize.length){for(var y=0,m=h+1;m<f.tokens_normalize.length;m++){var v=f.tokens_normalize[m];if(g.type!==v.type)break;b.string+=v.string,b.tokens.push(m),y++}h+=y}f.tokens_merge.push(b)}var x="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$",w=!1,O=f.tokens_merge.length>0?1:0;k={brackets:[],stringOpen:!1,isValue:!1};var _=[];for(h=0;h<f.tokens_merge.length&&!w;h++){var T=f.tokens_merge[h],C=T.string,E=T.type,j=!1;switch(E){case"space":break;case"linebreak":O++;break;case"symbol":switch(C){case"{":case"[":if(j=a(h,["}","]"])){o(h,(0,l.format)(t.invalidToken.sequence,{firstToken:f.tokens_merge[j].string,secondToken:C}));break}if("["===C&&h>0&&!a(h,[":","[",","])){o(h,(0,l.format)(t.invalidToken.whitelist,{firstToken:"[",secondToken:[":","[",","]}));break}if("{"===C&&a(h,["{"])){o(h,(0,l.format)(t.invalidToken.double,{token:"{"}));break}k.brackets.push(C),k.isValue="["===k.brackets[k.brackets.length-1],_.push({i:h,line:O,string:C});break;case"}":case"]":if("}"===C&&"{"!==k.brackets[k.brackets.length-1]){o(h,(0,l.format)(t.brace.curly.missingOpen));break}if("}"===C&&a(h,[","])){o(h,(0,l.format)(t.invalidToken.sequence,{firstToken:",",secondToken:"}"}));break}if("]"===C&&"["!==k.brackets[k.brackets.length-1]){o(h,(0,l.format)(t.brace.square.missingOpen));break}if("]"===C&&a(h,[":"])){o(h,(0,l.format)(t.invalidToken.sequence,{firstToken:":",secondToken:"]"}));break}k.brackets.pop(),k.isValue="["===k.brackets[k.brackets.length-1],_.push({i:h,line:O,string:C});break;case",":if(j=a(h,["{"])){if(s(h,["}"])){o(h,(0,l.format)(t.brace.curly.cannotWrap,{token:","}));break}o(h,(0,l.format)(t.invalidToken.sequence,{firstToken:"{",secondToken:","}));break}if(s(h,["}",",","]"])){o(h,(0,l.format)(t.noTrailingOrLeadingComma));break}switch(j=c(h)){case"key":case"colon":o(h,(0,l.format)(t.invalidToken.sequence,{firstToken:j,secondToken:","}));break;case"symbol":if(a(h,["{"])){o(h,(0,l.format)(t.invalidToken.sequence,{firstToken:"{",secondToken:","}));break}}k.isValue="["===k.brackets[k.brackets.length-1]}f.json+=C;break;case"colon":if((j=a(h,["["]))&&s(h,["]"])){o(h,(0,l.format)(t.brace.square.cannotWrap,{token:":"}));break}if(j){o(h,(0,l.format)(t.invalidToken.sequence,{firstToken:"[",secondToken:":"}));break}if("key"!==c(h)){o(h,(0,l.format)(t.invalidToken.whitelist,{firstToken:":",secondToken:"key"}));break}k.isValue=!0,f.json+=C;break;case"key":case"string":var S=C.charAt(0),A=C.charAt(C.length-1);"'\"".indexOf(S);if(-1==="'\"".indexOf(S)&&-1!=="'\"".indexOf(A)){o(h,(0,l.format)(t.string.missingOpen,{quote:S}));break}if(-1==="'\"".indexOf(A)&&-1!=="'\"".indexOf(S)){o(h,(0,l.format)(t.string.missingClose,{quote:S}));break}if("'\"".indexOf(S)>-1&&S!==A){o(h,(0,l.format)(t.string.missingClose,{quote:S}));break}if("string"===E&&-1==="'\"".indexOf(S)&&-1==="'\"".indexOf(A)){o(h,(0,l.format)(t.string.mustBeWrappedByQuotes));break}if("key"===E&&-1==="'\"".indexOf(S)&&-1==="'\"".indexOf(A))for(var D=0;D<C.length&&!w;D++){var P=C.charAt(D);if(-1===x.indexOf(P)){o(h,(0,l.format)(t.string.nonAlphanumeric,{token:P}));break}}if("'"===S?C='"'+C.slice(1,-1)+'"':'"'!==S&&(C='"'+C+'"'),"key"===E&&"key"===c(h)){if(h>0&&!isNaN(f.tokens_merge[h-1])){f.tokens_merge[h-1]+=f.tokens_merge[h],o(h,(0,l.format)(t.key.numberAndLetterMissingQuotes));break}o(h,(0,l.format)(t.key.spaceMissingQuotes));break}if("key"===E&&!a(h,["{",","])){o(h,(0,l.format)(t.invalidToken.whitelist,{firstToken:E,secondToken:["{",","]}));break}if("string"===E&&!a(h,["[",":",","])){o(h,(0,l.format)(t.invalidToken.whitelist,{firstToken:E,secondToken:["[",":",","]}));break}if("key"===E&&k.isValue){o(h,(0,l.format)(t.string.unexpectedKey));break}if("string"===E&&!k.isValue){o(h,(0,l.format)(t.key.unexpectedString));break}f.json+=C;break;case"number":case"primitive":if(a(h,["{"]))f.tokens_merge[h].type="key",E=f.tokens_merge[h].type,C='"'+C+'"';else if("key"===c(h))f.tokens_merge[h].type="key",E=f.tokens_merge[h].type;else if(!a(h,["[",":",","])){o(h,(0,l.format)(t.invalidToken.whitelist,{firstToken:E,secondToken:["[",":",","]}));break}if("key"!==E&&!k.isValue){f.tokens_merge[h].type="key",E=f.tokens_merge[h].type;break}"primitive"===E&&"undefined"===C&&o(h,(0,l.format)(t.invalidToken.useInstead,{badToken:"undefined",goodToken:"null"})),f.json+=C}}var q="";for(h=0;h<f.json.length;h++){var B=f.json.charAt(h),M="";h+1<f.json.length&&(M=f.json.charAt(h+1),"\\"===B&&"'"===M)?(q+=M,h++):q+=B}if(f.json=q,!w){for(var I=function(e){_.splice(e+1,1),_.splice(e,1),V||(V=!0)},z=Math.ceil(_.length/2),N=0,V=!1;_.length>0;){V=!1;for(var L=0;L<_.length-1;L++){var K=_[L].string+_[L+1].string;["[]","{}"].indexOf(K)>-1&&I(L)}if(N++,!V)break;if(N>=z)break}if(_.length>0){var U=_[0].string,F=_[0].i,R="["===U?"]":"}";O=_[0].line,o(F,(0,l.format)(t.brace["]"===R?"square":"curly"].missingClose))}}if(!w&&-1===[void 0,""].indexOf(f.json))try{f.jsObject=JSON.parse(f.json)}catch(e){var W=e.message,J=W.indexOf("position");if(-1===J)throw new Error("Error parsing failed");for(var Q=W.substring(J+9,W.length),G=parseInt(Q),H=0,X=0,Y=!1,Z=1,$=!1;H<G&&!$&&("linebreak"===(Y=f.tokens_merge[X]).type&&Z++,-1===["space","linebreak"].indexOf(Y.type)&&(H+=Y.string.length),!(H>=G));)X++,f.tokens_merge[X+1]||($=!0);O=Z,o(X,(0,l.format)(t.invalidToken.unexpected,{token:Y.string}))}var ee=1,te=0;if(!w)for(h=0;h<f.tokens_merge.length;h++){var ne=f.tokens_merge[h],re=ne.string;switch(ne.type){case"space":case"linebreak":break;case"string":case"number":case"primitive":case"error":f.markup+=(a(h,[",","["])?p():"")+n(h,ne,te);break;case"key":f.markup+=p()+n(h,ne,te);break;case"colon":f.markup+=n(h,ne,te)+"&nbsp;";break;case"symbol":switch(re){case"[":case"{":f.markup+=(a(h,[":"])?"":p())+n(h,ne,te),te++;break;case"]":case"}":te--;var ie=h===f.tokens_merge.length-1,oe=h>0?["[","{"].indexOf(f.tokens_merge[h-1].string)>-1?"":p(ie):"";f.markup+=oe+n(h,ne,te);break;case",":f.markup+=n(h,ne,te)}}}if(w){var se=function(e){for(var t=0,n=0;n<e.length;n++)["\n","\r"].indexOf(e[n])>-1&&t++;return t},ae=1;ee=1;for(h=0;h<f.tokens_merge.length;h++){var ce=f.tokens_merge[h],le=ce.type,ue=ce.string;"linebreak"===le&&ee++,f.markup+=n(h,ce,te),ae+=se(ue)}++ee<++ae&&(ee=ae)}if(f.tokens_merge.forEach(function(e){f.indented+=e.string}),w){"modifyErrorText"in this.props&&function(e){return e&&"[object Function]"==={}.toString.call(e)}(this.props.modifyErrorText)&&(w.reason=this.props.modifyErrorText(w.reason))}return{tokens:f.tokens_merge,noSpaces:f.tokens_plainText,indented:f.indented,json:f.json,jsObject:f.jsObject,markup:f.markup,lines:ee,error:w}}if(!("nodeType"in e)){var pe=function(e,t){return e.slice(0,t)+e.slice(t+1)},de=function(){if(-1==="'\"".indexOf(ye.currentChar))return!1;if(!ye.stringOpen)return ke(),ye.stringStart=ye.position,ye.stringOpen=ye.currentChar,!0;if(ye.stringOpen===ye.currentChar){ke();var e=ye.inputText.substring(ye.stringStart,ye.position+1);return he(e),ye.stringOpen=!1,!0}return!1},fe=function(){if(-1===":,{}[]".indexOf(ye.currentChar))return!1;if(ye.stringOpen)return!1;switch(ke(),he(ye.currentChar),ye.currentChar){case":":return ye.isValue=!0,!0;case"{":case"[":ye.brackets.push(ye.currentChar);break;case"}":case"]":ye.brackets.pop()}return":"!==ye.currentChar&&(ye.isValue="["===ye.brackets[ye.brackets.length-1]),!0},ke=function(){return 0!==ye.tokenSecondary.length&&(ye.tokens.push(ye.tokenSecondary),ye.tokenSecondary="",!0)},he=function(e){return 0!==e.length&&(ye.tokens.push(e),!0)},ge=function(e){for(var t=[],n=0;n<2*e;n++)t.push(" ");return(e>0?"\n":"")+t.join("")},be=function(e){var t=[];e>0&&Te++;for(var n=0;n<2*e;n++)t.push("&nbsp;");return(e>0?"<br>":"")+t.join("")},ye={inputText:JSON.stringify(e),position:0,currentChar:"",tokenPrimary:"",tokenSecondary:"",brackets:[],isValue:!1,stringOpen:!1,stringStart:0,tokens:[]};for(h=0;h<ye.inputText.length;h++){ye.position=h,ye.currentChar=ye.inputText.charAt(ye.position);var me=fe(),ve=de(),xe="\\"===ye.currentChar&&(ye.inputText=pe(ye.inputText,ye.position),!0);me||ve||xe||ye.stringOpen||(ye.tokenSecondary+=ye.currentChar)}var we={brackets:[],isValue:!1,tokens:[]};we.tokens=ye.tokens.map(function(e){var t="",n="",r="";switch(e){case",":t="symbol",n=e,r=e,we.isValue="["===we.brackets[we.brackets.length-1];break;case":":t="symbol",n=e,r=e,we.isValue=!0;break;case"{":case"[":t="symbol",n=e,r=e,we.brackets.push(e),we.isValue="["===we.brackets[we.brackets.length-1];break;case"}":case"]":t="symbol",n=e,r=e,we.brackets.pop(),we.isValue="["===we.brackets[we.brackets.length-1];break;case"undefined":t="primitive",n=e,r=void 0;break;case"null":t="primitive",n=e,r=null;break;case"false":t="primitive",n=e,r=!1;break;case"true":t="primitive",n=e,r=!0;break;default:var i=e.charAt(0);if("'\"".indexOf(i)>-1){"key"===(t=we.isValue?"string":"key")&&(n=function(e){if(0===e.length)return e;if(['""',"''"].indexOf(e)>-1)return"''";for(var t=!1,n=0;n<2;n++)if([e.charAt(0),e.charAt(e.length-1)].indexOf(['"',"'"][n])>-1){t=!0;break}t&&e.length>=2&&(e=e.slice(1,-1));var r=e.replace(/\w/g,""),i=(e.replace(/\W+/g,""),function(e,t){for(var n=!1,r=0;r<t.length&&(0!==r||!isNaN(t.charAt(r)));r++)if(isNaN(t.charAt(r))){n=!0;break}return!(e.length>0||n)}(r,e));if(function(e){for(var t=0;t<e.length;t++)if(["'",'"'].indexOf(e.charAt(t))>-1)return!0;return!1}(r)){var o="";e.split("").forEach(function(e){["'",'"'].indexOf(e)>-1&&(e="\\"+e),o+=e}),e=o}return i?e:"'"+e+"'"}(e)),"string"===t&&(n="",e.slice(1,-1).split("").forEach(function(e){"'\"".indexOf(e)>-1&&(e="\\"+e),n+=e}),n="'"+n+"'"),r=n;break}if(!isNaN(e)){t="number",n=e,r=Number(e);break}if(e.length>0&&!we.isValue){t="key",(n=e).indexOf(" ")>-1&&(n="'"+n+"'"),r=n;break}}return{type:t,string:n,value:r,depth:we.brackets.length}});var Oe="";we.tokens.forEach(function(e){Oe+=e.string});var _e="";we.tokens.forEach(function(e,t){switch(e.string){case"[":case"{":var n=t<we.tokens.length-1-1?we.tokens[t+1]:"";-1==="}]".indexOf(n.string)?_e+=e.string+ge(e.depth):_e+=e.string;break;case"]":case"}":var r=t>0?we.tokens[t-1]:"";-1==="[{".indexOf(r.string)?_e+=ge(e.depth)+e.string:_e+=e.string;break;case":":_e+=e.string+" ";break;case",":_e+=e.string+ge(e.depth);break;default:_e+=e.string}});var Te=1,Ce="",Ee=we.tokens.length-1;return we.tokens.forEach(function(e,t){var r=n(t,e,e.depth);switch(e.string){case"{":case"[":var i=t<we.tokens.length-1-1?we.tokens[t+1]:"";-1==="}]".indexOf(i.string)?Ce+=r+be(e.depth):Ce+=r;break;case"}":case"]":var o=t>0?we.tokens[t-1]:"";-1==="[{".indexOf(o.string)?Ce+=be(e.depth)+(Ee===t?"<br>":"")+r:Ce+=r;break;case":":Ce+=r+" ";break;case",":Ce+=r+be(e.depth);break;default:Ce+=r}}),Te+=2,{tokens:we.tokens,noSpaces:Oe,indented:_e,json:JSON.stringify(e),jsObject:e,markup:Ce,lines:Te}}}}]),t}();e.exports=d},function(t,n){t.exports=e},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={dark_vscode_tribute:{default:"#D4D4D4",background:"#1E1E1E",background_warning:"#1E1E1E",string:"#CE8453",number:"#B5CE9F",colon:"#49B8F7",keys:"#9CDCFE",keys_whiteSpace:"#AF74A5",primitive:"#6392C6"},light_mitsuketa_tribute:{default:"#D4D4D4",background:"#FCFDFD",background_warning:"#FEECEB",string:"#FA7921",number:"#70CE35",colon:"#49B8F7",keys:"#59A5D8",keys_whiteSpace:"#835FB6",primitive:"#386FA4"}};t.default=n},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.format=function(e,t){return t?Object.keys(t).reduce(function(e,n){return e.replace(new RegExp("\\{"+n+"\\}","gi"),function(e){return Array.isArray(e)?e.join(", "):"string"==typeof e?e:""+e}(t[n]))},e):e}},function(e,t){e.exports={format:"{reason} at line {line}",invalidToken:{sequence:"'{firstToken}' token cannot be followed by a '{secondToken}' token",double:"'{token}' token cannot be followed by another '{token}' token",whitelist:"'{firstToken}' token can only follow '{secondToken}' token",useInstead:"'{badToken}' token is not accepted. Use '{goodToken}' instead",unexpected:"Unexpected '{token}' token found"},brace:{curly:{missingOpen:"Missing '{' open curly brace",missingClose:"Open '{' curly brace is missing closing '}' curly brace",cannotWrap:"'{token}' token cannot be wrapped in '{}' curly braces"},square:{missingOpen:"Missing '[' open square brace",missingClose:"Open '[' square brace is missing closing ']' square brace",cannotWrap:"'{token}' token cannot be wrapped in '[]' square braces"}},string:{missingOpen:"Missing/invalid opening string '{quote}' token",missingClose:"Missing/invalid closing string '{quote}' token",mustBeWrappedByQuotes:"Strings must be wrapped by quotes",nonAlphanumeric:"Non-alphanemeric token '{token}' is not allowed outside string notation",unexpectedKey:"Unexpected key found at string position"},key:{numberAndLetterMissingQuotes:"Key beginning with number and containing letters must be wrapped by quotes",spaceMissingQuotes:"Key containing space must be wrapped by quotes",unexpectedString:"Unexpected string found at key position"},noTrailingOrLeadingComma:"Trailing or leading commas in arrays and objects are not permitted"}}])});