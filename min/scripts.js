!function(a,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):a.CountUp=n()}(this,function(a,n,t){return function(a,n,t,e,i,r){var u=this;if(u.version=function(){return"1.9.3"},u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(a,n,t,e){return t*(1-Math.pow(2,-10*a/e))*1024/1023+n},formattingFn:function(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(u.decimals),n=(a+="").split("."),t=n[0],e=1<n.length?u.options.decimal+n[1]:"",u.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3==0&&(i=u.options.separator+i),i=t[o-r-1]+i;t=i}return u.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return u.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return u.options.numerals[+a]})),(s?"-":"")+u.options.prefix+t+e+u.options.suffix},prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var o in u.options)r.hasOwnProperty(o)&&null!==r[o]&&(u.options[o]=r[o]);""===u.options.separator?u.options.useGrouping=!1:u.options.separator=""+u.options.separator;for(var s=0,l=["webkit","moz","ms","o"],m=0;m<l.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[l[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[m]+"CancelAnimationFrame"]||window[l[m]+"CancelRequestAnimationFrame"];function d(a){return"number"==typeof a&&!isNaN(a)}window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-s)),i=window.setTimeout(function(){a(t+e)},e);return s=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),u.initialize=function(){return!!u.initialized||(u.error="",u.d="string"==typeof a?document.getElementById(a):a,u.d?(u.startVal=Number(n),u.endVal=Number(t),d(u.startVal)&&d(u.endVal)?(u.decimals=Math.max(0,e||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(i)||2e3,u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.initialized=!0):(u.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):!(u.error="[CountUp] target is null or undefined"))},u.printValue=function(a){var n=u.options.formattingFn(a);"INPUT"===u.d.tagName?this.d.value=n:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=n:this.d.innerHTML=n},u.count=function(a){u.startTime||(u.startTime=a);var n=(u.timestamp=a)-u.startTime;u.remaining=u.duration-n,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.options.easingFn(n,0,u.startVal-u.endVal,u.duration):u.frameVal=u.options.easingFn(n,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(n/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(n/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),n<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(a){u.initialize()&&(u.callback=a,u.rAF=requestAnimationFrame(u.count))},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.initialized=!1,u.initialize()&&(cancelAnimationFrame(u.rAF),u.printValue(u.startVal))},u.update=function(a){u.initialize()&&(d(a=Number(a))?(u.error="",a!==u.frameVal&&(cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=a,u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count))):u.error="[CountUp] update() - new endVal is not a number: "+a)},u.initialize()&&u.printValue(u.startVal)}});
/*! js-cookie v3.0.0-rc.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,r=e.Cookies=t();r.noConflict=function(){return e.Cookies=n,r}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var t={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};return function n(r,o){function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),n=r.write(n,t);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+c}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},i=0;i<n.length;i++){var c=n[i].split("="),u=c.slice(1).join("=");'"'===u[0]&&(u=u.slice(1,-1));try{var f=t.read(c[0]);if(o[f]=r.read(u,f),e===f)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){i(t,"",e({},n,{expires:-1}))},withAttributes:function(t){return n(this.converter,e({},this.attributes,t))},withConverter:function(t){return n(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(r)}})}(t,{path:"/"})});

(function defineMustache(global,factory){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){factory(exports)}else if(typeof define==="function"&&define.amd){define(["exports"],factory)}else{global.Mustache={};factory(global.Mustache)}})(this,function mustacheFactory(mustache){var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length)}else{nonSpace=true}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n")stripSpace()}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);token=[type,value,start,scanner.pos];tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){value=context.view;names=name.split(".");index=0;while(value!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(value,names[index]);value=value[names[index++]]}}else{value=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit)break;context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.cache={}}Writer.prototype.clearCache=function clearCache(){this.cache={}};Writer.prototype.parse=function parse(template,tags){var cache=this.cache;var tokens=cache[template];if(tokens==null)tokens=cache[template]=parseTemplate(template,tags);return tokens};Writer.prototype.render=function render(template,view,partials){var tokens=this.parse(template);var context=view instanceof Context?view:new Context(view);return this.renderTokens(tokens,context,partials,template)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate);else if(symbol===">")value=this.renderPartial(token,context,partials,originalTemplate);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate)};Writer.prototype.renderPartial=function renderPartial(token,context,partials){if(!partials)return;var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null)return this.renderTokens(this.parse(value),context,partials,value)};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return mustache.escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};mustache.name="mustache.js";mustache.version="2.3.0";mustache.tags=["<%","%>"];var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials)};mustache.to_html=function to_html(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result)}else{return result}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer;return mustache});
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */
!function(n,t){"use strict";var r={};n.PubSub=r;var e=n.define;!function(n){var t={},r=-1;function e(n){var t;for(t in n)if(n.hasOwnProperty(t))return!0;return!1}function o(n,t,r){try{n(t,r)}catch(n){setTimeout(function(n){return function(){throw n}}(n),0)}}function i(n,t,r){n(t,r)}function u(n,r,e,u){var f,s=t[r],c=u?i:o;if(t.hasOwnProperty(r))for(f in s)s.hasOwnProperty(f)&&c(s[f],n,e)}function f(n,r,o,i){var f=function(n,t,r){return function(){var e=String(n),o=e.lastIndexOf(".");for(u(n,n,t,r);-1!==o;)e=e.substr(0,o),o=e.lastIndexOf("."),u(n,e,t,r)}}(n="symbol"==typeof n?n.toString():n,r,i),s=function(n){var r=String(n),o=Boolean(t.hasOwnProperty(r)&&e(t[r])),i=r.lastIndexOf(".");for(;!o&&-1!==i;)r=r.substr(0,i),i=r.lastIndexOf("."),o=Boolean(t.hasOwnProperty(r)&&e(t[r]));return o}(n);return!!s&&(!0===o?f():setTimeout(f,0),!0)}n.publish=function(t,r){return f(t,r,!1,n.immediateExceptions)},n.publishSync=function(t,r){return f(t,r,!0,n.immediateExceptions)},n.subscribe=function(n,e){if("function"!=typeof e)return!1;n="symbol"==typeof n?n.toString():n,t.hasOwnProperty(n)||(t[n]={});var o="uid_"+String(++r);return t[n][o]=e,o},n.subscribeOnce=function(t,r){var e=n.subscribe(t,function(){n.unsubscribe(e),r.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){t={}},n.clearSubscriptions=function(n){var r;for(r in t)t.hasOwnProperty(r)&&0===r.indexOf(n)&&delete t[r]},n.unsubscribe=function(r){var e,o,i,u="string"==typeof r&&(t.hasOwnProperty(r)||function(n){var r;for(r in t)if(t.hasOwnProperty(r)&&0===r.indexOf(n))return!0;return!1}(r)),f=!u&&"string"==typeof r,s="function"==typeof r,c=!1;if(!u){for(e in t)if(t.hasOwnProperty(e)){if(o=t[e],f&&o[r]){delete o[r],c=r;break}if(s)for(i in o)o.hasOwnProperty(i)&&o[i]===r&&(delete o[i],c=!0)}return c}n.clearSubscriptions(r)}}(r),"function"==typeof e&&e.amd?e(function(){return r}):"object"==typeof exports&&(void 0!==module&&module.exports&&(exports=module.exports=r),exports.PubSub=r,module.exports=exports=r)}("object"==typeof window&&window||this);
/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

( () => {

	let resizeTimeout = null,
		windowWidthOLd = window.innerWidth;

	window.addEventListener("resize", () => {

		window.requestAnimationFrame( () => {

			if (!resizeTimeout) {

				resizeTimeout = setTimeout( () => {

					resizeTimeout = null;

					if(windowWidthOLd !== window.innerWidth) {

						windowWidthOLd = window.innerWidth;

						PubSub.publish('windowWidthResize');

					}

				}, 100);

			}

		});

	});

	window.addEventListener("load", () => {

		PubSub.publish('pageLoad');

		Cookies.set('fastLoadScript', true);

		document.documentElement.style.setProperty('--transitionDefault', '.3s');

	});

	// обработчик анимаций
	window.cssAnimation = a=>{let b,c,d=document.createElement("cssanimation");switch(a){case'animation':b={"animation":"animationend","OAnimation":"oAnimationEnd","MozAnimation":"animationend","WebkitAnimation":"webkitAnimationEnd"};break;case'transition':b={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"}}for(c in b)if(d.style[c]!==undefined)return b[c]}

	// Determine if an element is in the visible viewport
	window.isInViewport = el => {
		const rect = el.getBoundingClientRect();
		return (rect.top >= 0 && rect.bottom <= window.innerHeight);
	}

	// отделяем тысячи
	window.sepNumber = str => {
		str = str.toString();
		str = str.replace(/\s+/g,'');
		return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}

	// склеиваем тысячи
	window.strToNumber = n => parseInt(n.replace(/\s+/g,''), 10);

// склонение
	window.declension = (num, expressions) => {

		let r,
			count = num % 100;

		if (count > 4 && count < 21){

			r = expressions['2'];

		}
		else {

			count = count % 10;

			if (count == 1){
				r = expressions['0'];
			}
			else if (count > 1 && count < 5){
				r = expressions['1'];
			}
			else{
				r = expressions['2'];
			}

		}

		return r;

	}

})();
( togglePass => {

	if(!togglePass.length) {

		return;

	}

	// показать пароль

	Array.from(togglePass, group => {

		group.addEventListener('click', event => {

			if( event.target.closest('.visible-toggle-password__btn') ) {

				Array.from(group.querySelectorAll('.visible-toggle-password__input'), input => input.type = input.type === 'password' ? 'text' : 'password');

				Array.from(group.querySelectorAll('.visible-toggle-password__btn svg'), svg => svg.classList.toggle('hide'));

			}

		});

	});

})(document.querySelectorAll('.visible-toggle-password'));
( form => {

	if( form ) {

		form.addEventListener('change', event => {

			form.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');

			});

		});

		form.addEventListener('submit', event => {

			event.preventDefault();

			form.dispatchEvent(new CustomEvent('change'));

		});

	};

})(document.querySelector('.cart__list'));

// remove

( btns => {

	const form = document.querySelector('.cart__list');

	if( btns.length ) {

		Array.from(btns, btn => {

			const item = btn.closest('.cart__item');

			btn.querySelector('.btn').addEventListener("click", () => {

				item.style.height = item.clientHeight + "px";

				item.addEventListener(window.cssAnimation('transition'), event => {

					if ( event.propertyName === 'height' && item.clientHeight === 0 ) {

						item.remove();

						setTimeout( ()=> form.dispatchEvent(new CustomEvent('change')),100);

					}

				});

				setTimeout( ()=> item.classList.add('is-remove') );

			});

		});

	};

})(document.querySelectorAll('.cart__item-remove'));

// + | -

( cart => {

	if(!cart) {

		return;

	}

	const form = cart.querySelector('.cart__list'),
		  quantity = form.querySelectorAll('.cart-quantity');

	if(quantity.length) {

// quantity
		Array.from(quantity, el => {

			let value = null;

			const up = el.querySelector('.cart-quantity__btn--up'),
				down = el.querySelector('.cart-quantity__btn--down'),
				count = el.querySelector('.cart-quantity__count');

			up.addEventListener('click', () => {

				value = parseInt(count.value);

				count.value = isNaN(value) ? 1 : value + 1;

				form.dispatchEvent(new CustomEvent('change'));

			});

			down.addEventListener('click', () => {

				value = parseInt(count.value);

				if( isNaN(value) || value < 2 ) {

					value = 2;

				}

				count.value = value - 1;

				form.dispatchEvent(new CustomEvent('change'));

			});

			count.addEventListener('blur', () => {

				form.dispatchEvent(new CustomEvent('change'));

			});

			count.addEventListener('focus', () => {

				setTimeout( () => count.setSelectionRange(0,9),100)

			});

			count.addEventListener('keyup', () => {

				const val = count.value.replace(/[\D]/g, '');

				if ( isNaN(val) ) {

					val = 1;

				}

				count.value = val;

				form.dispatchEvent(new CustomEvent('change'));

			});

		});

	}

})(document.querySelector('.cart'));
// еще menu category

( blocks => {

	if(blocks.length) {

		Array.from(blocks, block => {

			const btn = block.querySelector('.menu-category__toggle'),
				  wrap = block.querySelector('.menu-category__wrap'),
				  list = block.querySelector('.menu-category__level-2');

			if ( btn ) {

				btn.addEventListener('click', () => {

					wrap.style.height = list.clientHeight + 'px';

					setTimeout( ()=> {

						block.classList.toggle('is-open');
						wrap.style.height = list.clientHeight + 'px';

					}, 100);

				});

			}

		});

	}

})(document.querySelectorAll('.menu-category__section'));

// еще category-cards

( blocks => {

	if(blocks.length) {

		Array.from(blocks, block => {

			const toggle = block.querySelector('.category-cards__toggle');

			if ( toggle ) {

				const btn = toggle.querySelector('.btn'),
					  wrap = block.querySelector('.category-cards__wrap'),
					  list = block.querySelector('.category-cards__list');

				btn.addEventListener('click', () => {

					wrap.style.height = list.clientHeight + 'px';

					setTimeout( ()=> {

						block.classList.toggle('is-open');
						wrap.style.height = list.clientHeight + 'px';

					}, 100);

				});

			}

		});

	}

})(document.querySelectorAll('.category-cards'));
// content-block

( blocks => {

	if(blocks.length) {

		Array.from(blocks, block => {

			const btn = block.querySelector('.content-block__toggle');

			btn.addEventListener('click', () => block.classList.toggle('is-open'));

		});

	}

})(document.querySelectorAll('.content-block'));

( form => {

	if(form) {

		const resultBox = document.querySelector('.catalog__result'),
			  count = form.querySelector('.filter__count'),
			  fieldsets = form.querySelectorAll('.filter__fieldset'),
			  loadingLayer = document.createElement('div');

		loadingLayer.className = 'catalog__loading';

		// change

		form.addEventListener('change', event => {

			const target = event.target;

			// Все

			if( target.type === 'checkbox' ) {

				const name = target.getAttribute('name'),
					  btnAll = form.querySelector('.filter__checkbox-all[name="' + name + '"]');

				if ( btnAll ) {

					const list = Array.from(form.querySelectorAll('input[name="' + name + '"]')).filter(input => input !== btnAll);

					if ( target === btnAll ) {

						Array.from(list, input => input.checked = btnAll.checked);

					} else {

						btnAll.checked = list.every( input => input.checked === true );

					}

				}

			}

			// submit

			console.log(form, 'change');

			resultBox.insertAdjacentElement('afterbegin', loadingLayer);

			const formData = new FormData(form);

			const queryString = new URLSearchParams(formData).toString();

			history.pushState(undefined, '', '?' + queryString);

			// источник форма может быть только при клике по кнопке
			if ( target !== form ) {

				formData.append('count', 'on');

			}

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: formData
			})
			.then(response => response.text())
			.then(html => {

				loadingLayer.remove();
				resultBox.innerHTML = html;

			});

		});

		// submit

		form.addEventListener('submit', event => {

			document.body.classList.remove('filter-open');

			event.preventDefault();

			form.dispatchEvent(new CustomEvent("change"));

		});

		// default reset

		form.addEventListener('default', () => {

			Array.from(form.querySelectorAll('.checkbox__input:checked:not(:disabled)'), checkbox => checkbox.checked = false);

			Array.from(form.querySelectorAll('.nouislider'), nouislider => nouislider.dispatchEvent(new CustomEvent("reset")));

			form.dispatchEvent(new CustomEvent("change"));

		});

	}

})(document.querySelector('.filter'));



// filter-sort-trigger desktop

( form => {

	if(form.length) {

		Array.from(form, form => {

			const filter = document.querySelector('#' + form.getAttribute('data-id')),
				  btnsRadio = form.querySelectorAll('.sort__item'),
				  direction = form.elements.direction;

			Array.from( btnsRadio, btn => {

				btn.addEventListener("click", () => {

					if( btn.classList.contains('is-active') ) {

						if( btn.classList.contains('is-revert') ) {

							btn.classList.remove('is-revert');
							filter.elements.direction.value = direction.value;

						} else {

							btn.classList.add('is-revert');
							filter.elements.direction.value = direction.getAttribute('data-alt');

						}

					} else {

						btn.insertAdjacentElement("beforeend", form.querySelector('.sort__item svg'));

						Array.from( btnsRadio, _btn => {

							_btn.classList.toggle('is-active', btn === _btn);

						});

					}

					filter.elements.sort.value = btn.getAttribute('data-value');

					filter.dispatchEvent(new CustomEvent("change"));

				});

			});

		})

	}

})(document.querySelectorAll('.filter-sort-trigger'));


// filter-tags-trigger

( form => {

	if(form.length) {

		Array.from(form, form => {

			const filter = document.querySelector('#' + form.getAttribute('data-id')),
				  btns = form.querySelectorAll('.filter-tags-trigger__tag');

			Array.from( btns, btn => {

				btn.addEventListener("click", () => {

					if( btn.classList.contains('filter-tags-trigger__tag--reset') ) {

						form.classList.add('is-remove');

						setTimeout( ()=> {

							Array.from( btns, _btn => {

								if ( btn !== _btn ) {

									_btn.remove();
									form.classList.add('hide');

								}

							});

						}, 500);

						filter.dispatchEvent(new CustomEvent("default"));

					} else {

						const name = btn.getAttribute('data-name'),
							  value = btn.getAttribute('data-value');

						console.log(name,value);

						if ( name === "nouislider" ) {

							filter.querySelector('.nouislider--' + value).dispatchEvent(new CustomEvent("reset"));

						} else {

							filter.querySelector(`[name="${name}"][value="${value}"]`).checked = false;

						}

						btn.classList.add('is-remove');

						setTimeout( ()=> btn.remove(), 500);

						filter.dispatchEvent(new CustomEvent("change"));

					}

				});

			});

		})

	}

})(document.querySelectorAll('.filter-tags-trigger'));


// filter-sort-trigger mobile

( form => {

	if(form) {

		const filter = document.querySelector('#' + form.getAttribute('data-id'));

		form.addEventListener("change", event => {

			filter.elements.direction.value = event.target.getAttribute('data-direction');
			filter.elements.sort.value = form.elements.sort.value;

			filter.dispatchEvent(new CustomEvent("change"));

			form.classList.remove('is-open');

		});

		// catalog__sort-btn-mobile

		window.addEventListener("click", event => {

			// sort

			const isSort = event.target.closest('.catalog__sort-btn-mobile--sort');

			if ( isSort ) {

				form.classList.toggle('is-open');

			} else {

				if ( event.target.closest('.filter-sort-trigger-mobile') === null ) {

					form.classList.remove('is-open');

				}

			}

			// filter

			if ( event.target.closest('.catalog__sort-btn-mobile--filter') ) {

				document.body.classList.add('filter-open');

			}

			if ( event.target.closest('.filter__btn-close') ) {

				document.body.classList.remove('filter-open');

			}

		});

	}

})(document.querySelector('.filter-sort-trigger-mobile'));
( modalCart => {

	if ( !modalCart ) {

		return;

	}

	const modalCartTemplate = document.querySelector('#modal-cart-template');

	document.addEventListener('submit', event => {

		const form = event.target.closest('.form-buy');

		if (form) {

			const btnSubmit = form.querySelector('.form-buy__submit');

			btnSubmit.disabled = true;

			event.preventDefault();

			form.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(result => {

				BX.onCustomEvent('OnBasketChange');

				console.log(result);

				form.classList.remove('is-loading');

				btnSubmit.disabled = false;

				modalCart.innerHTML = Mustache.render(modalCartTemplate.innerHTML, result);

				// показать модалку

				const eventModalShow = new CustomEvent("modalShow", {
					detail: {
						selector: "cart"
					}
				});

				window.modal.dispatchEvent(eventModalShow);

				// в шапке

				[...document.querySelectorAll('.js-set-cart-counter')].forEach( el => el.setAttribute('data-counter', result.totalCart) );

			});

		}

	});

	// update count

	modalCart.addEventListener('change', () => {

		modalCart.classList.add('is-loading');

		fetch(modalCart.getAttribute('action'), {
			method: 'POST',
			body: new FormData(modalCart)
		})
		.then(response => response.json())
		.then(result => {

			console.log(result);

			modalCart.classList.remove('is-loading');

			if ( result.id == modalCart.elements.id.value ) {

				// частичный

				modalCart.querySelector('.modal-cart__count').value = result.count;
				modalCart.querySelector('.modal-cart__total-text').textContent = result.totalText;

			} else {

				// полный рендер

				modalCart.elements.id.value = result.id;

				modalCart.querySelector('.modal-cart__img').href = result.link;
				modalCart.querySelector('.modal-cart__img img').src = result.img;

				modalCart.querySelector('.modal-cart__name').href = result.link;
				modalCart.querySelector('.modal-cart__name').textContent = result.name;

				modalCart.querySelector('.modal-cart__intro').textContent = result.description;

				if ( result.priceOld && modalCart.querySelector('.price__old') ) {

					modalCart.querySelector('.price__sale').textContent = result.price;
					modalCart.querySelector('.price__old').textContent = result.priceOld;

				} else {

					modalCart.querySelector('.price').textContent = result.price;

				}

				modalCart.querySelector('.modal-cart__count').value = result.count;
				modalCart.querySelector('.modal-cart__total-text').textContent = result.totalText;

			}

		});

	});

	modalCart.addEventListener('submit', event => {

		event.preventDefault();

		modalCart.dispatchEvent(new CustomEvent("change"));

	});

	modalCart.addEventListener('keyup', event => {

		console.log(event.key);

		if ( event.target.classList.contains('quantity__input') ) {

			event.target.value = event.target.value.replace(/[\D]/g, '');

			modalCart.dispatchEvent(new CustomEvent("change"));

		}

	});

	modalCart.addEventListener('click', event => {

		const input = modalCart.querySelector('.quantity__input');

		if ( event.target === input ) {

			input.setSelectionRange(0,9);

		}

		if ( event.target.closest('.quantity__btn--up') ) {

			input.value = parseInt(input.value) + 1;

			modalCart.dispatchEvent(new CustomEvent("change"));

		}

		if ( event.target.closest('.quantity__btn--down') ) {

			input.value = parseInt(input.value) <= 1 ? 1 : parseInt(input.value) - 1;

			modalCart.dispatchEvent(new CustomEvent("change"));

		}

	});

})(document.querySelector('.modal-cart'));
( formCity => {

	if ( !formCity ) {

		return;

	}

	const list = formCity.querySelector('.form-city__list'),
		  btnList = list.querySelectorAll('.form-city__btn'),
		  formCityInput = formCity.querySelector('.form-city__input-filter');

	let countVisible = btnList.length;

	const submit = ()=> {

		fetch(formCity.getAttribute('action'), {
			method: 'POST',
			body: new FormData(formCity)
		})
		.then(response => response.json())
		.then(result => {

			console.log(result);

			if ( result.setCity ) {

				Array.from(document.querySelectorAll('.js-change-city'), el => el.textContent = result.setCity);

				modal.dispatchEvent(new CustomEvent("hide"));

			}

		});

	}

	formCityInput.addEventListener('input', event => {

		const value = formCityInput.value.toLowerCase();

		countVisible = 0;

		if(value.length > 0) {

			Array.from(btnList, btn => {

				const name = btn.getAttribute('data-name').toLowerCase();

				btn.classList.toggle('hide', name.indexOf(value) === -1);

				if ( name.indexOf(value) !== -1 ) {

					countVisible++;

				}

			});

		} else {

			Array.from(btnList, btn => btn.classList.remove('hide'));

			countVisible = btnList.length;

		}

		list.classList.toggle('is-empty', countVisible === 0);

	});

	Array.from(btnList, btn => {

		btn.querySelector('.form-city__radio').addEventListener( 'change', () => submit() );

	});

	formCity.addEventListener('submit', event => {

		event.preventDefault();

		if ( countVisible === 1 ) {

			Array.from( btnList, btn => btn.querySelector('.form-city__radio').checked = btn.classList.contains('hide') === false );

		}

		if ( formCityInput.value.length > 0 ) {

			submit();

		}

	});

})(document.querySelector('.form-city'));
( items => {

	if(!items.length) {

		return;

	}

	Array.from(items, form => {

		const btn = form.querySelector('.form__submit'),
			  okText = form.querySelector('.form__ok'),
			  errorText = form.querySelector('.form__error');

		form.addEventListener('submit', event => {

			event.preventDefault();

			form.classList.add('is-loading');
			btn.disabled = true;

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.json())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');
				btn.disabled = false;

			// info modal

				if(result.type === 'ok') {

					modal.ok(result.title, result.text);

				}


			// ok in form

				if(okText) {

					if(result.type === 'form-ok') {

						okText.textContent = result.text;
						okText.classList.remove('hide');

						if(!window.isInViewport(okText)){

							okText.scrollIntoView({ behavior: 'smooth' });

						}

						if (result.url !== 'forgot') {

							setTimeout( () => location.href = result.url, 4000);

						}

					} else {

						okText.classList.add('hide');

					}

				}

			// error in form

				if(errorText) {

					if(result.type === 'form-error') {

						errorText.textContent = result.text;
						errorText.classList.remove('hide');

						if(!window.isInViewport(errorText)){

							errorText.scrollIntoView({ behavior: 'smooth' });

						}

					} else {

						errorText.classList.add('hide');

					}

				}

			// redirect

				if(result.redirect) {

					const delay = result.redirectDelay ? result.redirectDelay * 1000 : 0;

					setTimeout( ()=> location.assign(result.redirect), delay);

				}

			// reset

				if(result.reset) {

					form.reset();

				}

			// reload

				if(result.refresh) {

					location.reload();

				}

			});

		});

	});

})(document.querySelectorAll('.form'));
( img => {

	if(img) {

		const big = img.querySelectorAll('.swiper-gallery-preview__big-item');

		img.addEventListener('click', event => {

			if( event.target.tagName === 'VIDEO' && window.innerWidth < 768 ) {

				event.target.parentNode.classList.remove('is-video');
				event.target.paused ? event.target.play() : event.target.pause();

			}

			if(event.target.closest('.swiper-gallery-preview__link')) {

				event.preventDefault();

			}

			if( event.target.closest('.swiper-container-style') === null ){

				const item = event.target.closest('.swiper-gallery-preview__item');

				Array.from(img.querySelectorAll('.swiper-gallery-preview__item'), (el,index) => {

					el.classList.toggle('is-current', item === el);
					big[index].classList.toggle('is-hide', item !== el);

					if(big[index].querySelector('video')){

						big[index].querySelector('video').pause();

					}

				});

			}

		});

	}

})(document.querySelector('.swiper-gallery-preview'));
( header => {

	if(header) {

		document.documentElement.style.setProperty('--heightHeader', header.clientHeight + 'px');
		document.documentElement.style.setProperty('--heightHeaderFixed', document.documentElement.style.getPropertyValue('--heightHeader'));

		if (window.innerWidth >= 1250) {

			document.body.classList.add('header-fixed');

		}

		const headerBottom = header.querySelector('.header__bottom'),
			  headerBottomInner = headerBottom.querySelector('.header__flex');

		const productScroll = document.querySelector('.product-scroll'),
			  productForm = document.querySelector('.product__form-buy');

		const footer = document.querySelector('.footer');

		if ( productScroll ) {

			header.insertAdjacentElement('afterend', productScroll);

		}

		window.addEventListener("scroll", () => {

			window.requestAnimationFrame( () => {

				if (window.innerWidth < 1250) {

					if ( window.pageYOffset > document.documentElement.clientHeight ) {

						document.body.classList.add('header-fixed');

					} else {

						document.body.classList.remove('header-fixed');

						document.documentElement.style.setProperty('--heightHeaderFixed', document.documentElement.style.getPropertyValue('--heightHeader'));

					}

					document.documentElement.style.setProperty('--heightHeader', header.clientHeight + 'px');

					// product scroll

					if ( productScroll ) {

						if ( window.innerWidth < 768 ) {

							productScroll.classList.toggle('is-show', footer.getBoundingClientRect().top > document.documentElement.clientHeight);

						} else {

							productScroll.classList.toggle('is-show', footer.getBoundingClientRect().top > document.documentElement.clientHeight && window.pageYOffset > 0 );

						}

					}

				} else {

					const max = headerBottomInner.clientHeight;

					let h = max - window.pageYOffset,
						o = ( max / 2 - window.pageYOffset ) / ( max / 2 );

					if ( h < 0 ) {

						h = 0;

					}

					if ( o < 0 ) {

						o = 0;
						headerBottomInner.classList.add('is-off');

					} else {

						headerBottomInner.classList.remove('is-off');

					}

					headerBottom.style.height = h + 'px';
					headerBottom.style.opacity = o;

					document.documentElement.style.setProperty('--heightHeader', header.clientHeight + 'px');

					// product scroll

					if ( productScroll ) {

						productScroll.classList.toggle('is-show', window.isInViewport(productForm) === false);

					}

				}

			});

		});

	}

})(document.querySelector('.header'));
// удаление адреса

( btns => {

	if ( btns.length ) {

		const form = document.querySelector('#modal-form-address-remove');

		Array.from(btns, btn => {

			btn.addEventListener('click', () => {

				form.elements.id.value = btn.getAttribute('data-id');
				form.querySelector('.modal-login__text').textContent = btn.getAttribute('data-text');

			});

		});

	}

})(document.querySelectorAll('[data-modal="account-address-remove"]'));

// удаление карты

( btns => {

	if ( btns.length ) {

		const form = document.querySelector('#modal-form-card-remove');

		Array.from(btns, btn => {

			btn.addEventListener('click', () => {

				form.elements.id.value = btn.getAttribute('data-id');
				form.querySelector('.modal-login__text').textContent = btn.getAttribute('data-text');

			});

		});

	}

})(document.querySelectorAll('[data-modal="account-card-remove"]'));

// filter

( form => {

	if ( form ) {

		form.addEventListener('change', () => {

			form.dispatchEvent(new CustomEvent("submit"));

		});

	}

})(document.querySelector('.lk-filter'));

// развернуть заказ

( list => {

	if ( list.length ) {

		Array.from(list, item => {

			const btn = item.querySelector('.lk-order__foot .btn');

			if ( btn ) {

				btn.addEventListener('click', () => item.classList.toggle('is-short'));

			}

		});

	}

})(document.querySelectorAll('.lk-order'));
( elems => {

	if(!elems.length) {

		return;

	}

	const script = document.createElement('script');
	script.src = '/local/templates/chistovgorode/js/inputmask.min.js';
	script.onload = () => {

		Array.from(elems, el => {

			let maskInput;

			if(el.classList.contains('inputmask--phone')) {

				maskInput = new Inputmask({
					mask: "+7 (999) 999 99 99",
					showMaskOnHover: false
				});

			}

			maskInput.mask(el);

		});

	};

	setTimeout( () => document.head.appendChild(script), Cookies.get('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.inputmask'));
( windowScroll => {

// btn toggle

	( btn => {

		if(btn) {

			btn.addEventListener('click', () => {

				if( document.body.classList.contains('menu-show') ) {

					document.body.classList.remove('menu-show');
					window.scrollTo(0,windowScroll);

					setTimeout( () => document.documentElement.classList.remove('scroll-behavior-off'));

				} else {

					windowScroll = window.pageYOffset;

					document.body.classList.add('menu-show');
					document.body.classList.remove('header-fixed');
					document.documentElement.classList.add('scroll-behavior-off');
					window.scrollTo(0,0);

				}

			});

		}

	})(document.querySelector('.btn-menu-toggle'));


	// menu catalog

	( btns => {

		if(btns.length) {

			Array.from(btns, btn => {

				btn.addEventListener('click', () => {

					if( document.body.classList.contains('menu-catalog-show') ) {

						document.body.classList.remove('menu-catalog-show','menu-show');
						window.scrollTo(0,windowScroll);

						setTimeout( () => document.documentElement.classList.remove('scroll-behavior-off'));

					} else {

						if( document.body.classList.contains('menu-show') === false ) {

							windowScroll = window.pageYOffset;

						}

						document.documentElement.classList.add('scroll-behavior-off');
						document.body.classList.add('menu-catalog-show');

						setTimeout( () => window.scrollTo(0,0));

					}

				});

			});

		}

	})(document.querySelectorAll('.btn-toggle-menu-catalog'));

})(window.pageYOffset);


// menu service

( btns => {

	if(btns.length) {

		const body = document.querySelectorAll('.menu-catalog__body');

		Array.from(btns, btn => {

			btn.addEventListener('click', event => {

				event.preventDefault();

				Array.from(btns, (_btn, index) => {

					_btn.classList.toggle('is-current', _btn === btn);
					body[index].classList.toggle('hide', _btn !== btn);

				});

			});

		});

		// mobile

		const mobileMenu = document.querySelector('.menu-catalog__mobile'),
			  mobileBody = mobileMenu.querySelector('.menu-catalog__mobile-body'),
			  mobileHead = mobileMenu.querySelector('.menu-catalog__mobile-head-name'),
			  mobileBack = mobileMenu.querySelector('.menu-catalog__mobile-btn-back'),
			  mobileHeadDefault = mobileHead.textContent;

		let mobileLevel = null,
			indexBody = null,
			indexLevel1 = null,
			prevLevel1 = null,
			prevLevel2 = null;

		const level0 = () => {

			mobileLevel = 0;
			mobileBack.classList.add('hide');
			mobileHead.textContent = mobileHeadDefault;
			mobileBody.innerHTML = document.querySelector('.menu-catalog__nav').innerHTML;

		}

		const level1 = () => {

			mobileLevel = 1;
			mobileBack.classList.remove('hide');
			mobileHead.textContent = prevLevel1.textContent;

			const html = document.createElement('ul');

			html.insertAdjacentHTML('beforeend', `<li class="menu-catalog__mobile-item"><a href="${prevLevel1.href}">${mobileBody.getAttribute('data-all-item')}</a></li>`);

			Array.from(body[indexBody].querySelectorAll('.menu-catalog__level-2'), (list,index) => {

				const item = list.querySelectorAll('.menu-catalog__item'),
					  itemClone = item[0].cloneNode(true);

				itemClone.className = 'menu-catalog__mobile-item';
				itemClone.setAttribute('data-index', index);
				html.insertAdjacentElement('beforeend', itemClone);

				if ( item.length > 1 ) {

					itemClone.classList.add('is-parent');

				}

				mobileBody.innerHTML = '';
				mobileBody.insertAdjacentElement('beforeend', html);

			});

		}

		const level2 = () => {

			mobileLevel = 2;
			mobileHead.textContent = prevLevel2.textContent;

			const html = document.createElement('ul');

			Array.from(body[indexBody].querySelectorAll('.menu-catalog__level-2')[indexLevel1].querySelectorAll('.menu-catalog__item'), item => {

				const itemClone = item.cloneNode(true);
				itemClone.className = 'menu-catalog__mobile-item';
				html.insertAdjacentElement('beforeend', itemClone);

			});

			html.querySelectorAll('.menu-catalog__mobile-item a')[0].textContent = mobileBody.getAttribute('data-all-item');

			mobileBody.innerHTML = '';
			mobileBody.insertAdjacentElement('beforeend', html);

		}

		level0();

		mobileMenu.addEventListener('click', event => {

			const btnLevel1 = event.target.closest('.menu-catalog__nav-btn'),
				  btnLevel2 = event.target.closest('.menu-catalog__mobile-item.is-parent');

			if ( btnLevel1 ) {

				event.preventDefault();

				prevLevel1 = btnLevel1;

				Array.from(mobileBody.querySelectorAll('.menu-catalog__nav-btn'), (item,index) => {

					if ( btnLevel1 === item ) {

						indexBody = index;
						level1();

					}

				});

			}

			if ( btnLevel2 ) {

				event.preventDefault();

				prevLevel2 = btnLevel2;

				indexLevel1 = parseInt( btnLevel2.getAttribute('data-index') );

				level2();

			}

		});

		mobileBack.addEventListener('click', () => mobileLevel === 2 ? level1() : level0());

	}

})(document.querySelectorAll('.menu-catalog__nav-btn'));
( modal => {

	if(!modal) {

		return;

	}

	const items = modal.querySelectorAll('.modal__item'),
		  btns = document.querySelectorAll('[data-modal]'),
		  wrapper = document.querySelector('.wrapper');

	let activeModal = null,
		windowScroll = window.pageYOffset;

	modal.addEventListener('hide', () => {

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,windowScroll);
		activeModal = false;

		setTimeout( () => document.documentElement.classList.remove('scroll-behavior-off'));

	});

	modal.addEventListener('keyup', event => {

		if(event.key === "Escape") {

			modal.dispatchEvent(new CustomEvent("hide"));

		}

	});

	const modalShow = selector => {

		if(!activeModal){

			windowScroll = window.pageYOffset;

		}

		activeModal = modal.querySelector('.modal__item--' + selector);

		Array.from(items, el => el.classList.toggle('visuallyhidden', el !== activeModal));

		document.documentElement.classList.add('scroll-behavior-off');

		setTimeout( () => {

			wrapper.style.top = -windowScroll + 'px';
			document.body.classList.add('modal-show');
			window.scrollTo(0,0);

			activeModal.focus();

			PubSub.publish('open-' + selector);

		});

	};

	modal.addEventListener('click', event => {

		if( event.target.classList.contains('modal') || event.target.closest('.modal__close')){

			modal.dispatchEvent(new CustomEvent("hide"));

		}

	});

	document.addEventListener('click', event => {

		let target = event.target;

		while (target !== document && target !== null) {

			if (target.hasAttribute('data-modal')) {

				modalShow(target.getAttribute('data-modal'));

			}

			target = target.parentNode;

		}

	});

	modal.addEventListener('modalShow', event => modalShow(event.detail.selector));

	modal.ok = (title, text) => {

		modal.querySelector('.modal__item--ok .modal-login__head').innerHTML = title ? title : '';
		modal.querySelector('.modal__item--ok .modal-login__text').innerHTML = text ? text : '';
		modalShow('ok');

	}

})(document.querySelector('.modal'));
( nouislider => {

	if(!nouislider.length) {

		return;

	}

	const noUiSliderInit = () => {

		Array.from(nouislider, slider => {

			const track = slider.querySelector('.nouislider__track'),
				  form = slider.closest('form'),
				  minInput = slider.querySelector('.nouislider__min'),
				  maxInput = slider.querySelector('.nouislider__max'),
				  minInputName = slider.querySelector('.nouislider__min-name'),
				  maxInputName = slider.querySelector('.nouislider__max-name'),
				  min   = parseInt(slider.getAttribute('data-min')),
				  max   = parseInt(slider.getAttribute('data-max')),
				  step  = parseInt(slider.getAttribute('data-step')),
				  suf  = slider.getAttribute('data-suf');

			noUiSlider.create(track, {
				start: [min,max],
				step: step,
				connect: true,
				range: {
					'min': min,
					'max': max
				},
				format: {
					to: value => parseInt(value),
					from: value => parseInt(value)
				}
			});

			track.noUiSlider.on('slide', values => {

				if( suf ) {

					minInput.value = window.sepNumber(values[0]) + ' ' + suf;
					maxInput.value = window.sepNumber(values[1]) + ' ' + suf;

				} else {

					minInput.value = parseInt(values[0]);
					maxInput.value = parseInt(values[1]);

				}

			});

			track.noUiSlider.on('end', values => {

				minInput.classList.toggle('is-side', min === values[0]);
				maxInput.classList.toggle('is-side', max === values[1]);

				form.dispatchEvent(new CustomEvent("change"));

				minInputName.value = values[0];
				maxInputName.value = values[1];

			});

			track.noUiSlider.on('update', values => {

				minInput.classList.toggle('is-side', min === values[0]);
				maxInput.classList.toggle('is-side', max === values[1]);

				minInputName.value = values[0];
				maxInputName.value = values[1];

			});

			form.addEventListener("reset", () => {

				track.noUiSlider.set([min,max]);

			});

			slider.addEventListener("reset", () => {

				track.noUiSlider.set([min,max]);

			});

			form.addEventListener("input", event => {

				if(event.target === maxInput || event.target === minInput) {

					track.noUiSlider.set([
						parseInt(window.strToNumber(minInput.value)),
						parseInt(window.strToNumber(maxInput.value))
					]);

					minInputName.value = values[0];
					maxInputName.value = values[1];

				}

			});

			minInput.addEventListener('focus', () => {

				minInput.value = track.noUiSlider.get()[0];
				minInput.setSelectionRange(0,99);

			});

			maxInput.addEventListener('focus', () => {

				maxInput.value = track.noUiSlider.get()[1];
				maxInput.setSelectionRange(0,99);

			});

			minInput.addEventListener('blur', () => {

				if( suf ) {

					minInput.value = window.sepNumber(track.noUiSlider.get()[0]) + ' ' + suf;

				}

			});

			maxInput.addEventListener('blur', () => {

				if( suf ) {

					maxInput.value = window.sepNumber(track.noUiSlider.get()[1]) + ' ' + suf;

				}

			});

			minInput.addEventListener('keyup', event => {

				if(event.key === "Enter") {

					minInput.blur();

				}

			});

			maxInput.addEventListener('keyup', event => {

				if(event.key === "Enter") {

					maxInput.blur();

				}

			});

			if (
				min !== parseInt(window.strToNumber(minInput.value)) ||
				max !== parseInt(window.strToNumber(maxInput.value))
			) {

				track.noUiSlider.set([
					parseInt(window.strToNumber(minInput.value)),
					parseInt(window.strToNumber(maxInput.value))
				]);

			}

		});

	};

	// load
	const script = document.createElement('script');
	script.src = '/local/templates/chistovgorode/js/nouislider.min.js';
	script.onload = () => noUiSliderInit();
	setTimeout( () => document.head.appendChild(script), Cookies.get('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.nouislider'));

( btnPageUp => {

	if (btnPageUp) {

		// click

		btnPageUp.addEventListener('click', () => document.body.scrollIntoView({behavior: "smooth"}));

		// scroll

		let resizeTimeout = null;

		window.addEventListener("scroll", () => {

			window.requestAnimationFrame( () => {

				if ( resizeTimeout === null ) {

					resizeTimeout = setTimeout( () => {

						resizeTimeout = null;

						btnPageUp.classList.toggle('is-hidden', window.pageYOffset < document.documentElement.clientHeight);

					}, 100);

				}

			});

		});

	}

})(document.querySelector('.page-up'));
window.selects = select => {

	if(select.querySelector('.select__list')) {

		return;

	}

	const value = document.createElement('div');

	value.className = 'select__value';
	value.innerHTML = '<span class="select__value-inner"></span>';

	value.insertAdjacentHTML('beforeend', '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M7.2 9.2a.65.65 0 0 1 .91 0L12 13.12l3.89-3.94a.65.65 0 0 1 .92 0c.25.26.25.68 0 .94L12 15l-4.8-4.87a.67.67 0 0 1 0-.94Z"/></svg>');
	select.appendChild(value);

	const form = select.closest('form'),
		control = select.querySelector('select'),
		option = select.querySelectorAll('option'),
		valueText = select.querySelector('.select__value-inner'),
		filter = select.classList.contains('select--filter'),
		list = document.createElement('div');

	list.className = 'select__list';

	let selected = control.querySelector('[value="' + control.value + '"]');

	// не предусматриваем в мобиле системный контрол
/*
	control.addEventListener("change", () => {

		selected = control.querySelector('[value="' + control.value + '"]');

		valueText.textContent = selected.textContent;

		select.classList.remove('select--default');

	});
*/
	const valueDefault = selected.textContent;

	if( control.disabled || control.value === 'none' || control.value === '' ){

		select.classList.add('select--default');

	}

	if ( control.value !== '' ) {

		valueText.textContent = select.querySelector('option[value="' + control.value + '"]').textContent;

	}

	Array.from(option, el => {

		const btn = document.createElement('label'),
			  label = document.createElement('span'),
			  input = document.createElement('input');

		btn.className = 'select__list-item';

		input.type = 'radio';
		input.name = control.name;
		input.value = el.value;

		label.textContent = el.textContent;

		if ( control.value === el.value ) {

			input.checked = true;

		}

		input.addEventListener('change', () => {

			valueText.textContent = el.textContent;
			select.classList.remove('select--open');

		});

		btn.appendChild(input);
		btn.appendChild(label);
		list.appendChild(btn);

	});

	// без быстрого поиска
/*
	if(filter){

		const inputFilter = document.createElement('input');

		inputFilter.className = 'select__filter input';

		value.appendChild(inputFilter);

		inputFilter.addEventListener('input', () => {

			const value = inputFilter.value.toLowerCase();

			if(value.length > 1) {

				Array.from(list.children, o => {

					const text = o.textContent.trim().toLowerCase();

					o.classList.toggle('hide', text.indexOf(value) === -1);

				});

				if(list.querySelectorAll('.select__list-item').length === list.querySelectorAll('.select__list-item.hide').length) {

					select.classList.add('select--filter-empty');

				} else {

					select.classList.remove('select--filter-empty');

				}

			} else {

				Array.from(list.children, o => o.classList.remove('hide'));

			}

		});
	}

	select.addEventListener("click", event => {

		if(event.target.classList.contains('select__list-item')){

			control.value = event.target.getAttribute('value');

			control.dispatchEvent(new CustomEvent("change"));

			if(form) {

				form.dispatchEvent(new CustomEvent("change"));

			}

		}

	});

*/

	select.appendChild(list);

	// возврат в дефолтное состояние, при резет формы

	form && form.addEventListener("reset", () => {

		select.classList.add('select--default');
		valueText.textContent = valueDefault;

	});

	// не предусматриваем в мобиле системный контрол
	control.remove();

};

( () => {

	window.selectsCollection = document.querySelectorAll('.select');

	if(window.selectsCollection.length) {

		Array.from(window.selectsCollection, select => window.selects(select));

	}

	window.addEventListener("click", event => {

		const isSelect = event.target.closest('.select');

		Array.from(window.selectsCollection, select => {

			select.classList.toggle('select--open', select === isSelect && isSelect.classList.contains('select--open') === false);

		});

	});

})();
( swiperContainer => {

	if(!swiperContainer.length) {

		return;

	}

	Array.from(swiperContainer, swipe => {

		let mySwipe = null,
			toggleSwipe = null,
			resetSwipe = null;

		const swipeControls = document.createElement('div'),
			  swipeNav = document.createElement('div'),
			  swipeBtns = document.createElement('div'),
			  swipeNext = document.createElement('button'),
			  swipePrev = document.createElement('button'),
			  scrollbar = swipe.parentNode.querySelector('.swiper-scrollbar'),
			  items = swipe.querySelectorAll('.swiper-slide'),
			  count = items.length,
			  cardAuto = swipe.classList.contains('swiper-container--card-auto'),
			  billboard = swipe.classList.contains('swiper-container--billboard'),
			  productGalleryPreview = swipe.classList.contains('swiper-container--gallery-preview');

		swipeNav.className = 'swiper-pagination';
		swipeControls.className = 'swiper-controls';

		swipeBtns.className = 'swiper-navigation';
		swipePrev.className = 'swiper-button-prev button';
		swipeNext.className = 'swiper-button-next button';

		swipePrev.setAttribute('aria-label','Previous slide');
		swipeNext.setAttribute('aria-label','Next slide');

		if ( productGalleryPreview ) {

			swipePrev.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="m13 9 4.6 4.6a1 1 0 1 1-1.4 1.4l-3.9-3.9L8.4 15A.99.99 0 0 1 7 13.6L11.59 9A1 1 0 0 1 13 9Z"/></svg>';
			swipeNext.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M13 15a1 1 0 0 1-1.4 0L7 10.4A.99.99 0 0 1 8.4 9l3.9 3.9L16.2 9a.99.99 0 0 1 1.4 1.4L13 15Z"/></svg>';

		} else {

			swipePrev.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M8.41 11.5H18a1 1 0 0 1 0 2H8.41l3.8 3.8a1 1 0 0 1-1.42 1.4l-5.5-5.5a1 1 0 0 1 0-1.4l5.5-5.5a1 1 0 0 1 1.42 1.4l-3.8 3.8Z"/></svg>';
			swipeNext.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.8 5.8a1 1 0 0 0 0 1.4l3.79 3.8H6a1 1 0 0 0 0 2h9.59l-3.8 3.8a1 1 0 1 0 1.42 1.4l5.5-5.5a1 1 0 0 0 .29-.67v-.06a1 1 0 0 0-.3-.68l-5.5-5.5a1 1 0 0 0-1.4 0Z"/></svg>';

		}

		swipeBtns.appendChild(swipePrev);
		swipeBtns.appendChild(swipeNext);
		swipeControls.appendChild(swipeBtns);
		swipeControls.appendChild(swipeNav);

		resetSwipe = () => {

			if(mySwipe) {

				mySwipe.destroy(false,true);
				mySwipe = undefined;

			}

			swipeNav.classList.add('hide');
			swipeBtns.classList.add('hide');
			swipeControls.classList.add('hide');

			if ( swipe.closest('.swiper-container-style') ) {

				swipe.closest('.swiper-container-style').classList.remove('swiper-container-style');

			}

		}

		if (billboard) {

			swipeControls.classList.add('center');
			swipeNav.classList.remove('hide');
			swipeBtns.classList.add('hide');
			swipeControls.classList.remove('hide');

			toggleSwipe = () => {

				toggleSwipe = false;
				swipe.parentNode.classList.add('swiper-container-style');

				new Swiper(swipe, {
					loop: true,
					autoplay: {
						delay: 5000
					},
					pagination: {
						el: swipeNav,
						clickable: true,
						bulletClass: 'button',
						bulletActiveClass: 'is-active'
					}
				});

			}

		}

		if (cardAuto) {

			resetSwipe();

			toggleSwipe = () => {

				resetSwipe();

				if (window.innerWidth >= 1250) {

					swipeBtns.classList.remove('hide');
					swipeControls.classList.remove('hide');

					swipe.parentNode.parentNode.appendChild(swipeControls);

					swipePrev.classList.add('swiper-button-disabled');

					swipe.parentNode.parentNode.classList.add('swiper-container-style');

					mySwipe = new Swiper(swipe, {

						slidesPerView: "auto",
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						}

					});

				}

			}

		}

		if (productGalleryPreview) {

			toggleSwipe = () => {

				resetSwipe();

				swipeControls.classList.remove('hide');

				if (window.innerWidth < 768) {

					if ( count === 1 ) {

						return;

					}

					swipeNav.classList.remove('hide');
					swipeBtns.classList.add('hide');

					swipe.parentNode.classList.add('swiper-container-style');

					mySwipe = new Swiper(swipe, {
						loop: true,
						pagination: {
							el: swipeNav,
							clickable: true,
							bulletClass: 'button',
							bulletActiveClass: 'is-active'
						},
						on: {
							slideChange : () => {

								if ( swipe.querySelectorAll('video') ) {

									Array.from(swipe.querySelectorAll('video'), video => {

										video.parentNode.classList.add('is-video');
										video.pause();

									});

								}

							}
						}
					});

				} else if ( count > 5 ) {

					swipeNav.classList.add('hide');
					swipeBtns.classList.remove('hide');

					let initialSlide = 0,
						slidesPerView = 5,
						spaceBetween = 15;

					swipe.parentNode.appendChild(swipeControls);

					Array.from(items, (el,index) => {

						if(el.classList.contains('is-current')) {

							initialSlide = index;

						}

					});

					swipe.parentNode.classList.add('swiper-container-style');

					const box = swipe.closest('.swiper-gallery-preview'),
						  big = box.querySelectorAll('.swiper-gallery-preview__big-item');

					mySwipe = new Swiper(swipe, {
						loop: true,
						slideActiveClass: 'is-current',
						direction: 'vertical',
						slidesPerView : slidesPerView,
						spaceBetween: spaceBetween,
						slideToClickedSlide: true,
						initialSlide: initialSlide,
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						},
						on: {
							slideChange : () => {

								Array.from(big, (item,index) => {

									item.classList.toggle('is-hide', swipe.swiper.realIndex !== index);

									if(item.querySelector('video')){

										item.querySelector('video').pause();

									}

								});

							}
						},
						breakpoints: {
							320: {
								slidesPerView: 3,
								spaceBetween: 8
							},
							768: {
								slidesPerView: slidesPerView,
								spaceBetween: spaceBetween
							}
						}
					});

				}

			}

		}

		PubSub.subscribe('windowWidthResize', () => {

			if (window.Swiper && toggleSwipe) {

				toggleSwipe();

			}

		});

		PubSub.subscribe('swiperJsLoad', () => {

			swipe.appendChild(swipeControls);

			// eager
			Array.from(swipe.querySelectorAll('[loading="lazy"]'), img => img.setAttribute('loading','eager'));

			// hide
			Array.from(items, el => el.classList.remove('hide'));

			toggleSwipe();

		});

	});

	const script = document.createElement('script');

	script.src = '/local/templates/chistovgorode/js/swiper.min.js';

	script.onload = () => PubSub.publish('swiperJsLoad');

	setTimeout( () => document.head.appendChild(script), Cookies.get('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.swiper-container'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsIm11c3RhY2hlLm1pbi5qcyIsInB1YnN1Yi5taW4uanMiLCJqcy5qcyIsImFjY291bnQuanMiLCJjYXJ0LmpzIiwiY2F0ZWdvcnkuanMiLCJjb250ZW50LWJsb2NrLmpzIiwiZmlsdGVyLmpzIiwiZm9ybS1idXkuanMiLCJmb3JtLWNpdHkuanMiLCJmb3JtLmpzIiwiZ2FsbGVyeS5qcyIsImhlYWRlci5qcyIsImxrLmpzIiwibWFzay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsIm5vdWlzbGlkZXIuanMiLCJwYWdlLXVwLmpzIiwic2VsZWN0LmpzIiwic3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FDRkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDektBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihhLG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9bihyZXF1aXJlLGV4cG9ydHMsbW9kdWxlKTphLkNvdW50VXA9bigpfSh0aGlzLGZ1bmN0aW9uKGEsbix0KXtyZXR1cm4gZnVuY3Rpb24oYSxuLHQsZSxpLHIpe3ZhciB1PXRoaXM7aWYodS52ZXJzaW9uPWZ1bmN0aW9uKCl7cmV0dXJuXCIxLjkuM1wifSx1Lm9wdGlvbnM9e3VzZUVhc2luZzohMCx1c2VHcm91cGluZzohMCxzZXBhcmF0b3I6XCIsXCIsZGVjaW1hbDpcIi5cIixlYXNpbmdGbjpmdW5jdGlvbihhLG4sdCxlKXtyZXR1cm4gdCooMS1NYXRoLnBvdygyLC0xMCphL2UpKSoxMDI0LzEwMjMrbn0sZm9ybWF0dGluZ0ZuOmZ1bmN0aW9uKGEpe3ZhciBuLHQsZSxpLHIsbyxzPWE8MDtpZihhPU1hdGguYWJzKGEpLnRvRml4ZWQodS5kZWNpbWFscyksbj0oYSs9XCJcIikuc3BsaXQoXCIuXCIpLHQ9blswXSxlPTE8bi5sZW5ndGg/dS5vcHRpb25zLmRlY2ltYWwrblsxXTpcIlwiLHUub3B0aW9ucy51c2VHcm91cGluZyl7Zm9yKGk9XCJcIixyPTAsbz10Lmxlbmd0aDtyPG87KytyKTAhPT1yJiZyJTM9PTAmJihpPXUub3B0aW9ucy5zZXBhcmF0b3IraSksaT10W28tci0xXStpO3Q9aX1yZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzLmxlbmd0aCYmKHQ9dC5yZXBsYWNlKC9bMC05XS9nLGZ1bmN0aW9uKGEpe3JldHVybiB1Lm9wdGlvbnMubnVtZXJhbHNbK2FdfSksZT1lLnJlcGxhY2UoL1swLTldL2csZnVuY3Rpb24oYSl7cmV0dXJuIHUub3B0aW9ucy5udW1lcmFsc1srYV19KSksKHM/XCItXCI6XCJcIikrdS5vcHRpb25zLnByZWZpeCt0K2UrdS5vcHRpb25zLnN1ZmZpeH0scHJlZml4OlwiXCIsc3VmZml4OlwiXCIsbnVtZXJhbHM6W119LHImJlwib2JqZWN0XCI9PXR5cGVvZiByKWZvcih2YXIgbyBpbiB1Lm9wdGlvbnMpci5oYXNPd25Qcm9wZXJ0eShvKSYmbnVsbCE9PXJbb10mJih1Lm9wdGlvbnNbb109cltvXSk7XCJcIj09PXUub3B0aW9ucy5zZXBhcmF0b3I/dS5vcHRpb25zLnVzZUdyb3VwaW5nPSExOnUub3B0aW9ucy5zZXBhcmF0b3I9XCJcIit1Lm9wdGlvbnMuc2VwYXJhdG9yO2Zvcih2YXIgcz0wLGw9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdLG09MDttPGwubGVuZ3RoJiYhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsrK20pd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT13aW5kb3dbbFttXStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9d2luZG93W2xbbV0rXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXXx8d2luZG93W2xbbV0rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07ZnVuY3Rpb24gZChhKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgYSYmIWlzTmFOKGEpfXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEsbil7dmFyIHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCksZT1NYXRoLm1heCgwLDE2LSh0LXMpKSxpPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YSh0K2UpfSxlKTtyZXR1cm4gcz10K2UsaX0pLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhKXtjbGVhclRpbWVvdXQoYSl9KSx1LmluaXRpYWxpemU9ZnVuY3Rpb24oKXtyZXR1cm4hIXUuaW5pdGlhbGl6ZWR8fCh1LmVycm9yPVwiXCIsdS5kPVwic3RyaW5nXCI9PXR5cGVvZiBhP2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpOmEsdS5kPyh1LnN0YXJ0VmFsPU51bWJlcihuKSx1LmVuZFZhbD1OdW1iZXIodCksZCh1LnN0YXJ0VmFsKSYmZCh1LmVuZFZhbCk/KHUuZGVjaW1hbHM9TWF0aC5tYXgoMCxlfHwwKSx1LmRlYz1NYXRoLnBvdygxMCx1LmRlY2ltYWxzKSx1LmR1cmF0aW9uPTFlMypOdW1iZXIoaSl8fDJlMyx1LmNvdW50RG93bj11LnN0YXJ0VmFsPnUuZW5kVmFsLHUuZnJhbWVWYWw9dS5zdGFydFZhbCx1LmluaXRpYWxpemVkPSEwKToodS5lcnJvcj1cIltDb3VudFVwXSBzdGFydFZhbCAoXCIrbitcIikgb3IgZW5kVmFsIChcIit0K1wiKSBpcyBub3QgYSBudW1iZXJcIiwhMSkpOiEodS5lcnJvcj1cIltDb3VudFVwXSB0YXJnZXQgaXMgbnVsbCBvciB1bmRlZmluZWRcIikpfSx1LnByaW50VmFsdWU9ZnVuY3Rpb24oYSl7dmFyIG49dS5vcHRpb25zLmZvcm1hdHRpbmdGbihhKTtcIklOUFVUXCI9PT11LmQudGFnTmFtZT90aGlzLmQudmFsdWU9bjpcInRleHRcIj09PXUuZC50YWdOYW1lfHxcInRzcGFuXCI9PT11LmQudGFnTmFtZT90aGlzLmQudGV4dENvbnRlbnQ9bjp0aGlzLmQuaW5uZXJIVE1MPW59LHUuY291bnQ9ZnVuY3Rpb24oYSl7dS5zdGFydFRpbWV8fCh1LnN0YXJ0VGltZT1hKTt2YXIgbj0odS50aW1lc3RhbXA9YSktdS5zdGFydFRpbWU7dS5yZW1haW5pbmc9dS5kdXJhdGlvbi1uLHUub3B0aW9ucy51c2VFYXNpbmc/dS5jb3VudERvd24/dS5mcmFtZVZhbD11LnN0YXJ0VmFsLXUub3B0aW9ucy5lYXNpbmdGbihuLDAsdS5zdGFydFZhbC11LmVuZFZhbCx1LmR1cmF0aW9uKTp1LmZyYW1lVmFsPXUub3B0aW9ucy5lYXNpbmdGbihuLHUuc3RhcnRWYWwsdS5lbmRWYWwtdS5zdGFydFZhbCx1LmR1cmF0aW9uKTp1LmNvdW50RG93bj91LmZyYW1lVmFsPXUuc3RhcnRWYWwtKHUuc3RhcnRWYWwtdS5lbmRWYWwpKihuL3UuZHVyYXRpb24pOnUuZnJhbWVWYWw9dS5zdGFydFZhbCsodS5lbmRWYWwtdS5zdGFydFZhbCkqKG4vdS5kdXJhdGlvbiksdS5jb3VudERvd24/dS5mcmFtZVZhbD11LmZyYW1lVmFsPHUuZW5kVmFsP3UuZW5kVmFsOnUuZnJhbWVWYWw6dS5mcmFtZVZhbD11LmZyYW1lVmFsPnUuZW5kVmFsP3UuZW5kVmFsOnUuZnJhbWVWYWwsdS5mcmFtZVZhbD1NYXRoLnJvdW5kKHUuZnJhbWVWYWwqdS5kZWMpL3UuZGVjLHUucHJpbnRWYWx1ZSh1LmZyYW1lVmFsKSxuPHUuZHVyYXRpb24/dS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpOnUuY2FsbGJhY2smJnUuY2FsbGJhY2soKX0sdS5zdGFydD1mdW5jdGlvbihhKXt1LmluaXRpYWxpemUoKSYmKHUuY2FsbGJhY2s9YSx1LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCkpfSx1LnBhdXNlUmVzdW1lPWZ1bmN0aW9uKCl7dS5wYXVzZWQ/KHUucGF1c2VkPSExLGRlbGV0ZSB1LnN0YXJ0VGltZSx1LmR1cmF0aW9uPXUucmVtYWluaW5nLHUuc3RhcnRWYWw9dS5mcmFtZVZhbCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCkpOih1LnBhdXNlZD0hMCxjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRikpfSx1LnJlc2V0PWZ1bmN0aW9uKCl7dS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuaW5pdGlhbGl6ZWQ9ITEsdS5pbml0aWFsaXplKCkmJihjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRiksdS5wcmludFZhbHVlKHUuc3RhcnRWYWwpKX0sdS51cGRhdGU9ZnVuY3Rpb24oYSl7dS5pbml0aWFsaXplKCkmJihkKGE9TnVtYmVyKGEpKT8odS5lcnJvcj1cIlwiLGEhPT11LmZyYW1lVmFsJiYoY2FuY2VsQW5pbWF0aW9uRnJhbWUodS5yQUYpLHUucGF1c2VkPSExLGRlbGV0ZSB1LnN0YXJ0VGltZSx1LnN0YXJ0VmFsPXUuZnJhbWVWYWwsdS5lbmRWYWw9YSx1LmNvdW50RG93bj11LnN0YXJ0VmFsPnUuZW5kVmFsLHUuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSkpOnUuZXJyb3I9XCJbQ291bnRVcF0gdXBkYXRlKCkgLSBuZXcgZW5kVmFsIGlzIG5vdCBhIG51bWJlcjogXCIrYSl9LHUuaW5pdGlhbGl6ZSgpJiZ1LnByaW50VmFsdWUodS5zdGFydFZhbCl9fSk7IiwiLyohIGpzLWNvb2tpZSB2My4wLjAtcmMuMSB8IE1JVCAqL1xyXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1lfHxzZWxmLGZ1bmN0aW9uKCl7dmFyIG49ZS5Db29raWVzLHI9ZS5Db29raWVzPXQoKTtyLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gZS5Db29raWVzPW4scn19KCkpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG4pZVtyXT1uW3JdfXJldHVybiBlfXZhciB0PXtyZWFkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoLyglW1xcZEEtRl17Mn0pKy9naSxkZWNvZGVVUklDb21wb25lbnQpfSx3cml0ZTpmdW5jdGlvbihlKXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGUpLnJlcGxhY2UoLyUoMlszNDZCRl18M1tBQy1GXXw0MHw1W0JERV18NjB8N1tCQ0RdKS9nLGRlY29kZVVSSUNvbXBvbmVudCl9fTtyZXR1cm4gZnVuY3Rpb24gbihyLG8pe2Z1bmN0aW9uIGkodCxuLGkpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCl7XCJudW1iZXJcIj09dHlwZW9mKGk9ZSh7fSxvLGkpKS5leHBpcmVzJiYoaS5leHBpcmVzPW5ldyBEYXRlKERhdGUubm93KCkrODY0ZTUqaS5leHBpcmVzKSksaS5leHBpcmVzJiYoaS5leHBpcmVzPWkuZXhwaXJlcy50b1VUQ1N0cmluZygpKSx0PWVuY29kZVVSSUNvbXBvbmVudCh0KS5yZXBsYWNlKC8lKDJbMzQ2Ql18NUV8NjB8N0MpL2csZGVjb2RlVVJJQ29tcG9uZW50KS5yZXBsYWNlKC9bKCldL2csZXNjYXBlKSxuPXIud3JpdGUobix0KTt2YXIgYz1cIlwiO2Zvcih2YXIgdSBpbiBpKWlbdV0mJihjKz1cIjsgXCIrdSwhMCE9PWlbdV0mJihjKz1cIj1cIitpW3VdLnNwbGl0KFwiO1wiKVswXSkpO3JldHVybiBkb2N1bWVudC5jb29raWU9dCtcIj1cIituK2N9fXJldHVybiBPYmplY3QuY3JlYXRlKHtzZXQ6aSxnZXQ6ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiYoIWFyZ3VtZW50cy5sZW5ndGh8fGUpKXtmb3IodmFyIG49ZG9jdW1lbnQuY29va2llP2RvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpOltdLG89e30saT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgYz1uW2ldLnNwbGl0KFwiPVwiKSx1PWMuc2xpY2UoMSkuam9pbihcIj1cIik7J1wiJz09PXVbMF0mJih1PXUuc2xpY2UoMSwtMSkpO3RyeXt2YXIgZj10LnJlYWQoY1swXSk7aWYob1tmXT1yLnJlYWQodSxmKSxlPT09ZilicmVha31jYXRjaChlKXt9fXJldHVybiBlP29bZV06b319LHJlbW92ZTpmdW5jdGlvbih0LG4pe2kodCxcIlwiLGUoe30sbix7ZXhwaXJlczotMX0pKX0sd2l0aEF0dHJpYnV0ZXM6ZnVuY3Rpb24odCl7cmV0dXJuIG4odGhpcy5jb252ZXJ0ZXIsZSh7fSx0aGlzLmF0dHJpYnV0ZXMsdCkpfSx3aXRoQ29udmVydGVyOmZ1bmN0aW9uKHQpe3JldHVybiBuKGUoe30sdGhpcy5jb252ZXJ0ZXIsdCksdGhpcy5hdHRyaWJ1dGVzKX19LHthdHRyaWJ1dGVzOnt2YWx1ZTpPYmplY3QuZnJlZXplKG8pfSxjb252ZXJ0ZXI6e3ZhbHVlOk9iamVjdC5mcmVlemUocil9fSl9KHQse3BhdGg6XCIvXCJ9KX0pO1xyXG4iLCIoZnVuY3Rpb24gZGVmaW5lTXVzdGFjaGUoZ2xvYmFsLGZhY3Rvcnkpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmZXhwb3J0cyYmdHlwZW9mIGV4cG9ydHMubm9kZU5hbWUhPT1cInN0cmluZ1wiKXtmYWN0b3J5KGV4cG9ydHMpfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtcImV4cG9ydHNcIl0sZmFjdG9yeSl9ZWxzZXtnbG9iYWwuTXVzdGFjaGU9e307ZmFjdG9yeShnbG9iYWwuTXVzdGFjaGUpfX0pKHRoaXMsZnVuY3Rpb24gbXVzdGFjaGVGYWN0b3J5KG11c3RhY2hlKXt2YXIgb2JqZWN0VG9TdHJpbmc9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZzt2YXIgaXNBcnJheT1BcnJheS5pc0FycmF5fHxmdW5jdGlvbiBpc0FycmF5UG9seWZpbGwob2JqZWN0KXtyZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpPT09XCJbb2JqZWN0IEFycmF5XVwifTtmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iamVjdCl7cmV0dXJuIHR5cGVvZiBvYmplY3Q9PT1cImZ1bmN0aW9uXCJ9ZnVuY3Rpb24gdHlwZVN0cihvYmope3JldHVybiBpc0FycmF5KG9iaik/XCJhcnJheVwiOnR5cGVvZiBvYmp9ZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZyl7cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZyxcIlxcXFwkJlwiKX1mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmoscHJvcE5hbWUpe3JldHVybiBvYmohPW51bGwmJnR5cGVvZiBvYmo9PT1cIm9iamVjdFwiJiZwcm9wTmFtZSBpbiBvYmp9dmFyIHJlZ0V4cFRlc3Q9UmVnRXhwLnByb3RvdHlwZS50ZXN0O2Z1bmN0aW9uIHRlc3RSZWdFeHAocmUsc3RyaW5nKXtyZXR1cm4gcmVnRXhwVGVzdC5jYWxsKHJlLHN0cmluZyl9dmFyIG5vblNwYWNlUmU9L1xcUy87ZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKHN0cmluZyl7cmV0dXJuIXRlc3RSZWdFeHAobm9uU3BhY2VSZSxzdHJpbmcpfXZhciBlbnRpdHlNYXA9e1wiJlwiOlwiJmFtcDtcIixcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImIzM5O1wiLFwiL1wiOlwiJiN4MkY7XCIsXCJgXCI6XCImI3g2MDtcIixcIj1cIjpcIiYjeDNEO1wifTtmdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZyl7cmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZyxmdW5jdGlvbiBmcm9tRW50aXR5TWFwKHMpe3JldHVybiBlbnRpdHlNYXBbc119KX12YXIgd2hpdGVSZT0vXFxzKi87dmFyIHNwYWNlUmU9L1xccysvO3ZhciBlcXVhbHNSZT0vXFxzKj0vO3ZhciBjdXJseVJlPS9cXHMqXFx9Lzt2YXIgdGFnUmU9LyN8XFxefFxcL3w+fFxce3wmfD18IS87ZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSx0YWdzKXtpZighdGVtcGxhdGUpcmV0dXJuW107dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbnM9W107dmFyIHNwYWNlcz1bXTt2YXIgaGFzVGFnPWZhbHNlO3ZhciBub25TcGFjZT1mYWxzZTtmdW5jdGlvbiBzdHJpcFNwYWNlKCl7aWYoaGFzVGFnJiYhbm9uU3BhY2Upe3doaWxlKHNwYWNlcy5sZW5ndGgpZGVsZXRlIHRva2Vuc1tzcGFjZXMucG9wKCldfWVsc2V7c3BhY2VzPVtdfWhhc1RhZz1mYWxzZTtub25TcGFjZT1mYWxzZX12YXIgb3BlbmluZ1RhZ1JlLGNsb3NpbmdUYWdSZSxjbG9zaW5nQ3VybHlSZTtmdW5jdGlvbiBjb21waWxlVGFncyh0YWdzVG9Db21waWxlKXtpZih0eXBlb2YgdGFnc1RvQ29tcGlsZT09PVwic3RyaW5nXCIpdGFnc1RvQ29tcGlsZT10YWdzVG9Db21waWxlLnNwbGl0KHNwYWNlUmUsMik7aWYoIWlzQXJyYXkodGFnc1RvQ29tcGlsZSl8fHRhZ3NUb0NvbXBpbGUubGVuZ3RoIT09Mil0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRhZ3M6IFwiK3RhZ3NUb0NvbXBpbGUpO29wZW5pbmdUYWdSZT1uZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzBdKStcIlxcXFxzKlwiKTtjbG9zaW5nVGFnUmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzFdKSk7Y2xvc2luZ0N1cmx5UmU9bmV3IFJlZ0V4cChcIlxcXFxzKlwiK2VzY2FwZVJlZ0V4cChcIn1cIit0YWdzVG9Db21waWxlWzFdKSl9Y29tcGlsZVRhZ3ModGFnc3x8bXVzdGFjaGUudGFncyk7dmFyIHNjYW5uZXI9bmV3IFNjYW5uZXIodGVtcGxhdGUpO3ZhciBzdGFydCx0eXBlLHZhbHVlLGNocix0b2tlbixvcGVuU2VjdGlvbjt3aGlsZSghc2Nhbm5lci5lb3MoKSl7c3RhcnQ9c2Nhbm5lci5wb3M7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtpZih2YWx1ZSl7Zm9yKHZhciBpPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2k8dmFsdWVMZW5ndGg7KytpKXtjaHI9dmFsdWUuY2hhckF0KGkpO2lmKGlzV2hpdGVzcGFjZShjaHIpKXtzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKX1lbHNle25vblNwYWNlPXRydWV9dG9rZW5zLnB1c2goW1widGV4dFwiLGNocixzdGFydCxzdGFydCsxXSk7c3RhcnQrPTE7aWYoY2hyPT09XCJcXG5cIilzdHJpcFNwYWNlKCl9fWlmKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlicmVhaztoYXNUYWc9dHJ1ZTt0eXBlPXNjYW5uZXIuc2Nhbih0YWdSZSl8fFwibmFtZVwiO3NjYW5uZXIuc2Nhbih3aGl0ZVJlKTtpZih0eXBlPT09XCI9XCIpe3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtzY2FubmVyLnNjYW4oZXF1YWxzUmUpO3NjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSl9ZWxzZSBpZih0eXBlPT09XCJ7XCIpe3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdDdXJseVJlKTtzY2FubmVyLnNjYW4oY3VybHlSZSk7c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTt0eXBlPVwiJlwifWVsc2V7dmFsdWU9c2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKX1pZighc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpdGhyb3cgbmV3IEVycm9yKFwiVW5jbG9zZWQgdGFnIGF0IFwiK3NjYW5uZXIucG9zKTt0b2tlbj1bdHlwZSx2YWx1ZSxzdGFydCxzY2FubmVyLnBvc107dG9rZW5zLnB1c2godG9rZW4pO2lmKHR5cGU9PT1cIiNcInx8dHlwZT09PVwiXlwiKXtzZWN0aW9ucy5wdXNoKHRva2VuKX1lbHNlIGlmKHR5cGU9PT1cIi9cIil7b3BlblNlY3Rpb249c2VjdGlvbnMucG9wKCk7aWYoIW9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5vcGVuZWQgc2VjdGlvbiBcIicrdmFsdWUrJ1wiIGF0ICcrc3RhcnQpO2lmKG9wZW5TZWN0aW9uWzFdIT09dmFsdWUpdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJytvcGVuU2VjdGlvblsxXSsnXCIgYXQgJytzdGFydCl9ZWxzZSBpZih0eXBlPT09XCJuYW1lXCJ8fHR5cGU9PT1cIntcInx8dHlwZT09PVwiJlwiKXtub25TcGFjZT10cnVlfWVsc2UgaWYodHlwZT09PVwiPVwiKXtjb21waWxlVGFncyh2YWx1ZSl9fW9wZW5TZWN0aW9uPXNlY3Rpb25zLnBvcCgpO2lmKG9wZW5TZWN0aW9uKXRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicrb3BlblNlY3Rpb25bMV0rJ1wiIGF0ICcrc2Nhbm5lci5wb3MpO3JldHVybiBuZXN0VG9rZW5zKHNxdWFzaFRva2Vucyh0b2tlbnMpKX1mdW5jdGlvbiBzcXVhc2hUb2tlbnModG9rZW5zKXt2YXIgc3F1YXNoZWRUb2tlbnM9W107dmFyIHRva2VuLGxhc3RUb2tlbjtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3Rva2VuPXRva2Vuc1tpXTtpZih0b2tlbil7aWYodG9rZW5bMF09PT1cInRleHRcIiYmbGFzdFRva2VuJiZsYXN0VG9rZW5bMF09PT1cInRleHRcIil7bGFzdFRva2VuWzFdKz10b2tlblsxXTtsYXN0VG9rZW5bM109dG9rZW5bM119ZWxzZXtzcXVhc2hlZFRva2Vucy5wdXNoKHRva2VuKTtsYXN0VG9rZW49dG9rZW59fX1yZXR1cm4gc3F1YXNoZWRUb2tlbnN9ZnVuY3Rpb24gbmVzdFRva2Vucyh0b2tlbnMpe3ZhciBuZXN0ZWRUb2tlbnM9W107dmFyIGNvbGxlY3Rvcj1uZXN0ZWRUb2tlbnM7dmFyIHNlY3Rpb25zPVtdO3ZhciB0b2tlbixzZWN0aW9uO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dG9rZW49dG9rZW5zW2ldO3N3aXRjaCh0b2tlblswXSl7Y2FzZVwiI1wiOmNhc2VcIl5cIjpjb2xsZWN0b3IucHVzaCh0b2tlbik7c2VjdGlvbnMucHVzaCh0b2tlbik7Y29sbGVjdG9yPXRva2VuWzRdPVtdO2JyZWFrO2Nhc2VcIi9cIjpzZWN0aW9uPXNlY3Rpb25zLnBvcCgpO3NlY3Rpb25bNV09dG9rZW5bMl07Y29sbGVjdG9yPXNlY3Rpb25zLmxlbmd0aD4wP3NlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aC0xXVs0XTpuZXN0ZWRUb2tlbnM7YnJlYWs7ZGVmYXVsdDpjb2xsZWN0b3IucHVzaCh0b2tlbil9fXJldHVybiBuZXN0ZWRUb2tlbnN9ZnVuY3Rpb24gU2Nhbm5lcihzdHJpbmcpe3RoaXMuc3RyaW5nPXN0cmluZzt0aGlzLnRhaWw9c3RyaW5nO3RoaXMucG9zPTB9U2Nhbm5lci5wcm90b3R5cGUuZW9zPWZ1bmN0aW9uIGVvcygpe3JldHVybiB0aGlzLnRhaWw9PT1cIlwifTtTY2FubmVyLnByb3RvdHlwZS5zY2FuPWZ1bmN0aW9uIHNjYW4ocmUpe3ZhciBtYXRjaD10aGlzLnRhaWwubWF0Y2gocmUpO2lmKCFtYXRjaHx8bWF0Y2guaW5kZXghPT0wKXJldHVyblwiXCI7dmFyIHN0cmluZz1tYXRjaFswXTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTt0aGlzLnBvcys9c3RyaW5nLmxlbmd0aDtyZXR1cm4gc3RyaW5nfTtTY2FubmVyLnByb3RvdHlwZS5zY2FuVW50aWw9ZnVuY3Rpb24gc2NhblVudGlsKHJlKXt2YXIgaW5kZXg9dGhpcy50YWlsLnNlYXJjaChyZSksbWF0Y2g7c3dpdGNoKGluZGV4KXtjYXNlLTE6bWF0Y2g9dGhpcy50YWlsO3RoaXMudGFpbD1cIlwiO2JyZWFrO2Nhc2UgMDptYXRjaD1cIlwiO2JyZWFrO2RlZmF1bHQ6bWF0Y2g9dGhpcy50YWlsLnN1YnN0cmluZygwLGluZGV4KTt0aGlzLnRhaWw9dGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCl9dGhpcy5wb3MrPW1hdGNoLmxlbmd0aDtyZXR1cm4gbWF0Y2h9O2Z1bmN0aW9uIENvbnRleHQodmlldyxwYXJlbnRDb250ZXh0KXt0aGlzLnZpZXc9dmlldzt0aGlzLmNhY2hlPXtcIi5cIjp0aGlzLnZpZXd9O3RoaXMucGFyZW50PXBhcmVudENvbnRleHR9Q29udGV4dC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbiBwdXNoKHZpZXcpe3JldHVybiBuZXcgQ29udGV4dCh2aWV3LHRoaXMpfTtDb250ZXh0LnByb3RvdHlwZS5sb29rdXA9ZnVuY3Rpb24gbG9va3VwKG5hbWUpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciB2YWx1ZTtpZihjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7dmFsdWU9Y2FjaGVbbmFtZV19ZWxzZXt2YXIgY29udGV4dD10aGlzLG5hbWVzLGluZGV4LGxvb2t1cEhpdD1mYWxzZTt3aGlsZShjb250ZXh0KXtpZihuYW1lLmluZGV4T2YoXCIuXCIpPjApe3ZhbHVlPWNvbnRleHQudmlldztuYW1lcz1uYW1lLnNwbGl0KFwiLlwiKTtpbmRleD0wO3doaWxlKHZhbHVlIT1udWxsJiZpbmRleDxuYW1lcy5sZW5ndGgpe2lmKGluZGV4PT09bmFtZXMubGVuZ3RoLTEpbG9va3VwSGl0PWhhc1Byb3BlcnR5KHZhbHVlLG5hbWVzW2luZGV4XSk7dmFsdWU9dmFsdWVbbmFtZXNbaW5kZXgrK11dfX1lbHNle3ZhbHVlPWNvbnRleHQudmlld1tuYW1lXTtsb29rdXBIaXQ9aGFzUHJvcGVydHkoY29udGV4dC52aWV3LG5hbWUpfWlmKGxvb2t1cEhpdClicmVhaztjb250ZXh0PWNvbnRleHQucGFyZW50fWNhY2hlW25hbWVdPXZhbHVlfWlmKGlzRnVuY3Rpb24odmFsdWUpKXZhbHVlPXZhbHVlLmNhbGwodGhpcy52aWV3KTtyZXR1cm4gdmFsdWV9O2Z1bmN0aW9uIFdyaXRlcigpe3RoaXMuY2FjaGU9e319V3JpdGVyLnByb3RvdHlwZS5jbGVhckNhY2hlPWZ1bmN0aW9uIGNsZWFyQ2FjaGUoKXt0aGlzLmNhY2hlPXt9fTtXcml0ZXIucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uIHBhcnNlKHRlbXBsYXRlLHRhZ3Mpe3ZhciBjYWNoZT10aGlzLmNhY2hlO3ZhciB0b2tlbnM9Y2FjaGVbdGVtcGxhdGVdO2lmKHRva2Vucz09bnVsbCl0b2tlbnM9Y2FjaGVbdGVtcGxhdGVdPXBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyk7cmV0dXJuIHRva2Vuc307V3JpdGVyLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24gcmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpe3ZhciB0b2tlbnM9dGhpcy5wYXJzZSh0ZW1wbGF0ZSk7dmFyIGNvbnRleHQ9dmlldyBpbnN0YW5jZW9mIENvbnRleHQ/dmlldzpuZXcgQ29udGV4dCh2aWV3KTtyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsdGVtcGxhdGUpfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclRva2Vucz1mdW5jdGlvbiByZW5kZXJUb2tlbnModG9rZW5zLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl7dmFyIGJ1ZmZlcj1cIlwiO3ZhciB0b2tlbixzeW1ib2wsdmFsdWU7Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt2YWx1ZT11bmRlZmluZWQ7dG9rZW49dG9rZW5zW2ldO3N5bWJvbD10b2tlblswXTtpZihzeW1ib2w9PT1cIiNcIil2YWx1ZT10aGlzLnJlbmRlclNlY3Rpb24odG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiXlwiKXZhbHVlPXRoaXMucmVuZGVySW52ZXJ0ZWQodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiPlwiKXZhbHVlPXRoaXMucmVuZGVyUGFydGlhbCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpO2Vsc2UgaWYoc3ltYm9sPT09XCImXCIpdmFsdWU9dGhpcy51bmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KTtlbHNlIGlmKHN5bWJvbD09PVwibmFtZVwiKXZhbHVlPXRoaXMuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpO2Vsc2UgaWYoc3ltYm9sPT09XCJ0ZXh0XCIpdmFsdWU9dGhpcy5yYXdWYWx1ZSh0b2tlbik7aWYodmFsdWUhPT11bmRlZmluZWQpYnVmZmVyKz12YWx1ZX1yZXR1cm4gYnVmZmVyfTtXcml0ZXIucHJvdG90eXBlLnJlbmRlclNlY3Rpb249ZnVuY3Rpb24gcmVuZGVyU2VjdGlvbih0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciBzZWxmPXRoaXM7dmFyIGJ1ZmZlcj1cIlwiO3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7ZnVuY3Rpb24gc3ViUmVuZGVyKHRlbXBsYXRlKXtyZXR1cm4gc2VsZi5yZW5kZXIodGVtcGxhdGUsY29udGV4dCxwYXJ0aWFscyl9aWYoIXZhbHVlKXJldHVybjtpZihpc0FycmF5KHZhbHVlKSl7Zm9yKHZhciBqPTAsdmFsdWVMZW5ndGg9dmFsdWUubGVuZ3RoO2o8dmFsdWVMZW5ndGg7KytqKXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQucHVzaCh2YWx1ZVtqXSkscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9fWVsc2UgaWYodHlwZW9mIHZhbHVlPT09XCJvYmplY3RcInx8dHlwZW9mIHZhbHVlPT09XCJzdHJpbmdcInx8dHlwZW9mIHZhbHVlPT09XCJudW1iZXJcIil7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LnB1c2godmFsdWUpLHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfWVsc2UgaWYoaXNGdW5jdGlvbih2YWx1ZSkpe2lmKHR5cGVvZiBvcmlnaW5hbFRlbXBsYXRlIT09XCJzdHJpbmdcIil0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucyB3aXRob3V0IHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZVwiKTt2YWx1ZT12YWx1ZS5jYWxsKGNvbnRleHQudmlldyxvcmlnaW5hbFRlbXBsYXRlLnNsaWNlKHRva2VuWzNdLHRva2VuWzVdKSxzdWJSZW5kZXIpO2lmKHZhbHVlIT1udWxsKWJ1ZmZlcis9dmFsdWV9ZWxzZXtidWZmZXIrPXRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9cmV0dXJuIGJ1ZmZlcn07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJJbnZlcnRlZD1mdW5jdGlvbiByZW5kZXJJbnZlcnRlZCh0b2tlbixjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYoIXZhbHVlfHxpc0FycmF5KHZhbHVlKSYmdmFsdWUubGVuZ3RoPT09MClyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJQYXJ0aWFsPWZ1bmN0aW9uIHJlbmRlclBhcnRpYWwodG9rZW4sY29udGV4dCxwYXJ0aWFscyl7aWYoIXBhcnRpYWxzKXJldHVybjt2YXIgdmFsdWU9aXNGdW5jdGlvbihwYXJ0aWFscyk/cGFydGlhbHModG9rZW5bMV0pOnBhcnRpYWxzW3Rva2VuWzFdXTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModGhpcy5wYXJzZSh2YWx1ZSksY29udGV4dCxwYXJ0aWFscyx2YWx1ZSl9O1dyaXRlci5wcm90b3R5cGUudW5lc2NhcGVkVmFsdWU9ZnVuY3Rpb24gdW5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gdmFsdWV9O1dyaXRlci5wcm90b3R5cGUuZXNjYXBlZFZhbHVlPWZ1bmN0aW9uIGVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKHZhbHVlIT1udWxsKXJldHVybiBtdXN0YWNoZS5lc2NhcGUodmFsdWUpfTtXcml0ZXIucHJvdG90eXBlLnJhd1ZhbHVlPWZ1bmN0aW9uIHJhd1ZhbHVlKHRva2VuKXtyZXR1cm4gdG9rZW5bMV19O211c3RhY2hlLm5hbWU9XCJtdXN0YWNoZS5qc1wiO211c3RhY2hlLnZlcnNpb249XCIyLjMuMFwiO211c3RhY2hlLnRhZ3M9W1wiPCVcIixcIiU+XCJdO3ZhciBkZWZhdWx0V3JpdGVyPW5ldyBXcml0ZXI7bXVzdGFjaGUuY2xlYXJDYWNoZT1mdW5jdGlvbiBjbGVhckNhY2hlKCl7cmV0dXJuIGRlZmF1bHRXcml0ZXIuY2xlYXJDYWNoZSgpfTttdXN0YWNoZS5wYXJzZT1mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSx0YWdzKXtyZXR1cm4gZGVmYXVsdFdyaXRlci5wYXJzZSh0ZW1wbGF0ZSx0YWdzKX07bXVzdGFjaGUucmVuZGVyPWZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKXtpZih0eXBlb2YgdGVtcGxhdGUhPT1cInN0cmluZ1wiKXt0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHRlbXBsYXRlISBUZW1wbGF0ZSBzaG91bGQgYmUgYSBcInN0cmluZ1wiICcrJ2J1dCBcIicrdHlwZVN0cih0ZW1wbGF0ZSkrJ1wiIHdhcyBnaXZlbiBhcyB0aGUgZmlyc3QgJytcImFyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKVwiKX1yZXR1cm4gZGVmYXVsdFdyaXRlci5yZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyl9O211c3RhY2hlLnRvX2h0bWw9ZnVuY3Rpb24gdG9faHRtbCh0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzLHNlbmQpe3ZhciByZXN1bHQ9bXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpO2lmKGlzRnVuY3Rpb24oc2VuZCkpe3NlbmQocmVzdWx0KX1lbHNle3JldHVybiByZXN1bHR9fTttdXN0YWNoZS5lc2NhcGU9ZXNjYXBlSHRtbDttdXN0YWNoZS5TY2FubmVyPVNjYW5uZXI7bXVzdGFjaGUuQ29udGV4dD1Db250ZXh0O211c3RhY2hlLldyaXRlcj1Xcml0ZXI7cmV0dXJuIG11c3RhY2hlfSk7IiwiLyoqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcclxuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcclxuICpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xyXG4gKi9cclxuIWZ1bmN0aW9uKG4sdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9e307bi5QdWJTdWI9cjt2YXIgZT1uLmRlZmluZTshZnVuY3Rpb24obil7dmFyIHQ9e30scj0tMTtmdW5jdGlvbiBlKG4pe3ZhciB0O2Zvcih0IGluIG4paWYobi5oYXNPd25Qcm9wZXJ0eSh0KSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBvKG4sdCxyKXt0cnl7bih0LHIpfWNhdGNoKG4pe3NldFRpbWVvdXQoZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7dGhyb3cgbn19KG4pLDApfX1mdW5jdGlvbiBpKG4sdCxyKXtuKHQscil9ZnVuY3Rpb24gdShuLHIsZSx1KXt2YXIgZixzPXRbcl0sYz11P2k6bztpZih0Lmhhc093blByb3BlcnR5KHIpKWZvcihmIGluIHMpcy5oYXNPd25Qcm9wZXJ0eShmKSYmYyhzW2ZdLG4sZSl9ZnVuY3Rpb24gZihuLHIsbyxpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9U3RyaW5nKG4pLG89ZS5sYXN0SW5kZXhPZihcIi5cIik7Zm9yKHUobixuLHQscik7LTEhPT1vOyllPWUuc3Vic3RyKDAsbyksbz1lLmxhc3RJbmRleE9mKFwiLlwiKSx1KG4sZSx0LHIpfX0obj1cInN5bWJvbFwiPT10eXBlb2Ygbj9uLnRvU3RyaW5nKCk6bixyLGkpLHM9ZnVuY3Rpb24obil7dmFyIHI9U3RyaW5nKG4pLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpO2Zvcig7IW8mJi0xIT09aTspcj1yLnN1YnN0cigwLGkpLGk9ci5sYXN0SW5kZXhPZihcIi5cIiksbz1Cb29sZWFuKHQuaGFzT3duUHJvcGVydHkocikmJmUodFtyXSkpO3JldHVybiBvfShuKTtyZXR1cm4hIXMmJighMD09PW8/ZigpOnNldFRpbWVvdXQoZiwwKSwhMCl9bi5wdWJsaXNoPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCExLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4ucHVibGlzaFN5bmM9ZnVuY3Rpb24odCxyKXtyZXR1cm4gZih0LHIsITAsbi5pbW1lZGlhdGVFeGNlcHRpb25zKX0sbi5zdWJzY3JpYmU9ZnVuY3Rpb24obixlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXJldHVybiExO249XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4sdC5oYXNPd25Qcm9wZXJ0eShuKXx8KHRbbl09e30pO3ZhciBvPVwidWlkX1wiK1N0cmluZygrK3IpO3JldHVybiB0W25dW29dPWUsb30sbi5zdWJzY3JpYmVPbmNlPWZ1bmN0aW9uKHQscil7dmFyIGU9bi5zdWJzY3JpYmUodCxmdW5jdGlvbigpe24udW5zdWJzY3JpYmUoZSksci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KTtyZXR1cm4gbn0sbi5jbGVhckFsbFN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24oKXt0PXt9fSxuLmNsZWFyU3Vic2NyaXB0aW9ucz1mdW5jdGlvbihuKXt2YXIgcjtmb3IociBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJjA9PT1yLmluZGV4T2YobikmJmRlbGV0ZSB0W3JdfSxuLnVuc3Vic2NyaWJlPWZ1bmN0aW9uKHIpe3ZhciBlLG8saSx1PVwic3RyaW5nXCI9PXR5cGVvZiByJiYodC5oYXNPd25Qcm9wZXJ0eShyKXx8ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdClpZih0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pKXJldHVybiEwO3JldHVybiExfShyKSksZj0hdSYmXCJzdHJpbmdcIj09dHlwZW9mIHIscz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByLGM9ITE7aWYoIXUpe2ZvcihlIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShlKSl7aWYobz10W2VdLGYmJm9bcl0pe2RlbGV0ZSBvW3JdLGM9cjticmVha31pZihzKWZvcihpIGluIG8pby5oYXNPd25Qcm9wZXJ0eShpKSYmb1tpXT09PXImJihkZWxldGUgb1tpXSxjPSEwKX1yZXR1cm4gY31uLmNsZWFyU3Vic2NyaXB0aW9ucyhyKX19KHIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUuYW1kP2UoZnVuY3Rpb24oKXtyZXR1cm4gcn0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiYodm9pZCAwIT09bW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9ciksZXhwb3J0cy5QdWJTdWI9cixtb2R1bGUuZXhwb3J0cz1leHBvcnRzPXIpfShcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3d8fHRoaXMpOyIsIi8qISBVVEYtOFxyXG5cclxuwqkga292cmlnaW5cclxu0JLRgdC1INC/0YDQsNCy0LAg0YDQsNC30YDQtdGI0LXQvdGLXHJcbtC60YDQsNGB0LjQstGL0Lkg0LTQuNC30LDQudC9INC00L7Qu9C20LXQvSDQuNC80LXRgtGMINC60YDQsNGB0LjQstGL0Lkg0LrQvtC0wq5cclxuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1c2Nzcy9cclxuXHJcbiovXHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0bGV0IHJlc2l6ZVRpbWVvdXQgPSBudWxsLFxyXG5cdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdGlmICghcmVzaXplVGltZW91dCkge1xyXG5cclxuXHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdGlmKHdpbmRvd1dpZHRoT0xkICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0d2luZG93V2lkdGhPTGQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcblx0XHRcdFx0XHRcdFB1YlN1Yi5wdWJsaXNoKCd3aW5kb3dXaWR0aFJlc2l6ZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0UHViU3ViLnB1Ymxpc2goJ3BhZ2VMb2FkJyk7XHJcblxyXG5cdFx0Q29va2llcy5zZXQoJ2Zhc3RMb2FkU2NyaXB0JywgdHJ1ZSk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zaXRpb25EZWZhdWx0JywgJy4zcycpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0L7QsdGA0LDQsdC+0YLRh9C40Log0LDQvdC40LzQsNGG0LjQuVxyXG5cdHdpbmRvdy5jc3NBbmltYXRpb24gPSBhPT57bGV0IGIsYyxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjc3NhbmltYXRpb25cIik7c3dpdGNoKGEpe2Nhc2UnYW5pbWF0aW9uJzpiPXtcImFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJPQW5pbWF0aW9uXCI6XCJvQW5pbWF0aW9uRW5kXCIsXCJNb3pBbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiV2Via2l0QW5pbWF0aW9uXCI6XCJ3ZWJraXRBbmltYXRpb25FbmRcIn07YnJlYWs7Y2FzZSd0cmFuc2l0aW9uJzpiPXtcInRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIk9UcmFuc2l0aW9uXCI6XCJvVHJhbnNpdGlvbkVuZFwiLFwiTW96VHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiV2Via2l0VHJhbnNpdGlvblwiOlwid2Via2l0VHJhbnNpdGlvbkVuZFwifX1mb3IoYyBpbiBiKWlmKGQuc3R5bGVbY10hPT11bmRlZmluZWQpcmV0dXJuIGJbY119XHJcblxyXG5cdC8vIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XHJcblx0d2luZG93LmlzSW5WaWV3cG9ydCA9IGVsID0+IHtcclxuXHRcdGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiAocmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdH1cclxuXHJcblx0Ly8g0L7RgtC00LXQu9GP0LXQvCDRgtGL0YHRj9GH0LhcclxuXHR3aW5kb3cuc2VwTnVtYmVyID0gc3RyID0+IHtcclxuXHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xyXG5cdFx0c3RyID0gc3RyLnJlcGxhY2UoL1xccysvZywnJyk7XHJcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgJyQxICcpO1xyXG5cdH1cclxuXHJcblx0Ly8g0YHQutC70LXQuNCy0LDQtdC8INGC0YvRgdGP0YfQuFxyXG5cdHdpbmRvdy5zdHJUb051bWJlciA9IG4gPT4gcGFyc2VJbnQobi5yZXBsYWNlKC9cXHMrL2csJycpLCAxMCk7XHJcblxyXG4vLyDRgdC60LvQvtC90LXQvdC40LVcclxuXHR3aW5kb3cuZGVjbGVuc2lvbiA9IChudW0sIGV4cHJlc3Npb25zKSA9PiB7XHJcblxyXG5cdFx0bGV0IHIsXHJcblx0XHRcdGNvdW50ID0gbnVtICUgMTAwO1xyXG5cclxuXHRcdGlmIChjb3VudCA+IDQgJiYgY291bnQgPCAyMSl7XHJcblxyXG5cdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHJcblx0XHRcdGNvdW50ID0gY291bnQgJSAxMDtcclxuXHJcblx0XHRcdGlmIChjb3VudCA9PSAxKXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzAnXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChjb3VudCA+IDEgJiYgY291bnQgPCA1KXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzEnXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMiddO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByO1xyXG5cclxuXHR9XHJcblxyXG59KSgpOyIsIiggdG9nZ2xlUGFzcyA9PiB7XHJcblxyXG5cdGlmKCF0b2dnbGVQYXNzLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHQvLyDQv9C+0LrQsNC30LDRgtGMINC/0LDRgNC+0LvRjFxyXG5cclxuXHRBcnJheS5mcm9tKHRvZ2dsZVBhc3MsIGdyb3VwID0+IHtcclxuXHJcblx0XHRncm91cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnZpc2libGUtdG9nZ2xlLXBhc3N3b3JkX19idG4nKSApIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcudmlzaWJsZS10b2dnbGUtcGFzc3dvcmRfX2lucHV0JyksIGlucHV0ID0+IGlucHV0LnR5cGUgPSBpbnB1dC50eXBlID09PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLnZpc2libGUtdG9nZ2xlLXBhc3N3b3JkX19idG4gc3ZnJyksIHN2ZyA9PiBzdmcuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlzaWJsZS10b2dnbGUtcGFzc3dvcmQnKSk7IiwiKCBmb3JtID0+IHtcclxuXHJcblx0aWYoIGZvcm0gKSB7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJykpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX2xpc3QnKSk7XHJcblxyXG4vLyByZW1vdmVcclxuXHJcbiggYnRucyA9PiB7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbGlzdCcpO1xyXG5cclxuXHRpZiggYnRucy5sZW5ndGggKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaXRlbSA9IGJ0bi5jbG9zZXN0KCcuY2FydF9faXRlbScpO1xyXG5cclxuXHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJy5idG4nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpdGVtLnN0eWxlLmhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuXHRcdFx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBldmVudC5wcm9wZXJ0eU5hbWUgPT09ICdoZWlnaHQnICYmIGl0ZW0uY2xpZW50SGVpZ2h0ID09PSAwICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aXRlbS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4gZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJykpLDEwMCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dCggKCk9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLXJlbW92ZScpICk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJ0X19pdGVtLXJlbW92ZScpKTtcclxuXHJcbi8vICsgfCAtXHJcblxyXG4oIGNhcnQgPT4ge1xyXG5cclxuXHRpZighY2FydCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBmb3JtID0gY2FydC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbGlzdCcpLFxyXG5cdFx0ICBxdWFudGl0eSA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmNhcnQtcXVhbnRpdHknKTtcclxuXHJcblx0aWYocXVhbnRpdHkubGVuZ3RoKSB7XHJcblxyXG4vLyBxdWFudGl0eVxyXG5cdFx0QXJyYXkuZnJvbShxdWFudGl0eSwgZWwgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHZhbHVlID0gbnVsbDtcclxuXHJcblx0XHRcdGNvbnN0IHVwID0gZWwucXVlcnlTZWxlY3RvcignLmNhcnQtcXVhbnRpdHlfX2J0bi0tdXAnKSxcclxuXHRcdFx0XHRkb3duID0gZWwucXVlcnlTZWxlY3RvcignLmNhcnQtcXVhbnRpdHlfX2J0bi0tZG93bicpLFxyXG5cdFx0XHRcdGNvdW50ID0gZWwucXVlcnlTZWxlY3RvcignLmNhcnQtcXVhbnRpdHlfX2NvdW50Jyk7XHJcblxyXG5cdFx0XHR1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUludChjb3VudC52YWx1ZSk7XHJcblxyXG5cdFx0XHRcdGNvdW50LnZhbHVlID0gaXNOYU4odmFsdWUpID8gMSA6IHZhbHVlICsgMTtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJykpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlSW50KGNvdW50LnZhbHVlKTtcclxuXHJcblx0XHRcdFx0aWYoIGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA8IDIgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFsdWUgPSAyO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvdW50LnZhbHVlID0gdmFsdWUgLSAxO1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScpKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y291bnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IGNvdW50LnNldFNlbGVjdGlvblJhbmdlKDAsOSksMTAwKVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb3VudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgdmFsID0gY291bnQudmFsdWUucmVwbGFjZSgvW1xcRF0vZywgJycpO1xyXG5cclxuXHRcdFx0XHRpZiAoIGlzTmFOKHZhbCkgKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFsID0gMTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb3VudC52YWx1ZSA9IHZhbDtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJykpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0JykpOyIsIi8vINC10YnQtSBtZW51IGNhdGVnb3J5XHJcblxyXG4oIGJsb2NrcyA9PiB7XHJcblxyXG5cdGlmKGJsb2Nrcy5sZW5ndGgpIHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJsb2NrcywgYmxvY2sgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuID0gYmxvY2sucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0ZWdvcnlfX3RvZ2dsZScpLFxyXG5cdFx0XHRcdCAgd3JhcCA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGVnb3J5X193cmFwJyksXHJcblx0XHRcdFx0ICBsaXN0ID0gYmxvY2sucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0ZWdvcnlfX2xldmVsLTInKTtcclxuXHJcblx0XHRcdGlmICggYnRuICkge1xyXG5cclxuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0d3JhcC5zdHlsZS5oZWlnaHQgPSBsaXN0LmNsaWVudEhlaWdodCArICdweCc7XHJcblxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCggKCk9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRibG9jay5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblx0XHRcdFx0XHRcdHdyYXAuc3R5bGUuaGVpZ2h0ID0gbGlzdC5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5cclxuXHRcdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRlZ29yeV9fc2VjdGlvbicpKTtcclxuXHJcbi8vINC10YnQtSBjYXRlZ29yeS1jYXJkc1xyXG5cclxuKCBibG9ja3MgPT4ge1xyXG5cclxuXHRpZihibG9ja3MubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShibG9ja3MsIGJsb2NrID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRvZ2dsZSA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1jYXJkc19fdG9nZ2xlJyk7XHJcblxyXG5cdFx0XHRpZiAoIHRvZ2dsZSApIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgYnRuID0gdG9nZ2xlLnF1ZXJ5U2VsZWN0b3IoJy5idG4nKSxcclxuXHRcdFx0XHRcdCAgd3JhcCA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1jYXJkc19fd3JhcCcpLFxyXG5cdFx0XHRcdFx0ICBsaXN0ID0gYmxvY2sucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWNhcmRzX19saXN0Jyk7XHJcblxyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHR3cmFwLnN0eWxlLmhlaWdodCA9IGxpc3QuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHRcdFx0XHRcdFx0d3JhcC5zdHlsZS5oZWlnaHQgPSBsaXN0LmNsaWVudEhlaWdodCArICdweCc7XHJcblxyXG5cdFx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeS1jYXJkcycpKTsiLCIvLyBjb250ZW50LWJsb2NrXHJcblxyXG4oIGJsb2NrcyA9PiB7XHJcblxyXG5cdGlmKGJsb2Nrcy5sZW5ndGgpIHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJsb2NrcywgYmxvY2sgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuID0gYmxvY2sucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYmxvY2tfX3RvZ2dsZScpO1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRlbnQtYmxvY2snKSk7IiwiXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKGZvcm0pIHtcclxuXHJcblx0XHRjb25zdCByZXN1bHRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fcmVzdWx0JyksXHJcblx0XHRcdCAgY291bnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2NvdW50JyksXHJcblx0XHRcdCAgZmllbGRzZXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19maWVsZHNldCcpLFxyXG5cdFx0XHQgIGxvYWRpbmdMYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdGxvYWRpbmdMYXllci5jbGFzc05hbWUgPSAnY2F0YWxvZ19fbG9hZGluZyc7XHJcblxyXG5cdFx0Ly8gY2hhbmdlXHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG5cdFx0XHQvLyDQktGB0LVcclxuXHJcblx0XHRcdGlmKCB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyApIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSxcclxuXHRcdFx0XHRcdCAgYnRuQWxsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19jaGVja2JveC1hbGxbbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xyXG5cclxuXHRcdFx0XHRpZiAoIGJ0bkFsbCApIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBsaXN0ID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCInICsgbmFtZSArICdcIl0nKSkuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBidG5BbGwpO1xyXG5cclxuXHRcdFx0XHRcdGlmICggdGFyZ2V0ID09PSBidG5BbGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRBcnJheS5mcm9tKGxpc3QsIGlucHV0ID0+IGlucHV0LmNoZWNrZWQgPSBidG5BbGwuY2hlY2tlZCk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGJ0bkFsbC5jaGVja2VkID0gbGlzdC5ldmVyeSggaW5wdXQgPT4gaW5wdXQuY2hlY2tlZCA9PT0gdHJ1ZSApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gc3VibWl0XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhmb3JtLCAnY2hhbmdlJyk7XHJcblxyXG5cdFx0XHRyZXN1bHRCb3guaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgbG9hZGluZ0xheWVyKTtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cclxuXHRcdFx0Y29uc3QgcXVlcnlTdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGZvcm1EYXRhKS50b1N0cmluZygpO1xyXG5cclxuXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUodW5kZWZpbmVkLCAnJywgJz8nICsgcXVlcnlTdHJpbmcpO1xyXG5cclxuXHRcdFx0Ly8g0LjRgdGC0L7Rh9C90LjQuiDRhNC+0YDQvNCwINC80L7QttC10YIg0LHRi9GC0Ywg0YLQvtC70YzQutC+INC/0YDQuCDQutC70LjQutC1INC/0L4g0LrQvdC+0L/QutC1XHJcblx0XHRcdGlmICggdGFyZ2V0ICE9PSBmb3JtICkge1xyXG5cclxuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2NvdW50JywgJ29uJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBmb3JtRGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRsb2FkaW5nTGF5ZXIucmVtb3ZlKCk7XHJcblx0XHRcdFx0cmVzdWx0Qm94LmlubmVySFRNTCA9IGh0bWw7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBzdWJtaXRcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyLW9wZW4nKTtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBkZWZhdWx0IHJlc2V0XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdkZWZhdWx0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveF9faW5wdXQ6Y2hlY2tlZDpub3QoOmRpc2FibGVkKScpLCBjaGVja2JveCA9PiBjaGVja2JveC5jaGVja2VkID0gZmFsc2UpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3Vpc2xpZGVyJyksIG5vdWlzbGlkZXIgPT4gbm91aXNsaWRlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInJlc2V0XCIpKSk7XHJcblxyXG5cdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcicpKTtcclxuXHJcblxyXG5cclxuLy8gZmlsdGVyLXNvcnQtdHJpZ2dlciBkZXNrdG9wXHJcblxyXG4oIGZvcm0gPT4ge1xyXG5cclxuXHRpZihmb3JtLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20oZm9ybSwgZm9ybSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpLFxyXG5cdFx0XHRcdCAgYnRuc1JhZGlvID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuc29ydF9faXRlbScpLFxyXG5cdFx0XHRcdCAgZGlyZWN0aW9uID0gZm9ybS5lbGVtZW50cy5kaXJlY3Rpb247XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKCBidG5zUmFkaW8sIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1yZXZlcnQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXJldmVydCcpO1xyXG5cdFx0XHRcdFx0XHRcdGZpbHRlci5lbGVtZW50cy5kaXJlY3Rpb24udmFsdWUgPSBkaXJlY3Rpb24udmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnaXMtcmV2ZXJ0Jyk7XHJcblx0XHRcdFx0XHRcdFx0ZmlsdGVyLmVsZW1lbnRzLmRpcmVjdGlvbi52YWx1ZSA9IGRpcmVjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWx0Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGJ0bi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgZm9ybS5xdWVyeVNlbGVjdG9yKCcuc29ydF9faXRlbSBzdmcnKSk7XHJcblxyXG5cdFx0XHRcdFx0XHRBcnJheS5mcm9tKCBidG5zUmFkaW8sIF9idG4gPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRfYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScsIGJ0biA9PT0gX2J0bik7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0ZmlsdGVyLmVsZW1lbnRzLnNvcnQudmFsdWUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XHJcblxyXG5cdFx0XHRcdFx0ZmlsdGVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KVxyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyLXNvcnQtdHJpZ2dlcicpKTtcclxuXHJcblxyXG4vLyBmaWx0ZXItdGFncy10cmlnZ2VyXHJcblxyXG4oIGZvcm0gPT4ge1xyXG5cclxuXHRpZihmb3JtLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20oZm9ybSwgZm9ybSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpLFxyXG5cdFx0XHRcdCAgYnRucyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlci10YWdzLXRyaWdnZXJfX3RhZycpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbSggYnRucywgYnRuID0+IHtcclxuXHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbHRlci10YWdzLXRyaWdnZXJfX3RhZy0tcmVzZXQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtcmVtb3ZlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0QXJyYXkuZnJvbSggYnRucywgX2J0biA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBidG4gIT09IF9idG4gKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRfYnRuLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0fSwgNTAwKTtcclxuXHJcblx0XHRcdFx0XHRcdGZpbHRlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImRlZmF1bHRcIikpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCBuYW1lID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyksXHJcblx0XHRcdFx0XHRcdFx0ICB2YWx1ZSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKG5hbWUsdmFsdWUpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCBuYW1lID09PSBcIm5vdWlzbGlkZXJcIiApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZmlsdGVyLnF1ZXJ5U2VsZWN0b3IoJy5ub3Vpc2xpZGVyLS0nICsgdmFsdWUpLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicmVzZXRcIikpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZmlsdGVyLnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtuYW1lfVwiXVt2YWx1ZT1cIiR7dmFsdWV9XCJdYCkuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2lzLXJlbW92ZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggKCk9PiBidG4ucmVtb3ZlKCksIDUwMCk7XHJcblxyXG5cdFx0XHRcdFx0XHRmaWx0ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KVxyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyLXRhZ3MtdHJpZ2dlcicpKTtcclxuXHJcblxyXG4vLyBmaWx0ZXItc29ydC10cmlnZ2VyIG1vYmlsZVxyXG5cclxuKCBmb3JtID0+IHtcclxuXHJcblx0aWYoZm9ybSkge1xyXG5cclxuXHRcdGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGZpbHRlci5lbGVtZW50cy5kaXJlY3Rpb24udmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRpcmVjdGlvbicpO1xyXG5cdFx0XHRmaWx0ZXIuZWxlbWVudHMuc29ydC52YWx1ZSA9IGZvcm0uZWxlbWVudHMuc29ydC52YWx1ZTtcclxuXHJcblx0XHRcdGZpbHRlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBjYXRhbG9nX19zb3J0LWJ0bi1tb2JpbGVcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdC8vIHNvcnRcclxuXHJcblx0XHRcdGNvbnN0IGlzU29ydCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuY2F0YWxvZ19fc29ydC1idG4tbW9iaWxlLS1zb3J0Jyk7XHJcblxyXG5cdFx0XHRpZiAoIGlzU29ydCApIHtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZmlsdGVyLXNvcnQtdHJpZ2dlci1tb2JpbGUnKSA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZmlsdGVyXHJcblxyXG5cdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuY2F0YWxvZ19fc29ydC1idG4tbW9iaWxlLS1maWx0ZXInKSApIHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmZpbHRlcl9fYnRuLWNsb3NlJykgKSB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyLW9wZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1zb3J0LXRyaWdnZXItbW9iaWxlJykpOyIsIiggbW9kYWxDYXJ0ID0+IHtcclxuXHJcblx0aWYgKCAhbW9kYWxDYXJ0ICkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBtb2RhbENhcnRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1jYXJ0LXRlbXBsYXRlJyk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtLWJ1eScpO1xyXG5cclxuXHRcdGlmIChmb3JtKSB7XHJcblxyXG5cdFx0XHRjb25zdCBidG5TdWJtaXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJ1eV9fc3VibWl0Jyk7XHJcblxyXG5cdFx0XHRidG5TdWJtaXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdFx0Qlgub25DdXN0b21FdmVudCgnT25CYXNrZXRDaGFuZ2UnKTtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRcdGJ0blN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRtb2RhbENhcnQuaW5uZXJIVE1MID0gTXVzdGFjaGUucmVuZGVyKG1vZGFsQ2FydFRlbXBsYXRlLmlubmVySFRNTCwgcmVzdWx0KTtcclxuXHJcblx0XHRcdFx0Ly8g0L/QvtC60LDQt9Cw0YLRjCDQvNC+0LTQsNC70LrRg1xyXG5cclxuXHRcdFx0XHRjb25zdCBldmVudE1vZGFsU2hvdyA9IG5ldyBDdXN0b21FdmVudChcIm1vZGFsU2hvd1wiLCB7XHJcblx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0b3I6IFwiY2FydFwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5tb2RhbC5kaXNwYXRjaEV2ZW50KGV2ZW50TW9kYWxTaG93KTtcclxuXHJcblx0XHRcdFx0Ly8g0LIg0YjQsNC/0LrQtVxyXG5cclxuXHRcdFx0XHRbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNldC1jYXJ0LWNvdW50ZXInKV0uZm9yRWFjaCggZWwgPT4gZWwuc2V0QXR0cmlidXRlKCdkYXRhLWNvdW50ZXInLCByZXN1bHQudG90YWxDYXJ0KSApO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gdXBkYXRlIGNvdW50XHJcblxyXG5cdG1vZGFsQ2FydC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0bW9kYWxDYXJ0LmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRmZXRjaChtb2RhbENhcnQuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKG1vZGFsQ2FydClcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdG1vZGFsQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRpZiAoIHJlc3VsdC5pZCA9PSBtb2RhbENhcnQuZWxlbWVudHMuaWQudmFsdWUgKSB7XHJcblxyXG5cdFx0XHRcdC8vINGH0LDRgdGC0LjRh9C90YvQuVxyXG5cclxuXHRcdFx0XHRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnRfX2NvdW50JykudmFsdWUgPSByZXN1bHQuY291bnQ7XHJcblx0XHRcdFx0bW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJ0X190b3RhbC10ZXh0JykudGV4dENvbnRlbnQgPSByZXN1bHQudG90YWxUZXh0O1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0Ly8g0L/QvtC70L3Ri9C5INGA0LXQvdC00LXRgFxyXG5cclxuXHRcdFx0XHRtb2RhbENhcnQuZWxlbWVudHMuaWQudmFsdWUgPSByZXN1bHQuaWQ7XHJcblxyXG5cdFx0XHRcdG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FydF9faW1nJykuaHJlZiA9IHJlc3VsdC5saW5rO1xyXG5cdFx0XHRcdG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FydF9faW1nIGltZycpLnNyYyA9IHJlc3VsdC5pbWc7XHJcblxyXG5cdFx0XHRcdG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FydF9fbmFtZScpLmhyZWYgPSByZXN1bHQubGluaztcclxuXHRcdFx0XHRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnRfX25hbWUnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5uYW1lO1xyXG5cclxuXHRcdFx0XHRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnRfX2ludHJvJykudGV4dENvbnRlbnQgPSByZXN1bHQuZGVzY3JpcHRpb247XHJcblxyXG5cdFx0XHRcdGlmICggcmVzdWx0LnByaWNlT2xkICYmIG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX29sZCcpICkge1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX3NhbGUnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5wcmljZTtcclxuXHRcdFx0XHRcdG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcucHJpY2VfX29sZCcpLnRleHRDb250ZW50ID0gcmVzdWx0LnByaWNlT2xkO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcucHJpY2UnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5wcmljZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnRfX2NvdW50JykudmFsdWUgPSByZXN1bHQuY291bnQ7XHJcblx0XHRcdFx0bW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJ0X190b3RhbC10ZXh0JykudGV4dENvbnRlbnQgPSByZXN1bHQudG90YWxUZXh0O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0bW9kYWxDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdG1vZGFsQ2FydC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbENhcnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coZXZlbnQua2V5KTtcclxuXHJcblx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3F1YW50aXR5X19pbnB1dCcpICkge1xyXG5cclxuXHRcdFx0ZXZlbnQudGFyZ2V0LnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1tcXERdL2csICcnKTtcclxuXHJcblx0XHRcdG1vZGFsQ2FydC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0bW9kYWxDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlucHV0ID0gbW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5xdWFudGl0eV9faW5wdXQnKTtcclxuXHJcblx0XHRpZiAoIGV2ZW50LnRhcmdldCA9PT0gaW5wdXQgKSB7XHJcblxyXG5cdFx0XHRpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgwLDkpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucXVhbnRpdHlfX2J0bi0tdXAnKSApIHtcclxuXHJcblx0XHRcdGlucHV0LnZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsdWUpICsgMTtcclxuXHJcblx0XHRcdG1vZGFsQ2FydC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5xdWFudGl0eV9fYnRuLS1kb3duJykgKSB7XHJcblxyXG5cdFx0XHRpbnB1dC52YWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbHVlKSA8PSAxID8gMSA6IHBhcnNlSW50KGlucHV0LnZhbHVlKSAtIDE7XHJcblxyXG5cdFx0XHRtb2RhbENhcnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FydCcpKTsiLCIoIGZvcm1DaXR5ID0+IHtcclxuXHJcblx0aWYgKCAhZm9ybUNpdHkgKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGxpc3QgPSBmb3JtQ2l0eS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jaXR5X19saXN0JyksXHJcblx0XHQgIGJ0bkxpc3QgPSBsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWNpdHlfX2J0bicpLFxyXG5cdFx0ICBmb3JtQ2l0eUlucHV0ID0gZm9ybUNpdHkucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eV9faW5wdXQtZmlsdGVyJyk7XHJcblxyXG5cdGxldCBjb3VudFZpc2libGUgPSBidG5MaXN0Lmxlbmd0aDtcclxuXHJcblx0Y29uc3Qgc3VibWl0ID0gKCk9PiB7XHJcblxyXG5cdFx0ZmV0Y2goZm9ybUNpdHkuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm1DaXR5KVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0aWYgKCByZXN1bHQuc2V0Q2l0eSApIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtY2hhbmdlLWNpdHknKSwgZWwgPT4gZWwudGV4dENvbnRlbnQgPSByZXN1bHQuc2V0Q2l0eSk7XHJcblxyXG5cdFx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0Zm9ybUNpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCB2YWx1ZSA9IGZvcm1DaXR5SW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRjb3VudFZpc2libGUgPSAwO1xyXG5cclxuXHRcdGlmKHZhbHVlLmxlbmd0aCA+IDApIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oYnRuTGlzdCwgYnRuID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgbmFtZSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdGJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgbmFtZS5pbmRleE9mKHZhbHVlKSA9PT0gLTEpO1xyXG5cclxuXHRcdFx0XHRpZiAoIG5hbWUuaW5kZXhPZih2YWx1ZSkgIT09IC0xICkge1xyXG5cclxuXHRcdFx0XHRcdGNvdW50VmlzaWJsZSsrO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShidG5MaXN0LCBidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XHJcblxyXG5cdFx0XHRjb3VudFZpc2libGUgPSBidG5MaXN0Lmxlbmd0aDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1lbXB0eScsIGNvdW50VmlzaWJsZSA9PT0gMCk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRBcnJheS5mcm9tKGJ0bkxpc3QsIGJ0biA9PiB7XHJcblxyXG5cdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNpdHlfX3JhZGlvJykuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsICgpID0+IHN1Ym1pdCgpICk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRmb3JtQ2l0eS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZiAoIGNvdW50VmlzaWJsZSA9PT0gMSApIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oIGJ0bkxpc3QsIGJ0biA9PiBidG4ucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eV9fcmFkaW8nKS5jaGVja2VkID0gYnRuLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpID09PSBmYWxzZSApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGZvcm1DaXR5SW5wdXQudmFsdWUubGVuZ3RoID4gMCApIHtcclxuXHJcblx0XHRcdHN1Ym1pdCgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jaXR5JykpOyIsIiggaXRlbXMgPT4ge1xyXG5cclxuXHRpZighaXRlbXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oaXRlbXMsIGZvcm0gPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX3N1Ym1pdCcpLFxyXG5cdFx0XHQgIG9rVGV4dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX29rJyksXHJcblx0XHRcdCAgZXJyb3JUZXh0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fZXJyb3InKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0YnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRcdGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Ly8gaW5mbyBtb2RhbFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQudHlwZSA9PT0gJ29rJykge1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsLm9rKHJlc3VsdC50aXRsZSwgcmVzdWx0LnRleHQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0Ly8gb2sgaW4gZm9ybVxyXG5cclxuXHRcdFx0XHRpZihva1RleHQpIHtcclxuXHJcblx0XHRcdFx0XHRpZihyZXN1bHQudHlwZSA9PT0gJ2Zvcm0tb2snKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRva1RleHQudGV4dENvbnRlbnQgPSByZXN1bHQudGV4dDtcclxuXHRcdFx0XHRcdFx0b2tUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmKCF3aW5kb3cuaXNJblZpZXdwb3J0KG9rVGV4dCkpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRva1RleHQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LnVybCAhPT0gJ2ZvcmdvdCcpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gbG9jYXRpb24uaHJlZiA9IHJlc3VsdC51cmwsIDQwMDApO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRva1RleHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gZXJyb3IgaW4gZm9ybVxyXG5cclxuXHRcdFx0XHRpZihlcnJvclRleHQpIHtcclxuXHJcblx0XHRcdFx0XHRpZihyZXN1bHQudHlwZSA9PT0gJ2Zvcm0tZXJyb3InKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRlcnJvclRleHQudGV4dENvbnRlbnQgPSByZXN1bHQudGV4dDtcclxuXHRcdFx0XHRcdFx0ZXJyb3JUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmKCF3aW5kb3cuaXNJblZpZXdwb3J0KGVycm9yVGV4dCkpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRlcnJvclRleHQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGVycm9yVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZWRpcmVjdFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQucmVkaXJlY3QpIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBkZWxheSA9IHJlc3VsdC5yZWRpcmVjdERlbGF5ID8gcmVzdWx0LnJlZGlyZWN0RGVsYXkgKiAxMDAwIDogMDtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGxvY2F0aW9uLmFzc2lnbihyZXN1bHQucmVkaXJlY3QpLCBkZWxheSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlc2V0XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5yZXNldCkge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0ucmVzZXQoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVsb2FkXHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5yZWZyZXNoKSB7XHJcblxyXG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJykpOyIsIiggaW1nID0+IHtcclxuXHJcblx0aWYoaW1nKSB7XHJcblxyXG5cdFx0Y29uc3QgYmlnID0gaW1nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19iaWctaXRlbScpO1xyXG5cclxuXHRcdGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ1ZJREVPJyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCApIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlkZW8nKTtcclxuXHRcdFx0XHRldmVudC50YXJnZXQucGF1c2VkID8gZXZlbnQudGFyZ2V0LnBsYXkoKSA6IGV2ZW50LnRhcmdldC5wYXVzZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19saW5rJykpIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnN3aXBlci1jb250YWluZXItc3R5bGUnKSA9PT0gbnVsbCApe1xyXG5cclxuXHRcdFx0XHRjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19pdGVtJyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oaW1nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19pdGVtJyksIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWN1cnJlbnQnLCBpdGVtID09PSBlbCk7XHJcblx0XHRcdFx0XHRiaWdbaW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhpZGUnLCBpdGVtICE9PSBlbCk7XHJcblxyXG5cdFx0XHRcdFx0aWYoYmlnW2luZGV4XS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpKXtcclxuXHJcblx0XHRcdFx0XHRcdGJpZ1tpbmRleF0ucXVlcnlTZWxlY3RvcigndmlkZW8nKS5wYXVzZSgpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3JykpOyIsIiggaGVhZGVyID0+IHtcclxuXHJcblx0aWYoaGVhZGVyKSB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodEhlYWRlcicsIGhlYWRlci5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oZWlnaHRIZWFkZXJGaXhlZCcsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLWhlaWdodEhlYWRlcicpKTtcclxuXHJcblx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTI1MCkge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItZml4ZWQnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyQm90dG9tID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2JvdHRvbScpLFxyXG5cdFx0XHQgIGhlYWRlckJvdHRvbUlubmVyID0gaGVhZGVyQm90dG9tLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2ZsZXgnKTtcclxuXHJcblx0XHRjb25zdCBwcm9kdWN0U2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2Nyb2xsJyksXHJcblx0XHRcdCAgcHJvZHVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fZm9ybS1idXknKTtcclxuXHJcblx0XHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XHJcblxyXG5cdFx0aWYgKCBwcm9kdWN0U2Nyb2xsICkge1xyXG5cclxuXHRcdFx0aGVhZGVyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBwcm9kdWN0U2Nyb2xsKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPCAxMjUwKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItZml4ZWQnKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItZml4ZWQnKTtcclxuXHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oZWlnaHRIZWFkZXJGaXhlZCcsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLWhlaWdodEhlYWRlcicpKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodEhlYWRlcicsIGhlYWRlci5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHRcdFx0XHQvLyBwcm9kdWN0IHNjcm9sbFxyXG5cclxuXHRcdFx0XHRcdGlmICggcHJvZHVjdFNjcm9sbCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPCA3NjggKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RTY3JvbGwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvdycsIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RTY3JvbGwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvdycsIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICYmIHdpbmRvdy5wYWdlWU9mZnNldCA+IDAgKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgbWF4ID0gaGVhZGVyQm90dG9tSW5uZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRcdGxldCBoID0gbWF4IC0gd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG5cdFx0XHRcdFx0XHRvID0gKCBtYXggLyAyIC0gd2luZG93LnBhZ2VZT2Zmc2V0ICkgLyAoIG1heCAvIDIgKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGggPCAwICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aCA9IDA7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggbyA8IDAgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRvID0gMDtcclxuXHRcdFx0XHRcdFx0aGVhZGVyQm90dG9tSW5uZXIuY2xhc3NMaXN0LmFkZCgnaXMtb2ZmJyk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGhlYWRlckJvdHRvbUlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9mZicpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRoZWFkZXJCb3R0b20uc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XHJcblx0XHRcdFx0XHRoZWFkZXJCb3R0b20uc3R5bGUub3BhY2l0eSA9IG87XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodEhlYWRlcicsIGhlYWRlci5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHRcdFx0XHQvLyBwcm9kdWN0IHNjcm9sbFxyXG5cclxuXHRcdFx0XHRcdGlmICggcHJvZHVjdFNjcm9sbCApIHtcclxuXHJcblx0XHRcdFx0XHRcdHByb2R1Y3RTY3JvbGwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvdycsIHdpbmRvdy5pc0luVmlld3BvcnQocHJvZHVjdEZvcm0pID09PSBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpKTsiLCIvLyDRg9C00LDQu9C10L3QuNC1INCw0LTRgNC10YHQsFxyXG5cclxuKCBidG5zID0+IHtcclxuXHJcblx0aWYgKCBidG5zLmxlbmd0aCApIHtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0tYWRkcmVzcy1yZW1vdmUnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZWxlbWVudHMuaWQudmFsdWUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbG9naW5fX3RleHQnKS50ZXh0Q29udGVudCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dCcpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsPVwiYWNjb3VudC1hZGRyZXNzLXJlbW92ZVwiXScpKTtcclxuXHJcbi8vINGD0LTQsNC70LXQvdC40LUg0LrQsNGA0YLRi1xyXG5cclxuKCBidG5zID0+IHtcclxuXHJcblx0aWYgKCBidG5zLmxlbmd0aCApIHtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0tY2FyZC1yZW1vdmUnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZWxlbWVudHMuaWQudmFsdWUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbG9naW5fX3RleHQnKS50ZXh0Q29udGVudCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dCcpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsPVwiYWNjb3VudC1jYXJkLXJlbW92ZVwiXScpKTtcclxuXHJcbi8vIGZpbHRlclxyXG5cclxuKCBmb3JtID0+IHtcclxuXHJcblx0aWYgKCBmb3JtICkge1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInN1Ym1pdFwiKSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5say1maWx0ZXInKSk7XHJcblxyXG4vLyDRgNCw0LfQstC10YDQvdGD0YLRjCDQt9Cw0LrQsNC3XHJcblxyXG4oIGxpc3QgPT4ge1xyXG5cclxuXHRpZiAoIGxpc3QubGVuZ3RoICkge1xyXG5cclxuXHRcdEFycmF5LmZyb20obGlzdCwgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5say1vcmRlcl9fZm9vdCAuYnRuJyk7XHJcblxyXG5cdFx0XHRpZiAoIGJ0biApIHtcclxuXHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zaG9ydCcpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxrLW9yZGVyJykpOyIsIiggZWxlbXMgPT4ge1xuXG5cdGlmKCFlbGVtcy5sZW5ndGgpIHtcblxuXHRcdHJldHVybjtcblxuXHR9XG5cblx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdHNjcmlwdC5zcmMgPSAnL2pzL2lucHV0bWFzay5taW4uanMnO1xuXHRzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuXG5cdFx0QXJyYXkuZnJvbShlbGVtcywgZWwgPT4ge1xuXG5cdFx0XHRsZXQgbWFza0lucHV0O1xuXG5cdFx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tcGhvbmUnKSkge1xuXG5cdFx0XHRcdG1hc2tJbnB1dCA9IG5ldyBJbnB1dG1hc2soe1xuXHRcdFx0XHRcdG1hc2s6IFwiKzcgKDk5OSkgOTk5IDk5IDk5XCIsXG5cdFx0XHRcdFx0c2hvd01hc2tPbkhvdmVyOiBmYWxzZVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXNrSW5wdXQubWFzayhlbCk7XG5cblx0XHR9KTtcblxuXHR9O1xuXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXRtYXNrJykpOyIsIiggd2luZG93U2Nyb2xsID0+IHtcclxuXHJcbi8vIGJ0biB0b2dnbGVcclxuXHJcblx0KCBidG4gPT4ge1xyXG5cclxuXHRcdGlmKGJ0bikge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtc2hvdycpICkge1xyXG5cclxuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zaG93Jyk7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJykpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtc2hvdycpO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItZml4ZWQnKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJyk7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW1lbnUtdG9nZ2xlJykpO1xyXG5cclxuXHJcblx0Ly8gbWVudSBjYXRhbG9nXHJcblxyXG5cdCggYnRucyA9PiB7XHJcblxyXG5cdFx0aWYoYnRucy5sZW5ndGgpIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oYnRucywgYnRuID0+IHtcclxuXHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1jYXRhbG9nLXNob3cnKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1jYXRhbG9nLXNob3cnLCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJykpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtc2hvdycpID09PSBmYWxzZSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKTtcclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LWNhdGFsb2ctc2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsMCkpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tdG9nZ2xlLW1lbnUtY2F0YWxvZycpKTtcclxuXHJcbn0pKHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcblxyXG5cclxuLy8gbWVudSBzZXJ2aWNlXHJcblxyXG4oIGJ0bnMgPT4ge1xyXG5cclxuXHRpZihidG5zLmxlbmd0aCkge1xyXG5cclxuXHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19ib2R5Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGJ0bnMsIChfYnRuLCBpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdF9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtY3VycmVudCcsIF9idG4gPT09IGJ0bik7XHJcblx0XHRcdFx0XHRib2R5W2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgX2J0biAhPT0gYnRuKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBtb2JpbGVcclxuXHJcblx0XHRjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fbW9iaWxlJyksXHJcblx0XHRcdCAgbW9iaWxlQm9keSA9IG1vYmlsZU1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fbW9iaWxlLWJvZHknKSxcclxuXHRcdFx0ICBtb2JpbGVIZWFkID0gbW9iaWxlTWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19tb2JpbGUtaGVhZC1uYW1lJyksXHJcblx0XHRcdCAgbW9iaWxlQmFjayA9IG1vYmlsZU1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fbW9iaWxlLWJ0bi1iYWNrJyksXHJcblx0XHRcdCAgbW9iaWxlSGVhZERlZmF1bHQgPSBtb2JpbGVIZWFkLnRleHRDb250ZW50O1xyXG5cclxuXHRcdGxldCBtb2JpbGVMZXZlbCA9IG51bGwsXHJcblx0XHRcdGluZGV4Qm9keSA9IG51bGwsXHJcblx0XHRcdGluZGV4TGV2ZWwxID0gbnVsbCxcclxuXHRcdFx0cHJldkxldmVsMSA9IG51bGwsXHJcblx0XHRcdHByZXZMZXZlbDIgPSBudWxsO1xyXG5cclxuXHRcdGNvbnN0IGxldmVsMCA9ICgpID0+IHtcclxuXHJcblx0XHRcdG1vYmlsZUxldmVsID0gMDtcclxuXHRcdFx0bW9iaWxlQmFjay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdG1vYmlsZUhlYWQudGV4dENvbnRlbnQgPSBtb2JpbGVIZWFkRGVmYXVsdDtcclxuXHRcdFx0bW9iaWxlQm9keS5pbm5lckhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19uYXYnKS5pbm5lckhUTUw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGxldmVsMSA9ICgpID0+IHtcclxuXHJcblx0XHRcdG1vYmlsZUxldmVsID0gMTtcclxuXHRcdFx0bW9iaWxlQmFjay5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdG1vYmlsZUhlYWQudGV4dENvbnRlbnQgPSBwcmV2TGV2ZWwxLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0Y29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG5cdFx0XHRodG1sLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxsaSBjbGFzcz1cIm1lbnUtY2F0YWxvZ19fbW9iaWxlLWl0ZW1cIj48YSBocmVmPVwiJHtwcmV2TGV2ZWwxLmhyZWZ9XCI+JHttb2JpbGVCb2R5LmdldEF0dHJpYnV0ZSgnZGF0YS1hbGwtaXRlbScpfTwvYT48L2xpPmApO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShib2R5W2luZGV4Qm9keV0ucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fbGV2ZWwtMicpLCAobGlzdCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCBpdGVtID0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19pdGVtJyksXHJcblx0XHRcdFx0XHQgIGl0ZW1DbG9uZSA9IGl0ZW1bMF0uY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuXHRcdFx0XHRpdGVtQ2xvbmUuY2xhc3NOYW1lID0gJ21lbnUtY2F0YWxvZ19fbW9iaWxlLWl0ZW0nO1xyXG5cdFx0XHRcdGl0ZW1DbG9uZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcblx0XHRcdFx0aHRtbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGl0ZW1DbG9uZSk7XHJcblxyXG5cdFx0XHRcdGlmICggaXRlbS5sZW5ndGggPiAxICkge1xyXG5cclxuXHRcdFx0XHRcdGl0ZW1DbG9uZS5jbGFzc0xpc3QuYWRkKCdpcy1wYXJlbnQnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtb2JpbGVCb2R5LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdG1vYmlsZUJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBodG1sKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBsZXZlbDIgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRtb2JpbGVMZXZlbCA9IDI7XHJcblx0XHRcdG1vYmlsZUhlYWQudGV4dENvbnRlbnQgPSBwcmV2TGV2ZWwyLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0Y29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGJvZHlbaW5kZXhCb2R5XS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19sZXZlbC0yJylbaW5kZXhMZXZlbDFdLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX2l0ZW0nKSwgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGl0ZW1DbG9uZSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0XHRcdGl0ZW1DbG9uZS5jbGFzc05hbWUgPSAnbWVudS1jYXRhbG9nX19tb2JpbGUtaXRlbSc7XHJcblx0XHRcdFx0aHRtbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGl0ZW1DbG9uZSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGh0bWwucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fbW9iaWxlLWl0ZW0gYScpWzBdLnRleHRDb250ZW50ID0gbW9iaWxlQm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWxsLWl0ZW0nKTtcclxuXHJcblx0XHRcdG1vYmlsZUJvZHkuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdG1vYmlsZUJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBodG1sKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV2ZWwwKCk7XHJcblxyXG5cdFx0bW9iaWxlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0bkxldmVsMSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubWVudS1jYXRhbG9nX19uYXYtYnRuJyksXHJcblx0XHRcdFx0ICBidG5MZXZlbDIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1lbnUtY2F0YWxvZ19fbW9iaWxlLWl0ZW0uaXMtcGFyZW50Jyk7XHJcblxyXG5cdFx0XHRpZiAoIGJ0bkxldmVsMSApIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0cHJldkxldmVsMSA9IGJ0bkxldmVsMTtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShtb2JpbGVCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX25hdi1idG4nKSwgKGl0ZW0saW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGJ0bkxldmVsMSA9PT0gaXRlbSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGluZGV4Qm9keSA9IGluZGV4O1xyXG5cdFx0XHRcdFx0XHRsZXZlbDEoKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBidG5MZXZlbDIgKSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdHByZXZMZXZlbDIgPSBidG5MZXZlbDI7XHJcblxyXG5cdFx0XHRcdGluZGV4TGV2ZWwxID0gcGFyc2VJbnQoIGJ0bkxldmVsMi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSApO1xyXG5cclxuXHRcdFx0XHRsZXZlbDIoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRtb2JpbGVCYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9iaWxlTGV2ZWwgPT09IDIgPyBsZXZlbDEoKSA6IGxldmVsMCgpKTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fbmF2LWJ0bicpKTsiLCIoIG1vZGFsID0+IHtcclxuXHJcblx0aWYoIW1vZGFsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pdGVtJyksXHJcblx0XHQgIGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbF0nKSxcclxuXHRcdCAgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcblxyXG5cdGxldCBhY3RpdmVNb2RhbCA9IG51bGwsXHJcblx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cdFx0YWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG5cclxuXHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJoaWRlXCIpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBtb2RhbFNob3cgPSBzZWxlY3RvciA9PiB7XHJcblxyXG5cdFx0aWYoIWFjdGl2ZU1vZGFsKXtcclxuXHJcblx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0YWN0aXZlTW9kYWwgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLScgKyBzZWxlY3Rvcik7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBlbCAhPT0gYWN0aXZlTW9kYWwpKTtcclxuXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2hvdycpO1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRcdGFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdFx0XHRQdWJTdWIucHVibGlzaCgnb3Blbi0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpKXtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHR3aGlsZSAodGFyZ2V0ICE9PSBkb2N1bWVudCAmJiB0YXJnZXQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLW1vZGFsJykpIHtcclxuXHJcblx0XHRcdFx0bW9kYWxTaG93KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbFNob3cnLCBldmVudCA9PiBtb2RhbFNob3coZXZlbnQuZGV0YWlsLnNlbGVjdG9yKSk7XHJcblxyXG5cdG1vZGFsLm9rID0gKHRpdGxlLCB0ZXh0KSA9PiB7XHJcblxyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1vayAubW9kYWwtbG9naW5fX2hlYWQnKS5pbm5lckhUTUwgPSB0aXRsZSA/IHRpdGxlIDogJyc7XHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rIC5tb2RhbC1sb2dpbl9fdGV4dCcpLmlubmVySFRNTCA9IHRleHQgPyB0ZXh0IDogJyc7XHJcblx0XHRtb2RhbFNob3coJ29rJyk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKTsiLCIoIG5vdWlzbGlkZXIgPT4ge1xyXG5cclxuXHRpZighbm91aXNsaWRlci5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3Qgbm9VaVNsaWRlckluaXQgPSAoKSA9PiB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShub3Vpc2xpZGVyLCBzbGlkZXIgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdHJhY2sgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLm5vdWlzbGlkZXJfX3RyYWNrJyksXHJcblx0XHRcdFx0ICBmb3JtID0gc2xpZGVyLmNsb3Nlc3QoJ2Zvcm0nKSxcclxuXHRcdFx0XHQgIG1pbklucHV0ID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5ub3Vpc2xpZGVyX19taW4nKSxcclxuXHRcdFx0XHQgIG1heElucHV0ID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5ub3Vpc2xpZGVyX19tYXgnKSxcclxuXHRcdFx0XHQgIG1pbklucHV0TmFtZSA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcubm91aXNsaWRlcl9fbWluLW5hbWUnKSxcclxuXHRcdFx0XHQgIG1heElucHV0TmFtZSA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcubm91aXNsaWRlcl9fbWF4LW5hbWUnKSxcclxuXHRcdFx0XHQgIG1pbiAgID0gcGFyc2VJbnQoc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1taW4nKSksXHJcblx0XHRcdFx0ICBtYXggICA9IHBhcnNlSW50KHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4JykpLFxyXG5cdFx0XHRcdCAgc3RlcCAgPSBwYXJzZUludChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAnKSksXHJcblx0XHRcdFx0ICBzdWYgID0gc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zdWYnKTtcclxuXHJcblx0XHRcdG5vVWlTbGlkZXIuY3JlYXRlKHRyYWNrLCB7XHJcblx0XHRcdFx0c3RhcnQ6IFttaW4sbWF4XSxcclxuXHRcdFx0XHRzdGVwOiBzdGVwLFxyXG5cdFx0XHRcdGNvbm5lY3Q6IHRydWUsXHJcblx0XHRcdFx0cmFuZ2U6IHtcclxuXHRcdFx0XHRcdCdtaW4nOiBtaW4sXHJcblx0XHRcdFx0XHQnbWF4JzogbWF4XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmb3JtYXQ6IHtcclxuXHRcdFx0XHRcdHRvOiB2YWx1ZSA9PiBwYXJzZUludCh2YWx1ZSksXHJcblx0XHRcdFx0XHRmcm9tOiB2YWx1ZSA9PiBwYXJzZUludCh2YWx1ZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dHJhY2subm9VaVNsaWRlci5vbignc2xpZGUnLCB2YWx1ZXMgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiggc3VmICkge1xyXG5cclxuXHRcdFx0XHRcdG1pbklucHV0LnZhbHVlID0gd2luZG93LnNlcE51bWJlcih2YWx1ZXNbMF0pICsgJyAnICsgc3VmO1xyXG5cdFx0XHRcdFx0bWF4SW5wdXQudmFsdWUgPSB3aW5kb3cuc2VwTnVtYmVyKHZhbHVlc1sxXSkgKyAnICcgKyBzdWY7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0bWluSW5wdXQudmFsdWUgPSBwYXJzZUludCh2YWx1ZXNbMF0pO1xyXG5cdFx0XHRcdFx0bWF4SW5wdXQudmFsdWUgPSBwYXJzZUludCh2YWx1ZXNbMV0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRyYWNrLm5vVWlTbGlkZXIub24oJ2VuZCcsIHZhbHVlcyA9PiB7XHJcblxyXG5cdFx0XHRcdG1pbklucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXNpZGUnLCBtaW4gPT09IHZhbHVlc1swXSk7XHJcblx0XHRcdFx0bWF4SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2lkZScsIG1heCA9PT0gdmFsdWVzWzFdKTtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHRcdG1pbklucHV0TmFtZS52YWx1ZSA9IHZhbHVlc1swXTtcclxuXHRcdFx0XHRtYXhJbnB1dE5hbWUudmFsdWUgPSB2YWx1ZXNbMV07XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRyYWNrLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIHZhbHVlcyA9PiB7XHJcblxyXG5cdFx0XHRcdG1pbklucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXNpZGUnLCBtaW4gPT09IHZhbHVlc1swXSk7XHJcblx0XHRcdFx0bWF4SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2lkZScsIG1heCA9PT0gdmFsdWVzWzFdKTtcclxuXHJcblx0XHRcdFx0bWluSW5wdXROYW1lLnZhbHVlID0gdmFsdWVzWzBdO1xyXG5cdFx0XHRcdG1heElucHV0TmFtZS52YWx1ZSA9IHZhbHVlc1sxXTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR0cmFjay5ub1VpU2xpZGVyLnNldChbbWluLG1heF0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsICgpID0+IHtcclxuXHJcblx0XHRcdFx0dHJhY2subm9VaVNsaWRlci5zZXQoW21pbixtYXhdKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihldmVudC50YXJnZXQgPT09IG1heElucHV0IHx8IGV2ZW50LnRhcmdldCA9PT0gbWluSW5wdXQpIHtcclxuXHJcblx0XHRcdFx0XHR0cmFjay5ub1VpU2xpZGVyLnNldChbXHJcblx0XHRcdFx0XHRcdHBhcnNlSW50KHdpbmRvdy5zdHJUb051bWJlcihtaW5JbnB1dC52YWx1ZSkpLFxyXG5cdFx0XHRcdFx0XHRwYXJzZUludCh3aW5kb3cuc3RyVG9OdW1iZXIobWF4SW5wdXQudmFsdWUpKVxyXG5cdFx0XHRcdFx0XSk7XHJcblxyXG5cdFx0XHRcdFx0bWluSW5wdXROYW1lLnZhbHVlID0gdmFsdWVzWzBdO1xyXG5cdFx0XHRcdFx0bWF4SW5wdXROYW1lLnZhbHVlID0gdmFsdWVzWzFdO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRtaW5JbnB1dC52YWx1ZSA9IHRyYWNrLm5vVWlTbGlkZXIuZ2V0KClbMF07XHJcblx0XHRcdFx0bWluSW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5OSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRtYXhJbnB1dC52YWx1ZSA9IHRyYWNrLm5vVWlTbGlkZXIuZ2V0KClbMV07XHJcblx0XHRcdFx0bWF4SW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5OSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKCBzdWYgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWluSW5wdXQudmFsdWUgPSB3aW5kb3cuc2VwTnVtYmVyKHRyYWNrLm5vVWlTbGlkZXIuZ2V0KClbMF0pICsgJyAnICsgc3VmO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKCBzdWYgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWF4SW5wdXQudmFsdWUgPSB3aW5kb3cuc2VwTnVtYmVyKHRyYWNrLm5vVWlTbGlkZXIuZ2V0KClbMV0pICsgJyAnICsgc3VmO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRpZihldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG5cclxuXHRcdFx0XHRcdG1pbklucHV0LmJsdXIoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRtYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0aWYoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuXHJcblx0XHRcdFx0XHRtYXhJbnB1dC5ibHVyKCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdG1pbiAhPT0gcGFyc2VJbnQod2luZG93LnN0clRvTnVtYmVyKG1pbklucHV0LnZhbHVlKSkgfHxcclxuXHRcdFx0XHRtYXggIT09IHBhcnNlSW50KHdpbmRvdy5zdHJUb051bWJlcihtYXhJbnB1dC52YWx1ZSkpXHJcblx0XHRcdCkge1xyXG5cclxuXHRcdFx0XHR0cmFjay5ub1VpU2xpZGVyLnNldChbXHJcblx0XHRcdFx0XHRwYXJzZUludCh3aW5kb3cuc3RyVG9OdW1iZXIobWluSW5wdXQudmFsdWUpKSxcclxuXHRcdFx0XHRcdHBhcnNlSW50KHdpbmRvdy5zdHJUb051bWJlcihtYXhJbnB1dC52YWx1ZSkpXHJcblx0XHRcdFx0XSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8vIGxvYWRcclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHRzY3JpcHQuc3JjID0gJy9qcy9ub3Vpc2xpZGVyLm1pbi5qcyc7XHJcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IG5vVWlTbGlkZXJJbml0KCk7XHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBDb29raWVzLmdldCgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm91aXNsaWRlcicpKTsiLCJcclxuKCBidG5QYWdlVXAgPT4ge1xyXG5cclxuXHRpZiAoYnRuUGFnZVVwKSB7XHJcblxyXG5cdFx0Ly8gY2xpY2tcclxuXHJcblx0XHRidG5QYWdlVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb2N1bWVudC5ib2R5LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pKTtcclxuXHJcblx0XHQvLyBzY3JvbGxcclxuXHJcblx0XHRsZXQgcmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAoIHJlc2l6ZVRpbWVvdXQgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuUGFnZVVwLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhpZGRlbicsIHdpbmRvdy5wYWdlWU9mZnNldCA8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xyXG5cclxuXHRcdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS11cCcpKTsiLCJ3aW5kb3cuc2VsZWN0cyA9IHNlbGVjdCA9PiB7XHJcblxyXG5cdGlmKHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19saXN0JykpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0dmFsdWUuY2xhc3NOYW1lID0gJ3NlbGVjdF9fdmFsdWUnO1xyXG5cdHZhbHVlLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cInNlbGVjdF9fdmFsdWUtaW5uZXJcIj48L3NwYW4+JztcclxuXHJcblx0dmFsdWUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk03LjIgOS4yYS42NS42NSAwIDAgMSAuOTEgMEwxMiAxMy4xMmwzLjg5LTMuOTRhLjY1LjY1IDAgMCAxIC45MiAwYy4yNS4yNi4yNS42OCAwIC45NEwxMiAxNWwtNC44LTQuODdhLjY3LjY3IDAgMCAxIDAtLjk0WlwiLz48L3N2Zz4nKTtcclxuXHRzZWxlY3QuYXBwZW5kQ2hpbGQodmFsdWUpO1xyXG5cclxuXHRjb25zdCBmb3JtID0gc2VsZWN0LmNsb3Nlc3QoJ2Zvcm0nKSxcclxuXHRcdGNvbnRyb2wgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXHJcblx0XHRvcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyksXHJcblx0XHR2YWx1ZVRleHQgPSBzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fdmFsdWUtaW5uZXInKSxcclxuXHRcdGZpbHRlciA9IHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC0tZmlsdGVyJyksXHJcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdGxpc3QuY2xhc3NOYW1lID0gJ3NlbGVjdF9fbGlzdCc7XHJcblxyXG5cdGxldCBzZWxlY3RlZCA9IGNvbnRyb2wucXVlcnlTZWxlY3RvcignW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJyk7XHJcblxyXG5cdC8vINC90LUg0L/RgNC10LTRg9GB0LzQsNGC0YDQuNCy0LDQtdC8INCyINC80L7QsdC40LvQtSDRgdC40YHRgtC10LzQvdGL0Lkg0LrQvtC90YLRgNC+0LtcclxuLypcclxuXHRjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdGVkID0gY29udHJvbC5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKTtcclxuXHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblxyXG5cdH0pO1xyXG4qL1xyXG5cdGNvbnN0IHZhbHVlRGVmYXVsdCA9IHNlbGVjdGVkLnRleHRDb250ZW50O1xyXG5cclxuXHRpZiggY29udHJvbC5kaXNhYmxlZCB8fCBjb250cm9sLnZhbHVlID09PSAnbm9uZScgfHwgY29udHJvbC52YWx1ZSA9PT0gJycgKXtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblxyXG5cdH1cclxuXHJcblx0aWYgKCBjb250cm9sLnZhbHVlICE9PSAnJyApIHtcclxuXHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBzZWxlY3QucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiJyArIGNvbnRyb2wudmFsdWUgKyAnXCJdJykudGV4dENvbnRlbnQ7XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShvcHRpb24sIGVsID0+IHtcclxuXHJcblx0XHRjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpLFxyXG5cdFx0XHQgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxyXG5cdFx0XHQgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcblx0XHRidG4uY2xhc3NOYW1lID0gJ3NlbGVjdF9fbGlzdC1pdGVtJztcclxuXHJcblx0XHRpbnB1dC50eXBlID0gJ3JhZGlvJztcclxuXHRcdGlucHV0Lm5hbWUgPSBjb250cm9sLm5hbWU7XHJcblx0XHRpbnB1dC52YWx1ZSA9IGVsLnZhbHVlO1xyXG5cclxuXHRcdGxhYmVsLnRleHRDb250ZW50ID0gZWwudGV4dENvbnRlbnQ7XHJcblxyXG5cdFx0aWYgKCBjb250cm9sLnZhbHVlID09PSBlbC52YWx1ZSApIHtcclxuXHJcblx0XHRcdGlucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHRcdFx0c2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdC0tb3BlbicpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGJ0bi5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblx0XHRidG4uYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cdFx0bGlzdC5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8g0LHQtdC3INCx0YvRgdGC0YDQvtCz0L4g0L/QvtC40YHQutCwXHJcbi8qXHJcblx0aWYoZmlsdGVyKXtcclxuXHJcblx0XHRjb25zdCBpbnB1dEZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG5cdFx0aW5wdXRGaWx0ZXIuY2xhc3NOYW1lID0gJ3NlbGVjdF9fZmlsdGVyIGlucHV0JztcclxuXHJcblx0XHR2YWx1ZS5hcHBlbmRDaGlsZChpbnB1dEZpbHRlcik7XHJcblxyXG5cdFx0aW5wdXRGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGlucHV0RmlsdGVyLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRpZih2YWx1ZS5sZW5ndGggPiAxKSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20obGlzdC5jaGlsZHJlbiwgbyA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdGV4dCA9IG8udGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0by5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgdGV4dC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYobGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19saXN0LWl0ZW0nKS5sZW5ndGggPT09IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdF9fbGlzdC1pdGVtLmhpZGUnKS5sZW5ndGgpIHtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1maWx0ZXItZW1wdHknKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1maWx0ZXItZW1wdHknKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShsaXN0LmNoaWxkcmVuLCBvID0+IG8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdF9fbGlzdC1pdGVtJykpe1xyXG5cclxuXHRcdFx0Y29udHJvbC52YWx1ZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcblxyXG5cdFx0XHRjb250cm9sLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdGlmKGZvcm0pIHtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbiovXHJcblxyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcblx0Ly8g0LLQvtC30LLRgNCw0YIg0LIg0LTQtdGE0L7Qu9GC0L3QvtC1INGB0L7RgdGC0L7Rj9C90LjQtSwg0L/RgNC4INGA0LXQt9C10YIg0YTQvtGA0LzRi1xyXG5cclxuXHRmb3JtICYmIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsICgpID0+IHtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSB2YWx1ZURlZmF1bHQ7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvdC1INC/0YDQtdC00YPRgdC80LDRgtGA0LjQstCw0LXQvCDQsiDQvNC+0LHQuNC70LUg0YHQuNGB0YLQtdC80L3Ri9C5INC60L7QvdGC0YDQvtC7XHJcblx0Y29udHJvbC5yZW1vdmUoKTtcclxuXHJcbn07XHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0d2luZG93LnNlbGVjdHNDb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpO1xyXG5cclxuXHRpZih3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24sIHNlbGVjdCA9PiB3aW5kb3cuc2VsZWN0cyhzZWxlY3QpKTtcclxuXHJcblx0fVxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc1NlbGVjdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24sIHNlbGVjdCA9PiB7XHJcblxyXG5cdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0LS1vcGVuJywgc2VsZWN0ID09PSBpc1NlbGVjdCAmJiBpc1NlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC0tb3BlbicpID09PSBmYWxzZSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoKTsiLCIoIHN3aXBlckNvbnRhaW5lciA9PiB7XHJcblxyXG5cdGlmKCFzd2lwZXJDb250YWluZXIubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oc3dpcGVyQ29udGFpbmVyLCBzd2lwZSA9PiB7XHJcblxyXG5cdFx0bGV0IG15U3dpcGUgPSBudWxsLFxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9IG51bGwsXHJcblx0XHRcdHJlc2V0U3dpcGUgPSBudWxsO1xyXG5cclxuXHRcdGNvbnN0IHN3aXBlQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIHN3aXBlUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIHNjcm9sbGJhciA9IHN3aXBlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKSxcclxuXHRcdFx0ICBpdGVtcyA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKSxcclxuXHRcdFx0ICBjb3VudCA9IGl0ZW1zLmxlbmd0aCxcclxuXHRcdFx0ICBjYXJkQXV0byA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tY2FyZC1hdXRvJyksXHJcblx0XHRcdCAgYmlsbGJvYXJkID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1iaWxsYm9hcmQnKSxcclxuXHRcdFx0ICBwcm9kdWN0R2FsbGVyeVByZXZpZXcgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWdhbGxlcnktcHJldmlldycpO1xyXG5cclxuXHRcdHN3aXBlTmF2LmNsYXNzTmFtZSA9ICdzd2lwZXItcGFnaW5hdGlvbic7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTmFtZSA9ICdzd2lwZXItY29udHJvbHMnO1xyXG5cclxuXHRcdHN3aXBlQnRucy5jbGFzc05hbWUgPSAnc3dpcGVyLW5hdmlnYXRpb24nO1xyXG5cdFx0c3dpcGVQcmV2LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLXByZXYgYnV0dG9uJztcclxuXHRcdHN3aXBlTmV4dC5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1uZXh0IGJ1dHRvbic7XHJcblxyXG5cdFx0c3dpcGVQcmV2LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsJ1ByZXZpb3VzIHNsaWRlJyk7XHJcblx0XHRzd2lwZU5leHQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywnTmV4dCBzbGlkZScpO1xyXG5cclxuXHRcdGlmICggcHJvZHVjdEdhbGxlcnlQcmV2aWV3ICkge1xyXG5cclxuXHRcdFx0c3dpcGVQcmV2LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwibTEzIDkgNC42IDQuNmExIDEgMCAxIDEtMS40IDEuNGwtMy45LTMuOUw4LjQgMTVBLjk5Ljk5IDAgMCAxIDcgMTMuNkwxMS41OSA5QTEgMSAwIDAgMSAxMyA5WlwiLz48L3N2Zz4nO1xyXG5cdFx0XHRzd2lwZU5leHQuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTMgMTVhMSAxIDAgMCAxLTEuNCAwTDcgMTAuNEEuOTkuOTkgMCAwIDEgOC40IDlsMy45IDMuOUwxNi4yIDlhLjk5Ljk5IDAgMCAxIDEuNCAxLjRMMTMgMTVaXCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHN3aXBlUHJldi5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04LjQxIDExLjVIMThhMSAxIDAgMCAxIDAgMkg4LjQxbDMuOCAzLjhhMSAxIDAgMCAxLTEuNDIgMS40bC01LjUtNS41YTEgMSAwIDAgMSAwLTEuNGw1LjUtNS41YTEgMSAwIDAgMSAxLjQyIDEuNGwtMy44IDMuOFpcIi8+PC9zdmc+JztcclxuXHRcdFx0c3dpcGVOZXh0LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTExLjggNS44YTEgMSAwIDAgMCAwIDEuNGwzLjc5IDMuOEg2YTEgMSAwIDAgMCAwIDJoOS41OWwtMy44IDMuOGExIDEgMCAxIDAgMS40MiAxLjRsNS41LTUuNWExIDEgMCAwIDAgLjI5LS42N3YtLjA2YTEgMSAwIDAgMC0uMy0uNjhsLTUuNS01LjVhMSAxIDAgMCAwLTEuNCAwWlwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRzd2lwZUJ0bnMuYXBwZW5kQ2hpbGQoc3dpcGVQcmV2KTtcclxuXHRcdHN3aXBlQnRucy5hcHBlbmRDaGlsZChzd2lwZU5leHQpO1xyXG5cdFx0c3dpcGVDb250cm9scy5hcHBlbmRDaGlsZChzd2lwZUJ0bnMpO1xyXG5cdFx0c3dpcGVDb250cm9scy5hcHBlbmRDaGlsZChzd2lwZU5hdik7XHJcblxyXG5cdFx0cmVzZXRTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdGlmKG15U3dpcGUpIHtcclxuXHJcblx0XHRcdFx0bXlTd2lwZS5kZXN0cm95KGZhbHNlLHRydWUpO1xyXG5cdFx0XHRcdG15U3dpcGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0aWYgKCBzd2lwZS5jbG9zZXN0KCcuc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpICkge1xyXG5cclxuXHRcdFx0XHRzd2lwZS5jbG9zZXN0KCcuc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGJpbGxib2FyZCkge1xyXG5cclxuXHRcdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRcdFx0ZGVsYXk6IDUwMDBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2FyZEF1dG8pIHtcclxuXHJcblx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMjUwKSB7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzd2lwZUNvbnRyb2xzKTtcclxuXHJcblx0XHRcdFx0XHRzd2lwZVByZXYuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCcpO1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwcm9kdWN0R2FsbGVyeVByZXZpZXcpIHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGNvdW50ID09PSAxICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0b246IHtcclxuXHRcdFx0XHRcdFx0XHRzbGlkZUNoYW5nZSA6ICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvJyksIHZpZGVvID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmlkZW8ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdpcy12aWRlbycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZpZGVvLnBhdXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGNvdW50ID4gNSApIHtcclxuXHJcblx0XHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBpbml0aWFsU2xpZGUgPSAwLFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3ID0gNSxcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuID0gMTU7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzd2lwZUNvbnRyb2xzKTtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCAoZWwsaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtY3VycmVudCcpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGluaXRpYWxTbGlkZSA9IGluZGV4O1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGJveCA9IHN3aXBlLmNsb3Nlc3QoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3JyksXHJcblx0XHRcdFx0XHRcdCAgYmlnID0gYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19iaWctaXRlbScpO1xyXG5cclxuXHRcdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRcdHNsaWRlQWN0aXZlQ2xhc3M6ICdpcy1jdXJyZW50JyxcclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3IDogc2xpZGVzUGVyVmlldyxcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiBzcGFjZUJldHdlZW4sXHJcblx0XHRcdFx0XHRcdHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGluaXRpYWxTbGlkZTogaW5pdGlhbFNsaWRlLFxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0b246IHtcclxuXHRcdFx0XHRcdFx0XHRzbGlkZUNoYW5nZSA6ICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKGJpZywgKGl0ZW0saW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtaGlkZScsIHN3aXBlLnN3aXBlci5yZWFsSW5kZXggIT09IGluZGV4KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGl0ZW0ucXVlcnlTZWxlY3RvcigndmlkZW8nKSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0ucXVlcnlTZWxlY3RvcigndmlkZW8nKS5wYXVzZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0XHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiA4XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IHNsaWRlc1BlclZpZXcsXHJcblx0XHRcdFx0XHRcdFx0XHRzcGFjZUJldHdlZW46IHNwYWNlQmV0d2VlblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnd2luZG93V2lkdGhSZXNpemUnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAod2luZG93LlN3aXBlciAmJiB0b2dnbGVTd2lwZSkge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3N3aXBlckpzTG9hZCcsICgpID0+IHtcclxuXHJcblx0XHRcdHN3aXBlLmFwcGVuZENoaWxkKHN3aXBlQ29udHJvbHMpO1xyXG5cclxuXHRcdFx0Ly8gZWFnZXJcclxuXHRcdFx0QXJyYXkuZnJvbShzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKSwgaW1nID0+IGltZy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCdlYWdlcicpKTtcclxuXHJcblx0XHRcdC8vIGhpZGVcclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcblx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XHJcblxyXG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBQdWJTdWIucHVibGlzaCgnc3dpcGVySnNMb2FkJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1jb250YWluZXInKSk7Il19
