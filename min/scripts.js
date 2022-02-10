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

// remove

( btns => {

	const form = document.querySelector('.cart__list');

	if( btns.length ) {

		Array.from(btns, btn => {

			const item = btn.closest('.cart__item');

			btn.querySelector('.btn').addEventListener("click", () => {

				item.style.height = item.clientHeight + "px";

				item.addEventListener(window.cssAnimation('transition'), () => {

					if ( item.clientHeight === 0) {

						item.remove();

						setTimeout( ()=> form.dispatchEvent(new CustomEvent('submit')));

					}

				});

				setTimeout( ()=> item.classList.add('is-remove') );

			});

		});

	};

})(document.querySelectorAll('.cart__item-remove'));


( form => {

	if(!form) {

		return;

	}

	const quantity = form.querySelectorAll('.cart-quantity');

	if(quantity.length) {

// quantity
		Array.from(quantity, el => {

			let value = null;

			const up = el.querySelector('.cart-quantity__btn--up'),
				down = el.querySelector('.cart-quantity__btn--down'),
				count = el.querySelector('.cart-quantity__count');

			up.addEventListener('click', () => {

				value = parseInt(count.value) + 1;

				count.value = value;

				form.dispatchEvent(new CustomEvent('change'));

			});

			down.addEventListener('click', () => {

				value = parseInt(count.value) - 1;

				if(value < 1) {

					value = 1;

				}

				count.value = value;

				form.dispatchEvent(new CustomEvent('change'));

			});

			count.addEventListener('blur', () => {

				form.dispatchEvent(new CustomEvent('change'));

			});

			count.addEventListener('focus', () => {

				setTimeout( () => count.setSelectionRange(0,9),100)

			});

			count.addEventListener('keyup', () => {

				const val = this.value.replace(/[\D]/g, '');

				this.value = val;

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
/*
				if(result.msg) {

					form.reset();

					modal.ok(result.msg.title, result.msg.text);

				}

			// результат успеха заявки quality

				if(result.modal === 'quality-ok') {

					document.querySelector('.quality-result__number').textContent = result.number;
					document.querySelector('.quality-result__product').textContent = result.productName;
					document.querySelector('.quality-result__product').getAttribute('href', result.productLink);

					const eventModalShow = new CustomEvent("modalShow", {
						detail: {
							selector: result.modal
						}
					});

					window.modal.dispatchEvent(eventModalShow);

				}
*/
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

			// fadeout
/*
				if(result.fadeout) {

					okText.classList.remove('is-fadeout');

					setTimeout( ()=> okText.classList.add('is-fadeout'), result.fadeout * 1000);

				}

*/			// reset

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

			Array.from(body[indexBody].querySelectorAll('.menu-catalog__list'), (list,index) => {

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

			Array.from(body[indexBody].querySelectorAll('.menu-catalog__list')[indexLevel1].querySelectorAll('.menu-catalog__item'), item => {

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

			});

			track.noUiSlider.on('update', values => {

				minInput.classList.toggle('is-side', min === values[0]);
				maxInput.classList.toggle('is-side', max === values[1]);

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsIm11c3RhY2hlLm1pbi5qcyIsInB1YnN1Yi5taW4uanMiLCJqcy5qcyIsImFjY291bnQuanMiLCJjYXJ0LmpzIiwiY2F0ZWdvcnkuanMiLCJjb250ZW50LWJsb2NrLmpzIiwiZmlsdGVyLmpzIiwiZm9ybS1idXkuanMiLCJmb3JtLWNpdHkuanMiLCJmb3JtLmpzIiwiZ2FsbGVyeS5qcyIsImhlYWRlci5qcyIsImxrLmpzIiwibWFzay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsIm5vdWlzbGlkZXIuanMiLCJwYWdlLXVwLmpzIiwic2VsZWN0LmpzIiwic3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FDRkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oYSxuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPW4ocmVxdWlyZSxleHBvcnRzLG1vZHVsZSk6YS5Db3VudFVwPW4oKX0odGhpcyxmdW5jdGlvbihhLG4sdCl7cmV0dXJuIGZ1bmN0aW9uKGEsbix0LGUsaSxyKXt2YXIgdT10aGlzO2lmKHUudmVyc2lvbj1mdW5jdGlvbigpe3JldHVyblwiMS45LjNcIn0sdS5vcHRpb25zPXt1c2VFYXNpbmc6ITAsdXNlR3JvdXBpbmc6ITAsc2VwYXJhdG9yOlwiLFwiLGRlY2ltYWw6XCIuXCIsZWFzaW5nRm46ZnVuY3Rpb24oYSxuLHQsZSl7cmV0dXJuIHQqKDEtTWF0aC5wb3coMiwtMTAqYS9lKSkqMTAyNC8xMDIzK259LGZvcm1hdHRpbmdGbjpmdW5jdGlvbihhKXt2YXIgbix0LGUsaSxyLG8scz1hPDA7aWYoYT1NYXRoLmFicyhhKS50b0ZpeGVkKHUuZGVjaW1hbHMpLG49KGErPVwiXCIpLnNwbGl0KFwiLlwiKSx0PW5bMF0sZT0xPG4ubGVuZ3RoP3Uub3B0aW9ucy5kZWNpbWFsK25bMV06XCJcIix1Lm9wdGlvbnMudXNlR3JvdXBpbmcpe2ZvcihpPVwiXCIscj0wLG89dC5sZW5ndGg7cjxvOysrcikwIT09ciYmciUzPT0wJiYoaT11Lm9wdGlvbnMuc2VwYXJhdG9yK2kpLGk9dFtvLXItMV0raTt0PWl9cmV0dXJuIHUub3B0aW9ucy5udW1lcmFscy5sZW5ndGgmJih0PXQucmVwbGFjZSgvWzAtOV0vZyxmdW5jdGlvbihhKXtyZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzWythXX0pLGU9ZS5yZXBsYWNlKC9bMC05XS9nLGZ1bmN0aW9uKGEpe3JldHVybiB1Lm9wdGlvbnMubnVtZXJhbHNbK2FdfSkpLChzP1wiLVwiOlwiXCIpK3Uub3B0aW9ucy5wcmVmaXgrdCtlK3Uub3B0aW9ucy5zdWZmaXh9LHByZWZpeDpcIlwiLHN1ZmZpeDpcIlwiLG51bWVyYWxzOltdfSxyJiZcIm9iamVjdFwiPT10eXBlb2Ygcilmb3IodmFyIG8gaW4gdS5vcHRpb25zKXIuaGFzT3duUHJvcGVydHkobykmJm51bGwhPT1yW29dJiYodS5vcHRpb25zW29dPXJbb10pO1wiXCI9PT11Lm9wdGlvbnMuc2VwYXJhdG9yP3Uub3B0aW9ucy51c2VHcm91cGluZz0hMTp1Lm9wdGlvbnMuc2VwYXJhdG9yPVwiXCIrdS5vcHRpb25zLnNlcGFyYXRvcjtmb3IodmFyIHM9MCxsPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXSxtPTA7bTxsLmxlbmd0aCYmIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7KyttKXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9d2luZG93W2xbbV0rXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl0sd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPXdpbmRvd1tsW21dK1wiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl18fHdpbmRvd1tsW21dK1wiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO2Z1bmN0aW9uIGQoYSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGEmJiFpc05hTihhKX13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhLG4pe3ZhciB0PShuZXcgRGF0ZSkuZ2V0VGltZSgpLGU9TWF0aC5tYXgoMCwxNi0odC1zKSksaT13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2EodCtlKX0sZSk7cmV0dXJuIHM9dCtlLGl9KSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSl7Y2xlYXJUaW1lb3V0KGEpfSksdS5pbml0aWFsaXplPWZ1bmN0aW9uKCl7cmV0dXJuISF1LmluaXRpYWxpemVkfHwodS5lcnJvcj1cIlwiLHUuZD1cInN0cmluZ1wiPT10eXBlb2YgYT9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChhKTphLHUuZD8odS5zdGFydFZhbD1OdW1iZXIobiksdS5lbmRWYWw9TnVtYmVyKHQpLGQodS5zdGFydFZhbCkmJmQodS5lbmRWYWwpPyh1LmRlY2ltYWxzPU1hdGgubWF4KDAsZXx8MCksdS5kZWM9TWF0aC5wb3coMTAsdS5kZWNpbWFscyksdS5kdXJhdGlvbj0xZTMqTnVtYmVyKGkpfHwyZTMsdS5jb3VudERvd249dS5zdGFydFZhbD51LmVuZFZhbCx1LmZyYW1lVmFsPXUuc3RhcnRWYWwsdS5pbml0aWFsaXplZD0hMCk6KHUuZXJyb3I9XCJbQ291bnRVcF0gc3RhcnRWYWwgKFwiK24rXCIpIG9yIGVuZFZhbCAoXCIrdCtcIikgaXMgbm90IGEgbnVtYmVyXCIsITEpKTohKHUuZXJyb3I9XCJbQ291bnRVcF0gdGFyZ2V0IGlzIG51bGwgb3IgdW5kZWZpbmVkXCIpKX0sdS5wcmludFZhbHVlPWZ1bmN0aW9uKGEpe3ZhciBuPXUub3B0aW9ucy5mb3JtYXR0aW5nRm4oYSk7XCJJTlBVVFwiPT09dS5kLnRhZ05hbWU/dGhpcy5kLnZhbHVlPW46XCJ0ZXh0XCI9PT11LmQudGFnTmFtZXx8XCJ0c3BhblwiPT09dS5kLnRhZ05hbWU/dGhpcy5kLnRleHRDb250ZW50PW46dGhpcy5kLmlubmVySFRNTD1ufSx1LmNvdW50PWZ1bmN0aW9uKGEpe3Uuc3RhcnRUaW1lfHwodS5zdGFydFRpbWU9YSk7dmFyIG49KHUudGltZXN0YW1wPWEpLXUuc3RhcnRUaW1lO3UucmVtYWluaW5nPXUuZHVyYXRpb24tbix1Lm9wdGlvbnMudXNlRWFzaW5nP3UuY291bnREb3duP3UuZnJhbWVWYWw9dS5zdGFydFZhbC11Lm9wdGlvbnMuZWFzaW5nRm4obiwwLHUuc3RhcnRWYWwtdS5lbmRWYWwsdS5kdXJhdGlvbik6dS5mcmFtZVZhbD11Lm9wdGlvbnMuZWFzaW5nRm4obix1LnN0YXJ0VmFsLHUuZW5kVmFsLXUuc3RhcnRWYWwsdS5kdXJhdGlvbik6dS5jb3VudERvd24/dS5mcmFtZVZhbD11LnN0YXJ0VmFsLSh1LnN0YXJ0VmFsLXUuZW5kVmFsKSoobi91LmR1cmF0aW9uKTp1LmZyYW1lVmFsPXUuc3RhcnRWYWwrKHUuZW5kVmFsLXUuc3RhcnRWYWwpKihuL3UuZHVyYXRpb24pLHUuY291bnREb3duP3UuZnJhbWVWYWw9dS5mcmFtZVZhbDx1LmVuZFZhbD91LmVuZFZhbDp1LmZyYW1lVmFsOnUuZnJhbWVWYWw9dS5mcmFtZVZhbD51LmVuZFZhbD91LmVuZFZhbDp1LmZyYW1lVmFsLHUuZnJhbWVWYWw9TWF0aC5yb3VuZCh1LmZyYW1lVmFsKnUuZGVjKS91LmRlYyx1LnByaW50VmFsdWUodS5mcmFtZVZhbCksbjx1LmR1cmF0aW9uP3UuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KTp1LmNhbGxiYWNrJiZ1LmNhbGxiYWNrKCl9LHUuc3RhcnQ9ZnVuY3Rpb24oYSl7dS5pbml0aWFsaXplKCkmJih1LmNhbGxiYWNrPWEsdS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKX0sdS5wYXVzZVJlc3VtZT1mdW5jdGlvbigpe3UucGF1c2VkPyh1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5kdXJhdGlvbj11LnJlbWFpbmluZyx1LnN0YXJ0VmFsPXUuZnJhbWVWYWwscmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKToodS5wYXVzZWQ9ITAsY2FuY2VsQW5pbWF0aW9uRnJhbWUodS5yQUYpKX0sdS5yZXNldD1mdW5jdGlvbigpe3UucGF1c2VkPSExLGRlbGV0ZSB1LnN0YXJ0VGltZSx1LmluaXRpYWxpemVkPSExLHUuaW5pdGlhbGl6ZSgpJiYoY2FuY2VsQW5pbWF0aW9uRnJhbWUodS5yQUYpLHUucHJpbnRWYWx1ZSh1LnN0YXJ0VmFsKSl9LHUudXBkYXRlPWZ1bmN0aW9uKGEpe3UuaW5pdGlhbGl6ZSgpJiYoZChhPU51bWJlcihhKSk/KHUuZXJyb3I9XCJcIixhIT09dS5mcmFtZVZhbCYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSx1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5zdGFydFZhbD11LmZyYW1lVmFsLHUuZW5kVmFsPWEsdS5jb3VudERvd249dS5zdGFydFZhbD51LmVuZFZhbCx1LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCkpKTp1LmVycm9yPVwiW0NvdW50VXBdIHVwZGF0ZSgpIC0gbmV3IGVuZFZhbCBpcyBub3QgYSBudW1iZXI6IFwiK2EpfSx1LmluaXRpYWxpemUoKSYmdS5wcmludFZhbHVlKHUuc3RhcnRWYWwpfX0pOyIsIi8qISBqcy1jb29raWUgdjMuMC4wLXJjLjEgfCBNSVQgKi9cclxuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9ZXx8c2VsZixmdW5jdGlvbigpe3ZhciBuPWUuQ29va2llcyxyPWUuQ29va2llcz10KCk7ci5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGUuQ29va2llcz1uLHJ9fSgpKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKWVbcl09bltyXX1yZXR1cm4gZX12YXIgdD17cmVhZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC8oJVtcXGRBLUZdezJ9KSsvZ2ksZGVjb2RlVVJJQ29tcG9uZW50KX0sd3JpdGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lKDJbMzQ2QkZdfDNbQUMtRl18NDB8NVtCREVdfDYwfDdbQkNEXSkvZyxkZWNvZGVVUklDb21wb25lbnQpfX07cmV0dXJuIGZ1bmN0aW9uIG4ocixvKXtmdW5jdGlvbiBpKHQsbixpKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpe1wibnVtYmVyXCI9PXR5cGVvZihpPWUoe30sbyxpKSkuZXhwaXJlcyYmKGkuZXhwaXJlcz1uZXcgRGF0ZShEYXRlLm5vdygpKzg2NGU1KmkuZXhwaXJlcykpLGkuZXhwaXJlcyYmKGkuZXhwaXJlcz1pLmV4cGlyZXMudG9VVENTdHJpbmcoKSksdD1lbmNvZGVVUklDb21wb25lbnQodCkucmVwbGFjZSgvJSgyWzM0NkJdfDVFfDYwfDdDKS9nLGRlY29kZVVSSUNvbXBvbmVudCkucmVwbGFjZSgvWygpXS9nLGVzY2FwZSksbj1yLndyaXRlKG4sdCk7dmFyIGM9XCJcIjtmb3IodmFyIHUgaW4gaSlpW3VdJiYoYys9XCI7IFwiK3UsITAhPT1pW3VdJiYoYys9XCI9XCIraVt1XS5zcGxpdChcIjtcIilbMF0pKTtyZXR1cm4gZG9jdW1lbnQuY29va2llPXQrXCI9XCIrbitjfX1yZXR1cm4gT2JqZWN0LmNyZWF0ZSh7c2V0OmksZ2V0OmZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmKCFhcmd1bWVudHMubGVuZ3RofHxlKSl7Zm9yKHZhciBuPWRvY3VtZW50LmNvb2tpZT9kb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTpbXSxvPXt9LGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIGM9bltpXS5zcGxpdChcIj1cIiksdT1jLnNsaWNlKDEpLmpvaW4oXCI9XCIpOydcIic9PT11WzBdJiYodT11LnNsaWNlKDEsLTEpKTt0cnl7dmFyIGY9dC5yZWFkKGNbMF0pO2lmKG9bZl09ci5yZWFkKHUsZiksZT09PWYpYnJlYWt9Y2F0Y2goZSl7fX1yZXR1cm4gZT9vW2VdOm99fSxyZW1vdmU6ZnVuY3Rpb24odCxuKXtpKHQsXCJcIixlKHt9LG4se2V4cGlyZXM6LTF9KSl9LHdpdGhBdHRyaWJ1dGVzOmZ1bmN0aW9uKHQpe3JldHVybiBuKHRoaXMuY29udmVydGVyLGUoe30sdGhpcy5hdHRyaWJ1dGVzLHQpKX0sd2l0aENvbnZlcnRlcjpmdW5jdGlvbih0KXtyZXR1cm4gbihlKHt9LHRoaXMuY29udmVydGVyLHQpLHRoaXMuYXR0cmlidXRlcyl9fSx7YXR0cmlidXRlczp7dmFsdWU6T2JqZWN0LmZyZWV6ZShvKX0sY29udmVydGVyOnt2YWx1ZTpPYmplY3QuZnJlZXplKHIpfX0pfSh0LHtwYXRoOlwiL1wifSl9KTtcclxuIiwiKGZ1bmN0aW9uIGRlZmluZU11c3RhY2hlKGdsb2JhbCxmYWN0b3J5KXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJmV4cG9ydHMmJnR5cGVvZiBleHBvcnRzLm5vZGVOYW1lIT09XCJzdHJpbmdcIil7ZmFjdG9yeShleHBvcnRzKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXCJleHBvcnRzXCJdLGZhY3RvcnkpfWVsc2V7Z2xvYmFsLk11c3RhY2hlPXt9O2ZhY3RvcnkoZ2xvYmFsLk11c3RhY2hlKX19KSh0aGlzLGZ1bmN0aW9uIG11c3RhY2hlRmFjdG9yeShtdXN0YWNoZSl7dmFyIG9iamVjdFRvU3RyaW5nPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7dmFyIGlzQXJyYXk9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24gaXNBcnJheVBvbHlmaWxsKG9iamVjdCl7cmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwob2JqZWN0KT09PVwiW29iamVjdCBBcnJheV1cIn07ZnVuY3Rpb24gaXNGdW5jdGlvbihvYmplY3Qpe3JldHVybiB0eXBlb2Ygb2JqZWN0PT09XCJmdW5jdGlvblwifWZ1bmN0aW9uIHR5cGVTdHIob2JqKXtyZXR1cm4gaXNBcnJheShvYmopP1wiYXJyYXlcIjp0eXBlb2Ygb2JqfWZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpe3JldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csXCJcXFxcJCZcIil9ZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLHByb3BOYW1lKXtyZXR1cm4gb2JqIT1udWxsJiZ0eXBlb2Ygb2JqPT09XCJvYmplY3RcIiYmcHJvcE5hbWUgaW4gb2JqfXZhciByZWdFeHBUZXN0PVJlZ0V4cC5wcm90b3R5cGUudGVzdDtmdW5jdGlvbiB0ZXN0UmVnRXhwKHJlLHN0cmluZyl7cmV0dXJuIHJlZ0V4cFRlc3QuY2FsbChyZSxzdHJpbmcpfXZhciBub25TcGFjZVJlPS9cXFMvO2Z1bmN0aW9uIGlzV2hpdGVzcGFjZShzdHJpbmcpe3JldHVybiF0ZXN0UmVnRXhwKG5vblNwYWNlUmUsc3RyaW5nKX12YXIgZW50aXR5TWFwPXtcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJiMzOTtcIixcIi9cIjpcIiYjeDJGO1wiLFwiYFwiOlwiJiN4NjA7XCIsXCI9XCI6XCImI3gzRDtcIn07ZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpe3JldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJjw+XCInYD1cXC9dL2csZnVuY3Rpb24gZnJvbUVudGl0eU1hcChzKXtyZXR1cm4gZW50aXR5TWFwW3NdfSl9dmFyIHdoaXRlUmU9L1xccyovO3ZhciBzcGFjZVJlPS9cXHMrLzt2YXIgZXF1YWxzUmU9L1xccyo9Lzt2YXIgY3VybHlSZT0vXFxzKlxcfS87dmFyIHRhZ1JlPS8jfFxcXnxcXC98PnxcXHt8Jnw9fCEvO2Z1bmN0aW9uIHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyl7aWYoIXRlbXBsYXRlKXJldHVybltdO3ZhciBzZWN0aW9ucz1bXTt2YXIgdG9rZW5zPVtdO3ZhciBzcGFjZXM9W107dmFyIGhhc1RhZz1mYWxzZTt2YXIgbm9uU3BhY2U9ZmFsc2U7ZnVuY3Rpb24gc3RyaXBTcGFjZSgpe2lmKGhhc1RhZyYmIW5vblNwYWNlKXt3aGlsZShzcGFjZXMubGVuZ3RoKWRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXX1lbHNle3NwYWNlcz1bXX1oYXNUYWc9ZmFsc2U7bm9uU3BhY2U9ZmFsc2V9dmFyIG9wZW5pbmdUYWdSZSxjbG9zaW5nVGFnUmUsY2xvc2luZ0N1cmx5UmU7ZnVuY3Rpb24gY29tcGlsZVRhZ3ModGFnc1RvQ29tcGlsZSl7aWYodHlwZW9mIHRhZ3NUb0NvbXBpbGU9PT1cInN0cmluZ1wiKXRhZ3NUb0NvbXBpbGU9dGFnc1RvQ29tcGlsZS5zcGxpdChzcGFjZVJlLDIpO2lmKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpfHx0YWdzVG9Db21waWxlLmxlbmd0aCE9PTIpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0YWdzOiBcIit0YWdzVG9Db21waWxlKTtvcGVuaW5nVGFnUmU9bmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkrXCJcXFxccypcIik7Y2xvc2luZ1RhZ1JlPW5ldyBSZWdFeHAoXCJcXFxccypcIitlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVsxXSkpO2Nsb3NpbmdDdXJseVJlPW5ldyBSZWdFeHAoXCJcXFxccypcIitlc2NhcGVSZWdFeHAoXCJ9XCIrdGFnc1RvQ29tcGlsZVsxXSkpfWNvbXBpbGVUYWdzKHRhZ3N8fG11c3RhY2hlLnRhZ3MpO3ZhciBzY2FubmVyPW5ldyBTY2FubmVyKHRlbXBsYXRlKTt2YXIgc3RhcnQsdHlwZSx2YWx1ZSxjaHIsdG9rZW4sb3BlblNlY3Rpb247d2hpbGUoIXNjYW5uZXIuZW9zKCkpe3N0YXJ0PXNjYW5uZXIucG9zO3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7aWYodmFsdWUpe2Zvcih2YXIgaT0wLHZhbHVlTGVuZ3RoPXZhbHVlLmxlbmd0aDtpPHZhbHVlTGVuZ3RoOysraSl7Y2hyPXZhbHVlLmNoYXJBdChpKTtpZihpc1doaXRlc3BhY2UoY2hyKSl7c3BhY2VzLnB1c2godG9rZW5zLmxlbmd0aCl9ZWxzZXtub25TcGFjZT10cnVlfXRva2Vucy5wdXNoKFtcInRleHRcIixjaHIsc3RhcnQsc3RhcnQrMV0pO3N0YXJ0Kz0xO2lmKGNocj09PVwiXFxuXCIpc3RyaXBTcGFjZSgpfX1pZighc2Nhbm5lci5zY2FuKG9wZW5pbmdUYWdSZSkpYnJlYWs7aGFzVGFnPXRydWU7dHlwZT1zY2FubmVyLnNjYW4odGFnUmUpfHxcIm5hbWVcIjtzY2FubmVyLnNjYW4od2hpdGVSZSk7aWYodHlwZT09PVwiPVwiKXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChlcXVhbHNSZSk7c2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpfWVsc2UgaWYodHlwZT09PVwie1wiKXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nQ3VybHlSZSk7c2Nhbm5lci5zY2FuKGN1cmx5UmUpO3NjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7dHlwZT1cIiZcIn1lbHNle3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSl9aWYoIXNjYW5uZXIuc2NhbihjbG9zaW5nVGFnUmUpKXRocm93IG5ldyBFcnJvcihcIlVuY2xvc2VkIHRhZyBhdCBcIitzY2FubmVyLnBvcyk7dG9rZW49W3R5cGUsdmFsdWUsc3RhcnQsc2Nhbm5lci5wb3NdO3Rva2Vucy5wdXNoKHRva2VuKTtpZih0eXBlPT09XCIjXCJ8fHR5cGU9PT1cIl5cIil7c2VjdGlvbnMucHVzaCh0b2tlbil9ZWxzZSBpZih0eXBlPT09XCIvXCIpe29wZW5TZWN0aW9uPXNlY3Rpb25zLnBvcCgpO2lmKCFvcGVuU2VjdGlvbil0aHJvdyBuZXcgRXJyb3IoJ1Vub3BlbmVkIHNlY3Rpb24gXCInK3ZhbHVlKydcIiBhdCAnK3N0YXJ0KTtpZihvcGVuU2VjdGlvblsxXSE9PXZhbHVlKXRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicrb3BlblNlY3Rpb25bMV0rJ1wiIGF0ICcrc3RhcnQpfWVsc2UgaWYodHlwZT09PVwibmFtZVwifHx0eXBlPT09XCJ7XCJ8fHR5cGU9PT1cIiZcIil7bm9uU3BhY2U9dHJ1ZX1lbHNlIGlmKHR5cGU9PT1cIj1cIil7Y29tcGlsZVRhZ3ModmFsdWUpfX1vcGVuU2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtpZihvcGVuU2VjdGlvbil0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInK29wZW5TZWN0aW9uWzFdKydcIiBhdCAnK3NjYW5uZXIucG9zKTtyZXR1cm4gbmVzdFRva2VucyhzcXVhc2hUb2tlbnModG9rZW5zKSl9ZnVuY3Rpb24gc3F1YXNoVG9rZW5zKHRva2Vucyl7dmFyIHNxdWFzaGVkVG9rZW5zPVtdO3ZhciB0b2tlbixsYXN0VG9rZW47Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt0b2tlbj10b2tlbnNbaV07aWYodG9rZW4pe2lmKHRva2VuWzBdPT09XCJ0ZXh0XCImJmxhc3RUb2tlbiYmbGFzdFRva2VuWzBdPT09XCJ0ZXh0XCIpe2xhc3RUb2tlblsxXSs9dG9rZW5bMV07bGFzdFRva2VuWzNdPXRva2VuWzNdfWVsc2V7c3F1YXNoZWRUb2tlbnMucHVzaCh0b2tlbik7bGFzdFRva2VuPXRva2VufX19cmV0dXJuIHNxdWFzaGVkVG9rZW5zfWZ1bmN0aW9uIG5lc3RUb2tlbnModG9rZW5zKXt2YXIgbmVzdGVkVG9rZW5zPVtdO3ZhciBjb2xsZWN0b3I9bmVzdGVkVG9rZW5zO3ZhciBzZWN0aW9ucz1bXTt2YXIgdG9rZW4sc2VjdGlvbjtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3Rva2VuPXRva2Vuc1tpXTtzd2l0Y2godG9rZW5bMF0pe2Nhc2VcIiNcIjpjYXNlXCJeXCI6Y29sbGVjdG9yLnB1c2godG9rZW4pO3NlY3Rpb25zLnB1c2godG9rZW4pO2NvbGxlY3Rvcj10b2tlbls0XT1bXTticmVhaztjYXNlXCIvXCI6c2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtzZWN0aW9uWzVdPXRva2VuWzJdO2NvbGxlY3Rvcj1zZWN0aW9ucy5sZW5ndGg+MD9zZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGgtMV1bNF06bmVzdGVkVG9rZW5zO2JyZWFrO2RlZmF1bHQ6Y29sbGVjdG9yLnB1c2godG9rZW4pfX1yZXR1cm4gbmVzdGVkVG9rZW5zfWZ1bmN0aW9uIFNjYW5uZXIoc3RyaW5nKXt0aGlzLnN0cmluZz1zdHJpbmc7dGhpcy50YWlsPXN0cmluZzt0aGlzLnBvcz0wfVNjYW5uZXIucHJvdG90eXBlLmVvcz1mdW5jdGlvbiBlb3MoKXtyZXR1cm4gdGhpcy50YWlsPT09XCJcIn07U2Nhbm5lci5wcm90b3R5cGUuc2Nhbj1mdW5jdGlvbiBzY2FuKHJlKXt2YXIgbWF0Y2g9dGhpcy50YWlsLm1hdGNoKHJlKTtpZighbWF0Y2h8fG1hdGNoLmluZGV4IT09MClyZXR1cm5cIlwiO3ZhciBzdHJpbmc9bWF0Y2hbMF07dGhpcy50YWlsPXRoaXMudGFpbC5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCk7dGhpcy5wb3MrPXN0cmluZy5sZW5ndGg7cmV0dXJuIHN0cmluZ307U2Nhbm5lci5wcm90b3R5cGUuc2NhblVudGlsPWZ1bmN0aW9uIHNjYW5VbnRpbChyZSl7dmFyIGluZGV4PXRoaXMudGFpbC5zZWFyY2gocmUpLG1hdGNoO3N3aXRjaChpbmRleCl7Y2FzZS0xOm1hdGNoPXRoaXMudGFpbDt0aGlzLnRhaWw9XCJcIjticmVhaztjYXNlIDA6bWF0Y2g9XCJcIjticmVhaztkZWZhdWx0Om1hdGNoPXRoaXMudGFpbC5zdWJzdHJpbmcoMCxpbmRleCk7dGhpcy50YWlsPXRoaXMudGFpbC5zdWJzdHJpbmcoaW5kZXgpfXRoaXMucG9zKz1tYXRjaC5sZW5ndGg7cmV0dXJuIG1hdGNofTtmdW5jdGlvbiBDb250ZXh0KHZpZXcscGFyZW50Q29udGV4dCl7dGhpcy52aWV3PXZpZXc7dGhpcy5jYWNoZT17XCIuXCI6dGhpcy52aWV3fTt0aGlzLnBhcmVudD1wYXJlbnRDb250ZXh0fUNvbnRleHQucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24gcHVzaCh2aWV3KXtyZXR1cm4gbmV3IENvbnRleHQodmlldyx0aGlzKX07Q29udGV4dC5wcm90b3R5cGUubG9va3VwPWZ1bmN0aW9uIGxvb2t1cChuYW1lKXt2YXIgY2FjaGU9dGhpcy5jYWNoZTt2YXIgdmFsdWU7aWYoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpe3ZhbHVlPWNhY2hlW25hbWVdfWVsc2V7dmFyIGNvbnRleHQ9dGhpcyxuYW1lcyxpbmRleCxsb29rdXBIaXQ9ZmFsc2U7d2hpbGUoY29udGV4dCl7aWYobmFtZS5pbmRleE9mKFwiLlwiKT4wKXt2YWx1ZT1jb250ZXh0LnZpZXc7bmFtZXM9bmFtZS5zcGxpdChcIi5cIik7aW5kZXg9MDt3aGlsZSh2YWx1ZSE9bnVsbCYmaW5kZXg8bmFtZXMubGVuZ3RoKXtpZihpbmRleD09PW5hbWVzLmxlbmd0aC0xKWxvb2t1cEhpdD1oYXNQcm9wZXJ0eSh2YWx1ZSxuYW1lc1tpbmRleF0pO3ZhbHVlPXZhbHVlW25hbWVzW2luZGV4KytdXX19ZWxzZXt2YWx1ZT1jb250ZXh0LnZpZXdbbmFtZV07bG9va3VwSGl0PWhhc1Byb3BlcnR5KGNvbnRleHQudmlldyxuYW1lKX1pZihsb29rdXBIaXQpYnJlYWs7Y29udGV4dD1jb250ZXh0LnBhcmVudH1jYWNoZVtuYW1lXT12YWx1ZX1pZihpc0Z1bmN0aW9uKHZhbHVlKSl2YWx1ZT12YWx1ZS5jYWxsKHRoaXMudmlldyk7cmV0dXJuIHZhbHVlfTtmdW5jdGlvbiBXcml0ZXIoKXt0aGlzLmNhY2hlPXt9fVdyaXRlci5wcm90b3R5cGUuY2xlYXJDYWNoZT1mdW5jdGlvbiBjbGVhckNhY2hlKCl7dGhpcy5jYWNoZT17fX07V3JpdGVyLnByb3RvdHlwZS5wYXJzZT1mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSx0YWdzKXt2YXIgY2FjaGU9dGhpcy5jYWNoZTt2YXIgdG9rZW5zPWNhY2hlW3RlbXBsYXRlXTtpZih0b2tlbnM9PW51bGwpdG9rZW5zPWNhY2hlW3RlbXBsYXRlXT1wYXJzZVRlbXBsYXRlKHRlbXBsYXRlLHRhZ3MpO3JldHVybiB0b2tlbnN9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKXt2YXIgdG9rZW5zPXRoaXMucGFyc2UodGVtcGxhdGUpO3ZhciBjb250ZXh0PXZpZXcgaW5zdGFuY2VvZiBDb250ZXh0P3ZpZXc6bmV3IENvbnRleHQodmlldyk7cmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2Vucyxjb250ZXh0LHBhcnRpYWxzLHRlbXBsYXRlKX07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJUb2tlbnM9ZnVuY3Rpb24gcmVuZGVyVG9rZW5zKHRva2Vucyxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciBidWZmZXI9XCJcIjt2YXIgdG9rZW4sc3ltYm9sLHZhbHVlO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dmFsdWU9dW5kZWZpbmVkO3Rva2VuPXRva2Vuc1tpXTtzeW1ib2w9dG9rZW5bMF07aWYoc3ltYm9sPT09XCIjXCIpdmFsdWU9dGhpcy5yZW5kZXJTZWN0aW9uKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIl5cIil2YWx1ZT10aGlzLnJlbmRlckludmVydGVkKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIj5cIil2YWx1ZT10aGlzLnJlbmRlclBhcnRpYWwodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiJlwiKXZhbHVlPXRoaXMudW5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCk7ZWxzZSBpZihzeW1ib2w9PT1cIm5hbWVcIil2YWx1ZT10aGlzLmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KTtlbHNlIGlmKHN5bWJvbD09PVwidGV4dFwiKXZhbHVlPXRoaXMucmF3VmFsdWUodG9rZW4pO2lmKHZhbHVlIT09dW5kZWZpbmVkKWJ1ZmZlcis9dmFsdWV9cmV0dXJuIGJ1ZmZlcn07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJTZWN0aW9uPWZ1bmN0aW9uIHJlbmRlclNlY3Rpb24odG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgc2VsZj10aGlzO3ZhciBidWZmZXI9XCJcIjt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2Z1bmN0aW9uIHN1YlJlbmRlcih0ZW1wbGF0ZSl7cmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLGNvbnRleHQscGFydGlhbHMpfWlmKCF2YWx1ZSlyZXR1cm47aWYoaXNBcnJheSh2YWx1ZSkpe2Zvcih2YXIgaj0wLHZhbHVlTGVuZ3RoPXZhbHVlLmxlbmd0aDtqPHZhbHVlTGVuZ3RoOysrail7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LnB1c2godmFsdWVbal0pLHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfX1lbHNlIGlmKHR5cGVvZiB2YWx1ZT09PVwib2JqZWN0XCJ8fHR5cGVvZiB2YWx1ZT09PVwic3RyaW5nXCJ8fHR5cGVvZiB2YWx1ZT09PVwibnVtYmVyXCIpe2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dC5wdXNoKHZhbHVlKSxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX1lbHNlIGlmKGlzRnVuY3Rpb24odmFsdWUpKXtpZih0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSE9PVwic3RyaW5nXCIpdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMgd2l0aG91dCB0aGUgb3JpZ2luYWwgdGVtcGxhdGVcIik7dmFsdWU9dmFsdWUuY2FsbChjb250ZXh0LnZpZXcsb3JpZ2luYWxUZW1wbGF0ZS5zbGljZSh0b2tlblszXSx0b2tlbls1XSksc3ViUmVuZGVyKTtpZih2YWx1ZSE9bnVsbClidWZmZXIrPXZhbHVlfWVsc2V7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfXJldHVybiBidWZmZXJ9O1dyaXRlci5wcm90b3R5cGUucmVuZGVySW52ZXJ0ZWQ9ZnVuY3Rpb24gcmVuZGVySW52ZXJ0ZWQodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKCF2YWx1ZXx8aXNBcnJheSh2YWx1ZSkmJnZhbHVlLmxlbmd0aD09PTApcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbD1mdW5jdGlvbiByZW5kZXJQYXJ0aWFsKHRva2VuLGNvbnRleHQscGFydGlhbHMpe2lmKCFwYXJ0aWFscylyZXR1cm47dmFyIHZhbHVlPWlzRnVuY3Rpb24ocGFydGlhbHMpP3BhcnRpYWxzKHRva2VuWzFdKTpwYXJ0aWFsc1t0b2tlblsxXV07aWYodmFsdWUhPW51bGwpcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRoaXMucGFyc2UodmFsdWUpLGNvbnRleHQscGFydGlhbHMsdmFsdWUpfTtXcml0ZXIucHJvdG90eXBlLnVuZXNjYXBlZFZhbHVlPWZ1bmN0aW9uIHVuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYodmFsdWUhPW51bGwpcmV0dXJuIHZhbHVlfTtXcml0ZXIucHJvdG90eXBlLmVzY2FwZWRWYWx1ZT1mdW5jdGlvbiBlc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gbXVzdGFjaGUuZXNjYXBlKHZhbHVlKX07V3JpdGVyLnByb3RvdHlwZS5yYXdWYWx1ZT1mdW5jdGlvbiByYXdWYWx1ZSh0b2tlbil7cmV0dXJuIHRva2VuWzFdfTttdXN0YWNoZS5uYW1lPVwibXVzdGFjaGUuanNcIjttdXN0YWNoZS52ZXJzaW9uPVwiMi4zLjBcIjttdXN0YWNoZS50YWdzPVtcIjwlXCIsXCIlPlwiXTt2YXIgZGVmYXVsdFdyaXRlcj1uZXcgV3JpdGVyO211c3RhY2hlLmNsZWFyQ2FjaGU9ZnVuY3Rpb24gY2xlYXJDYWNoZSgpe3JldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKX07bXVzdGFjaGUucGFyc2U9ZnVuY3Rpb24gcGFyc2UodGVtcGxhdGUsdGFncyl7cmV0dXJuIGRlZmF1bHRXcml0ZXIucGFyc2UodGVtcGxhdGUsdGFncyl9O211c3RhY2hlLnJlbmRlcj1mdW5jdGlvbiByZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyl7aWYodHlwZW9mIHRlbXBsYXRlIT09XCJzdHJpbmdcIil7dGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSEgVGVtcGxhdGUgc2hvdWxkIGJlIGEgXCJzdHJpbmdcIiAnKydidXQgXCInK3R5cGVTdHIodGVtcGxhdGUpKydcIiB3YXMgZ2l2ZW4gYXMgdGhlIGZpcnN0ICcrXCJhcmd1bWVudCBmb3IgbXVzdGFjaGUjcmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscylcIil9cmV0dXJuIGRlZmF1bHRXcml0ZXIucmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpfTttdXN0YWNoZS50b19odG1sPWZ1bmN0aW9uIHRvX2h0bWwodGVtcGxhdGUsdmlldyxwYXJ0aWFscyxzZW5kKXt2YXIgcmVzdWx0PW11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKTtpZihpc0Z1bmN0aW9uKHNlbmQpKXtzZW5kKHJlc3VsdCl9ZWxzZXtyZXR1cm4gcmVzdWx0fX07bXVzdGFjaGUuZXNjYXBlPWVzY2FwZUh0bWw7bXVzdGFjaGUuU2Nhbm5lcj1TY2FubmVyO211c3RhY2hlLkNvbnRleHQ9Q29udGV4dDttdXN0YWNoZS5Xcml0ZXI9V3JpdGVyO3JldHVybiBtdXN0YWNoZX0pOyIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXHJcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXHJcbiAqXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcclxuICovXHJcbiFmdW5jdGlvbihuLHQpe1widXNlIHN0cmljdFwiO3ZhciByPXt9O24uUHViU3ViPXI7dmFyIGU9bi5kZWZpbmU7IWZ1bmN0aW9uKG4pe3ZhciB0PXt9LHI9LTE7ZnVuY3Rpb24gZShuKXt2YXIgdDtmb3IodCBpbiBuKWlmKG4uaGFzT3duUHJvcGVydHkodCkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gbyhuLHQscil7dHJ5e24odCxyKX1jYXRjaChuKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3Rocm93IG59fShuKSwwKX19ZnVuY3Rpb24gaShuLHQscil7bih0LHIpfWZ1bmN0aW9uIHUobixyLGUsdSl7dmFyIGYscz10W3JdLGM9dT9pOm87aWYodC5oYXNPd25Qcm9wZXJ0eShyKSlmb3IoZiBpbiBzKXMuaGFzT3duUHJvcGVydHkoZikmJmMoc1tmXSxuLGUpfWZ1bmN0aW9uIGYobixyLG8saSl7dmFyIGY9ZnVuY3Rpb24obix0LHIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPVN0cmluZyhuKSxvPWUubGFzdEluZGV4T2YoXCIuXCIpO2Zvcih1KG4sbix0LHIpOy0xIT09bzspZT1lLnN1YnN0cigwLG8pLG89ZS5sYXN0SW5kZXhPZihcIi5cIiksdShuLGUsdCxyKX19KG49XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4scixpKSxzPWZ1bmN0aW9uKG4pe3ZhciByPVN0cmluZyhuKSxvPUJvb2xlYW4odC5oYXNPd25Qcm9wZXJ0eShyKSYmZSh0W3JdKSksaT1yLmxhc3RJbmRleE9mKFwiLlwiKTtmb3IoOyFvJiYtMSE9PWk7KXI9ci5zdWJzdHIoMCxpKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKTtyZXR1cm4gb30obik7cmV0dXJuISFzJiYoITA9PT1vP2YoKTpzZXRUaW1lb3V0KGYsMCksITApfW4ucHVibGlzaD1mdW5jdGlvbih0LHIpe3JldHVybiBmKHQsciwhMSxuLmltbWVkaWF0ZUV4Y2VwdGlvbnMpfSxuLnB1Ymxpc2hTeW5jPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCEwLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4uc3Vic2NyaWJlPWZ1bmN0aW9uKG4sZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSlyZXR1cm4hMTtuPVwic3ltYm9sXCI9PXR5cGVvZiBuP24udG9TdHJpbmcoKTpuLHQuaGFzT3duUHJvcGVydHkobil8fCh0W25dPXt9KTt2YXIgbz1cInVpZF9cIitTdHJpbmcoKytyKTtyZXR1cm4gdFtuXVtvXT1lLG99LG4uc3Vic2NyaWJlT25jZT1mdW5jdGlvbih0LHIpe3ZhciBlPW4uc3Vic2NyaWJlKHQsZnVuY3Rpb24oKXtuLnVuc3Vic2NyaWJlKGUpLHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfSk7cmV0dXJuIG59LG4uY2xlYXJBbGxTdWJzY3JpcHRpb25zPWZ1bmN0aW9uKCl7dD17fX0sbi5jbGVhclN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pJiZkZWxldGUgdFtyXX0sbi51bnN1YnNjcmliZT1mdW5jdGlvbihyKXt2YXIgZSxvLGksdT1cInN0cmluZ1wiPT10eXBlb2YgciYmKHQuaGFzT3duUHJvcGVydHkocil8fGZ1bmN0aW9uKG4pe3ZhciByO2ZvcihyIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShyKSYmMD09PXIuaW5kZXhPZihuKSlyZXR1cm4hMDtyZXR1cm4hMX0ocikpLGY9IXUmJlwic3RyaW5nXCI9PXR5cGVvZiByLHM9XCJmdW5jdGlvblwiPT10eXBlb2YgcixjPSExO2lmKCF1KXtmb3IoZSBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkoZSkpe2lmKG89dFtlXSxmJiZvW3JdKXtkZWxldGUgb1tyXSxjPXI7YnJlYWt9aWYocylmb3IoaSBpbiBvKW8uaGFzT3duUHJvcGVydHkoaSkmJm9baV09PT1yJiYoZGVsZXRlIG9baV0sYz0hMCl9cmV0dXJuIGN9bi5jbGVhclN1YnNjcmlwdGlvbnMocil9fShyKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLmFtZD9lKGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmKHZvaWQgMCE9PW1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJihleHBvcnRzPW1vZHVsZS5leHBvcnRzPXIpLGV4cG9ydHMuUHViU3ViPXIsbW9kdWxlLmV4cG9ydHM9ZXhwb3J0cz1yKX0oXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93fHx0aGlzKTsiLCIvKiEgVVRGLThcclxuXHJcbsKpIGtvdnJpZ2luXHJcbtCS0YHQtSDQv9GA0LDQstCwINGA0LDQt9GA0LXRiNC10L3Ri1xyXG7QutGA0LDRgdC40LLRi9C5INC00LjQt9Cw0LnQvSDQtNC+0LvQttC10L0g0LjQvNC10YLRjCDQutGA0LDRgdC40LLRi9C5INC60L7QtMKuXHJcblxyXG5odHRwczovL2dpdGh1Yi5jb20vaHRtbHBsdXNjc3MvXHJcblxyXG4qL1xyXG5cclxuKCAoKSA9PiB7XHJcblxyXG5cdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbCxcclxuXHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIXJlc2l6ZVRpbWVvdXQpIHtcclxuXHJcblx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZih3aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdFx0XHRcdFx0XHRQdWJTdWIucHVibGlzaCgnd2luZG93V2lkdGhSZXNpemUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdwYWdlTG9hZCcpO1xyXG5cclxuXHRcdENvb2tpZXMuc2V0KCdmYXN0TG9hZFNjcmlwdCcsIHRydWUpO1xyXG5cclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10cmFuc2l0aW9uRGVmYXVsdCcsICcuM3MnKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC+0LHRgNCw0LHQvtGC0YfQuNC6INCw0L3QuNC80LDRhtC40LlcclxuXHR3aW5kb3cuY3NzQW5pbWF0aW9uID0gYT0+e2xldCBiLGMsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY3NzYW5pbWF0aW9uXCIpO3N3aXRjaChhKXtjYXNlJ2FuaW1hdGlvbic6Yj17XCJhbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiT0FuaW1hdGlvblwiOlwib0FuaW1hdGlvbkVuZFwiLFwiTW96QW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIldlYmtpdEFuaW1hdGlvblwiOlwid2Via2l0QW5pbWF0aW9uRW5kXCJ9O2JyZWFrO2Nhc2UndHJhbnNpdGlvbic6Yj17XCJ0cmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJPVHJhbnNpdGlvblwiOlwib1RyYW5zaXRpb25FbmRcIixcIk1velRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIldlYmtpdFRyYW5zaXRpb25cIjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIn19Zm9yKGMgaW4gYilpZihkLnN0eWxlW2NdIT09dW5kZWZpbmVkKXJldHVybiBiW2NdfVxyXG5cclxuXHQvLyBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxyXG5cdHdpbmRvdy5pc0luVmlld3BvcnQgPSBlbCA9PiB7XHJcblx0XHRjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gKHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdC8vINC+0YLQtNC10LvRj9C10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0d2luZG93LnNlcE51bWJlciA9IHN0ciA9PiB7XHJcblx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcclxuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKC9cXHMrL2csJycpO1xyXG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyhbXlxcZF18JCkpL2csICckMSAnKTtcclxuXHR9XHJcblxyXG5cdC8vINGB0LrQu9C10LjQstCw0LXQvCDRgtGL0YHRj9GH0LhcclxuXHR3aW5kb3cuc3RyVG9OdW1iZXIgPSBuID0+IHBhcnNlSW50KG4ucmVwbGFjZSgvXFxzKy9nLCcnKSwgMTApO1xyXG5cclxuLy8g0YHQutC70L7QvdC10L3QuNC1XHJcblx0d2luZG93LmRlY2xlbnNpb24gPSAobnVtLCBleHByZXNzaW9ucykgPT4ge1xyXG5cclxuXHRcdGxldCByLFxyXG5cdFx0XHRjb3VudCA9IG51bSAlIDEwMDtcclxuXHJcblx0XHRpZiAoY291bnQgPiA0ICYmIGNvdW50IDwgMjEpe1xyXG5cclxuXHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRjb3VudCA9IGNvdW50ICUgMTA7XHJcblxyXG5cdFx0XHRpZiAoY291bnQgPT0gMSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycwJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY291bnQgPiAxICYmIGNvdW50IDwgNSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycxJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcjtcclxuXHJcblx0fVxyXG5cclxufSkoKTsiLCIoIHRvZ2dsZVBhc3MgPT4ge1xyXG5cclxuXHRpZighdG9nZ2xlUGFzcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0L/QvtC60LDQt9Cw0YLRjCDQv9Cw0YDQvtC70YxcclxuXHJcblx0QXJyYXkuZnJvbSh0b2dnbGVQYXNzLCBncm91cCA9PiB7XHJcblxyXG5cdFx0Z3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy52aXNpYmxlLXRvZ2dsZS1wYXNzd29yZF9fYnRuJykgKSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLnZpc2libGUtdG9nZ2xlLXBhc3N3b3JkX19pbnB1dCcpLCBpbnB1dCA9PiBpbnB1dC50eXBlID0gaW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCcpO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy52aXNpYmxlLXRvZ2dsZS1wYXNzd29yZF9fYnRuIHN2ZycpLCBzdmcgPT4gc3ZnLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpc2libGUtdG9nZ2xlLXBhc3N3b3JkJykpOyIsIlxyXG4vLyByZW1vdmVcclxuXHJcbiggYnRucyA9PiB7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbGlzdCcpO1xyXG5cclxuXHRpZiggYnRucy5sZW5ndGggKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgaXRlbSA9IGJ0bi5jbG9zZXN0KCcuY2FydF9faXRlbScpO1xyXG5cclxuXHRcdFx0YnRuLnF1ZXJ5U2VsZWN0b3IoJy5idG4nKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpdGVtLnN0eWxlLmhlaWdodCA9IGl0ZW0uY2xpZW50SGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuXHRcdFx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LmNzc0FuaW1hdGlvbigndHJhbnNpdGlvbicpLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBpdGVtLmNsaWVudEhlaWdodCA9PT0gMCkge1xyXG5cclxuXHRcdFx0XHRcdFx0aXRlbS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4gZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3VibWl0JykpKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtcmVtb3ZlJykgKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcnRfX2l0ZW0tcmVtb3ZlJykpO1xyXG5cclxuXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKCFmb3JtKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHF1YW50aXR5ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydC1xdWFudGl0eScpO1xyXG5cclxuXHRpZihxdWFudGl0eS5sZW5ndGgpIHtcclxuXHJcbi8vIHF1YW50aXR5XHJcblx0XHRBcnJheS5mcm9tKHF1YW50aXR5LCBlbCA9PiB7XHJcblxyXG5cdFx0XHRsZXQgdmFsdWUgPSBudWxsO1xyXG5cclxuXHRcdFx0Y29uc3QgdXAgPSBlbC5xdWVyeVNlbGVjdG9yKCcuY2FydC1xdWFudGl0eV9fYnRuLS11cCcpLFxyXG5cdFx0XHRcdGRvd24gPSBlbC5xdWVyeVNlbGVjdG9yKCcuY2FydC1xdWFudGl0eV9fYnRuLS1kb3duJyksXHJcblx0XHRcdFx0Y291bnQgPSBlbC5xdWVyeVNlbGVjdG9yKCcuY2FydC1xdWFudGl0eV9fY291bnQnKTtcclxuXHJcblx0XHRcdHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR2YWx1ZSA9IHBhcnNlSW50KGNvdW50LnZhbHVlKSArIDE7XHJcblxyXG5cdFx0XHRcdGNvdW50LnZhbHVlID0gdmFsdWU7XHJcblxyXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScpKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0dmFsdWUgPSBwYXJzZUludChjb3VudC52YWx1ZSkgLSAxO1xyXG5cclxuXHRcdFx0XHRpZih2YWx1ZSA8IDEpIHtcclxuXHJcblx0XHRcdFx0XHR2YWx1ZSA9IDE7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y291bnQudmFsdWUgPSB2YWx1ZTtcclxuXHJcblx0XHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJykpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb3VudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBjb3VudC5zZXRTZWxlY3Rpb25SYW5nZSgwLDkpLDEwMClcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y291bnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHZhbCA9IHRoaXMudmFsdWUucmVwbGFjZSgvW1xcRF0vZywgJycpO1xyXG5cclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsO1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQnKSk7IiwiLy8g0LXRidC1IG1lbnUgY2F0ZWdvcnlcclxuXHJcbiggYmxvY2tzID0+IHtcclxuXHJcblx0aWYoYmxvY2tzLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20oYmxvY2tzLCBibG9jayA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSBibG9jay5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRlZ29yeV9fdG9nZ2xlJyksXHJcblx0XHRcdFx0ICB3cmFwID0gYmxvY2sucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0ZWdvcnlfX3dyYXAnKSxcclxuXHRcdFx0XHQgIGxpc3QgPSBibG9jay5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRlZ29yeV9fbGV2ZWwtMicpO1xyXG5cclxuXHRcdFx0aWYgKCBidG4gKSB7XHJcblxyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHR3cmFwLnN0eWxlLmhlaWdodCA9IGxpc3QuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHRcdFx0XHRcdFx0d3JhcC5zdHlsZS5oZWlnaHQgPSBsaXN0LmNsaWVudEhlaWdodCArICdweCc7XHJcblxyXG5cdFx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGVnb3J5X19zZWN0aW9uJykpO1xyXG5cclxuLy8g0LXRidC1IGNhdGVnb3J5LWNhcmRzXHJcblxyXG4oIGJsb2NrcyA9PiB7XHJcblxyXG5cdGlmKGJsb2Nrcy5sZW5ndGgpIHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJsb2NrcywgYmxvY2sgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdG9nZ2xlID0gYmxvY2sucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWNhcmRzX190b2dnbGUnKTtcclxuXHJcblx0XHRcdGlmICggdG9nZ2xlICkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBidG4gPSB0b2dnbGUucXVlcnlTZWxlY3RvcignLmJ0bicpLFxyXG5cdFx0XHRcdFx0ICB3cmFwID0gYmxvY2sucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWNhcmRzX193cmFwJyksXHJcblx0XHRcdFx0XHQgIGxpc3QgPSBibG9jay5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktY2FyZHNfX2xpc3QnKTtcclxuXHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHdyYXAuc3R5bGUuaGVpZ2h0ID0gbGlzdC5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0YmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cdFx0XHRcdFx0XHR3cmFwLnN0eWxlLmhlaWdodCA9IGxpc3QuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWNhcmRzJykpOyIsIi8vIGNvbnRlbnQtYmxvY2tcclxuXHJcbiggYmxvY2tzID0+IHtcclxuXHJcblx0aWYoYmxvY2tzLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20oYmxvY2tzLCBibG9jayA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSBibG9jay5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ibG9ja19fdG9nZ2xlJyk7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBibG9jay5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJykpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudC1ibG9jaycpKTsiLCJcclxuKCBmb3JtID0+IHtcclxuXHJcblx0aWYoZm9ybSkge1xyXG5cclxuXHRcdGNvbnN0IHJlc3VsdEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX19yZXN1bHQnKSxcclxuXHRcdFx0ICBjb3VudCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fY291bnQnKSxcclxuXHRcdFx0ICBmaWVsZHNldHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2ZpZWxkc2V0JyksXHJcblx0XHRcdCAgbG9hZGluZ0xheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdFx0bG9hZGluZ0xheWVyLmNsYXNzTmFtZSA9ICdjYXRhbG9nX19sb2FkaW5nJztcclxuXHJcblx0XHQvLyBjaGFuZ2VcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHRcdC8vINCS0YHQtVxyXG5cclxuXHRcdFx0aWYoIHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnICkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBuYW1lID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpLFxyXG5cdFx0XHRcdFx0ICBidG5BbGwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2NoZWNrYm94LWFsbFtuYW1lPVwiJyArIG5hbWUgKyAnXCJdJyk7XHJcblxyXG5cdFx0XHRcdGlmICggYnRuQWxsICkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGxpc3QgPSBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpKS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IGJ0bkFsbCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCB0YXJnZXQgPT09IGJ0bkFsbCApIHtcclxuXHJcblx0XHRcdFx0XHRcdEFycmF5LmZyb20obGlzdCwgaW5wdXQgPT4gaW5wdXQuY2hlY2tlZCA9IGJ0bkFsbC5jaGVja2VkKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuQWxsLmNoZWNrZWQgPSBsaXN0LmV2ZXJ5KCBpbnB1dCA9PiBpbnB1dC5jaGVja2VkID09PSB0cnVlICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBzdWJtaXRcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGZvcm0sICdjaGFuZ2UnKTtcclxuXHJcblx0XHRcdHJlc3VsdEJveC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBsb2FkaW5nTGF5ZXIpO1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG5cdFx0XHRjb25zdCBxdWVyeVN0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZm9ybURhdGEpLnRvU3RyaW5nKCk7XHJcblxyXG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZSh1bmRlZmluZWQsICcnLCAnPycgKyBxdWVyeVN0cmluZyk7XHJcblxyXG5cdFx0XHQvLyDQuNGB0YLQvtGH0L3QuNC6INGE0L7RgNC80LAg0LzQvtC20LXRgiDQsdGL0YLRjCDRgtC+0LvRjNC60L4g0L/RgNC4INC60LvQuNC60LUg0L/QviDQutC90L7Qv9C60LVcclxuXHRcdFx0aWYgKCB0YXJnZXQgIT09IGZvcm0gKSB7XHJcblxyXG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnY291bnQnLCAnb24nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IGZvcm1EYXRhXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdGxvYWRpbmdMYXllci5yZW1vdmUoKTtcclxuXHRcdFx0XHRyZXN1bHRCb3guaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHN1Ym1pdFxyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXItb3BlbicpO1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGRlZmF1bHQgcmVzZXRcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2RlZmF1bHQnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94X19pbnB1dDpjaGVja2VkOm5vdCg6ZGlzYWJsZWQpJyksIGNoZWNrYm94ID0+IGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZSk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLm5vdWlzbGlkZXInKSwgbm91aXNsaWRlciA9PiBub3Vpc2xpZGVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicmVzZXRcIikpKTtcclxuXHJcblx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyJykpO1xyXG5cclxuXHJcblxyXG4vLyBmaWx0ZXItc29ydC10cmlnZ2VyIGRlc2t0b3BcclxuXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKGZvcm0ubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmb3JtLCBmb3JtID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSksXHJcblx0XHRcdFx0ICBidG5zUmFkaW8gPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zb3J0X19pdGVtJyksXHJcblx0XHRcdFx0ICBkaXJlY3Rpb24gPSBmb3JtLmVsZW1lbnRzLmRpcmVjdGlvbjtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oIGJ0bnNSYWRpbywgYnRuID0+IHtcclxuXHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLXJldmVydCcpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtcmV2ZXJ0Jyk7XHJcblx0XHRcdFx0XHRcdFx0ZmlsdGVyLmVsZW1lbnRzLmRpcmVjdGlvbi52YWx1ZSA9IGRpcmVjdGlvbi52YWx1ZTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1yZXZlcnQnKTtcclxuXHRcdFx0XHRcdFx0XHRmaWx0ZXIuZWxlbWVudHMuZGlyZWN0aW9uLnZhbHVlID0gZGlyZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1hbHQnKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0YnRuLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5zb3J0X19pdGVtIHN2ZycpKTtcclxuXHJcblx0XHRcdFx0XHRcdEFycmF5LmZyb20oIGJ0bnNSYWRpbywgX2J0biA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdF9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJywgYnRuID09PSBfYnRuKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRmaWx0ZXIuZWxlbWVudHMuc29ydC52YWx1ZSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuXHJcblx0XHRcdFx0XHRmaWx0ZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pXHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXItc29ydC10cmlnZ2VyJykpO1xyXG5cclxuXHJcbi8vIGZpbHRlci10YWdzLXRyaWdnZXJcclxuXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKGZvcm0ubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShmb3JtLCBmb3JtID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSksXHJcblx0XHRcdFx0ICBidG5zID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyLXRhZ3MtdHJpZ2dlcl9fdGFnJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKCBidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiggYnRuLmNsYXNzTGlzdC5jb250YWlucygnZmlsdGVyLXRhZ3MtdHJpZ2dlcl9fdGFnLS1yZXNldCcpICkge1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1yZW1vdmUnKTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKCBidG5zLCBfYnRuID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGJ0biAhPT0gX2J0biApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdF9idG4ucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9LCA1MDApO1xyXG5cclxuXHRcdFx0XHRcdFx0ZmlsdGVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiZGVmYXVsdFwiKSk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnN0IG5hbWUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSxcclxuXHRcdFx0XHRcdFx0XHQgIHZhbHVlID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cobmFtZSx2YWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIG5hbWUgPT09IFwibm91aXNsaWRlclwiICkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRmaWx0ZXIucXVlcnlTZWxlY3RvcignLm5vdWlzbGlkZXItLScgKyB2YWx1ZSkuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJyZXNldFwiKSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRmaWx0ZXIucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke25hbWV9XCJdW3ZhbHVlPVwiJHt2YWx1ZX1cIl1gKS5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnaXMtcmVtb3ZlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGJ0bi5yZW1vdmUoKSwgNTAwKTtcclxuXHJcblx0XHRcdFx0XHRcdGZpbHRlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pXHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXItdGFncy10cmlnZ2VyJykpO1xyXG5cclxuXHJcbi8vIGZpbHRlci1zb3J0LXRyaWdnZXIgbW9iaWxlXHJcblxyXG4oIGZvcm0gPT4ge1xyXG5cclxuXHRpZihmb3JtKSB7XHJcblxyXG5cdFx0Y29uc3QgZmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZmlsdGVyLmVsZW1lbnRzLmRpcmVjdGlvbi52YWx1ZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlyZWN0aW9uJyk7XHJcblx0XHRcdGZpbHRlci5lbGVtZW50cy5zb3J0LnZhbHVlID0gZm9ybS5lbGVtZW50cy5zb3J0LnZhbHVlO1xyXG5cclxuXHRcdFx0ZmlsdGVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGNhdGFsb2dfX3NvcnQtYnRuLW1vYmlsZVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0Ly8gc29ydFxyXG5cclxuXHRcdFx0Y29uc3QgaXNTb3J0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5jYXRhbG9nX19zb3J0LWJ0bi1tb2JpbGUtLXNvcnQnKTtcclxuXHJcblx0XHRcdGlmICggaXNTb3J0ICkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5maWx0ZXItc29ydC10cmlnZ2VyLW1vYmlsZScpID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBmaWx0ZXJcclxuXHJcblx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5jYXRhbG9nX19zb3J0LWJ0bi1tb2JpbGUtLWZpbHRlcicpICkge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1vcGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZmlsdGVyX19idG4tY2xvc2UnKSApIHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXItb3BlbicpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXNvcnQtdHJpZ2dlci1tb2JpbGUnKSk7IiwiKCBtb2RhbENhcnQgPT4ge1xyXG5cclxuXHRpZiAoICFtb2RhbENhcnQgKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IG1vZGFsQ2FydFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWNhcnQtdGVtcGxhdGUnKTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmZvcm0tYnV5Jyk7XHJcblxyXG5cdFx0aWYgKGZvcm0pIHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0blN1Ym1pdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm0tYnV5X19zdWJtaXQnKTtcclxuXHJcblx0XHRcdGJ0blN1Ym1pdC5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0YnRuU3VibWl0LmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdG1vZGFsQ2FydC5pbm5lckhUTUwgPSBNdXN0YWNoZS5yZW5kZXIobW9kYWxDYXJ0VGVtcGxhdGUuaW5uZXJIVE1MLCByZXN1bHQpO1xyXG5cclxuXHRcdFx0XHQvLyDQv9C+0LrQsNC30LDRgtGMINC80L7QtNCw0LvQutGDXHJcblxyXG5cdFx0XHRcdGNvbnN0IGV2ZW50TW9kYWxTaG93ID0gbmV3IEN1c3RvbUV2ZW50KFwibW9kYWxTaG93XCIsIHtcclxuXHRcdFx0XHRcdGRldGFpbDoge1xyXG5cdFx0XHRcdFx0XHRzZWxlY3RvcjogXCJjYXJ0XCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0d2luZG93Lm1vZGFsLmRpc3BhdGNoRXZlbnQoZXZlbnRNb2RhbFNob3cpO1xyXG5cclxuXHRcdFx0XHQvLyDQsiDRiNCw0L/QutC1XHJcblxyXG5cdFx0XHRcdFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2V0LWNhcnQtY291bnRlcicpXS5mb3JFYWNoKCBlbCA9PiBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnRlcicsIHJlc3VsdC50b3RhbENhcnQpICk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyB1cGRhdGUgY291bnRcclxuXHJcblx0bW9kYWxDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRtb2RhbENhcnQuY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdGZldGNoKG1vZGFsQ2FydC5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBuZXcgRm9ybURhdGEobW9kYWxDYXJ0KVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0bW9kYWxDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdGlmICggcmVzdWx0LmlkID09IG1vZGFsQ2FydC5lbGVtZW50cy5pZC52YWx1ZSApIHtcclxuXHJcblx0XHRcdFx0Ly8g0YfQsNGB0YLQuNGH0L3Ri9C5XHJcblxyXG5cdFx0XHRcdG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FydF9fY291bnQnKS52YWx1ZSA9IHJlc3VsdC5jb3VudDtcclxuXHRcdFx0XHRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnRfX3RvdGFsLXRleHQnKS50ZXh0Q29udGVudCA9IHJlc3VsdC50b3RhbFRleHQ7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHQvLyDQv9C+0LvQvdGL0Lkg0YDQtdC90LTQtdGAXHJcblxyXG5cdFx0XHRcdG1vZGFsQ2FydC5lbGVtZW50cy5pZC52YWx1ZSA9IHJlc3VsdC5pZDtcclxuXHJcblx0XHRcdFx0bW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJ0X19pbWcnKS5ocmVmID0gcmVzdWx0Lmxpbms7XHJcblx0XHRcdFx0bW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJ0X19pbWcgaW1nJykuc3JjID0gcmVzdWx0LmltZztcclxuXHJcblx0XHRcdFx0bW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJ0X19uYW1lJykuaHJlZiA9IHJlc3VsdC5saW5rO1xyXG5cdFx0XHRcdG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FydF9fbmFtZScpLnRleHRDb250ZW50ID0gcmVzdWx0Lm5hbWU7XHJcblxyXG5cdFx0XHRcdG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FydF9faW50cm8nKS50ZXh0Q29udGVudCA9IHJlc3VsdC5kZXNjcmlwdGlvbjtcclxuXHJcblx0XHRcdFx0aWYgKCByZXN1bHQucHJpY2VPbGQgJiYgbW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fc2FsZScpLnRleHRDb250ZW50ID0gcmVzdWx0LnByaWNlO1xyXG5cdFx0XHRcdFx0bW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZV9fb2xkJykudGV4dENvbnRlbnQgPSByZXN1bHQucHJpY2VPbGQ7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZScpLnRleHRDb250ZW50ID0gcmVzdWx0LnByaWNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FydF9fY291bnQnKS52YWx1ZSA9IHJlc3VsdC5jb3VudDtcclxuXHRcdFx0XHRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnRfX3RvdGFsLXRleHQnKS50ZXh0Q29udGVudCA9IHJlc3VsdC50b3RhbFRleHQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbENhcnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bW9kYWxDYXJ0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsQ2FydC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhldmVudC5rZXkpO1xyXG5cclxuXHRcdGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncXVhbnRpdHlfX2lucHV0JykgKSB7XHJcblxyXG5cdFx0XHRldmVudC50YXJnZXQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUucmVwbGFjZSgvW1xcRF0vZywgJycpO1xyXG5cclxuXHRcdFx0bW9kYWxDYXJ0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbENhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXQgPSBtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLnF1YW50aXR5X19pbnB1dCcpO1xyXG5cclxuXHRcdGlmICggZXZlbnQudGFyZ2V0ID09PSBpbnB1dCApIHtcclxuXHJcblx0XHRcdGlucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsOSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5xdWFudGl0eV9fYnRuLS11cCcpICkge1xyXG5cclxuXHRcdFx0aW5wdXQudmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSkgKyAxO1xyXG5cclxuXHRcdFx0bW9kYWxDYXJ0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnF1YW50aXR5X19idG4tLWRvd24nKSApIHtcclxuXHJcblx0XHRcdGlucHV0LnZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsdWUpIDw9IDEgPyAxIDogcGFyc2VJbnQoaW5wdXQudmFsdWUpIC0gMTtcclxuXHJcblx0XHRcdG1vZGFsQ2FydC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJ0JykpOyIsIiggZm9ybUNpdHkgPT4ge1xyXG5cclxuXHRpZiAoICFmb3JtQ2l0eSApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgbGlzdCA9IGZvcm1DaXR5LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNpdHlfX2xpc3QnKSxcclxuXHRcdCAgYnRuTGlzdCA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY2l0eV9fYnRuJyksXHJcblx0XHQgIGZvcm1DaXR5SW5wdXQgPSBmb3JtQ2l0eS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jaXR5X19pbnB1dC1maWx0ZXInKTtcclxuXHJcblx0bGV0IGNvdW50VmlzaWJsZSA9IGJ0bkxpc3QubGVuZ3RoO1xyXG5cclxuXHRjb25zdCBzdWJtaXQgPSAoKT0+IHtcclxuXHJcblx0XHRmZXRjaChmb3JtQ2l0eS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybUNpdHkpXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRpZiAoIHJlc3VsdC5zZXRDaXR5ICkge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1jaGFuZ2UtY2l0eScpLCBlbCA9PiBlbC50ZXh0Q29udGVudCA9IHJlc3VsdC5zZXRDaXR5KTtcclxuXHJcblx0XHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJoaWRlXCIpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRmb3JtQ2l0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IHZhbHVlID0gZm9ybUNpdHlJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdGNvdW50VmlzaWJsZSA9IDA7XHJcblxyXG5cdFx0aWYodmFsdWUubGVuZ3RoID4gMCkge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShidG5MaXN0LCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCBuYW1lID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0YnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCBuYW1lLmluZGV4T2YodmFsdWUpID09PSAtMSk7XHJcblxyXG5cdFx0XHRcdGlmICggbmFtZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEgKSB7XHJcblxyXG5cdFx0XHRcdFx0Y291bnRWaXNpYmxlKys7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGJ0bkxpc3QsIGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHRcdGNvdW50VmlzaWJsZSA9IGJ0bkxpc3QubGVuZ3RoO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRsaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWVtcHR5JywgY291bnRWaXNpYmxlID09PSAwKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdEFycmF5LmZyb20oYnRuTGlzdCwgYnRuID0+IHtcclxuXHJcblx0XHRidG4ucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eV9fcmFkaW8nKS5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgKCkgPT4gc3VibWl0KCkgKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGZvcm1DaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGlmICggY291bnRWaXNpYmxlID09PSAxICkge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbSggYnRuTGlzdCwgYnRuID0+IGJ0bi5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jaXR5X19yYWRpbycpLmNoZWNrZWQgPSBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykgPT09IGZhbHNlICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZm9ybUNpdHlJbnB1dC52YWx1ZS5sZW5ndGggPiAwICkge1xyXG5cclxuXHRcdFx0c3VibWl0KCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNpdHknKSk7IiwiKCBpdGVtcyA9PiB7XHJcblxyXG5cdGlmKCFpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShpdGVtcywgZm9ybSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fc3VibWl0JyksXHJcblx0XHRcdCAgb2tUZXh0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fb2snKSxcclxuXHRcdFx0ICBlcnJvclRleHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19lcnJvcicpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdFx0YnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbi8qXHJcblx0XHRcdFx0aWYocmVzdWx0Lm1zZykge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0ucmVzZXQoKTtcclxuXHJcblx0XHRcdFx0XHRtb2RhbC5vayhyZXN1bHQubXNnLnRpdGxlLCByZXN1bHQubXNnLnRleHQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyDRgNC10LfRg9C70YzRgtCw0YIg0YPRgdC/0LXRhdCwINC30LDRj9Cy0LrQuCBxdWFsaXR5XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5tb2RhbCA9PT0gJ3F1YWxpdHktb2snKSB7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1YWxpdHktcmVzdWx0X19udW1iZXInKS50ZXh0Q29udGVudCA9IHJlc3VsdC5udW1iZXI7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVhbGl0eS1yZXN1bHRfX3Byb2R1Y3QnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5wcm9kdWN0TmFtZTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWFsaXR5LXJlc3VsdF9fcHJvZHVjdCcpLmdldEF0dHJpYnV0ZSgnaHJlZicsIHJlc3VsdC5wcm9kdWN0TGluayk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgZXZlbnRNb2RhbFNob3cgPSBuZXcgQ3VzdG9tRXZlbnQoXCJtb2RhbFNob3dcIiwge1xyXG5cdFx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3RvcjogcmVzdWx0Lm1vZGFsXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHdpbmRvdy5tb2RhbC5kaXNwYXRjaEV2ZW50KGV2ZW50TW9kYWxTaG93KTtcclxuXHJcblx0XHRcdFx0fVxyXG4qL1xyXG5cdFx0XHQvLyBpbmZvIG1vZGFsXHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC50eXBlID09PSAnb2snKSB7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWwub2socmVzdWx0LnRpdGxlLCByZXN1bHQudGV4dCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHQvLyBvayBpbiBmb3JtXHJcblxyXG5cdFx0XHRcdGlmKG9rVGV4dCkge1xyXG5cclxuXHRcdFx0XHRcdGlmKHJlc3VsdC50eXBlID09PSAnZm9ybS1vaycpIHtcclxuXHJcblx0XHRcdFx0XHRcdG9rVGV4dC50ZXh0Q29udGVudCA9IHJlc3VsdC50ZXh0O1xyXG5cdFx0XHRcdFx0XHRva1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoIXdpbmRvdy5pc0luVmlld3BvcnQob2tUZXh0KSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdG9rVGV4dC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0b2tUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGVycm9yIGluIGZvcm1cclxuXHJcblx0XHRcdFx0aWYoZXJyb3JUZXh0KSB7XHJcblxyXG5cdFx0XHRcdFx0aWYocmVzdWx0LnR5cGUgPT09ICdmb3JtLWVycm9yJykge1xyXG5cclxuXHRcdFx0XHRcdFx0ZXJyb3JUZXh0LnRleHRDb250ZW50ID0gcmVzdWx0LnRleHQ7XHJcblx0XHRcdFx0XHRcdGVycm9yVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZighd2luZG93LmlzSW5WaWV3cG9ydChlcnJvclRleHQpKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZXJyb3JUZXh0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRlcnJvclRleHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVkaXJlY3RcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LnJlZGlyZWN0KSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgZGVsYXkgPSByZXN1bHQucmVkaXJlY3REZWxheSA/IHJlc3VsdC5yZWRpcmVjdERlbGF5ICogMTAwMCA6IDA7XHJcblxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCggKCk9PiBsb2NhdGlvbi5hc3NpZ24ocmVzdWx0LnJlZGlyZWN0KSwgZGVsYXkpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBmYWRlb3V0XHJcbi8qXHJcblx0XHRcdFx0aWYocmVzdWx0LmZhZGVvdXQpIHtcclxuXHJcblx0XHRcdFx0XHRva1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZmFkZW91dCcpO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4gb2tUZXh0LmNsYXNzTGlzdC5hZGQoJ2lzLWZhZGVvdXQnKSwgcmVzdWx0LmZhZGVvdXQgKiAxMDAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuKi9cdFx0XHQvLyByZXNldFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQucmVzZXQpIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtLnJlc2V0KCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlbG9hZFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQucmVmcmVzaCkge1xyXG5cclxuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybScpKTsiLCIoIGltZyA9PiB7XG5cblx0aWYoaW1nKSB7XG5cblx0XHRjb25zdCBiaWcgPSBpbWcucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1nYWxsZXJ5LXByZXZpZXdfX2JpZy1pdGVtJyk7XG5cblx0XHRpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG5cblx0XHRcdGlmKCBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ1ZJREVPJyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCApIHtcblxuXHRcdFx0XHRldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aWRlbycpO1xuXHRcdFx0XHRldmVudC50YXJnZXQucGF1c2VkID8gZXZlbnQudGFyZ2V0LnBsYXkoKSA6IGV2ZW50LnRhcmdldC5wYXVzZSgpO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc3dpcGVyLWdhbGxlcnktcHJldmlld19fbGluaycpKSB7XG5cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zd2lwZXItY29udGFpbmVyLXN0eWxlJykgPT09IG51bGwgKXtcblxuXHRcdFx0XHRjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19pdGVtJyk7XG5cblx0XHRcdFx0QXJyYXkuZnJvbShpbWcucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1nYWxsZXJ5LXByZXZpZXdfX2l0ZW0nKSwgKGVsLGluZGV4KSA9PiB7XG5cblx0XHRcdFx0XHRlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1jdXJyZW50JywgaXRlbSA9PT0gZWwpO1xuXHRcdFx0XHRcdGJpZ1tpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtaGlkZScsIGl0ZW0gIT09IGVsKTtcblxuXHRcdFx0XHRcdGlmKGJpZ1tpbmRleF0ucXVlcnlTZWxlY3RvcigndmlkZW8nKSl7XG5cblx0XHRcdFx0XHRcdGJpZ1tpbmRleF0ucXVlcnlTZWxlY3RvcigndmlkZW8nKS5wYXVzZSgpO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3JykpOyIsIiggaGVhZGVyID0+IHtcclxuXHJcblx0aWYoaGVhZGVyKSB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodEhlYWRlcicsIGhlYWRlci5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oZWlnaHRIZWFkZXJGaXhlZCcsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLWhlaWdodEhlYWRlcicpKTtcclxuXHJcblx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTI1MCkge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItZml4ZWQnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyQm90dG9tID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2JvdHRvbScpLFxyXG5cdFx0XHQgIGhlYWRlckJvdHRvbUlubmVyID0gaGVhZGVyQm90dG9tLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2ZsZXgnKTtcclxuXHJcblx0XHRjb25zdCBwcm9kdWN0U2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2Nyb2xsJyksXHJcblx0XHRcdCAgcHJvZHVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fZm9ybS1idXknKTtcclxuXHJcblx0XHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XHJcblxyXG5cdFx0aWYgKCBwcm9kdWN0U2Nyb2xsICkge1xyXG5cclxuXHRcdFx0aGVhZGVyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBwcm9kdWN0U2Nyb2xsKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPCAxMjUwKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItZml4ZWQnKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItZml4ZWQnKTtcclxuXHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oZWlnaHRIZWFkZXJGaXhlZCcsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLWhlaWdodEhlYWRlcicpKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodEhlYWRlcicsIGhlYWRlci5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHRcdFx0XHQvLyBwcm9kdWN0IHNjcm9sbFxyXG5cclxuXHRcdFx0XHRcdGlmICggcHJvZHVjdFNjcm9sbCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPCA3NjggKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RTY3JvbGwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvdycsIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RTY3JvbGwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvdycsIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICYmIHdpbmRvdy5wYWdlWU9mZnNldCA+IDAgKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgbWF4ID0gaGVhZGVyQm90dG9tSW5uZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRcdGxldCBoID0gbWF4IC0gd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG5cdFx0XHRcdFx0XHRvID0gKCBtYXggLyAyIC0gd2luZG93LnBhZ2VZT2Zmc2V0ICkgLyAoIG1heCAvIDIgKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGggPCAwICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aCA9IDA7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggbyA8IDAgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRvID0gMDtcclxuXHRcdFx0XHRcdFx0aGVhZGVyQm90dG9tSW5uZXIuY2xhc3NMaXN0LmFkZCgnaXMtb2ZmJyk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGhlYWRlckJvdHRvbUlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9mZicpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRoZWFkZXJCb3R0b20uc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XHJcblx0XHRcdFx0XHRoZWFkZXJCb3R0b20uc3R5bGUub3BhY2l0eSA9IG87XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodEhlYWRlcicsIGhlYWRlci5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHRcdFx0XHQvLyBwcm9kdWN0IHNjcm9sbFxyXG5cclxuXHRcdFx0XHRcdGlmICggcHJvZHVjdFNjcm9sbCApIHtcclxuXHJcblx0XHRcdFx0XHRcdHByb2R1Y3RTY3JvbGwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvdycsIHdpbmRvdy5pc0luVmlld3BvcnQocHJvZHVjdEZvcm0pID09PSBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpKTsiLCIvLyDRg9C00LDQu9C10L3QuNC1INCw0LTRgNC10YHQsFxyXG5cclxuKCBidG5zID0+IHtcclxuXHJcblx0aWYgKCBidG5zLmxlbmd0aCApIHtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0tYWRkcmVzcy1yZW1vdmUnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZWxlbWVudHMuaWQudmFsdWUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbG9naW5fX3RleHQnKS50ZXh0Q29udGVudCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dCcpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsPVwiYWNjb3VudC1hZGRyZXNzLXJlbW92ZVwiXScpKTtcclxuXHJcbi8vINGD0LTQsNC70LXQvdC40LUg0LrQsNGA0YLRi1xyXG5cclxuKCBidG5zID0+IHtcclxuXHJcblx0aWYgKCBidG5zLmxlbmd0aCApIHtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0tY2FyZC1yZW1vdmUnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZWxlbWVudHMuaWQudmFsdWUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbG9naW5fX3RleHQnKS50ZXh0Q29udGVudCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dCcpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsPVwiYWNjb3VudC1jYXJkLXJlbW92ZVwiXScpKTtcclxuXHJcbi8vIGZpbHRlclxyXG5cclxuKCBmb3JtID0+IHtcclxuXHJcblx0aWYgKCBmb3JtICkge1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Zm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInN1Ym1pdFwiKSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5say1maWx0ZXInKSk7XHJcblxyXG4vLyDRgNCw0LfQstC10YDQvdGD0YLRjCDQt9Cw0LrQsNC3XHJcblxyXG4oIGxpc3QgPT4ge1xyXG5cclxuXHRpZiAoIGxpc3QubGVuZ3RoICkge1xyXG5cclxuXHRcdEFycmF5LmZyb20obGlzdCwgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5say1vcmRlcl9fZm9vdCAuYnRuJyk7XHJcblxyXG5cdFx0XHRpZiAoIGJ0biApIHtcclxuXHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zaG9ydCcpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxrLW9yZGVyJykpOyIsIiggZWxlbXMgPT4ge1xuXG5cdGlmKCFlbGVtcy5sZW5ndGgpIHtcblxuXHRcdHJldHVybjtcblxuXHR9XG5cblx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdHNjcmlwdC5zcmMgPSAnL2pzL2lucHV0bWFzay5taW4uanMnO1xuXHRzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuXG5cdFx0QXJyYXkuZnJvbShlbGVtcywgZWwgPT4ge1xuXG5cdFx0XHRsZXQgbWFza0lucHV0O1xuXG5cdFx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0bWFzay0tcGhvbmUnKSkge1xuXG5cdFx0XHRcdG1hc2tJbnB1dCA9IG5ldyBJbnB1dG1hc2soe1xuXHRcdFx0XHRcdG1hc2s6IFwiKzcgKDk5OSkgOTk5IDk5IDk5XCIsXG5cdFx0XHRcdFx0c2hvd01hc2tPbkhvdmVyOiBmYWxzZVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXNrSW5wdXQubWFzayhlbCk7XG5cblx0XHR9KTtcblxuXHR9O1xuXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xuXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXRtYXNrJykpOyIsIiggd2luZG93U2Nyb2xsID0+IHtcclxuXHJcbi8vIGJ0biB0b2dnbGVcclxuXHJcblx0KCBidG4gPT4ge1xyXG5cclxuXHRcdGlmKGJ0bikge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtc2hvdycpICkge1xyXG5cclxuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1zaG93Jyk7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJykpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtc2hvdycpO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItZml4ZWQnKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJyk7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW1lbnUtdG9nZ2xlJykpO1xyXG5cclxuXHJcblx0Ly8gbWVudSBjYXRhbG9nXHJcblxyXG5cdCggYnRucyA9PiB7XHJcblxyXG5cdFx0aWYoYnRucy5sZW5ndGgpIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oYnRucywgYnRuID0+IHtcclxuXHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGlmKCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1jYXRhbG9nLXNob3cnKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1jYXRhbG9nLXNob3cnLCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJykpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtc2hvdycpID09PSBmYWxzZSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKTtcclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LWNhdGFsb2ctc2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsMCkpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tdG9nZ2xlLW1lbnUtY2F0YWxvZycpKTtcclxuXHJcbn0pKHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcblxyXG5cclxuLy8gbWVudSBzZXJ2aWNlXHJcblxyXG4oIGJ0bnMgPT4ge1xyXG5cclxuXHRpZihidG5zLmxlbmd0aCkge1xyXG5cclxuXHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19ib2R5Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShidG5zLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGJ0bnMsIChfYnRuLCBpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdF9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtY3VycmVudCcsIF9idG4gPT09IGJ0bik7XHJcblx0XHRcdFx0XHRib2R5W2luZGV4XS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJywgX2J0biAhPT0gYnRuKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBtb2JpbGVcclxuXHJcblx0XHRjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fbW9iaWxlJyksXHJcblx0XHRcdCAgbW9iaWxlQm9keSA9IG1vYmlsZU1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fbW9iaWxlLWJvZHknKSxcclxuXHRcdFx0ICBtb2JpbGVIZWFkID0gbW9iaWxlTWVudS5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19tb2JpbGUtaGVhZC1uYW1lJyksXHJcblx0XHRcdCAgbW9iaWxlQmFjayA9IG1vYmlsZU1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fbW9iaWxlLWJ0bi1iYWNrJyksXHJcblx0XHRcdCAgbW9iaWxlSGVhZERlZmF1bHQgPSBtb2JpbGVIZWFkLnRleHRDb250ZW50O1xyXG5cclxuXHRcdGxldCBtb2JpbGVMZXZlbCA9IG51bGwsXHJcblx0XHRcdGluZGV4Qm9keSA9IG51bGwsXHJcblx0XHRcdGluZGV4TGV2ZWwxID0gbnVsbCxcclxuXHRcdFx0cHJldkxldmVsMSA9IG51bGwsXHJcblx0XHRcdHByZXZMZXZlbDIgPSBudWxsO1xyXG5cclxuXHRcdGNvbnN0IGxldmVsMCA9ICgpID0+IHtcclxuXHJcblx0XHRcdG1vYmlsZUxldmVsID0gMDtcclxuXHRcdFx0bW9iaWxlQmFjay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdG1vYmlsZUhlYWQudGV4dENvbnRlbnQgPSBtb2JpbGVIZWFkRGVmYXVsdDtcclxuXHRcdFx0bW9iaWxlQm9keS5pbm5lckhUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRhbG9nX19uYXYnKS5pbm5lckhUTUw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGxldmVsMSA9ICgpID0+IHtcclxuXHJcblx0XHRcdG1vYmlsZUxldmVsID0gMTtcclxuXHRcdFx0bW9iaWxlQmFjay5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdG1vYmlsZUhlYWQudGV4dENvbnRlbnQgPSBwcmV2TGV2ZWwxLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0Y29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG5cdFx0XHRodG1sLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxsaSBjbGFzcz1cIm1lbnUtY2F0YWxvZ19fbW9iaWxlLWl0ZW1cIj48YSBocmVmPVwiJHtwcmV2TGV2ZWwxLmhyZWZ9XCI+JHttb2JpbGVCb2R5LmdldEF0dHJpYnV0ZSgnZGF0YS1hbGwtaXRlbScpfTwvYT48L2xpPmApO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShib2R5W2luZGV4Qm9keV0ucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fbGlzdCcpLCAobGlzdCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCBpdGVtID0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19pdGVtJyksXHJcblx0XHRcdFx0XHQgIGl0ZW1DbG9uZSA9IGl0ZW1bMF0uY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuXHRcdFx0XHRpdGVtQ2xvbmUuY2xhc3NOYW1lID0gJ21lbnUtY2F0YWxvZ19fbW9iaWxlLWl0ZW0nO1xyXG5cdFx0XHRcdGl0ZW1DbG9uZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcblx0XHRcdFx0aHRtbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGl0ZW1DbG9uZSk7XHJcblxyXG5cdFx0XHRcdGlmICggaXRlbS5sZW5ndGggPiAxICkge1xyXG5cclxuXHRcdFx0XHRcdGl0ZW1DbG9uZS5jbGFzc0xpc3QuYWRkKCdpcy1wYXJlbnQnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtb2JpbGVCb2R5LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdG1vYmlsZUJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBodG1sKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBsZXZlbDIgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRtb2JpbGVMZXZlbCA9IDI7XHJcblx0XHRcdG1vYmlsZUhlYWQudGV4dENvbnRlbnQgPSBwcmV2TGV2ZWwyLnRleHRDb250ZW50O1xyXG5cclxuXHRcdFx0Y29uc3QgaHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGJvZHlbaW5kZXhCb2R5XS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19saXN0JylbaW5kZXhMZXZlbDFdLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX2l0ZW0nKSwgaXRlbSA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGl0ZW1DbG9uZSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0XHRcdGl0ZW1DbG9uZS5jbGFzc05hbWUgPSAnbWVudS1jYXRhbG9nX19tb2JpbGUtaXRlbSc7XHJcblx0XHRcdFx0aHRtbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGl0ZW1DbG9uZSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGh0bWwucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fbW9iaWxlLWl0ZW0gYScpWzBdLnRleHRDb250ZW50ID0gbW9iaWxlQm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWxsLWl0ZW0nKTtcclxuXHJcblx0XHRcdG1vYmlsZUJvZHkuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdG1vYmlsZUJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBodG1sKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV2ZWwwKCk7XHJcblxyXG5cdFx0bW9iaWxlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IGJ0bkxldmVsMSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubWVudS1jYXRhbG9nX19uYXYtYnRuJyksXHJcblx0XHRcdFx0ICBidG5MZXZlbDIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1lbnUtY2F0YWxvZ19fbW9iaWxlLWl0ZW0uaXMtcGFyZW50Jyk7XHJcblxyXG5cdFx0XHRpZiAoIGJ0bkxldmVsMSApIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0cHJldkxldmVsMSA9IGJ0bkxldmVsMTtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShtb2JpbGVCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX25hdi1idG4nKSwgKGl0ZW0saW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGJ0bkxldmVsMSA9PT0gaXRlbSApIHtcclxuXHJcblx0XHRcdFx0XHRcdGluZGV4Qm9keSA9IGluZGV4O1xyXG5cdFx0XHRcdFx0XHRsZXZlbDEoKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBidG5MZXZlbDIgKSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdHByZXZMZXZlbDIgPSBidG5MZXZlbDI7XHJcblxyXG5cdFx0XHRcdGluZGV4TGV2ZWwxID0gcGFyc2VJbnQoIGJ0bkxldmVsMi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSApO1xyXG5cclxuXHRcdFx0XHRsZXZlbDIoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRtb2JpbGVCYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9iaWxlTGV2ZWwgPT09IDIgPyBsZXZlbDEoKSA6IGxldmVsMCgpKTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fbmF2LWJ0bicpKTsiLCIoIG1vZGFsID0+IHtcclxuXHJcblx0aWYoIW1vZGFsKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pdGVtJyksXHJcblx0XHQgIGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbF0nKSxcclxuXHRcdCAgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcblxyXG5cdGxldCBhY3RpdmVNb2RhbCA9IG51bGwsXHJcblx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cdFx0YWN0aXZlTW9kYWwgPSBmYWxzZTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGlmKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG5cclxuXHRcdFx0bW9kYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJoaWRlXCIpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBtb2RhbFNob3cgPSBzZWxlY3RvciA9PiB7XHJcblxyXG5cdFx0aWYoIWFjdGl2ZU1vZGFsKXtcclxuXHJcblx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0YWN0aXZlTW9kYWwgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLScgKyBzZWxlY3Rvcik7XHJcblxyXG5cdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBlbCAhPT0gYWN0aXZlTW9kYWwpKTtcclxuXHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdHdyYXBwZXIuc3R5bGUudG9wID0gLXdpbmRvd1Njcm9sbCArICdweCc7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtc2hvdycpO1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRcdGFjdGl2ZU1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdFx0XHRQdWJTdWIucHVibGlzaCgnb3Blbi0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZiggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsX19jbG9zZScpKXtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcblx0XHR3aGlsZSAodGFyZ2V0ICE9PSBkb2N1bWVudCAmJiB0YXJnZXQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLW1vZGFsJykpIHtcclxuXHJcblx0XHRcdFx0bW9kYWxTaG93KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdtb2RhbFNob3cnLCBldmVudCA9PiBtb2RhbFNob3coZXZlbnQuZGV0YWlsLnNlbGVjdG9yKSk7XHJcblxyXG5cdG1vZGFsLm9rID0gKHRpdGxlLCB0ZXh0KSA9PiB7XHJcblxyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1vayAubW9kYWwtbG9naW5fX2hlYWQnKS5pbm5lckhUTUwgPSB0aXRsZSA/IHRpdGxlIDogJyc7XHJcblx0XHRtb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2l0ZW0tLW9rIC5tb2RhbC1sb2dpbl9fdGV4dCcpLmlubmVySFRNTCA9IHRleHQgPyB0ZXh0IDogJyc7XHJcblx0XHRtb2RhbFNob3coJ29rJyk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpKTsiLCIoIG5vdWlzbGlkZXIgPT4ge1xuXG5cdGlmKCFub3Vpc2xpZGVyLmxlbmd0aCkge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRjb25zdCBub1VpU2xpZGVySW5pdCA9ICgpID0+IHtcblxuXHRcdEFycmF5LmZyb20obm91aXNsaWRlciwgc2xpZGVyID0+IHtcblxuXHRcdFx0Y29uc3QgdHJhY2sgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLm5vdWlzbGlkZXJfX3RyYWNrJyksXG5cdFx0XHRcdCAgZm9ybSA9IHNsaWRlci5jbG9zZXN0KCdmb3JtJyksXG5cdFx0XHRcdCAgbWluSW5wdXQgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLm5vdWlzbGlkZXJfX21pbicpLFxuXHRcdFx0XHQgIG1heElucHV0ID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5ub3Vpc2xpZGVyX19tYXgnKSxcblx0XHRcdFx0ICBtaW4gICA9IHBhcnNlSW50KHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluJykpLFxuXHRcdFx0XHQgIG1heCAgID0gcGFyc2VJbnQoc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXgnKSksXG5cdFx0XHRcdCAgc3RlcCAgPSBwYXJzZUludChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAnKSksXG5cdFx0XHRcdCAgc3VmICA9IHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3VmJyk7XG5cblx0XHRcdG5vVWlTbGlkZXIuY3JlYXRlKHRyYWNrLCB7XG5cdFx0XHRcdHN0YXJ0OiBbbWluLG1heF0sXG5cdFx0XHRcdHN0ZXA6IHN0ZXAsXG5cdFx0XHRcdGNvbm5lY3Q6IHRydWUsXG5cdFx0XHRcdHJhbmdlOiB7XG5cdFx0XHRcdFx0J21pbic6IG1pbixcblx0XHRcdFx0XHQnbWF4JzogbWF4XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZvcm1hdDoge1xuXHRcdFx0XHRcdHRvOiB2YWx1ZSA9PiBwYXJzZUludCh2YWx1ZSksXG5cdFx0XHRcdFx0ZnJvbTogdmFsdWUgPT4gcGFyc2VJbnQodmFsdWUpXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHR0cmFjay5ub1VpU2xpZGVyLm9uKCdzbGlkZScsIHZhbHVlcyA9PiB7XG5cblx0XHRcdFx0aWYoIHN1ZiApIHtcblxuXHRcdFx0XHRcdG1pbklucHV0LnZhbHVlID0gd2luZG93LnNlcE51bWJlcih2YWx1ZXNbMF0pICsgJyAnICsgc3VmO1xuXHRcdFx0XHRcdG1heElucHV0LnZhbHVlID0gd2luZG93LnNlcE51bWJlcih2YWx1ZXNbMV0pICsgJyAnICsgc3VmO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRtaW5JbnB1dC52YWx1ZSA9IHBhcnNlSW50KHZhbHVlc1swXSk7XG5cdFx0XHRcdFx0bWF4SW5wdXQudmFsdWUgPSBwYXJzZUludCh2YWx1ZXNbMV0pO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHRcdHRyYWNrLm5vVWlTbGlkZXIub24oJ2VuZCcsIHZhbHVlcyA9PiB7XG5cblx0XHRcdFx0bWluSW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2lkZScsIG1pbiA9PT0gdmFsdWVzWzBdKTtcblx0XHRcdFx0bWF4SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2lkZScsIG1heCA9PT0gdmFsdWVzWzFdKTtcblxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcblxuXHRcdFx0fSk7XG5cblx0XHRcdHRyYWNrLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIHZhbHVlcyA9PiB7XG5cblx0XHRcdFx0bWluSW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2lkZScsIG1pbiA9PT0gdmFsdWVzWzBdKTtcblx0XHRcdFx0bWF4SW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2lkZScsIG1heCA9PT0gdmFsdWVzWzFdKTtcblxuXHRcdFx0fSk7XG5cblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsICgpID0+IHtcblxuXHRcdFx0XHR0cmFjay5ub1VpU2xpZGVyLnNldChbbWluLG1heF0pO1xuXG5cdFx0XHR9KTtcblxuXHRcdFx0c2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCAoKSA9PiB7XG5cblx0XHRcdFx0dHJhY2subm9VaVNsaWRlci5zZXQoW21pbixtYXhdKTtcblxuXHRcdFx0fSk7XG5cblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGV2ZW50ID0+IHtcblxuXHRcdFx0XHRpZihldmVudC50YXJnZXQgPT09IG1heElucHV0IHx8IGV2ZW50LnRhcmdldCA9PT0gbWluSW5wdXQpIHtcblxuXHRcdFx0XHRcdHRyYWNrLm5vVWlTbGlkZXIuc2V0KFtcblx0XHRcdFx0XHRcdHBhcnNlSW50KHdpbmRvdy5zdHJUb051bWJlcihtaW5JbnB1dC52YWx1ZSkpLFxuXHRcdFx0XHRcdFx0cGFyc2VJbnQod2luZG93LnN0clRvTnVtYmVyKG1heElucHV0LnZhbHVlKSlcblx0XHRcdFx0XHRdKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0XHRtaW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcblxuXHRcdFx0XHRtaW5JbnB1dC52YWx1ZSA9IHRyYWNrLm5vVWlTbGlkZXIuZ2V0KClbMF07XG5cdFx0XHRcdG1pbklucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsOTkpO1xuXG5cdFx0XHR9KTtcblxuXHRcdFx0bWF4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG5cblx0XHRcdFx0bWF4SW5wdXQudmFsdWUgPSB0cmFjay5ub1VpU2xpZGVyLmdldCgpWzFdO1xuXHRcdFx0XHRtYXhJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgwLDk5KTtcblxuXHRcdFx0fSk7XG5cblx0XHRcdG1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG5cblx0XHRcdFx0aWYoIHN1ZiApIHtcblxuXHRcdFx0XHRcdG1pbklucHV0LnZhbHVlID0gd2luZG93LnNlcE51bWJlcih0cmFjay5ub1VpU2xpZGVyLmdldCgpWzBdKSArICcgJyArIHN1ZjtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0XHRtYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuXG5cdFx0XHRcdGlmKCBzdWYgKSB7XG5cblx0XHRcdFx0XHRtYXhJbnB1dC52YWx1ZSA9IHdpbmRvdy5zZXBOdW1iZXIodHJhY2subm9VaVNsaWRlci5nZXQoKVsxXSkgKyAnICcgKyBzdWY7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdFx0bWluSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG5cblx0XHRcdFx0aWYoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcblxuXHRcdFx0XHRcdG1pbklucHV0LmJsdXIoKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0XHRtYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcblxuXHRcdFx0XHRpZihldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuXG5cdFx0XHRcdFx0bWF4SW5wdXQuYmx1cigpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChcblx0XHRcdFx0bWluICE9PSBwYXJzZUludCh3aW5kb3cuc3RyVG9OdW1iZXIobWluSW5wdXQudmFsdWUpKSB8fFxuXHRcdFx0XHRtYXggIT09IHBhcnNlSW50KHdpbmRvdy5zdHJUb051bWJlcihtYXhJbnB1dC52YWx1ZSkpXG5cdFx0XHQpIHtcblxuXHRcdFx0XHR0cmFjay5ub1VpU2xpZGVyLnNldChbXG5cdFx0XHRcdFx0cGFyc2VJbnQod2luZG93LnN0clRvTnVtYmVyKG1pbklucHV0LnZhbHVlKSksXG5cdFx0XHRcdFx0cGFyc2VJbnQod2luZG93LnN0clRvTnVtYmVyKG1heElucHV0LnZhbHVlKSlcblx0XHRcdFx0XSk7XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdH07XG5cblx0Ly8gbG9hZFxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0c2NyaXB0LnNyYyA9ICcvanMvbm91aXNsaWRlci5taW4uanMnO1xuXHRzY3JpcHQub25sb2FkID0gKCkgPT4gbm9VaVNsaWRlckluaXQoKTtcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBDb29raWVzLmdldCgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XG5cbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3Vpc2xpZGVyJykpOyIsIlxyXG4oIGJ0blBhZ2VVcCA9PiB7XHJcblxyXG5cdGlmIChidG5QYWdlVXApIHtcclxuXHJcblx0XHQvLyBjbGlja1xyXG5cclxuXHRcdGJ0blBhZ2VVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvY3VtZW50LmJvZHkuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSkpO1xyXG5cclxuXHRcdC8vIHNjcm9sbFxyXG5cclxuXHRcdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGlmICggcmVzaXplVGltZW91dCA9PT0gbnVsbCApIHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0cmVzaXplVGltZW91dCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0XHRidG5QYWdlVXAuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtaGlkZGVuJywgd2luZG93LnBhZ2VZT2Zmc2V0IDwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XHJcblxyXG5cdFx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXVwJykpOyIsIndpbmRvdy5zZWxlY3RzID0gc2VsZWN0ID0+IHtcclxuXHJcblx0aWYoc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2xpc3QnKSkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHR2YWx1ZS5jbGFzc05hbWUgPSAnc2VsZWN0X192YWx1ZSc7XHJcblx0dmFsdWUuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwic2VsZWN0X192YWx1ZS1pbm5lclwiPjwvc3Bhbj4nO1xyXG5cclxuXHR2YWx1ZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTcuMiA5LjJhLjY1LjY1IDAgMCAxIC45MSAwTDEyIDEzLjEybDMuODktMy45NGEuNjUuNjUgMCAwIDEgLjkyIDBjLjI1LjI2LjI1LjY4IDAgLjk0TDEyIDE1bC00LjgtNC44N2EuNjcuNjcgMCAwIDEgMC0uOTRaXCIvPjwvc3ZnPicpO1xyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZCh2YWx1ZSk7XHJcblxyXG5cdGNvbnN0IGZvcm0gPSBzZWxlY3QuY2xvc2VzdCgnZm9ybScpLFxyXG5cdFx0Y29udHJvbCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcclxuXHRcdG9wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSxcclxuXHRcdHZhbHVlVGV4dCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X192YWx1ZS1pbm5lcicpLFxyXG5cdFx0ZmlsdGVyID0gc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LS1maWx0ZXInKSxcclxuXHRcdGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0bGlzdC5jbGFzc05hbWUgPSAnc2VsZWN0X19saXN0JztcclxuXHJcblx0bGV0IHNlbGVjdGVkID0gY29udHJvbC5xdWVyeVNlbGVjdG9yKCdbdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKTtcclxuXHJcblx0Ly8g0L3QtSDQv9GA0LXQtNGD0YHQvNCw0YLRgNC40LLQsNC10Lwg0LIg0LzQvtCx0LjQu9C1INGB0LjRgdGC0LXQvNC90YvQuSDQutC+0L3RgtGA0L7Qu1xyXG4vKlxyXG5cdGNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblxyXG5cdFx0c2VsZWN0ZWQgPSBjb250cm9sLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpO1xyXG5cclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHNlbGVjdGVkLnRleHRDb250ZW50O1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHJcblx0fSk7XHJcbiovXHJcblx0Y29uc3QgdmFsdWVEZWZhdWx0ID0gc2VsZWN0ZWQudGV4dENvbnRlbnQ7XHJcblxyXG5cdGlmKCBjb250cm9sLmRpc2FibGVkIHx8IGNvbnRyb2wudmFsdWUgPT09ICdub25lJyB8fCBjb250cm9sLnZhbHVlID09PSAnJyApe1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHJcblx0fVxyXG5cclxuXHRpZiAoIGNvbnRyb2wudmFsdWUgIT09ICcnICkge1xyXG5cclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCInICsgY29udHJvbC52YWx1ZSArICdcIl0nKS50ZXh0Q29udGVudDtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKG9wdGlvbiwgZWwgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyksXHJcblx0XHRcdCAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcblx0XHRcdCAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuXHRcdGJ0bi5jbGFzc05hbWUgPSAnc2VsZWN0X19saXN0LWl0ZW0nO1xyXG5cclxuXHRcdGlucHV0LnR5cGUgPSAncmFkaW8nO1xyXG5cdFx0aW5wdXQubmFtZSA9IGNvbnRyb2wubmFtZTtcclxuXHRcdGlucHV0LnZhbHVlID0gZWwudmFsdWU7XHJcblxyXG5cdFx0bGFiZWwudGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRpZiAoIGNvbnRyb2wudmFsdWUgPT09IGVsLnZhbHVlICkge1xyXG5cclxuXHRcdFx0aW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuXHJcblx0XHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50O1xyXG5cdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LS1vcGVuJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0YnRuLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHRcdGJ0bi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblx0XHRsaXN0LmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQsdC10Lcg0LHRi9GB0YLRgNC+0LPQviDQv9C+0LjRgdC60LBcclxuLypcclxuXHRpZihmaWx0ZXIpe1xyXG5cclxuXHRcdGNvbnN0IGlucHV0RmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcblx0XHRpbnB1dEZpbHRlci5jbGFzc05hbWUgPSAnc2VsZWN0X19maWx0ZXIgaW5wdXQnO1xyXG5cclxuXHRcdHZhbHVlLmFwcGVuZENoaWxkKGlucHV0RmlsdGVyKTtcclxuXHJcblx0XHRpbnB1dEZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHZhbHVlID0gaW5wdXRGaWx0ZXIudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdGlmKHZhbHVlLmxlbmd0aCA+IDEpIHtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShsaXN0LmNoaWxkcmVuLCBvID0+IHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gby50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0XHRvLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnLCB0ZXh0LmluZGV4T2YodmFsdWUpID09PSAtMSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZihsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX2xpc3QtaXRlbScpLmxlbmd0aCA9PT0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19saXN0LWl0ZW0uaGlkZScpLmxlbmd0aCkge1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWZpbHRlci1lbXB0eScpO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtLWZpbHRlci1lbXB0eScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGxpc3QuY2hpbGRyZW4sIG8gPT4gby5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0X19saXN0LWl0ZW0nKSl7XHJcblxyXG5cdFx0XHRjb250cm9sLnZhbHVlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuXHJcblx0XHRcdGNvbnRyb2wuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0aWYoZm9ybSkge1xyXG5cclxuXHRcdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuKi9cclxuXHJcblx0c2VsZWN0LmFwcGVuZENoaWxkKGxpc3QpO1xyXG5cclxuXHQvLyDQstC+0LfQstGA0LDRgiDQsiDQtNC10YTQvtC70YLQvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1LCDQv9GA0Lgg0YDQtdC30LXRgiDRhNC+0YDQvNGLXHJcblxyXG5cdGZvcm0gJiYgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwicmVzZXRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtLWRlZmF1bHQnKTtcclxuXHRcdHZhbHVlVGV4dC50ZXh0Q29udGVudCA9IHZhbHVlRGVmYXVsdDtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC90LUg0L/RgNC10LTRg9GB0LzQsNGC0YDQuNCy0LDQtdC8INCyINC80L7QsdC40LvQtSDRgdC40YHRgtC10LzQvdGL0Lkg0LrQvtC90YLRgNC+0LtcclxuXHRjb250cm9sLnJlbW92ZSgpO1xyXG5cclxufTtcclxuXHJcbiggKCkgPT4ge1xyXG5cclxuXHR3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0Jyk7XHJcblxyXG5cdGlmKHdpbmRvdy5zZWxlY3RzQ29sbGVjdGlvbi5sZW5ndGgpIHtcclxuXHJcblx0XHRBcnJheS5mcm9tKHdpbmRvdy5zZWxlY3RzQ29sbGVjdGlvbiwgc2VsZWN0ID0+IHdpbmRvdy5zZWxlY3RzKHNlbGVjdCkpO1xyXG5cclxuXHR9XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnN0IGlzU2VsZWN0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHdpbmRvdy5zZWxlY3RzQ29sbGVjdGlvbiwgc2VsZWN0ID0+IHtcclxuXHJcblx0XHRcdHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3QtLW9wZW4nLCBzZWxlY3QgPT09IGlzU2VsZWN0ICYmIGlzU2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LS1vcGVuJykgPT09IGZhbHNlKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KSgpOyIsIiggc3dpcGVyQ29udGFpbmVyID0+IHtcclxuXHJcblx0aWYoIXN3aXBlckNvbnRhaW5lci5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0QXJyYXkuZnJvbShzd2lwZXJDb250YWluZXIsIHN3aXBlID0+IHtcclxuXHJcblx0XHRsZXQgbXlTd2lwZSA9IG51bGwsXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gbnVsbCxcclxuXHRcdFx0cmVzZXRTd2lwZSA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3Qgc3dpcGVDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcblx0XHRcdCAgc3dpcGVOZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgc3dpcGVQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdCAgc2Nyb2xsYmFyID0gc3dpcGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNjcm9sbGJhcicpLFxyXG5cdFx0XHQgIGl0ZW1zID0gc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZScpLFxyXG5cdFx0XHQgIGNvdW50ID0gaXRlbXMubGVuZ3RoLFxyXG5cdFx0XHQgIGNhcmRBdXRvID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1jYXJkLWF1dG8nKSxcclxuXHRcdFx0ICBiaWxsYm9hcmQgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWJpbGxib2FyZCcpLFxyXG5cdFx0XHQgIHByb2R1Y3RHYWxsZXJ5UHJldmlldyA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tZ2FsbGVyeS1wcmV2aWV3Jyk7XHJcblxyXG5cdFx0c3dpcGVOYXYuY2xhc3NOYW1lID0gJ3N3aXBlci1wYWdpbmF0aW9uJztcclxuXHRcdHN3aXBlQ29udHJvbHMuY2xhc3NOYW1lID0gJ3N3aXBlci1jb250cm9scyc7XHJcblxyXG5cdFx0c3dpcGVCdG5zLmNsYXNzTmFtZSA9ICdzd2lwZXItbmF2aWdhdGlvbic7XHJcblx0XHRzd2lwZVByZXYuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tcHJldiBidXR0b24nO1xyXG5cdFx0c3dpcGVOZXh0LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLW5leHQgYnV0dG9uJztcclxuXHJcblx0XHRzd2lwZVByZXYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywnUHJldmlvdXMgc2xpZGUnKTtcclxuXHRcdHN3aXBlTmV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCdOZXh0IHNsaWRlJyk7XHJcblxyXG5cdFx0aWYgKCBwcm9kdWN0R2FsbGVyeVByZXZpZXcgKSB7XHJcblxyXG5cdFx0XHRzd2lwZVByZXYuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJtMTMgOSA0LjYgNC42YTEgMSAwIDEgMS0xLjQgMS40bC0zLjktMy45TDguNCAxNUEuOTkuOTkgMCAwIDEgNyAxMy42TDExLjU5IDlBMSAxIDAgMCAxIDEzIDlaXCIvPjwvc3ZnPic7XHJcblx0XHRcdHN3aXBlTmV4dC5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMyAxNWExIDEgMCAwIDEtMS40IDBMNyAxMC40QS45OS45OSAwIDAgMSA4LjQgOWwzLjkgMy45TDE2LjIgOWEuOTkuOTkgMCAwIDEgMS40IDEuNEwxMyAxNVpcIi8+PC9zdmc+JztcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0c3dpcGVQcmV2LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTguNDEgMTEuNUgxOGExIDEgMCAwIDEgMCAySDguNDFsMy44IDMuOGExIDEgMCAwIDEtMS40MiAxLjRsLTUuNS01LjVhMSAxIDAgMCAxIDAtMS40bDUuNS01LjVhMSAxIDAgMCAxIDEuNDIgMS40bC0zLjggMy44WlwiLz48L3N2Zz4nO1xyXG5cdFx0XHRzd2lwZU5leHQuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTEuOCA1LjhhMSAxIDAgMCAwIDAgMS40bDMuNzkgMy44SDZhMSAxIDAgMCAwIDAgMmg5LjU5bC0zLjggMy44YTEgMSAwIDEgMCAxLjQyIDEuNGw1LjUtNS41YTEgMSAwIDAgMCAuMjktLjY3di0uMDZhMSAxIDAgMCAwLS4zLS42OGwtNS41LTUuNWExIDEgMCAwIDAtMS40IDBaXCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXBlQnRucy5hcHBlbmRDaGlsZChzd2lwZVByZXYpO1xyXG5cdFx0c3dpcGVCdG5zLmFwcGVuZENoaWxkKHN3aXBlTmV4dCk7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlQnRucyk7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmFwcGVuZENoaWxkKHN3aXBlTmF2KTtcclxuXHJcblx0XHRyZXNldFN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0aWYobXlTd2lwZSkge1xyXG5cclxuXHRcdFx0XHRteVN3aXBlLmRlc3Ryb3koZmFsc2UsdHJ1ZSk7XHJcblx0XHRcdFx0bXlTd2lwZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRpZiAoIHN3aXBlLmNsb3Nlc3QoJy5zd2lwZXItY29udGFpbmVyLXN0eWxlJykgKSB7XHJcblxyXG5cdFx0XHRcdHN3aXBlLmNsb3Nlc3QoJy5zd2lwZXItY29udGFpbmVyLXN0eWxlJykuY2xhc3NMaXN0LnJlbW92ZSgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYmlsbGJvYXJkKSB7XHJcblxyXG5cdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xyXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlID0gZmFsc2U7XHJcblx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdFx0XHRkZWxheTogNTAwMFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdFx0ZWw6IHN3aXBlTmF2LFxyXG5cdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0YnVsbGV0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjYXJkQXV0bykge1xyXG5cclxuXHRcdFx0cmVzZXRTd2lwZSgpO1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEyNTApIHtcclxuXHJcblx0XHRcdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN3aXBlQ29udHJvbHMpO1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlUHJldi5jbGFzc0xpc3QuYWRkKCdzd2lwZXItYnV0dG9uLWRpc2FibGVkJyk7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cclxuXHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcblx0XHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHByb2R1Y3RHYWxsZXJ5UHJldmlldykge1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG5cclxuXHRcdFx0XHRcdGlmICggY291bnQgPT09IDEgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRvbjoge1xyXG5cdFx0XHRcdFx0XHRcdHNsaWRlQ2hhbmdlIDogKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmICggc3dpcGUucXVlcnlTZWxlY3RvckFsbCgndmlkZW8nKSApIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdEFycmF5LmZyb20oc3dpcGUucXVlcnlTZWxlY3RvckFsbCgndmlkZW8nKSwgdmlkZW8gPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2aWRlby5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2lzLXZpZGVvJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmlkZW8ucGF1c2UoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggY291bnQgPiA1ICkge1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlTmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGluaXRpYWxTbGlkZSA9IDAsXHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXcgPSA1LFxyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW4gPSAxNTtcclxuXHJcblx0XHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN3aXBlQ29udHJvbHMpO1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LmZyb20oaXRlbXMsIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1jdXJyZW50JykpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0aW5pdGlhbFNsaWRlID0gaW5kZXg7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgYm94ID0gc3dpcGUuY2xvc2VzdCgnLnN3aXBlci1nYWxsZXJ5LXByZXZpZXcnKSxcclxuXHRcdFx0XHRcdFx0ICBiaWcgPSBib3gucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1nYWxsZXJ5LXByZXZpZXdfX2JpZy1pdGVtJyk7XHJcblxyXG5cdFx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0c2xpZGVBY3RpdmVDbGFzczogJ2lzLWN1cnJlbnQnLFxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXcgOiBzbGlkZXNQZXJWaWV3LFxyXG5cdFx0XHRcdFx0XHRzcGFjZUJldHdlZW46IHNwYWNlQmV0d2VlbixcclxuXHRcdFx0XHRcdFx0c2xpZGVUb0NsaWNrZWRTbGlkZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0aW5pdGlhbFNsaWRlOiBpbml0aWFsU2xpZGUsXHJcblx0XHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRuZXh0RWw6IHN3aXBlTmV4dCxcclxuXHRcdFx0XHRcdFx0XHRwcmV2RWw6IHN3aXBlUHJldlxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRvbjoge1xyXG5cdFx0XHRcdFx0XHRcdHNsaWRlQ2hhbmdlIDogKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdEFycmF5LmZyb20oYmlnLCAoaXRlbSxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1oaWRlJywgc3dpcGUuc3dpcGVyLnJlYWxJbmRleCAhPT0gaW5kZXgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYoaXRlbS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpKXtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpLnBhdXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHRcdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdFx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDhcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogc2xpZGVzUGVyVmlldyxcclxuXHRcdFx0XHRcdFx0XHRcdHNwYWNlQmV0d2Vlbjogc3BhY2VCZXR3ZWVuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRQdWJTdWIuc3Vic2NyaWJlKCd3aW5kb3dXaWR0aFJlc2l6ZScsICgpID0+IHtcclxuXHJcblx0XHRcdGlmICh3aW5kb3cuU3dpcGVyICYmIHRvZ2dsZVN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnc3dpcGVySnNMb2FkJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0c3dpcGUuYXBwZW5kQ2hpbGQoc3dpcGVDb250cm9scyk7XHJcblxyXG5cdFx0XHQvLyBlYWdlclxyXG5cdFx0XHRBcnJheS5mcm9tKHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tsb2FkaW5nPVwibGF6eVwiXScpLCBpbWcgPT4gaW1nLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsJ2VhZ2VyJykpO1xyXG5cclxuXHRcdFx0Ly8gaGlkZVxyXG5cdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdFx0dG9nZ2xlU3dpcGUoKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRzY3JpcHQuc3JjID0gJy9qcy9zd2lwZXIubWluLmpzJztcclxuXHJcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IFB1YlN1Yi5wdWJsaXNoKCdzd2lwZXJKc0xvYWQnKTtcclxuXHJcblx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLCBDb29raWVzLmdldCgnZmFzdExvYWRTY3JpcHQnKSA/IDAgOiAxMDAwMCk7XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNvbnRhaW5lcicpKTsiXX0=
